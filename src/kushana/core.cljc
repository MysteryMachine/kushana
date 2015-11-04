(ns kushana.core
  (:require [clojure.data :refer [diff]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [taoensso.sente :as sente]
         #?@(:cljs
             [[kushana.impl.engine :as impl]
              [cljs.core.async :refer [<! >! put! chan] :as async]]
             :clj
             [[taoensso.sente.server-adapters.http-kit
               :refer (sente-web-server-adapter)]
              [clojure.core.async :refer [<! >! put! chan go-loop] :as async]]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go-loop]])))

(defrecord Scene [id scene-graph update-fn options])
(defrecord EngineConnection [input get post])
(defrecord TimeEvent    [tick])
(defrecord InputEvent   [input])
(defrecord NetworkEvent [event])

;; Ids
(defonce id-fns
  (let [counter (atom 0)]
    [(fn latest-id [] @counter)
     (fn new-id [] (swap! counter inc))]))
(def latest-id (first id-fns))
(def new-id (second id-fns))
(defn id-assoc [scene-graph component]
  (assoc scene-graph (new-id) component))
(defn with-ids [scene-graph & components]
  (loop [scene-graph (transient scene-graph)
         [component & components] components]
    (if component
      (recur (assoc! scene-graph (new-id) component) components)
      (persistent! scene-graph))))

;; Engine

(defn connect! []
  (sente/make-channel-socket! #?@(:cljs ["/chsk" {:type :auto}]
                                  :clj  [sente-web-server-adapter {}])))

(defn- event? [data]
  (let [event (:event data)]
    (and (some-> event  first (= :chsk/recv))
         (some-> event second first (= :server/event)))))

(defn- get-event-inner [{[_ [_ args]] :event}] args)

(defn- get-event [data]
  (if (event? data)
    (get-event-inner data)
    {}))

(defn- act [{:keys [update-fn] :as scene} event]
  (condp = (type event)
    TimeEvent    (update-fn scene event)
    InputEvent   (update-fn scene event)
    scene))

(defn time-chan [fps]
  (async/map #(TimeEvent. %) [(z/to-chan (time/fps fps))]))


(defn input-chan [in-ch]
  (async/map #(InputEvent. %) [in-ch]))

(defn event-chan [input-ch fps]
  (async/merge [(input-chan input-ch)
                (time-chan  fps)]))

(defn send-with! [send! input]
  (when send!
    (let [cleaned (dissoc input
                          :debug/input
                          :debug/ping
                          :debug/overview
                          :reload/logic
                          :reload/merge
                          :reload/scene)]
      (send! [:client/data cleaned]))))

;; Scene

(defn scene [scene-graph update-fn & {:as options}]
  (Scene. (new-id) scene-graph update-fn options))

(defn scene-chan [scene-atom input-ch fps]
  (let [event-ch (event-chan input-ch fps)
        out      (chan)]
    (go-loop [state @scene-atom]
      (let [in         (<! event-ch)
            next-state (act state in)]
        (reset! scene-atom next-state)
        (>! out next-state)
        (recur next-state)))
    out))

(defn- e-diff [id old new edit]
  (if-let [change (second (diff old new))]
    (conj! edit [id change])
    edit))

(defrecord Diff [new-scene? new edit delete])
(defn- δscene [latest-id]
  (fn [{osg :scene-graph :as old-scene} {nsg :scene-graph :as new-scene}]
   (let [i-f  (latest-id)
         new? (not= (:id old-scene) (:id new-scene))]
     (loop [i 0
            new  (transient [])
            edit (transient [])
            del  (transient [])]
       (if (> i i-f)
         (let [new'  (persistent! new)
               edit' (persistent! edit)
               del'  (persistent! del)]
           (Diff. new? new' edit' del'))
         (let [i'      (inc i)
               new-obj (get nsg i)
               old-obj (get osg i)
               old?    (:scene/component old-obj)
               new?    (:scene/component new-obj)
               edit?   (and old? new?)]
           (cond
             edit? (recur i' new (e-diff i old-obj new-obj edit) del)
             new?  (recur i' (conj! new [i new-obj]) edit del)
             old?  (recur i' new edit (conj! del i))
             :else (recur i' new edit del))))))))

(defn diff-loop [scene-atom input-ch options]
  (if-let [connection (:connection options)]
    #?(:clj
       (let [{:keys [ch-recv]} connection
             log-ch    (async/map (fn [a] (get-event a)) [ch-recv])
             merged-ch (async/merge [log-ch input-ch])
             scene-ch  (scene-chan scene-atom merged-ch (:fps options))
             diffn     (δscene latest-id)
             diff-ch   (chan)]
         (go-loop [last-scene {:scene-graph {}}]
           (let [next-scene (<! scene-ch)
                 next-diff  (diffn last-scene next-scene)]
             (>! diff-ch next-diff)
             (recur next-scene)))
         diff-ch)
       :cljs
       (let [{:keys [send-fn connected-uids ch-recv]} connection]
         (go-loop []
           (let [in (<! input-ch)]
             (when (= (type in) InputEvent)
               (send-fn in))
             (recur)))
         (async/map get-event [ch-recv])))
    #?(:clj (do
              (go-loop []
                (let [in (<! input-ch)]
                  (recur)))
              (chan))
       :cljs
       (let [scene-ch (scene-chan scene-atom input-ch (:fps options))
             diffn    (δscene latest-id)
             diff-ch  (chan)]
         (go-loop [last-scene {:scene-graph {}}]
           (enable-console-print!)
           (let [next-scene (<! scene-ch)
                 next-diff  (diffn last-scene next-scene)]
             (>! diff-ch next-diff)
             (recur next-scene)))
         diff-ch))))

;; Engine

(defn engine [scene-atom & {:as options}]
  (if-not (:fps options) (throw "Please provide an :fps option"))
  (let [{:keys [ajax-post-fn ajax-get-or-ws-handshake-fn
                send-fn connected-uids]} (:connection options)
        input-ch (chan)
        diff-ch (diff-loop scene-atom input-ch options)]
    #?(:clj  (go-loop []
               (let [next-diff (<! diff-ch)]
                 (doseq [uid @connected-uids]
                   (send-fn uid [:server/tick next-diff]))
                 (recur))))
    #?(:cljs (impl/draw! (impl/engine options) diff-ch))
    ;; TODO: maybe have specific frontend and backend
    ;; impls for this
    (EngineConnection. (fn [args] (put! input-ch args))
                       ajax-get-or-ws-handshake-fn
                       ajax-post-fn)))

;; Helpers

(defn v3 "Given an x, y, and z, returns a Vector3"
  [x y z] {:x x :y y :z z})
(defn c3 "Given an r, g, and b, returns a Color3"
  [r g b] {:r r :g g :b b})

(defn sin
  "arity 3: (sin t a b) => a*sin(t/b)\narity 1: (sin t) => sin(t)"
  ([t a b] (* a #?(:cljs (.sin js/Math (/ t b))
                   :clj  (Math/sin (/ t b))) (/ t b)))
  ([t] (sin t 1 1)))

(defn cos
  "arity 3: (cos t a b) => a*cos(t/b)\narity 1: (cos t) => cos(t)"
  ([t a b] (* a #?(:cljs (.cos js/Math (/ t b))
                   :clj  (Math/cos (/ t b)))))
  ([t] (sin t 1 1)))

(defn ->name
  "Given a (Scene or Scene Graph) and a name, returns the first entity in the scene-* that matches the name, inside a vector with its id, in the form [id entity]"
  [scene-* name]
  (if (= (type scene-*) Scene)
    (->name (:scene-graph scene-*) name)
    (some (fn [[id {next-name :name} :as obj]]
            (when (= name next-name) obj))
          scene-*)))

(defn overview
  "Given a scene, return a vector that contains all [id name] pairs for all entities in the scene's scene-graph."
  [scene] (map (fn [[id obj]] [id (:name obj)]) (:scene-graph scene)))

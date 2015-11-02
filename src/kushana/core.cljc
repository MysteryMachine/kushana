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

;; Scene

(defn scene [scene-graph update-fn & {:as options}]
  (Scene. (new-id) scene-graph update-fn options))

;; Engine

(defn connect! []
  (sente/make-channel-socket! #?@(:cljs ["/chsk" {:type :auto}]
                                  :clj  [sente-web-server-adapter {}])))

(defn- event? [data]
  (let [event (:event data)]
    (and (some-> event  first (= :chsk/recv))
         (some-> event second first (= :server-event)))))

(defn- get-event [{[_ [_ args]] :event}] args)

(defn test-network [scene event]
  scene)

(defn- act [{:keys [update-fn] :as scene} event]
  (condp = (type event)
    TimeEvent    (update-fn scene event)
    InputEvent   (update-fn scene event)
    NetworkEvent #?(:cljs (:event event)
                    :clj  (test-network scene event))
    scene))

(defn time-chan [fps]
  (async/map #(TimeEvent. %) [(z/to-chan (time/fps fps))]))

(defn driver-chan [options]
  #?(:cljs (time-chan (:fps options))
     :clj  (time-chan (:fps options))))

(defn input-chan [in-ch]
  (async/map #(InputEvent. %) [in-ch]))

(defn event-chan [input-ch options]
  (async/merge [(input-chan  input-ch)
                (driver-chan options)]))

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

(defn scene-chan [scene-atom input-ch send! options]
  (let [event-ch (event-chan input-ch options)
        send!    (:send-fn (:connection options))
        out      (chan)]
    (go-loop [state @scene-atom]
      (let [in         (<! event-ch)
            next-state (act state in)]
        (reset! scene-atom next-state)
        (send-with! send! (:input in))
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

(defn diff-loop [scene-ch]
  (let [diffn   (δscene latest-id)
        diff-ch (chan)]
    (go-loop [last-scene {:scene-graph {}}]
      #?(:cljs (enable-console-print!))
      (let [next-scene (<! scene-ch)
            next-diff  (diffn last-scene next-scene)]
        (>! diff-ch next-diff)
        (recur next-scene)))
    diff-ch))

(defn engine [scene-atom & {:as options}]
  (let [{:keys [ajax-post-fn ajax-get-or-ws-handshake-fn
                send-fn]} (:connection options)
        input-ch (chan)
        scene-ch (scene-chan scene-atom input-ch send-fn options)
        diff-ch  (diff-loop scene-ch)]
    #?(:cljs (impl/draw! (impl/engine options) diff-ch))
    (EngineConnection. (fn [args] (put! input-ch args))
                       ajax-get-or-ws-handshake-fn
                       ajax-post-fn)))

;; Helpers

(defn v3 [x y z] {:x x :y y :z z})
(defn c3 [r g b] {:r r :g g :b b})

(defn sin
  "arity 3: (sin t a b) => a*sin(t/b)
  arity 1: (sin t) => sin(t)"
  ([t a b] (* a #?(:cljs (.sin js/Math (/ t b))
                   :clj  (Math/sin (/ t b))) (/ t b)))
  ([t] (sin t 1 1)))

(defn cos
  "arity 3: (cos t a b) => a*cos(t/b)
  arity 1: (cos t) => cos(t)"
  ([t a b] (* a #?(:cljs (.cos js/Math (/ t b))
                   :clj  (Math/cos (/ t b)))))
  ([t] (sin t 1 1)))

(defn ->name [scene-* name]
  (if (= (type scene-*) Scene)
    (->name (:scene-graph scene-*) name)
    (some (fn [[id {next-name :name} :as obj]]
            (when (= name next-name) obj))
          scene-*)))

(defn overview [scene]
  (map (fn [[id obj]] [id (:name obj)]) (:scene-graph scene)))

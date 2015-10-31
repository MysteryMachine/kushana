(ns kushana.core
  (:require [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [taoensso.sente :as sente]
         #?@(:cljs
             [[kushana.impl.engine :as impl]
              [kushana.impl.scene :refer [update-js! δscene]]
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

(defn- act [{:keys [update-fn] :as scene} event]
  (condp = (type event)
    TimeEvent    (update-fn scene event)
    InputEvent   (update-fn scene event)
    NetworkEvent #?(:cljs (:event event) :clj scene)
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

(defn scene-chan [scene-atom input-ch send! options]
  (let [event-ch (event-chan input-ch options)
        send!   (:send-fn (:connection options))
        out     (chan)]
    (go-loop [state @scene-atom]
      (let [in         (<! event-ch)
            next-state (act state in)]
        (reset! scene-atom next-state)
        #_(when send! (send! [:client/data in]))
        (>! out next-state)
        (recur next-state)))
    out))

#?(:cljs
  (defn update-js-loop [eng scene-ch]
    (let [js-obj-atom (atom {})
          js-scene-atom (atom nil)
          update  (update-js! eng js-obj-atom)
          diffn   (δscene latest-id)
          diff-ch (chan)
          diff    (go-loop [last-scene {:scene-graph {}}]
                    (let [next-scene (<! scene-ch)
                          next-diff  (diffn last-scene next-scene)]
                      (>! diff-ch next-diff)
                      (recur next-scene)))]
      (go-loop [js-obj-graph {}]
        (let [next-diff (<! diff-ch)
              next-js-graph (update js-obj-graph next-diff)]
          (reset! js-scene-atom next-js-graph)
          (recur next-js-graph)))
      js-scene-atom)))

#?(:cljs
   (defn js-eng [scene-ch options]
     (let [eng (impl/engine options)]
       (impl/draw! eng (update-js-loop eng scene-ch))))
   :clj
   (defn physics-eng [scene-chan] nil))

(defn engine [scene-atom & {:as options}]
  (let [{:keys [ajax-post-fn ajax-get-or-ws-handshake-fn
                send-fn]} (:connection options)
        input-ch   (chan)
        scene-ch   (scene-chan scene-atom input-ch send-fn options)]
    #?(:cljs (js-eng scene-ch options)
       :clj  (physics-eng scene-ch))
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

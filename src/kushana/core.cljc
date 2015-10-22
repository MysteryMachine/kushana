(ns kushana.core
  (:require [clojure.core.async :refer
             [go-loop <! >! put! chan] :as async]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [taoensso.sente :as sente]
         #?@(:cljs
           [[clojure.data :refer [diff]]
            [kushana.impl.engine :as impl]
            [kushana.impl.scene :refer [update-js! δscene]]]
             :clj
           [[taoensso.sente.server-adapters.http-kit
             :refer (sente-web-server-adapter)]])))

(defrecord Scene [id scene-graph update-fn options])

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

(defn- act [send!]
  (fn [{:keys [update-fn] :as scene} input]
    #?(:cljs
       (let [input' (dissoc input :dt :server/event :reload/logic :reload/scene)]
        (if (not (empty? input')) (send! [:kushana/input input']))))
    (update-fn scene input)))

(defn- event? [data]
  (let [event (:event data)]
    (and (some-> event  first (= :chsk/recv))
         (some-> event second first (= :server-event)))))

(defn- get-event [{[_ [_ args]] :event}] args)

(defn- socket-signal [Δt recieve]
  #?(:cljs
     (if recieve
       (let [start {:event [nil [nil {}]]}
             input   (z/input start get-event recieve)
             input'  (z/keep-if event? input)
             input'' (z/map get-event input')]
         (z/merge input'' Δt))
       (z/constant {}))
     :clj
     (z/constant {})))

(defrecord EngineConnection [input get post])

(defn engine [a-scene & {:as options}]
  (let [{:keys [ch-recv send-fn connected-uids
                ajax-get-or-ws-handshake-fn
                ajax-post-fn]} (:connection options)
        input   (chan)
        Δt      (z/map (fn [δ] {:dt δ}) (time/fps (:fps options)))
        δinput  (z/merge (z/input {} identity input) Δt)
        Δsocket (socket-signal Δt ch-recv)
        Δinput  (z/map merge  Δt δinput Δsocket)
        Δscene  (z/reductions (act send-fn) @a-scene Δinput)]
    #?(:cljs
       (let [options   (dissoc options :recive :send)
             jseng     (impl/engine options)
             a-jsobj   (atom {})

             Δdiff   (z/reductions δscene {:scene-graph {}} Δscene)
             Δjs     (z/reductions (update-js! jseng a-jsobj) nil Δdiff)]
         (impl/draw! jseng (z/pipe-to-atom Δjs))))
    (z/pipe-to-atom Δscene a-scene)
    (EngineConnection. input ajax-get-or-ws-handshake-fn ajax-post-fn)))

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

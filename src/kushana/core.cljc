#?(:clj
(ns kushana.core
  (:require [clojure.core.async :refer
             [go-loop <! >! put!] :as async]
            #_[jamesmacaulay.zelkova.signal :as z]
            #_[jamesmacaulay.zelkova.time :as time]))
   :cljs
(ns kushana.core
  (:require [cljs.core.async :refer [chan put!]]
            [clojure.data :refer [diff]]
            [taoensso.sente :as sente]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [kushana.impl.engine :as impl]
            [kushana.impl.scene :refer [update-js!]])))

;; Data

(defrecord Diff [scene new-scene? new edit delete])
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

#?(:cljs
(defn server-connection! []
  (let [{:keys [ch-recv send-fn] :as sente-info}
        (sente/make-channel-socket! "/chsk" {:type :auto})]
    {:recieve ch-recv :send send-fn})))

#?(:cljs
(defn- e-diff [id old new edit]
  (if-let [change (second (diff old new))]
    (conj! edit [id change])
    edit)))

#?(:cljs
(defn- δscene
  [{{osg :scene-graph :as old-scene} :scene} {nsg :scene-graph :as new-scene}]
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
          (Diff. new-scene new? new' edit' del'))
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

(defn- act [send!]
  (fn [{:keys [update-fn] :as scene} input]
    #?(:cljs
       (let [input' (dissoc input :dt :server/event :reload/logic :reload/scene)]
        (if (not (empty? input')) (send! [:kushana/input input']))))
    (update-fn scene input)))

; TODO: Fix this monstrosity
(defn- event? [data]
  (if-let [event (:event data)]
    (if-let [chsk-type (first event)]
      (if-let [e-type (first (second event))]
        (and (= :chsk/recv chsk-type)
             (= :server/event e-type))
        false)
      false)
    false))

(defn- get-event [{[a [b args]] :event}] args)

#?(:cljs
(defn- server-signal [Δt recieve]
  (if recieve
    (let [start {:event [nil [nil {}]]}
          input   (z/input start get-event recieve)
          input'  (z/keep-if event? input)
          input'' (z/map get-event input')]
      (z/merge input'' Δt))
    (z/constant {}))))

#?(:cljs
(defn engine [a-scene & {:as options}]
  (let [{:keys [recieve send]} (:server options)
        options   (dissoc options :recive :send)
        jseng     (impl/engine options)
        input     (chan)
        a-jsobj   (atom {})
        Δt      (z/map (fn [δ] {:dt δ}) (time/fps (:fps options)))
        δinput  (z/merge (z/input {} identity input) Δt)
        Δserver (server-signal Δt recieve)
        Δinput  (z/map merge  Δt δinput Δserver)
        Δscene  (z/reductions (act send) @a-scene Δinput)
        Δdiff   (z/reductions δscene {:scene-graph {}} Δscene)
        Δjs     (z/reductions (update-js! jseng a-jsobj) nil Δdiff)]
    (impl/draw! jseng (z/pipe-to-atom Δjs))
    (z/pipe-to-atom Δscene a-scene)
    (fn [a] (put! input a))))
   :clj
   (defn engine [recieve send uids state fps]
     nil
     #_(let [Δt      (z/map (fn [δ] {:dt δ}) (time/fps fps))
           Δinput  (z/merge (z/input {} identity recieve) Δt)
           Δscene  (z/reductions (act send uids) @state Δinput)]
       (z/pipe-to-atom Δscene state)
       (fn [a] (put! receive a)))))

;; Helpers

(defn v3 [x y z] {:x x :y y :z z})
(defn c3 [r g b] {:r r :g g :b b})

#?(:cljs
(defn sin
"arity 3: (sin t a b) => a*sin(t/b)
arity 1: (sin t) => sin(t)"
  ([t a b] (* a (.sin js/Math (/ t b))))
  ([t] (sin t 1 1))))

#?(:cljs
(defn cos
"arity 3: (cos t a b) => a*cos(t/b)
arity 1: (cos t) => cos(t)"
  ([t a b] (* a (.cos js/Math (/ t b))))
  ([t] (sin t 1 1))))

(defn ->name [scene-* name]
  (if (= (type scene-*) Scene)
    (->name (:scene-graph scene-*) name)
    (some (fn [[id {next-name :name} :as obj]]
            (when (= name next-name) obj))
          scene-*)))

(defn overview [scene]
  (map (fn [[id obj]] [id (:name obj)]) (:scene-graph scene)))

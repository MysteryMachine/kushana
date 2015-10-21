(ns kushana.engine
  (:require [cljs.core.async :refer [chan put!]]
            [clojure.data :refer [diff]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [kushana.scene :as scene :refer [update-js!]]
            [kushana.impl.engine :as impl]))

(defrecord Diff [scene new-scene? new edit delete])

(defn e-diff [id old new edit]
  (if-let [change (second (diff old new))]
    (conj! edit [id change])
    edit))

(defn- δscene
  [{{osg :scene-graph :as old-scene} :scene} {nsg :scene-graph :as new-scene}]
  (let [i-f  (scene/latest-id)
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
            :else (recur i' new edit del)))))))

(defn- act [send!]
  (fn [{:keys [update-fn] :as scene} input]
    (let [input' (dissoc input :dt :server/event :reload/logic :reload/scene)]
      (if (not (empty? input')) (send! [:kushana/input input'])))
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

(defn server-signal [Δt recieve]
  (if recieve
    (let [start {:event [nil [nil {}]]}
          input   (z/input start get-event recieve)
          input'  (z/keep-if event? input)
          input'' (z/map get-event input')]
      (z/merge input'' Δt))
    (z/constant {})))

(defn new [a-scene & {:as options}]
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

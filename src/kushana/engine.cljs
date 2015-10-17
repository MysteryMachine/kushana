(ns kushana.engine
  (:require [cljs.core.async :refer [chan]]
            [clojure.data :refer [diff]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [kushana.scene :as scene :refer [update-js!]]
            [kushana.impl.engine :as impl]))

(defrecord Diff [transition new edit delete])

(defn e-diff [id old new]
  [id (second (diff old new))])

(defn- δscene
  [{osg :scene-graph :as old-scene} {nsg :scene-graph :as new-scene}]
  (let [i-f  (scene/latest-id)
        transition (when (not= (:id old-scene) (:id new-scene)) new-scene)]
    (loop [i 0
           new  (transient [])
           edit (transient [])
           del  (transient [])]
      (if (> i i-f)
        (Diff. transition (persistent! new) (persistent! edit) (persistent! del))
        (let [i'      (inc i)
              new-obj (get nsg i)
              old-obj (get osg i)
              old?    (:scene/component old-obj)
              new?    (:scene/component new-obj)
              edit?   (and old? new?)]
          (cond
            edit? (recur i' new (conj! edit (e-diff i old-obj new-obj)) del)
            new?  (recur i' (conj! new [i new-obj]) edit del)
            old?  (recur i' new edit (conj! del i))
            :else (recur i' new edit del)))))))

(defn act [{:keys [update-fn] :as scene} input] (update-fn scene input))

(defn new [a-scene & { :as options}]
  (let [jseng     (impl/engine options)
        a-jsobj   (atom {})
        c-input   (chan)
        Δt     (time/fps (:fps options))
        Δinput (z/merge
                (z/input [:none] identity c-input)
                (z/map vector (z/constant :tick) Δt))
        Δscene (z/reductions act @a-scene Δinput)
        Δdiff  (z/reductions δscene {:scene-graph {}} Δscene)
        Δjs    (z/reductions (update-js! jseng a-jsobj) nil Δdiff)]
    (impl/draw! jseng (z/pipe-to-atom Δjs))
    (z/pipe-to-atom Δscene a-scene)
    (when (:debug options) c-input)))

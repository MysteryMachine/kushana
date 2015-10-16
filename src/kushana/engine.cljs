(ns kushana.engine
  (:require [cljs.core.async :refer [chan put!]]
            [clojure.set :refer [difference intersection]]
            [clojure.data :refer [diff]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [kushana.scene :as scene]
            [kushana.impl.engine :as impl]))

(defrecord Diff [scene new? new-ids edit-ids delete-ids])

(defn- new-scene-diff [scene]
  (let [scene-graph (:scene-graph scene)
        ids (keys scene-graph)]
    (Diff. scene true ids [] [])))

(defn- normal-diff [new-scene old-scene]
  ;; Obscenely slow! Just a sloppy implementation for now.
  (let [new-scene-graph (:scene-graph new-scene)
        old-scene-graph (:scene-graph old-scene)
        new-scene-keys (set (keys new-scene-graph))
        old-scene-keys (set (keys old-scene-graph))
        new-keys (difference new-scene-keys old-scene-keys)
        deleted-keys (difference old-scene-keys new-scene-keys)
        edited-keys (intersection old-scene-keys new-scene-keys)]
    (Diff. new-scene false new-keys edited-keys deleted-keys)))

(defn- better-diff [{old-scene :scene} new-scene]
  (let [[del new edit] (diff (keys (:scene-graph old-scene))
                             (keys (:scene-graph new-scene)))]
    (println del new edit)
    (Diff. new-scene false new edit del)))

(defn- diffo [{old-scene :scene} new-scene]
  (if (= (:id new-scene) (:id old-scene))
    (normal-diff new-scene old-scene)
    (new-scene-diff new-scene)))

(defn act [{:keys [update-fn] :as scene} input]
  (update-fn scene input))

(defn new [scene-atom & { :as options}]
  (let [js-engine (impl/engine options)
        object-graph (atom {})
        scene @scene-atom
        input (chan)
        dt (time/fps 25)
        input-signal
        (z/merge
         (z/input [:none] identity input)
         (z/map vector (z/constant :tick) dt))
        scene-graph-signal
        (z/reductions act scene input-signal)
        diff-signal
        (z/reductions diffo (Diff. nil nil [] [] []) scene-graph-signal)
        js-scene-signal
        (z/reductions (scene/update-js! js-engine object-graph) nil diff-signal)]
    (z/pipe-to-atom scene-graph-signal scene-atom)
    (impl/draw js-engine (z/pipe-to-atom js-scene-signal))
    (when (:debug options) input)))

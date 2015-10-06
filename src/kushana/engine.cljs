(ns kushana.engine
  (:require [cljs.core.async :refer [chan]]
            [clojure.set :refer [difference intersection]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [kushana.scene :as scene]
            [kushana.impl.engine :as impl]))

(defrecord Diff [scene new? new-ids edit-ids delete-ids])

(defn- chan->input [init filter chan dt]
  (z/sample-on
   dt
   (z/merge (z/drop-repeats (z/sample-on dt (z/input init filter chan)))
            (z/sample-on dt (z/constant init)))))
 
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

(defn- diff [{old-scene :scene} new-scene]
  (if (= (:id new-scene) (:id old-scene))
    (normal-diff new-scene old-scene)
    (new-scene-diff new-scene)))

(defn act [{:keys [update-fn] :as scene} input]
  (update-fn scene input))

(defn new [scene-atom & { :as options}]
  (let [js-engine (impl/engine options)
        scene @scene-atom
        input (chan)
        dt (time/fps 30)
        input-signal
        (chan->input :none identity input dt)
        scene-graph-signal
        (z/reductions act scene input-signal)
        diff-signal
        (z/reductions diff (Diff. nil nil [] [] []) scene-graph-signal)
        js-scene-signal
        (z/reductions (scene/update-js! js-engine) nil diff-signal)]
    (z/pipe-to-atom scene-graph-signal scene-atom)
    (impl/draw js-engine (z/pipe-to-atom js-scene-signal))
    input))


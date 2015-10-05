(ns kushana.engine
  (:require [cljs.core.async :refer [chan]]
            [clojure.set :refer [difference intersection]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [kushana.component :refer [build-scene!]]
            [kushana.impl.engine :as impl]))

(enable-console-print!)

(defn- chan->input [k chan dt]
  (z/merge (z/input k identity chan)
           (z/sample-on dt (z/constant [:none]))))

(defn- diff [new-scene old-scene]
  ;; Obscenely slow! Just a sloppy implementation for now.
  (if (or (not (= new-scene old-scene))
          (= (:id new-scene) (:id old-scene)))
    (let [new-scene-graph (:scene-graph new-scene)
          old-scene-graph (:scene-graph old-scene)
          new-scene-keys (set (keys new-scene-graph))
          old-scene-keys (set (keys old-scene-graph))
          new-keys (difference new-scene-keys old-scene-keys)
          deleted-keys (difference old-scene-keys new-scene-keys)
          edited-keys (intersection old-scene-keys new-scene-keys)]
      [new-keys edited-keys deleted-keys])
    new-scene))

(defn differ [new-scene [old-scene _]]
  [new-scene (diff new-scene old-scene)])

(defn act [{:keys [update-fn scene-graph] :as scene}]
  (assoc scene :scene-graph (update-fn scene-graph)))

(defn new [scene-atom & { :as options}]
  (let [js-engine (impl/engine options)
        input (chan)
        dt (time/fps 30)
        input-signal
        (->>
         (z/input (chan->input :input input dt))
         (z/sample-on dt))
        scene-graph-signal
        (z/reductions act @scene-atom input-signal)
        diff-signal
        (z/reductions differ [@scene-atom [@scene-atom nil]] scene-graph-signal)
        js-scene-signal
        (z/reductions (build-scene! js-engine) nil diff-signal)]
    (z/pipe-to-atom scene-graph-signal scene-atom)
    (impl/draw js-engine (z/pipe-to-atom js-scene-signal))))


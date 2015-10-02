(ns kushana.engine
  (:require [cljs.core.async :refer [chan]]
            [clojure.set :refer [difference intersection]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [kushana.impl.component :refer [build-scene!]]
            [kushana.impl.engine :as impl]))

(defn- chan->input [k chan dt]
  (z/merge (z/input k identity chan)
           (z/sample-on dt (z/constant [:none]))))

(defn- diff [new-scene old-scene]
  ;; Obscenely slow! Just a sloppy implementation for now.
  (let [new-scene-keys (set (keys new-scene))
        old-scene-keys (set (keys old-scene))
        new-keys (difference new-scene-keys old-scene-keys)
        deleted-keys (difference old-scene-keys new-scene-keys)
        edited-keys (intersection old-scene-keys new-scene-keys)]
      [new-keys edited-keys deleted-keys]))

(defn differ [new-scene [old-scene _]]
  [new-scene (diff new-scene old-scene)])

(defn new [scene-graph & { :as options}]
  (let [js-engine (impl/engine options)
        js-scene-atom (atom nil)
        input (chan)
        dt (time/fps 30)
        scene-graph-signal
        (->
         (z/input (chan->input :input input dt))
         (z/sample-on dt)
         (z/reductions (:update @scene-graph) @scene-graph))
        diff-signal
        (z/reductions scene-graph-signal differ @scene-graph)
        js-scene-signal
        (z/map diff-signal
               (build-scene! js-scene-atom)
               @js-scene-atom)]
    (z/pipe-to-atom scene-graph-signal scene-graph)
    (z/pipe-to-atom js-scene-signal js-scene-atom)
    (impl/draw js-engine js-engine)))

(ns kushana.engine
  (:require [cljs.core.async :refer [chan]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [kushana.impl.component :refer [build-scene!]]
            [kushana.impl.engine :as impl]))

(defn- chan->input [k chan dt]
  (z/merge (z/input k identity chan)
           (z/sample-on dt (z/constant [:none]))))

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
        js-scene-signal
        (z/map scene-graph-signal (build-scene! js-scene-atom) @js-scene-atom)]
    (z/pipe-to-atom scene-graph-signal scene-graph)
    (z/pipe-to-atom js-scene-signal js-scene-atom)
    (impl/draw js-engine js-engine)))

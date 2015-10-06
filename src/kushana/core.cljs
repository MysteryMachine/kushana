(ns ^:figwheel-always kushana.core
  (:require [kushana.engine :as engine]
            [kushana.scene :refer [with-ids]]
            [cljs.core.async :refer [put!]])
  (:use-macros [kushana.scene :only [defscene]]))

(defscene scene
  (with-ids
    [[:light/hemispheric
      :name "light1"
      :direction [0 1 0]
      :intensity 1]
     [:mesh/sphere
      :name "sphere1"
      :segments 16
      :diameter 2
      :position [0 1 0]]
     [:mesh/ground
      :name "ground1"
      :width 6
      :height 6
      :rotation [0 0 0]
      :subdivisions 2]
     [:camera/free
      :name "camera1"
      :set-target [0 0 0]
      :position [0 5 -10]
      :attach-control ["renderCanvas" true]]])
  (fn [scene-graph input]
    (if (= (first input) :new-scene)
      (second input)
      scene-graph))
  :clearColor [0.2 0.3 0.4])

(defonce engine
  (engine/new
   scene
   :canvas "renderCanvas"
   :antialias true
   :resize true))

(defn on-js-reload [] 
  (put! engine [:new-scene scene]))

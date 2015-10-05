(ns ^:figwheel-always kushana.core
  (:require [kushana.engine :as engine]
            [kushana.scene :refer [with-ids]])
  (:use-macros [kushana.scene :only [defscene]]))

(enable-console-print!)

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
      :subdivisions 2]
     [:camera/free
      :name "camera1"
      :set-target [0 0 0]
      :direction [0 5 -10]
      :attach-control ["renderCanvas" true]]])
  (fn [scene-graph]
    scene-graph)
  :clear-color [0.8 0.8 0.8])

(defonce game-state (atom scene))
 
(defonce engine
  (engine/new
   game-state
   :canvas "renderCanvas"
   :antialias true
   :resize true))

(defn on-js-load [])

(ns ^:figwheel-always kushana.core
    (:require [kushana.scene :as scene]
              [kushana.vector :refer [vector3 vector3-zero]]
              [kushana.color :refer [color3]]
              [kushana.camera :as camera]
              [kushana.light :as light]
              [kushana.mesh :as mesh]
              [kushana.engine :as engine]) 
    (:use-macros [kushana.scene :only [defscene]]))

(enable-console-print!)

(def canvas (engine/canvas "renderCanvas"))
(def engine (engine/new canvas true :resize true))

(defscene scene
  (scene/new engine
    :clear-color (color3 0.5 0.5 0.5)) 
  (light/hemispheric "light1" 
    :direction (vector3 0 1 0))
  (mesh/sphere "Sphere1"
    :segments 16
    :diameter 2
    :position {:y 1})
  (mesh/ground "ground1" 
    :width 6 
    :height 6 
    :subdivisions 2)
  (camera/free "camera1"
    :set-target vector3-zero 
    :position (vector3 0 5 -10)
    :attach-control [canvas false])) 

(engine/render-scene engine scene)

(defn on-js-load [])

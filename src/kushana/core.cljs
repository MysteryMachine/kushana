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
  (light/hemispheric "light1" (vector3 0 1 0))
  (mesh/sphere "Sphere1" 16 2
    :position {:y 1})
  (mesh/ground "ground1" 6 6 2)  
  (camera/free "camera1" (vector3 0 5 -10)
    :set-target vector3-zero
    :attach-control [canvas false]))

(defn on-js-reload [] (engine/render-scene engine scene))

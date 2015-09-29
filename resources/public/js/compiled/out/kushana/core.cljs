(ns ^:figwheel-always kushana.core
    (:use [kushana.scene :only [scene]]
          [kushana.vector :only [v3]]
          [kushana.camera :only [free-camera]]
          [kushana.light :only [hemispheric-light]]
          [kushana.mesh :only [ground sphere]]
          [kushana.color :only [c3]]) 
    (:use-macros [kushana.scene :only [in-scene]])
    (:require babylon))

(enable-console-print!)
(def babel js/BABYLON)

(def canvas (.getElementById js/document "renderCanvas"))
(def engine
  (let [engine (babel.Engine. canvas true)]
    (.addEventListener js/window "resize" #(.resize engine))
    engine))

(defn make-scene []
  (doto 
    (scene engine
      :clear-color (c3 0.5 0.5 0.5)) 
    (hemispheric-light "light1" (v3 0 1 0))
    (sphere "Sphere1" 16 2
      :position {:y 1})
    (ground "ground1" 6 6 2) 
    (free-camera "camera1" (v3 0 3 -15)
      :target (v3 0 0 0)
      :attach-control [canvas false])))

(defn render-game []
  (let [my-scene (make-scene)] 
    (.runRenderLoop engine (fn [] (.render my-scene)))))

(def on-js-reload render-game) 
(render-game)

(ns kushana.scene
  (:require babylon))
(def babel js/BABYLON)

(defn- set-options! [scene options]
  (when options
    (when-let [clear-color (:clear-color options)]
      (set! scene.clearColor clear-color)))
   scene)

(defn scene [engine & {:as options}] 
  (set-options! (babel.Scene. engine) options))
(def new scene)

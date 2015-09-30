(ns kushana.scene
  (:require babylon))
(def babel js/BABYLON)

(defn- set-options! [scene options]
  (when options
    (when-let [clear-color (:clear-color options)]
      (set! scene.clearColor clear-color)))
   scene)

(defrecord Scene [engine state js-obj])

(defn scene [engine state & {:as options}] 
  (let [js-obj (set-options! (babel.Scene. engine) options)]
    (Scene. engine state js-obj)))
(def new scene)

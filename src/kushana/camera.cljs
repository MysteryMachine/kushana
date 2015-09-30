(ns kushana.camera
  (:require babylon
            [kushana.vector :refer [v3-zero]]
            [kushana.component :refer [set-standard-vectors!]]))
(def babel js/BABYLON)

(enable-console-print!)

(defn- set-options! [camera options]
  (when options
    (set-standard-vectors! camera options)
    (when-let [target (:set-target options)] (.setTarget camera target))
    (when-let [[canvas β] (:attach-control options)] 
     (.attachControl camera canvas β)))
  camera)

(defn free [scene name & {:as options}] 
  (set-options! (babel.FreeCamera. name v3-zero scene) options))

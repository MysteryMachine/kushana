(ns kushana.light
  (:require babylon
            [kushana.vector :refer [v3-zero]]
            [kushana.component :refer [set-vectors!]]))
(def babel js/BABYLON)

(defn set-options! [light options]
  (when options
    (set-vectors! light options ["direction"]))
  light)

(defn hemispheric [scene name & {:as options}] 
  (set-options! (babel.HemisphericLight. name v3-zero scene) options))
 

(ns kushana.light
  (:require babylon
            [kushana.vector :refer [v3zero -v3]]
            [kushana.component :refer [set-options!]]))
(def babel js/BABYLON)

(defn hemispheric [scene name & {:as options}] 
  (set-options! (babel.HemisphericLight. name (-v3 {:x 0 :y 0 :z 0}) scene) options))
 

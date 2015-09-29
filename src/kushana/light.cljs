(ns kushana.light
  (:require babylon))
(def babel js/BABYLON)

(defn hemispheric-light [scene name location] 
  (babel.HemisphericLight. name location scene))

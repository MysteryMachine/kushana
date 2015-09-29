(ns kushana.light
  (:require babylon))
(def babel js/BABYLON)

(defn hemispheric [scene name location] 
  (babel.HemisphericLight. name location scene))

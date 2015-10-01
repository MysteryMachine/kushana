(ns kushana.impl.light
  (:require babylon))
(def babel js/BABYLON)

(defn hemispheric [name vector scene] 
  (babel.HemisphericLight. name v3zero scene))

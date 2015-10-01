(ns kushana.impl.camera
  (:require babylon))
(def babel js/BABYLON)

(defn free [name vector scene] (babel.FreeCamera. name vector scene))

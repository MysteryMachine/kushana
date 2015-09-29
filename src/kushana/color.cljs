(ns kushana.color
  (:require babylon))
(def babel js/BABYLON)

(defn color3 [r g b] (babel.Color3. r g b))
(def c3 color3)

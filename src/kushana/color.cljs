(ns kushana.color
  (:require babylon))
(def babel js/BABYLON)

(defn c3 [r g b] (babel.Color3. r g b))

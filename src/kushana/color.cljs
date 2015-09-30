(ns kushana.color
  (:require babylon))
(def babel js/BABYLON)

(defrecord Color3 [r g b])
(defn -c3 [{:keys [r g b]}] (babel.Color3. r g b))

(ns kushana.vector
  (:require [kushana.impl.vector :as impl]))

(defn vector2 [x y] (impl/vector2 x y))
(defn vector3 [x y z] (impl/vector3 x y z))
(defn vector4 [x y z w] (impl/vector4 x y z w))

(def v2zero (vector2 0 0))
(def v3zero (vector3 0 0 0))
(def v4zero (vector4 0 0 0 0))

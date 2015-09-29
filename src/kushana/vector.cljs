(ns kushana.vector
  (:require babylon))
(def babel js/BABYLON)

(defn vector2 [x y] (babel.Vector2. x y))
(defn vector3 [x y z] (babel.Vector3. x y z))
(defn vector4 [x y z θ] (babel.Vector4. x y z θ))

(def v2 vector2)
(def v3 vector3)
(def v4 vector4)

(def vector2-zero (vector2 0 0))
(def vector3-zero (vector3 0 0 0))
(def vector4-zero (vector4 0 0 0 0))
(def v2-zero vector2-zero)
(def v3-zero vector3-zero)
(def v4-zero vector4-zero)

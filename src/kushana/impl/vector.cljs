(ns kushana.impl.vector
  (:require babylon))
(def babel js/BABYLON)

(defn vector2 [x y] (babel.Vector2. x y))
(defn vector3 [x y z] (babel.Vector3. x y z))
(defn vector4 [x y z w] (babel.Vector4. x y z w))

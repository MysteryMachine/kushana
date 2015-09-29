(ns kushana.vector
  (:require babylon))
(def babel js/BABYLON)

(defn v2 [x y] (babel.Vector2. x y))
(defn v3 [x y z] (babel.Vector3. x y z))
(defn v4 [x y z θ] (babel.Vector4. x y z θ))

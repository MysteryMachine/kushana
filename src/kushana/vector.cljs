(ns kushana.vector
  (:require babylon))
(def babel js/BABYLON)

(defn -v2 [{:keys [x y]}] (babel.Vector2. x y))
(defn -v3 [{:keys [x y z]}] (babel.Vector3. x y z))
(defn -v4 [{:keys [x y z w]}] (babel.Vector4. x y z w))

(defrecord Vector2 [x y])
(defrecord Vector3 [x y z])
(defrecord Vector4 [x y z w])

(def v2zero (Vector2. 0 0))
(def v3zero (Vector3. 0 0 0))
(def v4zero (Vector4. 0 0 0 0))

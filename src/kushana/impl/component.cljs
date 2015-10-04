(ns kushana.impl.component
  (:require babylon))
(def b js/BABYLON)

(enable-console-print!)

(defn free-camera [[scene {:keys [name position]}]]
  (println "free-camera")
  (b.FreeCamera. name position scene))

(defn hemispheric-light [[scene {:keys [name direction]}]]
  (println "hemilight")
  (b.HemisphericLight. name direction scene))

(defn sphere [[scene { :keys [name segments diameter]}]]
  (println "sphere")
  (b.Mesh.CreateSphere. name segments diameter scene))
(defn ground [[scene {:keys [name width height subdivisions]}]]
  (println "ground")
  (b.Mesh.CreateGround. name width height subdivisions scene))

(defn v2 [[x y]]  (b.Vector2. x y))
(defn v3 [[x y z]] (println "v3") (b.Vector3. x y z))
(defn v4 [[x y z w]] (b.Vector4. x y z w))
(defn c3 [[r g _b]] (println "c3") (b.Color3. r g _b))

(defn dispose [obj] (.dispose obj))

(defn scene [engine] (b.Scene. engine))

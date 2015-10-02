(ns kushana.impl.component
  (:require babylon))
(def b js/BABYLON)

(defn- free-camera [name vector scene] (b.FreeCamera. name vector scene))

(defn- hemispheric-light [name vector scene] 
  (b.HemisphericLight. name v3zero scene))

(defn- c3 [[r g _b]] (b.Color3. r g _b))

(defn- sphere [name segments diameter scene]
  (b.Mesh.CreateSphere name segments diameter scene))
(defn- ground [name width height subdivisions scene]
  (b.Mesh.CreateGround name width height subdivisions scene))

(defn- v2 [[x y]] (b.Vector2. x y))
(defn- v3 [[x y z]] (b.Vector3. x y z))
(defn- v4 [[x y z w]] (b.Vector4. x y z w))

(ns kushana.impl.component
  (:require babylon))
(def b js/BABYLON)

(defn free-camera [scene {:keys [name position]}]
  (b.FreeCamera. name position scene))

(defn hemispheric-light [scene {:keys [name direction]}]
  (b.HemisphericLight. name direction scene))

(defn sphere [scene {:keys [name segements diamter]}]
  (b.Mesh.CreateSphere name segments diameter scene))
(defn ground [scene {:keys [name width height subdivisions]}]
  (b.Mesh.CreateGround name width height subdivisions scene))

(defn v2 [[x y]] (b.Vector2. x y))
(defn v3 [[x y z]] (b.Vector3. x y z))
(defn v4 [[x y z w]] (b.Vector4. x y z w))

(defn c3 [[r g _b]] (b.Color3. r g _b))

(defn dispose [obj] (.dispose obj))

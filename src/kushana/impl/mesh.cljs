(ns kushana.impl.mesh
  (:require babylon))
(def babel js/BABYLON)

(defn sphere [name segments diameter scene]
  (babel.Mesh.CreateSphere name segments diameter scene))

(defn ground [name width height subdivisions scene]
  (babel.Mesh.CreateGround name width height subdivisions scene))

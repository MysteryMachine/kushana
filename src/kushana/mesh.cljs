(ns kushana.mesh
  (:require babylon
            [kushana.component :refer [set-standard-vectors!]]))
(def babel js/BABYLON)

(defn- set-options! [mesh options]
  (when options
    (set-standard-vectors! mesh options)
    (when-let [parent (:parent options)] (set! mesh.parent parent)))
  mesh)

(defn sphere [scene name & {:as options}] 
  (set-options! (babel.Mesh.CreateSphere. name 0 0 scene) options))

(defn ground [scene name x y z & {:as options}] 
  (set-options! (babel.Mesh.CreateGround. name 0 0 0 scene) options)) 

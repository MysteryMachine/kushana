(ns kushana.mesh
  (:require babylon))
(def babel js/BABYLON)

(defn- set-vec! [vec options]
  (if options
    (let [{:keys [x y z]} options]
      (when x (set! vec.x x))
      (when y (set! vec.y y))
      (when z (set! vec.z z)))))

(defn- set-options! [mesh options]
  (when options
    (set-vec! mesh.position (:position options))
    (set-vec! mesh.rotation (:rotation options))
    (set-vec! mesh.scaling  (:scaling options))
    (when-let [parent (:parent options)] (set! mesh.parent parent)))
  mesh)

(defn sphere [scene name w h & {:as options}] 
  (set-options! (babel.Mesh.CreateSphere. name w h scene) options))

(defn ground [scene name x y z & {:as options}] 
  (set-options! (babel.Mesh.CreateGround. name x y z scene) options))

(ns kushana.camera
  (:require babylon))
(def babel js/BABYLON)

(defn- set-options! [camera options]
  (when options
    (when-let [target (:set-target options)] (.setTarget camera target))
    (when-let [[canvas β] (:attach-control options)] 
      (.attachControl camera canvas β)))
  camera)

(defn free-camera [scene name location & {:as options}] 
  (set-options! (babel.FreeCamera. name location scene) options))

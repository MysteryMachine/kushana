(ns kushana.mesh
  (:require babylon
            [kushana.component :refer [set-options!]]))
(def babel js/BABYLON)

(defn sphere [{state :state scene :js-obj} name & {:as options}] 
  (set-options! 
   (babel.Mesh.CreateSphere. name 
                             (:segments options)
                             (:diameter options)
                             scene) 
   options))

(defn ground [{state :state scene :js-obj} name & {:as options}] 
  (set-options! 
   (babel.Mesh.CreateGround. name 
                             (:width options)
                             (:height options)
                             (:subdivisions options)
                             scene) 
   options))  

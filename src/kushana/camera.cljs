(ns kushana.camera
  (:require babylon
            [kushana.vector :refer [-v3]]
            [kushana.component :refer [set-options!]]))
(def babel js/BABYLON)

(defn free [{state :state scene :js-obj} name & {:as options}] 
  (set-options! (babel.FreeCamera. name (-v3 {:x 0 :y 0 :z 0}) scene) options))

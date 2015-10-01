(ns kushana.camera
  (:require [kushana.impl.camera :as impl]
            [kushana.vector :refer [vector3]]
            [kushana.component :refer [set-options!]]))

(defn free [{state :state scene :js-obj} name & {:as options}] 
  (set-options! (impl/free name (vector3 0 0 0) scene) options))

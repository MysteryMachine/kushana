(ns kushana.light
  (:require [kushana.impl.light :as impl]
            [kushana.vector :refer [v3zero]]
            [kushana.component :refer [set-options!]]))

(defn hemispheric [{state :state scene :js-obj} name & {:as options}] 
  (set-options! (impl/hemispheric name v3zero scene) options))
 

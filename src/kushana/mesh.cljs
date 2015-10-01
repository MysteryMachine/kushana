(ns kushana.mesh
  (:require [kushana.impl.mesh :as impl]
            [kushana.component :refer [set-options!]]))

(defn sphere [{state :state scene :js-obj} name & 
              {:keys [diameter segments] :as options}] 
  (set-options! 
   (impl/sphere name segments diameter scene) 
   options))

(defn ground [{state :state scene :js-obj} name 
              & {:keys [width height subdivisions] :as options}] 
  (set-options! 
   (impl/ground name width height subdivisions scene) 
   options))  

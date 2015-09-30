(ns kushana.light
  (:require babylon
            [kushana.vector :refer [v3zero -v3]]
            [kushana.component :refer [set-options!]]))
(def babel js/BABYLON)

(defn hemispheric [{state :state scene :js-obj} name & {:as options}] 
  (set-options! (babel.HemisphericLight. name (-v3 v3zero) scene) options))
 

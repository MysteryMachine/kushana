(ns kushana.scene
  (:require [kushana.impl.scene
             :refer [->js-scene ->component dispose]]))

(defrecord Scene [id scene-graph update-fn options])

(defonce id-fns
  (let [counter (atom 0)]
    [(fn latest-id [] @counter)
     (fn new-id [] (swap! counter inc))]))
(def latest-id (first id-fns))
(def new-id (second id-fns))
(defn id-assoc [scene-graph component]
  (assoc scene-graph (new-id) component))
(defn with-ids [components] (reduce id-assoc {} components))

(defn new [scene-graph update-fn & {:as options}]
  (Scene. (new-id) scene-graph update-fn options))

(defn update-js! [js-engine]
  (fn build-inner
    [js-scene {:keys [scene new? new-ids edit-ids delete-ids] :as diff}]
    (if new?
      (build-inner
       (->js-scene js-engine scene)
       (assoc diff :new? false))
      (let [scene-graph (:scene-graph scene)]
        (doseq [id new-ids]
          (let [[component & {:as args}] (get scene-graph id)]
            (->component js-scene component args)))
        #_(doseq [id edit-ids]
            (let [[component & {:as args}] (get scene-graph id)]
              (->component (get object-graph id) args)))
        #_(doseq [id delete-ids]
            (dispose (get object-graph id)))
        js-scene))))

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

(defn update-js! [js-engine object-graph]
  (fn build-inner
    [js-scene {:keys [scene new? new-ids
                      edit-ids delete-ids] :as diff}]
    (if new?
      (build-inner
       (->js-scene js-engine scene)
       (assoc diff :new? false))
      (let [scene-graph (:scene-graph scene)]
        (doseq [id new-ids]
          (let [args (scene-graph id)]
            (->component js-scene object-graph id args)))
        (doseq [id edit-ids]
          (let [{:keys [component] :as args} (scene-graph id)]
            (->component object-graph id args)))
        (doseq [id delete-ids]
            (dispose (get object-graph id)))
        js-scene))))

(defn ->name [scene-* name]
  (if (= (type scene-*) Scene)
    (->name (:scene-graph scene-*) name)
    (some (fn [[id {next-name :name} :as obj]]
            (when (= name next-name) obj))
          scene-*)))

(defn update [scene-* & args] scene-*)

(defn overview [scene]
  (map (fn [[id obj]] [id (:name obj)]) (:scene-graph scene)))

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
(defn with-ids [scene-graph & components]
  (loop [scene-graph (transient scene-graph)
         [component & components] components]
    (if component
      (recur (assoc! scene-graph (new-id) component) components)
      (persistent! scene-graph))))

(defn new [scene-graph update-fn & {:as options}]
  (Scene. (new-id) scene-graph update-fn options))

(defn update-js! [jseng a-jsobj]
  (fn build-inner
    [js-scene 
     {:keys [transition new edit delete] :as diff}]
    (if transition
      (let [js-scene' (->js-scene jseng transition)
            diff'     (assoc diff :transition nil)]
        (build-inner js-scene' diff'))
      (do
        (doseq [[id args] new]
          (->component js-scene a-jsobj id args))
        (doseq [[id args] edit]
          (->component a-jsobj id args))
        (doseq [id delete]
          (dispose (get @a-jsobj id)))
        js-scene))))

(defn ->name [scene-* name]
  (if (= (type scene-*) Scene)
    (->name (:scene-graph scene-*) name)
    (some (fn [[id {next-name :name} :as obj]]
            (when (= name next-name) obj))
          scene-*)))

(defn overview [scene]
  (map (fn [[id obj]] [id (:name obj)]) (:scene-graph scene)))

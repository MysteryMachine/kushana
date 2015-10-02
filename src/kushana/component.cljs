(ns kushana.component
  (:require [kushana.impl.component :as impl]))

(defn- key->atr [k] (apply str (rest (str k))))
(defn- transform [key arg]
  (condp contains? key
    #{:position :direction
      :rotation :scale
      :set-target} (impl/v3 arg)
    #{:color :clear-color} (impl/c3 arg)))

(let [counter (atom 0)]
  (defn latest-id [] @counter)
  (defn new-id [] (swap! counter inc) @counter))
(defn id-assoc [scene-graph component]
  (assoc scene-graph (new-id) component))
(defn with-ids [components] (reduce id-assoc {} components))

(defn- set-options! [[object args]]
  (doseq [[key arg] args]
    (cond
      (= :set-target key) (.setTarget object arg)
      (= :attach-control key) (.attachControl object
                                              (first arg)
                                              (apply impl/v3 (second arg)))
      :else (aset object (key->atr key) (transform key arg)))))

(defn build-scene! [{:keys [scene entities]}]
  (fn [[scene-graph [new edit delete]]]
    (doseq [id new]
      (let [[component & {:as args}] (get scene-graph id)]
       (-> component
            (case
                :camera/free        impl/free-camera
                :light/hemispheric  impl/hemispheric-light
                :mesh/sphere        impl/sphere
                :mesh/ground        impl/ground)
            #(% args)
            (set-options! args))))
    (doseq [id edit]
      (let [[component & {:as args}] (get scene-graph id)]
        (set-options! (get entities id) args)))
    (doseq [id delete]
      (impl/dispose (get entities id)))))

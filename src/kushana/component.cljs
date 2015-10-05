(ns kushana.component
  (:require [kushana.impl.component :as impl]
            [kushana.scene :refer [Scene]]))

(enable-console-print!)

(defn else-threader [question]
  (fn [predicate] (or (= :else predicate) (question predicate))))

(defn- key->atr [k] (apply str (rest (str k))))
(defn- transform [key arg]
  (condp (else-threader contains?) key
    #{:position :direction
      :rotation :scale
      :set-target} (impl/v3 arg)
    #{:color :clear-color} (impl/c3 arg)
    :else arg))

(let [counter (atom 0)]
  (defn latest-id [] @counter)
  (defn new-id [] (swap! counter inc) @counter))
(defn id-assoc [scene-graph component]
  (assoc scene-graph (new-id) component))
(defn with-ids [components] (reduce id-assoc {} components))

(defn- set-options! [object args]
  (doseq [[key arg] args]
    (cond
      (= :set-target key) (.setTarget object (impl/v3 arg))
      (= :attach-control key) (impl/attach-control key arg)
      :else (aset object (key->atr key) (transform key arg))))
  object)

(defn build-scene! [js-engine]
  (fn build-inner
    [js-scene {:keys [scene new? new-ids edit-ids delete-ids] :as diff}]
    (if new?
      (build-inner
       (set-options! (impl/scene js-engine) (:options scene))
       (assoc diff :new? false))
      (let [scene-graph (:scene-graph scene)]
        (doseq [id new-ids]
          (let [[component & {:as args}] (get scene-graph id)]
            (-> component
                (case
                    :camera/free        impl/free-camera
                    :light/hemispheric  impl/hemispheric-light
                    :mesh/sphere        impl/sphere
                    :mesh/ground        impl/ground)
                (apply [js-scene args])
                (set-options! args))))
        (doseq [id edit-ids]
          (let [[component & {:as args}] (get scene-graph id)]
            (set-options! (get scene-graph id) args)))
        (doseq [id delete-ids]
          (impl/dispose (get scene-graph id)))
        js-scene))))

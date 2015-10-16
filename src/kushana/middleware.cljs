(ns kushana.middleware
  (:require [kushana.scene :refer [overview]])
  (:use-macros [kushana.middleware :only [defmiddleware]]))

(defn middleware [midware-fn]
  (fn [update-fn]
    (fn [scene inputs]
      (update-fn (midware-fn scene inputs) inputs))))

(defn lay [& fns]
  (if (empty? fns)
    identity
    ((first fns) (apply lay (rest fns)))))
(def μ lay)

(defn- reload-obj [scene [id changes]]
  (let [path [:scene-graph id]]
    (assoc-in scene path (merge (get-in scene path) changes))))

(defmiddleware reload [scene inputs]
  (condp get inputs
    :reload/scene (:reload/scene inputs)
    :reload/logic (assoc scene :update-fn (:reload/logic inputs))
    :reload/merge (reload-obj scene (:reload/merge inputs))
    scene))

(defmiddleware debug [scene inputs]
  (when (:debug/ping inputs)     (println (:debug/ping inputs)))
  (when (:debug/overview inputs) (println (overview scene)))
  scene)

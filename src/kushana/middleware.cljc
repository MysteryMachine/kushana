(ns kushana.middleware
  #?(:cljs
     (:require-macros [kushana.macros :refer [defhandler defticker]]))
  (:require [kushana.core :refer [overview]]
    #?(:clj [kushana.macros :refer [defhandler defticker]])))

(defn middleware [filter scene-fn]
  (fn [update-fn]
    (fn [scene event]
      (update-fn (if-let [f (filter event)]
                   (scene-fn scene f)
                   scene)
                 event))))

(defn lay [& fns]
  (if (empty? fns)
    (fn [a b] a)
    ((first fns) (apply lay (rest fns)))))

(defn- reload-obj [scene [id changes]]
  (let [path [:scene-graph id]]
    (assoc-in scene path (merge (get-in scene path) changes))))

(defhandler reload
  [scene inputs]
  (condp #(%1 %2) inputs
    :reload/scene (:reload/scene inputs)
    :reload/logic (assoc scene :update-fn (:reload/logic inputs))
    :reload/merge (reload-obj scene (:reload/merge inputs))
    scene))

(let [debug-state (atom {})]
  (defhandler debug
    [scene inputs]
    (let [state @debug-state]
      (when (not (nil? (:debug/input inputs)))
        (swap! debug-state #(assoc % :inputs (:debug/input inputs))))
      (when-let [n (:debug/ping inputs)] (println n))
      (when (:debug/overview inputs) (println (overview scene)))
      (when (:inputs state) (println inputs))
      scene)))

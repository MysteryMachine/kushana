(ns kushana.middleware)

(defn- reload-obj [scene [id changes]]
  (let [path [:scene-graph id]]
    (assoc-in scene path (merge (get-in scene path) changes))))

(defn reload [update-fn]
  (fn [scene [input-key input-args :as input]]
    (update-fn
     (case input-key
       :reload/scene  input-args
       :reload/logic  (assoc scene :update-fn  input-args)
       :reload/merge (reload-obj scene input-args)
       scene)
     input)))

(ns kushana.middleware)

(defn reload [update-fn]
  (fn [scene [input-key input-args :as input]]
    (update-fn
     (case input-key
       :reload-scene  input-args
       :reload-logic  (assoc scene :update-fn  input-args)
       scene)
     input)))

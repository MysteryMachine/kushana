(ns kushana.scene
  (:require babylon))
(def b js/BABYLON)

(defrecord Scene [id scene-graph update-fn options])

(let [ider (atom 0)]
  (defn new-id [] (swap! ider inc)))

(defn new [scene-graph update-fn & {:as options}]
  (Scene. (new-id) scene-graph update-fn options))


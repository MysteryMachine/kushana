(ns kushana.impl.engine
  (:require cljsjs.babylon))
(def b js/BABYLON)

(defn get-canvas [name] (.getElementById js/document name))

(defn- engine-options! [engine options]
  (when options
    (when (:resize options)
      (.addEventListener js/window "resize" #(.resize engine)))
    (when-let [resize-fn (:resize-fn options)]
      (.addEventListener js/window "resize" (resize-fn engine))))
  engine)

(defn engine [{:keys [canvas antialias] :as options}]
  (let [eng  (b.Engine. (get-canvas canvas) antialias)
        opts (dissoc options :antialias :canvas)]
    (engine-options! eng opts)))

(defn draw! [game-engine js-atom]
  (.runRenderLoop
   game-engine
   (fn []
     (when-let [scene @js-atom]
       (.render scene)))))

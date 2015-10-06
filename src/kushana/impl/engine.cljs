(ns kushana.impl.engine
  (:require babylon))
(def b js/BABYLON)

(enable-console-print!)

(defn get-canvas [name] (.getElementById js/document name))

(defn- engine-options! [engine options]
  (when options
    (when (:resize options)
      (.addEventListener js/window "resize" #(.resize engine)))
    (when-let [resize-fn (:resize-fn options)]
      (.addEventListener js/window "resize" (resize-fn engine))))
  engine)

(defn engine [{:keys [canvas antialias] :as options}]
  (engine-options! (b.Engine. (get-canvas canvas) antialias)
                   (-> options (dissoc :antialias) (dissoc :canvas))))

(defn draw [game-engine js-scene-atom]
  (.log js/console game-engine)
  (.runRenderLoop
   game-engine
   (fn []
     (when-let [scene @js-scene-atom]
       (.render scene)))))


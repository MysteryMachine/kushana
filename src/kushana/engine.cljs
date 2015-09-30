(ns kushana.engine
  (:require babylon))
(def babel js/BABYLON)

(defn- engine-options! [engine options]
  (when options
    (when (:resize options)
      (.addEventListener js/window "resize" #(.resize engine)))
    (when-let [resize-fn (:resize-fn options)]
      (.addEventListener js/window "resize" (resize-fn engine))))
  engine)

(defn engine [canvas antialias & {:as options}]
  (engine-options! (babel.Engine. canvas antialias) options))
(def new engine)

(defn canvas [name] (.getElementById js/document name))

(defn render-scene [game-engine {scene :js-obj}]
  (.runRenderLoop game-engine (fn [] (.render scene))))

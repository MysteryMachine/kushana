(ns kushana.impl.engine
  (:require cljsjs.babylon
            [kushana.impl.scene :refer [update-js!]]
            [cljs.core.async :refer [<! >! put! chan] :as async])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))
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

(defn update-js-loop [eng diff-ch options]
  (let [js-scene-atom (atom nil)
        ;; TODO: options can come from diffs
        update        (update-js! eng js-scene-atom options)]
    (go-loop [js-obj-graph {}]
      (enable-console-print!)
      (let [next-diff (<! diff-ch)
            next-js-graph (update js-obj-graph next-diff)]
        (recur next-js-graph)))
    js-scene-atom)) 

(defn draw! [diff-ch options]
  (let [game-engine (engine options)
        js-atom (update-js-loop game-engine diff-ch options)]
    (.runRenderLoop
     game-engine
     (fn []
       (when-let [scene @js-atom]
         (.render scene))))))

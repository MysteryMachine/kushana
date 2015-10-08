(ns ^:figwheel-always kushana.core
  (:require [kushana.engine :as engine]
            [kushana.scene :refer [with-ids ->name]]
            [kushana.helpers :refer [v3 c3]]
            [cljs.core.async :refer [put!]])
  (:use-macros [kushana.scene :only [defscene]]))

(enable-console-print!)

(defscene scene 
  (with-ids
    [{:component :light/hemispheric 
      :name "light1"
      :direction (v3 0 1 0)
      :intensity 1}
     {:component :mesh/sphere
      :name "sphere1"
      :segments 16 
      :diameter 2
      :position (v3 0 1 0)}
     {:component :mesh/ground
      :name "ground1"
      :width 6
      :height 6
      :rotation (v3 0 0 0)
      :subdivisions 2}
     {:component :camera/free
      :name "camera1"
      :set-target (v3 0 0 0)
      :position (v3 0 5 -10)
      :attach-control ["renderCanvas" true]}])
  (fn [{:keys [scene-graph] :as scene} [input-key input-args]]
    (case input-key
      :reload-scene  input-args
      :reload-logic  (assoc scene :update-fn  input-args)
      :none          (let [[sid sphere] (->name scene-graph "sphere1")
                           old-pos (:x (:position sphere))
                           new-pos [(inc old-pos) 0 0]
                           new-sphere (assoc sphere :position new-pos)
                           new-graph (assoc scene-graph sid new-sphere)]
                       (println scene)
                       (assoc scene :scene-graph scene-graph))))
  :clearColor (c3 0.2 0.4 0.5))

(defonce scene-atom (atom scene))

(defonce engine
  (engine/new
   scene-atom
   :canvas    "renderCanvas"
   :debug     true
   :antialias true
   :resize    true))

(defn on-jsload [] (put! engine [:reload-logic (:update-fn scene)]))


(ns ^:figwheel-always kushana.core
  (:require [kushana.engine :as engine]
            [cljs.core.async :refer [put!]]
            [kushana.examples.tictactoe :refer [scene update-fn]]))

(enable-console-print!)

(defonce scene-atom (atom scene))
(defonce engine
  (engine/new
   scene-atom
   :canvas    "renderCanvas"
   :debug     true
   :antialias true
   :resize    true))

(defn comm! [arg] (put! engine arg))
(defn on-jsload []
  (comm!
   {:debug/overview true
    :reload/logic   update-fn}))

(ns ^:figwheel-always kushana.core
  (:require [kushana.engine :as engine]
            [kushana.scene :refer [with-ids ->name new-id]]
            [kushana.helpers :refer [v3 c3 sin cos]]
            [kushana.middleware :as middleware]
            [cljs.core.async :refer [put!]])
  (:use-macros [kushana.scene :only [defscene]]))

(enable-console-print!)

(defn line [points]
  {:component :mesh/lines
   :name "l1"
   :points points
   :color (c3 0 0 0)})

(defn corners [x z]
  (let [xp (+ (* -2 x) 1.25)
        zp (+ (* 2 z) -2.75)
        xfp (+ 1.5 xp)
        zfp (+ 1.5 zp)
        y 0.01
        top-left (v3 xp y zp)
        top-right (v3 xfp y zp)
        bottom-left (v3 xp y zfp)
        bottom-right (v3 xfp y zfp)]
    [top-left top-right bottom-left bottom-right]))

(defn x-at [scene-graph x z]
  (let [[top-left top-right bottom-left bottom-right] (corners x z)]
    (-> scene-graph
        (assoc (new-id) (line [top-left bottom-right]))
        (assoc (new-id) (line [top-right bottom-left])))))

(defn o-at [scene-graph x z]
  (let [[top-left top-right bottom-left bottom-right] (corners x z)]
    (-> scene-graph
        (assoc (new-id) (line [top-left top-right]))
        (assoc (new-id) (line [top-right bottom-right]))
        (assoc (new-id) (line [bottom-right bottom-left]))
        (assoc (new-id) (line [bottom-left top-left])))))

(defn decide-winner
  [{tl [0 0] t [1 0] tr [2 0] l [0 1] bl [0 2] :as scene}]
  scene)

(defn take-turn [id scene player [x z :as position]]
  (let [board (get-in scene [:scene-graph id])
        new-board (-> board
                      (assoc position player)
                      (assoc :turn (if (= :x player) :o :x))
                      decide-winner)
        sg (:scene-graph scene)
        new-sg (assoc sg id new-board)
        new-sg (if (= :x player)
                 (x-at new-sg x z)
                 (o-at new-sg x z))
        new-sg (if (:winner new-board)
                 (let [[id {gc :groundColor :as light}]
                       (->name new-sg "light")]
                   (assoc new-sg id
                          (assoc light :groundColor
                                 (c3 1 0 0))))
                 new-sg)
        new-scene (assoc scene :scene-graph new-sg)]
    new-scene))

(defn next-ttt-scene [scene [player [x z :as position]]]
  (let [[id board] (->name (:scene-graph scene) "state")]
    (println board)
    (if (and (not (:winner board))
             (= (:turn board) player)
             (nil? (get board position))
             (>= x 0) (>= z 0) (< x 3) (< z 3))
      (take-turn id scene player position)
      scene)))

(defn ttt-middleware [next-fn]
  (fn [scene [input-key args :as inputs]]
    (next-fn (if (or (= :x input-key) (= :o input-key))
               (next-ttt-scene scene inputs)
               scene)
             inputs)))

(def update-fn
  (middleware/stack middleware/debug
                    middleware/reload
                    ttt-middleware))

(defscene initial-scene
  (with-ids
    [{:component :data :turn :x :name "state"}
     {:component :camera/free
      :name "camera"
      :set-target (v3 0 0 0)
      :position (v3 0 9 0.001)
      :attach-control ["renderCanvas" true]}
     {:component :light/hemispheric
      :name "light"
      :intensity 1
      :direction (v3 0 -1 0)
      :position (v3 0 0 0)
      :groundColor (c3 1 1 1)}
     {:component :mesh/ground
      :name "board"
      :width 100
      :height 100
      :subdivisions 2
      :position (v3 0 -0.01 0)}
     (line [(v3 -1 0.01 -2.75) (v3 -1 0.01 2.75)])
     (line [(v3 1 0.01 -2.75) (v3 1 0.01 2.75)])
     (line [(v3 -2.75 0.01 -1) (v3 2.75 0.01 -1)])
     (line [(v3 -2.75 0.01 1) (v3 2.75 0.01 1)])])
  update-fn
  :clearColor (c3 0 1 1))

(defonce scene-atom (atom initial-scene))

(defonce engine
  (engine/new
   scene-atom
   :canvas    "renderCanvas"
   :debug     true
   :antialias true
   :resize    true))

(defn comm! [type arg]
  (put! engine [type arg]))

(defn inspect [scene]
  (map (fn [[id obj]] [id (:name obj)]) (:scene-graph scene)))

(defn on-jsload []
  (comm! :reload/logic update-fn))


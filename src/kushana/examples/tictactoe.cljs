(ns kushana.examples.tictactoe
  (:require [kushana.scene :refer [with-ids ->name new-id]]
            [kushana.helpers :refer [v3 c3 sin cos]]
            [kushana.middleware :refer [lay debug reload]])
  (:use-macros [kushana.scene :only [defscene]]
               [kushana.middleware :only [defmiddleware]]))

(defn line [points]
  {:scene/component :mesh/lines
   :name "l1"
   :points points
   :color (c3 0 0 0)})

(defn corners [x z]
  (let [xp  (+ (* -2 x) 1.25)
        zp  (+ (* 2 z) -2.75)
        xfp (+ 1.5 xp)
        zfp (+ 1.5 zp)
        y   0.01
        top-left     (v3 xp y zp)
        top-right    (v3 xfp y zp)
        bottom-left  (v3 xp y zfp)
        bottom-right (v3 xfp y zfp)]
    [top-left top-right bottom-left bottom-right]))

(defn x-at [scene-graph x z]
  (let [[top-left top-right bottom-left bottom-right] (corners x z)]
    (with-ids scene-graph
      (line [top-left bottom-right])
      (line [top-right bottom-left]))))

(defn o-at [scene-graph x z]
  (let [[top-left top-right bottom-left bottom-right] (corners x z)]
    (with-ids scene-graph
      (line [top-left top-right])
      (line [top-right bottom-right])
      (line [bottom-right bottom-left])
      (line [bottom-left top-left]))))

(defn take-turn [board-id scene [x z :as position]]
  (let [board (get-in scene [:scene-graph board-id])
        player (:turn board)
        board' (assoc board
                     position player
                     :turn (if (= :x player) :o :x))
        sg  (:scene-graph scene)
        sg' (assoc sg board-id board')
        sg' (if (= :x player)
              (x-at sg' x z)
              (o-at sg' x z))
        new-scene (assoc scene :scene-graph sg')]
    new-scene))

(defn color-board [scene winner]
  (let [new-color   (cond (= :x winner) (c3 1 0 0)
                          (= :o winner) (c3 0 0 1))
        [lid light] (->name scene "light")
        new-light   (assoc light :groundColor new-color)]
    (assoc-in scene [:scene-graph lid] new-light)))

(defn three-in-row [key
               {tl [0 0] t  [1 0] tr [2 0]
                l  [0 1] m  [1 1] r  [2 1]
                bl [0 2] b  [1 2] br [2 2]}]
  (or (= key tl l bl)
      (= key tl m br)
      (= key tl t tr)
      (= key t  m b)
      (= key tr m bl)
      (= key r  m l)
      (= key br b bl)))

(defn decide-winner [board]
  (cond (three-in-row :x board) (assoc board :winner :x)
        (three-in-row :o board) (assoc board :winner :o)
        :else (assoc board :winner :none)))

(defn handle-win [scene]
  (let [[id board] (->name scene "state")
        board (decide-winner board)
        winner (:winner board)]
    (if (or (= :x winner) (= :o winner))
      (-> scene
          (color-board winner)
          (assoc-in [:scene-graph id] (assoc board :winner :done)))
      scene)))

(defmiddleware game-logic [scene inputs]
  (let [[id board]    (->name (:scene-graph scene) "state")
        [x z :as pos] (or ((:turn board) inputs) [-1 -1])
        scene (if (and
                   (not (:winner board))
                   (nil? (get board pos))
                   (>= x 0) (>= z 0) (< x 3) (< z 3))
                (take-turn id scene pos)
                scene)]
    (handle-win scene)))

(def update-fn (lay debug reload game-logic))

(defscene scene
  (with-ids {}
    {:turn :x :name "state"}
    {:scene/component :camera/free
     :name "camera"
     :set-target (v3 0 0 0)
     :position (v3 0 9 0.001)
     :attach-control ["renderCanvas" true]}
    {:scene/component :light/hemispheric
     :name "light"
     :intensity 1 
     :direction (v3 0 -1 0)
     :position (v3 0 0 0)
     :groundColor (c3 1 1 1)}
    {:scene/component :mesh/ground
     :name "board"
     :width 100
     :height 100
     :subdivisions 2
     :position (v3 0 -0.01 0)}
    (line [(v3 -1 0.01 -2.75) (v3 -1 0.01 2.75)])
    (line [(v3 1 0.01 -2.75) (v3 1 0.01 2.75)])
    (line [(v3 -2.75 0.01 -1) (v3 2.75 0.01 -1)])
    (line [(v3 -2.75 0.01 1) (v3 2.75 0.01 1)]))
  update-fn
  :clearColor (c3 0 1 1))


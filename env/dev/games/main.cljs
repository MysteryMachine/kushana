(ns ^:figwheel-no-load games.main
  (:require [games.tictactoe :as game]
            [games.tictactoe.ui :refer [render-ui]]
            [kushana.core :refer [engine]]
            [figwheel.client :as figwheel :include-macros true]
            [weasel.repl :as weasel]))

(def engine-connection
  (engine
   game/scene-atom
   :fps        10
   :connection (kushana.core/connect!)
   :canvas     "renderCanvas"
   :antialias  true
   :resize     true))

(figwheel/watch-and-reload
 :websocket-url "ws://localhost:3449/figwheel-ws"
 :on-jsload (fn [] (game/reload engine-connection)))

(weasel/connect "ws://localhost:9001")

(render-ui game/scene-atom engine-connection)

(game/reload engine-connection)

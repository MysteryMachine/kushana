(ns games.main
  (:require [games.tictactoe :as game]
            [figwheel.client :as figwheel :include-macros true]
            [weasel.repl :as weasel]))

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn [] (game/reload)))

(weasel/connect "ws://localhost:9001")

(game/reload)

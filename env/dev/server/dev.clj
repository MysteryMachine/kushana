(ns server.dev
  (:require [games.tictactoe :as game]
            [environ.core :refer [env]]
            [net.cgrand.enlive-html :refer [set-attr prepend append html]]
            [cemerick.piggieback :as piggieback]
            [weasel.repl.websocket :as weasel]
            [figwheel-sidecar.repl-api :as ra]
            [figwheel-sidecar.core :as fig]
            [clojurescript-build.auto :as auto]
            [clojure.java.shell :refer [sh]]))

(def is-dev? (env :is-dev))

(def inject-devmode-html
  (comp
     (set-attr :class "is-dev")
     (prepend (html [:script {:type "text/javascript" :src "/js/out/goog/base.js"}]))
     (append  (html [:script {:type "text/javascript"} "goog.require('games.main')"]))))

(let [repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)]
  (defn cljs-repl [] (piggieback/cljs-repl repl-env)))

(defn start-figwheel []
  (let [config {:figwheel-options {:css-dirs ["resources/public/css"]}
                :build-ids ["dev"]
                :all-builds
                [{:id "dev"
                  :source-paths ["src" "env/dev"]
                  :compiler {:output-to            "resources/public/js/app.js"
                             :output-dir           "resources/public/js/out"
                             :preamble             ["react/react.min.js"]}}]}]
    (ra/start-figwheel! config)))

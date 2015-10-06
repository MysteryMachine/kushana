(defproject kushana "0.1.0"
  :description "An immutable friendly, declarative, reactive, and data driven Clojure game engine."
  :url "https://github.com/MysteryMachine/kushana"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [jamesmacaulay/zelkova "0.4.0"]]

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.4.0"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]

              :figwheel { :on-js-load "kushana.core/on-js-reload" }

              :compiler {:main kushana.core
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/kushana.js"
                         :output-dir "resources/public/js/compiled/out"
                         :source-map-timestamp true 
                         :externs ["resources/cljsjs/babylon/common/babylon.ext.js"]
                         :foreign-libs [{:file "resources/cljsjs/babylon/common/babylon.js"
                                         :provides ["babylon"]}]}}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/kushana.js"
                         :main kushana.core
                         :optimizations :advanced
                         :pretty-print false}}]}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources" 
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1" 

             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
             }
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                [org.clojure/tools.nrepl "0.2.10"]]
                 :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}
)

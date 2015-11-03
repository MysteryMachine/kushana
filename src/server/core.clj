(ns server.core
  (:require [clojure.java.io :as io]
            [clojure.core.async :refer [go-loop chan]]
            [kushana.core :refer [connect!]]
            [server.dev :refer [is-dev? inject-devmode-html cljs-repl start-figwheel start-engine]]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [environ.core :refer [env]]
            [org.httpkit.server :refer [run-server]]
            [ns-tracker.core :refer [ns-tracker]])
  (:gen-class))

(deftemplate page (io/resource "index.html") []
  [:body] (if is-dev? inject-devmode-html identity))

(defonce connection (connect!))

(let [{:keys [get post input]} connection]
  (def eng-get  get)
  (def eng-post post))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (GET  "/chsk" req (#'eng-get  req))
  (POST "/chsk" req (#'eng-post req))
  (GET  "/" req (page)))

(def defaults
  (-> site-defaults
      (assoc-in [:security :anti-forgery] {:read-token (fn [req] (-> req :params :csrf-token))})))

(def http-handler
  (if is-dev?
    (reload/wrap-reload (wrap-defaults #'routes defaults))
    (wrap-defaults routes defaults)))

(defn run-web-server [& [port]]
  (let [port (Integer. (or port (env :port) 10555))]
    (run-server http-handler {:port port :join? false})))

(def modified-namespaces
  (ns-tracker ["src" "test"]))

(defn run-auto-reload [& [port]]
  (auto-reload *ns*)
  (start-figwheel))

(defonce engine-connection (start-engine connection))
(defonce reloader
  (go-loop []
    (when (modified-namespaces)
      (require '[games.tictactoe :refer [reload]] :reload)
      (games.tictactoe/reload engine-connection))
    (recur))) 

(defn run [& [port]]
  (when is-dev? (run-auto-reload))
  (run-web-server port))

(defn -main [& [port]]
  (run port))

(ns server.core
  (:require [clojure.java.io :as io]
            [server.dev :refer [is-dev? inject-devmode-html cljs-repl start-figwheel]]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [environ.core :refer [env]]
            [org.httpkit.server :refer [run-server]]
            [games.tictactoe :refer [engine-connection]])
  (:gen-class))

(deftemplate page (io/resource "index.html") []
  [:body] (if is-dev? inject-devmode-html identity))

(let [{:keys [get post input]} engine-connection]
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

(defn run-auto-reload [& [port]]
  (auto-reload *ns*)
  (start-figwheel))

(defn run [& [port]]
  (when is-dev?
    (run-auto-reload))
  (run-web-server port))

(defn -main [& [port]]
  (run port))

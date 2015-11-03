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

(defonce sente-connection (connect!))

(let [{:keys [ajax-get-or-ws-handshake-fn ajax-post-fn]} sente-connection]
  (def sente-get  ajax-get-or-ws-handshake-fn)
  (def sente-post ajax-post-fn))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (GET  "/chsk" req (#'sente-get  req))
  (POST "/chsk" req (#'sente-post req))
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

;; TODO: this function should probably take some sort of input
;; so that you don't have to manually define it.
;; FIXME: Only detecting changes to this exact file. Should
;; detect changes in all files in src.
(defn run-engine []
  (let [engine-connection (start-engine sente-connection)
        modified-namespaces (ns-tracker ["src" "test"])]
    (go-loop []
      (when (modified-namespaces)
        (require '[games.tictactoe :refer [reload]] :reload)
        (games.tictactoe/reload engine-connection))
      (recur))))

(defn run-auto-reload [& [port]]
  (auto-reload *ns*)
  (start-figwheel))

(defn run [& [port]]
  (when is-dev? (run-auto-reload))
  (run-web-server port)
  (run-engine))

(defn -main [& [port]]
  (run port))

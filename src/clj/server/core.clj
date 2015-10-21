(ns server.core
  (:require [clojure.java.io :as io]
            [clojure.core.async :refer [go-loop <! >!] :as async]
            [kushana.dev :refer [is-dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [environ.core :refer [env]]
            [org.httpkit.server :refer [run-server]]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)])
  (:gen-class))

(let [{:keys [ch-recv send-fn ajax-post-fn
              ajax-get-or-ws-handshake-fn connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {})]
  (def ring-ajax-post ajax-post-fn)
  (def ring-ajax-get  ajax-get-or-ws-handshake-fn)
  (def ch-chsk        ch-recv)
  (def chsk-send!     send-fn)
  (def connected-uids connected-uids))

(deftemplate page (io/resource "index.html") []
  [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (GET  "/chsk" req (#'ring-ajax-get  req))
  (POST "/chsk" req (#'ring-ajax-post req))
  (GET  "/" req (page)))

(def http-handler
  (if is-dev?
    (reload/wrap-reload (wrap-defaults #'routes api-defaults))
    (wrap-defaults routes api-defaults)))

(defn run-web-server [& [port]]
  (let [port (Integer. (or port (env :port) 10555))]
    (run-server http-handler {:port port :join? false})))

(defn run-auto-reload [& [port]]
  (auto-reload *ns*)
  (start-figwheel))

(defn event! [uid]
  (chsk-send! uid [:server/event {:server/event {:ping true}}]))

(defn start-broadcaster! []
  (go-loop [i 0]
    (<! (async/timeout 40))
    (doseq [uid (:any @connected-uids)]
      (event! uid))
    (recur (inc i))))

(defn run [& [port]]
  (when is-dev?
    (run-auto-reload))
  (run-web-server port)
  (start-broadcaster!))

(defn -main [& [port]]
  (run port))

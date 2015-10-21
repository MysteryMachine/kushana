(ns kushana.core
  (:require [cljs.core.async :as async :refer [<! >! put! chan]]
            [taoensso.sente  :as sente :refer [cb-success?]]))

(defn server-connection! []
  (let [{:keys [ch-recv send-fn] :as sente-info}
        (sente/make-channel-socket! "/chsk" {:type :auto})]
    {:recieve ch-recv :send send-fn}))

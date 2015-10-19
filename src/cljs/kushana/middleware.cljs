(ns kushana.middleware
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]
                   [kushana.middleware :refer [defmiddleware]])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [kushana.scene :refer [overview]]))

(defn middleware [scene-fn input-fn]
  (fn [update-fn]
    (fn [scene inputs]
      (let [inputs' (input-fn inputs)]
        (update-fn (scene-fn scene inputs') inputs')))))

(defn lay [& fns]
  (if (empty? fns)
    identity
    ((first fns) (apply lay (rest fns)))))
(def μ lay)

(defn- reload-obj [scene [id changes]]
  (let [path [:scene-graph id]]
    (assoc-in scene path (merge (get-in scene path) changes))))

(defn server []
  (let [{:keys [chsk ch-recv send-fn state] :as sente-info}
        (sente/make-channel-socket! "/chsk" {:type :auto})
        server-results identity
        server-input   identity]
    (fn [update-fn]
      (fn [scene inputs]
        (if false
          (server-results)
          (update-fn scene inputs))))))

(defmiddleware reload
  [scene inputs]
  (condp #(%1 %2) inputs
    :reload/scene (:reload/scene inputs)
    :reload/logic (assoc scene :update-fn (:reload/logic inputs))
    :reload/merge (reload-obj scene (:reload/merge inputs))
    scene))

(defmiddleware debug
  [scene inputs]
  (do
    (when (:debug/ping inputs)     (println (:debug/ping inputs)))
    (when (:debug/overview inputs) (println (overview scene)))
    scene))

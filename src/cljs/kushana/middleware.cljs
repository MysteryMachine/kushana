(ns kushana.middleware
  (:require-macros [cljs.core.async.macros :refer (go go-loop)]
                   [kushana.middleware :refer [defmiddleware]])
  (:require [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [kushana.scene :refer [overview]]))

(defn middleware [scene-fn input-fn]
  (fn [update-fn]
    (fn [scene inputs]
      (let [inputs' inputs #_(input-fn inputs)]
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
    {:middleware (fn [update-fn]
                   (fn [scene inputs]
                     (if-let [merge (:server/merge inputs)]
                       (server-results scene merge)
                       (update-fn scene inputs))))
     :channel ch-recv}))

(defmiddleware reload
  [scene inputs]
  (condp #(%1 %2) inputs
    :reload/scene (:reload/scene inputs)
    :reload/logic (assoc scene :update-fn (:reload/logic inputs))
    :reload/merge (reload-obj scene (:reload/merge inputs))
    scene))

(let [debug-state (atom {})]
  (defmiddleware debug
    [scene inputs]
    (let [state @debug-state]
      (when (not (nil? (:debug/input inputs)))
        (swap! debug-state #(assoc % :inputs (:debug/input inputs))))
      (when-let [n (:debug/ping inputs)] (println n))
      (when (:debug/overview inputs) (println (overview scene)))
      (when (:inputs state) (println inputs))
      scene)))

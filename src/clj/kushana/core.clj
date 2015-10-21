(ns kushana.core
  (:require [clojure.core.async :refer [go-loop <! >!] :as async]))

(defn run-engine [in-ch out-fn uids state logic fps]
  nil)

#_(defn new [a-scene & {:as options}]
  (let [{:keys [recieve send]} (:server options)
        options   (dissoc options :recive :send)
        jseng     (impl/engine options)
        input     (chan)
        a-jsobj   (atom {})
        Δt      (z/map (fn [δ] {:dt δ}) (time/fps (:fps options)))
        δinput  (z/merge (z/input {} identity input) Δt)
        Δserver (server-signal Δt recieve)
        Δinput  (z/map merge  Δt δinput Δserver)
        Δscene  (z/reductions (act send) @a-scene Δinput)
        Δdiff   (z/reductions δscene {:scene-graph {}} Δscene)
        Δjs     (z/reductions (update-js! jseng a-jsobj) nil Δdiff)]
    (impl/draw! jseng (z/pipe-to-atom Δjs))
    (z/pipe-to-atom Δscene a-scene)
    (fn [a] (put! input a))))

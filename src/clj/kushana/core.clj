(ns kushana.core
  (:require [clojure.core.async :refer
             [go-loop <! >! put!] :as async]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]))

(defn act [send auids])

(defn engine [recieve send uids state fps]
  (let [Δt      (z/map (fn [δ] {:dt δ}) (time/fps fps))
        Δinput  (z/merge (z/input {} identity recieve) Δt)
        Δscene  (z/reductions (act send uids) @state Δinput)]
    (z/pipe-to-atom Δscene state)
    (fn [a] (put! receive a))))

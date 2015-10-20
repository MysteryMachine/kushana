(ns kushana.engine
  (:require [cljs.core.async :refer [chan put!]]
            [clojure.data :refer [diff]]
            [jamesmacaulay.zelkova.signal :as z]
            [jamesmacaulay.zelkova.time :as time]
            [jamesmacaulay.zelkova.mouse :as mouse]
            [kushana.scene :as scene :refer [update-js!]]
            [kushana.impl.engine :as impl]))

(defrecord Diff [scene new-scene? new edit delete])

(defn e-diff [id old new edit]
  (if-let [change (second (diff old new))]
    (conj! edit [id change])
    edit))

(defn- δscene
  [{{osg :scene-graph :as old-scene} :scene} {nsg :scene-graph :as new-scene}]
  (let [i-f  (scene/latest-id)
        new? (not= (:id old-scene) (:id new-scene))]
    (loop [i 0
           new  (transient [])
           edit (transient [])
           del  (transient [])]
      (if (> i i-f)
        (let [new'  (persistent! new)
              edit' (persistent! edit)
              del'  (persistent! del)]
          (Diff. new-scene new? new' edit' del'))
        (let [i'      (inc i)
              new-obj (get nsg i)
              old-obj (get osg i)
              old?    (:scene/component old-obj)
              new?    (:scene/component new-obj)
              edit?   (and old? new?)]
          (cond
            edit? (recur i' new (e-diff i old-obj new-obj edit) del)
            new?  (recur i' (conj! new [i new-obj]) edit del)
            old?  (recur i' new edit (conj! del i))
            :else (recur i' new edit del)))))))

(defn- act [send!]
  (fn [{:keys [update-fn] :as scene} input]
    (let [input' (dissoc input :dt)]
      (if (not (empty? input')) (send! [:kushana/input input'])))
    (update-fn scene input)))

(defn new [a-scene & {:as options}]
  (let [{:keys [recieve send]} (:server options)
        options   (dissoc options :recive :send)
        jseng     (impl/engine options)
        input     (chan)
        a-jsobj   (atom {})
        Δt     (z/map (fn [δ] {:dt δ}) (time/fps (:fps options)))
        δinput (z/merge (z/input {} identity input) Δt)
        args   (if recieve
                 [vector Δt δinput #_(z/input recieve)]
                 [vector Δt δinput])
        Δinput (z/map (fn [inputs]
                        (reduce merge inputs))
                      (apply z/map args))
        Δscene (z/reductions (act send) @a-scene Δinput)
        Δdiff  (z/reductions δscene {:scene-graph {}} Δscene)
        Δjs    (z/reductions (update-js! jseng a-jsobj) nil Δdiff)]
    (impl/draw! jseng (z/pipe-to-atom Δjs))
    (z/pipe-to-atom Δscene a-scene)
    input))

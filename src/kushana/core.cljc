(ns kushana.core
  (:require [taoensso.sente :as sente]
            [kushana.impl.core :as impl :refer [latest-id new-id]]
         #?@(:cljs
             [[kushana.impl.engine :as engine]
              [cljs.core.async :refer [chan] :as async]]
             :clj
             [[taoensso.sente.server-adapters.http-kit
               :refer (sente-web-server-adapter)]
              [clojure.core.async :refer [chan] :as async]])))

(defn id-assoc [scene-graph component]
  "Given a scene graph and a component, associates that component to the
scene graph using a freshly generated id"
  (assoc scene-graph (new-id) component))

(defn with-ids [scene-graph & components]
  "Given a scene graph and a bunch of components, associates all those
componenets to the scene using freshly generated ids"
  (loop [scene-graph (transient scene-graph)
         [component & components] components]
    (if component
      (recur (assoc! scene-graph (new-id) component) components)
      (persistent! scene-graph))))

(defn connect! []
  "Build a quick socket connection which can be passed as the connection
field of an engine options."
  (sente/make-channel-socket! #?@(:cljs ["/chsk" {:type :auto}]
                                  :clj  [sente-web-server-adapter {}])))

(defn scene [scene-graph update-fn & {:as options}]
  "Given a scene graph, an update function, and a set of options,
create a scene record with a freshly generated id."
  (impl/Scene. (new-id) scene-graph update-fn options))

(defn engine [scene-atom & {:as options}]
  "Given an atom holding with a scene inside, and a set of options,
create a running engine. An fps option must be provided."
  (if-not (:fps options) (throw "Please provide an :fps option"))
  (let [input-ch (chan)
        diff-ch  (diff-loop scene-atom input-ch options)]
    (impl/run! input-ch diff-ch options)))

;; Helpers

(defn v3 "Given an x, y, and z, returns a Vector3"
  [x y z] {:x x :y y :z z})
(defn c3 "Given an r, g, and b, returns a Color3"
  [r g b] {:r r :g g :b b})

(defn sin
  "arity 3: (sin t a b) => a*sin(t/b)\narity 1: (sin t) => sin(t)"
  ([t a b] (* a #?(:cljs (.sin js/Math (/ t b))
                   :clj  (Math/sin (/ t b))) (/ t b)))
  ([t] (sin t 1 1)))

(defn cos
  "arity 3: (cos t a b) => a*cos(t/b)\narity 1: (cos t) => cos(t)"
  ([t a b] (* a #?(:cljs (.cos js/Math (/ t b))
                   :clj  (Math/cos (/ t b)))))
  ([t] (sin t 1 1)))

(defn ->name
  "Given a (Scene or Scene Graph) and a name, returns the first entity in the scene-* that matches the name, inside a vector with its id, in the form [id entity]"
  [scene-* name]
  (if (= (type scene-*) impl/Scene)
    (->name (:scene-graph scene-*) name)
    (some (fn [[id {next-name :name} :as obj]]
            (when (= name next-name) obj))
          scene-*)))

(defn overview
  "Given a scene, return a vector that contains all [id name] pairs for all entities in the scene's scene-graph."
  [scene] (map (fn [[id obj]] [id (:name obj)]) (:scene-graph scene)))

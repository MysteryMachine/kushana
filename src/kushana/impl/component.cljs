(ns kushana.component
  (:require babylon))
(def b js/BABYLON)

(defn- free-camera [name vector scene] (b.FreeCamera. name vector scene))

(defn- hemispheric-light [name vector scene] 
  (b.HemisphericLight. name v3zero scene))

(defn- c3 [[r g _b]] (b.Color3. r g _b))

(defn- sphere [name segments diameter scene]
  (b.Mesh.CreateSphere name segments diameter scene))
(defn- ground [name width height subdivisions scene]
  (b.Mesh.CreateGround name width height subdivisions scene))

(defn- v2 [[x y]] (b.Vector2. x y))
(defn- v3 [[x y z]] (b.Vector3. x y z))
(defn- v4 [[x y z w]] (b.Vector4. x y z w))

(defn- key->atr [k] (apply str (rest (str k))))
(defn- transform [key arg]
  (condp contains? key
    #{:position :direction
      :rotation :scale
      :set-target} (v3 arg)
    #{:color :clear-color} (c3 arg)))

(let [counter (atom 0)]
  (defn latest-id [] @counter)
  (defn new-id [] (swap! counter inc) @counter))
(defn id-assoc [scene-graph component] (assoc scene-graph (new-id) component))
(defn with-ids [components] (reduce id-assoc {} components))

(defn- set-options! [object args]
  (doseq [[key arg] args]
    (cond
     (= :set-target key) (.setTarget object arg)
     (= :attach-control key) (.attachControl object
                                             (first arg)
                                             (apply v3 (second arg)))
     :else (aset object (key->atr key) (transform key arg)))))

(defn build-scene! [js-scene-atom]
  (fn [scene-graph input]
    (doseq [[name & args :as obj] scene-graph]
      (cond-> obj
          ))))

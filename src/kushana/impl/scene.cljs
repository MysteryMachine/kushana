(ns kushana.impl.scene
  (:require cljsjs.babylon))
(def b js/BABYLON) 

(defn v2
  ([{:keys [x y]}] (b.Vector2. x y))
  ([object {:keys [x y]}]
   (let [x (or x (.-x object))
         y (or y (.-y object))]
     (b.Vector2. x y))))
(defn v3
  ([{:keys [x y z]}] (b.Vector3. x y z))
  ([object {:keys [x y z]}]
   (let [x (or x (.-x object))
         y (or y (.-y object))
         z (or z (.-z object))]
     (b.Vector3. x y z))))
(defn v4
  ([{:keys [x y z w]}] (b.Vector4. x y z w))
  ([object {:keys [x y z w]}]
   (let [x (or x (.-x object))
         y (or y (.-y object))
         z (or z (.-z object))
         w (or w (.-w object))]
     (b.Vector4. x y z w))))
(defn c3
  ([{:keys [r g] _b :b}] (b.Color3. r g _b))
  ([object {:keys [r g] _b :b}]
   (let [r (or r (.-r object))
         g (or g (.-g object))
         _b (or _b (.-b object))]
     (b.Color3. r g _b))))

(defn free-camera [scene {:keys [name position]}]
  (b.FreeCamera. name (v3 position) scene))

(defn camera [scene {:keys [name position]}]
  (b.Camera. name (v3 position) scene))

(defn target-camera [scene {:keys [name position]}]
  (b.TargetCamera. name (v3 position) scene))

(defn hemispheric-light [scene {:keys [name direction]}]
  (b.HemisphericLight. name (v3 direction) scene))

(defn sphere [scene {:keys [name segments diameter] :as args}]
  (b.Mesh.CreateSphere. name segments diameter scene))
(defn ground [scene {:keys [name width height subdivisions]}]
  (b.Mesh.CreateGround. name width height subdivisions scene))

(defn box [scene {:keys [name size]}]
  (b.Mesh.CreateBox. name size scene))

(defn lines [scene {:keys [name points]}]
  (b.Mesh.CreateLines. name
                       (apply array (map v3 points))
                       scene))

(defn dispose [obj] (.dispose obj))

(defn attach-control [object [canvas-name arg]]
  (.attachControl object (.getElementById js/document canvas-name) arg))

(defn set-target [object arg]
  (.setTarget object (v3 object arg)))

(defn else-threader [question]
  (fn [subject predicate]
    (or (= :else subject) (question subject predicate))))

(def vec-arg
  #{:position :direction :rotation :scale})

(def color-arg
  #{:color :clearColor :groundColor})

(defn- key->atr [k] (apply str (rest (str k))))

(defn- transform [object key arg]
  (condp (else-threader contains?) key
    vec-arg   (v3 (aget object (key->atr key)) arg)
    color-arg (c3 (aget object (key->atr key)) arg)
    :else     arg))

(defn set-options! [object args]
  (doseq [[key arg] args]
    (cond
      (= :set-target key) (set-target object arg)
      (= :attach-control key) (attach-control object arg)
      :else (aset object (key->atr key) (transform object key arg))))
  object)

(defn ->js-scene [engine scene]
  (set-options! (b.Scene. engine) (:options scene)))

(def engine-map
  {:camera/free        free-camera
   :camera/camera      camera
   :camera/target      target-camera
   :light/hemispheric  hemispheric-light
   :mesh/sphere        sphere
   :mesh/ground        ground
   :mesh/box           box
   :mesh/lines         lines})

(defn ->component
  ([object-graph id {component :scene/component :as args}]
   (set-options! (@object-graph id) args))
  ([js-scene object-graph id {component :scene/component :as args}]
   (let [obj (-> (component engine-map)
                 (apply [js-scene args])
                 (set-options! args))]
     (swap! object-graph #(assoc % id obj))
     obj)))

(ns kushana.impl.scene
  (:require cljsjs.babylon
            [clojure.data :refer [diff]]))
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

(defn- update-js! [jseng a-jsobj]
  (fn build-inner
    [js-scene {:keys [scene new-scene? new edit delete] :as diff}]
    (if new-scene?
      (let [js-scene' (->js-scene jseng scene)
            diff'     (assoc diff :new-scene? nil)]
        (build-inner js-scene' diff'))
      (do
        (doseq [[id args] new]
          (->component js-scene a-jsobj id args))
        (doseq [[id args] edit]
          (->component a-jsobj id args))
        (doseq [id delete]
          (dispose (get @a-jsobj id)))
        js-scene))))

(defrecord Diff [scene new-scene? new edit delete])

(defn- e-diff [id old new edit]
  (if-let [change (second (diff old new))]
    (conj! edit [id change])
    edit))

(defn- δscene [latest-id]
  (fn [{{osg :scene-graph :as old-scene} :scene} {nsg :scene-graph :as new-scene}]
   (let [i-f  (latest-id)
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
             :else (recur i' new edit del))))))))

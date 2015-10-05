(ns kushana.impl.scene
  (:require babylon))
(def b js/BABYLON)

(enable-console-print!)

(defn v2 [[x y]]  (b.Vector2. x y))
(defn v3 [[x y z]] (b.Vector3. x y z))
(defn v4 [[x y z w]] (b.Vector4. x y z w))
(defn c3 [[r g _b]] (b.Color3. r g _b))

(defn free-camera [scene {:keys [name position]}]
  (b.FreeCamera. name (v3 position) scene))

(defn hemispheric-light [scene {:keys [name direction]}]
  (b.HemisphericLight. name (v3 direction) scene))

(defn sphere [scene { :keys [name segments diameter]}]
  (b.Mesh.CreateSphere. name segments diameter scene))
(defn ground [scene {:keys [name width height subdivisions]}]
  (b.Mesh.CreateGround. name width height subdivisions scene))

(defn dispose [obj] (.dispose obj))

(defn attach-control [object args]'
  (.attachControl object
                  (.getElementById js/document (first arg))
                  (second arg)))

(defn else-threader [question]
  (fn [subject predicate]
    (or (= :else subject) (question subject predicate))))

(defn- transform [key arg]
  (condp (else-threader contains?) key
    #{:position :direction
      :rotation :scale
      :set-target} (v3 arg)
    #{:color :clear-color} (c3 arg)
    :else arg))

(defn- key->atr [k] (apply str (rest (str k))))

(defn set-options! [object args]
  (println args)
  (doseq [[key arg] args]
    (cond
      (= :set-target key) (.setTarget object (v3 arg))
      (= :attach-control key) (attach-control key arg)
      :else (aset object (key->atr key) (transform key arg))))
  object)

(defn ->js-scene [engine scene]
  (set-options! (b.Scene. engine) (:options scene)))

(defn ->component
  ([object args] (set-options! object args))
  ([js-scene component args]
   (-> component
       (case
           :camera/free        free-camera
           :light/hemispheric  hemispheric-light
           :mesh/sphere        sphere
           :mesh/ground        ground)
       (apply [js-scene args])
       (set-options! args))))

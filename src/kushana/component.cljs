(ns kushana.component
  (:require [kushana.vector :refer [-v2 -v3 -v4 Vector2 Vector3 Vector4]]))

(defn transform [arg]
  (cond
    (= (type arg) Vector2) (-v2 arg)
    (= (type arg) Vector3) (-v3 arg)
    (= (type arg) Vector4) (-v4 arg)
    :else arg))

(defn key->atr [k] (apply str (rest (str k))))

(defn set-options! [object args]
  (doseq [[key arg] args]
    (cond
     (= :set-target key) (.setTarget object (transform arg))
     (= :attach-control key) (.attachControl object (first arg) (second arg))
     :else (aset object (key->atr key) (transform arg)))))
 

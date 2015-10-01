(ns kushana.component)

(defn key->atr [k] (apply str (rest (str k))))

(defn set-options! [object args]
  (doseq [[key arg] args]
    (cond
     (= :set-target key) (.setTarget object arg)
     (= :attach-control key) (.attachControl object (first arg) (second arg))
     :else (aset object (key->atr key) arg))))
 

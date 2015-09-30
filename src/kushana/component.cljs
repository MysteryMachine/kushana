(ns kushana.component)

(defn- set-vec-map! [vec options]
  (if options
    (let [{:keys [x y z]} options]
      (when x (aset vec "x" x))
      (when y (aset vec "y" y))
      (when z (aset vec "z" z)))))

(defn set-particular! [obj field options]
  (when-let [arg (get options (keyword field))] 
    (if (map? arg) 
      (set-vec-map! (aget obj field) arg)
      (aset obj field arg))))

(def standard-fields ["position" "rotation" "scale"])

(defn set-vectors! [obj options fields]
  (doseq [field fields]
    (set-particular! obj field options))) 

(defn set-standard-vectors! [obj options]
  (set-vectors! obj options standard-fields))

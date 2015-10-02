(ns kushana.engine)

(defmacro defscene [name & args]
  `(def ~name (apply kushana.scene/new ~@args)))

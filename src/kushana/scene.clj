(ns kushana.scene)

(defmacro defscene [name & args]
  `(def ~name (doto ~@args)))

(ns kushana.middleware)

(defmacro defmiddleware [name & args]
  `(def ~name
     (kushana.middleware/middleware (fn ~@args))))

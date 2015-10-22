(ns kushana.macros)

(defmacro defscene [name scene-graph update-fn & args]
  `(def ~name (kushana.core/scene ~scene-graph ~update-fn ~@args)))

(defmacro defmiddleware
  ([name scene-args scene-fn]
   `(def ~name
      (kushana.middleware/middleware
       (fn ~scene-args ~scene-fn)
       identity)))
  ([name scene-args scene-fn input-args input-fn]
   `(def ~name
      (kushana.middleware/middleware
       (fn ~scene-args ~scene-fn)
       (fn ~input-args ~input-fn)))))

(ns kushana.macros)

(defmacro defscene [name scene-graph update-fn & args]
  `(def ~name (kushana.core/scene ~scene-graph ~update-fn ~@args)))

(defmacro defticker [name scene-args scene-fn]
  `(def ~name
     (kushana.middleware/middleware
      :tick
      (fn ~scene-args ~scene-fn))))

(defmacro defhandler [name scene-args scene-fn]
   `(def ~name
      (kushana.middleware/middleware
       :input
       (fn ~scene-args ~scene-fn))))

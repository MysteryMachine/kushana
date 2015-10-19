(ns kushana.scene)

(defmacro defscene [name scene-graph update-fn & args]
  `(def ~name (kushana.scene/new ~scene-graph ~update-fn ~@args)))

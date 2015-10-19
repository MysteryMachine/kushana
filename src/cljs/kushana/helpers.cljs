(ns kushana.helpers)

(defn v3 [x y z] {:x x :y y :z z})
(defn c3 [r g b] {:r r :g g :b b})

(defn sin
"arity 3: (sin t a b) => a*sin(t/b)
 arity 1: (sin t) => sin(t)"
  ([t a b] (* a (.sin js/Math (/ t b))))
  ([t] (sin t 1 1)))

(defn cos
"arity 3: (cos t a b) => a*cos(t/b)
 arity 1: (cos t) => cos(t)"
  ([t a b] (* a (.cos js/Math (/ t b))))
  ([t] (sin t 1 1)))
(ns kushana.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [kushana.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'kushana.core-test))
    0
    1))

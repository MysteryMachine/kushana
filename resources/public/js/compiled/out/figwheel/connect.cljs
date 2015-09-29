(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [kushana.core]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/kushana.core.on-js-reload (apply js/kushana.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'kushana.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})


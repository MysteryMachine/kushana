(ns games.tictactoe.ui
  (:require [reagent.core :as r :refer [atom]]
            [kushana.core
             :refer [connect! engine with-ids ->name new-id v3 c3 sin cos]]))

(defonce ui-atom (atom [0 0]))
(defn ui [scene-atom engine-connection]
  (let [[_ scene-state] (->name @scene-atom "state")
        [x y :as s] @ui-atom
        turn (:turn scene-state)]
    [:div {:style
           {:padding "20px"
            :margin  "20px"
            :position "static"
            :border-color "#929292"
            :border-width "5px"
            :border-style "solid"
            :display "inline-block"}}
     [:div {:style {:padding-bottom "15px"}}
      (str "It is currently " turn  "'s turn!")]
     [:div {:style {:padding-bottom "15px"}}
      [:div {:style {:display "inline-block" :padding "0 15px 0 0"}} "x"]
      [:input
       {:value x
        :type "number"
        :on-change
        (fn [component]
          (reset! ui-atom [(-> component .-target .-value) y]))}]]
     [:div {:style {:padding-bottom "15px"}}
      [:div {:style {:display "inline-block" :padding "0 15px 0 0"}} "y"]
      [:input
       {:value y
        :type "number"
        :on-change
        (fn [component]
          (reset! ui-atom [x (-> component .-target .-value)]))}]]
     [:div>button
      {:on-click
       (fn [] ((:input engine-connection) {turn (map int s)}))}
      "Take Turn"]]))

(defn render-ui [scene-atom engine-connection]
  (r/render [ui scene-atom engine-connection] (.getElementById js/document "app")))

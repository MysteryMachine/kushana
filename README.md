![kuahana](https://github.com/MysteryMachine/kushana/raw/master/kushanaLogo.png "Kushana")

## Introduction

Kushana is a data-driven Clojurescript game engine for building lo-fi 3D games and
prototypes for networked games. It's built on top of [Babylon.js](https://github.com/BabylonJS/Babylon.js),
core.async, [Zelkova](https://github.com/jamesmacaulay/zelkova),
and [Sente](https://github.com/ptaoussanis/sente).

Kushana is largely complete as a proof of concept. Most remaining work exists in
wrapping the underlying Bablyon.js abstractions, and finding functional ways to
represent things inside Babylon. As I was mostly intersted in the proof of
concept (and considering [Arcadia's](https://github.com/arcadia-unity/Arcadia)
components branch has filled a lot of my functional needs), this work is largely
considered complete.

## Motivation

There are very few engines out there built specifically for building art games.
There are engines that allow artists to build simple scenes and simple gameplay,
there are engines that allow programmers to render lots and lots of polygons,
but there really isn't an engine that focuses on allowing an artist to create
complex, meaningful play, from simple tools. Kushana aims to be that engine.

Kushana is entirely data driven. You describe your scene using simple
immutable Clojurescript data structures, and you describe your game's
event loops through transformations of that data. The engine diffs
subsequent transformations of data and modifies the underlying Javascript
scene to match your data.

Simple data is also easy to toss onto the wire. Kushana is able to "move the pipes"
to the backend, allowing you to do your transformations on the server instead.
This allows for multiplayer games, and for "flip a switch" networking. (Disclaimer:
this part's still a work in progress).

Kushana is not meant to be blazing fast, but it is meant to be very simple.
Game logic is comprised of simple, composable, data transformations.
Kushana does not aim to allow you to use every graphical tool that modern
engines might allow you to, but it aims to allow you to use a simple,
effective subset of them, allowing you to build lo-fi 3D games, or to build
tests for networked games.

## How To Get It

Kushana is alpha software, and it's barely functional enough to play tic-tac-toe
on. With that being said, if you'd like to try using it, you just have to clone
the repository. It's not quite ready to be packaged as a dependency for a project,
and for the purposes of rapid development, I'm developing it directly inside
a Chestnut project. Currently, I can't promise that all code in master works,
but I'm pretty close to what I'd consider my first stable release. After that
release, I'll start developing off of a different branch.

## A Quick Tutorial

Kushana uses middleware to describe transformations of scenes.
Use `kushana.middleware/lay` to stack up different middlewares,
and define middlewares by using the `kushana.middleware/defmiddleware`
macro. Middlewares recieve a scene, and a map of user input,
every frame.

```clojure
(ns games.tictactoe
  (:require [kushana.engine :as engine]
			[kushana.scene :refer [with-ids ->name new-id]]
			[kushana.middleware :as m])
  (:use-macros [kushana.scene :only [defscene]]
               [kushana.middleware :only [defmiddleware]]))

(defmiddleware handle-input [scene inputs]
  (let [[id board]    (->name (:scene-graph scene) "state")
        [x z :as pos] (or ((:turn board) inputs) [-1 -1])]
    (if (and
         (not (:winner board))
         (nil? (get board pos))
         (>= x 0) (>= z 0) (< x 3) (< z 3))
      (take-turn id scene pos)
      scene)))

(def update-fn
  (m/lay m/debug
         m/reload
         handle-input
         handle-win))
```

After describing how your game changes, you can define a scene,
which takes a map containing the scene, an update function created
from middleware, and a bunch of options. Your scene can contain
plain data, or components. To check to see what components are
available to you, check `kushana.impl.scene/engine-map`. Use the
`with-ids` function to create a proper map. Use the `c3` and `v3`
helpers to quickly build vectors and colors.

If you're missing something you might want, feel free to implement it and send
over the pull request. All components are implemented in
`kushana/impl/scene.cljs`.

```clojure
(defscene scene
  (with-ids {}
    {:turn :x :name "state"}
    {:scene/component :camera/target
     :name "camera"
     :set-target (v3 0 0 0)
     :position (v3 0 9 0.001)
     :attach-control ["renderCanvas" true]}
    {:scene/component :light/hemispheric
     :name "light"
     :intensity 1
     :direction (v3 0 -1 0)
     :position (v3 0 0 0)
     :groundColor (c3 1 1 1)}
    {:scene/component :mesh/ground
     :name "board"
     :width 100
     :height 100
     :subdivisions 2
     :position (v3 0 -0.01 0)})
  update-fn
  :clearColor (c3 0 1 1))
```

Finally, create an engine. In a reloaded environment, it's
only really required that your engine is defined once.
Use the Sente stuff below if you want your code to talk
to the server. Server stuff does not work quite yet.
If you want your code to just run on your browser,
omit the server option.

```clojure
(defonce scene-atom (atom scene))
(let [{:keys [chsk ch-recv send-fn state] :as sente-info}
      (sente/make-channel-socket! "/chsk" {:type :auto})]
  (def recieve  ch-recv)
  (def send      send-fn))

(defonce engine
  (engine/new
   scene-atom
   :canvas    "renderCanvas"
   :server    {:recieve recieve
               :send    send}
   :antialias true
   :resize    true
   :fps       25))
```

If you included middleware, you can use the REPL to send
messages to the `engine` channel. Check `kushana/middleware.cljs`
to see what middleware is available to you, and what options
you're able to communicate. This feature is currently broken
if you're talking to the server, but I'm working on fixing it.

```clojure
(defn comm! [arg] (put! engine arg))
(defn reload []
	(comm! {:debug/overview false
          :debug/input    false
	        :reload/logic   update-fn}))
```


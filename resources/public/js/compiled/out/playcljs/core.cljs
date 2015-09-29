(ns ^:figwheel-always kushana.core
    (:require babylon))

(enable-console-print!)
(def Babylon js/BABYLON)

(defonce canvas (.getElementById js/document "renderCanvas"))
(defonce engine 
  (let [_engine (Babylon.Engine. canvas true)]
    (.addEventListener js/window "resize" (fn [] (.resize _engine)))
    _engine))

(defn render-game []
  (let [scene (Babylon.Scene. engine)
        camera (Babylon.FreeCamera. "camera1", (Babylon.Vector3. 0 5 -10) scene)
        light (Babylon.HemisphericLight. "light1", (Babylon.Vector3. 0 1 0) scene)
        sphere (Babylon.Mesh.CreateSphere. "sphere1" 16 2 scene)
        ground (Babylon.Mesh.CreateGround. "ground1" 6 6 2 scene)]
    (.setTarget camera (Babylon.Vector3.Zero))
    (.attachControl camera canvas false)
    (set! sphere.position.y 1)
    (.runRenderLoop engine (fn [] (.render scene)))))

(defn on-js-reload [] (render-game)) 
(render-game)

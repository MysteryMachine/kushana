## Research Notes

Research notes kept here pertain to the implmentation details of the
library.

**State**

How should I be building scene graphs? Do I explicitly pass in an atom?
And after things get passed in, what happens next? How do you represent
that data? Simplest way I can think is to keep track of constructor
arguments, and to re-call the set-whatever! function of the object on
the diffs of whatever object is returned in the state function.

```clojure
  (mesh/sphere scene atom ...)

  (...;; inside game logic fn
   (let [new-state (assoc-in (get-id 1 @game-state) [:position :x] 1)])
   ...)
```

**Meshes**

```javascript
  // Babylon meshes render sides, currently modifiable by setting some
  // sort of variable in the mesh to 
  var a = BABYLON.Mesh.FRONTSIDE;
  var b = BABYLON.Mesh.BACKSIDE;
  var c = BABYLON.Mesh.DOUBLESIDE;
```

**Positioning**

```javascript
  object.position.x = 1;
  object.scaling.x = 1;
  object.rotation.x = 1;
  object.parent = box1;
```

**Materials**

```javascript
  sphere1.material = new BABYLON.StandardMaterial("texture1", scene);
  materialSphere1.alpha = 0.5;
  
  // Diffuse
  materialSphere1.diffuseColor = new BABYLON.Color3(1.0, 0.2, 0.7);
  materialSphere1.diffuseTexture = new BABYLON.Texture("grass.png", scene);
  materialSphere1.diffuseTexture.uOffset = 1.5;
  materialSphere1.diffuseTexture.vOffset = 0.5;
  materialSphere1.diffuseTexture.uScale = 5.0;
  materialSphere1.diffuseTexture.vScale = 5.0;

  // The options below represent pretty similar options. Where there is a
  // *Color, *Texture, and all the options seen above for scaling and moving
  // Ambient, Specular, Emissive
  materialSphere1.specularPower = 32; // The bonus specular deal

  materialSphere1.backFaceCulling = false;
  materialSphere1.wireframe = true;
```

```clojure
  ;; What should creating textures look like?

  (material scene
    "myMaterial"
    :alpha 1
    :diffuse-color (rgb 1. 0.2 0.7)
    :diffuse-texture (texture scene
                       "grass.png"
                       :u-offset 1.5
                       :v-scale 5.0)
    :back-face-culling false)
 ```

# kushana

An immutable-friendly front end game library written in Clojurescript.
This is alpha software, and experimental software at that. I wouldn't
recommend writing anything important in it, as the experiment can fail
and thus could be abandoned. At any time.

## Research Notes

Research notes kept here pertain to the implmentation details of the
library.

**Overall**

```clojure
  ;; How do you rig the scene?

  ;; How do you handle the explicit scene rigging implicity?

  ;; Maybe all these functions that take scenes return functions,
  ;; And you map over them to load everything in one fell swoop?
  ;; How do you handle nested structures, then?

  ;; Should it be a macro?
  (defmacro texture [expr]
    (apply texture-internal (cons 'scene expr)))  

  ;; Maybe you leave all of this inside a scene macro, that generates
  ;; seeded versions of these functions for use inside the macro
  (defmacro scene [scene-def & exprs]
   `(let [scene# ~scene-def
          ~'texture (seed-texture scene#)] 
      ~@exprs))
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

  (material
    "myMaterial"
    :alpha 1
    :diffuse-color (rgb 1. 0.2 0.7)
    :diffuse-texture (texture
                       "grass.png"
                       :u-offset 1.5
                       :v-scale 5.0)
    :back-face-culling false)
 ```
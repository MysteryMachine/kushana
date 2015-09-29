// Compiled by ClojureScript 1.7.122 {}
goog.provide('kushana.core');
goog.require('cljs.core');
goog.require('babylon');
cljs.core.enable_console_print_BANG_.call(null);
kushana.core.Babylon = BABYLON;
if(typeof kushana.core.canvas !== 'undefined'){
} else {
kushana.core.canvas = document.getElementById("renderCanvas");
}
if(typeof kushana.core.engine !== 'undefined'){
} else {
kushana.core.engine = (function (){var _engine = (new kushana.core.Babylon.Engine(kushana.core.canvas,true));
window.addEventListener("resize",((function (_engine){
return (function (){
return _engine.resize();
});})(_engine))
);

return _engine;
})();
}
kushana.core.render_game = (function kushana$core$render_game(){
var scene = (new kushana.core.Babylon.Scene(kushana.core.engine));
var camera = (new kushana.core.Babylon.FreeCamera("camera1",(new kushana.core.Babylon.Vector3((0),(5),(-10))),scene));
var light = (new kushana.core.Babylon.HemisphericLight("light1",(new kushana.core.Babylon.Vector3((0),(1),(0))),scene));
var sphere = (new kushana.core.Babylon.Mesh.CreateSphere("sphere1",(16),(2),scene));
var ground = (new kushana.core.Babylon.Mesh.CreateGround("ground1",(6),(6),(2),scene));
camera.setTarget(kushana.core.Babylon.Vector3.Zero.call(null));

camera.attachControl(kushana.core.canvas,false);

sphere.position.y = (1);

return kushana.core.engine.runRenderLoop(((function (scene,camera,light,sphere,ground){
return (function (){
return scene.render();
});})(scene,camera,light,sphere,ground))
);
});
kushana.core.on_js_reload = (function kushana$core$on_js_reload(){
return kushana.core.render_game.call(null);
});
kushana.core.render_game.call(null);

//# sourceMappingURL=core.js.map?rel=1443465558701
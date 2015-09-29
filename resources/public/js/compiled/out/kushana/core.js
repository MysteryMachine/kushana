// Compiled by ClojureScript 1.7.122 {}
goog.provide('kushana.core');
goog.require('cljs.core');
goog.require('kushana.scene');
goog.require('kushana.vector');
goog.require('kushana.camera');
goog.require('kushana.light');
goog.require('kushana.mesh');
goog.require('kushana.color');
goog.require('babylon');
cljs.core.enable_console_print_BANG_.call(null);
kushana.core.babel = BABYLON;
kushana.core.canvas = document.getElementById("renderCanvas");
kushana.core.engine = (function (){var engine = (new kushana.core.babel.Engine(kushana.core.canvas,true));
window.addEventListener("resize",((function (engine){
return (function (){
return engine.resize();
});})(engine))
);

return engine;
})();
kushana.core.make_scene = (function kushana$core$make_scene(){
var G__21245 = kushana.scene.scene.call(null,kushana.core.engine,new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274),kushana.color.c3.call(null,0.5,0.5,0.5));
kushana.light.hemispheric_light.call(null,G__21245,"light1",kushana.vector.v3.call(null,(0),(1),(0)));

kushana.mesh.sphere.call(null,G__21245,"Sphere1",(16),(2),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null));

kushana.mesh.ground.call(null,G__21245,"ground1",(6),(6),(2));

kushana.camera.free_camera.call(null,G__21245,"camera1",kushana.vector.v3.call(null,(0),(3),(-15)),new cljs.core.Keyword(null,"target","target",253001721),kushana.vector.v3.call(null,(0),(0),(0)),new cljs.core.Keyword(null,"attach-control","attach-control",148158638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kushana.core.canvas,false], null));

return G__21245;
});
kushana.core.render_game = (function kushana$core$render_game(){
var my_scene = kushana.core.make_scene.call(null);
return kushana.core.engine.runRenderLoop(((function (my_scene){
return (function (){
return my_scene.render();
});})(my_scene))
);
});
kushana.core.on_js_reload = kushana.core.render_game;
kushana.core.render_game.call(null);

//# sourceMappingURL=core.js.map?rel=1443561012930
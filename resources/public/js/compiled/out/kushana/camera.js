// Compiled by ClojureScript 1.7.122 {}
goog.provide('kushana.camera');
goog.require('cljs.core');
goog.require('babylon');
kushana.camera.babel = BABYLON;
kushana.camera.set_options_BANG_ = (function kushana$camera$set_options_BANG_(camera,options){
if(cljs.core.truth_(options)){
var temp__4425__auto___21097 = new cljs.core.Keyword(null,"set-target","set-target",-964185768).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4425__auto___21097)){
var target_21098 = temp__4425__auto___21097;
camera.setTarget(target_21098);
} else {
}

var temp__4425__auto___21099 = new cljs.core.Keyword(null,"attach-control","attach-control",148158638).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4425__auto___21099)){
var vec__21096_21100 = temp__4425__auto___21099;
var canvas_21101 = cljs.core.nth.call(null,vec__21096_21100,(0),null);
var β_21102 = cljs.core.nth.call(null,vec__21096_21100,(1),null);
camera.attachControl(canvas_21101,β_21102);
} else {
}
} else {
}

return camera;
});
kushana.camera.free_camera = (function kushana$camera$free_camera(var_args){
var args__17371__auto__ = [];
var len__17364__auto___21110 = arguments.length;
var i__17365__auto___21111 = (0);
while(true){
if((i__17365__auto___21111 < len__17364__auto___21110)){
args__17371__auto__.push((arguments[i__17365__auto___21111]));

var G__21112 = (i__17365__auto___21111 + (1));
i__17365__auto___21111 = G__21112;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((3) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((3)),(0))):null);
return kushana.camera.free_camera.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17372__auto__);
});

kushana.camera.free_camera.cljs$core$IFn$_invoke$arity$variadic = (function (scene,name,location,p__21107){
var map__21108 = p__21107;
var map__21108__$1 = ((((!((map__21108 == null)))?((((map__21108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21108):map__21108);
var options = map__21108__$1;
return kushana.camera.set_options_BANG_.call(null,(new kushana.camera.babel.FreeCamera(name,location,scene)),options);
});

kushana.camera.free_camera.cljs$lang$maxFixedArity = (3);

kushana.camera.free_camera.cljs$lang$applyTo = (function (seq21103){
var G__21104 = cljs.core.first.call(null,seq21103);
var seq21103__$1 = cljs.core.next.call(null,seq21103);
var G__21105 = cljs.core.first.call(null,seq21103__$1);
var seq21103__$2 = cljs.core.next.call(null,seq21103__$1);
var G__21106 = cljs.core.first.call(null,seq21103__$2);
var seq21103__$3 = cljs.core.next.call(null,seq21103__$2);
return kushana.camera.free_camera.cljs$core$IFn$_invoke$arity$variadic(G__21104,G__21105,G__21106,seq21103__$3);
});

//# sourceMappingURL=camera.js.map?rel=1443560620522
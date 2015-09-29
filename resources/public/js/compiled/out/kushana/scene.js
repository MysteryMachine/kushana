// Compiled by ClojureScript 1.7.122 {}
goog.provide('kushana.scene');
goog.require('cljs.core');
goog.require('babylon');
kushana.scene.babel = BABYLON;
kushana.scene.set_options_BANG_ = (function kushana$scene$set_options_BANG_(scene,options){
if(cljs.core.truth_(options)){
var temp__4425__auto___21139 = new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4425__auto___21139)){
var clear_color_21140 = temp__4425__auto___21139;
scene.clearColor = clear_color_21140;
} else {
}
} else {
}

return scene;
});
kushana.scene.scene = (function kushana$scene$scene(var_args){
var args__17371__auto__ = [];
var len__17364__auto___21146 = arguments.length;
var i__17365__auto___21147 = (0);
while(true){
if((i__17365__auto___21147 < len__17364__auto___21146)){
args__17371__auto__.push((arguments[i__17365__auto___21147]));

var G__21148 = (i__17365__auto___21147 + (1));
i__17365__auto___21147 = G__21148;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((1) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((1)),(0))):null);
return kushana.scene.scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17372__auto__);
});

kushana.scene.scene.cljs$core$IFn$_invoke$arity$variadic = (function (engine,p__21143){
var map__21144 = p__21143;
var map__21144__$1 = ((((!((map__21144 == null)))?((((map__21144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21144):map__21144);
var options = map__21144__$1;
return kushana.scene.set_options_BANG_.call(null,(new kushana.scene.babel.Scene(engine)),options);
});

kushana.scene.scene.cljs$lang$maxFixedArity = (1);

kushana.scene.scene.cljs$lang$applyTo = (function (seq21141){
var G__21142 = cljs.core.first.call(null,seq21141);
var seq21141__$1 = cljs.core.next.call(null,seq21141);
return kushana.scene.scene.cljs$core$IFn$_invoke$arity$variadic(G__21142,seq21141__$1);
});

//# sourceMappingURL=scene.js.map?rel=1443560665708
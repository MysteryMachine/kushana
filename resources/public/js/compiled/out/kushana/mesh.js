// Compiled by ClojureScript 1.7.122 {}
goog.provide('kushana.mesh');
goog.require('cljs.core');
goog.require('babylon');
kushana.mesh.babel = BABYLON;
kushana.mesh.set_vec_BANG_ = (function kushana$mesh$set_vec_BANG_(vec,options){
if(cljs.core.truth_(options)){
var map__21046 = options;
var map__21046__$1 = ((((!((map__21046 == null)))?((((map__21046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21046):map__21046);
var x = cljs.core.get.call(null,map__21046__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__21046__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.call(null,map__21046__$1,new cljs.core.Keyword(null,"z","z",-789527183));
if(cljs.core.truth_(x)){
vec.x = x;
} else {
}

if(cljs.core.truth_(y)){
vec.y = y;
} else {
}

if(cljs.core.truth_(z)){
return vec.z = z;
} else {
return null;
}
} else {
return null;
}
});
kushana.mesh.set_options_BANG_ = (function kushana$mesh$set_options_BANG_(mesh,options){
if(cljs.core.truth_(options)){
kushana.mesh.set_vec_BANG_.call(null,mesh.position,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(options));

kushana.mesh.set_vec_BANG_.call(null,mesh.rotation,new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(options));

kushana.mesh.set_vec_BANG_.call(null,mesh.scaling,new cljs.core.Keyword(null,"scaling","scaling",2072718421).cljs$core$IFn$_invoke$arity$1(options));

var temp__4425__auto___21048 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4425__auto___21048)){
var parent_21049 = temp__4425__auto___21048;
mesh.parent = parent_21049;
} else {
}
} else {
}

return mesh;
});
kushana.mesh.sphere = (function kushana$mesh$sphere(var_args){
var args__17371__auto__ = [];
var len__17364__auto___21058 = arguments.length;
var i__17365__auto___21059 = (0);
while(true){
if((i__17365__auto___21059 < len__17364__auto___21058)){
args__17371__auto__.push((arguments[i__17365__auto___21059]));

var G__21060 = (i__17365__auto___21059 + (1));
i__17365__auto___21059 = G__21060;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((4) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((4)),(0))):null);
return kushana.mesh.sphere.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__17372__auto__);
});

kushana.mesh.sphere.cljs$core$IFn$_invoke$arity$variadic = (function (scene,name,w,h,p__21055){
var map__21056 = p__21055;
var map__21056__$1 = ((((!((map__21056 == null)))?((((map__21056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21056):map__21056);
var options = map__21056__$1;
return kushana.mesh.set_options_BANG_.call(null,(new kushana.mesh.babel.Mesh.CreateSphere(name,w,h,scene)),options);
});

kushana.mesh.sphere.cljs$lang$maxFixedArity = (4);

kushana.mesh.sphere.cljs$lang$applyTo = (function (seq21050){
var G__21051 = cljs.core.first.call(null,seq21050);
var seq21050__$1 = cljs.core.next.call(null,seq21050);
var G__21052 = cljs.core.first.call(null,seq21050__$1);
var seq21050__$2 = cljs.core.next.call(null,seq21050__$1);
var G__21053 = cljs.core.first.call(null,seq21050__$2);
var seq21050__$3 = cljs.core.next.call(null,seq21050__$2);
var G__21054 = cljs.core.first.call(null,seq21050__$3);
var seq21050__$4 = cljs.core.next.call(null,seq21050__$3);
return kushana.mesh.sphere.cljs$core$IFn$_invoke$arity$variadic(G__21051,G__21052,G__21053,G__21054,seq21050__$4);
});
kushana.mesh.ground = (function kushana$mesh$ground(var_args){
var args__17371__auto__ = [];
var len__17364__auto___21070 = arguments.length;
var i__17365__auto___21071 = (0);
while(true){
if((i__17365__auto___21071 < len__17364__auto___21070)){
args__17371__auto__.push((arguments[i__17365__auto___21071]));

var G__21072 = (i__17365__auto___21071 + (1));
i__17365__auto___21071 = G__21072;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((5) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((5)),(0))):null);
return kushana.mesh.ground.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__17372__auto__);
});

kushana.mesh.ground.cljs$core$IFn$_invoke$arity$variadic = (function (scene,name,x,y,z,p__21067){
var map__21068 = p__21067;
var map__21068__$1 = ((((!((map__21068 == null)))?((((map__21068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21068):map__21068);
var options = map__21068__$1;
return kushana.mesh.set_options_BANG_.call(null,(new kushana.mesh.babel.Mesh.CreateGround(name,x,y,z,scene)),options);
});

kushana.mesh.ground.cljs$lang$maxFixedArity = (5);

kushana.mesh.ground.cljs$lang$applyTo = (function (seq21061){
var G__21062 = cljs.core.first.call(null,seq21061);
var seq21061__$1 = cljs.core.next.call(null,seq21061);
var G__21063 = cljs.core.first.call(null,seq21061__$1);
var seq21061__$2 = cljs.core.next.call(null,seq21061__$1);
var G__21064 = cljs.core.first.call(null,seq21061__$2);
var seq21061__$3 = cljs.core.next.call(null,seq21061__$2);
var G__21065 = cljs.core.first.call(null,seq21061__$3);
var seq21061__$4 = cljs.core.next.call(null,seq21061__$3);
var G__21066 = cljs.core.first.call(null,seq21061__$4);
var seq21061__$5 = cljs.core.next.call(null,seq21061__$4);
return kushana.mesh.ground.cljs$core$IFn$_invoke$arity$variadic(G__21062,G__21063,G__21064,G__21065,G__21066,seq21061__$5);
});

//# sourceMappingURL=mesh.js.map?rel=1443560587554
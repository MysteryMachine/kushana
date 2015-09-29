// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('kushana.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19423__delegate = function (x){
if(cljs.core.truth_(kushana.core.on_js_reload)){
return cljs.core.apply.call(null,kushana.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kushana.core/on-js-reload' is missing");
}
};
var G__19423 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19424__i = 0, G__19424__a = new Array(arguments.length -  0);
while (G__19424__i < G__19424__a.length) {G__19424__a[G__19424__i] = arguments[G__19424__i + 0]; ++G__19424__i;}
  x = new cljs.core.IndexedSeq(G__19424__a,0);
} 
return G__19423__delegate.call(this,x);};
G__19423.cljs$lang$maxFixedArity = 0;
G__19423.cljs$lang$applyTo = (function (arglist__19425){
var x = cljs.core.seq(arglist__19425);
return G__19423__delegate(x);
});
G__19423.cljs$core$IFn$_invoke$arity$variadic = G__19423__delegate;
return G__19423;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1443556906277
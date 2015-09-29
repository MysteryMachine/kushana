// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16306__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16306__auto__){
return or__16306__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16306__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21067_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21067_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21072 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21073 = null;
var count__21074 = (0);
var i__21075 = (0);
while(true){
if((i__21075 < count__21074)){
var n = cljs.core._nth.call(null,chunk__21073,i__21075);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21076 = seq__21072;
var G__21077 = chunk__21073;
var G__21078 = count__21074;
var G__21079 = (i__21075 + (1));
seq__21072 = G__21076;
chunk__21073 = G__21077;
count__21074 = G__21078;
i__21075 = G__21079;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21072);
if(temp__4425__auto__){
var seq__21072__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21072__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__21072__$1);
var G__21080 = cljs.core.chunk_rest.call(null,seq__21072__$1);
var G__21081 = c__17109__auto__;
var G__21082 = cljs.core.count.call(null,c__17109__auto__);
var G__21083 = (0);
seq__21072 = G__21080;
chunk__21073 = G__21081;
count__21074 = G__21082;
i__21075 = G__21083;
continue;
} else {
var n = cljs.core.first.call(null,seq__21072__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21084 = cljs.core.next.call(null,seq__21072__$1);
var G__21085 = null;
var G__21086 = (0);
var G__21087 = (0);
seq__21072 = G__21084;
chunk__21073 = G__21085;
count__21074 = G__21086;
i__21075 = G__21087;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21126_21133 = cljs.core.seq.call(null,deps);
var chunk__21127_21134 = null;
var count__21128_21135 = (0);
var i__21129_21136 = (0);
while(true){
if((i__21129_21136 < count__21128_21135)){
var dep_21137 = cljs.core._nth.call(null,chunk__21127_21134,i__21129_21136);
topo_sort_helper_STAR_.call(null,dep_21137,(depth + (1)),state);

var G__21138 = seq__21126_21133;
var G__21139 = chunk__21127_21134;
var G__21140 = count__21128_21135;
var G__21141 = (i__21129_21136 + (1));
seq__21126_21133 = G__21138;
chunk__21127_21134 = G__21139;
count__21128_21135 = G__21140;
i__21129_21136 = G__21141;
continue;
} else {
var temp__4425__auto___21142 = cljs.core.seq.call(null,seq__21126_21133);
if(temp__4425__auto___21142){
var seq__21126_21143__$1 = temp__4425__auto___21142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21126_21143__$1)){
var c__17109__auto___21144 = cljs.core.chunk_first.call(null,seq__21126_21143__$1);
var G__21145 = cljs.core.chunk_rest.call(null,seq__21126_21143__$1);
var G__21146 = c__17109__auto___21144;
var G__21147 = cljs.core.count.call(null,c__17109__auto___21144);
var G__21148 = (0);
seq__21126_21133 = G__21145;
chunk__21127_21134 = G__21146;
count__21128_21135 = G__21147;
i__21129_21136 = G__21148;
continue;
} else {
var dep_21149 = cljs.core.first.call(null,seq__21126_21143__$1);
topo_sort_helper_STAR_.call(null,dep_21149,(depth + (1)),state);

var G__21150 = cljs.core.next.call(null,seq__21126_21143__$1);
var G__21151 = null;
var G__21152 = (0);
var G__21153 = (0);
seq__21126_21133 = G__21150;
chunk__21127_21134 = G__21151;
count__21128_21135 = G__21152;
i__21129_21136 = G__21153;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21130){
var vec__21132 = p__21130;
var x = cljs.core.nth.call(null,vec__21132,(0),null);
var xs = cljs.core.nthnext.call(null,vec__21132,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21132,x,xs,get_deps__$1){
return (function (p1__21088_SHARP_){
return clojure.set.difference.call(null,p1__21088_SHARP_,x);
});})(vec__21132,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__21166 = cljs.core.seq.call(null,provides);
var chunk__21167 = null;
var count__21168 = (0);
var i__21169 = (0);
while(true){
if((i__21169 < count__21168)){
var prov = cljs.core._nth.call(null,chunk__21167,i__21169);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21170_21178 = cljs.core.seq.call(null,requires);
var chunk__21171_21179 = null;
var count__21172_21180 = (0);
var i__21173_21181 = (0);
while(true){
if((i__21173_21181 < count__21172_21180)){
var req_21182 = cljs.core._nth.call(null,chunk__21171_21179,i__21173_21181);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21182,prov);

var G__21183 = seq__21170_21178;
var G__21184 = chunk__21171_21179;
var G__21185 = count__21172_21180;
var G__21186 = (i__21173_21181 + (1));
seq__21170_21178 = G__21183;
chunk__21171_21179 = G__21184;
count__21172_21180 = G__21185;
i__21173_21181 = G__21186;
continue;
} else {
var temp__4425__auto___21187 = cljs.core.seq.call(null,seq__21170_21178);
if(temp__4425__auto___21187){
var seq__21170_21188__$1 = temp__4425__auto___21187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21170_21188__$1)){
var c__17109__auto___21189 = cljs.core.chunk_first.call(null,seq__21170_21188__$1);
var G__21190 = cljs.core.chunk_rest.call(null,seq__21170_21188__$1);
var G__21191 = c__17109__auto___21189;
var G__21192 = cljs.core.count.call(null,c__17109__auto___21189);
var G__21193 = (0);
seq__21170_21178 = G__21190;
chunk__21171_21179 = G__21191;
count__21172_21180 = G__21192;
i__21173_21181 = G__21193;
continue;
} else {
var req_21194 = cljs.core.first.call(null,seq__21170_21188__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21194,prov);

var G__21195 = cljs.core.next.call(null,seq__21170_21188__$1);
var G__21196 = null;
var G__21197 = (0);
var G__21198 = (0);
seq__21170_21178 = G__21195;
chunk__21171_21179 = G__21196;
count__21172_21180 = G__21197;
i__21173_21181 = G__21198;
continue;
}
} else {
}
}
break;
}

var G__21199 = seq__21166;
var G__21200 = chunk__21167;
var G__21201 = count__21168;
var G__21202 = (i__21169 + (1));
seq__21166 = G__21199;
chunk__21167 = G__21200;
count__21168 = G__21201;
i__21169 = G__21202;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21166);
if(temp__4425__auto__){
var seq__21166__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21166__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__21166__$1);
var G__21203 = cljs.core.chunk_rest.call(null,seq__21166__$1);
var G__21204 = c__17109__auto__;
var G__21205 = cljs.core.count.call(null,c__17109__auto__);
var G__21206 = (0);
seq__21166 = G__21203;
chunk__21167 = G__21204;
count__21168 = G__21205;
i__21169 = G__21206;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21166__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21174_21207 = cljs.core.seq.call(null,requires);
var chunk__21175_21208 = null;
var count__21176_21209 = (0);
var i__21177_21210 = (0);
while(true){
if((i__21177_21210 < count__21176_21209)){
var req_21211 = cljs.core._nth.call(null,chunk__21175_21208,i__21177_21210);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21211,prov);

var G__21212 = seq__21174_21207;
var G__21213 = chunk__21175_21208;
var G__21214 = count__21176_21209;
var G__21215 = (i__21177_21210 + (1));
seq__21174_21207 = G__21212;
chunk__21175_21208 = G__21213;
count__21176_21209 = G__21214;
i__21177_21210 = G__21215;
continue;
} else {
var temp__4425__auto___21216__$1 = cljs.core.seq.call(null,seq__21174_21207);
if(temp__4425__auto___21216__$1){
var seq__21174_21217__$1 = temp__4425__auto___21216__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21174_21217__$1)){
var c__17109__auto___21218 = cljs.core.chunk_first.call(null,seq__21174_21217__$1);
var G__21219 = cljs.core.chunk_rest.call(null,seq__21174_21217__$1);
var G__21220 = c__17109__auto___21218;
var G__21221 = cljs.core.count.call(null,c__17109__auto___21218);
var G__21222 = (0);
seq__21174_21207 = G__21219;
chunk__21175_21208 = G__21220;
count__21176_21209 = G__21221;
i__21177_21210 = G__21222;
continue;
} else {
var req_21223 = cljs.core.first.call(null,seq__21174_21217__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21223,prov);

var G__21224 = cljs.core.next.call(null,seq__21174_21217__$1);
var G__21225 = null;
var G__21226 = (0);
var G__21227 = (0);
seq__21174_21207 = G__21224;
chunk__21175_21208 = G__21225;
count__21176_21209 = G__21226;
i__21177_21210 = G__21227;
continue;
}
} else {
}
}
break;
}

var G__21228 = cljs.core.next.call(null,seq__21166__$1);
var G__21229 = null;
var G__21230 = (0);
var G__21231 = (0);
seq__21166 = G__21228;
chunk__21167 = G__21229;
count__21168 = G__21230;
i__21169 = G__21231;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__21236_21240 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21237_21241 = null;
var count__21238_21242 = (0);
var i__21239_21243 = (0);
while(true){
if((i__21239_21243 < count__21238_21242)){
var ns_21244 = cljs.core._nth.call(null,chunk__21237_21241,i__21239_21243);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21244);

var G__21245 = seq__21236_21240;
var G__21246 = chunk__21237_21241;
var G__21247 = count__21238_21242;
var G__21248 = (i__21239_21243 + (1));
seq__21236_21240 = G__21245;
chunk__21237_21241 = G__21246;
count__21238_21242 = G__21247;
i__21239_21243 = G__21248;
continue;
} else {
var temp__4425__auto___21249 = cljs.core.seq.call(null,seq__21236_21240);
if(temp__4425__auto___21249){
var seq__21236_21250__$1 = temp__4425__auto___21249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21236_21250__$1)){
var c__17109__auto___21251 = cljs.core.chunk_first.call(null,seq__21236_21250__$1);
var G__21252 = cljs.core.chunk_rest.call(null,seq__21236_21250__$1);
var G__21253 = c__17109__auto___21251;
var G__21254 = cljs.core.count.call(null,c__17109__auto___21251);
var G__21255 = (0);
seq__21236_21240 = G__21252;
chunk__21237_21241 = G__21253;
count__21238_21242 = G__21254;
i__21239_21243 = G__21255;
continue;
} else {
var ns_21256 = cljs.core.first.call(null,seq__21236_21250__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21256);

var G__21257 = cljs.core.next.call(null,seq__21236_21250__$1);
var G__21258 = null;
var G__21259 = (0);
var G__21260 = (0);
seq__21236_21240 = G__21257;
chunk__21237_21241 = G__21258;
count__21238_21242 = G__21259;
i__21239_21243 = G__21260;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16306__auto__ = goog.require__;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__21261__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21261 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21262__i = 0, G__21262__a = new Array(arguments.length -  0);
while (G__21262__i < G__21262__a.length) {G__21262__a[G__21262__i] = arguments[G__21262__i + 0]; ++G__21262__i;}
  args = new cljs.core.IndexedSeq(G__21262__a,0);
} 
return G__21261__delegate.call(this,args);};
G__21261.cljs$lang$maxFixedArity = 0;
G__21261.cljs$lang$applyTo = (function (arglist__21263){
var args = cljs.core.seq(arglist__21263);
return G__21261__delegate(args);
});
G__21261.cljs$core$IFn$_invoke$arity$variadic = G__21261__delegate;
return G__21261;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21264 = cljs.core._EQ_;
var expr__21265 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21264.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21265))){
return ((function (pred__21264,expr__21265){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e21267){if((e21267 instanceof Error)){
var e = e21267;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21267;

}
}})());
});
;})(pred__21264,expr__21265))
} else {
if(cljs.core.truth_(pred__21264.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21265))){
return ((function (pred__21264,expr__21265){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__21264,expr__21265){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__21264,expr__21265))
);

return deferred.addErrback(((function (deferred,pred__21264,expr__21265){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__21264,expr__21265))
);
});
;})(pred__21264,expr__21265))
} else {
return ((function (pred__21264,expr__21265){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21264,expr__21265))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21268,callback){
var map__21271 = p__21268;
var map__21271__$1 = ((((!((map__21271 == null)))?((((map__21271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21271):map__21271);
var file_msg = map__21271__$1;
var request_url = cljs.core.get.call(null,map__21271__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21271,map__21271__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21271,map__21271__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_21295){
var state_val_21296 = (state_21295[(1)]);
if((state_val_21296 === (7))){
var inst_21291 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
var statearr_21297_21317 = state_21295__$1;
(statearr_21297_21317[(2)] = inst_21291);

(statearr_21297_21317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (1))){
var state_21295__$1 = state_21295;
var statearr_21298_21318 = state_21295__$1;
(statearr_21298_21318[(2)] = null);

(statearr_21298_21318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (4))){
var inst_21275 = (state_21295[(7)]);
var inst_21275__$1 = (state_21295[(2)]);
var state_21295__$1 = (function (){var statearr_21299 = state_21295;
(statearr_21299[(7)] = inst_21275__$1);

return statearr_21299;
})();
if(cljs.core.truth_(inst_21275__$1)){
var statearr_21300_21319 = state_21295__$1;
(statearr_21300_21319[(1)] = (5));

} else {
var statearr_21301_21320 = state_21295__$1;
(statearr_21301_21320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (6))){
var state_21295__$1 = state_21295;
var statearr_21302_21321 = state_21295__$1;
(statearr_21302_21321[(2)] = null);

(statearr_21302_21321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (3))){
var inst_21293 = (state_21295[(2)]);
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21295__$1,inst_21293);
} else {
if((state_val_21296 === (2))){
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21295__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21296 === (11))){
var inst_21287 = (state_21295[(2)]);
var state_21295__$1 = (function (){var statearr_21303 = state_21295;
(statearr_21303[(8)] = inst_21287);

return statearr_21303;
})();
var statearr_21304_21322 = state_21295__$1;
(statearr_21304_21322[(2)] = null);

(statearr_21304_21322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (9))){
var inst_21281 = (state_21295[(9)]);
var inst_21279 = (state_21295[(10)]);
var inst_21283 = inst_21281.call(null,inst_21279);
var state_21295__$1 = state_21295;
var statearr_21305_21323 = state_21295__$1;
(statearr_21305_21323[(2)] = inst_21283);

(statearr_21305_21323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (5))){
var inst_21275 = (state_21295[(7)]);
var inst_21277 = figwheel.client.file_reloading.blocking_load.call(null,inst_21275);
var state_21295__$1 = state_21295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21295__$1,(8),inst_21277);
} else {
if((state_val_21296 === (10))){
var inst_21279 = (state_21295[(10)]);
var inst_21285 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21279);
var state_21295__$1 = state_21295;
var statearr_21306_21324 = state_21295__$1;
(statearr_21306_21324[(2)] = inst_21285);

(statearr_21306_21324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21296 === (8))){
var inst_21275 = (state_21295[(7)]);
var inst_21281 = (state_21295[(9)]);
var inst_21279 = (state_21295[(2)]);
var inst_21280 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21281__$1 = cljs.core.get.call(null,inst_21280,inst_21275);
var state_21295__$1 = (function (){var statearr_21307 = state_21295;
(statearr_21307[(9)] = inst_21281__$1);

(statearr_21307[(10)] = inst_21279);

return statearr_21307;
})();
if(cljs.core.truth_(inst_21281__$1)){
var statearr_21308_21325 = state_21295__$1;
(statearr_21308_21325[(1)] = (9));

} else {
var statearr_21309_21326 = state_21295__$1;
(statearr_21309_21326[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19309__auto__ = null;
var figwheel$client$file_reloading$state_machine__19309__auto____0 = (function (){
var statearr_21313 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21313[(0)] = figwheel$client$file_reloading$state_machine__19309__auto__);

(statearr_21313[(1)] = (1));

return statearr_21313;
});
var figwheel$client$file_reloading$state_machine__19309__auto____1 = (function (state_21295){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_21295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e21314){if((e21314 instanceof Object)){
var ex__19312__auto__ = e21314;
var statearr_21315_21327 = state_21295;
(statearr_21315_21327[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21328 = state_21295;
state_21295 = G__21328;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19309__auto__ = function(state_21295){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19309__auto____1.call(this,state_21295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19309__auto____0;
figwheel$client$file_reloading$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19309__auto____1;
return figwheel$client$file_reloading$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_21316 = f__19330__auto__.call(null);
(statearr_21316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_21316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21329,callback){
var map__21332 = p__21329;
var map__21332__$1 = ((((!((map__21332 == null)))?((((map__21332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21332):map__21332);
var file_msg = map__21332__$1;
var namespace = cljs.core.get.call(null,map__21332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21332,map__21332__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21332,map__21332__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21334){
var map__21337 = p__21334;
var map__21337__$1 = ((((!((map__21337 == null)))?((((map__21337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21337):map__21337);
var file_msg = map__21337__$1;
var namespace = cljs.core.get.call(null,map__21337__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16294__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16294__auto__){
var or__16306__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
var or__16306__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16306__auto____$1)){
return or__16306__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16294__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21339,callback){
var map__21342 = p__21339;
var map__21342__$1 = ((((!((map__21342 == null)))?((((map__21342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21342):map__21342);
var file_msg = map__21342__$1;
var request_url = cljs.core.get.call(null,map__21342__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21342__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19329__auto___21430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___21430,out){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___21430,out){
return (function (state_21412){
var state_val_21413 = (state_21412[(1)]);
if((state_val_21413 === (1))){
var inst_21390 = cljs.core.nth.call(null,files,(0),null);
var inst_21391 = cljs.core.nthnext.call(null,files,(1));
var inst_21392 = files;
var state_21412__$1 = (function (){var statearr_21414 = state_21412;
(statearr_21414[(7)] = inst_21390);

(statearr_21414[(8)] = inst_21392);

(statearr_21414[(9)] = inst_21391);

return statearr_21414;
})();
var statearr_21415_21431 = state_21412__$1;
(statearr_21415_21431[(2)] = null);

(statearr_21415_21431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21413 === (2))){
var inst_21392 = (state_21412[(8)]);
var inst_21395 = (state_21412[(10)]);
var inst_21395__$1 = cljs.core.nth.call(null,inst_21392,(0),null);
var inst_21396 = cljs.core.nthnext.call(null,inst_21392,(1));
var inst_21397 = (inst_21395__$1 == null);
var inst_21398 = cljs.core.not.call(null,inst_21397);
var state_21412__$1 = (function (){var statearr_21416 = state_21412;
(statearr_21416[(10)] = inst_21395__$1);

(statearr_21416[(11)] = inst_21396);

return statearr_21416;
})();
if(inst_21398){
var statearr_21417_21432 = state_21412__$1;
(statearr_21417_21432[(1)] = (4));

} else {
var statearr_21418_21433 = state_21412__$1;
(statearr_21418_21433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21413 === (3))){
var inst_21410 = (state_21412[(2)]);
var state_21412__$1 = state_21412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21412__$1,inst_21410);
} else {
if((state_val_21413 === (4))){
var inst_21395 = (state_21412[(10)]);
var inst_21400 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21395);
var state_21412__$1 = state_21412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21412__$1,(7),inst_21400);
} else {
if((state_val_21413 === (5))){
var inst_21406 = cljs.core.async.close_BANG_.call(null,out);
var state_21412__$1 = state_21412;
var statearr_21419_21434 = state_21412__$1;
(statearr_21419_21434[(2)] = inst_21406);

(statearr_21419_21434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21413 === (6))){
var inst_21408 = (state_21412[(2)]);
var state_21412__$1 = state_21412;
var statearr_21420_21435 = state_21412__$1;
(statearr_21420_21435[(2)] = inst_21408);

(statearr_21420_21435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21413 === (7))){
var inst_21396 = (state_21412[(11)]);
var inst_21402 = (state_21412[(2)]);
var inst_21403 = cljs.core.async.put_BANG_.call(null,out,inst_21402);
var inst_21392 = inst_21396;
var state_21412__$1 = (function (){var statearr_21421 = state_21412;
(statearr_21421[(8)] = inst_21392);

(statearr_21421[(12)] = inst_21403);

return statearr_21421;
})();
var statearr_21422_21436 = state_21412__$1;
(statearr_21422_21436[(2)] = null);

(statearr_21422_21436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19329__auto___21430,out))
;
return ((function (switch__19308__auto__,c__19329__auto___21430,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto____0 = (function (){
var statearr_21426 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21426[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto__);

(statearr_21426[(1)] = (1));

return statearr_21426;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto____1 = (function (state_21412){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_21412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e21427){if((e21427 instanceof Object)){
var ex__19312__auto__ = e21427;
var statearr_21428_21437 = state_21412;
(statearr_21428_21437[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21438 = state_21412;
state_21412 = G__21438;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto__ = function(state_21412){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto____1.call(this,state_21412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___21430,out))
})();
var state__19331__auto__ = (function (){var statearr_21429 = f__19330__auto__.call(null);
(statearr_21429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___21430);

return statearr_21429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___21430,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21439,opts){
var map__21443 = p__21439;
var map__21443__$1 = ((((!((map__21443 == null)))?((((map__21443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21443):map__21443);
var eval_body__$1 = cljs.core.get.call(null,map__21443__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21443__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16294__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16294__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16294__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e21445){var e = e21445;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__21446_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21446_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__21451){
var vec__21452 = p__21451;
var k = cljs.core.nth.call(null,vec__21452,(0),null);
var v = cljs.core.nth.call(null,vec__21452,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21453){
var vec__21454 = p__21453;
var k = cljs.core.nth.call(null,vec__21454,(0),null);
var v = cljs.core.nth.call(null,vec__21454,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21458,p__21459){
var map__21706 = p__21458;
var map__21706__$1 = ((((!((map__21706 == null)))?((((map__21706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21706):map__21706);
var opts = map__21706__$1;
var before_jsload = cljs.core.get.call(null,map__21706__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21706__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21706__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21707 = p__21459;
var map__21707__$1 = ((((!((map__21707 == null)))?((((map__21707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21707):map__21707);
var msg = map__21707__$1;
var files = cljs.core.get.call(null,map__21707__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21707__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21707__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21860){
var state_val_21861 = (state_21860[(1)]);
if((state_val_21861 === (7))){
var inst_21724 = (state_21860[(7)]);
var inst_21722 = (state_21860[(8)]);
var inst_21723 = (state_21860[(9)]);
var inst_21721 = (state_21860[(10)]);
var inst_21729 = cljs.core._nth.call(null,inst_21722,inst_21724);
var inst_21730 = figwheel.client.file_reloading.eval_body.call(null,inst_21729,opts);
var inst_21731 = (inst_21724 + (1));
var tmp21862 = inst_21722;
var tmp21863 = inst_21723;
var tmp21864 = inst_21721;
var inst_21721__$1 = tmp21864;
var inst_21722__$1 = tmp21862;
var inst_21723__$1 = tmp21863;
var inst_21724__$1 = inst_21731;
var state_21860__$1 = (function (){var statearr_21865 = state_21860;
(statearr_21865[(11)] = inst_21730);

(statearr_21865[(7)] = inst_21724__$1);

(statearr_21865[(8)] = inst_21722__$1);

(statearr_21865[(9)] = inst_21723__$1);

(statearr_21865[(10)] = inst_21721__$1);

return statearr_21865;
})();
var statearr_21866_21952 = state_21860__$1;
(statearr_21866_21952[(2)] = null);

(statearr_21866_21952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (20))){
var inst_21764 = (state_21860[(12)]);
var inst_21772 = figwheel.client.file_reloading.sort_files.call(null,inst_21764);
var state_21860__$1 = state_21860;
var statearr_21867_21953 = state_21860__$1;
(statearr_21867_21953[(2)] = inst_21772);

(statearr_21867_21953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (27))){
var state_21860__$1 = state_21860;
var statearr_21868_21954 = state_21860__$1;
(statearr_21868_21954[(2)] = null);

(statearr_21868_21954[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (1))){
var inst_21713 = (state_21860[(13)]);
var inst_21710 = before_jsload.call(null,files);
var inst_21711 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21712 = (function (){return ((function (inst_21713,inst_21710,inst_21711,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21455_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21455_SHARP_);
});
;})(inst_21713,inst_21710,inst_21711,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21713__$1 = cljs.core.filter.call(null,inst_21712,files);
var inst_21714 = cljs.core.not_empty.call(null,inst_21713__$1);
var state_21860__$1 = (function (){var statearr_21869 = state_21860;
(statearr_21869[(13)] = inst_21713__$1);

(statearr_21869[(14)] = inst_21710);

(statearr_21869[(15)] = inst_21711);

return statearr_21869;
})();
if(cljs.core.truth_(inst_21714)){
var statearr_21870_21955 = state_21860__$1;
(statearr_21870_21955[(1)] = (2));

} else {
var statearr_21871_21956 = state_21860__$1;
(statearr_21871_21956[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (24))){
var state_21860__$1 = state_21860;
var statearr_21872_21957 = state_21860__$1;
(statearr_21872_21957[(2)] = null);

(statearr_21872_21957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (39))){
var inst_21814 = (state_21860[(16)]);
var state_21860__$1 = state_21860;
var statearr_21873_21958 = state_21860__$1;
(statearr_21873_21958[(2)] = inst_21814);

(statearr_21873_21958[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (46))){
var inst_21855 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21874_21959 = state_21860__$1;
(statearr_21874_21959[(2)] = inst_21855);

(statearr_21874_21959[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (4))){
var inst_21758 = (state_21860[(2)]);
var inst_21759 = cljs.core.List.EMPTY;
var inst_21760 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21759);
var inst_21761 = (function (){return ((function (inst_21758,inst_21759,inst_21760,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21456_SHARP_){
var and__16294__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21456_SHARP_);
if(cljs.core.truth_(and__16294__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21456_SHARP_));
} else {
return and__16294__auto__;
}
});
;})(inst_21758,inst_21759,inst_21760,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21762 = cljs.core.filter.call(null,inst_21761,files);
var inst_21763 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21764 = cljs.core.concat.call(null,inst_21762,inst_21763);
var state_21860__$1 = (function (){var statearr_21875 = state_21860;
(statearr_21875[(17)] = inst_21760);

(statearr_21875[(18)] = inst_21758);

(statearr_21875[(12)] = inst_21764);

return statearr_21875;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21876_21960 = state_21860__$1;
(statearr_21876_21960[(1)] = (16));

} else {
var statearr_21877_21961 = state_21860__$1;
(statearr_21877_21961[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (15))){
var inst_21748 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21878_21962 = state_21860__$1;
(statearr_21878_21962[(2)] = inst_21748);

(statearr_21878_21962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (21))){
var inst_21774 = (state_21860[(19)]);
var inst_21774__$1 = (state_21860[(2)]);
var inst_21775 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21774__$1);
var state_21860__$1 = (function (){var statearr_21879 = state_21860;
(statearr_21879[(19)] = inst_21774__$1);

return statearr_21879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21860__$1,(22),inst_21775);
} else {
if((state_val_21861 === (31))){
var inst_21858 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21860__$1,inst_21858);
} else {
if((state_val_21861 === (32))){
var inst_21814 = (state_21860[(16)]);
var inst_21819 = inst_21814.cljs$lang$protocol_mask$partition0$;
var inst_21820 = (inst_21819 & (64));
var inst_21821 = inst_21814.cljs$core$ISeq$;
var inst_21822 = (inst_21820) || (inst_21821);
var state_21860__$1 = state_21860;
if(cljs.core.truth_(inst_21822)){
var statearr_21880_21963 = state_21860__$1;
(statearr_21880_21963[(1)] = (35));

} else {
var statearr_21881_21964 = state_21860__$1;
(statearr_21881_21964[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (40))){
var inst_21835 = (state_21860[(20)]);
var inst_21834 = (state_21860[(2)]);
var inst_21835__$1 = cljs.core.get.call(null,inst_21834,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21836 = cljs.core.get.call(null,inst_21834,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21837 = cljs.core.not_empty.call(null,inst_21835__$1);
var state_21860__$1 = (function (){var statearr_21882 = state_21860;
(statearr_21882[(20)] = inst_21835__$1);

(statearr_21882[(21)] = inst_21836);

return statearr_21882;
})();
if(cljs.core.truth_(inst_21837)){
var statearr_21883_21965 = state_21860__$1;
(statearr_21883_21965[(1)] = (41));

} else {
var statearr_21884_21966 = state_21860__$1;
(statearr_21884_21966[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (33))){
var state_21860__$1 = state_21860;
var statearr_21885_21967 = state_21860__$1;
(statearr_21885_21967[(2)] = false);

(statearr_21885_21967[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (13))){
var inst_21734 = (state_21860[(22)]);
var inst_21738 = cljs.core.chunk_first.call(null,inst_21734);
var inst_21739 = cljs.core.chunk_rest.call(null,inst_21734);
var inst_21740 = cljs.core.count.call(null,inst_21738);
var inst_21721 = inst_21739;
var inst_21722 = inst_21738;
var inst_21723 = inst_21740;
var inst_21724 = (0);
var state_21860__$1 = (function (){var statearr_21886 = state_21860;
(statearr_21886[(7)] = inst_21724);

(statearr_21886[(8)] = inst_21722);

(statearr_21886[(9)] = inst_21723);

(statearr_21886[(10)] = inst_21721);

return statearr_21886;
})();
var statearr_21887_21968 = state_21860__$1;
(statearr_21887_21968[(2)] = null);

(statearr_21887_21968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (22))){
var inst_21777 = (state_21860[(23)]);
var inst_21778 = (state_21860[(24)]);
var inst_21774 = (state_21860[(19)]);
var inst_21782 = (state_21860[(25)]);
var inst_21777__$1 = (state_21860[(2)]);
var inst_21778__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21777__$1);
var inst_21779 = (function (){var all_files = inst_21774;
var res_SINGLEQUOTE_ = inst_21777__$1;
var res = inst_21778__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21777,inst_21778,inst_21774,inst_21782,inst_21777__$1,inst_21778__$1,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21457_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21457_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21777,inst_21778,inst_21774,inst_21782,inst_21777__$1,inst_21778__$1,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21780 = cljs.core.filter.call(null,inst_21779,inst_21777__$1);
var inst_21781 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21782__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21781);
var inst_21783 = cljs.core.not_empty.call(null,inst_21782__$1);
var state_21860__$1 = (function (){var statearr_21888 = state_21860;
(statearr_21888[(26)] = inst_21780);

(statearr_21888[(23)] = inst_21777__$1);

(statearr_21888[(24)] = inst_21778__$1);

(statearr_21888[(25)] = inst_21782__$1);

return statearr_21888;
})();
if(cljs.core.truth_(inst_21783)){
var statearr_21889_21969 = state_21860__$1;
(statearr_21889_21969[(1)] = (23));

} else {
var statearr_21890_21970 = state_21860__$1;
(statearr_21890_21970[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (36))){
var state_21860__$1 = state_21860;
var statearr_21891_21971 = state_21860__$1;
(statearr_21891_21971[(2)] = false);

(statearr_21891_21971[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (41))){
var inst_21835 = (state_21860[(20)]);
var inst_21839 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21840 = cljs.core.map.call(null,inst_21839,inst_21835);
var inst_21841 = cljs.core.pr_str.call(null,inst_21840);
var inst_21842 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21841)].join('');
var inst_21843 = figwheel.client.utils.log.call(null,inst_21842);
var state_21860__$1 = state_21860;
var statearr_21892_21972 = state_21860__$1;
(statearr_21892_21972[(2)] = inst_21843);

(statearr_21892_21972[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (43))){
var inst_21836 = (state_21860[(21)]);
var inst_21846 = (state_21860[(2)]);
var inst_21847 = cljs.core.not_empty.call(null,inst_21836);
var state_21860__$1 = (function (){var statearr_21893 = state_21860;
(statearr_21893[(27)] = inst_21846);

return statearr_21893;
})();
if(cljs.core.truth_(inst_21847)){
var statearr_21894_21973 = state_21860__$1;
(statearr_21894_21973[(1)] = (44));

} else {
var statearr_21895_21974 = state_21860__$1;
(statearr_21895_21974[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (29))){
var inst_21780 = (state_21860[(26)]);
var inst_21777 = (state_21860[(23)]);
var inst_21778 = (state_21860[(24)]);
var inst_21774 = (state_21860[(19)]);
var inst_21782 = (state_21860[(25)]);
var inst_21814 = (state_21860[(16)]);
var inst_21810 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21813 = (function (){var all_files = inst_21774;
var res_SINGLEQUOTE_ = inst_21777;
var res = inst_21778;
var files_not_loaded = inst_21780;
var dependencies_that_loaded = inst_21782;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21814,inst_21810,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21812){
var map__21896 = p__21812;
var map__21896__$1 = ((((!((map__21896 == null)))?((((map__21896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21896):map__21896);
var namespace = cljs.core.get.call(null,map__21896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21814,inst_21810,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21814__$1 = cljs.core.group_by.call(null,inst_21813,inst_21780);
var inst_21816 = (inst_21814__$1 == null);
var inst_21817 = cljs.core.not.call(null,inst_21816);
var state_21860__$1 = (function (){var statearr_21898 = state_21860;
(statearr_21898[(16)] = inst_21814__$1);

(statearr_21898[(28)] = inst_21810);

return statearr_21898;
})();
if(inst_21817){
var statearr_21899_21975 = state_21860__$1;
(statearr_21899_21975[(1)] = (32));

} else {
var statearr_21900_21976 = state_21860__$1;
(statearr_21900_21976[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (44))){
var inst_21836 = (state_21860[(21)]);
var inst_21849 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21836);
var inst_21850 = cljs.core.pr_str.call(null,inst_21849);
var inst_21851 = [cljs.core.str("not required: "),cljs.core.str(inst_21850)].join('');
var inst_21852 = figwheel.client.utils.log.call(null,inst_21851);
var state_21860__$1 = state_21860;
var statearr_21901_21977 = state_21860__$1;
(statearr_21901_21977[(2)] = inst_21852);

(statearr_21901_21977[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (6))){
var inst_21755 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21902_21978 = state_21860__$1;
(statearr_21902_21978[(2)] = inst_21755);

(statearr_21902_21978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (28))){
var inst_21780 = (state_21860[(26)]);
var inst_21807 = (state_21860[(2)]);
var inst_21808 = cljs.core.not_empty.call(null,inst_21780);
var state_21860__$1 = (function (){var statearr_21903 = state_21860;
(statearr_21903[(29)] = inst_21807);

return statearr_21903;
})();
if(cljs.core.truth_(inst_21808)){
var statearr_21904_21979 = state_21860__$1;
(statearr_21904_21979[(1)] = (29));

} else {
var statearr_21905_21980 = state_21860__$1;
(statearr_21905_21980[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (25))){
var inst_21778 = (state_21860[(24)]);
var inst_21794 = (state_21860[(2)]);
var inst_21795 = cljs.core.not_empty.call(null,inst_21778);
var state_21860__$1 = (function (){var statearr_21906 = state_21860;
(statearr_21906[(30)] = inst_21794);

return statearr_21906;
})();
if(cljs.core.truth_(inst_21795)){
var statearr_21907_21981 = state_21860__$1;
(statearr_21907_21981[(1)] = (26));

} else {
var statearr_21908_21982 = state_21860__$1;
(statearr_21908_21982[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (34))){
var inst_21829 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
if(cljs.core.truth_(inst_21829)){
var statearr_21909_21983 = state_21860__$1;
(statearr_21909_21983[(1)] = (38));

} else {
var statearr_21910_21984 = state_21860__$1;
(statearr_21910_21984[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (17))){
var state_21860__$1 = state_21860;
var statearr_21911_21985 = state_21860__$1;
(statearr_21911_21985[(2)] = recompile_dependents);

(statearr_21911_21985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (3))){
var state_21860__$1 = state_21860;
var statearr_21912_21986 = state_21860__$1;
(statearr_21912_21986[(2)] = null);

(statearr_21912_21986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (12))){
var inst_21751 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21913_21987 = state_21860__$1;
(statearr_21913_21987[(2)] = inst_21751);

(statearr_21913_21987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (2))){
var inst_21713 = (state_21860[(13)]);
var inst_21720 = cljs.core.seq.call(null,inst_21713);
var inst_21721 = inst_21720;
var inst_21722 = null;
var inst_21723 = (0);
var inst_21724 = (0);
var state_21860__$1 = (function (){var statearr_21914 = state_21860;
(statearr_21914[(7)] = inst_21724);

(statearr_21914[(8)] = inst_21722);

(statearr_21914[(9)] = inst_21723);

(statearr_21914[(10)] = inst_21721);

return statearr_21914;
})();
var statearr_21915_21988 = state_21860__$1;
(statearr_21915_21988[(2)] = null);

(statearr_21915_21988[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (23))){
var inst_21780 = (state_21860[(26)]);
var inst_21777 = (state_21860[(23)]);
var inst_21778 = (state_21860[(24)]);
var inst_21774 = (state_21860[(19)]);
var inst_21782 = (state_21860[(25)]);
var inst_21785 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21787 = (function (){var all_files = inst_21774;
var res_SINGLEQUOTE_ = inst_21777;
var res = inst_21778;
var files_not_loaded = inst_21780;
var dependencies_that_loaded = inst_21782;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21785,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21786){
var map__21916 = p__21786;
var map__21916__$1 = ((((!((map__21916 == null)))?((((map__21916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21916):map__21916);
var request_url = cljs.core.get.call(null,map__21916__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21785,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21788 = cljs.core.reverse.call(null,inst_21782);
var inst_21789 = cljs.core.map.call(null,inst_21787,inst_21788);
var inst_21790 = cljs.core.pr_str.call(null,inst_21789);
var inst_21791 = figwheel.client.utils.log.call(null,inst_21790);
var state_21860__$1 = (function (){var statearr_21918 = state_21860;
(statearr_21918[(31)] = inst_21785);

return statearr_21918;
})();
var statearr_21919_21989 = state_21860__$1;
(statearr_21919_21989[(2)] = inst_21791);

(statearr_21919_21989[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (35))){
var state_21860__$1 = state_21860;
var statearr_21920_21990 = state_21860__$1;
(statearr_21920_21990[(2)] = true);

(statearr_21920_21990[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (19))){
var inst_21764 = (state_21860[(12)]);
var inst_21770 = figwheel.client.file_reloading.expand_files.call(null,inst_21764);
var state_21860__$1 = state_21860;
var statearr_21921_21991 = state_21860__$1;
(statearr_21921_21991[(2)] = inst_21770);

(statearr_21921_21991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (11))){
var state_21860__$1 = state_21860;
var statearr_21922_21992 = state_21860__$1;
(statearr_21922_21992[(2)] = null);

(statearr_21922_21992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (9))){
var inst_21753 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21923_21993 = state_21860__$1;
(statearr_21923_21993[(2)] = inst_21753);

(statearr_21923_21993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (5))){
var inst_21724 = (state_21860[(7)]);
var inst_21723 = (state_21860[(9)]);
var inst_21726 = (inst_21724 < inst_21723);
var inst_21727 = inst_21726;
var state_21860__$1 = state_21860;
if(cljs.core.truth_(inst_21727)){
var statearr_21924_21994 = state_21860__$1;
(statearr_21924_21994[(1)] = (7));

} else {
var statearr_21925_21995 = state_21860__$1;
(statearr_21925_21995[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (14))){
var inst_21734 = (state_21860[(22)]);
var inst_21743 = cljs.core.first.call(null,inst_21734);
var inst_21744 = figwheel.client.file_reloading.eval_body.call(null,inst_21743,opts);
var inst_21745 = cljs.core.next.call(null,inst_21734);
var inst_21721 = inst_21745;
var inst_21722 = null;
var inst_21723 = (0);
var inst_21724 = (0);
var state_21860__$1 = (function (){var statearr_21926 = state_21860;
(statearr_21926[(7)] = inst_21724);

(statearr_21926[(8)] = inst_21722);

(statearr_21926[(9)] = inst_21723);

(statearr_21926[(32)] = inst_21744);

(statearr_21926[(10)] = inst_21721);

return statearr_21926;
})();
var statearr_21927_21996 = state_21860__$1;
(statearr_21927_21996[(2)] = null);

(statearr_21927_21996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (45))){
var state_21860__$1 = state_21860;
var statearr_21928_21997 = state_21860__$1;
(statearr_21928_21997[(2)] = null);

(statearr_21928_21997[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (26))){
var inst_21780 = (state_21860[(26)]);
var inst_21777 = (state_21860[(23)]);
var inst_21778 = (state_21860[(24)]);
var inst_21774 = (state_21860[(19)]);
var inst_21782 = (state_21860[(25)]);
var inst_21797 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21799 = (function (){var all_files = inst_21774;
var res_SINGLEQUOTE_ = inst_21777;
var res = inst_21778;
var files_not_loaded = inst_21780;
var dependencies_that_loaded = inst_21782;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21797,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21798){
var map__21929 = p__21798;
var map__21929__$1 = ((((!((map__21929 == null)))?((((map__21929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21929):map__21929);
var namespace = cljs.core.get.call(null,map__21929__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21929__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21797,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21800 = cljs.core.map.call(null,inst_21799,inst_21778);
var inst_21801 = cljs.core.pr_str.call(null,inst_21800);
var inst_21802 = figwheel.client.utils.log.call(null,inst_21801);
var inst_21803 = (function (){var all_files = inst_21774;
var res_SINGLEQUOTE_ = inst_21777;
var res = inst_21778;
var files_not_loaded = inst_21780;
var dependencies_that_loaded = inst_21782;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21797,inst_21799,inst_21800,inst_21801,inst_21802,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21780,inst_21777,inst_21778,inst_21774,inst_21782,inst_21797,inst_21799,inst_21800,inst_21801,inst_21802,state_val_21861,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21804 = setTimeout(inst_21803,(10));
var state_21860__$1 = (function (){var statearr_21931 = state_21860;
(statearr_21931[(33)] = inst_21802);

(statearr_21931[(34)] = inst_21797);

return statearr_21931;
})();
var statearr_21932_21998 = state_21860__$1;
(statearr_21932_21998[(2)] = inst_21804);

(statearr_21932_21998[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (16))){
var state_21860__$1 = state_21860;
var statearr_21933_21999 = state_21860__$1;
(statearr_21933_21999[(2)] = reload_dependents);

(statearr_21933_21999[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (38))){
var inst_21814 = (state_21860[(16)]);
var inst_21831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21814);
var state_21860__$1 = state_21860;
var statearr_21934_22000 = state_21860__$1;
(statearr_21934_22000[(2)] = inst_21831);

(statearr_21934_22000[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (30))){
var state_21860__$1 = state_21860;
var statearr_21935_22001 = state_21860__$1;
(statearr_21935_22001[(2)] = null);

(statearr_21935_22001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (10))){
var inst_21734 = (state_21860[(22)]);
var inst_21736 = cljs.core.chunked_seq_QMARK_.call(null,inst_21734);
var state_21860__$1 = state_21860;
if(inst_21736){
var statearr_21936_22002 = state_21860__$1;
(statearr_21936_22002[(1)] = (13));

} else {
var statearr_21937_22003 = state_21860__$1;
(statearr_21937_22003[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (18))){
var inst_21768 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
if(cljs.core.truth_(inst_21768)){
var statearr_21938_22004 = state_21860__$1;
(statearr_21938_22004[(1)] = (19));

} else {
var statearr_21939_22005 = state_21860__$1;
(statearr_21939_22005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (42))){
var state_21860__$1 = state_21860;
var statearr_21940_22006 = state_21860__$1;
(statearr_21940_22006[(2)] = null);

(statearr_21940_22006[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (37))){
var inst_21826 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21941_22007 = state_21860__$1;
(statearr_21941_22007[(2)] = inst_21826);

(statearr_21941_22007[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21861 === (8))){
var inst_21721 = (state_21860[(10)]);
var inst_21734 = (state_21860[(22)]);
var inst_21734__$1 = cljs.core.seq.call(null,inst_21721);
var state_21860__$1 = (function (){var statearr_21942 = state_21860;
(statearr_21942[(22)] = inst_21734__$1);

return statearr_21942;
})();
if(inst_21734__$1){
var statearr_21943_22008 = state_21860__$1;
(statearr_21943_22008[(1)] = (10));

} else {
var statearr_21944_22009 = state_21860__$1;
(statearr_21944_22009[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19308__auto__,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto____0 = (function (){
var statearr_21948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21948[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto__);

(statearr_21948[(1)] = (1));

return statearr_21948;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto____1 = (function (state_21860){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_21860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e21949){if((e21949 instanceof Object)){
var ex__19312__auto__ = e21949;
var statearr_21950_22010 = state_21860;
(statearr_21950_22010[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22011 = state_21860;
state_21860 = G__22011;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto__ = function(state_21860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto____1.call(this,state_21860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19331__auto__ = (function (){var statearr_21951 = f__19330__auto__.call(null);
(statearr_21951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_21951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__,map__21706,map__21706__$1,opts,before_jsload,on_jsload,reload_dependents,map__21707,map__21707__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19329__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22014,link){
var map__22017 = p__22014;
var map__22017__$1 = ((((!((map__22017 == null)))?((((map__22017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22017):map__22017);
var file = cljs.core.get.call(null,map__22017__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22017,map__22017__$1,file){
return (function (p1__22012_SHARP_,p2__22013_SHARP_){
if(cljs.core._EQ_.call(null,p1__22012_SHARP_,p2__22013_SHARP_)){
return p1__22012_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22017,map__22017__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22023){
var map__22024 = p__22023;
var map__22024__$1 = ((((!((map__22024 == null)))?((((map__22024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22024):map__22024);
var match_length = cljs.core.get.call(null,map__22024__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22024__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22019_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22019_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22026 = [];
var len__17364__auto___22029 = arguments.length;
var i__17365__auto___22030 = (0);
while(true){
if((i__17365__auto___22030 < len__17364__auto___22029)){
args22026.push((arguments[i__17365__auto___22030]));

var G__22031 = (i__17365__auto___22030 + (1));
i__17365__auto___22030 = G__22031;
continue;
} else {
}
break;
}

var G__22028 = args22026.length;
switch (G__22028) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22026.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22033_SHARP_,p2__22034_SHARP_){
return cljs.core.assoc.call(null,p1__22033_SHARP_,cljs.core.get.call(null,p2__22034_SHARP_,key),p2__22034_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22035){
var map__22038 = p__22035;
var map__22038__$1 = ((((!((map__22038 == null)))?((((map__22038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22038):map__22038);
var f_data = map__22038__$1;
var file = cljs.core.get.call(null,map__22038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22040,files_msg){
var map__22047 = p__22040;
var map__22047__$1 = ((((!((map__22047 == null)))?((((map__22047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22047):map__22047);
var opts = map__22047__$1;
var on_cssload = cljs.core.get.call(null,map__22047__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22049_22053 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22050_22054 = null;
var count__22051_22055 = (0);
var i__22052_22056 = (0);
while(true){
if((i__22052_22056 < count__22051_22055)){
var f_22057 = cljs.core._nth.call(null,chunk__22050_22054,i__22052_22056);
figwheel.client.file_reloading.reload_css_file.call(null,f_22057);

var G__22058 = seq__22049_22053;
var G__22059 = chunk__22050_22054;
var G__22060 = count__22051_22055;
var G__22061 = (i__22052_22056 + (1));
seq__22049_22053 = G__22058;
chunk__22050_22054 = G__22059;
count__22051_22055 = G__22060;
i__22052_22056 = G__22061;
continue;
} else {
var temp__4425__auto___22062 = cljs.core.seq.call(null,seq__22049_22053);
if(temp__4425__auto___22062){
var seq__22049_22063__$1 = temp__4425__auto___22062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22049_22063__$1)){
var c__17109__auto___22064 = cljs.core.chunk_first.call(null,seq__22049_22063__$1);
var G__22065 = cljs.core.chunk_rest.call(null,seq__22049_22063__$1);
var G__22066 = c__17109__auto___22064;
var G__22067 = cljs.core.count.call(null,c__17109__auto___22064);
var G__22068 = (0);
seq__22049_22053 = G__22065;
chunk__22050_22054 = G__22066;
count__22051_22055 = G__22067;
i__22052_22056 = G__22068;
continue;
} else {
var f_22069 = cljs.core.first.call(null,seq__22049_22063__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22069);

var G__22070 = cljs.core.next.call(null,seq__22049_22063__$1);
var G__22071 = null;
var G__22072 = (0);
var G__22073 = (0);
seq__22049_22053 = G__22070;
chunk__22050_22054 = G__22071;
count__22051_22055 = G__22072;
i__22052_22056 = G__22073;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22047,map__22047__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22047,map__22047__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1442702299380
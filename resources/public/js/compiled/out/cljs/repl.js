// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21015_21029 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21016_21030 = null;
var count__21017_21031 = (0);
var i__21018_21032 = (0);
while(true){
if((i__21018_21032 < count__21017_21031)){
var f_21033 = cljs.core._nth.call(null,chunk__21016_21030,i__21018_21032);
cljs.core.println.call(null,"  ",f_21033);

var G__21034 = seq__21015_21029;
var G__21035 = chunk__21016_21030;
var G__21036 = count__21017_21031;
var G__21037 = (i__21018_21032 + (1));
seq__21015_21029 = G__21034;
chunk__21016_21030 = G__21035;
count__21017_21031 = G__21036;
i__21018_21032 = G__21037;
continue;
} else {
var temp__4425__auto___21038 = cljs.core.seq.call(null,seq__21015_21029);
if(temp__4425__auto___21038){
var seq__21015_21039__$1 = temp__4425__auto___21038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21015_21039__$1)){
var c__17109__auto___21040 = cljs.core.chunk_first.call(null,seq__21015_21039__$1);
var G__21041 = cljs.core.chunk_rest.call(null,seq__21015_21039__$1);
var G__21042 = c__17109__auto___21040;
var G__21043 = cljs.core.count.call(null,c__17109__auto___21040);
var G__21044 = (0);
seq__21015_21029 = G__21041;
chunk__21016_21030 = G__21042;
count__21017_21031 = G__21043;
i__21018_21032 = G__21044;
continue;
} else {
var f_21045 = cljs.core.first.call(null,seq__21015_21039__$1);
cljs.core.println.call(null,"  ",f_21045);

var G__21046 = cljs.core.next.call(null,seq__21015_21039__$1);
var G__21047 = null;
var G__21048 = (0);
var G__21049 = (0);
seq__21015_21029 = G__21046;
chunk__21016_21030 = G__21047;
count__21017_21031 = G__21048;
i__21018_21032 = G__21049;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21050 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16306__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21050);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21050)))?cljs.core.second.call(null,arglists_21050):arglists_21050));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21019 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21020 = null;
var count__21021 = (0);
var i__21022 = (0);
while(true){
if((i__21022 < count__21021)){
var vec__21023 = cljs.core._nth.call(null,chunk__21020,i__21022);
var name = cljs.core.nth.call(null,vec__21023,(0),null);
var map__21024 = cljs.core.nth.call(null,vec__21023,(1),null);
var map__21024__$1 = ((((!((map__21024 == null)))?((((map__21024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21024):map__21024);
var doc = cljs.core.get.call(null,map__21024__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21024__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21051 = seq__21019;
var G__21052 = chunk__21020;
var G__21053 = count__21021;
var G__21054 = (i__21022 + (1));
seq__21019 = G__21051;
chunk__21020 = G__21052;
count__21021 = G__21053;
i__21022 = G__21054;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21019);
if(temp__4425__auto__){
var seq__21019__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21019__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__21019__$1);
var G__21055 = cljs.core.chunk_rest.call(null,seq__21019__$1);
var G__21056 = c__17109__auto__;
var G__21057 = cljs.core.count.call(null,c__17109__auto__);
var G__21058 = (0);
seq__21019 = G__21055;
chunk__21020 = G__21056;
count__21021 = G__21057;
i__21022 = G__21058;
continue;
} else {
var vec__21026 = cljs.core.first.call(null,seq__21019__$1);
var name = cljs.core.nth.call(null,vec__21026,(0),null);
var map__21027 = cljs.core.nth.call(null,vec__21026,(1),null);
var map__21027__$1 = ((((!((map__21027 == null)))?((((map__21027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21027):map__21027);
var doc = cljs.core.get.call(null,map__21027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__21027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__21059 = cljs.core.next.call(null,seq__21019__$1);
var G__21060 = null;
var G__21061 = (0);
var G__21062 = (0);
seq__21019 = G__21059;
chunk__21020 = G__21060;
count__21021 = G__21061;
i__21022 = G__21062;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1442702298744
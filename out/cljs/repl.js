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
var seq__19846_19902 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19847_19903 = null;
var count__19848_19904 = (0);
var i__19849_19905 = (0);
while(true){
if((i__19849_19905 < count__19848_19904)){
var f_19908 = cljs.core._nth.call(null,chunk__19847_19903,i__19849_19905);
cljs.core.println.call(null,"  ",f_19908);

var G__19909 = seq__19846_19902;
var G__19910 = chunk__19847_19903;
var G__19911 = count__19848_19904;
var G__19912 = (i__19849_19905 + (1));
seq__19846_19902 = G__19909;
chunk__19847_19903 = G__19910;
count__19848_19904 = G__19911;
i__19849_19905 = G__19912;
continue;
} else {
var temp__4425__auto___19915 = cljs.core.seq.call(null,seq__19846_19902);
if(temp__4425__auto___19915){
var seq__19846_19920__$1 = temp__4425__auto___19915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19846_19920__$1)){
var c__17109__auto___19921 = cljs.core.chunk_first.call(null,seq__19846_19920__$1);
var G__19922 = cljs.core.chunk_rest.call(null,seq__19846_19920__$1);
var G__19923 = c__17109__auto___19921;
var G__19924 = cljs.core.count.call(null,c__17109__auto___19921);
var G__19925 = (0);
seq__19846_19902 = G__19922;
chunk__19847_19903 = G__19923;
count__19848_19904 = G__19924;
i__19849_19905 = G__19925;
continue;
} else {
var f_19928 = cljs.core.first.call(null,seq__19846_19920__$1);
cljs.core.println.call(null,"  ",f_19928);

var G__19931 = cljs.core.next.call(null,seq__19846_19920__$1);
var G__19932 = null;
var G__19933 = (0);
var G__19934 = (0);
seq__19846_19902 = G__19931;
chunk__19847_19903 = G__19932;
count__19848_19904 = G__19933;
i__19849_19905 = G__19934;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19935 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16306__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19935);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19935)))?cljs.core.second.call(null,arglists_19935):arglists_19935));
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
var seq__19858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19859 = null;
var count__19860 = (0);
var i__19861 = (0);
while(true){
if((i__19861 < count__19860)){
var vec__19862 = cljs.core._nth.call(null,chunk__19859,i__19861);
var name = cljs.core.nth.call(null,vec__19862,(0),null);
var map__19863 = cljs.core.nth.call(null,vec__19862,(1),null);
var map__19863__$1 = ((((!((map__19863 == null)))?((((map__19863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19863):map__19863);
var doc = cljs.core.get.call(null,map__19863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19936 = seq__19858;
var G__19937 = chunk__19859;
var G__19938 = count__19860;
var G__19939 = (i__19861 + (1));
seq__19858 = G__19936;
chunk__19859 = G__19937;
count__19860 = G__19938;
i__19861 = G__19939;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19858);
if(temp__4425__auto__){
var seq__19858__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19858__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__19858__$1);
var G__19942 = cljs.core.chunk_rest.call(null,seq__19858__$1);
var G__19943 = c__17109__auto__;
var G__19944 = cljs.core.count.call(null,c__17109__auto__);
var G__19945 = (0);
seq__19858 = G__19942;
chunk__19859 = G__19943;
count__19860 = G__19944;
i__19861 = G__19945;
continue;
} else {
var vec__19869 = cljs.core.first.call(null,seq__19858__$1);
var name = cljs.core.nth.call(null,vec__19869,(0),null);
var map__19870 = cljs.core.nth.call(null,vec__19869,(1),null);
var map__19870__$1 = ((((!((map__19870 == null)))?((((map__19870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19870):map__19870);
var doc = cljs.core.get.call(null,map__19870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19870__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19951 = cljs.core.next.call(null,seq__19858__$1);
var G__19952 = null;
var G__19953 = (0);
var G__19954 = (0);
seq__19858 = G__19951;
chunk__19859 = G__19952;
count__19860 = G__19953;
i__19861 = G__19954;
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

//# sourceMappingURL=repl.js.map
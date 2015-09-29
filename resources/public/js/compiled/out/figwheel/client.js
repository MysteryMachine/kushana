// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19922__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__19922 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19923__i = 0, G__19923__a = new Array(arguments.length -  0);
while (G__19923__i < G__19923__a.length) {G__19923__a[G__19923__i] = arguments[G__19923__i + 0]; ++G__19923__i;}
  args = new cljs.core.IndexedSeq(G__19923__a,0);
} 
return G__19922__delegate.call(this,args);};
G__19922.cljs$lang$maxFixedArity = 0;
G__19922.cljs$lang$applyTo = (function (arglist__19924){
var args = cljs.core.seq(arglist__19924);
return G__19922__delegate(args);
});
G__19922.cljs$core$IFn$_invoke$arity$variadic = G__19922__delegate;
return G__19922;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__19925){
var map__19928 = p__19925;
var map__19928__$1 = ((((!((map__19928 == null)))?((((map__19928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19928):map__19928);
var message = cljs.core.get.call(null,map__19928__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__19928__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16306__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16294__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16294__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16294__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19329__auto___20076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___20076,ch){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___20076,ch){
return (function (state_20046){
var state_val_20047 = (state_20046[(1)]);
if((state_val_20047 === (7))){
var inst_20042 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
var statearr_20048_20077 = state_20046__$1;
(statearr_20048_20077[(2)] = inst_20042);

(statearr_20048_20077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (1))){
var state_20046__$1 = state_20046;
var statearr_20049_20078 = state_20046__$1;
(statearr_20049_20078[(2)] = null);

(statearr_20049_20078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (4))){
var inst_20005 = (state_20046[(7)]);
var inst_20005__$1 = (state_20046[(2)]);
var state_20046__$1 = (function (){var statearr_20050 = state_20046;
(statearr_20050[(7)] = inst_20005__$1);

return statearr_20050;
})();
if(cljs.core.truth_(inst_20005__$1)){
var statearr_20051_20079 = state_20046__$1;
(statearr_20051_20079[(1)] = (5));

} else {
var statearr_20052_20080 = state_20046__$1;
(statearr_20052_20080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (15))){
var inst_20012 = (state_20046[(8)]);
var inst_20027 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20012);
var inst_20028 = cljs.core.first.call(null,inst_20027);
var inst_20029 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_20028);
var inst_20030 = console.warn("Figwheel: Not loading code with warnings - ",inst_20029);
var state_20046__$1 = state_20046;
var statearr_20053_20081 = state_20046__$1;
(statearr_20053_20081[(2)] = inst_20030);

(statearr_20053_20081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (13))){
var inst_20035 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
var statearr_20054_20082 = state_20046__$1;
(statearr_20054_20082[(2)] = inst_20035);

(statearr_20054_20082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (6))){
var state_20046__$1 = state_20046;
var statearr_20055_20083 = state_20046__$1;
(statearr_20055_20083[(2)] = null);

(statearr_20055_20083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (17))){
var inst_20033 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
var statearr_20056_20084 = state_20046__$1;
(statearr_20056_20084[(2)] = inst_20033);

(statearr_20056_20084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (3))){
var inst_20044 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20046__$1,inst_20044);
} else {
if((state_val_20047 === (12))){
var inst_20011 = (state_20046[(9)]);
var inst_20025 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_20011,opts);
var state_20046__$1 = state_20046;
if(cljs.core.truth_(inst_20025)){
var statearr_20057_20085 = state_20046__$1;
(statearr_20057_20085[(1)] = (15));

} else {
var statearr_20058_20086 = state_20046__$1;
(statearr_20058_20086[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (2))){
var state_20046__$1 = state_20046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20046__$1,(4),ch);
} else {
if((state_val_20047 === (11))){
var inst_20012 = (state_20046[(8)]);
var inst_20017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20018 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_20012);
var inst_20019 = cljs.core.async.timeout.call(null,(1000));
var inst_20020 = [inst_20018,inst_20019];
var inst_20021 = (new cljs.core.PersistentVector(null,2,(5),inst_20017,inst_20020,null));
var state_20046__$1 = state_20046;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20046__$1,(14),inst_20021);
} else {
if((state_val_20047 === (9))){
var state_20046__$1 = state_20046;
var statearr_20059_20087 = state_20046__$1;
(statearr_20059_20087[(2)] = null);

(statearr_20059_20087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (5))){
var inst_20005 = (state_20046[(7)]);
var inst_20007 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_20008 = (new cljs.core.PersistentArrayMap(null,2,inst_20007,null));
var inst_20009 = (new cljs.core.PersistentHashSet(null,inst_20008,null));
var inst_20010 = figwheel.client.focus_msgs.call(null,inst_20009,inst_20005);
var inst_20011 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_20010);
var inst_20012 = cljs.core.first.call(null,inst_20010);
var inst_20013 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_20046__$1 = (function (){var statearr_20060 = state_20046;
(statearr_20060[(9)] = inst_20011);

(statearr_20060[(8)] = inst_20012);

return statearr_20060;
})();
if(cljs.core.truth_(inst_20013)){
var statearr_20061_20088 = state_20046__$1;
(statearr_20061_20088[(1)] = (8));

} else {
var statearr_20062_20089 = state_20046__$1;
(statearr_20062_20089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (14))){
var inst_20023 = (state_20046[(2)]);
var state_20046__$1 = state_20046;
var statearr_20063_20090 = state_20046__$1;
(statearr_20063_20090[(2)] = inst_20023);

(statearr_20063_20090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (16))){
var state_20046__$1 = state_20046;
var statearr_20064_20091 = state_20046__$1;
(statearr_20064_20091[(2)] = null);

(statearr_20064_20091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (10))){
var inst_20038 = (state_20046[(2)]);
var state_20046__$1 = (function (){var statearr_20065 = state_20046;
(statearr_20065[(10)] = inst_20038);

return statearr_20065;
})();
var statearr_20066_20092 = state_20046__$1;
(statearr_20066_20092[(2)] = null);

(statearr_20066_20092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20047 === (8))){
var inst_20011 = (state_20046[(9)]);
var inst_20015 = figwheel.client.reload_file_state_QMARK_.call(null,inst_20011,opts);
var state_20046__$1 = state_20046;
if(cljs.core.truth_(inst_20015)){
var statearr_20067_20093 = state_20046__$1;
(statearr_20067_20093[(1)] = (11));

} else {
var statearr_20068_20094 = state_20046__$1;
(statearr_20068_20094[(1)] = (12));

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
});})(c__19329__auto___20076,ch))
;
return ((function (switch__19308__auto__,c__19329__auto___20076,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19309__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19309__auto____0 = (function (){
var statearr_20072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20072[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19309__auto__);

(statearr_20072[(1)] = (1));

return statearr_20072;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19309__auto____1 = (function (state_20046){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_20046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e20073){if((e20073 instanceof Object)){
var ex__19312__auto__ = e20073;
var statearr_20074_20095 = state_20046;
(statearr_20074_20095[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20096 = state_20046;
state_20046 = G__20096;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19309__auto__ = function(state_20046){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19309__auto____1.call(this,state_20046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19309__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19309__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___20076,ch))
})();
var state__19331__auto__ = (function (){var statearr_20075 = f__19330__auto__.call(null);
(statearr_20075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___20076);

return statearr_20075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___20076,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__20097_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__20097_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_20104 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_20104){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_20102 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_20103 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_20102,_STAR_print_newline_STAR_20103,base_path_20104){
return (function() { 
var G__20105__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20106__i = 0, G__20106__a = new Array(arguments.length -  0);
while (G__20106__i < G__20106__a.length) {G__20106__a[G__20106__i] = arguments[G__20106__i + 0]; ++G__20106__i;}
  args = new cljs.core.IndexedSeq(G__20106__a,0);
} 
return G__20105__delegate.call(this,args);};
G__20105.cljs$lang$maxFixedArity = 0;
G__20105.cljs$lang$applyTo = (function (arglist__20107){
var args = cljs.core.seq(arglist__20107);
return G__20105__delegate(args);
});
G__20105.cljs$core$IFn$_invoke$arity$variadic = G__20105__delegate;
return G__20105;
})()
;})(_STAR_print_fn_STAR_20102,_STAR_print_newline_STAR_20103,base_path_20104))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20103;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20102;
}}catch (e20101){if((e20101 instanceof Error)){
var e = e20101;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_20104], null));
} else {
var e = e20101;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_20104))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__20108){
var map__20115 = p__20108;
var map__20115__$1 = ((((!((map__20115 == null)))?((((map__20115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20115):map__20115);
var opts = map__20115__$1;
var build_id = cljs.core.get.call(null,map__20115__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__20115,map__20115__$1,opts,build_id){
return (function (p__20117){
var vec__20118 = p__20117;
var map__20119 = cljs.core.nth.call(null,vec__20118,(0),null);
var map__20119__$1 = ((((!((map__20119 == null)))?((((map__20119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20119):map__20119);
var msg = map__20119__$1;
var msg_name = cljs.core.get.call(null,map__20119__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20118,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__20118,map__20119,map__20119__$1,msg,msg_name,_,map__20115,map__20115__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__20118,map__20119,map__20119__$1,msg,msg_name,_,map__20115,map__20115__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__20115,map__20115__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__20125){
var vec__20126 = p__20125;
var map__20127 = cljs.core.nth.call(null,vec__20126,(0),null);
var map__20127__$1 = ((((!((map__20127 == null)))?((((map__20127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20127):map__20127);
var msg = map__20127__$1;
var msg_name = cljs.core.get.call(null,map__20127__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20126,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__20129){
var map__20139 = p__20129;
var map__20139__$1 = ((((!((map__20139 == null)))?((((map__20139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20139):map__20139);
var on_compile_warning = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__20139__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__20139,map__20139__$1,on_compile_warning,on_compile_fail){
return (function (p__20141){
var vec__20142 = p__20141;
var map__20143 = cljs.core.nth.call(null,vec__20142,(0),null);
var map__20143__$1 = ((((!((map__20143 == null)))?((((map__20143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20143):map__20143);
var msg = map__20143__$1;
var msg_name = cljs.core.get.call(null,map__20143__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20142,(1));
var pred__20145 = cljs.core._EQ_;
var expr__20146 = msg_name;
if(cljs.core.truth_(pred__20145.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__20146))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__20145.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20146))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__20139,map__20139__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__,msg_hist,msg_names,msg){
return (function (state_20362){
var state_val_20363 = (state_20362[(1)]);
if((state_val_20363 === (7))){
var inst_20286 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20286)){
var statearr_20364_20410 = state_20362__$1;
(statearr_20364_20410[(1)] = (8));

} else {
var statearr_20365_20411 = state_20362__$1;
(statearr_20365_20411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (20))){
var inst_20356 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20366_20412 = state_20362__$1;
(statearr_20366_20412[(2)] = inst_20356);

(statearr_20366_20412[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (27))){
var inst_20352 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20367_20413 = state_20362__$1;
(statearr_20367_20413[(2)] = inst_20352);

(statearr_20367_20413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (1))){
var inst_20279 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20279)){
var statearr_20368_20414 = state_20362__$1;
(statearr_20368_20414[(1)] = (2));

} else {
var statearr_20369_20415 = state_20362__$1;
(statearr_20369_20415[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (24))){
var inst_20354 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20370_20416 = state_20362__$1;
(statearr_20370_20416[(2)] = inst_20354);

(statearr_20370_20416[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (4))){
var inst_20360 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20362__$1,inst_20360);
} else {
if((state_val_20363 === (15))){
var inst_20358 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20371_20417 = state_20362__$1;
(statearr_20371_20417[(2)] = inst_20358);

(statearr_20371_20417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (21))){
var inst_20317 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20372_20418 = state_20362__$1;
(statearr_20372_20418[(2)] = inst_20317);

(statearr_20372_20418[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (31))){
var inst_20341 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20341)){
var statearr_20373_20419 = state_20362__$1;
(statearr_20373_20419[(1)] = (34));

} else {
var statearr_20374_20420 = state_20362__$1;
(statearr_20374_20420[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (32))){
var inst_20350 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20375_20421 = state_20362__$1;
(statearr_20375_20421[(2)] = inst_20350);

(statearr_20375_20421[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (33))){
var inst_20339 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20376_20422 = state_20362__$1;
(statearr_20376_20422[(2)] = inst_20339);

(statearr_20376_20422[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (13))){
var inst_20300 = figwheel.client.heads_up.clear.call(null);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(16),inst_20300);
} else {
if((state_val_20363 === (22))){
var inst_20321 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20322 = figwheel.client.heads_up.append_message.call(null,inst_20321);
var state_20362__$1 = state_20362;
var statearr_20377_20423 = state_20362__$1;
(statearr_20377_20423[(2)] = inst_20322);

(statearr_20377_20423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (36))){
var inst_20348 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20378_20424 = state_20362__$1;
(statearr_20378_20424[(2)] = inst_20348);

(statearr_20378_20424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (29))){
var inst_20332 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20379_20425 = state_20362__$1;
(statearr_20379_20425[(2)] = inst_20332);

(statearr_20379_20425[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (6))){
var inst_20281 = (state_20362[(7)]);
var state_20362__$1 = state_20362;
var statearr_20380_20426 = state_20362__$1;
(statearr_20380_20426[(2)] = inst_20281);

(statearr_20380_20426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (28))){
var inst_20328 = (state_20362[(2)]);
var inst_20329 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20330 = figwheel.client.heads_up.display_warning.call(null,inst_20329);
var state_20362__$1 = (function (){var statearr_20381 = state_20362;
(statearr_20381[(8)] = inst_20328);

return statearr_20381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(29),inst_20330);
} else {
if((state_val_20363 === (25))){
var inst_20326 = figwheel.client.heads_up.clear.call(null);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(28),inst_20326);
} else {
if((state_val_20363 === (34))){
var inst_20343 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(37),inst_20343);
} else {
if((state_val_20363 === (17))){
var inst_20308 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20382_20427 = state_20362__$1;
(statearr_20382_20427[(2)] = inst_20308);

(statearr_20382_20427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (3))){
var inst_20298 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20298)){
var statearr_20383_20428 = state_20362__$1;
(statearr_20383_20428[(1)] = (13));

} else {
var statearr_20384_20429 = state_20362__$1;
(statearr_20384_20429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (12))){
var inst_20294 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20385_20430 = state_20362__$1;
(statearr_20385_20430[(2)] = inst_20294);

(statearr_20385_20430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (2))){
var inst_20281 = (state_20362[(7)]);
var inst_20281__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_20362__$1 = (function (){var statearr_20386 = state_20362;
(statearr_20386[(7)] = inst_20281__$1);

return statearr_20386;
})();
if(cljs.core.truth_(inst_20281__$1)){
var statearr_20387_20431 = state_20362__$1;
(statearr_20387_20431[(1)] = (5));

} else {
var statearr_20388_20432 = state_20362__$1;
(statearr_20388_20432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (23))){
var inst_20324 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20324)){
var statearr_20389_20433 = state_20362__$1;
(statearr_20389_20433[(1)] = (25));

} else {
var statearr_20390_20434 = state_20362__$1;
(statearr_20390_20434[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (35))){
var state_20362__$1 = state_20362;
var statearr_20391_20435 = state_20362__$1;
(statearr_20391_20435[(2)] = null);

(statearr_20391_20435[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (19))){
var inst_20319 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20319)){
var statearr_20392_20436 = state_20362__$1;
(statearr_20392_20436[(1)] = (22));

} else {
var statearr_20393_20437 = state_20362__$1;
(statearr_20393_20437[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (11))){
var inst_20290 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20394_20438 = state_20362__$1;
(statearr_20394_20438[(2)] = inst_20290);

(statearr_20394_20438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (9))){
var inst_20292 = figwheel.client.heads_up.clear.call(null);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(12),inst_20292);
} else {
if((state_val_20363 === (5))){
var inst_20283 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_20362__$1 = state_20362;
var statearr_20395_20439 = state_20362__$1;
(statearr_20395_20439[(2)] = inst_20283);

(statearr_20395_20439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (14))){
var inst_20310 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20310)){
var statearr_20396_20440 = state_20362__$1;
(statearr_20396_20440[(1)] = (18));

} else {
var statearr_20397_20441 = state_20362__$1;
(statearr_20397_20441[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (26))){
var inst_20334 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_20362__$1 = state_20362;
if(cljs.core.truth_(inst_20334)){
var statearr_20398_20442 = state_20362__$1;
(statearr_20398_20442[(1)] = (30));

} else {
var statearr_20399_20443 = state_20362__$1;
(statearr_20399_20443[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (16))){
var inst_20302 = (state_20362[(2)]);
var inst_20303 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20304 = figwheel.client.format_messages.call(null,inst_20303);
var inst_20305 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20306 = figwheel.client.heads_up.display_error.call(null,inst_20304,inst_20305);
var state_20362__$1 = (function (){var statearr_20400 = state_20362;
(statearr_20400[(9)] = inst_20302);

return statearr_20400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(17),inst_20306);
} else {
if((state_val_20363 === (30))){
var inst_20336 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20337 = figwheel.client.heads_up.display_warning.call(null,inst_20336);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(33),inst_20337);
} else {
if((state_val_20363 === (10))){
var inst_20296 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20401_20444 = state_20362__$1;
(statearr_20401_20444[(2)] = inst_20296);

(statearr_20401_20444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (18))){
var inst_20312 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20313 = figwheel.client.format_messages.call(null,inst_20312);
var inst_20314 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20315 = figwheel.client.heads_up.display_error.call(null,inst_20313,inst_20314);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(21),inst_20315);
} else {
if((state_val_20363 === (37))){
var inst_20345 = (state_20362[(2)]);
var state_20362__$1 = state_20362;
var statearr_20402_20445 = state_20362__$1;
(statearr_20402_20445[(2)] = inst_20345);

(statearr_20402_20445[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20363 === (8))){
var inst_20288 = figwheel.client.heads_up.flash_loaded.call(null);
var state_20362__$1 = state_20362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20362__$1,(11),inst_20288);
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
});})(c__19329__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19308__auto__,c__19329__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto____0 = (function (){
var statearr_20406 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20406[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto__);

(statearr_20406[(1)] = (1));

return statearr_20406;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto____1 = (function (state_20362){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_20362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e20407){if((e20407 instanceof Object)){
var ex__19312__auto__ = e20407;
var statearr_20408_20446 = state_20362;
(statearr_20408_20446[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20447 = state_20362;
state_20362 = G__20447;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto__ = function(state_20362){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto____1.call(this,state_20362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__,msg_hist,msg_names,msg))
})();
var state__19331__auto__ = (function (){var statearr_20409 = f__19330__auto__.call(null);
(statearr_20409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_20409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__,msg_hist,msg_names,msg))
);

return c__19329__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19329__auto___20510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___20510,ch){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___20510,ch){
return (function (state_20493){
var state_val_20494 = (state_20493[(1)]);
if((state_val_20494 === (1))){
var state_20493__$1 = state_20493;
var statearr_20495_20511 = state_20493__$1;
(statearr_20495_20511[(2)] = null);

(statearr_20495_20511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (2))){
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20493__$1,(4),ch);
} else {
if((state_val_20494 === (3))){
var inst_20491 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20493__$1,inst_20491);
} else {
if((state_val_20494 === (4))){
var inst_20481 = (state_20493[(7)]);
var inst_20481__$1 = (state_20493[(2)]);
var state_20493__$1 = (function (){var statearr_20496 = state_20493;
(statearr_20496[(7)] = inst_20481__$1);

return statearr_20496;
})();
if(cljs.core.truth_(inst_20481__$1)){
var statearr_20497_20512 = state_20493__$1;
(statearr_20497_20512[(1)] = (5));

} else {
var statearr_20498_20513 = state_20493__$1;
(statearr_20498_20513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (5))){
var inst_20481 = (state_20493[(7)]);
var inst_20483 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_20481);
var state_20493__$1 = state_20493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20493__$1,(8),inst_20483);
} else {
if((state_val_20494 === (6))){
var state_20493__$1 = state_20493;
var statearr_20499_20514 = state_20493__$1;
(statearr_20499_20514[(2)] = null);

(statearr_20499_20514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (7))){
var inst_20489 = (state_20493[(2)]);
var state_20493__$1 = state_20493;
var statearr_20500_20515 = state_20493__$1;
(statearr_20500_20515[(2)] = inst_20489);

(statearr_20500_20515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20494 === (8))){
var inst_20485 = (state_20493[(2)]);
var state_20493__$1 = (function (){var statearr_20501 = state_20493;
(statearr_20501[(8)] = inst_20485);

return statearr_20501;
})();
var statearr_20502_20516 = state_20493__$1;
(statearr_20502_20516[(2)] = null);

(statearr_20502_20516[(1)] = (2));


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
});})(c__19329__auto___20510,ch))
;
return ((function (switch__19308__auto__,c__19329__auto___20510,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19309__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19309__auto____0 = (function (){
var statearr_20506 = [null,null,null,null,null,null,null,null,null];
(statearr_20506[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19309__auto__);

(statearr_20506[(1)] = (1));

return statearr_20506;
});
var figwheel$client$heads_up_plugin_$_state_machine__19309__auto____1 = (function (state_20493){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_20493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e20507){if((e20507 instanceof Object)){
var ex__19312__auto__ = e20507;
var statearr_20508_20517 = state_20493;
(statearr_20508_20517[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20518 = state_20493;
state_20493 = G__20518;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19309__auto__ = function(state_20493){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19309__auto____1.call(this,state_20493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19309__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19309__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___20510,ch))
})();
var state__19331__auto__ = (function (){var statearr_20509 = f__19330__auto__.call(null);
(statearr_20509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___20510);

return statearr_20509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___20510,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_20539){
var state_val_20540 = (state_20539[(1)]);
if((state_val_20540 === (1))){
var inst_20534 = cljs.core.async.timeout.call(null,(3000));
var state_20539__$1 = state_20539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20539__$1,(2),inst_20534);
} else {
if((state_val_20540 === (2))){
var inst_20536 = (state_20539[(2)]);
var inst_20537 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_20539__$1 = (function (){var statearr_20541 = state_20539;
(statearr_20541[(7)] = inst_20536);

return statearr_20541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20539__$1,inst_20537);
} else {
return null;
}
}
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19309__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19309__auto____0 = (function (){
var statearr_20545 = [null,null,null,null,null,null,null,null];
(statearr_20545[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19309__auto__);

(statearr_20545[(1)] = (1));

return statearr_20545;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19309__auto____1 = (function (state_20539){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_20539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e20546){if((e20546 instanceof Object)){
var ex__19312__auto__ = e20546;
var statearr_20547_20549 = state_20539;
(statearr_20547_20549[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20550 = state_20539;
state_20539 = G__20550;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19309__auto__ = function(state_20539){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19309__auto____1.call(this,state_20539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19309__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19309__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_20548 = f__19330__auto__.call(null);
(statearr_20548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_20548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__20551){
var map__20558 = p__20551;
var map__20558__$1 = ((((!((map__20558 == null)))?((((map__20558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20558):map__20558);
var ed = map__20558__$1;
var formatted_exception = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__20560_20564 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__20561_20565 = null;
var count__20562_20566 = (0);
var i__20563_20567 = (0);
while(true){
if((i__20563_20567 < count__20562_20566)){
var msg_20568 = cljs.core._nth.call(null,chunk__20561_20565,i__20563_20567);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_20568);

var G__20569 = seq__20560_20564;
var G__20570 = chunk__20561_20565;
var G__20571 = count__20562_20566;
var G__20572 = (i__20563_20567 + (1));
seq__20560_20564 = G__20569;
chunk__20561_20565 = G__20570;
count__20562_20566 = G__20571;
i__20563_20567 = G__20572;
continue;
} else {
var temp__4425__auto___20573 = cljs.core.seq.call(null,seq__20560_20564);
if(temp__4425__auto___20573){
var seq__20560_20574__$1 = temp__4425__auto___20573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20560_20574__$1)){
var c__17109__auto___20575 = cljs.core.chunk_first.call(null,seq__20560_20574__$1);
var G__20576 = cljs.core.chunk_rest.call(null,seq__20560_20574__$1);
var G__20577 = c__17109__auto___20575;
var G__20578 = cljs.core.count.call(null,c__17109__auto___20575);
var G__20579 = (0);
seq__20560_20564 = G__20576;
chunk__20561_20565 = G__20577;
count__20562_20566 = G__20578;
i__20563_20567 = G__20579;
continue;
} else {
var msg_20580 = cljs.core.first.call(null,seq__20560_20574__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_20580);

var G__20581 = cljs.core.next.call(null,seq__20560_20574__$1);
var G__20582 = null;
var G__20583 = (0);
var G__20584 = (0);
seq__20560_20564 = G__20581;
chunk__20561_20565 = G__20582;
count__20562_20566 = G__20583;
i__20563_20567 = G__20584;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__20585){
var map__20588 = p__20585;
var map__20588__$1 = ((((!((map__20588 == null)))?((((map__20588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20588):map__20588);
var w = map__20588__$1;
var message = cljs.core.get.call(null,map__20588__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16294__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16294__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16294__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__20596 = cljs.core.seq.call(null,plugins);
var chunk__20597 = null;
var count__20598 = (0);
var i__20599 = (0);
while(true){
if((i__20599 < count__20598)){
var vec__20600 = cljs.core._nth.call(null,chunk__20597,i__20599);
var k = cljs.core.nth.call(null,vec__20600,(0),null);
var plugin = cljs.core.nth.call(null,vec__20600,(1),null);
if(cljs.core.truth_(plugin)){
var pl_20602 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__20596,chunk__20597,count__20598,i__20599,pl_20602,vec__20600,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_20602.call(null,msg_hist);
});})(seq__20596,chunk__20597,count__20598,i__20599,pl_20602,vec__20600,k,plugin))
);
} else {
}

var G__20603 = seq__20596;
var G__20604 = chunk__20597;
var G__20605 = count__20598;
var G__20606 = (i__20599 + (1));
seq__20596 = G__20603;
chunk__20597 = G__20604;
count__20598 = G__20605;
i__20599 = G__20606;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20596);
if(temp__4425__auto__){
var seq__20596__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20596__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__20596__$1);
var G__20607 = cljs.core.chunk_rest.call(null,seq__20596__$1);
var G__20608 = c__17109__auto__;
var G__20609 = cljs.core.count.call(null,c__17109__auto__);
var G__20610 = (0);
seq__20596 = G__20607;
chunk__20597 = G__20608;
count__20598 = G__20609;
i__20599 = G__20610;
continue;
} else {
var vec__20601 = cljs.core.first.call(null,seq__20596__$1);
var k = cljs.core.nth.call(null,vec__20601,(0),null);
var plugin = cljs.core.nth.call(null,vec__20601,(1),null);
if(cljs.core.truth_(plugin)){
var pl_20611 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__20596,chunk__20597,count__20598,i__20599,pl_20611,vec__20601,k,plugin,seq__20596__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_20611.call(null,msg_hist);
});})(seq__20596,chunk__20597,count__20598,i__20599,pl_20611,vec__20601,k,plugin,seq__20596__$1,temp__4425__auto__))
);
} else {
}

var G__20612 = cljs.core.next.call(null,seq__20596__$1);
var G__20613 = null;
var G__20614 = (0);
var G__20615 = (0);
seq__20596 = G__20612;
chunk__20597 = G__20613;
count__20598 = G__20614;
i__20599 = G__20615;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args20616 = [];
var len__17364__auto___20619 = arguments.length;
var i__17365__auto___20620 = (0);
while(true){
if((i__17365__auto___20620 < len__17364__auto___20619)){
args20616.push((arguments[i__17365__auto___20620]));

var G__20621 = (i__17365__auto___20620 + (1));
i__17365__auto___20620 = G__20621;
continue;
} else {
}
break;
}

var G__20618 = args20616.length;
switch (G__20618) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20616.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17371__auto__ = [];
var len__17364__auto___20627 = arguments.length;
var i__17365__auto___20628 = (0);
while(true){
if((i__17365__auto___20628 < len__17364__auto___20627)){
args__17371__auto__.push((arguments[i__17365__auto___20628]));

var G__20629 = (i__17365__auto___20628 + (1));
i__17365__auto___20628 = G__20629;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((0) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__20624){
var map__20625 = p__20624;
var map__20625__$1 = ((((!((map__20625 == null)))?((((map__20625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20625):map__20625);
var opts = map__20625__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq20623){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20623));
});

//# sourceMappingURL=client.js.map?rel=1442702298008
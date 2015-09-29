// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17371__auto__ = [];
var len__17364__auto___20767 = arguments.length;
var i__17365__auto___20768 = (0);
while(true){
if((i__17365__auto___20768 < len__17364__auto___20767)){
args__17371__auto__.push((arguments[i__17365__auto___20768]));

var G__20769 = (i__17365__auto___20768 + (1));
i__17365__auto___20768 = G__20769;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((2) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17372__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__20759_20770 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__20760_20771 = null;
var count__20761_20772 = (0);
var i__20762_20773 = (0);
while(true){
if((i__20762_20773 < count__20761_20772)){
var k_20774 = cljs.core._nth.call(null,chunk__20760_20771,i__20762_20773);
e.setAttribute(cljs.core.name.call(null,k_20774),cljs.core.get.call(null,attrs,k_20774));

var G__20775 = seq__20759_20770;
var G__20776 = chunk__20760_20771;
var G__20777 = count__20761_20772;
var G__20778 = (i__20762_20773 + (1));
seq__20759_20770 = G__20775;
chunk__20760_20771 = G__20776;
count__20761_20772 = G__20777;
i__20762_20773 = G__20778;
continue;
} else {
var temp__4425__auto___20779 = cljs.core.seq.call(null,seq__20759_20770);
if(temp__4425__auto___20779){
var seq__20759_20780__$1 = temp__4425__auto___20779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20759_20780__$1)){
var c__17109__auto___20781 = cljs.core.chunk_first.call(null,seq__20759_20780__$1);
var G__20782 = cljs.core.chunk_rest.call(null,seq__20759_20780__$1);
var G__20783 = c__17109__auto___20781;
var G__20784 = cljs.core.count.call(null,c__17109__auto___20781);
var G__20785 = (0);
seq__20759_20770 = G__20782;
chunk__20760_20771 = G__20783;
count__20761_20772 = G__20784;
i__20762_20773 = G__20785;
continue;
} else {
var k_20786 = cljs.core.first.call(null,seq__20759_20780__$1);
e.setAttribute(cljs.core.name.call(null,k_20786),cljs.core.get.call(null,attrs,k_20786));

var G__20787 = cljs.core.next.call(null,seq__20759_20780__$1);
var G__20788 = null;
var G__20789 = (0);
var G__20790 = (0);
seq__20759_20770 = G__20787;
chunk__20760_20771 = G__20788;
count__20761_20772 = G__20789;
i__20762_20773 = G__20790;
continue;
}
} else {
}
}
break;
}

var seq__20763_20791 = cljs.core.seq.call(null,children);
var chunk__20764_20792 = null;
var count__20765_20793 = (0);
var i__20766_20794 = (0);
while(true){
if((i__20766_20794 < count__20765_20793)){
var ch_20795 = cljs.core._nth.call(null,chunk__20764_20792,i__20766_20794);
e.appendChild(ch_20795);

var G__20796 = seq__20763_20791;
var G__20797 = chunk__20764_20792;
var G__20798 = count__20765_20793;
var G__20799 = (i__20766_20794 + (1));
seq__20763_20791 = G__20796;
chunk__20764_20792 = G__20797;
count__20765_20793 = G__20798;
i__20766_20794 = G__20799;
continue;
} else {
var temp__4425__auto___20800 = cljs.core.seq.call(null,seq__20763_20791);
if(temp__4425__auto___20800){
var seq__20763_20801__$1 = temp__4425__auto___20800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20763_20801__$1)){
var c__17109__auto___20802 = cljs.core.chunk_first.call(null,seq__20763_20801__$1);
var G__20803 = cljs.core.chunk_rest.call(null,seq__20763_20801__$1);
var G__20804 = c__17109__auto___20802;
var G__20805 = cljs.core.count.call(null,c__17109__auto___20802);
var G__20806 = (0);
seq__20763_20791 = G__20803;
chunk__20764_20792 = G__20804;
count__20765_20793 = G__20805;
i__20766_20794 = G__20806;
continue;
} else {
var ch_20807 = cljs.core.first.call(null,seq__20763_20801__$1);
e.appendChild(ch_20807);

var G__20808 = cljs.core.next.call(null,seq__20763_20801__$1);
var G__20809 = null;
var G__20810 = (0);
var G__20811 = (0);
seq__20763_20791 = G__20808;
chunk__20764_20792 = G__20809;
count__20765_20793 = G__20810;
i__20766_20794 = G__20811;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq20756){
var G__20757 = cljs.core.first.call(null,seq20756);
var seq20756__$1 = cljs.core.next.call(null,seq20756);
var G__20758 = cljs.core.first.call(null,seq20756__$1);
var seq20756__$2 = cljs.core.next.call(null,seq20756__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__20757,G__20758,seq20756__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17219__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17223__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17219__auto__,prefer_table__17220__auto__,method_cache__17221__auto__,cached_hierarchy__17222__auto__,hierarchy__17223__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17219__auto__,prefer_table__17220__auto__,method_cache__17221__auto__,cached_hierarchy__17222__auto__,hierarchy__17223__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17223__auto__,method_table__17219__auto__,prefer_table__17220__auto__,method_cache__17221__auto__,cached_hierarchy__17222__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_20812 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_20812.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_20812.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_20812.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_20812);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__20813,st_map){
var map__20818 = p__20813;
var map__20818__$1 = ((((!((map__20818 == null)))?((((map__20818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20818):map__20818);
var container_el = cljs.core.get.call(null,map__20818__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__20818,map__20818__$1,container_el){
return (function (p__20820){
var vec__20821 = p__20820;
var k = cljs.core.nth.call(null,vec__20821,(0),null);
var v = cljs.core.nth.call(null,vec__20821,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__20818,map__20818__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__20822,dom_str){
var map__20825 = p__20822;
var map__20825__$1 = ((((!((map__20825 == null)))?((((map__20825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20825):map__20825);
var c = map__20825__$1;
var content_area_el = cljs.core.get.call(null,map__20825__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__20827){
var map__20830 = p__20827;
var map__20830__$1 = ((((!((map__20830 == null)))?((((map__20830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20830):map__20830);
var content_area_el = cljs.core.get.call(null,map__20830__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_20873){
var state_val_20874 = (state_20873[(1)]);
if((state_val_20874 === (1))){
var inst_20858 = (state_20873[(7)]);
var inst_20858__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_20859 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_20860 = ["10px","10px","100%","68px","1.0"];
var inst_20861 = cljs.core.PersistentHashMap.fromArrays(inst_20859,inst_20860);
var inst_20862 = cljs.core.merge.call(null,inst_20861,style);
var inst_20863 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20858__$1,inst_20862);
var inst_20864 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_20858__$1,msg);
var inst_20865 = cljs.core.async.timeout.call(null,(300));
var state_20873__$1 = (function (){var statearr_20875 = state_20873;
(statearr_20875[(7)] = inst_20858__$1);

(statearr_20875[(8)] = inst_20864);

(statearr_20875[(9)] = inst_20863);

return statearr_20875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20873__$1,(2),inst_20865);
} else {
if((state_val_20874 === (2))){
var inst_20858 = (state_20873[(7)]);
var inst_20867 = (state_20873[(2)]);
var inst_20868 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_20869 = ["auto"];
var inst_20870 = cljs.core.PersistentHashMap.fromArrays(inst_20868,inst_20869);
var inst_20871 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20858,inst_20870);
var state_20873__$1 = (function (){var statearr_20876 = state_20873;
(statearr_20876[(10)] = inst_20867);

return statearr_20876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20873__$1,inst_20871);
} else {
return null;
}
}
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto____0 = (function (){
var statearr_20880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20880[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto__);

(statearr_20880[(1)] = (1));

return statearr_20880;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto____1 = (function (state_20873){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_20873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e20881){if((e20881 instanceof Object)){
var ex__19312__auto__ = e20881;
var statearr_20882_20884 = state_20873;
(statearr_20882_20884[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20885 = state_20873;
state_20873 = G__20885;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto__ = function(state_20873){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto____1.call(this,state_20873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_20883 = f__19330__auto__.call(null);
(statearr_20883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_20883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__20887 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__20887,(0),null);
var ln = cljs.core.nth.call(null,vec__20887,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__20890 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__20890,(0),null);
var file_line = cljs.core.nth.call(null,vec__20890,(1),null);
var file_column = cljs.core.nth.call(null,vec__20890,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__20890,file_name,file_line,file_column){
return (function (p1__20888_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__20888_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__20890,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16306__auto__ = file_line;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
var and__16294__auto__ = cause;
if(cljs.core.truth_(and__16294__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16294__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__20893 = figwheel.client.heads_up.ensure_container.call(null);
var map__20893__$1 = ((((!((map__20893 == null)))?((((map__20893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20893):map__20893);
var content_area_el = cljs.core.get.call(null,map__20893__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_20941){
var state_val_20942 = (state_20941[(1)]);
if((state_val_20942 === (1))){
var inst_20924 = (state_20941[(7)]);
var inst_20924__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_20925 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_20926 = ["0.0"];
var inst_20927 = cljs.core.PersistentHashMap.fromArrays(inst_20925,inst_20926);
var inst_20928 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20924__$1,inst_20927);
var inst_20929 = cljs.core.async.timeout.call(null,(300));
var state_20941__$1 = (function (){var statearr_20943 = state_20941;
(statearr_20943[(7)] = inst_20924__$1);

(statearr_20943[(8)] = inst_20928);

return statearr_20943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20941__$1,(2),inst_20929);
} else {
if((state_val_20942 === (2))){
var inst_20924 = (state_20941[(7)]);
var inst_20931 = (state_20941[(2)]);
var inst_20932 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_20933 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_20934 = cljs.core.PersistentHashMap.fromArrays(inst_20932,inst_20933);
var inst_20935 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_20924,inst_20934);
var inst_20936 = cljs.core.async.timeout.call(null,(200));
var state_20941__$1 = (function (){var statearr_20944 = state_20941;
(statearr_20944[(9)] = inst_20931);

(statearr_20944[(10)] = inst_20935);

return statearr_20944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20941__$1,(3),inst_20936);
} else {
if((state_val_20942 === (3))){
var inst_20924 = (state_20941[(7)]);
var inst_20938 = (state_20941[(2)]);
var inst_20939 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_20924,"");
var state_20941__$1 = (function (){var statearr_20945 = state_20941;
(statearr_20945[(11)] = inst_20938);

return statearr_20945;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20941__$1,inst_20939);
} else {
return null;
}
}
}
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19309__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19309__auto____0 = (function (){
var statearr_20949 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20949[(0)] = figwheel$client$heads_up$clear_$_state_machine__19309__auto__);

(statearr_20949[(1)] = (1));

return statearr_20949;
});
var figwheel$client$heads_up$clear_$_state_machine__19309__auto____1 = (function (state_20941){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_20941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e20950){if((e20950 instanceof Object)){
var ex__19312__auto__ = e20950;
var statearr_20951_20953 = state_20941;
(statearr_20951_20953[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20954 = state_20941;
state_20941 = G__20954;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19309__auto__ = function(state_20941){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19309__auto____1.call(this,state_20941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19309__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19309__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_20952 = f__19330__auto__.call(null);
(statearr_20952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_20952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_20986){
var state_val_20987 = (state_20986[(1)]);
if((state_val_20987 === (1))){
var inst_20976 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_20986__$1 = state_20986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20986__$1,(2),inst_20976);
} else {
if((state_val_20987 === (2))){
var inst_20978 = (state_20986[(2)]);
var inst_20979 = cljs.core.async.timeout.call(null,(400));
var state_20986__$1 = (function (){var statearr_20988 = state_20986;
(statearr_20988[(7)] = inst_20978);

return statearr_20988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20986__$1,(3),inst_20979);
} else {
if((state_val_20987 === (3))){
var inst_20981 = (state_20986[(2)]);
var inst_20982 = figwheel.client.heads_up.clear.call(null);
var state_20986__$1 = (function (){var statearr_20989 = state_20986;
(statearr_20989[(8)] = inst_20981);

return statearr_20989;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20986__$1,(4),inst_20982);
} else {
if((state_val_20987 === (4))){
var inst_20984 = (state_20986[(2)]);
var state_20986__$1 = state_20986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20986__$1,inst_20984);
} else {
return null;
}
}
}
}
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto____0 = (function (){
var statearr_20993 = [null,null,null,null,null,null,null,null,null];
(statearr_20993[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto__);

(statearr_20993[(1)] = (1));

return statearr_20993;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto____1 = (function (state_20986){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_20986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e20994){if((e20994 instanceof Object)){
var ex__19312__auto__ = e20994;
var statearr_20995_20997 = state_20986;
(statearr_20995_20997[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20998 = state_20986;
state_20986 = G__20998;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto__ = function(state_20986){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto____1.call(this,state_20986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_20996 = f__19330__auto__.call(null);
(statearr_20996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_20996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1442702298671
// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async22140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22140 = (function (fn_handler,f,meta22141){
this.fn_handler = fn_handler;
this.f = f;
this.meta22141 = meta22141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22142,meta22141__$1){
var self__ = this;
var _22142__$1 = this;
return (new cljs.core.async.t_cljs$core$async22140(self__.fn_handler,self__.f,meta22141__$1));
});

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22142){
var self__ = this;
var _22142__$1 = this;
return self__.meta22141;
});

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22141","meta22141",843215160,null)], null);
});

cljs.core.async.t_cljs$core$async22140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22140";

cljs.core.async.t_cljs$core$async22140.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async22140");
});

cljs.core.async.__GT_t_cljs$core$async22140 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async22140(fn_handler__$1,f__$1,meta22141){
return (new cljs.core.async.t_cljs$core$async22140(fn_handler__$1,f__$1,meta22141));
});

}

return (new cljs.core.async.t_cljs$core$async22140(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22145 = [];
var len__17364__auto___22148 = arguments.length;
var i__17365__auto___22149 = (0);
while(true){
if((i__17365__auto___22149 < len__17364__auto___22148)){
args22145.push((arguments[i__17365__auto___22149]));

var G__22150 = (i__17365__auto___22149 + (1));
i__17365__auto___22149 = G__22150;
continue;
} else {
}
break;
}

var G__22147 = args22145.length;
switch (G__22147) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22145.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22152 = [];
var len__17364__auto___22155 = arguments.length;
var i__17365__auto___22156 = (0);
while(true){
if((i__17365__auto___22156 < len__17364__auto___22155)){
args22152.push((arguments[i__17365__auto___22156]));

var G__22157 = (i__17365__auto___22156 + (1));
i__17365__auto___22156 = G__22157;
continue;
} else {
}
break;
}

var G__22154 = args22152.length;
switch (G__22154) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22152.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22159 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22159);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22159,ret){
return (function (){
return fn1.call(null,val_22159);
});})(val_22159,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22160 = [];
var len__17364__auto___22163 = arguments.length;
var i__17365__auto___22164 = (0);
while(true){
if((i__17365__auto___22164 < len__17364__auto___22163)){
args22160.push((arguments[i__17365__auto___22164]));

var G__22165 = (i__17365__auto___22164 + (1));
i__17365__auto___22164 = G__22165;
continue;
} else {
}
break;
}

var G__22162 = args22160.length;
switch (G__22162) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22160.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17209__auto___22167 = n;
var x_22168 = (0);
while(true){
if((x_22168 < n__17209__auto___22167)){
(a[x_22168] = (0));

var G__22169 = (x_22168 + (1));
x_22168 = G__22169;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22170 = (i + (1));
i = G__22170;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22174 = (function (alt_flag,flag,meta22175){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22175 = meta22175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22176,meta22175__$1){
var self__ = this;
var _22176__$1 = this;
return (new cljs.core.async.t_cljs$core$async22174(self__.alt_flag,self__.flag,meta22175__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22176){
var self__ = this;
var _22176__$1 = this;
return self__.meta22175;
});})(flag))
;

cljs.core.async.t_cljs$core$async22174.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22174.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22175","meta22175",515216814,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22174";

cljs.core.async.t_cljs$core$async22174.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async22174");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22174 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22174(alt_flag__$1,flag__$1,meta22175){
return (new cljs.core.async.t_cljs$core$async22174(alt_flag__$1,flag__$1,meta22175));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22174(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22180 = (function (alt_handler,flag,cb,meta22181){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22181 = meta22181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22182,meta22181__$1){
var self__ = this;
var _22182__$1 = this;
return (new cljs.core.async.t_cljs$core$async22180(self__.alt_handler,self__.flag,self__.cb,meta22181__$1));
});

cljs.core.async.t_cljs$core$async22180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22182){
var self__ = this;
var _22182__$1 = this;
return self__.meta22181;
});

cljs.core.async.t_cljs$core$async22180.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22181","meta22181",1077271691,null)], null);
});

cljs.core.async.t_cljs$core$async22180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22180";

cljs.core.async.t_cljs$core$async22180.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async22180");
});

cljs.core.async.__GT_t_cljs$core$async22180 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22180(alt_handler__$1,flag__$1,cb__$1,meta22181){
return (new cljs.core.async.t_cljs$core$async22180(alt_handler__$1,flag__$1,cb__$1,meta22181));
});

}

return (new cljs.core.async.t_cljs$core$async22180(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22183_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22183_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22184_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22184_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16306__auto__ = wport;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22185 = (i + (1));
i = G__22185;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16306__auto__ = ret;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16294__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16294__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16294__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17371__auto__ = [];
var len__17364__auto___22191 = arguments.length;
var i__17365__auto___22192 = (0);
while(true){
if((i__17365__auto___22192 < len__17364__auto___22191)){
args__17371__auto__.push((arguments[i__17365__auto___22192]));

var G__22193 = (i__17365__auto___22192 + (1));
i__17365__auto___22192 = G__22193;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((1) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22188){
var map__22189 = p__22188;
var map__22189__$1 = ((((!((map__22189 == null)))?((((map__22189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22189):map__22189);
var opts = map__22189__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22186){
var G__22187 = cljs.core.first.call(null,seq22186);
var seq22186__$1 = cljs.core.next.call(null,seq22186);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22187,seq22186__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22194 = [];
var len__17364__auto___22244 = arguments.length;
var i__17365__auto___22245 = (0);
while(true){
if((i__17365__auto___22245 < len__17364__auto___22244)){
args22194.push((arguments[i__17365__auto___22245]));

var G__22246 = (i__17365__auto___22245 + (1));
i__17365__auto___22245 = G__22246;
continue;
} else {
}
break;
}

var G__22196 = args22194.length;
switch (G__22196) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22194.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19329__auto___22248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___22248){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___22248){
return (function (state_22220){
var state_val_22221 = (state_22220[(1)]);
if((state_val_22221 === (7))){
var inst_22216 = (state_22220[(2)]);
var state_22220__$1 = state_22220;
var statearr_22222_22249 = state_22220__$1;
(statearr_22222_22249[(2)] = inst_22216);

(statearr_22222_22249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (1))){
var state_22220__$1 = state_22220;
var statearr_22223_22250 = state_22220__$1;
(statearr_22223_22250[(2)] = null);

(statearr_22223_22250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (4))){
var inst_22199 = (state_22220[(7)]);
var inst_22199__$1 = (state_22220[(2)]);
var inst_22200 = (inst_22199__$1 == null);
var state_22220__$1 = (function (){var statearr_22224 = state_22220;
(statearr_22224[(7)] = inst_22199__$1);

return statearr_22224;
})();
if(cljs.core.truth_(inst_22200)){
var statearr_22225_22251 = state_22220__$1;
(statearr_22225_22251[(1)] = (5));

} else {
var statearr_22226_22252 = state_22220__$1;
(statearr_22226_22252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (13))){
var state_22220__$1 = state_22220;
var statearr_22227_22253 = state_22220__$1;
(statearr_22227_22253[(2)] = null);

(statearr_22227_22253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (6))){
var inst_22199 = (state_22220[(7)]);
var state_22220__$1 = state_22220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22220__$1,(11),to,inst_22199);
} else {
if((state_val_22221 === (3))){
var inst_22218 = (state_22220[(2)]);
var state_22220__$1 = state_22220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22220__$1,inst_22218);
} else {
if((state_val_22221 === (12))){
var state_22220__$1 = state_22220;
var statearr_22228_22254 = state_22220__$1;
(statearr_22228_22254[(2)] = null);

(statearr_22228_22254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (2))){
var state_22220__$1 = state_22220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22220__$1,(4),from);
} else {
if((state_val_22221 === (11))){
var inst_22209 = (state_22220[(2)]);
var state_22220__$1 = state_22220;
if(cljs.core.truth_(inst_22209)){
var statearr_22229_22255 = state_22220__$1;
(statearr_22229_22255[(1)] = (12));

} else {
var statearr_22230_22256 = state_22220__$1;
(statearr_22230_22256[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (9))){
var state_22220__$1 = state_22220;
var statearr_22231_22257 = state_22220__$1;
(statearr_22231_22257[(2)] = null);

(statearr_22231_22257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (5))){
var state_22220__$1 = state_22220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22232_22258 = state_22220__$1;
(statearr_22232_22258[(1)] = (8));

} else {
var statearr_22233_22259 = state_22220__$1;
(statearr_22233_22259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (14))){
var inst_22214 = (state_22220[(2)]);
var state_22220__$1 = state_22220;
var statearr_22234_22260 = state_22220__$1;
(statearr_22234_22260[(2)] = inst_22214);

(statearr_22234_22260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (10))){
var inst_22206 = (state_22220[(2)]);
var state_22220__$1 = state_22220;
var statearr_22235_22261 = state_22220__$1;
(statearr_22235_22261[(2)] = inst_22206);

(statearr_22235_22261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22221 === (8))){
var inst_22203 = cljs.core.async.close_BANG_.call(null,to);
var state_22220__$1 = state_22220;
var statearr_22236_22262 = state_22220__$1;
(statearr_22236_22262[(2)] = inst_22203);

(statearr_22236_22262[(1)] = (10));


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
});})(c__19329__auto___22248))
;
return ((function (switch__19308__auto__,c__19329__auto___22248){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_22240 = [null,null,null,null,null,null,null,null];
(statearr_22240[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_22240[(1)] = (1));

return statearr_22240;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_22220){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22241){if((e22241 instanceof Object)){
var ex__19312__auto__ = e22241;
var statearr_22242_22263 = state_22220;
(statearr_22242_22263[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22264 = state_22220;
state_22220 = G__22264;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_22220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_22220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___22248))
})();
var state__19331__auto__ = (function (){var statearr_22243 = f__19330__auto__.call(null);
(statearr_22243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___22248);

return statearr_22243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___22248))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22448){
var vec__22449 = p__22448;
var v = cljs.core.nth.call(null,vec__22449,(0),null);
var p = cljs.core.nth.call(null,vec__22449,(1),null);
var job = vec__22449;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19329__auto___22631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___22631,res,vec__22449,v,p,job,jobs,results){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___22631,res,vec__22449,v,p,job,jobs,results){
return (function (state_22454){
var state_val_22455 = (state_22454[(1)]);
if((state_val_22455 === (1))){
var state_22454__$1 = state_22454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22454__$1,(2),res,v);
} else {
if((state_val_22455 === (2))){
var inst_22451 = (state_22454[(2)]);
var inst_22452 = cljs.core.async.close_BANG_.call(null,res);
var state_22454__$1 = (function (){var statearr_22456 = state_22454;
(statearr_22456[(7)] = inst_22451);

return statearr_22456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22454__$1,inst_22452);
} else {
return null;
}
}
});})(c__19329__auto___22631,res,vec__22449,v,p,job,jobs,results))
;
return ((function (switch__19308__auto__,c__19329__auto___22631,res,vec__22449,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0 = (function (){
var statearr_22460 = [null,null,null,null,null,null,null,null];
(statearr_22460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__);

(statearr_22460[(1)] = (1));

return statearr_22460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1 = (function (state_22454){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22461){if((e22461 instanceof Object)){
var ex__19312__auto__ = e22461;
var statearr_22462_22632 = state_22454;
(statearr_22462_22632[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22633 = state_22454;
state_22454 = G__22633;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = function(state_22454){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1.call(this,state_22454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___22631,res,vec__22449,v,p,job,jobs,results))
})();
var state__19331__auto__ = (function (){var statearr_22463 = f__19330__auto__.call(null);
(statearr_22463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___22631);

return statearr_22463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___22631,res,vec__22449,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22464){
var vec__22465 = p__22464;
var v = cljs.core.nth.call(null,vec__22465,(0),null);
var p = cljs.core.nth.call(null,vec__22465,(1),null);
var job = vec__22465;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17209__auto___22634 = n;
var __22635 = (0);
while(true){
if((__22635 < n__17209__auto___22634)){
var G__22466_22636 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22466_22636) {
case "compute":
var c__19329__auto___22638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22635,c__19329__auto___22638,G__22466_22636,n__17209__auto___22634,jobs,results,process,async){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (__22635,c__19329__auto___22638,G__22466_22636,n__17209__auto___22634,jobs,results,process,async){
return (function (state_22479){
var state_val_22480 = (state_22479[(1)]);
if((state_val_22480 === (1))){
var state_22479__$1 = state_22479;
var statearr_22481_22639 = state_22479__$1;
(statearr_22481_22639[(2)] = null);

(statearr_22481_22639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22480 === (2))){
var state_22479__$1 = state_22479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22479__$1,(4),jobs);
} else {
if((state_val_22480 === (3))){
var inst_22477 = (state_22479[(2)]);
var state_22479__$1 = state_22479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22479__$1,inst_22477);
} else {
if((state_val_22480 === (4))){
var inst_22469 = (state_22479[(2)]);
var inst_22470 = process.call(null,inst_22469);
var state_22479__$1 = state_22479;
if(cljs.core.truth_(inst_22470)){
var statearr_22482_22640 = state_22479__$1;
(statearr_22482_22640[(1)] = (5));

} else {
var statearr_22483_22641 = state_22479__$1;
(statearr_22483_22641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22480 === (5))){
var state_22479__$1 = state_22479;
var statearr_22484_22642 = state_22479__$1;
(statearr_22484_22642[(2)] = null);

(statearr_22484_22642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22480 === (6))){
var state_22479__$1 = state_22479;
var statearr_22485_22643 = state_22479__$1;
(statearr_22485_22643[(2)] = null);

(statearr_22485_22643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22480 === (7))){
var inst_22475 = (state_22479[(2)]);
var state_22479__$1 = state_22479;
var statearr_22486_22644 = state_22479__$1;
(statearr_22486_22644[(2)] = inst_22475);

(statearr_22486_22644[(1)] = (3));


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
});})(__22635,c__19329__auto___22638,G__22466_22636,n__17209__auto___22634,jobs,results,process,async))
;
return ((function (__22635,switch__19308__auto__,c__19329__auto___22638,G__22466_22636,n__17209__auto___22634,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0 = (function (){
var statearr_22490 = [null,null,null,null,null,null,null];
(statearr_22490[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__);

(statearr_22490[(1)] = (1));

return statearr_22490;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1 = (function (state_22479){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22491){if((e22491 instanceof Object)){
var ex__19312__auto__ = e22491;
var statearr_22492_22645 = state_22479;
(statearr_22492_22645[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22646 = state_22479;
state_22479 = G__22646;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = function(state_22479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1.call(this,state_22479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__;
})()
;})(__22635,switch__19308__auto__,c__19329__auto___22638,G__22466_22636,n__17209__auto___22634,jobs,results,process,async))
})();
var state__19331__auto__ = (function (){var statearr_22493 = f__19330__auto__.call(null);
(statearr_22493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___22638);

return statearr_22493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(__22635,c__19329__auto___22638,G__22466_22636,n__17209__auto___22634,jobs,results,process,async))
);


break;
case "async":
var c__19329__auto___22647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22635,c__19329__auto___22647,G__22466_22636,n__17209__auto___22634,jobs,results,process,async){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (__22635,c__19329__auto___22647,G__22466_22636,n__17209__auto___22634,jobs,results,process,async){
return (function (state_22506){
var state_val_22507 = (state_22506[(1)]);
if((state_val_22507 === (1))){
var state_22506__$1 = state_22506;
var statearr_22508_22648 = state_22506__$1;
(statearr_22508_22648[(2)] = null);

(statearr_22508_22648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22507 === (2))){
var state_22506__$1 = state_22506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22506__$1,(4),jobs);
} else {
if((state_val_22507 === (3))){
var inst_22504 = (state_22506[(2)]);
var state_22506__$1 = state_22506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22506__$1,inst_22504);
} else {
if((state_val_22507 === (4))){
var inst_22496 = (state_22506[(2)]);
var inst_22497 = async.call(null,inst_22496);
var state_22506__$1 = state_22506;
if(cljs.core.truth_(inst_22497)){
var statearr_22509_22649 = state_22506__$1;
(statearr_22509_22649[(1)] = (5));

} else {
var statearr_22510_22650 = state_22506__$1;
(statearr_22510_22650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22507 === (5))){
var state_22506__$1 = state_22506;
var statearr_22511_22651 = state_22506__$1;
(statearr_22511_22651[(2)] = null);

(statearr_22511_22651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22507 === (6))){
var state_22506__$1 = state_22506;
var statearr_22512_22652 = state_22506__$1;
(statearr_22512_22652[(2)] = null);

(statearr_22512_22652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22507 === (7))){
var inst_22502 = (state_22506[(2)]);
var state_22506__$1 = state_22506;
var statearr_22513_22653 = state_22506__$1;
(statearr_22513_22653[(2)] = inst_22502);

(statearr_22513_22653[(1)] = (3));


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
});})(__22635,c__19329__auto___22647,G__22466_22636,n__17209__auto___22634,jobs,results,process,async))
;
return ((function (__22635,switch__19308__auto__,c__19329__auto___22647,G__22466_22636,n__17209__auto___22634,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0 = (function (){
var statearr_22517 = [null,null,null,null,null,null,null];
(statearr_22517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__);

(statearr_22517[(1)] = (1));

return statearr_22517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1 = (function (state_22506){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22518){if((e22518 instanceof Object)){
var ex__19312__auto__ = e22518;
var statearr_22519_22654 = state_22506;
(statearr_22519_22654[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22655 = state_22506;
state_22506 = G__22655;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = function(state_22506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1.call(this,state_22506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__;
})()
;})(__22635,switch__19308__auto__,c__19329__auto___22647,G__22466_22636,n__17209__auto___22634,jobs,results,process,async))
})();
var state__19331__auto__ = (function (){var statearr_22520 = f__19330__auto__.call(null);
(statearr_22520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___22647);

return statearr_22520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(__22635,c__19329__auto___22647,G__22466_22636,n__17209__auto___22634,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22656 = (__22635 + (1));
__22635 = G__22656;
continue;
} else {
}
break;
}

var c__19329__auto___22657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___22657,jobs,results,process,async){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___22657,jobs,results,process,async){
return (function (state_22542){
var state_val_22543 = (state_22542[(1)]);
if((state_val_22543 === (1))){
var state_22542__$1 = state_22542;
var statearr_22544_22658 = state_22542__$1;
(statearr_22544_22658[(2)] = null);

(statearr_22544_22658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22543 === (2))){
var state_22542__$1 = state_22542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22542__$1,(4),from);
} else {
if((state_val_22543 === (3))){
var inst_22540 = (state_22542[(2)]);
var state_22542__$1 = state_22542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22542__$1,inst_22540);
} else {
if((state_val_22543 === (4))){
var inst_22523 = (state_22542[(7)]);
var inst_22523__$1 = (state_22542[(2)]);
var inst_22524 = (inst_22523__$1 == null);
var state_22542__$1 = (function (){var statearr_22545 = state_22542;
(statearr_22545[(7)] = inst_22523__$1);

return statearr_22545;
})();
if(cljs.core.truth_(inst_22524)){
var statearr_22546_22659 = state_22542__$1;
(statearr_22546_22659[(1)] = (5));

} else {
var statearr_22547_22660 = state_22542__$1;
(statearr_22547_22660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22543 === (5))){
var inst_22526 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22542__$1 = state_22542;
var statearr_22548_22661 = state_22542__$1;
(statearr_22548_22661[(2)] = inst_22526);

(statearr_22548_22661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22543 === (6))){
var inst_22523 = (state_22542[(7)]);
var inst_22528 = (state_22542[(8)]);
var inst_22528__$1 = cljs.core.async.chan.call(null,(1));
var inst_22529 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22530 = [inst_22523,inst_22528__$1];
var inst_22531 = (new cljs.core.PersistentVector(null,2,(5),inst_22529,inst_22530,null));
var state_22542__$1 = (function (){var statearr_22549 = state_22542;
(statearr_22549[(8)] = inst_22528__$1);

return statearr_22549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22542__$1,(8),jobs,inst_22531);
} else {
if((state_val_22543 === (7))){
var inst_22538 = (state_22542[(2)]);
var state_22542__$1 = state_22542;
var statearr_22550_22662 = state_22542__$1;
(statearr_22550_22662[(2)] = inst_22538);

(statearr_22550_22662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22543 === (8))){
var inst_22528 = (state_22542[(8)]);
var inst_22533 = (state_22542[(2)]);
var state_22542__$1 = (function (){var statearr_22551 = state_22542;
(statearr_22551[(9)] = inst_22533);

return statearr_22551;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22542__$1,(9),results,inst_22528);
} else {
if((state_val_22543 === (9))){
var inst_22535 = (state_22542[(2)]);
var state_22542__$1 = (function (){var statearr_22552 = state_22542;
(statearr_22552[(10)] = inst_22535);

return statearr_22552;
})();
var statearr_22553_22663 = state_22542__$1;
(statearr_22553_22663[(2)] = null);

(statearr_22553_22663[(1)] = (2));


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
});})(c__19329__auto___22657,jobs,results,process,async))
;
return ((function (switch__19308__auto__,c__19329__auto___22657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0 = (function (){
var statearr_22557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__);

(statearr_22557[(1)] = (1));

return statearr_22557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1 = (function (state_22542){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22558){if((e22558 instanceof Object)){
var ex__19312__auto__ = e22558;
var statearr_22559_22664 = state_22542;
(statearr_22559_22664[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22665 = state_22542;
state_22542 = G__22665;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = function(state_22542){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1.call(this,state_22542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___22657,jobs,results,process,async))
})();
var state__19331__auto__ = (function (){var statearr_22560 = f__19330__auto__.call(null);
(statearr_22560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___22657);

return statearr_22560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___22657,jobs,results,process,async))
);


var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__,jobs,results,process,async){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__,jobs,results,process,async){
return (function (state_22598){
var state_val_22599 = (state_22598[(1)]);
if((state_val_22599 === (7))){
var inst_22594 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22600_22666 = state_22598__$1;
(statearr_22600_22666[(2)] = inst_22594);

(statearr_22600_22666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (20))){
var state_22598__$1 = state_22598;
var statearr_22601_22667 = state_22598__$1;
(statearr_22601_22667[(2)] = null);

(statearr_22601_22667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (1))){
var state_22598__$1 = state_22598;
var statearr_22602_22668 = state_22598__$1;
(statearr_22602_22668[(2)] = null);

(statearr_22602_22668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (4))){
var inst_22563 = (state_22598[(7)]);
var inst_22563__$1 = (state_22598[(2)]);
var inst_22564 = (inst_22563__$1 == null);
var state_22598__$1 = (function (){var statearr_22603 = state_22598;
(statearr_22603[(7)] = inst_22563__$1);

return statearr_22603;
})();
if(cljs.core.truth_(inst_22564)){
var statearr_22604_22669 = state_22598__$1;
(statearr_22604_22669[(1)] = (5));

} else {
var statearr_22605_22670 = state_22598__$1;
(statearr_22605_22670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (15))){
var inst_22576 = (state_22598[(8)]);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22598__$1,(18),to,inst_22576);
} else {
if((state_val_22599 === (21))){
var inst_22589 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22606_22671 = state_22598__$1;
(statearr_22606_22671[(2)] = inst_22589);

(statearr_22606_22671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (13))){
var inst_22591 = (state_22598[(2)]);
var state_22598__$1 = (function (){var statearr_22607 = state_22598;
(statearr_22607[(9)] = inst_22591);

return statearr_22607;
})();
var statearr_22608_22672 = state_22598__$1;
(statearr_22608_22672[(2)] = null);

(statearr_22608_22672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (6))){
var inst_22563 = (state_22598[(7)]);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22598__$1,(11),inst_22563);
} else {
if((state_val_22599 === (17))){
var inst_22584 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
if(cljs.core.truth_(inst_22584)){
var statearr_22609_22673 = state_22598__$1;
(statearr_22609_22673[(1)] = (19));

} else {
var statearr_22610_22674 = state_22598__$1;
(statearr_22610_22674[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (3))){
var inst_22596 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22598__$1,inst_22596);
} else {
if((state_val_22599 === (12))){
var inst_22573 = (state_22598[(10)]);
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22598__$1,(14),inst_22573);
} else {
if((state_val_22599 === (2))){
var state_22598__$1 = state_22598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22598__$1,(4),results);
} else {
if((state_val_22599 === (19))){
var state_22598__$1 = state_22598;
var statearr_22611_22675 = state_22598__$1;
(statearr_22611_22675[(2)] = null);

(statearr_22611_22675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (11))){
var inst_22573 = (state_22598[(2)]);
var state_22598__$1 = (function (){var statearr_22612 = state_22598;
(statearr_22612[(10)] = inst_22573);

return statearr_22612;
})();
var statearr_22613_22676 = state_22598__$1;
(statearr_22613_22676[(2)] = null);

(statearr_22613_22676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (9))){
var state_22598__$1 = state_22598;
var statearr_22614_22677 = state_22598__$1;
(statearr_22614_22677[(2)] = null);

(statearr_22614_22677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (5))){
var state_22598__$1 = state_22598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22615_22678 = state_22598__$1;
(statearr_22615_22678[(1)] = (8));

} else {
var statearr_22616_22679 = state_22598__$1;
(statearr_22616_22679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (14))){
var inst_22578 = (state_22598[(11)]);
var inst_22576 = (state_22598[(8)]);
var inst_22576__$1 = (state_22598[(2)]);
var inst_22577 = (inst_22576__$1 == null);
var inst_22578__$1 = cljs.core.not.call(null,inst_22577);
var state_22598__$1 = (function (){var statearr_22617 = state_22598;
(statearr_22617[(11)] = inst_22578__$1);

(statearr_22617[(8)] = inst_22576__$1);

return statearr_22617;
})();
if(inst_22578__$1){
var statearr_22618_22680 = state_22598__$1;
(statearr_22618_22680[(1)] = (15));

} else {
var statearr_22619_22681 = state_22598__$1;
(statearr_22619_22681[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (16))){
var inst_22578 = (state_22598[(11)]);
var state_22598__$1 = state_22598;
var statearr_22620_22682 = state_22598__$1;
(statearr_22620_22682[(2)] = inst_22578);

(statearr_22620_22682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (10))){
var inst_22570 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22621_22683 = state_22598__$1;
(statearr_22621_22683[(2)] = inst_22570);

(statearr_22621_22683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (18))){
var inst_22581 = (state_22598[(2)]);
var state_22598__$1 = state_22598;
var statearr_22622_22684 = state_22598__$1;
(statearr_22622_22684[(2)] = inst_22581);

(statearr_22622_22684[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22599 === (8))){
var inst_22567 = cljs.core.async.close_BANG_.call(null,to);
var state_22598__$1 = state_22598;
var statearr_22623_22685 = state_22598__$1;
(statearr_22623_22685[(2)] = inst_22567);

(statearr_22623_22685[(1)] = (10));


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
});})(c__19329__auto__,jobs,results,process,async))
;
return ((function (switch__19308__auto__,c__19329__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0 = (function (){
var statearr_22627 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__);

(statearr_22627[(1)] = (1));

return statearr_22627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1 = (function (state_22598){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22628){if((e22628 instanceof Object)){
var ex__19312__auto__ = e22628;
var statearr_22629_22686 = state_22598;
(statearr_22629_22686[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22687 = state_22598;
state_22598 = G__22687;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__ = function(state_22598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1.call(this,state_22598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__,jobs,results,process,async))
})();
var state__19331__auto__ = (function (){var statearr_22630 = f__19330__auto__.call(null);
(statearr_22630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_22630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__,jobs,results,process,async))
);

return c__19329__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22688 = [];
var len__17364__auto___22691 = arguments.length;
var i__17365__auto___22692 = (0);
while(true){
if((i__17365__auto___22692 < len__17364__auto___22691)){
args22688.push((arguments[i__17365__auto___22692]));

var G__22693 = (i__17365__auto___22692 + (1));
i__17365__auto___22692 = G__22693;
continue;
} else {
}
break;
}

var G__22690 = args22688.length;
switch (G__22690) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22688.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22695 = [];
var len__17364__auto___22698 = arguments.length;
var i__17365__auto___22699 = (0);
while(true){
if((i__17365__auto___22699 < len__17364__auto___22698)){
args22695.push((arguments[i__17365__auto___22699]));

var G__22700 = (i__17365__auto___22699 + (1));
i__17365__auto___22699 = G__22700;
continue;
} else {
}
break;
}

var G__22697 = args22695.length;
switch (G__22697) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22695.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22702 = [];
var len__17364__auto___22755 = arguments.length;
var i__17365__auto___22756 = (0);
while(true){
if((i__17365__auto___22756 < len__17364__auto___22755)){
args22702.push((arguments[i__17365__auto___22756]));

var G__22757 = (i__17365__auto___22756 + (1));
i__17365__auto___22756 = G__22757;
continue;
} else {
}
break;
}

var G__22704 = args22702.length;
switch (G__22704) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22702.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19329__auto___22759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___22759,tc,fc){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___22759,tc,fc){
return (function (state_22730){
var state_val_22731 = (state_22730[(1)]);
if((state_val_22731 === (7))){
var inst_22726 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22732_22760 = state_22730__$1;
(statearr_22732_22760[(2)] = inst_22726);

(statearr_22732_22760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (1))){
var state_22730__$1 = state_22730;
var statearr_22733_22761 = state_22730__$1;
(statearr_22733_22761[(2)] = null);

(statearr_22733_22761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (4))){
var inst_22707 = (state_22730[(7)]);
var inst_22707__$1 = (state_22730[(2)]);
var inst_22708 = (inst_22707__$1 == null);
var state_22730__$1 = (function (){var statearr_22734 = state_22730;
(statearr_22734[(7)] = inst_22707__$1);

return statearr_22734;
})();
if(cljs.core.truth_(inst_22708)){
var statearr_22735_22762 = state_22730__$1;
(statearr_22735_22762[(1)] = (5));

} else {
var statearr_22736_22763 = state_22730__$1;
(statearr_22736_22763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (13))){
var state_22730__$1 = state_22730;
var statearr_22737_22764 = state_22730__$1;
(statearr_22737_22764[(2)] = null);

(statearr_22737_22764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (6))){
var inst_22707 = (state_22730[(7)]);
var inst_22713 = p.call(null,inst_22707);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22713)){
var statearr_22738_22765 = state_22730__$1;
(statearr_22738_22765[(1)] = (9));

} else {
var statearr_22739_22766 = state_22730__$1;
(statearr_22739_22766[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (3))){
var inst_22728 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22730__$1,inst_22728);
} else {
if((state_val_22731 === (12))){
var state_22730__$1 = state_22730;
var statearr_22740_22767 = state_22730__$1;
(statearr_22740_22767[(2)] = null);

(statearr_22740_22767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (2))){
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22730__$1,(4),ch);
} else {
if((state_val_22731 === (11))){
var inst_22707 = (state_22730[(7)]);
var inst_22717 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22730__$1,(8),inst_22717,inst_22707);
} else {
if((state_val_22731 === (9))){
var state_22730__$1 = state_22730;
var statearr_22741_22768 = state_22730__$1;
(statearr_22741_22768[(2)] = tc);

(statearr_22741_22768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (5))){
var inst_22710 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22711 = cljs.core.async.close_BANG_.call(null,fc);
var state_22730__$1 = (function (){var statearr_22742 = state_22730;
(statearr_22742[(8)] = inst_22710);

return statearr_22742;
})();
var statearr_22743_22769 = state_22730__$1;
(statearr_22743_22769[(2)] = inst_22711);

(statearr_22743_22769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (14))){
var inst_22724 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22744_22770 = state_22730__$1;
(statearr_22744_22770[(2)] = inst_22724);

(statearr_22744_22770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (10))){
var state_22730__$1 = state_22730;
var statearr_22745_22771 = state_22730__$1;
(statearr_22745_22771[(2)] = fc);

(statearr_22745_22771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (8))){
var inst_22719 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22719)){
var statearr_22746_22772 = state_22730__$1;
(statearr_22746_22772[(1)] = (12));

} else {
var statearr_22747_22773 = state_22730__$1;
(statearr_22747_22773[(1)] = (13));

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
});})(c__19329__auto___22759,tc,fc))
;
return ((function (switch__19308__auto__,c__19329__auto___22759,tc,fc){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_22751 = [null,null,null,null,null,null,null,null,null];
(statearr_22751[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_22751[(1)] = (1));

return statearr_22751;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_22730){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22752){if((e22752 instanceof Object)){
var ex__19312__auto__ = e22752;
var statearr_22753_22774 = state_22730;
(statearr_22753_22774[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22775 = state_22730;
state_22730 = G__22775;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_22730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_22730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___22759,tc,fc))
})();
var state__19331__auto__ = (function (){var statearr_22754 = f__19330__auto__.call(null);
(statearr_22754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___22759);

return statearr_22754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___22759,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_22822){
var state_val_22823 = (state_22822[(1)]);
if((state_val_22823 === (1))){
var inst_22808 = init;
var state_22822__$1 = (function (){var statearr_22824 = state_22822;
(statearr_22824[(7)] = inst_22808);

return statearr_22824;
})();
var statearr_22825_22840 = state_22822__$1;
(statearr_22825_22840[(2)] = null);

(statearr_22825_22840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (2))){
var state_22822__$1 = state_22822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22822__$1,(4),ch);
} else {
if((state_val_22823 === (3))){
var inst_22820 = (state_22822[(2)]);
var state_22822__$1 = state_22822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22822__$1,inst_22820);
} else {
if((state_val_22823 === (4))){
var inst_22811 = (state_22822[(8)]);
var inst_22811__$1 = (state_22822[(2)]);
var inst_22812 = (inst_22811__$1 == null);
var state_22822__$1 = (function (){var statearr_22826 = state_22822;
(statearr_22826[(8)] = inst_22811__$1);

return statearr_22826;
})();
if(cljs.core.truth_(inst_22812)){
var statearr_22827_22841 = state_22822__$1;
(statearr_22827_22841[(1)] = (5));

} else {
var statearr_22828_22842 = state_22822__$1;
(statearr_22828_22842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (5))){
var inst_22808 = (state_22822[(7)]);
var state_22822__$1 = state_22822;
var statearr_22829_22843 = state_22822__$1;
(statearr_22829_22843[(2)] = inst_22808);

(statearr_22829_22843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (6))){
var inst_22808 = (state_22822[(7)]);
var inst_22811 = (state_22822[(8)]);
var inst_22815 = f.call(null,inst_22808,inst_22811);
var inst_22808__$1 = inst_22815;
var state_22822__$1 = (function (){var statearr_22830 = state_22822;
(statearr_22830[(7)] = inst_22808__$1);

return statearr_22830;
})();
var statearr_22831_22844 = state_22822__$1;
(statearr_22831_22844[(2)] = null);

(statearr_22831_22844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22823 === (7))){
var inst_22818 = (state_22822[(2)]);
var state_22822__$1 = state_22822;
var statearr_22832_22845 = state_22822__$1;
(statearr_22832_22845[(2)] = inst_22818);

(statearr_22832_22845[(1)] = (3));


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
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19309__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19309__auto____0 = (function (){
var statearr_22836 = [null,null,null,null,null,null,null,null,null];
(statearr_22836[(0)] = cljs$core$async$reduce_$_state_machine__19309__auto__);

(statearr_22836[(1)] = (1));

return statearr_22836;
});
var cljs$core$async$reduce_$_state_machine__19309__auto____1 = (function (state_22822){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22837){if((e22837 instanceof Object)){
var ex__19312__auto__ = e22837;
var statearr_22838_22846 = state_22822;
(statearr_22838_22846[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22847 = state_22822;
state_22822 = G__22847;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19309__auto__ = function(state_22822){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19309__auto____1.call(this,state_22822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19309__auto____0;
cljs$core$async$reduce_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19309__auto____1;
return cljs$core$async$reduce_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_22839 = f__19330__auto__.call(null);
(statearr_22839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_22839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22848 = [];
var len__17364__auto___22900 = arguments.length;
var i__17365__auto___22901 = (0);
while(true){
if((i__17365__auto___22901 < len__17364__auto___22900)){
args22848.push((arguments[i__17365__auto___22901]));

var G__22902 = (i__17365__auto___22901 + (1));
i__17365__auto___22901 = G__22902;
continue;
} else {
}
break;
}

var G__22850 = args22848.length;
switch (G__22850) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22848.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_22875){
var state_val_22876 = (state_22875[(1)]);
if((state_val_22876 === (7))){
var inst_22857 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22877_22904 = state_22875__$1;
(statearr_22877_22904[(2)] = inst_22857);

(statearr_22877_22904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (1))){
var inst_22851 = cljs.core.seq.call(null,coll);
var inst_22852 = inst_22851;
var state_22875__$1 = (function (){var statearr_22878 = state_22875;
(statearr_22878[(7)] = inst_22852);

return statearr_22878;
})();
var statearr_22879_22905 = state_22875__$1;
(statearr_22879_22905[(2)] = null);

(statearr_22879_22905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (4))){
var inst_22852 = (state_22875[(7)]);
var inst_22855 = cljs.core.first.call(null,inst_22852);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22875__$1,(7),ch,inst_22855);
} else {
if((state_val_22876 === (13))){
var inst_22869 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22880_22906 = state_22875__$1;
(statearr_22880_22906[(2)] = inst_22869);

(statearr_22880_22906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (6))){
var inst_22860 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
if(cljs.core.truth_(inst_22860)){
var statearr_22881_22907 = state_22875__$1;
(statearr_22881_22907[(1)] = (8));

} else {
var statearr_22882_22908 = state_22875__$1;
(statearr_22882_22908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (3))){
var inst_22873 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22875__$1,inst_22873);
} else {
if((state_val_22876 === (12))){
var state_22875__$1 = state_22875;
var statearr_22883_22909 = state_22875__$1;
(statearr_22883_22909[(2)] = null);

(statearr_22883_22909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (2))){
var inst_22852 = (state_22875[(7)]);
var state_22875__$1 = state_22875;
if(cljs.core.truth_(inst_22852)){
var statearr_22884_22910 = state_22875__$1;
(statearr_22884_22910[(1)] = (4));

} else {
var statearr_22885_22911 = state_22875__$1;
(statearr_22885_22911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (11))){
var inst_22866 = cljs.core.async.close_BANG_.call(null,ch);
var state_22875__$1 = state_22875;
var statearr_22886_22912 = state_22875__$1;
(statearr_22886_22912[(2)] = inst_22866);

(statearr_22886_22912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (9))){
var state_22875__$1 = state_22875;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22887_22913 = state_22875__$1;
(statearr_22887_22913[(1)] = (11));

} else {
var statearr_22888_22914 = state_22875__$1;
(statearr_22888_22914[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (5))){
var inst_22852 = (state_22875[(7)]);
var state_22875__$1 = state_22875;
var statearr_22889_22915 = state_22875__$1;
(statearr_22889_22915[(2)] = inst_22852);

(statearr_22889_22915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (10))){
var inst_22871 = (state_22875[(2)]);
var state_22875__$1 = state_22875;
var statearr_22890_22916 = state_22875__$1;
(statearr_22890_22916[(2)] = inst_22871);

(statearr_22890_22916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22876 === (8))){
var inst_22852 = (state_22875[(7)]);
var inst_22862 = cljs.core.next.call(null,inst_22852);
var inst_22852__$1 = inst_22862;
var state_22875__$1 = (function (){var statearr_22891 = state_22875;
(statearr_22891[(7)] = inst_22852__$1);

return statearr_22891;
})();
var statearr_22892_22917 = state_22875__$1;
(statearr_22892_22917[(2)] = null);

(statearr_22892_22917[(1)] = (2));


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
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_22896 = [null,null,null,null,null,null,null,null];
(statearr_22896[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_22896[(1)] = (1));

return statearr_22896;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_22875){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_22875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e22897){if((e22897 instanceof Object)){
var ex__19312__auto__ = e22897;
var statearr_22898_22918 = state_22875;
(statearr_22898_22918[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22919 = state_22875;
state_22875 = G__22919;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_22875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_22875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_22899 = f__19330__auto__.call(null);
(statearr_22899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_22899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16961__auto__ = (((_ == null))?null:_);
var m__16962__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,_);
} else {
var m__16962__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16962__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m);
} else {
var m__16962__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23141 = (function (mult,ch,cs,meta23142){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23142 = meta23142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23143,meta23142__$1){
var self__ = this;
var _23143__$1 = this;
return (new cljs.core.async.t_cljs$core$async23141(self__.mult,self__.ch,self__.cs,meta23142__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23143){
var self__ = this;
var _23143__$1 = this;
return self__.meta23142;
});})(cs))
;

cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23141.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23141.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23142","meta23142",550021278,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23141";

cljs.core.async.t_cljs$core$async23141.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async23141");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23141 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23141(mult__$1,ch__$1,cs__$1,meta23142){
return (new cljs.core.async.t_cljs$core$async23141(mult__$1,ch__$1,cs__$1,meta23142));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23141(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19329__auto___23362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___23362,cs,m,dchan,dctr,done){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___23362,cs,m,dchan,dctr,done){
return (function (state_23274){
var state_val_23275 = (state_23274[(1)]);
if((state_val_23275 === (7))){
var inst_23270 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23276_23363 = state_23274__$1;
(statearr_23276_23363[(2)] = inst_23270);

(statearr_23276_23363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (20))){
var inst_23175 = (state_23274[(7)]);
var inst_23185 = cljs.core.first.call(null,inst_23175);
var inst_23186 = cljs.core.nth.call(null,inst_23185,(0),null);
var inst_23187 = cljs.core.nth.call(null,inst_23185,(1),null);
var state_23274__$1 = (function (){var statearr_23277 = state_23274;
(statearr_23277[(8)] = inst_23186);

return statearr_23277;
})();
if(cljs.core.truth_(inst_23187)){
var statearr_23278_23364 = state_23274__$1;
(statearr_23278_23364[(1)] = (22));

} else {
var statearr_23279_23365 = state_23274__$1;
(statearr_23279_23365[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (27))){
var inst_23217 = (state_23274[(9)]);
var inst_23222 = (state_23274[(10)]);
var inst_23215 = (state_23274[(11)]);
var inst_23146 = (state_23274[(12)]);
var inst_23222__$1 = cljs.core._nth.call(null,inst_23215,inst_23217);
var inst_23223 = cljs.core.async.put_BANG_.call(null,inst_23222__$1,inst_23146,done);
var state_23274__$1 = (function (){var statearr_23280 = state_23274;
(statearr_23280[(10)] = inst_23222__$1);

return statearr_23280;
})();
if(cljs.core.truth_(inst_23223)){
var statearr_23281_23366 = state_23274__$1;
(statearr_23281_23366[(1)] = (30));

} else {
var statearr_23282_23367 = state_23274__$1;
(statearr_23282_23367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (1))){
var state_23274__$1 = state_23274;
var statearr_23283_23368 = state_23274__$1;
(statearr_23283_23368[(2)] = null);

(statearr_23283_23368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (24))){
var inst_23175 = (state_23274[(7)]);
var inst_23192 = (state_23274[(2)]);
var inst_23193 = cljs.core.next.call(null,inst_23175);
var inst_23155 = inst_23193;
var inst_23156 = null;
var inst_23157 = (0);
var inst_23158 = (0);
var state_23274__$1 = (function (){var statearr_23284 = state_23274;
(statearr_23284[(13)] = inst_23192);

(statearr_23284[(14)] = inst_23156);

(statearr_23284[(15)] = inst_23158);

(statearr_23284[(16)] = inst_23155);

(statearr_23284[(17)] = inst_23157);

return statearr_23284;
})();
var statearr_23285_23369 = state_23274__$1;
(statearr_23285_23369[(2)] = null);

(statearr_23285_23369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (39))){
var state_23274__$1 = state_23274;
var statearr_23289_23370 = state_23274__$1;
(statearr_23289_23370[(2)] = null);

(statearr_23289_23370[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (4))){
var inst_23146 = (state_23274[(12)]);
var inst_23146__$1 = (state_23274[(2)]);
var inst_23147 = (inst_23146__$1 == null);
var state_23274__$1 = (function (){var statearr_23290 = state_23274;
(statearr_23290[(12)] = inst_23146__$1);

return statearr_23290;
})();
if(cljs.core.truth_(inst_23147)){
var statearr_23291_23371 = state_23274__$1;
(statearr_23291_23371[(1)] = (5));

} else {
var statearr_23292_23372 = state_23274__$1;
(statearr_23292_23372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (15))){
var inst_23156 = (state_23274[(14)]);
var inst_23158 = (state_23274[(15)]);
var inst_23155 = (state_23274[(16)]);
var inst_23157 = (state_23274[(17)]);
var inst_23171 = (state_23274[(2)]);
var inst_23172 = (inst_23158 + (1));
var tmp23286 = inst_23156;
var tmp23287 = inst_23155;
var tmp23288 = inst_23157;
var inst_23155__$1 = tmp23287;
var inst_23156__$1 = tmp23286;
var inst_23157__$1 = tmp23288;
var inst_23158__$1 = inst_23172;
var state_23274__$1 = (function (){var statearr_23293 = state_23274;
(statearr_23293[(18)] = inst_23171);

(statearr_23293[(14)] = inst_23156__$1);

(statearr_23293[(15)] = inst_23158__$1);

(statearr_23293[(16)] = inst_23155__$1);

(statearr_23293[(17)] = inst_23157__$1);

return statearr_23293;
})();
var statearr_23294_23373 = state_23274__$1;
(statearr_23294_23373[(2)] = null);

(statearr_23294_23373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (21))){
var inst_23196 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23298_23374 = state_23274__$1;
(statearr_23298_23374[(2)] = inst_23196);

(statearr_23298_23374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (31))){
var inst_23222 = (state_23274[(10)]);
var inst_23226 = done.call(null,null);
var inst_23227 = cljs.core.async.untap_STAR_.call(null,m,inst_23222);
var state_23274__$1 = (function (){var statearr_23299 = state_23274;
(statearr_23299[(19)] = inst_23226);

return statearr_23299;
})();
var statearr_23300_23375 = state_23274__$1;
(statearr_23300_23375[(2)] = inst_23227);

(statearr_23300_23375[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (32))){
var inst_23217 = (state_23274[(9)]);
var inst_23216 = (state_23274[(20)]);
var inst_23215 = (state_23274[(11)]);
var inst_23214 = (state_23274[(21)]);
var inst_23229 = (state_23274[(2)]);
var inst_23230 = (inst_23217 + (1));
var tmp23295 = inst_23216;
var tmp23296 = inst_23215;
var tmp23297 = inst_23214;
var inst_23214__$1 = tmp23297;
var inst_23215__$1 = tmp23296;
var inst_23216__$1 = tmp23295;
var inst_23217__$1 = inst_23230;
var state_23274__$1 = (function (){var statearr_23301 = state_23274;
(statearr_23301[(9)] = inst_23217__$1);

(statearr_23301[(20)] = inst_23216__$1);

(statearr_23301[(11)] = inst_23215__$1);

(statearr_23301[(22)] = inst_23229);

(statearr_23301[(21)] = inst_23214__$1);

return statearr_23301;
})();
var statearr_23302_23376 = state_23274__$1;
(statearr_23302_23376[(2)] = null);

(statearr_23302_23376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (40))){
var inst_23242 = (state_23274[(23)]);
var inst_23246 = done.call(null,null);
var inst_23247 = cljs.core.async.untap_STAR_.call(null,m,inst_23242);
var state_23274__$1 = (function (){var statearr_23303 = state_23274;
(statearr_23303[(24)] = inst_23246);

return statearr_23303;
})();
var statearr_23304_23377 = state_23274__$1;
(statearr_23304_23377[(2)] = inst_23247);

(statearr_23304_23377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (33))){
var inst_23233 = (state_23274[(25)]);
var inst_23235 = cljs.core.chunked_seq_QMARK_.call(null,inst_23233);
var state_23274__$1 = state_23274;
if(inst_23235){
var statearr_23305_23378 = state_23274__$1;
(statearr_23305_23378[(1)] = (36));

} else {
var statearr_23306_23379 = state_23274__$1;
(statearr_23306_23379[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (13))){
var inst_23165 = (state_23274[(26)]);
var inst_23168 = cljs.core.async.close_BANG_.call(null,inst_23165);
var state_23274__$1 = state_23274;
var statearr_23307_23380 = state_23274__$1;
(statearr_23307_23380[(2)] = inst_23168);

(statearr_23307_23380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (22))){
var inst_23186 = (state_23274[(8)]);
var inst_23189 = cljs.core.async.close_BANG_.call(null,inst_23186);
var state_23274__$1 = state_23274;
var statearr_23308_23381 = state_23274__$1;
(statearr_23308_23381[(2)] = inst_23189);

(statearr_23308_23381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (36))){
var inst_23233 = (state_23274[(25)]);
var inst_23237 = cljs.core.chunk_first.call(null,inst_23233);
var inst_23238 = cljs.core.chunk_rest.call(null,inst_23233);
var inst_23239 = cljs.core.count.call(null,inst_23237);
var inst_23214 = inst_23238;
var inst_23215 = inst_23237;
var inst_23216 = inst_23239;
var inst_23217 = (0);
var state_23274__$1 = (function (){var statearr_23309 = state_23274;
(statearr_23309[(9)] = inst_23217);

(statearr_23309[(20)] = inst_23216);

(statearr_23309[(11)] = inst_23215);

(statearr_23309[(21)] = inst_23214);

return statearr_23309;
})();
var statearr_23310_23382 = state_23274__$1;
(statearr_23310_23382[(2)] = null);

(statearr_23310_23382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (41))){
var inst_23233 = (state_23274[(25)]);
var inst_23249 = (state_23274[(2)]);
var inst_23250 = cljs.core.next.call(null,inst_23233);
var inst_23214 = inst_23250;
var inst_23215 = null;
var inst_23216 = (0);
var inst_23217 = (0);
var state_23274__$1 = (function (){var statearr_23311 = state_23274;
(statearr_23311[(9)] = inst_23217);

(statearr_23311[(20)] = inst_23216);

(statearr_23311[(11)] = inst_23215);

(statearr_23311[(27)] = inst_23249);

(statearr_23311[(21)] = inst_23214);

return statearr_23311;
})();
var statearr_23312_23383 = state_23274__$1;
(statearr_23312_23383[(2)] = null);

(statearr_23312_23383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (43))){
var state_23274__$1 = state_23274;
var statearr_23313_23384 = state_23274__$1;
(statearr_23313_23384[(2)] = null);

(statearr_23313_23384[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (29))){
var inst_23258 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23314_23385 = state_23274__$1;
(statearr_23314_23385[(2)] = inst_23258);

(statearr_23314_23385[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (44))){
var inst_23267 = (state_23274[(2)]);
var state_23274__$1 = (function (){var statearr_23315 = state_23274;
(statearr_23315[(28)] = inst_23267);

return statearr_23315;
})();
var statearr_23316_23386 = state_23274__$1;
(statearr_23316_23386[(2)] = null);

(statearr_23316_23386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (6))){
var inst_23206 = (state_23274[(29)]);
var inst_23205 = cljs.core.deref.call(null,cs);
var inst_23206__$1 = cljs.core.keys.call(null,inst_23205);
var inst_23207 = cljs.core.count.call(null,inst_23206__$1);
var inst_23208 = cljs.core.reset_BANG_.call(null,dctr,inst_23207);
var inst_23213 = cljs.core.seq.call(null,inst_23206__$1);
var inst_23214 = inst_23213;
var inst_23215 = null;
var inst_23216 = (0);
var inst_23217 = (0);
var state_23274__$1 = (function (){var statearr_23317 = state_23274;
(statearr_23317[(9)] = inst_23217);

(statearr_23317[(20)] = inst_23216);

(statearr_23317[(30)] = inst_23208);

(statearr_23317[(11)] = inst_23215);

(statearr_23317[(29)] = inst_23206__$1);

(statearr_23317[(21)] = inst_23214);

return statearr_23317;
})();
var statearr_23318_23387 = state_23274__$1;
(statearr_23318_23387[(2)] = null);

(statearr_23318_23387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (28))){
var inst_23214 = (state_23274[(21)]);
var inst_23233 = (state_23274[(25)]);
var inst_23233__$1 = cljs.core.seq.call(null,inst_23214);
var state_23274__$1 = (function (){var statearr_23319 = state_23274;
(statearr_23319[(25)] = inst_23233__$1);

return statearr_23319;
})();
if(inst_23233__$1){
var statearr_23320_23388 = state_23274__$1;
(statearr_23320_23388[(1)] = (33));

} else {
var statearr_23321_23389 = state_23274__$1;
(statearr_23321_23389[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (25))){
var inst_23217 = (state_23274[(9)]);
var inst_23216 = (state_23274[(20)]);
var inst_23219 = (inst_23217 < inst_23216);
var inst_23220 = inst_23219;
var state_23274__$1 = state_23274;
if(cljs.core.truth_(inst_23220)){
var statearr_23322_23390 = state_23274__$1;
(statearr_23322_23390[(1)] = (27));

} else {
var statearr_23323_23391 = state_23274__$1;
(statearr_23323_23391[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (34))){
var state_23274__$1 = state_23274;
var statearr_23324_23392 = state_23274__$1;
(statearr_23324_23392[(2)] = null);

(statearr_23324_23392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (17))){
var state_23274__$1 = state_23274;
var statearr_23325_23393 = state_23274__$1;
(statearr_23325_23393[(2)] = null);

(statearr_23325_23393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (3))){
var inst_23272 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23274__$1,inst_23272);
} else {
if((state_val_23275 === (12))){
var inst_23201 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23326_23394 = state_23274__$1;
(statearr_23326_23394[(2)] = inst_23201);

(statearr_23326_23394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (2))){
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23274__$1,(4),ch);
} else {
if((state_val_23275 === (23))){
var state_23274__$1 = state_23274;
var statearr_23327_23395 = state_23274__$1;
(statearr_23327_23395[(2)] = null);

(statearr_23327_23395[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (35))){
var inst_23256 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23328_23396 = state_23274__$1;
(statearr_23328_23396[(2)] = inst_23256);

(statearr_23328_23396[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (19))){
var inst_23175 = (state_23274[(7)]);
var inst_23179 = cljs.core.chunk_first.call(null,inst_23175);
var inst_23180 = cljs.core.chunk_rest.call(null,inst_23175);
var inst_23181 = cljs.core.count.call(null,inst_23179);
var inst_23155 = inst_23180;
var inst_23156 = inst_23179;
var inst_23157 = inst_23181;
var inst_23158 = (0);
var state_23274__$1 = (function (){var statearr_23329 = state_23274;
(statearr_23329[(14)] = inst_23156);

(statearr_23329[(15)] = inst_23158);

(statearr_23329[(16)] = inst_23155);

(statearr_23329[(17)] = inst_23157);

return statearr_23329;
})();
var statearr_23330_23397 = state_23274__$1;
(statearr_23330_23397[(2)] = null);

(statearr_23330_23397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (11))){
var inst_23175 = (state_23274[(7)]);
var inst_23155 = (state_23274[(16)]);
var inst_23175__$1 = cljs.core.seq.call(null,inst_23155);
var state_23274__$1 = (function (){var statearr_23331 = state_23274;
(statearr_23331[(7)] = inst_23175__$1);

return statearr_23331;
})();
if(inst_23175__$1){
var statearr_23332_23398 = state_23274__$1;
(statearr_23332_23398[(1)] = (16));

} else {
var statearr_23333_23399 = state_23274__$1;
(statearr_23333_23399[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (9))){
var inst_23203 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23334_23400 = state_23274__$1;
(statearr_23334_23400[(2)] = inst_23203);

(statearr_23334_23400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (5))){
var inst_23153 = cljs.core.deref.call(null,cs);
var inst_23154 = cljs.core.seq.call(null,inst_23153);
var inst_23155 = inst_23154;
var inst_23156 = null;
var inst_23157 = (0);
var inst_23158 = (0);
var state_23274__$1 = (function (){var statearr_23335 = state_23274;
(statearr_23335[(14)] = inst_23156);

(statearr_23335[(15)] = inst_23158);

(statearr_23335[(16)] = inst_23155);

(statearr_23335[(17)] = inst_23157);

return statearr_23335;
})();
var statearr_23336_23401 = state_23274__$1;
(statearr_23336_23401[(2)] = null);

(statearr_23336_23401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (14))){
var state_23274__$1 = state_23274;
var statearr_23337_23402 = state_23274__$1;
(statearr_23337_23402[(2)] = null);

(statearr_23337_23402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (45))){
var inst_23264 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23338_23403 = state_23274__$1;
(statearr_23338_23403[(2)] = inst_23264);

(statearr_23338_23403[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (26))){
var inst_23206 = (state_23274[(29)]);
var inst_23260 = (state_23274[(2)]);
var inst_23261 = cljs.core.seq.call(null,inst_23206);
var state_23274__$1 = (function (){var statearr_23339 = state_23274;
(statearr_23339[(31)] = inst_23260);

return statearr_23339;
})();
if(inst_23261){
var statearr_23340_23404 = state_23274__$1;
(statearr_23340_23404[(1)] = (42));

} else {
var statearr_23341_23405 = state_23274__$1;
(statearr_23341_23405[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (16))){
var inst_23175 = (state_23274[(7)]);
var inst_23177 = cljs.core.chunked_seq_QMARK_.call(null,inst_23175);
var state_23274__$1 = state_23274;
if(inst_23177){
var statearr_23342_23406 = state_23274__$1;
(statearr_23342_23406[(1)] = (19));

} else {
var statearr_23343_23407 = state_23274__$1;
(statearr_23343_23407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (38))){
var inst_23253 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23344_23408 = state_23274__$1;
(statearr_23344_23408[(2)] = inst_23253);

(statearr_23344_23408[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (30))){
var state_23274__$1 = state_23274;
var statearr_23345_23409 = state_23274__$1;
(statearr_23345_23409[(2)] = null);

(statearr_23345_23409[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (10))){
var inst_23156 = (state_23274[(14)]);
var inst_23158 = (state_23274[(15)]);
var inst_23164 = cljs.core._nth.call(null,inst_23156,inst_23158);
var inst_23165 = cljs.core.nth.call(null,inst_23164,(0),null);
var inst_23166 = cljs.core.nth.call(null,inst_23164,(1),null);
var state_23274__$1 = (function (){var statearr_23346 = state_23274;
(statearr_23346[(26)] = inst_23165);

return statearr_23346;
})();
if(cljs.core.truth_(inst_23166)){
var statearr_23347_23410 = state_23274__$1;
(statearr_23347_23410[(1)] = (13));

} else {
var statearr_23348_23411 = state_23274__$1;
(statearr_23348_23411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (18))){
var inst_23199 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23349_23412 = state_23274__$1;
(statearr_23349_23412[(2)] = inst_23199);

(statearr_23349_23412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (42))){
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23274__$1,(45),dchan);
} else {
if((state_val_23275 === (37))){
var inst_23146 = (state_23274[(12)]);
var inst_23233 = (state_23274[(25)]);
var inst_23242 = (state_23274[(23)]);
var inst_23242__$1 = cljs.core.first.call(null,inst_23233);
var inst_23243 = cljs.core.async.put_BANG_.call(null,inst_23242__$1,inst_23146,done);
var state_23274__$1 = (function (){var statearr_23350 = state_23274;
(statearr_23350[(23)] = inst_23242__$1);

return statearr_23350;
})();
if(cljs.core.truth_(inst_23243)){
var statearr_23351_23413 = state_23274__$1;
(statearr_23351_23413[(1)] = (39));

} else {
var statearr_23352_23414 = state_23274__$1;
(statearr_23352_23414[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (8))){
var inst_23158 = (state_23274[(15)]);
var inst_23157 = (state_23274[(17)]);
var inst_23160 = (inst_23158 < inst_23157);
var inst_23161 = inst_23160;
var state_23274__$1 = state_23274;
if(cljs.core.truth_(inst_23161)){
var statearr_23353_23415 = state_23274__$1;
(statearr_23353_23415[(1)] = (10));

} else {
var statearr_23354_23416 = state_23274__$1;
(statearr_23354_23416[(1)] = (11));

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
});})(c__19329__auto___23362,cs,m,dchan,dctr,done))
;
return ((function (switch__19308__auto__,c__19329__auto___23362,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19309__auto__ = null;
var cljs$core$async$mult_$_state_machine__19309__auto____0 = (function (){
var statearr_23358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23358[(0)] = cljs$core$async$mult_$_state_machine__19309__auto__);

(statearr_23358[(1)] = (1));

return statearr_23358;
});
var cljs$core$async$mult_$_state_machine__19309__auto____1 = (function (state_23274){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_23274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e23359){if((e23359 instanceof Object)){
var ex__19312__auto__ = e23359;
var statearr_23360_23417 = state_23274;
(statearr_23360_23417[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23418 = state_23274;
state_23274 = G__23418;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19309__auto__ = function(state_23274){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19309__auto____1.call(this,state_23274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19309__auto____0;
cljs$core$async$mult_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19309__auto____1;
return cljs$core$async$mult_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___23362,cs,m,dchan,dctr,done))
})();
var state__19331__auto__ = (function (){var statearr_23361 = f__19330__auto__.call(null);
(statearr_23361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___23362);

return statearr_23361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___23362,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23419 = [];
var len__17364__auto___23422 = arguments.length;
var i__17365__auto___23423 = (0);
while(true){
if((i__17365__auto___23423 < len__17364__auto___23422)){
args23419.push((arguments[i__17365__auto___23423]));

var G__23424 = (i__17365__auto___23423 + (1));
i__17365__auto___23423 = G__23424;
continue;
} else {
}
break;
}

var G__23421 = args23419.length;
switch (G__23421) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23419.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m);
} else {
var m__16962__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,state_map);
} else {
var m__16962__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,mode);
} else {
var m__16962__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17371__auto__ = [];
var len__17364__auto___23436 = arguments.length;
var i__17365__auto___23437 = (0);
while(true){
if((i__17365__auto___23437 < len__17364__auto___23436)){
args__17371__auto__.push((arguments[i__17365__auto___23437]));

var G__23438 = (i__17365__auto___23437 + (1));
i__17365__auto___23437 = G__23438;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((3) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23430){
var map__23431 = p__23430;
var map__23431__$1 = ((((!((map__23431 == null)))?((((map__23431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23431):map__23431);
var opts = map__23431__$1;
var statearr_23433_23439 = state;
(statearr_23433_23439[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23431,map__23431__$1,opts){
return (function (val){
var statearr_23434_23440 = state;
(statearr_23434_23440[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23431,map__23431__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23435_23441 = state;
(statearr_23435_23441[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23426){
var G__23427 = cljs.core.first.call(null,seq23426);
var seq23426__$1 = cljs.core.next.call(null,seq23426);
var G__23428 = cljs.core.first.call(null,seq23426__$1);
var seq23426__$2 = cljs.core.next.call(null,seq23426__$1);
var G__23429 = cljs.core.first.call(null,seq23426__$2);
var seq23426__$3 = cljs.core.next.call(null,seq23426__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23427,G__23428,G__23429,seq23426__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23605 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23606){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23606 = meta23606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23607,meta23606__$1){
var self__ = this;
var _23607__$1 = this;
return (new cljs.core.async.t_cljs$core$async23605(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23606__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23607){
var self__ = this;
var _23607__$1 = this;
return self__.meta23606;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23606","meta23606",-201881407,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23605";

cljs.core.async.t_cljs$core$async23605.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async23605");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23605 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23605(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23606){
return (new cljs.core.async.t_cljs$core$async23605(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23606));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23605(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19329__auto___23768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___23768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___23768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23705){
var state_val_23706 = (state_23705[(1)]);
if((state_val_23706 === (7))){
var inst_23623 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23707_23769 = state_23705__$1;
(statearr_23707_23769[(2)] = inst_23623);

(statearr_23707_23769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (20))){
var inst_23635 = (state_23705[(7)]);
var state_23705__$1 = state_23705;
var statearr_23708_23770 = state_23705__$1;
(statearr_23708_23770[(2)] = inst_23635);

(statearr_23708_23770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (27))){
var state_23705__$1 = state_23705;
var statearr_23709_23771 = state_23705__$1;
(statearr_23709_23771[(2)] = null);

(statearr_23709_23771[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (1))){
var inst_23611 = (state_23705[(8)]);
var inst_23611__$1 = calc_state.call(null);
var inst_23613 = (inst_23611__$1 == null);
var inst_23614 = cljs.core.not.call(null,inst_23613);
var state_23705__$1 = (function (){var statearr_23710 = state_23705;
(statearr_23710[(8)] = inst_23611__$1);

return statearr_23710;
})();
if(inst_23614){
var statearr_23711_23772 = state_23705__$1;
(statearr_23711_23772[(1)] = (2));

} else {
var statearr_23712_23773 = state_23705__$1;
(statearr_23712_23773[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (24))){
var inst_23679 = (state_23705[(9)]);
var inst_23658 = (state_23705[(10)]);
var inst_23665 = (state_23705[(11)]);
var inst_23679__$1 = inst_23658.call(null,inst_23665);
var state_23705__$1 = (function (){var statearr_23713 = state_23705;
(statearr_23713[(9)] = inst_23679__$1);

return statearr_23713;
})();
if(cljs.core.truth_(inst_23679__$1)){
var statearr_23714_23774 = state_23705__$1;
(statearr_23714_23774[(1)] = (29));

} else {
var statearr_23715_23775 = state_23705__$1;
(statearr_23715_23775[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (4))){
var inst_23626 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23626)){
var statearr_23716_23776 = state_23705__$1;
(statearr_23716_23776[(1)] = (8));

} else {
var statearr_23717_23777 = state_23705__$1;
(statearr_23717_23777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (15))){
var inst_23652 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23652)){
var statearr_23718_23778 = state_23705__$1;
(statearr_23718_23778[(1)] = (19));

} else {
var statearr_23719_23779 = state_23705__$1;
(statearr_23719_23779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (21))){
var inst_23657 = (state_23705[(12)]);
var inst_23657__$1 = (state_23705[(2)]);
var inst_23658 = cljs.core.get.call(null,inst_23657__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23659 = cljs.core.get.call(null,inst_23657__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23660 = cljs.core.get.call(null,inst_23657__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23705__$1 = (function (){var statearr_23720 = state_23705;
(statearr_23720[(10)] = inst_23658);

(statearr_23720[(13)] = inst_23659);

(statearr_23720[(12)] = inst_23657__$1);

return statearr_23720;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23705__$1,(22),inst_23660);
} else {
if((state_val_23706 === (31))){
var inst_23687 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23687)){
var statearr_23721_23780 = state_23705__$1;
(statearr_23721_23780[(1)] = (32));

} else {
var statearr_23722_23781 = state_23705__$1;
(statearr_23722_23781[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (32))){
var inst_23664 = (state_23705[(14)]);
var state_23705__$1 = state_23705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23705__$1,(35),out,inst_23664);
} else {
if((state_val_23706 === (33))){
var inst_23657 = (state_23705[(12)]);
var inst_23635 = inst_23657;
var state_23705__$1 = (function (){var statearr_23723 = state_23705;
(statearr_23723[(7)] = inst_23635);

return statearr_23723;
})();
var statearr_23724_23782 = state_23705__$1;
(statearr_23724_23782[(2)] = null);

(statearr_23724_23782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (13))){
var inst_23635 = (state_23705[(7)]);
var inst_23642 = inst_23635.cljs$lang$protocol_mask$partition0$;
var inst_23643 = (inst_23642 & (64));
var inst_23644 = inst_23635.cljs$core$ISeq$;
var inst_23645 = (inst_23643) || (inst_23644);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23645)){
var statearr_23725_23783 = state_23705__$1;
(statearr_23725_23783[(1)] = (16));

} else {
var statearr_23726_23784 = state_23705__$1;
(statearr_23726_23784[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (22))){
var inst_23665 = (state_23705[(11)]);
var inst_23664 = (state_23705[(14)]);
var inst_23663 = (state_23705[(2)]);
var inst_23664__$1 = cljs.core.nth.call(null,inst_23663,(0),null);
var inst_23665__$1 = cljs.core.nth.call(null,inst_23663,(1),null);
var inst_23666 = (inst_23664__$1 == null);
var inst_23667 = cljs.core._EQ_.call(null,inst_23665__$1,change);
var inst_23668 = (inst_23666) || (inst_23667);
var state_23705__$1 = (function (){var statearr_23727 = state_23705;
(statearr_23727[(11)] = inst_23665__$1);

(statearr_23727[(14)] = inst_23664__$1);

return statearr_23727;
})();
if(cljs.core.truth_(inst_23668)){
var statearr_23728_23785 = state_23705__$1;
(statearr_23728_23785[(1)] = (23));

} else {
var statearr_23729_23786 = state_23705__$1;
(statearr_23729_23786[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (36))){
var inst_23657 = (state_23705[(12)]);
var inst_23635 = inst_23657;
var state_23705__$1 = (function (){var statearr_23730 = state_23705;
(statearr_23730[(7)] = inst_23635);

return statearr_23730;
})();
var statearr_23731_23787 = state_23705__$1;
(statearr_23731_23787[(2)] = null);

(statearr_23731_23787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (29))){
var inst_23679 = (state_23705[(9)]);
var state_23705__$1 = state_23705;
var statearr_23732_23788 = state_23705__$1;
(statearr_23732_23788[(2)] = inst_23679);

(statearr_23732_23788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (6))){
var state_23705__$1 = state_23705;
var statearr_23733_23789 = state_23705__$1;
(statearr_23733_23789[(2)] = false);

(statearr_23733_23789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (28))){
var inst_23675 = (state_23705[(2)]);
var inst_23676 = calc_state.call(null);
var inst_23635 = inst_23676;
var state_23705__$1 = (function (){var statearr_23734 = state_23705;
(statearr_23734[(15)] = inst_23675);

(statearr_23734[(7)] = inst_23635);

return statearr_23734;
})();
var statearr_23735_23790 = state_23705__$1;
(statearr_23735_23790[(2)] = null);

(statearr_23735_23790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (25))){
var inst_23701 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23736_23791 = state_23705__$1;
(statearr_23736_23791[(2)] = inst_23701);

(statearr_23736_23791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (34))){
var inst_23699 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23737_23792 = state_23705__$1;
(statearr_23737_23792[(2)] = inst_23699);

(statearr_23737_23792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (17))){
var state_23705__$1 = state_23705;
var statearr_23738_23793 = state_23705__$1;
(statearr_23738_23793[(2)] = false);

(statearr_23738_23793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (3))){
var state_23705__$1 = state_23705;
var statearr_23739_23794 = state_23705__$1;
(statearr_23739_23794[(2)] = false);

(statearr_23739_23794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (12))){
var inst_23703 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23705__$1,inst_23703);
} else {
if((state_val_23706 === (2))){
var inst_23611 = (state_23705[(8)]);
var inst_23616 = inst_23611.cljs$lang$protocol_mask$partition0$;
var inst_23617 = (inst_23616 & (64));
var inst_23618 = inst_23611.cljs$core$ISeq$;
var inst_23619 = (inst_23617) || (inst_23618);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23619)){
var statearr_23740_23795 = state_23705__$1;
(statearr_23740_23795[(1)] = (5));

} else {
var statearr_23741_23796 = state_23705__$1;
(statearr_23741_23796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (23))){
var inst_23664 = (state_23705[(14)]);
var inst_23670 = (inst_23664 == null);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23670)){
var statearr_23742_23797 = state_23705__$1;
(statearr_23742_23797[(1)] = (26));

} else {
var statearr_23743_23798 = state_23705__$1;
(statearr_23743_23798[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (35))){
var inst_23690 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
if(cljs.core.truth_(inst_23690)){
var statearr_23744_23799 = state_23705__$1;
(statearr_23744_23799[(1)] = (36));

} else {
var statearr_23745_23800 = state_23705__$1;
(statearr_23745_23800[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (19))){
var inst_23635 = (state_23705[(7)]);
var inst_23654 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23635);
var state_23705__$1 = state_23705;
var statearr_23746_23801 = state_23705__$1;
(statearr_23746_23801[(2)] = inst_23654);

(statearr_23746_23801[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (11))){
var inst_23635 = (state_23705[(7)]);
var inst_23639 = (inst_23635 == null);
var inst_23640 = cljs.core.not.call(null,inst_23639);
var state_23705__$1 = state_23705;
if(inst_23640){
var statearr_23747_23802 = state_23705__$1;
(statearr_23747_23802[(1)] = (13));

} else {
var statearr_23748_23803 = state_23705__$1;
(statearr_23748_23803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (9))){
var inst_23611 = (state_23705[(8)]);
var state_23705__$1 = state_23705;
var statearr_23749_23804 = state_23705__$1;
(statearr_23749_23804[(2)] = inst_23611);

(statearr_23749_23804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (5))){
var state_23705__$1 = state_23705;
var statearr_23750_23805 = state_23705__$1;
(statearr_23750_23805[(2)] = true);

(statearr_23750_23805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (14))){
var state_23705__$1 = state_23705;
var statearr_23751_23806 = state_23705__$1;
(statearr_23751_23806[(2)] = false);

(statearr_23751_23806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (26))){
var inst_23665 = (state_23705[(11)]);
var inst_23672 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23665);
var state_23705__$1 = state_23705;
var statearr_23752_23807 = state_23705__$1;
(statearr_23752_23807[(2)] = inst_23672);

(statearr_23752_23807[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (16))){
var state_23705__$1 = state_23705;
var statearr_23753_23808 = state_23705__$1;
(statearr_23753_23808[(2)] = true);

(statearr_23753_23808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (38))){
var inst_23695 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23754_23809 = state_23705__$1;
(statearr_23754_23809[(2)] = inst_23695);

(statearr_23754_23809[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (30))){
var inst_23658 = (state_23705[(10)]);
var inst_23659 = (state_23705[(13)]);
var inst_23665 = (state_23705[(11)]);
var inst_23682 = cljs.core.empty_QMARK_.call(null,inst_23658);
var inst_23683 = inst_23659.call(null,inst_23665);
var inst_23684 = cljs.core.not.call(null,inst_23683);
var inst_23685 = (inst_23682) && (inst_23684);
var state_23705__$1 = state_23705;
var statearr_23755_23810 = state_23705__$1;
(statearr_23755_23810[(2)] = inst_23685);

(statearr_23755_23810[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (10))){
var inst_23611 = (state_23705[(8)]);
var inst_23631 = (state_23705[(2)]);
var inst_23632 = cljs.core.get.call(null,inst_23631,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23633 = cljs.core.get.call(null,inst_23631,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23634 = cljs.core.get.call(null,inst_23631,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23635 = inst_23611;
var state_23705__$1 = (function (){var statearr_23756 = state_23705;
(statearr_23756[(16)] = inst_23633);

(statearr_23756[(17)] = inst_23634);

(statearr_23756[(7)] = inst_23635);

(statearr_23756[(18)] = inst_23632);

return statearr_23756;
})();
var statearr_23757_23811 = state_23705__$1;
(statearr_23757_23811[(2)] = null);

(statearr_23757_23811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (18))){
var inst_23649 = (state_23705[(2)]);
var state_23705__$1 = state_23705;
var statearr_23758_23812 = state_23705__$1;
(statearr_23758_23812[(2)] = inst_23649);

(statearr_23758_23812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (37))){
var state_23705__$1 = state_23705;
var statearr_23759_23813 = state_23705__$1;
(statearr_23759_23813[(2)] = null);

(statearr_23759_23813[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23706 === (8))){
var inst_23611 = (state_23705[(8)]);
var inst_23628 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23611);
var state_23705__$1 = state_23705;
var statearr_23760_23814 = state_23705__$1;
(statearr_23760_23814[(2)] = inst_23628);

(statearr_23760_23814[(1)] = (10));


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
});})(c__19329__auto___23768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19308__auto__,c__19329__auto___23768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19309__auto__ = null;
var cljs$core$async$mix_$_state_machine__19309__auto____0 = (function (){
var statearr_23764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23764[(0)] = cljs$core$async$mix_$_state_machine__19309__auto__);

(statearr_23764[(1)] = (1));

return statearr_23764;
});
var cljs$core$async$mix_$_state_machine__19309__auto____1 = (function (state_23705){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_23705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e23765){if((e23765 instanceof Object)){
var ex__19312__auto__ = e23765;
var statearr_23766_23815 = state_23705;
(statearr_23766_23815[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23816 = state_23705;
state_23705 = G__23816;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19309__auto__ = function(state_23705){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19309__auto____1.call(this,state_23705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19309__auto____0;
cljs$core$async$mix_$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19309__auto____1;
return cljs$core$async$mix_$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___23768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19331__auto__ = (function (){var statearr_23767 = f__19330__auto__.call(null);
(statearr_23767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___23768);

return statearr_23767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___23768,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16962__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23817 = [];
var len__17364__auto___23820 = arguments.length;
var i__17365__auto___23821 = (0);
while(true){
if((i__17365__auto___23821 < len__17364__auto___23820)){
args23817.push((arguments[i__17365__auto___23821]));

var G__23822 = (i__17365__auto___23821 + (1));
i__17365__auto___23821 = G__23822;
continue;
} else {
}
break;
}

var G__23819 = args23817.length;
switch (G__23819) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23817.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23825 = [];
var len__17364__auto___23950 = arguments.length;
var i__17365__auto___23951 = (0);
while(true){
if((i__17365__auto___23951 < len__17364__auto___23950)){
args23825.push((arguments[i__17365__auto___23951]));

var G__23952 = (i__17365__auto___23951 + (1));
i__17365__auto___23951 = G__23952;
continue;
} else {
}
break;
}

var G__23827 = args23825.length;
switch (G__23827) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23825.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16306__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16306__auto__,mults){
return (function (p1__23824_SHARP_){
if(cljs.core.truth_(p1__23824_SHARP_.call(null,topic))){
return p1__23824_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23824_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16306__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23828 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23828 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23829){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23829 = meta23829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23830,meta23829__$1){
var self__ = this;
var _23830__$1 = this;
return (new cljs.core.async.t_cljs$core$async23828(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23829__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23830){
var self__ = this;
var _23830__$1 = this;
return self__.meta23829;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23829","meta23829",984151816,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23828.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23828";

cljs.core.async.t_cljs$core$async23828.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async23828");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23828 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23828(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23829){
return (new cljs.core.async.t_cljs$core$async23828(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23829));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23828(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19329__auto___23954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___23954,mults,ensure_mult,p){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___23954,mults,ensure_mult,p){
return (function (state_23902){
var state_val_23903 = (state_23902[(1)]);
if((state_val_23903 === (7))){
var inst_23898 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
var statearr_23904_23955 = state_23902__$1;
(statearr_23904_23955[(2)] = inst_23898);

(statearr_23904_23955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (20))){
var state_23902__$1 = state_23902;
var statearr_23905_23956 = state_23902__$1;
(statearr_23905_23956[(2)] = null);

(statearr_23905_23956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (1))){
var state_23902__$1 = state_23902;
var statearr_23906_23957 = state_23902__$1;
(statearr_23906_23957[(2)] = null);

(statearr_23906_23957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (24))){
var inst_23881 = (state_23902[(7)]);
var inst_23890 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23881);
var state_23902__$1 = state_23902;
var statearr_23907_23958 = state_23902__$1;
(statearr_23907_23958[(2)] = inst_23890);

(statearr_23907_23958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (4))){
var inst_23833 = (state_23902[(8)]);
var inst_23833__$1 = (state_23902[(2)]);
var inst_23834 = (inst_23833__$1 == null);
var state_23902__$1 = (function (){var statearr_23908 = state_23902;
(statearr_23908[(8)] = inst_23833__$1);

return statearr_23908;
})();
if(cljs.core.truth_(inst_23834)){
var statearr_23909_23959 = state_23902__$1;
(statearr_23909_23959[(1)] = (5));

} else {
var statearr_23910_23960 = state_23902__$1;
(statearr_23910_23960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (15))){
var inst_23875 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
var statearr_23911_23961 = state_23902__$1;
(statearr_23911_23961[(2)] = inst_23875);

(statearr_23911_23961[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (21))){
var inst_23895 = (state_23902[(2)]);
var state_23902__$1 = (function (){var statearr_23912 = state_23902;
(statearr_23912[(9)] = inst_23895);

return statearr_23912;
})();
var statearr_23913_23962 = state_23902__$1;
(statearr_23913_23962[(2)] = null);

(statearr_23913_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (13))){
var inst_23857 = (state_23902[(10)]);
var inst_23859 = cljs.core.chunked_seq_QMARK_.call(null,inst_23857);
var state_23902__$1 = state_23902;
if(inst_23859){
var statearr_23914_23963 = state_23902__$1;
(statearr_23914_23963[(1)] = (16));

} else {
var statearr_23915_23964 = state_23902__$1;
(statearr_23915_23964[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (22))){
var inst_23887 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
if(cljs.core.truth_(inst_23887)){
var statearr_23916_23965 = state_23902__$1;
(statearr_23916_23965[(1)] = (23));

} else {
var statearr_23917_23966 = state_23902__$1;
(statearr_23917_23966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (6))){
var inst_23833 = (state_23902[(8)]);
var inst_23881 = (state_23902[(7)]);
var inst_23883 = (state_23902[(11)]);
var inst_23881__$1 = topic_fn.call(null,inst_23833);
var inst_23882 = cljs.core.deref.call(null,mults);
var inst_23883__$1 = cljs.core.get.call(null,inst_23882,inst_23881__$1);
var state_23902__$1 = (function (){var statearr_23918 = state_23902;
(statearr_23918[(7)] = inst_23881__$1);

(statearr_23918[(11)] = inst_23883__$1);

return statearr_23918;
})();
if(cljs.core.truth_(inst_23883__$1)){
var statearr_23919_23967 = state_23902__$1;
(statearr_23919_23967[(1)] = (19));

} else {
var statearr_23920_23968 = state_23902__$1;
(statearr_23920_23968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (25))){
var inst_23892 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
var statearr_23921_23969 = state_23902__$1;
(statearr_23921_23969[(2)] = inst_23892);

(statearr_23921_23969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (17))){
var inst_23857 = (state_23902[(10)]);
var inst_23866 = cljs.core.first.call(null,inst_23857);
var inst_23867 = cljs.core.async.muxch_STAR_.call(null,inst_23866);
var inst_23868 = cljs.core.async.close_BANG_.call(null,inst_23867);
var inst_23869 = cljs.core.next.call(null,inst_23857);
var inst_23843 = inst_23869;
var inst_23844 = null;
var inst_23845 = (0);
var inst_23846 = (0);
var state_23902__$1 = (function (){var statearr_23922 = state_23902;
(statearr_23922[(12)] = inst_23868);

(statearr_23922[(13)] = inst_23845);

(statearr_23922[(14)] = inst_23843);

(statearr_23922[(15)] = inst_23846);

(statearr_23922[(16)] = inst_23844);

return statearr_23922;
})();
var statearr_23923_23970 = state_23902__$1;
(statearr_23923_23970[(2)] = null);

(statearr_23923_23970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (3))){
var inst_23900 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23902__$1,inst_23900);
} else {
if((state_val_23903 === (12))){
var inst_23877 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
var statearr_23924_23971 = state_23902__$1;
(statearr_23924_23971[(2)] = inst_23877);

(statearr_23924_23971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (2))){
var state_23902__$1 = state_23902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23902__$1,(4),ch);
} else {
if((state_val_23903 === (23))){
var state_23902__$1 = state_23902;
var statearr_23925_23972 = state_23902__$1;
(statearr_23925_23972[(2)] = null);

(statearr_23925_23972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (19))){
var inst_23833 = (state_23902[(8)]);
var inst_23883 = (state_23902[(11)]);
var inst_23885 = cljs.core.async.muxch_STAR_.call(null,inst_23883);
var state_23902__$1 = state_23902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23902__$1,(22),inst_23885,inst_23833);
} else {
if((state_val_23903 === (11))){
var inst_23843 = (state_23902[(14)]);
var inst_23857 = (state_23902[(10)]);
var inst_23857__$1 = cljs.core.seq.call(null,inst_23843);
var state_23902__$1 = (function (){var statearr_23926 = state_23902;
(statearr_23926[(10)] = inst_23857__$1);

return statearr_23926;
})();
if(inst_23857__$1){
var statearr_23927_23973 = state_23902__$1;
(statearr_23927_23973[(1)] = (13));

} else {
var statearr_23928_23974 = state_23902__$1;
(statearr_23928_23974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (9))){
var inst_23879 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
var statearr_23929_23975 = state_23902__$1;
(statearr_23929_23975[(2)] = inst_23879);

(statearr_23929_23975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (5))){
var inst_23840 = cljs.core.deref.call(null,mults);
var inst_23841 = cljs.core.vals.call(null,inst_23840);
var inst_23842 = cljs.core.seq.call(null,inst_23841);
var inst_23843 = inst_23842;
var inst_23844 = null;
var inst_23845 = (0);
var inst_23846 = (0);
var state_23902__$1 = (function (){var statearr_23930 = state_23902;
(statearr_23930[(13)] = inst_23845);

(statearr_23930[(14)] = inst_23843);

(statearr_23930[(15)] = inst_23846);

(statearr_23930[(16)] = inst_23844);

return statearr_23930;
})();
var statearr_23931_23976 = state_23902__$1;
(statearr_23931_23976[(2)] = null);

(statearr_23931_23976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (14))){
var state_23902__$1 = state_23902;
var statearr_23935_23977 = state_23902__$1;
(statearr_23935_23977[(2)] = null);

(statearr_23935_23977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (16))){
var inst_23857 = (state_23902[(10)]);
var inst_23861 = cljs.core.chunk_first.call(null,inst_23857);
var inst_23862 = cljs.core.chunk_rest.call(null,inst_23857);
var inst_23863 = cljs.core.count.call(null,inst_23861);
var inst_23843 = inst_23862;
var inst_23844 = inst_23861;
var inst_23845 = inst_23863;
var inst_23846 = (0);
var state_23902__$1 = (function (){var statearr_23936 = state_23902;
(statearr_23936[(13)] = inst_23845);

(statearr_23936[(14)] = inst_23843);

(statearr_23936[(15)] = inst_23846);

(statearr_23936[(16)] = inst_23844);

return statearr_23936;
})();
var statearr_23937_23978 = state_23902__$1;
(statearr_23937_23978[(2)] = null);

(statearr_23937_23978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (10))){
var inst_23845 = (state_23902[(13)]);
var inst_23843 = (state_23902[(14)]);
var inst_23846 = (state_23902[(15)]);
var inst_23844 = (state_23902[(16)]);
var inst_23851 = cljs.core._nth.call(null,inst_23844,inst_23846);
var inst_23852 = cljs.core.async.muxch_STAR_.call(null,inst_23851);
var inst_23853 = cljs.core.async.close_BANG_.call(null,inst_23852);
var inst_23854 = (inst_23846 + (1));
var tmp23932 = inst_23845;
var tmp23933 = inst_23843;
var tmp23934 = inst_23844;
var inst_23843__$1 = tmp23933;
var inst_23844__$1 = tmp23934;
var inst_23845__$1 = tmp23932;
var inst_23846__$1 = inst_23854;
var state_23902__$1 = (function (){var statearr_23938 = state_23902;
(statearr_23938[(13)] = inst_23845__$1);

(statearr_23938[(14)] = inst_23843__$1);

(statearr_23938[(15)] = inst_23846__$1);

(statearr_23938[(16)] = inst_23844__$1);

(statearr_23938[(17)] = inst_23853);

return statearr_23938;
})();
var statearr_23939_23979 = state_23902__$1;
(statearr_23939_23979[(2)] = null);

(statearr_23939_23979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (18))){
var inst_23872 = (state_23902[(2)]);
var state_23902__$1 = state_23902;
var statearr_23940_23980 = state_23902__$1;
(statearr_23940_23980[(2)] = inst_23872);

(statearr_23940_23980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23903 === (8))){
var inst_23845 = (state_23902[(13)]);
var inst_23846 = (state_23902[(15)]);
var inst_23848 = (inst_23846 < inst_23845);
var inst_23849 = inst_23848;
var state_23902__$1 = state_23902;
if(cljs.core.truth_(inst_23849)){
var statearr_23941_23981 = state_23902__$1;
(statearr_23941_23981[(1)] = (10));

} else {
var statearr_23942_23982 = state_23902__$1;
(statearr_23942_23982[(1)] = (11));

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
});})(c__19329__auto___23954,mults,ensure_mult,p))
;
return ((function (switch__19308__auto__,c__19329__auto___23954,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_23946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23946[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_23946[(1)] = (1));

return statearr_23946;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_23902){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_23902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e23947){if((e23947 instanceof Object)){
var ex__19312__auto__ = e23947;
var statearr_23948_23983 = state_23902;
(statearr_23948_23983[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23984 = state_23902;
state_23902 = G__23984;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_23902){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_23902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___23954,mults,ensure_mult,p))
})();
var state__19331__auto__ = (function (){var statearr_23949 = f__19330__auto__.call(null);
(statearr_23949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___23954);

return statearr_23949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___23954,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23985 = [];
var len__17364__auto___23988 = arguments.length;
var i__17365__auto___23989 = (0);
while(true){
if((i__17365__auto___23989 < len__17364__auto___23988)){
args23985.push((arguments[i__17365__auto___23989]));

var G__23990 = (i__17365__auto___23989 + (1));
i__17365__auto___23989 = G__23990;
continue;
} else {
}
break;
}

var G__23987 = args23985.length;
switch (G__23987) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23985.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23992 = [];
var len__17364__auto___23995 = arguments.length;
var i__17365__auto___23996 = (0);
while(true){
if((i__17365__auto___23996 < len__17364__auto___23995)){
args23992.push((arguments[i__17365__auto___23996]));

var G__23997 = (i__17365__auto___23996 + (1));
i__17365__auto___23996 = G__23997;
continue;
} else {
}
break;
}

var G__23994 = args23992.length;
switch (G__23994) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23992.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23999 = [];
var len__17364__auto___24070 = arguments.length;
var i__17365__auto___24071 = (0);
while(true){
if((i__17365__auto___24071 < len__17364__auto___24070)){
args23999.push((arguments[i__17365__auto___24071]));

var G__24072 = (i__17365__auto___24071 + (1));
i__17365__auto___24071 = G__24072;
continue;
} else {
}
break;
}

var G__24001 = args23999.length;
switch (G__24001) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23999.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19329__auto___24074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___24074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___24074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24040){
var state_val_24041 = (state_24040[(1)]);
if((state_val_24041 === (7))){
var state_24040__$1 = state_24040;
var statearr_24042_24075 = state_24040__$1;
(statearr_24042_24075[(2)] = null);

(statearr_24042_24075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (1))){
var state_24040__$1 = state_24040;
var statearr_24043_24076 = state_24040__$1;
(statearr_24043_24076[(2)] = null);

(statearr_24043_24076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (4))){
var inst_24004 = (state_24040[(7)]);
var inst_24006 = (inst_24004 < cnt);
var state_24040__$1 = state_24040;
if(cljs.core.truth_(inst_24006)){
var statearr_24044_24077 = state_24040__$1;
(statearr_24044_24077[(1)] = (6));

} else {
var statearr_24045_24078 = state_24040__$1;
(statearr_24045_24078[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (15))){
var inst_24036 = (state_24040[(2)]);
var state_24040__$1 = state_24040;
var statearr_24046_24079 = state_24040__$1;
(statearr_24046_24079[(2)] = inst_24036);

(statearr_24046_24079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (13))){
var inst_24029 = cljs.core.async.close_BANG_.call(null,out);
var state_24040__$1 = state_24040;
var statearr_24047_24080 = state_24040__$1;
(statearr_24047_24080[(2)] = inst_24029);

(statearr_24047_24080[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (6))){
var state_24040__$1 = state_24040;
var statearr_24048_24081 = state_24040__$1;
(statearr_24048_24081[(2)] = null);

(statearr_24048_24081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (3))){
var inst_24038 = (state_24040[(2)]);
var state_24040__$1 = state_24040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24040__$1,inst_24038);
} else {
if((state_val_24041 === (12))){
var inst_24026 = (state_24040[(8)]);
var inst_24026__$1 = (state_24040[(2)]);
var inst_24027 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24026__$1);
var state_24040__$1 = (function (){var statearr_24049 = state_24040;
(statearr_24049[(8)] = inst_24026__$1);

return statearr_24049;
})();
if(cljs.core.truth_(inst_24027)){
var statearr_24050_24082 = state_24040__$1;
(statearr_24050_24082[(1)] = (13));

} else {
var statearr_24051_24083 = state_24040__$1;
(statearr_24051_24083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (2))){
var inst_24003 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24004 = (0);
var state_24040__$1 = (function (){var statearr_24052 = state_24040;
(statearr_24052[(9)] = inst_24003);

(statearr_24052[(7)] = inst_24004);

return statearr_24052;
})();
var statearr_24053_24084 = state_24040__$1;
(statearr_24053_24084[(2)] = null);

(statearr_24053_24084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (11))){
var inst_24004 = (state_24040[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24040,(10),Object,null,(9));
var inst_24013 = chs__$1.call(null,inst_24004);
var inst_24014 = done.call(null,inst_24004);
var inst_24015 = cljs.core.async.take_BANG_.call(null,inst_24013,inst_24014);
var state_24040__$1 = state_24040;
var statearr_24054_24085 = state_24040__$1;
(statearr_24054_24085[(2)] = inst_24015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (9))){
var inst_24004 = (state_24040[(7)]);
var inst_24017 = (state_24040[(2)]);
var inst_24018 = (inst_24004 + (1));
var inst_24004__$1 = inst_24018;
var state_24040__$1 = (function (){var statearr_24055 = state_24040;
(statearr_24055[(10)] = inst_24017);

(statearr_24055[(7)] = inst_24004__$1);

return statearr_24055;
})();
var statearr_24056_24086 = state_24040__$1;
(statearr_24056_24086[(2)] = null);

(statearr_24056_24086[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (5))){
var inst_24024 = (state_24040[(2)]);
var state_24040__$1 = (function (){var statearr_24057 = state_24040;
(statearr_24057[(11)] = inst_24024);

return statearr_24057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24040__$1,(12),dchan);
} else {
if((state_val_24041 === (14))){
var inst_24026 = (state_24040[(8)]);
var inst_24031 = cljs.core.apply.call(null,f,inst_24026);
var state_24040__$1 = state_24040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24040__$1,(16),out,inst_24031);
} else {
if((state_val_24041 === (16))){
var inst_24033 = (state_24040[(2)]);
var state_24040__$1 = (function (){var statearr_24058 = state_24040;
(statearr_24058[(12)] = inst_24033);

return statearr_24058;
})();
var statearr_24059_24087 = state_24040__$1;
(statearr_24059_24087[(2)] = null);

(statearr_24059_24087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (10))){
var inst_24008 = (state_24040[(2)]);
var inst_24009 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24040__$1 = (function (){var statearr_24060 = state_24040;
(statearr_24060[(13)] = inst_24008);

return statearr_24060;
})();
var statearr_24061_24088 = state_24040__$1;
(statearr_24061_24088[(2)] = inst_24009);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24040__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24041 === (8))){
var inst_24022 = (state_24040[(2)]);
var state_24040__$1 = state_24040;
var statearr_24062_24089 = state_24040__$1;
(statearr_24062_24089[(2)] = inst_24022);

(statearr_24062_24089[(1)] = (5));


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
});})(c__19329__auto___24074,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19308__auto__,c__19329__auto___24074,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_24066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24066[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_24066[(1)] = (1));

return statearr_24066;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_24040){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24067){if((e24067 instanceof Object)){
var ex__19312__auto__ = e24067;
var statearr_24068_24090 = state_24040;
(statearr_24068_24090[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24091 = state_24040;
state_24040 = G__24091;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_24040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_24040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___24074,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19331__auto__ = (function (){var statearr_24069 = f__19330__auto__.call(null);
(statearr_24069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___24074);

return statearr_24069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___24074,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24093 = [];
var len__17364__auto___24149 = arguments.length;
var i__17365__auto___24150 = (0);
while(true){
if((i__17365__auto___24150 < len__17364__auto___24149)){
args24093.push((arguments[i__17365__auto___24150]));

var G__24151 = (i__17365__auto___24150 + (1));
i__17365__auto___24150 = G__24151;
continue;
} else {
}
break;
}

var G__24095 = args24093.length;
switch (G__24095) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24093.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19329__auto___24153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___24153,out){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___24153,out){
return (function (state_24125){
var state_val_24126 = (state_24125[(1)]);
if((state_val_24126 === (7))){
var inst_24105 = (state_24125[(7)]);
var inst_24104 = (state_24125[(8)]);
var inst_24104__$1 = (state_24125[(2)]);
var inst_24105__$1 = cljs.core.nth.call(null,inst_24104__$1,(0),null);
var inst_24106 = cljs.core.nth.call(null,inst_24104__$1,(1),null);
var inst_24107 = (inst_24105__$1 == null);
var state_24125__$1 = (function (){var statearr_24127 = state_24125;
(statearr_24127[(7)] = inst_24105__$1);

(statearr_24127[(9)] = inst_24106);

(statearr_24127[(8)] = inst_24104__$1);

return statearr_24127;
})();
if(cljs.core.truth_(inst_24107)){
var statearr_24128_24154 = state_24125__$1;
(statearr_24128_24154[(1)] = (8));

} else {
var statearr_24129_24155 = state_24125__$1;
(statearr_24129_24155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (1))){
var inst_24096 = cljs.core.vec.call(null,chs);
var inst_24097 = inst_24096;
var state_24125__$1 = (function (){var statearr_24130 = state_24125;
(statearr_24130[(10)] = inst_24097);

return statearr_24130;
})();
var statearr_24131_24156 = state_24125__$1;
(statearr_24131_24156[(2)] = null);

(statearr_24131_24156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (4))){
var inst_24097 = (state_24125[(10)]);
var state_24125__$1 = state_24125;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24125__$1,(7),inst_24097);
} else {
if((state_val_24126 === (6))){
var inst_24121 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24132_24157 = state_24125__$1;
(statearr_24132_24157[(2)] = inst_24121);

(statearr_24132_24157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (3))){
var inst_24123 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24125__$1,inst_24123);
} else {
if((state_val_24126 === (2))){
var inst_24097 = (state_24125[(10)]);
var inst_24099 = cljs.core.count.call(null,inst_24097);
var inst_24100 = (inst_24099 > (0));
var state_24125__$1 = state_24125;
if(cljs.core.truth_(inst_24100)){
var statearr_24134_24158 = state_24125__$1;
(statearr_24134_24158[(1)] = (4));

} else {
var statearr_24135_24159 = state_24125__$1;
(statearr_24135_24159[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (11))){
var inst_24097 = (state_24125[(10)]);
var inst_24114 = (state_24125[(2)]);
var tmp24133 = inst_24097;
var inst_24097__$1 = tmp24133;
var state_24125__$1 = (function (){var statearr_24136 = state_24125;
(statearr_24136[(11)] = inst_24114);

(statearr_24136[(10)] = inst_24097__$1);

return statearr_24136;
})();
var statearr_24137_24160 = state_24125__$1;
(statearr_24137_24160[(2)] = null);

(statearr_24137_24160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (9))){
var inst_24105 = (state_24125[(7)]);
var state_24125__$1 = state_24125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24125__$1,(11),out,inst_24105);
} else {
if((state_val_24126 === (5))){
var inst_24119 = cljs.core.async.close_BANG_.call(null,out);
var state_24125__$1 = state_24125;
var statearr_24138_24161 = state_24125__$1;
(statearr_24138_24161[(2)] = inst_24119);

(statearr_24138_24161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (10))){
var inst_24117 = (state_24125[(2)]);
var state_24125__$1 = state_24125;
var statearr_24139_24162 = state_24125__$1;
(statearr_24139_24162[(2)] = inst_24117);

(statearr_24139_24162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24126 === (8))){
var inst_24105 = (state_24125[(7)]);
var inst_24097 = (state_24125[(10)]);
var inst_24106 = (state_24125[(9)]);
var inst_24104 = (state_24125[(8)]);
var inst_24109 = (function (){var cs = inst_24097;
var vec__24102 = inst_24104;
var v = inst_24105;
var c = inst_24106;
return ((function (cs,vec__24102,v,c,inst_24105,inst_24097,inst_24106,inst_24104,state_val_24126,c__19329__auto___24153,out){
return (function (p1__24092_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24092_SHARP_);
});
;})(cs,vec__24102,v,c,inst_24105,inst_24097,inst_24106,inst_24104,state_val_24126,c__19329__auto___24153,out))
})();
var inst_24110 = cljs.core.filterv.call(null,inst_24109,inst_24097);
var inst_24097__$1 = inst_24110;
var state_24125__$1 = (function (){var statearr_24140 = state_24125;
(statearr_24140[(10)] = inst_24097__$1);

return statearr_24140;
})();
var statearr_24141_24163 = state_24125__$1;
(statearr_24141_24163[(2)] = null);

(statearr_24141_24163[(1)] = (2));


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
});})(c__19329__auto___24153,out))
;
return ((function (switch__19308__auto__,c__19329__auto___24153,out){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_24145 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24145[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_24145[(1)] = (1));

return statearr_24145;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_24125){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24146){if((e24146 instanceof Object)){
var ex__19312__auto__ = e24146;
var statearr_24147_24164 = state_24125;
(statearr_24147_24164[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24165 = state_24125;
state_24125 = G__24165;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_24125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_24125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___24153,out))
})();
var state__19331__auto__ = (function (){var statearr_24148 = f__19330__auto__.call(null);
(statearr_24148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___24153);

return statearr_24148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___24153,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24166 = [];
var len__17364__auto___24215 = arguments.length;
var i__17365__auto___24216 = (0);
while(true){
if((i__17365__auto___24216 < len__17364__auto___24215)){
args24166.push((arguments[i__17365__auto___24216]));

var G__24217 = (i__17365__auto___24216 + (1));
i__17365__auto___24216 = G__24217;
continue;
} else {
}
break;
}

var G__24168 = args24166.length;
switch (G__24168) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24166.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19329__auto___24219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___24219,out){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___24219,out){
return (function (state_24192){
var state_val_24193 = (state_24192[(1)]);
if((state_val_24193 === (7))){
var inst_24174 = (state_24192[(7)]);
var inst_24174__$1 = (state_24192[(2)]);
var inst_24175 = (inst_24174__$1 == null);
var inst_24176 = cljs.core.not.call(null,inst_24175);
var state_24192__$1 = (function (){var statearr_24194 = state_24192;
(statearr_24194[(7)] = inst_24174__$1);

return statearr_24194;
})();
if(inst_24176){
var statearr_24195_24220 = state_24192__$1;
(statearr_24195_24220[(1)] = (8));

} else {
var statearr_24196_24221 = state_24192__$1;
(statearr_24196_24221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (1))){
var inst_24169 = (0);
var state_24192__$1 = (function (){var statearr_24197 = state_24192;
(statearr_24197[(8)] = inst_24169);

return statearr_24197;
})();
var statearr_24198_24222 = state_24192__$1;
(statearr_24198_24222[(2)] = null);

(statearr_24198_24222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (4))){
var state_24192__$1 = state_24192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24192__$1,(7),ch);
} else {
if((state_val_24193 === (6))){
var inst_24187 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24199_24223 = state_24192__$1;
(statearr_24199_24223[(2)] = inst_24187);

(statearr_24199_24223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (3))){
var inst_24189 = (state_24192[(2)]);
var inst_24190 = cljs.core.async.close_BANG_.call(null,out);
var state_24192__$1 = (function (){var statearr_24200 = state_24192;
(statearr_24200[(9)] = inst_24189);

return statearr_24200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24192__$1,inst_24190);
} else {
if((state_val_24193 === (2))){
var inst_24169 = (state_24192[(8)]);
var inst_24171 = (inst_24169 < n);
var state_24192__$1 = state_24192;
if(cljs.core.truth_(inst_24171)){
var statearr_24201_24224 = state_24192__$1;
(statearr_24201_24224[(1)] = (4));

} else {
var statearr_24202_24225 = state_24192__$1;
(statearr_24202_24225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (11))){
var inst_24169 = (state_24192[(8)]);
var inst_24179 = (state_24192[(2)]);
var inst_24180 = (inst_24169 + (1));
var inst_24169__$1 = inst_24180;
var state_24192__$1 = (function (){var statearr_24203 = state_24192;
(statearr_24203[(10)] = inst_24179);

(statearr_24203[(8)] = inst_24169__$1);

return statearr_24203;
})();
var statearr_24204_24226 = state_24192__$1;
(statearr_24204_24226[(2)] = null);

(statearr_24204_24226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (9))){
var state_24192__$1 = state_24192;
var statearr_24205_24227 = state_24192__$1;
(statearr_24205_24227[(2)] = null);

(statearr_24205_24227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (5))){
var state_24192__$1 = state_24192;
var statearr_24206_24228 = state_24192__$1;
(statearr_24206_24228[(2)] = null);

(statearr_24206_24228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (10))){
var inst_24184 = (state_24192[(2)]);
var state_24192__$1 = state_24192;
var statearr_24207_24229 = state_24192__$1;
(statearr_24207_24229[(2)] = inst_24184);

(statearr_24207_24229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24193 === (8))){
var inst_24174 = (state_24192[(7)]);
var state_24192__$1 = state_24192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24192__$1,(11),out,inst_24174);
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
});})(c__19329__auto___24219,out))
;
return ((function (switch__19308__auto__,c__19329__auto___24219,out){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24211[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_24192){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object)){
var ex__19312__auto__ = e24212;
var statearr_24213_24230 = state_24192;
(statearr_24213_24230[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24231 = state_24192;
state_24192 = G__24231;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_24192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_24192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___24219,out))
})();
var state__19331__auto__ = (function (){var statearr_24214 = f__19330__auto__.call(null);
(statearr_24214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___24219);

return statearr_24214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___24219,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24239 = (function (map_LT_,f,ch,meta24240){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24240 = meta24240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24241,meta24240__$1){
var self__ = this;
var _24241__$1 = this;
return (new cljs.core.async.t_cljs$core$async24239(self__.map_LT_,self__.f,self__.ch,meta24240__$1));
});

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24241){
var self__ = this;
var _24241__$1 = this;
return self__.meta24240;
});

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24242 = (function (map_LT_,f,ch,meta24240,_,fn1,meta24243){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24240 = meta24240;
this._ = _;
this.fn1 = fn1;
this.meta24243 = meta24243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24244,meta24243__$1){
var self__ = this;
var _24244__$1 = this;
return (new cljs.core.async.t_cljs$core$async24242(self__.map_LT_,self__.f,self__.ch,self__.meta24240,self__._,self__.fn1,meta24243__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24244){
var self__ = this;
var _24244__$1 = this;
return self__.meta24243;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24242.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24232_SHARP_){
return f1.call(null,(((p1__24232_SHARP_ == null))?null:self__.f.call(null,p1__24232_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24242.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24240","meta24240",-649924543,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24239","cljs.core.async/t_cljs$core$async24239",-205371129,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24243","meta24243",-434413216,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24242";

cljs.core.async.t_cljs$core$async24242.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async24242");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24242 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24242(map_LT___$1,f__$1,ch__$1,meta24240__$1,___$2,fn1__$1,meta24243){
return (new cljs.core.async.t_cljs$core$async24242(map_LT___$1,f__$1,ch__$1,meta24240__$1,___$2,fn1__$1,meta24243));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24242(self__.map_LT_,self__.f,self__.ch,self__.meta24240,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16294__auto__ = ret;
if(cljs.core.truth_(and__16294__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16294__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24240","meta24240",-649924543,null)], null);
});

cljs.core.async.t_cljs$core$async24239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24239";

cljs.core.async.t_cljs$core$async24239.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async24239");
});

cljs.core.async.__GT_t_cljs$core$async24239 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24239(map_LT___$1,f__$1,ch__$1,meta24240){
return (new cljs.core.async.t_cljs$core$async24239(map_LT___$1,f__$1,ch__$1,meta24240));
});

}

return (new cljs.core.async.t_cljs$core$async24239(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24248 = (function (map_GT_,f,ch,meta24249){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24249 = meta24249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24250,meta24249__$1){
var self__ = this;
var _24250__$1 = this;
return (new cljs.core.async.t_cljs$core$async24248(self__.map_GT_,self__.f,self__.ch,meta24249__$1));
});

cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24250){
var self__ = this;
var _24250__$1 = this;
return self__.meta24249;
});

cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24248.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24249","meta24249",-1592001283,null)], null);
});

cljs.core.async.t_cljs$core$async24248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24248";

cljs.core.async.t_cljs$core$async24248.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async24248");
});

cljs.core.async.__GT_t_cljs$core$async24248 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24248(map_GT___$1,f__$1,ch__$1,meta24249){
return (new cljs.core.async.t_cljs$core$async24248(map_GT___$1,f__$1,ch__$1,meta24249));
});

}

return (new cljs.core.async.t_cljs$core$async24248(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24254 = (function (filter_GT_,p,ch,meta24255){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24255 = meta24255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24256,meta24255__$1){
var self__ = this;
var _24256__$1 = this;
return (new cljs.core.async.t_cljs$core$async24254(self__.filter_GT_,self__.p,self__.ch,meta24255__$1));
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24256){
var self__ = this;
var _24256__$1 = this;
return self__.meta24255;
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24255","meta24255",-109078287,null)], null);
});

cljs.core.async.t_cljs$core$async24254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24254";

cljs.core.async.t_cljs$core$async24254.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async24254");
});

cljs.core.async.__GT_t_cljs$core$async24254 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24254(filter_GT___$1,p__$1,ch__$1,meta24255){
return (new cljs.core.async.t_cljs$core$async24254(filter_GT___$1,p__$1,ch__$1,meta24255));
});

}

return (new cljs.core.async.t_cljs$core$async24254(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24257 = [];
var len__17364__auto___24301 = arguments.length;
var i__17365__auto___24302 = (0);
while(true){
if((i__17365__auto___24302 < len__17364__auto___24301)){
args24257.push((arguments[i__17365__auto___24302]));

var G__24303 = (i__17365__auto___24302 + (1));
i__17365__auto___24302 = G__24303;
continue;
} else {
}
break;
}

var G__24259 = args24257.length;
switch (G__24259) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24257.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19329__auto___24305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___24305,out){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___24305,out){
return (function (state_24280){
var state_val_24281 = (state_24280[(1)]);
if((state_val_24281 === (7))){
var inst_24276 = (state_24280[(2)]);
var state_24280__$1 = state_24280;
var statearr_24282_24306 = state_24280__$1;
(statearr_24282_24306[(2)] = inst_24276);

(statearr_24282_24306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (1))){
var state_24280__$1 = state_24280;
var statearr_24283_24307 = state_24280__$1;
(statearr_24283_24307[(2)] = null);

(statearr_24283_24307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (4))){
var inst_24262 = (state_24280[(7)]);
var inst_24262__$1 = (state_24280[(2)]);
var inst_24263 = (inst_24262__$1 == null);
var state_24280__$1 = (function (){var statearr_24284 = state_24280;
(statearr_24284[(7)] = inst_24262__$1);

return statearr_24284;
})();
if(cljs.core.truth_(inst_24263)){
var statearr_24285_24308 = state_24280__$1;
(statearr_24285_24308[(1)] = (5));

} else {
var statearr_24286_24309 = state_24280__$1;
(statearr_24286_24309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (6))){
var inst_24262 = (state_24280[(7)]);
var inst_24267 = p.call(null,inst_24262);
var state_24280__$1 = state_24280;
if(cljs.core.truth_(inst_24267)){
var statearr_24287_24310 = state_24280__$1;
(statearr_24287_24310[(1)] = (8));

} else {
var statearr_24288_24311 = state_24280__$1;
(statearr_24288_24311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (3))){
var inst_24278 = (state_24280[(2)]);
var state_24280__$1 = state_24280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24280__$1,inst_24278);
} else {
if((state_val_24281 === (2))){
var state_24280__$1 = state_24280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24280__$1,(4),ch);
} else {
if((state_val_24281 === (11))){
var inst_24270 = (state_24280[(2)]);
var state_24280__$1 = state_24280;
var statearr_24289_24312 = state_24280__$1;
(statearr_24289_24312[(2)] = inst_24270);

(statearr_24289_24312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (9))){
var state_24280__$1 = state_24280;
var statearr_24290_24313 = state_24280__$1;
(statearr_24290_24313[(2)] = null);

(statearr_24290_24313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (5))){
var inst_24265 = cljs.core.async.close_BANG_.call(null,out);
var state_24280__$1 = state_24280;
var statearr_24291_24314 = state_24280__$1;
(statearr_24291_24314[(2)] = inst_24265);

(statearr_24291_24314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (10))){
var inst_24273 = (state_24280[(2)]);
var state_24280__$1 = (function (){var statearr_24292 = state_24280;
(statearr_24292[(8)] = inst_24273);

return statearr_24292;
})();
var statearr_24293_24315 = state_24280__$1;
(statearr_24293_24315[(2)] = null);

(statearr_24293_24315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24281 === (8))){
var inst_24262 = (state_24280[(7)]);
var state_24280__$1 = state_24280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24280__$1,(11),out,inst_24262);
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
});})(c__19329__auto___24305,out))
;
return ((function (switch__19308__auto__,c__19329__auto___24305,out){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_24297 = [null,null,null,null,null,null,null,null,null];
(statearr_24297[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_24297[(1)] = (1));

return statearr_24297;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_24280){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24298){if((e24298 instanceof Object)){
var ex__19312__auto__ = e24298;
var statearr_24299_24316 = state_24280;
(statearr_24299_24316[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24317 = state_24280;
state_24280 = G__24317;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_24280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_24280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___24305,out))
})();
var state__19331__auto__ = (function (){var statearr_24300 = f__19330__auto__.call(null);
(statearr_24300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___24305);

return statearr_24300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___24305,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24318 = [];
var len__17364__auto___24321 = arguments.length;
var i__17365__auto___24322 = (0);
while(true){
if((i__17365__auto___24322 < len__17364__auto___24321)){
args24318.push((arguments[i__17365__auto___24322]));

var G__24323 = (i__17365__auto___24322 + (1));
i__17365__auto___24322 = G__24323;
continue;
} else {
}
break;
}

var G__24320 = args24318.length;
switch (G__24320) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24318.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19329__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto__){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto__){
return (function (state_24490){
var state_val_24491 = (state_24490[(1)]);
if((state_val_24491 === (7))){
var inst_24486 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24492_24533 = state_24490__$1;
(statearr_24492_24533[(2)] = inst_24486);

(statearr_24492_24533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (20))){
var inst_24456 = (state_24490[(7)]);
var inst_24467 = (state_24490[(2)]);
var inst_24468 = cljs.core.next.call(null,inst_24456);
var inst_24442 = inst_24468;
var inst_24443 = null;
var inst_24444 = (0);
var inst_24445 = (0);
var state_24490__$1 = (function (){var statearr_24493 = state_24490;
(statearr_24493[(8)] = inst_24445);

(statearr_24493[(9)] = inst_24443);

(statearr_24493[(10)] = inst_24444);

(statearr_24493[(11)] = inst_24442);

(statearr_24493[(12)] = inst_24467);

return statearr_24493;
})();
var statearr_24494_24534 = state_24490__$1;
(statearr_24494_24534[(2)] = null);

(statearr_24494_24534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (1))){
var state_24490__$1 = state_24490;
var statearr_24495_24535 = state_24490__$1;
(statearr_24495_24535[(2)] = null);

(statearr_24495_24535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (4))){
var inst_24431 = (state_24490[(13)]);
var inst_24431__$1 = (state_24490[(2)]);
var inst_24432 = (inst_24431__$1 == null);
var state_24490__$1 = (function (){var statearr_24496 = state_24490;
(statearr_24496[(13)] = inst_24431__$1);

return statearr_24496;
})();
if(cljs.core.truth_(inst_24432)){
var statearr_24497_24536 = state_24490__$1;
(statearr_24497_24536[(1)] = (5));

} else {
var statearr_24498_24537 = state_24490__$1;
(statearr_24498_24537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (15))){
var state_24490__$1 = state_24490;
var statearr_24502_24538 = state_24490__$1;
(statearr_24502_24538[(2)] = null);

(statearr_24502_24538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (21))){
var state_24490__$1 = state_24490;
var statearr_24503_24539 = state_24490__$1;
(statearr_24503_24539[(2)] = null);

(statearr_24503_24539[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (13))){
var inst_24445 = (state_24490[(8)]);
var inst_24443 = (state_24490[(9)]);
var inst_24444 = (state_24490[(10)]);
var inst_24442 = (state_24490[(11)]);
var inst_24452 = (state_24490[(2)]);
var inst_24453 = (inst_24445 + (1));
var tmp24499 = inst_24443;
var tmp24500 = inst_24444;
var tmp24501 = inst_24442;
var inst_24442__$1 = tmp24501;
var inst_24443__$1 = tmp24499;
var inst_24444__$1 = tmp24500;
var inst_24445__$1 = inst_24453;
var state_24490__$1 = (function (){var statearr_24504 = state_24490;
(statearr_24504[(8)] = inst_24445__$1);

(statearr_24504[(9)] = inst_24443__$1);

(statearr_24504[(10)] = inst_24444__$1);

(statearr_24504[(11)] = inst_24442__$1);

(statearr_24504[(14)] = inst_24452);

return statearr_24504;
})();
var statearr_24505_24540 = state_24490__$1;
(statearr_24505_24540[(2)] = null);

(statearr_24505_24540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (22))){
var state_24490__$1 = state_24490;
var statearr_24506_24541 = state_24490__$1;
(statearr_24506_24541[(2)] = null);

(statearr_24506_24541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (6))){
var inst_24431 = (state_24490[(13)]);
var inst_24440 = f.call(null,inst_24431);
var inst_24441 = cljs.core.seq.call(null,inst_24440);
var inst_24442 = inst_24441;
var inst_24443 = null;
var inst_24444 = (0);
var inst_24445 = (0);
var state_24490__$1 = (function (){var statearr_24507 = state_24490;
(statearr_24507[(8)] = inst_24445);

(statearr_24507[(9)] = inst_24443);

(statearr_24507[(10)] = inst_24444);

(statearr_24507[(11)] = inst_24442);

return statearr_24507;
})();
var statearr_24508_24542 = state_24490__$1;
(statearr_24508_24542[(2)] = null);

(statearr_24508_24542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (17))){
var inst_24456 = (state_24490[(7)]);
var inst_24460 = cljs.core.chunk_first.call(null,inst_24456);
var inst_24461 = cljs.core.chunk_rest.call(null,inst_24456);
var inst_24462 = cljs.core.count.call(null,inst_24460);
var inst_24442 = inst_24461;
var inst_24443 = inst_24460;
var inst_24444 = inst_24462;
var inst_24445 = (0);
var state_24490__$1 = (function (){var statearr_24509 = state_24490;
(statearr_24509[(8)] = inst_24445);

(statearr_24509[(9)] = inst_24443);

(statearr_24509[(10)] = inst_24444);

(statearr_24509[(11)] = inst_24442);

return statearr_24509;
})();
var statearr_24510_24543 = state_24490__$1;
(statearr_24510_24543[(2)] = null);

(statearr_24510_24543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (3))){
var inst_24488 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24490__$1,inst_24488);
} else {
if((state_val_24491 === (12))){
var inst_24476 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24511_24544 = state_24490__$1;
(statearr_24511_24544[(2)] = inst_24476);

(statearr_24511_24544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (2))){
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24490__$1,(4),in$);
} else {
if((state_val_24491 === (23))){
var inst_24484 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24512_24545 = state_24490__$1;
(statearr_24512_24545[(2)] = inst_24484);

(statearr_24512_24545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (19))){
var inst_24471 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24513_24546 = state_24490__$1;
(statearr_24513_24546[(2)] = inst_24471);

(statearr_24513_24546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (11))){
var inst_24456 = (state_24490[(7)]);
var inst_24442 = (state_24490[(11)]);
var inst_24456__$1 = cljs.core.seq.call(null,inst_24442);
var state_24490__$1 = (function (){var statearr_24514 = state_24490;
(statearr_24514[(7)] = inst_24456__$1);

return statearr_24514;
})();
if(inst_24456__$1){
var statearr_24515_24547 = state_24490__$1;
(statearr_24515_24547[(1)] = (14));

} else {
var statearr_24516_24548 = state_24490__$1;
(statearr_24516_24548[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (9))){
var inst_24478 = (state_24490[(2)]);
var inst_24479 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24490__$1 = (function (){var statearr_24517 = state_24490;
(statearr_24517[(15)] = inst_24478);

return statearr_24517;
})();
if(cljs.core.truth_(inst_24479)){
var statearr_24518_24549 = state_24490__$1;
(statearr_24518_24549[(1)] = (21));

} else {
var statearr_24519_24550 = state_24490__$1;
(statearr_24519_24550[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (5))){
var inst_24434 = cljs.core.async.close_BANG_.call(null,out);
var state_24490__$1 = state_24490;
var statearr_24520_24551 = state_24490__$1;
(statearr_24520_24551[(2)] = inst_24434);

(statearr_24520_24551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (14))){
var inst_24456 = (state_24490[(7)]);
var inst_24458 = cljs.core.chunked_seq_QMARK_.call(null,inst_24456);
var state_24490__$1 = state_24490;
if(inst_24458){
var statearr_24521_24552 = state_24490__$1;
(statearr_24521_24552[(1)] = (17));

} else {
var statearr_24522_24553 = state_24490__$1;
(statearr_24522_24553[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (16))){
var inst_24474 = (state_24490[(2)]);
var state_24490__$1 = state_24490;
var statearr_24523_24554 = state_24490__$1;
(statearr_24523_24554[(2)] = inst_24474);

(statearr_24523_24554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24491 === (10))){
var inst_24445 = (state_24490[(8)]);
var inst_24443 = (state_24490[(9)]);
var inst_24450 = cljs.core._nth.call(null,inst_24443,inst_24445);
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24490__$1,(13),out,inst_24450);
} else {
if((state_val_24491 === (18))){
var inst_24456 = (state_24490[(7)]);
var inst_24465 = cljs.core.first.call(null,inst_24456);
var state_24490__$1 = state_24490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24490__$1,(20),out,inst_24465);
} else {
if((state_val_24491 === (8))){
var inst_24445 = (state_24490[(8)]);
var inst_24444 = (state_24490[(10)]);
var inst_24447 = (inst_24445 < inst_24444);
var inst_24448 = inst_24447;
var state_24490__$1 = state_24490;
if(cljs.core.truth_(inst_24448)){
var statearr_24524_24555 = state_24490__$1;
(statearr_24524_24555[(1)] = (10));

} else {
var statearr_24525_24556 = state_24490__$1;
(statearr_24525_24556[(1)] = (11));

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
});})(c__19329__auto__))
;
return ((function (switch__19308__auto__,c__19329__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19309__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19309__auto____0 = (function (){
var statearr_24529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24529[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19309__auto__);

(statearr_24529[(1)] = (1));

return statearr_24529;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19309__auto____1 = (function (state_24490){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24530){if((e24530 instanceof Object)){
var ex__19312__auto__ = e24530;
var statearr_24531_24557 = state_24490;
(statearr_24531_24557[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24558 = state_24490;
state_24490 = G__24558;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19309__auto__ = function(state_24490){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19309__auto____1.call(this,state_24490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19309__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19309__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto__))
})();
var state__19331__auto__ = (function (){var statearr_24532 = f__19330__auto__.call(null);
(statearr_24532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto__);

return statearr_24532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto__))
);

return c__19329__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24559 = [];
var len__17364__auto___24562 = arguments.length;
var i__17365__auto___24563 = (0);
while(true){
if((i__17365__auto___24563 < len__17364__auto___24562)){
args24559.push((arguments[i__17365__auto___24563]));

var G__24564 = (i__17365__auto___24563 + (1));
i__17365__auto___24563 = G__24564;
continue;
} else {
}
break;
}

var G__24561 = args24559.length;
switch (G__24561) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24559.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24566 = [];
var len__17364__auto___24569 = arguments.length;
var i__17365__auto___24570 = (0);
while(true){
if((i__17365__auto___24570 < len__17364__auto___24569)){
args24566.push((arguments[i__17365__auto___24570]));

var G__24571 = (i__17365__auto___24570 + (1));
i__17365__auto___24570 = G__24571;
continue;
} else {
}
break;
}

var G__24568 = args24566.length;
switch (G__24568) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24566.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24573 = [];
var len__17364__auto___24624 = arguments.length;
var i__17365__auto___24625 = (0);
while(true){
if((i__17365__auto___24625 < len__17364__auto___24624)){
args24573.push((arguments[i__17365__auto___24625]));

var G__24626 = (i__17365__auto___24625 + (1));
i__17365__auto___24625 = G__24626;
continue;
} else {
}
break;
}

var G__24575 = args24573.length;
switch (G__24575) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24573.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19329__auto___24628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___24628,out){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___24628,out){
return (function (state_24599){
var state_val_24600 = (state_24599[(1)]);
if((state_val_24600 === (7))){
var inst_24594 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24601_24629 = state_24599__$1;
(statearr_24601_24629[(2)] = inst_24594);

(statearr_24601_24629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (1))){
var inst_24576 = null;
var state_24599__$1 = (function (){var statearr_24602 = state_24599;
(statearr_24602[(7)] = inst_24576);

return statearr_24602;
})();
var statearr_24603_24630 = state_24599__$1;
(statearr_24603_24630[(2)] = null);

(statearr_24603_24630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (4))){
var inst_24579 = (state_24599[(8)]);
var inst_24579__$1 = (state_24599[(2)]);
var inst_24580 = (inst_24579__$1 == null);
var inst_24581 = cljs.core.not.call(null,inst_24580);
var state_24599__$1 = (function (){var statearr_24604 = state_24599;
(statearr_24604[(8)] = inst_24579__$1);

return statearr_24604;
})();
if(inst_24581){
var statearr_24605_24631 = state_24599__$1;
(statearr_24605_24631[(1)] = (5));

} else {
var statearr_24606_24632 = state_24599__$1;
(statearr_24606_24632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (6))){
var state_24599__$1 = state_24599;
var statearr_24607_24633 = state_24599__$1;
(statearr_24607_24633[(2)] = null);

(statearr_24607_24633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (3))){
var inst_24596 = (state_24599[(2)]);
var inst_24597 = cljs.core.async.close_BANG_.call(null,out);
var state_24599__$1 = (function (){var statearr_24608 = state_24599;
(statearr_24608[(9)] = inst_24596);

return statearr_24608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24599__$1,inst_24597);
} else {
if((state_val_24600 === (2))){
var state_24599__$1 = state_24599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24599__$1,(4),ch);
} else {
if((state_val_24600 === (11))){
var inst_24579 = (state_24599[(8)]);
var inst_24588 = (state_24599[(2)]);
var inst_24576 = inst_24579;
var state_24599__$1 = (function (){var statearr_24609 = state_24599;
(statearr_24609[(10)] = inst_24588);

(statearr_24609[(7)] = inst_24576);

return statearr_24609;
})();
var statearr_24610_24634 = state_24599__$1;
(statearr_24610_24634[(2)] = null);

(statearr_24610_24634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (9))){
var inst_24579 = (state_24599[(8)]);
var state_24599__$1 = state_24599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24599__$1,(11),out,inst_24579);
} else {
if((state_val_24600 === (5))){
var inst_24579 = (state_24599[(8)]);
var inst_24576 = (state_24599[(7)]);
var inst_24583 = cljs.core._EQ_.call(null,inst_24579,inst_24576);
var state_24599__$1 = state_24599;
if(inst_24583){
var statearr_24612_24635 = state_24599__$1;
(statearr_24612_24635[(1)] = (8));

} else {
var statearr_24613_24636 = state_24599__$1;
(statearr_24613_24636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (10))){
var inst_24591 = (state_24599[(2)]);
var state_24599__$1 = state_24599;
var statearr_24614_24637 = state_24599__$1;
(statearr_24614_24637[(2)] = inst_24591);

(statearr_24614_24637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24600 === (8))){
var inst_24576 = (state_24599[(7)]);
var tmp24611 = inst_24576;
var inst_24576__$1 = tmp24611;
var state_24599__$1 = (function (){var statearr_24615 = state_24599;
(statearr_24615[(7)] = inst_24576__$1);

return statearr_24615;
})();
var statearr_24616_24638 = state_24599__$1;
(statearr_24616_24638[(2)] = null);

(statearr_24616_24638[(1)] = (2));


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
});})(c__19329__auto___24628,out))
;
return ((function (switch__19308__auto__,c__19329__auto___24628,out){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_24620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24620[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_24620[(1)] = (1));

return statearr_24620;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_24599){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24621){if((e24621 instanceof Object)){
var ex__19312__auto__ = e24621;
var statearr_24622_24639 = state_24599;
(statearr_24622_24639[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24640 = state_24599;
state_24599 = G__24640;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_24599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_24599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___24628,out))
})();
var state__19331__auto__ = (function (){var statearr_24623 = f__19330__auto__.call(null);
(statearr_24623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___24628);

return statearr_24623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___24628,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24641 = [];
var len__17364__auto___24711 = arguments.length;
var i__17365__auto___24712 = (0);
while(true){
if((i__17365__auto___24712 < len__17364__auto___24711)){
args24641.push((arguments[i__17365__auto___24712]));

var G__24713 = (i__17365__auto___24712 + (1));
i__17365__auto___24712 = G__24713;
continue;
} else {
}
break;
}

var G__24643 = args24641.length;
switch (G__24643) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24641.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19329__auto___24715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___24715,out){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___24715,out){
return (function (state_24681){
var state_val_24682 = (state_24681[(1)]);
if((state_val_24682 === (7))){
var inst_24677 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24683_24716 = state_24681__$1;
(statearr_24683_24716[(2)] = inst_24677);

(statearr_24683_24716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (1))){
var inst_24644 = (new Array(n));
var inst_24645 = inst_24644;
var inst_24646 = (0);
var state_24681__$1 = (function (){var statearr_24684 = state_24681;
(statearr_24684[(7)] = inst_24645);

(statearr_24684[(8)] = inst_24646);

return statearr_24684;
})();
var statearr_24685_24717 = state_24681__$1;
(statearr_24685_24717[(2)] = null);

(statearr_24685_24717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (4))){
var inst_24649 = (state_24681[(9)]);
var inst_24649__$1 = (state_24681[(2)]);
var inst_24650 = (inst_24649__$1 == null);
var inst_24651 = cljs.core.not.call(null,inst_24650);
var state_24681__$1 = (function (){var statearr_24686 = state_24681;
(statearr_24686[(9)] = inst_24649__$1);

return statearr_24686;
})();
if(inst_24651){
var statearr_24687_24718 = state_24681__$1;
(statearr_24687_24718[(1)] = (5));

} else {
var statearr_24688_24719 = state_24681__$1;
(statearr_24688_24719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (15))){
var inst_24671 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24689_24720 = state_24681__$1;
(statearr_24689_24720[(2)] = inst_24671);

(statearr_24689_24720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (13))){
var state_24681__$1 = state_24681;
var statearr_24690_24721 = state_24681__$1;
(statearr_24690_24721[(2)] = null);

(statearr_24690_24721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (6))){
var inst_24646 = (state_24681[(8)]);
var inst_24667 = (inst_24646 > (0));
var state_24681__$1 = state_24681;
if(cljs.core.truth_(inst_24667)){
var statearr_24691_24722 = state_24681__$1;
(statearr_24691_24722[(1)] = (12));

} else {
var statearr_24692_24723 = state_24681__$1;
(statearr_24692_24723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (3))){
var inst_24679 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24681__$1,inst_24679);
} else {
if((state_val_24682 === (12))){
var inst_24645 = (state_24681[(7)]);
var inst_24669 = cljs.core.vec.call(null,inst_24645);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24681__$1,(15),out,inst_24669);
} else {
if((state_val_24682 === (2))){
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24681__$1,(4),ch);
} else {
if((state_val_24682 === (11))){
var inst_24661 = (state_24681[(2)]);
var inst_24662 = (new Array(n));
var inst_24645 = inst_24662;
var inst_24646 = (0);
var state_24681__$1 = (function (){var statearr_24693 = state_24681;
(statearr_24693[(7)] = inst_24645);

(statearr_24693[(8)] = inst_24646);

(statearr_24693[(10)] = inst_24661);

return statearr_24693;
})();
var statearr_24694_24724 = state_24681__$1;
(statearr_24694_24724[(2)] = null);

(statearr_24694_24724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (9))){
var inst_24645 = (state_24681[(7)]);
var inst_24659 = cljs.core.vec.call(null,inst_24645);
var state_24681__$1 = state_24681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24681__$1,(11),out,inst_24659);
} else {
if((state_val_24682 === (5))){
var inst_24654 = (state_24681[(11)]);
var inst_24645 = (state_24681[(7)]);
var inst_24649 = (state_24681[(9)]);
var inst_24646 = (state_24681[(8)]);
var inst_24653 = (inst_24645[inst_24646] = inst_24649);
var inst_24654__$1 = (inst_24646 + (1));
var inst_24655 = (inst_24654__$1 < n);
var state_24681__$1 = (function (){var statearr_24695 = state_24681;
(statearr_24695[(11)] = inst_24654__$1);

(statearr_24695[(12)] = inst_24653);

return statearr_24695;
})();
if(cljs.core.truth_(inst_24655)){
var statearr_24696_24725 = state_24681__$1;
(statearr_24696_24725[(1)] = (8));

} else {
var statearr_24697_24726 = state_24681__$1;
(statearr_24697_24726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (14))){
var inst_24674 = (state_24681[(2)]);
var inst_24675 = cljs.core.async.close_BANG_.call(null,out);
var state_24681__$1 = (function (){var statearr_24699 = state_24681;
(statearr_24699[(13)] = inst_24674);

return statearr_24699;
})();
var statearr_24700_24727 = state_24681__$1;
(statearr_24700_24727[(2)] = inst_24675);

(statearr_24700_24727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (10))){
var inst_24665 = (state_24681[(2)]);
var state_24681__$1 = state_24681;
var statearr_24701_24728 = state_24681__$1;
(statearr_24701_24728[(2)] = inst_24665);

(statearr_24701_24728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24682 === (8))){
var inst_24654 = (state_24681[(11)]);
var inst_24645 = (state_24681[(7)]);
var tmp24698 = inst_24645;
var inst_24645__$1 = tmp24698;
var inst_24646 = inst_24654;
var state_24681__$1 = (function (){var statearr_24702 = state_24681;
(statearr_24702[(7)] = inst_24645__$1);

(statearr_24702[(8)] = inst_24646);

return statearr_24702;
})();
var statearr_24703_24729 = state_24681__$1;
(statearr_24703_24729[(2)] = null);

(statearr_24703_24729[(1)] = (2));


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
});})(c__19329__auto___24715,out))
;
return ((function (switch__19308__auto__,c__19329__auto___24715,out){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_24707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24707[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_24707[(1)] = (1));

return statearr_24707;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_24681){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24708){if((e24708 instanceof Object)){
var ex__19312__auto__ = e24708;
var statearr_24709_24730 = state_24681;
(statearr_24709_24730[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24731 = state_24681;
state_24681 = G__24731;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_24681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_24681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___24715,out))
})();
var state__19331__auto__ = (function (){var statearr_24710 = f__19330__auto__.call(null);
(statearr_24710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___24715);

return statearr_24710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___24715,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24732 = [];
var len__17364__auto___24806 = arguments.length;
var i__17365__auto___24807 = (0);
while(true){
if((i__17365__auto___24807 < len__17364__auto___24806)){
args24732.push((arguments[i__17365__auto___24807]));

var G__24808 = (i__17365__auto___24807 + (1));
i__17365__auto___24807 = G__24808;
continue;
} else {
}
break;
}

var G__24734 = args24732.length;
switch (G__24734) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24732.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19329__auto___24810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19329__auto___24810,out){
return (function (){
var f__19330__auto__ = (function (){var switch__19308__auto__ = ((function (c__19329__auto___24810,out){
return (function (state_24776){
var state_val_24777 = (state_24776[(1)]);
if((state_val_24777 === (7))){
var inst_24772 = (state_24776[(2)]);
var state_24776__$1 = state_24776;
var statearr_24778_24811 = state_24776__$1;
(statearr_24778_24811[(2)] = inst_24772);

(statearr_24778_24811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (1))){
var inst_24735 = [];
var inst_24736 = inst_24735;
var inst_24737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24776__$1 = (function (){var statearr_24779 = state_24776;
(statearr_24779[(7)] = inst_24737);

(statearr_24779[(8)] = inst_24736);

return statearr_24779;
})();
var statearr_24780_24812 = state_24776__$1;
(statearr_24780_24812[(2)] = null);

(statearr_24780_24812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (4))){
var inst_24740 = (state_24776[(9)]);
var inst_24740__$1 = (state_24776[(2)]);
var inst_24741 = (inst_24740__$1 == null);
var inst_24742 = cljs.core.not.call(null,inst_24741);
var state_24776__$1 = (function (){var statearr_24781 = state_24776;
(statearr_24781[(9)] = inst_24740__$1);

return statearr_24781;
})();
if(inst_24742){
var statearr_24782_24813 = state_24776__$1;
(statearr_24782_24813[(1)] = (5));

} else {
var statearr_24783_24814 = state_24776__$1;
(statearr_24783_24814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (15))){
var inst_24766 = (state_24776[(2)]);
var state_24776__$1 = state_24776;
var statearr_24784_24815 = state_24776__$1;
(statearr_24784_24815[(2)] = inst_24766);

(statearr_24784_24815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (13))){
var state_24776__$1 = state_24776;
var statearr_24785_24816 = state_24776__$1;
(statearr_24785_24816[(2)] = null);

(statearr_24785_24816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (6))){
var inst_24736 = (state_24776[(8)]);
var inst_24761 = inst_24736.length;
var inst_24762 = (inst_24761 > (0));
var state_24776__$1 = state_24776;
if(cljs.core.truth_(inst_24762)){
var statearr_24786_24817 = state_24776__$1;
(statearr_24786_24817[(1)] = (12));

} else {
var statearr_24787_24818 = state_24776__$1;
(statearr_24787_24818[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (3))){
var inst_24774 = (state_24776[(2)]);
var state_24776__$1 = state_24776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24776__$1,inst_24774);
} else {
if((state_val_24777 === (12))){
var inst_24736 = (state_24776[(8)]);
var inst_24764 = cljs.core.vec.call(null,inst_24736);
var state_24776__$1 = state_24776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24776__$1,(15),out,inst_24764);
} else {
if((state_val_24777 === (2))){
var state_24776__$1 = state_24776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24776__$1,(4),ch);
} else {
if((state_val_24777 === (11))){
var inst_24744 = (state_24776[(10)]);
var inst_24740 = (state_24776[(9)]);
var inst_24754 = (state_24776[(2)]);
var inst_24755 = [];
var inst_24756 = inst_24755.push(inst_24740);
var inst_24736 = inst_24755;
var inst_24737 = inst_24744;
var state_24776__$1 = (function (){var statearr_24788 = state_24776;
(statearr_24788[(11)] = inst_24756);

(statearr_24788[(12)] = inst_24754);

(statearr_24788[(7)] = inst_24737);

(statearr_24788[(8)] = inst_24736);

return statearr_24788;
})();
var statearr_24789_24819 = state_24776__$1;
(statearr_24789_24819[(2)] = null);

(statearr_24789_24819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (9))){
var inst_24736 = (state_24776[(8)]);
var inst_24752 = cljs.core.vec.call(null,inst_24736);
var state_24776__$1 = state_24776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24776__$1,(11),out,inst_24752);
} else {
if((state_val_24777 === (5))){
var inst_24744 = (state_24776[(10)]);
var inst_24737 = (state_24776[(7)]);
var inst_24740 = (state_24776[(9)]);
var inst_24744__$1 = f.call(null,inst_24740);
var inst_24745 = cljs.core._EQ_.call(null,inst_24744__$1,inst_24737);
var inst_24746 = cljs.core.keyword_identical_QMARK_.call(null,inst_24737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24747 = (inst_24745) || (inst_24746);
var state_24776__$1 = (function (){var statearr_24790 = state_24776;
(statearr_24790[(10)] = inst_24744__$1);

return statearr_24790;
})();
if(cljs.core.truth_(inst_24747)){
var statearr_24791_24820 = state_24776__$1;
(statearr_24791_24820[(1)] = (8));

} else {
var statearr_24792_24821 = state_24776__$1;
(statearr_24792_24821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (14))){
var inst_24769 = (state_24776[(2)]);
var inst_24770 = cljs.core.async.close_BANG_.call(null,out);
var state_24776__$1 = (function (){var statearr_24794 = state_24776;
(statearr_24794[(13)] = inst_24769);

return statearr_24794;
})();
var statearr_24795_24822 = state_24776__$1;
(statearr_24795_24822[(2)] = inst_24770);

(statearr_24795_24822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (10))){
var inst_24759 = (state_24776[(2)]);
var state_24776__$1 = state_24776;
var statearr_24796_24823 = state_24776__$1;
(statearr_24796_24823[(2)] = inst_24759);

(statearr_24796_24823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24777 === (8))){
var inst_24744 = (state_24776[(10)]);
var inst_24736 = (state_24776[(8)]);
var inst_24740 = (state_24776[(9)]);
var inst_24749 = inst_24736.push(inst_24740);
var tmp24793 = inst_24736;
var inst_24736__$1 = tmp24793;
var inst_24737 = inst_24744;
var state_24776__$1 = (function (){var statearr_24797 = state_24776;
(statearr_24797[(14)] = inst_24749);

(statearr_24797[(7)] = inst_24737);

(statearr_24797[(8)] = inst_24736__$1);

return statearr_24797;
})();
var statearr_24798_24824 = state_24776__$1;
(statearr_24798_24824[(2)] = null);

(statearr_24798_24824[(1)] = (2));


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
});})(c__19329__auto___24810,out))
;
return ((function (switch__19308__auto__,c__19329__auto___24810,out){
return (function() {
var cljs$core$async$state_machine__19309__auto__ = null;
var cljs$core$async$state_machine__19309__auto____0 = (function (){
var statearr_24802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24802[(0)] = cljs$core$async$state_machine__19309__auto__);

(statearr_24802[(1)] = (1));

return statearr_24802;
});
var cljs$core$async$state_machine__19309__auto____1 = (function (state_24776){
while(true){
var ret_value__19310__auto__ = (function (){try{while(true){
var result__19311__auto__ = switch__19308__auto__.call(null,state_24776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19311__auto__;
}
break;
}
}catch (e24803){if((e24803 instanceof Object)){
var ex__19312__auto__ = e24803;
var statearr_24804_24825 = state_24776;
(statearr_24804_24825[(5)] = ex__19312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24826 = state_24776;
state_24776 = G__24826;
continue;
} else {
return ret_value__19310__auto__;
}
break;
}
});
cljs$core$async$state_machine__19309__auto__ = function(state_24776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19309__auto____1.call(this,state_24776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19309__auto____0;
cljs$core$async$state_machine__19309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19309__auto____1;
return cljs$core$async$state_machine__19309__auto__;
})()
;})(switch__19308__auto__,c__19329__auto___24810,out))
})();
var state__19331__auto__ = (function (){var statearr_24805 = f__19330__auto__.call(null);
(statearr_24805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19329__auto___24810);

return statearr_24805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19331__auto__);
});})(c__19329__auto___24810,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1442702301098
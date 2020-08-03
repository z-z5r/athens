goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50289){
var map__50290 = p__50289;
var map__50290__$1 = (((((!((map__50290 == null))))?(((((map__50290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50290):map__50290);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50290__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__50294_50341 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__50295_50342 = null;
var count__50296_50343 = (0);
var i__50297_50344 = (0);
while(true){
if((i__50297_50344 < count__50296_50343)){
var vec__50321_50345 = chunk__50295_50342.cljs$core$IIndexed$_nth$arity$2(null,i__50297_50344);
var k_50346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50321_50345,(0),null);
var cb_50347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50321_50345,(1),null);
try{var G__50325_50348 = cljs.core.deref(re_frame.trace.traces);
(cb_50347.cljs$core$IFn$_invoke$arity$1 ? cb_50347.cljs$core$IFn$_invoke$arity$1(G__50325_50348) : cb_50347.call(null,G__50325_50348));
}catch (e50324){var e_50349 = e50324;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50346,"while storing",cljs.core.deref(re_frame.trace.traces),e_50349], 0));
}

var G__50350 = seq__50294_50341;
var G__50351 = chunk__50295_50342;
var G__50352 = count__50296_50343;
var G__50353 = (i__50297_50344 + (1));
seq__50294_50341 = G__50350;
chunk__50295_50342 = G__50351;
count__50296_50343 = G__50352;
i__50297_50344 = G__50353;
continue;
} else {
var temp__5735__auto___50354 = cljs.core.seq(seq__50294_50341);
if(temp__5735__auto___50354){
var seq__50294_50355__$1 = temp__5735__auto___50354;
if(cljs.core.chunked_seq_QMARK_(seq__50294_50355__$1)){
var c__4556__auto___50356 = cljs.core.chunk_first(seq__50294_50355__$1);
var G__50357 = cljs.core.chunk_rest(seq__50294_50355__$1);
var G__50358 = c__4556__auto___50356;
var G__50359 = cljs.core.count(c__4556__auto___50356);
var G__50360 = (0);
seq__50294_50341 = G__50357;
chunk__50295_50342 = G__50358;
count__50296_50343 = G__50359;
i__50297_50344 = G__50360;
continue;
} else {
var vec__50331_50362 = cljs.core.first(seq__50294_50355__$1);
var k_50363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50331_50362,(0),null);
var cb_50364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50331_50362,(1),null);
try{var G__50335_50366 = cljs.core.deref(re_frame.trace.traces);
(cb_50364.cljs$core$IFn$_invoke$arity$1 ? cb_50364.cljs$core$IFn$_invoke$arity$1(G__50335_50366) : cb_50364.call(null,G__50335_50366));
}catch (e50334){var e_50367 = e50334;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_50363,"while storing",cljs.core.deref(re_frame.trace.traces),e_50367], 0));
}

var G__50368 = cljs.core.next(seq__50294_50355__$1);
var G__50369 = null;
var G__50370 = (0);
var G__50371 = (0);
seq__50294_50341 = G__50368;
chunk__50295_50342 = G__50369;
count__50296_50343 = G__50370;
i__50297_50344 = G__50371;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

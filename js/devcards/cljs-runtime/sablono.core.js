goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__38222__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__38089 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__38090 = cljs.core.seq(vec__38089);
var first__38091 = cljs.core.first(seq__38090);
var seq__38090__$1 = cljs.core.next(seq__38090);
var tag = first__38091;
var body = seq__38090__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38223__i = 0, G__38223__a = new Array(arguments.length -  0);
while (G__38223__i < G__38223__a.length) {G__38223__a[G__38223__i] = arguments[G__38223__i + 0]; ++G__38223__i;}
  args = new cljs.core.IndexedSeq(G__38223__a,0,null);
} 
return G__38222__delegate.call(this,args);};
G__38222.cljs$lang$maxFixedArity = 0;
G__38222.cljs$lang$applyTo = (function (arglist__38224){
var args = cljs.core.seq(arglist__38224);
return G__38222__delegate(args);
});
G__38222.cljs$core$IFn$_invoke$arity$variadic = G__38222__delegate;
return G__38222;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__38092(s__38093){
return (new cljs.core.LazySeq(null,(function (){
var s__38093__$1 = s__38093;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38093__$1);
if(temp__5735__auto__){
var s__38093__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38093__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38093__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38095 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38094 = (0);
while(true){
if((i__38094 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38094);
cljs.core.chunk_append(b__38095,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38225 = (i__38094 + (1));
i__38094 = G__38225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38095),sablono$core$update_arglists_$_iter__38092(cljs.core.chunk_rest(s__38093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38095),null);
}
} else {
var args = cljs.core.first(s__38093__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38092(cljs.core.rest(s__38093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38226 = arguments.length;
var i__4790__auto___38227 = (0);
while(true){
if((i__4790__auto___38227 < len__4789__auto___38226)){
args__4795__auto__.push((arguments[i__4790__auto___38227]));

var G__38228 = (i__4790__auto___38227 + (1));
i__4790__auto___38227 = G__38228;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__38097(s__38098){
return (new cljs.core.LazySeq(null,(function (){
var s__38098__$1 = s__38098;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38098__$1);
if(temp__5735__auto__){
var s__38098__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38098__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38098__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38100 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38099 = (0);
while(true){
if((i__38099 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38099);
cljs.core.chunk_append(b__38100,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38229 = (i__38099 + (1));
i__38099 = G__38229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38100),sablono$core$iter__38097(cljs.core.chunk_rest(s__38098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38100),null);
}
} else {
var style = cljs.core.first(s__38098__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38097(cljs.core.rest(s__38098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq38096){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38096));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__38101 = goog.dom.getDocument().body;
var G__38102 = (function (){var G__38103 = "script";
var G__38104 = ({"src": src});
return goog.dom.createDom(G__38103,G__38104);
})();
return goog.dom.appendChild(G__38101,G__38102);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to38105 = (function sablono$core$link_to38105(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38230 = arguments.length;
var i__4790__auto___38231 = (0);
while(true){
if((i__4790__auto___38231 < len__4789__auto___38230)){
args__4795__auto__.push((arguments[i__4790__auto___38231]));

var G__38232 = (i__4790__auto___38231 + (1));
i__4790__auto___38231 = G__38232;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38105.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to38105.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to38105.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to38105.cljs$lang$applyTo = (function (seq38106){
var G__38107 = cljs.core.first(seq38106);
var seq38106__$1 = cljs.core.next(seq38106);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38107,seq38106__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38105);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38108 = (function sablono$core$mail_to38108(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38233 = arguments.length;
var i__4790__auto___38234 = (0);
while(true){
if((i__4790__auto___38234 < len__4789__auto___38233)){
args__4795__auto__.push((arguments[i__4790__auto___38234]));

var G__38235 = (i__4790__auto___38234 + (1));
i__4790__auto___38234 = G__38235;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38108.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to38108.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38111){
var vec__38112 = p__38111;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to38108.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to38108.cljs$lang$applyTo = (function (seq38109){
var G__38110 = cljs.core.first(seq38109);
var seq38109__$1 = cljs.core.next(seq38109);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38110,seq38109__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38108);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38115 = (function sablono$core$unordered_list38115(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list38115_$_iter__38116(s__38117){
return (new cljs.core.LazySeq(null,(function (){
var s__38117__$1 = s__38117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38117__$1);
if(temp__5735__auto__){
var s__38117__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38117__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38117__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38119 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38118 = (0);
while(true){
if((i__38118 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38118);
cljs.core.chunk_append(b__38119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38236 = (i__38118 + (1));
i__38118 = G__38236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38119),sablono$core$unordered_list38115_$_iter__38116(cljs.core.chunk_rest(s__38117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38119),null);
}
} else {
var x = cljs.core.first(s__38117__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38115_$_iter__38116(cljs.core.rest(s__38117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38115);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38120 = (function sablono$core$ordered_list38120(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list38120_$_iter__38121(s__38122){
return (new cljs.core.LazySeq(null,(function (){
var s__38122__$1 = s__38122;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38122__$1);
if(temp__5735__auto__){
var s__38122__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38122__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38122__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38124 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38123 = (0);
while(true){
if((i__38123 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38123);
cljs.core.chunk_append(b__38124,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38237 = (i__38123 + (1));
i__38123 = G__38237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38124),sablono$core$ordered_list38120_$_iter__38121(cljs.core.chunk_rest(s__38122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38124),null);
}
} else {
var x = cljs.core.first(s__38122__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38120_$_iter__38121(cljs.core.rest(s__38122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38120);
/**
 * Create an image element.
 */
sablono.core.image38125 = (function sablono$core$image38125(var_args){
var G__38127 = arguments.length;
switch (G__38127) {
case 1:
return sablono.core.image38125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image38125.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image38125.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image38125.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38125);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38128_SHARP_,p2__38129_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38128_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38129_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38130_SHARP_,p2__38131_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38130_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38131_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38133 = arguments.length;
switch (G__38133) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field38134 = (function sablono$core$color_field38134(var_args){
var G__38136 = arguments.length;
switch (G__38136) {
case 1:
return sablono.core.color_field38134.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field38134.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38081__auto__);
}));

(sablono.core.color_field38134.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.color_field38134.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field38134);

/**
 * Creates a date input field.
 */
sablono.core.date_field38137 = (function sablono$core$date_field38137(var_args){
var G__38139 = arguments.length;
switch (G__38139) {
case 1:
return sablono.core.date_field38137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field38137.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38081__auto__);
}));

(sablono.core.date_field38137.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.date_field38137.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field38137);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38140 = (function sablono$core$datetime_field38140(var_args){
var G__38142 = arguments.length;
switch (G__38142) {
case 1:
return sablono.core.datetime_field38140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field38140.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38081__auto__);
}));

(sablono.core.datetime_field38140.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.datetime_field38140.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field38140);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38143 = (function sablono$core$datetime_local_field38143(var_args){
var G__38145 = arguments.length;
switch (G__38145) {
case 1:
return sablono.core.datetime_local_field38143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field38143.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38081__auto__);
}));

(sablono.core.datetime_local_field38143.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.datetime_local_field38143.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field38143);

/**
 * Creates a email input field.
 */
sablono.core.email_field38146 = (function sablono$core$email_field38146(var_args){
var G__38148 = arguments.length;
switch (G__38148) {
case 1:
return sablono.core.email_field38146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field38146.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38081__auto__);
}));

(sablono.core.email_field38146.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.email_field38146.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field38146);

/**
 * Creates a file input field.
 */
sablono.core.file_field38149 = (function sablono$core$file_field38149(var_args){
var G__38151 = arguments.length;
switch (G__38151) {
case 1:
return sablono.core.file_field38149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field38149.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38081__auto__);
}));

(sablono.core.file_field38149.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.file_field38149.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field38149);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38152 = (function sablono$core$hidden_field38152(var_args){
var G__38154 = arguments.length;
switch (G__38154) {
case 1:
return sablono.core.hidden_field38152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field38152.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38081__auto__);
}));

(sablono.core.hidden_field38152.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.hidden_field38152.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38152);

/**
 * Creates a month input field.
 */
sablono.core.month_field38155 = (function sablono$core$month_field38155(var_args){
var G__38157 = arguments.length;
switch (G__38157) {
case 1:
return sablono.core.month_field38155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field38155.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38081__auto__);
}));

(sablono.core.month_field38155.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.month_field38155.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field38155);

/**
 * Creates a number input field.
 */
sablono.core.number_field38158 = (function sablono$core$number_field38158(var_args){
var G__38160 = arguments.length;
switch (G__38160) {
case 1:
return sablono.core.number_field38158.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38158.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field38158.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38081__auto__);
}));

(sablono.core.number_field38158.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.number_field38158.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field38158);

/**
 * Creates a password input field.
 */
sablono.core.password_field38161 = (function sablono$core$password_field38161(var_args){
var G__38163 = arguments.length;
switch (G__38163) {
case 1:
return sablono.core.password_field38161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field38161.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38081__auto__);
}));

(sablono.core.password_field38161.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.password_field38161.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38161);

/**
 * Creates a range input field.
 */
sablono.core.range_field38164 = (function sablono$core$range_field38164(var_args){
var G__38166 = arguments.length;
switch (G__38166) {
case 1:
return sablono.core.range_field38164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field38164.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38081__auto__);
}));

(sablono.core.range_field38164.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.range_field38164.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field38164);

/**
 * Creates a search input field.
 */
sablono.core.search_field38167 = (function sablono$core$search_field38167(var_args){
var G__38169 = arguments.length;
switch (G__38169) {
case 1:
return sablono.core.search_field38167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field38167.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38081__auto__);
}));

(sablono.core.search_field38167.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.search_field38167.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field38167);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38170 = (function sablono$core$tel_field38170(var_args){
var G__38172 = arguments.length;
switch (G__38172) {
case 1:
return sablono.core.tel_field38170.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38170.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field38170.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38081__auto__);
}));

(sablono.core.tel_field38170.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.tel_field38170.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field38170);

/**
 * Creates a text input field.
 */
sablono.core.text_field38173 = (function sablono$core$text_field38173(var_args){
var G__38175 = arguments.length;
switch (G__38175) {
case 1:
return sablono.core.text_field38173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field38173.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38081__auto__);
}));

(sablono.core.text_field38173.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.text_field38173.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38173);

/**
 * Creates a time input field.
 */
sablono.core.time_field38176 = (function sablono$core$time_field38176(var_args){
var G__38178 = arguments.length;
switch (G__38178) {
case 1:
return sablono.core.time_field38176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field38176.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38081__auto__);
}));

(sablono.core.time_field38176.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.time_field38176.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field38176);

/**
 * Creates a url input field.
 */
sablono.core.url_field38179 = (function sablono$core$url_field38179(var_args){
var G__38181 = arguments.length;
switch (G__38181) {
case 1:
return sablono.core.url_field38179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field38179.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38081__auto__);
}));

(sablono.core.url_field38179.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.url_field38179.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field38179);

/**
 * Creates a week input field.
 */
sablono.core.week_field38182 = (function sablono$core$week_field38182(var_args){
var G__38184 = arguments.length;
switch (G__38184) {
case 1:
return sablono.core.week_field38182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field38182.cljs$core$IFn$_invoke$arity$1 = (function (name__38081__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38081__auto__);
}));

(sablono.core.week_field38182.cljs$core$IFn$_invoke$arity$2 = (function (name__38081__auto__,value__38082__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38081__auto__,value__38082__auto__);
}));

(sablono.core.week_field38182.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field38182);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38185 = (function sablono$core$check_box38185(var_args){
var G__38187 = arguments.length;
switch (G__38187) {
case 1:
return sablono.core.check_box38185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38185.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box38185.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box38185.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38185.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box38185.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box38185);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38188 = (function sablono$core$radio_button38188(var_args){
var G__38190 = arguments.length;
switch (G__38190) {
case 1:
return sablono.core.radio_button38188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38188.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button38188.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button38188.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38188.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button38188.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button38188);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__38191 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__38191);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38192 = (function sablono$core$select_options38192(coll){
var iter__4582__auto__ = (function sablono$core$select_options38192_$_iter__38193(s__38194){
return (new cljs.core.LazySeq(null,(function (){
var s__38194__$1 = s__38194;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38194__$1);
if(temp__5735__auto__){
var s__38194__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38194__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38194__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38196 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38195 = (0);
while(true){
if((i__38195 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__38195);
cljs.core.chunk_append(b__38196,((cljs.core.sequential_QMARK_(x))?(function (){var vec__38197 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38197,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38192.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38192.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38192.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38314 = (i__38195 + (1));
i__38195 = G__38314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38196),sablono$core$select_options38192_$_iter__38193(cljs.core.chunk_rest(s__38194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38196),null);
}
} else {
var x = cljs.core.first(s__38194__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__38200 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options38192.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options38192.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options38192.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38192_$_iter__38193(cljs.core.rest(s__38194__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options38192);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38203 = (function sablono$core$drop_down38203(var_args){
var G__38205 = arguments.length;
switch (G__38205) {
case 2:
return sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down38203.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down38203.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down38203);
/**
 * Creates a text area element.
 */
sablono.core.text_area38206 = (function sablono$core$text_area38206(var_args){
var G__38208 = arguments.length;
switch (G__38208) {
case 1:
return sablono.core.text_area38206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area38206.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area38206.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area38206.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area38206);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38209 = (function sablono$core$label38209(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label38209);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38210 = (function sablono$core$submit_button38210(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button38210);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38211 = (function sablono$core$reset_button38211(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button38211);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38212 = (function sablono$core$form_to38212(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38317 = arguments.length;
var i__4790__auto___38318 = (0);
while(true){
if((i__4790__auto___38318 < len__4789__auto___38317)){
args__4795__auto__.push((arguments[i__4790__auto___38318]));

var G__38319 = (i__4790__auto___38318 + (1));
i__4790__auto___38318 = G__38319;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38212.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to38212.cljs$core$IFn$_invoke$arity$variadic = (function (p__38215,body){
var vec__38216 = p__38215;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38216,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38216,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__38219 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__38220 = "_method";
var G__38221 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__38219,G__38220,G__38221) : sablono.core.hidden_field.call(null,G__38219,G__38220,G__38221));
})()], null)),body));
}));

(sablono.core.form_to38212.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to38212.cljs$lang$applyTo = (function (seq38213){
var G__38214 = cljs.core.first(seq38213);
var seq38213__$1 = cljs.core.next(seq38213);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38214,seq38213__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to38212);

//# sourceMappingURL=sablono.core.js.map

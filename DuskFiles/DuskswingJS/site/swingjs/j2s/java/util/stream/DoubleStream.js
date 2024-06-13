(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.DoubleStreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfDouble'],['java.util.stream.Streams','.ConcatSpliterator','.OfDouble'],'java.util.stream.Streams']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DoubleStream", function(){
}, null, 'java.util.stream.BaseStream');
C$.$classes$=[['Builder',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, 'builder$',  function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[$I$(3).emptyDoubleSpliterator$(), false]);
}, 1);

Clazz.newMeth(C$, 'of$D',  function (t) {
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(1,1).c$$D,[t]), false]);
}, 1);

Clazz.newMeth(C$, 'of$DA',  function (values) {
return $I$(4).stream$DA(values);
}, 1);

Clazz.newMeth(C$, 'iterate$D$java_util_function_DoubleUnaryOperator',  function (seed, f) {
$I$(5).requireNonNull$O(f);
var iterator=((P$.DoubleStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoubleStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfDouble']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=seed;
},1);

C$.$fields$=[['D',['t']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return true;
});

Clazz.newMeth(C$, 'nextDouble$',  function () {
var v=this.t;
this.t=this.$finals$.f.applyAsDouble$D(this.t);
return v;
});
})()
), Clazz.new_(P$.DoubleStream$1.$init$,[this, {f:f}]));
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[$I$(3).spliteratorUnknownSize$java_util_PrimitiveIterator_OfDouble$I(iterator, 1296), false]);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_DoubleSupplier',  function (s) {
$I$(5).requireNonNull$O(s);
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(6,1).c$$J$java_util_function_DoubleSupplier,[[16777215,549755813887,1], s]), false]);
}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_DoubleStream$java_util_stream_DoubleStream',  function (a, b) {
$I$(5).requireNonNull$O(a);
$I$(5).requireNonNull$O(b);
var split=Clazz.new_([a.spliterator$(), b.spliterator$()],$I$(7,1).c$$java_util_Spliterator_OfDouble$java_util_Spliterator_OfDouble);
var stream=$I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[split, a.isParallel$() || b.isParallel$() ]);
return stream.onClose$Runnable($I$(8).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DoubleStream, "Builder", function(){
}, null, 'java.util.function.DoubleConsumer');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$D',  function (t) {
this.accept$D(t);
return this;
});
};})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

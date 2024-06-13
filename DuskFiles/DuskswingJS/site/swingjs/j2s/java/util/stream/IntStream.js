(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.IntStreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfInt'],['java.util.stream.Streams','.RangeIntSpliterator'],['java.util.stream.Streams','.ConcatSpliterator','.OfInt'],'java.util.stream.Streams']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "IntStream", function(){
}, null, 'java.util.stream.BaseStream');
C$.$classes$=[['Builder',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, 'builder$',  function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[$I$(3).emptyIntSpliterator$(), false]);
}, 1);

Clazz.newMeth(C$, 'of$I',  function (t) {
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(1,1).c$$I,[t]), false]);
}, 1);

Clazz.newMeth(C$, 'of$IA',  function (values) {
return $I$(4).stream$IA(values);
}, 1);

Clazz.newMeth(C$, 'iterate$I$java_util_function_IntUnaryOperator',  function (seed, f) {
$I$(5).requireNonNull$O(f);
var iterator=((P$.IntStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=seed;
},1);

C$.$fields$=[['I',['t']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return true;
});

Clazz.newMeth(C$, 'nextInt$',  function () {
var v=this.t;
this.t=this.$finals$.f.applyAsInt$I(this.t);
return v;
});
})()
), Clazz.new_(P$.IntStream$1.$init$,[this, {f:f}]));
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[$I$(3).spliteratorUnknownSize$java_util_PrimitiveIterator_OfInt$I(iterator, 1296), false]);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_IntSupplier',  function (s) {
$I$(5).requireNonNull$O(s);
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(6,1).c$$J$java_util_function_IntSupplier,[[16777215,549755813887,1], s]), false]);
}, 1);

Clazz.newMeth(C$, 'range$I$I',  function (startInclusive, endExclusive) {
if (startInclusive >= endExclusive) {
return C$.empty$();
} else {
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(7,1).c$$I$I$Z,[startInclusive, endExclusive, false]), false]);
}}, 1);

Clazz.newMeth(C$, 'rangeClosed$I$I',  function (startInclusive, endInclusive) {
if (startInclusive > endInclusive) {
return C$.empty$();
} else {
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(7,1).c$$I$I$Z,[startInclusive, endInclusive, true]), false]);
}}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_IntStream$java_util_stream_IntStream',  function (a, b) {
$I$(5).requireNonNull$O(a);
$I$(5).requireNonNull$O(b);
var split=Clazz.new_([a.spliterator$(), b.spliterator$()],$I$(8,1).c$$java_util_Spliterator_OfInt$java_util_Spliterator_OfInt);
var stream=$I$(2,"intStream$java_util_Spliterator_OfInt$Z",[split, a.isParallel$() || b.isParallel$() ]);
return stream.onClose$Runnable($I$(9).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.IntStream, "Builder", function(){
}, null, 'java.util.function.IntConsumer');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$I',  function (t) {
this.accept$I(t);
return this;
});
};})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

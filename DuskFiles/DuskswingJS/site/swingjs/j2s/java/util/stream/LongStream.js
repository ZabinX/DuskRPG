(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.LongStreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfLong'],['java.util.stream.Streams','.RangeLongSpliterator'],['java.util.stream.Streams','.ConcatSpliterator','.OfLong'],'java.util.stream.Streams']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "LongStream", function(){
}, null, 'java.util.stream.BaseStream');
C$.$classes$=[['Builder',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, 'builder$',  function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[$I$(3).emptyLongSpliterator$(), false]);
}, 1);

Clazz.newMeth(C$, 'of$J',  function (t) {
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(1,1).c$$J,[t]), false]);
}, 1);

Clazz.newMeth(C$, 'of$JA',  function (values) {
return $I$(4).stream$JA(values);
}, 1);

Clazz.newMeth(C$, 'iterate$J$java_util_function_LongUnaryOperator',  function (seed, f) {
$I$(5).requireNonNull$O(f);
var iterator=((P$.LongStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LongStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfLong']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=seed;
},1);

C$.$fields$=[['J',['t']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return true;
});

Clazz.newMeth(C$, 'nextLong$',  function () {
var v=this.t;
this.t=this.$finals$.f.applyAsLong$J(this.t);
return v;
});
})()
), Clazz.new_(P$.LongStream$1.$init$,[this, {f:f}]));
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[$I$(3).spliteratorUnknownSize$java_util_PrimitiveIterator_OfLong$I(iterator, 1296), false]);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_LongSupplier',  function (s) {
$I$(5).requireNonNull$O(s);
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(6,1).c$$J$java_util_function_LongSupplier,[[16777215,549755813887,1], s]), false]);
}, 1);

Clazz.newMeth(C$, 'range$J$J',  function (startInclusive, endExclusive) {
if (Long.$ge(startInclusive,endExclusive )) {
return C$.empty$();
} else if (Long.$lt(Long.$sub(endExclusive,startInclusive),0 )) {
var m=Long.$add(startInclusive,Long.divideUnsigned$J$J(Long.$sub(endExclusive,startInclusive), 2) , 1 );
return C$.concat$java_util_stream_LongStream$java_util_stream_LongStream(C$.range$J$J(startInclusive, m), C$.range$J$J(m, endExclusive));
} else {
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(7,1).c$$J$J$Z,[startInclusive, endExclusive, false]), false]);
}}, 1);

Clazz.newMeth(C$, 'rangeClosed$J$J',  function (startInclusive, endInclusive) {
if (Long.$gt(startInclusive,endInclusive )) {
return C$.empty$();
} else if (Long.$le(Long.$add(Long.$sub(endInclusive,startInclusive),1),0 )) {
var m=Long.$add(startInclusive,Long.divideUnsigned$J$J(Long.$sub(endInclusive,startInclusive), 2) , 1 );
return C$.concat$java_util_stream_LongStream$java_util_stream_LongStream(C$.range$J$J(startInclusive, m), C$.rangeClosed$J$J(m, endInclusive));
} else {
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(7,1).c$$J$J$Z,[startInclusive, endInclusive, true]), false]);
}}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_LongStream$java_util_stream_LongStream',  function (a, b) {
$I$(5).requireNonNull$O(a);
$I$(5).requireNonNull$O(b);
var split=Clazz.new_([a.spliterator$(), b.spliterator$()],$I$(8,1).c$$java_util_Spliterator_OfLong$java_util_Spliterator_OfLong);
var stream=$I$(2,"longStream$java_util_Spliterator_OfLong$Z",[split, a.isParallel$() || b.isParallel$() ]);
return stream.onClose$Runnable($I$(9).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LongStream, "Builder", function(){
}, null, 'java.util.function.LongConsumer');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$J',  function (t) {
this.accept$J(t);
return this;
});
};})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

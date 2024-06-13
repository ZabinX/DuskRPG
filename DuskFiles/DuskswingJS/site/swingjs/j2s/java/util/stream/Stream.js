(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.StreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects','java.util.stream.Streams',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfRef'],['java.util.stream.Streams','.ConcatSpliterator','.OfRef']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Stream", function(){
}, null, 'java.util.stream.BaseStream');
C$.$classes$=[['Builder',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, 'builder$',  function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'empty$',  function () {
return $I$(2,"stream$java_util_Spliterator$Z",[$I$(3).emptySpliterator$(), false]);
}, 1);

Clazz.newMeth(C$, 'of$O',  function (t) {
return $I$(2,"stream$java_util_Spliterator$Z",[Clazz.new_($I$(1,1).c$$O,[t]), false]);
}, 1);

Clazz.newMeth(C$, 'of$OA',  function (values) {
return $I$(4).stream$OA(values);
}, 1);

Clazz.newMeth(C$, 'iterate$O$java_util_function_UnaryOperator',  function (seed, f) {
$I$(5).requireNonNull$O(f);
var iterator=((P$.Stream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Stream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=$I$(6).NONE;
},1);

C$.$fields$=[['O',['t','<T>']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return true;
});

Clazz.newMeth(C$, 'next$',  function () {
return this.t=(this.t === $I$(6).NONE ) ? this.$finals$.seed : this.$finals$.f.apply$O(this.t);
});
})()
), Clazz.new_(P$.Stream$1.$init$,[this, {seed:seed,f:f}]));
return $I$(2,"stream$java_util_Spliterator$Z",[$I$(3).spliteratorUnknownSize$java_util_Iterator$I(iterator, 1040), false]);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_Supplier',  function (s) {
$I$(5).requireNonNull$O(s);
return $I$(2,"stream$java_util_Spliterator$Z",[Clazz.new_($I$(7,1).c$$J$java_util_function_Supplier,[[16777215,549755813887,1], s]), false]);
}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_Stream$java_util_stream_Stream',  function (a, b) {
$I$(5).requireNonNull$O(a);
$I$(5).requireNonNull$O(b);
var split=Clazz.new_([a.spliterator$(), b.spliterator$()],$I$(8,1).c$$java_util_Spliterator$java_util_Spliterator);
var stream=$I$(2,"stream$java_util_Spliterator$Z",[split, a.isParallel$() || b.isParallel$() ]);
return stream.onClose$Runnable($I$(6).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Stream, "Builder", function(){
}, null, 'java.util.function.Consumer');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$O',  function (t) {
this.accept$O(t);
return this;
});
};})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

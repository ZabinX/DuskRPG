(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.Nodes','java.util.stream.StreamShape']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Node", function(){
});
C$.$classes$=[['Builder',9],['OfPrimitive',9],['OfInt',9],['OfLong',9],['OfDouble',9]];
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getChildCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getChild$I',  function (i) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction',  function (from, to, generator) {
if (Long.$eq(from,0 ) && Long.$eq(to,this.count$() ) ) return this;
var spliterator=this.spliterator$();
var size=Long.$sub(to,from);
var nodeBuilder=$I$(1).builder$J$java_util_function_IntFunction(size, generator);
nodeBuilder.begin$J(size);
for (var i=0; Long.$lt(i,from ) && spliterator.tryAdvance$java_util_function_Consumer((P$.Node$lambda1$||(P$.Node$lambda1$=(((P$.Node$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O',  function (e) {
});
})()
), Clazz.new_(P$.Node$lambda1.$init$,[this, null])))))) ; i++) {
}
for (var i=0; (Long.$lt(i,size )) && spliterator.tryAdvance$java_util_function_Consumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'getShape$',  function () {
return $I$(2).REFERENCE;
});
};;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "Builder", function(){
}, null, 'java.util.stream.Sink');
C$.$classes$=[['OfInt',9],['OfLong',9],['OfDouble',9]];

C$.$clinit$=2;
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;
})()
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfPrimitive", function(){
}, null, 'java.util.stream.Node');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getChild$I',  function (i) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction',  function (generator) {
var size=this.count$();
if (Long.$ge(size,2147483639 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var boxed=generator.apply$I(Long.$ival(this.count$()));
this.copyInto$OA$I(boxed, 0);
return boxed;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.IntConsumer")) {
this.forEach$O(consumer);
} else {
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$IntegerA$I','copyInto$OA$I'],  function (boxed, offset) {
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=Integer.valueOf$I(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction',  function (from, to, generator) {
if (Long.$eq(from,0 ) && Long.$eq(to,this.count$() ) ) return this;
var size=Long.$sub(to,from);
var spliterator=this.spliterator$();
var nodeBuilder=$I$(1).intBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; Long.$lt(i,from ) && spliterator.tryAdvance$java_util_function_IntConsumer((P$.Node$OfInt$lambda1$||(P$.Node$OfInt$lambda1$=(((P$.Node$OfInt$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$I','accept$O'],  function (e) {
});
})()
), Clazz.new_(P$.Node$OfInt$lambda1.$init$,[this, null])))))) ; i++) {
}
for (var i=0; (Long.$lt(i,size )) && spliterator.tryAdvance$java_util_function_IntConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I',  function (count) {
return Clazz.array(Integer.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$',  function () {
return $I$(2).INT_VALUE;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.LongConsumer")) {
this.forEach$O(consumer);
} else {
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$LongA$I','copyInto$OA$I'],  function (boxed, offset) {
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=Long.valueOf$J(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction',  function (from, to, generator) {
if (Long.$eq(from,0 ) && Long.$eq(to,this.count$() ) ) return this;
var size=Long.$sub(to,from);
var spliterator=this.spliterator$();
var nodeBuilder=$I$(1).longBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; Long.$lt(i,from ) && spliterator.tryAdvance$java_util_function_LongConsumer((P$.Node$OfLong$lambda1$||(P$.Node$OfLong$lambda1$=(((P$.Node$OfLong$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$J','accept$O'],  function (e) {
});
})()
), Clazz.new_(P$.Node$OfLong$lambda1.$init$,[this, null])))))) ; i++) {
}
for (var i=0; (Long.$lt(i,size )) && spliterator.tryAdvance$java_util_function_LongConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I',  function (count) {
return Clazz.array(Long.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$',  function () {
return $I$(2).LONG_VALUE;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.DoubleConsumer")) {
this.forEach$O(consumer);
} else {
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$DoubleA$I','copyInto$OA$I'],  function (boxed, offset) {
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=Double.valueOf$D(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction',  function (from, to, generator) {
if (Long.$eq(from,0 ) && Long.$eq(to,this.count$() ) ) return this;
var size=Long.$sub(to,from);
var spliterator=this.spliterator$();
var nodeBuilder=$I$(1).doubleBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; Long.$lt(i,from ) && spliterator.tryAdvance$java_util_function_DoubleConsumer((P$.Node$OfDouble$lambda1$||(P$.Node$OfDouble$lambda1$=(((P$.Node$OfDouble$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$D','accept$O'],  function (e) {
});
})()
), Clazz.new_(P$.Node$OfDouble$lambda1.$init$,[this, null])))))) ; i++) {
}
for (var i=0; (Long.$lt(i,size )) && spliterator.tryAdvance$java_util_function_DoubleConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I',  function (count) {
return Clazz.array(Double.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$',  function () {
return $I$(2).DOUBLE_VALUE;
});
};})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

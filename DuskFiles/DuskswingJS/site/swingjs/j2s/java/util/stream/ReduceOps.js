(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.ReduceOps','.ReduceTask'],'java.util.Objects',['java.util.stream.ReduceOps','.Box'],['java.util.stream.ReduceOps','.ReduceOp'],'java.util.stream.StreamShape','java.util.Optional',['java.util.stream.Collector','.Characteristics'],'java.util.stream.StreamOpFlag','java.util.OptionalInt','java.util.OptionalLong','java.util.OptionalDouble']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReduceOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AccumulatingSink',10],['Box',1034],['ReduceOp',1034],['ReduceTask',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$O$java_util_function_BiFunction$java_util_function_BinaryOperator',  function (seed, reducer, combiner) {
$I$(2).requireNonNull$O(reducer);
$I$(2).requireNonNull$O(combiner);
return ((P$.ReduceOps$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_($I$(3,1),[this, {seed:this.$finals$.seed,reducer:this.$finals$.reducer,combiner:this.$finals$.combiner}],P$.ReduceOps$1ReducingSink);
});
})()
), Clazz.new_([this, {seed:seed,reducer:reducer,combiner:combiner}, $I$(5).REFERENCE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$1));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_function_BinaryOperator',  function (operator) {
$I$(2).requireNonNull$O(operator);
return ((P$.ReduceOps$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_(P$.ReduceOps$2ReducingSink.$init$,[this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_([this, {operator:operator}, $I$(5).REFERENCE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$2));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_Collector',  function (collector) {
var supplier=$I$(2).requireNonNull$O(collector).supplier$();
var accumulator=collector.accumulator$();
var combiner=collector.combiner$();
return ((P$.ReduceOps$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_($I$(3,1),[this, {combiner:this.$finals$.combiner,supplier:this.$finals$.supplier,accumulator:this.$finals$.accumulator}],P$.ReduceOps$3ReducingSink);
});

Clazz.newMeth(C$, 'getOpFlags$',  function () {
return this.$finals$.collector.characteristics$().contains$O($I$(7).UNORDERED) ? $I$(8).NOT_ORDERED : 0;
});
})()
), Clazz.new_([this, {combiner:combiner,supplier:supplier,accumulator:accumulator,collector:collector}, $I$(5).REFERENCE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$3));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BiConsumer',  function (seedFactory, accumulator, reducer) {
$I$(2).requireNonNull$O(seedFactory);
$I$(2).requireNonNull$O(accumulator);
$I$(2).requireNonNull$O(reducer);
return ((P$.ReduceOps$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_($I$(3,1),[this, {seedFactory:this.$finals$.seedFactory,accumulator:this.$finals$.accumulator,reducer:this.$finals$.reducer}],P$.ReduceOps$4ReducingSink);
});
})()
), Clazz.new_([this, {seedFactory:seedFactory,accumulator:accumulator,reducer:reducer}, $I$(5).REFERENCE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$4));
}, 1);

Clazz.newMeth(C$, 'makeInt$I$java_util_function_IntBinaryOperator',  function (identity, operator) {
$I$(2).requireNonNull$O(operator);
return ((P$.ReduceOps$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_(P$.ReduceOps$5ReducingSink.$init$,[this, {identity:this.$finals$.identity,operator:this.$finals$.operator}]);
});
})()
), Clazz.new_([this, {identity:identity,operator:operator}, $I$(5).INT_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$5));
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_function_IntBinaryOperator',  function (operator) {
$I$(2).requireNonNull$O(operator);
return ((P$.ReduceOps$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_(P$.ReduceOps$6ReducingSink.$init$,[this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_([this, {operator:operator}, $I$(5).INT_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$6));
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BinaryOperator',  function (supplier, accumulator, combiner) {
$I$(2).requireNonNull$O(supplier);
$I$(2).requireNonNull$O(accumulator);
$I$(2).requireNonNull$O(combiner);
return ((P$.ReduceOps$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_($I$(3,1),[this, {supplier:this.$finals$.supplier,accumulator:this.$finals$.accumulator,combiner:this.$finals$.combiner}],P$.ReduceOps$7ReducingSink);
});
})()
), Clazz.new_([this, {supplier:supplier,accumulator:accumulator,combiner:combiner}, $I$(5).INT_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$7));
}, 1);

Clazz.newMeth(C$, 'makeLong$J$java_util_function_LongBinaryOperator',  function (identity, operator) {
$I$(2).requireNonNull$O(operator);
return ((P$.ReduceOps$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_(P$.ReduceOps$8ReducingSink.$init$,[this, {operator:this.$finals$.operator,identity:this.$finals$.identity}]);
});
})()
), Clazz.new_([this, {operator:operator,identity:identity}, $I$(5).LONG_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$8));
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_function_LongBinaryOperator',  function (operator) {
$I$(2).requireNonNull$O(operator);
return ((P$.ReduceOps$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_(P$.ReduceOps$9ReducingSink.$init$,[this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_([this, {operator:operator}, $I$(5).LONG_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$9));
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_function_Supplier$java_util_function_ObjLongConsumer$java_util_function_BinaryOperator',  function (supplier, accumulator, combiner) {
$I$(2).requireNonNull$O(supplier);
$I$(2).requireNonNull$O(accumulator);
$I$(2).requireNonNull$O(combiner);
return ((P$.ReduceOps$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_($I$(3,1),[this, {accumulator:this.$finals$.accumulator,supplier:this.$finals$.supplier,combiner:this.$finals$.combiner}],P$.ReduceOps$10ReducingSink);
});
})()
), Clazz.new_([this, {accumulator:accumulator,supplier:supplier,combiner:combiner}, $I$(5).LONG_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$10));
}, 1);

Clazz.newMeth(C$, 'makeDouble$D$java_util_function_DoubleBinaryOperator',  function (identity, operator) {
$I$(2).requireNonNull$O(operator);
return ((P$.ReduceOps$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_(P$.ReduceOps$11ReducingSink.$init$,[this, {identity:this.$finals$.identity,operator:this.$finals$.operator}]);
});
})()
), Clazz.new_([this, {identity:identity,operator:operator}, $I$(5).DOUBLE_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$11));
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_function_DoubleBinaryOperator',  function (operator) {
$I$(2).requireNonNull$O(operator);
return ((P$.ReduceOps$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_(P$.ReduceOps$12ReducingSink.$init$,[this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_([this, {operator:operator}, $I$(5).DOUBLE_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$12));
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BinaryOperator',  function (supplier, accumulator, combiner) {
$I$(2).requireNonNull$O(supplier);
$I$(2).requireNonNull$O(accumulator);
$I$(2).requireNonNull$O(combiner);
return ((P$.ReduceOps$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'makeSink$',  function () {
return Clazz.new_($I$(3,1),[this, {supplier:this.$finals$.supplier,accumulator:this.$finals$.accumulator,combiner:this.$finals$.combiner}],P$.ReduceOps$13ReducingSink);
});
})()
), Clazz.new_([this, {supplier:supplier,accumulator:accumulator,combiner:combiner}, $I$(5).DOUBLE_VALUE],$I$(4,1).c$$java_util_stream_StreamShape,P$.ReduceOps$13));
}, 1);
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$1ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.seed;
});

Clazz.newMeth(C$, 'accept$O',  function (t) {
this.state=this.$finals$.reducer.apply$O$O(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$1ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.state=this.$finals$.combiner.apply$O$O(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$2ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['empty'],'O',['state','<T>']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.empty=true;
this.state=null;
});

Clazz.newMeth(C$, 'accept$O',  function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.apply$O$O(this.state, t);
}});

Clazz.newMeth(C$, 'get$',  function () {
return this.empty ? $I$(6).empty$() : $I$(6).of$O(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$2ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
if (!other.empty) this.accept$O(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$3ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, 'accept$O',  function (t) {
this.$finals$.accumulator.accept$O$O(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$3ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.state=this.$finals$.combiner.apply$O$O(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$4ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.seedFactory.get$();
});

Clazz.newMeth(C$, 'accept$O',  function (t) {
this.$finals$.accumulator.accept$O$O(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$4ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.$finals$.reducer.accept$O$O(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$5ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['state']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.identity;
});

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.state=this.$finals$.operator.applyAsInt$I$I(this.state, t);
});

Clazz.newMeth(C$, 'get$',  function () {
return Integer.valueOf$I(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$5ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.accept$I(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$6ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['empty'],'I',['state']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.empty=true;
this.state=0;
});

Clazz.newMeth(C$, 'accept$I',  function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.applyAsInt$I$I(this.state, t);
}});

Clazz.newMeth(C$, 'get$',  function () {
return this.empty ? $I$(9).empty$() : $I$(9).of$I(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$6ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
if (!other.empty) this.accept$I(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$7ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.$finals$.accumulator.accept$O$I(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$7ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.state=this.$finals$.combiner.apply$O$O(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$8ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['state']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.identity;
});

Clazz.newMeth(C$, 'accept$J',  function (t) {
this.state=this.$finals$.operator.applyAsLong$J$J(this.state, t);
});

Clazz.newMeth(C$, 'get$',  function () {
return Long.valueOf$J(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$8ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.accept$J(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$9ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['empty'],'J',['state']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.empty=true;
this.state=0;
});

Clazz.newMeth(C$, 'accept$J',  function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.applyAsLong$J$J(this.state, t);
}});

Clazz.newMeth(C$, 'get$',  function () {
return this.empty ? $I$(10).empty$() : $I$(10).of$J(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$9ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
if (!other.empty) this.accept$J(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$10ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, 'accept$J',  function (t) {
this.$finals$.accumulator.accept$O$J(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$10ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.state=this.$finals$.combiner.apply$O$O(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$11ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['state']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.identity;
});

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.state=this.$finals$.operator.applyAsDouble$D$D(this.state, t);
});

Clazz.newMeth(C$, 'get$',  function () {
return Double.valueOf$D(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$11ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.accept$D(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$12ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['empty'],'D',['state']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.empty=true;
this.state=0;
});

Clazz.newMeth(C$, 'accept$D',  function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.applyAsDouble$D$D(this.state, t);
}});

Clazz.newMeth(C$, 'get$',  function () {
return this.empty ? $I$(11).empty$() : $I$(11).of$D(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$12ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
if (!other.empty) this.accept$D(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$13ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.$finals$.accumulator.accept$O$D(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$13ReducingSink','combine$java_util_stream_ReduceOps_AccumulatingSink'],  function (other) {
this.state=this.$finals$.combiner.apply$O$O(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ReduceOps, "AccumulatingSink", function(){
}, null, 'java.util.stream.TerminalSink');

C$.$clinit$=2;
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReduceOps, "Box", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['state','<U>']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
return this.state;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReduceOps, "ReduceOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.TerminalOp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['inputShape','java.util.stream.StreamShape']]]

Clazz.newMeth(C$, 'c$$java_util_stream_StreamShape',  function (shape) {
;C$.$init$.apply(this);
this.inputShape=shape;
}, 1);

Clazz.newMeth(C$, 'inputShape$',  function () {
return this.inputShape;
});

Clazz.newMeth(C$, 'evaluateSequential$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
return helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(this.makeSink$(), spliterator).get$();
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
return Clazz.new_($I$(1,1).c$$java_util_stream_ReduceOps_ReduceOp$java_util_stream_PipelineHelper$java_util_Spliterator,[this, helper, spliterator]).invoke$().get$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReduceOps, "ReduceTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['op','java.util.stream.ReduceOps.ReduceOp']]]

Clazz.newMeth(C$, 'c$$java_util_stream_ReduceOps_ReduceOp$java_util_stream_PipelineHelper$java_util_Spliterator',  function (op, helper, spliterator) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this,[helper, spliterator]);C$.$init$.apply(this);
this.op=op;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_ReduceOps_ReduceTask$java_util_Spliterator',  function (parent, spliterator) {
;C$.superclazz.c$$java_util_stream_AbstractTask$java_util_Spliterator.apply(this,[parent, spliterator]);C$.$init$.apply(this);
this.op=parent.op;
}, 1);

Clazz.newMeth(C$, 'makeChild$java_util_Spliterator',  function (spliterator) {
return Clazz.new_(C$.c$$java_util_stream_ReduceOps_ReduceTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'doLeaf$',  function () {
return this.helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(this.op.makeSink$(), this.spliterator);
});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter',  function ($caller) {
if (!this.isLeaf$()) {
var leftResult=this.leftChild.getLocalResult$();
leftResult.combine$java_util_stream_ReduceOps_AccumulatingSink(this.rightChild.getLocalResult$());
this.setLocalResult$O(leftResult);
}C$.superclazz.prototype.onCompletion$java_util_concurrent_CountedCompleter.apply(this, [$caller]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.DoublePipeline','java.util.stream.StreamShape','java.util.stream.Nodes',['java.util.stream.StreamSpliterators','.DoubleWrappingSpliterator'],['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfDouble'],'java.util.Spliterators','java.util.Objects',['java.util.stream.Sink','.ChainedDouble'],['java.util.stream.DoublePipeline','.StatelessOp'],'java.util.stream.StreamOpFlag',['java.util.stream.ReferencePipeline','.StatelessOp'],['java.util.stream.IntPipeline','.StatelessOp'],['java.util.stream.LongPipeline','.StatelessOp'],'java.util.stream.SliceOps','java.util.stream.SortedOps','java.util.stream.ForEachOps','java.util.stream.Collectors','java.util.OptionalDouble','java.util.DoubleSummaryStatistics','java.util.stream.ReduceOps','java.util.stream.MatchOps',['java.util.stream.MatchOps','.MatchKind'],'java.util.stream.FindOps']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoublePipeline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractPipeline', 'java.util.stream.DoubleStream');
C$.$classes$=[['Head',8],['StatelessOp',1032],['StatefulOp',1032]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$I$Z',  function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_function_Supplier$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$I$Z',  function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_Spliterator$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$I',  function (upstream, opFlags) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this,[upstream, opFlags]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'adapt$java_util_stream_Sink',  function (sink) {
if (Clazz.instanceOf(sink, "java.util.function.DoubleConsumer")) {
return sink;
} else {
return (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$D','accept$O'],  function (t) { return $$.accept$D.apply($$,[t])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda1.$init$,[this, null])})(sink);
}}, 1);

Clazz.newMeth(C$, 'adapt$java_util_Spliterator',  function (s) {
if (Clazz.instanceOf(s, "java.util.Spliterator.OfDouble")) {
return s;
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["DoubleStream.adapt(Spliterator<Double> s)"]);
}}, 1);

Clazz.newMeth(C$, 'getOutputShape$',  function () {
return $I$(2).DOUBLE_VALUE;
});

Clazz.newMeth(C$, 'evaluateToNode$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction',  function (helper, spliterator, flattenTree, generator) {
return $I$(3).collectDouble$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, spliterator, flattenTree);
});

Clazz.newMeth(C$, 'wrap$java_util_stream_PipelineHelper$java_util_function_Supplier$Z',  function (ph, supplier, isParallel) {
return Clazz.new_($I$(4,1).c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z,[ph, supplier, isParallel]);
});

Clazz.newMeth(C$, 'lazySpliterator$java_util_function_Supplier',  function (supplier) {
return Clazz.new_($I$(5,1).c$$java_util_function_Supplier,[supplier]);
});

Clazz.newMeth(C$, 'forEachWithCancel$java_util_Spliterator$java_util_stream_Sink',  function (spliterator, sink) {
var spl=C$.adapt$java_util_Spliterator(spliterator);
var adaptedSink=C$.adapt$java_util_stream_Sink(sink);
do {
} while (!sink.cancellationRequested$() && spl.tryAdvance$java_util_function_DoubleConsumer(adaptedSink) );
});

Clazz.newMeth(C$, 'makeNodeBuilder$J$java_util_function_IntFunction',  function (exactSizeIfKnown, generator) {
return $I$(3).doubleBuilder$J(exactSizeIfKnown);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return $I$(6,"iterator$java_util_Spliterator_OfDouble",[this.spliterator$()]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return C$.adapt$java_util_Spliterator(C$.superclazz.prototype.spliterator$.apply(this, []));
});

Clazz.newMeth(C$, 'boxed$',  function () {
return this.mapToObj$java_util_function_DoubleFunction((P$.DoublePipeline$lambda2$||(P$.DoublePipeline$lambda2$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$D','apply$O'],  function (t) { return $$.valueOf$D.apply(null,[t])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda2.$init$,[this, null])})(Double)))));
});

Clazz.newMeth(C$, 'map$java_util_function_DoubleUnaryOperator',  function (mapper) {
$I$(7).requireNonNull$O(mapper);
return ((P$.DoublePipeline$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.DoublePipeline$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.downstream.accept$D(this.$finals$.mapper.applyAsDouble$D(t));
});
})()
), Clazz.new_($I$(8,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.DoublePipeline$1$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).DOUBLE_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],$I$(9,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$1));
});

Clazz.newMeth(C$, 'mapToObj$java_util_function_DoubleFunction',  function (mapper) {
$I$(7).requireNonNull$O(mapper);
return ((P$.DoublePipeline$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.DoublePipeline$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.downstream.accept$O(this.$finals$.mapper.apply$D(t));
});
})()
), Clazz.new_($I$(8,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.DoublePipeline$2$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).DOUBLE_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],$I$(11,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$2));
});

Clazz.newMeth(C$, 'mapToInt$java_util_function_DoubleToIntFunction',  function (mapper) {
$I$(7).requireNonNull$O(mapper);
return ((P$.DoublePipeline$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.DoublePipeline$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.downstream.accept$I(this.$finals$.mapper.applyAsInt$D(t));
});
})()
), Clazz.new_($I$(8,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.DoublePipeline$3$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).DOUBLE_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$3));
});

Clazz.newMeth(C$, 'mapToLong$java_util_function_DoubleToLongFunction',  function (mapper) {
$I$(7).requireNonNull$O(mapper);
return ((P$.DoublePipeline$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.DoublePipeline$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.downstream.accept$J(this.$finals$.mapper.applyAsLong$D(t));
});
})()
), Clazz.new_($I$(8,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.DoublePipeline$4$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).DOUBLE_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],$I$(13,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$4));
});

Clazz.newMeth(C$, 'flatMap$java_util_function_DoubleFunction',  function (mapper) {
return ((P$.DoublePipeline$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.DoublePipeline$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'accept$D',  function (t) {
try {
var result=this.$finals$.mapper.apply$D(t);
try {
if (result != null ) result.sequential$().forEach$java_util_function_DoubleConsumer(((P$.DoublePipeline$5$1$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$5$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$D','accept$O'],  function (i) { return (this.b$['java.util.stream.DoublePipeline$5$1'].downstream.accept$D.apply(this.b$['java.util.stream.DoublePipeline$5$1'].downstream, [i]));});
})()
), Clazz.new_(P$.DoublePipeline$5$1$lambda3.$init$,[this, null])));

}finally{/*res*/result&&result.close$&&result.close$();}
}finally{}
});
})()
), Clazz.new_($I$(8,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.DoublePipeline$5$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).DOUBLE_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT | $I$(10).NOT_SIZED ],$I$(9,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$5));
});

Clazz.newMeth(C$, 'unordered$',  function () {
if (!this.isOrdered$()) return this;
return ((P$.DoublePipeline$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return sink;
});
})()
), Clazz.new_([this, null, this, $I$(2).DOUBLE_VALUE, $I$(10).NOT_ORDERED],$I$(9,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$6));
});

Clazz.newMeth(C$, 'filter$java_util_function_DoublePredicate',  function (predicate) {
$I$(7).requireNonNull$O(predicate);
return ((P$.DoublePipeline$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.DoublePipeline$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'accept$D',  function (t) {
if (this.$finals$.predicate.test$D(t)) this.downstream.accept$D(t);
});
})()
), Clazz.new_($I$(8,1).c$$java_util_stream_Sink,[this, {predicate:this.$finals$.predicate}, sink],P$.DoublePipeline$7$1));
});
})()
), Clazz.new_([this, {predicate:predicate}, this, $I$(2).DOUBLE_VALUE, $I$(10).NOT_SIZED],$I$(9,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$7));
});

Clazz.newMeth(C$, 'peek$java_util_function_DoubleConsumer',  function (action) {
$I$(7).requireNonNull$O(action);
return ((P$.DoublePipeline$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.DoublePipeline$8$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DoublePipeline$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.$finals$.action.accept$D(t);
this.downstream.accept$D(t);
});
})()
), Clazz.new_($I$(8,1).c$$java_util_stream_Sink,[this, {action:this.$finals$.action}, sink],P$.DoublePipeline$8$1));
});
})()
), Clazz.new_([this, {action:action}, this, $I$(2).DOUBLE_VALUE, 0],$I$(9,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DoublePipeline$8));
});

Clazz.newMeth(C$, 'limit$J',  function (maxSize) {
if (Long.$lt(maxSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(maxSize)]);
return $I$(14).makeDouble$java_util_stream_AbstractPipeline$J$J(this, 0, maxSize);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$lt(n,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(n)]);
if (Long.$eq(n,0 )) return this;
 else {
var limit=-1;
return $I$(14).makeDouble$java_util_stream_AbstractPipeline$J$J(this, n, limit);
}});

Clazz.newMeth(C$, 'sorted$',  function () {
return $I$(15).makeDouble$java_util_stream_AbstractPipeline(this);
});

Clazz.newMeth(C$, 'distinct$',  function () {
return this.boxed$().distinct$().mapToDouble$java_util_function_ToDoubleFunction((P$.DoublePipeline$lambda3$||(P$.DoublePipeline$lambda3$=(((P$.DoublePipeline$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToDoubleFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsDouble$Double','applyAsDouble$O'],  function (i) { return ((i).valueOf());});
})()
), Clazz.new_(P$.DoublePipeline$lambda3.$init$,[this, null]))))));
});

Clazz.newMeth(C$, 'forEach$java_util_function_DoubleConsumer',  function (consumer) {
this.evaluate$java_util_stream_TerminalOp($I$(16).makeDouble$java_util_function_DoubleConsumer$Z(consumer, false));
});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_DoubleConsumer',  function (consumer) {
this.evaluate$java_util_stream_TerminalOp($I$(16).makeDouble$java_util_function_DoubleConsumer$Z(consumer, true));
});

Clazz.newMeth(C$, 'sum$',  function () {
var summation=this.collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer((P$.DoublePipeline$lambda4$||(P$.DoublePipeline$lambda4$=(((P$.DoublePipeline$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Double.TYPE, [3]));});
})()
), Clazz.new_(P$.DoublePipeline$lambda4.$init$,[this, null]))))), (P$.DoublePipeline$lambda5$||(P$.DoublePipeline$lambda5$=(((P$.DoublePipeline$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjDoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$DA$D','accept$O$O'],  function (ll, d) {
$I$(17).sumWithCompensation$DA$D(ll, d);
ll[2]+=d;
});
})()
), Clazz.new_(P$.DoublePipeline$lambda5.$init$,[this, null]))))), (P$.DoublePipeline$lambda6$||(P$.DoublePipeline$lambda6$=(((P$.DoublePipeline$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$DA$DA','accept$O$O'],  function (ll, rr) {
$I$(17).sumWithCompensation$DA$D(ll, rr[0]);
$I$(17).sumWithCompensation$DA$D(ll, rr[1]);
ll[2]+=rr[2];
});
})()
), Clazz.new_(P$.DoublePipeline$lambda6.$init$,[this, null]))))));
return $I$(17).computeFinalSum$DA(summation);
});

Clazz.newMeth(C$, 'min$',  function () {
return this.reduce$java_util_function_DoubleBinaryOperator((P$.DoublePipeline$lambda7$||(P$.DoublePipeline$lambda7$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleBinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['applyAsDouble$D$D','applyAsDouble$O$O'],  function (t,u) { return $$.min.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda7.$init$,[this, null])})(Math)))));
});

Clazz.newMeth(C$, 'max$',  function () {
return this.reduce$java_util_function_DoubleBinaryOperator((P$.DoublePipeline$lambda8$||(P$.DoublePipeline$lambda8$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleBinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['applyAsDouble$D$D','applyAsDouble$O$O'],  function (t,u) { return $$.max.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda8.$init$,[this, null])})(Math)))));
});

Clazz.newMeth(C$, 'average$',  function () {
var avg=this.collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer((P$.DoublePipeline$lambda9$||(P$.DoublePipeline$lambda9$=(((P$.DoublePipeline$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Double.TYPE, [4]));});
})()
), Clazz.new_(P$.DoublePipeline$lambda9.$init$,[this, null]))))), (P$.DoublePipeline$lambda10$||(P$.DoublePipeline$lambda10$=(((P$.DoublePipeline$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjDoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$DA$D','accept$O$O'],  function (ll, d) {
++ll[2];
$I$(17).sumWithCompensation$DA$D(ll, d);
ll[3]+=d;
});
})()
), Clazz.new_(P$.DoublePipeline$lambda10.$init$,[this, null]))))), (P$.DoublePipeline$lambda11$||(P$.DoublePipeline$lambda11$=(((P$.DoublePipeline$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$DA$DA','accept$O$O'],  function (ll, rr) {
$I$(17).sumWithCompensation$DA$D(ll, rr[0]);
$I$(17).sumWithCompensation$DA$D(ll, rr[1]);
ll[2]+=rr[2];
ll[3]+=rr[3];
});
})()
), Clazz.new_(P$.DoublePipeline$lambda11.$init$,[this, null]))))));
return avg[2] > 0  ? $I$(18,"of$D",[$I$(17).computeFinalSum$DA(avg) / avg[2]]) : $I$(18).empty$();
});

Clazz.newMeth(C$, 'count$',  function () {
return this.mapToLong$java_util_function_DoubleToLongFunction((P$.DoublePipeline$lambda12$||(P$.DoublePipeline$lambda12$=(((P$.DoublePipeline$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleToLongFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsLong$D','applyAsLong$O'],  function (e) { return (1);});
})()
), Clazz.new_(P$.DoublePipeline$lambda12.$init$,[this, null])))))).sum$();
});

Clazz.newMeth(C$, 'summaryStatistics$',  function () {
return this.collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer(((P$.DoublePipeline$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(19,1),[])});
})()
), Clazz.new_(P$.DoublePipeline$lambda13.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjDoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$O$D','accept$O$O'],  function (t,u) { return t.accept$D.apply(t,[u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda14.$init$,[this, null])})($I$(19)), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.combine$java_util_DoubleSummaryStatistics.apply(t,[u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda15.$init$,[this, null])})($I$(19)));
});

Clazz.newMeth(C$, 'reduce$D$java_util_function_DoubleBinaryOperator',  function (identity, op) {
return (this.evaluate$java_util_stream_TerminalOp($I$(20).makeDouble$D$java_util_function_DoubleBinaryOperator(identity, op))).valueOf();
});

Clazz.newMeth(C$, 'reduce$java_util_function_DoubleBinaryOperator',  function (op) {
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeDouble$java_util_function_DoubleBinaryOperator(op));
});

Clazz.newMeth(C$, 'collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer',  function (supplier, accumulator, combiner) {
var operator=((P$.DoublePipeline$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O',  function (left, right) {
this.$finals$.combiner.accept$O$O.apply(this.$finals$.combiner, [left, right]);
return left;
});
})()
), Clazz.new_(P$.DoublePipeline$lambda16.$init$,[this, {combiner:combiner}]));
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeDouble$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BinaryOperator(supplier, accumulator, operator));
});

Clazz.newMeth(C$, 'anyMatch$java_util_function_DoublePredicate',  function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21,"makeDouble$java_util_function_DoublePredicate$java_util_stream_MatchOps_MatchKind",[predicate, $I$(22).ANY]))).valueOf();
});

Clazz.newMeth(C$, 'allMatch$java_util_function_DoublePredicate',  function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21,"makeDouble$java_util_function_DoublePredicate$java_util_stream_MatchOps_MatchKind",[predicate, $I$(22).ALL]))).valueOf();
});

Clazz.newMeth(C$, 'noneMatch$java_util_function_DoublePredicate',  function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21,"makeDouble$java_util_function_DoublePredicate$java_util_stream_MatchOps_MatchKind",[predicate, $I$(22).NONE]))).valueOf();
});

Clazz.newMeth(C$, 'findFirst$',  function () {
return this.evaluate$java_util_stream_TerminalOp($I$(23).makeDouble$Z(true));
});

Clazz.newMeth(C$, 'findAny$',  function () {
return this.evaluate$java_util_stream_TerminalOp($I$(23).makeDouble$Z(false));
});

Clazz.newMeth(C$, 'toArray$',  function () {
return $I$(3,"flattenDouble$java_util_stream_Node_OfDouble",[this.evaluateToArrayNode$java_util_function_IntFunction(((P$.DoublePipeline$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoublePipeline$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$I',  function (t) { return Clazz.array(Double, [t.intValue()])});
})()
), Clazz.new_(P$.DoublePipeline$lambda17.$init$,[this, null])))]).asPrimitiveArray$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoublePipeline, "Head", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.DoublePipeline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$I$Z',  function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_function_Supplier$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$I$Z',  function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_Spliterator$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'opIsStateful$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'forEach$java_util_function_DoubleConsumer',  function (consumer) {
if (!this.isParallel$()) {
$I$(1,"adapt$java_util_Spliterator",[this.sourceStageSpliterator$()]).forEachRemaining$java_util_function_DoubleConsumer(consumer);
} else {
C$.superclazz.prototype.forEach$java_util_function_DoubleConsumer.apply(this, [consumer]);
}});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_DoubleConsumer',  function (consumer) {
if (!this.isParallel$()) {
$I$(1,"adapt$java_util_Spliterator",[this.sourceStageSpliterator$()]).forEachRemaining$java_util_function_DoubleConsumer(consumer);
} else {
C$.superclazz.prototype.forEachOrdered$java_util_function_DoubleConsumer.apply(this, [consumer]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoublePipeline, "StatelessOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.DoublePipeline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I',  function (upstream, inputShape, opFlags) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this,[upstream, opFlags]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return upstream.getOutputShape$() === inputShape });
}, 1);

Clazz.newMeth(C$, 'opIsStateful$',  function () {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoublePipeline, "StatefulOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.DoublePipeline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I',  function (upstream, inputShape, opFlags) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this,[upstream, opFlags]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return upstream.getOutputShape$() === inputShape });
}, 1);

Clazz.newMeth(C$, 'opIsStateful$',  function () {
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.IntPipeline','java.util.stream.StreamShape','java.util.stream.Nodes',['java.util.stream.StreamSpliterators','.IntWrappingSpliterator'],['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfInt'],'java.util.Spliterators',['java.util.stream.Sink','.ChainedInt'],['java.util.stream.LongPipeline','.StatelessOp'],'java.util.stream.StreamOpFlag',['java.util.stream.DoublePipeline','.StatelessOp'],'java.util.Objects',['java.util.stream.IntPipeline','.StatelessOp'],['java.util.stream.ReferencePipeline','.StatelessOp'],'java.util.stream.SliceOps','java.util.stream.SortedOps','java.util.stream.ForEachOps','java.util.OptionalDouble','java.util.IntSummaryStatistics','java.util.stream.ReduceOps','java.util.stream.MatchOps',['java.util.stream.MatchOps','.MatchKind'],'java.util.stream.FindOps']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntPipeline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractPipeline', 'java.util.stream.IntStream');
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
if (Clazz.instanceOf(sink, "java.util.function.IntConsumer")) {
return sink;
} else {
return (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$I','accept$O'],  function (t) { return $$.accept$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda1.$init$,[this, null])})(sink);
}}, 1);

Clazz.newMeth(C$, 'adapt$java_util_Spliterator',  function (s) {
if (Clazz.instanceOf(s, "java.util.Spliterator.OfInt")) {
return s;
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["IntStream.adapt(Spliterator<Integer> s)"]);
}}, 1);

Clazz.newMeth(C$, 'getOutputShape$',  function () {
return $I$(2).INT_VALUE;
});

Clazz.newMeth(C$, 'evaluateToNode$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction',  function (helper, spliterator, flattenTree, generator) {
return $I$(3).collectInt$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, spliterator, flattenTree);
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
} while (!sink.cancellationRequested$() && spl.tryAdvance$java_util_function_IntConsumer(adaptedSink) );
});

Clazz.newMeth(C$, 'makeNodeBuilder$J$java_util_function_IntFunction',  function (exactSizeIfKnown, generator) {
return $I$(3).intBuilder$J(exactSizeIfKnown);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return $I$(6,"iterator$java_util_Spliterator_OfInt",[this.spliterator$()]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return C$.adapt$java_util_Spliterator(C$.superclazz.prototype.spliterator$.apply(this, []));
});

Clazz.newMeth(C$, 'asLongStream$',  function () {
return ((P$.IntPipeline$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.downstream.accept$J(t);
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, null, sink],P$.IntPipeline$1$1));
});
})()
), Clazz.new_([this, null, this, $I$(2).INT_VALUE, $I$(9).NOT_SORTED | $I$(9).NOT_DISTINCT],$I$(8,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$1));
});

Clazz.newMeth(C$, 'asDoubleStream$',  function () {
return ((P$.IntPipeline$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.downstream.accept$D(t);
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, null, sink],P$.IntPipeline$2$1));
});
})()
), Clazz.new_([this, null, this, $I$(2).INT_VALUE, $I$(9).NOT_SORTED | $I$(9).NOT_DISTINCT],$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$2));
});

Clazz.newMeth(C$, 'boxed$',  function () {
return this.mapToObj$java_util_function_IntFunction((P$.IntPipeline$lambda2$||(P$.IntPipeline$lambda2$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$I','apply$O'],  function (t) { return $$.valueOf$I.apply(null,[t])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda2.$init$,[this, null])})(Integer)))));
});

Clazz.newMeth(C$, 'map$java_util_function_IntUnaryOperator',  function (mapper) {
$I$(11).requireNonNull$O(mapper);
return ((P$.IntPipeline$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.downstream.accept$I(this.$finals$.mapper.applyAsInt$I(t));
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.IntPipeline$3$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).INT_VALUE, $I$(9).NOT_SORTED | $I$(9).NOT_DISTINCT],$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$3));
});

Clazz.newMeth(C$, 'mapToObj$java_util_function_IntFunction',  function (mapper) {
$I$(11).requireNonNull$O(mapper);
return ((P$.IntPipeline$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.downstream.accept$O(this.$finals$.mapper.apply$I(t));
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.IntPipeline$4$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).INT_VALUE, $I$(9).NOT_SORTED | $I$(9).NOT_DISTINCT],$I$(13,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$4));
});

Clazz.newMeth(C$, 'mapToLong$java_util_function_IntToLongFunction',  function (mapper) {
$I$(11).requireNonNull$O(mapper);
return ((P$.IntPipeline$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.downstream.accept$J(this.$finals$.mapper.applyAsLong$I(t));
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.IntPipeline$5$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).INT_VALUE, $I$(9).NOT_SORTED | $I$(9).NOT_DISTINCT],$I$(8,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$5));
});

Clazz.newMeth(C$, 'mapToDouble$java_util_function_IntToDoubleFunction',  function (mapper) {
$I$(11).requireNonNull$O(mapper);
return ((P$.IntPipeline$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$6$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$6$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.downstream.accept$D(this.$finals$.mapper.applyAsDouble$I(t));
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.IntPipeline$6$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).INT_VALUE, $I$(9).NOT_SORTED | $I$(9).NOT_DISTINCT],$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$6));
});

Clazz.newMeth(C$, 'flatMap$java_util_function_IntFunction',  function (mapper) {
return ((P$.IntPipeline$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'accept$I',  function (t) {
try {
var result=this.$finals$.mapper.apply$I(t);
try {
if (result != null ) result.sequential$().forEach$java_util_function_IntConsumer(((P$.IntPipeline$7$1$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$7$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$I','accept$O'],  function (i) { return (this.b$['java.util.stream.IntPipeline$7$1'].downstream.accept$I.apply(this.b$['java.util.stream.IntPipeline$7$1'].downstream, [i]));});
})()
), Clazz.new_(P$.IntPipeline$7$1$lambda3.$init$,[this, null])));

}finally{/*res*/result&&result.close$&&result.close$();}
}finally{}
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, {mapper:this.$finals$.mapper}, sink],P$.IntPipeline$7$1));
});
})()
), Clazz.new_([this, {mapper:mapper}, this, $I$(2).INT_VALUE, $I$(9).NOT_SORTED | $I$(9).NOT_DISTINCT | $I$(9).NOT_SIZED ],$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$7));
});

Clazz.newMeth(C$, 'unordered$',  function () {
if (!this.isOrdered$()) return this;
return ((P$.IntPipeline$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return sink;
});
})()
), Clazz.new_([this, null, this, $I$(2).INT_VALUE, $I$(9).NOT_ORDERED],$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$8));
});

Clazz.newMeth(C$, 'filter$java_util_function_IntPredicate',  function (predicate) {
$I$(11).requireNonNull$O(predicate);
return ((P$.IntPipeline$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$9$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$9$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'accept$I',  function (t) {
if (this.$finals$.predicate.test$I(t)) this.downstream.accept$I(t);
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, {predicate:this.$finals$.predicate}, sink],P$.IntPipeline$9$1));
});
})()
), Clazz.new_([this, {predicate:predicate}, this, $I$(2).INT_VALUE, $I$(9).NOT_SIZED],$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$9));
});

Clazz.newMeth(C$, 'peek$java_util_function_IntConsumer',  function (action) {
$I$(11).requireNonNull$O(action);
return ((P$.IntPipeline$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.IntPipeline$10$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IntPipeline$10$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.$finals$.action.accept$I(t);
this.downstream.accept$I(t);
});
})()
), Clazz.new_($I$(7,1).c$$java_util_stream_Sink,[this, {action:this.$finals$.action}, sink],P$.IntPipeline$10$1));
});
})()
), Clazz.new_([this, {action:action}, this, $I$(2).INT_VALUE, 0],$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.IntPipeline$10));
});

Clazz.newMeth(C$, 'limit$J',  function (maxSize) {
if (Long.$lt(maxSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(maxSize)]);
return $I$(14).makeInt$java_util_stream_AbstractPipeline$J$J(this, 0, maxSize);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$lt(n,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(n)]);
if (Long.$eq(n,0 )) return this;
 else return $I$(14).makeInt$java_util_stream_AbstractPipeline$J$J(this, n, -1);
});

Clazz.newMeth(C$, 'sorted$',  function () {
return $I$(15).makeInt$java_util_stream_AbstractPipeline(this);
});

Clazz.newMeth(C$, 'distinct$',  function () {
return this.boxed$().distinct$().mapToInt$java_util_function_ToIntFunction((P$.IntPipeline$lambda3$||(P$.IntPipeline$lambda3$=(((P$.IntPipeline$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsInt$Integer','applyAsInt$O'],  function (i) { return (i);});
})()
), Clazz.new_(P$.IntPipeline$lambda3.$init$,[this, null]))))));
});

Clazz.newMeth(C$, 'forEach$java_util_function_IntConsumer',  function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(16).makeInt$java_util_function_IntConsumer$Z(action, false));
});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_IntConsumer',  function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(16).makeInt$java_util_function_IntConsumer$Z(action, true));
});

Clazz.newMeth(C$, 'sum$',  function () {
return this.reduce$I$java_util_function_IntBinaryOperator(0, (P$.IntPipeline$lambda4$||(P$.IntPipeline$lambda4$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntBinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['applyAsInt$I$I','applyAsInt$O$O'],  function (t,u) { return $$.sum$I$I.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda4.$init$,[this, null])})(Integer)))));
});

Clazz.newMeth(C$, 'min$',  function () {
return this.reduce$java_util_function_IntBinaryOperator((P$.IntPipeline$lambda5$||(P$.IntPipeline$lambda5$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntBinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['applyAsInt$I$I','applyAsInt$O$O'],  function (t,u) { return $$.min.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda5.$init$,[this, null])})(Math)))));
});

Clazz.newMeth(C$, 'max$',  function () {
return this.reduce$java_util_function_IntBinaryOperator((P$.IntPipeline$lambda6$||(P$.IntPipeline$lambda6$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntBinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['applyAsInt$I$I','applyAsInt$O$O'],  function (t,u) { return $$.max.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda6.$init$,[this, null])})(Math)))));
});

Clazz.newMeth(C$, 'count$',  function () {
return this.mapToLong$java_util_function_IntToLongFunction((P$.IntPipeline$lambda7$||(P$.IntPipeline$lambda7$=(((P$.IntPipeline$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntToLongFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsLong$I','applyAsLong$O'],  function (e) { return (1);});
})()
), Clazz.new_(P$.IntPipeline$lambda7.$init$,[this, null])))))).sum$();
});

Clazz.newMeth(C$, 'average$',  function () {
var avg=this.collect$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BiConsumer((P$.IntPipeline$lambda8$||(P$.IntPipeline$lambda8$=(((P$.IntPipeline$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Long.TYPE, [2]));});
})()
), Clazz.new_(P$.IntPipeline$lambda8.$init$,[this, null]))))), (P$.IntPipeline$lambda9$||(P$.IntPipeline$lambda9$=(((P$.IntPipeline$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjIntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$JA$I','accept$O$O'],  function (ll, i) {
(Clazz.incrAN(ll,0,1,false));
(ll[1]=Long.$add(ll[1],(i)));
});
})()
), Clazz.new_(P$.IntPipeline$lambda9.$init$,[this, null]))))), (P$.IntPipeline$lambda10$||(P$.IntPipeline$lambda10$=(((P$.IntPipeline$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$JA$JA','accept$O$O'],  function (ll, rr) {
(ll[0]=Long.$add(ll[0],(rr[0])));
(ll[1]=Long.$add(ll[1],(rr[1])));
});
})()
), Clazz.new_(P$.IntPipeline$lambda10.$init$,[this, null]))))));
return Long.$gt(avg[0],0 ) ? $I$(17,"of$D",[Long.$dval(avg[1]) / avg[0]]) : $I$(17).empty$();
});

Clazz.newMeth(C$, 'summaryStatistics$',  function () {
return this.collect$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BiConsumer(((P$.IntPipeline$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(18,1),[])});
})()
), Clazz.new_(P$.IntPipeline$lambda11.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjIntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$O$I','accept$O$O'],  function (t,u) { return t.accept$I.apply(t,[u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda12.$init$,[this, null])})($I$(18)), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.combine$java_util_IntSummaryStatistics.apply(t,[u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda13.$init$,[this, null])})($I$(18)));
});

Clazz.newMeth(C$, 'reduce$I$java_util_function_IntBinaryOperator',  function (identity, op) {
return (this.evaluate$java_util_stream_TerminalOp($I$(19).makeInt$I$java_util_function_IntBinaryOperator(identity, op))).$c();
});

Clazz.newMeth(C$, 'reduce$java_util_function_IntBinaryOperator',  function (op) {
return this.evaluate$java_util_stream_TerminalOp($I$(19).makeInt$java_util_function_IntBinaryOperator(op));
});

Clazz.newMeth(C$, 'collect$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BiConsumer',  function (supplier, accumulator, combiner) {
var operator=((P$.IntPipeline$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O',  function (left, right) {
this.$finals$.combiner.accept$O$O.apply(this.$finals$.combiner, [left, right]);
return left;
});
})()
), Clazz.new_(P$.IntPipeline$lambda14.$init$,[this, {combiner:combiner}]));
return this.evaluate$java_util_stream_TerminalOp($I$(19).makeInt$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BinaryOperator(supplier, accumulator, operator));
});

Clazz.newMeth(C$, 'anyMatch$java_util_function_IntPredicate',  function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(20,"makeInt$java_util_function_IntPredicate$java_util_stream_MatchOps_MatchKind",[predicate, $I$(21).ANY]))).valueOf();
});

Clazz.newMeth(C$, 'allMatch$java_util_function_IntPredicate',  function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(20,"makeInt$java_util_function_IntPredicate$java_util_stream_MatchOps_MatchKind",[predicate, $I$(21).ALL]))).valueOf();
});

Clazz.newMeth(C$, 'noneMatch$java_util_function_IntPredicate',  function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(20,"makeInt$java_util_function_IntPredicate$java_util_stream_MatchOps_MatchKind",[predicate, $I$(21).NONE]))).valueOf();
});

Clazz.newMeth(C$, 'findFirst$',  function () {
return this.evaluate$java_util_stream_TerminalOp($I$(22).makeInt$Z(true));
});

Clazz.newMeth(C$, 'findAny$',  function () {
return this.evaluate$java_util_stream_TerminalOp($I$(22).makeInt$Z(false));
});

Clazz.newMeth(C$, 'toArray$',  function () {
return $I$(3,"flattenInt$java_util_stream_Node_OfInt",[this.evaluateToArrayNode$java_util_function_IntFunction(((P$.IntPipeline$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPipeline$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$I',  function (t) { return Clazz.array(Integer, [t.intValue()])});
})()
), Clazz.new_(P$.IntPipeline$lambda15.$init$,[this, null])))]).asPrimitiveArray$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.IntPipeline, "Head", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.IntPipeline');

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

Clazz.newMeth(C$, 'forEach$java_util_function_IntConsumer',  function (action) {
if (!this.isParallel$()) {
$I$(1,"adapt$java_util_Spliterator",[this.sourceStageSpliterator$()]).forEachRemaining$java_util_function_IntConsumer(action);
} else {
C$.superclazz.prototype.forEach$java_util_function_IntConsumer.apply(this, [action]);
}});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_IntConsumer',  function (action) {
if (!this.isParallel$()) {
$I$(1,"adapt$java_util_Spliterator",[this.sourceStageSpliterator$()]).forEachRemaining$java_util_function_IntConsumer(action);
} else {
C$.superclazz.prototype.forEachOrdered$java_util_function_IntConsumer.apply(this, [action]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.IntPipeline, "StatelessOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.IntPipeline');

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
(function(){/*c*/var C$=Clazz.newClass(P$.IntPipeline, "StatefulOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.IntPipeline');

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

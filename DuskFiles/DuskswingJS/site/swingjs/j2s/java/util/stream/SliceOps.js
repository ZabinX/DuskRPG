(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},I$=[[0,'java.util.stream.Nodes','java.util.stream.StreamOpFlag','java.util.stream.StreamShape',['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfRef'],['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfInt'],['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfLong'],['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfDouble'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfRef'],'java.util.stream.SliceOps',['java.util.stream.SliceOps','.SliceTask'],['java.util.stream.Sink','.ChainedReference'],['java.util.stream.ReferencePipeline','.StatefulOp'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfInt'],['java.util.stream.Sink','.ChainedInt'],['java.util.stream.IntPipeline','.StatefulOp'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfLong'],['java.util.stream.Sink','.ChainedLong'],['java.util.stream.LongPipeline','.StatefulOp'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfDouble'],['java.util.stream.Sink','.ChainedDouble'],['java.util.stream.DoublePipeline','.StatefulOp']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SliceOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SliceTask',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calcSize$J$J$J',  function (size, skip, limit) {
return Long.$ge(size,0 ) ? Math.max$J$J(-1, Math.min$J$J(Long.$sub(size,skip), limit)) : -1;
}, 1);

Clazz.newMeth(C$, 'calcSliceFence$J$J',  function (skip, limit) {
var sliceFence=Long.$ge(limit,0 ) ? Long.$add(skip,limit) : [16777215,549755813887,1];
return (Long.$ge(sliceFence,0 )) ? sliceFence : [16777215,549755813887,1];
}, 1);

Clazz.newMeth(C$, 'sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J',  function (shape, s, skip, limit) {
Clazz.assert(C$, this, function(){return s.hasCharacteristics$I(16384)});
var sliceFence=C$.calcSliceFence$J$J(skip, limit);
switch (shape) {
case $I$(3).REFERENCE:
return Clazz.new_($I$(4,1).c$$java_util_Spliterator$J$J,[s, skip, sliceFence]);
case $I$(3).INT_VALUE:
return Clazz.new_($I$(5,1).c$$java_util_Spliterator_OfInt$J$J,[s, skip, sliceFence]);
case $I$(3).LONG_VALUE:
return Clazz.new_($I$(6,1).c$$java_util_Spliterator_OfLong$J$J,[s, skip, sliceFence]);
case $I$(3).DOUBLE_VALUE:
return Clazz.new_($I$(7,1).c$$java_util_Spliterator_OfDouble$J$J,[s, skip, sliceFence]);
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unknown shape " + shape]);
}
}, 1);

Clazz.newMeth(C$, 'castingArray$',  function () {
return (P$.SliceOps$lambda1$||(P$.SliceOps$lambda1$=(((P$.SliceOps$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "SliceOps$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$I','apply$O'],  function (size) { return (Clazz.array(java.lang.Object, [size]));});
})()
), Clazz.new_(P$.SliceOps$lambda1.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_AbstractPipeline$J$J',  function (upstream, skip, limit) {
if (Long.$lt(skip,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + Long.$s(skip)]);
return ((P$.SliceOps$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatefulOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator$J$J$J',  function (s, skip, limit, sizeIfKnown) {
if (Long.$le(skip,sizeIfKnown )) {
limit=Long.$ge(limit,0 ) ? Math.min$J$J(limit, Long.$sub(sizeIfKnown,skip)) : Long.$sub(sizeIfKnown,skip);
skip=0;
}return Clazz.new_($I$(8,1).c$$java_util_Spliterator$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_([helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, $I$(9).calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)],$I$(4,1).c$$java_util_Spliterator$J$J);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_([this, helper, spliterator, $I$(9).castingArray$(), this.$finals$.skip, this.$finals$.limit],$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction',  function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
var s=$I$(9,"sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J",[helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit]);
return $I$(1).collect$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction(helper, s, true, generator);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collect$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction(this, s, true, generator);
} else {
return Clazz.new_($I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.SliceOps$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=Long.$ge(this.$finals$.limit,0 ) ? this.$finals$.limit : [16777215,549755813887,1];
},1);

C$.$fields$=[['J',['n','m']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J($I$(9).calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, 'accept$O',  function (t) {
if (Long.$eq(this.n,0 )) {
if (Long.$gt(this.m,0 )) {
(this.m=Long.$inc(this.m,-1));
this.downstream.accept$O(t);
}} else {
(this.n=Long.$inc(this.n,-1));
}});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return Long.$eq(this.m,0 ) || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(11,1).c$$java_util_stream_Sink,[this, {limit:this.$finals$.limit,skip:this.$finals$.skip}, sink],P$.SliceOps$1$1));
});
})()
), Clazz.new_([this, {limit:limit,skip:skip}, upstream, $I$(3).REFERENCE, C$.flags$J(limit)],$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.SliceOps$1));
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_stream_AbstractPipeline$J$J',  function (upstream, skip, limit) {
if (Long.$lt(skip,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + Long.$s(skip)]);
return ((P$.SliceOps$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatefulOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator_OfInt$J$J$J',  function (s, skip, limit, sizeIfKnown) {
if (Long.$le(skip,sizeIfKnown )) {
limit=Long.$ge(limit,0 ) ? Math.min$J$J(limit, Long.$sub(sizeIfKnown,skip)) : Long.$sub(sizeIfKnown,skip);
skip=0;
}return Clazz.new_($I$(13,1).c$$java_util_Spliterator_OfInt$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_([helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, $I$(9).calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)],$I$(5,1).c$$java_util_Spliterator_OfInt$J$J);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfInt$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_([this, helper, spliterator, ((P$.SliceOps$2$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "SliceOps$2$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$I',  function (t) { return Clazz.array(Integer, [t.intValue()])});
})()
), Clazz.new_(P$.SliceOps$2$lambda2.$init$,[this, null])), this.$finals$.skip, this.$finals$.limit],$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction',  function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
var s=$I$(9,"sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J",[helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit]);
return $I$(1).collectInt$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, s, true);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfInt$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collectInt$java_util_stream_PipelineHelper$java_util_Spliterator$Z(this, s, true);
} else {
return Clazz.new_($I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.SliceOps$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=Long.$ge(this.$finals$.limit,0 ) ? this.$finals$.limit : [16777215,549755813887,1];
},1);

C$.$fields$=[['J',['n','m']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J($I$(9).calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, 'accept$I',  function (t) {
if (Long.$eq(this.n,0 )) {
if (Long.$gt(this.m,0 )) {
(this.m=Long.$inc(this.m,-1));
this.downstream.accept$I(t);
}} else {
(this.n=Long.$inc(this.n,-1));
}});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return Long.$eq(this.m,0 ) || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(14,1).c$$java_util_stream_Sink,[this, {skip:this.$finals$.skip,limit:this.$finals$.limit}, sink],P$.SliceOps$2$1));
});
})()
), Clazz.new_([this, {skip:skip,limit:limit}, upstream, $I$(3).INT_VALUE, C$.flags$J(limit)],$I$(15,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.SliceOps$2));
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_stream_AbstractPipeline$J$J',  function (upstream, skip, limit) {
if (Long.$lt(skip,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + Long.$s(skip)]);
return ((P$.SliceOps$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatefulOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator_OfLong$J$J$J',  function (s, skip, limit, sizeIfKnown) {
if (Long.$le(skip,sizeIfKnown )) {
limit=Long.$ge(limit,0 ) ? Math.min$J$J(limit, Long.$sub(sizeIfKnown,skip)) : Long.$sub(sizeIfKnown,skip);
skip=0;
}return Clazz.new_($I$(16,1).c$$java_util_Spliterator_OfLong$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_([helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, $I$(9).calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)],$I$(6,1).c$$java_util_Spliterator_OfLong$J$J);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfLong$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_([this, helper, spliterator, ((P$.SliceOps$3$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "SliceOps$3$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$I',  function (t) { return Clazz.array(Long, [t.intValue()])});
})()
), Clazz.new_(P$.SliceOps$3$lambda2.$init$,[this, null])), this.$finals$.skip, this.$finals$.limit],$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction',  function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
var s=$I$(9,"sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J",[helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit]);
return $I$(1).collectLong$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, s, true);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfLong$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collectLong$java_util_stream_PipelineHelper$java_util_Spliterator$Z(this, s, true);
} else {
return Clazz.new_($I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.SliceOps$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=Long.$ge(this.$finals$.limit,0 ) ? this.$finals$.limit : [16777215,549755813887,1];
},1);

C$.$fields$=[['J',['n','m']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J($I$(9).calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, 'accept$J',  function (t) {
if (Long.$eq(this.n,0 )) {
if (Long.$gt(this.m,0 )) {
(this.m=Long.$inc(this.m,-1));
this.downstream.accept$J(t);
}} else {
(this.n=Long.$inc(this.n,-1));
}});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return Long.$eq(this.m,0 ) || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(17,1).c$$java_util_stream_Sink,[this, {skip:this.$finals$.skip,limit:this.$finals$.limit}, sink],P$.SliceOps$3$1));
});
})()
), Clazz.new_([this, {skip:skip,limit:limit}, upstream, $I$(3).LONG_VALUE, C$.flags$J(limit)],$I$(18,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.SliceOps$3));
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_stream_AbstractPipeline$J$J',  function (upstream, skip, limit) {
if (Long.$lt(skip,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + Long.$s(skip)]);
return ((P$.SliceOps$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatefulOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator_OfDouble$J$J$J',  function (s, skip, limit, sizeIfKnown) {
if (Long.$le(skip,sizeIfKnown )) {
limit=Long.$ge(limit,0 ) ? Math.min$J$J(limit, Long.$sub(sizeIfKnown,skip)) : Long.$sub(sizeIfKnown,skip);
skip=0;
}return Clazz.new_($I$(19,1).c$$java_util_Spliterator_OfDouble$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_([helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, $I$(9).calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)],$I$(7,1).c$$java_util_Spliterator_OfDouble$J$J);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfDouble$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_([this, helper, spliterator, ((P$.SliceOps$4$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "SliceOps$4$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$I',  function (t) { return Clazz.array(Double, [t.intValue()])});
})()
), Clazz.new_(P$.SliceOps$4$lambda2.$init$,[this, null])), this.$finals$.skip, this.$finals$.limit],$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction',  function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (Long.$gt(size,0 ) && spliterator.hasCharacteristics$I(16384) ) {
var s=$I$(9,"sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J",[helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit]);
return $I$(1).collectDouble$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, s, true);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfDouble$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collectDouble$java_util_stream_PipelineHelper$java_util_Spliterator$Z(this, s, true);
} else {
return Clazz.new_($I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
return ((P$.SliceOps$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SliceOps$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=Long.$ge(this.$finals$.limit,0 ) ? this.$finals$.limit : [16777215,549755813887,1];
},1);

C$.$fields$=[['J',['n','m']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.downstream.begin$J($I$(9).calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, 'accept$D',  function (t) {
if (Long.$eq(this.n,0 )) {
if (Long.$gt(this.m,0 )) {
(this.m=Long.$inc(this.m,-1));
this.downstream.accept$D(t);
}} else {
(this.n=Long.$inc(this.n,-1));
}});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return Long.$eq(this.m,0 ) || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(20,1).c$$java_util_stream_Sink,[this, {skip:this.$finals$.skip,limit:this.$finals$.limit}, sink],P$.SliceOps$4$1));
});
})()
), Clazz.new_([this, {skip:skip,limit:limit}, upstream, $I$(3).DOUBLE_VALUE, C$.flags$J(limit)],$I$(21,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.SliceOps$4));
}, 1);

Clazz.newMeth(C$, 'flags$J',  function (limit) {
return $I$(2).NOT_SIZED | ((Long.$ne(limit,-1 )) ? $I$(2).IS_SHORT_CIRCUIT : 0);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SliceOps, "SliceTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractShortCircuitTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['completed'],'J',['targetOffset','$targetSize','thisNodeSize'],'O',['op','java.util.stream.AbstractPipeline','generator','java.util.function.IntFunction']]]

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J',  function (op, helper, spliterator, generator, offset, size) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this,[helper, spliterator]);C$.$init$.apply(this);
this.op=op;
this.generator=generator;
this.targetOffset=offset;
this.$targetSize=size;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_SliceOps_SliceTask$java_util_Spliterator',  function (parent, spliterator) {
;C$.superclazz.c$$java_util_stream_AbstractShortCircuitTask$java_util_Spliterator.apply(this,[parent, spliterator]);C$.$init$.apply(this);
this.op=parent.op;
this.generator=parent.generator;
this.targetOffset=parent.targetOffset;
this.$targetSize=parent.$targetSize;
}, 1);

Clazz.newMeth(C$, 'makeChild$java_util_Spliterator',  function (spliterator) {
return Clazz.new_(C$.c$$java_util_stream_SliceOps_SliceTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'getEmptyResult$',  function () {
return $I$(1,"emptyNode$java_util_stream_StreamShape",[this.op.getOutputShape$()]);
});

Clazz.newMeth(C$, 'doLeaf$',  function () {
if (this.isRoot$()) {
var sizeIfKnown=$I$(2).SIZED.isPreserved$I(this.op.sourceOrOpFlags) ? this.op.exactOutputSizeIfKnown$java_util_Spliterator(this.spliterator) : -1;
var nb=this.op.makeNodeBuilder$J$java_util_function_IntFunction(sizeIfKnown, this.generator);
var opSink=this.op.opWrapSink$I$java_util_stream_Sink(this.helper.getStreamAndOpFlags$(), nb);
this.helper.copyIntoWithCancel$java_util_stream_Sink$java_util_Spliterator(this.helper.wrapSink$java_util_stream_Sink(opSink), this.spliterator);
return nb.build$();
} else {
var node=this.helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(this.helper.makeNodeBuilder$J$java_util_function_IntFunction(-1, this.generator), this.spliterator).build$();
this.thisNodeSize=node.count$();
this.completed=true;
this.spliterator=null;
return node;
}});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter',  function ($caller) {
if (!this.isLeaf$()) {
var result;
this.thisNodeSize=Long.$add(this.leftChild.thisNodeSize,this.rightChild.thisNodeSize);
if (this.canceled) {
this.thisNodeSize=0;
result=this.getEmptyResult$();
} else if (Long.$eq(this.thisNodeSize,0 )) result=this.getEmptyResult$();
 else if (Long.$eq(this.leftChild.thisNodeSize,0 )) result=this.rightChild.getLocalResult$();
 else {
result=$I$(1,"conc$java_util_stream_StreamShape$java_util_stream_Node$java_util_stream_Node",[this.op.getOutputShape$(), this.leftChild.getLocalResult$(), this.rightChild.getLocalResult$()]);
}this.setLocalResult$O(this.isRoot$() ? p$1.doTruncate$java_util_stream_Node.apply(this, [result]) : result);
this.completed=true;
}if (Long.$ge(this.$targetSize,0 ) && !this.isRoot$()  && p$1.isLeftCompleted$J.apply(this, [Long.$add(this.targetOffset,this.$targetSize)]) ) this.cancelLaterNodes$();
C$.superclazz.prototype.onCompletion$java_util_concurrent_CountedCompleter.apply(this, [$caller]);
});

Clazz.newMeth(C$, 'cancel$',  function () {
C$.superclazz.prototype.cancel$.apply(this, []);
if (this.completed) this.setLocalResult$O(this.getEmptyResult$());
});

Clazz.newMeth(C$, 'doTruncate$java_util_stream_Node',  function (input) {
var to=Long.$ge(this.$targetSize,0 ) ? Math.min$J$J(input.count$(), Long.$add(this.targetOffset,this.$targetSize)) : this.thisNodeSize;
return input.truncate$J$J$java_util_function_IntFunction(this.targetOffset, to, this.generator);
}, p$1);

Clazz.newMeth(C$, 'isLeftCompleted$J',  function (target) {
var size=this.completed ? this.thisNodeSize : p$1.completedSize$J.apply(this, [target]);
if (Long.$ge(size,target )) return true;
for (var parent=this.getParent$(), node=this; parent != null ; node=parent, parent=parent.getParent$()) {
if (node === parent.rightChild ) {
var left=parent.leftChild;
if (left != null ) {
(size=Long.$add(size,(p$1.completedSize$J.apply(left, [target]))));
if (Long.$ge(size,target )) return true;
}}}
return Long.$ge(size,target );
}, p$1);

Clazz.newMeth(C$, 'completedSize$J',  function (target) {
if (this.completed) return this.thisNodeSize;
 else {
var left=this.leftChild;
var right=this.rightChild;
if (left == null  || right == null  ) {
return this.thisNodeSize;
} else {
var leftSize=p$1.completedSize$J.apply(left, [target]);
return (Long.$ge(leftSize,target )) ? leftSize : Long.$add(leftSize,p$1.completedSize$J.apply(right, [target]));
}}}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.ReduceOps','java.util.LinkedHashSet','java.util.HashSet','java.util.AbstractCollection','java.util.stream.Nodes','java.util.stream.StreamOpFlag','java.util.concurrent.atomic.AtomicBoolean','java.util.concurrent.ConcurrentHashMap','java.util.stream.ForEachOps',['java.util.stream.StreamSpliterators','.DistinctSpliterator'],'java.util.Objects',['java.util.stream.Sink','.ChainedReference'],['java.util.stream.ReferencePipeline','.StatefulOp'],'java.util.stream.StreamShape']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DistinctOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_AbstractPipeline',  function (upstream) {
return ((P$.DistinctOps$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DistinctOps$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatefulOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'reduce$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
var reduceOp=$I$(1,"makeRef$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BiConsumer",[((P$.DistinctOps$1$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DistinctOps$1$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(2,1),[])});
})()
), Clazz.new_(P$.DistinctOps$1$lambda1.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DistinctOps$1$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.add$O.apply(t,[u])});
})()
)); return Clazz.new_(P$.DistinctOps$1$lambda2.$init$,[this, null])})($I$(3)), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "DistinctOps$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.addAll$java_util_Collection.apply(t,[u])});
})()
)); return Clazz.new_(P$.DistinctOps$1$lambda3.$init$,[this, null])})($I$(4))]);
return $I$(5,"node$java_util_Collection",[this.$finals$.reduceOp.evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator(this.$finals$.helper, this.$finals$.spliterator)]);
});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction',  function (helper, spliterator, generator) {
if ($I$(6).DISTINCT.isKnown$I(helper.getStreamAndOpFlags$())) {
return helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, false, generator);
} else if ($I$(6).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.reduce$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator);
} else {
var seenNull=Clazz.new_($I$(7,1).c$$Z,[false]);
var map=Clazz.new_($I$(8,1));
var forEachOp=$I$(9,"makeRef$java_util_function_Consumer$Z",[((P$.DistinctOps$1$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DistinctOps$1$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O',  function (t) {
if (t == null ) this.$finals$.seenNull.set$Z.apply(this.$finals$.seenNull, [true]);
 else this.$finals$.map.putIfAbsent$O$O.apply(this.$finals$.map, [t, Boolean.TRUE]);
});
})()
), Clazz.new_(P$.DistinctOps$1$lambda4.$init$,[this, {map:map,seenNull:seenNull}])), false]);
forEachOp.evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator);
var keys=map.keySet$();
if (seenNull.get$()) {
keys=Clazz.new_($I$(3,1).c$$java_util_Collection,[keys]);
keys.add$O(null);
}return $I$(5).node$java_util_Collection(keys);
}});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
if ($I$(6).DISTINCT.isKnown$I(helper.getStreamAndOpFlags$())) {
return helper.wrapSpliterator$java_util_Spliterator(spliterator);
} else if ($I$(6).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.reduce$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator).spliterator$();
} else {
return Clazz.new_([helper.wrapSpliterator$java_util_Spliterator(spliterator)],$I$(10,1).c$$java_util_Spliterator);
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink',  function (flags, sink) {
$I$(11).requireNonNull$O(sink);
if ($I$(6).DISTINCT.isKnown$I(flags)) {
return sink;
} else if ($I$(6).SORTED.isKnown$I(flags)) {
return ((P$.DistinctOps$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DistinctOps$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['seenNull'],'O',['lastSeen','<T>']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.seenNull=false;
this.lastSeen=null;
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'end$',  function () {
this.seenNull=false;
this.lastSeen=null;
this.downstream.end$();
});

Clazz.newMeth(C$, 'accept$O',  function (t) {
if (t == null ) {
if (!this.seenNull) {
this.seenNull=true;
this.downstream.accept$O(this.lastSeen=null);
}} else if (this.lastSeen == null  || !t.equals$O(this.lastSeen) ) {
this.downstream.accept$O(this.lastSeen=t);
}});
})()
), Clazz.new_($I$(12,1).c$$java_util_stream_Sink,[this, null, sink],P$.DistinctOps$1$1));
} else {
return ((P$.DistinctOps$1$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DistinctOps$1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['seen','java.util.Set']]]

Clazz.newMeth(C$, 'begin$J',  function (size) {
this.seen=Clazz.new_($I$(3,1));
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'end$',  function () {
this.seen=null;
this.downstream.end$();
});

Clazz.newMeth(C$, 'accept$O',  function (t) {
if (!this.seen.contains$O(t)) {
this.seen.add$O(t);
this.downstream.accept$O(t);
}});
})()
), Clazz.new_($I$(12,1).c$$java_util_stream_Sink,[this, null, sink],P$.DistinctOps$1$2));
}});
})()
), Clazz.new_([this, {helper:helper,reduceOp:reduceOp,spliterator:spliterator}, upstream, $I$(14).REFERENCE, $I$(6).IS_DISTINCT | $I$(6).NOT_SIZED],$I$(13,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I,P$.DistinctOps$1));
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

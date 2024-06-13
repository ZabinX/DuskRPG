(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.StreamShape','java.util.stream.StreamOpFlag',['java.util.stream.ForEachOps','.ForEachOrderedTask'],['java.util.stream.ForEachOps','.ForEachTask'],'java.util.stream.AbstractTask','java.util.concurrent.ConcurrentHashMap','java.util.Objects',['java.util.stream.ForEachOps','.ForEachOp','.OfRef'],['java.util.stream.ForEachOps','.ForEachOp','.OfInt'],['java.util.stream.ForEachOps','.ForEachOp','.OfLong'],['java.util.stream.ForEachOps','.ForEachOp','.OfDouble']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ForEachOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ForEachOp',1032],['ForEachTask',24],['ForEachOrderedTask',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_function_Consumer$Z',  function (action, ordered) {
$I$(7).requireNonNull$O(action);
return Clazz.new_($I$(8,1).c$$java_util_function_Consumer$Z,[action, ordered]);
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_function_IntConsumer$Z',  function (action, ordered) {
$I$(7).requireNonNull$O(action);
return Clazz.new_($I$(9,1).c$$java_util_function_IntConsumer$Z,[action, ordered]);
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_function_LongConsumer$Z',  function (action, ordered) {
$I$(7).requireNonNull$O(action);
return Clazz.new_($I$(10,1).c$$java_util_function_LongConsumer$Z,[action, ordered]);
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_function_DoubleConsumer$Z',  function (action, ordered) {
$I$(7).requireNonNull$O(action);
return Clazz.new_($I$(11,1).c$$java_util_function_DoubleConsumer$Z,[action, ordered]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForEachOps, "ForEachOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.stream.TerminalOp', 'java.util.stream.TerminalSink']);
C$.$classes$=[['OfRef',24],['OfInt',24],['OfLong',24],['OfDouble',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['ordered']]]

Clazz.newMeth(C$, 'c$$Z',  function (ordered) {
;C$.$init$.apply(this);
this.ordered=ordered;
}, 1);

Clazz.newMeth(C$, 'getOpFlags$',  function () {
return this.ordered ? 0 : $I$(2).NOT_ORDERED;
});

Clazz.newMeth(C$, 'evaluateSequential$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
return helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(this, spliterator).get$();
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
if (this.ordered) Clazz.new_($I$(3,1).c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_stream_Sink,[helper, spliterator, this]).invoke$();
 else Clazz.new_([helper, spliterator, helper.wrapSink$java_util_stream_Sink(this)],$I$(4,1).c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_stream_Sink).invoke$();
return null;
});

Clazz.newMeth(C$, 'get$',  function () {
return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForEachOps.ForEachOp, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.ForEachOps','.ForEachOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['consumer','java.util.function.Consumer']]]

Clazz.newMeth(C$, 'c$$java_util_function_Consumer$Z',  function (consumer, ordered) {
;C$.superclazz.c$$Z.apply(this,[ordered]);C$.$init$.apply(this);
this.consumer=consumer;
}, 1);

Clazz.newMeth(C$, 'accept$O',  function (t) {
this.consumer.accept$O(t);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForEachOps.ForEachOp, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.ForEachOps','.ForEachOp'], [['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['consumer','java.util.function.IntConsumer']]]

Clazz.newMeth(C$, 'c$$java_util_function_IntConsumer$Z',  function (consumer, ordered) {
;C$.superclazz.c$$Z.apply(this,[ordered]);C$.$init$.apply(this);
this.consumer=consumer;
}, 1);

Clazz.newMeth(C$, 'inputShape$',  function () {
return $I$(1).INT_VALUE;
});

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.consumer.accept$I(t);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForEachOps.ForEachOp, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.ForEachOps','.ForEachOp'], [['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['consumer','java.util.function.LongConsumer']]]

Clazz.newMeth(C$, 'c$$java_util_function_LongConsumer$Z',  function (consumer, ordered) {
;C$.superclazz.c$$Z.apply(this,[ordered]);C$.$init$.apply(this);
this.consumer=consumer;
}, 1);

Clazz.newMeth(C$, 'inputShape$',  function () {
return $I$(1).LONG_VALUE;
});

Clazz.newMeth(C$, 'accept$J',  function (t) {
this.consumer.accept$J(t);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForEachOps.ForEachOp, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.ForEachOps','.ForEachOp'], [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['consumer','java.util.function.DoubleConsumer']]]

Clazz.newMeth(C$, 'c$$java_util_function_DoubleConsumer$Z',  function (consumer, ordered) {
;C$.superclazz.c$$Z.apply(this,[ordered]);C$.$init$.apply(this);
this.consumer=consumer;
}, 1);

Clazz.newMeth(C$, 'inputShape$',  function () {
return $I$(1).DOUBLE_VALUE;
});

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.consumer.accept$D(t);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForEachOps, "ForEachTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['targetSize'],'O',['spliterator','java.util.Spliterator','sink','java.util.stream.Sink','helper','java.util.stream.PipelineHelper']]]

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_stream_Sink',  function (helper, spliterator, sink) {
;C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this,[null]);C$.$init$.apply(this);
this.sink=sink;
this.helper=helper;
this.spliterator=spliterator;
this.targetSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_ForEachOps_ForEachTask$java_util_Spliterator',  function (parent, spliterator) {
;C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this,[parent]);C$.$init$.apply(this);
this.spliterator=spliterator;
this.sink=parent.sink;
this.targetSize=parent.targetSize;
this.helper=parent.helper;
}, 1);

Clazz.newMeth(C$, 'compute$',  function () {
var rightSplit=this.spliterator;
var leftSplit;
var sizeEstimate=rightSplit.estimateSize$();
var sizeThreshold;
if (Long.$eq((sizeThreshold=this.targetSize),0 )) this.targetSize=sizeThreshold=$I$(5).suggestTargetSize$J(sizeEstimate);
var isShortCircuit=$I$(2).SHORT_CIRCUIT.isKnown$I(this.helper.getStreamAndOpFlags$());
var forkRight=false;
var taskSink=this.sink;
var task=this;
while (!isShortCircuit || !taskSink.cancellationRequested$() ){
if (Long.$le(sizeEstimate,sizeThreshold ) || (leftSplit=rightSplit.trySplit$()) == null  ) {
task.helper.copyInto$java_util_stream_Sink$java_util_Spliterator(taskSink, rightSplit);
break;
}var leftTask=Clazz.new_(C$.c$$java_util_stream_ForEachOps_ForEachTask$java_util_Spliterator,[task, leftSplit]);
task.addToPendingCount$I(1);
var taskToFork;
if (forkRight) {
forkRight=false;
rightSplit=leftSplit;
taskToFork=task;
task=leftTask;
} else {
forkRight=true;
taskToFork=leftTask;
}taskToFork.fork$();
sizeEstimate=rightSplit.estimateSize$();
}
task.spliterator=null;
task.propagateCompletion$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForEachOps, "ForEachOrderedTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CountedCompleter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['targetSize'],'O',['helper','java.util.stream.PipelineHelper','spliterator','java.util.Spliterator','completionMap','java.util.concurrent.ConcurrentHashMap','action','java.util.stream.Sink','leftPredecessor','java.util.stream.ForEachOps.ForEachOrderedTask','node','java.util.stream.Node']]]

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_stream_Sink',  function (helper, spliterator, action) {
;C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this,[null]);C$.$init$.apply(this);
this.helper=helper;
this.spliterator=spliterator;
this.targetSize=$I$(5,"suggestTargetSize$J",[spliterator.estimateSize$()]);
this.completionMap=Clazz.new_([Math.max(16, $I$(5).LEAF_TARGET << 1)],$I$(6,1).c$$I);
this.action=action;
this.leftPredecessor=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_ForEachOps_ForEachOrderedTask$java_util_Spliterator$java_util_stream_ForEachOps_ForEachOrderedTask',  function (parent, spliterator, leftPredecessor) {
;C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this,[parent]);C$.$init$.apply(this);
this.helper=parent.helper;
this.spliterator=spliterator;
this.targetSize=parent.targetSize;
this.completionMap=parent.completionMap;
this.action=parent.action;
this.leftPredecessor=leftPredecessor;
}, 1);

Clazz.newMeth(C$, 'compute$',  function () {
C$.doCompute$java_util_stream_ForEachOps_ForEachOrderedTask(this);
});

Clazz.newMeth(C$, 'doCompute$java_util_stream_ForEachOps_ForEachOrderedTask',  function (task) {
var rightSplit=task.spliterator;
var leftSplit;
var sizeThreshold=task.targetSize;
var forkRight=false;
while (Long.$gt(rightSplit.estimateSize$(),sizeThreshold ) && (leftSplit=rightSplit.trySplit$()) != null  ){
var leftChild=Clazz.new_(C$.c$$java_util_stream_ForEachOps_ForEachOrderedTask$java_util_Spliterator$java_util_stream_ForEachOps_ForEachOrderedTask,[task, leftSplit, task.leftPredecessor]);
var rightChild=Clazz.new_(C$.c$$java_util_stream_ForEachOps_ForEachOrderedTask$java_util_Spliterator$java_util_stream_ForEachOps_ForEachOrderedTask,[task, rightSplit, leftChild]);
task.addToPendingCount$I(1);
rightChild.addToPendingCount$I(1);
task.completionMap.put$O$O(leftChild, rightChild);
if (task.leftPredecessor != null ) {
leftChild.addToPendingCount$I(1);
if (task.completionMap.replace$O$O$O(task.leftPredecessor, task, leftChild)) {
task.addToPendingCount$I(-1);
} else {
leftChild.addToPendingCount$I(-1);
}}var taskToFork;
if (forkRight) {
forkRight=false;
rightSplit=leftSplit;
task=leftChild;
taskToFork=rightChild;
} else {
forkRight=true;
task=rightChild;
taskToFork=leftChild;
}taskToFork.fork$();
}
if (task.getPendingCount$() > 0) {
var generator=(P$.ForEachOps$ForEachOrderedTask$lambda1$||(P$.ForEachOps$ForEachOrderedTask$lambda1$=(((P$.ForEachOps$ForEachOrderedTask$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ForEachOps$ForEachOrderedTask$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$I','apply$O'],  function (size) { return (Clazz.array(java.lang.Object, [size]));});
})()
), Clazz.new_(P$.ForEachOps$ForEachOrderedTask$lambda1.$init$,[this, null])))));
var nb=task.helper.makeNodeBuilder$J$java_util_function_IntFunction(task.helper.exactOutputSizeIfKnown$java_util_Spliterator(rightSplit), generator);
task.node=task.helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(nb, rightSplit).build$();
task.spliterator=null;
}task.tryComplete$();
}, 1);

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter',  function ($caller) {
if (this.node != null ) {
this.node.forEach$java_util_function_Consumer(this.action);
this.node=null;
} else if (this.spliterator != null ) {
this.helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(this.action, this.spliterator);
this.spliterator=null;
}var leftDescendant=this.completionMap.remove$O(this);
if (leftDescendant != null ) leftDescendant.tryComplete$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

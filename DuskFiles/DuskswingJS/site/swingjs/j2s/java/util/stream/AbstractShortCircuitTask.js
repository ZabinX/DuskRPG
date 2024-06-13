(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.concurrent.atomic.AtomicReference']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractShortCircuitTask", null, 'java.util.stream.AbstractTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['canceled'],'O',['sharedResult','java.util.concurrent.atomic.AtomicReference']]]

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this,[helper, spliterator]);C$.$init$.apply(this);
this.sharedResult=Clazz.new_($I$(1,1).c$$O,[null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractShortCircuitTask$java_util_Spliterator',  function (parent, spliterator) {
;C$.superclazz.c$$java_util_stream_AbstractTask$java_util_Spliterator.apply(this,[parent, spliterator]);C$.$init$.apply(this);
this.sharedResult=parent.sharedResult;
}, 1);

Clazz.newMeth(C$, 'compute$',  function () {
var rs=this.spliterator;
var ls;
var sizeEstimate=rs.estimateSize$();
var sizeThreshold=this.getTargetSize$J(sizeEstimate);
var forkRight=false;
var task=this;
var sr=this.sharedResult;
var result;
while ((result=sr.get$()) == null ){
if (task.taskCanceled$()) {
result=task.getEmptyResult$();
break;
}if (Long.$le(sizeEstimate,sizeThreshold ) || (ls=rs.trySplit$()) == null  ) {
result=task.doLeaf$();
break;
}var leftChild;
var rightChild;
var taskToFork;
task.leftChild=leftChild=task.makeChild$java_util_Spliterator(ls);
task.rightChild=rightChild=task.makeChild$java_util_Spliterator(rs);
task.setPendingCount$I(1);
if (forkRight) {
forkRight=false;
rs=ls;
task=leftChild;
taskToFork=rightChild;
} else {
forkRight=true;
task=rightChild;
taskToFork=leftChild;
}taskToFork.fork$();
sizeEstimate=rs.estimateSize$();
}
task.setLocalResult$O(result);
task.tryComplete$();
});

Clazz.newMeth(C$, 'shortCircuit$O',  function (result) {
if (result != null ) this.sharedResult.compareAndSet$O$O(null, result);
});

Clazz.newMeth(C$, 'setLocalResult$O',  function (localResult) {
if (this.isRoot$()) {
if (localResult != null ) this.sharedResult.compareAndSet$O$O(null, localResult);
} else C$.superclazz.prototype.setLocalResult$O.apply(this, [localResult]);
});

Clazz.newMeth(C$, 'getRawResult$',  function () {
return this.getLocalResult$();
});

Clazz.newMeth(C$, 'getLocalResult$',  function () {
if (this.isRoot$()) {
var answer=this.sharedResult.get$();
return (answer == null ) ? this.getEmptyResult$() : answer;
} else return C$.superclazz.prototype.getLocalResult$.apply(this, []);
});

Clazz.newMeth(C$, 'cancel$',  function () {
this.canceled=true;
});

Clazz.newMeth(C$, 'taskCanceled$',  function () {
var cancel=this.canceled;
if (!cancel) {
for (var parent=this.getParent$(); !cancel && parent != null  ; parent=parent.getParent$()) cancel=parent.canceled;

}return cancel;
});

Clazz.newMeth(C$, 'cancelLaterNodes$',  function () {
for (var parent=this.getParent$(), node=this; parent != null ; node=parent, parent=parent.getParent$()) {
if (parent.leftChild === node ) {
var rightSibling=parent.rightChild;
if (!rightSibling.canceled) rightSibling.cancel$();
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

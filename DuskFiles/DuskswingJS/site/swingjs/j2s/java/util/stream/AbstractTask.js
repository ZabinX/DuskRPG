(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.concurrent.ForkJoinPool']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractTask", null, 'java.util.concurrent.CountedCompleter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['targetSize'],'O',['helper','java.util.stream.PipelineHelper','spliterator','java.util.Spliterator','leftChild','<K extends AbstractTask<P_IN,P_OUT,R,K>>','+rightChild','localResult','<R>']]
,['I',['LEAF_TARGET']]]

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
;C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this,[null]);C$.$init$.apply(this);
this.helper=helper;
this.spliterator=spliterator;
this.targetSize=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractTask$java_util_Spliterator',  function (parent, spliterator) {
;C$.superclazz.c$$java_util_concurrent_CountedCompleter.apply(this,[parent]);C$.$init$.apply(this);
this.spliterator=spliterator;
this.helper=parent.helper;
this.targetSize=parent.targetSize;
}, 1);

Clazz.newMeth(C$, 'suggestTargetSize$J',  function (sizeEstimate) {
var est=Long.$div(sizeEstimate,C$.LEAF_TARGET);
return Long.$gt(est,0 ) ? est : 1;
}, 1);

Clazz.newMeth(C$, 'getTargetSize$J',  function (sizeEstimate) {
var s;
return (Long.$ne((s=this.targetSize),0 ) ? s : (this.targetSize=C$.suggestTargetSize$J(sizeEstimate)));
});

Clazz.newMeth(C$, 'getRawResult$',  function () {
return this.localResult;
});

Clazz.newMeth(C$, 'setRawResult$O',  function (result) {
if (result != null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, 'getLocalResult$',  function () {
return this.localResult;
});

Clazz.newMeth(C$, 'setLocalResult$O',  function (localResult) {
this.localResult=localResult;
});

Clazz.newMeth(C$, 'isLeaf$',  function () {
return this.leftChild == null ;
});

Clazz.newMeth(C$, 'isRoot$',  function () {
return this.getParent$() == null ;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.getCompleter$();
});

Clazz.newMeth(C$, 'compute$',  function () {
var rs=this.spliterator;
var ls;
var sizeEstimate=rs.estimateSize$();
var sizeThreshold=this.getTargetSize$J(sizeEstimate);
var forkRight=false;
var task=this;
while (Long.$gt(sizeEstimate,sizeThreshold ) && (ls=rs.trySplit$()) != null  ){
var leftChild;
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
task.setLocalResult$O(task.doLeaf$());
task.tryComplete$();
});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter',  function ($caller) {
this.spliterator=null;
this.leftChild=this.rightChild=null;
});

Clazz.newMeth(C$, 'isLeftmostNode$',  function () {
var node=this;
while (node != null ){
var parent=node.getParent$();
if (parent != null  && parent.leftChild !== node  ) return false;
node=parent;
}
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.LEAF_TARGET=$I$(1).getCommonPoolParallelism$() << 2;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

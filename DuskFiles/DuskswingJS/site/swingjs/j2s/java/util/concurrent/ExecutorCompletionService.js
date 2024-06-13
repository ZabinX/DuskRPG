(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.FutureTask','java.util.concurrent.LinkedBlockingQueue',['java.util.concurrent.ExecutorCompletionService','.QueueingFuture']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExecutorCompletionService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.concurrent.CompletionService');
C$.$classes$=[['QueueingFuture',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['executor','java.util.concurrent.Executor','aes','java.util.concurrent.AbstractExecutorService','completionQueue','java.util.concurrent.BlockingQueue']]]

Clazz.newMeth(C$, 'newTaskFor$java_util_concurrent_Callable',  function (task) {
if (this.aes == null ) return Clazz.new_($I$(1,1).c$$java_util_concurrent_Callable,[task]);
 else return this.aes.newTaskFor$java_util_concurrent_Callable(task);
}, p$1);

Clazz.newMeth(C$, 'newTaskFor$Runnable$O',  function (task, result) {
if (this.aes == null ) return Clazz.new_($I$(1,1).c$$Runnable$O,[task, result]);
 else return this.aes.newTaskFor$Runnable$O(task, result);
}, p$1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor',  function (executor) {
;C$.$init$.apply(this);
if (executor == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.executor=executor;
this.aes=(Clazz.instanceOf(executor, "java.util.concurrent.AbstractExecutorService")) ? executor : null;
this.completionQueue=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_BlockingQueue',  function (executor, completionQueue) {
;C$.$init$.apply(this);
if (executor == null  || completionQueue == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.executor=executor;
this.aes=(Clazz.instanceOf(executor, "java.util.concurrent.AbstractExecutorService")) ? executor : null;
this.completionQueue=completionQueue;
}, 1);

Clazz.newMeth(C$, 'submit$java_util_concurrent_Callable',  function (task) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var f=p$1.newTaskFor$java_util_concurrent_Callable.apply(this, [task]);
this.executor.execute$Runnable(Clazz.new_($I$(3,1).c$$java_util_concurrent_RunnableFuture,[this, null, f]));
return f;
});

Clazz.newMeth(C$, 'submit$Runnable$O',  function (task, result) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var f=p$1.newTaskFor$Runnable$O.apply(this, [task, result]);
this.executor.execute$Runnable(Clazz.new_($I$(3,1).c$$java_util_concurrent_RunnableFuture,[this, null, f]));
return f;
});

Clazz.newMeth(C$, 'take$',  function () {
return this.completionQueue.take$();
});

Clazz.newMeth(C$, 'poll$',  function () {
return this.completionQueue.poll$();
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return this.completionQueue.poll$J$java_util_concurrent_TimeUnit(timeout, unit);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExecutorCompletionService, "QueueingFuture", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.FutureTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['task','java.util.concurrent.Future']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_RunnableFuture',  function (task) {
;C$.superclazz.c$$Runnable$O.apply(this,[task, null]);C$.$init$.apply(this);
this.task=task;
}, 1);

Clazz.newMeth(C$, 'done$',  function () {
this.b$['java.util.concurrent.ExecutorCompletionService'].completionQueue.add$O(this.task);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

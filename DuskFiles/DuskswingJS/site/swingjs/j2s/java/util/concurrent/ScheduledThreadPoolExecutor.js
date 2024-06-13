(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},p$2={},I$=[[0,'java.util.concurrent.ScheduledThreadPoolExecutor','java.util.concurrent.TimeUnit','java.util.concurrent.DelayQueue','java.util.concurrent.atomic.AtomicLong','java.util.HashMap','swingjs.JSToolkit','Thread',['java.util.concurrent.ScheduledThreadPoolExecutor','.DelayedWorkQueue'],['java.util.concurrent.ScheduledThreadPoolExecutor','.ScheduledFutureTask'],'java.util.concurrent.Executors']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ScheduledThreadPoolExecutor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.ThreadPoolExecutor', 'java.util.concurrent.ScheduledExecutorService');
C$.$classes$=[['ScheduledFutureTask',2],['DelayedWorkQueue',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.executeExistingDelayedTasksAfterShutdown=true;
this.todo=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['continueExistingPeriodicTasksAfterShutdown','executeExistingDelayedTasksAfterShutdown','removeOnCancel'],'O',['todo','java.util.Map']]
,['O',['sequencer','java.util.concurrent.atomic.AtomicLong']]]

Clazz.newMeth(C$, 'nowms$',  function () {
return System.currentTimeMillis$();
});

Clazz.newMeth(C$, 'canRunInCurrentRunState$Z',  function (periodic) {
return this.isRunningOrShutdown$Z(periodic ? this.continueExistingPeriodicTasksAfterShutdown : this.executeExistingDelayedTasksAfterShutdown);
});

Clazz.newMeth(C$, 'delayedExecute$java_util_concurrent_RunnableScheduledFuture',  function (task) {
if (this.isShutdown$()) this.reject$Runnable(task);
 else {
if (true ||false) {
var id=Clazz.array(Integer.TYPE, [1]);
this.todo.put$O$O(Integer.valueOf$I(id[0]=$I$(6,"dispatch$O$I$I",[Clazz.new_([((P$.ScheduledThreadPoolExecutor$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ScheduledThreadPoolExecutor$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
var t=this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'].todo.remove$O.apply(this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'].todo, [Integer.valueOf$I(this.$finals$.id[0])]);
if (t != null ) {
this.$finals$.task.run$.apply(this.$finals$.task, []);
}});
})()
), Clazz.new_(P$.ScheduledThreadPoolExecutor$lambda1.$init$,[this, {id:id,task:task}]))],$I$(7,1).c$$Runnable), Math.max(1, Long.$ival(task.getDelay$java_util_concurrent_TimeUnit($I$(2).MILLISECONDS))), 0])), task);
} else 
{}
}}, p$2);

Clazz.newMeth(C$, 'reExecutePeriodic$java_util_concurrent_RunnableScheduledFuture',  function (task) {
if (this.canRunInCurrentRunState$Z(true)) {
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [task]);
}});

Clazz.newMeth(C$, 'onShutdown$',  function () {
var keepDelayed=this.getExecuteExistingDelayedTasksAfterShutdownPolicy$();
var keepPeriodic=this.getContinueExistingPeriodicTasksAfterShutdownPolicy$();
if (!keepDelayed && !keepPeriodic ) {
this.todo.clear$();
} else {
for (var e, $e = this.todo.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var t=e.getValue$();
if ((t.isPeriodic$() ? !keepPeriodic : !keepDelayed) || t.isCancelled$() ) {
this.todo.remove$O(t);
t.cancel$Z(false);
}}
}this.tryTerminate$();
});

Clazz.newMeth(C$, 'decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture',  function (runnable, task) {
return task;
});

Clazz.newMeth(C$, 'decorateTask$java_util_concurrent_Callable$java_util_concurrent_RunnableScheduledFuture',  function (callable, task) {
return task;
});

Clazz.newMeth(C$, 'c$$I',  function (corePoolSize) {
;C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue.apply(this,[corePoolSize, 2147483647, 0, $I$(2).MILLISECONDS, Clazz.new_($I$(8,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_concurrent_ThreadFactory',  function (corePoolSize, threadFactory) {
;C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory.apply(this,[corePoolSize, 2147483647, 0, $I$(2).MILLISECONDS, Clazz.new_($I$(8,1)), threadFactory]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_concurrent_RejectedExecutionHandler',  function (corePoolSize, handler) {
;C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_RejectedExecutionHandler.apply(this,[corePoolSize, 2147483647, 0, $I$(2).MILLISECONDS, Clazz.new_($I$(8,1)), handler]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler',  function (corePoolSize, threadFactory, handler) {
;C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler.apply(this,[corePoolSize, 2147483647, 0, $I$(2).MILLISECONDS, Clazz.new_($I$(8,1)), threadFactory, handler]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'schedule$Runnable$J$java_util_concurrent_TimeUnit',  function (command, delay, unit) {
if (command == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (Long.$lt(delay,0 )) delay=0;
var triggerTime=Long.$add(this.nowms$(),unit.toMillis$J(delay));
var t=this.decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture(command, Clazz.new_($I$(9,1).c$$Runnable$O$J,[this, null, command, null, triggerTime]));
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, 'schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit',  function (callable, delay, unit) {
if (callable == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (Long.$lt(delay,0 )) delay=0;
var triggerTime=Long.$add(this.nowms$(),unit.toMillis$J(delay));
var t=this.decorateTask$java_util_concurrent_Callable$java_util_concurrent_RunnableScheduledFuture(callable, Clazz.new_($I$(9,1).c$$java_util_concurrent_Callable$J,[this, null, callable, triggerTime]));
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, 'scheduleAtFixedRate$Runnable$J$J$java_util_concurrent_TimeUnit',  function (command, initialDelay, period, unit) {
if (command == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (Long.$le(period,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (Long.$lt(initialDelay,0 )) initialDelay=0;
var triggerTime=Long.$add(this.nowms$(),unit.toMillis$J(initialDelay));
var sft=Clazz.new_([this, null, command, null, triggerTime, unit.toMillis$J(period)],$I$(9,1).c$$Runnable$O$J$J);
var t=this.decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture(command, sft);
sft.outerTask=t;
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, 'scheduleWithFixedDelay$Runnable$J$J$java_util_concurrent_TimeUnit',  function (command, initialDelay, delay, unit) {
if (command == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (Long.$le(delay,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (Long.$lt(initialDelay,0 )) initialDelay=0;
var triggerTime=Long.$add(this.nowms$(),unit.toMillis$J(initialDelay));
var sft=Clazz.new_([this, null, command, null, triggerTime, unit.toMillis$J((Long.$neg(delay)))],$I$(9,1).c$$Runnable$O$J$J);
var t=this.decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture(command, sft);
sft.outerTask=t;
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, 'execute$Runnable',  function (command) {
this.schedule$Runnable$J$java_util_concurrent_TimeUnit(command, 0, $I$(2).MILLISECONDS);
});

Clazz.newMeth(C$, 'submit$Runnable',  function (task) {
return this.schedule$Runnable$J$java_util_concurrent_TimeUnit(task, 0, $I$(2).MILLISECONDS);
});

Clazz.newMeth(C$, 'submit$Runnable$O',  function (task, result) {
return this.schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit($I$(10).callable$Runnable$O(task, result), 0, $I$(2).MILLISECONDS);
});

Clazz.newMeth(C$, 'submit$java_util_concurrent_Callable',  function (task) {
return this.schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit(task, 0, $I$(2).MILLISECONDS);
});

Clazz.newMeth(C$, 'setContinueExistingPeriodicTasksAfterShutdownPolicy$Z',  function (value) {
this.continueExistingPeriodicTasksAfterShutdown=value;
if (!value && this.isShutdown$() ) this.onShutdown$();
});

Clazz.newMeth(C$, 'getContinueExistingPeriodicTasksAfterShutdownPolicy$',  function () {
return this.continueExistingPeriodicTasksAfterShutdown;
});

Clazz.newMeth(C$, 'setExecuteExistingDelayedTasksAfterShutdownPolicy$Z',  function (value) {
this.executeExistingDelayedTasksAfterShutdown=value;
if (!value && this.isShutdown$() ) this.onShutdown$();
});

Clazz.newMeth(C$, 'getExecuteExistingDelayedTasksAfterShutdownPolicy$',  function () {
return this.executeExistingDelayedTasksAfterShutdown;
});

Clazz.newMeth(C$, 'shutdown$',  function () {
C$.superclazz.prototype.shutdown$.apply(this, []);
});

Clazz.newMeth(C$, 'shutdownNow$',  function () {
return C$.superclazz.prototype.shutdownNow$.apply(this, []);
});

Clazz.newMeth(C$, 'getQueue$',  function () {
return C$.superclazz.prototype.getQueue$.apply(this, []);
});

Clazz.newMeth(C$, 'setRemoveOnCancelPolicy$Z',  function (value) {
this.removeOnCancel=value;
});

Clazz.newMeth(C$, 'getRemoveOnCancelPolicy$',  function () {
return this.removeOnCancel;
});

C$.$static$=function(){C$.$static$=0;
C$.sequencer=Clazz.new_($I$(4,1).c$$J,[0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScheduledThreadPoolExecutor, "ScheduledFutureTask", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.FutureTask', 'java.util.concurrent.RunnableScheduledFuture');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.outerTask=this;
},1);

C$.$fields$=[['J',['sequenceNumber','timems','periodms'],'O',['outerTask','java.util.concurrent.RunnableScheduledFuture']]]

Clazz.newMeth(C$, 'c$$Runnable$O$J',  function (r, result, ms) {
;C$.superclazz.c$$Runnable$O.apply(this,[r, result]);C$.$init$.apply(this);
this.timems=ms;
this.periodms=0;
this.sequenceNumber=$I$(1).sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'c$$Runnable$O$J$J',  function (r, result, ms, period) {
;C$.superclazz.c$$Runnable$O.apply(this,[r, result]);C$.$init$.apply(this);
this.timems=ms;
this.periodms=period;
this.sequenceNumber=$I$(1).sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable$J',  function (callable, ns) {
;C$.superclazz.c$$java_util_concurrent_Callable.apply(this,[callable]);C$.$init$.apply(this);
this.timems=ns;
this.periodms=0;
this.sequenceNumber=$I$(1).sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'getDelay$java_util_concurrent_TimeUnit',  function (unit) {
var d=unit.convert$J$java_util_concurrent_TimeUnit(Long.$sub(this.timems,this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'].nowms$.apply(this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'], [])), $I$(2).MILLISECONDS);
return d;
});

Clazz.newMeth(C$, ['compareTo$java_util_concurrent_Delayed','compareTo$O'],  function (other) {
if (other === this ) return 0;
if (Clazz.instanceOf(other, "java.util.concurrent.ScheduledThreadPoolExecutor.ScheduledFutureTask")) {
var x=other;
var diff=Long.$sub(this.timems,x.timems);
if (Long.$lt(diff,0 )) return -1;
 else if (Long.$gt(diff,0 )) return 1;
 else if (Long.$lt(this.sequenceNumber,x.sequenceNumber )) return -1;
 else return 1;
}var d=(Long.$sub(this.getDelay$java_util_concurrent_TimeUnit($I$(2).MILLISECONDS),other.getDelay$java_util_concurrent_TimeUnit($I$(2).MILLISECONDS)));
return (Long.$eq(d,0 )) ? 0 : ((Long.$lt(d,0 )) ? -1 : 1);
});

Clazz.newMeth(C$, 'isPeriodic$',  function () {
return Long.$ne(this.periodms,0 );
});

Clazz.newMeth(C$, 'setNextRunTime',  function () {
var p=this.periodms;
if (Long.$gt(p,0 )) (this.timems=Long.$add(this.timems,(p)));
 else this.timems=Long.$sub(this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'].nowms$.apply(this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'], []),p);
}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
var periodic=this.isPeriodic$();
if (!this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'].canRunInCurrentRunState$Z.apply(this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'], [periodic])) this.cancel$Z(false);
 else if (!periodic) C$.superclazz.prototype.run$.apply(this, []);
 else if (C$.superclazz.prototype.runAndReset$.apply(this, [])) {
p$1.setNextRunTime.apply(this, []);
this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'].reExecutePeriodic$java_util_concurrent_RunnableScheduledFuture.apply(this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'], [this.outerTask]);
}});

Clazz.newMeth(C$, 'cancel$Z',  function (mayInterruptIfRunning) {
var cancelled=C$.superclazz.prototype.cancel$Z.apply(this, [mayInterruptIfRunning]);
if (cancelled && this.b$['java.util.concurrent.ScheduledThreadPoolExecutor'].removeOnCancel ) this.b$['java.util.concurrent.ThreadPoolExecutor'].remove$Runnable.apply(this.b$['java.util.concurrent.ThreadPoolExecutor'], [this]);
return cancelled;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScheduledThreadPoolExecutor, "DelayedWorkQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractCollection', 'java.util.concurrent.BlockingQueue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dq=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['dq','java.util.concurrent.DelayQueue']]]

Clazz.newMeth(C$, 'poll$',  function () {
return this.dq.poll$();
});

Clazz.newMeth(C$, 'peek$',  function () {
return this.dq.peek$();
});

Clazz.newMeth(C$, 'take$',  function () {
return this.dq.take$();
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return this.dq.poll$J$java_util_concurrent_TimeUnit(timeout, unit);
});

Clazz.newMeth(C$, ['add$Runnable','add$O'],  function (x) {
return this.dq.add$java_util_concurrent_Delayed(x);
});

Clazz.newMeth(C$, ['offer$Runnable','offer$O'],  function (x) {
return this.dq.offer$java_util_concurrent_Delayed(x);
});

Clazz.newMeth(C$, ['put$Runnable','put$O'],  function (x) {
this.dq.put$java_util_concurrent_Delayed(x);
});

Clazz.newMeth(C$, ['offer$Runnable$J$java_util_concurrent_TimeUnit','offer$O$J$java_util_concurrent_TimeUnit'],  function (x, timeout, unit) {
return this.dq.offer$java_util_concurrent_Delayed$J$java_util_concurrent_TimeUnit(x, timeout, unit);
});

Clazz.newMeth(C$, 'remove$',  function () {
return this.dq.remove$();
});

Clazz.newMeth(C$, 'element$',  function () {
return this.dq.element$();
});

Clazz.newMeth(C$, 'clear$',  function () {
this.dq.clear$();
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection',  function (c) {
return this.dq.drainTo$java_util_Collection(c);
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I',  function (c, maxElements) {
return this.dq.drainTo$java_util_Collection$I(c, maxElements);
});

Clazz.newMeth(C$, 'remainingCapacity$',  function () {
return this.dq.remainingCapacity$();
});

Clazz.newMeth(C$, 'remove$O',  function (x) {
return this.dq.remove$O(x);
});

Clazz.newMeth(C$, 'contains$O',  function (x) {
return this.dq.contains$O(x);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.dq.size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.dq.isEmpty$();
});

Clazz.newMeth(C$, 'toArray$',  function () {
return this.dq.toArray$();
});

Clazz.newMeth(C$, 'toArray$OA',  function (array) {
return this.dq.toArray$OA(array);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return ((P$.ScheduledThreadPoolExecutor$DelayedWorkQueue$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ScheduledThreadPoolExecutor$DelayedWorkQueue$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.it=this.b$['java.util.concurrent.ScheduledThreadPoolExecutor.DelayedWorkQueue'].dq.iterator$();
},1);

C$.$fields$=[['O',['it','java.util.Iterator']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
return this.it.next$();
});

Clazz.newMeth(C$, 'remove$',  function () {
this.it.remove$();
});
})()
), Clazz.new_(P$.ScheduledThreadPoolExecutor$DelayedWorkQueue$1.$init$,[this, null]));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

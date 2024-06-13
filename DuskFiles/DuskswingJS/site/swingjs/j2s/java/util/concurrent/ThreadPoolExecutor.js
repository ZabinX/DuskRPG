(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Thread',['java.util.concurrent.ThreadPoolExecutor','.AbortPolicy'],'java.util.concurrent.atomic.AtomicInteger','java.util.concurrent.locks.ReentrantLock','java.util.HashSet','java.util.ArrayList',['java.util.concurrent.ThreadPoolExecutor','.Worker'],'java.util.concurrent.TimeUnit',['javajs.async.SwingJSUtils','.StateHelper'],'Error','java.util.concurrent.Executors','swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThreadPoolExecutor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.AbstractExecutorService');
C$.$classes$=[['Worker',18],['CallerRunsPolicy',9],['AbortPolicy',9],['DiscardPolicy',9],['DiscardOldestPolicy',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ctl=Clazz.new_([C$.ctlOf$I$I(-536870912, 0)],$I$(3,1).c$$I);
this.mainLock=Clazz.new_($I$(4,1));
this.workers=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['allowCoreThreadTimeOut','stopped'],'I',['largestPoolSize','corePoolSize','maximumPoolSize'],'J',['completedTaskCount','keepAliveTime'],'O',['ctl','java.util.concurrent.atomic.AtomicInteger','workQueue','java.util.concurrent.BlockingQueue','mainLock','java.util.concurrent.locks.ReentrantLock','workers','java.util.HashSet','threadFactory','java.util.concurrent.ThreadFactory','handler','java.util.concurrent.RejectedExecutionHandler']]
,['O',['defaultHandler','java.util.concurrent.RejectedExecutionHandler']]]

Clazz.newMeth(C$, 'runStateOf$I',  function (c) {
return c & ~536870911;
}, 1);

Clazz.newMeth(C$, 'workerCountOf$I',  function (c) {
return c & 536870911;
}, 1);

Clazz.newMeth(C$, 'ctlOf$I$I',  function (rs, wc) {
return rs | wc;
}, 1);

Clazz.newMeth(C$, 'runStateLessThan$I$I',  function (c, s) {
return c < s;
}, 1);

Clazz.newMeth(C$, 'runStateAtLeast$I$I',  function (c, s) {
return c >= s;
}, 1);

Clazz.newMeth(C$, 'isRunning$I',  function (c) {
return c < 0;
}, 1);

Clazz.newMeth(C$, 'compareAndIncrementWorkerCount$I',  function (expect) {
return this.ctl.compareAndSet$I$I(expect, expect + 1);
}, p$1);

Clazz.newMeth(C$, 'compareAndDecrementWorkerCount$I',  function (expect) {
return this.ctl.compareAndSet$I$I(expect, expect - 1);
}, p$1);

Clazz.newMeth(C$, 'decrementWorkerCount',  function () {
do {
} while (!p$1.compareAndDecrementWorkerCount$I.apply(this, [this.ctl.get$()]));
}, p$1);

Clazz.newMeth(C$, 'advanceRunState$I',  function (targetState) {
for (; ; ) {
var c=this.ctl.get$();
if (C$.runStateAtLeast$I$I(c, targetState) || this.ctl.compareAndSet$I$I(c, C$.ctlOf$I$I(targetState, C$.workerCountOf$I(c))) ) break;
}
}, p$1);

Clazz.newMeth(C$, 'tryTerminate$',  function () {
this.terminated$();
});

Clazz.newMeth(C$, 'checkShutdownAccess',  function () {
}, p$1);

Clazz.newMeth(C$, 'interruptWorkers',  function () {
var mainLock=this.mainLock;
mainLock.lock$();
try {
for (var w, $w = this.workers.iterator$(); $w.hasNext$()&&((w=($w.next$())),1);) {
w.interruptIfStarted$();
}
} finally {
mainLock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'interruptIdleWorkers$Z',  function (onlyOne) {
var mainLock=this.mainLock;
mainLock.lock$();
try {
for (var w, $w = this.workers.iterator$(); $w.hasNext$()&&((w=($w.next$())),1);) {
var t=w.thread;
if (!t.isInterrupted$() && w.tryLock$() ) {
try {
t.interrupt$();
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"SecurityException")){
} else {
throw ignore;
}
} finally {
w.unlock$();
}
}if (onlyOne) break;
}
} finally {
mainLock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'interruptIdleWorkers',  function () {
p$1.interruptIdleWorkers$Z.apply(this, [false]);
}, p$1);

Clazz.newMeth(C$, 'reject$Runnable',  function (command) {
this.handler.rejectedExecution$Runnable$java_util_concurrent_ThreadPoolExecutor(command, this);
});

Clazz.newMeth(C$, 'onShutdown$',  function () {
});

Clazz.newMeth(C$, 'isRunningOrShutdown$Z',  function (shutdownOK) {
return (shutdownOK || !this.stopped );
});

Clazz.newMeth(C$, 'drainQueue',  function () {
var q=this.workQueue;
var taskList=Clazz.new_($I$(6,1));
q.drainTo$java_util_Collection(taskList);
if (!q.isEmpty$()) {
for (var r, $r = 0, $$r = q.toArray$OA(Clazz.array(Runnable, [0])); $r<$$r.length&&((r=($$r[$r])),1);$r++) {
if (q.remove$O(r)) taskList.add$O(r);
}
}return taskList;
}, p$1);

Clazz.newMeth(C$, 'addWorker$Runnable$Z',  function (firstTask, core) {
var workerStarted=false;
var workerAdded=false;
var w=null;
try {
var mainLock=this.mainLock;
w=Clazz.new_($I$(7,1).c$$Runnable,[this, null, firstTask]);
var t=w.thread;
if (t != null ) {
mainLock.lock$();
try {
var c=this.ctl.get$();
var rs=C$.runStateOf$I(c);
if (rs < 0 || (rs == 0 && firstTask == null  ) ) {
if (t.isAlive$()) throw Clazz.new_(Clazz.load('IllegalThreadStateException'));
this.workers.add$O(w);
var s=this.workers.size$();
if (s > this.largestPoolSize) this.largestPoolSize=s;
workerAdded=true;
}} finally {
mainLock.unlock$();
}
if (workerAdded) {
t.start$();
workerStarted=true;
}}} finally {
if (!workerStarted) p$1.addWorkerFailed$java_util_concurrent_ThreadPoolExecutor_Worker.apply(this, [w]);
}
return workerStarted;
}, p$1);

Clazz.newMeth(C$, 'addWorkerFailed$java_util_concurrent_ThreadPoolExecutor_Worker',  function (w) {
var mainLock=this.mainLock;
mainLock.lock$();
try {
if (w != null ) this.workers.remove$O(w);
p$1.decrementWorkerCount.apply(this, []);
this.tryTerminate$();
} finally {
mainLock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'processWorkerExit$java_util_concurrent_ThreadPoolExecutor_Worker$Z',  function (w, completedAbruptly) {
if (completedAbruptly) p$1.decrementWorkerCount.apply(this, []);
var mainLock=this.mainLock;
mainLock.lock$();
try {
(this.completedTaskCount=Long.$add(this.completedTaskCount,(w.completedTasks)));
this.workers.remove$O(w);
} finally {
mainLock.unlock$();
}
this.tryTerminate$();
var c=this.ctl.get$();
if (C$.runStateLessThan$I$I(c, 536870912)) {
if (!completedAbruptly) {
var min=this.allowCoreThreadTimeOut ? 0 : this.corePoolSize;
if (min == 0 && !this.workQueue.isEmpty$() ) min=1;
if (C$.workerCountOf$I(c) >= min) return;
}}}, p$1);

Clazz.newMeth(C$, 'getTask',  function () {
var timedOut=false;
 retry : for (; ; ) {
var c=this.ctl.get$();
var rs=C$.runStateOf$I(c);
if (rs >= 0 && (rs >= 536870912 || this.workQueue.isEmpty$() ) ) {
p$1.decrementWorkerCount.apply(this, []);
return null;
}var timed;
for (; ; ) {
var wc=C$.workerCountOf$I(c);
timed=this.allowCoreThreadTimeOut || wc > this.corePoolSize ;
if (wc <= this.maximumPoolSize && !(timedOut && timed ) ) break;
if (p$1.compareAndDecrementWorkerCount$I.apply(this, [c])) return null;
c=this.ctl.get$();
if (C$.runStateOf$I(c) != rs) continue retry;
}
try {
var r=timed ? this.workQueue.poll$J$java_util_concurrent_TimeUnit(this.keepAliveTime, $I$(8).NANOSECONDS) : this.workQueue.take$();
if (r != null ) return r;
timedOut=true;
} catch (retry) {
if (Clazz.exceptionOf(retry,"InterruptedException")){
timedOut=false;
} else {
throw retry;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'runWorker$java_util_concurrent_ThreadPoolExecutor_Worker',  function (w) {
var wt=$I$(1).currentThread$();
var task=w.firstTask;
w.firstTask=null;
w.unlock$();
var completedAbruptly=true;
try {
if (task != null ) {
w.lock$();
if ((C$.runStateAtLeast$I$I(this.ctl.get$(), 536870912) || ($I$(1).interrupted$() && C$.runStateAtLeast$I$I(this.ctl.get$(), 536870912) ) ) && !wt.isInterrupted$() ) wt.interrupt$();
$I$(9,"delayedRun$I$Runnable",[100, ((P$.ThreadPoolExecutor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThreadPoolExecutor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
this.b$['java.util.concurrent.ThreadPoolExecutor'].beforeExecute$Thread$Runnable.apply(this.b$['java.util.concurrent.ThreadPoolExecutor'], [this.$finals$.wt, this.$finals$.task]);
var thrown=null;
try {
this.$finals$.task.run$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"RuntimeException")){
var x = e$$;
{
thrown=x;
throw x;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var x = e$$;
{
thrown=x;
throw x;
}
} else {
var x = e$$;
{
thrown=x;
throw Clazz.new_($I$(10,1).c$$Throwable,[x]);
}
}
} finally {
this.b$['java.util.concurrent.ThreadPoolExecutor'].afterExecute$Runnable$Throwable.apply(this.b$['java.util.concurrent.ThreadPoolExecutor'], [this.$finals$.task, thrown]);
}
} finally {
(this.$finals$.w.completedTasks=Long.$inc(this.$finals$.w.completedTasks,1));
this.$finals$.w.unlock$();
}
});
})()
), Clazz.new_(P$.ThreadPoolExecutor$1.$init$,[this, {wt:wt,task:task,w:w}]))]);
}completedAbruptly=false;
} finally {
p$1.processWorkerExit$java_util_concurrent_ThreadPoolExecutor_Worker$Z.apply(this, [w, completedAbruptly]);
}
});

Clazz.newMeth(C$, 'c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue',  function (corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue) {
C$.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler.apply(this, [corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, $I$(11).defaultThreadFactory$(), C$.defaultHandler]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory',  function (corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory) {
C$.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler.apply(this, [corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory, C$.defaultHandler]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_RejectedExecutionHandler',  function (corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, handler) {
C$.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler.apply(this, [corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, $I$(11).defaultThreadFactory$(), handler]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler',  function (corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory, handler) {
Clazz.super_(C$, this);
if (corePoolSize < 0 || maximumPoolSize <= 0  || maximumPoolSize < corePoolSize  || Long.$lt(keepAliveTime,0 ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (workQueue == null  || threadFactory == null   || handler == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.corePoolSize=corePoolSize;
this.maximumPoolSize=maximumPoolSize;
this.workQueue=workQueue;
this.keepAliveTime=unit.toNanos$J(keepAliveTime);
this.threadFactory=threadFactory;
this.handler=handler;
}, 1);

Clazz.newMeth(C$, 'execute$Runnable',  function (command) {
if (command == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var c=this.ctl.get$();
if (C$.workerCountOf$I(c) < this.corePoolSize) {
if (p$1.addWorker$Runnable$Z.apply(this, [command, true])) return;
c=this.ctl.get$();
}if (C$.isRunning$I(c) && this.workQueue.offer$O(command) ) {
var recheck=this.ctl.get$();
if (!C$.isRunning$I(recheck) && this.remove$Runnable(command) ) this.reject$Runnable(command);
 else if (C$.workerCountOf$I(recheck) == 0) p$1.addWorker$Runnable$Z.apply(this, [null, false]);
} else if (!p$1.addWorker$Runnable$Z.apply(this, [command, false])) this.reject$Runnable(command);
});

Clazz.newMeth(C$, 'shutdown$',  function () {
this.stopped=true;
p$1.interruptIdleWorkers.apply(this, []);
this.onShutdown$();
this.tryTerminate$();
});

Clazz.newMeth(C$, 'shutdownNow$',  function () {
var tasks;
var mainLock=this.mainLock;
mainLock.lock$();
try {
p$1.checkShutdownAccess.apply(this, []);
p$1.advanceRunState$I.apply(this, [536870912]);
p$1.interruptWorkers.apply(this, []);
tasks=p$1.drainQueue.apply(this, []);
} finally {
mainLock.unlock$();
}
this.tryTerminate$();
return tasks;
});

Clazz.newMeth(C$, 'isShutdown$',  function () {
return this.stopped;
});

Clazz.newMeth(C$, 'isTerminating$',  function () {
return false;
});

Clazz.newMeth(C$, 'isTerminated$',  function () {
return this.stopped;
});

Clazz.newMeth(C$, 'awaitTermination$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
$I$(12).notImplemented$S("ThreadPoolExecutor.awaitTermination -- Sorry, can\'t wait in JavaScript");
return false;
});

Clazz.newMeth(C$, 'finalize$',  function () {
this.shutdown$();
});

Clazz.newMeth(C$, 'setThreadFactory$java_util_concurrent_ThreadFactory',  function (threadFactory) {
if (threadFactory == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.threadFactory=threadFactory;
});

Clazz.newMeth(C$, 'getThreadFactory$',  function () {
return this.threadFactory;
});

Clazz.newMeth(C$, 'setRejectedExecutionHandler$java_util_concurrent_RejectedExecutionHandler',  function (handler) {
if (handler == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.handler=handler;
});

Clazz.newMeth(C$, 'getRejectedExecutionHandler$',  function () {
return this.handler;
});

Clazz.newMeth(C$, 'setCorePoolSize$I',  function (corePoolSize) {
if (corePoolSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var delta=corePoolSize - this.corePoolSize;
this.corePoolSize=corePoolSize;
if (C$.workerCountOf$I(this.ctl.get$()) > corePoolSize) p$1.interruptIdleWorkers.apply(this, []);
 else if (delta > 0) {
var k=Math.min(delta, this.workQueue.size$());
while (k-- > 0 && p$1.addWorker$Runnable$Z.apply(this, [null, true]) ){
if (this.workQueue.isEmpty$()) break;
}
}});

Clazz.newMeth(C$, 'getCorePoolSize$',  function () {
return this.corePoolSize;
});

Clazz.newMeth(C$, 'prestartCoreThread$',  function () {
return C$.workerCountOf$I(this.ctl.get$()) < this.corePoolSize && p$1.addWorker$Runnable$Z.apply(this, [null, true]) ;
});

Clazz.newMeth(C$, 'prestartAllCoreThreads$',  function () {
var n=0;
while (p$1.addWorker$Runnable$Z.apply(this, [null, true]))++n;

return n;
});

Clazz.newMeth(C$, 'allowsCoreThreadTimeOut$',  function () {
return this.allowCoreThreadTimeOut;
});

Clazz.newMeth(C$, 'allowCoreThreadTimeOut$Z',  function (value) {
if (value && Long.$le(this.keepAliveTime,0 ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Core threads must have nonzero keep alive times"]);
if (value != this.allowCoreThreadTimeOut ) {
this.allowCoreThreadTimeOut=value;
if (value) p$1.interruptIdleWorkers.apply(this, []);
}});

Clazz.newMeth(C$, 'setMaximumPoolSize$I',  function (maximumPoolSize) {
if (maximumPoolSize <= 0 || maximumPoolSize < this.corePoolSize ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.maximumPoolSize=maximumPoolSize;
if (C$.workerCountOf$I(this.ctl.get$()) > maximumPoolSize) p$1.interruptIdleWorkers.apply(this, []);
});

Clazz.newMeth(C$, 'getMaximumPoolSize$',  function () {
return this.maximumPoolSize;
});

Clazz.newMeth(C$, 'setKeepAliveTime$J$java_util_concurrent_TimeUnit',  function (time, unit) {
if (Long.$lt(time,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (Long.$eq(time,0 ) && this.allowsCoreThreadTimeOut$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Core threads must have nonzero keep alive times"]);
var keepAliveTime=unit.toNanos$J(time);
var delta=Long.$sub(keepAliveTime,this.keepAliveTime);
this.keepAliveTime=keepAliveTime;
if (Long.$lt(delta,0 )) p$1.interruptIdleWorkers.apply(this, []);
});

Clazz.newMeth(C$, 'getKeepAliveTime$java_util_concurrent_TimeUnit',  function (unit) {
return unit.convert$J$java_util_concurrent_TimeUnit(this.keepAliveTime, $I$(8).NANOSECONDS);
});

Clazz.newMeth(C$, 'getQueue$',  function () {
return this.workQueue;
});

Clazz.newMeth(C$, 'remove$Runnable',  function (task) {
var removed=this.workQueue.remove$O(task);
this.tryTerminate$();
return removed;
});

Clazz.newMeth(C$, 'purge$',  function () {
var q=this.workQueue;
try {
var it=q.iterator$();
while (it.hasNext$()){
var r=it.next$();
if (Clazz.instanceOf(r, "java.util.concurrent.Future") && (r).isCancelled$() ) it.remove$();
}
} catch (fallThrough) {
if (Clazz.exceptionOf(fallThrough,"java.util.ConcurrentModificationException")){
for (var r, $r = 0, $$r = q.toArray$(); $r<$$r.length&&((r=($$r[$r])),1);$r++) if (Clazz.instanceOf(r, "java.util.concurrent.Future") && (r).isCancelled$() ) q.remove$O(r);

} else {
throw fallThrough;
}
}
this.tryTerminate$();
});

Clazz.newMeth(C$, 'getPoolSize$',  function () {
var mainLock=this.mainLock;
mainLock.lock$();
try {
return C$.runStateAtLeast$I$I(this.ctl.get$(), 1073741824) ? 0 : this.workers.size$();
} finally {
mainLock.unlock$();
}
});

Clazz.newMeth(C$, 'getActiveCount$',  function () {
var mainLock=this.mainLock;
mainLock.lock$();
try {
var n=0;
for (var w, $w = this.workers.iterator$(); $w.hasNext$()&&((w=($w.next$())),1);) if (w.isLocked$()) ++n;

return n;
} finally {
mainLock.unlock$();
}
});

Clazz.newMeth(C$, 'getLargestPoolSize$',  function () {
var mainLock=this.mainLock;
mainLock.lock$();
try {
return this.largestPoolSize;
} finally {
mainLock.unlock$();
}
});

Clazz.newMeth(C$, 'getTaskCount$',  function () {
var mainLock=this.mainLock;
mainLock.lock$();
try {
var n=this.completedTaskCount;
for (var w, $w = this.workers.iterator$(); $w.hasNext$()&&((w=($w.next$())),1);) {
(n=Long.$add(n,(w.completedTasks)));
if (w.isLocked$()) (n=Long.$inc(n,1));
}
return Long.$add(n,this.workQueue.size$());
} finally {
mainLock.unlock$();
}
});

Clazz.newMeth(C$, 'getCompletedTaskCount$',  function () {
var mainLock=this.mainLock;
mainLock.lock$();
try {
var n=this.completedTaskCount;
for (var w, $w = this.workers.iterator$(); $w.hasNext$()&&((w=($w.next$())),1);) (n=Long.$add(n,(w.completedTasks)));

return n;
} finally {
mainLock.unlock$();
}
});

Clazz.newMeth(C$, 'beforeExecute$Thread$Runnable',  function (t, r) {
});

Clazz.newMeth(C$, 'afterExecute$Runnable$Throwable',  function (r, t) {
});

Clazz.newMeth(C$, 'terminated$',  function () {
});

C$.$static$=function(){C$.$static$=0;
C$.defaultHandler=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadPoolExecutor, "Worker", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.locks.AbstractQueuedSynchronizer', 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['completedTasks'],'O',['thread','Thread','firstTask','Runnable']]]

Clazz.newMeth(C$, 'c$$Runnable',  function (firstTask) {
Clazz.super_(C$, this);
this.setState$I(-1);
this.firstTask=firstTask;
this.thread=this.b$['java.util.concurrent.ThreadPoolExecutor'].getThreadFactory$.apply(this.b$['java.util.concurrent.ThreadPoolExecutor'], []).newThread$Runnable(this);
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['java.util.concurrent.ThreadPoolExecutor'].runWorker$java_util_concurrent_ThreadPoolExecutor_Worker.apply(this.b$['java.util.concurrent.ThreadPoolExecutor'], [this]);
});

Clazz.newMeth(C$, 'isHeldExclusively$',  function () {
return this.getState$() != 0;
});

Clazz.newMeth(C$, 'tryAcquire$I',  function (unused) {
if (this.compareAndSetState$I$I(0, 1)) {
this.setExclusiveOwnerThread$Thread($I$(1).currentThread$());
return true;
}return false;
});

Clazz.newMeth(C$, 'tryRelease$I',  function (unused) {
this.setExclusiveOwnerThread$Thread(null);
this.setState$I(0);
return true;
});

Clazz.newMeth(C$, 'lock$',  function () {
this.acquire$I(1);
});

Clazz.newMeth(C$, 'tryLock$',  function () {
return this.tryAcquire$I(1);
});

Clazz.newMeth(C$, 'unlock$',  function () {
this.release$I(1);
});

Clazz.newMeth(C$, 'isLocked$',  function () {
return this.isHeldExclusively$();
});

Clazz.newMeth(C$, 'interruptIfStarted$',  function () {
var t;
if (this.getState$() >= 0 && (t=this.thread) != null   && !t.isInterrupted$() ) {
try {
t.interrupt$();
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"SecurityException")){
} else {
throw ignore;
}
}
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadPoolExecutor, "CallerRunsPolicy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.RejectedExecutionHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'rejectedExecution$Runnable$java_util_concurrent_ThreadPoolExecutor',  function (r, e) {
if (!e.isShutdown$()) {
r.run$();
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadPoolExecutor, "AbortPolicy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.RejectedExecutionHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'rejectedExecution$Runnable$java_util_concurrent_ThreadPoolExecutor',  function (r, e) {
throw Clazz.new_(Clazz.load('java.util.concurrent.RejectedExecutionException'));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadPoolExecutor, "DiscardPolicy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.RejectedExecutionHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'rejectedExecution$Runnable$java_util_concurrent_ThreadPoolExecutor',  function (r, e) {
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadPoolExecutor, "DiscardOldestPolicy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.RejectedExecutionHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'rejectedExecution$Runnable$java_util_concurrent_ThreadPoolExecutor',  function (r, e) {
if (!e.isShutdown$()) {
e.getQueue$().poll$();
e.execute$Runnable(r);
}});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

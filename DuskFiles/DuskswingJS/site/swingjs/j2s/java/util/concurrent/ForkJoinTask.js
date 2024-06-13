(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.ForkJoinTask','Thread','java.util.concurrent.locks.ReentrantLock','java.lang.ref.ReferenceQueue',['java.util.concurrent.ForkJoinTask','.ExceptionNode'],'sun.misc.Unsafe','Error','java.util.concurrent.ForkJoinPool','java.util.concurrent.TimeUnit','swingjs.JSUtil',['java.util.concurrent.ForkJoinTask','.AdaptedRunnableAction'],['java.util.concurrent.ForkJoinTask','.AdaptedRunnable'],['java.util.concurrent.ForkJoinTask','.AdaptedCallable']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ForkJoinTask", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.concurrent.Future', 'java.io.Serializable']);
C$.$classes$=[['ExceptionNode',24],['AdaptedRunnable',24],['AdaptedRunnableAction',24],['RunnableExecuteAction',24],['AdaptedCallable',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['status']]
,['J',['STATUS'],'O',['exceptionTable','java.util.concurrent.ForkJoinTask.ExceptionNode[]','exceptionTableLock','java.util.concurrent.locks.ReentrantLock','exceptionTableRefQueue','java.lang.ref.ReferenceQueue','U','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'setCompletion$I',  function (completion) {
for (var s; ; ) {
if ((s=this.status) < 0) return s;
if (C$.U.compareAndSwapInt$O$J$I$I(this, C$.STATUS, s, s | completion)) {
if ((s >>> 16) != 0) {
this.notifyAll$();
}return completion;
}}
}, p$1);

Clazz.newMeth(C$, 'doExec$',  function () {
var s;
var completed;
if ((s=this.status) >= 0) {
try {
completed=this.exec$();
} catch (rex) {
return p$1.setExceptionalCompletion$Throwable.apply(this, [rex]);
}
if (completed) s=p$1.setCompletion$I.apply(this, [-268435456]);
}return s;
});

Clazz.newMeth(C$, 'internalWait$J',  function (timeout) {
var s;
if ((s=this.status) >= 0 && C$.U.compareAndSwapInt$O$J$I$I(this, C$.STATUS, s, s | 65536) ) {
{
if (this.status >= 0) try {
this.wait$J(timeout);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
} else {
throw ie;
}
}
 else this.notifyAll$();
}}});

Clazz.newMeth(C$, 'externalAwaitDone',  function () {
var s=((Clazz.instanceOf(this, "java.util.concurrent.CountedCompleter")) ? $I$(8).common.externalHelpComplete$java_util_concurrent_CountedCompleter$I(this, 0) : $I$(8).common.tryExternalUnpush$java_util_concurrent_ForkJoinTask(this) ? this.doExec$() : 0);
if (s >= 0 && (s=this.status) >= 0 ) {
var interrupted=false;
do {
if (C$.U.compareAndSwapInt$O$J$I$I(this, C$.STATUS, s, s | 65536)) {
{
if (this.status >= 0) {
try {
this.wait$J(0);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
interrupted=true;
} else {
throw ie;
}
}
} else this.notifyAll$();
}}} while ((s=this.status) >= 0);
if (interrupted) $I$(2).currentThread$().interrupt$();
}return s;
}, p$1);

Clazz.newMeth(C$, 'externalInterruptibleAwaitDone',  function () {
var s;
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
if ((s=this.status) >= 0 && (s=((Clazz.instanceOf(this, "java.util.concurrent.CountedCompleter")) ? $I$(8).common.externalHelpComplete$java_util_concurrent_CountedCompleter$I(this, 0) : $I$(8).common.tryExternalUnpush$java_util_concurrent_ForkJoinTask(this) ? this.doExec$() : 0)) >= 0 ) {
while ((s=this.status) >= 0){
if (C$.U.compareAndSwapInt$O$J$I$I(this, C$.STATUS, s, s | 65536)) {
{
if (this.status >= 0) this.wait$J(0);
 else this.notifyAll$();
}}}
}return s;
}, p$1);

Clazz.newMeth(C$, 'doJoin',  function () {
var s;
var t;
var wt;
var w;
return (s=this.status) < 0 ? s : (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) ? (w=(wt=t).workQueue).tryUnpush$java_util_concurrent_ForkJoinTask(this) && (s=this.doExec$()) < 0  ? s : wt.pool.awaitJoin$java_util_concurrent_ForkJoinPool_WorkQueue$java_util_concurrent_ForkJoinTask$J(w, this, 0) : p$1.externalAwaitDone.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'doInvoke',  function () {
var s;
var t;
var wt;
return (s=this.doExec$()) < 0 ? s : (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) ? (wt=t).pool.awaitJoin$java_util_concurrent_ForkJoinPool_WorkQueue$java_util_concurrent_ForkJoinTask$J(wt.workQueue, this, 0) : p$1.externalAwaitDone.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'recordExceptionalCompletion$Throwable',  function (ex) {
var s;
if ((s=this.status) >= 0) {
var h=System.identityHashCode$O(this);
var lock=C$.exceptionTableLock;
lock.lock$();
try {
C$.expungeStaleExceptions$();
var t=C$.exceptionTable;
var i=h & (t.length - 1);
for (var e=t[i]; ; e=e.next) {
if (e == null ) {
t[i]=Clazz.new_($I$(5,1).c$$java_util_concurrent_ForkJoinTask$Throwable$java_util_concurrent_ForkJoinTask_ExceptionNode,[this, ex, t[i]]);
break;
}if (e.get$() === this ) break;
}
} finally {
lock.unlock$();
}
s=p$1.setCompletion$I.apply(this, [-2147483648]);
}return s;
});

Clazz.newMeth(C$, 'setExceptionalCompletion$Throwable',  function (ex) {
var s=this.recordExceptionalCompletion$Throwable(ex);
if ((s & -268435456) == -2147483648) this.internalPropagateException$Throwable(ex);
return s;
}, p$1);

Clazz.newMeth(C$, 'internalPropagateException$Throwable',  function (ex) {
});

Clazz.newMeth(C$, 'cancelIgnoringExceptions$java_util_concurrent_ForkJoinTask',  function (t) {
if (t != null  && t.status >= 0 ) {
try {
t.cancel$Z(false);
} catch (ignore) {
}
}}, 1);

Clazz.newMeth(C$, 'clearExceptionalCompletion',  function () {
var h=System.identityHashCode$O(this);
var lock=C$.exceptionTableLock;
lock.lock$();
try {
var t=C$.exceptionTable;
var i=h & (t.length - 1);
var e=t[i];
var pred=null;
while (e != null ){
var next=e.next;
if (e.get$() === this ) {
if (pred == null ) t[i]=next;
 else pred.next=next;
break;
}pred=e;
e=next;
}
C$.expungeStaleExceptions$();
this.status=0;
} finally {
lock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'getThrowableException',  function () {
if ((this.status & -268435456) != -2147483648) return null;
var h=System.identityHashCode$O(this);
var e;
var lock=C$.exceptionTableLock;
lock.lock$();
try {
C$.expungeStaleExceptions$();
var t=C$.exceptionTable;
e=t[h & (t.length - 1)];
while (e != null  && e.get$() !== this  )e=e.next;

} finally {
lock.unlock$();
}
var ex;
if (e == null  || (ex=e.ex) == null  ) return null;
if (Long.$ne(e.thrower,$I$(2).currentThread$().getId$() )) {
var ec=ex.getClass$();
try {
var noArgCtor=null;
var cs=ec.getConstructors$();
for (var i=0; i < cs.length; ++i) {
var c=cs[i];
var ps=c.getParameterTypes$();
if (ps.length == 0) noArgCtor=c;
 else if (ps.length == 1 && ps[0] === Clazz.getClass(Throwable)  ) {
var wx=c.newInstance$OA(Clazz.array(java.lang.Object, -1, [ex]));
return (wx == null ) ? ex : wx;
}}
if (noArgCtor != null ) {
var wx=(noArgCtor.newInstance$OA(Clazz.array(java.lang.Object, -1, [])));
if (wx != null ) {
wx.initCause$Throwable(ex);
return wx;
}}} catch (ignore) {
if (Clazz.exceptionOf(ignore,"Exception")){
} else {
throw ignore;
}
}
}return ex;
}, p$1);

Clazz.newMeth(C$, 'expungeStaleExceptions$',  function () {
for (var x; (x=C$.exceptionTableRefQueue.poll$()) != null ; ) {
if (Clazz.instanceOf(x, "java.util.concurrent.ForkJoinTask.ExceptionNode")) {
var hashCode=(x).hashCode;
var t=C$.exceptionTable;
var i=hashCode & (t.length - 1);
var e=t[i];
var pred=null;
while (e != null ){
var next=e.next;
if (e === x ) {
if (pred == null ) t[i]=next;
 else pred.next=next;
break;
}pred=e;
e=next;
}
}}
}, 1);

Clazz.newMeth(C$, 'helpExpungeStaleExceptions$',  function () {
var lock=C$.exceptionTableLock;
if (lock.tryLock$()) {
try {
C$.expungeStaleExceptions$();
} finally {
lock.unlock$();
}
}}, 1);

Clazz.newMeth(C$, 'rethrow$Throwable',  function (ex) {
if (ex != null ) C$.uncheckedThrow$Throwable(ex);
}, 1);

Clazz.newMeth(C$, 'uncheckedThrow$Throwable',  function (t) {
throw t;
}, 1);

Clazz.newMeth(C$, 'reportException$I',  function (s) {
if (s == -1073741824) throw Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'));
if (s == -2147483648) C$.rethrow$Throwable(p$1.getThrowableException.apply(this, []));
}, p$1);

Clazz.newMeth(C$, 'fork$',  function () {
var t;
if (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) (t).workQueue.push$java_util_concurrent_ForkJoinTask(this);
 else $I$(8).common.externalPush$java_util_concurrent_ForkJoinTask(this);
return this;
});

Clazz.newMeth(C$, 'join$',  function () {
var s;
if ((s=p$1.doJoin.apply(this, []) & -268435456) != -268435456) p$1.reportException$I.apply(this, [s]);
return this.getRawResult$();
});

Clazz.newMeth(C$, 'invoke$',  function () {
var s;
if ((s=p$1.doInvoke.apply(this, []) & -268435456) != -268435456) p$1.reportException$I.apply(this, [s]);
return this.getRawResult$();
});

Clazz.newMeth(C$, 'invokeAll$java_util_concurrent_ForkJoinTask$java_util_concurrent_ForkJoinTask',  function (t1, t2) {
var s1;
var s2;
t2.fork$();
if ((s1=p$1.doInvoke.apply(t1, []) & -268435456) != -268435456) p$1.reportException$I.apply(t1, [s1]);
if ((s2=p$1.doJoin.apply(t2, []) & -268435456) != -268435456) p$1.reportException$I.apply(t2, [s2]);
}, 1);

Clazz.newMeth(C$, 'invokeAll$java_util_concurrent_ForkJoinTaskA',  function (tasks) {
var ex=null;
var last=tasks.length - 1;
for (var i=last; i >= 0; --i) {
var t=tasks[i];
if (t == null ) {
if (ex == null ) ex=Clazz.new_(Clazz.load('NullPointerException'));
} else if (i != 0) t.fork$();
 else if (p$1.doInvoke.apply(t, []) < -268435456 && ex == null  ) ex=t.getException$();
}
for (var i=1; i <= last; ++i) {
var t=tasks[i];
if (t != null ) {
if (ex != null ) t.cancel$Z(false);
 else if (p$1.doJoin.apply(t, []) < -268435456) ex=t.getException$();
}}
if (ex != null ) C$.rethrow$Throwable(ex);
}, 1);

Clazz.newMeth(C$, 'invokeAll$java_util_Collection',  function (tasks) {
if (!(Clazz.instanceOf(tasks, "java.util.RandomAccess")) || !(Clazz.instanceOf(tasks, "java.util.List")) ) {
C$.invokeAll$java_util_concurrent_ForkJoinTaskA(tasks.toArray$OA(Clazz.array(C$, [tasks.size$()])));
return tasks;
}var ts=tasks;
var ex=null;
var last=ts.size$() - 1;
for (var i=last; i >= 0; --i) {
var t=ts.get$I(i);
if (t == null ) {
if (ex == null ) ex=Clazz.new_(Clazz.load('NullPointerException'));
} else if (i != 0) t.fork$();
 else if (p$1.doInvoke.apply(t, []) < -268435456 && ex == null  ) ex=t.getException$();
}
for (var i=1; i <= last; ++i) {
var t=ts.get$I(i);
if (t != null ) {
if (ex != null ) t.cancel$Z(false);
 else if (p$1.doJoin.apply(t, []) < -268435456) ex=t.getException$();
}}
if (ex != null ) C$.rethrow$Throwable(ex);
return tasks;
}, 1);

Clazz.newMeth(C$, 'cancel$Z',  function (mayInterruptIfRunning) {
return (p$1.setCompletion$I.apply(this, [-1073741824]) & -268435456) == -1073741824;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.status < 0;
});

Clazz.newMeth(C$, 'isCancelled$',  function () {
return (this.status & -268435456) == -1073741824;
});

Clazz.newMeth(C$, 'isCompletedAbnormally$',  function () {
return this.status < -268435456;
});

Clazz.newMeth(C$, 'isCompletedNormally$',  function () {
return (this.status & -268435456) == -268435456;
});

Clazz.newMeth(C$, 'getException$',  function () {
var s=this.status & -268435456;
return ((s >= -268435456) ? null : (s == -1073741824) ? Clazz.new_(Clazz.load('java.util.concurrent.CancellationException')) : p$1.getThrowableException.apply(this, []));
});

Clazz.newMeth(C$, 'completeExceptionally$Throwable',  function (ex) {
p$1.setExceptionalCompletion$Throwable.apply(this, [(Clazz.instanceOf(ex, "java.lang.RuntimeException")) || (Clazz.instanceOf(ex, "java.lang.Error"))  ? ex : Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ex])]);
});

Clazz.newMeth(C$, 'complete$O',  function (value) {
try {
this.setRawResult$O(value);
} catch (rex) {
p$1.setExceptionalCompletion$Throwable.apply(this, [rex]);
return;
}
p$1.setCompletion$I.apply(this, [-268435456]);
});

Clazz.newMeth(C$, 'quietlyComplete$',  function () {
p$1.setCompletion$I.apply(this, [-268435456]);
});

Clazz.newMeth(C$, 'get$',  function () {
var s=(Clazz.instanceOf($I$(2).currentThread$(), "java.util.concurrent.ForkJoinWorkerThread")) ? p$1.doJoin.apply(this, []) : p$1.externalInterruptibleAwaitDone.apply(this, []);
var ex;
if ((s&=-268435456) == -1073741824) throw Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'));
if (s == -2147483648 && (ex=p$1.getThrowableException.apply(this, [])) != null  ) throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[ex]);
return this.getRawResult$();
});

Clazz.newMeth(C$, 'get$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
var s;
var nanos=unit.toNanos$J(timeout);
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
if ((s=this.status) >= 0 && Long.$gt(nanos,0 ) ) {
var d=Long.$add(System.nanoTime$(),nanos);
var deadline=(Long.$eq(d,0 )) ? 1 : d;
var t=$I$(2).currentThread$();
if (Clazz.instanceOf(t, "java.util.concurrent.ForkJoinWorkerThread")) {
var wt=t;
s=wt.pool.awaitJoin$java_util_concurrent_ForkJoinPool_WorkQueue$java_util_concurrent_ForkJoinTask$J(wt.workQueue, this, deadline);
} else if ((s=((Clazz.instanceOf(this, "java.util.concurrent.CountedCompleter")) ? $I$(8).common.externalHelpComplete$java_util_concurrent_CountedCompleter$I(this, 0) : $I$(8).common.tryExternalUnpush$java_util_concurrent_ForkJoinTask(this) ? this.doExec$() : 0)) >= 0) {
var ns;
var ms;
while ((s=this.status) >= 0 && Long.$gt((ns=Long.$sub(deadline,System.nanoTime$())),0 ) ){
if (Long.$gt((ms=$I$(9).NANOSECONDS.toMillis$J(ns)),0 ) && C$.U.compareAndSwapInt$O$J$I$I(this, C$.STATUS, s, s | 65536) ) {
{
if (this.status >= 0) this.wait$J(ms);
 else this.notifyAll$();
}}}
}}if (s >= 0) s=this.status;
if ((s&=-268435456) != -268435456) {
var ex;
if (s == -1073741824) throw Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'));
if (s != -2147483648) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
if ((ex=p$1.getThrowableException.apply(this, [])) != null ) throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[ex]);
}return this.getRawResult$();
});

Clazz.newMeth(C$, 'quietlyJoin$',  function () {
p$1.doJoin.apply(this, []);
});

Clazz.newMeth(C$, 'quietlyInvoke$',  function () {
p$1.doInvoke.apply(this, []);
});

Clazz.newMeth(C$, 'helpQuiesce$',  function () {
var t;
if (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) {
var wt=t;
wt.pool.helpQuiescePool$java_util_concurrent_ForkJoinPool_WorkQueue(wt.workQueue);
} else $I$(8).quiesceCommonPool$();
}, 1);

Clazz.newMeth(C$, 'reinitialize$',  function () {
if ((this.status & -268435456) == -2147483648) p$1.clearExceptionalCompletion.apply(this, []);
 else this.status=0;
});

Clazz.newMeth(C$, 'getPool$',  function () {
var t=$I$(2).currentThread$();
return (Clazz.instanceOf(t, "java.util.concurrent.ForkJoinWorkerThread")) ? (t).pool : null;
}, 1);

Clazz.newMeth(C$, 'inForkJoinPool$',  function () {
return Clazz.instanceOf($I$(2).currentThread$(), "java.util.concurrent.ForkJoinWorkerThread");
}, 1);

Clazz.newMeth(C$, 'tryUnfork$',  function () {
var t;
return ((Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) ? (t).workQueue.tryUnpush$java_util_concurrent_ForkJoinTask(this) : $I$(8).common.tryExternalUnpush$java_util_concurrent_ForkJoinTask(this));
});

Clazz.newMeth(C$, 'getQueuedTaskCount$',  function () {
var t;
var q;
if (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) q=(t).workQueue;
 else q=$I$(8).commonSubmitterQueue$();
return (q == null ) ? 0 : q.queueSize$();
}, 1);

Clazz.newMeth(C$, 'getSurplusQueuedTaskCount$',  function () {
return $I$(8).getSurplusQueuedTaskCount$();
}, 1);

Clazz.newMeth(C$, 'peekNextLocalTask$',  function () {
var t;
var q;
if (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) q=(t).workQueue;
 else q=$I$(8).commonSubmitterQueue$();
return (q == null ) ? null : q.peek$();
}, 1);

Clazz.newMeth(C$, 'pollNextLocalTask$',  function () {
var t;
return (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) ? (t).workQueue.nextLocalTask$() : null;
}, 1);

Clazz.newMeth(C$, 'pollTask$',  function () {
var t;
var wt;
return (Clazz.instanceOf((t=$I$(2).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) ? (wt=t).pool.nextTaskFor$java_util_concurrent_ForkJoinPool_WorkQueue(wt.workQueue) : null;
}, 1);

Clazz.newMeth(C$, 'getForkJoinTaskTag$',  function () {
return ($s$[0] = this.status, $s$[0]);
});

Clazz.newMeth(C$, 'setForkJoinTaskTag$H',  function (tag) {
$I$(10).notImplemented$S(null);
return ($s$[0] = this.status, $s$[0]);
});

Clazz.newMeth(C$, 'compareAndSetForkJoinTaskTag$H$H',  function (e, tag) {
for (var s; ; ) {
if (($s$[0] = (s=this.status), $s$[0]) != e) return false;
if (C$.U.compareAndSwapInt$O$J$I$I(this, C$.STATUS, s, (s & ~65535) | (tag & 65535))) return true;
}
});

Clazz.newMeth(C$, 'adapt$Runnable',  function (runnable) {
return Clazz.new_($I$(11,1).c$$Runnable,[runnable]);
}, 1);

Clazz.newMeth(C$, 'adapt$Runnable$O',  function (runnable, result) {
return Clazz.new_($I$(12,1).c$$Runnable$O,[runnable, result]);
}, 1);

Clazz.newMeth(C$, 'adapt$java_util_concurrent_Callable',  function (callable) {
return Clazz.new_($I$(13,1).c$$java_util_concurrent_Callable,[callable]);
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeObject$O(this.getException$());
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var ex=s.readObject$();
if (ex != null ) p$1.setExceptionalCompletion$Throwable.apply(this, [ex]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
C$.exceptionTableLock=Clazz.new_($I$(3,1));
C$.exceptionTableRefQueue=Clazz.new_($I$(4,1));
C$.exceptionTable=Clazz.array($I$(5), [32]);
try {
C$.U=$I$(6).getUnsafe$();
var k=Clazz.getClass(C$);
C$.STATUS=C$.U.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("status"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(7,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForkJoinTask, "ExceptionNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.lang.ref.WeakReference');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hashCode'],'J',['thrower'],'O',['ex','Throwable','next','java.util.concurrent.ForkJoinTask.ExceptionNode']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_ForkJoinTask$Throwable$java_util_concurrent_ForkJoinTask_ExceptionNode',  function (task, ex, next) {
;C$.superclazz.c$$O$java_lang_ref_ReferenceQueue.apply(this,[task, $I$(1).exceptionTableRefQueue]);C$.$init$.apply(this);
this.ex=ex;
this.next=next;
this.thrower=$I$(2).currentThread$().getId$();
this.hashCode=System.identityHashCode$O(task);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForkJoinTask, "AdaptedRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinTask', 'java.util.concurrent.RunnableFuture');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['runnable','Runnable','result','<T>']]]

Clazz.newMeth(C$, 'c$$Runnable$O',  function (runnable, result) {
Clazz.super_(C$, this);
if (runnable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.runnable=runnable;
this.result=result;
}, 1);

Clazz.newMeth(C$, 'getRawResult$',  function () {
return this.result;
});

Clazz.newMeth(C$, 'setRawResult$O',  function (v) {
this.result=v;
});

Clazz.newMeth(C$, 'exec$',  function () {
this.runnable.run$();
return true;
});

Clazz.newMeth(C$, 'run$',  function () {
this.invoke$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForkJoinTask, "AdaptedRunnableAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinTask', 'java.util.concurrent.RunnableFuture');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['runnable','Runnable']]]

Clazz.newMeth(C$, 'c$$Runnable',  function (runnable) {
Clazz.super_(C$, this);
if (runnable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.runnable=runnable;
}, 1);

Clazz.newMeth(C$, 'getRawResult$',  function () {
return null;
});

Clazz.newMeth(C$, ['setRawResult$Void','setRawResult$O'],  function (v) {
});

Clazz.newMeth(C$, 'exec$',  function () {
this.runnable.run$();
return true;
});

Clazz.newMeth(C$, 'run$',  function () {
this.invoke$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForkJoinTask, "RunnableExecuteAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['runnable','Runnable']]]

Clazz.newMeth(C$, 'c$$Runnable',  function (runnable) {
Clazz.super_(C$, this);
if (runnable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.runnable=runnable;
}, 1);

Clazz.newMeth(C$, 'getRawResult$',  function () {
return null;
});

Clazz.newMeth(C$, ['setRawResult$Void','setRawResult$O'],  function (v) {
});

Clazz.newMeth(C$, 'exec$',  function () {
this.runnable.run$();
return true;
});

Clazz.newMeth(C$, 'internalPropagateException$Throwable',  function (ex) {
$I$(1).rethrow$Throwable(ex);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForkJoinTask, "AdaptedCallable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinTask', 'java.util.concurrent.RunnableFuture');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['callable','java.util.concurrent.Callable','result','<T>']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable',  function (callable) {
Clazz.super_(C$, this);
if (callable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.callable=callable;
}, 1);

Clazz.newMeth(C$, 'getRawResult$',  function () {
return this.result;
});

Clazz.newMeth(C$, 'setRawResult$O',  function (v) {
this.result=v;
});

Clazz.newMeth(C$, 'exec$',  function () {
try {
this.result=this.callable.call$();
return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Error")){
var err = e$$;
{
throw err;
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var rex = e$$;
{
throw rex;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'run$',  function () {
this.invoke$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

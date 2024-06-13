(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Thread',['java.util.concurrent.FutureTask','.Sync'],'java.util.concurrent.Executors']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FutureTask", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.concurrent.RunnableFuture');
C$.$classes$=[['Sync',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sync','java.util.concurrent.FutureTask.Sync']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable',  function (callable) {
;C$.$init$.apply(this);
if (callable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.sync=Clazz.new_($I$(2,1).c$$java_util_concurrent_Callable,[this, null, callable]);
}, 1);

Clazz.newMeth(C$, 'c$$Runnable$O',  function (runnable, result) {
;C$.$init$.apply(this);
this.sync=Clazz.new_([this, null, $I$(3).callable$Runnable$O(runnable, result)],$I$(2,1).c$$java_util_concurrent_Callable);
}, 1);

Clazz.newMeth(C$, 'isCancelled$',  function () {
return this.sync.innerIsCancelled$();
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.sync.innerIsDone$();
});

Clazz.newMeth(C$, 'cancel$Z',  function (mayInterruptIfRunning) {
return this.sync.innerCancel$Z(mayInterruptIfRunning);
});

Clazz.newMeth(C$, 'get$',  function () {
return this.sync.innerGet$();
});

Clazz.newMeth(C$, 'get$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return this.sync.innerGet$J(unit.toNanos$J(timeout));
});

Clazz.newMeth(C$, 'done$',  function () {
});

Clazz.newMeth(C$, 'set$O',  function (v) {
this.sync.innerSet$O(v);
});

Clazz.newMeth(C$, 'setException$Throwable',  function (t) {
this.sync.innerSetException$Throwable(t);
});

Clazz.newMeth(C$, 'run$',  function () {
this.sync.innerRun$();
});

Clazz.newMeth(C$, 'runAndReset$',  function () {
return this.sync.innerRunAndReset$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.FutureTask, "Sync", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.locks.AbstractQueuedSynchronizer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['callable','java.util.concurrent.Callable','result','<V>','exception','Throwable','runner','Thread']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable',  function (callable) {
Clazz.super_(C$, this);
this.callable=callable;
}, 1);

Clazz.newMeth(C$, 'ranOrCancelled$I',  function (state) {
return (state & (6)) != 0;
}, p$1);

Clazz.newMeth(C$, 'tryAcquireShared$I',  function (ignore) {
return this.innerIsDone$() ? 1 : -1;
});

Clazz.newMeth(C$, 'tryReleaseShared$I',  function (ignore) {
this.runner=null;
return true;
});

Clazz.newMeth(C$, 'innerIsCancelled$',  function () {
return this.getState$() == 4;
});

Clazz.newMeth(C$, 'innerIsDone$',  function () {
return p$1.ranOrCancelled$I.apply(this, [this.getState$()]) && this.runner == null  ;
});

Clazz.newMeth(C$, 'innerGet$',  function () {
this.acquireSharedInterruptibly$I(0);
if (this.getState$() == 4) throw Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'));
if (this.exception != null ) throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[this.exception]);
return this.result;
});

Clazz.newMeth(C$, 'innerGet$J',  function (nanosTimeout) {
if (!this.tryAcquireSharedNanos$I$J(0, nanosTimeout)) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
if (this.getState$() == 4) throw Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'));
if (this.exception != null ) throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[this.exception]);
return this.result;
});

Clazz.newMeth(C$, 'innerSet$O',  function (v) {
for (; ; ) {
var s=this.getState$();
if (s == 2) return;
if (s == 4) {
this.releaseShared$I(0);
return;
}if (this.compareAndSetState$I$I(s, 2)) {
this.result=v;
this.releaseShared$I(0);
this.b$['java.util.concurrent.FutureTask'].done$.apply(this.b$['java.util.concurrent.FutureTask'], []);
return;
}}
});

Clazz.newMeth(C$, 'innerSetException$Throwable',  function (t) {
for (; ; ) {
var s=this.getState$();
if (s == 2) return;
if (s == 4) {
this.releaseShared$I(0);
return;
}if (this.compareAndSetState$I$I(s, 2)) {
this.exception=t;
this.releaseShared$I(0);
this.b$['java.util.concurrent.FutureTask'].done$.apply(this.b$['java.util.concurrent.FutureTask'], []);
return;
}}
});

Clazz.newMeth(C$, 'innerCancel$Z',  function (mayInterruptIfRunning) {
for (; ; ) {
var s=this.getState$();
if (p$1.ranOrCancelled$I.apply(this, [s])) return false;
if (this.compareAndSetState$I$I(s, 4)) break;
}
if (mayInterruptIfRunning) {
var r=this.runner;
if (r != null ) r.interrupt$();
}this.releaseShared$I(0);
this.b$['java.util.concurrent.FutureTask'].done$.apply(this.b$['java.util.concurrent.FutureTask'], []);
return true;
});

Clazz.newMeth(C$, 'innerRun$',  function () {
if (!this.compareAndSetState$I$I(0, 1)) return;
this.runner=$I$(1).currentThread$();
if (this.getState$() == 1) {
var result;
try {
result=this.callable.call$();
} catch (ex) {
this.b$['java.util.concurrent.FutureTask'].setException$Throwable.apply(this.b$['java.util.concurrent.FutureTask'], [ex]);
return;
}
this.b$['java.util.concurrent.FutureTask'].set$O.apply(this.b$['java.util.concurrent.FutureTask'], [result]);
} else {
this.releaseShared$I(0);
}});

Clazz.newMeth(C$, 'innerRunAndReset$',  function () {
if (!this.compareAndSetState$I$I(0, 1)) return false;
try {
this.runner=$I$(1).currentThread$();
if (this.getState$() == 1) this.callable.call$();
this.runner=null;
return this.compareAndSetState$I$I(1, 0);
} catch (ex) {
this.b$['java.util.concurrent.FutureTask'].setException$Throwable.apply(this.b$['java.util.concurrent.FutureTask'], [ex]);
return false;
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

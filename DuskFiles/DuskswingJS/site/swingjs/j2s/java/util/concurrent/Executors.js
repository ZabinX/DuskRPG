(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'java.security.AccessController','Thread','java.util.concurrent.atomic.AtomicInteger','java.util.concurrent.ThreadPoolExecutor','java.util.concurrent.TimeUnit','java.util.concurrent.LinkedBlockingQueue',['java.util.concurrent.Executors','.FinalizableDelegatedExecutorService'],'java.util.concurrent.SynchronousQueue',['java.util.concurrent.Executors','.DelegatedScheduledExecutorService'],'java.util.concurrent.ScheduledThreadPoolExecutor',['java.util.concurrent.Executors','.DelegatedExecutorService'],['java.util.concurrent.Executors','.DefaultThreadFactory'],['java.util.concurrent.Executors','.PrivilegedThreadFactory'],['java.util.concurrent.Executors','.RunnableAdapter'],['java.util.concurrent.Executors','.PrivilegedCallable'],['java.util.concurrent.Executors','.PrivilegedCallableUsingCurrentClassLoader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Executors", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RunnableAdapter',24],['PrivilegedCallable',24],['PrivilegedCallableUsingCurrentClassLoader',24],['DefaultThreadFactory',8],['PrivilegedThreadFactory',8],['DelegatedExecutorService',8],['FinalizableDelegatedExecutorService',8],['DelegatedScheduledExecutorService',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newFixedThreadPool$I',  function (nThreads) {
return Clazz.new_([nThreads, nThreads, 0, $I$(5).MILLISECONDS, Clazz.new_($I$(6,1))],$I$(4,1).c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue);
}, 1);

Clazz.newMeth(C$, 'newFixedThreadPool$I$java_util_concurrent_ThreadFactory',  function (nThreads, threadFactory) {
return Clazz.new_([nThreads, nThreads, 0, $I$(5).MILLISECONDS, Clazz.new_($I$(6,1)), threadFactory],$I$(4,1).c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory);
}, 1);

Clazz.newMeth(C$, 'newSingleThreadExecutor$',  function () {
return Clazz.new_([Clazz.new_([1, 1, 0, $I$(5).MILLISECONDS, Clazz.new_($I$(6,1))],$I$(4,1).c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue)],$I$(7,1).c$$java_util_concurrent_ExecutorService);
}, 1);

Clazz.newMeth(C$, 'newSingleThreadExecutor$java_util_concurrent_ThreadFactory',  function (threadFactory) {
return Clazz.new_([Clazz.new_([1, 1, 0, $I$(5).MILLISECONDS, Clazz.new_($I$(6,1)), threadFactory],$I$(4,1).c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory)],$I$(7,1).c$$java_util_concurrent_ExecutorService);
}, 1);

Clazz.newMeth(C$, 'newCachedThreadPool$',  function () {
return Clazz.new_([0, 2147483647, 60, $I$(5).SECONDS, Clazz.new_($I$(8,1))],$I$(4,1).c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue);
}, 1);

Clazz.newMeth(C$, 'newCachedThreadPool$java_util_concurrent_ThreadFactory',  function (threadFactory) {
return Clazz.new_([0, 2147483647, 60, $I$(5).SECONDS, Clazz.new_($I$(8,1)), threadFactory],$I$(4,1).c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory);
}, 1);

Clazz.newMeth(C$, 'newSingleThreadScheduledExecutor$',  function () {
return Clazz.new_([Clazz.new_($I$(10,1).c$$I,[1])],$I$(9,1).c$$java_util_concurrent_ScheduledExecutorService);
}, 1);

Clazz.newMeth(C$, 'newSingleThreadScheduledExecutor$java_util_concurrent_ThreadFactory',  function (threadFactory) {
return Clazz.new_([Clazz.new_($I$(10,1).c$$I$java_util_concurrent_ThreadFactory,[1, threadFactory])],$I$(9,1).c$$java_util_concurrent_ScheduledExecutorService);
}, 1);

Clazz.newMeth(C$, 'newScheduledThreadPool$I',  function (corePoolSize) {
return Clazz.new_($I$(10,1).c$$I,[corePoolSize]);
}, 1);

Clazz.newMeth(C$, 'newScheduledThreadPool$I$java_util_concurrent_ThreadFactory',  function (corePoolSize, threadFactory) {
return Clazz.new_($I$(10,1).c$$I$java_util_concurrent_ThreadFactory,[corePoolSize, threadFactory]);
}, 1);

Clazz.newMeth(C$, 'unconfigurableExecutorService$java_util_concurrent_ExecutorService',  function (executor) {
if (executor == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(11,1).c$$java_util_concurrent_ExecutorService,[executor]);
}, 1);

Clazz.newMeth(C$, 'unconfigurableScheduledExecutorService$java_util_concurrent_ScheduledExecutorService',  function (executor) {
if (executor == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(9,1).c$$java_util_concurrent_ScheduledExecutorService,[executor]);
}, 1);

Clazz.newMeth(C$, 'defaultThreadFactory$',  function () {
return Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'privilegedThreadFactory$',  function () {
return Clazz.new_($I$(13,1));
}, 1);

Clazz.newMeth(C$, 'callable$Runnable$O',  function (task, result) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(14,1).c$$Runnable$O,[task, result]);
}, 1);

Clazz.newMeth(C$, 'callable$Runnable',  function (task) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(14,1).c$$Runnable$O,[task, null]);
}, 1);

Clazz.newMeth(C$, 'callable$java_security_PrivilegedAction',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return ((P$.Executors$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Executors$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.Callable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'call$',  function () {
return this.$finals$.action.run$();
});
})()
), Clazz.new_(P$.Executors$1.$init$,[this, {action:action}]));
}, 1);

Clazz.newMeth(C$, 'callable$java_security_PrivilegedExceptionAction',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return ((P$.Executors$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Executors$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.Callable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'call$',  function () {
return this.$finals$.action.run$();
});
})()
), Clazz.new_(P$.Executors$2.$init$,[this, {action:action}]));
}, 1);

Clazz.newMeth(C$, 'privilegedCallable$java_util_concurrent_Callable',  function (callable) {
if (callable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(15,1).c$$java_util_concurrent_Callable,[callable]);
}, 1);

Clazz.newMeth(C$, 'privilegedCallableUsingCurrentClassLoader$java_util_concurrent_Callable',  function (callable) {
if (callable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(16,1).c$$java_util_concurrent_Callable,[callable]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "RunnableAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.Callable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['task','Runnable','result','<T>']]]

Clazz.newMeth(C$, 'c$$Runnable$O',  function (task, result) {
;C$.$init$.apply(this);
this.task=task;
this.result=result;
}, 1);

Clazz.newMeth(C$, 'call$',  function () {
this.task.run$();
return this.result;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "PrivilegedCallable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.Callable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['task','java.util.concurrent.Callable','acc','java.security.AccessControlContext']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable',  function (task) {
;C$.$init$.apply(this);
this.task=task;
this.acc=$I$(1).getContext$();
}, 1);

Clazz.newMeth(C$, 'call$',  function () {
return this.task.call$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "PrivilegedCallableUsingCurrentClassLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.Callable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['task','java.util.concurrent.Callable','acc','java.security.AccessControlContext','ccl','ClassLoader']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable',  function (task) {
;C$.$init$.apply(this);
var sm=System.getSecurityManager$();
if (sm != null ) {
}this.task=task;
this.acc=$I$(1).getContext$();
this.ccl=$I$(2).currentThread$().getContextClassLoader$();
}, 1);

Clazz.newMeth(C$, 'call$',  function () {
return this.task.call$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "DefaultThreadFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.ThreadFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.threadNumber=Clazz.new_($I$(3,1).c$$I,[1]);
},1);

C$.$fields$=[['S',['namePrefix'],'O',['group','ThreadGroup','threadNumber','java.util.concurrent.atomic.AtomicInteger']]
,['O',['poolNumber','java.util.concurrent.atomic.AtomicInteger']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var s=System.getSecurityManager$();
this.group=(s != null ) ? s.getThreadGroup$() : $I$(2).currentThread$().getThreadGroup$();
this.namePrefix="pool-" + C$.poolNumber.getAndIncrement$() + "-thread-" ;
}, 1);

Clazz.newMeth(C$, 'newThread$Runnable',  function (r) {
var t=Clazz.new_([this.group, r, this.namePrefix + this.threadNumber.getAndIncrement$(), 0],$I$(2,1).c$$ThreadGroup$Runnable$S$J);
if (t.isDaemon$()) t.setDaemon$Z(false);
if (t.getPriority$() != 5) t.setPriority$I(5);
return t;
});

C$.$static$=function(){C$.$static$=0;
C$.poolNumber=Clazz.new_($I$(3,1).c$$I,[1]);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "PrivilegedThreadFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.Executors','.DefaultThreadFactory']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['acc','java.security.AccessControlContext','ccl','ClassLoader']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
var sm=System.getSecurityManager$();
this.acc=$I$(1).getContext$();
this.ccl=$I$(2).currentThread$().getContextClassLoader$();
}, 1);

Clazz.newMeth(C$, 'newThread$Runnable',  function (r) {
return C$.superclazz.prototype.newThread$Runnable.apply(this, [((P$.Executors$PrivilegedThreadFactory$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Executors$PrivilegedThreadFactory$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(1,"doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext",[((P$.Executors$PrivilegedThreadFactory$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Executors$PrivilegedThreadFactory$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).currentThread$().setContextClassLoader$ClassLoader(this.b$['java.util.concurrent.Executors.PrivilegedThreadFactory'].ccl);
this.$finals$.r.run$();
return null;
});
})()
), Clazz.new_(P$.Executors$PrivilegedThreadFactory$1$1.$init$,[this, {r:this.$finals$.r}])), this.b$['java.util.concurrent.Executors.PrivilegedThreadFactory'].acc]);
});
})()
), Clazz.new_(P$.Executors$PrivilegedThreadFactory$1.$init$,[this, {r:r}]))]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "DelegatedExecutorService", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.AbstractExecutorService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['e','java.util.concurrent.ExecutorService']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_ExecutorService',  function (executor) {
Clazz.super_(C$, this);
this.e=executor;
}, 1);

Clazz.newMeth(C$, 'execute$Runnable',  function (command) {
this.e.execute$Runnable(command);
});

Clazz.newMeth(C$, 'shutdown$',  function () {
this.e.shutdown$();
});

Clazz.newMeth(C$, 'shutdownNow$',  function () {
return this.e.shutdownNow$();
});

Clazz.newMeth(C$, 'isShutdown$',  function () {
return this.e.isShutdown$();
});

Clazz.newMeth(C$, 'isTerminated$',  function () {
return this.e.isTerminated$();
});

Clazz.newMeth(C$, 'awaitTermination$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return this.e.awaitTermination$J$java_util_concurrent_TimeUnit(timeout, unit);
});

Clazz.newMeth(C$, 'submit$Runnable',  function (task) {
return this.e.submit$Runnable(task);
});

Clazz.newMeth(C$, 'submit$java_util_concurrent_Callable',  function (task) {
return this.e.submit$java_util_concurrent_Callable(task);
});

Clazz.newMeth(C$, 'submit$Runnable$O',  function (task, result) {
return this.e.submit$Runnable$O(task, result);
});

Clazz.newMeth(C$, 'invokeAll$java_util_Collection',  function (tasks) {
return this.e.invokeAll$java_util_Collection(tasks);
});

Clazz.newMeth(C$, 'invokeAll$java_util_Collection$J$java_util_concurrent_TimeUnit',  function (tasks, timeout, unit) {
return this.e.invokeAll$java_util_Collection$J$java_util_concurrent_TimeUnit(tasks, timeout, unit);
});

Clazz.newMeth(C$, 'invokeAny$java_util_Collection',  function (tasks) {
return this.e.invokeAny$java_util_Collection(tasks);
});

Clazz.newMeth(C$, 'invokeAny$java_util_Collection$J$java_util_concurrent_TimeUnit',  function (tasks, timeout, unit) {
return this.e.invokeAny$java_util_Collection$J$java_util_concurrent_TimeUnit(tasks, timeout, unit);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "FinalizableDelegatedExecutorService", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.Executors','.DelegatedExecutorService']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_ExecutorService',  function (executor) {
;C$.superclazz.c$$java_util_concurrent_ExecutorService.apply(this,[executor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'finalize$',  function () {
C$.superclazz.prototype.shutdown$.apply(this, []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Executors, "DelegatedScheduledExecutorService", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.Executors','.DelegatedExecutorService'], 'java.util.concurrent.ScheduledExecutorService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$e','java.util.concurrent.ScheduledExecutorService']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_ScheduledExecutorService',  function (executor) {
;C$.superclazz.c$$java_util_concurrent_ExecutorService.apply(this,[executor]);C$.$init$.apply(this);
this.$e=executor;
}, 1);

Clazz.newMeth(C$, 'schedule$Runnable$J$java_util_concurrent_TimeUnit',  function (command, delay, unit) {
return this.$e.schedule$Runnable$J$java_util_concurrent_TimeUnit(command, delay, unit);
});

Clazz.newMeth(C$, 'schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit',  function (callable, delay, unit) {
return this.$e.schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit(callable, delay, unit);
});

Clazz.newMeth(C$, 'scheduleAtFixedRate$Runnable$J$J$java_util_concurrent_TimeUnit',  function (command, initialDelay, period, unit) {
return this.$e.scheduleAtFixedRate$Runnable$J$J$java_util_concurrent_TimeUnit(command, initialDelay, period, unit);
});

Clazz.newMeth(C$, 'scheduleWithFixedDelay$Runnable$J$J$java_util_concurrent_TimeUnit',  function (command, initialDelay, delay, unit) {
return this.$e.scheduleWithFixedDelay$Runnable$J$J$java_util_concurrent_TimeUnit(command, initialDelay, delay, unit);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

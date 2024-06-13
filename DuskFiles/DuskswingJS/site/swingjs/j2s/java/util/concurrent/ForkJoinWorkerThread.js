(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'java.security.AccessControlContext','java.security.ProtectionDomain','sun.misc.Unsafe','Thread','ThreadGroup','Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ForkJoinWorkerThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Thread');
C$.$classes$=[['InnocuousForkJoinWorkerThread',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pool','java.util.concurrent.ForkJoinPool','workQueue','java.util.concurrent.ForkJoinPool.WorkQueue']]
,['J',['THREADLOCALS','INHERITABLETHREADLOCALS','INHERITEDACCESSCONTROLCONTEXT'],'O',['U','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_ForkJoinPool',  function (pool) {
;C$.superclazz.c$$S.apply(this,["aForkJoinWorkerThread"]);C$.$init$.apply(this);
this.pool=pool;
this.workQueue=pool.registerWorker$java_util_concurrent_ForkJoinWorkerThread(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_ForkJoinPool$ThreadGroup$java_security_AccessControlContext',  function (pool, threadGroup, acc) {
;C$.superclazz.c$$ThreadGroup$Runnable$S.apply(this,[threadGroup, null, "aForkJoinWorkerThread"]);C$.$init$.apply(this);
C$.U.putOrderedObject$O$J$O(this, C$.INHERITEDACCESSCONTROLCONTEXT, acc);
this.eraseThreadLocals$();
this.pool=pool;
this.workQueue=pool.registerWorker$java_util_concurrent_ForkJoinWorkerThread(this);
}, 1);

Clazz.newMeth(C$, 'getPool$',  function () {
return this.pool;
});

Clazz.newMeth(C$, 'getPoolIndex$',  function () {
return this.workQueue.getPoolIndex$();
});

Clazz.newMeth(C$, 'onStart$',  function () {
});

Clazz.newMeth(C$, 'onTermination$Throwable',  function (exception) {
});

Clazz.newMeth(C$, 'run$',  function () {
if (this.workQueue.array == null ) {
var exception=null;
try {
this.onStart$();
this.pool.runWorker$java_util_concurrent_ForkJoinPool_WorkQueue(this.workQueue);
} catch (ex) {
exception=ex;
} finally {
try {
this.onTermination$Throwable(exception);
} catch (ex) {
if (exception == null ) exception=ex;
} finally {
this.pool.deregisterWorker$java_util_concurrent_ForkJoinWorkerThread$Throwable(this, exception);
}
}
}});

Clazz.newMeth(C$, 'eraseThreadLocals$',  function () {
C$.U.putObject$O$J$O(this, C$.THREADLOCALS, null);
C$.U.putObject$O$J$O(this, C$.INHERITABLETHREADLOCALS, null);
});

Clazz.newMeth(C$, 'afterTopLevelExec$',  function () {
});

C$.$static$=function(){C$.$static$=0;
{
try {
C$.U=$I$(3).getUnsafe$();
var tk=Clazz.getClass($I$(4));
C$.THREADLOCALS=C$.U.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("threadLocals"));
C$.INHERITABLETHREADLOCALS=C$.U.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("inheritableThreadLocals"));
C$.INHERITEDACCESSCONTROLCONTEXT=C$.U.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("inheritedAccessControlContext"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(6,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ForkJoinWorkerThread, "InnocuousForkJoinWorkerThread", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinWorkerThread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['innocuousThreadGroup','ThreadGroup','INNOCUOUS_ACC','java.security.AccessControlContext']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_ForkJoinPool',  function (pool) {
;C$.superclazz.c$$java_util_concurrent_ForkJoinPool$ThreadGroup$java_security_AccessControlContext.apply(this,[pool, C$.innocuousThreadGroup, C$.INNOCUOUS_ACC]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'afterTopLevelExec$',  function () {
this.eraseThreadLocals$();
});

Clazz.newMeth(C$, 'getContextClassLoader$',  function () {
return ClassLoader.getSystemClassLoader$();
});

Clazz.newMeth(C$, 'setUncaughtExceptionHandler$Thread_UncaughtExceptionHandler',  function (x) {
});

Clazz.newMeth(C$, 'setContextClassLoader$ClassLoader',  function (cl) {
throw Clazz.new_(Clazz.load('SecurityException').c$$S,["setContextClassLoader"]);
});

Clazz.newMeth(C$, 'createThreadGroup$',  function () {
try {
var u=$I$(3).getUnsafe$();
var tk=Clazz.getClass($I$(4));
var gk=Clazz.getClass($I$(5));
var tg=u.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("group"));
var gp=u.objectFieldOffset$java_lang_reflect_Field(gk.getDeclaredField$S("parent"));
var group=u.getObject$O$J($I$(4).currentThread$(), tg);
while (group != null ){
var parent=u.getObject$O$J(group, gp);
if (parent == null ) return Clazz.new_($I$(5,1).c$$ThreadGroup$S,[group, "InnocuousForkJoinWorkerThreadGroup"]);
group=parent;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(6,1).c$$Throwable,[e]);
} else {
throw e;
}
}
throw Clazz.new_($I$(6,1).c$$S,["Cannot create ThreadGroup"]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.innocuousThreadGroup=C$.createThreadGroup$();
C$.INNOCUOUS_ACC=Clazz.new_([Clazz.array($I$(2), -1, [Clazz.new_($I$(2,1).c$$java_security_CodeSource$java_security_PermissionCollection,[null, null])])],$I$(1,1).c$$java_security_ProtectionDomainA);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

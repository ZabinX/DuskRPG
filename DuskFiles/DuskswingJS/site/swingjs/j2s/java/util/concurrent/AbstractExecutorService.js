(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.FutureTask','java.util.ArrayList','java.util.concurrent.ExecutorCompletionService','java.util.concurrent.TimeUnit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractExecutorService", null, null, 'java.util.concurrent.ExecutorService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newTaskFor$Runnable$O',  function (runnable, value) {
return Clazz.new_($I$(1,1).c$$Runnable$O,[runnable, value]);
});

Clazz.newMeth(C$, 'newTaskFor$java_util_concurrent_Callable',  function (callable) {
return Clazz.new_($I$(1,1).c$$java_util_concurrent_Callable,[callable]);
});

Clazz.newMeth(C$, 'submit$Runnable',  function (task) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var ftask=this.newTaskFor$Runnable$O(task, null);
this.execute$Runnable(ftask);
return ftask;
});

Clazz.newMeth(C$, 'submit$Runnable$O',  function (task, result) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var ftask=this.newTaskFor$Runnable$O(task, result);
this.execute$Runnable(ftask);
return ftask;
});

Clazz.newMeth(C$, 'submit$java_util_concurrent_Callable',  function (task) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var ftask=this.newTaskFor$java_util_concurrent_Callable(task);
this.execute$Runnable(ftask);
return ftask;
});

Clazz.newMeth(C$, 'doInvokeAny$java_util_Collection$Z$J',  function (tasks, timed, nanos) {
if (tasks == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var ntasks=tasks.size$();
if (ntasks == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var futures=Clazz.new_($I$(2,1).c$$I,[ntasks]);
var ecs=Clazz.new_($I$(3,1).c$$java_util_concurrent_Executor,[this]);
try {
var ee=null;
var lastTime=(timed) ? System.nanoTime$() : 0;
var it=tasks.iterator$();
futures.add$O(ecs.submit$java_util_concurrent_Callable(it.next$()));
--ntasks;
var active=1;
for (; ; ) {
var f=ecs.poll$();
if (f == null ) {
if (ntasks > 0) {
--ntasks;
futures.add$O(ecs.submit$java_util_concurrent_Callable(it.next$()));
++active;
} else if (active == 0) break;
 else if (timed) {
f=ecs.poll$J$java_util_concurrent_TimeUnit(nanos, $I$(4).NANOSECONDS);
if (f == null ) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
var now=System.nanoTime$();
(nanos=Long.$sub(nanos,(Long.$sub(now,lastTime))));
lastTime=now;
} else f=ecs.take$();
}if (f != null ) {
--active;
try {
return f.get$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var ie = e$$;
{
throw ie;
}
} else if (Clazz.exceptionOf(e$$,"java.util.concurrent.ExecutionException")){
var eex = e$$;
{
ee=eex;
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var rex = e$$;
{
ee=Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[rex]);
}
} else {
throw e$$;
}
}
}}
if (ee == null ) ee=Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException'));
throw ee;
} finally {
for (var f, $f = futures.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) f.cancel$Z(true);

}
}, p$1);

Clazz.newMeth(C$, 'invokeAny$java_util_Collection',  function (tasks) {
try {
return p$1.doInvokeAny$java_util_Collection$Z$J.apply(this, [tasks, false, 0]);
} catch (cannotHappen) {
if (Clazz.exceptionOf(cannotHappen,"java.util.concurrent.TimeoutException")){
Clazz.assert(C$, this, function(){return false});
return null;
} else {
throw cannotHappen;
}
}
});

Clazz.newMeth(C$, 'invokeAny$java_util_Collection$J$java_util_concurrent_TimeUnit',  function (tasks, timeout, unit) {
return p$1.doInvokeAny$java_util_Collection$Z$J.apply(this, [tasks, true, unit.toNanos$J(timeout)]);
});

Clazz.newMeth(C$, 'invokeAll$java_util_Collection',  function (tasks) {
if (tasks == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var futures=Clazz.new_([tasks.size$()],$I$(2,1).c$$I);
var done=false;
try {
for (var t, $t = tasks.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
var f=this.newTaskFor$java_util_concurrent_Callable(t);
futures.add$O(f);
this.execute$Runnable(f);
}
for (var f, $f = futures.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (!f.isDone$()) {
try {
f.get$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.util.concurrent.CancellationException")){
var ignore = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.util.concurrent.ExecutionException")){
var ignore = e$$;
{
}
} else {
throw e$$;
}
}
}}
done=true;
return futures;
} finally {
if (!done) for (var f, $f = futures.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) f.cancel$Z(true);

}
});

Clazz.newMeth(C$, 'invokeAll$java_util_Collection$J$java_util_concurrent_TimeUnit',  function (tasks, timeout, unit) {
if (tasks == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var nanos=unit.toNanos$J(timeout);
var futures=Clazz.new_([tasks.size$()],$I$(2,1).c$$I);
var done=false;
try {
for (var t, $t = tasks.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) futures.add$O(this.newTaskFor$java_util_concurrent_Callable(t));

var lastTime=System.nanoTime$();
var it=futures.iterator$();
while (it.hasNext$()){
this.execute$Runnable((it.next$()));
var now=System.nanoTime$();
(nanos=Long.$sub(nanos,(Long.$sub(now,lastTime))));
lastTime=now;
if (Long.$le(nanos,0 )) return futures;
}
for (var f, $f = futures.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (!f.isDone$()) {
if (Long.$le(nanos,0 )) return futures;
try {
f.get$J$java_util_concurrent_TimeUnit(nanos, $I$(4).NANOSECONDS);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.util.concurrent.CancellationException")){
var ignore = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.util.concurrent.ExecutionException")){
var ignore = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.util.concurrent.TimeoutException")){
var toe = e$$;
{
return futures;
}
} else {
throw e$$;
}
}
var now=System.nanoTime$();
(nanos=Long.$sub(nanos,(Long.$sub(now,lastTime))));
lastTime=now;
}}
done=true;
return futures;
} finally {
if (!done) for (var f, $f = futures.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) f.cancel$Z(true);

}
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'sun.misc.Unsafe','Error','Thread','java.util.concurrent.ForkJoinPool']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CountedCompleter", null, 'java.util.concurrent.ForkJoinTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pending'],'O',['completer','java.util.concurrent.CountedCompleter']]
,['J',['PENDING'],'O',['$U','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_CountedCompleter$I',  function (completer, initialPendingCount) {
Clazz.super_(C$, this);
this.completer=completer;
this.pending=initialPendingCount;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_CountedCompleter',  function (completer) {
Clazz.super_(C$, this);
this.completer=completer;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.completer=null;
}, 1);

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter',  function ($caller) {
});

Clazz.newMeth(C$, 'onExceptionalCompletion$Throwable$java_util_concurrent_CountedCompleter',  function (ex, $caller) {
return true;
});

Clazz.newMeth(C$, 'getCompleter$',  function () {
return this.completer;
});

Clazz.newMeth(C$, 'getPendingCount$',  function () {
return this.pending;
});

Clazz.newMeth(C$, 'setPendingCount$I',  function (count) {
this.pending=count;
});

Clazz.newMeth(C$, 'addToPendingCount$I',  function (delta) {
C$.$U.getAndAddInt$O$J$I(this, C$.PENDING, delta);
});

Clazz.newMeth(C$, 'compareAndSetPendingCount$I$I',  function (expected, count) {
return C$.$U.compareAndSwapInt$O$J$I$I(this, C$.PENDING, expected, count);
});

Clazz.newMeth(C$, 'decrementPendingCountUnlessZero$',  function () {
var c;
do {
} while ((c=this.pending) != 0 && !C$.$U.compareAndSwapInt$O$J$I$I(this, C$.PENDING, c, c - 1) );
return c;
});

Clazz.newMeth(C$, 'getRoot$',  function () {
var a=this;
var p;
while ((p=a.completer) != null )a=p;

return a;
});

Clazz.newMeth(C$, 'tryComplete$',  function () {
var a=this;
var s=a;
for (var c; ; ) {
if ((c=a.pending) == 0) {
a.onCompletion$java_util_concurrent_CountedCompleter(s);
if ((a=(s=a).completer) == null ) {
s.quietlyComplete$();
return;
}} else if (C$.$U.compareAndSwapInt$O$J$I$I(a, C$.PENDING, c, c - 1)) return;
}
});

Clazz.newMeth(C$, 'propagateCompletion$',  function () {
var a=this;
var s=a;
for (var c; ; ) {
if ((c=a.pending) == 0) {
if ((a=(s=a).completer) == null ) {
s.quietlyComplete$();
return;
}} else if (C$.$U.compareAndSwapInt$O$J$I$I(a, C$.PENDING, c, c - 1)) return;
}
});

Clazz.newMeth(C$, 'complete$O',  function (rawResult) {
var p;
this.setRawResult$O(rawResult);
this.onCompletion$java_util_concurrent_CountedCompleter(this);
this.quietlyComplete$();
if ((p=this.completer) != null ) p.tryComplete$();
});

Clazz.newMeth(C$, 'firstComplete$',  function () {
for (var c; ; ) {
if ((c=this.pending) == 0) return this;
 else if (C$.$U.compareAndSwapInt$O$J$I$I(this, C$.PENDING, c, c - 1)) return null;
}
});

Clazz.newMeth(C$, 'nextComplete$',  function () {
var p;
if ((p=this.completer) != null ) return p.firstComplete$();
 else {
this.quietlyComplete$();
return null;
}});

Clazz.newMeth(C$, 'quietlyCompleteRoot$',  function () {
for (var a=this, p; ; ) {
if ((p=a.completer) == null ) {
a.quietlyComplete$();
return;
}a=p;
}
});

Clazz.newMeth(C$, 'helpComplete$I',  function (maxTasks) {
var t;
var wt;
if (maxTasks > 0 && this.status >= 0 ) {
if (Clazz.instanceOf((t=$I$(3).currentThread$()), "java.util.concurrent.ForkJoinWorkerThread")) (wt=t).pool.helpComplete$java_util_concurrent_ForkJoinPool_WorkQueue$java_util_concurrent_CountedCompleter$I(wt.workQueue, this, maxTasks);
 else $I$(4).common.externalHelpComplete$java_util_concurrent_CountedCompleter$I(this, maxTasks);
}});

Clazz.newMeth(C$, 'internalPropagateException$Throwable',  function (ex) {
var a=this;
var s=a;
while (a.onExceptionalCompletion$Throwable$java_util_concurrent_CountedCompleter(ex, s) && (a=(s=a).completer) != null   && a.status >= 0  && a.recordExceptionalCompletion$Throwable(ex) == -2147483648 );
});

Clazz.newMeth(C$, 'exec$',  function () {
this.compute$();
return false;
});

Clazz.newMeth(C$, 'getRawResult$',  function () {
return null;
});

Clazz.newMeth(C$, 'setRawResult$O',  function (t) {
});

C$.$static$=function(){C$.$static$=0;
{
try {
C$.$U=$I$(1).getUnsafe$();
C$.PENDING=C$.$U.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass(C$).getDeclaredField$S("pending"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

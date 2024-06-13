(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Thread','java.util.concurrent.locks.LockSupport','java.util.concurrent.CompletableFuture',['java.util.concurrent.CompletableFuture','.UniRelay'],['java.util.concurrent.CompletableFuture','.Delayer'],['java.util.concurrent.CompletableFuture','.TaskSubmitter'],'java.util.concurrent.ScheduledThreadPoolExecutor',['java.util.concurrent.CompletableFuture','.Delayer','.DaemonThreadFactory'],['java.util.concurrent.CompletableFuture','.AltResult'],'java.util.concurrent.ForkJoinPool',['java.util.concurrent.CompletableFuture','.ThreadPerTaskExecutor'],'sun.misc.Unsafe',['java.util.concurrent.CompletableFuture','.Completion'],'Error',['java.util.concurrent.CompletableFuture','.UniApply'],['java.util.concurrent.CompletableFuture','.UniAccept'],['java.util.concurrent.CompletableFuture','.UniRun'],['java.util.concurrent.CompletableFuture','.UniWhenComplete'],['java.util.concurrent.CompletableFuture','.UniHandle'],['java.util.concurrent.CompletableFuture','.UniExceptionally'],['java.util.concurrent.CompletableFuture','.UniCompose'],['java.util.concurrent.CompletableFuture','.CoCompletion'],['java.util.concurrent.CompletableFuture','.BiApply'],['java.util.concurrent.CompletableFuture','.BiAccept'],['java.util.concurrent.CompletableFuture','.BiRun'],['java.util.concurrent.CompletableFuture','.BiRelay'],['java.util.concurrent.CompletableFuture','.OrApply'],['java.util.concurrent.CompletableFuture','.OrAccept'],['java.util.concurrent.CompletableFuture','.OrRun'],['java.util.concurrent.CompletableFuture','.OrRelay'],['java.util.concurrent.CompletableFuture','.AsyncSupply'],['java.util.concurrent.CompletableFuture','.AsyncRun'],'Runtime','java.util.concurrent.ThreadLocalRandom',['java.util.concurrent.CompletableFuture','.Signaller'],['java.util.concurrent.CompletableFuture','.Canceller'],['java.util.concurrent.CompletableFuture','.Timeout'],['java.util.concurrent.CompletableFuture','.DelayedCompleter'],['java.util.concurrent.CompletableFuture','.DelayedExecutor'],['java.util.concurrent.CompletableFuture','.MinimalStage']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CompletableFuture", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.concurrent.Future', 'java.util.concurrent.CompletionStage']);
C$.$classes$=[['AltResult',24],['AsynchronousCompletionTask',9],['ThreadPerTaskExecutor',24],['Completion',1032],['UniCompletion',1032],['UniApply',24],['UniAccept',24],['UniRun',24],['UniWhenComplete',24],['UniHandle',24],['UniExceptionally',24],['UniRelay',24],['UniCompose',24],['BiCompletion',1032],['CoCompletion',24],['BiApply',24],['BiAccept',24],['BiRun',24],['BiRelay',24],['OrApply',24],['OrAccept',24],['OrRun',24],['OrRelay',24],['AsyncSupply',24],['AsyncRun',24],['Signaller',24],['MinimalStage',24],['DelayedCompleter',24],['Canceller',24],['DelayedExecutor',24],['TaskSubmitter',24],['Timeout',24],['Delayer',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['result','java.lang.Object','stack','java.util.concurrent.CompletableFuture.Completion']]
,['Z',['useCommonPool'],'J',['RESULT','STACK','NEXT'],'O',['NIL','java.util.concurrent.CompletableFuture.AltResult','asyncPool','java.util.concurrent.Executor','UNSAFE','sun.misc.Unsafe','ASYNC_POOL','java.util.concurrent.Executor']]]

Clazz.newMeth(C$, 'internalComplete$O',  function (r) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.RESULT, null, r);
});

Clazz.newMeth(C$, 'casStack$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.STACK, cmp, val);
});

Clazz.newMeth(C$, 'tryPushStack$java_util_concurrent_CompletableFuture_Completion',  function (c) {
var h=this.stack;
C$.lazySetNext$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(c, h);
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.STACK, h, c);
});

Clazz.newMeth(C$, 'pushStack$java_util_concurrent_CompletableFuture_Completion',  function (c) {
do {
} while (!this.tryPushStack$java_util_concurrent_CompletableFuture_Completion(c));
});

Clazz.newMeth(C$, 'completeNull$',  function () {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.RESULT, null, C$.NIL);
});

Clazz.newMeth(C$, 'encodeValue$O',  function (t) {
return (t == null ) ? C$.NIL : t;
});

Clazz.newMeth(C$, 'completeValue$O',  function (t) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.RESULT, null, (t == null ) ? C$.NIL : t);
});

Clazz.newMeth(C$, 'encodeThrowable$Throwable',  function (x) {
return Clazz.new_([(Clazz.instanceOf(x, "java.util.concurrent.CompletionException")) ? x : Clazz.new_(Clazz.load('java.util.concurrent.CompletionException').c$$Throwable,[x])],$I$(9,1).c$$Throwable);
}, 1);

Clazz.newMeth(C$, 'completeThrowable$Throwable',  function (x) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.RESULT, null, C$.encodeThrowable$Throwable(x));
});

Clazz.newMeth(C$, 'encodeThrowable$Throwable$O',  function (x, r) {
if (!(Clazz.instanceOf(x, "java.util.concurrent.CompletionException"))) x=Clazz.new_(Clazz.load('java.util.concurrent.CompletionException').c$$Throwable,[x]);
 else if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult") && x === (r).ex  ) return r;
return Clazz.new_($I$(9,1).c$$Throwable,[x]);
}, 1);

Clazz.newMeth(C$, 'completeThrowable$Throwable$O',  function (x, r) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.RESULT, null, C$.encodeThrowable$Throwable$O(x, r));
});

Clazz.newMeth(C$, 'encodeOutcome$O$Throwable',  function (t, x) {
return (x == null ) ? (t == null ) ? C$.NIL : t : C$.encodeThrowable$Throwable(x);
});

Clazz.newMeth(C$, 'encodeRelay$O',  function (r) {
var x;
return (((Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) && (x=(r).ex) != null   && !(Clazz.instanceOf(x, "java.util.concurrent.CompletionException")) ) ? Clazz.new_([Clazz.new_(Clazz.load('java.util.concurrent.CompletionException').c$$Throwable,[x])],$I$(9,1).c$$Throwable) : r);
}, 1);

Clazz.newMeth(C$, 'completeRelay$O',  function (r) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.RESULT, null, C$.encodeRelay$O(r));
});

Clazz.newMeth(C$, 'reportGet$O',  function (r) {
if (r == null ) throw Clazz.new_(Clazz.load('InterruptedException'));
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
var x;
var cause;
if ((x=(r).ex) == null ) return null;
if (Clazz.instanceOf(x, "java.util.concurrent.CancellationException")) throw x;
if ((Clazz.instanceOf(x, "java.util.concurrent.CompletionException")) && (cause=x.getCause$()) != null  ) x=cause;
throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[x]);
}var t=r;
return t;
}, 1);

Clazz.newMeth(C$, 'reportJoin$O',  function (r) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
var x;
if ((x=(r).ex) == null ) return null;
if (Clazz.instanceOf(x, "java.util.concurrent.CancellationException")) throw x;
if (Clazz.instanceOf(x, "java.util.concurrent.CompletionException")) throw x;
throw Clazz.new_(Clazz.load('java.util.concurrent.CompletionException').c$$Throwable,[x]);
}var t=r;
return t;
}, 1);

Clazz.newMeth(C$, 'screenExecutor$java_util_concurrent_Executor',  function (e) {
if (!C$.useCommonPool && e === $I$(10).commonPool$()  ) return C$.asyncPool;
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return e;
}, 1);

Clazz.newMeth(C$, 'lazySetNext$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion',  function (c, next) {
C$.UNSAFE.putOrderedObject$O$J$O(c, C$.NEXT, next);
}, 1);

Clazz.newMeth(C$, 'postComplete$',  function () {
var f=this;
var h;
while ((h=f.stack) != null  || (f !== this  && (h=(f=this).stack) != null  ) ){
var d;
var t;
if (f.casStack$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(h, t=h.next)) {
if (t != null ) {
if (f !== this ) {
this.pushStack$java_util_concurrent_CompletableFuture_Completion(h);
continue;
}h.next=null;
}f=(d=h.tryFire$I(-1)) == null  ? this : d;
}}
});

Clazz.newMeth(C$, 'cleanStack$',  function () {
for (var p=null, q=this.stack; q != null ; ) {
var s=q.next;
if (q.isLive$()) {
p=q;
q=s;
} else if (p == null ) {
this.casStack$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(q, s);
q=this.stack;
} else {
p.next=s;
if (p.isLive$()) q=s;
 else {
p=null;
q=this.stack;
}}}
});

Clazz.newMeth(C$, 'push$java_util_concurrent_CompletableFuture_UniCompletion',  function (c) {
if (c != null ) {
while (this.result == null  && !this.tryPushStack$java_util_concurrent_CompletableFuture_Completion(c) )C$.lazySetNext$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(c, null);

}});

Clazz.newMeth(C$, 'postFire$java_util_concurrent_CompletableFuture$I',  function (a, mode) {
if (a != null  && a.stack != null  ) {
if (mode < 0 || a.result == null  ) a.cleanStack$();
 else a.postComplete$();
}if (this.result != null  && this.stack != null  ) {
if (mode < 0) return this;
 else this.postComplete$();
}return null;
});

Clazz.newMeth(C$, 'uniApply$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniApply',  function (a, f, c) {
var r;
var x;
if (a == null  || (r=a.result) == null   || f == null  ) return false;
 tryComplete : if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
this.completeThrowable$Throwable$O(x, r);
break tryComplete;
}r=null;
}try {
if (c != null  && !c.claim$() ) return false;
var s=r;
this.completeValue$O(f.apply$O(s));
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'uniApplyStage$java_util_concurrent_Executor$java_util_function_Function',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.uniApply$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniApply(this, f, null) ) {
var c=Clazz.new_($I$(15,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function,[e, d, this, f]);
this.push$java_util_concurrent_CompletableFuture_UniCompletion(c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'uniAccept$java_util_concurrent_CompletableFuture$java_util_function_Consumer$java_util_concurrent_CompletableFuture_UniAccept',  function (a, f, c) {
var r;
var x;
if (a == null  || (r=a.result) == null   || f == null  ) return false;
 tryComplete : if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
this.completeThrowable$Throwable$O(x, r);
break tryComplete;
}r=null;
}try {
if (c != null  && !c.claim$() ) return false;
var s=r;
f.accept$O(s);
this.completeNull$();
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'uniAcceptStage$java_util_concurrent_Executor$java_util_function_Consumer',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.uniAccept$java_util_concurrent_CompletableFuture$java_util_function_Consumer$java_util_concurrent_CompletableFuture_UniAccept(this, f, null) ) {
var c=Clazz.new_($I$(16,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Consumer,[e, d, this, f]);
this.push$java_util_concurrent_CompletableFuture_UniCompletion(c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'uniRun$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_UniRun',  function (a, f, c) {
var r;
var x;
if (a == null  || (r=a.result) == null   || f == null  ) return false;
if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult") && (x=(r).ex) != null  ) this.completeThrowable$Throwable$O(x, r);
 else try {
if (c != null  && !c.claim$() ) return false;
f.run$();
this.completeNull$();
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'uniRunStage$java_util_concurrent_Executor$Runnable',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.uniRun$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_UniRun(this, f, null) ) {
var c=Clazz.new_($I$(17,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable,[e, d, this, f]);
this.push$java_util_concurrent_CompletableFuture_UniCompletion(c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'uniWhenComplete$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer$java_util_concurrent_CompletableFuture_UniWhenComplete',  function (a, f, c) {
var r;
var t;
var x=null;
if (a == null  || (r=a.result) == null   || f == null  ) return false;
if (this.result == null ) {
try {
if (c != null  && !c.claim$() ) return false;
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
x=(r).ex;
t=null;
} else {
var tr=r;
t=tr;
}f.accept$O$O(t, x);
if (x == null ) {
this.internalComplete$O(r);
return true;
}} catch (ex) {
if (x == null ) x=ex;
}
this.completeThrowable$Throwable$O(x, r);
}return true;
});

Clazz.newMeth(C$, 'uniWhenCompleteStage$java_util_concurrent_Executor$java_util_function_BiConsumer',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.uniWhenComplete$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer$java_util_concurrent_CompletableFuture_UniWhenComplete(this, f, null) ) {
var c=Clazz.new_($I$(18,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer,[e, d, this, f]);
this.push$java_util_concurrent_CompletableFuture_UniCompletion(c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'uniHandle$java_util_concurrent_CompletableFuture$java_util_function_BiFunction$java_util_concurrent_CompletableFuture_UniHandle',  function (a, f, c) {
var r;
var s;
var x;
if (a == null  || (r=a.result) == null   || f == null  ) return false;
if (this.result == null ) {
try {
if (c != null  && !c.claim$() ) return false;
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
x=(r).ex;
s=null;
} else {
x=null;
var ss=r;
s=ss;
}this.completeValue$O(f.apply$O$O(s, x));
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'uniHandleStage$java_util_concurrent_Executor$java_util_function_BiFunction',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.uniHandle$java_util_concurrent_CompletableFuture$java_util_function_BiFunction$java_util_concurrent_CompletableFuture_UniHandle(this, f, null) ) {
var c=Clazz.new_($I$(19,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiFunction,[e, d, this, f]);
this.push$java_util_concurrent_CompletableFuture_UniCompletion(c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'uniExceptionally$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniExceptionally',  function (a, f, c) {
var r;
var x;
if (a == null  || (r=a.result) == null   || f == null  ) return false;
if (this.result == null ) {
try {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult") && (x=(r).ex) != null  ) {
if (c != null  && !c.claim$() ) return false;
this.completeValue$O(f.apply$O(x));
} else this.internalComplete$O(r);
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'uniExceptionallyStage$java_util_function_Function',  function (f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (!d.uniExceptionally$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniExceptionally(this, f, null)) {
var c=Clazz.new_($I$(20,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function,[d, this, f]);
this.push$java_util_concurrent_CompletableFuture_UniCompletion(c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'uniRelay$java_util_concurrent_CompletableFuture',  function (a) {
var r;
if (a == null  || (r=a.result) == null  ) return false;
if (this.result == null ) this.completeRelay$O(r);
return true;
});

Clazz.newMeth(C$, 'uniCompose$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniCompose',  function (a, f, c) {
var r;
var x;
if (a == null  || (r=a.result) == null   || f == null  ) return false;
 tryComplete : if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
this.completeThrowable$Throwable$O(x, r);
break tryComplete;
}r=null;
}try {
if (c != null  && !c.claim$() ) return false;
var s=r;
var g=f.apply$O(s).toCompletableFuture$();
if (g.result == null  || !this.uniRelay$java_util_concurrent_CompletableFuture(g) ) {
var copy=Clazz.new_($I$(4,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture,[this, g]);
g.push$java_util_concurrent_CompletableFuture_UniCompletion(copy);
copy.tryFire$I(0);
if (this.result == null ) return false;
}} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'uniComposeStage$java_util_concurrent_Executor$java_util_function_Function',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var r;
var x;
if (e == null  && (r=this.result) != null  ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
return Clazz.new_(C$.c$$O,[C$.encodeThrowable$Throwable$O(x, r)]);
}r=null;
}try {
var t=r;
var g=f.apply$O(t).toCompletableFuture$();
var s=g.result;
if (s != null ) return Clazz.new_(C$.c$$O,[C$.encodeRelay$O(s)]);
var d=Clazz.new_(C$);
var copy=Clazz.new_($I$(4,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture,[d, g]);
g.push$java_util_concurrent_CompletableFuture_UniCompletion(copy);
copy.tryFire$I(0);
return d;
} catch (ex) {
return Clazz.new_(C$.c$$O,[C$.encodeThrowable$Throwable(ex)]);
}
}var d=Clazz.new_(C$);
var c=Clazz.new_($I$(21,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function,[e, d, this, f]);
this.push$java_util_concurrent_CompletableFuture_UniCompletion(c);
c.tryFire$I(0);
return d;
}, p$1);

Clazz.newMeth(C$, 'bipush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion',  function (b, c) {
if (c != null ) {
var r;
while ((r=this.result) == null  && !this.tryPushStack$java_util_concurrent_CompletableFuture_Completion(c) )C$.lazySetNext$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(c, null);

if (b != null  && b !== this   && b.result == null  ) {
var q=(r != null ) ? c : Clazz.new_($I$(22,1).c$$java_util_concurrent_CompletableFuture_BiCompletion,[c]);
while (b.result == null  && !b.tryPushStack$java_util_concurrent_CompletableFuture_Completion(q) )C$.lazySetNext$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(q, null);

}}});

Clazz.newMeth(C$, 'postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I',  function (a, b, mode) {
if (b != null  && b.stack != null  ) {
if (mode < 0 || b.result == null  ) b.cleanStack$();
 else b.postComplete$();
}return this.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$, 'biApply$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiFunction$java_util_concurrent_CompletableFuture_BiApply',  function (a, b, f, c) {
var r;
var s;
var x;
if (a == null  || (r=a.result) == null   || b == null   || (s=b.result) == null   || f == null  ) return false;
 tryComplete : if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
this.completeThrowable$Throwable$O(x, r);
break tryComplete;
}r=null;
}if (Clazz.instanceOf(s, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(s).ex) != null ) {
this.completeThrowable$Throwable$O(x, s);
break tryComplete;
}s=null;
}try {
if (c != null  && !c.claim$() ) return false;
var rr=r;
var ss=s;
this.completeValue$O(f.apply$O$O(rr, ss));
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'biApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiFunction',  function (e, o, f) {
var b;
if (f == null  || (b=o.toCompletableFuture$()) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.biApply$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiFunction$java_util_concurrent_CompletableFuture_BiApply(this, b, f, null) ) {
var c=Clazz.new_($I$(23,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiFunction,[e, d, this, b, f]);
this.bipush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'biAccept$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer$java_util_concurrent_CompletableFuture_BiAccept',  function (a, b, f, c) {
var r;
var s;
var x;
if (a == null  || (r=a.result) == null   || b == null   || (s=b.result) == null   || f == null  ) return false;
 tryComplete : if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
this.completeThrowable$Throwable$O(x, r);
break tryComplete;
}r=null;
}if (Clazz.instanceOf(s, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(s).ex) != null ) {
this.completeThrowable$Throwable$O(x, s);
break tryComplete;
}s=null;
}try {
if (c != null  && !c.claim$() ) return false;
var rr=r;
var ss=s;
f.accept$O$O(rr, ss);
this.completeNull$();
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'biAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiConsumer',  function (e, o, f) {
var b;
if (f == null  || (b=o.toCompletableFuture$()) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.biAccept$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer$java_util_concurrent_CompletableFuture_BiAccept(this, b, f, null) ) {
var c=Clazz.new_($I$(24,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer,[e, d, this, b, f]);
this.bipush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'biRun$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_BiRun',  function (a, b, f, c) {
var r;
var s;
var x;
if (a == null  || (r=a.result) == null   || b == null   || (s=b.result) == null   || f == null  ) return false;
if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult") && (x=(r).ex) != null  ) this.completeThrowable$Throwable$O(x, r);
 else if (Clazz.instanceOf(s, "java.util.concurrent.CompletableFuture.AltResult") && (x=(s).ex) != null  ) this.completeThrowable$Throwable$O(x, s);
 else try {
if (c != null  && !c.claim$() ) return false;
f.run$();
this.completeNull$();
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'biRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable',  function (e, o, f) {
var b;
if (f == null  || (b=o.toCompletableFuture$()) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.biRun$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_BiRun(this, b, f, null) ) {
var c=Clazz.new_($I$(25,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable,[e, d, this, b, f]);
this.bipush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'biRelay$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture',  function (a, b) {
var r;
var s;
var x;
if (a == null  || (r=a.result) == null   || b == null   || (s=b.result) == null  ) return false;
if (this.result == null ) {
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult") && (x=(r).ex) != null  ) this.completeThrowable$Throwable$O(x, r);
 else if (Clazz.instanceOf(s, "java.util.concurrent.CompletableFuture.AltResult") && (x=(s).ex) != null  ) this.completeThrowable$Throwable$O(x, s);
 else this.completeNull$();
}return true;
});

Clazz.newMeth(C$, 'andTree$java_util_concurrent_CompletableFutureA$I$I',  function (cfs, lo, hi) {
var d=Clazz.new_(C$);
if (lo > hi) d.result=C$.NIL;
 else {
var a;
var b;
var mid=(lo + hi) >>> 1;
if ((a=(lo == mid ? cfs[lo] : C$.andTree$java_util_concurrent_CompletableFutureA$I$I(cfs, lo, mid))) == null  || (b=(lo == hi ? a : (hi == mid + 1) ? cfs[hi] : C$.andTree$java_util_concurrent_CompletableFutureA$I$I(cfs, mid + 1, hi))) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (!d.biRelay$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture(a, b)) {
var c=Clazz.new_($I$(26,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture,[d, a, b]);
a.bipush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}}return d;
}, 1);

Clazz.newMeth(C$, 'orpush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion',  function (b, c) {
if (c != null ) {
while ((b == null  || b.result == null  ) && this.result == null  ){
if (this.tryPushStack$java_util_concurrent_CompletableFuture_Completion(c)) {
if (b != null  && b !== this   && b.result == null  ) {
var q=Clazz.new_($I$(22,1).c$$java_util_concurrent_CompletableFuture_BiCompletion,[c]);
while (this.result == null  && b.result == null   && !b.tryPushStack$java_util_concurrent_CompletableFuture_Completion(q) )C$.lazySetNext$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(q, null);

}break;
}C$.lazySetNext$java_util_concurrent_CompletableFuture_Completion$java_util_concurrent_CompletableFuture_Completion(c, null);
}
}});

Clazz.newMeth(C$, 'orApply$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_OrApply',  function (a, b, f, c) {
var r;
var x;
if (a == null  || b == null   || ((r=a.result) == null  && (r=b.result) == null  )  || f == null  ) return false;
 tryComplete : if (this.result == null ) {
try {
if (c != null  && !c.claim$() ) return false;
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
this.completeThrowable$Throwable$O(x, r);
break tryComplete;
}r=null;
}var rr=r;
this.completeValue$O(f.apply$O(rr));
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'orApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Function',  function (e, o, f) {
var b;
if (f == null  || (b=o.toCompletableFuture$()) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.orApply$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_OrApply(this, b, f, null) ) {
var c=Clazz.new_($I$(27,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function,[e, d, this, b, f]);
this.orpush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'orAccept$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Consumer$java_util_concurrent_CompletableFuture_OrAccept',  function (a, b, f, c) {
var r;
var x;
if (a == null  || b == null   || ((r=a.result) == null  && (r=b.result) == null  )  || f == null  ) return false;
 tryComplete : if (this.result == null ) {
try {
if (c != null  && !c.claim$() ) return false;
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) {
if ((x=(r).ex) != null ) {
this.completeThrowable$Throwable$O(x, r);
break tryComplete;
}r=null;
}var rr=r;
f.accept$O(rr);
this.completeNull$();
} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'orAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Consumer',  function (e, o, f) {
var b;
if (f == null  || (b=o.toCompletableFuture$()) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.orAccept$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Consumer$java_util_concurrent_CompletableFuture_OrAccept(this, b, f, null) ) {
var c=Clazz.new_($I$(28,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Consumer,[e, d, this, b, f]);
this.orpush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'orRun$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_OrRun',  function (a, b, f, c) {
var r;
var x;
if (a == null  || b == null   || ((r=a.result) == null  && (r=b.result) == null  )  || f == null  ) return false;
if (this.result == null ) {
try {
if (c != null  && !c.claim$() ) return false;
if (Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult") && (x=(r).ex) != null  ) this.completeThrowable$Throwable$O(x, r);
 else {
f.run$();
this.completeNull$();
}} catch (ex) {
this.completeThrowable$Throwable(ex);
}
}return true;
});

Clazz.newMeth(C$, 'orRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable',  function (e, o, f) {
var b;
if (f == null  || (b=o.toCompletableFuture$()) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
if (e != null  || !d.orRun$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_OrRun(this, b, f, null) ) {
var c=Clazz.new_($I$(29,1).c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable,[e, d, this, b, f]);
this.orpush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}return d;
}, p$1);

Clazz.newMeth(C$, 'orRelay$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture',  function (a, b) {
var r;
if (a == null  || b == null   || ((r=a.result) == null  && (r=b.result) == null  ) ) return false;
if (this.result == null ) this.completeRelay$O(r);
return true;
});

Clazz.newMeth(C$, 'orTree$java_util_concurrent_CompletableFutureA$I$I',  function (cfs, lo, hi) {
var d=Clazz.new_(C$);
if (lo <= hi) {
var a;
var b;
var mid=(lo + hi) >>> 1;
if ((a=(lo == mid ? cfs[lo] : C$.orTree$java_util_concurrent_CompletableFutureA$I$I(cfs, lo, mid))) == null  || (b=(lo == hi ? a : (hi == mid + 1) ? cfs[hi] : C$.orTree$java_util_concurrent_CompletableFutureA$I$I(cfs, mid + 1, hi))) == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (!d.orRelay$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture(a, b)) {
var c=Clazz.new_($I$(30,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture,[d, a, b]);
a.orpush$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture_BiCompletion(b, c);
c.tryFire$I(0);
}}return d;
}, 1);

Clazz.newMeth(C$, 'asyncSupplyStage$java_util_concurrent_Executor$java_util_function_Supplier',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
e.execute$Runnable(Clazz.new_($I$(31,1).c$$java_util_concurrent_CompletableFuture$java_util_function_Supplier,[d, f]));
return d;
}, 1);

Clazz.newMeth(C$, 'asyncRunStage$java_util_concurrent_Executor$Runnable',  function (e, f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var d=Clazz.new_(C$);
e.execute$Runnable(Clazz.new_($I$(32,1).c$$java_util_concurrent_CompletableFuture$Runnable,[d, f]));
return d;
}, 1);

Clazz.newMeth(C$, 'waitingGet$Z',  function (interruptible) {
var q=null;
var queued=false;
var spins=-1;
var r;
while ((r=this.result) == null ){
if (spins < 0) spins=($I$(33).getRuntime$().availableProcessors$() > 1) ? 256 : 0;
 else if (spins > 0) {
if ($I$(34).nextSecondarySeed$() >= 0) --spins;
} else if (q == null ) q=Clazz.new_($I$(35,1).c$$Z$J$J,[interruptible, 0, 0]);
 else if (!queued) queued=this.tryPushStack$java_util_concurrent_CompletableFuture_Completion(q);
 else if (interruptible && q.interruptControl < 0 ) {
q.thread=null;
this.cleanStack$();
return null;
} else if (q.thread != null  && this.result == null  ) {
try {
$I$(10).managedBlock$java_util_concurrent_ForkJoinPool_ManagedBlocker(q);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
q.interruptControl=-1;
} else {
throw ie;
}
}
}}
if (q != null ) {
q.thread=null;
if (q.interruptControl < 0) {
if (interruptible) r=null;
 else $I$(1).currentThread$().interrupt$();
}}this.postComplete$();
return r;
}, p$1);

Clazz.newMeth(C$, 'timedGet$J',  function (nanos) {
if ($I$(1).interrupted$()) return null;
if (Long.$le(nanos,0 )) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
var d=Long.$add(System.nanoTime$(),nanos);
var q=Clazz.new_([true, nanos, Long.$eq(d,0 ) ? 1 : d],$I$(35,1).c$$Z$J$J);
var queued=false;
var r;
while ((r=this.result) == null ){
if (!queued) queued=this.tryPushStack$java_util_concurrent_CompletableFuture_Completion(q);
 else if (q.interruptControl < 0 || Long.$le(q.nanos,0 ) ) {
q.thread=null;
this.cleanStack$();
if (q.interruptControl < 0) return null;
throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
} else if (q.thread != null  && this.result == null  ) {
try {
$I$(10).managedBlock$java_util_concurrent_ForkJoinPool_ManagedBlocker(q);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
q.interruptControl=-1;
} else {
throw ie;
}
}
}}
if (q.interruptControl < 0) r=null;
q.thread=null;
this.postComplete$();
return r;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (r) {
;C$.$init$.apply(this);
this.result=r;
}, 1);

Clazz.newMeth(C$, 'supplyAsync$java_util_function_Supplier',  function (supplier) {
return C$.asyncSupplyStage$java_util_concurrent_Executor$java_util_function_Supplier(C$.asyncPool, supplier);
}, 1);

Clazz.newMeth(C$, 'supplyAsync$java_util_function_Supplier$java_util_concurrent_Executor',  function (supplier, executor) {
return C$.asyncSupplyStage$java_util_concurrent_Executor$java_util_function_Supplier(C$.screenExecutor$java_util_concurrent_Executor(executor), supplier);
}, 1);

Clazz.newMeth(C$, 'runAsync$Runnable',  function (runnable) {
return C$.asyncRunStage$java_util_concurrent_Executor$Runnable(C$.asyncPool, runnable);
}, 1);

Clazz.newMeth(C$, 'runAsync$Runnable$java_util_concurrent_Executor',  function (runnable, executor) {
return C$.asyncRunStage$java_util_concurrent_Executor$Runnable(C$.screenExecutor$java_util_concurrent_Executor(executor), runnable);
}, 1);

Clazz.newMeth(C$, 'completedFuture$O',  function (value) {
return Clazz.new_(C$.c$$O,[(value == null ) ? C$.NIL : value]);
}, 1);

Clazz.newMeth(C$, 'isDone$',  function () {
return this.result != null ;
});

Clazz.newMeth(C$, 'get$',  function () {
var r;
return C$.reportGet$O((r=this.result) == null  ? p$1.waitingGet$Z.apply(this, [true]) : r);
});

Clazz.newMeth(C$, 'get$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
var r;
var nanos=unit.toNanos$J(timeout);
return C$.reportGet$O((r=this.result) == null  ? p$1.timedGet$J.apply(this, [nanos]) : r);
});

Clazz.newMeth(C$, 'join$',  function () {
var r;
return C$.reportJoin$O((r=this.result) == null  ? p$1.waitingGet$Z.apply(this, [false]) : r);
});

Clazz.newMeth(C$, 'getNow$O',  function (valueIfAbsent) {
var r;
return ((r=this.result) == null ) ? valueIfAbsent : C$.reportJoin$O(r);
});

Clazz.newMeth(C$, 'complete$O',  function (value) {
var triggered=this.completeValue$O(value);
this.postComplete$();
return triggered;
});

Clazz.newMeth(C$, 'completeExceptionally$Throwable',  function (ex) {
if (ex == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var triggered=this.internalComplete$O(Clazz.new_($I$(9,1).c$$Throwable,[ex]));
this.postComplete$();
return triggered;
});

Clazz.newMeth(C$, 'thenApply$java_util_function_Function',  function (fn) {
return p$1.uniApplyStage$java_util_concurrent_Executor$java_util_function_Function.apply(this, [null, fn]);
});

Clazz.newMeth(C$, 'thenApplyAsync$java_util_function_Function',  function (fn) {
return p$1.uniApplyStage$java_util_concurrent_Executor$java_util_function_Function.apply(this, [C$.asyncPool, fn]);
});

Clazz.newMeth(C$, 'thenApplyAsync$java_util_function_Function$java_util_concurrent_Executor',  function (fn, executor) {
return p$1.uniApplyStage$java_util_concurrent_Executor$java_util_function_Function.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), fn]);
});

Clazz.newMeth(C$, 'thenAccept$java_util_function_Consumer',  function (action) {
return p$1.uniAcceptStage$java_util_concurrent_Executor$java_util_function_Consumer.apply(this, [null, action]);
});

Clazz.newMeth(C$, 'thenAcceptAsync$java_util_function_Consumer',  function (action) {
return p$1.uniAcceptStage$java_util_concurrent_Executor$java_util_function_Consumer.apply(this, [C$.asyncPool, action]);
});

Clazz.newMeth(C$, 'thenAcceptAsync$java_util_function_Consumer$java_util_concurrent_Executor',  function (action, executor) {
return p$1.uniAcceptStage$java_util_concurrent_Executor$java_util_function_Consumer.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), action]);
});

Clazz.newMeth(C$, 'thenRun$Runnable',  function (action) {
return p$1.uniRunStage$java_util_concurrent_Executor$Runnable.apply(this, [null, action]);
});

Clazz.newMeth(C$, 'thenRunAsync$Runnable',  function (action) {
return p$1.uniRunStage$java_util_concurrent_Executor$Runnable.apply(this, [C$.asyncPool, action]);
});

Clazz.newMeth(C$, 'thenRunAsync$Runnable$java_util_concurrent_Executor',  function (action, executor) {
return p$1.uniRunStage$java_util_concurrent_Executor$Runnable.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), action]);
});

Clazz.newMeth(C$, 'thenCombine$java_util_concurrent_CompletionStage$java_util_function_BiFunction',  function (other, fn) {
return p$1.biApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiFunction.apply(this, [null, other, fn]);
});

Clazz.newMeth(C$, 'thenCombineAsync$java_util_concurrent_CompletionStage$java_util_function_BiFunction',  function (other, fn) {
return p$1.biApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiFunction.apply(this, [C$.asyncPool, other, fn]);
});

Clazz.newMeth(C$, 'thenCombineAsync$java_util_concurrent_CompletionStage$java_util_function_BiFunction$java_util_concurrent_Executor',  function (other, fn, executor) {
return p$1.biApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiFunction.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), other, fn]);
});

Clazz.newMeth(C$, 'thenAcceptBoth$java_util_concurrent_CompletionStage$java_util_function_BiConsumer',  function (other, action) {
return p$1.biAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiConsumer.apply(this, [null, other, action]);
});

Clazz.newMeth(C$, 'thenAcceptBothAsync$java_util_concurrent_CompletionStage$java_util_function_BiConsumer',  function (other, action) {
return p$1.biAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiConsumer.apply(this, [C$.asyncPool, other, action]);
});

Clazz.newMeth(C$, 'thenAcceptBothAsync$java_util_concurrent_CompletionStage$java_util_function_BiConsumer$java_util_concurrent_Executor',  function (other, action, executor) {
return p$1.biAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_BiConsumer.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), other, action]);
});

Clazz.newMeth(C$, 'runAfterBoth$java_util_concurrent_CompletionStage$Runnable',  function (other, action) {
return p$1.biRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable.apply(this, [null, other, action]);
});

Clazz.newMeth(C$, 'runAfterBothAsync$java_util_concurrent_CompletionStage$Runnable',  function (other, action) {
return p$1.biRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable.apply(this, [C$.asyncPool, other, action]);
});

Clazz.newMeth(C$, 'runAfterBothAsync$java_util_concurrent_CompletionStage$Runnable$java_util_concurrent_Executor',  function (other, action, executor) {
return p$1.biRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), other, action]);
});

Clazz.newMeth(C$, 'applyToEither$java_util_concurrent_CompletionStage$java_util_function_Function',  function (other, fn) {
return p$1.orApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Function.apply(this, [null, other, fn]);
});

Clazz.newMeth(C$, 'applyToEitherAsync$java_util_concurrent_CompletionStage$java_util_function_Function',  function (other, fn) {
return p$1.orApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Function.apply(this, [C$.asyncPool, other, fn]);
});

Clazz.newMeth(C$, 'applyToEitherAsync$java_util_concurrent_CompletionStage$java_util_function_Function$java_util_concurrent_Executor',  function (other, fn, executor) {
return p$1.orApplyStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Function.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), other, fn]);
});

Clazz.newMeth(C$, 'acceptEither$java_util_concurrent_CompletionStage$java_util_function_Consumer',  function (other, action) {
return p$1.orAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Consumer.apply(this, [null, other, action]);
});

Clazz.newMeth(C$, 'acceptEitherAsync$java_util_concurrent_CompletionStage$java_util_function_Consumer',  function (other, action) {
return p$1.orAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Consumer.apply(this, [C$.asyncPool, other, action]);
});

Clazz.newMeth(C$, 'acceptEitherAsync$java_util_concurrent_CompletionStage$java_util_function_Consumer$java_util_concurrent_Executor',  function (other, action, executor) {
return p$1.orAcceptStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$java_util_function_Consumer.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), other, action]);
});

Clazz.newMeth(C$, 'runAfterEither$java_util_concurrent_CompletionStage$Runnable',  function (other, action) {
return p$1.orRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable.apply(this, [null, other, action]);
});

Clazz.newMeth(C$, 'runAfterEitherAsync$java_util_concurrent_CompletionStage$Runnable',  function (other, action) {
return p$1.orRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable.apply(this, [C$.asyncPool, other, action]);
});

Clazz.newMeth(C$, 'runAfterEitherAsync$java_util_concurrent_CompletionStage$Runnable$java_util_concurrent_Executor',  function (other, action, executor) {
return p$1.orRunStage$java_util_concurrent_Executor$java_util_concurrent_CompletionStage$Runnable.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), other, action]);
});

Clazz.newMeth(C$, 'thenCompose$java_util_function_Function',  function (fn) {
return p$1.uniComposeStage$java_util_concurrent_Executor$java_util_function_Function.apply(this, [null, fn]);
});

Clazz.newMeth(C$, 'thenComposeAsync$java_util_function_Function',  function (fn) {
return p$1.uniComposeStage$java_util_concurrent_Executor$java_util_function_Function.apply(this, [C$.asyncPool, fn]);
});

Clazz.newMeth(C$, 'thenComposeAsync$java_util_function_Function$java_util_concurrent_Executor',  function (fn, executor) {
return p$1.uniComposeStage$java_util_concurrent_Executor$java_util_function_Function.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), fn]);
});

Clazz.newMeth(C$, 'whenComplete$java_util_function_BiConsumer',  function (action) {
return p$1.uniWhenCompleteStage$java_util_concurrent_Executor$java_util_function_BiConsumer.apply(this, [null, action]);
});

Clazz.newMeth(C$, 'whenCompleteAsync$java_util_function_BiConsumer',  function (action) {
return p$1.uniWhenCompleteStage$java_util_concurrent_Executor$java_util_function_BiConsumer.apply(this, [C$.asyncPool, action]);
});

Clazz.newMeth(C$, 'whenCompleteAsync$java_util_function_BiConsumer$java_util_concurrent_Executor',  function (action, executor) {
return p$1.uniWhenCompleteStage$java_util_concurrent_Executor$java_util_function_BiConsumer.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), action]);
});

Clazz.newMeth(C$, 'handle$java_util_function_BiFunction',  function (fn) {
return p$1.uniHandleStage$java_util_concurrent_Executor$java_util_function_BiFunction.apply(this, [null, fn]);
});

Clazz.newMeth(C$, 'handleAsync$java_util_function_BiFunction',  function (fn) {
return p$1.uniHandleStage$java_util_concurrent_Executor$java_util_function_BiFunction.apply(this, [C$.asyncPool, fn]);
});

Clazz.newMeth(C$, 'handleAsync$java_util_function_BiFunction$java_util_concurrent_Executor',  function (fn, executor) {
return p$1.uniHandleStage$java_util_concurrent_Executor$java_util_function_BiFunction.apply(this, [C$.screenExecutor$java_util_concurrent_Executor(executor), fn]);
});

Clazz.newMeth(C$, 'toCompletableFuture$',  function () {
return this;
});

Clazz.newMeth(C$, 'exceptionally$java_util_function_Function',  function (fn) {
return p$1.uniExceptionallyStage$java_util_function_Function.apply(this, [fn]);
});

Clazz.newMeth(C$, 'allOf$java_util_concurrent_CompletableFutureA',  function (cfs) {
return C$.andTree$java_util_concurrent_CompletableFutureA$I$I(cfs, 0, cfs.length - 1);
}, 1);

Clazz.newMeth(C$, 'anyOf$java_util_concurrent_CompletableFutureA',  function (cfs) {
return C$.orTree$java_util_concurrent_CompletableFutureA$I$I(cfs, 0, cfs.length - 1);
}, 1);

Clazz.newMeth(C$, 'cancel$Z',  function (mayInterruptIfRunning) {
var cancelled=(this.result == null ) && this.internalComplete$O(Clazz.new_([Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'))],$I$(9,1).c$$Throwable)) ;
this.postComplete$();
return cancelled || this.isCancelled$() ;
});

Clazz.newMeth(C$, 'isCancelled$',  function () {
var r;
return (Clazz.instanceOf((r=this.result), "java.util.concurrent.CompletableFuture.AltResult")) && (Clazz.instanceOf((r).ex, "java.util.concurrent.CancellationException")) ;
});

Clazz.newMeth(C$, 'isCompletedExceptionally$',  function () {
var r;
return (Clazz.instanceOf((r=this.result), "java.util.concurrent.CompletableFuture.AltResult")) && r !== C$.NIL  ;
});

Clazz.newMeth(C$, 'obtrudeValue$O',  function (value) {
this.result=(value == null ) ? C$.NIL : value;
this.postComplete$();
});

Clazz.newMeth(C$, 'obtrudeException$Throwable',  function (ex) {
if (ex == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.result=Clazz.new_($I$(9,1).c$$Throwable,[ex]);
this.postComplete$();
});

Clazz.newMeth(C$, 'getNumberOfDependents$',  function () {
var count=0;
for (var p=this.stack; p != null ; p=p.next) ++count;

return count;
});

Clazz.newMeth(C$, 'toString',  function () {
var r=this.result;
var count;
return C$.superclazz.prototype.toString.apply(this, []) + ((r == null ) ? (((count=this.getNumberOfDependents$()) == 0) ? "[Not completed]" : "[Not completed, " + count + " dependents]" ) : (((Clazz.instanceOf(r, "java.util.concurrent.CompletableFuture.AltResult")) && (r).ex != null  ) ? "[Completed exceptionally]" : "[Completed normally]"));
});

Clazz.newMeth(C$, 'newIncompleteFuture$',  function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'defaultExecutor$',  function () {
return C$.getAsync_PoolJS$();
});

Clazz.newMeth(C$, 'getAsync_PoolJS$',  function () {
return C$.ASYNC_POOL == null  ? (C$.ASYNC_POOL=Clazz.new_($I$(11,1))) : C$.ASYNC_POOL;
}, 1);

Clazz.newMeth(C$, 'copy$',  function () {
return C$.uniCopyStage$java_util_concurrent_CompletableFuture(this);
});

Clazz.newMeth(C$, 'minimalCompletionStage$',  function () {
return p$1.uniAsMinimalStage.apply(this, []);
});

Clazz.newMeth(C$, 'completeAsync$java_util_function_Supplier$java_util_concurrent_Executor',  function (supplier, executor) {
if (supplier == null  || executor == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
executor.execute$Runnable(Clazz.new_($I$(31,1).c$$java_util_concurrent_CompletableFuture$java_util_function_Supplier,[this, supplier]));
return this;
});

Clazz.newMeth(C$, 'completeAsync$java_util_function_Supplier',  function (supplier) {
return this.completeAsync$java_util_function_Supplier$java_util_concurrent_Executor(supplier, this.defaultExecutor$());
});

Clazz.newMeth(C$, 'orTimeout$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
if (unit == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.result == null ) this.whenComplete$java_util_function_BiConsumer(Clazz.new_([$I$(5,"delay$Runnable$J$java_util_concurrent_TimeUnit",[Clazz.new_($I$(37,1).c$$java_util_concurrent_CompletableFuture,[this]), timeout, unit])],$I$(36,1).c$$java_util_concurrent_Future));
return this;
});

Clazz.newMeth(C$, 'completeOnTimeout$O$J$java_util_concurrent_TimeUnit',  function (value, timeout, unit) {
if (unit == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.result == null ) this.whenComplete$java_util_function_BiConsumer(Clazz.new_([$I$(5,"delay$Runnable$J$java_util_concurrent_TimeUnit",[Clazz.new_($I$(38,1).c$$java_util_concurrent_CompletableFuture$O,[this, value]), timeout, unit])],$I$(36,1).c$$java_util_concurrent_Future));
return this;
});

Clazz.newMeth(C$, 'delayedExecutor$J$java_util_concurrent_TimeUnit$java_util_concurrent_Executor',  function (delay, unit, executor) {
if (unit == null  || executor == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_($I$(39,1).c$$J$java_util_concurrent_TimeUnit$java_util_concurrent_Executor,[delay, unit, executor]);
}, 1);

Clazz.newMeth(C$, 'delayedExecutor$J$java_util_concurrent_TimeUnit',  function (delay, unit) {
if (unit == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_([delay, unit, C$.getAsync_PoolJS$()],$I$(39,1).c$$J$java_util_concurrent_TimeUnit$java_util_concurrent_Executor);
}, 1);

Clazz.newMeth(C$, 'completedStage$O',  function (value) {
return Clazz.new_([(value == null ) ? C$.NIL : value],$I$(40,1).c$$O);
}, 1);

Clazz.newMeth(C$, 'failedFuture$Throwable',  function (ex) {
if (ex == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_(C$.c$$O,[Clazz.new_($I$(9,1).c$$Throwable,[ex])]);
}, 1);

Clazz.newMeth(C$, 'failedStage$Throwable',  function (ex) {
if (ex == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return Clazz.new_([Clazz.new_($I$(9,1).c$$Throwable,[ex])],$I$(40,1).c$$O);
}, 1);

Clazz.newMeth(C$, 'unipush$java_util_concurrent_CompletableFuture_Completion',  function (c) {
if (c != null ) {
while (!this.tryPushStack$java_util_concurrent_CompletableFuture_Completion(c)){
if (this.result != null ) {
C$.UNSAFE.putObject$O$J$O(c, C$.NEXT, null);
break;
}}
if (this.result != null ) c.tryFire$I(0);
}});

Clazz.newMeth(C$, 'uniCopyStage$java_util_concurrent_CompletableFuture',  function (src) {
var r;
var d=src.newIncompleteFuture$();
if ((r=src.result) != null ) d.result=C$.encodeRelay$O(r);
 else src.unipush$java_util_concurrent_CompletableFuture_Completion(Clazz.new_($I$(4,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture,[d, src]));
return d;
}, 1);

Clazz.newMeth(C$, 'uniAsMinimalStage',  function () {
var r;
if ((r=this.result) != null ) return Clazz.new_([C$.encodeRelay$O(r)],$I$(40,1).c$$O);
var d=Clazz.new_($I$(40,1));
this.unipush$java_util_concurrent_CompletableFuture_Completion(Clazz.new_($I$(4,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture,[d, this]));
return d;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.NIL=Clazz.new_($I$(9,1).c$$Throwable,[null]);
C$.useCommonPool=($I$(10).getCommonPoolParallelism$() > 1);
C$.asyncPool=C$.useCommonPool ? $I$(10).commonPool$() : Clazz.new_($I$(11,1));
{
try {
var u;
C$.UNSAFE=u=$I$(12).getUnsafe$();
var k=Clazz.getClass(C$);
C$.RESULT=u.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("result"));
C$.STACK=u.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("stack"));
C$.NEXT=u.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass($I$(13)).getDeclaredField$S("next"));
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
throw Clazz.new_($I$(14,1).c$$Throwable,[x]);
} else {
throw x;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "AltResult", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ex','Throwable']]]

Clazz.newMeth(C$, 'c$$Throwable',  function (x) {
;C$.$init$.apply(this);
this.ex=x;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.CompletableFuture, "AsynchronousCompletionTask", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "ThreadPerTaskExecutor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.Executor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'execute$Runnable',  function (r) {
Clazz.new_($I$(1,1).c$$Runnable,[r]).start$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "Completion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinTask', ['Runnable', ['java.util.concurrent.CompletableFuture','java.util.concurrent.CompletableFuture.AsynchronousCompletionTask']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['next','java.util.concurrent.CompletableFuture.Completion']]]

Clazz.newMeth(C$, 'run$',  function () {
this.tryFire$I(1);
});

Clazz.newMeth(C$, 'exec$',  function () {
this.tryFire$I(1);
return true;
});

Clazz.newMeth(C$, 'getRawResult$',  function () {
return null;
});

Clazz.newMeth(C$, ['setRawResult$Void','setRawResult$O'],  function (v) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniCompletion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.Completion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['executor','java.util.concurrent.Executor','dep','java.util.concurrent.CompletableFuture','+src']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture',  function (executor, dep, src) {
Clazz.super_(C$, this);
this.executor=executor;
this.dep=dep;
this.src=src;
}, 1);

Clazz.newMeth(C$, 'claim$',  function () {
var e=this.executor;
if (this.compareAndSetForkJoinTaskTag$H$H(0, 1)) {
if (e == null ) return true;
this.executor=null;
e.execute$Runnable(this);
}return false;
});

Clazz.newMeth(C$, 'isLive$',  function () {
return this.dep != null ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniApply", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function',  function (executor, dep, src, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
if ((d=this.dep) == null  || !d.uniApply$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniApply(a=this.src, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniAccept", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.Consumer']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Consumer',  function (executor, dep, src, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
if ((d=this.dep) == null  || !d.uniAccept$java_util_concurrent_CompletableFuture$java_util_function_Consumer$java_util_concurrent_CompletableFuture_UniAccept(a=this.src, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniRun", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','Runnable']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable',  function (executor, dep, src, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
if ((d=this.dep) == null  || !d.uniRun$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_UniRun(a=this.src, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniWhenComplete", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.BiConsumer']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer',  function (executor, dep, src, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
if ((d=this.dep) == null  || !d.uniWhenComplete$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer$java_util_concurrent_CompletableFuture_UniWhenComplete(a=this.src, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniHandle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.BiFunction']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiFunction',  function (executor, dep, src, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
if ((d=this.dep) == null  || !d.uniHandle$java_util_concurrent_CompletableFuture$java_util_function_BiFunction$java_util_concurrent_CompletableFuture_UniHandle(a=this.src, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniExceptionally", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function',  function (dep, src, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[null, dep, src]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
if ((d=this.dep) == null  || !d.uniExceptionally$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniExceptionally(a=this.src, this.fn, this) ) return null;
this.dep=null;
this.src=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniRelay", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture',  function (dep, src) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[null, dep, src]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var r;
if ((d=this.dep) == null  || (a=this.src) == null   || (r=a.result) == null  ) return null;
if (d.result == null ) d.completeRelay$O(r);
this.src=null;
this.dep=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "UniCompose", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function',  function (executor, dep, src, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
if ((d=this.dep) == null  || !d.uniCompose$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_UniCompose(a=this.src, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$I(a, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "BiCompletion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.UniCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['snd','java.util.concurrent.CompletableFuture']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture',  function (executor, dep, src, snd) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src]);C$.$init$.apply(this);
this.snd=snd;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "CoCompletion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.Completion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['base','java.util.concurrent.CompletableFuture.BiCompletion']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture_BiCompletion',  function (base) {
Clazz.super_(C$, this);
this.base=base;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var c;
var d;
if ((c=this.base) == null  || (d=c.tryFire$I(mode)) == null  ) return null;
this.base=null;
return d;
});

Clazz.newMeth(C$, 'isLive$',  function () {
var c;
return (c=this.base) != null  && c.dep != null  ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "BiApply", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.BiFunction']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiFunction',  function (executor, dep, src, snd, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src, snd]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.biApply$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiFunction$java_util_concurrent_CompletableFuture_BiApply(a=this.src, b=this.snd, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.snd=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "BiAccept", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.BiConsumer']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer',  function (executor, dep, src, snd, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src, snd]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.biAccept$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_BiConsumer$java_util_concurrent_CompletableFuture_BiAccept(a=this.src, b=this.snd, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.snd=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "BiRun", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','Runnable']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable',  function (executor, dep, src, snd, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src, snd]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.biRun$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_BiRun(a=this.src, b=this.snd, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.snd=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "BiRelay", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture',  function (dep, src, snd) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[null, dep, src, snd]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.biRelay$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture(a=this.src, b=this.snd) ) return null;
this.src=null;
this.snd=null;
this.dep=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "OrApply", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.Function']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function',  function (executor, dep, src, snd, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src, snd]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.orApply$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Function$java_util_concurrent_CompletableFuture_OrApply(a=this.src, b=this.snd, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.snd=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "OrAccept", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','java.util.function.Consumer']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Consumer',  function (executor, dep, src, snd, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src, snd]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.orAccept$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_function_Consumer$java_util_concurrent_CompletableFuture_OrAccept(a=this.src, b=this.snd, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.snd=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "OrRun", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fn','Runnable']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable',  function (executor, dep, src, snd, fn) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[executor, dep, src, snd]);C$.$init$.apply(this);
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.orRun$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$Runnable$java_util_concurrent_CompletableFuture_OrRun(a=this.src, b=this.snd, this.fn, mode > 0 ? null : this) ) return null;
this.dep=null;
this.src=null;
this.snd=null;
this.fn=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "OrRelay", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.BiCompletion']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture',  function (dep, src, snd) {
;C$.superclazz.c$$java_util_concurrent_Executor$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture.apply(this,[null, dep, src, snd]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (mode) {
var d;
var a;
var b;
if ((d=this.dep) == null  || !d.orRelay$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture(a=this.src, b=this.snd) ) return null;
this.src=null;
this.snd=null;
this.dep=null;
return d.postFire$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture$I(a, b, mode);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "AsyncSupply", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinTask', ['Runnable', ['java.util.concurrent.CompletableFuture','java.util.concurrent.CompletableFuture.AsynchronousCompletionTask']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dep','java.util.concurrent.CompletableFuture','fn','java.util.function.Supplier']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture$java_util_function_Supplier',  function (dep, fn) {
Clazz.super_(C$, this);
this.dep=dep;
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'getRawResult$',  function () {
return null;
});

Clazz.newMeth(C$, ['setRawResult$Void','setRawResult$O'],  function (v) {
});

Clazz.newMeth(C$, 'exec$',  function () {
this.run$();
return true;
});

Clazz.newMeth(C$, 'run$',  function () {
var d;
var f;
if ((d=this.dep) != null  && (f=this.fn) != null  ) {
this.dep=null;
this.fn=null;
if (d.result == null ) {
try {
d.completeValue$O(f.get$());
} catch (ex) {
d.completeThrowable$Throwable(ex);
}
}d.postComplete$();
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "AsyncRun", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.ForkJoinTask', ['Runnable', ['java.util.concurrent.CompletableFuture','java.util.concurrent.CompletableFuture.AsynchronousCompletionTask']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dep','java.util.concurrent.CompletableFuture','fn','Runnable']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture$Runnable',  function (dep, fn) {
Clazz.super_(C$, this);
this.dep=dep;
this.fn=fn;
}, 1);

Clazz.newMeth(C$, 'getRawResult$',  function () {
return null;
});

Clazz.newMeth(C$, ['setRawResult$Void','setRawResult$O'],  function (v) {
});

Clazz.newMeth(C$, 'exec$',  function () {
this.run$();
return true;
});

Clazz.newMeth(C$, 'run$',  function () {
var d;
var f;
if ((d=this.dep) != null  && (f=this.fn) != null  ) {
this.dep=null;
this.fn=null;
if (d.result == null ) {
try {
f.run$();
d.completeNull$();
} catch (ex) {
d.completeThrowable$Throwable(ex);
}
}d.postComplete$();
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "Signaller", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.CompletableFuture','.Completion'], [['java.util.concurrent.ForkJoinPool','java.util.concurrent.ForkJoinPool.ManagedBlocker']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['interruptControl'],'J',['nanos','deadline'],'O',['thread','Thread']]]

Clazz.newMeth(C$, 'c$$Z$J$J',  function (interruptible, nanos, deadline) {
Clazz.super_(C$, this);
this.thread=$I$(1).currentThread$();
this.interruptControl=interruptible ? 1 : 0;
this.nanos=nanos;
this.deadline=deadline;
}, 1);

Clazz.newMeth(C$, 'tryFire$I',  function (ignore) {
var w;
if ((w=this.thread) != null ) {
this.thread=null;
$I$(2).unpark$Thread(w);
}return null;
});

Clazz.newMeth(C$, 'isReleasable$',  function () {
if (this.thread == null ) return true;
if ($I$(1).interrupted$()) {
var i=this.interruptControl;
this.interruptControl=-1;
if (i > 0) return true;
}if (Long.$ne(this.deadline,0 ) && (Long.$le(this.nanos,0 ) || Long.$le((this.nanos=Long.$sub(this.deadline,System.nanoTime$())),0 ) ) ) {
this.thread=null;
return true;
}return false;
});

Clazz.newMeth(C$, 'block$',  function () {
if (this.isReleasable$()) return true;
 else if (Long.$eq(this.deadline,0 )) $I$(2).park$O(this);
 else if (Long.$gt(this.nanos,0 )) $I$(2).parkNanos$O$J(this, this.nanos);
return this.isReleasable$();
});

Clazz.newMeth(C$, 'isLive$',  function () {
return this.thread != null ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "MinimalStage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.CompletableFuture');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (r) {
;C$.superclazz.c$$O.apply(this,[r]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newIncompleteFuture$',  function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'get$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'get$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getNow$O',  function (valueIfAbsent) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'join$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'complete$O',  function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'completeExceptionally$Throwable',  function (ex) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'cancel$Z',  function (mayInterruptIfRunning) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'obtrudeValue$O',  function (value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'obtrudeException$Throwable',  function (ex) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'isDone$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'isCancelled$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'isCompletedExceptionally$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getNumberOfDependents$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'completeAsync$java_util_function_Supplier$java_util_concurrent_Executor',  function (supplier, executor) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'completeAsync$java_util_function_Supplier',  function (supplier) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'orTimeout$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'completeOnTimeout$O$J$java_util_concurrent_TimeUnit',  function (value, timeout, unit) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'toCompletableFuture$',  function () {
var r;
if ((r=this.result) != null ) return Clazz.new_([$I$(3).encodeRelay$O(r)],$I$(3,1).c$$O);
 else {
var d=Clazz.new_($I$(3,1));
this.unipush$java_util_concurrent_CompletableFuture_Completion(Clazz.new_($I$(4,1).c$$java_util_concurrent_CompletableFuture$java_util_concurrent_CompletableFuture,[d, this]));
return d;
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "DelayedCompleter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['f','java.util.concurrent.CompletableFuture','u','<U>']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture$O',  function (f, u) {
;C$.$init$.apply(this);
this.f=f;
this.u=u;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.f != null ) this.f.complete$O(this.u);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "Canceller", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.function.BiConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['f','java.util.concurrent.Future']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Future',  function (f) {
;C$.$init$.apply(this);
this.f=f;
}, 1);

Clazz.newMeth(C$, ['accept$O$Throwable','accept$O$O'],  function (ignore, ex) {
if (ex == null  && this.f != null   && !this.f.isDone$() ) this.f.cancel$Z(false);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "DelayedExecutor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.Executor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['delay'],'O',['unit','java.util.concurrent.TimeUnit','executor','java.util.concurrent.Executor']]]

Clazz.newMeth(C$, 'c$$J$java_util_concurrent_TimeUnit$java_util_concurrent_Executor',  function (delay, unit, executor) {
;C$.$init$.apply(this);
this.delay=delay;
this.unit=unit;
this.executor=executor;
}, 1);

Clazz.newMeth(C$, 'execute$Runnable',  function (r) {
$I$(5,"delay$Runnable$J$java_util_concurrent_TimeUnit",[Clazz.new_($I$(6,1).c$$java_util_concurrent_Executor$Runnable,[this.executor, r]), this.delay, this.unit]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "TaskSubmitter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['executor','java.util.concurrent.Executor','action','Runnable']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$Runnable',  function (executor, action) {
;C$.$init$.apply(this);
this.executor=executor;
this.action=action;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.executor.execute$Runnable(this.action);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "Timeout", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['f','java.util.concurrent.CompletableFuture']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_CompletableFuture',  function (f) {
;C$.$init$.apply(this);
this.f=f;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.f != null  && !this.f.isDone$() ) this.f.completeExceptionally$Throwable(Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException')));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture, "Delayer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['DaemonThreadFactory',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['delayer','java.util.concurrent.ScheduledThreadPoolExecutor']]]

Clazz.newMeth(C$, 'delay$Runnable$J$java_util_concurrent_TimeUnit',  function (command, delay, unit) {
return C$.delayer.schedule$Runnable$J$java_util_concurrent_TimeUnit(command, delay, unit);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
(C$.delayer=Clazz.new_([1, Clazz.new_($I$(8,1))],$I$(7,1).c$$I$java_util_concurrent_ThreadFactory)).setRemoveOnCancelPolicy$Z(true);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompletableFuture.Delayer, "DaemonThreadFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.ThreadFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newThread$Runnable',  function (r) {
var t=Clazz.new_($I$(1,1).c$$Runnable,[r]);
t.setDaemon$Z(true);
t.setName$S("CompletableFutureDelayScheduler");
return t;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

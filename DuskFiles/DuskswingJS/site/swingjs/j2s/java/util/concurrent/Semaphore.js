(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'Thread',['java.util.concurrent.Semaphore','.NonfairSync'],['java.util.concurrent.Semaphore','.FairSync']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Semaphore", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['Sync',1032],['NonfairSync',24],['FairSync',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sync','java.util.concurrent.Semaphore.Sync']]]

Clazz.newMeth(C$, 'c$$I',  function (permits) {
;C$.$init$.apply(this);
this.sync=Clazz.new_($I$(2,1).c$$I,[permits]);
}, 1);

Clazz.newMeth(C$, 'c$$I$Z',  function (permits, fair) {
;C$.$init$.apply(this);
this.sync=(fair) ? Clazz.new_($I$(3,1).c$$I,[permits]) : Clazz.new_($I$(2,1).c$$I,[permits]);
}, 1);

Clazz.newMeth(C$, 'acquire$',  function () {
this.sync.acquireSharedInterruptibly$I(1);
});

Clazz.newMeth(C$, 'acquireUninterruptibly$',  function () {
this.sync.acquireShared$I(1);
});

Clazz.newMeth(C$, 'tryAcquire$',  function () {
return this.sync.nonfairTryAcquireShared$I(1) >= 0;
});

Clazz.newMeth(C$, 'tryAcquire$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return this.sync.tryAcquireSharedNanos$I$J(1, unit.toNanos$J(timeout));
});

Clazz.newMeth(C$, 'release$',  function () {
this.sync.releaseShared$I(1);
});

Clazz.newMeth(C$, 'acquire$I',  function (permits) {
if (permits < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.sync.acquireSharedInterruptibly$I(permits);
});

Clazz.newMeth(C$, 'acquireUninterruptibly$I',  function (permits) {
if (permits < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.sync.acquireShared$I(permits);
});

Clazz.newMeth(C$, 'tryAcquire$I',  function (permits) {
if (permits < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return this.sync.nonfairTryAcquireShared$I(permits) >= 0;
});

Clazz.newMeth(C$, 'tryAcquire$I$J$java_util_concurrent_TimeUnit',  function (permits, timeout, unit) {
if (permits < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return this.sync.tryAcquireSharedNanos$I$J(permits, unit.toNanos$J(timeout));
});

Clazz.newMeth(C$, 'release$I',  function (permits) {
if (permits < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.sync.releaseShared$I(permits);
});

Clazz.newMeth(C$, 'availablePermits$',  function () {
return this.sync.getPermits$();
});

Clazz.newMeth(C$, 'drainPermits$',  function () {
return this.sync.drainPermits$();
});

Clazz.newMeth(C$, 'reducePermits$I',  function (reduction) {
if (reduction < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.sync.reducePermits$I(reduction);
});

Clazz.newMeth(C$, 'isFair$',  function () {
return Clazz.instanceOf(this.sync, "java.util.concurrent.Semaphore.FairSync");
});

Clazz.newMeth(C$, 'hasQueuedThreads$',  function () {
return this.sync.hasQueuedThreads$();
});

Clazz.newMeth(C$, 'getQueueLength$',  function () {
return this.sync.getQueueLength$();
});

Clazz.newMeth(C$, 'getQueuedThreads$',  function () {
return this.sync.getQueuedThreads$();
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[Permits = " + this.sync.getPermits$() + "]" ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Semaphore, "Sync", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.locks.AbstractQueuedSynchronizer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (permits) {
Clazz.super_(C$, this);
this.setState$I(permits);
}, 1);

Clazz.newMeth(C$, 'getPermits$',  function () {
return this.getState$();
});

Clazz.newMeth(C$, 'nonfairTryAcquireShared$I',  function (acquires) {
for (; ; ) {
var available=this.getState$();
var remaining=available - acquires;
if (remaining < 0 || this.compareAndSetState$I$I(available, remaining) ) return remaining;
}
});

Clazz.newMeth(C$, 'tryReleaseShared$I',  function (releases) {
for (; ; ) {
var p=this.getState$();
if (this.compareAndSetState$I$I(p, p + releases)) return true;
}
});

Clazz.newMeth(C$, 'reducePermits$I',  function (reductions) {
for (; ; ) {
var current=this.getState$();
var next=current - reductions;
if (this.compareAndSetState$I$I(current, next)) return;
}
});

Clazz.newMeth(C$, 'drainPermits$',  function () {
for (; ; ) {
var current=this.getState$();
if (current == 0 || this.compareAndSetState$I$I(current, 0) ) return current;
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Semaphore, "NonfairSync", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.Semaphore','.Sync']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (permits) {
;C$.superclazz.c$$I.apply(this,[permits]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryAcquireShared$I',  function (acquires) {
return this.nonfairTryAcquireShared$I(acquires);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Semaphore, "FairSync", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.Semaphore','.Sync']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (permits) {
;C$.superclazz.c$$I.apply(this,[permits]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryAcquireShared$I',  function (acquires) {
for (; ; ) {
if (this.getFirstQueuedThread$() !== $I$(1).currentThread$()  && this.hasQueuedThreads$() ) return -1;
var available=this.getState$();
var remaining=available - acquires;
if (remaining < 0 || this.compareAndSetState$I$I(available, remaining) ) return remaining;
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

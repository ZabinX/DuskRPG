(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),p$1={},I$=[[0,['java.util.concurrent.locks.AbstractQueuedSynchronizer','.ConditionObject'],'Thread','Error',['java.util.concurrent.locks.ReentrantLock','.NonfairSync'],['java.util.concurrent.locks.ReentrantLock','.FairSync']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReentrantLock", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.concurrent.locks.Lock', 'java.io.Serializable']);
C$.$classes$=[['Sync',1032],['NonfairSync',24],['FairSync',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sync','java.util.concurrent.locks.ReentrantLock.Sync']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.sync=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (fair) {
;C$.$init$.apply(this);
this.sync=(fair) ? Clazz.new_($I$(5,1)) : Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'lock$',  function () {
});

Clazz.newMeth(C$, 'lockInterruptibly$',  function () {
});

Clazz.newMeth(C$, 'tryLock$',  function () {
return true;
});

Clazz.newMeth(C$, 'tryLock$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return true;
});

Clazz.newMeth(C$, 'unlock$',  function () {
});

Clazz.newMeth(C$, 'newCondition$',  function () {
return this.sync.newCondition$();
});

Clazz.newMeth(C$, 'getHoldCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isHeldByCurrentThread$',  function () {
return true;
});

Clazz.newMeth(C$, 'isLocked$',  function () {
return false;
});

Clazz.newMeth(C$, 'isFair$',  function () {
return true;
});

Clazz.newMeth(C$, 'getOwner$',  function () {
return null;
});

Clazz.newMeth(C$, 'hasQueuedThreads$',  function () {
return false;
});

Clazz.newMeth(C$, 'hasQueuedThread$Thread',  function (thread) {
return false;
});

Clazz.newMeth(C$, 'getQueueLength$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getQueuedThreads$',  function () {
return null;
});

Clazz.newMeth(C$, 'hasWaiters$java_util_concurrent_locks_Condition',  function (condition) {
return false;
});

Clazz.newMeth(C$, 'getWaitQueueLength$java_util_concurrent_locks_Condition',  function (condition) {
return 0;
});

Clazz.newMeth(C$, 'getWaitingThreads$java_util_concurrent_locks_Condition',  function (condition) {
return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[Unlocked]";
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReentrantLock, "Sync", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.locks.AbstractQueuedSynchronizer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'nonfairTryAcquire$I',  function (acquires) {
return true;
});

Clazz.newMeth(C$, 'tryRelease$I',  function (releases) {
return true;
});

Clazz.newMeth(C$, 'isHeldExclusively$',  function () {
return false;
});

Clazz.newMeth(C$, 'newCondition$',  function () {
return Clazz.new_($I$(1,1),[this, null]);
});

Clazz.newMeth(C$, 'getOwner$',  function () {
return this.getState$() == 0 ? null : this.getExclusiveOwnerThread$();
});

Clazz.newMeth(C$, 'getHoldCount$',  function () {
return this.isHeldExclusively$() ? this.getState$() : 0;
});

Clazz.newMeth(C$, 'isLocked$',  function () {
return this.getState$() != 0;
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
this.setState$I(0);
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReentrantLock, "NonfairSync", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.locks.ReentrantLock','.Sync']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'lock$',  function () {
if (this.compareAndSetState$I$I(0, 1)) this.setExclusiveOwnerThread$Thread($I$(2).currentThread$());
 else this.acquire$I(1);
});

Clazz.newMeth(C$, 'tryAcquire$I',  function (acquires) {
return this.nonfairTryAcquire$I(acquires);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReentrantLock, "FairSync", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.locks.ReentrantLock','.Sync']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'lock$',  function () {
this.acquire$I(1);
});

Clazz.newMeth(C$, 'tryAcquire$I',  function (acquires) {
var current=$I$(2).currentThread$();
var c=this.getState$();
if (c == 0) {
if (!this.hasQueuedPredecessors$() && this.compareAndSetState$I$I(0, acquires) ) {
this.setExclusiveOwnerThread$Thread(current);
return true;
}} else if (current === this.getExclusiveOwnerThread$() ) {
var nextc=c + acquires;
if (nextc < 0) throw Clazz.new_($I$(3,1).c$$S,["Maximum lock count exceeded"]);
this.setState$I(nextc);
return true;
}return false;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

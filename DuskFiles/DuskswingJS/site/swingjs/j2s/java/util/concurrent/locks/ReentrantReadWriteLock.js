(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),I$=[[0,['java.util.concurrent.locks.ReentrantReadWriteLock','.ReadLock'],['java.util.concurrent.locks.ReentrantReadWriteLock','.WriteLock']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReentrantReadWriteLock", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.concurrent.locks.ReadWriteLock', 'java.io.Serializable']);
C$.$classes$=[['ReadLock',9],['WriteLock',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['readerLock','java.util.concurrent.locks.ReentrantReadWriteLock.ReadLock','writerLock','java.util.concurrent.locks.ReentrantReadWriteLock.WriteLock']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (fair) {
;C$.$init$.apply(this);
this.readerLock=Clazz.new_($I$(1,1).c$$java_util_concurrent_locks_ReentrantReadWriteLock,[this]);
this.writerLock=Clazz.new_($I$(2,1).c$$java_util_concurrent_locks_ReentrantReadWriteLock,[this]);
}, 1);

Clazz.newMeth(C$, 'writeLock$',  function () {
return this.writerLock;
});

Clazz.newMeth(C$, 'readLock$',  function () {
return this.readerLock;
});

Clazz.newMeth(C$, 'isFair$',  function () {
return true;
});

Clazz.newMeth(C$, 'getOwner$',  function () {
return null;
});

Clazz.newMeth(C$, 'getReadLockCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isWriteLocked$',  function () {
return false;
});

Clazz.newMeth(C$, 'isWriteLockedByCurrentThread$',  function () {
return true;
});

Clazz.newMeth(C$, 'getWriteHoldCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getReadHoldCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getQueuedWriterThreads$',  function () {
return null;
});

Clazz.newMeth(C$, 'getQueuedReaderThreads$',  function () {
return null;
});

Clazz.newMeth(C$, 'hasQueuedThreads$',  function () {
return false;
});

Clazz.newMeth(C$, 'hasQueuedThread$Thread',  function (thread) {
return true;
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
return C$.superclazz.prototype.toString.apply(this, []) + "[Write locks, Read locks]";
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReentrantReadWriteLock, "ReadLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.concurrent.locks.Lock', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_locks_ReentrantReadWriteLock',  function (lock) {
;C$.$init$.apply(this);
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
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[Read locks]";
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReentrantReadWriteLock, "WriteLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.concurrent.locks.Lock', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_locks_ReentrantReadWriteLock',  function (lock) {
;C$.$init$.apply(this);
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
return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[Unlocked]";
});

Clazz.newMeth(C$, 'isHeldByCurrentThread$',  function () {
return true;
});

Clazz.newMeth(C$, 'getHoldCount$',  function () {
return 1;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

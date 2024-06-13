(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'java.util.concurrent.locks.ReentrantLock','java.util.PriorityQueue','java.util.concurrent.TimeUnit',['java.util.concurrent.DelayQueue','.Itr']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DelayQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', 'java.util.concurrent.BlockingQueue');
C$.$classes$=[['Itr',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(1,1));
this.available=this.lock.newCondition$();
this.q=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['lock','java.util.concurrent.locks.ReentrantLock','available','java.util.concurrent.locks.Condition','q','java.util.PriorityQueue']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
Clazz.super_(C$, this);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, ['add$java_util_concurrent_Delayed','add$O'],  function (e) {
return this.offer$java_util_concurrent_Delayed(e);
});

Clazz.newMeth(C$, ['offer$java_util_concurrent_Delayed','offer$O'],  function (e) {
var lock=this.lock;
lock.lock$();
try {
var first=this.q.peek$();
this.q.offer$O(e);
if (first == null  || e.compareTo$O(first) < 0 ) this.available.signalAll$();
return true;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, ['put$java_util_concurrent_Delayed','put$O'],  function (e) {
this.offer$java_util_concurrent_Delayed(e);
});

Clazz.newMeth(C$, ['offer$java_util_concurrent_Delayed$J$java_util_concurrent_TimeUnit','offer$O$J$java_util_concurrent_TimeUnit'],  function (e, timeout, unit) {
return this.offer$java_util_concurrent_Delayed(e);
});

Clazz.newMeth(C$, 'poll$',  function () {
var lock=this.lock;
lock.lock$();
try {
var first=this.q.peek$();
if (first == null  || Long.$gt(first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS),0 ) ) return null;
 else {
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
if (this.q.size$() != 0) this.available.signalAll$();
return x;
}} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'take$',  function () {
var lock=this.lock;
lock.lockInterruptibly$();
try {
for (; ; ) {
var first=this.q.peek$();
if (first == null ) {
this.available.await$();
} else {
var delay=first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS);
if (Long.$gt(delay,0 )) {
var tl=this.available.awaitNanos$J(delay);
} else {
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
if (this.q.size$() != 0) this.available.signalAll$();
return x;
}}}
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
var nanos=unit.toNanos$J(timeout);
var lock=this.lock;
lock.lockInterruptibly$();
try {
for (; ; ) {
var first=this.q.peek$();
if (first == null ) {
if (Long.$le(nanos,0 )) return null;
 else nanos=this.available.awaitNanos$J(nanos);
} else {
var delay=first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS);
if (Long.$gt(delay,0 )) {
if (Long.$le(nanos,0 )) return null;
if (Long.$gt(delay,nanos )) delay=nanos;
var timeLeft=this.available.awaitNanos$J(delay);
(nanos=Long.$sub(nanos,(Long.$sub(delay,timeLeft))));
} else {
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
if (this.q.size$() != 0) this.available.signalAll$();
return x;
}}}
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'peek$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.peek$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'size$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.size$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection',  function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var lock=this.lock;
lock.lock$();
try {
var n=0;
for (; ; ) {
var first=this.q.peek$();
if (first == null  || Long.$gt(first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS),0 ) ) break;
c.add$O(this.q.poll$());
++n;
}
if (n > 0) this.available.signalAll$();
return n;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I',  function (c, maxElements) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (maxElements <= 0) return 0;
var lock=this.lock;
lock.lock$();
try {
var n=0;
while (n < maxElements){
var first=this.q.peek$();
if (first == null  || Long.$gt(first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS),0 ) ) break;
c.add$O(this.q.poll$());
++n;
}
if (n > 0) this.available.signalAll$();
return n;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'clear$',  function () {
var lock=this.lock;
lock.lock$();
try {
this.q.clear$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remainingCapacity$',  function () {
return 2147483647;
});

Clazz.newMeth(C$, 'toArray$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.toArray$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var lock=this.lock;
lock.lock$();
try {
return this.q.toArray$OA(a);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
var lock=this.lock;
lock.lock$();
try {
return this.q.remove$O(o);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, null, this.toArray$()],$I$(4,1).c$$OA);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DelayQueue, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['cursor','lastRet'],'O',['array','Object[]']]]

Clazz.newMeth(C$, 'c$$OA',  function (array) {
;C$.$init$.apply(this);
this.lastRet=-1;
this.array=array;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor < this.array.length;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.cursor >= this.array.length) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastRet=this.cursor;
return this.array[this.cursor++];
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
var x=this.array[this.lastRet];
this.lastRet=-1;
this.b$['java.util.concurrent.DelayQueue'].lock.lock$();
try {
for (var it=this.b$['java.util.concurrent.DelayQueue'].q.iterator$(); it.hasNext$(); ) {
if (it.next$() === x ) {
it.remove$();
return;
}}
} finally {
this.b$['java.util.concurrent.DelayQueue'].lock.unlock$();
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

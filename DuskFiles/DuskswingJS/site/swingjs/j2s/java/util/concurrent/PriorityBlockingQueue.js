(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.locks.ReentrantLock','java.util.PriorityQueue',['java.util.concurrent.PriorityBlockingQueue','.Itr']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PriorityBlockingQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.concurrent.BlockingQueue', 'java.io.Serializable']);
C$.$classes$=[['Itr',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(1,1).c$$Z,[true]);
this.notEmpty=this.lock.newCondition$();
},1);

C$.$fields$=[['O',['q','java.util.PriorityQueue','lock','java.util.concurrent.locks.ReentrantLock','notEmpty','java.util.concurrent.locks.Condition']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.q=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
Clazz.super_(C$, this);
this.q=Clazz.new_($I$(2,1).c$$I$java_util_Comparator,[initialCapacity, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_Comparator',  function (initialCapacity, comparator) {
Clazz.super_(C$, this);
this.q=Clazz.new_($I$(2,1).c$$I$java_util_Comparator,[initialCapacity, comparator]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
Clazz.super_(C$, this);
this.q=Clazz.new_($I$(2,1).c$$java_util_Collection,[c]);
}, 1);

Clazz.newMeth(C$, 'add$O',  function (e) {
return this.offer$O(e);
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
var lock=this.lock;
lock.lock$();
try {
var ok=this.q.offer$O(e);
Clazz.assert(C$, this, function(){return ok});
this.notEmpty.signal$();
return true;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'put$O',  function (e) {
this.offer$O(e);
});

Clazz.newMeth(C$, 'offer$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
return this.offer$O(e);
});

Clazz.newMeth(C$, 'poll$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.poll$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'take$',  function () {
var lock=this.lock;
lock.lockInterruptibly$();
try {
try {
while (this.q.size$() == 0)this.notEmpty.await$();

} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notEmpty.signal$();
throw ie;
} else {
throw ie;
}
}
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
return x;
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
var x=this.q.poll$();
if (x != null ) return x;
if (Long.$le(nanos,0 )) return null;
try {
nanos=this.notEmpty.awaitNanos$J(nanos);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notEmpty.signal$();
throw ie;
} else {
throw ie;
}
}
}
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

Clazz.newMeth(C$, 'comparator$',  function () {
return this.q.comparator$();
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

Clazz.newMeth(C$, 'remainingCapacity$',  function () {
return 2147483647;
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

Clazz.newMeth(C$, 'contains$O',  function (o) {
var lock=this.lock;
lock.lock$();
try {
return this.q.contains$O(o);
} finally {
lock.unlock$();
}
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

Clazz.newMeth(C$, 'toString',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.toString();
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
var e;
while ((e=this.q.poll$()) != null ){
c.add$O(e);
++n;
}
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
var e;
while (n < maxElements && (e=this.q.poll$()) != null  ){
c.add$O(e);
++n;
}
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

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var lock=this.lock;
lock.lock$();
try {
return this.q.toArray$OA(a);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, null, this.toArray$()],$I$(3,1).c$$OA);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
this.lock.lock$();
try {
s.defaultWriteObject$();
} finally {
this.lock.unlock$();
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.PriorityBlockingQueue, "Itr", function(){
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
this.b$['java.util.concurrent.PriorityBlockingQueue'].lock.lock$();
try {
for (var it=this.b$['java.util.concurrent.PriorityBlockingQueue'].q.iterator$(); it.hasNext$(); ) {
if (it.next$() === x ) {
it.remove$();
return;
}}
} finally {
this.b$['java.util.concurrent.PriorityBlockingQueue'].lock.unlock$();
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicInteger','java.util.concurrent.locks.ReentrantLock',['java.util.concurrent.LinkedBlockingQueue','.Node'],'java.lang.reflect.Array',['java.util.concurrent.LinkedBlockingQueue','.Itr']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinkedBlockingQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.concurrent.BlockingQueue', 'java.io.Serializable']);
C$.$classes$=[['Node',8],['Itr',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.count=Clazz.new_($I$(1,1).c$$I,[0]);
this.takeLock=Clazz.new_($I$(2,1));
this.notEmpty=this.takeLock.newCondition$();
this.putLock=Clazz.new_($I$(2,1));
this.notFull=this.putLock.newCondition$();
},1);

C$.$fields$=[['I',['capacity'],'O',['count','java.util.concurrent.atomic.AtomicInteger','head','java.util.concurrent.LinkedBlockingQueue.Node','+last','takeLock','java.util.concurrent.locks.ReentrantLock','notEmpty','java.util.concurrent.locks.Condition','putLock','java.util.concurrent.locks.ReentrantLock','notFull','java.util.concurrent.locks.Condition']]]

Clazz.newMeth(C$, 'signalNotEmpty',  function () {
var takeLock=this.takeLock;
takeLock.lock$();
try {
this.notEmpty.signal$();
} finally {
takeLock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'signalNotFull',  function () {
var putLock=this.putLock;
putLock.lock$();
try {
this.notFull.signal$();
} finally {
putLock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'insert$O',  function (x) {
this.last=this.last.next_=Clazz.new_($I$(3,1).c$$O,[x]);
}, p$1);

Clazz.newMeth(C$, 'extract',  function () {
var first=this.head.next_;
this.head=first;
var x=first.item;
first.item=null;
return x;
}, p$1);

Clazz.newMeth(C$, 'fullyLock',  function () {
this.putLock.lock$();
this.takeLock.lock$();
}, p$1);

Clazz.newMeth(C$, 'fullyUnlock',  function () {
this.takeLock.unlock$();
this.putLock.unlock$();
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [2147483647]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (capacity) {
Clazz.super_(C$, this);
if (capacity <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.capacity=capacity;
this.last=this.head=Clazz.new_($I$(3,1).c$$O,[null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
C$.c$$I.apply(this, [2147483647]);
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.add$O(e);

}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.count.get$();
});

Clazz.newMeth(C$, 'remainingCapacity$',  function () {
return this.capacity - this.count.get$();
});

Clazz.newMeth(C$, 'put$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var c=-1;
var putLock=this.putLock;
var count=this.count;
putLock.lockInterruptibly$();
try {
try {
while (count.get$() == this.capacity)this.notFull.await$();

} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notFull.signal$();
throw ie;
} else {
throw ie;
}
}
p$1.insert$O.apply(this, [e]);
c=count.getAndIncrement$();
if (c + 1 < this.capacity) this.notFull.signal$();
} finally {
putLock.unlock$();
}
if (c == 0) p$1.signalNotEmpty.apply(this, []);
});

Clazz.newMeth(C$, 'offer$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var nanos=unit.toNanos$J(timeout);
var c=-1;
var putLock=this.putLock;
var count=this.count;
putLock.lockInterruptibly$();
try {
for (; ; ) {
if (count.get$() < this.capacity) {
p$1.insert$O.apply(this, [e]);
c=count.getAndIncrement$();
if (c + 1 < this.capacity) this.notFull.signal$();
break;
}if (Long.$le(nanos,0 )) return false;
try {
nanos=this.notFull.awaitNanos$J(nanos);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notFull.signal$();
throw ie;
} else {
throw ie;
}
}
}
} finally {
putLock.unlock$();
}
if (c == 0) p$1.signalNotEmpty.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var count=this.count;
if (count.get$() == this.capacity) return false;
var c=-1;
var putLock=this.putLock;
putLock.lock$();
try {
if (count.get$() < this.capacity) {
p$1.insert$O.apply(this, [e]);
c=count.getAndIncrement$();
if (c + 1 < this.capacity) this.notFull.signal$();
}} finally {
putLock.unlock$();
}
if (c == 0) p$1.signalNotEmpty.apply(this, []);
return c >= 0;
});

Clazz.newMeth(C$, 'take$',  function () {
var x;
var c=-1;
var count=this.count;
var takeLock=this.takeLock;
takeLock.lockInterruptibly$();
try {
try {
while (count.get$() == 0)this.notEmpty.await$();

} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notEmpty.signal$();
throw ie;
} else {
throw ie;
}
}
x=p$1.extract.apply(this, []);
c=count.getAndDecrement$();
if (c > 1) this.notEmpty.signal$();
} finally {
takeLock.unlock$();
}
if (c == this.capacity) p$1.signalNotFull.apply(this, []);
return x;
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
var x=null;
var c=-1;
var nanos=unit.toNanos$J(timeout);
var count=this.count;
var takeLock=this.takeLock;
takeLock.lockInterruptibly$();
try {
for (; ; ) {
if (count.get$() > 0) {
x=p$1.extract.apply(this, []);
c=count.getAndDecrement$();
if (c > 1) this.notEmpty.signal$();
break;
}if (Long.$le(nanos,0 )) return null;
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
takeLock.unlock$();
}
if (c == this.capacity) p$1.signalNotFull.apply(this, []);
return x;
});

Clazz.newMeth(C$, 'poll$',  function () {
var count=this.count;
if (count.get$() == 0) return null;
var x=null;
var c=-1;
var takeLock=this.takeLock;
takeLock.lock$();
try {
if (count.get$() > 0) {
x=p$1.extract.apply(this, []);
c=count.getAndDecrement$();
if (c > 1) this.notEmpty.signal$();
}} finally {
takeLock.unlock$();
}
if (c == this.capacity) p$1.signalNotFull.apply(this, []);
return x;
});

Clazz.newMeth(C$, 'peek$',  function () {
if (this.count.get$() == 0) return null;
var takeLock=this.takeLock;
takeLock.lock$();
try {
var first=this.head.next_;
if (first == null ) return null;
 else return first.item;
} finally {
takeLock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (o == null ) return false;
var removed=false;
p$1.fullyLock.apply(this, []);
try {
var trail=this.head;
var p=this.head.next_;
while (p != null ){
if (o.equals$O(p.item)) {
removed=true;
break;
}trail=p;
p=p.next_;
}
if (removed) {
p.item=null;
trail.next_=p.next_;
if (this.last === p ) this.last=trail;
if (this.count.getAndDecrement$() == this.capacity) this.notFull.signalAll$();
}} finally {
p$1.fullyUnlock.apply(this, []);
}
return removed;
});

Clazz.newMeth(C$, 'toArray$',  function () {
p$1.fullyLock.apply(this, []);
try {
var size=this.count.get$();
var a=Clazz.array(java.lang.Object, [size]);
var k=0;
for (var p=this.head.next_; p != null ; p=p.next_) a[k++]=p.item;

return a;
} finally {
p$1.fullyUnlock.apply(this, []);
}
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
p$1.fullyLock.apply(this, []);
try {
var size=this.count.get$();
if (a.length < size) a=Clazz.array(a.getClass$().getComponentType$(), size);
var k=0;
for (var p=this.head.next_; p != null ; p=p.next_) a[k++]=p.item;

if (a.length > k) a[k]=null;
return a;
} finally {
p$1.fullyUnlock.apply(this, []);
}
});

Clazz.newMeth(C$, 'toString',  function () {
p$1.fullyLock.apply(this, []);
try {
return C$.superclazz.prototype.toString.apply(this, []);
} finally {
p$1.fullyUnlock.apply(this, []);
}
});

Clazz.newMeth(C$, 'clear$',  function () {
p$1.fullyLock.apply(this, []);
try {
this.head.next_=null;
Clazz.assert(C$, this, function(){return this.head.item == null });
this.last=this.head;
if (this.count.getAndSet$I(0) == this.capacity) this.notFull.signalAll$();
} finally {
p$1.fullyUnlock.apply(this, []);
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection',  function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var first;
p$1.fullyLock.apply(this, []);
try {
first=this.head.next_;
this.head.next_=null;
Clazz.assert(C$, this, function(){return this.head.item == null });
this.last=this.head;
if (this.count.getAndSet$I(0) == this.capacity) this.notFull.signalAll$();
} finally {
p$1.fullyUnlock.apply(this, []);
}
var n=0;
for (var p=first; p != null ; p=p.next_) {
c.add$O(p.item);
p.item=null;
++n;
}
return n;
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I',  function (c, maxElements) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
p$1.fullyLock.apply(this, []);
try {
var n=0;
var p=this.head.next_;
while (p != null  && n < maxElements ){
c.add$O(p.item);
p.item=null;
p=p.next_;
++n;
}
if (n != 0) {
this.head.next_=p;
Clazz.assert(C$, this, function(){return this.head.item == null });
if (p == null ) this.last=this.head;
if (this.count.getAndAdd$I(-n) == this.capacity) this.notFull.signalAll$();
}return n;
} finally {
p$1.fullyUnlock.apply(this, []);
}
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(5,1),[this, null]);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
p$1.fullyLock.apply(this, []);
try {
s.defaultWriteObject$();
for (var p=this.head.next_; p != null ; p=p.next_) s.writeObject$O(p.item);

s.writeObject$O(null);
} finally {
p$1.fullyUnlock.apply(this, []);
}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
this.count.set$I(0);
this.last=this.head=Clazz.new_($I$(3,1).c$$O,[null]);
for (; ; ) {
var item=s.readObject$();
if (item == null ) break;
this.add$O(item);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedBlockingQueue, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['item','<E>','next_','java.util.concurrent.LinkedBlockingQueue.Node']]]

Clazz.newMeth(C$, 'c$$O',  function (x) {
;C$.$init$.apply(this);
this.item=x;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedBlockingQueue, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['current','java.util.concurrent.LinkedBlockingQueue.Node','+lastRet','currentElement','<E>']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var putLock=this.b$['java.util.concurrent.LinkedBlockingQueue'].putLock;
var takeLock=this.b$['java.util.concurrent.LinkedBlockingQueue'].takeLock;
putLock.lock$();
takeLock.lock$();
try {
this.current=this.b$['java.util.concurrent.LinkedBlockingQueue'].head.next_;
if (this.current != null ) this.currentElement=this.current.item;
} finally {
takeLock.unlock$();
putLock.unlock$();
}
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.current != null ;
});

Clazz.newMeth(C$, 'next$',  function () {
var putLock=this.b$['java.util.concurrent.LinkedBlockingQueue'].putLock;
var takeLock=this.b$['java.util.concurrent.LinkedBlockingQueue'].takeLock;
putLock.lock$();
takeLock.lock$();
try {
if (this.current == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var x=this.currentElement;
this.lastRet=this.current;
this.current=this.current.next_;
if (this.current != null ) this.currentElement=this.current.item;
return x;
} finally {
takeLock.unlock$();
putLock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
var putLock=this.b$['java.util.concurrent.LinkedBlockingQueue'].putLock;
var takeLock=this.b$['java.util.concurrent.LinkedBlockingQueue'].takeLock;
putLock.lock$();
takeLock.lock$();
try {
var node=this.lastRet;
this.lastRet=null;
var trail=this.b$['java.util.concurrent.LinkedBlockingQueue'].head;
var p=this.b$['java.util.concurrent.LinkedBlockingQueue'].head.next_;
while (p != null  && p !== node  ){
trail=p;
p=p.next_;
}
if (p === node ) {
p.item=null;
trail.next_=p.next_;
if (this.b$['java.util.concurrent.LinkedBlockingQueue'].last === p ) this.b$['java.util.concurrent.LinkedBlockingQueue'].last=trail;
var c=this.b$['java.util.concurrent.LinkedBlockingQueue'].count.getAndDecrement$();
if (c == this.b$['java.util.concurrent.LinkedBlockingQueue'].capacity) this.b$['java.util.concurrent.LinkedBlockingQueue'].notFull.signalAll$();
}} finally {
takeLock.unlock$();
putLock.unlock$();
}
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

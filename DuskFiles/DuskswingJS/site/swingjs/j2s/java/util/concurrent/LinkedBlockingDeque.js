(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.locks.ReentrantLock',['java.util.concurrent.LinkedBlockingDeque','.Node'],'java.lang.reflect.Array',['java.util.concurrent.LinkedBlockingDeque','.Itr'],['java.util.concurrent.LinkedBlockingDeque','.DescendingItr']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinkedBlockingDeque", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.concurrent.BlockingDeque', 'java.io.Serializable']);
C$.$classes$=[['Node',24],['AbstractItr',1026],['Itr',2],['DescendingItr',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(1,1));
this.notEmpty=this.lock.newCondition$();
this.notFull=this.lock.newCondition$();
},1);

C$.$fields$=[['I',['count','capacity'],'O',['first','java.util.concurrent.LinkedBlockingDeque.Node','+last','lock','java.util.concurrent.locks.ReentrantLock','notEmpty','java.util.concurrent.locks.Condition','+notFull']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [2147483647]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (capacity) {
Clazz.super_(C$, this);
if (capacity <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.capacity=capacity;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
C$.c$$I.apply(this, [2147483647]);
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.add$O(e);

}, 1);

Clazz.newMeth(C$, 'linkFirst$O',  function (e) {
if (this.count >= this.capacity) return false;
++this.count;
var f=this.first;
var x=Clazz.new_($I$(2,1).c$$O$java_util_concurrent_LinkedBlockingDeque_Node$java_util_concurrent_LinkedBlockingDeque_Node,[e, null, f]);
this.first=x;
if (this.last == null ) this.last=x;
 else f.prev=x;
this.notEmpty.signal$();
return true;
}, p$1);

Clazz.newMeth(C$, 'linkLast$O',  function (e) {
if (this.count >= this.capacity) return false;
++this.count;
var l=this.last;
var x=Clazz.new_($I$(2,1).c$$O$java_util_concurrent_LinkedBlockingDeque_Node$java_util_concurrent_LinkedBlockingDeque_Node,[e, l, null]);
this.last=x;
if (this.first == null ) this.first=x;
 else l.next_=x;
this.notEmpty.signal$();
return true;
}, p$1);

Clazz.newMeth(C$, 'unlinkFirst',  function () {
var f=this.first;
if (f == null ) return null;
var n=f.next_;
this.first=n;
if (n == null ) this.last=null;
 else n.prev=null;
--this.count;
this.notFull.signal$();
return f.item;
}, p$1);

Clazz.newMeth(C$, 'unlinkLast',  function () {
var l=this.last;
if (l == null ) return null;
var p=l.prev;
this.last=p;
if (p == null ) this.first=null;
 else p.next_=null;
--this.count;
this.notFull.signal$();
return l.item;
}, p$1);

Clazz.newMeth(C$, 'unlink$java_util_concurrent_LinkedBlockingDeque_Node',  function (x) {
var p=x.prev;
var n=x.next_;
if (p == null ) {
if (n == null ) this.first=this.last=null;
 else {
n.prev=null;
this.first=n;
}} else if (n == null ) {
p.next_=null;
this.last=p;
} else {
p.next_=n;
n.prev=p;
}--this.count;
this.notFull.signalAll$();
}, p$1);

Clazz.newMeth(C$, 'addFirst$O',  function (e) {
if (!this.offerFirst$O(e)) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Deque full"]);
});

Clazz.newMeth(C$, 'addLast$O',  function (e) {
if (!this.offerLast$O(e)) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Deque full"]);
});

Clazz.newMeth(C$, 'offerFirst$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.lock.lock$();
try {
return p$1.linkFirst$O.apply(this, [e]);
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'offerLast$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.lock.lock$();
try {
return p$1.linkLast$O.apply(this, [e]);
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'putFirst$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.lock.lock$();
try {
while (!p$1.linkFirst$O.apply(this, [e]))this.notFull.await$();

} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'putLast$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.lock.lock$();
try {
while (!p$1.linkLast$O.apply(this, [e]))this.notFull.await$();

} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'offerFirst$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var nanos=unit.toNanos$J(timeout);
this.lock.lockInterruptibly$();
try {
for (; ; ) {
if (p$1.linkFirst$O.apply(this, [e])) return true;
if (Long.$le(nanos,0 )) return false;
nanos=this.notFull.awaitNanos$J(nanos);
}
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'offerLast$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var nanos=unit.toNanos$J(timeout);
this.lock.lockInterruptibly$();
try {
for (; ; ) {
if (p$1.linkLast$O.apply(this, [e])) return true;
if (Long.$le(nanos,0 )) return false;
nanos=this.notFull.awaitNanos$J(nanos);
}
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'removeFirst$',  function () {
var x=this.pollFirst$();
if (x == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return x;
});

Clazz.newMeth(C$, 'removeLast$',  function () {
var x=this.pollLast$();
if (x == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return x;
});

Clazz.newMeth(C$, 'pollFirst$',  function () {
this.lock.lock$();
try {
return p$1.unlinkFirst.apply(this, []);
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'pollLast$',  function () {
this.lock.lock$();
try {
return p$1.unlinkLast.apply(this, []);
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'takeFirst$',  function () {
this.lock.lock$();
try {
var x;
while ((x=p$1.unlinkFirst.apply(this, [])) == null )this.notEmpty.await$();

return x;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'takeLast$',  function () {
this.lock.lock$();
try {
var x;
while ((x=p$1.unlinkLast.apply(this, [])) == null )this.notEmpty.await$();

return x;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'pollFirst$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
var nanos=unit.toNanos$J(timeout);
this.lock.lockInterruptibly$();
try {
for (; ; ) {
var x=p$1.unlinkFirst.apply(this, []);
if (x != null ) return x;
if (Long.$le(nanos,0 )) return null;
nanos=this.notEmpty.awaitNanos$J(nanos);
}
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'pollLast$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
var nanos=unit.toNanos$J(timeout);
this.lock.lockInterruptibly$();
try {
for (; ; ) {
var x=p$1.unlinkLast.apply(this, []);
if (x != null ) return x;
if (Long.$le(nanos,0 )) return null;
nanos=this.notEmpty.awaitNanos$J(nanos);
}
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'getFirst$',  function () {
var x=this.peekFirst$();
if (x == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return x;
});

Clazz.newMeth(C$, 'getLast$',  function () {
var x=this.peekLast$();
if (x == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return x;
});

Clazz.newMeth(C$, 'peekFirst$',  function () {
this.lock.lock$();
try {
return (this.first == null ) ? null : this.first.item;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'peekLast$',  function () {
this.lock.lock$();
try {
return (this.last == null ) ? null : this.last.item;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'removeFirstOccurrence$O',  function (o) {
if (o == null ) return false;
this.lock.lock$();
try {
for (var p=this.first; p != null ; p=p.next_) {
if (o.equals$O(p.item)) {
p$1.unlink$java_util_concurrent_LinkedBlockingDeque_Node.apply(this, [p]);
return true;
}}
return false;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'removeLastOccurrence$O',  function (o) {
if (o == null ) return false;
this.lock.lock$();
try {
for (var p=this.last; p != null ; p=p.prev) {
if (o.equals$O(p.item)) {
p$1.unlink$java_util_concurrent_LinkedBlockingDeque_Node.apply(this, [p]);
return true;
}}
return false;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'add$O',  function (e) {
this.addLast$O(e);
return true;
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
return this.offerLast$O(e);
});

Clazz.newMeth(C$, 'put$O',  function (e) {
this.putLast$O(e);
});

Clazz.newMeth(C$, 'offer$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
return this.offerLast$O$J$java_util_concurrent_TimeUnit(e, timeout, unit);
});

Clazz.newMeth(C$, 'remove$',  function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'poll$',  function () {
return this.pollFirst$();
});

Clazz.newMeth(C$, 'take$',  function () {
return this.takeFirst$();
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return this.pollFirst$J$java_util_concurrent_TimeUnit(timeout, unit);
});

Clazz.newMeth(C$, 'element$',  function () {
return this.getFirst$();
});

Clazz.newMeth(C$, 'peek$',  function () {
return this.peekFirst$();
});

Clazz.newMeth(C$, 'remainingCapacity$',  function () {
this.lock.lock$();
try {
return this.capacity - this.count;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection',  function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.lock.lock$();
try {
for (var p=this.first; p != null ; p=p.next_) c.add$O(p.item);

var n=this.count;
this.count=0;
this.first=this.last=null;
this.notFull.signalAll$();
return n;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I',  function (c, maxElements) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.lock.lock$();
try {
var n=0;
while (n < maxElements && this.first != null  ){
c.add$O(this.first.item);
this.first.prev=null;
this.first=this.first.next_;
--this.count;
++n;
}
if (this.first == null ) this.last=null;
this.notFull.signalAll$();
return n;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'push$O',  function (e) {
this.addFirst$O(e);
});

Clazz.newMeth(C$, 'pop$',  function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
return this.removeFirstOccurrence$O(o);
});

Clazz.newMeth(C$, 'size$',  function () {
this.lock.lock$();
try {
return this.count;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (o == null ) return false;
this.lock.lock$();
try {
for (var p=this.first; p != null ; p=p.next_) if (o.equals$O(p.item)) return true;

return false;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'removeNode$java_util_concurrent_LinkedBlockingDeque_Node',  function (e) {
this.lock.lock$();
try {
for (var p=this.first; p != null ; p=p.next_) {
if (p === e ) {
p$1.unlink$java_util_concurrent_LinkedBlockingDeque_Node.apply(this, [p]);
return true;
}}
return false;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'toArray$',  function () {
this.lock.lock$();
try {
var a=Clazz.array(java.lang.Object, [this.count]);
var k=0;
for (var p=this.first; p != null ; p=p.next_) a[k++]=p.item;

return a;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
this.lock.lock$();
try {
if (a.length < this.count) a=Clazz.array(a.getClass$().getComponentType$(), this.count);
var k=0;
for (var p=this.first; p != null ; p=p.next_) a[k++]=p.item;

if (a.length > k) a[k]=null;
return a;
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'toString',  function () {
this.lock.lock$();
try {
return C$.superclazz.prototype.toString.apply(this, []);
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'clear$',  function () {
this.lock.lock$();
try {
this.first=this.last=null;
this.count=0;
this.notFull.signalAll$();
} finally {
this.lock.unlock$();
}
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'descendingIterator$',  function () {
return Clazz.new_($I$(5,1),[this, null]);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
this.lock.lock$();
try {
s.defaultWriteObject$();
for (var p=this.first; p != null ; p=p.next_) s.writeObject$O(p.item);

s.writeObject$O(null);
} finally {
this.lock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
this.count=0;
this.first=null;
this.last=null;
for (; ; ) {
var item=s.readObject$();
if (item == null ) break;
this.add$O(item);
}
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedBlockingDeque, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['item','<E>','prev','java.util.concurrent.LinkedBlockingDeque.Node','+next_']]]

Clazz.newMeth(C$, 'c$$O$java_util_concurrent_LinkedBlockingDeque_Node$java_util_concurrent_LinkedBlockingDeque_Node',  function (x, p, n) {
;C$.$init$.apply(this);
this.item=x;
this.prev=p;
this.next_=n;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedBlockingDeque, "AbstractItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['next','java.util.concurrent.LinkedBlockingDeque.Node','nextItem','<E>','lastRet','java.util.concurrent.LinkedBlockingDeque.Node']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.advance$();
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.next != null ;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.next == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastRet=this.next;
var x=this.nextItem;
this.advance$();
return x;
});

Clazz.newMeth(C$, 'remove$',  function () {
var n=this.lastRet;
if (n == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.lastRet=null;
this.b$['java.util.concurrent.LinkedBlockingDeque'].removeNode$java_util_concurrent_LinkedBlockingDeque_Node.apply(this.b$['java.util.concurrent.LinkedBlockingDeque'], [n]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedBlockingDeque, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.LinkedBlockingDeque','.AbstractItr']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'advance$',  function () {
var lock=this.b$['java.util.concurrent.LinkedBlockingDeque'].lock;
lock.lock$();
try {
this.next=(this.next == null ) ? this.b$['java.util.concurrent.LinkedBlockingDeque'].first : this.next.next_;
this.nextItem=(this.next == null ) ? null : this.next.item;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedBlockingDeque, "DescendingItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.LinkedBlockingDeque','.AbstractItr']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'advance$',  function () {
var lock=this.b$['java.util.concurrent.LinkedBlockingDeque'].lock;
lock.lock$();
try {
this.next=(this.next == null ) ? this.b$['java.util.concurrent.LinkedBlockingDeque'].last : this.next.prev;
this.nextItem=(this.next == null ) ? null : this.next.item;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.locks.ReentrantLock','java.lang.reflect.Array',['java.util.concurrent.ArrayBlockingQueue','.Itr']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayBlockingQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.concurrent.BlockingQueue', 'java.io.Serializable']);
C$.$classes$=[['Itr',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['takeIndex','putIndex','count'],'O',['items','_.E[]','lock','java.util.concurrent.locks.ReentrantLock','notEmpty','java.util.concurrent.locks.Condition','+notFull']]]

Clazz.newMeth(C$, 'inc$I',  function (i) {
return (++i == this.items.length) ? 0 : i;
});

Clazz.newMeth(C$, 'insert$O',  function (x) {
this.items[this.putIndex]=x;
this.putIndex=this.inc$I(this.putIndex);
++this.count;
this.notEmpty.signal$();
}, p$1);

Clazz.newMeth(C$, 'extract',  function () {
var items=this.items;
var x=items[this.takeIndex];
items[this.takeIndex]=null;
this.takeIndex=this.inc$I(this.takeIndex);
--this.count;
this.notFull.signal$();
return x;
}, p$1);

Clazz.newMeth(C$, 'removeAt$I',  function (i) {
var items=this.items;
if (i == this.takeIndex) {
items[this.takeIndex]=null;
this.takeIndex=this.inc$I(this.takeIndex);
} else {
for (; ; ) {
var nexti=this.inc$I(i);
if (nexti != this.putIndex) {
items[i]=items[nexti];
i=nexti;
} else {
items[i]=null;
this.putIndex=i;
break;
}}
}--this.count;
this.notFull.signal$();
});

Clazz.newMeth(C$, 'c$$I',  function (capacity) {
C$.c$$I$Z.apply(this, [capacity, false]);
}, 1);

Clazz.newMeth(C$, 'c$$I$Z',  function (capacity, fair) {
Clazz.super_(C$, this);
if (capacity <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.items=Clazz.array(java.lang.Object, [capacity]);
this.lock=Clazz.new_($I$(1,1).c$$Z,[fair]);
this.notEmpty=this.lock.newCondition$();
this.notFull=this.lock.newCondition$();
}, 1);

Clazz.newMeth(C$, 'c$$I$Z$java_util_Collection',  function (capacity, fair, c) {
C$.c$$I$Z.apply(this, [capacity, fair]);
if (capacity < c.size$()) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
for (var it=c.iterator$(); it.hasNext$(); ) this.add$O(it.next$());

}, 1);

Clazz.newMeth(C$, 'add$O',  function (e) {
return C$.superclazz.prototype.add$O.apply(this, [e]);
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var lock=this.lock;
lock.lock$();
try {
if (this.count == this.items.length) return false;
 else {
p$1.insert$O.apply(this, [e]);
return true;
}} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'put$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var items=this.items;
var lock=this.lock;
lock.lockInterruptibly$();
try {
try {
while (this.count == items.length)this.notFull.await$();

} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notFull.signal$();
throw ie;
} else {
throw ie;
}
}
p$1.insert$O.apply(this, [e]);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'offer$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var nanos=unit.toNanos$J(timeout);
var lock=this.lock;
lock.lockInterruptibly$();
try {
for (; ; ) {
if (this.count != this.items.length) {
p$1.insert$O.apply(this, [e]);
return true;
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
lock.unlock$();
}
});

Clazz.newMeth(C$, 'poll$',  function () {
var lock=this.lock;
lock.lock$();
try {
if (this.count == 0) return null;
var x=p$1.extract.apply(this, []);
return x;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'take$',  function () {
var lock=this.lock;
lock.lockInterruptibly$();
try {
try {
while (this.count == 0)this.notEmpty.await$();

} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notEmpty.signal$();
throw ie;
} else {
throw ie;
}
}
var x=p$1.extract.apply(this, []);
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
if (this.count != 0) {
var x=p$1.extract.apply(this, []);
return x;
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
lock.unlock$();
}
});

Clazz.newMeth(C$, 'peek$',  function () {
var lock=this.lock;
lock.lock$();
try {
return (this.count == 0) ? null : this.items[this.takeIndex];
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'size$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.count;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remainingCapacity$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.items.length - this.count;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (o == null ) return false;
var items=this.items;
var lock=this.lock;
lock.lock$();
try {
var i=this.takeIndex;
var k=0;
for (; ; ) {
if (k++ >= this.count) return false;
if (o.equals$O(items[i])) {
this.removeAt$I(i);
return true;
}i=this.inc$I(i);
}
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (o == null ) return false;
var items=this.items;
var lock=this.lock;
lock.lock$();
try {
var i=this.takeIndex;
var k=0;
while (k++ < this.count){
if (o.equals$O(items[i])) return true;
i=this.inc$I(i);
}
return false;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'toArray$',  function () {
var items=this.items;
var lock=this.lock;
lock.lock$();
try {
var a=Clazz.array(java.lang.Object, [this.count]);
var k=0;
var i=this.takeIndex;
while (k < this.count){
a[k++]=items[i];
i=this.inc$I(i);
}
return a;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var items=this.items;
var lock=this.lock;
lock.lock$();
try {
if (a.length < this.count) a=Clazz.array(a.getClass$().getComponentType$(), this.count);
var k=0;
var i=this.takeIndex;
while (k < this.count){
a[k++]=items[i];
i=this.inc$I(i);
}
if (a.length > this.count) a[this.count]=null;
return a;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'toString',  function () {
var lock=this.lock;
lock.lock$();
try {
return C$.superclazz.prototype.toString.apply(this, []);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'clear$',  function () {
var items=this.items;
var lock=this.lock;
lock.lock$();
try {
var i=this.takeIndex;
var k=this.count;
while (k-- > 0){
items[i]=null;
i=this.inc$I(i);
}
this.count=0;
this.putIndex=0;
this.takeIndex=0;
this.notFull.signalAll$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection',  function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var items=this.items;
var lock=this.lock;
lock.lock$();
try {
var i=this.takeIndex;
var n=0;
var max=this.count;
while (n < max){
c.add$O(items[i]);
items[i]=null;
i=this.inc$I(i);
++n;
}
if (n > 0) {
this.count=0;
this.putIndex=0;
this.takeIndex=0;
this.notFull.signalAll$();
}return n;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I',  function (c, maxElements) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (maxElements <= 0) return 0;
var items=this.items;
var lock=this.lock;
lock.lock$();
try {
var i=this.takeIndex;
var n=0;
var sz=this.count;
var max=(maxElements < this.count) ? maxElements : this.count;
while (n < max){
c.add$O(items[i]);
items[i]=null;
i=this.inc$I(i);
++n;
}
if (n > 0) {
this.count-=n;
this.takeIndex=i;
this.notFull.signalAll$();
}return n;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'iterator$',  function () {
var lock=this.lock;
lock.lock$();
try {
return Clazz.new_($I$(3,1),[this, null]);
} finally {
lock.unlock$();
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayBlockingQueue, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nextIndex','lastRet'],'O',['nextItem','<E>']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.lastRet=-1;
if (this.b$['java.util.concurrent.ArrayBlockingQueue'].count == 0) this.nextIndex=-1;
 else {
this.nextIndex=this.b$['java.util.concurrent.ArrayBlockingQueue'].takeIndex;
this.nextItem=this.b$['java.util.concurrent.ArrayBlockingQueue'].items[this.b$['java.util.concurrent.ArrayBlockingQueue'].takeIndex];
}}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.nextIndex >= 0;
});

Clazz.newMeth(C$, 'checkNext',  function () {
if (this.nextIndex == this.b$['java.util.concurrent.ArrayBlockingQueue'].putIndex) {
this.nextIndex=-1;
this.nextItem=null;
} else {
this.nextItem=this.b$['java.util.concurrent.ArrayBlockingQueue'].items[this.nextIndex];
if (this.nextItem == null ) this.nextIndex=-1;
}}, p$1);

Clazz.newMeth(C$, 'next$',  function () {
var lock=this.b$['java.util.concurrent.ArrayBlockingQueue'].lock;
lock.lock$();
try {
if (this.nextIndex < 0) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastRet=this.nextIndex;
var x=this.nextItem;
this.nextIndex=this.b$['java.util.concurrent.ArrayBlockingQueue'].inc$I.apply(this.b$['java.util.concurrent.ArrayBlockingQueue'], [this.nextIndex]);
p$1.checkNext.apply(this, []);
return x;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$',  function () {
var lock=this.b$['java.util.concurrent.ArrayBlockingQueue'].lock;
lock.lock$();
try {
var i=this.lastRet;
if (i == -1) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.lastRet=-1;
var ti=this.b$['java.util.concurrent.ArrayBlockingQueue'].takeIndex;
this.b$['java.util.concurrent.ArrayBlockingQueue'].removeAt$I.apply(this.b$['java.util.concurrent.ArrayBlockingQueue'], [i]);
this.nextIndex=(i == ti) ? this.b$['java.util.concurrent.ArrayBlockingQueue'].takeIndex : i;
p$1.checkNext.apply(this, []);
} finally {
lock.unlock$();
}
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'sun.misc.Unsafe','Error','java.util.concurrent.locks.LockSupport','java.util.concurrent.LinkedTransferQueue','java.util.Spliterators','Runtime',['java.util.concurrent.LinkedTransferQueue','.Node'],'Thread','java.util.concurrent.ThreadLocalRandom',['java.util.concurrent.LinkedTransferQueue','.LTQSpliterator'],['java.util.concurrent.LinkedTransferQueue','.Itr']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinkedTransferQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.concurrent.TransferQueue', 'java.io.Serializable']);
C$.$classes$=[['Node',24],['Itr',16],['LTQSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['sweepVotes'],'O',['head','java.util.concurrent.LinkedTransferQueue.Node','+tail']]
,['Z',['MP'],'J',['headOffset','tailOffset','sweepVotesOffset'],'O',['UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'casTail$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.tailOffset, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'casHead$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.headOffset, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'casSweepVotes$I$I',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapInt$O$J$I$I(this, C$.sweepVotesOffset, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'cast$O',  function (item) {
return item;
}, 1);

Clazz.newMeth(C$, 'xfer$O$Z$I$J',  function (e, haveData, how, nanos) {
if (haveData && (e == null ) ) throw Clazz.new_(Clazz.load('NullPointerException'));
var s=null;
 retry : for (; ; ) {
for (var h=this.head, p=h; p != null ; ) {
var isData=p.isData;
var item=p.item;
if (item !== p  && (item != null ) == isData  ) {
if (isData == haveData ) break;
if (p.casItem$O$O(item, e)) {
for (var q=p; q !== h ; ) {
var n=q.next_;
if (this.head === h  && p$1.casHead$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node.apply(this, [h, n == null  ? q : n]) ) {
h.forgetNext$();
break;
}if ((h=this.head) == null  || (q=h.next_) == null   || !q.isMatched$() ) break;
}
$I$(3).unpark$Thread(p.waiter);
return C$.cast$O(item);
}}var n=p.next_;
p=(p !== n ) ? n : (h=this.head);
}
if (how != 0) {
if (s == null ) s=Clazz.new_($I$(7,1).c$$O$Z,[e, haveData]);
var pred=p$1.tryAppend$java_util_concurrent_LinkedTransferQueue_Node$Z.apply(this, [s, haveData]);
if (pred == null ) continue retry;
if (how != 1) return p$1.awaitMatch$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node$O$Z$J.apply(this, [s, pred, e, (how == 3), nanos]);
}return e;
}
}, p$1);

Clazz.newMeth(C$, 'tryAppend$java_util_concurrent_LinkedTransferQueue_Node$Z',  function (s, haveData) {
for (var t=this.tail, p=t; ; ) {
var n;
var u;
if (p == null  && (p=this.head) == null  ) {
if (p$1.casHead$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node.apply(this, [null, s])) return s;
} else if (p.cannotPrecede$Z(haveData)) return null;
 else if ((n=p.next_) != null ) p=p !== t  && t !== (u=this.tail)   ? (t=u) : (p !== n ) ? n : null;
 else if (!p.casNext$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node(null, s)) p=p.next_;
 else {
if (p !== t ) {
while ((this.tail !== t  || !p$1.casTail$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node.apply(this, [t, s]) ) && (t=this.tail) != null   && (s=t.next_) != null   && (s=s.next_) != null   && s !== t  );
}return p;
}}
}, p$1);

Clazz.newMeth(C$, 'awaitMatch$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node$O$Z$J',  function (s, pred, e, timed, nanos) {
var deadline=timed ? Long.$add(System.nanoTime$(),nanos) : 0;
var w=$I$(8).currentThread$();
var spins=-1;
var randomYields=null;
for (; ; ) {
var item=s.item;
if (item !== e ) {
s.forgetContents$();
return C$.cast$O(item);
}if ((w.isInterrupted$() || (timed && Long.$le(nanos,0 ) ) ) && s.casItem$O$O(e, s) ) {
this.unsplice$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node(pred, s);
return e;
}if (spins < 0) {
if ((spins=C$.spinsFor$java_util_concurrent_LinkedTransferQueue_Node$Z(pred, s.isData)) > 0) randomYields=$I$(9).current$();
} else if (spins > 0) {
--spins;
if (randomYields.nextInt$I(64) == 0) $I$(8).yield$();
} else if (s.waiter == null ) {
s.waiter=w;
} else if (timed) {
nanos=Long.$sub(deadline,System.nanoTime$());
if (Long.$gt(nanos,0 )) $I$(3).parkNanos$O$J(this, nanos);
} else {
$I$(3).park$O(this);
}}
}, p$1);

Clazz.newMeth(C$, 'spinsFor$java_util_concurrent_LinkedTransferQueue_Node$Z',  function (pred, haveData) {
if (C$.MP && pred != null  ) {
if (pred.isData != haveData ) return 192;
if (pred.isMatched$()) return 128;
if (pred.waiter == null ) return 64;
}return 0;
}, 1);

Clazz.newMeth(C$, 'succ$java_util_concurrent_LinkedTransferQueue_Node',  function (p) {
var next=p.next_;
return (p === next ) ? this.head : next;
});

Clazz.newMeth(C$, 'firstOfMode$Z',  function (isData) {
for (var p=this.head; p != null ; p=this.succ$java_util_concurrent_LinkedTransferQueue_Node(p)) {
if (!p.isMatched$()) return (p.isData == isData ) ? p : null;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'firstDataNode$',  function () {
for (var p=this.head; p != null ; ) {
var item=p.item;
if (p.isData) {
if (item != null  && item !== p  ) return p;
} else if (item == null ) break;
if (p === (p=p.next_) ) p=this.head;
}
return null;
});

Clazz.newMeth(C$, 'firstDataItem',  function () {
for (var p=this.head; p != null ; p=this.succ$java_util_concurrent_LinkedTransferQueue_Node(p)) {
var item=p.item;
if (p.isData) {
if (item != null  && item !== p  ) return C$.cast$O(item);
} else if (item == null ) return null;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'countOfMode$Z',  function (data) {
var count=0;
for (var p=this.head; p != null ; ) {
if (!p.isMatched$()) {
if (p.isData != data ) return 0;
if (++count == 2147483647) break;
}var n=p.next_;
if (n !== p ) p=n;
 else {
count=0;
p=this.head;
}}
return count;
}, p$1);

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(10,1).c$$java_util_concurrent_LinkedTransferQueue,[this]);
});

Clazz.newMeth(C$, 'unsplice$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node',  function (pred, s) {
s.forgetContents$();
if (pred != null  && pred !== s   && pred.next_ === s  ) {
var n=s.next_;
if (n == null  || (n !== s  && pred.casNext$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node(s, n)  && pred.isMatched$() ) ) {
for (; ; ) {
var h=this.head;
if (h === pred  || h === s   || h == null  ) return;
if (!h.isMatched$()) break;
var hn=h.next_;
if (hn == null ) return;
if (hn !== h  && p$1.casHead$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node.apply(this, [h, hn]) ) h.forgetNext$();
}
if (pred.next_ !== pred  && s.next_ !== s  ) {
for (; ; ) {
var v=this.sweepVotes;
if (v < 32) {
if (p$1.casSweepVotes$I$I.apply(this, [v, v + 1])) break;
} else if (p$1.casSweepVotes$I$I.apply(this, [v, 0])) {
p$1.sweep.apply(this, []);
break;
}}
}}}});

Clazz.newMeth(C$, 'sweep',  function () {
for (var p=this.head, s, n; p != null  && (s=p.next_) != null  ; ) {
if (!s.isMatched$()) p=s;
 else if ((n=s.next_) == null ) break;
 else if (s === n ) p=this.head;
 else p.casNext$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node(s, n);
}
}, p$1);

Clazz.newMeth(C$, 'findAndRemove$O',  function (e) {
if (e != null ) {
for (var pred=null, p=this.head; p != null ; ) {
var item=p.item;
if (p.isData) {
if (item != null  && item !== p   && e.equals$O(item)  && p.tryMatchData$() ) {
this.unsplice$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node(pred, p);
return true;
}} else if (item == null ) break;
pred=p;
if ((p=p.next_) === pred ) {
pred=null;
p=this.head;
}}
}return false;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
C$.c$.apply(this, []);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'put$O',  function (e) {
p$1.xfer$O$Z$I$J.apply(this, [e, true, 1, 0]);
});

Clazz.newMeth(C$, 'offer$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
p$1.xfer$O$Z$I$J.apply(this, [e, true, 1, 0]);
return true;
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
p$1.xfer$O$Z$I$J.apply(this, [e, true, 1, 0]);
return true;
});

Clazz.newMeth(C$, 'add$O',  function (e) {
p$1.xfer$O$Z$I$J.apply(this, [e, true, 1, 0]);
return true;
});

Clazz.newMeth(C$, 'tryTransfer$O',  function (e) {
return p$1.xfer$O$Z$I$J.apply(this, [e, true, 0, 0]) == null ;
});

Clazz.newMeth(C$, 'transfer$O',  function (e) {
if (p$1.xfer$O$Z$I$J.apply(this, [e, true, 2, 0]) != null ) {
$I$(8).interrupted$();
throw Clazz.new_(Clazz.load('InterruptedException'));
}});

Clazz.newMeth(C$, 'tryTransfer$O$J$java_util_concurrent_TimeUnit',  function (e, timeout, unit) {
if (p$1.xfer$O$Z$I$J.apply(this, [e, true, 3, unit.toNanos$J(timeout)]) == null ) return true;
if (!$I$(8).interrupted$()) return false;
throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, 'take$',  function () {
var e=p$1.xfer$O$Z$I$J.apply(this, [null, false, 2, 0]);
if (e != null ) return e;
$I$(8).interrupted$();
throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
var e=p$1.xfer$O$Z$I$J.apply(this, [null, false, 3, unit.toNanos$J(timeout)]);
if (e != null  || !$I$(8).interrupted$() ) return e;
throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, 'poll$',  function () {
return p$1.xfer$O$Z$I$J.apply(this, [null, false, 0, 0]);
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection',  function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var n=0;
for (var e; (e=this.poll$()) != null ; ) {
c.add$O(e);
++n;
}
return n;
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I',  function (c, maxElements) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var n=0;
for (var e; n < maxElements && (e=this.poll$()) != null  ; ) {
c.add$O(e);
++n;
}
return n;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(11,1),[this, null]);
});

Clazz.newMeth(C$, 'peek$',  function () {
return p$1.firstDataItem.apply(this, []);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
for (var p=this.head; p != null ; p=this.succ$java_util_concurrent_LinkedTransferQueue_Node(p)) {
if (!p.isMatched$()) return !p.isData;
}
return true;
});

Clazz.newMeth(C$, 'hasWaitingConsumer$',  function () {
return p$1.firstOfMode$Z.apply(this, [false]) != null ;
});

Clazz.newMeth(C$, 'size$',  function () {
return p$1.countOfMode$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'getWaitingConsumerCount$',  function () {
return p$1.countOfMode$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
return p$1.findAndRemove$O.apply(this, [o]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (o == null ) return false;
for (var p=this.head; p != null ; p=this.succ$java_util_concurrent_LinkedTransferQueue_Node(p)) {
var item=p.item;
if (p.isData) {
if (item != null  && item !== p   && o.equals$O(item) ) return true;
} else if (item == null ) break;
}
return false;
});

Clazz.newMeth(C$, 'remainingCapacity$',  function () {
return 2147483647;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
for (var e, $e = this.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) s.writeObject$O(e);

s.writeObject$O(null);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
for (; ; ) {
var item=s.readObject$();
if (item == null ) break;
 else this.offer$O(item);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.MP=$I$(6).getRuntime$().availableProcessors$() > 1;
{
try {
C$.UNSAFE=$I$(1).getUnsafe$();
var k=Clazz.getClass(C$);
C$.headOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("head"));
C$.tailOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("tail"));
C$.sweepVotesOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("sweepVotes"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedTransferQueue, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isData'],'O',['item','java.lang.Object','next_','java.util.concurrent.LinkedTransferQueue.Node','waiter','Thread']]
,['J',['itemOffset','nextOffset','waiterOffset'],'O',['UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'casNext$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.nextOffset, cmp, val);
});

Clazz.newMeth(C$, 'casItem$O$O',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.itemOffset, cmp, val);
});

Clazz.newMeth(C$, 'c$$O$Z',  function (item, isData) {
;C$.$init$.apply(this);
C$.UNSAFE.putObject$O$J$O(this, C$.itemOffset, item);
this.isData=isData;
}, 1);

Clazz.newMeth(C$, 'forgetNext$',  function () {
C$.UNSAFE.putObject$O$J$O(this, C$.nextOffset, this);
});

Clazz.newMeth(C$, 'forgetContents$',  function () {
C$.UNSAFE.putObject$O$J$O(this, C$.itemOffset, this);
C$.UNSAFE.putObject$O$J$O(this, C$.waiterOffset, null);
});

Clazz.newMeth(C$, 'isMatched$',  function () {
var x=this.item;
return (x === this ) || ((x == null ) == this.isData ) ;
});

Clazz.newMeth(C$, 'isUnmatchedRequest$',  function () {
return !this.isData && this.item == null  ;
});

Clazz.newMeth(C$, 'cannotPrecede$Z',  function (haveData) {
var d=this.isData;
var x;
return d != haveData  && (x=this.item) !== this   && (x != null ) == d  ;
});

Clazz.newMeth(C$, 'tryMatchData$',  function () {
var x=this.item;
if (x != null  && x !== this   && this.casItem$O$O(x, null) ) {
$I$(3).unpark$Thread(this.waiter);
return true;
}return false;
});

C$.$static$=function(){C$.$static$=0;
{
try {
C$.UNSAFE=$I$(1).getUnsafe$();
var k=Clazz.getClass(C$);
C$.itemOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("item"));
C$.nextOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("next"));
C$.waiterOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("waiter"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedTransferQueue, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nextNode','java.util.concurrent.LinkedTransferQueue.Node','nextItem','<E>','lastRet','java.util.concurrent.LinkedTransferQueue.Node','+lastPred']]]

Clazz.newMeth(C$, 'advance$java_util_concurrent_LinkedTransferQueue_Node',  function (prev) {
var r;
var b;
if ((r=this.lastRet) != null  && !r.isMatched$() ) this.lastPred=r;
 else if ((b=this.lastPred) == null  || b.isMatched$() ) this.lastPred=null;
 else {
var s;
var n;
while ((s=b.next_) != null  && s !== b   && s.isMatched$()  && (n=s.next_) != null   && n !== s  )b.casNext$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node(s, n);

}this.lastRet=prev;
for (var p=prev, s, n; ; ) {
s=(p == null ) ? this.b$['java.util.concurrent.LinkedTransferQueue'].head : p.next_;
if (s == null ) break;
 else if (s === p ) {
p=null;
continue;
}var item=s.item;
if (s.isData) {
if (item != null  && item !== s  ) {
this.nextItem=$I$(4).cast$O(item);
this.nextNode=s;
return;
}} else if (item == null ) break;
if (p == null ) p=s;
 else if ((n=s.next_) == null ) break;
 else if (s === n ) p=null;
 else p.casNext$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node(s, n);
}
this.nextNode=null;
this.nextItem=null;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.advance$java_util_concurrent_LinkedTransferQueue_Node.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.nextNode != null ;
});

Clazz.newMeth(C$, 'next$',  function () {
var p=this.nextNode;
if (p == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var e=this.nextItem;
p$1.advance$java_util_concurrent_LinkedTransferQueue_Node.apply(this, [p]);
return e;
});

Clazz.newMeth(C$, 'remove$',  function () {
var lastRet=this.lastRet;
if (lastRet == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.lastRet=null;
if (lastRet.tryMatchData$()) this.b$['java.util.concurrent.LinkedTransferQueue'].unsplice$java_util_concurrent_LinkedTransferQueue_Node$java_util_concurrent_LinkedTransferQueue_Node.apply(this.b$['java.util.concurrent.LinkedTransferQueue'], [this.lastPred, lastRet]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedTransferQueue, "LTQSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['exhausted'],'I',['batch'],'O',['queue','java.util.concurrent.LinkedTransferQueue','current','java.util.concurrent.LinkedTransferQueue.Node']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_LinkedTransferQueue',  function (queue) {
;C$.$init$.apply(this);
this.queue=queue;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var p;
var q=this.queue;
var b=this.batch;
var n=(b <= 0) ? 1 : (b >= 33554432) ? 33554432 : b + 1;
if (!this.exhausted && ((p=this.current) != null  || (p=q.firstDataNode$()) != null  ) && p.next_ != null   ) {
var a=Clazz.array(java.lang.Object, [n]);
var i=0;
do {
if ((a[i]=p.item) != null ) ++i;
if (p === (p=p.next_) ) p=q.firstDataNode$();
} while (p != null  && i < n );
if ((this.current=p) == null ) this.exhausted=true;
if (i > 0) {
this.batch=i;
return $I$(5).spliterator$OA$I$I$I(a, 0, i, 4368);
}}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
var p;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var q=this.queue;
if (!this.exhausted && ((p=this.current) != null  || (p=q.firstDataNode$()) != null  ) ) {
this.exhausted=true;
do {
var e=p.item;
if (p === (p=p.next_) ) p=q.firstDataNode$();
if (e != null ) action.accept$O(e);
} while (p != null );
}});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var p;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var q=this.queue;
if (!this.exhausted && ((p=this.current) != null  || (p=q.firstDataNode$()) != null  ) ) {
var e;
do {
e=p.item;
if (p === (p=p.next_) ) p=q.firstDataNode$();
} while (e == null  && p != null  );
if ((this.current=p) == null ) this.exhausted=true;
if (e != null ) {
action.accept$O(e);
return true;
}}return false;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return [16777215,549755813887,1];
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 4368;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

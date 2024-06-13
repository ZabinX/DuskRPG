(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),p$1={},p$2={},I$=[[0,['java.util.concurrent.locks.AbstractQueuedSynchronizer','.Node'],'Thread','java.util.concurrent.locks.LockSupport','java.util.concurrent.locks.AbstractQueuedSynchronizer','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractQueuedSynchronizer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.locks.AbstractOwnableSynchronizer', 'java.io.Serializable');
C$.$classes$=[['Node',24],['ConditionObject',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['state'],'O',['head','java.util.concurrent.locks.AbstractQueuedSynchronizer.Node','+tail']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'setState$I',  function (newState) {
this.state=newState;
});

Clazz.newMeth(C$, 'compareAndSetState$I$I',  function (expect, update) {
if (this.state != expect) return false;
this.state=update;
return true;
});

Clazz.newMeth(C$, 'enq$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
for (; ; ) {
var t=this.tail;
if (t == null ) {
if (p$2.compareAndSetHead$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [Clazz.new_($I$(1,1))])) this.tail=this.head;
} else {
node.prev=t;
if (p$2.compareAndSetTail$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [t, node])) {
t.next=node;
return t;
}}}
}, p$2);

Clazz.newMeth(C$, 'addWaiter$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (mode) {
var node=Clazz.new_([$I$(2).currentThread$(), mode],$I$(1,1).c$$Thread$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node);
var pred=this.tail;
if (pred != null ) {
node.prev=pred;
if (p$2.compareAndSetTail$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [pred, node])) {
pred.next=node;
return node;
}}p$2.enq$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
return node;
}, p$2);

Clazz.newMeth(C$, 'setHead$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
this.head=node;
node.thread=null;
node.prev=null;
}, p$2);

Clazz.newMeth(C$, 'unparkSuccessor$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
var ws=node.waitStatus;
if (ws < 0) C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(node, ws, 0);
var s=node.next;
if (s == null  || s.waitStatus > 0 ) {
s=null;
for (var t=this.tail; t != null  && t !== node  ; t=t.prev) if (t.waitStatus <= 0) s=t;

}if (s != null ) $I$(3).unpark$Thread(s.thread);
}, p$2);

Clazz.newMeth(C$, 'doReleaseShared',  function () {
for (; ; ) {
var h=this.head;
if (h != null  && h !== this.tail  ) {
var ws=h.waitStatus;
if (ws == -1) {
if (!C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(h, -1, 0)) continue;
p$2.unparkSuccessor$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [h]);
} else if (ws == 0 && !C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(h, 0, -3) ) continue;
}if (h === this.head ) break;
}
}, p$2);

Clazz.newMeth(C$, 'setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I',  function (node, propagate) {
var h=this.head;
p$2.setHead$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
if (propagate > 0 || h == null   || h.waitStatus < 0 ) {
var s=node.next;
if (s == null  || s.isShared$() ) p$2.doReleaseShared.apply(this, []);
}}, p$2);

Clazz.newMeth(C$, 'cancelAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
if (node == null ) return;
node.thread=null;
var pred=node.prev;
while (pred.waitStatus > 0)node.prev=pred=pred.prev;

var predNext=pred.next;
node.waitStatus=1;
if (node === this.tail  && p$2.compareAndSetTail$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node, pred]) ) {
C$.compareAndSetNext$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(pred, predNext, null);
} else {
var ws;
if (pred !== this.head  && ((ws=pred.waitStatus) == -1 || (ws <= 0 && C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(pred, ws, -1) ) )  && pred.thread != null  ) {
var next=node.next;
if (next != null  && next.waitStatus <= 0 ) C$.compareAndSetNext$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(pred, predNext, next);
} else {
p$2.unparkSuccessor$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
}node.next=node;
}}, p$2);

Clazz.newMeth(C$, 'shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (pred, node) {
var ws=pred.waitStatus;
if (ws == -1) return true;
if (ws > 0) {
do {
node.prev=pred=pred.prev;
} while (pred.waitStatus > 0);
pred.next=node;
} else {
C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(pred, ws, -1);
}return false;
}, 1);

Clazz.newMeth(C$, 'selfInterrupt$',  function () {
$I$(2).currentThread$().interrupt$();
}, 1);

Clazz.newMeth(C$, 'parkAndCheckInterrupt',  function () {
$I$(3).park$O(this);
return $I$(2).interrupted$();
}, p$2);

Clazz.newMeth(C$, 'acquireQueued$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I',  function (node, arg) {
var failed=true;
try {
var interrupted=false;
for (; ; ) {
var p=node.predecessor$();
if (p === this.head  && this.tryAcquire$I(arg) ) {
p$2.setHead$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
p.next=null;
failed=false;
return interrupted;
}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) interrupted=true;
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
}
});

Clazz.newMeth(C$, 'doAcquireInterruptibly$I',  function (arg) {
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [$I$(1).EXCLUSIVE]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head  && this.tryAcquire$I(arg) ) {
p$2.setHead$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
p.next=null;
failed=false;
return;
}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireNanos$I$J',  function (arg, nanosTimeout) {
var lastTime=System.nanoTime$();
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [$I$(1).EXCLUSIVE]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head  && this.tryAcquire$I(arg) ) {
p$2.setHead$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
p.next=null;
failed=false;
return true;
}if (Long.$le(nanosTimeout,0 )) return false;
if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(p, node) && Long.$gt(nanosTimeout,1000 ) ) $I$(3).parkNanos$O$J(this, nanosTimeout);
var now=System.nanoTime$();
(nanosTimeout=Long.$sub(nanosTimeout,(Long.$sub(now,lastTime))));
lastTime=now;
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireShared$I',  function (arg) {
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [$I$(1).SHARED]);
var failed=true;
try {
var interrupted=false;
for (; ; ) {
var p=node.predecessor$();
if (p === this.head ) {
var r=this.tryAcquireShared$I(arg);
if (r >= 0) {
p$2.setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this, [node, r]);
p.next=null;
if (interrupted) C$.selfInterrupt$();
failed=false;
return;
}}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) interrupted=true;
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireSharedInterruptibly$I',  function (arg) {
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [$I$(1).SHARED]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head ) {
var r=this.tryAcquireShared$I(arg);
if (r >= 0) {
p$2.setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this, [node, r]);
p.next=null;
failed=false;
return;
}}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireSharedNanos$I$J',  function (arg, nanosTimeout) {
var lastTime=System.nanoTime$();
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [$I$(1).SHARED]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head ) {
var r=this.tryAcquireShared$I(arg);
if (r >= 0) {
p$2.setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this, [node, r]);
p.next=null;
failed=false;
return true;
}}if (Long.$le(nanosTimeout,0 )) return false;
if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(p, node) && Long.$gt(nanosTimeout,1000 ) ) $I$(3).parkNanos$O$J(this, nanosTimeout);
var now=System.nanoTime$();
(nanosTimeout=Long.$sub(nanosTimeout,(Long.$sub(now,lastTime))));
lastTime=now;
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'tryAcquire$I',  function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'tryRelease$I',  function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'tryAcquireShared$I',  function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'tryReleaseShared$I',  function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'isHeldExclusively$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'acquire$I',  function (arg) {
if (!this.tryAcquire$I(arg) && this.acquireQueued$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I(p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [$I$(1).EXCLUSIVE]), arg) ) C$.selfInterrupt$();
});

Clazz.newMeth(C$, 'acquireInterruptibly$I',  function (arg) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
if (!this.tryAcquire$I(arg)) p$2.doAcquireInterruptibly$I.apply(this, [arg]);
});

Clazz.newMeth(C$, 'tryAcquireNanos$I$J',  function (arg, nanosTimeout) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
return this.tryAcquire$I(arg) || p$2.doAcquireNanos$I$J.apply(this, [arg, nanosTimeout]) ;
});

Clazz.newMeth(C$, 'release$I',  function (arg) {
if (this.tryRelease$I(arg)) {
var h=this.head;
if (h != null  && h.waitStatus != 0 ) p$2.unparkSuccessor$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [h]);
return true;
}return false;
});

Clazz.newMeth(C$, 'acquireShared$I',  function (arg) {
if (this.tryAcquireShared$I(arg) < 0) p$2.doAcquireShared$I.apply(this, [arg]);
});

Clazz.newMeth(C$, 'acquireSharedInterruptibly$I',  function (arg) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
if (this.tryAcquireShared$I(arg) < 0) p$2.doAcquireSharedInterruptibly$I.apply(this, [arg]);
});

Clazz.newMeth(C$, 'tryAcquireSharedNanos$I$J',  function (arg, nanosTimeout) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
return this.tryAcquireShared$I(arg) >= 0 || p$2.doAcquireSharedNanos$I$J.apply(this, [arg, nanosTimeout]) ;
});

Clazz.newMeth(C$, 'releaseShared$I',  function (arg) {
if (this.tryReleaseShared$I(arg)) {
p$2.doReleaseShared.apply(this, []);
return true;
}return false;
});

Clazz.newMeth(C$, 'hasQueuedThreads$',  function () {
return this.head !== this.tail ;
});

Clazz.newMeth(C$, 'hasContended$',  function () {
return this.head != null ;
});

Clazz.newMeth(C$, 'getFirstQueuedThread$',  function () {
return (this.head === this.tail ) ? null : p$2.fullGetFirstQueuedThread.apply(this, []);
});

Clazz.newMeth(C$, 'fullGetFirstQueuedThread',  function () {
var h;
var s;
var st;
if (((h=this.head) != null  && (s=h.next) != null   && s.prev === this.head   && (st=s.thread) != null  ) || ((h=this.head) != null  && (s=h.next) != null   && s.prev === this.head   && (st=s.thread) != null  ) ) return st;
var t=this.tail;
var firstThread=null;
while (t != null  && t !== this.head  ){
var tt=t.thread;
if (tt != null ) firstThread=tt;
t=t.prev;
}
return firstThread;
}, p$2);

Clazz.newMeth(C$, 'isQueued$Thread',  function (thread) {
if (thread == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
for (var p=this.tail; p != null ; p=p.prev) if (p.thread === thread ) return true;

return false;
});

Clazz.newMeth(C$, 'apparentlyFirstQueuedIsExclusive$',  function () {
var h;
var s;
return (h=this.head) != null  && (s=h.next) != null   && !s.isShared$()  && s.thread != null  ;
});

Clazz.newMeth(C$, 'hasQueuedPredecessors$',  function () {
var t=this.tail;
var h=this.head;
var s;
return h !== t  && ((s=h.next) == null  || s.thread !== $I$(2).currentThread$()  ) ;
});

Clazz.newMeth(C$, 'getQueueLength$',  function () {
var n=0;
for (var p=this.tail; p != null ; p=p.prev) {
if (p.thread != null ) ++n;
}
return n;
});

Clazz.newMeth(C$, 'getQueuedThreads$',  function () {
var list=Clazz.new_($I$(5,1));
for (var p=this.tail; p != null ; p=p.prev) {
var t=p.thread;
if (t != null ) list.add$O(t);
}
return list;
});

Clazz.newMeth(C$, 'getExclusiveQueuedThreads$',  function () {
var list=Clazz.new_($I$(5,1));
for (var p=this.tail; p != null ; p=p.prev) {
if (!p.isShared$()) {
var t=p.thread;
if (t != null ) list.add$O(t);
}}
return list;
});

Clazz.newMeth(C$, 'getSharedQueuedThreads$',  function () {
var list=Clazz.new_($I$(5,1));
for (var p=this.tail; p != null ; p=p.prev) {
if (p.isShared$()) {
var t=p.thread;
if (t != null ) list.add$O(t);
}}
return list;
});

Clazz.newMeth(C$, 'toString',  function () {
var s=this.getState$();
var q=this.hasQueuedThreads$() ? "non" : "";
return C$.superclazz.prototype.toString.apply(this, []) + "[State = " + s + ", " + q + "empty queue]" ;
});

Clazz.newMeth(C$, 'isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
if (node.waitStatus == -2 || node.prev == null  ) return false;
if (node.next != null ) return true;
return p$2.findNodeFromTail$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
});

Clazz.newMeth(C$, 'findNodeFromTail$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
var t=this.tail;
for (; ; ) {
if (t === node ) return true;
if (t == null ) return false;
t=t.prev;
}
}, p$2);

Clazz.newMeth(C$, 'transferForSignal$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
if (!C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(node, -2, 0)) return false;
var p=p$2.enq$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
var ws=p.waitStatus;
if (ws > 0 || !C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(p, ws, -1) ) $I$(3).unpark$Thread(node.thread);
return true;
});

Clazz.newMeth(C$, 'transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
if (C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I(node, -2, 0)) {
p$2.enq$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node]);
return true;
}while (!this.isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node(node))$I$(2).yield$();

return false;
});

Clazz.newMeth(C$, 'fullyRelease$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
var failed=true;
try {
var savedState=this.getState$();
if (this.release$I(savedState)) {
failed=false;
return savedState;
} else {
throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
}} finally {
if (failed) node.waitStatus=1;
}
});

Clazz.newMeth(C$, 'owns$java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject',  function (condition) {
if (condition == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return condition.isOwnedBy$java_util_concurrent_locks_AbstractQueuedSynchronizer(this);
});

Clazz.newMeth(C$, 'hasWaiters$java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject',  function (condition) {
if (!this.owns$java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject(condition)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not owner"]);
return condition.hasWaiters$();
});

Clazz.newMeth(C$, 'getWaitQueueLength$java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject',  function (condition) {
if (!this.owns$java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject(condition)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not owner"]);
return condition.getWaitQueueLength$();
});

Clazz.newMeth(C$, 'getWaitingThreads$java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject',  function (condition) {
if (!this.owns$java_util_concurrent_locks_AbstractQueuedSynchronizer_ConditionObject(condition)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not owner"]);
return condition.getWaitingThreads$();
});

Clazz.newMeth(C$, 'compareAndSetHead$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (update) {
if (this.head != null ) return false;
this.head=update;
return true;
}, p$2);

Clazz.newMeth(C$, 'compareAndSetTail$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (expect, update) {
if (this.tail !== expect ) return false;
this.tail=update;
return true;
}, p$2);

Clazz.newMeth(C$, 'compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I$I',  function (node, expect, update) {
if (node.waitStatus != expect) return false;
node.waitStatus=update;
return true;
}, 1);

Clazz.newMeth(C$, 'compareAndSetNext$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node, expect, update) {
if (node.next !== expect ) return false;
node.next=update;
return true;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractQueuedSynchronizer, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['waitStatus'],'O',['+prev','+next','thread','Thread','nextWaiter','java.util.concurrent.locks.AbstractQueuedSynchronizer.Node']]
,['O',['SHARED','java.util.concurrent.locks.AbstractQueuedSynchronizer.Node','+EXCLUSIVE']]]

Clazz.newMeth(C$, 'isShared$',  function () {
return this.nextWaiter === C$.SHARED ;
});

Clazz.newMeth(C$, 'predecessor$',  function () {
var p=this.prev;
if (p == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
 else return p;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Thread$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (thread, mode) {
;C$.$init$.apply(this);
this.nextWaiter=mode;
this.thread=thread;
}, 1);

Clazz.newMeth(C$, 'c$$Thread$I',  function (thread, waitStatus) {
;C$.$init$.apply(this);
this.waitStatus=waitStatus;
this.thread=thread;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.SHARED=Clazz.new_(C$);
C$.EXCLUSIVE=null;
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractQueuedSynchronizer, "ConditionObject", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.util.concurrent.locks.Condition', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['firstWaiter','java.util.concurrent.locks.AbstractQueuedSynchronizer.Node','+lastWaiter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addConditionWaiter',  function () {
var t=this.lastWaiter;
if (t != null  && t.waitStatus != -2 ) {
p$1.unlinkCancelledWaiters.apply(this, []);
t=this.lastWaiter;
}var node=Clazz.new_([$I$(2).currentThread$(), -2],$I$(1,1).c$$Thread$I);
if (t == null ) this.firstWaiter=node;
 else t.nextWaiter=node;
this.lastWaiter=node;
return node;
}, p$1);

Clazz.newMeth(C$, 'doSignal$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (first) {
do {
if ((this.firstWaiter=first.nextWaiter) == null ) this.lastWaiter=null;
first.nextWaiter=null;
} while (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].transferForSignal$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [first]) && (first=this.firstWaiter) != null  );
}, p$1);

Clazz.newMeth(C$, 'doSignalAll$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (first) {
this.lastWaiter=this.firstWaiter=null;
do {
var next=first.nextWaiter;
first.nextWaiter=null;
this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].transferForSignal$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [first]);
first=next;
} while (first != null );
}, p$1);

Clazz.newMeth(C$, 'unlinkCancelledWaiters',  function () {
var t=this.firstWaiter;
var trail=null;
while (t != null ){
var next=t.nextWaiter;
if (t.waitStatus != -2) {
t.nextWaiter=null;
if (trail == null ) this.firstWaiter=next;
 else trail.nextWaiter=next;
if (next == null ) this.lastWaiter=trail;
} else trail=t;
t=next;
}
}, p$1);

Clazz.newMeth(C$, 'signal$',  function () {
if (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isHeldExclusively$.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var first=this.firstWaiter;
if (first != null ) p$1.doSignal$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [first]);
});

Clazz.newMeth(C$, 'signalAll$',  function () {
if (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isHeldExclusively$.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var first=this.firstWaiter;
if (first != null ) p$1.doSignalAll$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [first]);
});

Clazz.newMeth(C$, 'awaitUninterruptibly$',  function () {
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].fullyRelease$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
var interrupted=false;
while (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node])){
$I$(3).park$O(this);
if ($I$(2).interrupted$()) interrupted=true;
}
if (this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].acquireQueued$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node, savedState]) || interrupted ) $I$(4).selfInterrupt$();
});

Clazz.newMeth(C$, 'checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node',  function (node) {
return $I$(2).interrupted$() ? (this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]) ? -1 : 1) : 0;
}, p$1);

Clazz.newMeth(C$, 'reportInterruptAfterWait$I',  function (interruptMode) {
if (interruptMode == -1) throw Clazz.new_(Clazz.load('InterruptedException'));
 else if (interruptMode == 1) $I$(4).selfInterrupt$();
}, p$1);

Clazz.newMeth(C$, 'await$',  function () {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].fullyRelease$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
var interruptMode=0;
while (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node])){
$I$(3).park$O(this);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node])) != 0) break;
}
if (this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].acquireQueued$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
});

Clazz.newMeth(C$, 'awaitNanos$J',  function (nanosTimeout) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].fullyRelease$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
var lastTime=System.nanoTime$();
var interruptMode=0;
while (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node])){
if (Long.$le(nanosTimeout,0 )) {
this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
break;
}$I$(3).parkNanos$O$J(this, nanosTimeout);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node])) != 0) break;
var now=System.nanoTime$();
(nanosTimeout=Long.$sub(nanosTimeout,(Long.$sub(now,lastTime))));
lastTime=now;
}
if (this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].acquireQueued$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
return Long.$sub(nanosTimeout,(Long.$sub(System.nanoTime$(),lastTime)));
});

Clazz.newMeth(C$, 'awaitUntil$java_util_Date',  function (deadline) {
if (deadline == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var abstime=deadline.getTime$();
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].fullyRelease$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
var timedout=false;
var interruptMode=0;
while (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node])){
if (Long.$gt(System.currentTimeMillis$(),abstime )) {
timedout=this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
break;
}$I$(3).parkUntil$O$J(this, abstime);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node])) != 0) break;
}
if (this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].acquireQueued$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
return !timedout;
});

Clazz.newMeth(C$, 'await$J$java_util_concurrent_TimeUnit',  function (time, unit) {
if (unit == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var nanosTimeout=unit.toNanos$J(time);
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].fullyRelease$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
var lastTime=System.nanoTime$();
var timedout=false;
var interruptMode=0;
while (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node])){
if (Long.$le(nanosTimeout,0 )) {
timedout=this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node]);
break;
}if (Long.$ge(nanosTimeout,1000 )) $I$(3).parkNanos$O$J(this, nanosTimeout);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node.apply(this, [node])) != 0) break;
var now=System.nanoTime$();
(nanosTimeout=Long.$sub(nanosTimeout,(Long.$sub(now,lastTime))));
lastTime=now;
}
if (this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].acquireQueued$java_util_concurrent_locks_AbstractQueuedSynchronizer_Node$I.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
return !timedout;
});

Clazz.newMeth(C$, 'isOwnedBy$java_util_concurrent_locks_AbstractQueuedSynchronizer',  function (sync) {
return sync === this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'] ;
});

Clazz.newMeth(C$, 'hasWaiters$',  function () {
if (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isHeldExclusively$.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
for (var w=this.firstWaiter; w != null ; w=w.nextWaiter) {
if (w.waitStatus == -2) return true;
}
return false;
});

Clazz.newMeth(C$, 'getWaitQueueLength$',  function () {
if (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isHeldExclusively$.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var n=0;
for (var w=this.firstWaiter; w != null ; w=w.nextWaiter) {
if (w.waitStatus == -2) ++n;
}
return n;
});

Clazz.newMeth(C$, 'getWaitingThreads$',  function () {
if (!this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'].isHeldExclusively$.apply(this.b$['java.util.concurrent.locks.AbstractQueuedSynchronizer'], [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var list=Clazz.new_($I$(5,1));
for (var w=this.firstWaiter; w != null ; w=w.nextWaiter) {
if (w.waitStatus == -2) {
var t=w.thread;
if (t != null ) list.add$O(t);
}}
return list;
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Thread','java.util.concurrent.locks.LockSupport','Runtime','sun.misc.Unsafe','Error','java.util.concurrent.atomic.AtomicReference',['java.util.concurrent.Phaser','.QNode'],'java.util.concurrent.ForkJoinPool']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Phaser", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['QNode',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['state'],'O',['parent','java.util.concurrent.Phaser','+root','evenQ','java.util.concurrent.atomic.AtomicReference','+oddQ']]
,['I',['NCPU','SPINS_PER_ARRIVAL'],'J',['stateOffset'],'O',['UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'unarrivedOf$J',  function (s) {
var counts=Long.$ival(s);
return (counts == 1) ? 0 : (counts & 65535);
}, 1);

Clazz.newMeth(C$, 'partiesOf$J',  function (s) {
return Long.$ival(s) >>> 16;
}, 1);

Clazz.newMeth(C$, 'phaseOf$J',  function (s) {
return Long.$ival((Long.$usr(s,32)));
}, 1);

Clazz.newMeth(C$, 'arrivedOf$J',  function (s) {
var counts=Long.$ival(s);
return (counts == 1) ? 0 : (counts >>> 16) - (counts & 65535);
}, 1);

Clazz.newMeth(C$, 'queueFor$I',  function (phase) {
return ((phase & 1) == 0) ? this.evenQ : this.oddQ;
}, p$1);

Clazz.newMeth(C$, 'badArrive$J',  function (s) {
return "Attempted arrival of unregistered party for " + p$1.stateToString$J.apply(this, [s]);
}, p$1);

Clazz.newMeth(C$, 'badRegister$J',  function (s) {
return "Attempt to register more than " + 65535 + " parties for " + p$1.stateToString$J.apply(this, [s]) ;
}, p$1);

Clazz.newMeth(C$, 'doArrive$I',  function (adjust) {
var root=this.root;
for (; ; ) {
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var phase=Long.$ival((Long.$usr(s,32)));
if (phase < 0) return phase;
var counts=Long.$ival(s);
var unarrived=(counts == 1) ? 0 : (counts & 65535);
if (unarrived <= 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[p$1.badArrive$J.apply(this, [s])]);
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, (s=Long.$sub(s,(adjust))))) {
if (unarrived == 1) {
var n=Long.$and(s,4294901760);
var nextUnarrived=Long.$ival(n) >>> 16;
if (root === this ) {
if (this.onAdvance$I$I(phase, nextUnarrived)) (n=Long.$or(n,([0,549755813888,-1])));
 else if (nextUnarrived == 0) (n=Long.$or(n,(1)));
 else (n=Long.$or(n,(nextUnarrived)));
var nextPhase=(phase + 1) & 2147483647;
(n=Long.$or(n,(Long.$sl(nextPhase,32))));
C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, n);
p$1.releaseWaiters$I.apply(this, [phase]);
} else if (nextUnarrived == 0) {
phase=p$1.doArrive$I.apply(this.parent, [65537]);
C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, Long.$or(s,1));
} else phase=p$1.doArrive$I.apply(this.parent, [1]);
}return phase;
}}
}, p$1);

Clazz.newMeth(C$, 'doRegister$I',  function (registrations) {
var adjust=Long.$or((Long.$sl(registrations,16)),registrations);
var parent=this.parent;
var phase;
for (; ; ) {
var s=(parent == null ) ? this.state : p$1.reconcileState.apply(this, []);
var counts=Long.$ival(s);
var parties=counts >>> 16;
var unarrived=counts & 65535;
if (registrations > 65535 - parties) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[p$1.badRegister$J.apply(this, [s])]);
phase=Long.$ival((Long.$usr(s,32)));
if (phase < 0) break;
if (counts != 1) {
if (parent == null  || Long.$eq(p$1.reconcileState.apply(this, []),s ) ) {
if (unarrived == 0) p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(this.root, [phase, null]);
 else if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, Long.$add(s,adjust))) break;
}} else if (parent == null ) {
var next=Long.$or((Long.$sl(phase,32)),adjust);
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, next)) break;
} else {
{
if (Long.$eq(this.state,s )) {
phase=p$1.doRegister$I.apply(parent, [1]);
if (phase < 0) break;
while (!C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, Long.$or((Long.$sl(phase,32)),adjust))){
s=this.state;
phase=Long.$ival((Long.$usr(this.root.state,32)));
}
break;
}}}}
return phase;
}, p$1);

Clazz.newMeth(C$, 'reconcileState',  function () {
var root=this.root;
var s=this.state;
if (root !== this ) {
var phase;
var p;
while ((phase=Long.$ival((Long.$usr(root.state,32)))) != Long.$ival((Long.$usr(s,32))) && !C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, s=(Long.$or((Long.$sl(phase,32)),((phase < 0) ? (Long.$and(s,4294967295)) : (((p=Long.$ival(s) >>> 16) == 0) ? 1 : (Long.$or((Long.$and(s,4294901760)),p))))))) )s=this.state;

}return s;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_util_concurrent_Phaser$I.apply(this, [null, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (parties) {
C$.c$$java_util_concurrent_Phaser$I.apply(this, [null, parties]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Phaser',  function (parent) {
C$.c$$java_util_concurrent_Phaser$I.apply(this, [parent, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Phaser$I',  function (parent, parties) {
;C$.$init$.apply(this);
if (parties >>> 16 != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal number of parties"]);
var phase=0;
this.parent=parent;
if (parent != null ) {
var root=parent.root;
this.root=root;
this.evenQ=root.evenQ;
this.oddQ=root.oddQ;
if (parties != 0) phase=p$1.doRegister$I.apply(parent, [1]);
} else {
this.root=this;
this.evenQ=Clazz.new_($I$(6,1));
this.oddQ=Clazz.new_($I$(6,1));
}this.state=(parties == 0) ? 1 : Long.$or((Long.$sl(phase,32)),(Long.$sl(parties,16)) , (parties) );
}, 1);

Clazz.newMeth(C$, 'register$',  function () {
return p$1.doRegister$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'bulkRegister$I',  function (parties) {
if (parties < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (parties == 0) return this.getPhase$();
return p$1.doRegister$I.apply(this, [parties]);
});

Clazz.newMeth(C$, 'arrive$',  function () {
return p$1.doArrive$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'arriveAndDeregister$',  function () {
return p$1.doArrive$I.apply(this, [65537]);
});

Clazz.newMeth(C$, 'arriveAndAwaitAdvance$',  function () {
var root=this.root;
for (; ; ) {
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var phase=Long.$ival((Long.$usr(s,32)));
if (phase < 0) return phase;
var counts=Long.$ival(s);
var unarrived=(counts == 1) ? 0 : (counts & 65535);
if (unarrived <= 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[p$1.badArrive$J.apply(this, [s])]);
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, (s=Long.$sub(s,(1))))) {
if (unarrived > 1) return p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, null]);
if (root !== this ) return this.parent.arriveAndAwaitAdvance$();
var n=Long.$and(s,4294901760);
var nextUnarrived=Long.$ival(n) >>> 16;
if (this.onAdvance$I$I(phase, nextUnarrived)) (n=Long.$or(n,([0,549755813888,-1])));
 else if (nextUnarrived == 0) (n=Long.$or(n,(1)));
 else (n=Long.$or(n,(nextUnarrived)));
var nextPhase=(phase + 1) & 2147483647;
(n=Long.$or(n,(Long.$sl(nextPhase,32))));
if (!C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, n)) return Long.$ival((Long.$usr(this.state,32)));
p$1.releaseWaiters$I.apply(this, [phase]);
return nextPhase;
}}
});

Clazz.newMeth(C$, 'awaitAdvance$I',  function (phase) {
var root=this.root;
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var p=Long.$ival((Long.$usr(s,32)));
if (phase < 0) return phase;
if (p == phase) return p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, null]);
return p;
});

Clazz.newMeth(C$, 'awaitAdvanceInterruptibly$I',  function (phase) {
var root=this.root;
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var p=Long.$ival((Long.$usr(s,32)));
if (phase < 0) return phase;
if (p == phase) {
var node=Clazz.new_($I$(7,1).c$$java_util_concurrent_Phaser$I$Z$Z$J,[this, phase, true, false, 0]);
p=p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, node]);
if (node.wasInterrupted) throw Clazz.new_(Clazz.load('InterruptedException'));
}return p;
});

Clazz.newMeth(C$, 'awaitAdvanceInterruptibly$I$J$java_util_concurrent_TimeUnit',  function (phase, timeout, unit) {
var nanos=unit.toNanos$J(timeout);
var root=this.root;
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var p=Long.$ival((Long.$usr(s,32)));
if (phase < 0) return phase;
if (p == phase) {
var node=Clazz.new_($I$(7,1).c$$java_util_concurrent_Phaser$I$Z$Z$J,[this, phase, true, true, nanos]);
p=p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, node]);
if (node.wasInterrupted) throw Clazz.new_(Clazz.load('InterruptedException'));
 else if (p == phase) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
}return p;
});

Clazz.newMeth(C$, 'forceTermination$',  function () {
var root=this.root;
var s;
while (Long.$ge((s=root.state),0 )){
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(root, C$.stateOffset, s, Long.$or(s,[0,549755813888,-1]))) {
p$1.releaseWaiters$I.apply(this, [0]);
p$1.releaseWaiters$I.apply(this, [1]);
return;
}}
});

Clazz.newMeth(C$, 'getPhase$',  function () {
return Long.$ival((Long.$usr(this.root.state,32)));
});

Clazz.newMeth(C$, 'getRegisteredParties$',  function () {
return C$.partiesOf$J(this.state);
});

Clazz.newMeth(C$, 'getArrivedParties$',  function () {
return C$.arrivedOf$J(p$1.reconcileState.apply(this, []));
});

Clazz.newMeth(C$, 'getUnarrivedParties$',  function () {
return C$.unarrivedOf$J(p$1.reconcileState.apply(this, []));
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'getRoot$',  function () {
return this.root;
});

Clazz.newMeth(C$, 'isTerminated$',  function () {
return Long.$lt(this.root.state,0 );
});

Clazz.newMeth(C$, 'onAdvance$I$I',  function (phase, registeredParties) {
return registeredParties == 0;
});

Clazz.newMeth(C$, 'toString',  function () {
return p$1.stateToString$J.apply(this, [p$1.reconcileState.apply(this, [])]);
});

Clazz.newMeth(C$, 'stateToString$J',  function (s) {
return C$.superclazz.prototype.toString.apply(this, []) + "[phase = " + C$.phaseOf$J(s) + " parties = " + C$.partiesOf$J(s) + " arrived = " + C$.arrivedOf$J(s) + "]" ;
}, p$1);

Clazz.newMeth(C$, 'releaseWaiters$I',  function (phase) {
var q;
var t;
var head=(phase & 1) == 0 ? this.evenQ : this.oddQ;
while ((q=head.get$()) != null  && q.phase != Long.$ival((Long.$usr(this.root.state,32))) ){
if (head.compareAndSet$O$O(q, q.next) && (t=q.thread) != null  ) {
q.thread=null;
$I$(2).unpark$Thread(t);
}}
}, p$1);

Clazz.newMeth(C$, 'abortWait$I',  function (phase) {
var head=(phase & 1) == 0 ? this.evenQ : this.oddQ;
for (; ; ) {
var t;
var q=head.get$();
var p=Long.$ival((Long.$usr(this.root.state,32)));
if (q == null  || ((t=q.thread) != null  && q.phase == p ) ) return p;
if (head.compareAndSet$O$O(q, q.next) && t != null  ) {
q.thread=null;
$I$(2).unpark$Thread(t);
}}
}, p$1);

Clazz.newMeth(C$, 'internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode',  function (phase, node) {
p$1.releaseWaiters$I.apply(this, [phase - 1]);
var queued=false;
var lastUnarrived=0;
var spins=C$.SPINS_PER_ARRIVAL;
var s;
var p;
while ((p=Long.$ival((Long.$usr((s=this.state),32)))) == phase){
if (node == null ) {
var unarrived=Long.$ival(s) & 65535;
if (unarrived != lastUnarrived && (lastUnarrived=unarrived) < C$.NCPU ) spins+=C$.SPINS_PER_ARRIVAL;
var interrupted=$I$(1).interrupted$();
if (interrupted || --spins < 0 ) {
node=Clazz.new_($I$(7,1).c$$java_util_concurrent_Phaser$I$Z$Z$J,[this, phase, false, false, 0]);
node.wasInterrupted=interrupted;
}} else if (node.isReleasable$()) break;
 else if (!queued) {
var head=(phase & 1) == 0 ? this.evenQ : this.oddQ;
var q=node.next=head.get$();
if ((q == null  || q.phase == phase ) && Long.$ival((Long.$usr(this.state,32))) == phase ) queued=head.compareAndSet$O$O(q, node);
} else {
try {
$I$(8).managedBlock$java_util_concurrent_ForkJoinPool_ManagedBlocker(node);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
node.wasInterrupted=true;
} else {
throw ie;
}
}
}}
if (node != null ) {
if (node.thread != null ) node.thread=null;
if (node.wasInterrupted && !node.interruptible ) $I$(1).currentThread$().interrupt$();
if (p == phase && (p=Long.$ival((Long.$usr(this.state,32)))) == phase ) return p$1.abortWait$I.apply(this, [phase]);
}p$1.releaseWaiters$I.apply(this, [phase]);
return p;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.NCPU=$I$(3).getRuntime$().availableProcessors$();
C$.SPINS_PER_ARRIVAL=(C$.NCPU < 2) ? 1 : 256;
{
try {
C$.UNSAFE=$I$(4).getUnsafe$();
var k=Clazz.getClass(C$);
C$.stateOffset=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(k.getDeclaredField$S("state"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(5,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Phaser, "QNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.concurrent.ForkJoinPool','java.util.concurrent.ForkJoinPool.ManagedBlocker']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['interruptible','timed','wasInterrupted'],'I',['phase'],'J',['nanos','deadline'],'O',['phaser','java.util.concurrent.Phaser','thread','Thread','next','java.util.concurrent.Phaser.QNode']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_Phaser$I$Z$Z$J',  function (phaser, phase, interruptible, timed, nanos) {
;C$.$init$.apply(this);
this.phaser=phaser;
this.phase=phase;
this.interruptible=interruptible;
this.nanos=nanos;
this.timed=timed;
this.deadline=timed ? Long.$add(System.nanoTime$(),nanos) : 0;
this.thread=$I$(1).currentThread$();
}, 1);

Clazz.newMeth(C$, 'isReleasable$',  function () {
if (this.thread == null ) return true;
if (this.phaser.getPhase$() != this.phase) {
this.thread=null;
return true;
}if ($I$(1).interrupted$()) this.wasInterrupted=true;
if (this.wasInterrupted && this.interruptible ) {
this.thread=null;
return true;
}if (this.timed) {
if (Long.$gt(this.nanos,0 )) {
this.nanos=Long.$sub(this.deadline,System.nanoTime$());
}if (Long.$le(this.nanos,0 )) {
this.thread=null;
return true;
}}return false;
});

Clazz.newMeth(C$, 'block$',  function () {
if (this.isReleasable$()) return true;
 else if (!this.timed) $I$(2).park$O(this);
 else if (Long.$gt(this.nanos,0 )) $I$(2).parkNanos$O$J(this, this.nanos);
return this.isReleasable$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

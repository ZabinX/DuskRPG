(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.locks.ReentrantLock',['java.util.concurrent.CyclicBarrier','.Generation'],'Thread','Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CyclicBarrier", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Generation',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(1,1));
this.trip=this.lock.newCondition$();
this.generation=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['parties','count'],'O',['lock','java.util.concurrent.locks.ReentrantLock','trip','java.util.concurrent.locks.Condition','barrierCommand','Runnable','generation','java.util.concurrent.CyclicBarrier.Generation']]]

Clazz.newMeth(C$, 'nextGeneration',  function () {
this.trip.signalAll$();
this.count=this.parties;
this.generation=Clazz.new_($I$(2,1));
}, p$1);

Clazz.newMeth(C$, 'breakBarrier',  function () {
this.generation.broken=true;
this.count=this.parties;
this.trip.signalAll$();
}, p$1);

Clazz.newMeth(C$, 'dowait$Z$J',  function (timed, nanos) {
var lock=this.lock;
lock.lock$();
try {
var g=this.generation;
if (g.broken) throw Clazz.new_(Clazz.load('java.util.concurrent.BrokenBarrierException'));
if ($I$(3).interrupted$()) {
p$1.breakBarrier.apply(this, []);
throw Clazz.new_(Clazz.load('InterruptedException'));
}var index=--this.count;
if (index == 0) {
var ranAction=false;
try {
var command=this.barrierCommand;
if (command != null ) command.run$();
ranAction=true;
p$1.nextGeneration.apply(this, []);
return 0;
} finally {
if (!ranAction) p$1.breakBarrier.apply(this, []);
}
}for (; ; ) {
try {
if (!timed) this.trip.await$();
 else if (Long.$gt(nanos,0 )) nanos=this.trip.awaitNanos$J(nanos);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
if (g === this.generation  && !g.broken ) {
p$1.breakBarrier.apply(this, []);
throw ie;
} else {
$I$(3).currentThread$().interrupt$();
}} else {
throw ie;
}
}
if (g.broken) throw Clazz.new_(Clazz.load('java.util.concurrent.BrokenBarrierException'));
if (g !== this.generation ) return index;
if (timed && Long.$le(nanos,0 ) ) {
p$1.breakBarrier.apply(this, []);
throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
}}
} finally {
lock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'c$$I$Runnable',  function (parties, barrierAction) {
;C$.$init$.apply(this);
if (parties <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.parties=parties;
this.count=parties;
this.barrierCommand=barrierAction;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (parties) {
C$.c$$I$Runnable.apply(this, [parties, null]);
}, 1);

Clazz.newMeth(C$, 'getParties$',  function () {
return this.parties;
});

Clazz.newMeth(C$, 'await$',  function () {
try {
return p$1.dowait$Z$J.apply(this, [false, 0]);
} catch (toe) {
if (Clazz.exceptionOf(toe,"java.util.concurrent.TimeoutException")){
throw Clazz.new_($I$(4,1).c$$Throwable,[toe]);
} else {
throw toe;
}
}
});

Clazz.newMeth(C$, 'await$J$java_util_concurrent_TimeUnit',  function (timeout, unit) {
return p$1.dowait$Z$J.apply(this, [true, unit.toNanos$J(timeout)]);
});

Clazz.newMeth(C$, 'isBroken$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.generation.broken;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'reset$',  function () {
var lock=this.lock;
lock.lock$();
try {
p$1.breakBarrier.apply(this, []);
p$1.nextGeneration.apply(this, []);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'getNumberWaiting$',  function () {
var lock=this.lock;
lock.lock$();
try {
return this.parties - this.count;
} finally {
lock.unlock$();
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CyclicBarrier, "Generation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.broken=false;
},1);

C$.$fields$=[['Z',['broken']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

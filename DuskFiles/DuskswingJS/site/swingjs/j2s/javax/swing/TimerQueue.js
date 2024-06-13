(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicLong','javax.swing.TimerQueue','java.util.concurrent.TimeUnit','StringBuffer','java.util.concurrent.DelayQueue','javax.swing.SwingUtilities','sun.awt.AppContext','Thread',['javax.swing.TimerQueue','.DelayedTimer'],'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimerQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Runnable');
C$.$classes$=[['DelayedTimer',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['running'],'O',['queue','java.util.concurrent.DelayQueue']]
,['J',['NANO_ORIGIN'],'O',['sharedInstanceKey','java.lang.Object','+expiredTimersKey','+classLock']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.queue=Clazz.new_($I$(5,1));
this.start$();
}, 1);

Clazz.newMeth(C$, 'sharedInstance$',  function () {
{
var sharedInst=$I$(6).appContextGet$O(C$.sharedInstanceKey);
if (sharedInst == null ) {
sharedInst=Clazz.new_(C$);
$I$(6).appContextPut$O$O(C$.sharedInstanceKey, sharedInst);
}return sharedInst;
}}, 1);

Clazz.newMeth(C$, 'start$',  function () {
if (this.running) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Can\'t start a TimerQueue that is already running"]);
} else {
var threadGroup=$I$(7).getAppContext$().getThreadGroup$();
var timerThread=Clazz.new_($I$(8,1).c$$ThreadGroup$Runnable$S,[threadGroup, this, "TimerQueue"]);
timerThread.setDaemon$Z(true);
timerThread.setPriority$I(5);
timerThread.start$();
this.running=true;
}});

Clazz.newMeth(C$, 'stop$',  function () {
this.running=false;
});

Clazz.newMeth(C$, 'addTimer$javax_swing_Timer$J',  function (timer, delayMillis) {
try {
if (!this.containsTimer$javax_swing_Timer(timer)) {
p$1.addTimer$javax_swing_TimerQueue_DelayedTimer.apply(this, [Clazz.new_([timer, Long.$add($I$(3).MILLISECONDS.toNanos$J(delayMillis),C$.now$())],$I$(9,1).c$$javax_swing_Timer$J)]);
}} finally {
}
});

Clazz.newMeth(C$, 'addTimer$javax_swing_TimerQueue_DelayedTimer',  function (delayedTimer) {
Clazz.assert(C$, this, function(){return delayedTimer != null  && !this.containsTimer$javax_swing_Timer(delayedTimer.getTimer$()) });
var timer=delayedTimer.getTimer$();
try {
timer.delayedTimer=delayedTimer;
this.queue.add$java_util_concurrent_Delayed(delayedTimer);
} finally {
}
}, p$1);

Clazz.newMeth(C$, 'removeTimer$javax_swing_Timer',  function (timer) {
try {
if (timer.delayedTimer != null ) {
this.queue.remove$O(timer.delayedTimer);
timer.delayedTimer=null;
}} finally {
}
});

Clazz.newMeth(C$, 'containsTimer$javax_swing_Timer',  function (timer) {
try {
return timer.delayedTimer != null ;
} finally {
}
});

Clazz.newMeth(C$, 'run$',  function () {
try {
while (this.running){
try {
var timer=this.queue.take$().getTimer$();
try {
var delayedTimer=timer.delayedTimer;
if (delayedTimer != null ) {
timer.post$();
timer.delayedTimer=null;
if (timer.isRepeats$()) {
delayedTimer.setTime$J(Long.$add(C$.now$(),$I$(3).MILLISECONDS.toNanos$J(timer.getDelay$())));
p$1.addTimer$javax_swing_TimerQueue_DelayedTimer.apply(this, [delayedTimer]);
}}} catch (ignore) {
if (Clazz.exceptionOf(ignore,"SecurityException")){
} else {
throw ignore;
}
} finally {
}
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"InterruptedException")){
} else {
throw ignore;
}
}
}
} catch (td) {
if (Clazz.exceptionOf(td,"ThreadDeath")){
{
this.running=false;
for (var delayedTimer, $delayedTimer = this.queue.iterator$(); $delayedTimer.hasNext$()&&((delayedTimer=($delayedTimer.next$())),1);) {
delayedTimer.getTimer$().cancelNotify$();
}
throw td;
}} else {
throw td;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(10,1));
buf.append$S("TimerQueue (");
var isFirst=true;
for (var delayedTimer, $delayedTimer = this.queue.iterator$(); $delayedTimer.hasNext$()&&((delayedTimer=($delayedTimer.next$())),1);) {
if (!isFirst) {
buf.append$S(", ");
}buf.append$S(delayedTimer.getTimer$().toString());
isFirst=false;
}
buf.append$S(")");
return buf.toString();
});

Clazz.newMeth(C$, 'now$',  function () {
return Long.$sub(System.nanoTime$(),C$.NANO_ORIGIN);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.sharedInstanceKey=Clazz.new_($I$(4,1).c$$S,["TimerQueue.sharedInstanceKey"]);
C$.expiredTimersKey=Clazz.new_($I$(4,1).c$$S,["TimerQueue.expiredTimersKey"]);
C$.classLock= Clazz.new_();
C$.NANO_ORIGIN=System.nanoTime$();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TimerQueue, "DelayedTimer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.Delayed');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['sequenceNumber','time'],'O',['timer','javax.swing.Timer']]
,['O',['sequencer','java.util.concurrent.atomic.AtomicLong']]]

Clazz.newMeth(C$, 'c$$javax_swing_Timer$J',  function (timer, nanos) {
;C$.$init$.apply(this);
this.timer=timer;
this.time=nanos;
this.sequenceNumber=C$.sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'getDelay$java_util_concurrent_TimeUnit',  function (unit) {
return unit.convert$J$java_util_concurrent_TimeUnit(Long.$sub(this.time,$I$(2).now$()), $I$(3).NANOSECONDS);
});

Clazz.newMeth(C$, 'setTime$J',  function (nanos) {
this.time=nanos;
});

Clazz.newMeth(C$, 'getTimer$',  function () {
return this.timer;
});

Clazz.newMeth(C$, ['compareTo$java_util_concurrent_Delayed','compareTo$O'],  function (other) {
if (other === this ) {
return 0;
}if (Clazz.instanceOf(other, "javax.swing.TimerQueue.DelayedTimer")) {
var x=other;
var diff=Long.$sub(this.time,x.time);
if (Long.$lt(diff,0 )) {
return -1;
} else if (Long.$gt(diff,0 )) {
return 1;
} else if (Long.$lt(this.sequenceNumber,x.sequenceNumber )) {
return -1;
} else {
return 1;
}}var d=(Long.$sub(this.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS),other.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS)));
return (Long.$eq(d,0 )) ? 0 : ((Long.$lt(d,0 )) ? -1 : 1);
});

C$.$static$=function(){C$.$static$=0;
C$.sequencer=Clazz.new_($I$(1,1).c$$J,[0]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

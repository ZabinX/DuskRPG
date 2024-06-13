(function(){var P$=java.util,p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicInteger','Thread','java.util.concurrent.Executors','javax.swing.Timer','java.util.concurrent.TimeUnit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Timer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thread=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['thread','Thread','exec','java.util.concurrent.ScheduledExecutorService','timer','javax.swing.Timer']]
,['O',['nextSerialNumber','java.util.concurrent.atomic.AtomicInteger']]]

Clazz.newMeth(C$, 'serialNumber$',  function () {
return C$.nextSerialNumber.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, ["Timer-" + C$.serialNumber$()]);
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (isDaemon) {
C$.c$$S$Z.apply(this, ["Timer-" + C$.serialNumber$(), isDaemon]);
}, 1);

Clazz.newMeth(C$, 'getExec',  function () {
return (this.exec == null  ? (this.exec=$I$(3).newSingleThreadScheduledExecutor$()) : this.exec);
}, p$1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.thread.setName$S(name);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (name, isDaemon) {
;C$.$init$.apply(this);
this.thread.setName$S(name);
this.thread.setDaemon$Z(isDaemon);
}, 1);

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$J',  function (task, delay) {
if (Long.$lt(delay,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative delay."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, Long.$add(System.currentTimeMillis$(),delay), 0]);
});

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$java_util_Date',  function (task, time) {
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, time.getTime$(), 0]);
});

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$J$J',  function (task, delay, period) {
if (Long.$lt(delay,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative delay."]);
if (Long.$le(period,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, Long.$add(System.currentTimeMillis$(),delay), (Long.$neg(period))]);
});

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$java_util_Date$J',  function (task, firstTime, period) {
if (Long.$le(period,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, firstTime.getTime$(), (Long.$neg(period))]);
});

Clazz.newMeth(C$, 'scheduleAtFixedRate$java_util_TimerTask$J$J',  function (task, delay, period) {
if (Long.$lt(delay,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative delay."]);
if (Long.$le(period,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, Long.$add(System.currentTimeMillis$(),delay), period]);
});

Clazz.newMeth(C$, 'scheduleAtFixedRate$java_util_TimerTask$java_util_Date$J',  function (task, firstTime, period) {
if (Long.$le(period,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, firstTime.getTime$(), period]);
});

Clazz.newMeth(C$, 'sched$java_util_TimerTask$J$J',  function (task, time, period) {
if (Long.$lt(time,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal execution time."]);
var delay=Long.$sub(time,System.currentTimeMillis$());
var isFixed=(Long.$gt(period,0 ));
period=Math.abs$J(period);
if (Long.$gt(period,2147483647 )) period=536870911;
if (Long.$eq(delay,-1 )) delay=0;
if (this.thread.isInterrupted$()) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Timer already cancelled."]);
if (Long.$eq(period,0 )) {
this.timer=Clazz.new_([Long.$ival(delay), ((P$.Timer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Timer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (a) {
if (!this.b$['java.util.Timer'].thread.isInterrupted$.apply(this.b$['java.util.Timer'].thread, []) && this.$finals$.task.state != 3 ) this.$finals$.task.run$.apply(this.$finals$.task, []);
});
})()
), Clazz.new_(P$.Timer$lambda1.$init$,[this, {task:task}]))],$I$(4,1).c$$I$java_awt_event_ActionListener);
this.timer.setRepeats$Z(false);
this.timer.start$();
} else if (isFixed) {
p$1.getExec.apply(this, []).scheduleAtFixedRate$Runnable$J$J$java_util_concurrent_TimeUnit(((P$.Timer$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Timer$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
if (!this.b$['java.util.Timer'].thread.isInterrupted$.apply(this.b$['java.util.Timer'].thread, []) && this.$finals$.task.state != 3 ) this.$finals$.task.run$.apply(this.$finals$.task, []);
});
})()
), Clazz.new_(P$.Timer$lambda2.$init$,[this, {task:task}])), delay, period, $I$(5).MILLISECONDS);
} else {
this.timer=Clazz.new_([Long.$ival(period), ((P$.Timer$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Timer$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (a) {
if (!this.b$['java.util.Timer'].thread.isInterrupted$.apply(this.b$['java.util.Timer'].thread, []) && this.$finals$.task.state != 3 ) this.$finals$.task.run$.apply(this.$finals$.task, []);
});
})()
), Clazz.new_(P$.Timer$lambda3.$init$,[this, {task:task}]))],$I$(4,1).c$$I$java_awt_event_ActionListener);
this.timer.setRepeats$Z(true);
this.timer.setInitialDelay$I(Long.$ival(delay));
this.timer.start$();
}}, p$1);

Clazz.newMeth(C$, 'cancel$',  function () {
this.thread.interrupt$();
if (this.exec != null ) this.exec.shutdownNow$();
if (this.timer != null ) this.timer.stop$();
});

Clazz.newMeth(C$, 'purge$',  function () {
return 0;
});

C$.$static$=function(){C$.$static$=0;
C$.nextSerialNumber=Clazz.new_($I$(1,1).c$$I,[0]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

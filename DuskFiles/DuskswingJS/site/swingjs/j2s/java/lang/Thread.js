(function(){var P$=java.lang,p$1={},I$=[[0,'swingjs.JSThreadGroup','swingjs.JSUtil','ThreadLocal','ThreadGroup','swingjs.JSToolkit','ThreadDeath','NoSuchMethodError','java.util.HashMap',['Thread','.State']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Thread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Runnable');
C$.$classes$=[['State',25],['UncaughtExceptionHandler',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.priority=5;
this.daemon=false;
this.threadLocals=null;
this.inheritableThreadLocals=null;
this.threadStatus=0;
},1);

C$.$fields$=[['Z',['daemon','stopBeforeStart','started','interrupted','stopped'],'I',['priority','threadStatus'],'J',['tid'],'S',['name'],'O',['target','Runnable','group','ThreadGroup','threadLocals','ThreadLocal.ThreadLocalMap','+inheritableThreadLocals','parkBlocker','java.lang.Object','throwableFromStop','Throwable','me','Thread','uncaughtExceptionHandler','Thread.UncaughtExceptionHandler']]
,['I',['threadInitNumber'],'J',['threadSeqNumber'],'O',['秘thisThread','javajs.util.JSThread','defaultUncaughtExceptionHandler','Thread.UncaughtExceptionHandler']]]

Clazz.newMeth(C$, 'nextThreadNum$',  function () {
return C$.threadInitNumber++;
}, 1);

Clazz.newMeth(C$, 'nextThreadID$',  function () {
return (C$.threadSeqNumber=Long.$inc(C$.threadSeqNumber,1));
}, 1);

Clazz.newMeth(C$, 'currentThread$',  function () {
var t=C$.秘thisThread;
if (t === "working" ) return null;
if (t == null ) {
C$.秘thisThread="working";
C$.秘thisThread=Clazz.new_(C$.c$$S,["master"]);
var name=J2S._applets["master"]._id ||null;
var g=Clazz.new_($I$(1,1).c$$ThreadGroup$S,[null, name]);
C$.秘thisThread=Clazz.new_(Clazz.load("javajs.util.JSThread").c$$ThreadGroup$S, [g, name]) ||null;
C$.秘thisThread.setPriority$I(5);
}return C$.秘thisThread;
}, 1);

Clazz.newMeth(C$, 'yield$',  function () {
$I$(2).notImplemented$S(null);
}, 1);

Clazz.newMeth(C$, 'sleep$J',  function (millis) {
$I$(2).notImplemented$S(null);
throw Clazz.new_(Clazz.load('InterruptedException').c$$S,["SwingJS does not implement Thread.sleep(long)"]);
}, 1);

Clazz.newMeth(C$, 'sleep$J$I',  function (millis, nanos) {
if (Long.$lt(millis,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["timeout value is negative"]);
}if (nanos < 0 || nanos > 999999 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["nanosecond timeout value out of range"]);
}if (nanos >= 500000 || (nanos != 0 && Long.$eq(millis,0 ) ) ) {
(millis=Long.$inc(millis,1));
}$I$(2).notImplemented$S(null);
throw Clazz.new_(Clazz.load('InterruptedException').c$$S,["SwingJS does not implement Thread.sleep(long,int)"]);
}, 1);

Clazz.newMeth(C$, 'init$ThreadGroup$Runnable$S$J',  function (g, target, name, stackSize) {
p$1.init$ThreadGroup$Runnable$S$J$O.apply(this, [g, target, name, stackSize, null]);
}, p$1);

Clazz.newMeth(C$, 'init$ThreadGroup$Runnable$S$J$O',  function (g, target, name, stackSize, acc) {
var parent=(C$.秘thisThread == null  ? null : C$.秘thisThread);
if (g == null ) {
if (g == null  && parent != null   && !parent.equals$O("working") ) {
g=parent.getThreadGroup$();
}}if (g == null ) {
g=this.newThreadGroup$ThreadGroup$S(null, name);
parent=this;
}g.addUnstarted$();
this.group=g;
this.priority=parent.getPriority$();
this.name=name;
this.target=target;
this.setPriority$I(this.priority);
if (parent.inheritableThreadLocals != null ) this.inheritableThreadLocals=$I$(3).createInheritedMap$ThreadLocal_ThreadLocalMap(parent.inheritableThreadLocals);
this.tid=C$.nextThreadID$();
this.me=this;
}, p$1);

Clazz.newMeth(C$, 'newThreadGroup$ThreadGroup$S',  function (group, name) {
return Clazz.new_($I$(4,1).c$$ThreadGroup$S,[group, name]);
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, null, "Thread-" + C$.nextThreadNum$(), 0]);
}, 1);

Clazz.newMeth(C$, 'c$$Runnable',  function (target) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, target, "Thread-" + C$.nextThreadNum$(), 0]);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$Runnable',  function (group, target) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, target, "Thread-" + C$.nextThreadNum$(), 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, null, name, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$S',  function (group, name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, null, name, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$Runnable$S',  function (target, name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [null, target, name, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$Runnable$S',  function (group, target, name) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, target, name, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadGroup$Runnable$S$J',  function (group, target, name, stackSize) {
;C$.$init$.apply(this);
p$1.init$ThreadGroup$Runnable$S$J.apply(this, [group, target, name, stackSize]);
}, 1);

Clazz.newMeth(C$, 'start$',  function () {
if (this.threadStatus != 0 || this !== this.me  ) throw Clazz.new_(Clazz.load('IllegalThreadStateException'));
this.group.add$Thread(this);
p$1.start0.apply(this, []);
if (this.stopBeforeStart) {
p$1.stop0$O.apply(this, [this.throwableFromStop]);
}});

Clazz.newMeth(C$, 'start0',  function () {
this.started=true;
C$.currentThread$().getThreadGroup$().秘transferJ2SInfo$ThreadGroup(this.getThreadGroup$());
$I$(5).startThread$Thread(this);
}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.target != null ) {
this.target.run$();
}});

Clazz.newMeth(C$, 'stop$',  function () {
if ((this.threadStatus != 0) && !this.isAlive$() ) {
return;
}p$1.stop1$Throwable.apply(this, [Clazz.new_($I$(6,1))]);
});

Clazz.newMeth(C$, 'stop$Throwable',  function (obj) {
p$1.stop1$Throwable.apply(this, [obj]);
});

Clazz.newMeth(C$, 'stop1$Throwable',  function (th) {
if (this.threadStatus != 0) {
this.resume$();
p$1.stop0$O.apply(this, [th]);
} else {
if (th == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.stopBeforeStart=true;
this.throwableFromStop=th;
}}, p$1);

Clazz.newMeth(C$, 'interrupt$',  function () {
p$1.interrupt0.apply(this, []);
});

Clazz.newMeth(C$, 'interrupted$',  function () {
return p$1.isInterruptedB$Z.apply(C$.currentThread$(), [true]);
}, 1);

Clazz.newMeth(C$, 'isInterrupted$',  function () {
return p$1.isInterruptedB$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'isInterruptedB$Z',  function (clearInterrupted) {
var wasInt=this.interrupted;
if (clearInterrupted) this.interrupted=false;
return wasInt;
}, p$1);

Clazz.newMeth(C$, 'destroy$',  function () {
throw Clazz.new_($I$(7,1));
});

Clazz.newMeth(C$, 'isAlive$',  function () {
return this.started && !this.stopped ;
});

Clazz.newMeth(C$, 'suspend$',  function () {
this.checkAccess$();
p$1.suspend0.apply(this, []);
});

Clazz.newMeth(C$, 'resume$',  function () {
this.checkAccess$();
p$1.resume0.apply(this, []);
});

Clazz.newMeth(C$, 'setPriority$I',  function (newPriority) {
var g;
this.checkAccess$();
if (newPriority > 10 || newPriority < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if ((g=this.getThreadGroup$()) != null ) {
if (newPriority > g.getMaxPriority$()) {
newPriority=g.getMaxPriority$();
}p$1.setPriority0$I.apply(this, [this.priority=newPriority]);
}});

Clazz.newMeth(C$, 'getPriority$',  function () {
return this.priority;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.checkAccess$();
this.name=name;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getThreadGroup$',  function () {
return this.group;
});

Clazz.newMeth(C$, 'activeCount$',  function () {
return C$.currentThread$().getThreadGroup$().activeCount$();
}, 1);

Clazz.newMeth(C$, 'enumerate$ThreadA',  function (tarray) {
return C$.currentThread$().getThreadGroup$().enumerate$ThreadA(tarray);
}, 1);

Clazz.newMeth(C$, 'countStackFrames$',  function () {
return 0;
});

Clazz.newMeth(C$, 'join$J',  function (millis) {
if (Long.$lt(millis,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["timeout value is negative"]);
}$I$(2).notImplemented$S(null);
});

Clazz.newMeth(C$, 'join$J$I',  function (millis, nanos) {
if (Long.$lt(millis,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["timeout value is negative"]);
}if (nanos < 0 || nanos > 999999 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["nanosecond timeout value out of range"]);
}if (nanos >= 500000 || (nanos != 0 && Long.$eq(millis,0 ) ) ) {
(millis=Long.$inc(millis,1));
}this.join$J(millis);
});

Clazz.newMeth(C$, 'join$',  function () {
this.join$J(0);
});

Clazz.newMeth(C$, 'dumpStack$',  function () {
Clazz.new_(Clazz.load('Exception').c$$S,["Stack trace"]).printStackTrace$();
}, 1);

Clazz.newMeth(C$, 'setDaemon$Z',  function (on) {
this.checkAccess$();
if (this.isAlive$()) {
throw Clazz.new_(Clazz.load('IllegalThreadStateException'));
}this.daemon=on;
});

Clazz.newMeth(C$, 'isDaemon$',  function () {
return this.daemon;
});

Clazz.newMeth(C$, 'checkAccess$',  function () {
});

Clazz.newMeth(C$, 'toString',  function () {
var group=this.getThreadGroup$();
if (group != null ) {
return "Thread[" + this.getName$() + "," + this.getPriority$() + "," + group.getName$() + "]" ;
} else {
return "Thread[" + this.getName$() + "," + this.getPriority$() + "," + "" + "]" ;
}});

Clazz.newMeth(C$, 'getContextClassLoader$',  function () {
var cl=Clazz.getClass($I$(2)).getClassLoader$();

cl.baseClass = {getName$:function(){return ""}};
return cl;
});

Clazz.newMeth(C$, 'setContextClassLoader$ClassLoader',  function (cl) {
});

Clazz.newMeth(C$, 'holdsLock$O',  function (obj) {
return false;
}, 1);

Clazz.newMeth(C$, 'getStackTrace$',  function () {
return (Clazz.new_(Clazz.load('Exception'))).getStackTrace$();
});

Clazz.newMeth(C$, 'getAllStackTraces$',  function () {
var threads=C$.getThreads$();
var traces=C$.dumpThreads$ThreadA(threads);
var m=Clazz.new_($I$(8,1).c$$I,[threads.length]);
for (var i=0; i < threads.length; i++) {
var stackTrace=traces[i];
if (stackTrace != null ) {
m.put$O$O(threads[i], stackTrace);
}}
return m;
}, 1);

Clazz.newMeth(C$, 'dumpThreads$ThreadA',  function (threads) {
return null;
}, 1);

Clazz.newMeth(C$, 'getThreads$',  function () {
return null;
}, 1);

Clazz.newMeth(C$, 'getId$',  function () {
return this.tid;
});

Clazz.newMeth(C$, 'getState$',  function () {
switch (this.threadStatus) {
case 0:
return $I$(9).NEW;
case 1:
return $I$(9).RUNNABLE;
case 2:
default:
return $I$(9).TERMINATED;
case 3:
return $I$(9).TIMED_WAITING;
case 4:
return $I$(9).WAITING;
}
});

Clazz.newMeth(C$, 'setDefaultUncaughtExceptionHandler$Thread_UncaughtExceptionHandler',  function (eh) {
C$.defaultUncaughtExceptionHandler=eh;
}, 1);

Clazz.newMeth(C$, 'getDefaultUncaughtExceptionHandler$',  function () {
return C$.defaultUncaughtExceptionHandler;
}, 1);

Clazz.newMeth(C$, 'getUncaughtExceptionHandler$',  function () {
return this.uncaughtExceptionHandler != null  ? this.uncaughtExceptionHandler : this.group;
});

Clazz.newMeth(C$, 'setUncaughtExceptionHandler$Thread_UncaughtExceptionHandler',  function (eh) {
this.checkAccess$();
this.uncaughtExceptionHandler=eh;
});

Clazz.newMeth(C$, 'setPriority0$I',  function (newPriority) {
}, p$1);

Clazz.newMeth(C$, 'stop0$O',  function (o) {
this.stopped=true;
}, p$1);

Clazz.newMeth(C$, 'suspend0',  function () {
}, p$1);

Clazz.newMeth(C$, 'resume0',  function () {
}, p$1);

Clazz.newMeth(C$, 'interrupt0',  function () {
this.interrupted=true;
}, p$1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Thread, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NEW", 0, []);
Clazz.newEnumConst($vals, C$.c$, "RUNNABLE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "BLOCKED", 2, []);
Clazz.newEnumConst($vals, C$.c$, "WAITING", 3, []);
Clazz.newEnumConst($vals, C$.c$, "TIMED_WAITING", 4, []);
Clazz.newEnumConst($vals, C$.c$, "TERMINATED", 5, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Thread, "UncaughtExceptionHandler", function(){
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

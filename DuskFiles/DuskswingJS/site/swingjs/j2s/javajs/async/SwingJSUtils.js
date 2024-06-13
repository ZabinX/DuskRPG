(function(){var P$=Clazz.newPackage("javajs.async"),p$1={},p$2={},I$=[[0,'java.awt.event.ActionEvent','javax.swing.Timer',['javajs.async.SwingJSUtils','.StateHelper'],'java.util.HashMap','Thread','java.util.ArrayList',['javajs.async.SwingJSUtils','.Singleton'],['javajs.async.SwingJSUtils','.Timeout'],'java.awt.Dimension','java.awt.Image','javax.imageio.ImageIO','java.io.BufferedReader','java.io.InputStreamReader','java.util.stream.Collectors','java.io.BufferedInputStream','java.io.ByteArrayInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingJSUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StateMachine',9],['StateHelper',9],['Performance',9],['Singleton',9],['Timeout',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setDim$I$I',  function (w, h) {
var baseURI=(document.body.baseURI ||null);
var isTest=(baseURI == null  || baseURI.indexOf$S("_applet.html") >= 0 );
if (!isTest) return null;

J2S.thisApplet.__Info.width = w; J2S.thisApplet.__Info.height = h;
return Clazz.new_($I$(9,1).c$$I$I,[w, h]);
}, 1);

Clazz.newMeth(C$, 'getResource$Class$S$Class',  function (baseClass, filename, cl) {
System.out.println$S("mpUtils.SwingJSUtils.getResource " + baseClass.getCanonicalName$() + " " + filename );
var is=baseClass.getResourceAsStream$S(filename);
if (cl === Clazz.getClass($I$(10)) ) {
try {
return $I$(11).read$java_io_InputStream(is);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
} else if (cl === Clazz.getClass(String) ) {
return Clazz.new_([Clazz.new_($I$(13,1).c$$java_io_InputStream,[is])],$I$(12,1).c$$java_io_Reader).lines$().collect$java_util_stream_Collector($I$(14).joining$CharSequence("\n"));
}return is;
}, 1);

Clazz.newMeth(C$, 'loadImagesStatic$Class$java_awt_ImageA$S$S$I',  function (cl, images, root, ext, nImages) {
for (var i=nImages; --i >= 0; ) {
images[i]=C$.getResource$Class$S$Class(cl, root + i + "." + ext , Clazz.getClass($I$(10)));
}
}, 1);

Clazz.newMeth(C$, 'loadImagesStatic$Class$S$SA$java_awt_ImageA',  function (cl, root, names, images) {
for (var i=names.length; --i >= 0; ) {
images[i]=C$.getResource$Class$S$Class(cl, root + names[i], Clazz.getClass($I$(10)));
}
}, 1);

Clazz.newMeth(C$, 'getImage$java_awt_Component$S',  function (c, fileName) {
return C$.getImage$Class$S(c.getClass$(), fileName);
}, 1);

Clazz.newMeth(C$, 'getImage$Class$S',  function (c, fileName) {
return C$.getResource$Class$S$Class(c, fileName, Clazz.getClass($I$(10)));
}, 1);

Clazz.newMeth(C$, 'clearComponent$java_awt_Component',  function (c) {
var gc=c.getGraphics$();
gc.clearRect$I$I$I$I(0, 0, c.getWidth$(), c.getHeight$());
gc.dispose$();
}, 1);

Clazz.newMeth(C$, 'openStream$Class$S',  function (base, fileName) {
var s=C$.getResource$Class$S$Class(base, fileName, Clazz.getClass(String));
return Clazz.new_([Clazz.new_([s.getBytes$()],$I$(16,1).c$$BA)],$I$(15,1).c$$java_io_InputStream);
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.SwingJSUtils, "StateMachine", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingJSUtils, "StateHelper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['interrupted'],'I',['state','level','stateNext','levelNext'],'O',['machine','javajs.async.SwingJSUtils.StateMachine','stateTimer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'c$$javajs_async_SwingJSUtils_StateMachine',  function (machine) {
;C$.$init$.apply(this);
this.machine=machine;
}, 1);

Clazz.newMeth(C$, 'interrupt$',  function () {
this.interrupted=true;
});

Clazz.newMeth(C$, 'isInterrupted$',  function () {
return this.interrupted;
});

Clazz.newMeth(C$, 'isAlive$',  function () {
return !this.interrupted;
});

Clazz.newMeth(C$, 'restart$',  function () {
this.interrupted=false;
});

Clazz.newMeth(C$, 'setState$I',  function (state) {
this.state=this.stateNext=state;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'setLevel$I',  function (level) {
this.level=this.levelNext=level;
});

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.level;
});

Clazz.newMeth(C$, 'setNextState$I',  function (next) {
this.stateNext=next;
});

Clazz.newMeth(C$, 'getNextState$',  function () {
return this.stateNext;
});

Clazz.newMeth(C$, 'getNextLevel$',  function () {
return this.levelNext;
});

Clazz.newMeth(C$, 'setNextLevel$I',  function (next) {
this.levelNext=next;
});

Clazz.newMeth(C$, 'nextState',  function () {
return this.next$I$I(this.stateNext, this.levelNext);
}, p$1);

Clazz.newMeth(C$, 'next$I',  function (state) {
return this.next$I$I(state, 0);
});

Clazz.newMeth(C$, 'next$I$I',  function (state, level) {
return C$.nextStatePriv$O$I$I(this, state, level);
});

Clazz.newMeth(C$, 'nextStatePriv$O$I$I',  function (oThis, state, level) {
var me=oThis;
if (me.interrupted) return false;
if (level != -2147483648) me.level=level;
if (state != -2147483648) me.state=state;
return me.machine.stateLoop$();
}, 1);

Clazz.newMeth(C$, 'delayedState$I$I',  function (ms, stateNext) {
return this.delayedState$I$I$I(ms, stateNext, this.level);
});

Clazz.newMeth(C$, 'delayedState$I$I$I',  function (ms, stateNext, levelNext) {
if (this.interrupted) return false;
if (ms == 0) return this.next$I$I(stateNext, levelNext);
if (stateNext != -2147483648) this.stateNext=stateNext;
if (levelNext != -2147483648) this.levelNext=levelNext;
{
var me = this; setTimeout(function(){ p$1.nextState.apply(me, []);
},ms);
}
return true;
});

Clazz.newMeth(C$, 'delayedAction$I$I$S$java_awt_event_ActionListener',  function (ms, id, command, listener) {
return this.delayedAction$I$I$S$java_awt_event_ActionListener$I$I(ms, id, command, listener, -2147483648, -2147483648);
});

Clazz.newMeth(C$, 'delayedAction$I$I$S$java_awt_event_ActionListener$I',  function (ms, id, command, listener, state) {
return this.delayedAction$I$I$S$java_awt_event_ActionListener$I$I(ms, id, command, listener, state, -2147483648);
});

Clazz.newMeth(C$, 'delayedAction$I$I$S$java_awt_event_ActionListener$I$I',  function (ms, id, command, listener, stateNext, levelNext) {
if (this.interrupted) return false;
var event=Clazz.new_($I$(1,1).c$$O$I$S,[this, id, command]);
if (ms == 0) {
listener.actionPerformed$java_awt_event_ActionEvent(event);
return (stateNext == -2147483648 && levelNext == -2147483648  || C$.nextStatePriv$O$I$I(this, stateNext == -2147483648 ? this.state : stateNext, levelNext == -2147483648 ? this.level : levelNext) );
}var me=this;
var timer=Clazz.new_([ms, id == 1001 ? listener : ((P$.SwingJSUtils$StateHelper$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SwingJSUtils$StateHelper$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (!this.b$['javajs.async.SwingJSUtils.StateHelper'].interrupted) this.$finals$.listener.actionPerformed$java_awt_event_ActionEvent(this.$finals$.event);
if (!this.b$['javajs.async.SwingJSUtils.StateHelper'].interrupted && (this.$finals$.stateNext != -2147483648 || this.$finals$.levelNext != -2147483648 ) ) $I$(3,"nextStatePriv$O$I$I",[this.$finals$.me, this.$finals$.stateNext == -2147483648 ? this.b$['javajs.async.SwingJSUtils.StateHelper'].state : this.$finals$.stateNext, this.$finals$.levelNext == -2147483648 ? this.b$['javajs.async.SwingJSUtils.StateHelper'].level : this.$finals$.levelNext]);
});
})()
), Clazz.new_(P$.SwingJSUtils$StateHelper$1.$init$,[this, {stateNext:stateNext,listener:listener,event:event,me:me,levelNext:levelNext}]))],$I$(2,1).c$$I$java_awt_event_ActionListener);
timer.setRepeats$Z(false);
timer.start$();
return true;
});

Clazz.newMeth(C$, 'delayedRun$I$Runnable',  function (ms, runnable) {
Clazz.new_(C$.c$$javajs_async_SwingJSUtils_StateMachine,[null]).delayedRun$I$Runnable$I$I(ms, runnable, -2147483648, -2147483648);
}, 1);

Clazz.newMeth(C$, 'delayedRun$I$Runnable$I$I',  function (ms, runnable, stateNext, levelNext) {
if (this.interrupted) return false;
if (ms == 0) {
return (stateNext == -2147483648 && levelNext == -2147483648  || this.nextStateIfUnchanged$O$O$I$I(this, runnable, stateNext == -2147483648 ? this.state : stateNext, levelNext == -2147483648 ? this.level : levelNext) );
}var me=this;
{
setTimeout(function() { me.nextStateIfUnchanged$O$O$I$I.apply(me, [me, runnable, stateNext, levelNext]);
},ms);
}
return true;
});

Clazz.newMeth(C$, 'nextStateIfUnchanged$O$O$I$I',  function (oThis, runnable, stateNext, levelNext) {
var me=(oThis);
if (!me.interrupted) (runnable).run$();
if (!me.interrupted && (stateNext != -2147483648 || levelNext != -2147483648 ) ) C$.nextStatePriv$O$I$I(oThis, stateNext == -2147483648 ? me.state : stateNext, levelNext == -2147483648 ? me.level : levelNext);
return true;
});

Clazz.newMeth(C$, 'sleep$I',  function (ms) {
var next=this.stateNext;
this.delayedState$I$I(ms, next);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingJSUtils, "Performance", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['J',['time','mark','set','duration']]]

Clazz.newMeth(C$, 'timeCheck$S$I',  function (msg, mode) {
msg=C$.timeCheckStr$S$I(msg, mode);
if (msg != null ) System.err.println$S(msg);
}, 1);

Clazz.newMeth(C$, 'now$J',  function (t) {
return Long.$sub(System.currentTimeMillis$(),t);
}, 1);

Clazz.newMeth(C$, 'timeCheckStr$S$I',  function (msg, mode) {
var t=System.currentTimeMillis$();
switch (mode) {
case 0:
C$.time=C$.mark=t;
C$.duration=C$.set=0;
if (msg != null ) {
return ("Platform: timer reset\t\t\t" + msg);
}break;
case 2:
if (Long.$eq(C$.time,0 )) C$.time=t;
C$.set=t;
break;
case 1:
if (Long.$gt(C$.set,0 )) {
(C$.duration=Long.$add(C$.duration,((Long.$sub(t,C$.set)))));
} else {
if (Long.$eq(C$.time,0 )) {
C$.time=C$.mark=t;
}if (msg != null ) {
var m0=C$.mark;
C$.mark=t;
return ("Platform: timer mark\t" + (new Float((Long.$sub(t,C$.time)) / 1000.0).toString()) + "\t" + new Float(((Long.$sub(t,m0)) / 1000.0)).toString() + "\t" + msg );
}C$.mark=t;
}break;
case 3:
if (msg != null ) {
if (Long.$lt(C$.mark,C$.set )) C$.duration=Long.$sub(t,C$.set);
return ("Platform: timer get\t" + (new Float((Long.$sub(t,C$.time)) / 1000.0).toString()) + "\t" + new Float(((C$.duration) / 1000.0)).toString() + "\t" + msg );
}C$.set=0;
break;
}
return null;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingJSUtils, "Singleton", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['SingletonI',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['singletons','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getContextMap$',  function () {
var g=(true ||(false) ? $I$(5).currentThread$().getThreadGroup$() : null);
var map=C$.singletons;

map = g._swingjsSingletons;
if (map == null ) {
map=Clazz.new_($I$(4,1));

g._swingjsSingletons = map;
}return map;
}, 1);

Clazz.newMeth(C$, 'getInstance$Class',  function (c) {
var map=C$.getContextMap$();
if (map.containsKey$O(c)) {
return map.get$O(c);
}var o=map.get$O(c);
try {
var con=c.getDeclaredConstructor$ClassA(Clazz.array(Class, -1, []));
con.setAccessible$Z(true);
o=con.newInstance$OA(Clazz.array(java.lang.Object, -1, []));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalArgumentException") || Clazz.exceptionOf(e,"java.lang.reflect.InvocationTargetException") || Clazz.exceptionOf(e,"NoSuchMethodException") || Clazz.exceptionOf(e,"SecurityException")){
System.out.println$S("Failed to create singleton for " + c.toString() + ", error was: " + e.toString() );
e.printStackTrace$();
} else {
throw e;
}
}
C$.getContextMap$().put$O$O(c, o);
return o;
}, 1);

Clazz.newMeth(C$, 'removeInstance$Class',  function (c) {
var map=C$.getContextMap$();
if (map != null ) {
map.remove$O(c);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.singletons=Clazz.new_($I$(4,1));
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.SwingJSUtils.Singleton, "SingletonI", function(){
});
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingJSUtils, "Timeout", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.Timer', [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.Singleton','javajs.async.SwingJSUtils.Singleton.SingletonI']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id','$delay','state'],'S',['name'],'O',['r','Runnable','timeouts','java.util.Map']]
,['I',['timeoutID']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I$java_awt_event_ActionListener.apply(this,[0, null]);C$.$init$.apply(this);
this.timeouts=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'setTimeout$S$I$Z$Runnable',  function (name, msDelay, cancelPending, r) {
var t=Clazz.new_(C$.c$$S$I$Runnable,[name, msDelay, r]);
if (cancelPending) C$.cancelTimeoutsByName$S(name);
C$.getInstance$().timeouts.put$O$O(Integer.valueOf$I(t.id), t);
t.state=1;
p$2.startTimer.apply(t, []);
return t.id;
}, 1);

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'cancel$',  function () {
if (this.state == 1) {
this.state=4;
this.stop$();
}return this.state;
});

Clazz.newMeth(C$, 'isPending$',  function () {
return this.state == 1;
});

Clazz.newMeth(C$, 'cancelTimeoutById$I',  function (id) {
var pending=C$.getInstance$().timeouts.remove$O(Integer.valueOf$I(id));
if (pending != null ) {
pending.cancel$();
}}, 1);

Clazz.newMeth(C$, 'cancelTimeoutsByName$S',  function (name) {
var timeouts=C$.getTimeoutsByName$S(name);
for (var t, $t = 0, $$t = timeouts; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
if (name == null  || t.getName$().equals$O(name) ) C$.cancelTimeoutById$I(t.getId$());
}
}, 1);

Clazz.newMeth(C$, 'getTimeout$I',  function (id) {
return C$.getInstance$().timeouts.get$O(Integer.valueOf$I(id));
}, 1);

Clazz.newMeth(C$, 'getTimeoutsByName$S',  function (name) {
var list=Clazz.new_($I$(6,1));
for (var entry, $entry = C$.getInstance$().timeouts.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var t=entry.getValue$();
if (t.state == 1 && (name == null  || name.equals$O(t.name) ) ) list.add$O(t);
}
return list.toArray$OA(Clazz.array(C$, [list.size$()]));
}, 1);

Clazz.newMeth(C$, 'c$$S$I$Runnable',  function (name, msDelay, r) {
;C$.superclazz.c$$I$java_awt_event_ActionListener.apply(this,[msDelay, null]);C$.$init$.apply(this);
this.setRepeats$Z(false);
this.name=name;
this.r=r;
this.$delay=msDelay;
this.id=++C$.timeoutID;
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
return $I$(7,"getInstance$Class",[Clazz.getClass(C$)]);
}, 1);

Clazz.newMeth(C$, 'startTimer',  function () {
if (this.state != 1) return;
var me=this;
this.addActionListener$java_awt_event_ActionListener(((P$.SwingJSUtils$Timeout$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "SwingJSUtils$Timeout$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (e) {
$I$(8).getInstance$().timeouts.remove$O.apply($I$(8).getInstance$().timeouts, [Integer.valueOf$I(this.b$['javajs.async.SwingJSUtils.Timeout'].id)]);
if ((this.b$['javajs.async.SwingJSUtils.Timeout'].state == 1)) {
this.b$['javajs.async.SwingJSUtils.Timeout'].state=2;
this.b$['javajs.async.SwingJSUtils.Timeout'].r.run$.apply(this.b$['javajs.async.SwingJSUtils.Timeout'].r, []);
this.b$['javajs.async.SwingJSUtils.Timeout'].state=3;
}});
})()
), Clazz.new_(P$.SwingJSUtils$Timeout$lambda1.$init$,[this, null])));
this.start$();
}, p$2);

Clazz.newMeth(C$, 'toString',  function () {
return "[Timeout " + this.id + " " + this.name + " " + this.isPending$() + " " + this.state + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.timeoutID=0;
};
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

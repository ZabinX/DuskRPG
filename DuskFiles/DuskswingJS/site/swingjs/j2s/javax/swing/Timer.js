(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.Timer','java.awt.event.ActionEvent','javax.swing.event.EventListenerList',['javax.swing.Timer','.DoPostEvent'],'java.awt.event.ActionListener','swingjs.JSToolkit','javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Timer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['DoPostEvent',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(3,1));
this.notify=false;
this.repeats0=true;
this.repeats=true;
this.coalesce=true;
this.delayedTimer=null;
this.html5Id=-2147483648;
},1);

C$.$fields$=[['Z',['notify','repeats0','repeats','coalesce'],'I',['initialDelay','delay','html5Id'],'J',['postTime','dispatchTime'],'S',['actionCommand'],'O',['listenerList','javax.swing.event.EventListenerList','doPostEvent','Runnable','delayedTimer','javax.swing.TimerQueue.DelayedTimer']]
,['Z',['logTimers']]]

Clazz.newMeth(C$, 'c$$I$java_awt_event_ActionListener',  function (delay, listener) {
;C$.$init$.apply(this);
this.initialDelay=this.delay=(delay < 0 ? 0 : delay);
this.doPostEvent=Clazz.new_($I$(4,1),[this, null]);
if (listener != null ) {
this.addActionListener$java_awt_event_ActionListener(listener);
}}, 1);

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (listener) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(5),['actionPerformed$java_awt_event_ActionEvent']), listener);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (listener) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(5),['actionPerformed$java_awt_event_ActionEvent']), listener);
});

Clazz.newMeth(C$, 'getActionListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(5),['actionPerformed$java_awt_event_ActionEvent']));
});

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(5),['actionPerformed$java_awt_event_ActionEvent']) ) {
(listeners[i + 1]).actionPerformed$java_awt_event_ActionEvent(e);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'setLogTimers$Z',  function (flag) {
C$.logTimers=flag;
}, 1);

Clazz.newMeth(C$, 'getLogTimers$',  function () {
return C$.logTimers;
}, 1);

Clazz.newMeth(C$, 'setDelay$I',  function (delay) {
if (delay < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid delay: " + delay]);
} else {
this.delay=delay;
}});

Clazz.newMeth(C$, 'getDelay$',  function () {
return this.delay;
});

Clazz.newMeth(C$, 'setInitialDelay$I',  function (initialDelay) {
if (initialDelay < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid initial delay: " + initialDelay]);
} else {
this.initialDelay=initialDelay;
}});

Clazz.newMeth(C$, 'getInitialDelay$',  function () {
return this.initialDelay;
});

Clazz.newMeth(C$, 'setRepeats$Z',  function (flag) {
this.repeats0=this.repeats=flag;
});

Clazz.newMeth(C$, 'isRepeats$',  function () {
return this.repeats;
});

Clazz.newMeth(C$, 'setCoalesce$Z',  function (flag) {
var old=this.coalesce;
this.coalesce=flag;
if (!old && this.coalesce ) {
this.cancelNotify$();
}});

Clazz.newMeth(C$, 'isCoalesce$',  function () {
return this.coalesce;
});

Clazz.newMeth(C$, 'setActionCommand$S',  function (command) {
this.actionCommand=command;
});

Clazz.newMeth(C$, 'getActionCommand$',  function () {
return this.actionCommand;
});

Clazz.newMeth(C$, 'start$',  function () {
this.repeats=this.repeats0;
p$1.timerQueue.apply(this, []).add$O(this);
p$1.dispatch$I.apply(this, [this.getInitialDelay$()]);
});

Clazz.newMeth(C$, 'dispatch$I',  function (msDelay) {
this.html5Id=-2147483648;
var r=((P$.Timer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Timer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.Timer'].postTime=System.currentTimeMillis$();
if ($I$(1).logTimers) System.out.println$S("timer " + this.b$['javax.swing.Timer'].html5Id + " posted at " + Long.$s(this.b$['javax.swing.Timer'].postTime) );
this.b$['javax.swing.Timer'].post$.apply(this.b$['javax.swing.Timer'], []);
});
})()
), Clazz.new_(P$.Timer$1.$init$,[this, null]));
this.html5Id=$I$(6).dispatch$O$I$I(r, msDelay, 0);
this.dispatchTime=System.currentTimeMillis$();
if (C$.logTimers) System.out.println$S("timer " + this.html5Id + " dispatched at " + Long.$s(this.dispatchTime) );
}, p$1);

Clazz.newMeth(C$, 'isRunning$',  function () {
return p$1.timerQueue.apply(this, []).contains$O(this);
});

Clazz.newMeth(C$, 'stop$',  function () {
this.stop$I(this.html5Id);
});

Clazz.newMeth(C$, 'stop$I',  function (id) {
if (id != this.html5Id) return;
$I$(6).killDispatched$I(this.html5Id);
this.cancelNotify$();
this.repeats=false;
var q=p$1.timerQueue.apply(this, []);
if (q != null ) q.remove$O(this);
this.html5Id=-2147483648;
});

Clazz.newMeth(C$, 'timerQueue',  function () {
return $I$(6).getTimerQueue$();
}, p$1);

Clazz.newMeth(C$, 'restart$',  function () {
this.stop$();
this.start$();
});

Clazz.newMeth(C$, 'cancelNotify$',  function () {
this.notify=false;
});

Clazz.newMeth(C$, 'post$',  function () {
if (this.notify == false  && (this.notify=true)  || !this.coalesce ) {
$I$(7).invokeLater$Runnable(this.doPostEvent);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Timer, "DoPostEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if ($I$(1).logTimers) {
System.out.println$S("Timer ringing: " + this.b$['javax.swing.Timer']);
}var id=this.b$['javax.swing.Timer'].html5Id;
if (this.b$['javax.swing.Timer'].notify) {
this.b$['javax.swing.Timer'].fireActionPerformed$java_awt_event_ActionEvent.apply(this.b$['javax.swing.Timer'], [Clazz.new_([this.b$['javax.swing.Timer'], 0, this.b$['javax.swing.Timer'].getActionCommand$.apply(this.b$['javax.swing.Timer'], []), System.currentTimeMillis$(), 0],$I$(2,1).c$$O$I$S$J$I)]);
if (this.b$['javax.swing.Timer'].coalesce) {
this.b$['javax.swing.Timer'].cancelNotify$.apply(this.b$['javax.swing.Timer'], []);
}}if (this.b$['javax.swing.Timer'].isRepeats$.apply(this.b$['javax.swing.Timer'], [])) p$1.dispatch$I.apply(this.b$['javax.swing.Timer'], [this.b$['javax.swing.Timer'].getDelay$.apply(this.b$['javax.swing.Timer'], [])]);
 else this.b$['javax.swing.Timer'].stop$I.apply(this.b$['javax.swing.Timer'], [id]);
});

Clazz.newMeth(C$, 'getTimer$',  function () {
return this.b$['javax.swing.Timer'];
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

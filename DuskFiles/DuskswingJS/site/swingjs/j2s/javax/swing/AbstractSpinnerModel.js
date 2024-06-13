(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractSpinnerModel", null, null, 'javax.swing.SpinnerModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeEvent=null;
this.listenerList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['changeEvent','javax.swing.event.ChangeEvent','listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) {
this.changeEvent=Clazz.new_($I$(3,1).c$$O,[this]);
}(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

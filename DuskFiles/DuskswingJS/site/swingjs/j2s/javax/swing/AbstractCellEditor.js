(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.event.CellEditorListener','javax.swing.event.ChangeEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractCellEditor", null, null, 'javax.swing.CellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(1,1));
this.changeEvent=null;
},1);

C$.$fields$=[['O',['listenerList','javax.swing.event.EventListenerList','changeEvent','javax.swing.event.ChangeEvent']]]

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (e) {
return true;
});

Clazz.newMeth(C$, 'shouldSelectCell$java_util_EventObject',  function (anEvent) {
return true;
});

Clazz.newMeth(C$, 'stopCellEditing$',  function () {
this.fireEditingStopped$();
return true;
});

Clazz.newMeth(C$, 'cancelCellEditing$',  function () {
this.fireEditingCanceled$();
});

Clazz.newMeth(C$, 'addCellEditorListener$javax_swing_event_CellEditorListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(2),['editingCanceled$javax_swing_event_ChangeEvent','editingStopped$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeCellEditorListener$javax_swing_event_CellEditorListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(2),['editingCanceled$javax_swing_event_ChangeEvent','editingStopped$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getCellEditorListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(2),['editingCanceled$javax_swing_event_ChangeEvent','editingStopped$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireEditingStopped$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['editingCanceled$javax_swing_event_ChangeEvent','editingStopped$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(3,1).c$$O,[this]);
(listeners[i + 1]).editingStopped$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'fireEditingCanceled$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(2),['editingCanceled$javax_swing_event_ChangeEvent','editingStopped$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(3,1).c$$O,[this]);
(listeners[i + 1]).editingCanceled$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

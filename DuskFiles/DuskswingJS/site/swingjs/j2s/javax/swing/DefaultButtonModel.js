(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.UIManager','java.awt.event.ItemEvent','java.awt.EventQueue','java.awt.event.ActionEvent','javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent','java.awt.event.ActionListener','java.awt.event.ItemListener']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultButtonModel", null, null, 'javax.swing.ButtonModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stateMask=0;
this.actionCommand=null;
this.group=null;
this.mnemonic=0;
this.changeEvent=null;
this.listenerList=Clazz.new_($I$(1,1));
this.menuItem=false;
},1);

C$.$fields$=[['Z',['menuItem'],'I',['stateMask','mnemonic'],'S',['actionCommand'],'O',['group','javax.swing.ButtonGroup','changeEvent','javax.swing.event.ChangeEvent','listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.stateMask=0;
this.setEnabled$Z(true);
}, 1);

Clazz.newMeth(C$, 'setActionCommand$S',  function (actionCommand) {
this.actionCommand=actionCommand;
});

Clazz.newMeth(C$, 'getActionCommand$',  function () {
return this.actionCommand;
});

Clazz.newMeth(C$, 'isArmed$',  function () {
return (this.stateMask & 1) != 0;
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return (this.stateMask & 2) != 0;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.stateMask & 8) != 0;
});

Clazz.newMeth(C$, 'isPressed$',  function () {
return (this.stateMask & 4) != 0;
});

Clazz.newMeth(C$, 'isRollover$',  function () {
return (this.stateMask & 16) != 0;
});

Clazz.newMeth(C$, 'setArmed$Z',  function (b) {
if (this.isMenuItem$() && $I$(2).getBoolean$O("MenuItem.disabledAreNavigable") ) {
if ((this.isArmed$() == b )) {
return;
}} else {
if ((this.isArmed$() == b ) || !this.isEnabled$() ) {
return;
}}if (b) {
this.stateMask|=1;
} else {
this.stateMask&=~1;
}this.fireStateChanged$();
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
if (this.isEnabled$() == b ) {
return;
}if (b) {
this.stateMask|=8;
} else {
this.stateMask&=~8;
this.stateMask&=~1;
this.stateMask&=~4;
}this.fireStateChanged$();
});

Clazz.newMeth(C$, 'setSelected$Z',  function (b) {
if (!this.setStateNoFire$Z(b)) return;
this.fireItemStateChanged$java_awt_event_ItemEvent(Clazz.new_($I$(3,1).c$$java_awt_ItemSelectable$I$O$I,[this, 701, this, b ? 1 : 2]));
this.fireStateChanged$();
});

Clazz.newMeth(C$, 'setStateNoFire$Z',  function (b) {
if (this.isSelected$() == b ) {
return false;
}if (b) {
this.stateMask|=2;
} else {
this.stateMask&=~2;
}return true;
});

Clazz.newMeth(C$, 'setPressed$Z',  function (b) {
if ((this.isPressed$() == b ) || !this.isEnabled$() ) {
return;
}if (b) {
this.stateMask|=4;
} else {
this.stateMask&=~4;
}if (!this.isPressed$() && this.isArmed$() ) {
var modifiers=0;
var currentEvent=$I$(4).getCurrentEvent$();
if (Clazz.instanceOf(currentEvent, "java.awt.event.InputEvent")) {
modifiers=(currentEvent).getModifiers$();
} else if (Clazz.instanceOf(currentEvent, "java.awt.event.ActionEvent")) {
modifiers=(currentEvent).getModifiers$();
}this.fireActionPerformed$java_awt_event_ActionEvent(Clazz.new_([this, 1001, this.getActionCommand$(), $I$(4).getMostRecentEventTime$(), modifiers],$I$(5,1).c$$O$I$S$J$I));
}this.fireStateChanged$();
});

Clazz.newMeth(C$, 'setRollover$Z',  function (b) {
if ((this.isRollover$() == b ) || !this.isEnabled$() ) {
return;
}if (b) {
this.stateMask|=16;
} else {
this.stateMask&=~16;
}this.fireStateChanged$();
});

Clazz.newMeth(C$, 'setMnemonic$I',  function (key) {
this.mnemonic=key;
this.fireStateChanged$();
});

Clazz.newMeth(C$, 'getMnemonic$',  function () {
return this.mnemonic;
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(7,1).c$$O,[this]);
(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(8),['actionPerformed$java_awt_event_ActionEvent']), l);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(8),['actionPerformed$java_awt_event_ActionEvent']), l);
});

Clazz.newMeth(C$, 'getActionListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(8),['actionPerformed$java_awt_event_ActionEvent']));
});

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(8),['actionPerformed$java_awt_event_ActionEvent']) ) {
(listeners[i + 1]).actionPerformed$java_awt_event_ActionEvent(e);
}}
});

Clazz.newMeth(C$, 'addItemListener$java_awt_event_ItemListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(9),['itemStateChanged$java_awt_event_ItemEvent']), l);
});

Clazz.newMeth(C$, 'removeItemListener$java_awt_event_ItemListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(9),['itemStateChanged$java_awt_event_ItemEvent']), l);
});

Clazz.newMeth(C$, 'getItemListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(9),['itemStateChanged$java_awt_event_ItemEvent']));
});

Clazz.newMeth(C$, 'fireItemStateChanged$java_awt_event_ItemEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(9),['itemStateChanged$java_awt_event_ItemEvent']) ) {
(listeners[i + 1]).itemStateChanged$java_awt_event_ItemEvent(e);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'getSelectedObjects$',  function () {
return null;
});

Clazz.newMeth(C$, 'setGroup$javax_swing_ButtonGroup',  function (group) {
this.group=group;
});

Clazz.newMeth(C$, 'getGroup$',  function () {
return this.group;
});

Clazz.newMeth(C$, 'isMenuItem$',  function () {
return this.menuItem;
});

Clazz.newMeth(C$, 'setMenuItem$Z',  function (menuItem) {
this.menuItem=menuItem;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

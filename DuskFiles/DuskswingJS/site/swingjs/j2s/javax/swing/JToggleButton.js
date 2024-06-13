(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.awt.event.ItemEvent','java.awt.EventQueue','java.awt.event.ActionEvent',['javax.swing.JToggleButton','.ToggleButtonModel']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JToggleButton", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.AbstractButton');
C$.$classes$=[['ToggleButtonModel',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon$Z',  function (icon, selected) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, icon, selected]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (text, selected) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, null, selected]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action',  function (a) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(a);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon',  function (text, icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon$Z',  function (text, icon, selected) {
Clazz.super_(C$, this);
this.setModel$();
this.model.setSelected$Z(selected);
this.init$S$javax_swing_Icon(text, icon);
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$, 'setModel$',  function () {
this.setModel$javax_swing_ButtonModel(Clazz.new_($I$(4,1)));
});

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "ToggleButtonUI";
});

Clazz.newMeth(C$, 'shouldUpdateSelectedStateFromAction$',  function () {
return true;
});

Clazz.newMeth(C$, 'paramString$',  function () {
return C$.superclazz.prototype.paramString$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JToggleButton, "ToggleButtonModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.DefaultButtonModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'isSelected$',  function () {
return (this.stateMask & 2) != 0;
});

Clazz.newMeth(C$, 'setSelected$Z',  function (b) {
var group=this.getGroup$();
if (group != null ) {
group.setSelected$javax_swing_ButtonModel$Z(this, b);
b=group.isSelected$javax_swing_ButtonModel(this);
}if (this.isSelected$() == b ) {
return;
}if (b) {
this.stateMask|=2;
} else {
this.stateMask&=~2;
}this.fireStateChanged$();
this.fireItemStateChanged$java_awt_event_ItemEvent(Clazz.new_([this, 701, this, this.isSelected$() ? 1 : 2],$I$(1,1).c$$java_awt_ItemSelectable$I$O$I));
});

Clazz.newMeth(C$, 'setPressed$Z',  function (b) {
if ((this.isPressed$() == b ) || !this.isEnabled$() ) {
return;
}if (!b && this.isArmed$() ) {
this.setSelected$Z(!this.isSelected$());
}if (b) {
this.stateMask|=4;
} else {
this.stateMask&=~4;
}this.fireStateChanged$();
if (!this.isPressed$() && this.isArmed$() ) {
var modifiers=0;
var currentEvent=$I$(2).getCurrentEvent$();
if (Clazz.instanceOf(currentEvent, "java.awt.event.InputEvent")) {
modifiers=(currentEvent).getModifiers$();
} else if (Clazz.instanceOf(currentEvent, "java.awt.event.ActionEvent")) {
modifiers=(currentEvent).getModifiers$();
}this.fireActionPerformed$java_awt_event_ActionEvent(Clazz.new_([this, 1001, this.getActionCommand$(), $I$(2).getMostRecentEventTime$(), modifiers],$I$(3,1).c$$O$I$S$J$I));
}});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

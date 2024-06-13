(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.AbstractAction','javax.swing.Action',['javax.swing.JTextField','.NotifyAction'],['javax.swing.text.DefaultEditorKit','.PassThroughAction'],['javax.swing.text.JTextComponent','.JSPlainDocument'],'javax.swing.text.PlainDocument','java.awt.event.ActionListener','java.awt.EventQueue','java.awt.event.ActionEvent',['javax.swing.JTextField','.TextFieldActionPropertyChangeListener'],'javax.swing.text.TextAction']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTextField", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.JTextComponent', 'javax.swing.SwingConstants');
C$.$classes$=[['TextFieldActionPropertyChangeListener',10],['NotifyAction',8],['ScrollRepainter',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.horizontalAlignment=10;
},1);

C$.$fields$=[['I',['horizontalAlignment','columns','columnWidth'],'S',['command'],'O',['action','javax.swing.Action','actionPropertyChangeListener','java.beans.PropertyChangeListener']]
,['O',['defaultActions','javax.swing.Action[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_text_Document$S$I.apply(this, [null, null, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$javax_swing_text_Document$S$I.apply(this, [null, text, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (columns) {
C$.c$$javax_swing_text_Document$S$I.apply(this, [null, null, columns]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (text, columns) {
C$.c$$javax_swing_text_Document$S$I.apply(this, [null, text, columns]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Document$S$I',  function (doc, text, columns) {
Clazz.super_(C$, this);
if (columns < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["columns less than zero."]);
}this.columns=columns;
if (doc == null ) {
doc=this.createDefaultModel$();
} else if (doc === "null" ) {
doc=Clazz.new_($I$(5,1),[this, null]);
}this.setDocument$javax_swing_text_Document(doc);
if (text != null ) {
this.setText$S(text);
}}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "TextFieldUI";
});

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document',  function (doc) {
if (doc != null ) {
doc.putProperty$O$O("filterNewlines", Boolean.TRUE);
}C$.superclazz.prototype.setDocument$javax_swing_text_Document.apply(this, [doc]);
});

Clazz.newMeth(C$, 'isValidateRoot$',  function () {
var parent=this.getParent$();
if (Clazz.instanceOf(parent, "javax.swing.JViewport")) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getHorizontalAlignment$',  function () {
return this.horizontalAlignment;
});

Clazz.newMeth(C$, 'setHorizontalAlignment$I',  function (alignment) {
if (alignment == this.horizontalAlignment) return;
var oldValue=this.horizontalAlignment;
if ((alignment == 2) || (alignment == 0) || (alignment == 4) || (alignment == 10) || (alignment == 11)  ) {
this.horizontalAlignment=alignment;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["horizontalAlignment"]);
}this.firePropertyChange$S$I$I("horizontalAlignment", oldValue, this.horizontalAlignment);
this.invalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'createDefaultModel$',  function () {
return Clazz.new_($I$(6,1));
});

Clazz.newMeth(C$, 'getColumns$',  function () {
return this.columns;
});

Clazz.newMeth(C$, 'setColumns$I',  function (columns) {
var oldVal=this.columns;
if (columns < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["columns less than zero."]);
}if (columns != oldVal) {
this.columns=columns;
this.invalidate$();
}});

Clazz.newMeth(C$, 'getColumnWidth$',  function () {
if (this.columnWidth == 0) {
var metrics=this.getFontMetrics$java_awt_Font(this.getFont$());
this.columnWidth=metrics.charWidth$C("m");
}return this.columnWidth;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.getPrefSizeJTF$();
});

Clazz.newMeth(C$, 'getPrefSizeJTF$',  function () {
return this.getPrefSizeJTF$I(this.columns);
});

Clazz.newMeth(C$, 'getPrefSizeJTF$I',  function (columns) {
var size=(!this.isPreferredSizeSet$() && this.ui != null   ? this.ui.getPreferredSize$javax_swing_JComponent(this) : null);
if (size == null ) size=C$.superclazz.prototype.preferredSize$.apply(this, []);
if (columns != 0) {
size.width=this.getJ2SWidth$I(columns);
}return size;
});

Clazz.newMeth(C$, 'getJ2SWidth$I',  function (columns) {
var insets=this.getInsets$();
return columns * this.getColumnWidth$() + insets.left + insets.right;
});

Clazz.newMeth(C$, 'getMinimumSizeJTF$I',  function (columns) {
var size=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
if (columns != 0) {
size.width=this.getJ2SWidth$I(columns);
}return size;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [f]);
this.columnWidth=0;
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(7),['actionPerformed$java_awt_event_ActionEvent']), l);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
if ((l != null ) && (this.getAction$() === l ) ) {
this.setAction$javax_swing_Action(null);
} else {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(7),['actionPerformed$java_awt_event_ActionEvent']), l);
}});

Clazz.newMeth(C$, 'getActionListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(7),['actionPerformed$java_awt_event_ActionEvent']));
});

Clazz.newMeth(C$, 'fireActionPerformed$',  function () {
var listeners=this.listenerList.getListenerList$();
var modifiers=0;
var currentEvent=$I$(8).getCurrentEvent$();
if (Clazz.instanceOf(currentEvent, "java.awt.event.InputEvent")) {
modifiers=(currentEvent).getModifiers$();
} else if (Clazz.instanceOf(currentEvent, "java.awt.event.ActionEvent")) {
modifiers=(currentEvent).getModifiers$();
}var e=Clazz.new_([this, 1001, (this.command != null ) ? this.command : this.getText$(), $I$(8).getMostRecentEventTime$(), modifiers],$I$(9,1).c$$O$I$S$J$I);
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['actionPerformed$java_awt_event_ActionEvent']) ) {
(listeners[i + 1]).actionPerformed$java_awt_event_ActionEvent(e);
}}
});

Clazz.newMeth(C$, 'setActionCommand$S',  function (command) {
this.command=command;
});

Clazz.newMeth(C$, 'setAction$javax_swing_Action',  function (a) {
var oldValue=this.getAction$();
if (this.action == null  || !this.action.equals$O(a) ) {
this.action=a;
if (oldValue != null ) {
this.removeActionListener$java_awt_event_ActionListener(oldValue);
oldValue.removePropertyChangeListener$java_beans_PropertyChangeListener(this.actionPropertyChangeListener);
this.actionPropertyChangeListener=null;
}this.configurePropertiesFromAction$javax_swing_Action(this.action);
if (this.action != null ) {
if (!p$1.isListener$Class$java_awt_event_ActionListener.apply(this, [Clazz.getClass($I$(7),['actionPerformed$java_awt_event_ActionEvent']), this.action])) {
this.addActionListener$java_awt_event_ActionListener(this.action);
}this.actionPropertyChangeListener=this.createActionPropertyChangeListener$javax_swing_Action(this.action);
this.action.addPropertyChangeListener$java_beans_PropertyChangeListener(this.actionPropertyChangeListener);
}this.firePropertyChange$S$O$O("action", oldValue, this.action);
}});

Clazz.newMeth(C$, 'isListener$Class$java_awt_event_ActionListener',  function (c, a) {
var isListener=false;
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === c  && listeners[i + 1] === a  ) {
isListener=true;
}}
return isListener;
}, p$1);

Clazz.newMeth(C$, 'getAction$',  function () {
return this.action;
});

Clazz.newMeth(C$, 'configurePropertiesFromAction$javax_swing_Action',  function (a) {
$I$(1).setEnabledFromAction$javax_swing_JComponent$javax_swing_Action(this, a);
$I$(1).setToolTipTextFromAction$javax_swing_JComponent$javax_swing_Action(this, a);
p$1.setActionCommandFromAction$javax_swing_Action.apply(this, [a]);
});

Clazz.newMeth(C$, 'actionPropertyChanged$javax_swing_Action$S',  function (action, propertyName) {
if (propertyName == "ActionCommandKey") {
p$1.setActionCommandFromAction$javax_swing_Action.apply(this, [action]);
} else if (propertyName === "enabled" ) {
$I$(1).setEnabledFromAction$javax_swing_JComponent$javax_swing_Action(this, action);
} else if (propertyName == "ShortDescription") {
$I$(1).setToolTipTextFromAction$javax_swing_JComponent$javax_swing_Action(this, action);
}});

Clazz.newMeth(C$, 'setActionCommandFromAction$javax_swing_Action',  function (action) {
this.setActionCommand$S((action == null ) ? null : action.getValue$S("ActionCommandKey"));
}, p$1);

Clazz.newMeth(C$, 'createActionPropertyChangeListener$javax_swing_Action',  function (a) {
return Clazz.new_($I$(10,1).c$$javax_swing_JTextField$javax_swing_Action,[this, a]);
});

Clazz.newMeth(C$, 'getActions$',  function () {
return $I$(11,"augmentList$javax_swing_ActionA$javax_swing_ActionA",[C$.superclazz.prototype.getActions$.apply(this, []), C$.defaultActions]);
});

Clazz.newMeth(C$, 'postActionEvent$',  function () {
this.fireActionPerformed$();
});

Clazz.newMeth(C$, 'hasActionListener$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['actionPerformed$java_awt_event_ActionEvent']) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var horizontalAlignmentString;
if (this.horizontalAlignment == 2) {
horizontalAlignmentString="LEFT";
} else if (this.horizontalAlignment == 0) {
horizontalAlignmentString="CENTER";
} else if (this.horizontalAlignment == 4) {
horizontalAlignmentString="RIGHT";
} else if (this.horizontalAlignment == 10) {
horizontalAlignmentString="LEADING";
} else if (this.horizontalAlignment == 11) {
horizontalAlignmentString="TRAILING";
} else horizontalAlignmentString="";
var commandString=(this.command != null  ? this.command : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",columns=" + this.columns + ",columnWidth=" + this.columnWidth + ",command=" + commandString + ",horizontalAlignment=" + horizontalAlignmentString ;
});

C$.$static$=function(){C$.$static$=0;
C$.defaultActions=Clazz.array($I$(2), -1, [Clazz.new_($I$(3,1)), Clazz.new_($I$(4,1))]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextField, "TextFieldActionPropertyChangeListener", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.ActionPropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_JTextField$javax_swing_Action',  function (tf, a) {
;C$.superclazz.c$$javax_swing_JComponent$javax_swing_Action.apply(this,[tf, a]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['actionPropertyChanged$javax_swing_JTextField$javax_swing_Action$java_beans_PropertyChangeEvent','actionPropertyChanged$javax_swing_JComponent$javax_swing_Action$java_beans_PropertyChangeEvent'],  function (textField, action, e) {
if ($I$(1).shouldReconfigure$java_beans_PropertyChangeEvent(e)) {
textField.configurePropertiesFromAction$javax_swing_Action(action);
} else {
textField.actionPropertyChanged$javax_swing_Action$S(action, e.getPropertyName$());
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextField, "NotifyAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["notify-field-accept"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var target=e.getSource$();
if (Clazz.instanceOf(target, "javax.swing.JTextField")) {
var field=target;
field.postActionEvent$();
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
var target=this.getFocusedComponent$();
if (Clazz.instanceOf(target, "javax.swing.JTextField")) {
return (target).hasActionListener$();
}return false;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTextField, "ScrollRepainter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['java.awt.JSComponent'].秘repaint$.apply(this.b$['java.awt.JSComponent'], []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

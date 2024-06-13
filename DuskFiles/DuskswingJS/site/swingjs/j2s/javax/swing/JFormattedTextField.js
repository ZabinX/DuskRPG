(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},I$=[[0,'javax.swing.text.DocumentFilter','javax.swing.Action',['javax.swing.JFormattedTextField','.CommitAction'],['javax.swing.JFormattedTextField','.CancelAction'],'javax.swing.text.DefaultFormatterFactory',['javax.swing.JFormattedTextField','.FocusLostHandler'],'javax.swing.text.TextAction',['javax.swing.JFormattedTextField','.DocumentHandler'],'javax.swing.ActionMap','swingjs.JSUtil','javax.swing.text.NumberFormatter','javax.swing.text.InternationalFormatter','javax.swing.text.DateFormatter','java.text.DecimalFormat','javax.swing.text.DefaultFormatter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JFormattedTextField", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JTextField');
C$.$classes$=[['FocusLostHandler',2],['AbstractFormatterFactory',1033],['AbstractFormatter',1033],['CommitAction',8],['CancelAction',10],['DocumentHandler',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['editValid','edited'],'I',['focusLostBehavior'],'O',['factory','javax.swing.JFormattedTextField.AbstractFormatterFactory','format','javax.swing.JFormattedTextField.AbstractFormatter','value','java.lang.Object','documentListener','javax.swing.event.DocumentListener','textFormatterActionMap','javax.swing.ActionMap','focusLostHandler','javax.swing.JFormattedTextField.FocusLostHandler']]
,['O',['$defaultActions','javax.swing.Action[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_swing_text_Document$S$I.apply(this,[null, null, 0]);C$.$init$.apply(this);
this.updateUI$();
this.enableEvents$J(4);
this.setFocusLostBehavior$I(1);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "FormattedTextFieldUI";
});

Clazz.newMeth(C$, 'c$$O',  function (value) {
C$.c$.apply(this, []);
this.setValue$O(value);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_Format',  function (format) {
C$.c$.apply(this, []);
this.setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(p$1.getDefaultFormatterFactory$O.apply(this, [format]));
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFormattedTextField_AbstractFormatter',  function (formatter) {
C$.c$$javax_swing_JFormattedTextField_AbstractFormatterFactory.apply(this, [Clazz.new_($I$(5,1).c$$javax_swing_JFormattedTextField_AbstractFormatter,[formatter])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFormattedTextField_AbstractFormatterFactory',  function (factory) {
C$.c$.apply(this, []);
this.setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(factory);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JFormattedTextField_AbstractFormatterFactory$O',  function (factory, currentValue) {
C$.c$$O.apply(this, [currentValue]);
this.setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(factory);
}, 1);

Clazz.newMeth(C$, 'setFocusLostBehavior$I',  function (behavior) {
if (behavior != 0 && behavior != 1  && behavior != 3  && behavior != 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["setFocusLostBehavior must be one of: JFormattedTextField.COMMIT, JFormattedTextField.COMMIT_OR_REVERT, JFormattedTextField.PERSIST or JFormattedTextField.REVERT"]);
}this.focusLostBehavior=behavior;
});

Clazz.newMeth(C$, 'getFocusLostBehavior$',  function () {
return this.focusLostBehavior;
});

Clazz.newMeth(C$, 'setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory',  function (tf) {
var oldFactory=this.factory=tf;
this.firePropertyChange$S$O$O("formatterFactory", oldFactory, tf);
p$1.setValue$O$Z$Z.apply(this, [this.getValue$(), true, false]);
});

Clazz.newMeth(C$, 'getFormatterFactory$',  function () {
return this.factory;
});

Clazz.newMeth(C$, 'setFormatter$javax_swing_JFormattedTextField_AbstractFormatter',  function (format) {
var oldFormat=this.format;
if (oldFormat != null ) {
oldFormat.uninstall$();
}p$1.setEditValid$Z.apply(this, [true]);
this.format=format;
if (format != null ) {
format.install$javax_swing_JFormattedTextField(this);
}p$1.setEdited$Z.apply(this, [false]);
this.firePropertyChange$S$O$O("textFormatter", oldFormat, format);
});

Clazz.newMeth(C$, 'getFormatter$',  function () {
return this.format;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (value != null  && this.getFormatterFactory$() == null  ) {
this.setFormatterFactory$javax_swing_JFormattedTextField_AbstractFormatterFactory(p$1.getDefaultFormatterFactory$O.apply(this, [value]));
}p$1.setValue$O$Z$Z.apply(this, [value, true, true]);
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'commitEdit$',  function () {
var format=this.getFormatter$();
if (format != null ) {
p$1.setValue$O$Z$Z.apply(this, [format.stringToValue$S(this.getText$()), false, true]);
}});

Clazz.newMeth(C$, 'setEditValid$Z',  function (isValid) {
if (isValid != this.editValid ) {
this.editValid=isValid;
this.firePropertyChange$S$O$O("editValid", Boolean.valueOf$Z(!isValid), Boolean.valueOf$Z(isValid));
}}, p$1);

Clazz.newMeth(C$, 'isEditValid$',  function () {
return this.editValid;
});

Clazz.newMeth(C$, 'invalidEdit$',  function () {
});

Clazz.newMeth(C$, 'processInputMethodEvent$java_awt_event_InputMethodEvent',  function (e) {
C$.superclazz.prototype.processInputMethodEvent$java_awt_event_InputMethodEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'processFocusEvent$java_awt_event_FocusEvent',  function (e) {
C$.superclazz.prototype.processFocusEvent$java_awt_event_FocusEvent.apply(this, [e]);
if (e.isTemporary$()) {
return;
}if (p$1.isEdited.apply(this, []) && e.getID$() == 1005 ) {
if (this.focusLostHandler == null ) {
this.focusLostHandler=Clazz.new_($I$(6,1),[this, null]);
}this.focusLostHandler.run$();
} else if (!p$1.isEdited.apply(this, [])) {
p$1.setValue$O$Z$Z.apply(this, [this.getValue$(), true, true]);
}});

Clazz.newMeth(C$, 'getActions$',  function () {
return $I$(7,"augmentList$javax_swing_ActionA$javax_swing_ActionA",[C$.superclazz.prototype.getActions$.apply(this, []), C$.$defaultActions]);
});

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document',  function (doc) {
if (this.documentListener != null  && this.getDocument$() != null  ) {
this.getDocument$().removeDocumentListener$javax_swing_event_DocumentListener(this.documentListener);
}C$.superclazz.prototype.setDocument$javax_swing_text_Document.apply(this, [doc]);
if (this.documentListener == null ) {
this.documentListener=Clazz.new_($I$(8,1),[this, null]);
}doc.addDocumentListener$javax_swing_event_DocumentListener(this.documentListener);
});

Clazz.newMeth(C$, 'setFormatterActions$javax_swing_ActionA',  function (actions) {
if (actions == null ) {
if (this.textFormatterActionMap != null ) {
this.textFormatterActionMap.clear$();
}} else {
if (this.textFormatterActionMap == null ) {
var map=this.getActionMap$();
this.textFormatterActionMap=Clazz.new_($I$(9,1));
while (map != null ){
var parent=map.getParent$();
if (Clazz.instanceOf(parent, "javax.swing.plaf.UIResource") || parent == null  ) {
map.setParent$javax_swing_ActionMap(this.textFormatterActionMap);
this.textFormatterActionMap.setParent$javax_swing_ActionMap(parent);
break;
}map=parent;
}
}for (var counter=actions.length - 1; counter >= 0; counter--) {
var key=actions[counter].getValue$S("Name");
if (key != null ) {
this.textFormatterActionMap.put$O$javax_swing_Action(key, actions[counter]);
}}
}}, p$1);

Clazz.newMeth(C$, 'setValue$O$Z$Z',  function (value, createFormat, firePC) {
var oldValue=this.value;
this.value=value;
if (createFormat) {
var factory=this.getFormatterFactory$();
var atf;
if (factory != null ) {
atf=factory.getFormatter$javax_swing_JFormattedTextField(this);
} else {
atf=null;
}this.setFormatter$javax_swing_JFormattedTextField_AbstractFormatter(atf);
} else {
p$1.setEditValid$Z.apply(this, [true]);
}p$1.setEdited$Z.apply(this, [false]);
if (firePC) {
this.firePropertyChange$S$O$O("value", oldValue, value);
}}, p$1);

Clazz.newMeth(C$, 'setEdited$Z',  function (edited) {
this.edited=edited;
}, p$1);

Clazz.newMeth(C$, 'isEdited',  function () {
return this.edited;
}, p$1);

Clazz.newMeth(C$, 'getDefaultFormatterFactory$O',  function (type) {
if (Clazz.instanceOf(type, "java.text.DateFormat")) {
$I$(10).notImplemented$S(null);
return null;
}if (Clazz.instanceOf(type, "java.text.NumberFormat")) {
return Clazz.new_([Clazz.new_($I$(11,1).c$$java_text_NumberFormat,[type])],$I$(5,1).c$$javax_swing_JFormattedTextField_AbstractFormatter);
}if (Clazz.instanceOf(type, "java.text.Format")) {
return Clazz.new_([Clazz.new_($I$(12,1).c$$java_text_Format,[type])],$I$(5,1).c$$javax_swing_JFormattedTextField_AbstractFormatter);
}if (Clazz.instanceOf(type, "java.util.Date")) {
return Clazz.new_([Clazz.new_($I$(13,1))],$I$(5,1).c$$javax_swing_JFormattedTextField_AbstractFormatter);
}if (Clazz.instanceOf(type, "java.lang.Number")) {
var displayFormatter=Clazz.new_($I$(11,1));
(displayFormatter).setValueClass$Class(type.getClass$());
var editFormatter=Clazz.new_([Clazz.new_($I$(14,1).c$$S,["#.#"])],$I$(11,1).c$$java_text_NumberFormat);
(editFormatter).setValueClass$Class(type.getClass$());
return Clazz.new_($I$(5,1).c$$javax_swing_JFormattedTextField_AbstractFormatter$javax_swing_JFormattedTextField_AbstractFormatter$javax_swing_JFormattedTextField_AbstractFormatter,[displayFormatter, displayFormatter, editFormatter]);
}return Clazz.new_([Clazz.new_($I$(15,1))],$I$(5,1).c$$javax_swing_JFormattedTextField_AbstractFormatter);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$defaultActions=Clazz.array($I$(2), -1, [Clazz.new_($I$(3,1)), Clazz.new_($I$(4,1))]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFormattedTextField, "FocusLostHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var fb=this.b$['javax.swing.JFormattedTextField'].getFocusLostBehavior$.apply(this.b$['javax.swing.JFormattedTextField'], []);
if (fb == 0 || fb == 1 ) {
try {
this.b$['javax.swing.JFormattedTextField'].commitEdit$.apply(this.b$['javax.swing.JFormattedTextField'], []);
p$1.setValue$O$Z$Z.apply(this.b$['javax.swing.JFormattedTextField'], [this.b$['javax.swing.JFormattedTextField'].getValue$.apply(this.b$['javax.swing.JFormattedTextField'], []), true, true]);
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.text.ParseException")){
if (fb == 1) {
p$1.setValue$O$Z$Z.apply(this.b$['javax.swing.JFormattedTextField'], [this.b$['javax.swing.JFormattedTextField'].getValue$.apply(this.b$['javax.swing.JFormattedTextField'], []), true, true]);
}} else {
throw pe;
}
}
} else if (fb == 2) {
p$1.setValue$O$Z$Z.apply(this.b$['javax.swing.JFormattedTextField'], [this.b$['javax.swing.JFormattedTextField'].getValue$.apply(this.b$['javax.swing.JFormattedTextField'], []), true, true]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFormattedTextField, "AbstractFormatterFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFormattedTextField, "AbstractFormatter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ftf','javax.swing.JFormattedTextField']]]

Clazz.newMeth(C$, 'install$javax_swing_JFormattedTextField',  function (ftf) {
if (this.ftf != null ) {
this.uninstall$();
}this.ftf=ftf;
if (ftf != null ) {
try {
ftf.setText$S(this.valueToString$O(ftf.getValue$()));
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.text.ParseException")){
ftf.setText$S("");
this.setEditValid$Z(false);
} else {
throw pe;
}
}
p$2.installDocumentFilter$javax_swing_text_DocumentFilter.apply(this, [this.getDocumentFilter$()]);
p$1.setFormatterActions$javax_swing_ActionA.apply(ftf, [this.getActions$()]);
}});

Clazz.newMeth(C$, 'uninstall$',  function () {
if (this.ftf != null ) {
p$2.installDocumentFilter$javax_swing_text_DocumentFilter.apply(this, [null]);
p$1.setFormatterActions$javax_swing_ActionA.apply(this.ftf, [null]);
}});

Clazz.newMeth(C$, 'getFormattedTextField$',  function () {
return this.ftf;
});

Clazz.newMeth(C$, 'invalidEdit$',  function () {
var ftf=this.getFormattedTextField$();
if (ftf != null ) {
ftf.invalidEdit$();
}});

Clazz.newMeth(C$, 'setEditValid$Z',  function (valid) {
var ftf=this.getFormattedTextField$();
if (ftf != null ) {
p$1.setEditValid$Z.apply(ftf, [valid]);
}});

Clazz.newMeth(C$, 'getActions$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDocumentFilter$',  function () {
return null;
});

Clazz.newMeth(C$, 'getNavigationFilter$',  function () {
return null;
});

Clazz.newMeth(C$, 'clone$',  function () {
var formatter=Clazz.clone(this);
formatter.ftf=null;
return formatter;
});

Clazz.newMeth(C$, 'installDocumentFilter$javax_swing_text_DocumentFilter',  function (filter) {
var ftf=this.getFormattedTextField$();
if (ftf != null ) {
var doc=ftf.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).setDocumentFilter$javax_swing_text_DocumentFilter(filter);
}doc.putProperty$O$O(Clazz.getClass($I$(1)), null);
}}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFormattedTextField, "CommitAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.JTextField','.NotifyAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var target=this.getFocusedComponent$();
if (Clazz.instanceOf(target, "javax.swing.JFormattedTextField")) {
try {
(target).commitEdit$();
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.text.ParseException")){
(target).invalidEdit$();
return;
} else {
throw pe;
}
}
}C$.superclazz.prototype.actionPerformed$java_awt_event_ActionEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
var target=this.getFocusedComponent$();
if (Clazz.instanceOf(target, "javax.swing.JFormattedTextField")) {
var ftf=target;
if (!p$1.isEdited.apply(ftf, [])) {
return false;
}return true;
}return C$.superclazz.prototype.isEnabled$.apply(this, []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFormattedTextField, "CancelAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["reset-field-edit"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var target=this.getFocusedComponent$();
if (Clazz.instanceOf(target, "javax.swing.JFormattedTextField")) {
var ftf=target;
ftf.setValue$O(ftf.getValue$());
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
var target=this.getFocusedComponent$();
if (Clazz.instanceOf(target, "javax.swing.JFormattedTextField")) {
var ftf=target;
if (!p$1.isEdited.apply(ftf, [])) {
return false;
}return true;
}return C$.superclazz.prototype.isEnabled$.apply(this, []);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFormattedTextField, "DocumentHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.DocumentListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
p$1.setEdited$Z.apply(this.b$['javax.swing.JFormattedTextField'], [true]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
p$1.setEdited$Z.apply(this.b$['javax.swing.JFormattedTextField'], [true]);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},I$=[[0,'javax.swing.Timer','javax.swing.UIManager',['java.text.DateFormat','.Field'],'javax.swing.SwingUtilities','java.awt.KeyboardFocusManager','swingjs.plaf.JSSpinnerUI','java.awt.Dimension','sun.swing.DefaultLookup',['swingjs.plaf.JSSpinnerUI','.ArrowButtonHandler'],'javax.swing.LookAndFeel',['swingjs.plaf.JSSpinnerUI','.Handler'],'swingjs.plaf.BasicArrowButton','javax.swing.border.CompoundBorder','swingjs.plaf.LazyActionMap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSSpinnerUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.$classes$=[['ArrowButtonHandler',10],['Handler',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['spinner','javax.swing.JSpinner','handler','swingjs.plaf.JSSpinnerUI.Handler']]
,['O',['nextButtonHandler','swingjs.plaf.JSSpinnerUI.ArrowButtonHandler','+previousButtonHandler','zeroSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
this.spinner=this.jc;
return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, 'createUI$javax_swing_JComponent',  function (c) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'maybeAdd$java_awt_Component$S',  function (c, s) {
if (c != null ) {
this.spinner.add$java_awt_Component$O(c, s);
}}, p$3);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.spinner=c;
this.installDefaults$();
this.installListeners$();
p$3.maybeAdd$java_awt_Component$S.apply(this, [this.createNextButton$(), "Next"]);
p$3.maybeAdd$java_awt_Component$S.apply(this, [this.createPreviousButton$(), "Previous"]);
p$3.maybeAdd$java_awt_Component$S.apply(this, [this.createEditor$(), "Editor"]);
p$3.updateEnabledState.apply(this, []);
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallDefaults$();
this.uninstallListeners$();
this.spinner=null;
c.removeAll$();
});

Clazz.newMeth(C$, 'installListeners$',  function () {
this.spinner.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
if ($I$(8).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.spinner, this, "Spinner.disableOnBoundaryValues", false)) {
this.spinner.addChangeListener$javax_swing_event_ChangeListener(p$3.getHandler.apply(this, []));
}var editor=this.spinner.getEditor$();
if (editor != null  && Clazz.instanceOf(editor, "javax.swing.JSpinner.DefaultEditor") ) {
var tf=(editor).getTextField$();
if (tf != null ) {
tf.addFocusListener$java_awt_event_FocusListener(C$.nextButtonHandler);
tf.addFocusListener$java_awt_event_FocusListener(C$.previousButtonHandler);
}}});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
this.spinner.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
this.spinner.removeChangeListener$javax_swing_event_ChangeListener(this.handler);
var editor=this.spinner.getEditor$();
p$3.removeEditorBorderListener$javax_swing_JComponent.apply(this, [editor]);
if (Clazz.instanceOf(editor, "javax.swing.JSpinner.DefaultEditor")) {
var tf=(editor).getTextField$();
if (tf != null ) {
tf.removeFocusListener$java_awt_event_FocusListener(C$.nextButtonHandler);
tf.removeFocusListener$java_awt_event_FocusListener(C$.previousButtonHandler);
}}this.handler=null;
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
this.spinner.setLayout$java_awt_LayoutManager(this.createLayout$());
$I$(10).installBorder$javax_swing_JComponent$S(this.spinner, "Spinner.border");
$I$(10).installColorsAndFont$javax_swing_JComponent$S$S$S(this.spinner, "Spinner.background", "Spinner.foreground", "Spinner.font");
$I$(10).installProperty$javax_swing_JComponent$S$O(this.spinner, "opaque", Boolean.TRUE);
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
this.spinner.setLayout$java_awt_LayoutManager(null);
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(11,1));
}return this.handler;
}, p$3);

Clazz.newMeth(C$, 'installNextButtonListeners$java_awt_Component',  function (c) {
p$3.installButtonListeners$java_awt_Component$swingjs_plaf_JSSpinnerUI_ArrowButtonHandler.apply(this, [c, C$.nextButtonHandler]);
});

Clazz.newMeth(C$, 'installPreviousButtonListeners$java_awt_Component',  function (c) {
p$3.installButtonListeners$java_awt_Component$swingjs_plaf_JSSpinnerUI_ArrowButtonHandler.apply(this, [c, C$.previousButtonHandler]);
});

Clazz.newMeth(C$, 'installButtonListeners$java_awt_Component$swingjs_plaf_JSSpinnerUI_ArrowButtonHandler',  function (c, handler) {
if (Clazz.instanceOf(c, "javax.swing.JButton")) {
(c).addActionListener$java_awt_event_ActionListener(handler);
}c.addMouseListener$java_awt_event_MouseListener(handler);
}, p$3);

Clazz.newMeth(C$, 'createLayout$',  function () {
return p$3.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createPreviousButton$',  function () {
var c=p$3.createArrowButton$I.apply(this, [5]);
c.setName$S("Spinner.previousButton");
this.installPreviousButtonListeners$java_awt_Component(c);
return c;
});

Clazz.newMeth(C$, 'createNextButton$',  function () {
var c=p$3.createArrowButton$I.apply(this, [1]);
c.setName$S("Spinner.nextButton");
this.installNextButtonListeners$java_awt_Component(c);
return c;
});

Clazz.newMeth(C$, 'createArrowButton$I',  function (direction) {
var b=Clazz.new_($I$(12,1).c$$I,[direction]);
var buttonBorder=$I$(2).getBorder$O("Spinner.arrowButtonBorder");
if (Clazz.instanceOf(buttonBorder, "javax.swing.plaf.UIResource")) {
b.setBorder$javax_swing_border_Border(Clazz.new_($I$(13,1).c$$javax_swing_border_Border$javax_swing_border_Border,[buttonBorder, null]));
} else {
b.setBorder$javax_swing_border_Border(buttonBorder);
}b.setText$S("\u0000");
b.setInheritsPopupMenu$Z(true);
return b;
}, p$3);

Clazz.newMeth(C$, 'createEditor$',  function () {
var editor=this.spinner.getEditor$();
p$3.maybeRemoveEditorBorder$javax_swing_JComponent.apply(this, [editor]);
p$3.installEditorBorderListener$javax_swing_JComponent.apply(this, [editor]);
editor.setInheritsPopupMenu$Z(true);
p$3.updateEditorAlignment$javax_swing_JComponent.apply(this, [editor]);
return editor;
});

Clazz.newMeth(C$, 'replaceEditor$javax_swing_JComponent$javax_swing_JComponent',  function (oldEditor, newEditor) {
this.spinner.remove$java_awt_Component(oldEditor);
p$3.maybeRemoveEditorBorder$javax_swing_JComponent.apply(this, [newEditor]);
p$3.installEditorBorderListener$javax_swing_JComponent.apply(this, [newEditor]);
newEditor.setInheritsPopupMenu$Z(true);
this.spinner.add$java_awt_Component$O(newEditor, "Editor");
});

Clazz.newMeth(C$, 'updateEditorAlignment$javax_swing_JComponent',  function (editor) {
if (Clazz.instanceOf(editor, "javax.swing.JSpinner.DefaultEditor")) {
var alignment=$I$(2).getInt$O("Spinner.editorAlignment");
var text=(editor).getTextField$();
text.setHorizontalAlignment$I(alignment);
}}, p$3);

Clazz.newMeth(C$, 'maybeRemoveEditorBorder$javax_swing_JComponent',  function (editor) {
if (!$I$(2).getBoolean$O("Spinner.editorBorderPainted")) {
if (Clazz.instanceOf(editor, "javax.swing.JPanel") && editor.getBorder$() == null   && editor.getComponentCount$() > 0 ) {
editor=editor.getComponent$I(0);
}if (editor != null  && Clazz.instanceOf(editor.getBorder$(), "javax.swing.plaf.UIResource") ) {
editor.setBorder$javax_swing_border_Border(null);
}}}, p$3);

Clazz.newMeth(C$, 'installEditorBorderListener$javax_swing_JComponent',  function (editor) {
if (!$I$(2).getBoolean$O("Spinner.editorBorderPainted")) {
if (Clazz.instanceOf(editor, "javax.swing.JPanel") && editor.getBorder$() == null   && editor.getComponentCount$() > 0 ) {
editor=editor.getComponent$I(0);
}if (editor != null  && (editor.getBorder$() == null  || Clazz.instanceOf(editor.getBorder$(), "javax.swing.plaf.UIResource") ) ) {
editor.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
}}}, p$3);

Clazz.newMeth(C$, 'removeEditorBorderListener$javax_swing_JComponent',  function (editor) {
if (!$I$(2).getBoolean$O("Spinner.editorBorderPainted")) {
if (Clazz.instanceOf(editor, "javax.swing.JPanel") && editor.getComponentCount$() > 0 ) {
editor=editor.getComponent$I(0);
}if (editor != null ) {
editor.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
}}}, p$3);

Clazz.newMeth(C$, 'updateEnabledState',  function () {
p$3.updateEnabledState$java_awt_Container$Z.apply(this, [this.spinner, this.spinner.isEnabled$()]);
}, p$3);

Clazz.newMeth(C$, 'updateEnabledState$java_awt_Container$Z',  function (c, enabled) {
for (var counter=c.getComponentCount$() - 1; counter >= 0; counter--) {
var child=c.getComponent$I(counter);
if ($I$(8).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.spinner, this, "Spinner.disableOnBoundaryValues", false)) {
var model=this.spinner.getModel$();
if (child.getName$() === "Spinner.nextButton"  && model.getNextValue$() == null  ) {
child.setEnabled$Z(false);
} else if (child.getName$() === "Spinner.previousButton"  && model.getPreviousValue$() == null  ) {
child.setEnabled$Z(false);
} else {
child.setEnabled$Z(enabled);
}} else {
child.setEnabled$Z(enabled);
}if (Clazz.instanceOf(child, "java.awt.Container")) {
p$3.updateEnabledState$java_awt_Container$Z.apply(this, [child, enabled]);
}}
}, p$3);

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var iMap=p$3.getInputMap$I.apply(this, [1]);
$I$(4).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.spinner, 1, iMap);
$I$(14,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.spinner, Clazz.getClass(C$), "Spinner.actionMap"]);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 1) {
return $I$(8).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.spinner, this, "Spinner.ancestorInputMap");
}return null;
}, p$3);

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$O$javax_swing_Action("increment", C$.nextButtonHandler);
map.put$O$javax_swing_Action("decrement", C$.previousButtonHandler);
}, 1);

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var editor=this.spinner.getEditor$();
var insets=this.spinner.getInsets$();
width=width - insets.left - insets.right ;
height=height - insets.top - insets.bottom ;
if (width >= 0 && height >= 0 ) {
var baseline=editor.getBaseline$I$I(width, height);
if (baseline >= 0) {
return insets.top + baseline;
}}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
return this.spinner.getEditor$().getBaselineResizeBehavior$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
var ui=this;
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JSpinner")) {
var spinner=(e.getSource$());
switch (prop) {
case "editor":
var oldEditor=e.getOldValue$();
var newEditor=e.getNewValue$();
ui.replaceEditor$javax_swing_JComponent$javax_swing_JComponent(oldEditor, newEditor);
p$3.updateEnabledState.apply(ui, []);
if (Clazz.instanceOf(oldEditor, "javax.swing.JSpinner.DefaultEditor")) {
var tf=(oldEditor).getTextField$();
if (tf != null ) {
tf.removeFocusListener$java_awt_event_FocusListener(C$.nextButtonHandler);
tf.removeFocusListener$java_awt_event_FocusListener(C$.previousButtonHandler);
}}if (Clazz.instanceOf(newEditor, "javax.swing.JSpinner.DefaultEditor")) {
var tf=(newEditor).getTextField$();
if (tf != null ) {
if (Clazz.instanceOf(tf.getFont$(), "javax.swing.plaf.UIResource")) {
tf.setFont$java_awt_Font(spinner.getFont$());
}tf.addFocusListener$java_awt_event_FocusListener(C$.nextButtonHandler);
tf.addFocusListener$java_awt_event_FocusListener(C$.previousButtonHandler);
}}break;
case "enabled":
case "model":
p$3.updateEnabledState.apply(ui, []);
break;
case "font":
var editor=spinner.getEditor$();
if (editor != null  && Clazz.instanceOf(editor, "javax.swing.JSpinner.DefaultEditor") ) {
var tf=(editor).getTextField$();
if (tf != null ) {
if (Clazz.instanceOf(tf.getFont$(), "javax.swing.plaf.UIResource")) {
tf.setFont$java_awt_Font(spinner.getFont$());
}}}break;
case "ToolTipText":
p$3.updateToolTipTextForChildren$javax_swing_JComponent.apply(this, [spinner]);
break;
}
} else if (Clazz.instanceOf(e.getSource$(), "javax.swing.JComponent")) {
var c=e.getSource$();
if ((Clazz.instanceOf(c.getParent$(), "javax.swing.JPanel")) && (Clazz.instanceOf(c.getParent$().getParent$(), "javax.swing.JSpinner")) && "border".equals$O(prop)  ) {
p$3.maybeRemoveEditorBorder$javax_swing_JComponent.apply(ui, [c]);
}}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'updateToolTipTextForChildren$javax_swing_JComponent',  function (spinner) {
var toolTipText=spinner.getToolTipText$();
var children=spinner.getComponents$();
for (var i=0; i < children.length; i++) {
if (Clazz.instanceOf(children[i], "javax.swing.JSpinner.DefaultEditor")) {
var tf=(children[i]).getTextField$();
if (tf != null ) {
tf.setToolTipText$S(toolTipText);
}} else if (Clazz.instanceOf(children[i], "javax.swing.JComponent")) {
(children[i]).setToolTipText$S(spinner.getToolTipText$());
}}
}, p$3);

C$.$static$=function(){C$.$static$=0;
C$.nextButtonHandler=Clazz.new_($I$(9,1).c$$S$Z,["increment", true]);
C$.previousButtonHandler=Clazz.new_($I$(9,1).c$$S$Z,["decrement", false]);
C$.zeroSize=Clazz.new_($I$(7,1).c$$I$I,[0, 0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSpinnerUI, "ArrowButtonHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.AbstractAction', ['java.awt.event.FocusListener', 'java.awt.event.MouseListener', 'javax.swing.plaf.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.spinner=null;
this.arrowButton=null;
},1);

C$.$fields$=[['Z',['isNext'],'O',['autoRepeatTimer','javax.swing.Timer','spinner','javax.swing.JSpinner','arrowButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$$S$Z',  function (name, isNext) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.isNext=isNext;
this.autoRepeatTimer=Clazz.new_($I$(1,1).c$$I$java_awt_event_ActionListener,[60, this]);
this.autoRepeatTimer.setInitialDelay$I(300);
}, 1);

Clazz.newMeth(C$, 'eventToSpinner$java_awt_AWTEvent',  function (e) {
var src=e.getSource$();
while ((Clazz.instanceOf(src, "java.awt.Component")) && !(Clazz.instanceOf(src, "javax.swing.JSpinner")) ){
src=(src).getParent$();
}
return (Clazz.instanceOf(src, "javax.swing.JSpinner")) ? src : null;
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var spinner=this.spinner;
if (!(Clazz.instanceOf(e.getSource$(), "javax.swing.Timer"))) {
spinner=p$1.eventToSpinner$java_awt_AWTEvent.apply(this, [e]);
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JButton")) {
this.arrowButton=e.getSource$();
}} else {
if (this.arrowButton != null  && !this.arrowButton.getModel$().isPressed$()  && this.autoRepeatTimer.isRunning$() ) {
this.autoRepeatTimer.stop$();
spinner=null;
this.arrowButton=null;
}}if (spinner != null ) {
try {
var calendarField=p$1.getCalendarField$javax_swing_JSpinner.apply(this, [spinner]);
spinner.commitEdit$();
if (calendarField != -1) {
(spinner.getModel$()).setCalendarField$I(calendarField);
}var value=(this.isNext) ? spinner.getNextValue$() : spinner.getPreviousValue$();
if (value != null ) {
spinner.setValue$O(value);
p$1.select$javax_swing_JSpinner.apply(this, [spinner]);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var iae = e$$;
{
$I$(2).getLookAndFeel$().provideErrorFeedback$java_awt_Component(spinner);
}
} else if (Clazz.exceptionOf(e$$,"java.text.ParseException")){
var pe = e$$;
{
$I$(2).getLookAndFeel$().provideErrorFeedback$java_awt_Component(spinner);
}
} else {
throw e$$;
}
}
}});

Clazz.newMeth(C$, 'select$javax_swing_JSpinner',  function (spinner) {
var editor=spinner.getEditor$();
if (Clazz.instanceOf(editor, "javax.swing.JSpinner.DateEditor")) {
var dateEditor=editor;
var ftf=dateEditor.getTextField$();
var format=dateEditor.getFormat$();
var value;
if (format != null  && (value=spinner.getValue$()) != null  ) {
var model=dateEditor.getModel$();
var field=$I$(3,"ofCalendarField$I",[model.getCalendarField$()]);
if (field != null ) {
try {
var iterator=format.formatToCharacterIterator$O(value);
if (!p$1.select$javax_swing_JFormattedTextField$java_text_AttributedCharacterIterator$java_text_DateFormat_Field.apply(this, [ftf, iterator, field]) && field === $I$(3).HOUR0  ) {
p$1.select$javax_swing_JFormattedTextField$java_text_AttributedCharacterIterator$java_text_DateFormat_Field.apply(this, [ftf, iterator, $I$(3).HOUR1]);
}} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
} else {
throw iae;
}
}
}}}}, p$1);

Clazz.newMeth(C$, 'select$javax_swing_JFormattedTextField$java_text_AttributedCharacterIterator$java_text_DateFormat_Field',  function (ftf, iterator, field) {
var max=ftf.getDocument$().getLength$();
iterator.first$();
do {
var attrs=iterator.getAttributes$();
if (attrs != null  && attrs.containsKey$O(field) ) {
var start=iterator.getRunStart$java_text_AttributedCharacterIterator_Attribute(field);
var end=iterator.getRunLimit$java_text_AttributedCharacterIterator_Attribute(field);
if (start != -1 && end != -1  && start <= max  && end <= max ) {
ftf.select$I$I(start, end);
}return true;
}} while (iterator.next$() != "\uffff");
return false;
}, p$1);

Clazz.newMeth(C$, 'getCalendarField$javax_swing_JSpinner',  function (spinner) {
var editor=spinner.getEditor$();
if (Clazz.instanceOf(editor, "javax.swing.JSpinner.DateEditor")) {
var dateEditor=editor;
var ftf=dateEditor.getTextField$();
var start=ftf.getSelectionStart$();
var formatter=ftf.getFormatter$();
if (Clazz.instanceOf(formatter, "javax.swing.text.InternationalFormatter")) {
var fields=(formatter).getFields$I(start);
for (var counter=0; counter < fields.length; counter++) {
if (Clazz.instanceOf(fields[counter], "java.text.DateFormat.Field")) {
var calendarField;
if (fields[counter] === $I$(3).HOUR1 ) {
calendarField=10;
} else {
calendarField=(fields[counter]).getCalendarField$();
}if (calendarField != -1) {
return calendarField;
}}}
}}return -1;
}, p$1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(4).isLeftMouseButton$java_awt_event_MouseEvent(e) && e.getComponent$().isEnabled$() ) {
this.spinner=p$1.eventToSpinner$java_awt_AWTEvent.apply(this, [e]);
this.autoRepeatTimer.start$();
p$1.focusSpinnerIfNecessary.apply(this, []);
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.autoRepeatTimer.stop$();
this.arrowButton=null;
this.spinner=null;
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (this.spinner != null  && !this.autoRepeatTimer.isRunning$()  && this.spinner === p$1.eventToSpinner$java_awt_AWTEvent.apply(this, [e])  ) {
this.autoRepeatTimer.start$();
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
if (this.autoRepeatTimer.isRunning$()) {
this.autoRepeatTimer.stop$();
}});

Clazz.newMeth(C$, 'focusSpinnerIfNecessary',  function () {
var fo=$I$(5).getCurrentKeyboardFocusManager$().getFocusOwner$();
if (this.spinner.isRequestFocusEnabled$() && (fo == null  || !$I$(4).isDescendingFrom$java_awt_Component$java_awt_Component(fo, this.spinner) ) ) {
var root=this.spinner;
if (!root.isFocusCycleRoot$()) {
root=root.getFocusCycleRootAncestor$();
}if (root != null ) {
var ftp=root.getFocusTraversalPolicy$();
var child=ftp.getComponentAfter$java_awt_Container$java_awt_Component(root, this.spinner);
if (child != null  && $I$(4).isDescendingFrom$java_awt_Component$java_awt_Component(child, this.spinner) ) {
child.requestFocus$();
}}}}, p$1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.spinner === p$1.eventToSpinner$java_awt_AWTEvent.apply(this, [e]) ) {
if (this.autoRepeatTimer.isRunning$()) {
this.autoRepeatTimer.stop$();
}this.spinner=null;
if (this.arrowButton != null ) {
var model=this.arrowButton.getModel$();
model.setPressed$Z(false);
model.setArmed$Z(false);
this.arrowButton=null;
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSpinnerUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.awt.LayoutManager', 'javax.swing.event.ChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nextButton=null;
this.previousButton=null;
this.editor=null;
},1);

C$.$fields$=[['O',['nextButton','java.awt.Component','+previousButton','+editor']]]

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, c) {
if ("Next".equals$O(name)) {
this.nextButton=c;
} else if ("Previous".equals$O(name)) {
this.previousButton=c;
} else if ("Editor".equals$O(name)) {
this.editor=c;
}});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (c) {
if (c === this.nextButton ) {
this.nextButton=null;
} else if (c === this.previousButton ) {
this.previousButton=null;
} else if (c === this.editor ) {
this.editor=null;
}});

Clazz.newMeth(C$, 'preferredSize$java_awt_Component',  function (c) {
return (c == null ) ? $I$(6).zeroSize : c.getPreferredSize$();
}, p$2);

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
var nextD=p$2.preferredSize$java_awt_Component.apply(this, [this.nextButton]);
var previousD=p$2.preferredSize$java_awt_Component.apply(this, [this.previousButton]);
var editorD=p$2.preferredSize$java_awt_Component.apply(this, [this.editor]);
editorD.height=(((editorD.height + 1)/2|0)) * 2;
var size=Clazz.new_($I$(7,1).c$$I$I,[editorD.width, editorD.height]);
size.width+=Math.max(nextD.width, previousD.width);
var insets=parent.getInsets$();
size.width+=insets.left + insets.right;
size.height+=insets.top + insets.bottom;
return size;
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
return this.preferredLayoutSize$java_awt_Container(parent);
});

Clazz.newMeth(C$, 'setBounds$java_awt_Component$I$I$I$I',  function (c, x, y, width, height) {
if (c != null ) {
c.setBounds$I$I$I$I(x, y, width, height);
}}, p$2);

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
var width=parent.getWidth$();
var height=parent.getHeight$();
var insets=parent.getInsets$();
if (this.nextButton == null  && this.previousButton == null  ) {
p$2.setBounds$java_awt_Component$I$I$I$I.apply(this, [this.editor, insets.left, insets.top, width - insets.left - insets.right , height - insets.top - insets.bottom ]);
return;
}var nextD=p$2.preferredSize$java_awt_Component.apply(this, [this.nextButton]);
var previousD=p$2.preferredSize$java_awt_Component.apply(this, [this.previousButton]);
var buttonsWidth=Math.max(nextD.width, previousD.width);
var editorHeight=height - (insets.top + insets.bottom);
var buttonInsets=$I$(2).getInsets$O("Spinner.arrowButtonInsets");
if (buttonInsets == null ) {
buttonInsets=insets;
}var editorX;
var editorWidth;
var buttonsX;
if (parent.getComponentOrientation$().isLeftToRight$()) {
editorX=insets.left;
editorWidth=width - insets.left - buttonsWidth - buttonInsets.right ;
buttonsX=width - buttonsWidth - buttonInsets.right ;
} else {
buttonsX=buttonInsets.left;
editorX=buttonsX + buttonsWidth;
editorWidth=width - buttonInsets.left - buttonsWidth - insets.right ;
}var nextY=buttonInsets.top;
var nextHeight=((height/2|0)) + (height % 2) - nextY;
var previousY=buttonInsets.top + nextHeight;
var previousHeight=height - previousY - buttonInsets.bottom ;
p$2.setBounds$java_awt_Component$I$I$I$I.apply(this, [this.editor, editorX, insets.top, editorWidth, editorHeight]);
p$2.setBounds$java_awt_Component$I$I$I$I.apply(this, [this.nextButton, buttonsX, nextY, buttonsWidth, nextHeight]);
p$2.setBounds$java_awt_Component$I$I$I$I.apply(this, [this.previousButton, buttonsX, previousY, buttonsWidth, previousHeight]);
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JSpinner")) {
var spinner=e.getSource$();
var ui=spinner.getUI$();
if ($I$(8).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(spinner, ui, "Spinner.disableOnBoundaryValues", false)) {
p$3.updateEnabledState.apply(ui, []);
}}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

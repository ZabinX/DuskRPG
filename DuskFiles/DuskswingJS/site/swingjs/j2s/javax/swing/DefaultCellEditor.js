(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,['javax.swing.DefaultCellEditor','.EditorDelegate'],'java.awt.event.ActionEvent','swingjs.plaf.CellHolder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultCellEditor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.AbstractCellEditor', ['javax.swing.table.TableCellEditor', 'javax.swing.tree.TreeCellEditor']);
C$.$classes$=[['EditorDelegate',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.clickCountToStart=1;
},1);

C$.$fields$=[['I',['clickCountToStart'],'O',['editorComponent','javax.swing.JComponent','delegate','javax.swing.DefaultCellEditor.EditorDelegate']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTextField',  function (textField) {
Clazz.super_(C$, this);
p$1.秘setComponent$javax_swing_JComponent.apply(this, [textField]);
this.clickCountToStart=2;
this.delegate=((P$.DefaultCellEditor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultCellEditor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.DefaultCellEditor','.EditorDelegate']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.$finals$.textField.setText$S((value != null ) ? value.toString() : "");
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return this.$finals$.textField.getText$();
});
})()
), Clazz.new_($I$(1,1),[this, {textField:textField}],P$.DefaultCellEditor$1));
textField.addActionListener$java_awt_event_ActionListener(this.delegate);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JCheckBox',  function (checkBox) {
Clazz.super_(C$, this);
p$1.秘setComponent$javax_swing_JComponent.apply(this, [checkBox]);
this.delegate=((P$.DefaultCellEditor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultCellEditor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.DefaultCellEditor','.EditorDelegate']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
var selected=false;
if (Clazz.instanceOf(value, "java.lang.Boolean")) {
selected=(value).booleanValue$();
} else if (Clazz.instanceOf(value, "java.lang.String")) {
selected=value.equals$O("true");
}this.$finals$.checkBox.setSelected$Z(selected);
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return Boolean.valueOf$Z(this.$finals$.checkBox.isSelected$());
});
})()
), Clazz.new_($I$(1,1),[this, {checkBox:checkBox}],P$.DefaultCellEditor$2));
checkBox.addActionListener$java_awt_event_ActionListener(this.delegate);
checkBox.setRequestFocusEnabled$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComboBox',  function (comboBox) {
Clazz.super_(C$, this);
p$1.秘setComponent$javax_swing_JComponent.apply(this, [comboBox]);
comboBox.putClientProperty$O$O("JComboBox.isTableCellEditor", Boolean.TRUE);
this.delegate=((P$.DefaultCellEditor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultCellEditor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.swing.DefaultCellEditor','.EditorDelegate']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.$finals$.comboBox.setSelectedItem$O(value);
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return this.$finals$.comboBox.getSelectedItem$();
});

Clazz.newMeth(C$, 'shouldSelectCell$java_util_EventObject',  function (anEvent) {
if (Clazz.instanceOf(anEvent, "java.awt.event.MouseEvent")) {
var e=anEvent;
return e.getID$() != 506;
}return true;
});

Clazz.newMeth(C$, 'stopCellEditing$',  function () {
if (this.$finals$.comboBox.isEditable$()) {
this.$finals$.comboBox.actionPerformed$java_awt_event_ActionEvent(Clazz.new_($I$(2,1).c$$O$I$S,[this.b$['javax.swing.DefaultCellEditor'], 0, ""]));
}return C$.superclazz.prototype.stopCellEditing$.apply(this, []);
});
})()
), Clazz.new_($I$(1,1),[this, {comboBox:comboBox}],P$.DefaultCellEditor$3));
comboBox.addActionListener$java_awt_event_ActionListener(this.delegate);
}, 1);

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.editorComponent;
});

Clazz.newMeth(C$, 'setClickCountToStart$I',  function (count) {
this.clickCountToStart=count;
});

Clazz.newMeth(C$, 'getClickCountToStart$',  function () {
return this.clickCountToStart;
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return this.delegate.getCellEditorValue$();
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (anEvent) {
return this.delegate.isCellEditable$java_util_EventObject(anEvent);
});

Clazz.newMeth(C$, 'shouldSelectCell$java_util_EventObject',  function (anEvent) {
return this.delegate.shouldSelectCell$java_util_EventObject(anEvent);
});

Clazz.newMeth(C$, 'stopCellEditing$',  function () {
return this.delegate.stopCellEditing$();
});

Clazz.newMeth(C$, 'cancelCellEditing$',  function () {
this.delegate.cancelCellEditing$();
});

Clazz.newMeth(C$, 'getTreeCellEditorComponent$javax_swing_JTree$O$Z$Z$Z$I',  function (tree, value, isSelected, expanded, leaf, row) {
var stringValue=tree.convertValueToText$O$Z$Z$Z$I$Z(value, isSelected, expanded, leaf, row, false);
this.delegate.setValue$O(stringValue);
return this.editorComponent;
});

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, column) {
this.delegate.setValue$O(value);
if (Clazz.instanceOf(this.editorComponent, "javax.swing.JCheckBox")) {
var renderer=table.getCellRenderer$I$I(row, column);
var c=renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(table, value, isSelected, true, row, column);
if (c != null ) {
this.editorComponent.setOpaque$Z(true);
this.editorComponent.setBackground$java_awt_Color(c.getBackground$());
if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
this.editorComponent.setBorder$javax_swing_border_Border((c).getBorder$());
}} else {
this.editorComponent.setOpaque$Z(false);
}}return this.editorComponent;
});

Clazz.newMeth(C$, '秘setComponent$javax_swing_JComponent',  function (comp) {
$I$(3,"setJ2SRendererComponent$javax_swing_JComponent",[this.editorComponent=comp]);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultCellEditor, "EditorDelegate", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.ActionListener', 'java.awt.event.ItemListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['value','java.lang.Object']]]

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'isCellEditable$java_util_EventObject',  function (anEvent) {
if (Clazz.instanceOf(anEvent, "java.awt.event.MouseEvent")) {
return (anEvent).getClickCount$() >= this.b$['javax.swing.DefaultCellEditor'].clickCountToStart;
}return true;
});

Clazz.newMeth(C$, 'shouldSelectCell$java_util_EventObject',  function (anEvent) {
return true;
});

Clazz.newMeth(C$, 'startCellEditing$java_util_EventObject',  function (anEvent) {
return true;
});

Clazz.newMeth(C$, 'stopCellEditing$',  function () {
this.b$['javax.swing.AbstractCellEditor'].fireEditingStopped$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
return true;
});

Clazz.newMeth(C$, 'cancelCellEditing$',  function () {
this.b$['javax.swing.AbstractCellEditor'].fireEditingCanceled$.apply(this.b$['javax.swing.AbstractCellEditor'], []);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.DefaultCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.DefaultCellEditor'], []);
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['javax.swing.DefaultCellEditor'].stopCellEditing$.apply(this.b$['javax.swing.DefaultCellEditor'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

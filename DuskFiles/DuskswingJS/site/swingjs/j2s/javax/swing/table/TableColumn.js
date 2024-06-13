(function(){var P$=Clazz.newPackage("javax.swing.table"),p$1={},I$=[[0,'javax.swing.event.SwingPropertyChangeSupport','java.beans.PropertyChangeListener','javax.swing.UIManager','javax.swing.table.DefaultTableCellRenderer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableColumn");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isResizable'],'I',['modelIndex','width','minWidth','preferredWidth','maxWidth','resizedPostingDisableCount'],'O',['identifier','java.lang.Object','headerRenderer','javax.swing.table.TableCellRenderer','headerValue','java.lang.Object','cellRenderer','javax.swing.table.TableCellRenderer','cellEditor','javax.swing.table.TableCellEditor','changeSupport','javax.swing.event.SwingPropertyChangeSupport']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (modelIndex) {
C$.c$$I$I$javax_swing_table_TableCellRenderer$javax_swing_table_TableCellEditor.apply(this, [modelIndex, 75, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (modelIndex, width) {
C$.c$$I$I$javax_swing_table_TableCellRenderer$javax_swing_table_TableCellEditor.apply(this, [modelIndex, width, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$javax_swing_table_TableCellRenderer$javax_swing_table_TableCellEditor',  function (modelIndex, width, cellRenderer, cellEditor) {
;C$.$init$.apply(this);
this.modelIndex=modelIndex;
this.preferredWidth=this.width=Math.max(width, 0);
this.cellRenderer=cellRenderer;
this.cellEditor=cellEditor;
this.minWidth=Math.min(15, this.width);
this.maxWidth=2147483647;
this.isResizable=true;
this.resizedPostingDisableCount=0;
this.headerValue=null;
}, 1);

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (this.changeSupport != null ) {
this.changeSupport.firePropertyChange$S$O$O(propertyName, oldValue, newValue);
}}, p$1);

Clazz.newMeth(C$, 'firePropertyChange$S$I$I',  function (propertyName, oldValue, newValue) {
if (oldValue != newValue) {
p$1.firePropertyChange$S$O$O.apply(this, [propertyName,  new Integer(oldValue),  new Integer(newValue)]);
}}, p$1);

Clazz.newMeth(C$, 'firePropertyChange$S$Z$Z',  function (propertyName, oldValue, newValue) {
if (oldValue != newValue ) {
p$1.firePropertyChange$S$O$O.apply(this, [propertyName, Boolean.valueOf$Z(oldValue), Boolean.valueOf$Z(newValue)]);
}}, p$1);

Clazz.newMeth(C$, 'setModelIndex$I',  function (modelIndex) {
var old=this.modelIndex;
this.modelIndex=modelIndex;
p$1.firePropertyChange$S$I$I.apply(this, ["modelIndex", old, modelIndex]);
});

Clazz.newMeth(C$, 'getModelIndex$',  function () {
return this.modelIndex;
});

Clazz.newMeth(C$, 'setIdentifier$O',  function (identifier) {
var old=this.identifier;
this.identifier=identifier;
p$1.firePropertyChange$S$O$O.apply(this, ["identifier", old, identifier]);
});

Clazz.newMeth(C$, 'getIdentifier$',  function () {
return (this.identifier != null ) ? this.identifier : this.getHeaderValue$();
});

Clazz.newMeth(C$, 'setHeaderValue$O',  function (headerValue) {
var old=this.headerValue;
this.headerValue=headerValue;
p$1.firePropertyChange$S$O$O.apply(this, ["headerValue", old, headerValue]);
});

Clazz.newMeth(C$, 'getHeaderValue$',  function () {
return this.headerValue;
});

Clazz.newMeth(C$, 'setHeaderRenderer$javax_swing_table_TableCellRenderer',  function (headerRenderer) {
var old=this.headerRenderer;
this.headerRenderer=headerRenderer;
p$1.firePropertyChange$S$O$O.apply(this, ["headerRenderer", old, headerRenderer]);
});

Clazz.newMeth(C$, 'getHeaderRenderer$',  function () {
return this.headerRenderer;
});

Clazz.newMeth(C$, 'setCellRenderer$javax_swing_table_TableCellRenderer',  function (cellRenderer) {
var old=this.cellRenderer;
this.cellRenderer=cellRenderer;
p$1.firePropertyChange$S$O$O.apply(this, ["cellRenderer", old, cellRenderer]);
});

Clazz.newMeth(C$, 'getCellRenderer$',  function () {
return this.cellRenderer;
});

Clazz.newMeth(C$, 'setCellEditor$javax_swing_table_TableCellEditor',  function (cellEditor) {
var old=this.cellEditor;
this.cellEditor=cellEditor;
p$1.firePropertyChange$S$O$O.apply(this, ["cellEditor", old, cellEditor]);
});

Clazz.newMeth(C$, 'getCellEditor$',  function () {
return this.cellEditor;
});

Clazz.newMeth(C$, 'setWidth$I',  function (width) {
var old=this.width;
this.width=Math.min(Math.max(width, this.minWidth), this.maxWidth);
p$1.firePropertyChange$S$I$I.apply(this, ["width", old, this.width]);
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setPreferredWidth$I',  function (preferredWidth) {
var old=this.preferredWidth;
this.preferredWidth=Math.min(Math.max(preferredWidth, this.minWidth), this.maxWidth);
p$1.firePropertyChange$S$I$I.apply(this, ["preferredWidth", old, this.preferredWidth]);
});

Clazz.newMeth(C$, 'getPreferredWidth$',  function () {
return this.preferredWidth;
});

Clazz.newMeth(C$, 'setMinWidth$I',  function (minWidth) {
var old=this.minWidth;
this.minWidth=Math.max(Math.min(minWidth, this.maxWidth), 0);
if (this.width < this.minWidth) {
this.setWidth$I(this.minWidth);
}if (this.preferredWidth < this.minWidth) {
this.setPreferredWidth$I(this.minWidth);
}p$1.firePropertyChange$S$I$I.apply(this, ["minWidth", old, this.minWidth]);
});

Clazz.newMeth(C$, 'getMinWidth$',  function () {
return this.minWidth;
});

Clazz.newMeth(C$, 'setMaxWidth$I',  function (maxWidth) {
var old=this.maxWidth;
this.maxWidth=Math.max(this.minWidth, maxWidth);
if (this.width > this.maxWidth) {
this.setWidth$I(this.maxWidth);
}if (this.preferredWidth > this.maxWidth) {
this.setPreferredWidth$I(this.maxWidth);
}p$1.firePropertyChange$S$I$I.apply(this, ["maxWidth", old, this.maxWidth]);
});

Clazz.newMeth(C$, 'getMaxWidth$',  function () {
return this.maxWidth;
});

Clazz.newMeth(C$, 'setResizable$Z',  function (isResizable) {
var old=this.isResizable;
this.isResizable=isResizable;
p$1.firePropertyChange$S$Z$Z.apply(this, ["isResizable", old, this.isResizable]);
});

Clazz.newMeth(C$, 'getResizable$',  function () {
return this.isResizable;
});

Clazz.newMeth(C$, 'sizeWidthToFit$',  function () {
if (this.headerRenderer == null ) {
return;
}var c=this.headerRenderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(null, this.getHeaderValue$(), false, false, 0, 0);
this.setMinWidth$I(c.getMinimumSize$().width);
this.setMaxWidth$I(c.getMaximumSize$().width);
this.setPreferredWidth$I(c.getPreferredSize$().width);
this.setWidth$I(this.getPreferredWidth$());
});

Clazz.newMeth(C$, 'disableResizedPosting$',  function () {
++this.resizedPostingDisableCount;
});

Clazz.newMeth(C$, 'enableResizedPosting$',  function () {
--this.resizedPostingDisableCount;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(1,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.changeSupport != null ) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
if (this.changeSupport == null ) {
return Clazz.array($I$(2), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'createDefaultHeaderRenderer$',  function () {
var label=((P$.TableColumn$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TableColumn$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.table.DefaultTableCellRenderer'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
if (table != null ) {
var header=table.getTableHeader$();
if (header != null ) {
this.setForeground$java_awt_Color(header.getForeground$());
this.setBackground$java_awt_Color(header.getBackground$());
this.setFont$java_awt_Font(header.getFont$());
}}this.setText$S((value == null ) ? "" : value.toString());
this.setBorder$javax_swing_border_Border($I$(3).getBorder$O("TableHeader.cellBorder"));
return this;
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.TableColumn$1));
label.setHorizontalAlignment$I(0);
label.setOpaque$Z(false);
return label;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.table"),p$1={},I$=[[0,'javax.swing.border.EmptyBorder','sun.swing.DefaultLookup']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultTableCellRenderer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JLabel', 'javax.swing.table.TableCellRenderer');
C$.$classes$=[['UIResource',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['unselectedForeground','java.awt.Color','+unselectedBackground']]
,['O',['SAFE_NO_FOCUS_BORDER','javax.swing.border.Border','+DEFAULT_NO_FOCUS_BORDER','+noFocusBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setOpaque$Z(true);
this.setBorder$javax_swing_border_Border(p$1.getNoFocusBorder.apply(this, []));
this.setName$S("Table.cellRenderer");
}, 1);

Clazz.newMeth(C$, 'getNoFocusBorder',  function () {
var border=$I$(2).getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.cellNoFocusBorder");
if (System.getSecurityManager$() != null ) {
if (border != null ) return border;
return C$.SAFE_NO_FOCUS_BORDER;
} else if (border != null ) {
if (C$.noFocusBorder == null  || C$.noFocusBorder === C$.DEFAULT_NO_FOCUS_BORDER  ) {
return border;
}}return C$.noFocusBorder;
}, p$1);

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (c) {
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [c]);
this.unselectedForeground=c;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
this.unselectedBackground=c;
});

Clazz.newMeth(C$, 'updateUI$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
this.setForeground$java_awt_Color(null);
this.setBackground$java_awt_Color(null);
});

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
var fg=null;
var bg=null;
if (isSelected) {
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [fg == null  ? table.getSelectionForeground$() : fg]);
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [bg == null  ? table.getSelectionBackground$() : bg]);
} else {
var background=this.unselectedBackground != null  ? this.unselectedBackground : table.getBackground$();
if (background == null  || Clazz.instanceOf(background, "javax.swing.plaf.UIResource") ) {
var alternateColor=$I$(2).getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.alternateRowColor");
if (alternateColor != null  && row % 2 != 0 ) {
background=alternateColor;
}}C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [this.unselectedForeground != null  ? this.unselectedForeground : table.getForeground$()]);
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [background]);
}this.setFont$java_awt_Font(table.getFont$());
if (hasFocus) {
var border=null;
if (isSelected) {
border=$I$(2).getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.focusSelectedCellHighlightBorder");
}if (border == null ) {
border=$I$(2).getBorder$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.focusCellHighlightBorder");
}this.setBorder$javax_swing_border_Border(border);
if (!isSelected && table.isCellEditable$I$I(row, column) ) {
var col;
col=$I$(2).getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.focusCellForeground");
if (col != null ) {
C$.superclazz.prototype.setForeground$java_awt_Color.apply(this, [col]);
}col=$I$(2).getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.focusCellBackground");
if (col != null ) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [col]);
}}} else {
this.setBorder$javax_swing_border_Border(p$1.getNoFocusBorder.apply(this, []));
}this.setValue$O(value);
return this;
});

Clazz.newMeth(C$, '秘getComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'isOpaque$',  function () {
var back=this.getBackground$();
var p=this.getParent$();
if (p != null ) {
p=p.getParent$();
}var colorMatch=(back != null ) && (p != null ) && back.equals$O(p.getBackground$()) && p.isOpaque$()  ;
return !colorMatch && C$.superclazz.prototype.isOpaque$.apply(this, []) ;
});

Clazz.newMeth(C$, 'invalidate$',  function () {
});

Clazz.newMeth(C$, 'validate$',  function () {
});

Clazz.newMeth(C$, 'revalidate$',  function () {
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (tm, x, y, width, height) {
});

Clazz.newMeth(C$, 'repaint$java_awt_Rectangle',  function (r) {
});

Clazz.newMeth(C$, 'repaint$',  function () {
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (propertyName === "text"  || propertyName === "labelFor"   || propertyName === "displayedMnemonic"   || ((propertyName === "font"  || propertyName === "foreground"  ) && oldValue !== newValue  ) ) {
C$.superclazz.prototype.firePropertyChange$S$O$O.apply(this, [propertyName, oldValue, newValue]);
}});

Clazz.newMeth(C$, 'firePropertyChange$S$Z$Z',  function (propertyName, oldValue, newValue) {
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.setText$S((value == null ) ? "" : value.toString());
});

C$.$static$=function(){C$.$static$=0;
C$.SAFE_NO_FOCUS_BORDER=Clazz.new_($I$(1,1).c$$I$I$I$I,[1, 1, 1, 1]);
C$.DEFAULT_NO_FOCUS_BORDER=Clazz.new_($I$(1,1).c$$I$I$I$I,[1, 1, 1, 1]);
C$.noFocusBorder=C$.DEFAULT_NO_FOCUS_BORDER;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultTableCellRenderer, "UIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.table.DefaultTableCellRenderer', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

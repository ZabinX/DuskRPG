(function(){var P$=Clazz.newPackage("sun.swing.table"),I$=[[0,'sun.swing.DefaultLookup','javax.swing.SortOrder','javax.swing.border.EmptyBorder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultTableCellHeaderRenderer", null, 'javax.swing.table.DefaultTableCellRenderer', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['horizontalTextPositionSet']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setHorizontalAlignment$I(0);
}, 1);

Clazz.newMeth(C$, 'setHorizontalTextPosition$I',  function (textPosition) {
this.horizontalTextPositionSet=true;
C$.superclazz.prototype.setHorizontalTextPosition$I.apply(this, [textPosition]);
});

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
var sortIcon=null;
var isPaintingForPrint=false;
if (table != null ) {
var header=table.getTableHeader$();
if (header != null ) {
var fgColor=null;
var bgColor=null;
if (hasFocus) {
fgColor=$I$(1).getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "TableHeader.focusCellForeground");
bgColor=$I$(1).getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "TableHeader.focusCellBackground");
}if (fgColor == null ) {
fgColor=header.getForeground$();
}if (bgColor == null ) {
bgColor=header.getBackground$();
}this.setForeground$java_awt_Color(fgColor);
this.setBackground$java_awt_Color(bgColor);
this.setFont$java_awt_Font(header.getFont$());
isPaintingForPrint=header.isPaintingForPrint$();
}if (!isPaintingForPrint && table.getRowSorter$() != null  ) {
if (!this.horizontalTextPositionSet) {
this.setHorizontalTextPosition$I(10);
}var sortOrder=C$.getColumnSortOrder$javax_swing_JTable$I(table, column);
if (sortOrder != null ) {
switch (sortOrder) {
case $I$(2).ASCENDING:
sortIcon=$I$(1).getIcon$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.ascendingSortIcon");
break;
case $I$(2).DESCENDING:
sortIcon=$I$(1).getIcon$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.descendingSortIcon");
break;
case $I$(2).UNSORTED:
sortIcon=$I$(1).getIcon$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this, this.ui, "Table.naturalSortIcon");
break;
}
}}}this.setText$S(value == null  ? "" : value.toString());
this.setIcon$javax_swing_Icon(sortIcon);
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(3,1).c$$I$I$I$I,[8, 5, 7, 5]));
return this;
});

Clazz.newMeth(C$, 'getColumnSortOrder$javax_swing_JTable$I',  function (table, column) {
var rv=null;
if (table == null  || table.getRowSorter$() == null  ) {
return rv;
}var sortKeys=table.getRowSorter$().getSortKeys$();
if (sortKeys.size$() > 0 && sortKeys.get$I(0).getColumn$() == table.convertColumnIndexToModel$I(column) ) {
rv=sortKeys.get$I(0).getSortOrder$();
}return rv;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

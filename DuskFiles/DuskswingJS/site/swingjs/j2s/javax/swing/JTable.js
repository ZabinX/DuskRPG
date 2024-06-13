(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},I$=[[0,'javax.swing.SizeSequence','javax.swing.DefaultListSelectionModel','sun.swing.SwingUtilities2','java.text.NumberFormat','java.text.DateFormat','javax.swing.border.EmptyBorder','javax.swing.UIManager','javax.swing.JTextField','javax.swing.border.LineBorder','java.awt.Color','javax.swing.JCheckBox','javax.swing.JTable','java.awt.Rectangle','javax.swing.DropMode','javax.swing.table.DefaultTableModel','javax.swing.table.AbstractTableModel','javax.swing.JScrollPane','java.awt.Dimension','javax.swing.table.TableColumn','javax.swing.table.TableRowSorter',['javax.swing.JTable','.SortManager'],'java.awt.event.MouseEvent','javax.swing.SwingUtilities','javax.swing.event.TableModelEvent',['javax.swing.event.RowSorterEvent','.Type'],['javax.swing.JTable','.ModelChange'],'java.awt.Point','sun.swing.SwingLazyValue','javax.swing.UIDefaults','javax.swing.Icon','javax.swing.ImageIcon','javax.swing.table.DefaultTableColumnModel','javax.swing.table.JTableHeader',['javax.swing.JTable','.BooleanInPlaceEditor'],'swingjs.plaf.CellHolder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', ['javax.swing.event.TableModelListener', 'javax.swing.Scrollable', 'javax.swing.event.TableColumnModelListener', 'javax.swing.event.ListSelectionListener', 'javax.swing.event.CellEditorListener', 'javax.swing.event.RowSorterListener']);
C$.$classes$=[['PrintMode',25],['Resizable2',10],['Resizable3',10],['SortManager',18],['ModelChange',18],['NumberRenderer',8],['DoubleRenderer',8],['DateRenderer',8],['IconRenderer',8],['BooleanRenderer',9],['GenericEditor',8],['NumberEditor',8],['BooleanEditor',8],['BooleanInPlaceEditor',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.editorRemover=null;
this.dropMode=$I$(14).USE_SELECTION;
},1);

C$.$fields$=[['Z',['showHorizontalLines','showVerticalLines','autoCreateColumnsFromModel','rowSelectionAllowed','cellSelectionEnabled','dragEnabled','surrendersFocusOnKeystroke','columnSelectionAdjusting','rowSelectionAdjusting','isRowHeightSet','updateSelectionOnSort','ignoreSortChange','sorterChanged','autoCreateRowSorter','fillsViewportHeight','_addingEditor'],'I',['rowHeight','rowMargin','autoResizeMode','editingColumn','editingRow'],'O',['dataModel','javax.swing.table.TableModel','columnModel','javax.swing.table.TableColumnModel','selectionModel','javax.swing.ListSelectionModel','tableHeader','javax.swing.table.JTableHeader','gridColor','java.awt.Color','preferredViewportSize','java.awt.Dimension','editorComp','java.awt.Component','cellEditor','javax.swing.table.TableCellEditor','defaultRenderersByColumnClass','javax.swing.UIDefaults','+defaultEditorsByColumnClass','selectionForeground','java.awt.Color','+selectionBackground','rowModel','javax.swing.SizeSequence','editorRemover','java.beans.PropertyChangeListener','sortManager','javax.swing.JTable.SortManager','dropMode','javax.swing.DropMode']]
,['O',['tmpRect','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_table_TableModel$javax_swing_table_TableColumnModel$javax_swing_ListSelectionModel.apply(this, [null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel',  function (dm) {
C$.c$$javax_swing_table_TableModel$javax_swing_table_TableColumnModel$javax_swing_ListSelectionModel.apply(this, [dm, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel$javax_swing_table_TableColumnModel',  function (dm, cm) {
C$.c$$javax_swing_table_TableModel$javax_swing_table_TableColumnModel$javax_swing_ListSelectionModel.apply(this, [dm, cm, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel$javax_swing_table_TableColumnModel$javax_swing_ListSelectionModel',  function (dm, cm, sm) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setLayout$java_awt_LayoutManager(null);
if (cm == null ) {
cm=this.createDefaultColumnModel$();
this.autoCreateColumnsFromModel=true;
}this.setColumnModel$javax_swing_table_TableColumnModel(cm);
if (sm == null ) {
sm=this.createDefaultSelectionModel$();
}this.setSelectionModel$javax_swing_ListSelectionModel(sm);
if (dm == null ) {
dm=this.createDefaultDataModel$();
}this.setModel$javax_swing_table_TableModel(dm);
this.initializeLocalVars$();
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "TableUI";
});

Clazz.newMeth(C$, 'c$$I$I',  function (numRows, numColumns) {
C$.c$$javax_swing_table_TableModel.apply(this, [Clazz.new_($I$(15,1).c$$I$I,[numRows, numColumns])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector$java_util_Vector',  function (rowData, columnNames) {
C$.c$$javax_swing_table_TableModel.apply(this, [Clazz.new_($I$(15,1).c$$java_util_Vector$java_util_Vector,[rowData, columnNames])]);
}, 1);

Clazz.newMeth(C$, 'c$$OAA$OA',  function (rowData, columnNames) {
C$.c$$javax_swing_table_TableModel.apply(this, [((P$.JTable$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JTable$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.table.AbstractTableModel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
return this.$finals$.columnNames[column].toString();
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.$finals$.rowData.length;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.$finals$.columnNames.length;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, col) {
return this.$finals$.rowData[row][col];
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, column) {
return true;
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (value, row, col) {
this.$finals$.rowData[row][col]=value;
this.fireTableCellUpdated$I$I(row, col);
});
})()
), Clazz.new_($I$(16,1),[this, {columnNames:columnNames,rowData:rowData}],P$.JTable$1))]);
}, 1);

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
this.configureEnclosingScrollPane$();
});

Clazz.newMeth(C$, 'configureEnclosingScrollPane$',  function () {
var p=this.getParent$();
if (Clazz.instanceOf(p, "javax.swing.JViewport")) {
var gp=p.getParent$();
if (Clazz.instanceOf(gp, "javax.swing.JScrollPane")) {
var scrollPane=gp;
var viewport=scrollPane.getViewport$();
if (viewport == null  || viewport.getView$() !== this  ) {
return;
}scrollPane.setColumnHeaderView$java_awt_Component(this.getTableHeader$());
p$2.configureEnclosingScrollPaneUI.apply(this, []);
}}});

Clazz.newMeth(C$, 'configureEnclosingScrollPaneUI',  function () {
var p=this.getParent$();
if (Clazz.instanceOf(p, "javax.swing.JViewport")) {
var gp=p.getParent$();
if (Clazz.instanceOf(gp, "javax.swing.JScrollPane")) {
var scrollPane=gp;
var viewport=scrollPane.getViewport$();
if (viewport == null  || viewport.getView$() !== this  ) {
return;
}var border=scrollPane.getBorder$();
if (border == null  || Clazz.instanceOf(border, "javax.swing.plaf.UIResource") ) {
var scrollPaneBorder=$I$(7).getBorder$O("Table.scrollPaneBorder");
if (scrollPaneBorder != null ) {
scrollPane.setBorder$javax_swing_border_Border(scrollPaneBorder);
}}var corner=scrollPane.getCorner$S("UPPER_TRAILING_CORNER");
if (corner == null  || Clazz.instanceOf(corner, "javax.swing.plaf.UIResource") ) {
corner=null;
try {
corner=$I$(7).get$O("Table.scrollPaneCornerComponent");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
scrollPane.setCorner$S$java_awt_Component("UPPER_TRAILING_CORNER", corner);
}}}}, p$2);

Clazz.newMeth(C$, 'removeNotify$',  function () {
});

Clazz.newMeth(C$, 'unconfigureEnclosingScrollPane$',  function () {
var p=this.getParent$();
if (Clazz.instanceOf(p, "javax.swing.JViewport")) {
var gp=p.getParent$();
if (Clazz.instanceOf(gp, "javax.swing.JScrollPane")) {
var scrollPane=gp;
var viewport=scrollPane.getViewport$();
if (viewport == null  || viewport.getView$() !== this  ) {
return;
}scrollPane.setColumnHeaderView$java_awt_Component(null);
var corner=scrollPane.getCorner$S("UPPER_TRAILING_CORNER");
if (Clazz.instanceOf(corner, "javax.swing.plaf.UIResource")) {
scrollPane.setCorner$S$java_awt_Component("UPPER_TRAILING_CORNER", null);
}}}});

Clazz.newMeth(C$, 'setUIProperty$S$O',  function (propertyName, value) {
if (propertyName === "rowHeight" ) {
if (!this.isRowHeightSet) {
this.setRowHeight$I((value).intValue$());
this.isRowHeightSet=false;
}return;
}C$.superclazz.prototype.setUIProperty$S$O.apply(this, [propertyName, value]);
});

Clazz.newMeth(C$, 'createScrollPaneForTable$javax_swing_JTable',  function (aTable) {
return Clazz.new_($I$(17,1).c$$java_awt_Component,[aTable]);
}, 1);

Clazz.newMeth(C$, 'setTableHeader$javax_swing_table_JTableHeader',  function (tableHeader) {
if (this.tableHeader !== tableHeader ) {
var old=this.tableHeader;
if (old != null ) {
old.setTable$javax_swing_JTable(null);
}this.tableHeader=tableHeader;
if (tableHeader != null ) {
tableHeader.setTable$javax_swing_JTable(this);
}this.firePropertyChange$S$O$O("tableHeader", old, tableHeader);
}});

Clazz.newMeth(C$, 'getTableHeader$',  function () {
return this.tableHeader;
});

Clazz.newMeth(C$, 'setRowHeight$I',  function (rowHeight) {
if (rowHeight <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["New row height less than 1"]);
}var old=this.rowHeight;
this.rowHeight=rowHeight;
this.rowModel=null;
if (this.sortManager != null ) {
this.sortManager.modelRowSizes=null;
}this.isRowHeightSet=true;
this.resizeAnd秘repaint$();
this.firePropertyChange$S$I$I("rowHeight", old, rowHeight);
});

Clazz.newMeth(C$, 'getRowHeight$',  function () {
return this.rowHeight;
});

Clazz.newMeth(C$, 'getRowModel',  function () {
if (this.rowModel == null ) {
this.rowModel=Clazz.new_([this.getRowCount$(), this.getRowHeight$()],$I$(1,1).c$$I$I);
}return this.rowModel;
}, p$2);

Clazz.newMeth(C$, 'setRowHeight$I$I',  function (row, rowHeight) {
if (rowHeight <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["New row height less than 1"]);
}p$2.getRowModel.apply(this, []).setSize$I$I(row, rowHeight);
if (this.sortManager != null ) {
this.sortManager.setViewRowHeight$I$I(row, rowHeight);
}this.resizeAnd秘repaint$();
});

Clazz.newMeth(C$, 'getRowHeight$I',  function (row) {
return (this.rowModel == null ) ? this.getRowHeight$() : this.rowModel.getSize$I(row);
});

Clazz.newMeth(C$, 'setRowMargin$I',  function (rowMargin) {
var old=this.rowMargin;
this.rowMargin=rowMargin;
this.resizeAnd秘repaint$();
this.firePropertyChange$S$I$I("rowMargin", old, rowMargin);
});

Clazz.newMeth(C$, 'getRowMargin$',  function () {
return this.rowMargin;
});

Clazz.newMeth(C$, 'setIntercellSpacing$java_awt_Dimension',  function (intercellSpacing) {
this.setRowMargin$I(intercellSpacing.height);
this.getColumnModel$().setColumnMargin$I(intercellSpacing.width);
this.resizeAnd秘repaint$();
});

Clazz.newMeth(C$, 'getIntercellSpacing$',  function () {
return Clazz.new_([this.getColumnModel$().getColumnMargin$(), this.rowMargin],$I$(18,1).c$$I$I);
});

Clazz.newMeth(C$, 'setGridColor$java_awt_Color',  function (gridColor) {
if (gridColor == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["New color is null"]);
}var old=this.gridColor;
this.gridColor=gridColor;
this.firePropertyChange$S$O$O("gridColor", old, gridColor);
this.秘repaint$();
});

Clazz.newMeth(C$, 'getGridColor$',  function () {
return this.gridColor;
});

Clazz.newMeth(C$, 'setShowGrid$Z',  function (showGrid) {
this.setShowHorizontalLines$Z(showGrid);
this.setShowVerticalLines$Z(showGrid);
this.秘repaint$();
});

Clazz.newMeth(C$, 'setShowHorizontalLines$Z',  function (showHorizontalLines) {
var old=this.showHorizontalLines;
this.showHorizontalLines=showHorizontalLines;
this.firePropertyChange$S$Z$Z("showHorizontalLines", old, showHorizontalLines);
this.秘repaint$();
});

Clazz.newMeth(C$, 'setShowVerticalLines$Z',  function (showVerticalLines) {
var old=this.showVerticalLines;
this.showVerticalLines=showVerticalLines;
this.firePropertyChange$S$Z$Z("showVerticalLines", old, showVerticalLines);
this.秘repaint$();
});

Clazz.newMeth(C$, 'getShowHorizontalLines$',  function () {
return this.showHorizontalLines;
});

Clazz.newMeth(C$, 'getShowVerticalLines$',  function () {
return this.showVerticalLines;
});

Clazz.newMeth(C$, 'setAutoResizeMode$I',  function (mode) {
if ((mode == 0) || (mode == 1) || (mode == 2) || (mode == 3) || (mode == 4)  ) {
var old=this.autoResizeMode;
this.autoResizeMode=mode;
this.resizeAnd秘repaint$();
if (this.tableHeader != null ) {
this.tableHeader.resizeAnd秘repaint$();
}this.firePropertyChange$S$I$I("autoResizeMode", old, this.autoResizeMode);
}});

Clazz.newMeth(C$, 'getAutoResizeMode$',  function () {
return this.autoResizeMode;
});

Clazz.newMeth(C$, 'setAutoCreateColumnsFromModel$Z',  function (autoCreateColumnsFromModel) {
if (this.autoCreateColumnsFromModel != autoCreateColumnsFromModel ) {
var old=this.autoCreateColumnsFromModel;
this.autoCreateColumnsFromModel=autoCreateColumnsFromModel;
if (autoCreateColumnsFromModel) {
this.createDefaultColumnsFromModel$();
}this.firePropertyChange$S$Z$Z("autoCreateColumnsFromModel", old, autoCreateColumnsFromModel);
}});

Clazz.newMeth(C$, 'getAutoCreateColumnsFromModel$',  function () {
return this.autoCreateColumnsFromModel;
});

Clazz.newMeth(C$, 'createDefaultColumnsFromModel$',  function () {
var m=this.getModel$();
if (m != null ) {
var cm=this.getColumnModel$();
while (cm.getColumnCount$() > 0){
cm.removeColumn$javax_swing_table_TableColumn(cm.getColumn$I(0));
}
for (var i=0; i < m.getColumnCount$(); i++) {
var newColumn=Clazz.new_($I$(19,1).c$$I,[i]);
this.addColumn$javax_swing_table_TableColumn(newColumn);
}
}});

Clazz.newMeth(C$, 'setDefaultRenderer$Class$javax_swing_table_TableCellRenderer',  function (columnClass, renderer) {
if (renderer != null ) {
this.defaultRenderersByColumnClass.put$O$O(columnClass, renderer);
} else {
this.defaultRenderersByColumnClass.remove$O(columnClass);
}});

Clazz.newMeth(C$, 'getDefaultRenderer$Class',  function (columnClass) {
if (columnClass == null ) {
return null;
} else {
var renderer=this.defaultRenderersByColumnClass.get$O(columnClass);
if (renderer != null ) return renderer;
return this.getDefaultRenderer$Class(Class.getJ2SSuperclassFor$Class(columnClass));
}});

Clazz.newMeth(C$, 'setDefaultEditor$Class$javax_swing_table_TableCellEditor',  function (columnClass, editor) {
if (editor != null ) {
this.defaultEditorsByColumnClass.put$O$O(columnClass, editor);
} else {
this.defaultEditorsByColumnClass.remove$O(columnClass);
}});

Clazz.newMeth(C$, 'getDefaultEditor$Class',  function (columnClass) {
if (columnClass == null ) {
return null;
} else {
var editor=this.defaultEditorsByColumnClass.get$O(columnClass);
if (editor != null ) {
return editor;
} else {
var c=null;
{
c = columnClass.getSuperclass$ && columnClass.getSuperclass$();
}
if (c == null  && columnClass !== Clazz.getClass(java.lang.Object)  ) {
c=Clazz.getClass(java.lang.Object);
}return this.getDefaultEditor$Class(c);
}}});

Clazz.newMeth(C$, 'setDragEnabled$Z',  function (b) {
this.dragEnabled=b;
});

Clazz.newMeth(C$, 'getDragEnabled$',  function () {
return this.dragEnabled;
});

Clazz.newMeth(C$, 'setDropMode$javax_swing_DropMode',  function (dropMode) {
if (dropMode != null ) {
switch (dropMode) {
case $I$(14).USE_SELECTION:
case $I$(14).ON:
case $I$(14).INSERT:
case $I$(14).INSERT_ROWS:
case $I$(14).INSERT_COLS:
case $I$(14).ON_OR_INSERT:
case $I$(14).ON_OR_INSERT_ROWS:
case $I$(14).ON_OR_INSERT_COLS:
this.dropMode=dropMode;
return;
}
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[dropMode + ": Unsupported drop mode for table"]);
});

Clazz.newMeth(C$, 'getDropMode$',  function () {
return this.dropMode;
});

Clazz.newMeth(C$, 'setAutoCreateRowSorter$Z',  function (autoCreateRowSorter) {
var oldValue=this.autoCreateRowSorter;
this.autoCreateRowSorter=autoCreateRowSorter;
if (autoCreateRowSorter) {
this.setRowSorter$javax_swing_RowSorter(Clazz.new_([this.getModel$()],$I$(20,1).c$$javax_swing_table_TableModel));
}this.firePropertyChange$S$Z$Z("autoCreateRowSorter", oldValue, autoCreateRowSorter);
});

Clazz.newMeth(C$, 'getAutoCreateRowSorter$',  function () {
return this.autoCreateRowSorter;
});

Clazz.newMeth(C$, 'setUpdateSelectionOnSort$Z',  function (update) {
if (this.updateSelectionOnSort != update ) {
this.updateSelectionOnSort=update;
this.firePropertyChange$S$Z$Z("updateSelectionOnSort", !update, update);
}});

Clazz.newMeth(C$, 'getUpdateSelectionOnSort$',  function () {
return this.updateSelectionOnSort;
});

Clazz.newMeth(C$, 'setRowSorter$javax_swing_RowSorter',  function (sorter) {
var oldRowSorter=null;
if (this.sortManager != null ) {
oldRowSorter=this.sortManager.sorter;
this.sortManager.dispose$();
this.sortManager=null;
}this.rowModel=null;
p$2.clearSelectionAndLeadAnchor.apply(this, []);
if (sorter != null ) {
this.sortManager=Clazz.new_($I$(21,1).c$$javax_swing_RowSorter,[this, null, sorter]);
}this.resizeAnd秘repaint$();
this.firePropertyChange$S$O$O("rowSorter", oldRowSorter, sorter);
this.firePropertyChange$S$O$O("sorter", oldRowSorter, sorter);
});

Clazz.newMeth(C$, 'getRowSorter$',  function () {
return (this.sortManager != null ) ? this.sortManager.sorter : null;
});

Clazz.newMeth(C$, 'setSelectionMode$I',  function (selectionMode) {
this.clearSelection$();
this.getSelectionModel$().setSelectionMode$I(selectionMode);
this.getColumnModel$().getSelectionModel$().setSelectionMode$I(selectionMode);
});

Clazz.newMeth(C$, 'setRowSelectionAllowed$Z',  function (rowSelectionAllowed) {
var old=this.rowSelectionAllowed;
this.rowSelectionAllowed=rowSelectionAllowed;
if (old != rowSelectionAllowed ) {
this.秘repaint$();
}this.firePropertyChange$S$Z$Z("rowSelectionAllowed", old, rowSelectionAllowed);
});

Clazz.newMeth(C$, 'getRowSelectionAllowed$',  function () {
return this.rowSelectionAllowed;
});

Clazz.newMeth(C$, 'setColumnSelectionAllowed$Z',  function (columnSelectionAllowed) {
var old=this.columnModel.getColumnSelectionAllowed$();
this.columnModel.setColumnSelectionAllowed$Z(columnSelectionAllowed);
if (old != columnSelectionAllowed ) {
this.秘repaint$();
}this.firePropertyChange$S$Z$Z("columnSelectionAllowed", old, columnSelectionAllowed);
});

Clazz.newMeth(C$, 'getColumnSelectionAllowed$',  function () {
return this.columnModel.getColumnSelectionAllowed$();
});

Clazz.newMeth(C$, 'setCellSelectionEnabled$Z',  function (cellSelectionEnabled) {
this.setRowSelectionAllowed$Z(cellSelectionEnabled);
this.setColumnSelectionAllowed$Z(cellSelectionEnabled);
var old=this.cellSelectionEnabled;
this.cellSelectionEnabled=cellSelectionEnabled;
this.firePropertyChange$S$Z$Z("cellSelectionEnabled", old, cellSelectionEnabled);
});

Clazz.newMeth(C$, 'getCellSelectionEnabled$',  function () {
return this.getRowSelectionAllowed$() && this.getColumnSelectionAllowed$() ;
});

Clazz.newMeth(C$, 'selectAll$',  function () {
if (this.isEditing$()) {
this.removeEditor$();
}if (this.getRowCount$() > 0 && this.getColumnCount$() > 0 ) {
var oldLead;
var oldAnchor;
var selModel;
selModel=this.selectionModel;
selModel.setValueIsAdjusting$Z(true);
oldLead=p$2.getAdjustedIndex$I$Z.apply(this, [selModel.getLeadSelectionIndex$(), true]);
oldAnchor=p$2.getAdjustedIndex$I$Z.apply(this, [selModel.getAnchorSelectionIndex$(), true]);
this.setRowSelectionInterval$I$I(0, this.getRowCount$() - 1);
$I$(3).setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I(selModel, oldLead, oldAnchor);
selModel.setValueIsAdjusting$Z(false);
selModel=this.columnModel.getSelectionModel$();
selModel.setValueIsAdjusting$Z(true);
oldLead=p$2.getAdjustedIndex$I$Z.apply(this, [selModel.getLeadSelectionIndex$(), false]);
oldAnchor=p$2.getAdjustedIndex$I$Z.apply(this, [selModel.getAnchorSelectionIndex$(), false]);
this.setColumnSelectionInterval$I$I(0, this.getColumnCount$() - 1);
$I$(3).setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I(selModel, oldLead, oldAnchor);
selModel.setValueIsAdjusting$Z(false);
}});

Clazz.newMeth(C$, 'clearSelection$',  function () {
this.selectionModel.clearSelection$();
this.columnModel.getSelectionModel$().clearSelection$();
});

Clazz.newMeth(C$, 'clearSelectionAndLeadAnchor',  function () {
this.selectionModel.setValueIsAdjusting$Z(true);
this.columnModel.getSelectionModel$().setValueIsAdjusting$Z(true);
this.clearSelection$();
this.selectionModel.setAnchorSelectionIndex$I(-1);
this.selectionModel.setLeadSelectionIndex$I(-1);
this.columnModel.getSelectionModel$().setAnchorSelectionIndex$I(-1);
this.columnModel.getSelectionModel$().setLeadSelectionIndex$I(-1);
this.selectionModel.setValueIsAdjusting$Z(false);
this.columnModel.getSelectionModel$().setValueIsAdjusting$Z(false);
}, p$2);

Clazz.newMeth(C$, 'getAdjustedIndex$I$Z',  function (index, row) {
var compare=row ? this.getRowCount$() : this.getColumnCount$();
return index < compare ? index : -1;
}, p$2);

Clazz.newMeth(C$, 'boundRow$I',  function (row) {
if (row < 0 || row >= this.getRowCount$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Row index out of range"]);
}return row;
}, p$2);

Clazz.newMeth(C$, 'boundColumn$I',  function (col) {
if (col < 0 || col >= this.getColumnCount$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Column index out of range"]);
}return col;
}, p$2);

Clazz.newMeth(C$, 'setRowSelectionInterval$I$I',  function (index0, index1) {
this.selectionModel.setSelectionInterval$I$I(p$2.boundRow$I.apply(this, [index0]), p$2.boundRow$I.apply(this, [index1]));
});

Clazz.newMeth(C$, 'setColumnSelectionInterval$I$I',  function (index0, index1) {
this.columnModel.getSelectionModel$().setSelectionInterval$I$I(p$2.boundColumn$I.apply(this, [index0]), p$2.boundColumn$I.apply(this, [index1]));
});

Clazz.newMeth(C$, 'addRowSelectionInterval$I$I',  function (index0, index1) {
this.selectionModel.addSelectionInterval$I$I(p$2.boundRow$I.apply(this, [index0]), p$2.boundRow$I.apply(this, [index1]));
});

Clazz.newMeth(C$, 'addColumnSelectionInterval$I$I',  function (index0, index1) {
this.columnModel.getSelectionModel$().addSelectionInterval$I$I(p$2.boundColumn$I.apply(this, [index0]), p$2.boundColumn$I.apply(this, [index1]));
});

Clazz.newMeth(C$, 'removeRowSelectionInterval$I$I',  function (index0, index1) {
this.selectionModel.removeSelectionInterval$I$I(p$2.boundRow$I.apply(this, [index0]), p$2.boundRow$I.apply(this, [index1]));
});

Clazz.newMeth(C$, 'removeColumnSelectionInterval$I$I',  function (index0, index1) {
this.columnModel.getSelectionModel$().removeSelectionInterval$I$I(p$2.boundColumn$I.apply(this, [index0]), p$2.boundColumn$I.apply(this, [index1]));
});

Clazz.newMeth(C$, 'getSelectedRow$',  function () {
return this.selectionModel.getMinSelectionIndex$();
});

Clazz.newMeth(C$, 'getSelectedColumn$',  function () {
return this.columnModel.getSelectionModel$().getMinSelectionIndex$();
});

Clazz.newMeth(C$, 'getSelectedRows$',  function () {
var iMin=this.selectionModel.getMinSelectionIndex$();
var iMax=this.selectionModel.getMaxSelectionIndex$();
if ((iMin == -1) || (iMax == -1) ) {
return Clazz.array(Integer.TYPE, [0]);
}var rvTmp=Clazz.array(Integer.TYPE, [1 + (iMax - iMin)]);
var n=0;
for (var i=iMin; i <= iMax; i++) {
if (this.selectionModel.isSelectedIndex$I(i)) {
rvTmp[n++]=i;
}}
var rv=Clazz.array(Integer.TYPE, [n]);
System.arraycopy$O$I$O$I$I(rvTmp, 0, rv, 0, n);
return rv;
});

Clazz.newMeth(C$, 'getSelectedColumns$',  function () {
return this.columnModel.getSelectedColumns$();
});

Clazz.newMeth(C$, 'getSelectedRowCount$',  function () {
var iMin=this.selectionModel.getMinSelectionIndex$();
var iMax=this.selectionModel.getMaxSelectionIndex$();
var count=0;
for (var i=iMin; i <= iMax; i++) {
if (this.selectionModel.isSelectedIndex$I(i)) {
++count;
}}
return count;
});

Clazz.newMeth(C$, 'getSelectedColumnCount$',  function () {
return this.columnModel.getSelectedColumnCount$();
});

Clazz.newMeth(C$, 'isRowSelected$I',  function (row) {
return this.selectionModel.isSelectedIndex$I(row);
});

Clazz.newMeth(C$, 'isColumnSelected$I',  function (column) {
return this.columnModel.getSelectionModel$().isSelectedIndex$I(column);
});

Clazz.newMeth(C$, 'isCellSelected$I$I',  function (row, column) {
if (!this.getRowSelectionAllowed$() && !this.getColumnSelectionAllowed$() ) {
return false;
}return (!this.getRowSelectionAllowed$() || this.isRowSelected$I(row) ) && (!this.getColumnSelectionAllowed$() || this.isColumnSelected$I(column) ) ;
});

Clazz.newMeth(C$, 'changeSelectionModel$javax_swing_ListSelectionModel$I$Z$Z$Z$I$Z',  function (sm, index, toggle, extend, selected, anchor, anchorSelected) {
if (extend) {
if (toggle) {
if (anchorSelected) {
sm.addSelectionInterval$I$I(anchor, index);
} else {
sm.removeSelectionInterval$I$I(anchor, index);
if (Boolean.TRUE === this.getClientProperty$O("Table.isFileList") ) {
sm.addSelectionInterval$I$I(index, index);
sm.setAnchorSelectionIndex$I(anchor);
}}} else {
sm.setSelectionInterval$I$I(anchor, index);
}} else {
if (toggle) {
if (selected) {
sm.removeSelectionInterval$I$I(index, index);
} else {
sm.addSelectionInterval$I$I(index, index);
}} else {
sm.setSelectionInterval$I$I(index, index);
}}}, p$2);

Clazz.newMeth(C$, 'changeSelection$I$I$Z$Z',  function (rowIndex, columnIndex, toggle, extend) {
var rsm=this.getSelectionModel$();
var csm=this.getColumnModel$().getSelectionModel$();
var anchorRow=p$2.getAdjustedIndex$I$Z.apply(this, [rsm.getAnchorSelectionIndex$(), true]);
var anchorCol=p$2.getAdjustedIndex$I$Z.apply(this, [csm.getAnchorSelectionIndex$(), false]);
var anchorSelected=true;
if (anchorRow == -1) {
if (this.getRowCount$() > 0) {
anchorRow=0;
}anchorSelected=false;
}if (anchorCol == -1) {
if (this.getColumnCount$() > 0) {
anchorCol=0;
}anchorSelected=false;
}var selected=this.isCellSelected$I$I(rowIndex, columnIndex);
anchorSelected=anchorSelected && this.isCellSelected$I$I(anchorRow, anchorCol) ;
p$2.changeSelectionModel$javax_swing_ListSelectionModel$I$Z$Z$Z$I$Z.apply(this, [csm, columnIndex, toggle, extend, selected, anchorCol, anchorSelected]);
p$2.changeSelectionModel$javax_swing_ListSelectionModel$I$Z$Z$Z$I$Z.apply(this, [rsm, rowIndex, toggle, extend, selected, anchorRow, anchorSelected]);
if (this.getAutoscrolls$()) {
var cellRect=this.getCellRect$I$I$Z(rowIndex, columnIndex, false);
if (cellRect != null ) {
this.scrollRectToVisible$java_awt_Rectangle(cellRect);
}}});

Clazz.newMeth(C$, 'getSelectionForeground$',  function () {
return this.selectionForeground;
});

Clazz.newMeth(C$, 'setSelectionForeground$java_awt_Color',  function (selectionForeground) {
var old=this.selectionForeground;
this.selectionForeground=selectionForeground;
this.firePropertyChange$S$O$O("selectionForeground", old, selectionForeground);
if (!selectionForeground.equals$O(old)) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getSelectionBackground$',  function () {
return this.selectionBackground;
});

Clazz.newMeth(C$, 'setSelectionBackground$java_awt_Color',  function (selectionBackground) {
var old=this.selectionBackground;
this.selectionBackground=selectionBackground;
this.firePropertyChange$S$O$O("selectionBackground", old, selectionBackground);
if (!selectionBackground.equals$O(old)) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getColumn$O',  function (identifier) {
var cm=this.getColumnModel$();
var columnIndex=cm.getColumnIndex$O(identifier);
return cm.getColumn$I(columnIndex);
});

Clazz.newMeth(C$, 'convertColumnIndexToModel$I',  function (viewColumnIndex) {
if (viewColumnIndex < 0) {
return viewColumnIndex;
}return this.getColumnModel$().getColumn$I(viewColumnIndex).getModelIndex$();
});

Clazz.newMeth(C$, 'convertColumnIndexToView$I',  function (modelColumnIndex) {
if (modelColumnIndex < 0) {
return modelColumnIndex;
}var cm=this.getColumnModel$();
for (var column=0, n=this.getColumnCount$(); column < n; column++) {
if (cm.getColumn$I(column).getModelIndex$() == modelColumnIndex) {
return column;
}}
return -1;
});

Clazz.newMeth(C$, 'convertRowIndexToView$I',  function (modelRowIndex) {
var sorter=this.getRowSorter$();
if (sorter != null ) {
return sorter.convertRowIndexToView$I(modelRowIndex);
}return modelRowIndex;
});

Clazz.newMeth(C$, 'convertRowIndexToModel$I',  function (viewRowIndex) {
var sorter=this.getRowSorter$();
if (sorter != null ) {
return sorter.convertRowIndexToModel$I(viewRowIndex);
}return viewRowIndex;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
var sorter=this.getRowSorter$();
if (sorter != null ) {
return sorter.getViewRowCount$();
}return this.getModel$().getRowCount$();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.getColumnModel$().getColumnCount$();
});

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
return this.getModel$().getColumnName$I(this.convertColumnIndexToModel$I(column));
});

Clazz.newMeth(C$, 'getColumnClass$I',  function (column) {
return this.getModel$().getColumnClass$I(this.convertColumnIndexToModel$I(column));
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, column) {
return this.getModel$().getValueAt$I$I(this.convertRowIndexToModel$I(row), this.convertColumnIndexToModel$I(column));
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (aValue, row, column) {
this.getModel$().setValueAt$O$I$I(aValue, this.convertRowIndexToModel$I(row), this.convertColumnIndexToModel$I(column));
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, column) {
return this.getModel$().isCellEditable$I$I(this.convertRowIndexToModel$I(row), this.convertColumnIndexToModel$I(column));
});

Clazz.newMeth(C$, 'addColumn$javax_swing_table_TableColumn',  function (aColumn) {
if (aColumn.getHeaderValue$() == null ) {
var modelColumn=aColumn.getModelIndex$();
var columnName=this.getModel$().getColumnName$I(modelColumn);
aColumn.setHeaderValue$O(columnName);
}this.getColumnModel$().addColumn$javax_swing_table_TableColumn(aColumn);
});

Clazz.newMeth(C$, 'removeColumn$javax_swing_table_TableColumn',  function (aColumn) {
this.getColumnModel$().removeColumn$javax_swing_table_TableColumn(aColumn);
});

Clazz.newMeth(C$, 'moveColumn$I$I',  function (column, targetColumn) {
this.getColumnModel$().moveColumn$I$I(column, targetColumn);
});

Clazz.newMeth(C$, 'columnAtPoint$java_awt_Point',  function (point) {
var x=point.x;
if (!this.getComponentOrientation$().isLeftToRight$()) {
x=this.getWidth$() - x - 1 ;
}return this.getColumnModel$().getColumnIndexAtX$I(x);
});

Clazz.newMeth(C$, 'rowAtPoint$java_awt_Point',  function (point) {
var y=point.y;
var result=(this.rowModel == null ) ? (y/this.getRowHeight$()|0) : this.rowModel.getIndex$I(y);
if (result < 0) {
return -1;
} else if (result >= this.getRowCount$()) {
return -1;
} else {
return result;
}});

Clazz.newMeth(C$, 'getCellRect$I$I$Z',  function (row, column, includeSpacing) {
var r=Clazz.new_($I$(13,1));
this._getCellRect$I$I$Z$java_awt_Rectangle(row, column, includeSpacing, r);
return r;
});

Clazz.newMeth(C$, '_getCellRect$I$I$Z$java_awt_Rectangle',  function (row, column, includeSpacing, r) {
var valid=true;
if (row < 0) {
r.y=r.height=0;
valid=false;
} else if (row >= this.getRowCount$()) {
r.y=this.getHeight$();
r.height=0;
valid=false;
} else {
r.height=this.getRowHeight$I(row);
r.y=(this.rowModel == null ) ? row * r.height : this.rowModel.getPosition$I(row);
}if (column < 0) {
r.x=(this.getComponentOrientation$().isLeftToRight$() ? 0 : this.getWidth$());
r.width=0;
valid=false;
} else if (column >= this.getColumnCount$()) {
r.x=(this.getComponentOrientation$().isLeftToRight$() ? this.getWidth$() : 0);
r.width=0;
valid=false;
} else {
r.x=0;
var cm=this.getColumnModel$();
if (this.getComponentOrientation$().isLeftToRight$()) {
for (var i=0; i < column; i++) {
r.x+=cm.getColumn$I(i).getWidth$();
}
} else {
for (var i=cm.getColumnCount$() - 1; i > column; i--) {
r.x+=cm.getColumn$I(i).getWidth$();
}
}r.width=cm.getColumn$I(column).getWidth$();
}if (valid && !includeSpacing ) {
var rm=Math.min(this.getRowMargin$(), r.height);
var cm=Math.min(this.getColumnModel$().getColumnMargin$(), r.width);
r.setBounds$I$I$I$I(r.x + (cm/2|0), r.y + (rm/2|0), r.width - cm, r.height - rm);
}return r;
});

Clazz.newMeth(C$, 'viewIndexForColumn$javax_swing_table_TableColumn',  function (aColumn) {
var cm=this.getColumnModel$();
for (var column=cm.getColumnCount$(); --column >= 0; ) {
if (cm.getColumn$I(column) === aColumn ) {
return column;
}}
return -1;
}, p$2);

Clazz.newMeth(C$, 'doLayout$',  function () {
var resizingColumn=p$2.getResizingColumn.apply(this, []);
if (resizingColumn == null ) {
p$2.setWidthsFromPreferredWidths$Z.apply(this, [false]);
} else {
var columnIndex=p$2.viewIndexForColumn$javax_swing_table_TableColumn.apply(this, [resizingColumn]);
var delta=this.getWidth$() - this.getColumnModel$().getTotalColumnWidth$();
p$2.accommodateDelta$I$I.apply(this, [columnIndex, delta]);
delta=this.getWidth$() - this.getColumnModel$().getTotalColumnWidth$();
if (delta != 0) {
resizingColumn.setWidth$I(resizingColumn.getWidth$() + delta);
}p$2.setWidthsFromPreferredWidths$Z.apply(this, [true]);
}C$.superclazz.prototype.doLayout$.apply(this, []);
});

Clazz.newMeth(C$, 'getResizingColumn',  function () {
return (this.tableHeader == null ) ? null : this.tableHeader.getResizingColumn$();
}, p$2);

Clazz.newMeth(C$, 'sizeColumnsToFit$Z',  function (lastColumnOnly) {
var oldAutoResizeMode=this.autoResizeMode;
this.setAutoResizeMode$I(lastColumnOnly ? 3 : 4);
this.sizeColumnsToFit$I(-1);
this.setAutoResizeMode$I(oldAutoResizeMode);
});

Clazz.newMeth(C$, 'sizeColumnsToFit$I',  function (resizingColumn) {
if (resizingColumn == -1) {
p$2.setWidthsFromPreferredWidths$Z.apply(this, [false]);
} else {
if (this.autoResizeMode == 0) {
var aColumn=this.getColumnModel$().getColumn$I(resizingColumn);
aColumn.setPreferredWidth$I(aColumn.getWidth$());
} else {
var delta=this.getWidth$() - this.getColumnModel$().getTotalColumnWidth$();
p$2.accommodateDelta$I$I.apply(this, [resizingColumn, delta]);
p$2.setWidthsFromPreferredWidths$Z.apply(this, [true]);
}}});

Clazz.newMeth(C$, 'setWidthsFromPreferredWidths$Z',  function (inverse) {
var totalWidth=this.getWidth$();
var totalPreferred=this.getPreferredSize$().width;
var target=!inverse ? totalWidth : totalPreferred;
var cm=this.columnModel;
var r=((P$.JTable$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JTable$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javax.swing.JTable','javax.swing.JTable.Resizable3']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getElementCount$',  function () {
return this.$finals$.cm.getColumnCount$();
});

Clazz.newMeth(C$, 'getLowerBoundAt$I',  function (i) {
return this.$finals$.cm.getColumn$I(i).getMinWidth$();
});

Clazz.newMeth(C$, 'getUpperBoundAt$I',  function (i) {
return this.$finals$.cm.getColumn$I(i).getMaxWidth$();
});

Clazz.newMeth(C$, 'getMidPointAt$I',  function (i) {
if (!this.$finals$.inverse) {
return this.$finals$.cm.getColumn$I(i).getPreferredWidth$();
} else {
return this.$finals$.cm.getColumn$I(i).getWidth$();
}});

Clazz.newMeth(C$, 'setSizeAt$I$I',  function (s, i) {
if (!this.$finals$.inverse) {
this.$finals$.cm.getColumn$I(i).setWidth$I(s);
} else {
this.$finals$.cm.getColumn$I(i).setPreferredWidth$I(s);
}});
})()
), Clazz.new_(P$.JTable$2.$init$,[this, {inverse:inverse,cm:cm}]));
p$2.adjustSizes$J$javax_swing_JTable_Resizable3$Z.apply(this, [target, r, inverse]);
}, p$2);

Clazz.newMeth(C$, 'accommodateDelta$I$I',  function (resizingColumnIndex, delta) {
var columnCount=this.getColumnCount$();
var from=resizingColumnIndex;
var to=columnCount;
switch (this.autoResizeMode) {
case 1:
from=from + 1;
to=Math.min(from + 1, columnCount);
break;
case 2:
from=from + 1;
to=columnCount;
break;
case 3:
from=columnCount - 1;
to=from + 1;
break;
case 4:
from=0;
to=columnCount;
break;
default:
return;
}
var start=from;
var end=to;
var cm=this.columnModel;
var r=((P$.JTable$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JTable$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javax.swing.JTable','javax.swing.JTable.Resizable3']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getElementCount$',  function () {
return this.$finals$.end - this.$finals$.start;
});

Clazz.newMeth(C$, 'getLowerBoundAt$I',  function (i) {
return this.$finals$.cm.getColumn$I(i + this.$finals$.start).getMinWidth$();
});

Clazz.newMeth(C$, 'getUpperBoundAt$I',  function (i) {
return this.$finals$.cm.getColumn$I(i + this.$finals$.start).getMaxWidth$();
});

Clazz.newMeth(C$, 'getMidPointAt$I',  function (i) {
return this.$finals$.cm.getColumn$I(i + this.$finals$.start).getWidth$();
});

Clazz.newMeth(C$, 'setSizeAt$I$I',  function (s, i) {
this.$finals$.cm.getColumn$I(i + this.$finals$.start).setWidth$I(s);
});
})()
), Clazz.new_(P$.JTable$3.$init$,[this, {cm:cm,start:start,end:end}]));
var totalWidth=0;
for (var i=from; i < to; i++) {
var aColumn=this.columnModel.getColumn$I(i);
var input=aColumn.getWidth$();
totalWidth=totalWidth + input;
}
p$2.adjustSizes$J$javax_swing_JTable_Resizable3$Z.apply(this, [totalWidth + delta, r, false]);
return;
}, p$2);

Clazz.newMeth(C$, 'adjustSizes$J$javax_swing_JTable_Resizable3$Z',  function (target, r, inverse) {
var N=r.getElementCount$();
var totalPreferred=0;
for (var i=0; i < N; i++) {
(totalPreferred=Long.$add(totalPreferred,(r.getMidPointAt$I(i))));
}
var s;
if ((Long.$lt(target,totalPreferred )) == !inverse ) {
s=((P$.JTable$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "JTable$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javax.swing.JTable','javax.swing.JTable.Resizable2']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getElementCount$',  function () {
return this.$finals$.r.getElementCount$();
});

Clazz.newMeth(C$, 'getLowerBoundAt$I',  function (i) {
return this.$finals$.r.getLowerBoundAt$I(i);
});

Clazz.newMeth(C$, 'getUpperBoundAt$I',  function (i) {
return this.$finals$.r.getMidPointAt$I(i);
});

Clazz.newMeth(C$, 'setSizeAt$I$I',  function (newSize, i) {
this.$finals$.r.setSizeAt$I$I(newSize, i);
});
})()
), Clazz.new_(P$.JTable$4.$init$,[this, {r:r}]));
} else {
s=((P$.JTable$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "JTable$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javax.swing.JTable','javax.swing.JTable.Resizable2']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getElementCount$',  function () {
return this.$finals$.r.getElementCount$();
});

Clazz.newMeth(C$, 'getLowerBoundAt$I',  function (i) {
return this.$finals$.r.getMidPointAt$I(i);
});

Clazz.newMeth(C$, 'getUpperBoundAt$I',  function (i) {
return this.$finals$.r.getUpperBoundAt$I(i);
});

Clazz.newMeth(C$, 'setSizeAt$I$I',  function (newSize, i) {
this.$finals$.r.setSizeAt$I$I(newSize, i);
});
})()
), Clazz.new_(P$.JTable$5.$init$,[this, {r:r}]));
}p$2.adjustSizes$J$javax_swing_JTable_Resizable2$Z.apply(this, [target, s, !inverse]);
}, p$2);

Clazz.newMeth(C$, 'adjustSizes$J$javax_swing_JTable_Resizable2$Z',  function (target, r, limitToRange) {
var totalLowerBound=0;
var totalUpperBound=0;
for (var i=0; i < r.getElementCount$(); i++) {
(totalLowerBound=Long.$add(totalLowerBound,(r.getLowerBoundAt$I(i))));
(totalUpperBound=Long.$add(totalUpperBound,(r.getUpperBoundAt$I(i))));
}
if (limitToRange) {
target=Math.min$J$J(Math.max$J$J(totalLowerBound, target), totalUpperBound);
}for (var i=0; i < r.getElementCount$(); i++) {
var lowerBound=r.getLowerBoundAt$I(i);
var upperBound=r.getUpperBoundAt$I(i);
var newSize;
if (Long.$eq(totalLowerBound,totalUpperBound )) {
newSize=lowerBound;
} else {
var f=Long.$dval((Long.$sub(target,totalLowerBound))) / (Long.$sub(totalUpperBound,totalLowerBound));
newSize=Long.$ival(Math.round$D(lowerBound + f * (upperBound - lowerBound)));
}r.setSizeAt$I$I(newSize, i);
(target=Long.$sub(target,(newSize)));
(totalLowerBound=Long.$sub(totalLowerBound,(lowerBound)));
(totalUpperBound=Long.$sub(totalUpperBound,(upperBound)));
}
}, p$2);

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent',  function (event) {
var tip=null;
var p=event.getPoint$();
var hitColumnIndex=this.columnAtPoint$java_awt_Point(p);
var hitRowIndex=this.rowAtPoint$java_awt_Point(p);
if ((hitColumnIndex != -1) && (hitRowIndex != -1) ) {
var renderer=this.getCellRenderer$I$I(hitRowIndex, hitColumnIndex);
var component=this.prepareRenderer$javax_swing_table_TableCellRenderer$I$I(renderer, hitRowIndex, hitColumnIndex);
if (Clazz.instanceOf(component, "javax.swing.JComponent")) {
var cellRect=this.getCellRect$I$I$Z(hitRowIndex, hitColumnIndex, false);
p.translate$I$I(-cellRect.x, -cellRect.y);
var newEvent=Clazz.new_([component, event.getID$(), event.getWhen$(), event.getModifiers$(), p.x, p.y, event.getXOnScreen$(), event.getYOnScreen$(), event.getClickCount$(), event.isPopupTrigger$(), 0],$I$(22,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I);
tip=(component).getToolTipText$java_awt_event_MouseEvent(newEvent);
}}if (tip == null ) tip=this.getToolTipText$();
return tip;
});

Clazz.newMeth(C$, 'setSurrendersFocusOnKeystroke$Z',  function (surrendersFocusOnKeystroke) {
this.surrendersFocusOnKeystroke=surrendersFocusOnKeystroke;
});

Clazz.newMeth(C$, 'getSurrendersFocusOnKeystroke$',  function () {
return this.surrendersFocusOnKeystroke;
});

Clazz.newMeth(C$, 'editCellAt$I$I',  function (row, column) {
return this.editCellAt$I$I$java_util_EventObject(row, column, null);
});

Clazz.newMeth(C$, 'editCellAt$I$I$java_util_EventObject',  function (row, column, e) {
if (this.cellEditor != null  && !this.cellEditor.stopCellEditing$() ) {
return false;
}if (row < 0 || row >= this.getRowCount$()  || column < 0  || column >= this.getColumnCount$() ) {
return false;
}if (!this.isCellEditable$I$I(row, column)) return false;
if (this.editorRemover == null ) {
}var editor=this.getCellEditor$I$I(row, column);
if (editor != null  && editor.isCellEditable$java_util_EventObject(e) ) {
var comp=(this.editorComp=this.prepareEditor$javax_swing_table_TableCellEditor$I$I(editor, row, column));
if (this.editorComp == null ) {
this.removeEditor$();
return false;
}var isInPlace=(Clazz.instanceOf(editor, "javax.swing.JTable.BooleanInPlaceEditor"));
if (!isInPlace) {
this._getCellRect$I$I$Z$java_awt_Rectangle(row, column, false, C$.tmpRect);
this._addingEditor=true;
if (Clazz.instanceOf(comp, "javax.swing.JTextField")) {
C$.tmpRect.y-=3;
C$.tmpRect.width-=2;
C$.tmpRect.height-=3;
}comp.setBounds$java_awt_Rectangle(C$.tmpRect);
this.add$java_awt_Component(comp);
comp.validate$();
comp.秘repaint$();
comp.setVisible$Z(true);
comp.秘getUI$().setVisible$swingjs_api_js_DOMNode$Z(null, true);
var me=this;
$I$(23,"invokeLater$Runnable",[((P$.JTable$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "JTable$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.$finals$.me.hasFocus$()) this.$finals$.comp.requestFocus$();
});
})()
), Clazz.new_(P$.JTable$6.$init$,[this, {me:me,comp:comp}]))]);
}this.setEditingRow$I(row);
this.setEditingColumn$I(column);
this.setCellEditor$javax_swing_table_TableCellEditor(editor);
editor.removeCellEditorListener$javax_swing_event_CellEditorListener(this);
editor.addCellEditorListener$javax_swing_event_CellEditorListener(this);
this._addingEditor=false;
return true;
}return false;
});

Clazz.newMeth(C$, 'invalidate$',  function () {
if (!this._addingEditor) C$.superclazz.prototype.invalidate$.apply(this, []);
});

Clazz.newMeth(C$, 'invalidateComp$',  function () {
if (!this._addingEditor) C$.superclazz.prototype.invalidateComp$.apply(this, []);
});

Clazz.newMeth(C$, 'isEditing$',  function () {
return (this.cellEditor == null ) ? false : true;
});

Clazz.newMeth(C$, 'getEditorComponent$',  function () {
return this.editorComp;
});

Clazz.newMeth(C$, 'getEditingColumn$',  function () {
return this.editingColumn;
});

Clazz.newMeth(C$, 'getEditingRow$',  function () {
return this.editingRow;
});

Clazz.newMeth(C$, 'getUI$',  function () {
return this.ui;
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_TableUI',  function (ui) {
if (this.ui !== ui ) {
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
this.秘repaint$();
}});

Clazz.newMeth(C$, 'updateUI$',  function () {
var cm=this.getColumnModel$();
for (var column=cm.getColumnCount$(); --column >= 0; ) {
var aColumn=cm.getColumn$I(column);
$I$(23,"updateRendererOrEditorUI$O",[aColumn.getCellRenderer$()]);
$I$(23,"updateRendererOrEditorUI$O",[aColumn.getCellEditor$()]);
$I$(23,"updateRendererOrEditorUI$O",[aColumn.getHeaderRenderer$()]);
}
var defaultRenderers=this.defaultRenderersByColumnClass.elements$();
while (defaultRenderers.hasMoreElements$()){
$I$(23,"updateRendererOrEditorUI$O",[defaultRenderers.nextElement$()]);
}
var defaultEditors=this.defaultEditorsByColumnClass.elements$();
while (defaultEditors.hasMoreElements$()){
$I$(23,"updateRendererOrEditorUI$O",[defaultEditors.nextElement$()]);
}
if (this.tableHeader != null  && this.tableHeader.getParent$() == null  ) {
this.tableHeader.updateUI$();
}p$2.configureEnclosingScrollPaneUI.apply(this, []);
C$.superclazz.prototype.updateUI$.apply(this, []);
});

Clazz.newMeth(C$, 'setModel$javax_swing_table_TableModel',  function (dataModel) {
if (dataModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot set a null TableModel"]);
}if (this.dataModel !== dataModel ) {
var old=this.dataModel;
if (old != null ) {
old.removeTableModelListener$javax_swing_event_TableModelListener(this);
}this.dataModel=dataModel;
dataModel.addTableModelListener$javax_swing_event_TableModelListener(this);
this.tableChanged$javax_swing_event_TableModelEvent(Clazz.new_($I$(24,1).c$$javax_swing_table_TableModel$I,[dataModel, -1]));
this.firePropertyChange$S$O$O("model", old, dataModel);
if (this.getAutoCreateRowSorter$()) {
this.setRowSorter$javax_swing_RowSorter(Clazz.new_($I$(20,1).c$$javax_swing_table_TableModel,[dataModel]));
}}});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.dataModel;
});

Clazz.newMeth(C$, 'setColumnModel$javax_swing_table_TableColumnModel',  function (columnModel) {
if (columnModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot set a null ColumnModel"]);
}var old=this.columnModel;
if (columnModel !== old ) {
if (old != null ) {
old.removeColumnModelListener$javax_swing_event_TableColumnModelListener(this);
}this.columnModel=columnModel;
columnModel.addColumnModelListener$javax_swing_event_TableColumnModelListener(this);
if (this.tableHeader != null ) {
this.tableHeader.setColumnModel$javax_swing_table_TableColumnModel(columnModel);
}this.firePropertyChange$S$O$O("columnModel", old, columnModel);
this.resizeAnd秘repaint$();
}});

Clazz.newMeth(C$, 'getColumnModel$',  function () {
return this.columnModel;
});

Clazz.newMeth(C$, 'setSelectionModel$javax_swing_ListSelectionModel',  function (newModel) {
if (newModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot set a null SelectionModel"]);
}var oldModel=this.selectionModel;
if (newModel !== oldModel ) {
if (oldModel != null ) {
oldModel.removeListSelectionListener$javax_swing_event_ListSelectionListener(this);
}this.selectionModel=newModel;
newModel.addListSelectionListener$javax_swing_event_ListSelectionListener(this);
this.firePropertyChange$S$O$O("selectionModel", oldModel, newModel);
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getSelectionModel$',  function () {
return this.selectionModel;
});

Clazz.newMeth(C$, 'sorterChanged$javax_swing_event_RowSorterEvent',  function (e) {
if (e.getType$() === $I$(25).SORT_ORDER_CHANGED ) {
var header=this.getTableHeader$();
if (header != null ) {
header.秘repaint$();
}} else if (e.getType$() === $I$(25).SORTED ) {
this.sorterChanged=true;
if (!this.ignoreSortChange) {
p$2.sortedTableChanged$javax_swing_event_RowSorterEvent$javax_swing_event_TableModelEvent.apply(this, [e, null]);
}}});

Clazz.newMeth(C$, 'sortedTableChanged$javax_swing_event_RowSorterEvent$javax_swing_event_TableModelEvent',  function (sortedEvent, e) {
var editingModelIndex=-1;
var change=(e != null ) ? Clazz.new_($I$(26,1).c$$javax_swing_event_TableModelEvent,[this, null, e]) : null;
if ((change == null  || !change.allRowsChanged ) && this.editingRow != -1 ) {
editingModelIndex=p$2.convertRowIndexToModel$javax_swing_event_RowSorterEvent$I.apply(this, [sortedEvent, this.editingRow]);
}this.sortManager.prepareForChange$javax_swing_event_RowSorterEvent$javax_swing_JTable_ModelChange(sortedEvent, change);
if (e != null ) {
if (change.type == 0) {
p$2.repaintSortedRows$javax_swing_JTable_ModelChange.apply(this, [change]);
}p$2.notifySorter$javax_swing_JTable_ModelChange.apply(this, [change]);
if (change.type != 0) {
this.sorterChanged=true;
}} else {
this.sorterChanged=true;
}this.sortManager.processChange$javax_swing_event_RowSorterEvent$javax_swing_JTable_ModelChange$Z(sortedEvent, change, this.sorterChanged);
if (this.sorterChanged) {
if (this.editingRow != -1) {
var newIndex=(editingModelIndex == -1) ? -1 : p$2.convertRowIndexToView$I$javax_swing_JTable_ModelChange.apply(this, [editingModelIndex, change]);
p$2.restoreSortingEditingRow$I.apply(this, [newIndex]);
}if (e == null  || change.type != 0 ) {
this.resizeAnd秘repaint$();
}}if (change != null  && change.allRowsChanged ) {
p$2.clearSelectionAndLeadAnchor.apply(this, []);
this.resizeAnd秘repaint$();
}}, p$2);

Clazz.newMeth(C$, 'repaintSortedRows$javax_swing_JTable_ModelChange',  function (change) {
if (change.startModelIndex > change.endModelIndex || change.startModelIndex + 10 < change.endModelIndex ) {
this.秘repaint$();
return;
}var eventColumn=change.event.getColumn$();
var columnViewIndex=eventColumn;
if (columnViewIndex == -1) {
columnViewIndex=0;
} else {
columnViewIndex=this.convertColumnIndexToView$I(columnViewIndex);
if (columnViewIndex == -1) {
return;
}}var modelIndex=change.startModelIndex;
while (modelIndex <= change.endModelIndex){
var viewIndex=this.convertRowIndexToView$I(modelIndex++);
if (viewIndex != -1) {
this._getCellRect$I$I$Z$java_awt_Rectangle(viewIndex, columnViewIndex, false, C$.tmpRect);
var x=C$.tmpRect.x;
var w=C$.tmpRect.width;
if (eventColumn == -1) {
x=0;
w=this.getWidth$();
}this.repaint$I$I$I$I(x, C$.tmpRect.y, w, C$.tmpRect.height);
}}
}, p$2);

Clazz.newMeth(C$, 'restoreSortingSelection$IA$I$javax_swing_JTable_ModelChange',  function (selection, lead, change) {
for (var i=selection.length - 1; i >= 0; i--) {
selection[i]=p$2.convertRowIndexToView$I$javax_swing_JTable_ModelChange.apply(this, [selection[i], change]);
}
lead=p$2.convertRowIndexToView$I$javax_swing_JTable_ModelChange.apply(this, [lead, change]);
if (selection.length == 0 || (selection.length == 1 && selection[0] == this.getSelectedRow$() ) ) {
return;
}this.selectionModel.setValueIsAdjusting$Z(true);
this.selectionModel.clearSelection$();
for (var i=selection.length - 1; i >= 0; i--) {
if (selection[i] != -1) {
this.selectionModel.addSelectionInterval$I$I(selection[i], selection[i]);
}}
$I$(3).setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I(this.selectionModel, lead, lead);
this.selectionModel.setValueIsAdjusting$Z(false);
}, p$2);

Clazz.newMeth(C$, 'restoreSortingEditingRow$I',  function (editingRow) {
if (editingRow == -1) {
var editor=this.getCellEditor$();
if (editor != null ) {
editor.cancelCellEditing$();
if (this.getCellEditor$() != null ) {
this.removeEditor$();
}}} else {
this.editingRow=editingRow;
this.秘repaint$();
}}, p$2);

Clazz.newMeth(C$, 'notifySorter$javax_swing_JTable_ModelChange',  function (change) {
try {
this.ignoreSortChange=true;
this.sorterChanged=false;
switch (change.type) {
case 0:
if (change.event.getLastRow$() == 2147483647) {
this.sortManager.sorter.allRowsChanged$();
} else if (change.event.getColumn$() == -1) {
this.sortManager.sorter.rowsUpdated$I$I(change.startModelIndex, change.endModelIndex);
} else {
this.sortManager.sorter.rowsUpdated$I$I$I(change.startModelIndex, change.endModelIndex, change.event.getColumn$());
}break;
case 1:
this.sortManager.sorter.rowsInserted$I$I(change.startModelIndex, change.endModelIndex);
break;
case -1:
this.sortManager.sorter.rowsDeleted$I$I(change.startModelIndex, change.endModelIndex);
break;
}
} finally {
this.ignoreSortChange=false;
}
}, p$2);

Clazz.newMeth(C$, 'convertRowIndexToView$I$javax_swing_JTable_ModelChange',  function (modelIndex, change) {
if (modelIndex < 0) {
return -1;
}if (change != null  && modelIndex >= change.startModelIndex ) {
if (change.type == 1) {
if (modelIndex + change.length >= change.modelRowCount) {
return -1;
}return this.sortManager.sorter.convertRowIndexToView$I(modelIndex + change.length);
} else if (change.type == -1) {
if (modelIndex <= change.endModelIndex) {
return -1;
} else {
if (modelIndex - change.length >= change.modelRowCount) {
return -1;
}return this.sortManager.sorter.convertRowIndexToView$I(modelIndex - change.length);
}}}if (modelIndex >= this.getModel$().getRowCount$()) {
return -1;
}return this.sortManager.sorter.convertRowIndexToView$I(modelIndex);
}, p$2);

Clazz.newMeth(C$, 'convertSelectionToModel$javax_swing_event_RowSorterEvent',  function (e) {
var selection=this.getSelectedRows$();
for (var i=selection.length - 1; i >= 0; i--) {
selection[i]=p$2.convertRowIndexToModel$javax_swing_event_RowSorterEvent$I.apply(this, [e, selection[i]]);
}
return selection;
}, p$2);

Clazz.newMeth(C$, 'convertRowIndexToModel$javax_swing_event_RowSorterEvent$I',  function (e, viewIndex) {
if (e != null ) {
if (e.getPreviousRowCount$() == 0) {
return viewIndex;
}return e.convertPreviousRowIndexToModel$I(viewIndex);
}if (viewIndex < 0 || viewIndex >= this.getRowCount$() ) {
return -1;
}return this.convertRowIndexToModel$I(viewIndex);
}, p$2);

Clazz.newMeth(C$, 'tableChanged$javax_swing_event_TableModelEvent',  function (e) {
if (e == null  || e.getFirstRow$() == -1 ) {
p$2.clearSelectionAndLeadAnchor.apply(this, []);
this.rowModel=null;
if (this.sortManager != null ) {
try {
this.ignoreSortChange=true;
this.sortManager.sorter.modelStructureChanged$();
} finally {
this.ignoreSortChange=false;
}
this.sortManager.allChanged$();
}if (this.getAutoCreateColumnsFromModel$()) {
this.createDefaultColumnsFromModel$();
return;
}this.resizeAnd秘repaint$();
return;
}if (this.sortManager != null ) {
p$2.sortedTableChanged$javax_swing_event_RowSorterEvent$javax_swing_event_TableModelEvent.apply(this, [null, e]);
return;
}if (this.rowModel != null ) {
this.秘repaint$();
}if (e.getType$() == 1) {
p$2.tableRowsInserted$javax_swing_event_TableModelEvent.apply(this, [e]);
return;
}if (e.getType$() == -1) {
p$2.tableRowsDeleted$javax_swing_event_TableModelEvent.apply(this, [e]);
return;
}var modelColumn=e.getColumn$();
var start=e.getFirstRow$();
var end=e.getLastRow$();
var dirtyRegion;
if (modelColumn == -1) {
dirtyRegion=Clazz.new_([0, start * this.getRowHeight$(), this.getColumnModel$().getTotalColumnWidth$(), 0],$I$(13,1).c$$I$I$I$I);
} else {
var column=this.convertColumnIndexToView$I(modelColumn);
dirtyRegion=this.getCellRect$I$I$Z(start, column, false);
}if (end != 2147483647) {
dirtyRegion.height=(end - start + 1) * this.getRowHeight$();
this.repaint$I$I$I$I(dirtyRegion.x, dirtyRegion.y, dirtyRegion.width, dirtyRegion.height);
} else {
p$2.clearSelectionAndLeadAnchor.apply(this, []);
this.resizeAnd秘repaint$();
this.rowModel=null;
}});

Clazz.newMeth(C$, 'tableRowsInserted$javax_swing_event_TableModelEvent',  function (e) {
var start=e.getFirstRow$();
var end=e.getLastRow$();
if (start < 0) {
start=0;
}if (end < 0) {
end=this.getRowCount$() - 1;
}var length=end - start + 1;
this.selectionModel.insertIndexInterval$I$I$Z(start, length, true);
if (this.rowModel != null ) {
this.rowModel.insertEntries$I$I$I(start, length, this.getRowHeight$());
}var rh=this.getRowHeight$();
var drawRect=Clazz.new_([0, start * rh, this.getColumnModel$().getTotalColumnWidth$(), (this.getRowCount$() - start) * rh],$I$(13,1).c$$I$I$I$I);
this.firePropertyChange$S$O$O("tableAppending", null, e);
var r=this.getVisibleRect$();
if (drawRect.y > r.y + r.height) return;
this.revalidate$();
this.repaint$java_awt_Rectangle(drawRect);
}, p$2);

Clazz.newMeth(C$, 'tableRowsDeleted$javax_swing_event_TableModelEvent',  function (e) {
var start=e.getFirstRow$();
var end=e.getLastRow$();
if (start < 0) {
start=0;
}if (end < 0) {
end=this.getRowCount$() - 1;
}var deletedCount=end - start + 1;
var previousRowCount=this.getRowCount$() + deletedCount;
this.selectionModel.removeIndexInterval$I$I(start, end);
if (this.rowModel != null ) {
this.rowModel.removeEntries$I$I(start, deletedCount);
}var rh=this.getRowHeight$();
var drawRect=Clazz.new_([0, start * rh, this.getColumnModel$().getTotalColumnWidth$(), (previousRowCount - start) * rh],$I$(13,1).c$$I$I$I$I);
this.revalidate$();
this.repaint$java_awt_Rectangle(drawRect);
}, p$2);

Clazz.newMeth(C$, 'columnAdded$javax_swing_event_TableColumnModelEvent',  function (e) {
if (this.isEditing$()) {
this.removeEditor$();
}this.resizeAnd秘repaint$();
});

Clazz.newMeth(C$, 'columnRemoved$javax_swing_event_TableColumnModelEvent',  function (e) {
if (this.isEditing$()) {
this.removeEditor$();
}this.resizeAnd秘repaint$();
});

Clazz.newMeth(C$, 'columnMoved$javax_swing_event_TableColumnModelEvent',  function (e) {
if (this.isEditing$()) {
this.removeEditor$();
}this.秘repaint$();
});

Clazz.newMeth(C$, 'columnMarginChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.isEditing$()) {
this.removeEditor$();
}var resizingColumn=p$2.getResizingColumn.apply(this, []);
if (resizingColumn != null  && this.autoResizeMode == 0 ) {
resizingColumn.setPreferredWidth$I(resizingColumn.getWidth$());
}this.resizeAnd秘repaint$();
});

Clazz.newMeth(C$, 'limit$I$I$I',  function (i, min, max) {
return Math.min(Math.max(i, min), max);
}, 1);

Clazz.newMeth(C$, 'columnSelectionChanged$javax_swing_event_ListSelectionEvent',  function (e) {
var isAdjusting=e.getValueIsAdjusting$();
if (this.columnSelectionAdjusting && !isAdjusting ) {
this.columnSelectionAdjusting=false;
return;
}this.columnSelectionAdjusting=isAdjusting;
var nr;
var nc;
if ((nr=this.getRowCount$()) <= 0 || (nc=this.getColumnCount$()) <= 0 ) {
return;
}var firstIndex=C$.limit$I$I$I(e.getFirstIndex$(), 0, nc - 1);
var lastIndex=C$.limit$I$I$I(e.getLastIndex$(), 0, nc - 1);
var minRow=0;
var maxRow=nr - 1;
if (this.getRowSelectionAllowed$()) {
minRow=this.selectionModel.getMinSelectionIndex$();
maxRow=this.selectionModel.getMaxSelectionIndex$();
var leadRow=p$2.getAdjustedIndex$I$Z.apply(this, [this.selectionModel.getLeadSelectionIndex$(), true]);
if (minRow == -1 || maxRow == -1 ) {
if (leadRow == -1) {
return;
}minRow=maxRow=leadRow;
} else {
if (leadRow != -1) {
minRow=Math.min(minRow, leadRow);
maxRow=Math.max(maxRow, leadRow);
}}}var firstColumnRect=this.getCellRect$I$I$Z(minRow, firstIndex, false);
var lastColumnRect=this.getCellRect$I$I$Z(maxRow, lastIndex, false);
var dirtyRegion=firstColumnRect.union$java_awt_Rectangle(lastColumnRect);
this.repaint$java_awt_Rectangle(dirtyRegion);
});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (this.sortManager != null ) {
this.sortManager.viewSelectionChanged$javax_swing_event_ListSelectionEvent(e);
}var isAdjusting=e.getValueIsAdjusting$();
if (this.rowSelectionAdjusting && !isAdjusting ) {
this.rowSelectionAdjusting=false;
return;
}this.rowSelectionAdjusting=isAdjusting;
if (this.getRowCount$() <= 0 || this.getColumnCount$() <= 0 ) {
return;
}var firstIndex=C$.limit$I$I$I(e.getFirstIndex$(), 0, this.getRowCount$() - 1);
var lastIndex=C$.limit$I$I$I(e.getLastIndex$(), 0, this.getRowCount$() - 1);
var firstRowRect=this.getCellRect$I$I$Z(firstIndex, 0, false);
var lastRowRect=this.getCellRect$I$I$Z(lastIndex, this.getColumnCount$() - 1, false);
var dirtyRegion=firstRowRect.union$java_awt_Rectangle(lastRowRect);
this.repaint$java_awt_Rectangle(dirtyRegion);
});

Clazz.newMeth(C$, 'editingStopped$javax_swing_event_ChangeEvent',  function (e) {
var editor=this.getCellEditor$();
if (editor != null ) {
var value=editor.getCellEditorValue$();
this.setValueAt$O$I$I(value, this.editingRow, this.editingColumn);
this.removeEditor$();
}});

Clazz.newMeth(C$, 'editingCanceled$javax_swing_event_ChangeEvent',  function (e) {
this.removeEditor$();
});

Clazz.newMeth(C$, 'setPreferredScrollableViewportSize$java_awt_Dimension',  function (size) {
this.preferredViewportSize=size;
});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$',  function () {
return this.preferredViewportSize;
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
var leadingRow;
var leadingCol;
var leadingCellRect;
var leadingVisibleEdge;
var leadingCellEdge;
var leadingCellSize;
leadingRow=p$2.getLeadingRow$java_awt_Rectangle.apply(this, [visibleRect]);
leadingCol=p$2.getLeadingCol$java_awt_Rectangle.apply(this, [visibleRect]);
if (orientation == 1 && leadingRow < 0 ) {
return this.getRowHeight$();
} else if (orientation == 0 && leadingCol < 0 ) {
return 100;
}leadingCellRect=this.getCellRect$I$I$Z(leadingRow, leadingCol, true);
leadingVisibleEdge=p$2.leadingEdge$java_awt_Rectangle$I.apply(this, [visibleRect, orientation]);
leadingCellEdge=p$2.leadingEdge$java_awt_Rectangle$I.apply(this, [leadingCellRect, orientation]);
if (orientation == 1) {
leadingCellSize=leadingCellRect.height;
} else {
leadingCellSize=leadingCellRect.width;
}if (leadingVisibleEdge == leadingCellEdge) {
if (direction < 0) {
var retVal=0;
if (orientation == 1) {
while (--leadingRow >= 0){
retVal=this.getRowHeight$I(leadingRow);
if (retVal != 0) {
break;
}}
} else {
while (--leadingCol >= 0){
retVal=this.getCellRect$I$I$Z(leadingRow, leadingCol, true).width;
if (retVal != 0) {
break;
}}
}return retVal;
} else {
return leadingCellSize;
}} else {
var hiddenAmt=Math.abs(leadingVisibleEdge - leadingCellEdge);
var visibleAmt=leadingCellSize - hiddenAmt;
if (direction > 0) {
return visibleAmt;
} else {
return hiddenAmt;
}}});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
if (this.getRowCount$() == 0) {
if (1 == orientation) {
var rh=this.getRowHeight$();
return (rh > 0) ? Math.max(rh, ((visibleRect.height/rh|0)) * rh) : visibleRect.height;
} else {
return visibleRect.width;
}}if (null == this.rowModel  && 1 == orientation ) {
var row=this.rowAtPoint$java_awt_Point(visibleRect.getLocation$());
var col=this.columnAtPoint$java_awt_Point(visibleRect.getLocation$());
var cellRect=this.getCellRect$I$I$Z(row, col, true);
if (cellRect.y == visibleRect.y) {
var rh=this.getRowHeight$();
return Math.max(rh, ((visibleRect.height/rh|0)) * rh);
}}if (direction < 0) {
return p$2.getPreviousBlockIncrement$java_awt_Rectangle$I.apply(this, [visibleRect, orientation]);
} else {
return p$2.getNextBlockIncrement$java_awt_Rectangle$I.apply(this, [visibleRect, orientation]);
}});

Clazz.newMeth(C$, 'getPreviousBlockIncrement$java_awt_Rectangle$I',  function (visibleRect, orientation) {
var row;
var col;
var newEdge;
var newCellLoc;
var visibleLeadingEdge=p$2.leadingEdge$java_awt_Rectangle$I.apply(this, [visibleRect, orientation]);
var leftToRight=this.getComponentOrientation$().isLeftToRight$();
var newLeadingEdge;
if (orientation == 1) {
newEdge=visibleLeadingEdge - visibleRect.height;
var x=visibleRect.x + (leftToRight ? 0 : visibleRect.width);
newCellLoc=Clazz.new_($I$(27,1).c$$I$I,[x, newEdge]);
} else if (leftToRight) {
newEdge=visibleLeadingEdge - visibleRect.width;
newCellLoc=Clazz.new_($I$(27,1).c$$I$I,[newEdge, visibleRect.y]);
} else {
newEdge=visibleLeadingEdge + visibleRect.width;
newCellLoc=Clazz.new_($I$(27,1).c$$I$I,[newEdge - 1, visibleRect.y]);
}row=this.rowAtPoint$java_awt_Point(newCellLoc);
col=this.columnAtPoint$java_awt_Point(newCellLoc);
if (!!(orientation == 1 & row < 0)) {
newLeadingEdge=0;
} else if (!!(orientation == 0 & col < 0)) {
if (leftToRight) {
newLeadingEdge=0;
} else {
newLeadingEdge=this.getWidth$();
}} else {
var newCellRect=this.getCellRect$I$I$Z(row, col, true);
var newCellLeadingEdge=p$2.leadingEdge$java_awt_Rectangle$I.apply(this, [newCellRect, orientation]);
var newCellTrailingEdge=p$2.trailingEdge$java_awt_Rectangle$I.apply(this, [newCellRect, orientation]);
if ((orientation == 1 || leftToRight ) && (newCellTrailingEdge >= visibleLeadingEdge) ) {
newLeadingEdge=newCellLeadingEdge;
} else if (orientation == 0 && !leftToRight  && newCellTrailingEdge <= visibleLeadingEdge ) {
newLeadingEdge=newCellLeadingEdge;
} else if (newEdge == newCellLeadingEdge) {
newLeadingEdge=newCellLeadingEdge;
} else {
newLeadingEdge=newCellTrailingEdge;
}}return Math.abs(visibleLeadingEdge - newLeadingEdge);
}, p$2);

Clazz.newMeth(C$, 'getNextBlockIncrement$java_awt_Rectangle$I',  function (visibleRect, orientation) {
var trailingRow=p$2.getTrailingRow$java_awt_Rectangle.apply(this, [visibleRect]);
var trailingCol=p$2.getTrailingCol$java_awt_Rectangle.apply(this, [visibleRect]);
var cellRect;
var cellFillsVis;
var cellLeadingEdge;
var cellTrailingEdge;
var newLeadingEdge;
var visibleLeadingEdge=p$2.leadingEdge$java_awt_Rectangle$I.apply(this, [visibleRect, orientation]);
if (orientation == 1 && trailingRow < 0 ) {
return visibleRect.height;
} else if (orientation == 0 && trailingCol < 0 ) {
return visibleRect.width;
}cellRect=this.getCellRect$I$I$Z(trailingRow, trailingCol, true);
cellLeadingEdge=p$2.leadingEdge$java_awt_Rectangle$I.apply(this, [cellRect, orientation]);
cellTrailingEdge=p$2.trailingEdge$java_awt_Rectangle$I.apply(this, [cellRect, orientation]);
if (orientation == 1 || this.getComponentOrientation$().isLeftToRight$() ) {
cellFillsVis=cellLeadingEdge <= visibleLeadingEdge;
} else {
cellFillsVis=cellLeadingEdge >= visibleLeadingEdge;
}if (cellFillsVis) {
newLeadingEdge=cellTrailingEdge;
} else if (cellTrailingEdge == p$2.trailingEdge$java_awt_Rectangle$I.apply(this, [visibleRect, orientation])) {
newLeadingEdge=cellTrailingEdge;
} else {
newLeadingEdge=cellLeadingEdge;
}return Math.abs(newLeadingEdge - visibleLeadingEdge);
}, p$2);

Clazz.newMeth(C$, 'getLeadingRow$java_awt_Rectangle',  function (visibleRect) {
var leadingPoint;
if (this.getComponentOrientation$().isLeftToRight$()) {
leadingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x, visibleRect.y]);
} else {
leadingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x + visibleRect.width - 1, visibleRect.y]);
}return this.rowAtPoint$java_awt_Point(leadingPoint);
}, p$2);

Clazz.newMeth(C$, 'getLeadingCol$java_awt_Rectangle',  function (visibleRect) {
var leadingPoint;
if (this.getComponentOrientation$().isLeftToRight$()) {
leadingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x, visibleRect.y]);
} else {
leadingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x + visibleRect.width - 1, visibleRect.y]);
}return this.columnAtPoint$java_awt_Point(leadingPoint);
}, p$2);

Clazz.newMeth(C$, 'getTrailingRow$java_awt_Rectangle',  function (visibleRect) {
var trailingPoint;
if (this.getComponentOrientation$().isLeftToRight$()) {
trailingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x, visibleRect.y + visibleRect.height - 1]);
} else {
trailingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x + visibleRect.width - 1, visibleRect.y + visibleRect.height - 1]);
}return this.rowAtPoint$java_awt_Point(trailingPoint);
}, p$2);

Clazz.newMeth(C$, 'getTrailingCol$java_awt_Rectangle',  function (visibleRect) {
var trailingPoint;
if (this.getComponentOrientation$().isLeftToRight$()) {
trailingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x + visibleRect.width - 1, visibleRect.y]);
} else {
trailingPoint=Clazz.new_($I$(27,1).c$$I$I,[visibleRect.x, visibleRect.y]);
}return this.columnAtPoint$java_awt_Point(trailingPoint);
}, p$2);

Clazz.newMeth(C$, 'leadingEdge$java_awt_Rectangle$I',  function (rect, orientation) {
if (orientation == 1) {
return rect.y;
} else if (this.getComponentOrientation$().isLeftToRight$()) {
return rect.x;
} else {
return rect.x + rect.width;
}}, p$2);

Clazz.newMeth(C$, 'trailingEdge$java_awt_Rectangle$I',  function (rect, orientation) {
if (orientation == 1) {
return rect.y + rect.height;
} else if (this.getComponentOrientation$().isLeftToRight$()) {
return rect.x + rect.width;
} else {
return rect.x;
}}, p$2);

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
return !(this.autoResizeMode == 0);
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$',  function () {
return this.getFillsViewportHeight$() && Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport") && ((this.getParent$()).getHeight$() > this.getPreferredSize$().height)  ;
});

Clazz.newMeth(C$, 'setFillsViewportHeight$Z',  function (fillsViewportHeight) {
var old=this.fillsViewportHeight;
this.fillsViewportHeight=fillsViewportHeight;
this.resizeAnd秘repaint$();
this.firePropertyChange$S$Z$Z("fillsViewportHeight", old, fillsViewportHeight);
});

Clazz.newMeth(C$, 'getFillsViewportHeight$',  function () {
return this.fillsViewportHeight;
});

Clazz.newMeth(C$, 'processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z',  function (ks, e, condition, pressed) {
var retValue=C$.superclazz.prototype.processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z.apply(this, [ks, e, condition, pressed]);
if (!retValue && condition == 1  && this.isFocusOwner$()  && !Boolean.FALSE.equals$O(this.getClientProperty$O("JTable.autoStartsEdit")) ) {
var editorComponent=this.getEditorComponent$();
if (editorComponent == null ) {
if (e == null  || e.getID$() != 401 ) {
return false;
}var code=e.getKeyCode$();
if (code == 16 || code == 17  || code == 18 ) {
return false;
}var leadRow=this.getSelectionModel$().getLeadSelectionIndex$();
var leadColumn=this.getColumnModel$().getSelectionModel$().getLeadSelectionIndex$();
if (leadRow != -1 && leadColumn != -1  && !this.isEditing$() ) {
if (!this.editCellAt$I$I$java_util_EventObject(leadRow, leadColumn, e)) {
return false;
}}editorComponent=this.getEditorComponent$();
if (editorComponent == null ) {
return false;
}}if (Clazz.instanceOf(editorComponent, "javax.swing.JComponent")) {
retValue=(editorComponent).processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z(ks, e, 0, pressed);
if (this.getSurrendersFocusOnKeystroke$()) {
editorComponent.requestFocus$();
}}}return retValue;
});

Clazz.newMeth(C$, 'setLazyValue$java_util_Hashtable$Class$S',  function (h, c, s) {
h.put$O$O(c, Clazz.new_($I$(28,1).c$$S,[s]));
}, p$2);

Clazz.newMeth(C$, 'setLazyRenderer$Class$S',  function (c, s) {
p$2.setLazyValue$java_util_Hashtable$Class$S.apply(this, [this.defaultRenderersByColumnClass, c, s]);
}, p$2);

Clazz.newMeth(C$, 'createDefaultRenderers$',  function () {
this.defaultRenderersByColumnClass=Clazz.new_($I$(29,1).c$$I$F,[8, 0.75]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass(java.lang.Object), "javax.swing.table.DefaultTableCellRenderer$UIResource"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass(String), "javax.swing.table.DefaultTableCellRenderer$UIResource"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass(Number), "javax.swing.JTable$NumberRenderer"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass(Float), "javax.swing.JTable$DoubleRenderer"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass(Double), "javax.swing.JTable$DoubleRenderer"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass(java.util.Date), "javax.swing.JTable$DateRenderer"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass($I$(30),['getIconHeight$','getIconWidth$','paintIcon$java_awt_Component$java_awt_Graphics$I$I']), "javax.swing.JTable$IconRenderer"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass($I$(31)), "javax.swing.JTable$IconRenderer"]);
p$2.setLazyRenderer$Class$S.apply(this, [Clazz.getClass(Boolean), "javax.swing.JTable$BooleanRenderer"]);
});

Clazz.newMeth(C$, 'setLazyEditor$Class$S',  function (c, s) {
p$2.setLazyValue$java_util_Hashtable$Class$S.apply(this, [this.defaultEditorsByColumnClass, c, s]);
}, p$2);

Clazz.newMeth(C$, 'createDefaultEditors$',  function () {
this.defaultEditorsByColumnClass=Clazz.new_($I$(29,1).c$$I$F,[3, 0.75]);
p$2.setLazyEditor$Class$S.apply(this, [Clazz.getClass(java.lang.Object), "javax.swing.JTable$GenericEditor"]);
p$2.setLazyEditor$Class$S.apply(this, [Clazz.getClass(Number), "javax.swing.JTable$NumberEditor"]);
p$2.setLazyEditor$Class$S.apply(this, [Clazz.getClass(Boolean), "javax.swing.JTable$BooleanEditor"]);
});

Clazz.newMeth(C$, 'initializeLocalVars$',  function () {
this.updateSelectionOnSort=true;
this.setOpaque$Z(true);
this.createDefaultRenderers$();
this.createDefaultEditors$();
this.setTableHeader$javax_swing_table_JTableHeader(this.createDefaultTableHeader$());
this.setShowGrid$Z(true);
this.setAutoResizeMode$I(2);
this.setRowHeight$I(16);
this.isRowHeightSet=false;
this.setRowMargin$I(1);
this.setRowSelectionAllowed$Z(true);
this.setCellEditor$javax_swing_table_TableCellEditor(null);
this.setEditingColumn$I(-1);
this.setEditingRow$I(-1);
this.setSurrendersFocusOnKeystroke$Z(false);
this.setPreferredScrollableViewportSize$java_awt_Dimension(Clazz.new_($I$(18,1).c$$I$I,[450, 400]));
this.setAutoscrolls$Z(true);
});

Clazz.newMeth(C$, 'createDefaultDataModel$',  function () {
return Clazz.new_($I$(15,1));
});

Clazz.newMeth(C$, 'createDefaultColumnModel$',  function () {
return Clazz.new_($I$(32,1));
});

Clazz.newMeth(C$, 'createDefaultSelectionModel$',  function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'createDefaultTableHeader$',  function () {
return Clazz.new_($I$(33,1).c$$javax_swing_table_TableColumnModel,[this.columnModel]);
});

Clazz.newMeth(C$, 'resizeAnd秘repaint$',  function () {
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'resizeAndRepaint$',  function () {
this.revalidate$();
this.repaint$();
});

Clazz.newMeth(C$, 'getCellEditor$',  function () {
return this.cellEditor;
});

Clazz.newMeth(C$, 'setCellEditor$javax_swing_table_TableCellEditor',  function (anEditor) {
var oldEditor=this.cellEditor;
this.cellEditor=anEditor;
var a=this._addingEditor;
this._addingEditor=true;
this.firePropertyChange$S$O$O("tableCellEditor", oldEditor, anEditor);
this._addingEditor=a;
});

Clazz.newMeth(C$, 'setEditingColumn$I',  function (aColumn) {
this.editingColumn=aColumn;
});

Clazz.newMeth(C$, 'setEditingRow$I',  function (aRow) {
this.editingRow=aRow;
});

Clazz.newMeth(C$, 'getCellRenderer$I$I',  function (row, column) {
var tableColumn=this.getColumnModel$().getColumn$I(column);
var renderer=tableColumn.getCellRenderer$();
if (renderer == null ) {
renderer=this.getDefaultRenderer$Class(this.getColumnClass$I(column));
}return renderer;
});

Clazz.newMeth(C$, 'prepareRenderer$javax_swing_table_TableCellRenderer$I$I',  function (renderer, row, column) {
var value=this.getValueAt$I$I(row, column);
var isSelected=false;
var hasFocus=false;
if (!this.isPaintingForPrint$()) {
isSelected=this.isCellSelected$I$I(row, column);
var rowIsLead=(this.selectionModel.getLeadSelectionIndex$() == row);
var colIsLead=(this.columnModel.getSelectionModel$().getLeadSelectionIndex$() == column);
hasFocus=(rowIsLead && colIsLead ) && this.isFocusOwner$() ;
}return renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this, value, isSelected, hasFocus, row, column);
});

Clazz.newMeth(C$, 'getCellEditor$I$I',  function (row, column) {
var tableColumn=this.getColumnModel$().getColumn$I(column);
var editor=p$2.秘getDefaultEditor$I$I.apply(this, [row, column]);
return (editor != null  ? editor : (editor=tableColumn.getCellEditor$()) != null  ? editor : this.getDefaultEditor$Class(this.getColumnClass$I(column)));
});

Clazz.newMeth(C$, '秘getDefaultEditor$I$I',  function (row, column) {
var renderer=null;
if (Clazz.instanceOf(this.getValueAt$I$I(row, column), "java.lang.Boolean") && Clazz.instanceOf((renderer=this.getCellRenderer$I$I(row, column)), "javax.swing.JCheckBox") ) {
var value=(this.getValueAt$I$I(row, column)).booleanValue$();
var editor=Clazz.new_($I$(34,1).c$$javax_swing_JCheckBox$Z,[renderer, value]);
return editor;
}return null;
}, p$2);

Clazz.newMeth(C$, 'prepareEditor$javax_swing_table_TableCellEditor$I$I',  function (editor, row, column) {
var value=this.getValueAt$I$I(row, column);
var isSelected=this.isCellSelected$I$I(row, column);
var comp=editor.getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I(this, value, isSelected, row, column);
if (editor.getClass$().getName$() === "javax.swing.JTable$BooleanEditor" ) comp.putClientProperty$O$O("_jsBooleanEditor", Boolean.TRUE);
$I$(35).setJ2SRendererComponent$javax_swing_JComponent(comp);
return comp;
});

Clazz.newMeth(C$, '秘clearDelegateListeners$javax_swing_JCheckBox',  function (c) {
var list=c.getActionListeners$();
for (var i=list.length; --i >= 0; ) {
if (Clazz.instanceOf(list[i], "javax.swing.DefaultCellEditor.EditorDelegate")) c.removeActionListener$java_awt_event_ActionListener(list[i]);
}
return c;
}, 1);

Clazz.newMeth(C$, 'removeEditor$',  function () {
this.editorRemover=null;
this._addingEditor=true;
var editor=this.getCellEditor$();
if (editor != null ) {
var cellRect=null;
editor.removeCellEditorListener$javax_swing_event_CellEditorListener(this);
if (!(Clazz.instanceOf(editor, "javax.swing.JTable.BooleanInPlaceEditor"))) {
if (this.editorComp != null ) {
this.remove$java_awt_Component(this.editorComp);
}}cellRect=this.getCellRect$I$I$Z(this.editingRow, this.editingColumn, false);
this.setCellEditor$javax_swing_table_TableCellEditor(null);
this.setEditingColumn$I(-1);
this.setEditingRow$I(-1);
this.editorComp=null;
this._addingEditor=false;
if (cellRect != null ) this.repaint$java_awt_Rectangle(cellRect);
}});

Clazz.newMeth(C$, 'getCellRendererOrNull$I$I$Z',  function (row, col, isScrolling) {
return this.getCellRenderer$I$I(row, col);
});

C$.$static$=function(){C$.$static$=0;
C$.tmpRect=Clazz.new_($I$(13,1));
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.JTable, "PrintMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NORMAL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FIT_WIDTH", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JTable, "Resizable2", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JTable, "Resizable3", function(){
}, null, [['javax.swing.JTable','javax.swing.JTable.Resizable2']]);

C$.$clinit$=2;
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "SortManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['syncingSelection'],'I',['modelLeadIndex'],'O',['sorter','javax.swing.RowSorter','modelSelection','javax.swing.ListSelectionModel','lastModelSelection','int[]','modelRowSizes','javax.swing.SizeSequence']]]

Clazz.newMeth(C$, 'c$$javax_swing_RowSorter',  function (sorter) {
;C$.$init$.apply(this);
this.sorter=sorter;
sorter.addRowSorterListener$javax_swing_event_RowSorterListener(this.b$['javax.swing.JTable']);
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.sorter != null ) {
this.sorter.removeRowSorterListener$javax_swing_event_RowSorterListener(this.b$['javax.swing.JTable']);
}});

Clazz.newMeth(C$, 'setViewRowHeight$I$I',  function (viewIndex, rowHeight) {
if (this.modelRowSizes == null ) {
this.modelRowSizes=Clazz.new_([this.b$['javax.swing.JTable'].getModel$.apply(this.b$['javax.swing.JTable'], []).getRowCount$(), this.b$['javax.swing.JTable'].getRowHeight$.apply(this.b$['javax.swing.JTable'], [])],$I$(1,1).c$$I$I);
}this.modelRowSizes.setSize$I$I(this.b$['javax.swing.JTable'].convertRowIndexToModel$I.apply(this.b$['javax.swing.JTable'], [viewIndex]), rowHeight);
});

Clazz.newMeth(C$, 'allChanged$',  function () {
this.modelLeadIndex=-1;
this.modelSelection=null;
this.modelRowSizes=null;
});

Clazz.newMeth(C$, 'viewSelectionChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (!this.syncingSelection && this.modelSelection != null  ) {
this.modelSelection=null;
}});

Clazz.newMeth(C$, 'prepareForChange$javax_swing_event_RowSorterEvent$javax_swing_JTable_ModelChange',  function (sortEvent, change) {
if (this.b$['javax.swing.JTable'].getUpdateSelectionOnSort$.apply(this.b$['javax.swing.JTable'], [])) {
p$1.cacheSelection$javax_swing_event_RowSorterEvent$javax_swing_JTable_ModelChange.apply(this, [sortEvent, change]);
}});

Clazz.newMeth(C$, 'cacheSelection$javax_swing_event_RowSorterEvent$javax_swing_JTable_ModelChange',  function (sortEvent, change) {
if (sortEvent != null ) {
if (this.modelSelection == null  && this.sorter.getViewRowCount$() != this.b$['javax.swing.JTable'].getModel$.apply(this.b$['javax.swing.JTable'], []).getRowCount$() ) {
this.modelSelection=Clazz.new_($I$(2,1));
var viewSelection=this.b$['javax.swing.JTable'].getSelectionModel$.apply(this.b$['javax.swing.JTable'], []);
var min=viewSelection.getMinSelectionIndex$();
var max=viewSelection.getMaxSelectionIndex$();
var modelIndex;
for (var viewIndex=min; viewIndex <= max; viewIndex++) {
if (viewSelection.isSelectedIndex$I(viewIndex)) {
modelIndex=p$2.convertRowIndexToModel$javax_swing_event_RowSorterEvent$I.apply(this.b$['javax.swing.JTable'], [sortEvent, viewIndex]);
if (modelIndex != -1) {
this.modelSelection.addSelectionInterval$I$I(modelIndex, modelIndex);
}}}
modelIndex=p$2.convertRowIndexToModel$javax_swing_event_RowSorterEvent$I.apply(this.b$['javax.swing.JTable'], [sortEvent, viewSelection.getLeadSelectionIndex$()]);
$I$(3).setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I(this.modelSelection, modelIndex, modelIndex);
} else if (this.modelSelection == null ) {
p$1.cacheModelSelection$javax_swing_event_RowSorterEvent.apply(this, [sortEvent]);
}} else if (change.allRowsChanged) {
this.modelSelection=null;
} else if (this.modelSelection != null ) {
switch (change.type) {
case -1:
this.modelSelection.removeIndexInterval$I$I(change.startModelIndex, change.endModelIndex);
break;
case 1:
this.modelSelection.insertIndexInterval$I$I$Z(change.startModelIndex, change.endModelIndex, true);
break;
default:
break;
}
} else {
p$1.cacheModelSelection$javax_swing_event_RowSorterEvent.apply(this, [null]);
}}, p$1);

Clazz.newMeth(C$, 'cacheModelSelection$javax_swing_event_RowSorterEvent',  function (sortEvent) {
this.lastModelSelection=p$2.convertSelectionToModel$javax_swing_event_RowSorterEvent.apply(this.b$['javax.swing.JTable'], [sortEvent]);
this.modelLeadIndex=p$2.convertRowIndexToModel$javax_swing_event_RowSorterEvent$I.apply(this.b$['javax.swing.JTable'], [sortEvent, this.b$['javax.swing.JTable'].selectionModel.getLeadSelectionIndex$()]);
}, p$1);

Clazz.newMeth(C$, 'processChange$javax_swing_event_RowSorterEvent$javax_swing_JTable_ModelChange$Z',  function (sortEvent, change, sorterChanged) {
if (change != null ) {
if (change.allRowsChanged) {
this.modelRowSizes=null;
this.b$['javax.swing.JTable'].rowModel=null;
} else if (this.modelRowSizes != null ) {
if (change.type == 1) {
this.modelRowSizes.insertEntries$I$I$I(change.startModelIndex, change.endModelIndex - change.startModelIndex + 1, this.b$['javax.swing.JTable'].getRowHeight$.apply(this.b$['javax.swing.JTable'], []));
} else if (change.type == -1) {
this.modelRowSizes.removeEntries$I$I(change.startModelIndex, change.endModelIndex - change.startModelIndex + 1);
}}}if (sorterChanged) {
p$1.setViewRowHeightsFromModel.apply(this, []);
p$1.restoreSelection$javax_swing_JTable_ModelChange.apply(this, [change]);
}});

Clazz.newMeth(C$, 'setViewRowHeightsFromModel',  function () {
if (this.modelRowSizes != null ) {
this.b$['javax.swing.JTable'].rowModel.setSizes$I$I(this.b$['javax.swing.JTable'].getRowCount$.apply(this.b$['javax.swing.JTable'], []), this.b$['javax.swing.JTable'].getRowHeight$.apply(this.b$['javax.swing.JTable'], []));
for (var viewIndex=this.b$['javax.swing.JTable'].getRowCount$.apply(this.b$['javax.swing.JTable'], []) - 1; viewIndex >= 0; viewIndex--) {
var modelIndex=this.b$['javax.swing.JTable'].convertRowIndexToModel$I.apply(this.b$['javax.swing.JTable'], [viewIndex]);
this.b$['javax.swing.JTable'].rowModel.setSize$I$I(viewIndex, this.modelRowSizes.getSize$I(modelIndex));
}
}}, p$1);

Clazz.newMeth(C$, 'restoreSelection$javax_swing_JTable_ModelChange',  function (change) {
this.syncingSelection=true;
if (this.lastModelSelection != null ) {
p$2.restoreSortingSelection$IA$I$javax_swing_JTable_ModelChange.apply(this.b$['javax.swing.JTable'], [this.lastModelSelection, this.modelLeadIndex, change]);
this.lastModelSelection=null;
} else if (this.modelSelection != null ) {
var viewSelection=this.b$['javax.swing.JTable'].getSelectionModel$.apply(this.b$['javax.swing.JTable'], []);
viewSelection.setValueIsAdjusting$Z(true);
viewSelection.clearSelection$();
var min=this.modelSelection.getMinSelectionIndex$();
var max=this.modelSelection.getMaxSelectionIndex$();
var viewIndex;
for (var modelIndex=min; modelIndex <= max; modelIndex++) {
if (this.modelSelection.isSelectedIndex$I(modelIndex)) {
viewIndex=this.b$['javax.swing.JTable'].convertRowIndexToView$I.apply(this.b$['javax.swing.JTable'], [modelIndex]);
if (viewIndex != -1) {
viewSelection.addSelectionInterval$I$I(viewIndex, viewIndex);
}}}
var viewLeadIndex=this.modelSelection.getLeadSelectionIndex$();
if (viewLeadIndex != -1) {
viewLeadIndex=this.b$['javax.swing.JTable'].convertRowIndexToView$I.apply(this.b$['javax.swing.JTable'], [viewLeadIndex]);
}$I$(3).setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I(viewSelection, viewLeadIndex, viewLeadIndex);
viewSelection.setValueIsAdjusting$Z(false);
}this.syncingSelection=false;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "ModelChange", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['allRowsChanged'],'I',['startModelIndex','endModelIndex','type','modelRowCount','length'],'O',['event','javax.swing.event.TableModelEvent']]]

Clazz.newMeth(C$, 'c$$javax_swing_event_TableModelEvent',  function (e) {
;C$.$init$.apply(this);
this.startModelIndex=Math.max(0, e.getFirstRow$());
this.endModelIndex=e.getLastRow$();
this.modelRowCount=this.b$['javax.swing.JTable'].getModel$.apply(this.b$['javax.swing.JTable'], []).getRowCount$();
if (this.endModelIndex < 0) {
this.endModelIndex=Math.max(0, this.modelRowCount - 1);
}this.length=this.endModelIndex - this.startModelIndex + 1;
this.type=e.getType$();
this.event=e;
this.allRowsChanged=(e.getLastRow$() == 2147483647);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "NumberRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.table.DefaultTableCellRenderer','.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setHorizontalAlignment$I(4);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "DoubleRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.JTable','.NumberRenderer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['formatter','java.text.NumberFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (this.formatter == null ) {
this.formatter=$I$(4).getInstance$();
}this.setText$S((value == null ) ? "" : this.formatter.format$O(value));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "DateRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.table.DefaultTableCellRenderer','.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['formatter','java.text.DateFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (this.formatter == null ) {
this.formatter=$I$(5).getDateInstance$();
}this.setText$S((value == null ) ? "" : this.formatter.format$O(value));
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "IconRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.table.DefaultTableCellRenderer','.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setHorizontalAlignment$I(0);
}, 1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.setIcon$javax_swing_Icon((Clazz.instanceOf(value, "javax.swing.Icon")) ? value : null);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "BooleanRenderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JCheckBox', ['javax.swing.table.TableCellRenderer', 'javax.swing.plaf.UIResource', 'java.awt.event.ActionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['秘haveListener'],'O',['秘table','javax.swing.JTable']]
,['O',['noFocusBorder','javax.swing.border.Border']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setHorizontalAlignment$I(0);
this.setBorderPainted$Z(true);
}, 1);

Clazz.newMeth(C$, 'getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I',  function (table, value, isSelected, hasFocus, row, column) {
this.秘table=table;
if (isSelected) {
this.setForeground$java_awt_Color(table.getSelectionForeground$());
this.setBackground$java_awt_Color(table.getSelectionBackground$());
} else {
this.setForeground$java_awt_Color(table.getForeground$());
this.setBackground$java_awt_Color(table.getBackground$());
}this.setSelected$Z((value != null  && (value).booleanValue$() ));
if (hasFocus) {
this.setBorder$javax_swing_border_Border($I$(7).getBorder$O("Table.focusCellHighlightBorder"));
} else {
this.setBorder$javax_swing_border_Border(C$.noFocusBorder);
}return this;
});

Clazz.newMeth(C$, '秘getComponent$',  function () {
if (!this.秘haveListener) {
this.秘haveListener=true;
this.addActionListener$java_awt_event_ActionListener(this);
}return this;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.秘table.isEditing$()) {
var jc=this.秘table.getEditorComponent$();
if (Clazz.instanceOf(jc, "javax.swing.JCheckBox") && jc !== this  ) {
(jc).setSelected$Z(this.isSelected$());
}this.秘table.getCellEditor$().stopCellEditing$();
}});

C$.$static$=function(){C$.$static$=0;
C$.noFocusBorder=Clazz.new_($I$(6,1).c$$I$I$I$I,[1, 1, 1, 1]);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "GenericEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.DefaultCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.argTypes=Clazz.array(Class, -1, [Clazz.getClass(String)]);
},1);

C$.$fields$=[['O',['argTypes','Class[]','constructorClass','Class','value','java.lang.Object','constructor','java.lang.reflect.Constructor']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_swing_JTextField.apply(this,[Clazz.new_($I$(8,1))]);C$.$init$.apply(this);
this.getComponent$().setName$S("Table.editor");
}, 1);

Clazz.newMeth(C$, 'stopCellEditing$',  function () {
var s=C$.superclazz.prototype.getCellEditorValue$.apply(this, []);
try {
if ("".equals$O(s) || this.constructorClass === Clazz.getClass(String)  ) {
if (this.constructorClass === Clazz.getClass(String) ) {
this.value=s;
}} else {
this.value=this.constructor.newInstance$OA(Clazz.array(java.lang.Object, -1, [s]));
}return C$.superclazz.prototype.stopCellEditing$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(this.getComponent$()).setBorder$javax_swing_border_Border(Clazz.new_([$I$(10).red],$I$(9,1).c$$java_awt_Color));
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I',  function (table, value, isSelected, row, column) {
this.value=null;
(this.getComponent$()).setBorder$javax_swing_border_Border(Clazz.new_([$I$(10).black],$I$(9,1).c$$java_awt_Color));
try {
var type=table.getColumnClass$I(column);
if (type === Clazz.getClass(java.lang.Object) ) {
type=Clazz.getClass(String);
}this.constructor=type.getConstructor$ClassA(this.argTypes);
this.constructorClass=type;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
return C$.superclazz.prototype.getTableCellEditorComponent$javax_swing_JTable$O$Z$I$I.apply(this, [table, value, isSelected, row, column]);
});

Clazz.newMeth(C$, 'getCellEditorValue$',  function () {
return this.value;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "NumberEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.JTable','.GenericEditor']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
(this.getComponent$()).setHorizontalAlignment$I(4);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "BooleanEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.DefaultCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_swing_JCheckBox.apply(this,[Clazz.new_($I$(11,1))]);C$.$init$.apply(this);
(this.getComponent$()).setHorizontalAlignment$I(0);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTable, "BooleanInPlaceEditor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.DefaultCellEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.秘inPlace=true;
},1);

C$.$fields$=[['Z',['秘inPlace']]]

Clazz.newMeth(C$, 'c$$javax_swing_JCheckBox$Z',  function (c, value) {
;C$.superclazz.c$$javax_swing_JCheckBox.apply(this,[$I$(12).秘clearDelegateListeners$javax_swing_JCheckBox(c)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

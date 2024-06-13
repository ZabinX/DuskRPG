(function(){var P$=Clazz.newPackage("javax.swing.table"),p$1={},I$=[[0,'java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultTableModel", null, 'javax.swing.table.AbstractTableModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dataVector','java.util.Vector','+columnIdentifiers']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'newVector$I',  function (size) {
var v=Clazz.new_($I$(1,1).c$$I,[size]);
v.setSize$I(size);
return v;
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (rowCount, columnCount) {
C$.c$$java_util_Vector$I.apply(this, [C$.newVector$I(columnCount), rowCount]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector$I',  function (columnNames, rowCount) {
Clazz.super_(C$, this);
this.setDataVector$java_util_Vector$java_util_Vector(C$.newVector$I(rowCount), columnNames);
}, 1);

Clazz.newMeth(C$, 'c$$OA$I',  function (columnNames, rowCount) {
C$.c$$java_util_Vector$I.apply(this, [C$.convertToVector$OA(columnNames), rowCount]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector$java_util_Vector',  function (data, columnNames) {
Clazz.super_(C$, this);
this.setDataVector$java_util_Vector$java_util_Vector(data, columnNames);
}, 1);

Clazz.newMeth(C$, 'c$$OAA$OA',  function (data, columnNames) {
Clazz.super_(C$, this);
this.setDataVector$OAA$OA(data, columnNames);
}, 1);

Clazz.newMeth(C$, 'getDataVector$',  function () {
return this.dataVector;
});

Clazz.newMeth(C$, 'nonNullVector$java_util_Vector',  function (v) {
return (v != null ) ? v : Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'setDataVector$java_util_Vector$java_util_Vector',  function (dataVector, columnIdentifiers) {
this.dataVector=C$.nonNullVector$java_util_Vector(dataVector);
this.columnIdentifiers=C$.nonNullVector$java_util_Vector(columnIdentifiers);
p$1.justifyRows$I$I.apply(this, [0, this.getRowCount$()]);
this.fireTableStructureChanged$();
});

Clazz.newMeth(C$, 'setDataVector$OAA$OA',  function (dataVector, columnIdentifiers) {
this.setDataVector$java_util_Vector$java_util_Vector(C$.convertToVector$OAA(dataVector), C$.convertToVector$OA(columnIdentifiers));
});

Clazz.newMeth(C$, 'newDataAvailable$javax_swing_event_TableModelEvent',  function (event) {
this.fireTableChanged$javax_swing_event_TableModelEvent(event);
});

Clazz.newMeth(C$, 'justifyRows$I$I',  function (from, to) {
this.dataVector.setSize$I(this.getRowCount$());
for (var i=from; i < to; i++) {
if (this.dataVector.elementAt$I(i) == null ) {
this.dataVector.setElementAt$O$I(Clazz.new_($I$(1,1)), i);
}(this.dataVector.elementAt$I(i)).setSize$I(this.getColumnCount$());
}
}, p$1);

Clazz.newMeth(C$, 'newRowsAdded$javax_swing_event_TableModelEvent',  function (e) {
p$1.justifyRows$I$I.apply(this, [e.getFirstRow$(), e.getLastRow$() + 1]);
this.fireTableChanged$javax_swing_event_TableModelEvent(e);
});

Clazz.newMeth(C$, 'rowsRemoved$javax_swing_event_TableModelEvent',  function (event) {
this.fireTableChanged$javax_swing_event_TableModelEvent(event);
});

Clazz.newMeth(C$, 'setNumRows$I',  function (rowCount) {
var old=this.getRowCount$();
if (old == rowCount) {
return;
}this.dataVector.setSize$I(rowCount);
if (rowCount <= old) {
this.fireTableRowsDeleted$I$I(rowCount, old - 1);
} else {
p$1.justifyRows$I$I.apply(this, [old, rowCount]);
this.fireTableRowsInserted$I$I(old, rowCount - 1);
}});

Clazz.newMeth(C$, 'setRowCount$I',  function (rowCount) {
this.setNumRows$I(rowCount);
});

Clazz.newMeth(C$, 'addRow$java_util_Vector',  function (rowData) {
this.insertRow$I$java_util_Vector(this.getRowCount$(), rowData);
});

Clazz.newMeth(C$, 'addRow$OA',  function (rowData) {
this.addRow$java_util_Vector(C$.convertToVector$OA(rowData));
});

Clazz.newMeth(C$, 'insertRow$I$java_util_Vector',  function (row, rowData) {
this.dataVector.insertElementAt$O$I(rowData, row);
p$1.justifyRows$I$I.apply(this, [row, row + 1]);
this.fireTableRowsInserted$I$I(row, row);
});

Clazz.newMeth(C$, 'insertRow$I$OA',  function (row, rowData) {
this.insertRow$I$java_util_Vector(row, C$.convertToVector$OA(rowData));
});

Clazz.newMeth(C$, 'gcd$I$I',  function (i, j) {
return (j == 0) ? i : C$.gcd$I$I(j, i % j);
}, 1);

Clazz.newMeth(C$, 'rotate$java_util_Vector$I$I$I',  function (v, a, b, shift) {
var size=b - a;
var r=size - shift;
var g=C$.gcd$I$I(size, r);
for (var i=0; i < g; i++) {
var to=i;
var tmp=v.elementAt$I(a + to);
for (var from=(to + r) % size; from != i; from=(to + r) % size) {
v.setElementAt$O$I(v.elementAt$I(a + from), a + to);
to=from;
}
v.setElementAt$O$I(tmp, a + to);
}
}, 1);

Clazz.newMeth(C$, 'moveRow$I$I$I',  function (start, end, to) {
var shift=to - start;
var first;
var last;
if (shift < 0) {
first=to;
last=end;
} else {
first=start;
last=to + end - start;
}C$.rotate$java_util_Vector$I$I$I(this.dataVector, first, last + 1, shift);
this.fireTableRowsUpdated$I$I(first, last);
});

Clazz.newMeth(C$, 'removeRow$I',  function (row) {
this.dataVector.removeElementAt$I(row);
this.fireTableRowsDeleted$I$I(row, row);
});

Clazz.newMeth(C$, 'setColumnIdentifiers$java_util_Vector',  function (columnIdentifiers) {
this.setDataVector$java_util_Vector$java_util_Vector(this.dataVector, columnIdentifiers);
});

Clazz.newMeth(C$, 'setColumnIdentifiers$OA',  function (newIdentifiers) {
this.setColumnIdentifiers$java_util_Vector(C$.convertToVector$OA(newIdentifiers));
});

Clazz.newMeth(C$, 'setColumnCount$I',  function (columnCount) {
this.columnIdentifiers.setSize$I(columnCount);
p$1.justifyRows$I$I.apply(this, [0, this.getRowCount$()]);
this.fireTableStructureChanged$();
});

Clazz.newMeth(C$, 'addColumn$O',  function (columnName) {
this.addColumn$O$java_util_Vector(columnName, null);
});

Clazz.newMeth(C$, 'addColumn$O$java_util_Vector',  function (columnName, columnData) {
this.columnIdentifiers.addElement$O(columnName);
if (columnData != null ) {
var columnSize=columnData.size$();
if (columnSize > this.getRowCount$()) {
this.dataVector.setSize$I(columnSize);
}p$1.justifyRows$I$I.apply(this, [0, this.getRowCount$()]);
var newColumn=this.getColumnCount$() - 1;
for (var i=0; i < columnSize; i++) {
var row=this.dataVector.elementAt$I(i);
row.setElementAt$O$I(columnData.elementAt$I(i), newColumn);
}
} else {
p$1.justifyRows$I$I.apply(this, [0, this.getRowCount$()]);
}this.fireTableStructureChanged$();
});

Clazz.newMeth(C$, 'addColumn$O$OA',  function (columnName, columnData) {
this.addColumn$O$java_util_Vector(columnName, C$.convertToVector$OA(columnData));
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.dataVector.size$();
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.columnIdentifiers.size$();
});

Clazz.newMeth(C$, 'getColumnName$I',  function (column) {
var id=null;
if (column < this.columnIdentifiers.size$() && (column >= 0) ) {
id=this.columnIdentifiers.elementAt$I(column);
}return (id == null ) ? C$.superclazz.prototype.getColumnName$I.apply(this, [column]) : id.toString();
});

Clazz.newMeth(C$, 'isCellEditable$I$I',  function (row, column) {
return true;
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, column) {
var rowVector=this.dataVector.elementAt$I(row);
return rowVector.elementAt$I(column);
});

Clazz.newMeth(C$, 'setValueAt$O$I$I',  function (aValue, row, column) {
var rowVector=this.dataVector.elementAt$I(row);
rowVector.setElementAt$O$I(aValue, column);
this.fireTableCellUpdated$I$I(row, column);
});

Clazz.newMeth(C$, 'convertToVector$OA',  function (anArray) {
if (anArray == null ) {
return null;
}var v=Clazz.new_($I$(1,1).c$$I,[anArray.length]);
for (var i=0; i < anArray.length; i++) {
v.addElement$O(anArray[i]);
}
return v;
}, 1);

Clazz.newMeth(C$, 'convertToVector$OAA',  function (anArray) {
if (anArray == null ) {
return null;
}var v=Clazz.new_($I$(1,1).c$$I,[anArray.length]);
for (var i=0; i < anArray.length; i++) {
v.addElement$O(C$.convertToVector$OA(anArray[i]));
}
return v;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

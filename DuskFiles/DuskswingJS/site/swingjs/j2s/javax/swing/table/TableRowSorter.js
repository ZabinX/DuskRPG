(function(){var P$=Clazz.newPackage("javax.swing.table"),I$=[[0,['javax.swing.table.TableRowSorter','.TableRowSorterModelWrapper'],['javax.swing.table.TableRowSorter','.StringComparator'],['javax.swing.table.TableRowSorter','.ComparableComparator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableRowSorter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.DefaultRowSorter');
C$.$classes$=[['TableRowSorterModelWrapper',2],['StringComparator',10],['ComparableComparator',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tableModel','<M extends javax.swing.table.TableModel>','stringConverter','javax.swing.table.TableStringConverter']]
,['O',['COMPARABLE_COMPARATOR','java.util.Comparator','+STRING_COMPARATOR']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_table_TableModel.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_table_TableModel',  function (model) {
Clazz.super_(C$, this);
this.setModel$javax_swing_table_TableModel(model);
}, 1);

Clazz.newMeth(C$, 'setModel$javax_swing_table_TableModel',  function (model) {
this.tableModel=model;
this.setModelWrapper$javax_swing_DefaultRowSorter_ModelWrapper(Clazz.new_($I$(1,1),[this, null]));
});

Clazz.newMeth(C$, 'setStringConverter$javax_swing_table_TableStringConverter',  function (stringConverter) {
this.stringConverter=stringConverter;
});

Clazz.newMeth(C$, 'getStringConverter$',  function () {
return this.stringConverter;
});

Clazz.newMeth(C$, 'getComparator$I',  function (column) {
var comparator=C$.superclazz.prototype.getComparator$I.apply(this, [column]);
if (comparator != null ) {
return comparator;
}var columnClass=this.getModel$().getColumnClass$I(column);
if (columnClass === Clazz.getClass(String) ) {
if (C$.STRING_COMPARATOR == null ) C$.STRING_COMPARATOR=Clazz.new_($I$(2,1));
return C$.STRING_COMPARATOR;
}if (Clazz.getClass(Comparable,['compareTo$O']).isAssignableFrom$Class(columnClass)) {
if (C$.COMPARABLE_COMPARATOR == null ) C$.COMPARABLE_COMPARATOR=Clazz.new_($I$(3,1));
return C$.COMPARABLE_COMPARATOR;
}return null;
});

Clazz.newMeth(C$, 'useToString$I',  function (column) {
var comparator=C$.superclazz.prototype.getComparator$I.apply(this, [column]);
if (comparator != null ) {
return false;
}var columnClass=this.getModel$().getColumnClass$I(column);
if (columnClass === Clazz.getClass(String) ) {
return false;
}if (Clazz.getClass(Comparable,['compareTo$O']).isAssignableFrom$Class(columnClass)) {
return false;
}return true;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableRowSorter, "TableRowSorterModelWrapper", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.DefaultRowSorter','.ModelWrapper']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getModel$',  function () {
return this.b$['javax.swing.table.TableRowSorter'].tableModel;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return (this.b$['javax.swing.table.TableRowSorter'].tableModel == null ) ? 0 : this.b$['javax.swing.table.TableRowSorter'].tableModel.getColumnCount$();
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return (this.b$['javax.swing.table.TableRowSorter'].tableModel == null ) ? 0 : this.b$['javax.swing.table.TableRowSorter'].tableModel.getRowCount$();
});

Clazz.newMeth(C$, 'getValueAt$I$I',  function (row, column) {
return this.b$['javax.swing.table.TableRowSorter'].tableModel.getValueAt$I$I(row, column);
});

Clazz.newMeth(C$, 'getStringValueAt$I$I',  function (row, column) {
var converter=this.b$['javax.swing.table.TableRowSorter'].getStringConverter$.apply(this.b$['javax.swing.table.TableRowSorter'], []);
if (converter != null ) {
var value=converter.toString$javax_swing_table_TableModel$I$I(this.b$['javax.swing.table.TableRowSorter'].tableModel, row, column);
if (value != null ) {
return value;
}return "";
}var o=this.getValueAt$I$I(row, column);
if (o == null ) {
return "";
}var string=o.toString();
if (string == null ) {
return "";
}return string;
});

Clazz.newMeth(C$, 'getIdentifier$I',  function (index) {
return Integer.valueOf$I(index);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableRowSorter, "StringComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'compare$O$O',  function (o1, o2) {
return (o1).compareTo$S(o2);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableRowSorter, "ComparableComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'compare$O$O',  function (o1, o2) {
return (o1).compareTo$O(o2);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

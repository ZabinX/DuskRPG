(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'java.util.BitSet','javax.swing.text.TableView','java.util.Vector',['javax.swing.text.TableView','.TableRow'],['javax.swing.text.TableView','.TableCell'],'javax.swing.SizeRequirements']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.BoxView');
C$.$classes$=[['TableRow',1],['TableCell',1],['GridCell',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['gridValid'],'O',['columnSpans','int[]','+columnOffsets','columnRequirements','javax.swing.SizeRequirements[]','rows','java.util.Vector']]
,['O',['EMPTY','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
this.rows=Clazz.new_($I$(3,1));
this.gridValid=false;
}, 1);

Clazz.newMeth(C$, 'createTableRow$javax_swing_text_Element',  function (elem) {
return Clazz.new_($I$(4,1).c$$javax_swing_text_Element,[this, null, elem]);
});

Clazz.newMeth(C$, 'createTableCell$javax_swing_text_Element',  function (elem) {
return Clazz.new_($I$(5,1).c$$javax_swing_text_Element,[this, null, elem]);
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.columnSpans.length;
});

Clazz.newMeth(C$, 'getColumnSpan$I',  function (col) {
return this.columnSpans[col];
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.rows.size$();
});

Clazz.newMeth(C$, 'getRowSpan$I',  function (row) {
var rv=this.getRow$I(row);
if (rv != null ) {
return (rv.getPreferredSpan$I(1)|0);
}return 0;
});

Clazz.newMeth(C$, 'getRow$I',  function (row) {
if (row < this.rows.size$()) {
return this.rows.elementAt$I(row);
}return null;
});

Clazz.newMeth(C$, 'getColumnsOccupied$javax_swing_text_View',  function (v) {
return 1;
});

Clazz.newMeth(C$, 'getRowsOccupied$javax_swing_text_View',  function (v) {
return 1;
});

Clazz.newMeth(C$, 'invalidateGrid$',  function () {
this.gridValid=false;
});

Clazz.newMeth(C$, 'forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (ec, e, a, f) {
C$.superclazz.prototype.forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [ec, e, a, f]);
if (a != null ) {
var c=this.getContainer$();
if (c != null ) {
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
c.repaint$I$I$I$I(alloc.x, alloc.y, alloc.width, alloc.height);
}}});

Clazz.newMeth(C$, 'replace$I$I$javax_swing_text_ViewA',  function (offset, length, views) {
C$.superclazz.prototype.replace$I$I$javax_swing_text_ViewA.apply(this, [offset, length, views]);
this.invalidateGrid$();
});

Clazz.newMeth(C$, 'updateGrid$',  function () {
if (!this.gridValid) {
this.rows.removeAllElements$();
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
if (Clazz.instanceOf(v, "javax.swing.text.TableView.TableRow")) {
this.rows.addElement$O(v);
var rv=v;
rv.clearFilledColumns$();
rv.setRow$I(i);
}}
var maxColumns=0;
var nrows=this.rows.size$();
for (var row=0; row < nrows; row++) {
var rv=this.getRow$I(row);
var col=0;
for (var cell=0; cell < rv.getViewCount$(); cell++, col++) {
var cv=rv.getView$I(cell);
for (; rv.isFilled$I(col); col++) ;
var rowSpan=this.getRowsOccupied$javax_swing_text_View(cv);
var colSpan=this.getColumnsOccupied$javax_swing_text_View(cv);
if ((colSpan > 1) || (rowSpan > 1) ) {
var rowLimit=row + rowSpan;
var colLimit=col + colSpan;
for (var i=row; i < rowLimit; i++) {
for (var j=col; j < colLimit; j++) {
if (i != row || j != col ) {
this.addFill$I$I(i, j);
}}
}
if (colSpan > 1) {
col+=colSpan - 1;
}}}
maxColumns=Math.max(maxColumns, col);
}
this.columnSpans=Clazz.array(Integer.TYPE, [maxColumns]);
this.columnOffsets=Clazz.array(Integer.TYPE, [maxColumns]);
this.columnRequirements=Clazz.array($I$(6), [maxColumns]);
for (var i=0; i < maxColumns; i++) {
this.columnRequirements[i]=Clazz.new_($I$(6,1));
}
this.gridValid=true;
}});

Clazz.newMeth(C$, 'addFill$I$I',  function (row, col) {
var rv=this.getRow$I(row);
if (rv != null ) {
rv.fillColumn$I(col);
}});

Clazz.newMeth(C$, 'layoutColumns$I$IA$IA$javax_swing_SizeRequirementsA',  function (targetSpan, offsets, spans, reqs) {
$I$(6).calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA(targetSpan, null, reqs, offsets, spans);
});

Clazz.newMeth(C$, 'layoutMinorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
this.updateGrid$();
var n=this.getRowCount$();
for (var i=0; i < n; i++) {
var row=this.getRow$I(i);
row.layoutChanged$I(axis);
}
this.layoutColumns$I$IA$IA$javax_swing_SizeRequirementsA(targetSpan, this.columnOffsets, this.columnSpans, this.columnRequirements);
C$.superclazz.prototype.layoutMinorAxis$I$I$IA$IA.apply(this, [targetSpan, axis, offsets, spans]);
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
this.updateGrid$();
this.calculateColumnRequirements$I(axis);
if (r == null ) {
r=Clazz.new_($I$(6,1));
}var min=0;
var pref=0;
var max=0;
for (var i=0; i < this.columnRequirements.length; i++) {
var req=this.columnRequirements[i];
(min=Long.$add(min,(req.minimum)));
(pref=Long.$add(pref,(req.preferred)));
(max=Long.$add(max,(req.maximum)));
}
r.minimum=Long.$ival(min);
r.preferred=Long.$ival(pref);
r.maximum=Long.$ival(max);
r.alignment=0;
return r;
});

Clazz.newMeth(C$, 'calculateColumnRequirements$I',  function (axis) {
var hasMultiColumn=false;
var nrows=this.getRowCount$();
for (var i=0; i < nrows; i++) {
var row=this.getRow$I(i);
var col=0;
var ncells=row.getViewCount$();
for (var cell=0; cell < ncells; cell++, col++) {
var cv=row.getView$I(cell);
for (; row.isFilled$I(col); col++) ;
var colSpan=this.getColumnsOccupied$javax_swing_text_View(cv);
if (colSpan == 1) {
this.checkSingleColumnCell$I$I$javax_swing_text_View(axis, col, cv);
} else {
hasMultiColumn=true;
col+=colSpan - 1;
}}
}
if (hasMultiColumn) {
for (var i=0; i < nrows; i++) {
var row=this.getRow$I(i);
var col=0;
var ncells=row.getViewCount$();
for (var cell=0; cell < ncells; cell++, col++) {
var cv=row.getView$I(cell);
for (; row.isFilled$I(col); col++) ;
var colSpan=this.getColumnsOccupied$javax_swing_text_View(cv);
if (colSpan > 1) {
this.checkMultiColumnCell$I$I$I$javax_swing_text_View(axis, col, colSpan, cv);
col+=colSpan - 1;
}}
}
}});

Clazz.newMeth(C$, 'checkSingleColumnCell$I$I$javax_swing_text_View',  function (axis, col, v) {
var req=this.columnRequirements[col];
req.minimum=Math.max((v.getMinimumSpan$I(axis)|0), req.minimum);
req.preferred=Math.max((v.getPreferredSpan$I(axis)|0), req.preferred);
req.maximum=Math.max((v.getMaximumSpan$I(axis)|0), req.maximum);
});

Clazz.newMeth(C$, 'checkMultiColumnCell$I$I$I$javax_swing_text_View',  function (axis, col, ncols, v) {
var min=0;
var pref=0;
for (var i=0; i < ncols; i++) {
var req=this.columnRequirements[col + i];
(min=Long.$add(min,(req.minimum)));
(pref=Long.$add(pref,(req.preferred)));
}
var cmin=(v.getMinimumSpan$I(axis)|0);
if (Long.$gt(cmin,min )) {
var reqs=Clazz.array($I$(6), [ncols]);
for (var i=0; i < ncols; i++) {
var r=reqs[i]=this.columnRequirements[col + i];
r.maximum=Math.max(r.maximum, (v.getMaximumSpan$I(axis)|0));
}
var spans=Clazz.array(Integer.TYPE, [ncols]);
var offsets=Clazz.array(Integer.TYPE, [ncols]);
$I$(6).calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA(cmin, null, reqs, offsets, spans);
for (var i=0; i < ncols; i++) {
var req=reqs[i];
req.minimum=Math.max(spans[i], req.minimum);
req.preferred=Math.max(req.minimum, req.preferred);
req.maximum=Math.max(req.preferred, req.maximum);
}
}var cpref=(v.getPreferredSpan$I(axis)|0);
if (Long.$gt(cpref,pref )) {
var reqs=Clazz.array($I$(6), [ncols]);
for (var i=0; i < ncols; i++) {
reqs[i]=this.columnRequirements[col + i];
}
var spans=Clazz.array(Integer.TYPE, [ncols]);
var offsets=Clazz.array(Integer.TYPE, [ncols]);
$I$(6).calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA(cpref, null, reqs, offsets, spans);
for (var i=0; i < ncols; i++) {
var req=reqs[i];
req.preferred=Math.max(spans[i], req.preferred);
req.maximum=Math.max(req.preferred, req.maximum);
}
}});

Clazz.newMeth(C$, 'getViewAtPosition$I$java_awt_Rectangle',  function (pos, a) {
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
var p0=v.getStartOffset$();
var p1=v.getEndOffset$();
if ((pos >= p0) && (pos < p1) ) {
if (a != null ) {
this.childAllocation$I$java_awt_Rectangle(i, a);
}return v;
}}
if (pos == this.getEndOffset$()) {
var v=this.getView$I(n - 1);
if (a != null ) {
this.childAllocation$I$java_awt_Rectangle(n - 1, a);
}return v;
}return null;
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableView, "TableRow", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.BoxView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['row'],'O',['fillColumns','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 0]);C$.$init$.apply(this);
this.fillColumns=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'clearFilledColumns$',  function () {
this.fillColumns.and$java_util_BitSet($I$(2).EMPTY);
});

Clazz.newMeth(C$, 'fillColumn$I',  function (col) {
this.fillColumns.set$I(col);
});

Clazz.newMeth(C$, 'isFilled$I',  function (col) {
return this.fillColumns.get$I(col);
});

Clazz.newMeth(C$, 'getRow$',  function () {
return this.row;
});

Clazz.newMeth(C$, 'setRow$I',  function (row) {
this.row=row;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
var nfill=0;
var n=this.fillColumns.size$();
for (var i=0; i < n; i++) {
if (this.fillColumns.get$I(i)) {
++nfill;
}}
return this.getViewCount$() + nfill;
});

Clazz.newMeth(C$, 'replace$I$I$javax_swing_text_ViewA',  function (offset, length, views) {
C$.superclazz.prototype.replace$I$I$javax_swing_text_ViewA.apply(this, [offset, length, views]);
this.b$['javax.swing.text.TableView'].invalidateGrid$.apply(this.b$['javax.swing.text.TableView'], []);
});

Clazz.newMeth(C$, 'layoutMajorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var col=0;
var ncells=this.getViewCount$();
for (var cell=0; cell < ncells; cell++, col++) {
var cv=this.getView$I(cell);
for (; this.isFilled$I(col); col++) ;
var colSpan=this.b$['javax.swing.text.TableView'].getColumnsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.TableView'], [cv]);
spans[cell]=this.b$['javax.swing.text.TableView'].columnSpans[col];
offsets[cell]=this.b$['javax.swing.text.TableView'].columnOffsets[col];
if (colSpan > 1) {
var n=this.b$['javax.swing.text.TableView'].columnSpans.length;
for (var j=1; j < colSpan; j++) {
if ((col + j) < n) {
spans[cell]+=this.b$['javax.swing.text.TableView'].columnSpans[col + j];
}}
col+=colSpan - 1;
}}
});

Clazz.newMeth(C$, 'layoutMinorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
C$.superclazz.prototype.layoutMinorAxis$I$I$IA$IA.apply(this, [targetSpan, axis, offsets, spans]);
var col=0;
var ncells=this.getViewCount$();
for (var cell=0; cell < ncells; cell++, col++) {
var cv=this.getView$I(cell);
for (; this.isFilled$I(col); col++) ;
var colSpan=this.b$['javax.swing.text.TableView'].getColumnsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.TableView'], [cv]);
var rowSpan=this.b$['javax.swing.text.TableView'].getRowsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.TableView'], [cv]);
if (rowSpan > 1) {
for (var j=1; j < rowSpan; j++) {
var row=this.getRow$() + j;
if (row < this.b$['javax.swing.text.TableView'].getViewCount$.apply(this.b$['javax.swing.text.TableView'], [])) {
var span=this.b$['javax.swing.text.TableView'].getSpan$I$I.apply(this.b$['javax.swing.text.TableView'], [1, this.getRow$() + j]);
spans[cell]+=span;
}}
}if (colSpan > 1) {
col+=colSpan - 1;
}}
});

Clazz.newMeth(C$, 'getResizeWeight$I',  function (axis) {
return 1;
});

Clazz.newMeth(C$, 'getViewAtPosition$I$java_awt_Rectangle',  function (pos, a) {
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
var p0=v.getStartOffset$();
var p1=v.getEndOffset$();
if ((pos >= p0) && (pos < p1) ) {
if (a != null ) {
this.childAllocation$I$java_awt_Rectangle(i, a);
}return v;
}}
if (pos == this.getEndOffset$()) {
var v=this.getView$I(n - 1);
if (a != null ) {
this.childAllocation$I$java_awt_Rectangle(n - 1, a);
}return v;
}return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableView, "TableCell", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.BoxView', [['javax.swing.text.TableView','javax.swing.text.TableView.GridCell']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['row','col']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'setGridLocation$I$I',  function (row, col) {
this.row=row;
this.col=col;
});

Clazz.newMeth(C$, 'getGridRow$',  function () {
return this.row;
});

Clazz.newMeth(C$, 'getGridColumn$',  function () {
return this.col;
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.TableView, "GridCell", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

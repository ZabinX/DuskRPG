(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,['javax.swing.text.html.CSS','.Attribute'],'java.util.BitSet','javax.swing.text.html.TableView','javax.swing.SizeRequirements',['javax.swing.text.html.HTML','.Attribute'],['javax.swing.text.html.TableView','.RowIterator'],['javax.swing.text.html.TableView','.ColumnIterator'],'java.util.Vector','javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Tag'],['javax.swing.text.html.TableView','.RowView'],'java.awt.Rectangle','java.util.Arrays','javax.swing.text.html.CSS','javax.swing.text.html.BlockView',['javax.swing.text.html.TableView','.CellView'],'javax.swing.text.html.ParagraphView']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TableView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.BoxView', 'javax.swing.text.ViewFactory');
C$.$classes$=[['ColumnIterator',0],['RowIterator',0],['RowView',1],['CellView',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rowIterator=Clazz.new_($I$(6,1),[this, null]);
this.colIterator=Clazz.new_($I$(7,1),[this, null]);
this.skipComments=false;
},1);

C$.$fields$=[['Z',['relativeCells','multiRowCells','skipComments','gridValid'],'I',['cellSpacing','borderWidth','captionIndex'],'O',['attr','javax.swing.text.AttributeSet','painter','javax.swing.text.html.StyleSheet.BoxPainter','columnSpans','int[]','+columnOffsets','totalColumnRequirements','javax.swing.SizeRequirements','columnRequirements','javax.swing.SizeRequirements[]','rowIterator','javax.swing.text.html.TableView.RowIterator','colIterator','javax.swing.text.html.TableView.ColumnIterator','rows','java.util.Vector']]
,['O',['EMPTY','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
this.rows=Clazz.new_($I$(8,1));
this.gridValid=false;
this.captionIndex=-1;
this.totalColumnRequirements=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'createTableRow$javax_swing_text_Element',  function (elem) {
var o=elem.getAttributes$().getAttribute$O($I$(9).NameAttribute);
if (o === $I$(10).TR ) {
return Clazz.new_($I$(11,1).c$$javax_swing_text_Element,[this, null, elem]);
}return null;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
return this.columnSpans.length;
});

Clazz.newMeth(C$, 'getColumnSpan$I',  function (col) {
if (col < this.columnSpans.length) {
return this.columnSpans[col];
}return 0;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.rows.size$();
});

Clazz.newMeth(C$, 'getMultiRowSpan$I$I',  function (row0, row1) {
var rv0=this.getRow$I(row0);
var rv1=this.getRow$I(row1);
if ((rv0 != null ) && (rv1 != null ) ) {
var index0=rv0.viewIndex;
var index1=rv1.viewIndex;
var span=this.getOffset$I$I(1, index1) - this.getOffset$I$I(1, index0) + this.getSpan$I$I(1, index1);
return span;
}return 0;
});

Clazz.newMeth(C$, 'getRowSpan$I',  function (row) {
var rv=this.getRow$I(row);
if (rv != null ) {
return this.getSpan$I$I(1, rv.viewIndex);
}return 0;
});

Clazz.newMeth(C$, 'getRow$I',  function (row) {
if (row < this.rows.size$()) {
return this.rows.elementAt$I(row);
}return null;
});

Clazz.newMeth(C$, 'getViewAtPoint$I$I$java_awt_Rectangle',  function (x, y, alloc) {
var n=this.getViewCount$();
var v;
var allocation=Clazz.new_($I$(12,1));
for (var i=0; i < n; i++) {
allocation.setBounds$java_awt_Rectangle(alloc);
this.childAllocation$I$java_awt_Rectangle(i, allocation);
v=this.getView$I(i);
if (Clazz.instanceOf(v, "javax.swing.text.html.TableView.RowView")) {
v=(v).findViewAtPoint$I$I$java_awt_Rectangle(x, y, allocation);
if (v != null ) {
alloc.setBounds$java_awt_Rectangle(allocation);
return v;
}}}
return C$.superclazz.prototype.getViewAtPoint$I$I$java_awt_Rectangle.apply(this, [x, y, alloc]);
});

Clazz.newMeth(C$, 'getColumnsOccupied$javax_swing_text_View',  function (v) {
var a=v.getElement$().getAttributes$();
if (a.isDefined$O($I$(5).COLSPAN)) {
var s=a.getAttribute$O($I$(5).COLSPAN);
if (s != null ) {
try {
return Integer.parseInt$S(s);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}}return 1;
});

Clazz.newMeth(C$, 'getRowsOccupied$javax_swing_text_View',  function (v) {
var a=v.getElement$().getAttributes$();
if (a.isDefined$O($I$(5).ROWSPAN)) {
var s=a.getAttribute$O($I$(5).ROWSPAN);
if (s != null ) {
try {
return Integer.parseInt$S(s);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}}return 1;
});

Clazz.newMeth(C$, 'invalidateGrid$',  function () {
this.gridValid=false;
});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
var doc=this.getDocument$();
return doc.getStyleSheet$();
});

Clazz.newMeth(C$, 'updateInsets$',  function () {
var top=($s$[0] = this.painter.getInset$I$javax_swing_text_View(1, this), $s$[0]);
var bottom=($s$[0] = this.painter.getInset$I$javax_swing_text_View(3, this), $s$[0]);
if (this.captionIndex != -1) {
var caption=this.getView$I(this.captionIndex);
var h=($s$[0] = caption.getPreferredSpan$I(1), $s$[0]);
var a=caption.getAttributes$();
var align=a.getAttribute$O($I$(1).CAPTION_SIDE);
if ((align != null ) && (align.equals$O("bottom")) ) {
bottom+=h;
} else {
top+=h;
}}this.setInsets$H$H$H$H(top, ($s$[0] = this.painter.getInset$I$javax_swing_text_View(2, this), $s$[0]), bottom, ($s$[0] = this.painter.getInset$I$javax_swing_text_View(4, this), $s$[0]));
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
this.painter=sheet.getBoxPainter$javax_swing_text_AttributeSet(this.attr);
if (this.attr != null ) {
this.setInsets$H$H$H$H(($s$[0] = this.painter.getInset$I$javax_swing_text_View(1, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(2, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(3, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(4, this), $s$[0]));
var lv=this.attr.getAttribute$O($I$(1).BORDER_SPACING);
if (lv != null ) {
this.cellSpacing=(lv.getValue$()|0);
} else {
this.cellSpacing=2;
}lv=this.attr.getAttribute$O($I$(1).BORDER_TOP_WIDTH);
if (lv != null ) {
this.borderWidth=(lv.getValue$()|0);
} else {
this.borderWidth=0;
}}});

Clazz.newMeth(C$, 'updateGrid$',  function () {
if (!this.gridValid) {
this.relativeCells=false;
this.multiRowCells=false;
this.captionIndex=-1;
this.rows.removeAllElements$();
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
if (Clazz.instanceOf(v, "javax.swing.text.html.TableView.RowView")) {
this.rows.addElement$O(v);
var rv=v;
rv.clearFilledColumns$();
rv.rowIndex=this.rows.size$() - 1;
rv.viewIndex=i;
} else {
var o=v.getElement$().getAttributes$().getAttribute$O($I$(9).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var kind=o;
if (kind === $I$(10).CAPTION ) {
this.captionIndex=i;
}}}}
var maxColumns=0;
var nrows=this.rows.size$();
for (var row=0; row < nrows; row++) {
var rv=this.getRow$I(row);
var col=0;
for (var cell=0; cell < rv.getViewCount$(); cell++, col++) {
var cv=rv.getView$I(cell);
if (!this.relativeCells) {
var a=cv.getAttributes$();
var lv=a.getAttribute$O($I$(1).WIDTH);
if ((lv != null ) && (lv.isPercentage$()) ) {
this.relativeCells=true;
}}for (; rv.isFilled$I(col); col++) ;
var rowSpan=this.getRowsOccupied$javax_swing_text_View(cv);
if (rowSpan > 1) {
this.multiRowCells=true;
}var colSpan=this.getColumnsOccupied$javax_swing_text_View(cv);
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
this.columnRequirements=Clazz.array($I$(4), [maxColumns]);
for (var i=0; i < maxColumns; i++) {
this.columnRequirements[i]=Clazz.new_($I$(4,1));
this.columnRequirements[i].maximum=2147483647;
}
this.gridValid=true;
}});

Clazz.newMeth(C$, 'addFill$I$I',  function (row, col) {
var rv=this.getRow$I(row);
if (rv != null ) {
rv.fillColumn$I(col);
}});

Clazz.newMeth(C$, 'layoutColumns$I$IA$IA$javax_swing_SizeRequirementsA',  function (targetSpan, offsets, spans, reqs) {
$I$(13).fill$IA$I(offsets, 0);
$I$(13).fill$IA$I(spans, 0);
this.colIterator.setLayoutArrays$IA$IA$I(offsets, spans, targetSpan);
$I$(14).calculateTiledLayout$javax_swing_text_html_CSS_LayoutIterator$I(this.colIterator, targetSpan);
});

Clazz.newMeth(C$, 'calculateColumnRequirements$I',  function (axis) {
for (var req, $req = 0, $$req = this.columnRequirements; $req<$$req.length&&((req=($$req[$req])),1);$req++) {
req.minimum=0;
req.preferred=0;
req.maximum=2147483647;
}
var host=this.getContainer$();
if (host != null ) {
if (Clazz.instanceOf(host, "javax.swing.text.JTextComponent")) {
this.skipComments=!(host).isEditable$();
} else {
this.skipComments=true;
}}var hasMultiColumn=false;
var nrows=this.getRowCount$();
for (var i=0; i < nrows; i++) {
var row=this.getRow$I(i);
var col=0;
var ncells=row.getViewCount$();
for (var cell=0; cell < ncells; cell++) {
var cv=row.getView$I(cell);
if (this.skipComments && !(Clazz.instanceOf(cv, "javax.swing.text.html.TableView.CellView")) ) {
continue;
}for (; row.isFilled$I(col); col++) ;
var rowSpan=this.getRowsOccupied$javax_swing_text_View(cv);
var colSpan=this.getColumnsOccupied$javax_swing_text_View(cv);
if (colSpan == 1) {
this.checkSingleColumnCell$I$I$javax_swing_text_View(axis, col, cv);
} else {
hasMultiColumn=true;
col+=colSpan - 1;
}++col;
}
}
if (hasMultiColumn) {
for (var i=0; i < nrows; i++) {
var row=this.getRow$I(i);
var col=0;
var ncells=row.getViewCount$();
for (var cell=0; cell < ncells; cell++) {
var cv=row.getView$I(cell);
if (this.skipComments && !(Clazz.instanceOf(cv, "javax.swing.text.html.TableView.CellView")) ) {
continue;
}for (; row.isFilled$I(col); col++) ;
var colSpan=this.getColumnsOccupied$javax_swing_text_View(cv);
if (colSpan > 1) {
this.checkMultiColumnCell$I$I$I$javax_swing_text_View(axis, col, colSpan, cv);
col+=colSpan - 1;
}++col;
}
}
}});

Clazz.newMeth(C$, 'checkSingleColumnCell$I$I$javax_swing_text_View',  function (axis, col, v) {
var req=this.columnRequirements[col];
req.minimum=Math.max((v.getMinimumSpan$I(axis)|0), req.minimum);
req.preferred=Math.max((v.getPreferredSpan$I(axis)|0), req.preferred);
});

Clazz.newMeth(C$, 'checkMultiColumnCell$I$I$I$javax_swing_text_View',  function (axis, col, ncols, v) {
var min=0;
var pref=0;
var max=0;
for (var i=0; i < ncols; i++) {
var req=this.columnRequirements[col + i];
(min=Long.$add(min,(req.minimum)));
(pref=Long.$add(pref,(req.preferred)));
(max=Long.$add(max,(req.maximum)));
}
var cmin=(v.getMinimumSpan$I(axis)|0);
if (Long.$gt(cmin,min )) {
var reqs=Clazz.array($I$(4), [ncols]);
for (var i=0; i < ncols; i++) {
reqs[i]=this.columnRequirements[col + i];
}
var spans=Clazz.array(Integer.TYPE, [ncols]);
var offsets=Clazz.array(Integer.TYPE, [ncols]);
$I$(4).calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA(cmin, null, reqs, offsets, spans);
for (var i=0; i < ncols; i++) {
var req=reqs[i];
req.minimum=Math.max(spans[i], req.minimum);
req.preferred=Math.max(req.minimum, req.preferred);
req.maximum=Math.max(req.preferred, req.maximum);
}
}var cpref=(v.getPreferredSpan$I(axis)|0);
if (Long.$gt(cpref,pref )) {
var reqs=Clazz.array($I$(4), [ncols]);
for (var i=0; i < ncols; i++) {
reqs[i]=this.columnRequirements[col + i];
}
var spans=Clazz.array(Integer.TYPE, [ncols]);
var offsets=Clazz.array(Integer.TYPE, [ncols]);
$I$(4).calculateTiledPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA(cpref, null, reqs, offsets, spans);
for (var i=0; i < ncols; i++) {
var req=reqs[i];
req.preferred=Math.max(spans[i], req.preferred);
req.maximum=Math.max(req.preferred, req.maximum);
}
}});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
this.updateGrid$();
this.calculateColumnRequirements$I(axis);
if (r == null ) {
r=Clazz.new_($I$(4,1));
}var min=0;
var pref=0;
var n=this.columnRequirements.length;
for (var i=0; i < n; i++) {
var req=this.columnRequirements[i];
(min=Long.$add(min,(req.minimum)));
(pref=Long.$add(pref,(req.preferred)));
}
var adjust=(n + 1) * this.cellSpacing + 2 * this.borderWidth;
(min=Long.$add(min,(adjust)));
(pref=Long.$add(pref,(adjust)));
r.minimum=Long.$ival(min);
r.preferred=Long.$ival(pref);
r.maximum=Long.$ival(pref);
var attr=this.getAttributes$();
var cssWidth=attr.getAttribute$O($I$(1).WIDTH);
if ($I$(15).spanSetFromAttributes$I$javax_swing_SizeRequirements$javax_swing_text_html_CSS_LengthValue$javax_swing_text_html_CSS_LengthValue(axis, r, cssWidth, null)) {
if (r.minimum < Long.$ival(min)) {
r.maximum=r.minimum=r.preferred=Long.$ival(min);
}}this.totalColumnRequirements.minimum=r.minimum;
this.totalColumnRequirements.preferred=r.preferred;
this.totalColumnRequirements.maximum=r.maximum;
var o=attr.getAttribute$O($I$(1).TEXT_ALIGN);
if (o != null ) {
var ta=o.toString();
if (ta.equals$O("left")) {
r.alignment=0;
} else if (ta.equals$O("center")) {
r.alignment=0.5;
} else if (ta.equals$O("right")) {
r.alignment=1;
} else {
r.alignment=0;
}} else {
r.alignment=0;
}return r;
});

Clazz.newMeth(C$, 'calculateMajorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
this.updateInsets$();
this.rowIterator.updateAdjustments$();
r=$I$(14).calculateTiledRequirements$javax_swing_text_html_CSS_LayoutIterator$javax_swing_SizeRequirements(this.rowIterator, r);
r.maximum=r.preferred;
return r;
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

Clazz.newMeth(C$, 'layoutMajorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
this.rowIterator.setLayoutArrays$IA$IA(offsets, spans);
$I$(14).calculateTiledLayout$javax_swing_text_html_CSS_LayoutIterator$I(this.rowIterator, targetSpan);
if (this.captionIndex != -1) {
var caption=this.getView$I(this.captionIndex);
var h=(caption.getPreferredSpan$I(1)|0);
spans[this.captionIndex]=h;
var boxBottom=($s$[0] = this.painter.getInset$I$javax_swing_text_View(3, this), $s$[0]);
if (boxBottom != this.getBottomInset$()) {
offsets[this.captionIndex]=targetSpan + boxBottom;
} else {
offsets[this.captionIndex]=(($s$[0]=-this.getTopInset$(),this.getTopInset$()=$s$[0],$s$[0]));
}}});

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

Clazz.newMeth(C$, 'getAttributes$',  function () {
if (this.attr == null ) {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
}return this.attr;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
var a=allocation.getBounds$();
this.setSize$F$F(a.width, a.height);
if (this.captionIndex != -1) {
var top=($s$[0] = this.painter.getInset$I$javax_swing_text_View(1, this), $s$[0]);
var bottom=($s$[0] = this.painter.getInset$I$javax_swing_text_View(3, this), $s$[0]);
if (top != this.getTopInset$()) {
var h=this.getTopInset$() - top;
a.y+=h;
a.height-=h;
} else {
a.height-=this.getBottomInset$() - bottom;
}}this.painter.paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View(g, a.x, a.y, a.width, a.height, this);
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
v.paint$java_awt_Graphics$java_awt_Shape(g, this.getChildAllocation$I$java_awt_Shape(i, allocation));
}
});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
if (parent != null ) {
this.setPropertiesFromAttributes$();
}});

Clazz.newMeth(C$, 'getViewFactory$',  function () {
return this;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, this]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, this]);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, this]);
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

Clazz.newMeth(C$, 'create$javax_swing_text_Element',  function (elem) {
var o=elem.getAttributes$().getAttribute$O($I$(9).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var kind=o;
if (kind === $I$(10).TR ) {
return this.createTableRow$javax_swing_text_Element(elem);
} else if ((kind === $I$(10).TD ) || (kind === $I$(10).TH ) ) {
return Clazz.new_($I$(16,1).c$$javax_swing_text_Element,[this, null, elem]);
} else if (kind === $I$(10).CAPTION ) {
return Clazz.new_($I$(17,1).c$$javax_swing_text_Element,[elem]);
}}var p=this.getParent$();
if (p != null ) {
var f=p.getViewFactory$();
if (f != null ) {
return f.create$javax_swing_text_Element(elem);
}}return null;
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY=Clazz.new_($I$(2,1));
};
var $s$ = new Int16Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableView, "ColumnIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javax.swing.text.html.CSS','javax.swing.text.html.CSS.LayoutIterator']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['col'],'O',['percentages','int[]','+adjustmentWeights','+offsets','+spans']]]

Clazz.newMeth(C$, 'disablePercentages$',  function () {
this.percentages=null;
});

Clazz.newMeth(C$, 'updatePercentagesAndAdjustmentWeights$I',  function (span) {
this.adjustmentWeights=Clazz.array(Integer.TYPE, [this.b$['javax.swing.text.html.TableView'].columnRequirements.length]);
for (var i=0; i < this.b$['javax.swing.text.html.TableView'].columnRequirements.length; i++) {
this.adjustmentWeights[i]=0;
}
if (this.b$['javax.swing.text.html.TableView'].relativeCells) {
this.percentages=Clazz.array(Integer.TYPE, [this.b$['javax.swing.text.html.TableView'].columnRequirements.length]);
} else {
this.percentages=null;
}var nrows=this.b$['javax.swing.text.html.TableView'].getRowCount$.apply(this.b$['javax.swing.text.html.TableView'], []);
for (var rowIndex=0; rowIndex < nrows; rowIndex++) {
var row=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [rowIndex]);
var col=0;
var ncells=row.getViewCount$();
for (var cell=0; cell < ncells; cell++, col++) {
var cv=row.getView$I(cell);
for (; row.isFilled$I(col); col++) ;
var rowSpan=this.b$['javax.swing.text.html.TableView'].getRowsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.html.TableView'], [cv]);
var colSpan=this.b$['javax.swing.text.html.TableView'].getColumnsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.html.TableView'], [cv]);
var a=cv.getAttributes$();
var lv=a.getAttribute$O($I$(1).WIDTH);
if (lv != null ) {
var len=((lv.getValue$F(span) / colSpan + 0.5)|0);
for (var i=0; i < colSpan; i++) {
if (lv.isPercentage$()) {
this.percentages[col + i]=Math.max(this.percentages[col + i], len);
this.adjustmentWeights[col + i]=Math.max(this.adjustmentWeights[col + i], 2);
} else {
this.adjustmentWeights[col + i]=Math.max(this.adjustmentWeights[col + i], 1);
}}
}col+=colSpan - 1;
}
}
}, p$1);

Clazz.newMeth(C$, 'setLayoutArrays$IA$IA$I',  function (offsets, spans, targetSpan) {
this.offsets=offsets;
this.spans=spans;
p$1.updatePercentagesAndAdjustmentWeights$I.apply(this, [targetSpan]);
});

Clazz.newMeth(C$, 'getCount$',  function () {
return this.b$['javax.swing.text.html.TableView'].columnRequirements.length;
});

Clazz.newMeth(C$, 'setIndex$I',  function (i) {
this.col=i;
});

Clazz.newMeth(C$, 'setOffset$I',  function (offs) {
this.offsets[this.col]=offs;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offsets[this.col];
});

Clazz.newMeth(C$, 'setSpan$I',  function (span) {
this.spans[this.col]=span;
});

Clazz.newMeth(C$, 'getSpan$',  function () {
return this.spans[this.col];
});

Clazz.newMeth(C$, 'getMinimumSpan$F',  function (parentSpan) {
return this.b$['javax.swing.text.html.TableView'].columnRequirements[this.col].minimum;
});

Clazz.newMeth(C$, 'getPreferredSpan$F',  function (parentSpan) {
if ((this.percentages != null ) && (this.percentages[this.col] != 0) ) {
return Math.max(this.percentages[this.col], this.b$['javax.swing.text.html.TableView'].columnRequirements[this.col].minimum);
}return this.b$['javax.swing.text.html.TableView'].columnRequirements[this.col].preferred;
});

Clazz.newMeth(C$, 'getMaximumSpan$F',  function (parentSpan) {
return this.b$['javax.swing.text.html.TableView'].columnRequirements[this.col].maximum;
});

Clazz.newMeth(C$, 'getBorderWidth$',  function () {
return this.b$['javax.swing.text.html.TableView'].borderWidth;
});

Clazz.newMeth(C$, 'getLeadingCollapseSpan$',  function () {
return this.b$['javax.swing.text.html.TableView'].cellSpacing;
});

Clazz.newMeth(C$, 'getTrailingCollapseSpan$',  function () {
return this.b$['javax.swing.text.html.TableView'].cellSpacing;
});

Clazz.newMeth(C$, 'getAdjustmentWeight$',  function () {
return this.adjustmentWeights[this.col];
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableView, "RowIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javax.swing.text.html.CSS','javax.swing.text.html.CSS.LayoutIterator']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['row'],'O',['adjustments','int[]','+offsets','+spans']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateAdjustments$',  function () {
var axis=1;
if (this.b$['javax.swing.text.html.TableView'].multiRowCells) {
var n=this.b$['javax.swing.text.html.TableView'].getRowCount$.apply(this.b$['javax.swing.text.html.TableView'], []);
this.adjustments=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [i]);
if (rv.multiRowCells == true ) {
var ncells=rv.getViewCount$();
for (var j=0; j < ncells; j++) {
var v=rv.getView$I(j);
var nrows=this.b$['javax.swing.text.html.TableView'].getRowsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.html.TableView'], [v]);
if (nrows > 1) {
var spanNeeded=(v.getPreferredSpan$I(axis)|0);
this.adjustMultiRowSpan$I$I$I(spanNeeded, nrows, i);
}}
}}
} else {
this.adjustments=null;
}});

Clazz.newMeth(C$, 'adjustMultiRowSpan$I$I$I',  function (spanNeeded, nrows, rowIndex) {
if ((rowIndex + nrows) > this.getCount$()) {
nrows=this.getCount$() - rowIndex;
if (nrows < 1) {
return;
}}var span=0;
for (var i=0; i < nrows; i++) {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [rowIndex + i]);
span=(span+(rv.getPreferredSpan$I(1))|0);
}
if (spanNeeded > span) {
var adjust=(spanNeeded - span);
var rowAdjust=(adjust/nrows|0);
var firstAdjust=rowAdjust + (adjust - (rowAdjust * nrows));
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [rowIndex]);
this.adjustments[rowIndex]=Math.max(this.adjustments[rowIndex], firstAdjust);
for (var i=1; i < nrows; i++) {
this.adjustments[rowIndex + i]=Math.max(this.adjustments[rowIndex + i], rowAdjust);
}
}});

Clazz.newMeth(C$, 'setLayoutArrays$IA$IA',  function (offsets, spans) {
this.offsets=offsets;
this.spans=spans;
});

Clazz.newMeth(C$, 'setOffset$I',  function (offs) {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [this.row]);
if (rv != null ) {
this.offsets[rv.viewIndex]=offs;
}});

Clazz.newMeth(C$, 'getOffset$',  function () {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [this.row]);
if (rv != null ) {
return this.offsets[rv.viewIndex];
}return 0;
});

Clazz.newMeth(C$, 'setSpan$I',  function (span) {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [this.row]);
if (rv != null ) {
this.spans[rv.viewIndex]=span;
}});

Clazz.newMeth(C$, 'getSpan$',  function () {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [this.row]);
if (rv != null ) {
return this.spans[rv.viewIndex];
}return 0;
});

Clazz.newMeth(C$, 'getCount$',  function () {
return this.b$['javax.swing.text.html.TableView'].rows.size$();
});

Clazz.newMeth(C$, 'setIndex$I',  function (i) {
this.row=i;
});

Clazz.newMeth(C$, 'getMinimumSpan$F',  function (parentSpan) {
return this.getPreferredSpan$F(parentSpan);
});

Clazz.newMeth(C$, 'getPreferredSpan$F',  function (parentSpan) {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [this.row]);
if (rv != null ) {
var adjust=(this.adjustments != null ) ? this.adjustments[this.row] : 0;
return rv.getPreferredSpan$I(this.b$['javax.swing.text.html.TableView'].getAxis$.apply(this.b$['javax.swing.text.html.TableView'], [])) + adjust;
}return 0;
});

Clazz.newMeth(C$, 'getMaximumSpan$F',  function (parentSpan) {
return this.getPreferredSpan$F(parentSpan);
});

Clazz.newMeth(C$, 'getBorderWidth$',  function () {
return this.b$['javax.swing.text.html.TableView'].borderWidth;
});

Clazz.newMeth(C$, 'getLeadingCollapseSpan$',  function () {
return this.b$['javax.swing.text.html.TableView'].cellSpacing;
});

Clazz.newMeth(C$, 'getTrailingCollapseSpan$',  function () {
return this.b$['javax.swing.text.html.TableView'].cellSpacing;
});

Clazz.newMeth(C$, 'getAdjustmentWeight$',  function () {
return 0;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableView, "RowView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.BoxView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['multiRowCells'],'I',['rowIndex','viewIndex'],'O',['painter','javax.swing.text.html.StyleSheet.BoxPainter','attr','javax.swing.text.AttributeSet','fillColumns','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 0]);C$.$init$.apply(this);
this.fillColumns=Clazz.new_($I$(2,1));
this.setPropertiesFromAttributes$();
}, 1);

Clazz.newMeth(C$, 'clearFilledColumns$',  function () {
this.fillColumns.and$java_util_BitSet($I$(3).EMPTY);
});

Clazz.newMeth(C$, 'fillColumn$I',  function (col) {
this.fillColumns.set$I(col);
});

Clazz.newMeth(C$, 'isFilled$I',  function (col) {
return this.fillColumns.get$I(col);
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

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attr;
});

Clazz.newMeth(C$, 'findViewAtPoint$I$I$java_awt_Rectangle',  function (x, y, alloc) {
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
if (this.getChildAllocation$I$java_awt_Shape(i, alloc).contains$D$D(x, y)) {
this.childAllocation$I$java_awt_Rectangle(i, alloc);
return this.getView$I(i);
}}
return null;
});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
var doc=this.getDocument$();
return doc.getStyleSheet$();
});

Clazz.newMeth(C$, 'preferenceChanged$javax_swing_text_View$Z$Z',  function (child, width, height) {
C$.superclazz.prototype.preferenceChanged$javax_swing_text_View$Z$Z.apply(this, [child, width, height]);
if (this.b$['javax.swing.text.html.TableView'].multiRowCells && height ) {
for (var i=this.rowIndex - 1; i >= 0; i--) {
var rv=this.b$['javax.swing.text.html.TableView'].getRow$I.apply(this.b$['javax.swing.text.html.TableView'], [i]);
if (rv.multiRowCells) {
rv.preferenceChanged$javax_swing_text_View$Z$Z(null, false, true);
break;
}}
}});

Clazz.newMeth(C$, 'calculateMajorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var req=Clazz.new_($I$(4,1));
req.minimum=this.b$['javax.swing.text.html.TableView'].totalColumnRequirements.minimum;
req.maximum=this.b$['javax.swing.text.html.TableView'].totalColumnRequirements.maximum;
req.preferred=this.b$['javax.swing.text.html.TableView'].totalColumnRequirements.preferred;
req.alignment=0.0;
return req;
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
var value;
if (axis == 0) {
value=this.b$['javax.swing.text.html.TableView'].totalColumnRequirements.minimum + this.getLeftInset$() + this.getRightInset$() ;
} else {
value=C$.superclazz.prototype.getMinimumSpan$I.apply(this, [axis]);
}return value;
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
var value;
if (axis == 0) {
value=2.14748365E9;
} else {
value=C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
}return value;
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
var value;
if (axis == 0) {
value=this.b$['javax.swing.text.html.TableView'].totalColumnRequirements.preferred + this.getLeftInset$() + this.getRightInset$() ;
} else {
value=C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]);
}return value;
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, f]);
var pos=e.getOffset$();
if (pos <= this.getStartOffset$() && (pos + e.getLength$()) >= this.getEndOffset$() ) {
this.setPropertiesFromAttributes$();
}});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
var a=allocation;
this.painter.paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View(g, a.x, a.y, a.width, a.height, this);
C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, a]);
});

Clazz.newMeth(C$, 'replace$I$I$javax_swing_text_ViewA',  function (offset, length, views) {
C$.superclazz.prototype.replace$I$I$javax_swing_text_ViewA.apply(this, [offset, length, views]);
this.b$['javax.swing.text.html.TableView'].invalidateGrid$.apply(this.b$['javax.swing.text.html.TableView'], []);
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var min=0;
var pref=0;
var max=0;
this.multiRowCells=false;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
if (this.b$['javax.swing.text.html.TableView'].getRowsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.html.TableView'], [v]) > 1) {
this.multiRowCells=true;
max=Math.max$J$J((v.getMaximumSpan$I(axis)|0), max);
} else {
min=Math.max$J$J((v.getMinimumSpan$I(axis)|0), min);
pref=Math.max$J$J((v.getPreferredSpan$I(axis)|0), pref);
max=Math.max$J$J((v.getMaximumSpan$I(axis)|0), max);
}}
if (r == null ) {
r=Clazz.new_($I$(4,1));
r.alignment=0.5;
}r.preferred=Long.$ival(pref);
r.minimum=Long.$ival(min);
r.maximum=Long.$ival(max);
return r;
});

Clazz.newMeth(C$, 'layoutMajorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var col=0;
var ncells=this.getViewCount$();
for (var cell=0; cell < ncells; cell++) {
var cv=this.getView$I(cell);
if (this.b$['javax.swing.text.html.TableView'].skipComments && !(Clazz.instanceOf(cv, "javax.swing.text.html.TableView.CellView")) ) {
continue;
}for (; this.isFilled$I(col); col++) ;
var colSpan=this.b$['javax.swing.text.html.TableView'].getColumnsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.html.TableView'], [cv]);
spans[cell]=this.b$['javax.swing.text.html.TableView'].columnSpans[col];
offsets[cell]=this.b$['javax.swing.text.html.TableView'].columnOffsets[col];
if (colSpan > 1) {
var n=this.b$['javax.swing.text.html.TableView'].columnSpans.length;
for (var j=1; j < colSpan; j++) {
if ((col + j) < n) {
spans[cell]+=this.b$['javax.swing.text.html.TableView'].columnSpans[col + j];
spans[cell]+=this.b$['javax.swing.text.html.TableView'].cellSpacing;
}}
col+=colSpan - 1;
}++col;
}
});

Clazz.newMeth(C$, 'layoutMinorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
C$.superclazz.prototype.layoutMinorAxis$I$I$IA$IA.apply(this, [targetSpan, axis, offsets, spans]);
var col=0;
var ncells=this.getViewCount$();
for (var cell=0; cell < ncells; cell++, col++) {
var cv=this.getView$I(cell);
for (; this.isFilled$I(col); col++) ;
var colSpan=this.b$['javax.swing.text.html.TableView'].getColumnsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.html.TableView'], [cv]);
var rowSpan=this.b$['javax.swing.text.html.TableView'].getRowsOccupied$javax_swing_text_View.apply(this.b$['javax.swing.text.html.TableView'], [cv]);
if (rowSpan > 1) {
var row0=this.rowIndex;
var row1=Math.min(this.rowIndex + rowSpan - 1, this.b$['javax.swing.text.html.TableView'].getRowCount$.apply(this.b$['javax.swing.text.html.TableView'], []) - 1);
spans[cell]=this.b$['javax.swing.text.html.TableView'].getMultiRowSpan$I$I.apply(this.b$['javax.swing.text.html.TableView'], [row0, row1]);
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

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
this.painter=sheet.getBoxPainter$javax_swing_text_AttributeSet(this.attr);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TableView, "CellView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.html.BlockView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'layoutMajorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
C$.superclazz.prototype.layoutMajorAxis$I$I$IA$IA.apply(this, [targetSpan, axis, offsets, spans]);
var used=0;
var n=spans.length;
for (var i=0; i < n; i++) {
used+=spans[i];
}
var adjust=0;
if (used < targetSpan) {
var valign=this.getElement$().getAttributes$().getAttribute$O($I$(5).VALIGN);
if (valign == null ) {
var rowAttr=this.getElement$().getParentElement$().getAttributes$();
valign=rowAttr.getAttribute$O($I$(5).VALIGN);
}if ((valign == null ) || valign.equals$O("middle") ) {
adjust=((targetSpan - used)/2|0);
} else if (valign.equals$O("bottom")) {
adjust=targetSpan - used;
}}if (adjust != 0) {
for (var i=0; i < n; i++) {
offsets[i]+=adjust;
}
}});

Clazz.newMeth(C$, 'calculateMajorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var req=C$.superclazz.prototype.calculateMajorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
req.maximum=2147483647;
return req;
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var rv=C$.superclazz.prototype.calculateMinorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
var n=this.getViewCount$();
var min=0;
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
min=Math.max((v.getMinimumSpan$I(axis)|0), min);
}
rv.minimum=Math.min(rv.minimum, min);
return rv;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

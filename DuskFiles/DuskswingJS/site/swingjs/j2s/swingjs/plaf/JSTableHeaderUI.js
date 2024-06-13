(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},p$4={},I$=[[0,'swingjs.plaf.JSTableHeaderUI','javax.swing.SwingUtilities','java.awt.Cursor','java.awt.Rectangle','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','swingjs.plaf.CellHolder',['swingjs.plaf.JSTableHeaderUI','.MouseInputHandler'],'javax.swing.CellRendererPane','javax.swing.LookAndFeel','sun.swing.DefaultLookup','swingjs.plaf.LazyActionMap',['swingjs.plaf.JSTableHeaderUI','.Actions'],'java.awt.Point','swingjs.plaf.JSTableUI','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTableHeaderUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI');
C$.$classes$=[['MouseInputHandler',1],['Actions',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rolloverColumn=-1;
this.selectedColumnIndex=0;
},1);

C$.$fields$=[['Z',['working'],'I',['rolloverColumn','selectedColumnIndex'],'O',['table','javax.swing.JTable','headdiv','swingjs.api.js.DOMNode','tableHeader','javax.swing.table.JTableHeader','rendererPane','javax.swing.CellRendererPane','mouseInputListener','javax.swing.event.MouseInputListener']]
,['O',['resizeCursor','java.awt.Cursor','tmpRect','java.awt.Rectangle','+cellBounds','focusListener','java.awt.event.FocusListener']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isContainer=true;
}, 1);

Clazz.newMeth(C$, 'setTainted$',  function () {
if (!this.working) C$.superclazz.prototype.setTainted$.apply(this, []);
});

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
this.table=this.tableHeader.getTable$();
var thh=this.tableHeader.getHeight$();
var w=this.table.getWidth$();
if (this.domNode == null ) {
this.domNode=$I$(5,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
}$I$(6).setStyles(this.domNode, ["width", w + "px", "height", thh + "px"]);
return this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, this.c.getFont$());
});

Clazz.newMeth(C$, 'addChildrenToDOM$java_awt_ComponentA$I',  function (children, n) {
var ncols=this.table.getColumnCount$();
var thh=this.tableHeader.getHeight$();
var cw=Clazz.array(Integer.TYPE, [ncols]);
for (var col=0; col < ncols; col++) cw[col]=this.table.getColumnModel$().getColumn$I(col).getWidth$();

var rid=this.id + "_tab_header";
if (this.headdiv != null ) $I$(6).dispose(this.headdiv);
this.headdiv=$I$(6).createElement("div", rid);
$I$(6).setStyle(this.headdiv, "height", thh + "px");
this.domNode.appendChild(this.headdiv);
for (var col=0, tx=0; col < ncols; col++) {
var w=cw[col];
var td=$I$(7).findOrCreateNode$swingjs_plaf_JSComponentUI$I$I$I$I$I$swingjs_api_js_DOMNode(this, -1, col, tx, 0, w, this.headdiv);
p$2.updateCellNode$swingjs_api_js_DOMNode$I$I$I.apply(this, [td, col, w, thh]);
tx+=w;
}
});

Clazz.newMeth(C$, 'updateCellNode$swingjs_api_js_DOMNode$I$I$I',  function (td, col, w, thh) {
var c=p$2.getHeaderComponent$I$I$I$swingjs_api_js_DOMNode.apply(this, [col, w, thh, td]);
if (c != null ) $I$(7).updateCellNode$swingjs_api_js_DOMNode$java_awt_JSComponent$I$I(td, c, -1, -1);
}, p$2);

Clazz.newMeth(C$, 'createMouseInputListener$',  function () {
return Clazz.new_($I$(8,1),[this, null]);
});

Clazz.newMeth(C$, 'createUI$javax_swing_JComponent',  function (h) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.tableHeader=c;
this.rendererPane=Clazz.new_($I$(9,1));
this.tableHeader.add$java_awt_Component(this.rendererPane);
this.installDefaults$();
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
$I$(10).installColorsAndFont$javax_swing_JComponent$S$S$S(this.tableHeader, "TableHeader.background", "TableHeader.foreground", "TableHeader.font");
$I$(10).installProperty$javax_swing_JComponent$S$O(this.tableHeader, "opaque", Boolean.TRUE);
});

Clazz.newMeth(C$, 'installListeners$',  function () {
this.mouseInputListener=this.createMouseInputListener$();
this.tableHeader.addMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.tableHeader.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.tableHeader.addFocusListener$java_awt_event_FocusListener(C$.focusListener);
});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var keyMap=$I$(11).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.tableHeader, this, "TableHeader.ancestorInputMap");
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tableHeader, 1, keyMap);
$I$(12,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.tableHeader, Clazz.getClass(C$), "TableHeader.actionMap"]);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallDefaults$();
this.uninstallListeners$();
this.uninstallKeyboardActions$();
this.tableHeader.remove$java_awt_Component(this.rendererPane);
this.rendererPane=null;
this.tableHeader=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
this.tableHeader.removeMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.tableHeader.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.mouseInputListener=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tableHeader, 0, null);
$I$(2).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.tableHeader, null);
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["toggleSortOrder"]));
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["selectColumnToLeft"]));
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["selectColumnToRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["moveColumnLeft"]));
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["moveColumnRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["resizeLeft"]));
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["resizeRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(13,1).c$$S,["focusTable"]));
}, 1);

Clazz.newMeth(C$, 'getRolloverColumn$',  function () {
return this.rolloverColumn;
});

Clazz.newMeth(C$, 'rolloverColumnUpdated$I$I',  function (oldColumn, newColumn) {
});

Clazz.newMeth(C$, 'updateRolloverColumn$java_awt_event_MouseEvent',  function (e) {
if (this.tableHeader.getDraggedColumn$() == null  && this.tableHeader.contains$java_awt_Point(e.getPoint$()) ) {
var col=this.tableHeader.columnAtPoint$java_awt_Point(e.getPoint$());
if (col != this.rolloverColumn) {
var oldRolloverColumn=this.rolloverColumn;
this.rolloverColumn=col;
this.rolloverColumnUpdated$I$I(oldRolloverColumn, this.rolloverColumn);
}}}, p$2);

Clazz.newMeth(C$, 'selectNextColumn$Z',  function (doIt) {
var newIndex=p$2.getSelectedColumnIndex.apply(this, []);
if (newIndex < this.tableHeader.getColumnModel$().getColumnCount$() - 1) {
++newIndex;
if (doIt) {
this.selectColumn$I(newIndex);
}}return newIndex;
}, p$2);

Clazz.newMeth(C$, 'selectPreviousColumn$Z',  function (doIt) {
var newIndex=p$2.getSelectedColumnIndex.apply(this, []);
if (newIndex > 0) {
--newIndex;
if (doIt) {
this.selectColumn$I(newIndex);
}}return newIndex;
}, p$2);

Clazz.newMeth(C$, 'selectColumn$I',  function (newColIndex) {
this.selectColumn$I$Z(newColIndex, true);
});

Clazz.newMeth(C$, 'selectColumn$I$Z',  function (newColIndex, doScroll) {
var repaintRect=this.tableHeader.getHeaderRect$I(this.selectedColumnIndex);
this.tableHeader.repaint$java_awt_Rectangle(repaintRect);
this.selectedColumnIndex=newColIndex;
repaintRect=this.tableHeader.getHeaderRect$I(newColIndex);
this.tableHeader.repaint$java_awt_Rectangle(repaintRect);
if (doScroll) {
p$2.scrollToColumn$I.apply(this, [newColIndex]);
}return;
});

Clazz.newMeth(C$, 'scrollToColumn$I',  function (col) {
var container;
var table;
if ((this.tableHeader.getParent$() == null ) || ((container=this.tableHeader.getParent$().getParent$()) == null ) || !(Clazz.instanceOf(container, "javax.swing.JScrollPane")) || ((table=this.tableHeader.getTable$()) == null )  ) {
return;
}table.computeVisibleRect$java_awt_Rectangle(C$.tmpRect);
table._getCellRect$I$I$Z$java_awt_Rectangle(0, col, true, C$.cellBounds);
C$.tmpRect.x=C$.cellBounds.x;
C$.tmpRect.width=C$.cellBounds.width;
table.scrollRectToVisible$java_awt_Rectangle(C$.tmpRect);
}, p$2);

Clazz.newMeth(C$, 'getSelectedColumnIndex',  function () {
var numCols=this.tableHeader.getColumnModel$().getColumnCount$();
if (this.selectedColumnIndex >= numCols && numCols > 0 ) {
this.selectedColumnIndex=numCols - 1;
}return this.selectedColumnIndex;
}, p$2);

Clazz.newMeth(C$, 'canResize$javax_swing_table_TableColumn$javax_swing_table_JTableHeader',  function (column, header) {
return (column != null ) && header.getResizingAllowed$() && column.getResizable$()  ;
}, 1);

Clazz.newMeth(C$, 'changeColumnWidth$javax_swing_table_TableColumn$javax_swing_table_JTableHeader$I$I',  function (resizingColumn, th, oldWidth, newWidth) {
resizingColumn.setWidth$I(newWidth);
var container;
var table;
if ((th.getParent$() == null ) || ((container=th.getParent$().getParent$()) == null ) || !(Clazz.instanceOf(container, "javax.swing.JScrollPane")) || ((table=th.getTable$()) == null )  ) {
return 0;
}if (!container.getComponentOrientation$().isLeftToRight$() && !th.getComponentOrientation$().isLeftToRight$() ) {
var viewport=(container).getViewport$();
var viewportWidth=viewport.getWidth$();
var diff=newWidth - oldWidth;
var newHeaderWidth=table.getWidth$() + diff;
var tableSize=table.getSize$();
tableSize.width+=diff;
table.setSize$java_awt_Dimension(tableSize);
if ((newHeaderWidth >= viewportWidth) && (table.getAutoResizeMode$() == 0) ) {
var p=viewport.getViewPosition$();
p.x=Math.max(0, Math.min(newHeaderWidth - viewportWidth, p.x + diff));
viewport.setViewPosition$java_awt_Point(p);
return diff;
}}return 0;
}, p$2);

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var baseline=-1;
var columnModel=this.tableHeader.getColumnModel$();
for (var column=0; column < columnModel.getColumnCount$(); column++) {
var aColumn=columnModel.getColumn$I(column);
var comp=p$2.getHeaderComponent$I.apply(this, [column]);
var pref=comp.getPreferredSize$();
var columnBaseline=comp.getBaseline$I$I(pref.width, height);
if (columnBaseline >= 0) {
if (baseline == -1) {
baseline=columnBaseline;
} else if (baseline != columnBaseline) {
baseline=-1;
break;
}}}
return baseline;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
if (this.tableHeader.getColumnModel$().getColumnCount$() <= 0) {
return;
}this.working=true;
var ltr=this.tableHeader.getComponentOrientation$().isLeftToRight$();
var clip=g.getClipBounds$();
var left=clip.getLocation$();
var right=Clazz.new_($I$(14,1).c$$I$I,[clip.x + clip.width - 1, clip.y]);
var cm=this.tableHeader.getColumnModel$();
var cMin=this.tableHeader.columnAtPoint$java_awt_Point(ltr ? left : right);
var cMax=this.tableHeader.columnAtPoint$java_awt_Point(ltr ? right : left);
if (cMin == -1) {
cMin=0;
}if (cMax == -1) {
cMax=cm.getColumnCount$() - 1;
}var draggedColumn=this.tableHeader.getDraggedColumn$();
var columnWidth;
var cellRect=this.tableHeader.getHeaderRect$I(ltr ? cMin : cMax);
var aColumn;
if (ltr) {
for (var column=cMin; column <= cMax; column++) {
aColumn=cm.getColumn$I(column);
columnWidth=aColumn.getWidth$();
cellRect.width=columnWidth;
if (aColumn !== draggedColumn ) {
p$2.paintCell$java_awt_Graphics$java_awt_Rectangle$I.apply(this, [g, cellRect, column]);
}cellRect.x+=columnWidth;
}
} else {
for (var column=cMax; column >= cMin; column--) {
aColumn=cm.getColumn$I(column);
columnWidth=aColumn.getWidth$();
cellRect.width=columnWidth;
if (aColumn !== draggedColumn ) {
p$2.paintCell$java_awt_Graphics$java_awt_Rectangle$I.apply(this, [g, cellRect, column]);
}cellRect.x+=columnWidth;
}
}if (draggedColumn != null ) {
var draggedColumnIndex=p$2.viewIndexForColumn$javax_swing_table_TableColumn.apply(this, [draggedColumn]);
var draggedCellRect=this.tableHeader.getHeaderRect$I(draggedColumnIndex);
g.setColor$java_awt_Color(this.tableHeader.getParent$().getBackground$());
g.fillRect$I$I$I$I(draggedCellRect.x, draggedCellRect.y, draggedCellRect.width, draggedCellRect.height);
draggedCellRect.x+=this.tableHeader.getDraggedDistance$();
g.setColor$java_awt_Color(this.tableHeader.getBackground$());
g.fillRect$I$I$I$I(draggedCellRect.x, draggedCellRect.y, draggedCellRect.width, draggedCellRect.height);
p$2.paintCell$java_awt_Graphics$java_awt_Rectangle$I.apply(this, [g, draggedCellRect, draggedColumnIndex]);
}p$2.paintGrid$java_awt_Graphics$I$I.apply(this, [g, cMin, cMax]);
this.rendererPane.removeAll$();
this.working=false;
});

Clazz.newMeth(C$, 'paintGrid$java_awt_Graphics$I$I',  function (g, cMin, cMax) {
g.setColor$java_awt_Color(this.table.getGridColor$());
var h=this.tableHeader.getHeight$();
this.table._getCellRect$I$I$Z$java_awt_Rectangle(0, cMin, true, $I$(15).minCell);
this.table._getCellRect$I$I$Z$java_awt_Rectangle(0, cMax, true, $I$(15).maxCell);
var damagedArea=$I$(15).minCell.union$java_awt_Rectangle($I$(15).maxCell);
if (this.table.getShowHorizontalLines$()) {
g.drawLine$I$I$I$I(0, h - 1, damagedArea.width, h - 1);
}if (this.table.getShowVerticalLines$()) {
var cm=this.table.getColumnModel$();
var x;
if (this.table.getComponentOrientation$().isLeftToRight$()) {
x=damagedArea.x;
for (var column=cMin; column <= cMax; column++) {
var w=cm.getColumn$I(column).getWidth$();
x+=w;
g.drawLine$I$I$I$I(x, 0, x, h - 1);
}
} else {
x=damagedArea.x;
for (var column=cMax; column >= cMin; column--) {
var w=cm.getColumn$I(column).getWidth$();
x+=w;
g.drawLine$I$I$I$I(x, 0, x, h - 1);
}
}}}, p$2);

Clazz.newMeth(C$, 'getHeaderComponent$I',  function (col) {
return p$2.getHeaderComponent$I$I$I$swingjs_api_js_DOMNode.apply(this, [col, 0, 0, null]);
}, p$2);

Clazz.newMeth(C$, 'getHeaderComponent$I$I$I$swingjs_api_js_DOMNode',  function (col, w, h, td) {
var aColumn=this.tableHeader.getColumnModel$().getColumn$I(col);
var renderer=aColumn.getHeaderRenderer$();
if (renderer == null ) {
renderer=this.tableHeader.getDefaultRenderer$();
}var hasFocus=!this.tableHeader.isPaintingForPrint$() && (col == p$2.getSelectedColumnIndex.apply(this, [])) && this.tableHeader.hasFocus$()  ;
var c=renderer.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.tableHeader.getTable$(), aColumn.getHeaderValue$(), false, hasFocus, -1, col);
if (c != null  && td != null  ) {
$I$(15).prepareCellRendererUI$java_awt_JSComponent$Z$I$I$swingjs_api_js_DOMNode$Z$javax_swing_JComponent(c, false, w, h, td, true, this.tableHeader);
}return c;
}, p$2);

Clazz.newMeth(C$, 'paintCell$java_awt_Graphics$java_awt_Rectangle$I',  function (g, cellRect, columnIndex) {
var td=$I$(7).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, -1, columnIndex);
if (td == null ) return;
var w=cellRect.width;
var h=cellRect.height;
var comp=p$2.getHeaderComponent$I$I$I$swingjs_api_js_DOMNode.apply(this, [columnIndex, w, h, td]);
if (comp == null ) return;
this.rendererPane.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, comp, this.tableHeader, cellRect.x, cellRect.y, w, h, true);
if (td != null ) comp.秘getUI$().setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(null, 0, 0, td);
}, p$2);

Clazz.newMeth(C$, 'viewIndexForColumn$javax_swing_table_TableColumn',  function (aColumn) {
var cm=this.tableHeader.getColumnModel$();
for (var column=0; column < cm.getColumnCount$(); column++) {
if (cm.getColumn$I(column) === aColumn ) {
return column;
}}
return -1;
}, p$2);

Clazz.newMeth(C$, 'getHeaderHeight',  function () {
var height=0;
var accomodatedDefault=false;
var columnModel=this.tableHeader.getColumnModel$();
for (var column=0; column < columnModel.getColumnCount$(); column++) {
var aColumn=columnModel.getColumn$I(column);
var isDefault=(aColumn.getHeaderRenderer$() == null );
if (!isDefault || !accomodatedDefault ) {
var comp=p$2.getHeaderComponent$I.apply(this, [column]);
var ui=comp.秘getUI$();
var rendererHeight=(ui.isUIDisabled ? ui.cellHeight : comp.getPreferredSize$().height);
height=Math.max(height, rendererHeight);
if (isDefault && rendererHeight > 0 ) {
var headerValue=aColumn.getHeaderValue$();
if (headerValue != null ) {
headerValue=headerValue.toString();
if (headerValue != null  && !headerValue.equals$O("") ) {
accomodatedDefault=true;
}}}}}
return height;
}, p$2);

Clazz.newMeth(C$, 'createHeaderSize$J',  function (width) {
if (Long.$gt(width,2147483647 )) {
width=2147483647;
}return Clazz.new_([Long.$ival(width), p$2.getHeaderHeight.apply(this, [])],$I$(16,1).c$$I$I);
}, p$2);

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (jc) {
var width=0;
var enumeration=this.tableHeader.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=Long.$add(width,aColumn.getMinWidth$());
}
return p$2.createHeaderSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
var width=0;
var enumeration=this.tableHeader.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=Long.$add(width,aColumn.getPreferredWidth$());
}
return p$2.createHeaderSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
var width=0;
var enumeration=this.tableHeader.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=Long.$add(width,aColumn.getMaxWidth$());
}
return p$2.createHeaderSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'setHTMLElement$',  function () {
return this.setHTMLElementCUI$();
});

C$.$static$=function(){C$.$static$=0;
C$.resizeCursor=$I$(3).getPredefinedCursor$I(11);
C$.tmpRect=Clazz.new_($I$(4,1));
C$.cellBounds=Clazz.new_($I$(4,1));
C$.focusListener=((P$.JSTableHeaderUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSTableHeaderUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
p$4.repaintHeader$O.apply(this, [e.getSource$()]);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$4.repaintHeader$O.apply(this, [e.getSource$()]);
});

Clazz.newMeth(C$, 'repaintHeader$O',  function (source) {
if (Clazz.instanceOf(source, "javax.swing.table.JTableHeader")) {
var th=source;
var ui=th.getUI$();
if (ui == null ) {
return;
}th.repaint$java_awt_Rectangle(th.getHeaderRect$I(p$2.getSelectedColumnIndex.apply(ui, [])));
}}, p$4);
})()
), Clazz.new_(P$.JSTableHeaderUI$1.$init$,[this, null]));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableHeaderUI, "MouseInputHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.MouseInputListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.otherCursor=$I$(1).resizeCursor;
},1);

C$.$fields$=[['I',['mouseXOffset'],'O',['otherCursor','java.awt.Cursor']]]

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() % 2 == 1 && $I$(2).isLeftMouseButton$java_awt_event_MouseEvent(e) ) {
var table=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getTable$();
var sorter;
if (table != null  && (sorter=table.getRowSorter$()) != null  ) {
var columnIndex=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.columnAtPoint$java_awt_Point(e.getPoint$());
if (columnIndex != -1) {
columnIndex=table.convertColumnIndexToModel$I(columnIndex);
sorter.toggleSortOrder$I(columnIndex);
}}}});

Clazz.newMeth(C$, 'getResizingColumn$java_awt_Point',  function (p) {
return p$1.getResizingColumn$java_awt_Point$I.apply(this, [p, this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.columnAtPoint$java_awt_Point(p)]);
}, p$1);

Clazz.newMeth(C$, 'getResizingColumn$java_awt_Point$I',  function (p, column) {
if (column == -1) {
return null;
}var r=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getHeaderRect$I(column);
r.grow$I$I(-3, 0);
if (r.contains$java_awt_Point(p)) {
return null;
}var midPoint=r.x + (r.width/2|0);
var columnIndex;
if (this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getComponentOrientation$().isLeftToRight$()) {
columnIndex=(p.x < midPoint) ? column - 1 : column;
} else {
columnIndex=(p.x < midPoint) ? column : column - 1;
}if (columnIndex == -1) {
return null;
}return this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getColumnModel$().getColumn$I(columnIndex);
}, p$1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setDraggedColumn$javax_swing_table_TableColumn(null);
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setResizingColumn$javax_swing_table_TableColumn(null);
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setDraggedDistance$I(0);
var p=e.getPoint$();
var columnModel=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getColumnModel$();
var index=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.columnAtPoint$java_awt_Point(p);
if (index != -1) {
var resizingColumn=p$1.getResizingColumn$java_awt_Point$I.apply(this, [p, index]);
if ($I$(1).canResize$javax_swing_table_TableColumn$javax_swing_table_JTableHeader(resizingColumn, this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader)) {
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setResizingColumn$javax_swing_table_TableColumn(resizingColumn);
if (this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getComponentOrientation$().isLeftToRight$()) {
this.mouseXOffset=p.x - resizingColumn.getWidth$();
} else {
this.mouseXOffset=p.x + resizingColumn.getWidth$();
}} else if (this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getReorderingAllowed$()) {
var hitColumn=columnModel.getColumn$I(index);
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setDraggedColumn$javax_swing_table_TableColumn(hitColumn);
this.mouseXOffset=p.x;
}}if (this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getReorderingAllowed$()) {
var oldRolloverColumn=this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumn;
this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumn=-1;
this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumnUpdated$I$I.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [oldRolloverColumn, this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumn]);
}});

Clazz.newMeth(C$, 'swapCursor',  function () {
var tmp=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getCursor$();
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setCursor$java_awt_Cursor(this.otherCursor);
this.otherCursor=tmp;
}, p$1);

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
if ($I$(1,"canResize$javax_swing_table_TableColumn$javax_swing_table_JTableHeader",[p$1.getResizingColumn$java_awt_Point.apply(this, [e.getPoint$()]), this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader]) != (this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getCursor$() === $I$(1).resizeCursor ) ) {
p$1.swapCursor.apply(this, []);
}p$2.updateRolloverColumn$java_awt_event_MouseEvent.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [e]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
var mouseX=e.getX$();
var resizingColumn=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getResizingColumn$();
var draggedColumn=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getDraggedColumn$();
var headerLeftToRight=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getComponentOrientation$().isLeftToRight$();
if (resizingColumn != null ) {
var oldWidth=resizingColumn.getWidth$();
var newWidth;
if (headerLeftToRight) {
newWidth=mouseX - this.mouseXOffset;
} else {
newWidth=this.mouseXOffset - mouseX;
}this.mouseXOffset+=p$2.changeColumnWidth$javax_swing_table_TableColumn$javax_swing_table_JTableHeader$I$I.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [resizingColumn, this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader, oldWidth, newWidth]);
} else if (draggedColumn != null ) {
var cm=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getColumnModel$();
var draggedDistance=mouseX - this.mouseXOffset;
var direction=(draggedDistance < 0) ? -1 : 1;
var columnIndex=p$2.viewIndexForColumn$javax_swing_table_TableColumn.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [draggedColumn]);
var newColumnIndex=columnIndex + (headerLeftToRight ? direction : -direction);
if (0 <= newColumnIndex && newColumnIndex < cm.getColumnCount$() ) {
var width=cm.getColumn$I(newColumnIndex).getWidth$();
if (Math.abs(draggedDistance) > ((width/2|0))) {
var table=this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getTable$();
this.mouseXOffset=this.mouseXOffset + direction * width;
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setDraggedDistance$I(draggedDistance - direction * width);
var selectedIndex=table.convertColumnIndexToModel$I(p$2.getSelectedColumnIndex.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], []));
cm.moveColumn$I$I(columnIndex, newColumnIndex);
this.b$['swingjs.plaf.JSTableHeaderUI'].selectColumn$I$Z.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [table.convertColumnIndexToView$I(selectedIndex), false]);
return;
}}p$1.setDraggedDistance$I$I.apply(this, [draggedDistance, columnIndex]);
}p$2.updateRolloverColumn$java_awt_event_MouseEvent.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
p$1.setDraggedDistance$I$I.apply(this, [0, p$2.viewIndexForColumn$javax_swing_table_TableColumn.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getDraggedColumn$()])]);
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setResizingColumn$javax_swing_table_TableColumn(null);
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setDraggedColumn$javax_swing_table_TableColumn(null);
p$2.updateRolloverColumn$java_awt_event_MouseEvent.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [e]);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
p$2.updateRolloverColumn$java_awt_event_MouseEvent.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [e]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
var oldRolloverColumn=this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumn;
this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumn=-1;
this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumnUpdated$I$I.apply(this.b$['swingjs.plaf.JSTableHeaderUI'], [oldRolloverColumn, this.b$['swingjs.plaf.JSTableHeaderUI'].rolloverColumn]);
});

Clazz.newMeth(C$, 'setDraggedDistance$I$I',  function (draggedDistance, column) {
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.setDraggedDistance$I(draggedDistance);
if (column != -1) {
this.b$['swingjs.plaf.JSTableHeaderUI'].tableHeader.getColumnModel$().moveColumn$I$I(column, column);
}}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableHeaderUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isEnabled$O',  function (sender) {
if (Clazz.instanceOf(sender, "javax.swing.table.JTableHeader")) {
var th=sender;
var cm=th.getColumnModel$();
if (cm.getColumnCount$() <= 0) {
return false;
}var key=this.getName$();
var ui=th.getUI$();
if (ui != null ) {
if (key == "moveColumnLeft") {
return th.getReorderingAllowed$() && p$3.maybeMoveColumn$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI$Z.apply(this, [true, th, ui, false]) ;
} else if (key == "moveColumnRight") {
return th.getReorderingAllowed$() && p$3.maybeMoveColumn$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI$Z.apply(this, [false, th, ui, false]) ;
} else if (key == "resizeLeft" || key == "resizeRight" ) {
return $I$(1,"canResize$javax_swing_table_TableColumn$javax_swing_table_JTableHeader",[cm.getColumn$I(p$2.getSelectedColumnIndex.apply(ui, [])), th]);
} else if (key == "focusTable") {
return (th.getTable$() != null );
}}}return true;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var th=e.getSource$();
var ui=th.getUI$();
if (ui == null ) {
return;
}var name=this.getName$();
if ("toggleSortOrder" == name) {
var table=th.getTable$();
var sorter=table.getRowSorter$();
if (sorter != null ) {
var columnIndex=p$2.getSelectedColumnIndex.apply(ui, []);
columnIndex=table.convertColumnIndexToModel$I(columnIndex);
sorter.toggleSortOrder$I(columnIndex);
}} else if ("selectColumnToLeft" == name) {
if (th.getComponentOrientation$().isLeftToRight$()) {
p$2.selectPreviousColumn$Z.apply(ui, [true]);
} else {
p$2.selectNextColumn$Z.apply(ui, [true]);
}} else if ("selectColumnToRight" == name) {
if (th.getComponentOrientation$().isLeftToRight$()) {
p$2.selectNextColumn$Z.apply(ui, [true]);
} else {
p$2.selectPreviousColumn$Z.apply(ui, [true]);
}} else if ("moveColumnLeft" == name) {
p$3.moveColumn$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI.apply(this, [true, th, ui]);
} else if ("moveColumnRight" == name) {
p$3.moveColumn$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI.apply(this, [false, th, ui]);
} else if ("resizeLeft" == name) {
p$3.resize$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI.apply(this, [true, th, ui]);
} else if ("resizeRight" == name) {
p$3.resize$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI.apply(this, [false, th, ui]);
} else if ("focusTable" == name) {
var table=th.getTable$();
if (table != null ) {
table.requestFocusInWindow$();
}}});

Clazz.newMeth(C$, 'moveColumn$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI',  function (leftArrow, th, ui) {
p$3.maybeMoveColumn$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI$Z.apply(this, [leftArrow, th, ui, true]);
}, p$3);

Clazz.newMeth(C$, 'maybeMoveColumn$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI$Z',  function (leftArrow, th, ui, doIt) {
var oldIndex=p$2.getSelectedColumnIndex.apply(ui, []);
var newIndex;
if (th.getComponentOrientation$().isLeftToRight$()) {
newIndex=leftArrow ? p$2.selectPreviousColumn$Z.apply(ui, [doIt]) : p$2.selectNextColumn$Z.apply(ui, [doIt]);
} else {
newIndex=leftArrow ? p$2.selectNextColumn$Z.apply(ui, [doIt]) : p$2.selectPreviousColumn$Z.apply(ui, [doIt]);
}if (newIndex != oldIndex) {
if (doIt) {
th.getColumnModel$().moveColumn$I$I(oldIndex, newIndex);
} else {
return true;
}}return false;
}, p$3);

Clazz.newMeth(C$, 'resize$Z$javax_swing_table_JTableHeader$swingjs_plaf_JSTableHeaderUI',  function (leftArrow, th, ui) {
var columnIndex=p$2.getSelectedColumnIndex.apply(ui, []);
var resizingColumn=th.getColumnModel$().getColumn$I(columnIndex);
th.setResizingColumn$javax_swing_table_TableColumn(resizingColumn);
var oldWidth=resizingColumn.getWidth$();
var newWidth=oldWidth;
if (th.getComponentOrientation$().isLeftToRight$()) {
newWidth=newWidth + (leftArrow ? -1 : 1);
} else {
newWidth=newWidth + (leftArrow ? 1 : -1);
}p$2.changeColumnWidth$javax_swing_table_TableColumn$javax_swing_table_JTableHeader$I$I.apply(ui, [resizingColumn, th, oldWidth, newWidth]);
}, p$3);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

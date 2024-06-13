(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},I$=[[0,'swingjs.plaf.JSTableUI','javax.swing.KeyStroke','javax.swing.SwingUtilities','sun.swing.SwingUtilities2','StringBuffer','swingjs.plaf.BasicTransferable','java.awt.Rectangle','StringBuilder',['swingjs.plaf.JSTableUI','.TableTransferHandler'],'java.util.BitSet','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','swingjs.plaf.CellHolder','java.awt.event.MouseEvent',['swingjs.plaf.JSTableUI','.Handler'],'javax.swing.CellRendererPane','javax.swing.LookAndFeel','javax.swing.UIManager','swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup',['swingjs.plaf.JSTableUI','.Actions'],'javax.swing.TransferHandler','javax.swing.table.DefaultTableCellRenderer',['java.awt.Component','.BaselineResizeBehavior'],'java.awt.Dimension','java.awt.Point','java.awt.event.ActionEvent','java.awt.EventQueue']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTableUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.$classes$=[['Actions',10],['KeyHandler',1],['FocusHandler',1],['MouseInputHandler',1],['Handler',2],['TableTransferHandler',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentRowMin=-1;
this.currentRowMax=-1;
this.cw=Clazz.array(Integer.TYPE, [10]);
this.cwOld=Clazz.array(Integer.TYPE, [10]);
this.isFileList=false;
this.myClip=Clazz.new_($I$(7,1));
this.bsRowTainted=Clazz.new_($I$(10,1));
},1);

C$.$fields$=[['Z',['working','isScrolling','justLaidOut','havePainted','isFileList','dragging','isNewModel','resized','repaintAll'],'I',['oldrc','oldrh','currentRowMin','currentRowMax','oldWidth','oldHeight','lastWidth','lastRowCount','lastColCount'],'O',['header','javax.swing.JTable','+table','oldFont','java.lang.Object','tableNode','swingjs.api.js.DOMNode','cw','int[]','+cwOld','editorComp','javax.swing.JComponent','rendererPane','javax.swing.CellRendererPane','keyListener','java.awt.event.KeyListener','focusListener','java.awt.event.FocusListener','mouseInputListener','javax.swing.event.MouseInputListener','handler','swingjs.plaf.JSTableUI.Handler','myClip','java.awt.Rectangle','bsRowTainted','java.util.BitSet']]
,['O',['tmpRect','java.awt.Rectangle','+cellRect','+minCell','+maxCell','BASELINE_COMPONENT_KEY','StringBuilder','defaultTransferHandler','javax.swing.TransferHandler']]]

Clazz.newMeth(C$, 'setScrolling$',  function () {
this.isScrolling=true;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isTable=true;
}, 1);

Clazz.newMeth(C$, 'getDOMNode$',  function () {
return this.updateDOMNode$();
});

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
var rc=this.table.getRowCount$();
var rh=this.table.getRowHeight$();
var rebuild=(rc != this.oldrc || rh != this.oldrh );
this.oldrh=rh;
this.oldrc=rc;
if (this.domNode == null ) {
this.domNode=$I$(11,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
this.tableNode=this.domNode;
this.enableJSKeys$Z(true);
$I$(12).setStyle(this.tableNode, "outline", "none");
}if (rebuild) {
this.currentRowMin=this.currentRowMax=-1;
}var d=this.getPreferredSize$javax_swing_JComponent(this.jc);
var w=d.width;
var h=d.height;
if (w != this.oldWidth || h != this.oldHeight ) {
this.oldWidth=w;
this.oldHeight=h;
$I$(12).setStyles(this.tableNode, ["width", w + "px", "height", h + "px"]);
}var font=this.c.getFont$();
if (!font.equals$O(this.oldFont)) {
this.oldFont=font;
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.tableNode, this.c.getFont$());
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'beginLayout$',  function () {
C$.superclazz.prototype.beginLayout$.apply(this, []);
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I$I',  function (x, y, w, h, op) {
p$2.enableTable$Z.apply(this, [true]);
C$.superclazz.prototype.setBounds$I$I$I$I$I.apply(this, [x, y, w, h, op]);
});

Clazz.newMeth(C$, 'endLayout$',  function () {
C$.superclazz.prototype.endLayout$.apply(this, []);
this.currentRowMin=this.currentRowMax=-1;
this.justLaidOut=true;
p$2.enableTable$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'endValidate$',  function () {
});

Clazz.newMeth(C$, 'update$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
if (this.isUIDisabled) return;
this.paint$java_awt_Graphics$javax_swing_JComponent(g, c);
});

Clazz.newMeth(C$, 'updateCursorImmediately$',  function () {
if (this.isUIDisabled) return;
this.setCursor$();
});

Clazz.newMeth(C$, 'getContainerHeight$',  function () {
return this.height=this.table.getParent$().getHeight$();
});

Clazz.newMeth(C$, 'setTainted$',  function () {
if (!this.working) C$.superclazz.prototype.setTainted$.apply(this, []);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "model":
this.currentRowMin=this.currentRowMax=-1;
this.isLaidOut=false;
this.setHTMLElement$();
p$2.enableTable$Z.apply(this, [false]);
var sp=this.getScrollPane$();
if (sp != null ) {
sp.getVerticalScrollBar$().setValue$I(0);
}if (this.table.getRowCount$() == 0) {
p$2.setHidden$Z.apply(this, [true]);
}return;
case "autoCreateRowSorter":
case "rowSorter":
case "sorter":
case "autoResizeMode":
case "tableCellEditor":
case "gridColor":
case "preferredSize":
case "background":
case "ancestor":
case "tableData":
case "ToolTipText":
return;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'enableTable$Z',  function (b) {
var hui=p$2.getHeaderUI.apply(this, []);
if (hui != null ) hui.setUIDisabled$Z(!b);
this.setUIDisabled$Z(!b);
}, p$2);

Clazz.newMeth(C$, 'getHeaderUI',  function () {
var th=this.table.getTableHeader$();
return (th == null  ? null : th.getUI$());
}, p$2);

Clazz.newMeth(C$, 'getCellRendererComponent$javax_swing_table_TableCellRenderer$I$I$I$I$swingjs_api_js_DOMNode$Z',  function (renderer, row, col, w, h, td, fullPaint) {
var cNoPrep=renderer.秘getComponent$ && renderer.秘getComponent$() ||null;
var c=(cNoPrep == null  ? this.table.prepareRenderer$javax_swing_table_TableCellRenderer$I$I(renderer, row, col) : cNoPrep);
if (c != null ) {
if (C$.prepareCellRendererUI$java_awt_JSComponent$Z$I$I$swingjs_api_js_DOMNode$Z$javax_swing_JComponent(c, cNoPrep != null , w, h, td, fullPaint, this.table)) this.table.prepareRenderer$javax_swing_table_TableCellRenderer$I$I(renderer, row, col);
}return c;
}, p$2);

Clazz.newMeth(C$, 'prepareCellRendererUI$java_awt_JSComponent$Z$I$I$swingjs_api_js_DOMNode$Z$javax_swing_JComponent',  function (c, forcePrep, w, h, td, fullPaint, table) {
var ui=c.秘getUI$();
var wasDisabled=ui.isUIDisabled;
c.秘reshape$I$I$I$I$Z(c.getX$(), c.getY$(), w, h, false);
ui.setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(c, w, h, null);
ui.setTargetParent$javax_swing_JComponent(table);
if (fullPaint && wasDisabled  || forcePrep ) {
if (wasDisabled) {
ui.restoreCellNodes$swingjs_api_js_DOMNode(td);
}ui.setTainted$();
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getChildren$',  function () {
return null;
});

Clazz.newMeth(C$, 'getChildCount$',  function () {
return this.table.getRowCount$() * this.table.getColumnCount$();
});

Clazz.newMeth(C$, 'addChildrenToDOM$java_awt_ComponentA$I',  function (children, n) {
if (this.currentRowMin == -1) {
p$2.setHidden$Z.apply(this, [true]);
this.havePainted=false;
var ncols=this.table.getColumnCount$();
var rowCount=this.table.getRowCount$();
p$2.getColumnWidths$Z.apply(this, [true]);
var rminy;
var rmaxy;
var rminx;
var rmaxx;
this.table.computeVisibleRect$java_awt_Rectangle(C$.tmpRect);
rminx=C$.tmpRect.x;
rmaxx=C$.tmpRect.x + C$.tmpRect.width;
var h=this.table.getRowHeight$();
if (this.getScrollPane$() == null ) {
var height=0;
if (rowCount > 0 && ncols > 0 ) {
var r=this.table.getCellRect$I$I$Z(rowCount - 1, 0, true);
height=r.y + r.height;
$I$(12).setStyles(this.outerNode, ["overflow", "hidden", "height", height + "px"]);
}}this.$$O(this.tableNode).empty();
this.addLocalCanvas$Z(true);
rminy=C$.tmpRect.y;
rmaxy=C$.tmpRect.y + C$.tmpRect.height;
if (C$.tmpRect.height != 0) {
this.currentRowMin=0;
p$2.addElements$I$I$I$I$I$I$I$I$I.apply(this, [rminx, rminy, rmaxx, rmaxy, h, 0, rowCount, 0, ncols]);
}}});

Clazz.newMeth(C$, 'setHidden$Z',  function (b) {
$I$(12).setStyle(this.domNode, "visibility", b ? "hidden" : "visible");
if (b && this.outerNode != null   && $I$(12).getStyle(this.outerNode, "width") == null  ) $I$(12).setStyle(this.outerNode, "width", "inherit");
}, p$2);

Clazz.newMeth(C$, 'getColumnWidths$Z',  function (isNew) {
var ncols=this.table.getColumnCount$();
if (ncols > this.cw.length) {
this.cw=Clazz.array(Integer.TYPE, [ncols]);
this.cwOld=Clazz.array(Integer.TYPE, [ncols]);
}if (isNew) this.bsRowTainted.clear$();
var colTainted=false;
var cm=this.table.getColumnModel$();
for (var col=0; col < ncols; col++) {
var w=this.cw[col]=cm.getColumn$I(col).getWidth$();
if (!isNew && this.cwOld[col] != w ) {
colTainted=true;
}this.cwOld[col]=w;
}
if (colTainted) this.bsRowTainted.set$I$I(0, this.table.getRowCount$());
}, p$2);

Clazz.newMeth(C$, 'addElements$I$I$I$I$I$I$I$I$I',  function (rminx, rminy, rmaxx, rmaxy, h, row1, row2, col1, col2) {
var col;
var tx0;
for (col=0, tx0=0; col < col1; tx0+=this.cw[col++]) {
}
for (var row=row1, ty=row1 * h; row < row2 && ty < rmaxy ; row++, ty+=h) {
if (ty + h < rminy) continue;
var rid=this.id + "_tab_row" + row ;
var tr=$I$(12).getElement(rid);
var rowExists=(tr != null );
if (!rowExists) {
tr=$I$(12).createElement("div", rid);
this.tableNode.appendChild(tr);
}$I$(12).setStyle(tr, "height", h + "px");
col=col1;
for (var w, tx=tx0; col < col2 && tx < rmaxx ; col++, tx+=w) {
w=this.cw[col];
if (tx + w < rminx) continue;
var td=$I$(13).findOrCreateNode$swingjs_plaf_JSComponentUI$I$I$I$I$I$swingjs_api_js_DOMNode(this, row, col, tx, ty, w, tr);
p$2.updateCellNode$swingjs_api_js_DOMNode$I$I$I$I.apply(this, [td, row, col, w, h]);
if (rminx < 0) return td;
}
}
return null;
}, p$2);

Clazz.newMeth(C$, 'updateCellNode$swingjs_api_js_DOMNode$I$I$I$I',  function (td, row, col, w, h) {
var c=p$2.getCellRendererComponent$javax_swing_table_TableCellRenderer$I$I$I$I$swingjs_api_js_DOMNode$Z.apply(this, [this.table.getCellRenderer$I$I(row, col), row, col, w, h, td, true]);
if (c != null ) $I$(13).updateCellNode$swingjs_api_js_DOMNode$java_awt_JSComponent$I$I(td, c, -1, -1);
}, p$2);

Clazz.newMeth(C$, 'prepareDOMEditor$Z$I$I',  function (starting, row, col) {
if (this.editorComp != null ) {
this.editorComp.setVisible$Z(true);
this.editorComp.setVisible$Z(false);
}this.editorComp=this.table.getEditorComponent$();
if (starting) {
if (this.editorComp != null ) {
this.editorComp.setVisible$Z(false);
this.editorComp.setVisible$Z(true);
p$2.notifyEntry$Z.apply(this, [false]);
}} else {
row=this.table.getEditingRow$();
col=this.table.getEditingColumn$();
if (col >= this.table.getColumnCount$()) return;
var td=$I$(13).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, row, col);
if (td == null ) {
td=p$2.addElement$I$I$I.apply(this, [row, col, this.table.getRowHeight$()]);
}p$2.updateCellNode$swingjs_api_js_DOMNode$I$I$I$I.apply(this, [td, row, col, 0, 0]);
this.repaintCell$I$I(row, col);
p$2.notifyEntry$Z.apply(this, [true]);
}});

Clazz.newMeth(C$, 'addElement$I$I$I',  function (row, col, h) {
return p$2.addElements$I$I$I$I$I$I$I$I$I.apply(this, [-2147483648, -2147483648, 2147483647, 2147483647, h, row, row + 1, col, col + 1]);
}, p$2);

Clazz.newMeth(C$, 'notifyEntry$Z',  function (isEntry) {
this.table.dispatchEvent$java_awt_AWTEvent(Clazz.new_([this.table, (isEntry ? 504 : 505), System.currentTimeMillis$(), 0, -1, -1, 0, false],$I$(14,1).c$$java_awt_Component$I$J$I$I$I$I$Z));
}, p$2);

Clazz.newMeth(C$, 'rebuildTable$',  function () {
this.setTainted$();
this.currentRowMin=-1;
this.setHTMLElement$();
p$2.rebuildHeader.apply(this, []);
});

Clazz.newMeth(C$, 'rebuildHeader',  function () {
var ui=p$2.getHeaderUI.apply(this, []);
if (ui != null ) {
ui.setTainted$();
ui.setHTMLElement$();
this.table.getTableHeader$().秘repaint$();
}}, p$2);

Clazz.newMeth(C$, 'pointOutsidePrefSize$I$I$java_awt_Point',  function (row, column, p) {
if (!this.isFileList) {
return false;
}return $I$(4).pointOutsidePrefSize$javax_swing_JTable$I$I$java_awt_Point(this.table, row, column, p);
}, p$2);

Clazz.newMeth(C$, 'newModel$',  function () {
this.isNewModel=true;
});

Clazz.newMeth(C$, 'haveSrollPane$',  function () {
return (Clazz.instanceOf(this.table.getParent$().getParent$(), "javax.swing.JScrollPane"));
});

Clazz.newMeth(C$, 'repaintCell$I$I',  function (lr, lc) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(lr, lc, false, C$.tmpRect);
this.table.repaint$java_awt_Rectangle(C$.tmpRect);
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(15,1),[this, null]);
}return this.handler;
}, p$2);

Clazz.newMeth(C$, 'createKeyListener$',  function () {
return p$2.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createFocusListener$',  function () {
return p$2.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createMouseInputListener$',  function () {
return p$2.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.table=c;
this.rendererPane=Clazz.new_($I$(16,1));
this.table.add$java_awt_Component(this.rendererPane);
this.installDefaults$();
p$2.installDefaults2.apply(this, []);
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
$I$(17).installColorsAndFont$javax_swing_JComponent$S$S$S(this.table, "Table.background", "Table.foreground", "Table.font");
$I$(17).installProperty$javax_swing_JComponent$S$O(this.table, "opaque", Boolean.TRUE);
var sbg=this.table.getSelectionBackground$();
if (sbg == null  || Clazz.instanceOf(sbg, "javax.swing.plaf.UIResource") ) {
this.table.setSelectionBackground$java_awt_Color($I$(18).getColor$O("Table.selectionBackground"));
}var sfg=this.table.getSelectionForeground$();
if (sfg == null  || Clazz.instanceOf(sfg, "javax.swing.plaf.UIResource") ) {
this.table.setSelectionForeground$java_awt_Color($I$(18).getColor$O("Table.selectionForeground"));
}var gridColor=this.table.getGridColor$();
if (gridColor == null  || Clazz.instanceOf(gridColor, "javax.swing.plaf.UIResource") ) {
this.table.setGridColor$java_awt_Color($I$(18).getColor$O("Table.gridColor"));
}var sp=this.getScrollPane$();
if (sp != null ) {
sp.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
$I$(17).installBorder$javax_swing_JComponent$S(sp, "Table.scrollPaneBorder");
}this.isFileList=Boolean.TRUE.equals$O(this.table.getClientProperty$O("Table.isFileList"));
});

Clazz.newMeth(C$, 'getScrollPane$',  function () {
var parent;
parent=((parent=this.table.getParent$()) == null  ? null : parent.getParent$());
return (Clazz.instanceOf(parent, "javax.swing.JScrollPane") ? parent : null);
});

Clazz.newMeth(C$, 'installDefaults2',  function () {
}, p$2);

Clazz.newMeth(C$, 'installDefaultTransferHandlerIfNecessary$',  function () {
var th=this.table.getTransferHandler$();
if (th == null  || Clazz.instanceOf(th, "javax.swing.plaf.UIResource") ) {
this.table.setTransferHandler$javax_swing_TransferHandler(C$.defaultTransferHandler);
if (Clazz.instanceOf(this.table.getDropTarget$(), "javax.swing.plaf.UIResource")) {
this.table.setDropTarget$java_awt_dnd_DropTarget(null);
}}});

Clazz.newMeth(C$, 'installListeners$',  function () {
this.focusListener=this.createFocusListener$();
this.keyListener=this.createKeyListener$();
this.mouseInputListener=this.createMouseInputListener$();
this.table.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.table.addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.table.addMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.table.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.table.addPropertyChangeListener$java_beans_PropertyChangeListener(p$2.getHandler.apply(this, []));
if (this.isFileList) {
this.table.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this, []));
}});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
$I$(19,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.table, Clazz.getClass(C$), "Table.actionMap"]);
var inputMap=this.getInputMap$I(1);
$I$(3).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.table, 1, inputMap);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 1) {
var keyMap=$I$(20).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.table, this, "Table.ancestorInputMap");
var rtlKeyMap;
if (this.table.getComponentOrientation$().isLeftToRight$() || ((rtlKeyMap=$I$(20).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.table, this, "Table.ancestorInputMap.RightToLeft")) == null ) ) {
return keyMap;
} else {
rtlKeyMap.setParent$javax_swing_InputMap(keyMap);
return rtlKeyMap;
}}return null;
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextColumn", 1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextColumnChangeLead", 1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousColumn", -1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousColumnChangeLead", -1, 0, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextRow", 0, 1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextRowChangeLead", 0, 1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousRow", 0, -1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousRowChangeLead", 0, -1, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextColumnExtendSelection", 1, 0, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousColumnExtendSelection", -1, 0, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextRowExtendSelection", 0, 1, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousRowExtendSelection", 0, -1, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollUpChangeSelection", false, false, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollDownChangeSelection", false, true, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectFirstColumn", false, false, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectLastColumn", false, true, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollUpExtendSelection", true, false, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollDownExtendSelection", true, true, true, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectFirstColumnExtendSelection", true, false, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectLastColumnExtendSelection", true, true, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectFirstRow", false, false, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectLastRow", false, true, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectFirstRowExtendSelection", true, false, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["selectLastRowExtendSelection", true, true, true, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextColumnCell", 1, 0, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousColumnCell", -1, 0, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectNextRowCell", 0, 1, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$I$I$Z$Z,["selectPreviousRowCell", 0, -1, false, true]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["selectAll"]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["clearSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["cancel"]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["startEditing"]));
map.put$O$javax_swing_Action($I$(22).getCutAction$().getValue$S("Name"), $I$(22).getCutAction$());
map.put$O$javax_swing_Action($I$(22).getCopyAction$().getValue$S("Name"), $I$(22).getCopyAction$());
map.put$O$javax_swing_Action($I$(22).getPasteAction$().getValue$S("Name"), $I$(22).getPasteAction$());
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollLeftChangeSelection", false, false, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollRightChangeSelection", false, true, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollLeftExtendSelection", true, false, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S$Z$Z$Z$Z,["scrollRightExtendSelection", true, true, false, false]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["addToSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["toggleAndAnchor"]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["extendTo"]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["moveSelectionTo"]));
map.put$javax_swing_Action(Clazz.new_($I$(21,1).c$$S,["focusHeader"]));
}, 1);

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallDefaults$();
this.uninstallListeners$();
this.uninstallKeyboardActions$();
this.table.remove$java_awt_Component(this.rendererPane);
this.rendererPane=null;
this.table=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
this.table.removeFocusListener$java_awt_event_FocusListener(this.focusListener);
this.table.removeKeyListener$java_awt_event_KeyListener(this.keyListener);
this.table.removeMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.table.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.table.removePropertyChangeListener$java_beans_PropertyChangeListener(p$2.getHandler.apply(this, []));
if (this.isFileList) {
this.table.getSelectionModel$().removeListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this, []));
}this.focusListener=null;
this.keyListener=null;
this.mouseInputListener=null;
this.handler=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(3).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.table, 1, null);
$I$(3).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.table, null);
});

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var lafDefaults=$I$(18).getLookAndFeelDefaults$();
var renderer=lafDefaults.get$O(C$.BASELINE_COMPONENT_KEY);
if (renderer == null ) {
var tcr=Clazz.new_($I$(23,1));
renderer=tcr.getTableCellRendererComponent$javax_swing_JTable$O$Z$Z$I$I(this.table, "a", false, false, -1, -1);
lafDefaults.put$O$O(C$.BASELINE_COMPONENT_KEY, renderer);
}renderer.setFont$java_awt_Font(this.table.getFont$());
var rowMargin=this.table.getRowMargin$();
return renderer.getBaseline$I$I(2147483647, this.table.getRowHeight$() - rowMargin) + (rowMargin/2|0);
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
return $I$(24).CONSTANT_ASCENT;
});

Clazz.newMeth(C$, 'createTableSize$J',  function (width) {
var height=0;
var rowCount=this.table.getRowCount$();
if (rowCount > 0 && this.table.getColumnCount$() > 0 ) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(rowCount - 1, 0, true, C$.cellRect);
height=C$.cellRect.y + C$.cellRect.height;
}var tmp=Math.abs$J(width);
if (Long.$gt(tmp,2147483647 )) {
tmp=2147483647;
}return Clazz.new_([Long.$ival(tmp), height],$I$(25,1).c$$I$I);
}, p$2);

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (jc) {
var width=0;
var enumeration=this.table.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=Long.$add(width,aColumn.getMinWidth$());
}
return p$2.createTableSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
var width=0;
var enumeration=this.table.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=Long.$add(width,aColumn.getPreferredWidth$());
}
return p$2.createTableSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
var width=0;
var enumeration=this.table.getColumnModel$().getColumns$();
while (enumeration.hasMoreElements$()){
var aColumn=enumeration.nextElement$();
width=Long.$add(width,aColumn.getMaxWidth$());
}
return p$2.createTableSize$J.apply(this, [width]);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
var rc=this.table.getRowCount$();
var cc=this.table.getColumnCount$();
p$2.checkRemoveCells$I$I.apply(this, [rc, cc]);
var clip=g.getClipBounds$java_awt_Rectangle(this.myClip);
var rh=this.table.getRowHeight$();
if (this.getScrollPane$() != null ) {
$I$(12,"setStyles",[this.outerNode, ["overflow", "hidden", "height", (rc * rh) + "px"]]);
}this.table.computeVisibleRect$java_awt_Rectangle(C$.tmpRect);
if (rc <= 0 || cc <= 0  || !C$.tmpRect.intersects$java_awt_Rectangle(clip) ) {
p$2.paintDropLines$java_awt_Graphics.apply(this, [g]);
return;
}clip=C$.tmpRect.intersection$java_awt_Rectangle(clip);
var upperLeft=clip.getLocation$();
var lowerRight=Clazz.new_($I$(26,1).c$$I$I,[clip.x + clip.width - 1, clip.y + clip.height - 1]);
var rMin=this.table.rowAtPoint$java_awt_Point(upperLeft);
var rMax=this.table.rowAtPoint$java_awt_Point(lowerRight);
if (rMin == -1) {
rMin=0;
}if (rMax == -1) {
rMax=rc - 1;
}this.resized=(C$.tmpRect.width != this.lastWidth);
if (this.resized) {
if (rMax - rMin > 1) {
var sp=this.getScrollPane$();
if (sp != null ) {
var val=Math.max(1, (rMax - rMin - 1 ) * rh);
sp.getVerticalScrollBar$().setBlockIncrement$I(val);
sp.getVerticalScrollBar$().setUnitIncrement$I(((val + 1)/2|0));
}}var was0=(this.lastWidth == 0);
this.lastWidth=C$.tmpRect.width;
this.repaintAll=true;
if (!was0) {
this.rebuildTable$();
var hui=p$2.getHeaderUI.apply(this, []);
if (hui != null ) hui.paint$java_awt_Graphics$javax_swing_JComponent(g, c);
this.table.repaint$();
return;
}}this.working=true;
var ltr=this.table.getComponentOrientation$().isLeftToRight$();
var cMin=this.table.columnAtPoint$java_awt_Point(ltr ? upperLeft : lowerRight);
var cMax=this.table.columnAtPoint$java_awt_Point(ltr ? lowerRight : upperLeft);
if (cMin == -1) {
cMin=0;
}if (cMax == -1) {
cMax=this.table.getColumnCount$() - 1;
}var header=this.table.getTableHeader$();
var draggedColumn=(header == null ) ? null : header.getDraggedColumn$();
p$2.paintGrid$java_awt_Graphics$I$I$I$I.apply(this, [g, rMin, rMax, cMin, cMax]);
var rMin0=rMin;
var rMax0=rMax;
if (rMin != rMax && !this.repaintAll  && draggedColumn == null  ) {
if (rMax > this.currentRowMax && rMin < this.currentRowMax ) {
rMin=this.currentRowMax + 1;
} else if (rMin < this.currentRowMin && rMax > this.currentRowMin ) {
rMax=this.currentRowMin - 1;
}}this.currentRowMin=rMin0;
this.currentRowMax=rMax0;
p$2.paintCells$java_awt_Graphics$I$I$I$I$I$I.apply(this, [g, rMin0, rMax0, rMin, rMax, cMin, cMax]);
p$2.paintDropLines$java_awt_Graphics.apply(this, [g]);
if (draggedColumn != null ) p$2.rebuildHeader.apply(this, []);
this.working=false;
this.dragging=false;
this.repaintAll=false;
p$2.setHidden$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'checkRemoveCells$I$I',  function (nrows, ncols) {
if (nrows < this.lastRowCount) {
for (var r=nrows; r < this.lastRowCount; r++) {
var node=$I$(13).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, r, -1);
if (node != null ) {
$I$(12).remove(node);
}}
}if (ncols < this.lastColCount) {
for (var r=0; r < nrows; r++) {
for (var c=ncols; c < this.lastColCount; c++) {
var node=$I$(13).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, r, c);
if (node != null ) {
$I$(12).remove(node);
}}
}
}this.lastColCount=ncols;
this.lastRowCount=nrows;
}, p$2);

Clazz.newMeth(C$, 'paintCells$java_awt_Graphics$I$I$I$I$I$I',  function (g, rMin0, rMax0, rMin, rMax, cMin, cMax) {
var cm=this.table.getColumnModel$();
var columnMargin=cm.getColumnMargin$();
var h=this.table.getRowHeight$();
var forceNew=(this.dragging || this.justLaidOut );
p$2.getColumnWidths$Z.apply(this, [false]);
var columnWidth;
if (this.table.getComponentOrientation$().isLeftToRight$()) {
for (var row=rMin0; row <= rMax0; row++) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(row, cMin, false, C$.cellRect);
var colTainted=this.bsRowTainted.get$I(row);
var tr=$I$(12).getElement(this.id + "_tab_row" + row );
for (var column=cMin; column <= cMax; column++) {
columnWidth=this.cw[column];
C$.cellRect.width=columnWidth - columnMargin;
p$2.paintCell$java_awt_Graphics$java_awt_Rectangle$I$I$I$swingjs_api_js_DOMNode$Z$Z.apply(this, [g, C$.cellRect, row, column, h, tr, forceNew, colTainted]);
C$.cellRect.x+=columnWidth;
}
if (colTainted) this.bsRowTainted.clear$I(row);
}
} else {
for (var row=rMin0; row <= rMax0; row++) {
this.table._getCellRect$I$I$Z$java_awt_Rectangle(row, cMin, false, C$.cellRect);
var tr=$I$(12).getElement(this.id + "_tab_row" + row );
var colTainted=this.bsRowTainted.get$I(row);
for (var column=cMin; column <= cMax; column++) {
columnWidth=this.cw[column];
C$.cellRect.width=columnWidth - columnMargin;
if (column != cMin) C$.cellRect.x-=columnWidth;
p$2.paintCell$java_awt_Graphics$java_awt_Rectangle$I$I$I$swingjs_api_js_DOMNode$Z$Z.apply(this, [g, C$.cellRect, row, column, h, tr, forceNew, colTainted]);
}
if (colTainted) this.bsRowTainted.clear$I(row);
}
}this.rendererPane.removeAll$();
this.isScrolling=false;
this.justLaidOut=false;
this.havePainted=true;
}, p$2);

Clazz.newMeth(C$, 'paintCell$java_awt_Graphics$java_awt_Rectangle$I$I$I$swingjs_api_js_DOMNode$Z$Z',  function (g, cellRect, row, col, h, tr, forceNew, colTainted) {
if (this.table.isEditing$() && this.table.getEditingRow$() == row  && this.table.getEditingColumn$() == col ) {
var component=this.table.getEditorComponent$();
if (Clazz.instanceOf(component, "javax.swing.JTextField")) {
component.setBounds$java_awt_Rectangle(Clazz.new_($I$(7,1).c$$I$I$I$I,[cellRect.x - 2, cellRect.y - 2, cellRect.width, cellRect.height]));
} else {
component.setBounds$java_awt_Rectangle(cellRect);
}component.validate$();
return;
}var td=(forceNew || tr == null   ? null : $I$(13).findCellNode$swingjs_plaf_JSComponentUI$S$I$I(this, null, row, col));
var newtd=(td == null );
if (newtd) {
td=p$2.addElement$I$I$I.apply(this, [row, col, h]);
} else if (colTainted) {
$I$(12).setStyles(td, ["left", cellRect.x + "px", "width", this.cw[col] + "px", "display", null]);
} else {
$I$(12).setStyle(td, "display", null);
}var fullPaint=(newtd || !this.havePainted || !this.isScrolling || this.table.getSelectedRowCount$() > 0  );
var renderer=(fullPaint ? this.table.getCellRenderer$I$I(row, col) : this.table.getCellRendererOrNull$I$I$Z(row, col, this.isScrolling));
if (!fullPaint) {

if (!renderer || renderer.__CLASS_NAME__.indexOf("javax.swing.") == 0) return;
}var comp=p$2.getCellRendererComponent$javax_swing_table_TableCellRenderer$I$I$I$I$swingjs_api_js_DOMNode$Z.apply(this, [renderer, row, col, this.cw[col], h, td, fullPaint]);
if (comp == null ) return;
var shouldValidate=fullPaint && !this.isScrolling ;
this.rendererPane.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, comp, this.table, cellRect.x, cellRect.y, cellRect.width, cellRect.height, shouldValidate);
comp.秘getUI$().setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode(null, 0, 0, td);
}, p$2);

Clazz.newMeth(C$, 'paintGrid$java_awt_Graphics$I$I$I$I',  function (g, rMin, rMax, cMin, cMax) {
g.setColor$java_awt_Color(this.table.getGridColor$());
this.table._getCellRect$I$I$Z$java_awt_Rectangle(rMin, cMin, true, C$.minCell);
this.table._getCellRect$I$I$Z$java_awt_Rectangle(rMax, cMax, true, C$.maxCell);
var damagedArea=C$.minCell.union$java_awt_Rectangle(C$.maxCell);
if (this.table.getShowHorizontalLines$()) {
var tableWidth=damagedArea.x + damagedArea.width;
var y=damagedArea.y;
for (var row=rMin; row <= rMax; row++) {
y+=this.table.getRowHeight$I(row);
g.drawLine$I$I$I$I(damagedArea.x, y - 1, tableWidth - 1, y - 1);
}
}if (this.table.getShowVerticalLines$()) {
var cm=this.table.getColumnModel$();
var tableHeight=damagedArea.y + damagedArea.height;
var x;
if (this.table.getComponentOrientation$().isLeftToRight$()) {
x=damagedArea.x;
for (var column=cMin; column <= cMax; column++) {
var w=cm.getColumn$I(column).getWidth$();
x+=w;
g.drawLine$I$I$I$I(x - 1, 0, x - 1, tableHeight - 1);
}
} else {
x=damagedArea.x;
for (var column=cMax; column >= cMin; column--) {
var w=cm.getColumn$I(column).getWidth$();
x+=w;
g.drawLine$I$I$I$I(x - 1, 0, x - 1, tableHeight - 1);
}
}}}, p$2);

Clazz.newMeth(C$, 'paintDropLines$java_awt_Graphics',  function (g) {
}, p$2);

Clazz.newMeth(C$, 'getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel',  function (table, row, model) {
var index=model.getLeadSelectionIndex$();
var compare=row ? table.getRowCount$() : table.getColumnCount$();
return index < compare ? index : -1;
}, 1);

Clazz.newMeth(C$, 'getAdjustedLead$javax_swing_JTable$Z',  function (table, row) {
return row ? C$.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, row, table.getSelectionModel$()) : C$.getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, row, table.getColumnModel$().getSelectionModel$());
}, 1);

Clazz.newMeth(C$, 'invokeAction$S$javax_swing_Action',  function (name, altAction) {
var map=this.table.getActionMap$();
var action=null;
if (map != null ) {
action=map.get$O(name);
}this.installDefaultTransferHandlerIfNecessary$();
if (action == null ) {
action=altAction;
}action.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this, 1001, action.getValue$S("Name"), $I$(28).getMostRecentEventTime$(), 0],$I$(27,1).c$$O$I$S$J$I));
});

C$.$static$=function(){C$.$static$=0;
C$.tmpRect=Clazz.new_($I$(7,1));
C$.cellRect=Clazz.new_($I$(7,1));
C$.minCell=Clazz.new_($I$(7,1));
C$.maxCell=Clazz.new_($I$(7,1));
C$.BASELINE_COMPONENT_KEY=Clazz.new_($I$(8,1).c$$S,["Table.baselineComponent"]);
C$.defaultTransferHandler=Clazz.new_($I$(9,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['extend','inSelection','forwards','vertically','toLimit'],'I',['dx','dy','leadRow','leadColumn']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$Z$Z',  function (name, dx, dy, extend, inSelection) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
if (inSelection) {
this.inSelection=true;
dx=C$.sign$I(dx);
dy=C$.sign$I(dy);
Clazz.assert(C$, this, function(){return (dx == 0 || dy == 0 ) && !(dx == 0 && dy == 0 ) });
}this.dx=dx;
this.dy=dy;
this.extend=extend;
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$Z$Z$Z',  function (name, extend, forwards, vertically, toLimit) {
C$.c$$S$I$I$Z$Z.apply(this, [name, 0, 0, extend, false]);
this.forwards=forwards;
this.vertically=vertically;
this.toLimit=toLimit;
}, 1);

Clazz.newMeth(C$, 'clipToRange$I$I$I',  function (i, a, b) {
return Math.min(Math.max(i, a), b - 1);
}, 1);

Clazz.newMeth(C$, 'moveWithinTableRange$javax_swing_JTable$I$I',  function (table, dx, dy) {
this.leadRow=C$.clipToRange$I$I$I(this.leadRow + dy, 0, table.getRowCount$());
this.leadColumn=C$.clipToRange$I$I$I(this.leadColumn + dx, 0, table.getColumnCount$());
}, p$1);

Clazz.newMeth(C$, 'sign$I',  function (num) {
return (num < 0) ? -1 : ((num == 0) ? 0 : 1);
}, 1);

Clazz.newMeth(C$, 'moveWithinSelectedRange$javax_swing_JTable$I$I$javax_swing_ListSelectionModel$javax_swing_ListSelectionModel',  function (table, dx, dy, rsm, csm) {
var totalCount;
var minX;
var maxX;
var minY;
var maxY;
var rs=table.getRowSelectionAllowed$();
var cs=table.getColumnSelectionAllowed$();
if (rs && cs ) {
totalCount=table.getSelectedRowCount$() * table.getSelectedColumnCount$();
minX=csm.getMinSelectionIndex$();
maxX=csm.getMaxSelectionIndex$();
minY=rsm.getMinSelectionIndex$();
maxY=rsm.getMaxSelectionIndex$();
} else if (rs) {
totalCount=table.getSelectedRowCount$();
minX=0;
maxX=table.getColumnCount$() - 1;
minY=rsm.getMinSelectionIndex$();
maxY=rsm.getMaxSelectionIndex$();
} else if (cs) {
totalCount=table.getSelectedColumnCount$();
minX=csm.getMinSelectionIndex$();
maxX=csm.getMaxSelectionIndex$();
minY=0;
maxY=table.getRowCount$() - 1;
} else {
totalCount=0;
minX=maxX=minY=maxY=0;
}var stayInSelection;
if (totalCount == 0 || (totalCount == 1 && table.isCellSelected$I$I(this.leadRow, this.leadColumn) ) ) {
stayInSelection=false;
maxX=table.getColumnCount$() - 1;
maxY=table.getRowCount$() - 1;
minX=Math.min(0, maxX);
minY=Math.min(0, maxY);
} else {
stayInSelection=true;
}if (dy == 1 && this.leadColumn == -1 ) {
this.leadColumn=minX;
this.leadRow=-1;
} else if (dx == 1 && this.leadRow == -1 ) {
this.leadRow=minY;
this.leadColumn=-1;
} else if (dy == -1 && this.leadColumn == -1 ) {
this.leadColumn=maxX;
this.leadRow=maxY + 1;
} else if (dx == -1 && this.leadRow == -1 ) {
this.leadRow=maxY;
this.leadColumn=maxX + 1;
}this.leadRow=Math.min(Math.max(this.leadRow, minY - 1), maxY + 1);
this.leadColumn=Math.min(Math.max(this.leadColumn, minX - 1), maxX + 1);
do {
p$1.calcNextPos$I$I$I$I$I$I.apply(this, [dx, minX, maxX, dy, minY, maxY]);
} while (stayInSelection && !table.isCellSelected$I$I(this.leadRow, this.leadColumn) );
return stayInSelection;
}, p$1);

Clazz.newMeth(C$, 'calcNextPos$I$I$I$I$I$I',  function (dx, minX, maxX, dy, minY, maxY) {
if (dx != 0) {
this.leadColumn+=dx;
if (this.leadColumn > maxX) {
this.leadColumn=minX;
++this.leadRow;
if (this.leadRow > maxY) {
this.leadRow=minY;
}} else if (this.leadColumn < minX) {
this.leadColumn=maxX;
--this.leadRow;
if (this.leadRow < minY) {
this.leadRow=maxY;
}}} else {
this.leadRow+=dy;
if (this.leadRow > maxY) {
this.leadRow=minY;
++this.leadColumn;
if (this.leadColumn > maxX) {
this.leadColumn=minX;
}} else if (this.leadRow < minY) {
this.leadRow=maxY;
--this.leadColumn;
if (this.leadColumn < minX) {
this.leadColumn=maxX;
}}}}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var key=this.getName$();
var table=e.getSource$();
var rsm=table.getSelectionModel$();
this.leadRow=$I$(1).getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, true, rsm);
var csm=table.getColumnModel$().getSelectionModel$();
this.leadColumn=$I$(1).getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, false, csm);
if (key == "scrollLeftChangeSelection" || key == "scrollLeftExtendSelection"  || key == "scrollRightChangeSelection"  || key == "scrollRightExtendSelection"  || key == "scrollUpChangeSelection"  || key == "scrollUpExtendSelection"  || key == "scrollDownChangeSelection"  || key == "scrollDownExtendSelection"  || key == "selectFirstColumn"  || key == "selectFirstColumnExtendSelection"  || key == "selectFirstRow"  || key == "selectFirstRowExtendSelection"  || key == "selectLastColumn"  || key == "selectLastColumnExtendSelection"  || key == "selectLastRow"  || key == "selectLastRowExtendSelection" ) {
if (this.toLimit) {
if (this.vertically) {
var rowCount=table.getRowCount$();
this.dx=0;
this.dy=this.forwards ? rowCount : -rowCount;
} else {
var colCount=table.getColumnCount$();
this.dx=this.forwards ? colCount : -colCount;
this.dy=0;
}} else {
if ((table.秘getUI$()).getScrollPane$() == null ) {
return;
}var delta=table.getParent$().getSize$();
if (this.vertically) {
table._getCellRect$I$I$Z$java_awt_Rectangle(this.leadRow, 0, true, $I$(1).tmpRect);
if (this.forwards) {
$I$(1).tmpRect.y+=Math.max(delta.height, $I$(1).tmpRect.height);
} else {
$I$(1).tmpRect.y-=delta.height;
}this.dx=0;
var newRow=table.rowAtPoint$java_awt_Point($I$(1).tmpRect.getLocation$());
if (newRow == -1 && this.forwards ) {
newRow=table.getRowCount$();
}this.dy=newRow - this.leadRow;
} else {
table._getCellRect$I$I$Z$java_awt_Rectangle(0, this.leadColumn, true, $I$(1).tmpRect);
if (this.forwards) {
$I$(1).tmpRect.x+=Math.max(delta.width, $I$(1).tmpRect.width);
} else {
$I$(1).tmpRect.x-=delta.width;
}var newColumn=table.columnAtPoint$java_awt_Point($I$(1).tmpRect.getLocation$());
if (newColumn == -1) {
var ltr=table.getComponentOrientation$().isLeftToRight$();
newColumn=this.forwards ? (ltr ? table.getColumnCount$() : 0) : (ltr ? 0 : table.getColumnCount$());
}this.dx=newColumn - this.leadColumn;
this.dy=0;
}}}if (key == "selectNextRow" || key == "selectNextRowCell"  || key == "selectNextRowExtendSelection"  || key == "selectNextRowChangeLead"  || key == "selectNextColumn"  || key == "selectNextColumnCell"  || key == "selectNextColumnExtendSelection"  || key == "selectNextColumnChangeLead"  || key == "selectPreviousRow"  || key == "selectPreviousRowCell"  || key == "selectPreviousRowExtendSelection"  || key == "selectPreviousRowChangeLead"  || key == "selectPreviousColumn"  || key == "selectPreviousColumnCell"  || key == "selectPreviousColumnExtendSelection"  || key == "selectPreviousColumnChangeLead"  || key == "scrollLeftChangeSelection"  || key == "scrollLeftExtendSelection"  || key == "scrollRightChangeSelection"  || key == "scrollRightExtendSelection"  || key == "scrollUpChangeSelection"  || key == "scrollUpExtendSelection"  || key == "scrollDownChangeSelection"  || key == "scrollDownExtendSelection"  || key == "selectFirstColumn"  || key == "selectFirstColumnExtendSelection"  || key == "selectFirstRow"  || key == "selectFirstRowExtendSelection"  || key == "selectLastColumn"  || key == "selectLastColumnExtendSelection"  || key == "selectLastRow"  || key == "selectLastRowExtendSelection" ) {
if (table.isEditing$() && !table.getCellEditor$().stopCellEditing$() ) {
return;
}var changeLead=false;
if (key == "selectNextRowChangeLead" || key == "selectPreviousRowChangeLead" ) {
changeLead=(rsm.getSelectionMode$() == 2);
} else if (key == "selectNextColumnChangeLead" || key == "selectPreviousColumnChangeLead" ) {
changeLead=(csm.getSelectionMode$() == 2);
}if (changeLead) {
p$1.moveWithinTableRange$javax_swing_JTable$I$I.apply(this, [table, this.dx, this.dy]);
if (this.dy != 0) {
(rsm).moveLeadSelectionIndex$I(this.leadRow);
if ($I$(1).getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, false, csm) == -1 && table.getColumnCount$() > 0 ) {
(csm).moveLeadSelectionIndex$I(0);
}} else {
(csm).moveLeadSelectionIndex$I(this.leadColumn);
if ($I$(1).getAdjustedLead$javax_swing_JTable$Z$javax_swing_ListSelectionModel(table, true, rsm) == -1 && table.getRowCount$() > 0 ) {
(rsm).moveLeadSelectionIndex$I(0);
}}table._getCellRect$I$I$Z$java_awt_Rectangle(this.leadRow, this.leadColumn, false, $I$(1).tmpRect);
table.scrollRectToVisible$java_awt_Rectangle($I$(1).tmpRect);
} else if (!this.inSelection) {
p$1.moveWithinTableRange$javax_swing_JTable$I$I.apply(this, [table, this.dx, this.dy]);
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, this.extend);
} else {
if (table.getRowCount$() <= 0 || table.getColumnCount$() <= 0 ) {
return;
}if (p$1.moveWithinSelectedRange$javax_swing_JTable$I$I$javax_swing_ListSelectionModel$javax_swing_ListSelectionModel.apply(this, [table, this.dx, this.dy, rsm, csm])) {
if (rsm.isSelectedIndex$I(this.leadRow)) {
rsm.addSelectionInterval$I$I(this.leadRow, this.leadRow);
} else {
rsm.removeSelectionInterval$I$I(this.leadRow, this.leadRow);
}if (csm.isSelectedIndex$I(this.leadColumn)) {
csm.addSelectionInterval$I$I(this.leadColumn, this.leadColumn);
} else {
csm.removeSelectionInterval$I$I(this.leadColumn, this.leadColumn);
}table._getCellRect$I$I$Z$java_awt_Rectangle(this.leadRow, this.leadColumn, false, $I$(1).cellRect);
if ($I$(1).cellRect != null ) {
table.scrollRectToVisible$java_awt_Rectangle($I$(1).cellRect);
}} else {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, false);
}}} else if (key == "cancel") {
table.removeEditor$();
} else if (key == "selectAll") {
table.selectAll$();
} else if (key == "clearSelection") {
table.clearSelection$();
} else if (key == "startEditing") {
if (!table.hasFocus$()) {
var cellEditor=table.getCellEditor$();
if (cellEditor != null  && !cellEditor.stopCellEditing$() ) {
return;
}table.requestFocus$();
return;
}table.editCellAt$I$I$java_util_EventObject(this.leadRow, this.leadColumn, e);
var editorComp=table.getEditorComponent$();
if (editorComp != null ) {
editorComp.requestFocus$();
}} else if (key == "addToSelection") {
if (!table.isCellSelected$I$I(this.leadRow, this.leadColumn)) {
var oldAnchorRow=rsm.getAnchorSelectionIndex$();
var oldAnchorColumn=csm.getAnchorSelectionIndex$();
rsm.setValueIsAdjusting$Z(true);
csm.setValueIsAdjusting$Z(true);
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, true, false);
rsm.setAnchorSelectionIndex$I(oldAnchorRow);
csm.setAnchorSelectionIndex$I(oldAnchorColumn);
rsm.setValueIsAdjusting$Z(false);
csm.setValueIsAdjusting$Z(false);
}} else if (key == "toggleAndAnchor") {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, true, false);
} else if (key == "extendTo") {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, true);
} else if (key == "moveSelectionTo") {
table.changeSelection$I$I$Z$Z(this.leadRow, this.leadColumn, false, false);
} else if (key == "focusHeader") {
var th=table.getTableHeader$();
if (th != null ) {
var col=table.getSelectedColumn$();
if (col >= 0) {
var thUI=th.getUI$();
thUI.selectColumn$I(col);
}th.requestFocusInWindow$();
}}});

Clazz.newMeth(C$, 'isEnabled$O',  function (sender) {
var key=this.getName$();
if (Clazz.instanceOf(sender, "javax.swing.JTable") && Boolean.TRUE.equals$O((sender).getClientProperty$O("Table.isFileList")) ) {
if (key == "selectNextColumn" || key == "selectNextColumnCell"  || key == "selectNextColumnExtendSelection"  || key == "selectNextColumnChangeLead"  || key == "selectPreviousColumn"  || key == "selectPreviousColumnCell"  || key == "selectPreviousColumnExtendSelection"  || key == "selectPreviousColumnChangeLead"  || key == "scrollLeftChangeSelection"  || key == "scrollLeftExtendSelection"  || key == "scrollRightChangeSelection"  || key == "scrollRightExtendSelection"  || key == "selectFirstColumn"  || key == "selectFirstColumnExtendSelection"  || key == "selectLastColumn"  || key == "selectLastColumnExtendSelection"  || key == "selectNextRowCell"  || key == "selectPreviousRowCell" ) {
return false;
}}if (key == "cancel" && Clazz.instanceOf(sender, "javax.swing.JTable") ) {
return (sender).isEditing$();
} else if (key == "selectNextRowChangeLead" || key == "selectPreviousRowChangeLead" ) {
return sender != null  && Clazz.instanceOf((sender).getSelectionModel$(), "javax.swing.DefaultListSelectionModel") ;
} else if (key == "selectNextColumnChangeLead" || key == "selectPreviousColumnChangeLead" ) {
return sender != null  && Clazz.instanceOf((sender).getColumnModel$().getSelectionModel$(), "javax.swing.DefaultListSelectionModel") ;
} else if (key == "addToSelection" && Clazz.instanceOf(sender, "javax.swing.JTable") ) {
var table=sender;
var leadRow=$I$(1).getAdjustedLead$javax_swing_JTable$Z(table, true);
var leadCol=$I$(1).getAdjustedLead$javax_swing_JTable$Z(table, false);
return !(table.isEditing$() || table.isCellSelected$I$I(leadRow, leadCol) );
} else if (key == "focusHeader" && Clazz.instanceOf(sender, "javax.swing.JTable") ) {
var table=sender;
return table.getTableHeader$() != null ;
}return true;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableUI, "KeyHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.KeyListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).keyPressed$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).keyReleased$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).keyTyped$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableUI, "FocusHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.FocusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableUI, "MouseInputHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.MouseInputListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).mouseClicked$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).mouseReleased$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).mouseEntered$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).mouseExited$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).mouseMoved$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []).mouseDragged$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.KeyListener', 'java.awt.event.FocusListener', 'javax.swing.event.MouseInputListener', 'java.beans.PropertyChangeListener', 'javax.swing.event.ListSelectionListener', 'java.awt.event.ActionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.timer=null;
},1);

C$.$fields$=[['Z',['dragPressDidSelection','dragStarted','outsidePrefSize'],'I',['pressedRow','pressedCol'],'O',['dispatchComponent','java.awt.Component','pressedEvent','java.awt.event.MouseEvent','timer','javax.swing.Timer']]]

Clazz.newMeth(C$, 'repaintLeadCell',  function () {
var lr=$I$(1).getAdjustedLead$javax_swing_JTable$Z(this.b$['swingjs.plaf.JSTableUI'].table, true);
var lc=$I$(1).getAdjustedLead$javax_swing_JTable$Z(this.b$['swingjs.plaf.JSTableUI'].table, false);
if (lr < 0 || lc < 0 ) {
return;
}this.b$['swingjs.plaf.JSTableUI'].repaintCell$I$I.apply(this.b$['swingjs.plaf.JSTableUI'], [lr, lc]);
}, p$3);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
p$3.repaintLeadCell.apply(this, []);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$3.repaintLeadCell.apply(this, []);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
var keyStroke=$I$(2,"getKeyStroke$I$I",[e.getKeyChar$().$c(), e.getModifiers$()]);
var map=this.b$['swingjs.plaf.JSTableUI'].table.getInputMap$I(0);
if (map != null  && map.get$javax_swing_KeyStroke(keyStroke) != null  ) {
return;
}map=this.b$['swingjs.plaf.JSTableUI'].table.getInputMap$I(1);
if (map != null  && map.get$javax_swing_KeyStroke(keyStroke) != null  ) {
return;
}keyStroke=$I$(2).getKeyStrokeForEvent$java_awt_event_KeyEvent(e);
if (e.getKeyChar$() == "\r") {
return;
}var leadRow=$I$(1).getAdjustedLead$javax_swing_JTable$Z(this.b$['swingjs.plaf.JSTableUI'].table, true);
var leadColumn=$I$(1).getAdjustedLead$javax_swing_JTable$Z(this.b$['swingjs.plaf.JSTableUI'].table, false);
if (leadRow != -1 && leadColumn != -1  && !this.b$['swingjs.plaf.JSTableUI'].table.isEditing$() ) {
if (!this.b$['swingjs.plaf.JSTableUI'].table.editCellAt$I$I(leadRow, leadColumn)) {
return;
}}var editorComp=this.b$['swingjs.plaf.JSTableUI'].table.getEditorComponent$();
if (this.b$['swingjs.plaf.JSTableUI'].table.isEditing$() && editorComp != null  ) {
if (Clazz.instanceOf(editorComp, "javax.swing.JComponent")) {
var component=editorComp;
map=component.getInputMap$I(0);
var binding=(map != null ) ? map.get$javax_swing_KeyStroke(keyStroke) : null;
if (binding == null ) {
map=component.getInputMap$I(1);
binding=(map != null ) ? map.get$javax_swing_KeyStroke(keyStroke) : null;
}if (binding != null ) {
var am=component.getActionMap$();
var action=(am != null ) ? am.get$O(binding) : null;
if (action != null  && $I$(3,"notifyAction$javax_swing_Action$javax_swing_KeyStroke$java_awt_event_KeyEvent$O$I",[action, keyStroke, e, component, e.getModifiers$()]) ) {
e.consume$();
}}}}});

Clazz.newMeth(C$, 'repostEvent$java_awt_event_MouseEvent',  function (e) {
if (this.dispatchComponent == null  || !this.b$['swingjs.plaf.JSTableUI'].table.isEditing$() ) {
return false;
}var row=this.b$['swingjs.plaf.JSTableUI'].table.getEditingRow$();
var column=this.b$['swingjs.plaf.JSTableUI'].table.getEditingColumn$();
if (Clazz.instanceOf(this.dispatchComponent, "javax.swing.JCheckBox")) (this.dispatchComponent).setSelected$Z((this.b$['swingjs.plaf.JSTableUI'].table.getValueAt$I$I(row, column)).booleanValue$());
var e2=$I$(3).convertMouseEvent$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component(this.b$['swingjs.plaf.JSTableUI'].table, e, this.dispatchComponent);
this.dispatchComponent.dispatchEvent$java_awt_AWTEvent(e2);
return true;
}, p$3);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'setDispatchComponent$java_awt_event_MouseEvent',  function (e) {
var editorComponent=this.b$['swingjs.plaf.JSTableUI'].table.getEditorComponent$();
var p=e.getPoint$();
var p2=$I$(3).convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(this.b$['swingjs.plaf.JSTableUI'].table, p, editorComponent);
this.dispatchComponent=$I$(3).getDeepestComponentAt$java_awt_Component$I$I(editorComponent, p2.x, p2.y);
if (this.dispatchComponent == null  && this.b$['swingjs.plaf.JSTableUI'].table.isEditing$() ) {
this.dispatchComponent=this.b$['swingjs.plaf.JSTableUI'].table.getEditorComponent$();
}$I$(4,"setSkipClickCount$java_awt_Component$I",[this.dispatchComponent, e.getClickCount$() - 1]);
}, p$3);

Clazz.newMeth(C$, 'setValueIsAdjusting$Z',  function (flag) {
this.b$['swingjs.plaf.JSTableUI'].table.getSelectionModel$().setValueIsAdjusting$Z(flag);
this.b$['swingjs.plaf.JSTableUI'].table.getColumnModel$().getSelectionModel$().setValueIsAdjusting$Z(flag);
}, p$3);

Clazz.newMeth(C$, 'canStartDrag',  function () {
if (this.pressedRow == -1 || this.pressedCol == -1 ) {
return false;
}if (this.b$['swingjs.plaf.JSTableUI'].isFileList) {
return !this.outsidePrefSize;
}if ((this.b$['swingjs.plaf.JSTableUI'].table.getSelectionModel$().getSelectionMode$() == 0) && (this.b$['swingjs.plaf.JSTableUI'].table.getColumnModel$().getSelectionModel$().getSelectionMode$() == 0) ) {
return true;
}return this.b$['swingjs.plaf.JSTableUI'].table.isCellSelected$I$I(this.pressedRow, this.pressedCol);
}, p$3);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(4).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.b$['swingjs.plaf.JSTableUI'].table)) {
return;
}if (this.b$['swingjs.plaf.JSTableUI'].table.isEditing$()) {
if (!this.b$['swingjs.plaf.JSTableUI'].table.getCellEditor$().stopCellEditing$()) {
var editorComponent=this.b$['swingjs.plaf.JSTableUI'].table.getEditorComponent$();
if (editorComponent != null  && !editorComponent.hasFocus$() ) {
$I$(4).compositeRequestFocus$java_awt_Component(editorComponent);
}return;
}}var p=e.getPoint$();
this.pressedRow=this.b$['swingjs.plaf.JSTableUI'].table.rowAtPoint$java_awt_Point(p);
this.pressedCol=this.b$['swingjs.plaf.JSTableUI'].table.columnAtPoint$java_awt_Point(p);
this.outsidePrefSize=p$2.pointOutsidePrefSize$I$I$java_awt_Point.apply(this.b$['swingjs.plaf.JSTableUI'], [this.pressedRow, this.pressedCol, p]);
if (this.b$['swingjs.plaf.JSTableUI'].table.getDragEnabled$()) {
p$3.mousePressedDND$java_awt_event_MouseEvent.apply(this, [e]);
} else {
$I$(4).adjustFocus$javax_swing_JComponent(this.b$['swingjs.plaf.JSTableUI'].table);
if (!this.b$['swingjs.plaf.JSTableUI'].isFileList) {
p$3.setValueIsAdjusting$Z.apply(this, [true]);
}p$3.adjustSelection$java_awt_event_MouseEvent.apply(this, [e]);
}});

Clazz.newMeth(C$, 'mousePressedDND$java_awt_event_MouseEvent',  function (e) {
this.pressedEvent=e;
var grabFocus=true;
this.dragStarted=false;
if (p$3.canStartDrag.apply(this, [])) {
this.dragPressDidSelection=false;
if (e.isControlDown$() && this.b$['swingjs.plaf.JSTableUI'].isFileList ) {
return;
} else if (!e.isShiftDown$() && this.b$['swingjs.plaf.JSTableUI'].table.isCellSelected$I$I(this.pressedRow, this.pressedCol) ) {
this.b$['swingjs.plaf.JSTableUI'].table.getSelectionModel$().addSelectionInterval$I$I(this.pressedRow, this.pressedRow);
this.b$['swingjs.plaf.JSTableUI'].table.getColumnModel$().getSelectionModel$().addSelectionInterval$I$I(this.pressedCol, this.pressedCol);
return;
}this.dragPressDidSelection=true;
grabFocus=false;
} else if (!this.b$['swingjs.plaf.JSTableUI'].isFileList) {
p$3.setValueIsAdjusting$Z.apply(this, [true]);
}if (grabFocus) {
$I$(4).adjustFocus$javax_swing_JComponent(this.b$['swingjs.plaf.JSTableUI'].table);
}p$3.adjustSelection$java_awt_event_MouseEvent.apply(this, [e]);
}, p$3);

Clazz.newMeth(C$, 'adjustSelection$java_awt_event_MouseEvent',  function (e) {
if (this.outsidePrefSize) {
if (e.getID$() == 501 && (!e.isShiftDown$() || this.b$['swingjs.plaf.JSTableUI'].table.getSelectionModel$().getSelectionMode$() == 0 ) ) {
this.b$['swingjs.plaf.JSTableUI'].table.clearSelection$();
var tce=this.b$['swingjs.plaf.JSTableUI'].table.getCellEditor$();
if (tce != null ) {
tce.stopCellEditing$();
}}return;
}if ((this.pressedCol == -1) || (this.pressedRow == -1) ) {
return;
}var dragEnabled=this.b$['swingjs.plaf.JSTableUI'].table.getDragEnabled$();
if (!dragEnabled && !this.b$['swingjs.plaf.JSTableUI'].isFileList && this.b$['swingjs.plaf.JSTableUI'].table.editCellAt$I$I$java_util_EventObject(this.pressedRow, this.pressedCol, e)  ) {
p$3.setDispatchComponent$java_awt_event_MouseEvent.apply(this, [e]);
p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [e]);
}var editor=this.b$['swingjs.plaf.JSTableUI'].table.getCellEditor$();
if (dragEnabled || editor == null   || editor.shouldSelectCell$java_util_EventObject(e) ) {
this.b$['swingjs.plaf.JSTableUI'].table.changeSelection$I$I$Z$Z(this.pressedRow, this.pressedCol, e.isControlDown$(), e.isShiftDown$());
}}, p$3);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
if (this.timer != null ) {
this.timer.stop$();
this.timer=null;
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ae) {
this.b$['swingjs.plaf.JSTableUI'].table.editCellAt$I$I$java_util_EventObject(this.pressedRow, this.pressedCol, null);
var editorComponent=this.b$['swingjs.plaf.JSTableUI'].table.getEditorComponent$();
if (editorComponent != null  && !editorComponent.hasFocus$() ) {
$I$(4).compositeRequestFocus$java_awt_Component(editorComponent);
}return;
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSTableUI'].dragging=false;
if ($I$(4).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.b$['swingjs.plaf.JSTableUI'].table)) {
return;
}if (this.b$['swingjs.plaf.JSTableUI'].table.getDragEnabled$()) {
p$3.mouseReleasedDND$java_awt_event_MouseEvent.apply(this, [e]);
} else {
}this.pressedEvent=null;
p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [e]);
this.dispatchComponent=null;
p$3.setValueIsAdjusting$Z.apply(this, [false]);
p$2.notifyEntry$Z.apply(this.b$['swingjs.plaf.JSTableUI'], [true]);
});

Clazz.newMeth(C$, 'mouseReleasedDND$java_awt_event_MouseEvent',  function (e) {
var me=e;
if (me != null ) {
$I$(4).adjustFocus$javax_swing_JComponent(this.b$['swingjs.plaf.JSTableUI'].table);
if (!this.dragPressDidSelection) {
p$3.adjustSelection$java_awt_event_MouseEvent.apply(this, [me]);
}}if (!this.dragStarted) {
var p=e.getPoint$();
if (this.pressedEvent != null  && this.b$['swingjs.plaf.JSTableUI'].table.rowAtPoint$java_awt_Point(p) == this.pressedRow  && this.b$['swingjs.plaf.JSTableUI'].table.columnAtPoint$java_awt_Point(p) == this.pressedCol  && this.b$['swingjs.plaf.JSTableUI'].table.editCellAt$I$I$java_util_EventObject(this.pressedRow, this.pressedCol, this.pressedEvent) ) {
p$3.setDispatchComponent$java_awt_event_MouseEvent.apply(this, [this.pressedEvent]);
p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [this.pressedEvent]);
var ce=this.b$['swingjs.plaf.JSTableUI'].table.getCellEditor$();
if (ce != null ) {
ce.shouldSelectCell$java_util_EventObject(this.pressedEvent);
}}}this.b$['swingjs.plaf.JSTableUI'].rebuildTable$.apply(this.b$['swingjs.plaf.JSTableUI'], []);
}, p$3);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if ($I$(4).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.b$['swingjs.plaf.JSTableUI'].table)) {
return;
}this.b$['swingjs.plaf.JSTableUI'].dragging=true;
if (this.b$['swingjs.plaf.JSTableUI'].table.getDragEnabled$()) {
return;
}p$3.repostEvent$java_awt_event_MouseEvent.apply(this, [e]);
if (this.b$['swingjs.plaf.JSTableUI'].isFileList || this.b$['swingjs.plaf.JSTableUI'].table.isEditing$() ) {
return;
}var p=e.getPoint$();
var row=this.b$['swingjs.plaf.JSTableUI'].table.rowAtPoint$java_awt_Point(p);
var column=this.b$['swingjs.plaf.JSTableUI'].table.columnAtPoint$java_awt_Point(p);
if ((column == -1) || (row == -1) ) {
return;
}this.b$['swingjs.plaf.JSTableUI'].table.changeSelection$I$I$Z$Z(row, column, e.isControlDown$(), true);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
switch (event.getPropertyName$()) {
case "tableCellEditor":
this.b$['swingjs.plaf.JSTableUI'].prepareDOMEditor$Z$I$I.apply(this.b$['swingjs.plaf.JSTableUI'], [event.getNewValue$() != null , this.pressedRow, this.pressedCol]);
break;
case "componentOrientation":
var inputMap=this.b$['swingjs.plaf.JSTableUI'].getInputMap$I.apply(this.b$['swingjs.plaf.JSTableUI'], [1]);
$I$(3).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.b$['swingjs.plaf.JSTableUI'].table, 1, inputMap);
var header=this.b$['swingjs.plaf.JSTableUI'].table.getTableHeader$();
if (header != null ) {
header.setComponentOrientation$java_awt_ComponentOrientation(event.getNewValue$());
}break;
case "model":
this.b$['swingjs.plaf.JSTableUI'].newModel$.apply(this.b$['swingjs.plaf.JSTableUI'], []);
break;
case "dropLocation":
this.b$['swingjs.plaf.JSTableUI'].rebuildTable$.apply(this.b$['swingjs.plaf.JSTableUI'], []);
break;
case "Table.isFileList":
this.b$['swingjs.plaf.JSTableUI'].isFileList=Boolean.TRUE.equals$O(this.b$['swingjs.plaf.JSTableUI'].table.getClientProperty$O("Table.isFileList"));
this.b$['swingjs.plaf.JSTableUI'].table.revalidate$();
this.b$['swingjs.plaf.JSTableUI'].table.秘repaint$();
if (this.b$['swingjs.plaf.JSTableUI'].isFileList) {
this.b$['swingjs.plaf.JSTableUI'].table.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []));
} else {
this.b$['swingjs.plaf.JSTableUI'].table.getSelectionModel$().removeListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []));
this.timer=null;
}break;
case "selectionModel":
if (this.b$['swingjs.plaf.JSTableUI'].isFileList) {
var old=event.getOldValue$();
old.removeListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []));
this.b$['swingjs.plaf.JSTableUI'].table.getSelectionModel$().addListSelectionListener$javax_swing_event_ListSelectionListener(p$2.getHandler.apply(this.b$['swingjs.plaf.JSTableUI'], []));
}break;
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTableUI, "TableTransferHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.TransferHandler', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createTransferable$javax_swing_JComponent',  function (c) {
if (Clazz.instanceOf(c, "javax.swing.JTable")) {
var table=c;
var rows;
var cols;
if (!table.getRowSelectionAllowed$() && !table.getColumnSelectionAllowed$() ) {
return null;
}if (!table.getRowSelectionAllowed$()) {
var rowCount=table.getRowCount$();
rows=Clazz.array(Integer.TYPE, [rowCount]);
for (var counter=0; counter < rowCount; counter++) {
rows[counter]=counter;
}
} else {
rows=table.getSelectedRows$();
}if (!table.getColumnSelectionAllowed$()) {
var colCount=table.getColumnCount$();
cols=Clazz.array(Integer.TYPE, [colCount]);
for (var counter=0; counter < colCount; counter++) {
cols[counter]=counter;
}
} else {
cols=table.getSelectedColumns$();
}if (rows == null  || cols == null   || rows.length == 0  || cols.length == 0 ) {
return null;
}var plainBuf=Clazz.new_($I$(5,1));
var htmlBuf=Clazz.new_($I$(5,1));
htmlBuf.append$S("<html>\n<body>\n<table>\n");
for (var row=0; row < rows.length; row++) {
htmlBuf.append$S("<tr>\n");
for (var col=0; col < cols.length; col++) {
var obj=table.getValueAt$I$I(rows[row], cols[col]);
var val=((obj == null ) ? "" : obj.toString());
plainBuf.append$S(val + "\t");
htmlBuf.append$S("  <td>" + val + "</td>\n" );
}
plainBuf.deleteCharAt$I(plainBuf.length$() - 1).append$S("\n");
htmlBuf.append$S("</tr>\n");
}
plainBuf.deleteCharAt$I(plainBuf.length$() - 1);
htmlBuf.append$S("</table>\n</body>\n</html>");
return Clazz.new_([plainBuf.toString(), htmlBuf.toString()],$I$(6,1).c$$S$S);
}return null;
});

Clazz.newMeth(C$, 'getSourceActions$javax_swing_JComponent',  function (c) {
return 1;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

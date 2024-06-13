(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},I$=[[0,'swingjs.plaf.JSListUI','sun.swing.SwingUtilities2','java.awt.Rectangle','java.awt.Point',['javax.swing.text.Position','.Bias'],'javax.swing.KeyStroke','javax.swing.SwingUtilities','swingjs.JSUtil','swingjs.plaf.JSComponentUI',['swingjs.plaf.JSListUI','.Actions'],'swingjs.api.js.DOMNode','javax.swing.UIManager','javax.swing.DefaultListCellRenderer',['java.awt.Component','.BaselineResizeBehavior'],'java.awt.Dimension','swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup','javax.swing.LookAndFeel','javax.swing.CellRendererPane',['swingjs.plaf.JSListUI','.Handler']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSListUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI');
C$.$classes$=[['MouseInputHandler',1],['FocusHandler',1],['ListSelectionHandler',1],['ListDataHandler',1],['PropertyChangeHandler',1],['Actions',10],['Handler',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.needFilling=true;
this.list=null;
this.cellHeights=null;
this.$cellHeight=-1;
this.$cellWidth=-1;
this.updateLayoutStateNeeded=1;
this.timeFactor=1000;
this.isFileList=false;
this.isLeftToRight=true;
},1);

C$.$fields$=[['Z',['needFilling','isFileList','isLeftToRight','awtScrollPaneNeedsLayout'],'I',['$cellHeight','$cellWidth','updateLayoutStateNeeded','listHeight','listWidth','layoutOrientation','columnCount','preferredHeight','rowsPerColumn'],'J',['timeFactor'],'O',['me','swingjs.plaf.JSListUI','list','javax.swing.JList','rendererPane','javax.swing.CellRendererPane','focusListener','java.awt.event.FocusListener','mouseInputListener','javax.swing.event.MouseInputListener','listSelectionListener','javax.swing.event.ListSelectionListener','listDataListener','javax.swing.event.ListDataListener','propertyChangeListener','java.beans.PropertyChangeListener','handler','swingjs.plaf.JSListUI.Handler','cellHeights','int[]']]
,['O',['BASELINE_COMPONENT_KEY','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.me=this;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
this.list=this.jc;
if (this.domNode == null ) {
this.domNode=this.focusNode=this.enableNode=$I$(9,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
this.innerNode=$I$(9,"newDOMObject$S$S$SA",["div", this.id + "_inner", Clazz.array(String, -1, [])]);
this.addFocusHandler$();
this.domNode.appendChild(this.innerNode);
}this.setBackgroundImpl$java_awt_Color(this.jc.getBackground$());
if (this.needFilling) {
this.fillDOM$();
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode',  function (node) {
C$.superclazz.prototype.undisposeUI$swingjs_api_js_DOMNode.apply(this, [node]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
});

Clazz.newMeth(C$, 'fillDOM$',  function () {
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectPreviousColumn"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectPreviousColumnExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectPreviousColumnChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectNextColumn"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectNextColumnExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectNextColumnChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectPreviousRow"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectPreviousRowExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectPreviousRowChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectNextRow"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectNextRowExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectNextRowChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectFirstRow"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectFirstRowExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectFirstRowChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectLastRow"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectLastRowExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectLastRowChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["scrollUp"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["scrollUpExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["scrollUpChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["scrollDown"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["scrollDownExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["scrollDownChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["selectAll"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["clearSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["addToSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["toggleAndAnchor"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["extendTo"]));
map.put$javax_swing_Action(Clazz.new_($I$(10,1).c$$S,["moveSelectionTo"]));
}, 1);

Clazz.newMeth(C$, 'paintCell$java_awt_Graphics$I$java_awt_Rectangle$javax_swing_ListCellRenderer$javax_swing_ListModel$javax_swing_ListSelectionModel$I',  function (g, index, rowBounds, cellRenderer, dataModel, selModel, leadIndex) {
var value=dataModel.getElementAt$I(index);
var cellHasFocus=this.list.hasFocus$() && (index == leadIndex) ;
var isSelected=selModel.isSelectedIndex$I(index);
var rendererComponent=cellRenderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.list, value, index, isSelected, cellHasFocus);
{
if (!rendererComponent.getUI$) { alert( "swingjs.JListUI -- Developer! All list cell renderers in SwingJS must be Swing components" ); }
}
var cx=rowBounds.x;
var cy=rowBounds.y;
var cw=rowBounds.width;
var ch=rowBounds.height;
if (this.isFileList) {
var w=Math.min(cw, rendererComponent.getPreferredSize$().width + 4);
if (!this.isLeftToRight) {
cx+=(cw - w);
}cw=w;
}var r=rendererComponent;
this.rendererPane.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, r, this.list, cx, cy, cw, ch, true);
p$3.updateItemHTML$javax_swing_JComponent$I$I$I$I$I.apply(this, [r, index, cx, cy, cw, this.getRowHeight$I(index)]);
});

Clazz.newMeth(C$, 'updateItemHTML$javax_swing_JComponent$I$I$I$I$I',  function (c, index, left, top, width, height) {
var node=null;
if (c != null ) {
c.setSize$I$I(width, height);
node=c.秘getUI$().getListNode$();
}var myid=this.id + "_" + index ;
var jnode=this.$$O(("#" + myid));
if ((jnode)[0] == null ) {
if (node != null ) {
var div=$I$(9,"newDOMObject$S$S$SA",["div", myid, Clazz.array(String, -1, [])]);
$I$(11).setTopLeftAbsolute(div, top, left);
div.appendChild(node);
this.innerNode.appendChild(div);
}} else {
jnode.empty();
if (node != null ) jnode.append(node);
}$I$(11).setSize(node, width, height);
}, p$3);

Clazz.newMeth(C$, 'removeItemHTML$I$I',  function (i0, i1) {
var n=this.list.getModel$().getSize$();
for (var i=i0; i <= i1; i++) p$3.updateItemHTML$javax_swing_JComponent$I$I$I$I$I.apply(this, [null, n++, 0, 0, 0, 0]);

});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
if (this.isTainted) this.updateDOMNode$();
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
p$3.paintImpl$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
});

Clazz.newMeth(C$, 'paintImpl$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
this.needFilling=false;
switch (this.layoutOrientation) {
case 1:
if (this.list.getHeight$() != this.listHeight) {
this.updateLayoutStateNeeded|=256;
this.redrawList$();
}break;
case 2:
if (this.list.getWidth$() != this.listWidth) {
this.updateLayoutStateNeeded|=512;
this.redrawList$();
}break;
default:
break;
}
this.maybeUpdateLayoutState$();
var renderer=this.list.getCellRenderer$();
var dataModel=this.list.getModel$();
var selModel=this.list.getSelectionModel$();
var size;
if ((renderer == null ) || (size=dataModel.getSize$()) == 0 ) {
return;
}var paintBounds=g.getClipBounds$();
var startColumn;
var endColumn;
if (c.getComponentOrientation$().isLeftToRight$()) {
startColumn=p$3.convertLocationToColumn$I$I.apply(this, [paintBounds.x, paintBounds.y]);
endColumn=p$3.convertLocationToColumn$I$I.apply(this, [paintBounds.x + paintBounds.width, paintBounds.y]);
} else {
startColumn=p$3.convertLocationToColumn$I$I.apply(this, [paintBounds.x + paintBounds.width, paintBounds.y]);
endColumn=p$3.convertLocationToColumn$I$I.apply(this, [paintBounds.x, paintBounds.y]);
}var maxY=paintBounds.y + paintBounds.height;
var leadIndex=C$.adjustIndex$I$javax_swing_JList(this.list.getLeadSelectionIndex$(), this.list);
var rowIncrement=(this.layoutOrientation == 2) ? this.columnCount : 1;
for (var colCounter=startColumn; colCounter <= endColumn; colCounter++) {
var row=p$3.convertLocationToRowInColumn$I$I.apply(this, [paintBounds.y, colCounter]);
var rowCount=this.getRowCount$I(colCounter);
var index=this.getModelIndex$I$I(colCounter, row);
var rowBounds=this.getCellBounds$javax_swing_JList$I$I(this.list, index, index);
if (rowBounds == null ) {
return;
}while (row < rowCount && rowBounds.y < maxY  && index < size ){
rowBounds.height=p$3.getHeight$I$I.apply(this, [colCounter, row]);
this.paintCell$java_awt_Graphics$I$java_awt_Rectangle$javax_swing_ListCellRenderer$javax_swing_ListModel$javax_swing_ListSelectionModel$I(g, index, rowBounds, renderer, dataModel, selModel, leadIndex);
rowBounds.y+=rowBounds.height;
index+=rowIncrement;
++row;
}
}
this.rendererPane.removeAll$();
if (this.awtScrollPaneNeedsLayout) {
this.awtScrollPaneNeedsLayout=false;
this.scrollPaneUI.jc.layout$();
}}, p$3);

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var rowHeight=this.list.getFixedCellHeight$();
var lafDefaults=$I$(12).getLookAndFeelDefaults$();
var baselineComponent=lafDefaults.get$O(C$.BASELINE_COMPONENT_KEY);
if (baselineComponent == null ) {
var lcr=$I$(12).get$O("List.cellRenderer");
if (lcr == null ) {
lcr=Clazz.new_($I$(13,1));
}baselineComponent=lcr.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.list, "a", -1, false, false);
lafDefaults.put$O$O(C$.BASELINE_COMPONENT_KEY, baselineComponent);
}baselineComponent.setFont$java_awt_Font(this.getFont$());
if (rowHeight == -1) {
rowHeight=baselineComponent.getPreferredSize$().height;
}return baselineComponent.getBaseline$I$I(2147483647, rowHeight) + this.list.getInsets$().top;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
return $I$(14).CONSTANT_ASCENT;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
this.maybeUpdateLayoutState$();
return p$3.getListDimensions.apply(this, []);
});

Clazz.newMeth(C$, 'getListDimensions',  function () {
var lastRow=this.list.getModel$().getSize$() - 1;
if (lastRow < 0) {
return Clazz.new_($I$(15,1).c$$I$I,[0, 0]);
}var insets=this.list.getInsets$();
var width=this.$cellWidth * this.columnCount + insets.left + insets.right;
var height;
if (this.layoutOrientation != 0) {
height=this.preferredHeight;
} else {
var bounds=p$3.getCellBounds1$javax_swing_JList$I.apply(this, [this.list, lastRow]);
if (bounds != null ) {
height=bounds.y + bounds.height + insets.bottom ;
} else {
height=0;
}}return Clazz.new_($I$(15,1).c$$I$I,[width, height]);
}, p$3);

Clazz.newMeth(C$, 'selectPreviousIndex$',  function () {
var s=this.list.getSelectedIndex$();
if (s > 0) {
s-=1;
this.list.setSelectedIndex$I(s);
this.list.ensureIndexIsVisible$I(s);
}});

Clazz.newMeth(C$, 'selectNextIndex$',  function () {
var s=this.list.getSelectedIndex$();
if ((s + 1) < this.list.getModel$().getSize$()) {
s+=1;
this.list.setSelectedIndex$I(s);
this.list.ensureIndexIsVisible$I(s);
}});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var inputMap=this.getInputMap$I(0);
$I$(7).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.list, 0, inputMap);
$I$(16,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.list, Clazz.getClass(C$), "List.actionMap"]);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 0) {
var keyMap=$I$(17).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.list, this, "List.focusInputMap");
var rtlKeyMap;
if (this.isLeftToRight || ((rtlKeyMap=$I$(17).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.list, this, "List.focusInputMap.RightToLeft")) == null ) ) {
return keyMap;
} else {
rtlKeyMap.setParent$javax_swing_InputMap(keyMap);
return rtlKeyMap;
}}return null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(7).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.list, null);
$I$(7).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.list, 0, null);
});

Clazz.newMeth(C$, 'installListeners$',  function () {
if (Clazz.instanceOf(this.list.getDropTarget$(), "javax.swing.plaf.UIResource")) {
this.list.setDropTarget$java_awt_dnd_DropTarget(null);
}this.focusListener=this.createFocusListener$();
this.mouseInputListener=this.createMouseInputListener$();
this.propertyChangeListener=this.createPropertyChangeListener$();
this.listSelectionListener=this.createListSelectionListener$();
this.listDataListener=this.createListDataListener$();
this.list.addFocusListener$java_awt_event_FocusListener(this.focusListener);
this.list.addMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.list.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.list.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.list.addKeyListener$java_awt_event_KeyListener(this.getHandler$());
var model=this.list.getModel$();
if (model != null ) {
model.addListDataListener$javax_swing_event_ListDataListener(this.listDataListener);
}var selectionModel=this.list.getSelectionModel$();
if (selectionModel != null ) {
selectionModel.addListSelectionListener$javax_swing_event_ListSelectionListener(this.listSelectionListener);
}});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
this.list.removeFocusListener$java_awt_event_FocusListener(this.focusListener);
this.list.removeMouseListener$java_awt_event_MouseListener(this.mouseInputListener);
this.list.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseInputListener);
this.list.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.list.removeKeyListener$java_awt_event_KeyListener(this.getHandler$());
var model=this.list.getModel$();
if (model != null ) {
model.removeListDataListener$javax_swing_event_ListDataListener(this.listDataListener);
}var selectionModel=this.list.getSelectionModel$();
if (selectionModel != null ) {
selectionModel.removeListSelectionListener$javax_swing_event_ListSelectionListener(this.listSelectionListener);
}this.focusListener=null;
this.mouseInputListener=null;
this.listSelectionListener=null;
this.listDataListener=null;
this.propertyChangeListener=null;
this.handler=null;
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
this.list.setLayout$java_awt_LayoutManager(null);
$I$(18).installBorder$javax_swing_JComponent$S(this.list, "List.border");
$I$(18).installColorsAndFont$javax_swing_JComponent$S$S$S(this.list, "List.background", "List.foreground", "List.font");
$I$(18).installProperty$javax_swing_JComponent$S$O(this.list, "opaque", Boolean.TRUE);
if (this.list.getCellRenderer$() == null ) {
this.list.setCellRenderer$javax_swing_ListCellRenderer(($I$(12).get$O("List.cellRenderer")));
}var sbg=this.list.getSelectionBackground$();
if (sbg == null  || Clazz.instanceOf(sbg, "javax.swing.plaf.UIResource") ) {
this.list.setSelectionBackground$java_awt_Color($I$(12).getColor$O("List.selectionBackground"));
}var sfg=this.list.getSelectionForeground$();
if (sfg == null  || Clazz.instanceOf(sfg, "javax.swing.plaf.UIResource") ) {
this.list.setSelectionForeground$java_awt_Color($I$(12).getColor$O("List.selectionForeground"));
}var l=$I$(12).get$O("List.timeFactor");
this.timeFactor=(l != null ) ? l.longValue$() : 1000;
this.updateIsFileList$();
});

Clazz.newMeth(C$, 'updateIsFileList$',  function () {
var b=Boolean.TRUE.equals$O(this.list.getClientProperty$O("List.isFileList"));
if (b != this.isFileList ) {
this.isFileList=b;
var oldFont=this.getFont$();
if (oldFont == null  || Clazz.instanceOf(oldFont, "javax.swing.plaf.UIResource") ) {
var newFont=$I$(12).getFont$O(b ? "FileChooser.listFont" : "List.font");
if (newFont != null  && newFont !== oldFont  ) {
this.list.setFont$java_awt_Font(newFont);
}}}});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
$I$(18).uninstallBorder$javax_swing_JComponent(this.list);
if (Clazz.instanceOf(this.getFont$(), "javax.swing.plaf.UIResource")) {
this.list.setFont$java_awt_Font(null);
}if (Clazz.instanceOf(this.list.getForeground$(), "javax.swing.plaf.UIResource")) {
this.list.setForeground$java_awt_Color(null);
}if (Clazz.instanceOf(this.list.getBackground$(), "javax.swing.plaf.UIResource")) {
this.list.setBackground$java_awt_Color(null);
}if (Clazz.instanceOf(this.list.getSelectionBackground$(), "javax.swing.plaf.UIResource")) {
this.list.setSelectionBackground$java_awt_Color(null);
}if (Clazz.instanceOf(this.list.getSelectionForeground$(), "javax.swing.plaf.UIResource")) {
this.list.setSelectionForeground$java_awt_Color(null);
}if (Clazz.instanceOf(this.list.getCellRenderer$(), "javax.swing.plaf.UIResource")) {
this.list.setCellRenderer$javax_swing_ListCellRenderer(null);
}});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.list=this.jc;
this.layoutOrientation=this.list.getLayoutOrientation$();
this.rendererPane=Clazz.new_($I$(19,1));
this.list.add$java_awt_Component(this.rendererPane);
this.columnCount=1;
this.updateLayoutStateNeeded=1;
this.isLeftToRight=this.list.getComponentOrientation$().isLeftToRight$();
this.installDefaults$();
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallListeners$();
this.uninstallDefaults$();
this.uninstallKeyboardActions$();
this.$cellWidth=this.$cellHeight=-1;
this.cellHeights=null;
this.listWidth=this.listHeight=-1;
this.list.remove$java_awt_Component(this.rendererPane);
this.rendererPane=null;
this.list=null;
});

Clazz.newMeth(C$, 'locationToIndex$javax_swing_JList$java_awt_Point',  function (list, location) {
this.maybeUpdateLayoutState$();
return p$3.convertLocationToModel$I$I.apply(this, [location.x, location.y]);
});

Clazz.newMeth(C$, 'indexToLocation$javax_swing_JList$I',  function (list, index) {
this.maybeUpdateLayoutState$();
var rect=this.getCellBounds$javax_swing_JList$I$I(list, index, index);
if (rect != null ) {
return Clazz.new_($I$(4,1).c$$I$I,[rect.x, rect.y]);
}return null;
});

Clazz.newMeth(C$, 'getCellBounds$javax_swing_JList$I$I',  function (list, index1, index2) {
this.maybeUpdateLayoutState$();
var minIndex=Math.min(index1, index2);
var maxIndex=Math.max(index1, index2);
if (minIndex >= list.getModel$().getSize$()) {
return null;
}var minBounds=p$3.getCellBounds1$javax_swing_JList$I.apply(this, [list, minIndex]);
if (minBounds == null ) {
return null;
}if (minIndex == maxIndex) {
return minBounds;
}var maxBounds=p$3.getCellBounds1$javax_swing_JList$I.apply(this, [list, maxIndex]);
if (maxBounds != null ) {
if (this.layoutOrientation == 2) {
var minRow=this.convertModelToRow$I(minIndex);
var maxRow=this.convertModelToRow$I(maxIndex);
if (minRow != maxRow) {
minBounds.x=0;
minBounds.width=list.getWidth$();
}} else if (minBounds.x != maxBounds.x) {
minBounds.y=0;
minBounds.height=list.getHeight$();
}minBounds.add$java_awt_Rectangle(maxBounds);
}return minBounds;
});

Clazz.newMeth(C$, 'getCellBounds1$javax_swing_JList$I',  function (list, index) {
this.maybeUpdateLayoutState$();
var row=this.convertModelToRow$I(index);
var column=this.convertModelToColumn$I(index);
if (row == -1 || column == -1 ) {
return null;
}var insets=list.getInsets$();
var x;
var w=this.$cellWidth;
var y=insets.top;
var h;
switch (this.layoutOrientation) {
case 1:
case 2:
if (this.isLeftToRight) {
x=insets.left + column * this.$cellWidth;
} else {
x=list.getWidth$() - insets.right - (column + 1) * this.$cellWidth ;
}y+=this.$cellHeight * row;
h=this.$cellHeight;
break;
default:
x=insets.left;
if (this.cellHeights == null ) {
y+=(this.$cellHeight * row);
} else if (row >= this.cellHeights.length) {
y=0;
} else {
for (var i=0; i < row; i++) {
y+=this.cellHeights[i];
}
}w=list.getWidth$() - (insets.left + insets.right);
h=this.getRowHeight$I(index);
break;
}
return Clazz.new_($I$(3,1).c$$I$I$I$I,[x, y, w, h]);
}, p$3);

Clazz.newMeth(C$, 'getRowHeight$I',  function (row) {
return p$3.getHeight$I$I.apply(this, [0, row]);
});

Clazz.newMeth(C$, 'convertYToRow$I',  function (y0) {
return p$3.convertLocationToRow$I$I$Z.apply(this, [0, y0, false]);
});

Clazz.newMeth(C$, 'convertRowToY$I',  function (row) {
if (row >= this.getRowCount$I(0) || row < 0 ) {
return -1;
}var bounds=this.getCellBounds$javax_swing_JList$I$I(this.list, row, row);
return bounds.y;
});

Clazz.newMeth(C$, 'getHeight$I$I',  function (column, row) {
if (column < 0 || column > this.columnCount  || row < 0 ) {
return -1;
}if (this.layoutOrientation != 0) {
return this.$cellHeight;
}if (row >= this.list.getModel$().getSize$()) {
return -1;
}return (this.cellHeights == null ) ? this.$cellHeight : ((row < this.cellHeights.length) ? this.cellHeights[row] : -1);
}, p$3);

Clazz.newMeth(C$, 'convertLocationToRow$I$I$Z',  function (x, y0, closest) {
var size=this.list.getModel$().getSize$();
if (size <= 0) {
return -1;
}var insets=this.list.getInsets$();
if (this.cellHeights == null ) {
var row=(this.$cellHeight == 0) ? 0 : (((y0 - insets.top)/this.$cellHeight|0));
if (closest) {
if (row < 0) {
row=0;
} else if (row >= size) {
row=size - 1;
}}return row;
} else if (size > this.cellHeights.length) {
return -1;
} else {
var y=insets.top;
var row=0;
if (closest && y0 < y ) {
return 0;
}var i;
for (i=0; i < size; i++) {
if ((y0 >= y) && (y0 < y + this.cellHeights[i]) ) {
return row;
}y+=this.cellHeights[i];
row+=1;
}
return i - 1;
}}, p$3);

Clazz.newMeth(C$, 'convertLocationToRowInColumn$I$I',  function (y, column) {
var x=0;
if (this.layoutOrientation != 0) {
if (this.isLeftToRight) {
x=column * this.$cellWidth;
} else {
x=this.list.getWidth$() - (column + 1) * this.$cellWidth - this.list.getInsets$().right;
}}return p$3.convertLocationToRow$I$I$Z.apply(this, [x, y, true]);
}, p$3);

Clazz.newMeth(C$, 'convertLocationToModel$I$I',  function (x, y) {
var row=p$3.convertLocationToRow$I$I$Z.apply(this, [x, y, true]);
var column=p$3.convertLocationToColumn$I$I.apply(this, [x, y]);
if (row >= 0 && column >= 0 ) {
return this.getModelIndex$I$I(column, row);
}return -1;
}, p$3);

Clazz.newMeth(C$, 'getRowCount$I',  function (column) {
if (column < 0 || column >= this.columnCount ) {
return -1;
}if (this.layoutOrientation == 0 || (column == 0 && this.columnCount == 1 ) ) {
return this.list.getModel$().getSize$();
}if (column >= this.columnCount) {
return -1;
}if (this.layoutOrientation == 1) {
if (column < (this.columnCount - 1)) {
return this.rowsPerColumn;
}return this.list.getModel$().getSize$() - (this.columnCount - 1) * this.rowsPerColumn;
}var diff=this.columnCount - (this.columnCount * this.rowsPerColumn - this.list.getModel$().getSize$());
if (column >= diff) {
return Math.max(0, this.rowsPerColumn - 1);
}return this.rowsPerColumn;
});

Clazz.newMeth(C$, 'getModelIndex$I$I',  function (column, row) {
switch (this.layoutOrientation) {
case 1:
return Math.min(this.list.getModel$().getSize$() - 1, this.rowsPerColumn * column + Math.min(row, this.rowsPerColumn - 1));
case 2:
return Math.min(this.list.getModel$().getSize$() - 1, row * this.columnCount + column);
default:
return row;
}
});

Clazz.newMeth(C$, 'convertLocationToColumn$I$I',  function (x, y) {
if (this.$cellWidth > 0) {
if (this.layoutOrientation == 0) {
return 0;
}var insets=this.list.getInsets$();
var col;
if (this.isLeftToRight) {
col=((x - insets.left)/this.$cellWidth|0);
} else {
col=((this.list.getWidth$() - x - insets.right - 1 )/this.$cellWidth|0);
}if (col < 0) {
return 0;
} else if (col >= this.columnCount) {
return this.columnCount - 1;
}return col;
}return 0;
}, p$3);

Clazz.newMeth(C$, 'convertModelToRow$I',  function (index) {
var size=this.list.getModel$().getSize$();
if ((index < 0) || (index >= size) ) {
return -1;
}if (this.layoutOrientation != 0 && this.columnCount > 1  && this.rowsPerColumn > 0 ) {
if (this.layoutOrientation == 1) {
return index % this.rowsPerColumn;
}return (index/this.columnCount|0);
}return index;
});

Clazz.newMeth(C$, 'convertModelToColumn$I',  function (index) {
var size=this.list.getModel$().getSize$();
if ((index < 0) || (index >= size) ) {
return -1;
}if (this.layoutOrientation != 0 && this.rowsPerColumn > 0  && this.columnCount > 1 ) {
if (this.layoutOrientation == 1) {
return (index/this.rowsPerColumn|0);
}return index % this.columnCount;
}return 0;
});

Clazz.newMeth(C$, 'maybeUpdateLayoutState$',  function () {
if (this.updateLayoutStateNeeded != 0) {
if (this.isAWT && this.scrollPaneUI != null  ) this.awtScrollPaneNeedsLayout=true;
this.updateLayoutStateNeeded=0;
this.updateLayoutState$();
}});

Clazz.newMeth(C$, 'updateLayoutState$',  function () {
var fixedCellHeight=this.list.getFixedCellHeight$();
var fixedCellWidth=this.list.getFixedCellWidth$();
this.$cellWidth=(fixedCellWidth != -1) ? fixedCellWidth : -1;
if (fixedCellHeight != -1) {
this.$cellHeight=fixedCellHeight;
this.cellHeights=null;
} else {
this.$cellHeight=-1;
this.cellHeights=Clazz.array(Integer.TYPE, [this.list.getModel$().getSize$()]);
}if ((fixedCellWidth == -1) || (fixedCellHeight == -1) ) {
var dataModel=this.list.getModel$();
var dataModelSize=dataModel.getSize$();
var renderer=this.list.getCellRenderer$();
if (renderer != null ) {
for (var index=0; index < dataModelSize; index++) {
var value=dataModel.getElementAt$I(index);
var c=renderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.list, value, index, false, false);
this.rendererPane.add$java_awt_Component(c);
c.setSize$java_awt_Dimension(c.getPreferredSize$());
(c).秘getUI$().updateDOMNode$();
(c).getInsets$();
var cellSize=c.getPreferredSize$();
if (fixedCellWidth == -1) {
this.$cellWidth=Math.max(cellSize.width, this.$cellWidth);
}if (fixedCellHeight == -1) {
this.cellHeights[index]=cellSize.height;
}}
} else {
if (this.$cellWidth == -1) {
this.$cellWidth=0;
}if (this.cellHeights == null ) {
this.cellHeights=Clazz.array(Integer.TYPE, [dataModelSize]);
}for (var index=0; index < dataModelSize; index++) {
this.cellHeights[index]=0;
}
}}this.columnCount=1;
p$3.getSwingJSListActualSize$I$I.apply(this, [fixedCellWidth, fixedCellHeight]);
if (this.layoutOrientation != 0) {
p$3.updateHorizontalLayoutState$I$I.apply(this, [fixedCellWidth, fixedCellHeight]);
this.cellHeights=null;
}});

Clazz.newMeth(C$, 'updateHorizontalLayoutState$I$I',  function (fixedCellWidth, fixedCellHeight) {
p$3.getWrappedListDimensions$I$I$I.apply(this, [this.list.getVisibleRowCount$(), fixedCellWidth, fixedCellHeight]);
}, p$3);

Clazz.newMeth(C$, 'getSwingJSListActualSize$I$I',  function (fixedCellWidth, fixedCellHeight) {
if (this.layoutOrientation != 0) {
p$3.getWrappedListDimensions$I$I$I.apply(this, [this.list.getModel$().getSize$(), fixedCellWidth, fixedCellHeight]);
}var d=p$3.getListDimensions.apply(this, []);
this.jsActualWidth=d.width;
this.jsActualHeight=d.height;
}, p$3);

Clazz.newMeth(C$, 'getWrappedListDimensions$I$I$I',  function (visRows, fixedCellWidth, fixedCellHeight) {
var dataModelSize=this.list.getModel$().getSize$();
var insets=this.list.getInsets$();
this.listHeight=this.list.getHeight$();
this.listWidth=this.list.getWidth$();
if (dataModelSize == 0) {
this.rowsPerColumn=this.columnCount=0;
this.preferredHeight=insets.top + insets.bottom;
return;
}var height;
if (fixedCellHeight != -1) {
height=fixedCellHeight;
} else {
var maxHeight=0;
if (this.cellHeights.length > 0) {
maxHeight=this.cellHeights[this.cellHeights.length - 1];
for (var counter=this.cellHeights.length - 2; counter >= 0; counter--) {
maxHeight=Math.max(maxHeight, this.cellHeights[counter]);
}
}height=this.$cellHeight=maxHeight;
}this.rowsPerColumn=dataModelSize;
if (visRows > 0) {
this.rowsPerColumn=visRows;
this.columnCount=Math.max(1, (dataModelSize/this.rowsPerColumn|0));
if (dataModelSize > 0 && dataModelSize > this.rowsPerColumn  && dataModelSize % this.rowsPerColumn != 0 ) {
++this.columnCount;
}if (this.layoutOrientation == 2) {
this.rowsPerColumn=((dataModelSize/this.columnCount|0));
if (dataModelSize % this.columnCount > 0) {
++this.rowsPerColumn;
}}} else if (this.layoutOrientation == 1 && height != 0 ) {
this.rowsPerColumn=Math.max(1, ((this.listHeight - insets.top - insets.bottom )/height|0));
this.columnCount=Math.max(1, (dataModelSize/this.rowsPerColumn|0));
if (dataModelSize > 0 && dataModelSize > this.rowsPerColumn  && dataModelSize % this.rowsPerColumn != 0 ) {
++this.columnCount;
}} else if (this.layoutOrientation == 2 && this.$cellWidth > 0  && this.listWidth > 0 ) {
this.columnCount=Math.max(1, ((this.listWidth - insets.left - insets.right )/this.$cellWidth|0));
this.rowsPerColumn=(dataModelSize/this.columnCount|0);
if (dataModelSize % this.columnCount > 0) {
++this.rowsPerColumn;
}}this.preferredHeight=this.rowsPerColumn * this.$cellHeight + insets.top + insets.bottom;
}, p$3);

Clazz.newMeth(C$, 'getHandler$',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(20,1).c$$javax_swing_JComponent,[this, null, this.jc]);
}return this.handler;
});

Clazz.newMeth(C$, 'createMouseInputListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'createFocusListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'createListSelectionListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'redrawList$',  function () {
this.needFilling=true;
this.setTainted$();
this.list.revalidate$();
this.list.秘repaint$();
});

Clazz.newMeth(C$, 'createListDataListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'adjustIndex$I$javax_swing_JList',  function (index, list) {
return index < list.getModel$().getSize$() ? index : -1;
}, 1);

Clazz.newMeth(C$, 'makeVisible$I',  function (index) {
});

Clazz.newMeth(C$, 'getSelectedIndexes$',  function () {
return Clazz.array(Integer.TYPE, -1, []);
});

Clazz.newMeth(C$, 'add$S$I',  function (item, index) {
});

Clazz.newMeth(C$, 'delItems$I$I',  function (start, end) {
});

Clazz.newMeth(C$, 'removeAll$',  function () {
});

Clazz.newMeth(C$, 'select$I',  function (index) {
});

Clazz.newMeth(C$, 'deselect$I',  function (index) {
});

Clazz.newMeth(C$, 'setMultipleMode$Z',  function (m) {
});

Clazz.newMeth(C$, 'getPreferredSize$I',  function (rows) {
var h=4;
var w=0;
for (var i=0; i < rows; i++) h+=this.getRowHeight$I(i);

var m=this.list.getModel$();
for (var i=m.getSize$(); --i >= 0; ) {
var o=m.getElementAt$I(i);
var d=0;
if (Clazz.instanceOf(o, "java.awt.Component")) {
d=(o).getPreferredSize$().width;
} else if (o != null ) {
d=this.list.getFontMetrics$java_awt_Font(this.getFont$()).stringWidth$S(o.toString());
}if (d > w) w=d;
}
return Clazz.new_($I$(15,1).c$$I$I,[w + 24, h]);
});

Clazz.newMeth(C$, 'getMinimumSize$I',  function (rows) {
var h=4;
for (var i=0; i < rows; i++) h+=this.getRowHeight$I(i);

return Clazz.new_([this.getFont$().getSize$() * 10, h],$I$(15,1).c$$I$I);
});

C$.$static$=function(){C$.$static$=0;
C$.BASELINE_COMPONENT_KEY= Clazz.new_();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSListUI, "MouseInputHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.MouseInputListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).mouseClicked$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).mouseEntered$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).mouseExited$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).mouseDragged$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).mouseMoved$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).mouseReleased$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSListUI, "FocusHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.FocusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'repaintCellFocus$',  function () {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).repaintCellFocus$();
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSListUI, "ListSelectionHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ListSelectionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).valueChanged$javax_swing_event_ListSelectionEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSListUI, "ListDataHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ListDataListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'intervalAdded$javax_swing_event_ListDataEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).intervalAdded$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$, 'intervalRemoved$javax_swing_event_ListDataEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).intervalRemoved$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$, 'contentsChanged$javax_swing_event_ListDataEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).contentsChanged$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSListUI, "PropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].getHandler$.apply(this.b$['swingjs.plaf.JSListUI'], []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSListUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var name=this.getName$();
var list=e.getSource$();
var ui=list.getUI$();
var index;
switch (name) {
case "selectPreviousColumn":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, p$1.getNextColumnIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, -1]), -1]);
break;
case "selectPreviousColumnExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, p$1.getNextColumnIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, -1]), -1]);
break;
case "selectPreviousColumnChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, p$1.getNextColumnIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, -1]), -1]);
break;
case "selectNextColumn":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, p$1.getNextColumnIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, 1]), 1]);
break;
case "selectNextColumnExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, p$1.getNextColumnIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, 1]), 1]);
break;
case "selectNextColumnChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, p$1.getNextColumnIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, 1]), 1]);
break;
case "selectPreviousRow":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, p$1.getNextIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, -1]), -1]);
break;
case "selectPreviousRowExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, p$1.getNextIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, -1]), -1]);
break;
case "selectPreviousRowChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, p$1.getNextIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, -1]), -1]);
break;
case "selectNextRow":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, p$1.getNextIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, 1]), 1]);
break;
case "selectNextRowExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, p$1.getNextIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, 1]), 1]);
break;
case "selectNextRowChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, p$1.getNextIndex$javax_swing_JList$swingjs_plaf_JSListUI$I.apply(this, [list, ui, 1]), 1]);
break;
case "selectFirstRow":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, 0, -1]);
break;
case "selectFirstRowExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, 0, -1]);
break;
case "selectFirstRowChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, 0, -1]);
break;
case "selectLastRow":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, list.getModel$().getSize$() - 1, 1]);
break;
case "selectLastRowExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, list.getModel$().getSize$() - 1, 1]);
break;
case "selectLastRowChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, list.getModel$().getSize$() - 1, 1]);
break;
case "scrollUp":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, p$1.getNextPageIndex$javax_swing_JList$I.apply(this, [list, -1]), -1]);
break;
case "scrollUpExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, p$1.getNextPageIndex$javax_swing_JList$I.apply(this, [list, -1]), -1]);
break;
case "scrollUpChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, p$1.getNextPageIndex$javax_swing_JList$I.apply(this, [list, -1]), -1]);
break;
case "scrollDown":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, p$1.getNextPageIndex$javax_swing_JList$I.apply(this, [list, 1]), 1]);
break;
case "scrollDownExtendSelection":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, p$1.getNextPageIndex$javax_swing_JList$I.apply(this, [list, 1]), 1]);
break;
case "scrollDownChangeLead":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 0, p$1.getNextPageIndex$javax_swing_JList$I.apply(this, [list, 1]), 1]);
break;
case "selectAll":
p$1.selectAll$javax_swing_JList.apply(this, [list]);
break;
case "clearSelection":
p$1.clearSelection$javax_swing_JList.apply(this, [list]);
break;
case "addToSelection":
index=$I$(1,"adjustIndex$I$javax_swing_JList",[list.getSelectionModel$().getLeadSelectionIndex$(), list]);
if (!list.isSelectedIndex$I(index)) {
var oldAnchor=list.getSelectionModel$().getAnchorSelectionIndex$();
list.setValueIsAdjusting$Z(true);
list.addSelectionInterval$I$I(index, index);
list.getSelectionModel$().setAnchorSelectionIndex$I(oldAnchor);
list.setValueIsAdjusting$Z(false);
}break;
case "toggleAndAnchor":
index=$I$(1,"adjustIndex$I$javax_swing_JList",[list.getSelectionModel$().getLeadSelectionIndex$(), list]);
if (list.isSelectedIndex$I(index)) {
list.removeSelectionInterval$I$I(index, index);
} else {
list.addSelectionInterval$I$I(index, index);
}break;
case "extendTo":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 2, $I$(1,"adjustIndex$I$javax_swing_JList",[list.getSelectionModel$().getLeadSelectionIndex$(), list]), 0]);
break;
case "moveSelectionTo":
p$1.changeSelection$javax_swing_JList$I$I$I.apply(this, [list, 1, $I$(1,"adjustIndex$I$javax_swing_JList",[list.getSelectionModel$().getLeadSelectionIndex$(), list]), 0]);
}
});

Clazz.newMeth(C$, 'isEnabled$O',  function (c) {
var name=this.getName$();
if (name === "selectPreviousColumnChangeLead"  || name === "selectNextColumnChangeLead"   || name === "selectPreviousRowChangeLead"   || name === "selectNextRowChangeLead"   || name === "selectFirstRowChangeLead"   || name === "selectLastRowChangeLead"   || name === "scrollUpChangeLead"   || name === "scrollDownChangeLead"  ) {
return c != null  && Clazz.instanceOf((c).getSelectionModel$(), "javax.swing.DefaultListSelectionModel") ;
}return true;
});

Clazz.newMeth(C$, 'clearSelection$javax_swing_JList',  function (list) {
list.clearSelection$();
}, p$1);

Clazz.newMeth(C$, 'selectAll$javax_swing_JList',  function (list) {
var size=list.getModel$().getSize$();
if (size > 0) {
var lsm=list.getSelectionModel$();
var lead=$I$(1,"adjustIndex$I$javax_swing_JList",[lsm.getLeadSelectionIndex$(), list]);
if (lsm.getSelectionMode$() == 0) {
if (lead == -1) {
var min=$I$(1,"adjustIndex$I$javax_swing_JList",[list.getMinSelectionIndex$(), list]);
lead=(min == -1 ? 0 : min);
}list.setSelectionInterval$I$I(lead, lead);
list.ensureIndexIsVisible$I(lead);
} else {
list.setValueIsAdjusting$Z(true);
var anchor=$I$(1,"adjustIndex$I$javax_swing_JList",[lsm.getAnchorSelectionIndex$(), list]);
list.setSelectionInterval$I$I(0, size - 1);
$I$(2).setLeadAnchorWithoutSelection$javax_swing_ListSelectionModel$I$I(lsm, anchor, lead);
list.setValueIsAdjusting$Z(false);
}}}, p$1);

Clazz.newMeth(C$, 'getNextPageIndex$javax_swing_JList$I',  function (list, direction) {
if (list.getModel$().getSize$() == 0) {
return -1;
}var index=-1;
var visRect=list.getVisibleRect$();
var lsm=list.getSelectionModel$();
var lead=$I$(1,"adjustIndex$I$javax_swing_JList",[lsm.getLeadSelectionIndex$(), list]);
var leadRect=(lead == -1) ? Clazz.new_($I$(3,1)) : list.getCellBounds$I$I(lead, lead);
if (list.getLayoutOrientation$() == 1 && list.getVisibleRowCount$() <= 0 ) {
if (!list.getComponentOrientation$().isLeftToRight$()) {
direction=-direction;
}if (direction < 0) {
visRect.x=leadRect.x + leadRect.width - visRect.width;
var p=Clazz.new_($I$(4,1).c$$I$I,[visRect.x - 1, leadRect.y]);
index=list.locationToIndex$java_awt_Point(p);
var cellBounds=list.getCellBounds$I$I(index, index);
if (visRect.intersects$java_awt_Rectangle(cellBounds)) {
p.x=cellBounds.x - 1;
index=list.locationToIndex$java_awt_Point(p);
cellBounds=list.getCellBounds$I$I(index, index);
}if (cellBounds.y != leadRect.y) {
p.x=cellBounds.x + cellBounds.width;
index=list.locationToIndex$java_awt_Point(p);
}} else {
visRect.x=leadRect.x;
var p=Clazz.new_($I$(4,1).c$$I$I,[visRect.x + visRect.width, leadRect.y]);
index=list.locationToIndex$java_awt_Point(p);
var cellBounds=list.getCellBounds$I$I(index, index);
if (visRect.intersects$java_awt_Rectangle(cellBounds)) {
p.x=cellBounds.x + cellBounds.width;
index=list.locationToIndex$java_awt_Point(p);
cellBounds=list.getCellBounds$I$I(index, index);
}if (cellBounds.y != leadRect.y) {
p.x=cellBounds.x - 1;
index=list.locationToIndex$java_awt_Point(p);
}}} else {
if (direction < 0) {
var p=Clazz.new_($I$(4,1).c$$I$I,[leadRect.x, visRect.y]);
index=list.locationToIndex$java_awt_Point(p);
if (lead <= index) {
visRect.y=leadRect.y + leadRect.height - visRect.height;
p.y=visRect.y;
index=list.locationToIndex$java_awt_Point(p);
var cellBounds=list.getCellBounds$I$I(index, index);
if (cellBounds.y < visRect.y) {
p.y=cellBounds.y + cellBounds.height;
index=list.locationToIndex$java_awt_Point(p);
cellBounds=list.getCellBounds$I$I(index, index);
}if (cellBounds.y >= leadRect.y) {
p.y=leadRect.y - 1;
index=list.locationToIndex$java_awt_Point(p);
}}} else {
var p=Clazz.new_($I$(4,1).c$$I$I,[leadRect.x, visRect.y + visRect.height - 1]);
index=list.locationToIndex$java_awt_Point(p);
var cellBounds=list.getCellBounds$I$I(index, index);
if (cellBounds.y + cellBounds.height > visRect.y + visRect.height) {
p.y=cellBounds.y - 1;
index=list.locationToIndex$java_awt_Point(p);
cellBounds=list.getCellBounds$I$I(index, index);
index=Math.max(index, lead);
}if (lead >= index) {
visRect.y=leadRect.y;
p.y=visRect.y + visRect.height - 1;
index=list.locationToIndex$java_awt_Point(p);
cellBounds=list.getCellBounds$I$I(index, index);
if (cellBounds.y + cellBounds.height > visRect.y + visRect.height) {
p.y=cellBounds.y - 1;
index=list.locationToIndex$java_awt_Point(p);
cellBounds=list.getCellBounds$I$I(index, index);
}if (cellBounds.y <= leadRect.y) {
p.y=leadRect.y + leadRect.height;
index=list.locationToIndex$java_awt_Point(p);
}}}}return index;
}, p$1);

Clazz.newMeth(C$, 'changeSelection$javax_swing_JList$I$I$I',  function (list, type, index, direction) {
if (index >= 0 && index < list.getModel$().getSize$() ) {
var lsm=list.getSelectionModel$();
if (type == 0 && list.getSelectionMode$() != 2 ) {
type=1;
}p$1.adjustScrollPositionIfNecessary$javax_swing_JList$I$I.apply(this, [list, index, direction]);
if (type == 2) {
var anchor=$I$(1,"adjustIndex$I$javax_swing_JList",[lsm.getAnchorSelectionIndex$(), list]);
if (anchor == -1) {
anchor=0;
}list.setSelectionInterval$I$I(anchor, index);
} else if (type == 1) {
list.setSelectedIndex$I(index);
} else {
(lsm).moveLeadSelectionIndex$I(index);
}}}, p$1);

Clazz.newMeth(C$, 'adjustScrollPositionIfNecessary$javax_swing_JList$I$I',  function (list, index, direction) {
if (direction == 0) {
return;
}var cellBounds=list.getCellBounds$I$I(index, index);
var visRect=list.getVisibleRect$();
if (cellBounds != null  && !visRect.contains$java_awt_Rectangle(cellBounds) ) {
if (list.getLayoutOrientation$() == 1 && list.getVisibleRowCount$() <= 0 ) {
if (list.getComponentOrientation$().isLeftToRight$()) {
if (direction > 0) {
var x=Math.max(0, cellBounds.x + cellBounds.width - visRect.width);
var startIndex=list.locationToIndex$java_awt_Point(Clazz.new_($I$(4,1).c$$I$I,[x, cellBounds.y]));
var startRect=list.getCellBounds$I$I(startIndex, startIndex);
if (startRect.x < x && startRect.x < cellBounds.x ) {
startRect.x+=startRect.width;
startIndex=list.locationToIndex$java_awt_Point(startRect.getLocation$());
startRect=list.getCellBounds$I$I(startIndex, startIndex);
}cellBounds=startRect;
}cellBounds.width=visRect.width;
} else {
if (direction > 0) {
var x=cellBounds.x + visRect.width;
var rightIndex=list.locationToIndex$java_awt_Point(Clazz.new_($I$(4,1).c$$I$I,[x, cellBounds.y]));
var rightRect=list.getCellBounds$I$I(rightIndex, rightIndex);
if (rightRect.x + rightRect.width > x && rightRect.x > cellBounds.x ) {
rightRect.width=0;
}cellBounds.x=Math.max(0, rightRect.x + rightRect.width - visRect.width);
cellBounds.width=visRect.width;
} else {
cellBounds.x+=Math.max(0, cellBounds.width - visRect.width);
cellBounds.width=Math.min(cellBounds.width, visRect.width);
}}} else {
if (direction > 0) {
var y=Math.max(0, cellBounds.y + cellBounds.height - visRect.height);
var startIndex=list.locationToIndex$java_awt_Point(Clazz.new_($I$(4,1).c$$I$I,[cellBounds.x, y]));
var startRect=list.getCellBounds$I$I(startIndex, startIndex);
if (startRect.y < y && startRect.y < cellBounds.y ) {
startRect.y+=startRect.height;
startIndex=list.locationToIndex$java_awt_Point(startRect.getLocation$());
startRect=list.getCellBounds$I$I(startIndex, startIndex);
}cellBounds=startRect;
cellBounds.height=visRect.height;
} else {
cellBounds.height=Math.min(cellBounds.height, visRect.height);
}}list.scrollRectToVisible$java_awt_Rectangle(cellBounds);
}}, p$1);

Clazz.newMeth(C$, 'getNextColumnIndex$javax_swing_JList$swingjs_plaf_JSListUI$I',  function (list, ui, amount) {
if (list.getLayoutOrientation$() != 0) {
var index=$I$(1,"adjustIndex$I$javax_swing_JList",[list.getLeadSelectionIndex$(), list]);
var size=list.getModel$().getSize$();
if (index == -1) {
return 0;
} else if (size == 1) {
return 0;
} else if (ui == null  || ui.columnCount <= 1 ) {
return -1;
}var column=ui.convertModelToColumn$I(index);
var row=ui.convertModelToRow$I(index);
column+=amount;
if (column >= ui.columnCount || column < 0 ) {
return -1;
}var maxRowCount=ui.getRowCount$I(column);
if (row >= maxRowCount) {
return -1;
}return ui.getModelIndex$I$I(column, row);
}return -1;
}, p$1);

Clazz.newMeth(C$, 'getNextIndex$javax_swing_JList$swingjs_plaf_JSListUI$I',  function (list, ui, amount) {
var index=$I$(1,"adjustIndex$I$javax_swing_JList",[list.getLeadSelectionIndex$(), list]);
var size=list.getModel$().getSize$();
if (index == -1) {
if (size > 0) {
if (amount > 0) {
index=0;
} else {
index=size - 1;
}}} else if (size == 1) {
index=0;
} else if (list.getLayoutOrientation$() == 2) {
if (ui != null ) {
index+=ui.columnCount * amount;
}} else {
index+=amount;
}return index;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSListUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.FocusListener', 'java.awt.event.KeyListener', 'javax.swing.event.ListDataListener', 'javax.swing.event.ListSelectionListener', 'javax.swing.event.MouseInputListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.prefix="";
this.typedString="";
this.lastTime=0;
},1);

C$.$fields$=[['Z',['dragPressDidSelection'],'J',['lastTime'],'S',['prefix','typedString']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent',  function (jc) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
var src=e.getSource$();
var model=src.getModel$();
if (model.getSize$() == 0 || e.isAltDown$()  || e.isControlDown$()  || e.isMetaDown$()  || p$2.isNavigationKey$java_awt_event_KeyEvent.apply(this, [e]) ) {
return;
}var startingFromSelection=true;
var c=e.getKeyChar$();
var time=e.getWhen$();
var startIndex=$I$(1,"adjustIndex$I$javax_swing_JList",[src.getLeadSelectionIndex$(), this.b$['swingjs.plaf.JSListUI'].list]);
if (Long.$lt(Long.$sub(time,this.lastTime),this.b$['swingjs.plaf.JSListUI'].timeFactor )) {
this.typedString+=c;
if ((this.prefix.length$() == 1) && (c == this.prefix.charAt$I(0)) ) {
++startIndex;
} else {
this.prefix=this.typedString;
}} else {
++startIndex;
this.typedString="" + c;
this.prefix=this.typedString;
}this.lastTime=time;
if (startIndex < 0 || startIndex >= model.getSize$() ) {
startingFromSelection=false;
startIndex=0;
}var index=src.getNextMatch$S$I$javax_swing_text_Position_Bias(this.prefix, startIndex, $I$(5).Forward);
if (index >= 0) {
src.setSelectedIndex$I(index);
src.ensureIndexIsVisible$I(index);
} else if (startingFromSelection) {
index=src.getNextMatch$S$I$javax_swing_text_Position_Bias(this.prefix, 0, $I$(5).Forward);
if (index >= 0) {
src.setSelectedIndex$I(index);
src.ensureIndexIsVisible$I(index);
}}});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (p$2.isNavigationKey$java_awt_event_KeyEvent.apply(this, [e])) {
this.prefix="";
this.typedString="";
this.lastTime=0;
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'isNavigationKey$java_awt_event_KeyEvent',  function (event) {
var inputMap=this.b$['swingjs.plaf.JSListUI'].list.getInputMap$I(1);
var key=$I$(6).getKeyStrokeForEvent$java_awt_event_KeyEvent(event);
if (inputMap != null  && inputMap.get$javax_swing_KeyStroke(key) != null  ) {
return true;
}return false;
}, p$2);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var propertyName=e.getPropertyName$();
switch (propertyName) {
case "model":
var oldModel=e.getOldValue$();
var newModel=e.getNewValue$();
if (oldModel != null ) {
oldModel.removeListDataListener$javax_swing_event_ListDataListener(this.b$['swingjs.plaf.JSListUI'].listDataListener);
}if (newModel != null ) {
newModel.addListDataListener$javax_swing_event_ListDataListener(this.b$['swingjs.plaf.JSListUI'].listDataListener);
}this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=1;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "selectionModel":
var oldModel2=e.getOldValue$();
var newModel2=e.getNewValue$();
if (oldModel2 != null ) {
oldModel2.removeListSelectionListener$javax_swing_event_ListSelectionListener(this.b$['swingjs.plaf.JSListUI'].listSelectionListener);
}if (newModel2 != null ) {
newModel2.addListSelectionListener$javax_swing_event_ListSelectionListener(this.b$['swingjs.plaf.JSListUI'].listSelectionListener);
}this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=1;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "cellRenderer":
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=64;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "font":
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=4;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "prototypeCellValue":
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=32;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "fixedCellHeight":
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=16;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "fixedCellWidth":
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=8;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "selectionForeground":
this.b$['swingjs.plaf.JSListUI'].list.秘repaint$();
break;
case "selectionBackground":
this.b$['swingjs.plaf.JSListUI'].list.秘repaint$();
break;
case "layoutOrientation":
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=128;
this.b$['swingjs.plaf.JSListUI'].layoutOrientation=this.b$['swingjs.plaf.JSListUI'].list.getLayoutOrientation$();
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "visibleRowCount":
if (this.b$['swingjs.plaf.JSListUI'].layoutOrientation != 0) {
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=128;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
}break;
case "componentOrientation":
this.b$['swingjs.plaf.JSListUI'].isLeftToRight=this.b$['swingjs.plaf.JSListUI'].list.getComponentOrientation$().isLeftToRight$();
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded|=1024;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
var inputMap=this.b$['swingjs.plaf.JSListUI'].getInputMap$I.apply(this.b$['swingjs.plaf.JSListUI'], [0]);
$I$(7).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.b$['swingjs.plaf.JSListUI'].list, 0, inputMap);
break;
case "List.isFileList":
this.b$['swingjs.plaf.JSListUI'].updateIsFileList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
break;
case "dropLocation":
$I$(8).notImplemented$S("dropLocation");
break;
}
});

Clazz.newMeth(C$, 'intervalAdded$javax_swing_event_ListDataEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded=1;
var minIndex=Math.min(e.getIndex0$(), e.getIndex1$());
var maxIndex=Math.max(e.getIndex0$(), e.getIndex1$());
var sm=this.b$['swingjs.plaf.JSListUI'].list.getSelectionModel$();
if (sm != null ) {
sm.insertIndexInterval$I$I$Z(minIndex, maxIndex - minIndex + 1, true);
}this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
});

Clazz.newMeth(C$, 'intervalRemoved$javax_swing_event_ListDataEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded=1;
var sm=this.b$['swingjs.plaf.JSListUI'].list.getSelectionModel$();
if (sm != null ) {
var minIndex=Math.min(e.getIndex0$(), e.getIndex1$());
var maxIndex=Math.max(e.getIndex0$(), e.getIndex1$());
sm.removeIndexInterval$I$I(minIndex, maxIndex);
this.b$['swingjs.plaf.JSListUI'].removeItemHTML$I$I.apply(this.b$['swingjs.plaf.JSListUI'], [minIndex, maxIndex]);
}this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
});

Clazz.newMeth(C$, 'contentsChanged$javax_swing_event_ListDataEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].updateLayoutStateNeeded=1;
this.b$['swingjs.plaf.JSListUI'].redrawList$.apply(this.b$['swingjs.plaf.JSListUI'], []);
});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].maybeUpdateLayoutState$.apply(this.b$['swingjs.plaf.JSListUI'], []);
var size=this.b$['swingjs.plaf.JSListUI'].list.getModel$().getSize$();
var firstIndex=Math.min(size - 1, Math.max(e.getFirstIndex$(), 0));
var lastIndex=Math.min(size - 1, Math.max(e.getLastIndex$(), 0));
var bounds=this.b$['swingjs.plaf.JSListUI'].getCellBounds$javax_swing_JList$I$I.apply(this.b$['swingjs.plaf.JSListUI'], [this.b$['swingjs.plaf.JSListUI'].list, firstIndex, lastIndex]);
this.b$['swingjs.plaf.JSListUI'].list.ensureIndexIsVisible$I(firstIndex);
if (lastIndex != firstIndex) this.b$['swingjs.plaf.JSListUI'].list.ensureIndexIsVisible$I(lastIndex);
if (bounds != null ) {
this.b$['swingjs.plaf.JSListUI'].list.repaint$I$I$I$I(bounds.x, bounds.y, bounds.width, bounds.height);
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].list.秘processUIEvent$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].list.秘processUIEvent$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].list.秘processUIEvent$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (this.b$['swingjs.plaf.JSListUI'].list.秘processUIEvent$java_awt_event_MouseEvent(e)) {
return;
}var dragEnabled=this.b$['swingjs.plaf.JSListUI'].list.getDragEnabled$();
var grabFocus=true;
if (dragEnabled) {
var row=$I$(2,"loc2IndexFileList$javax_swing_JList$java_awt_Point",[this.b$['swingjs.plaf.JSListUI'].list, e.getPoint$()]);
if (row != -1) {
this.dragPressDidSelection=false;
if (e.isControlDown$()) {
return;
} else if (!e.isShiftDown$() && this.b$['swingjs.plaf.JSListUI'].list.isSelectedIndex$I(row) ) {
this.b$['swingjs.plaf.JSListUI'].list.addSelectionInterval$I$I(row, row);
return;
}grabFocus=false;
this.dragPressDidSelection=true;
}} else {
this.b$['swingjs.plaf.JSListUI'].list.setValueIsAdjusting$Z(true);
}if (grabFocus) {
$I$(2).adjustFocus$javax_swing_JComponent(this.b$['swingjs.plaf.JSListUI'].list);
}p$2.adjustSelection$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'adjustSelection$java_awt_event_MouseEvent',  function (e) {
var row=$I$(2,"loc2IndexFileList$javax_swing_JList$java_awt_Point",[this.b$['swingjs.plaf.JSListUI'].list, e.getPoint$()]);
if (row < 0) {
if (this.b$['swingjs.plaf.JSListUI'].isFileList && e.getID$() == 501  && (!e.isShiftDown$() || this.b$['swingjs.plaf.JSListUI'].list.getSelectionMode$() == 0 ) ) {
this.b$['swingjs.plaf.JSListUI'].list.clearSelection$();
}} else {
var anchorIndex=$I$(1,"adjustIndex$I$javax_swing_JList",[this.b$['swingjs.plaf.JSListUI'].list.getAnchorSelectionIndex$(), this.b$['swingjs.plaf.JSListUI'].list]);
var anchorSelected;
if (anchorIndex == -1) {
anchorIndex=0;
anchorSelected=false;
} else {
anchorSelected=this.b$['swingjs.plaf.JSListUI'].list.isSelectedIndex$I(anchorIndex);
}if (e.isControlDown$()) {
if (e.isShiftDown$()) {
if (anchorSelected) {
this.b$['swingjs.plaf.JSListUI'].list.addSelectionInterval$I$I(anchorIndex, row);
} else {
this.b$['swingjs.plaf.JSListUI'].list.removeSelectionInterval$I$I(anchorIndex, row);
if (this.b$['swingjs.plaf.JSListUI'].isFileList) {
this.b$['swingjs.plaf.JSListUI'].list.addSelectionInterval$I$I(row, row);
this.b$['swingjs.plaf.JSListUI'].list.getSelectionModel$().setAnchorSelectionIndex$I(anchorIndex);
}}} else if (this.b$['swingjs.plaf.JSListUI'].list.isSelectedIndex$I(row)) {
this.b$['swingjs.plaf.JSListUI'].list.removeSelectionInterval$I$I(row, row);
} else {
this.b$['swingjs.plaf.JSListUI'].list.addSelectionInterval$I$I(row, row);
}} else if (e.isShiftDown$()) {
this.b$['swingjs.plaf.JSListUI'].list.setSelectionInterval$I$I(anchorIndex, row);
} else {
this.b$['swingjs.plaf.JSListUI'].list.setSelectionInterval$I$I(row, row);
}}}, p$2);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if (this.b$['swingjs.plaf.JSListUI'].list.秘processUIEvent$java_awt_event_MouseEvent(e)) {
return;
}if (e.isShiftDown$() || e.isControlDown$() ) {
return;
}var row=this.b$['swingjs.plaf.JSListUI'].locationToIndex$javax_swing_JList$java_awt_Point.apply(this.b$['swingjs.plaf.JSListUI'], [this.b$['swingjs.plaf.JSListUI'].list, e.getPoint$()]);
if (row != -1) {
if (this.b$['swingjs.plaf.JSListUI'].isFileList) {
return;
}var cellBounds=this.b$['swingjs.plaf.JSListUI'].getCellBounds$javax_swing_JList$I$I.apply(this.b$['swingjs.plaf.JSListUI'], [this.b$['swingjs.plaf.JSListUI'].list, row, row]);
if (cellBounds != null ) {
this.b$['swingjs.plaf.JSListUI'].list.scrollRectToVisible$java_awt_Rectangle(cellBounds);
this.b$['swingjs.plaf.JSListUI'].list.setSelectionInterval$I$I(row, row);
}}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSListUI'].list.秘processUIEvent$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if (this.b$['swingjs.plaf.JSListUI'].list.秘processUIEvent$java_awt_event_MouseEvent(e)) {
return;
}if (this.b$['swingjs.plaf.JSListUI'].list.getDragEnabled$()) {
} else {
this.b$['swingjs.plaf.JSListUI'].list.setValueIsAdjusting$Z(false);
}});

Clazz.newMeth(C$, 'repaintCellFocus$',  function () {
var leadIndex=$I$(1,"adjustIndex$I$javax_swing_JList",[this.b$['swingjs.plaf.JSListUI'].list.getLeadSelectionIndex$(), this.b$['swingjs.plaf.JSListUI'].list]);
if (leadIndex != -1) {
var r=this.b$['swingjs.plaf.JSListUI'].getCellBounds$javax_swing_JList$I$I.apply(this.b$['swingjs.plaf.JSListUI'], [this.b$['swingjs.plaf.JSListUI'].list, leadIndex, leadIndex]);
if (r != null ) {
this.b$['swingjs.plaf.JSListUI'].list.repaint$I$I$I$I(r.x, r.y, r.width, r.height);
}}});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.repaintCellFocus$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.repaintCellFocus$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

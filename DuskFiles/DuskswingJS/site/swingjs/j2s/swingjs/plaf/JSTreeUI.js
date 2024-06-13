(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},I$=[[0,'java.awt.Color','javax.swing.Timer','java.awt.Rectangle','swingjs.plaf.JSTreeUI','sun.swing.SwingUtilities2','javax.swing.SwingUtilities','javax.swing.plaf.basic.BasicGraphicsUtils',['javax.swing.text.Position','.Bias'],'javax.swing.KeyStroke','StringBuilder',['swingjs.plaf.JSTreeUI','.Actions'],'javax.swing.TransferHandler','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.util.Hashtable','java.awt.Dimension','javax.swing.UIManager','javax.swing.LookAndFeel','javax.swing.JLabel','java.awt.Font',['swingjs.plaf.JSTreeUI','.TextIcon'],'swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup',['swingjs.plaf.JSTreeUI','.NodeDimensionsHandler'],['swingjs.plaf.JSTreeUI','.Handler'],['swingjs.plaf.JSTreeUI','.ComponentHandler'],'javax.swing.tree.FixedHeightLayoutCache','javax.swing.tree.VariableHeightLayoutCache','javax.swing.CellRendererPane','javax.swing.tree.DefaultTreeCellEditor','javax.swing.tree.DefaultTreeCellRenderer',['java.awt.Component','.BaselineResizeBehavior'],'InternalError','swingjs.api.js.JQueryObject','javax.swing.tree.TreePath','java.awt.Point',['swingjs.plaf.JSTreeUI','.MouseInputHandler']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTreeUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.$classes$=[['TextIcon',0],['TreeExpansionHandler',1],['ComponentHandler',1],['TreeModelHandler',1],['TreeSelectionHandler',1],['CellEditorHandler',1],['KeyHandler',1],['FocusHandler',1],['NodeDimensionsHandler',1],['MouseHandler',1],['PropertyChangeHandler',1],['SelectionModelPropertyChangeHandler',1],['TreeTraverseAction',1],['TreePageAction',1],['TreeIncrementAction',1],['TreeHomeAction',1],['TreeToggleAction',1],['TreeCancelEditingAction',1],['MouseInputHandler',1],['Handler',2],['Actions',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paintLines=true;
this.timeFactor=1000;
},1);

C$.$fields$=[['Z',['createdRenderer','createdCellEditor','stopEditingInCompleteEditing','validCachedPreferredSize','largeModel','editorHasDifferentSize','ignoreLAChange','leftToRight','paintLines','lineTypeDashed'],'I',['leftChildIndent','rightChildIndent','totalChildIndent','lastSelectedRow','depthOffset','editingRow','leadRow'],'J',['timeFactor'],'S',['selectionBackground'],'O',['collapsedIcon','javax.swing.Icon','+expandedIcon','hashColor','java.awt.Color','preferredMinSize','java.awt.Dimension','tree','javax.swing.JTree','currentCellRenderer','javax.swing.tree.TreeCellRenderer','cellEditor','javax.swing.tree.TreeCellEditor','rendererPane','javax.swing.CellRendererPane','$preferredSize','java.awt.Dimension','treeState','javax.swing.tree.AbstractLayoutCache','drawingCache','java.util.Hashtable','nodeDimensions','javax.swing.tree.AbstractLayoutCache.NodeDimensions','treeModel','javax.swing.tree.TreeModel','treeSelectionModel','javax.swing.tree.TreeSelectionModel','editingComponent','java.awt.Component','editingPath','javax.swing.tree.TreePath','propertyChangeListener','java.beans.PropertyChangeListener','+selectionModelPropertyChangeListener','mouseListener','java.awt.event.MouseListener','focusListener','java.awt.event.FocusListener','keyListener','java.awt.event.KeyListener','componentListener','java.awt.event.ComponentListener','cellEditorListener','javax.swing.event.CellEditorListener','treeSelectionListener','javax.swing.event.TreeSelectionListener','treeModelListener','javax.swing.event.TreeModelListener','treeExpansionListener','javax.swing.event.TreeExpansionListener','handler','swingjs.plaf.JSTreeUI.Handler','releaseEvent','java.awt.event.MouseEvent']]
,['O',['BASELINE_COMPONENT_KEY','StringBuilder','SHARED_ACTION','swingjs.plaf.JSTreeUI.Actions']]]

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectPrevious"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectPreviousChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectPreviousExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectNext"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectNextChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectNextExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectChild"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectChildChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectParent"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectParentChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollUpChangeSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollUpChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollUpExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollDownChangeSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollDownExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollDownChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectFirst"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectFirstChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectFirstExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectLast"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectLastChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectLastExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["toggle"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["cancel"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["startEditing"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["selectAll"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["clearSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollLeft"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollLeftExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollRightExtendSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollRightChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["scrollLeftChangeLead"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["expand"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["collapse"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["moveSelectionToParent"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["addToSelection"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["toggleAndAnchor"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["extendTo"]));
map.put$javax_swing_Action(Clazz.new_($I$(11,1).c$$S,["moveSelectionTo"]));
map.put$javax_swing_Action($I$(12).getCutAction$());
map.put$javax_swing_Action($I$(12).getCopyAction$());
map.put$javax_swing_Action($I$(12).getPasteAction$());
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.domNode=this.focusNode=this.enableNode=$I$(13,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
$I$(14).setStyle(this.domNode, "outline", "none");
this.addFocusHandler$();
}this.setBackgroundImpl$java_awt_Color(this.jc.getBackground$());
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getHashColor$',  function () {
return this.hashColor;
});

Clazz.newMeth(C$, 'setHashColor$java_awt_Color',  function (color) {
this.hashColor=color;
});

Clazz.newMeth(C$, 'setLeftChildIndent$I',  function (newAmount) {
this.leftChildIndent=newAmount;
this.totalChildIndent=this.leftChildIndent + this.rightChildIndent;
if (this.treeState != null ) this.treeState.invalidateSizes$();
this.updateSize$();
});

Clazz.newMeth(C$, 'getLeftChildIndent$',  function () {
return this.leftChildIndent;
});

Clazz.newMeth(C$, 'setRightChildIndent$I',  function (newAmount) {
this.rightChildIndent=newAmount;
this.totalChildIndent=this.leftChildIndent + this.rightChildIndent;
if (this.treeState != null ) this.treeState.invalidateSizes$();
this.updateSize$();
});

Clazz.newMeth(C$, 'getRightChildIndent$',  function () {
return this.rightChildIndent;
});

Clazz.newMeth(C$, 'setExpandedIcon$javax_swing_Icon',  function (newG) {
this.expandedIcon=newG;
});

Clazz.newMeth(C$, 'getExpandedIcon$',  function () {
return this.expandedIcon;
});

Clazz.newMeth(C$, 'setCollapsedIcon$javax_swing_Icon',  function (newG) {
this.collapsedIcon=newG;
});

Clazz.newMeth(C$, 'getCollapsedIcon$',  function () {
return this.collapsedIcon;
});

Clazz.newMeth(C$, 'setLargeModel$Z',  function (largeModel) {
if (this.getRowHeight$() < 1) largeModel=false;
if (this.largeModel != largeModel ) {
this.completeEditing$();
this.largeModel=largeModel;
this.treeState=this.createLayoutCache$();
this.configureLayoutCache$();
p$1.updateLayoutCacheExpandedNodesIfNecessary.apply(this, []);
this.updateSize$();
}});

Clazz.newMeth(C$, 'isLargeModel$',  function () {
return this.largeModel;
});

Clazz.newMeth(C$, 'setRowHeight$I',  function (rowHeight) {
this.completeEditing$();
if (this.treeState != null ) {
this.setLargeModel$Z(this.tree.isLargeModel$());
this.treeState.setRowHeight$I(rowHeight);
this.updateSize$();
}});

Clazz.newMeth(C$, 'getRowHeight$',  function () {
return (this.tree == null ) ? -1 : this.tree.getRowHeight$();
});

Clazz.newMeth(C$, 'setCellRenderer$javax_swing_tree_TreeCellRenderer',  function (tcr) {
this.completeEditing$();
this.updateRenderer$();
if (this.treeState != null ) {
this.treeState.invalidateSizes$();
this.updateSize$();
}});

Clazz.newMeth(C$, 'getCellRenderer$',  function () {
return this.currentCellRenderer;
});

Clazz.newMeth(C$, 'setModel$javax_swing_tree_TreeModel',  function (model) {
this.completeEditing$();
if (this.treeModel != null  && this.treeModelListener != null  ) this.treeModel.removeTreeModelListener$javax_swing_event_TreeModelListener(this.treeModelListener);
this.treeModel=model;
if (this.treeModel != null ) {
if (this.treeModelListener != null ) this.treeModel.addTreeModelListener$javax_swing_event_TreeModelListener(this.treeModelListener);
}if (this.treeState != null ) {
this.treeState.setModel$javax_swing_tree_TreeModel(model);
p$1.updateLayoutCacheExpandedNodesIfNecessary.apply(this, []);
this.updateSize$();
}});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.treeModel;
});

Clazz.newMeth(C$, 'setRootVisible$Z',  function (newValue) {
this.completeEditing$();
this.updateDepthOffset$();
if (this.treeState != null ) {
this.treeState.setRootVisible$Z(newValue);
this.treeState.invalidateSizes$();
this.updateSize$();
}});

Clazz.newMeth(C$, 'isRootVisible$',  function () {
return (this.tree != null ) ? this.tree.isRootVisible$() : false;
});

Clazz.newMeth(C$, 'setShowsRootHandles$Z',  function (newValue) {
this.completeEditing$();
this.updateDepthOffset$();
if (this.treeState != null ) {
this.treeState.invalidateSizes$();
this.updateSize$();
}});

Clazz.newMeth(C$, 'getShowsRootHandles$',  function () {
return this.tree != null  && this.tree.getShowsRootHandles$() ;
});

Clazz.newMeth(C$, 'setCellEditor$javax_swing_tree_TreeCellEditor',  function (editor) {
this.updateCellEditor$();
});

Clazz.newMeth(C$, 'getCellEditor$',  function () {
return (this.tree != null ) ? this.tree.getCellEditor$() : null;
});

Clazz.newMeth(C$, 'setEditable$Z',  function (newValue) {
this.updateCellEditor$();
});

Clazz.newMeth(C$, 'isEditable$',  function () {
return (this.tree != null ) ? this.tree.isEditable$() : false;
});

Clazz.newMeth(C$, 'setSelectionModel$javax_swing_tree_TreeSelectionModel',  function (newLSM) {
this.completeEditing$();
if (this.selectionModelPropertyChangeListener != null  && this.treeSelectionModel != null  ) this.treeSelectionModel.removePropertyChangeListener$java_beans_PropertyChangeListener(this.selectionModelPropertyChangeListener);
if (this.treeSelectionListener != null  && this.treeSelectionModel != null  ) this.treeSelectionModel.removeTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.treeSelectionListener);
this.treeSelectionModel=newLSM;
if (this.treeSelectionModel != null ) {
if (this.selectionModelPropertyChangeListener != null ) this.treeSelectionModel.addPropertyChangeListener$java_beans_PropertyChangeListener(this.selectionModelPropertyChangeListener);
if (this.treeSelectionListener != null ) this.treeSelectionModel.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.treeSelectionListener);
if (this.treeState != null ) this.treeState.setSelectionModel$javax_swing_tree_TreeSelectionModel(this.treeSelectionModel);
} else if (this.treeState != null ) this.treeState.setSelectionModel$javax_swing_tree_TreeSelectionModel(null);
if (this.tree != null ) this.tree.repaint$();
});

Clazz.newMeth(C$, 'getSelectionModel$',  function () {
return this.treeSelectionModel;
});

Clazz.newMeth(C$, 'getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath',  function (tree, path) {
if (tree != null  && this.treeState != null  ) {
return p$1.getPathBounds$javax_swing_tree_TreePath$java_awt_Insets$java_awt_Rectangle.apply(this, [path, tree.getInsets$(), Clazz.new_($I$(3,1))]);
}return null;
});

Clazz.newMeth(C$, 'getPathBounds$javax_swing_tree_TreePath$java_awt_Insets$java_awt_Rectangle',  function (path, insets, bounds) {
bounds=this.treeState.getBounds$javax_swing_tree_TreePath$java_awt_Rectangle(path, bounds);
if (bounds != null ) {
if (this.leftToRight) {
bounds.x+=insets.left;
} else {
bounds.x=this.tree.getWidth$() - (bounds.x + bounds.width) - insets.right ;
}bounds.y+=insets.top;
}return bounds;
}, p$1);

Clazz.newMeth(C$, 'getPathForRow$javax_swing_JTree$I',  function (tree, row) {
return (this.treeState != null ) ? this.treeState.getPathForRow$I(row) : null;
});

Clazz.newMeth(C$, 'getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath',  function (tree, path) {
return (this.treeState != null ) ? this.treeState.getRowForPath$javax_swing_tree_TreePath(path) : -1;
});

Clazz.newMeth(C$, 'getRowCount$javax_swing_JTree',  function (tree) {
return (this.treeState != null ) ? this.treeState.getRowCount$() : 0;
});

Clazz.newMeth(C$, 'getClosestPathForLocation$javax_swing_JTree$I$I',  function (tree, x, y) {
if (tree != null  && this.treeState != null  ) {
y-=tree.getInsets$().top;
return this.treeState.getPathClosestTo$I$I(x, y);
}return null;
});

Clazz.newMeth(C$, 'isEditing$javax_swing_JTree',  function (tree) {
return (this.editingComponent != null );
});

Clazz.newMeth(C$, 'stopEditing$javax_swing_JTree',  function (tree) {
if (this.editingComponent != null  && this.cellEditor.stopCellEditing$() ) {
this.completeEditing$Z$Z$Z(false, false, true);
return true;
}return false;
});

Clazz.newMeth(C$, 'cancelEditing$javax_swing_JTree',  function (tree) {
if (this.editingComponent != null ) {
this.completeEditing$Z$Z$Z(false, true, false);
}});

Clazz.newMeth(C$, 'startEditingAtPath$javax_swing_JTree$javax_swing_tree_TreePath',  function (tree, path) {
tree.scrollPathToVisible$javax_swing_tree_TreePath(path);
if (path != null  && tree.isVisible$javax_swing_tree_TreePath(path) ) this.startEditing$javax_swing_tree_TreePath$java_awt_event_MouseEvent(path, null);
});

Clazz.newMeth(C$, 'getEditingPath$javax_swing_JTree',  function (tree) {
return this.editingPath;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
if (c == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null component passed to JSTreeUI.installUI()"]);
}this.tree=c;
this.prepareForUIInstall$();
this.installDefaults$();
this.installKeyboardActions$();
this.installComponents$();
this.installListeners$();
this.completeUIInstall$();
});

Clazz.newMeth(C$, 'prepareForUIInstall$',  function () {
this.drawingCache=Clazz.new_($I$(15,1).c$$I,[7]);
this.leftToRight=$I$(7).isLeftToRight$java_awt_Component(this.tree);
this.stopEditingInCompleteEditing=true;
this.lastSelectedRow=-1;
this.leadRow=-1;
this.$preferredSize=Clazz.new_($I$(16,1));
this.largeModel=this.tree.isLargeModel$();
if (this.getRowHeight$() <= 0) this.largeModel=false;
this.setModel$javax_swing_tree_TreeModel(this.tree.getModel$());
});

Clazz.newMeth(C$, 'completeUIInstall$',  function () {
this.setShowsRootHandles$Z(this.tree.getShowsRootHandles$());
this.updateRenderer$();
this.updateDepthOffset$();
this.setSelectionModel$javax_swing_tree_TreeSelectionModel(this.tree.getSelectionModel$());
this.treeState=this.createLayoutCache$();
this.configureLayoutCache$();
this.updateSize$();
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
if (this.tree.getBackground$() == null  || Clazz.instanceOf(this.tree.getBackground$(), "javax.swing.plaf.UIResource") ) {
this.tree.setBackground$java_awt_Color($I$(17).getColor$O("Tree.background"));
}this.selectionBackground=$I$(13,"toCSSString$java_awt_Color",[$I$(17).getColor$O("Tree.selectionBackground")]);
if (this.getHashColor$() == null  || Clazz.instanceOf(this.getHashColor$(), "javax.swing.plaf.UIResource") ) {
this.setHashColor$java_awt_Color($I$(17).getColor$O("Tree.hash"));
}if (this.tree.getFont$() == null  || Clazz.instanceOf(this.tree.getFont$(), "javax.swing.plaf.UIResource") ) this.tree.setFont$java_awt_Font($I$(17).getFont$O("Tree.font"));
p$1.setIcons.apply(this, []);
this.setLeftChildIndent$I(($I$(17).get$O("Tree.leftChildIndent")).intValue$());
this.setRightChildIndent$I(($I$(17).get$O("Tree.rightChildIndent")).intValue$());
this.paintLines=$I$(17).getBoolean$O("Tree.paintLines");
this.lineTypeDashed=$I$(17).getBoolean$O("Tree.lineTypeDashed");
var l=$I$(17).get$O("Tree.timeFactor");
var scrollsOnExpand=$I$(17).get$O("Tree.scrollsOnExpand");
var showsRootHandles=$I$(17).get$O("Tree.showsRootHandles");
$I$(18,"installProperty$javax_swing_JComponent$S$O",[this.tree, "rowHeight", $I$(17).get$O("Tree.rowHeight")]);
this.largeModel=(this.tree.isLargeModel$() && this.tree.getRowHeight$() > 0 );
if (scrollsOnExpand != null ) {
$I$(18).installProperty$javax_swing_JComponent$S$O(this.tree, "scrollsOnExpand", scrollsOnExpand);
}this.timeFactor=(l != null ) ? l.longValue$() : 1000;
if (showsRootHandles != null ) {
$I$(18).installProperty$javax_swing_JComponent$S$O(this.tree, "showsRootHandles", showsRootHandles);
}});

Clazz.newMeth(C$, 'setIcons',  function () {
var label;
var iexp=$I$(17).get$O("Tree.expandedIcon");
var icol=$I$(17).get$O("Tree.collapsedIcon");
if (iexp == null ) {
label=Clazz.new_($I$(19,1).c$$S,["\u25bc"]);
label.setFont$java_awt_Font(Clazz.new_($I$(20,1).c$$S$I$I,["Dialog", 0, 12]));
iexp=Clazz.new_($I$(21,1).c$$javax_swing_JLabel$I$I,[this, null, label, -2, 2]);
label=Clazz.new_($I$(19,1).c$$S,["\u25b6"]);
label.setFont$java_awt_Font(Clazz.new_($I$(20,1).c$$S$I$I,["Dialog", 0, 12]));
icol=Clazz.new_($I$(21,1).c$$javax_swing_JLabel$I$I,[this, null, label, 0, 2]);
$I$(17).getDefaults$().put$O$O("Tree.leftChildIndent", Integer.valueOf$I(10));
$I$(17).getDefaults$().put$O$O("Tree.rightChildIndent", Integer.valueOf$I(5));
$I$(17).getDefaults$().put$O$O("Tree.paintLines", Boolean.valueOf$Z(false));
}this.setExpandedIcon$javax_swing_Icon(iexp);
this.setCollapsedIcon$javax_swing_Icon(icol);
}, p$1);

Clazz.newMeth(C$, 'installListeners$',  function () {
if ((this.propertyChangeListener=this.createPropertyChangeListener$()) != null ) {
this.tree.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}if ((this.mouseListener=this.createMouseListener$()) != null ) {
this.tree.addMouseListener$java_awt_event_MouseListener(this.mouseListener);
if (Clazz.instanceOf(this.mouseListener, "java.awt.event.MouseMotionListener")) {
this.tree.addMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseListener);
}}if ((this.focusListener=this.createFocusListener$()) != null ) {
this.tree.addFocusListener$java_awt_event_FocusListener(this.focusListener);
}if ((this.keyListener=this.createKeyListener$()) != null ) {
this.tree.addKeyListener$java_awt_event_KeyListener(this.keyListener);
}if ((this.treeExpansionListener=this.createTreeExpansionListener$()) != null ) {
this.tree.addTreeExpansionListener$javax_swing_event_TreeExpansionListener(this.treeExpansionListener);
}if ((this.treeModelListener=this.createTreeModelListener$()) != null  && this.treeModel != null  ) {
this.treeModel.addTreeModelListener$javax_swing_event_TreeModelListener(this.treeModelListener);
}if ((this.selectionModelPropertyChangeListener=this.createSelectionModelPropertyChangeListener$()) != null  && this.treeSelectionModel != null  ) {
this.treeSelectionModel.addPropertyChangeListener$java_beans_PropertyChangeListener(this.selectionModelPropertyChangeListener);
}if ((this.treeSelectionListener=this.createTreeSelectionListener$()) != null  && this.treeSelectionModel != null  ) {
this.treeSelectionModel.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.treeSelectionListener);
}$I$(18).installProperty$javax_swing_JComponent$S$O(this.tree, "opaque", Boolean.TRUE);
});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var km=this.getInputMap$I(1);
$I$(6).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tree, 1, km);
km=this.getInputMap$I(0);
$I$(6).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tree, 0, km);
$I$(22,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.tree, Clazz.getClass(C$), "Tree.actionMap"]);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 1) {
return $I$(23).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.tree, this, "Tree.ancestorInputMap");
} else if (condition == 0) {
var keyMap=$I$(23).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.tree, this, "Tree.focusInputMap");
var rtlKeyMap;
if (this.tree.getComponentOrientation$().isLeftToRight$() || ((rtlKeyMap=$I$(23).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.tree, this, "Tree.focusInputMap.RightToLeft")) == null ) ) {
return keyMap;
} else {
rtlKeyMap.setParent$javax_swing_InputMap(keyMap);
return rtlKeyMap;
}}return null;
});

Clazz.newMeth(C$, 'installComponents$',  function () {
if ((this.rendererPane=this.createCellRendererPane$()) != null ) {
this.tree.add$java_awt_Component(this.rendererPane);
}});

Clazz.newMeth(C$, 'createNodeDimensions$',  function () {
return Clazz.new_($I$(24,1),[this, null]);
});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(25,1),[this, null]);
}return this.handler;
}, p$1);

Clazz.newMeth(C$, 'createMouseListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createFocusListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createKeyListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createSelectionModelPropertyChangeListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createTreeSelectionListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createCellEditorListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createComponentListener$',  function () {
return Clazz.new_($I$(26,1),[this, null]);
});

Clazz.newMeth(C$, 'createTreeExpansionListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createLayoutCache$',  function () {
if (this.isLargeModel$() && this.getRowHeight$() > 0 ) {
return Clazz.new_($I$(27,1));
}return Clazz.new_($I$(28,1));
});

Clazz.newMeth(C$, 'createCellRendererPane$',  function () {
return Clazz.new_($I$(29,1));
});

Clazz.newMeth(C$, 'createDefaultCellEditor$',  function () {
if (this.currentCellRenderer != null  && (Clazz.instanceOf(this.currentCellRenderer, "javax.swing.tree.DefaultTreeCellRenderer")) ) {
var editor=Clazz.new_($I$(30,1).c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer,[this.tree, this.currentCellRenderer]);
return editor;
}return Clazz.new_($I$(30,1).c$$javax_swing_JTree$javax_swing_tree_DefaultTreeCellRenderer,[this.tree, null]);
});

Clazz.newMeth(C$, 'createDefaultCellRenderer$',  function () {
return Clazz.new_($I$(31,1));
});

Clazz.newMeth(C$, 'createTreeModelListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.completeEditing$();
this.prepareForUIUninstall$();
this.uninstallDefaults$();
this.uninstallListeners$();
this.uninstallKeyboardActions$();
this.uninstallComponents$();
this.completeUIUninstall$();
});

Clazz.newMeth(C$, 'prepareForUIUninstall$',  function () {
});

Clazz.newMeth(C$, 'completeUIUninstall$',  function () {
if (this.createdRenderer) {
this.tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(null);
}if (this.createdCellEditor) {
this.tree.setCellEditor$javax_swing_tree_TreeCellEditor(null);
}this.cellEditor=null;
this.currentCellRenderer=null;
this.rendererPane=null;
this.componentListener=null;
this.propertyChangeListener=null;
this.mouseListener=null;
this.focusListener=null;
this.keyListener=null;
this.setSelectionModel$javax_swing_tree_TreeSelectionModel(null);
this.treeState=null;
this.drawingCache=null;
this.selectionModelPropertyChangeListener=null;
this.tree=null;
this.treeModel=null;
this.treeSelectionModel=null;
this.treeSelectionListener=null;
this.treeExpansionListener=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
if (Clazz.instanceOf(this.tree.getTransferHandler$(), "javax.swing.plaf.UIResource")) {
this.tree.setTransferHandler$javax_swing_TransferHandler(null);
}});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
if (this.componentListener != null ) {
this.tree.removeComponentListener$java_awt_event_ComponentListener(this.componentListener);
}if (this.propertyChangeListener != null ) {
this.tree.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}if (this.mouseListener != null ) {
this.tree.removeMouseListener$java_awt_event_MouseListener(this.mouseListener);
if (Clazz.instanceOf(this.mouseListener, "java.awt.event.MouseMotionListener")) {
this.tree.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.mouseListener);
}}if (this.focusListener != null ) {
this.tree.removeFocusListener$java_awt_event_FocusListener(this.focusListener);
}if (this.keyListener != null ) {
this.tree.removeKeyListener$java_awt_event_KeyListener(this.keyListener);
}if (this.treeExpansionListener != null ) {
this.tree.removeTreeExpansionListener$javax_swing_event_TreeExpansionListener(this.treeExpansionListener);
}if (this.treeModel != null  && this.treeModelListener != null  ) {
this.treeModel.removeTreeModelListener$javax_swing_event_TreeModelListener(this.treeModelListener);
}if (this.selectionModelPropertyChangeListener != null  && this.treeSelectionModel != null  ) {
this.treeSelectionModel.removePropertyChangeListener$java_beans_PropertyChangeListener(this.selectionModelPropertyChangeListener);
}if (this.treeSelectionListener != null  && this.treeSelectionModel != null  ) {
this.treeSelectionModel.removeTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.treeSelectionListener);
}this.handler=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(6).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.tree, null);
$I$(6).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tree, 1, null);
$I$(6).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tree, 0, null);
});

Clazz.newMeth(C$, 'uninstallComponents$',  function () {
if (this.rendererPane != null ) {
this.tree.remove$java_awt_Component(this.rendererPane);
}});

Clazz.newMeth(C$, 'redoTheLayout',  function () {
if (this.treeState != null ) {
this.treeState.invalidateSizes$();
}}, p$1);

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var lafDefaults=$I$(17).getLookAndFeelDefaults$();
var renderer=lafDefaults.get$O(C$.BASELINE_COMPONENT_KEY);
if (renderer == null ) {
var tcr=this.createDefaultCellRenderer$();
renderer=tcr.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z(this.tree, "a", false, false, false, -1, false);
lafDefaults.put$O$O(C$.BASELINE_COMPONENT_KEY, renderer);
}var rowHeight=this.tree.getRowHeight$();
var baseline;
if (rowHeight > 0) {
baseline=renderer.getBaseline$I$I(2147483647, rowHeight);
} else {
var pref=renderer.getPreferredSize$();
baseline=renderer.getBaseline$I$I(pref.width, pref.height);
}return baseline + this.tree.getInsets$().top;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
return $I$(32).CONSTANT_ASCENT;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
if (this.tree !== c ) {
throw Clazz.new_($I$(33,1).c$$S,["incorrect component"]);
}if (this.treeState == null ) {
return;
}var paintBounds=g.getClipBounds$();
var insets=this.tree.getInsets$();
var initialPath=this.getClosestPathForLocation$javax_swing_JTree$I$I(this.tree, 0, paintBounds.y);
var paintingEnumerator=this.treeState.getVisiblePathsFrom$javax_swing_tree_TreePath(initialPath);
var row=this.treeState.getRowForPath$javax_swing_tree_TreePath(initialPath);
var endY=paintBounds.y + paintBounds.height;
this.drawingCache.clear$();
if (initialPath != null  && paintingEnumerator != null  ) {
var parentPath=initialPath;
parentPath=parentPath.getParentPath$();
while (parentPath != null ){
parentPath=parentPath.getParentPath$();
}
var isExpanded;
var hasBeenExpanded;
var isLeaf;
var boundsBuffer=Clazz.new_($I$(3,1));
var bounds;
var path=null;
var rootVisible=this.isRootVisible$();
if (rootVisible) p$1.displayJSPath$javax_swing_tree_TreePath$Z.apply(this, [initialPath, false]);
while (paintingEnumerator.hasMoreElements$()){
if (this.paintLines) this.paintVerticalPartOfLeg$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$javax_swing_tree_TreePath(g, paintBounds, insets, parentPath);
this.drawingCache.put$O$O(parentPath, Boolean.TRUE);
if (row == 1) p$1.displayJSPath$javax_swing_tree_TreePath$Z.apply(this, [initialPath, true]);
if ((path=paintingEnumerator.nextElement$()) == null ) {
break;
}isLeaf=this.treeModel.isLeaf$O(path.getLastPathComponent$());
if (isLeaf) {
isExpanded=hasBeenExpanded=false;
} else {
isExpanded=this.treeState.getExpandedState$javax_swing_tree_TreePath(path);
hasBeenExpanded=this.tree.hasBeenExpanded$javax_swing_tree_TreePath(path);
}bounds=p$1.getPathBounds$javax_swing_tree_TreePath$java_awt_Insets$java_awt_Rectangle.apply(this, [path, insets, boundsBuffer]);
if (bounds == null ) return;
if (this.paintLines) {
parentPath=path.getParentPath$();
var paintHorizLeg=(rootVisible && row == 0 );
if (parentPath != null ) {
if (this.drawingCache.get$O(parentPath) == null ) {
this.paintVerticalPartOfLeg$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$javax_swing_tree_TreePath(g, paintBounds, insets, parentPath);
this.drawingCache.put$O$O(parentPath, Boolean.TRUE);
}paintHorizLeg=true;
}if (paintHorizLeg) this.paintHorizontalPartOfLeg$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$java_awt_Rectangle$javax_swing_tree_TreePath$I$Z$Z$Z(g, paintBounds, insets, bounds, path, row, isExpanded, hasBeenExpanded, isLeaf);
}if (this.shouldPaintExpandControl$javax_swing_tree_TreePath$I$Z$Z$Z(path, row, isExpanded, hasBeenExpanded, isLeaf)) {
this.paintExpandControl$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$java_awt_Rectangle$javax_swing_tree_TreePath$I$Z$Z$Z(g, paintBounds, insets, bounds, path, row, isExpanded, hasBeenExpanded, isLeaf);
}this.paintRow$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$java_awt_Rectangle$javax_swing_tree_TreePath$I$Z$Z$Z(g, paintBounds, insets, bounds, path, row, isExpanded, hasBeenExpanded, isLeaf);
if ((bounds.y + bounds.height) >= endY) break;
++row;
}
}this.paintDropLine$java_awt_Graphics(g);
this.drawingCache.clear$();
});

Clazz.newMeth(C$, 'getPathID$javax_swing_tree_TreePath',  function (path) {
var s="";
while (path != null ){
s="_" + p$1.getNodeId$javax_swing_tree_TreePath.apply(this, [path]) + s ;
path=path.getParentPath$();
}
return this.id + s;
}, p$1);

Clazz.newMeth(C$, 'getNodeId$javax_swing_tree_TreePath',  function (path) {
return (path == null  ? "" : "" + path.hashCode$());
}, p$1);

Clazz.newMeth(C$, 'isDropLine$javax_swing_JTree_DropLocation',  function (loc) {
return loc != null  && loc.getPath$() != null   && loc.getChildIndex$() != -1 ;
});

Clazz.newMeth(C$, 'paintDropLine$java_awt_Graphics',  function (g) {
var loc=this.tree.getDropLocation$();
if (!this.isDropLine$javax_swing_JTree_DropLocation(loc)) {
return;
}var c=$I$(17).getColor$O("Tree.dropLineColor");
if (c != null ) {
g.setColor$java_awt_Color(c);
var rect=this.getDropLineRect$javax_swing_JTree_DropLocation(loc);
g.fillRect$I$I$I$I(rect.x, rect.y, rect.width, rect.height);
}});

Clazz.newMeth(C$, 'getDropLineRect$javax_swing_JTree_DropLocation',  function (loc) {
var rect;
var path=loc.getPath$();
var index=loc.getChildIndex$();
var ltr=this.leftToRight;
var insets=this.tree.getInsets$();
if (this.tree.getRowCount$() == 0) {
rect=Clazz.new_([insets.left, insets.top, this.tree.getWidth$() - insets.left - insets.right , 0],$I$(3,1).c$$I$I$I$I);
} else {
var model=this.getModel$();
var root=model.getRoot$();
if (path.getLastPathComponent$() === root  && index >= model.getChildCount$O(root) ) {
rect=this.tree.getRowBounds$I(this.tree.getRowCount$() - 1);
rect.y=rect.y + rect.height;
var xRect;
if (!this.tree.isRootVisible$()) {
xRect=this.tree.getRowBounds$I(0);
} else if (model.getChildCount$O(root) == 0) {
xRect=this.tree.getRowBounds$I(0);
xRect.x+=this.totalChildIndent;
xRect.width-=this.totalChildIndent + this.totalChildIndent;
} else {
var lastChildPath=path.pathByAddingChild$O(model.getChild$O$I(root, model.getChildCount$O(root) - 1));
xRect=this.tree.getPathBounds$javax_swing_tree_TreePath(lastChildPath);
}rect.x=xRect.x;
rect.width=xRect.width;
} else {
rect=this.tree.getPathBounds$javax_swing_tree_TreePath(path.pathByAddingChild$O(model.getChild$O$I(path.getLastPathComponent$(), index)));
}}if (rect.y != 0) {
--rect.y;
}if (!ltr) {
rect.x=rect.x + rect.width - 100;
}rect.width=100;
rect.height=2;
return rect;
});

Clazz.newMeth(C$, 'paintHorizontalPartOfLeg$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$java_awt_Rectangle$javax_swing_tree_TreePath$I$Z$Z$Z',  function (g, clipBounds, insets, bounds, path, row, isExpanded, hasBeenExpanded, isLeaf) {
var depth=path.getPathCount$() - 1;
if ((depth == 0 || (depth == 1 && !this.isRootVisible$() ) ) && !this.getShowsRootHandles$() ) {
return;
}var clipLeft=clipBounds.x;
var clipRight=clipBounds.x + clipBounds.width;
var clipTop=clipBounds.y;
var clipBottom=clipBounds.y + clipBounds.height;
var lineY=bounds.y + (bounds.height/2|0);
var x0=bounds.x;
var x1=bounds.x;
if (this.leftToRight) {
x1=x0 - this.getHorizontalLegBuffer$();
x0-=this.getRightChildIndent$();
} else {
x1=x0 + bounds.width + this.getRightChildIndent$() ;
x0+=bounds.width + this.getHorizontalLegBuffer$();
}if (lineY >= clipTop && lineY < clipBottom  && x1 >= clipLeft  && x0 < clipRight  && x0 < x1 ) {
g.setColor$java_awt_Color(this.getHashColor$());
this.paintHorizontalLine$java_awt_Graphics$javax_swing_JComponent$I$I$I(g, this.tree, lineY, x0, x1 - 1);
}});

Clazz.newMeth(C$, 'paintVerticalPartOfLeg$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$javax_swing_tree_TreePath',  function (g, clipBounds, insets, path) {
var depth=path.getPathCount$() - 1;
if (depth == 0 && !this.getShowsRootHandles$()  && !this.isRootVisible$() ) {
return;
}var lineX=this.getRowX$I$I(-1, depth + 1);
if (this.leftToRight) {
lineX=lineX - this.getRightChildIndent$() + insets.left;
} else {
lineX=this.tree.getWidth$() - lineX - insets.right  + this.getRightChildIndent$() - 1;
}var clipLeft=clipBounds.x;
var clipRight=clipBounds.x + (clipBounds.width - 1);
if (lineX >= clipLeft && lineX <= clipRight ) {
var clipTop=clipBounds.y;
var clipBottom=clipBounds.y + clipBounds.height;
var parentBounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
var lastChildBounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, this.getLastChildPath$javax_swing_tree_TreePath(path));
if (lastChildBounds == null ) return;
var top;
if (parentBounds == null ) {
top=Math.max(insets.top + this.getVerticalLegBuffer$(), clipTop);
} else top=Math.max(parentBounds.y + parentBounds.height + this.getVerticalLegBuffer$() , clipTop);
if (depth == 0 && !this.isRootVisible$() ) {
var model=this.getModel$();
if (model != null ) {
var root=model.getRoot$();
if (model.getChildCount$O(root) > 0) {
parentBounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path.pathByAddingChild$O(model.getChild$O$I(root, 0)));
if (parentBounds != null ) top=Math.max(insets.top + this.getVerticalLegBuffer$(), parentBounds.y + (parentBounds.height/2|0));
}}}var bottom=Math.min(lastChildBounds.y + ((lastChildBounds.height/2|0)), clipBottom);
if (top <= bottom) {
g.setColor$java_awt_Color(this.getHashColor$());
this.paintVerticalLine$java_awt_Graphics$javax_swing_JComponent$I$I$I(g, this.tree, lineX, top, bottom);
}}});

Clazz.newMeth(C$, 'paintExpandControl$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$java_awt_Rectangle$javax_swing_tree_TreePath$I$Z$Z$Z',  function (g, clipBounds, insets, bounds, path, row, isExpanded, hasBeenExpanded, isLeaf) {
var value=path.getLastPathComponent$();
if (!isLeaf && (!hasBeenExpanded || this.treeModel.getChildCount$O(value) > 0 ) ) {
var middleXOfKnob;
if (this.leftToRight) {
middleXOfKnob=bounds.x - this.getRightChildIndent$() + 1;
} else {
middleXOfKnob=bounds.x + bounds.width + this.getRightChildIndent$()  - 1;
}var middleYOfKnob=bounds.y + ((bounds.height/2|0));
if (isExpanded) {
var expandedIcon=this.getExpandedIcon$();
if (expandedIcon != null ) this.drawCentered$java_awt_Component$java_awt_Graphics$javax_swing_Icon$I$I(this.tree, g, expandedIcon, middleXOfKnob, middleYOfKnob);
} else {
var collapsedIcon=this.getCollapsedIcon$();
if (collapsedIcon != null ) this.drawCentered$java_awt_Component$java_awt_Graphics$javax_swing_Icon$I$I(this.tree, g, collapsedIcon, middleXOfKnob, middleYOfKnob);
}p$1.displayJSPath$javax_swing_tree_TreePath$Z.apply(this, [path, isExpanded]);
}});

Clazz.newMeth(C$, 'displayJSPath$javax_swing_tree_TreePath$Z',  function (path, isExpanded) {
var myid=p$1.getPathID$javax_swing_tree_TreePath.apply(this, [path]);
this.$$O("[id^=" + myid + "_]" ).css("display", isExpanded ? "block" : "none");
}, p$1);

Clazz.newMeth(C$, 'paintRow$java_awt_Graphics$java_awt_Rectangle$java_awt_Insets$java_awt_Rectangle$javax_swing_tree_TreePath$I$Z$Z$Z',  function (g, clipBounds, insets, bounds, path, row, isExpanded, hasBeenExpanded, isLeaf) {
if (this.editingComponent != null  && this.editingRow == row ) return;
var leadIndex;
if (this.tree.hasFocus$()) {
leadIndex=this.getLeadSelectionRow$();
} else leadIndex=-1;
p$1.updateItem$java_awt_Graphics$javax_swing_tree_TreePath$I$Z$Z$Z$java_awt_Rectangle$Z.apply(this, [g, path, row, isExpanded, isLeaf, leadIndex == row, bounds, true]);
});

Clazz.newMeth(C$, 'updateItem$java_awt_Graphics$javax_swing_tree_TreePath$I$Z$Z$Z$java_awt_Rectangle$Z',  function (g, path, row, isExpanded, isLeaf, isLead, bounds, isVisible) {
var component=this.currentCellRenderer.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z(this.tree, path.getLastPathComponent$(), this.tree.isRowSelected$I(row), isExpanded, isLeaf, row, isLead);
var cx=bounds.x;
var cy=bounds.y;
var cw=bounds.width;
var ch=bounds.height;
if (isVisible) this.rendererPane.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, component, this.tree, cx, cy, cw, ch, true);
p$1.updateItemHTML$java_awt_JSComponent$javax_swing_tree_TreePath$I$I$I$I.apply(this, [component, path, cx, cy, cw, this.tree.getRowHeight$()]);
}, p$1);

Clazz.newMeth(C$, 'updateItemHTML$java_awt_JSComponent$javax_swing_tree_TreePath$I$I$I$I',  function (c, path, left, top, width, height) {
c.setSize$I$I(width, height);
c.setVisible$Z(true);
var ui=c.秘getUI$();
var node=ui.getListNode$();
ui.updateDOMNode$();
var myid=p$1.getPathID$javax_swing_tree_TreePath.apply(this, [path]);
var jnode=this.$$O(("#" + myid));
var div=$I$(34).getDOMNode(jnode);
if (div == null ) {
div=$I$(13,"newDOMObject$S$S$SA",["div", myid, Clazz.array(String, -1, [])]);
div.appendChild(node);
this.domNode.appendChild(div);
} else {
jnode.empty();
if (node != null ) jnode.append(node);
}if (node == null ) return;
$I$(14).setSize(node, width, height);
$I$(14).setTopLeftAbsolute(node, top, left);
$I$(14).setStyle(node, "display", null);
this.$$O("#" + $I$(14).getAttrInt(node, "id") + "_txt" ).css("background", this.tree.isPathSelected$javax_swing_tree_TreePath(path) ? this.selectionBackground : null);
}, p$1);

Clazz.newMeth(C$, 'shouldPaintExpandControl$javax_swing_tree_TreePath$I$Z$Z$Z',  function (path, row, isExpanded, hasBeenExpanded, isLeaf) {
if (isLeaf) return false;
var depth=path.getPathCount$() - 1;
return this.getShowsRootHandles$() || depth != 0 && (this.isRootVisible$() || depth != 1 )  ;
});

Clazz.newMeth(C$, 'paintVerticalLine$java_awt_Graphics$javax_swing_JComponent$I$I$I',  function (g, c, x, top, bottom) {
if (this.lineTypeDashed) {
this.drawDashedVerticalLine$java_awt_Graphics$I$I$I(g, x, top, bottom);
} else {
g.drawLine$I$I$I$I(x, top, x, bottom);
}});

Clazz.newMeth(C$, 'paintHorizontalLine$java_awt_Graphics$javax_swing_JComponent$I$I$I',  function (g, c, y, left, right) {
if (this.lineTypeDashed) {
this.drawDashedHorizontalLine$java_awt_Graphics$I$I$I(g, y, left, right);
} else {
g.drawLine$I$I$I$I(left, y, right, y);
}});

Clazz.newMeth(C$, 'getVerticalLegBuffer$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getHorizontalLegBuffer$',  function () {
return 0;
});

Clazz.newMeth(C$, 'findCenteredX$I$I',  function (x, iconWidth) {
return this.leftToRight ? x - (Math.ceil(iconWidth / 2.0)|0) : x - (Math.floor(iconWidth / 2.0)|0);
}, p$1);

Clazz.newMeth(C$, 'drawCentered$java_awt_Component$java_awt_Graphics$javax_swing_Icon$I$I',  function (c, graphics, icon, x, y) {
icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, graphics, p$1.findCenteredX$I$I.apply(this, [x, icon.getIconWidth$()]), y - (icon.getIconHeight$()/2|0));
});

Clazz.newMeth(C$, 'drawDashedHorizontalLine$java_awt_Graphics$I$I$I',  function (g, y, x1, x2) {
x1+=(x1 % 2);
for (var x=x1; x <= x2; x+=2) {
g.drawLine$I$I$I$I(x, y, x, y);
}
});

Clazz.newMeth(C$, 'drawDashedVerticalLine$java_awt_Graphics$I$I$I',  function (g, x, y1, y2) {
y1+=(y1 % 2);
for (var y=y1; y <= y2; y+=2) {
g.drawLine$I$I$I$I(x, y, x, y);
}
});

Clazz.newMeth(C$, 'getRowX$I$I',  function (row, depth) {
return this.totalChildIndent * (depth + this.depthOffset);
});

Clazz.newMeth(C$, 'updateLayoutCacheExpandedNodes$',  function () {
if (this.treeModel != null  && this.treeModel.getRoot$() != null  ) {
var rootPath=Clazz.new_([this.treeModel.getRoot$()],$I$(35,1).c$$O);
this.updateExpandedDescendants$javax_swing_tree_TreePath(rootPath);
}});

Clazz.newMeth(C$, 'updateLayoutCacheExpandedNodesIfNecessary',  function () {
if (this.treeModel != null  && this.treeModel.getRoot$() != null  ) {
var rootPath=Clazz.new_([this.treeModel.getRoot$()],$I$(35,1).c$$O);
if (this.tree.isExpanded$javax_swing_tree_TreePath(rootPath)) {
this.updateLayoutCacheExpandedNodes$();
} else {
this.treeState.setExpandedState$javax_swing_tree_TreePath$Z(rootPath, false);
}}}, p$1);

Clazz.newMeth(C$, 'updateExpandedDescendants$javax_swing_tree_TreePath',  function (path) {
this.completeEditing$();
if (this.treeState != null ) {
this.treeState.setExpandedState$javax_swing_tree_TreePath$Z(path, true);
var descendants=this.tree.getExpandedDescendants$javax_swing_tree_TreePath(path);
if (descendants != null ) {
while (descendants.hasMoreElements$()){
path=descendants.nextElement$();
this.treeState.setExpandedState$javax_swing_tree_TreePath$Z(path, true);
}
}this.updateLeadSelectionRow$();
this.updateSize$();
}});

Clazz.newMeth(C$, 'getLastChildPath$javax_swing_tree_TreePath',  function (parent) {
if (this.treeModel != null ) {
var childCount=this.treeModel.getChildCount$O(parent.getLastPathComponent$());
if (childCount > 0) return parent.pathByAddingChild$O(this.treeModel.getChild$O$I(parent.getLastPathComponent$(), childCount - 1));
}return null;
});

Clazz.newMeth(C$, 'updateDepthOffset$',  function () {
this.depthOffset=(this.isRootVisible$() ? 1 : 0) - (this.getShowsRootHandles$() ? 0 : 1);
});

Clazz.newMeth(C$, 'updateCellEditor$',  function () {
var newEditor;
this.completeEditing$();
if (this.tree == null ) newEditor=null;
 else {
if (this.tree.isEditable$()) {
newEditor=this.tree.getCellEditor$();
if (newEditor == null ) {
newEditor=this.createDefaultCellEditor$();
if (newEditor != null ) {
this.tree.setCellEditor$javax_swing_tree_TreeCellEditor(newEditor);
this.createdCellEditor=true;
}}} else newEditor=null;
}if (newEditor !== this.cellEditor ) {
if (this.cellEditor != null  && this.cellEditorListener != null  ) this.cellEditor.removeCellEditorListener$javax_swing_event_CellEditorListener(this.cellEditorListener);
this.cellEditor=newEditor;
if (this.cellEditorListener == null ) this.cellEditorListener=this.createCellEditorListener$();
if (newEditor != null  && this.cellEditorListener != null  ) newEditor.addCellEditorListener$javax_swing_event_CellEditorListener(this.cellEditorListener);
this.createdCellEditor=false;
}});

Clazz.newMeth(C$, 'updateRenderer$',  function () {
if (this.tree != null ) {
var newCellRenderer;
newCellRenderer=this.tree.getCellRenderer$();
if (newCellRenderer == null ) {
this.tree.setCellRenderer$javax_swing_tree_TreeCellRenderer(this.createDefaultCellRenderer$());
this.createdRenderer=true;
} else {
this.createdRenderer=false;
this.currentCellRenderer=newCellRenderer;
if (this.createdCellEditor) {
this.tree.setCellEditor$javax_swing_tree_TreeCellEditor(null);
}}} else {
this.createdRenderer=false;
this.currentCellRenderer=null;
}this.updateCellEditor$();
});

Clazz.newMeth(C$, 'configureLayoutCache$',  function () {
if (this.treeState != null  && this.tree != null  ) {
if (this.nodeDimensions == null ) this.nodeDimensions=this.createNodeDimensions$();
this.treeState.setNodeDimensions$javax_swing_tree_AbstractLayoutCache_NodeDimensions(this.nodeDimensions);
this.treeState.setRootVisible$Z(this.tree.isRootVisible$());
this.treeState.setRowHeight$I(this.tree.getRowHeight$());
this.treeState.setSelectionModel$javax_swing_tree_TreeSelectionModel(this.getSelectionModel$());
if (this.treeState.getModel$() !== this.tree.getModel$() ) this.treeState.setModel$javax_swing_tree_TreeModel(this.tree.getModel$());
p$1.updateLayoutCacheExpandedNodesIfNecessary.apply(this, []);
if (this.isLargeModel$()) {
if (this.componentListener == null ) {
this.componentListener=this.createComponentListener$();
if (this.componentListener != null ) this.tree.addComponentListener$java_awt_event_ComponentListener(this.componentListener);
}} else if (this.componentListener != null ) {
this.tree.removeComponentListener$java_awt_event_ComponentListener(this.componentListener);
this.componentListener=null;
}} else if (this.componentListener != null ) {
this.tree.removeComponentListener$java_awt_event_ComponentListener(this.componentListener);
this.componentListener=null;
}});

Clazz.newMeth(C$, 'updateSize$',  function () {
this.validCachedPreferredSize=false;
this.tree.treeDidChange$();
});

Clazz.newMeth(C$, 'updateSize0',  function () {
this.validCachedPreferredSize=false;
this.tree.revalidate$();
}, p$1);

Clazz.newMeth(C$, 'updateCachedPreferredSize$',  function () {
if (this.treeState != null ) {
var i=this.tree.getInsets$();
if (this.isLargeModel$()) {
var visRect=this.tree.getVisibleRect$();
if (visRect.x == 0 && visRect.y == 0  && visRect.width == 0  && visRect.height == 0  && this.tree.getVisibleRowCount$() > 0 ) {
visRect.width=1;
visRect.height=this.tree.getRowHeight$() * this.tree.getVisibleRowCount$();
} else {
visRect.x-=i.left;
visRect.y-=i.top;
}var component=$I$(6).getUnwrappedParent$java_awt_Component(this.tree);
if (Clazz.instanceOf(component, "javax.swing.JViewport")) {
component=component.getParent$();
if (Clazz.instanceOf(component, "javax.swing.JScrollPane")) {
var pane=component;
var bar=pane.getHorizontalScrollBar$();
if ((bar != null ) && bar.isVisible$() ) {
var height=bar.getHeight$();
visRect.y-=height;
visRect.height+=height;
}}}this.$preferredSize.width=this.treeState.getPreferredWidth$java_awt_Rectangle(visRect);
} else {
this.$preferredSize.width=this.treeState.getPreferredWidth$java_awt_Rectangle(null);
}this.$preferredSize.height=this.treeState.getPreferredHeight$();
this.$preferredSize.width+=i.left + i.right;
this.$preferredSize.height+=i.top + i.bottom;
}this.validCachedPreferredSize=true;
});

Clazz.newMeth(C$, 'pathWasExpanded$javax_swing_tree_TreePath',  function (path) {
if (this.tree != null ) {
this.tree.fireTreeExpanded$javax_swing_tree_TreePath(path);
}});

Clazz.newMeth(C$, 'pathWasCollapsed$javax_swing_tree_TreePath',  function (path) {
if (this.tree != null ) {
this.tree.fireTreeCollapsed$javax_swing_tree_TreePath(path);
}});

Clazz.newMeth(C$, 'ensureRowsAreVisible$I$I',  function (beginRow, endRow) {
if (this.tree != null  && beginRow >= 0  && endRow < this.getRowCount$javax_swing_JTree(this.tree) ) {
var scrollVert=$I$(23).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.tree, this, "Tree.scrollsHorizontallyAndVertically", false);
if (beginRow == endRow) {
var scrollBounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, this.getPathForRow$javax_swing_JTree$I(this.tree, beginRow));
if (scrollBounds != null ) {
if (!scrollVert) {
scrollBounds.x=this.tree.getVisibleRect$().x;
scrollBounds.width=1;
}this.tree.scrollRectToVisible$java_awt_Rectangle(scrollBounds);
}} else {
var beginRect=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, this.getPathForRow$javax_swing_JTree$I(this.tree, beginRow));
if (beginRect != null ) {
var visRect=this.tree.getVisibleRect$();
var testRect=beginRect;
var beginY=beginRect.y;
var maxY=beginY + visRect.height;
for (var counter=beginRow + 1; counter <= endRow; counter++) {
testRect=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, this.getPathForRow$javax_swing_JTree$I(this.tree, counter));
if (testRect == null ) {
return;
}if ((testRect.y + testRect.height) > maxY) counter=endRow;
}
this.tree.scrollRectToVisible$java_awt_Rectangle(Clazz.new_($I$(3,1).c$$I$I$I$I,[visRect.x, beginY, 1, testRect.y + testRect.height - beginY]));
}}}});

Clazz.newMeth(C$, 'setPreferredMinSize$java_awt_Dimension',  function (newSize) {
this.preferredMinSize=newSize;
});

Clazz.newMeth(C$, 'getPreferredMinSize$',  function () {
if (this.preferredMinSize == null ) return null;
return Clazz.new_($I$(16,1).c$$java_awt_Dimension,[this.preferredMinSize]);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (c) {
return this.getPreferredSize$javax_swing_JComponent$Z(c, true);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent$Z',  function (c, checkConsistency) {
var pSize=this.getPreferredMinSize$();
if (!this.validCachedPreferredSize) this.updateCachedPreferredSize$();
if (this.tree != null ) {
if (pSize != null ) return Clazz.new_([Math.max(pSize.width, this.$preferredSize.width), Math.max(pSize.height, this.$preferredSize.height)],$I$(16,1).c$$I$I);
return Clazz.new_($I$(16,1).c$$I$I,[this.$preferredSize.width, this.$preferredSize.height]);
} else if (pSize != null ) return pSize;
 else return Clazz.new_($I$(16,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (c) {
if (this.getPreferredMinSize$() != null ) return this.getPreferredMinSize$();
return Clazz.new_($I$(16,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (c) {
if (this.tree != null ) return this.getPreferredSize$javax_swing_JComponent(this.tree);
if (this.getPreferredMinSize$() != null ) return this.getPreferredMinSize$();
return Clazz.new_($I$(16,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'completeEditing$',  function () {
if (this.tree.getInvokesStopCellEditing$() && this.stopEditingInCompleteEditing && this.editingComponent != null   ) {
this.cellEditor.stopCellEditing$();
}this.completeEditing$Z$Z$Z(false, true, false);
});

Clazz.newMeth(C$, 'completeEditing$Z$Z$Z',  function (messageStop, messageCancel, messageTree) {
if (this.stopEditingInCompleteEditing && this.editingComponent != null  ) {
var oldComponent=this.editingComponent;
var oldPath=this.editingPath;
var oldEditor=this.cellEditor;
var newValue=oldEditor.getCellEditorValue$();
var editingBounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, this.editingPath);
var requestFocus=(this.tree != null  && (this.tree.hasFocus$() || $I$(6).findFocusOwner$java_awt_Component(this.editingComponent) != null  ) );
this.editingComponent=null;
this.editingPath=null;
if (messageStop) oldEditor.stopCellEditing$();
 else if (messageCancel) oldEditor.cancelCellEditing$();
this.tree.remove$java_awt_Component(oldComponent);
if (this.editorHasDifferentSize) {
this.treeState.invalidatePathBounds$javax_swing_tree_TreePath(oldPath);
this.updateSize$();
} else if (editingBounds != null ) {
editingBounds.x=0;
editingBounds.width=this.tree.getSize$().width;
this.tree.repaint$java_awt_Rectangle(editingBounds);
}if (requestFocus) this.tree.requestFocus$();
if (messageTree) this.treeModel.valueForPathChanged$javax_swing_tree_TreePath$O(oldPath, newValue);
}});

Clazz.newMeth(C$, 'startEditingOnRelease$javax_swing_tree_TreePath$java_awt_event_MouseEvent$java_awt_event_MouseEvent',  function (path, event, releaseEvent) {
this.releaseEvent=releaseEvent;
try {
return this.startEditing$javax_swing_tree_TreePath$java_awt_event_MouseEvent(path, event);
} finally {
this.releaseEvent=null;
}
}, p$1);

Clazz.newMeth(C$, 'startEditing$javax_swing_tree_TreePath$java_awt_event_MouseEvent',  function (path, event) {
if (this.isEditing$javax_swing_JTree(this.tree) && this.tree.getInvokesStopCellEditing$() && !this.stopEditing$javax_swing_JTree(this.tree)  ) {
return false;
}this.completeEditing$();
if (this.cellEditor != null  && this.tree.isPathEditable$javax_swing_tree_TreePath(path) ) {
var row=this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
if (this.cellEditor.isCellEditable$java_util_EventObject(event)) {
this.editingComponent=this.cellEditor.getTreeCellEditorComponent$javax_swing_JTree$O$Z$Z$Z$I(this.tree, path.getLastPathComponent$(), this.tree.isPathSelected$javax_swing_tree_TreePath(path), this.tree.isExpanded$javax_swing_tree_TreePath(path), this.treeModel.isLeaf$O(path.getLastPathComponent$()), row);
var nodeBounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
if (nodeBounds == null ) {
return false;
}this.editingRow=row;
var editorSize=this.editingComponent.getPreferredSize$();
if (editorSize.height != nodeBounds.height && this.getRowHeight$() > 0 ) editorSize.height=this.getRowHeight$();
if (editorSize.width != nodeBounds.width || editorSize.height != nodeBounds.height ) {
this.editorHasDifferentSize=true;
this.treeState.invalidatePathBounds$javax_swing_tree_TreePath(path);
this.updateSize$();
nodeBounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
if (nodeBounds == null ) {
return false;
}} else this.editorHasDifferentSize=false;
this.tree.add$java_awt_Component(this.editingComponent);
this.editingComponent.setBounds$I$I$I$I(nodeBounds.x, nodeBounds.y, nodeBounds.width, nodeBounds.height);
this.editingPath=path;
this.editingComponent.validate$();
this.editingComponent.repaint$();
if (this.cellEditor.shouldSelectCell$java_util_EventObject(event)) {
this.stopEditingInCompleteEditing=false;
this.tree.setSelectionRow$I(row);
this.stopEditingInCompleteEditing=true;
}var focusedComponent=$I$(5).compositeRequestFocus$java_awt_Component(this.editingComponent);
var selectAll=true;
if (event != null ) {
var componentPoint=$I$(6,"convertPoint$java_awt_Component$java_awt_Point$java_awt_Component",[this.tree, Clazz.new_([event.getX$(), event.getY$()],$I$(36,1).c$$I$I), this.editingComponent]);
var activeComponent=$I$(6).getDeepestComponentAt$java_awt_Component$I$I(this.editingComponent, componentPoint.x, componentPoint.y);
if (activeComponent != null ) {
var handler=Clazz.new_($I$(37,1).c$$java_awt_Component$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component,[this, null, this.tree, activeComponent, event, focusedComponent]);
if (this.releaseEvent != null ) {
handler.mouseReleased$java_awt_event_MouseEvent(this.releaseEvent);
}selectAll=false;
}}if (selectAll && Clazz.instanceOf(focusedComponent, "javax.swing.JTextField") ) {
(focusedComponent).selectAll$();
}return true;
} else this.editingComponent=null;
}return false;
});

Clazz.newMeth(C$, 'checkForClickInExpandControl$javax_swing_tree_TreePath$I$I',  function (path, mouseX, mouseY) {
if (this.isLocationInExpandControl$javax_swing_tree_TreePath$I$I(path, mouseX, mouseY)) {
this.handleExpandControlClick$javax_swing_tree_TreePath$I$I(path, mouseX, mouseY);
}});

Clazz.newMeth(C$, 'isLocationInExpandControl$javax_swing_tree_TreePath$I$I',  function (path, mouseX, mouseY) {
if (path != null  && !this.treeModel.isLeaf$O(path.getLastPathComponent$()) ) {
var boxWidth;
var i=this.tree.getInsets$();
if (this.getExpandedIcon$() != null ) boxWidth=this.getExpandedIcon$().getIconWidth$();
 else boxWidth=8;
var boxLeftX=this.getRowX$I$I(this.tree.getRowForPath$javax_swing_tree_TreePath(path), path.getPathCount$() - 1);
if (this.leftToRight) {
boxLeftX=boxLeftX + i.left - this.getRightChildIndent$() + 1;
} else {
boxLeftX=this.tree.getWidth$() - boxLeftX - i.right  + this.getRightChildIndent$() - 1;
}boxLeftX=p$1.findCenteredX$I$I.apply(this, [boxLeftX, boxWidth]);
return (mouseX >= boxLeftX && mouseX < (boxLeftX + boxWidth) );
}return false;
});

Clazz.newMeth(C$, 'handleExpandControlClick$javax_swing_tree_TreePath$I$I',  function (path, mouseX, mouseY) {
this.toggleExpandState$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'toggleExpandState$javax_swing_tree_TreePath',  function (path) {
if (!this.tree.isExpanded$javax_swing_tree_TreePath(path)) {
var row=this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
this.tree.expandPath$javax_swing_tree_TreePath(path);
this.updateSize$();
if (row != -1) {
if (this.tree.getScrollsOnExpand$()) this.ensureRowsAreVisible$I$I(row, row + this.treeState.getVisibleChildCount$javax_swing_tree_TreePath(path));
 else this.ensureRowsAreVisible$I$I(row, row);
}} else {
this.tree.collapsePath$javax_swing_tree_TreePath(path);
this.updateSize$();
}});

Clazz.newMeth(C$, 'isToggleSelectionEvent$java_awt_event_MouseEvent',  function (event) {
return ($I$(6).isLeftMouseButton$java_awt_event_MouseEvent(event) && $I$(7).isMenuShortcutKeyDown$java_awt_event_InputEvent(event) );
});

Clazz.newMeth(C$, 'isMultiSelectEvent$java_awt_event_MouseEvent',  function (event) {
return ($I$(6).isLeftMouseButton$java_awt_event_MouseEvent(event) && event.isShiftDown$() );
});

Clazz.newMeth(C$, 'isToggleEvent$java_awt_event_MouseEvent',  function (event) {
if (!$I$(6).isLeftMouseButton$java_awt_event_MouseEvent(event)) {
return false;
}var clickCount=this.tree.getToggleClickCount$();
if (clickCount <= 0) {
return false;
}return ((event.getClickCount$() % clickCount) == 0);
});

Clazz.newMeth(C$, 'selectPathForEvent$javax_swing_tree_TreePath$java_awt_event_MouseEvent',  function (path, event) {
if (this.isMultiSelectEvent$java_awt_event_MouseEvent(event)) {
var anchor=p$1.getAnchorSelectionPath.apply(this, []);
var anchorRow=(anchor == null ) ? -1 : this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, anchor);
if (anchorRow == -1 || this.tree.getSelectionModel$().getSelectionMode$() == 1 ) {
this.tree.setSelectionPath$javax_swing_tree_TreePath(path);
} else {
var row=this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
var lastAnchorPath=anchor;
if (this.isToggleSelectionEvent$java_awt_event_MouseEvent(event)) {
if (this.tree.isRowSelected$I(anchorRow)) {
this.tree.addSelectionInterval$I$I(anchorRow, row);
} else {
this.tree.removeSelectionInterval$I$I(anchorRow, row);
this.tree.addSelectionInterval$I$I(row, row);
}} else if (row < anchorRow) {
this.tree.setSelectionInterval$I$I(row, anchorRow);
} else {
this.tree.setSelectionInterval$I$I(anchorRow, row);
}this.lastSelectedRow=row;
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(this, [lastAnchorPath]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(this, [path]);
}} else if (this.isToggleSelectionEvent$java_awt_event_MouseEvent(event)) {
if (this.tree.isPathSelected$javax_swing_tree_TreePath(path)) this.tree.removeSelectionPath$javax_swing_tree_TreePath(path);
 else this.tree.addSelectionPath$javax_swing_tree_TreePath(path);
this.lastSelectedRow=this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(this, [path]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(this, [path]);
} else if ($I$(6).isLeftMouseButton$java_awt_event_MouseEvent(event)) {
this.tree.setSelectionPath$javax_swing_tree_TreePath(path);
if (this.isToggleEvent$java_awt_event_MouseEvent(event)) {
this.toggleExpandState$javax_swing_tree_TreePath(path);
}}});

Clazz.newMeth(C$, 'isLeaf$I',  function (row) {
var path=this.getPathForRow$javax_swing_JTree$I(this.tree, row);
return (path == null  || this.treeModel.isLeaf$O(path.getLastPathComponent$()) );
});

Clazz.newMeth(C$, 'setAnchorSelectionPath$javax_swing_tree_TreePath',  function (newPath) {
this.ignoreLAChange=true;
try {
this.tree.setAnchorSelectionPath$javax_swing_tree_TreePath(newPath);
} finally {
this.ignoreLAChange=false;
}
}, p$1);

Clazz.newMeth(C$, 'getAnchorSelectionPath',  function () {
return this.tree.getAnchorSelectionPath$();
}, p$1);

Clazz.newMeth(C$, 'setLeadSelectionPath$javax_swing_tree_TreePath',  function (newPath) {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(this, [newPath, false]);
}, p$1);

Clazz.newMeth(C$, 'setLeadSelectionPath$javax_swing_tree_TreePath$Z',  function (newPath, repaint) {
var bounds=repaint ? this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, p$1.getLeadSelectionPath.apply(this, [])) : null;
this.ignoreLAChange=true;
try {
this.tree.setLeadSelectionPath$javax_swing_tree_TreePath(newPath);
} finally {
this.ignoreLAChange=false;
}
this.leadRow=this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, newPath);
if (repaint) {
if (bounds != null ) {
this.tree.repaint$java_awt_Rectangle(p$1.getRepaintPathBounds$java_awt_Rectangle.apply(this, [bounds]));
}bounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, newPath);
if (bounds != null ) {
this.tree.repaint$java_awt_Rectangle(p$1.getRepaintPathBounds$java_awt_Rectangle.apply(this, [bounds]));
}}}, p$1);

Clazz.newMeth(C$, 'getRepaintPathBounds$java_awt_Rectangle',  function (bounds) {
if ($I$(17).getBoolean$O("Tree.repaintWholeRow")) {
bounds.x=0;
bounds.width=this.tree.getWidth$();
}return bounds;
}, p$1);

Clazz.newMeth(C$, 'getLeadSelectionPath',  function () {
return this.tree.getLeadSelectionPath$();
}, p$1);

Clazz.newMeth(C$, 'updateLeadSelectionRow$',  function () {
this.leadRow=this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, p$1.getLeadSelectionPath.apply(this, []));
});

Clazz.newMeth(C$, 'getLeadSelectionRow$',  function () {
return this.leadRow;
});

Clazz.newMeth(C$, 'extendSelection$javax_swing_tree_TreePath',  function (newLead) {
var aPath=p$1.getAnchorSelectionPath.apply(this, []);
var aRow=(aPath == null ) ? -1 : this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, aPath);
var newIndex=this.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, newLead);
if (aRow == -1) {
this.tree.setSelectionRow$I(newIndex);
} else {
if (aRow < newIndex) {
this.tree.setSelectionInterval$I$I(aRow, newIndex);
} else {
this.tree.setSelectionInterval$I$I(newIndex, aRow);
}p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(this, [aPath]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(this, [newLead]);
}}, p$1);

Clazz.newMeth(C$, 'repaintPath$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
var bounds=this.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this.tree, path);
if (bounds != null ) {
this.tree.repaint$I$I$I$I(bounds.x, bounds.y, bounds.width, bounds.height);
}}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.BASELINE_COMPONENT_KEY=Clazz.new_($I$(10,1).c$$S,["Tree.baselineComponent"]);
C$.SHARED_ACTION=Clazz.new_($I$(11,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TextIcon", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.Icon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['scale'],'I',['width','height','xoff','yoff'],'O',['label','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$javax_swing_JLabel$I$I',  function (label, xoff, yoff) {
;C$.$init$.apply(this);
this.setLabel$javax_swing_JLabel$I$I(label, xoff, yoff);
}, 1);

Clazz.newMeth(C$, 'setLabel$javax_swing_JLabel$I$I',  function (label, xoff, yoff) {
this.label=label;
var dim=label.getPreferredSize$();
this.width=dim.width;
this.height=dim.height;
this.scale=this.height / 19.0;
this.xoff=xoff;
this.yoff=yoff;
});

Clazz.newMeth(C$, 'paintIcon$java_awt_Component$java_awt_Graphics$I$I',  function (c, g, x, y) {
var g2=g;
g.setColor$java_awt_Color($I$(1).BLACK);
g2.translate$I$I(x + (this.width/2|0), y + (this.height/2|0));
g2.scale$D$D(this.scale, this.scale);
g.drawString$S$I$I(this.label.getText$(), (((-this.width / 2.0 + this.xoff) / this.scale)|0), (((this.height / 4.0 + this.yoff) / this.scale)|0));
g2.scale$D$D(1 / this.scale, 1 / this.scale);
g2.translate$I$I(-x - (this.width/2|0), -y - (this.height/2|0));
});

Clazz.newMeth(C$, 'getIconWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getIconHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeExpansionHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.TreeExpansionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'treeExpanded$javax_swing_event_TreeExpansionEvent',  function (event) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).treeExpanded$javax_swing_event_TreeExpansionEvent(event);
});

Clazz.newMeth(C$, 'treeCollapsed$javax_swing_event_TreeExpansionEvent',  function (event) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).treeCollapsed$javax_swing_event_TreeExpansionEvent(event);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "ComponentHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.ComponentAdapter', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['timer','javax.swing.Timer','scrollBar','javax.swing.JScrollBar']]]

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
if (this.timer == null ) {
var scrollPane=this.getScrollPane$();
if (scrollPane == null ) this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
 else {
this.scrollBar=scrollPane.getVerticalScrollBar$();
if (this.scrollBar == null  || !this.scrollBar.getValueIsAdjusting$() ) {
if ((this.scrollBar=scrollPane.getHorizontalScrollBar$()) != null  && this.scrollBar.getValueIsAdjusting$() ) this.startTimer$();
 else this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
} else this.startTimer$();
}}});

Clazz.newMeth(C$, 'startTimer$',  function () {
if (this.timer == null ) {
this.timer=Clazz.new_($I$(2,1).c$$I$java_awt_event_ActionListener,[200, this]);
this.timer.setRepeats$Z(true);
}this.timer.start$();
});

Clazz.newMeth(C$, 'getScrollPane$',  function () {
var c=this.b$['swingjs.plaf.JSTreeUI'].tree.getParent$();
while (c != null  && !(Clazz.instanceOf(c, "javax.swing.JScrollPane")) )c=c.getParent$();

if (Clazz.instanceOf(c, "javax.swing.JScrollPane")) return c;
return null;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ae) {
if (this.scrollBar == null  || !this.scrollBar.getValueIsAdjusting$() ) {
if (this.timer != null ) this.timer.stop$();
this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
this.timer=null;
this.scrollBar=null;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeModelHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.TreeModelListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'treeNodesChanged$javax_swing_event_TreeModelEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).treeNodesChanged$javax_swing_event_TreeModelEvent(e);
});

Clazz.newMeth(C$, 'treeNodesInserted$javax_swing_event_TreeModelEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).treeNodesInserted$javax_swing_event_TreeModelEvent(e);
});

Clazz.newMeth(C$, 'treeNodesRemoved$javax_swing_event_TreeModelEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).treeNodesRemoved$javax_swing_event_TreeModelEvent(e);
});

Clazz.newMeth(C$, 'treeStructureChanged$javax_swing_event_TreeModelEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).treeStructureChanged$javax_swing_event_TreeModelEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeSelectionHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.TreeSelectionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (event) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).valueChanged$javax_swing_event_TreeSelectionEvent(event);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "CellEditorHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.CellEditorListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'editingStopped$javax_swing_event_ChangeEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).editingStopped$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$, 'editingCanceled$javax_swing_event_ChangeEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).editingCanceled$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "KeyHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.KeyAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isKeyDown'],'O',['repeatKeyAction','javax.swing.Action']]]

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).keyTyped$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).keyPressed$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).keyReleased$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "FocusHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.FocusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "NodeDimensionsHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.tree.AbstractLayoutCache','.NodeDimensions']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getNodeDimensions$O$I$I$Z$java_awt_Rectangle',  function (value, row, depth, expanded, size) {
if (this.b$['swingjs.plaf.JSTreeUI'].editingComponent != null  && this.b$['swingjs.plaf.JSTreeUI'].editingRow == row ) {
var prefSize=this.b$['swingjs.plaf.JSTreeUI'].editingComponent.getPreferredSize$();
var rh=this.b$['swingjs.plaf.JSTreeUI'].getRowHeight$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
if (rh > 0 && rh != prefSize.height ) prefSize.height=rh;
if (size != null ) {
size.x=this.getRowX$I$I(row, depth);
size.width=prefSize.width;
size.height=prefSize.height;
} else {
size=Clazz.new_([this.getRowX$I$I(row, depth), 0, prefSize.width, prefSize.height],$I$(3,1).c$$I$I$I$I);
}return size;
}if (this.b$['swingjs.plaf.JSTreeUI'].currentCellRenderer != null ) {
var aComponent;
aComponent=this.b$['swingjs.plaf.JSTreeUI'].currentCellRenderer.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z(this.b$['swingjs.plaf.JSTreeUI'].tree, value, this.b$['swingjs.plaf.JSTreeUI'].tree.isRowSelected$I(row), expanded, this.b$['swingjs.plaf.JSTreeUI'].treeModel.isLeaf$O(value), row, false);
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
this.b$['swingjs.plaf.JSTreeUI'].rendererPane.add$java_awt_Component(aComponent);
aComponent.validate$();
}var prefSize=aComponent.getPreferredSize$();
if (size != null ) {
size.x=this.getRowX$I$I(row, depth);
size.width=prefSize.width;
size.height=prefSize.height;
} else {
size=Clazz.new_([this.getRowX$I$I(row, depth), 0, prefSize.width, prefSize.height],$I$(3,1).c$$I$I$I$I);
}return size;
}return null;
});

Clazz.newMeth(C$, 'getRowX$I$I',  function (row, depth) {
return this.b$['swingjs.plaf.JSTreeUI'].getRowX$I$I.apply(this.b$['swingjs.plaf.JSTreeUI'], [row, depth]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "MouseHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter', 'java.awt.event.MouseMotionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).mouseDragged$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).mouseMoved$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).mouseReleased$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "PropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).propertyChange$java_beans_PropertyChangeEvent(event);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "SelectionModelPropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTreeUI'], []).propertyChange$java_beans_PropertyChangeEvent(event);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeTraverseAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['changeSelection'],'I',['direction']]]

Clazz.newMeth(C$, 'c$$I$S',  function (direction, name) {
C$.c$$I$S$Z.apply(this, [direction, name, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S$Z',  function (direction, name, changeSelection) {
Clazz.super_(C$, this);
this.direction=direction;
this.changeSelection=changeSelection;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
p$2.traverse$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z.apply($I$(4).SHARED_ACTION, [this.b$['swingjs.plaf.JSTreeUI'].tree, this.b$['swingjs.plaf.JSTreeUI'], this.direction, this.changeSelection]);
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.isEnabled$() );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreePageAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['addToSelection','changeSelection'],'I',['direction']]]

Clazz.newMeth(C$, 'c$$I$S',  function (direction, name) {
C$.c$$I$S$Z$Z.apply(this, [direction, name, false, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S$Z$Z',  function (direction, name, addToSelection, changeSelection) {
Clazz.super_(C$, this);
this.direction=direction;
this.addToSelection=addToSelection;
this.changeSelection=changeSelection;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
p$2.page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply($I$(4).SHARED_ACTION, [this.b$['swingjs.plaf.JSTreeUI'].tree, this.b$['swingjs.plaf.JSTreeUI'], this.direction, this.addToSelection, this.changeSelection]);
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.isEnabled$() );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeIncrementAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['addToSelection','changeSelection'],'I',['direction']]]

Clazz.newMeth(C$, 'c$$I$S',  function (direction, name) {
C$.c$$I$S$Z$Z.apply(this, [direction, name, false, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S$Z$Z',  function (direction, name, addToSelection, changeSelection) {
Clazz.super_(C$, this);
this.direction=direction;
this.addToSelection=addToSelection;
this.changeSelection=changeSelection;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
p$2.increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply($I$(4).SHARED_ACTION, [this.b$['swingjs.plaf.JSTreeUI'].tree, this.b$['swingjs.plaf.JSTreeUI'], this.direction, this.addToSelection, this.changeSelection]);
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.isEnabled$() );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeHomeAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['addToSelection','changeSelection'],'I',['direction']]]

Clazz.newMeth(C$, 'c$$I$S',  function (direction, name) {
C$.c$$I$S$Z$Z.apply(this, [direction, name, false, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S$Z$Z',  function (direction, name, addToSelection, changeSelection) {
Clazz.super_(C$, this);
this.direction=direction;
this.changeSelection=changeSelection;
this.addToSelection=addToSelection;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
p$2.home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply($I$(4).SHARED_ACTION, [this.b$['swingjs.plaf.JSTreeUI'].tree, this.b$['swingjs.plaf.JSTreeUI'], this.direction, this.addToSelection, this.changeSelection]);
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.isEnabled$() );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeToggleAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
p$2.toggle$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply($I$(4).SHARED_ACTION, [this.b$['swingjs.plaf.JSTreeUI'].tree, this.b$['swingjs.plaf.JSTreeUI']]);
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.isEnabled$() );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "TreeCancelEditingAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
p$2.cancelEditing$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply($I$(4).SHARED_ACTION, [this.b$['swingjs.plaf.JSTreeUI'].tree, this.b$['swingjs.plaf.JSTreeUI']]);
}});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.isEnabled$()  && this.b$['swingjs.plaf.JSTreeUI'].isEditing$javax_swing_JTree.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree]) );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "MouseInputHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.MouseInputListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['dispatchedEvent'],'O',['source','java.awt.Component','+destination','+focusComponent']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_Component$java_awt_event_MouseEvent',  function (source, destination, event) {
C$.c$$java_awt_Component$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component.apply(this, [source, destination, event, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component',  function (source, destination, event, focusComponent) {
;C$.$init$.apply(this);
this.source=source;
this.destination=destination;
this.source.addMouseListener$java_awt_event_MouseListener(this);
this.source.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
$I$(5,"setSkipClickCount$java_awt_Component$I",[destination, event.getClickCount$() - 1]);
destination.dispatchEvent$java_awt_AWTEvent($I$(6).convertMouseEvent$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component(source, event, destination));
this.focusComponent=focusComponent;
}, 1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
if (this.destination != null ) {
this.dispatchedEvent=true;
this.destination.dispatchEvent$java_awt_AWTEvent($I$(6).convertMouseEvent$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component(this.source, e, this.destination));
}});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if (this.destination != null ) this.destination.dispatchEvent$java_awt_AWTEvent($I$(6).convertMouseEvent$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component(this.source, e, this.destination));
this.removeFromSource$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
if (!$I$(6).isLeftMouseButton$java_awt_event_MouseEvent(e)) {
this.removeFromSource$();
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
if (!$I$(6).isLeftMouseButton$java_awt_event_MouseEvent(e)) {
this.removeFromSource$();
}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if (this.destination != null ) {
this.dispatchedEvent=true;
this.destination.dispatchEvent$java_awt_AWTEvent($I$(6).convertMouseEvent$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component(this.source, e, this.destination));
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.removeFromSource$();
});

Clazz.newMeth(C$, 'removeFromSource$',  function () {
if (this.source != null ) {
this.source.removeMouseListener$java_awt_event_MouseListener(this);
this.source.removeMouseMotionListener$java_awt_event_MouseMotionListener(this);
if (this.focusComponent != null  && this.focusComponent === this.destination   && !this.dispatchedEvent  && (Clazz.instanceOf(this.focusComponent, "javax.swing.JTextField")) ) {
(this.focusComponent).selectAll$();
}}this.source=this.destination=null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.CellEditorListener', 'java.awt.event.FocusListener', 'java.awt.event.KeyListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.beans.PropertyChangeListener', 'javax.swing.event.TreeExpansionListener', 'javax.swing.event.TreeModelListener', 'javax.swing.event.TreeSelectionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.prefix="";
this.typedString="";
this.lastTime=0;
},1);

C$.$fields$=[['Z',['dragPressDidSelection','dragStarted','valueChangedOnPress'],'J',['lastTime'],'S',['prefix','typedString'],'O',['pressedPath','javax.swing.tree.TreePath','pressedEvent','java.awt.event.MouseEvent']]]

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.getRowCount$() > 0  && this.b$['swingjs.plaf.JSTreeUI'].tree.hasFocus$()  && this.b$['swingjs.plaf.JSTreeUI'].tree.isEnabled$() ) {
if (e.isAltDown$() || $I$(7).isMenuShortcutKeyDown$java_awt_event_InputEvent(e) || p$3.isNavigationKey$java_awt_event_KeyEvent.apply(this, [e])  ) {
return;
}var startingFromSelection=true;
var c=e.getKeyChar$();
var time=e.getWhen$();
var startingRow=this.b$['swingjs.plaf.JSTreeUI'].tree.getLeadSelectionRow$();
if (Long.$lt(Long.$sub(time,this.lastTime),this.b$['swingjs.plaf.JSTreeUI'].timeFactor )) {
this.typedString+=c;
if ((this.prefix.length$() == 1) && (c == this.prefix.charAt$I(0)) ) {
++startingRow;
} else {
this.prefix=this.typedString;
}} else {
++startingRow;
this.typedString="" + c;
this.prefix=this.typedString;
}this.lastTime=time;
if (startingRow < 0 || startingRow >= this.b$['swingjs.plaf.JSTreeUI'].tree.getRowCount$() ) {
startingFromSelection=false;
startingRow=0;
}var path=this.b$['swingjs.plaf.JSTreeUI'].tree.getNextMatch$S$I$javax_swing_text_Position_Bias(this.prefix, startingRow, $I$(8).Forward);
if (path != null ) {
this.b$['swingjs.plaf.JSTreeUI'].tree.setSelectionPath$javax_swing_tree_TreePath(path);
var row=this.b$['swingjs.plaf.JSTreeUI'].getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, path]);
this.b$['swingjs.plaf.JSTreeUI'].ensureRowsAreVisible$I$I.apply(this.b$['swingjs.plaf.JSTreeUI'], [row, row]);
} else if (startingFromSelection) {
path=this.b$['swingjs.plaf.JSTreeUI'].tree.getNextMatch$S$I$javax_swing_text_Position_Bias(this.prefix, 0, $I$(8).Forward);
if (path != null ) {
this.b$['swingjs.plaf.JSTreeUI'].tree.setSelectionPath$javax_swing_tree_TreePath(path);
var row=this.b$['swingjs.plaf.JSTreeUI'].getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, path]);
this.b$['swingjs.plaf.JSTreeUI'].ensureRowsAreVisible$I$I.apply(this.b$['swingjs.plaf.JSTreeUI'], [row, row]);
}}}});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null  && p$3.isNavigationKey$java_awt_event_KeyEvent.apply(this, [e]) ) {
this.prefix="";
this.typedString="";
this.lastTime=0;
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'isNavigationKey$java_awt_event_KeyEvent',  function (event) {
var inputMap=this.b$['swingjs.plaf.JSTreeUI'].tree.getInputMap$I(1);
var key=$I$(9).getKeyStrokeForEvent$java_awt_event_KeyEvent(event);
return inputMap != null  && inputMap.get$javax_swing_KeyStroke(key) != null  ;
}, p$3);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
if (event.getSource$() === this.b$['swingjs.plaf.JSTreeUI'].treeSelectionModel ) {
this.b$['swingjs.plaf.JSTreeUI'].treeSelectionModel.resetRowSelection$();
} else if (event.getSource$() === this.b$['swingjs.plaf.JSTreeUI'].tree ) {
var changeName=event.getPropertyName$();
if (changeName == "leadSelectionPath") {
if (!this.b$['swingjs.plaf.JSTreeUI'].ignoreLAChange) {
this.b$['swingjs.plaf.JSTreeUI'].updateLeadSelectionRow$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
p$1.repaintPath$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [event.getOldValue$()]);
p$1.repaintPath$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [event.getNewValue$()]);
}} else if (changeName == "anchorSelectionPath") {
if (!this.b$['swingjs.plaf.JSTreeUI'].ignoreLAChange) {
p$1.repaintPath$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [event.getOldValue$()]);
p$1.repaintPath$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [event.getNewValue$()]);
}}if (changeName == "cellRenderer") {
this.b$['swingjs.plaf.JSTreeUI'].setCellRenderer$javax_swing_tree_TreeCellRenderer.apply(this.b$['swingjs.plaf.JSTreeUI'], [event.getNewValue$()]);
p$1.redoTheLayout.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
} else if (changeName == "model") {
this.b$['swingjs.plaf.JSTreeUI'].setModel$javax_swing_tree_TreeModel.apply(this.b$['swingjs.plaf.JSTreeUI'], [event.getNewValue$()]);
} else if (changeName == "rootVisible") {
this.b$['swingjs.plaf.JSTreeUI'].setRootVisible$Z.apply(this.b$['swingjs.plaf.JSTreeUI'], [(event.getNewValue$()).booleanValue$()]);
} else if (changeName == "showsRootHandles") {
this.b$['swingjs.plaf.JSTreeUI'].setShowsRootHandles$Z.apply(this.b$['swingjs.plaf.JSTreeUI'], [(event.getNewValue$()).booleanValue$()]);
} else if (changeName == "rowHeight") {
this.b$['swingjs.plaf.JSTreeUI'].setRowHeight$I.apply(this.b$['swingjs.plaf.JSTreeUI'], [(event.getNewValue$()).intValue$()]);
} else if (changeName == "cellEditor") {
this.b$['swingjs.plaf.JSTreeUI'].setCellEditor$javax_swing_tree_TreeCellEditor.apply(this.b$['swingjs.plaf.JSTreeUI'], [event.getNewValue$()]);
} else if (changeName == "editable") {
this.b$['swingjs.plaf.JSTreeUI'].setEditable$Z.apply(this.b$['swingjs.plaf.JSTreeUI'], [(event.getNewValue$()).booleanValue$()]);
} else if (changeName == "largeModel") {
this.b$['swingjs.plaf.JSTreeUI'].setLargeModel$Z.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree.isLargeModel$()]);
} else if (changeName == "selectionModel") {
this.b$['swingjs.plaf.JSTreeUI'].setSelectionModel$javax_swing_tree_TreeSelectionModel.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree.getSelectionModel$()]);
} else if (changeName === "font" ) {
this.b$['swingjs.plaf.JSTreeUI'].completeEditing$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
if (this.b$['swingjs.plaf.JSTreeUI'].treeState != null ) this.b$['swingjs.plaf.JSTreeUI'].treeState.invalidateSizes$();
this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
} else if (changeName === "componentOrientation" ) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree != null ) {
this.b$['swingjs.plaf.JSTreeUI'].leftToRight=$I$(7).isLeftToRight$java_awt_Component(this.b$['swingjs.plaf.JSTreeUI'].tree);
p$1.redoTheLayout.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
this.b$['swingjs.plaf.JSTreeUI'].tree.treeDidChange$();
var km=this.b$['swingjs.plaf.JSTreeUI'].getInputMap$I.apply(this.b$['swingjs.plaf.JSTreeUI'], [0]);
$I$(6).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.b$['swingjs.plaf.JSTreeUI'].tree, 0, km);
}} else if ("dropLocation" === changeName ) {
var oldValue=event.getOldValue$();
p$3.repaintDropLocation$javax_swing_JTree_DropLocation.apply(this, [oldValue]);
p$3.repaintDropLocation$javax_swing_JTree_DropLocation.apply(this, [this.b$['swingjs.plaf.JSTreeUI'].tree.getDropLocation$()]);
}}});

Clazz.newMeth(C$, 'repaintDropLocation$javax_swing_JTree_DropLocation',  function (loc) {
if (loc == null ) {
return;
}var r;
if (this.b$['swingjs.plaf.JSTreeUI'].isDropLine$javax_swing_JTree_DropLocation.apply(this.b$['swingjs.plaf.JSTreeUI'], [loc])) {
r=this.b$['swingjs.plaf.JSTreeUI'].getDropLineRect$javax_swing_JTree_DropLocation.apply(this.b$['swingjs.plaf.JSTreeUI'], [loc]);
} else {
r=this.b$['swingjs.plaf.JSTreeUI'].tree.getPathBounds$javax_swing_tree_TreePath(loc.getPath$());
}if (r != null ) {
this.b$['swingjs.plaf.JSTreeUI'].tree.repaint$java_awt_Rectangle(r);
}}, p$3);

Clazz.newMeth(C$, 'isActualPath$javax_swing_tree_TreePath$I$I',  function (path, x, y) {
if (path == null ) {
return false;
}var bounds=this.b$['swingjs.plaf.JSTreeUI'].getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, path]);
if (bounds == null  || y > (bounds.y + bounds.height) ) {
return false;
}return (x >= bounds.x) && (x <= (bounds.x + bounds.width)) ;
}, p$3);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(5).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.b$['swingjs.plaf.JSTreeUI'].tree)) {
return;
}if (this.b$['swingjs.plaf.JSTreeUI'].isEditing$javax_swing_JTree.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree]) && this.b$['swingjs.plaf.JSTreeUI'].tree.getInvokesStopCellEditing$() && !this.b$['swingjs.plaf.JSTreeUI'].stopEditing$javax_swing_JTree.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree])  ) {
return;
}this.b$['swingjs.plaf.JSTreeUI'].completeEditing$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
this.pressedPath=this.b$['swingjs.plaf.JSTreeUI'].getClosestPathForLocation$javax_swing_JTree$I$I.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, e.getX$(), e.getY$()]);
if (this.b$['swingjs.plaf.JSTreeUI'].tree.getDragEnabled$()) {
p$3.mousePressedDND$java_awt_event_MouseEvent.apply(this, [e]);
} else {
$I$(5).adjustFocus$javax_swing_JComponent(this.b$['swingjs.plaf.JSTreeUI'].tree);
this.handleSelection$java_awt_event_MouseEvent(e);
}});

Clazz.newMeth(C$, 'mousePressedDND$java_awt_event_MouseEvent',  function (e) {
this.pressedEvent=e;
var grabFocus=true;
this.dragStarted=false;
this.valueChangedOnPress=false;
if (grabFocus) {
$I$(5).adjustFocus$javax_swing_JComponent(this.b$['swingjs.plaf.JSTreeUI'].tree);
}this.handleSelection$java_awt_event_MouseEvent(e);
}, p$3);

Clazz.newMeth(C$, 'handleSelection$java_awt_event_MouseEvent',  function (e) {
if (this.pressedPath != null ) {
var bounds=this.b$['swingjs.plaf.JSTreeUI'].getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, this.pressedPath]);
if (bounds == null  || e.getY$() >= (bounds.y + bounds.height) ) {
return;
}if ($I$(6).isLeftMouseButton$java_awt_event_MouseEvent(e)) {
this.b$['swingjs.plaf.JSTreeUI'].checkForClickInExpandControl$javax_swing_tree_TreePath$I$I.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.pressedPath, e.getX$(), e.getY$()]);
}var x=e.getX$();
if (x >= bounds.x && x < (bounds.x + bounds.width) ) {
if (this.b$['swingjs.plaf.JSTreeUI'].tree.getDragEnabled$() || !this.b$['swingjs.plaf.JSTreeUI'].startEditing$javax_swing_tree_TreePath$java_awt_event_MouseEvent.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.pressedPath, e]) ) {
this.b$['swingjs.plaf.JSTreeUI'].selectPathForEvent$javax_swing_tree_TreePath$java_awt_event_MouseEvent.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.pressedPath, e]);
}}}});

Clazz.newMeth(C$, 'dragStarting$java_awt_event_MouseEvent',  function (me) {
this.dragStarted=true;
if ($I$(7).isMenuShortcutKeyDown$java_awt_event_InputEvent(me)) {
this.b$['swingjs.plaf.JSTreeUI'].tree.addSelectionPath$javax_swing_tree_TreePath(this.pressedPath);
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.pressedPath]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.pressedPath, true]);
}this.pressedEvent=null;
this.pressedPath=null;
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
if ($I$(5).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.b$['swingjs.plaf.JSTreeUI'].tree)) {
return;
}if (this.b$['swingjs.plaf.JSTreeUI'].tree.getDragEnabled$()) {
}});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if ($I$(5).shouldIgnore$java_awt_event_MouseEvent$javax_swing_JComponent(e, this.b$['swingjs.plaf.JSTreeUI'].tree)) {
return;
}if (this.b$['swingjs.plaf.JSTreeUI'].tree.getDragEnabled$()) {
p$3.mouseReleasedDND$java_awt_event_MouseEvent.apply(this, [e]);
}this.pressedEvent=null;
this.pressedPath=null;
});

Clazz.newMeth(C$, 'mouseReleasedDND$java_awt_event_MouseEvent',  function (e) {
var me=e;
if (me != null ) {
$I$(5).adjustFocus$javax_swing_JComponent(this.b$['swingjs.plaf.JSTreeUI'].tree);
if (!this.dragPressDidSelection) {
this.handleSelection$java_awt_event_MouseEvent(me);
}}if (!this.dragStarted) {
if (this.pressedPath != null  && !this.valueChangedOnPress  && p$3.isActualPath$javax_swing_tree_TreePath$I$I.apply(this, [this.pressedPath, this.pressedEvent.getX$(), this.pressedEvent.getY$()]) ) {
p$1.startEditingOnRelease$javax_swing_tree_TreePath$java_awt_event_MouseEvent$java_awt_event_MouseEvent.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.pressedPath, this.pressedEvent, e]);
}}}, p$3);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
this.focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'editingStopped$javax_swing_event_ChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSTreeUI'].completeEditing$Z$Z$Z.apply(this.b$['swingjs.plaf.JSTreeUI'], [false, false, true]);
});

Clazz.newMeth(C$, 'editingCanceled$javax_swing_event_ChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSTreeUI'].completeEditing$Z$Z$Z.apply(this.b$['swingjs.plaf.JSTreeUI'], [false, false, false]);
});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (event) {
this.valueChangedOnPress=true;
this.b$['swingjs.plaf.JSTreeUI'].completeEditing$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
if (this.b$['swingjs.plaf.JSTreeUI'].tree.getExpandsSelectedPaths$() && this.b$['swingjs.plaf.JSTreeUI'].treeSelectionModel != null  ) {
var paths=this.b$['swingjs.plaf.JSTreeUI'].treeSelectionModel.getSelectionPaths$();
if (paths != null ) {
for (var counter=paths.length - 1; counter >= 0; counter--) {
var path=paths[counter].getParentPath$();
var expand=true;
while (path != null ){
if (this.b$['swingjs.plaf.JSTreeUI'].treeModel.isLeaf$O(path.getLastPathComponent$())) {
expand=false;
path=null;
} else {
path=path.getParentPath$();
}}
if (expand) {
this.b$['swingjs.plaf.JSTreeUI'].tree.makeVisible$javax_swing_tree_TreePath(paths[counter]);
}}
}}var oldLead=p$1.getLeadSelectionPath.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
this.b$['swingjs.plaf.JSTreeUI'].lastSelectedRow=this.b$['swingjs.plaf.JSTreeUI'].tree.getMinSelectionRow$();
var lead=this.b$['swingjs.plaf.JSTreeUI'].tree.getSelectionModel$().getLeadSelectionPath$();
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [lead]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [lead]);
var changedPaths=event.getPaths$();
var nodeBounds;
var visRect=this.b$['swingjs.plaf.JSTreeUI'].tree.getVisibleRect$();
var paintPaths=true;
var nWidth=this.b$['swingjs.plaf.JSTreeUI'].tree.getWidth$();
if (changedPaths != null ) {
var counter;
var maxCounter=changedPaths.length;
if (maxCounter > 4) {
this.b$['swingjs.plaf.JSTreeUI'].tree.repaint$();
paintPaths=false;
} else {
for (counter=0; counter < maxCounter; counter++) {
nodeBounds=this.b$['swingjs.plaf.JSTreeUI'].getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, changedPaths[counter]]);
if (nodeBounds != null  && visRect.intersects$java_awt_Rectangle(nodeBounds) ) this.b$['swingjs.plaf.JSTreeUI'].tree.repaint$I$I$I$I(0, nodeBounds.y, nWidth, nodeBounds.height);
}
}}if (paintPaths) {
nodeBounds=this.b$['swingjs.plaf.JSTreeUI'].getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, oldLead]);
if (nodeBounds != null  && visRect.intersects$java_awt_Rectangle(nodeBounds) ) this.b$['swingjs.plaf.JSTreeUI'].tree.repaint$I$I$I$I(0, nodeBounds.y, nWidth, nodeBounds.height);
nodeBounds=this.b$['swingjs.plaf.JSTreeUI'].getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, lead]);
if (nodeBounds != null  && visRect.intersects$java_awt_Rectangle(nodeBounds) ) this.b$['swingjs.plaf.JSTreeUI'].tree.repaint$I$I$I$I(0, nodeBounds.y, nWidth, nodeBounds.height);
}});

Clazz.newMeth(C$, 'treeExpanded$javax_swing_event_TreeExpansionEvent',  function (event) {
if (event != null  && this.b$['swingjs.plaf.JSTreeUI'].tree != null  ) {
var path=event.getPath$();
this.b$['swingjs.plaf.JSTreeUI'].updateExpandedDescendants$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [path]);
}});

Clazz.newMeth(C$, 'treeCollapsed$javax_swing_event_TreeExpansionEvent',  function (event) {
if (event != null  && this.b$['swingjs.plaf.JSTreeUI'].tree != null  ) {
var path=event.getPath$();
this.b$['swingjs.plaf.JSTreeUI'].completeEditing$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
if (path != null  && this.b$['swingjs.plaf.JSTreeUI'].tree.isVisible$javax_swing_tree_TreePath(path) ) {
this.b$['swingjs.plaf.JSTreeUI'].treeState.setExpandedState$javax_swing_tree_TreePath$Z(path, false);
this.b$['swingjs.plaf.JSTreeUI'].updateLeadSelectionRow$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
}}});

Clazz.newMeth(C$, 'treeNodesChanged$javax_swing_event_TreeModelEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].treeState != null  && e != null  ) {
var parentPath=$I$(5,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.b$['swingjs.plaf.JSTreeUI'].getModel$.apply(this.b$['swingjs.plaf.JSTreeUI'], [])]);
var indices=e.getChildIndices$();
if (indices == null  || indices.length == 0 ) {
this.b$['swingjs.plaf.JSTreeUI'].treeState.treeNodesChanged$javax_swing_event_TreeModelEvent(e);
this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
} else if (this.b$['swingjs.plaf.JSTreeUI'].treeState.isExpanded$javax_swing_tree_TreePath(parentPath)) {
var minIndex=indices[0];
for (var i=indices.length - 1; i > 0; i--) {
minIndex=Math.min(indices[i], minIndex);
}
var minChild=this.b$['swingjs.plaf.JSTreeUI'].treeModel.getChild$O$I(parentPath.getLastPathComponent$(), minIndex);
var minPath=parentPath.pathByAddingChild$O(minChild);
var minBounds=this.b$['swingjs.plaf.JSTreeUI'].getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, minPath]);
this.b$['swingjs.plaf.JSTreeUI'].treeState.treeNodesChanged$javax_swing_event_TreeModelEvent(e);
p$1.updateSize0.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
var newMinBounds=this.b$['swingjs.plaf.JSTreeUI'].getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath.apply(this.b$['swingjs.plaf.JSTreeUI'], [this.b$['swingjs.plaf.JSTreeUI'].tree, minPath]);
if (minBounds == null  || newMinBounds == null  ) {
return;
}if (indices.length == 1 && newMinBounds.height == minBounds.height ) {
this.b$['swingjs.plaf.JSTreeUI'].tree.repaint$I$I$I$I(0, minBounds.y, this.b$['swingjs.plaf.JSTreeUI'].tree.getWidth$(), minBounds.height);
} else {
this.b$['swingjs.plaf.JSTreeUI'].tree.repaint$I$I$I$I(0, minBounds.y, this.b$['swingjs.plaf.JSTreeUI'].tree.getWidth$(), this.b$['swingjs.plaf.JSTreeUI'].tree.getHeight$() - minBounds.y);
}} else {
this.b$['swingjs.plaf.JSTreeUI'].treeState.treeNodesChanged$javax_swing_event_TreeModelEvent(e);
}}});

Clazz.newMeth(C$, 'treeNodesInserted$javax_swing_event_TreeModelEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].treeState != null  && e != null  ) {
this.b$['swingjs.plaf.JSTreeUI'].treeState.treeNodesInserted$javax_swing_event_TreeModelEvent(e);
this.b$['swingjs.plaf.JSTreeUI'].updateLeadSelectionRow$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
var path=$I$(5,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.b$['swingjs.plaf.JSTreeUI'].getModel$.apply(this.b$['swingjs.plaf.JSTreeUI'], [])]);
if (this.b$['swingjs.plaf.JSTreeUI'].treeState.isExpanded$javax_swing_tree_TreePath(path)) {
this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
} else {
var indices=e.getChildIndices$();
var childCount=this.b$['swingjs.plaf.JSTreeUI'].treeModel.getChildCount$O(path.getLastPathComponent$());
if (indices != null  && (childCount - indices.length) == 0 ) this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
}}});

Clazz.newMeth(C$, 'treeNodesRemoved$javax_swing_event_TreeModelEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].treeState != null  && e != null  ) {
this.b$['swingjs.plaf.JSTreeUI'].treeState.treeNodesRemoved$javax_swing_event_TreeModelEvent(e);
this.b$['swingjs.plaf.JSTreeUI'].updateLeadSelectionRow$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
var path=$I$(5,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.b$['swingjs.plaf.JSTreeUI'].getModel$.apply(this.b$['swingjs.plaf.JSTreeUI'], [])]);
if (this.b$['swingjs.plaf.JSTreeUI'].treeState.isExpanded$javax_swing_tree_TreePath(path) || this.b$['swingjs.plaf.JSTreeUI'].treeModel.getChildCount$O(path.getLastPathComponent$()) == 0 ) this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
}});

Clazz.newMeth(C$, 'treeStructureChanged$javax_swing_event_TreeModelEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTreeUI'].treeState != null  && e != null  ) {
this.b$['swingjs.plaf.JSTreeUI'].treeState.treeStructureChanged$javax_swing_event_TreeModelEvent(e);
this.b$['swingjs.plaf.JSTreeUI'].updateLeadSelectionRow$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
var pPath=$I$(5,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.b$['swingjs.plaf.JSTreeUI'].getModel$.apply(this.b$['swingjs.plaf.JSTreeUI'], [])]);
if (pPath != null ) {
pPath=pPath.getParentPath$();
}if (pPath == null  || this.b$['swingjs.plaf.JSTreeUI'].treeState.isExpanded$javax_swing_tree_TreePath(pPath) ) this.b$['swingjs.plaf.JSTreeUI'].updateSize$.apply(this.b$['swingjs.plaf.JSTreeUI'], []);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTreeUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (key) {
;C$.superclazz.c$$S.apply(this,[key]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isEnabled$O',  function (o) {
if (Clazz.instanceOf(o, "javax.swing.JTree")) {
if (this.getName$() == "cancel") {
return (o).isEditing$();
}}return true;
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var tree=e.getSource$();
var ui=tree.getUI$();
if (ui == null ) {
return;
}var key=this.getName$();
if (key == "selectPrevious") {
p$2.increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, false, true]);
} else if (key == "selectPreviousChangeLead") {
p$2.increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, false, false]);
} else if (key == "selectPreviousExtendSelection") {
p$2.increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, true, true]);
} else if (key == "selectNext") {
p$2.increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, false, true]);
} else if (key == "selectNextChangeLead") {
p$2.increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, false, false]);
} else if (key == "selectNextExtendSelection") {
p$2.increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, true, true]);
} else if (key == "selectChild") {
p$2.traverse$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z.apply(this, [tree, ui, 1, true]);
} else if (key == "selectChildChangeLead") {
p$2.traverse$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z.apply(this, [tree, ui, 1, false]);
} else if (key == "selectParent") {
p$2.traverse$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z.apply(this, [tree, ui, -1, true]);
} else if (key == "selectParentChangeLead") {
p$2.traverse$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z.apply(this, [tree, ui, -1, false]);
} else if (key == "scrollUpChangeSelection") {
p$2.page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, false, true]);
} else if (key == "scrollUpChangeLead") {
p$2.page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, false, false]);
} else if (key == "scrollUpExtendSelection") {
p$2.page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, true, true]);
} else if (key == "scrollDownChangeSelection") {
p$2.page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, false, true]);
} else if (key == "scrollDownExtendSelection") {
p$2.page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, true, true]);
} else if (key == "scrollDownChangeLead") {
p$2.page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, false, false]);
} else if (key == "selectFirst") {
p$2.home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, false, true]);
} else if (key == "selectFirstChangeLead") {
p$2.home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, false, false]);
} else if (key == "selectFirstExtendSelection") {
p$2.home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, true, true]);
} else if (key == "selectLast") {
p$2.home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, false, true]);
} else if (key == "selectLastChangeLead") {
p$2.home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, false, false]);
} else if (key == "selectLastExtendSelection") {
p$2.home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, true, true]);
} else if (key == "toggle") {
p$2.toggle$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply(this, [tree, ui]);
} else if (key == "cancel") {
p$2.cancelEditing$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply(this, [tree, ui]);
} else if (key == "startEditing") {
p$2.startEditing$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply(this, [tree, ui]);
} else if (key == "selectAll") {
p$2.selectAll$javax_swing_JTree$swingjs_plaf_JSTreeUI$Z.apply(this, [tree, ui, true]);
} else if (key == "clearSelection") {
p$2.selectAll$javax_swing_JTree$swingjs_plaf_JSTreeUI$Z.apply(this, [tree, ui, false]);
} else if (key == "addToSelection") {
if (ui.getRowCount$javax_swing_JTree(tree) > 0) {
var lead=ui.getLeadSelectionRow$();
if (!tree.isRowSelected$I(lead)) {
var aPath=p$1.getAnchorSelectionPath.apply(ui, []);
tree.addSelectionRow$I(lead);
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [aPath]);
}}} else if (key == "toggleAndAnchor") {
if (ui.getRowCount$javax_swing_JTree(tree) > 0) {
var lead=ui.getLeadSelectionRow$();
var lPath=p$1.getLeadSelectionPath.apply(ui, []);
if (!tree.isRowSelected$I(lead)) {
tree.addSelectionRow$I(lead);
} else {
tree.removeSelectionRow$I(lead);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(ui, [lPath]);
}p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [lPath]);
}} else if (key == "extendTo") {
p$2.extendSelection$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply(this, [tree, ui]);
} else if (key == "moveSelectionTo") {
if (ui.getRowCount$javax_swing_JTree(tree) > 0) {
var lead=ui.getLeadSelectionRow$();
tree.setSelectionInterval$I$I(lead, lead);
}} else if (key == "scrollLeft") {
p$2.scroll$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$I.apply(this, [tree, ui, 0, -10]);
} else if (key == "scrollRight") {
p$2.scroll$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$I.apply(this, [tree, ui, 0, 10]);
} else if (key == "scrollLeftExtendSelection") {
p$2.scrollChangeSelection$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, true, true]);
} else if (key == "scrollRightExtendSelection") {
p$2.scrollChangeSelection$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, true, true]);
} else if (key == "scrollRightChangeLead") {
p$2.scrollChangeSelection$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, 1, false, false]);
} else if (key == "scrollLeftChangeLead") {
p$2.scrollChangeSelection$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z.apply(this, [tree, ui, -1, false, false]);
} else if (key == "expand") {
p$2.expand$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply(this, [tree, ui]);
} else if (key == "collapse") {
p$2.collapse$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply(this, [tree, ui]);
} else if (key == "moveSelectionToParent") {
p$2.moveSelectionToParent$javax_swing_JTree$swingjs_plaf_JSTreeUI.apply(this, [tree, ui]);
}});

Clazz.newMeth(C$, 'scrollChangeSelection$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z',  function (tree, ui, direction, addToSelection, changeSelection) {
var rowCount;
if ((rowCount=ui.getRowCount$javax_swing_JTree(tree)) > 0 && ui.treeSelectionModel != null  ) {
var newPath;
var visRect=tree.getVisibleRect$();
if (direction == -1) {
newPath=ui.getClosestPathForLocation$javax_swing_JTree$I$I(tree, visRect.x, visRect.y);
visRect.x=Math.max(0, visRect.x - visRect.width);
} else {
visRect.x=Math.min(Math.max(0, tree.getWidth$() - visRect.width), visRect.x + visRect.width);
newPath=ui.getClosestPathForLocation$javax_swing_JTree$I$I(tree, visRect.x, visRect.y + visRect.height);
}tree.scrollRectToVisible$java_awt_Rectangle(visRect);
if (addToSelection) {
p$1.extendSelection$javax_swing_tree_TreePath.apply(ui, [newPath]);
} else if (changeSelection) {
tree.setSelectionPath$javax_swing_tree_TreePath(newPath);
} else {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(ui, [newPath, true]);
}}}, p$2);

Clazz.newMeth(C$, 'scroll$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$I',  function (component, ui, direction, amount) {
var visRect=component.getVisibleRect$();
var size=component.getSize$();
if (direction == 0) {
visRect.x+=amount;
visRect.x=Math.max(0, visRect.x);
visRect.x=Math.min(Math.max(0, size.width - visRect.width), visRect.x);
} else {
visRect.y+=amount;
visRect.y=Math.max(0, visRect.y);
visRect.y=Math.min(Math.max(0, size.width - visRect.height), visRect.y);
}component.scrollRectToVisible$java_awt_Rectangle(visRect);
}, p$2);

Clazz.newMeth(C$, 'extendSelection$javax_swing_JTree$swingjs_plaf_JSTreeUI',  function (tree, ui) {
if (ui.getRowCount$javax_swing_JTree(tree) > 0) {
var lead=ui.getLeadSelectionRow$();
if (lead != -1) {
var leadP=p$1.getLeadSelectionPath.apply(ui, []);
var aPath=p$1.getAnchorSelectionPath.apply(ui, []);
var aRow=ui.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(tree, aPath);
if (aRow == -1) aRow=0;
tree.setSelectionInterval$I$I(aRow, lead);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(ui, [leadP]);
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [aPath]);
}}}, p$2);

Clazz.newMeth(C$, 'selectAll$javax_swing_JTree$swingjs_plaf_JSTreeUI$Z',  function (tree, ui, selectAll) {
var rowCount=ui.getRowCount$javax_swing_JTree(tree);
if (rowCount > 0) {
if (selectAll) {
if (tree.getSelectionModel$().getSelectionMode$() == 1) {
var lead=ui.getLeadSelectionRow$();
if (lead != -1) {
tree.setSelectionRow$I(lead);
} else if (tree.getMinSelectionRow$() == -1) {
tree.setSelectionRow$I(0);
ui.ensureRowsAreVisible$I$I(0, 0);
}return;
}var lastPath=p$1.getLeadSelectionPath.apply(ui, []);
var aPath=p$1.getAnchorSelectionPath.apply(ui, []);
if (lastPath != null  && !tree.isVisible$javax_swing_tree_TreePath(lastPath) ) {
lastPath=null;
}tree.setSelectionInterval$I$I(0, rowCount - 1);
if (lastPath != null ) {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(ui, [lastPath]);
}if (aPath != null  && tree.isVisible$javax_swing_tree_TreePath(aPath) ) {
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [aPath]);
}} else {
var lastPath=p$1.getLeadSelectionPath.apply(ui, []);
var aPath=p$1.getAnchorSelectionPath.apply(ui, []);
tree.clearSelection$();
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [aPath]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(ui, [lastPath]);
}}}, p$2);

Clazz.newMeth(C$, 'startEditing$javax_swing_JTree$swingjs_plaf_JSTreeUI',  function (tree, ui) {
var lead=p$1.getLeadSelectionPath.apply(ui, []);
var editRow=(lead != null ) ? ui.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(tree, lead) : -1;
if (editRow != -1) {
tree.startEditingAtPath$javax_swing_tree_TreePath(lead);
}}, p$2);

Clazz.newMeth(C$, 'cancelEditing$javax_swing_JTree$swingjs_plaf_JSTreeUI',  function (tree, ui) {
tree.cancelEditing$();
}, p$2);

Clazz.newMeth(C$, 'toggle$javax_swing_JTree$swingjs_plaf_JSTreeUI',  function (tree, ui) {
var selRow=ui.getLeadSelectionRow$();
if (selRow != -1 && !ui.isLeaf$I(selRow) ) {
var aPath=p$1.getAnchorSelectionPath.apply(ui, []);
var lPath=p$1.getLeadSelectionPath.apply(ui, []);
ui.toggleExpandState$javax_swing_tree_TreePath(ui.getPathForRow$javax_swing_JTree$I(tree, selRow));
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [aPath]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(ui, [lPath]);
}}, p$2);

Clazz.newMeth(C$, 'expand$javax_swing_JTree$swingjs_plaf_JSTreeUI',  function (tree, ui) {
var selRow=ui.getLeadSelectionRow$();
tree.expandRow$I(selRow);
}, p$2);

Clazz.newMeth(C$, 'collapse$javax_swing_JTree$swingjs_plaf_JSTreeUI',  function (tree, ui) {
var selRow=ui.getLeadSelectionRow$();
tree.collapseRow$I(selRow);
}, p$2);

Clazz.newMeth(C$, 'increment$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z',  function (tree, ui, direction, addToSelection, changeSelection) {
if (!addToSelection && !changeSelection && tree.getSelectionModel$().getSelectionMode$() != 4  ) {
changeSelection=true;
}var rowCount;
if (ui.treeSelectionModel != null  && (rowCount=tree.getRowCount$()) > 0 ) {
var selIndex=ui.getLeadSelectionRow$();
var newIndex;
if (selIndex == -1) {
if (direction == 1) newIndex=0;
 else newIndex=rowCount - 1;
} else newIndex=Math.min(rowCount - 1, Math.max(0, (selIndex + direction)));
if (addToSelection && ui.treeSelectionModel.getSelectionMode$() != 1 ) {
p$1.extendSelection$javax_swing_tree_TreePath.apply(ui, [tree.getPathForRow$I(newIndex)]);
} else if (changeSelection) {
tree.setSelectionInterval$I$I(newIndex, newIndex);
} else {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(ui, [tree.getPathForRow$I(newIndex), true]);
}ui.ensureRowsAreVisible$I$I(newIndex, newIndex);
ui.lastSelectedRow=newIndex;
}}, p$2);

Clazz.newMeth(C$, 'traverse$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z',  function (tree, ui, direction, changeSelection) {
if (!changeSelection && tree.getSelectionModel$().getSelectionMode$() != 4 ) {
changeSelection=true;
}var rowCount;
if ((rowCount=tree.getRowCount$()) > 0) {
var minSelIndex=ui.getLeadSelectionRow$();
var newIndex;
if (minSelIndex == -1) newIndex=0;
 else {
if (direction == 1) {
var minSelPath=ui.getPathForRow$javax_swing_JTree$I(tree, minSelIndex);
var childCount=tree.getModel$().getChildCount$O(minSelPath.getLastPathComponent$());
newIndex=-1;
if (!ui.isLeaf$I(minSelIndex)) {
if (!tree.isExpanded$I(minSelIndex)) {
ui.toggleExpandState$javax_swing_tree_TreePath(minSelPath);
} else if (childCount > 0) {
newIndex=Math.min(minSelIndex + 1, rowCount - 1);
}}} else {
if (!ui.isLeaf$I(minSelIndex) && tree.isExpanded$I(minSelIndex) ) {
ui.toggleExpandState$javax_swing_tree_TreePath(ui.getPathForRow$javax_swing_JTree$I(tree, minSelIndex));
newIndex=-1;
} else {
var path=ui.getPathForRow$javax_swing_JTree$I(tree, minSelIndex);
if (path != null  && path.getPathCount$() > 1 ) {
newIndex=ui.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(tree, path.getParentPath$());
} else newIndex=-1;
}}}if (newIndex != -1) {
if (changeSelection) {
tree.setSelectionInterval$I$I(newIndex, newIndex);
} else {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(ui, [ui.getPathForRow$javax_swing_JTree$I(tree, newIndex), true]);
}ui.ensureRowsAreVisible$I$I(newIndex, newIndex);
}}}, p$2);

Clazz.newMeth(C$, 'moveSelectionToParent$javax_swing_JTree$swingjs_plaf_JSTreeUI',  function (tree, ui) {
var selRow=ui.getLeadSelectionRow$();
var path=ui.getPathForRow$javax_swing_JTree$I(tree, selRow);
if (path != null  && path.getPathCount$() > 1 ) {
var newIndex=ui.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(tree, path.getParentPath$());
if (newIndex != -1) {
tree.setSelectionInterval$I$I(newIndex, newIndex);
ui.ensureRowsAreVisible$I$I(newIndex, newIndex);
}}}, p$2);

Clazz.newMeth(C$, 'page$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z',  function (tree, ui, direction, addToSelection, changeSelection) {
if (!addToSelection && !changeSelection && tree.getSelectionModel$().getSelectionMode$() != 4  ) {
changeSelection=true;
}var rowCount;
if ((rowCount=ui.getRowCount$javax_swing_JTree(tree)) > 0 && ui.treeSelectionModel != null  ) {
var maxSize=tree.getSize$();
var lead=p$1.getLeadSelectionPath.apply(ui, []);
var newPath;
var visRect=tree.getVisibleRect$();
if (direction == -1) {
newPath=ui.getClosestPathForLocation$javax_swing_JTree$I$I(tree, visRect.x, visRect.y);
if (newPath.equals$O(lead)) {
visRect.y=Math.max(0, visRect.y - visRect.height);
newPath=tree.getClosestPathForLocation$I$I(visRect.x, visRect.y);
}} else {
visRect.y=Math.min(maxSize.height, visRect.y + visRect.height - 1);
newPath=tree.getClosestPathForLocation$I$I(visRect.x, visRect.y);
if (newPath.equals$O(lead)) {
visRect.y=Math.min(maxSize.height, visRect.y + visRect.height - 1);
newPath=tree.getClosestPathForLocation$I$I(visRect.x, visRect.y);
}}var newRect=ui.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(tree, newPath);
if (newRect != null ) {
newRect.x=visRect.x;
newRect.width=visRect.width;
if (direction == -1) {
newRect.height=visRect.height;
} else {
newRect.y-=(visRect.height - newRect.height);
newRect.height=visRect.height;
}if (addToSelection) {
p$1.extendSelection$javax_swing_tree_TreePath.apply(ui, [newPath]);
} else if (changeSelection) {
tree.setSelectionPath$javax_swing_tree_TreePath(newPath);
} else {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(ui, [newPath, true]);
}tree.scrollRectToVisible$java_awt_Rectangle(newRect);
}}}, p$2);

Clazz.newMeth(C$, 'home$javax_swing_JTree$swingjs_plaf_JSTreeUI$I$Z$Z',  function (tree, ui, direction, addToSelection, changeSelection) {
if (!addToSelection && !changeSelection && tree.getSelectionModel$().getSelectionMode$() != 4  ) {
changeSelection=true;
}var rowCount=ui.getRowCount$javax_swing_JTree(tree);
if (rowCount > 0) {
if (direction == -1) {
ui.ensureRowsAreVisible$I$I(0, 0);
if (addToSelection) {
var aPath=p$1.getAnchorSelectionPath.apply(ui, []);
var aRow=(aPath == null ) ? -1 : ui.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(tree, aPath);
if (aRow == -1) {
tree.setSelectionInterval$I$I(0, 0);
} else {
tree.setSelectionInterval$I$I(0, aRow);
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [aPath]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(ui, [ui.getPathForRow$javax_swing_JTree$I(tree, 0)]);
}} else if (changeSelection) {
tree.setSelectionInterval$I$I(0, 0);
} else {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(ui, [ui.getPathForRow$javax_swing_JTree$I(tree, 0), true]);
}} else {
ui.ensureRowsAreVisible$I$I(rowCount - 1, rowCount - 1);
if (addToSelection) {
var aPath=p$1.getAnchorSelectionPath.apply(ui, []);
var aRow=(aPath == null ) ? -1 : ui.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(tree, aPath);
if (aRow == -1) {
tree.setSelectionInterval$I$I(rowCount - 1, rowCount - 1);
} else {
tree.setSelectionInterval$I$I(aRow, rowCount - 1);
p$1.setAnchorSelectionPath$javax_swing_tree_TreePath.apply(ui, [aPath]);
p$1.setLeadSelectionPath$javax_swing_tree_TreePath.apply(ui, [ui.getPathForRow$javax_swing_JTree$I(tree, rowCount - 1)]);
}} else if (changeSelection) {
tree.setSelectionInterval$I$I(rowCount - 1, rowCount - 1);
} else {
p$1.setLeadSelectionPath$javax_swing_tree_TreePath$Z.apply(ui, [ui.getPathForRow$javax_swing_JTree$I(tree, rowCount - 1), true]);
}if (ui.isLargeModel$()) {
$I$(6,"invokeLater$Runnable",[((P$.JSTreeUI$Actions$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSTreeUI$Actions$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.ui.ensureRowsAreVisible$I$I(this.$finals$.rowCount - 1, this.$finals$.rowCount - 1);
});
})()
), Clazz.new_(P$.JSTreeUI$Actions$1.$init$,[this, {ui:ui,rowCount:rowCount}]))]);
}}}}, p$2);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

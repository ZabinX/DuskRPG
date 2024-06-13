(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.Vector','javax.swing.DropMode','javax.swing.tree.DefaultMutableTreeNode','javax.swing.tree.DefaultTreeModel',['javax.swing.JTree','.DynamicUtilTreeNode'],'java.util.Stack','java.util.Hashtable','javax.swing.tree.DefaultTreeSelectionModel','javax.swing.SwingUtilities','javax.swing.tree.TreePath',['javax.swing.JTree','.DropLocation'],'sun.swing.SwingUtilities2',['sun.swing.SwingUtilities2','.Section'],['javax.swing.JTree','.TreeTimer'],'java.awt.event.MouseEvent','java.util.Collections',['javax.swing.JTree','.EmptySelectionModel'],'javax.swing.event.TreeExpansionListener','javax.swing.event.TreeWillExpandListener','javax.swing.event.TreeExpansionEvent','javax.swing.event.TreeSelectionListener',['javax.swing.JTree','.TreeSelectionRedirector'],['javax.swing.text.Position','.Bias'],'java.awt.Dimension',['javax.swing.JTree','.TreeModelHandler']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTree", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', 'javax.swing.Scrollable');
C$.$classes$=[['DropLocation',25],['TreeTimer',2],['EmptySelectionModel',12],['TreeSelectionRedirector',4],['TreeModelHandler',4],['DynamicUtilTreeNode',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rowHeightSet=false;
this.showsRootHandlesSet=false;
this.scrollsOnExpandSet=false;
this.dropMode=$I$(2).USE_SELECTION;
this.expandRow=-1;
},1);

C$.$fields$=[['Z',['rootVisible','rowHeightSet','showsRootHandles','showsRootHandlesSet','editable','largeModel','invokesStopCellEditing','scrollsOnExpand','scrollsOnExpandSet','expandsSelectedPaths','settingUI','dragEnabled'],'I',['rowHeight','visibleRowCount','toggleClickCount','expandRow'],'O',['treeModel','javax.swing.tree.TreeModel','selectionModel','javax.swing.tree.TreeSelectionModel','cellRenderer','javax.swing.tree.TreeCellRenderer','expandedState','java.util.Hashtable','selectionRedirector','javax.swing.JTree.TreeSelectionRedirector','cellEditor','javax.swing.tree.TreeCellEditor','treeModelListener','javax.swing.event.TreeModelListener','expandedStack','java.util.Stack','leadPath','javax.swing.tree.TreePath','+anchorPath','dropMode','javax.swing.DropMode','dropLocation','javax.swing.JTree.DropLocation','dropTimer','javax.swing.JTree.TreeTimer','uiTreeExpansionListener','javax.swing.event.TreeExpansionListener']]
,['I',['TEMP_STACK_SIZE']]]

Clazz.newMeth(C$, 'getDefaultTreeModel$',  function () {
var root=Clazz.new_($I$(3,1).c$$O,["JTree"]);
var parent;
parent=Clazz.new_($I$(3,1).c$$O,["colors"]);
root.add$javax_swing_tree_MutableTreeNode(parent);
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["blue"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["violet"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["red"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["yellow"]));
parent=Clazz.new_($I$(3,1).c$$O,["sports"]);
root.add$javax_swing_tree_MutableTreeNode(parent);
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["basketball"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["soccer"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["football"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["hockey"]));
parent=Clazz.new_($I$(3,1).c$$O,["food"]);
root.add$javax_swing_tree_MutableTreeNode(parent);
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["hot dogs"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["pizza"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["ravioli"]));
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_($I$(3,1).c$$O,["bananas"]));
return Clazz.new_($I$(4,1).c$$javax_swing_tree_TreeNode,[root]);
}, 1);

Clazz.newMeth(C$, 'createTreeModel$O',  function (value) {
var root;
if ((Clazz.instanceOf(value, Clazz.array(java.lang.Object, -1))) || (Clazz.instanceOf(value, "java.util.Hashtable")) || (Clazz.instanceOf(value, "java.util.Vector"))  ) {
root=Clazz.new_($I$(3,1).c$$O,["root"]);
$I$(5).createChildren$javax_swing_tree_DefaultMutableTreeNode$O(root, value);
} else {
root=Clazz.new_($I$(5,1).c$$O$O,["root", value]);
}return Clazz.new_($I$(4,1).c$$javax_swing_tree_TreeNode$Z,[root, false]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_tree_TreeModel.apply(this, [C$.getDefaultTreeModel$()]);
}, 1);

Clazz.newMeth(C$, 'c$$OA',  function (value) {
C$.c$$javax_swing_tree_TreeModel.apply(this, [C$.createTreeModel$O(value)]);
this.setRootVisible$Z(false);
this.setShowsRootHandles$Z(true);
p$1.expandRoot.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector',  function (value) {
C$.c$$javax_swing_tree_TreeModel.apply(this, [C$.createTreeModel$O(value)]);
this.setRootVisible$Z(false);
this.setShowsRootHandles$Z(true);
p$1.expandRoot.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Hashtable',  function (value) {
C$.c$$javax_swing_tree_TreeModel.apply(this, [C$.createTreeModel$O(value)]);
this.setRootVisible$Z(false);
this.setShowsRootHandles$Z(true);
p$1.expandRoot.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode',  function (root) {
C$.c$$javax_swing_tree_TreeNode$Z.apply(this, [root, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode$Z',  function (root, asksAllowsChildren) {
C$.c$$javax_swing_tree_TreeModel.apply(this, [Clazz.new_($I$(4,1).c$$javax_swing_tree_TreeNode$Z,[root, asksAllowsChildren])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeModel',  function (newModel) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.秘setPaintsSelf$I(2);
this.expandedStack=Clazz.new_($I$(6,1));
this.toggleClickCount=2;
this.expandedState=Clazz.new_($I$(7,1));
this.setLayout$java_awt_LayoutManager(null);
this.rowHeight=16;
this.visibleRowCount=20;
this.rootVisible=true;
this.selectionModel=Clazz.new_($I$(8,1));
this.cellRenderer=null;
this.scrollsOnExpand=true;
this.setOpaque$Z(true);
this.expandsSelectedPaths=true;
this.updateUI$();
this.setModel$javax_swing_tree_TreeModel(newModel);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "TreeUI";
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_TreeUI',  function (ui) {
if (this.ui !== ui ) {
this.settingUI=true;
this.uiTreeExpansionListener=null;
try {
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
} finally {
this.settingUI=false;
}
}});

Clazz.newMeth(C$, 'updateUI$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
$I$(9,"updateRendererOrEditorUI$O",[this.getCellRenderer$()]);
$I$(9,"updateRendererOrEditorUI$O",[this.getCellEditor$()]);
});

Clazz.newMeth(C$, 'getCellRenderer$',  function () {
return this.cellRenderer;
});

Clazz.newMeth(C$, 'setCellRenderer$javax_swing_tree_TreeCellRenderer',  function (x) {
var oldValue=this.cellRenderer;
this.cellRenderer=x;
this.firePropertyChange$S$O$O("cellRenderer", oldValue, this.cellRenderer);
this.invalidate$();
});

Clazz.newMeth(C$, 'setEditable$Z',  function (flag) {
var oldValue=this.editable;
this.editable=flag;
this.firePropertyChange$S$Z$Z("editable", oldValue, flag);
});

Clazz.newMeth(C$, 'isEditable$',  function () {
return this.editable;
});

Clazz.newMeth(C$, 'setCellEditor$javax_swing_tree_TreeCellEditor',  function (cellEditor) {
var oldEditor=this.cellEditor;
this.cellEditor=cellEditor;
this.firePropertyChange$S$O$O("cellEditor", oldEditor, cellEditor);
this.invalidate$();
});

Clazz.newMeth(C$, 'getCellEditor$',  function () {
return this.cellEditor;
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.treeModel;
});

Clazz.newMeth(C$, 'setModel$javax_swing_tree_TreeModel',  function (newModel) {
this.clearSelection$();
var oldModel=this.treeModel;
if (this.treeModel != null  && this.treeModelListener != null  ) this.treeModel.removeTreeModelListener$javax_swing_event_TreeModelListener(this.treeModelListener);
this.treeModel=newModel;
this.clearToggledPaths$();
if (this.treeModel != null ) {
if (this.treeModelListener == null ) this.treeModelListener=this.createTreeModelListener$();
if (this.treeModelListener != null ) this.treeModel.addTreeModelListener$javax_swing_event_TreeModelListener(this.treeModelListener);
if (this.treeModel.getRoot$() != null  && !this.treeModel.isLeaf$O(this.treeModel.getRoot$()) ) {
this.expandedState.put$O$O(Clazz.new_([this.treeModel.getRoot$()],$I$(10,1).c$$O), Boolean.TRUE);
}}this.firePropertyChange$S$O$O("model", oldModel, this.treeModel);
this.invalidate$();
});

Clazz.newMeth(C$, 'isRootVisible$',  function () {
return this.rootVisible;
});

Clazz.newMeth(C$, 'setRootVisible$Z',  function (rootVisible) {
var oldValue=this.rootVisible;
this.rootVisible=rootVisible;
this.firePropertyChange$S$Z$Z("rootVisible", oldValue, this.rootVisible);
});

Clazz.newMeth(C$, 'setShowsRootHandles$Z',  function (newValue) {
var oldValue=this.showsRootHandles;
this.showsRootHandles=newValue;
this.showsRootHandlesSet=true;
this.firePropertyChange$S$Z$Z("showsRootHandles", oldValue, this.showsRootHandles);
this.invalidate$();
});

Clazz.newMeth(C$, 'getShowsRootHandles$',  function () {
return this.showsRootHandles;
});

Clazz.newMeth(C$, 'setRowHeight$I',  function (rowHeight) {
var oldValue=this.rowHeight;
this.rowHeight=rowHeight;
this.rowHeightSet=true;
this.firePropertyChange$S$I$I("rowHeight", oldValue, this.rowHeight);
this.invalidate$();
});

Clazz.newMeth(C$, 'getRowHeight$',  function () {
return this.rowHeight;
});

Clazz.newMeth(C$, 'isFixedRowHeight$',  function () {
return (this.rowHeight > 0);
});

Clazz.newMeth(C$, 'setLargeModel$Z',  function (newValue) {
var oldValue=this.largeModel;
this.largeModel=newValue;
this.firePropertyChange$S$Z$Z("largeModel", oldValue, newValue);
});

Clazz.newMeth(C$, 'isLargeModel$',  function () {
return this.largeModel;
});

Clazz.newMeth(C$, 'setInvokesStopCellEditing$Z',  function (newValue) {
var oldValue=this.invokesStopCellEditing;
this.invokesStopCellEditing=newValue;
this.firePropertyChange$S$Z$Z("invokesStopCellEditing", oldValue, newValue);
});

Clazz.newMeth(C$, 'getInvokesStopCellEditing$',  function () {
return this.invokesStopCellEditing;
});

Clazz.newMeth(C$, 'setScrollsOnExpand$Z',  function (newValue) {
var oldValue=this.scrollsOnExpand;
this.scrollsOnExpand=newValue;
this.scrollsOnExpandSet=true;
this.firePropertyChange$S$Z$Z("scrollsOnExpand", oldValue, newValue);
});

Clazz.newMeth(C$, 'getScrollsOnExpand$',  function () {
return this.scrollsOnExpand;
});

Clazz.newMeth(C$, 'setToggleClickCount$I',  function (clickCount) {
var oldCount=this.toggleClickCount;
this.toggleClickCount=clickCount;
this.firePropertyChange$S$I$I("toggleClickCount", oldCount, clickCount);
});

Clazz.newMeth(C$, 'getToggleClickCount$',  function () {
return this.toggleClickCount;
});

Clazz.newMeth(C$, 'setExpandsSelectedPaths$Z',  function (newValue) {
var oldValue=this.expandsSelectedPaths;
this.expandsSelectedPaths=newValue;
this.firePropertyChange$S$Z$Z("expandsSelectedPaths", oldValue, newValue);
});

Clazz.newMeth(C$, 'getExpandsSelectedPaths$',  function () {
return this.expandsSelectedPaths;
});

Clazz.newMeth(C$, 'setDragEnabled$Z',  function (b) {
this.dragEnabled=b;
});

Clazz.newMeth(C$, 'getDragEnabled$',  function () {
return this.dragEnabled;
});

Clazz.newMeth(C$, 'setDropMode$javax_swing_DropMode',  function (dropMode) {
if (dropMode != null ) {
switch (dropMode) {
case $I$(2).USE_SELECTION:
case $I$(2).ON:
case $I$(2).INSERT:
case $I$(2).ON_OR_INSERT:
this.dropMode=dropMode;
return;
}
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[dropMode + ": Unsupported drop mode for tree"]);
});

Clazz.newMeth(C$, 'getDropMode$',  function () {
return this.dropMode;
});

Clazz.newMeth(C$, 'dropLocationForPoint$java_awt_Point',  function (p) {
var location=null;
var row=this.getClosestRowForLocation$I$I(p.x, p.y);
var bounds=this.getRowBounds$I(row);
var model=this.getModel$();
var root=(model == null ) ? null : model.getRoot$();
var rootPath=(root == null ) ? null : Clazz.new_($I$(10,1).c$$O,[root]);
var child=null;
var parent=null;
var outside=row == -1 || p.y < bounds.y  || p.y >= bounds.y + bounds.height ;
switch (this.dropMode) {
case $I$(2).USE_SELECTION:
case $I$(2).ON:
if (outside) {
location=Clazz.new_($I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I,[p, null, -1]);
} else {
location=Clazz.new_([p, this.getPathForRow$I(row), -1],$I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I);
}break;
case $I$(2).INSERT:
case $I$(2).ON_OR_INSERT:
if (row == -1) {
if (root != null  && !model.isLeaf$O(root)  && this.isExpanded$javax_swing_tree_TreePath(rootPath) ) {
location=Clazz.new_($I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I,[p, rootPath, 0]);
} else {
location=Clazz.new_($I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I,[p, null, -1]);
}break;
}var checkOn=this.dropMode === $I$(2).ON_OR_INSERT  || !model.isLeaf$O(this.getPathForRow$I(row).getLastPathComponent$()) ;
var section=$I$(12).liesInVertical$java_awt_Rectangle$java_awt_Point$Z(bounds, p, checkOn);
if (section === $I$(13).LEADING ) {
child=this.getPathForRow$I(row);
parent=child.getParentPath$();
} else if (section === $I$(13).TRAILING ) {
var index=row + 1;
if (index >= this.getRowCount$()) {
if (model.isLeaf$O(root) || !this.isExpanded$javax_swing_tree_TreePath(rootPath) ) {
location=Clazz.new_($I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I,[p, null, -1]);
} else {
parent=rootPath;
index=model.getChildCount$O(root);
location=Clazz.new_($I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I,[p, parent, index]);
}break;
}child=this.getPathForRow$I(index);
parent=child.getParentPath$();
} else {
Clazz.assert(C$, this, function(){return checkOn});
location=Clazz.new_([p, this.getPathForRow$I(row), -1],$I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I);
break;
}if (parent != null ) {
location=Clazz.new_([p, parent, model.getIndexOfChild$O$O(parent.getLastPathComponent$(), child.getLastPathComponent$())],$I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I);
} else if (checkOn || !model.isLeaf$O(root) ) {
location=Clazz.new_($I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I,[p, rootPath, -1]);
} else {
location=Clazz.new_($I$(11,1).c$$java_awt_Point$javax_swing_tree_TreePath$I,[p, null, -1]);
}break;
default:
Clazz.assert(C$, this, function(){return false}, function(){return "Unexpected drop mode"});
}
if (outside || row != this.expandRow ) {
p$1.cancelDropTimer.apply(this, []);
}if (!outside && row != this.expandRow ) {
if (this.isCollapsed$I(row)) {
this.expandRow=row;
p$1.startDropTimer.apply(this, []);
}}return location;
});

Clazz.newMeth(C$, 'setDropLocation$javax_swing_TransferHandler_DropLocation$O$Z',  function (location, state, forDrop) {
var retVal=null;
var treeLocation=location;
if (this.dropMode === $I$(2).USE_SELECTION ) {
if (treeLocation == null ) {
if (!forDrop && state != null  ) {
this.setSelectionPaths$javax_swing_tree_TreePathA((state)[0]);
this.setAnchorSelectionPath$javax_swing_tree_TreePath((state)[1][0]);
this.setLeadSelectionPath$javax_swing_tree_TreePath((state)[1][1]);
}} else {
if (this.dropLocation == null ) {
var paths=this.getSelectionPaths$();
if (paths == null ) {
paths=Clazz.array($I$(10), [0]);
}retVal=Clazz.array($I$(10), -2, [paths, Clazz.array($I$(10), -1, [this.getAnchorSelectionPath$(), this.getLeadSelectionPath$()])]);
} else {
retVal=state;
}this.setSelectionPath$javax_swing_tree_TreePath(treeLocation.getPath$());
}}var old=this.dropLocation;
this.dropLocation=treeLocation;
this.firePropertyChange$S$O$O("dropLocation", old, this.dropLocation);
return retVal;
});

Clazz.newMeth(C$, 'dndDone$',  function () {
p$1.cancelDropTimer.apply(this, []);
this.dropTimer=null;
});

Clazz.newMeth(C$, 'getDropLocation$',  function () {
return this.dropLocation;
});

Clazz.newMeth(C$, 'startDropTimer',  function () {
if (this.dropTimer == null ) {
this.dropTimer=Clazz.new_($I$(14,1),[this, null]);
}this.dropTimer.start$();
}, p$1);

Clazz.newMeth(C$, 'cancelDropTimer',  function () {
if (this.dropTimer != null  && this.dropTimer.isRunning$() ) {
this.expandRow=-1;
this.dropTimer.stop$();
}}, p$1);

Clazz.newMeth(C$, 'isPathEditable$javax_swing_tree_TreePath',  function (path) {
return this.isEditable$();
});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent',  function (event) {
var tip=null;
if (event != null ) {
var p=event.getPoint$();
var selRow=this.getRowForLocation$I$I(p.x, p.y);
var r=this.getCellRenderer$();
if (selRow != -1 && r != null  ) {
var path=this.getPathForRow$I(selRow);
var lastPath=path.getLastPathComponent$();
var rComponent=r.getTreeCellRendererComponent$javax_swing_JTree$O$Z$Z$Z$I$Z(this, lastPath, this.isRowSelected$I(selRow), this.isExpanded$I(selRow), this.getModel$().isLeaf$O(lastPath), selRow, true);
if (Clazz.instanceOf(rComponent, "javax.swing.JComponent")) {
var newEvent;
var pathBounds=this.getPathBounds$javax_swing_tree_TreePath(path);
p.translate$I$I(-pathBounds.x, -pathBounds.y);
newEvent=Clazz.new_([rComponent, event.getID$(), event.getWhen$(), event.getModifiers$(), p.x, p.y, event.getXOnScreen$(), event.getYOnScreen$(), event.getClickCount$(), event.isPopupTrigger$(), 0],$I$(15,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I);
tip=(rComponent).getToolTipText$java_awt_event_MouseEvent(newEvent);
}}}if (tip == null ) {
tip=this.getToolTipText$();
}return tip;
});

Clazz.newMeth(C$, 'convertValueToText$O$Z$Z$Z$I$Z',  function (value, selected, expanded, leaf, row, hasFocus) {
if (value != null ) {
var sValue=value.toString();
if (sValue != null ) {
return sValue;
}}return "";
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
var tree=this.getUI$();
if (tree != null ) return tree.getRowCount$javax_swing_JTree(this);
return 0;
});

Clazz.newMeth(C$, 'setSelectionPath$javax_swing_tree_TreePath',  function (path) {
this.getSelectionModel$().setSelectionPath$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'setSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
this.getSelectionModel$().setSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'setLeadSelectionPath$javax_swing_tree_TreePath',  function (newPath) {
var oldValue=this.leadPath;
this.leadPath=newPath;
this.firePropertyChange$S$O$O("leadSelectionPath", oldValue, newPath);
});

Clazz.newMeth(C$, 'setAnchorSelectionPath$javax_swing_tree_TreePath',  function (newPath) {
var oldValue=this.anchorPath;
this.anchorPath=newPath;
this.firePropertyChange$S$O$O("anchorSelectionPath", oldValue, newPath);
});

Clazz.newMeth(C$, 'setSelectionRow$I',  function (row) {
var rows=Clazz.array(Integer.TYPE, -1, [row]);
this.setSelectionRows$IA(rows);
});

Clazz.newMeth(C$, 'setSelectionRows$IA',  function (rows) {
var ui=this.getUI$();
if (ui != null  && rows != null  ) {
var numRows=rows.length;
var paths=Clazz.array($I$(10), [numRows]);
for (var counter=0; counter < numRows; counter++) {
paths[counter]=ui.getPathForRow$javax_swing_JTree$I(this, rows[counter]);
}
this.setSelectionPaths$javax_swing_tree_TreePathA(paths);
}});

Clazz.newMeth(C$, 'addSelectionPath$javax_swing_tree_TreePath',  function (path) {
this.getSelectionModel$().addSelectionPath$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'addSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
this.getSelectionModel$().addSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'addSelectionRow$I',  function (row) {
var rows=Clazz.array(Integer.TYPE, -1, [row]);
this.addSelectionRows$IA(rows);
});

Clazz.newMeth(C$, 'addSelectionRows$IA',  function (rows) {
var ui=this.getUI$();
if (ui != null  && rows != null  ) {
var numRows=rows.length;
var paths=Clazz.array($I$(10), [numRows]);
for (var counter=0; counter < numRows; counter++) paths[counter]=ui.getPathForRow$javax_swing_JTree$I(this, rows[counter]);

this.addSelectionPaths$javax_swing_tree_TreePathA(paths);
}});

Clazz.newMeth(C$, 'getLastSelectedPathComponent$',  function () {
var selPath=this.getSelectionModel$().getSelectionPath$();
if (selPath != null ) return selPath.getLastPathComponent$();
return null;
});

Clazz.newMeth(C$, 'getLeadSelectionPath$',  function () {
return this.leadPath;
});

Clazz.newMeth(C$, 'getAnchorSelectionPath$',  function () {
return this.anchorPath;
});

Clazz.newMeth(C$, 'getSelectionPath$',  function () {
return this.getSelectionModel$().getSelectionPath$();
});

Clazz.newMeth(C$, 'getSelectionPaths$',  function () {
return this.getSelectionModel$().getSelectionPaths$();
});

Clazz.newMeth(C$, 'getSelectionRows$',  function () {
return this.getSelectionModel$().getSelectionRows$();
});

Clazz.newMeth(C$, 'getSelectionCount$',  function () {
return this.selectionModel.getSelectionCount$();
});

Clazz.newMeth(C$, 'getMinSelectionRow$',  function () {
return this.getSelectionModel$().getMinSelectionRow$();
});

Clazz.newMeth(C$, 'getMaxSelectionRow$',  function () {
return this.getSelectionModel$().getMaxSelectionRow$();
});

Clazz.newMeth(C$, 'getLeadSelectionRow$',  function () {
var leadPath=this.getLeadSelectionPath$();
if (leadPath != null ) {
return this.getRowForPath$javax_swing_tree_TreePath(leadPath);
}return -1;
});

Clazz.newMeth(C$, 'isPathSelected$javax_swing_tree_TreePath',  function (path) {
return this.getSelectionModel$().isPathSelected$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'isRowSelected$I',  function (row) {
return this.getSelectionModel$().isRowSelected$I(row);
});

Clazz.newMeth(C$, 'getExpandedDescendants$javax_swing_tree_TreePath',  function (parent) {
if (!this.isExpanded$javax_swing_tree_TreePath(parent)) return null;
var toggledPaths=this.expandedState.keys$();
var elements=null;
var path;
var value;
if (toggledPaths != null ) {
while (toggledPaths.hasMoreElements$()){
path=toggledPaths.nextElement$();
value=this.expandedState.get$O(path);
if (path !== parent  && value != null   && (value).booleanValue$()  && parent.isDescendant$javax_swing_tree_TreePath(path)  && this.isVisible$javax_swing_tree_TreePath(path) ) {
if (elements == null ) {
elements=Clazz.new_($I$(1,1));
}elements.addElement$O(path);
}}
}if (elements == null ) {
var empty=$I$(16).emptySet$();
return $I$(16).enumeration$java_util_Collection(empty);
}return elements.elements$();
});

Clazz.newMeth(C$, 'hasBeenExpanded$javax_swing_tree_TreePath',  function (path) {
return (path != null  && this.expandedState.get$O(path) != null  );
});

Clazz.newMeth(C$, 'isExpanded$javax_swing_tree_TreePath',  function (path) {
if (path == null ) return false;
var value=this.expandedState.get$O(path);
if (value == null  || !(value).booleanValue$() ) return false;
var parentPath=path.getParentPath$();
if (parentPath != null ) return this.isExpanded$javax_swing_tree_TreePath(parentPath);
return true;
});

Clazz.newMeth(C$, 'isExpanded$I',  function (row) {
var tree=this.getUI$();
if (tree != null ) {
var path=tree.getPathForRow$javax_swing_JTree$I(this, row);
if (path != null ) {
var value=this.expandedState.get$O(path);
return (value != null  && value.booleanValue$() );
}}return false;
});

Clazz.newMeth(C$, 'isCollapsed$javax_swing_tree_TreePath',  function (path) {
return !this.isExpanded$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'isCollapsed$I',  function (row) {
return !this.isExpanded$I(row);
});

Clazz.newMeth(C$, 'makeVisible$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
var parentPath=path.getParentPath$();
if (parentPath != null ) {
this.expandPath$javax_swing_tree_TreePath(parentPath);
}}});

Clazz.newMeth(C$, 'isVisible$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
var parentPath=path.getParentPath$();
if (parentPath != null ) return this.isExpanded$javax_swing_tree_TreePath(parentPath);
return true;
}return false;
});

Clazz.newMeth(C$, 'getPathBounds$javax_swing_tree_TreePath',  function (path) {
var tree=this.getUI$();
if (tree != null ) return tree.getPathBounds$javax_swing_JTree$javax_swing_tree_TreePath(this, path);
return null;
});

Clazz.newMeth(C$, 'getRowBounds$I',  function (row) {
return this.getPathBounds$javax_swing_tree_TreePath(this.getPathForRow$I(row));
});

Clazz.newMeth(C$, 'scrollPathToVisible$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
this.makeVisible$javax_swing_tree_TreePath(path);
var bounds=this.getPathBounds$javax_swing_tree_TreePath(path);
if (bounds != null ) {
this.scrollRectToVisible$java_awt_Rectangle(bounds);
}}});

Clazz.newMeth(C$, 'scrollRowToVisible$I',  function (row) {
this.scrollPathToVisible$javax_swing_tree_TreePath(this.getPathForRow$I(row));
});

Clazz.newMeth(C$, 'getPathForRow$I',  function (row) {
var tree=this.getUI$();
if (tree != null ) return tree.getPathForRow$javax_swing_JTree$I(this, row);
return null;
});

Clazz.newMeth(C$, 'getRowForPath$javax_swing_tree_TreePath',  function (path) {
var tree=this.getUI$();
if (tree != null ) return tree.getRowForPath$javax_swing_JTree$javax_swing_tree_TreePath(this, path);
return -1;
});

Clazz.newMeth(C$, 'expandPath$javax_swing_tree_TreePath',  function (path) {
var model=this.getModel$();
if (path != null  && model != null   && !model.isLeaf$O(path.getLastPathComponent$()) ) {
this.setExpandedState$javax_swing_tree_TreePath$Z(path, true);
}});

Clazz.newMeth(C$, 'expandRow$I',  function (row) {
this.expandPath$javax_swing_tree_TreePath(this.getPathForRow$I(row));
});

Clazz.newMeth(C$, 'collapsePath$javax_swing_tree_TreePath',  function (path) {
this.setExpandedState$javax_swing_tree_TreePath$Z(path, false);
});

Clazz.newMeth(C$, 'collapseRow$I',  function (row) {
this.collapsePath$javax_swing_tree_TreePath(this.getPathForRow$I(row));
});

Clazz.newMeth(C$, 'getPathForLocation$I$I',  function (x, y) {
var closestPath=this.getClosestPathForLocation$I$I(x, y);
if (closestPath != null ) {
var pathBounds=this.getPathBounds$javax_swing_tree_TreePath(closestPath);
if (pathBounds != null  && x >= pathBounds.x  && x < (pathBounds.x + pathBounds.width)  && y >= pathBounds.y  && y < (pathBounds.y + pathBounds.height) ) return closestPath;
}return null;
});

Clazz.newMeth(C$, 'getRowForLocation$I$I',  function (x, y) {
return this.getRowForPath$javax_swing_tree_TreePath(this.getPathForLocation$I$I(x, y));
});

Clazz.newMeth(C$, 'getClosestPathForLocation$I$I',  function (x, y) {
var tree=this.getUI$();
if (tree != null ) return tree.getClosestPathForLocation$javax_swing_JTree$I$I(this, x, y);
return null;
});

Clazz.newMeth(C$, 'getClosestRowForLocation$I$I',  function (x, y) {
return this.getRowForPath$javax_swing_tree_TreePath(this.getClosestPathForLocation$I$I(x, y));
});

Clazz.newMeth(C$, 'isEditing$',  function () {
var tree=this.getUI$();
if (tree != null ) return tree.isEditing$javax_swing_JTree(this);
return false;
});

Clazz.newMeth(C$, 'stopEditing$',  function () {
var tree=this.getUI$();
if (tree != null ) return tree.stopEditing$javax_swing_JTree(this);
return false;
});

Clazz.newMeth(C$, 'cancelEditing$',  function () {
var tree=this.getUI$();
if (tree != null ) tree.cancelEditing$javax_swing_JTree(this);
});

Clazz.newMeth(C$, 'startEditingAtPath$javax_swing_tree_TreePath',  function (path) {
var tree=this.getUI$();
if (tree != null ) tree.startEditingAtPath$javax_swing_JTree$javax_swing_tree_TreePath(this, path);
});

Clazz.newMeth(C$, 'getEditingPath$',  function () {
var tree=this.getUI$();
if (tree != null ) return tree.getEditingPath$javax_swing_JTree(this);
return null;
});

Clazz.newMeth(C$, 'setSelectionModel$javax_swing_tree_TreeSelectionModel',  function (selectionModel) {
if (selectionModel == null ) selectionModel=$I$(17).sharedInstance$();
var oldValue=this.selectionModel;
if (this.selectionModel != null  && this.selectionRedirector != null  ) {
this.selectionModel.removeTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.selectionRedirector);
}this.selectionModel=selectionModel;
if (this.selectionRedirector != null ) {
this.selectionModel.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.selectionRedirector);
}this.firePropertyChange$S$O$O("selectionModel", oldValue, this.selectionModel);
});

Clazz.newMeth(C$, 'getSelectionModel$',  function () {
return this.selectionModel;
});

Clazz.newMeth(C$, 'getPathBetweenRows$I$I',  function (index0, index1) {
var newMinIndex;
var newMaxIndex;
var tree=this.getUI$();
newMinIndex=Math.min(index0, index1);
newMaxIndex=Math.max(index0, index1);
if (tree != null ) {
var selection=Clazz.array($I$(10), [newMaxIndex - newMinIndex + 1]);
for (var counter=newMinIndex; counter <= newMaxIndex; counter++) {
selection[counter - newMinIndex]=tree.getPathForRow$javax_swing_JTree$I(this, counter);
}
return selection;
}return null;
});

Clazz.newMeth(C$, 'setSelectionInterval$I$I',  function (index0, index1) {
var paths=this.getPathBetweenRows$I$I(index0, index1);
this.getSelectionModel$().setSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'addSelectionInterval$I$I',  function (index0, index1) {
var paths=this.getPathBetweenRows$I$I(index0, index1);
this.getSelectionModel$().addSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'removeSelectionInterval$I$I',  function (index0, index1) {
var paths=this.getPathBetweenRows$I$I(index0, index1);
this.getSelectionModel$().removeSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'removeSelectionPath$javax_swing_tree_TreePath',  function (path) {
this.getSelectionModel$().removeSelectionPath$javax_swing_tree_TreePath(path);
});

Clazz.newMeth(C$, 'removeSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
this.getSelectionModel$().removeSelectionPaths$javax_swing_tree_TreePathA(paths);
});

Clazz.newMeth(C$, 'removeSelectionRow$I',  function (row) {
var rows=Clazz.array(Integer.TYPE, -1, [row]);
this.removeSelectionRows$IA(rows);
});

Clazz.newMeth(C$, 'removeSelectionRows$IA',  function (rows) {
var ui=this.getUI$();
if (ui != null  && rows != null  ) {
var numRows=rows.length;
var paths=Clazz.array($I$(10), [numRows]);
for (var counter=0; counter < numRows; counter++) paths[counter]=ui.getPathForRow$javax_swing_JTree$I(this, rows[counter]);

this.removeSelectionPaths$javax_swing_tree_TreePathA(paths);
}});

Clazz.newMeth(C$, 'clearSelection$',  function () {
this.getSelectionModel$().clearSelection$();
});

Clazz.newMeth(C$, 'isSelectionEmpty$',  function () {
return this.getSelectionModel$().isSelectionEmpty$();
});

Clazz.newMeth(C$, 'addTreeExpansionListener$javax_swing_event_TreeExpansionListener',  function (tel) {
if (this.settingUI) {
this.uiTreeExpansionListener=tel;
}this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(18),['treeCollapsed$javax_swing_event_TreeExpansionEvent','treeExpanded$javax_swing_event_TreeExpansionEvent']), tel);
});

Clazz.newMeth(C$, 'removeTreeExpansionListener$javax_swing_event_TreeExpansionListener',  function (tel) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(18),['treeCollapsed$javax_swing_event_TreeExpansionEvent','treeExpanded$javax_swing_event_TreeExpansionEvent']), tel);
if (this.uiTreeExpansionListener === tel ) {
this.uiTreeExpansionListener=null;
}});

Clazz.newMeth(C$, 'getTreeExpansionListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(18),['treeCollapsed$javax_swing_event_TreeExpansionEvent','treeExpanded$javax_swing_event_TreeExpansionEvent']));
});

Clazz.newMeth(C$, 'addTreeWillExpandListener$javax_swing_event_TreeWillExpandListener',  function (tel) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(19),['treeWillCollapse$javax_swing_event_TreeExpansionEvent','treeWillExpand$javax_swing_event_TreeExpansionEvent']), tel);
});

Clazz.newMeth(C$, 'removeTreeWillExpandListener$javax_swing_event_TreeWillExpandListener',  function (tel) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(19),['treeWillCollapse$javax_swing_event_TreeExpansionEvent','treeWillExpand$javax_swing_event_TreeExpansionEvent']), tel);
});

Clazz.newMeth(C$, 'getTreeWillExpandListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(19),['treeWillCollapse$javax_swing_event_TreeExpansionEvent','treeWillExpand$javax_swing_event_TreeExpansionEvent']));
});

Clazz.newMeth(C$, 'fireTreeExpanded$javax_swing_tree_TreePath',  function (path) {
var listeners=this.listenerList.getListenerList$();
var e=null;
if (this.uiTreeExpansionListener != null ) {
e=Clazz.new_($I$(20,1).c$$O$javax_swing_tree_TreePath,[this, path]);
this.uiTreeExpansionListener.treeExpanded$javax_swing_event_TreeExpansionEvent(e);
}for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(18),['treeCollapsed$javax_swing_event_TreeExpansionEvent','treeExpanded$javax_swing_event_TreeExpansionEvent'])  && listeners[i + 1] !== this.uiTreeExpansionListener  ) {
if (e == null ) e=Clazz.new_($I$(20,1).c$$O$javax_swing_tree_TreePath,[this, path]);
(listeners[i + 1]).treeExpanded$javax_swing_event_TreeExpansionEvent(e);
}}
});

Clazz.newMeth(C$, 'fireTreeCollapsed$javax_swing_tree_TreePath',  function (path) {
var listeners=this.listenerList.getListenerList$();
var e=null;
if (this.uiTreeExpansionListener != null ) {
e=Clazz.new_($I$(20,1).c$$O$javax_swing_tree_TreePath,[this, path]);
this.uiTreeExpansionListener.treeCollapsed$javax_swing_event_TreeExpansionEvent(e);
}for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(18),['treeCollapsed$javax_swing_event_TreeExpansionEvent','treeExpanded$javax_swing_event_TreeExpansionEvent'])  && listeners[i + 1] !== this.uiTreeExpansionListener  ) {
if (e == null ) e=Clazz.new_($I$(20,1).c$$O$javax_swing_tree_TreePath,[this, path]);
(listeners[i + 1]).treeCollapsed$javax_swing_event_TreeExpansionEvent(e);
}}
});

Clazz.newMeth(C$, 'fireTreeWillExpand$javax_swing_tree_TreePath',  function (path) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(19),['treeWillCollapse$javax_swing_event_TreeExpansionEvent','treeWillExpand$javax_swing_event_TreeExpansionEvent']) ) {
if (e == null ) e=Clazz.new_($I$(20,1).c$$O$javax_swing_tree_TreePath,[this, path]);
(listeners[i + 1]).treeWillExpand$javax_swing_event_TreeExpansionEvent(e);
}}
});

Clazz.newMeth(C$, 'fireTreeWillCollapse$javax_swing_tree_TreePath',  function (path) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(19),['treeWillCollapse$javax_swing_event_TreeExpansionEvent','treeWillExpand$javax_swing_event_TreeExpansionEvent']) ) {
if (e == null ) e=Clazz.new_($I$(20,1).c$$O$javax_swing_tree_TreePath,[this, path]);
(listeners[i + 1]).treeWillCollapse$javax_swing_event_TreeExpansionEvent(e);
}}
});

Clazz.newMeth(C$, 'addTreeSelectionListener$javax_swing_event_TreeSelectionListener',  function (tsl) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(21),['valueChanged$javax_swing_event_TreeSelectionEvent']), tsl);
if (this.listenerList.getListenerCount$Class(Clazz.getClass($I$(21),['valueChanged$javax_swing_event_TreeSelectionEvent'])) != 0 && this.selectionRedirector == null  ) {
this.selectionRedirector=Clazz.new_($I$(22,1),[this, null]);
this.selectionModel.addTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.selectionRedirector);
}});

Clazz.newMeth(C$, 'removeTreeSelectionListener$javax_swing_event_TreeSelectionListener',  function (tsl) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(21),['valueChanged$javax_swing_event_TreeSelectionEvent']), tsl);
if (this.listenerList.getListenerCount$Class(Clazz.getClass($I$(21),['valueChanged$javax_swing_event_TreeSelectionEvent'])) == 0 && this.selectionRedirector != null  ) {
this.selectionModel.removeTreeSelectionListener$javax_swing_event_TreeSelectionListener(this.selectionRedirector);
this.selectionRedirector=null;
}});

Clazz.newMeth(C$, 'getTreeSelectionListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(21),['valueChanged$javax_swing_event_TreeSelectionEvent']));
});

Clazz.newMeth(C$, 'fireValueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(21),['valueChanged$javax_swing_event_TreeSelectionEvent']) ) {
(listeners[i + 1]).valueChanged$javax_swing_event_TreeSelectionEvent(e);
}}
});

Clazz.newMeth(C$, 'treeDidChange$',  function () {
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'setVisibleRowCount$I',  function (newCount) {
var oldCount=this.visibleRowCount;
this.visibleRowCount=newCount;
this.firePropertyChange$S$I$I("visibleRowCount", oldCount, this.visibleRowCount);
this.invalidate$();
});

Clazz.newMeth(C$, 'getVisibleRowCount$',  function () {
return this.visibleRowCount;
});

Clazz.newMeth(C$, 'expandRoot',  function () {
var model=this.getModel$();
if (model != null  && model.getRoot$() != null  ) {
this.expandPath$javax_swing_tree_TreePath(Clazz.new_([model.getRoot$()],$I$(10,1).c$$O));
}}, p$1);

Clazz.newMeth(C$, 'getNextMatch$S$I$javax_swing_text_Position_Bias',  function (prefix, startingRow, bias) {
var max=this.getRowCount$();
if (prefix == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (startingRow < 0 || startingRow >= max ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}prefix=prefix.toUpperCase$();
var increment=(bias === $I$(23).Forward ) ? 1 : -1;
var row=startingRow;
do {
var path=this.getPathForRow$I(row);
var text=this.convertValueToText$O$Z$Z$Z$I$Z(path.getLastPathComponent$(), this.isRowSelected$I(row), this.isExpanded$I(row), true, row, false);
if (text.toUpperCase$().startsWith$S(prefix)) {
return path;
}row=(row + increment + max ) % max;
} while (row != startingRow);
return null;
});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$',  function () {
var width=this.getPreferredSize$().width;
var visRows=this.getVisibleRowCount$();
var height=-1;
if (this.isFixedRowHeight$()) height=visRows * this.getRowHeight$();
 else {
var ui=this.getUI$();
if (ui != null  && visRows > 0 ) {
var rc=ui.getRowCount$javax_swing_JTree(this);
if (rc >= visRows) {
var bounds=this.getRowBounds$I(visRows - 1);
if (bounds != null ) {
height=bounds.y + bounds.height;
}} else if (rc > 0) {
var bounds=this.getRowBounds$I(0);
if (bounds != null ) {
height=bounds.height * visRows;
}}}if (height == -1) {
height=16 * visRows;
}}return Clazz.new_($I$(24,1).c$$I$I,[width, height]);
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
if (orientation == 1) {
var rowBounds;
var firstIndex=this.getClosestRowForLocation$I$I(0, visibleRect.y);
if (firstIndex != -1) {
rowBounds=this.getRowBounds$I(firstIndex);
if (rowBounds.y != visibleRect.y) {
if (direction < 0) {
return Math.max(0, (visibleRect.y - rowBounds.y));
}return (rowBounds.y + rowBounds.height - visibleRect.y);
}if (direction < 0) {
if (firstIndex != 0) {
rowBounds=this.getRowBounds$I(firstIndex - 1);
return rowBounds.height;
}} else {
return rowBounds.height;
}}return 0;
}return 4;
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
return (orientation == 1) ? visibleRect.height : visibleRect.width;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
return ((this.getParent$()).getWidth$() > this.getPreferredSize$().width);
}return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$',  function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
return ((this.getParent$()).getHeight$() > this.getPreferredSize$().height);
}return false;
});

Clazz.newMeth(C$, 'setExpandedState$javax_swing_tree_TreePath$Z',  function (path, state) {
if (path != null ) {
var stack;
var parentPath=path.getParentPath$();
if (this.expandedStack.size$() == 0) {
stack=Clazz.new_($I$(6,1));
} else {
stack=this.expandedStack.pop$();
}try {
while (parentPath != null ){
if (this.isExpanded$javax_swing_tree_TreePath(parentPath)) {
parentPath=null;
} else {
stack.push$O(parentPath);
parentPath=parentPath.getParentPath$();
}}
for (var counter=stack.size$() - 1; counter >= 0; counter--) {
parentPath=stack.pop$();
if (!this.isExpanded$javax_swing_tree_TreePath(parentPath)) {
try {
this.fireTreeWillExpand$javax_swing_tree_TreePath(parentPath);
} catch (eve) {
if (Clazz.exceptionOf(eve,"javax.swing.tree.ExpandVetoException")){
return;
} else {
throw eve;
}
}
this.expandedState.put$O$O(parentPath, Boolean.TRUE);
this.fireTreeExpanded$javax_swing_tree_TreePath(parentPath);
}}
} finally {
if (this.expandedStack.size$() < C$.TEMP_STACK_SIZE) {
stack.removeAllElements$();
this.expandedStack.push$O(stack);
}}
if (!state) {
var cValue=this.expandedState.get$O(path);
if (cValue != null  && (cValue).booleanValue$() ) {
try {
this.fireTreeWillCollapse$javax_swing_tree_TreePath(path);
} catch (eve) {
if (Clazz.exceptionOf(eve,"javax.swing.tree.ExpandVetoException")){
return;
} else {
throw eve;
}
}
this.expandedState.put$O$O(path, Boolean.FALSE);
this.fireTreeCollapsed$javax_swing_tree_TreePath(path);
if (this.removeDescendantSelectedPaths$javax_swing_tree_TreePath$Z(path, false) && !this.isPathSelected$javax_swing_tree_TreePath(path) ) {
this.addSelectionPath$javax_swing_tree_TreePath(path);
}}} else {
var cValue=this.expandedState.get$O(path);
if (cValue == null  || !(cValue).booleanValue$() ) {
try {
this.fireTreeWillExpand$javax_swing_tree_TreePath(path);
} catch (eve) {
if (Clazz.exceptionOf(eve,"javax.swing.tree.ExpandVetoException")){
return;
} else {
throw eve;
}
}
this.expandedState.put$O$O(path, Boolean.TRUE);
this.fireTreeExpanded$javax_swing_tree_TreePath(path);
}}}});

Clazz.newMeth(C$, 'getDescendantToggledPaths$javax_swing_tree_TreePath',  function (parent) {
if (parent == null ) return null;
var descendants=Clazz.new_($I$(1,1));
var nodes=this.expandedState.keys$();
var path;
while (nodes.hasMoreElements$()){
path=nodes.nextElement$();
if (parent.isDescendant$javax_swing_tree_TreePath(path)) descendants.addElement$O(path);
}
return descendants.elements$();
});

Clazz.newMeth(C$, 'removeDescendantToggledPaths$java_util_Enumeration',  function (toRemove) {
if (toRemove != null ) {
while (toRemove.hasMoreElements$()){
var descendants=this.getDescendantToggledPaths$javax_swing_tree_TreePath(toRemove.nextElement$());
if (descendants != null ) {
while (descendants.hasMoreElements$()){
this.expandedState.remove$O(descendants.nextElement$());
}
}}
}});

Clazz.newMeth(C$, 'clearToggledPaths$',  function () {
this.expandedState.clear$();
});

Clazz.newMeth(C$, 'createTreeModelListener$',  function () {
return Clazz.new_($I$(25,1),[this, null]);
});

Clazz.newMeth(C$, 'removeDescendantSelectedPaths$javax_swing_tree_TreePath$Z',  function (path, includePath) {
var toRemove=p$1.getDescendantSelectedPaths$javax_swing_tree_TreePath$Z.apply(this, [path, includePath]);
if (toRemove != null ) {
this.getSelectionModel$().removeSelectionPaths$javax_swing_tree_TreePathA(toRemove);
return true;
}return false;
});

Clazz.newMeth(C$, 'getDescendantSelectedPaths$javax_swing_tree_TreePath$Z',  function (path, includePath) {
var sm=this.getSelectionModel$();
var selPaths=(sm != null ) ? sm.getSelectionPaths$() : null;
if (selPaths != null ) {
var shouldRemove=false;
for (var counter=selPaths.length - 1; counter >= 0; counter--) {
if (selPaths[counter] != null  && path.isDescendant$javax_swing_tree_TreePath(selPaths[counter])  && (!path.equals$O(selPaths[counter]) || includePath ) ) shouldRemove=true;
 else selPaths[counter]=null;
}
if (!shouldRemove) {
selPaths=null;
}return selPaths;
}return null;
}, p$1);

Clazz.newMeth(C$, 'removeDescendantSelectedPaths$javax_swing_event_TreeModelEvent',  function (e) {
var pPath=e.getTreePath$();
var oldChildren=e.getChildren$();
var sm=this.getSelectionModel$();
if (sm != null  && pPath != null   && oldChildren != null   && oldChildren.length > 0 ) {
for (var counter=oldChildren.length - 1; counter >= 0; counter--) {
this.removeDescendantSelectedPaths$javax_swing_tree_TreePath$Z(pPath.pathByAddingChild$O(oldChildren[counter]), true);
}
}});

Clazz.newMeth(C$, 'setUIProperty$S$O',  function (propertyName, value) {
if (propertyName === "rowHeight" ) {
if (!this.rowHeightSet) {
this.setRowHeight$I((value).intValue$());
this.rowHeightSet=false;
}} else if (propertyName === "scrollsOnExpand" ) {
if (!this.scrollsOnExpandSet) {
this.setScrollsOnExpand$Z((value).booleanValue$());
this.scrollsOnExpandSet=false;
}} else if (propertyName === "showsRootHandles" ) {
if (!this.showsRootHandlesSet) {
this.setShowsRootHandles$Z((value).booleanValue$());
this.showsRootHandlesSet=false;
}} else {
C$.superclazz.prototype.setUIProperty$S$O.apply(this, [propertyName, value]);
}});

Clazz.newMeth(C$, 'paramString$',  function () {
var rootVisibleString=(this.rootVisible ? "true" : "false");
var showsRootHandlesString=(this.showsRootHandles ? "true" : "false");
var editableString=(this.editable ? "true" : "false");
var largeModelString=(this.largeModel ? "true" : "false");
var invokesStopCellEditingString=(this.invokesStopCellEditing ? "true" : "false");
var scrollsOnExpandString=(this.scrollsOnExpand ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",editable=" + editableString + ",invokesStopCellEditing=" + invokesStopCellEditingString + ",largeModel=" + largeModelString + ",rootVisible=" + rootVisibleString + ",rowHeight=" + this.rowHeight + ",scrollsOnExpand=" + scrollsOnExpandString + ",showsRootHandles=" + showsRootHandlesString + ",toggleClickCount=" + this.toggleClickCount + ",visibleRowCount=" + this.visibleRowCount ;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.TEMP_STACK_SIZE=11;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTree, "DropLocation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.TransferHandler','.DropLocation']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['path','javax.swing.tree.TreePath']]]

Clazz.newMeth(C$, 'c$$java_awt_Point$javax_swing_tree_TreePath$I',  function (p, path, index) {
;C$.superclazz.c$$java_awt_Point.apply(this,[p]);C$.$init$.apply(this);
this.path=path;
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getChildIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'getPath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[dropPoint=" + this.getDropPoint$() + "," + "path=" + this.path + "," + "childIndex=" + this.index + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTree, "TreeTimer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.Timer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I$java_awt_event_ActionListener.apply(this,[2000, null]);C$.$init$.apply(this);
this.setRepeats$Z(false);
}, 1);

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent',  function (ae) {
this.b$['javax.swing.JTree'].expandRow$I.apply(this.b$['javax.swing.JTree'], [this.b$['javax.swing.JTree'].expandRow]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTree, "EmptySelectionModel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.tree.DefaultTreeSelectionModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['sharedInstance','javax.swing.JTree.EmptySelectionModel']]]

Clazz.newMeth(C$, 'sharedInstance$',  function () {
return C$.sharedInstance;
}, 1);

Clazz.newMeth(C$, 'setSelectionPaths$javax_swing_tree_TreePathA',  function (pPaths) {
});

Clazz.newMeth(C$, 'addSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
});

Clazz.newMeth(C$, 'removeSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
});

C$.$static$=function(){C$.$static$=0;
C$.sharedInstance=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTree, "TreeSelectionRedirector", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.TreeSelectionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
var newE;
newE=e.cloneWithSource$O(this.b$['javax.swing.JTree']);
this.b$['javax.swing.JTree'].fireValueChanged$javax_swing_event_TreeSelectionEvent.apply(this.b$['javax.swing.JTree'], [newE]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTree, "TreeModelHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.TreeModelListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'treeNodesChanged$javax_swing_event_TreeModelEvent',  function (e) {
});

Clazz.newMeth(C$, 'treeNodesInserted$javax_swing_event_TreeModelEvent',  function (e) {
});

Clazz.newMeth(C$, 'treeStructureChanged$javax_swing_event_TreeModelEvent',  function (e) {
if (e == null ) return;
var parent=e.getTreePath$();
if (parent == null ) return;
if (parent.getPathCount$() == 1) {
this.b$['javax.swing.JTree'].clearToggledPaths$.apply(this.b$['javax.swing.JTree'], []);
if (this.b$['javax.swing.JTree'].treeModel.getRoot$() != null  && !this.b$['javax.swing.JTree'].treeModel.isLeaf$O(this.b$['javax.swing.JTree'].treeModel.getRoot$()) ) {
this.b$['javax.swing.JTree'].expandedState.put$O$O(parent, Boolean.TRUE);
}} else if (this.b$['javax.swing.JTree'].expandedState.get$O(parent) != null ) {
var toRemove=Clazz.new_($I$(1,1).c$$I,[1]);
var isExpanded=this.b$['javax.swing.JTree'].isExpanded$javax_swing_tree_TreePath.apply(this.b$['javax.swing.JTree'], [parent]);
toRemove.addElement$O(parent);
this.b$['javax.swing.JTree'].removeDescendantToggledPaths$java_util_Enumeration.apply(this.b$['javax.swing.JTree'], [toRemove.elements$()]);
if (isExpanded) {
var model=this.b$['javax.swing.JTree'].getModel$.apply(this.b$['javax.swing.JTree'], []);
if (model == null  || model.isLeaf$O(parent.getLastPathComponent$()) ) this.b$['javax.swing.JTree'].collapsePath$javax_swing_tree_TreePath.apply(this.b$['javax.swing.JTree'], [parent]);
 else this.b$['javax.swing.JTree'].expandedState.put$O$O(parent, Boolean.TRUE);
}}this.b$['javax.swing.JTree'].removeDescendantSelectedPaths$javax_swing_tree_TreePath$Z.apply(this.b$['javax.swing.JTree'], [parent, false]);
});

Clazz.newMeth(C$, 'treeNodesRemoved$javax_swing_event_TreeModelEvent',  function (e) {
if (e == null ) return;
var parent=e.getTreePath$();
var children=e.getChildren$();
if (children == null ) return;
var rPath;
var toRemove=Clazz.new_([Math.max(1, children.length)],$I$(1,1).c$$I);
for (var counter=children.length - 1; counter >= 0; counter--) {
rPath=parent.pathByAddingChild$O(children[counter]);
if (this.b$['javax.swing.JTree'].expandedState.get$O(rPath) != null ) toRemove.addElement$O(rPath);
}
if (toRemove.size$() > 0) this.b$['javax.swing.JTree'].removeDescendantToggledPaths$java_util_Enumeration.apply(this.b$['javax.swing.JTree'], [toRemove.elements$()]);
var model=this.b$['javax.swing.JTree'].getModel$.apply(this.b$['javax.swing.JTree'], []);
if (model == null  || model.isLeaf$O(parent.getLastPathComponent$()) ) this.b$['javax.swing.JTree'].expandedState.remove$O(parent);
this.b$['javax.swing.JTree'].removeDescendantSelectedPaths$javax_swing_event_TreeModelEvent.apply(this.b$['javax.swing.JTree'], [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTree, "DynamicUtilTreeNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasChildren','loadedChildren'],'O',['childValue','java.lang.Object']]]

Clazz.newMeth(C$, 'createChildren$javax_swing_tree_DefaultMutableTreeNode$O',  function (parent, children) {
if (Clazz.instanceOf(children, "java.util.Vector")) {
var childVector=children;
for (var counter=0, maxCounter=childVector.size$(); counter < maxCounter; counter++) parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_(C$.c$$O$O,[childVector.elementAt$I(counter), childVector.elementAt$I(counter)]));

} else if (Clazz.instanceOf(children, "java.util.Hashtable")) {
var childHT=children;
var keys=childHT.keys$();
var aKey;
while (keys.hasMoreElements$()){
aKey=keys.nextElement$();
parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_(C$.c$$O$O,[aKey, childHT.get$O(aKey)]));
}
} else if (Clazz.instanceOf(children, Clazz.array(java.lang.Object, -1))) {
var childArray=children;
for (var counter=0, maxCounter=childArray.length; counter < maxCounter; counter++) parent.add$javax_swing_tree_MutableTreeNode(Clazz.new_(C$.c$$O$O,[childArray[counter], childArray[counter]]));

}}, 1);

Clazz.newMeth(C$, 'c$$O$O',  function (value, children) {
;C$.superclazz.c$$O.apply(this,[value]);C$.$init$.apply(this);
this.loadedChildren=false;
this.childValue=children;
if (children != null ) {
if (Clazz.instanceOf(children, "java.util.Vector")) this.setAllowsChildren$Z(true);
 else if (Clazz.instanceOf(children, "java.util.Hashtable")) this.setAllowsChildren$Z(true);
 else if (Clazz.instanceOf(children, Clazz.array(java.lang.Object, -1))) this.setAllowsChildren$Z(true);
 else this.setAllowsChildren$Z(false);
} else this.setAllowsChildren$Z(false);
}, 1);

Clazz.newMeth(C$, 'isLeaf$',  function () {
return !this.getAllowsChildren$();
});

Clazz.newMeth(C$, 'getChildCount$',  function () {
if (!this.loadedChildren) this.loadChildren$();
return C$.superclazz.prototype.getChildCount$.apply(this, []);
});

Clazz.newMeth(C$, 'loadChildren$',  function () {
this.loadedChildren=true;
C$.createChildren$javax_swing_tree_DefaultMutableTreeNode$O(this, this.childValue);
});

Clazz.newMeth(C$, 'getChildAt$I',  function (index) {
if (!this.loadedChildren) this.loadChildren$();
return C$.superclazz.prototype.getChildAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'children$',  function () {
if (!this.loadedChildren) this.loadChildren$();
return C$.superclazz.prototype.children$.apply(this, []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.tree"),p$1={},I$=[[0,'javax.swing.tree.TreePath','java.util.Stack','java.awt.Rectangle','java.util.Hashtable',['javax.swing.tree.FixedHeightLayoutCache','.SearchInfo'],['javax.swing.tree.FixedHeightLayoutCache','.VisibleFHTreeStateNodeEnumeration'],'sun.swing.SwingUtilities2',['javax.swing.tree.FixedHeightLayoutCache','.FHTreeStateNode']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FixedHeightLayoutCache", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.AbstractLayoutCache');
C$.$classes$=[['FHTreeStateNode',2],['SearchInfo',2],['VisibleFHTreeStateNodeEnumeration',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['rowCount'],'O',['root','javax.swing.tree.FixedHeightLayoutCache.FHTreeStateNode','boundsBuffer','java.awt.Rectangle','treePathMapping','java.util.Hashtable','info','javax.swing.tree.FixedHeightLayoutCache.SearchInfo','tempStacks','java.util.Stack']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.tempStacks=Clazz.new_($I$(2,1));
this.boundsBuffer=Clazz.new_($I$(3,1));
this.treePathMapping=Clazz.new_($I$(4,1));
this.info=Clazz.new_($I$(5,1),[this, null]);
this.setRowHeight$I(1);
}, 1);

Clazz.newMeth(C$, 'setModel$javax_swing_tree_TreeModel',  function (newModel) {
C$.superclazz.prototype.setModel$javax_swing_tree_TreeModel.apply(this, [newModel]);
p$1.rebuild$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'setRootVisible$Z',  function (rootVisible) {
if (this.isRootVisible$() != rootVisible ) {
C$.superclazz.prototype.setRootVisible$Z.apply(this, [rootVisible]);
if (this.root != null ) {
if (rootVisible) {
++this.rowCount;
this.root.adjustRowBy$I(1);
} else {
--this.rowCount;
this.root.adjustRowBy$I(-1);
}p$1.visibleNodesChanged.apply(this, []);
}}});

Clazz.newMeth(C$, 'setRowHeight$I',  function (rowHeight) {
if (rowHeight <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["FixedHeightLayoutCache only supports row heights greater than 0"]);
if (this.getRowHeight$() != rowHeight) {
C$.superclazz.prototype.setRowHeight$I.apply(this, [rowHeight]);
p$1.visibleNodesChanged.apply(this, []);
}});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.rowCount;
});

Clazz.newMeth(C$, 'invalidatePathBounds$javax_swing_tree_TreePath',  function (path) {
});

Clazz.newMeth(C$, 'invalidateSizes$',  function () {
p$1.visibleNodesChanged.apply(this, []);
});

Clazz.newMeth(C$, 'isExpanded$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
var lastNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
return (lastNode != null  && lastNode.isExpanded$() );
}return false;
});

Clazz.newMeth(C$, 'getBounds$javax_swing_tree_TreePath$java_awt_Rectangle',  function (path, placeIn) {
if (path == null ) return null;
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (node != null ) return p$1.getBounds$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode$I$java_awt_Rectangle.apply(this, [node, -1, placeIn]);
var parentPath=path.getParentPath$();
node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [parentPath, true, false]);
if (node != null  && node.isExpanded$() ) {
var childIndex=this.treeModel.getIndexOfChild$O$O(parentPath.getLastPathComponent$(), path.getLastPathComponent$());
if (childIndex != -1) return p$1.getBounds$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode$I$java_awt_Rectangle.apply(this, [node, childIndex, placeIn]);
}return null;
});

Clazz.newMeth(C$, 'getPathForRow$I',  function (row) {
if (row >= 0 && row < this.getRowCount$() ) {
if (this.root.getPathForRow$I$I$javax_swing_tree_FixedHeightLayoutCache_SearchInfo(row, this.getRowCount$(), this.info)) {
return this.info.getPath$();
}}return null;
});

Clazz.newMeth(C$, 'getRowForPath$javax_swing_tree_TreePath',  function (path) {
if (path == null  || this.root == null  ) return -1;
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (node != null ) return node.getRow$();
var parentPath=path.getParentPath$();
node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [parentPath, true, false]);
if (node != null  && node.isExpanded$() ) {
return node.getRowToModelIndex$I(this.treeModel.getIndexOfChild$O$O(parentPath.getLastPathComponent$(), path.getLastPathComponent$()));
}return -1;
});

Clazz.newMeth(C$, 'getPathClosestTo$I$I',  function (x, y) {
if (this.getRowCount$() == 0) return null;
var row=p$1.getRowContainingYLocation$I.apply(this, [y]);
return this.getPathForRow$I(row);
});

Clazz.newMeth(C$, 'getVisibleChildCount$javax_swing_tree_TreePath',  function (path) {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (node == null ) return 0;
return node.getTotalChildCount$();
});

Clazz.newMeth(C$, 'getVisiblePathsFrom$javax_swing_tree_TreePath',  function (path) {
if (path == null ) return null;
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (node != null ) {
return Clazz.new_($I$(6,1).c$$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode,[this, null, node]);
}var parentPath=path.getParentPath$();
node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [parentPath, true, false]);
if (node != null  && node.isExpanded$() ) {
return Clazz.new_([this, null, node, this.treeModel.getIndexOfChild$O$O(parentPath.getLastPathComponent$(), path.getLastPathComponent$())],$I$(6,1).c$$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode$I);
}return null;
});

Clazz.newMeth(C$, 'setExpandedState$javax_swing_tree_TreePath$Z',  function (path, isExpanded) {
if (isExpanded) p$1.ensurePathIsExpanded$javax_swing_tree_TreePath$Z.apply(this, [path, true]);
 else if (path != null ) {
var parentPath=path.getParentPath$();
if (parentPath != null ) {
var parentNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [parentPath, false, true]);
if (parentNode != null ) parentNode.makeVisible$();
}var childNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (childNode != null ) childNode.collapse$Z(true);
}});

Clazz.newMeth(C$, 'getExpandedState$javax_swing_tree_TreePath',  function (path) {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
return (node != null ) ? (node.isVisible$() && node.isExpanded$() ) : false;
});

Clazz.newMeth(C$, 'treeNodesChanged$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedIndexs;
var changedParent=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [$I$(7,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]), false, false]);
var maxCounter;
changedIndexs=e.getChildIndices$();
if (changedParent != null ) {
if (changedIndexs != null  && (maxCounter=changedIndexs.length) > 0 ) {
var parentValue=changedParent.getUserObject$();
for (var counter=0; counter < maxCounter; counter++) {
var child=changedParent.getChildAtModelIndex$I(changedIndexs[counter]);
if (child != null ) {
child.setUserObject$O(this.treeModel.getChild$O$I(parentValue, changedIndexs[counter]));
}}
if (changedParent.isVisible$() && changedParent.isExpanded$() ) p$1.visibleNodesChanged.apply(this, []);
} else if (changedParent === this.root  && changedParent.isVisible$()  && changedParent.isExpanded$() ) {
p$1.visibleNodesChanged.apply(this, []);
}}}});

Clazz.newMeth(C$, 'treeNodesInserted$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedIndexs;
var changedParent=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [$I$(7,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]), false, false]);
var maxCounter;
changedIndexs=e.getChildIndices$();
if (changedParent != null  && changedIndexs != null   && (maxCounter=changedIndexs.length) > 0 ) {
var isVisible=(changedParent.isVisible$() && changedParent.isExpanded$() );
for (var counter=0; counter < maxCounter; counter++) {
changedParent.childInsertedAtModelIndex$I$Z(changedIndexs[counter], isVisible);
}
if (isVisible && this.treeSelectionModel != null  ) this.treeSelectionModel.resetRowSelection$();
if (changedParent.isVisible$()) p$1.visibleNodesChanged.apply(this, []);
}}});

Clazz.newMeth(C$, 'treeNodesRemoved$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedIndexs;
var maxCounter;
var parentPath=$I$(7,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]);
var changedParentNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [parentPath, false, false]);
changedIndexs=e.getChildIndices$();
if (changedParentNode != null  && changedIndexs != null   && (maxCounter=changedIndexs.length) > 0 ) {
var children=e.getChildren$();
var isVisible=(changedParentNode.isVisible$() && changedParentNode.isExpanded$() );
for (var counter=maxCounter - 1; counter >= 0; counter--) {
changedParentNode.removeChildAtModelIndex$I$Z(changedIndexs[counter], isVisible);
}
if (isVisible) {
if (this.treeSelectionModel != null ) this.treeSelectionModel.resetRowSelection$();
if (this.treeModel.getChildCount$O(changedParentNode.getUserObject$()) == 0 && changedParentNode.isLeaf$() ) {
changedParentNode.collapse$Z(false);
}p$1.visibleNodesChanged.apply(this, []);
} else if (changedParentNode.isVisible$()) p$1.visibleNodesChanged.apply(this, []);
}}});

Clazz.newMeth(C$, 'treeStructureChanged$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedPath=$I$(7,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]);
var changedNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [changedPath, false, false]);
if (changedNode === this.root  || (changedNode == null  && ((changedPath == null  && this.treeModel != null   && this.treeModel.getRoot$() == null  ) || (changedPath != null  && changedPath.getPathCount$() <= 1 ) ) ) ) {
p$1.rebuild$Z.apply(this, [true]);
} else if (changedNode != null ) {
var wasExpanded;
var wasVisible;
var parent=changedNode.getParent$();
wasExpanded=changedNode.isExpanded$();
wasVisible=changedNode.isVisible$();
var index=parent.getIndex$javax_swing_tree_TreeNode(changedNode);
changedNode.collapse$Z(false);
parent.remove$I(index);
if (wasVisible && wasExpanded ) {
var row=changedNode.getRow$();
parent.resetChildrenRowsFrom$I$I$I(row, index, changedNode.getChildIndex$());
changedNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [changedPath, false, true]);
changedNode.expand$();
}if (this.treeSelectionModel != null  && wasVisible  && wasExpanded ) this.treeSelectionModel.resetRowSelection$();
if (wasVisible) p$1.visibleNodesChanged.apply(this, []);
}}});

Clazz.newMeth(C$, 'visibleNodesChanged',  function () {
}, p$1);

Clazz.newMeth(C$, 'getBounds$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode$I$java_awt_Rectangle',  function (parent, childIndex, placeIn) {
var expanded;
var level;
var row;
var value;
if (childIndex == -1) {
row=parent.getRow$();
value=parent.getUserObject$();
expanded=parent.isExpanded$();
level=parent.getLevel$();
} else {
row=parent.getRowToModelIndex$I(childIndex);
value=this.treeModel.getChild$O$I(parent.getUserObject$(), childIndex);
expanded=false;
level=parent.getLevel$() + 1;
}var bounds=this.getNodeDimensions$O$I$I$Z$java_awt_Rectangle(value, row, level, expanded, this.boundsBuffer);
if (bounds == null ) return null;
if (placeIn == null ) placeIn=Clazz.new_($I$(3,1));
placeIn.x=bounds.x;
placeIn.height=this.getRowHeight$();
placeIn.y=row * placeIn.height;
placeIn.width=bounds.width;
return placeIn;
}, p$1);

Clazz.newMeth(C$, 'adjustRowCountBy$I',  function (changeAmount) {
this.rowCount+=changeAmount;
}, p$1);

Clazz.newMeth(C$, 'addMapping$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode',  function (node) {
this.treePathMapping.put$O$O(node.getTreePath$(), node);
}, p$1);

Clazz.newMeth(C$, 'removeMapping$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode',  function (node) {
this.treePathMapping.remove$O(node.getTreePath$());
}, p$1);

Clazz.newMeth(C$, 'getMapping$javax_swing_tree_TreePath',  function (path) {
return this.treePathMapping.get$O(path);
}, p$1);

Clazz.newMeth(C$, 'rebuild$Z',  function (clearSelection) {
var rootUO;
this.treePathMapping.clear$();
if (this.treeModel != null  && (rootUO=this.treeModel.getRoot$()) != null  ) {
this.root=p$1.createNodeForValue$O$I.apply(this, [rootUO, 0]);
this.root.path=Clazz.new_($I$(1,1).c$$O,[rootUO]);
p$1.addMapping$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode.apply(this, [this.root]);
if (this.isRootVisible$()) {
this.rowCount=1;
this.root.row=0;
} else {
this.rowCount=0;
this.root.row=-1;
}this.root.expand$();
} else {
this.root=null;
this.rowCount=0;
}if (clearSelection && this.treeSelectionModel != null  ) {
this.treeSelectionModel.clearSelection$();
}p$1.visibleNodesChanged.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getRowContainingYLocation$I',  function (location) {
if (this.getRowCount$() == 0) return -1;
return Math.max(0, Math.min(this.getRowCount$() - 1, (location/this.getRowHeight$()|0)));
}, p$1);

Clazz.newMeth(C$, 'ensurePathIsExpanded$javax_swing_tree_TreePath$Z',  function (aPath, expandLast) {
if (aPath != null ) {
if (this.treeModel.isLeaf$O(aPath.getLastPathComponent$())) {
aPath=aPath.getParentPath$();
expandLast=true;
}if (aPath != null ) {
var lastNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [aPath, false, true]);
if (lastNode != null ) {
lastNode.makeVisible$();
if (expandLast) lastNode.expand$();
return true;
}}}return false;
}, p$1);

Clazz.newMeth(C$, 'createNodeForValue$O$I',  function (value, childIndex) {
return Clazz.new_($I$(8,1).c$$O$I$I,[this, null, value, childIndex, -1]);
}, p$1);

Clazz.newMeth(C$, 'getNodeForPath$javax_swing_tree_TreePath$Z$Z',  function (path, onlyIfVisible, shouldCreate) {
if (path != null ) {
var node;
node=p$1.getMapping$javax_swing_tree_TreePath.apply(this, [path]);
if (node != null ) {
if (onlyIfVisible && !node.isVisible$() ) return null;
return node;
}if (onlyIfVisible) return null;
var paths;
if (this.tempStacks.size$() == 0) {
paths=Clazz.new_($I$(2,1));
} else {
paths=this.tempStacks.pop$();
}try {
paths.push$O(path);
path=path.getParentPath$();
node=null;
while (path != null ){
node=p$1.getMapping$javax_swing_tree_TreePath.apply(this, [path]);
if (node != null ) {
while (node != null  && paths.size$() > 0 ){
path=paths.pop$();
node=node.createChildFor$O(path.getLastPathComponent$());
}
return node;
}paths.push$O(path);
path=path.getParentPath$();
}
} finally {
paths.removeAllElements$();
this.tempStacks.push$O(paths);
}
return null;
}return null;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FixedHeightLayoutCache, "FHTreeStateNode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isExpanded'],'I',['childIndex','childCount','row'],'O',['path','javax.swing.tree.TreePath']]]

Clazz.newMeth(C$, 'c$$O$I$I',  function (userObject, childIndex, row) {
;C$.superclazz.c$$O.apply(this,[userObject]);C$.$init$.apply(this);
this.childIndex=childIndex;
this.row=row;
}, 1);

Clazz.newMeth(C$, 'setParent$javax_swing_tree_MutableTreeNode',  function (parent) {
C$.superclazz.prototype.setParent$javax_swing_tree_MutableTreeNode.apply(this, [parent]);
if (parent != null ) {
this.path=(parent).getTreePath$().pathByAddingChild$O(this.getUserObject$());
p$1.addMapping$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [this]);
}});

Clazz.newMeth(C$, 'remove$I',  function (childIndex) {
var node=this.getChildAt$I(childIndex);
node.removeFromMapping$();
C$.superclazz.prototype.remove$I.apply(this, [childIndex]);
});

Clazz.newMeth(C$, 'setUserObject$O',  function (o) {
C$.superclazz.prototype.setUserObject$O.apply(this, [o]);
if (this.path != null ) {
var parent=this.getParent$();
if (parent != null ) this.resetChildrenPaths$javax_swing_tree_TreePath(parent.getTreePath$());
 else this.resetChildrenPaths$javax_swing_tree_TreePath(null);
}});

Clazz.newMeth(C$, 'getChildIndex$',  function () {
return this.childIndex;
});

Clazz.newMeth(C$, 'getTreePath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'getChildAtModelIndex$I',  function (index) {
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) if ((this.getChildAt$I(counter)).childIndex == index) return this.getChildAt$I(counter);

return null;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
var parent=this.getParent$();
if (parent == null ) return true;
return (parent.isExpanded$() && parent.isVisible$() );
});

Clazz.newMeth(C$, 'getRow$',  function () {
return this.row;
});

Clazz.newMeth(C$, 'getRowToModelIndex$I',  function (index) {
var child;
var lastRow=this.getRow$() + 1;
var retValue=lastRow;
for (var counter=0, maxCounter=this.getChildCount$(); counter < maxCounter; counter++) {
child=this.getChildAt$I(counter);
if (child.childIndex >= index) {
if (child.childIndex == index) return child.row;
if (counter == 0) return this.getRow$() + 1 + index ;
return child.row - (child.childIndex - index);
}}
return this.getRow$() + 1 + this.getTotalChildCount$()  - (this.childCount - index);
});

Clazz.newMeth(C$, 'getTotalChildCount$',  function () {
if (this.isExpanded$()) {
var parent=this.getParent$();
var pIndex;
if (parent != null  && (pIndex=parent.getIndex$javax_swing_tree_TreeNode(this)) + 1 < parent.getChildCount$() ) {
var nextSibling=parent.getChildAt$I(pIndex + 1);
return nextSibling.row - this.row - (nextSibling.childIndex - this.childIndex) ;
} else {
var retCount=this.childCount;
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) {
retCount+=(this.getChildAt$I(counter)).getTotalChildCount$();
}
return retCount;
}}return 0;
});

Clazz.newMeth(C$, 'isExpanded$',  function () {
return this.isExpanded;
});

Clazz.newMeth(C$, 'getVisibleLevel$',  function () {
if (this.b$['javax.swing.tree.AbstractLayoutCache'].isRootVisible$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], [])) {
return this.getLevel$();
} else {
return this.getLevel$() - 1;
}});

Clazz.newMeth(C$, 'resetChildrenPaths$javax_swing_tree_TreePath',  function (parentPath) {
p$1.removeMapping$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [this]);
if (parentPath == null ) this.path=Clazz.new_([this.getUserObject$()],$I$(1,1).c$$O);
 else this.path=parentPath.pathByAddingChild$O(this.getUserObject$());
p$1.addMapping$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [this]);
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) (this.getChildAt$I(counter)).resetChildrenPaths$javax_swing_tree_TreePath(this.path);

});

Clazz.newMeth(C$, 'removeFromMapping$',  function () {
if (this.path != null ) {
p$1.removeMapping$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [this]);
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) (this.getChildAt$I(counter)).removeFromMapping$();

}});

Clazz.newMeth(C$, 'createChildFor$O',  function (userObject) {
var newChildIndex=this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeModel.getIndexOfChild$O$O(this.getUserObject$(), userObject);
if (newChildIndex < 0) return null;
var aNode;
var child=p$1.createNodeForValue$O$I.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [userObject, newChildIndex]);
var childRow;
if (this.isVisible$()) {
childRow=this.getRowToModelIndex$I(newChildIndex);
} else {
childRow=-1;
}child.row=childRow;
for (var counter=0, maxCounter=this.getChildCount$(); counter < maxCounter; counter++) {
aNode=this.getChildAt$I(counter);
if (aNode.childIndex > newChildIndex) {
this.insert$javax_swing_tree_MutableTreeNode$I(child, counter);
return child;
}}
this.add$javax_swing_tree_MutableTreeNode(child);
return child;
});

Clazz.newMeth(C$, 'adjustRowBy$I',  function (amount) {
this.row+=amount;
if (this.isExpanded) {
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) (this.getChildAt$I(counter)).adjustRowBy$I(amount);

}});

Clazz.newMeth(C$, 'adjustRowBy$I$I',  function (amount, startIndex) {
if (this.isExpanded) {
for (var counter=this.getChildCount$() - 1; counter >= startIndex; counter--) (this.getChildAt$I(counter)).adjustRowBy$I(amount);

}var parent=this.getParent$();
if (parent != null ) {
parent.adjustRowBy$I$I(amount, parent.getIndex$javax_swing_tree_TreeNode(this) + 1);
}});

Clazz.newMeth(C$, 'didExpand$',  function () {
var nextRow=this.setRowAndChildren$I(this.row);
var parent=this.getParent$();
var childRowCount=nextRow - this.row - 1 ;
if (parent != null ) {
parent.adjustRowBy$I$I(childRowCount, parent.getIndex$javax_swing_tree_TreeNode(this) + 1);
}p$1.adjustRowCountBy$I.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [childRowCount]);
});

Clazz.newMeth(C$, 'setRowAndChildren$I',  function (nextRow) {
this.row=nextRow;
if (!this.isExpanded$()) return this.row + 1;
var lastRow=this.row + 1;
var lastModelIndex=0;
var child;
var maxCounter=this.getChildCount$();
for (var counter=0; counter < maxCounter; counter++) {
child=this.getChildAt$I(counter);
lastRow+=(child.childIndex - lastModelIndex);
lastModelIndex=child.childIndex + 1;
if (child.isExpanded) {
lastRow=child.setRowAndChildren$I(lastRow);
} else {
child.row=lastRow++;
}}
return lastRow + this.childCount - lastModelIndex;
});

Clazz.newMeth(C$, 'resetChildrenRowsFrom$I$I$I',  function (newRow, childIndex, modelIndex) {
var lastRow=newRow;
var lastModelIndex=modelIndex;
var node;
var maxCounter=this.getChildCount$();
for (var counter=childIndex; counter < maxCounter; counter++) {
node=this.getChildAt$I(counter);
lastRow+=(node.childIndex - lastModelIndex);
lastModelIndex=node.childIndex + 1;
if (node.isExpanded) {
lastRow=node.setRowAndChildren$I(lastRow);
} else {
node.row=lastRow++;
}}
lastRow+=this.childCount - lastModelIndex;
node=this.getParent$();
if (node != null ) {
node.resetChildrenRowsFrom$I$I$I(lastRow, node.getIndex$javax_swing_tree_TreeNode(this) + 1, this.childIndex + 1);
} else {
this.b$['javax.swing.tree.FixedHeightLayoutCache'].rowCount=lastRow;
}});

Clazz.newMeth(C$, 'makeVisible$',  function () {
var parent=this.getParent$();
if (parent != null ) parent.expandParentAndReceiver$();
});

Clazz.newMeth(C$, 'expandParentAndReceiver$',  function () {
var parent=this.getParent$();
if (parent != null ) parent.expandParentAndReceiver$();
this.expand$();
});

Clazz.newMeth(C$, 'expand$',  function () {
if (!this.isExpanded && !this.isLeaf$() ) {
var visible=this.isVisible$();
this.isExpanded=true;
this.childCount=this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeModel.getChildCount$O(this.getUserObject$());
if (visible) {
this.didExpand$();
}if (visible && this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeSelectionModel != null  ) {
this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeSelectionModel.resetRowSelection$();
}}});

Clazz.newMeth(C$, 'collapse$Z',  function (adjustRows) {
if (this.isExpanded) {
if (this.isVisible$() && adjustRows ) {
var childCount=this.getTotalChildCount$();
this.isExpanded=false;
p$1.adjustRowCountBy$I.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [-childCount]);
this.adjustRowBy$I$I(-childCount, 0);
} else this.isExpanded=false;
if (adjustRows && this.isVisible$() && this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeSelectionModel != null   ) this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeSelectionModel.resetRowSelection$();
}});

Clazz.newMeth(C$, 'isLeaf$',  function () {
var model=this.b$['javax.swing.tree.AbstractLayoutCache'].getModel$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []);
return (model != null ) ? model.isLeaf$O(this.getUserObject$()) : true;
});

Clazz.newMeth(C$, 'addNode$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode',  function (newChild) {
var added=false;
var childIndex=newChild.getChildIndex$();
for (var counter=0, maxCounter=this.getChildCount$(); counter < maxCounter; counter++) {
if ((this.getChildAt$I(counter)).getChildIndex$() > childIndex) {
added=true;
this.insert$javax_swing_tree_MutableTreeNode$I(newChild, counter);
counter=maxCounter;
}}
if (!added) this.add$javax_swing_tree_MutableTreeNode(newChild);
});

Clazz.newMeth(C$, 'removeChildAtModelIndex$I$Z',  function (modelIndex, isChildVisible) {
var childNode=this.getChildAtModelIndex$I(modelIndex);
if (childNode != null ) {
var row=childNode.getRow$();
var index=this.getIndex$javax_swing_tree_TreeNode(childNode);
childNode.collapse$Z(false);
this.remove$I(index);
this.adjustChildIndexs$I$I(index, -1);
--this.childCount;
if (isChildVisible) {
this.resetChildrenRowsFrom$I$I$I(row, index, modelIndex);
}} else {
var maxCounter=this.getChildCount$();
var aChild;
for (var counter=0; counter < maxCounter; counter++) {
aChild=this.getChildAt$I(counter);
if (aChild.childIndex >= modelIndex) {
if (isChildVisible) {
this.adjustRowBy$I$I(-1, counter);
p$1.adjustRowCountBy$I.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [-1]);
}for (; counter < maxCounter; counter++) --(this.getChildAt$I(counter)).childIndex;

--this.childCount;
return;
}}
if (isChildVisible) {
this.adjustRowBy$I$I(-1, maxCounter);
p$1.adjustRowCountBy$I.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [-1]);
}--this.childCount;
}});

Clazz.newMeth(C$, 'adjustChildIndexs$I$I',  function (index, amount) {
for (var counter=index, maxCounter=this.getChildCount$(); counter < maxCounter; counter++) {
(this.getChildAt$I(counter)).childIndex+=amount;
}
});

Clazz.newMeth(C$, 'childInsertedAtModelIndex$I$Z',  function (index, isExpandedAndVisible) {
var aChild;
var maxCounter=this.getChildCount$();
for (var counter=0; counter < maxCounter; counter++) {
aChild=this.getChildAt$I(counter);
if (aChild.childIndex >= index) {
if (isExpandedAndVisible) {
this.adjustRowBy$I$I(1, counter);
p$1.adjustRowCountBy$I.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [1]);
}for (; counter < maxCounter; counter++) ++(this.getChildAt$I(counter)).childIndex;

++this.childCount;
return;
}}
if (isExpandedAndVisible) {
this.adjustRowBy$I$I(1, maxCounter);
p$1.adjustRowCountBy$I.apply(this.b$['javax.swing.tree.FixedHeightLayoutCache'], [1]);
}++this.childCount;
});

Clazz.newMeth(C$, 'getPathForRow$I$I$javax_swing_tree_FixedHeightLayoutCache_SearchInfo',  function (row, nextRow, info) {
if (this.row == row) {
info.node=this;
info.isNodeParentNode=false;
info.childIndex=this.childIndex;
return true;
}var child;
var lastChild=null;
for (var counter=0, maxCounter=this.getChildCount$(); counter < maxCounter; counter++) {
child=this.getChildAt$I(counter);
if (child.row > row) {
if (counter == 0) {
info.node=this;
info.isNodeParentNode=true;
info.childIndex=row - this.row - 1 ;
return true;
} else {
var lastChildEndRow=1 + child.row - (child.childIndex - lastChild.childIndex);
if (row < lastChildEndRow) {
return lastChild.getPathForRow$I$I$javax_swing_tree_FixedHeightLayoutCache_SearchInfo(row, lastChildEndRow, info);
}info.node=this;
info.isNodeParentNode=true;
info.childIndex=row - lastChildEndRow + lastChild.childIndex + 1;
return true;
}}lastChild=child;
}
if (lastChild != null ) {
var lastChildEndRow=nextRow - (this.childCount - lastChild.childIndex) + 1;
if (row < lastChildEndRow) {
return lastChild.getPathForRow$I$I$javax_swing_tree_FixedHeightLayoutCache_SearchInfo(row, lastChildEndRow, info);
}info.node=this;
info.isNodeParentNode=true;
info.childIndex=row - lastChildEndRow + lastChild.childIndex + 1;
return true;
} else {
var retChildIndex=row - this.row - 1 ;
if (retChildIndex >= this.childCount) {
return false;
}info.node=this;
info.isNodeParentNode=true;
info.childIndex=retChildIndex;
return true;
}});

Clazz.newMeth(C$, 'getCountTo$I',  function (stopIndex) {
var aChild;
var retCount=stopIndex + 1;
for (var counter=0, maxCounter=this.getChildCount$(); counter < maxCounter; counter++) {
aChild=this.getChildAt$I(counter);
if (aChild.childIndex >= stopIndex) counter=maxCounter;
 else retCount+=aChild.getTotalChildCount$();
}
if (this.parent != null ) return retCount + (this.getParent$()).getCountTo$I(this.childIndex);
if (!this.b$['javax.swing.tree.AbstractLayoutCache'].isRootVisible$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], [])) return (retCount - 1);
return retCount;
});

Clazz.newMeth(C$, 'getNumExpandedChildrenTo$I',  function (stopIndex) {
var aChild;
var retCount=stopIndex;
for (var counter=0, maxCounter=this.getChildCount$(); counter < maxCounter; counter++) {
aChild=this.getChildAt$I(counter);
if (aChild.childIndex >= stopIndex) return retCount;
 else {
retCount+=aChild.getTotalChildCount$();
}}
return retCount;
});

Clazz.newMeth(C$, 'didAdjustTree$',  function () {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FixedHeightLayoutCache, "SearchInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isNodeParentNode'],'I',['childIndex'],'O',['node','javax.swing.tree.FixedHeightLayoutCache.FHTreeStateNode']]]

Clazz.newMeth(C$, 'getPath$',  function () {
if (this.node == null ) return null;
if (this.isNodeParentNode) return this.node.getTreePath$().pathByAddingChild$O(this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeModel.getChild$O$I(this.node.getUserObject$(), this.childIndex));
return this.node.path;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FixedHeightLayoutCache, "VisibleFHTreeStateNodeEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nextIndex','childCount'],'O',['parent','javax.swing.tree.FixedHeightLayoutCache.FHTreeStateNode']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode',  function (node) {
C$.c$$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode$I.apply(this, [node, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_FixedHeightLayoutCache_FHTreeStateNode$I',  function (parent, startIndex) {
;C$.$init$.apply(this);
this.parent=parent;
this.nextIndex=startIndex;
this.childCount=this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeModel.getChildCount$O(this.parent.getUserObject$());
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return (this.parent != null );
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (!this.hasMoreElements$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more visible paths"]);
var retObject;
if (this.nextIndex == -1) retObject=this.parent.getTreePath$();
 else {
var node=this.parent.getChildAtModelIndex$I(this.nextIndex);
if (node == null ) retObject=this.parent.getTreePath$().pathByAddingChild$O(this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeModel.getChild$O$I(this.parent.getUserObject$(), this.nextIndex));
 else retObject=node.getTreePath$();
}this.updateNextObject$();
return retObject;
});

Clazz.newMeth(C$, 'updateNextObject$',  function () {
if (!this.updateNextIndex$()) {
this.findNextValidParent$();
}});

Clazz.newMeth(C$, 'findNextValidParent$',  function () {
if (this.parent === this.b$['javax.swing.tree.FixedHeightLayoutCache'].root ) {
this.parent=null;
return false;
}while (this.parent != null ){
var newParent=this.parent.getParent$();
if (newParent != null ) {
this.nextIndex=this.parent.childIndex;
this.parent=newParent;
this.childCount=this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeModel.getChildCount$O(this.parent.getUserObject$());
if (this.updateNextIndex$()) return true;
} else this.parent=null;
}
return false;
});

Clazz.newMeth(C$, 'updateNextIndex$',  function () {
if (this.nextIndex == -1 && !this.parent.isExpanded$() ) {
return false;
}if (this.childCount == 0) {
return false;
} else if (++this.nextIndex >= this.childCount) {
return false;
}var child=this.parent.getChildAtModelIndex$I(this.nextIndex);
if (child != null  && child.isExpanded$() ) {
this.parent=child;
this.nextIndex=-1;
this.childCount=this.b$['javax.swing.tree.FixedHeightLayoutCache'].treeModel.getChildCount$O(child.getUserObject$());
}return true;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

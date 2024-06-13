(function(){var P$=Clazz.newPackage("javax.swing.tree"),p$1={},I$=[[0,'javax.swing.tree.DefaultMutableTreeNode','java.awt.Rectangle','javax.swing.tree.TreePath','java.util.Stack','java.util.Vector','java.util.Hashtable',['javax.swing.tree.VariableHeightLayoutCache','.VisibleTreeStateNodeEnumeration'],'sun.swing.SwingUtilities2',['javax.swing.tree.VariableHeightLayoutCache','.TreeStateNode']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VariableHeightLayoutCache", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.tree.AbstractLayoutCache');
C$.$classes$=[['TreeStateNode',2],['VisibleTreeStateNodeEnumeration',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['updateNodeSizes'],'O',['visibleNodes','java.util.Vector','root','javax.swing.tree.VariableHeightLayoutCache.TreeStateNode','boundsBuffer','java.awt.Rectangle','treePathMapping','java.util.Hashtable','tempStacks','java.util.Stack']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.tempStacks=Clazz.new_($I$(4,1));
this.visibleNodes=Clazz.new_($I$(5,1));
this.boundsBuffer=Clazz.new_($I$(2,1));
this.treePathMapping=Clazz.new_($I$(6,1));
}, 1);

Clazz.newMeth(C$, 'setModel$javax_swing_tree_TreeModel',  function (newModel) {
C$.superclazz.prototype.setModel$javax_swing_tree_TreeModel.apply(this, [newModel]);
p$1.rebuild$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'setRootVisible$Z',  function (rootVisible) {
if (this.isRootVisible$() != rootVisible  && this.root != null  ) {
if (rootVisible) {
this.root.updatePreferredSize$I(0);
this.visibleNodes.insertElementAt$O$I(this.root, 0);
} else if (this.visibleNodes.size$() > 0) {
this.visibleNodes.removeElementAt$I(0);
if (this.treeSelectionModel != null ) this.treeSelectionModel.removeSelectionPath$javax_swing_tree_TreePath(this.root.getTreePath$());
}if (this.treeSelectionModel != null ) this.treeSelectionModel.resetRowSelection$();
if (this.getRowCount$() > 0) p$1.getNode$I.apply(this, [0]).setYOrigin$I(0);
p$1.updateYLocationsFrom$I.apply(this, [0]);
p$1.visibleNodesChanged.apply(this, []);
}C$.superclazz.prototype.setRootVisible$Z.apply(this, [rootVisible]);
});

Clazz.newMeth(C$, 'setRowHeight$I',  function (rowHeight) {
if (rowHeight != this.getRowHeight$()) {
C$.superclazz.prototype.setRowHeight$I.apply(this, [rowHeight]);
this.invalidateSizes$();
p$1.visibleNodesChanged.apply(this, []);
}});

Clazz.newMeth(C$, 'setNodeDimensions$javax_swing_tree_AbstractLayoutCache_NodeDimensions',  function (nd) {
C$.superclazz.prototype.setNodeDimensions$javax_swing_tree_AbstractLayoutCache_NodeDimensions.apply(this, [nd]);
this.invalidateSizes$();
p$1.visibleNodesChanged.apply(this, []);
});

Clazz.newMeth(C$, 'setExpandedState$javax_swing_tree_TreePath$Z',  function (path, isExpanded) {
if (path != null ) {
if (isExpanded) p$1.ensurePathIsExpanded$javax_swing_tree_TreePath$Z.apply(this, [path, true]);
 else {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, false, true]);
if (node != null ) {
node.makeVisible$();
node.collapse$();
}}}});

Clazz.newMeth(C$, 'getExpandedState$javax_swing_tree_TreePath',  function (path) {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
return (node != null ) ? (node.isVisible$() && node.isExpanded$() ) : false;
});

Clazz.newMeth(C$, 'getBounds$javax_swing_tree_TreePath$java_awt_Rectangle',  function (path, placeIn) {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (node != null ) {
if (this.updateNodeSizes) p$1.updateNodeSizes$Z.apply(this, [false]);
return node.getNodeBounds$java_awt_Rectangle(placeIn);
}return null;
});

Clazz.newMeth(C$, 'getPathForRow$I',  function (row) {
if (row >= 0 && row < this.getRowCount$() ) {
return p$1.getNode$I.apply(this, [row]).getTreePath$();
}return null;
});

Clazz.newMeth(C$, 'getRowForPath$javax_swing_tree_TreePath',  function (path) {
if (path == null ) return -1;
var visNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (visNode != null ) return visNode.getRow$();
return -1;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
return this.visibleNodes.size$();
});

Clazz.newMeth(C$, 'invalidatePathBounds$javax_swing_tree_TreePath',  function (path) {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (node != null ) {
node.markSizeInvalid$();
if (node.isVisible$()) p$1.updateYLocationsFrom$I.apply(this, [node.getRow$()]);
}});

Clazz.newMeth(C$, 'getPreferredHeight$',  function () {
var rowCount=this.getRowCount$();
if (rowCount > 0) {
var node=p$1.getNode$I.apply(this, [rowCount - 1]);
return node.getYOrigin$() + node.getPreferredHeight$();
}return 0;
});

Clazz.newMeth(C$, 'getPreferredWidth$java_awt_Rectangle',  function (bounds) {
if (this.updateNodeSizes) p$1.updateNodeSizes$Z.apply(this, [false]);
return p$1.getMaxNodeWidth.apply(this, []);
});

Clazz.newMeth(C$, 'getPathClosestTo$I$I',  function (x, y) {
if (this.getRowCount$() == 0) return null;
if (this.updateNodeSizes) p$1.updateNodeSizes$Z.apply(this, [false]);
var row=p$1.getRowContainingYLocation$I.apply(this, [y]);
return p$1.getNode$I.apply(this, [row]).getTreePath$();
});

Clazz.newMeth(C$, 'getVisiblePathsFrom$javax_swing_tree_TreePath',  function (path) {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
if (node != null ) {
return Clazz.new_($I$(7,1).c$$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode,[this, null, node]);
}return null;
});

Clazz.newMeth(C$, 'getVisibleChildCount$javax_swing_tree_TreePath',  function (path) {
var node=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
return (node != null ) ? node.getVisibleChildCount$() : 0;
});

Clazz.newMeth(C$, 'invalidateSizes$',  function () {
if (this.root != null ) this.root.deepMarkSizeInvalid$();
if (!this.isFixedRowHeight$() && this.visibleNodes.size$() > 0 ) {
p$1.updateNodeSizes$Z.apply(this, [true]);
}});

Clazz.newMeth(C$, 'isExpanded$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
var lastNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [path, true, false]);
return (lastNode != null  && lastNode.isExpanded$() );
}return false;
});

Clazz.newMeth(C$, 'treeNodesChanged$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedIndexs;
var changedNode;
changedIndexs=e.getChildIndices$();
changedNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [$I$(8,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]), false, false]);
if (changedNode != null ) {
var changedValue=changedNode.getValue$();
changedNode.updatePreferredSize$();
if (changedNode.hasBeenExpanded$() && changedIndexs != null  ) {
var counter;
var changedChildNode;
for (counter=0; counter < changedIndexs.length; counter++) {
changedChildNode=changedNode.getChildAt$I(changedIndexs[counter]);
changedChildNode.setUserObject$O(this.treeModel.getChild$O$I(changedValue, changedIndexs[counter]));
changedChildNode.updatePreferredSize$();
}
} else if (changedNode === this.root ) {
changedNode.updatePreferredSize$();
}if (!this.isFixedRowHeight$()) {
var aRow=changedNode.getRow$();
if (aRow != -1) p$1.updateYLocationsFrom$I.apply(this, [aRow]);
}p$1.visibleNodesChanged.apply(this, []);
}}});

Clazz.newMeth(C$, 'treeNodesInserted$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedIndexs;
var changedParentNode;
changedIndexs=e.getChildIndices$();
changedParentNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [$I$(8,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]), false, false]);
if (changedParentNode != null  && changedIndexs != null   && changedIndexs.length > 0 ) {
if (changedParentNode.hasBeenExpanded$()) {
var makeVisible;
var counter;
var changedParent;
var newNode;
var oldChildCount=changedParentNode.getChildCount$();
changedParent=changedParentNode.getValue$();
makeVisible=((changedParentNode === this.root  && !this.rootVisible ) || (changedParentNode.getRow$() != -1 && changedParentNode.isExpanded$() ) );
for (counter=0; counter < changedIndexs.length; counter++) {
newNode=p$1.createNodeAt$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode$I.apply(this, [changedParentNode, changedIndexs[counter]]);
}
if (oldChildCount == 0) {
changedParentNode.updatePreferredSize$();
}if (this.treeSelectionModel != null ) this.treeSelectionModel.resetRowSelection$();
if (!this.isFixedRowHeight$() && (makeVisible || (oldChildCount == 0 && changedParentNode.isVisible$() ) ) ) {
if (changedParentNode === this.root ) p$1.updateYLocationsFrom$I.apply(this, [0]);
 else p$1.updateYLocationsFrom$I.apply(this, [changedParentNode.getRow$()]);
p$1.visibleNodesChanged.apply(this, []);
} else if (makeVisible) p$1.visibleNodesChanged.apply(this, []);
} else if (this.treeModel.getChildCount$O(changedParentNode.getValue$()) - changedIndexs.length == 0) {
changedParentNode.updatePreferredSize$();
if (!this.isFixedRowHeight$() && changedParentNode.isVisible$() ) p$1.updateYLocationsFrom$I.apply(this, [changedParentNode.getRow$()]);
}}}});

Clazz.newMeth(C$, 'treeNodesRemoved$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedIndexs;
var changedParentNode;
changedIndexs=e.getChildIndices$();
changedParentNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [$I$(8,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]), false, false]);
if (changedParentNode != null  && changedIndexs != null   && changedIndexs.length > 0 ) {
if (changedParentNode.hasBeenExpanded$()) {
var makeInvisible;
var counter;
var removedRow;
var removedNode;
makeInvisible=((changedParentNode === this.root  && !this.rootVisible ) || (changedParentNode.getRow$() != -1 && changedParentNode.isExpanded$() ) );
for (counter=changedIndexs.length - 1; counter >= 0; counter--) {
removedNode=changedParentNode.getChildAt$I(changedIndexs[counter]);
if (removedNode.isExpanded$()) {
removedNode.collapse$Z(false);
}if (makeInvisible) {
removedRow=removedNode.getRow$();
if (removedRow != -1) {
this.visibleNodes.removeElementAt$I(removedRow);
}}changedParentNode.remove$I(changedIndexs[counter]);
}
if (changedParentNode.getChildCount$() == 0) {
changedParentNode.updatePreferredSize$();
if (changedParentNode.isExpanded$() && changedParentNode.isLeaf$() ) {
changedParentNode.collapse$Z(false);
}}if (this.treeSelectionModel != null ) this.treeSelectionModel.resetRowSelection$();
if (!this.isFixedRowHeight$() && (makeInvisible || (changedParentNode.getChildCount$() == 0 && changedParentNode.isVisible$() ) ) ) {
if (changedParentNode === this.root ) {
if (this.getRowCount$() > 0) p$1.getNode$I.apply(this, [0]).setYOrigin$I(0);
p$1.updateYLocationsFrom$I.apply(this, [0]);
} else p$1.updateYLocationsFrom$I.apply(this, [changedParentNode.getRow$()]);
p$1.visibleNodesChanged.apply(this, []);
} else if (makeInvisible) p$1.visibleNodesChanged.apply(this, []);
} else if (this.treeModel.getChildCount$O(changedParentNode.getValue$()) == 0) {
changedParentNode.updatePreferredSize$();
if (!this.isFixedRowHeight$() && changedParentNode.isVisible$() ) p$1.updateYLocationsFrom$I.apply(this, [changedParentNode.getRow$()]);
}}}});

Clazz.newMeth(C$, 'treeStructureChanged$javax_swing_event_TreeModelEvent',  function (e) {
if (e != null ) {
var changedPath=$I$(8,"getTreePath$javax_swing_event_TreeModelEvent$javax_swing_tree_TreeModel",[e, this.getModel$()]);
var changedNode;
changedNode=p$1.getNodeForPath$javax_swing_tree_TreePath$Z$Z.apply(this, [changedPath, false, false]);
if (changedNode === this.root  || (changedNode == null  && ((changedPath == null  && this.treeModel != null   && this.treeModel.getRoot$() == null  ) || (changedPath != null  && changedPath.getPathCount$() == 1 ) ) ) ) {
p$1.rebuild$Z.apply(this, [true]);
} else if (changedNode != null ) {
var nodeIndex;
var oldRow;
var newNode;
var parent;
var wasExpanded;
var wasVisible;
var newIndex;
wasExpanded=changedNode.isExpanded$();
wasVisible=(changedNode.getRow$() != -1);
parent=changedNode.getParent$();
nodeIndex=parent.getIndex$javax_swing_tree_TreeNode(changedNode);
if (wasVisible && wasExpanded ) {
changedNode.collapse$Z(false);
}if (wasVisible) this.visibleNodes.removeElement$O(changedNode);
changedNode.removeFromParent$();
p$1.createNodeAt$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode$I.apply(this, [parent, nodeIndex]);
newNode=parent.getChildAt$I(nodeIndex);
if (wasVisible && wasExpanded ) newNode.expand$Z(false);
newIndex=newNode.getRow$();
if (!this.isFixedRowHeight$() && wasVisible ) {
if (newIndex == 0) p$1.updateYLocationsFrom$I.apply(this, [newIndex]);
 else p$1.updateYLocationsFrom$I.apply(this, [newIndex - 1]);
p$1.visibleNodesChanged.apply(this, []);
} else if (wasVisible) p$1.visibleNodesChanged.apply(this, []);
}}});

Clazz.newMeth(C$, 'visibleNodesChanged',  function () {
}, p$1);

Clazz.newMeth(C$, 'addMapping$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode',  function (node) {
this.treePathMapping.put$O$O(node.getTreePath$(), node);
}, p$1);

Clazz.newMeth(C$, 'removeMapping$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode',  function (node) {
this.treePathMapping.remove$O(node.getTreePath$());
}, p$1);

Clazz.newMeth(C$, 'getMapping$javax_swing_tree_TreePath',  function (path) {
return this.treePathMapping.get$O(path);
}, p$1);

Clazz.newMeth(C$, 'getBounds$I$java_awt_Rectangle',  function (row, placeIn) {
if (this.updateNodeSizes) p$1.updateNodeSizes$Z.apply(this, [false]);
if (row >= 0 && row < this.getRowCount$() ) {
return p$1.getNode$I.apply(this, [row]).getNodeBounds$java_awt_Rectangle(placeIn);
}return null;
}, p$1);

Clazz.newMeth(C$, 'rebuild$Z',  function (clearSelection) {
var rootObject;
this.treePathMapping.clear$();
if (this.treeModel != null  && (rootObject=this.treeModel.getRoot$()) != null  ) {
this.root=p$1.createNodeForValue$O.apply(this, [rootObject]);
this.root.path=Clazz.new_($I$(3,1).c$$O,[rootObject]);
p$1.addMapping$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode.apply(this, [this.root]);
this.root.updatePreferredSize$I(0);
this.visibleNodes.removeAllElements$();
if (this.isRootVisible$()) this.visibleNodes.addElement$O(this.root);
if (!this.root.isExpanded$()) this.root.expand$();
 else {
var cursor=this.root.children$();
while (cursor.hasMoreElements$()){
this.visibleNodes.addElement$O(cursor.nextElement$());
}
if (!this.isFixedRowHeight$()) p$1.updateYLocationsFrom$I.apply(this, [0]);
}} else {
this.visibleNodes.removeAllElements$();
this.root=null;
}if (clearSelection && this.treeSelectionModel != null  ) {
this.treeSelectionModel.clearSelection$();
}p$1.visibleNodesChanged.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'createNodeAt$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode$I',  function (parent, childIndex) {
var isParentRoot;
var newValue;
var newChildNode;
newValue=this.treeModel.getChild$O$I(parent.getValue$(), childIndex);
newChildNode=p$1.createNodeForValue$O.apply(this, [newValue]);
parent.insert$javax_swing_tree_MutableTreeNode$I(newChildNode, childIndex);
newChildNode.updatePreferredSize$I(-1);
isParentRoot=(parent === this.root );
if (newChildNode != null  && parent.isExpanded$()  && (parent.getRow$() != -1 || isParentRoot ) ) {
var newRow;
if (childIndex == 0) {
if (isParentRoot && !this.isRootVisible$() ) newRow=0;
 else newRow=parent.getRow$() + 1;
} else if (childIndex == parent.getChildCount$()) newRow=parent.getLastVisibleNode$().getRow$() + 1;
 else {
var previousNode;
previousNode=parent.getChildAt$I(childIndex - 1);
newRow=previousNode.getLastVisibleNode$().getRow$() + 1;
}this.visibleNodes.insertElementAt$O$I(newChildNode, newRow);
}return newChildNode;
}, p$1);

Clazz.newMeth(C$, 'getNodeForPath$javax_swing_tree_TreePath$Z$Z',  function (path, onlyIfVisible, shouldCreate) {
if (path != null ) {
var node;
node=p$1.getMapping$javax_swing_tree_TreePath.apply(this, [path]);
if (node != null ) {
if (onlyIfVisible && !node.isVisible$() ) return null;
return node;
}var paths;
if (this.tempStacks.size$() == 0) {
paths=Clazz.new_($I$(4,1));
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
node.getLoadedChildren$Z(shouldCreate);
var childIndex=this.treeModel.getIndexOfChild$O$O(node.getUserObject$(), path.getLastPathComponent$());
if (childIndex == -1 || childIndex >= node.getChildCount$()  || (onlyIfVisible && !node.isVisible$() ) ) {
node=null;
} else node=node.getChildAt$I(childIndex);
}
return node;
}paths.push$O(path);
path=path.getParentPath$();
}
} finally {
paths.removeAllElements$();
this.tempStacks.push$O(paths);
}
}return null;
}, p$1);

Clazz.newMeth(C$, 'updateYLocationsFrom$I',  function (location) {
if (location >= 0 && location < this.getRowCount$() ) {
var counter;
var maxCounter;
var newYOrigin;
var aNode;
aNode=p$1.getNode$I.apply(this, [location]);
newYOrigin=aNode.getYOrigin$() + aNode.getPreferredHeight$();
for (counter=location + 1, maxCounter=this.visibleNodes.size$(); counter < maxCounter; counter++) {
aNode=this.visibleNodes.elementAt$I(counter);
aNode.setYOrigin$I(newYOrigin);
newYOrigin+=aNode.getPreferredHeight$();
}
}}, p$1);

Clazz.newMeth(C$, 'updateNodeSizes$Z',  function (updateAll) {
var aY;
var counter;
var maxCounter;
var node;
this.updateNodeSizes=false;
for (aY=counter=0, maxCounter=this.visibleNodes.size$(); counter < maxCounter; counter++) {
node=this.visibleNodes.elementAt$I(counter);
node.setYOrigin$I(aY);
if (updateAll || !node.hasValidSize$() ) node.updatePreferredSize$I(counter);
aY+=node.getPreferredHeight$();
}
}, p$1);

Clazz.newMeth(C$, 'getRowContainingYLocation$I',  function (location) {
if (this.isFixedRowHeight$()) {
if (this.getRowCount$() == 0) return -1;
return Math.max(0, Math.min(this.getRowCount$() - 1, (location/this.getRowHeight$()|0)));
}var max;
var maxY;
var mid;
var min;
var minY;
var node;
if ((max=this.getRowCount$()) <= 0) return -1;
mid=min=0;
while (min < max){
mid=((max - min)/2|0) + min;
node=this.visibleNodes.elementAt$I(mid);
minY=node.getYOrigin$();
maxY=minY + node.getPreferredHeight$();
if (location < minY) {
max=mid - 1;
} else if (location >= maxY) {
min=mid + 1;
} else break;
}
if (min == max) {
mid=min;
if (mid >= this.getRowCount$()) mid=this.getRowCount$() - 1;
}return mid;
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
}}}}, p$1);

Clazz.newMeth(C$, 'getNode$I',  function (row) {
return this.visibleNodes.elementAt$I(row);
}, p$1);

Clazz.newMeth(C$, 'getMaxNodeWidth',  function () {
var maxWidth=0;
var nodeWidth;
var counter;
var node;
for (counter=this.getRowCount$() - 1; counter >= 0; counter--) {
node=p$1.getNode$I.apply(this, [counter]);
nodeWidth=node.getPreferredWidth$() + node.getXOrigin$();
if (nodeWidth > maxWidth) maxWidth=nodeWidth;
}
return maxWidth;
}, p$1);

Clazz.newMeth(C$, 'createNodeForValue$O',  function (value) {
return Clazz.new_($I$(9,1).c$$O,[this, null, value]);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.VariableHeightLayoutCache, "TreeStateNode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['expanded','hasBeenExpanded'],'I',['preferredWidth','preferredHeight','xOrigin','yOrigin'],'O',['path','javax.swing.tree.TreePath']]]

Clazz.newMeth(C$, 'c$$O',  function (value) {
;C$.superclazz.c$$O.apply(this,[value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setParent$javax_swing_tree_MutableTreeNode',  function (parent) {
C$.superclazz.prototype.setParent$javax_swing_tree_MutableTreeNode.apply(this, [parent]);
if (parent != null ) {
this.path=(parent).getTreePath$().pathByAddingChild$O(this.getUserObject$());
p$1.addMapping$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [this]);
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

Clazz.newMeth(C$, 'children$',  function () {
if (!this.isExpanded$()) {
return $I$(1).EMPTY_ENUMERATION;
} else {
return C$.superclazz.prototype.children$.apply(this, []);
}});

Clazz.newMeth(C$, 'isLeaf$',  function () {
return this.b$['javax.swing.tree.AbstractLayoutCache'].getModel$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []).isLeaf$O(this.getValue$());
});

Clazz.newMeth(C$, 'getNodeBounds$java_awt_Rectangle',  function (placeIn) {
if (placeIn == null ) placeIn=Clazz.new_([this.getXOrigin$(), this.getYOrigin$(), this.getPreferredWidth$(), this.getPreferredHeight$()],$I$(2,1).c$$I$I$I$I);
 else {
placeIn.x=this.getXOrigin$();
placeIn.y=this.getYOrigin$();
placeIn.width=this.getPreferredWidth$();
placeIn.height=this.getPreferredHeight$();
}return placeIn;
});

Clazz.newMeth(C$, 'getXOrigin$',  function () {
if (!this.hasValidSize$()) this.updatePreferredSize$I(this.getRow$());
return this.xOrigin;
});

Clazz.newMeth(C$, 'getYOrigin$',  function () {
if (this.b$['javax.swing.tree.AbstractLayoutCache'].isFixedRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], [])) {
var aRow=this.getRow$();
if (aRow == -1) return -1;
return this.b$['javax.swing.tree.AbstractLayoutCache'].getRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []) * aRow;
}return this.yOrigin;
});

Clazz.newMeth(C$, 'getPreferredHeight$',  function () {
if (this.b$['javax.swing.tree.AbstractLayoutCache'].isFixedRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], [])) return this.b$['javax.swing.tree.AbstractLayoutCache'].getRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []);
 else if (!this.hasValidSize$()) this.updatePreferredSize$I(this.getRow$());
return this.preferredHeight;
});

Clazz.newMeth(C$, 'getPreferredWidth$',  function () {
if (!this.hasValidSize$()) this.updatePreferredSize$I(this.getRow$());
return this.preferredWidth;
});

Clazz.newMeth(C$, 'hasValidSize$',  function () {
return (this.preferredHeight != 0);
});

Clazz.newMeth(C$, 'getRow$',  function () {
return this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.indexOf$O(this);
});

Clazz.newMeth(C$, 'hasBeenExpanded$',  function () {
return this.hasBeenExpanded;
});

Clazz.newMeth(C$, 'isExpanded$',  function () {
return this.expanded;
});

Clazz.newMeth(C$, 'getLastVisibleNode$',  function () {
var node=this;
while (node.isExpanded$() && node.getChildCount$() > 0 )node=node.getLastChild$();

return node;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
if (this === this.b$['javax.swing.tree.VariableHeightLayoutCache'].root ) return true;
var parent=this.getParent$();
return (parent != null  && parent.isExpanded$()  && parent.isVisible$() );
});

Clazz.newMeth(C$, 'getModelChildCount$',  function () {
if (this.hasBeenExpanded) return C$.superclazz.prototype.getChildCount$.apply(this, []);
return this.b$['javax.swing.tree.AbstractLayoutCache'].getModel$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []).getChildCount$O(this.getValue$());
});

Clazz.newMeth(C$, 'getVisibleChildCount$',  function () {
var childCount=0;
if (this.isExpanded$()) {
var maxCounter=this.getChildCount$();
childCount+=maxCounter;
for (var counter=0; counter < maxCounter; counter++) childCount+=(this.getChildAt$I(counter)).getVisibleChildCount$();

}return childCount;
});

Clazz.newMeth(C$, 'toggleExpanded$',  function () {
if (this.isExpanded$()) {
this.collapse$();
} else {
this.expand$();
}});

Clazz.newMeth(C$, 'makeVisible$',  function () {
var parent=this.getParent$();
if (parent != null ) parent.expandParentAndReceiver$();
});

Clazz.newMeth(C$, 'expand$',  function () {
this.expand$Z(true);
});

Clazz.newMeth(C$, 'collapse$',  function () {
this.collapse$Z(true);
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.getUserObject$();
});

Clazz.newMeth(C$, 'getTreePath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'resetChildrenPaths$javax_swing_tree_TreePath',  function (parentPath) {
p$1.removeMapping$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [this]);
if (parentPath == null ) this.path=Clazz.new_([this.getUserObject$()],$I$(3,1).c$$O);
 else this.path=parentPath.pathByAddingChild$O(this.getUserObject$());
p$1.addMapping$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [this]);
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) (this.getChildAt$I(counter)).resetChildrenPaths$javax_swing_tree_TreePath(this.path);

});

Clazz.newMeth(C$, 'setYOrigin$I',  function (newYOrigin) {
this.yOrigin=newYOrigin;
});

Clazz.newMeth(C$, 'shiftYOriginBy$I',  function (offset) {
this.yOrigin+=offset;
});

Clazz.newMeth(C$, 'updatePreferredSize$',  function () {
this.updatePreferredSize$I(this.getRow$());
});

Clazz.newMeth(C$, 'updatePreferredSize$I',  function (index) {
var bounds=this.b$['javax.swing.tree.AbstractLayoutCache'].getNodeDimensions$O$I$I$Z$java_awt_Rectangle.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], [this.getUserObject$(), index, this.getLevel$(), this.isExpanded$(), this.b$['javax.swing.tree.VariableHeightLayoutCache'].boundsBuffer]);
if (bounds == null ) {
this.xOrigin=0;
this.preferredWidth=this.preferredHeight=0;
this.b$['javax.swing.tree.VariableHeightLayoutCache'].updateNodeSizes=true;
} else if (bounds.height == 0) {
this.xOrigin=0;
this.preferredWidth=this.preferredHeight=0;
this.b$['javax.swing.tree.VariableHeightLayoutCache'].updateNodeSizes=true;
} else {
this.xOrigin=bounds.x;
this.preferredWidth=bounds.width;
if (this.b$['javax.swing.tree.AbstractLayoutCache'].isFixedRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], [])) this.preferredHeight=this.b$['javax.swing.tree.AbstractLayoutCache'].getRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []);
 else this.preferredHeight=bounds.height;
}});

Clazz.newMeth(C$, 'markSizeInvalid$',  function () {
this.preferredHeight=0;
});

Clazz.newMeth(C$, 'deepMarkSizeInvalid$',  function () {
this.markSizeInvalid$();
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) (this.getChildAt$I(counter)).deepMarkSizeInvalid$();

});

Clazz.newMeth(C$, 'getLoadedChildren$Z',  function (createIfNeeded) {
if (!createIfNeeded || this.hasBeenExpanded ) return C$.superclazz.prototype.children$.apply(this, []);
var newNode;
var realNode=this.getValue$();
var treeModel=this.b$['javax.swing.tree.AbstractLayoutCache'].getModel$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []);
var count=treeModel.getChildCount$O(realNode);
this.hasBeenExpanded=true;
var childRow=this.getRow$();
if (childRow == -1) {
for (var i=0; i < count; i++) {
newNode=p$1.createNodeForValue$O.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [treeModel.getChild$O$I(realNode, i)]);
this.add$javax_swing_tree_MutableTreeNode(newNode);
newNode.updatePreferredSize$I(-1);
}
} else {
++childRow;
for (var i=0; i < count; i++) {
newNode=p$1.createNodeForValue$O.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [treeModel.getChild$O$I(realNode, i)]);
this.add$javax_swing_tree_MutableTreeNode(newNode);
newNode.updatePreferredSize$I(childRow++);
}
}return C$.superclazz.prototype.children$.apply(this, []);
});

Clazz.newMeth(C$, 'didAdjustTree$',  function () {
});

Clazz.newMeth(C$, 'expandParentAndReceiver$',  function () {
var parent=this.getParent$();
if (parent != null ) parent.expandParentAndReceiver$();
this.expand$();
});

Clazz.newMeth(C$, 'expand$Z',  function (adjustTree) {
if (!this.isExpanded$() && !this.isLeaf$() ) {
var isFixed=this.b$['javax.swing.tree.AbstractLayoutCache'].isFixedRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []);
var startHeight=this.getPreferredHeight$();
var originalRow=this.getRow$();
this.expanded=true;
this.updatePreferredSize$I(originalRow);
if (!this.hasBeenExpanded) {
var newNode;
var realNode=this.getValue$();
var treeModel=this.b$['javax.swing.tree.AbstractLayoutCache'].getModel$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []);
var count=treeModel.getChildCount$O(realNode);
this.hasBeenExpanded=true;
if (originalRow == -1) {
for (var i=0; i < count; i++) {
newNode=p$1.createNodeForValue$O.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [treeModel.getChild$O$I(realNode, i)]);
this.add$javax_swing_tree_MutableTreeNode(newNode);
newNode.updatePreferredSize$I(-1);
}
} else {
var offset=originalRow + 1;
for (var i=0; i < count; i++) {
newNode=p$1.createNodeForValue$O.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [treeModel.getChild$O$I(realNode, i)]);
this.add$javax_swing_tree_MutableTreeNode(newNode);
newNode.updatePreferredSize$I(offset);
}
}}var i=originalRow;
var cursor=this.preorderEnumeration$();
cursor.nextElement$();
var newYOrigin;
if (isFixed) newYOrigin=0;
 else if (this === this.b$['javax.swing.tree.VariableHeightLayoutCache'].root  && !this.b$['javax.swing.tree.AbstractLayoutCache'].isRootVisible$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []) ) newYOrigin=0;
 else newYOrigin=this.getYOrigin$() + this.getPreferredHeight$();
var aNode;
if (!isFixed) {
while (cursor.hasMoreElements$()){
aNode=cursor.nextElement$();
if (!this.b$['javax.swing.tree.VariableHeightLayoutCache'].updateNodeSizes && !aNode.hasValidSize$() ) aNode.updatePreferredSize$I(i + 1);
aNode.setYOrigin$I(newYOrigin);
newYOrigin+=aNode.getPreferredHeight$();
this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.insertElementAt$O$I(aNode, ++i);
}
} else {
while (cursor.hasMoreElements$()){
aNode=cursor.nextElement$();
this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.insertElementAt$O$I(aNode, ++i);
}
}if (adjustTree && (originalRow != i || this.getPreferredHeight$() != startHeight ) ) {
if (!isFixed && ++i < this.b$['javax.swing.tree.VariableHeightLayoutCache'].getRowCount$.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], []) ) {
var counter;
var heightDiff=newYOrigin - (this.getYOrigin$() + this.getPreferredHeight$()) + (this.getPreferredHeight$() - startHeight);
for (counter=this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.size$() - 1; counter >= i; counter--) (this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.elementAt$I(counter)).shiftYOriginBy$I(heightDiff);

}this.didAdjustTree$();
p$1.visibleNodesChanged.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], []);
}if (this.b$['javax.swing.tree.VariableHeightLayoutCache'].treeSelectionModel != null ) {
this.b$['javax.swing.tree.VariableHeightLayoutCache'].treeSelectionModel.resetRowSelection$();
}}});

Clazz.newMeth(C$, 'collapse$Z',  function (adjustTree) {
if (this.isExpanded$()) {
var cursor=this.preorderEnumeration$();
cursor.nextElement$();
var rowsDeleted=0;
var isFixed=this.b$['javax.swing.tree.AbstractLayoutCache'].isFixedRowHeight$.apply(this.b$['javax.swing.tree.AbstractLayoutCache'], []);
var lastYEnd;
if (isFixed) lastYEnd=0;
 else lastYEnd=this.getPreferredHeight$() + this.getYOrigin$();
var startHeight=this.getPreferredHeight$();
var startYEnd=lastYEnd;
var myRow=this.getRow$();
if (!isFixed) {
while (cursor.hasMoreElements$()){
var node=cursor.nextElement$();
if (node.isVisible$()) {
++rowsDeleted;
lastYEnd=node.getYOrigin$() + node.getPreferredHeight$();
}}
} else {
while (cursor.hasMoreElements$()){
var node=cursor.nextElement$();
if (node.isVisible$()) {
++rowsDeleted;
}}
}for (var counter=rowsDeleted + myRow; counter > myRow; counter--) {
this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.removeElementAt$I(counter);
}
this.expanded=false;
if (myRow == -1) this.markSizeInvalid$();
 else if (adjustTree) this.updatePreferredSize$I(myRow);
if (myRow != -1 && adjustTree  && (rowsDeleted > 0 || startHeight != this.getPreferredHeight$() ) ) {
startYEnd+=(this.getPreferredHeight$() - startHeight);
if (!isFixed && (myRow + 1) < this.b$['javax.swing.tree.VariableHeightLayoutCache'].getRowCount$.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [])  && startYEnd != lastYEnd ) {
var counter;
var maxCounter;
var shiftAmount;
shiftAmount=startYEnd - lastYEnd;
for (counter=myRow + 1, maxCounter=this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.size$(); counter < maxCounter; counter++) (this.b$['javax.swing.tree.VariableHeightLayoutCache'].visibleNodes.elementAt$I(counter)).shiftYOriginBy$I(shiftAmount);

}this.didAdjustTree$();
p$1.visibleNodesChanged.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], []);
}if (this.b$['javax.swing.tree.VariableHeightLayoutCache'].treeSelectionModel != null  && rowsDeleted > 0  && myRow != -1 ) {
this.b$['javax.swing.tree.VariableHeightLayoutCache'].treeSelectionModel.resetRowSelection$();
}}});

Clazz.newMeth(C$, 'removeFromMapping$',  function () {
if (this.path != null ) {
p$1.removeMapping$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode.apply(this.b$['javax.swing.tree.VariableHeightLayoutCache'], [this]);
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) (this.getChildAt$I(counter)).removeFromMapping$();

}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.VariableHeightLayoutCache, "VisibleTreeStateNodeEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nextIndex','childCount'],'O',['parent','javax.swing.tree.VariableHeightLayoutCache.TreeStateNode']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode',  function (node) {
C$.c$$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode$I.apply(this, [node, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_VariableHeightLayoutCache_TreeStateNode$I',  function (parent, startIndex) {
;C$.$init$.apply(this);
this.parent=parent;
this.nextIndex=startIndex;
this.childCount=this.parent.getChildCount$();
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return (this.parent != null );
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (!this.hasMoreElements$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more visible paths"]);
var retObject;
if (this.nextIndex == -1) {
retObject=this.parent.getTreePath$();
} else {
var node=this.parent.getChildAt$I(this.nextIndex);
retObject=node.getTreePath$();
}this.updateNextObject$();
return retObject;
});

Clazz.newMeth(C$, 'updateNextObject$',  function () {
if (!this.updateNextIndex$()) {
this.findNextValidParent$();
}});

Clazz.newMeth(C$, 'findNextValidParent$',  function () {
if (this.parent === this.b$['javax.swing.tree.VariableHeightLayoutCache'].root ) {
this.parent=null;
return false;
}while (this.parent != null ){
var newParent=this.parent.getParent$();
if (newParent != null ) {
this.nextIndex=newParent.getIndex$javax_swing_tree_TreeNode(this.parent);
this.parent=newParent;
this.childCount=this.parent.getChildCount$();
if (this.updateNextIndex$()) return true;
} else this.parent=null;
}
return false;
});

Clazz.newMeth(C$, 'updateNextIndex$',  function () {
if (this.nextIndex == -1 && !this.parent.isExpanded$() ) return false;
if (this.childCount == 0) return false;
 else if (++this.nextIndex >= this.childCount) return false;
var child=this.parent.getChildAt$I(this.nextIndex);
if (child != null  && child.isExpanded$() ) {
this.parent=child;
this.nextIndex=-1;
this.childCount=child.getChildCount$();
}return true;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

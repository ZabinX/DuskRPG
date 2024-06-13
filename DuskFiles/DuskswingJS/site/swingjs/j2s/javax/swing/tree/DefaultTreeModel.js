(function(){var P$=Clazz.newPackage("javax.swing.tree"),p$1={},I$=[[0,'javax.swing.event.EventListenerList','javax.swing.tree.TreeNode','javax.swing.event.TreeModelListener','javax.swing.event.TreeModelEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultTreeModel", null, null, 'javax.swing.tree.TreeModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['asksAllowsChildren'],'O',['root','javax.swing.tree.TreeNode','listenerList','javax.swing.event.EventListenerList']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode',  function (root) {
C$.c$$javax_swing_tree_TreeNode$Z.apply(this, [root, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode$Z',  function (root, asksAllowsChildren) {
;C$.$init$.apply(this);
this.root=root;
this.asksAllowsChildren=asksAllowsChildren;
}, 1);

Clazz.newMeth(C$, 'setAsksAllowsChildren$Z',  function (newValue) {
this.asksAllowsChildren=newValue;
});

Clazz.newMeth(C$, 'asksAllowsChildren$',  function () {
return this.asksAllowsChildren;
});

Clazz.newMeth(C$, 'setRoot$javax_swing_tree_TreeNode',  function (root) {
var oldRoot=this.root;
this.root=root;
if (root == null  && oldRoot != null  ) {
p$1.fireTreeStructureChanged$O$javax_swing_tree_TreePath.apply(this, [this, null]);
} else {
this.nodeStructureChanged$javax_swing_tree_TreeNode(root);
}});

Clazz.newMeth(C$, 'getRoot$',  function () {
return this.root;
});

Clazz.newMeth(C$, 'getIndexOfChild$O$O',  function (parent, child) {
if (parent == null  || child == null  ) return -1;
return (parent).getIndex$javax_swing_tree_TreeNode(child);
});

Clazz.newMeth(C$, 'getChild$O$I',  function (parent, index) {
return (parent).getChildAt$I(index);
});

Clazz.newMeth(C$, 'getChildCount$O',  function (parent) {
return (parent).getChildCount$();
});

Clazz.newMeth(C$, 'isLeaf$O',  function (node) {
if (this.asksAllowsChildren) return !(node).getAllowsChildren$();
return (node).isLeaf$();
});

Clazz.newMeth(C$, 'reload$',  function () {
this.reload$javax_swing_tree_TreeNode(this.root);
});

Clazz.newMeth(C$, 'valueForPathChanged$javax_swing_tree_TreePath$O',  function (path, newValue) {
var aNode=path.getLastPathComponent$();
aNode.setUserObject$O(newValue);
this.nodeChanged$javax_swing_tree_TreeNode(aNode);
});

Clazz.newMeth(C$, 'insertNodeInto$javax_swing_tree_MutableTreeNode$javax_swing_tree_MutableTreeNode$I',  function (newChild, parent, index) {
parent.insert$javax_swing_tree_MutableTreeNode$I(newChild, index);
var newIndexs=Clazz.array(Integer.TYPE, [1]);
newIndexs[0]=index;
this.nodesWereInserted$javax_swing_tree_TreeNode$IA(parent, newIndexs);
});

Clazz.newMeth(C$, 'removeNodeFromParent$javax_swing_tree_MutableTreeNode',  function (node) {
var parent=node.getParent$();
if (parent == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["node does not have a parent."]);
var childIndex=Clazz.array(Integer.TYPE, [1]);
var removedArray=Clazz.array(java.lang.Object, [1]);
childIndex[0]=parent.getIndex$javax_swing_tree_TreeNode(node);
parent.remove$I(childIndex[0]);
removedArray[0]=node;
this.nodesWereRemoved$javax_swing_tree_TreeNode$IA$OA(parent, childIndex, removedArray);
});

Clazz.newMeth(C$, 'nodeChanged$javax_swing_tree_TreeNode',  function (node) {
if (this.listenerList != null  && node != null  ) {
var parent=node.getParent$();
if (parent != null ) {
var anIndex=parent.getIndex$javax_swing_tree_TreeNode(node);
if (anIndex != -1) {
var cIndexs=Clazz.array(Integer.TYPE, [1]);
cIndexs[0]=anIndex;
this.nodesChanged$javax_swing_tree_TreeNode$IA(parent, cIndexs);
}} else if (node === this.getRoot$() ) {
this.nodesChanged$javax_swing_tree_TreeNode$IA(node, null);
}}});

Clazz.newMeth(C$, 'reload$javax_swing_tree_TreeNode',  function (node) {
if (node != null ) {
this.fireTreeStructureChanged$O$OA$IA$OA(this, this.getPathToRoot$javax_swing_tree_TreeNode(node), null, null);
}});

Clazz.newMeth(C$, 'nodesWereInserted$javax_swing_tree_TreeNode$IA',  function (node, childIndices) {
if (this.listenerList != null  && node != null   && childIndices != null   && childIndices.length > 0 ) {
var cCount=childIndices.length;
var newChildren=Clazz.array(java.lang.Object, [cCount]);
for (var counter=0; counter < cCount; counter++) newChildren[counter]=node.getChildAt$I(childIndices[counter]);

this.fireTreeNodesInserted$O$OA$IA$OA(this, this.getPathToRoot$javax_swing_tree_TreeNode(node), childIndices, newChildren);
}});

Clazz.newMeth(C$, 'nodesWereRemoved$javax_swing_tree_TreeNode$IA$OA',  function (node, childIndices, removedChildren) {
if (node != null  && childIndices != null  ) {
this.fireTreeNodesRemoved$O$OA$IA$OA(this, this.getPathToRoot$javax_swing_tree_TreeNode(node), childIndices, removedChildren);
}});

Clazz.newMeth(C$, 'nodesChanged$javax_swing_tree_TreeNode$IA',  function (node, childIndices) {
if (node != null ) {
if (childIndices != null ) {
var cCount=childIndices.length;
if (cCount > 0) {
var cChildren=Clazz.array(java.lang.Object, [cCount]);
for (var counter=0; counter < cCount; counter++) cChildren[counter]=node.getChildAt$I(childIndices[counter]);

this.fireTreeNodesChanged$O$OA$IA$OA(this, this.getPathToRoot$javax_swing_tree_TreeNode(node), childIndices, cChildren);
}} else if (node === this.getRoot$() ) {
this.fireTreeNodesChanged$O$OA$IA$OA(this, this.getPathToRoot$javax_swing_tree_TreeNode(node), null, null);
}}});

Clazz.newMeth(C$, 'nodeStructureChanged$javax_swing_tree_TreeNode',  function (node) {
if (node != null ) {
this.fireTreeStructureChanged$O$OA$IA$OA(this, this.getPathToRoot$javax_swing_tree_TreeNode(node), null, null);
}});

Clazz.newMeth(C$, 'getPathToRoot$javax_swing_tree_TreeNode',  function (aNode) {
return this.getPathToRoot$javax_swing_tree_TreeNode$I(aNode, 0);
});

Clazz.newMeth(C$, 'getPathToRoot$javax_swing_tree_TreeNode$I',  function (aNode, depth) {
var retNodes;
if (aNode == null ) {
if (depth == 0) return null;
 else retNodes=Clazz.array($I$(2), [depth]);
} else {
++depth;
if (aNode === this.root ) retNodes=Clazz.array($I$(2), [depth]);
 else retNodes=this.getPathToRoot$javax_swing_tree_TreeNode$I(aNode.getParent$(), depth);
retNodes[retNodes.length - depth]=aNode;
}return retNodes;
});

Clazz.newMeth(C$, 'addTreeModelListener$javax_swing_event_TreeModelListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']), l);
});

Clazz.newMeth(C$, 'removeTreeModelListener$javax_swing_event_TreeModelListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']), l);
});

Clazz.newMeth(C$, 'getTreeModelListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']));
});

Clazz.newMeth(C$, 'fireTreeNodesChanged$O$OA$IA$OA',  function (source, path, childIndices, children) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']) ) {
if (e == null ) e=Clazz.new_($I$(4,1).c$$O$OA$IA$OA,[source, path, childIndices, children]);
(listeners[i + 1]).treeNodesChanged$javax_swing_event_TreeModelEvent(e);
}}
});

Clazz.newMeth(C$, 'fireTreeNodesInserted$O$OA$IA$OA',  function (source, path, childIndices, children) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']) ) {
if (e == null ) e=Clazz.new_($I$(4,1).c$$O$OA$IA$OA,[source, path, childIndices, children]);
(listeners[i + 1]).treeNodesInserted$javax_swing_event_TreeModelEvent(e);
}}
});

Clazz.newMeth(C$, 'fireTreeNodesRemoved$O$OA$IA$OA',  function (source, path, childIndices, children) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']) ) {
if (e == null ) e=Clazz.new_($I$(4,1).c$$O$OA$IA$OA,[source, path, childIndices, children]);
(listeners[i + 1]).treeNodesRemoved$javax_swing_event_TreeModelEvent(e);
}}
});

Clazz.newMeth(C$, 'fireTreeStructureChanged$O$OA$IA$OA',  function (source, path, childIndices, children) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']) ) {
if (e == null ) e=Clazz.new_($I$(4,1).c$$O$OA$IA$OA,[source, path, childIndices, children]);
(listeners[i + 1]).treeStructureChanged$javax_swing_event_TreeModelEvent(e);
}}
});

Clazz.newMeth(C$, 'fireTreeStructureChanged$O$javax_swing_tree_TreePath',  function (source, path) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['treeNodesChanged$javax_swing_event_TreeModelEvent','treeNodesInserted$javax_swing_event_TreeModelEvent','treeNodesRemoved$javax_swing_event_TreeModelEvent','treeStructureChanged$javax_swing_event_TreeModelEvent']) ) {
if (e == null ) e=Clazz.new_($I$(4,1).c$$O$javax_swing_tree_TreePath,[source, path]);
(listeners[i + 1]).treeStructureChanged$javax_swing_event_TreeModelEvent(e);
}}
}, p$1);

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

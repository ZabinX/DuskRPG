(function(){var P$=Clazz.newPackage("javax.swing.tree"),I$=[[0,'java.util.Vector','java.util.Stack','javax.swing.tree.DefaultMutableTreeNode',['javax.swing.tree.DefaultMutableTreeNode','.BreadthFirstEnumeration','.Queue','.QNode'],['javax.swing.tree.DefaultMutableTreeNode','.BreadthFirstEnumeration','.Queue'],'Error','javax.swing.tree.TreeNode',['javax.swing.tree.DefaultMutableTreeNode','.PreorderEnumeration'],['javax.swing.tree.DefaultMutableTreeNode','.PostorderEnumeration'],['javax.swing.tree.DefaultMutableTreeNode','.BreadthFirstEnumeration'],['javax.swing.tree.DefaultMutableTreeNode','.PathBetweenNodesEnumeration']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultMutableTreeNode", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['Cloneable', 'javax.swing.tree.MutableTreeNode']);
C$.$classes$=[['PreorderEnumeration',16],['PostorderEnumeration',16],['BreadthFirstEnumeration',16],['PathBetweenNodesEnumeration',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['allowsChildren'],'O',['parent','javax.swing.tree.MutableTreeNode','children','java.util.Vector','userObject','java.lang.Object']]
,['O',['EMPTY_ENUMERATION','java.util.Enumeration']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$O.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (userObject) {
C$.c$$O$Z.apply(this, [userObject, true]);
}, 1);

Clazz.newMeth(C$, 'c$$O$Z',  function (userObject, allowsChildren) {
;C$.$init$.apply(this);
this.parent=null;
this.allowsChildren=allowsChildren;
this.userObject=userObject;
}, 1);

Clazz.newMeth(C$, 'insert$javax_swing_tree_MutableTreeNode$I',  function (newChild, childIndex) {
if (!this.allowsChildren) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["node does not allow children"]);
} else if (newChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["new child is null"]);
} else if (this.isNodeAncestor$javax_swing_tree_TreeNode(newChild)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["new child is an ancestor"]);
}var oldParent=newChild.getParent$();
if (oldParent != null ) {
oldParent.remove$javax_swing_tree_MutableTreeNode(newChild);
}newChild.setParent$javax_swing_tree_MutableTreeNode(this);
if (this.children == null ) {
this.children=Clazz.new_($I$(1,1));
}this.children.insertElementAt$O$I(newChild, childIndex);
});

Clazz.newMeth(C$, 'remove$I',  function (childIndex) {
var child=this.getChildAt$I(childIndex);
this.children.removeElementAt$I(childIndex);
child.setParent$javax_swing_tree_MutableTreeNode(null);
});

Clazz.newMeth(C$, 'setParent$javax_swing_tree_MutableTreeNode',  function (newParent) {
this.parent=newParent;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'getChildAt$I',  function (index) {
if (this.children == null ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["node has no children"]);
}return this.children.elementAt$I(index);
});

Clazz.newMeth(C$, 'getChildCount$',  function () {
if (this.children == null ) {
return 0;
} else {
return this.children.size$();
}});

Clazz.newMeth(C$, 'getIndex$javax_swing_tree_TreeNode',  function (aChild) {
if (aChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument is null"]);
}if (!this.isNodeChild$javax_swing_tree_TreeNode(aChild)) {
return -1;
}return this.children.indexOf$O(aChild);
});

Clazz.newMeth(C$, 'children$',  function () {
if (this.children == null ) {
return C$.EMPTY_ENUMERATION;
} else {
return this.children.elements$();
}});

Clazz.newMeth(C$, 'setAllowsChildren$Z',  function (allows) {
if (allows != this.allowsChildren ) {
this.allowsChildren=allows;
if (!this.allowsChildren) {
this.removeAllChildren$();
}}});

Clazz.newMeth(C$, 'getAllowsChildren$',  function () {
return this.allowsChildren;
});

Clazz.newMeth(C$, 'setUserObject$O',  function (userObject) {
this.userObject=userObject;
});

Clazz.newMeth(C$, 'getUserObject$',  function () {
return this.userObject;
});

Clazz.newMeth(C$, 'removeFromParent$',  function () {
var parent=this.getParent$();
if (parent != null ) {
parent.remove$javax_swing_tree_MutableTreeNode(this);
}});

Clazz.newMeth(C$, 'remove$javax_swing_tree_MutableTreeNode',  function (aChild) {
if (aChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument is null"]);
}if (!this.isNodeChild$javax_swing_tree_TreeNode(aChild)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument is not a child"]);
}this.remove$I(this.getIndex$javax_swing_tree_TreeNode(aChild));
});

Clazz.newMeth(C$, 'removeAllChildren$',  function () {
for (var i=this.getChildCount$() - 1; i >= 0; i--) {
this.remove$I(i);
}
});

Clazz.newMeth(C$, 'add$javax_swing_tree_MutableTreeNode',  function (newChild) {
if (newChild != null  && newChild.getParent$() === this  ) this.insert$javax_swing_tree_MutableTreeNode$I(newChild, this.getChildCount$() - 1);
 else this.insert$javax_swing_tree_MutableTreeNode$I(newChild, this.getChildCount$());
});

Clazz.newMeth(C$, 'isNodeAncestor$javax_swing_tree_TreeNode',  function (anotherNode) {
if (anotherNode == null ) {
return false;
}var ancestor=this;
do {
if (ancestor === anotherNode ) {
return true;
}} while ((ancestor=ancestor.getParent$()) != null );
return false;
});

Clazz.newMeth(C$, 'isNodeDescendant$javax_swing_tree_DefaultMutableTreeNode',  function (anotherNode) {
if (anotherNode == null ) return false;
return anotherNode.isNodeAncestor$javax_swing_tree_TreeNode(this);
});

Clazz.newMeth(C$, 'getSharedAncestor$javax_swing_tree_DefaultMutableTreeNode',  function (aNode) {
if (aNode === this ) {
return this;
} else if (aNode == null ) {
return null;
}var level1;
var level2;
var diff;
var node1;
var node2;
level1=this.getLevel$();
level2=aNode.getLevel$();
if (level2 > level1) {
diff=level2 - level1;
node1=aNode;
node2=this;
} else {
diff=level1 - level2;
node1=this;
node2=aNode;
}while (diff > 0){
node1=node1.getParent$();
--diff;
}
do {
if (node1 === node2 ) {
return node1;
}node1=node1.getParent$();
node2=node2.getParent$();
} while (node1 != null );
if (node1 != null  || node2 != null  ) {
throw Clazz.new_($I$(6,1).c$$S,["nodes should be null"]);
}return null;
});

Clazz.newMeth(C$, 'isNodeRelated$javax_swing_tree_DefaultMutableTreeNode',  function (aNode) {
return (aNode != null ) && (this.getRoot$() === aNode.getRoot$() ) ;
});

Clazz.newMeth(C$, 'getDepth$',  function () {
var last=null;
var enum_=this.breadthFirstEnumeration$();
while (enum_.hasMoreElements$()){
last=enum_.nextElement$();
}
if (last == null ) {
throw Clazz.new_($I$(6,1).c$$S,["nodes should be null"]);
}return (last).getLevel$() - this.getLevel$();
});

Clazz.newMeth(C$, 'getLevel$',  function () {
var ancestor;
var levels=0;
ancestor=this;
while ((ancestor=ancestor.getParent$()) != null ){
++levels;
}
return levels;
});

Clazz.newMeth(C$, 'getPath$',  function () {
return this.getPathToRoot$javax_swing_tree_TreeNode$I(this, 0);
});

Clazz.newMeth(C$, 'getPathToRoot$javax_swing_tree_TreeNode$I',  function (aNode, depth) {
var retNodes;
if (aNode == null ) {
if (depth == 0) return null;
 else retNodes=Clazz.array($I$(7), [depth]);
} else {
++depth;
retNodes=this.getPathToRoot$javax_swing_tree_TreeNode$I(aNode.getParent$(), depth);
retNodes[retNodes.length - depth]=aNode;
}return retNodes;
});

Clazz.newMeth(C$, 'getUserObjectPath$',  function () {
var realPath=this.getPath$();
var retPath=Clazz.array(java.lang.Object, [realPath.length]);
for (var counter=0; counter < realPath.length; counter++) retPath[counter]=(realPath[counter]).getUserObject$();

return retPath;
});

Clazz.newMeth(C$, 'getRoot$',  function () {
var ancestor=this;
var previous;
do {
previous=ancestor;
ancestor=ancestor.getParent$();
} while (ancestor != null );
return previous;
});

Clazz.newMeth(C$, 'isRoot$',  function () {
return this.getParent$() == null ;
});

Clazz.newMeth(C$, 'getNextNode$',  function () {
if (this.getChildCount$() == 0) {
var nextSibling=this.getNextSibling$();
if (nextSibling == null ) {
var aNode=this.getParent$();
do {
if (aNode == null ) {
return null;
}nextSibling=aNode.getNextSibling$();
if (nextSibling != null ) {
return nextSibling;
}aNode=aNode.getParent$();
} while (true);
} else {
return nextSibling;
}} else {
return this.getChildAt$I(0);
}});

Clazz.newMeth(C$, 'getPreviousNode$',  function () {
var previousSibling;
var myParent=this.getParent$();
if (myParent == null ) {
return null;
}previousSibling=this.getPreviousSibling$();
if (previousSibling != null ) {
if (previousSibling.getChildCount$() == 0) return previousSibling;
 else return previousSibling.getLastLeaf$();
} else {
return myParent;
}});

Clazz.newMeth(C$, 'preorderEnumeration$',  function () {
return Clazz.new_($I$(8,1).c$$javax_swing_tree_TreeNode,[this, null, this]);
});

Clazz.newMeth(C$, 'postorderEnumeration$',  function () {
return Clazz.new_($I$(9,1).c$$javax_swing_tree_TreeNode,[this, null, this]);
});

Clazz.newMeth(C$, 'breadthFirstEnumeration$',  function () {
return Clazz.new_($I$(10,1).c$$javax_swing_tree_TreeNode,[this, null, this]);
});

Clazz.newMeth(C$, 'depthFirstEnumeration$',  function () {
return this.postorderEnumeration$();
});

Clazz.newMeth(C$, 'pathFromAncestorEnumeration$javax_swing_tree_TreeNode',  function (ancestor) {
return Clazz.new_($I$(11,1).c$$javax_swing_tree_TreeNode$javax_swing_tree_TreeNode,[this, null, ancestor, this]);
});

Clazz.newMeth(C$, 'isNodeChild$javax_swing_tree_TreeNode',  function (aNode) {
var retval;
if (aNode == null ) {
retval=false;
} else {
if (this.getChildCount$() == 0) {
retval=false;
} else {
retval=(aNode.getParent$() === this );
}}return retval;
});

Clazz.newMeth(C$, 'getFirstChild$',  function () {
if (this.getChildCount$() == 0) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["node has no children"]);
}return this.getChildAt$I(0);
});

Clazz.newMeth(C$, 'getLastChild$',  function () {
if (this.getChildCount$() == 0) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["node has no children"]);
}return this.getChildAt$I(this.getChildCount$() - 1);
});

Clazz.newMeth(C$, 'getChildAfter$javax_swing_tree_TreeNode',  function (aChild) {
if (aChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument is null"]);
}var index=this.getIndex$javax_swing_tree_TreeNode(aChild);
if (index == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["node is not a child"]);
}if (index < this.getChildCount$() - 1) {
return this.getChildAt$I(index + 1);
} else {
return null;
}});

Clazz.newMeth(C$, 'getChildBefore$javax_swing_tree_TreeNode',  function (aChild) {
if (aChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument is null"]);
}var index=this.getIndex$javax_swing_tree_TreeNode(aChild);
if (index == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument is not a child"]);
}if (index > 0) {
return this.getChildAt$I(index - 1);
} else {
return null;
}});

Clazz.newMeth(C$, 'isNodeSibling$javax_swing_tree_TreeNode',  function (anotherNode) {
var retval;
if (anotherNode == null ) {
retval=false;
} else if (anotherNode === this ) {
retval=true;
} else {
var myParent=this.getParent$();
retval=(myParent != null  && myParent === anotherNode.getParent$()  );
if (retval && !(this.getParent$()).isNodeChild$javax_swing_tree_TreeNode(anotherNode) ) {
throw Clazz.new_($I$(6,1).c$$S,["sibling has different parent"]);
}}return retval;
});

Clazz.newMeth(C$, 'getSiblingCount$',  function () {
var myParent=this.getParent$();
if (myParent == null ) {
return 1;
} else {
return myParent.getChildCount$();
}});

Clazz.newMeth(C$, 'getNextSibling$',  function () {
var retval;
var myParent=this.getParent$();
if (myParent == null ) {
retval=null;
} else {
retval=myParent.getChildAfter$javax_swing_tree_TreeNode(this);
}if (retval != null  && !this.isNodeSibling$javax_swing_tree_TreeNode(retval) ) {
throw Clazz.new_($I$(6,1).c$$S,["child of parent is not a sibling"]);
}return retval;
});

Clazz.newMeth(C$, 'getPreviousSibling$',  function () {
var retval;
var myParent=this.getParent$();
if (myParent == null ) {
retval=null;
} else {
retval=myParent.getChildBefore$javax_swing_tree_TreeNode(this);
}if (retval != null  && !this.isNodeSibling$javax_swing_tree_TreeNode(retval) ) {
throw Clazz.new_($I$(6,1).c$$S,["child of parent is not a sibling"]);
}return retval;
});

Clazz.newMeth(C$, 'isLeaf$',  function () {
return (this.getChildCount$() == 0);
});

Clazz.newMeth(C$, 'getFirstLeaf$',  function () {
var node=this;
while (!node.isLeaf$()){
node=node.getFirstChild$();
}
return node;
});

Clazz.newMeth(C$, 'getLastLeaf$',  function () {
var node=this;
while (!node.isLeaf$()){
node=node.getLastChild$();
}
return node;
});

Clazz.newMeth(C$, 'getNextLeaf$',  function () {
var nextSibling;
var myParent=this.getParent$();
if (myParent == null ) return null;
nextSibling=this.getNextSibling$();
if (nextSibling != null ) return nextSibling.getFirstLeaf$();
return myParent.getNextLeaf$();
});

Clazz.newMeth(C$, 'getPreviousLeaf$',  function () {
var previousSibling;
var myParent=this.getParent$();
if (myParent == null ) return null;
previousSibling=this.getPreviousSibling$();
if (previousSibling != null ) return previousSibling.getLastLeaf$();
return myParent.getPreviousLeaf$();
});

Clazz.newMeth(C$, 'getLeafCount$',  function () {
var count=0;
var node;
var enum_=this.breadthFirstEnumeration$();
while (enum_.hasMoreElements$()){
node=enum_.nextElement$();
if (node.isLeaf$()) {
++count;
}}
if (count < 1) {
throw Clazz.new_($I$(6,1).c$$S,["tree has zero leaves"]);
}return count;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.userObject == null ) {
return null;
} else {
return this.userObject.toString();
}});

Clazz.newMeth(C$, 'clone$',  function () {
var newNode=null;
try {
newNode=Clazz.clone(this);
newNode.children=null;
newNode.parent=null;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString()],$I$(6,1).c$$S);
} else {
throw e;
}
}
return newNode;
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_ENUMERATION=((P$.DefaultMutableTreeNode$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultMutableTreeNode$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more elements"]);
});
})()
), Clazz.new_(P$.DefaultMutableTreeNode$1.$init$,[this, null]));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMutableTreeNode, "PreorderEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stack','java.util.Stack']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode',  function (rootNode) {
;C$.$init$.apply(this);
var v=Clazz.new_($I$(1,1).c$$I,[1]);
v.addElement$O(rootNode);
this.stack=Clazz.new_($I$(2,1));
this.stack.push$O(v.elements$());
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return (!this.stack.empty$() && (this.stack.peek$()).hasMoreElements$() );
});

Clazz.newMeth(C$, 'nextElement$',  function () {
var enumer=this.stack.peek$();
var node=enumer.nextElement$();
var children=node.children$();
if (!enumer.hasMoreElements$()) {
this.stack.pop$();
}if (children.hasMoreElements$()) {
this.stack.push$O(children);
}return node;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMutableTreeNode, "PostorderEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['root','javax.swing.tree.TreeNode','children','java.util.Enumeration','+subtree']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode',  function (rootNode) {
;C$.$init$.apply(this);
this.root=rootNode;
this.children=this.root.children$();
this.subtree=$I$(3).EMPTY_ENUMERATION;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.root != null ;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
var retval;
if (this.subtree.hasMoreElements$()) {
retval=this.subtree.nextElement$();
} else if (this.children.hasMoreElements$()) {
this.subtree=Clazz.new_(C$.c$$javax_swing_tree_TreeNode,[this, null, this.children.nextElement$()]);
retval=this.subtree.nextElement$();
} else {
retval=this.root;
this.root=null;
}return retval;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMutableTreeNode, "BreadthFirstEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');
C$.$classes$=[['Queue',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['queue','javax.swing.tree.DefaultMutableTreeNode.BreadthFirstEnumeration.Queue']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode',  function (rootNode) {
;C$.$init$.apply(this);
var v=Clazz.new_($I$(1,1).c$$I,[1]);
v.addElement$O(rootNode);
this.queue=Clazz.new_($I$(5,1),[this, null]);
this.queue.enqueue$O(v.elements$());
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return (!this.queue.isEmpty$() && (this.queue.firstObject$()).hasMoreElements$() );
});

Clazz.newMeth(C$, 'nextElement$',  function () {
var enumer=this.queue.firstObject$();
var node=enumer.nextElement$();
var children=node.children$();
if (!enumer.hasMoreElements$()) {
this.queue.dequeue$();
}if (children.hasMoreElements$()) {
this.queue.enqueue$O(children);
}return node;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMutableTreeNode.BreadthFirstEnumeration, "Queue", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});
C$.$classes$=[['QNode',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['head','javax.swing.tree.DefaultMutableTreeNode.BreadthFirstEnumeration.Queue.QNode','+tail']]]

Clazz.newMeth(C$, 'enqueue$O',  function (anObject) {
if (this.head == null ) {
this.head=this.tail=Clazz.new_($I$(4,1).c$$O$javax_swing_tree_DefaultMutableTreeNode_BreadthFirstEnumeration_Queue_QNode,[this, null, anObject, null]);
} else {
this.tail.next=Clazz.new_($I$(4,1).c$$O$javax_swing_tree_DefaultMutableTreeNode_BreadthFirstEnumeration_Queue_QNode,[this, null, anObject, null]);
this.tail=this.tail.next;
}});

Clazz.newMeth(C$, 'dequeue$',  function () {
if (this.head == null ) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more elements"]);
}var retval=this.head.object;
var oldHead=this.head;
this.head=this.head.next;
if (this.head == null ) {
this.tail=null;
} else {
oldHead.next=null;
}return retval;
});

Clazz.newMeth(C$, 'firstObject$',  function () {
if (this.head == null ) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more elements"]);
}return this.head.object;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.head == null ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMutableTreeNode.BreadthFirstEnumeration.Queue, "QNode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['object','java.lang.Object','next','javax.swing.tree.DefaultMutableTreeNode.BreadthFirstEnumeration.Queue.QNode']]]

Clazz.newMeth(C$, 'c$$O$javax_swing_tree_DefaultMutableTreeNode_BreadthFirstEnumeration_Queue_QNode',  function (object, next) {
;C$.$init$.apply(this);
this.object=object;
this.next=next;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultMutableTreeNode, "PathBetweenNodesEnumeration", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stack','java.util.Stack']]]

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreeNode$javax_swing_tree_TreeNode',  function (ancestor, descendant) {
;C$.$init$.apply(this);
if (ancestor == null  || descendant == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["argument is null"]);
}var current;
this.stack=Clazz.new_($I$(2,1));
this.stack.push$O(descendant);
current=descendant;
while (current !== ancestor ){
current=current.getParent$();
if (current == null  && descendant !== ancestor  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["node " + ancestor + " is not an ancestor of " + descendant ]);
}this.stack.push$O(current);
}
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.stack.size$() > 0;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
try {
return this.stack.pop$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.EmptyStackException")){
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["No more elements"]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

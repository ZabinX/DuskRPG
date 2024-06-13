(function(){var P$=Clazz.newPackage("javax.swing.tree"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreePath");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parentPath','javax.swing.tree.TreePath','lastPathComponent','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$OA',  function (path) {
;C$.$init$.apply(this);
if (path == null  || path.length == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["path in TreePath must be non null and not empty."]);
this.lastPathComponent=path[path.length - 1];
if (path.length > 1) this.parentPath=Clazz.new_(C$.c$$OA$I,[path, path.length - 1]);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (singlePath) {
;C$.$init$.apply(this);
if (singlePath == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["path in TreePath must be non null."]);
this.lastPathComponent=singlePath;
this.parentPath=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreePath$O',  function (parent, lastElement) {
;C$.$init$.apply(this);
if (lastElement == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["path in TreePath must be non null."]);
this.parentPath=parent;
this.lastPathComponent=lastElement;
}, 1);

Clazz.newMeth(C$, 'c$$OA$I',  function (path, length) {
;C$.$init$.apply(this);
this.lastPathComponent=path[length - 1];
if (length > 1) this.parentPath=Clazz.new_(C$.c$$OA$I,[path, length - 1]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPath$',  function () {
var i=this.getPathCount$();
var result=Clazz.array(java.lang.Object, [i--]);
for (var path=this; path != null ; path=path.parentPath) {
result[i--]=path.lastPathComponent;
}
return result;
});

Clazz.newMeth(C$, 'getLastPathComponent$',  function () {
return this.lastPathComponent;
});

Clazz.newMeth(C$, 'getPathCount$',  function () {
var result=0;
for (var path=this; path != null ; path=path.parentPath) {
++result;
}
return result;
});

Clazz.newMeth(C$, 'getPathComponent$I',  function (element) {
var pathLength=this.getPathCount$();
if (element < 0 || element >= pathLength ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Index " + element + " is out of the specified range" ]);
var path=this;
for (var i=pathLength - 1; i != element; i--) {
path=path.parentPath;
}
return path.lastPathComponent;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o === this ) return true;
if (Clazz.instanceOf(o, "javax.swing.tree.TreePath")) {
var oTreePath=o;
if (this.getPathCount$() != oTreePath.getPathCount$()) return false;
for (var path=this; path != null ; path=path.parentPath) {
if (!(path.lastPathComponent.equals$O(oTreePath.lastPathComponent))) {
return false;
}oTreePath=oTreePath.parentPath;
}
return true;
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.lastPathComponent.hashCode$();
});

Clazz.newMeth(C$, 'isDescendant$javax_swing_tree_TreePath',  function (aTreePath) {
if (aTreePath === this ) return true;
if (aTreePath != null ) {
var pathLength=this.getPathCount$();
var oPathLength=aTreePath.getPathCount$();
if (oPathLength < pathLength) return false;
while (oPathLength-- > pathLength)aTreePath=aTreePath.getParentPath$();

return this.equals$O(aTreePath);
}return false;
});

Clazz.newMeth(C$, 'pathByAddingChild$O',  function (child) {
if (child == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null child not allowed"]);
return Clazz.new_(C$.c$$javax_swing_tree_TreePath$O,[this, child]);
});

Clazz.newMeth(C$, 'getParentPath$',  function () {
return this.parentPath;
});

Clazz.newMeth(C$, 'toString',  function () {
var tempSpot=Clazz.new_($I$(1,1).c$$S,["["]);
for (var counter=0, maxCounter=this.getPathCount$(); counter < maxCounter; counter++) {
if (counter > 0) tempSpot.append$S(", ");
tempSpot.append$O(this.getPathComponent$I(counter));
}
tempSpot.append$S("]");
return tempSpot.toString();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

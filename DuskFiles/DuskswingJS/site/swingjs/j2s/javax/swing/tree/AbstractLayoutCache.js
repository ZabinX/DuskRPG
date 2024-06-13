(function(){var P$=Clazz.newPackage("javax.swing.tree"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractLayoutCache", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.swing.tree.RowMapper');
C$.$classes$=[['NodeDimensions',1033]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['rootVisible'],'I',['rowHeight'],'O',['nodeDimensions','javax.swing.tree.AbstractLayoutCache.NodeDimensions','treeModel','javax.swing.tree.TreeModel','treeSelectionModel','javax.swing.tree.TreeSelectionModel']]]

Clazz.newMeth(C$, 'setNodeDimensions$javax_swing_tree_AbstractLayoutCache_NodeDimensions',  function (nd) {
this.nodeDimensions=nd;
});

Clazz.newMeth(C$, 'getNodeDimensions$',  function () {
return this.nodeDimensions;
});

Clazz.newMeth(C$, 'setModel$javax_swing_tree_TreeModel',  function (newModel) {
this.treeModel=newModel;
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.treeModel;
});

Clazz.newMeth(C$, 'setRootVisible$Z',  function (rootVisible) {
this.rootVisible=rootVisible;
});

Clazz.newMeth(C$, 'isRootVisible$',  function () {
return this.rootVisible;
});

Clazz.newMeth(C$, 'setRowHeight$I',  function (rowHeight) {
this.rowHeight=rowHeight;
});

Clazz.newMeth(C$, 'getRowHeight$',  function () {
return this.rowHeight;
});

Clazz.newMeth(C$, 'setSelectionModel$javax_swing_tree_TreeSelectionModel',  function (newLSM) {
if (this.treeSelectionModel != null ) this.treeSelectionModel.setRowMapper$javax_swing_tree_RowMapper(null);
this.treeSelectionModel=newLSM;
if (this.treeSelectionModel != null ) this.treeSelectionModel.setRowMapper$javax_swing_tree_RowMapper(this);
});

Clazz.newMeth(C$, 'getSelectionModel$',  function () {
return this.treeSelectionModel;
});

Clazz.newMeth(C$, 'getPreferredHeight$',  function () {
var rowCount=this.getRowCount$();
if (rowCount > 0) {
var bounds=this.getBounds$javax_swing_tree_TreePath$java_awt_Rectangle(this.getPathForRow$I(rowCount - 1), null);
if (bounds != null ) return bounds.y + bounds.height;
}return 0;
});

Clazz.newMeth(C$, 'getPreferredWidth$java_awt_Rectangle',  function (bounds) {
var rowCount=this.getRowCount$();
if (rowCount > 0) {
var firstPath;
var endY;
if (bounds == null ) {
firstPath=this.getPathForRow$I(0);
endY=2147483647;
} else {
firstPath=this.getPathClosestTo$I$I(bounds.x, bounds.y);
endY=bounds.height + bounds.y;
}var paths=this.getVisiblePathsFrom$javax_swing_tree_TreePath(firstPath);
if (paths != null  && paths.hasMoreElements$() ) {
var pBounds=this.getBounds$javax_swing_tree_TreePath$java_awt_Rectangle(paths.nextElement$(), null);
var width;
if (pBounds != null ) {
width=pBounds.x + pBounds.width;
if (pBounds.y >= endY) {
return width;
}} else width=0;
while (pBounds != null  && paths.hasMoreElements$() ){
pBounds=this.getBounds$javax_swing_tree_TreePath$java_awt_Rectangle(paths.nextElement$(), pBounds);
if (pBounds != null  && pBounds.y < endY ) {
width=Math.max(width, pBounds.x + pBounds.width);
} else {
pBounds=null;
}}
return width;
}}return 0;
});

Clazz.newMeth(C$, 'getRowsForPaths$javax_swing_tree_TreePathA',  function (paths) {
if (paths == null ) return null;
var numPaths=paths.length;
var rows=Clazz.array(Integer.TYPE, [numPaths]);
for (var counter=0; counter < numPaths; counter++) rows[counter]=this.getRowForPath$javax_swing_tree_TreePath(paths[counter]);

return rows;
});

Clazz.newMeth(C$, 'getNodeDimensions$O$I$I$Z$java_awt_Rectangle',  function (value, row, depth, expanded, placeIn) {
var nd=this.getNodeDimensions$();
if (nd != null ) {
return nd.getNodeDimensions$O$I$I$Z$java_awt_Rectangle(value, row, depth, expanded, placeIn);
}return null;
});

Clazz.newMeth(C$, 'isFixedRowHeight$',  function () {
return (this.rowHeight > 0);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractLayoutCache, "NodeDimensions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.tree"),I$=[[0,'javax.swing.event.EventListenerList','javax.swing.DefaultListSelectionModel','java.util.Hashtable','javax.swing.tree.TreePath','java.util.Vector','javax.swing.tree.PathPlaceHolder','javax.swing.event.TreeSelectionEvent','javax.swing.event.TreeSelectionListener','javax.swing.event.SwingPropertyChangeSupport','java.beans.PropertyChangeListener','java.util.BitSet','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultTreeSelectionModel", null, null, ['Cloneable', 'javax.swing.tree.TreeSelectionModel']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['selectionMode','leadIndex','leadRow'],'O',['changeSupport','javax.swing.event.SwingPropertyChangeSupport','selection','javax.swing.tree.TreePath[]','listenerList','javax.swing.event.EventListenerList','rowMapper','javax.swing.tree.RowMapper','listSelectionModel','javax.swing.DefaultListSelectionModel','leadPath','javax.swing.tree.TreePath','uniquePaths','java.util.Hashtable','+lastPaths','tempPaths','javax.swing.tree.TreePath[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.listSelectionModel=Clazz.new_($I$(2,1));
this.selectionMode=4;
this.leadIndex=this.leadRow=-1;
this.uniquePaths=Clazz.new_($I$(3,1));
this.lastPaths=Clazz.new_($I$(3,1));
this.tempPaths=Clazz.array($I$(4), [1]);
}, 1);

Clazz.newMeth(C$, 'setRowMapper$javax_swing_tree_RowMapper',  function (newMapper) {
this.rowMapper=newMapper;
this.resetRowSelection$();
});

Clazz.newMeth(C$, 'getRowMapper$',  function () {
return this.rowMapper;
});

Clazz.newMeth(C$, 'setSelectionMode$I',  function (mode) {
var oldMode=this.selectionMode;
this.selectionMode=mode;
if (this.selectionMode != 1 && this.selectionMode != 2  && this.selectionMode != 4 ) this.selectionMode=4;
if (oldMode != this.selectionMode && this.changeSupport != null  ) this.changeSupport.firePropertyChange$S$O$O("selectionMode",  new Integer(oldMode),  new Integer(this.selectionMode));
});

Clazz.newMeth(C$, 'getSelectionMode$',  function () {
return this.selectionMode;
});

Clazz.newMeth(C$, 'setSelectionPath$javax_swing_tree_TreePath',  function (path) {
if (path == null ) this.setSelectionPaths$javax_swing_tree_TreePathA(null);
 else {
var newPaths=Clazz.array($I$(4), [1]);
newPaths[0]=path;
this.setSelectionPaths$javax_swing_tree_TreePathA(newPaths);
}});

Clazz.newMeth(C$, 'setSelectionPaths$javax_swing_tree_TreePathA',  function (pPaths) {
var newCount;
var newCounter;
var oldCount;
var oldCounter;
var paths=pPaths;
if (paths == null ) newCount=0;
 else newCount=paths.length;
if (this.selection == null ) oldCount=0;
 else oldCount=this.selection.length;
if ((newCount + oldCount) != 0) {
if (this.selectionMode == 1) {
if (newCount > 1) {
paths=Clazz.array($I$(4), [1]);
paths[0]=pPaths[0];
newCount=1;
}} else if (this.selectionMode == 2) {
if (newCount > 0 && !this.arePathsContiguous$javax_swing_tree_TreePathA(paths) ) {
paths=Clazz.array($I$(4), [1]);
paths[0]=pPaths[0];
newCount=1;
}}var validCount=0;
var beginLeadPath=this.leadPath;
var cPaths=Clazz.new_($I$(5,1).c$$I,[newCount + oldCount]);
this.lastPaths.clear$();
this.leadPath=null;
for (newCounter=0; newCounter < newCount; newCounter++) {
if (paths[newCounter] != null  && this.lastPaths.get$O(paths[newCounter]) == null  ) {
++validCount;
this.lastPaths.put$O$O(paths[newCounter], Boolean.TRUE);
if (this.uniquePaths.get$O(paths[newCounter]) == null ) {
cPaths.addElement$O(Clazz.new_($I$(6,1).c$$javax_swing_tree_TreePath$Z,[paths[newCounter], true]));
}this.leadPath=paths[newCounter];
}}
var newSelection;
if (validCount == 0) {
newSelection=null;
} else if (validCount != newCount) {
var keys=this.lastPaths.keys$();
newSelection=Clazz.array($I$(4), [validCount]);
validCount=0;
while (keys.hasMoreElements$()){
newSelection[validCount++]=keys.nextElement$();
}
} else {
newSelection=Clazz.array($I$(4), [paths.length]);
System.arraycopy$O$I$O$I$I(paths, 0, newSelection, 0, paths.length);
}for (oldCounter=0; oldCounter < oldCount; oldCounter++) if (this.selection[oldCounter] != null  && this.lastPaths.get$O(this.selection[oldCounter]) == null  ) cPaths.addElement$O(Clazz.new_($I$(6,1).c$$javax_swing_tree_TreePath$Z,[this.selection[oldCounter], false]));

this.selection=newSelection;
var tempHT=this.uniquePaths;
this.uniquePaths=this.lastPaths;
this.lastPaths=tempHT;
this.lastPaths.clear$();
if (this.selection != null ) this.insureUniqueness$();
this.updateLeadIndex$();
this.resetRowSelection$();
if (cPaths.size$() > 0) this.notifyPathChange$java_util_Vector$javax_swing_tree_TreePath(cPaths, beginLeadPath);
}});

Clazz.newMeth(C$, 'addSelectionPath$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
var toAdd=Clazz.array($I$(4), [1]);
toAdd[0]=path;
this.addSelectionPaths$javax_swing_tree_TreePathA(toAdd);
}});

Clazz.newMeth(C$, 'addSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
var newPathLength=((paths == null ) ? 0 : paths.length);
if (newPathLength > 0) {
if (this.selectionMode == 1) {
this.setSelectionPaths$javax_swing_tree_TreePathA(paths);
} else if (this.selectionMode == 2 && !this.canPathsBeAdded$javax_swing_tree_TreePathA(paths) ) {
if (this.arePathsContiguous$javax_swing_tree_TreePathA(paths)) {
this.setSelectionPaths$javax_swing_tree_TreePathA(paths);
} else {
var newPaths=Clazz.array($I$(4), [1]);
newPaths[0]=paths[0];
this.setSelectionPaths$javax_swing_tree_TreePathA(newPaths);
}} else {
var counter;
var validCount;
var oldCount;
var beginLeadPath=this.leadPath;
var cPaths=null;
if (this.selection == null ) oldCount=0;
 else oldCount=this.selection.length;
this.lastPaths.clear$();
for (counter=0, validCount=0; counter < newPathLength; counter++) {
if (paths[counter] != null ) {
if (this.uniquePaths.get$O(paths[counter]) == null ) {
++validCount;
if (cPaths == null ) cPaths=Clazz.new_($I$(5,1));
cPaths.addElement$O(Clazz.new_($I$(6,1).c$$javax_swing_tree_TreePath$Z,[paths[counter], true]));
this.uniquePaths.put$O$O(paths[counter], Boolean.TRUE);
this.lastPaths.put$O$O(paths[counter], Boolean.TRUE);
}this.leadPath=paths[counter];
}}
if (this.leadPath == null ) {
this.leadPath=beginLeadPath;
}if (validCount > 0) {
var newSelection=Clazz.array($I$(4), [oldCount + validCount]);
if (oldCount > 0) System.arraycopy$O$I$O$I$I(this.selection, 0, newSelection, 0, oldCount);
if (validCount != paths.length) {
var newPaths=this.lastPaths.keys$();
counter=oldCount;
while (newPaths.hasMoreElements$()){
newSelection[counter++]=newPaths.nextElement$();
}
} else {
System.arraycopy$O$I$O$I$I(paths, 0, newSelection, oldCount, validCount);
}this.selection=newSelection;
this.insureUniqueness$();
this.updateLeadIndex$();
this.resetRowSelection$();
this.notifyPathChange$java_util_Vector$javax_swing_tree_TreePath(cPaths, beginLeadPath);
} else this.leadPath=beginLeadPath;
this.lastPaths.clear$();
}}});

Clazz.newMeth(C$, 'removeSelectionPath$javax_swing_tree_TreePath',  function (path) {
if (path != null ) {
var rPath=Clazz.array($I$(4), [1]);
rPath[0]=path;
this.removeSelectionPaths$javax_swing_tree_TreePathA(rPath);
}});

Clazz.newMeth(C$, 'removeSelectionPaths$javax_swing_tree_TreePathA',  function (paths) {
if (paths != null  && this.selection != null   && paths.length > 0 ) {
if (!this.canPathsBeRemoved$javax_swing_tree_TreePathA(paths)) {
this.clearSelection$();
} else {
var pathsToRemove=null;
for (var removeCounter=paths.length - 1; removeCounter >= 0; removeCounter--) {
if (paths[removeCounter] != null ) {
if (this.uniquePaths.get$O(paths[removeCounter]) != null ) {
if (pathsToRemove == null ) pathsToRemove=Clazz.new_($I$(5,1).c$$I,[paths.length]);
this.uniquePaths.remove$O(paths[removeCounter]);
pathsToRemove.addElement$O(Clazz.new_($I$(6,1).c$$javax_swing_tree_TreePath$Z,[paths[removeCounter], false]));
}}}
if (pathsToRemove != null ) {
var removeCount=pathsToRemove.size$();
var beginLeadPath=this.leadPath;
if (removeCount == this.selection.length) {
this.selection=null;
} else {
var pEnum=this.uniquePaths.keys$();
var validCount=0;
this.selection=Clazz.array($I$(4), [this.selection.length - removeCount]);
while (pEnum.hasMoreElements$()){
this.selection[validCount++]=pEnum.nextElement$();
}
}if (this.leadPath != null  && this.uniquePaths.get$O(this.leadPath) == null  ) {
if (this.selection != null ) {
this.leadPath=this.selection[this.selection.length - 1];
} else {
this.leadPath=null;
}} else if (this.selection != null ) {
this.leadPath=this.selection[this.selection.length - 1];
} else {
this.leadPath=null;
}this.updateLeadIndex$();
this.resetRowSelection$();
this.notifyPathChange$java_util_Vector$javax_swing_tree_TreePath(pathsToRemove, beginLeadPath);
}}}});

Clazz.newMeth(C$, 'getSelectionPath$',  function () {
if (this.selection != null ) return this.selection[0];
return null;
});

Clazz.newMeth(C$, 'getSelectionPaths$',  function () {
if (this.selection != null ) {
var pathSize=this.selection.length;
var result=Clazz.array($I$(4), [pathSize]);
System.arraycopy$O$I$O$I$I(this.selection, 0, result, 0, pathSize);
return result;
}return null;
});

Clazz.newMeth(C$, 'getSelectionCount$',  function () {
return (this.selection == null ) ? 0 : this.selection.length;
});

Clazz.newMeth(C$, 'isPathSelected$javax_swing_tree_TreePath',  function (path) {
return (path != null ) ? (this.uniquePaths.get$O(path) != null ) : false;
});

Clazz.newMeth(C$, 'isSelectionEmpty$',  function () {
return (this.selection == null );
});

Clazz.newMeth(C$, 'clearSelection$',  function () {
if (this.selection != null ) {
var selSize=this.selection.length;
var newness=Clazz.array(Boolean.TYPE, [selSize]);
for (var counter=0; counter < selSize; counter++) newness[counter]=false;

var event=Clazz.new_($I$(7,1).c$$O$javax_swing_tree_TreePathA$ZA$javax_swing_tree_TreePath$javax_swing_tree_TreePath,[this, this.selection, newness, this.leadPath, null]);
this.leadPath=null;
this.leadIndex=this.leadRow=-1;
this.uniquePaths.clear$();
this.selection=null;
this.resetRowSelection$();
this.fireValueChanged$javax_swing_event_TreeSelectionEvent(event);
}});

Clazz.newMeth(C$, 'addTreeSelectionListener$javax_swing_event_TreeSelectionListener',  function (x) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(8),['valueChanged$javax_swing_event_TreeSelectionEvent']), x);
});

Clazz.newMeth(C$, 'removeTreeSelectionListener$javax_swing_event_TreeSelectionListener',  function (x) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(8),['valueChanged$javax_swing_event_TreeSelectionEvent']), x);
});

Clazz.newMeth(C$, 'getTreeSelectionListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(8),['valueChanged$javax_swing_event_TreeSelectionEvent']));
});

Clazz.newMeth(C$, 'fireValueChanged$javax_swing_event_TreeSelectionEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(8),['valueChanged$javax_swing_event_TreeSelectionEvent']) ) {
(listeners[i + 1]).valueChanged$javax_swing_event_TreeSelectionEvent(e);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'getSelectionRows$',  function () {
if (this.rowMapper != null  && this.selection != null  ) {
var rows=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(this.selection);
if (rows != null ) {
var invisCount=0;
for (var counter=rows.length - 1; counter >= 0; counter--) {
if (rows[counter] == -1) {
++invisCount;
}}
if (invisCount > 0) {
if (invisCount == rows.length) {
rows=null;
} else {
var tempRows=Clazz.array(Integer.TYPE, [rows.length - invisCount]);
for (var counter=rows.length - 1, visCounter=0; counter >= 0; counter--) {
if (rows[counter] != -1) {
tempRows[visCounter++]=rows[counter];
}}
rows=tempRows;
}}}return rows;
}return null;
});

Clazz.newMeth(C$, 'getMinSelectionRow$',  function () {
return this.listSelectionModel.getMinSelectionIndex$();
});

Clazz.newMeth(C$, 'getMaxSelectionRow$',  function () {
return this.listSelectionModel.getMaxSelectionIndex$();
});

Clazz.newMeth(C$, 'isRowSelected$I',  function (row) {
return this.listSelectionModel.isSelectedIndex$I(row);
});

Clazz.newMeth(C$, 'resetRowSelection$',  function () {
this.listSelectionModel.clearSelection$();
if (this.selection != null  && this.rowMapper != null  ) {
var aRow;
var validCount=0;
var rows=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(this.selection);
for (var counter=0, maxCounter=this.selection.length; counter < maxCounter; counter++) {
aRow=rows[counter];
if (aRow != -1) {
this.listSelectionModel.addSelectionInterval$I$I(aRow, aRow);
}}
if (this.leadIndex != -1 && rows != null  ) {
this.leadRow=rows[this.leadIndex];
} else if (this.leadPath != null ) {
this.tempPaths[0]=this.leadPath;
rows=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(this.tempPaths);
this.leadRow=(rows != null ) ? rows[0] : -1;
} else {
this.leadRow=-1;
}this.insureRowContinuity$();
} else this.leadRow=-1;
});

Clazz.newMeth(C$, 'getLeadSelectionRow$',  function () {
return this.leadRow;
});

Clazz.newMeth(C$, 'getLeadSelectionPath$',  function () {
return this.leadPath;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(9,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.changeSupport == null ) {
return;
}this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
if (this.changeSupport == null ) {
return Clazz.array($I$(10), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'insureRowContinuity$',  function () {
if (this.selectionMode == 2 && this.selection != null   && this.rowMapper != null  ) {
var lModel=this.listSelectionModel;
var min=lModel.getMinSelectionIndex$();
if (min != -1) {
for (var counter=min, maxCounter=lModel.getMaxSelectionIndex$(); counter <= maxCounter; counter++) {
if (!lModel.isSelectedIndex$I(counter)) {
if (counter == min) {
this.clearSelection$();
} else {
var newSel=Clazz.array($I$(4), [counter - min]);
var selectionIndex=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(this.selection);
for (var i=0; i < selectionIndex.length; i++) {
if (selectionIndex[i] < counter) {
newSel[selectionIndex[i] - min]=this.selection[i];
}}
this.setSelectionPaths$javax_swing_tree_TreePathA(newSel);
break;
}}}
}} else if (this.selectionMode == 1 && this.selection != null   && this.selection.length > 1 ) {
this.setSelectionPath$javax_swing_tree_TreePath(this.selection[0]);
}});

Clazz.newMeth(C$, 'arePathsContiguous$javax_swing_tree_TreePathA',  function (paths) {
if (this.rowMapper == null  || paths.length < 2 ) return true;
 else {
var bitSet=Clazz.new_($I$(11,1).c$$I,[32]);
var anIndex;
var counter;
var min;
var pathCount=paths.length;
var validCount=0;
var tempPath=Clazz.array($I$(4), [1]);
tempPath[0]=paths[0];
min=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(tempPath)[0];
for (counter=0; counter < pathCount; counter++) {
if (paths[counter] != null ) {
tempPath[0]=paths[counter];
var rows=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(tempPath);
if (rows == null ) {
return false;
}anIndex=rows[0];
if (anIndex == -1 || anIndex < (min - pathCount)  || anIndex > (min + pathCount) ) return false;
if (anIndex < min) min=anIndex;
if (!bitSet.get$I(anIndex)) {
bitSet.set$I(anIndex);
++validCount;
}}}
var maxCounter=validCount + min;
for (counter=min; counter < maxCounter; counter++) if (!bitSet.get$I(counter)) return false;

}return true;
});

Clazz.newMeth(C$, 'canPathsBeAdded$javax_swing_tree_TreePathA',  function (paths) {
if (paths == null  || paths.length == 0  || this.rowMapper == null   || this.selection == null   || this.selectionMode == 4 ) return true;
 else {
var bitSet=Clazz.new_($I$(11,1));
var lModel=this.listSelectionModel;
var anIndex;
var counter;
var min=lModel.getMinSelectionIndex$();
var max=lModel.getMaxSelectionIndex$();
var tempPath=Clazz.array($I$(4), [1]);
if (min != -1) {
for (counter=min; counter <= max; counter++) {
if (lModel.isSelectedIndex$I(counter)) bitSet.set$I(counter);
}
} else {
tempPath[0]=paths[0];
min=max=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(tempPath)[0];
}for (counter=paths.length - 1; counter >= 0; counter--) {
if (paths[counter] != null ) {
tempPath[0]=paths[counter];
var rows=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(tempPath);
if (rows == null ) {
return false;
}anIndex=rows[0];
min=Math.min(anIndex, min);
max=Math.max(anIndex, max);
if (anIndex == -1) return false;
bitSet.set$I(anIndex);
}}
for (counter=min; counter <= max; counter++) if (!bitSet.get$I(counter)) return false;

}return true;
});

Clazz.newMeth(C$, 'canPathsBeRemoved$javax_swing_tree_TreePathA',  function (paths) {
if (this.rowMapper == null  || this.selection == null   || this.selectionMode == 4 ) return true;
 else {
var bitSet=Clazz.new_($I$(11,1));
var counter;
var pathCount=paths.length;
var anIndex;
var min=-1;
var validCount=0;
var tempPath=Clazz.array($I$(4), [1]);
var rows;
this.lastPaths.clear$();
for (counter=0; counter < pathCount; counter++) {
if (paths[counter] != null ) {
this.lastPaths.put$O$O(paths[counter], Boolean.TRUE);
}}
for (counter=this.selection.length - 1; counter >= 0; counter--) {
if (this.lastPaths.get$O(this.selection[counter]) == null ) {
tempPath[0]=this.selection[counter];
rows=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(tempPath);
if (rows != null  && rows[0] != -1  && !bitSet.get$I(rows[0]) ) {
++validCount;
if (min == -1) min=rows[0];
 else min=Math.min(min, rows[0]);
bitSet.set$I(rows[0]);
}}}
this.lastPaths.clear$();
if (validCount > 1) {
for (counter=min + validCount - 1; counter >= min; counter--) if (!bitSet.get$I(counter)) return false;

}}return true;
});

Clazz.newMeth(C$, 'notifyPathChange$java_util_Vector$javax_swing_tree_TreePath',  function (changedPaths, oldLeadSelection) {
var cPathCount=changedPaths.size$();
var newness=Clazz.array(Boolean.TYPE, [cPathCount]);
var paths=Clazz.array($I$(4), [cPathCount]);
var placeholder;
for (var counter=0; counter < cPathCount; counter++) {
placeholder=changedPaths.elementAt$I(counter);
newness[counter]=placeholder.isNew;
paths[counter]=placeholder.path;
}
var event=Clazz.new_($I$(7,1).c$$O$javax_swing_tree_TreePathA$ZA$javax_swing_tree_TreePath$javax_swing_tree_TreePath,[this, paths, newness, oldLeadSelection, this.leadPath]);
this.fireValueChanged$javax_swing_event_TreeSelectionEvent(event);
});

Clazz.newMeth(C$, 'updateLeadIndex$',  function () {
if (this.leadPath != null ) {
if (this.selection == null ) {
this.leadPath=null;
this.leadIndex=this.leadRow=-1;
} else {
this.leadRow=this.leadIndex=-1;
for (var counter=this.selection.length - 1; counter >= 0; counter--) {
if (this.selection[counter] === this.leadPath ) {
this.leadIndex=counter;
break;
}}
}} else {
this.leadIndex=-1;
}});

Clazz.newMeth(C$, 'insureUniqueness$',  function () {
});

Clazz.newMeth(C$, 'toString',  function () {
var selCount=this.getSelectionCount$();
var retBuffer=Clazz.new_($I$(12,1));
var rows;
if (this.rowMapper != null ) rows=this.rowMapper.getRowsForPaths$javax_swing_tree_TreePathA(this.selection);
 else rows=null;
retBuffer.append$S(this.getClass$().getName$() + " " + this.hashCode$() + " [ " );
for (var counter=0; counter < selCount; counter++) {
if (rows != null ) retBuffer.append$S(this.selection[counter].toString() + "@" + Integer.toString$I(rows[counter]) + " " );
 else retBuffer.append$S(this.selection[counter].toString() + " ");
}
retBuffer.append$S("]");
return retBuffer.toString();
});

Clazz.newMeth(C$, 'clone$',  function () {
var clone=Clazz.clone(this);
clone.changeSupport=null;
if (this.selection != null ) {
var selLength=this.selection.length;
clone.selection=Clazz.array($I$(4), [selLength]);
System.arraycopy$O$I$O$I$I(this.selection, 0, clone.selection, 0, selLength);
}clone.listenerList=Clazz.new_($I$(1,1));
clone.listSelectionModel=this.listSelectionModel.clone$();
clone.uniquePaths=Clazz.new_($I$(3,1));
clone.lastPaths=Clazz.new_($I$(3,1));
clone.tempPaths=Clazz.array($I$(4), [1]);
return clone;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

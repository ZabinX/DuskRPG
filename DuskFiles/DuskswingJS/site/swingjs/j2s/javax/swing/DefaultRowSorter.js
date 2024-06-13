(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.Collections','java.util.ArrayList',['javax.swing.RowSorter','.SortKey'],'javax.swing.SortOrder','java.util.Arrays',['javax.swing.DefaultRowSorter','.Row'],'java.util.Comparator',['javax.swing.DefaultRowSorter','.FilterEntry']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultRowSorter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.RowSorter');
C$.$classes$=[['ModelWrapper',1036],['FilterEntry',2],['Row',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['sortsOnUpdates','sorted'],'I',['maxSortKeys','modelRowCount'],'O',['viewToModel','javax.swing.DefaultRowSorter.Row[]','modelToView','int[]','comparators','java.util.Comparator[]','isSortable','boolean[]','cachedSortKeys','javax.swing.RowSorter.SortKey[]','sortComparators','java.util.Comparator[]','filter','javax.swing.RowFilter','filterEntry','javax.swing.DefaultRowSorter.FilterEntry','sortKeys','java.util.List','useToString','boolean[]','modelWrapper','javax.swing.DefaultRowSorter.ModelWrapper']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.sortKeys=$I$(1).emptyList$();
this.maxSortKeys=3;
}, 1);

Clazz.newMeth(C$, 'setModelWrapper$javax_swing_DefaultRowSorter_ModelWrapper',  function (modelWrapper) {
if (modelWrapper == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["modelWrapper most be non-null"]);
}var last=this.modelWrapper;
this.modelWrapper=modelWrapper;
if (last != null ) {
this.modelStructureChanged$();
} else {
this.modelRowCount=this.getModelWrapper$().getRowCount$();
}});

Clazz.newMeth(C$, 'getModelWrapper$',  function () {
return this.modelWrapper;
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.getModelWrapper$().getModel$();
});

Clazz.newMeth(C$, 'setSortable$I$Z',  function (column, sortable) {
p$1.checkColumn$I.apply(this, [column]);
if (this.isSortable == null ) {
this.isSortable=Clazz.array(Boolean.TYPE, [this.getModelWrapper$().getColumnCount$()]);
for (var i=this.isSortable.length - 1; i >= 0; i--) {
this.isSortable[i]=true;
}
}this.isSortable[column]=sortable;
});

Clazz.newMeth(C$, 'isSortable$I',  function (column) {
p$1.checkColumn$I.apply(this, [column]);
return (this.isSortable == null ) ? true : this.isSortable[column];
});

Clazz.newMeth(C$, 'setSortKeys$java_util_List',  function (sortKeys) {
var old=this.sortKeys;
if (sortKeys != null  && sortKeys.size$() > 0 ) {
var max=this.getModelWrapper$().getColumnCount$();
for (var key, $key = sortKeys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key == null  || key.getColumn$() < 0  || key.getColumn$() >= max ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid SortKey"]);
}}
this.sortKeys=$I$(1,"unmodifiableList$java_util_List",[Clazz.new_($I$(2,1).c$$java_util_Collection,[sortKeys])]);
} else {
this.sortKeys=$I$(1).emptyList$();
}if (!this.sortKeys.equals$O(old)) {
this.fireSortOrderChanged$();
if (this.viewToModel == null ) {
this.sort$();
} else {
p$1.sortExistingData.apply(this, []);
}}});

Clazz.newMeth(C$, 'getSortKeys$',  function () {
return this.sortKeys;
});

Clazz.newMeth(C$, 'setMaxSortKeys$I',  function (max) {
if (max < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid max"]);
}this.maxSortKeys=max;
});

Clazz.newMeth(C$, 'getMaxSortKeys$',  function () {
return this.maxSortKeys;
});

Clazz.newMeth(C$, 'setSortsOnUpdates$Z',  function (sortsOnUpdates) {
this.sortsOnUpdates=sortsOnUpdates;
});

Clazz.newMeth(C$, 'getSortsOnUpdates$',  function () {
return this.sortsOnUpdates;
});

Clazz.newMeth(C$, 'setRowFilter$javax_swing_RowFilter',  function (filter) {
this.filter=filter;
this.sort$();
});

Clazz.newMeth(C$, 'getRowFilter$',  function () {
return this.filter;
});

Clazz.newMeth(C$, 'toggleSortOrder$I',  function (column) {
p$1.checkColumn$I.apply(this, [column]);
if (this.isSortable$I(column)) {
var keys=Clazz.new_([this.getSortKeys$()],$I$(2,1).c$$java_util_Collection);
var sortKey;
var sortIndex;
for (sortIndex=keys.size$() - 1; sortIndex >= 0; sortIndex--) {
if (keys.get$I(sortIndex).getColumn$() == column) {
break;
}}
if (sortIndex == -1) {
sortKey=Clazz.new_([column, $I$(4).ASCENDING],$I$(3,1).c$$I$javax_swing_SortOrder);
keys.add$I$O(0, sortKey);
} else if (sortIndex == 0) {
keys.set$I$O(0, p$1.toggle$javax_swing_RowSorter_SortKey.apply(this, [keys.get$I(0)]));
} else {
keys.remove$I(sortIndex);
keys.add$I$O(0, Clazz.new_([column, $I$(4).ASCENDING],$I$(3,1).c$$I$javax_swing_SortOrder));
}if (keys.size$() > this.getMaxSortKeys$()) {
keys=keys.subList$I$I(0, this.getMaxSortKeys$());
}this.setSortKeys$java_util_List(keys);
}});

Clazz.newMeth(C$, 'toggle$javax_swing_RowSorter_SortKey',  function (key) {
if (key.getSortOrder$() === $I$(4).ASCENDING ) {
return Clazz.new_([key.getColumn$(), $I$(4).DESCENDING],$I$(3,1).c$$I$javax_swing_SortOrder);
}return Clazz.new_([key.getColumn$(), $I$(4).ASCENDING],$I$(3,1).c$$I$javax_swing_SortOrder);
}, p$1);

Clazz.newMeth(C$, 'convertRowIndexToView$I',  function (index) {
if (this.modelToView == null ) {
if (index < 0 || index >= this.getModelWrapper$().getRowCount$() ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid index"]);
}return index;
}return this.modelToView[index];
});

Clazz.newMeth(C$, 'convertRowIndexToModel$I',  function (index) {
if (this.viewToModel == null ) {
if (index < 0 || index >= this.getModelWrapper$().getRowCount$() ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid index"]);
}return index;
}return this.viewToModel[index].modelIndex;
});

Clazz.newMeth(C$, 'isUnsorted',  function () {
var keys=this.getSortKeys$();
var keySize=keys.size$();
return (keySize == 0 || keys.get$I(0).getSortOrder$() === $I$(4).UNSORTED  );
}, p$1);

Clazz.newMeth(C$, 'sortExistingData',  function () {
var lastViewToModel=p$1.getViewToModelAsInts$javax_swing_DefaultRowSorter_RowA.apply(this, [this.viewToModel]);
p$1.updateUseToString.apply(this, []);
p$1.cacheSortKeys$java_util_List.apply(this, [this.getSortKeys$()]);
if (p$1.isUnsorted.apply(this, [])) {
if (this.getRowFilter$() == null ) {
this.viewToModel=null;
this.modelToView=null;
} else {
var included=0;
for (var i=0; i < this.modelToView.length; i++) {
if (this.modelToView[i] != -1) {
this.viewToModel[included].modelIndex=i;
this.modelToView[i]=included++;
}}
}} else {
$I$(5).sort$OA(this.viewToModel);
p$1.setModelToViewFromViewToModel$Z.apply(this, [false]);
}this.fireRowSorterChanged$IA(lastViewToModel);
}, p$1);

Clazz.newMeth(C$, 'sort$',  function () {
this.sorted=true;
var lastViewToModel=p$1.getViewToModelAsInts$javax_swing_DefaultRowSorter_RowA.apply(this, [this.viewToModel]);
p$1.updateUseToString.apply(this, []);
if (p$1.isUnsorted.apply(this, [])) {
this.cachedSortKeys=Clazz.array($I$(3), [0]);
if (this.getRowFilter$() == null ) {
if (this.viewToModel != null ) {
this.viewToModel=null;
this.modelToView=null;
} else {
return;
}} else {
p$1.initializeFilteredMapping.apply(this, []);
}} else {
p$1.cacheSortKeys$java_util_List.apply(this, [this.getSortKeys$()]);
if (this.getRowFilter$() != null ) {
p$1.initializeFilteredMapping.apply(this, []);
} else {
p$1.createModelToView$I.apply(this, [this.getModelWrapper$().getRowCount$()]);
p$1.createViewToModel$I.apply(this, [this.getModelWrapper$().getRowCount$()]);
}$I$(5).sort$OA(this.viewToModel);
p$1.setModelToViewFromViewToModel$Z.apply(this, [false]);
}this.fireRowSorterChanged$IA(lastViewToModel);
});

Clazz.newMeth(C$, 'updateUseToString',  function () {
var i=this.getModelWrapper$().getColumnCount$();
if (this.useToString == null  || this.useToString.length != i ) {
this.useToString=Clazz.array(Boolean.TYPE, [i]);
}for (--i; i >= 0; i--) {
this.useToString[i]=this.useToString$I(i);
}
}, p$1);

Clazz.newMeth(C$, 'initializeFilteredMapping',  function () {
var rowCount=this.getModelWrapper$().getRowCount$();
var i;
var j;
var excludedCount=0;
p$1.createModelToView$I.apply(this, [rowCount]);
for (i=0; i < rowCount; i++) {
if (p$1.include$I.apply(this, [i])) {
this.modelToView[i]=i - excludedCount;
} else {
this.modelToView[i]=-1;
++excludedCount;
}}
p$1.createViewToModel$I.apply(this, [rowCount - excludedCount]);
for (i=0, j=0; i < rowCount; i++) {
if (this.modelToView[i] != -1) {
this.viewToModel[j++].modelIndex=i;
}}
}, p$1);

Clazz.newMeth(C$, 'createModelToView$I',  function (rowCount) {
if (this.modelToView == null  || this.modelToView.length != rowCount ) {
this.modelToView=Clazz.array(Integer.TYPE, [rowCount]);
}}, p$1);

Clazz.newMeth(C$, 'createViewToModel$I',  function (rowCount) {
var recreateFrom=0;
if (this.viewToModel != null ) {
recreateFrom=Math.min(rowCount, this.viewToModel.length);
if (this.viewToModel.length != rowCount) {
var oldViewToModel=this.viewToModel;
this.viewToModel=Clazz.array($I$(6), [rowCount]);
System.arraycopy$O$I$O$I$I(oldViewToModel, 0, this.viewToModel, 0, recreateFrom);
}} else {
this.viewToModel=Clazz.array($I$(6), [rowCount]);
}var i;
for (i=0; i < recreateFrom; i++) {
this.viewToModel[i].modelIndex=i;
}
for (i=recreateFrom; i < rowCount; i++) {
this.viewToModel[i]=Clazz.new_($I$(6,1).c$$javax_swing_DefaultRowSorter$I,[this, i]);
}
}, p$1);

Clazz.newMeth(C$, 'cacheSortKeys$java_util_List',  function (keys) {
var keySize=keys.size$();
this.sortComparators=Clazz.array($I$(7), [keySize]);
for (var i=0; i < keySize; i++) {
this.sortComparators[i]=p$1.getComparator0$I.apply(this, [keys.get$I(i).getColumn$()]);
}
this.cachedSortKeys=keys.toArray$OA(Clazz.array($I$(3), [keySize]));
}, p$1);

Clazz.newMeth(C$, 'useToString$I',  function (column) {
return (this.getComparator$I(column) == null );
});

Clazz.newMeth(C$, 'setModelToViewFromViewToModel$Z',  function (unsetFirst) {
var i;
if (unsetFirst) {
for (i=this.modelToView.length - 1; i >= 0; i--) {
this.modelToView[i]=-1;
}
}for (i=this.viewToModel.length - 1; i >= 0; i--) {
this.modelToView[this.viewToModel[i].modelIndex]=i;
}
}, p$1);

Clazz.newMeth(C$, 'getViewToModelAsInts$javax_swing_DefaultRowSorter_RowA',  function (viewToModel) {
if (viewToModel != null ) {
var viewToModelI=Clazz.array(Integer.TYPE, [viewToModel.length]);
for (var i=viewToModel.length - 1; i >= 0; i--) {
viewToModelI[i]=viewToModel[i].modelIndex;
}
return viewToModelI;
}return Clazz.array(Integer.TYPE, [0]);
}, p$1);

Clazz.newMeth(C$, 'setComparator$I$java_util_Comparator',  function (column, comparator) {
p$1.checkColumn$I.apply(this, [column]);
if (this.comparators == null ) {
this.comparators=Clazz.array($I$(7), [this.getModelWrapper$().getColumnCount$()]);
}this.comparators[column]=comparator;
});

Clazz.newMeth(C$, 'getComparator$I',  function (column) {
p$1.checkColumn$I.apply(this, [column]);
if (this.comparators != null ) {
return this.comparators[column];
}return null;
});

Clazz.newMeth(C$, 'getComparator0$I',  function (column) {
var comparator=this.getComparator$I(column);
if (comparator != null ) {
return comparator;
}return null;
}, p$1);

Clazz.newMeth(C$, 'getFilterEntry$I',  function (modelIndex) {
if (this.filterEntry == null ) {
this.filterEntry=Clazz.new_($I$(8,1),[this, null]);
}this.filterEntry.modelIndex=modelIndex;
return this.filterEntry;
}, p$1);

Clazz.newMeth(C$, 'getViewRowCount$',  function () {
if (this.viewToModel != null ) {
return this.viewToModel.length;
}return this.getModelWrapper$().getRowCount$();
});

Clazz.newMeth(C$, 'getModelRowCount$',  function () {
return this.getModelWrapper$().getRowCount$();
});

Clazz.newMeth(C$, 'allChanged',  function () {
this.modelToView=null;
this.viewToModel=null;
this.comparators=null;
this.isSortable=null;
if (p$1.isUnsorted.apply(this, [])) {
this.sort$();
} else {
this.setSortKeys$java_util_List(null);
}}, p$1);

Clazz.newMeth(C$, 'modelStructureChanged$',  function () {
p$1.allChanged.apply(this, []);
this.modelRowCount=this.getModelWrapper$().getRowCount$();
});

Clazz.newMeth(C$, 'allRowsChanged$',  function () {
this.modelRowCount=this.getModelWrapper$().getRowCount$();
this.sort$();
});

Clazz.newMeth(C$, 'rowsInserted$I$I',  function (firstRow, endRow) {
p$1.checkAgainstModel$I$I.apply(this, [firstRow, endRow]);
var newModelRowCount=this.getModelWrapper$().getRowCount$();
if (endRow >= newModelRowCount) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid range"]);
}this.modelRowCount=newModelRowCount;
if (p$1.shouldOptimizeChange$I$I.apply(this, [firstRow, endRow])) {
p$1.rowsInserted0$I$I.apply(this, [firstRow, endRow]);
}});

Clazz.newMeth(C$, 'rowsDeleted$I$I',  function (firstRow, endRow) {
p$1.checkAgainstModel$I$I.apply(this, [firstRow, endRow]);
if (firstRow >= this.modelRowCount || endRow >= this.modelRowCount ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid range"]);
}this.modelRowCount=this.getModelWrapper$().getRowCount$();
if (p$1.shouldOptimizeChange$I$I.apply(this, [firstRow, endRow])) {
p$1.rowsDeleted0$I$I.apply(this, [firstRow, endRow]);
}});

Clazz.newMeth(C$, 'rowsUpdated$I$I',  function (firstRow, endRow) {
p$1.checkAgainstModel$I$I.apply(this, [firstRow, endRow]);
if (firstRow >= this.modelRowCount || endRow >= this.modelRowCount ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid range"]);
}if (this.getSortsOnUpdates$()) {
if (p$1.shouldOptimizeChange$I$I.apply(this, [firstRow, endRow])) {
p$1.rowsUpdated0$I$I.apply(this, [firstRow, endRow]);
}} else {
this.sorted=false;
}});

Clazz.newMeth(C$, 'rowsUpdated$I$I$I',  function (firstRow, endRow, column) {
p$1.checkColumn$I.apply(this, [column]);
this.rowsUpdated$I$I(firstRow, endRow);
});

Clazz.newMeth(C$, 'checkAgainstModel$I$I',  function (firstRow, endRow) {
if (firstRow > endRow || firstRow < 0  || endRow < 0  || firstRow > this.modelRowCount ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Invalid range"]);
}}, p$1);

Clazz.newMeth(C$, 'include$I',  function (row) {
var filter=this.getRowFilter$();
if (filter != null ) {
return filter.include$javax_swing_RowFilter_Entry(p$1.getFilterEntry$I.apply(this, [row]));
}return true;
}, p$1);

Clazz.newMeth(C$, 'compare$I$I',  function (model1, model2) {
var column;
var sortOrder;
var v1;
var v2;
var result;
for (var counter=0; counter < this.cachedSortKeys.length; counter++) {
column=this.cachedSortKeys[counter].getColumn$();
sortOrder=this.cachedSortKeys[counter].getSortOrder$();
if (sortOrder === $I$(4).UNSORTED ) {
result=model1 - model2;
} else {
v1=this.getModelWrapper$().getValueAt$I$I(model1, column);
v2=this.getModelWrapper$().getValueAt$I$I(model2, column);
if (v1 == null ) {
if (v2 == null ) {
result=0;
} else {
result=-1;
}} else if (v2 == null ) {
result=1;
} else {
var c=this.sortComparators[counter];
result=c.compare$O$O(v1, v2);
}if (sortOrder === $I$(4).DESCENDING ) {
result=-result;
}}if (result != 0) {
return result;
}}
return model1 - model2;
}, p$1);

Clazz.newMeth(C$, 'isTransformed',  function () {
return (this.viewToModel != null );
}, p$1);

Clazz.newMeth(C$, 'insertInOrder$java_util_List$javax_swing_DefaultRowSorter_RowA',  function (toAdd, current) {
var last=0;
var index;
var max=toAdd.size$();
for (var i=0; i < max; i++) {
index=$I$(5,"binarySearch$OA$O",[current, toAdd.get$I(i)]);
if (index < 0) {
index=-1 - index;
}System.arraycopy$O$I$O$I$I(current, last, this.viewToModel, last + i, index - last);
this.viewToModel[index + i]=toAdd.get$I(i);
last=index;
}
System.arraycopy$O$I$O$I$I(current, last, this.viewToModel, last + max, current.length - last);
}, p$1);

Clazz.newMeth(C$, 'shouldOptimizeChange$I$I',  function (firstRow, lastRow) {
if (!p$1.isTransformed.apply(this, [])) {
return false;
}if (!this.sorted || (lastRow - firstRow) > (this.viewToModel.length/10|0) ) {
this.sort$();
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'rowsInserted0$I$I',  function (firstRow, lastRow) {
var oldViewToModel=p$1.getViewToModelAsInts$javax_swing_DefaultRowSorter_RowA.apply(this, [this.viewToModel]);
var i;
var delta=(lastRow - firstRow) + 1;
var added=Clazz.new_($I$(2,1).c$$I,[delta]);
for (i=firstRow; i <= lastRow; i++) {
if (p$1.include$I.apply(this, [i])) {
added.add$O(Clazz.new_($I$(6,1).c$$javax_swing_DefaultRowSorter$I,[this, i]));
}}
var viewIndex;
for (i=this.modelToView.length - 1; i >= firstRow; i--) {
viewIndex=this.modelToView[i];
if (viewIndex != -1) {
this.viewToModel[viewIndex].modelIndex+=delta;
}}
if (added.size$() > 0) {
$I$(1).sort$java_util_List(added);
var lastViewToModel=this.viewToModel;
this.viewToModel=Clazz.array($I$(6), [this.viewToModel.length + added.size$()]);
p$1.insertInOrder$java_util_List$javax_swing_DefaultRowSorter_RowA.apply(this, [added, lastViewToModel]);
}p$1.createModelToView$I.apply(this, [this.getModelWrapper$().getRowCount$()]);
p$1.setModelToViewFromViewToModel$Z.apply(this, [true]);
this.fireRowSorterChanged$IA(oldViewToModel);
}, p$1);

Clazz.newMeth(C$, 'rowsDeleted0$I$I',  function (firstRow, lastRow) {
var oldViewToModel=p$1.getViewToModelAsInts$javax_swing_DefaultRowSorter_RowA.apply(this, [this.viewToModel]);
var removedFromView=0;
var i;
var viewIndex;
for (i=firstRow; i <= lastRow; i++) {
viewIndex=this.modelToView[i];
if (viewIndex != -1) {
++removedFromView;
this.viewToModel[viewIndex]=null;
}}
var delta=lastRow - firstRow + 1;
for (i=this.modelToView.length - 1; i > lastRow; i--) {
viewIndex=this.modelToView[i];
if (viewIndex != -1) {
this.viewToModel[viewIndex].modelIndex-=delta;
}}
if (removedFromView > 0) {
var newViewToModel=Clazz.array($I$(6), [this.viewToModel.length - removedFromView]);
var newIndex=0;
var last=0;
for (i=0; i < this.viewToModel.length; i++) {
if (this.viewToModel[i] == null ) {
System.arraycopy$O$I$O$I$I(this.viewToModel, last, newViewToModel, newIndex, i - last);
newIndex+=(i - last);
last=i + 1;
}}
System.arraycopy$O$I$O$I$I(this.viewToModel, last, newViewToModel, newIndex, this.viewToModel.length - last);
this.viewToModel=newViewToModel;
}p$1.createModelToView$I.apply(this, [this.getModelWrapper$().getRowCount$()]);
p$1.setModelToViewFromViewToModel$Z.apply(this, [true]);
this.fireRowSorterChanged$IA(oldViewToModel);
}, p$1);

Clazz.newMeth(C$, 'rowsUpdated0$I$I',  function (firstRow, lastRow) {
var oldViewToModel=p$1.getViewToModelAsInts$javax_swing_DefaultRowSorter_RowA.apply(this, [this.viewToModel]);
var i;
var j;
var delta=lastRow - firstRow + 1;
var modelIndex;
if (this.getRowFilter$() == null ) {
var updated=Clazz.array($I$(6), [delta]);
for (j=0, i=firstRow; i <= lastRow; i++, j++) {
updated[j]=this.viewToModel[this.modelToView[i]];
}
$I$(5).sort$OA(updated);
var intermediary=Clazz.array($I$(6), [this.viewToModel.length - delta]);
for (i=0, j=0; i < this.viewToModel.length; i++) {
modelIndex=this.viewToModel[i].modelIndex;
if (modelIndex < firstRow || modelIndex > lastRow ) {
intermediary[j++]=this.viewToModel[i];
}}
p$1.insertInOrder$java_util_List$javax_swing_DefaultRowSorter_RowA.apply(this, [$I$(5).asList$OA(updated), intermediary]);
p$1.setModelToViewFromViewToModel$Z.apply(this, [false]);
} else {
var updated=Clazz.new_($I$(2,1).c$$I,[delta]);
var newlyVisible=0;
var newlyHidden=0;
var effected=0;
for (i=firstRow; i <= lastRow; i++) {
if (this.modelToView[i] == -1) {
if (p$1.include$I.apply(this, [i])) {
updated.add$O(Clazz.new_($I$(6,1).c$$javax_swing_DefaultRowSorter$I,[this, i]));
++newlyVisible;
}} else {
if (!p$1.include$I.apply(this, [i])) {
++newlyHidden;
} else {
updated.add$O(this.viewToModel[this.modelToView[i]]);
}this.modelToView[i]=-2;
++effected;
}}
$I$(1).sort$java_util_List(updated);
var intermediary=Clazz.array($I$(6), [this.viewToModel.length - effected]);
for (i=0, j=0; i < this.viewToModel.length; i++) {
modelIndex=this.viewToModel[i].modelIndex;
if (this.modelToView[modelIndex] != -2) {
intermediary[j++]=this.viewToModel[i];
}}
if (newlyVisible != newlyHidden) {
this.viewToModel=Clazz.array($I$(6), [this.viewToModel.length + newlyVisible - newlyHidden]);
}p$1.insertInOrder$java_util_List$javax_swing_DefaultRowSorter_RowA.apply(this, [updated, intermediary]);
p$1.setModelToViewFromViewToModel$Z.apply(this, [true]);
}this.fireRowSorterChanged$IA(oldViewToModel);
}, p$1);

Clazz.newMeth(C$, 'checkColumn$I',  function (column) {
if (column < 0 || column >= this.getModelWrapper$().getColumnCount$() ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["column beyond range of TableModel"]);
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultRowSorter, "ModelWrapper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getStringValueAt$I$I',  function (row, column) {
var o=this.getValueAt$I$I(row, column);
if (o == null ) {
return "";
}var string=o.toString();
if (string == null ) {
return "";
}return string;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultRowSorter, "FilterEntry", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.RowFilter','.Entry']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modelIndex']]]

Clazz.newMeth(C$, 'getModel$',  function () {
return this.b$['javax.swing.DefaultRowSorter'].getModelWrapper$.apply(this.b$['javax.swing.DefaultRowSorter'], []).getModel$();
});

Clazz.newMeth(C$, 'getValueCount$',  function () {
return this.b$['javax.swing.DefaultRowSorter'].getModelWrapper$.apply(this.b$['javax.swing.DefaultRowSorter'], []).getColumnCount$();
});

Clazz.newMeth(C$, 'getValue$I',  function (index) {
return this.b$['javax.swing.DefaultRowSorter'].getModelWrapper$.apply(this.b$['javax.swing.DefaultRowSorter'], []).getValueAt$I$I(this.modelIndex, index);
});

Clazz.newMeth(C$, 'getStringValue$I',  function (index) {
return this.b$['javax.swing.DefaultRowSorter'].getModelWrapper$.apply(this.b$['javax.swing.DefaultRowSorter'], []).getStringValueAt$I$I(this.modelIndex, index);
});

Clazz.newMeth(C$, 'getIdentifier$',  function () {
return this.b$['javax.swing.DefaultRowSorter'].getModelWrapper$.apply(this.b$['javax.swing.DefaultRowSorter'], []).getIdentifier$I(this.modelIndex);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultRowSorter, "Row", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modelIndex'],'O',['sorter','javax.swing.DefaultRowSorter']]]

Clazz.newMeth(C$, 'c$$javax_swing_DefaultRowSorter$I',  function (sorter, index) {
;C$.$init$.apply(this);
this.sorter=sorter;
this.modelIndex=index;
}, 1);

Clazz.newMeth(C$, ['compareTo$javax_swing_DefaultRowSorter_Row','compareTo$O'],  function (o) {
return p$1.compare$I$I.apply(this.sorter, [this.modelIndex, o.modelIndex]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

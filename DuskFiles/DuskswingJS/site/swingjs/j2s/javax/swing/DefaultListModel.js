(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultListModel", null, 'javax.swing.AbstractListModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.delegate=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['delegate','java.util.Vector']]]

Clazz.newMeth(C$, 'getSize$',  function () {
return this.delegate.size$();
});

Clazz.newMeth(C$, 'getElementAt$I',  function (index) {
return this.delegate.elementAt$I(index);
});

Clazz.newMeth(C$, 'copyInto$OA',  function (anArray) {
this.delegate.copyInto$OA(anArray);
});

Clazz.newMeth(C$, 'trimToSize$',  function () {
this.delegate.trimToSize$();
});

Clazz.newMeth(C$, 'ensureCapacity$I',  function (minCapacity) {
this.delegate.ensureCapacity$I(minCapacity);
});

Clazz.newMeth(C$, 'setSize$I',  function (newSize) {
var oldSize=this.delegate.size$();
this.delegate.setSize$I(newSize);
if (oldSize > newSize) {
this.fireIntervalRemoved$O$I$I(this, newSize, oldSize - 1);
} else if (oldSize < newSize) {
this.fireIntervalAdded$O$I$I(this, oldSize, newSize - 1);
}});

Clazz.newMeth(C$, 'capacity$',  function () {
return this.delegate.capacity$();
});

Clazz.newMeth(C$, 'size$',  function () {
return this.delegate.size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.delegate.isEmpty$();
});

Clazz.newMeth(C$, 'elements$',  function () {
return this.delegate.elements$();
});

Clazz.newMeth(C$, 'contains$O',  function (elem) {
return this.delegate.contains$O(elem);
});

Clazz.newMeth(C$, 'indexOf$O',  function (elem) {
return this.delegate.indexOf$O(elem);
});

Clazz.newMeth(C$, 'indexOf$O$I',  function (elem, index) {
return this.delegate.indexOf$O$I(elem, index);
});

Clazz.newMeth(C$, 'lastIndexOf$O',  function (elem) {
return this.delegate.lastIndexOf$O(elem);
});

Clazz.newMeth(C$, 'lastIndexOf$O$I',  function (elem, index) {
return this.delegate.lastIndexOf$O$I(elem, index);
});

Clazz.newMeth(C$, 'elementAt$I',  function (index) {
return this.delegate.elementAt$I(index);
});

Clazz.newMeth(C$, 'firstElement$',  function () {
return this.delegate.firstElement$();
});

Clazz.newMeth(C$, 'lastElement$',  function () {
return this.delegate.lastElement$();
});

Clazz.newMeth(C$, 'setElementAt$O$I',  function (obj, index) {
this.delegate.setElementAt$O$I(obj, index);
this.fireContentsChanged$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'removeElementAt$I',  function (index) {
this.delegate.removeElementAt$I(index);
this.fireIntervalRemoved$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'insertElementAt$O$I',  function (obj, index) {
this.delegate.insertElementAt$O$I(obj, index);
this.fireIntervalAdded$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'addElement$O',  function (obj) {
var index=this.delegate.size$();
this.delegate.addElement$O(obj);
this.fireIntervalAdded$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'removeElement$O',  function (obj) {
var index=this.indexOf$O(obj);
var rv=this.delegate.removeElement$O(obj);
if (index >= 0) {
this.fireIntervalRemoved$O$I$I(this, index, index);
}return rv;
});

Clazz.newMeth(C$, 'removeAllElements$',  function () {
var index1=this.delegate.size$() - 1;
this.delegate.removeAllElements$();
if (index1 >= 0) {
this.fireIntervalRemoved$O$I$I(this, 0, index1);
}});

Clazz.newMeth(C$, 'toString',  function () {
return this.delegate.toString();
});

Clazz.newMeth(C$, 'toArray$',  function () {
var rv=Clazz.array(java.lang.Object, [this.delegate.size$()]);
this.delegate.copyInto$OA(rv);
return rv;
});

Clazz.newMeth(C$, 'get$I',  function (index) {
return this.delegate.elementAt$I(index);
});

Clazz.newMeth(C$, 'set$I$O',  function (index, element) {
var rv=this.delegate.elementAt$I(index);
this.delegate.setElementAt$O$I(element, index);
this.fireContentsChanged$O$I$I(this, index, index);
return rv;
});

Clazz.newMeth(C$, 'add$I$O',  function (index, element) {
this.delegate.insertElementAt$O$I(element, index);
this.fireIntervalAdded$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
var rv=this.delegate.elementAt$I(index);
this.delegate.removeElementAt$I(index);
this.fireIntervalRemoved$O$I$I(this, index, index);
return rv;
});

Clazz.newMeth(C$, 'clear$',  function () {
var index1=this.delegate.size$() - 1;
this.delegate.removeAllElements$();
if (index1 >= 0) {
this.fireIntervalRemoved$O$I$I(this, 0, index1);
}});

Clazz.newMeth(C$, 'removeRange$I$I',  function (fromIndex, toIndex) {
if (fromIndex > toIndex) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromIndex must be <= toIndex"]);
}for (var i=toIndex; i >= fromIndex; i--) {
this.delegate.removeElementAt$I(i);
}
this.fireIntervalRemoved$O$I$I(this, fromIndex, toIndex);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

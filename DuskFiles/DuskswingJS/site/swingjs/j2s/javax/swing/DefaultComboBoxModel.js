(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultComboBoxModel", null, 'javax.swing.AbstractListModel', 'javax.swing.MutableComboBoxModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['秘isQuiet'],'O',['objects','java.util.Vector','selectedObject','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.objects=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$OA',  function (items) {
Clazz.super_(C$, this);
this.objects=Clazz.new_($I$(1,1));
this.objects.ensureCapacity$I(items.length);
var i;
var c;
for (i=0, c=items.length; i < c; i++) this.objects.addElement$O(items[i]);

if (this.getSize$() > 0) {
this.selectedObject=this.getElementAt$I(0);
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_Vector',  function (v) {
Clazz.super_(C$, this);
this.objects=v;
if (this.getSize$() > 0) {
this.selectedObject=this.getElementAt$I(0);
}}, 1);

Clazz.newMeth(C$, 'setSelectedItem$O',  function (anObject) {
if ((this.selectedObject != null  && !this.selectedObject.equals$O(anObject) ) || this.selectedObject == null  && anObject != null   ) {
this.selectedObject=anObject;
if (this.秘isQuiet) {
} else {
this.fireContentsChanged$O$I$I(this, -1, -1);
}}});

Clazz.newMeth(C$, 'getSelectedItem$',  function () {
return this.selectedObject;
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.objects.size$();
});

Clazz.newMeth(C$, 'getElementAt$I',  function (index) {
if (index >= 0 && index < this.objects.size$() ) return this.objects.elementAt$I(index);
 else return null;
});

Clazz.newMeth(C$, 'getIndexOf$O',  function (anObject) {
return this.objects.indexOf$O(anObject);
});

Clazz.newMeth(C$, 'addElement$O',  function (anObject) {
this.objects.addElement$O(anObject);
this.fireIntervalAdded$O$I$I(this, this.objects.size$() - 1, this.objects.size$() - 1);
if (this.objects.size$() == 1 && this.selectedObject == null   && anObject != null  ) {
this.秘setSelectedItemQuiet$O(anObject);
}});

Clazz.newMeth(C$, 'insertElementAt$O$I',  function (anObject, index) {
this.objects.insertElementAt$O$I(anObject, index);
this.fireIntervalAdded$O$I$I(this, index, index);
var select=(1 ? !!this.isAWT$ :false);
if (select && index == 0  && this.objects.size$() == 1  && this.selectedObject == null   && anObject != null  ) this.秘setSelectedItemQuiet$O(anObject);
});

Clazz.newMeth(C$, 'removeElementAt$I',  function (index) {
if (this.getElementAt$I(index) === this.selectedObject ) this.秘setSelectedItemQuiet$O(index > 0 ? this.getElementAt$I(index - 1) : this.getSize$() == 1 ? null : this.getElementAt$I(index + 1));
this.objects.removeElementAt$I(index);
this.fireIntervalRemoved$O$I$I(this, index, index);
});

Clazz.newMeth(C$, 'removeElement$O',  function (anObject) {
var index=this.objects.indexOf$O(anObject);
if (index != -1) {
this.removeElementAt$I(index);
}});

Clazz.newMeth(C$, 'removeAllElements$',  function () {
if (this.objects.size$() > 0) {
var firstIndex=0;
var lastIndex=this.objects.size$() - 1;
this.objects.removeAllElements$();
this.selectedObject=null;
this.fireIntervalRemoved$O$I$I(this, firstIndex, lastIndex);
} else {
this.selectedObject=null;
}});

Clazz.newMeth(C$, '秘setSelectedItemQuiet$O',  function (o) {
this.秘isQuiet=(!!this.isAWT$ ||false);
this.setSelectedItem$O(o);
this.秘isQuiet=false;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

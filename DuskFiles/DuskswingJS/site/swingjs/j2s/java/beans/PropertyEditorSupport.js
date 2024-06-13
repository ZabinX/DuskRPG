(function(){var P$=Clazz.newPackage("java.beans"),I$=[[0,'java.util.Vector','java.beans.PropertyChangeEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PropertyEditorSupport", null, null, 'java.beans.PropertyEditor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['value','java.lang.Object','+source','listeners','java.util.Vector']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setSource$O(this);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (source) {
;C$.$init$.apply(this);
if (source == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.setSource$O(source);
}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return this.source;
});

Clazz.newMeth(C$, 'setSource$O',  function (source) {
this.source=source;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.value=value;
this.firePropertyChange$();
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'isPaintable$',  function () {
return false;
});

Clazz.newMeth(C$, 'paintValue$java_awt_Graphics$java_awt_Rectangle',  function (gfx, box) {
});

Clazz.newMeth(C$, 'getJavaInitializationString$',  function () {
return "???";
});

Clazz.newMeth(C$, 'getAsText$',  function () {
return (this.value != null ) ? this.value.toString() : "null";
});

Clazz.newMeth(C$, 'setAsText$S',  function (text) {
if (Clazz.instanceOf(this.value, "java.lang.String")) {
this.setValue$O(text);
return;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[text]);
});

Clazz.newMeth(C$, 'getTags$',  function () {
return null;
});

Clazz.newMeth(C$, 'getCustomEditor$',  function () {
return null;
});

Clazz.newMeth(C$, 'supportsCustomEditor$',  function () {
return false;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.listeners == null ) {
this.listeners=Clazz.new_($I$(1,1));
}this.listeners.addElement$O(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (this.listeners == null ) {
return;
}this.listeners.removeElement$O(listener);
});

Clazz.newMeth(C$, 'firePropertyChange$',  function () {
var targets;
{
if (this.listeners == null ) {
return;
}targets=this.listeners.clone$();
}var evt=Clazz.new_($I$(2,1).c$$O$S$O$O,[this.source, null, null, null]);
for (var i=0; i < targets.size$(); i++) {
var target=targets.elementAt$I(i);
target.propertyChange$java_beans_PropertyChangeEvent(evt);
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

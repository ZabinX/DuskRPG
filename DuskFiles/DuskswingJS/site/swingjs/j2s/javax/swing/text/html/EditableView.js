(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EditableView", null, 'javax.swing.text.ComponentView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isVisible']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (e) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[e]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
if (this.isVisible) {
return C$.superclazz.prototype.getMinimumSpan$I.apply(this, [axis]);
}return 0;
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
if (this.isVisible) {
return C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]);
}return 0;
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
if (this.isVisible) {
return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
}return 0;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
var c=this.getComponent$();
var host=this.getContainer$();
if (Clazz.instanceOf(host, "javax.swing.text.JTextComponent") && this.isVisible != (host).isEditable$()  ) {
this.isVisible=(host).isEditable$();
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
host.repaint$();
}if (this.isVisible) {
C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, allocation]);
} else {
this.setSize$F$F(0, 0);
}if (c != null ) {
c.setFocusable$Z(this.isVisible);
}});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
if (parent != null ) {
var host=parent.getContainer$();
if (host != null ) {
if (Clazz.instanceOf(host, "javax.swing.text.JTextComponent")) {
this.isVisible=(host).isEditable$();
} else {
this.isVisible=false;
}}}C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.isVisible;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

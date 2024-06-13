(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,['javax.swing.text.html.CSS','.Attribute'],'javax.swing.text.html.BlockView']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParagraphView", null, 'javax.swing.text.ParagraphView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attr','javax.swing.text.AttributeSet','painter','javax.swing.text.html.StyleSheet.BoxPainter','cssWidth','javax.swing.text.html.CSS.LengthValue','+cssHeight']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
if (parent != null ) {
this.setPropertiesFromAttributes$();
}});

Clazz.newMeth(C$, 'getAttributes$',  function () {
if (this.attr == null ) {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
}return this.attr;
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
this.painter=sheet.getBoxPainter$javax_swing_text_AttributeSet(this.attr);
if (this.attr != null ) {
C$.superclazz.prototype.setPropertiesFromAttributes$.apply(this, []);
this.setInsets$H$H$H$H(($s$[0] = this.painter.getInset$I$javax_swing_text_View(1, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(2, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(3, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(4, this), $s$[0]));
var o=this.attr.getAttribute$O($I$(1).TEXT_ALIGN);
if (o != null ) {
var ta=o.toString();
if (ta.equals$O("left")) {
this.setJustification$I(0);
} else if (ta.equals$O("center")) {
this.setJustification$I(1);
} else if (ta.equals$O("right")) {
this.setJustification$I(2);
} else if (ta.equals$O("justify")) {
this.setJustification$I(3);
}}this.cssWidth=this.attr.getAttribute$O($I$(1).WIDTH);
this.cssHeight=this.attr.getAttribute$O($I$(1).HEIGHT);
}});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
var doc=this.getDocument$();
return doc.getStyleSheet$();
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
r=C$.superclazz.prototype.calculateMinorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
if ($I$(2).spanSetFromAttributes$I$javax_swing_SizeRequirements$javax_swing_text_html_CSS_LengthValue$javax_swing_text_html_CSS_LengthValue(axis, r, this.cssWidth, this.cssHeight)) {
var margin=(axis == 0) ? this.getLeftInset$() + this.getRightInset$() : this.getTopInset$() + this.getBottomInset$();
r.minimum-=margin;
r.preferred-=margin;
r.maximum-=margin;
}return r;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
var n=this.getLayoutViewCount$() - 1;
for (var i=0; i < n; i++) {
var v=this.getLayoutView$I(i);
if (v.isVisible$()) {
return true;
}}
if (n > 0) {
var v=this.getLayoutView$I(n);
if ((v.getEndOffset$() - v.getStartOffset$()) == 1) {
return false;
}}if (this.getStartOffset$() == this.getDocument$().getLength$()) {
var editable=false;
var c=this.getContainer$();
if (Clazz.instanceOf(c, "javax.swing.text.JTextComponent")) {
editable=(c).isEditable$();
}if (!editable) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
if (a == null ) {
return;
}var r;
if (Clazz.instanceOf(a, "java.awt.Rectangle")) {
r=a;
} else {
r=a.getBounds$();
}this.painter.paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View(g, r.x, r.y, r.width, r.height, this);
C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, a]);
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
if (!this.isVisible$()) {
return 0;
}return C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
if (!this.isVisible$()) {
return 0;
}return C$.superclazz.prototype.getMinimumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
if (!this.isVisible$()) {
return 0;
}return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

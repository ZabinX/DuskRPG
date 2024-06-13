(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'javax.swing.SizeRequirements',['javax.swing.text.html.CSS','.Attribute']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BlockView", null, 'javax.swing.text.BoxView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attr','javax.swing.text.AttributeSet','painter','javax.swing.text.html.StyleSheet.BoxPainter','cssWidth','javax.swing.text.html.CSS.LengthValue','+cssHeight']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$I',  function (elem, axis) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, axis]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
if (parent != null ) {
this.setPropertiesFromAttributes$();
}});

Clazz.newMeth(C$, 'calculateMajorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
if (r == null ) {
r=Clazz.new_($I$(1,1));
}if (!C$.spanSetFromAttributes$I$javax_swing_SizeRequirements$javax_swing_text_html_CSS_LengthValue$javax_swing_text_html_CSS_LengthValue(axis, r, this.cssWidth, this.cssHeight)) {
r=C$.superclazz.prototype.calculateMajorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
} else {
var parentR=C$.superclazz.prototype.calculateMajorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, null]);
var margin=(axis == 0) ? this.getLeftInset$() + this.getRightInset$() : this.getTopInset$() + this.getBottomInset$();
r.minimum-=margin;
r.preferred-=margin;
r.maximum-=margin;
p$1.constrainSize$I$javax_swing_SizeRequirements$javax_swing_SizeRequirements.apply(this, [axis, r, parentR]);
}return r;
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
if (r == null ) {
r=Clazz.new_($I$(1,1));
}if (!C$.spanSetFromAttributes$I$javax_swing_SizeRequirements$javax_swing_text_html_CSS_LengthValue$javax_swing_text_html_CSS_LengthValue(axis, r, this.cssWidth, this.cssHeight)) {
r=C$.superclazz.prototype.calculateMinorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
} else {
var parentR=C$.superclazz.prototype.calculateMinorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, null]);
var margin=(axis == 0) ? this.getLeftInset$() + this.getRightInset$() : this.getTopInset$() + this.getBottomInset$();
r.minimum-=margin;
r.preferred-=margin;
r.maximum-=margin;
p$1.constrainSize$I$javax_swing_SizeRequirements$javax_swing_SizeRequirements.apply(this, [axis, r, parentR]);
}if (axis == 0) {
var o=this.getAttributes$().getAttribute$O($I$(2).TEXT_ALIGN);
if (o != null ) {
var align=o.toString();
if (align.equals$O("center")) {
r.alignment=0.5;
} else if (align.equals$O("right")) {
r.alignment=1.0;
} else {
r.alignment=0.0;
}}}return r;
});

Clazz.newMeth(C$, 'isPercentage$I$javax_swing_text_AttributeSet',  function (axis, a) {
if (axis == 0) {
if (this.cssWidth != null ) {
return this.cssWidth.isPercentage$();
}} else {
if (this.cssHeight != null ) {
return this.cssHeight.isPercentage$();
}}return false;
});

Clazz.newMeth(C$, 'spanSetFromAttributes$I$javax_swing_SizeRequirements$javax_swing_text_html_CSS_LengthValue$javax_swing_text_html_CSS_LengthValue',  function (axis, r, cssWidth, cssHeight) {
if (axis == 0) {
if ((cssWidth != null ) && (!cssWidth.isPercentage$()) ) {
r.minimum=r.preferred=r.maximum=(cssWidth.getValue$()|0);
return true;
}} else {
if ((cssHeight != null ) && (!cssHeight.isPercentage$()) ) {
r.minimum=r.preferred=r.maximum=(cssHeight.getValue$()|0);
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'layoutMinorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var n=this.getViewCount$();
var key=(axis == 0) ? $I$(2).WIDTH : $I$(2).HEIGHT;
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
var min=(v.getMinimumSpan$I(axis)|0);
var max;
var a=v.getAttributes$();
var lv=a.getAttribute$O(key);
if ((lv != null ) && lv.isPercentage$() ) {
min=Math.max((lv.getValue$F(targetSpan)|0), min);
max=min;
} else {
max=(v.getMaximumSpan$I(axis)|0);
}if (max < targetSpan) {
var align=v.getAlignment$I(axis);
offsets[i]=(((targetSpan - max) * align)|0);
spans[i]=max;
} else {
offsets[i]=0;
spans[i]=Math.max(min, targetSpan);
}}
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
var a=allocation;
this.painter.paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View(g, a.x, a.y, a.width, a.height, this);
C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, a]);
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
if (this.attr == null ) {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
}return this.attr;
});

Clazz.newMeth(C$, 'getResizeWeight$I',  function (axis) {
switch (axis) {
case 0:
return 1;
case 1:
return 0;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
switch (axis) {
case 0:
return 0;
case 1:
if (this.getViewCount$() == 0) {
return 0;
}var span=this.getPreferredSpan$I(1);
var v=this.getView$I(0);
var above=v.getPreferredSpan$I(1);
var a=(((span|0)) != 0) ? (above * v.getAlignment$I(1)) / span : 0;
return a;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [changes, a, f]);
var pos=changes.getOffset$();
if (pos <= this.getStartOffset$() && (pos + changes.getLength$()) >= this.getEndOffset$() ) {
this.setPropertiesFromAttributes$();
}});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
return C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
return C$.superclazz.prototype.getMinimumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
this.painter=sheet.getBoxPainter$javax_swing_text_AttributeSet(this.attr);
if (this.attr != null ) {
this.setInsets$H$H$H$H(($s$[0] = this.painter.getInset$I$javax_swing_text_View(1, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(2, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(3, this), $s$[0]), ($s$[0] = this.painter.getInset$I$javax_swing_text_View(4, this), $s$[0]));
}this.cssWidth=this.attr.getAttribute$O($I$(2).WIDTH);
this.cssHeight=this.attr.getAttribute$O($I$(2).HEIGHT);
});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
var doc=this.getDocument$();
return doc.getStyleSheet$();
});

Clazz.newMeth(C$, 'constrainSize$I$javax_swing_SizeRequirements$javax_swing_SizeRequirements',  function (axis, want, min) {
if (min.minimum > want.minimum) {
want.minimum=want.preferred=min.minimum;
want.maximum=Math.max(want.maximum, min.maximum);
}}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

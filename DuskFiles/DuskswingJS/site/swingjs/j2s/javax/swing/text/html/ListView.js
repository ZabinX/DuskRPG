(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ListView", null, 'javax.swing.text.html.BlockView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['listPainter','javax.swing.text.html.StyleSheet.ListPainter']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
switch (axis) {
case 0:
return 0.5;
case 1:
return 0.5;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, allocation]);
var alloc=allocation.getBounds$();
var clip=g.getClipBounds$();
if ((clip.x + clip.width) < (alloc.x + this.getLeftInset$())) {
var childRect=alloc;
alloc=this.getInsideAllocation$java_awt_Shape(allocation);
var n=this.getViewCount$();
var endY=clip.y + clip.height;
for (var i=0; i < n; i++) {
childRect.setBounds$java_awt_Rectangle(alloc);
this.childAllocation$I$java_awt_Rectangle(i, childRect);
if (childRect.y < endY) {
if ((childRect.y + childRect.height) >= clip.y) {
this.listPainter.paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View$I(g, childRect.x, childRect.y, childRect.width, childRect.height, this, i);
}} else {
break;
}}
}});

Clazz.newMeth(C$, 'paintChild$java_awt_Graphics$java_awt_Rectangle$I',  function (g, alloc, index) {
this.listPainter.paint$java_awt_Graphics$F$F$F$F$javax_swing_text_View$I(g, alloc.x, alloc.y, alloc.width, alloc.height, this, index);
C$.superclazz.prototype.paintChild$java_awt_Graphics$java_awt_Rectangle$I.apply(this, [g, alloc, index]);
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
C$.superclazz.prototype.setPropertiesFromAttributes$.apply(this, []);
this.listPainter=this.getStyleSheet$().getListPainter$javax_swing_text_AttributeSet(this.getAttributes$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

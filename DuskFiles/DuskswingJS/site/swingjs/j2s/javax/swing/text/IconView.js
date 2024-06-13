(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'javax.swing.text.StyleConstants',['javax.swing.text.Position','.Bias']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IconView", null, 'javax.swing.text.View');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['c','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
var attr=elem.getAttributes$();
this.c=$I$(1).getIcon$javax_swing_text_AttributeSet(attr);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
var alloc=a.getBounds$();
this.c.paintIcon$java_awt_Component$java_awt_Graphics$I$I(this.getContainer$(), g, alloc.x, alloc.y);
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
switch (axis) {
case 0:
return this.c.getIconWidth$();
case 1:
return this.c.getIconHeight$();
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
switch (axis) {
case 1:
return 1;
default:
return C$.superclazz.prototype.getAlignment$I.apply(this, [axis]);
}
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var p0=this.getStartOffset$();
var p1=this.getEndOffset$();
if ((pos >= p0) && (pos <= p1) ) {
var r=a.getBounds$();
if (pos == p1) {
r.x+=r.width;
}r.width=0;
return r;
}throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,[pos + " not in range " + p0 + "," + p1 , pos]);
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, bias) {
var alloc=a;
if (x < alloc.x + ((alloc.width/2|0)) ) {
bias[0]=$I$(2).Forward;
return this.getStartOffset$();
}bias[0]=$I$(2).Backward;
return this.getEndOffset$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

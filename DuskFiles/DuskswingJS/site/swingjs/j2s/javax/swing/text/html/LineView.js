(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,'javax.swing.text.StyleConstants','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LineView", null, 'javax.swing.text.html.ParagraphView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['$tabBase']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isVisible$',  function () {
return true;
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
return this.getPreferredSpan$I(axis);
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
if (axis == 0) {
return 0;
}return C$.superclazz.prototype.getAlignment$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'layout$I$I',  function (width, height) {
C$.superclazz.prototype.layout$I$I.apply(this, [2147483646, height]);
});

Clazz.newMeth(C$, 'nextTabStop$F$I',  function (x, tabOffset) {
if (this.getTabSet$() == null  && $I$(1,"getAlignment$javax_swing_text_AttributeSet",[this.getAttributes$()]) == 0 ) {
return this.getPreTab$F$I(x, tabOffset);
}return C$.superclazz.prototype.nextTabStop$F$I.apply(this, [x, tabOffset]);
});

Clazz.newMeth(C$, 'getPreTab$F$I',  function (x, tabOffset) {
var d=this.getDocument$();
var v=this.getViewAtPosition$I$java_awt_Rectangle(tabOffset, null);
if ((Clazz.instanceOf(d, "javax.swing.text.StyledDocument")) && v != null  ) {
var f=(d).getFont$javax_swing_text_AttributeSet(v.getAttributes$());
var c=this.getContainer$();
var fm=(c != null ) ? c.getFontMetrics$java_awt_Font(f) : $I$(2).getDefaultToolkit$().getFontMetrics$java_awt_Font(f);
var width=this.getCharactersPerTab$() * fm.charWidth$C("W");
var tb=(this.getTabBase$()|0);
return (((((x|0) - tb)/width|0) + 1) * width + tb);
}return 10.0 + x;
});

Clazz.newMeth(C$, 'getCharactersPerTab$',  function () {
return 8;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

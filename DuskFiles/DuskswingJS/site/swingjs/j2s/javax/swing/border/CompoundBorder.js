(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,'java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CompoundBorder", null, 'javax.swing.border.AbstractBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['outsideBorder','javax.swing.border.Border','+insideBorder']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.outsideBorder=null;
this.insideBorder=null;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$javax_swing_border_Border',  function (outsideBorder, insideBorder) {
Clazz.super_(C$, this);
this.outsideBorder=outsideBorder;
this.insideBorder=insideBorder;
}, 1);

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return (this.outsideBorder == null  || this.outsideBorder.isBorderOpaque$() ) && (this.insideBorder == null  || this.insideBorder.isBorderOpaque$() ) ;
});

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
var nextInsets;
var px;
var py;
var pw;
var ph;
px=x;
py=y;
pw=width;
ph=height;
if (this.outsideBorder != null ) {
this.outsideBorder.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g, px, py, pw, ph);
nextInsets=this.outsideBorder.getBorderInsets$java_awt_Component(c);
px+=nextInsets.left;
py+=nextInsets.top;
pw=pw - nextInsets.right - nextInsets.left ;
ph=ph - nextInsets.bottom - nextInsets.top ;
}if (this.insideBorder != null ) this.insideBorder.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g, px, py, pw, ph);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
var nextInsets;
insets.top=insets.left=insets.right=insets.bottom=0;
if (this.outsideBorder != null ) {
nextInsets=this.outsideBorder.getBorderInsets$java_awt_Component(c);
insets.top+=nextInsets.top;
insets.left+=nextInsets.left;
insets.right+=nextInsets.right;
insets.bottom+=nextInsets.bottom;
}if (this.insideBorder != null ) {
nextInsets=this.insideBorder.getBorderInsets$java_awt_Component(c);
insets.top+=nextInsets.top;
insets.left+=nextInsets.left;
insets.right+=nextInsets.right;
insets.bottom+=nextInsets.bottom;
}return insets;
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$java_awt_Component$java_awt_Insets(c, Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]));
});

Clazz.newMeth(C$, 'getOutsideBorder$',  function () {
return this.outsideBorder;
});

Clazz.newMeth(C$, 'getInsideBorder$',  function () {
return this.insideBorder;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

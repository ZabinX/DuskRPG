(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,'java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EtchedBorder", null, 'javax.swing.border.AbstractBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['etchType'],'O',['highlight','java.awt.Color','+shadow']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [1]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (etchType) {
C$.c$$I$java_awt_Color$java_awt_Color.apply(this, [etchType, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color',  function (highlight, shadow) {
C$.c$$I$java_awt_Color$java_awt_Color.apply(this, [1, highlight, shadow]);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color$java_awt_Color',  function (etchType, highlight, shadow) {
Clazz.super_(C$, this);
this.etchType=etchType;
this.highlight=highlight;
this.shadow=shadow;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
var w=width;
var h=height;
g.translate$I$I(x, y);
g.setColor$java_awt_Color(this.etchType == 1 ? this.getShadowColor$java_awt_Component(c) : this.getHighlightColor$java_awt_Component(c));
g.drawRect$I$I$I$I(0, 0, w - 2, h - 2);
g.setColor$java_awt_Color(this.etchType == 1 ? this.getHighlightColor$java_awt_Component(c) : this.getShadowColor$java_awt_Component(c));
g.drawLine$I$I$I$I(1, h - 3, 1, 1);
g.drawLine$I$I$I$I(1, 1, w - 3, 1);
g.drawLine$I$I$I$I(0, h - 1, w - 1, h - 1);
g.drawLine$I$I$I$I(w - 1, h - 1, w - 1, 0);
g.translate$I$I(-x, -y);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return Clazz.new_($I$(1,1).c$$I$I$I$I,[2, 2, 2, 2]);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
insets.left=insets.top=insets.right=insets.bottom=2;
return insets;
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return true;
});

Clazz.newMeth(C$, 'getEtchType$',  function () {
return this.etchType;
});

Clazz.newMeth(C$, 'getHighlightColor$java_awt_Component',  function (c) {
return this.highlight != null  ? this.highlight : c.getBackground$().brighter$();
});

Clazz.newMeth(C$, 'getHighlightColor$',  function () {
return this.highlight;
});

Clazz.newMeth(C$, 'getShadowColor$java_awt_Component',  function (c) {
return this.shadow != null  ? this.shadow : c.getBackground$().darker$();
});

Clazz.newMeth(C$, 'getShadowColor$',  function () {
return this.shadow;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

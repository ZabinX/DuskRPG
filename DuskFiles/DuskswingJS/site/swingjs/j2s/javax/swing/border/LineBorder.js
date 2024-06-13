(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,['java.awt.geom.Path2D','.Float'],'java.awt.Color',['java.awt.geom.RoundRectangle2D','.Float'],['java.awt.geom.Rectangle2D','.Float'],'java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LineBorder", null, 'javax.swing.border.AbstractBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.秘path=Clazz.new_($I$(1,1).c$$I,[0]);
},1);

C$.$fields$=[['Z',['roundedCorners'],'I',['thickness'],'O',['lineColor','java.awt.Color','秘outerR','java.awt.geom.RoundRectangle2D.Float','+秘innerR','秘outer','java.awt.geom.Rectangle2D.Float','+秘inner','秘path','java.awt.geom.Path2D.Float']]
,['O',['blackLine','javax.swing.border.Border','+grayLine']]]

Clazz.newMeth(C$, 'createBlackLineBorder$',  function () {
if (C$.blackLine == null ) {
C$.blackLine=Clazz.new_(C$.c$$java_awt_Color$I,[$I$(2).black, 1]);
}return C$.blackLine;
}, 1);

Clazz.newMeth(C$, 'createGrayLineBorder$',  function () {
if (C$.grayLine == null ) {
C$.grayLine=Clazz.new_(C$.c$$java_awt_Color$I,[$I$(2).gray, 1]);
}return C$.grayLine;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (color) {
C$.c$$java_awt_Color$I$Z.apply(this, [color, 1, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$I',  function (color, thickness) {
C$.c$$java_awt_Color$I$Z.apply(this, [color, thickness, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$I$Z',  function (color, thickness, roundedCorners) {
Clazz.super_(C$, this);
this.lineColor=color;
this.thickness=thickness;
this.roundedCorners=roundedCorners;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
if ((this.thickness > 0)) {
var g2d=g;
var oldColor=g2d.getColor$();
g2d.setColor$java_awt_Color(this.lineColor);
var offs=this.thickness;
var size=offs + offs;
this.秘path.clear$();
if (this.roundedCorners) {
var arc=offs + size;
if (this.秘outerR == null ) {
this.秘outerR=Clazz.new_($I$(3,1).c$$F$F$F$F$F$F,[x, y, width, height, arc, arc]);
this.秘innerR=Clazz.new_($I$(3,1).c$$F$F$F$F$F$F,[x + offs, y + offs, width - size, height - size, arc, arc]);
} else {
this.秘outerR.setRoundRect$F$F$F$F$F$F(x, y, width, height, arc, arc);
this.秘innerR.setRoundRect$F$F$F$F$F$F(x + offs, y + offs, width - size, height - size, arc, arc);
}this.秘path.append$java_awt_Shape$Z(this.秘outer, false);
this.秘path.append$java_awt_Shape$Z(this.秘inner, false);
} else {
if (this.秘outer == null ) {
this.秘outer=Clazz.new_($I$(4,1).c$$F$F$F$F,[x - 0.5, y - 0.5, width + 1, height + 1]);
this.秘inner=Clazz.new_($I$(4,1).c$$F$F$F$F,[x + offs - 0.5, y + offs - 0.5, width - size + 1, height - size + 1]);
} else {
this.秘outer.setRect$F$F$F$F(x - 0.5, y - 0.5, width + 1, height + 1);
this.秘inner.setRect$F$F$F$F(x + offs - 0.5, y + offs - 0.5, width - size + 1, height - size + 1);
}this.秘path.append$java_awt_Shape$Z(this.秘outer, false);
this.秘path.append$java_awt_Shape$Z(this.秘inner, false);
}g2d.fill$java_awt_Shape(this.秘path);
g2d.setColor$java_awt_Color(oldColor);
}});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return Clazz.new_($I$(5,1).c$$I$I$I$I,[this.thickness, this.thickness, this.thickness, this.thickness]);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
insets.left=insets.top=insets.right=insets.bottom=this.thickness;
return insets;
});

Clazz.newMeth(C$, 'getLineColor$',  function () {
return this.lineColor;
});

Clazz.newMeth(C$, 'getThickness$',  function () {
return this.thickness;
});

Clazz.newMeth(C$, 'getRoundedCorners$',  function () {
return this.roundedCorners;
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return !this.roundedCorners;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

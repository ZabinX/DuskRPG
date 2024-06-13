(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,['java.awt.geom.Point2D','.Float'],'java.awt.GradientPaintContext']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GradientPaint", null, null, 'java.awt.Paint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['cyclic'],'O',['p1','java.awt.geom.Point2D.Float','+p2','color1','java.awt.Color','+color2']]]

Clazz.newMeth(C$, 'c$$F$F$java_awt_Color$F$F$java_awt_Color',  function (x1, y1, color1, x2, y2, color2) {
;C$.$init$.apply(this);
if ((color1 == null ) || (color2 == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Colors cannot be null"]);
}this.p1=Clazz.new_($I$(1,1).c$$F$F,[x1, y1]);
this.p2=Clazz.new_($I$(1,1).c$$F$F,[x2, y2]);
this.color1=color1;
this.color2=color2;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D$java_awt_Color$java_awt_geom_Point2D$java_awt_Color',  function (pt1, color1, pt2, color2) {
;C$.$init$.apply(this);
if ((color1 == null ) || (color2 == null ) || (pt1 == null ) || (pt2 == null )  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Colors and points should be non-null"]);
}this.p1=Clazz.new_([pt1.getX$(), pt1.getY$()],$I$(1,1).c$$F$F);
this.p2=Clazz.new_([pt2.getX$(), pt2.getY$()],$I$(1,1).c$$F$F);
this.color1=color1;
this.color2=color2;
}, 1);

Clazz.newMeth(C$, 'c$$F$F$java_awt_Color$F$F$java_awt_Color$Z',  function (x1, y1, color1, x2, y2, color2, cyclic) {
C$.c$$F$F$java_awt_Color$F$F$java_awt_Color.apply(this, [x1, y1, color1, x2, y2, color2]);
this.cyclic=cyclic;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D$java_awt_Color$java_awt_geom_Point2D$java_awt_Color$Z',  function (pt1, color1, pt2, color2, cyclic) {
C$.c$$java_awt_geom_Point2D$java_awt_Color$java_awt_geom_Point2D$java_awt_Color.apply(this, [pt1, color1, pt2, color2]);
this.cyclic=cyclic;
}, 1);

Clazz.newMeth(C$, 'getPoint1$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.p1.x, this.p1.y]);
});

Clazz.newMeth(C$, 'getColor1$',  function () {
return this.color1;
});

Clazz.newMeth(C$, 'getPoint2$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.p2.x, this.p2.y]);
});

Clazz.newMeth(C$, 'getColor2$',  function () {
return this.color2;
});

Clazz.newMeth(C$, 'isCyclic$',  function () {
return this.cyclic;
});

Clazz.newMeth(C$, 'createContext$java_awt_image_ColorModel$java_awt_Rectangle$java_awt_geom_Rectangle2D$java_awt_geom_AffineTransform$java_awt_RenderingHints',  function (cm, deviceBounds, userBounds, xform, hints) {
return Clazz.new_($I$(2,1).c$$java_awt_image_ColorModel$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_AffineTransform$java_awt_Color$java_awt_Color$Z,[cm, this.p1, this.p2, xform, this.color1, this.color2, this.cyclic]);
});

Clazz.newMeth(C$, 'getTransparency$',  function () {
var a1=this.color1.getAlpha$();
var a2=this.color2.getAlpha$();
return (((a1 & a2) == 255) ? 1 : 3);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

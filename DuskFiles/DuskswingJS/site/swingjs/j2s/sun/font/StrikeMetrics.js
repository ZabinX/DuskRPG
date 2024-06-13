(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,['java.awt.geom.Point2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StrikeMetrics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['ascentX','ascentY','descentX','descentY','baselineX','baselineY','leadingX','leadingY','maxAdvanceX','maxAdvanceY']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.ascentX=this.ascentY=2147483647;
this.descentX=this.descentY=this.leadingX=this.leadingY=-2147483648;
this.baselineX=this.baselineX=this.maxAdvanceX=this.maxAdvanceY=-2147483648;
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F$F$F$F$F$F$F',  function (ax, ay, dx, dy, bx, by, lx, ly, mx, my) {
;C$.$init$.apply(this);
this.ascentX=ax;
this.ascentY=ay;
this.descentX=dx;
this.descentY=dy;
this.baselineX=bx;
this.baselineY=by;
this.leadingX=lx;
this.leadingY=ly;
this.maxAdvanceX=mx;
this.maxAdvanceY=my;
}, 1);

Clazz.newMeth(C$, 'getAscent$',  function () {
return -this.ascentY;
});

Clazz.newMeth(C$, 'getDescent$',  function () {
return this.descentY;
});

Clazz.newMeth(C$, 'getLeading$',  function () {
return this.leadingY;
});

Clazz.newMeth(C$, 'getMaxAdvance$',  function () {
return this.maxAdvanceX;
});

Clazz.newMeth(C$, 'merge$sun_font_StrikeMetrics',  function (other) {
if (other == null ) {
return;
}if (other.ascentX < this.ascentX ) {
this.ascentX=other.ascentX;
}if (other.ascentY < this.ascentY ) {
this.ascentY=other.ascentY;
}if (other.descentX > this.descentX ) {
this.descentX=other.descentX;
}if (other.descentY > this.descentY ) {
this.descentY=other.descentY;
}if (other.baselineX > this.baselineX ) {
this.baselineX=other.baselineX;
}if (other.baselineY > this.baselineY ) {
this.baselineY=other.baselineY;
}if (other.leadingX > this.leadingX ) {
this.leadingX=other.leadingX;
}if (other.leadingY > this.leadingY ) {
this.leadingY=other.leadingY;
}if (other.maxAdvanceX > this.maxAdvanceX ) {
this.maxAdvanceX=other.maxAdvanceX;
}if (other.maxAdvanceY > this.maxAdvanceY ) {
this.maxAdvanceY=other.maxAdvanceY;
}});

Clazz.newMeth(C$, 'convertToUserSpace$java_awt_geom_AffineTransform',  function (invTx) {
var pt2D=Clazz.new_($I$(1,1));
pt2D.x=this.ascentX;
pt2D.y=this.ascentY;
invTx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt2D, pt2D);
this.ascentX=pt2D.x;
this.ascentY=pt2D.y;
pt2D.x=this.descentX;
pt2D.y=this.descentY;
invTx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt2D, pt2D);
this.descentX=pt2D.x;
this.descentY=pt2D.y;
pt2D.x=this.baselineX;
pt2D.y=this.baselineY;
invTx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt2D, pt2D);
this.baselineX=pt2D.x;
this.baselineY=pt2D.y;
pt2D.x=this.leadingX;
pt2D.y=this.leadingY;
invTx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt2D, pt2D);
this.leadingX=pt2D.x;
this.leadingY=pt2D.y;
pt2D.x=this.maxAdvanceX;
pt2D.y=this.maxAdvanceY;
invTx.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt2D, pt2D);
this.maxAdvanceX=pt2D.x;
this.maxAdvanceY=pt2D.y;
});

Clazz.newMeth(C$, 'toString',  function () {
return "ascent:x=" + new Float(this.ascentX).toString() + " y=" + new Float(this.ascentY).toString() + " descent:x=" + new Float(this.descentX).toString() + " y=" + new Float(this.descentY).toString() + " baseline:x=" + new Float(this.baselineX).toString() + " y=" + new Float(this.baselineY).toString() + " leading:x=" + new Float(this.leadingX).toString() + " y=" + new Float(this.leadingY).toString() + " maxAdvance:x=" + new Float(this.maxAdvanceX).toString() + " y=" + new Float(this.maxAdvanceY).toString() ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

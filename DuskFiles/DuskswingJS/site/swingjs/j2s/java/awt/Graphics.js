(function(){var P$=Clazz.newPackage("java.awt");
/*c*/var C$=Clazz.newClass(P$, "Graphics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'create$I$I$I$I',  function (x, y, width, height) {
var g=this.create$();
if (g == null ) return null;
g.translate$I$I(x, y);
g.clipRect$I$I$I$I(0, 0, width, height);
return g;
});

Clazz.newMeth(C$, 'getFontMetrics$',  function () {
return this.getFontMetrics$java_awt_Font(this.getFont$());
});

Clazz.newMeth(C$, 'drawRect$I$I$I$I',  function (x, y, width, height) {
if ((width < 0) || (height < 0) ) {
return;
}if (height == 0 || width == 0 ) {
this.drawLine$I$I$I$I(x, y, x + width, y + height);
} else {
this.drawLine$I$I$I$I(x, y, x + width - 1, y);
this.drawLine$I$I$I$I(x + width, y, x + width, y + height - 1);
this.drawLine$I$I$I$I(x + width, y + height, x + 1, y + height);
this.drawLine$I$I$I$I(x, y + height, x, y + 1);
}});

Clazz.newMeth(C$, 'draw3DRect$I$I$I$I$Z',  function (x, y, width, height, raised) {
var c=this.getColor$();
var brighter=c.brighter$();
var darker=c.darker$();
this.setColor$java_awt_Color(raised ? brighter : darker);
this.drawLine$I$I$I$I(x, y, x, y + height);
this.drawLine$I$I$I$I(x + 1, y, x + width - 1, y);
this.setColor$java_awt_Color(raised ? darker : brighter);
this.drawLine$I$I$I$I(x + 1, y + height, x + width, y + height);
this.drawLine$I$I$I$I(x + width, y, x + width, y + height - 1);
this.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'fill3DRect$I$I$I$I$Z',  function (x, y, width, height, raised) {
var c=this.getColor$();
var brighter=c.brighter$();
var darker=c.darker$();
if (!raised) {
this.setColor$java_awt_Color(darker);
}this.fillRect$I$I$I$I(x + 1, y + 1, width - 2, height - 2);
this.setColor$java_awt_Color(raised ? brighter : darker);
this.drawLine$I$I$I$I(x, y, x, y + height - 1);
this.drawLine$I$I$I$I(x + 1, y, x + width - 2, y);
this.setColor$java_awt_Color(raised ? darker : brighter);
this.drawLine$I$I$I$I(x + 1, y + height - 1, x + width - 1, y + height - 1);
this.drawLine$I$I$I$I(x + width - 1, y, x + width - 1, y + height - 2);
this.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$, 'drawPolygon$java_awt_Polygon',  function (p) {
this.drawPolygon$IA$IA$I(p.xpoints, p.ypoints, p.npoints);
});

Clazz.newMeth(C$, 'fillPolygon$java_awt_Polygon',  function (p) {
this.fillPolygon$IA$IA$I(p.xpoints, p.ypoints, p.npoints);
});

Clazz.newMeth(C$, 'drawChars$CA$I$I$I$I',  function (data, offset, length, x, y) {
this.drawString$S$I$I( String.instantialize(data, offset, length), x, y);
});

Clazz.newMeth(C$, 'drawBytes$BA$I$I$I$I',  function (data, offset, length, x, y) {
this.drawString$S$I$I( String.instantialize(data, 0, offset, length), x, y);
});

Clazz.newMeth(C$, 'finalize$',  function () {
this.dispose$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[font=" + this.getFont$() + ",color=" + this.getColor$() + "]" ;
});

Clazz.newMeth(C$, 'getClipRect$',  function () {
return this.getClipBounds$();
});

Clazz.newMeth(C$, 'hitClip$I$I$I$I',  function (x, y, width, height) {
var clipRect=this.getClipBounds$();
if (clipRect == null ) {
return true;
}return clipRect.intersects$D$D$D$D(x, y, width, height);
});

Clazz.newMeth(C$, 'getClipBounds$java_awt_Rectangle',  function (r) {
var clipRect=this.getClipBounds$();
if (clipRect != null ) {
r.x=clipRect.x;
r.y=clipRect.y;
r.width=clipRect.width;
r.height=clipRect.height;
} else if (r == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null rectangle parameter"]);
}return r;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

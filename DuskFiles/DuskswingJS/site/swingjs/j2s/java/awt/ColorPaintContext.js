(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.image.ColorModel','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorPaintContext", null, null, 'java.awt.PaintContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['color'],'O',['savedTile','java.awt.image.WritableRaster']]]

Clazz.newMeth(C$, 'c$$I$java_awt_image_ColorModel',  function (color, cm) {
;C$.$init$.apply(this);
this.color=color;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
});

Clazz.newMeth(C$, 'getRGB$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return $I$(1).getRGBdefault$();
});

Clazz.newMeth(C$, 'getRaster$I$I$I$I',  function (x, y, w, h) {
var t=this.savedTile;
if (t == null  || w > t.getWidth$()  || h > t.getHeight$() ) {
t=this.getColorModel$().createCompatibleWritableRaster$I$I(w, h);
var icr=t;
$I$(2,"fill$IA$I",[icr.getDataStorage$(), this.color]);
icr.markDirty$();
if (w <= 64 && h <= 64 ) {
this.savedTile=t;
}}return t;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

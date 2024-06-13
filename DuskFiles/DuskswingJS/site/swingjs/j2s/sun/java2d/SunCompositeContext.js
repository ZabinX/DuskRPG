(function(){var P$=Clazz.newPackage("sun.java2d"),I$=[[0,'sun.java2d.loops.CompositeType','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SunCompositeContext", null, null, 'java.awt.CompositeContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['srcCM','java.awt.image.ColorModel','+dstCM','composite','java.awt.Composite','comptype','sun.java2d.loops.CompositeType']]]

Clazz.newMeth(C$, 'c$$java_awt_AlphaComposite$java_awt_image_ColorModel$java_awt_image_ColorModel',  function (ac, s, d) {
;C$.$init$.apply(this);
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Source color model cannot be null"]);
}if (d == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Destination color model cannot be null"]);
}this.srcCM=s;
this.dstCM=d;
this.composite=ac;
this.comptype=$I$(1).forAlphaComposite$java_awt_AlphaComposite(ac);
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_loops_XORComposite$java_awt_image_ColorModel$java_awt_image_ColorModel',  function (xc, s, d) {
;C$.$init$.apply(this);
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Source color model cannot be null"]);
}if (d == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Destination color model cannot be null"]);
}this.srcCM=s;
this.dstCM=d;
this.composite=xc;
this.comptype=$I$(1).Xor;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
});

Clazz.newMeth(C$, 'compose$java_awt_image_Raster$java_awt_image_Raster$java_awt_image_WritableRaster',  function (srcArg, dstIn, dstOut) {
var src;
var w;
var h;
if (dstIn !== dstOut ) {
dstOut.setDataElements$I$I$java_awt_image_Raster(0, 0, dstIn);
}if (Clazz.instanceOf(srcArg, "java.awt.image.WritableRaster")) {
src=srcArg;
} else {
src=srcArg.createCompatibleWritableRaster$();
src.setDataElements$I$I$java_awt_image_Raster(0, 0, srcArg);
}w=Math.min(src.getWidth$(), dstIn.getWidth$());
h=Math.min(src.getHeight$(), dstIn.getHeight$());
var srcImg=Clazz.new_([this.srcCM, src, this.srcCM.isAlphaPremultiplied$(), null],$I$(2,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
var dstImg=Clazz.new_([this.dstCM, dstOut, this.dstCM.isAlphaPremultiplied$(), null],$I$(2,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

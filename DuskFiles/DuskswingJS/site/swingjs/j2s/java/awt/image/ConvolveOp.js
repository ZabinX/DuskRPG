(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'sun.awt.image.ImagingLib','java.awt.image.BufferedImage',['java.awt.geom.Point2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConvolveOp", null, null, ['java.awt.image.BufferedImageOp', 'java.awt.image.RasterOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.swingJStype="C".$c();
},1);

C$.$fields$=[['I',['edgeHint','swingJStype'],'O',['kernel','java.awt.image.Kernel','hints','java.awt.RenderingHints']]]

Clazz.newMeth(C$, 'c$$java_awt_image_Kernel$I$java_awt_RenderingHints',  function (kernel, edgeCondition, hints) {
;C$.$init$.apply(this);
this.kernel=kernel;
this.edgeHint=edgeCondition;
this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_Kernel',  function (kernel) {
;C$.$init$.apply(this);
this.kernel=kernel;
this.edgeHint=0;
}, 1);

Clazz.newMeth(C$, 'getEdgeCondition$',  function () {
return this.edgeHint;
});

Clazz.newMeth(C$, 'getKernel$',  function () {
return this.kernel.clone$();
});

Clazz.newMeth(C$, 'filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage',  function (src, dst) {
if (src == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["src image is null"]);
}if (src === dst ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["src image cannot be the same as the dst image"]);
}var srcCM=src.getColorModel$();
var dstCM;
var origDst=dst;
if (dst == null ) {
dst=this.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel(src, null);
dstCM=srcCM;
origDst=dst;
} else {
dstCM=dst.getColorModel$();
if (srcCM.getColorSpace$().getType$() != dstCM.getColorSpace$().getType$()) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["SwingJS: Differing color spaces not allowed"]);
}}if ($I$(1).filter$java_awt_image_BufferedImageOp$java_awt_image_BufferedImage$java_awt_image_BufferedImage(this, src, dst) == null ) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["Unable to convolve src image"]);
}if (origDst !== dst ) {
var g=origDst.createGraphics$();
try {
(g).drawImageFromPixelsOrRaster$java_awt_Image$I$I$java_awt_image_ImageObserver(dst, 0, 0, null);
} finally {
g.dispose$();
}
}return origDst;
});

Clazz.newMeth(C$, 'filter$java_awt_image_Raster$java_awt_image_WritableRaster',  function (src, dst) {
if (dst == null ) {
dst=this.createCompatibleDestRaster$java_awt_image_Raster(src);
} else if (src === dst ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["src image cannot be the same as the dst image"]);
} else if (src.getNumBands$() != dst.getNumBands$()) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["Different number of bands in src  and dst Rasters"]);
}if ($I$(1).filter$java_awt_image_RasterOp$java_awt_image_Raster$java_awt_image_WritableRaster(this, src, dst) == null ) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["Unable to convolve src image"]);
}return dst;
});

Clazz.newMeth(C$, 'createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel',  function (src, destCM) {
var image;
var w=src.getWidth$();
var h=src.getHeight$();
var wr=null;
if (destCM == null ) {
destCM=src.getColorModel$();
{
wr=src.getData$().createCompatibleWritableRaster$I$I(w, h);
}}if (wr == null ) {
wr=destCM.createCompatibleWritableRaster$I$I(w, h);
}image=Clazz.new_([destCM, wr, destCM.isAlphaPremultiplied$(), null],$I$(2,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
return image;
});

Clazz.newMeth(C$, 'createCompatibleDestRaster$java_awt_image_Raster',  function (src) {
return src.createCompatibleWritableRaster$();
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_BufferedImage',  function (src) {
return this.getBounds2D$java_awt_image_Raster(src.getRaster$());
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_Raster',  function (src) {
return src.getBounds$();
});

Clazz.newMeth(C$, 'getPoint2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (srcPt, dstPt) {
if (dstPt == null ) {
dstPt=Clazz.new_($I$(3,1));
}dstPt.setLocation$D$D(srcPt.getX$(), srcPt.getY$());
return dstPt;
});

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return this.hints;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

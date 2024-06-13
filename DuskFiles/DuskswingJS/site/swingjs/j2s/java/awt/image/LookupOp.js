(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'sun.awt.image.ImagingLib','java.awt.image.ComponentColorModel','java.awt.image.BufferedImage',['java.awt.geom.Point2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LookupOp", null, null, ['java.awt.image.BufferedImageOp', 'java.awt.image.RasterOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.swingJStype="L".$c();
},1);

C$.$fields$=[['I',['swingJStype'],'O',['ltable','java.awt.image.LookupTable','hints','java.awt.RenderingHints']]]

Clazz.newMeth(C$, 'c$$java_awt_image_LookupTable$java_awt_RenderingHints',  function (lookup, hints) {
;C$.$init$.apply(this);
this.ltable=lookup;
this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'getTable$',  function () {
return this.ltable;
});

Clazz.newMeth(C$, 'filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage',  function (src, dst) {
var srcCM=src.getColorModel$();
var numBands=srcCM.getNumColorComponents$();
var dstCM;
var numComponents=this.ltable.getNumComponents$();
if (numComponents != 1 && numComponents != srcCM.getNumComponents$()  && numComponents != srcCM.getNumColorComponents$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of arrays in the  lookup table (" + numComponents + " is not compatible with the " + " src image: " + src ]);
}var width=src.getWidth$();
var height=src.getHeight$();
if (dst == null ) {
dst=this.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel(src, null);
dstCM=srcCM;
} else {
if (width != dst.getWidth$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Src width (" + width + ") not equal to dst width (" + dst.getWidth$() + ")" ]);
}if (height != dst.getHeight$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Src height (" + height + ") not equal to dst height (" + dst.getHeight$() + ")" ]);
}dstCM=dst.getColorModel$();
if (srcCM.getColorSpace$().getType$() != dstCM.getColorSpace$().getType$()) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["SwingJS: Only RGB color space is supported"]);
}}var origDst=dst;
var srcRaster=src.getRaster$();
var dstRaster=dst.getRaster$();
if (srcCM.hasAlpha$()) {
if (numBands - 1 == numComponents || numComponents == 1 ) {
var minx=srcRaster.getMinX$();
var miny=srcRaster.getMinY$();
var bands=Clazz.array(Integer.TYPE, [numBands - 1]);
for (var i=0; i < numBands - 1; i++) {
bands[i]=i;
}
srcRaster=srcRaster.createWritableChild$I$I$I$I$I$I$IA(minx, miny, srcRaster.getWidth$(), srcRaster.getHeight$(), minx, miny, bands);
}}if (dstCM.hasAlpha$()) {
var dstNumBands=dstRaster.getNumBands$();
if (dstNumBands - 1 == numComponents || numComponents == 1 ) {
var minx=dstRaster.getMinX$();
var miny=dstRaster.getMinY$();
var bands=Clazz.array(Integer.TYPE, [numBands - 1]);
for (var i=0; i < numBands - 1; i++) {
bands[i]=i;
}
dstRaster=dstRaster.createWritableChild$I$I$I$I$I$I$IA(minx, miny, dstRaster.getWidth$(), dstRaster.getHeight$(), minx, miny, bands);
}}this.filter$java_awt_image_Raster$java_awt_image_WritableRaster(srcRaster, dstRaster);
return origDst;
});

Clazz.newMeth(C$, 'filter$java_awt_image_Raster$java_awt_image_WritableRaster',  function (src, dst) {
var numBands=src.getNumBands$();
var dstLength=dst.getNumBands$();
var height=src.getHeight$();
var width=src.getWidth$();
var srcPix=Clazz.array(Integer.TYPE, [numBands]);
if (height != dst.getHeight$() || width != dst.getWidth$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width or height of Rasters do not match"]);
}dstLength=dst.getNumBands$();
if (numBands != dstLength) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of channels in the src (" + numBands + ") does not match number of channels" + " in the destination (" + dstLength + ")" ]);
}var numComponents=this.ltable.getNumComponents$();
if (numComponents != 1 && numComponents != src.getNumBands$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of arrays in the  lookup table (" + numComponents + " is not compatible with the " + " src Raster: " + src ]);
}if ($I$(1).filter$java_awt_image_RasterOp$java_awt_image_Raster$java_awt_image_WritableRaster(this, src, dst) != null ) {
return dst;
}if (Clazz.instanceOf(this.ltable, "java.awt.image.ByteLookupTable")) {
p$1.byteFilter$java_awt_image_ByteLookupTable$java_awt_image_Raster$java_awt_image_WritableRaster$I$I$I.apply(this, [this.ltable, src, dst, width, height, numBands]);
} else if (Clazz.instanceOf(this.ltable, "java.awt.image.ShortLookupTable")) {
p$1.shortFilter$java_awt_image_ShortLookupTable$java_awt_image_Raster$java_awt_image_WritableRaster$I$I$I.apply(this, [this.ltable, src, dst, width, height, numBands]);
} else {
var sminX=src.getMinX$();
var sY=src.getMinY$();
var dminX=dst.getMinX$();
var dY=dst.getMinY$();
for (var y=0; y < height; y++, sY++, dY++) {
var sX=sminX;
var dX=dminX;
for (var x=0; x < width; x++, sX++, dX++) {
src.getPixel$I$I$IA(sX, sY, srcPix);
this.ltable.lookupPixel$IA$IA(srcPix, srcPix);
dst.setPixel$I$I$IA(dX, dY, srcPix);
}
}
}return dst;
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_BufferedImage',  function (src) {
return this.getBounds2D$java_awt_image_Raster(src.getRaster$());
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_Raster',  function (src) {
return src.getBounds$();
});

Clazz.newMeth(C$, 'createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel',  function (src, destCM) {
var image;
var w=src.getWidth$();
var h=src.getHeight$();
var transferType=0;
if (destCM == null ) {
var cm=src.getColorModel$();
var raster=src.getRaster$();
if (Clazz.instanceOf(cm, "java.awt.image.ComponentColorModel")) {
var db=raster.getDataBuffer$();
var hasAlpha=cm.hasAlpha$();
var isPre=cm.isAlphaPremultiplied$();
var trans=cm.getTransparency$();
var nbits=null;
if (Clazz.instanceOf(this.ltable, "java.awt.image.ByteLookupTable")) {
if (db.getDataType$() == 1) {
if (hasAlpha) {
nbits=Clazz.array(Integer.TYPE, [2]);
if (trans == 2) {
nbits[1]=1;
} else {
nbits[1]=8;
}} else {
nbits=Clazz.array(Integer.TYPE, [1]);
}nbits[0]=8;
}} else if (Clazz.instanceOf(this.ltable, "java.awt.image.ShortLookupTable")) {
transferType=1;
if (db.getDataType$() == 0) {
if (hasAlpha) {
nbits=Clazz.array(Integer.TYPE, [2]);
if (trans == 2) {
nbits[1]=1;
} else {
nbits[1]=16;
}} else {
nbits=Clazz.array(Integer.TYPE, [1]);
}nbits[0]=16;
}}if (nbits != null ) {
cm=Clazz.new_([cm.getColorSpace$(), nbits, hasAlpha, isPre, trans, transferType],$I$(2,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I);
}}image=Clazz.new_([cm, cm.createCompatibleWritableRaster$I$I(w, h), cm.isAlphaPremultiplied$(), null],$I$(3,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
} else {
image=Clazz.new_([destCM, destCM.createCompatibleWritableRaster$I$I(w, h), destCM.isAlphaPremultiplied$(), null],$I$(3,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
}return image;
});

Clazz.newMeth(C$, 'createCompatibleDestRaster$java_awt_image_Raster',  function (src) {
return src.createCompatibleWritableRaster$();
});

Clazz.newMeth(C$, 'getPoint2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (srcPt, dstPt) {
if (dstPt == null ) {
dstPt=Clazz.new_($I$(4,1));
}dstPt.setLocation$D$D(srcPt.getX$(), srcPt.getY$());
return dstPt;
});

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return this.hints;
});

Clazz.newMeth(C$, 'byteFilter$java_awt_image_ByteLookupTable$java_awt_image_Raster$java_awt_image_WritableRaster$I$I$I',  function (lookup, src, dst, width, height, numBands) {
var srcPix=null;
var table=lookup.getTable$();
var offset=lookup.getOffset$();
var tidx;
var step=1;
if (table.length == 1) {
step=0;
}var x;
var y;
var band;
var len=table[0].length;
for (y=0; y < height; y++) {
tidx=0;
for (band=0; band < numBands; band++, tidx+=step) {
srcPix=src.getSamples$I$I$I$I$I$IA(0, y, width, 1, band, srcPix);
for (x=0; x < width; x++) {
var index=srcPix[x] - offset;
if (index < 0 || index > len ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index (" + index + "(out of range: " + " srcPix[" + x + "]=" + srcPix[x] + " offset=" + offset ]);
}srcPix[x]=table[tidx][index];
}
dst.setSamples$I$I$I$I$I$IA(0, y, width, 1, band, srcPix);
}
}
}, p$1);

Clazz.newMeth(C$, 'shortFilter$java_awt_image_ShortLookupTable$java_awt_image_Raster$java_awt_image_WritableRaster$I$I$I',  function (lookup, src, dst, width, height, numBands) {
var band;
var srcPix=null;
var table=lookup.getTable$();
var offset=lookup.getOffset$();
var tidx;
var step=1;
if (table.length == 1) {
step=0;
}var x=0;
var y=0;
var index;
var maxShort=65535;
for (y=0; y < height; y++) {
tidx=0;
for (band=0; band < numBands; band++, tidx+=step) {
srcPix=src.getSamples$I$I$I$I$I$IA(0, y, width, 1, band, srcPix);
for (x=0; x < width; x++) {
index=srcPix[x] - offset;
if (index < 0 || index > maxShort ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index out of range " + index + " x is " + x + "srcPix[x]=" + srcPix[x] + " offset=" + offset ]);
}srcPix[x]=table[tidx][index];
}
dst.setSamples$I$I$I$I$I$IA(0, y, width, 1, band, srcPix);
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

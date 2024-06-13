(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.image.ByteLookupTable','swingjs.JSUtil','java.awt.image.LookupOp','java.awt.image.BufferedImage',['java.awt.geom.Point2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RescaleOp", null, null, ['java.awt.image.BufferedImageOp', 'java.awt.image.RasterOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.length=0;
this.swingJStype="R".$c();
},1);

C$.$fields$=[['I',['length','swingJStype','srcNbits','dstNbits'],'O',['scaleFactors','float[]','+offsets','hints','java.awt.RenderingHints']]]

Clazz.newMeth(C$, 'c$$FA$FA$java_awt_RenderingHints',  function (scaleFactors, offsets, hints) {
;C$.$init$.apply(this);
this.length=scaleFactors.length;
if (this.length > offsets.length) this.length=offsets.length;
this.scaleFactors=Clazz.array(Float.TYPE, [this.length]);
this.offsets=Clazz.array(Float.TYPE, [this.length]);
for (var i=0; i < this.length; i++) {
this.scaleFactors[i]=scaleFactors[i];
this.offsets[i]=offsets[i];
}
this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'c$$F$F$java_awt_RenderingHints',  function (scaleFactor, offset, hints) {
;C$.$init$.apply(this);
this.length=1;
this.scaleFactors=Clazz.array(Float.TYPE, [1]);
this.offsets=Clazz.array(Float.TYPE, [1]);
this.scaleFactors[0]=scaleFactor;
this.offsets[0]=offset;
this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'getScaleFactors$FA',  function (scaleFactors) {
if (scaleFactors == null ) {
return this.scaleFactors.clone$();
}System.arraycopy$O$I$O$I$I(this.scaleFactors, 0, scaleFactors, 0, Math.min(this.scaleFactors.length, scaleFactors.length));
return scaleFactors;
});

Clazz.newMeth(C$, 'getOffsets$FA',  function (offsets) {
if (offsets == null ) {
return this.offsets.clone$();
}System.arraycopy$O$I$O$I$I(this.offsets, 0, offsets, 0, Math.min(this.offsets.length, offsets.length));
return offsets;
});

Clazz.newMeth(C$, 'getNumFactors$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'createByteLut$FA$FA$I$I',  function (scale, off, nBands, nElems) {
var lutData=Clazz.array(Byte.TYPE, [scale.length, nElems]);
for (var band=0; band < scale.length; band++) {
var bandScale=scale[band];
var bandOff=off[band];
var bandLutData=lutData[band];
for (var i=0; i < nElems; i++) {
var val=((i * bandScale + bandOff)|0);
if ((val & -256) != 0) {
if (val < 0) {
val=0;
} else {
val=255;
}}bandLutData[i]=(val|0);
}
}
return Clazz.new_($I$(1,1).c$$I$BAA,[0, lutData]);
}, p$1);

Clazz.newMeth(C$, 'canUseLookup$java_awt_image_Raster$java_awt_image_Raster',  function (src, dst) {
var datatype=src.getDataBuffer$().getDataType$();
if (datatype != 0 && datatype != 1 ) {
return false;
}var dstSM=dst.getSampleModel$();
this.dstNbits=dstSM.getSampleSize$I(0);
if (!(this.dstNbits == 8 || this.dstNbits == 16 )) {
return false;
}for (var i=1; i < src.getNumBands$(); i++) {
var bandSize=dstSM.getSampleSize$I(i);
if (bandSize != this.dstNbits) {
return false;
}}
var srcSM=src.getSampleModel$();
this.srcNbits=srcSM.getSampleSize$I(0);
if (this.srcNbits > 16) {
return false;
}for (var i=1; i < src.getNumBands$(); i++) {
var bandSize=srcSM.getSampleSize$I(i);
if (bandSize != this.srcNbits) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage',  function (src, dst) {
var srcCM=src.getColorModel$();
var dstCM;
var numBands=srcCM.getNumColorComponents$();
if (this.length != 1 && this.length != numBands  && this.length != srcCM.getNumComponents$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of scaling constants does not equal the number of of color or color/alpha  components"]);
}if (this.length > numBands && srcCM.hasAlpha$() ) {
this.length=numBands + 1;
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
$I$(2).notImplemented$S(null);
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["SwingJS only supports RGB color space"]);
}}var origDst=dst;
var srcRaster=src.getRaster$();
var dstRaster=dst.getRaster$();
if (srcCM.hasAlpha$()) {
if (numBands - 1 == this.length || this.length == 1 ) {
var minx=srcRaster.getMinX$();
var miny=srcRaster.getMinY$();
var bands=Clazz.array(Integer.TYPE, [numBands - 1]);
for (var i=0; i < numBands - 1; i++) {
bands[i]=i;
}
srcRaster=srcRaster.createWritableChild$I$I$I$I$I$I$IA(minx, miny, srcRaster.getWidth$(), srcRaster.getHeight$(), minx, miny, bands);
}}if (dstCM.hasAlpha$()) {
var dstNumBands=dstRaster.getNumBands$();
if (dstNumBands - 1 == this.length || this.length == 1 ) {
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
var width=src.getWidth$();
var height=src.getHeight$();
var srcPix=null;
var step=0;
var tidx=0;
if (dst == null ) {
dst=this.createCompatibleDestRaster$java_awt_image_Raster(src);
} else if (height != dst.getHeight$() || width != dst.getWidth$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width or height of Rasters do not match"]);
} else if (numBands != dst.getNumBands$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bands in src " + numBands + " does not equal number of bands in dest " + dst.getNumBands$() ]);
}if (this.length != 1 && this.length != src.getNumBands$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of scaling constants does not equal the number of of bands in the src raster"]);
}if (p$1.canUseLookup$java_awt_image_Raster$java_awt_image_Raster.apply(this, [src, dst])) {
var srcNgray=(1 << this.srcNbits);
var dstNgray=(1 << this.dstNbits);
if (dstNgray != 256) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["SwingJS requires 256 gray scale"]);
}if (dstNgray == 256) {
var lut=p$1.createByteLut$FA$FA$I$I.apply(this, [this.scaleFactors, this.offsets, numBands, srcNgray]);
var op=Clazz.new_($I$(3,1).c$$java_awt_image_LookupTable$java_awt_RenderingHints,[lut, this.hints]);
op.filter$java_awt_image_Raster$java_awt_image_WritableRaster(src, dst);
}} else {
if (this.length > 1) {
step=1;
}var sminX=src.getMinX$();
var sY=src.getMinY$();
var dminX=dst.getMinX$();
var dY=dst.getMinY$();
var sX;
var dX;
var nbits;
var dstMax=Clazz.array(Integer.TYPE, [numBands]);
var dstMask=Clazz.array(Integer.TYPE, [numBands]);
var dstSM=dst.getSampleModel$();
for (var z=0; z < numBands; z++) {
nbits=dstSM.getSampleSize$I(z);
dstMax[z]=(1 << nbits) - 1;
dstMask[z]=~(dstMax[z]);
}
var val;
for (var y=0; y < height; y++, sY++, dY++) {
dX=dminX;
sX=sminX;
for (var x=0; x < width; x++, sX++, dX++) {
srcPix=src.getPixel$I$I$IA(sX, sY, srcPix);
tidx=0;
for (var z=0; z < numBands; z++, tidx+=step) {
val=((srcPix[z] * this.scaleFactors[tidx] + this.offsets[tidx])|0);
if ((val & dstMask[z]) != 0) {
if (val < 0) {
val=0;
} else {
val=dstMax[z];
}}srcPix[z]=val;
}
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
if (destCM == null ) {
var cm=src.getColorModel$();
image=Clazz.new_([cm, src.getRaster$().createCompatibleWritableRaster$(), cm.isAlphaPremultiplied$(), null],$I$(4,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
} else {
var w=src.getWidth$();
var h=src.getHeight$();
image=Clazz.new_([destCM, destCM.createCompatibleWritableRaster$I$I(w, h), destCM.isAlphaPremultiplied$(), null],$I$(4,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
}return image;
});

Clazz.newMeth(C$, 'createCompatibleDestRaster$java_awt_image_Raster',  function (src) {
return src.createCompatibleWritableRaster$I$I(src.getWidth$(), src.getHeight$());
});

Clazz.newMeth(C$, 'getPoint2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (srcPt, dstPt) {
if (dstPt == null ) {
dstPt=Clazz.new_($I$(5,1));
}dstPt.setLocation$D$D(srcPt.getX$(), srcPt.getY$());
return dstPt;
});

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return this.hints;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

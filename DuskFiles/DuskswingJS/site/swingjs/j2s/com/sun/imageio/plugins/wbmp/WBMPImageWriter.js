(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.wbmp"),p$1={},I$=[[0,'com.sun.imageio.plugins.common.I18N','com.sun.imageio.plugins.wbmp.WBMPMetadata','java.awt.Rectangle','java.awt.image.MultiPixelPackedSampleModel','java.awt.image.Raster','java.awt.Point']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WBMPImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
},1);

C$.$fields$=[['O',['stream','javax.imageio.stream.ImageOutputStream']]]

Clazz.newMeth(C$, 'getNumBits$I',  function (intValue) {
var numBits=32;
var mask=-2147483648;
while (mask != 0 && (intValue & mask) == 0 ){
--numBits;
mask>>>=1;
}
return numBits;
}, 1);

Clazz.newMeth(C$, 'intToMultiByte$I',  function (intValue) {
var numBitsLeft=C$.getNumBits$I(intValue);
var multiBytes=Clazz.array(Byte.TYPE, [((numBitsLeft + 6)/7|0)]);
var maxIndex=multiBytes.length - 1;
for (var b=0; b <= maxIndex; b++) {
multiBytes[b]=(((intValue >>> ((maxIndex - b) * 7)) & 127)|0);
if (b != maxIndex) {
multiBytes[b]|=-128;
}}
return multiBytes;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi',  function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutput$O',  function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("WBMPImageWriter")]);
this.stream=output;
} else this.stream=null;
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam',  function (param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (imageType, param) {
var meta=Clazz.new_($I$(2,1));
meta.wbmpType=0;
return meta;
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam',  function (inData, param) {
return null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (metadata, type, param) {
return null;
});

Clazz.newMeth(C$, 'canWriteRasters$',  function () {
return true;
});

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (streamMetadata, image, param) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("WBMPImageWriter3")]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("WBMPImageWriter4")]);
}this.clearAbortRequest$();
this.processImageStarted$I(0);
if (param == null ) param=this.getDefaultWriteParam$();
var input=null;
var inputRaster=null;
var writeRaster=image.hasRaster$();
var sourceRegion=param.getSourceRegion$();
var sampleModel=null;
if (writeRaster) {
inputRaster=image.getRaster$();
sampleModel=inputRaster.getSampleModel$();
} else {
input=image.getRenderedImage$();
sampleModel=input.getSampleModel$();
inputRaster=input.getData$();
}p$1.checkSampleModel$java_awt_image_SampleModel.apply(this, [sampleModel]);
if (sourceRegion == null ) sourceRegion=inputRaster.getBounds$();
 else sourceRegion=sourceRegion.intersection$java_awt_Rectangle(inputRaster.getBounds$());
if (sourceRegion.isEmpty$()) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("WBMPImageWriter1")]);
var scaleX=param.getSourceXSubsampling$();
var scaleY=param.getSourceYSubsampling$();
var xOffset=param.getSubsamplingXOffset$();
var yOffset=param.getSubsamplingYOffset$();
sourceRegion.translate$I$I(xOffset, yOffset);
sourceRegion.width-=xOffset;
sourceRegion.height-=yOffset;
var minX=(sourceRegion.x/scaleX|0);
var minY=(sourceRegion.y/scaleY|0);
var w=((sourceRegion.width + scaleX - 1)/scaleX|0);
var h=((sourceRegion.height + scaleY - 1)/scaleY|0);
var destinationRegion=Clazz.new_($I$(3,1).c$$I$I$I$I,[minX, minY, w, h]);
sampleModel=sampleModel.createCompatibleSampleModel$I$I(w, h);
var destSM=sampleModel;
if (sampleModel.getDataType$() != 0 || !(Clazz.instanceOf(sampleModel, "java.awt.image.MultiPixelPackedSampleModel"))  || (sampleModel).getDataBitOffset$() != 0 ) {
destSM=Clazz.new_($I$(4,1).c$$I$I$I$I$I$I,[0, w, h, 1, w + 7 >> 3, 0]);
}if (!destinationRegion.equals$O(sourceRegion)) {
if (scaleX == 1 && scaleY == 1 ) inputRaster=inputRaster.createChild$I$I$I$I$I$I$IA(inputRaster.getMinX$(), inputRaster.getMinY$(), w, h, minX, minY, null);
 else {
var ras=$I$(5,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[destSM, Clazz.new_($I$(6,1).c$$I$I,[minX, minY])]);
var data=(ras.getDataBuffer$()).getData$();
for (var j=minY, y=sourceRegion.y, k=0; j < minY + h; j++, y+=scaleY) {
for (var i=0, x=sourceRegion.x; i < w; i++, x+=scaleX) {
var v=inputRaster.getSample$I$I$I(x, y, 0);
data[$k$=k + (i >> 3)]=(data[$k$]|(v << (7 - (i & 7)))|0);
}
k+=w + 7 >> 3;
}
inputRaster=ras;
}}if (!destSM.equals$O(inputRaster.getSampleModel$())) {
var raster=$I$(5,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[destSM, Clazz.new_([inputRaster.getMinX$(), inputRaster.getMinY$()],$I$(6,1).c$$I$I)]);
raster.setRect$java_awt_image_Raster(inputRaster);
inputRaster=raster;
}var isWhiteZero=false;
if (!writeRaster && Clazz.instanceOf(input.getColorModel$(), "java.awt.image.IndexColorModel") ) {
var icm=input.getColorModel$();
isWhiteZero=icm.getRed$I(0) > icm.getRed$I(1);
}var lineStride=(destSM).getScanlineStride$();
var bytesPerRow=((w + 7)/8|0);
var bdata=(inputRaster.getDataBuffer$()).getData$();
this.stream.write$I(0);
this.stream.write$I(0);
this.stream.write$BA(C$.intToMultiByte$I(w));
this.stream.write$BA(C$.intToMultiByte$I(h));
if (!isWhiteZero && lineStride == bytesPerRow ) {
this.stream.write$BA$I$I(bdata, 0, h * bytesPerRow);
this.processImageProgress$F(100.0);
} else {
var offset=0;
if (!isWhiteZero) {
for (var row=0; row < h; row++) {
if (this.abortRequested$()) break;
this.stream.write$BA$I$I(bdata, offset, bytesPerRow);
offset+=lineStride;
this.processImageProgress$F(100.0 * row / h);
}
} else {
var inverted=Clazz.array(Byte.TYPE, [bytesPerRow]);
for (var row=0; row < h; row++) {
if (this.abortRequested$()) break;
for (var col=0; col < bytesPerRow; col++) {
inverted[col]=((~(bdata[col + offset]))|0);
}
this.stream.write$BA$I$I(inverted, 0, bytesPerRow);
offset+=lineStride;
this.processImageProgress$F(100.0 * row / h);
}
}}if (this.abortRequested$()) this.processWriteAborted$();
 else {
this.processImageComplete$();
this.stream.flushBefore$J(this.stream.getStreamPosition$());
}});

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.stream=null;
});

Clazz.newMeth(C$, 'checkSampleModel$java_awt_image_SampleModel',  function (sm) {
var type=sm.getDataType$();
if (type < 0 || type > 3  || sm.getNumBands$() != 1  || sm.getSampleSize$I(0) != 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("WBMPImageWriter2")]);
}, p$1);
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),p$1={},I$=[[0,'javax.imageio.ImageWriteParam','com.sun.imageio.plugins.gif.GIFWritableImageMetadata','java.awt.Rectangle','java.awt.Dimension','com.sun.imageio.plugins.gif.GIFWritableStreamMetadata','com.sun.imageio.plugins.gif.GIFImageWriteParam','java.nio.ByteOrder','com.sun.imageio.plugins.common.PaletteBuilder','javax.imageio.ImageTypeSpecifier','java.util.Arrays','com.sun.imageio.plugins.common.LZWCompressor']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
this.isWritingSequence=false;
this.wroteSequenceHeader=false;
this.theStreamMetadata=null;
this.imageIndex=0;
},1);

C$.$fields$=[['Z',['isWritingSequence','wroteSequenceHeader'],'I',['imageIndex'],'O',['stream','javax.imageio.stream.ImageOutputStream','theStreamMetadata','com.sun.imageio.plugins.gif.GIFWritableStreamMetadata']]]

Clazz.newMeth(C$, 'getNumBits$I',  function (value) {
var numBits;
switch (value) {
case 2:
numBits=1;
break;
case 4:
numBits=2;
break;
case 8:
numBits=3;
break;
case 16:
numBits=4;
break;
case 32:
numBits=5;
break;
case 64:
numBits=6;
break;
case 128:
numBits=7;
break;
case 256:
numBits=8;
break;
default:
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Bad palette length: " + value + "!" ]);
}
return numBits;
}, 1);

Clazz.newMeth(C$, 'computeRegions$java_awt_Rectangle$java_awt_Dimension$javax_imageio_ImageWriteParam',  function (sourceBounds, destSize, p) {
var param;
var periodX=1;
var periodY=1;
if (p != null ) {
var sourceBands=p.getSourceBands$();
if (sourceBands != null  && (sourceBands.length != 1 || sourceBands[0] != 0 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot sub-band image!"]);
}var sourceRegion=p.getSourceRegion$();
if (sourceRegion != null ) {
sourceRegion=sourceRegion.intersection$java_awt_Rectangle(sourceBounds);
sourceBounds.setBounds$java_awt_Rectangle(sourceRegion);
}var gridX=p.getSubsamplingXOffset$();
var gridY=p.getSubsamplingYOffset$();
sourceBounds.x+=gridX;
sourceBounds.y+=gridY;
sourceBounds.width-=gridX;
sourceBounds.height-=gridY;
periodX=p.getSourceXSubsampling$();
periodY=p.getSourceYSubsampling$();
}destSize.setSize$I$I(((sourceBounds.width + periodX - 1)/periodX|0), ((sourceBounds.height + periodY - 1)/periodY|0));
if (destSize.width <= 0 || destSize.height <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty source region!"]);
}}, 1);

Clazz.newMeth(C$, 'createColorTable$java_awt_image_ColorModel$java_awt_image_SampleModel',  function (colorModel, sampleModel) {
var colorTable;
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
var icm=colorModel;
var mapSize=icm.getMapSize$();
var ctSize=C$.getGifPaletteSize$I(mapSize);
var reds=Clazz.array(Byte.TYPE, [ctSize]);
var greens=Clazz.array(Byte.TYPE, [ctSize]);
var blues=Clazz.array(Byte.TYPE, [ctSize]);
icm.getReds$BA(reds);
icm.getGreens$BA(greens);
icm.getBlues$BA(blues);
for (var i=mapSize; i < ctSize; i++) {
reds[i]=reds[0];
greens[i]=greens[0];
blues[i]=blues[0];
}
colorTable=Clazz.array(Byte.TYPE, [3 * ctSize]);
var idx=0;
for (var i=0; i < ctSize; i++) {
colorTable[idx++]=reds[i];
colorTable[idx++]=greens[i];
colorTable[idx++]=blues[i];
}
} else if (sampleModel.getNumBands$() == 1) {
var numBits=sampleModel.getSampleSize$()[0];
if (numBits > 8) {
numBits=8;
}var colorTableLength=3 * (1 << numBits);
colorTable=Clazz.array(Byte.TYPE, [colorTableLength]);
for (var i=0; i < colorTableLength; i++) {
colorTable[i]=(((i/3|0))|0);
}
} else {
colorTable=null;
}return colorTable;
}, 1);

Clazz.newMeth(C$, 'getGifPaletteSize$I',  function (x) {
if (x <= 2) {
return 2;
}x=x - 1;
x=x | (x >> 1);
x=x | (x >> 2);
x=x | (x >> 4);
x=x | (x >> 8);
x=x | (x >> 16);
return x + 1;
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_gif_GIFImageWriterSpi',  function (originatingProvider) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originatingProvider]);C$.$init$.apply(this);
if (false) {
System.err.println$S("GIF Writer is created");
}}, 1);

Clazz.newMeth(C$, 'canWriteSequence$',  function () {
return true;
});

Clazz.newMeth(C$, 'convertMetadata$S$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata',  function (metadataFormatName, inData, outData) {
var formatName=null;
var nativeFormatName=inData.getNativeMetadataFormatName$();
if (nativeFormatName != null  && nativeFormatName.equals$O(metadataFormatName) ) {
formatName=metadataFormatName;
} else {
var extraFormatNames=inData.getExtraMetadataFormatNames$();
if (extraFormatNames != null ) {
for (var i=0; i < extraFormatNames.length; i++) {
if (extraFormatNames[i].equals$O(metadataFormatName)) {
formatName=metadataFormatName;
break;
}}
}}if (formatName == null  && inData.isStandardMetadataFormatSupported$() ) {
formatName="javax_imageio_1.0";
}if (formatName != null ) {
try {
var root=inData.getAsTree$S(formatName);
outData.mergeTree$S$org_w3c_dom_Node(formatName, root);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam',  function (inData, param) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
}var sm=this.getDefaultStreamMetadata$javax_imageio_ImageWriteParam(param);
p$1.convertMetadata$S$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata.apply(this, ["javax_imageio_gif_stream_1.0", inData, sm]);
return sm;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (inData, imageType, param) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
}if (imageType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imageType == null!"]);
}var im=this.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageType, param);
var isProgressive=im.interlaceFlag;
p$1.convertMetadata$S$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata.apply(this, ["javax_imageio_gif_image_1.0", inData, im]);
if (param != null  && param.canWriteProgressive$()  && param.getProgressiveMode$() != $I$(1).MODE_COPY_FROM_METADATA ) {
im.interlaceFlag=isProgressive;
}return im;
});

Clazz.newMeth(C$, 'endWriteSequence$',  function () {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["output == null!"]);
}if (!this.isWritingSequence) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["prepareWriteSequence() was not invoked!"]);
}p$1.writeTrailer.apply(this, []);
p$1.resetLocal.apply(this, []);
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (imageType, param) {
var imageMetadata=Clazz.new_($I$(2,1));
var sampleModel=imageType.getSampleModel$();
var sourceBounds=Clazz.new_([sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(3,1).c$$I$I);
var destSize=Clazz.new_($I$(4,1));
C$.computeRegions$java_awt_Rectangle$java_awt_Dimension$javax_imageio_ImageWriteParam(sourceBounds, destSize, param);
imageMetadata.imageWidth=destSize.width;
imageMetadata.imageHeight=destSize.height;
if (param != null  && param.canWriteProgressive$()  && param.getProgressiveMode$() == 0 ) {
imageMetadata.interlaceFlag=false;
} else {
imageMetadata.interlaceFlag=true;
}var colorModel=imageType.getColorModel$();
imageMetadata.localColorTable=C$.createColorTable$java_awt_image_ColorModel$java_awt_image_SampleModel(colorModel, sampleModel);
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
var transparentIndex=(colorModel).getTransparentPixel$();
if (transparentIndex != -1) {
imageMetadata.transparentColorFlag=true;
imageMetadata.transparentColorIndex=transparentIndex;
}}return imageMetadata;
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam',  function (param) {
var streamMetadata=Clazz.new_($I$(5,1));
streamMetadata.version="89a";
return streamMetadata;
});

Clazz.newMeth(C$, 'getDefaultWriteParam$',  function () {
return Clazz.new_([this.getLocale$()],$I$(6,1).c$$java_util_Locale);
});

Clazz.newMeth(C$, 'prepareWriteSequence$javax_imageio_metadata_IIOMetadata',  function (streamMetadata) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Output is not set."]);
}p$1.resetLocal.apply(this, []);
if (streamMetadata == null ) {
this.theStreamMetadata=this.getDefaultStreamMetadata$javax_imageio_ImageWriteParam(null);
} else {
this.theStreamMetadata=Clazz.new_($I$(5,1));
p$1.convertMetadata$S$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata.apply(this, ["javax_imageio_gif_stream_1.0", streamMetadata, this.theStreamMetadata]);
}this.isWritingSequence=true;
});

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
p$1.resetLocal.apply(this, []);
});

Clazz.newMeth(C$, 'resetLocal',  function () {
this.isWritingSequence=false;
this.wroteSequenceHeader=false;
this.theStreamMetadata=null;
this.imageIndex=0;
}, p$1);

Clazz.newMeth(C$, 'setOutput$O',  function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output is not an ImageOutputStream"]);
}this.stream=output;
this.stream.setByteOrder$java_nio_ByteOrder($I$(7).LITTLE_ENDIAN);
} else {
this.stream=null;
}});

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (sm, iioimage, p) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["output == null!"]);
}if (iioimage == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["iioimage == null!"]);
}if (iioimage.hasRaster$()) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["canWriteRasters() == false!"]);
}p$1.resetLocal.apply(this, []);
var streamMetadata;
if (sm == null ) {
streamMetadata=this.getDefaultStreamMetadata$javax_imageio_ImageWriteParam(p);
} else {
streamMetadata=this.convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam(sm, p);
}p$1.write$Z$Z$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam.apply(this, [true, true, streamMetadata, iioimage, p]);
});

Clazz.newMeth(C$, 'writeToSequence$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (image, param) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["output == null!"]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}if (image.hasRaster$()) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["canWriteRasters() == false!"]);
}if (!this.isWritingSequence) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["prepareWriteSequence() was not invoked!"]);
}p$1.write$Z$Z$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam.apply(this, [!this.wroteSequenceHeader, false, this.theStreamMetadata, image, param]);
if (!this.wroteSequenceHeader) {
this.wroteSequenceHeader=true;
}++this.imageIndex;
});

Clazz.newMeth(C$, 'needToCreateIndex$java_awt_image_RenderedImage',  function (image) {
var sampleModel=image.getSampleModel$();
var colorModel=image.getColorModel$();
return sampleModel.getNumBands$() != 1 || sampleModel.getSampleSize$()[0] > 8  || colorModel.getComponentSize$()[0] > 8 ;
}, p$1);

Clazz.newMeth(C$, 'write$Z$Z$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (writeHeader, writeTrailer, sm, iioimage, p) {
this.clearAbortRequest$();
var image=iioimage.getRenderedImage$();
if (p$1.needToCreateIndex$java_awt_image_RenderedImage.apply(this, [image])) {
image=$I$(8).createIndexedImage$java_awt_image_RenderedImage(image);
iioimage.setRenderedImage$java_awt_image_RenderedImage(image);
}var colorModel=image.getColorModel$();
var sampleModel=image.getSampleModel$();
var sourceBounds=Clazz.new_([image.getMinX$(), image.getMinY$(), image.getWidth$(), image.getHeight$()],$I$(3,1).c$$I$I$I$I);
var destSize=Clazz.new_($I$(4,1));
C$.computeRegions$java_awt_Rectangle$java_awt_Dimension$javax_imageio_ImageWriteParam(sourceBounds, destSize, p);
var imageMetadata=null;
if (iioimage.getMetadata$() != null ) {
imageMetadata=Clazz.new_($I$(2,1));
p$1.convertMetadata$S$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata.apply(this, ["javax_imageio_gif_image_1.0", iioimage.getMetadata$(), imageMetadata]);
if (imageMetadata.localColorTable == null ) {
imageMetadata.localColorTable=C$.createColorTable$java_awt_image_ColorModel$java_awt_image_SampleModel(colorModel, sampleModel);
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
var icm=colorModel;
var index=icm.getTransparentPixel$();
imageMetadata.transparentColorFlag=(index != -1);
if (imageMetadata.transparentColorFlag) {
imageMetadata.transparentColorIndex=index;
}}}}var globalColorTable=null;
if (writeHeader) {
if (sm == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot write null header!"]);
}var streamMetadata=sm;
if (streamMetadata.version == null ) {
streamMetadata.version="89a";
}if (streamMetadata.logicalScreenWidth == -1) {
streamMetadata.logicalScreenWidth=destSize.width;
}if (streamMetadata.logicalScreenHeight == -1) {
streamMetadata.logicalScreenHeight=destSize.height;
}if (streamMetadata.colorResolution == -1) {
streamMetadata.colorResolution=colorModel != null  ? colorModel.getComponentSize$()[0] : sampleModel.getSampleSize$()[0];
}if (streamMetadata.globalColorTable == null ) {
if (this.isWritingSequence && imageMetadata != null   && imageMetadata.localColorTable != null  ) {
streamMetadata.globalColorTable=imageMetadata.localColorTable;
} else if (imageMetadata == null  || imageMetadata.localColorTable == null  ) {
streamMetadata.globalColorTable=C$.createColorTable$java_awt_image_ColorModel$java_awt_image_SampleModel(colorModel, sampleModel);
}}globalColorTable=streamMetadata.globalColorTable;
var bitsPerPixel;
if (globalColorTable != null ) {
bitsPerPixel=C$.getNumBits$I((globalColorTable.length/3|0));
} else if (imageMetadata != null  && imageMetadata.localColorTable != null  ) {
bitsPerPixel=C$.getNumBits$I((imageMetadata.localColorTable.length/3|0));
} else {
bitsPerPixel=sampleModel.getSampleSize$I(0);
}p$1.writeHeader$javax_imageio_metadata_IIOMetadata$I.apply(this, [streamMetadata, bitsPerPixel]);
} else if (this.isWritingSequence) {
globalColorTable=this.theStreamMetadata.globalColorTable;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must write header for single image!"]);
}p$1.writeImage$java_awt_image_RenderedImage$com_sun_imageio_plugins_gif_GIFWritableImageMetadata$javax_imageio_ImageWriteParam$BA$java_awt_Rectangle$java_awt_Dimension.apply(this, [iioimage.getRenderedImage$(), imageMetadata, p, globalColorTable, sourceBounds, destSize]);
if (writeTrailer) {
p$1.writeTrailer.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'writeImage$java_awt_image_RenderedImage$com_sun_imageio_plugins_gif_GIFWritableImageMetadata$javax_imageio_ImageWriteParam$BA$java_awt_Rectangle$java_awt_Dimension',  function (image, imageMetadata, param, globalColorTable, sourceBounds, destSize) {
var colorModel=image.getColorModel$();
var sampleModel=image.getSampleModel$();
var writeGraphicsControlExtension;
if (imageMetadata == null ) {
imageMetadata=this.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(Clazz.new_($I$(9,1).c$$java_awt_image_RenderedImage,[image]), param);
writeGraphicsControlExtension=imageMetadata.transparentColorFlag;
} else {
var list=null;
try {
var root=imageMetadata.getAsTree$S("javax_imageio_gif_image_1.0");
list=root.getElementsByTagName$S("GraphicControlExtension");
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
} else {
throw iae;
}
}
writeGraphicsControlExtension=list != null  && list.getLength$() > 0 ;
if (param != null  && param.canWriteProgressive$() ) {
if (param.getProgressiveMode$() == 0) {
imageMetadata.interlaceFlag=false;
} else if (param.getProgressiveMode$() == 1) {
imageMetadata.interlaceFlag=true;
}}}if ($I$(10).equals$BA$BA(globalColorTable, imageMetadata.localColorTable)) {
imageMetadata.localColorTable=null;
}imageMetadata.imageWidth=destSize.width;
imageMetadata.imageHeight=destSize.height;
if (writeGraphicsControlExtension) {
p$1.writeGraphicControlExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata.apply(this, [imageMetadata]);
}p$1.writePlainTextExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata.apply(this, [imageMetadata]);
p$1.writeApplicationExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata.apply(this, [imageMetadata]);
p$1.writeCommentExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata.apply(this, [imageMetadata]);
var bitsPerPixel=C$.getNumBits$I(imageMetadata.localColorTable == null  ? (globalColorTable == null  ? sampleModel.getSampleSize$I(0) : (globalColorTable.length/3|0)) : (imageMetadata.localColorTable.length/3|0));
p$1.writeImageDescriptor$com_sun_imageio_plugins_gif_GIFWritableImageMetadata$I.apply(this, [imageMetadata, bitsPerPixel]);
p$1.writeRasterData$java_awt_image_RenderedImage$java_awt_Rectangle$java_awt_Dimension$javax_imageio_ImageWriteParam$Z.apply(this, [image, sourceBounds, destSize, param, imageMetadata.interlaceFlag]);
}, p$1);

Clazz.newMeth(C$, 'writeRows$java_awt_image_RenderedImage$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I$I$I$I$I$I',  function (image, compressor, sx, sdx, sy, sdy, sw, dy, ddy, dw, dh, numRowsWritten, progressReportRowPeriod) {
if (false) System.out.println$S("Writing unoptimized");
var sbuf=Clazz.array(Integer.TYPE, [sw]);
var dbuf=Clazz.array(Byte.TYPE, [dw]);
var raster=image.getNumXTiles$() == 1 && image.getNumYTiles$() == 1  ? image.getTile$I$I(0, 0) : image.getData$();
for (var y=dy; y < dh; y+=ddy) {
if (numRowsWritten % progressReportRowPeriod == 0) {
if (this.abortRequested$()) {
this.processWriteAborted$();
return;
}this.processImageProgress$F((numRowsWritten * 100.0) / dh);
}raster.getSamples$I$I$I$I$I$IA(sx, sy, sw, 1, 0, sbuf);
for (var i=0, j=0; i < dw; i++, j+=sdx) {
dbuf[i]=(sbuf[j]|0);
}
compressor.compress$BA$I$I(dbuf, 0, dw);
++numRowsWritten;
sy+=sdy;
}
}, p$1);

Clazz.newMeth(C$, 'writeRowsOpt$BA$I$I$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I',  function (data, offset, lineStride, compressor, dy, ddy, dw, dh, numRowsWritten, progressReportRowPeriod) {
if (false) System.out.println$S("Writing optimized");
offset+=dy * lineStride;
lineStride*=ddy;
for (var y=dy; y < dh; y+=ddy) {
if (numRowsWritten % progressReportRowPeriod == 0) {
if (this.abortRequested$()) {
this.processWriteAborted$();
return;
}this.processImageProgress$F((numRowsWritten * 100.0) / dh);
}compressor.compress$BA$I$I(data, offset, dw);
++numRowsWritten;
offset+=lineStride;
}
}, p$1);

Clazz.newMeth(C$, 'writeRasterData$java_awt_image_RenderedImage$java_awt_Rectangle$java_awt_Dimension$javax_imageio_ImageWriteParam$Z',  function (image, sourceBounds, destSize, param, interlaceFlag) {
var sourceXOffset=sourceBounds.x;
var sourceYOffset=sourceBounds.y;
var sourceWidth=sourceBounds.width;
var sourceHeight=sourceBounds.height;
var destWidth=destSize.width;
var destHeight=destSize.height;
var periodX;
var periodY;
if (param == null ) {
periodX=1;
periodY=1;
} else {
periodX=param.getSourceXSubsampling$();
periodY=param.getSourceYSubsampling$();
}var sampleModel=image.getSampleModel$();
var bitsPerPixel=sampleModel.getSampleSize$()[0];
var initCodeSize=bitsPerPixel;
if (initCodeSize == 1) {
++initCodeSize;
}this.stream.write$I(initCodeSize);
var compressor=Clazz.new_($I$(11,1).c$$javax_imageio_stream_ImageOutputStream$I$Z,[this.stream, initCodeSize, false]);
var isOptimizedCase=periodX == 1 && periodY == 1  && image.getNumXTiles$() == 1  && image.getNumYTiles$() == 1  && Clazz.instanceOf(sampleModel, "java.awt.image.ComponentSampleModel")  && Clazz.instanceOf(image.getTile$I$I(0, 0), "sun.awt.image.ByteComponentRaster")  && Clazz.instanceOf(image.getTile$I$I(0, 0).getDataBuffer$(), "java.awt.image.DataBufferByte") ;
var numRowsWritten=0;
var progressReportRowPeriod=Math.max((destHeight/20|0), 1);
this.processImageStarted$I(this.imageIndex);
if (interlaceFlag) {
if (false) System.out.println$S("Writing interlaced");
if (isOptimizedCase) {
var tile=image.getTile$I$I(0, 0);
var data=(tile.getDataBuffer$()).getData$();
var csm=tile.getSampleModel$();
var offset=csm.getOffset$I$I$I(sourceXOffset, sourceYOffset, 0);
offset+=tile.getDataOffset$I(0);
var lineStride=csm.getScanlineStride$();
p$1.writeRowsOpt$BA$I$I$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I.apply(this, [data, offset, lineStride, compressor, 0, 8, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
if (this.abortRequested$()) {
return;
}numRowsWritten+=(destHeight/8|0);
p$1.writeRowsOpt$BA$I$I$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I.apply(this, [data, offset, lineStride, compressor, 4, 8, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
if (this.abortRequested$()) {
return;
}numRowsWritten+=((destHeight - 4)/8|0);
p$1.writeRowsOpt$BA$I$I$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I.apply(this, [data, offset, lineStride, compressor, 2, 4, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
if (this.abortRequested$()) {
return;
}numRowsWritten+=((destHeight - 2)/4|0);
p$1.writeRowsOpt$BA$I$I$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I.apply(this, [data, offset, lineStride, compressor, 1, 2, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
} else {
p$1.writeRows$java_awt_image_RenderedImage$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I$I$I$I$I$I.apply(this, [image, compressor, sourceXOffset, periodX, sourceYOffset, 8 * periodY, sourceWidth, 0, 8, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
if (this.abortRequested$()) {
return;
}numRowsWritten+=(destHeight/8|0);
p$1.writeRows$java_awt_image_RenderedImage$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I$I$I$I$I$I.apply(this, [image, compressor, sourceXOffset, periodX, sourceYOffset + 4 * periodY, 8 * periodY, sourceWidth, 4, 8, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
if (this.abortRequested$()) {
return;
}numRowsWritten+=((destHeight - 4)/8|0);
p$1.writeRows$java_awt_image_RenderedImage$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I$I$I$I$I$I.apply(this, [image, compressor, sourceXOffset, periodX, sourceYOffset + 2 * periodY, 4 * periodY, sourceWidth, 2, 4, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
if (this.abortRequested$()) {
return;
}numRowsWritten+=((destHeight - 2)/4|0);
p$1.writeRows$java_awt_image_RenderedImage$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I$I$I$I$I$I.apply(this, [image, compressor, sourceXOffset, periodX, sourceYOffset + periodY, 2 * periodY, sourceWidth, 1, 2, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
}} else {
if (false) System.out.println$S("Writing non-interlaced");
if (isOptimizedCase) {
var tile=image.getTile$I$I(0, 0);
var data=(tile.getDataBuffer$()).getData$();
var csm=tile.getSampleModel$();
var offset=csm.getOffset$I$I$I(sourceXOffset, sourceYOffset, 0);
var lineStride=csm.getScanlineStride$();
p$1.writeRowsOpt$BA$I$I$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I.apply(this, [data, offset, lineStride, compressor, 0, 1, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
} else {
p$1.writeRows$java_awt_image_RenderedImage$com_sun_imageio_plugins_common_LZWCompressor$I$I$I$I$I$I$I$I$I$I$I.apply(this, [image, compressor, sourceXOffset, periodX, sourceYOffset, periodY, sourceWidth, 0, 1, destWidth, destHeight, numRowsWritten, progressReportRowPeriod]);
}}if (this.abortRequested$()) {
return;
}this.processImageProgress$F(100.0);
compressor.flush$();
this.stream.write$I(0);
this.processImageComplete$();
}, p$1);

Clazz.newMeth(C$, 'writeHeader$S$I$I$I$I$I$Z$I$BA',  function (version, logicalScreenWidth, logicalScreenHeight, colorResolution, pixelAspectRatio, backgroundColorIndex, sortFlag, bitsPerPixel, globalColorTable) {
try {
this.stream.writeBytes$S("GIF" + version);
this.stream.writeShort$I(($s$[0] = logicalScreenWidth, $s$[0]));
this.stream.writeShort$I(($s$[0] = logicalScreenHeight, $s$[0]));
var packedFields=globalColorTable != null  ? 128 : 0;
packedFields|=((colorResolution - 1) & 7) << 4;
if (sortFlag) {
packedFields|=8;
}packedFields|=(bitsPerPixel - 1);
this.stream.write$I(packedFields);
this.stream.write$I(backgroundColorIndex);
this.stream.write$I(pixelAspectRatio);
if (globalColorTable != null ) {
this.stream.write$BA(globalColorTable);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing header!", e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'writeHeader$javax_imageio_metadata_IIOMetadata$I',  function (streamMetadata, bitsPerPixel) {
var sm;
if (Clazz.instanceOf(streamMetadata, "com.sun.imageio.plugins.gif.GIFWritableStreamMetadata")) {
sm=streamMetadata;
} else {
sm=Clazz.new_($I$(5,1));
var root=streamMetadata.getAsTree$S("javax_imageio_gif_stream_1.0");
sm.setFromTree$S$org_w3c_dom_Node("javax_imageio_gif_stream_1.0", root);
}p$1.writeHeader$S$I$I$I$I$I$Z$I$BA.apply(this, [sm.version, sm.logicalScreenWidth, sm.logicalScreenHeight, sm.colorResolution, sm.pixelAspectRatio, sm.backgroundColorIndex, sm.sortFlag, bitsPerPixel, sm.globalColorTable]);
}, p$1);

Clazz.newMeth(C$, 'writeGraphicControlExtension$I$Z$Z$I$I',  function (disposalMethod, userInputFlag, transparentColorFlag, delayTime, transparentColorIndex) {
try {
this.stream.write$I(33);
this.stream.write$I(249);
this.stream.write$I(4);
var packedFields=(disposalMethod & 3) << 2;
if (userInputFlag) {
packedFields|=2;
}if (transparentColorFlag) {
packedFields|=1;
}this.stream.write$I(packedFields);
this.stream.writeShort$I(($s$[0] = delayTime, $s$[0]));
this.stream.write$I(transparentColorIndex);
this.stream.write$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing Graphic Control Extension!", e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'writeGraphicControlExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata',  function (im) {
p$1.writeGraphicControlExtension$I$Z$Z$I$I.apply(this, [im.disposalMethod, im.userInputFlag, im.transparentColorFlag, im.delayTime, im.transparentColorIndex]);
}, p$1);

Clazz.newMeth(C$, 'writeBlocks$BA',  function (data) {
if (data != null  && data.length > 0 ) {
var offset=0;
while (offset < data.length){
var len=Math.min(data.length - offset, 255);
this.stream.write$I(len);
this.stream.write$BA$I$I(data, offset, len);
offset+=len;
}
}}, p$1);

Clazz.newMeth(C$, 'writePlainTextExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata',  function (im) {
if (im.hasPlainTextExtension) {
try {
this.stream.write$I(33);
this.stream.write$I(1);
this.stream.write$I(12);
this.stream.writeShort$I(im.textGridLeft);
this.stream.writeShort$I(im.textGridTop);
this.stream.writeShort$I(im.textGridWidth);
this.stream.writeShort$I(im.textGridHeight);
this.stream.write$I(im.characterCellWidth);
this.stream.write$I(im.characterCellHeight);
this.stream.write$I(im.textForegroundColor);
this.stream.write$I(im.textBackgroundColor);
p$1.writeBlocks$BA.apply(this, [im.text]);
this.stream.write$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing Plain Text Extension!", e]);
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'writeApplicationExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata',  function (im) {
if (im.applicationIDs != null ) {
var iterIDs=im.applicationIDs.iterator$();
var iterCodes=im.authenticationCodes.iterator$();
var iterData=im.applicationData.iterator$();
while (iterIDs.hasNext$()){
try {
this.stream.write$I(33);
this.stream.write$I(255);
this.stream.write$I(11);
this.stream.write$BA$I$I(iterIDs.next$(), 0, 8);
this.stream.write$BA$I$I(iterCodes.next$(), 0, 3);
p$1.writeBlocks$BA.apply(this, [iterData.next$()]);
this.stream.write$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing Application Extension!", e]);
} else {
throw e;
}
}
}
}}, p$1);

Clazz.newMeth(C$, 'writeCommentExtension$com_sun_imageio_plugins_gif_GIFWritableImageMetadata',  function (im) {
if (im.comments != null ) {
try {
var iter=im.comments.iterator$();
while (iter.hasNext$()){
this.stream.write$I(33);
this.stream.write$I(254);
p$1.writeBlocks$BA.apply(this, [iter.next$()]);
this.stream.write$I(0);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing Comment Extension!", e]);
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'writeImageDescriptor$I$I$I$I$Z$Z$I$BA',  function (imageLeftPosition, imageTopPosition, imageWidth, imageHeight, interlaceFlag, sortFlag, bitsPerPixel, localColorTable) {
try {
this.stream.write$I(44);
this.stream.writeShort$I(($s$[0] = imageLeftPosition, $s$[0]));
this.stream.writeShort$I(($s$[0] = imageTopPosition, $s$[0]));
this.stream.writeShort$I(($s$[0] = imageWidth, $s$[0]));
this.stream.writeShort$I(($s$[0] = imageHeight, $s$[0]));
var packedFields=localColorTable != null  ? 128 : 0;
if (interlaceFlag) {
packedFields|=64;
}if (sortFlag) {
packedFields|=8;
}packedFields|=(bitsPerPixel - 1);
this.stream.write$I(packedFields);
if (localColorTable != null ) {
this.stream.write$BA(localColorTable);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing Image Descriptor!", e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'writeImageDescriptor$com_sun_imageio_plugins_gif_GIFWritableImageMetadata$I',  function (imageMetadata, bitsPerPixel) {
p$1.writeImageDescriptor$I$I$I$I$Z$Z$I$BA.apply(this, [imageMetadata.imageLeftPosition, imageMetadata.imageTopPosition, imageMetadata.imageWidth, imageMetadata.imageHeight, imageMetadata.interlaceFlag, imageMetadata.sortFlag, bitsPerPixel, imageMetadata.localColorTable]);
}, p$1);

Clazz.newMeth(C$, 'writeTrailer',  function () {
this.stream.write$I(59);
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

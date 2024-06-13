(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),p$1={},p$2={},I$=[[0,'com.sun.imageio.plugins.jpeg.JPEGImageWriter',['com.sun.imageio.plugins.jpeg.JPEGImageWriter','.CallBackLock','.State'],'java.security.AccessController','javax.imageio.plugins.jpeg.JPEGQTable','javax.imageio.plugins.jpeg.JPEGHuffmanTable','java.awt.Dimension',['com.sun.imageio.plugins.jpeg.JPEGImageWriter','.CallBackLock'],['com.sun.imageio.plugins.jpeg.JPEGImageWriter','.JPEGWriterDisposerRecord'],'sun.java2d.Disposer','javax.imageio.plugins.jpeg.JPEGImageWriteParam','com.sun.imageio.plugins.jpeg.JPEGMetadata','com.sun.imageio.plugins.jpeg.JPEG','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','java.awt.Rectangle','javax.imageio.ImageTypeSpecifier','com.sun.imageio.plugins.jpeg.AdobeMarkerSegment','com.sun.imageio.plugins.jpeg.SOFMarkerSegment',['com.sun.imageio.plugins.jpeg.JPEG','.JCS'],'java.awt.image.ColorConvertOp','com.sun.imageio.plugins.jpeg.DQTMarkerSegment','com.sun.imageio.plugins.jpeg.DHTMarkerSegment','com.sun.imageio.plugins.jpeg.DRIMarkerSegment','java.awt.image.DataBufferByte','java.awt.image.Raster','InternalError','java.util.ArrayList',['com.sun.imageio.plugins.jpeg.DHTMarkerSegment','.Htable'],'Thread']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGImageWriter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.imageio.ImageWriter');
C$.$classes$=[['JPEGWriterDisposerRecord',10],['CallBackLock',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debug=false;
this.structPointer=0;
this.ios=null;
this.srcRas=null;
this.raster=null;
this.indexed=false;
this.indexCM=null;
this.convertTosRGB=false;
this.converted=null;
this.isAlphaPremultiplied=false;
this.srcCM=null;
this.thumbnails=null;
this.iccProfile=null;
this.sourceXOffset=0;
this.sourceYOffset=0;
this.sourceWidth=0;
this.srcBands=null;
this.sourceHeight=0;
this.currentImage=0;
this.convertOp=null;
this.streamQTables=null;
this.streamDCHuffmanTables=null;
this.streamACHuffmanTables=null;
this.ignoreJFIF=false;
this.forceJFIF=false;
this.ignoreAdobe=false;
this.newAdobeTransform=-1;
this.writeDefaultJFIF=false;
this.writeAdobe=false;
this.metadata=null;
this.sequencePrepared=false;
this.numScans=0;
this.disposerReferent= Clazz.new_();
this.theThread=null;
this.theLockCount=0;
this.cbLock=Clazz.new_($I$(7,1));
},1);

C$.$fields$=[['Z',['debug','indexed','convertTosRGB','isAlphaPremultiplied','ignoreJFIF','forceJFIF','ignoreAdobe','writeDefaultJFIF','writeAdobe','sequencePrepared'],'I',['sourceXOffset','sourceYOffset','sourceWidth','sourceHeight','currentImage','newAdobeTransform','numScans','theLockCount'],'J',['structPointer'],'O',['ios','javax.imageio.stream.ImageOutputStream','srcRas','java.awt.image.Raster','raster','java.awt.image.WritableRaster','indexCM','java.awt.image.IndexColorModel','converted','java.awt.image.WritableRaster','srcCM','java.awt.image.ColorModel','thumbnails','java.util.List','iccProfile','java.awt.color.ICC_Profile','srcBands','int[]','convertOp','java.awt.image.ColorConvertOp','streamQTables','javax.imageio.plugins.jpeg.JPEGQTable[]','streamDCHuffmanTables','javax.imageio.plugins.jpeg.JPEGHuffmanTable[]','+streamACHuffmanTables','metadata','com.sun.imageio.plugins.jpeg.JPEGMetadata','disposerReferent','java.lang.Object','disposerRecord','sun.java2d.DisposerRecord','theThread','Thread','cbLock','com.sun.imageio.plugins.jpeg.JPEGImageWriter.CallBackLock']]
,['O',['preferredThumbSizes','java.awt.Dimension[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi',  function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originator]);C$.$init$.apply(this);
this.structPointer=p$2.initJPEGImageWriter.apply(this, []);
this.disposerRecord=Clazz.new_($I$(8,1).c$$J,[this.structPointer]);
$I$(9).addRecord$O$sun_java2d_DisposerRecord(this.disposerReferent, this.disposerRecord);
}, 1);

Clazz.newMeth(C$, 'setOutput$O',  function (output) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
p$2.resetInternalState.apply(this, []);
this.ios=output;
p$2.setDest$J.apply(this, [this.structPointer]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getDefaultWriteParam$',  function () {
return Clazz.new_($I$(10,1).c$$java_util_Locale,[null]);
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam',  function (param) {
p$2.setThreadLock.apply(this, []);
try {
return Clazz.new_($I$(11,1).c$$javax_imageio_ImageWriteParam$com_sun_imageio_plugins_jpeg_JPEGImageWriter,[param, this]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (imageType, param) {
p$2.setThreadLock.apply(this, []);
try {
return Clazz.new_($I$(11,1).c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$com_sun_imageio_plugins_jpeg_JPEGImageWriter,[imageType, param, this]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam',  function (inData, param) {
if (Clazz.instanceOf(inData, "com.sun.imageio.plugins.jpeg.JPEGMetadata")) {
var jpegData=inData;
if (jpegData.isStream) {
return inData;
}}return null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (inData, imageType, param) {
p$2.setThreadLock.apply(this, []);
try {
return p$2.convertImageMetadataOnThread$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam.apply(this, [inData, imageType, param]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'convertImageMetadataOnThread$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (inData, imageType, param) {
if (Clazz.instanceOf(inData, "com.sun.imageio.plugins.jpeg.JPEGMetadata")) {
var jpegData=inData;
if (!jpegData.isStream) {
return inData;
} else {
return null;
}}if (inData.isStandardMetadataFormatSupported$()) {
var formatName="javax_imageio_1.0";
var tree=inData.getAsTree$S(formatName);
if (tree != null ) {
var jpegData=Clazz.new_($I$(11,1).c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$com_sun_imageio_plugins_jpeg_JPEGImageWriter,[imageType, param, this]);
try {
jpegData.setFromTree$S$org_w3c_dom_Node(formatName, tree);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
return null;
} else {
throw e;
}
}
return jpegData;
}}return null;
}, p$2);

Clazz.newMeth(C$, 'getNumThumbnailsSupported$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata',  function (imageType, param, streamMetadata, imageMetadata) {
if (p$2.jfifOK$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [imageType, param, streamMetadata, imageMetadata])) {
return 2147483647;
}return 0;
});

Clazz.newMeth(C$, 'getPreferredThumbnailSizes$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata',  function (imageType, param, streamMetadata, imageMetadata) {
if (p$2.jfifOK$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [imageType, param, streamMetadata, imageMetadata])) {
return C$.preferredThumbSizes.clone$();
}return null;
});

Clazz.newMeth(C$, 'jfifOK$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata',  function (imageType, param, streamMetadata, imageMetadata) {
if ((imageType != null ) && (!$I$(12).isJFIFcompliant$javax_imageio_ImageTypeSpecifier$Z(imageType, true)) ) {
return false;
}if (imageMetadata != null ) {
var metadata=null;
if (Clazz.instanceOf(imageMetadata, "com.sun.imageio.plugins.jpeg.JPEGMetadata")) {
metadata=imageMetadata;
} else {
metadata=this.convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageMetadata, imageType, param);
}if (metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(13)), true) == null ) {
return false;
}}return true;
}, p$2);

Clazz.newMeth(C$, 'canWriteRasters$',  function () {
return true;
});

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (streamMetadata, image, param) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
p$2.writeOnThread$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam.apply(this, [streamMetadata, image, param]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'writeOnThread$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (streamMetadata, image, param) {
if (this.ios == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Output has not been set!"]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image is null!"]);
}if (streamMetadata != null ) {
this.warningOccurred$I(1);
}var rasterOnly=image.hasRaster$();
var rimage=null;
if (rasterOnly) {
this.srcRas=image.getRaster$();
} else {
rimage=image.getRenderedImage$();
if (Clazz.instanceOf(rimage, "java.awt.image.BufferedImage")) {
this.srcRas=(rimage).getRaster$();
} else if (rimage.getNumXTiles$() == 1 && rimage.getNumYTiles$() == 1 ) {
this.srcRas=rimage.getTile$I$I(rimage.getMinTileX$(), rimage.getMinTileY$());
if (this.srcRas.getWidth$() != rimage.getWidth$() || this.srcRas.getHeight$() != rimage.getHeight$() ) {
this.srcRas=this.srcRas.createChild$I$I$I$I$I$I$IA(this.srcRas.getMinX$(), this.srcRas.getMinY$(), rimage.getWidth$(), rimage.getHeight$(), this.srcRas.getMinX$(), this.srcRas.getMinY$(), null);
}} else {
this.srcRas=rimage.getData$();
}}var numSrcBands=this.srcRas.getNumBands$();
this.indexed=false;
this.indexCM=null;
var cm=null;
var cs=null;
this.isAlphaPremultiplied=false;
this.srcCM=null;
if (!rasterOnly) {
cm=rimage.getColorModel$();
if (cm != null ) {
cs=cm.getColorSpace$();
if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
this.indexed=true;
this.indexCM=cm;
numSrcBands=cm.getNumComponents$();
}if (cm.isAlphaPremultiplied$()) {
this.isAlphaPremultiplied=true;
this.srcCM=cm;
}}}this.srcBands=$I$(12).bandOffsets[numSrcBands - 1];
var numBandsUsed=numSrcBands;
if (param != null ) {
var sBands=param.getSourceBands$();
if (sBands != null ) {
if (this.indexed) {
this.warningOccurred$I(8);
} else {
this.srcBands=sBands;
numBandsUsed=this.srcBands.length;
if (numBandsUsed > numSrcBands) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["ImageWriteParam specifies too many source bands"]);
}}}}var usingBandSubset=(numBandsUsed != numSrcBands);
var fullImage=((!rasterOnly) && (!usingBandSubset) );
var bandSizes=null;
if (!this.indexed) {
bandSizes=this.srcRas.getSampleModel$().getSampleSize$();
if (usingBandSubset) {
var temp=Clazz.array(Integer.TYPE, [numBandsUsed]);
for (var i=0; i < numBandsUsed; i++) {
temp[i]=bandSizes[this.srcBands[i]];
}
bandSizes=temp;
}} else {
var tempSize=this.srcRas.getSampleModel$().getSampleSize$();
bandSizes=Clazz.array(Integer.TYPE, [numSrcBands]);
for (var i=0; i < numSrcBands; i++) {
bandSizes[i]=tempSize[0];
}
}for (var i=0; i < bandSizes.length; i++) {
if (bandSizes[i] <= 0 || bandSizes[i] > 8 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal band size: should be 0 < size <= 8"]);
}if (this.indexed) {
bandSizes[i]=8;
}}
if (this.debug) {
System.out.println$S("numSrcBands is " + numSrcBands);
System.out.println$S("numBandsUsed is " + numBandsUsed);
System.out.println$S("usingBandSubset is " + usingBandSubset);
System.out.println$S("fullImage is " + fullImage);
System.out.print$S("Band sizes:");
for (var i=0; i < bandSizes.length; i++) {
System.out.print$S(" " + bandSizes[i]);
}
System.out.println$();
}var destType=null;
if (param != null ) {
destType=param.getDestinationType$();
if ((fullImage) && (destType != null ) ) {
this.warningOccurred$I(0);
destType=null;
}}this.sourceXOffset=this.srcRas.getMinX$();
this.sourceYOffset=this.srcRas.getMinY$();
var imageWidth=this.srcRas.getWidth$();
var imageHeight=this.srcRas.getHeight$();
this.sourceWidth=imageWidth;
this.sourceHeight=imageHeight;
var periodX=1;
var periodY=1;
var gridX=0;
var gridY=0;
var qTables=null;
var DCHuffmanTables=null;
var ACHuffmanTables=null;
var optimizeHuffman=false;
var jparam=null;
var progressiveMode=0;
if (param != null ) {
var sourceRegion=param.getSourceRegion$();
if (sourceRegion != null ) {
var imageBounds=Clazz.new_($I$(14,1).c$$I$I$I$I,[this.sourceXOffset, this.sourceYOffset, this.sourceWidth, this.sourceHeight]);
sourceRegion=sourceRegion.intersection$java_awt_Rectangle(imageBounds);
this.sourceXOffset=sourceRegion.x;
this.sourceYOffset=sourceRegion.y;
this.sourceWidth=sourceRegion.width;
this.sourceHeight=sourceRegion.height;
}if (this.sourceWidth + this.sourceXOffset > imageWidth) {
this.sourceWidth=imageWidth - this.sourceXOffset;
}if (this.sourceHeight + this.sourceYOffset > imageHeight) {
this.sourceHeight=imageHeight - this.sourceYOffset;
}periodX=param.getSourceXSubsampling$();
periodY=param.getSourceYSubsampling$();
gridX=param.getSubsamplingXOffset$();
gridY=param.getSubsamplingYOffset$();
switch (param.getCompressionMode$()) {
case 0:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JPEG compression cannot be disabled"]);
case 2:
var quality=param.getCompressionQuality$();
quality=$I$(12).convertToLinearQuality$F(quality);
qTables=Clazz.array($I$(4), [2]);
qTables[0]=$I$(4).K1Luminance.getScaledInstance$F$Z(quality, true);
qTables[1]=$I$(4).K2Chrominance.getScaledInstance$F$Z(quality, true);
break;
case 1:
qTables=Clazz.array($I$(4), [2]);
qTables[0]=$I$(4).K1Div2Luminance;
qTables[1]=$I$(4).K2Div2Chrominance;
break;
}
progressiveMode=param.getProgressiveMode$();
if (Clazz.instanceOf(param, "javax.imageio.plugins.jpeg.JPEGImageWriteParam")) {
jparam=param;
optimizeHuffman=jparam.getOptimizeHuffmanTables$();
}}var mdata=image.getMetadata$();
if (mdata != null ) {
if (Clazz.instanceOf(mdata, "com.sun.imageio.plugins.jpeg.JPEGMetadata")) {
this.metadata=mdata;
if (this.debug) {
System.out.println$S("We have metadata, and it\'s JPEG metadata");
}} else {
if (!rasterOnly) {
var type=destType;
if (type == null ) {
type=Clazz.new_($I$(15,1).c$$java_awt_image_RenderedImage,[rimage]);
}this.metadata=this.convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(mdata, type, param);
} else {
this.warningOccurred$I(7);
}}}this.ignoreJFIF=false;
this.ignoreAdobe=false;
this.newAdobeTransform=-1;
this.writeDefaultJFIF=false;
this.writeAdobe=false;
var inCsType=0;
var outCsType=0;
var jfif=null;
var adobe=null;
var sof=null;
if (this.metadata != null ) {
jfif=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(13)), true);
adobe=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(16)), true);
sof=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(17)), true);
}this.iccProfile=null;
this.convertTosRGB=false;
this.converted=null;
if (destType != null ) {
if (numBandsUsed != destType.getNumBands$()) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Number of source bands != number of destination bands"]);
}cs=destType.getColorModel$().getColorSpace$();
if (this.metadata != null ) {
p$2.checkSOFBands$com_sun_imageio_plugins_jpeg_SOFMarkerSegment$I.apply(this, [sof, numBandsUsed]);
p$2.checkJFIF$com_sun_imageio_plugins_jpeg_JFIFMarkerSegment$javax_imageio_ImageTypeSpecifier$Z.apply(this, [jfif, destType, false]);
if ((jfif != null ) && (this.ignoreJFIF == false ) ) {
if ($I$(12).isNonStandardICC$java_awt_color_ColorSpace(cs)) {
this.iccProfile=(cs).getProfile$();
}}p$2.checkAdobe$com_sun_imageio_plugins_jpeg_AdobeMarkerSegment$javax_imageio_ImageTypeSpecifier$Z.apply(this, [adobe, destType, false]);
} else {
if ($I$(12).isJFIFcompliant$javax_imageio_ImageTypeSpecifier$Z(destType, false)) {
this.writeDefaultJFIF=true;
if ($I$(12).isNonStandardICC$java_awt_color_ColorSpace(cs)) {
this.iccProfile=(cs).getProfile$();
}} else {
var transform=$I$(12).transformForType$javax_imageio_ImageTypeSpecifier$Z(destType, false);
if (transform != -1) {
this.writeAdobe=true;
this.newAdobeTransform=transform;
}}this.metadata=Clazz.new_($I$(11,1).c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$com_sun_imageio_plugins_jpeg_JPEGImageWriter,[destType, null, this]);
}inCsType=p$2.getSrcCSType$javax_imageio_ImageTypeSpecifier.apply(this, [destType]);
outCsType=p$2.getDefaultDestCSType$javax_imageio_ImageTypeSpecifier.apply(this, [destType]);
} else {
if (this.metadata == null ) {
if (fullImage) {
this.metadata=Clazz.new_([Clazz.new_($I$(15,1).c$$java_awt_image_RenderedImage,[rimage]), param, this],$I$(11,1).c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$com_sun_imageio_plugins_jpeg_JPEGImageWriter);
if (this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(13)), true) != null ) {
cs=rimage.getColorModel$().getColorSpace$();
if ($I$(12).isNonStandardICC$java_awt_color_ColorSpace(cs)) {
this.iccProfile=(cs).getProfile$();
}}inCsType=p$2.getSrcCSType$java_awt_image_RenderedImage.apply(this, [rimage]);
outCsType=p$2.getDefaultDestCSType$java_awt_image_RenderedImage.apply(this, [rimage]);
}} else {
p$2.checkSOFBands$com_sun_imageio_plugins_jpeg_SOFMarkerSegment$I.apply(this, [sof, numBandsUsed]);
if (fullImage) {
var inputType=Clazz.new_($I$(15,1).c$$java_awt_image_RenderedImage,[rimage]);
inCsType=p$2.getSrcCSType$java_awt_image_RenderedImage.apply(this, [rimage]);
if (cm != null ) {
var alpha=cm.hasAlpha$();
switch (cs.getType$()) {
case 6:
if (!alpha) {
outCsType=1;
} else {
if (jfif != null ) {
this.ignoreJFIF=true;
this.warningOccurred$I(5);
}}if ((adobe != null ) && (adobe.transform != 0) ) {
this.newAdobeTransform=0;
this.warningOccurred$I(6);
}break;
case 5:
if (!alpha) {
if (jfif != null ) {
outCsType=3;
if ($I$(12).isNonStandardICC$java_awt_color_ColorSpace(cs) || ((Clazz.instanceOf(cs, "java.awt.color.ICC_ColorSpace")) && (jfif.iccSegment != null ) ) ) {
this.iccProfile=(cs).getProfile$();
}} else if (adobe != null ) {
switch (adobe.transform) {
case 0:
outCsType=2;
break;
case 1:
outCsType=3;
break;
default:
this.warningOccurred$I(6);
this.newAdobeTransform=0;
outCsType=2;
break;
}
} else {
var outCS=sof.getIDencodedCSType$();
if (outCS != 0) {
outCsType=outCS;
} else {
var subsampled=p$2.isSubsampled$com_sun_imageio_plugins_jpeg_SOFMarkerSegment_ComponentSpecA.apply(this, [sof.componentSpecs]);
if (subsampled) {
outCsType=3;
} else {
outCsType=2;
}}}} else {
if (jfif != null ) {
this.ignoreJFIF=true;
this.warningOccurred$I(5);
}if (adobe != null ) {
if (adobe.transform != 0) {
this.newAdobeTransform=0;
this.warningOccurred$I(6);
}outCsType=6;
} else {
var outCS=sof.getIDencodedCSType$();
if (outCS != 0) {
outCsType=outCS;
} else {
var subsampled=p$2.isSubsampled$com_sun_imageio_plugins_jpeg_SOFMarkerSegment_ComponentSpecA.apply(this, [sof.componentSpecs]);
outCsType=subsampled ? 7 : 6;
}}}break;
case 13:
if (cs === $I$(18).getYCC$() ) {
if (!alpha) {
if (jfif != null ) {
this.convertTosRGB=true;
this.convertOp=Clazz.new_([cs, $I$(18).sRGB, null],$I$(19,1).c$$java_awt_color_ColorSpace$java_awt_color_ColorSpace$java_awt_RenderingHints);
outCsType=3;
} else if (adobe != null ) {
if (adobe.transform != 1) {
this.newAdobeTransform=1;
this.warningOccurred$I(6);
}outCsType=5;
} else {
outCsType=5;
}} else {
if (jfif != null ) {
this.ignoreJFIF=true;
this.warningOccurred$I(5);
} else if (adobe != null ) {
if (adobe.transform != 0) {
this.newAdobeTransform=0;
this.warningOccurred$I(6);
}}outCsType=10;
}}}
}}}}var metadataProgressive=false;
var scans=null;
if (this.metadata != null ) {
if (sof == null ) {
sof=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(17)), true);
}if ((sof != null ) && (sof.tag == 194) ) {
metadataProgressive=true;
if (progressiveMode == 3) {
scans=p$2.collectScans$com_sun_imageio_plugins_jpeg_JPEGMetadata$com_sun_imageio_plugins_jpeg_SOFMarkerSegment.apply(this, [this.metadata, sof]);
} else {
this.numScans=0;
}}if (jfif == null ) {
jfif=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(13)), true);
}}this.thumbnails=image.getThumbnails$();
var numThumbs=image.getNumThumbnails$();
this.forceJFIF=false;
if (!this.writeDefaultJFIF) {
if (this.metadata == null ) {
this.thumbnails=null;
if (numThumbs != 0) {
this.warningOccurred$I(10);
}} else {
if (fullImage == false ) {
if (jfif == null ) {
this.thumbnails=null;
if (numThumbs != 0) {
this.warningOccurred$I(10);
}}} else {
if (jfif == null ) {
if ((outCsType == 1) || (outCsType == 3) ) {
if (numThumbs != 0) {
this.forceJFIF=true;
this.warningOccurred$I(11);
}} else {
this.thumbnails=null;
if (numThumbs != 0) {
this.warningOccurred$I(10);
}}}}}}var haveMetadata=((this.metadata != null ) || this.writeDefaultJFIF || this.writeAdobe  );
var writeDQT=true;
var writeDHT=true;
var dqt=null;
var dht=null;
var restartInterval=0;
if (this.metadata != null ) {
dqt=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(20)), true);
dht=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(21)), true);
var dri=this.metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(22)), true);
if (dri != null ) {
restartInterval=dri.restartInterval;
}if (dqt == null ) {
writeDQT=false;
}if (dht == null ) {
writeDHT=false;
}}if (qTables == null ) {
if (dqt != null ) {
qTables=p$2.collectQTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata.apply(this, [this.metadata]);
} else if (this.streamQTables != null ) {
qTables=this.streamQTables;
} else if ((jparam != null ) && (jparam.areTablesSet$()) ) {
qTables=jparam.getQTables$();
} else {
qTables=$I$(12).getDefaultQTables$();
}}if (optimizeHuffman == false ) {
if ((dht != null ) && (metadataProgressive == false ) ) {
DCHuffmanTables=p$2.collectHTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata$Z.apply(this, [this.metadata, true]);
ACHuffmanTables=p$2.collectHTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata$Z.apply(this, [this.metadata, false]);
} else if (this.streamDCHuffmanTables != null ) {
DCHuffmanTables=this.streamDCHuffmanTables;
ACHuffmanTables=this.streamACHuffmanTables;
} else if ((jparam != null ) && (jparam.areTablesSet$()) ) {
DCHuffmanTables=jparam.getDCHuffmanTables$();
ACHuffmanTables=jparam.getACHuffmanTables$();
} else {
DCHuffmanTables=$I$(12).getDefaultHuffmanTables$Z(true);
ACHuffmanTables=$I$(12).getDefaultHuffmanTables$Z(false);
}}var componentIds=Clazz.array(Integer.TYPE, [numBandsUsed]);
var HsamplingFactors=Clazz.array(Integer.TYPE, [numBandsUsed]);
var VsamplingFactors=Clazz.array(Integer.TYPE, [numBandsUsed]);
var QtableSelectors=Clazz.array(Integer.TYPE, [numBandsUsed]);
for (var i=0; i < numBandsUsed; i++) {
componentIds[i]=i + 1;
HsamplingFactors[i]=1;
VsamplingFactors[i]=1;
QtableSelectors[i]=0;
}
if (sof != null ) {
for (var i=0; i < numBandsUsed; i++) {
if (this.forceJFIF == false ) {
componentIds[i]=sof.componentSpecs[i].componentId;
}HsamplingFactors[i]=sof.componentSpecs[i].HsamplingFactor;
VsamplingFactors[i]=sof.componentSpecs[i].VsamplingFactor;
QtableSelectors[i]=sof.componentSpecs[i].QtableSelector;
}
}this.sourceXOffset+=gridX;
this.sourceWidth-=gridX;
this.sourceYOffset+=gridY;
this.sourceHeight-=gridY;
var destWidth=((this.sourceWidth + periodX - 1)/periodX|0);
var destHeight=((this.sourceHeight + periodY - 1)/periodY|0);
var lineSize=this.sourceWidth * numBandsUsed;
var buffer=Clazz.new_($I$(23,1).c$$I,[lineSize]);
var bandOffs=$I$(12).bandOffsets[numBandsUsed - 1];
this.raster=$I$(24).createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point(buffer, this.sourceWidth, 1, lineSize, numBandsUsed, bandOffs, null);
this.processImageStarted$I(this.currentImage);
var aborted=false;
if (this.debug) {
System.out.println$S("inCsType: " + inCsType);
System.out.println$S("outCsType: " + outCsType);
}aborted=p$2.writeImage$J$BA$I$I$I$IA$I$I$I$I$I$javax_imageio_plugins_jpeg_JPEGQTableA$Z$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$Z$Z$Z$I$IA$IA$IA$IA$IA$Z$I.apply(this, [this.structPointer, buffer.getData$(), inCsType, outCsType, numBandsUsed, bandSizes, this.sourceWidth, destWidth, destHeight, periodX, periodY, qTables, writeDQT, DCHuffmanTables, ACHuffmanTables, writeDHT, optimizeHuffman, (progressiveMode != 0), this.numScans, scans, componentIds, HsamplingFactors, VsamplingFactors, QtableSelectors, haveMetadata, restartInterval]);
p$1.lock.apply(this.cbLock, []);
try {
if (aborted) {
this.processWriteAborted$();
} else {
this.processImageComplete$();
}this.ios.flush$();
} finally {
p$1.unlock.apply(this.cbLock, []);
}
++this.currentImage;
}, p$2);

Clazz.newMeth(C$, 'prepareWriteSequence$javax_imageio_metadata_IIOMetadata',  function (streamMetadata) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
p$2.prepareWriteSequenceOnThread$javax_imageio_metadata_IIOMetadata.apply(this, [streamMetadata]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'prepareWriteSequenceOnThread$javax_imageio_metadata_IIOMetadata',  function (streamMetadata) {
if (this.ios == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Output has not been set!"]);
}if (streamMetadata != null ) {
if (Clazz.instanceOf(streamMetadata, "com.sun.imageio.plugins.jpeg.JPEGMetadata")) {
var jmeta=streamMetadata;
if (jmeta.isStream == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid stream metadata object."]);
}if (this.currentImage != 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JPEG Stream metadata must precede all images"]);
}if (this.sequencePrepared == true ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Stream metadata already written!"]);
}this.streamQTables=p$2.collectQTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata.apply(this, [jmeta]);
if (this.debug) {
System.out.println$S("after collecting from stream metadata, " + "streamQTables.length is " + this.streamQTables.length );
}if (this.streamQTables == null ) {
this.streamQTables=$I$(12).getDefaultQTables$();
}this.streamDCHuffmanTables=p$2.collectHTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata$Z.apply(this, [jmeta, true]);
if (this.streamDCHuffmanTables == null ) {
this.streamDCHuffmanTables=$I$(12).getDefaultHuffmanTables$Z(true);
}this.streamACHuffmanTables=p$2.collectHTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata$Z.apply(this, [jmeta, false]);
if (this.streamACHuffmanTables == null ) {
this.streamACHuffmanTables=$I$(12).getDefaultHuffmanTables$Z(false);
}p$2.writeTables$J$javax_imageio_plugins_jpeg_JPEGQTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA.apply(this, [this.structPointer, this.streamQTables, this.streamDCHuffmanTables, this.streamACHuffmanTables]);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Stream metadata must be JPEG metadata"]);
}}this.sequencePrepared=true;
}, p$2);

Clazz.newMeth(C$, 'writeToSequence$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (image, param) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
if (this.sequencePrepared == false ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["sequencePrepared not called!"]);
}this.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, image, param);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'endWriteSequence$',  function () {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
if (this.sequencePrepared == false ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["sequencePrepared not called!"]);
}this.sequencePrepared=false;
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'abort$',  function () {
p$2.setThreadLock.apply(this, []);
try {
C$.superclazz.prototype.abort$.apply(this, []);
p$2.abortWrite$J.apply(this, [this.structPointer]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'resetInternalState',  function () {
p$2.resetWriter$J.apply(this, [this.structPointer]);
this.srcRas=null;
this.raster=null;
this.convertTosRGB=false;
this.currentImage=0;
this.numScans=0;
this.metadata=null;
}, p$2);

Clazz.newMeth(C$, 'reset$',  function () {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
C$.superclazz.prototype.reset$.apply(this, []);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'dispose$',  function () {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
if (Long.$ne(this.structPointer,0 )) {
this.disposerRecord.dispose$();
this.structPointer=0;
}} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'warningOccurred$I',  function (code) {
p$1.lock.apply(this.cbLock, []);
try {
if ((code < 0) || (code > 15) ) {
throw Clazz.new_($I$(25,1).c$$S,["Invalid warning index"]);
}this.processWarningOccurred$I$S$S(this.currentImage, "com.sun.imageio.plugins.jpeg.JPEGImageWriterResources", Integer.toString$I(code));
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'warningWithMessage$S',  function (msg) {
p$1.lock.apply(this.cbLock, []);
try {
this.processWarningOccurred$I$S(this.currentImage, msg);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'thumbnailStarted$I',  function (thumbnailIndex) {
p$1.lock.apply(this.cbLock, []);
try {
this.processThumbnailStarted$I$I(this.currentImage, thumbnailIndex);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'thumbnailProgress$F',  function (percentageDone) {
p$1.lock.apply(this.cbLock, []);
try {
this.processThumbnailProgress$F(percentageDone);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'thumbnailComplete$',  function () {
p$1.lock.apply(this.cbLock, []);
try {
this.processThumbnailComplete$();
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'checkSOFBands$com_sun_imageio_plugins_jpeg_SOFMarkerSegment$I',  function (sof, numBandsUsed) {
if (sof != null ) {
if (sof.componentSpecs.length != numBandsUsed) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Metadata components != number of destination bands"]);
}}}, p$2);

Clazz.newMeth(C$, 'checkJFIF$com_sun_imageio_plugins_jpeg_JFIFMarkerSegment$javax_imageio_ImageTypeSpecifier$Z',  function (jfif, type, input) {
if (jfif != null ) {
if (!$I$(12).isJFIFcompliant$javax_imageio_ImageTypeSpecifier$Z(type, input)) {
this.ignoreJFIF=true;
this.warningOccurred$I(input ? 5 : 3);
}}}, p$2);

Clazz.newMeth(C$, 'checkAdobe$com_sun_imageio_plugins_jpeg_AdobeMarkerSegment$javax_imageio_ImageTypeSpecifier$Z',  function (adobe, type, input) {
if (adobe != null ) {
var rightTransform=$I$(12).transformForType$javax_imageio_ImageTypeSpecifier$Z(type, input);
if (adobe.transform != rightTransform) {
this.warningOccurred$I(input ? 6 : 4);
if (rightTransform == -1) {
this.ignoreAdobe=true;
} else {
this.newAdobeTransform=rightTransform;
}}}}, p$2);

Clazz.newMeth(C$, 'collectScans$com_sun_imageio_plugins_jpeg_JPEGMetadata$com_sun_imageio_plugins_jpeg_SOFMarkerSegment',  function (metadata, sof) {
var segments=Clazz.new_($I$(26,1));
var SCAN_SIZE=9;
var MAX_COMPS_PER_SCAN=4;
for (var iter=metadata.markerSequence.iterator$(); iter.hasNext$(); ) {
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.SOSMarkerSegment")) {
segments.add$O(seg);
}}
var retval=null;
this.numScans=0;
if (!segments.isEmpty$()) {
this.numScans=segments.size$();
retval=Clazz.array(Integer.TYPE, [this.numScans * SCAN_SIZE]);
var index=0;
for (var i=0; i < this.numScans; i++) {
var sos=segments.get$I(i);
retval[index++]=sos.componentSpecs.length;
for (var j=0; j < MAX_COMPS_PER_SCAN; j++) {
if (j < sos.componentSpecs.length) {
var compSel=sos.componentSpecs[j].componentSelector;
for (var k=0; k < sof.componentSpecs.length; k++) {
if (compSel == sof.componentSpecs[k].componentId) {
retval[index++]=k;
break;
}}
} else {
retval[index++]=0;
}}
retval[index++]=sos.startSpectralSelection;
retval[index++]=sos.endSpectralSelection;
retval[index++]=sos.approxHigh;
retval[index++]=sos.approxLow;
}
}return retval;
}, p$2);

Clazz.newMeth(C$, 'collectQTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata',  function (metadata) {
var tables=Clazz.new_($I$(26,1));
var iter=metadata.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.DQTMarkerSegment")) {
var dqt=seg;
tables.addAll$java_util_Collection(dqt.tables);
}}
var retval=null;
if (tables.size$() != 0) {
retval=Clazz.array($I$(4), [tables.size$()]);
for (var i=0; i < retval.length; i++) {
retval[i]=Clazz.new_([(tables.get$I(i)).data],$I$(4,1).c$$IA);
}
}return retval;
}, p$2);

Clazz.newMeth(C$, 'collectHTablesFromMetadata$com_sun_imageio_plugins_jpeg_JPEGMetadata$Z',  function (metadata, wantDC) {
var tables=Clazz.new_($I$(26,1));
var iter=metadata.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.DHTMarkerSegment")) {
var dht=seg;
for (var i=0; i < dht.tables.size$(); i++) {
var htable=dht.tables.get$I(i);
if (htable.tableClass == (wantDC ? 0 : 1)) {
tables.add$O(htable);
}}
}}
var retval=null;
if (tables.size$() != 0) {
var htables=Clazz.array($I$(27), [tables.size$()]);
tables.toArray$OA(htables);
retval=Clazz.array($I$(5), [tables.size$()]);
for (var i=0; i < retval.length; i++) {
retval[i]=null;
for (var j=0; j < tables.size$(); j++) {
if (htables[j].tableID == i) {
if (retval[i] != null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Metadata has duplicate Htables!"]);
}retval[i]=Clazz.new_($I$(5,1).c$$HA$HA,[htables[j].numCodes, htables[j].values]);
}}
}
}return retval;
}, p$2);

Clazz.newMeth(C$, 'getSrcCSType$javax_imageio_ImageTypeSpecifier',  function (type) {
return p$2.getSrcCSType$java_awt_image_ColorModel.apply(this, [type.getColorModel$()]);
}, p$2);

Clazz.newMeth(C$, 'getSrcCSType$java_awt_image_RenderedImage',  function (rimage) {
return p$2.getSrcCSType$java_awt_image_ColorModel.apply(this, [rimage.getColorModel$()]);
}, p$2);

Clazz.newMeth(C$, 'getSrcCSType$java_awt_image_ColorModel',  function (cm) {
var retval=0;
if (cm != null ) {
var alpha=cm.hasAlpha$();
var cs=cm.getColorSpace$();
switch (cs.getType$()) {
case 6:
retval=1;
break;
case 5:
if (alpha) {
retval=6;
} else {
retval=2;
}break;
case 3:
if (alpha) {
retval=7;
} else {
retval=3;
}break;
case 13:
if (cs === $I$(18).getYCC$() ) {
if (alpha) {
retval=10;
} else {
retval=5;
}}case 9:
retval=4;
break;
}
}return retval;
}, p$2);

Clazz.newMeth(C$, 'getDestCSType$javax_imageio_ImageTypeSpecifier',  function (destType) {
var cm=destType.getColorModel$();
var alpha=cm.hasAlpha$();
var cs=cm.getColorSpace$();
var retval=0;
switch (cs.getType$()) {
case 6:
retval=1;
break;
case 5:
if (alpha) {
retval=6;
} else {
retval=2;
}break;
case 3:
if (alpha) {
retval=7;
} else {
retval=3;
}break;
case 13:
if (cs === $I$(18).getYCC$() ) {
if (alpha) {
retval=10;
} else {
retval=5;
}}case 9:
retval=4;
break;
}
return retval;
}, p$2);

Clazz.newMeth(C$, 'getDefaultDestCSType$javax_imageio_ImageTypeSpecifier',  function (type) {
return p$2.getDefaultDestCSType$java_awt_image_ColorModel.apply(this, [type.getColorModel$()]);
}, p$2);

Clazz.newMeth(C$, 'getDefaultDestCSType$java_awt_image_RenderedImage',  function (rimage) {
return p$2.getDefaultDestCSType$java_awt_image_ColorModel.apply(this, [rimage.getColorModel$()]);
}, p$2);

Clazz.newMeth(C$, 'getDefaultDestCSType$java_awt_image_ColorModel',  function (cm) {
var retval=0;
if (cm != null ) {
var alpha=cm.hasAlpha$();
var cs=cm.getColorSpace$();
switch (cs.getType$()) {
case 6:
retval=1;
break;
case 5:
if (alpha) {
retval=7;
} else {
retval=3;
}break;
case 3:
if (alpha) {
retval=7;
} else {
retval=3;
}break;
case 13:
if (cs === $I$(18).getYCC$() ) {
if (alpha) {
retval=10;
} else {
retval=5;
}}case 9:
retval=11;
break;
}
}return retval;
}, p$2);

Clazz.newMeth(C$, 'isSubsampled$com_sun_imageio_plugins_jpeg_SOFMarkerSegment_ComponentSpecA',  function (specs) {
var hsamp0=specs[0].HsamplingFactor;
var vsamp0=specs[0].VsamplingFactor;
for (var i=1; i < specs.length; i++) {
if ((specs[i].HsamplingFactor != hsamp0) || (specs[i].HsamplingFactor != hsamp0) ) return true;
}
return false;
}, p$2);

Clazz.newMeth(C$, 'initWriterIDs$Class$Class',  function (qTableClass, huffClass) {
alert('native method must be replaced! initWriterIDs');
}
, 2);

Clazz.newMeth(C$, 'initJPEGImageWriter',  function () {
alert('native method must be replaced! initJPEGImageWriter');
}
, p$2);

Clazz.newMeth(C$, 'setDest$J',  function (structPointer) {
alert('native method must be replaced! setDest');
}
, p$2);

Clazz.newMeth(C$, 'writeImage$J$BA$I$I$I$IA$I$I$I$I$I$javax_imageio_plugins_jpeg_JPEGQTableA$Z$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$Z$Z$Z$I$IA$IA$IA$IA$IA$Z$I',  function (structPointer, data, inCsType, outCsType, numBands, bandSizes, srcWidth, destWidth, destHeight, stepX, stepY, qtables, writeDQT, DCHuffmanTables, ACHuffmanTables, writeDHT, optimizeHuffman, progressive, numScans, scans, componentIds, HsamplingFactors, VsamplingFactors, QtableSelectors, haveMetadata, restartInterval) {
alert('native method must be replaced! writeImage');
}
, p$2);

Clazz.newMeth(C$, 'writeMetadata',  function () {
if (this.metadata == null ) {
if (this.writeDefaultJFIF) {
$I$(13).writeDefaultJFIF$javax_imageio_stream_ImageOutputStream$java_util_List$java_awt_color_ICC_Profile$com_sun_imageio_plugins_jpeg_JPEGImageWriter(this.ios, this.thumbnails, this.iccProfile, this);
}if (this.writeAdobe) {
$I$(16).writeAdobeSegment$javax_imageio_stream_ImageOutputStream$I(this.ios, this.newAdobeTransform);
}} else {
this.metadata.writeToStream$javax_imageio_stream_ImageOutputStream$Z$Z$java_util_List$java_awt_color_ICC_Profile$Z$I$com_sun_imageio_plugins_jpeg_JPEGImageWriter(this.ios, this.ignoreJFIF, this.forceJFIF, this.thumbnails, this.iccProfile, this.ignoreAdobe, this.newAdobeTransform, this);
}}, p$2);

Clazz.newMeth(C$, 'writeTables$J$javax_imageio_plugins_jpeg_JPEGQTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA',  function (structPointer, qtables, DCHuffmanTables, ACHuffmanTables) {
alert('native method must be replaced! writeTables');
}
, p$2);

Clazz.newMeth(C$, 'grabPixels$I',  function (y) {
var sourceLine=null;
if (this.indexed) {
sourceLine=this.srcRas.createChild$I$I$I$I$I$I$IA(this.sourceXOffset, this.sourceYOffset + y, this.sourceWidth, 1, 0, 0, Clazz.array(Integer.TYPE, -1, [0]));
var forceARGB=(this.indexCM.getTransparency$() != 1);
var temp=this.indexCM.convertToIntDiscrete$java_awt_image_Raster$Z(sourceLine, forceARGB);
sourceLine=temp.getRaster$();
} else {
sourceLine=this.srcRas.createChild$I$I$I$I$I$I$IA(this.sourceXOffset, this.sourceYOffset + y, this.sourceWidth, 1, 0, 0, this.srcBands);
}if (this.convertTosRGB) {
if (this.debug) {
System.out.println$S("Converting to sRGB");
}this.converted=this.convertOp.filter$java_awt_image_Raster$java_awt_image_WritableRaster(sourceLine, this.converted);
sourceLine=this.converted;
}if (this.isAlphaPremultiplied) {
var wr=sourceLine.createCompatibleWritableRaster$();
var data=null;
data=sourceLine.getPixels$I$I$I$I$IA(sourceLine.getMinX$(), sourceLine.getMinY$(), sourceLine.getWidth$(), sourceLine.getHeight$(), data);
wr.setPixels$I$I$I$I$IA(sourceLine.getMinX$(), sourceLine.getMinY$(), sourceLine.getWidth$(), sourceLine.getHeight$(), data);
this.srcCM.coerceData$java_awt_image_WritableRaster$Z(wr, false);
sourceLine=wr.createChild$I$I$I$I$I$I$IA(wr.getMinX$(), wr.getMinY$(), wr.getWidth$(), wr.getHeight$(), 0, 0, this.srcBands);
}this.raster.setRect$java_awt_image_Raster(sourceLine);
if ((y > 7) && (y % 8 == 0) ) {
p$1.lock.apply(this.cbLock, []);
try {
this.processImageProgress$F(y / this.sourceHeight * 100.0);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
}}, p$2);

Clazz.newMeth(C$, 'abortWrite$J',  function (structPointer) {
alert('native method must be replaced! abortWrite');
}
, p$2);

Clazz.newMeth(C$, 'resetWriter$J',  function (structPointer) {
alert('native method must be replaced! resetWriter');
}
, p$2);

Clazz.newMeth(C$, 'disposeWriter$J',  function (structPointer) {
alert('native method must be replaced! disposeWriter');
}
, 2);

Clazz.newMeth(C$, 'writeOutputData$BA$I$I',  function (data, offset, len) {
p$1.lock.apply(this.cbLock, []);
try {
this.ios.write$BA$I$I(data, offset, len);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
}, p$2);

Clazz.newMeth(C$, 'setThreadLock',  function () {
var currThread=$I$(28).currentThread$();
if (this.theThread != null ) {
if (this.theThread !== currThread ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Attempt to use instance of " + this + " locked on thread " + this.theThread + " from thread " + currThread ]);
} else {
++this.theLockCount;
}} else {
this.theThread=currThread;
this.theLockCount=1;
}}, p$2);

Clazz.newMeth(C$, 'clearThreadLock',  function () {
var currThread=$I$(28).currentThread$();
if (this.theThread == null  || this.theThread !== currThread  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Attempt to clear thread lock form wrong thread. Locked thread: " + this.theThread + "; current thread: " + currThread ]);
}--this.theLockCount;
if (this.theLockCount == 0) {
this.theThread=null;
}}, p$2);

C$.$static$=function(){C$.$static$=0;
{
$I$(3,"doPrivileged$java_security_PrivilegedAction",[((P$.JPEGImageWriter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JPEGImageWriter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
System.loadLibrary$S("jpeg");
return null;
});
})()
), Clazz.new_(P$.JPEGImageWriter$1.$init$,[this, null]))]);
C$.initWriterIDs$Class$Class(Clazz.getClass($I$(4)), Clazz.getClass($I$(5)));
};
C$.preferredThumbSizes=Clazz.array($I$(6), -1, [Clazz.new_($I$(6,1).c$$I$I,[1, 1]), Clazz.new_($I$(6,1).c$$I$I,[255, 255])]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGImageWriter, "JPEGWriterDisposerRecord", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'sun.java2d.DisposerRecord');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['pData']]]

Clazz.newMeth(C$, 'c$$J',  function (pData) {
;C$.$init$.apply(this);
this.pData=pData;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (Long.$ne(this.pData,0 )) {
$I$(1).disposeWriter$J(this.pData);
this.pData=0;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGImageWriter, "CallBackLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['State',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lockState','com.sun.imageio.plugins.jpeg.JPEGImageWriter.CallBackLock.State']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.lockState=$I$(2).Unlocked;
}, 1);

Clazz.newMeth(C$, 'check$',  function () {
if (this.lockState !== $I$(2).Unlocked ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Access to the writer is not allowed"]);
}});

Clazz.newMeth(C$, 'lock',  function () {
this.lockState=$I$(2).Locked;
}, p$1);

Clazz.newMeth(C$, 'unlock',  function () {
this.lockState=$I$(2).Unlocked;
}, p$1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.JPEGImageWriter.CallBackLock, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Unlocked", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Locked", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

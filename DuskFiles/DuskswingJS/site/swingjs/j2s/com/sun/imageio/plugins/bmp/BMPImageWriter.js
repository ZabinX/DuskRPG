(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.bmp"),p$1={},I$=[[0,'com.sun.imageio.plugins.common.I18N','java.nio.ByteOrder','javax.imageio.plugins.bmp.BMPImageWriteParam','com.sun.imageio.plugins.bmp.BMPMetadata','com.sun.imageio.plugins.bmp.BMPCompressionTypes','com.sun.imageio.plugins.common.ImageUtil','java.awt.Rectangle','javax.imageio.ImageTypeSpecifier','java.awt.image.DataBuffer','java.io.ByteArrayOutputStream','javax.imageio.ImageIO',['com.sun.imageio.plugins.bmp.BMPImageWriter','.IIOWriteProgressAdapter']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BMPImageWriter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.imageio.ImageWriter', 'com.sun.imageio.plugins.bmp.BMPConstants');
C$.$classes$=[['IIOWriteProgressAdapter',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
this.embedded_stream=null;
this.compImageSize=0;
},1);

C$.$fields$=[['Z',['isTopDown'],'I',['version','compressionType','w','h','compImageSize'],'O',['stream','javax.imageio.stream.ImageOutputStream','embedded_stream','java.io.ByteArrayOutputStream','bitMasks','int[]','+bitPos','bpixels','byte[]','spixels','short[]','ipixels','int[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi',  function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutput$O',  function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("BMPImageWriter0")]);
this.stream=output;
this.stream.setByteOrder$java_nio_ByteOrder($I$(2).LITTLE_ENDIAN);
} else this.stream=null;
});

Clazz.newMeth(C$, 'getDefaultWriteParam$',  function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam',  function (param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (imageType, param) {
var meta=Clazz.new_($I$(4,1));
meta.bmpVersion="BMP v. 3.x";
meta.compression=this.getPreferredCompressionType$javax_imageio_ImageTypeSpecifier(imageType);
if (param != null  && param.getCompressionMode$() == 2 ) {
meta.compression=$I$(5,"getType$S",[param.getCompressionType$()]);
}meta.bitsPerPixel=($s$[0] = imageType.getColorModel$().getPixelSize$(), $s$[0]);
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
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("BMPImageWriter7")]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("BMPImageWriter8")]);
}this.clearAbortRequest$();
this.processImageStarted$I(0);
if (param == null ) param=this.getDefaultWriteParam$();
var bmpParam=param;
var bitsPerPixel=24;
var isPalette=false;
var paletteEntries=0;
var icm=null;
var input=null;
var inputRaster=null;
var writeRaster=image.hasRaster$();
var sourceRegion=param.getSourceRegion$();
var sampleModel=null;
var colorModel=null;
this.compImageSize=0;
if (writeRaster) {
inputRaster=image.getRaster$();
sampleModel=inputRaster.getSampleModel$();
colorModel=$I$(6).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(null, sampleModel);
if (sourceRegion == null ) sourceRegion=inputRaster.getBounds$();
 else sourceRegion=sourceRegion.intersection$java_awt_Rectangle(inputRaster.getBounds$());
} else {
input=image.getRenderedImage$();
sampleModel=input.getSampleModel$();
colorModel=input.getColorModel$();
var rect=Clazz.new_([input.getMinX$(), input.getMinY$(), input.getWidth$(), input.getHeight$()],$I$(7,1).c$$I$I$I$I);
if (sourceRegion == null ) sourceRegion=rect;
 else sourceRegion=sourceRegion.intersection$java_awt_Rectangle(rect);
}var imageMetadata=image.getMetadata$();
var bmpImageMetadata=null;
if (imageMetadata != null  && Clazz.instanceOf(imageMetadata, "com.sun.imageio.plugins.bmp.BMPMetadata") ) {
bmpImageMetadata=imageMetadata;
} else {
var imageType=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
bmpImageMetadata=this.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageType, param);
}if (sourceRegion.isEmpty$()) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("BMPImageWrite0")]);
var scaleX=param.getSourceXSubsampling$();
var scaleY=param.getSourceYSubsampling$();
var xOffset=param.getSubsamplingXOffset$();
var yOffset=param.getSubsamplingYOffset$();
var dataType=sampleModel.getDataType$();
sourceRegion.translate$I$I(xOffset, yOffset);
sourceRegion.width-=xOffset;
sourceRegion.height-=yOffset;
var minX=(sourceRegion.x/scaleX|0);
var minY=(sourceRegion.y/scaleY|0);
this.w=((sourceRegion.width + scaleX - 1)/scaleX|0);
this.h=((sourceRegion.height + scaleY - 1)/scaleY|0);
xOffset=sourceRegion.x % scaleX;
yOffset=sourceRegion.y % scaleY;
var destinationRegion=Clazz.new_($I$(7,1).c$$I$I$I$I,[minX, minY, this.w, this.h]);
var noTransform=destinationRegion.equals$O(sourceRegion);
var sourceBands=param.getSourceBands$();
var noSubband=true;
var numBands=sampleModel.getNumBands$();
if (sourceBands != null ) {
sampleModel=sampleModel.createSubsetSampleModel$IA(sourceBands);
colorModel=null;
noSubband=false;
numBands=sampleModel.getNumBands$();
} else {
sourceBands=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) sourceBands[i]=i;

}var bandOffsets=null;
var bgrOrder=true;
if (Clazz.instanceOf(sampleModel, "java.awt.image.ComponentSampleModel")) {
bandOffsets=(sampleModel).getBandOffsets$();
if (Clazz.instanceOf(sampleModel, "java.awt.image.BandedSampleModel")) {
bgrOrder=false;
} else {
for (var i=0; i < bandOffsets.length; i++) {
bgrOrder=!!(bgrOrder&((bandOffsets[i] == (bandOffsets.length - i - 1 ))));
}
}} else {
if (Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel")) {
var bitOffsets=(sampleModel).getBitOffsets$();
for (var i=0; i < bitOffsets.length - 1; i++) {
bgrOrder=!!(bgrOrder&(bitOffsets[i] > bitOffsets[i + 1]));
}
}}if (bandOffsets == null ) {
bandOffsets=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) bandOffsets[i]=i;

}noTransform=!!(noTransform&(bgrOrder));
var sampleSize=sampleModel.getSampleSize$();
var destScanlineBytes=this.w * numBands;
switch (bmpParam.getCompressionMode$()) {
case 2:
this.compressionType=$I$(5,"getType$S",[bmpParam.getCompressionType$()]);
break;
case 3:
this.compressionType=bmpImageMetadata.compression;
break;
case 1:
this.compressionType=this.getPreferredCompressionType$java_awt_image_ColorModel$java_awt_image_SampleModel(colorModel, sampleModel);
break;
default:
this.compressionType=0;
}
if (!this.canEncodeImage$I$java_awt_image_ColorModel$java_awt_image_SampleModel(this.compressionType, colorModel, sampleModel)) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Image can not be encoded with compression type " + $I$(5).getName$I(this.compressionType)]);
}var r=null;
var g=null;
var b=null;
var a=null;
if (this.compressionType == 3) {
bitsPerPixel=$I$(9,"getDataTypeSize$I",[sampleModel.getDataType$()]);
if (bitsPerPixel != 16 && bitsPerPixel != 32 ) {
bitsPerPixel=32;
noTransform=false;
}destScanlineBytes=this.w * bitsPerPixel + 7 >> 3;
isPalette=true;
paletteEntries=3;
r=Clazz.array(Byte.TYPE, [paletteEntries]);
g=Clazz.array(Byte.TYPE, [paletteEntries]);
b=Clazz.array(Byte.TYPE, [paletteEntries]);
a=Clazz.array(Byte.TYPE, [paletteEntries]);
var rmask=16711680;
var gmask=65280;
var bmask=255;
if (bitsPerPixel == 16) {
if (Clazz.instanceOf(colorModel, "java.awt.image.DirectColorModel")) {
var dcm=colorModel;
rmask=dcm.getRedMask$();
gmask=dcm.getGreenMask$();
bmask=dcm.getBlueMask$();
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Image can not be encoded with " + "compression type " + $I$(5).getName$I(this.compressionType) ]);
}}this.writeMaskToPalette$I$I$BA$BA$BA$BA(rmask, 0, r, g, b, a);
this.writeMaskToPalette$I$I$BA$BA$BA$BA(gmask, 1, r, g, b, a);
this.writeMaskToPalette$I$I$BA$BA$BA$BA(bmask, 2, r, g, b, a);
if (!noTransform) {
this.bitMasks=Clazz.array(Integer.TYPE, [3]);
this.bitMasks[0]=rmask;
this.bitMasks[1]=gmask;
this.bitMasks[2]=bmask;
this.bitPos=Clazz.array(Integer.TYPE, [3]);
this.bitPos[0]=p$1.firstLowBit$I.apply(this, [rmask]);
this.bitPos[1]=p$1.firstLowBit$I.apply(this, [gmask]);
this.bitPos[2]=p$1.firstLowBit$I.apply(this, [bmask]);
}if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
icm=colorModel;
}} else {
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
isPalette=true;
icm=colorModel;
paletteEntries=icm.getMapSize$();
if (paletteEntries <= 2) {
bitsPerPixel=1;
destScanlineBytes=this.w + 7 >> 3;
} else if (paletteEntries <= 16) {
bitsPerPixel=4;
destScanlineBytes=this.w + 1 >> 1;
} else if (paletteEntries <= 256) {
bitsPerPixel=8;
} else {
bitsPerPixel=24;
isPalette=false;
paletteEntries=0;
destScanlineBytes=this.w * 3;
}if (isPalette == true ) {
r=Clazz.array(Byte.TYPE, [paletteEntries]);
g=Clazz.array(Byte.TYPE, [paletteEntries]);
b=Clazz.array(Byte.TYPE, [paletteEntries]);
a=Clazz.array(Byte.TYPE, [paletteEntries]);
icm.getAlphas$BA(a);
icm.getReds$BA(r);
icm.getGreens$BA(g);
icm.getBlues$BA(b);
}} else {
if (numBands == 1) {
isPalette=true;
paletteEntries=256;
bitsPerPixel=sampleSize[0];
destScanlineBytes=(this.w * bitsPerPixel + 7 >> 3);
r=Clazz.array(Byte.TYPE, [256]);
g=Clazz.array(Byte.TYPE, [256]);
b=Clazz.array(Byte.TYPE, [256]);
a=Clazz.array(Byte.TYPE, [256]);
for (var i=0; i < 256; i++) {
r[i]=(i|0);
g[i]=(i|0);
b[i]=(i|0);
a[i]=-1;
}
} else {
if (Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel") && noSubband ) {
var sample_sizes=sampleModel.getSampleSize$();
bitsPerPixel=0;
for (var size, $size = 0, $$size = sample_sizes; $size<$$size.length&&((size=($$size[$size])),1);$size++) {
bitsPerPixel+=size;
}
bitsPerPixel=p$1.roundBpp$I.apply(this, [bitsPerPixel]);
if (bitsPerPixel != $I$(9,"getDataTypeSize$I",[sampleModel.getDataType$()])) {
noTransform=false;
}destScanlineBytes=this.w * bitsPerPixel + 7 >> 3;
}}}}var fileSize=0;
var offset=0;
var headerSize=0;
var imageSize=0;
var xPelsPerMeter=0;
var yPelsPerMeter=0;
var colorsUsed=0;
var colorsImportant=paletteEntries;
var padding=destScanlineBytes % 4;
if (padding != 0) {
padding=4 - padding;
}offset=54 + paletteEntries * 4;
imageSize=(destScanlineBytes + padding) * this.h;
fileSize=imageSize + offset;
headerSize=40;
var headPos=this.stream.getStreamPosition$();
p$1.writeFileHeader$I$I.apply(this, [fileSize, offset]);
if (this.compressionType == 0 || this.compressionType == 3 ) {
this.isTopDown=bmpParam.isTopDown$();
} else {
this.isTopDown=false;
}p$1.writeInfoHeader$I$I.apply(this, [headerSize, bitsPerPixel]);
this.stream.writeInt$I(this.compressionType);
this.stream.writeInt$I(imageSize);
this.stream.writeInt$I(xPelsPerMeter);
this.stream.writeInt$I(yPelsPerMeter);
this.stream.writeInt$I(colorsUsed);
this.stream.writeInt$I(colorsImportant);
if (isPalette == true ) {
if (this.compressionType == 3) {
for (var i=0; i < 3; i++) {
var mask=(a[i] & 255) + ((r[i] & 255) * 256) + ((g[i] & 255) * 65536) + ((b[i] & 255) * 16777216) ;
this.stream.writeInt$I(mask);
}
} else {
for (var i=0; i < paletteEntries; i++) {
this.stream.writeByte$I(b[i]);
this.stream.writeByte$I(g[i]);
this.stream.writeByte$I(r[i]);
this.stream.writeByte$I(a[i]);
}
}}var scanlineBytes=this.w * numBands;
var pixels=Clazz.array(Integer.TYPE, [scanlineBytes * scaleX]);
this.bpixels=Clazz.array(Byte.TYPE, [destScanlineBytes]);
var l;
if (this.compressionType == 4 || this.compressionType == 5 ) {
this.embedded_stream=Clazz.new_($I$(10,1));
p$1.writeEmbedded$javax_imageio_IIOImage$javax_imageio_ImageWriteParam.apply(this, [image, bmpParam]);
this.embedded_stream.flush$();
imageSize=this.embedded_stream.size$();
var endPos=this.stream.getStreamPosition$();
fileSize=(offset + imageSize);
this.stream.seek$J(headPos);
p$1.writeSize$I$I.apply(this, [fileSize, 2]);
this.stream.seek$J(headPos);
p$1.writeSize$I$I.apply(this, [imageSize, 34]);
this.stream.seek$J(endPos);
this.stream.write$BA(this.embedded_stream.toByteArray$());
this.embedded_stream=null;
if (this.abortRequested$()) {
this.processWriteAborted$();
} else {
this.processImageComplete$();
this.stream.flushBefore$J(this.stream.getStreamPosition$());
}return;
}var maxBandOffset=bandOffsets[0];
for (var i=1; i < bandOffsets.length; i++) if (bandOffsets[i] > maxBandOffset) maxBandOffset=bandOffsets[i];

var pixel=Clazz.array(Integer.TYPE, [maxBandOffset + 1]);
var destScanlineLength=destScanlineBytes;
if (noTransform && noSubband ) {
destScanlineLength=(destScanlineBytes/($I$(9).getDataTypeSize$I(dataType) >> 3)|0);
}for (var i=0; i < this.h; i++) {
if (this.abortRequested$()) {
break;
}var row=minY + i;
if (!this.isTopDown) row=minY + this.h - i - 1;
var src=inputRaster;
var srcRect=Clazz.new_([minX * scaleX + xOffset, row * scaleY + yOffset, (this.w - 1) * scaleX + 1, 1],$I$(7,1).c$$I$I$I$I);
if (!writeRaster) src=input.getData$java_awt_Rectangle(srcRect);
if (noTransform && noSubband ) {
var sm=src.getSampleModel$();
var pos=0;
var startX=srcRect.x - src.getSampleModelTranslateX$();
var startY=srcRect.y - src.getSampleModelTranslateY$();
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
var csm=sm;
pos=csm.getOffset$I$I$I(startX, startY, 0);
for (var nb=1; nb < csm.getNumBands$(); nb++) {
if (pos > csm.getOffset$I$I$I(startX, startY, nb)) {
pos=csm.getOffset$I$I$I(startX, startY, nb);
}}
} else if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel")) {
var mppsm=sm;
pos=mppsm.getOffset$I$I(startX, startY);
} else if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sm;
pos=sppsm.getOffset$I$I(startX, startY);
}if (this.compressionType == 0 || this.compressionType == 3 ) {
switch (dataType) {
case 0:
var bdata=(src.getDataBuffer$()).getData$();
this.stream.write$BA$I$I(bdata, pos, destScanlineLength);
break;
case 2:
var sdata=(src.getDataBuffer$()).getData$();
this.stream.writeShorts$HA$I$I(sdata, pos, destScanlineLength);
break;
case 1:
var usdata=(src.getDataBuffer$()).getData$();
this.stream.writeShorts$HA$I$I(usdata, pos, destScanlineLength);
break;
case 3:
var idata=(src.getDataBuffer$()).getData$();
this.stream.writeInts$IA$I$I(idata, pos, destScanlineLength);
break;
}
for (var k=0; k < padding; k++) {
this.stream.writeByte$I(0);
}
} else if (this.compressionType == 2) {
if (this.bpixels == null  || this.bpixels.length < scanlineBytes ) this.bpixels=Clazz.array(Byte.TYPE, [scanlineBytes]);
src.getPixels$I$I$I$I$IA(srcRect.x, srcRect.y, srcRect.width, srcRect.height, pixels);
for (var h=0; h < scanlineBytes; h++) {
this.bpixels[h]=(pixels[h]|0);
}
p$1.encodeRLE4$BA$I.apply(this, [this.bpixels, scanlineBytes]);
} else if (this.compressionType == 1) {
if (this.bpixels == null  || this.bpixels.length < scanlineBytes ) this.bpixels=Clazz.array(Byte.TYPE, [scanlineBytes]);
src.getPixels$I$I$I$I$IA(srcRect.x, srcRect.y, srcRect.width, srcRect.height, pixels);
for (var h=0; h < scanlineBytes; h++) {
this.bpixels[h]=(pixels[h]|0);
}
p$1.encodeRLE8$BA$I.apply(this, [this.bpixels, scanlineBytes]);
}} else {
src.getPixels$I$I$I$I$IA(srcRect.x, srcRect.y, srcRect.width, srcRect.height, pixels);
if (scaleX != 1 || maxBandOffset != numBands - 1 ) {
for (var j=0, k=0, n=0; j < this.w; j++, k+=scaleX * numBands, n+=numBands) {
System.arraycopy$O$I$O$I$I(pixels, k, pixel, 0, pixel.length);
for (var m=0; m < numBands; m++) {
pixels[n + m]=pixel[sourceBands[m]];
}
}
}p$1.writePixels$I$I$I$IA$I$I$java_awt_image_IndexColorModel.apply(this, [0, scanlineBytes, bitsPerPixel, pixels, padding, numBands, icm]);
}this.processImageProgress$F(100.0 * ((i) / (this.h)));
}
if (this.compressionType == 2 || this.compressionType == 1 ) {
this.stream.writeByte$I(0);
this.stream.writeByte$I(1);
p$1.incCompImageSize$I.apply(this, [2]);
imageSize=this.compImageSize;
fileSize=this.compImageSize + offset;
var endPos=this.stream.getStreamPosition$();
this.stream.seek$J(headPos);
p$1.writeSize$I$I.apply(this, [fileSize, 2]);
this.stream.seek$J(headPos);
p$1.writeSize$I$I.apply(this, [imageSize, 34]);
this.stream.seek$J(endPos);
}if (this.abortRequested$()) {
this.processWriteAborted$();
} else {
this.processImageComplete$();
this.stream.flushBefore$J(this.stream.getStreamPosition$());
}});

Clazz.newMeth(C$, 'writePixels$I$I$I$IA$I$I$java_awt_image_IndexColorModel',  function (l, scanlineBytes, bitsPerPixel, pixels, padding, numBands, icm) {
var pixel=0;
var k=0;
switch (bitsPerPixel) {
case 1:
for (var j=0; j < (scanlineBytes/8|0); j++) {
this.bpixels[k++]=(((pixels[l++] << 7) | (pixels[l++] << 6) | (pixels[l++] << 5) | (pixels[l++] << 4) | (pixels[l++] << 3) | (pixels[l++] << 2) | (pixels[l++] << 1) | pixels[l++] )|0);
}
if (scanlineBytes % 8 > 0) {
pixel=0;
for (var j=0; j < scanlineBytes % 8; j++) {
pixel|=(pixels[l++] << (7 - j));
}
this.bpixels[k++]=(pixel|0);
}this.stream.write$BA$I$I(this.bpixels, 0, ((scanlineBytes + 7)/8|0));
break;
case 4:
if (this.compressionType == 2) {
var bipixels=Clazz.array(Byte.TYPE, [scanlineBytes]);
for (var h=0; h < scanlineBytes; h++) {
bipixels[h]=(pixels[l++]|0);
}
p$1.encodeRLE4$BA$I.apply(this, [bipixels, scanlineBytes]);
} else {
for (var j=0; j < (scanlineBytes/2|0); j++) {
pixel=(pixels[l++] << 4) | pixels[l++];
this.bpixels[k++]=(pixel|0);
}
if ((scanlineBytes % 2) == 1) {
pixel=pixels[l] << 4;
this.bpixels[k++]=(pixel|0);
}this.stream.write$BA$I$I(this.bpixels, 0, ((scanlineBytes + 1)/2|0));
}break;
case 8:
if (this.compressionType == 1) {
for (var h=0; h < scanlineBytes; h++) {
this.bpixels[h]=(pixels[l++]|0);
}
p$1.encodeRLE8$BA$I.apply(this, [this.bpixels, scanlineBytes]);
} else {
for (var j=0; j < scanlineBytes; j++) {
this.bpixels[j]=(pixels[l++]|0);
}
this.stream.write$BA$I$I(this.bpixels, 0, scanlineBytes);
}break;
case 16:
if (this.spixels == null ) this.spixels=Clazz.array(Short.TYPE, [(scanlineBytes/numBands|0)]);
for (var j=0, m=0; j < scanlineBytes; m++) {
this.spixels[m]=(0|0);
if (this.compressionType == 0) {
this.spixels[m]=((((31 & pixels[j]) << 10) | ((31 & pixels[j + 1]) << 5) | ((31 & pixels[j + 2])) )|0);
j+=3;
} else {
for (var i=0; i < numBands; i++, j++) {
this.spixels[m]=(this.spixels[m]|((((pixels[j]) << this.bitPos[i]) & this.bitMasks[i]))|0);
}
}}
this.stream.writeShorts$HA$I$I(this.spixels, 0, this.spixels.length);
break;
case 24:
if (numBands == 3) {
for (var j=0; j < scanlineBytes; j+=3) {
this.bpixels[k++]=((pixels[l + 2])|0);
this.bpixels[k++]=((pixels[l + 1])|0);
this.bpixels[k++]=((pixels[l])|0);
l+=3;
}
this.stream.write$BA$I$I(this.bpixels, 0, scanlineBytes);
} else {
var entries=icm.getMapSize$();
var r=Clazz.array(Byte.TYPE, [entries]);
var g=Clazz.array(Byte.TYPE, [entries]);
var b=Clazz.array(Byte.TYPE, [entries]);
icm.getReds$BA(r);
icm.getGreens$BA(g);
icm.getBlues$BA(b);
var index;
for (var j=0; j < scanlineBytes; j++) {
index=pixels[l];
this.bpixels[k++]=b[index];
this.bpixels[k++]=g[index];
this.bpixels[k++]=b[index];
++l;
}
this.stream.write$BA$I$I(this.bpixels, 0, scanlineBytes * 3);
}break;
case 32:
if (this.ipixels == null ) this.ipixels=Clazz.array(Integer.TYPE, [(scanlineBytes/numBands|0)]);
if (numBands == 3) {
for (var j=0, m=0; j < scanlineBytes; m++) {
this.ipixels[m]=0;
if (this.compressionType == 0) {
this.ipixels[m]=((255 & pixels[j + 2]) << 16) | ((255 & pixels[j + 1]) << 8) | ((255 & pixels[j])) ;
j+=3;
} else {
for (var i=0; i < numBands; i++, j++) {
this.ipixels[m]|=(((pixels[j]) << this.bitPos[i]) & this.bitMasks[i]);
}
}}
} else {
for (var j=0; j < scanlineBytes; j++) {
if (icm != null ) {
this.ipixels[j]=icm.getRGB$I(pixels[j]);
} else {
this.ipixels[j]=pixels[j] << 16 | pixels[j] << 8 | pixels[j];
}}
}this.stream.writeInts$IA$I$I(this.ipixels, 0, this.ipixels.length);
break;
}
if (this.compressionType == 0 || this.compressionType == 3 ) {
for (k=0; k < padding; k++) {
this.stream.writeByte$I(0);
}
}}, p$1);

Clazz.newMeth(C$, 'encodeRLE8$BA$I',  function (bpixels, scanlineBytes) {
var runCount=1;
var absVal=-1;
var j=-1;
var runVal=($b$[0] = 0, $b$[0]);
var nextVal=($b$[0] = 0, $b$[0]);
runVal=bpixels[++j];
var absBuf=Clazz.array(Byte.TYPE, [256]);
while (j < scanlineBytes - 1){
nextVal=bpixels[++j];
if (nextVal == runVal) {
if (absVal >= 3) {
this.stream.writeByte$I(0);
this.stream.writeByte$I(absVal);
p$1.incCompImageSize$I.apply(this, [2]);
for (var a=0; a < absVal; a++) {
this.stream.writeByte$I(absBuf[a]);
p$1.incCompImageSize$I.apply(this, [1]);
}
if (!p$1.isEven$I.apply(this, [absVal])) {
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [1]);
}} else if (absVal > -1) {
for (var b=0; b < absVal; b++) {
this.stream.writeByte$I(1);
this.stream.writeByte$I(absBuf[b]);
p$1.incCompImageSize$I.apply(this, [2]);
}
}absVal=-1;
++runCount;
if (runCount == 256) {
this.stream.writeByte$I(runCount - 1);
this.stream.writeByte$I(runVal);
p$1.incCompImageSize$I.apply(this, [2]);
runCount=1;
}} else {
if (runCount > 1) {
this.stream.writeByte$I(runCount);
this.stream.writeByte$I(runVal);
p$1.incCompImageSize$I.apply(this, [2]);
} else if (absVal < 0) {
absBuf[++absVal]=runVal;
absBuf[++absVal]=nextVal;
} else if (absVal < 254) {
absBuf[++absVal]=nextVal;
} else {
this.stream.writeByte$I(0);
this.stream.writeByte$I(absVal + 1);
p$1.incCompImageSize$I.apply(this, [2]);
for (var a=0; a <= absVal; a++) {
this.stream.writeByte$I(absBuf[a]);
p$1.incCompImageSize$I.apply(this, [1]);
}
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [1]);
absVal=-1;
}runVal=nextVal;
runCount=1;
}if (j == scanlineBytes - 1) {
if (absVal == -1) {
this.stream.writeByte$I(runCount);
this.stream.writeByte$I(runVal);
p$1.incCompImageSize$I.apply(this, [2]);
runCount=1;
} else {
if (absVal >= 2) {
this.stream.writeByte$I(0);
this.stream.writeByte$I(absVal + 1);
p$1.incCompImageSize$I.apply(this, [2]);
for (var a=0; a <= absVal; a++) {
this.stream.writeByte$I(absBuf[a]);
p$1.incCompImageSize$I.apply(this, [1]);
}
if (!p$1.isEven$I.apply(this, [absVal + 1])) {
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [1]);
}} else if (absVal > -1) {
for (var b=0; b <= absVal; b++) {
this.stream.writeByte$I(1);
this.stream.writeByte$I(absBuf[b]);
p$1.incCompImageSize$I.apply(this, [2]);
}
}}this.stream.writeByte$I(0);
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [2]);
}}
}, p$1);

Clazz.newMeth(C$, 'encodeRLE4$BA$I',  function (bipixels, scanlineBytes) {
var runCount=2;
var absVal=-1;
var j=-1;
var pixel=0;
var q=0;
var runVal1=($b$[0] = 0, $b$[0]);
var runVal2=($b$[0] = 0, $b$[0]);
var nextVal1=($b$[0] = 0, $b$[0]);
var nextVal2=($b$[0] = 0, $b$[0]);
var absBuf=Clazz.array(Byte.TYPE, [256]);
runVal1=bipixels[++j];
runVal2=bipixels[++j];
while (j < scanlineBytes - 2){
nextVal1=bipixels[++j];
nextVal2=bipixels[++j];
if (nextVal1 == runVal1) {
if (absVal >= 4) {
this.stream.writeByte$I(0);
this.stream.writeByte$I(absVal - 1);
p$1.incCompImageSize$I.apply(this, [2]);
for (var a=0; a < absVal - 2; a+=2) {
pixel=(absBuf[a] << 4) | absBuf[a + 1];
this.stream.writeByte$I(($b$[0] = pixel, $b$[0]));
p$1.incCompImageSize$I.apply(this, [1]);
}
if (!(p$1.isEven$I.apply(this, [absVal - 1]))) {
q=absBuf[absVal - 2] << 4 | 0;
this.stream.writeByte$I(q);
p$1.incCompImageSize$I.apply(this, [1]);
}if (!p$1.isEven$I.apply(this, [(Math.ceil(((absVal - 1)/2|0))|0)])) {
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [1]);
}} else if (absVal > -1) {
this.stream.writeByte$I(2);
pixel=(absBuf[0] << 4) | absBuf[1];
this.stream.writeByte$I(pixel);
p$1.incCompImageSize$I.apply(this, [2]);
}absVal=-1;
if (nextVal2 == runVal2) {
runCount+=2;
if (runCount == 256) {
this.stream.writeByte$I(runCount - 1);
pixel=(runVal1 << 4) | runVal2;
this.stream.writeByte$I(pixel);
p$1.incCompImageSize$I.apply(this, [2]);
runCount=2;
if (j < scanlineBytes - 1) {
runVal1=runVal2;
runVal2=bipixels[++j];
} else {
this.stream.writeByte$I(1);
var r=runVal2 << 4 | 0;
this.stream.writeByte$I(r);
p$1.incCompImageSize$I.apply(this, [2]);
runCount=-1;
}}} else {
++runCount;
pixel=(runVal1 << 4) | runVal2;
this.stream.writeByte$I(runCount);
this.stream.writeByte$I(pixel);
p$1.incCompImageSize$I.apply(this, [2]);
runCount=2;
runVal1=nextVal2;
if (j < scanlineBytes - 1) {
runVal2=bipixels[++j];
} else {
this.stream.writeByte$I(1);
var r=nextVal2 << 4 | 0;
this.stream.writeByte$I(r);
p$1.incCompImageSize$I.apply(this, [2]);
runCount=-1;
}}} else {
if (runCount > 2) {
pixel=(runVal1 << 4) | runVal2;
this.stream.writeByte$I(runCount);
this.stream.writeByte$I(pixel);
p$1.incCompImageSize$I.apply(this, [2]);
} else if (absVal < 0) {
absBuf[++absVal]=runVal1;
absBuf[++absVal]=runVal2;
absBuf[++absVal]=nextVal1;
absBuf[++absVal]=nextVal2;
} else if (absVal < 253) {
absBuf[++absVal]=nextVal1;
absBuf[++absVal]=nextVal2;
} else {
this.stream.writeByte$I(0);
this.stream.writeByte$I(absVal + 1);
p$1.incCompImageSize$I.apply(this, [2]);
for (var a=0; a < absVal; a+=2) {
pixel=(absBuf[a] << 4) | absBuf[a + 1];
this.stream.writeByte$I(($b$[0] = pixel, $b$[0]));
p$1.incCompImageSize$I.apply(this, [1]);
}
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [1]);
absVal=-1;
}runVal1=nextVal1;
runVal2=nextVal2;
runCount=2;
}if (j >= scanlineBytes - 2) {
if (absVal == -1 && runCount >= 2 ) {
if (j == scanlineBytes - 2) {
if (bipixels[++j] == runVal1) {
++runCount;
pixel=(runVal1 << 4) | runVal2;
this.stream.writeByte$I(runCount);
this.stream.writeByte$I(pixel);
p$1.incCompImageSize$I.apply(this, [2]);
} else {
pixel=(runVal1 << 4) | runVal2;
this.stream.writeByte$I(runCount);
this.stream.writeByte$I(pixel);
this.stream.writeByte$I(1);
pixel=bipixels[j] << 4 | 0;
this.stream.writeByte$I(pixel);
var n=bipixels[j] << 4 | 0;
p$1.incCompImageSize$I.apply(this, [4]);
}} else {
this.stream.writeByte$I(runCount);
pixel=(runVal1 << 4) | runVal2;
this.stream.writeByte$I(pixel);
p$1.incCompImageSize$I.apply(this, [2]);
}} else if (absVal > -1) {
if (j == scanlineBytes - 2) {
absBuf[++absVal]=bipixels[++j];
}if (absVal >= 2) {
this.stream.writeByte$I(0);
this.stream.writeByte$I(absVal + 1);
p$1.incCompImageSize$I.apply(this, [2]);
for (var a=0; a < absVal; a+=2) {
pixel=(absBuf[a] << 4) | absBuf[a + 1];
this.stream.writeByte$I(($b$[0] = pixel, $b$[0]));
p$1.incCompImageSize$I.apply(this, [1]);
}
if (!(p$1.isEven$I.apply(this, [absVal + 1]))) {
q=absBuf[absVal] << 4 | 0;
this.stream.writeByte$I(q);
p$1.incCompImageSize$I.apply(this, [1]);
}if (!p$1.isEven$I.apply(this, [(Math.ceil(((absVal + 1)/2|0))|0)])) {
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [1]);
}} else {
switch (absVal) {
case 0:
this.stream.writeByte$I(1);
var n=absBuf[0] << 4 | 0;
this.stream.writeByte$I(n);
p$1.incCompImageSize$I.apply(this, [2]);
break;
case 1:
this.stream.writeByte$I(2);
pixel=(absBuf[0] << 4) | absBuf[1];
this.stream.writeByte$I(pixel);
p$1.incCompImageSize$I.apply(this, [2]);
break;
}
}}this.stream.writeByte$I(0);
this.stream.writeByte$I(0);
p$1.incCompImageSize$I.apply(this, [2]);
}}
}, p$1);

Clazz.newMeth(C$, 'incCompImageSize$I',  function (value) {
this.compImageSize=this.compImageSize + value;
}, p$1);

Clazz.newMeth(C$, 'isEven$I',  function (number) {
return (number % 2 == 0 ? true : false);
}, p$1);

Clazz.newMeth(C$, 'writeFileHeader$I$I',  function (fileSize, offset) {
this.stream.writeByte$I("B".$c());
this.stream.writeByte$I("M".$c());
this.stream.writeInt$I(fileSize);
this.stream.writeInt$I(0);
this.stream.writeInt$I(offset);
}, p$1);

Clazz.newMeth(C$, 'writeInfoHeader$I$I',  function (headerSize, bitsPerPixel) {
this.stream.writeInt$I(headerSize);
this.stream.writeInt$I(this.w);
this.stream.writeInt$I(this.isTopDown ? -this.h : this.h);
this.stream.writeShort$I(1);
this.stream.writeShort$I(bitsPerPixel);
}, p$1);

Clazz.newMeth(C$, 'writeSize$I$I',  function (dword, offset) {
this.stream.skipBytes$I(offset);
this.stream.writeInt$I(dword);
}, p$1);

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.stream=null;
});

Clazz.newMeth(C$, 'writeEmbedded$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (image, bmpParam) {
var format=this.compressionType == 4 ? "jpeg" : "png";
var iterator=$I$(11).getImageWritersByFormatName$S(format);
var writer=null;
if (iterator.hasNext$()) writer=iterator.next$();
if (writer != null ) {
if (this.embedded_stream == null ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["No stream for writing embedded image!"]);
}writer.addIIOWriteProgressListener$javax_imageio_event_IIOWriteProgressListener(((P$.BMPImageWriter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BMPImageWriter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['com.sun.imageio.plugins.bmp.BMPImageWriter','.IIOWriteProgressAdapter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'imageProgress$javax_imageio_ImageWriter$F',  function (source, percentageDone) {
this.b$['javax.imageio.ImageWriter'].processImageProgress$F.apply(this.b$['javax.imageio.ImageWriter'], [percentageDone]);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.BMPImageWriter$1)));
writer.addIIOWriteWarningListener$javax_imageio_event_IIOWriteWarningListener(((P$.BMPImageWriter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "BMPImageWriter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.imageio.event.IIOWriteWarningListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'warningOccurred$javax_imageio_ImageWriter$I$S',  function (source, imageIndex, warning) {
this.b$['javax.imageio.ImageWriter'].processWarningOccurred$I$S.apply(this.b$['javax.imageio.ImageWriter'], [imageIndex, warning]);
});
})()
), Clazz.new_(P$.BMPImageWriter$2.$init$,[this, null])));
writer.setOutput$O($I$(11).createImageOutputStream$O(this.embedded_stream));
var param=writer.getDefaultWriteParam$();
param.setDestinationOffset$java_awt_Point(bmpParam.getDestinationOffset$());
param.setSourceBands$IA(bmpParam.getSourceBands$());
param.setSourceRegion$java_awt_Rectangle(bmpParam.getSourceRegion$());
param.setSourceSubsampling$I$I$I$I(bmpParam.getSourceXSubsampling$(), bmpParam.getSourceYSubsampling$(), bmpParam.getSubsamplingXOffset$(), bmpParam.getSubsamplingYOffset$());
writer.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, image, param);
} else throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("BMPImageWrite5") + " " + format ]);
}, p$1);

Clazz.newMeth(C$, 'firstLowBit$I',  function (num) {
var count=0;
while ((num & 1) == 0){
++count;
num>>>=1;
}
return count;
}, p$1);

Clazz.newMeth(C$, 'getPreferredCompressionType$java_awt_image_ColorModel$java_awt_image_SampleModel',  function (cm, sm) {
var imageType=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[cm, sm]);
return this.getPreferredCompressionType$javax_imageio_ImageTypeSpecifier(imageType);
});

Clazz.newMeth(C$, 'getPreferredCompressionType$javax_imageio_ImageTypeSpecifier',  function (imageType) {
if (imageType.getBufferedImageType$() == 8) {
return 3;
}return 0;
});

Clazz.newMeth(C$, 'canEncodeImage$I$java_awt_image_ColorModel$java_awt_image_SampleModel',  function (compression, cm, sm) {
var imgType=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[cm, sm]);
return this.canEncodeImage$I$javax_imageio_ImageTypeSpecifier(compression, imgType);
});

Clazz.newMeth(C$, 'canEncodeImage$I$javax_imageio_ImageTypeSpecifier',  function (compression, imgType) {
var spi=this.getOriginatingProvider$();
if (!spi.canEncodeImage$javax_imageio_ImageTypeSpecifier(imgType)) {
return false;
}var biType=imgType.getBufferedImageType$();
var bpp=imgType.getColorModel$().getPixelSize$();
if (this.compressionType == 2 && bpp != 4 ) {
return false;
}if (this.compressionType == 1 && bpp != 8 ) {
return false;
}if (bpp == 16) {
var canUseRGB=false;
var canUseBITFIELDS=false;
var sm=imgType.getSampleModel$();
if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
var sizes=(sm).getSampleSize$();
canUseRGB=true;
canUseBITFIELDS=true;
for (var i=0; i < sizes.length; i++) {
canUseRGB=!!(canUseRGB&((sizes[i] == 5)));
canUseBITFIELDS=!!(canUseBITFIELDS&(((sizes[i] == 5) || (i == 1 && sizes[i] == 6 ) )));
}
}return (((this.compressionType == 0) && canUseRGB ) || ((this.compressionType == 3) && canUseBITFIELDS ) );
}return true;
});

Clazz.newMeth(C$, 'writeMaskToPalette$I$I$BA$BA$BA$BA',  function (mask, i, r, g, b, a) {
b[i]=((255 & (mask >> 24))|0);
g[i]=((255 & (mask >> 16))|0);
r[i]=((255 & (mask >> 8))|0);
a[i]=((255 & mask)|0);
});

Clazz.newMeth(C$, 'roundBpp$I',  function (x) {
if (x <= 8) {
return 8;
} else if (x <= 16) {
return 16;
}if (x <= 24) {
return 24;
} else {
return 32;
}}, p$1);
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BMPImageWriter, "IIOWriteProgressAdapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.imageio.event.IIOWriteProgressListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'imageComplete$javax_imageio_ImageWriter',  function (source) {
});

Clazz.newMeth(C$, 'imageProgress$javax_imageio_ImageWriter$F',  function (source, percentageDone) {
});

Clazz.newMeth(C$, 'imageStarted$javax_imageio_ImageWriter$I',  function (source, imageIndex) {
});

Clazz.newMeth(C$, 'thumbnailComplete$javax_imageio_ImageWriter',  function (source) {
});

Clazz.newMeth(C$, 'thumbnailProgress$javax_imageio_ImageWriter$F',  function (source, percentageDone) {
});

Clazz.newMeth(C$, 'thumbnailStarted$javax_imageio_ImageWriter$I$I',  function (source, imageIndex, thumbnailIndex) {
});

Clazz.newMeth(C$, 'writeAborted$javax_imageio_ImageWriter',  function (source) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),p$1={},p$2={},I$=[[0,'com.sun.imageio.plugins.png.CRC','java.util.zip.Deflater','com.sun.imageio.plugins.png.RowFilter','com.sun.imageio.plugins.png.PNGImageWriteParam','com.sun.imageio.plugins.png.PNGMetadata','com.sun.imageio.plugins.png.ChunkStream','java.io.ByteArrayOutputStream','java.util.zip.DeflaterOutputStream','java.awt.Rectangle','com.sun.imageio.plugins.png.IDATOutputStream','com.sun.imageio.plugins.png.PNGImageReader','javax.imageio.ImageTypeSpecifier']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PNGImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
this.metadata=null;
this.sourceXOffset=0;
this.sourceYOffset=0;
this.sourceWidth=0;
this.sourceHeight=0;
this.sourceBands=null;
this.periodX=1;
this.periodY=1;
this.rowFilter=Clazz.new_($I$(3,1));
this.prevRow=null;
this.currRow=null;
this.filteredRows=null;
this.sampleSize=null;
this.scalingBitDepth=-1;
this.scale=null;
this.scale0=null;
this.scaleh=null;
this.scalel=null;
},1);

C$.$fields$=[['I',['sourceXOffset','sourceYOffset','sourceWidth','sourceHeight','periodX','periodY','numBands','bpp','scalingBitDepth','totalPixels','pixelsDone'],'O',['stream','javax.imageio.stream.ImageOutputStream','metadata','com.sun.imageio.plugins.png.PNGMetadata','sourceBands','int[]','rowFilter','com.sun.imageio.plugins.png.RowFilter','prevRow','byte[]','+currRow','filteredRows','byte[][]','sampleSize','int[]','scale','byte[][]','scale0','byte[]','scaleh','byte[][]','+scalel']]
,['O',['allowedProgressivePasses','int[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi',  function (originatingProvider) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originatingProvider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutput$O',  function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output not an ImageOutputStream!"]);
}this.stream=output;
} else {
this.stream=null;
}});

Clazz.newMeth(C$, 'getDefaultWriteParam$',  function () {
return Clazz.new_([this.getLocale$()],$I$(4,1).c$$java_util_Locale);
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam',  function (param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (imageType, param) {
var m=Clazz.new_($I$(5,1));
m.initialize$javax_imageio_ImageTypeSpecifier$I(imageType, imageType.getSampleModel$().getNumBands$());
return m;
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam',  function (inData, param) {
return null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (inData, imageType, param) {
if (Clazz.instanceOf(inData, "com.sun.imageio.plugins.png.PNGMetadata")) {
return (inData).clone$();
} else {
return Clazz.new_($I$(5,1).c$$javax_imageio_metadata_IIOMetadata,[inData]);
}});

Clazz.newMeth(C$, 'write_magic',  function () {
var magic=Clazz.array(Byte.TYPE, -1, [-119, 80, 78, 71, 13, 10, 26, 10]);
this.stream.write$BA(magic);
}, p$2);

Clazz.newMeth(C$, 'write_IHDR',  function () {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1229472850, this.stream]);
cs.writeInt$I(this.metadata.IHDR_width);
cs.writeInt$I(this.metadata.IHDR_height);
cs.writeByte$I(this.metadata.IHDR_bitDepth);
cs.writeByte$I(this.metadata.IHDR_colorType);
if (this.metadata.IHDR_compressionMethod != 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Only compression method 0 is defined in PNG 1.1"]);
}cs.writeByte$I(this.metadata.IHDR_compressionMethod);
if (this.metadata.IHDR_filterMethod != 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Only filter method 0 is defined in PNG 1.1"]);
}cs.writeByte$I(this.metadata.IHDR_filterMethod);
if (this.metadata.IHDR_interlaceMethod < 0 || this.metadata.IHDR_interlaceMethod > 1 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Only interlace methods 0 (node) and 1 (adam7) are defined in PNG 1.1"]);
}cs.writeByte$I(this.metadata.IHDR_interlaceMethod);
cs.finish$();
}, p$2);

Clazz.newMeth(C$, 'write_cHRM',  function () {
if (this.metadata.cHRM_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1665684045, this.stream]);
cs.writeInt$I(this.metadata.cHRM_whitePointX);
cs.writeInt$I(this.metadata.cHRM_whitePointY);
cs.writeInt$I(this.metadata.cHRM_redX);
cs.writeInt$I(this.metadata.cHRM_redY);
cs.writeInt$I(this.metadata.cHRM_greenX);
cs.writeInt$I(this.metadata.cHRM_greenY);
cs.writeInt$I(this.metadata.cHRM_blueX);
cs.writeInt$I(this.metadata.cHRM_blueY);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_gAMA',  function () {
if (this.metadata.gAMA_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1732332865, this.stream]);
cs.writeInt$I(this.metadata.gAMA_gamma);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_iCCP',  function () {
if (this.metadata.iCCP_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1766015824, this.stream]);
cs.writeBytes$S(this.metadata.iCCP_profileName);
cs.writeByte$I(0);
cs.writeByte$I(this.metadata.iCCP_compressionMethod);
cs.write$BA(this.metadata.iCCP_compressedProfile);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_sBIT',  function () {
if (this.metadata.sBIT_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1933723988, this.stream]);
var colorType=this.metadata.IHDR_colorType;
if (this.metadata.sBIT_colorType != colorType) {
this.processWarningOccurred$I$S(0, "sBIT metadata has wrong color type.\nThe chunk will not be written.");
return;
}if (colorType == 0 || colorType == 4 ) {
cs.writeByte$I(this.metadata.sBIT_grayBits);
} else if (colorType == 2 || colorType == 3  || colorType == 6 ) {
cs.writeByte$I(this.metadata.sBIT_redBits);
cs.writeByte$I(this.metadata.sBIT_greenBits);
cs.writeByte$I(this.metadata.sBIT_blueBits);
}if (colorType == 4 || colorType == 6 ) {
cs.writeByte$I(this.metadata.sBIT_alphaBits);
}cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_sRGB',  function () {
if (this.metadata.sRGB_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1934772034, this.stream]);
cs.writeByte$I(this.metadata.sRGB_renderingIntent);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_PLTE',  function () {
if (this.metadata.PLTE_present) {
if (this.metadata.IHDR_colorType == 0 || this.metadata.IHDR_colorType == 4 ) {
this.processWarningOccurred$I$S(0, "A PLTE chunk may not appear in a gray or gray alpha image.\nThe chunk will not be written");
return;
}var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1347179589, this.stream]);
var numEntries=this.metadata.PLTE_red.length;
var palette=Clazz.array(Byte.TYPE, [numEntries * 3]);
var index=0;
for (var i=0; i < numEntries; i++) {
palette[index++]=this.metadata.PLTE_red[i];
palette[index++]=this.metadata.PLTE_green[i];
palette[index++]=this.metadata.PLTE_blue[i];
}
cs.write$BA(palette);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_hIST',  function () {
if (this.metadata.hIST_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1749635924, this.stream]);
if (!this.metadata.PLTE_present) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["hIST chunk without PLTE chunk!"]);
}cs.writeChars$CA$I$I(this.metadata.hIST_histogram, 0, this.metadata.hIST_histogram.length);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_tRNS',  function () {
if (this.metadata.tRNS_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1951551059, this.stream]);
var colorType=this.metadata.IHDR_colorType;
var chunkType=this.metadata.tRNS_colorType;
var chunkRed=this.metadata.tRNS_red;
var chunkGreen=this.metadata.tRNS_green;
var chunkBlue=this.metadata.tRNS_blue;
if (colorType == 2 && chunkType == 0 ) {
chunkType=colorType;
chunkRed=chunkGreen=chunkBlue=this.metadata.tRNS_gray;
}if (chunkType != colorType) {
this.processWarningOccurred$I$S(0, "tRNS metadata has incompatible color type.\nThe chunk will not be written.");
return;
}if (colorType == 3) {
if (!this.metadata.PLTE_present) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["tRNS chunk without PLTE chunk!"]);
}cs.write$BA(this.metadata.tRNS_alpha);
} else if (colorType == 0) {
cs.writeShort$I(this.metadata.tRNS_gray);
} else if (colorType == 2) {
cs.writeShort$I(chunkRed);
cs.writeShort$I(chunkGreen);
cs.writeShort$I(chunkBlue);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["tRNS chunk for color type 4 or 6!"]);
}cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_bKGD',  function () {
if (this.metadata.bKGD_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1649100612, this.stream]);
var colorType=this.metadata.IHDR_colorType & 3;
var chunkType=this.metadata.bKGD_colorType;
var chunkRed=this.metadata.bKGD_red;
var chunkGreen=this.metadata.bKGD_red;
var chunkBlue=this.metadata.bKGD_red;
if (colorType == 2 && chunkType == 0 ) {
chunkType=colorType;
chunkRed=chunkGreen=chunkBlue=this.metadata.bKGD_gray;
}if (chunkType != colorType) {
this.processWarningOccurred$I$S(0, "bKGD metadata has incompatible color type.\nThe chunk will not be written.");
return;
}if (colorType == 3) {
cs.writeByte$I(this.metadata.bKGD_index);
} else if (colorType == 0 || colorType == 4 ) {
cs.writeShort$I(this.metadata.bKGD_gray);
} else {
cs.writeShort$I(chunkRed);
cs.writeShort$I(chunkGreen);
cs.writeShort$I(chunkBlue);
}cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_pHYs',  function () {
if (this.metadata.pHYs_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1883789683, this.stream]);
cs.writeInt$I(this.metadata.pHYs_pixelsPerUnitXAxis);
cs.writeInt$I(this.metadata.pHYs_pixelsPerUnitYAxis);
cs.writeByte$I(this.metadata.pHYs_unitSpecifier);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_sPLT',  function () {
if (this.metadata.sPLT_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1934642260, this.stream]);
cs.writeBytes$S(this.metadata.sPLT_paletteName);
cs.writeByte$I(0);
cs.writeByte$I(this.metadata.sPLT_sampleDepth);
var numEntries=this.metadata.sPLT_red.length;
if (this.metadata.sPLT_sampleDepth == 8) {
for (var i=0; i < numEntries; i++) {
cs.writeByte$I(this.metadata.sPLT_red[i]);
cs.writeByte$I(this.metadata.sPLT_green[i]);
cs.writeByte$I(this.metadata.sPLT_blue[i]);
cs.writeByte$I(this.metadata.sPLT_alpha[i]);
cs.writeShort$I(this.metadata.sPLT_frequency[i]);
}
} else {
for (var i=0; i < numEntries; i++) {
cs.writeShort$I(this.metadata.sPLT_red[i]);
cs.writeShort$I(this.metadata.sPLT_green[i]);
cs.writeShort$I(this.metadata.sPLT_blue[i]);
cs.writeShort$I(this.metadata.sPLT_alpha[i]);
cs.writeShort$I(this.metadata.sPLT_frequency[i]);
}
}cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_tIME',  function () {
if (this.metadata.tIME_present) {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1950960965, this.stream]);
cs.writeShort$I(this.metadata.tIME_year);
cs.writeByte$I(this.metadata.tIME_month);
cs.writeByte$I(this.metadata.tIME_day);
cs.writeByte$I(this.metadata.tIME_hour);
cs.writeByte$I(this.metadata.tIME_minute);
cs.writeByte$I(this.metadata.tIME_second);
cs.finish$();
}}, p$2);

Clazz.newMeth(C$, 'write_tEXt',  function () {
var keywordIter=this.metadata.tEXt_keyword.iterator$();
var textIter=this.metadata.tEXt_text.iterator$();
while (keywordIter.hasNext$()){
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1950701684, this.stream]);
var keyword=keywordIter.next$();
cs.writeBytes$S(keyword);
cs.writeByte$I(0);
var text=textIter.next$();
cs.writeBytes$S(text);
cs.finish$();
}
}, p$2);

Clazz.newMeth(C$, 'deflate$BA',  function (b) {
var baos=Clazz.new_($I$(7,1));
var dos=Clazz.new_($I$(8,1).c$$java_io_OutputStream,[baos]);
dos.write$BA(b);
dos.close$();
return baos.toByteArray$();
}, p$2);

Clazz.newMeth(C$, 'write_iTXt',  function () {
var keywordIter=this.metadata.iTXt_keyword.iterator$();
var flagIter=this.metadata.iTXt_compressionFlag.iterator$();
var methodIter=this.metadata.iTXt_compressionMethod.iterator$();
var languageIter=this.metadata.iTXt_languageTag.iterator$();
var translatedKeywordIter=this.metadata.iTXt_translatedKeyword.iterator$();
var textIter=this.metadata.iTXt_text.iterator$();
while (keywordIter.hasNext$()){
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1767135348, this.stream]);
cs.writeBytes$S(keywordIter.next$());
cs.writeByte$I(0);
var compressed=flagIter.next$();
cs.writeByte$I(compressed.booleanValue$() ? 1 : 0);
cs.writeByte$I(methodIter.next$().intValue$());
cs.writeBytes$S(languageIter.next$());
cs.writeByte$I(0);
cs.write$BA(translatedKeywordIter.next$().getBytes$S("UTF8"));
cs.writeByte$I(0);
var text=textIter.next$();
if ((compressed).valueOf()) {
cs.write$BA(p$2.deflate$BA.apply(this, [text.getBytes$S("UTF8")]));
} else {
cs.write$BA(text.getBytes$S("UTF8"));
}cs.finish$();
}
}, p$2);

Clazz.newMeth(C$, 'write_zTXt',  function () {
var keywordIter=this.metadata.zTXt_keyword.iterator$();
var methodIter=this.metadata.zTXt_compressionMethod.iterator$();
var textIter=this.metadata.zTXt_text.iterator$();
while (keywordIter.hasNext$()){
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[2052348020, this.stream]);
var keyword=keywordIter.next$();
cs.writeBytes$S(keyword);
cs.writeByte$I(0);
var compressionMethod=(methodIter.next$()).intValue$();
cs.writeByte$I(compressionMethod);
var text=textIter.next$();
cs.write$BA(p$2.deflate$BA.apply(this, [text.getBytes$S("ISO-8859-1")]));
cs.finish$();
}
}, p$2);

Clazz.newMeth(C$, 'writeUnknownChunks',  function () {
var typeIter=this.metadata.unknownChunkType.iterator$();
var dataIter=this.metadata.unknownChunkData.iterator$();
while (typeIter.hasNext$() && dataIter.hasNext$() ){
var type=typeIter.next$();
var cs=Clazz.new_([C$.chunkType$S(type), this.stream],$I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream);
var data=dataIter.next$();
cs.write$BA(data);
cs.finish$();
}
}, p$2);

Clazz.newMeth(C$, 'chunkType$S',  function (typeString) {
var c0=typeString.charAt$I(0);
var c1=typeString.charAt$I(1);
var c2=typeString.charAt$I(2);
var c3=typeString.charAt$I(3);
var type=(c0.$c() << 24) | (c1.$c() << 16) | (c2.$c() << 8) | c3.$c() ;
return type;
}, 1);

Clazz.newMeth(C$, 'encodePass$javax_imageio_stream_ImageOutputStream$java_awt_image_RenderedImage$I$I$I$I',  function (os, image, xOffset, yOffset, xSkip, ySkip) {
var minX=this.sourceXOffset;
var minY=this.sourceYOffset;
var width=this.sourceWidth;
var height=this.sourceHeight;
xOffset*=this.periodX;
xSkip*=this.periodX;
yOffset*=this.periodY;
ySkip*=this.periodY;
var hpixels=((width - xOffset + xSkip - 1)/xSkip|0);
var vpixels=((height - yOffset + ySkip - 1)/ySkip|0);
if (hpixels == 0 || vpixels == 0 ) {
return;
}xOffset*=this.numBands;
xSkip*=this.numBands;
var samplesPerByte=(8/this.metadata.IHDR_bitDepth|0);
var numSamples=width * this.numBands;
var samples=Clazz.array(Integer.TYPE, [numSamples]);
var bytesPerRow=hpixels * this.numBands;
if (this.metadata.IHDR_bitDepth < 8) {
bytesPerRow=((bytesPerRow + samplesPerByte - 1)/samplesPerByte|0);
} else if (this.metadata.IHDR_bitDepth == 16) {
bytesPerRow*=2;
}var icm_gray_alpha=null;
if (this.metadata.IHDR_colorType == 4 && Clazz.instanceOf(image.getColorModel$(), "java.awt.image.IndexColorModel") ) {
bytesPerRow*=2;
icm_gray_alpha=image.getColorModel$();
}this.currRow=Clazz.array(Byte.TYPE, [bytesPerRow + this.bpp]);
this.prevRow=Clazz.array(Byte.TYPE, [bytesPerRow + this.bpp]);
this.filteredRows=Clazz.array(Byte.TYPE, [5, bytesPerRow + this.bpp]);
var bitDepth=this.metadata.IHDR_bitDepth;
for (var row=minY + yOffset; row < minY + height; row+=ySkip) {
var rect=Clazz.new_($I$(9,1).c$$I$I$I$I,[minX, row, width, 1]);
var ras=image.getData$java_awt_Rectangle(rect);
if (this.sourceBands != null ) {
ras=ras.createChild$I$I$I$I$I$I$IA(minX, row, width, 1, minX, row, this.sourceBands);
}ras.getPixels$I$I$I$I$IA(minX, row, width, 1, samples);
if (image.getColorModel$().isAlphaPremultiplied$()) {
var wr=ras.createCompatibleWritableRaster$();
wr.setPixels$I$I$I$I$IA(wr.getMinX$(), wr.getMinY$(), wr.getWidth$(), wr.getHeight$(), samples);
image.getColorModel$().coerceData$java_awt_image_WritableRaster$Z(wr, false);
wr.getPixels$I$I$I$I$IA(wr.getMinX$(), wr.getMinY$(), wr.getWidth$(), wr.getHeight$(), samples);
}var paletteOrder=this.metadata.PLTE_order;
if (paletteOrder != null ) {
for (var i=0; i < numSamples; i++) {
samples[i]=paletteOrder[samples[i]];
}
}var count=this.bpp;
var pos=0;
var tmp=0;
switch (bitDepth) {
case 1:
case 2:
case 4:
var mask=samplesPerByte - 1;
for (var s=xOffset; s < numSamples; s+=xSkip) {
var val=this.scale0[samples[s]];
tmp=(tmp << bitDepth) | val;
if ((pos++ & mask) == mask) {
this.currRow[count++]=(tmp|0);
tmp=0;
pos=0;
}}
if ((pos & mask) != 0) {
tmp<<=(((8/bitDepth|0)) - pos) * bitDepth;
this.currRow[count++]=(tmp|0);
}break;
case 8:
if (this.numBands == 1) {
for (var s=xOffset; s < numSamples; s+=xSkip) {
this.currRow[count++]=this.scale0[samples[s]];
if (icm_gray_alpha != null ) {
this.currRow[count++]=this.scale0[icm_gray_alpha.getAlpha$I(255 & samples[s])];
}}
} else {
for (var s=xOffset; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
this.currRow[count++]=this.scale[b][samples[s + b]];
}
}
}break;
case 16:
for (var s=xOffset; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
this.currRow[count++]=this.scaleh[b][samples[s + b]];
this.currRow[count++]=this.scalel[b][samples[s + b]];
}
}
break;
}
var filterType=this.rowFilter.filterRow$I$BA$BA$BAA$I$I(this.metadata.IHDR_colorType, this.currRow, this.prevRow, this.filteredRows, bytesPerRow, this.bpp);
os.write$I(filterType);
os.write$BA$I$I(this.filteredRows[filterType], this.bpp, bytesPerRow);
var swap=this.currRow;
this.currRow=this.prevRow;
this.prevRow=swap;
this.pixelsDone+=hpixels;
this.processImageProgress$F(100.0 * this.pixelsDone / this.totalPixels);
if (this.abortRequested$()) {
return;
}}
}, p$2);

Clazz.newMeth(C$, 'write_IDAT$java_awt_image_RenderedImage',  function (image) {
var ios=Clazz.new_($I$(10,1).c$$javax_imageio_stream_ImageOutputStream$I,[this.stream, 32768]);
try {
if (this.metadata.IHDR_interlaceMethod == 1) {
for (var i=0; i < 7; i++) {
p$2.encodePass$javax_imageio_stream_ImageOutputStream$java_awt_image_RenderedImage$I$I$I$I.apply(this, [ios, image, $I$(11).adam7XOffset[i], $I$(11).adam7YOffset[i], $I$(11).adam7XSubsampling[i], $I$(11).adam7YSubsampling[i]]);
if (this.abortRequested$()) {
break;
}}
} else {
p$2.encodePass$javax_imageio_stream_ImageOutputStream$java_awt_image_RenderedImage$I$I$I$I.apply(this, [ios, image, 0, 0, 1, 1]);
}} finally {
ios.finish$();
}
}, p$2);

Clazz.newMeth(C$, 'writeIEND',  function () {
var cs=Clazz.new_($I$(6,1).c$$I$javax_imageio_stream_ImageOutputStream,[1229278788, this.stream]);
cs.finish$();
}, p$2);

Clazz.newMeth(C$, 'equals$IA$IA',  function (s0, s1) {
if (s0 == null  || s1 == null  ) {
return false;
}if (s0.length != s1.length) {
return false;
}for (var i=0; i < s0.length; i++) {
if (s0[i] != s1[i]) {
return false;
}}
return true;
}, p$2);

Clazz.newMeth(C$, 'initializeScaleTables$IA',  function (sampleSize) {
var bitDepth=this.metadata.IHDR_bitDepth;
if (bitDepth == this.scalingBitDepth && p$2.equals$IA$IA.apply(this, [sampleSize, this.sampleSize]) ) {
return;
}this.sampleSize=sampleSize;
this.scalingBitDepth=bitDepth;
var maxOutSample=(1 << bitDepth) - 1;
if (bitDepth <= 8) {
this.scale=Clazz.array(Byte.TYPE, [this.numBands, null]);
for (var b=0; b < this.numBands; b++) {
var maxInSample=(1 << sampleSize[b]) - 1;
var halfMaxInSample=(maxInSample/2|0);
this.scale[b]=Clazz.array(Byte.TYPE, [maxInSample + 1]);
for (var s=0; s <= maxInSample; s++) {
this.scale[b][s]=((((s * maxOutSample + halfMaxInSample)/maxInSample|0))|0);
}
}
this.scale0=this.scale[0];
this.scaleh=this.scalel=null;
} else {
this.scaleh=Clazz.array(Byte.TYPE, [this.numBands, null]);
this.scalel=Clazz.array(Byte.TYPE, [this.numBands, null]);
for (var b=0; b < this.numBands; b++) {
var maxInSample=(1 << sampleSize[b]) - 1;
var halfMaxInSample=(maxInSample/2|0);
this.scaleh[b]=Clazz.array(Byte.TYPE, [maxInSample + 1]);
this.scalel[b]=Clazz.array(Byte.TYPE, [maxInSample + 1]);
for (var s=0; s <= maxInSample; s++) {
var val=((s * maxOutSample + halfMaxInSample)/maxInSample|0);
this.scaleh[b][s]=((val >> 8)|0);
this.scalel[b][s]=((val & 255)|0);
}
}
this.scale=null;
this.scale0=null;
}}, p$2);

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (streamMetadata, image, param) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["output == null!"]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}if (image.hasRaster$()) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["image has a Raster!"]);
}var im=image.getRenderedImage$();
var sampleModel=im.getSampleModel$();
this.numBands=sampleModel.getNumBands$();
this.sourceXOffset=im.getMinX$();
this.sourceYOffset=im.getMinY$();
this.sourceWidth=im.getWidth$();
this.sourceHeight=im.getHeight$();
this.sourceBands=null;
this.periodX=1;
this.periodY=1;
if (param != null ) {
var sourceRegion=param.getSourceRegion$();
if (sourceRegion != null ) {
var imageBounds=Clazz.new_([im.getMinX$(), im.getMinY$(), im.getWidth$(), im.getHeight$()],$I$(9,1).c$$I$I$I$I);
sourceRegion=sourceRegion.intersection$java_awt_Rectangle(imageBounds);
this.sourceXOffset=sourceRegion.x;
this.sourceYOffset=sourceRegion.y;
this.sourceWidth=sourceRegion.width;
this.sourceHeight=sourceRegion.height;
}var gridX=param.getSubsamplingXOffset$();
var gridY=param.getSubsamplingYOffset$();
this.sourceXOffset+=gridX;
this.sourceYOffset+=gridY;
this.sourceWidth-=gridX;
this.sourceHeight-=gridY;
this.periodX=param.getSourceXSubsampling$();
this.periodY=param.getSourceYSubsampling$();
var sBands=param.getSourceBands$();
if (sBands != null ) {
this.sourceBands=sBands;
this.numBands=this.sourceBands.length;
}}var destWidth=((this.sourceWidth + this.periodX - 1)/this.periodX|0);
var destHeight=((this.sourceHeight + this.periodY - 1)/this.periodY|0);
if (destWidth <= 0 || destHeight <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty source region!"]);
}this.totalPixels=destWidth * destHeight;
this.pixelsDone=0;
var imd=image.getMetadata$();
if (imd != null ) {
this.metadata=this.convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imd, $I$(12).createFromRenderedImage$java_awt_image_RenderedImage(im), null);
} else {
this.metadata=Clazz.new_($I$(5,1));
}if (param != null ) {
switch (param.getProgressiveMode$()) {
case 1:
this.metadata.IHDR_interlaceMethod=1;
break;
case 0:
this.metadata.IHDR_interlaceMethod=0;
break;
}
}this.metadata.initialize$javax_imageio_ImageTypeSpecifier$I(Clazz.new_($I$(12,1).c$$java_awt_image_RenderedImage,[im]), this.numBands);
this.metadata.IHDR_width=destWidth;
this.metadata.IHDR_height=destHeight;
this.bpp=this.numBands * ((this.metadata.IHDR_bitDepth == 16) ? 2 : 1);
p$2.initializeScaleTables$IA.apply(this, [sampleModel.getSampleSize$()]);
this.clearAbortRequest$();
this.processImageStarted$I(0);
try {
p$2.write_magic.apply(this, []);
p$2.write_IHDR.apply(this, []);
p$2.write_cHRM.apply(this, []);
p$2.write_gAMA.apply(this, []);
p$2.write_iCCP.apply(this, []);
p$2.write_sBIT.apply(this, []);
p$2.write_sRGB.apply(this, []);
p$2.write_PLTE.apply(this, []);
p$2.write_hIST.apply(this, []);
p$2.write_tRNS.apply(this, []);
p$2.write_bKGD.apply(this, []);
p$2.write_pHYs.apply(this, []);
p$2.write_sPLT.apply(this, []);
p$2.write_tIME.apply(this, []);
p$2.write_tEXt.apply(this, []);
p$2.write_iTXt.apply(this, []);
p$2.write_zTXt.apply(this, []);
p$2.writeUnknownChunks.apply(this, []);
p$2.write_IDAT$java_awt_image_RenderedImage.apply(this, [im]);
if (this.abortRequested$()) {
this.processWriteAborted$();
} else {
p$2.writeIEND.apply(this, []);
this.processImageComplete$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing PNG file!", e]);
} else {
throw e;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.allowedProgressivePasses=Clazz.array(Integer.TYPE, -1, [1, 7]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

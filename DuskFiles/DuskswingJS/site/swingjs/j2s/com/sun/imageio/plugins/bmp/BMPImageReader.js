(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.bmp"),p$1={},I$=[[0,'java.nio.ByteOrder','com.sun.imageio.plugins.common.I18N','com.sun.imageio.plugins.bmp.BMPMetadata','java.awt.color.ColorSpace','java.awt.color.ICC_ColorSpace','java.awt.color.ICC_Profile','java.awt.image.PixelInterleavedSampleModel','java.awt.image.MultiPixelPackedSampleModel','com.sun.imageio.plugins.common.ImageUtil','java.awt.image.IndexColorModel','java.awt.image.SinglePixelPackedSampleModel','java.awt.image.DirectColorModel','java.util.ArrayList','javax.imageio.ImageTypeSpecifier','javax.imageio.ImageReadParam','java.awt.Rectangle','javax.imageio.ImageReader','java.awt.image.Raster','java.awt.Point','java.awt.image.BufferedImage','javax.imageio.ImageIO','java.io.ByteArrayInputStream',['com.sun.imageio.plugins.bmp.BMPImageReader','.EmbeddedProgressAdapter'],'java.security.AccessController']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BMPImageReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.imageio.ImageReader', 'com.sun.imageio.plugins.bmp.BMPConstants');
C$.$classes$=[['EmbeddedProgressAdapter',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iis=null;
this.gotHeader=false;
this.noTransform=true;
this.seleBand=false;
},1);

C$.$fields$=[['Z',['isBottomUp','gotHeader','noTransform','seleBand'],'I',['imageType','numBands','bitsPerPixel','redMask','greenMask','blueMask','alphaMask','width','height','scaleX','scaleY'],'J',['bitmapFileSize','bitmapOffset','compression','imageSize'],'O',['palette','byte[]','sampleModel','java.awt.image.SampleModel','+originalSampleModel','colorModel','java.awt.image.ColorModel','+originalColorModel','iis','javax.imageio.stream.ImageInputStream','destinationRegion','java.awt.Rectangle','+sourceRegion','metadata','com.sun.imageio.plugins.bmp.BMPMetadata','bi','java.awt.image.BufferedImage','sourceBands','int[]','+destBands']]
,['O',['isLinkedProfileDisabled','Boolean','+isWindowsPlatform']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi',  function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z',  function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.iis=input;
if (this.iis != null ) this.iis.setByteOrder$java_nio_ByteOrder($I$(1).LITTLE_ENDIAN);
p$1.resetHeaderInfo.apply(this, []);
});

Clazz.newMeth(C$, 'getNumImages$Z',  function (allowSearch) {
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(2).getString$S("GetNumImages0")]);
}if (this.seekForwardOnly && allowSearch ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(2).getString$S("GetNumImages1")]);
}return 1;
});

Clazz.newMeth(C$, 'getWidth$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
try {
this.readHeader$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,[$I$(2).getString$S("BMPImageReader6"), e]);
} else {
throw e;
}
}
return this.width;
});

Clazz.newMeth(C$, 'getHeight$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
try {
this.readHeader$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,[$I$(2).getString$S("BMPImageReader6"), e]);
} else {
throw e;
}
}
return this.height;
});

Clazz.newMeth(C$, 'checkIndex$I',  function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[$I$(2).getString$S("BMPImageReader0")]);
}}, p$1);

Clazz.newMeth(C$, 'readHeader$',  function () {
if (this.gotHeader) return;
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input source not set!"]);
}var profileData=0;
var profileSize=0;
this.metadata=Clazz.new_($I$(3,1));
this.iis.mark$();
var marker=Clazz.array(Byte.TYPE, [2]);
this.iis.read$BA(marker);
if (marker[0] != 66 || marker[1] != 77 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("BMPImageReader1")]);
this.bitmapFileSize=this.iis.readUnsignedInt$();
this.iis.skipBytes$I(4);
this.bitmapOffset=this.iis.readUnsignedInt$();
var size=this.iis.readUnsignedInt$();
if (Long.$eq(size,12 )) {
this.width=this.iis.readShort$();
this.height=this.iis.readShort$();
} else {
this.width=this.iis.readInt$();
this.height=this.iis.readInt$();
}this.metadata.width=this.width;
this.metadata.height=this.height;
var planes=this.iis.readUnsignedShort$();
this.bitsPerPixel=this.iis.readUnsignedShort$();
this.metadata.bitsPerPixel=($s$[0] = this.bitsPerPixel, $s$[0]);
this.numBands=3;
if (Long.$eq(size,12 )) {
this.metadata.bmpVersion="BMP v. 2.x";
if (this.bitsPerPixel == 1) {
this.imageType=0;
} else if (this.bitsPerPixel == 4) {
this.imageType=1;
} else if (this.bitsPerPixel == 8) {
this.imageType=2;
} else if (this.bitsPerPixel == 24) {
this.imageType=3;
}var numberOfEntries=Long.$ival((Long.$div((Long.$sub(this.bitmapOffset,14 , size )),3)));
var sizeOfPalette=numberOfEntries * 3;
this.palette=Clazz.array(Byte.TYPE, [sizeOfPalette]);
this.iis.readFully$BA$I$I(this.palette, 0, sizeOfPalette);
this.metadata.palette=this.palette;
this.metadata.paletteSize=numberOfEntries;
} else {
this.compression=this.iis.readUnsignedInt$();
this.imageSize=this.iis.readUnsignedInt$();
var xPelsPerMeter=this.iis.readInt$();
var yPelsPerMeter=this.iis.readInt$();
var colorsUsed=this.iis.readUnsignedInt$();
var colorsImportant=this.iis.readUnsignedInt$();
this.metadata.compression=Long.$ival(this.compression);
this.metadata.xPixelsPerMeter=Long.$ival(xPelsPerMeter);
this.metadata.yPixelsPerMeter=Long.$ival(yPelsPerMeter);
this.metadata.colorsUsed=Long.$ival(colorsUsed);
this.metadata.colorsImportant=Long.$ival(colorsImportant);
if (Long.$eq(size,40 )) {
switch (Long.$ival(this.compression)) {
case 4:
case 5:
this.metadata.bmpVersion="BMP v. 3.x";
this.imageType=16;
break;
case 0:
case 1:
case 2:
if (Long.$lt(this.bitmapOffset,(Long.$add(size,14)) )) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(2).getString$S("BMPImageReader7")]);
}var numberOfEntries=Long.$ival((Long.$div((Long.$sub(this.bitmapOffset,14 , size )),4)));
var sizeOfPalette=numberOfEntries * 4;
this.palette=Clazz.array(Byte.TYPE, [sizeOfPalette]);
this.iis.readFully$BA$I$I(this.palette, 0, sizeOfPalette);
this.metadata.palette=this.palette;
this.metadata.paletteSize=numberOfEntries;
if (this.bitsPerPixel == 1) {
this.imageType=4;
} else if (this.bitsPerPixel == 4) {
this.imageType=5;
} else if (this.bitsPerPixel == 8) {
this.imageType=6;
} else if (this.bitsPerPixel == 24) {
this.imageType=7;
} else if (this.bitsPerPixel == 16) {
this.imageType=8;
this.redMask=31744;
this.greenMask=992;
this.blueMask=31;
this.metadata.redMask=this.redMask;
this.metadata.greenMask=this.greenMask;
this.metadata.blueMask=this.blueMask;
} else if (this.bitsPerPixel == 32) {
this.imageType=9;
this.redMask=16711680;
this.greenMask=65280;
this.blueMask=255;
this.metadata.redMask=this.redMask;
this.metadata.greenMask=this.greenMask;
this.metadata.blueMask=this.blueMask;
}this.metadata.bmpVersion="BMP v. 3.x";
break;
case 3:
if (this.bitsPerPixel == 16) {
this.imageType=8;
} else if (this.bitsPerPixel == 32) {
this.imageType=9;
}this.redMask=Long.$ival(this.iis.readUnsignedInt$());
this.greenMask=Long.$ival(this.iis.readUnsignedInt$());
this.blueMask=Long.$ival(this.iis.readUnsignedInt$());
this.metadata.redMask=this.redMask;
this.metadata.greenMask=this.greenMask;
this.metadata.blueMask=this.blueMask;
if (Long.$ne(colorsUsed,0 )) {
sizeOfPalette=Long.$ival(colorsUsed) * 4;
this.palette=Clazz.array(Byte.TYPE, [sizeOfPalette]);
this.iis.readFully$BA$I$I(this.palette, 0, sizeOfPalette);
this.metadata.palette=this.palette;
this.metadata.paletteSize=Long.$ival(colorsUsed);
}this.metadata.bmpVersion="BMP v. 3.x NT";
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(2).getString$S("BMPImageReader2")]);
}
} else if (Long.$eq(size,108 ) || Long.$eq(size,124 ) ) {
if (Long.$eq(size,108 )) this.metadata.bmpVersion="BMP v. 4.x";
 else if (Long.$eq(size,124 )) this.metadata.bmpVersion="BMP v. 5.x";
this.redMask=Long.$ival(this.iis.readUnsignedInt$());
this.greenMask=Long.$ival(this.iis.readUnsignedInt$());
this.blueMask=Long.$ival(this.iis.readUnsignedInt$());
this.alphaMask=Long.$ival(this.iis.readUnsignedInt$());
var csType=this.iis.readUnsignedInt$();
var redX=this.iis.readInt$();
var redY=this.iis.readInt$();
var redZ=this.iis.readInt$();
var greenX=this.iis.readInt$();
var greenY=this.iis.readInt$();
var greenZ=this.iis.readInt$();
var blueX=this.iis.readInt$();
var blueY=this.iis.readInt$();
var blueZ=this.iis.readInt$();
var gammaRed=this.iis.readUnsignedInt$();
var gammaGreen=this.iis.readUnsignedInt$();
var gammaBlue=this.iis.readUnsignedInt$();
if (Long.$eq(size,124 )) {
this.metadata.intent=this.iis.readInt$();
profileData=this.iis.readInt$();
profileSize=this.iis.readInt$();
this.iis.skipBytes$I(4);
}this.metadata.colorSpace=Long.$ival(csType);
if (Long.$eq(csType,0 )) {
this.metadata.redX=redX;
this.metadata.redY=redY;
this.metadata.redZ=redZ;
this.metadata.greenX=greenX;
this.metadata.greenY=greenY;
this.metadata.greenZ=greenZ;
this.metadata.blueX=blueX;
this.metadata.blueY=blueY;
this.metadata.blueZ=blueZ;
this.metadata.gammaRed=Long.$ival(gammaRed);
this.metadata.gammaGreen=Long.$ival(gammaGreen);
this.metadata.gammaBlue=Long.$ival(gammaBlue);
}var numberOfEntries=Long.$ival((Long.$div((Long.$sub(this.bitmapOffset,14 , size )),4)));
var sizeOfPalette=numberOfEntries * 4;
this.palette=Clazz.array(Byte.TYPE, [sizeOfPalette]);
this.iis.readFully$BA$I$I(this.palette, 0, sizeOfPalette);
this.metadata.palette=this.palette;
this.metadata.paletteSize=numberOfEntries;
switch (Long.$ival(this.compression)) {
case 4:
case 5:
if (Long.$eq(size,108 )) {
this.imageType=17;
} else if (Long.$eq(size,124 )) {
this.imageType=18;
}break;
default:
if (this.bitsPerPixel == 1) {
this.imageType=10;
} else if (this.bitsPerPixel == 4) {
this.imageType=11;
} else if (this.bitsPerPixel == 8) {
this.imageType=12;
} else if (this.bitsPerPixel == 16) {
this.imageType=13;
if (Long.$ival(this.compression) == 0) {
this.redMask=31744;
this.greenMask=992;
this.blueMask=31;
}} else if (this.bitsPerPixel == 24) {
this.imageType=14;
} else if (this.bitsPerPixel == 32) {
this.imageType=15;
if (Long.$ival(this.compression) == 0) {
this.redMask=16711680;
this.greenMask=65280;
this.blueMask=255;
}}this.metadata.redMask=this.redMask;
this.metadata.greenMask=this.greenMask;
this.metadata.blueMask=this.blueMask;
this.metadata.alphaMask=this.alphaMask;
}
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(2).getString$S("BMPImageReader3")]);
}}if (this.height > 0) {
this.isBottomUp=true;
} else {
this.isBottomUp=false;
this.height=Math.abs(this.height);
}var colorSpace=$I$(4).getInstance$I(1000);
if (this.metadata.colorSpace == 3 || this.metadata.colorSpace == 4 ) {
this.iis.mark$();
this.iis.skipBytes$J(Long.$sub(profileData,size));
var profile=Clazz.array(Byte.TYPE, [profileSize]);
this.iis.readFully$BA$I$I(profile, 0, profileSize);
this.iis.reset$();
try {
if (this.metadata.colorSpace == 3 && C$.isLinkedProfileAllowed$()  && !C$.isUncOrDevicePath$BA(profile) ) {
var path= String.instantialize(profile, "windows-1252");
colorSpace=Clazz.new_([$I$(6).getInstance$S(path)],$I$(5,1).c$$java_awt_color_ICC_Profile);
} else {
colorSpace=Clazz.new_([$I$(6).getInstance$BA(profile)],$I$(5,1).c$$java_awt_color_ICC_Profile);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
colorSpace=$I$(4).getInstance$I(1000);
} else {
throw e;
}
}
}if (this.bitsPerPixel == 0 || Long.$eq(this.compression,4 )  || Long.$eq(this.compression,5 ) ) {
this.colorModel=null;
this.sampleModel=null;
} else if (this.bitsPerPixel == 1 || this.bitsPerPixel == 4  || this.bitsPerPixel == 8 ) {
this.numBands=1;
if (this.bitsPerPixel == 8) {
var bandOffsets=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) {
bandOffsets[i]=this.numBands - 1 - i ;
}
this.sampleModel=Clazz.new_($I$(7,1).c$$I$I$I$I$I$IA,[0, this.width, this.height, this.numBands, this.numBands * this.width, bandOffsets]);
} else {
this.sampleModel=Clazz.new_($I$(8,1).c$$I$I$I$I,[0, this.width, this.height, this.bitsPerPixel]);
}var r;
var g;
var b;
if (this.imageType == 0 || this.imageType == 1  || this.imageType == 2 ) {
size=(this.palette.length/3|0);
if (Long.$gt(size,256 )) {
size=256;
}var off;
r=Clazz.array(Byte.TYPE, [Long.$ival(size)]);
g=Clazz.array(Byte.TYPE, [Long.$ival(size)]);
b=Clazz.array(Byte.TYPE, [Long.$ival(size)]);
for (var i=0; i < Long.$ival(size); i++) {
off=3 * i;
b[i]=this.palette[off];
g[i]=this.palette[off + 1];
r[i]=this.palette[off + 2];
}
} else {
size=(this.palette.length/4|0);
if (Long.$gt(size,256 )) {
size=256;
}var off;
r=Clazz.array(Byte.TYPE, [Long.$ival(size)]);
g=Clazz.array(Byte.TYPE, [Long.$ival(size)]);
b=Clazz.array(Byte.TYPE, [Long.$ival(size)]);
for (var i=0; Long.$lt(i,size ); i++) {
off=4 * i;
b[i]=this.palette[off];
g[i]=this.palette[off + 1];
r[i]=this.palette[off + 2];
}
}if ($I$(9).isIndicesForGrayscale$BA$BA$BA(r, g, b)) this.colorModel=$I$(9).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(null, this.sampleModel);
 else this.colorModel=Clazz.new_([this.bitsPerPixel, Long.$ival(size), r, g, b],$I$(10,1).c$$I$I$BA$BA$BA);
} else if (this.bitsPerPixel == 16) {
this.numBands=3;
this.sampleModel=Clazz.new_([1, this.width, this.height, Clazz.array(Integer.TYPE, -1, [this.redMask, this.greenMask, this.blueMask])],$I$(11,1).c$$I$I$I$IA);
this.colorModel=Clazz.new_($I$(12,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I,[colorSpace, 16, this.redMask, this.greenMask, this.blueMask, 0, false, 1]);
} else if (this.bitsPerPixel == 32) {
this.numBands=this.alphaMask == 0 ? 3 : 4;
var bitMasks=this.numBands == 3 ? Clazz.array(Integer.TYPE, -1, [this.redMask, this.greenMask, this.blueMask]) : Clazz.array(Integer.TYPE, -1, [this.redMask, this.greenMask, this.blueMask, this.alphaMask]);
this.sampleModel=Clazz.new_($I$(11,1).c$$I$I$I$IA,[3, this.width, this.height, bitMasks]);
this.colorModel=Clazz.new_($I$(12,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I,[colorSpace, 32, this.redMask, this.greenMask, this.blueMask, this.alphaMask, false, 3]);
} else {
this.numBands=3;
var bandOffsets=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) {
bandOffsets[i]=this.numBands - 1 - i ;
}
this.sampleModel=Clazz.new_($I$(7,1).c$$I$I$I$I$I$IA,[0, this.width, this.height, this.numBands, this.numBands * this.width, bandOffsets]);
this.colorModel=$I$(9).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(colorSpace, this.sampleModel);
}this.originalSampleModel=this.sampleModel;
this.originalColorModel=this.colorModel;
this.iis.reset$();
this.iis.skipBytes$J(this.bitmapOffset);
this.gotHeader=true;
});

Clazz.newMeth(C$, 'getImageTypes$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
try {
this.readHeader$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,[$I$(2).getString$S("BMPImageReader6"), e]);
} else {
throw e;
}
}
var list=Clazz.new_($I$(13,1).c$$I,[1]);
list.add$O(Clazz.new_($I$(14,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[this.originalColorModel, this.originalSampleModel]));
return list.iterator$();
});

Clazz.newMeth(C$, 'getDefaultReadParam$',  function () {
return Clazz.new_($I$(15,1));
});

Clazz.newMeth(C$, 'getImageMetadata$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
if (this.metadata == null ) {
try {
this.readHeader$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,[$I$(2).getString$S("BMPImageReader6"), e]);
} else {
throw e;
}
}
}return this.metadata;
});

Clazz.newMeth(C$, 'getStreamMetadata$',  function () {
return null;
});

Clazz.newMeth(C$, 'isRandomAccessEasy$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
try {
this.readHeader$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,[$I$(2).getString$S("BMPImageReader6"), e]);
} else {
throw e;
}
}
return this.metadata.compression == 0;
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(2).getString$S("BMPImageReader5")]);
}p$1.checkIndex$I.apply(this, [imageIndex]);
this.clearAbortRequest$();
this.processImageStarted$I(imageIndex);
if (param == null ) param=this.getDefaultReadParam$();
try {
this.readHeader$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,[$I$(2).getString$S("BMPImageReader6"), e]);
} else {
throw e;
}
}
this.sourceRegion=Clazz.new_($I$(16,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.destinationRegion=Clazz.new_($I$(16,1).c$$I$I$I$I,[0, 0, 0, 0]);
$I$(17,"computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle",[param, this.width, this.height, param.getDestination$(), this.sourceRegion, this.destinationRegion]);
this.scaleX=param.getSourceXSubsampling$();
this.scaleY=param.getSourceYSubsampling$();
this.sourceBands=param.getSourceBands$();
this.destBands=param.getDestinationBands$();
this.seleBand=(this.sourceBands != null ) && (this.destBands != null ) ;
this.noTransform=this.destinationRegion.equals$O(Clazz.new_($I$(16,1).c$$I$I$I$I,[0, 0, this.width, this.height])) || this.seleBand ;
if (!this.seleBand) {
this.sourceBands=Clazz.array(Integer.TYPE, [this.numBands]);
this.destBands=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) this.destBands[i]=this.sourceBands[i]=i;

}this.bi=param.getDestination$();
var raster=null;
if (this.bi == null ) {
if (this.sampleModel != null  && this.colorModel != null  ) {
this.sampleModel=this.sampleModel.createCompatibleSampleModel$I$I(this.destinationRegion.x + this.destinationRegion.width, this.destinationRegion.y + this.destinationRegion.height);
if (this.seleBand) this.sampleModel=this.sampleModel.createSubsetSampleModel$IA(this.sourceBands);
raster=$I$(18,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[this.sampleModel, Clazz.new_($I$(19,1))]);
this.bi=Clazz.new_($I$(20,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, raster, false, null]);
}} else {
raster=this.bi.getWritableTile$I$I(0, 0);
this.sampleModel=this.bi.getSampleModel$();
this.colorModel=this.bi.getColorModel$();
this.noTransform=!!(this.noTransform&(this.destinationRegion.equals$O(raster.getBounds$())));
}var bdata=null;
var sdata=null;
var idata=null;
if (this.sampleModel != null ) {
if (this.sampleModel.getDataType$() == 0) bdata=(raster.getDataBuffer$()).getData$();
 else if (this.sampleModel.getDataType$() == 1) sdata=(raster.getDataBuffer$()).getData$();
 else if (this.sampleModel.getDataType$() == 3) idata=(raster.getDataBuffer$()).getData$();
}switch (this.imageType) {
case 0:
p$1.read1Bit$BA.apply(this, [bdata]);
break;
case 1:
p$1.read4Bit$BA.apply(this, [bdata]);
break;
case 2:
p$1.read8Bit$BA.apply(this, [bdata]);
break;
case 3:
p$1.read24Bit$BA.apply(this, [bdata]);
break;
case 4:
p$1.read1Bit$BA.apply(this, [bdata]);
break;
case 5:
switch (Long.$ival(this.compression)) {
case 0:
p$1.read4Bit$BA.apply(this, [bdata]);
break;
case 2:
p$1.readRLE4$BA.apply(this, [bdata]);
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(2).getString$S("BMPImageReader1")]);
}
break;
case 6:
switch (Long.$ival(this.compression)) {
case 0:
p$1.read8Bit$BA.apply(this, [bdata]);
break;
case 1:
p$1.readRLE8$BA.apply(this, [bdata]);
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(2).getString$S("BMPImageReader1")]);
}
break;
case 7:
p$1.read24Bit$BA.apply(this, [bdata]);
break;
case 8:
p$1.read16Bit$HA.apply(this, [sdata]);
break;
case 9:
p$1.read32Bit$IA.apply(this, [idata]);
break;
case 16:
case 17:
case 18:
this.bi=p$1.readEmbedded$I$java_awt_image_BufferedImage$javax_imageio_ImageReadParam.apply(this, [Long.$ival(this.compression), this.bi, param]);
break;
case 10:
p$1.read1Bit$BA.apply(this, [bdata]);
break;
case 11:
switch (Long.$ival(this.compression)) {
case 0:
p$1.read4Bit$BA.apply(this, [bdata]);
break;
case 2:
p$1.readRLE4$BA.apply(this, [bdata]);
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(2).getString$S("BMPImageReader1")]);
}
case 12:
switch (Long.$ival(this.compression)) {
case 0:
p$1.read8Bit$BA.apply(this, [bdata]);
break;
case 1:
p$1.readRLE8$BA.apply(this, [bdata]);
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(2).getString$S("BMPImageReader1")]);
}
break;
case 13:
p$1.read16Bit$HA.apply(this, [sdata]);
break;
case 14:
p$1.read24Bit$BA.apply(this, [bdata]);
break;
case 15:
p$1.read32Bit$IA.apply(this, [idata]);
break;
}
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return this.bi;
});

Clazz.newMeth(C$, 'canReadRaster$',  function () {
return true;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
var bi=this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
return bi.getData$();
});

Clazz.newMeth(C$, 'resetHeaderInfo',  function () {
this.gotHeader=false;
this.bi=null;
this.sampleModel=this.originalSampleModel=null;
this.colorModel=this.originalColorModel=null;
}, p$1);

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.iis=null;
p$1.resetHeaderInfo.apply(this, []);
});

Clazz.newMeth(C$, 'read1Bit$BA',  function (bdata) {
var bytesPerScanline=((this.width + 7)/8|0);
var padding=bytesPerScanline % 4;
if (padding != 0) {
padding=4 - padding;
}var lineLength=bytesPerScanline + padding;
if (this.noTransform) {
var j=this.isBottomUp ? (this.height - 1) * bytesPerScanline : 0;
for (var i=0; i < this.height; i++) {
if (this.abortRequested$()) {
break;
}this.iis.readFully$BA$I$I(bdata, j, bytesPerScanline);
this.iis.skipBytes$I(padding);
j+=this.isBottomUp ? -bytesPerScanline : bytesPerScanline;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, i, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * i / this.destinationRegion.height);
}
} else {
var buf=Clazz.array(Byte.TYPE, [lineLength]);
var lineStride=(this.sampleModel).getScanlineStride$();
if (this.isBottomUp) {
var lastLine=this.sourceRegion.y + (this.destinationRegion.height - 1) * this.scaleY;
this.iis.skipBytes$I(lineLength * (this.height - 1 - lastLine ));
} else this.iis.skipBytes$I(lineLength * this.sourceRegion.y);
var skipLength=lineLength * (this.scaleY - 1);
var srcOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var srcPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
for (var i=this.destinationRegion.x, x=this.sourceRegion.x, j=0; i < this.destinationRegion.x + this.destinationRegion.width; i++, j++, x+=this.scaleX) {
srcPos[j]=x >> 3;
srcOff[j]=7 - (x & 7);
destPos[j]=i >> 3;
destOff[j]=7 - (i & 7);
}
var k=this.destinationRegion.y * lineStride;
if (this.isBottomUp) k+=(this.destinationRegion.height - 1) * lineStride;
for (var j=0, y=this.sourceRegion.y; j < this.destinationRegion.height; j++, y+=this.scaleY) {
if (this.abortRequested$()) break;
this.iis.read$BA$I$I(buf, 0, lineLength);
for (var i=0; i < this.destinationRegion.width; i++) {
var v=(buf[srcPos[i]] >> srcOff[i]) & 1;
bdata[$k$=k + destPos[i]]=(bdata[$k$]|(v << destOff[i])|0);
}
k+=this.isBottomUp ? -lineStride : lineStride;
this.iis.skipBytes$I(skipLength);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, j, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * j / this.destinationRegion.height);
}
}}, p$1);

Clazz.newMeth(C$, 'read4Bit$BA',  function (bdata) {
var bytesPerScanline=((this.width + 1)/2|0);
var padding=bytesPerScanline % 4;
if (padding != 0) padding=4 - padding;
var lineLength=bytesPerScanline + padding;
if (this.noTransform) {
var j=this.isBottomUp ? (this.height - 1) * bytesPerScanline : 0;
for (var i=0; i < this.height; i++) {
if (this.abortRequested$()) {
break;
}this.iis.readFully$BA$I$I(bdata, j, bytesPerScanline);
this.iis.skipBytes$I(padding);
j+=this.isBottomUp ? -bytesPerScanline : bytesPerScanline;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, i, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * i / this.destinationRegion.height);
}
} else {
var buf=Clazz.array(Byte.TYPE, [lineLength]);
var lineStride=(this.sampleModel).getScanlineStride$();
if (this.isBottomUp) {
var lastLine=this.sourceRegion.y + (this.destinationRegion.height - 1) * this.scaleY;
this.iis.skipBytes$I(lineLength * (this.height - 1 - lastLine ));
} else this.iis.skipBytes$I(lineLength * this.sourceRegion.y);
var skipLength=lineLength * (this.scaleY - 1);
var srcOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var srcPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
for (var i=this.destinationRegion.x, x=this.sourceRegion.x, j=0; i < this.destinationRegion.x + this.destinationRegion.width; i++, j++, x+=this.scaleX) {
srcPos[j]=x >> 1;
srcOff[j]=(1 - (x & 1)) << 2;
destPos[j]=i >> 1;
destOff[j]=(1 - (i & 1)) << 2;
}
var k=this.destinationRegion.y * lineStride;
if (this.isBottomUp) k+=(this.destinationRegion.height - 1) * lineStride;
for (var j=0, y=this.sourceRegion.y; j < this.destinationRegion.height; j++, y+=this.scaleY) {
if (this.abortRequested$()) break;
this.iis.read$BA$I$I(buf, 0, lineLength);
for (var i=0; i < this.destinationRegion.width; i++) {
var v=(buf[srcPos[i]] >> srcOff[i]) & 15;
bdata[$k$=k + destPos[i]]=(bdata[$k$]|(v << destOff[i])|0);
}
k+=this.isBottomUp ? -lineStride : lineStride;
this.iis.skipBytes$I(skipLength);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, j, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * j / this.destinationRegion.height);
}
}}, p$1);

Clazz.newMeth(C$, 'read8Bit$BA',  function (bdata) {
var padding=this.width % 4;
if (padding != 0) {
padding=4 - padding;
}var lineLength=this.width + padding;
if (this.noTransform) {
var j=this.isBottomUp ? (this.height - 1) * this.width : 0;
for (var i=0; i < this.height; i++) {
if (this.abortRequested$()) {
break;
}this.iis.readFully$BA$I$I(bdata, j, this.width);
this.iis.skipBytes$I(padding);
j+=this.isBottomUp ? -this.width : this.width;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, i, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * i / this.destinationRegion.height);
}
} else {
var buf=Clazz.array(Byte.TYPE, [lineLength]);
var lineStride=(this.sampleModel).getScanlineStride$();
if (this.isBottomUp) {
var lastLine=this.sourceRegion.y + (this.destinationRegion.height - 1) * this.scaleY;
this.iis.skipBytes$I(lineLength * (this.height - 1 - lastLine ));
} else this.iis.skipBytes$I(lineLength * this.sourceRegion.y);
var skipLength=lineLength * (this.scaleY - 1);
var k=this.destinationRegion.y * lineStride;
if (this.isBottomUp) k+=(this.destinationRegion.height - 1) * lineStride;
k+=this.destinationRegion.x;
for (var j=0, y=this.sourceRegion.y; j < this.destinationRegion.height; j++, y+=this.scaleY) {
if (this.abortRequested$()) break;
this.iis.read$BA$I$I(buf, 0, lineLength);
for (var i=0, m=this.sourceRegion.x; i < this.destinationRegion.width; i++, m+=this.scaleX) {
bdata[k + i]=buf[m];
}
k+=this.isBottomUp ? -lineStride : lineStride;
this.iis.skipBytes$I(skipLength);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, j, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * j / this.destinationRegion.height);
}
}}, p$1);

Clazz.newMeth(C$, 'read24Bit$BA',  function (bdata) {
var padding=this.width * 3 % 4;
if (padding != 0) padding=4 - padding;
var lineStride=this.width * 3;
var lineLength=lineStride + padding;
if (this.noTransform) {
var j=this.isBottomUp ? (this.height - 1) * this.width * 3  : 0;
for (var i=0; i < this.height; i++) {
if (this.abortRequested$()) {
break;
}this.iis.readFully$BA$I$I(bdata, j, lineStride);
this.iis.skipBytes$I(padding);
j+=this.isBottomUp ? -lineStride : lineStride;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, i, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * i / this.destinationRegion.height);
}
} else {
var buf=Clazz.array(Byte.TYPE, [lineLength]);
lineStride=(this.sampleModel).getScanlineStride$();
if (this.isBottomUp) {
var lastLine=this.sourceRegion.y + (this.destinationRegion.height - 1) * this.scaleY;
this.iis.skipBytes$I(lineLength * (this.height - 1 - lastLine ));
} else this.iis.skipBytes$I(lineLength * this.sourceRegion.y);
var skipLength=lineLength * (this.scaleY - 1);
var k=this.destinationRegion.y * lineStride;
if (this.isBottomUp) k+=(this.destinationRegion.height - 1) * lineStride;
k+=this.destinationRegion.x * 3;
for (var j=0, y=this.sourceRegion.y; j < this.destinationRegion.height; j++, y+=this.scaleY) {
if (this.abortRequested$()) break;
this.iis.read$BA$I$I(buf, 0, lineLength);
for (var i=0, m=3 * this.sourceRegion.x; i < this.destinationRegion.width; i++, m+=3 * this.scaleX) {
var n=3 * i + k;
for (var b=0; b < this.destBands.length; b++) bdata[n + this.destBands[b]]=buf[m + this.sourceBands[b]];

}
k+=this.isBottomUp ? -lineStride : lineStride;
this.iis.skipBytes$I(skipLength);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, j, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * j / this.destinationRegion.height);
}
}}, p$1);

Clazz.newMeth(C$, 'read16Bit$HA',  function (sdata) {
var padding=this.width * 2 % 4;
if (padding != 0) padding=4 - padding;
var lineLength=this.width + (padding/2|0);
if (this.noTransform) {
var j=this.isBottomUp ? (this.height - 1) * this.width : 0;
for (var i=0; i < this.height; i++) {
if (this.abortRequested$()) {
break;
}this.iis.readFully$HA$I$I(sdata, j, this.width);
this.iis.skipBytes$I(padding);
j+=this.isBottomUp ? -this.width : this.width;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, i, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * i / this.destinationRegion.height);
}
} else {
var buf=Clazz.array(Short.TYPE, [lineLength]);
var lineStride=(this.sampleModel).getScanlineStride$();
if (this.isBottomUp) {
var lastLine=this.sourceRegion.y + (this.destinationRegion.height - 1) * this.scaleY;
this.iis.skipBytes$I(lineLength * (this.height - 1 - lastLine ) << 1);
} else this.iis.skipBytes$I(lineLength * this.sourceRegion.y << 1);
var skipLength=lineLength * (this.scaleY - 1) << 1;
var k=this.destinationRegion.y * lineStride;
if (this.isBottomUp) k+=(this.destinationRegion.height - 1) * lineStride;
k+=this.destinationRegion.x;
for (var j=0, y=this.sourceRegion.y; j < this.destinationRegion.height; j++, y+=this.scaleY) {
if (this.abortRequested$()) break;
this.iis.readFully$HA$I$I(buf, 0, lineLength);
for (var i=0, m=this.sourceRegion.x; i < this.destinationRegion.width; i++, m+=this.scaleX) {
sdata[k + i]=buf[m];
}
k+=this.isBottomUp ? -lineStride : lineStride;
this.iis.skipBytes$I(skipLength);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, j, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * j / this.destinationRegion.height);
}
}}, p$1);

Clazz.newMeth(C$, 'read32Bit$IA',  function (idata) {
if (this.noTransform) {
var j=this.isBottomUp ? (this.height - 1) * this.width : 0;
for (var i=0; i < this.height; i++) {
if (this.abortRequested$()) {
break;
}this.iis.readFully$IA$I$I(idata, j, this.width);
j+=this.isBottomUp ? -this.width : this.width;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, i, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * i / this.destinationRegion.height);
}
} else {
var buf=Clazz.array(Integer.TYPE, [this.width]);
var lineStride=(this.sampleModel).getScanlineStride$();
if (this.isBottomUp) {
var lastLine=this.sourceRegion.y + (this.destinationRegion.height - 1) * this.scaleY;
this.iis.skipBytes$I(this.width * (this.height - 1 - lastLine ) << 2);
} else this.iis.skipBytes$I(this.width * this.sourceRegion.y << 2);
var skipLength=this.width * (this.scaleY - 1) << 2;
var k=this.destinationRegion.y * lineStride;
if (this.isBottomUp) k+=(this.destinationRegion.height - 1) * lineStride;
k+=this.destinationRegion.x;
for (var j=0, y=this.sourceRegion.y; j < this.destinationRegion.height; j++, y+=this.scaleY) {
if (this.abortRequested$()) break;
this.iis.readFully$IA$I$I(buf, 0, this.width);
for (var i=0, m=this.sourceRegion.x; i < this.destinationRegion.width; i++, m+=this.scaleX) {
idata[k + i]=buf[m];
}
k+=this.isBottomUp ? -lineStride : lineStride;
this.iis.skipBytes$I(skipLength);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, j, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * j / this.destinationRegion.height);
}
}}, p$1);

Clazz.newMeth(C$, 'readRLE8$BA',  function (bdata) {
var imSize=Long.$ival(this.imageSize);
if (imSize == 0) {
imSize=Long.$ival((Long.$sub(this.bitmapFileSize,this.bitmapOffset)));
}var padding=0;
var remainder=this.width % 4;
if (remainder != 0) {
padding=4 - remainder;
}var values=Clazz.array(Byte.TYPE, [imSize]);
var bytesRead=0;
this.iis.readFully$BA$I$I(values, 0, imSize);
p$1.decodeRLE8$I$I$BA$BA.apply(this, [imSize, padding, values, bdata]);
}, p$1);

Clazz.newMeth(C$, 'decodeRLE8$I$I$BA$BA',  function (imSize, padding, values, bdata) {
var val=Clazz.array(Byte.TYPE, [this.width * this.height]);
var count=0;
var l=0;
var value;
var flag=false;
var lineNo=this.isBottomUp ? this.height - 1 : 0;
var lineStride=(this.sampleModel).getScanlineStride$();
var finished=0;
while (count != imSize){
value=values[count++] & 255;
if (value == 0) {
switch (values[count++] & 255) {
case 0:
if (lineNo >= this.sourceRegion.y && lineNo < this.sourceRegion.y + this.sourceRegion.height ) {
if (this.noTransform) {
var pos=lineNo * this.width;
for (var i=0; i < this.width; i++) bdata[pos++]=val[i];

this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, lineNo, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
++finished;
} else if ((lineNo - this.sourceRegion.y) % this.scaleY == 0) {
var currentLine=((lineNo - this.sourceRegion.y)/this.scaleY|0) + this.destinationRegion.y;
var pos=currentLine * lineStride;
pos+=this.destinationRegion.x;
for (var i=this.sourceRegion.x; i < this.sourceRegion.x + this.sourceRegion.width; i+=this.scaleX) bdata[pos++]=val[i];

this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, currentLine, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
++finished;
}}this.processImageProgress$F(100.0 * finished / this.destinationRegion.height);
lineNo+=this.isBottomUp ? -1 : 1;
l=0;
if (this.abortRequested$()) {
flag=true;
}break;
case 1:
flag=true;
break;
case 2:
var xoff=values[count++] & 255;
var yoff=values[count] & 255;
l+=xoff + yoff * this.width;
break;
default:
var end=values[count - 1] & 255;
for (var i=0; i < end; i++) {
val[l++]=((values[count++] & 255)|0);
}
if ((end & 1) == 1) {
++count;
}}
} else {
for (var i=0; i < value; i++) {
val[l++]=((values[count] & 255)|0);
}
++count;
}if (flag) {
break;
}}
}, p$1);

Clazz.newMeth(C$, 'readRLE4$BA',  function (bdata) {
var imSize=Long.$ival(this.imageSize);
if (imSize == 0) {
imSize=Long.$ival((Long.$sub(this.bitmapFileSize,this.bitmapOffset)));
}var padding=0;
var remainder=this.width % 4;
if (remainder != 0) {
padding=4 - remainder;
}var values=Clazz.array(Byte.TYPE, [imSize]);
this.iis.readFully$BA$I$I(values, 0, imSize);
p$1.decodeRLE4$I$I$BA$BA.apply(this, [imSize, padding, values, bdata]);
}, p$1);

Clazz.newMeth(C$, 'decodeRLE4$I$I$BA$BA',  function (imSize, padding, values, bdata) {
var val=Clazz.array(Byte.TYPE, [this.width]);
var count=0;
var l=0;
var value;
var flag=false;
var lineNo=this.isBottomUp ? this.height - 1 : 0;
var lineStride=(this.sampleModel).getScanlineStride$();
var finished=0;
while (count != imSize){
value=values[count++] & 255;
if (value == 0) {
switch (values[count++] & 255) {
case 0:
if (lineNo >= this.sourceRegion.y && lineNo < this.sourceRegion.y + this.sourceRegion.height ) {
if (this.noTransform) {
var pos=lineNo * (this.width + 1 >> 1);
for (var i=0, j=0; i < this.width >> 1; i++) bdata[pos++]=(((val[j++] << 4) | val[j++])|0);

if ((this.width & 1) == 1) bdata[$k$=pos]=(bdata[$k$]|(val[this.width - 1] << 4)|0);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, lineNo, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
++finished;
} else if ((lineNo - this.sourceRegion.y) % this.scaleY == 0) {
var currentLine=((lineNo - this.sourceRegion.y)/this.scaleY|0) + this.destinationRegion.y;
var pos=currentLine * lineStride;
pos+=this.destinationRegion.x >> 1;
var shift=(1 - (this.destinationRegion.x & 1)) << 2;
for (var i=this.sourceRegion.x; i < this.sourceRegion.x + this.sourceRegion.width; i+=this.scaleX) {
bdata[$k$=pos]=(bdata[$k$]|(val[i] << shift)|0);
shift+=4;
if (shift == 4) {
++pos;
}shift&=7;
}
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.bi, 0, currentLine, this.destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
++finished;
}}this.processImageProgress$F(100.0 * finished / this.destinationRegion.height);
lineNo+=this.isBottomUp ? -1 : 1;
l=0;
if (this.abortRequested$()) {
flag=true;
}break;
case 1:
flag=true;
break;
case 2:
var xoff=values[count++] & 255;
var yoff=values[count] & 255;
l+=xoff + yoff * this.width;
break;
default:
var end=values[count - 1] & 255;
for (var i=0; i < end; i++) {
val[l++]=((((i & 1) == 0) ? (values[count] & 240) >> 4 : (values[count++] & 15))|0);
}
if ((end & 1) == 1) {
++count;
}if ((((Math.ceil((end/2|0))|0)) & 1) == 1) {
++count;
}break;
}
} else {
var alternate=Clazz.array(Integer.TYPE, -1, [(values[count] & 240) >> 4, values[count] & 15]);
for (var i=0; (i < value) && (l < this.width) ; i++) {
val[l++]=(alternate[i & 1]|0);
}
++count;
}if (flag) {
break;
}}
}, p$1);

Clazz.newMeth(C$, 'readEmbedded$I$java_awt_image_BufferedImage$javax_imageio_ImageReadParam',  function (type, bi, bmpParam) {
var format;
switch (type) {
case 4:
format="JPEG";
break;
case 5:
format="PNG";
break;
default:
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected compression type: " + type]);
}
var reader=$I$(21).getImageReadersByFormatName$S(format).next$();
if (reader == null ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(2).getString$S("BMPImageReader4") + " " + format ]);
}var buff=Clazz.array(Byte.TYPE, [Long.$ival(this.imageSize)]);
this.iis.read$BA(buff);
reader.setInput$O($I$(21,"createImageInputStream$O",[Clazz.new_($I$(22,1).c$$BA,[buff])]));
if (bi == null ) {
var embType=reader.getImageTypes$I(0).next$();
bi=embType.createBufferedImage$I$I(this.destinationRegion.x + this.destinationRegion.width, this.destinationRegion.y + this.destinationRegion.height);
}reader.addIIOReadProgressListener$javax_imageio_event_IIOReadProgressListener(((P$.BMPImageReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BMPImageReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['com.sun.imageio.plugins.bmp.BMPImageReader','.EmbeddedProgressAdapter']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'imageProgress$javax_imageio_ImageReader$F',  function (source, percentageDone) {
this.b$['javax.imageio.ImageReader'].processImageProgress$F.apply(this.b$['javax.imageio.ImageReader'], [percentageDone]);
});
})()
), Clazz.new_($I$(23,1),[this, null],P$.BMPImageReader$1)));
reader.addIIOReadUpdateListener$javax_imageio_event_IIOReadUpdateListener(((P$.BMPImageReader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "BMPImageReader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.imageio.event.IIOReadUpdateListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'imageUpdate$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$IA',  function (source, theImage, minX, minY, width, height, periodX, periodY, bands) {
this.b$['javax.imageio.ImageReader'].processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA.apply(this.b$['javax.imageio.ImageReader'], [theImage, minX, minY, width, height, periodX, periodY, bands]);
});

Clazz.newMeth(C$, 'passComplete$javax_imageio_ImageReader$java_awt_image_BufferedImage',  function (source, theImage) {
this.b$['javax.imageio.ImageReader'].processPassComplete$java_awt_image_BufferedImage.apply(this.b$['javax.imageio.ImageReader'], [theImage]);
});

Clazz.newMeth(C$, 'passStarted$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA',  function (source, theImage, pass, minPass, maxPass, minX, minY, periodX, periodY, bands) {
this.b$['javax.imageio.ImageReader'].processPassStarted$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA.apply(this.b$['javax.imageio.ImageReader'], [theImage, pass, minPass, maxPass, minX, minY, periodX, periodY, bands]);
});

Clazz.newMeth(C$, 'thumbnailPassComplete$javax_imageio_ImageReader$java_awt_image_BufferedImage',  function (source, thumb) {
});

Clazz.newMeth(C$, 'thumbnailPassStarted$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA',  function (source, thumb, pass, minPass, maxPass, minX, minY, periodX, periodY, bands) {
});

Clazz.newMeth(C$, 'thumbnailUpdate$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$IA',  function (source, theThumbnail, minX, minY, width, height, periodX, periodY, bands) {
});
})()
), Clazz.new_(P$.BMPImageReader$2.$init$,[this, null])));
reader.addIIOReadWarningListener$javax_imageio_event_IIOReadWarningListener(((P$.BMPImageReader$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "BMPImageReader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.imageio.event.IIOReadWarningListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'warningOccurred$javax_imageio_ImageReader$S',  function (source, warning) {
this.b$['javax.imageio.ImageReader'].processWarningOccurred$S.apply(this.b$['javax.imageio.ImageReader'], [warning]);
});
})()
), Clazz.new_(P$.BMPImageReader$3.$init$,[this, null])));
var param=reader.getDefaultReadParam$();
param.setDestination$java_awt_image_BufferedImage(bi);
param.setDestinationBands$IA(bmpParam.getDestinationBands$());
param.setDestinationOffset$java_awt_Point(bmpParam.getDestinationOffset$());
param.setSourceBands$IA(bmpParam.getSourceBands$());
param.setSourceRegion$java_awt_Rectangle(bmpParam.getSourceRegion$());
param.setSourceSubsampling$I$I$I$I(bmpParam.getSourceXSubsampling$(), bmpParam.getSourceYSubsampling$(), bmpParam.getSubsamplingXOffset$(), bmpParam.getSubsamplingYOffset$());
reader.read$I$javax_imageio_ImageReadParam(0, param);
return bi;
}, p$1);

Clazz.newMeth(C$, 'isLinkedProfileAllowed$',  function () {
if (C$.isLinkedProfileDisabled == null ) {
var a=((P$.BMPImageReader$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "BMPImageReader$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Boolean.valueOf$Z(Boolean.getBoolean$S("sun.imageio.plugins.bmp.disableLinkedProfiles"));
});
})()
), Clazz.new_(P$.BMPImageReader$4.$init$,[this, null]));
C$.isLinkedProfileDisabled=$I$(24).doPrivileged$java_security_PrivilegedAction(a);
}return (!((C$.isLinkedProfileDisabled).$c()));
}, 1);

Clazz.newMeth(C$, 'isUncOrDevicePath$BA',  function (p) {
if (C$.isWindowsPlatform == null ) {
var a=((P$.BMPImageReader$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "BMPImageReader$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var osname=System.getProperty$S("os.name");
return Boolean.valueOf$Z((osname != null  && osname.toLowerCase$().startsWith$S("win") ));
});
})()
), Clazz.new_(P$.BMPImageReader$5.$init$,[this, null]));
C$.isWindowsPlatform=$I$(24).doPrivileged$java_security_PrivilegedAction(a);
}if ((!((C$.isWindowsPlatform).$c()))) {
return false;
}if (p[0] == 47 ) p[0]=("\\".$c()|0);
if (p[1] == 47 ) p[1]=("\\".$c()|0);
if (p[3] == 47 ) p[3]=("\\".$c()|0);
if ((p[0] == 92 ) && (p[1] == 92 ) ) {
if ((p[2] == 63 ) && (p[3] == 92 ) ) {
return ((p[4] == 85  || p[4] == 117  ) && (p[5] == 78  || p[5] == 110  ) && (p[6] == 67  || p[6] == 99  )  );
} else {
return true;
}} else {
return false;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.isLinkedProfileDisabled=null;
C$.isWindowsPlatform=null;
};
var $s$ = new Int16Array(1);
var $k$;
;
(function(){/*c*/var C$=Clazz.newClass(P$.BMPImageReader, "EmbeddedProgressAdapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.imageio.event.IIOReadProgressListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'imageComplete$javax_imageio_ImageReader',  function (src) {
});

Clazz.newMeth(C$, 'imageProgress$javax_imageio_ImageReader$F',  function (src, percentageDone) {
});

Clazz.newMeth(C$, 'imageStarted$javax_imageio_ImageReader$I',  function (src, imageIndex) {
});

Clazz.newMeth(C$, 'thumbnailComplete$javax_imageio_ImageReader',  function (src) {
});

Clazz.newMeth(C$, 'thumbnailProgress$javax_imageio_ImageReader$F',  function (src, percentageDone) {
});

Clazz.newMeth(C$, 'thumbnailStarted$javax_imageio_ImageReader$I$I',  function (src, iIdx, tIdx) {
});

Clazz.newMeth(C$, 'sequenceComplete$javax_imageio_ImageReader',  function (src) {
});

Clazz.newMeth(C$, 'sequenceStarted$javax_imageio_ImageReader$I',  function (src, minIndex) {
});

Clazz.newMeth(C$, 'readAborted$javax_imageio_ImageReader',  function (src) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

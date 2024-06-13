(function(){var P$=Clazz.newPackage("javax.imageio"),I$=[[0,'java.awt.image.DirectColorModel','javax.imageio.ImageTypeSpecifier','java.awt.image.PixelInterleavedSampleModel','java.awt.image.BandedSampleModel','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel','java.awt.image.IndexColorModel','java.awt.image.MultiPixelPackedSampleModel',['javax.imageio.ImageTypeSpecifier','.Packed'],'java.awt.image.DataBuffer',['javax.imageio.ImageTypeSpecifier','.Interleaved'],['javax.imageio.ImageTypeSpecifier','.Banded'],['javax.imageio.ImageTypeSpecifier','.Grayscale'],['javax.imageio.ImageTypeSpecifier','.Indexed'],'java.awt.image.Raster','java.awt.Point','java.awt.image.BufferedImage','java.util.Hashtable']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageTypeSpecifier", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Packed',8],['Interleaved',8],['Banded',8],['Grayscale',8],['Indexed',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['colorModel','java.awt.image.ColorModel','sampleModel','java.awt.image.SampleModel']]
,['O',['BISpecifier','javax.imageio.ImageTypeSpecifier[]','sRGB','java.awt.color.ColorSpace']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$java_awt_image_SampleModel',  function (colorModel, sampleModel) {
;C$.$init$.apply(this);
if (colorModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["colorModel == null!"]);
}if (sampleModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sampleModel == null!"]);
}if (!colorModel.isCompatibleSampleModel$java_awt_image_SampleModel(sampleModel)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sampleModel is incompatible with colorModel!"]);
}this.colorModel=colorModel;
this.sampleModel=sampleModel;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage',  function (image) {
;C$.$init$.apply(this);
if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}this.colorModel=image.getColorModel$();
this.sampleModel=image.getSampleModel$();
}, 1);

Clazz.newMeth(C$, 'createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z',  function (colorSpace, redMask, greenMask, blueMask, alphaMask, transferType, isAlphaPremultiplied) {
return Clazz.new_($I$(9,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z,[colorSpace, redMask, greenMask, blueMask, alphaMask, transferType, isAlphaPremultiplied]);
}, 1);

Clazz.newMeth(C$, 'createComponentCM$java_awt_color_ColorSpace$I$I$Z$Z',  function (colorSpace, numBands, dataType, hasAlpha, isAlphaPremultiplied) {
var transparency=hasAlpha ? 3 : 1;
var numBits=Clazz.array(Integer.TYPE, [numBands]);
var bits=$I$(10).getDataTypeSize$I(dataType);
for (var i=0; i < numBands; i++) {
numBits[i]=bits;
}
return Clazz.new_($I$(6,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[colorSpace, numBits, hasAlpha, isAlphaPremultiplied, transparency, dataType]);
}, 1);

Clazz.newMeth(C$, 'createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z',  function (colorSpace, bandOffsets, dataType, hasAlpha, isAlphaPremultiplied) {
return Clazz.new_($I$(11,1).c$$java_awt_color_ColorSpace$IA$I$Z$Z,[colorSpace, bandOffsets, dataType, hasAlpha, isAlphaPremultiplied]);
}, 1);

Clazz.newMeth(C$, 'createBanded$java_awt_color_ColorSpace$IA$IA$I$Z$Z',  function (colorSpace, bankIndices, bandOffsets, dataType, hasAlpha, isAlphaPremultiplied) {
return Clazz.new_($I$(12,1).c$$java_awt_color_ColorSpace$IA$IA$I$Z$Z,[colorSpace, bankIndices, bandOffsets, dataType, hasAlpha, isAlphaPremultiplied]);
}, 1);

Clazz.newMeth(C$, 'createGrayscale$I$I$Z',  function (bits, dataType, isSigned) {
return Clazz.new_($I$(13,1).c$$I$I$Z$Z$Z,[bits, dataType, isSigned, false, false]);
}, 1);

Clazz.newMeth(C$, 'createGrayscale$I$I$Z$Z',  function (bits, dataType, isSigned, isAlphaPremultiplied) {
return Clazz.new_($I$(13,1).c$$I$I$Z$Z$Z,[bits, dataType, isSigned, true, isAlphaPremultiplied]);
}, 1);

Clazz.newMeth(C$, 'createIndexed$BA$BA$BA$BA$I$I',  function (redLUT, greenLUT, blueLUT, alphaLUT, bits, dataType) {
return Clazz.new_($I$(14,1).c$$BA$BA$BA$BA$I$I,[redLUT, greenLUT, blueLUT, alphaLUT, bits, dataType]);
}, 1);

Clazz.newMeth(C$, 'createFromBufferedImageType$I',  function (bufferedImageType) {
if (bufferedImageType >= 1 && bufferedImageType <= 13 ) {
return C$.getSpecifier$I(bufferedImageType);
} else if (bufferedImageType == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create from TYPE_CUSTOM!"]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid BufferedImage type!"]);
}}, 1);

Clazz.newMeth(C$, 'createFromRenderedImage$java_awt_image_RenderedImage',  function (image) {
if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}if (Clazz.instanceOf(image, "java.awt.image.BufferedImage")) {
var bufferedImageType=(image).getType$();
if (bufferedImageType != 0) {
return C$.getSpecifier$I(bufferedImageType);
}}return Clazz.new_(C$.c$$java_awt_image_RenderedImage,[image]);
}, 1);

Clazz.newMeth(C$, 'getBufferedImageType$',  function () {
var bi=this.createBufferedImage$I$I(1, 1);
return bi.getType$();
});

Clazz.newMeth(C$, 'getNumComponents$',  function () {
return this.colorModel.getNumComponents$();
});

Clazz.newMeth(C$, 'getNumBands$',  function () {
return this.sampleModel.getNumBands$();
});

Clazz.newMeth(C$, 'getBitsPerBand$I',  function (band) {
if (!!(band < 0 | band >= this.getNumBands$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["band out of range!"]);
}return this.sampleModel.getSampleSize$I(band);
});

Clazz.newMeth(C$, 'getSampleModel$',  function () {
return this.sampleModel;
});

Clazz.newMeth(C$, 'getSampleModel$I$I',  function (width, height) {
if (Long.$gt(Long.$mul(width,height),2147483647 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["width*height > Integer.MAX_VALUE!"]);
}return this.sampleModel.createCompatibleSampleModel$I$I(width, height);
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return this.colorModel;
});

Clazz.newMeth(C$, 'createBufferedImage$I$I',  function (width, height) {
try {
var sampleModel=this.getSampleModel$I$I(width, height);
var raster=$I$(15,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[sampleModel, Clazz.new_($I$(16,1).c$$I$I,[0, 0])]);
return Clazz.new_([this.colorModel, raster, this.colorModel.isAlphaPremultiplied$(), Clazz.new_($I$(18,1))],$I$(17,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
} catch (e) {
if (Clazz.exceptionOf(e,"NegativeArraySizeException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Array size > Integer.MAX_VALUE!"]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if ((o == null ) || !(Clazz.instanceOf(o, "javax.imageio.ImageTypeSpecifier")) ) {
return false;
}var that=o;
return (this.colorModel.equals$O(that.colorModel)) && (this.sampleModel.equals$O(that.sampleModel)) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (9 * this.colorModel.hashCode$()) + (14 * this.sampleModel.hashCode$());
});

Clazz.newMeth(C$, 'getSpecifier$I',  function (type) {
if (C$.BISpecifier[type] == null ) {
C$.BISpecifier[type]=C$.createSpecifier$I(type);
}return C$.BISpecifier[type];
}, 1);

Clazz.newMeth(C$, 'createSpecifier$I',  function (type) {
switch (type) {
case 1:
return C$.createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(C$.sRGB, 16711680, 65280, 255, 0, 3, false);
case 2:
return C$.createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(C$.sRGB, 16711680, 65280, 255, -16777216, 3, false);
case 3:
return C$.createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(C$.sRGB, 16711680, 65280, 255, -16777216, 3, true);
case 4:
return C$.createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(C$.sRGB, 255, 65280, 16711680, 0, 3, false);
case 5:
return C$.createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(C$.sRGB, Clazz.array(Integer.TYPE, -1, [2, 1, 0]), 0, false, false);
case 6:
return C$.createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(C$.sRGB, Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0]), 0, true, false);
case -6:
return C$.createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(C$.sRGB, Clazz.array(Integer.TYPE, -1, [0, 3, 2, 1]), 0, true, false);
case 7:
return C$.createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(C$.sRGB, Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0]), 0, true, true);
case 8:
return C$.createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(C$.sRGB, 63488, 2016, 31, 0, 1, false);
case 9:
return C$.createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(C$.sRGB, 31744, 992, 31, 0, 1, false);
case 10:
return C$.createGrayscale$I$I$Z(8, 0, false);
case 11:
return C$.createGrayscale$I$I$Z(16, 1, false);
case 12:
return C$.createGrayscale$I$I$Z(1, 0, false);
case 13:
{
var bi=Clazz.new_($I$(17,1).c$$I$I$I,[1, 1, 13]);
var icm=bi.getColorModel$();
var mapSize=icm.getMapSize$();
var redLUT=Clazz.array(Byte.TYPE, [mapSize]);
var greenLUT=Clazz.array(Byte.TYPE, [mapSize]);
var blueLUT=Clazz.array(Byte.TYPE, [mapSize]);
var alphaLUT=Clazz.array(Byte.TYPE, [mapSize]);
icm.getReds$BA(redLUT);
icm.getGreens$BA(greenLUT);
icm.getBlues$BA(blueLUT);
icm.getAlphas$BA(alphaLUT);
return C$.createIndexed$BA$BA$BA$BA$I$I(redLUT, greenLUT, blueLUT, alphaLUT, 8, 0);
}default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid BufferedImage type!"]);
}
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.sRGB=$I$(5).getInstance$I(1000);
C$.BISpecifier=Clazz.array(C$, [14]);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageTypeSpecifier, "Packed", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.imageio.ImageTypeSpecifier');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAlphaPremultiplied'],'I',['redMask','greenMask','blueMask','alphaMask','transferType'],'O',['colorSpace','java.awt.color.ColorSpace']]]

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$I$I$I$I$I$Z',  function (colorSpace, redMask, greenMask, blueMask, alphaMask, transferType, isAlphaPremultiplied) {
Clazz.super_(C$, this);
if (colorSpace == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["colorSpace == null!"]);
}if (colorSpace.getType$() != 5) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["colorSpace is not of type TYPE_RGB!"]);
}if (transferType != 0 && transferType != 1  && transferType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for transferType!"]);
}if (redMask == 0 && greenMask == 0  && blueMask == 0  && alphaMask == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No mask has at least 1 bit set!"]);
}this.colorSpace=colorSpace;
this.redMask=redMask;
this.greenMask=greenMask;
this.blueMask=blueMask;
this.alphaMask=alphaMask;
this.transferType=transferType;
this.isAlphaPremultiplied=isAlphaPremultiplied;
var bits=32;
this.colorModel=Clazz.new_($I$(1,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I,[colorSpace, bits, redMask, greenMask, blueMask, alphaMask, isAlphaPremultiplied, transferType]);
this.sampleModel=this.colorModel.createCompatibleSampleModel$I$I(1, 1);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageTypeSpecifier, "Interleaved", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.imageio.ImageTypeSpecifier');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasAlpha','isAlphaPremultiplied'],'I',['dataType'],'O',['colorSpace','java.awt.color.ColorSpace','bandOffsets','int[]']]]

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$IA$I$Z$Z',  function (colorSpace, bandOffsets, dataType, hasAlpha, isAlphaPremultiplied) {
Clazz.super_(C$, this);
if (colorSpace == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["colorSpace == null!"]);
}if (bandOffsets == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bandOffsets == null!"]);
}var numBands=colorSpace.getNumComponents$() + (hasAlpha ? 1 : 0);
if (bandOffsets.length != numBands) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bandOffsets.length is wrong!"]);
}if (dataType != 0 && dataType != 2  && dataType != 1  && dataType != 3  && dataType != 4  && dataType != 5 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for dataType!"]);
}this.colorSpace=colorSpace;
this.bandOffsets=bandOffsets.clone$();
this.dataType=dataType;
this.hasAlpha=hasAlpha;
this.isAlphaPremultiplied=isAlphaPremultiplied;
this.colorModel=$I$(2).createComponentCM$java_awt_color_ColorSpace$I$I$Z$Z(colorSpace, bandOffsets.length, dataType, hasAlpha, isAlphaPremultiplied);
var minBandOffset=bandOffsets[0];
var maxBandOffset=minBandOffset;
for (var i=0; i < bandOffsets.length; i++) {
var offset=bandOffsets[i];
minBandOffset=Math.min(offset, minBandOffset);
maxBandOffset=Math.max(offset, maxBandOffset);
}
var pixelStride=maxBandOffset - minBandOffset + 1;
var w=1;
var h=1;
this.sampleModel=Clazz.new_($I$(3,1).c$$I$I$I$I$I$IA,[dataType, w, h, pixelStride, w * pixelStride, bandOffsets]);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if ((o == null ) || !(Clazz.instanceOf(o, "javax.imageio.ImageTypeSpecifier.Interleaved")) ) {
return false;
}var that=o;
if ((!(this.colorSpace.equals$O(that.colorSpace))) || (this.dataType != that.dataType) || (this.hasAlpha != that.hasAlpha ) || (this.isAlphaPremultiplied != that.isAlphaPremultiplied ) || (this.bandOffsets.length != that.bandOffsets.length)  ) {
return false;
}for (var i=0; i < this.bandOffsets.length; i++) {
if (this.bandOffsets[i] != that.bandOffsets[i]) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (C$.superclazz.prototype.hashCode$.apply(this, []) + (4 * this.bandOffsets.length) + (25 * this.dataType) + (this.hasAlpha ? 17 : 18) );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageTypeSpecifier, "Banded", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.imageio.ImageTypeSpecifier');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasAlpha','isAlphaPremultiplied'],'I',['dataType'],'O',['colorSpace','java.awt.color.ColorSpace','bankIndices','int[]','+bandOffsets']]]

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$IA$IA$I$Z$Z',  function (colorSpace, bankIndices, bandOffsets, dataType, hasAlpha, isAlphaPremultiplied) {
Clazz.super_(C$, this);
if (colorSpace == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["colorSpace == null!"]);
}if (bankIndices == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bankIndices == null!"]);
}if (bandOffsets == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bandOffsets == null!"]);
}if (bankIndices.length != bandOffsets.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bankIndices.length != bandOffsets.length!"]);
}if (dataType != 0 && dataType != 2  && dataType != 1  && dataType != 3  && dataType != 4  && dataType != 5 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for dataType!"]);
}var numBands=colorSpace.getNumComponents$() + (hasAlpha ? 1 : 0);
if (bandOffsets.length != numBands) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bandOffsets.length is wrong!"]);
}this.colorSpace=colorSpace;
this.bankIndices=bankIndices.clone$();
this.bandOffsets=bandOffsets.clone$();
this.dataType=dataType;
this.hasAlpha=hasAlpha;
this.isAlphaPremultiplied=isAlphaPremultiplied;
this.colorModel=$I$(2).createComponentCM$java_awt_color_ColorSpace$I$I$Z$Z(colorSpace, bankIndices.length, dataType, hasAlpha, isAlphaPremultiplied);
var w=1;
var h=1;
this.sampleModel=Clazz.new_($I$(4,1).c$$I$I$I$I$IA$IA,[dataType, w, h, w, bankIndices, bandOffsets]);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if ((o == null ) || !(Clazz.instanceOf(o, "javax.imageio.ImageTypeSpecifier.Banded")) ) {
return false;
}var that=o;
if ((!(this.colorSpace.equals$O(that.colorSpace))) || (this.dataType != that.dataType) || (this.hasAlpha != that.hasAlpha ) || (this.isAlphaPremultiplied != that.isAlphaPremultiplied ) || (this.bankIndices.length != that.bankIndices.length) || (this.bandOffsets.length != that.bandOffsets.length)  ) {
return false;
}for (var i=0; i < this.bankIndices.length; i++) {
if (this.bankIndices[i] != that.bankIndices[i]) {
return false;
}}
for (var i=0; i < this.bandOffsets.length; i++) {
if (this.bandOffsets[i] != that.bandOffsets[i]) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (C$.superclazz.prototype.hashCode$.apply(this, []) + (3 * this.bandOffsets.length) + (7 * this.bankIndices.length) + (21 * this.dataType) + (this.hasAlpha ? 19 : 29) );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageTypeSpecifier, "Grayscale", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.imageio.ImageTypeSpecifier');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isSigned','hasAlpha','isAlphaPremultiplied'],'I',['bits','dataType']]]

Clazz.newMeth(C$, 'c$$I$I$Z$Z$Z',  function (bits, dataType, isSigned, hasAlpha, isAlphaPremultiplied) {
Clazz.super_(C$, this);
if (bits != 1 && bits != 2  && bits != 4  && bits != 8  && bits != 16 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for bits!"]);
}if (dataType != 0 && dataType != 2  && dataType != 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for dataType!"]);
}if (bits > 8 && dataType == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many bits for dataType!"]);
}this.bits=bits;
this.dataType=dataType;
this.isSigned=isSigned;
this.hasAlpha=hasAlpha;
this.isAlphaPremultiplied=isAlphaPremultiplied;
var colorSpace=$I$(5).getInstance$I(1003);
if ((bits == 8 && dataType == 0 ) || (bits == 16 && (dataType == 2 || dataType == 1 ) ) ) {
var numBands=hasAlpha ? 2 : 1;
var transparency=hasAlpha ? 3 : 1;
var nBits=Clazz.array(Integer.TYPE, [numBands]);
nBits[0]=bits;
if (numBands == 2) {
nBits[1]=bits;
}this.colorModel=Clazz.new_($I$(6,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[colorSpace, nBits, hasAlpha, isAlphaPremultiplied, transparency, dataType]);
var bandOffsets=Clazz.array(Integer.TYPE, [numBands]);
bandOffsets[0]=0;
if (numBands == 2) {
bandOffsets[1]=1;
}var w=1;
var h=1;
this.sampleModel=Clazz.new_($I$(3,1).c$$I$I$I$I$I$IA,[dataType, w, h, numBands, w * numBands, bandOffsets]);
} else {
var numEntries=1 << bits;
var arr=Clazz.array(Byte.TYPE, [numEntries]);
for (var i=0; i < numEntries; i++) {
arr[i]=(((i * 255/(numEntries - 1)|0))|0);
}
this.colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[bits, numEntries, arr, arr, arr]);
this.sampleModel=Clazz.new_($I$(8,1).c$$I$I$I$I,[dataType, 1, 1, bits]);
}}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageTypeSpecifier, "Indexed", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.imageio.ImageTypeSpecifier');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alphaLUT=null;
},1);

C$.$fields$=[['I',['bits','dataType'],'O',['redLUT','byte[]','+greenLUT','+blueLUT','+alphaLUT']]]

Clazz.newMeth(C$, 'c$$BA$BA$BA$BA$I$I',  function (redLUT, greenLUT, blueLUT, alphaLUT, bits, dataType) {
Clazz.super_(C$, this);
if (redLUT == null  || greenLUT == null   || blueLUT == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["LUT is null!"]);
}if (bits != 1 && bits != 2  && bits != 4  && bits != 8  && bits != 16 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for bits!"]);
}if (dataType != 0 && dataType != 2  && dataType != 1  && dataType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for dataType!"]);
}if ((bits > 8 && dataType == 0 ) || (bits > 16 && dataType != 3 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Too many bits for dataType!"]);
}var len=1 << bits;
if (redLUT.length != len || greenLUT.length != len  || blueLUT.length != len  || (alphaLUT != null  && alphaLUT.length != len ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["LUT has improper length!"]);
}this.redLUT=redLUT.clone$();
this.greenLUT=greenLUT.clone$();
this.blueLUT=blueLUT.clone$();
if (alphaLUT != null ) {
this.alphaLUT=alphaLUT.clone$();
}this.bits=bits;
this.dataType=dataType;
if (alphaLUT == null ) {
this.colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[bits, redLUT.length, redLUT, greenLUT, blueLUT]);
} else {
this.colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA$BA,[bits, redLUT.length, redLUT, greenLUT, blueLUT, alphaLUT]);
}if ((bits == 8 && dataType == 0 ) || (bits == 16 && (dataType == 2 || dataType == 1 ) ) ) {
var bandOffsets=Clazz.array(Integer.TYPE, -1, [0]);
this.sampleModel=Clazz.new_($I$(3,1).c$$I$I$I$I$I$IA,[dataType, 1, 1, 1, 1, bandOffsets]);
} else {
this.sampleModel=Clazz.new_($I$(8,1).c$$I$I$I$I,[dataType, 1, 1, bits]);
}}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

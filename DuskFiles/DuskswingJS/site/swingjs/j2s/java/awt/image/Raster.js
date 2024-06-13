(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.image.DataBufferByte','java.awt.image.DataBufferUShort','java.awt.image.DataBufferInt','java.awt.image.DataBuffer','java.awt.Point','java.awt.image.PixelInterleavedSampleModel','sun.awt.image.ByteInterleavedRaster','sun.awt.image.ShortInterleavedRaster','java.awt.image.BandedSampleModel','sun.awt.image.ByteBandedRaster','sun.awt.image.ShortBandedRaster','sun.awt.image.SunWritableRaster','java.awt.image.SinglePixelPackedSampleModel','sun.awt.image.IntegerInterleavedRaster','java.awt.image.MultiPixelPackedSampleModel','sun.awt.image.BytePackedRaster','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Raster");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['minX','minY','width','height','sampleModelTranslateX','sampleModelTranslateY','numBands','numDataElements'],'O',['秘image','java.awt.image.BufferedImage','sampleModel','java.awt.image.SampleModel','dataBuffer','java.awt.image.DataBuffer','parent','java.awt.image.Raster']]]

Clazz.newMeth(C$, '秘setImage$java_awt_image_BufferedImage',  function (image) {
this.秘image=this.dataBuffer.秘image=image;
});

Clazz.newMeth(C$, 'createInterleavedRaster$I$I$I$I$java_awt_Point',  function (dataType, w, h, bands, location) {
var bandOffsets=Clazz.array(Integer.TYPE, [bands]);
for (var i=0; i < bands; i++) {
bandOffsets[i]=i;
}
return C$.createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(dataType, w, h, w * bands, bands, bandOffsets, location);
}, 1);

Clazz.newMeth(C$, 'createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point',  function (dataType, w, h, scanlineStride, pixelStride, bandOffsets, location) {
var d;
var size=scanlineStride * (h - 1) + pixelStride * w;
switch (dataType) {
case 0:
d=Clazz.new_($I$(1,1).c$$I,[size]);
break;
case 1:
d=Clazz.new_($I$(2,1).c$$I,[size]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
return C$.createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point(d, w, h, scanlineStride, pixelStride, bandOffsets, location);
}, 1);

Clazz.newMeth(C$, 'createBandedRaster$I$I$I$I$java_awt_Point',  function (dataType, w, h, bands, location) {
if (bands < 1) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Number of bands (" + bands + ") must" + " be greater than 0" ]);
}var bankIndices=Clazz.array(Integer.TYPE, [bands]);
var bandOffsets=Clazz.array(Integer.TYPE, [bands]);
for (var i=0; i < bands; i++) {
bankIndices[i]=i;
bandOffsets[i]=0;
}
return C$.createBandedRaster$I$I$I$I$IA$IA$java_awt_Point(dataType, w, h, w, bankIndices, bandOffsets, location);
}, 1);

Clazz.newMeth(C$, 'createBandedRaster$I$I$I$I$IA$IA$java_awt_Point',  function (dataType, w, h, scanlineStride, bankIndices, bandOffsets, location) {
var d;
if (bankIndices == null ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Bank indices array is null"]);
}if (bandOffsets == null ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Band offsets array is null"]);
}var bands=bandOffsets.length;
var maxBank=bankIndices[0];
var maxBandOff=bandOffsets[0];
for (var i=1; i < bands; i++) {
if (bankIndices[i] > maxBank) {
maxBank=bankIndices[i];
}if (bandOffsets[i] > maxBandOff) {
maxBandOff=bandOffsets[i];
}}
var banks=maxBank + 1;
var size=maxBandOff + scanlineStride * (h - 1) + w;
switch (dataType) {
case 0:
d=Clazz.new_($I$(1,1).c$$I$I,[size, banks]);
break;
case 1:
d=Clazz.new_($I$(2,1).c$$I$I,[size, banks]);
break;
case 3:
d=Clazz.new_($I$(3,1).c$$I$I,[size, banks]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
return C$.createBandedRaster$java_awt_image_DataBuffer$I$I$I$IA$IA$java_awt_Point(d, w, h, scanlineStride, bankIndices, bandOffsets, location);
}, 1);

Clazz.newMeth(C$, 'createPackedRaster$I$I$I$IA$java_awt_Point',  function (dataType, w, h, bandMasks, location) {
var d;
switch (dataType) {
case 0:
d=Clazz.new_($I$(1,1).c$$I,[w * h]);
break;
case 1:
d=Clazz.new_($I$(2,1).c$$I,[w * h]);
break;
case 3:
d=Clazz.new_($I$(3,1).c$$I,[w * h]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
return C$.createPackedRaster$java_awt_image_DataBuffer$I$I$I$IA$java_awt_Point(d, w, h, w, bandMasks, location);
}, 1);

Clazz.newMeth(C$, 'createPackedRaster$I$I$I$I$I$java_awt_Point',  function (dataType, w, h, bands, bitsPerBand, location) {
var d;
if (bands <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bands (" + bands + ") must be greater than 0" ]);
}if (bitsPerBand <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bits per band (" + bitsPerBand + ") must be greater than 0" ]);
}if (bands != 1) {
var masks=Clazz.array(Integer.TYPE, [bands]);
var mask=(1 << bitsPerBand) - 1;
var shift=(bands - 1) * bitsPerBand;
if (shift + bitsPerBand > $I$(4).getDataTypeSize$I(dataType)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bitsPerBand(" + bitsPerBand + ") * bands is " + " greater than data type " + "size." ]);
}switch (dataType) {
case 0:
case 1:
case 3:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
for (var i=0; i < bands; i++) {
masks[i]=mask << shift;
shift=shift - bitsPerBand;
}
return C$.createPackedRaster$I$I$I$IA$java_awt_Point(dataType, w, h, masks, location);
} else {
var fw=w;
switch (dataType) {
case 0:
d=Clazz.new_([((Math.ceil(fw / ((8/bitsPerBand|0))))|0) * h],$I$(1,1).c$$I);
break;
case 1:
d=Clazz.new_([((Math.ceil(fw / ((16/bitsPerBand|0))))|0) * h],$I$(2,1).c$$I);
break;
case 3:
d=Clazz.new_([((Math.ceil(fw / ((32/bitsPerBand|0))))|0) * h],$I$(3,1).c$$I);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
return C$.createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point(d, w, h, bitsPerBand, location);
}}, 1);

Clazz.newMeth(C$, 'createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point',  function (dataBuffer, w, h, scanlineStride, pixelStride, bandOffsets, location) {
if (dataBuffer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
}var dataType=dataBuffer.getDataType$();
var csm=Clazz.new_($I$(6,1).c$$I$I$I$I$I$IA,[dataType, w, h, pixelStride, scanlineStride, bandOffsets]);
switch (dataType) {
case 0:
return Clazz.new_($I$(7,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[csm, dataBuffer, location]);
case 1:
return Clazz.new_($I$(8,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[csm, dataBuffer, location]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
}, 1);

Clazz.newMeth(C$, 'createBandedRaster$java_awt_image_DataBuffer$I$I$I$IA$IA$java_awt_Point',  function (dataBuffer, w, h, scanlineStride, bankIndices, bandOffsets, location) {
if (dataBuffer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
}var dataType=dataBuffer.getDataType$();
var bands=bankIndices.length;
if (bandOffsets.length != bands) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bankIndices.length != bandOffsets.length"]);
}var bsm=Clazz.new_($I$(9,1).c$$I$I$I$I$IA$IA,[dataType, w, h, scanlineStride, bankIndices, bandOffsets]);
switch (dataType) {
case 0:
return Clazz.new_($I$(10,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[bsm, dataBuffer, location]);
case 1:
return Clazz.new_($I$(11,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[bsm, dataBuffer, location]);
case 3:
return Clazz.new_($I$(12,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[bsm, dataBuffer, location]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
}, 1);

Clazz.newMeth(C$, 'createPackedRaster$java_awt_image_DataBuffer$I$I$I$IA$java_awt_Point',  function (dataBuffer, w, h, scanlineStride, bandMasks, location) {
if (dataBuffer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
}var dataType=dataBuffer.getDataType$();
var sppsm=Clazz.new_($I$(13,1).c$$I$I$I$I$IA,[dataType, w, h, scanlineStride, bandMasks]);
switch (dataType) {
case 0:
return Clazz.new_($I$(7,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sppsm, dataBuffer, location]);
case 1:
return Clazz.new_($I$(8,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sppsm, dataBuffer, location]);
case 3:
return Clazz.new_($I$(14,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sppsm, dataBuffer, location]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
}, 1);

Clazz.newMeth(C$, 'createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point',  function (dataBuffer, w, h, bitsPerPixel, location) {
if (dataBuffer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
}var dataType=dataBuffer.getDataType$();
if (dataType != 0 && dataType != 1  && dataType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}if (dataBuffer.getNumBanks$() != 1) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["DataBuffer for packed Rasters must only have 1 bank."]);
}var mppsm=Clazz.new_($I$(15,1).c$$I$I$I$I,[dataType, w, h, bitsPerPixel]);
if (dataType == 0 && (bitsPerPixel == 1 || bitsPerPixel == 2  || bitsPerPixel == 4 ) ) {
return Clazz.new_($I$(16,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[mppsm, dataBuffer, location]);
} else {
return Clazz.new_($I$(12,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[mppsm, dataBuffer, location]);
}}, 1);

Clazz.newMeth(C$, 'createRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sm, db, location) {
if ((sm == null ) || (db == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["SampleModel and DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
}var dataType=sm.getDataType$();
if (Clazz.instanceOf(sm, "java.awt.image.PixelInterleavedSampleModel")) {
switch (dataType) {
case 0:
return Clazz.new_($I$(7,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
case 1:
return Clazz.new_($I$(8,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}
} else if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
switch (dataType) {
case 0:
return Clazz.new_($I$(7,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
case 1:
return Clazz.new_($I$(8,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
case 3:
return Clazz.new_($I$(14,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}
} else if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel") && dataType == 0  && sm.getSampleSize$I(0) < 8 ) {
return Clazz.new_($I$(16,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}, 1);

Clazz.newMeth(C$, 'createWritableRaster$java_awt_image_SampleModel$java_awt_Point',  function (sm, location) {
if (location == null ) {
location=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
}return C$.createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sm, sm.createDataBuffer$(), location);
}, 1);

Clazz.newMeth(C$, 'createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sm, db, location) {
if ((sm == null ) || (db == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["SampleModel and DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
}var dataType=sm.getDataType$();
if (Clazz.instanceOf(sm, "java.awt.image.PixelInterleavedSampleModel")) {
switch (dataType) {
case 0:
return Clazz.new_($I$(7,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
case 1:
return Clazz.new_($I$(8,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}
} else if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
switch (dataType) {
case 0:
return Clazz.new_($I$(7,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
case 1:
return Clazz.new_($I$(8,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
case 3:
return Clazz.new_($I$(14,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}
} else if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel") && dataType == 0  && sm.getSampleSize$I(0) < 8 ) {
return Clazz.new_($I$(16,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}return Clazz.new_($I$(12,1).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point',  function (sampleModel, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster.apply(this, [sampleModel, sampleModel.createDataBuffer$(), Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(17,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sampleModel, dataBuffer, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster.apply(this, [sampleModel, dataBuffer, Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(17,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster',  function (sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent) {
;C$.$init$.apply(this);
if ((sampleModel == null ) || (dataBuffer == null ) || (aRegion == null ) || (sampleModelTranslate == null )  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["SampleModel, dataBuffer, aRegion and sampleModelTranslate cannot be null"]);
}this.sampleModel=sampleModel;
this.dataBuffer=dataBuffer;
dataBuffer.秘image=this.秘image;
this.minX=aRegion.x;
this.minY=aRegion.y;
this.width=aRegion.width;
this.height=aRegion.height;
if (this.width <= 0 || this.height <= 0 ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["negative or zero " + ((this.width <= 0) ? "width" : "height")]);
}if ((this.minX + this.width) < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["overflow condition for X coordinates of Raster"]);
}if ((this.minY + this.height) < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["overflow condition for Y coordinates of Raster"]);
}this.sampleModelTranslateX=sampleModelTranslate.x;
this.sampleModelTranslateY=sampleModelTranslate.y;
this.numBands=sampleModel.getNumBands$();
this.numDataElements=sampleModel.getNumDataElements$();
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'getSampleModelTranslateX$',  function () {
return this.sampleModelTranslateX;
});

Clazz.newMeth(C$, 'getSampleModelTranslateY$',  function () {
return this.sampleModelTranslateY;
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$',  function () {
return Clazz.new_([this.sampleModel, Clazz.new_($I$(5,1).c$$I$I,[0, 0])],$I$(12,1).c$$java_awt_image_SampleModel$java_awt_Point);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I',  function (w, h) {
if (w <= 0 || h <= 0 ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["negative " + ((w <= 0) ? "width" : "height")]);
}var sm=this.sampleModel.createCompatibleSampleModel$I$I(w, h);
return Clazz.new_([sm, Clazz.new_($I$(5,1).c$$I$I,[0, 0])],$I$(12,1).c$$java_awt_image_SampleModel$java_awt_Point);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$java_awt_Rectangle',  function (rect) {
if (rect == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Rect cannot be null"]);
}return this.createCompatibleWritableRaster$I$I$I$I(rect.x, rect.y, rect.width, rect.height);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I$I$I',  function (x, y, w, h) {
var ret=this.createCompatibleWritableRaster$I$I(w, h);
return ret.createWritableChild$I$I$I$I$I$I$IA(0, 0, w, h, x, y, null);
});

Clazz.newMeth(C$, 'createTranslatedChild$I$I',  function (childMinX, childMinY) {
return this.createChild$I$I$I$I$I$I$IA(this.minX, this.minY, this.width, this.height, childMinX, childMinY, null);
});

Clazz.newMeth(C$, 'createChild$I$I$I$I$I$I$IA',  function (parentX, parentY, width, height, childMinX, childMinY, bandList) {
if (parentX < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["parentX lies outside raster"]);
}if (parentY < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["parentY lies outside raster"]);
}if ((parentX + width < parentX) || (parentX + width > this.width + this.minX) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(parentX + width) is outside raster"]);
}if ((parentY + height < parentY) || (parentY + height > this.height + this.minY) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(parentY + height) is outside raster"]);
}var subSampleModel;
if (bandList == null ) {
subSampleModel=this.sampleModel;
} else {
subSampleModel=this.sampleModel.createSubsetSampleModel$IA(bandList);
}var deltaX=childMinX - parentX;
var deltaY=childMinY - parentY;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster,[subSampleModel, this.getDataBuffer$(), Clazz.new_($I$(17,1).c$$I$I$I$I,[childMinX, childMinY, width, height]), Clazz.new_($I$(5,1).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return Clazz.new_($I$(17,1).c$$I$I$I$I,[this.minX, this.minY, this.width, this.height]);
});

Clazz.newMeth(C$, 'getMinX$',  function () {
return this.minX;
});

Clazz.newMeth(C$, 'getMinY$',  function () {
return this.minY;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'getNumBands$',  function () {
return this.numBands;
});

Clazz.newMeth(C$, 'getNumDataElements$',  function () {
return this.sampleModel.getNumDataElements$();
});

Clazz.newMeth(C$, 'getTransferType$',  function () {
return this.sampleModel.getTransferType$();
});

Clazz.newMeth(C$, 'getDataBuffer$',  function () {
this.dataBuffer.秘image=this.秘image;
return this.dataBuffer;
});

Clazz.newMeth(C$, 'getSampleModel$',  function () {
return this.sampleModel;
});

Clazz.newMeth(C$, 'getDataElements$I$I$O',  function (x, y, outData) {
return this.sampleModel.getDataElements$I$I$O$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, outData, this.dataBuffer);
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O',  function (x, y, w, h, outData) {
return this.sampleModel.getDataElements$I$I$I$I$O$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, outData, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixel$I$I$IA',  function (x, y, iArray) {
return this.sampleModel.getPixel$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixel$I$I$FA',  function (x, y, fArray) {
return this.sampleModel.getPixel$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixel$I$I$DA',  function (x, y, dArray) {
return this.sampleModel.getPixel$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, dArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA',  function (x, y, w, h, iArray) {
return this.sampleModel.getPixels$I$I$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$FA',  function (x, y, w, h, fArray) {
return this.sampleModel.getPixels$I$I$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$DA',  function (x, y, w, h, dArray) {
return this.sampleModel.getPixels$I$I$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, dArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSample$I$I$I',  function (x, y, b) {
return this.sampleModel.getSample$I$I$I$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSampleFloat$I$I$I',  function (x, y, b) {
return this.sampleModel.getSampleFloat$I$I$I$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSampleDouble$I$I$I',  function (x, y, b) {
return this.sampleModel.getSampleDouble$I$I$I$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$IA',  function (x, y, w, h, b, iArray) {
return this.sampleModel.getSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$FA',  function (x, y, w, h, b, fArray) {
return this.sampleModel.getSamples$I$I$I$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$DA',  function (x, y, w, h, b, dArray) {
return this.sampleModel.getSamples$I$I$I$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, dArray, this.dataBuffer);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

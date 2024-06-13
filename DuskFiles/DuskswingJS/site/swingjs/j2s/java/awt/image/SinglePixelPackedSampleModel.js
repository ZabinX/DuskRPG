(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.image.DataBufferByte','java.awt.image.DataBufferUShort','java.awt.image.DataBufferInt','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SinglePixelPackedSampleModel", null, 'java.awt.image.SampleModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['maxBitSize','scanlineStride'],'O',['bitMasks','int[]','+bitOffsets','+bitSizes']]]

Clazz.newMeth(C$, 'c$$I$I$I$IA',  function (dataType, w, h, bitMasks) {
C$.c$$I$I$I$I$IA.apply(this, [dataType, w, h, w, bitMasks]);
if (dataType != 0 && dataType != 1  && dataType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$IA',  function (dataType, w, h, scanlineStride, bitMasks) {
;C$.superclazz.c$$I$I$I$I.apply(this,[dataType, w, h, bitMasks.length]);C$.$init$.apply(this);
if (dataType != 0 && dataType != 1  && dataType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}this.dataType=dataType;
this.bitMasks=bitMasks.clone$();
this.scanlineStride=scanlineStride;
this.bitOffsets=Clazz.array(Integer.TYPE, [this.numBands]);
this.bitSizes=Clazz.array(Integer.TYPE, [this.numBands]);
this.maxBitSize=0;
for (var i=0; i < this.numBands; i++) {
var bitOffset=0;
var bitSize=0;
var mask;
mask=bitMasks[i];
if (mask != 0) {
while ((mask & 1) == 0){
mask=mask >>> 1;
++bitOffset;
}
while ((mask & 1) == 1){
mask=mask >>> 1;
++bitSize;
}
if (mask != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Mask " + bitMasks[i] + " must be contiguous" ]);
}}this.bitOffsets[i]=bitOffset;
this.bitSizes[i]=bitSize;
if (bitSize > this.maxBitSize) {
this.maxBitSize=bitSize;
}}
}, 1);

Clazz.newMeth(C$, 'getNumDataElements$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getBufferSize',  function () {
var size=this.scanlineStride * (this.height - 1) + this.width;
return size;
}, p$1);

Clazz.newMeth(C$, 'createCompatibleSampleModel$I$I',  function (w, h) {
var sampleModel=Clazz.new_(C$.c$$I$I$I$IA,[this.dataType, w, h, this.bitMasks]);
return sampleModel;
});

Clazz.newMeth(C$, 'createDataBuffer$',  function () {
var dataBuffer=null;
var size=Long.$ival(p$1.getBufferSize.apply(this, []));
switch (this.dataType) {
case 0:
dataBuffer=Clazz.new_($I$(1,1).c$$I,[size]);
break;
case 1:
dataBuffer=Clazz.new_($I$(2,1).c$$I,[size]);
break;
case 3:
dataBuffer=Clazz.new_($I$(3,1).c$$I,[size]);
break;
}
return dataBuffer;
});

Clazz.newMeth(C$, 'getSampleSize$',  function () {
var mask;
var sampleSize=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) {
sampleSize[i]=0;
mask=this.bitMasks[i] >>> this.bitOffsets[i];
while ((mask & 1) != 0){
++sampleSize[i];
mask=mask >>> 1;
}
}
return sampleSize;
});

Clazz.newMeth(C$, 'getSampleSize$I',  function (band) {
var sampleSize=0;
var mask=this.bitMasks[band] >>> this.bitOffsets[band];
while ((mask & 1) != 0){
++sampleSize;
mask=mask >>> 1;
}
return sampleSize;
});

Clazz.newMeth(C$, 'getOffset$I$I',  function (x, y) {
var offset=y * this.scanlineStride + x;
return offset;
});

Clazz.newMeth(C$, 'getBitOffsets$',  function () {
return this.bitOffsets.clone$();
});

Clazz.newMeth(C$, 'getBitMasks$',  function () {
return this.bitMasks.clone$();
});

Clazz.newMeth(C$, 'getScanlineStride$',  function () {
return this.scanlineStride;
});

Clazz.newMeth(C$, 'createSubsetSampleModel$IA',  function (bands) {
if (bands.length > this.numBands) throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["There are only " + this.numBands + " bands" ]);
var newBitMasks=Clazz.array(Integer.TYPE, [bands.length]);
for (var i=0; i < bands.length; i++) newBitMasks[i]=this.bitMasks[bands[i]];

return Clazz.new_(C$.c$$I$I$I$I$IA,[this.dataType, this.width, this.height, this.scanlineStride, newBitMasks]);
});

Clazz.newMeth(C$, 'getDataElements$I$I$O$java_awt_image_DataBuffer',  function (x, y, obj, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var type=this.getTransferType$();
switch (type) {
case 0:
var bdata;
if (obj == null ) bdata=Clazz.array(Byte.TYPE, [1]);
 else bdata=obj;
bdata[0]=(data.getElem$I(y * this.scanlineStride + x)|0);
obj=bdata;
break;
case 1:
var sdata;
if (obj == null ) sdata=Clazz.array(Short.TYPE, [1]);
 else sdata=obj;
sdata[0]=(data.getElem$I(y * this.scanlineStride + x)|0);
obj=sdata;
break;
case 3:
var idata;
if (obj == null ) idata=Clazz.array(Integer.TYPE, [1]);
 else idata=obj;
idata[0]=data.getElem$I(y * this.scanlineStride + x);
obj=idata;
break;
}
data.秘setDoCheckImage$Z(true);
return obj;
});

Clazz.newMeth(C$, 'getPixel$I$I$IA$java_awt_image_DataBuffer',  function (x, y, iArray, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var pixels;
if (iArray == null ) {
pixels=Clazz.array(Integer.TYPE, [this.numBands]);
} else {
pixels=iArray;
}var value=data.getElem$I(y * this.scanlineStride + x);
for (var i=0; i < this.numBands; i++) {
pixels[i]=(value & this.bitMasks[i]) >>> this.bitOffsets[i];
}
return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, iArray, data) {
if ((x < 0) || (y < 0) || (x + w > this.width) || (y + h > this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var pixels;
if (iArray != null ) {
pixels=iArray;
} else {
pixels=Clazz.array(Integer.TYPE, [w * h * this.numBands ]);
}var lineOffset=y * this.scanlineStride + x;
var dstOffset=0;
for (var i=0; i < h; i++) {
for (var j=0; j < w; j++) {
var value=data.getElem$I(lineOffset + j);
for (var k=0; k < this.numBands; k++) {
pixels[dstOffset++]=((value & this.bitMasks[k]) >>> this.bitOffsets[k]);
}
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getSample$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var sample=data.getElem$I(y * this.scanlineStride + x);
return ((sample & this.bitMasks[b]) >>> this.bitOffsets[b]);
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, b, iArray, data) {
if ((x < 0) || (y < 0) || (x + w > this.width) || (y + h > this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var samples;
if (iArray != null ) {
samples=iArray;
} else {
samples=Clazz.array(Integer.TYPE, [w * h]);
}var lineOffset=y * this.scanlineStride + x;
var dstOffset=0;
for (var i=0; i < h; i++) {
for (var j=0; j < w; j++) {
var value=data.getElem$I(lineOffset + j);
samples[dstOffset++]=((value & this.bitMasks[b]) >>> this.bitOffsets[b]);
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
return samples;
});

Clazz.newMeth(C$, 'setDataElements$I$I$O$java_awt_image_DataBuffer',  function (x, y, obj, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var type=this.getTransferType$();
switch (type) {
case 0:
var barray=obj;
data.setElem$I$I(y * this.scanlineStride + x, ((barray[0]|0)) & 255);
break;
case 1:
var sarray=obj;
data.setElem$I$I(y * this.scanlineStride + x, ((sarray[0]|0)) & 65535);
break;
case 3:
var iarray=obj;
data.setElem$I$I(y * this.scanlineStride + x, iarray[0]);
break;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setPixel$I$I$IA$java_awt_image_DataBuffer',  function (x, y, iArray, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var lineOffset=y * this.scanlineStride + x;
var value=data.getElem$I(lineOffset);
for (var i=0; i < this.numBands; i++) {
value&=~this.bitMasks[i];
value|=((iArray[i] << this.bitOffsets[i]) & this.bitMasks[i]);
}
data.setElem$I$I(lineOffset, value);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, iArray, data) {
if ((x < 0) || (y < 0) || (x + w > this.width) || (y + h > this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var lineOffset=y * this.scanlineStride + x;
var srcOffset=0;
for (var i=0; i < h; i++) {
for (var j=0; j < w; j++) {
var value=data.getElem$I(lineOffset + j);
for (var k=0; k < this.numBands; k++) {
value&=~this.bitMasks[k];
var srcValue=iArray[srcOffset++];
value|=((srcValue << this.bitOffsets[k]) & this.bitMasks[k]);
}
data.setElem$I$I(lineOffset + j, value);
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setSample$I$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var value=data.getElem$I(y * this.scanlineStride + x);
value&=~this.bitMasks[b];
value|=(s << this.bitOffsets[b]) & this.bitMasks[b];
data.setElem$I$I(y * this.scanlineStride + x, value);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, b, iArray, data) {
if ((x < 0) || (y < 0) || (x + w > this.width) || (y + h > this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var lineOffset=y * this.scanlineStride + x;
var srcOffset=0;
for (var i=0; i < h; i++) {
for (var j=0; j < w; j++) {
var value=data.getElem$I(lineOffset + j);
value&=~this.bitMasks[b];
var sample=iArray[srcOffset++];
value|=(sample << this.bitOffsets[b]) & this.bitMasks[b];
data.setElem$I$I(lineOffset + j, value);
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if ((o == null ) || !(Clazz.instanceOf(o, "java.awt.image.SinglePixelPackedSampleModel")) ) {
return false;
}var that=o;
return this.width == that.width && this.height == that.height  && this.numBands == that.numBands  && this.dataType == that.dataType  && $I$(4).equals$IA$IA(this.bitMasks, that.bitMasks)  && $I$(4).equals$IA$IA(this.bitOffsets, that.bitOffsets)  && $I$(4).equals$IA$IA(this.bitSizes, that.bitSizes)  && this.maxBitSize == that.maxBitSize  && this.scanlineStride == that.scanlineStride ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=0;
hash=this.width;
hash<<=8;
hash^=this.height;
hash<<=8;
hash^=this.numBands;
hash<<=8;
hash^=this.dataType;
hash<<=8;
for (var i=0; i < this.bitMasks.length; i++) {
hash^=this.bitMasks[i];
hash<<=8;
}
for (var i=0; i < this.bitOffsets.length; i++) {
hash^=this.bitOffsets[i];
hash<<=8;
}
for (var i=0; i < this.bitSizes.length; i++) {
hash^=this.bitSizes[i];
hash<<=8;
}
hash^=this.maxBitSize;
hash<<=8;
hash^=this.scanlineStride;
return hash;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

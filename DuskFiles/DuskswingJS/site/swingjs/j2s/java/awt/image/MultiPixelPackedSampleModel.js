(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.image.DataBuffer','java.awt.image.DataBufferByte','java.awt.image.DataBufferUShort','java.awt.image.DataBufferInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MultiPixelPackedSampleModel", null, 'java.awt.image.SampleModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pixelBitStride','bitMask','pixelsPerDataElement','dataElementSize','dataBitOffset','scanlineStride']]]

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (dataType, w, h, numberOfBits) {
C$.c$$I$I$I$I$I$I.apply(this, [dataType, w, h, numberOfBits, ((w * numberOfBits + $I$(1).getDataTypeSize$I(dataType) - 1)/$I$(1).getDataTypeSize$I(dataType)|0), 0]);
if (dataType != 0 && dataType != 1  && dataType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I',  function (dataType, w, h, numberOfBits, scanlineStride, dataBitOffset) {
;C$.superclazz.c$$I$I$I$I.apply(this,[dataType, w, h, 1]);C$.$init$.apply(this);
if (dataType != 0 && dataType != 1  && dataType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}this.dataType=dataType;
this.pixelBitStride=numberOfBits;
this.scanlineStride=scanlineStride;
this.dataBitOffset=dataBitOffset;
this.dataElementSize=$I$(1).getDataTypeSize$I(dataType);
this.pixelsPerDataElement=(this.dataElementSize/numberOfBits|0);
if (this.pixelsPerDataElement * numberOfBits != this.dataElementSize) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["MultiPixelPackedSampleModel does not allow pixels to span data element boundaries"]);
}this.bitMask=(1 << numberOfBits) - 1;
}, 1);

Clazz.newMeth(C$, 'createCompatibleSampleModel$I$I',  function (w, h) {
var sampleModel=Clazz.new_(C$.c$$I$I$I$I,[this.dataType, w, h, this.pixelBitStride]);
return sampleModel;
});

Clazz.newMeth(C$, 'createDataBuffer$',  function () {
var dataBuffer=null;
var size=this.scanlineStride * this.height;
switch (this.dataType) {
case 0:
dataBuffer=Clazz.new_([size + ((this.dataBitOffset + 7)/8|0)],$I$(2,1).c$$I);
break;
case 1:
dataBuffer=Clazz.new_([size + ((this.dataBitOffset + 15)/16|0)],$I$(3,1).c$$I);
break;
case 3:
dataBuffer=Clazz.new_([size + ((this.dataBitOffset + 31)/32|0)],$I$(4,1).c$$I);
break;
}
return dataBuffer;
});

Clazz.newMeth(C$, 'getNumDataElements$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getSampleSize$',  function () {
var sampleSize=Clazz.array(Integer.TYPE, -1, [this.pixelBitStride]);
return sampleSize;
});

Clazz.newMeth(C$, 'getSampleSize$I',  function (band) {
return this.pixelBitStride;
});

Clazz.newMeth(C$, 'getOffset$I$I',  function (x, y) {
var offset=y * this.scanlineStride;
offset+=((x * this.pixelBitStride + this.dataBitOffset)/this.dataElementSize|0);
return offset;
});

Clazz.newMeth(C$, 'getBitOffset$I',  function (x) {
return (x * this.pixelBitStride + this.dataBitOffset) % this.dataElementSize;
});

Clazz.newMeth(C$, 'getScanlineStride$',  function () {
return this.scanlineStride;
});

Clazz.newMeth(C$, 'getPixelBitStride$',  function () {
return this.pixelBitStride;
});

Clazz.newMeth(C$, 'getDataBitOffset$',  function () {
return this.dataBitOffset;
});

Clazz.newMeth(C$, 'getTransferType$',  function () {
if (this.pixelBitStride > 16) return 3;
 else if (this.pixelBitStride > 8) return 1;
 else return 0;
});

Clazz.newMeth(C$, 'createSubsetSampleModel$IA',  function (bands) {
if (bands != null ) {
if (bands.length != 1) throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["MultiPixelPackedSampleModel has only one band."]);
}var sm=this.createCompatibleSampleModel$I$I(this.width, this.height);
return sm;
});

Clazz.newMeth(C$, 'getSample$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height) || (b != 0)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var bitnum=this.dataBitOffset + x * this.pixelBitStride;
var element=data.getElem$I(y * this.scanlineStride + (bitnum/this.dataElementSize|0));
var shift=this.dataElementSize - (bitnum & (this.dataElementSize - 1)) - this.pixelBitStride ;
return (element >> shift) & this.bitMask;
});

Clazz.newMeth(C$, 'setSample$I$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height) || (b != 0)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var bitnum=this.dataBitOffset + x * this.pixelBitStride;
var index=y * this.scanlineStride + ((bitnum/this.dataElementSize|0));
var shift=this.dataElementSize - (bitnum & (this.dataElementSize - 1)) - this.pixelBitStride ;
var element=data.getElem$I(index);
element&=~(this.bitMask << shift);
element|=(s & this.bitMask) << shift;
data.setElem$I$I(index, element);
});

Clazz.newMeth(C$, 'getDataElements$I$I$O$java_awt_image_DataBuffer',  function (x, y, obj, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var type=this.getTransferType$();
var bitnum=this.dataBitOffset + x * this.pixelBitStride;
var shift=this.dataElementSize - (bitnum & (this.dataElementSize - 1)) - this.pixelBitStride ;
var element=0;
switch (type) {
case 0:
var bdata;
if (obj == null ) bdata=Clazz.array(Byte.TYPE, [1]);
 else bdata=obj;
element=data.getElem$I(y * this.scanlineStride + (bitnum/this.dataElementSize|0));
bdata[0]=(((element >> shift) & this.bitMask)|0);
obj=bdata;
break;
case 1:
var sdata;
if (obj == null ) sdata=Clazz.array(Short.TYPE, [1]);
 else sdata=obj;
element=data.getElem$I(y * this.scanlineStride + (bitnum/this.dataElementSize|0));
sdata[0]=(((element >> shift) & this.bitMask)|0);
obj=sdata;
break;
case 3:
var idata;
if (obj == null ) idata=Clazz.array(Integer.TYPE, [1]);
 else idata=obj;
element=data.getElem$I(y * this.scanlineStride + (bitnum/this.dataElementSize|0));
idata[0]=(element >> shift) & this.bitMask;
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
if (iArray != null ) {
pixels=iArray;
} else {
pixels=Clazz.array(Integer.TYPE, [this.numBands]);
}var bitnum=this.dataBitOffset + x * this.pixelBitStride;
var element=data.getElem$I(y * this.scanlineStride + (bitnum/this.dataElementSize|0));
var shift=this.dataElementSize - (bitnum & (this.dataElementSize - 1)) - this.pixelBitStride ;
pixels[0]=(element >> shift) & this.bitMask;
return pixels;
});

Clazz.newMeth(C$, 'setDataElements$I$I$O$java_awt_image_DataBuffer',  function (x, y, obj, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var type=this.getTransferType$();
var bitnum=this.dataBitOffset + x * this.pixelBitStride;
var index=y * this.scanlineStride + ((bitnum/this.dataElementSize|0));
var shift=this.dataElementSize - (bitnum & (this.dataElementSize - 1)) - this.pixelBitStride ;
var element=data.getElem$I(index);
element&=~(this.bitMask << shift);
switch (type) {
case 0:
var barray=obj;
element|=((((barray[0])|0) & 255) & this.bitMask) << shift;
data.setElem$I$I(index, element);
break;
case 1:
var sarray=obj;
element|=((((sarray[0])|0) & 65535) & this.bitMask) << shift;
data.setElem$I$I(index, element);
break;
case 3:
var iarray=obj;
element|=(iarray[0] & this.bitMask) << shift;
data.setElem$I$I(index, element);
break;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setPixel$I$I$IA$java_awt_image_DataBuffer',  function (x, y, iArray, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var bitnum=this.dataBitOffset + x * this.pixelBitStride;
var index=y * this.scanlineStride + ((bitnum/this.dataElementSize|0));
var shift=this.dataElementSize - (bitnum & (this.dataElementSize - 1)) - this.pixelBitStride ;
var element=data.getElem$I(index);
element&=~(this.bitMask << shift);
element|=(iArray[0] & this.bitMask) << shift;
data.setElem$I$I(index, element);
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if ((o == null ) || !(Clazz.instanceOf(o, "java.awt.image.MultiPixelPackedSampleModel")) ) {
return false;
}var that=o;
return this.width == that.width && this.height == that.height  && this.numBands == that.numBands  && this.dataType == that.dataType  && this.pixelBitStride == that.pixelBitStride  && this.bitMask == that.bitMask  && this.pixelsPerDataElement == that.pixelsPerDataElement  && this.dataElementSize == that.dataElementSize  && this.dataBitOffset == that.dataBitOffset  && this.scanlineStride == that.scanlineStride ;
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
hash^=this.pixelBitStride;
hash<<=8;
hash^=this.bitMask;
hash<<=8;
hash^=this.pixelsPerDataElement;
hash<<=8;
hash^=this.dataElementSize;
hash<<=8;
hash^=this.dataBitOffset;
hash<<=8;
hash^=this.scanlineStride;
return hash;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

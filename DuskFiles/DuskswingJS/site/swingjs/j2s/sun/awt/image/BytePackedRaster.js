(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.awt.Rectangle','sun.awt.image.SunWritableRaster','java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BytePackedRaster", null, 'sun.awt.image.SunWritableRaster');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['dataBitOffset','scanlineStride','pixelBitStride','bitMask','shiftOffset','type','maxX','maxY'],'O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point',  function (sampleModel, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_BytePackedRaster.apply(this, [sampleModel, sampleModel.createDataBuffer$(), Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sampleModel, dataBuffer, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_BytePackedRaster.apply(this, [sampleModel, dataBuffer, Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_BytePackedRaster',  function (sampleModel, dataBuffer, aRegion, origin, parent) {
;C$.superclazz.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_WritableRaster.apply(this,[sampleModel, dataBuffer, aRegion, origin, parent]);C$.$init$.apply(this);
this.maxX=this.minX + this.width;
this.maxY=this.minY + this.height;
if (!(Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte"))) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["BytePackedRasters must havebyte DataBuffers"]);
}var dbb=dataBuffer;
this.data=$I$(2).stealData$java_awt_image_DataBufferByte$I(dbb, 0);
if (dbb.getNumBanks$() != 1) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["DataBuffer for BytePackedRasters must only have 1 bank."]);
}var dbOffset=dbb.getOffset$();
if (Clazz.instanceOf(sampleModel, "java.awt.image.MultiPixelPackedSampleModel")) {
var mppsm=sampleModel;
this.pixelBitStride=mppsm.getPixelBitStride$();
if (this.pixelBitStride != 1 && this.pixelBitStride != 2  && this.pixelBitStride != 4 ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["BytePackedRasters must have a bit depth of 1, 2, or 4"]);
}this.scanlineStride=mppsm.getScanlineStride$();
this.dataBitOffset=mppsm.getDataBitOffset$() + dbOffset * 8;
var xOffset=aRegion.x - origin.x;
var yOffset=aRegion.y - origin.y;
this.dataBitOffset+=xOffset * this.pixelBitStride + yOffset * this.scanlineStride * 8 ;
this.bitMask=(1 << this.pixelBitStride) - 1;
this.shiftOffset=8 - this.pixelBitStride;
} else {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["BytePackedRasters must haveMultiPixelPackedSampleModel"]);
}p$1.verify$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'getDataBitOffset$',  function () {
return this.dataBitOffset;
});

Clazz.newMeth(C$, 'getScanlineStride$',  function () {
return this.scanlineStride;
});

Clazz.newMeth(C$, 'getPixelBitStride$',  function () {
return this.pixelBitStride;
});

Clazz.newMeth(C$, 'getDataStorage$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getDataElements$I$I$O',  function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.maxX) || (y >= this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var outData;
if (obj == null ) {
outData=Clazz.array(Byte.TYPE, [this.numDataElements]);
} else {
outData=obj;
}var bitnum=this.dataBitOffset + (x - this.minX) * this.pixelBitStride;
var element=this.data[(y - this.minY) * this.scanlineStride + (bitnum >> 3)] & 255;
var shift=this.shiftOffset - (bitnum & 7);
outData[0]=(((element >> shift) & this.bitMask)|0);
return outData;
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O',  function (x, y, w, h, outData) {
return this.getByteData$I$I$I$I$BA(x, y, w, h, outData);
});

Clazz.newMeth(C$, 'getPixelData$I$I$I$I$O',  function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var outData;
if (obj == null ) {
outData=Clazz.array(Byte.TYPE, [this.numDataElements * w * h ]);
} else {
outData=obj;
}var pixbits=this.pixelBitStride;
var scanbit=this.dataBitOffset + (x - this.minX) * pixbits;
var index=(y - this.minY) * this.scanlineStride;
var outindex=0;
var data=this.data;
for (var j=0; j < h; j++) {
var bitnum=scanbit;
for (var i=0; i < w; i++) {
var shift=this.shiftOffset - (bitnum & 7);
outData[outindex++]=((this.bitMask & (data[index + (bitnum >> 3)] >> shift))|0);
bitnum+=pixbits;
}
index+=this.scanlineStride;
}
return outData;
});

Clazz.newMeth(C$, 'getByteData$I$I$I$I$I$BA',  function (x, y, w, h, band, outData) {
return this.getByteData$I$I$I$I$BA(x, y, w, h, outData);
});

Clazz.newMeth(C$, 'getByteData$I$I$I$I$BA',  function (x, y, w, h, outData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (outData == null ) {
outData=Clazz.array(Byte.TYPE, [w * h]);
}var pixbits=this.pixelBitStride;
var scanbit=this.dataBitOffset + (x - this.minX) * pixbits;
var index=(y - this.minY) * this.scanlineStride;
var outindex=0;
var data=this.data;
for (var j=0; j < h; j++) {
var bitnum=scanbit;
var element;
var i=0;
while ((i < w) && ((bitnum & 7) != 0) ){
var shift=this.shiftOffset - (bitnum & 7);
outData[outindex++]=((this.bitMask & (data[index + (bitnum >> 3)] >> shift))|0);
bitnum+=pixbits;
++i;
}
var inIndex=index + (bitnum >> 3);
switch (pixbits) {
case 1:
for (; i < w - 7; i+=8) {
element=data[inIndex++];
outData[outindex++]=(((element >> 7) & 1)|0);
outData[outindex++]=(((element >> 6) & 1)|0);
outData[outindex++]=(((element >> 5) & 1)|0);
outData[outindex++]=(((element >> 4) & 1)|0);
outData[outindex++]=(((element >> 3) & 1)|0);
outData[outindex++]=(((element >> 2) & 1)|0);
outData[outindex++]=(((element >> 1) & 1)|0);
outData[outindex++]=((element & 1)|0);
bitnum+=8;
}
break;
case 2:
for (; i < w - 7; i+=8) {
element=data[inIndex++];
outData[outindex++]=(((element >> 6) & 3)|0);
outData[outindex++]=(((element >> 4) & 3)|0);
outData[outindex++]=(((element >> 2) & 3)|0);
outData[outindex++]=((element & 3)|0);
element=data[inIndex++];
outData[outindex++]=(((element >> 6) & 3)|0);
outData[outindex++]=(((element >> 4) & 3)|0);
outData[outindex++]=(((element >> 2) & 3)|0);
outData[outindex++]=((element & 3)|0);
bitnum+=16;
}
break;
case 4:
for (; i < w - 7; i+=8) {
element=data[inIndex++];
outData[outindex++]=(((element >> 4) & 15)|0);
outData[outindex++]=((element & 15)|0);
element=data[inIndex++];
outData[outindex++]=(((element >> 4) & 15)|0);
outData[outindex++]=((element & 15)|0);
element=data[inIndex++];
outData[outindex++]=(((element >> 4) & 15)|0);
outData[outindex++]=((element & 15)|0);
element=data[inIndex++];
outData[outindex++]=(((element >> 4) & 15)|0);
outData[outindex++]=((element & 15)|0);
bitnum+=32;
}
break;
}
for (; i < w; i++) {
var shift=this.shiftOffset - (bitnum & 7);
outData[outindex++]=((this.bitMask & (data[index + (bitnum >> 3)] >> shift))|0);
bitnum+=pixbits;
}
index+=this.scanlineStride;
}
return outData;
});

Clazz.newMeth(C$, 'setDataElements$I$I$O',  function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.maxX) || (y >= this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var bitnum=this.dataBitOffset + (x - this.minX) * this.pixelBitStride;
var index=(y - this.minY) * this.scanlineStride + (bitnum >> 3);
var shift=this.shiftOffset - (bitnum & 7);
var element=this.data[index];
element=($b$[0] = element&(~(this.bitMask << shift)), $b$[0]);
element=($b$[0] = element|((inData[0] & this.bitMask) << shift), $b$[0]);
this.data[index]=element;
this.markDirty$();
});

Clazz.newMeth(C$, 'setDataElements$I$I$java_awt_image_Raster',  function (x, y, inRaster) {
if (!(Clazz.instanceOf(inRaster, "sun.awt.image.BytePackedRaster")) || (inRaster).pixelBitStride != this.pixelBitStride ) {
C$.superclazz.prototype.setDataElements$I$I$java_awt_image_Raster.apply(this, [x, y, inRaster]);
return;
}var srcOffX=inRaster.getMinX$();
var srcOffY=inRaster.getMinY$();
var dstOffX=srcOffX + x;
var dstOffY=srcOffY + y;
var width=inRaster.getWidth$();
var height=inRaster.getHeight$();
if ((dstOffX < this.minX) || (dstOffY < this.minY) || (dstOffX + width > this.maxX) || (dstOffY + height > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}p$1.setDataElements$I$I$I$I$I$I$sun_awt_image_BytePackedRaster.apply(this, [dstOffX, dstOffY, srcOffX, srcOffY, width, height, inRaster]);
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$I$I$sun_awt_image_BytePackedRaster',  function (dstX, dstY, srcX, srcY, width, height, inRaster) {
if (width <= 0 || height <= 0 ) {
return;
}var inData=inRaster.data;
var outData=this.data;
var inscan=inRaster.scanlineStride;
var outscan=this.scanlineStride;
var inbit=inRaster.dataBitOffset + 8 * (srcY - inRaster.minY) * inscan  + (srcX - inRaster.minX) * inRaster.pixelBitStride;
var outbit=(this.dataBitOffset + 8 * (dstY - this.minY) * outscan  + (dstX - this.minX) * this.pixelBitStride);
var copybits=width * this.pixelBitStride;
if ((inbit & 7) == (outbit & 7)) {
var bitpos=outbit & 7;
if (bitpos != 0) {
var bits=8 - bitpos;
var inbyte=inbit >> 3;
var outbyte=outbit >> 3;
var mask=255 >> bitpos;
if (copybits < bits) {
mask&=255 << (bits - copybits);
bits=copybits;
}for (var j=0; j < height; j++) {
var element=outData[outbyte];
element&=~mask;
element|=(inData[inbyte] & mask);
outData[outbyte]=(element|0);
inbyte+=inscan;
outbyte+=outscan;
}
inbit+=bits;
outbit+=bits;
copybits-=bits;
}if (copybits >= 8) {
var inbyte=inbit >> 3;
var outbyte=outbit >> 3;
var copybytes=copybits >> 3;
if (copybytes == inscan && inscan == outscan ) {
System.arraycopy$O$I$O$I$I(inData, inbyte, outData, outbyte, inscan * height);
} else {
for (var j=0; j < height; j++) {
System.arraycopy$O$I$O$I$I(inData, inbyte, outData, outbyte, copybytes);
inbyte+=inscan;
outbyte+=outscan;
}
}var bits=copybytes * 8;
inbit+=bits;
outbit+=bits;
copybits-=bits;
}if (copybits > 0) {
var inbyte=inbit >> 3;
var outbyte=outbit >> 3;
var mask=(65280 >> copybits) & 255;
for (var j=0; j < height; j++) {
var element=outData[outbyte];
element&=~mask;
element|=(inData[inbyte] & mask);
outData[outbyte]=(element|0);
inbyte+=inscan;
outbyte+=outscan;
}
}} else {
var bitpos=outbit & 7;
if (bitpos != 0 || copybits < 8 ) {
var bits=8 - bitpos;
var inbyte=inbit >> 3;
var outbyte=outbit >> 3;
var lshift=inbit & 7;
var rshift=8 - lshift;
var mask=255 >> bitpos;
if (copybits < bits) {
mask&=255 << (bits - copybits);
bits=copybits;
}var lastByte=inData.length - 1;
for (var j=0; j < height; j++) {
var inData0=inData[inbyte];
var inData1=0;
if (inbyte < lastByte) {
inData1=inData[inbyte + 1];
}var element=outData[outbyte];
element&=~mask;
element|=(((inData0 << lshift) | ((inData1 & 255) >> rshift)) >> bitpos) & mask;
outData[outbyte]=(element|0);
inbyte+=inscan;
outbyte+=outscan;
}
inbit+=bits;
outbit+=bits;
copybits-=bits;
}if (copybits >= 8) {
var inbyte=inbit >> 3;
var outbyte=outbit >> 3;
var copybytes=copybits >> 3;
var lshift=inbit & 7;
var rshift=8 - lshift;
for (var j=0; j < height; j++) {
var ibyte=inbyte + j * inscan;
var obyte=outbyte + j * outscan;
var inData0=inData[ibyte];
for (var i=0; i < copybytes; i++) {
var inData1=inData[ibyte + 1];
var val=(inData0 << lshift) | ((inData1 & 255) >> rshift);
outData[obyte]=(val|0);
inData0=inData1;
++ibyte;
++obyte;
}
}
var bits=copybytes * 8;
inbit+=bits;
outbit+=bits;
copybits-=bits;
}if (copybits > 0) {
var inbyte=inbit >> 3;
var outbyte=outbit >> 3;
var mask=(65280 >> copybits) & 255;
var lshift=inbit & 7;
var rshift=8 - lshift;
var lastByte=inData.length - 1;
for (var j=0; j < height; j++) {
var inData0=inData[inbyte];
var inData1=0;
if (inbyte < lastByte) {
inData1=inData[inbyte + 1];
}var element=outData[outbyte];
element&=~mask;
element|=((inData0 << lshift) | ((inData1 & 255) >> rshift)) & mask;
outData[outbyte]=(element|0);
inbyte+=inscan;
outbyte+=outscan;
}
}}this.markDirty$();
}, p$1);

Clazz.newMeth(C$, 'setRect$I$I$java_awt_image_Raster',  function (dx, dy, srcRaster) {
if (!(Clazz.instanceOf(srcRaster, "sun.awt.image.BytePackedRaster")) || (srcRaster).pixelBitStride != this.pixelBitStride ) {
C$.superclazz.prototype.setRect$I$I$java_awt_image_Raster.apply(this, [dx, dy, srcRaster]);
return;
}var width=srcRaster.getWidth$();
var height=srcRaster.getHeight$();
var srcOffX=srcRaster.getMinX$();
var srcOffY=srcRaster.getMinY$();
var dstOffX=dx + srcOffX;
var dstOffY=dy + srcOffY;
if (dstOffX < this.minX) {
var skipX=this.minX - dstOffX;
width-=skipX;
srcOffX+=skipX;
dstOffX=this.minX;
}if (dstOffY < this.minY) {
var skipY=this.minY - dstOffY;
height-=skipY;
srcOffY+=skipY;
dstOffY=this.minY;
}if (dstOffX + width > this.maxX) {
width=this.maxX - dstOffX;
}if (dstOffY + height > this.maxY) {
height=this.maxY - dstOffY;
}p$1.setDataElements$I$I$I$I$I$I$sun_awt_image_BytePackedRaster.apply(this, [dstOffX, dstOffY, srcOffX, srcOffY, width, height, srcRaster]);
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O',  function (x, y, w, h, obj) {
this.putByteData$I$I$I$I$BA(x, y, w, h, obj);
});

Clazz.newMeth(C$, 'putByteData$I$I$I$I$I$BA',  function (x, y, w, h, band, inData) {
this.putByteData$I$I$I$I$BA(x, y, w, h, inData);
});

Clazz.newMeth(C$, 'putByteData$I$I$I$I$BA',  function (x, y, w, h, inData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (w == 0 || h == 0 ) {
return;
}var pixbits=this.pixelBitStride;
var scanbit=this.dataBitOffset + (x - this.minX) * pixbits;
var index=(y - this.minY) * this.scanlineStride;
var outindex=0;
var data=this.data;
for (var j=0; j < h; j++) {
var bitnum=scanbit;
var element;
var i=0;
while ((i < w) && ((bitnum & 7) != 0) ){
var shift=this.shiftOffset - (bitnum & 7);
element=data[index + (bitnum >> 3)];
element&=~(this.bitMask << shift);
element|=(inData[outindex++] & this.bitMask) << shift;
data[index + (bitnum >> 3)]=(element|0);
bitnum+=pixbits;
++i;
}
var inIndex=index + (bitnum >> 3);
switch (pixbits) {
case 1:
for (; i < w - 7; i+=8) {
element=(inData[outindex++] & 1) << 7;
element|=(inData[outindex++] & 1) << 6;
element|=(inData[outindex++] & 1) << 5;
element|=(inData[outindex++] & 1) << 4;
element|=(inData[outindex++] & 1) << 3;
element|=(inData[outindex++] & 1) << 2;
element|=(inData[outindex++] & 1) << 1;
element|=(inData[outindex++] & 1);
data[inIndex++]=(element|0);
bitnum+=8;
}
break;
case 2:
for (; i < w - 7; i+=8) {
element=(inData[outindex++] & 3) << 6;
element|=(inData[outindex++] & 3) << 4;
element|=(inData[outindex++] & 3) << 2;
element|=(inData[outindex++] & 3);
data[inIndex++]=(element|0);
element=(inData[outindex++] & 3) << 6;
element|=(inData[outindex++] & 3) << 4;
element|=(inData[outindex++] & 3) << 2;
element|=(inData[outindex++] & 3);
data[inIndex++]=(element|0);
bitnum+=16;
}
break;
case 4:
for (; i < w - 7; i+=8) {
element=(inData[outindex++] & 15) << 4;
element|=(inData[outindex++] & 15);
data[inIndex++]=(element|0);
element=(inData[outindex++] & 15) << 4;
element|=(inData[outindex++] & 15);
data[inIndex++]=(element|0);
element=(inData[outindex++] & 15) << 4;
element|=(inData[outindex++] & 15);
data[inIndex++]=(element|0);
element=(inData[outindex++] & 15) << 4;
element|=(inData[outindex++] & 15);
data[inIndex++]=(element|0);
bitnum+=32;
}
break;
}
for (; i < w; i++) {
var shift=this.shiftOffset - (bitnum & 7);
element=data[index + (bitnum >> 3)];
element&=~(this.bitMask << shift);
element|=(inData[outindex++] & this.bitMask) << shift;
data[index + (bitnum >> 3)]=(element|0);
bitnum+=pixbits;
}
index+=this.scanlineStride;
}
this.markDirty$();
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA',  function (x, y, w, h, iArray) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (iArray == null ) {
iArray=Clazz.array(Integer.TYPE, [w * h]);
}var pixbits=this.pixelBitStride;
var scanbit=this.dataBitOffset + (x - this.minX) * pixbits;
var index=(y - this.minY) * this.scanlineStride;
var outindex=0;
var data=this.data;
for (var j=0; j < h; j++) {
var bitnum=scanbit;
var element;
var i=0;
while ((i < w) && ((bitnum & 7) != 0) ){
var shift=this.shiftOffset - (bitnum & 7);
iArray[outindex++]=this.bitMask & (data[index + (bitnum >> 3)] >> shift);
bitnum+=pixbits;
++i;
}
var inIndex=index + (bitnum >> 3);
switch (pixbits) {
case 1:
for (; i < w - 7; i+=8) {
element=data[inIndex++];
iArray[outindex++]=(element >> 7) & 1;
iArray[outindex++]=(element >> 6) & 1;
iArray[outindex++]=(element >> 5) & 1;
iArray[outindex++]=(element >> 4) & 1;
iArray[outindex++]=(element >> 3) & 1;
iArray[outindex++]=(element >> 2) & 1;
iArray[outindex++]=(element >> 1) & 1;
iArray[outindex++]=element & 1;
bitnum+=8;
}
break;
case 2:
for (; i < w - 7; i+=8) {
element=data[inIndex++];
iArray[outindex++]=(element >> 6) & 3;
iArray[outindex++]=(element >> 4) & 3;
iArray[outindex++]=(element >> 2) & 3;
iArray[outindex++]=element & 3;
element=data[inIndex++];
iArray[outindex++]=(element >> 6) & 3;
iArray[outindex++]=(element >> 4) & 3;
iArray[outindex++]=(element >> 2) & 3;
iArray[outindex++]=element & 3;
bitnum+=16;
}
break;
case 4:
for (; i < w - 7; i+=8) {
element=data[inIndex++];
iArray[outindex++]=(element >> 4) & 15;
iArray[outindex++]=element & 15;
element=data[inIndex++];
iArray[outindex++]=(element >> 4) & 15;
iArray[outindex++]=element & 15;
element=data[inIndex++];
iArray[outindex++]=(element >> 4) & 15;
iArray[outindex++]=element & 15;
element=data[inIndex++];
iArray[outindex++]=(element >> 4) & 15;
iArray[outindex++]=element & 15;
bitnum+=32;
}
break;
}
for (; i < w; i++) {
var shift=this.shiftOffset - (bitnum & 7);
iArray[outindex++]=this.bitMask & (data[index + (bitnum >> 3)] >> shift);
bitnum+=pixbits;
}
index+=this.scanlineStride;
}
return iArray;
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA',  function (x, y, w, h, iArray) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var pixbits=this.pixelBitStride;
var scanbit=this.dataBitOffset + (x - this.minX) * pixbits;
var index=(y - this.minY) * this.scanlineStride;
var outindex=0;
var data=this.data;
for (var j=0; j < h; j++) {
var bitnum=scanbit;
var element;
var i=0;
while ((i < w) && ((bitnum & 7) != 0) ){
var shift=this.shiftOffset - (bitnum & 7);
element=data[index + (bitnum >> 3)];
element&=~(this.bitMask << shift);
element|=(iArray[outindex++] & this.bitMask) << shift;
data[index + (bitnum >> 3)]=(element|0);
bitnum+=pixbits;
++i;
}
var inIndex=index + (bitnum >> 3);
switch (pixbits) {
case 1:
for (; i < w - 7; i+=8) {
element=(iArray[outindex++] & 1) << 7;
element|=(iArray[outindex++] & 1) << 6;
element|=(iArray[outindex++] & 1) << 5;
element|=(iArray[outindex++] & 1) << 4;
element|=(iArray[outindex++] & 1) << 3;
element|=(iArray[outindex++] & 1) << 2;
element|=(iArray[outindex++] & 1) << 1;
element|=(iArray[outindex++] & 1);
data[inIndex++]=(element|0);
bitnum+=8;
}
break;
case 2:
for (; i < w - 7; i+=8) {
element=(iArray[outindex++] & 3) << 6;
element|=(iArray[outindex++] & 3) << 4;
element|=(iArray[outindex++] & 3) << 2;
element|=(iArray[outindex++] & 3);
data[inIndex++]=(element|0);
element=(iArray[outindex++] & 3) << 6;
element|=(iArray[outindex++] & 3) << 4;
element|=(iArray[outindex++] & 3) << 2;
element|=(iArray[outindex++] & 3);
data[inIndex++]=(element|0);
bitnum+=16;
}
break;
case 4:
for (; i < w - 7; i+=8) {
element=(iArray[outindex++] & 15) << 4;
element|=(iArray[outindex++] & 15);
data[inIndex++]=(element|0);
element=(iArray[outindex++] & 15) << 4;
element|=(iArray[outindex++] & 15);
data[inIndex++]=(element|0);
element=(iArray[outindex++] & 15) << 4;
element|=(iArray[outindex++] & 15);
data[inIndex++]=(element|0);
element=(iArray[outindex++] & 15) << 4;
element|=(iArray[outindex++] & 15);
data[inIndex++]=(element|0);
bitnum+=32;
}
break;
}
for (; i < w; i++) {
var shift=this.shiftOffset - (bitnum & 7);
element=data[index + (bitnum >> 3)];
element&=~(this.bitMask << shift);
element|=(iArray[outindex++] & this.bitMask) << shift;
data[index + (bitnum >> 3)]=(element|0);
bitnum+=pixbits;
}
index+=this.scanlineStride;
}
this.markDirty$();
});

Clazz.newMeth(C$, 'createChild$I$I$I$I$I$I$IA',  function (x, y, width, height, x0, y0, bandList) {
var newRaster=this.createWritableChild$I$I$I$I$I$I$IA(x, y, width, height, x0, y0, bandList);
return newRaster;
});

Clazz.newMeth(C$, 'createWritableChild$I$I$I$I$I$I$IA',  function (x, y, width, height, x0, y0, bandList) {
if (x < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["x lies outside the raster"]);
}if (y < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["y lies outside the raster"]);
}if ((x + width < x) || (x + width > this.minX + this.width) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(x + width) is outside of Raster"]);
}if ((y + height < y) || (y + height > this.minY + this.height) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(y + height) is outside of Raster"]);
}var sm;
if (bandList != null ) {
sm=this.sampleModel.createSubsetSampleModel$IA(bandList);
} else {
sm=this.sampleModel;
}var deltaX=x0 - x;
var deltaY=y0 - y;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_BytePackedRaster,[sm, this.dataBuffer, Clazz.new_($I$(1,1).c$$I$I$I$I,[x0, y0, width, height]), Clazz.new_($I$(3,1).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I',  function (w, h) {
if (w <= 0 || h <= 0 ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["negative " + ((w <= 0) ? "width" : "height")]);
}var sm=this.sampleModel.createCompatibleSampleModel$I$I(w, h);
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_Point,[sm, Clazz.new_($I$(3,1).c$$I$I,[0, 0])]);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$',  function () {
return this.createCompatibleWritableRaster$I$I(this.width, this.height);
});

Clazz.newMeth(C$, 'verify$Z',  function (strictCheck) {
if (this.dataBitOffset < 0) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Data offsets must be >= 0"]);
}if (this.width <= 0 || this.height <= 0  || this.height > ((2147483647/this.width|0)) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid raster dimension"]);
}if ((this.width - 1) > (2147483647/this.pixelBitStride|0)) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid raster dimension"]);
}if (Long.$lt(Long.$sub(this.minX,this.sampleModelTranslateX),0 ) || Long.$lt(Long.$sub(this.minY,this.sampleModelTranslateY),0 ) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect origin/translate: (" + this.minX + ", " + this.minY + ") / (" + this.sampleModelTranslateX + ", " + this.sampleModelTranslateY + ")" ]);
}if (this.scanlineStride < 0 || this.scanlineStride > ((2147483647/this.height|0)) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid scanline stride"]);
}if (this.height > 1 || this.minY - this.sampleModelTranslateY > 0 ) {
if (this.scanlineStride > this.data.length) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect scanline stride: " + this.scanlineStride]);
}}var lastbit=Long.$sub(Long.$add(Long.$add(Long.$add(this.dataBitOffset,Long.$mul((this.height - 1),this.scanlineStride , 8 )),Long.$mul((this.width - 1),this.pixelBitStride)),this.pixelBitStride),1);
if (Long.$lt(lastbit,0 ) || Long.$ge(Long.$div(lastbit,8),this.data.length ) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["raster dimensions overflow array bounds"]);
}if (strictCheck) {
if (this.height > 1) {
lastbit=this.width * this.pixelBitStride - 1;
if (Long.$ge(Long.$div(lastbit,8),this.scanlineStride )) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["data for adjacent scanlines overlaps"]);
}}}}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
return  String.instantialize("BytePackedRaster: width = " + this.width + " height = " + this.height + " #channels " + this.numBands + " xOff = " + this.sampleModelTranslateX + " yOff = " + this.sampleModelTranslateY );
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

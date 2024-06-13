(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[[0,'java.awt.color.ColorSpace','com.sun.imageio.plugins.common.BogusColorSpace','java.awt.image.ComponentColorModel','java.awt.image.DirectColorModel','java.awt.image.IndexColorModel','com.sun.imageio.plugins.common.I18N','java.awt.image.DataBuffer','javax.imageio.ImageTypeSpecifier']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createColorModel$java_awt_image_SampleModel',  function (sampleModel) {
if (sampleModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sampleModel == null!"]);
}var dataType=sampleModel.getDataType$();
switch (dataType) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
break;
default:
return null;
}
var colorModel=null;
var sampleSize=sampleModel.getSampleSize$();
if (Clazz.instanceOf(sampleModel, "java.awt.image.ComponentSampleModel")) {
var numBands=sampleModel.getNumBands$();
var colorSpace=null;
if (numBands <= 2) {
colorSpace=$I$(1).getInstance$I(1003);
} else if (numBands <= 4) {
colorSpace=$I$(1).getInstance$I(1000);
} else {
colorSpace=Clazz.new_($I$(2,1).c$$I,[numBands]);
}var hasAlpha=(numBands == 2) || (numBands == 4) ;
var isAlphaPremultiplied=false;
var transparency=hasAlpha ? 3 : 1;
colorModel=Clazz.new_($I$(3,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[colorSpace, sampleSize, hasAlpha, isAlphaPremultiplied, transparency, dataType]);
} else if (sampleModel.getNumBands$() <= 4 && Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel") ) {
var sppsm=sampleModel;
var bitMasks=sppsm.getBitMasks$();
var rmask=0;
var gmask=0;
var bmask=0;
var amask=0;
var numBands=bitMasks.length;
if (numBands <= 2) {
rmask=gmask=bmask=bitMasks[0];
if (numBands == 2) {
amask=bitMasks[1];
}} else {
rmask=bitMasks[0];
gmask=bitMasks[1];
bmask=bitMasks[2];
if (numBands == 4) {
amask=bitMasks[3];
}}var bits=0;
for (var i=0; i < sampleSize.length; i++) {
bits+=sampleSize[i];
}
return Clazz.new_($I$(4,1).c$$I$I$I$I$I,[bits, rmask, gmask, bmask, amask]);
} else if (Clazz.instanceOf(sampleModel, "java.awt.image.MultiPixelPackedSampleModel")) {
var bitsPerSample=sampleSize[0];
var numEntries=1 << bitsPerSample;
var map=Clazz.array(Byte.TYPE, [numEntries]);
for (var i=0; i < numEntries; i++) {
map[i]=(((i * 255/(numEntries - 1)|0))|0);
}
colorModel=Clazz.new_($I$(5,1).c$$I$I$BA$BA$BA,[bitsPerSample, numEntries, map, map, map]);
}return colorModel;
}, 1);

Clazz.newMeth(C$, 'getPackedBinaryData$java_awt_image_Raster$java_awt_Rectangle',  function (raster, rect) {
var sm=raster.getSampleModel$();
if (!C$.isBinary$java_awt_image_SampleModel(sm)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("ImageUtil0")]);
}var rectX=rect.x;
var rectY=rect.y;
var rectWidth=rect.width;
var rectHeight=rect.height;
var dataBuffer=raster.getDataBuffer$();
var dx=rectX - raster.getSampleModelTranslateX$();
var dy=rectY - raster.getSampleModelTranslateY$();
var mpp=sm;
var lineStride=mpp.getScanlineStride$();
var eltOffset=dataBuffer.getOffset$() + mpp.getOffset$I$I(dx, dy);
var bitOffset=mpp.getBitOffset$I(dx);
var numBytesPerRow=((rectWidth + 7)/8|0);
if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte") && eltOffset == 0  && bitOffset == 0  && numBytesPerRow == lineStride  && (dataBuffer).getData$().length == numBytesPerRow * rectHeight ) {
return (dataBuffer).getData$();
}var binaryDataArray=Clazz.array(Byte.TYPE, [numBytesPerRow * rectHeight]);
var b=0;
if (bitOffset == 0) {
if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte")) {
var data=(dataBuffer).getData$();
var stride=numBytesPerRow;
var offset=0;
for (var y=0; y < rectHeight; y++) {
System.arraycopy$O$I$O$I$I(data, eltOffset, binaryDataArray, offset, stride);
offset+=stride;
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") || Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferUShort") ) {
var data=Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") ? (dataBuffer).getData$() : (dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var xRemaining=rectWidth;
var i=eltOffset;
while (xRemaining > 8){
var datum=data[i++];
binaryDataArray[b++]=(((datum >>> 8) & 255)|0);
binaryDataArray[b++]=((datum & 255)|0);
xRemaining-=16;
}
if (xRemaining > 0) {
binaryDataArray[b++]=(((data[i] >>> 8) & 255)|0);
}eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt")) {
var data=(dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var xRemaining=rectWidth;
var i=eltOffset;
while (xRemaining > 24){
var datum=data[i++];
binaryDataArray[b++]=(((datum >>> 24) & 255)|0);
binaryDataArray[b++]=(((datum >>> 16) & 255)|0);
binaryDataArray[b++]=(((datum >>> 8) & 255)|0);
binaryDataArray[b++]=((datum & 255)|0);
xRemaining-=32;
}
var shift=24;
while (xRemaining > 0){
binaryDataArray[b++]=(((data[i] >>> shift) & 255)|0);
shift-=8;
xRemaining-=8;
}
eltOffset+=lineStride;
}
}} else {
if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte")) {
var data=(dataBuffer).getData$();
if ((bitOffset & 7) == 0) {
var stride=numBytesPerRow;
var offset=0;
for (var y=0; y < rectHeight; y++) {
System.arraycopy$O$I$O$I$I(data, eltOffset, binaryDataArray, offset, stride);
offset+=stride;
eltOffset+=lineStride;
}
} else {
var leftShift=bitOffset & 7;
var rightShift=8 - leftShift;
for (var y=0; y < rectHeight; y++) {
var i=eltOffset;
var xRemaining=rectWidth;
while (xRemaining > 0){
if (xRemaining > rightShift) {
binaryDataArray[b++]=((((data[i++] & 255) << leftShift) | ((data[i] & 255) >>> rightShift))|0);
} else {
binaryDataArray[b++]=(((data[i] & 255) << leftShift)|0);
}xRemaining-=8;
}
eltOffset+=lineStride;
}
}} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") || Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferUShort") ) {
var data=Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") ? (dataBuffer).getData$() : (dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var bOffset=bitOffset;
for (var x=0; x < rectWidth; x+=8, bOffset+=8) {
var i=eltOffset + (bOffset/16|0);
var mod=bOffset % 16;
var left=data[i] & 65535;
if (mod <= 8) {
binaryDataArray[b++]=((left >>> (8 - mod))|0);
} else {
var delta=mod - 8;
var right=data[i + 1] & 65535;
binaryDataArray[b++]=(((left << delta) | (right >>> (16 - delta)))|0);
}}
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt")) {
var data=(dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var bOffset=bitOffset;
for (var x=0; x < rectWidth; x+=8, bOffset+=8) {
var i=eltOffset + (bOffset/32|0);
var mod=bOffset % 32;
var left=data[i];
if (mod <= 24) {
binaryDataArray[b++]=((left >>> (24 - mod))|0);
} else {
var delta=mod - 24;
var right=data[i + 1];
binaryDataArray[b++]=(((left << delta) | (right >>> (32 - delta)))|0);
}}
eltOffset+=lineStride;
}
}}return binaryDataArray;
}, 1);

Clazz.newMeth(C$, 'getUnpackedBinaryData$java_awt_image_Raster$java_awt_Rectangle',  function (raster, rect) {
var sm=raster.getSampleModel$();
if (!C$.isBinary$java_awt_image_SampleModel(sm)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("ImageUtil0")]);
}var rectX=rect.x;
var rectY=rect.y;
var rectWidth=rect.width;
var rectHeight=rect.height;
var dataBuffer=raster.getDataBuffer$();
var dx=rectX - raster.getSampleModelTranslateX$();
var dy=rectY - raster.getSampleModelTranslateY$();
var mpp=sm;
var lineStride=mpp.getScanlineStride$();
var eltOffset=dataBuffer.getOffset$() + mpp.getOffset$I$I(dx, dy);
var bitOffset=mpp.getBitOffset$I(dx);
var bdata=Clazz.array(Byte.TYPE, [rectWidth * rectHeight]);
var maxY=rectY + rectHeight;
var maxX=rectX + rectWidth;
var k=0;
if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte")) {
var data=(dataBuffer).getData$();
for (var y=rectY; y < maxY; y++) {
var bOffset=eltOffset * 8 + bitOffset;
for (var x=rectX; x < maxX; x++) {
var b=data[(bOffset/8|0)];
bdata[k++]=(((b >>> (7 - bOffset & 7)) & 1)|0);
++bOffset;
}
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") || Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferUShort") ) {
var data=Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") ? (dataBuffer).getData$() : (dataBuffer).getData$();
for (var y=rectY; y < maxY; y++) {
var bOffset=eltOffset * 16 + bitOffset;
for (var x=rectX; x < maxX; x++) {
var s=data[(bOffset/16|0)];
bdata[k++]=(((s >>> (15 - bOffset % 16)) & 1)|0);
++bOffset;
}
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt")) {
var data=(dataBuffer).getData$();
for (var y=rectY; y < maxY; y++) {
var bOffset=eltOffset * 32 + bitOffset;
for (var x=rectX; x < maxX; x++) {
var i=data[(bOffset/32|0)];
bdata[k++]=(((i >>> (31 - bOffset % 32)) & 1)|0);
++bOffset;
}
eltOffset+=lineStride;
}
}return bdata;
}, 1);

Clazz.newMeth(C$, 'setPackedBinaryData$BA$java_awt_image_WritableRaster$java_awt_Rectangle',  function (binaryDataArray, raster, rect) {
var sm=raster.getSampleModel$();
if (!C$.isBinary$java_awt_image_SampleModel(sm)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("ImageUtil0")]);
}var rectX=rect.x;
var rectY=rect.y;
var rectWidth=rect.width;
var rectHeight=rect.height;
var dataBuffer=raster.getDataBuffer$();
var dx=rectX - raster.getSampleModelTranslateX$();
var dy=rectY - raster.getSampleModelTranslateY$();
var mpp=sm;
var lineStride=mpp.getScanlineStride$();
var eltOffset=dataBuffer.getOffset$() + mpp.getOffset$I$I(dx, dy);
var bitOffset=mpp.getBitOffset$I(dx);
var b=0;
if (bitOffset == 0) {
if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte")) {
var data=(dataBuffer).getData$();
if (data === binaryDataArray ) {
return;
}var stride=((rectWidth + 7)/8|0);
var offset=0;
for (var y=0; y < rectHeight; y++) {
System.arraycopy$O$I$O$I$I(binaryDataArray, offset, data, eltOffset, stride);
offset+=stride;
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") || Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferUShort") ) {
var data=Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") ? (dataBuffer).getData$() : (dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var xRemaining=rectWidth;
var i=eltOffset;
while (xRemaining > 8){
data[i++]=((((binaryDataArray[b++] & 255) << 8) | (binaryDataArray[b++] & 255))|0);
xRemaining-=16;
}
if (xRemaining > 0) {
data[i++]=(((binaryDataArray[b++] & 255) << 8)|0);
}eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt")) {
var data=(dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var xRemaining=rectWidth;
var i=eltOffset;
while (xRemaining > 24){
data[i++]=(((binaryDataArray[b++] & 255) << 24) | ((binaryDataArray[b++] & 255) << 16) | ((binaryDataArray[b++] & 255) << 8) | (binaryDataArray[b++] & 255) );
xRemaining-=32;
}
var shift=24;
while (xRemaining > 0){
data[i]|=((binaryDataArray[b++] & 255) << shift);
shift-=8;
xRemaining-=8;
}
eltOffset+=lineStride;
}
}} else {
var stride=((rectWidth + 7)/8|0);
var offset=0;
if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte")) {
var data=(dataBuffer).getData$();
if ((bitOffset & 7) == 0) {
for (var y=0; y < rectHeight; y++) {
System.arraycopy$O$I$O$I$I(binaryDataArray, offset, data, eltOffset, stride);
offset+=stride;
eltOffset+=lineStride;
}
} else {
var rightShift=bitOffset & 7;
var leftShift=8 - rightShift;
var leftShift8=8 + leftShift;
var mask=($b$[0] = (255 << leftShift), $b$[0]);
var mask1=($b$[0] = ~mask, $b$[0]);
for (var y=0; y < rectHeight; y++) {
var i=eltOffset;
var xRemaining=rectWidth;
while (xRemaining > 0){
var datum=binaryDataArray[b++];
if (xRemaining > leftShift8) {
data[i]=(((data[i] & mask) | ((datum & 255) >>> rightShift))|0);
data[++i]=(((datum & 255) << leftShift)|0);
} else if (xRemaining > leftShift) {
data[i]=(((data[i] & mask) | ((datum & 255) >>> rightShift))|0);
++i;
data[i]=(((data[i] & mask1) | ((datum & 255) << leftShift))|0);
} else {
var remainMask=(1 << leftShift - xRemaining) - 1;
data[i]=(((data[i] & (mask | remainMask)) | (datum & 255) >>> rightShift & ~remainMask)|0);
}xRemaining-=8;
}
eltOffset+=lineStride;
}
}} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") || Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferUShort") ) {
var data=Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") ? (dataBuffer).getData$() : (dataBuffer).getData$();
var rightShift=bitOffset & 7;
var leftShift=8 - rightShift;
var leftShift16=16 + leftShift;
var mask=($s$[0] = (~(255 << leftShift)), $s$[0]);
var mask1=($s$[0] = (65535 << leftShift), $s$[0]);
var mask2=($s$[0] = ~mask1, $s$[0]);
for (var y=0; y < rectHeight; y++) {
var bOffset=bitOffset;
var xRemaining=rectWidth;
for (var x=0; x < rectWidth; x+=8, bOffset+=8, xRemaining-=8) {
var i=eltOffset + (bOffset >> 4);
var mod=bOffset & 15;
var datum=binaryDataArray[b++] & 255;
if (mod <= 8) {
if (xRemaining < 8) {
datum&=255 << 8 - xRemaining;
}data[i]=(((data[i] & mask) | (datum << leftShift))|0);
} else if (xRemaining > leftShift16) {
data[i]=(((data[i] & mask1) | ((datum >>> rightShift) & 65535))|0);
data[++i]=(((datum << leftShift) & 65535)|0);
} else if (xRemaining > leftShift) {
data[i]=(((data[i] & mask1) | ((datum >>> rightShift) & 65535))|0);
++i;
data[i]=(((data[i] & mask2) | ((datum << leftShift) & 65535))|0);
} else {
var remainMask=(1 << leftShift - xRemaining) - 1;
data[i]=(((data[i] & (mask1 | remainMask)) | ((datum >>> rightShift) & 65535 & ~remainMask ))|0);
}}
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt")) {
var data=(dataBuffer).getData$();
var rightShift=bitOffset & 7;
var leftShift=8 - rightShift;
var leftShift32=32 + leftShift;
var mask=-1 << leftShift;
var mask1=~mask;
for (var y=0; y < rectHeight; y++) {
var bOffset=bitOffset;
var xRemaining=rectWidth;
for (var x=0; x < rectWidth; x+=8, bOffset+=8, xRemaining-=8) {
var i=eltOffset + (bOffset >> 5);
var mod=bOffset & 31;
var datum=binaryDataArray[b++] & 255;
if (mod <= 24) {
var shift=24 - mod;
if (xRemaining < 8) {
datum&=255 << 8 - xRemaining;
}data[i]=(data[i] & (~(255 << shift))) | (datum << shift);
} else if (xRemaining > leftShift32) {
data[i]=(data[i] & mask) | (datum >>> rightShift);
data[++i]=datum << leftShift;
} else if (xRemaining > leftShift) {
data[i]=(data[i] & mask) | (datum >>> rightShift);
++i;
data[i]=(data[i] & mask1) | (datum << leftShift);
} else {
var remainMask=(1 << leftShift - xRemaining) - 1;
data[i]=(data[i] & (mask | remainMask)) | (datum >>> rightShift & ~remainMask);
}}
eltOffset+=lineStride;
}
}}}, 1);

Clazz.newMeth(C$, 'setUnpackedBinaryData$BA$java_awt_image_WritableRaster$java_awt_Rectangle',  function (bdata, raster, rect) {
var sm=raster.getSampleModel$();
if (!C$.isBinary$java_awt_image_SampleModel(sm)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("ImageUtil0")]);
}var rectX=rect.x;
var rectY=rect.y;
var rectWidth=rect.width;
var rectHeight=rect.height;
var dataBuffer=raster.getDataBuffer$();
var dx=rectX - raster.getSampleModelTranslateX$();
var dy=rectY - raster.getSampleModelTranslateY$();
var mpp=sm;
var lineStride=mpp.getScanlineStride$();
var eltOffset=dataBuffer.getOffset$() + mpp.getOffset$I$I(dx, dy);
var bitOffset=mpp.getBitOffset$I(dx);
var k=0;
if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte")) {
var data=(dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var bOffset=eltOffset * 8 + bitOffset;
for (var x=0; x < rectWidth; x++) {
if (bdata[k++] != 0) {
data[(bOffset/8|0)]|=((1 << (7 - bOffset & 7))|0);
}++bOffset;
}
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") || Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferUShort") ) {
var data=Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferShort") ? (dataBuffer).getData$() : (dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var bOffset=eltOffset * 16 + bitOffset;
for (var x=0; x < rectWidth; x++) {
if (bdata[k++] != 0) {
data[(bOffset/16|0)]|=((1 << (15 - bOffset % 16))|0);
}++bOffset;
}
eltOffset+=lineStride;
}
} else if (Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt")) {
var data=(dataBuffer).getData$();
for (var y=0; y < rectHeight; y++) {
var bOffset=eltOffset * 32 + bitOffset;
for (var x=0; x < rectWidth; x++) {
if (bdata[k++] != 0) {
data[(bOffset/32|0)]|=(1 << (31 - bOffset % 32));
}++bOffset;
}
eltOffset+=lineStride;
}
}}, 1);

Clazz.newMeth(C$, 'isBinary$java_awt_image_SampleModel',  function (sm) {
return Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel") && (sm).getPixelBitStride$() == 1  && sm.getNumBands$() == 1 ;
}, 1);

Clazz.newMeth(C$, 'createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel',  function (colorSpace, sampleModel) {
var colorModel=null;
if (sampleModel == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(6).getString$S("ImageUtil1")]);
}var numBands=sampleModel.getNumBands$();
if (numBands < 1 || numBands > 4 ) {
return null;
}var dataType=sampleModel.getDataType$();
if (Clazz.instanceOf(sampleModel, "java.awt.image.ComponentSampleModel")) {
if (dataType < 0 || dataType > 5 ) {
return null;
}if (colorSpace == null ) colorSpace=numBands <= 2 ? $I$(1).getInstance$I(1003) : $I$(1).getInstance$I(1000);
var useAlpha=(numBands == 2) || (numBands == 4) ;
var transparency=useAlpha ? 3 : 1;
var premultiplied=false;
var dataTypeSize=$I$(7).getDataTypeSize$I(dataType);
var bits=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) {
bits[i]=dataTypeSize;
}
colorModel=Clazz.new_($I$(3,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[colorSpace, bits, useAlpha, premultiplied, transparency, dataType]);
} else if (Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sampleModel;
var bitMasks=sppsm.getBitMasks$();
var rmask=0;
var gmask=0;
var bmask=0;
var amask=0;
numBands=bitMasks.length;
if (numBands <= 2) {
rmask=gmask=bmask=bitMasks[0];
if (numBands == 2) {
amask=bitMasks[1];
}} else {
rmask=bitMasks[0];
gmask=bitMasks[1];
bmask=bitMasks[2];
if (numBands == 4) {
amask=bitMasks[3];
}}var sampleSize=sppsm.getSampleSize$();
var bits=0;
for (var i=0; i < sampleSize.length; i++) {
bits+=sampleSize[i];
}
if (colorSpace == null ) colorSpace=$I$(1).getInstance$I(1000);
colorModel=Clazz.new_([colorSpace, bits, rmask, gmask, bmask, amask, false, sampleModel.getDataType$()],$I$(4,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I);
} else if (Clazz.instanceOf(sampleModel, "java.awt.image.MultiPixelPackedSampleModel")) {
var bits=(sampleModel).getPixelBitStride$();
var size=1 << bits;
var comp=Clazz.array(Byte.TYPE, [size]);
for (var i=0; i < size; i++) comp[i]=(((255 * i/(size - 1)|0))|0);

colorModel=Clazz.new_($I$(5,1).c$$I$I$BA$BA$BA,[bits, size, comp, comp, comp]);
}return colorModel;
}, 1);

Clazz.newMeth(C$, 'getElementSize$java_awt_image_SampleModel',  function (sm) {
var elementSize=$I$(7,"getDataTypeSize$I",[sm.getDataType$()]);
if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel")) {
var mppsm=sm;
return mppsm.getSampleSize$I(0) * mppsm.getNumBands$();
} else if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
return sm.getNumBands$() * elementSize;
} else if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
return elementSize;
}return elementSize * sm.getNumBands$();
}, 1);

Clazz.newMeth(C$, 'getTileSize$java_awt_image_SampleModel',  function (sm) {
var elementSize=$I$(7,"getDataTypeSize$I",[sm.getDataType$()]);
if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel")) {
var mppsm=sm;
return (mppsm.getScanlineStride$() * mppsm.getHeight$() + ((mppsm.getDataBitOffset$() + elementSize - 1)/elementSize|0)) * (((elementSize + 7)/8|0));
} else if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
var csm=sm;
var bandOffsets=csm.getBandOffsets$();
var maxBandOff=bandOffsets[0];
for (var i=1; i < bandOffsets.length; i++) maxBandOff=Math.max(maxBandOff, bandOffsets[i]);

var size=0;
var pixelStride=csm.getPixelStride$();
var scanlineStride=csm.getScanlineStride$();
if (maxBandOff >= 0) (size=Long.$add(size,(maxBandOff + 1)));
if (pixelStride > 0) (size=Long.$add(size,(pixelStride * (sm.getWidth$() - 1))));
if (scanlineStride > 0) (size=Long.$add(size,(scanlineStride * (sm.getHeight$() - 1))));
var bankIndices=csm.getBankIndices$();
maxBandOff=bankIndices[0];
for (var i=1; i < bankIndices.length; i++) maxBandOff=Math.max(maxBandOff, bankIndices[i]);

return Long.$mul(size,(maxBandOff + 1) , (((elementSize + 7)/8|0)) );
} else if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sm;
var size=sppsm.getScanlineStride$() * (sppsm.getHeight$() - 1) + sppsm.getWidth$();
return Long.$mul(size,(((elementSize + 7)/8|0)));
}return 0;
}, 1);

Clazz.newMeth(C$, 'getBandSize$java_awt_image_SampleModel',  function (sm) {
var elementSize=$I$(7,"getDataTypeSize$I",[sm.getDataType$()]);
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
var csm=sm;
var pixelStride=csm.getPixelStride$();
var scanlineStride=csm.getScanlineStride$();
var size=Math.min(pixelStride, scanlineStride);
if (pixelStride > 0) (size=Long.$add(size,(pixelStride * (sm.getWidth$() - 1))));
if (scanlineStride > 0) (size=Long.$add(size,(scanlineStride * (sm.getHeight$() - 1))));
return Long.$mul(size,(((elementSize + 7)/8|0)));
} else return C$.getTileSize$java_awt_image_SampleModel(sm);
}, 1);

Clazz.newMeth(C$, 'isIndicesForGrayscale$BA$BA$BA',  function (r, g, b) {
if (r.length != g.length || r.length != b.length ) return false;
var size=r.length;
if (size != 256) return false;
for (var i=0; i < size; i++) {
var temp=($b$[0] = i, $b$[0]);
if (r[i] != temp || g[i] != temp  || b[i] != temp ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'convertObjectToString$O',  function (obj) {
if (obj == null ) return "";
var s="";
if (Clazz.instanceOf(obj, Clazz.array(Byte.TYPE, -1))) {
var bArray=obj;
for (var i=0; i < bArray.length; i++) s+=bArray[i] + " ";

return s;
}if (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -1))) {
var iArray=obj;
for (var i=0; i < iArray.length; i++) s+=iArray[i] + " ";

return s;
}if (Clazz.instanceOf(obj, Clazz.array(Short.TYPE, -1))) {
var sArray=obj;
for (var i=0; i < sArray.length; i++) s+=sArray[i] + " ";

return s;
}return obj.toString();
}, 1);

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageWriter$javax_imageio_ImageTypeSpecifier',  function (writer, type) {
var spi=writer.getOriginatingProvider$();
if (type != null  && spi != null   && !spi.canEncodeImage$javax_imageio_ImageTypeSpecifier(type) ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(6).getString$S("ImageUtil2") + " " + writer.getClass$().getName$() ]);
}}, 1);

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageWriter$java_awt_image_ColorModel$java_awt_image_SampleModel',  function (writer, colorModel, sampleModel) {
var type=null;
if (colorModel != null  && sampleModel != null  ) type=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
C$.canEncodeImage$javax_imageio_ImageWriter$javax_imageio_ImageTypeSpecifier(writer, type);
}, 1);

Clazz.newMeth(C$, 'imageIsContiguous$java_awt_image_RenderedImage',  function (image) {
var sm;
if (Clazz.instanceOf(image, "java.awt.image.BufferedImage")) {
var ras=(image).getRaster$();
sm=ras.getSampleModel$();
} else {
sm=image.getSampleModel$();
}if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
var csm=sm;
if (csm.getPixelStride$() != csm.getNumBands$()) {
return false;
}var bandOffsets=csm.getBandOffsets$();
for (var i=0; i < bandOffsets.length; i++) {
if (bandOffsets[i] != i) {
return false;
}}
var bankIndices=csm.getBankIndices$();
for (var i=0; i < bandOffsets.length; i++) {
if (bankIndices[i] != 0) {
return false;
}}
return true;
}return C$.isBinary$java_awt_image_SampleModel(sm);
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

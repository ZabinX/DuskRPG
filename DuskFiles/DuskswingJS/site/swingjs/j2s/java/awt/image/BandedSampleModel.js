(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.image.DataBufferByte','java.awt.image.DataBufferUShort','java.awt.image.DataBufferShort','java.awt.image.DataBufferInt','java.awt.image.DataBufferFloat','java.awt.image.DataBufferDouble']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BandedSampleModel", null, 'java.awt.image.ComponentSampleModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (dataType, w, h, numBands) {
;C$.superclazz.c$$I$I$I$I$I$IA$IA.apply(this,[dataType, w, h, 1, w, C$.createIndicesArray$I(numBands), C$.createOffsetArray$I(numBands)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$IA$IA',  function (dataType, w, h, scanlineStride, bankIndices, bandOffsets) {
;C$.superclazz.c$$I$I$I$I$I$IA$IA.apply(this,[dataType, w, h, 1, scanlineStride, bankIndices, bandOffsets]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createCompatibleSampleModel$I$I',  function (w, h) {
var bandOffs;
if (this.numBanks == 1) {
bandOffs=this.orderBands$IA$I(this.bandOffsets, w * h);
} else {
bandOffs=Clazz.array(Integer.TYPE, [this.bandOffsets.length]);
}var sampleModel=Clazz.new_(C$.c$$I$I$I$I$IA$IA,[this.dataType, w, h, w, this.bankIndices, bandOffs]);
return sampleModel;
});

Clazz.newMeth(C$, 'createSubsetSampleModel$IA',  function (bands) {
if (bands.length > this.bankIndices.length) throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["There are only " + this.bankIndices.length + " bands" ]);
var newBankIndices=Clazz.array(Integer.TYPE, [bands.length]);
var newBandOffsets=Clazz.array(Integer.TYPE, [bands.length]);
for (var i=0; i < bands.length; i++) {
newBankIndices[i]=this.bankIndices[bands[i]];
newBandOffsets[i]=this.bandOffsets[bands[i]];
}
return Clazz.new_(C$.c$$I$I$I$I$IA$IA,[this.dataType, this.width, this.height, this.scanlineStride, newBankIndices, newBandOffsets]);
});

Clazz.newMeth(C$, 'createDataBuffer$',  function () {
var dataBuffer=null;
var size=this.scanlineStride * this.height;
switch (this.dataType) {
case 0:
dataBuffer=Clazz.new_($I$(1,1).c$$I$I,[size, this.numBanks]);
break;
case 1:
dataBuffer=Clazz.new_($I$(2,1).c$$I$I,[size, this.numBanks]);
break;
case 2:
dataBuffer=Clazz.new_($I$(3,1).c$$I$I,[size, this.numBanks]);
break;
case 3:
dataBuffer=Clazz.new_($I$(4,1).c$$I$I,[size, this.numBanks]);
break;
case 4:
dataBuffer=Clazz.new_($I$(5,1).c$$I$I,[size, this.numBanks]);
break;
case 5:
dataBuffer=Clazz.new_($I$(6,1).c$$I$I,[size, this.numBanks]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dataType is not one of the supported types."]);
}
return dataBuffer;
});

Clazz.newMeth(C$, 'getDataElements$I$I$O$java_awt_image_DataBuffer',  function (x, y, obj, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var type=this.getTransferType$();
var numDataElems=this.getNumDataElements$();
var pixelOffset=y * this.scanlineStride + x;
switch (type) {
case 0:
var bdata;
if (obj == null ) {
bdata=Clazz.array(Byte.TYPE, [numDataElems]);
} else {
bdata=obj;
}for (var i=0; i < numDataElems; i++) {
bdata[i]=(data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i])|0);
}
obj=bdata;
break;
case 1:
case 2:
var sdata;
if (obj == null ) {
sdata=Clazz.array(Short.TYPE, [numDataElems]);
} else {
sdata=obj;
}for (var i=0; i < numDataElems; i++) {
sdata[i]=(data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i])|0);
}
obj=sdata;
break;
case 3:
var idata;
if (obj == null ) {
idata=Clazz.array(Integer.TYPE, [numDataElems]);
} else {
idata=obj;
}for (var i=0; i < numDataElems; i++) {
idata[i]=data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i]);
}
obj=idata;
break;
case 4:
var fdata;
if (obj == null ) {
fdata=Clazz.array(Float.TYPE, [numDataElems]);
} else {
fdata=obj;
}for (var i=0; i < numDataElems; i++) {
fdata[i]=data.getElemFloat$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i]);
}
obj=fdata;
break;
case 5:
var ddata;
if (obj == null ) {
ddata=Clazz.array(Double.TYPE, [numDataElems]);
} else {
ddata=obj;
}for (var i=0; i < numDataElems; i++) {
ddata[i]=data.getElemDouble$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i]);
}
obj=ddata;
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
pixels=Clazz.array(Integer.TYPE, [this.$numBands]);
}var pixelOffset=y * this.scanlineStride + x;
for (var i=0; i < this.$numBands; i++) {
pixels[i]=data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i]);
}
return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, iArray, data) {
var x1=x + w;
var y1=y + h;
if (x < 0 || x >= this.width  || w > this.width  || x1 < 0  || x1 > this.width  || y < 0  || y >= this.height  || h > this.height  || y1 < 0  || y1 > this.height ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var pixels;
if (iArray != null ) {
pixels=iArray;
} else {
pixels=Clazz.array(Integer.TYPE, [w * h * this.$numBands ]);
}for (var k=0; k < this.$numBands; k++) {
var lineOffset=y * this.scanlineStride + x + this.bandOffsets[k];
var srcOffset=k;
var bank=this.bankIndices[k];
for (var i=0; i < h; i++) {
var pixelOffset=lineOffset;
for (var j=0; j < w; j++) {
pixels[srcOffset]=data.getElem$I$I(bank, pixelOffset++);
srcOffset+=this.$numBands;
}
lineOffset+=this.scanlineStride;
}
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getSample$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var sample=data.getElem$I$I(this.bankIndices[b], y * this.scanlineStride + x + this.bandOffsets[b]);
return sample;
});

Clazz.newMeth(C$, 'getSampleFloat$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var sample=data.getElemFloat$I$I(this.bankIndices[b], y * this.scanlineStride + x + this.bandOffsets[b]);
return sample;
});

Clazz.newMeth(C$, 'getSampleDouble$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var sample=data.getElemDouble$I$I(this.bankIndices[b], y * this.scanlineStride + x + this.bandOffsets[b]);
return sample;
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
}var lineOffset=y * this.scanlineStride + x + this.bandOffsets[b];
var srcOffset=0;
var bank=this.bankIndices[b];
for (var i=0; i < h; i++) {
var sampleOffset=lineOffset;
for (var j=0; j < w; j++) {
samples[srcOffset++]=data.getElem$I$I(bank, sampleOffset++);
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
var numDataElems=this.getNumDataElements$();
var pixelOffset=y * this.scanlineStride + x;
switch (type) {
case 0:
var barray=obj;
for (var i=0; i < numDataElems; i++) {
data.setElem$I$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i], barray[i] & 255);
}
break;
case 1:
case 2:
var sarray=obj;
for (var i=0; i < numDataElems; i++) {
data.setElem$I$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i], sarray[i] & 65535);
}
break;
case 3:
var iarray=obj;
for (var i=0; i < numDataElems; i++) {
data.setElem$I$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i], iarray[i]);
}
break;
case 4:
var farray=obj;
for (var i=0; i < numDataElems; i++) {
data.setElemFloat$I$I$F(this.bankIndices[i], pixelOffset + this.bandOffsets[i], farray[i]);
}
break;
case 5:
var darray=obj;
for (var i=0; i < numDataElems; i++) {
data.setElemDouble$I$I$D(this.bankIndices[i], pixelOffset + this.bandOffsets[i], darray[i]);
}
break;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setPixel$I$I$IA$java_awt_image_DataBuffer',  function (x, y, iArray, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var pixelOffset=y * this.scanlineStride + x;
for (var i=0; i < this.$numBands; i++) {
data.setElem$I$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i], iArray[i]);
}
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, iArray, data) {
var x1=x + w;
var y1=y + h;
if (x < 0 || x >= this.width  || w > this.width  || x1 < 0  || x1 > this.width  || y < 0  || y >= this.height  || h > this.height  || y1 < 0  || y1 > this.height ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
for (var k=0; k < this.$numBands; k++) {
var lineOffset=y * this.scanlineStride + x + this.bandOffsets[k];
var srcOffset=k;
var bank=this.bankIndices[k];
for (var i=0; i < h; i++) {
var pixelOffset=lineOffset;
for (var j=0; j < w; j++) {
data.setElem$I$I$I(bank, pixelOffset++, iArray[srcOffset]);
srcOffset+=this.$numBands;
}
lineOffset+=this.scanlineStride;
}
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setSample$I$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.setElem$I$I$I(this.bankIndices[b], y * this.scanlineStride + x + this.bandOffsets[b], s);
});

Clazz.newMeth(C$, 'setSample$I$I$I$F$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.setElemFloat$I$I$F(this.bankIndices[b], y * this.scanlineStride + x + this.bandOffsets[b], s);
});

Clazz.newMeth(C$, 'setSample$I$I$I$D$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.setElemDouble$I$I$D(this.bankIndices[b], y * this.scanlineStride + x + this.bandOffsets[b], s);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, b, iArray, data) {
if ((x < 0) || (y < 0) || (x + w > this.width) || (y + h > this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var lineOffset=y * this.scanlineStride + x + this.bandOffsets[b];
var srcOffset=0;
var bank=this.bankIndices[b];
for (var i=0; i < h; i++) {
var sampleOffset=lineOffset;
for (var j=0; j < w; j++) {
data.setElem$I$I$I(bank, sampleOffset++, iArray[srcOffset++]);
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'createOffsetArray$I',  function (numBands) {
var bandOffsets=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) {
bandOffsets[i]=0;
}
return bandOffsets;
}, 1);

Clazz.newMeth(C$, 'createIndicesArray$I',  function (numBands) {
var bankIndices=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) {
bankIndices[i]=i;
}
return bankIndices;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return C$.superclazz.prototype.hashCode$.apply(this, []) ^ 2;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

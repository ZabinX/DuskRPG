(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.image.DataBufferByte','java.awt.image.DataBufferUShort','java.awt.image.DataBufferShort','java.awt.image.DataBufferInt','java.awt.image.DataBuffer','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComponentSampleModel", null, 'java.awt.image.SampleModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$numBands=1;
this.numBanks=1;
},1);

C$.$fields$=[['I',['$numBands','numBanks','scanlineStride','pixelStride'],'O',['bandOffsets','int[]','+bankIndices']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I$IA',  function (dataType, w, h, pixelStride, scanlineStride, bandOffsets) {
;C$.superclazz.c$$I$I$I$I.apply(this,[dataType, w, h, bandOffsets.length]);C$.$init$.apply(this);
this.dataType=dataType;
this.pixelStride=pixelStride;
this.scanlineStride=scanlineStride;
this.bandOffsets=bandOffsets.clone$();
this.$numBands=bandOffsets.length;
if (pixelStride < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pixel stride must be >= 0"]);
}if (scanlineStride < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Scanline stride must be >= 0"]);
}if (this.$numBands < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must have at least one band."]);
}if ((dataType < 0)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported dataType."]);
}this.bankIndices=Clazz.array(Integer.TYPE, [this.$numBands]);
for (var i=0; i < this.$numBands; i++) {
this.bankIndices[i]=0;
}
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$IA$IA',  function (dataType, w, h, pixelStride, scanlineStride, bankIndices, bandOffsets) {
;C$.superclazz.c$$I$I$I$I.apply(this,[dataType, w, h, bandOffsets.length]);C$.$init$.apply(this);
this.dataType=dataType;
this.pixelStride=pixelStride;
this.scanlineStride=scanlineStride;
this.bandOffsets=bandOffsets.clone$();
this.bankIndices=bankIndices.clone$();
if (pixelStride < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pixel stride must be >= 0"]);
}if (scanlineStride < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Scanline stride must be >= 0"]);
}if ((dataType < 0)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported dataType."]);
}var maxBank=bankIndices[0];
if (maxBank < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Index of bank 0 is less than 0 (" + maxBank + ")" ]);
}for (var i=1; i < bankIndices.length; i++) {
if (bankIndices[i] > maxBank) {
maxBank=bankIndices[i];
} else if (bankIndices[i] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Index of bank " + i + " is less than 0 (" + maxBank + ")" ]);
}}
this.numBanks=maxBank + 1;
this.$numBands=bandOffsets.length;
if (bandOffsets.length != bankIndices.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of bandOffsets must equal length of bankIndices."]);
}}, 1);

Clazz.newMeth(C$, 'getBufferSize',  function () {
var maxBandOff=this.bandOffsets[0];
for (var i=1; i < this.bandOffsets.length; i++) maxBandOff=Math.max(maxBandOff, this.bandOffsets[i]);

var size=0;
if (maxBandOff >= 0) (size=Long.$add(size,(maxBandOff + 1)));
if (this.pixelStride > 0) (size=Long.$add(size,(this.pixelStride * (this.width - 1))));
if (this.scanlineStride > 0) (size=Long.$add(size,(this.scanlineStride * (this.height - 1))));
return size;
}, p$1);

Clazz.newMeth(C$, 'orderBands$IA$I',  function (orig, step) {
var map=Clazz.array(Integer.TYPE, [orig.length]);
var ret=Clazz.array(Integer.TYPE, [orig.length]);
for (var i=0; i < map.length; i++) map[i]=i;

for (var i=0; i < ret.length; i++) {
var index=i;
for (var j=i + 1; j < ret.length; j++) {
if (orig[map[index]] > orig[map[j]]) {
index=j;
}}
ret[map[index]]=i * step;
map[index]=map[i];
}
return ret;
});

Clazz.newMeth(C$, 'createCompatibleSampleModel$I$I',  function (w, h) {
var minBandOff=this.bandOffsets[0];
var maxBandOff=this.bandOffsets[0];
for (var i=1; i < this.bandOffsets.length; i++) {
minBandOff=Math.min(minBandOff, this.bandOffsets[i]);
maxBandOff=Math.max(maxBandOff, this.bandOffsets[i]);
}
maxBandOff-=minBandOff;
var bands=this.bandOffsets.length;
var bandOff;
var pStride=Math.abs(this.pixelStride);
var lStride=Math.abs(this.scanlineStride);
var bStride=Math.abs(maxBandOff);
if (pStride > lStride) {
if (pStride > bStride) {
if (lStride > bStride) {
bandOff=Clazz.array(Integer.TYPE, [this.bandOffsets.length]);
for (var i=0; i < bands; i++) bandOff[i]=this.bandOffsets[i] - minBandOff;

lStride=bStride + 1;
pStride=lStride * h;
} else {
bandOff=this.orderBands$IA$I(this.bandOffsets, lStride * h);
pStride=bands * lStride * h ;
}} else {
pStride=lStride * h;
bandOff=this.orderBands$IA$I(this.bandOffsets, pStride * w);
}} else {
if (pStride > bStride) {
bandOff=Clazz.array(Integer.TYPE, [this.bandOffsets.length]);
for (var i=0; i < bands; i++) bandOff[i]=this.bandOffsets[i] - minBandOff;

pStride=bStride + 1;
lStride=pStride * w;
} else {
if (lStride > bStride) {
bandOff=this.orderBands$IA$I(this.bandOffsets, pStride * w);
lStride=bands * pStride * w ;
} else {
lStride=pStride * w;
bandOff=this.orderBands$IA$I(this.bandOffsets, lStride * h);
}}}var base=0;
if (this.scanlineStride < 0) {
base+=lStride * h;
lStride*=-1;
}if (this.pixelStride < 0) {
base+=pStride * w;
pStride*=-1;
}for (var i=0; i < bands; i++) bandOff[i]+=base;

return Clazz.new_(C$.c$$I$I$I$I$I$IA$IA,[this.dataType, w, h, pStride, lStride, this.bankIndices, bandOff]);
});

Clazz.newMeth(C$, 'createSubsetSampleModel$IA',  function (bands) {
if (bands.length > this.bankIndices.length) throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["There are only " + this.bankIndices.length + " bands" ]);
var newBankIndices=Clazz.array(Integer.TYPE, [bands.length]);
var newBandOffsets=Clazz.array(Integer.TYPE, [bands.length]);
for (var i=0; i < bands.length; i++) {
newBankIndices[i]=this.bankIndices[bands[i]];
newBandOffsets[i]=this.bandOffsets[bands[i]];
}
return Clazz.new_(C$.c$$I$I$I$I$I$IA$IA,[this.dataType, this.width, this.height, this.pixelStride, this.scanlineStride, newBankIndices, newBandOffsets]);
});

Clazz.newMeth(C$, 'createDataBuffer$',  function () {
var dataBuffer=null;
var size=Long.$ival(p$1.getBufferSize.apply(this, []));
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
}
return dataBuffer;
});

Clazz.newMeth(C$, 'getOffset$I$I',  function (x, y) {
var offset=y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[0];
return offset;
});

Clazz.newMeth(C$, 'getOffset$I$I$I',  function (x, y, b) {
var offset=y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b];
return offset;
});

Clazz.newMeth(C$, 'getSampleSize$',  function () {
var sampleSize=Clazz.array(Integer.TYPE, [this.$numBands]);
var sizeInBits=this.getSampleSize$I(0);
for (var i=0; i < this.$numBands; i++) sampleSize[i]=sizeInBits;

return sampleSize;
});

Clazz.newMeth(C$, 'getSampleSize$I',  function (band) {
return $I$(5).getDataTypeSize$I(this.dataType);
});

Clazz.newMeth(C$, 'getBankIndices$',  function () {
return this.bankIndices.clone$();
});

Clazz.newMeth(C$, 'getBandOffsets$',  function () {
return this.bandOffsets.clone$();
});

Clazz.newMeth(C$, 'getScanlineStride$',  function () {
return this.scanlineStride;
});

Clazz.newMeth(C$, 'getPixelStride$',  function () {
return this.pixelStride;
});

Clazz.newMeth(C$, 'getNumDataElements$',  function () {
return this.getNumBands$();
});

Clazz.newMeth(C$, 'getDataElements$I$I$O$java_awt_image_DataBuffer',  function (x, y, obj, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var type=this.getTransferType$();
var numDataElems=this.getNumDataElements$();
var pixelOffset=y * this.scanlineStride + x * this.pixelStride;
switch (type) {
case 0:
var bdata;
if (obj == null ) bdata=Clazz.array(Byte.TYPE, [numDataElems]);
 else bdata=obj;
for (var i=0; i < numDataElems; i++) {
bdata[i]=(data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i])|0);
}
obj=bdata;
break;
case 1:
case 2:
var sdata;
if (obj == null ) sdata=Clazz.array(Short.TYPE, [numDataElems]);
 else sdata=obj;
for (var i=0; i < numDataElems; i++) {
sdata[i]=(data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i])|0);
}
obj=sdata;
break;
case 3:
var idata;
if (obj == null ) idata=Clazz.array(Integer.TYPE, [numDataElems]);
 else idata=obj;
for (var i=0; i < numDataElems; i++) {
idata[i]=data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i]);
}
obj=idata;
break;
case 4:
var fdata;
if (obj == null ) fdata=Clazz.array(Float.TYPE, [numDataElems]);
 else fdata=obj;
for (var i=0; i < numDataElems; i++) {
fdata[i]=data.getElemFloat$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i]);
}
obj=fdata;
break;
case 5:
var ddata;
if (obj == null ) ddata=Clazz.array(Double.TYPE, [numDataElems]);
 else ddata=obj;
for (var i=0; i < numDataElems; i++) {
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
}var pixelOffset=y * this.scanlineStride + x * this.pixelStride;
for (var i=0; i < this.$numBands; i++) {
pixels[i]=data.getElem$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i]);
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
pixels=Clazz.array(Integer.TYPE, [w * h * this.$numBands ]);
}var lineOffset=y * this.scanlineStride + x * this.pixelStride;
var srcOffset=0;
for (var i=0; i < h; i++) {
var pixelOffset=lineOffset;
for (var j=0; j < w; j++) {
for (var k=0; k < this.$numBands; k++) {
pixels[srcOffset++]=data.getElem$I$I(this.bankIndices[k], pixelOffset + this.bandOffsets[k]);
}
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
return pixels;
});

Clazz.newMeth(C$, 'getSample$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var sample=data.getElem$I$I(this.bankIndices[b], y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b]);
return sample;
});

Clazz.newMeth(C$, 'getSampleFloat$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var sample=data.getElemFloat$I$I(this.bankIndices[b], y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b]);
return sample;
});

Clazz.newMeth(C$, 'getSampleDouble$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var sample=data.getElemDouble$I$I(this.bankIndices[b], y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b]);
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
}var lineOffset=y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b];
var srcOffset=0;
for (var i=0; i < h; i++) {
var sampleOffset=lineOffset;
for (var j=0; j < w; j++) {
samples[srcOffset++]=data.getElem$I$I(this.bankIndices[b], sampleOffset);
sampleOffset+=this.pixelStride;
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
var pixelOffset=y * this.scanlineStride + x * this.pixelStride;
switch (type) {
case 0:
var barray=obj;
for (var i=0; i < numDataElems; i++) {
data.setElem$I$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i], ((barray[i]|0)) & 255);
}
break;
case 1:
case 2:
var sarray=obj;
for (var i=0; i < numDataElems; i++) {
data.setElem$I$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i], ((sarray[i]|0)) & 65535);
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
}var pixelOffset=y * this.scanlineStride + x * this.pixelStride;
for (var i=0; i < this.$numBands; i++) {
data.setElem$I$I$I(this.bankIndices[i], pixelOffset + this.bandOffsets[i], iArray[i]);
}
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, iArray, data) {
if ((x < 0) || (y < 0) || (x + w > this.width) || (y + h > this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.秘setDoCheckImage$Z(false);
var lineOffset=y * this.scanlineStride + x * this.pixelStride;
var srcOffset=0;
for (var i=0; i < h; i++) {
var pixelOffset=lineOffset;
for (var j=0; j < w; j++) {
for (var k=0; k < this.$numBands; k++) {
data.setElem$I$I$I(this.bankIndices[k], pixelOffset + this.bandOffsets[k], iArray[srcOffset++]);
}
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'setSample$I$I$I$I$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.setElem$I$I$I(this.bankIndices[b], y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b], s);
});

Clazz.newMeth(C$, 'setSample$I$I$I$F$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.setElemFloat$I$I$F(this.bankIndices[b], y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b], s);
});

Clazz.newMeth(C$, 'setSample$I$I$I$D$java_awt_image_DataBuffer',  function (x, y, b, s, data) {
if ((x < 0) || (y < 0) || (x >= this.width) || (y >= this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}data.setElemDouble$I$I$D(this.bankIndices[b], y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b], s);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer',  function (x, y, w, h, b, iArray, data) {
data.秘setDoCheckImage$Z(false);
if ((x < 0) || (y < 0) || (x + w > this.width) || (y + h > this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var lineOffset=y * this.scanlineStride + x * this.pixelStride + this.bandOffsets[b];
var srcOffset=0;
for (var i=0; i < h; i++) {
var sampleOffset=lineOffset;
for (var j=0; j < w; j++) {
data.setElem$I$I$I(this.bankIndices[b], sampleOffset, iArray[srcOffset++]);
sampleOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
data.秘setDoCheckImage$Z(true);
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if ((o == null ) || !(Clazz.instanceOf(o, "java.awt.image.ComponentSampleModel")) ) {
return false;
}var that=o;
return this.width == that.width && this.height == that.height  && this.$numBands == that.$numBands  && this.dataType == that.dataType  && $I$(6).equals$IA$IA(this.bandOffsets, that.bandOffsets)  && $I$(6).equals$IA$IA(this.bankIndices, that.bankIndices)  && this.$numBands == that.$numBands  && this.numBanks == that.numBanks  && this.scanlineStride == that.scanlineStride  && this.pixelStride == that.pixelStride ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=0;
hash=this.width;
hash<<=8;
hash^=this.height;
hash<<=8;
hash^=this.$numBands;
hash<<=8;
hash^=this.dataType;
hash<<=8;
for (var i=0; i < this.bandOffsets.length; i++) {
hash^=this.bandOffsets[i];
hash<<=8;
}
for (var i=0; i < this.bankIndices.length; i++) {
hash^=this.bankIndices[i];
hash<<=8;
}
hash^=this.$numBands;
hash<<=8;
hash^=this.numBanks;
hash<<=8;
hash^=this.scanlineStride;
hash<<=8;
hash^=this.pixelStride;
return hash;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

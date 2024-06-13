(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.awt.Rectangle','sun.awt.image.SunWritableRaster','java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShortBandedRaster", null, 'sun.awt.image.SunWritableRaster');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['scanlineStride','maxX','maxY'],'O',['dataOffsets','int[]','data','short[][]']]]

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point',  function (sampleModel, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ShortBandedRaster.apply(this, [sampleModel, sampleModel.createDataBuffer$(), Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sampleModel, dataBuffer, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ShortBandedRaster.apply(this, [sampleModel, dataBuffer, Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ShortBandedRaster',  function (sampleModel, dataBuffer, aRegion, origin, parent) {
;C$.superclazz.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_WritableRaster.apply(this,[sampleModel, dataBuffer, aRegion, origin, parent]);C$.$init$.apply(this);
this.maxX=this.minX + this.width;
this.maxY=this.minY + this.height;
if (!(Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferUShort"))) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["ShortBandedRaster must have ushort DataBuffers"]);
}var dbus=dataBuffer;
if (Clazz.instanceOf(sampleModel, "java.awt.image.BandedSampleModel")) {
var bsm=sampleModel;
this.scanlineStride=bsm.getScanlineStride$();
var bankIndices=bsm.getBankIndices$();
var bandOffsets=bsm.getBandOffsets$();
var dOffsets=dbus.getOffsets$();
this.dataOffsets=Clazz.array(Integer.TYPE, [bankIndices.length]);
this.data=Clazz.array(Short.TYPE, [bankIndices.length, null]);
var xOffset=aRegion.x - origin.x;
var yOffset=aRegion.y - origin.y;
for (var i=0; i < bankIndices.length; i++) {
this.data[i]=$I$(2).stealData$java_awt_image_DataBufferUShort$I(dbus, bankIndices[i]);
this.dataOffsets[i]=dOffsets[bankIndices[i]] + xOffset + yOffset * this.scanlineStride  + bandOffsets[i];
}
} else {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["ShortBandedRasters must have BandedSampleModels"]);
}p$1.verify.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getDataOffsets$',  function () {
return this.dataOffsets.clone$();
});

Clazz.newMeth(C$, 'getDataOffset$I',  function (band) {
return this.dataOffsets[band];
});

Clazz.newMeth(C$, 'getScanlineStride$',  function () {
return this.scanlineStride;
});

Clazz.newMeth(C$, 'getPixelStride$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getDataStorage$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getDataStorage$I',  function (band) {
return this.data[band];
});

Clazz.newMeth(C$, 'getDataElements$I$I$O',  function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.maxX) || (y >= this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var outData;
if (obj == null ) {
outData=Clazz.array(Short.TYPE, [this.numDataElements]);
} else {
outData=obj;
}var off=(y - this.minY) * this.scanlineStride + (x - this.minX);
for (var band=0; band < this.numDataElements; band++) {
outData[band]=this.data[band][this.dataOffsets[band] + off];
}
return outData;
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O',  function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var outData;
if (obj == null ) {
outData=Clazz.array(Short.TYPE, [this.numDataElements * w * h ]);
} else {
outData=obj;
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX);
for (var c=0; c < this.numDataElements; c++) {
var off=c;
var bank=this.data[c];
var dataOffset=this.dataOffsets[c];
var yoff2=yoff;
for (var ystart=0; ystart < h; ystart++, yoff2+=this.scanlineStride) {
var xoff=dataOffset + yoff2;
for (var xstart=0; xstart < w; xstart++) {
outData[off]=bank[xoff++];
off+=this.numDataElements;
}
}
}
return outData;
});

Clazz.newMeth(C$, 'getShortData$I$I$I$I$I$HA',  function (x, y, w, h, band, outData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (outData == null ) {
outData=Clazz.array(Short.TYPE, [this.scanlineStride * h]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) + this.dataOffsets[band];
if (this.scanlineStride == w) {
System.arraycopy$O$I$O$I$I(this.data[band], yoff, outData, 0, w * h);
} else {
var off=0;
for (var ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(this.data[band], yoff, outData, off, w);
off+=w;
}
}return outData;
});

Clazz.newMeth(C$, 'getShortData$I$I$I$I$HA',  function (x, y, w, h, outData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (outData == null ) {
outData=Clazz.array(Short.TYPE, [this.numDataElements * this.scanlineStride * h ]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX);
for (var c=0; c < this.numDataElements; c++) {
var off=c;
var bank=this.data[c];
var dataOffset=this.dataOffsets[c];
var yoff2=yoff;
for (var ystart=0; ystart < h; ystart++, yoff2+=this.scanlineStride) {
var xoff=dataOffset + yoff2;
for (var xstart=0; xstart < w; xstart++) {
outData[off]=bank[xoff++];
off+=this.numDataElements;
}
}
}
return outData;
});

Clazz.newMeth(C$, 'setDataElements$I$I$O',  function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.maxX) || (y >= this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var off=(y - this.minY) * this.scanlineStride + (x - this.minX);
for (var i=0; i < this.numDataElements; i++) {
this.data[i][this.dataOffsets[i] + off]=inData[i];
}
this.markDirty$();
});

Clazz.newMeth(C$, 'setDataElements$I$I$java_awt_image_Raster',  function (x, y, inRaster) {
var dstOffX=x + inRaster.getMinX$();
var dstOffY=y + inRaster.getMinY$();
var width=inRaster.getWidth$();
var height=inRaster.getHeight$();
if ((dstOffX < this.minX) || (dstOffY < this.minY) || (dstOffX + width > this.maxX) || (dstOffY + height > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}p$1.setDataElements$I$I$I$I$java_awt_image_Raster.apply(this, [dstOffX, dstOffY, width, height, inRaster]);
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$java_awt_image_Raster',  function (dstX, dstY, width, height, inRaster) {
if (width <= 0 || height <= 0 ) {
return;
}var srcOffX=inRaster.getMinX$();
var srcOffY=inRaster.getMinY$();
var tdata=null;
for (var startY=0; startY < height; startY++) {
tdata=inRaster.getDataElements$I$I$I$I$O(srcOffX, srcOffY + startY, width, 1, tdata);
this.setDataElements$I$I$I$I$O(dstX, dstY + startY, width, 1, tdata);
}
}, p$1);

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O',  function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX);
for (var c=0; c < this.numDataElements; c++) {
var off=c;
var bank=this.data[c];
var dataOffset=this.dataOffsets[c];
var yoff2=yoff;
for (var ystart=0; ystart < h; ystart++, yoff2+=this.scanlineStride) {
var xoff=dataOffset + yoff2;
for (var xstart=0; xstart < w; xstart++) {
bank[xoff++]=inData[off];
off+=this.numDataElements;
}
}
}
this.markDirty$();
});

Clazz.newMeth(C$, 'putShortData$I$I$I$I$I$HA',  function (x, y, w, h, band, inData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) + this.dataOffsets[band];
var xoff;
var off=0;
var xstart;
var ystart;
if (this.scanlineStride == w) {
System.arraycopy$O$I$O$I$I(inData, 0, this.data[band], yoff, w * h);
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(inData, off, this.data[band], yoff, w);
off+=w;
}
}this.markDirty$();
});

Clazz.newMeth(C$, 'putShortData$I$I$I$I$HA',  function (x, y, w, h, inData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX);
for (var c=0; c < this.numDataElements; c++) {
var off=c;
var bank=this.data[c];
var dataOffset=this.dataOffsets[c];
var yoff2=yoff;
for (var ystart=0; ystart < h; ystart++, yoff2+=this.scanlineStride) {
var xoff=dataOffset + yoff2;
for (var xstart=0; xstart < w; xstart++) {
bank[xoff++]=inData[off];
off+=this.numDataElements;
}
}
}
this.markDirty$();
});

Clazz.newMeth(C$, 'createWritableChild$I$I$I$I$I$I$IA',  function (x, y, width, height, x0, y0, bandList) {
if (x < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["x lies outside raster"]);
}if (y < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["y lies outside raster"]);
}if ((x + width < x) || (x + width > this.minX + this.width) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(x + width) is outside of Raster"]);
}if ((y + height < y) || (y + height > this.minY + this.height) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(y + height) is outside of Raster"]);
}var sm;
if (bandList != null ) sm=this.sampleModel.createSubsetSampleModel$IA(bandList);
 else sm=this.sampleModel;
var deltaX=x0 - x;
var deltaY=y0 - y;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ShortBandedRaster,[sm, this.dataBuffer, Clazz.new_($I$(1,1).c$$I$I$I$I,[x0, y0, width, height]), Clazz.new_($I$(3,1).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
});

Clazz.newMeth(C$, 'createChild$I$I$I$I$I$I$IA',  function (x, y, width, height, x0, y0, bandList) {
return this.createWritableChild$I$I$I$I$I$I$IA(x, y, width, height, x0, y0, bandList);
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

Clazz.newMeth(C$, 'verify',  function () {
if (this.width <= 0 || this.height <= 0  || this.height > ((2147483647/this.width|0)) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid raster dimension"]);
}if (this.scanlineStride < 0 || this.scanlineStride > ((2147483647/this.height|0)) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect scanline stride: " + this.scanlineStride]);
}if (Long.$lt(Long.$sub(this.minX,this.sampleModelTranslateX),0 ) || Long.$lt(Long.$sub(this.minY,this.sampleModelTranslateY),0 ) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect origin/translate: (" + this.minX + ", " + this.minY + ") / (" + this.sampleModelTranslateX + ", " + this.sampleModelTranslateY + ")" ]);
}if (this.height > 1 || this.minY - this.sampleModelTranslateY > 0 ) {
for (var i=0; i < this.data.length; i++) {
if (this.scanlineStride > this.data[i].length) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect scanline stride: " + this.scanlineStride]);
}}
}for (var i=0; i < this.dataOffsets.length; i++) {
if (this.dataOffsets[i] < 0) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Data offsets for band " + i + "(" + this.dataOffsets[i] + ") must be >= 0" ]);
}}
var lastScanOffset=(this.height - 1) * this.scanlineStride;
if ((this.width - 1) > (2147483647 - lastScanOffset)) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid raster dimension"]);
}var lastPixelOffset=lastScanOffset + (this.width - 1);
var maxIndex=0;
var index;
for (var i=0; i < this.numDataElements; i++) {
if (this.dataOffsets[i] > (2147483647 - lastPixelOffset)) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid raster dimension"]);
}index=lastPixelOffset + this.dataOffsets[i];
if (index > maxIndex) {
maxIndex=index;
}}
for (var i=0; i < this.numDataElements; i++) {
if (this.data[i].length <= maxIndex) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Data array too small (should be > " + maxIndex + " )" ]);
}}
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
return  String.instantialize("ShortBandedRaster: width = " + this.width + " height = " + this.height + " #numBands " + this.numBands + " #dataElements " + this.numDataElements );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.awt.Rectangle','sun.awt.image.SunWritableRaster','java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteComponentRaster", null, 'sun.awt.image.SunWritableRaster');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bandOffset','scanlineStride','pixelStride','type','maxX','maxY'],'O',['dataOffsets','int[]','data','byte[]']]]

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point',  function (sampleModel, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteComponentRaster.apply(this, [sampleModel, sampleModel.createDataBuffer$(), Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sampleModel, dataBuffer, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteComponentRaster.apply(this, [sampleModel, dataBuffer, Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteComponentRaster',  function (sampleModel, dataBuffer, aRegion, origin, parent) {
;C$.superclazz.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_WritableRaster.apply(this,[sampleModel, dataBuffer, aRegion, origin, parent]);C$.$init$.apply(this);
this.maxX=this.minX + this.width;
this.maxY=this.minY + this.height;
if (!(Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte"))) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["ByteComponentRasters must have byte DataBuffers"]);
}var dbb=dataBuffer;
this.data=$I$(2).stealData$java_awt_image_DataBufferByte$I(dbb, 0);
if (dbb.getNumBanks$() != 1) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["DataBuffer for ByteComponentRasters must only have 1 bank."]);
}var dbOffset=dbb.getOffset$();
if (Clazz.instanceOf(sampleModel, "java.awt.image.ComponentSampleModel")) {
var ism=sampleModel;
this.type=1;
this.scanlineStride=ism.getScanlineStride$();
this.pixelStride=ism.getPixelStride$();
this.dataOffsets=ism.getBandOffsets$();
var xOffset=aRegion.x - origin.x;
var yOffset=aRegion.y - origin.y;
for (var i=0; i < this.getNumDataElements$(); i++) {
this.dataOffsets[i]+=dbOffset + xOffset * this.pixelStride + yOffset * this.scanlineStride;
}
} else if (Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sampleModel;
this.type=7;
this.scanlineStride=sppsm.getScanlineStride$();
this.pixelStride=1;
this.dataOffsets=Clazz.array(Integer.TYPE, [1]);
this.dataOffsets[0]=dbOffset;
var xOffset=aRegion.x - origin.x;
var yOffset=aRegion.y - origin.y;
this.dataOffsets[0]+=xOffset * this.pixelStride + yOffset * this.scanlineStride;
} else {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["IntegerComponentRasters must have ComponentSampleModel or SinglePixelPackedSampleModel"]);
}this.bandOffset=this.dataOffsets[0];
this.verify$();
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
return this.pixelStride;
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
}var off=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
for (var band=0; band < this.numDataElements; band++) {
outData[band]=this.data[this.dataOffsets[band] + off];
}
return outData;
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O',  function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var outData;
if (obj == null ) {
outData=Clazz.array(Byte.TYPE, [w * h * this.numDataElements ]);
} else {
outData=obj;
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
var xoff;
var off=0;
var xstart;
var ystart;
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
for (var c=0; c < this.numDataElements; c++) {
outData[off++]=this.data[this.dataOffsets[c] + xoff];
}
}
}
return outData;
});

Clazz.newMeth(C$, 'getByteData$I$I$I$I$I$BA',  function (x, y, w, h, band, outData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (outData == null ) {
outData=Clazz.array(Byte.TYPE, [this.scanlineStride * h]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride + this.dataOffsets[band];
var xoff;
var off=0;
var xstart;
var ystart;
if (this.pixelStride == 1) {
if (this.scanlineStride == w) {
System.arraycopy$O$I$O$I$I(this.data, yoff, outData, 0, w * h);
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(this.data, yoff, outData, off, w);
off+=w;
}
}} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
outData[off++]=this.data[xoff];
}
}
}return outData;
});

Clazz.newMeth(C$, 'getByteData$I$I$I$I$BA',  function (x, y, w, h, outData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (outData == null ) {
outData=Clazz.array(Byte.TYPE, [this.numDataElements * this.scanlineStride * h ]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
var xoff;
var off=0;
var xstart;
var ystart;
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
for (var c=0; c < this.numDataElements; c++) {
outData[off++]=this.data[this.dataOffsets[c] + xoff];
}
}
}
return outData;
});

Clazz.newMeth(C$, 'setDataElements$I$I$O',  function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.maxX) || (y >= this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var off=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
for (var i=0; i < this.numDataElements; i++) {
this.data[this.dataOffsets[i] + off]=inData[i];
}
this.markDirty$();
});

Clazz.newMeth(C$, 'setDataElements$I$I$java_awt_image_Raster',  function (x, y, inRaster) {
var dstOffX=inRaster.getMinX$() + x;
var dstOffY=inRaster.getMinY$() + y;
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
if (Clazz.instanceOf(inRaster, "sun.awt.image.ByteComponentRaster")) {
var bct=inRaster;
var bdata=bct.getDataStorage$();
if (this.numDataElements == 1) {
var toff=bct.getDataOffset$I(0);
var tss=bct.getScanlineStride$();
var srcOffset=toff;
var dstOffset=this.dataOffsets[0] + (dstY - this.minY) * this.scanlineStride + (dstX - this.minX);
if (this.pixelStride == bct.getPixelStride$()) {
width*=this.pixelStride;
for (var tmpY=0; tmpY < height; tmpY++) {
System.arraycopy$O$I$O$I$I(bdata, srcOffset, this.data, dstOffset, width);
srcOffset+=tss;
dstOffset+=this.scanlineStride;
}
this.markDirty$();
return;
}}}for (var startY=0; startY < height; startY++) {
tdata=inRaster.getDataElements$I$I$I$I$O(srcOffX, srcOffY + startY, width, 1, tdata);
this.setDataElements$I$I$I$I$O(dstX, dstY + startY, width, 1, tdata);
}
}, p$1);

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O',  function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
var xoff;
var off=0;
var xstart;
var ystart;
if (this.numDataElements == 1) {
var srcOffset=0;
var dstOffset=yoff + this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++) {
xoff=yoff;
System.arraycopy$O$I$O$I$I(inData, srcOffset, this.data, dstOffset, w);
srcOffset+=w;
dstOffset+=this.scanlineStride;
}
this.markDirty$();
return;
}for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
for (var c=0; c < this.numDataElements; c++) {
this.data[this.dataOffsets[c] + xoff]=inData[off++];
}
}
}
this.markDirty$();
});

Clazz.newMeth(C$, 'putByteData$I$I$I$I$I$BA',  function (x, y, w, h, band, inData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride + this.dataOffsets[band];
var xoff;
var off=0;
var xstart;
var ystart;
if (this.pixelStride == 1) {
if (this.scanlineStride == w) {
System.arraycopy$O$I$O$I$I(inData, 0, this.data, yoff, w * h);
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(inData, off, this.data, yoff, w);
off+=w;
}
}} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
this.data[xoff]=inData[off++];
}
}
}this.markDirty$();
});

Clazz.newMeth(C$, 'putByteData$I$I$I$I$BA',  function (x, y, w, h, inData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
var xoff;
var off=0;
var xstart;
var ystart;
if (this.numDataElements == 1) {
yoff+=this.dataOffsets[0];
if (this.pixelStride == 1) {
if (this.scanlineStride == w) {
System.arraycopy$O$I$O$I$I(inData, 0, this.data, yoff, w * h);
} else {
for (ystart=0; ystart < h; ystart++) {
System.arraycopy$O$I$O$I$I(inData, off, this.data, yoff, w);
off+=w;
yoff+=this.scanlineStride;
}
}} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
this.data[xoff]=inData[off++];
}
}
}} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
for (var c=0; c < this.numDataElements; c++) {
this.data[this.dataOffsets[c] + xoff]=inData[off++];
}
}
}
}this.markDirty$();
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
if (bandList != null ) sm=this.sampleModel.createSubsetSampleModel$IA(bandList);
 else sm=this.sampleModel;
var deltaX=x0 - x;
var deltaY=y0 - y;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteComponentRaster,[sm, this.dataBuffer, Clazz.new_($I$(1,1).c$$I$I$I$I,[x0, y0, width, height]), Clazz.new_($I$(3,1).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
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

Clazz.newMeth(C$, 'verify$',  function () {
if (this.width <= 0 || this.height <= 0  || this.height > ((2147483647/this.width|0)) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid raster dimension"]);
}for (var i=0; i < this.dataOffsets.length; i++) {
if (this.dataOffsets[i] < 0) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Data offsets for band " + i + "(" + this.dataOffsets[i] + ") must be >= 0" ]);
}}
if (Long.$lt(Long.$sub(this.minX,this.sampleModelTranslateX),0 ) || Long.$lt(Long.$sub(this.minY,this.sampleModelTranslateY),0 ) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect origin/translate: (" + this.minX + ", " + this.minY + ") / (" + this.sampleModelTranslateX + ", " + this.sampleModelTranslateY + ")" ]);
}if (this.scanlineStride < 0 || this.scanlineStride > ((2147483647/this.height|0)) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect scanline stride: " + this.scanlineStride]);
}if (this.height > 1 || this.minY - this.sampleModelTranslateY > 0 ) {
if (this.scanlineStride > this.data.length) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect scanline stride: " + this.scanlineStride]);
}}var lastScanOffset=(this.height - 1) * this.scanlineStride;
if (this.pixelStride < 0 || this.pixelStride > ((2147483647/this.width|0))  || this.pixelStride > this.data.length ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect pixel stride: " + this.pixelStride]);
}var lastPixelOffset=(this.width - 1) * this.pixelStride;
if (lastPixelOffset > (2147483647 - lastScanOffset)) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect raster attributes"]);
}lastPixelOffset+=lastScanOffset;
var index;
var maxIndex=0;
for (var i=0; i < this.numDataElements; i++) {
if (this.dataOffsets[i] > (2147483647 - lastPixelOffset)) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Incorrect band offset: " + this.dataOffsets[i]]);
}index=lastPixelOffset + this.dataOffsets[i];
if (index > maxIndex) {
maxIndex=index;
}}
if (this.data.length <= maxIndex) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Data array too small (should be > " + maxIndex + " )" ]);
}});

Clazz.newMeth(C$, 'toString',  function () {
return  String.instantialize("ByteComponentRaster: width = " + this.width + " height = " + this.height + " #numDataElements " + this.numDataElements + " dataOff[0] = " + this.dataOffsets[0] );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

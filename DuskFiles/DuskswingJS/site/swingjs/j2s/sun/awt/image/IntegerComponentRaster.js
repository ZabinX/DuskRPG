(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.awt.Rectangle','sun.awt.image.SunWritableRaster','java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IntegerComponentRaster", null, 'sun.awt.image.SunWritableRaster');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bandOffset','scanlineStride','pixelStride','numDataElems','type','maxX','maxY'],'O',['dataOffsets','int[]','+data']]]

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point',  function (sampleModel, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerComponentRaster.apply(this, [sampleModel, sampleModel.createDataBuffer$(), Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point',  function (sampleModel, dataBuffer, origin) {
C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerComponentRaster.apply(this, [sampleModel, dataBuffer, Clazz.new_([origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()],$I$(1,1).c$$I$I$I$I), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerComponentRaster',  function (sampleModel, dataBuffer, aRegion, origin, parent) {
;C$.superclazz.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_WritableRaster.apply(this,[sampleModel, dataBuffer, aRegion, origin, parent]);C$.$init$.apply(this);
this.maxX=this.minX + this.width;
this.maxY=this.minY + this.height;
if (!(Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt"))) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["IntegerComponentRasters must haveinteger DataBuffers"]);
}var dbi=dataBuffer;
if (dbi.getNumBanks$() != 1) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["DataBuffer for IntegerComponentRasters must only have 1 bank."]);
}this.data=$I$(2).stealData$java_awt_image_DataBufferInt$I(dbi, 0);
if (Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sampleModel;
var boffsets=sppsm.getBitOffsets$();
var notByteBoundary=false;
for (var i=1; i < boffsets.length; i++) {
if ((boffsets[i] % 8) != 0) {
notByteBoundary=true;
}}
this.type=(notByteBoundary ? 9 : 10);
this.scanlineStride=sppsm.getScanlineStride$();
this.pixelStride=1;
this.dataOffsets=Clazz.array(Integer.TYPE, [1]);
this.dataOffsets[0]=dbi.getOffset$();
this.bandOffset=this.dataOffsets[0];
var xOffset=aRegion.x - origin.x;
var yOffset=aRegion.y - origin.y;
this.dataOffsets[0]+=xOffset + yOffset * this.scanlineStride;
this.numDataElems=sppsm.getNumDataElements$();
} else {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["IntegerComponentRasters must have SinglePixelPackedSampleModel"]);
}this.verify$();
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
this.dataBuffer.秘checkImage$();
return this.data;
});

Clazz.newMeth(C$, 'getDataElements$I$I$O',  function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.maxX) || (y >= this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}this.dataBuffer.秘checkImage$();
var outData;
if (obj == null ) {
outData=Clazz.array(Integer.TYPE, [this.numDataElements]);
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
}this.dataBuffer.秘checkImage$();
var outData;
if (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -1))) {
outData=obj;
} else {
outData=Clazz.array(Integer.TYPE, [this.numDataElements * w * h ]);
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
}this.dataBuffer.秘checkImage$();
var inData=obj;
var off=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
for (var i=0; i < this.numDataElements; i++) {
this.data[this.dataOffsets[i] + off]=inData[i];
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
}this.dataBuffer.秘checkImage$();
var srcOffX=inRaster.getMinX$();
var srcOffY=inRaster.getMinY$();
var tdata=null;
if (Clazz.instanceOf(inRaster, "sun.awt.image.IntegerComponentRaster") && (this.pixelStride == 1) && (this.numDataElements == 1)  ) {
var ict=inRaster;
if (ict.getNumDataElements$() != 1) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Number of bands does not match"]);
}tdata=ict.getDataStorage$();
var tss=ict.getScanlineStride$();
var toff=ict.getDataOffset$I(0);
var srcOffset=toff;
var dstOffset=this.dataOffsets[0] + (dstY - this.minY) * this.scanlineStride + (dstX - this.minX);
if (ict.getPixelStride$() == this.pixelStride) {
width*=this.pixelStride;
for (var startY=0; startY < height; startY++) {
System.arraycopy$O$I$O$I$I(tdata, srcOffset, this.data, dstOffset, width);
srcOffset+=tss;
dstOffset+=this.scanlineStride;
}
this.markDirty$();
return;
}}var odata=null;
for (var startY=0; startY < height; startY++) {
odata=inRaster.getDataElements$I$I$I$I$O(srcOffX, srcOffY + startY, width, 1, odata);
this.setDataElements$I$I$I$I$O(dstX, dstY + startY, width, 1, odata);
}
}, p$1);

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O',  function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.maxX) || (y + h > this.maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}this.dataBuffer.秘checkImage$();
var inData=obj;
var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
var xoff;
var off=0;
var xstart;
var ystart;
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
for (var c=0; c < this.numDataElements; c++) {
this.data[this.dataOffsets[c] + xoff]=inData[off++];
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
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(x + width) is outside raster"]);
}if ((y + height < y) || (y + height > this.minY + this.height) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(y + height) is outside raster"]);
}var sm;
if (bandList != null ) sm=this.sampleModel.createSubsetSampleModel$IA(bandList);
 else sm=this.sampleModel;
var deltaX=x0 - x;
var deltaY=y0 - y;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerComponentRaster,[sm, this.dataBuffer, Clazz.new_($I$(1,1).c$$I$I$I$I,[x0, y0, width, height]), Clazz.new_($I$(3,1).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
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

Clazz.newMeth(C$, 'verify$',  function () {
if (this.width <= 0 || this.height <= 0  || this.height > ((2147483647/this.width|0)) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Invalid raster dimension"]);
}if (this.dataOffsets[0] < 0) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Data offset (" + this.dataOffsets[0] + ") must be >= 0" ]);
}if (Long.$lt(Long.$sub(this.minX,this.sampleModelTranslateX),0 ) || Long.$lt(Long.$sub(this.minY,this.sampleModelTranslateY),0 ) ) {
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
return  String.instantialize("IntegerComponentRaster: width = " + this.width + " height = " + this.height + " #Bands = " + this.numBands + " #DataElements " + this.numDataElements + " xOff = " + this.sampleModelTranslateX + " yOff = " + this.sampleModelTranslateY + " dataOffset[0] " + this.dataOffsets[0] );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

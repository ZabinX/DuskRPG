(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),p$1={},I$=[[0,'java.util.ArrayList','java.awt.image.IndexColorModel','java.awt.image.PixelInterleavedSampleModel','java.awt.image.MultiPixelPackedSampleModel','javax.imageio.ImageTypeSpecifier','javax.imageio.ImageReadParam','com.sun.imageio.plugins.gif.GIFStreamMetadata','java.nio.ByteOrder','StringBuffer','com.sun.imageio.plugins.gif.GIFImageMetadata','com.sun.imageio.plugins.common.ReaderUtil','javax.imageio.ImageReader','java.awt.Rectangle','java.awt.Point','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFImageReader", null, 'javax.imageio.ImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
this.gotHeader=false;
this.streamMetadata=null;
this.currIndex=-1;
this.imageMetadata=null;
this.imageStartPosition=Clazz.new_($I$(1,1));
this.numImages=-1;
this.block=Clazz.array(Byte.TYPE, [255]);
this.blockLength=0;
this.bitPos=0;
this.nextByte=0;
this.next32Bits=0;
this.lastBlockFound=false;
this.theImage=null;
this.theTile=null;
this.width=-1;
this.height=-1;
this.streamX=-1;
this.streamY=-1;
this.rowsDone=0;
this.interlacePass=0;
this.fallbackColorTable=null;
this.decodeThisRow=true;
this.destY=0;
},1);

C$.$fields$=[['Z',['gotHeader','lastBlockFound','decodeThisRow'],'I',['currIndex','imageMetadataLength','numImages','blockLength','bitPos','nextByte','initCodeSize','clearCode','eofCode','next32Bits','width','height','streamX','streamY','rowsDone','interlacePass','sourceXSubsampling','sourceYSubsampling','sourceMinProgressivePass','sourceMaxProgressivePass','updateMinY','updateYStep','destY'],'O',['stream','javax.imageio.stream.ImageInputStream','streamMetadata','com.sun.imageio.plugins.gif.GIFStreamMetadata','imageMetadata','com.sun.imageio.plugins.gif.GIFImageMetadata','imageStartPosition','java.util.List','block','byte[]','theImage','java.awt.image.BufferedImage','theTile','java.awt.image.WritableRaster','fallbackColorTable','byte[]','sourceRegion','java.awt.Rectangle','destinationOffset','java.awt.Point','destinationRegion','java.awt.Rectangle','rowBuf','byte[]']]
,['O',['interlaceIncrement','int[]','+interlaceOffset','defaultPalette','byte[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi',  function (originatingProvider) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originatingProvider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z',  function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
if (input != null ) {
if (!(Clazz.instanceOf(input, "javax.imageio.stream.ImageInputStream"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input not an ImageInputStream!"]);
}this.stream=input;
} else {
this.stream=null;
}p$1.resetStreamSettings.apply(this, []);
});

Clazz.newMeth(C$, 'getNumImages$Z',  function (allowSearch) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}if (this.seekForwardOnly && allowSearch ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["seekForwardOnly and allowSearch can\'t both be true!"]);
}if (this.numImages > 0) {
return this.numImages;
}if (allowSearch) {
this.numImages=p$1.locateImage$I.apply(this, [2147483647]) + 1;
}return this.numImages;
});

Clazz.newMeth(C$, 'checkIndex$I',  function (imageIndex) {
if (imageIndex < this.minIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex < minIndex!"]);
}if (this.seekForwardOnly) {
this.minIndex=imageIndex;
}}, p$1);

Clazz.newMeth(C$, 'getWidth$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
var index=p$1.locateImage$I.apply(this, [imageIndex]);
if (index != imageIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}p$1.readMetadata.apply(this, []);
return this.imageMetadata.imageWidth;
});

Clazz.newMeth(C$, 'getHeight$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
var index=p$1.locateImage$I.apply(this, [imageIndex]);
if (index != imageIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}p$1.readMetadata.apply(this, []);
return this.imageMetadata.imageHeight;
});

Clazz.newMeth(C$, 'createIndexed$BA$BA$BA$I',  function (r, g, b, bits) {
var colorModel;
if (this.imageMetadata.transparentColorFlag) {
var idx=Math.min(this.imageMetadata.transparentColorIndex, r.length - 1);
colorModel=Clazz.new_($I$(2,1).c$$I$I$BA$BA$BA$I,[bits, r.length, r, g, b, idx]);
} else {
colorModel=Clazz.new_($I$(2,1).c$$I$I$BA$BA$BA,[bits, r.length, r, g, b]);
}var sampleModel;
if (bits == 8) {
var bandOffsets=Clazz.array(Integer.TYPE, -1, [0]);
sampleModel=Clazz.new_($I$(3,1).c$$I$I$I$I$I$IA,[0, 1, 1, 1, 1, bandOffsets]);
} else {
sampleModel=Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 1, 1, bits]);
}return Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
}, p$1);

Clazz.newMeth(C$, 'getImageTypes$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
var index=p$1.locateImage$I.apply(this, [imageIndex]);
if (index != imageIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}p$1.readMetadata.apply(this, []);
var l=Clazz.new_($I$(1,1).c$$I,[1]);
var colorTable;
if (this.imageMetadata.localColorTable != null ) {
colorTable=this.imageMetadata.localColorTable;
this.fallbackColorTable=this.imageMetadata.localColorTable;
} else {
colorTable=this.streamMetadata.globalColorTable;
}if (colorTable == null ) {
if (this.fallbackColorTable == null ) {
this.processWarningOccurred$S("Use default color table.");
this.fallbackColorTable=C$.getDefaultPalette$();
}colorTable=this.fallbackColorTable;
}var length=(colorTable.length/3|0);
var bits;
if (length == 2) {
bits=1;
} else if (length == 4) {
bits=2;
} else if (length == 8 || length == 16 ) {
bits=4;
} else {
bits=8;
}var lutLength=1 << bits;
var r=Clazz.array(Byte.TYPE, [lutLength]);
var g=Clazz.array(Byte.TYPE, [lutLength]);
var b=Clazz.array(Byte.TYPE, [lutLength]);
var rgbIndex=0;
for (var i=0; i < length; i++) {
r[i]=colorTable[rgbIndex++];
g[i]=colorTable[rgbIndex++];
b[i]=colorTable[rgbIndex++];
}
l.add$O(p$1.createIndexed$BA$BA$BA$I.apply(this, [r, g, b, bits]));
return l.iterator$();
});

Clazz.newMeth(C$, 'getDefaultReadParam$',  function () {
return Clazz.new_($I$(6,1));
});

Clazz.newMeth(C$, 'getStreamMetadata$',  function () {
p$1.readHeader.apply(this, []);
return this.streamMetadata;
});

Clazz.newMeth(C$, 'getImageMetadata$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
var index=p$1.locateImage$I.apply(this, [imageIndex]);
if (index != imageIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Bad image index!"]);
}p$1.readMetadata.apply(this, []);
return this.imageMetadata;
});

Clazz.newMeth(C$, 'initNext32Bits',  function () {
this.next32Bits=this.block[0] & 255;
this.next32Bits|=(this.block[1] & 255) << 8;
this.next32Bits|=(this.block[2] & 255) << 16;
this.next32Bits|=this.block[3] << 24;
this.nextByte=4;
}, p$1);

Clazz.newMeth(C$, 'getCode$I$I',  function (codeSize, codeMask) {
if (this.bitPos + codeSize > 32) {
return this.eofCode;
}var code=(this.next32Bits >> this.bitPos) & codeMask;
this.bitPos+=codeSize;
while (this.bitPos >= 8 && !this.lastBlockFound ){
this.next32Bits>>>=8;
this.bitPos-=8;
if (this.nextByte >= this.blockLength) {
this.blockLength=this.stream.readUnsignedByte$();
if (this.blockLength == 0) {
this.lastBlockFound=true;
return code;
} else {
var left=this.blockLength;
var off=0;
while (left > 0){
var nbytes=this.stream.read$BA$I$I(this.block, off, left);
off+=nbytes;
left-=nbytes;
}
this.nextByte=0;
}}this.next32Bits|=this.block[this.nextByte++] << 24;
}
return code;
}, p$1);

Clazz.newMeth(C$, 'initializeStringTable$IA$BA$BA$IA',  function (prefix, suffix, initial, length) {
var numEntries=1 << this.initCodeSize;
for (var i=0; i < numEntries; i++) {
prefix[i]=-1;
suffix[i]=(i|0);
initial[i]=(i|0);
length[i]=1;
}
for (var i=numEntries; i < 4096; i++) {
prefix[i]=-1;
length[i]=1;
}
});

Clazz.newMeth(C$, 'outputRow',  function () {
var width=Math.min(this.sourceRegion.width, this.destinationRegion.width * this.sourceXSubsampling);
var destX=this.destinationRegion.x;
if (this.sourceXSubsampling == 1) {
this.theTile.setDataElements$I$I$I$I$O(destX, this.destY, width, 1, this.rowBuf);
} else {
for (var x=0; x < width; x+=this.sourceXSubsampling, destX++) {
this.theTile.setSample$I$I$I$I(destX, this.destY, 0, this.rowBuf[x] & 255);
}
}if (this.updateListeners != null ) {
var bands=Clazz.array(Integer.TYPE, -1, [0]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.theImage, destX, this.destY, width, 1, 1, this.updateYStep, bands);
}}, p$1);

Clazz.newMeth(C$, 'computeDecodeThisRow',  function () {
this.decodeThisRow=(this.destY < this.destinationRegion.y + this.destinationRegion.height) && (this.streamY >= this.sourceRegion.y) && (this.streamY < this.sourceRegion.y + this.sourceRegion.height) && (((this.streamY - this.sourceRegion.y) % this.sourceYSubsampling) == 0)  ;
}, p$1);

Clazz.newMeth(C$, 'outputPixels$BA$I',  function (string, len) {
if (this.interlacePass < this.sourceMinProgressivePass || this.interlacePass > this.sourceMaxProgressivePass ) {
return;
}for (var i=0; i < len; i++) {
if (this.streamX >= this.sourceRegion.x) {
this.rowBuf[this.streamX - this.sourceRegion.x]=string[i];
}++this.streamX;
if (this.streamX == this.width) {
++this.rowsDone;
this.processImageProgress$F(100.0 * this.rowsDone / this.height);
if (this.decodeThisRow) {
p$1.outputRow.apply(this, []);
}this.streamX=0;
if (this.imageMetadata.interlaceFlag) {
this.streamY+=C$.interlaceIncrement[this.interlacePass];
if (this.streamY >= this.height) {
if (this.updateListeners != null ) {
this.processPassComplete$java_awt_image_BufferedImage(this.theImage);
}++this.interlacePass;
if (this.interlacePass > this.sourceMaxProgressivePass) {
return;
}this.streamY=C$.interlaceOffset[this.interlacePass];
p$1.startPass$I.apply(this, [this.interlacePass]);
}} else {
++this.streamY;
}this.destY=this.destinationRegion.y + ((this.streamY - this.sourceRegion.y)/this.sourceYSubsampling|0);
p$1.computeDecodeThisRow.apply(this, []);
}}
}, p$1);

Clazz.newMeth(C$, 'readHeader',  function () {
if (this.gotHeader) {
return;
}if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}this.streamMetadata=Clazz.new_($I$(7,1));
try {
this.stream.setByteOrder$java_nio_ByteOrder($I$(8).LITTLE_ENDIAN);
var signature=Clazz.array(Byte.TYPE, [6]);
this.stream.readFully$BA(signature);
var version=Clazz.new_($I$(9,1).c$$I,[3]);
version.append$C(String.fromCharCode(signature[3]));
version.append$C(String.fromCharCode(signature[4]));
version.append$C(String.fromCharCode(signature[5]));
this.streamMetadata.version=version.toString();
this.streamMetadata.logicalScreenWidth=this.stream.readUnsignedShort$();
this.streamMetadata.logicalScreenHeight=this.stream.readUnsignedShort$();
var packedFields=this.stream.readUnsignedByte$();
var globalColorTableFlag=(packedFields & 128) != 0;
this.streamMetadata.colorResolution=((packedFields >> 4) & 7) + 1;
this.streamMetadata.sortFlag=(packedFields & 8) != 0;
var numGCTEntries=1 << ((packedFields & 7) + 1);
this.streamMetadata.backgroundColorIndex=this.stream.readUnsignedByte$();
this.streamMetadata.pixelAspectRatio=this.stream.readUnsignedByte$();
if (globalColorTableFlag) {
this.streamMetadata.globalColorTable=Clazz.array(Byte.TYPE, [3 * numGCTEntries]);
this.stream.readFully$BA(this.streamMetadata.globalColorTable);
} else {
this.streamMetadata.globalColorTable=null;
}this.imageStartPosition.add$O(Long.valueOf$J(this.stream.getStreamPosition$()));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error reading header!", e]);
} else {
throw e;
}
}
this.gotHeader=true;
}, p$1);

Clazz.newMeth(C$, 'skipImage',  function () {
try {
while (true){
var blockType=this.stream.readUnsignedByte$();
if (blockType == 44) {
this.stream.skipBytes$I(8);
var packedFields=this.stream.readUnsignedByte$();
if ((packedFields & 128) != 0) {
var bits=(packedFields & 7) + 1;
this.stream.skipBytes$I(3 * (1 << bits));
}this.stream.skipBytes$I(1);
var length=0;
do {
length=this.stream.readUnsignedByte$();
this.stream.skipBytes$I(length);
} while (length > 0);
return true;
} else if (blockType == 59) {
return false;
} else if (blockType == 33) {
var label=this.stream.readUnsignedByte$();
var length=0;
do {
length=this.stream.readUnsignedByte$();
this.stream.skipBytes$I(length);
} while (length > 0);
} else if (blockType == 0) {
return false;
} else {
var length=0;
do {
length=this.stream.readUnsignedByte$();
this.stream.skipBytes$I(length);
} while (length > 0);
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.EOFException")){
var e = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error locating image!", e]);
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'locateImage$I',  function (imageIndex) {
p$1.readHeader.apply(this, []);
try {
var index=Math.min(imageIndex, this.imageStartPosition.size$() - 1);
var l=this.imageStartPosition.get$I(index);
this.stream.seek$J(l.longValue$());
while (index < imageIndex){
if (!p$1.skipImage.apply(this, [])) {
--index;
return index;
}var l1= new Long(this.stream.getStreamPosition$());
this.imageStartPosition.add$O(l1);
++index;
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Couldn\'t seek!", e]);
} else {
throw e;
}
}
if (this.currIndex != imageIndex) {
this.imageMetadata=null;
}this.currIndex=imageIndex;
return imageIndex;
}, p$1);

Clazz.newMeth(C$, 'concatenateBlocks',  function () {
var data=Clazz.array(Byte.TYPE, [0]);
while (true){
var length=this.stream.readUnsignedByte$();
if (length == 0) {
break;
}var newData=Clazz.array(Byte.TYPE, [data.length + length]);
System.arraycopy$O$I$O$I$I(data, 0, newData, 0, data.length);
this.stream.readFully$BA$I$I(newData, data.length, length);
data=newData;
}
return data;
}, p$1);

Clazz.newMeth(C$, 'readMetadata',  function () {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}try {
this.imageMetadata=Clazz.new_($I$(10,1));
var startPosition=this.stream.getStreamPosition$();
while (true){
var blockType=this.stream.readUnsignedByte$();
if (blockType == 44) {
this.imageMetadata.imageLeftPosition=this.stream.readUnsignedShort$();
this.imageMetadata.imageTopPosition=this.stream.readUnsignedShort$();
this.imageMetadata.imageWidth=this.stream.readUnsignedShort$();
this.imageMetadata.imageHeight=this.stream.readUnsignedShort$();
var idPackedFields=this.stream.readUnsignedByte$();
var localColorTableFlag=(idPackedFields & 128) != 0;
this.imageMetadata.interlaceFlag=(idPackedFields & 64) != 0;
this.imageMetadata.sortFlag=(idPackedFields & 32) != 0;
var numLCTEntries=1 << ((idPackedFields & 7) + 1);
if (localColorTableFlag) {
this.imageMetadata.localColorTable=Clazz.array(Byte.TYPE, [3 * numLCTEntries]);
this.stream.readFully$BA(this.imageMetadata.localColorTable);
} else {
this.imageMetadata.localColorTable=null;
}this.imageMetadataLength=Long.$ival((Long.$sub(this.stream.getStreamPosition$(),startPosition)));
return;
} else if (blockType == 33) {
var label=this.stream.readUnsignedByte$();
if (label == 249) {
var gceLength=this.stream.readUnsignedByte$();
var gcePackedFields=this.stream.readUnsignedByte$();
this.imageMetadata.disposalMethod=(gcePackedFields >> 2) & 3;
this.imageMetadata.userInputFlag=(gcePackedFields & 2) != 0;
this.imageMetadata.transparentColorFlag=(gcePackedFields & 1) != 0;
this.imageMetadata.delayTime=this.stream.readUnsignedShort$();
this.imageMetadata.transparentColorIndex=this.stream.readUnsignedByte$();
var terminator=this.stream.readUnsignedByte$();
} else if (label == 1) {
var length=this.stream.readUnsignedByte$();
this.imageMetadata.hasPlainTextExtension=true;
this.imageMetadata.textGridLeft=this.stream.readUnsignedShort$();
this.imageMetadata.textGridTop=this.stream.readUnsignedShort$();
this.imageMetadata.textGridWidth=this.stream.readUnsignedShort$();
this.imageMetadata.textGridHeight=this.stream.readUnsignedShort$();
this.imageMetadata.characterCellWidth=this.stream.readUnsignedByte$();
this.imageMetadata.characterCellHeight=this.stream.readUnsignedByte$();
this.imageMetadata.textForegroundColor=this.stream.readUnsignedByte$();
this.imageMetadata.textBackgroundColor=this.stream.readUnsignedByte$();
this.imageMetadata.text=p$1.concatenateBlocks.apply(this, []);
} else if (label == 254) {
var comment=p$1.concatenateBlocks.apply(this, []);
if (this.imageMetadata.comments == null ) {
this.imageMetadata.comments=Clazz.new_($I$(1,1));
}this.imageMetadata.comments.add$O(comment);
} else if (label == 255) {
var blockSize=this.stream.readUnsignedByte$();
var applicationID=Clazz.array(Byte.TYPE, [8]);
var authCode=Clazz.array(Byte.TYPE, [3]);
var blockData=Clazz.array(Byte.TYPE, [blockSize]);
this.stream.readFully$BA(blockData);
var offset=p$1.copyData$BA$I$BA.apply(this, [blockData, 0, applicationID]);
offset=p$1.copyData$BA$I$BA.apply(this, [blockData, offset, authCode]);
var applicationData=p$1.concatenateBlocks.apply(this, []);
if (offset < blockSize) {
var len=blockSize - offset;
var data=Clazz.array(Byte.TYPE, [len + applicationData.length]);
System.arraycopy$O$I$O$I$I(blockData, offset, data, 0, len);
System.arraycopy$O$I$O$I$I(applicationData, 0, data, len, applicationData.length);
applicationData=data;
}if (this.imageMetadata.applicationIDs == null ) {
this.imageMetadata.applicationIDs=Clazz.new_($I$(1,1));
this.imageMetadata.authenticationCodes=Clazz.new_($I$(1,1));
this.imageMetadata.applicationData=Clazz.new_($I$(1,1));
}this.imageMetadata.applicationIDs.add$O(applicationID);
this.imageMetadata.authenticationCodes.add$O(authCode);
this.imageMetadata.applicationData.add$O(applicationData);
} else {
var length=0;
do {
length=this.stream.readUnsignedByte$();
this.stream.skipBytes$I(length);
} while (length > 0);
}} else if (blockType == 59) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Attempt to read past end of image sequence!"]);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unexpected block type " + blockType + "!" ]);
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.imageio.IIOException")){
var iioe = e$$;
{
throw iioe;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error reading image metadata!", ioe]);
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'copyData$BA$I$BA',  function (src, offset, dst) {
var len=dst.length;
var rest=src.length - offset;
if (len > rest) {
len=rest;
}System.arraycopy$O$I$O$I$I(src, offset, dst, 0, len);
return offset + len;
}, p$1);

Clazz.newMeth(C$, 'startPass$I',  function (pass) {
if (this.updateListeners == null  || !this.imageMetadata.interlaceFlag ) {
return;
}var y=C$.interlaceOffset[this.interlacePass];
var yStep=C$.interlaceIncrement[this.interlacePass];
var vals=$I$(11,"computeUpdatedPixels$java_awt_Rectangle$java_awt_Point$I$I$I$I$I$I$I$I$I$I$I$I",[this.sourceRegion, this.destinationOffset, this.destinationRegion.x, this.destinationRegion.y, this.destinationRegion.x + this.destinationRegion.width - 1, this.destinationRegion.y + this.destinationRegion.height - 1, this.sourceXSubsampling, this.sourceYSubsampling, 0, y, this.destinationRegion.width, ((this.destinationRegion.height + yStep - 1)/yStep|0), 1, yStep]);
this.updateMinY=vals[1];
this.updateYStep=vals[5];
var bands=Clazz.array(Integer.TYPE, -1, [0]);
this.processPassStarted$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA(this.theImage, this.interlacePass, this.sourceMinProgressivePass, this.sourceMaxProgressivePass, 0, this.updateMinY, 1, this.updateYStep, bands);
}, p$1);

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}p$1.checkIndex$I.apply(this, [imageIndex]);
var index=p$1.locateImage$I.apply(this, [imageIndex]);
if (index != imageIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex out of bounds!"]);
}this.clearAbortRequest$();
p$1.readMetadata.apply(this, []);
if (param == null ) {
param=this.getDefaultReadParam$();
}var imageTypes=this.getImageTypes$I(imageIndex);
this.theImage=$I$(12).getDestination$javax_imageio_ImageReadParam$java_util_Iterator$I$I(param, imageTypes, this.imageMetadata.imageWidth, this.imageMetadata.imageHeight);
this.theTile=this.theImage.getWritableTile$I$I(0, 0);
this.width=this.imageMetadata.imageWidth;
this.height=this.imageMetadata.imageHeight;
this.streamX=0;
this.streamY=0;
this.rowsDone=0;
this.interlacePass=0;
this.sourceRegion=Clazz.new_($I$(13,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.destinationRegion=Clazz.new_($I$(13,1).c$$I$I$I$I,[0, 0, 0, 0]);
$I$(12).computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, this.width, this.height, this.theImage, this.sourceRegion, this.destinationRegion);
this.destinationOffset=Clazz.new_($I$(14,1).c$$I$I,[this.destinationRegion.x, this.destinationRegion.y]);
this.sourceXSubsampling=param.getSourceXSubsampling$();
this.sourceYSubsampling=param.getSourceYSubsampling$();
this.sourceMinProgressivePass=Math.max(param.getSourceMinProgressivePass$(), 0);
this.sourceMaxProgressivePass=Math.min(param.getSourceMaxProgressivePass$(), 3);
this.destY=this.destinationRegion.y + ((this.streamY - this.sourceRegion.y)/this.sourceYSubsampling|0);
p$1.computeDecodeThisRow.apply(this, []);
this.processImageStarted$I(imageIndex);
p$1.startPass$I.apply(this, [0]);
this.rowBuf=Clazz.array(Byte.TYPE, [this.width]);
try {
this.initCodeSize=this.stream.readUnsignedByte$();
this.blockLength=this.stream.readUnsignedByte$();
var left=this.blockLength;
var off=0;
while (left > 0){
var nbytes=this.stream.read$BA$I$I(this.block, off, left);
left-=nbytes;
off+=nbytes;
}
this.bitPos=0;
this.nextByte=0;
this.lastBlockFound=false;
this.interlacePass=0;
p$1.initNext32Bits.apply(this, []);
this.clearCode=1 << this.initCodeSize;
this.eofCode=this.clearCode + 1;
var code;
var oldCode=0;
var prefix=Clazz.array(Integer.TYPE, [4096]);
var suffix=Clazz.array(Byte.TYPE, [4096]);
var initial=Clazz.array(Byte.TYPE, [4096]);
var length=Clazz.array(Integer.TYPE, [4096]);
var string=Clazz.array(Byte.TYPE, [4096]);
this.initializeStringTable$IA$BA$BA$IA(prefix, suffix, initial, length);
var tableIndex=(1 << this.initCodeSize) + 2;
var codeSize=this.initCodeSize + 1;
var codeMask=(1 << codeSize) - 1;
while (!this.abortRequested$()){
code=p$1.getCode$I$I.apply(this, [codeSize, codeMask]);
if (code == this.clearCode) {
this.initializeStringTable$IA$BA$BA$IA(prefix, suffix, initial, length);
tableIndex=(1 << this.initCodeSize) + 2;
codeSize=this.initCodeSize + 1;
codeMask=(1 << codeSize) - 1;
code=p$1.getCode$I$I.apply(this, [codeSize, codeMask]);
if (code == this.eofCode) {
this.processImageComplete$();
return this.theImage;
}} else if (code == this.eofCode) {
this.processImageComplete$();
return this.theImage;
} else {
var newSuffixIndex;
if (code < tableIndex) {
newSuffixIndex=code;
} else {
newSuffixIndex=oldCode;
if (code != tableIndex) {
this.processWarningOccurred$S("Out-of-sequence code!");
}}var ti=tableIndex;
var oc=oldCode;
prefix[ti]=oc;
suffix[ti]=initial[newSuffixIndex];
initial[ti]=initial[oc];
length[ti]=length[oc] + 1;
++tableIndex;
if ((tableIndex == (1 << codeSize)) && (tableIndex < 4096) ) {
++codeSize;
codeMask=(1 << codeSize) - 1;
}}var c=code;
var len=length[c];
for (var i=len - 1; i >= 0; i--) {
string[i]=suffix[c];
c=prefix[c];
}
p$1.outputPixels$BA$I.apply(this, [string, len]);
oldCode=code;
}
this.processReadAborted$();
return this.theImage;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error reading image!", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
p$1.resetStreamSettings.apply(this, []);
});

Clazz.newMeth(C$, 'resetStreamSettings',  function () {
this.gotHeader=false;
this.streamMetadata=null;
this.currIndex=-1;
this.imageMetadata=null;
this.imageStartPosition=Clazz.new_($I$(1,1));
this.numImages=-1;
this.blockLength=0;
this.bitPos=0;
this.nextByte=0;
this.next32Bits=0;
this.lastBlockFound=false;
this.theImage=null;
this.theTile=null;
this.width=-1;
this.height=-1;
this.streamX=-1;
this.streamY=-1;
this.rowsDone=0;
this.interlacePass=0;
this.fallbackColorTable=null;
}, p$1);

Clazz.newMeth(C$, 'getDefaultPalette$',  function () {
if (C$.defaultPalette == null ) {
var img=Clazz.new_($I$(15,1).c$$I$I$I,[1, 1, 13]);
var icm=img.getColorModel$();
var size=icm.getMapSize$();
var r=Clazz.array(Byte.TYPE, [size]);
var g=Clazz.array(Byte.TYPE, [size]);
var b=Clazz.array(Byte.TYPE, [size]);
icm.getReds$BA(r);
icm.getGreens$BA(g);
icm.getBlues$BA(b);
C$.defaultPalette=Clazz.array(Byte.TYPE, [size * 3]);
for (var i=0; i < size; i++) {
C$.defaultPalette[3 * i + 0]=r[i];
C$.defaultPalette[3 * i + 1]=g[i];
C$.defaultPalette[3 * i + 2]=b[i];
}
}return C$.defaultPalette;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.interlaceIncrement=Clazz.array(Integer.TYPE, -1, [8, 8, 4, 2, -1]);
C$.interlaceOffset=Clazz.array(Integer.TYPE, -1, [0, 4, 2, 1, -1]);
C$.defaultPalette=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

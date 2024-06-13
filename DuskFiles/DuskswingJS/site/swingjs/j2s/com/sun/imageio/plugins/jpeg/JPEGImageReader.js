(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),p$1={},p$2={},I$=[[0,'com.sun.imageio.plugins.jpeg.JPEGImageReader',['com.sun.imageio.plugins.jpeg.JPEGImageReader','.CallBackLock','.State'],'java.security.AccessController','javax.imageio.stream.ImageInputStream','javax.imageio.plugins.jpeg.JPEGQTable','javax.imageio.plugins.jpeg.JPEGHuffmanTable',['com.sun.imageio.plugins.jpeg.JPEGImageReader','.CallBackLock'],['com.sun.imageio.plugins.jpeg.JPEGImageReader','.JPEGReaderDisposerRecord'],'sun.java2d.Disposer','InternalError','com.sun.imageio.plugins.jpeg.JPEGMetadata','com.sun.imageio.plugins.jpeg.JPEGBuffer','java.awt.color.ICC_Profile','java.util.Arrays','java.awt.color.ICC_ColorSpace','com.sun.imageio.plugins.jpeg.ImageTypeProducer','java.util.ArrayList','javax.imageio.ImageTypeSpecifier','com.sun.imageio.plugins.jpeg.JPEG','com.sun.imageio.plugins.jpeg.ImageTypeIterator','java.awt.image.ColorConvertOp',['com.sun.imageio.plugins.jpeg.JPEG','.JCS'],'javax.imageio.plugins.jpeg.JPEGImageReadParam','javax.imageio.ImageReader','java.awt.Rectangle','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.Point','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','Thread']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGImageReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.imageio.ImageReader');
C$.$classes$=[['JPEGReaderDisposerRecord',10],['CallBackLock',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.debug=false;
this.structPointer=0;
this.iis=null;
this.imagePositions=null;
this.numImages=0;
this.currentImage=-1;
this.iccCS=null;
this.convert=null;
this.image=null;
this.raster=null;
this.target=null;
this.buffer=null;
this.destROI=null;
this.destinationBands=null;
this.streamMetadata=null;
this.imageMetadata=null;
this.imageMetadataIndex=-1;
this.haveSeeked=false;
this.abbrevQTables=null;
this.abbrevDCHuffmanTables=null;
this.abbrevACHuffmanTables=null;
this.minProgressivePass=0;
this.maxProgressivePass=2147483647;
this.knownPassCount=-1;
this.pass=0;
this.percentToDate=0.0;
this.previousPassPercentage=0.0;
this.progInterval=0;
this.tablesOnlyChecked=false;
this.disposerReferent= Clazz.new_();
this.theThread=null;
this.theLockCount=0;
this.cbLock=Clazz.new_($I$(7,1));
},1);

C$.$fields$=[['Z',['debug','haveSeeked','tablesOnlyChecked'],'F',['percentToDate','previousPassPercentage'],'I',['numImages','currentImage','width','height','colorSpaceCode','outColorSpaceCode','numComponents','imageMetadataIndex','minProgressivePass','maxProgressivePass','knownPassCount','pass','progInterval','theLockCount'],'J',['structPointer'],'O',['iis','javax.imageio.stream.ImageInputStream','imagePositions','java.util.List','iccCS','java.awt.color.ColorSpace','convert','java.awt.image.ColorConvertOp','image','java.awt.image.BufferedImage','raster','java.awt.image.WritableRaster','+target','buffer','java.awt.image.DataBufferByte','destROI','java.awt.Rectangle','destinationBands','int[]','streamMetadata','com.sun.imageio.plugins.jpeg.JPEGMetadata','+imageMetadata','abbrevQTables','javax.imageio.plugins.jpeg.JPEGQTable[]','abbrevDCHuffmanTables','javax.imageio.plugins.jpeg.JPEGHuffmanTable[]','+abbrevACHuffmanTables','disposerReferent','java.lang.Object','disposerRecord','sun.java2d.DisposerRecord','theThread','Thread','cbLock','com.sun.imageio.plugins.jpeg.JPEGImageReader.CallBackLock']]]

Clazz.newMeth(C$, 'initReaderIDs$Class$Class$Class',  function (iisClass, qTableClass, huffClass) {
alert('native method must be replaced! initReaderIDs');
}
, 2);

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi',  function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originator]);C$.$init$.apply(this);
this.structPointer=p$2.initJPEGImageReader.apply(this, []);
this.disposerRecord=Clazz.new_($I$(8,1).c$$J,[this.structPointer]);
$I$(9).addRecord$O$sun_java2d_DisposerRecord(this.disposerReferent, this.disposerRecord);
}, 1);

Clazz.newMeth(C$, 'initJPEGImageReader',  function () {
alert('native method must be replaced! initJPEGImageReader');
}
, p$2);

Clazz.newMeth(C$, 'warningOccurred$I',  function (code) {
p$1.lock.apply(this.cbLock, []);
try {
if ((code < 0) || (code > 2) ) {
throw Clazz.new_($I$(10,1).c$$S,["Invalid warning index"]);
}this.processWarningOccurred$S$S("com.sun.imageio.plugins.jpeg.JPEGImageReaderResources", Integer.toString$I(code));
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'warningWithMessage$S',  function (msg) {
p$1.lock.apply(this.cbLock, []);
try {
this.processWarningOccurred$S(msg);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'setInput$O$Z$Z',  function (input, seekForwardOnly, ignoreMetadata) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.ignoreMetadata=ignoreMetadata;
p$2.resetInternalState.apply(this, []);
this.iis=input;
p$2.setSource$J.apply(this, [this.structPointer]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'readInputData$BA$I$I',  function (buf, off, len) {
p$1.lock.apply(this.cbLock, []);
try {
return this.iis.read$BA$I$I(buf, off, len);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
}, p$2);

Clazz.newMeth(C$, 'skipInputBytes$J',  function (n) {
p$1.lock.apply(this.cbLock, []);
try {
return this.iis.skipBytes$J(n);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
}, p$2);

Clazz.newMeth(C$, 'setSource$J',  function (structPointer) {
alert('native method must be replaced! setSource');
}
, p$2);

Clazz.newMeth(C$, 'checkTablesOnly',  function () {
if (this.debug) {
System.out.println$S("Checking for tables-only image");
}var savePos=this.iis.getStreamPosition$();
if (this.debug) {
System.out.println$S("saved pos is " + Long.$s(savePos));
System.out.println$S("length is " + Long.$s(this.iis.length$()));
}var tablesOnly=p$2.readNativeHeader$Z.apply(this, [true]);
if (tablesOnly) {
if (this.debug) {
System.out.println$S("tables-only image found");
var pos=this.iis.getStreamPosition$();
System.out.println$S("pos after return from native is " + Long.$s(pos));
}if (this.ignoreMetadata == false ) {
this.iis.seek$J(savePos);
this.haveSeeked=true;
this.streamMetadata=Clazz.new_($I$(11,1).c$$Z$Z$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader,[true, false, this.iis, this]);
var pos=this.iis.getStreamPosition$();
if (this.debug) {
System.out.println$S("pos after constructing stream metadata is " + Long.$s(pos));
}}if (p$2.hasNextImage.apply(this, [])) {
this.imagePositions.add$O( new Long(this.iis.getStreamPosition$()));
}} else {
this.imagePositions.add$O( new Long(savePos));
this.currentImage=0;
}if (this.seekForwardOnly) {
var pos=this.imagePositions.get$I(this.imagePositions.size$() - 1);
this.iis.flushBefore$J(pos.longValue$());
}this.tablesOnlyChecked=true;
}, p$2);

Clazz.newMeth(C$, 'getNumImages$Z',  function (allowSearch) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
return p$2.getNumImagesOnThread$Z.apply(this, [allowSearch]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getNumImagesOnThread$Z',  function (allowSearch) {
if (this.numImages != 0) {
return this.numImages;
}if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set"]);
}if (allowSearch == true ) {
if (this.seekForwardOnly) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["seekForwardOnly and allowSearch can\'t both be true!"]);
}if (!this.tablesOnlyChecked) {
p$2.checkTablesOnly.apply(this, []);
}this.iis.mark$();
p$2.gotoImage$I.apply(this, [0]);
var buffer=Clazz.new_($I$(12,1).c$$javax_imageio_stream_ImageInputStream,[this.iis]);
buffer.loadBuf$I(0);
var done=false;
while (!done){
done=buffer.scanForFF$com_sun_imageio_plugins_jpeg_JPEGImageReader(this);
switch (buffer.buf[buffer.bufPtr] & 255) {
case 216:
++this.numImages;
case 0:
case 208:
case 209:
case 210:
case 211:
case 212:
case 213:
case 214:
case 215:
case 217:
--buffer.bufAvail;
++buffer.bufPtr;
break;
default:
--buffer.bufAvail;
++buffer.bufPtr;
buffer.loadBuf$I(2);
var length=((buffer.buf[buffer.bufPtr++] & 255) << 8) | (buffer.buf[buffer.bufPtr++] & 255);
buffer.bufAvail-=2;
length-=2;
buffer.skipData$I(length);
}
}
this.iis.reset$();
return this.numImages;
}return -1;
}, p$2);

Clazz.newMeth(C$, 'gotoImage$I',  function (imageIndex) {
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set"]);
}if (imageIndex < this.minIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (!this.tablesOnlyChecked) {
p$2.checkTablesOnly.apply(this, []);
}if (imageIndex < this.imagePositions.size$()) {
this.iis.seek$J(((this.imagePositions.get$I(imageIndex))).longValue$());
} else {
var pos=this.imagePositions.get$I(this.imagePositions.size$() - 1);
this.iis.seek$J(pos.longValue$());
p$2.skipImage.apply(this, []);
for (var index=this.imagePositions.size$(); index <= imageIndex; index++) {
if (!p$2.hasNextImage.apply(this, [])) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}pos= new Long(this.iis.getStreamPosition$());
this.imagePositions.add$O(pos);
if (this.seekForwardOnly) {
this.iis.flushBefore$J(pos.longValue$());
}if (index < imageIndex) {
p$2.skipImage.apply(this, []);
}}
}if (this.seekForwardOnly) {
this.minIndex=imageIndex;
}this.haveSeeked=true;
}, p$2);

Clazz.newMeth(C$, 'skipImage',  function () {
if (this.debug) {
System.out.println$S("skipImage called");
}var foundFF=false;
for (var byteval=this.iis.read$(); byteval != -1; byteval=this.iis.read$()) {
if (foundFF == true ) {
if (byteval == 217) {
return;
}}foundFF=(byteval == 255) ? true : false;
}
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}, p$2);

Clazz.newMeth(C$, 'hasNextImage',  function () {
if (this.debug) {
System.out.print$S("hasNextImage called; returning ");
}this.iis.mark$();
var foundFF=false;
for (var byteval=this.iis.read$(); byteval != -1; byteval=this.iis.read$()) {
if (foundFF == true ) {
if (byteval == 216) {
this.iis.reset$();
if (this.debug) {
System.out.println$S("true");
}return true;
}}foundFF=(byteval == 255) ? true : false;
}
this.iis.reset$();
if (this.debug) {
System.out.println$S("false");
}return false;
}, p$2);

Clazz.newMeth(C$, 'pushBack$I',  function (num) {
if (this.debug) {
System.out.println$S("pushing back " + num + " bytes" );
}p$1.lock.apply(this.cbLock, []);
try {
this.iis.seek$J(Long.$sub(this.iis.getStreamPosition$(),num));
} finally {
p$1.unlock.apply(this.cbLock, []);
}
}, p$2);

Clazz.newMeth(C$, 'readHeader$I$Z',  function (imageIndex, reset) {
p$2.gotoImage$I.apply(this, [imageIndex]);
p$2.readNativeHeader$Z.apply(this, [reset]);
this.currentImage=imageIndex;
}, p$2);

Clazz.newMeth(C$, 'readNativeHeader$Z',  function (reset) {
var retval=false;
retval=p$2.readImageHeader$J$Z$Z.apply(this, [this.structPointer, this.haveSeeked, reset]);
this.haveSeeked=false;
return retval;
}, p$2);

Clazz.newMeth(C$, 'readImageHeader$J$Z$Z',  function (structPointer, clearBuffer, reset) {
alert('native method must be replaced! readImageHeader');
}
, p$2);

Clazz.newMeth(C$, 'setImageData$I$I$I$I$I$BA',  function (width, height, colorSpaceCode, outColorSpaceCode, numComponents, iccData) {
this.width=width;
this.height=height;
this.colorSpaceCode=colorSpaceCode;
this.outColorSpaceCode=outColorSpaceCode;
this.numComponents=numComponents;
if (iccData == null ) {
this.iccCS=null;
return;
}var newProfile=null;
try {
newProfile=$I$(13).getInstance$BA(iccData);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
this.iccCS=null;
this.warningOccurred$I(2);
return;
} else {
throw e;
}
}
var newData=newProfile.getData$();
var oldProfile=null;
if (Clazz.instanceOf(this.iccCS, "java.awt.color.ICC_ColorSpace")) {
oldProfile=(this.iccCS).getProfile$();
}var oldData=null;
if (oldProfile != null ) {
oldData=oldProfile.getData$();
}if (oldData == null  || !$I$(14).equals$BA$BA(oldData, newData) ) {
this.iccCS=Clazz.new_($I$(15,1).c$$java_awt_color_ICC_Profile,[newProfile]);
try {
var colors=this.iccCS.fromRGB$FA(Clazz.array(Float.TYPE, -1, [1.0, 0.0, 0.0]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.color.CMMException")){
this.iccCS=null;
p$1.lock.apply(this.cbLock, []);
try {
this.warningOccurred$I(2);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
} else {
throw e;
}
}
}}, p$2);

Clazz.newMeth(C$, 'getWidth$I',  function (imageIndex) {
p$2.setThreadLock.apply(this, []);
try {
if (this.currentImage != imageIndex) {
this.cbLock.check$();
p$2.readHeader$I$Z.apply(this, [imageIndex, true]);
}return this.width;
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getHeight$I',  function (imageIndex) {
p$2.setThreadLock.apply(this, []);
try {
if (this.currentImage != imageIndex) {
this.cbLock.check$();
p$2.readHeader$I$Z.apply(this, [imageIndex, true]);
}return this.height;
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getImageType$I',  function (code) {
var ret=null;
if ((code > 0) && (code < 12) ) {
ret=$I$(16).getTypeProducer$I(code);
}return ret;
}, p$2);

Clazz.newMeth(C$, 'getRawImageType$I',  function (imageIndex) {
p$2.setThreadLock.apply(this, []);
try {
if (this.currentImage != imageIndex) {
this.cbLock.check$();
p$2.readHeader$I$Z.apply(this, [imageIndex, true]);
}return p$2.getImageType$I.apply(this, [this.colorSpaceCode]).getType$();
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getImageTypes$I',  function (imageIndex) {
p$2.setThreadLock.apply(this, []);
try {
return p$2.getImageTypesOnThread$I.apply(this, [imageIndex]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getImageTypesOnThread$I',  function (imageIndex) {
if (this.currentImage != imageIndex) {
this.cbLock.check$();
p$2.readHeader$I$Z.apply(this, [imageIndex, true]);
}var raw=p$2.getImageType$I.apply(this, [this.colorSpaceCode]);
var list=Clazz.new_($I$(17,1).c$$I,[1]);
switch (this.colorSpaceCode) {
case 1:
list.add$O(raw);
list.add$O(p$2.getImageType$I.apply(this, [2]));
break;
case 2:
list.add$O(raw);
list.add$O(p$2.getImageType$I.apply(this, [1]));
list.add$O(p$2.getImageType$I.apply(this, [5]));
break;
case 6:
list.add$O(raw);
break;
case 5:
if (raw != null ) {
list.add$O(raw);
list.add$O(p$2.getImageType$I.apply(this, [2]));
}break;
case 10:
if (raw != null ) {
list.add$O(raw);
}break;
case 3:
list.add$O(p$2.getImageType$I.apply(this, [2]));
if (this.iccCS != null ) {
list.add$O(((P$.JPEGImageReader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JPEGImageReader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('com.sun.imageio.plugins.jpeg.ImageTypeProducer'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'produce$',  function () {
return $I$(18,"createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z",[this.b$['com.sun.imageio.plugins.jpeg.JPEGImageReader'].iccCS, $I$(19).bOffsRGB, 0, false, false]);
});
})()
), Clazz.new_($I$(16,1),[this, null],P$.JPEGImageReader$2)));
}list.add$O(p$2.getImageType$I.apply(this, [1]));
list.add$O(p$2.getImageType$I.apply(this, [5]));
break;
case 7:
list.add$O(p$2.getImageType$I.apply(this, [6]));
break;
}
return Clazz.new_([list.iterator$()],$I$(20,1).c$$java_util_Iterator);
}, p$2);

Clazz.newMeth(C$, 'checkColorConversion$java_awt_image_BufferedImage$javax_imageio_ImageReadParam',  function (image, param) {
if (param != null ) {
if ((param.getSourceBands$() != null ) || (param.getDestinationBands$() != null ) ) {
return;
}}var cm=image.getColorModel$();
if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["IndexColorModel not supported"]);
}var cs=cm.getColorSpace$();
var csType=cs.getType$();
this.convert=null;
switch (this.outColorSpaceCode) {
case 1:
if (csType == 5) {
p$2.setOutColorSpace$J$I.apply(this, [this.structPointer, 2]);
this.outColorSpaceCode=2;
this.numComponents=3;
} else if (csType != 6) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Incompatible color conversion"]);
}break;
case 2:
if (csType == 6) {
if (this.colorSpaceCode == 3) {
p$2.setOutColorSpace$J$I.apply(this, [this.structPointer, 1]);
this.outColorSpaceCode=1;
this.numComponents=1;
}} else if ((this.iccCS != null ) && (cm.getNumComponents$() == this.numComponents) && (cs !== this.iccCS )  ) {
this.convert=Clazz.new_($I$(21,1).c$$java_awt_color_ColorSpace$java_awt_color_ColorSpace$java_awt_RenderingHints,[this.iccCS, cs, null]);
} else if ((this.iccCS == null ) && (!cs.isCS_sRGB$()) && (cm.getNumComponents$() == this.numComponents)  ) {
this.convert=Clazz.new_([$I$(22).sRGB, cs, null],$I$(21,1).c$$java_awt_color_ColorSpace$java_awt_color_ColorSpace$java_awt_RenderingHints);
} else if (csType != 5) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Incompatible color conversion"]);
}break;
case 6:
if ((csType != 5) || (cm.getNumComponents$() != this.numComponents) ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Incompatible color conversion"]);
}break;
case 5:
{
var YCC=$I$(22).getYCC$();
if (YCC == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Incompatible color conversion"]);
}if ((cs !== YCC ) && (cm.getNumComponents$() == this.numComponents) ) {
this.convert=Clazz.new_($I$(21,1).c$$java_awt_color_ColorSpace$java_awt_color_ColorSpace$java_awt_RenderingHints,[YCC, cs, null]);
}}break;
case 10:
{
var YCC=$I$(22).getYCC$();
if ((YCC == null ) || (cs !== YCC ) || (cm.getNumComponents$() != this.numComponents)  ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Incompatible color conversion"]);
}}break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Incompatible color conversion"]);
}
}, p$2);

Clazz.newMeth(C$, 'setOutColorSpace$J$I',  function (structPointer, id) {
alert('native method must be replaced! setOutColorSpace');
}
, p$2);

Clazz.newMeth(C$, 'getDefaultReadParam$',  function () {
return Clazz.new_($I$(23,1));
});

Clazz.newMeth(C$, 'getStreamMetadata$',  function () {
p$2.setThreadLock.apply(this, []);
try {
if (!this.tablesOnlyChecked) {
this.cbLock.check$();
p$2.checkTablesOnly.apply(this, []);
}return this.streamMetadata;
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getImageMetadata$I',  function (imageIndex) {
p$2.setThreadLock.apply(this, []);
try {
if ((this.imageMetadataIndex == imageIndex) && (this.imageMetadata != null ) ) {
return this.imageMetadata;
}this.cbLock.check$();
p$2.gotoImage$I.apply(this, [imageIndex]);
this.imageMetadata=Clazz.new_($I$(11,1).c$$Z$Z$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader,[false, false, this.iis, this]);
this.imageMetadataIndex=imageIndex;
return this.imageMetadata;
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
try {
p$2.readInternal$I$javax_imageio_ImageReadParam$Z.apply(this, [imageIndex, param, false]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"RuntimeException")){
var e = e$$;
{
p$2.resetLibraryState$J.apply(this, [this.structPointer]);
throw e;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
p$2.resetLibraryState$J.apply(this, [this.structPointer]);
throw e;
}
} else {
throw e$$;
}
}
var ret=this.image;
this.image=null;
return ret;
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'readInternal$I$javax_imageio_ImageReadParam$Z',  function (imageIndex, param, wantRaster) {
p$2.readHeader$I$Z.apply(this, [imageIndex, false]);
var imRas=null;
var numImageBands=0;
if (!wantRaster) {
var imageTypes=this.getImageTypes$I(imageIndex);
if (imageTypes.hasNext$() == false ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unsupported Image Type"]);
}this.image=$I$(24).getDestination$javax_imageio_ImageReadParam$java_util_Iterator$I$I(param, imageTypes, this.width, this.height);
imRas=this.image.getRaster$();
numImageBands=this.image.getSampleModel$().getNumBands$();
p$2.checkColorConversion$java_awt_image_BufferedImage$javax_imageio_ImageReadParam.apply(this, [this.image, param]);
$I$(24).checkReadParamBandSettings$javax_imageio_ImageReadParam$I$I(param, this.numComponents, numImageBands);
} else {
p$2.setOutColorSpace$J$I.apply(this, [this.structPointer, this.colorSpaceCode]);
this.image=null;
}var srcBands=$I$(19).bandOffsets[this.numComponents - 1];
var numRasterBands=(wantRaster ? this.numComponents : numImageBands);
this.destinationBands=null;
var srcROI=Clazz.new_($I$(25,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.destROI=Clazz.new_($I$(25,1).c$$I$I$I$I,[0, 0, 0, 0]);
$I$(24).computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, this.width, this.height, this.image, srcROI, this.destROI);
var periodX=1;
var periodY=1;
this.minProgressivePass=0;
this.maxProgressivePass=2147483647;
if (param != null ) {
periodX=param.getSourceXSubsampling$();
periodY=param.getSourceYSubsampling$();
var sBands=param.getSourceBands$();
if (sBands != null ) {
srcBands=sBands;
numRasterBands=srcBands.length;
}if (!wantRaster) {
this.destinationBands=param.getDestinationBands$();
}this.minProgressivePass=param.getSourceMinProgressivePass$();
this.maxProgressivePass=param.getSourceMaxProgressivePass$();
if (Clazz.instanceOf(param, "javax.imageio.plugins.jpeg.JPEGImageReadParam")) {
var jparam=param;
if (jparam.areTablesSet$()) {
this.abbrevQTables=jparam.getQTables$();
this.abbrevDCHuffmanTables=jparam.getDCHuffmanTables$();
this.abbrevACHuffmanTables=jparam.getACHuffmanTables$();
}}}var lineSize=this.destROI.width * numRasterBands;
this.buffer=Clazz.new_($I$(26,1).c$$I,[lineSize]);
var bandOffs=$I$(19).bandOffsets[numRasterBands - 1];
this.raster=$I$(27).createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point(this.buffer, this.destROI.width, 1, lineSize, numRasterBands, bandOffs, null);
if (wantRaster) {
this.target=$I$(27).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, this.destROI.width, this.destROI.height, lineSize, numRasterBands, bandOffs, null);
} else {
this.target=imRas;
}var bandSizes=this.target.getSampleModel$().getSampleSize$();
for (var i=0; i < bandSizes.length; i++) {
if (bandSizes[i] <= 0 || bandSizes[i] > 8 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal band size: should be 0 < size <= 8"]);
}}
var callbackUpdates=((this.updateListeners != null ) || (this.progressListeners != null ) );
p$2.initProgressData.apply(this, []);
if (imageIndex == this.imageMetadataIndex) {
this.knownPassCount=0;
for (var iter=this.imageMetadata.markerSequence.iterator$(); iter.hasNext$(); ) {
if (Clazz.instanceOf(iter.next$(), "com.sun.imageio.plugins.jpeg.SOSMarkerSegment")) {
++this.knownPassCount;
}}
}this.progInterval=Math.max(((this.target.getHeight$() - 1)/20|0), 1);
if (this.knownPassCount > 0) {
this.progInterval*=this.knownPassCount;
} else if (this.maxProgressivePass != 2147483647) {
this.progInterval*=(this.maxProgressivePass - this.minProgressivePass + 1);
}if (this.debug) {
System.out.println$S("**** Read Data *****");
System.out.println$S("numRasterBands is " + numRasterBands);
System.out.print$S("srcBands:");
for (var i=0; i < srcBands.length; i++) System.out.print$S(" " + srcBands[i]);

System.out.println$();
System.out.println$S("destination bands is " + this.destinationBands);
if (this.destinationBands != null ) {
for (var i=0; i < this.destinationBands.length; i++) {
System.out.print$S(" " + this.destinationBands[i]);
}
System.out.println$();
}System.out.println$S("sourceROI is " + srcROI);
System.out.println$S("destROI is " + this.destROI);
System.out.println$S("periodX is " + periodX);
System.out.println$S("periodY is " + periodY);
System.out.println$S("minProgressivePass is " + this.minProgressivePass);
System.out.println$S("maxProgressivePass is " + this.maxProgressivePass);
System.out.println$S("callbackUpdates is " + callbackUpdates);
}this.processImageStarted$I(this.currentImage);
var aborted=false;
aborted=p$2.readImage$J$BA$I$IA$IA$I$I$I$I$I$I$javax_imageio_plugins_jpeg_JPEGQTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$I$I$Z.apply(this, [this.structPointer, this.buffer.getData$(), numRasterBands, srcBands, bandSizes, srcROI.x, srcROI.y, srcROI.width, srcROI.height, periodX, periodY, this.abbrevQTables, this.abbrevDCHuffmanTables, this.abbrevACHuffmanTables, this.minProgressivePass, this.maxProgressivePass, callbackUpdates]);
if (aborted) {
this.processReadAborted$();
} else {
this.processImageComplete$();
}return this.target;
}, p$2);

Clazz.newMeth(C$, 'acceptPixels$I$Z',  function (y, progressive) {
if (this.convert != null ) {
this.convert.filter$java_awt_image_Raster$java_awt_image_WritableRaster(this.raster, this.raster);
}this.target.setRect$I$I$java_awt_image_Raster(this.destROI.x, this.destROI.y + y, this.raster);
p$1.lock.apply(this.cbLock, []);
try {
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.image, this.destROI.x, this.destROI.y + y, this.raster.getWidth$(), 1, 1, 1, this.destinationBands);
if ((y > 0) && (y % this.progInterval == 0) ) {
var height=this.target.getHeight$() - 1;
var percentOfPass=(y) / height;
if (progressive) {
if (this.knownPassCount != -1) {
this.processImageProgress$F((this.pass + percentOfPass) * 100.0 / this.knownPassCount);
} else if (this.maxProgressivePass != 2147483647) {
this.processImageProgress$F((this.pass + percentOfPass) * 100.0 / (this.maxProgressivePass - this.minProgressivePass + 1));
} else {
var remainingPasses=Math.max(2, 10 - this.pass);
var totalPasses=this.pass + remainingPasses - 1;
this.progInterval=Math.max((height/20|0) * totalPasses, totalPasses);
if (y % this.progInterval == 0) {
this.percentToDate=this.previousPassPercentage + (1.0 - this.previousPassPercentage) * (percentOfPass) / remainingPasses;
if (this.debug) {
System.out.print$S("pass= " + this.pass);
System.out.print$S(", y= " + y);
System.out.print$S(", progInt= " + this.progInterval);
System.out.print$S(", % of pass: " + new Float(percentOfPass).toString());
System.out.print$S(", rem. passes: " + remainingPasses);
System.out.print$S(", prev%: " + new Float(this.previousPassPercentage).toString());
System.out.print$S(", %ToDate: " + new Float(this.percentToDate).toString());
System.out.print$S(" ");
}this.processImageProgress$F(this.percentToDate * 100.0);
}}} else {
this.processImageProgress$F(percentOfPass * 100.0);
}}} finally {
p$1.unlock.apply(this.cbLock, []);
}
}, p$2);

Clazz.newMeth(C$, 'initProgressData',  function () {
this.knownPassCount=-1;
this.pass=0;
this.percentToDate=0.0;
this.previousPassPercentage=0.0;
this.progInterval=0;
}, p$2);

Clazz.newMeth(C$, 'passStarted$I',  function (pass) {
p$1.lock.apply(this.cbLock, []);
try {
this.pass=pass;
this.previousPassPercentage=this.percentToDate;
this.processPassStarted$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA(this.image, pass, this.minProgressivePass, this.maxProgressivePass, 0, 0, 1, 1, this.destinationBands);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
}, p$2);

Clazz.newMeth(C$, 'passComplete',  function () {
p$1.lock.apply(this.cbLock, []);
try {
this.processPassComplete$java_awt_image_BufferedImage(this.image);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
}, p$2);

Clazz.newMeth(C$, 'thumbnailStarted$I',  function (thumbnailIndex) {
p$1.lock.apply(this.cbLock, []);
try {
this.processThumbnailStarted$I$I(this.currentImage, thumbnailIndex);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'thumbnailProgress$F',  function (percentageDone) {
p$1.lock.apply(this.cbLock, []);
try {
this.processThumbnailProgress$F(percentageDone);
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'thumbnailComplete$',  function () {
p$1.lock.apply(this.cbLock, []);
try {
this.processThumbnailComplete$();
} finally {
p$1.unlock.apply(this.cbLock, []);
}
});

Clazz.newMeth(C$, 'readImage$J$BA$I$IA$IA$I$I$I$I$I$I$javax_imageio_plugins_jpeg_JPEGQTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$I$I$Z',  function (structPointer, buffer, numRasterBands, srcBands, bandSizes, sourceXOffset, sourceYOffset, sourceWidth, sourceHeight, periodX, periodY, abbrevQTables, abbrevDCHuffmanTables, abbrevACHuffmanTables, minProgressivePass, maxProgressivePass, wantUpdates) {
alert('native method must be replaced! readImage');
}
, p$2);

Clazz.newMeth(C$, 'abort$',  function () {
p$2.setThreadLock.apply(this, []);
try {
C$.superclazz.prototype.abort$.apply(this, []);
p$2.abortRead$J.apply(this, [this.structPointer]);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'abortRead$J',  function (structPointer) {
alert('native method must be replaced! abortRead');
}
, p$2);

Clazz.newMeth(C$, 'resetLibraryState$J',  function (structPointer) {
alert('native method must be replaced! resetLibraryState');
}
, p$2);

Clazz.newMeth(C$, 'canReadRaster$',  function () {
return true;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
p$2.setThreadLock.apply(this, []);
var retval=null;
try {
this.cbLock.check$();
var saveDestOffset=null;
if (param != null ) {
saveDestOffset=param.getDestinationOffset$();
param.setDestinationOffset$java_awt_Point(Clazz.new_($I$(28,1).c$$I$I,[0, 0]));
}retval=p$2.readInternal$I$javax_imageio_ImageReadParam$Z.apply(this, [imageIndex, param, true]);
if (saveDestOffset != null ) {
this.target=this.target.createWritableTranslatedChild$I$I(saveDestOffset.x, saveDestOffset.y);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"RuntimeException")){
var e = e$$;
{
p$2.resetLibraryState$J.apply(this, [this.structPointer]);
throw e;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
p$2.resetLibraryState$J.apply(this, [this.structPointer]);
throw e;
}
} else {
throw e$$;
}
} finally {
p$2.clearThreadLock.apply(this, []);
}
return retval;
});

Clazz.newMeth(C$, 'readerSupportsThumbnails$',  function () {
return true;
});

Clazz.newMeth(C$, 'getNumThumbnails$I',  function (imageIndex) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
this.getImageMetadata$I(imageIndex);
var jfif=this.imageMetadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(29)), true);
var retval=0;
if (jfif != null ) {
retval=(jfif.thumb == null ) ? 0 : 1;
retval+=jfif.extSegments.size$();
}return retval;
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getThumbnailWidth$I$I',  function (imageIndex, thumbnailIndex) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
if ((thumbnailIndex < 0) || (thumbnailIndex >= this.getNumThumbnails$I(imageIndex)) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No such thumbnail"]);
}var jfif=this.imageMetadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(29)), true);
return jfif.getThumbnailWidth$I(thumbnailIndex);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'getThumbnailHeight$I$I',  function (imageIndex, thumbnailIndex) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
if ((thumbnailIndex < 0) || (thumbnailIndex >= this.getNumThumbnails$I(imageIndex)) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No such thumbnail"]);
}var jfif=this.imageMetadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(29)), true);
return jfif.getThumbnailHeight$I(thumbnailIndex);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'readThumbnail$I$I',  function (imageIndex, thumbnailIndex) {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
if ((thumbnailIndex < 0) || (thumbnailIndex >= this.getNumThumbnails$I(imageIndex)) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["No such thumbnail"]);
}var jfif=this.imageMetadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(29)), true);
return jfif.getThumbnail$javax_imageio_stream_ImageInputStream$I$com_sun_imageio_plugins_jpeg_JPEGImageReader(this.iis, thumbnailIndex, this);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'resetInternalState',  function () {
p$2.resetReader$J.apply(this, [this.structPointer]);
this.numImages=0;
this.imagePositions=Clazz.new_($I$(17,1));
this.currentImage=-1;
this.image=null;
this.raster=null;
this.target=null;
this.buffer=null;
this.destROI=null;
this.destinationBands=null;
this.streamMetadata=null;
this.imageMetadata=null;
this.imageMetadataIndex=-1;
this.haveSeeked=false;
this.tablesOnlyChecked=false;
this.iccCS=null;
p$2.initProgressData.apply(this, []);
}, p$2);

Clazz.newMeth(C$, 'reset$',  function () {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
C$.superclazz.prototype.reset$.apply(this, []);
} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'resetReader$J',  function (structPointer) {
alert('native method must be replaced! resetReader');
}
, p$2);

Clazz.newMeth(C$, 'dispose$',  function () {
p$2.setThreadLock.apply(this, []);
try {
this.cbLock.check$();
if (Long.$ne(this.structPointer,0 )) {
this.disposerRecord.dispose$();
this.structPointer=0;
}} finally {
p$2.clearThreadLock.apply(this, []);
}
});

Clazz.newMeth(C$, 'disposeReader$J',  function (structPointer) {
alert('native method must be replaced! disposeReader');
}
, 2);

Clazz.newMeth(C$, 'setThreadLock',  function () {
var currThread=$I$(30).currentThread$();
if (this.theThread != null ) {
if (this.theThread !== currThread ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Attempt to use instance of " + this + " locked on thread " + this.theThread + " from thread " + currThread ]);
} else {
++this.theLockCount;
}} else {
this.theThread=currThread;
this.theLockCount=1;
}}, p$2);

Clazz.newMeth(C$, 'clearThreadLock',  function () {
var currThread=$I$(30).currentThread$();
if (this.theThread == null  || this.theThread !== currThread  ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Attempt to clear thread lock  form wrong thread. Locked thread: " + this.theThread + "; current thread: " + currThread ]);
}--this.theLockCount;
if (this.theLockCount == 0) {
this.theThread=null;
}}, p$2);

C$.$static$=function(){C$.$static$=0;
{
$I$(3,"doPrivileged$java_security_PrivilegedAction",[((P$.JPEGImageReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JPEGImageReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
System.loadLibrary$S("jpeg");
return null;
});
})()
), Clazz.new_(P$.JPEGImageReader$1.$init$,[this, null]))]);
C$.initReaderIDs$Class$Class$Class(Clazz.getClass($I$(4),['close$','flush$','flushBefore$J','getBitOffset$','getByteOrder$','getFlushedPosition$','getStreamPosition$','isCached$','isCachedFile$','isCachedMemory$','length$','mark$','read$','read$BA','read$BA$I$I','readBit$','readBits$I','readBoolean$','readByte$','readBytes$javax_imageio_stream_IIOByteBuffer$I','readChar$','readDouble$','readFloat$','readFully$BA$I$I','readFully$BA','readFully$HA$I$I','readFully$CA$I$I','readFully$IA$I$I','readFully$JA$I$I','readFully$FA$I$I','readFully$DA$I$I','readInt$','readLine$','readLong$','readShort$','readUTF$','readUnsignedByte$','readUnsignedInt$','readUnsignedShort$','reset$','seek$J','setBitOffset$I','setByteOrder$java_nio_ByteOrder','skipBytes$I','skipBytes$J']), Clazz.getClass($I$(5)), Clazz.getClass($I$(6)));
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGImageReader, "JPEGReaderDisposerRecord", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'sun.java2d.DisposerRecord');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['pData']]]

Clazz.newMeth(C$, 'c$$J',  function (pData) {
;C$.$init$.apply(this);
this.pData=pData;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (Long.$ne(this.pData,0 )) {
$I$(1).disposeReader$J(this.pData);
this.pData=0;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGImageReader, "CallBackLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['State',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lockState','com.sun.imageio.plugins.jpeg.JPEGImageReader.CallBackLock.State']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.lockState=$I$(2).Unlocked;
}, 1);

Clazz.newMeth(C$, 'check$',  function () {
if (this.lockState !== $I$(2).Unlocked ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Access to the reader is not allowed"]);
}});

Clazz.newMeth(C$, 'lock',  function () {
this.lockState=$I$(2).Locked;
}, p$1);

Clazz.newMeth(C$, 'unlock',  function () {
this.lockState=$I$(2).Unlocked;
}, p$1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.JPEGImageReader.CallBackLock, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Unlocked", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Locked", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

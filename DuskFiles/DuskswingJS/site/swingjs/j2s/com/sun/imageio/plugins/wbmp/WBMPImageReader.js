(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.wbmp"),p$1={},I$=[[0,'com.sun.imageio.plugins.common.I18N','com.sun.imageio.plugins.wbmp.WBMPMetadata','com.sun.imageio.plugins.common.ReaderUtil','java.awt.image.BufferedImage','java.util.ArrayList','javax.imageio.ImageTypeSpecifier','javax.imageio.ImageReadParam','java.awt.Rectangle','javax.imageio.ImageReader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WBMPImageReader", null, 'javax.imageio.ImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iis=null;
this.gotHeader=false;
},1);

C$.$fields$=[['Z',['gotHeader'],'I',['width','height','wbmpType'],'O',['iis','javax.imageio.stream.ImageInputStream','metadata','com.sun.imageio.plugins.wbmp.WBMPMetadata']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi',  function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z',  function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.iis=input;
this.gotHeader=false;
});

Clazz.newMeth(C$, 'getNumImages$Z',  function (allowSearch) {
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("GetNumImages0")]);
}if (this.seekForwardOnly && allowSearch ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("GetNumImages1")]);
}return 1;
});

Clazz.newMeth(C$, 'getWidth$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.width;
});

Clazz.newMeth(C$, 'getHeight$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.height;
});

Clazz.newMeth(C$, 'isRandomAccessEasy$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return true;
});

Clazz.newMeth(C$, 'checkIndex$I',  function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[$I$(1).getString$S("WBMPImageReader0")]);
}}, p$1);

Clazz.newMeth(C$, 'readHeader$',  function () {
if (this.gotHeader) return;
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input source not set!"]);
}this.metadata=Clazz.new_($I$(2,1));
this.wbmpType=this.iis.readByte$();
var fixHeaderField=this.iis.readByte$();
if (fixHeaderField != 0 || !this.isValidWbmpType$I(this.wbmpType) ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,[$I$(1).getString$S("WBMPImageReader2")]);
}this.metadata.wbmpType=this.wbmpType;
this.width=$I$(3).readMultiByteInteger$javax_imageio_stream_ImageInputStream(this.iis);
this.metadata.width=this.width;
this.height=$I$(3).readMultiByteInteger$javax_imageio_stream_ImageInputStream(this.iis);
this.metadata.height=this.height;
this.gotHeader=true;
});

Clazz.newMeth(C$, 'getImageTypes$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
var bi=Clazz.new_($I$(4,1).c$$I$I$I,[1, 1, 12]);
var list=Clazz.new_($I$(5,1).c$$I,[1]);
list.add$O(Clazz.new_($I$(6,1).c$$java_awt_image_RenderedImage,[bi]));
return list.iterator$();
});

Clazz.newMeth(C$, 'getDefaultReadParam$',  function () {
return Clazz.new_($I$(7,1));
});

Clazz.newMeth(C$, 'getImageMetadata$I',  function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
if (this.metadata == null ) {
this.readHeader$();
}return this.metadata;
});

Clazz.newMeth(C$, 'getStreamMetadata$',  function () {
return null;
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("WBMPImageReader1")]);
}p$1.checkIndex$I.apply(this, [imageIndex]);
this.clearAbortRequest$();
this.processImageStarted$I(imageIndex);
if (param == null ) param=this.getDefaultReadParam$();
this.readHeader$();
var sourceRegion=Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, 0, 0]);
var destinationRegion=Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, 0, 0]);
$I$(9,"computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle",[param, this.width, this.height, param.getDestination$(), sourceRegion, destinationRegion]);
var scaleX=param.getSourceXSubsampling$();
var scaleY=param.getSourceYSubsampling$();
var xOffset=param.getSubsamplingXOffset$();
var yOffset=param.getSubsamplingYOffset$();
var bi=param.getDestination$();
if (bi == null ) bi=Clazz.new_($I$(4,1).c$$I$I$I,[destinationRegion.x + destinationRegion.width, destinationRegion.y + destinationRegion.height, 12]);
var noTransform=destinationRegion.equals$O(Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, this.width, this.height])) && destinationRegion.equals$O(Clazz.new_([0, 0, bi.getWidth$(), bi.getHeight$()],$I$(8,1).c$$I$I$I$I)) ;
var tile=bi.getWritableTile$I$I(0, 0);
var sm=bi.getSampleModel$();
if (noTransform) {
if (this.abortRequested$()) {
this.processReadAborted$();
return bi;
}this.iis.read$BA$I$I((tile.getDataBuffer$()).getData$(), 0, this.height * sm.getScanlineStride$());
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, 0, this.width, this.height, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0);
} else {
var len=((this.width + 7)/8|0);
var buf=Clazz.array(Byte.TYPE, [len]);
var data=(tile.getDataBuffer$()).getData$();
var lineStride=sm.getScanlineStride$();
this.iis.skipBytes$I(len * sourceRegion.y);
var skipLength=len * (scaleY - 1);
var srcOff=Clazz.array(Integer.TYPE, [destinationRegion.width]);
var destOff=Clazz.array(Integer.TYPE, [destinationRegion.width]);
var srcPos=Clazz.array(Integer.TYPE, [destinationRegion.width]);
var destPos=Clazz.array(Integer.TYPE, [destinationRegion.width]);
for (var i=destinationRegion.x, x=sourceRegion.x, j=0; i < destinationRegion.x + destinationRegion.width; i++, j++, x+=scaleX) {
srcPos[j]=x >> 3;
srcOff[j]=7 - (x & 7);
destPos[j]=i >> 3;
destOff[j]=7 - (i & 7);
}
for (var j=0, y=sourceRegion.y, k=destinationRegion.y * lineStride; j < destinationRegion.height; j++, y+=scaleY) {
if (this.abortRequested$()) break;
this.iis.read$BA$I$I(buf, 0, len);
for (var i=0; i < destinationRegion.width; i++) {
var v=(buf[srcPos[i]] >> srcOff[i]) & 1;
data[$k$=k + destPos[i]]=(data[$k$]|(v << destOff[i])|0);
}
k+=lineStride;
this.iis.skipBytes$I(skipLength);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, j, destinationRegion.width, 1, 1, 1, Clazz.array(Integer.TYPE, -1, [0]));
this.processImageProgress$F(100.0 * j / destinationRegion.height);
}
}if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return bi;
});

Clazz.newMeth(C$, 'canReadRaster$',  function () {
return true;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
var bi=this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
return bi.getData$();
});

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.iis=null;
this.gotHeader=false;
});

Clazz.newMeth(C$, 'isValidWbmpType$I',  function (type) {
return type == 0;
});
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'com.sun.imageio.plugins.jpeg.JPEG','javax.imageio.stream.ImageOutputStream','com.sun.imageio.plugins.jpeg.JPEGImageWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$readerSpiNames','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Oracle Corporation", "0.5", $I$(1).names, $I$(1).suffixes, $I$(1).MIMETypes, "com.sun.imageio.plugins.jpeg.JPEGImageWriter", Clazz.array(Class, -1, [Clazz.getClass($I$(2),['flushBefore$J','write$I','write$BA','write$BA$I$I','writeBit$I','writeBits$J$I','writeBoolean$Z','writeByte$I','writeBytes$S','writeChar$I','writeChars$S','writeChars$CA$I$I','writeDouble$D','writeDoubles$DA$I$I','writeFloat$F','writeFloats$FA$I$I','writeInt$I','writeInts$IA$I$I','writeLong$J','writeLongs$JA$I$I','writeShort$I','writeShorts$HA$I$I','writeUTF$S'])]), C$.$readerSpiNames, true, "javax_imageio_jpeg_stream_1.0", "com.sun.imageio.plugins.jpeg.JPEGStreamMetadataFormat", null, null, true, "javax_imageio_jpeg_image_1.0", "com.sun.imageio.plugins.jpeg.JPEGImageMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Standard JPEG Image Writer";
});

Clazz.newMeth(C$, 'isFormatLossless$',  function () {
return false;
});

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier',  function (type) {
var sampleModel=type.getSampleModel$();
var sampleSize=sampleModel.getSampleSize$();
var bitDepth=sampleSize[0];
for (var i=1; i < sampleSize.length; i++) {
if (sampleSize[i] > bitDepth) {
bitDepth=sampleSize[i];
}}
if (bitDepth < 1 || bitDepth > 8 ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'createWriterInstance$O',  function (extension) {
return Clazz.new_($I$(3,1).c$$javax_imageio_spi_ImageWriterSpi,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$readerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.jpeg.JPEGImageReaderSpi"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

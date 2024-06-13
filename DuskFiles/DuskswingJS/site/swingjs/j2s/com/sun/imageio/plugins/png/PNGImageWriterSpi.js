(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),I$=[[0,'javax.imageio.stream.ImageOutputStream','com.sun.imageio.plugins.png.PNGImageWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PNGImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$names','String[]','+$suffixes','+$MIMETypes','+$readerSpiNames']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Oracle Corporation", "1.0", C$.$names, C$.$suffixes, C$.$MIMETypes, "com.sun.imageio.plugins.png.PNGImageWriter", Clazz.array(Class, -1, [Clazz.getClass($I$(1),['flushBefore$J','write$I','write$BA','write$BA$I$I','writeBit$I','writeBits$J$I','writeBoolean$Z','writeByte$I','writeBytes$S','writeChar$I','writeChars$S','writeChars$CA$I$I','writeDouble$D','writeDoubles$DA$I$I','writeFloat$F','writeFloats$FA$I$I','writeInt$I','writeInts$IA$I$I','writeLong$J','writeLongs$JA$I$I','writeShort$I','writeShorts$HA$I$I','writeUTF$S'])]), C$.$readerSpiNames, false, null, null, null, null, true, "javax_imageio_png_1.0", "com.sun.imageio.plugins.png.PNGMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier',  function (type) {
var sampleModel=type.getSampleModel$();
var colorModel=type.getColorModel$();
var sampleSize=sampleModel.getSampleSize$();
var bitDepth=sampleSize[0];
for (var i=1; i < sampleSize.length; i++) {
if (sampleSize[i] > bitDepth) {
bitDepth=sampleSize[i];
}}
if (bitDepth < 1 || bitDepth > 16 ) {
return false;
}var numBands=sampleModel.getNumBands$();
if (numBands < 1 || numBands > 4 ) {
return false;
}var hasAlpha=colorModel.hasAlpha$();
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
return true;
}if ((numBands == 1 || numBands == 3 ) && hasAlpha ) {
return false;
}if ((numBands == 2 || numBands == 4 ) && !hasAlpha ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Standard PNG image writer";
});

Clazz.newMeth(C$, 'createWriterInstance$O',  function (extension) {
return Clazz.new_($I$(2,1).c$$javax_imageio_spi_ImageWriterSpi,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$names=Clazz.array(String, -1, ["png", "PNG"]);
C$.$suffixes=Clazz.array(String, -1, ["png"]);
C$.$MIMETypes=Clazz.array(String, -1, ["image/png", "image/x-png"]);
C$.$readerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.png.PNGImageReaderSpi"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

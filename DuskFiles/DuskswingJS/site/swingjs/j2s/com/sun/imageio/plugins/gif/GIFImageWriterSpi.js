(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),I$=[[0,'javax.imageio.stream.ImageOutputStream','com.sun.imageio.plugins.common.PaletteBuilder','com.sun.imageio.plugins.gif.GIFImageWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$names','String[]','+$suffixes','+$MIMETypes','+$readerSpiNames']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Oracle Corporation", "1.0", C$.$names, C$.$suffixes, C$.$MIMETypes, "com.sun.imageio.plugins.gif.GIFImageWriter", Clazz.array(Class, -1, [Clazz.getClass($I$(1),['flushBefore$J','write$I','write$BA','write$BA$I$I','writeBit$I','writeBits$J$I','writeBoolean$Z','writeByte$I','writeBytes$S','writeChar$I','writeChars$S','writeChars$CA$I$I','writeDouble$D','writeDoubles$DA$I$I','writeFloat$F','writeFloats$FA$I$I','writeInt$I','writeInts$IA$I$I','writeLong$J','writeLongs$JA$I$I','writeShort$I','writeShorts$HA$I$I','writeUTF$S'])]), C$.$readerSpiNames, true, "javax_imageio_gif_stream_1.0", "com.sun.imageio.plugins.gif.GIFStreamMetadataFormat", null, null, true, "javax_imageio_gif_image_1.0", "com.sun.imageio.plugins.gif.GIFImageMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier',  function (type) {
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type == null!"]);
}var sm=type.getSampleModel$();
var cm=type.getColorModel$();
var canEncode=sm.getNumBands$() == 1 && sm.getSampleSize$I(0) <= 8  && sm.getWidth$() <= 65535  && sm.getHeight$() <= 65535  && (cm == null  || cm.getComponentSize$()[0] <= 8 ) ;
if (canEncode) {
return true;
} else {
return $I$(2).canCreatePalette$javax_imageio_ImageTypeSpecifier(type);
}});

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Standard GIF image writer";
});

Clazz.newMeth(C$, 'createWriterInstance$O',  function (extension) {
return Clazz.new_($I$(3,1).c$$com_sun_imageio_plugins_gif_GIFImageWriterSpi,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$names=Clazz.array(String, -1, ["gif", "GIF"]);
C$.$suffixes=Clazz.array(String, -1, ["gif"]);
C$.$MIMETypes=Clazz.array(String, -1, ["image/gif"]);
C$.$readerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.gif.GIFImageReaderSpi"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

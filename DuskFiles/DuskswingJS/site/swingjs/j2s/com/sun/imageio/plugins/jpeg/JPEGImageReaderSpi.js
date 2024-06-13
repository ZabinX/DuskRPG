(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'com.sun.imageio.plugins.jpeg.JPEG','javax.imageio.stream.ImageInputStream','com.sun.imageio.plugins.jpeg.JPEGImageReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGImageReaderSpi", null, 'javax.imageio.spi.ImageReaderSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$writerSpiNames','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Oracle Corporation", "0.5", $I$(1).names, $I$(1).suffixes, $I$(1).MIMETypes, "com.sun.imageio.plugins.jpeg.JPEGImageReader", Clazz.array(Class, -1, [Clazz.getClass($I$(2),['close$','flush$','flushBefore$J','getBitOffset$','getByteOrder$','getFlushedPosition$','getStreamPosition$','isCached$','isCachedFile$','isCachedMemory$','length$','mark$','read$','read$BA','read$BA$I$I','readBit$','readBits$I','readBoolean$','readByte$','readBytes$javax_imageio_stream_IIOByteBuffer$I','readChar$','readDouble$','readFloat$','readFully$BA$I$I','readFully$BA','readFully$HA$I$I','readFully$CA$I$I','readFully$IA$I$I','readFully$JA$I$I','readFully$FA$I$I','readFully$DA$I$I','readInt$','readLine$','readLong$','readShort$','readUTF$','readUnsignedByte$','readUnsignedInt$','readUnsignedShort$','reset$','seek$J','setBitOffset$I','setByteOrder$java_nio_ByteOrder','skipBytes$I','skipBytes$J'])]), C$.$writerSpiNames, true, "javax_imageio_jpeg_stream_1.0", "com.sun.imageio.plugins.jpeg.JPEGStreamMetadataFormat", null, null, true, "javax_imageio_jpeg_image_1.0", "com.sun.imageio.plugins.jpeg.JPEGImageMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Standard JPEG Image Reader";
});

Clazz.newMeth(C$, 'canDecodeInput$O',  function (source) {
if (!(Clazz.instanceOf(source, "javax.imageio.stream.ImageInputStream"))) {
return false;
}var iis=source;
iis.mark$();
var byte1=iis.read$();
var byte2=iis.read$();
iis.reset$();
if ((byte1 == 255) && (byte2 == 216) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'createReaderInstance$O',  function (extension) {
return Clazz.new_($I$(3,1).c$$javax_imageio_spi_ImageReaderSpi,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$writerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.jpeg.JPEGImageWriterSpi"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

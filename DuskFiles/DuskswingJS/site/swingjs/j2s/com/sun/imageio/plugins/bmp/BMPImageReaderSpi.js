(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.bmp"),I$=[[0,'javax.imageio.stream.ImageInputStream','com.sun.imageio.plugins.bmp.BMPImageReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BMPImageReaderSpi", null, 'javax.imageio.spi.ImageReaderSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
},1);

C$.$fields$=[['Z',['registered']]
,['O',['$writerSpiNames','String[]','+formatNames','+entensions','+mimeType']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Oracle Corporation", "1.0", C$.formatNames, C$.entensions, C$.mimeType, "com.sun.imageio.plugins.bmp.BMPImageReader", Clazz.array(Class, -1, [Clazz.getClass($I$(1),['close$','flush$','flushBefore$J','getBitOffset$','getByteOrder$','getFlushedPosition$','getStreamPosition$','isCached$','isCachedFile$','isCachedMemory$','length$','mark$','read$','read$BA','read$BA$I$I','readBit$','readBits$I','readBoolean$','readByte$','readBytes$javax_imageio_stream_IIOByteBuffer$I','readChar$','readDouble$','readFloat$','readFully$BA$I$I','readFully$BA','readFully$HA$I$I','readFully$CA$I$I','readFully$IA$I$I','readFully$JA$I$I','readFully$FA$I$I','readFully$DA$I$I','readInt$','readLine$','readLong$','readShort$','readUTF$','readUnsignedByte$','readUnsignedInt$','readUnsignedShort$','reset$','seek$J','setBitOffset$I','setByteOrder$java_nio_ByteOrder','skipBytes$I','skipBytes$J'])]), C$.$writerSpiNames, false, null, null, null, null, true, "javax_imageio_bmp_1.0", "com.sun.imageio.plugins.bmp.BMPMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class',  function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
});

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Standard BMP Image Reader";
});

Clazz.newMeth(C$, 'canDecodeInput$O',  function (source) {
if (!(Clazz.instanceOf(source, "javax.imageio.stream.ImageInputStream"))) {
return false;
}var stream=source;
var b=Clazz.array(Byte.TYPE, [2]);
stream.mark$();
stream.readFully$BA(b);
stream.reset$();
return (b[0] == 66) && (b[1] == 77) ;
});

Clazz.newMeth(C$, 'createReaderInstance$O',  function (extension) {
return Clazz.new_($I$(2,1).c$$javax_imageio_spi_ImageReaderSpi,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$writerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.bmp.BMPImageWriterSpi"]);
C$.formatNames=Clazz.array(String, -1, ["bmp", "BMP"]);
C$.entensions=Clazz.array(String, -1, ["bmp"]);
C$.mimeType=Clazz.array(String, -1, ["image/bmp"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

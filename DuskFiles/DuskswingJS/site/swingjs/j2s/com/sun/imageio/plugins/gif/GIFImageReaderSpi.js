(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),I$=[[0,'javax.imageio.stream.ImageInputStream','com.sun.imageio.plugins.gif.GIFImageReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFImageReaderSpi", null, 'javax.imageio.spi.ImageReaderSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$names','String[]','+$suffixes','+$MIMETypes','+$writerSpiNames']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Oracle Corporation", "1.0", C$.$names, C$.$suffixes, C$.$MIMETypes, "com.sun.imageio.plugins.gif.GIFImageReader", Clazz.array(Class, -1, [Clazz.getClass($I$(1),['close$','flush$','flushBefore$J','getBitOffset$','getByteOrder$','getFlushedPosition$','getStreamPosition$','isCached$','isCachedFile$','isCachedMemory$','length$','mark$','read$','read$BA','read$BA$I$I','readBit$','readBits$I','readBoolean$','readByte$','readBytes$javax_imageio_stream_IIOByteBuffer$I','readChar$','readDouble$','readFloat$','readFully$BA$I$I','readFully$BA','readFully$HA$I$I','readFully$CA$I$I','readFully$IA$I$I','readFully$JA$I$I','readFully$FA$I$I','readFully$DA$I$I','readInt$','readLine$','readLong$','readShort$','readUTF$','readUnsignedByte$','readUnsignedInt$','readUnsignedShort$','reset$','seek$J','setBitOffset$I','setByteOrder$java_nio_ByteOrder','skipBytes$I','skipBytes$J'])]), C$.$writerSpiNames, true, "javax_imageio_gif_stream_1.0", "com.sun.imageio.plugins.gif.GIFStreamMetadataFormat", null, null, true, "javax_imageio_gif_image_1.0", "com.sun.imageio.plugins.gif.GIFImageMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Standard GIF image reader";
});

Clazz.newMeth(C$, 'canDecodeInput$O',  function (input) {
if (!(Clazz.instanceOf(input, "javax.imageio.stream.ImageInputStream"))) {
return false;
}var stream=input;
var b=Clazz.array(Byte.TYPE, [6]);
stream.mark$();
stream.readFully$BA(b);
stream.reset$();
return b[0] == 71  && b[1] == 73   && b[2] == 70   && b[3] == 56   && (b[4] == 55  || b[4] == 57  )  && b[5] == 97  ;
});

Clazz.newMeth(C$, 'createReaderInstance$O',  function (extension) {
return Clazz.new_($I$(2,1).c$$javax_imageio_spi_ImageReaderSpi,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$names=Clazz.array(String, -1, ["gif", "GIF"]);
C$.$suffixes=Clazz.array(String, -1, ["gif"]);
C$.$MIMETypes=Clazz.array(String, -1, ["image/gif"]);
C$.$writerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.gif.GIFImageWriterSpi"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

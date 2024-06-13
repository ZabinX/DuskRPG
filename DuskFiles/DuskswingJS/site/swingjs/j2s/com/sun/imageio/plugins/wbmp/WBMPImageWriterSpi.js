(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.wbmp"),I$=[[0,'javax.imageio.stream.ImageOutputStream','com.sun.imageio.plugins.wbmp.WBMPImageWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WBMPImageWriterSpi", null, 'javax.imageio.spi.ImageWriterSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.registered=false;
},1);

C$.$fields$=[['Z',['registered']]
,['O',['$readerSpiNames','String[]','+formatNames','+entensions','+mimeType']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$SA$SA$SA$S$ClassA$SA$Z$S$S$SA$SA$Z$S$S$SA$SA.apply(this,["Oracle Corporation", "1.0", C$.formatNames, C$.entensions, C$.mimeType, "com.sun.imageio.plugins.wbmp.WBMPImageWriter", Clazz.array(Class, -1, [Clazz.getClass($I$(1),['flushBefore$J','write$I','write$BA','write$BA$I$I','writeBit$I','writeBits$J$I','writeBoolean$Z','writeByte$I','writeBytes$S','writeChar$I','writeChars$S','writeChars$CA$I$I','writeDouble$D','writeDoubles$DA$I$I','writeFloat$F','writeFloats$FA$I$I','writeInt$I','writeInts$IA$I$I','writeLong$J','writeLongs$JA$I$I','writeShort$I','writeShorts$HA$I$I','writeUTF$S'])]), C$.$readerSpiNames, true, null, null, null, null, true, null, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Standard WBMP Image Writer";
});

Clazz.newMeth(C$, 'onRegistration$javax_imageio_spi_ServiceRegistry$Class',  function (registry, category) {
if (this.registered) {
return;
}this.registered=true;
});

Clazz.newMeth(C$, 'canEncodeImage$javax_imageio_ImageTypeSpecifier',  function (type) {
var sm=type.getSampleModel$();
if (!(Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel"))) return false;
if (sm.getSampleSize$I(0) != 1) return false;
return true;
});

Clazz.newMeth(C$, 'createWriterInstance$O',  function (extension) {
return Clazz.new_($I$(2,1).c$$javax_imageio_spi_ImageWriterSpi,[this]);
});

C$.$static$=function(){C$.$static$=0;
C$.$readerSpiNames=Clazz.array(String, -1, ["com.sun.imageio.plugins.wbmp.WBMPImageReaderSpi"]);
C$.formatNames=Clazz.array(String, -1, ["wbmp", "WBMP"]);
C$.entensions=Clazz.array(String, -1, ["wbmp"]);
C$.mimeType=Clazz.array(String, -1, ["image/vnd.wap.wbmp"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

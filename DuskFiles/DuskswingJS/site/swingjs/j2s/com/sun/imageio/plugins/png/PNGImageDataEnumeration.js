(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),p$1={},I$=[[0,'com.sun.imageio.plugins.common.SubImageInputStream','com.sun.imageio.plugins.common.InputStreamAdapter','java.awt.Point','com.sun.imageio.plugins.png.PNGMetadata','java.io.ByteArrayOutputStream','java.io.ByteArrayInputStream','java.util.zip.InflaterInputStream','StringBuilder','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.image.DataBufferUShort','com.sun.imageio.plugins.common.ReaderUtil','com.sun.imageio.plugins.png.PNGImageDataEnumeration','java.io.SequenceInputStream','java.util.zip.Inflater','java.io.BufferedInputStream','java.io.DataInputStream','javax.imageio.ImageReader','java.awt.Rectangle','java.util.ArrayList','javax.imageio.ImageTypeSpecifier','java.awt.color.ColorSpace','java.util.Arrays','javax.imageio.ImageReadParam']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PNGImageDataEnumeration", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.firstTime=true;
},1);

C$.$fields$=[['Z',['firstTime'],'I',['length'],'O',['stream','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream',  function (stream) {
;C$.$init$.apply(this);
this.stream=stream;
this.length=stream.readInt$();
var type=stream.readInt$();
}, 1);

Clazz.newMeth(C$, 'nextElement$',  function () {
try {
this.firstTime=false;
var iis=Clazz.new_($I$(1,1).c$$javax_imageio_stream_ImageInputStream$I,[this.stream, this.length]);
return Clazz.new_($I$(2,1).c$$javax_imageio_stream_ImageInputStream,[iis]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.firstTime) {
return true;
}try {
var crc=this.stream.readInt$();
this.length=this.stream.readInt$();
var type=this.stream.readInt$();
if (type == 1229209940) {
return true;
} else {
return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

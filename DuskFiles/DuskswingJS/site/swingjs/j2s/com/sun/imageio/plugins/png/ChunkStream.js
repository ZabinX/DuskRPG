(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),p$1={},p$2={},I$=[[0,'com.sun.imageio.plugins.png.CRC','java.util.zip.Deflater','com.sun.imageio.plugins.png.RowFilter','com.sun.imageio.plugins.png.PNGImageWriteParam','com.sun.imageio.plugins.png.PNGMetadata','com.sun.imageio.plugins.png.ChunkStream','java.io.ByteArrayOutputStream','java.util.zip.DeflaterOutputStream','java.awt.Rectangle','com.sun.imageio.plugins.png.IDATOutputStream','com.sun.imageio.plugins.png.PNGImageReader','javax.imageio.ImageTypeSpecifier']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChunkStream", null, 'javax.imageio.stream.ImageOutputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.crc=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['J',['startPos'],'O',['stream','javax.imageio.stream.ImageOutputStream','crc','com.sun.imageio.plugins.png.CRC']]]

Clazz.newMeth(C$, 'c$$I$javax_imageio_stream_ImageOutputStream',  function (type, stream) {
Clazz.super_(C$, this);
this.stream=stream;
this.startPos=stream.getStreamPosition$();
stream.writeInt$I(-1);
this.writeInt$I(type);
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Method not available"]);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Method not available"]);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
this.crc.update$BA$I$I(b, off, len);
this.stream.write$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'write$I',  function (b) {
this.crc.update$I(b);
this.stream.write$I(b);
});

Clazz.newMeth(C$, 'finish$',  function () {
this.stream.writeInt$I(this.crc.getValue$());
var pos=this.stream.getStreamPosition$();
this.stream.seek$J(this.startPos);
this.stream.writeInt$I(Long.$ival((Long.$sub(pos,this.startPos))) - 12);
this.stream.seek$J(pos);
this.stream.flushBefore$J(pos);
});

Clazz.newMeth(C$, 'finalize$',  function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

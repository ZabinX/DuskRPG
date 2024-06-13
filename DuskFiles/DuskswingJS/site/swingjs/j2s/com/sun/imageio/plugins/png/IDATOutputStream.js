(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),p$1={},p$2={},I$=[[0,'com.sun.imageio.plugins.png.CRC','java.util.zip.Deflater','com.sun.imageio.plugins.png.RowFilter','com.sun.imageio.plugins.png.PNGImageWriteParam','com.sun.imageio.plugins.png.PNGMetadata','com.sun.imageio.plugins.png.ChunkStream','java.io.ByteArrayOutputStream','java.util.zip.DeflaterOutputStream','java.awt.Rectangle','com.sun.imageio.plugins.png.IDATOutputStream','com.sun.imageio.plugins.png.PNGImageReader','javax.imageio.ImageTypeSpecifier']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IDATOutputStream", null, 'javax.imageio.stream.ImageOutputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.crc=Clazz.new_($I$(1,1));
this.def=Clazz.new_($I$(2,1).c$$I,[9]);
this.buf=Clazz.array(Byte.TYPE, [512]);
},1);

C$.$fields$=[['I',['chunkLength','bytesRemaining'],'J',['startPos'],'O',['stream','javax.imageio.stream.ImageOutputStream','crc','com.sun.imageio.plugins.png.CRC','def','java.util.zip.Deflater','buf','byte[]']]
,['O',['chunkType','byte[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageOutputStream$I',  function (stream, chunkLength) {
Clazz.super_(C$, this);
this.stream=stream;
this.chunkLength=chunkLength;
p$1.startChunk.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'startChunk',  function () {
this.crc.reset$();
this.startPos=this.stream.getStreamPosition$();
this.stream.writeInt$I(-1);
this.crc.update$BA$I$I(C$.chunkType, 0, 4);
this.stream.write$BA$I$I(C$.chunkType, 0, 4);
this.bytesRemaining=this.chunkLength;
}, p$1);

Clazz.newMeth(C$, 'finishChunk',  function () {
this.stream.writeInt$I(this.crc.getValue$());
var pos=this.stream.getStreamPosition$();
this.stream.seek$J(this.startPos);
this.stream.writeInt$I(Long.$ival((Long.$sub(pos,this.startPos))) - 12);
this.stream.seek$J(pos);
this.stream.flushBefore$J(pos);
}, p$1);

Clazz.newMeth(C$, 'read$',  function () {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Method not available"]);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Method not available"]);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if (len == 0) {
return;
}if (!this.def.finished$()) {
this.def.setInput$BA$I$I(b, off, len);
while (!this.def.needsInput$()){
this.deflate$();
}
}});

Clazz.newMeth(C$, 'deflate$',  function () {
var len=this.def.deflate$BA$I$I(this.buf, 0, this.buf.length);
var off=0;
while (len > 0){
if (this.bytesRemaining == 0) {
p$1.finishChunk.apply(this, []);
p$1.startChunk.apply(this, []);
}var nbytes=Math.min(len, this.bytesRemaining);
this.crc.update$BA$I$I(this.buf, off, nbytes);
this.stream.write$BA$I$I(this.buf, off, nbytes);
off+=nbytes;
len-=nbytes;
this.bytesRemaining-=nbytes;
}
});

Clazz.newMeth(C$, 'write$I',  function (b) {
var wbuf=Clazz.array(Byte.TYPE, [1]);
wbuf[0]=(b|0);
this.write$BA$I$I(wbuf, 0, 1);
});

Clazz.newMeth(C$, 'finish$',  function () {
try {
if (!this.def.finished$()) {
this.def.finish$();
while (!this.def.finished$()){
this.deflate$();
}
}p$1.finishChunk.apply(this, []);
} finally {
this.def.end$();
}
});

Clazz.newMeth(C$, 'finalize$',  function () {
});

C$.$static$=function(){C$.$static$=0;
C$.chunkType=Clazz.array(Byte.TYPE, -1, [73, 68, 65, 84]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

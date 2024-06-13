(function(){var P$=Clazz.newPackage("javax.imageio.stream"),I$=[[0,'java.nio.file.Files','java.nio.file.attribute.FileAttribute','java.io.RandomAccessFile','com.sun.imageio.stream.StreamCloser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileCacheImageOutputStream", null, 'javax.imageio.stream.ImageOutputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxStreamPos=0;
},1);

C$.$fields$=[['J',['maxStreamPos'],'O',['stream','java.io.OutputStream','cacheFile','java.io.File','cache','java.io.RandomAccessFile','closeAction','com.sun.imageio.stream.StreamCloser.CloseAction']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_io_File',  function (stream, cacheDir) {
Clazz.super_(C$, this);
if (stream == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["stream == null!"]);
}if ((cacheDir != null ) && !(cacheDir.isDirectory$()) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a directory!"]);
}this.stream=stream;
if (cacheDir == null ) this.cacheFile=$I$(1,"createTempFile$S$S$java_nio_file_attribute_FileAttributeA",["imageio", ".tmp", Clazz.array($I$(2), -1, [])]).toFile$();
 else this.cacheFile=$I$(1,"createTempFile$java_nio_file_Path$S$S$java_nio_file_attribute_FileAttributeA",[cacheDir.toPath$(), "imageio", ".tmp", Clazz.array($I$(2), -1, [])]).toFile$();
this.cache=Clazz.new_($I$(3,1).c$$java_io_File$S,[this.cacheFile, "rw"]);
this.closeAction=$I$(4).createCloseAction$javax_imageio_stream_ImageInputStream(this);
$I$(4).addToQueue$com_sun_imageio_stream_StreamCloser_CloseAction(this.closeAction);
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
this.checkClosed$();
this.bitOffset=0;
var val=this.cache.read$();
if (val != -1) {
(this.streamPos=Long.$inc(this.streamPos,1));
}return val;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
this.checkClosed$();
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["b == null!"]);
}if (off < 0 || len < 0  || off + len > b.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off+len > b.length || off+len < 0!"]);
}this.bitOffset=0;
if (len == 0) {
return 0;
}var nbytes=this.cache.read$BA$I$I(b, off, len);
if (nbytes != -1) {
(this.streamPos=Long.$add(this.streamPos,(nbytes)));
}return nbytes;
});

Clazz.newMeth(C$, 'write$I',  function (b) {
this.flushBits$();
this.cache.write$I(b);
(this.streamPos=Long.$inc(this.streamPos,1));
this.maxStreamPos=Math.max$J$J(this.maxStreamPos, this.streamPos);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
this.flushBits$();
this.cache.write$BA$I$I(b, off, len);
(this.streamPos=Long.$add(this.streamPos,(len)));
this.maxStreamPos=Math.max$J$J(this.maxStreamPos, this.streamPos);
});

Clazz.newMeth(C$, 'length$',  function () {
try {
this.checkClosed$();
return this.cache.length$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return (Long.$neg(1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'seek$J',  function (pos) {
this.checkClosed$();
if (Long.$lt(pos,this.flushedPos )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}this.cache.seek$J(pos);
this.streamPos=this.cache.getFilePointer$();
this.maxStreamPos=Math.max$J$J(this.maxStreamPos, this.streamPos);
this.bitOffset=0;
});

Clazz.newMeth(C$, 'isCached$',  function () {
return true;
});

Clazz.newMeth(C$, 'isCachedFile$',  function () {
return true;
});

Clazz.newMeth(C$, 'isCachedMemory$',  function () {
return false;
});

Clazz.newMeth(C$, 'close$',  function () {
this.maxStreamPos=this.cache.length$();
this.seek$J(this.maxStreamPos);
this.flushBefore$J(this.maxStreamPos);
C$.superclazz.prototype.close$.apply(this, []);
this.cache.close$();
this.cache=null;
this.cacheFile.delete$();
this.cacheFile=null;
this.stream.flush$();
this.stream=null;
$I$(4).removeFromQueue$com_sun_imageio_stream_StreamCloser_CloseAction(this.closeAction);
});

Clazz.newMeth(C$, 'flushBefore$J',  function (pos) {
var oFlushedPos=this.flushedPos;
C$.superclazz.prototype.flushBefore$J.apply(this, [pos]);
var flushBytes=Long.$sub(this.flushedPos,oFlushedPos);
if (Long.$gt(flushBytes,0 )) {
var bufLen=512;
var buf=Clazz.array(Byte.TYPE, [bufLen]);
this.cache.seek$J(oFlushedPos);
while (Long.$gt(flushBytes,0 )){
var len=Long.$ival(Math.min$J$J(flushBytes, bufLen));
this.cache.readFully$BA$I$I(buf, 0, len);
this.stream.write$BA$I$I(buf, 0, len);
(flushBytes=Long.$sub(flushBytes,(len)));
}
this.stream.flush$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

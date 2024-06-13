(function(){var P$=Clazz.newPackage("javax.imageio.stream"),p$1={},I$=[[0,'java.nio.file.Files','java.nio.file.attribute.FileAttribute','java.io.RandomAccessFile','com.sun.imageio.stream.StreamCloser',['javax.imageio.stream.FileCacheImageInputStream','.StreamDisposerRecord'],'sun.java2d.Disposer','com.sun.imageio.stream.StreamFinalizer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileCacheImageInputStream", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.imageio.stream.ImageInputStreamImpl');
C$.$classes$=[['StreamDisposerRecord',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buf=Clazz.array(Byte.TYPE, [1024]);
this.length=0;
this.foundEOF=false;
},1);

C$.$fields$=[['Z',['foundEOF'],'J',['length'],'O',['stream','java.io.InputStream','cacheFile','java.io.File','cache','java.io.RandomAccessFile','buf','byte[]','disposerReferent','java.lang.Object','disposerRecord','sun.java2d.DisposerRecord','closeAction','com.sun.imageio.stream.StreamCloser.CloseAction']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_io_File',  function (stream, cacheDir) {
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
this.disposerRecord=Clazz.new_($I$(5,1).c$$java_io_File$java_io_RandomAccessFile,[this.cacheFile, this.cache]);
if (this.getClass$() === Clazz.getClass(C$) ) {
this.disposerReferent= Clazz.new_();
$I$(6).addRecord$O$sun_java2d_DisposerRecord(this.disposerReferent, this.disposerRecord);
} else {
this.disposerReferent=Clazz.new_($I$(7,1).c$$javax_imageio_stream_ImageInputStream,[this]);
}}, 1);

Clazz.newMeth(C$, 'readUntil$J',  function (pos) {
if (Long.$lt(pos,this.length )) {
return pos;
}if (this.foundEOF) {
return this.length;
}var len=Long.$sub(pos,this.length);
this.cache.seek$J(this.length);
while (Long.$gt(len,0 )){
var nbytes=this.stream.read$BA$I$I(this.buf, 0, Long.$ival(Math.min$J$J(len, 1024)));
if (nbytes == -1) {
this.foundEOF=true;
return this.length;
}this.cache.write$BA$I$I(this.buf, 0, nbytes);
(len=Long.$sub(len,(nbytes)));
(this.length=Long.$add(this.length,(nbytes)));
}
return pos;
}, p$1);

Clazz.newMeth(C$, 'read$',  function () {
this.checkClosed$();
this.bitOffset=0;
var next=Long.$add(this.streamPos,1);
var pos=p$1.readUntil$J.apply(this, [next]);
if (Long.$ge(pos,next )) {
this.cache.seek$J(([this.streamPos,this.streamPos=Long.$inc(this.streamPos,1)][0]));
return this.cache.read$();
} else {
return -1;
}});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
this.checkClosed$();
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["b == null!"]);
}if (off < 0 || len < 0  || off + len > b.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off+len > b.length || off+len < 0!"]);
}this.bitOffset=0;
if (len == 0) {
return 0;
}var pos=p$1.readUntil$J.apply(this, [Long.$add(this.streamPos,len)]);
len=Long.$ival(Math.min$J$J(len, Long.$sub(pos,this.streamPos)));
if (len > 0) {
this.cache.seek$J(this.streamPos);
this.cache.readFully$BA$I$I(b, off, len);
(this.streamPos=Long.$add(this.streamPos,(len)));
return len;
} else {
return -1;
}});

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
C$.superclazz.prototype.close$.apply(this, []);
this.disposerRecord.dispose$();
this.stream=null;
this.cache=null;
this.cacheFile=null;
$I$(4).removeFromQueue$com_sun_imageio_stream_StreamCloser_CloseAction(this.closeAction);
});

Clazz.newMeth(C$, 'finalize$',  function () {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileCacheImageInputStream, "StreamDisposerRecord", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'sun.java2d.DisposerRecord');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cacheFile','java.io.File','cache','java.io.RandomAccessFile']]]

Clazz.newMeth(C$, 'c$$java_io_File$java_io_RandomAccessFile',  function (cacheFile, cache) {
;C$.$init$.apply(this);
this.cacheFile=cacheFile;
this.cache=cache;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.cache != null ) {
try {
this.cache.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
} finally {
this.cache=null;
}
}if (this.cacheFile != null ) {
this.cacheFile.delete$();
this.cacheFile=null;
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

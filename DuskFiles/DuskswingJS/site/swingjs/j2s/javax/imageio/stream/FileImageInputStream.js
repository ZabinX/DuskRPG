(function(){var P$=Clazz.newPackage("javax.imageio.stream"),I$=[[0,'java.io.RandomAccessFile','com.sun.imageio.stream.CloseableDisposerRecord','sun.java2d.Disposer','com.sun.imageio.stream.StreamFinalizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileImageInputStream", null, 'javax.imageio.stream.ImageInputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['raf','java.io.RandomAccessFile','disposerReferent','java.lang.Object','disposerRecord','com.sun.imageio.stream.CloseableDisposerRecord']]]

Clazz.newMeth(C$, 'c$$java_io_File',  function (f) {
C$.c$$java_io_RandomAccessFile.apply(this, [f == null  ? null : Clazz.new_($I$(1,1).c$$java_io_File$S,[f, "r"])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_RandomAccessFile',  function (raf) {
Clazz.super_(C$, this);
if (raf == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["raf == null!"]);
}this.raf=raf;
this.disposerRecord=Clazz.new_($I$(2,1).c$$java_io_Closeable,[raf]);
if (this.getClass$() === Clazz.getClass(C$) ) {
this.disposerReferent= Clazz.new_();
$I$(3).addRecord$O$sun_java2d_DisposerRecord(this.disposerReferent, this.disposerRecord);
} else {
this.disposerReferent=Clazz.new_($I$(4,1).c$$javax_imageio_stream_ImageInputStream,[this]);
}}, 1);

Clazz.newMeth(C$, 'read$',  function () {
this.checkClosed$();
this.bitOffset=0;
var val=this.raf.read$();
if (val != -1) {
(this.streamPos=Long.$inc(this.streamPos,1));
}return val;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
this.checkClosed$();
this.bitOffset=0;
var nbytes=this.raf.read$BA$I$I(b, off, len);
if (nbytes != -1) {
(this.streamPos=Long.$add(this.streamPos,(nbytes)));
}return nbytes;
});

Clazz.newMeth(C$, 'length$',  function () {
try {
this.checkClosed$();
return this.raf.length$();
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
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos < flushedPos!"]);
}this.bitOffset=0;
this.raf.seek$J(pos);
this.streamPos=this.raf.getFilePointer$();
});

Clazz.newMeth(C$, 'close$',  function () {
C$.superclazz.prototype.close$.apply(this, []);
this.disposerRecord.dispose$();
this.raf=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

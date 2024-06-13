(function(){var P$=Clazz.newPackage("javax.imageio.stream"),I$=[[0,'javax.imageio.stream.MemoryCache',['javax.imageio.stream.MemoryCacheImageInputStream','.StreamDisposerRecord'],'sun.java2d.Disposer','com.sun.imageio.stream.StreamFinalizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemoryCacheImageInputStream", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.imageio.stream.ImageInputStreamImpl');
C$.$classes$=[['StreamDisposerRecord',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cache=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['stream','java.io.InputStream','cache','javax.imageio.stream.MemoryCache','disposerReferent','java.lang.Object','disposerRecord','sun.java2d.DisposerRecord']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (stream) {
Clazz.super_(C$, this);
if (stream == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["stream == null!"]);
}this.stream=stream;
this.disposerRecord=Clazz.new_($I$(2,1).c$$javax_imageio_stream_MemoryCache,[this.cache]);
if (this.getClass$() === Clazz.getClass(C$) ) {
this.disposerReferent= Clazz.new_();
$I$(3).addRecord$O$sun_java2d_DisposerRecord(this.disposerReferent, this.disposerRecord);
} else {
this.disposerReferent=Clazz.new_($I$(4,1).c$$javax_imageio_stream_ImageInputStream,[this]);
}}, 1);

Clazz.newMeth(C$, 'read$',  function () {
this.checkClosed$();
this.bitOffset=0;
var pos=this.cache.loadFromStream$java_io_InputStream$J(this.stream, Long.$add(this.streamPos,1));
if (Long.$ge(pos,Long.$add(this.streamPos,1) )) {
return this.cache.read$J(([this.streamPos,this.streamPos=Long.$inc(this.streamPos,1)][0]));
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
}var pos=this.cache.loadFromStream$java_io_InputStream$J(this.stream, Long.$add(this.streamPos,len));
len=Long.$ival((Long.$sub(pos,this.streamPos)));
if (len > 0) {
this.cache.read$BA$I$I$J(b, off, len, this.streamPos);
(this.streamPos=Long.$add(this.streamPos,(len)));
return len;
} else {
return -1;
}});

Clazz.newMeth(C$, 'flushBefore$J',  function (pos) {
C$.superclazz.prototype.flushBefore$J.apply(this, [pos]);
this.cache.disposeBefore$J(pos);
});

Clazz.newMeth(C$, 'isCached$',  function () {
return true;
});

Clazz.newMeth(C$, 'isCachedFile$',  function () {
return false;
});

Clazz.newMeth(C$, 'isCachedMemory$',  function () {
return true;
});

Clazz.newMeth(C$, 'close$',  function () {
C$.superclazz.prototype.close$.apply(this, []);
this.disposerRecord.dispose$();
this.stream=null;
this.cache=null;
});

Clazz.newMeth(C$, 'finalize$',  function () {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MemoryCacheImageInputStream, "StreamDisposerRecord", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'sun.java2d.DisposerRecord');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cache','javax.imageio.stream.MemoryCache']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_MemoryCache',  function (cache) {
;C$.$init$.apply(this);
this.cache=cache;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.cache != null ) {
this.cache.reset$();
this.cache=null;
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.imageio.stream"),I$=[[0,'javax.imageio.stream.MemoryCache']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemoryCacheImageOutputStream", null, 'javax.imageio.stream.ImageOutputStreamImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cache=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['stream','java.io.OutputStream','cache','javax.imageio.stream.MemoryCache']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (stream) {
Clazz.super_(C$, this);
if (stream == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["stream == null!"]);
}this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
this.checkClosed$();
this.bitOffset=0;
var val=this.cache.read$J(this.streamPos);
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
}var bytesLeftInCache=Long.$sub(this.cache.getLength$(),this.streamPos);
if (Long.$le(bytesLeftInCache,0 )) {
return -1;
}len=Long.$ival(Math.min$J$J(bytesLeftInCache, len));
this.cache.read$BA$I$I$J(b, off, len, this.streamPos);
(this.streamPos=Long.$add(this.streamPos,(len)));
return len;
});

Clazz.newMeth(C$, 'write$I',  function (b) {
this.flushBits$();
this.cache.write$I$J(b, this.streamPos);
(this.streamPos=Long.$inc(this.streamPos,1));
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
this.flushBits$();
this.cache.write$BA$I$I$J(b, off, len, this.streamPos);
(this.streamPos=Long.$add(this.streamPos,(len)));
});

Clazz.newMeth(C$, 'length$',  function () {
try {
this.checkClosed$();
return this.cache.getLength$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return (Long.$neg(1));
} else {
throw e;
}
}
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
var length=this.cache.getLength$();
this.seek$J(length);
this.flushBefore$J(length);
C$.superclazz.prototype.close$.apply(this, []);
this.cache.reset$();
this.cache=null;
this.stream=null;
});

Clazz.newMeth(C$, 'flushBefore$J',  function (pos) {
var oFlushedPos=this.flushedPos;
C$.superclazz.prototype.flushBefore$J.apply(this, [pos]);
var flushBytes=Long.$sub(this.flushedPos,oFlushedPos);
this.cache.writeToStream$java_io_OutputStream$J$J(this.stream, oFlushedPos, flushBytes);
this.cache.disposeBefore$J(this.flushedPos);
this.stream.flush$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.imageio.stream"),p$1={},I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemoryCache");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cache=Clazz.new_($I$(1,1));
this.cacheStart=0;
this.length=0;
},1);

C$.$fields$=[['J',['cacheStart','length'],'O',['cache','java.util.ArrayList']]]

Clazz.newMeth(C$, 'getCacheBlock$J',  function (blockNum) {
var blockOffset=Long.$sub(blockNum,this.cacheStart);
if (Long.$gt(blockOffset,2147483647 )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Cache addressing limit exceeded!"]);
}return this.cache.get$I(Long.$ival(blockOffset));
}, p$1);

Clazz.newMeth(C$, 'loadFromStream$java_io_InputStream$J',  function (stream, pos) {
if (Long.$lt(pos,this.length )) {
return pos;
}var offset=Long.$ival((Long.$mod(this.length,8192)));
var buf=null;
var len=Long.$sub(pos,this.length);
if (offset != 0) {
buf=p$1.getCacheBlock$J.apply(this, [Long.$div(this.length,8192)]);
}while (Long.$gt(len,0 )){
if (buf == null ) {
try {
buf=Clazz.array(Byte.TYPE, [8192]);
} catch (e) {
if (Clazz.exceptionOf(e,"OutOfMemoryError")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No memory left for cache!"]);
} else {
throw e;
}
}
offset=0;
}var left=8192 - offset;
var nbytes=Long.$ival(Math.min$J$J(len, left));
nbytes=stream.read$BA$I$I(buf, offset, nbytes);
if (nbytes == -1) {
return this.length;
}if (offset == 0) {
this.cache.add$O(buf);
}(len=Long.$sub(len,(nbytes)));
(this.length=Long.$add(this.length,(nbytes)));
offset+=nbytes;
if (offset >= 8192) {
buf=null;
}}
return pos;
});

Clazz.newMeth(C$, 'writeToStream$java_io_OutputStream$J$J',  function (stream, pos, len) {
if (Long.$gt(Long.$add(pos,len),this.length )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Argument out of cache"]);
}if ((Long.$lt(pos,0 )) || (Long.$lt(len,0 )) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Negative pos or len"]);
}if (Long.$eq(len,0 )) {
return;
}var bufIndex=Long.$div(pos,8192);
if (Long.$lt(bufIndex,this.cacheStart )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos already disposed"]);
}var offset=Long.$ival((Long.$mod(pos,8192)));
var buf=p$1.getCacheBlock$J.apply(this, [([bufIndex,bufIndex=Long.$inc(bufIndex,1)][0])]);
while (Long.$gt(len,0 )){
if (buf == null ) {
buf=p$1.getCacheBlock$J.apply(this, [([bufIndex,bufIndex=Long.$inc(bufIndex,1)][0])]);
offset=0;
}var nbytes=Long.$ival(Math.min$J$J(len, (8192 - offset)));
stream.write$BA$I$I(buf, offset, nbytes);
buf=null;
(len=Long.$sub(len,(nbytes)));
}
});

Clazz.newMeth(C$, 'pad$J',  function (pos) {
var currIndex=Long.$sub(Long.$add(this.cacheStart,this.cache.size$()),1);
var lastIndex=Long.$div(pos,8192);
var numNewBuffers=Long.$sub(lastIndex,currIndex);
for (var i=0; Long.$lt(i,numNewBuffers ); ([i,i=Long.$inc(i,1)][0])) {
try {
this.cache.add$O(Clazz.array(Byte.TYPE, [8192]));
} catch (e) {
if (Clazz.exceptionOf(e,"OutOfMemoryError")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No memory left for cache!"]);
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'write$BA$I$I$J',  function (b, off, len, pos) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["b == null!"]);
}if ((off < 0) || (len < 0) || (Long.$lt(pos,0 )) || (off + len > b.length) || (off + len < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}var lastPos=Long.$sub(Long.$add(pos,len),1);
if (Long.$ge(lastPos,this.length )) {
p$1.pad$J.apply(this, [lastPos]);
this.length=Long.$add(lastPos,1);
}var offset=Long.$ival((Long.$mod(pos,8192)));
while (len > 0){
var buf=p$1.getCacheBlock$J.apply(this, [Long.$div(pos,8192)]);
var nbytes=Math.min(len, 8192 - offset);
System.arraycopy$O$I$O$I$I(b, off, buf, offset, nbytes);
(pos=Long.$add(pos,(nbytes)));
off+=nbytes;
len-=nbytes;
offset=0;
}
});

Clazz.newMeth(C$, 'write$I$J',  function (b, pos) {
if (Long.$lt(pos,0 )) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["pos < 0"]);
}if (Long.$ge(pos,this.length )) {
p$1.pad$J.apply(this, [pos]);
this.length=Long.$add(pos,1);
}var buf=p$1.getCacheBlock$J.apply(this, [Long.$div(pos,8192)]);
var offset=Long.$ival((Long.$mod(pos,8192)));
buf[offset]=(b|0);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'read$J',  function (pos) {
if (Long.$ge(pos,this.length )) {
return -1;
}var buf=p$1.getCacheBlock$J.apply(this, [Long.$div(pos,8192)]);
if (buf == null ) {
return -1;
}return buf[Long.$ival((Long.$mod(pos,8192)))] & 255;
});

Clazz.newMeth(C$, 'read$BA$I$I$J',  function (b, off, len, pos) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["b == null!"]);
}if ((off < 0) || (len < 0) || (Long.$lt(pos,0 )) || (off + len > b.length) || (off + len < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (Long.$gt(Long.$add(pos,len),this.length )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}var index=Long.$div(pos,8192);
var offset=Long.$ival(pos) % 8192;
while (len > 0){
var nbytes=Math.min(len, 8192 - offset);
var buf=p$1.getCacheBlock$J.apply(this, [([index,index=Long.$inc(index,1)][0])]);
System.arraycopy$O$I$O$I$I(buf, offset, b, off, nbytes);
len-=nbytes;
off+=nbytes;
offset=0;
}
});

Clazz.newMeth(C$, 'disposeBefore$J',  function (pos) {
var index=Long.$div(pos,8192);
if (Long.$lt(index,this.cacheStart )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos already disposed"]);
}var numBlocks=Math.min$J$J(Long.$sub(index,this.cacheStart), this.cache.size$());
for (var i=0; Long.$lt(i,numBlocks ); ([i,i=Long.$inc(i,1)][0])) {
this.cache.remove$I(0);
}
this.cacheStart=index;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.cache.clear$();
this.cacheStart=0;
this.length=0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

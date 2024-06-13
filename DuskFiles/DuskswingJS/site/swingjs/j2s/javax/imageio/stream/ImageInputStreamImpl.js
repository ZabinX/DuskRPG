(function(){var P$=Clazz.newPackage("javax.imageio.stream"),p$1={},I$=[[0,'java.util.Stack','java.nio.ByteOrder','StringBuffer','java.io.DataInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageInputStreamImpl", null, null, 'javax.imageio.stream.ImageInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.markByteStack=Clazz.new_($I$(1,1));
this.markBitStack=Clazz.new_($I$(1,1));
this.isClosed=false;
this.byteBuf=Clazz.array(Byte.TYPE, [8192]);
this.byteOrder=$I$(2).BIG_ENDIAN;
this.flushedPos=0;
},1);

C$.$fields$=[['Z',['isClosed'],'I',['bitOffset'],'J',['streamPos','flushedPos'],'O',['markByteStack','java.util.Stack','+markBitStack','byteBuf','byte[]','byteOrder','java.nio.ByteOrder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'checkClosed$',  function () {
if (this.isClosed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["closed"]);
}});

Clazz.newMeth(C$, 'setByteOrder$java_nio_ByteOrder',  function (byteOrder) {
this.byteOrder=byteOrder;
});

Clazz.newMeth(C$, 'getByteOrder$',  function () {
return this.byteOrder;
});

Clazz.newMeth(C$, 'read$BA',  function (b) {
return this.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'readBytes$javax_imageio_stream_IIOByteBuffer$I',  function (buf, len) {
if (len < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["len < 0!"]);
}if (buf == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["buf == null!"]);
}var data=Clazz.array(Byte.TYPE, [len]);
len=this.read$BA$I$I(data, 0, len);
buf.setData$BA(data);
buf.setOffset$I(0);
buf.setLength$I(len);
});

Clazz.newMeth(C$, 'readBoolean$',  function () {
var ch=this.read$();
if (ch < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return (ch != 0);
});

Clazz.newMeth(C$, 'readByte$',  function () {
var ch=this.read$();
if (ch < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return ($b$[0] = ch, $b$[0]);
});

Clazz.newMeth(C$, 'readUnsignedByte$',  function () {
var ch=this.read$();
if (ch < 0) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}return ch;
});

Clazz.newMeth(C$, 'readShort$',  function () {
if (this.read$BA$I$I(this.byteBuf, 0, 2) != 2) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
return ($s$[0] = (((this.byteBuf[0] & 255) << 8) | ((this.byteBuf[1] & 255) << 0)), $s$[0]);
} else {
return ($s$[0] = (((this.byteBuf[1] & 255) << 8) | ((this.byteBuf[0] & 255) << 0)), $s$[0]);
}});

Clazz.newMeth(C$, 'readUnsignedShort$',  function () {
return ((this.readShort$()|0)) & 65535;
});

Clazz.newMeth(C$, 'readChar$',  function () {
return String.fromCharCode(this.readShort$());
});

Clazz.newMeth(C$, 'readInt$',  function () {
if (this.read$BA$I$I(this.byteBuf, 0, 4) != 4) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
return (((this.byteBuf[0] & 255) << 24) | ((this.byteBuf[1] & 255) << 16) | ((this.byteBuf[2] & 255) << 8) | ((this.byteBuf[3] & 255) << 0) );
} else {
return (((this.byteBuf[3] & 255) << 24) | ((this.byteBuf[2] & 255) << 16) | ((this.byteBuf[1] & 255) << 8) | ((this.byteBuf[0] & 255) << 0) );
}});

Clazz.newMeth(C$, 'readUnsignedInt$',  function () {
return Long.$and((this.readInt$()),4294967295);
});

Clazz.newMeth(C$, 'readLong$',  function () {
var i1=this.readInt$();
var i2=this.readInt$();
if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
return Long.$add((Long.$sl(i1,32)),(Long.$and(i2,4294967295)));
} else {
return Long.$add((Long.$sl(i2,32)),(Long.$and(i1,4294967295)));
}});

Clazz.newMeth(C$, 'readFloat$',  function () {
return Float.intBitsToFloat$I(this.readInt$());
});

Clazz.newMeth(C$, 'readDouble$',  function () {
return Double.longBitsToDouble$J(this.readLong$());
});

Clazz.newMeth(C$, 'readLine$',  function () {
var input=Clazz.new_($I$(3,1));
var c=-1;
var eol=false;
while (!eol){
switch (c=this.read$()) {
case -1:
case 10:
eol=true;
break;
case 13:
eol=true;
var cur=this.getStreamPosition$();
if ((this.read$()) != 10 ) {
this.seek$J(cur);
}break;
default:
input.append$C(String.fromCharCode(c));
break;
}
}
if ((c == -1) && (input.length$() == 0) ) {
return null;
}return input.toString();
});

Clazz.newMeth(C$, 'readUTF$',  function () {
this.bitOffset=0;
var oldByteOrder=this.getByteOrder$();
this.setByteOrder$java_nio_ByteOrder($I$(2).BIG_ENDIAN);
var ret;
try {
ret=$I$(4).readUTF$java_io_DataInput(this);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.setByteOrder$java_nio_ByteOrder(oldByteOrder);
throw e;
} else {
throw e;
}
}
this.setByteOrder$java_nio_ByteOrder(oldByteOrder);
return ret;
});

Clazz.newMeth(C$, 'readFully$BA$I$I',  function (b, off, len) {
if (off < 0 || len < 0  || off + len > b.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > b.length!"]);
}while (len > 0){
var nbytes=this.read$BA$I$I(b, off, len);
if (nbytes == -1) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}off+=nbytes;
len-=nbytes;
}
});

Clazz.newMeth(C$, 'readFully$BA',  function (b) {
this.readFully$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'readFully$HA$I$I',  function (s, off, len) {
if (off < 0 || len < 0  || off + len > s.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > s.length!"]);
}while (len > 0){
var nelts=Math.min(len, (this.byteBuf.length/2|0));
this.readFully$BA$I$I(this.byteBuf, 0, nelts * 2);
p$1.toShorts$BA$HA$I$I.apply(this, [this.byteBuf, s, off, nelts]);
off+=nelts;
len-=nelts;
}
});

Clazz.newMeth(C$, 'readFully$CA$I$I',  function (c, off, len) {
if (off < 0 || len < 0  || off + len > c.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > c.length!"]);
}while (len > 0){
var nelts=Math.min(len, (this.byteBuf.length/2|0));
this.readFully$BA$I$I(this.byteBuf, 0, nelts * 2);
p$1.toChars$BA$CA$I$I.apply(this, [this.byteBuf, c, off, nelts]);
off+=nelts;
len-=nelts;
}
});

Clazz.newMeth(C$, 'readFully$IA$I$I',  function (i, off, len) {
if (off < 0 || len < 0  || off + len > i.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > i.length!"]);
}while (len > 0){
var nelts=Math.min(len, (this.byteBuf.length/4|0));
this.readFully$BA$I$I(this.byteBuf, 0, nelts * 4);
p$1.toInts$BA$IA$I$I.apply(this, [this.byteBuf, i, off, nelts]);
off+=nelts;
len-=nelts;
}
});

Clazz.newMeth(C$, 'readFully$JA$I$I',  function (l, off, len) {
if (off < 0 || len < 0  || off + len > l.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > l.length!"]);
}while (len > 0){
var nelts=Math.min(len, (this.byteBuf.length/8|0));
this.readFully$BA$I$I(this.byteBuf, 0, nelts * 8);
p$1.toLongs$BA$JA$I$I.apply(this, [this.byteBuf, l, off, nelts]);
off+=nelts;
len-=nelts;
}
});

Clazz.newMeth(C$, 'readFully$FA$I$I',  function (f, off, len) {
if (off < 0 || len < 0  || off + len > f.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > f.length!"]);
}while (len > 0){
var nelts=Math.min(len, (this.byteBuf.length/4|0));
this.readFully$BA$I$I(this.byteBuf, 0, nelts * 4);
p$1.toFloats$BA$FA$I$I.apply(this, [this.byteBuf, f, off, nelts]);
off+=nelts;
len-=nelts;
}
});

Clazz.newMeth(C$, 'readFully$DA$I$I',  function (d, off, len) {
if (off < 0 || len < 0  || off + len > d.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > d.length!"]);
}while (len > 0){
var nelts=Math.min(len, (this.byteBuf.length/8|0));
this.readFully$BA$I$I(this.byteBuf, 0, nelts * 8);
p$1.toDoubles$BA$DA$I$I.apply(this, [this.byteBuf, d, off, nelts]);
off+=nelts;
len-=nelts;
}
});

Clazz.newMeth(C$, 'toShorts$BA$HA$I$I',  function (b, s, off, len) {
var boff=0;
if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
for (var j=0; j < len; j++) {
var b0=b[boff];
var b1=b[boff + 1] & 255;
s[off + j]=(((b0 << 8) | b1)|0);
boff+=2;
}
} else {
for (var j=0; j < len; j++) {
var b0=b[boff + 1];
var b1=b[boff] & 255;
s[off + j]=(((b0 << 8) | b1)|0);
boff+=2;
}
}}, p$1);

Clazz.newMeth(C$, 'toChars$BA$CA$I$I',  function (b, c, off, len) {
var boff=0;
if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
for (var j=0; j < len; j++) {
var b0=b[boff];
var b1=b[boff + 1] & 255;
c[off + j]=String.fromCharCode(((b0 << 8) | b1));
boff+=2;
}
} else {
for (var j=0; j < len; j++) {
var b0=b[boff + 1];
var b1=b[boff] & 255;
c[off + j]=String.fromCharCode(((b0 << 8) | b1));
boff+=2;
}
}}, p$1);

Clazz.newMeth(C$, 'toInts$BA$IA$I$I',  function (b, i, off, len) {
var boff=0;
if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
for (var j=0; j < len; j++) {
var b0=b[boff];
var b1=b[boff + 1] & 255;
var b2=b[boff + 2] & 255;
var b3=b[boff + 3] & 255;
i[off + j]=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
boff+=4;
}
} else {
for (var j=0; j < len; j++) {
var b0=b[boff + 3];
var b1=b[boff + 2] & 255;
var b2=b[boff + 1] & 255;
var b3=b[boff] & 255;
i[off + j]=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
boff+=4;
}
}}, p$1);

Clazz.newMeth(C$, 'toLongs$BA$JA$I$I',  function (b, l, off, len) {
var boff=0;
if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
for (var j=0; j < len; j++) {
var b0=b[boff];
var b1=b[boff + 1] & 255;
var b2=b[boff + 2] & 255;
var b3=b[boff + 3] & 255;
var b4=b[boff + 4];
var b5=b[boff + 5] & 255;
var b6=b[boff + 6] & 255;
var b7=b[boff + 7] & 255;
var i0=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
var i1=(b4 << 24) | (b5 << 16) | (b6 << 8) | b7 ;
l[off + j]=Long.$or((Long.$sl(i0,32)),(Long.$and(i1,4294967295)));
boff+=8;
}
} else {
for (var j=0; j < len; j++) {
var b0=b[boff + 7];
var b1=b[boff + 6] & 255;
var b2=b[boff + 5] & 255;
var b3=b[boff + 4] & 255;
var b4=b[boff + 3];
var b5=b[boff + 2] & 255;
var b6=b[boff + 1] & 255;
var b7=b[boff] & 255;
var i0=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
var i1=(b4 << 24) | (b5 << 16) | (b6 << 8) | b7 ;
l[off + j]=Long.$or((Long.$sl(i0,32)),(Long.$and(i1,4294967295)));
boff+=8;
}
}}, p$1);

Clazz.newMeth(C$, 'toFloats$BA$FA$I$I',  function (b, f, off, len) {
var boff=0;
if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
for (var j=0; j < len; j++) {
var b0=b[boff];
var b1=b[boff + 1] & 255;
var b2=b[boff + 2] & 255;
var b3=b[boff + 3] & 255;
var i=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
f[off + j]=Float.intBitsToFloat$I(i);
boff+=4;
}
} else {
for (var j=0; j < len; j++) {
var b0=b[boff + 3];
var b1=b[boff + 2] & 255;
var b2=b[boff + 1] & 255;
var b3=b[boff + 0] & 255;
var i=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
f[off + j]=Float.intBitsToFloat$I(i);
boff+=4;
}
}}, p$1);

Clazz.newMeth(C$, 'toDoubles$BA$DA$I$I',  function (b, d, off, len) {
var boff=0;
if (this.byteOrder === $I$(2).BIG_ENDIAN ) {
for (var j=0; j < len; j++) {
var b0=b[boff];
var b1=b[boff + 1] & 255;
var b2=b[boff + 2] & 255;
var b3=b[boff + 3] & 255;
var b4=b[boff + 4];
var b5=b[boff + 5] & 255;
var b6=b[boff + 6] & 255;
var b7=b[boff + 7] & 255;
var i0=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
var i1=(b4 << 24) | (b5 << 16) | (b6 << 8) | b7 ;
var l=Long.$or((Long.$sl(i0,32)),(Long.$and(i1,4294967295)));
d[off + j]=Double.longBitsToDouble$J(l);
boff+=8;
}
} else {
for (var j=0; j < len; j++) {
var b0=b[boff + 7];
var b1=b[boff + 6] & 255;
var b2=b[boff + 5] & 255;
var b3=b[boff + 4] & 255;
var b4=b[boff + 3];
var b5=b[boff + 2] & 255;
var b6=b[boff + 1] & 255;
var b7=b[boff] & 255;
var i0=(b0 << 24) | (b1 << 16) | (b2 << 8) | b3 ;
var i1=(b4 << 24) | (b5 << 16) | (b6 << 8) | b7 ;
var l=Long.$or((Long.$sl(i0,32)),(Long.$and(i1,4294967295)));
d[off + j]=Double.longBitsToDouble$J(l);
boff+=8;
}
}}, p$1);

Clazz.newMeth(C$, 'getStreamPosition$',  function () {
this.checkClosed$();
return this.streamPos;
});

Clazz.newMeth(C$, 'getBitOffset$',  function () {
this.checkClosed$();
return this.bitOffset;
});

Clazz.newMeth(C$, 'setBitOffset$I',  function (bitOffset) {
this.checkClosed$();
if (bitOffset < 0 || bitOffset > 7 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bitOffset must be betwwen 0 and 7!"]);
}this.bitOffset=bitOffset;
});

Clazz.newMeth(C$, 'readBit$',  function () {
this.checkClosed$();
var newBitOffset=(this.bitOffset + 1) & 7;
var val=this.read$();
if (val == -1) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}if (newBitOffset != 0) {
this.seek$J(Long.$sub(this.getStreamPosition$(),1));
val>>=8 - newBitOffset;
}this.bitOffset=newBitOffset;
return val & 1;
});

Clazz.newMeth(C$, 'readBits$I',  function (numBits) {
this.checkClosed$();
if (numBits < 0 || numBits > 64 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (numBits == 0) {
return 0;
}var bitsToRead=numBits + this.bitOffset;
var newBitOffset=(this.bitOffset + numBits) & 7;
var accum=0;
while (bitsToRead > 0){
var val=this.read$();
if (val == -1) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}(accum=Long.$sl(accum,(8)));
(accum=Long.$or(accum,(val)));
bitsToRead-=8;
}
if (newBitOffset != 0) {
this.seek$J(Long.$sub(this.getStreamPosition$(),1));
}this.bitOffset=newBitOffset;
(accum=Long.$usr(accum,((-bitsToRead))));
(accum=Long.$and(accum,((Long.$usr((Long.$neg(1)),(64 - numBits))))));
return accum;
});

Clazz.newMeth(C$, 'length$',  function () {
return (Long.$neg(1));
});

Clazz.newMeth(C$, 'skipBytes$I',  function (n) {
var pos=this.getStreamPosition$();
this.seek$J(Long.$add(pos,n));
return Long.$ival((Long.$sub(this.getStreamPosition$(),pos)));
});

Clazz.newMeth(C$, 'skipBytes$J',  function (n) {
var pos=this.getStreamPosition$();
this.seek$J(Long.$add(pos,n));
return Long.$sub(this.getStreamPosition$(),pos);
});

Clazz.newMeth(C$, 'seek$J',  function (pos) {
this.checkClosed$();
if (Long.$lt(pos,this.flushedPos )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos < flushedPos!"]);
}this.streamPos=pos;
this.bitOffset=0;
});

Clazz.newMeth(C$, 'mark$',  function () {
try {
this.markByteStack.push$O(Long.valueOf$J(this.getStreamPosition$()));
this.markBitStack.push$O(Integer.valueOf$I(this.getBitOffset$()));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.markByteStack.empty$()) {
return;
}var pos=(this.markByteStack.pop$()).longValue$();
if (Long.$lt(pos,this.flushedPos )) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Previous marked position has been discarded!"]);
}this.seek$J(pos);
var offset=(this.markBitStack.pop$()).intValue$();
this.setBitOffset$I(offset);
});

Clazz.newMeth(C$, 'flushBefore$J',  function (pos) {
this.checkClosed$();
if (Long.$lt(pos,this.flushedPos )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos < flushedPos!"]);
}if (Long.$gt(pos,this.getStreamPosition$() )) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["pos > getStreamPosition()!"]);
}this.flushedPos=pos;
});

Clazz.newMeth(C$, 'flush$',  function () {
this.flushBefore$J(this.getStreamPosition$());
});

Clazz.newMeth(C$, 'getFlushedPosition$',  function () {
return this.flushedPos;
});

Clazz.newMeth(C$, 'isCached$',  function () {
return false;
});

Clazz.newMeth(C$, 'isCachedMemory$',  function () {
return false;
});

Clazz.newMeth(C$, 'isCachedFile$',  function () {
return false;
});

Clazz.newMeth(C$, 'close$',  function () {
this.checkClosed$();
this.isClosed=true;
});

Clazz.newMeth(C$, 'finalize$',  function () {
if (!this.isClosed) {
try {
this.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}C$.superclazz.prototype.finalize$.apply(this, []);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

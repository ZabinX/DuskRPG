(function(){var P$=Clazz.newPackage("javax.imageio.stream"),I$=[[0,'java.nio.ByteOrder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageOutputStreamImpl", null, 'javax.imageio.stream.ImageInputStreamImpl', 'javax.imageio.stream.ImageOutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'write$BA',  function (b) {
this.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'writeBoolean$Z',  function (v) {
this.write$I(v ? 1 : 0);
});

Clazz.newMeth(C$, 'writeByte$I',  function (v) {
this.write$I(v);
});

Clazz.newMeth(C$, 'writeShort$I',  function (v) {
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
this.byteBuf[0]=((v >>> 8)|0);
this.byteBuf[1]=((v >>> 0)|0);
} else {
this.byteBuf[0]=((v >>> 0)|0);
this.byteBuf[1]=((v >>> 8)|0);
}this.write$BA$I$I(this.byteBuf, 0, 2);
});

Clazz.newMeth(C$, 'writeChar$I',  function (v) {
this.writeShort$I(v);
});

Clazz.newMeth(C$, 'writeInt$I',  function (v) {
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
this.byteBuf[0]=((v >>> 24)|0);
this.byteBuf[1]=((v >>> 16)|0);
this.byteBuf[2]=((v >>> 8)|0);
this.byteBuf[3]=((v >>> 0)|0);
} else {
this.byteBuf[0]=((v >>> 0)|0);
this.byteBuf[1]=((v >>> 8)|0);
this.byteBuf[2]=((v >>> 16)|0);
this.byteBuf[3]=((v >>> 24)|0);
}this.write$BA$I$I(this.byteBuf, 0, 4);
});

Clazz.newMeth(C$, 'writeLong$J',  function (v) {
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
this.byteBuf[0]=((Long.$usr(v,56))|0);
this.byteBuf[1]=((Long.$usr(v,48))|0);
this.byteBuf[2]=((Long.$usr(v,40))|0);
this.byteBuf[3]=((Long.$usr(v,32))|0);
this.byteBuf[4]=((Long.$usr(v,24))|0);
this.byteBuf[5]=((Long.$usr(v,16))|0);
this.byteBuf[6]=((Long.$usr(v,8))|0);
this.byteBuf[7]=((Long.$usr(v,0))|0);
} else {
this.byteBuf[0]=((Long.$usr(v,0))|0);
this.byteBuf[1]=((Long.$usr(v,8))|0);
this.byteBuf[2]=((Long.$usr(v,16))|0);
this.byteBuf[3]=((Long.$usr(v,24))|0);
this.byteBuf[4]=((Long.$usr(v,32))|0);
this.byteBuf[5]=((Long.$usr(v,40))|0);
this.byteBuf[6]=((Long.$usr(v,48))|0);
this.byteBuf[7]=((Long.$usr(v,56))|0);
}this.write$BA$I$I(this.byteBuf, 0, 4);
this.write$BA$I$I(this.byteBuf, 4, 4);
});

Clazz.newMeth(C$, 'writeFloat$F',  function (v) {
this.writeInt$I(Float.floatToIntBits$F(v));
});

Clazz.newMeth(C$, 'writeDouble$D',  function (v) {
this.writeLong$J(Double.doubleToLongBits$D(v));
});

Clazz.newMeth(C$, 'writeBytes$S',  function (s) {
var len=s.length$();
for (var i=0; i < len; i++) {
this.write$I(($b$[0] = s.charAt$I(i).$c(), $b$[0]));
}
});

Clazz.newMeth(C$, 'writeChars$S',  function (s) {
var len=s.length$();
var b=Clazz.array(Byte.TYPE, [len * 2]);
var boff=0;
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
for (var i=0; i < len; i++) {
var v=s.charAt$I(i).$c();
b[boff++]=((v >>> 8)|0);
b[boff++]=((v >>> 0)|0);
}
} else {
for (var i=0; i < len; i++) {
var v=s.charAt$I(i).$c();
b[boff++]=((v >>> 0)|0);
b[boff++]=((v >>> 8)|0);
}
}this.write$BA$I$I(b, 0, len * 2);
});

Clazz.newMeth(C$, 'writeUTF$S',  function (s) {
var strlen=s.length$();
var utflen=0;
var charr=Clazz.array(Character.TYPE, [strlen]);
var c;
var boff=0;
s.getChars$I$I$CA$I(0, strlen, charr, 0);
for (var i=0; i < strlen; i++) {
c=charr[i].$c();
if ((c >= 1) && (c <= 127) ) {
++utflen;
} else if (c > 2047) {
utflen+=3;
} else {
utflen+=2;
}}
if (utflen > 65535) {
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException').c$$S,["utflen > 65536!"]);
}var b=Clazz.array(Byte.TYPE, [utflen + 2]);
b[boff++]=(((utflen >>> 8) & 255)|0);
b[boff++]=(((utflen >>> 0) & 255)|0);
for (var i=0; i < strlen; i++) {
c=charr[i].$c();
if ((c >= 1) && (c <= 127) ) {
b[boff++]=(c|0);
} else if (c > 2047) {
b[boff++]=((224 | ((c >> 12) & 15))|0);
b[boff++]=((128 | ((c >> 6) & 63))|0);
b[boff++]=((128 | ((c >> 0) & 63))|0);
} else {
b[boff++]=((192 | ((c >> 6) & 31))|0);
b[boff++]=((128 | ((c >> 0) & 63))|0);
}}
this.write$BA$I$I(b, 0, utflen + 2);
});

Clazz.newMeth(C$, 'writeShorts$HA$I$I',  function (s, off, len) {
if (off < 0 || len < 0  || off + len > s.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > s.length!"]);
}var b=Clazz.array(Byte.TYPE, [len * 2]);
var boff=0;
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
for (var i=0; i < len; i++) {
var v=s[off + i];
b[boff++]=((v >>> 8)|0);
b[boff++]=((v >>> 0)|0);
}
} else {
for (var i=0; i < len; i++) {
var v=s[off + i];
b[boff++]=((v >>> 0)|0);
b[boff++]=((v >>> 8)|0);
}
}this.write$BA$I$I(b, 0, len * 2);
});

Clazz.newMeth(C$, 'writeChars$CA$I$I',  function (c, off, len) {
if (off < 0 || len < 0  || off + len > c.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > c.length!"]);
}var b=Clazz.array(Byte.TYPE, [len * 2]);
var boff=0;
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
for (var i=0; i < len; i++) {
var v=c[off + i];
b[boff++]=((v.$c() >>> 8)|0);
b[boff++]=((v.$c() >>> 0)|0);
}
} else {
for (var i=0; i < len; i++) {
var v=c[off + i];
b[boff++]=((v.$c() >>> 0)|0);
b[boff++]=((v.$c() >>> 8)|0);
}
}this.write$BA$I$I(b, 0, len * 2);
});

Clazz.newMeth(C$, 'writeInts$IA$I$I',  function (i, off, len) {
if (off < 0 || len < 0  || off + len > i.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > i.length!"]);
}var b=Clazz.array(Byte.TYPE, [len * 4]);
var boff=0;
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
for (var j=0; j < len; j++) {
var v=i[off + j];
b[boff++]=((v >>> 24)|0);
b[boff++]=((v >>> 16)|0);
b[boff++]=((v >>> 8)|0);
b[boff++]=((v >>> 0)|0);
}
} else {
for (var j=0; j < len; j++) {
var v=i[off + j];
b[boff++]=((v >>> 0)|0);
b[boff++]=((v >>> 8)|0);
b[boff++]=((v >>> 16)|0);
b[boff++]=((v >>> 24)|0);
}
}this.write$BA$I$I(b, 0, len * 4);
});

Clazz.newMeth(C$, 'writeLongs$JA$I$I',  function (l, off, len) {
if (off < 0 || len < 0  || off + len > l.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > l.length!"]);
}var b=Clazz.array(Byte.TYPE, [len * 8]);
var boff=0;
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
for (var i=0; i < len; i++) {
var v=l[off + i];
b[boff++]=((Long.$usr(v,56))|0);
b[boff++]=((Long.$usr(v,48))|0);
b[boff++]=((Long.$usr(v,40))|0);
b[boff++]=((Long.$usr(v,32))|0);
b[boff++]=((Long.$usr(v,24))|0);
b[boff++]=((Long.$usr(v,16))|0);
b[boff++]=((Long.$usr(v,8))|0);
b[boff++]=((Long.$usr(v,0))|0);
}
} else {
for (var i=0; i < len; i++) {
var v=l[off + i];
b[boff++]=((Long.$usr(v,0))|0);
b[boff++]=((Long.$usr(v,8))|0);
b[boff++]=((Long.$usr(v,16))|0);
b[boff++]=((Long.$usr(v,24))|0);
b[boff++]=((Long.$usr(v,32))|0);
b[boff++]=((Long.$usr(v,40))|0);
b[boff++]=((Long.$usr(v,48))|0);
b[boff++]=((Long.$usr(v,56))|0);
}
}this.write$BA$I$I(b, 0, len * 8);
});

Clazz.newMeth(C$, 'writeFloats$FA$I$I',  function (f, off, len) {
if (off < 0 || len < 0  || off + len > f.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > f.length!"]);
}var b=Clazz.array(Byte.TYPE, [len * 4]);
var boff=0;
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
for (var i=0; i < len; i++) {
var v=Float.floatToIntBits$F(f[off + i]);
b[boff++]=((v >>> 24)|0);
b[boff++]=((v >>> 16)|0);
b[boff++]=((v >>> 8)|0);
b[boff++]=((v >>> 0)|0);
}
} else {
for (var i=0; i < len; i++) {
var v=Float.floatToIntBits$F(f[off + i]);
b[boff++]=((v >>> 0)|0);
b[boff++]=((v >>> 8)|0);
b[boff++]=((v >>> 16)|0);
b[boff++]=((v >>> 24)|0);
}
}this.write$BA$I$I(b, 0, len * 4);
});

Clazz.newMeth(C$, 'writeDoubles$DA$I$I',  function (d, off, len) {
if (off < 0 || len < 0  || off + len > d.length  || off + len < 0 ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["off < 0 || len < 0 || off + len > d.length!"]);
}var b=Clazz.array(Byte.TYPE, [len * 8]);
var boff=0;
if (this.byteOrder === $I$(1).BIG_ENDIAN ) {
for (var i=0; i < len; i++) {
var v=Double.doubleToLongBits$D(d[off + i]);
b[boff++]=((Long.$usr(v,56))|0);
b[boff++]=((Long.$usr(v,48))|0);
b[boff++]=((Long.$usr(v,40))|0);
b[boff++]=((Long.$usr(v,32))|0);
b[boff++]=((Long.$usr(v,24))|0);
b[boff++]=((Long.$usr(v,16))|0);
b[boff++]=((Long.$usr(v,8))|0);
b[boff++]=((Long.$usr(v,0))|0);
}
} else {
for (var i=0; i < len; i++) {
var v=Double.doubleToLongBits$D(d[off + i]);
b[boff++]=((Long.$usr(v,0))|0);
b[boff++]=((Long.$usr(v,8))|0);
b[boff++]=((Long.$usr(v,16))|0);
b[boff++]=((Long.$usr(v,24))|0);
b[boff++]=((Long.$usr(v,32))|0);
b[boff++]=((Long.$usr(v,40))|0);
b[boff++]=((Long.$usr(v,48))|0);
b[boff++]=((Long.$usr(v,56))|0);
}
}this.write$BA$I$I(b, 0, len * 8);
});

Clazz.newMeth(C$, 'writeBit$I',  function (bit) {
this.writeBits$J$I((Long.$and(1,bit)), 1);
});

Clazz.newMeth(C$, 'writeBits$J$I',  function (bits, numBits) {
this.checkClosed$();
if (numBits < 0 || numBits > 64 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad value for numBits!"]);
}if (numBits == 0) {
return;
}if ((Long.$gt(this.getStreamPosition$(),0 )) || (this.bitOffset > 0) ) {
var offset=this.bitOffset;
var partialByte=this.read$();
if (partialByte != -1) {
this.seek$J(Long.$sub(this.getStreamPosition$(),1));
} else {
partialByte=0;
}if (numBits + offset < 8) {
var shift=8 - (offset + numBits);
var mask=-1 >>> (32 - numBits);
partialByte&=~(mask << shift);
partialByte=Long.$ival(Long.$or(partialByte,((Long.$sl((Long.$and(bits,mask)),shift)))));
this.write$I(partialByte);
this.seek$J(Long.$sub(this.getStreamPosition$(),1));
this.bitOffset=offset + numBits;
numBits=0;
} else {
var num=8 - offset;
var mask=-1 >>> (32 - num);
partialByte&=~mask;
partialByte=Long.$ival(Long.$or(partialByte,((Long.$and((Long.$sr(bits,(numBits - num))),mask)))));
this.write$I(partialByte);
numBits-=num;
}}if (numBits > 7) {
var extra=numBits % 8;
for (var numBytes=(numBits/8|0); numBytes > 0; numBytes--) {
var shift=(numBytes - 1) * 8 + extra;
var value=Long.$ival(((shift == 0) ? Long.$and(bits,255) : Long.$and((Long.$sr(bits,shift)),255)));
this.write$I(value);
}
numBits=extra;
}if (numBits != 0) {
var partialByte=0;
partialByte=this.read$();
if (partialByte != -1) {
this.seek$J(Long.$sub(this.getStreamPosition$(),1));
} else {
partialByte=0;
}var shift=8 - numBits;
var mask=-1 >>> (32 - numBits);
partialByte&=~(mask << shift);
partialByte=Long.$ival(Long.$or(partialByte,(Long.$sl((Long.$and(bits,mask)),shift))));
this.write$I(partialByte);
this.seek$J(Long.$sub(this.getStreamPosition$(),1));
this.bitOffset=numBits;
}});

Clazz.newMeth(C$, 'flushBits$',  function () {
this.checkClosed$();
if (this.bitOffset != 0) {
var offset=this.bitOffset;
var partialByte=this.read$();
if (partialByte < 0) {
partialByte=0;
this.bitOffset=0;
} else {
this.seek$J(Long.$sub(this.getStreamPosition$(),1));
partialByte&=-1 << (8 - offset);
}this.write$I(partialByte);
}});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

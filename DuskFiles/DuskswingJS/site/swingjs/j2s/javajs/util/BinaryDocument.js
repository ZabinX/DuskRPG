(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'java.io.DataInputStream','javajs.util.BC']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BinaryDocument", null, 'javajs.util.BC', 'javajs.api.GenericBinaryDocument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isRandom=false;
this.isBigEndian=true;
this.t8=Clazz.array(Byte.TYPE, [8]);
},1);

C$.$fields$=[['Z',['isRandom','isBigEndian'],'J',['nBytes'],'O',['stream','java.io.DataInputStream','bis','java.io.BufferedInputStream','out','javajs.api.GenericOutputChannel','t8','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'close$',  function () {
if (this.stream != null ) try {
this.stream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
if (this.out != null ) this.out.closeChannel$();
});

Clazz.newMeth(C$, 'setStream$java_io_BufferedInputStream$Z',  function (bis, isBigEndian) {
this.bis=bis;
if (bis != null ) {
this.stream=Clazz.new_($I$(1,1).c$$java_io_InputStream,[bis]);
}this.isBigEndian=isBigEndian;
return this;
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
return this.bis;
});

Clazz.newMeth(C$, 'setStreamData$java_io_DataInputStream$Z',  function (stream, isBigEndian) {
if (stream != null ) this.stream=stream;
this.isBigEndian=isBigEndian;
});

Clazz.newMeth(C$, 'setOutputChannel$javajs_api_GenericOutputChannel',  function (out) {
this.out=out;
});

Clazz.newMeth(C$, 'setRandom$Z',  function (TF) {
this.isRandom=TF;
});

Clazz.newMeth(C$, 'readByte$',  function () {
(this.nBytes=Long.$inc(this.nBytes,1));
return p$1.ioReadByte.apply(this, []);
});

Clazz.newMeth(C$, 'readUInt8$',  function () {
(this.nBytes=Long.$inc(this.nBytes,1));
var b=this.stream.readUnsignedByte$();
if (this.out != null ) this.out.writeByteAsInt$I(b);
return b;
});

Clazz.newMeth(C$, 'ioReadByte',  function () {
var b=this.stream.readByte$();
if (this.out != null ) this.out.writeByteAsInt$I(b);
return b;
}, p$1);

Clazz.newMeth(C$, 'readBytes$I',  function (n) {
var b=Clazz.array(Byte.TYPE, [n]);
this.readByteArray$BA$I$I(b, 0, n);
return b;
});

Clazz.newMeth(C$, 'readByteArray$BA$I$I',  function (b, off, len) {
var n=p$1.ioRead$BA$I$I.apply(this, [b, off, len]);
(this.nBytes=Long.$add(this.nBytes,(n)));
return n;
});

Clazz.newMeth(C$, 'ioRead$BA$I$I',  function (b, off, len) {
var m=0;
while (len > 0){
var n=this.stream.read$BA$I$I(b, off, len);
m+=n;
if (n > 0 && this.out != null  ) this.out.write$BA$I$I(b, off, n);
if (n >= len) break;
off+=n;
len-=n;
}
return m;
}, p$1);

Clazz.newMeth(C$, 'readString$I',  function (nChar) {
var temp=Clazz.array(Byte.TYPE, [nChar]);
var n=this.readByteArray$BA$I$I(temp, 0, nChar);
return  String.instantialize(temp, 0, n, "UTF-8");
});

Clazz.newMeth(C$, 'readShort$',  function () {
(this.nBytes=Long.$add(this.nBytes,(2)));
var n=(this.isBigEndian ? p$1.ioReadShort.apply(this, []) : ($s$[0] = ((p$1.ioReadByte.apply(this, []) & 255) | (p$1.ioReadByte.apply(this, []) & 255) << 8), $s$[0]));
{
return (n > 0x7FFF ? n - 0x10000 : n);
}
});

Clazz.newMeth(C$, 'ioReadShort',  function () {
var b=this.stream.readShort$();
if (this.out != null ) this.out.writeShort$H(b);
return b;
}, p$1);

Clazz.newMeth(C$, 'readIntLE$',  function () {
(this.nBytes=Long.$add(this.nBytes,(4)));
return p$1.readLEInt.apply(this, []);
});

Clazz.newMeth(C$, 'readInt$',  function () {
(this.nBytes=Long.$add(this.nBytes,(4)));
return (this.isBigEndian ? p$1.ioReadInt.apply(this, []) : p$1.readLEInt.apply(this, []));
});

Clazz.newMeth(C$, 'ioReadInt',  function () {
var i=this.stream.readInt$();
if (this.out != null ) this.out.writeInt$I(i);
return i;
}, p$1);

Clazz.newMeth(C$, 'swapBytesI$I',  function (n) {
return (((n >> 24) & 255) | ((n >> 16) & 255) << 8 | ((n >> 8) & 255) << 16 | (n & 255) << 24);
});

Clazz.newMeth(C$, 'swapBytesS$H',  function (n) {
return ($s$[0] = ((((n >> 8) & 255) | (n & 255) << 8)), $s$[0]);
});

Clazz.newMeth(C$, 'readUnsignedShort$',  function () {
(this.nBytes=Long.$add(this.nBytes,(2)));
var a=(p$1.ioReadByte.apply(this, []) & 255);
var b=(p$1.ioReadByte.apply(this, []) & 255);
return (this.isBigEndian ? (a << 8) + b : (b << 8) + a);
});

Clazz.newMeth(C$, 'readLong$',  function () {
(this.nBytes=Long.$add(this.nBytes,(8)));
return (this.isBigEndian ? p$1.ioReadLong.apply(this, []) : (Long.$or(Long.$or(Long.$or(Long.$or(Long.$or(Long.$or(Long.$or((Long.$and((p$1.ioReadByte.apply(this, [])),255)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),8)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),16)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),24)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),32)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),40)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),48)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),54))));
});

Clazz.newMeth(C$, 'ioReadLong',  function () {
var b=this.stream.readLong$();
if (this.out != null ) this.out.writeLong$J(b);
return b;
}, p$1);

Clazz.newMeth(C$, 'readLEInt',  function () {
p$1.ioRead$BA$I$I.apply(this, [this.t8, 0, 4]);
return $I$(2).bytesToInt$BA$I$Z(this.t8, 0, false);
}, p$1);

Clazz.newMeth(C$, 'readFloat$',  function () {
return $I$(2,"intToFloat$I",[this.readInt$()]);
});

Clazz.newMeth(C$, 'readDouble$',  function () {
{

}
this.readByteArray$BA$I$I(this.t8, 0, 8);
return $I$(2).bytesToDoubleToFloat$BA$I$Z(this.t8, 0, this.isBigEndian);
});

Clazz.newMeth(C$, 'ioReadDouble',  function () {
var d=this.stream.readDouble$();
if (this.out != null ) this.out.writeLong$J(Double.doubleToRawLongBits$D(d));
return d;
}, p$1);

Clazz.newMeth(C$, 'readLELong',  function () {
return (Long.$or(Long.$or(Long.$or(Long.$or(Long.$or(Long.$or(Long.$or((Long.$and((p$1.ioReadByte.apply(this, [])),255)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),8)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),16)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),24)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),32)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),40)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),48)),Long.$sl((Long.$and((p$1.ioReadByte.apply(this, [])),255)),56)));
}, p$1);

Clazz.newMeth(C$, 'seek$J',  function (offset) {
try {
if (Long.$eq(offset,this.nBytes )) return;
if (Long.$lt(offset,this.nBytes )) {
this.stream.reset$();
if (this.out != null  && Long.$ne(this.nBytes,0 ) ) this.out.reset$();
this.nBytes=0;
} else {
(offset=Long.$sub(offset,(this.nBytes)));
}if (this.out == null ) {
this.stream.skipBytes$I(Long.$ival(offset));
} else {
this.readByteArray$BA$I$I(Clazz.array(Byte.TYPE, [Long.$ival(offset)]), 0, Long.$ival(offset));
}(this.nBytes=Long.$add(this.nBytes,(offset)));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.nBytes;
});

Clazz.newMeth(C$, 'getAllDataFiles$S$S',  function (binaryFileList, firstFile) {
return null;
});

Clazz.newMeth(C$, 'getAllDataMapped$S$S$java_util_Map',  function (replace, string, fileData) {
});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

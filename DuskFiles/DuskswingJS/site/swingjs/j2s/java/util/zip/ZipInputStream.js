(function(){var P$=Clazz.newPackage("java.util.zip"),p$1={},I$=[[0,'java.util.zip.CRC32','java.io.InputStream','java.util.zip.Inflater','swingjs.JSUtil','java.util.zip.ZipEntry']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZipInputStream", null, 'java.util.zip.InflaterInputStream', 'java.util.zip.ZipConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.crc=Clazz.new_($I$(1,1));
this.tmpbuf=Clazz.array(Byte.TYPE, [512]);
this.entryEOF=false;
this.$b=Clazz.array(Byte.TYPE, [256]);
},1);

C$.$fields$=[['Z',['entryEOF','isPushback'],'I',['flag'],'J',['remaining'],'S',['zc'],'O',['entry','java.util.zip.ZipEntry','crc','java.util.zip.CRC32','tmpbuf','byte[]','+$b']]]

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}}, p$1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
;C$.superclazz.c$$java_io_InputStream$java_util_zip_Inflater$I.apply(this,[$I$(2).秘getByteStream$java_io_InputStream$I($in, -2), C$.newInflater$(), 512]);C$.$init$.apply(this);
this.isPushback=Clazz.instanceOf(this.$in, "java.io.PushbackInputStream");
var charset="UTF-8";
this.zc=charset;
}, 1);

Clazz.newMeth(C$, 'newInflater$',  function () {
return Clazz.new_($I$(3,1)).init$I$Z(0, true);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S',  function ($in, charset) {
;C$.superclazz.c$$java_io_InputStream$java_util_zip_Inflater$I.apply(this,[$I$(2).秘getByteStream$java_io_InputStream$I($in, -2), Clazz.new_($I$(3,1)), 512]);C$.$init$.apply(this);
if (!charset.equalsIgnoreCase$S("UTF-8")) $I$(4).notImplemented$S("ZipInputStream charset " + charset);
charset="UTF-8";
this.zc=charset;
}, 1);

Clazz.newMeth(C$, 'initEntry',  function () {
this.crc.reset$();
this.inflater=this.inf=C$.newInflater$();
if (this.entry.method == 0) {
this.remaining=this.entry.size;
}this.entryEOF=false;
}, p$1);

Clazz.newMeth(C$, 'closeEntry$',  function () {
p$1.ensureOpen.apply(this, []);
while (this.read$BA$I$I(this.tmpbuf, 0, this.tmpbuf.length) != -1){
}
this.entryEOF=true;
});

Clazz.newMeth(C$, 'available$',  function () {
p$1.ensureOpen.apply(this, []);
return (this.entryEOF ? 0 : 1);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
p$1.ensureOpen.apply(this, []);
if (off < 0 || len < 0  || off > b.length - len ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return 0;
}if (this.entry == null ) {
return -1;
}switch (this.entry.method) {
case 8:
len=this.readInf$BA$I$I(b, off, len);
if (len == -1) {
p$1.readEnd$java_util_zip_ZipEntry.apply(this, [this.entry]);
this.entryEOF=true;
this.entry=null;
} else {
this.crc.update$BA$I$I(b, off, len);
}return len;
case 0:
if (Long.$le(this.remaining,0 )) {
this.entryEOF=true;
this.entry=null;
return -1;
}if (Long.$gt(len,this.remaining )) {
len=Long.$ival(this.remaining);
}len=this.$in.read$BA$I$I(b, off, len);
if (len == -1) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["unexpected EOF"]);
}this.crc.update$BA$I$I(b, off, len);
(this.remaining=Long.$sub(this.remaining,(len)));
if (Long.$eq(this.remaining,0 ) && Long.$ne(this.entry.crc,this.crc.getValue$() ) ) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry CRC (expected 0x" + Long.toHexString$J(this.entry.crc) + " but got 0x" + Long.toHexString$J(this.crc.getValue$()) + ")" ]);
}return len;
default:
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid compression method"]);
}
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$lt(n,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["negative skip length"]);
}p$1.ensureOpen.apply(this, []);
var max=Long.$ival(Math.min$J$J(n, 2147483647));
var total=0;
while (total < max){
var len=max - total;
if (len > this.tmpbuf.length) {
len=this.tmpbuf.length;
}len=this.read$BA$I$I(this.tmpbuf, 0, len);
if (len == -1) {
this.entryEOF=true;
break;
}total+=len;
}
return total;
});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.closed) {
C$.superclazz.prototype.close$.apply(this, []);
this.closed=true;
}});

Clazz.newMeth(C$, 'readLOC',  function () {
try {
p$1.readFully$BA$I$I.apply(this, [this.tmpbuf, 0, 30]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
return null;
} else {
throw e;
}
}
if (Long.$ne(C$.get32$BA$I(this.tmpbuf, 0),67324752 )) {
return null;
}this.flag=C$.get16$BA$I(this.tmpbuf, 6);
var len=C$.get16$BA$I(this.tmpbuf, 26);
var blen=this.$b.length;
if (len > blen) {
do blen=blen * 2;
 while (len > blen);
this.$b=Clazz.array(Byte.TYPE, [blen]);
}p$1.readFully$BA$I$I.apply(this, [this.$b, 0, len]);
var e=this.createZipEntry$S(((this.flag & 2048) != 0) ? p$1.toStringUTF8$BA$I.apply(this, [this.$b, len]) : p$1.toStringb2$BA$I.apply(this, [this.$b, len]));
if ((this.flag & 1) == 1) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["encrypted ZIP entry not supported"]);
}e.method=C$.get16$BA$I(this.tmpbuf, 8);
e.time=C$.get32$BA$I(this.tmpbuf, 10);
if ((this.flag & 8) == 8) {
if (e.method != 8) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["only DEFLATED entries can have EXT descriptor"]);
}} else {
e.crc=C$.get32$BA$I(this.tmpbuf, 14);
e.csize=C$.get32$BA$I(this.tmpbuf, 18);
e.size=C$.get32$BA$I(this.tmpbuf, 22);
}len=C$.get16$BA$I(this.tmpbuf, 28);
var bb=Clazz.array(Byte.TYPE, [len + 4]);
if (len > 0) {
bb=Clazz.array(Byte.TYPE, [len + 4]);
p$1.readFully$BA$I$I.apply(this, [bb, 0, len]);
e.setExtra$BA(bb);
if (Long.$eq(e.csize,4294967295 ) || Long.$eq(e.size,4294967295 ) ) {
var off=0;
while (off + 4 < len){
var sz=C$.get16$BA$I(bb, off + 2);
if (C$.get16$BA$I(bb, off) == 1) {
off+=4;
if (sz < 16 || (off + sz) > len ) {
return e;
}e.size=C$.get64$BA$I(bb, off);
e.csize=C$.get64$BA$I(bb, off + 8);
break;
}off+=(sz + 4);
}
}}return e;
}, p$1);

Clazz.newMeth(C$, 'toStringUTF8$BA$I',  function (b2, len) {
try {
return  String.instantialize(b2, 0, len, this.zc);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return p$1.toStringb2$BA$I.apply(this, [b2, len]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'toStringb2$BA$I',  function (b2, len) {
return  String.instantialize(b2, 0, len);
}, p$1);

Clazz.newMeth(C$, 'createZipEntry$S',  function (name) {
return Clazz.new_($I$(5,1).c$$S,[name]);
});

Clazz.newMeth(C$, 'readEnd$java_util_zip_ZipEntry',  function (e) {
var n=this.inf.getAvailIn$();
if (n > 0) {
p$1.unread$BA$I$I.apply(this, [this.buf, this.len, n]);
this.eof=false;
}if ((this.flag & 8) == 8) {
if (Long.$gt(this.inf.getTotalOutL$(),4294967295 ) || Long.$gt(this.inf.getTotalInL$(),4294967295 ) ) {
p$1.readFully$BA$I$I.apply(this, [this.tmpbuf, 0, 24]);
var sig=C$.get32$BA$I(this.tmpbuf, 0);
if (Long.$ne(sig,134695760 )) {
e.crc=sig;
e.csize=C$.get64$BA$I(this.tmpbuf, 4);
e.size=C$.get64$BA$I(this.tmpbuf, 12);
p$1.unread$BA$I$I.apply(this, [this.tmpbuf, 23, 4]);
} else {
e.crc=C$.get32$BA$I(this.tmpbuf, 4);
e.csize=C$.get64$BA$I(this.tmpbuf, 8);
e.size=C$.get64$BA$I(this.tmpbuf, 16);
}} else {
p$1.readFully$BA$I$I.apply(this, [this.tmpbuf, 0, 16]);
var sig=C$.get32$BA$I(this.tmpbuf, 0);
if (Long.$ne(sig,134695760 )) {
e.crc=sig;
e.csize=C$.get32$BA$I(this.tmpbuf, 4);
e.size=C$.get32$BA$I(this.tmpbuf, 8);
p$1.unread$BA$I$I.apply(this, [this.tmpbuf, 15, 4]);
} else {
e.crc=C$.get32$BA$I(this.tmpbuf, 4);
e.csize=C$.get32$BA$I(this.tmpbuf, 8);
e.size=C$.get32$BA$I(this.tmpbuf, 12);
}}}if (Long.$ne(e.size,this.inf.getTotalOutL$() )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry size (expected " + Long.$s(e.size) + " but got " + Long.$s(this.inf.getTotalOutL$()) + " bytes)" ]);
}if (Long.$ne(e.csize,this.inf.getTotalInL$() )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry compressed size (expected " + Long.$s(e.csize) + " but got " + Long.$s(this.inf.getTotalInL$()) + " bytes)" ]);
}if (Long.$ne(e.crc,this.crc.getValue$() )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry CRC (expected 0x" + Long.toHexString$J(e.crc) + " but got 0x" + Long.toHexString$J(this.crc.getValue$()) + ")" ]);
}}, p$1);

Clazz.newMeth(C$, 'unread$BA$I$I',  function (b, len, n) {
if (this.isPushback) {
(this.$in).unread$BA$I$I(b, len - n, n);
} else {
(this.$in).pos-=n;
}}, p$1);

Clazz.newMeth(C$, 'readFully$BA$I$I',  function (b, off, len) {
while (len > 0){
var n=this.$in.read$BA$I$I(b, off, len);
if (n == -1) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}off+=n;
len-=n;
}
}, p$1);

Clazz.newMeth(C$, 'get16$BA$I',  function (b, off) {
return (b[off] & 255) | ((b[off + 1] & 255) << 8);
}, 1);

Clazz.newMeth(C$, 'get32$BA$I',  function (b, off) {
return Long.$and((Long.$or(C$.get16$BA$I(b, off),(Long.$sl(C$.get16$BA$I(b, off + 2),16)))),4294967295);
}, 1);

Clazz.newMeth(C$, 'get64$BA$I',  function (b, off) {
return Long.$or(C$.get32$BA$I(b, off),(Long.$sl(C$.get32$BA$I(b, off + 4),32)));
}, 1);

Clazz.newMeth(C$, 'getNextEntry$',  function () {
p$1.ensureOpen.apply(this, []);
if (this.entry != null ) {
this.closeEntry$();
}if ((this.entry=p$1.readLOC.apply(this, [])) == null ) {
return null;
}p$1.initEntry.apply(this, []);
if (!this.entry.isDirectory$()) {
this.entry.秘source=this.$in;
this.entry.秘entryOffset=p$1.秘getEntryOffset$java_util_zip_ZipEntry.apply(this, [this.entry]);
}return this.entry;
});

Clazz.newMeth(C$, '秘getEntryOffset$java_util_zip_ZipEntry',  function (entry) {
if (!this.isPushback) {
return (this.$in).pos;
}var pis=this.$in;
if (!(Clazz.instanceOf(pis.$in, "java.io.ByteArrayInputStream"))) {
return -1;
}return (pis.$in).pos - (pis.buf.length - pis.pos);
}, p$1);

Clazz.newMeth(C$, 'setEntry$java_util_zip_ZipEntry',  function (entry) {
if (this.isPushback) return -1;
this.closed=false;
this.entry=entry;
p$1.initEntry.apply(this, []);
(this.$in).pos=entry.秘entryOffset;
return entry.getSize$();
});

Clazz.newMeth(C$, 'readAllBytes$',  function () {
if (this.entry == null ) {
return Clazz.array(Byte.TYPE, [0]);
}var b=Clazz.array(Byte.TYPE, [Long.$ival(this.entry.size)]);
this.read$BA$I$I(b, 0, b.length);
return b;
});

Clazz.newMeth(C$, 'transferTo$java_io_OutputStream',  function (out) {
var b=this.readAllBytes$();
out.write$BA(b);
return b.length;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

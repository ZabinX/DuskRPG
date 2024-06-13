(function(){var P$=Clazz.newPackage("java.util.zip"),p$1={},I$=[[0,'java.util.zip.CRC32','java.util.zip.Inflater','java.util.zip.CheckedInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GZIPInputStream", null, 'java.util.zip.InflaterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.crc=Clazz.new_($I$(1,1));
this.$closed=false;
this.tmpbuf=Clazz.array(Byte.TYPE, [128]);
},1);

C$.$fields$=[['Z',['eos','$closed'],'O',['crc','java.util.zip.CRC32','tmpbuf','byte[]']]]

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.$closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}}, p$1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$I',  function ($in, size) {
;C$.superclazz.c$$java_io_InputStream$java_util_zip_Inflater$I.apply(this,[$in, Clazz.new_($I$(2,1)).init$I$Z(0, true), size]);C$.$init$.apply(this);
p$1.readHeader$java_io_InputStream.apply(this, [$in]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
C$.c$$java_io_InputStream$I.apply(this, [$in, 512]);
}, 1);

Clazz.newMeth(C$, 'read$BA$I$I',  function (buf, off, len) {
p$1.ensureOpen.apply(this, []);
if (this.eos) {
return -1;
}var n=this.readInf$BA$I$I(buf, off, len);
if (n == -1) {
if (p$1.readTrailer.apply(this, [])) this.eos=true;
 else return this.read$BA$I$I(buf, off, len);
} else {
this.crc.update$BA$I$I(buf, off, n);
}return n;
});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.$closed) {
C$.superclazz.prototype.close$.apply(this, []);
this.eos=true;
this.$closed=true;
}});

Clazz.newMeth(C$, 'readHeader$java_io_InputStream',  function (this_in) {
var $in=Clazz.new_($I$(3,1).c$$java_io_InputStream$swingjs_jzlib_Checksum,[this_in, this.crc]);
this.crc.reset$();
if (p$1.readUShort$java_io_InputStream.apply(this, [$in]) != 35615) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["Not in GZIP format"]);
}if (p$1.readUByte$java_io_InputStream.apply(this, [$in]) != 8) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["Unsupported compression method"]);
}var flg=p$1.readUByte$java_io_InputStream.apply(this, [$in]);
p$1.skipBytes$java_io_InputStream$I.apply(this, [$in, 6]);
var n=10;
if ((flg & 4) == 4) {
var m=p$1.readUShort$java_io_InputStream.apply(this, [$in]);
p$1.skipBytes$java_io_InputStream$I.apply(this, [$in, m]);
n+=m + 2;
}if ((flg & 8) == 8) {
do {
++n;
} while (p$1.readUByte$java_io_InputStream.apply(this, [$in]) != 0);
}if ((flg & 16) == 16) {
do {
++n;
} while (p$1.readUByte$java_io_InputStream.apply(this, [$in]) != 0);
}if ((flg & 2) == 2) {
var v=Long.$ival(this.crc.getValue$()) & 65535;
if (p$1.readUShort$java_io_InputStream.apply(this, [$in]) != v) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["Corrupt GZIP header"]);
}n+=2;
}this.crc.reset$();
return n;
}, p$1);

Clazz.newMeth(C$, 'readTrailer',  function () {
return true;
}, p$1);

Clazz.newMeth(C$, 'readUShort$java_io_InputStream',  function ($in) {
var b=p$1.readUByte$java_io_InputStream.apply(this, [$in]);
return (p$1.readUByte$java_io_InputStream.apply(this, [$in]) << 8) | b;
}, p$1);

Clazz.newMeth(C$, 'readUByte$java_io_InputStream',  function ($in) {
var b=$in.read$();
if (b == -1) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}if (b < -1 || b > 255 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[this.$in.getClass$().getName$() + ".read() returned value out of range -1..255: " + b ]);
}return b;
}, p$1);

Clazz.newMeth(C$, 'skipBytes$java_io_InputStream$I',  function ($in, n) {
while (n > 0){
var len=$in.read$BA$I$I(this.tmpbuf, 0, n < this.tmpbuf.length ? n : this.tmpbuf.length);
if (len == -1) {
throw Clazz.new_(Clazz.load('java.io.EOFException'));
}n-=len;
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

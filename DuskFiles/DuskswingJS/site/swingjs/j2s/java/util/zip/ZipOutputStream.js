(function(){var P$=Clazz.newPackage("java.util.zip"),p$1={},I$=[[0,'javajs.util.Lst','java.util.Hashtable','java.util.zip.CRC32','java.util.zip.Deflater','swingjs.jzlib.ZStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZipOutputStream", null, 'java.util.zip.DeflaterOutputStream', 'java.util.zip.ZipConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xentries=Clazz.new_($I$(1,1));
this.names=Clazz.new_($I$(2,1));
this.crc=Clazz.new_($I$(3,1));
this.written=0;
this.locoff=0;
this.method=8;
this.$closed=false;
},1);

C$.$fields$=[['Z',['finished','$closed'],'I',['method'],'J',['written','locoff'],'O',['current','java.util.zip.ZipEntry','xentries','javajs.util.Lst','names','java.util.Map','crc','java.util.zip.CRC32','comment','byte[]']]]

Clazz.newMeth(C$, 'version$java_util_zip_ZipEntry',  function (e) {
switch (e.method) {
case 8:
return 20;
case 0:
return 10;
default:
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["unsupported compression method"]);
}
}, 1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.$closed) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setZOS$java_io_OutputStream(out);
}, 1);

Clazz.newMeth(C$, 'setZOS$java_io_OutputStream',  function (out) {
this.setDOS$java_io_OutputStream$java_util_zip_Deflater(out, C$.newDeflater$());
return this;
});

Clazz.newMeth(C$, 'newDeflater$',  function () {
return (Clazz.new_($I$(4,1).c$$I,[2147483647])).init$I$I$Z(-1, 0, true);
}, 1);

Clazz.newMeth(C$, 'setComment$S',  function (comment) {
if (comment != null ) {
this.comment=$I$(5).getBytes$S(comment);
if (this.comment.length > 65535) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ZIP file comment too long."]);
}});

Clazz.newMeth(C$, 'putNextEntry$java_util_zip_ZipEntry',  function (e) {
p$1.ensureOpen.apply(this, []);
if (this.current != null ) {
this.closeEntry$();
}if (Long.$eq(e.time,-1 )) {
e.setTime$J(System.currentTimeMillis$());
}if (e.method == -1) {
e.method=this.method;
}e.flag=0;
switch (e.method) {
case 8:
if (Long.$eq(e.size,-1 ) || Long.$eq(e.csize,-1 )  || Long.$eq(e.crc,-1 ) ) e.flag=8;
break;
case 0:
if (Long.$eq(e.size,-1 )) {
e.size=e.csize;
} else if (Long.$eq(e.csize,-1 )) {
e.csize=e.size;
} else if (Long.$ne(e.size,e.csize )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["STORED entry where compressed != uncompressed size"]);
}if (Long.$eq(e.size,-1 ) || Long.$eq(e.crc,-1 ) ) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["STORED entry missing size, compressed size, or crc-32"]);
}break;
default:
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["unsupported compression method"]);
}
if (this.names.containsKey$O(e.name)) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["duplicate entry: " + e.name]);
}this.names.put$O$O(e.name, Boolean.TRUE);
e.flag|=2048;
this.current=e;
this.current.offset=this.written;
this.xentries.addLast$O(this.current);
p$1.writeLOC$java_util_zip_ZipEntry.apply(this, [this.current]);
});

Clazz.newMeth(C$, 'closeEntry$',  function () {
p$1.ensureOpen.apply(this, []);
if (this.current != null ) {
var e=this.current;
switch (e.method) {
case 8:
this.deflater.finish$();
C$.superclazz.prototype.finish$.apply(this, []);
if ((e.flag & 8) == 0) {
if (Long.$ne(e.size,this.deflater.getBytesRead$() )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry size (expected " + Long.$s(e.size) + " but got " + Long.$s(this.deflater.getBytesRead$()) + " bytes)" ]);
}if (Long.$ne(e.csize,this.deflater.getBytesWritten$() )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry compressed size (expected " + Long.$s(e.csize) + " but got " + Long.$s(this.deflater.getBytesWritten$()) + " bytes)" ]);
}if (Long.$ne(e.crc,this.crc.getValue$() )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry CRC-32 (expected 0x" + Long.toHexString$J(e.crc) + " but got 0x" + Long.toHexString$J(this.crc.getValue$()) + ")" ]);
}} else {
e.size=this.deflater.getBytesRead$();
e.csize=this.deflater.getBytesWritten$();
e.crc=this.crc.getValue$();
p$1.writeEXT$java_util_zip_ZipEntry.apply(this, [e]);
}this.deflater=C$.newDeflater$();
(this.written=Long.$add(this.written,(e.csize)));
break;
case 0:
if (Long.$ne(e.size,Long.$sub(this.written,this.locoff) )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry size (expected " + Long.$s(e.size) + " but got " + Long.$s((Long.$sub(this.written,this.locoff))) + " bytes)" ]);
}if (Long.$ne(e.crc,this.crc.getValue$() )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid entry crc-32 (expected 0x" + Long.toHexString$J(e.crc) + " but got 0x" + Long.toHexString$J(this.crc.getValue$()) + ")" ]);
}break;
default:
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid compression method"]);
}
this.crc.reset$();
this.current=null;
}});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
p$1.ensureOpen.apply(this, []);
if (off < 0 || len < 0  || off > b.length - len ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}if (this.current == null ) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["no current ZIP entry"]);
}var entry=this.current;
switch (entry.method) {
case 8:
C$.superclazz.prototype.write$BA$I$I.apply(this, [b, off, len]);
break;
case 0:
(this.written=Long.$add(this.written,(len)));
if (Long.$gt(Long.$sub(this.written,this.locoff),entry.size )) {
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["attempt to write past end of STORED entry"]);
}this.out.write$BA$I$I(this.buffer, 0, len);
break;
default:
throw Clazz.new_(Clazz.load('java.util.zip.ZipException').c$$S,["invalid compression method"]);
}
this.crc.update$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'finish$',  function () {
p$1.ensureOpen.apply(this, []);
if (this.finished) {
return;
}if (this.current != null ) {
this.closeEntry$();
}var off=this.written;
for (var xentry, $xentry = this.xentries.iterator$(); $xentry.hasNext$()&&((xentry=($xentry.next$())),1);) p$1.writeCEN$java_util_zip_ZipEntry.apply(this, [xentry]);

p$1.writeEND$J$J.apply(this, [off, Long.$sub(this.written,off)]);
this.finished=true;
});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.$closed) {
C$.superclazz.prototype.close$.apply(this, []);
this.$closed=true;
}});

Clazz.newMeth(C$, 'writeLOC$java_util_zip_ZipEntry',  function (entry) {
var e=entry;
var flag=e.flag;
var elen=(e.extra != null ) ? e.extra.length : 0;
var hasZip64=false;
p$1.writeInt$J.apply(this, [67324752]);
if ((flag & 8) == 8) {
p$1.writeShort$I.apply(this, [C$.version$java_util_zip_ZipEntry(e)]);
p$1.writeShort$I.apply(this, [flag]);
p$1.writeShort$I.apply(this, [e.method]);
p$1.writeInt$J.apply(this, [e.time]);
p$1.writeInt$J.apply(this, [0]);
p$1.writeInt$J.apply(this, [0]);
p$1.writeInt$J.apply(this, [0]);
} else {
if (Long.$ge(e.csize,4294967295 ) || Long.$ge(e.size,4294967295 ) ) {
hasZip64=true;
p$1.writeShort$I.apply(this, [45]);
} else {
p$1.writeShort$I.apply(this, [C$.version$java_util_zip_ZipEntry(e)]);
}p$1.writeShort$I.apply(this, [flag]);
p$1.writeShort$I.apply(this, [e.method]);
p$1.writeInt$J.apply(this, [e.time]);
p$1.writeInt$J.apply(this, [e.crc]);
if (hasZip64) {
p$1.writeInt$J.apply(this, [4294967295]);
p$1.writeInt$J.apply(this, [4294967295]);
elen+=20;
} else {
p$1.writeInt$J.apply(this, [e.csize]);
p$1.writeInt$J.apply(this, [e.size]);
}}var nameBytes=$I$(5).getBytes$S(e.name);
p$1.writeShort$I.apply(this, [nameBytes.length]);
p$1.writeShort$I.apply(this, [elen]);
p$1.writeBytes$BA$I$I.apply(this, [nameBytes, 0, nameBytes.length]);
if (hasZip64) {
p$1.writeShort$I.apply(this, [1]);
p$1.writeShort$I.apply(this, [16]);
p$1.writeLong$J.apply(this, [e.size]);
p$1.writeLong$J.apply(this, [e.csize]);
}if (e.extra != null ) {
p$1.writeBytes$BA$I$I.apply(this, [e.extra, 0, e.extra.length]);
}this.locoff=this.written;
}, p$1);

Clazz.newMeth(C$, 'writeEXT$java_util_zip_ZipEntry',  function (e) {
p$1.writeInt$J.apply(this, [134695760]);
p$1.writeInt$J.apply(this, [e.crc]);
if (Long.$ge(e.csize,4294967295 ) || Long.$ge(e.size,4294967295 ) ) {
p$1.writeLong$J.apply(this, [e.csize]);
p$1.writeLong$J.apply(this, [e.size]);
} else {
p$1.writeInt$J.apply(this, [e.csize]);
p$1.writeInt$J.apply(this, [e.size]);
}}, p$1);

Clazz.newMeth(C$, 'writeCEN$java_util_zip_ZipEntry',  function (entry) {
var e=entry;
var flag=e.flag;
var version=C$.version$java_util_zip_ZipEntry(e);
var csize=e.csize;
var size=e.size;
var offset=entry.offset;
var e64len=0;
var hasZip64=false;
if (Long.$ge(e.csize,4294967295 )) {
csize=4294967295;
e64len+=8;
hasZip64=true;
}if (Long.$ge(e.size,4294967295 )) {
size=4294967295;
e64len+=8;
hasZip64=true;
}if (Long.$ge(entry.offset,4294967295 )) {
offset=4294967295;
e64len+=8;
hasZip64=true;
}p$1.writeInt$J.apply(this, [33639248]);
if (hasZip64) {
p$1.writeShort$I.apply(this, [45]);
p$1.writeShort$I.apply(this, [45]);
} else {
p$1.writeShort$I.apply(this, [version]);
p$1.writeShort$I.apply(this, [version]);
}p$1.writeShort$I.apply(this, [flag]);
p$1.writeShort$I.apply(this, [e.method]);
p$1.writeInt$J.apply(this, [e.time]);
p$1.writeInt$J.apply(this, [e.crc]);
p$1.writeInt$J.apply(this, [csize]);
p$1.writeInt$J.apply(this, [size]);
var nameBytes=$I$(5).getBytes$S(e.name);
p$1.writeShort$I.apply(this, [nameBytes.length]);
if (hasZip64) {
p$1.writeShort$I.apply(this, [e64len + 4 + (e.extra != null  ? e.extra.length : 0) ]);
} else {
p$1.writeShort$I.apply(this, [e.extra != null  ? e.extra.length : 0]);
}var commentBytes;
if (e.comment != null ) {
commentBytes=$I$(5).getBytes$S(e.comment);
p$1.writeShort$I.apply(this, [Math.min(commentBytes.length, 65535)]);
} else {
commentBytes=null;
p$1.writeShort$I.apply(this, [0]);
}p$1.writeShort$I.apply(this, [0]);
p$1.writeShort$I.apply(this, [0]);
p$1.writeInt$J.apply(this, [0]);
p$1.writeInt$J.apply(this, [offset]);
p$1.writeBytes$BA$I$I.apply(this, [nameBytes, 0, nameBytes.length]);
if (hasZip64) {
p$1.writeShort$I.apply(this, [1]);
p$1.writeShort$I.apply(this, [e64len]);
if (Long.$eq(size,4294967295 )) p$1.writeLong$J.apply(this, [e.size]);
if (Long.$eq(csize,4294967295 )) p$1.writeLong$J.apply(this, [e.csize]);
if (Long.$eq(offset,4294967295 )) p$1.writeLong$J.apply(this, [entry.offset]);
}if (e.extra != null ) {
p$1.writeBytes$BA$I$I.apply(this, [e.extra, 0, e.extra.length]);
}if (commentBytes != null ) {
p$1.writeBytes$BA$I$I.apply(this, [commentBytes, 0, Math.min(commentBytes.length, 65535)]);
}}, p$1);

Clazz.newMeth(C$, 'writeEND$J$J',  function (off, len) {
var hasZip64=false;
var xlen=len;
var xoff=off;
if (Long.$ge(xlen,4294967295 )) {
xlen=4294967295;
hasZip64=true;
}if (Long.$ge(xoff,4294967295 )) {
xoff=4294967295;
hasZip64=true;
}var count=this.xentries.size$();
if (count >= 65535) {
count=65535;
hasZip64=true;
}if (hasZip64) {
var off64=this.written;
p$1.writeInt$J.apply(this, [101075792]);
p$1.writeLong$J.apply(this, [44]);
p$1.writeShort$I.apply(this, [45]);
p$1.writeShort$I.apply(this, [45]);
p$1.writeInt$J.apply(this, [0]);
p$1.writeInt$J.apply(this, [0]);
p$1.writeLong$J.apply(this, [this.xentries.size$()]);
p$1.writeLong$J.apply(this, [this.xentries.size$()]);
p$1.writeLong$J.apply(this, [len]);
p$1.writeLong$J.apply(this, [off]);
p$1.writeInt$J.apply(this, [117853008]);
p$1.writeInt$J.apply(this, [0]);
p$1.writeLong$J.apply(this, [off64]);
p$1.writeInt$J.apply(this, [1]);
}p$1.writeInt$J.apply(this, [101010256]);
p$1.writeShort$I.apply(this, [0]);
p$1.writeShort$I.apply(this, [0]);
p$1.writeShort$I.apply(this, [count]);
p$1.writeShort$I.apply(this, [count]);
p$1.writeInt$J.apply(this, [xlen]);
p$1.writeInt$J.apply(this, [xoff]);
if (this.comment != null ) {
p$1.writeShort$I.apply(this, [this.comment.length]);
p$1.writeBytes$BA$I$I.apply(this, [this.comment, 0, this.comment.length]);
} else {
p$1.writeShort$I.apply(this, [0]);
}}, p$1);

Clazz.newMeth(C$, 'writeShort$I',  function (v) {
var out=this.out;
out.write$I((v >>> 0) & 255);
out.write$I((v >>> 8) & 255);
(this.written=Long.$add(this.written,(2)));
}, p$1);

Clazz.newMeth(C$, 'writeInt$J',  function (v) {
var out=this.out;
out.write$I(Long.$ival((Long.$and((Long.$usr(v,0)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,8)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,16)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,24)),255))));
(this.written=Long.$add(this.written,(4)));
}, p$1);

Clazz.newMeth(C$, 'writeLong$J',  function (v) {
var out=this.out;
out.write$I(Long.$ival((Long.$and((Long.$usr(v,0)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,8)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,16)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,24)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,32)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,40)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,48)),255))));
out.write$I(Long.$ival((Long.$and((Long.$usr(v,56)),255))));
(this.written=Long.$add(this.written,(8)));
}, p$1);

Clazz.newMeth(C$, 'writeBytes$BA$I$I',  function (b, off, len) {
this.out.write$BA$I$I(b, off, len);
(this.written=Long.$add(this.written,(len)));
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

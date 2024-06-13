(function(){var P$=java.io,p$1={},I$=[[0,'java.io.File','java.io.FileDescriptor',['swingjs.JSFileSystem','.JSFileChannel'],'StringBuffer','java.io.DataInputStream','java.io.DataOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessFile", null, null, ['java.io.DataOutput', 'java.io.DataInput', 'java.io.Closeable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.channel=null;
this.closeLock= Clazz.new_();
this.closed=false;
},1);

C$.$fields$=[['Z',['rw','closed','hasWritten','hasRead'],'S',['path'],'O',['fd','java.io.FileDescriptor','channel','swingjs.JSFileSystem.JSFileChannel','closeLock','java.lang.Object','_file','java.io.File']]]

Clazz.newMeth(C$, 'c$$S$S',  function (name, mode) {
C$.c$$java_io_File$S.apply(this, [name != null  ? Clazz.new_($I$(1,1).c$$S,[name]) : null, mode]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S',  function (file, mode) {
;C$.$init$.apply(this);
if (file == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var name=file.getPath$();
var imode=-1;
if (mode.equals$O("r")) imode=1;
 else if (mode.startsWith$S("rw")) {
imode=2;
this.rw=true;
if (mode.length$() > 2) {
if (mode.equals$O("rws")) imode|=4;
 else if (mode.equals$O("rwd")) imode|=8;
 else imode=-1;
}}if (imode < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal mode \"" + mode + "\" must be one of " + "\"r\", \"rw\", \"rws\"," + " or \"rwd\"" ]);
this.fd=Clazz.new_($I$(2,1));
this._file=file;
this.fd.attach$java_io_Closeable(this);
this.fd._setTempFile$Z(file.秘isTempFile);
if (this.rw) this.fd._setPosAndLen$I$I(0, 0);
this.path=name;
try {
this.getChannel$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (Clazz.instanceOf(e, "java.io.FileNotFoundException")) throw e;
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getFD$',  function () {
if (this.fd != null ) {
return this.fd;
}throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'getChannel$',  function () {
{
if (this.channel == null ) {
this.channel=$I$(3).open$java_io_FileDescriptor$S$Z$Z$O(this.fd, this.path, true, this.rw, this);
}return this.channel;
}});

Clazz.newMeth(C$, 'read$',  function () {
var ret=this.channel.read$();
if (ret > 0) this.hasRead=true;
return ret;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if (len > 0) this.hasRead=true;
len=this.channel.readBytes$BA$I$I(b, off, len);
if (len > 0) this.hasRead=true;
return len;
});

Clazz.newMeth(C$, 'read$BA',  function (b) {
return this.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'readFully$BA',  function (b) {
this.readFully$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'readFully$BA$I$I',  function (b, off, len) {
var n=0;
do {
var count=this.read$BA$I$I(b, off + n, len - n);
if (count < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
n+=count;
} while (n < len);
});

Clazz.newMeth(C$, 'skipBytes$I',  function (n) {
var pos;
var len;
var newpos;
if (n <= 0) {
return 0;
}pos=this.getFilePointer$();
len=this.length$();
newpos=Long.$add(pos,n);
if (Long.$gt(newpos,len )) {
newpos=len;
}this.seek$J(newpos);
return Long.$ival((Long.$sub(newpos,pos)));
});

Clazz.newMeth(C$, 'write$I',  function (b) {
if (!this.rw) p$1.accessDenied.apply(this, []);
this.channel.write$I(b);
this.hasWritten=true;
});

Clazz.newMeth(C$, 'write$BA',  function (b) {
this.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if (!this.rw) p$1.accessDenied.apply(this, []);
this.channel.writeBytes$BA$I$I(b, off, len);
this.hasWritten=true;
});

Clazz.newMeth(C$, 'getFilePointer$',  function () {
return this.channel.position$();
});

Clazz.newMeth(C$, 'seek$J',  function (pos) {
if (Long.$lt(pos,0 )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Negative seek offset"]);
} else {
this.channel.seek$J(pos);
}});

Clazz.newMeth(C$, 'length$',  function () {
return this.channel.size$();
});

Clazz.newMeth(C$, 'setLength$J',  function (newLength) {
if (!this.rw) p$1.accessDenied.apply(this, []);
this.channel.setLength$J(newLength);
this.hasWritten=true;
});

Clazz.newMeth(C$, 'accessDenied',  function () {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Access is denied"]);
}, p$1);

Clazz.newMeth(C$, 'close$',  function () {
{
if (this.closed) {
return;
}this.closed=true;
}if (this.channel != null ) {
if (this.rw && this.hasWritten && Long.$gt(this.channel.size$(),0 )  ) this.channel.doSave$();
this.fd.closeAll$java_io_Closeable(((P$.RandomAccessFile$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "RandomAccessFile$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Closeable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'close$',  function () {
this.b$['java.io.RandomAccessFile'].channel.close$();
});
})()
), Clazz.new_(P$.RandomAccessFile$1.$init$,[this, null])));
}});

Clazz.newMeth(C$, 'readBoolean$',  function () {
var ch=this.read$();
if (ch < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return (ch != 0);
});

Clazz.newMeth(C$, 'readByte$',  function () {
var ch=this.read$();
if (ch < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ($b$[0] = (ch), $b$[0]);
});

Clazz.newMeth(C$, 'readUnsignedByte$',  function () {
var ch=this.read$();
if (ch < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ch;
});

Clazz.newMeth(C$, 'readShort$',  function () {
var ch1=this.read$();
var ch2=this.read$();
if ((ch1 | ch2) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ($s$[0] = ((ch1 << 8) + (ch2 << 0)), $s$[0]);
});

Clazz.newMeth(C$, 'readUnsignedShort$',  function () {
var ch1=this.read$();
var ch2=this.read$();
if ((ch1 | ch2) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return (ch1 << 8) + (ch2 << 0);
});

Clazz.newMeth(C$, 'readChar$',  function () {
var ch1=this.read$();
var ch2=this.read$();
if ((ch1 | ch2) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return String.fromCharCode(((ch1 << 8) + (ch2 << 0)));
});

Clazz.newMeth(C$, 'readInt$',  function () {
var ch1=this.read$();
var ch2=this.read$();
var ch3=this.read$();
var ch4=this.read$();
if ((ch1 | ch2 | ch3 | ch4 ) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ((ch1 << 24) + (ch2 << 16) + (ch3 << 8) + (ch4 << 0) );
});

Clazz.newMeth(C$, 'readLong$',  function () {
return Long.$add((Long.$sl((this.readInt$()),32)),(Long.$and(this.readInt$(),4294967295)));
});

Clazz.newMeth(C$, 'readFloat$',  function () {
return Float.intBitsToFloat$I(this.readInt$());
});

Clazz.newMeth(C$, 'readDouble$',  function () {
return Double.longBitsToDouble$J(this.readLong$());
});

Clazz.newMeth(C$, 'readLine$',  function () {
var input=Clazz.new_($I$(4,1));
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
var cur=this.getFilePointer$();
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
return $I$(5).readUTF$java_io_DataInput(this);
});

Clazz.newMeth(C$, 'writeBoolean$Z',  function (v) {
this.write$I(v ? 1 : 0);
});

Clazz.newMeth(C$, 'writeByte$I',  function (v) {
this.write$I(v);
});

Clazz.newMeth(C$, 'writeShort$I',  function (v) {
this.write$I((v >>> 8) & 255);
this.write$I((v >>> 0) & 255);
});

Clazz.newMeth(C$, 'writeChar$I',  function (v) {
this.write$I((v >>> 8) & 255);
this.write$I((v >>> 0) & 255);
});

Clazz.newMeth(C$, 'writeInt$I',  function (v) {
this.write$I((v >>> 24) & 255);
this.write$I((v >>> 16) & 255);
this.write$I((v >>> 8) & 255);
this.write$I((v >>> 0) & 255);
});

Clazz.newMeth(C$, 'writeLong$J',  function (v) {
this.write$I(Long.$ival((Long.$usr(v,56))) & 255);
this.write$I(Long.$ival((Long.$usr(v,48))) & 255);
this.write$I(Long.$ival((Long.$usr(v,40))) & 255);
this.write$I(Long.$ival((Long.$usr(v,32))) & 255);
this.write$I(Long.$ival((Long.$usr(v,24))) & 255);
this.write$I(Long.$ival((Long.$usr(v,16))) & 255);
this.write$I(Long.$ival((Long.$usr(v,8))) & 255);
this.write$I(Long.$ival((Long.$usr(v,0))) & 255);
});

Clazz.newMeth(C$, 'writeFloat$F',  function (v) {
this.writeInt$I(Float.floatToIntBits$F(v));
});

Clazz.newMeth(C$, 'writeDouble$D',  function (v) {
this.writeLong$J(Double.doubleToLongBits$D(v));
});

Clazz.newMeth(C$, 'writeBytes$S',  function (s) {
var len=s.length$();
var b=Clazz.array(Byte.TYPE, [len]);
s.getBytes$I$I$BA$I(0, len, b, 0);
this.channel.writeBytes$BA$I$I(b, 0, len);
});

Clazz.newMeth(C$, 'writeChars$S',  function (s) {
var clen=s.length$();
var blen=2 * clen;
var b=Clazz.array(Byte.TYPE, [blen]);
var c=Clazz.array(Character.TYPE, [clen]);
s.getChars$I$I$CA$I(0, clen, c, 0);
for (var i=0, j=0; i < clen; i++) {
b[j++]=(((c[i]).$c() >>> 8)|0);
b[j++]=(((c[i]).$c() >>> 0)|0);
}
this.channel.writeBytes$BA$I$I(b, 0, blen);
});

Clazz.newMeth(C$, 'writeUTF$S',  function (str) {
$I$(6).writeUTF$S$java_io_DataOutput(str, this);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

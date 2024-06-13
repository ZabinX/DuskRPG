(function(){var P$=java.io,I$=[[0,'java.io.PushbackInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DataInputStream", null, 'java.io.FilterInputStream', 'java.io.DataInput');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bytearr=Clazz.array(Byte.TYPE, [80]);
this.chararr=Clazz.array(Character.TYPE, [80]);
this.readBuffer=Clazz.array(Byte.TYPE, [8]);
},1);

C$.$fields$=[['O',['bytearr','byte[]','chararr','char[]','readBuffer','byte[]','lineBuffer','char[]']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
return this.$in.read$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'read$BA',  function (b) {
return this.$in.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'readFully$BA$I$I',  function (b, off, len) {
if (len < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
var n=0;
while (n < len){
var count=this.$in.read$BA$I$I(b, off + n, len - n);
if (count < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
n+=count;
}
});

Clazz.newMeth(C$, 'skipBytes$I',  function (n) {
var total=0;
var cur=0;
while ((total < n) && ((cur=Long.$ival(this.$in.skip$J(n - total))) > 0) ){
total+=cur;
}
return total;
});

Clazz.newMeth(C$, 'readBoolean$',  function () {
var ch=this.$in.read$();
if (ch < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return (ch != 0);
});

Clazz.newMeth(C$, 'readByte$',  function () {
var ch=this.$in.read$();
if (ch < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ($b$[0] = (ch), $b$[0]);
});

Clazz.newMeth(C$, 'readUnsignedByte$',  function () {
var ch=this.$in.read$();
if (ch < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ch;
});

Clazz.newMeth(C$, 'readShort$',  function () {
var ch1=this.$in.read$();
var ch2=this.$in.read$();
if ((ch1 | ch2) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ($s$[0] = ((ch1 << 8) + (ch2 << 0)), $s$[0]);
});

Clazz.newMeth(C$, 'readUnsignedShort$',  function () {
var ch1=this.$in.read$();
var ch2=this.$in.read$();
if ((ch1 | ch2) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return (ch1 << 8) + (ch2 << 0);
});

Clazz.newMeth(C$, 'readChar$',  function () {
var ch1=this.$in.read$();
var ch2=this.$in.read$();
if ((ch1 | ch2) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return String.fromCharCode(((ch1 << 8) + (ch2 << 0)));
});

Clazz.newMeth(C$, 'readInt$',  function () {
var ch1=this.$in.read$();
var ch2=this.$in.read$();
var ch3=this.$in.read$();
var ch4=this.$in.read$();
if ((ch1 | ch2 | ch3 | ch4 ) < 0) throw Clazz.new_(Clazz.load('java.io.EOFException'));
return ((ch1 << 24) + (ch2 << 16) + (ch3 << 8) + (ch4 << 0) ) | 0;
});

Clazz.newMeth(C$, 'readLong$',  function () {
this.readFully$BA$I$I(this.readBuffer, 0, 8);
return (Long.$add((Long.$sl(this.readBuffer[0],56)),(Long.$sl((this.readBuffer[1] & 255),48)) , (Long.$sl((this.readBuffer[2] & 255),40)) , (Long.$sl((this.readBuffer[3] & 255),32)) , (Long.$sl((this.readBuffer[4] & 255),24)) , ((this.readBuffer[5] & 255) << 16) , ((this.readBuffer[6] & 255) << 8) , ((this.readBuffer[7] & 255) << 0) ));
});

Clazz.newMeth(C$, 'readFloat$',  function () {
return Float.intBitsToFloat$I(this.readInt$());
});

Clazz.newMeth(C$, 'readDouble$',  function () {
return Double.longBitsToDouble$J(this.readLong$());
});

Clazz.newMeth(C$, 'readLine$',  function () {
var buf=this.lineBuffer;
if (buf == null ) {
buf=this.lineBuffer=Clazz.array(Character.TYPE, [128]);
}var room=buf.length;
var offset=0;
var c;
 loop : while (true){
switch (c=this.$in.read$()) {
case -1:
case 10:
break loop;
case 13:
var c2=this.$in.read$();
if ((c2 != 10 ) && (c2 != -1) ) {
if (!(Clazz.instanceOf(this.$in, "java.io.PushbackInputStream"))) {
this.$in=Clazz.new_($I$(1,1).c$$java_io_InputStream$I,[this.$in, 1]);
}(this.$in).unread$I(c2);
}break loop;
default:
if (--room < 0) {
buf=Clazz.array(Character.TYPE, [offset + 128]);
room=buf.length - offset - 1 ;
System.arraycopy$O$I$O$I$I(this.lineBuffer, 0, buf, 0, offset);
this.lineBuffer=buf;
}buf[offset++]=String.fromCharCode(c);
break;
}
}
if ((c == -1) && (offset == 0) ) {
return null;
}return String.copyValueOf$CA$I$I(buf, 0, offset);
});

Clazz.newMeth(C$, 'readUTF$',  function () {
return C$.readUTFBytes$java_io_DataInput$I(this, -1);
});

Clazz.newMeth(C$, 'readUTF$java_io_DataInput',  function ($in) {
return C$.readUTFBytes$java_io_DataInput$I($in, -1);
}, 1);

Clazz.newMeth(C$, 'readUTFBytes$java_io_DataInput$I',  function ($in, utflen) {
var isByteArray=(utflen >= 0);
if (!isByteArray) utflen=$in.readUnsignedShort$();
var bytearr=null;
var chararr=null;
if (Clazz.instanceOf($in, "java.io.DataInputStream")) {
var dis=$in;
if (dis.bytearr.length < utflen) {
dis.bytearr=Clazz.array(Byte.TYPE, [isByteArray ? utflen : utflen * 2]);
dis.chararr=Clazz.array(Character.TYPE, [dis.bytearr.length]);
}chararr=dis.chararr;
bytearr=dis.bytearr;
} else {
bytearr=Clazz.array(Byte.TYPE, [utflen]);
chararr=Clazz.array(Character.TYPE, [utflen]);
}var c;
var char2;
var char3;
var count=0;
var chararr_count=0;
$in.readFully$BA$I$I(bytearr, 0, utflen);
while (count < utflen){
c=bytearr[count] & 255;
if (c > 127) break;
++count;
chararr[chararr_count++]=String.fromCharCode(c);
}
while (count < utflen){
c=bytearr[count] & 255;
switch (c >> 4) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
++count;
chararr[chararr_count++]=String.fromCharCode(c);
break;
case 12:
case 13:
count+=2;
if (count > utflen) throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException').c$$S,["malformed input: partial character at end"]);
char2=bytearr[count - 1];
if ((char2 & 192) != 128) throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException').c$$S,["malformed input around byte " + count]);
chararr[chararr_count++]=String.fromCharCode((((c & 31) << 6) | (char2 & 63)));
break;
case 14:
count+=3;
if (count > utflen) throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException').c$$S,["malformed input: partial character at end"]);
char2=bytearr[count - 2];
char3=bytearr[count - 1];
if (((char2 & 192) != 128) || ((char3 & 192) != 128) ) throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException').c$$S,["malformed input around byte " + (count - 1)]);
chararr[chararr_count++]=String.fromCharCode((((c & 15) << 12) | ((char2 & 63) << 6) | ((char3 & 63) << 0) ));
break;
default:
throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException').c$$S,["malformed input around byte " + count]);
}
}
return  String.instantialize(chararr, 0, chararr_count);
}, 1);

Clazz.newMeth(C$, 'readFully$BA',  function (buffer) {
this.readFully$BA$I$I(buffer, 0, buffer.length);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

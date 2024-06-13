(function(){var P$=java.io,p$1={};
/*c*/var C$=Clazz.newClass(P$, "DataOutputStream", null, 'java.io.FilterOutputStream', 'java.io.DataOutput');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bytearr=null;
this.writeBuffer=Clazz.array(Byte.TYPE, [8]);
},1);

C$.$fields$=[['I',['written'],'O',['bytearr','byte[]','+writeBuffer']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'incCount$I',  function (value) {
var temp=this.written + value;
if (temp < 0) {
temp=2147483647;
}this.written=temp;
}, p$1);

Clazz.newMeth(C$, 'write$I',  function (b) {
this.out.write$I(b);
p$1.incCount$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
this.out.write$BA$I$I(b, off, len);
p$1.incCount$I.apply(this, [len]);
});

Clazz.newMeth(C$, 'flush$',  function () {
this.out.flush$();
});

Clazz.newMeth(C$, 'writeBoolean$Z',  function (v) {
this.out.write$I(v ? 1 : 0);
p$1.incCount$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'writeByte$I',  function (v) {
this.out.write$I(v);
p$1.incCount$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'writeShort$I',  function (v) {
this.out.write$I((v >>> 8) & 255);
this.out.write$I((v >>> 0) & 255);
p$1.incCount$I.apply(this, [2]);
});

Clazz.newMeth(C$, 'writeChar$I',  function (v) {
this.out.write$I((v >>> 8) & 255);
this.out.write$I((v >>> 0) & 255);
p$1.incCount$I.apply(this, [2]);
});

Clazz.newMeth(C$, 'writeInt$I',  function (v) {
this.out.write$I((v >>> 24) & 255);
this.out.write$I((v >>> 16) & 255);
this.out.write$I((v >>> 8) & 255);
this.out.write$I((v >>> 0) & 255);
p$1.incCount$I.apply(this, [4]);
});

Clazz.newMeth(C$, 'writeLong$J',  function (v) {
this.writeBuffer[0]=((Long.$usr(v,56))|0);
this.writeBuffer[1]=((Long.$usr(v,48))|0);
this.writeBuffer[2]=((Long.$usr(v,40))|0);
this.writeBuffer[3]=((Long.$usr(v,32))|0);
this.writeBuffer[4]=((Long.$usr(v,24))|0);
this.writeBuffer[5]=((Long.$usr(v,16))|0);
this.writeBuffer[6]=((Long.$usr(v,8))|0);
this.writeBuffer[7]=((Long.$usr(v,0))|0);
this.out.write$BA$I$I(this.writeBuffer, 0, 8);
p$1.incCount$I.apply(this, [8]);
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
this.out.write$I(($b$[0] = s.charAt$I(i).$c(), $b$[0]));
}
p$1.incCount$I.apply(this, [len]);
});

Clazz.newMeth(C$, 'writeChars$S',  function (s) {
var len=s.length$();
for (var i=0; i < len; i++) {
var v=s.charAt$I(i).$c();
this.out.write$I((v >>> 8) & 255);
this.out.write$I((v >>> 0) & 255);
}
p$1.incCount$I.apply(this, [len * 2]);
});

Clazz.newMeth(C$, 'writeUTF$S',  function (str) {
C$.writeUTF$S$java_io_DataOutput(str, this);
});

Clazz.newMeth(C$, 'writeUTF$S$java_io_DataOutput',  function (str, out) {
var strlen=str.length$();
var utflen=0;
var c;
var count=0;
for (var i=0; i < strlen; i++) {
c=str.charAt$I(i).$c();
if ((c >= 1) && (c <= 127) ) {
++utflen;
} else if (c > 2047) {
utflen+=3;
} else {
utflen+=2;
}}
if (utflen > 65535) throw Clazz.new_(Clazz.load('java.io.UTFDataFormatException').c$$S,["encoded string too long: " + utflen + " bytes" ]);
var bytearr=null;
if (Clazz.instanceOf(out, "java.io.DataOutputStream")) {
var dos=out;
if (dos.bytearr == null  || (dos.bytearr.length < (utflen + 2)) ) dos.bytearr=Clazz.array(Byte.TYPE, [(utflen * 2) + 2]);
bytearr=dos.bytearr;
} else {
bytearr=Clazz.array(Byte.TYPE, [utflen + 2]);
}bytearr[count++]=(((utflen >>> 8) & 255)|0);
bytearr[count++]=(((utflen >>> 0) & 255)|0);
var i=0;
for (i=0; i < strlen; i++) {
c=str.charAt$I(i).$c();
if (!((c >= 1) && (c <= 127) )) break;
bytearr[count++]=(c|0);
}
for (; i < strlen; i++) {
c=str.charAt$I(i).$c();
if ((c >= 1) && (c <= 127) ) {
bytearr[count++]=(c|0);
} else if (c > 2047) {
bytearr[count++]=((224 | ((c >> 12) & 15))|0);
bytearr[count++]=((128 | ((c >> 6) & 63))|0);
bytearr[count++]=((128 | ((c >> 0) & 63))|0);
} else {
bytearr[count++]=((192 | ((c >> 6) & 31))|0);
bytearr[count++]=((128 | ((c >> 0) & 63))|0);
}}
out.write$BA$I$I(bytearr, 0, utflen + 2);
return utflen + 2;
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.written;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

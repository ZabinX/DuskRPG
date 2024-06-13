(function(){var P$=Clazz.newPackage("javajs.img"),I$=[[0,'java.util.zip.CRC32','javajs.util.AU']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CRCEncoder", null, 'javajs.img.ImageEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.int2=Clazz.array(Byte.TYPE, [2]);
this.int4=Clazz.array(Byte.TYPE, [4]);
},1);

C$.$fields$=[['I',['startPos','bytePos','dataLen'],'O',['crc','java.util.zip.CRC32','pngBytes','byte[]','+int2','+int4']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.pngBytes=Clazz.array(Byte.TYPE, [250]);
this.crc=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'setData$BA$I',  function (b, pt) {
this.pngBytes=b;
this.dataLen=b.length;
this.startPos=this.bytePos=pt;
});

Clazz.newMeth(C$, 'getBytes$',  function () {
return (this.dataLen == this.pngBytes.length ? this.pngBytes : $I$(2).arrayCopyByte$BA$I(this.pngBytes, this.dataLen));
});

Clazz.newMeth(C$, 'writeCRC$',  function () {
this.crc.reset$();
this.crc.update$BA$I$I(this.pngBytes, this.startPos, this.bytePos - this.startPos);
this.writeInt4$I(Long.$ival(this.crc.getValue$()));
});

Clazz.newMeth(C$, 'writeInt2$I',  function (n) {
this.int2[0]=(((n >> 8) & 255)|0);
this.int2[1]=((n & 255)|0);
this.writeBytes$BA(this.int2);
});

Clazz.newMeth(C$, 'writeInt4$I',  function (n) {
C$.getInt4$I$BA(n, this.int4);
this.writeBytes$BA(this.int4);
});

Clazz.newMeth(C$, 'getInt4$I$BA',  function (n, int4) {
int4[0]=(((n >> 24) & 255)|0);
int4[1]=(((n >> 16) & 255)|0);
int4[2]=(((n >> 8) & 255)|0);
int4[3]=((n & 255)|0);
}, 1);

Clazz.newMeth(C$, 'writeByte$I',  function (b) {
var temp=Clazz.array(Byte.TYPE, -1, [($b$[0] = b, $b$[0])]);
this.writeBytes$BA(temp);
});

Clazz.newMeth(C$, 'writeString$S',  function (s) {
this.writeBytes$BA(s.getBytes$());
});

Clazz.newMeth(C$, 'writeBytes$BA',  function (data) {
var newPos=this.bytePos + data.length;
this.dataLen=Math.max(this.dataLen, newPos);
if (newPos > this.pngBytes.length) this.pngBytes=$I$(2).arrayCopyByte$BA$I(this.pngBytes, newPos + 16);
System.arraycopy$O$I$O$I$I(data, 0, this.pngBytes, this.bytePos, data.length);
this.bytePos=newPos;
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

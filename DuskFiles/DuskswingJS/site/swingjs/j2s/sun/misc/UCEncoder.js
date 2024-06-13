(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'sun.misc.CRC16']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UCEncoder", null, 'sun.misc.CharacterEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tmp=Clazz.array(Byte.TYPE, [2]);
this.crc=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['sequence'],'O',['+tmp','crc','sun.misc.CRC16']]
,['O',['map_array','byte[]']]]

Clazz.newMeth(C$, 'bytesPerAtom$',  function () {
return (2);
});

Clazz.newMeth(C$, 'bytesPerLine$',  function () {
return (48);
});

Clazz.newMeth(C$, 'encodeAtom$java_io_OutputStream$BA$I$I',  function (outStream, data, offset, len) {
var i;
var p1;
var p2;
var a;
var b;
a=data[offset];
if (len == 2) {
b=data[offset + 1];
} else {
b=($b$[0] = 0, $b$[0]);
}this.crc.update$B(a);
if (len == 2) {
this.crc.update$B(b);
}outStream.write$I(C$.map_array[((a >>> 2) & 56) + ((b >>> 5) & 7)]);
p1=0;
p2=0;
for (i=1; i < 256; i=i * 2) {
if ((a & i) != 0) {
++p1;
}if ((b & i) != 0) {
++p2;
}}
p1=(p1 & 1) * 32;
p2=(p2 & 1) * 32;
outStream.write$I(C$.map_array[(a & 31) + p1]);
outStream.write$I(C$.map_array[(b & 31) + p2]);
return;
});

Clazz.newMeth(C$, 'encodeLinePrefix$java_io_OutputStream$I',  function (outStream, length) {
outStream.write$I("*".$c());
this.crc.value=0;
this.tmp[0]=(length|0);
this.tmp[1]=(this.sequence|0);
this.sequence=(this.sequence + 1) & 255;
this.encodeAtom$java_io_OutputStream$BA$I$I(outStream, this.tmp, 0, 2);
});

Clazz.newMeth(C$, 'encodeLineSuffix$java_io_OutputStream',  function (outStream) {
this.tmp[0]=(((this.crc.value >>> 8) & 255)|0);
this.tmp[1]=((this.crc.value & 255)|0);
this.encodeAtom$java_io_OutputStream$BA$I$I(outStream, this.tmp, 0, 2);
this.pStream.println$();
});

Clazz.newMeth(C$, 'encodeBufferPrefix$java_io_OutputStream',  function (a) {
this.sequence=0;
C$.superclazz.prototype.encodeBufferPrefix$java_io_OutputStream.apply(this, [a]);
});

C$.$static$=function(){C$.$static$=0;
C$.map_array=Clazz.array(Byte.TYPE, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 40, 41]);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

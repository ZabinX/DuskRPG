(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'sun.misc.CRC16','java.io.ByteArrayOutputStream','sun.misc.CEStreamExhausted']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UCDecoder", null, 'sun.misc.CharacterDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tmp=Clazz.array(Byte.TYPE, [2]);
this.crc=Clazz.new_($I$(1,1));
this.lineAndSeq=Clazz.new_($I$(2,1).c$$I,[2]);
},1);

C$.$fields$=[['I',['sequence'],'O',['+tmp','crc','sun.misc.CRC16','lineAndSeq','java.io.ByteArrayOutputStream']]
,['O',['map_array','byte[]']]]

Clazz.newMeth(C$, 'bytesPerAtom$',  function () {
return (2);
});

Clazz.newMeth(C$, 'bytesPerLine$',  function () {
return (48);
});

Clazz.newMeth(C$, 'decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I',  function (inStream, outStream, l) {
var i;
var p1;
var p2;
var np1;
var np2;
var a=($b$[0] = -1, $b$[0]);
var b=($b$[0] = -1, $b$[0]);
var c=($b$[0] = -1, $b$[0]);
var high_byte;
var low_byte;
var tmp=Clazz.array(Byte.TYPE, [3]);
i=inStream.read$BA(tmp);
if (i != 3) {
throw Clazz.new_($I$(3,1));
}for (i=0; (i < 64) && ((a == -1) || (b == -1) || (c == -1)  ) ; i++) {
if (tmp[0] == C$.map_array[i]) {
a=($b$[0] = i, $b$[0]);
}if (tmp[1] == C$.map_array[i]) {
b=($b$[0] = i, $b$[0]);
}if (tmp[2] == C$.map_array[i]) {
c=($b$[0] = i, $b$[0]);
}}
high_byte=($b$[0] = (((a & 56) << 2) + (b & 31)), $b$[0]);
low_byte=($b$[0] = (((a & 7) << 5) + (c & 31)), $b$[0]);
p1=0;
p2=0;
for (i=1; i < 256; i=i * 2) {
if ((high_byte & i) != 0) ++p1;
if ((low_byte & i) != 0) ++p2;
}
np1=((b & 32)/32|0);
np2=((c & 32)/32|0);
if ((p1 & 1) != np1) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UCDecoder: High byte parity error."]);
}if ((p2 & 1) != np2) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UCDecoder: Low byte parity error."]);
}outStream.write$I(high_byte);
this.crc.update$B(high_byte);
if (l == 2) {
outStream.write$I(low_byte);
this.crc.update$B(low_byte);
}});

Clazz.newMeth(C$, 'decodeBufferPrefix$java_io_PushbackInputStream$java_io_OutputStream',  function (inStream, outStream) {
this.sequence=0;
});

Clazz.newMeth(C$, 'decodeLinePrefix$java_io_PushbackInputStream$java_io_OutputStream',  function (inStream, outStream) {
var i;
var nLen;
var nSeq;
var xtmp;
var c;
this.crc.value=0;
while (true){
c=inStream.read$BA$I$I(this.tmp, 0, 1);
if (c == -1) {
throw Clazz.new_($I$(3,1));
}if (this.tmp[0] == 42 ) {
break;
}}
this.lineAndSeq.reset$();
this.decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I(inStream, this.lineAndSeq, 2);
xtmp=this.lineAndSeq.toByteArray$();
nLen=xtmp[0] & 255;
nSeq=xtmp[1] & 255;
if (nSeq != this.sequence) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UCDecoder: Out of sequence line."]);
}this.sequence=(this.sequence + 1) & 255;
return (nLen);
});

Clazz.newMeth(C$, 'decodeLineSuffix$java_io_PushbackInputStream$java_io_OutputStream',  function (inStream, outStream) {
var i;
var lineCRC=this.crc.value;
var readCRC;
var tmp;
this.lineAndSeq.reset$();
this.decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I(inStream, this.lineAndSeq, 2);
tmp=this.lineAndSeq.toByteArray$();
readCRC=((tmp[0] << 8) & 65280) + (tmp[1] & 255);
if (readCRC != lineCRC) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UCDecoder: CRC check failed."]);
}});

C$.$static$=function(){C$.$static$=0;
C$.map_array=Clazz.array(Byte.TYPE, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 40, 41]);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

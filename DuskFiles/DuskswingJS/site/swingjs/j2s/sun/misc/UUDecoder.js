(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'StringBuffer','sun.misc.CEStreamExhausted']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UUDecoder", null, 'sun.misc.CharacterDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.decoderBuffer=Clazz.array(Byte.TYPE, [4]);
},1);

C$.$fields$=[['I',['mode'],'S',['bufferName'],'O',['decoderBuffer','byte[]']]]

Clazz.newMeth(C$, 'bytesPerAtom$',  function () {
return (3);
});

Clazz.newMeth(C$, 'bytesPerLine$',  function () {
return (45);
});

Clazz.newMeth(C$, 'decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I',  function (inStream, outStream, l) {
var i;
var c1;
var c2;
var c3;
var c4;
var a;
var b;
var c;
var x=Clazz.new_($I$(1,1));
for (i=0; i < 4; i++) {
c1=inStream.read$();
if (c1 == -1) {
throw Clazz.new_($I$(2,1));
}x.append$C(String.fromCharCode(c1));
this.decoderBuffer[i]=(((c1 - 32) & 63)|0);
}
a=((this.decoderBuffer[0] << 2) & 252) | ((this.decoderBuffer[1] >>> 4) & 3);
b=((this.decoderBuffer[1] << 4) & 240) | ((this.decoderBuffer[2] >>> 2) & 15);
c=((this.decoderBuffer[2] << 6) & 192) | (this.decoderBuffer[3] & 63);
outStream.write$I(($b$[0] = (a & 255), $b$[0]));
if (l > 1) {
outStream.write$I(($b$[0] = (b & 255), $b$[0]));
}if (l > 2) {
outStream.write$I(($b$[0] = (c & 255), $b$[0]));
}});

Clazz.newMeth(C$, 'decodeBufferPrefix$java_io_PushbackInputStream$java_io_OutputStream',  function (inStream, outStream) {
var c;
var q=Clazz.new_($I$(1,1).c$$I,[32]);
var r;
var sawNewLine;
sawNewLine=true;
while (true){
c=inStream.read$();
if (c == -1) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UUDecoder: No begin line."]);
}if ((c == 98 ) && sawNewLine ) {
c=inStream.read$();
if (c == 101 ) {
break;
}}sawNewLine=(c == 10 ) || (c == 13 ) ;
}
while ((c != 10 ) && (c != 13 ) ){
c=inStream.read$();
if (c == -1) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UUDecoder: No begin line."]);
}if ((c != 10 ) && (c != 13 ) ) {
q.append$C(String.fromCharCode(c));
}}
r=q.toString();
if (r.indexOf$I(" ") != 3) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UUDecoder: Malformed begin line."]);
}this.mode=Integer.parseInt$S(r.substring$I$I(4, 7));
this.bufferName=r.substring$I(r.indexOf$I$I(" ", 6) + 1);
if (c == 13 ) {
c=inStream.read$();
if ((c != 10 ) && (c != -1) ) inStream.unread$I(c);
}});

Clazz.newMeth(C$, 'decodeLinePrefix$java_io_PushbackInputStream$java_io_OutputStream',  function (inStream, outStream) {
var c;
c=inStream.read$();
if (c == 32 ) {
c=inStream.read$();
c=inStream.read$();
if ((c != 10 ) && (c != -1) ) inStream.unread$I(c);
throw Clazz.new_($I$(2,1));
} else if (c == -1) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UUDecoder: Short Buffer."]);
}c=(c - 32) & 63;
if (c > this.bytesPerLine$()) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UUDecoder: Bad Line Length."]);
}return (c);
});

Clazz.newMeth(C$, 'decodeLineSuffix$java_io_PushbackInputStream$java_io_OutputStream',  function (inStream, outStream) {
var c;
while (true){
c=inStream.read$();
if (c == -1) {
throw Clazz.new_($I$(2,1));
}if (c == 10 ) {
break;
}if (c == 13 ) {
c=inStream.read$();
if ((c != 10 ) && (c != -1) ) {
inStream.unread$I(c);
}break;
}}
});

Clazz.newMeth(C$, 'decodeBufferSuffix$java_io_PushbackInputStream$java_io_OutputStream',  function (inStream, outStream) {
var c;
c=inStream.read$BA(this.decoderBuffer);
if ((this.decoderBuffer[0] != 101 ) || (this.decoderBuffer[1] != 110 ) || (this.decoderBuffer[2] != 100 )  ) {
throw Clazz.new_(Clazz.load('sun.misc.CEFormatException').c$$S,["UUDecoder: Missing \'end\' line."]);
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

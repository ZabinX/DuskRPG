(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HexDumpEncoder", null, 'sun.misc.CharacterEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thisLine=Clazz.array(Byte.TYPE, [16]);
},1);

C$.$fields$=[['I',['offset','thisLineLength','currentByte'],'O',['thisLine','byte[]']]]

Clazz.newMeth(C$, 'hexDigit$java_io_PrintStream$B',  function (p, x) {
var c;
c=String.fromCharCode(((x >> 4) & 15));
if (c.$c() > 9 ) c=String.fromCharCode(((c.$c() - 10) + 65));
 else c=String.fromCharCode((c.$c() + 48));
p.write$I(c.$c());
c=String.fromCharCode((x & 15));
if (c.$c() > 9 ) c=String.fromCharCode(((c.$c() - 10) + 65));
 else c=String.fromCharCode((c.$c() + 48));
p.write$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'bytesPerAtom$',  function () {
return (1);
});

Clazz.newMeth(C$, 'bytesPerLine$',  function () {
return (16);
});

Clazz.newMeth(C$, 'encodeBufferPrefix$java_io_OutputStream',  function (o) {
this.offset=0;
C$.superclazz.prototype.encodeBufferPrefix$java_io_OutputStream.apply(this, [o]);
});

Clazz.newMeth(C$, 'encodeLinePrefix$java_io_OutputStream$I',  function (o, len) {
C$.hexDigit$java_io_PrintStream$B(this.pStream, ($b$[0] = ((this.offset >>> 8) & 255), $b$[0]));
C$.hexDigit$java_io_PrintStream$B(this.pStream, ($b$[0] = (this.offset & 255), $b$[0]));
this.pStream.print$S(": ");
this.currentByte=0;
this.thisLineLength=len;
});

Clazz.newMeth(C$, 'encodeAtom$java_io_OutputStream$BA$I$I',  function (o, buf, off, len) {
this.thisLine[this.currentByte]=buf[off];
C$.hexDigit$java_io_PrintStream$B(this.pStream, buf[off]);
this.pStream.print$S(" ");
++this.currentByte;
if (this.currentByte == 8) this.pStream.print$S("  ");
});

Clazz.newMeth(C$, 'encodeLineSuffix$java_io_OutputStream',  function (o) {
if (this.thisLineLength < 16) {
for (var i=this.thisLineLength; i < 16; i++) {
this.pStream.print$S("   ");
if (i == 7) this.pStream.print$S("  ");
}
}this.pStream.print$S(" ");
for (var i=0; i < this.thisLineLength; i++) {
if ((this.thisLine[i] < 32 ) || (this.thisLine[i] > 122 ) ) {
this.pStream.print$S(".");
} else {
this.pStream.write$I(this.thisLine[i]);
}}
this.pStream.println$();
this.offset+=this.thisLineLength;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

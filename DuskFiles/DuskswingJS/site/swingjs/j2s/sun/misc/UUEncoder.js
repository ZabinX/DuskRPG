(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.io.PrintStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UUEncoder", null, 'sun.misc.CharacterEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['mode'],'S',['bufferName']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.bufferName="encoder.buf";
this.mode=644;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (fname) {
Clazz.super_(C$, this);
this.bufferName=fname;
this.mode=644;
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (fname, newMode) {
Clazz.super_(C$, this);
this.bufferName=fname;
this.mode=newMode;
}, 1);

Clazz.newMeth(C$, 'bytesPerAtom$',  function () {
return (3);
});

Clazz.newMeth(C$, 'bytesPerLine$',  function () {
return (45);
});

Clazz.newMeth(C$, 'encodeAtom$java_io_OutputStream$BA$I$I',  function (outStream, data, offset, len) {
var a;
var b=($b$[0] = 1, $b$[0]);
var c=($b$[0] = 1, $b$[0]);
var c1;
var c2;
var c3;
var c4;
a=data[offset];
if (len > 1) {
b=data[offset + 1];
}if (len > 2) {
c=data[offset + 2];
}c1=(a >>> 2) & 63;
c2=((a << 4) & 48) | ((b >>> 4) & 15);
c3=((b << 2) & 60) | ((c >>> 6) & 3);
c4=c & 63;
outStream.write$I(c1 + 32);
outStream.write$I(c2 + 32);
outStream.write$I(c3 + 32);
outStream.write$I(c4 + 32);
return;
});

Clazz.newMeth(C$, 'encodeLinePrefix$java_io_OutputStream$I',  function (outStream, length) {
outStream.write$I((length & 63) + 32);
});

Clazz.newMeth(C$, 'encodeLineSuffix$java_io_OutputStream',  function (outStream) {
this.pStream.println$();
});

Clazz.newMeth(C$, 'encodeBufferPrefix$java_io_OutputStream',  function (a) {
this.pStream=Clazz.new_($I$(1,1).c$$java_io_OutputStream,[a]);
this.pStream.print$S("begin " + this.mode + " " );
if (this.bufferName != null ) {
this.pStream.println$S(this.bufferName);
} else {
this.pStream.println$S("encoder.bin");
}this.pStream.flush$();
});

Clazz.newMeth(C$, 'encodeBufferSuffix$java_io_OutputStream',  function (a) {
this.pStream.println$S(" \nend");
this.pStream.flush$();
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

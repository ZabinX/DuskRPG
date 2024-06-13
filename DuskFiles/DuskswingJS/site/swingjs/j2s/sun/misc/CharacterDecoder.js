(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'sun.misc.CEStreamExhausted','java.io.PushbackInputStream','java.io.ByteArrayInputStream','java.io.ByteArrayOutputStream','java.nio.ByteBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharacterDecoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'decodeBufferPrefix$java_io_PushbackInputStream$java_io_OutputStream',  function (aStream, bStream) {
});

Clazz.newMeth(C$, 'decodeBufferSuffix$java_io_PushbackInputStream$java_io_OutputStream',  function (aStream, bStream) {
});

Clazz.newMeth(C$, 'decodeLinePrefix$java_io_PushbackInputStream$java_io_OutputStream',  function (aStream, bStream) {
return (this.bytesPerLine$());
});

Clazz.newMeth(C$, 'decodeLineSuffix$java_io_PushbackInputStream$java_io_OutputStream',  function (aStream, bStream) {
});

Clazz.newMeth(C$, 'decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I',  function (aStream, bStream, l) {
throw Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'readFully$java_io_InputStream$BA$I$I',  function ($in, buffer, offset, len) {
for (var i=0; i < len; i++) {
var q=$in.read$();
if (q == -1) return ((i == 0) ? -1 : i);
buffer[i + offset]=(q|0);
}
return len;
});

Clazz.newMeth(C$, 'decodeBuffer$java_io_InputStream$java_io_OutputStream',  function (aStream, bStream) {
var i;
var totalBytes=0;
var ps=Clazz.new_($I$(2,1).c$$java_io_InputStream,[aStream]);
this.decodeBufferPrefix$java_io_PushbackInputStream$java_io_OutputStream(ps, bStream);
while (true){
var length;
try {
length=this.decodeLinePrefix$java_io_PushbackInputStream$java_io_OutputStream(ps, bStream);
for (i=0; (i + this.bytesPerAtom$()) < length; i+=this.bytesPerAtom$()) {
this.decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I(ps, bStream, this.bytesPerAtom$());
totalBytes+=this.bytesPerAtom$();
}
if ((i + this.bytesPerAtom$()) == length) {
this.decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I(ps, bStream, this.bytesPerAtom$());
totalBytes+=this.bytesPerAtom$();
} else {
this.decodeAtom$java_io_PushbackInputStream$java_io_OutputStream$I(ps, bStream, length - i);
totalBytes+=(length - i);
}this.decodeLineSuffix$java_io_PushbackInputStream$java_io_OutputStream(ps, bStream);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.misc.CEStreamExhausted")){
break;
} else {
throw e;
}
}
}
this.decodeBufferSuffix$java_io_PushbackInputStream$java_io_OutputStream(ps, bStream);
});

Clazz.newMeth(C$, 'decodeBuffer$S',  function (inputString) {
var inputBuffer=Clazz.array(Byte.TYPE, [inputString.length$()]);
var inStream;
var outStream;
inputString.getBytes$I$I$BA$I(0, inputString.length$(), inputBuffer, 0);
inStream=Clazz.new_($I$(3,1).c$$BA,[inputBuffer]);
outStream=Clazz.new_($I$(4,1));
this.decodeBuffer$java_io_InputStream$java_io_OutputStream(inStream, outStream);
return (outStream.toByteArray$());
});

Clazz.newMeth(C$, 'decodeBuffer$java_io_InputStream',  function ($in) {
var outStream=Clazz.new_($I$(4,1));
this.decodeBuffer$java_io_InputStream$java_io_OutputStream($in, outStream);
return (outStream.toByteArray$());
});

Clazz.newMeth(C$, 'decodeBufferToByteBuffer$S',  function (inputString) {
return $I$(5,"wrap$BA",[this.decodeBuffer$S(inputString)]);
});

Clazz.newMeth(C$, 'decodeBufferToByteBuffer$java_io_InputStream',  function ($in) {
return $I$(5,"wrap$BA",[this.decodeBuffer$java_io_InputStream($in)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

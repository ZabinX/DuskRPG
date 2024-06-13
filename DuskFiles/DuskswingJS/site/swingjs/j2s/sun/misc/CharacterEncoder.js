(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'java.io.PrintStream','java.io.ByteArrayInputStream','java.io.ByteArrayOutputStream','Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharacterEncoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pStream','java.io.PrintStream']]]

Clazz.newMeth(C$, 'encodeBufferPrefix$java_io_OutputStream',  function (aStream) {
this.pStream=Clazz.new_($I$(1,1).c$$java_io_OutputStream,[aStream]);
});

Clazz.newMeth(C$, 'encodeBufferSuffix$java_io_OutputStream',  function (aStream) {
});

Clazz.newMeth(C$, 'encodeLinePrefix$java_io_OutputStream$I',  function (aStream, aLength) {
});

Clazz.newMeth(C$, 'encodeLineSuffix$java_io_OutputStream',  function (aStream) {
this.pStream.println$();
});

Clazz.newMeth(C$, 'readFully$java_io_InputStream$BA',  function ($in, buffer) {
for (var i=0; i < buffer.length; i++) {
var q=$in.read$();
if (q == -1) return i;
buffer[i]=(q|0);
}
return buffer.length;
});

Clazz.newMeth(C$, 'encode$java_io_InputStream$java_io_OutputStream',  function (inStream, outStream) {
var j;
var numBytes;
var tmpbuffer=Clazz.array(Byte.TYPE, [this.bytesPerLine$()]);
this.encodeBufferPrefix$java_io_OutputStream(outStream);
while (true){
numBytes=this.readFully$java_io_InputStream$BA(inStream, tmpbuffer);
if (numBytes == 0) {
break;
}this.encodeLinePrefix$java_io_OutputStream$I(outStream, numBytes);
for (j=0; j < numBytes; j+=this.bytesPerAtom$()) {
if ((j + this.bytesPerAtom$()) <= numBytes) {
this.encodeAtom$java_io_OutputStream$BA$I$I(outStream, tmpbuffer, j, this.bytesPerAtom$());
} else {
this.encodeAtom$java_io_OutputStream$BA$I$I(outStream, tmpbuffer, j, (numBytes) - j);
}}
if (numBytes < this.bytesPerLine$()) {
break;
} else {
this.encodeLineSuffix$java_io_OutputStream(outStream);
}}
this.encodeBufferSuffix$java_io_OutputStream(outStream);
});

Clazz.newMeth(C$, 'encode$BA$java_io_OutputStream',  function (aBuffer, aStream) {
var inStream=Clazz.new_($I$(2,1).c$$BA,[aBuffer]);
this.encode$java_io_InputStream$java_io_OutputStream(inStream, aStream);
});

Clazz.newMeth(C$, 'encode$BA',  function (aBuffer) {
var outStream=Clazz.new_($I$(3,1));
var inStream=Clazz.new_($I$(2,1).c$$BA,[aBuffer]);
var retVal=null;
try {
this.encode$java_io_InputStream$java_io_OutputStream(inStream, outStream);
retVal=outStream.toString$S("8859_1");
} catch (IOException) {
if (Clazz.exceptionOf(IOException,"Exception")){
throw Clazz.new_($I$(4,1).c$$S,["CharacterEncoder.encode internal error"]);
} else {
throw IOException;
}
}
return (retVal);
});

Clazz.newMeth(C$, 'getBytes$java_nio_ByteBuffer',  function (bb) {
var buf=null;
if (bb.hasArray$()) {
var tmp=bb.array$();
if ((tmp.length == bb.capacity$()) && (tmp.length == bb.remaining$()) ) {
buf=tmp;
bb.position$I(bb.limit$());
}}if (buf == null ) {
buf=Clazz.array(Byte.TYPE, [bb.remaining$()]);
bb.get$BA(buf);
}return buf;
}, p$1);

Clazz.newMeth(C$, 'encode$java_nio_ByteBuffer$java_io_OutputStream',  function (aBuffer, aStream) {
var buf=p$1.getBytes$java_nio_ByteBuffer.apply(this, [aBuffer]);
this.encode$BA$java_io_OutputStream(buf, aStream);
});

Clazz.newMeth(C$, 'encode$java_nio_ByteBuffer',  function (aBuffer) {
var buf=p$1.getBytes$java_nio_ByteBuffer.apply(this, [aBuffer]);
return this.encode$BA(buf);
});

Clazz.newMeth(C$, 'encodeBuffer$java_io_InputStream$java_io_OutputStream',  function (inStream, outStream) {
var j;
var numBytes;
var tmpbuffer=Clazz.array(Byte.TYPE, [this.bytesPerLine$()]);
this.encodeBufferPrefix$java_io_OutputStream(outStream);
while (true){
numBytes=this.readFully$java_io_InputStream$BA(inStream, tmpbuffer);
if (numBytes == 0) {
break;
}this.encodeLinePrefix$java_io_OutputStream$I(outStream, numBytes);
for (j=0; j < numBytes; j+=this.bytesPerAtom$()) {
if ((j + this.bytesPerAtom$()) <= numBytes) {
this.encodeAtom$java_io_OutputStream$BA$I$I(outStream, tmpbuffer, j, this.bytesPerAtom$());
} else {
this.encodeAtom$java_io_OutputStream$BA$I$I(outStream, tmpbuffer, j, (numBytes) - j);
}}
this.encodeLineSuffix$java_io_OutputStream(outStream);
if (numBytes < this.bytesPerLine$()) {
break;
}}
this.encodeBufferSuffix$java_io_OutputStream(outStream);
});

Clazz.newMeth(C$, 'encodeBuffer$BA$java_io_OutputStream',  function (aBuffer, aStream) {
var inStream=Clazz.new_($I$(2,1).c$$BA,[aBuffer]);
this.encodeBuffer$java_io_InputStream$java_io_OutputStream(inStream, aStream);
});

Clazz.newMeth(C$, 'encodeBuffer$BA',  function (aBuffer) {
var outStream=Clazz.new_($I$(3,1));
var inStream=Clazz.new_($I$(2,1).c$$BA,[aBuffer]);
try {
this.encodeBuffer$java_io_InputStream$java_io_OutputStream(inStream, outStream);
} catch (IOException) {
if (Clazz.exceptionOf(IOException,"Exception")){
throw Clazz.new_($I$(4,1).c$$S,["CharacterEncoder.encodeBuffer internal error"]);
} else {
throw IOException;
}
}
return (outStream.toString());
});

Clazz.newMeth(C$, 'encodeBuffer$java_nio_ByteBuffer$java_io_OutputStream',  function (aBuffer, aStream) {
var buf=p$1.getBytes$java_nio_ByteBuffer.apply(this, [aBuffer]);
this.encodeBuffer$BA$java_io_OutputStream(buf, aStream);
});

Clazz.newMeth(C$, 'encodeBuffer$java_nio_ByteBuffer',  function (aBuffer) {
var buf=p$1.getBytes$java_nio_ByteBuffer.apply(this, [aBuffer]);
return this.encodeBuffer$BA(buf);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

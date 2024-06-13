(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.ByteBuffer','java.nio.channels.Channels','java.io.OutputStream','Thread','java.io.InputStream','java.io.FileInputStream',['java.nio.channels.Channels','.ReadableByteChannelImpl'],'java.io.FileOutputStream',['java.nio.channels.Channels','.WritableByteChannelImpl'],'sun.nio.cs.StreamDecoder','java.nio.charset.Charset','sun.nio.cs.StreamEncoder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Channels", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ReadableByteChannelImpl',10],['WritableByteChannelImpl',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'checkNotNull$O$S',  function (o, name) {
if (o == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["\"" + name + "\" is null!" ]);
}, 1);

Clazz.newMeth(C$, 'writeFullyImpl$java_nio_channels_WritableByteChannel$java_nio_ByteBuffer',  function (ch, bb) {
while (bb.remaining$() > 0){
var n=ch.write$java_nio_ByteBuffer(bb);
if (n <= 0) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["no bytes written"]);
}
}, 1);

Clazz.newMeth(C$, 'writeFully$java_nio_channels_WritableByteChannel$java_nio_ByteBuffer',  function (ch, bb) {
if (Clazz.instanceOf(ch, "java.nio.channels.SelectableChannel")) {
var sc=ch;
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(sc.blockingLock$());
{
if (!sc.isBlocking$()) throw Clazz.new_(Clazz.load('java.nio.channels.IllegalBlockingModeException'));
C$.writeFullyImpl$java_nio_channels_WritableByteChannel$java_nio_ByteBuffer(ch, bb);
}} else {
C$.writeFullyImpl$java_nio_channels_WritableByteChannel$java_nio_ByteBuffer(ch, bb);
}}, 1);

Clazz.newMeth(C$, 'newInputStream$java_nio_channels_ReadableByteChannel',  function (ch) {
C$.checkNotNull$O$S(ch, "ch");
return (ch).getInputStream$();
}, 1);

Clazz.newMeth(C$, 'newOutputStream$java_nio_channels_WritableByteChannel',  function (ch) {
C$.checkNotNull$O$S(ch, "ch");
return ((P$.Channels$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Channels$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.OutputStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bb=null;
this.bs=null;
this.b1=null;
},1);

C$.$fields$=[['O',['bb','java.nio.ByteBuffer','bs','byte[]','+b1']]]

Clazz.newMeth(C$, 'write$I',  function (b) {
if (this.b1 == null ) this.b1=Clazz.array(Byte.TYPE, [1]);
this.b1[0]=(b|0);
this.write$BA(this.b1);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (bs, off, len) {
if ((off < 0) || (off > bs.length) || (len < 0) || ((off + len) > bs.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}var bb=((this.bs === bs ) ? this.bb : $I$(1).wrap$BA(bs));
bb.limit$I(Math.min(off + len, bb.capacity$()));
bb.position$I(off);
this.bb=bb;
this.bs=bs;
$I$(2).writeFully$java_nio_channels_WritableByteChannel$java_nio_ByteBuffer(this.$finals$.ch, bb);
});

Clazz.newMeth(C$, 'close$',  function () {
this.$finals$.ch.close$();
});
})()
), Clazz.new_($I$(3,1),[this, {ch:ch}],P$.Channels$1));
}, 1);

Clazz.newMeth(C$, 'newInputStream$java_nio_channels_AsynchronousByteChannel',  function (ch) {
C$.checkNotNull$O$S(ch, "ch");
return ((P$.Channels$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Channels$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.InputStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bb=null;
this.bs=null;
this.b1=null;
},1);

C$.$fields$=[['O',['bb','java.nio.ByteBuffer','bs','byte[]','+b1']]]

Clazz.newMeth(C$, 'read$',  function () {
if (this.b1 == null ) this.b1=Clazz.array(Byte.TYPE, [1]);
var n=this.read$BA(this.b1);
if (n == 1) return this.b1[0] & 255;
return -1;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (bs, off, len) {
if ((off < 0) || (off > bs.length) || (len < 0) || ((off + len) > bs.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) return 0;
var bb=((this.bs === bs ) ? this.bb : $I$(1).wrap$BA(bs));
bb.position$I(off);
bb.limit$I(Math.min(off + len, bb.capacity$()));
this.bb=bb;
this.bs=bs;
var interrupted=false;
try {
for (; ; ) {
try {
return (this.$finals$.ch.read$java_nio_ByteBuffer(bb).get$()).$c();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.util.concurrent.ExecutionException")){
var ee = e$$;
{
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[ee.getCause$()]);
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var ie = e$$;
{
interrupted=true;
}
} else {
throw e$$;
}
}
}
} finally {
if (interrupted) $I$(4).currentThread$().interrupt$();
}
});

Clazz.newMeth(C$, 'close$',  function () {
this.$finals$.ch.close$();
});
})()
), Clazz.new_($I$(5,1),[this, {ch:ch}],P$.Channels$2));
}, 1);

Clazz.newMeth(C$, 'newOutputStream$java_nio_channels_AsynchronousByteChannel',  function (ch) {
C$.checkNotNull$O$S(ch, "ch");
return ((P$.Channels$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Channels$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.OutputStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bb=null;
this.bs=null;
this.b1=null;
},1);

C$.$fields$=[['O',['bb','java.nio.ByteBuffer','bs','byte[]','+b1']]]

Clazz.newMeth(C$, 'write$I',  function (b) {
if (this.b1 == null ) this.b1=Clazz.array(Byte.TYPE, [1]);
this.b1[0]=(b|0);
this.write$BA(this.b1);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (bs, off, len) {
if ((off < 0) || (off > bs.length) || (len < 0) || ((off + len) > bs.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}var bb=((this.bs === bs ) ? this.bb : $I$(1).wrap$BA(bs));
bb.limit$I(Math.min(off + len, bb.capacity$()));
bb.position$I(off);
this.bb=bb;
this.bs=bs;
var interrupted=false;
try {
while (bb.remaining$() > 0){
try {
this.$finals$.ch.write$java_nio_ByteBuffer(bb).get$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.util.concurrent.ExecutionException")){
var ee = e$$;
{
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[ee.getCause$()]);
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var ie = e$$;
{
interrupted=true;
}
} else {
throw e$$;
}
}
}
} finally {
if (interrupted) $I$(4).currentThread$().interrupt$();
}
});

Clazz.newMeth(C$, 'close$',  function () {
this.$finals$.ch.close$();
});
})()
), Clazz.new_($I$(3,1),[this, {ch:ch}],P$.Channels$3));
}, 1);

Clazz.newMeth(C$, 'newChannel$java_io_InputStream',  function ($in) {
C$.checkNotNull$O$S($in, "in");
if (Clazz.instanceOf($in, "java.io.FileInputStream") && Clazz.getClass($I$(6)).equals$O($in.getClass$()) ) {
return ($in).getChannel$();
}return Clazz.new_($I$(7,1).c$$java_io_InputStream,[$in]);
}, 1);

Clazz.newMeth(C$, 'newChannel$java_io_OutputStream',  function (out) {
C$.checkNotNull$O$S(out, "out");
if (Clazz.instanceOf(out, "java.io.FileOutputStream") && Clazz.getClass($I$(8)).equals$O(out.getClass$()) ) {
return (out).getChannel$();
}return Clazz.new_($I$(9,1).c$$java_io_OutputStream,[out]);
}, 1);

Clazz.newMeth(C$, 'newReader$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder$I',  function (ch, dec, minBufferCap) {
C$.checkNotNull$O$S(ch, "ch");
return $I$(10,"forDecoder$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder$I",[ch, dec.reset$(), minBufferCap]);
}, 1);

Clazz.newMeth(C$, 'newReader$java_nio_channels_ReadableByteChannel$S',  function (ch, csName) {
C$.checkNotNull$O$S(csName, "csName");
return C$.newReader$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder$I(ch, $I$(11).forName$S(csName).newDecoder$(), -1);
}, 1);

Clazz.newMeth(C$, 'newWriter$java_nio_channels_WritableByteChannel$java_nio_charset_CharsetEncoder$I',  function (ch, enc, minBufferCap) {
C$.checkNotNull$O$S(ch, "ch");
return $I$(12,"forEncoder$java_nio_channels_WritableByteChannel$java_nio_charset_CharsetEncoder$I",[ch, enc.reset$(), minBufferCap]);
}, 1);

Clazz.newMeth(C$, 'newWriter$java_nio_channels_WritableByteChannel$S',  function (ch, csName) {
C$.checkNotNull$O$S(csName, "csName");
return C$.newWriter$java_nio_channels_WritableByteChannel$java_nio_charset_CharsetEncoder$I(ch, $I$(11).forName$S(csName).newEncoder$(), -1);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Channels, "ReadableByteChannelImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['swingjs.JSFileSystem','.JSByteChannel'], 'java.nio.channels.ReadableByteChannel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Channels, "WritableByteChannelImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.spi.AbstractInterruptibleChannel', 'java.nio.channels.WritableByteChannel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buf=Clazz.array(Byte.TYPE, [0]);
this.$open=true;
this.writeLock= Clazz.new_();
},1);

C$.$fields$=[['Z',['$open'],'O',['out','java.io.OutputStream','buf','byte[]','writeLock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
Clazz.super_(C$, this);
this.out=out;
}, 1);

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer',  function (src) {
var len=src.remaining$();
var totalWritten=0;
{
while (totalWritten < len){
var bytesToWrite=Math.min((len - totalWritten), 8192);
if (this.buf.length < bytesToWrite) this.buf=Clazz.array(Byte.TYPE, [bytesToWrite]);
src.get$BA$I$I(this.buf, 0, bytesToWrite);
try {
this.begin$();
this.out.write$BA$I$I(this.buf, 0, bytesToWrite);
} finally {
this.end$Z(bytesToWrite > 0);
}
totalWritten+=bytesToWrite;
}
return totalWritten;
}});

Clazz.newMeth(C$, 'implCloseChannel$',  function () {
this.out.close$();
this.$open=false;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

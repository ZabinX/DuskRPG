(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'java.nio.charset.Charset','java.nio.charset.CodingErrorAction','java.nio.ByteBuffer','java.nio.CharBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StreamEncoder", null, 'java.io.Writer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isOpen=true;
this.haveLeftoverChar=false;
this.lcb=null;
},1);

C$.$fields$=[['Z',['isOpen','haveLeftoverChar'],'C',['leftoverChar'],'O',['cs','java.nio.charset.Charset','encoder','java.nio.charset.CharsetEncoder','bb','java.nio.ByteBuffer','out','java.io.OutputStream','ch','java.nio.channels.WritableByteChannel','lcb','java.nio.CharBuffer']]]

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (!this.isOpen) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'forOutputStreamWriter$java_io_OutputStream$O$S',  function (out, lock, charsetName) {
var csn=charsetName;
if (csn == null ) csn=$I$(1).defaultCharset$().name$();
try {
if ($I$(1).isSupported$S(csn)) return Clazz.new_(C$.c$$java_io_OutputStream$O$java_nio_charset_Charset,[out, lock, $I$(1).forName$S(csn)]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.IllegalCharsetNameException")){
} else {
throw x;
}
}
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[csn]);
}, 1);

Clazz.newMeth(C$, 'forOutputStreamWriter$java_io_OutputStream$O$java_nio_charset_Charset',  function (out, lock, cs) {
return Clazz.new_(C$.c$$java_io_OutputStream$O$java_nio_charset_Charset,[out, lock, cs]);
}, 1);

Clazz.newMeth(C$, 'forOutputStreamWriter$java_io_OutputStream$O$java_nio_charset_CharsetEncoder',  function (out, lock, enc) {
return Clazz.new_(C$.c$$java_io_OutputStream$O$java_nio_charset_CharsetEncoder,[out, lock, enc]);
}, 1);

Clazz.newMeth(C$, 'forEncoder$java_nio_channels_WritableByteChannel$java_nio_charset_CharsetEncoder$I',  function (ch, enc, minBufferCap) {
return Clazz.new_(C$.c$$java_nio_channels_WritableByteChannel$java_nio_charset_CharsetEncoder$I,[ch, enc, minBufferCap]);
}, 1);

Clazz.newMeth(C$, 'getEncoding$',  function () {
if (p$1.isOpen.apply(this, [])) return this.encodingName$();
return null;
});

Clazz.newMeth(C$, 'flushBuffer$',  function () {
{
if (p$1.isOpen.apply(this, [])) this.implFlushBuffer$();
 else throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}});

Clazz.newMeth(C$, 'write$I',  function (c) {
var cbuf=Clazz.array(Character.TYPE, [1]);
cbuf[0]=String.fromCharCode(c);
this.write$CA$I$I(cbuf, 0, 1);
});

Clazz.newMeth(C$, 'write$CA$I$I',  function (cbuf, off, len) {
{
p$1.ensureOpen.apply(this, []);
if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}this.implWrite$CA$I$I(cbuf, off, len);
}});

Clazz.newMeth(C$, 'write$S$I$I',  function (str, off, len) {
if (len < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
var cbuf=Clazz.array(Character.TYPE, [len]);
str.getChars$I$I$CA$I(off, off + len, cbuf, 0);
this.write$CA$I$I(cbuf, 0, len);
});

Clazz.newMeth(C$, 'flush$',  function () {
{
p$1.ensureOpen.apply(this, []);
this.implFlush$();
}});

Clazz.newMeth(C$, 'close$',  function () {
{
if (!this.isOpen) return;
this.implClose$();
this.isOpen=false;
}});

Clazz.newMeth(C$, 'isOpen',  function () {
return this.isOpen;
}, p$1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$O$java_nio_charset_Charset',  function (out, lock, cs) {
C$.c$$java_io_OutputStream$O$java_nio_charset_CharsetEncoder.apply(this, [out, lock, cs.newEncoder$().onMalformedInput$java_nio_charset_CodingErrorAction($I$(2).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(2).REPLACE)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$O$java_nio_charset_CharsetEncoder',  function (out, lock, enc) {
;C$.superclazz.c$$O.apply(this,[lock]);C$.$init$.apply(this);
this.out=out;
this.ch=null;
this.cs=enc.charset$();
this.encoder=enc;
if (false && Clazz.instanceOf(out, "java.io.FileOutputStream") ) {
this.ch=(out).getChannel$();
if (this.ch != null ) this.bb=$I$(3).allocateDirect$I(8192);
}if (this.ch == null ) {
this.bb=$I$(3).allocate$I(8192);
}}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_WritableByteChannel$java_nio_charset_CharsetEncoder$I',  function (ch, enc, mbc) {
Clazz.super_(C$, this);
this.out=null;
this.ch=ch;
this.cs=enc.charset$();
this.encoder=enc;
this.bb=$I$(3).allocate$I(mbc < 0 ? 8192 : mbc);
}, 1);

Clazz.newMeth(C$, 'writeBytes',  function () {
this.bb.flip$();
var lim=this.bb.limit$();
var pos=this.bb.position$();
Clazz.assert(C$, this, function(){return (pos <= lim)});
var rem=(pos <= lim ? lim - pos : 0);
if (rem > 0) {
if (this.ch != null ) {
if (this.ch.write$java_nio_ByteBuffer(this.bb) != rem) Clazz.assert(C$, this, function(){return false}, function(){return rem});
} else {
this.out.write$BA$I$I(this.bb.array$(), this.bb.arrayOffset$() + pos, rem);
}}this.bb.clear$();
}, p$1);

Clazz.newMeth(C$, 'flushLeftoverChar$java_nio_CharBuffer$Z',  function (cb, endOfInput) {
if (!this.haveLeftoverChar && !endOfInput ) return;
if (this.lcb == null ) this.lcb=$I$(4).allocate$I(2);
 else this.lcb.clear$();
if (this.haveLeftoverChar) this.lcb.put$C(this.leftoverChar);
if ((cb != null ) && cb.hasRemaining$() ) this.lcb.put$C(cb.get$());
this.lcb.flip$();
while (this.lcb.hasRemaining$() || endOfInput ){
var cr=this.encoder.encode$java_nio_CharBuffer$java_nio_ByteBuffer$Z(this.lcb, this.bb, endOfInput);
if (cr.isUnderflow$()) {
if (this.lcb.hasRemaining$()) {
this.leftoverChar=this.lcb.get$();
if (cb != null  && cb.hasRemaining$() ) p$1.flushLeftoverChar$java_nio_CharBuffer$Z.apply(this, [cb, endOfInput]);
return;
}break;
}if (cr.isOverflow$()) {
Clazz.assert(C$, this, function(){return this.bb.position$() > 0});
p$1.writeBytes.apply(this, []);
continue;
}cr.throwException$();
}
this.haveLeftoverChar=false;
}, p$1);

Clazz.newMeth(C$, 'implWrite$CA$I$I',  function (cbuf, off, len) {
var cb=$I$(4).wrap$CA$I$I(cbuf, off, len);
if (this.haveLeftoverChar) p$1.flushLeftoverChar$java_nio_CharBuffer$Z.apply(this, [cb, false]);
while (cb.hasRemaining$()){
var cr=this.encoder.encode$java_nio_CharBuffer$java_nio_ByteBuffer$Z(cb, this.bb, false);
if (cr.isUnderflow$()) {
Clazz.assert(C$, this, function(){return (cb.remaining$() <= 1)}, function(){return cb.remaining$()});
if (cb.remaining$() == 1) {
this.haveLeftoverChar=true;
this.leftoverChar=cb.get$();
}break;
}if (cr.isOverflow$()) {
Clazz.assert(C$, this, function(){return this.bb.position$() > 0});
p$1.writeBytes.apply(this, []);
continue;
}cr.throwException$();
}
});

Clazz.newMeth(C$, 'implFlushBuffer$',  function () {
if (this.bb.position$() > 0) p$1.writeBytes.apply(this, []);
});

Clazz.newMeth(C$, 'implFlush$',  function () {
this.implFlushBuffer$();
if (this.out != null ) this.out.flush$();
});

Clazz.newMeth(C$, 'implClose$',  function () {
p$1.flushLeftoverChar$java_nio_CharBuffer$Z.apply(this, [null, true]);
try {
for (; ; ) {
var cr=this.encoder.flush$java_nio_ByteBuffer(this.bb);
if (cr.isUnderflow$()) break;
if (cr.isOverflow$()) {
Clazz.assert(C$, this, function(){return this.bb.position$() > 0});
p$1.writeBytes.apply(this, []);
continue;
}cr.throwException$();
}
if (this.bb.position$() > 0) p$1.writeBytes.apply(this, []);
if (this.ch != null ) this.ch.close$();
 else this.out.close$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.encoder.reset$();
throw x;
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'encodingName$',  function () {
return ((Clazz.instanceOf(this.cs, "sun.nio.cs.HistoricallyNamedCharset")) ? (this.cs).historicalName$() : this.cs.name$());
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

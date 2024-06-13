(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'java.nio.charset.Charset','java.nio.charset.CodingErrorAction','java.nio.ByteBuffer','java.nio.CharBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StreamDecoder", null, 'java.io.Reader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isOpen=true;
this.haveLeftoverChar=false;
},1);

C$.$fields$=[['Z',['isOpen','haveLeftoverChar'],'C',['leftoverChar'],'O',['cs','java.nio.charset.Charset','decoder','java.nio.charset.CharsetDecoder','bb','java.nio.ByteBuffer','$in','java.io.InputStream','ch','java.nio.channels.ReadableByteChannel']]
,['Z',['channelsAvailable']]]

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (!this.isOpen) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'forInputStreamReader$java_io_InputStream$O$S',  function ($in, lock, charsetName) {
var csn=charsetName;
if (csn == null ) csn=$I$(1).defaultCharset$().name$();
try {
if ($I$(1).isSupported$S(csn)) return Clazz.new_(C$.c$$java_io_InputStream$O$java_nio_charset_Charset,[$in, lock, $I$(1).forName$S(csn)]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.charset.IllegalCharsetNameException")){
} else {
throw x;
}
}
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[csn]);
}, 1);

Clazz.newMeth(C$, 'forInputStreamReader$java_io_InputStream$O$java_nio_charset_Charset',  function ($in, lock, cs) {
return Clazz.new_(C$.c$$java_io_InputStream$O$java_nio_charset_Charset,[$in, lock, cs]);
}, 1);

Clazz.newMeth(C$, 'forInputStreamReader$java_io_InputStream$O$java_nio_charset_CharsetDecoder',  function ($in, lock, dec) {
return Clazz.new_(C$.c$$java_io_InputStream$O$java_nio_charset_CharsetDecoder,[$in, lock, dec]);
}, 1);

Clazz.newMeth(C$, 'forDecoder$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder$I',  function (ch, dec, minBufferCap) {
return Clazz.new_(C$.c$$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder$I,[ch, dec, minBufferCap]);
}, 1);

Clazz.newMeth(C$, 'getEncoding$',  function () {
if (p$1.isOpen.apply(this, [])) return this.encodingName$();
return null;
});

Clazz.newMeth(C$, 'read$',  function () {
return p$1.read0.apply(this, []);
});

Clazz.newMeth(C$, 'read0',  function () {
{
if (this.haveLeftoverChar) {
this.haveLeftoverChar=false;
return this.leftoverChar.$c();
}var cb=Clazz.array(Character.TYPE, [2]);
var n=this.read$CA$I$I(cb, 0, 2);
switch (n) {
case -1:
return -1;
case 2:
this.leftoverChar=cb[1];
this.haveLeftoverChar=true;
case 1:
return cb[0].$c();
default:
Clazz.assert(C$, this, function(){return false}, function(){return n});
return -1;
}
}}, p$1);

Clazz.newMeth(C$, 'read$CA$I$I',  function (cbuf, offset, length) {
var off=offset;
var len=length;
{
p$1.ensureOpen.apply(this, []);
if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (len == 0) return 0;
var n=0;
if (this.haveLeftoverChar) {
cbuf[off]=this.leftoverChar;
++off;
--len;
this.haveLeftoverChar=false;
n=1;
if ((len == 0) || !this.implReady$() ) return n;
}if (len == 1) {
var c=p$1.read0.apply(this, []);
if (c == -1) return (n == 0) ? -1 : n;
cbuf[off]=String.fromCharCode(c);
return n + 1;
}return n + this.implRead$CA$I$I(cbuf, off, off + len);
}});

Clazz.newMeth(C$, 'ready$',  function () {
{
p$1.ensureOpen.apply(this, []);
return this.haveLeftoverChar || this.implReady$() ;
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

Clazz.newMeth(C$, 'getChannel$java_io_FileInputStream',  function ($in) {
if (!C$.channelsAvailable) return null;
try {
return $in.getChannel$();
} catch (x) {
if (Clazz.exceptionOf(x,"UnsatisfiedLinkError")){
C$.channelsAvailable=false;
return null;
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$O$java_nio_charset_Charset',  function ($in, lock, cs) {
C$.c$$java_io_InputStream$O$java_nio_charset_CharsetDecoder.apply(this, [$in, lock, cs.newDecoder$().onMalformedInput$java_nio_charset_CodingErrorAction($I$(2).REPLACE).onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(2).REPLACE)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$O$java_nio_charset_CharsetDecoder',  function ($in, lock, dec) {
;C$.superclazz.c$$O.apply(this,[lock]);C$.$init$.apply(this);
this.cs=dec.charset$();
this.decoder=dec;
if (false && Clazz.instanceOf($in, "java.io.FileInputStream") ) {
this.ch=C$.getChannel$java_io_FileInputStream($in);
if (this.ch != null ) this.bb=$I$(3).allocateDirect$I(8192);
}if (this.ch == null ) {
this.$in=$in;
this.ch=null;
this.bb=$I$(3).allocate$I(8192);
}this.bb.flip$();
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_ReadableByteChannel$java_nio_charset_CharsetDecoder$I',  function (ch, dec, mbc) {
Clazz.super_(C$, this);
this.$in=null;
this.ch=ch;
this.decoder=dec;
this.cs=dec.charset$();
this.bb=$I$(3,"allocate$I",[mbc < 0 ? 8192 : (mbc < 32 ? 32 : mbc)]);
this.bb.flip$();
}, 1);

Clazz.newMeth(C$, 'readBytes',  function () {
this.bb.compact$();
try {
if (this.ch != null ) {
var n=this.ch.read$java_nio_ByteBuffer(this.bb);
if (n < 0) return n;
} else {
var lim=this.bb.limit$();
var pos=this.bb.position$();
Clazz.assert(C$, this, function(){return (pos <= lim)});
var rem=(pos <= lim ? lim - pos : 0);
Clazz.assert(C$, this, function(){return rem > 0});
var n=this.$in.read$BA$I$I(this.bb.array$(), this.bb.arrayOffset$() + pos, rem);
if (n < 0) return n;
if (n == 0) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Underlying input stream returned zero bytes"]);
Clazz.assert(C$, this, function(){return (n <= rem)}, function(){return "n = " + n + ", rem = " + rem });
this.bb.position$I(pos + n);
}} finally {
this.bb.flip$();
}
var rem=this.bb.remaining$();
Clazz.assert(C$, this, function(){return (rem != 0)}, function(){return rem});
return rem;
}, p$1);

Clazz.newMeth(C$, 'implRead$CA$I$I',  function (cbuf, off, end) {
Clazz.assert(C$, this, function(){return (end - off > 1)});
var cb=$I$(4).wrap$CA$I$I(cbuf, off, end - off);
if (cb.position$() != 0) cb=cb.slice$();
var eof=false;
for (; ; ) {
var cr=this.decoder.decode$java_nio_ByteBuffer$java_nio_CharBuffer$Z(this.bb, cb, eof);
if (cr.isUnderflow$()) {
if (eof) break;
if (!cb.hasRemaining$()) break;
if ((cb.position$() > 0) && !p$1.inReady.apply(this, []) ) break;
var n=p$1.readBytes.apply(this, []);
if (n < 0) {
eof=true;
if ((cb.position$() == 0) && (!this.bb.hasRemaining$()) ) break;
this.decoder.reset$();
}continue;
}if (cr.isOverflow$()) {
Clazz.assert(C$, this, function(){return cb.position$() > 0});
break;
}cr.throwException$();
}
if (eof) {
this.decoder.reset$();
}if (cb.position$() == 0) {
if (eof) return -1;
Clazz.assert(C$, this, function(){return false});
}return cb.position$();
});

Clazz.newMeth(C$, 'encodingName$',  function () {
return ((Clazz.instanceOf(this.cs, "sun.nio.cs.HistoricallyNamedCharset")) ? (this.cs).historicalName$() : this.cs.name$());
});

Clazz.newMeth(C$, 'inReady',  function () {
try {
return (((this.$in != null ) && (this.$in.available$() > 0) ) || (Clazz.instanceOf(this.ch, "java.nio.channels.FileChannel")) );
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
return false;
} else {
throw x;
}
}
}, p$1);

Clazz.newMeth(C$, 'implReady$',  function () {
return this.bb.hasRemaining$() || p$1.inReady.apply(this, []) ;
});

Clazz.newMeth(C$, 'implClose$',  function () {
if (this.ch != null ) this.ch.close$();
 else this.$in.close$();
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.channelsAvailable=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

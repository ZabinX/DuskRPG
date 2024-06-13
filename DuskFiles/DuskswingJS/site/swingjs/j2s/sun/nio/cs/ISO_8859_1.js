(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},p$2={},I$=[[0,'java.nio.charset.CoderResult',['sun.nio.cs.Surrogate','.Parser'],'sun.nio.cs.StandardCharsets',['sun.nio.cs.ISO_8859_1','.Decoder'],['sun.nio.cs.ISO_8859_1','.Encoder']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ISO_8859_1", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.nio.charset.Charset', 'sun.nio.cs.HistoricallyNamedCharset');
C$.$classes$=[['Decoder',10],['Encoder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$SA.apply(this,["ISO-8859-1", $I$(3).aliases_ISO_8859_1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'historicalName$',  function () {
return "ISO8859_1";
});

Clazz.newMeth(C$, 'contains$java_nio_charset_Charset',  function (cs) {
return ((Clazz.instanceOf(cs, "sun.nio.cs.US_ASCII")) || (Clazz.instanceOf(cs, "sun.nio.cs.ISO_8859_1")) );
});

Clazz.newMeth(C$, 'newDecoder$',  function () {
return Clazz.new_($I$(4,1).c$$java_nio_charset_Charset,[this]);
});

Clazz.newMeth(C$, 'newEncoder$',  function () {
return Clazz.new_($I$(5,1).c$$java_nio_charset_Charset,[this]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ISO_8859_1, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetDecoder', 'sun.nio.cs.ArrayDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset',  function (cs) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, 1.0, 1.0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
Clazz.assert(C$, this, function(){return (sp <= sl)});
sp=(sp <= sl ? sp : sl);
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
Clazz.assert(C$, this, function(){return (dp <= dl)});
dp=(dp <= dl ? dp : dl);
try {
while (sp < sl){
var b=sa[sp];
if (dp >= dl) return $I$(1).OVERFLOW;
da[dp++]=String.fromCharCode((b & 255));
++sp;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}
}, p$1);

Clazz.newMeth(C$, 'decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var b=src.get$();
if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
dst.put$C(String.fromCharCode((b & 255)));
++mark;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
}, p$1);

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$1.decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
 else return p$1.decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'decode$BA$I$I$CA',  function (src, sp, len, dst) {
if (len > dst.length) len=dst.length;
var dp=0;
while (dp < len)dst[dp++]=String.fromCharCode((src[sp++] & 255));

return dp;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ISO_8859_1, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetEncoder', 'sun.nio.cs.ArrayEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sgp=Clazz.new_($I$(2,1));
this.repl=63;
},1);

C$.$fields$=[['B',['repl'],'O',['sgp','sun.nio.cs.Surrogate.Parser']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset',  function (cs) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, 1.0, 1.0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canEncode$C',  function (c) {
return c <= "\u00ff";
});

Clazz.newMeth(C$, 'isLegalReplacement$BA',  function (repl) {
return true;
});

Clazz.newMeth(C$, 'encodeISOArray$CA$I$BA$I$I',  function (sa, sp, da, dp, len) {
var i=0;
for (; i < len; i++) {
var c=sa[sp++];
if (c > "\u00ff") break;
da[dp++]=(c.$c()|0);
}
return i;
}, 1);

Clazz.newMeth(C$, 'encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var sa=src.array$();
var soff=src.arrayOffset$();
var sp=soff + src.position$();
var sl=soff + src.limit$();
Clazz.assert(C$, this, function(){return (sp <= sl)});
sp=(sp <= sl ? sp : sl);
var da=dst.array$();
var doff=dst.arrayOffset$();
var dp=doff + dst.position$();
var dl=doff + dst.limit$();
Clazz.assert(C$, this, function(){return (dp <= dl)});
dp=(dp <= dl ? dp : dl);
var dlen=dl - dp;
var slen=sl - sp;
var len=(dlen < slen) ? dlen : slen;
try {
var ret=C$.encodeISOArray$CA$I$BA$I$I(sa, sp, da, dp, len);
sp=sp + ret;
dp=dp + ret;
if (ret != len) {
if (this.sgp.parse$C$CA$I$I(sa[sp], sa, sp, sl) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}if (len < slen) return $I$(1).OVERFLOW;
return $I$(1).UNDERFLOW;
} finally {
src.position$I(sp - soff);
dst.position$I(dp - doff);
}
}, p$2);

Clazz.newMeth(C$, 'encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var c=src.get$();
if (c <= "\u00ff") {
if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
dst.put$B(($b$[0] = c.$c(), $b$[0]));
++mark;
continue;
}if (this.sgp.parse$C$java_nio_CharBuffer(c, src) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
}, p$2);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$2.encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
 else return p$2.encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'implReplaceWith$BA',  function (newReplacement) {
this.repl=newReplacement[0];
});

Clazz.newMeth(C$, 'encode$CA$I$I$BA',  function (src, sp, len, dst) {
var dp=0;
var slen=Math.min(len, dst.length);
var sl=sp + slen;
while (sp < sl){
var ret=C$.encodeISOArray$CA$I$BA$I$I(src, sp, dst, dp, slen);
sp=sp + ret;
dp=dp + ret;
if (ret != slen) {
var c=src[sp++];
if (Character.isHighSurrogate$C(c) && sp < sl  && Character.isLowSurrogate$C(src[sp]) ) {
if (len > dst.length) {
++sl;
--len;
}++sp;
}dst[dp++]=this.repl;
slen=Math.min((sl - sp), (dst.length - dp));
}}
return dp;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},p$2={},I$=[[0,'java.nio.charset.CoderResult','sun.nio.cs.UTF_8','java.nio.ByteBuffer','java.nio.charset.CodingErrorAction',['sun.nio.cs.Surrogate','.Parser'],'sun.nio.cs.StandardCharsets',['sun.nio.cs.UTF_8','.Decoder'],['sun.nio.cs.UTF_8','.Encoder']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UTF_8", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.nio.cs.Unicode');
C$.$classes$=[['Decoder',10],['Encoder',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$SA.apply(this,["UTF-8", $I$(6).aliases_UTF_8]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'historicalName$',  function () {
return "UTF8";
});

Clazz.newMeth(C$, 'newDecoder$',  function () {
return Clazz.new_($I$(7,1).c$$java_nio_charset_Charset,[this]);
});

Clazz.newMeth(C$, 'newEncoder$',  function () {
return Clazz.new_($I$(8,1).c$$java_nio_charset_Charset,[this]);
});

Clazz.newMeth(C$, 'updatePositions$java_nio_Buffer$I$java_nio_Buffer$I',  function (src, sp, dst, dp) {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.UTF_8, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetDecoder', 'sun.nio.cs.ArrayDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset',  function (cs) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, 1.0, 1.0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isNotContinuation$I',  function (b) {
return (b & 192) != 128;
}, 1);

Clazz.newMeth(C$, 'isMalformed3$I$I$I',  function (b1, b2, b3) {
return (b1 == -32 && (b2 & 224) == 128 ) || (b2 & 192) != 128  || (b3 & 192) != 128 ;
}, 1);

Clazz.newMeth(C$, 'isMalformed3_2$I$I',  function (b1, b2) {
return (b1 == -32 && (b2 & 224) == 128 ) || (b2 & 192) != 128 ;
}, 1);

Clazz.newMeth(C$, 'isMalformed4$I$I$I',  function (b2, b3, b4) {
return (b2 & 192) != 128 || (b3 & 192) != 128  || (b4 & 192) != 128 ;
}, 1);

Clazz.newMeth(C$, 'isMalformed4_2$I$I',  function (b1, b2) {
return (b1 == 240 && (b2 < 144 || b2 > 191 ) ) || (b1 == 244 && (b2 & 240) != 128 ) || (b2 & 192) != 128  ;
}, 1);

Clazz.newMeth(C$, 'isMalformed4_3$I',  function (b3) {
return (b3 & 192) != 128;
}, 1);

Clazz.newMeth(C$, 'lookupN$java_nio_ByteBuffer$I',  function (src, n) {
for (var i=1; i < n; i++) {
if (C$.isNotContinuation$I(src.get$())) return $I$(1).malformedForLength$I(i);
}
return $I$(1).malformedForLength$I(n);
}, 1);

Clazz.newMeth(C$, 'malformedN$java_nio_ByteBuffer$I',  function (src, nb) {
switch (nb) {
case 1:
case 2:
return $I$(1).malformedForLength$I(1);
case 3:
var b1=src.get$();
var b2=src.get$();
return $I$(1,"malformedForLength$I",[((b1 == -32 && (b2 & 224) == 128 ) || C$.isNotContinuation$I(b2) ) ? 1 : 2]);
case 4:
b1=src.get$() & 255;
b2=src.get$() & 255;
if (b1 > 244 || (b1 == 240 && (b2 < 144 || b2 > 191 ) )  || (b1 == 244 && (b2 & 240) != 128 )  || C$.isNotContinuation$I(b2) ) return $I$(1).malformedForLength$I(1);
if (C$.isNotContinuation$I(src.get$())) return $I$(1).malformedForLength$I(2);
return $I$(1).malformedForLength$I(3);
default:
Clazz.assert(C$, this, function(){return false});
return null;
}
}, 1);

Clazz.newMeth(C$, 'malformed$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I',  function (src, sp, dst, dp, nb) {
src.position$I(sp - src.arrayOffset$());
var cr=C$.malformedN$java_nio_ByteBuffer$I(src, nb);
$I$(2).updatePositions$java_nio_Buffer$I$java_nio_Buffer$I(src, sp, dst, dp);
return cr;
}, 1);

Clazz.newMeth(C$, 'malformed$java_nio_ByteBuffer$I$I',  function (src, mark, nb) {
src.position$I(mark);
var cr=C$.malformedN$java_nio_ByteBuffer$I(src, nb);
src.position$I(mark);
return cr;
}, 1);

Clazz.newMeth(C$, 'malformedForLength$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I',  function (src, sp, dst, dp, malformedNB) {
$I$(2).updatePositions$java_nio_Buffer$I$java_nio_Buffer$I(src, sp, dst, dp);
return $I$(1).malformedForLength$I(malformedNB);
}, 1);

Clazz.newMeth(C$, 'malformedForLength$java_nio_ByteBuffer$I$I',  function (src, mark, malformedNB) {
src.position$I(mark);
return $I$(1).malformedForLength$I(malformedNB);
}, 1);

Clazz.newMeth(C$, 'xflow$java_nio_Buffer$I$I$java_nio_Buffer$I$I',  function (src, sp, sl, dst, dp, nb) {
$I$(2).updatePositions$java_nio_Buffer$I$java_nio_Buffer$I(src, sp, dst, dp);
return (nb == 0 || sl - sp < nb ) ? $I$(1).UNDERFLOW : $I$(1).OVERFLOW;
}, 1);

Clazz.newMeth(C$, 'xflow$java_nio_Buffer$I$I',  function (src, mark, nb) {
src.position$I(mark);
return (nb == 0 || src.remaining$() < nb ) ? $I$(1).UNDERFLOW : $I$(1).OVERFLOW;
}, 1);

Clazz.newMeth(C$, 'decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
var dlASCII=dp + Math.min(sl - sp, dl - dp);
while (dp < dlASCII && sa[sp] >= 0 )da[dp++]=String.fromCharCode(sa[sp++]);

while (sp < sl){
var b1=sa[sp];
if (b1 >= 0) {
if (dp >= dl) return C$.xflow$java_nio_Buffer$I$I$java_nio_Buffer$I$I(src, sp, sl, dst, dp, 1);
da[dp++]=String.fromCharCode(b1);
++sp;
} else if ((b1 >> 5) == -2 && (b1 & 30) != 0 ) {
if (sl - sp < 2 || dp >= dl ) return C$.xflow$java_nio_Buffer$I$I$java_nio_Buffer$I$I(src, sp, sl, dst, dp, 2);
var b2=sa[sp + 1];
if (C$.isNotContinuation$I(b2)) return C$.malformedForLength$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 1);
da[dp++]=String.fromCharCode((((b1 << 6) ^ b2) ^ (3968)));
sp+=2;
} else if ((b1 >> 4) == -2) {
var srcRemaining=sl - sp;
if (srcRemaining < 3 || dp >= dl ) {
if (srcRemaining > 1 && C$.isMalformed3_2$I$I(b1, sa[sp + 1]) ) return C$.malformedForLength$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 1);
return C$.xflow$java_nio_Buffer$I$I$java_nio_Buffer$I$I(src, sp, sl, dst, dp, 3);
}var b2=sa[sp + 1];
var b3=sa[sp + 2];
if (C$.isMalformed3$I$I$I(b1, b2, b3)) return C$.malformed$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 3);
var c=String.fromCharCode(((b1 << 12) ^ (b2 << 6) ^ (b3 ^ (-123008)) ));
if (Character.isSurrogate$C(c)) return C$.malformedForLength$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 3);
da[dp++]=c;
sp+=3;
} else if ((b1 >> 3) == -2) {
var srcRemaining=sl - sp;
if (srcRemaining < 4 || dl - dp < 2 ) {
b1&=255;
if (b1 > 244 || srcRemaining > 1 && C$.isMalformed4_2$I$I(b1, sa[sp + 1] & 255)  ) return C$.malformedForLength$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 1);
if (srcRemaining > 2 && C$.isMalformed4_3$I(sa[sp + 2]) ) return C$.malformedForLength$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 2);
return C$.xflow$java_nio_Buffer$I$I$java_nio_Buffer$I$I(src, sp, sl, dst, dp, 4);
}var b2=sa[sp + 1];
var b3=sa[sp + 2];
var b4=sa[sp + 3];
var uc=((b1 << 18) ^ (b2 << 12) ^ (b3 << 6) ^ (b4 ^ (3678080)) );
if (C$.isMalformed4$I$I$I(b2, b3, b4) || !Character.isSupplementaryCodePoint$I(uc) ) {
return C$.malformed$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 4);
}da[dp++]=Character.highSurrogate$I(uc);
da[dp++]=Character.lowSurrogate$I(uc);
sp+=4;
} else return C$.malformed$java_nio_ByteBuffer$I$java_nio_CharBuffer$I$I(src, sp, dst, dp, 1);
}
return C$.xflow$java_nio_Buffer$I$I$java_nio_Buffer$I$I(src, sp, sl, dst, dp, 0);
}, p$1);

Clazz.newMeth(C$, 'decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var mark=src.position$();
var limit=src.limit$();
while (mark < limit){
var b1=src.get$();
if (b1 >= 0) {
if (dst.remaining$() < 1) return C$.xflow$java_nio_Buffer$I$I(src, mark, 1);
dst.put$C(String.fromCharCode(b1));
++mark;
} else if ((b1 >> 5) == -2 && (b1 & 30) != 0 ) {
if (limit - mark < 2 || dst.remaining$() < 1 ) return C$.xflow$java_nio_Buffer$I$I(src, mark, 2);
var b2=src.get$();
if (C$.isNotContinuation$I(b2)) return C$.malformedForLength$java_nio_ByteBuffer$I$I(src, mark, 1);
dst.put$C(String.fromCharCode((((b1 << 6) ^ b2) ^ (3968))));
mark+=2;
} else if ((b1 >> 4) == -2) {
var srcRemaining=limit - mark;
if (srcRemaining < 3 || dst.remaining$() < 1 ) {
if (srcRemaining > 1 && C$.isMalformed3_2$I$I(b1, src.get$()) ) return C$.malformedForLength$java_nio_ByteBuffer$I$I(src, mark, 1);
return C$.xflow$java_nio_Buffer$I$I(src, mark, 3);
}var b2=src.get$();
var b3=src.get$();
if (C$.isMalformed3$I$I$I(b1, b2, b3)) return C$.malformed$java_nio_ByteBuffer$I$I(src, mark, 3);
var c=String.fromCharCode(((b1 << 12) ^ (b2 << 6) ^ (b3 ^ (-123008)) ));
if (Character.isSurrogate$C(c)) return C$.malformedForLength$java_nio_ByteBuffer$I$I(src, mark, 3);
dst.put$C(c);
mark+=3;
} else if ((b1 >> 3) == -2) {
var srcRemaining=limit - mark;
if (srcRemaining < 4 || dst.remaining$() < 2 ) {
b1&=255;
if (b1 > 244 || srcRemaining > 1 && C$.isMalformed4_2$I$I(b1, src.get$() & 255)  ) return C$.malformedForLength$java_nio_ByteBuffer$I$I(src, mark, 1);
if (srcRemaining > 2 && C$.isMalformed4_3$I(src.get$()) ) return C$.malformedForLength$java_nio_ByteBuffer$I$I(src, mark, 2);
return C$.xflow$java_nio_Buffer$I$I(src, mark, 4);
}var b2=src.get$();
var b3=src.get$();
var b4=src.get$();
var uc=((b1 << 18) ^ (b2 << 12) ^ (b3 << 6) ^ (b4 ^ (3678080)) );
if (C$.isMalformed4$I$I$I(b2, b3, b4) || !Character.isSupplementaryCodePoint$I(uc) ) {
return C$.malformed$java_nio_ByteBuffer$I$I(src, mark, 4);
}dst.put$C(Character.highSurrogate$I(uc));
dst.put$C(Character.lowSurrogate$I(uc));
mark+=4;
} else {
return C$.malformed$java_nio_ByteBuffer$I$I(src, mark, 1);
}}
return C$.xflow$java_nio_Buffer$I$I(src, mark, 0);
}, p$1);

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$1.decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
 else return p$1.decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'getByteBuffer$java_nio_ByteBuffer$BA$I',  function (bb, ba, sp) {
if (bb == null ) bb=$I$(3).wrap$BA(ba);
bb.position$I(sp);
return bb;
}, 1);

Clazz.newMeth(C$, 'decode$BA$I$I$CA',  function (sa, sp, len, da) {
var sl=sp + len;
var dp=0;
var dlASCII=Math.min(len, da.length);
var bb=null;
while (dp < dlASCII && sa[sp] >= 0 )da[dp++]=String.fromCharCode(sa[sp++]);

while (sp < sl){
var b1=sa[sp++];
if (b1 >= 0) {
da[dp++]=String.fromCharCode(b1);
} else if ((b1 >> 5) == -2 && (b1 & 30) != 0 ) {
if (sp < sl) {
var b2=sa[sp++];
if (C$.isNotContinuation$I(b2)) {
if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
da[dp++]=this.replacement$().charAt$I(0);
--sp;
} else {
da[dp++]=String.fromCharCode((((b1 << 6) ^ b2) ^ (3968)));
}continue;
}if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
da[dp++]=this.replacement$().charAt$I(0);
return dp;
} else if ((b1 >> 4) == -2) {
if (sp + 1 < sl) {
var b2=sa[sp++];
var b3=sa[sp++];
if (C$.isMalformed3$I$I$I(b1, b2, b3)) {
if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
da[dp++]=this.replacement$().charAt$I(0);
sp-=3;
bb=C$.getByteBuffer$java_nio_ByteBuffer$BA$I(bb, sa, sp);
sp+=C$.malformedN$java_nio_ByteBuffer$I(bb, 3).length$();
} else {
var c=String.fromCharCode(((b1 << 12) ^ (b2 << 6) ^ (b3 ^ (-123008)) ));
if (Character.isSurrogate$C(c)) {
if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
da[dp++]=this.replacement$().charAt$I(0);
} else {
da[dp++]=c;
}}continue;
}if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
if (sp < sl && C$.isMalformed3_2$I$I(b1, sa[sp]) ) {
da[dp++]=this.replacement$().charAt$I(0);
continue;
}da[dp++]=this.replacement$().charAt$I(0);
return dp;
} else if ((b1 >> 3) == -2) {
if (sp + 2 < sl) {
var b2=sa[sp++];
var b3=sa[sp++];
var b4=sa[sp++];
var uc=((b1 << 18) ^ (b2 << 12) ^ (b3 << 6) ^ (b4 ^ (3678080)) );
if (C$.isMalformed4$I$I$I(b2, b3, b4) || !Character.isSupplementaryCodePoint$I(uc) ) {
if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
da[dp++]=this.replacement$().charAt$I(0);
sp-=4;
bb=C$.getByteBuffer$java_nio_ByteBuffer$BA$I(bb, sa, sp);
sp+=C$.malformedN$java_nio_ByteBuffer$I(bb, 4).length$();
} else {
da[dp++]=Character.highSurrogate$I(uc);
da[dp++]=Character.lowSurrogate$I(uc);
}continue;
}if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
b1&=255;
if (b1 > 244 || sp < sl && C$.isMalformed4_2$I$I(b1, sa[sp] & 255)  ) {
da[dp++]=this.replacement$().charAt$I(0);
continue;
}++sp;
if (sp < sl && C$.isMalformed4_3$I(sa[sp]) ) {
da[dp++]=this.replacement$().charAt$I(0);
continue;
}da[dp++]=this.replacement$().charAt$I(0);
return dp;
} else {
if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
da[dp++]=this.replacement$().charAt$I(0);
}}
return dp;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.UTF_8, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetEncoder', 'sun.nio.cs.ArrayEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.repl=63;
},1);

C$.$fields$=[['B',['repl'],'O',['sgp','sun.nio.cs.Surrogate.Parser']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset',  function (cs) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, 1.1, 3.0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canEncode$C',  function (c) {
return !Character.isSurrogate$C(c);
});

Clazz.newMeth(C$, 'isLegalReplacement$BA',  function (repl) {
return ((repl.length == 1 && repl[0] >= 0 ) || C$.superclazz.prototype.isLegalReplacement$BA.apply(this, [repl]) );
});

Clazz.newMeth(C$, 'overflow$java_nio_CharBuffer$I$java_nio_ByteBuffer$I',  function (src, sp, dst, dp) {
$I$(2).updatePositions$java_nio_Buffer$I$java_nio_Buffer$I(src, sp, dst, dp);
return $I$(1).OVERFLOW;
}, 1);

Clazz.newMeth(C$, 'overflow$java_nio_CharBuffer$I',  function (src, mark) {
src.position$I(mark);
return $I$(1).OVERFLOW;
}, 1);

Clazz.newMeth(C$, 'encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
var dlASCII=dp + Math.min(sl - sp, dl - dp);
while (dp < dlASCII && sa[sp] < "\u0080" )da[dp++]=(sa[sp++].$c()|0);

while (sp < sl){
var c=sa[sp];
if (c.$c() < 128 ) {
if (dp >= dl) return C$.overflow$java_nio_CharBuffer$I$java_nio_ByteBuffer$I(src, sp, dst, dp);
da[dp++]=(c.$c()|0);
} else if (c.$c() < 2048 ) {
if (dl - dp < 2) return C$.overflow$java_nio_CharBuffer$I$java_nio_ByteBuffer$I(src, sp, dst, dp);
da[dp++]=((192 | (c.$c() >> 6))|0);
da[dp++]=((128 | (c.$c() & 63))|0);
} else if (Character.isSurrogate$C(c)) {
if (this.sgp == null ) this.sgp=Clazz.new_($I$(5,1));
var uc=this.sgp.parse$C$CA$I$I(c, sa, sp, sl);
if (uc < 0) {
$I$(2).updatePositions$java_nio_Buffer$I$java_nio_Buffer$I(src, sp, dst, dp);
return this.sgp.error$();
}if (dl - dp < 4) return C$.overflow$java_nio_CharBuffer$I$java_nio_ByteBuffer$I(src, sp, dst, dp);
da[dp++]=((240 | ((uc >> 18)))|0);
da[dp++]=((128 | ((uc >> 12) & 63))|0);
da[dp++]=((128 | ((uc >> 6) & 63))|0);
da[dp++]=((128 | (uc & 63))|0);
++sp;
} else {
if (dl - dp < 3) return C$.overflow$java_nio_CharBuffer$I$java_nio_ByteBuffer$I(src, sp, dst, dp);
da[dp++]=((224 | ((c.$c() >> 12)))|0);
da[dp++]=((128 | ((c.$c() >> 6) & 63))|0);
da[dp++]=((128 | (c.$c() & 63))|0);
}++sp;
}
$I$(2).updatePositions$java_nio_Buffer$I$java_nio_Buffer$I(src, sp, dst, dp);
return $I$(1).UNDERFLOW;
}, p$2);

Clazz.newMeth(C$, 'encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var mark=src.position$();
while (src.hasRemaining$()){
var c=src.get$();
if (c.$c() < 128 ) {
if (!dst.hasRemaining$()) return C$.overflow$java_nio_CharBuffer$I(src, mark);
dst.put$B(($b$[0] = c.$c(), $b$[0]));
} else if (c.$c() < 2048 ) {
if (dst.remaining$() < 2) return C$.overflow$java_nio_CharBuffer$I(src, mark);
dst.put$B(($b$[0] = (192 | (c.$c() >> 6)), $b$[0]));
dst.put$B(($b$[0] = (128 | (c.$c() & 63)), $b$[0]));
} else if (Character.isSurrogate$C(c)) {
if (this.sgp == null ) this.sgp=Clazz.new_($I$(5,1));
var uc=this.sgp.parse$C$java_nio_CharBuffer(c, src);
if (uc < 0) {
src.position$I(mark);
return this.sgp.error$();
}if (dst.remaining$() < 4) return C$.overflow$java_nio_CharBuffer$I(src, mark);
dst.put$B(($b$[0] = (240 | ((uc >> 18))), $b$[0]));
dst.put$B(($b$[0] = (128 | ((uc >> 12) & 63)), $b$[0]));
dst.put$B(($b$[0] = (128 | ((uc >> 6) & 63)), $b$[0]));
dst.put$B(($b$[0] = (128 | (uc & 63)), $b$[0]));
++mark;
} else {
if (dst.remaining$() < 3) return C$.overflow$java_nio_CharBuffer$I(src, mark);
dst.put$B(($b$[0] = (224 | ((c.$c() >> 12))), $b$[0]));
dst.put$B(($b$[0] = (128 | ((c.$c() >> 6) & 63)), $b$[0]));
dst.put$B(($b$[0] = (128 | (c.$c() & 63)), $b$[0]));
}++mark;
}
src.position$I(mark);
return $I$(1).UNDERFLOW;
}, p$2);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return p$2.encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
 else return p$2.encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer.apply(this, [src, dst]);
});

Clazz.newMeth(C$, 'implReplaceWith$BA',  function (newReplacement) {
this.repl=newReplacement[0];
});

Clazz.newMeth(C$, 'encode$CA$I$I$BA',  function (sa, sp, len, da) {
var sl=sp + len;
var dp=0;
var dlASCII=dp + Math.min(len, da.length);
while (dp < dlASCII && sa[sp] < "\u0080" )da[dp++]=(sa[sp++].$c()|0);

while (sp < sl){
var c=sa[sp++];
if (c.$c() < 128 ) {
da[dp++]=(c.$c()|0);
} else if (c.$c() < 2048 ) {
da[dp++]=((192 | (c.$c() >> 6))|0);
da[dp++]=((128 | (c.$c() & 63))|0);
} else if (Character.isSurrogate$C(c)) {
if (this.sgp == null ) this.sgp=Clazz.new_($I$(5,1));
var uc=this.sgp.parse$C$CA$I$I(c, sa, sp - 1, sl);
if (uc < 0) {
if (this.malformedInputAction$() !== $I$(4).REPLACE ) return -1;
da[dp++]=this.repl;
} else {
da[dp++]=((240 | ((uc >> 18)))|0);
da[dp++]=((128 | ((uc >> 12) & 63))|0);
da[dp++]=((128 | ((uc >> 6) & 63))|0);
da[dp++]=((128 | (uc & 63))|0);
++sp;
}} else {
da[dp++]=((224 | ((c.$c() >> 12)))|0);
da[dp++]=((128 | ((c.$c() >> 6) & 63))|0);
da[dp++]=((128 | (c.$c() & 63))|0);
}}
return dp;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("sun.nio.cs"),I$=[[0,'java.nio.charset.CoderResult','sun.nio.cs.DoubleByte','java.util.Arrays',['sun.nio.cs.Surrogate','.Parser'],'StringUTF16']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoubleByte", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Decoder',9],['Decoder_EBCDIC',9],['Decoder_DBCSONLY',9],['Decoder_EUC_SIM',9],['Encoder',9],['Encoder_DBCSONLY',9],['Encoder_EBCDIC',9],['Encoder_EUC_SIM',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['B2C_UNMAPPABLE','char[]']]]

C$.$static$=function(){C$.$static$=0;
{
C$.B2C_UNMAPPABLE=Clazz.array(Character.TYPE, [256]);
$I$(3).fill$CA$C(C$.B2C_UNMAPPABLE, "\ufffd");
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetDecoder', 'sun.nio.cs.ArrayDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isASCIICompatible'],'I',['b2Min','b2Max'],'O',['b2c','char[][]','b2cSB','char[]']]]

Clazz.newMeth(C$, 'crMalformedOrUnderFlow$I',  function (b) {
return $I$(1).UNDERFLOW;
});

Clazz.newMeth(C$, 'crMalformedOrUnmappable$I$I',  function (b1, b2) {
if (this.b2c[b1] === $I$(2).B2C_UNMAPPABLE  || this.b2c[b2] !== $I$(2).B2C_UNMAPPABLE   || this.decodeSingle$I(b2) != "\ufffd" ) {
return $I$(1).malformedForLength$I(1);
}return $I$(1).unmappableForLength$I(2);
});

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F$CAA$CA$I$I$Z',  function (cs, avgcpb, maxcpb, b2c, b2cSB, b2Min, b2Max, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, avgcpb, maxcpb]);C$.$init$.apply(this);
this.b2c=b2c;
this.b2cSB=b2cSB;
this.b2Min=b2Min;
this.b2Max=b2Max;
this.isASCIICompatible=isASCIICompatible;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CAA$CA$I$I$Z',  function (cs, b2c, b2cSB, b2Min, b2Max, isASCIICompatible) {
C$.c$$java_nio_charset_Charset$F$F$CAA$CA$I$I$Z.apply(this, [cs, 0.5, 1.0, b2c, b2cSB, b2Min, b2Max, isASCIICompatible]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CAA$CA$I$I',  function (cs, b2c, b2cSB, b2Min, b2Max) {
C$.c$$java_nio_charset_Charset$F$F$CAA$CA$I$I$Z.apply(this, [cs, 0.5, 1.0, b2c, b2cSB, b2Min, b2Max, false]);
}, 1);

Clazz.newMeth(C$, 'decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
try {
while (sp < sl && dp < dl ){
var inSize=1;
var b1=sa[sp] & 255;
var c=this.b2cSB[b1];
if (c == "\ufffd") {
if (sl - sp < 2) return this.crMalformedOrUnderFlow$I(b1);
var b2=sa[sp + 1] & 255;
if (b2 < this.b2Min || b2 > this.b2Max  || (c=this.b2c[b1][b2 - this.b2Min]) == "\ufffd" ) {
return this.crMalformedOrUnmappable$I$I(b1, b2);
}++inSize;
}da[dp++]=c;
sp+=inSize;
}
return (sp >= sl) ? $I$(1).UNDERFLOW : $I$(1).OVERFLOW;
} finally {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}
});

Clazz.newMeth(C$, 'decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$() && dst.hasRemaining$() ){
var b1=src.get$() & 255;
var c=this.b2cSB[b1];
var inSize=1;
if (c == "\ufffd") {
if (src.remaining$() < 1) return this.crMalformedOrUnderFlow$I(b1);
var b2=src.get$() & 255;
if (b2 < this.b2Min || b2 > this.b2Max  || (c=this.b2c[b1][b2 - this.b2Min]) == "\ufffd" ) return this.crMalformedOrUnmappable$I$I(b1, b2);
++inSize;
}dst.put$C(c);
mark+=inSize;
}
return src.hasRemaining$() ? $I$(1).OVERFLOW : $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return this.decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer(src, dst);
 else return this.decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer(src, dst);
});

Clazz.newMeth(C$, 'decode$BA$I$I$CA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
var repl=this.replacement$().charAt$I(0);
while (sp < sl){
var b1=src[sp++] & 255;
var c=this.b2cSB[b1];
if (c == "\ufffd") {
if (sp < sl) {
var b2=src[sp++] & 255;
if (b2 < this.b2Min || b2 > this.b2Max  || (c=this.b2c[b1][b2 - this.b2Min]) == "\ufffd" ) {
if (this.b2c[b1] === $I$(2).B2C_UNMAPPABLE  || this.b2c[b2] !== $I$(2).B2C_UNMAPPABLE   || this.decodeSingle$I(b2) != "\ufffd" ) {
--sp;
}}}if (c == "\ufffd") {
c=repl;
}}dst[dp++]=c;
}
return dp;
});

Clazz.newMeth(C$, 'isASCIICompatible$',  function () {
return this.isASCIICompatible;
});

Clazz.newMeth(C$, 'implReset$',  function () {
C$.superclazz.prototype.implReset$.apply(this, []);
});

Clazz.newMeth(C$, 'implFlush$java_nio_CharBuffer',  function (out) {
return C$.superclazz.prototype.implFlush$java_nio_CharBuffer.apply(this, [out]);
});

Clazz.newMeth(C$, 'decodeSingle$I',  function (b) {
return this.b2cSB[b];
});

Clazz.newMeth(C$, 'decodeDouble$I$I',  function (b1, b2) {
if (b1 < 0 || b1 > this.b2c.length  || b2 < this.b2Min  || b2 > this.b2Max ) return "\ufffd";
return this.b2c[b1][b2 - this.b2Min];
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Decoder_EBCDIC", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.nio.cs.DoubleByte','.Decoder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['currentState']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CAA$CA$I$I$Z',  function (cs, b2c, b2cSB, b2Min, b2Max, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$CAA$CA$I$I$Z.apply(this,[cs, b2c, b2cSB, b2Min, b2Max, isASCIICompatible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CAA$CA$I$I',  function (cs, b2c, b2cSB, b2Min, b2Max) {
;C$.superclazz.c$$java_nio_charset_Charset$CAA$CA$I$I$Z.apply(this,[cs, b2c, b2cSB, b2Min, b2Max, false]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'implReset$',  function () {
this.currentState=0;
});

Clazz.newMeth(C$, 'isDoubleByte$I$I',  function (b1, b2) {
return (65 <= b1 && b1 <= 254  && 65 <= b2  && b2 <= 254 ) || (b1 == 64 && b2 == 64 ) ;
}, 1);

Clazz.newMeth(C$, 'decodeArrayLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
try {
while (sp < sl){
var b1=sa[sp] & 255;
var inSize=1;
if (b1 == 14) {
if (this.currentState != 0) return $I$(1).malformedForLength$I(1);
 else this.currentState=1;
} else if (b1 == 15) {
if (this.currentState != 1) return $I$(1).malformedForLength$I(1);
 else this.currentState=0;
} else {
var c="\ufffd";
if (this.currentState == 0) {
c=this.b2cSB[b1];
if (c == "\ufffd") return $I$(1).unmappableForLength$I(1);
} else {
if (sl - sp < 2) return $I$(1).UNDERFLOW;
var b2=sa[sp + 1] & 255;
if (b2 < this.b2Min || b2 > this.b2Max  || (c=this.b2c[b1][b2 - this.b2Min]) == "\ufffd" ) {
if (!C$.isDoubleByte$I$I(b1, b2)) return $I$(1).malformedForLength$I(2);
return $I$(1).unmappableForLength$I(2);
}++inSize;
}if (dl - dp < 1) return $I$(1).OVERFLOW;
da[dp++]=c;
}sp+=inSize;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}
});

Clazz.newMeth(C$, 'decodeBufferLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var b1=src.get$() & 255;
var inSize=1;
if (b1 == 14) {
if (this.currentState != 0) return $I$(1).malformedForLength$I(1);
 else this.currentState=1;
} else if (b1 == 15) {
if (this.currentState != 1) return $I$(1).malformedForLength$I(1);
 else this.currentState=0;
} else {
var c="\ufffd";
if (this.currentState == 0) {
c=this.b2cSB[b1];
if (c == "\ufffd") return $I$(1).unmappableForLength$I(1);
} else {
if (src.remaining$() < 1) return $I$(1).UNDERFLOW;
var b2=src.get$() & 255;
if (b2 < this.b2Min || b2 > this.b2Max  || (c=this.b2c[b1][b2 - this.b2Min]) == "\ufffd" ) {
if (!C$.isDoubleByte$I$I(b1, b2)) return $I$(1).malformedForLength$I(2);
return $I$(1).unmappableForLength$I(2);
}++inSize;
}if (dst.remaining$() < 1) return $I$(1).OVERFLOW;
dst.put$C(c);
}mark+=inSize;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'decode$BA$I$I$CA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
this.currentState=0;
var repl=this.replacement$().charAt$I(0);
while (sp < sl){
var b1=src[sp++] & 255;
if (b1 == 14) {
if (this.currentState != 0) dst[dp++]=repl;
 else this.currentState=1;
} else if (b1 == 15) {
if (this.currentState != 1) dst[dp++]=repl;
 else this.currentState=0;
} else {
var c="\ufffd";
if (this.currentState == 0) {
c=this.b2cSB[b1];
if (c == "\ufffd") c=repl;
} else {
if (sl == sp) {
c=repl;
} else {
var b2=src[sp++] & 255;
if (b2 < this.b2Min || b2 > this.b2Max  || (c=this.b2c[b1][b2 - this.b2Min]) == "\ufffd" ) {
c=repl;
}}}dst[dp++]=c;
}}
return dp;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Decoder_DBCSONLY", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.nio.cs.DoubleByte','.Decoder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['b2cSB_UNMAPPABLE','char[]']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CAA$CA$I$I$Z',  function (cs, b2c, b2cSB, b2Min, b2Max, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F$CAA$CA$I$I$Z.apply(this,[cs, 0.5, 1.0, b2c, C$.b2cSB_UNMAPPABLE, b2Min, b2Max, isASCIICompatible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CAA$CA$I$I',  function (cs, b2c, b2cSB, b2Min, b2Max) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F$CAA$CA$I$I$Z.apply(this,[cs, 0.5, 1.0, b2c, C$.b2cSB_UNMAPPABLE, b2Min, b2Max, false]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.b2cSB_UNMAPPABLE=Clazz.array(Character.TYPE, [256]);
$I$(3).fill$CA$C(C$.b2cSB_UNMAPPABLE, "\ufffd");
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Decoder_EUC_SIM", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.nio.cs.DoubleByte','.Decoder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.SS2=142;
this.SS3=143;
},1);

C$.$fields$=[['I',['SS2','SS3']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CAA$CA$I$I$Z',  function (cs, b2c, b2cSB, b2Min, b2Max, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$CAA$CA$I$I$Z.apply(this,[cs, b2c, b2cSB, b2Min, b2Max, isASCIICompatible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'crMalformedOrUnderFlow$I',  function (b) {
if (b == 142 || b == 143 ) return $I$(1).malformedForLength$I(1);
return $I$(1).UNDERFLOW;
});

Clazz.newMeth(C$, 'crMalformedOrUnmappable$I$I',  function (b1, b2) {
if (b1 == 142 || b1 == 143 ) return $I$(1).malformedForLength$I(1);
return $I$(1).unmappableForLength$I(2);
});

Clazz.newMeth(C$, 'decode$BA$I$I$CA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
var repl=this.replacement$().charAt$I(0);
while (sp < sl){
var b1=src[sp++] & 255;
var c=this.b2cSB[b1];
if (c == "\ufffd") {
if (sp < sl) {
var b2=src[sp++] & 255;
if (b2 < this.b2Min || b2 > this.b2Max  || (c=this.b2c[b1][b2 - this.b2Min]) == "\ufffd" ) {
if (b1 == 142 || b1 == 143 ) {
--sp;
}c=repl;
}} else {
c=repl;
}}dst[dp++]=c;
}
return dp;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetEncoder', 'sun.nio.cs.ArrayEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.MAX_SINGLEBYTE=255;
this.repl=this.replacement$();
},1);

C$.$fields$=[['Z',['isASCIICompatible'],'I',['MAX_SINGLEBYTE'],'O',['c2b','char[]','+c2bIndex','sgp','sun.nio.cs.Surrogate.Parser','repl','byte[]']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CA$CA',  function (cs, c2b, c2bIndex) {
C$.c$$java_nio_charset_Charset$CA$CA$Z.apply(this, [cs, c2b, c2bIndex, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CA$CA$Z',  function (cs, c2b, c2bIndex, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, 2.0, 2.0]);C$.$init$.apply(this);
this.c2b=c2b;
this.c2bIndex=c2bIndex;
this.isASCIICompatible=isASCIICompatible;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F$BA$CA$CA$Z',  function (cs, avg, max, repl, c2b, c2bIndex, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F$BA.apply(this,[cs, avg, max, repl]);C$.$init$.apply(this);
this.c2b=c2b;
this.c2bIndex=c2bIndex;
this.isASCIICompatible=isASCIICompatible;
}, 1);

Clazz.newMeth(C$, 'canEncode$C',  function (c) {
return this.encodeChar$C(c) != 65533;
});

Clazz.newMeth(C$, 'sgp$',  function () {
if (this.sgp == null ) this.sgp=Clazz.new_($I$(4,1));
return this.sgp;
});

Clazz.newMeth(C$, 'encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
try {
while (sp < sl){
var c=sa[sp];
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isSurrogate$C(c)) {
if (this.sgp$().parse$C$CA$I$I(c, sa, sp, sl) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}return $I$(1).unmappableForLength$I(1);
}if (bb > 255) {
if (dl - dp < 2) return $I$(1).OVERFLOW;
da[dp++]=((bb >> 8)|0);
da[dp++]=(bb|0);
} else {
if (dl - dp < 1) return $I$(1).OVERFLOW;
da[dp++]=(bb|0);
}++sp;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}
});

Clazz.newMeth(C$, 'encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var c=src.get$();
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isSurrogate$C(c)) {
if (this.sgp$().parse$C$java_nio_CharBuffer(c, src) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}return $I$(1).unmappableForLength$I(1);
}if (bb > 255) {
if (dst.remaining$() < 2) return $I$(1).OVERFLOW;
dst.put$B(($b$[0] = (bb >> 8), $b$[0]));
dst.put$B(($b$[0] = (bb), $b$[0]));
} else {
if (dst.remaining$() < 1) return $I$(1).OVERFLOW;
dst.put$B(($b$[0] = bb, $b$[0]));
}++mark;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
if (src.hasArray$() && dst.hasArray$() ) return this.encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer(src, dst);
 else return this.encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer(src, dst);
});

Clazz.newMeth(C$, 'implReplaceWith$BA',  function (newReplacement) {
this.repl=newReplacement;
});

Clazz.newMeth(C$, 'encode$CA$I$I$BA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
var dl=dst.length;
while (sp < sl){
var c=src[sp++];
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isHighSurrogate$C(c) && sp < sl  && Character.isLowSurrogate$C(src[sp]) ) {
++sp;
}dst[dp++]=this.repl[0];
if (this.repl.length > 1) dst[dp++]=this.repl[1];
continue;
}if (bb > 255) {
dst[dp++]=((bb >> 8)|0);
dst[dp++]=(bb|0);
} else {
dst[dp++]=(bb|0);
}}
return dp;
});

Clazz.newMeth(C$, 'encodeFromLatin1$BA$I$I$BA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
while (sp < sl){
var c=String.fromCharCode((src[sp++] & 255));
var bb=this.encodeChar$C(c);
if (bb == 65533) {
dst[dp++]=this.repl[0];
if (this.repl.length > 1) {
dst[dp++]=this.repl[1];
}continue;
}if (bb > 255) {
dst[dp++]=((bb >> 8)|0);
dst[dp++]=(bb|0);
} else {
dst[dp++]=(bb|0);
}}
return dp;
});

Clazz.newMeth(C$, 'encodeFromUTF16$BA$I$I$BA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
while (sp < sl){
var c=$I$(5).getChar$BA$I(src, sp++);
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isHighSurrogate$C(c) && sp < sl  && Character.isLowSurrogate$C($I$(5).getChar$BA$I(src, sp)) ) {
++sp;
}dst[dp++]=this.repl[0];
if (this.repl.length > 1) {
dst[dp++]=this.repl[1];
}continue;
}if (bb > 255) {
dst[dp++]=((bb >> 8)|0);
dst[dp++]=(bb|0);
} else {
dst[dp++]=(bb|0);
}}
return dp;
});

Clazz.newMeth(C$, 'isASCIICompatible$',  function () {
return this.isASCIICompatible;
});

Clazz.newMeth(C$, 'encodeChar$C',  function (ch) {
return this.c2b[(this.c2bIndex[ch.$c() >> 8]).$c() + (ch.$c() & 255)].$c();
});

Clazz.newMeth(C$, 'initC2B$SA$S$S$S$I$I$CA$CA',  function (b2c, b2cSB, b2cNR, c2bNR, b2Min, b2Max, c2b, c2bIndex) {
$I$(3).fill$CA$C(c2b, "\ufffd");
var off=256;
var b2c_ca=Clazz.array(Character.TYPE, [b2c.length, null]);
var b2cSB_ca=null;
if (b2cSB != null ) b2cSB_ca=b2cSB.toCharArray$();
for (var i=0; i < b2c.length; i++) {
if (b2c[i] == null ) continue;
b2c_ca[i]=b2c[i].toCharArray$();
}
if (b2cNR != null ) {
var j=0;
while (j < b2cNR.length$()){
var b=b2cNR.charAt$I(j++);
var c=b2cNR.charAt$I(j++);
if (b.$c() < 256  && b2cSB_ca != null  ) {
if (b2cSB_ca[b.$c()] == c) b2cSB_ca[b.$c()]="\ufffd";
} else {
if (b2c_ca[b.$c() >> 8][(b.$c() & 255) - b2Min] == c) b2c_ca[b.$c() >> 8][(b.$c() & 255) - b2Min]="\ufffd";
}}
}if (b2cSB_ca != null ) {
for (var b=0; b < b2cSB_ca.length; b++) {
var c=b2cSB_ca[b];
if (c == "\ufffd") continue;
var index=c2bIndex[c.$c() >> 8].$c();
if (index == 0) {
index=off;
off+=256;
c2bIndex[c.$c() >> 8]=String.fromCharCode(index);
}c2b[index + (c.$c() & 255)]=String.fromCharCode(b);
}
}for (var b1=0; b1 < b2c.length; b1++) {
var db=b2c_ca[b1];
if (db == null ) continue;
for (var b2=b2Min; b2 <= b2Max; b2++) {
var c=db[b2 - b2Min];
if (c == "\ufffd") continue;
var index=c2bIndex[c.$c() >> 8].$c();
if (index == 0) {
index=off;
off+=256;
c2bIndex[c.$c() >> 8]=String.fromCharCode(index);
}c2b[index + (c.$c() & 255)]=String.fromCharCode(((b1 << 8) | b2));
}
}
if (c2bNR != null ) {
for (var i=0; i < c2bNR.length$(); i+=2) {
var b=c2bNR.charAt$I(i);
var c=c2bNR.charAt$I(i + 1);
var index=(c.$c() >> 8);
if ((c2bIndex[index]).$c() == 0 ) {
c2bIndex[index]=String.fromCharCode(off);
off+=256;
}index=(c2bIndex[index]).$c() + (c.$c() & 255);
c2b[index]=b;
}
}}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Encoder_DBCSONLY", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.nio.cs.DoubleByte','.Encoder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$BA$CA$CA$Z',  function (cs, repl, c2b, c2bIndex, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F$BA$CA$CA$Z.apply(this,[cs, 2.0, 2.0, repl, c2b, c2bIndex, isASCIICompatible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encodeChar$C',  function (ch) {
var bb=C$.superclazz.prototype.encodeChar$C.apply(this, [ch]);
if (bb <= 255) return 65533;
return bb;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Encoder_EBCDIC", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.nio.cs.DoubleByte','.Encoder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentState=0;
},1);

C$.$fields$=[['I',['currentState']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CA$CA$Z',  function (cs, c2b, c2bIndex, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F$BA$CA$CA$Z.apply(this,[cs, 4.0, 5.0, Clazz.array(Byte.TYPE, -1, [111]), c2b, c2bIndex, isASCIICompatible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'implReset$',  function () {
this.currentState=0;
});

Clazz.newMeth(C$, 'implFlush$java_nio_ByteBuffer',  function (out) {
if (this.currentState == 1) {
if (out.remaining$() < 1) return $I$(1).OVERFLOW;
out.put$B(15);
}this.implReset$();
return $I$(1).UNDERFLOW;
});

Clazz.newMeth(C$, 'encodeArrayLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var sa=src.array$();
var sp=src.arrayOffset$() + src.position$();
var sl=src.arrayOffset$() + src.limit$();
var da=dst.array$();
var dp=dst.arrayOffset$() + dst.position$();
var dl=dst.arrayOffset$() + dst.limit$();
try {
while (sp < sl){
var c=sa[sp];
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isSurrogate$C(c)) {
if (this.sgp$().parse$C$CA$I$I(c, sa, sp, sl) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}return $I$(1).unmappableForLength$I(1);
}if (bb > 255) {
if (this.currentState == 0) {
if (dl - dp < 1) return $I$(1).OVERFLOW;
this.currentState=1;
da[dp++]=14;
}if (dl - dp < 2) return $I$(1).OVERFLOW;
da[dp++]=((bb >> 8)|0);
da[dp++]=(bb|0);
} else {
if (this.currentState == 1) {
if (dl - dp < 1) return $I$(1).OVERFLOW;
this.currentState=0;
da[dp++]=15;
}if (dl - dp < 1) return $I$(1).OVERFLOW;
da[dp++]=(bb|0);
}++sp;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(sp - src.arrayOffset$());
dst.position$I(dp - dst.arrayOffset$());
}
});

Clazz.newMeth(C$, 'encodeBufferLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var mark=src.position$();
try {
while (src.hasRemaining$()){
var c=src.get$();
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isSurrogate$C(c)) {
if (this.sgp$().parse$C$java_nio_CharBuffer(c, src) < 0) return this.sgp.error$();
return this.sgp.unmappableResult$();
}return $I$(1).unmappableForLength$I(1);
}if (bb > 255) {
if (this.currentState == 0) {
if (dst.remaining$() < 1) return $I$(1).OVERFLOW;
this.currentState=1;
dst.put$B(14);
}if (dst.remaining$() < 2) return $I$(1).OVERFLOW;
dst.put$B(($b$[0] = (bb >> 8), $b$[0]));
dst.put$B(($b$[0] = (bb), $b$[0]));
} else {
if (this.currentState == 1) {
if (dst.remaining$() < 1) return $I$(1).OVERFLOW;
this.currentState=0;
dst.put$B(15);
}if (dst.remaining$() < 1) return $I$(1).OVERFLOW;
dst.put$B(($b$[0] = bb, $b$[0]));
}++mark;
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'encode$CA$I$I$BA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
while (sp < sl){
var c=src[sp++];
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isHighSurrogate$C(c) && sp < sl  && Character.isLowSurrogate$C(src[sp]) ) {
++sp;
}dst[dp++]=this.repl[0];
if (this.repl.length > 1) dst[dp++]=this.repl[1];
continue;
}if (bb > 255) {
if (this.currentState == 0) {
this.currentState=1;
dst[dp++]=14;
}dst[dp++]=((bb >> 8)|0);
dst[dp++]=(bb|0);
} else {
if (this.currentState == 1) {
this.currentState=0;
dst[dp++]=15;
}dst[dp++]=(bb|0);
}}
if (this.currentState == 1) {
this.currentState=0;
dst[dp++]=15;
}return dp;
});

Clazz.newMeth(C$, 'encodeFromLatin1$BA$I$I$BA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
while (sp < sl){
var c=String.fromCharCode((src[sp++] & 255));
var bb=this.encodeChar$C(c);
if (bb == 65533) {
dst[dp++]=this.repl[0];
if (this.repl.length > 1) dst[dp++]=this.repl[1];
continue;
}if (bb > 255) {
if (this.currentState == 0) {
this.currentState=1;
dst[dp++]=14;
}dst[dp++]=((bb >> 8)|0);
dst[dp++]=(bb|0);
} else {
if (this.currentState == 1) {
this.currentState=0;
dst[dp++]=15;
}dst[dp++]=(bb|0);
}}
if (this.currentState == 1) {
this.currentState=0;
dst[dp++]=15;
}return dp;
});

Clazz.newMeth(C$, 'encodeFromUTF16$BA$I$I$BA',  function (src, sp, len, dst) {
var dp=0;
var sl=sp + len;
while (sp < sl){
var c=$I$(5).getChar$BA$I(src, sp++);
var bb=this.encodeChar$C(c);
if (bb == 65533) {
if (Character.isHighSurrogate$C(c) && sp < sl  && Character.isLowSurrogate$C($I$(5).getChar$BA$I(src, sp)) ) {
++sp;
}dst[dp++]=this.repl[0];
if (this.repl.length > 1) dst[dp++]=this.repl[1];
continue;
}if (bb > 255) {
if (this.currentState == 0) {
this.currentState=1;
dst[dp++]=14;
}dst[dp++]=((bb >> 8)|0);
dst[dp++]=(bb|0);
} else {
if (this.currentState == 1) {
this.currentState=0;
dst[dp++]=15;
}dst[dp++]=(bb|0);
}}
if (this.currentState == 1) {
this.currentState=0;
dst[dp++]=15;
}return dp;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleByte, "Encoder_EUC_SIM", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.nio.cs.DoubleByte','.Encoder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$CA$CA$Z',  function (cs, c2b, c2bIndex, isASCIICompatible) {
;C$.superclazz.c$$java_nio_charset_Charset$CA$CA$Z.apply(this,[cs, c2b, c2bIndex, isASCIICompatible]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

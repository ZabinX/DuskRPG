(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'java.nio.charset.CoderResult']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeDecoder", null, 'java.nio.charset.CharsetDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultByteOrder=1;
},1);

C$.$fields$=[['I',['expectedByteOrder','currentByteOrder','defaultByteOrder']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$I',  function (cs, bo) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, 0.5, 1.0]);C$.$init$.apply(this);
this.expectedByteOrder=this.currentByteOrder=bo;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$I$I',  function (cs, bo, defaultBO) {
C$.c$$java_nio_charset_Charset$I.apply(this, [cs, bo]);
this.defaultByteOrder=defaultBO;
}, 1);

Clazz.newMeth(C$, 'decode$I$I',  function (b1, b2) {
if (this.currentByteOrder == 1) return String.fromCharCode(((b1 << 8) | b2));
 else return String.fromCharCode(((b2 << 8) | b1));
}, p$1);

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
var mark=src.position$();
try {
while (src.remaining$() > 1){
var b1=src.get$() & 255;
var b2=src.get$() & 255;
if (this.currentByteOrder == 0) {
var c=String.fromCharCode(((b1 << 8) | b2));
if (c == "\ufeff") {
this.currentByteOrder=1;
mark+=2;
continue;
} else if (c == "\ufffe") {
this.currentByteOrder=2;
mark+=2;
continue;
} else {
this.currentByteOrder=this.defaultByteOrder;
}}var c=p$1.decode$I$I.apply(this, [b1, b2]);
if (c == "\ufffe") {
return $I$(1).malformedForLength$I(2);
}if (Character.isSurrogate$C(c)) {
if (Character.isHighSurrogate$C(c)) {
if (src.remaining$() < 2) return $I$(1).UNDERFLOW;
var c2=p$1.decode$I$I.apply(this, [src.get$() & 255, src.get$() & 255]);
if (!Character.isLowSurrogate$C(c2)) return $I$(1).malformedForLength$I(4);
if (dst.remaining$() < 2) return $I$(1).OVERFLOW;
mark+=4;
dst.put$C(c);
dst.put$C(c2);
continue;
}return $I$(1).malformedForLength$I(2);
}if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
mark+=2;
dst.put$C(c);
}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'implReset$',  function () {
this.currentByteOrder=this.expectedByteOrder;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

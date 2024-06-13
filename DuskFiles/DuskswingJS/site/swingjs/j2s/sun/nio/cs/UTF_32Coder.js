(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'java.nio.charset.CoderResult']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UTF_32Coder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Decoder',12],['Encoder',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.UTF_32Coder, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['currentBO','expectedBO']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$I',  function (cs, bo) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, 0.25, 1.0]);C$.$init$.apply(this);
this.expectedBO=bo;
this.currentBO=0;
}, 1);

Clazz.newMeth(C$, 'getCP$java_nio_ByteBuffer',  function (src) {
return (this.currentBO == 1) ? (((src.get$() & 255) << 24) | ((src.get$() & 255) << 16) | ((src.get$() & 255) << 8) | (src.get$() & 255) ) : ((src.get$() & 255) | ((src.get$() & 255) << 8) | ((src.get$() & 255) << 16) | ((src.get$() & 255) << 24) );
}, p$1);

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function (src, dst) {
if (src.remaining$() < 4) return $I$(1).UNDERFLOW;
var mark=src.position$();
var cp;
try {
if (this.currentBO == 0) {
cp=((src.get$() & 255) << 24) | ((src.get$() & 255) << 16) | ((src.get$() & 255) << 8) | (src.get$() & 255) ;
if (cp == 65279 && this.expectedBO != 2 ) {
this.currentBO=1;
mark+=4;
} else if (cp == -131072 && this.expectedBO != 1 ) {
this.currentBO=2;
mark+=4;
} else {
if (this.expectedBO == 0) this.currentBO=1;
 else this.currentBO=this.expectedBO;
src.position$I(mark);
}}while (src.remaining$() >= 4){
cp=p$1.getCP$java_nio_ByteBuffer.apply(this, [src]);
if (Character.isBmpCodePoint$I(cp)) {
if (!dst.hasRemaining$()) return $I$(1).OVERFLOW;
mark+=4;
dst.put$C(String.fromCharCode(cp));
} else if (Character.isValidCodePoint$I(cp)) {
if (dst.remaining$() < 2) return $I$(1).OVERFLOW;
mark+=4;
dst.put$C(Character.highSurrogate$I(cp));
dst.put$C(Character.lowSurrogate$I(cp));
} else {
return $I$(1).malformedForLength$I(4);
}}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'implReset$',  function () {
this.currentBO=0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.UTF_32Coder, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.charset.CharsetEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doBOM=false;
this.doneBOM=true;
},1);

C$.$fields$=[['Z',['doBOM','doneBOM'],'I',['byteOrder']]]

Clazz.newMeth(C$, 'put$I$java_nio_ByteBuffer',  function (cp, dst) {
if (this.byteOrder == 1) {
dst.put$B(($b$[0] = (cp >> 24), $b$[0]));
dst.put$B(($b$[0] = (cp >> 16), $b$[0]));
dst.put$B(($b$[0] = (cp >> 8), $b$[0]));
dst.put$B(($b$[0] = cp, $b$[0]));
} else {
dst.put$B(($b$[0] = cp, $b$[0]));
dst.put$B(($b$[0] = (cp >> 8), $b$[0]));
dst.put$B(($b$[0] = (cp >> 16), $b$[0]));
dst.put$B(($b$[0] = (cp >> 24), $b$[0]));
}});

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$I$Z',  function (cs, byteOrder, doBOM) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F$BA.apply(this,[cs, 4.0, doBOM ? 8.0 : 4.0, (byteOrder == 1) ? Clazz.array(Byte.TYPE, -1, [0, 0, -1, -3]) : Clazz.array(Byte.TYPE, -1, [-3, -1, 0, 0])]);C$.$init$.apply(this);
this.byteOrder=byteOrder;
this.doBOM=doBOM;
this.doneBOM=!doBOM;
}, 1);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function (src, dst) {
var mark=src.position$();
if (!this.doneBOM && src.hasRemaining$() ) {
if (dst.remaining$() < 4) return $I$(1).OVERFLOW;
this.put$I$java_nio_ByteBuffer(65279, dst);
this.doneBOM=true;
}try {
while (src.hasRemaining$()){
var c=src.get$();
if (!Character.isSurrogate$C(c)) {
if (dst.remaining$() < 4) return $I$(1).OVERFLOW;
++mark;
this.put$I$java_nio_ByteBuffer(c.$c(), dst);
} else if (Character.isHighSurrogate$C(c)) {
if (!src.hasRemaining$()) return $I$(1).UNDERFLOW;
var low=src.get$();
if (Character.isLowSurrogate$C(low)) {
if (dst.remaining$() < 4) return $I$(1).OVERFLOW;
mark+=2;
this.put$I$java_nio_ByteBuffer(Character.toCodePoint$C$C(c, low), dst);
} else {
return $I$(1).malformedForLength$I(1);
}} else {
return $I$(1).malformedForLength$I(1);
}}
return $I$(1).UNDERFLOW;
} finally {
src.position$I(mark);
}
});

Clazz.newMeth(C$, 'implReset$',  function () {
this.doneBOM=!this.doBOM;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

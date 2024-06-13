(function(){var P$=Clazz.newPackage("java.nio.charset"),p$1={},I$=[[0,'java.nio.charset.CodingErrorAction','java.util.Arrays','java.nio.ByteBuffer','java.nio.CharBuffer','java.nio.charset.CoderMalfunctionError','java.nio.charset.CoderResult']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharsetEncoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.malformedInputAction=$I$(1).REPORT;
this.unmappableCharacterAction=$I$(1).REPORT;
this.state=0;
this.cachedDecoder=null;
},1);

C$.$fields$=[['F',['averageBytesPerChar','maxBytesPerChar'],'I',['state'],'O',['charset','java.nio.charset.Charset','replacement','byte[]','malformedInputAction','java.nio.charset.CodingErrorAction','+unmappableCharacterAction','cachedDecoder','java.nio.charset.CharsetDecoder']]
,['O',['stateNames','String[]']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F$BA',  function (charset, ave, max, rep) {
;C$.$init$.apply(this);
this.charset=charset;
if (ave <= 0.0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive averageBytesPerChar"]);
}if (max <= 0.0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive maxBytesPerChar"]);
}this.replacement=rep;
this.averageBytesPerChar=ave;
this.maxBytesPerChar=max;
this.replaceWith$BA(rep);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F',  function (charset, ave, max) {
C$.c$$java_nio_charset_Charset$F$F$BA.apply(this, [charset, ave, max, Clazz.array(Byte.TYPE, -1, [63])]);
}, 1);

Clazz.newMeth(C$, 'charset$',  function () {
return this.charset;
});

Clazz.newMeth(C$, 'replacement$',  function () {
return $I$(2).copyOf$BA$I(this.replacement, this.replacement.length);
});

Clazz.newMeth(C$, 'replaceWith$BA',  function (rep) {
if (rep == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null replacement"]);
}var i=rep.length;
if (i == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty replacement"]);
}if (i > this.maxBytesPerChar ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Replacement too long"]);
}if (!this.isLegalReplacement$BA(rep)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal replacement"]);
}this.replacement=$I$(2).copyOf$BA$I(rep, rep.length);
this.implReplaceWith$BA(this.replacement);
return this;
});

Clazz.newMeth(C$, 'implReplaceWith$BA',  function (rep) {
});

Clazz.newMeth(C$, 'isLegalReplacement$BA',  function (rep) {
var localWeakReference=this.cachedDecoder;
var localCharsetDecoder=null;
if ((localWeakReference == null ) || ((localCharsetDecoder=localWeakReference) == null ) ) {
localCharsetDecoder=this.charset$().newDecoder$();
localCharsetDecoder.onMalformedInput$java_nio_charset_CodingErrorAction($I$(1).REPORT);
localCharsetDecoder.onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(1).REPORT);
this.cachedDecoder=localCharsetDecoder;
} else {
localCharsetDecoder.reset$();
}var localByteBuffer=$I$(3).wrap$BA(rep);
var localCharBuffer=$I$(4,"allocate$I",[((localByteBuffer.remaining$() * localCharsetDecoder.maxCharsPerByte$())|0)]);
var localCoderResult=localCharsetDecoder.decode$java_nio_ByteBuffer$java_nio_CharBuffer$Z(localByteBuffer, localCharBuffer, true);
return !localCoderResult.isError$();
});

Clazz.newMeth(C$, 'malformedInputAction$',  function () {
return this.malformedInputAction;
});

Clazz.newMeth(C$, 'onMalformedInput$java_nio_charset_CodingErrorAction',  function (err) {
if (err == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null action"]);
}this.malformedInputAction=err;
this.implOnMalformedInput$java_nio_charset_CodingErrorAction(err);
return this;
});

Clazz.newMeth(C$, 'implOnMalformedInput$java_nio_charset_CodingErrorAction',  function (err) {
});

Clazz.newMeth(C$, 'unmappableCharacterAction$',  function () {
return this.unmappableCharacterAction;
});

Clazz.newMeth(C$, 'onUnmappableCharacter$java_nio_charset_CodingErrorAction',  function (err) {
if (err == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null action"]);
}this.unmappableCharacterAction=err;
this.implOnUnmappableCharacter$java_nio_charset_CodingErrorAction(err);
return this;
});

Clazz.newMeth(C$, 'implOnUnmappableCharacter$java_nio_charset_CodingErrorAction',  function (err) {
});

Clazz.newMeth(C$, 'averageBytesPerChar$',  function () {
return this.averageBytesPerChar;
});

Clazz.newMeth(C$, 'maxBytesPerChar$',  function () {
return this.maxBytesPerChar;
});

Clazz.newMeth(C$, 'encode$java_nio_CharBuffer$java_nio_ByteBuffer$Z',  function ($in, out, done) {
var i=done ? 2 : 1;
if ((this.state != 0) && (this.state != 1) && ((!done) || (this.state != 2) )  ) {
p$1.throwIllegalStateException$I$I.apply(this, [this.state, i]);
}this.state=i;
for (; ; ) {
var localCoderResult;
try {
localCoderResult=this.encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer($in, out);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.nio.BufferUnderflowException")){
var localBufferUnderflowException = e$$;
{
throw Clazz.new_($I$(5,1).c$$Exception,[localBufferUnderflowException]);
}
} else if (Clazz.exceptionOf(e$$,"java.nio.BufferOverflowException")){
var localBufferOverflowException = e$$;
{
throw Clazz.new_($I$(5,1).c$$Exception,[localBufferOverflowException]);
}
} else {
throw e$$;
}
}
if (localCoderResult.isOverflow$()) {
return localCoderResult;
}if (localCoderResult.isUnderflow$()) {
if ((done) && ($in.hasRemaining$()) ) {
localCoderResult=$I$(6,"malformedForLength$I",[$in.remaining$()]);
} else {
return localCoderResult;
}}var localCodingErrorAction=null;
if (localCoderResult.isMalformed$()) {
localCodingErrorAction=this.malformedInputAction;
} else if (localCoderResult.isUnmappable$()) {
localCodingErrorAction=this.unmappableCharacterAction;
}if (localCodingErrorAction === $I$(1).REPORT ) {
return localCoderResult;
}if (localCodingErrorAction === $I$(1).REPLACE ) {
if (out.remaining$() < this.replacement.length) {
return $I$(6).OVERFLOW;
}out.put$BA(this.replacement);
}$in.position$I($in.position$() + localCoderResult.length$());
}
});

Clazz.newMeth(C$, 'flush$java_nio_ByteBuffer',  function (out) {
if (this.state == 2) {
var localCoderResult=this.implFlush$java_nio_ByteBuffer(out);
if (localCoderResult.isUnderflow$()) {
this.state=3;
}return localCoderResult;
}if (this.state != 3) {
p$1.throwIllegalStateException$I$I.apply(this, [this.state, 3]);
}return $I$(6).UNDERFLOW;
});

Clazz.newMeth(C$, 'implFlush$java_nio_ByteBuffer',  function (out) {
return $I$(6).UNDERFLOW;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.implReset$();
this.state=0;
return this;
});

Clazz.newMeth(C$, 'implReset$',  function () {
});

Clazz.newMeth(C$, 'encode$java_nio_CharBuffer',  function ($in) {
var i=(($in.remaining$() * this.averageBytesPerChar$())|0);
var localObject=$I$(3).allocate$I(i);
if ((i == 0) && ($in.remaining$() == 0) ) {
return localObject;
}this.reset$();
for (; ; ) {
var localCoderResult=$in.hasRemaining$() ? this.encode$java_nio_CharBuffer$java_nio_ByteBuffer$Z($in, localObject, true) : $I$(6).UNDERFLOW;
if (localCoderResult.isUnderflow$()) {
localCoderResult=this.flush$java_nio_ByteBuffer(localObject);
}if (localCoderResult.isUnderflow$()) {
break;
}if (localCoderResult.isOverflow$()) {
i=2 * i + 1;
var localByteBuffer=$I$(3).allocate$I(i);
(localObject).flip$();
localByteBuffer.put$java_nio_ByteBuffer(localObject);
localObject=localByteBuffer;
} else {
localCoderResult.throwException$();
}}
(localObject).flip$();
return localObject;
});

Clazz.newMeth(C$, 'canEncode$java_nio_CharBuffer',  function ($in) {
if (this.state == 3) {
this.reset$();
} else if (this.state != 0) {
p$1.throwIllegalStateException$I$I.apply(this, [this.state, 1]);
}var localCodingErrorAction1=this.malformedInputAction$();
var localCodingErrorAction2=this.unmappableCharacterAction$();
try {
this.onMalformedInput$java_nio_charset_CodingErrorAction($I$(1).REPORT);
this.onUnmappableCharacter$java_nio_charset_CodingErrorAction($I$(1).REPORT);
this.encode$java_nio_CharBuffer($in);
} catch (localCharacterCodingException) {
if (Clazz.exceptionOf(localCharacterCodingException,"java.nio.charset.CharacterCodingException")){
return false;
} else {
throw localCharacterCodingException;
}
} finally {
this.onMalformedInput$java_nio_charset_CodingErrorAction(localCodingErrorAction1);
this.onUnmappableCharacter$java_nio_charset_CodingErrorAction(localCodingErrorAction2);
this.reset$();
}
return true;
}, p$1);

Clazz.newMeth(C$, 'canEncode$C',  function (c) {
var localCharBuffer=$I$(4).allocate$I(1);
localCharBuffer.put$C(c);
localCharBuffer.flip$();
return p$1.canEncode$java_nio_CharBuffer.apply(this, [localCharBuffer]);
});

Clazz.newMeth(C$, 'canEncode$CharSequence',  function (cs) {
var localCharBuffer;
if ((Clazz.instanceOf(cs, "java.nio.CharBuffer"))) {
localCharBuffer=(cs).duplicate$();
} else {
localCharBuffer=$I$(4,"wrap$CharSequence",[cs.toString()]);
}return p$1.canEncode$java_nio_CharBuffer.apply(this, [localCharBuffer]);
});

Clazz.newMeth(C$, 'throwIllegalStateException$I$I',  function (old, now) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Current state = " + C$.stateNames[old] + ", new state = " + C$.stateNames[now] ]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.stateNames=Clazz.array(String, -1, ["RESET", "CODING", "CODING_END", "FLUSHED"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

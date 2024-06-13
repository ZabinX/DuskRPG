(function(){var P$=Clazz.newPackage("java.nio.charset"),p$1={},I$=[[0,'java.nio.charset.CodingErrorAction','java.nio.charset.CoderMalfunctionError','java.nio.charset.CoderResult','java.nio.CharBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharsetDecoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.malformedInputAction=$I$(1).REPORT;
this.unmappableCharacterAction=$I$(1).REPORT;
this.state=0;
},1);

C$.$fields$=[['F',['averageCharsPerByte','maxCharsPerByte'],'I',['state'],'S',['replacement'],'O',['charset','java.nio.charset.Charset','malformedInputAction','java.nio.charset.CodingErrorAction','+unmappableCharacterAction']]
,['O',['stateNames','String[]']]]

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F$S',  function (charset, ave, max, repl) {
;C$.$init$.apply(this);
this.charset=charset;
if (ave <= 0.0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive averageCharsPerByte"]);
}if (max <= 0.0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive maxCharsPerByte"]);
}this.replacement=repl;
this.averageCharsPerByte=ave;
this.maxCharsPerByte=max;
this.replaceWith$S(repl);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F',  function (charset, ave, max) {
C$.c$$java_nio_charset_Charset$F$F$S.apply(this, [charset, ave, max, "\u00ef\u00bf\u00bd"]);
}, 1);

Clazz.newMeth(C$, 'charset$',  function () {
return this.charset;
});

Clazz.newMeth(C$, 'replacement$',  function () {
return this.replacement;
});

Clazz.newMeth(C$, 'replaceWith$S',  function (rep) {
if (rep == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null replacement"]);
}var i=rep.length$();
if (i == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty replacement"]);
}this.replacement=rep;
this.implReplaceWith$S(this.replacement);
return this;
});

Clazz.newMeth(C$, 'implReplaceWith$S',  function (newRep) {
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

Clazz.newMeth(C$, 'averageCharsPerByte$',  function () {
return this.averageCharsPerByte;
});

Clazz.newMeth(C$, 'maxCharsPerByte$',  function () {
return this.maxCharsPerByte;
});

Clazz.newMeth(C$, 'decode$java_nio_ByteBuffer$java_nio_CharBuffer$Z',  function ($in, out, done) {
var i=done ? 2 : 1;
if ((this.state != 0) && (this.state != 1) && ((!done) || (this.state != 2) )  ) {
p$1.throwIllegalStateException$I$I.apply(this, [this.state, i]);
}this.state=i;
for (; ; ) {
var localCoderResult;
try {
localCoderResult=this.decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer($in, out);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.nio.BufferUnderflowException")){
var localBufferUnderflowException = e$$;
{
throw Clazz.new_($I$(2,1).c$$Exception,[localBufferUnderflowException]);
}
} else if (Clazz.exceptionOf(e$$,"java.nio.BufferOverflowException")){
var localBufferOverflowException = e$$;
{
throw Clazz.new_($I$(2,1).c$$Exception,[localBufferOverflowException]);
}
} else {
throw e$$;
}
}
if (localCoderResult.isOverflow$()) {
return localCoderResult;
}if (localCoderResult.isUnderflow$()) {
if ((done) && ($in.hasRemaining$()) ) {
localCoderResult=$I$(3,"malformedForLength$I",[$in.remaining$()]);
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
if (out.remaining$() < this.replacement.length$()) {
return $I$(3).OVERFLOW;
}out.put$S(this.replacement);
}$in.position$I($in.position$() + localCoderResult.length$());
}
});

Clazz.newMeth(C$, 'flush$java_nio_CharBuffer',  function (out) {
if (this.state == 2) {
var localCoderResult=this.implFlush$java_nio_CharBuffer(out);
if (localCoderResult.isUnderflow$()) {
this.state=3;
}return localCoderResult;
}if (this.state != 3) {
p$1.throwIllegalStateException$I$I.apply(this, [this.state, 3]);
}return $I$(3).UNDERFLOW;
});

Clazz.newMeth(C$, 'implFlush$java_nio_CharBuffer',  function (out) {
return $I$(3).UNDERFLOW;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.implReset$();
this.state=0;
return this;
});

Clazz.newMeth(C$, 'implReset$',  function () {
});

Clazz.newMeth(C$, 'decode$java_nio_ByteBuffer',  function ($in) {
var i=(($in.remaining$() * this.averageCharsPerByte$())|0);
var localObject=$I$(4).allocate$I(i);
if ((i == 0) && ($in.remaining$() == 0) ) {
return localObject;
}this.reset$();
for (; ; ) {
var localCoderResult=$in.hasRemaining$() ? this.decode$java_nio_ByteBuffer$java_nio_CharBuffer$Z($in, localObject, true) : $I$(3).UNDERFLOW;
if (localCoderResult.isUnderflow$()) {
localCoderResult=this.flush$java_nio_CharBuffer(localObject);
}if (localCoderResult.isUnderflow$()) {
break;
}if (localCoderResult.isOverflow$()) {
i=2 * i + 1;
var localCharBuffer=$I$(4).allocate$I(i);
(localObject).flip$();
localCharBuffer.put$java_nio_CharBuffer(localObject);
localObject=localCharBuffer;
} else {
localCoderResult.throwException$();
}}
(localObject).flip$();
return localObject;
});

Clazz.newMeth(C$, 'isAutoDetecting$',  function () {
return false;
});

Clazz.newMeth(C$, 'isCharsetDetected$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'detectedCharset$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
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

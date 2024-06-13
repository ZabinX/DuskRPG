(function(){var P$=Clazz.newPackage("sun.text.normalizer"),p$1={},I$=[[0,'sun.text.normalizer.NormalizerImpl','sun.text.normalizer.NormalizerBase',['sun.text.normalizer.NormalizerBase','.IsPrevNFDSafe'],['sun.text.normalizer.NormalizerBase','.IsNextNFDSafe'],['sun.text.normalizer.NormalizerBase','.IsPrevTrueStarter'],['sun.text.normalizer.NormalizerBase','.IsNextTrueStarter'],['sun.text.normalizer.NormalizerBase','.Mode'],['sun.text.normalizer.NormalizerBase','.NFDMode'],['sun.text.normalizer.NormalizerBase','.NFKDMode'],['sun.text.normalizer.NormalizerBase','.NFCMode'],['sun.text.normalizer.NormalizerBase','.NFKCMode'],['sun.text.normalizer.NormalizerBase','.QuickCheckResult'],'sun.text.normalizer.UCharacterIterator','InternalError','sun.text.normalizer.UTF16','sun.text.normalizer.Utility','sun.text.normalizer.UCharacterProperty',['java.text.Normalizer','.Form']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NormalizerBase", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['Mode',9],['NFDMode',26],['NFKDMode',26],['NFCMode',26],['NFKCMode',26],['QuickCheckResult',25],['IsPrevBoundary',10],['IsPrevNFDSafe',26],['IsPrevTrueStarter',26],['IsNextBoundary',10],['IsNextNFDSafe',26],['IsNextTrueStarter',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buffer=Clazz.array(Character.TYPE, [100]);
this.bufferStart=0;
this.bufferPos=0;
this.bufferLimit=0;
this.mode=C$.NFC;
this.options=0;
},1);

C$.$fields$=[['I',['bufferStart','bufferPos','bufferLimit','options','currentIndex','nextIndex'],'O',['buffer','char[]','text','sun.text.normalizer.UCharacterIterator','mode','sun.text.normalizer.NormalizerBase.Mode']]
,['O',['NONE','sun.text.normalizer.NormalizerBase.Mode','+NFD','+NFKD','+NFC','+NFKC','NO','sun.text.normalizer.NormalizerBase.QuickCheckResult','+YES','+MAYBE']]]

Clazz.newMeth(C$, 'c$$S$sun_text_normalizer_NormalizerBase_Mode$I',  function (str, mode, opt) {
;C$.$init$.apply(this);
this.text=$I$(13).getInstance$S(str);
this.mode=mode;
this.options=opt;
}, 1);

Clazz.newMeth(C$, 'c$$java_text_CharacterIterator$sun_text_normalizer_NormalizerBase_Mode',  function (iter, mode) {
C$.c$$java_text_CharacterIterator$sun_text_normalizer_NormalizerBase_Mode$I.apply(this, [iter, mode, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_CharacterIterator$sun_text_normalizer_NormalizerBase_Mode$I',  function (iter, mode, opt) {
;C$.$init$.apply(this);
this.text=$I$(13,"getInstance$java_text_CharacterIterator",[iter.clone$()]);
this.mode=mode;
this.options=opt;
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
var copy=Clazz.clone(this);
copy.text=this.text.clone$();
if (this.buffer != null ) {
copy.buffer=Clazz.array(Character.TYPE, [this.buffer.length]);
System.arraycopy$O$I$O$I$I(this.buffer, 0, copy.buffer, 0, this.buffer.length);
}return copy;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString(), e],$I$(14,1).c$$S$Throwable);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'compose$S$Z$I',  function (str, compat, options) {
var dest;
var src;
if (options == 262432) {
var mappedStr=$I$(1).convert$S(str);
dest=Clazz.array(Character.TYPE, [mappedStr.length$() * 2]);
src=mappedStr.toCharArray$();
} else {
dest=Clazz.array(Character.TYPE, [str.length$() * 2]);
src=str.toCharArray$();
}var destSize=0;
var nx=$I$(1).getNX$I(options);
options&=~(12543);
if (compat) {
options|=4096;
}for (; ; ) {
destSize=$I$(1).compose$CA$I$I$CA$I$I$I$sun_text_normalizer_UnicodeSet(src, 0, src.length, dest, 0, dest.length, options, nx);
if (destSize <= dest.length) {
return  String.instantialize(dest, 0, destSize);
} else {
dest=Clazz.array(Character.TYPE, [destSize]);
}}
}, 1);

Clazz.newMeth(C$, 'decompose$S$Z',  function (str, compat) {
return C$.decompose$S$Z$I(str, compat, 0);
}, 1);

Clazz.newMeth(C$, 'decompose$S$Z$I',  function (str, compat, options) {
var trailCC=Clazz.array(Integer.TYPE, [1]);
var destSize=0;
var nx=$I$(1).getNX$I(options);
var dest;
if (options == 262432) {
var mappedStr=$I$(1).convert$S(str);
dest=Clazz.array(Character.TYPE, [mappedStr.length$() * 3]);
for (; ; ) {
destSize=$I$(1,"decompose$CA$I$I$CA$I$I$Z$IA$sun_text_normalizer_UnicodeSet",[mappedStr.toCharArray$(), 0, mappedStr.length$(), dest, 0, dest.length, compat, trailCC, nx]);
if (destSize <= dest.length) {
return  String.instantialize(dest, 0, destSize);
} else {
dest=Clazz.array(Character.TYPE, [destSize]);
}}
} else {
dest=Clazz.array(Character.TYPE, [str.length$() * 3]);
for (; ; ) {
destSize=$I$(1,"decompose$CA$I$I$CA$I$I$Z$IA$sun_text_normalizer_UnicodeSet",[str.toCharArray$(), 0, str.length$(), dest, 0, dest.length, compat, trailCC, nx]);
if (destSize <= dest.length) {
return  String.instantialize(dest, 0, destSize);
} else {
dest=Clazz.array(Character.TYPE, [destSize]);
}}
}}, 1);

Clazz.newMeth(C$, 'normalize$CA$I$I$CA$I$I$sun_text_normalizer_NormalizerBase_Mode$I',  function (src, srcStart, srcLimit, dest, destStart, destLimit, mode, options) {
var length=mode.normalize$CA$I$I$CA$I$I$I(src, srcStart, srcLimit, dest, destStart, destLimit, options);
if (length <= (destLimit - destStart)) {
return length;
} else {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(length)]);
}}, 1);

Clazz.newMeth(C$, 'current$',  function () {
if (this.bufferPos < this.bufferLimit || p$1.nextNormalize.apply(this, []) ) {
return p$1.getCodePointAt$I.apply(this, [this.bufferPos]);
} else {
return -1;
}});

Clazz.newMeth(C$, 'next$',  function () {
if (this.bufferPos < this.bufferLimit || p$1.nextNormalize.apply(this, []) ) {
var c=p$1.getCodePointAt$I.apply(this, [this.bufferPos]);
this.bufferPos+=(c > 65535) ? 2 : 1;
return c;
} else {
return -1;
}});

Clazz.newMeth(C$, 'previous$',  function () {
if (this.bufferPos > 0 || p$1.previousNormalize.apply(this, []) ) {
var c=p$1.getCodePointAt$I.apply(this, [this.bufferPos - 1]);
this.bufferPos-=(c > 65535) ? 2 : 1;
return c;
} else {
return -1;
}});

Clazz.newMeth(C$, 'reset$',  function () {
this.text.setIndex$I(0);
this.currentIndex=this.nextIndex=0;
p$1.clearBuffer.apply(this, []);
});

Clazz.newMeth(C$, 'setIndexOnly$I',  function (index) {
this.text.setIndex$I(index);
this.currentIndex=this.nextIndex=index;
p$1.clearBuffer.apply(this, []);
});

Clazz.newMeth(C$, 'setIndex$I',  function (index) {
this.setIndexOnly$I(index);
return this.current$();
});

Clazz.newMeth(C$, 'getBeginIndex$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getEndIndex$',  function () {
return this.endIndex$();
});

Clazz.newMeth(C$, 'getIndex$',  function () {
if (this.bufferPos < this.bufferLimit) {
return this.currentIndex;
} else {
return this.nextIndex;
}});

Clazz.newMeth(C$, 'endIndex$',  function () {
return this.text.getLength$();
});

Clazz.newMeth(C$, 'setMode$sun_text_normalizer_NormalizerBase_Mode',  function (newMode) {
this.mode=newMode;
});

Clazz.newMeth(C$, 'getMode$',  function () {
return this.mode;
});

Clazz.newMeth(C$, 'setText$S',  function (newText) {
var newIter=$I$(13).getInstance$S(newText);
if (newIter == null ) {
throw Clazz.new_($I$(14,1).c$$S,["Could not create a new UCharacterIterator"]);
}this.text=newIter;
this.reset$();
});

Clazz.newMeth(C$, 'setText$java_text_CharacterIterator',  function (newText) {
var newIter=$I$(13).getInstance$java_text_CharacterIterator(newText);
if (newIter == null ) {
throw Clazz.new_($I$(14,1).c$$S,["Could not create a new UCharacterIterator"]);
}this.text=newIter;
this.currentIndex=this.nextIndex=0;
p$1.clearBuffer.apply(this, []);
});

Clazz.newMeth(C$, 'getPrevNorm32$sun_text_normalizer_UCharacterIterator$I$I$CA',  function (src, minC, mask, chars) {
var norm32;
var ch=0;
if ((ch=src.previous$()) == -1) {
return 0;
}chars[0]=String.fromCharCode(ch);
chars[1]=String.fromCharCode(0);
if ((chars[0]).$c() < minC ) {
return 0;
} else if (!$I$(15).isSurrogate$C(chars[0])) {
return $I$(1).getNorm32$C(chars[0]);
} else if ($I$(15).isLeadSurrogate$C(chars[0]) || (src.getIndex$() == 0) ) {
chars[1]=String.fromCharCode(src.current$());
return 0;
} else if ($I$(15,"isLeadSurrogate$C",[chars[1]=String.fromCharCode(src.previous$())])) {
norm32=$I$(1).getNorm32$C(chars[1]);
if (Long.$eq((Long.$and(norm32,mask)),0 )) {
return 0;
} else {
return $I$(1).getNorm32FromSurrogatePair$J$C(norm32, chars[0]);
}} else {
src.moveIndex$I(1);
return 0;
}}, 1);

Clazz.newMeth(C$, 'findPreviousIterationBoundary$sun_text_normalizer_UCharacterIterator$sun_text_normalizer_NormalizerBase_IsPrevBoundary$I$I$CA$IA',  function (src, obj, minC, mask, buffer, startIndex) {
var chars=Clazz.array(Character.TYPE, [2]);
var isBoundary;
startIndex[0]=buffer.length;
chars[0]=String.fromCharCode(0);
while (src.getIndex$() > 0 && (chars[0]).$c() != -1  ){
isBoundary=obj.isPrevBoundary$sun_text_normalizer_UCharacterIterator$I$I$CA(src, minC, mask, chars);
if (startIndex[0] < ((chars[1]).$c() == 0  ? 1 : 2)) {
var newBuf=Clazz.array(Character.TYPE, [buffer.length * 2]);
System.arraycopy$O$I$O$I$I(buffer, startIndex[0], newBuf, newBuf.length - (buffer.length - startIndex[0]), buffer.length - startIndex[0]);
startIndex[0]+=newBuf.length - buffer.length;
buffer=newBuf;
newBuf=null;
}buffer[--startIndex[0]]=chars[0];
if ((chars[1]).$c() != 0 ) {
buffer[--startIndex[0]]=chars[1];
}if (isBoundary) {
break;
}}
return buffer.length - startIndex[0];
}, 1);

Clazz.newMeth(C$, 'previous$sun_text_normalizer_UCharacterIterator$CA$I$I$sun_text_normalizer_NormalizerBase_Mode$Z$ZA$I',  function (src, dest, destStart, destLimit, mode, doNormalize, pNeededToNormalize, options) {
var isPreviousBoundary;
var destLength;
var bufferLength;
var mask;
var c;
var c2;
var minC;
var destCapacity=destLimit - destStart;
destLength=0;
if (pNeededToNormalize != null ) {
pNeededToNormalize[0]=false;
}minC=String.fromCharCode(mode.getMinC$());
mask=mode.getMask$();
isPreviousBoundary=mode.getPrevBoundary$();
if (isPreviousBoundary == null ) {
destLength=0;
if ((c=src.previous$()) >= 0) {
destLength=1;
if ($I$(15,"isTrailSurrogate$C",[String.fromCharCode(c)])) {
c2=src.previous$();
if (c2 != -1) {
if ($I$(15,"isLeadSurrogate$C",[String.fromCharCode(c2)])) {
if (destCapacity >= 2) {
dest[1]=String.fromCharCode(c);
destLength=2;
}c=c2;
} else {
src.moveIndex$I(1);
}}}if (destCapacity > 0) {
dest[0]=String.fromCharCode(c);
}}return destLength;
}var buffer=Clazz.array(Character.TYPE, [100]);
var startIndex=Clazz.array(Integer.TYPE, [1]);
bufferLength=C$.findPreviousIterationBoundary$sun_text_normalizer_UCharacterIterator$sun_text_normalizer_NormalizerBase_IsPrevBoundary$I$I$CA$IA(src, isPreviousBoundary, minC.$c(), mask, buffer, startIndex);
if (bufferLength > 0) {
if (doNormalize) {
destLength=C$.normalize$CA$I$I$CA$I$I$sun_text_normalizer_NormalizerBase_Mode$I(buffer, startIndex[0], startIndex[0] + bufferLength, dest, destStart, destLimit, mode, options);
if (pNeededToNormalize != null ) {
pNeededToNormalize[0]=destLength != bufferLength || $I$(16).arrayRegionMatches$CA$I$CA$I$I(buffer, 0, dest, destStart, destLimit) ;
}} else {
if (destCapacity > 0) {
System.arraycopy$O$I$O$I$I(buffer, startIndex[0], dest, 0, (bufferLength < destCapacity) ? bufferLength : destCapacity);
}}}return destLength;
}, 1);

Clazz.newMeth(C$, 'getNextNorm32$sun_text_normalizer_UCharacterIterator$I$I$IA',  function (src, minC, mask, chars) {
var norm32;
chars[0]=src.next$();
chars[1]=0;
if (chars[0] < minC) {
return 0;
}norm32=$I$(1,"getNorm32$C",[String.fromCharCode(chars[0])]);
if ($I$(15,"isLeadSurrogate$C",[String.fromCharCode(chars[0])])) {
if (src.current$() != -1 && $I$(15,"isTrailSurrogate$C",[String.fromCharCode((chars[1]=src.current$()))]) ) {
src.moveIndex$I(1);
if (Long.$eq((Long.$and(norm32,mask)),0 )) {
return 0;
} else {
return $I$(1,"getNorm32FromSurrogatePair$J$C",[norm32, String.fromCharCode(chars[1])]);
}} else {
return 0;
}}return norm32;
}, 1);

Clazz.newMeth(C$, 'findNextIterationBoundary$sun_text_normalizer_UCharacterIterator$sun_text_normalizer_NormalizerBase_IsNextBoundary$I$I$CA',  function (src, obj, minC, mask, buffer) {
if (src.current$() == -1) {
return 0;
}var chars=Clazz.array(Integer.TYPE, [2]);
chars[0]=src.next$();
buffer[0]=String.fromCharCode(chars[0]);
var bufferIndex=1;
if ($I$(15,"isLeadSurrogate$C",[String.fromCharCode(chars[0])]) && src.current$() != -1 ) {
if ($I$(15,"isTrailSurrogate$C",[String.fromCharCode((chars[1]=src.next$()))])) {
buffer[bufferIndex++]=String.fromCharCode(chars[1]);
} else {
src.moveIndex$I(-1);
}}while (src.current$() != -1){
if (obj.isNextBoundary$sun_text_normalizer_UCharacterIterator$I$I$IA(src, minC, mask, chars)) {
src.moveIndex$I(chars[1] == 0 ? -1 : -2);
break;
} else {
if (bufferIndex + (chars[1] == 0 ? 1 : 2) <= buffer.length) {
buffer[bufferIndex++]=String.fromCharCode(chars[0]);
if (chars[1] != 0) {
buffer[bufferIndex++]=String.fromCharCode(chars[1]);
}} else {
var newBuf=Clazz.array(Character.TYPE, [buffer.length * 2]);
System.arraycopy$O$I$O$I$I(buffer, 0, newBuf, 0, bufferIndex);
buffer=newBuf;
buffer[bufferIndex++]=String.fromCharCode(chars[0]);
if (chars[1] != 0) {
buffer[bufferIndex++]=String.fromCharCode(chars[1]);
}}}}
return bufferIndex;
}, 1);

Clazz.newMeth(C$, 'next$sun_text_normalizer_UCharacterIterator$CA$I$I$sun_text_normalizer_NormalizerBase_Mode$Z$ZA$I',  function (src, dest, destStart, destLimit, mode, doNormalize, pNeededToNormalize, options) {
var isNextBoundary;
var mask;
var bufferLength;
var c;
var c2;
var minC;
var destCapacity=destLimit - destStart;
var destLength=0;
if (pNeededToNormalize != null ) {
pNeededToNormalize[0]=false;
}minC=String.fromCharCode(mode.getMinC$());
mask=mode.getMask$();
isNextBoundary=mode.getNextBoundary$();
if (isNextBoundary == null ) {
destLength=0;
c=src.next$();
if (c != -1) {
destLength=1;
if ($I$(15,"isLeadSurrogate$C",[String.fromCharCode(c)])) {
c2=src.next$();
if (c2 != -1) {
if ($I$(15,"isTrailSurrogate$C",[String.fromCharCode(c2)])) {
if (destCapacity >= 2) {
dest[1]=String.fromCharCode(c2);
destLength=2;
}} else {
src.moveIndex$I(-1);
}}}if (destCapacity > 0) {
dest[0]=String.fromCharCode(c);
}}return destLength;
}var buffer=Clazz.array(Character.TYPE, [100]);
var startIndex=Clazz.array(Integer.TYPE, [1]);
bufferLength=C$.findNextIterationBoundary$sun_text_normalizer_UCharacterIterator$sun_text_normalizer_NormalizerBase_IsNextBoundary$I$I$CA(src, isNextBoundary, minC.$c(), mask, buffer);
if (bufferLength > 0) {
if (doNormalize) {
destLength=mode.normalize$CA$I$I$CA$I$I$I(buffer, startIndex[0], bufferLength, dest, destStart, destLimit, options);
if (pNeededToNormalize != null ) {
pNeededToNormalize[0]=destLength != bufferLength || $I$(16).arrayRegionMatches$CA$I$CA$I$I(buffer, startIndex[0], dest, destStart, destLength) ;
}} else {
if (destCapacity > 0) {
System.arraycopy$O$I$O$I$I(buffer, 0, dest, destStart, Math.min(bufferLength, destCapacity));
}}}return destLength;
}, 1);

Clazz.newMeth(C$, 'clearBuffer',  function () {
this.bufferLimit=this.bufferStart=this.bufferPos=0;
}, p$1);

Clazz.newMeth(C$, 'nextNormalize',  function () {
p$1.clearBuffer.apply(this, []);
this.currentIndex=this.nextIndex;
this.text.setIndex$I(this.nextIndex);
this.bufferLimit=C$.next$sun_text_normalizer_UCharacterIterator$CA$I$I$sun_text_normalizer_NormalizerBase_Mode$Z$ZA$I(this.text, this.buffer, this.bufferStart, this.buffer.length, this.mode, true, null, this.options);
this.nextIndex=this.text.getIndex$();
return (this.bufferLimit > 0);
}, p$1);

Clazz.newMeth(C$, 'previousNormalize',  function () {
p$1.clearBuffer.apply(this, []);
this.nextIndex=this.currentIndex;
this.text.setIndex$I(this.currentIndex);
this.bufferLimit=C$.previous$sun_text_normalizer_UCharacterIterator$CA$I$I$sun_text_normalizer_NormalizerBase_Mode$Z$ZA$I(this.text, this.buffer, this.bufferStart, this.buffer.length, this.mode, true, null, this.options);
this.currentIndex=this.text.getIndex$();
this.bufferPos=this.bufferLimit;
return this.bufferLimit > 0;
}, p$1);

Clazz.newMeth(C$, 'getCodePointAt$I',  function (index) {
if ($I$(15).isSurrogate$C(this.buffer[index])) {
if ($I$(15).isLeadSurrogate$C(this.buffer[index])) {
if ((index + 1) < this.bufferLimit && $I$(15).isTrailSurrogate$C(this.buffer[index + 1]) ) {
return $I$(17).getRawSupplementary$C$C(this.buffer[index], this.buffer[index + 1]);
}} else if ($I$(15).isTrailSurrogate$C(this.buffer[index])) {
if (index > 0 && $I$(15).isLeadSurrogate$C(this.buffer[index - 1]) ) {
return $I$(17).getRawSupplementary$C$C(this.buffer[index - 1], this.buffer[index]);
}}}return this.buffer[index].$c();
}, p$1);

Clazz.newMeth(C$, 'isNFSkippable$I$sun_text_normalizer_NormalizerBase_Mode',  function (c, mode) {
return mode.isNFSkippable$I(c);
}, 1);

Clazz.newMeth(C$, 'c$$S$sun_text_normalizer_NormalizerBase_Mode',  function (str, mode) {
C$.c$$S$sun_text_normalizer_NormalizerBase_Mode$I.apply(this, [str, mode, 0]);
}, 1);

Clazz.newMeth(C$, 'normalize$S$java_text_Normalizer_Form',  function (str, form) {
return C$.normalize$S$java_text_Normalizer_Form$I(str, form, 0);
}, 1);

Clazz.newMeth(C$, 'normalize$S$java_text_Normalizer_Form$I',  function (str, form, options) {
var len=str.length$();
var asciiOnly=true;
if (len < 80) {
for (var i=0; i < len; i++) {
if ((str.charCodeAt$I(i)) > 127 ) {
asciiOnly=false;
break;
}}
} else {
var a=str.toCharArray$();
for (var i=0; i < len; i++) {
if ((a[i]).$c() > 127 ) {
asciiOnly=false;
break;
}}
}switch (form) {
case $I$(18).NFC:
return asciiOnly ? str : C$.NFC.normalize$S$I(str, options);
case $I$(18).NFD:
return asciiOnly ? str : C$.NFD.normalize$S$I(str, options);
case $I$(18).NFKC:
return asciiOnly ? str : C$.NFKC.normalize$S$I(str, options);
case $I$(18).NFKD:
return asciiOnly ? str : C$.NFKD.normalize$S$I(str, options);
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected normalization form: " + form]);
}, 1);

Clazz.newMeth(C$, 'isNormalized$S$java_text_Normalizer_Form',  function (str, form) {
return C$.isNormalized$S$java_text_Normalizer_Form$I(str, form, 0);
}, 1);

Clazz.newMeth(C$, 'isNormalized$S$java_text_Normalizer_Form$I',  function (str, form, options) {
switch (form) {
case $I$(18).NFC:
return (C$.NFC.quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet(str.toCharArray$(), 0, str.length$(), false, $I$(1).getNX$I(options)) === C$.YES );
case $I$(18).NFD:
return (C$.NFD.quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet(str.toCharArray$(), 0, str.length$(), false, $I$(1).getNX$I(options)) === C$.YES );
case $I$(18).NFKC:
return (C$.NFKC.quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet(str.toCharArray$(), 0, str.length$(), false, $I$(1).getNX$I(options)) === C$.YES );
case $I$(18).NFKD:
return (C$.NFKD.quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet(str.toCharArray$(), 0, str.length$(), false, $I$(1).getNX$I(options)) === C$.YES );
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected normalization form: " + form]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.NONE=Clazz.new_($I$(7,1).c$$I,[1]);
C$.NFD=Clazz.new_($I$(8,1).c$$I,[2]);
C$.NFKD=Clazz.new_($I$(9,1).c$$I,[3]);
C$.NFC=Clazz.new_($I$(10,1).c$$I,[4]);
C$.NFKC=Clazz.new_($I$(11,1).c$$I,[5]);
C$.NO=Clazz.new_($I$(12,1).c$$I,[0]);
C$.YES=Clazz.new_($I$(12,1).c$$I,[1]);
C$.MAYBE=Clazz.new_($I$(12,1).c$$I,[2]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "Mode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modeValue']]]

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.$init$.apply(this);
this.modeValue=value;
}, 1);

Clazz.newMeth(C$, 'normalize$CA$I$I$CA$I$I$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, dest, destStart, destLimit, nx) {
var srcLen=(srcLimit - srcStart);
var destLen=(destLimit - destStart);
if (srcLen > destLen) {
return srcLen;
}System.arraycopy$O$I$O$I$I(src, srcStart, dest, destStart, srcLen);
return srcLen;
});

Clazz.newMeth(C$, 'normalize$CA$I$I$CA$I$I$I',  function (src, srcStart, srcLimit, dest, destStart, destLimit, options) {
return this.normalize$CA$I$I$CA$I$I$sun_text_normalizer_UnicodeSet(src, srcStart, srcLimit, dest, destStart, destLimit, $I$(1).getNX$I(options));
});

Clazz.newMeth(C$, 'normalize$S$I',  function (src, options) {
return src;
});

Clazz.newMeth(C$, 'getMinC$',  function () {
return -1;
});

Clazz.newMeth(C$, 'getMask$',  function () {
return -1;
});

Clazz.newMeth(C$, 'getPrevBoundary$',  function () {
return null;
});

Clazz.newMeth(C$, 'getNextBoundary$',  function () {
return null;
});

Clazz.newMeth(C$, 'quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet',  function (src, start, limit, allowMaybe, nx) {
if (allowMaybe) {
return $I$(2).MAYBE;
}return $I$(2).NO;
});

Clazz.newMeth(C$, 'isNFSkippable$I',  function (c) {
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "NFDMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.text.normalizer.NormalizerBase','.Mode']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.superclazz.c$$I.apply(this,[value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'normalize$CA$I$I$CA$I$I$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, dest, destStart, destLimit, nx) {
var trailCC=Clazz.array(Integer.TYPE, [1]);
return $I$(1).decompose$CA$I$I$CA$I$I$Z$IA$sun_text_normalizer_UnicodeSet(src, srcStart, srcLimit, dest, destStart, destLimit, false, trailCC, nx);
});

Clazz.newMeth(C$, 'normalize$S$I',  function (src, options) {
return $I$(2).decompose$S$Z$I(src, false, options);
});

Clazz.newMeth(C$, 'getMinC$',  function () {
return 768;
});

Clazz.newMeth(C$, 'getPrevBoundary$',  function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getNextBoundary$',  function () {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'getMask$',  function () {
return (65284);
});

Clazz.newMeth(C$, 'quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet',  function (src, start, limit, allowMaybe, nx) {
return $I$(1,"quickCheck$CA$I$I$I$I$I$Z$sun_text_normalizer_UnicodeSet",[src, start, limit, $I$(1).getFromIndexesArr$I(8), 4, 0, allowMaybe, nx]);
});

Clazz.newMeth(C$, 'isNFSkippable$I',  function (c) {
return $I$(1,"isNFSkippable$I$sun_text_normalizer_NormalizerBase_Mode$J",[c, this, (65284)]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "NFKDMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.text.normalizer.NormalizerBase','.Mode']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.superclazz.c$$I.apply(this,[value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'normalize$CA$I$I$CA$I$I$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, dest, destStart, destLimit, nx) {
var trailCC=Clazz.array(Integer.TYPE, [1]);
return $I$(1).decompose$CA$I$I$CA$I$I$Z$IA$sun_text_normalizer_UnicodeSet(src, srcStart, srcLimit, dest, destStart, destLimit, true, trailCC, nx);
});

Clazz.newMeth(C$, 'normalize$S$I',  function (src, options) {
return $I$(2).decompose$S$Z$I(src, true, options);
});

Clazz.newMeth(C$, 'getMinC$',  function () {
return 768;
});

Clazz.newMeth(C$, 'getPrevBoundary$',  function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getNextBoundary$',  function () {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'getMask$',  function () {
return (65288);
});

Clazz.newMeth(C$, 'quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet',  function (src, start, limit, allowMaybe, nx) {
return $I$(1,"quickCheck$CA$I$I$I$I$I$Z$sun_text_normalizer_UnicodeSet",[src, start, limit, $I$(1).getFromIndexesArr$I(9), 8, 4096, allowMaybe, nx]);
});

Clazz.newMeth(C$, 'isNFSkippable$I',  function (c) {
return $I$(1,"isNFSkippable$I$sun_text_normalizer_NormalizerBase_Mode$J",[c, this, (65288)]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "NFCMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.text.normalizer.NormalizerBase','.Mode']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.superclazz.c$$I.apply(this,[value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'normalize$CA$I$I$CA$I$I$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, dest, destStart, destLimit, nx) {
return $I$(1).compose$CA$I$I$CA$I$I$I$sun_text_normalizer_UnicodeSet(src, srcStart, srcLimit, dest, destStart, destLimit, 0, nx);
});

Clazz.newMeth(C$, 'normalize$S$I',  function (src, options) {
return $I$(2).compose$S$Z$I(src, false, options);
});

Clazz.newMeth(C$, 'getMinC$',  function () {
return $I$(1).getFromIndexesArr$I(6);
});

Clazz.newMeth(C$, 'getPrevBoundary$',  function () {
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'getNextBoundary$',  function () {
return Clazz.new_($I$(6,1));
});

Clazz.newMeth(C$, 'getMask$',  function () {
return (65297);
});

Clazz.newMeth(C$, 'quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet',  function (src, start, limit, allowMaybe, nx) {
return $I$(1,"quickCheck$CA$I$I$I$I$I$Z$sun_text_normalizer_UnicodeSet",[src, start, limit, $I$(1).getFromIndexesArr$I(6), 17, 0, allowMaybe, nx]);
});

Clazz.newMeth(C$, 'isNFSkippable$I',  function (c) {
return $I$(1,"isNFSkippable$I$sun_text_normalizer_NormalizerBase_Mode$J",[c, this, (65473)]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "NFKCMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.text.normalizer.NormalizerBase','.Mode']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.superclazz.c$$I.apply(this,[value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'normalize$CA$I$I$CA$I$I$sun_text_normalizer_UnicodeSet',  function (src, srcStart, srcLimit, dest, destStart, destLimit, nx) {
return $I$(1).compose$CA$I$I$CA$I$I$I$sun_text_normalizer_UnicodeSet(src, srcStart, srcLimit, dest, destStart, destLimit, 4096, nx);
});

Clazz.newMeth(C$, 'normalize$S$I',  function (src, options) {
return $I$(2).compose$S$Z$I(src, true, options);
});

Clazz.newMeth(C$, 'getMinC$',  function () {
return $I$(1).getFromIndexesArr$I(7);
});

Clazz.newMeth(C$, 'getPrevBoundary$',  function () {
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'getNextBoundary$',  function () {
return Clazz.new_($I$(6,1));
});

Clazz.newMeth(C$, 'getMask$',  function () {
return (65314);
});

Clazz.newMeth(C$, 'quickCheck$CA$I$I$Z$sun_text_normalizer_UnicodeSet',  function (src, start, limit, allowMaybe, nx) {
return $I$(1,"quickCheck$CA$I$I$I$I$I$Z$sun_text_normalizer_UnicodeSet",[src, start, limit, $I$(1).getFromIndexesArr$I(7), 34, 4096, allowMaybe, nx]);
});

Clazz.newMeth(C$, 'isNFSkippable$I',  function (c) {
return $I$(1,"isNFSkippable$I$sun_text_normalizer_NormalizerBase_Mode$J",[c, this, (65474)]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "QuickCheckResult", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['resultValue']]]

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.$init$.apply(this);
this.resultValue=value;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.NormalizerBase, "IsPrevBoundary", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "IsPrevNFDSafe", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.NormalizerBase','sun.text.normalizer.NormalizerBase.IsPrevBoundary']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isPrevBoundary$sun_text_normalizer_UCharacterIterator$I$I$CA',  function (src, minC, ccOrQCMask, chars) {
return $I$(1,"isNFDSafe$J$I$I",[$I$(2).getPrevNorm32$sun_text_normalizer_UCharacterIterator$I$I$CA(src, minC, ccOrQCMask, chars), ccOrQCMask, ccOrQCMask & 63]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "IsPrevTrueStarter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.NormalizerBase','sun.text.normalizer.NormalizerBase.IsPrevBoundary']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isPrevBoundary$sun_text_normalizer_UCharacterIterator$I$I$CA',  function (src, minC, ccOrQCMask, chars) {
var norm32;
var decompQCMask;
decompQCMask=(ccOrQCMask << 2) & 15;
norm32=$I$(2).getPrevNorm32$sun_text_normalizer_UCharacterIterator$I$I$CA(src, minC, ccOrQCMask | decompQCMask, chars);
return $I$(1).isTrueStarter$J$I$I(norm32, ccOrQCMask, decompQCMask);
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.NormalizerBase, "IsNextBoundary", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "IsNextNFDSafe", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.NormalizerBase','sun.text.normalizer.NormalizerBase.IsNextBoundary']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isNextBoundary$sun_text_normalizer_UCharacterIterator$I$I$IA',  function (src, minC, ccOrQCMask, chars) {
return $I$(1,"isNFDSafe$J$I$I",[$I$(2).getNextNorm32$sun_text_normalizer_UCharacterIterator$I$I$IA(src, minC, ccOrQCMask, chars), ccOrQCMask, ccOrQCMask & 63]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NormalizerBase, "IsNextTrueStarter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.text.normalizer.NormalizerBase','sun.text.normalizer.NormalizerBase.IsNextBoundary']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isNextBoundary$sun_text_normalizer_UCharacterIterator$I$I$IA',  function (src, minC, ccOrQCMask, chars) {
var norm32;
var decompQCMask;
decompQCMask=(ccOrQCMask << 2) & 15;
norm32=$I$(2).getNextNorm32$sun_text_normalizer_UCharacterIterator$I$I$IA(src, minC, ccOrQCMask | decompQCMask, chars);
return $I$(1).isTrueStarter$J$I$I(norm32, ccOrQCMask, decompQCMask);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

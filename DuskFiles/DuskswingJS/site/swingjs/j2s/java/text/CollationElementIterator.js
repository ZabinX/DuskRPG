(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'StringBuffer','sun.text.CollatorUtilities','sun.text.normalizer.NormalizerBase']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CollationElementIterator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.text=null;
this.buffer=null;
this.expIndex=0;
this.key=Clazz.new_($I$(1,1).c$$I,[5]);
this.swapOrder=0;
},1);

C$.$fields$=[['I',['expIndex','swapOrder'],'O',['text','sun.text.normalizer.NormalizerBase','buffer','int[]','key','StringBuffer','ordering','java.text.RBCollationTables','owner','java.text.RuleBasedCollator']]]

Clazz.newMeth(C$, 'c$$S$java_text_RuleBasedCollator',  function (sourceText, owner) {
;C$.$init$.apply(this);
this.owner=owner;
this.ordering=owner.getTables$();
if (sourceText.length$() != 0) {
var mode=$I$(2,"toNormalizerMode$I",[owner.getDecomposition$()]);
this.text=Clazz.new_($I$(3,1).c$$S$sun_text_normalizer_NormalizerBase_Mode,[sourceText, mode]);
}}, 1);

Clazz.newMeth(C$, 'c$$java_text_CharacterIterator$java_text_RuleBasedCollator',  function (sourceText, owner) {
;C$.$init$.apply(this);
this.owner=owner;
this.ordering=owner.getTables$();
var mode=$I$(2,"toNormalizerMode$I",[owner.getDecomposition$()]);
this.text=Clazz.new_($I$(3,1).c$$java_text_CharacterIterator$sun_text_normalizer_NormalizerBase_Mode,[sourceText, mode]);
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
if (this.text != null ) {
this.text.reset$();
var mode=$I$(2,"toNormalizerMode$I",[this.owner.getDecomposition$()]);
this.text.setMode$sun_text_normalizer_NormalizerBase_Mode(mode);
}this.buffer=null;
this.expIndex=0;
this.swapOrder=0;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.text == null ) {
return -1;
}var textMode=this.text.getMode$();
var ownerMode=$I$(2,"toNormalizerMode$I",[this.owner.getDecomposition$()]);
if (textMode !== ownerMode ) {
this.text.setMode$sun_text_normalizer_NormalizerBase_Mode(ownerMode);
}if (this.buffer != null ) {
if (this.expIndex < this.buffer.length) {
return this.strengthOrder$I(this.buffer[this.expIndex++]);
} else {
this.buffer=null;
this.expIndex=0;
}} else if (this.swapOrder != 0) {
if (Character.isSupplementaryCodePoint$I(this.swapOrder)) {
var chars=Character.toChars$I(this.swapOrder);
this.swapOrder=chars[1].$c();
return (chars[0]).$c() << 16;
}var order=this.swapOrder << 16;
this.swapOrder=0;
return order;
}var ch=this.text.next$();
if (ch == -1) {
return -1;
}var value=this.ordering.getUnicodeOrder$I(ch);
if (value == -1) {
this.swapOrder=ch;
return 2147418112;
} else if (value >= 2130706432) {
value=p$1.nextContractChar$I.apply(this, [ch]);
}if (value >= 2113929216) {
this.buffer=this.ordering.getExpandValueList$I(value);
this.expIndex=0;
value=this.buffer[this.expIndex++];
}if (this.ordering.isSEAsianSwapping$()) {
var consonant;
if (C$.isThaiPreVowel$I(ch)) {
consonant=this.text.next$();
if (C$.isThaiBaseConsonant$I(consonant)) {
this.buffer=p$1.makeReorderedBuffer$I$I$IA$Z.apply(this, [consonant, value, this.buffer, true]);
value=this.buffer[0];
this.expIndex=1;
} else if (consonant != -1) {
this.text.previous$();
}}if (C$.isLaoPreVowel$I(ch)) {
consonant=this.text.next$();
if (C$.isLaoBaseConsonant$I(consonant)) {
this.buffer=p$1.makeReorderedBuffer$I$I$IA$Z.apply(this, [consonant, value, this.buffer, true]);
value=this.buffer[0];
this.expIndex=1;
} else if (consonant != -1) {
this.text.previous$();
}}}return this.strengthOrder$I(value);
});

Clazz.newMeth(C$, 'previous$',  function () {
if (this.text == null ) {
return -1;
}var textMode=this.text.getMode$();
var ownerMode=$I$(2,"toNormalizerMode$I",[this.owner.getDecomposition$()]);
if (textMode !== ownerMode ) {
this.text.setMode$sun_text_normalizer_NormalizerBase_Mode(ownerMode);
}if (this.buffer != null ) {
if (this.expIndex > 0) {
return this.strengthOrder$I(this.buffer[--this.expIndex]);
} else {
this.buffer=null;
this.expIndex=0;
}} else if (this.swapOrder != 0) {
if (Character.isSupplementaryCodePoint$I(this.swapOrder)) {
var chars=Character.toChars$I(this.swapOrder);
this.swapOrder=chars[1].$c();
return (chars[0]).$c() << 16;
}var order=this.swapOrder << 16;
this.swapOrder=0;
return order;
}var ch=this.text.previous$();
if (ch == -1) {
return -1;
}var value=this.ordering.getUnicodeOrder$I(ch);
if (value == -1) {
this.swapOrder=2147418112;
return ch;
} else if (value >= 2130706432) {
value=p$1.prevContractChar$I.apply(this, [ch]);
}if (value >= 2113929216) {
this.buffer=this.ordering.getExpandValueList$I(value);
this.expIndex=this.buffer.length;
value=this.buffer[--this.expIndex];
}if (this.ordering.isSEAsianSwapping$()) {
var vowel;
if (C$.isThaiBaseConsonant$I(ch)) {
vowel=this.text.previous$();
if (C$.isThaiPreVowel$I(vowel)) {
this.buffer=p$1.makeReorderedBuffer$I$I$IA$Z.apply(this, [vowel, value, this.buffer, false]);
this.expIndex=this.buffer.length - 1;
value=this.buffer[this.expIndex];
} else {
this.text.next$();
}}if (C$.isLaoBaseConsonant$I(ch)) {
vowel=this.text.previous$();
if (C$.isLaoPreVowel$I(vowel)) {
this.buffer=p$1.makeReorderedBuffer$I$I$IA$Z.apply(this, [vowel, value, this.buffer, false]);
this.expIndex=this.buffer.length - 1;
value=this.buffer[this.expIndex];
} else {
this.text.next$();
}}}return this.strengthOrder$I(value);
});

Clazz.newMeth(C$, 'primaryOrder$I',  function (order) {
order&=-65536;
return (order >>> 16);
}, 1);

Clazz.newMeth(C$, 'secondaryOrder$I',  function (order) {
order=order & 65280;
return (($s$[0] = (order >> 8), $s$[0]));
}, 1);

Clazz.newMeth(C$, 'tertiaryOrder$I',  function (order) {
return (($s$[0] = (order&=255), $s$[0]));
}, 1);

Clazz.newMeth(C$, 'strengthOrder$I',  function (order) {
var s=this.owner.getStrength$();
if (s == 0) {
order&=-65536;
} else if (s == 1) {
order&=-256;
}return order;
});

Clazz.newMeth(C$, 'setOffset$I',  function (newOffset) {
if (this.text != null ) {
if (newOffset < this.text.getBeginIndex$() || newOffset >= this.text.getEndIndex$() ) {
this.text.setIndexOnly$I(newOffset);
} else {
var c=this.text.setIndex$I(newOffset);
if (this.ordering.usedInContractSeq$I(c)) {
while (this.ordering.usedInContractSeq$I(c)){
c=this.text.previous$();
}
var last=this.text.getIndex$();
while (this.text.getIndex$() <= newOffset){
last=this.text.getIndex$();
this.next$();
}
this.text.setIndexOnly$I(last);
}}}this.buffer=null;
this.expIndex=0;
this.swapOrder=0;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return (this.text != null ) ? this.text.getIndex$() : 0;
});

Clazz.newMeth(C$, 'getMaxExpansion$I',  function (order) {
return this.ordering.getMaxExpansion$I(order);
});

Clazz.newMeth(C$, 'setText$S',  function (source) {
this.buffer=null;
this.swapOrder=0;
this.expIndex=0;
var mode=$I$(2,"toNormalizerMode$I",[this.owner.getDecomposition$()]);
if (this.text == null ) {
this.text=Clazz.new_($I$(3,1).c$$S$sun_text_normalizer_NormalizerBase_Mode,[source, mode]);
} else {
this.text.setMode$sun_text_normalizer_NormalizerBase_Mode(mode);
this.text.setText$S(source);
}});

Clazz.newMeth(C$, 'setText$java_text_CharacterIterator',  function (source) {
this.buffer=null;
this.swapOrder=0;
this.expIndex=0;
var mode=$I$(2,"toNormalizerMode$I",[this.owner.getDecomposition$()]);
if (this.text == null ) {
this.text=Clazz.new_($I$(3,1).c$$java_text_CharacterIterator$sun_text_normalizer_NormalizerBase_Mode,[source, mode]);
} else {
this.text.setMode$sun_text_normalizer_NormalizerBase_Mode(mode);
this.text.setText$java_text_CharacterIterator(source);
}});

Clazz.newMeth(C$, 'isThaiPreVowel$I',  function (ch) {
return (ch >= 3648) && (ch <= 3652) ;
}, 1);

Clazz.newMeth(C$, 'isThaiBaseConsonant$I',  function (ch) {
return (ch >= 3585) && (ch <= 3630) ;
}, 1);

Clazz.newMeth(C$, 'isLaoPreVowel$I',  function (ch) {
return (ch >= 3776) && (ch <= 3780) ;
}, 1);

Clazz.newMeth(C$, 'isLaoBaseConsonant$I',  function (ch) {
return (ch >= 3713) && (ch <= 3758) ;
}, 1);

Clazz.newMeth(C$, 'makeReorderedBuffer$I$I$IA$Z',  function (colFirst, lastValue, lastExpansion, forward) {
var result;
var firstValue=this.ordering.getUnicodeOrder$I(colFirst);
if (firstValue >= 2130706432) {
firstValue=forward ? p$1.nextContractChar$I.apply(this, [colFirst]) : p$1.prevContractChar$I.apply(this, [colFirst]);
}var firstExpansion=null;
if (firstValue >= 2113929216) {
firstExpansion=this.ordering.getExpandValueList$I(firstValue);
}if (!forward) {
var temp1=firstValue;
firstValue=lastValue;
lastValue=temp1;
var temp2=firstExpansion;
firstExpansion=lastExpansion;
lastExpansion=temp2;
}if (firstExpansion == null  && lastExpansion == null  ) {
result=Clazz.array(Integer.TYPE, [2]);
result[0]=firstValue;
result[1]=lastValue;
} else {
var firstLength=firstExpansion == null  ? 1 : firstExpansion.length;
var lastLength=lastExpansion == null  ? 1 : lastExpansion.length;
result=Clazz.array(Integer.TYPE, [firstLength + lastLength]);
if (firstExpansion == null ) {
result[0]=firstValue;
} else {
System.arraycopy$O$I$O$I$I(firstExpansion, 0, result, 0, firstLength);
}if (lastExpansion == null ) {
result[firstLength]=lastValue;
} else {
System.arraycopy$O$I$O$I$I(lastExpansion, 0, result, firstLength, lastLength);
}}return result;
}, p$1);

Clazz.newMeth(C$, 'isIgnorable$I',  function (order) {
return ((C$.primaryOrder$I(order) == 0) ? true : false);
}, 1);

Clazz.newMeth(C$, 'nextContractChar$I',  function (ch) {
var list=this.ordering.getContractValues$I(ch);
var pair=list.firstElement$();
var order=pair.value;
pair=list.lastElement$();
var maxLength=pair.entryName.length$();
var tempText=this.text.clone$();
tempText.previous$();
this.key.setLength$I(0);
var c=tempText.next$();
while (maxLength > 0 && c != -1 ){
if (Character.isSupplementaryCodePoint$I(c)) {
this.key.append$CA(Character.toChars$I(c));
maxLength-=2;
} else {
this.key.append$C(String.fromCharCode(c));
--maxLength;
}c=tempText.next$();
}
var fragment=this.key.toString();
maxLength=1;
for (var i=list.size$() - 1; i > 0; i--) {
pair=list.elementAt$I(i);
if (!pair.fwd) continue;
if (fragment.startsWith$S(pair.entryName) && pair.entryName.length$() > maxLength ) {
maxLength=pair.entryName.length$();
order=pair.value;
}}
while (maxLength > 1){
c=this.text.next$();
maxLength-=Character.charCount$I(c);
}
return order;
}, p$1);

Clazz.newMeth(C$, 'prevContractChar$I',  function (ch) {
var list=this.ordering.getContractValues$I(ch);
var pair=list.firstElement$();
var order=pair.value;
pair=list.lastElement$();
var maxLength=pair.entryName.length$();
var tempText=this.text.clone$();
tempText.next$();
this.key.setLength$I(0);
var c=tempText.previous$();
while (maxLength > 0 && c != -1 ){
if (Character.isSupplementaryCodePoint$I(c)) {
this.key.append$CA(Character.toChars$I(c));
maxLength-=2;
} else {
this.key.append$C(String.fromCharCode(c));
--maxLength;
}c=tempText.previous$();
}
var fragment=this.key.toString();
maxLength=1;
for (var i=list.size$() - 1; i > 0; i--) {
pair=list.elementAt$I(i);
if (pair.fwd) continue;
if (fragment.startsWith$S(pair.entryName) && pair.entryName.length$() > maxLength ) {
maxLength=pair.entryName.length$();
order=pair.value;
}}
while (maxLength > 1){
c=this.text.previous$();
maxLength-=Character.charCount$I(c);
}
return order;
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

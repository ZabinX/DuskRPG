(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'StringBuffer','sun.text.normalizer.UTF16','sun.text.normalizer.UCharacter','sun.text.normalizer.UCharacterProperty']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Utility");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['UNESCAPE_MAP','char[]','+DIGITS']]]

Clazz.newMeth(C$, 'arrayRegionMatches$CA$I$CA$I$I',  function (source, sourceStart, target, targetStart, len) {
var sourceEnd=sourceStart + len;
var delta=targetStart - sourceStart;
for (var i=sourceStart; i < sourceEnd; i++) {
if (source[i] != target[i + delta]) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'escape$S',  function (s) {
var buf=Clazz.new_($I$(1,1));
for (var i=0; i < s.length$(); ) {
var c=$I$(2).charAt$S$I(s, i);
i+=$I$(2).getCharCount$I(c);
if (c >= 32  && c <= 127 ) {
if (c == 92 ) {
buf.append$S("\\\\");
} else {
buf.append$C(String.fromCharCode(c));
}} else {
var four=c <= 65535;
buf.append$S(four ? "\\u" : "\\U");
C$.hex$I$I$StringBuffer(c, four ? 4 : 8, buf);
}}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'unescapeAt$S$IA',  function (s, offset16) {
var c;
var result=0;
var n=0;
var minDig=0;
var maxDig=0;
var bitsPerDigit=4;
var dig;
var i;
var braces=false;
var offset=offset16[0];
var length=s.length$();
if (offset < 0 || offset >= length ) {
return -1;
}c=$I$(2).charAt$S$I(s, offset);
offset+=$I$(2).getCharCount$I(c);
switch (c) {
case 117:
minDig=maxDig=4;
break;
case 85:
minDig=maxDig=8;
break;
case 120:
minDig=1;
if (offset < length && $I$(2).charAt$S$I(s, offset) == 123 ) {
++offset;
braces=true;
maxDig=8;
} else {
maxDig=2;
}break;
default:
dig=$I$(3).digit$I$I(c, 8);
if (dig >= 0) {
minDig=1;
maxDig=3;
n=1;
bitsPerDigit=3;
result=dig;
}break;
}
if (minDig != 0) {
while (offset < length && n < maxDig ){
c=$I$(2).charAt$S$I(s, offset);
dig=$I$(3,"digit$I$I",[c, (bitsPerDigit == 3) ? 8 : 16]);
if (dig < 0) {
break;
}result=(result << bitsPerDigit) | dig;
offset+=$I$(2).getCharCount$I(c);
++n;
}
if (n < minDig) {
return -1;
}if (braces) {
if (c != 125) {
return -1;
}++offset;
}if (result < 0 || result >= 1114112 ) {
return -1;
}if (offset < length && $I$(2,"isLeadSurrogate$C",[String.fromCharCode(result)]) ) {
var ahead=offset + 1;
c=s.charAt$I(offset).$c();
if (c == 92  && ahead < length ) {
var o=Clazz.array(Integer.TYPE, -1, [ahead]);
c=C$.unescapeAt$S$IA(s, o);
ahead=o[0];
}if ($I$(2,"isTrailSurrogate$C",[String.fromCharCode(c)])) {
offset=ahead;
result=$I$(4,"getRawSupplementary$C$C",[String.fromCharCode(result), String.fromCharCode(c)]);
}}offset16[0]=offset;
return result;
}for (i=0; i < C$.UNESCAPE_MAP.length; i+=2) {
if (c == (C$.UNESCAPE_MAP[i]).$c() ) {
offset16[0]=offset;
return C$.UNESCAPE_MAP[i + 1].$c();
} else if (c < (C$.UNESCAPE_MAP[i]).$c() ) {
break;
}}
if (c == 99  && offset < length ) {
c=$I$(2).charAt$S$I(s, offset);
offset16[0]=offset + $I$(2).getCharCount$I(c);
return 31 & c;
}offset16[0]=offset;
return c;
}, 1);

Clazz.newMeth(C$, 'hex$I$I$StringBuffer',  function (ch, width, output) {
return C$.appendNumber$StringBuffer$I$I$I(output, ch, 16, width);
}, 1);

Clazz.newMeth(C$, 'hex$I$I',  function (ch, width) {
var buf=Clazz.new_($I$(1,1));
return C$.appendNumber$StringBuffer$I$I$I(buf, ch, 16, width).toString();
}, 1);

Clazz.newMeth(C$, 'skipWhitespace$S$I',  function (str, pos) {
while (pos < str.length$()){
var c=$I$(2).charAt$S$I(str, pos);
if (!$I$(4).isRuleWhiteSpace$I(c)) {
break;
}pos+=$I$(2).getCharCount$I(c);
}
return pos;
}, 1);

Clazz.newMeth(C$, 'recursiveAppendNumber$StringBuffer$I$I$I',  function (result, n, radix, minDigits) {
var digit=n % radix;
if (n >= radix || minDigits > 1 ) {
C$.recursiveAppendNumber$StringBuffer$I$I$I(result, (n/radix|0), radix, minDigits - 1);
}result.append$C(C$.DIGITS[digit]);
}, 1);

Clazz.newMeth(C$, 'appendNumber$StringBuffer$I$I$I',  function (result, n, radix, minDigits) {
if (radix < 2 || radix > 36 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal radix " + radix]);
}var abs=n;
if (n < 0) {
abs=-n;
result.append$S("-");
}C$.recursiveAppendNumber$StringBuffer$I$I$I(result, abs, radix, minDigits);
return result;
}, 1);

Clazz.newMeth(C$, 'isUnprintable$I',  function (c) {
return !(c >= 32 && c <= 126 );
}, 1);

Clazz.newMeth(C$, 'escapeUnprintable$StringBuffer$I',  function (result, c) {
if (C$.isUnprintable$I(c)) {
result.append$C("\\");
if ((c & ~65535) != 0) {
result.append$C("U");
result.append$C(C$.DIGITS[15 & (c >> 28)]);
result.append$C(C$.DIGITS[15 & (c >> 24)]);
result.append$C(C$.DIGITS[15 & (c >> 20)]);
result.append$C(C$.DIGITS[15 & (c >> 16)]);
} else {
result.append$C("u");
}result.append$C(C$.DIGITS[15 & (c >> 12)]);
result.append$C(C$.DIGITS[15 & (c >> 8)]);
result.append$C(C$.DIGITS[15 & (c >> 4)]);
result.append$C(C$.DIGITS[15 & c]);
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getChars$StringBuffer$I$I$CA$I',  function (src, srcBegin, srcEnd, dst, dstBegin) {
if (srcBegin == srcEnd) {
return;
}src.getChars$I$I$CA$I(srcBegin, srcEnd, dst, dstBegin);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.UNESCAPE_MAP=Clazz.array(Character.TYPE, -1, [97, 7, 98, 8, 101, 27, 102, 12, 110, 10, 114, 13, 116, 9, 118, 11]);
C$.DIGITS=Clazz.array(Character.TYPE, -1, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

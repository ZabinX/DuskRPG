(function(){var P$=java.lang,I$=[[0,'StringUTF16','OutOfMemoryError','String9','StringLatin1','ConditionalSpecialCasing','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringUTF16", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CharsSpliterator',8],['CodePointsSpliterator',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['HI_BYTE_SHIFT','LO_BYTE_SHIFT']]]

Clazz.newMeth(C$, 'newBytesFor$I',  function (len) {
if (len < 0) {
throw Clazz.new_(Clazz.load('NegativeArraySizeException'));
}if (len > 1073741823) {
throw Clazz.new_($I$(2,1).c$$S,["UTF16 String size is " + len + ", should be less than " + 1073741823 ]);
}return Clazz.array(Byte.TYPE, [len << 1]);
}, 1);

Clazz.newMeth(C$, 'putChar$BA$I$I',  function (val, index, c) {
index<<=1;
val[index++]=((c >> C$.HI_BYTE_SHIFT)|0);
val[index]=((c >> C$.LO_BYTE_SHIFT)|0);
}, 1);

Clazz.newMeth(C$, 'getChar$BA$I',  function (val, index) {
index<<=1;
return String.fromCharCode((((val[index++] & 255) << C$.HI_BYTE_SHIFT) | ((val[index] & 255) << C$.LO_BYTE_SHIFT)));
}, 1);

Clazz.newMeth(C$, 'charAt$BA$I',  function (value, index) {
if (index < 0 || index >= value.length >> 1 ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return C$.getChar$BA$I(value, index);
}, 1);

Clazz.newMeth(C$, 'length$BA',  function (value) {
return value.length >> 1;
}, 1);

Clazz.newMeth(C$, 'codePointAt$BA$I$I',  function (value, index, end) {
var c1=C$.getChar$BA$I(value, index);
if (Character.isHighSurrogate$C(c1) && ++index < end ) {
var c2=C$.getChar$BA$I(value, index);
if (Character.isLowSurrogate$C(c2)) {
return Character.toCodePoint$C$C(c1, c2);
}}return c1.$c();
}, 1);

Clazz.newMeth(C$, 'codePointBefore$BA$I',  function (value, index) {
var c2=C$.getChar$BA$I(value, --index);
if (Character.isLowSurrogate$C(c2) && index > 0 ) {
var c1=C$.getChar$BA$I(value, --index);
if (Character.isHighSurrogate$C(c1)) {
return Character.toCodePoint$C$C(c1, c2);
}}return c2.$c();
}, 1);

Clazz.newMeth(C$, 'codePointCount$BA$I$I',  function (value, beginIndex, endIndex) {
var count=endIndex - beginIndex;
for (var i=beginIndex; i < endIndex; ) {
if (Character.isHighSurrogate$C(C$.getChar$BA$I(value, i++)) && i < endIndex  && Character.isLowSurrogate$C(C$.getChar$BA$I(value, i)) ) {
--count;
++i;
}}
return count;
}, 1);

Clazz.newMeth(C$, 'toChars$BA',  function (value) {
var dst=Clazz.array(Character.TYPE, [value.length >> 1]);
C$.getChars$BA$I$I$CA$I(value, 0, dst.length, dst, 0);
return dst;
}, 1);

Clazz.newMeth(C$, 'toBytes$CA$I$I',  function (value, off, len) {
var val=C$.newBytesFor$I(len);
for (var i=0; i < len; i++) {
C$.putChar$BA$I$I(val, i, value[off].$c());
++off;
}
return val;
}, 1);

Clazz.newMeth(C$, 'compress$CA$I$I',  function (val, off, len) {
var ret=Clazz.array(Byte.TYPE, [len]);
if (C$.compress$CA$I$BA$I$I(val, off, ret, 0, len) == len) {
return ret;
}return null;
}, 1);

Clazz.newMeth(C$, 'compress$BA$I$I',  function (val, off, len) {
var ret=Clazz.array(Byte.TYPE, [len]);
if (C$.compress$BA$I$BA$I$I(val, off, ret, 0, len) == len) {
return ret;
}return null;
}, 1);

Clazz.newMeth(C$, 'compress$CA$I$BA$I$I',  function (src, srcOff, dst, dstOff, len) {
for (var i=0; i < len; i++) {
var c=src[srcOff];
if (c.$c() > 255 ) {
len=0;
break;
}dst[dstOff]=(c.$c()|0);
++srcOff;
++dstOff;
}
return len;
}, 1);

Clazz.newMeth(C$, 'compress$BA$I$BA$I$I',  function (src, srcOff, dst, dstOff, len) {
$I$(3).checkBoundsOffCount$I$I$I(srcOff << 1, len << 1, src.length);
for (var i=0; i < len; i++) {
var c=C$.getChar$BA$I(src, srcOff);
if (c.$c() > 255 ) {
len=0;
break;
}dst[dstOff]=(c.$c()|0);
++srcOff;
++dstOff;
}
return len;
}, 1);

Clazz.newMeth(C$, 'toBytes$IA$I$I',  function (val, index, len) {
var end=index + len;
var n=len;
for (var i=index; i < end; i++) {
var cp=val[i];
if (Character.isBmpCodePoint$I(cp)) continue;
 else if (Character.isValidCodePoint$I(cp)) ++n;
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Integer.toString$I(cp)]);
}
var buf=C$.newBytesFor$I(n);
for (var i=index, j=0; i < end; i++, j++) {
var cp=val[i];
if (Character.isBmpCodePoint$I(cp)) {
C$.putChar$BA$I$I(buf, j, cp);
} else {
C$.putChar$BA$I$I(buf, j++, Character.highSurrogate$I(cp).$c());
C$.putChar$BA$I$I(buf, j, Character.lowSurrogate$I(cp).$c());
}}
return buf;
}, 1);

Clazz.newMeth(C$, 'toBytes$C',  function (c) {
var result=Clazz.array(Byte.TYPE, [2]);
C$.putChar$BA$I$I(result, 0, c.$c());
return result;
}, 1);

Clazz.newMeth(C$, 'getChars$BA$I$I$CA$I',  function (value, srcBegin, srcEnd, dst, dstBegin) {
if (srcBegin < srcEnd) {
$I$(3,"checkBoundsOffCount$I$I$I",[srcBegin << 1, (srcEnd - srcBegin) << 1, value.length]);
}for (var i=srcBegin; i < srcEnd; i++) {
dst[dstBegin++]=C$.getChar$BA$I(value, i);
}
}, 1);

Clazz.newMeth(C$, 'getBytes$BA$I$I$BA$I',  function (value, srcBegin, srcEnd, dst, dstBegin) {
srcBegin<<=1;
srcEnd<<=1;
for (var i=srcBegin + (1 >> C$.LO_BYTE_SHIFT); i < srcEnd; i+=2) {
dst[dstBegin++]=value[i];
}
}, 1);

Clazz.newMeth(C$, 'equals$BA$BA',  function (value, other) {
if (value.length == other.length) {
var len=value.length >> 1;
for (var i=0; i < len; i++) {
if (C$.getChar$BA$I(value, i) != C$.getChar$BA$I(other, i)) {
return false;
}}
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'compareTo$BA$BA',  function (value, other) {
var len1=C$.length$BA(value);
var len2=C$.length$BA(other);
var lim=Math.min(len1, len2);
for (var k=0; k < lim; k++) {
var c1=C$.getChar$BA$I(value, k);
var c2=C$.getChar$BA$I(other, k);
if (c1 != c2) {
return c1.$c() - c2.$c();
}}
return len1 - len2;
}, 1);

Clazz.newMeth(C$, 'compareToLatin1$BA$BA',  function (value, other) {
return -$I$(4).compareToUTF16$BA$BA(other, value);
}, 1);

Clazz.newMeth(C$, 'compareToCI$BA$BA',  function (value, other) {
var len1=C$.length$BA(value);
var len2=C$.length$BA(other);
var lim=Math.min(len1, len2);
for (var k=0; k < lim; k++) {
var c1=C$.getChar$BA$I(value, k);
var c2=C$.getChar$BA$I(other, k);
if (c1 != c2) {
c1=Character.toUpperCase$C(c1);
c2=Character.toUpperCase$C(c2);
if (c1 != c2) {
c1=Character.toLowerCase$C(c1);
c2=Character.toLowerCase$C(c2);
if (c1 != c2) {
return c1.$c() - c2.$c();
}}}}
return len1 - len2;
}, 1);

Clazz.newMeth(C$, 'compareToCI_Latin1$BA$BA',  function (value, other) {
return -$I$(4).compareToCI_UTF16$BA$BA(other, value);
}, 1);

Clazz.newMeth(C$, 'hashCode$BA',  function (value) {
var h=0;
var length=value.length >> 1;
for (var i=0; i < length; i++) {
h=31 * h + (C$.getChar$BA$I(value, i)).$c();
}
return h;
}, 1);

Clazz.newMeth(C$, 'indexOf$BA$I$I',  function (value, ch, fromIndex) {
var max=value.length >> 1;
if (fromIndex < 0) {
fromIndex=0;
} else if (fromIndex >= max) {
return -1;
}if (ch < 65536) {
return C$.indexOfChar$BA$I$I$I(value, ch, fromIndex, max);
} else {
return C$.indexOfSupplementary$BA$I$I$I(value, ch, fromIndex, max);
}}, 1);

Clazz.newMeth(C$, 'indexOf$BA$BA',  function (value, str) {
if (str.length == 0) {
return 0;
}if (value.length == 0) {
return -1;
}return C$.indexOf$BA$I$BA$I$I(value, C$.length$BA(value), str, C$.length$BA(str), 0);
}, 1);

Clazz.newMeth(C$, 'indexOf$BA$I$BA$I$I',  function (value, valueCount, str, strCount, fromIndex) {
var first=C$.getChar$BA$I(str, 0);
var max=(valueCount - strCount);
for (var i=fromIndex; i <= max; i++) {
if (C$.getChar$BA$I(value, i) != first) {
while (++i <= max && C$.getChar$BA$I(value, i) != first );
}if (i <= max) {
var j=i + 1;
var end=j + strCount - 1;
for (var k=1; j < end && C$.getChar$BA$I(value, j) == C$.getChar$BA$I(str, k) ; j++, k++) ;
if (j == end) {
return i;
}}}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOfLatin1$BA$BA',  function (value, str) {
if (str.length == 0) {
return 0;
}if (value.length == 0) {
return -1;
}return C$.indexOfLatin1$BA$I$BA$I$I(value, C$.length$BA(value), str, str.length, 0);
}, 1);

Clazz.newMeth(C$, 'indexOfLatin1$BA$I$BA$I$I',  function (src, srcCount, tgt, tgtCount, fromIndex) {
var first=String.fromCharCode((tgt[0] & 255));
var max=(srcCount - tgtCount);
for (var i=fromIndex; i <= max; i++) {
if (C$.getChar$BA$I(src, i) != first) {
while (++i <= max && C$.getChar$BA$I(src, i) != first );
}if (i <= max) {
var j=i + 1;
var end=j + tgtCount - 1;
for (var k=1; j < end && (C$.getChar$BA$I(src, j)).$c() == (tgt[k] & 255)  ; j++, k++) ;
if (j == end) {
return i;
}}}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOfChar$BA$I$I$I',  function (value, ch, fromIndex, max) {
for (var i=fromIndex; i < max; i++) {
if ((C$.getChar$BA$I(value, i)).$c() == ch ) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOfSupplementary$BA$I$I$I',  function (value, ch, fromIndex, max) {
if (Character.isValidCodePoint$I(ch)) {
var hi=Character.highSurrogate$I(ch);
var lo=Character.lowSurrogate$I(ch);
for (var i=fromIndex; i < max - 1; i++) {
if (C$.getChar$BA$I(value, i) == hi && C$.getChar$BA$I(value, i + 1) == lo ) {
return i;
}}
}return -1;
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$BA$I$BA$I$I',  function (src, srcCount, tgt, tgtCount, fromIndex) {
var min=tgtCount - 1;
var i=min + fromIndex;
var strLastIndex=tgtCount - 1;
var strLastChar=C$.getChar$BA$I(tgt, strLastIndex);
 startSearchForLastChar : while (true){
while (i >= min && C$.getChar$BA$I(src, i) != strLastChar ){
--i;
}
if (i < min) {
return -1;
}var j=i - 1;
var start=j - strLastIndex;
var k=strLastIndex - 1;
while (j > start){
if (C$.getChar$BA$I(src, j--) != C$.getChar$BA$I(tgt, k--)) {
--i;
continue startSearchForLastChar;
}}
return start + 1;
}
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$BA$I$I',  function (value, ch, fromIndex) {
if (ch < 65536) {
var i=Math.min(fromIndex, (value.length >> 1) - 1);
for (; i >= 0; i--) {
if ((C$.getChar$BA$I(value, i)).$c() == ch ) {
return i;
}}
return -1;
} else {
return C$.lastIndexOfSupplementary$BA$I$I(value, ch, fromIndex);
}}, 1);

Clazz.newMeth(C$, 'lastIndexOfSupplementary$BA$I$I',  function (value, ch, fromIndex) {
if (Character.isValidCodePoint$I(ch)) {
var hi=Character.highSurrogate$I(ch);
var lo=Character.lowSurrogate$I(ch);
var i=Math.min(fromIndex, (value.length >> 1) - 2);
for (; i >= 0; i--) {
if (C$.getChar$BA$I(value, i) == hi && C$.getChar$BA$I(value, i + 1) == lo ) {
return i;
}}
}return -1;
}, 1);

Clazz.newMeth(C$, 'replace$BA$C$C',  function (value, oldChar, newChar) {
var len=value.length >> 1;
var i=-1;
while (++i < len){
if (C$.getChar$BA$I(value, i) == oldChar) {
break;
}}
if (i < len) {
var buf=Clazz.array(Byte.TYPE, [value.length]);
for (var j=0; j < i; j++) {
C$.putChar$BA$I$I(buf, j, C$.getChar$BA$I(value, j).$c());
}
while (i < len){
var c=C$.getChar$BA$I(value, i);
C$.putChar$BA$I$I(buf, i, c == oldChar ? newChar : c.$c());
++i;
}
if ($I$(3).COMPACT_STRINGS && !$I$(4,"canEncode$I",[oldChar.$c()]) && $I$(4,"canEncode$I",[newChar.$c()])  ) {
var val=C$.compress$BA$I$I(buf, 0, len);
if (val != null ) {
return  String.instantialize(val, 0);
}}return  String.instantialize(buf, 1);
}return null;
}, 1);

Clazz.newMeth(C$, 'regionMatchesCI$BA$I$BA$I$I',  function (value, toffset, other, ooffset, len) {
var last=toffset + len;
while (toffset < last){
var c1=C$.getChar$BA$I(value, toffset++);
var c2=C$.getChar$BA$I(other, ooffset++);
if (c1 == c2) {
continue;
}var u1=Character.toUpperCase$C(c1);
var u2=Character.toUpperCase$C(c2);
if (u1 == u2) {
continue;
}if (Character.toLowerCase$C(u1) == Character.toLowerCase$C(u2)) {
continue;
}return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'regionMatchesCI_Latin1$BA$I$BA$I$I',  function (value, toffset, other, ooffset, len) {
return $I$(4).regionMatchesCI_UTF16$BA$I$BA$I$I(other, ooffset, value, toffset, len);
}, 1);

Clazz.newMeth(C$, 'toLowerCase$S$BA$java_util_Locale',  function (str, value, locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var first;
var hasSurr=false;
var len=value.length >> 1;
for (first=0; first < len; first++) {
var cp=C$.getChar$BA$I(value, first).$c();
if (Character.isSurrogate$C(String.fromCharCode(cp))) {
hasSurr=true;
break;
}if (cp != Character.toLowerCase$I(cp)) {
break;
}}
if (first == len) return str;
var result=Clazz.array(Byte.TYPE, [value.length]);
System.arraycopy$O$I$O$I$I(value, 0, result, 0, first << 1);
var lang=locale.getLanguage$();
if (lang === "tr"  || lang === "az"   || lang === "lt"  ) {
return C$.toLowerCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, first, locale, true);
}if (hasSurr) {
return C$.toLowerCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, first, locale, false);
}var bits=0;
for (var i=first; i < len; i++) {
var cp=C$.getChar$BA$I(value, i).$c();
if (cp == 931  || Character.isSurrogate$C(String.fromCharCode(cp)) ) {
return C$.toLowerCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, i, locale, false);
}if (cp == 304 ) {
return C$.toLowerCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, i, locale, true);
}cp=Character.toLowerCase$I(cp);
if (!Character.isBmpCodePoint$I(cp)) {
return C$.toLowerCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, i, locale, false);
}bits|=cp;
C$.putChar$BA$I$I(result, i, cp);
}
if (bits > 255) {
return  String.instantialize(result, 1);
} else {
return C$.newString$BA$I$I(result, 0, len);
}}, 1);

Clazz.newMeth(C$, 'toLowerCaseEx$S$BA$BA$I$java_util_Locale$Z',  function (str, value, result, first, locale, localeDependent) {
var resultOffset=first;
var length=value.length >> 1;
var srcCount;
for (var i=first; i < length; i+=srcCount) {
var srcChar=C$.getChar$BA$I(value, i).$c();
var lowerChar;
var lowerCharArray;
srcCount=1;
if (Character.isSurrogate$C(String.fromCharCode(srcChar))) {
srcChar=C$.codePointAt$BA$I$I(value, i, length);
srcCount=Character.charCount$I(srcChar);
}if (localeDependent || srcChar == 931   || srcChar == 304  ) {
lowerChar=$I$(5).toLowerCaseEx$S$I$java_util_Locale(str, i, locale);
} else {
lowerChar=Character.toLowerCase$I(srcChar);
}if (Character.isBmpCodePoint$I(lowerChar)) {
C$.putChar$BA$I$I(result, resultOffset++, lowerChar);
} else {
if (lowerChar == -1) {
lowerCharArray=$I$(5).toLowerCaseCharArray$S$I$java_util_Locale(str, i, locale);
} else {
lowerCharArray=Character.toChars$I(lowerChar);
}var mapLen=lowerCharArray.length;
if (mapLen > srcCount) {
var result2=C$.newBytesFor$I((result.length >> 1) + mapLen - srcCount);
System.arraycopy$O$I$O$I$I(result, 0, result2, 0, resultOffset << 1);
result=result2;
}for (var x=0; x < mapLen; ++x) {
C$.putChar$BA$I$I(result, resultOffset++, lowerCharArray[x].$c());
}
}}
return C$.newString$BA$I$I(result, 0, resultOffset);
}, 1);

Clazz.newMeth(C$, 'toUpperCase$S$BA$java_util_Locale',  function (str, value, locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var first;
var hasSurr=false;
var len=value.length >> 1;
for (first=0; first < len; first++) {
var cp=C$.getChar$BA$I(value, first).$c();
if (Character.isSurrogate$C(String.fromCharCode(cp))) {
hasSurr=true;
break;
}if (cp != Character.toUpperCaseEx$I(cp)) {
break;
}}
if (first == len) {
return str;
}var result=Clazz.array(Byte.TYPE, [value.length]);
System.arraycopy$O$I$O$I$I(value, 0, result, 0, first << 1);
var lang=locale.getLanguage$();
if (lang === "tr"  || lang === "az"   || lang === "lt"  ) {
return C$.toUpperCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, first, locale, true);
}if (hasSurr) {
return C$.toUpperCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, first, locale, false);
}var bits=0;
for (var i=first; i < len; i++) {
var cp=C$.getChar$BA$I(value, i).$c();
if (Character.isSurrogate$C(String.fromCharCode(cp))) {
return C$.toUpperCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, i, locale, false);
}cp=Character.toUpperCaseEx$I(cp);
if (!Character.isBmpCodePoint$I(cp)) {
return C$.toUpperCaseEx$S$BA$BA$I$java_util_Locale$Z(str, value, result, i, locale, false);
}bits|=cp;
C$.putChar$BA$I$I(result, i, cp);
}
if (bits > 255) {
return  String.instantialize(result, 1);
} else {
return C$.newString$BA$I$I(result, 0, len);
}}, 1);

Clazz.newMeth(C$, 'toUpperCaseEx$S$BA$BA$I$java_util_Locale$Z',  function (str, value, result, first, locale, localeDependent) {
var resultOffset=first;
var length=value.length >> 1;
var srcCount;
for (var i=first; i < length; i+=srcCount) {
var srcChar=C$.getChar$BA$I(value, i).$c();
var upperChar;
var upperCharArray;
srcCount=1;
if (Character.isSurrogate$C(String.fromCharCode(srcChar))) {
srcChar=C$.codePointAt$BA$I$I(value, i, length);
srcCount=Character.charCount$I(srcChar);
}if (localeDependent) {
upperChar=$I$(5).toUpperCaseEx$S$I$java_util_Locale(str, i, locale);
} else {
upperChar=Character.toUpperCaseEx$I(srcChar);
}if (Character.isBmpCodePoint$I(upperChar)) {
C$.putChar$BA$I$I(result, resultOffset++, upperChar);
} else {
if (upperChar == -1) {
if (localeDependent) {
upperCharArray=$I$(5).toUpperCaseCharArray$S$I$java_util_Locale(str, i, locale);
} else {
upperCharArray=Character.toUpperCaseCharArray$I(srcChar);
}} else {
upperCharArray=Character.toChars$I(upperChar);
}var mapLen=upperCharArray.length;
if (mapLen > srcCount) {
var result2=C$.newBytesFor$I((result.length >> 1) + mapLen - srcCount);
System.arraycopy$O$I$O$I$I(result, 0, result2, 0, resultOffset << 1);
result=result2;
}for (var x=0; x < mapLen; ++x) {
C$.putChar$BA$I$I(result, resultOffset++, upperCharArray[x].$c());
}
}}
return C$.newString$BA$I$I(result, 0, resultOffset);
}, 1);

Clazz.newMeth(C$, 'trim$BA',  function (value) {
var length=value.length >> 1;
var len=length;
var st=0;
while (st < len && C$.getChar$BA$I(value, st) <= " " ){
++st;
}
while (st < len && C$.getChar$BA$I(value, len - 1) <= " " ){
--len;
}
return ((st > 0) || (len < length) ) ?  String.instantialize($I$(6).copyOfRange$BA$I$I(value, st << 1, len << 1), 1) : null;
}, 1);

Clazz.newMeth(C$, 'putChars$BA$I$CA$I$I',  function (val, index, str, off, end) {
while (off < end){
C$.putChar$BA$I$I(val, index++, str[off++].$c());
}
}, 1);

Clazz.newMeth(C$, 'newString$BA$I$I',  function (val, index, len) {
if ($I$(3).COMPACT_STRINGS) {
var buf=C$.compress$BA$I$I(val, index, len);
if (buf != null ) {
return  String.instantialize(buf, 0);
}}var last=index + len;
return  String.instantialize($I$(6).copyOfRange$BA$I$I(val, index << 1, last << 1), 1);
}, 1);

Clazz.newMeth(C$, 'fillNull$BA$I$I',  function (val, index, end) {
$I$(6).fill$BA$I$I$B(val, index << 1, end << 1, 0);
}, 1);

Clazz.newMeth(C$, 'putCharSB$BA$I$I',  function (val, index, c) {
$I$(3).checkIndex$I$I(index, val.length >> 1);
C$.putChar$BA$I$I(val, index, c);
}, 1);

Clazz.newMeth(C$, 'putCharsSB$BA$I$CA$I$I',  function (val, index, ca, off, end) {
$I$(3).checkOffset$I$I(index + end - off, val.length >> 1);
C$.putChars$BA$I$CA$I$I(val, index, ca, off, end);
}, 1);

Clazz.newMeth(C$, 'putCharsSB$BA$I$CharSequence$I$I',  function (val, index, s, off, end) {
$I$(3).checkOffset$I$I(index + end - off, val.length >> 1);
for (var i=off; i < end; i++) {
C$.putChar$BA$I$I(val, index++, s.charAt$I(i).$c());
}
}, 1);

Clazz.newMeth(C$, 'codePointAtSB$BA$I$I',  function (val, index, end) {
$I$(3).checkOffset$I$I(end, val.length >> 1);
return C$.codePointAt$BA$I$I(val, index, end);
}, 1);

Clazz.newMeth(C$, 'codePointBeforeSB$BA$I',  function (val, index) {
$I$(3).checkOffset$I$I(index, val.length >> 1);
return C$.codePointBefore$BA$I(val, index);
}, 1);

Clazz.newMeth(C$, 'codePointCountSB$BA$I$I',  function (val, beginIndex, endIndex) {
$I$(3).checkOffset$I$I(endIndex, val.length >> 1);
return C$.codePointCount$BA$I$I(val, beginIndex, endIndex);
}, 1);

Clazz.newMeth(C$, 'isBigEndian$',  function () {
alert('native method must be replaced! isBigEndian');
}
, 2);

C$.$static$=function(){C$.$static$=0;
{
if (C$.isBigEndian$()) {
C$.HI_BYTE_SHIFT=8;
C$.LO_BYTE_SHIFT=0;
} else {
C$.HI_BYTE_SHIFT=0;
C$.LO_BYTE_SHIFT=8;
}};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StringUTF16, "CharsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','fence','cs'],'O',['array','byte[]']]]

Clazz.newMeth(C$, 'c$$BA$I',  function (array, acs) {
C$.c$$BA$I$I$I.apply(this, [array, 0, array.length >> 1, acs]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I',  function (array, origin, fence, acs) {
;C$.$init$.apply(this);
this.array=array;
this.index=origin;
this.fence=fence;
this.cs=acs | 16 | 64 | 16384 ;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var lo=this.index;
var mid=(lo + this.fence) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$BA$I$I$I,[this.array, lo, this.index=mid, this.cs]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (action) {
var a;
var i;
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (((a=this.array).length >> 1) >= (hi=this.fence) && (i=this.index) >= 0  && i < (this.index=hi) ) {
do {
action.accept$I($I$(1).charAt$BA$I(a, i).$c());
} while (++i < hi);
}});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$O'],  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
if (i >= 0 && i < this.fence ) {
action.accept$I($I$(1).charAt$BA$I(this.array, i).$c());
++this.index;
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (this.fence - this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return this.cs;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StringUTF16, "CodePointsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','fence','cs'],'O',['array','byte[]']]]

Clazz.newMeth(C$, 'c$$BA$I',  function (array, acs) {
C$.c$$BA$I$I$I.apply(this, [array, 0, array.length >> 1, acs]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I',  function (array, origin, fence, acs) {
;C$.$init$.apply(this);
this.array=array;
this.index=origin;
this.fence=fence;
this.cs=acs | 16;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var lo=this.index;
var mid=(lo + this.fence) >>> 1;
if (lo >= mid) return null;
var midOneLess;
if (Character.isLowSurrogate$C($I$(1).charAt$BA$I(this.array, mid)) && Character.isHighSurrogate$C($I$(1,"charAt$BA$I",[this.array, midOneLess=(mid - 1)])) ) {
if (lo >= midOneLess) return null;
return Clazz.new_(C$.c$$BA$I$I$I,[this.array, lo, this.index=midOneLess, this.cs]);
}return Clazz.new_(C$.c$$BA$I$I$I,[this.array, lo, this.index=mid, this.cs]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (action) {
var a;
var i;
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (((a=this.array).length >> 1) >= (hi=this.fence) && (i=this.index) >= 0  && i < (this.index=hi) ) {
do {
i=C$.advance$BA$I$I$java_util_function_IntConsumer(a, i, hi, action);
} while (i < hi);
}});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$O'],  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.index >= 0 && this.index < this.fence ) {
this.index=C$.advance$BA$I$I$java_util_function_IntConsumer(this.array, this.index, this.fence, action);
return true;
}return false;
});

Clazz.newMeth(C$, 'advance$BA$I$I$java_util_function_IntConsumer',  function (a, i, hi, action) {
var c1=$I$(1).charAt$BA$I(a, i++);
var cp=c1.$c();
if (Character.isHighSurrogate$C(c1) && i < hi ) {
var c2=$I$(1).charAt$BA$I(a, i);
if (Character.isLowSurrogate$C(c2)) {
++i;
cp=Character.toCodePoint$C$C(c1, c2);
}}action.accept$I(cp);
return i;
}, 1);

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (this.fence - this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return this.cs;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

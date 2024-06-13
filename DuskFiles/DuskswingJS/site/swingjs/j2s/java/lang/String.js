(function(){var P$=java.lang,p$1={},p$2={},I$=[[0,'java.io.ObjectStreamField',['String','.CaseInsensitiveComparator'],'java.util.Arrays','StringCoding','java.util.Objects','java.util.regex.Pattern','java.util.regex.Matcher','java.util.ArrayList','java.util.StringJoiner','ConditionalSpecialCasing','java.util.Locale','java.util.Formatter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "String", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'Comparable', 'CharSequence']);
C$.$classes$=[['CaseInsensitiveComparator',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash'],'O',['value','char[]']]
,['O',['serialPersistentFields','java.io.ObjectStreamField[]','CASE_INSENSITIVE_ORDER','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.value="".value;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (original) {
;C$.$init$.apply(this);
this.value=original.value;
this.hash=original.hash;
}, 1);

Clazz.newMeth(C$, 'c$$CA',  function (value) {
;C$.$init$.apply(this);
this.value=$I$(3).copyOf$CA$I(value, value.length);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I',  function (value, offset, count) {
;C$.$init$.apply(this);
if (offset < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[offset]);
}if (count <= 0) {
if (count < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[count]);
}if (offset <= value.length) {
this.value="".value;
return;
}}if (offset > value.length - count) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[offset + count]);
}this.value=$I$(3).copyOfRange$CA$I$I(value, offset, offset + count);
}, 1);

Clazz.newMeth(C$, 'c$$IA$I$I',  function (codePoints, offset, count) {
;C$.$init$.apply(this);
if (offset < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[offset]);
}if (count <= 0) {
if (count < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[count]);
}if (offset <= codePoints.length) {
this.value="".value;
return;
}}if (offset > codePoints.length - count) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[offset + count]);
}var end=offset + count;
var n=count;
for (var i=offset; i < end; i++) {
var c=codePoints[i];
if (Character.isBmpCodePoint$I(c)) continue;
 else if (Character.isValidCodePoint$I(c)) ++n;
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Integer.toString$I(c)]);
}
var v=Clazz.array(Character.TYPE, [n]);
for (var i=offset, j=0; i < end; i++, j++) {
var c=codePoints[i];
if (Character.isBmpCodePoint$I(c)) v[j]=String.fromCharCode(c);
 else Character.toSurrogates$I$CA$I(c, v, j++);
}
this.value=v;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I',  function (ascii, hibyte, offset, count) {
;C$.$init$.apply(this);
C$.checkBounds$BA$I$I(ascii, offset, count);
var value=Clazz.array(Character.TYPE, [count]);
if (hibyte == 0) {
for (var i=count; i-- > 0; ) {
value[i]=String.fromCharCode((ascii[i + offset] & 255));
}
} else {
hibyte<<=8;
for (var i=count; i-- > 0; ) {
value[i]=String.fromCharCode((hibyte | (ascii[i + offset] & 255)));
}
}this.value=value;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I',  function (ascii, hibyte) {
C$.c$$BA$I$I$I.apply(this, [ascii, hibyte, 0, ascii.length]);
}, 1);

Clazz.newMeth(C$, 'checkBounds$BA$I$I',  function (bytes, offset, length) {
if (length < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[length]);
if (offset < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[offset]);
if (offset > bytes.length - length) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[offset + length]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$S',  function (bytes, offset, length, charsetName) {
;C$.$init$.apply(this);
if (charsetName == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["charsetName"]);
C$.checkBounds$BA$I$I(bytes, offset, length);
this.value=$I$(4).decode$S$BA$I$I(charsetName, bytes, offset, length);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$java_nio_charset_Charset',  function (bytes, offset, length, charset) {
;C$.$init$.apply(this);
if (charset == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["charset"]);
C$.checkBounds$BA$I$I(bytes, offset, length);
this.value=$I$(4).decode$java_nio_charset_Charset$BA$I$I(charset, bytes, offset, length);
}, 1);

Clazz.newMeth(C$, 'c$$BA$S',  function (bytes, charsetName) {
C$.c$$BA$I$I$S.apply(this, [bytes, 0, bytes.length, charsetName]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$java_nio_charset_Charset',  function (bytes, charset) {
C$.c$$BA$I$I$java_nio_charset_Charset.apply(this, [bytes, 0, bytes.length, charset]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I',  function (bytes, offset, length) {
;C$.$init$.apply(this);
C$.checkBounds$BA$I$I(bytes, offset, length);
this.value=$I$(4).decode$BA$I$I(bytes, offset, length);
}, 1);

Clazz.newMeth(C$, 'c$$BA',  function (bytes) {
C$.c$$BA$I$I.apply(this, [bytes, 0, bytes.length]);
}, 1);

Clazz.newMeth(C$, 'c$$StringBuffer',  function (buffer) {
;C$.$init$.apply(this);
{
this.value=$I$(3,"copyOf$CA$I",[buffer.getValue$(), buffer.length$()]);
}}, 1);

Clazz.newMeth(C$, 'c$$StringBuilder',  function (builder) {
;C$.$init$.apply(this);
this.value=$I$(3,"copyOf$CA$I",[builder.getValue$(), builder.length$()]);
}, 1);

Clazz.newMeth(C$, 'c$$CA$Z',  function (value, share) {
;C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'length$',  function () {
return this.value.length;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.value.length == 0;
});

Clazz.newMeth(C$, 'charAt$I',  function (index) {
if ((index < 0) || (index >= this.value.length) ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return this.value[index];
});

Clazz.newMeth(C$, 'codePointAt$I',  function (index) {
if ((index < 0) || (index >= this.value.length) ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return Character.codePointAtImpl$CA$I$I(this.value, index, this.value.length);
});

Clazz.newMeth(C$, 'codePointBefore$I',  function (index) {
var i=index - 1;
if ((i < 0) || (i >= this.value.length) ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return Character.codePointBeforeImpl$CA$I$I(this.value, index, 0);
});

Clazz.newMeth(C$, 'codePointCount$I$I',  function (beginIndex, endIndex) {
if (beginIndex < 0 || endIndex > this.value.length  || beginIndex > endIndex ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}return Character.codePointCountImpl$CA$I$I(this.value, beginIndex, endIndex - beginIndex);
});

Clazz.newMeth(C$, 'offsetByCodePoints$I$I',  function (index, codePointOffset) {
if (index < 0 || index > this.value.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}return Character.offsetByCodePointsImpl$CA$I$I$I$I(this.value, 0, this.value.length, index, codePointOffset);
});

Clazz.newMeth(C$, 'getChars$CA$I',  function (dst, dstBegin) {
System.arraycopy$O$I$O$I$I(this.value, 0, dst, dstBegin, this.value.length);
});

Clazz.newMeth(C$, 'getChars$I$I$CA$I',  function (srcBegin, srcEnd, dst, dstBegin) {
if (srcBegin < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcBegin]);
}if (srcEnd > this.value.length) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcEnd]);
}if (srcBegin > srcEnd) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcEnd - srcBegin]);
}System.arraycopy$O$I$O$I$I(this.value, srcBegin, dst, dstBegin, srcEnd - srcBegin);
});

Clazz.newMeth(C$, 'getBytes$I$I$BA$I',  function (srcBegin, srcEnd, dst, dstBegin) {
if (srcBegin < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcBegin]);
}if (srcEnd > this.value.length) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcEnd]);
}if (srcBegin > srcEnd) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[srcEnd - srcBegin]);
}$I$(5).requireNonNull$O(dst);
var j=dstBegin;
var n=srcEnd;
var i=srcBegin;
var val=this.value;
while (i < n){
dst[j++]=(val[i++].$c()|0);
}
});

Clazz.newMeth(C$, 'getBytes$S',  function (charsetName) {
if (charsetName == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return $I$(4).encode$S$CA$I$I(charsetName, this.value, 0, this.value.length);
});

Clazz.newMeth(C$, 'getBytes$java_nio_charset_Charset',  function (charset) {
if (charset == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return $I$(4).encode$java_nio_charset_Charset$CA$I$I(charset, this.value, 0, this.value.length);
});

Clazz.newMeth(C$, 'getBytes$',  function () {
return $I$(4).encode$CA$I$I(this.value, 0, this.value.length);
});

Clazz.newMeth(C$, 'equals$O',  function (anObject) {
if (this === anObject ) {
return true;
}if (Clazz.instanceOf(anObject, "java.lang.String")) {
var anotherString=anObject;
var n=this.value.length;
if (n == anotherString.value.length) {
var v1=this.value;
var v2=anotherString.value;
var i=0;
while (n-- != 0){
if (v1[i] != v2[i]) return false;
++i;
}
return true;
}}return false;
});

Clazz.newMeth(C$, 'contentEquals$StringBuffer',  function (sb) {
return this.contentEquals$CharSequence(sb);
});

Clazz.newMeth(C$, 'nonSyncContentEquals$AbstractStringBuilder',  function (sb) {
var v1=this.value;
var v2=sb.getValue$();
var n=v1.length;
if (n != sb.length$()) {
return false;
}for (var i=0; i < n; i++) {
if (v1[i] != v2[i]) {
return false;
}}
return true;
}, p$2);

Clazz.newMeth(C$, 'contentEquals$CharSequence',  function (cs) {
if (Clazz.instanceOf(cs, "java.lang.AbstractStringBuilder")) {
if (Clazz.instanceOf(cs, "java.lang.StringBuffer")) {
{
return p$2.nonSyncContentEquals$AbstractStringBuilder.apply(this, [cs]);
}} else {
return p$2.nonSyncContentEquals$AbstractStringBuilder.apply(this, [cs]);
}}if (Clazz.instanceOf(cs, "java.lang.String")) {
return this.equals$O(cs);
}var v1=this.value;
var n=v1.length;
if (n != cs.length$()) {
return false;
}for (var i=0; i < n; i++) {
if (v1[i] != cs.charAt$I(i)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'equalsIgnoreCase$S',  function (anotherString) {
return (this == anotherString) ? true : (anotherString != null ) && (anotherString.value.length == this.value.length) && this.regionMatches$Z$I$S$I$I(true, 0, anotherString, 0, this.value.length)  ;
});

Clazz.newMeth(C$, ['compareTo$S','compareTo$O'],  function (anotherString) {
var len1=this.value.length;
var len2=anotherString.value.length;
var lim=Math.min(len1, len2);
var v1=this.value;
var v2=anotherString.value;
var k=0;
while (k < lim){
var c1=v1[k];
var c2=v2[k];
if (c1 != c2) {
return c1.$c() - c2.$c();
}++k;
}
return len1 - len2;
});

Clazz.newMeth(C$, 'compareToIgnoreCase$S',  function (str) {
return String.CASE_INSENSITIVE_ORDER.compare$O$O(this, str);
});

Clazz.newMeth(C$, 'regionMatches$I$S$I$I',  function (toffset, other, ooffset, len) {
var ta=this.value;
var to=toffset;
var pa=other.value;
var po=ooffset;
if ((ooffset < 0) || (toffset < 0) || (Long.$gt(toffset,Long.$sub(this.value.length,len) )) || (Long.$gt(ooffset,Long.$sub(other.value.length,len) ))  ) {
return false;
}while (len-- > 0){
if (ta[to++] != pa[po++]) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'regionMatches$Z$I$S$I$I',  function (ignoreCase, toffset, other, ooffset, len) {
var ta=this.value;
var to=toffset;
var pa=other.value;
var po=ooffset;
if ((ooffset < 0) || (toffset < 0) || (Long.$gt(toffset,Long.$sub(this.value.length,len) )) || (Long.$gt(ooffset,Long.$sub(other.value.length,len) ))  ) {
return false;
}while (len-- > 0){
var c1=ta[to++];
var c2=pa[po++];
if (c1 == c2) {
continue;
}if (ignoreCase) {
var u1=Character.toUpperCase$C(c1);
var u2=Character.toUpperCase$C(c2);
if (u1 == u2) {
continue;
}if (Character.toLowerCase$C(u1) == Character.toLowerCase$C(u2)) {
continue;
}}return false;
}
return true;
});

Clazz.newMeth(C$, 'startsWith$S$I',  function (prefix, toffset) {
var ta=this.value;
var to=toffset;
var pa=prefix.value;
var po=0;
var pc=prefix.value.length;
if ((toffset < 0) || (toffset > this.value.length - pc) ) {
return false;
}while (--pc >= 0){
if (ta[to++] != pa[po++]) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'startsWith$S',  function (prefix) {
return this.startsWith$S$I(prefix, 0);
});

Clazz.newMeth(C$, 'endsWith$S',  function (suffix) {
return this.startsWith$S$I(suffix, this.value.length - suffix.value.length);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=this.hash;
if (h == 0 && this.value.length > 0 ) {
var val=this.value;
for (var i=0; i < this.value.length; i++) {
h=31 * h + (val[i]).$c();
}
this.hash=h;
}return h;
});

Clazz.newMeth(C$, 'indexOf$I',  function (ch) {
return this.indexOf$I$I(ch, 0);
});

Clazz.newMeth(C$, 'indexOf$I$I',  function (ch, fromIndex) {
var max=this.value.length;
if (fromIndex < 0) {
fromIndex=0;
} else if (fromIndex >= max) {
return -1;
}if (ch < 65536) {
var value=this.value;
for (var i=fromIndex; i < max; i++) {
if ((value[i]).$c() == ch ) {
return i;
}}
return -1;
} else {
return p$2.indexOfSupplementary$I$I.apply(this, [ch, fromIndex]);
}});

Clazz.newMeth(C$, 'indexOfSupplementary$I$I',  function (ch, fromIndex) {
if (Character.isValidCodePoint$I(ch)) {
var value=this.value;
var hi=Character.highSurrogate$I(ch);
var lo=Character.lowSurrogate$I(ch);
var max=value.length - 1;
for (var i=fromIndex; i < max; i++) {
if (value[i] == hi && value[i + 1] == lo ) {
return i;
}}
}return -1;
}, p$2);

Clazz.newMeth(C$, 'lastIndexOf$I',  function (ch) {
return this.lastIndexOf$I$I(ch, this.value.length - 1);
});

Clazz.newMeth(C$, 'lastIndexOf$I$I',  function (ch, fromIndex) {
if (ch < 65536) {
var value=this.value;
var i=Math.min(fromIndex, value.length - 1);
for (; i >= 0; i--) {
if ((value[i]).$c() == ch ) {
return i;
}}
return -1;
} else {
return p$2.lastIndexOfSupplementary$I$I.apply(this, [ch, fromIndex]);
}});

Clazz.newMeth(C$, 'lastIndexOfSupplementary$I$I',  function (ch, fromIndex) {
if (Character.isValidCodePoint$I(ch)) {
var value=this.value;
var hi=Character.highSurrogate$I(ch);
var lo=Character.lowSurrogate$I(ch);
var i=Math.min(fromIndex, value.length - 2);
for (; i >= 0; i--) {
if (value[i] == hi && value[i + 1] == lo ) {
return i;
}}
}return -1;
}, p$2);

Clazz.newMeth(C$, 'indexOf$S',  function (str) {
return this.indexOf$S$I(str, 0);
});

Clazz.newMeth(C$, 'indexOf$S$I',  function (str, fromIndex) {
return C$.indexOf$CA$I$I$CA$I$I$I(this.value, 0, this.value.length, str.value, 0, str.value.length, fromIndex);
});

Clazz.newMeth(C$, 'indexOf$CA$I$I$S$I',  function (source, sourceOffset, sourceCount, target, fromIndex) {
return C$.indexOf$CA$I$I$CA$I$I$I(source, sourceOffset, sourceCount, target.value, 0, target.value.length, fromIndex);
}, 1);

Clazz.newMeth(C$, 'indexOf$CA$I$I$CA$I$I$I',  function (source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
if (fromIndex >= sourceCount) {
return (targetCount == 0 ? sourceCount : -1);
}if (fromIndex < 0) {
fromIndex=0;
}if (targetCount == 0) {
return fromIndex;
}var first=target[targetOffset];
var max=sourceOffset + (sourceCount - targetCount);
for (var i=sourceOffset + fromIndex; i <= max; i++) {
if (source[i] != first) {
while (++i <= max && source[i] != first );
}if (i <= max) {
var j=i + 1;
var end=j + targetCount - 1;
for (var k=targetOffset + 1; j < end && source[j] == target[k] ; j++, k++) ;
if (j == end) {
return i - sourceOffset;
}}}
return -1;
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$S',  function (str) {
return this.lastIndexOf$S$I(str, this.value.length);
});

Clazz.newMeth(C$, 'lastIndexOf$S$I',  function (str, fromIndex) {
return C$.lastIndexOf$CA$I$I$CA$I$I$I(this.value, 0, this.value.length, str.value, 0, str.value.length, fromIndex);
});

Clazz.newMeth(C$, 'lastIndexOf$CA$I$I$S$I',  function (source, sourceOffset, sourceCount, target, fromIndex) {
return C$.lastIndexOf$CA$I$I$CA$I$I$I(source, sourceOffset, sourceCount, target.value, 0, target.value.length, fromIndex);
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$CA$I$I$CA$I$I$I',  function (source, sourceOffset, sourceCount, target, targetOffset, targetCount, fromIndex) {
var rightIndex=sourceCount - targetCount;
if (fromIndex < 0) {
return -1;
}if (fromIndex > rightIndex) {
fromIndex=rightIndex;
}if (targetCount == 0) {
return fromIndex;
}var strLastIndex=targetOffset + targetCount - 1;
var strLastChar=target[strLastIndex];
var min=sourceOffset + targetCount - 1;
var i=min + fromIndex;
 startSearchForLastChar : while (true){
while (i >= min && source[i] != strLastChar ){
--i;
}
if (i < min) {
return -1;
}var j=i - 1;
var start=j - (targetCount - 1);
var k=strLastIndex - 1;
while (j > start){
if (source[j--] != target[k--]) {
--i;
continue startSearchForLastChar;
}}
return start - sourceOffset + 1;
}
}, 1);

Clazz.newMeth(C$, 'substring$I',  function (beginIndex) {
if (beginIndex < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[beginIndex]);
}var subLen=this.value.length - beginIndex;
if (subLen < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[subLen]);
}return (beginIndex == 0) ? this :  String.instantialize(this.value, beginIndex, subLen);
});

Clazz.newMeth(C$, 'substring$I$I',  function (beginIndex, endIndex) {
if (beginIndex < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[beginIndex]);
}if (endIndex > this.value.length) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[endIndex]);
}var subLen=endIndex - beginIndex;
if (subLen < 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[subLen]);
}return ((beginIndex == 0) && (endIndex == this.value.length) ) ? this :  String.instantialize(this.value, beginIndex, subLen);
});

Clazz.newMeth(C$, 'subSequence$I$I',  function (beginIndex, endIndex) {
return this.substring$I$I(beginIndex, endIndex);
});

Clazz.newMeth(C$, 'concat$S',  function (str) {
var otherLen=str.length$();
if (otherLen == 0) {
return this;
}var len=this.value.length;
var buf=$I$(3).copyOf$CA$I(this.value, len + otherLen);
str.getChars$CA$I(buf, len);
return  String.instantialize(buf, true);
});

Clazz.newMeth(C$, 'replace$C$C',  function (oldChar, newChar) {
if (oldChar != newChar) {
var len=this.value.length;
var i=-1;
var val=this.value;
while (++i < len){
if (val[i] == oldChar) {
break;
}}
if (i < len) {
var buf=Clazz.array(Character.TYPE, [len]);
for (var j=0; j < i; j++) {
buf[j]=val[j];
}
while (i < len){
var c=val[i];
buf[i]=(c == oldChar) ? newChar : c;
++i;
}
return  String.instantialize(buf, true);
}}return this;
});

Clazz.newMeth(C$, 'matches$S',  function (regex) {
return $I$(6).matches$S$CharSequence(regex, this);
});

Clazz.newMeth(C$, 'contains$CharSequence',  function (s) {
return this.indexOf$S(s.toString()) > -1;
});

Clazz.newMeth(C$, 'replaceFirst$S$S',  function (regex, replacement) {
return $I$(6).compile$S(regex).matcher$CharSequence(this).replaceFirst$S(replacement);
});

Clazz.newMeth(C$, 'replaceAll$S$S',  function (regex, replacement) {
return $I$(6).compile$S(regex).matcher$CharSequence(this).replaceAll$S(replacement);
});

Clazz.newMeth(C$, 'replace$CharSequence$CharSequence',  function (target, replacement) {
return $I$(6,"compile$S$I",[target.toString(), 16]).matcher$CharSequence(this).replaceAll$S($I$(7,"quoteReplacement$S",[replacement.toString()]));
});

Clazz.newMeth(C$, 'split$S$I',  function (regex, limit) {
var ch=String.fromCharCode(0);
if (((regex.value.length == 1 && ".$|()[{^?*+\\".indexOf$I(ch=regex.charAt$I(0)) == -1 ) || (regex.length$() == 2 && regex.charAt$I(0) == "\\"  && ((((ch=regex.charAt$I(1)).$c()) - 48) | (57 - ch.$c())) < 0  && ((ch.$c() - 97) | (122 - ch.$c())) < 0  && ((ch.$c() - 65) | (90 - ch.$c())) < 0 ) ) && (ch < "\ud800" || ch > "\udfff" ) ) {
var off=0;
var next=0;
var limited=limit > 0;
var list=Clazz.new_($I$(8,1));
while ((next=this.indexOf$I$I(ch, off)) != -1){
if (!limited || list.size$() < limit - 1 ) {
list.add$O(this.substring$I$I(off, next));
off=next + 1;
} else {
list.add$O(this.substring$I$I(off, this.value.length));
off=this.value.length;
break;
}}
if (off == 0) return Clazz.array(String, -1, [this]);
if (!limited || list.size$() < limit ) list.add$O(this.substring$I$I(off, this.value.length));
var resultSize=list.size$();
if (limit == 0) {
while (resultSize > 0 && list.get$I(resultSize - 1).length$() == 0 ){
--resultSize;
}
}var result=Clazz.array(String, [resultSize]);
return list.subList$I$I(0, resultSize).toArray$OA(result);
}return $I$(6).compile$S(regex).split$CharSequence$I(this, limit);
});

Clazz.newMeth(C$, 'split$S',  function (regex) {
return this.split$S$I(regex, 0);
});

Clazz.newMeth(C$, 'join$CharSequence$CharSequenceA',  function (delimiter, elements) {
$I$(5).requireNonNull$O(delimiter);
$I$(5).requireNonNull$O(elements);
var joiner=Clazz.new_($I$(9,1).c$$CharSequence,[delimiter]);
for (var cs, $cs = 0, $$cs = elements; $cs<$$cs.length&&((cs=($$cs[$cs])),1);$cs++) {
joiner.add$CharSequence(cs);
}
return joiner.toString();
}, 1);

Clazz.newMeth(C$, 'join$CharSequence$Iterable',  function (delimiter, elements) {
$I$(5).requireNonNull$O(delimiter);
$I$(5).requireNonNull$O(elements);
var joiner=Clazz.new_($I$(9,1).c$$CharSequence,[delimiter]);
for (var cs, $cs = elements.iterator$(); $cs.hasNext$()&&((cs=($cs.next$())),1);) {
joiner.add$CharSequence(cs);
}
return joiner.toString();
}, 1);

Clazz.newMeth(C$, 'toLowerCase$java_util_Locale',  function (locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var firstUpper;
var len=this.value.length;
 scan : {
for (firstUpper=0; firstUpper < len; ) {
var c=this.value[firstUpper];
if ((c >= "\ud800") && (c <= "\udbff") ) {
var supplChar=this.codePointAt$I(firstUpper);
if (supplChar != Character.toLowerCase$I(supplChar)) {
break scan;
}firstUpper+=Character.charCount$I(supplChar);
} else {
if (c != Character.toLowerCase$C(c)) {
break scan;
}++firstUpper;
}}
return this;
}var result=Clazz.array(Character.TYPE, [len]);
var resultOffset=0;
System.arraycopy$O$I$O$I$I(this.value, 0, result, 0, firstUpper);
var lang=locale.getLanguage$();
var localeDependent=(lang === "tr"  || lang === "az"   || lang === "lt"  );
var lowerCharArray;
var lowerChar;
var srcChar;
var srcCount;
for (var i=firstUpper; i < len; i+=srcCount) {
srcChar=this.value[i].$c();
if (String.fromCharCode(srcChar) >= "\ud800" && String.fromCharCode(srcChar) <= "\udbff" ) {
srcChar=this.codePointAt$I(i);
srcCount=Character.charCount$I(srcChar);
} else {
srcCount=1;
}if (localeDependent || srcChar == 931   || srcChar == 304  ) {
lowerChar=$I$(10).toLowerCaseEx$S$I$java_util_Locale(this, i, locale);
} else {
lowerChar=Character.toLowerCase$I(srcChar);
}if ((lowerChar == -1) || (lowerChar >= 65536) ) {
if (lowerChar == -1) {
lowerCharArray=$I$(10).toLowerCaseCharArray$S$I$java_util_Locale(this, i, locale);
} else if (srcCount == 2) {
resultOffset+=Character.toChars$I$CA$I(lowerChar, result, i + resultOffset) - srcCount;
continue;
} else {
lowerCharArray=Character.toChars$I(lowerChar);
}var mapLen=lowerCharArray.length;
if (mapLen > srcCount) {
var result2=Clazz.array(Character.TYPE, [result.length + mapLen - srcCount]);
System.arraycopy$O$I$O$I$I(result, 0, result2, 0, i + resultOffset);
result=result2;
}for (var x=0; x < mapLen; ++x) {
result[i + resultOffset + x ]=lowerCharArray[x];
}
resultOffset+=(mapLen - srcCount);
} else {
result[i + resultOffset]=String.fromCharCode(lowerChar);
}}
return  String.instantialize(result, 0, len + resultOffset);
});

Clazz.newMeth(C$, 'toLowerCase$',  function () {
return this.toLowerCase$java_util_Locale($I$(11).getDefault$());
});

Clazz.newMeth(C$, 'toUpperCase$java_util_Locale',  function (locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var firstLower;
var len=this.value.length;
 scan : {
for (firstLower=0; firstLower < len; ) {
var c=this.value[firstLower].$c();
var srcCount;
if ((c >= 55296 ) && (c <= 56319 ) ) {
c=this.codePointAt$I(firstLower);
srcCount=Character.charCount$I(c);
} else {
srcCount=1;
}var upperCaseChar=Character.toUpperCaseEx$I(c);
if ((upperCaseChar == -1) || (c != upperCaseChar) ) {
break scan;
}firstLower+=srcCount;
}
return this;
}var resultOffset=0;
var result=Clazz.array(Character.TYPE, [len]);
System.arraycopy$O$I$O$I$I(this.value, 0, result, 0, firstLower);
var lang=locale.getLanguage$();
var localeDependent=(lang === "tr"  || lang === "az"   || lang === "lt"  );
var upperCharArray;
var upperChar;
var srcChar;
var srcCount;
for (var i=firstLower; i < len; i+=srcCount) {
srcChar=this.value[i].$c();
if (String.fromCharCode(srcChar) >= "\ud800" && String.fromCharCode(srcChar) <= "\udbff" ) {
srcChar=this.codePointAt$I(i);
srcCount=Character.charCount$I(srcChar);
} else {
srcCount=1;
}if (localeDependent) {
upperChar=$I$(10).toUpperCaseEx$S$I$java_util_Locale(this, i, locale);
} else {
upperChar=Character.toUpperCaseEx$I(srcChar);
}if ((upperChar == -1) || (upperChar >= 65536) ) {
if (upperChar == -1) {
if (localeDependent) {
upperCharArray=$I$(10).toUpperCaseCharArray$S$I$java_util_Locale(this, i, locale);
} else {
upperCharArray=Character.toUpperCaseCharArray$I(srcChar);
}} else if (srcCount == 2) {
resultOffset+=Character.toChars$I$CA$I(upperChar, result, i + resultOffset) - srcCount;
continue;
} else {
upperCharArray=Character.toChars$I(upperChar);
}var mapLen=upperCharArray.length;
if (mapLen > srcCount) {
var result2=Clazz.array(Character.TYPE, [result.length + mapLen - srcCount]);
System.arraycopy$O$I$O$I$I(result, 0, result2, 0, i + resultOffset);
result=result2;
}for (var x=0; x < mapLen; ++x) {
result[i + resultOffset + x ]=upperCharArray[x];
}
resultOffset+=(mapLen - srcCount);
} else {
result[i + resultOffset]=String.fromCharCode(upperChar);
}}
return  String.instantialize(result, 0, len + resultOffset);
});

Clazz.newMeth(C$, 'toUpperCase$',  function () {
return this.toUpperCase$java_util_Locale($I$(11).getDefault$());
});

Clazz.newMeth(C$, 'trim$',  function () {
var len=this.value.length;
var st=0;
var val=this.value;
while ((st < len) && (val[st] <= " ") ){
++st;
}
while ((st < len) && (val[len - 1] <= " ") ){
--len;
}
return ((st > 0) || (len < this.value.length) ) ? this.substring$I$I(st, len) : this;
});

Clazz.newMeth(C$, 'toString',  function () {
return this;
});

Clazz.newMeth(C$, 'toCharArray$',  function () {
var result=Clazz.array(Character.TYPE, [this.value.length]);
System.arraycopy$O$I$O$I$I(this.value, 0, result, 0, this.value.length);
return result;
});

Clazz.newMeth(C$, 'format$S$OA',  function (format, args) {
return Clazz.new_($I$(12,1)).format$S$OA(format, args).toString();
}, 1);

Clazz.newMeth(C$, 'format$java_util_Locale$S$OA',  function (l, format, args) {
return Clazz.new_($I$(12,1).c$$java_util_Locale,[l]).format$S$OA(format, args).toString();
}, 1);

Clazz.newMeth(C$, 'valueOf$O',  function (obj) {
return (obj == null ) ? "null" : obj.toString();
}, 1);

Clazz.newMeth(C$, 'valueOf$CA',  function (data) {
return  String.instantialize(data);
}, 1);

Clazz.newMeth(C$, 'valueOf$CA$I$I',  function (data, offset, count) {
return  String.instantialize(data, offset, count);
}, 1);

Clazz.newMeth(C$, 'copyValueOf$CA$I$I',  function (data, offset, count) {
return  String.instantialize(data, offset, count);
}, 1);

Clazz.newMeth(C$, 'copyValueOf$CA',  function (data) {
return  String.instantialize(data);
}, 1);

Clazz.newMeth(C$, 'valueOf$Z',  function (b) {
return b ? "true" : "false";
}, 1);

Clazz.newMeth(C$, 'valueOf$C',  function (c) {
var data=Clazz.array(Character.TYPE, -1, [c]);
return  String.instantialize(data, true);
}, 1);

Clazz.newMeth(C$, 'valueOf$I',  function (i) {
return Integer.toString$I(i);
}, 1);

Clazz.newMeth(C$, 'valueOf$J',  function (l) {
return Long.toString$J(l);
}, 1);

Clazz.newMeth(C$, 'valueOf$F',  function (f) {
return Float.toString$F(f);
}, 1);

Clazz.newMeth(C$, 'valueOf$D',  function (d) {
return Double.toString$D(d);
}, 1);

Clazz.newMeth(C$, 'intern$',  function () {
alert('native method must be replaced! intern');
}
);

C$.$static$=function(){C$.$static$=0;
C$.serialPersistentFields=Clazz.array($I$(1), [0]);
C$.CASE_INSENSITIVE_ORDER=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.String, "CaseInsensitiveComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$S$S','compare$O$O'],  function (s1, s2) {
var n1=s1.length$();
var n2=s2.length$();
var min=Math.min(n1, n2);
for (var i=0; i < min; i++) {
var c1=s1.charAt$I(i);
var c2=s2.charAt$I(i);
if (c1 != c2) {
c1=Character.toUpperCase$C(c1);
c2=Character.toUpperCase$C(c2);
if (c1 != c2) {
c1=Character.toLowerCase$C(c1);
c2=Character.toLowerCase$C(c2);
if (c1 != c2) {
return c1.$c() - c2.$c();
}}}}
return n1 - n2;
});

Clazz.newMeth(C$, 'readResolve',  function () {
return String.CASE_INSENSITIVE_ORDER;
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("sun.text.normalizer"),I$=[[0,'sun.text.normalizer.UCharacterProperty','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UTF16");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'charAt$S$I',  function (source, offset16) {
var single=source.charAt$I(offset16);
if (single.$c() < 55296 ) {
return single.$c();
}return C$._charAt$S$I$C(source, offset16, single);
}, 1);

Clazz.newMeth(C$, '_charAt$S$I$C',  function (source, offset16, single) {
if (single.$c() > 57343 ) {
return single.$c();
}if (single.$c() <= 56319 ) {
++offset16;
if (source.length$() != offset16) {
var trail=source.charAt$I(offset16);
if (trail.$c() >= 56320  && trail.$c() <= 57343  ) {
return $I$(1).getRawSupplementary$C$C(single, trail);
}}} else {
--offset16;
if (offset16 >= 0) {
var lead=source.charAt$I(offset16);
if (lead.$c() >= 55296  && lead.$c() <= 56319  ) {
return $I$(1).getRawSupplementary$C$C(lead, single);
}}}return single.$c();
}, 1);

Clazz.newMeth(C$, 'charAt$CA$I$I$I',  function (source, start, limit, offset16) {
offset16+=start;
if (offset16 < start || offset16 >= limit ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[offset16]);
}var single=source[offset16];
if (!C$.isSurrogate$C(single)) {
return single.$c();
}if (single.$c() <= 56319 ) {
++offset16;
if (offset16 >= limit) {
return single.$c();
}var trail=source[offset16];
if (C$.isTrailSurrogate$C(trail)) {
return $I$(1).getRawSupplementary$C$C(single, trail);
}} else {
if (offset16 == start) {
return single.$c();
}--offset16;
var lead=source[offset16];
if (C$.isLeadSurrogate$C(lead)) return $I$(1).getRawSupplementary$C$C(lead, single);
}return single.$c();
}, 1);

Clazz.newMeth(C$, 'getCharCount$I',  function (char32) {
if (char32 < 65536) {
return 1;
}return 2;
}, 1);

Clazz.newMeth(C$, 'isSurrogate$C',  function (char16) {
return 55296 <= char16.$c()  && char16.$c() <= 57343  ;
}, 1);

Clazz.newMeth(C$, 'isTrailSurrogate$C',  function (char16) {
return (56320 <= char16.$c()  && char16.$c() <= 57343  );
}, 1);

Clazz.newMeth(C$, 'isLeadSurrogate$C',  function (char16) {
return 55296 <= char16.$c()  && char16.$c() <= 56319  ;
}, 1);

Clazz.newMeth(C$, 'getLeadSurrogate$I',  function (char32) {
if (char32 >= 65536) {
return String.fromCharCode((55232 + (char32 >> 10)));
}return String.fromCharCode(0);
}, 1);

Clazz.newMeth(C$, 'getTrailSurrogate$I',  function (char32) {
if (char32 >= 65536) {
return String.fromCharCode((56320 + (char32 & 1023)));
}return String.fromCharCode(char32);
}, 1);

Clazz.newMeth(C$, 'valueOf$I',  function (char32) {
if (char32 < 0 || char32 > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal codepoint"]);
}return C$.toString$I(char32);
}, 1);

Clazz.newMeth(C$, 'append$StringBuffer$I',  function (target, char32) {
if (char32 < 0 || char32 > 1114111 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal codepoint: " + Integer.toHexString$I(char32)]);
}if (char32 >= 65536) {
target.append$C(C$.getLeadSurrogate$I(char32));
target.append$C(C$.getTrailSurrogate$I(char32));
} else {
target.append$C(String.fromCharCode(char32));
}return target;
}, 1);

Clazz.newMeth(C$, 'moveCodePointOffset$CA$I$I$I$I',  function (source, start, limit, offset16, shift32) {
var size=source.length;
var count;
var ch;
var result=offset16 + start;
if (start < 0 || limit < start ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[start]);
}if (limit > size) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[limit]);
}if (offset16 < 0 || result > limit ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[offset16]);
}if (shift32 > 0) {
if (shift32 + result > size) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[result]);
}count=shift32;
while (result < limit && count > 0 ){
ch=source[result];
if (C$.isLeadSurrogate$C(ch) && (result + 1 < limit) && C$.isTrailSurrogate$C(source[result + 1])  ) {
++result;
}--count;
++result;
}
} else {
if (result + shift32 < start) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[result]);
}for (count=-shift32; count > 0; count--) {
--result;
if (result < start) {
break;
}ch=source[result];
if (C$.isTrailSurrogate$C(ch) && result > start  && C$.isLeadSurrogate$C(source[result - 1]) ) {
--result;
}}
}if (count != 0) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[shift32]);
}result-=start;
return result;
}, 1);

Clazz.newMeth(C$, 'toString$I',  function (ch) {
if (ch < 65536) {
return String.valueOf$C(String.fromCharCode(ch));
}var result=Clazz.new_($I$(2,1));
result.append$C(C$.getLeadSurrogate$I(ch));
result.append$C(C$.getTrailSurrogate$I(ch));
return result.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

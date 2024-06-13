(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[[0,'sun.util.locale.AsciiUtil','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsciiUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CaseInsensitiveKey',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'caseIgnoreMatch$S$S',  function (s1, s2) {
if (s1 == s2) {
return true;
}var len=s1.length$();
if (len != s2.length$()) {
return false;
}var i=0;
while (i < len){
var c1=s1.charAt$I(i);
var c2=s2.charAt$I(i);
if (c1 != c2 && C$.toLower$C(c1) != C$.toLower$C(c2) ) {
break;
}++i;
}
return (i == len);
}, 1);

Clazz.newMeth(C$, 'caseIgnoreCompare$S$S',  function (s1, s2) {
if (s1 == s2) {
return 0;
}return C$.toLowerString$S(s1).compareTo$S(C$.toLowerString$S(s2));
}, 1);

Clazz.newMeth(C$, 'toUpper$C',  function (c) {
if (c >= "a" && c <= "z" ) {
c = String.fromCharCode(c.$c()- 32);
}return c;
}, 1);

Clazz.newMeth(C$, 'toLower$C',  function (c) {
if (c >= "A" && c <= "Z" ) {
c = String.fromCharCode(c.$c()+ 32);
}return c;
}, 1);

Clazz.newMeth(C$, 'toLowerString$S',  function (s) {
var idx=0;
for (; idx < s.length$(); idx++) {
var c=s.charAt$I(idx);
if (c >= "A" && c <= "Z" ) {
break;
}}
if (idx == s.length$()) {
return s;
}var buf=Clazz.new_([s.substring$I$I(0, idx)],$I$(2,1).c$$S);
for (; idx < s.length$(); idx++) {
buf.append$C(C$.toLower$C(s.charAt$I(idx)));
}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'toUpperString$S',  function (s) {
var idx=0;
for (; idx < s.length$(); idx++) {
var c=s.charAt$I(idx);
if (c >= "a" && c <= "z" ) {
break;
}}
if (idx == s.length$()) {
return s;
}var buf=Clazz.new_([s.substring$I$I(0, idx)],$I$(2,1).c$$S);
for (; idx < s.length$(); idx++) {
buf.append$C(C$.toUpper$C(s.charAt$I(idx)));
}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'toTitleString$S',  function (s) {
if (s.length$() == 0) {
return s;
}var idx=0;
var c=s.charAt$I(idx);
if (!(c >= "a" && c <= "z" )) {
for (idx=1; idx < s.length$(); idx++) {
if (c >= "A" && c <= "Z" ) {
break;
}}
}if (idx == s.length$()) {
return s;
}var buf=Clazz.new_([s.substring$I$I(0, idx)],$I$(2,1).c$$S);
if (idx == 0) {
buf.append$C(C$.toUpper$C(s.charAt$I(idx)));
++idx;
}for (; idx < s.length$(); idx++) {
buf.append$C(C$.toLower$C(s.charAt$I(idx)));
}
return buf.toString();
}, 1);

Clazz.newMeth(C$, 'isAlpha$C',  function (c) {
return (c >= "A" && c <= "Z" ) || (c >= "a" && c <= "z" ) ;
}, 1);

Clazz.newMeth(C$, 'isAlphaString$S',  function (s) {
var b=true;
for (var i=0; i < s.length$(); i++) {
if (!C$.isAlpha$C(s.charAt$I(i))) {
b=false;
break;
}}
return b;
}, 1);

Clazz.newMeth(C$, 'isNumeric$C',  function (c) {
return (c >= "0" && c <= "9" );
}, 1);

Clazz.newMeth(C$, 'isNumericString$S',  function (s) {
var b=true;
for (var i=0; i < s.length$(); i++) {
if (!C$.isNumeric$C(s.charAt$I(i))) {
b=false;
break;
}}
return b;
}, 1);

Clazz.newMeth(C$, 'isAlphaNumeric$C',  function (c) {
return C$.isAlpha$C(c) || C$.isNumeric$C(c) ;
}, 1);

Clazz.newMeth(C$, 'isAlphaNumericString$S',  function (s) {
var b=true;
for (var i=0; i < s.length$(); i++) {
if (!C$.isAlphaNumeric$C(s.charAt$I(i))) {
b=false;
break;
}}
return b;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AsciiUtil, "CaseInsensitiveKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['_hash'],'S',['_key']]]

Clazz.newMeth(C$, 'c$$S',  function (key) {
;C$.$init$.apply(this);
this._key=key;
this._hash=$I$(1).toLowerString$S(key).hashCode$();
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this === o ) {
return true;
}if (Clazz.instanceOf(o, "sun.util.locale.AsciiUtil.CaseInsensitiveKey")) {
return $I$(1,"caseIgnoreMatch$S$S",[this._key, (o)._key]);
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this._hash;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

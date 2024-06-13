(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LocaleUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'caseIgnoreMatch$S$S',  function (s1, s2) {
if (s1 == s2) {
return true;
}var len=s1.length$();
if (len != s2.length$()) {
return false;
}for (var i=0; i < len; i++) {
var c1=s1.charAt$I(i);
var c2=s2.charAt$I(i);
if (c1 != c2 && C$.toLower$C(c1) != C$.toLower$C(c2) ) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'caseIgnoreCompare$S$S',  function (s1, s2) {
if (s1 == s2) {
return 0;
}return C$.toLowerString$S(s1).compareTo$S(C$.toLowerString$S(s2));
}, 1);

Clazz.newMeth(C$, 'toUpper$C',  function (c) {
return C$.isLower$C(c) ? String.fromCharCode((c.$c() - 32)) : c;
}, 1);

Clazz.newMeth(C$, 'toLower$C',  function (c) {
return C$.isUpper$C(c) ? String.fromCharCode((c.$c() + 32)) : c;
}, 1);

Clazz.newMeth(C$, 'toLowerString$S',  function (s) {
var len=s.length$();
var idx=0;
for (; idx < len; idx++) {
if (C$.isUpper$C(s.charAt$I(idx))) {
break;
}}
if (idx == len) {
return s;
}var buf=Clazz.array(Character.TYPE, [len]);
for (var i=0; i < len; i++) {
var c=s.charAt$I(i);
buf[i]=(i < idx) ? c : C$.toLower$C(c);
}
return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, 'toUpperString$S',  function (s) {
var len=s.length$();
var idx=0;
for (; idx < len; idx++) {
if (C$.isLower$C(s.charAt$I(idx))) {
break;
}}
if (idx == len) {
return s;
}var buf=Clazz.array(Character.TYPE, [len]);
for (var i=0; i < len; i++) {
var c=s.charAt$I(i);
buf[i]=(i < idx) ? c : C$.toUpper$C(c);
}
return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, 'toTitleString$S',  function (s) {
var len;
if ((len=s.length$()) == 0) {
return s;
}var idx=0;
if (!C$.isLower$C(s.charAt$I(idx))) {
for (idx=1; idx < len; idx++) {
if (C$.isUpper$C(s.charAt$I(idx))) {
break;
}}
}if (idx == len) {
return s;
}var buf=Clazz.array(Character.TYPE, [len]);
for (var i=0; i < len; i++) {
var c=s.charAt$I(i);
if (i == 0 && idx == 0 ) {
buf[i]=C$.toUpper$C(c);
} else if (i < idx) {
buf[i]=c;
} else {
buf[i]=C$.toLower$C(c);
}}
return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, 'isUpper$C',  function (c) {
return c >= "A" && c <= "Z" ;
}, 1);

Clazz.newMeth(C$, 'isLower$C',  function (c) {
return c >= "a" && c <= "z" ;
}, 1);

Clazz.newMeth(C$, 'isAlpha$C',  function (c) {
return (c >= "A" && c <= "Z" ) || (c >= "a" && c <= "z" ) ;
}, 1);

Clazz.newMeth(C$, 'isAlphaString$S',  function (s) {
var len=s.length$();
for (var i=0; i < len; i++) {
if (!C$.isAlpha$C(s.charAt$I(i))) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isNumeric$C',  function (c) {
return (c >= "0" && c <= "9" );
}, 1);

Clazz.newMeth(C$, 'isNumericString$S',  function (s) {
var len=s.length$();
for (var i=0; i < len; i++) {
if (!C$.isNumeric$C(s.charAt$I(i))) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isAlphaNumeric$C',  function (c) {
return C$.isAlpha$C(c) || C$.isNumeric$C(c) ;
}, 1);

Clazz.newMeth(C$, 'isAlphaNumericString$S',  function (s) {
var len=s.length$();
for (var i=0; i < len; i++) {
if (!C$.isAlphaNumeric$C(s.charAt$I(i))) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isEmpty$S',  function (str) {
return str == null  || str.length$() == 0 ;
}, 1);

Clazz.newMeth(C$, 'isEmpty$java_util_Set',  function (set) {
return set == null  || set.isEmpty$() ;
}, 1);

Clazz.newMeth(C$, 'isEmpty$java_util_Map',  function (map) {
return map == null  || map.isEmpty$() ;
}, 1);

Clazz.newMeth(C$, 'isEmpty$java_util_List',  function (list) {
return list == null  || list.isEmpty$() ;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

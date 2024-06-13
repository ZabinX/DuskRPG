(function(){var P$=Clazz.newPackage("sun.nio.fs"),I$=[[0,'java.nio.charset.Charset','java.util.HashSet','java.nio.file.LinkOption','AssertionError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Util");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['jnuEncoding','java.nio.charset.Charset']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'jnuEncoding$',  function () {
return C$.jnuEncoding;
}, 1);

Clazz.newMeth(C$, 'toBytes$S',  function (s) {
return s.getBytes$java_nio_charset_Charset(C$.jnuEncoding);
}, 1);

Clazz.newMeth(C$, 'toString$BA',  function (bytes) {
return  String.instantialize(bytes, C$.jnuEncoding);
}, 1);

Clazz.newMeth(C$, 'split$S$C',  function (s, c) {
var count=0;
for (var i=0; i < s.length$(); i++) {
if (s.charAt$I(i) == c) ++count;
}
var result=Clazz.array(String, [count + 1]);
var n=0;
var last=0;
for (var i=0; i < s.length$(); i++) {
if (s.charAt$I(i) == c) {
result[n++]=s.substring$I$I(last, i);
last=i + 1;
}}
result[n]=s.substring$I$I(last, s.length$());
return result;
}, 1);

Clazz.newMeth(C$, 'newSet$OA',  function (elements) {
var set=Clazz.new_($I$(2,1));
for (var e, $e = 0, $$e = elements; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
set.add$O(e);
}
return set;
}, 1);

Clazz.newMeth(C$, 'newSet$java_util_Set$OA',  function (other, elements) {
var set=Clazz.new_($I$(2,1).c$$java_util_Collection,[other]);
for (var e, $e = 0, $$e = elements; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
set.add$O(e);
}
return set;
}, 1);

Clazz.newMeth(C$, 'followLinks$java_nio_file_LinkOptionA',  function (options) {
var followLinks=true;
for (var option, $option = 0, $$option = options; $option<$$option.length&&((option=($$option[$option])),1);$option++) {
if (option === $I$(3).NOFOLLOW_LINKS ) {
followLinks=false;
} else if (option == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else {
throw Clazz.new_($I$(4,1).c$$O,["Should not get here"]);
}}
return followLinks;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.jnuEncoding=$I$(1,"forName$S",[(System.getProperty$S("sun.jnu.encoding"))]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

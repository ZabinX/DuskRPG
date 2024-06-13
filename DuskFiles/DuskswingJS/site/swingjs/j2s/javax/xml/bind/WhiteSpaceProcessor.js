(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WhiteSpaceProcessor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'replace$S',  function (text) {
return C$.replace$CharSequence(text).toString();
}, 1);

Clazz.newMeth(C$, 'replace$CharSequence',  function (text) {
var i=text.length$() - 1;
while (i >= 0 && !C$.isWhiteSpaceExceptSpace$C(text.charAt$I(i)) )--i;

if (i < 0) return text;
var buf=Clazz.new_($I$(1,1).c$$CharSequence,[text]);
buf.setCharAt$I$C(i--, " ");
for (; i >= 0; i--) if (C$.isWhiteSpaceExceptSpace$C(buf.charAt$I(i))) buf.setCharAt$I$C(i, " ");

return  String.instantialize(buf);
}, 1);

Clazz.newMeth(C$, 'trim$CharSequence',  function (text) {
var len=text.length$();
var start=0;
while (start < len && C$.isWhiteSpace$C(text.charAt$I(start)) )++start;

var end=len - 1;
while (end > start && C$.isWhiteSpace$C(text.charAt$I(end)) )--end;

if (start == 0 && end == len - 1 ) return text;
 else return text.subSequence$I$I(start, end + 1);
}, 1);

Clazz.newMeth(C$, 'collapse$S',  function (text) {
return C$.collapse$CharSequence(text).toString();
}, 1);

Clazz.newMeth(C$, 'collapse$CharSequence',  function (text) {
var len=text.length$();
var s=0;
while (s < len){
if (C$.isWhiteSpace$C(text.charAt$I(s))) break;
++s;
}
if (s == len) return text;
var result=Clazz.new_($I$(1,1).c$$I,[len]);
if (s != 0) {
for (var i=0; i < s; i++) result.append$C(text.charAt$I(i));

result.append$C(" ");
}var inStripMode=true;
for (var i=s + 1; i < len; i++) {
var ch=text.charAt$I(i);
var b=C$.isWhiteSpace$C(ch);
if (inStripMode && b ) continue;
inStripMode=b;
if (inStripMode) result.append$C(" ");
 else result.append$C(ch);
}
len=result.length$();
if (len > 0 && result.charAt$I(len - 1) == " " ) result.setLength$I(len - 1);
return result;
}, 1);

Clazz.newMeth(C$, 'isWhiteSpace$CharSequence',  function (s) {
for (var i=s.length$() - 1; i >= 0; i--) if (!C$.isWhiteSpace$C(s.charAt$I(i))) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'isWhiteSpace$C',  function (ch) {
if (ch.$c() > 32 ) return false;
return ch.$c() == 9  || ch.$c() == 10   || ch.$c() == 13   || ch.$c() == 32  ;
}, 1);

Clazz.newMeth(C$, 'isWhiteSpaceExceptSpace$C',  function (ch) {
if (ch.$c() >= 32 ) return false;
return ch.$c() == 9  || ch.$c() == 10   || ch.$c() == 13  ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

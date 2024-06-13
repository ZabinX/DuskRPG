(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation.adapters"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CollapsedStringAdapter", null, 'javax.xml.bind.annotation.adapters.XmlAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['unmarshal$S','unmarshal$O'],  function (text) {
if (text == null ) return null;
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
return result.toString();
});

Clazz.newMeth(C$, ['marshal$S','marshal$O'],  function (s) {
return s;
});

Clazz.newMeth(C$, 'isWhiteSpace$C',  function (ch) {
if (ch.$c() > 32 ) return false;
return ch.$c() == 9  || ch.$c() == 10   || ch.$c() == 13   || ch.$c() == 32  ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

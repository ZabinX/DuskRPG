(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation.adapters"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NormalizedStringAdapter", null, 'javax.xml.bind.annotation.adapters.XmlAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['unmarshal$S','unmarshal$O'],  function (text) {
if (text == null ) return null;
var i=text.length$() - 1;
while (i >= 0 && !C$.isWhiteSpaceExceptSpace$C(text.charAt$I(i)) )--i;

if (i < 0) return text;
var buf=text.toCharArray$();
buf[i--]=" ";
for (; i >= 0; i--) if (C$.isWhiteSpaceExceptSpace$C(buf[i])) buf[i]=" ";

return  String.instantialize(buf);
});

Clazz.newMeth(C$, ['marshal$S','marshal$O'],  function (s) {
return s;
});

Clazz.newMeth(C$, 'isWhiteSpaceExceptSpace$C',  function (ch) {
if (ch.$c() >= 32 ) return false;
return ch.$c() == 9  || ch.$c() == 10   || ch.$c() == 13  ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

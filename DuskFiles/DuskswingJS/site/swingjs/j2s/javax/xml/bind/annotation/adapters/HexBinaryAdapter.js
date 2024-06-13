(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation.adapters"),I$=[[0,'javax.xml.bind.DatatypeConverter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HexBinaryAdapter", null, 'javax.xml.bind.annotation.adapters.XmlAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['unmarshal$S','unmarshal$O'],  function (s) {
if (s == null ) return null;
return $I$(1).parseHexBinary$S(s);
});

Clazz.newMeth(C$, ['marshal$BA','marshal$O'],  function (bytes) {
if (bytes == null ) return null;
return $I$(1).printHexBinary$BA(bytes);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

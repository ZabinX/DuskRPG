(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PKCS8EncodedKeySpec", null, 'java.security.spec.EncodedKeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$BA',  function (encodedKey) {
;C$.superclazz.c$$BA.apply(this,[encodedKey]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEncoded$',  function () {
return C$.superclazz.prototype.getEncoded$.apply(this, []);
});

Clazz.newMeth(C$, 'getFormat$',  function () {
return "PKCS#8";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

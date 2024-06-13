(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EncodedKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['encodedKey','byte[]']]]

Clazz.newMeth(C$, 'c$$BA',  function (encodedKey) {
;C$.$init$.apply(this);
this.encodedKey=encodedKey.clone$();
}, 1);

Clazz.newMeth(C$, 'getEncoded$',  function () {
return this.encodedKey.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "KeyPair", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['privateKey','java.security.PrivateKey','publicKey','java.security.PublicKey']]]

Clazz.newMeth(C$, 'c$$java_security_PublicKey$java_security_PrivateKey',  function (publicKey, privateKey) {
;C$.$init$.apply(this);
this.publicKey=publicKey;
this.privateKey=privateKey;
}, 1);

Clazz.newMeth(C$, 'getPublic$',  function () {
return this.publicKey;
});

Clazz.newMeth(C$, 'getPrivate$',  function () {
return this.privateKey;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

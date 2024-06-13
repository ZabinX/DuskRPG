(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.ObjectOutputStream','java.io.ByteArrayInputStream','java.io.ObjectInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SignedObject", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['thealgorithm'],'O',['content','byte[]','+signature']]]

Clazz.newMeth(C$, 'c$$java_io_Serializable$java_security_PrivateKey$java_security_Signature',  function (object, signingKey, signingEngine) {
;C$.$init$.apply(this);
var b=Clazz.new_($I$(1,1));
var a=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[b]);
a.writeObject$O(object);
a.flush$();
a.close$();
this.content=b.toByteArray$();
b.close$();
p$1.sign$java_security_PrivateKey$java_security_Signature.apply(this, [signingKey, signingEngine]);
}, 1);

Clazz.newMeth(C$, 'getObject$',  function () {
var b=Clazz.new_($I$(3,1).c$$BA,[this.content]);
var a=Clazz.new_($I$(4,1).c$$java_io_InputStream,[b]);
var obj=a.readObject$();
b.close$();
a.close$();
return obj;
});

Clazz.newMeth(C$, 'getSignature$',  function () {
return this.signature.clone$();
});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.thealgorithm;
});

Clazz.newMeth(C$, 'verify$java_security_PublicKey$java_security_Signature',  function (verificationKey, verificationEngine) {
verificationEngine.initVerify$java_security_PublicKey(verificationKey);
verificationEngine.update$BA(this.content.clone$());
return verificationEngine.verify$BA(this.signature.clone$());
});

Clazz.newMeth(C$, 'sign$java_security_PrivateKey$java_security_Signature',  function (signingKey, signingEngine) {
signingEngine.initSign$java_security_PrivateKey(signingKey);
signingEngine.update$BA(this.content.clone$());
this.signature=signingEngine.sign$().clone$();
this.thealgorithm=signingEngine.getAlgorithm$();
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
var fields=s.readFields$();
this.content=(fields.get$S$O("content", null)).clone$();
this.signature=(fields.get$S$O("signature", null)).clone$();
this.thealgorithm=fields.get$S$O("thealgorithm", null);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

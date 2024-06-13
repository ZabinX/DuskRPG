(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.AccessController']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Signer", null, 'java.security.Identity');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['privateKey','java.security.PrivateKey']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_security_IdentityScope',  function (name, scope) {
;C$.superclazz.c$$S$java_security_IdentityScope.apply(this,[name, scope]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPrivateKey$',  function () {
C$.check$S("getSignerPrivateKey");
return this.privateKey;
});

Clazz.newMeth(C$, 'setKeyPair$java_security_KeyPair',  function (pair) {
C$.check$S("setSignerKeyPair");
var pub=pair.getPublic$();
var priv=pair.getPrivate$();
if (pub == null  || priv == null  ) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException'));
}try {
$I$(1,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.Signer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Signer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['java.security.Identity'].setPublicKey$java_security_PublicKey.apply(this.b$['java.security.Identity'], [this.$finals$.pub]);
return null;
});
})()
), Clazz.new_(P$.Signer$1.$init$,[this, {pub:pub}]))]);
} catch (pae) {
if (Clazz.exceptionOf(pae,"java.security.PrivilegedActionException")){
throw pae.getException$();
} else {
throw pae;
}
}
this.privateKey=priv;
});

Clazz.newMeth(C$, 'printKeys$',  function () {
var keys="";
var publicKey=this.getPublicKey$();
if (publicKey != null  && this.privateKey != null  ) {
keys="\tpublic and private keys initialized";
} else {
keys="\tno keys";
}return keys;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[Signer]" + C$.superclazz.prototype.toString.apply(this, []);
});

Clazz.newMeth(C$, 'check$S',  function (directive) {
var security=System.getSecurityManager$();
if (security != null ) {
security.checkSecurityAccess$S(directive);
}}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

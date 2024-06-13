(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'sun.security.jca.JCAUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SignatureSpi");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.appRandom=null;
},1);

C$.$fields$=[['O',['appRandom','java.security.SecureRandom']]]

Clazz.newMeth(C$, 'engineInitSign$java_security_PrivateKey$java_security_SecureRandom',  function (privateKey, random) {
this.appRandom=random;
this.engineInitSign$java_security_PrivateKey(privateKey);
});

Clazz.newMeth(C$, 'engineUpdate$java_nio_ByteBuffer',  function (input) {
if (input.hasRemaining$() == false ) {
return;
}try {
if (input.hasArray$()) {
var b=input.array$();
var ofs=input.arrayOffset$();
var pos=input.position$();
var lim=input.limit$();
this.engineUpdate$BA$I$I(b, ofs + pos, lim - pos);
input.position$I(lim);
} else {
var len=input.remaining$();
var b=Clazz.array(Byte.TYPE, [$I$(1).getTempArraySize$I(len)]);
while (len > 0){
var chunk=Math.min(len, b.length);
input.get$BA$I$I(b, 0, chunk);
this.engineUpdate$BA$I$I(b, 0, chunk);
len-=chunk;
}
}} catch (e) {
if (Clazz.exceptionOf(e,"java.security.SignatureException")){
throw Clazz.new_(Clazz.load('java.security.ProviderException').c$$S$Throwable,["update() failed", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'engineSign$BA$I$I',  function (outbuf, offset, len) {
var sig=this.engineSign$();
if (len < sig.length) {
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["partial signatures not returned"]);
}if (outbuf.length - offset < sig.length) {
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["insufficient space in the output buffer to store the signature"]);
}System.arraycopy$O$I$O$I$I(sig, 0, outbuf, offset, sig.length);
return sig.length;
});

Clazz.newMeth(C$, 'engineVerify$BA$I$I',  function (sigBytes, offset, length) {
var sigBytesCopy=Clazz.array(Byte.TYPE, [length]);
System.arraycopy$O$I$O$I$I(sigBytes, offset, sigBytesCopy, 0, length);
return this.engineVerify$BA(sigBytesCopy);
});

Clazz.newMeth(C$, 'engineSetParameter$java_security_spec_AlgorithmParameterSpec',  function (params) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'engineGetParameters$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clone$',  function () {
if (Clazz.instanceOf(this, "java.lang.Cloneable")) {
return Clazz.clone(this);
} else {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

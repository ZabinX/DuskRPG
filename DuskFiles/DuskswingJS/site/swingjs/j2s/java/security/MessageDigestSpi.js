(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'sun.security.jca.JCAUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessageDigestSpi");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tempArray','byte[]']]]

Clazz.newMeth(C$, 'engineGetDigestLength$',  function () {
return 0;
});

Clazz.newMeth(C$, 'engineUpdate$java_nio_ByteBuffer',  function (input) {
if (input.hasRemaining$() == false ) {
return;
}if (input.hasArray$()) {
var b=input.array$();
var ofs=input.arrayOffset$();
var pos=input.position$();
var lim=input.limit$();
this.engineUpdate$BA$I$I(b, ofs + pos, lim - pos);
input.position$I(lim);
} else {
var len=input.remaining$();
var n=$I$(1).getTempArraySize$I(len);
if ((this.tempArray == null ) || (n > this.tempArray.length) ) {
this.tempArray=Clazz.array(Byte.TYPE, [n]);
}while (len > 0){
var chunk=Math.min(len, this.tempArray.length);
input.get$BA$I$I(this.tempArray, 0, chunk);
this.engineUpdate$BA$I$I(this.tempArray, 0, chunk);
len-=chunk;
}
}});

Clazz.newMeth(C$, 'engineDigest$BA$I$I',  function (buf, offset, len) {
var digest=this.engineDigest$();
if (len < digest.length) throw Clazz.new_(Clazz.load('java.security.DigestException').c$$S,["partial digests not returned"]);
if (buf.length - offset < digest.length) throw Clazz.new_(Clazz.load('java.security.DigestException').c$$S,["insufficient space in the output buffer to store the digest"]);
System.arraycopy$O$I$O$I$I(digest, 0, buf, offset, digest.length);
return digest.length;
});

Clazz.newMeth(C$, 'clone$',  function () {
if (Clazz.instanceOf(this, "java.lang.Cloneable")) {
return Clazz.clone(this);
} else {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

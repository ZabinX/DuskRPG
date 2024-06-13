(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DigestOutputStream", null, 'java.io.FilterOutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.on=true;
},1);

C$.$fields$=[['Z',['on'],'O',['digest','java.security.MessageDigest']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_security_MessageDigest',  function (stream, digest) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[stream]);C$.$init$.apply(this);
this.setMessageDigest$java_security_MessageDigest(digest);
}, 1);

Clazz.newMeth(C$, 'getMessageDigest$',  function () {
return this.digest;
});

Clazz.newMeth(C$, 'setMessageDigest$java_security_MessageDigest',  function (digest) {
this.digest=digest;
});

Clazz.newMeth(C$, 'write$I',  function (b) {
this.out.write$I(b);
if (this.on) {
this.digest.update$B(($b$[0] = b, $b$[0]));
}});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
this.out.write$BA$I$I(b, off, len);
if (this.on) {
this.digest.update$BA$I$I(b, off, len);
}});

Clazz.newMeth(C$, 'on$Z',  function (on) {
this.on=on;
});

Clazz.newMeth(C$, 'toString',  function () {
return "[Digest Output Stream] " + this.digest.toString();
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

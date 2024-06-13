(function(){var P$=Clazz.newPackage("java.security.cert"),p$1={},I$=[[0,'java.util.Collections','java.util.HashMap','java.security.cert.Extension','sun.security.x509.InvalidityDateExtension','sun.security.x509.Extension','sun.security.util.ObjectIdentifier']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertificateRevokedException", null, 'java.security.cert.CertificateException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['revocationDate','java.util.Date','reason','java.security.cert.CRLReason','authority','javax.security.auth.x500.X500Principal','extensions','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Date$java_security_cert_CRLReason$javax_security_auth_x500_X500Principal$java_util_Map',  function (revocationDate, reason, authority, extensions) {
Clazz.super_(C$, this);
if (revocationDate == null  || reason == null   || authority == null   || extensions == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.revocationDate=Clazz.new_(java.util.Date.c$$J,[revocationDate.getTime$()]);
this.reason=reason;
this.authority=authority;
this.extensions=$I$(1,"checkedMap$java_util_Map$Class$Class",[Clazz.new_($I$(2,1)), Clazz.getClass(String), Clazz.getClass($I$(3),['encode$java_io_OutputStream','getId$','getValue$','isCritical$'])]);
this.extensions.putAll$java_util_Map(extensions);
}, 1);

Clazz.newMeth(C$, 'getRevocationDate$',  function () {
return this.revocationDate.clone$();
});

Clazz.newMeth(C$, 'getRevocationReason$',  function () {
return this.reason;
});

Clazz.newMeth(C$, 'getAuthorityName$',  function () {
return this.authority;
});

Clazz.newMeth(C$, 'getInvalidityDate$',  function () {
var ext=this.getExtensions$().get$O("2.5.29.24");
if (ext == null ) {
return null;
} else {
try {
var invalidity=$I$(4).toImpl$java_security_cert_Extension(ext).get$S("DATE");
return Clazz.new_(java.util.Date.c$$J,[invalidity.getTime$()]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
return null;
} else {
throw ioe;
}
}
}});

Clazz.newMeth(C$, 'getExtensions$',  function () {
return $I$(1).unmodifiableMap$java_util_Map(this.extensions);
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return "Certificate has been revoked, reason: " + this.reason + ", revocation date: " + this.revocationDate + ", authority: " + this.authority + ", extension OIDs: " + this.extensions.keySet$() ;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (oos) {
oos.defaultWriteObject$();
oos.writeInt$I(this.extensions.size$());
for (var entry, $entry = this.extensions.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var ext=entry.getValue$();
oos.writeObject$O(ext.getId$());
oos.writeBoolean$Z(ext.isCritical$());
var extVal=ext.getValue$();
oos.writeInt$I(extVal.length);
oos.write$BA(extVal);
}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (ois) {
ois.defaultReadObject$();
this.revocationDate=Clazz.new_(java.util.Date.c$$J,[this.revocationDate.getTime$()]);
var size=ois.readInt$();
if (size == 0) {
this.extensions=$I$(1).emptyMap$();
} else {
this.extensions=Clazz.new_($I$(2,1).c$$I,[size]);
}for (var i=0; i < size; i++) {
var oid=ois.readObject$();
var critical=ois.readBoolean$();
var length=ois.readInt$();
var extVal=Clazz.array(Byte.TYPE, [length]);
ois.readFully$BA(extVal);
var ext=$I$(5,"newExtension$sun_security_util_ObjectIdentifier$Z$BA",[Clazz.new_($I$(6,1).c$$S,[oid]), critical, extVal]);
this.extensions.put$O$O(oid, ext);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

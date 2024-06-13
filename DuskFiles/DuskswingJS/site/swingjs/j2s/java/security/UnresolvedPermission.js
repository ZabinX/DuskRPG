(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.util.ArrayList','java.security.cert.Certificate','java.security.UnresolvedPermissionCollection','java.util.Hashtable','java.security.cert.CertificateFactory','java.io.ByteArrayInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnresolvedPermission", null, 'java.security.Permission', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type','$name','actions'],'O',['certs','java.security.cert.Certificate[]']]
,['O',['PARAMS0','Class[]','+PARAMS1','+PARAMS2']]]

Clazz.newMeth(C$, 'c$$S$S$S$java_security_cert_CertificateA',  function (type, name, actions, certs) {
;C$.superclazz.c$$S.apply(this,[type]);C$.$init$.apply(this);
if (type == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["type can\'t be null"]);
this.type=type;
this.$name=name;
this.actions=actions;
if (certs != null ) {
for (var i=0; i < certs.length; i++) {
if (!(Clazz.instanceOf(certs[i], "java.security.cert.X509Certificate"))) {
this.certs=certs.clone$();
break;
}}
if (this.certs == null ) {
var i=0;
var count=0;
while (i < certs.length){
++count;
while (((i + 1) < certs.length) && (certs[i]).getIssuerDN$().equals$O((certs[i + 1]).getSubjectDN$()) ){
++i;
}
++i;
}
if (count == certs.length) {
this.certs=certs.clone$();
}if (this.certs == null ) {
var signerCerts=Clazz.new_($I$(1,1));
i=0;
while (i < certs.length){
signerCerts.add$O(certs[i]);
while (((i + 1) < certs.length) && (certs[i]).getIssuerDN$().equals$O((certs[i + 1]).getSubjectDN$()) ){
++i;
}
++i;
}
this.certs=Clazz.array($I$(2), [signerCerts.size$()]);
signerCerts.toArray$OA(this.certs);
}}}}, 1);

Clazz.newMeth(C$, 'resolve$java_security_Permission$java_security_cert_CertificateA',  function (p, certs) {
if (this.certs != null ) {
if (certs == null ) {
return null;
}var match;
for (var i=0; i < this.certs.length; i++) {
match=false;
for (var j=0; j < certs.length; j++) {
if (this.certs[i].equals$O(certs[j])) {
match=true;
break;
}}
if (!match) return null;
}
}try {
var pc=p.getClass$();
if (this.$name == null  && this.actions == null  ) {
try {
var c=pc.getConstructor$ClassA(C$.PARAMS0);
return c.newInstance$OA(Clazz.array(java.lang.Object, -1, []));
} catch (ne) {
if (Clazz.exceptionOf(ne,"NoSuchMethodException")){
try {
var c=pc.getConstructor$ClassA(C$.PARAMS1);
return c.newInstance$OA(Clazz.array(java.lang.Object, -1, [this.$name]));
} catch (ne1) {
if (Clazz.exceptionOf(ne1,"NoSuchMethodException")){
var c=pc.getConstructor$ClassA(C$.PARAMS2);
return c.newInstance$OA(Clazz.array(java.lang.Object, -1, [this.$name, this.actions]));
} else {
throw ne1;
}
}
} else {
throw ne;
}
}
} else {
if (this.$name != null  && this.actions == null  ) {
try {
var c=pc.getConstructor$ClassA(C$.PARAMS1);
return c.newInstance$OA(Clazz.array(java.lang.Object, -1, [this.$name]));
} catch (ne) {
if (Clazz.exceptionOf(ne,"NoSuchMethodException")){
var c=pc.getConstructor$ClassA(C$.PARAMS2);
return c.newInstance$OA(Clazz.array(java.lang.Object, -1, [this.$name, this.actions]));
} else {
throw ne;
}
}
} else {
var c=pc.getConstructor$ClassA(C$.PARAMS2);
return c.newInstance$OA(Clazz.array(java.lang.Object, -1, [this.$name, this.actions]));
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var nsme = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
return null;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (p) {
return false;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) return true;
if (!(Clazz.instanceOf(obj, "java.security.UnresolvedPermission"))) return false;
var that=obj;
if (!this.type.equals$O(that.type)) {
return false;
}if (this.$name == null ) {
if (that.$name != null ) {
return false;
}} else if (!this.$name.equals$O(that.$name)) {
return false;
}if (this.actions == null ) {
if (that.actions != null ) {
return false;
}} else {
if (!this.actions.equals$O(that.actions)) {
return false;
}}if ((this.certs == null  && that.certs != null  ) || (this.certs != null  && that.certs == null  ) || (this.certs != null  && that.certs != null   && this.certs.length != that.certs.length )  ) {
return false;
}var i;
var j;
var match;
for (i=0; this.certs != null  && i < this.certs.length ; i++) {
match=false;
for (j=0; j < that.certs.length; j++) {
if (this.certs[i].equals$O(that.certs[j])) {
match=true;
break;
}}
if (!match) return false;
}
for (i=0; that.certs != null  && i < that.certs.length ; i++) {
match=false;
for (j=0; j < this.certs.length; j++) {
if (that.certs[i].equals$O(this.certs[j])) {
match=true;
break;
}}
if (!match) return false;
}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=this.type.hashCode$();
if (this.$name != null ) hash^=this.$name.hashCode$();
if (this.actions != null ) hash^=this.actions.hashCode$();
return hash;
});

Clazz.newMeth(C$, 'getActions$',  function () {
return "";
});

Clazz.newMeth(C$, 'getUnresolvedType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getUnresolvedName$',  function () {
return this.$name;
});

Clazz.newMeth(C$, 'getUnresolvedActions$',  function () {
return this.actions;
});

Clazz.newMeth(C$, 'getUnresolvedCerts$',  function () {
return (this.certs == null ) ? null : this.certs.clone$();
});

Clazz.newMeth(C$, 'toString',  function () {
return "(unresolved " + this.type + " " + this.$name + " " + this.actions + ")" ;
});

Clazz.newMeth(C$, 'newPermissionCollection$',  function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (oos) {
oos.defaultWriteObject$();
if (this.certs == null  || this.certs.length == 0 ) {
oos.writeInt$I(0);
} else {
oos.writeInt$I(this.certs.length);
for (var i=0; i < this.certs.length; i++) {
var cert=this.certs[i];
try {
oos.writeUTF$S(cert.getType$());
var encoded=cert.getEncoded$();
oos.writeInt$I(encoded.length);
oos.write$BA(encoded);
} catch (cee) {
if (Clazz.exceptionOf(cee,"java.security.cert.CertificateEncodingException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[cee.getMessage$()]);
} else {
throw cee;
}
}
}
}}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (ois) {
var cf;
var cfs=null;
ois.defaultReadObject$();
if (this.type == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["type can\'t be null"]);
var size=ois.readInt$();
if (size > 0) {
cfs=Clazz.new_($I$(4,1).c$$I,[3]);
this.certs=Clazz.array($I$(2), [size]);
}for (var i=0; i < size; i++) {
var certType=ois.readUTF$();
if (cfs.containsKey$O(certType)) {
cf=cfs.get$O(certType);
} else {
try {
cf=$I$(5).getInstance$S(certType);
} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CertificateException")){
throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S,["Certificate factory for " + certType + " not found" ]);
} else {
throw ce;
}
}
cfs.put$O$O(certType, cf);
}var encoded=null;
try {
encoded=Clazz.array(Byte.TYPE, [ois.readInt$()]);
} catch (oome) {
if (Clazz.exceptionOf(oome,"OutOfMemoryError")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Certificate too big"]);
} else {
throw oome;
}
}
ois.readFully$BA(encoded);
var bais=Clazz.new_($I$(6,1).c$$BA,[encoded]);
try {
this.certs[i]=cf.generateCertificate$java_io_InputStream(bais);
} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CertificateException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[ce.getMessage$()]);
} else {
throw ce;
}
}
bais.close$();
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.PARAMS0=Clazz.array(Class, -1, []);
C$.PARAMS1=Clazz.array(Class, -1, [Clazz.getClass(String)]);
C$.PARAMS2=Clazz.array(Class, -1, [Clazz.getClass(String), Clazz.getClass(String)]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

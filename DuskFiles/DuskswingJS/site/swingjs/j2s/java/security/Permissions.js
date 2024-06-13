(function(){var P$=Clazz.newPackage("java.security"),p$1={},p$2={},p$3={},I$=[[0,'java.io.ObjectStreamField','java.util.Hashtable','java.security.PermissionCollection','java.util.HashMap','java.security.PermissionsEnumerator','java.security.PermissionsHash','java.security.UnresolvedPermission','java.security.cert.Certificate','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Permissions", null, 'java.security.PermissionCollection', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasUnresolved=false;
},1);

C$.$fields$=[['Z',['hasUnresolved'],'O',['permsMap','java.util.Map','allPermission','java.security.PermissionCollection']]
,['O',['serialPersistentFields','java.io.ObjectStreamField[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.permsMap=Clazz.new_($I$(4,1).c$$I,[11]);
this.allPermission=null;
}, 1);

Clazz.newMeth(C$, 'add$java_security_Permission',  function (permission) {
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('SecurityException').c$$S,["attempt to add a Permission to a readonly Permissions object"]);
var pc;
{
pc=p$1.getPermissionCollection$java_security_Permission$Z.apply(this, [permission, true]);
pc.add$java_security_Permission(permission);
}if (Clazz.instanceOf(permission, "java.security.AllPermission")) {
this.allPermission=pc;
}if (Clazz.instanceOf(permission, "java.security.UnresolvedPermission")) {
this.hasUnresolved=true;
}});

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (permission) {
if (this.allPermission != null ) {
return true;
} else {
{
var pc=p$1.getPermissionCollection$java_security_Permission$Z.apply(this, [permission, false]);
if (pc != null ) {
return pc.implies$java_security_Permission(permission);
} else {
return false;
}}}});

Clazz.newMeth(C$, 'elements$',  function () {
{
return Clazz.new_([this.permsMap.values$().iterator$()],$I$(5,1).c$$java_util_Iterator);
}});

Clazz.newMeth(C$, 'getPermissionCollection$java_security_Permission$Z',  function (p, createEmpty) {
var c=p.getClass$();
var pc=this.permsMap.get$O(c);
if (!this.hasUnresolved && !createEmpty ) {
return pc;
} else if (pc == null ) {
pc=(this.hasUnresolved ? p$1.getUnresolvedPermissions$java_security_Permission.apply(this, [p]) : null);
if (pc == null  && createEmpty ) {
pc=p.newPermissionCollection$();
if (pc == null ) pc=Clazz.new_($I$(6,1));
}if (pc != null ) {
this.permsMap.put$O$O(c, pc);
}}return pc;
}, p$1);

Clazz.newMeth(C$, 'getUnresolvedPermissions$java_security_Permission',  function (p) {
var uc=this.permsMap.get$O(Clazz.getClass($I$(7)));
if (uc == null ) return null;
var unresolvedPerms=uc.getUnresolvedPermissions$java_security_Permission(p);
if (unresolvedPerms == null ) return null;
var certs=null;
var signers=p.getClass$().getSigners$();
var n=0;
if (signers != null ) {
for (var j=0; j < signers.length; j++) {
if (Clazz.instanceOf(signers[j], "java.security.cert.Certificate")) {
++n;
}}
certs=Clazz.array($I$(8), [n]);
n=0;
for (var j=0; j < signers.length; j++) {
if (Clazz.instanceOf(signers[j], "java.security.cert.Certificate")) {
certs[n++]=signers[j];
}}
}var pc=null;
{
var len=unresolvedPerms.size$();
for (var i=0; i < len; i++) {
var up=unresolvedPerms.get$I(i);
var perm=up.resolve$java_security_Permission$java_security_cert_CertificateA(p, certs);
if (perm != null ) {
if (pc == null ) {
pc=p.newPermissionCollection$();
if (pc == null ) pc=Clazz.new_($I$(6,1));
}pc.add$java_security_Permission(perm);
}}
}return pc;
}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (out) {
var perms=Clazz.new_([this.permsMap.size$() * 2],$I$(2,1).c$$I);
{
perms.putAll$java_util_Map(this.permsMap);
}var pfields=out.putFields$();
pfields.put$S$O("allPermission", this.allPermission);
pfields.put$S$O("perms", perms);
out.writeFields$();
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
var gfields=$in.readFields$();
this.allPermission=gfields.get$S$O("allPermission", null);
var perms=gfields.get$S$O("perms", null);
this.permsMap=Clazz.new_([perms.size$() * 2],$I$(4,1).c$$I);
this.permsMap.putAll$java_util_Map(perms);
var uc=this.permsMap.get$O(Clazz.getClass($I$(7)));
this.hasUnresolved=(uc != null  && uc.elements$().hasMoreElements$() );
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.serialPersistentFields=Clazz.array($I$(1), -1, [Clazz.new_(["perms", Clazz.getClass($I$(2))],$I$(1,1).c$$S$Class), Clazz.new_(["allPermission", Clazz.getClass($I$(3))],$I$(1,1).c$$S$Class)]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

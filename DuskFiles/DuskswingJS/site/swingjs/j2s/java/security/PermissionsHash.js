(function(){var P$=Clazz.newPackage("java.security"),p$1={},p$2={},p$3={},I$=[[0,'java.io.ObjectStreamField','java.util.Hashtable','java.security.PermissionCollection','java.util.HashMap','java.security.PermissionsEnumerator','java.security.PermissionsHash','java.security.UnresolvedPermission','java.security.cert.Certificate','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PermissionsHash", null, 'java.security.PermissionCollection', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['permsMap','java.util.Map']]
,['O',['serialPersistentFields','java.io.ObjectStreamField[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.permsMap=Clazz.new_($I$(4,1).c$$I,[11]);
}, 1);

Clazz.newMeth(C$, 'add$java_security_Permission',  function (permission) {
{
this.permsMap.put$O$O(permission, permission);
}});

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (permission) {
{
var p=this.permsMap.get$O(permission);
if (p == null ) {
for (var p_, $p_ = this.permsMap.values$().iterator$(); $p_.hasNext$()&&((p_=($p_.next$())),1);) {
if (p_.implies$java_security_Permission(permission)) return true;
}
return false;
} else {
return true;
}}});

Clazz.newMeth(C$, 'elements$',  function () {
{
return $I$(9,"enumeration$java_util_Collection",[this.permsMap.values$()]);
}});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (out) {
var perms=Clazz.new_([this.permsMap.size$() * 2],$I$(2,1).c$$I);
{
perms.putAll$java_util_Map(this.permsMap);
}var pfields=out.putFields$();
pfields.put$S$O("perms", perms);
out.writeFields$();
}, p$3);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
var gfields=$in.readFields$();
var perms=gfields.get$S$O("perms", null);
this.permsMap=Clazz.new_([perms.size$() * 2],$I$(4,1).c$$I);
this.permsMap.putAll$java_util_Map(perms);
}, p$3);

C$.$static$=function(){C$.$static$=0;
C$.serialPersistentFields=Clazz.array($I$(1), -1, [Clazz.new_(["perms", Clazz.getClass($I$(2))],$I$(1,1).c$$S$Class)]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

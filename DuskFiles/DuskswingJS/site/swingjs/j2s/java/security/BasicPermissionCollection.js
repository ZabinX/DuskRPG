(function(){var P$=Clazz.newPackage("java.security"),p$1={},p$2={},I$=[[0,'java.security.BasicPermissionCollection','java.io.ObjectStreamField','java.util.Hashtable','java.util.HashMap','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicPermissionCollection", null, 'java.security.PermissionCollection', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['all_allowed'],'O',['perms','java.util.Map','permClass','Class']]
,['O',['serialPersistentFields','java.io.ObjectStreamField[]']]]

Clazz.newMeth(C$, 'c$$Class',  function (clazz) {
Clazz.super_(C$, this);
this.perms=Clazz.new_($I$(4,1).c$$I,[11]);
this.all_allowed=false;
this.permClass=clazz;
}, 1);

Clazz.newMeth(C$, 'add$java_security_Permission',  function (permission) {
if (!(Clazz.instanceOf(permission, "java.security.BasicPermission"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid permission: " + permission]);
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('SecurityException').c$$S,["attempt to add a Permission to a readonly PermissionCollection"]);
var bp=permission;
if (this.permClass == null ) {
this.permClass=bp.getClass$();
} else {
if (bp.getClass$() !== this.permClass ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid permission: " + permission]);
}{
this.perms.put$O$O(bp.getCanonicalName$(), permission);
}if (!this.all_allowed) {
if (bp.getCanonicalName$().equals$O("*")) this.all_allowed=true;
}});

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (permission) {
if (!(Clazz.instanceOf(permission, "java.security.BasicPermission"))) return false;
var bp=permission;
if (bp.getClass$() !== this.permClass ) return false;
if (this.all_allowed) return true;
var path=bp.getCanonicalName$();
var x;
{
x=this.perms.get$O(path);
}if (x != null ) {
return x.implies$java_security_Permission(permission);
}var last;
var offset;
offset=path.length$() - 1;
while ((last=path.lastIndexOf$S$I(".", offset)) != -1){
path=path.substring$I$I(0, last + 1) + "*";
{
x=this.perms.get$O(path);
}if (x != null ) {
return x.implies$java_security_Permission(permission);
}offset=last - 1;
}
return false;
});

Clazz.newMeth(C$, 'elements$',  function () {
{
return $I$(5,"enumeration$java_util_Collection",[this.perms.values$()]);
}});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (out) {
var permissions=Clazz.new_([this.perms.size$() * 2],$I$(3,1).c$$I);
{
permissions.putAll$java_util_Map(this.perms);
}var pfields=out.putFields$();
pfields.put$S$Z("all_allowed", this.all_allowed);
pfields.put$S$O("permissions", permissions);
pfields.put$S$O("permClass", this.permClass);
out.writeFields$();
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
var gfields=$in.readFields$();
var permissions=gfields.get$S$O("permissions", null);
this.perms=Clazz.new_([permissions.size$() * 2],$I$(4,1).c$$I);
this.perms.putAll$java_util_Map(permissions);
this.all_allowed=gfields.get$S$Z("all_allowed", false);
this.permClass=gfields.get$S$O("permClass", null);
if (this.permClass == null ) {
var e=permissions.elements$();
if (e.hasMoreElements$()) {
var p=e.nextElement$();
this.permClass=p.getClass$();
}}}, p$2);

C$.$static$=function(){C$.$static$=0;
C$.serialPersistentFields=Clazz.array($I$(2), -1, [Clazz.new_(["permissions", Clazz.getClass($I$(3))],$I$(2,1).c$$S$Class), Clazz.new_($I$(2,1).c$$S$Class,["all_allowed", Boolean.TYPE]), Clazz.new_(["permClass", Clazz.getClass(Class)],$I$(2,1).c$$S$Class)]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

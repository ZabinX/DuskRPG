(function(){var P$=Clazz.newPackage("java.security"),p$1={},p$2={},p$3={},I$=[[0,'java.io.ObjectStreamField','java.util.Hashtable','java.security.PermissionCollection','java.util.HashMap','java.security.PermissionsEnumerator','java.security.PermissionsHash','java.security.UnresolvedPermission','java.security.cert.Certificate','java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PermissionsEnumerator", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['perms','java.util.Iterator','permset','java.util.Enumeration']]]

Clazz.newMeth(C$, 'c$$java_util_Iterator',  function (e) {
;C$.$init$.apply(this);
this.perms=e;
this.permset=p$2.getNextEnumWithMore.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.permset == null ) return false;
if (this.permset.hasMoreElements$()) return true;
this.permset=p$2.getNextEnumWithMore.apply(this, []);
return (this.permset != null );
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.hasMoreElements$()) {
return this.permset.nextElement$();
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["PermissionsEnumerator"]);
}});

Clazz.newMeth(C$, 'getNextEnumWithMore',  function () {
while (this.perms.hasNext$()){
var pc=this.perms.next$();
var next=pc.elements$();
if (next.hasMoreElements$()) return next;
}
return null;
}, p$2);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.AllPermissionCollection','sun.security.util.SecurityConstants']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AllPermissionCollection", null, 'java.security.PermissionCollection', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['all_allowed']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.all_allowed=false;
}, 1);

Clazz.newMeth(C$, 'add$java_security_Permission',  function (permission) {
if (!(Clazz.instanceOf(permission, "java.security.AllPermission"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid permission: " + permission]);
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('SecurityException').c$$S,["attempt to add a Permission to a readonly PermissionCollection"]);
this.all_allowed=true;
});

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (permission) {
return this.all_allowed;
});

Clazz.newMeth(C$, 'elements$',  function () {
return ((P$.AllPermissionCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AllPermissionCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasMore=this.b$['java.security.AllPermissionCollection'].all_allowed;
},1);

C$.$fields$=[['Z',['hasMore']]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.hasMore;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
this.hasMore=false;
return $I$(2).ALL_PERMISSION;
});
})()
), Clazz.new_(P$.AllPermissionCollection$1.$init$,[this, null]));
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

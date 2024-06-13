(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ProtectionDomain");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_security_CodeSource$java_security_PermissionCollection',  function (codesource, permissions) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_CodeSource$java_security_PermissionCollection$ClassLoader$java_security_PrincipalA',  function (codesource, permissions, classloader, principals) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCodeSource$',  function () {
return null;
});

Clazz.newMeth(C$, 'getClassLoader$',  function () {
return this.getClass$().getClassLoader$();
});

Clazz.newMeth(C$, 'getPrincipals$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPermissions$',  function () {
return null;
});

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (permission) {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

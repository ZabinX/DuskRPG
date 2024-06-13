(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.AccessControlContext']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AccessController");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedAction',  function (action) {
return action.run$();
}, 1);

Clazz.newMeth(C$, 'doPrivilegedWithCombiner$java_security_PrivilegedAction',  function (action) {
return action.run$();
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext',  function (action, context) {
return action.run$();
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedAction$java_security_AccessControlContext$java_security_PermissionA',  function (action, context, perms) {
return action.run$();
}, 1);

Clazz.newMeth(C$, 'doPrivilegedWithCombiner$java_security_PrivilegedAction$java_security_AccessControlContext$java_security_PermissionA',  function (action, context, perms) {
return action.run$();
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedExceptionAction',  function (action) {
return C$.justDoIt$java_security_PrivilegedExceptionAction(action);
}, 1);

Clazz.newMeth(C$, 'doPrivilegedWithCombiner$java_security_PrivilegedExceptionAction',  function (action) {
return C$.justDoIt$java_security_PrivilegedExceptionAction(action);
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedExceptionAction$java_security_AccessControlContext',  function (action, context) {
return C$.justDoIt$java_security_PrivilegedExceptionAction(action);
}, 1);

Clazz.newMeth(C$, 'doPrivileged$java_security_PrivilegedExceptionAction$java_security_AccessControlContext$java_security_PermissionA',  function (action, context, perms) {
return C$.justDoIt$java_security_PrivilegedExceptionAction(action);
}, 1);

Clazz.newMeth(C$, 'doPrivilegedWithCombiner$java_security_PrivilegedExceptionAction$java_security_AccessControlContext$java_security_PermissionA',  function (action, context, perms) {
return C$.justDoIt$java_security_PrivilegedExceptionAction(action);
}, 1);

Clazz.newMeth(C$, 'justDoIt$java_security_PrivilegedAction',  function (action) {
try {
return action.run$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('java.security.PrivilegedActionException').c$$Exception,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'justDoIt$java_security_PrivilegedExceptionAction',  function (action) {
try {
return action.run$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('java.security.PrivilegedActionException').c$$Exception,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$',  function () {
return Clazz.new_($I$(1,1).c$$java_security_ProtectionDomainA$Z,[null, true]);
}, 1);

Clazz.newMeth(C$, 'checkPermission$java_security_Permission',  function (perm) {
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.Permissions',['java.security.Policy','.UnsupportedEmptyCollection']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Policy", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Parameters',9],['UnsupportedEmptyCollection',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['UNSUPPORTED_EMPTY_COLLECTION','java.security.PermissionCollection']]]

Clazz.newMeth(C$, 'getPolicy$',  function () {
return C$.getPolicyNoCheck$();
}, 1);

Clazz.newMeth(C$, 'getPolicyNoCheck$',  function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'setPolicy$java_security_Policy',  function (p) {
}, 1);

Clazz.newMeth(C$, 'initPolicy$java_security_Policy',  function (p) {
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Policy_Parameters',  function (type, params) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Policy_Parameters$S',  function (type, params, provider) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Policy_Parameters$java_security_Provider',  function (type, params, provider) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return null;
});

Clazz.newMeth(C$, 'getType$',  function () {
return null;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPermissions$java_security_CodeSource',  function (codesource) {
return C$.UNSUPPORTED_EMPTY_COLLECTION;
});

Clazz.newMeth(C$, 'getPermissions$java_security_ProtectionDomain',  function (domain) {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'implies$java_security_ProtectionDomain$java_security_Permission',  function (domain, permission) {
return true;
});

Clazz.newMeth(C$, 'refresh$',  function () {
});

C$.$static$=function(){C$.$static$=0;
C$.UNSUPPORTED_EMPTY_COLLECTION=Clazz.new_($I$(2,1));
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Policy, "Parameters", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Policy, "UnsupportedEmptyCollection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.security.PermissionCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['perms','java.security.Permissions']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.perms=Clazz.new_($I$(1,1));
this.perms.setReadOnly$();
}, 1);

Clazz.newMeth(C$, 'add$java_security_Permission',  function (permission) {
this.perms.add$java_security_Permission(permission);
});

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (permission) {
return this.perms.implies$java_security_Permission(permission);
});

Clazz.newMeth(C$, 'elements$',  function () {
return this.perms.elements$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

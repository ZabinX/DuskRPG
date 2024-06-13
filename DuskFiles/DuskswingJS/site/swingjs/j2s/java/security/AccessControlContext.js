(function(){var P$=Clazz.newPackage("java.security"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AccessControlContext");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isAuthorized=true;
},1);

C$.$fields$=[['Z',['isPrivileged','isAuthorized'],'O',['context','java.security.ProtectionDomain[]']]]

Clazz.newMeth(C$, 'c$$java_security_ProtectionDomainA',  function (context) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_AccessControlContext$java_security_DomainCombiner',  function (acc, combiner) {
C$.c$$java_security_AccessControlContext$java_security_DomainCombiner$Z.apply(this, [acc, combiner, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_AccessControlContext$java_security_DomainCombiner$Z',  function (acc, combiner, preauthorized) {
;C$.$init$.apply(this);
this.context=acc.context;
}, 1);

Clazz.newMeth(C$, 'c$$java_security_ProtectionDomain$java_security_DomainCombiner$java_security_AccessControlContext$java_security_AccessControlContext$java_security_PermissionA',  function ($caller, combiner, parent, context, perms) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_ProtectionDomainA$Z',  function (context, isPrivileged) {
;C$.$init$.apply(this);
this.context=context;
this.isPrivileged=isPrivileged;
this.isAuthorized=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_security_ProtectionDomainA$java_security_AccessControlContext',  function (context, privilegedContext) {
;C$.$init$.apply(this);
this.context=context;
this.isPrivileged=true;
}, 1);

Clazz.newMeth(C$, 'getAssignedCombiner$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDomainCombiner$',  function () {
return null;
});

Clazz.newMeth(C$, 'checkPermission$java_security_Permission',  function (perm) {
});

Clazz.newMeth(C$, 'checkPermission2$java_security_Permission',  function (perm) {
}, p$1);

Clazz.newMeth(C$, 'optimize$',  function () {
return this;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) return true;
if (!(Clazz.instanceOf(obj, "java.security.AccessControlContext"))) return false;
var that=obj;
if (!p$1.equalContext$java_security_AccessControlContext.apply(this, [that])) return false;
if (!p$1.equalLimitedContext$java_security_AccessControlContext.apply(this, [that])) return false;
return true;
});

Clazz.newMeth(C$, 'equalContext$java_security_AccessControlContext',  function (that) {
if (!p$1.equalPDs$java_security_ProtectionDomainA$java_security_ProtectionDomainA.apply(this, [this.context, that.context])) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'equalPDs$java_security_ProtectionDomainA$java_security_ProtectionDomainA',  function (a, b) {
if (a == null ) {
return (b == null );
}if (b == null ) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'equalLimitedContext$java_security_AccessControlContext',  function (that) {
if (that == null ) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var hashCode=0;
if (this.context == null ) return hashCode;
for (var i=0; i < this.context.length; i++) {
if (this.context[i] != null ) hashCode^=this.context[i].hashCode$();
}
return hashCode;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

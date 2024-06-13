(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'sun.security.util.Debug','java.util.HashMap','java.security.Permissions']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SecureClassLoader", null, 'ClassLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pdcache=Clazz.new_($I$(2,1).c$$I,[11]);
},1);

C$.$fields$=[['Z',['initialized'],'O',['pdcache','java.util.HashMap']]
,['O',['debug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$$ClassLoader',  function (parent) {
;C$.superclazz.c$$ClassLoader.apply(this,[parent]);C$.$init$.apply(this);
this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'defineClass$S$BA$I$I$java_security_CodeSource',  function (name, b, off, len, cs) {
return this.defineClass$S$BA$I$I$java_security_ProtectionDomain(name, b, off, len, p$1.getProtectionDomain$java_security_CodeSource.apply(this, [cs]));
});

Clazz.newMeth(C$, 'defineClass$S$java_nio_ByteBuffer$java_security_CodeSource',  function (name, b, cs) {
return this.defineClass$S$java_nio_ByteBuffer$java_security_ProtectionDomain(name, b, p$1.getProtectionDomain$java_security_CodeSource.apply(this, [cs]));
});

Clazz.newMeth(C$, 'getPermissions$java_security_CodeSource',  function (codesource) {
p$1.check.apply(this, []);
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getProtectionDomain$java_security_CodeSource',  function (cs) {
return null;
}, p$1);

Clazz.newMeth(C$, 'check',  function () {
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.debug=$I$(1).getInstance$S("scl");
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.AccessController','java.security.Security']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IdentityScope", null, 'java.security.Identity');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$scope','java.security.IdentityScope']]]

Clazz.newMeth(C$, 'initializeSystemScope$',  function () {
var classname=$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.IdentityScope$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IdentityScope$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(2).getProperty$S("system.scope");
});
})()
), Clazz.new_(P$.IdentityScope$1.$init$,[this, null]))]);
if (classname == null ) {
return;
} else {
try {
Clazz.forName(classname);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
e.printStackTrace$();
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, ["restoring..."]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_security_IdentityScope',  function (name, scope) {
;C$.superclazz.c$$S$java_security_IdentityScope.apply(this,[name, scope]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSystemScope$',  function () {
if (C$.$scope == null ) {
C$.initializeSystemScope$();
}return C$.$scope;
}, 1);

Clazz.newMeth(C$, 'setSystemScope$java_security_IdentityScope',  function (scope) {
C$.check$S("setSystemScope");
C$.$scope=scope;
}, 1);

Clazz.newMeth(C$, 'getIdentity$java_security_Principal',  function (principal) {
return this.getIdentity$S(principal.getName$());
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[" + this.size$() + "]" ;
});

Clazz.newMeth(C$, 'check$S',  function (directive) {
var security=System.getSecurityManager$();
if (security != null ) {
security.checkSecurityAccess$S(directive);
}}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.jca.GetInstance','java.security.cert.CertPathBuilderSpi','java.security.AccessController','java.security.Security']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertPathBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['algorithm'],'O',['builderSpi','java.security.cert.CertPathBuilderSpi','provider','java.security.Provider']]]

Clazz.newMeth(C$, 'c$$java_security_cert_CertPathBuilderSpi$java_security_Provider$S',  function (builderSpi, provider, algorithm) {
;C$.$init$.apply(this);
this.builderSpi=builderSpi;
this.provider=provider;
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
var instance=$I$(1,"getInstance$S$Class$S",["CertPathBuilder", Clazz.getClass($I$(2)), algorithm]);
return Clazz.new_(C$.c$$java_security_cert_CertPathBuilderSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
var instance=$I$(1,"getInstance$S$Class$S$S",["CertPathBuilder", Clazz.getClass($I$(2)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertPathBuilderSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
var instance=$I$(1,"getInstance$S$Class$S$java_security_Provider",["CertPathBuilder", Clazz.getClass($I$(2)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertPathBuilderSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'build$java_security_cert_CertPathParameters',  function (params) {
return this.builderSpi.engineBuild$java_security_cert_CertPathParameters(params);
});

Clazz.newMeth(C$, 'getDefaultType$',  function () {
var cpbtype=$I$(3,"doPrivileged$java_security_PrivilegedAction",[((P$.CertPathBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CertPathBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(4).getProperty$S("certpathbuilder.type");
});
})()
), Clazz.new_(P$.CertPathBuilder$1.$init$,[this, null]))]);
return (cpbtype == null ) ? "PKIX" : cpbtype;
}, 1);

Clazz.newMeth(C$, 'getRevocationChecker$',  function () {
return this.builderSpi.engineGetRevocationChecker$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

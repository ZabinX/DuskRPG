(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.jca.GetInstance','java.security.cert.CertPathValidatorSpi','java.security.AccessController','java.security.Security']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertPathValidator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['algorithm'],'O',['validatorSpi','java.security.cert.CertPathValidatorSpi','provider','java.security.Provider']]]

Clazz.newMeth(C$, 'c$$java_security_cert_CertPathValidatorSpi$java_security_Provider$S',  function (validatorSpi, provider, algorithm) {
;C$.$init$.apply(this);
this.validatorSpi=validatorSpi;
this.provider=provider;
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
var instance=$I$(1,"getInstance$S$Class$S",["CertPathValidator", Clazz.getClass($I$(2)), algorithm]);
return Clazz.new_(C$.c$$java_security_cert_CertPathValidatorSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
var instance=$I$(1,"getInstance$S$Class$S$S",["CertPathValidator", Clazz.getClass($I$(2)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertPathValidatorSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
var instance=$I$(1,"getInstance$S$Class$S$java_security_Provider",["CertPathValidator", Clazz.getClass($I$(2)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertPathValidatorSpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'validate$java_security_cert_CertPath$java_security_cert_CertPathParameters',  function (certPath, params) {
return this.validatorSpi.engineValidate$java_security_cert_CertPath$java_security_cert_CertPathParameters(certPath, params);
});

Clazz.newMeth(C$, 'getDefaultType$',  function () {
var cpvtype=$I$(3,"doPrivileged$java_security_PrivilegedAction",[((P$.CertPathValidator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CertPathValidator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(4).getProperty$S("certpathvalidator.type");
});
})()
), Clazz.new_(P$.CertPathValidator$1.$init$,[this, null]))]);
return (cpvtype == null ) ? "PKIX" : cpvtype;
}, 1);

Clazz.newMeth(C$, 'getRevocationChecker$',  function () {
return this.validatorSpi.engineGetRevocationChecker$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

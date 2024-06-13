(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.Security','java.security.SecureRandom']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlgorithmParameterGenerator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['algorithm'],'O',['provider','java.security.Provider','paramGenSpi','java.security.AlgorithmParameterGeneratorSpi']]]

Clazz.newMeth(C$, 'c$$java_security_AlgorithmParameterGeneratorSpi$java_security_Provider$S',  function (paramGenSpi, provider, algorithm) {
;C$.$init$.apply(this);
this.paramGenSpi=paramGenSpi;
this.provider=provider;
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
try {
var objs=$I$(1).getImpl$S$S$S(algorithm, "AlgorithmParameterGenerator", null);
return Clazz.new_(C$.c$$java_security_AlgorithmParameterGeneratorSpi$java_security_Provider$S,[objs[0], objs[1], algorithm]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchProviderException")){
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,[algorithm + " not found"]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
if (provider == null  || provider.length$() == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
var objs=$I$(1).getImpl$S$S$S(algorithm, "AlgorithmParameterGenerator", provider);
return Clazz.new_(C$.c$$java_security_AlgorithmParameterGeneratorSpi$java_security_Provider$S,[objs[0], objs[1], algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
if (provider == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
var objs=$I$(1).getImpl$S$S$java_security_Provider(algorithm, "AlgorithmParameterGenerator", provider);
return Clazz.new_(C$.c$$java_security_AlgorithmParameterGeneratorSpi$java_security_Provider$S,[objs[0], objs[1], algorithm]);
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'init$I',  function (size) {
this.paramGenSpi.engineInit$I$java_security_SecureRandom(size, Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'init$I$java_security_SecureRandom',  function (size, random) {
this.paramGenSpi.engineInit$I$java_security_SecureRandom(size, random);
});

Clazz.newMeth(C$, 'init$java_security_spec_AlgorithmParameterSpec',  function (genParamSpec) {
this.paramGenSpi.engineInit$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom(genParamSpec, Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'init$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom',  function (genParamSpec, random) {
this.paramGenSpi.engineInit$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom(genParamSpec, random);
});

Clazz.newMeth(C$, 'generateParameters$',  function () {
return this.paramGenSpi.engineGenerateParameters$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

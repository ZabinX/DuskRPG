(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.security.Security']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlgorithmParameters");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.initialized=false;
},1);

C$.$fields$=[['Z',['initialized'],'S',['algorithm'],'O',['provider','java.security.Provider','paramSpi','java.security.AlgorithmParametersSpi']]]

Clazz.newMeth(C$, 'c$$java_security_AlgorithmParametersSpi$java_security_Provider$S',  function (paramSpi, provider, algorithm) {
;C$.$init$.apply(this);
this.paramSpi=paramSpi;
this.provider=provider;
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
try {
var objs=$I$(1).getImpl$S$S$S(algorithm, "AlgorithmParameters", null);
return Clazz.new_(C$.c$$java_security_AlgorithmParametersSpi$java_security_Provider$S,[objs[0], objs[1], algorithm]);
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
var objs=$I$(1).getImpl$S$S$S(algorithm, "AlgorithmParameters", provider);
return Clazz.new_(C$.c$$java_security_AlgorithmParametersSpi$java_security_Provider$S,[objs[0], objs[1], algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
if (provider == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
var objs=$I$(1).getImpl$S$S$java_security_Provider(algorithm, "AlgorithmParameters", provider);
return Clazz.new_(C$.c$$java_security_AlgorithmParametersSpi$java_security_Provider$S,[objs[0], objs[1], algorithm]);
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'init$java_security_spec_AlgorithmParameterSpec',  function (paramSpec) {
if (this.initialized) throw Clazz.new_(Clazz.load('java.security.spec.InvalidParameterSpecException').c$$S,["already initialized"]);
this.paramSpi.engineInit$java_security_spec_AlgorithmParameterSpec(paramSpec);
this.initialized=true;
});

Clazz.newMeth(C$, 'init$BA',  function (params) {
if (this.initialized) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["already initialized"]);
this.paramSpi.engineInit$BA(params);
this.initialized=true;
});

Clazz.newMeth(C$, 'init$BA$S',  function (params, format) {
if (this.initialized) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["already initialized"]);
this.paramSpi.engineInit$BA$S(params, format);
this.initialized=true;
});

Clazz.newMeth(C$, 'getParameterSpec$Class',  function (paramSpec) {
if (this.initialized == false ) {
throw Clazz.new_(Clazz.load('java.security.spec.InvalidParameterSpecException').c$$S,["not initialized"]);
}return this.paramSpi.engineGetParameterSpec$Class(paramSpec);
});

Clazz.newMeth(C$, 'getEncoded$',  function () {
if (this.initialized == false ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["not initialized"]);
}return this.paramSpi.engineGetEncoded$();
});

Clazz.newMeth(C$, 'getEncoded$S',  function (format) {
if (this.initialized == false ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["not initialized"]);
}return this.paramSpi.engineGetEncoded$S(format);
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.initialized == false ) {
return null;
}return this.paramSpi.engineToString$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

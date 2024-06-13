(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[[0,'java.security.spec.MGF1ParameterSpec']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PSSParameterSpec", null, null, 'java.security.spec.AlgorithmParameterSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mdName="SHA-1";
this.mgfName="MGF1";
this.mgfSpec=$I$(1).SHA1;
this.saltLen=20;
this.trailerField=1;
},1);

C$.$fields$=[['I',['saltLen','trailerField'],'S',['mdName','mgfName'],'O',['mgfSpec','java.security.spec.AlgorithmParameterSpec']]
,['O',['DEFAULT','java.security.spec.PSSParameterSpec']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_security_spec_AlgorithmParameterSpec$I$I',  function (mdName, mgfName, mgfSpec, saltLen, trailerField) {
;C$.$init$.apply(this);
if (mdName == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["digest algorithm is null"]);
}if (mgfName == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["mask generation function algorithm is null"]);
}if (saltLen < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["negative saltLen value: " + saltLen]);
}if (trailerField < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["negative trailerField: " + trailerField]);
}this.mdName=mdName;
this.mgfName=mgfName;
this.mgfSpec=mgfSpec;
this.saltLen=saltLen;
this.trailerField=trailerField;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (saltLen) {
;C$.$init$.apply(this);
if (saltLen < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["negative saltLen value: " + saltLen]);
}this.saltLen=saltLen;
}, 1);

Clazz.newMeth(C$, 'getDigestAlgorithm$',  function () {
return this.mdName;
});

Clazz.newMeth(C$, 'getMGFAlgorithm$',  function () {
return this.mgfName;
});

Clazz.newMeth(C$, 'getMGFParameters$',  function () {
return this.mgfSpec;
});

Clazz.newMeth(C$, 'getSaltLength$',  function () {
return this.saltLen;
});

Clazz.newMeth(C$, 'getTrailerField$',  function () {
return this.trailerField;
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

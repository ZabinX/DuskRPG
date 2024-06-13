(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[[0,'java.security.spec.ECPoint']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ECPublicKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['w','java.security.spec.ECPoint','params','java.security.spec.ECParameterSpec']]]

Clazz.newMeth(C$, 'c$$java_security_spec_ECPoint$java_security_spec_ECParameterSpec',  function (w, params) {
;C$.$init$.apply(this);
if (w == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["w is null"]);
}if (params == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["params is null"]);
}if (w === $I$(1).POINT_INFINITY ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["w is ECPoint.POINT_INFINITY"]);
}this.w=w;
this.params=params;
}, 1);

Clazz.newMeth(C$, 'getW$',  function () {
return this.w;
});

Clazz.newMeth(C$, 'getParams$',  function () {
return this.params;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

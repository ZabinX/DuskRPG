(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,'java.util.Collections','org.glassfish.json.JsonObjectBuilderImpl','org.glassfish.json.JsonArrayBuilderImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonBuilderFactoryImpl", null, null, 'javax.json.JsonBuilderFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['config','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.config=$I$(1).emptyMap$();
}, 1);

Clazz.newMeth(C$, 'createObjectBuilder$',  function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'createArrayBuilder$',  function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getConfigInUse$',  function () {
return this.config;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

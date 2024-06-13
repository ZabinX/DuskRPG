(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,'java.util.Collections','org.glassfish.json.JsonParserImpl','org.glassfish.json.JsonStructureParser']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonParserFactoryImpl", null, null, 'javax.json.stream.JsonParserFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.config=$I$(1).emptyMap$();
},1);

C$.$fields$=[['O',['config','java.util.Map']]]

Clazz.newMeth(C$, 'createParser$java_io_Reader',  function (reader) {
return Clazz.new_($I$(2,1).c$$java_io_Reader,[reader]);
});

Clazz.newMeth(C$, 'createParser$java_io_InputStream',  function ($in) {
return Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in]);
});

Clazz.newMeth(C$, 'createParser$java_io_InputStream$java_nio_charset_Charset',  function ($in, charset) {
return Clazz.new_($I$(2,1).c$$java_io_InputStream$java_nio_charset_Charset,[$in, charset]);
});

Clazz.newMeth(C$, 'createParser$javax_json_JsonArray',  function (array) {
return Clazz.new_($I$(3,1).c$$javax_json_JsonArray,[array]);
});

Clazz.newMeth(C$, 'getConfigInUse$',  function () {
return this.config;
});

Clazz.newMeth(C$, 'createParser$javax_json_JsonObject',  function (object) {
return Clazz.new_($I$(3,1).c$$javax_json_JsonObject,[object]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

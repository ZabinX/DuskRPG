(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,'org.glassfish.json.JsonGeneratorImpl','org.glassfish.json.JsonParserImpl','org.glassfish.json.JsonParserFactoryImpl','org.glassfish.json.JsonGeneratorFactoryImpl','org.glassfish.json.JsonReaderImpl','org.glassfish.json.JsonWriterImpl','org.glassfish.json.JsonWriterFactoryImpl','org.glassfish.json.JsonReaderFactoryImpl','org.glassfish.json.JsonObjectBuilderImpl','org.glassfish.json.JsonArrayBuilderImpl','org.glassfish.json.JsonBuilderFactoryImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonProviderImpl", null, 'javax.json.spi.JsonProvider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createGenerator$java_io_Writer',  function (writer) {
return Clazz.new_($I$(1,1).c$$java_io_Writer,[writer]);
});

Clazz.newMeth(C$, 'createGenerator$java_io_OutputStream',  function (out) {
return Clazz.new_($I$(1,1).c$$java_io_OutputStream,[out]);
});

Clazz.newMeth(C$, 'createParser$java_io_Reader',  function (reader) {
return Clazz.new_($I$(2,1).c$$java_io_Reader,[reader]);
});

Clazz.newMeth(C$, 'createParser$java_io_InputStream',  function ($in) {
return Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in]);
});

Clazz.newMeth(C$, 'createParserFactory$java_util_Map',  function (config) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'createGeneratorFactory$java_util_Map',  function (config) {
return Clazz.new_($I$(4,1).c$$java_util_Map,[config]);
});

Clazz.newMeth(C$, 'createReader$java_io_Reader',  function (reader) {
return Clazz.new_($I$(5,1).c$$java_io_Reader,[reader]);
});

Clazz.newMeth(C$, 'createReader$java_io_InputStream',  function ($in) {
return Clazz.new_($I$(5,1).c$$java_io_InputStream,[$in]);
});

Clazz.newMeth(C$, 'createWriter$java_io_Writer',  function (writer) {
return Clazz.new_($I$(6,1).c$$java_io_Writer,[writer]);
});

Clazz.newMeth(C$, 'createWriter$java_io_OutputStream',  function (out) {
return Clazz.new_($I$(6,1).c$$java_io_OutputStream,[out]);
});

Clazz.newMeth(C$, 'createWriterFactory$java_util_Map',  function (config) {
return Clazz.new_($I$(7,1).c$$java_util_Map,[config]);
});

Clazz.newMeth(C$, 'createReaderFactory$java_util_Map',  function (config) {
return Clazz.new_($I$(8,1));
});

Clazz.newMeth(C$, 'createObjectBuilder$',  function () {
return Clazz.new_($I$(9,1));
});

Clazz.newMeth(C$, 'createArrayBuilder$',  function () {
return Clazz.new_($I$(10,1));
});

Clazz.newMeth(C$, 'createBuilderFactory$java_util_Map',  function (config) {
return Clazz.new_($I$(11,1));
});

Clazz.newMeth(C$, 'isPrettyPrintingEnabled$java_util_Map',  function (config) {
return config.containsKey$O("javax.json.stream.JsonGenerator.prettyPrinting");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

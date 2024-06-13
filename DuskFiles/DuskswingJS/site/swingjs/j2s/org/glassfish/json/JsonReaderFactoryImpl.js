(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,'java.util.Collections','org.glassfish.json.JsonReaderImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonReaderFactoryImpl", null, null, 'javax.json.JsonReaderFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.config=$I$(1).emptyMap$();
},1);

C$.$fields$=[['O',['config','java.util.Map']]]

Clazz.newMeth(C$, 'createReader$java_io_Reader',  function (reader) {
return Clazz.new_($I$(2,1).c$$java_io_Reader,[reader]);
});

Clazz.newMeth(C$, 'createReader$java_io_InputStream',  function ($in) {
return Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in]);
});

Clazz.newMeth(C$, 'createReader$java_io_InputStream$java_nio_charset_Charset',  function ($in, charset) {
return Clazz.new_($I$(2,1).c$$java_io_InputStream$java_nio_charset_Charset,[$in, charset]);
});

Clazz.newMeth(C$, 'getConfigInUse$',  function () {
return this.config;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

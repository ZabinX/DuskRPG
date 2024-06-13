(function(){var P$=Clazz.newPackage("org.glassfish.json"),I$=[[0,'java.nio.charset.Charset','java.util.Collections','org.glassfish.json.JsonProviderImpl','org.glassfish.json.JsonPrettyGeneratorImpl','org.glassfish.json.JsonGeneratorImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonWriterImpl", null, null, 'javax.json.JsonWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['writeDone'],'O',['generator','javax.json.stream.JsonGenerator']]
,['O',['UTF_8','java.nio.charset.Charset']]]

Clazz.newMeth(C$, 'c$$java_io_Writer',  function (writer) {
C$.c$$java_io_Writer$java_util_Map.apply(this, [writer, $I$(2).emptyMap$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$java_util_Map',  function (writer, config) {
;C$.$init$.apply(this);
var prettyPrinting=$I$(3).isPrettyPrintingEnabled$java_util_Map(config);
this.generator=prettyPrinting ? Clazz.new_($I$(4,1).c$$java_io_Writer,[writer]) : Clazz.new_($I$(5,1).c$$java_io_Writer,[writer]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
C$.c$$java_io_OutputStream$java_nio_charset_Charset$java_util_Map.apply(this, [out, C$.UTF_8, $I$(2).emptyMap$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_util_Map',  function (out, config) {
C$.c$$java_io_OutputStream$java_nio_charset_Charset$java_util_Map.apply(this, [out, C$.UTF_8, config]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_nio_charset_Charset$java_util_Map',  function (out, charset, config) {
;C$.$init$.apply(this);
var prettyPrinting=$I$(3).isPrettyPrintingEnabled$java_util_Map(config);
this.generator=prettyPrinting ? Clazz.new_($I$(4,1).c$$java_io_OutputStream$java_nio_charset_Charset,[out, charset]) : Clazz.new_($I$(5,1).c$$java_io_OutputStream$java_nio_charset_Charset,[out, charset]);
}, 1);

Clazz.newMeth(C$, 'writeArray$javax_json_JsonArray',  function (array) {
if (this.writeDone) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["write/writeObject/writeArray/close method is already called."]);
}this.writeDone=true;
this.generator.writeStartArray$();
for (var value, $value = array.iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
this.generator.write$javax_json_JsonValue(value);
}
this.generator.writeEnd$();
});

Clazz.newMeth(C$, 'writeObject$javax_json_JsonObject',  function (object) {
if (this.writeDone) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["write/writeObject/writeArray/close method is already called."]);
}this.writeDone=true;
this.generator.writeStartObject$();
for (var e, $e = object.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
this.generator.write$S$javax_json_JsonValue(e.getKey$(), e.getValue$());
}
this.generator.writeEnd$();
});

Clazz.newMeth(C$, 'write$javax_json_JsonStructure',  function (value) {
if (Clazz.instanceOf(value, "javax.json.JsonArray")) {
this.writeArray$javax_json_JsonArray(value);
} else {
this.writeObject$javax_json_JsonObject(value);
}});

Clazz.newMeth(C$, 'close$',  function () {
this.writeDone=true;
this.generator.close$();
});

C$.$static$=function(){C$.$static$=0;
C$.UTF_8=$I$(1).forName$S("UTF-8");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

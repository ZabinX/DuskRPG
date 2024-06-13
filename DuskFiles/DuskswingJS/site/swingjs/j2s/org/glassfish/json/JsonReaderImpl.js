(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,'java.util.Collections','org.glassfish.json.JsonParserImpl',['javax.json.stream.JsonParser','.Event'],'org.glassfish.json.JsonArrayBuilderImpl','org.glassfish.json.JsonObjectBuilderImpl','java.math.BigDecimal']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonReaderImpl", null, null, 'javax.json.JsonReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['readDone'],'O',['parser','javax.json.stream.JsonParser']]]

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
C$.c$$java_io_Reader$java_util_Map.apply(this, [reader, $I$(1).emptyMap$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$java_util_Map',  function (reader, config) {
;C$.$init$.apply(this);
this.parser=Clazz.new_($I$(2,1).c$$java_io_Reader,[reader]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
C$.c$$java_io_InputStream$java_util_Map.apply(this, [$in, $I$(1).emptyMap$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_util_Map',  function ($in, config) {
;C$.$init$.apply(this);
this.parser=Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_nio_charset_Charset',  function ($in, charset) {
C$.c$$java_io_InputStream$java_nio_charset_Charset$java_util_Map.apply(this, [$in, charset, $I$(1).emptyMap$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_nio_charset_Charset$java_util_Map',  function ($in, charset, config) {
;C$.$init$.apply(this);
this.parser=Clazz.new_($I$(2,1).c$$java_io_InputStream$java_nio_charset_Charset,[$in, charset]);
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
if (this.readDone) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["read/readObject/readArray/close method is already called."]);
}this.readDone=true;
if (this.parser.hasNext$()) {
var e=this.parser.next$();
if (e === $I$(3).START_ARRAY ) {
return p$1.readArray$javax_json_JsonArrayBuilder.apply(this, [Clazz.new_($I$(4,1))]);
} else if (e === $I$(3).START_OBJECT ) {
return p$1.readObject$javax_json_JsonObjectBuilder.apply(this, [Clazz.new_($I$(5,1))]);
} else {
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON, parsing error. Parsing Event=" + e]);
}}throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON, possibly empty stream"]);
});

Clazz.newMeth(C$, 'readObject$',  function () {
if (this.readDone) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["read/readObject/readArray/close method is already called."]);
}this.readDone=true;
if (this.parser.hasNext$()) {
var e=this.parser.next$();
if (e === $I$(3).START_OBJECT ) {
return p$1.readObject$javax_json_JsonObjectBuilder.apply(this, [Clazz.new_($I$(5,1))]);
} else if (e === $I$(3).START_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON object, found JSON array"]);
} else {
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON object, parsing error. Parsing Event=" + e]);
}}throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON object, possibly empty stream"]);
});

Clazz.newMeth(C$, 'readArray$',  function () {
if (this.readDone) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["read/readObject/readArray/close method is already called."]);
}this.readDone=true;
if (this.parser.hasNext$()) {
var e=this.parser.next$();
if (e === $I$(3).START_ARRAY ) {
return p$1.readArray$javax_json_JsonArrayBuilder.apply(this, [Clazz.new_($I$(4,1))]);
} else if (e === $I$(3).START_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON array, found JSON object"]);
} else {
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON array, parsing error. Parsing Event=" + e]);
}}throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot read JSON array, possibly empty stream"]);
});

Clazz.newMeth(C$, 'close$',  function () {
this.readDone=true;
this.parser.close$();
});

Clazz.newMeth(C$, 'readArray$javax_json_JsonArrayBuilder',  function (builder) {
while (this.parser.hasNext$()){
var e=this.parser.next$();
switch (e) {
case $I$(3).START_ARRAY:
var array=p$1.readArray$javax_json_JsonArrayBuilder.apply(this, [Clazz.new_($I$(4,1))]);
builder.add$javax_json_JsonValue(array);
break;
case $I$(3).START_OBJECT:
var object=p$1.readObject$javax_json_JsonObjectBuilder.apply(this, [Clazz.new_($I$(5,1))]);
builder.add$javax_json_JsonValue(object);
break;
case $I$(3).VALUE_STRING:
var string=this.parser.getString$();
builder.add$S(string);
break;
case $I$(3).VALUE_NUMBER:
var bd=Clazz.new_([this.parser.getString$()],$I$(6,1).c$$S);
builder.add$java_math_BigDecimal(bd);
break;
case $I$(3).VALUE_TRUE:
builder.add$Z(true);
break;
case $I$(3).VALUE_FALSE:
builder.add$Z(false);
break;
case $I$(3).VALUE_NULL:
builder.addNull$();
break;
case $I$(3).END_ARRAY:
return builder.build$();
default:
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Internal Error"]);
}
}
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Internal Error"]);
}, p$1);

Clazz.newMeth(C$, 'readObject$javax_json_JsonObjectBuilder',  function (builder) {
var key=null;
while (this.parser.hasNext$()){
var e=this.parser.next$();
switch (e) {
case $I$(3).START_ARRAY:
var array=p$1.readArray$javax_json_JsonArrayBuilder.apply(this, [Clazz.new_($I$(4,1))]);
builder.add$S$javax_json_JsonValue(key, array);
break;
case $I$(3).START_OBJECT:
var object=p$1.readObject$javax_json_JsonObjectBuilder.apply(this, [Clazz.new_($I$(5,1))]);
builder.add$S$javax_json_JsonValue(key, object);
break;
case $I$(3).KEY_NAME:
key=this.parser.getString$();
break;
case $I$(3).VALUE_STRING:
var string=this.parser.getString$();
builder.add$S$S(key, string);
break;
case $I$(3).VALUE_NUMBER:
var bd=Clazz.new_([this.parser.getString$()],$I$(6,1).c$$S);
builder.add$S$java_math_BigDecimal(key, bd);
break;
case $I$(3).VALUE_TRUE:
builder.add$S$Z(key, true);
break;
case $I$(3).VALUE_FALSE:
builder.add$S$Z(key, false);
break;
case $I$(3).VALUE_NULL:
builder.addNull$S(key);
break;
case $I$(3).END_OBJECT:
return builder.build$();
default:
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Internal Error"]);
}
}
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Internal Error"]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

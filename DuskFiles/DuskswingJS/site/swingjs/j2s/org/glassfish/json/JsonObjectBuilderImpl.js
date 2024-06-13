(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,'javax.json.JsonValue',['javax.json.JsonValue','.ValueType'],'java.io.StringWriter','org.glassfish.json.JsonWriterImpl','java.util.LinkedHashMap','org.glassfish.json.JsonStringImpl','org.glassfish.json.JsonNumberImpl',['org.glassfish.json.JsonObjectBuilderImpl','.JsonObjectImpl'],'java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonObjectBuilderImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.json.JsonObjectBuilder');
C$.$classes$=[['JsonObjectImpl',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['valueMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.valueMap=Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'add$S$javax_json_JsonValue',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
p$1.validateValue$O.apply(this, [value]);
this.valueMap.put$O$O(name, value);
return this;
});

Clazz.newMeth(C$, 'add$S$S',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
p$1.validateValue$O.apply(this, [value]);
this.valueMap.put$O$O(name, Clazz.new_($I$(6,1).c$$S,[value]));
return this;
});

Clazz.newMeth(C$, 'add$S$java_math_BigInteger',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
p$1.validateValue$O.apply(this, [value]);
this.valueMap.put$O$O(name, Clazz.new_($I$(7,1).c$$java_math_BigInteger,[value]));
return this;
});

Clazz.newMeth(C$, 'add$S$java_math_BigDecimal',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
p$1.validateValue$O.apply(this, [value]);
this.valueMap.put$O$O(name, Clazz.new_($I$(7,1).c$$java_math_BigDecimal,[value]));
return this;
});

Clazz.newMeth(C$, 'add$S$I',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
this.valueMap.put$O$O(name, Clazz.new_($I$(7,1).c$$I,[value]));
return this;
});

Clazz.newMeth(C$, 'add$S$J',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
this.valueMap.put$O$O(name, Clazz.new_($I$(7,1).c$$J,[value]));
return this;
});

Clazz.newMeth(C$, 'add$S$D',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
this.valueMap.put$O$O(name, Clazz.new_($I$(7,1).c$$D,[value]));
return this;
});

Clazz.newMeth(C$, 'add$S$Z',  function (name, value) {
p$1.validateName$S.apply(this, [name]);
this.valueMap.put$O$O(name, value ? $I$(1).TRUE : $I$(1).FALSE);
return this;
});

Clazz.newMeth(C$, 'addNull$S',  function (name) {
p$1.validateName$S.apply(this, [name]);
this.valueMap.put$O$O(name, $I$(1).NULL);
return this;
});

Clazz.newMeth(C$, 'add$S$javax_json_JsonObjectBuilder',  function (name, builder) {
p$1.validateName$S.apply(this, [name]);
if (builder == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Object builder that is used to create a value in JsonObject\'s name/value pair cannot be null"]);
}this.valueMap.put$O$O(name, builder.build$());
return this;
});

Clazz.newMeth(C$, 'add$S$javax_json_JsonArrayBuilder',  function (name, builder) {
p$1.validateName$S.apply(this, [name]);
if (builder == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Array builder that is used to create a value in JsonObject\'s name/value pair cannot be null"]);
}this.valueMap.put$O$O(name, builder.build$());
return this;
});

Clazz.newMeth(C$, 'build$',  function () {
var snapshot=Clazz.new_($I$(5,1).c$$java_util_Map,[this.valueMap]);
return Clazz.new_([$I$(9).unmodifiableMap$java_util_Map(snapshot)],$I$(8,1).c$$java_util_Map);
});

Clazz.newMeth(C$, 'validateName$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Name in JsonObject\'s name/value pair cannot be null"]);
}}, p$1);

Clazz.newMeth(C$, 'validateValue$O',  function (value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Value in JsonObject\'s name/value pair cannot be null"]);
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonObjectBuilderImpl, "JsonObjectImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractMap', 'javax.json.JsonObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['valueMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_util_Map',  function (valueMap) {
Clazz.super_(C$, this);
this.valueMap=valueMap;
}, 1);

Clazz.newMeth(C$, 'getJsonArray$S',  function (name) {
return this.get$O(name);
});

Clazz.newMeth(C$, 'getJsonObject$S',  function (name) {
return this.get$O(name);
});

Clazz.newMeth(C$, 'getJsonNumber$S',  function (name) {
return this.get$O(name);
});

Clazz.newMeth(C$, 'getJsonString$S',  function (name) {
return this.get$O(name);
});

Clazz.newMeth(C$, 'getString$S',  function (name) {
return this.getJsonString$S(name).getString$();
});

Clazz.newMeth(C$, 'getString$S$S',  function (name, defaultValue) {
try {
return this.getString$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getInt$S',  function (name) {
return this.getJsonNumber$S(name).intValue$();
});

Clazz.newMeth(C$, 'getInt$S$I',  function (name, defaultValue) {
try {
return this.getInt$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getBoolean$S',  function (name) {
var value=this.get$O(name);
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if (value === $I$(1).TRUE ) {
return true;
} else if (value === $I$(1).FALSE ) {
return false;
} else {
throw Clazz.new_(Clazz.load('ClassCastException'));
}});

Clazz.newMeth(C$, 'getBoolean$S$Z',  function (name, defaultValue) {
try {
return this.getBoolean$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isNull$S',  function (name) {
return this.get$O(name).equals$O($I$(1).NULL);
});

Clazz.newMeth(C$, 'getValueType$',  function () {
return $I$(2).OBJECT;
});

Clazz.newMeth(C$, 'entrySet$',  function () {
return this.valueMap.entrySet$();
});

Clazz.newMeth(C$, 'toString',  function () {
var sw=Clazz.new_($I$(3,1));
var jw=Clazz.new_($I$(4,1).c$$java_io_Writer,[sw]);
jw.write$javax_json_JsonStructure(this);
jw.close$();
return sw.toString();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

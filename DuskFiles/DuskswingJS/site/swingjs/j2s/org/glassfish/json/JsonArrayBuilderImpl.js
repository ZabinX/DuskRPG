(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,'javax.json.JsonValue',['javax.json.JsonValue','.ValueType'],'java.io.StringWriter','org.glassfish.json.JsonWriterImpl','java.util.ArrayList','org.glassfish.json.JsonStringImpl','org.glassfish.json.JsonNumberImpl',['org.glassfish.json.JsonArrayBuilderImpl','.JsonArrayImpl'],'java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonArrayBuilderImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.json.JsonArrayBuilder');
C$.$classes$=[['JsonArrayImpl',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['valueList','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.valueList=Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'add$javax_json_JsonValue',  function (value) {
p$1.validateValue$O.apply(this, [value]);
this.valueList.add$O(value);
return this;
});

Clazz.newMeth(C$, 'add$S',  function (value) {
p$1.validateValue$O.apply(this, [value]);
this.valueList.add$O(Clazz.new_($I$(6,1).c$$S,[value]));
return this;
});

Clazz.newMeth(C$, 'add$java_math_BigDecimal',  function (value) {
p$1.validateValue$O.apply(this, [value]);
this.valueList.add$O(Clazz.new_($I$(7,1).c$$java_math_BigDecimal,[value]));
return this;
});

Clazz.newMeth(C$, 'add$java_math_BigInteger',  function (value) {
p$1.validateValue$O.apply(this, [value]);
this.valueList.add$O(Clazz.new_($I$(7,1).c$$java_math_BigInteger,[value]));
return this;
});

Clazz.newMeth(C$, 'add$I',  function (value) {
this.valueList.add$O(Clazz.new_($I$(7,1).c$$I,[value]));
return this;
});

Clazz.newMeth(C$, 'add$J',  function (value) {
this.valueList.add$O(Clazz.new_($I$(7,1).c$$J,[value]));
return this;
});

Clazz.newMeth(C$, 'add$D',  function (value) {
this.valueList.add$O(Clazz.new_($I$(7,1).c$$D,[value]));
return this;
});

Clazz.newMeth(C$, 'add$Z',  function (value) {
this.valueList.add$O(value ? $I$(1).TRUE : $I$(1).FALSE);
return this;
});

Clazz.newMeth(C$, 'addNull$',  function () {
this.valueList.add$O($I$(1).NULL);
return this;
});

Clazz.newMeth(C$, 'add$javax_json_JsonObjectBuilder',  function (builder) {
if (builder == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Object builder that is used to add a value to JSON array cannot be null"]);
}this.valueList.add$O(builder.build$());
return this;
});

Clazz.newMeth(C$, 'add$javax_json_JsonArrayBuilder',  function (builder) {
if (builder == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Array builder that is used to add a value to JSON array cannot be null"]);
}this.valueList.add$O(builder.build$());
return this;
});

Clazz.newMeth(C$, 'build$',  function () {
var snapshot=Clazz.new_($I$(5,1).c$$java_util_Collection,[this.valueList]);
return Clazz.new_([$I$(9).unmodifiableList$java_util_List(snapshot)],$I$(8,1).c$$java_util_List);
});

Clazz.newMeth(C$, 'validateValue$O',  function (value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["JsonArray\'s value cannot be null"]);
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonArrayBuilderImpl, "JsonArrayImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractList', 'javax.json.JsonArray');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['valueList','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List',  function (valueList) {
Clazz.super_(C$, this);
this.valueList=valueList;
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.valueList.size$();
});

Clazz.newMeth(C$, 'getJsonObject$I',  function (index) {
return this.valueList.get$I(index);
});

Clazz.newMeth(C$, 'getJsonArray$I',  function (index) {
return this.valueList.get$I(index);
});

Clazz.newMeth(C$, 'getJsonNumber$I',  function (index) {
return this.valueList.get$I(index);
});

Clazz.newMeth(C$, 'getJsonString$I',  function (index) {
return this.valueList.get$I(index);
});

Clazz.newMeth(C$, 'getValuesAs$Class',  function (clazz) {
return this.valueList;
});

Clazz.newMeth(C$, 'getString$I',  function (index) {
return this.getJsonString$I(index).getString$();
});

Clazz.newMeth(C$, 'getString$I$S',  function (index, defaultValue) {
try {
return this.getString$I(index);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getInt$I',  function (index) {
return this.getJsonNumber$I(index).intValue$();
});

Clazz.newMeth(C$, 'getInt$I$I',  function (index, defaultValue) {
try {
return this.getInt$I(index);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getBoolean$I',  function (index) {
var jsonValue=this.get$I(index);
if (jsonValue === $I$(1).TRUE ) {
return true;
} else if (jsonValue === $I$(1).FALSE ) {
return false;
} else {
throw Clazz.new_(Clazz.load('ClassCastException'));
}});

Clazz.newMeth(C$, 'getBoolean$I$Z',  function (index, defaultValue) {
try {
return this.getBoolean$I(index);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isNull$I',  function (index) {
return this.valueList.get$I(index).equals$O($I$(1).NULL);
});

Clazz.newMeth(C$, 'getValueType$',  function () {
return $I$(2).ARRAY;
});

Clazz.newMeth(C$, 'get$I',  function (index) {
return this.valueList.get$I(index);
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
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

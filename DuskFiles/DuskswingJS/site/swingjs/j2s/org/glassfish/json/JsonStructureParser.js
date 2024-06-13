(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,['org.glassfish.json.JsonStructureParser','.ArrayScope'],['org.glassfish.json.JsonStructureParser','.ObjectScope'],'java.util.ArrayDeque',['javax.json.stream.JsonParser','.Event'],'org.glassfish.json.JsonLocationImpl',['org.glassfish.json.JsonStructureParser','.Scope'],['javax.json.JsonValue','.ValueType']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonStructureParser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.json.stream.JsonParser');
C$.$classes$=[['Scope',1034],['ArrayScope',10],['ObjectScope',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scopeStack=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['current','org.glassfish.json.JsonStructureParser.Scope','state','javax.json.stream.JsonParser.Event','scopeStack','java.util.Deque']]]

Clazz.newMeth(C$, 'c$$javax_json_JsonArray',  function (array) {
;C$.$init$.apply(this);
this.current=Clazz.new_($I$(1,1).c$$javax_json_JsonArray,[array]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_json_JsonObject',  function (object) {
;C$.$init$.apply(this);
this.current=Clazz.new_($I$(2,1).c$$javax_json_JsonObject,[object]);
}, 1);

Clazz.newMeth(C$, 'getString$',  function () {
if (this.state === $I$(4).KEY_NAME ) {
return (this.current).key;
} else if (this.state === $I$(4).VALUE_STRING ) {
return (this.current.getJsonValue$()).getString$();
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getString() can only be called in" + " KEY_NAME or VALUE_STRING states, not in " + this.state ]);
});

Clazz.newMeth(C$, 'isIntegralNumber$',  function () {
if (this.state === $I$(4).VALUE_NUMBER ) {
return (this.current.getJsonValue$()).isIntegral$();
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#isIntegralNumber() can only be called in" + " VALUE_NUMBER state, not in " + this.state ]);
});

Clazz.newMeth(C$, 'getInt$',  function () {
if (this.state === $I$(4).VALUE_NUMBER ) {
return (this.current.getJsonValue$()).intValue$();
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getInt() can only be called in" + " VALUE_NUMBER state, not in " + this.state ]);
});

Clazz.newMeth(C$, 'getLong$',  function () {
if (this.state === $I$(4).VALUE_NUMBER ) {
return (this.current.getJsonValue$()).longValue$();
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getLong() can only be called in" + " VALUE_NUMBER state, not in " + this.state ]);
});

Clazz.newMeth(C$, 'getBigDecimal$',  function () {
if (this.state === $I$(4).VALUE_NUMBER ) {
return (this.current.getJsonValue$()).bigDecimalValue$();
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getBigDecimal() can only be called in" + " VALUE_NUMBER state, not in " + this.state ]);
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return $I$(5).UNKNOWN;
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return !((this.state === $I$(4).END_OBJECT  || this.state === $I$(4).END_ARRAY  ) && this.scopeStack.isEmpty$() );
});

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}p$1.transition.apply(this, []);
return this.state;
});

Clazz.newMeth(C$, 'transition',  function () {
if (this.state == null ) {
this.state=Clazz.instanceOf(this.current, "org.glassfish.json.JsonStructureParser.ArrayScope") ? $I$(4).START_ARRAY : $I$(4).START_OBJECT;
} else {
if (this.state === $I$(4).END_OBJECT  || this.state === $I$(4).END_ARRAY  ) {
this.current=this.scopeStack.pop$();
}if (Clazz.instanceOf(this.current, "org.glassfish.json.JsonStructureParser.ArrayScope")) {
if (this.current.hasNext$()) {
this.current.next$();
this.state=C$.getState$javax_json_JsonValue(this.current.getJsonValue$());
if (this.state === $I$(4).START_ARRAY  || this.state === $I$(4).START_OBJECT  ) {
this.scopeStack.push$O(this.current);
this.current=$I$(6,"createScope$javax_json_JsonValue",[this.current.getJsonValue$()]);
}} else {
this.state=$I$(4).END_ARRAY;
}} else {
if (this.state === $I$(4).KEY_NAME ) {
this.state=C$.getState$javax_json_JsonValue(this.current.getJsonValue$());
if (this.state === $I$(4).START_ARRAY  || this.state === $I$(4).START_OBJECT  ) {
this.scopeStack.push$O(this.current);
this.current=$I$(6,"createScope$javax_json_JsonValue",[this.current.getJsonValue$()]);
}} else {
if (this.current.hasNext$()) {
this.current.next$();
this.state=$I$(4).KEY_NAME;
} else {
this.state=$I$(4).END_OBJECT;
}}}}}, p$1);

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'getState$javax_json_JsonValue',  function (value) {
switch (value.getValueType$()) {
case $I$(7).ARRAY:
return $I$(4).START_ARRAY;
case $I$(7).OBJECT:
return $I$(4).START_OBJECT;
case $I$(7).STRING:
return $I$(4).VALUE_STRING;
case $I$(7).NUMBER:
return $I$(4).VALUE_NUMBER;
case $I$(7).TRUE:
return $I$(4).VALUE_TRUE;
case $I$(7).FALSE:
return $I$(4).VALUE_FALSE;
case $I$(7).NULL:
return $I$(4).VALUE_NULL;
default:
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Unknown value type=" + value.getValueType$()]);
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonStructureParser, "Scope", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createScope$javax_json_JsonValue',  function (value) {
if (Clazz.instanceOf(value, "javax.json.JsonArray")) {
return Clazz.new_($I$(1,1).c$$javax_json_JsonArray,[value]);
} else if (Clazz.instanceOf(value, "javax.json.JsonObject")) {
return Clazz.new_($I$(2,1).c$$javax_json_JsonObject,[value]);
}throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot be called for value=" + value]);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonStructureParser, "ArrayScope", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.glassfish.json.JsonStructureParser','.Scope']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['it','java.util.Iterator','value','javax.json.JsonValue']]]

Clazz.newMeth(C$, 'c$$javax_json_JsonArray',  function (array) {
Clazz.super_(C$, this);
this.it=array.iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
this.value=this.it.next$();
return this.value;
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getJsonValue$',  function () {
return this.value;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonStructureParser, "ObjectScope", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.glassfish.json.JsonStructureParser','.Scope']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['key'],'O',['it','java.util.Iterator','value','javax.json.JsonValue']]]

Clazz.newMeth(C$, 'c$$javax_json_JsonObject',  function (object) {
Clazz.super_(C$, this);
this.it=object.entrySet$().iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
var next=this.it.next$();
this.key=next.getKey$();
this.value=next.getValue$();
return next;
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getJsonValue$',  function () {
return this.value;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

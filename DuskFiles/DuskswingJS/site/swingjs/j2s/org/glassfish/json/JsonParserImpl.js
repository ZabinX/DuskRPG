(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,['org.glassfish.json.JsonParserImpl','.State'],['org.glassfish.json.JsonTokenizer','.JsonToken'],['org.glassfish.json.JsonParserImpl','.ObjectContext'],['javax.json.stream.JsonParser','.Event'],['org.glassfish.json.JsonParserImpl','.ArrayContext'],'java.util.EnumSet','java.util.EnumMap',['org.glassfish.json.JsonParserImpl','.Context'],['org.glassfish.json.JsonParserImpl','.NoneContext'],'java.util.ArrayDeque','org.glassfish.json.JsonTokenizer',['org.glassfish.json.JsonParserImpl','.StateIterator'],'org.glassfish.json.UnicodeDetectingInputStream','java.io.InputStreamReader','java.math.BigDecimal']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonParserImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.json.stream.JsonParser');
C$.$classes$=[['StateIterator',2],['Context',1034],['NoneContext',10],['ObjectContext',10],['ArrayContext',10],['State',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentState=$I$(1).START_DOCUMENT;
this.currentContext=Clazz.new_($I$(9,1).c$$org_glassfish_json_JsonParserImpl,[this]);
this.stack=Clazz.new_($I$(10,1));
},1);

C$.$fields$=[['O',['currentState','org.glassfish.json.JsonParserImpl.State','currentContext','org.glassfish.json.JsonParserImpl.Context','currentEvent','javax.json.stream.JsonParser.Event','stack','java.util.Deque','stateIterator','org.glassfish.json.JsonParserImpl.StateIterator','tokenizer','org.glassfish.json.JsonTokenizer']]]

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
;C$.$init$.apply(this);
this.tokenizer=Clazz.new_($I$(11,1).c$$java_io_Reader,[reader]);
this.stateIterator=Clazz.new_($I$(12,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
;C$.$init$.apply(this);
var uin=Clazz.new_($I$(13,1).c$$java_io_InputStream,[$in]);
this.tokenizer=Clazz.new_([Clazz.new_([uin, uin.getCharset$()],$I$(14,1).c$$java_io_InputStream$java_nio_charset_Charset)],$I$(11,1).c$$java_io_Reader);
this.stateIterator=Clazz.new_($I$(12,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_nio_charset_Charset',  function ($in, encoding) {
;C$.$init$.apply(this);
this.tokenizer=Clazz.new_([Clazz.new_($I$(14,1).c$$java_io_InputStream$java_nio_charset_Charset,[$in, encoding])],$I$(11,1).c$$java_io_Reader);
this.stateIterator=Clazz.new_($I$(12,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'getString$',  function () {
if (this.currentEvent === $I$(4).KEY_NAME  || this.currentEvent === $I$(4).VALUE_STRING   || this.currentEvent === $I$(4).VALUE_NUMBER  ) {
return this.tokenizer.getValue$();
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getString() is valid only " + "KEY_NAME, VALUE_STRING, VALUE_NUMBER parser states. " + "But current parser state is " + this.currentEvent ]);
});

Clazz.newMeth(C$, 'isIntegralNumber$',  function () {
if (this.currentEvent !== $I$(4).VALUE_NUMBER ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#isIntegralNumber() is valid only " + "VALUE_NUMBER parser state. " + "But current parser state is " + this.currentEvent ]);
}var bigDecimal=Clazz.new_([this.tokenizer.getValue$()],$I$(15,1).c$$S);
return bigDecimal.scale$() == 0;
});

Clazz.newMeth(C$, 'getInt$',  function () {
if (this.currentEvent !== $I$(4).VALUE_NUMBER ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getNumberType() is valid only " + "VALUE_NUMBER parser state. " + "But current parser state is " + this.currentEvent ]);
}return Clazz.new_([this.tokenizer.getValue$()],$I$(15,1).c$$S).intValue$();
});

Clazz.newMeth(C$, 'getLong$',  function () {
if (this.currentEvent !== $I$(4).VALUE_NUMBER ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getNumberType() is valid only " + "VALUE_NUMBER parser state. " + "But current parser state is " + this.currentEvent ]);
}return Clazz.new_([this.tokenizer.getValue$()],$I$(15,1).c$$S).longValue$();
});

Clazz.newMeth(C$, 'getBigDecimal$',  function () {
if (this.currentEvent !== $I$(4).VALUE_NUMBER ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["JsonParser#getNumberType() is valid only " + "VALUE_NUMBER parser state. " + "But current parser state is " + this.currentEvent ]);
}return Clazz.new_([this.tokenizer.getValue$()],$I$(15,1).c$$S);
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.tokenizer.getLocation$();
});

Clazz.newMeth(C$, 'getLastCharLocation$',  function () {
return this.tokenizer.getLastCharLocation$();
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.stateIterator.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
return this.stateIterator.next$();
});

Clazz.newMeth(C$, 'close$',  function () {
try {
this.tokenizer.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while closing JSON tokenizer", e]);
} else {
throw e;
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonParserImpl, "StateIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'nextToken',  function () {
try {
return this.b$['org.glassfish.json.JsonParserImpl'].tokenizer.nextToken$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while moving parser to next state", ioe]);
} else {
throw ioe;
}
}
}, p$1);

Clazz.newMeth(C$, 'hasNext$',  function () {
if (this.b$['org.glassfish.json.JsonParserImpl'].stack.isEmpty$() && (this.b$['org.glassfish.json.JsonParserImpl'].currentState === $I$(1).END_ARRAY  || this.b$['org.glassfish.json.JsonParserImpl'].currentState === $I$(1).END_OBJECT  ) ) {
var token=p$1.nextToken.apply(this, []);
if (token !== $I$(2).EOF ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Expected EOF, but got=" + token, this.b$['org.glassfish.json.JsonParserImpl'].getLastCharLocation$.apply(this.b$['org.glassfish.json.JsonParserImpl'], [])]);
}return false;
}return true;
});

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}while (true){
var token=p$1.nextToken.apply(this, []);
this.b$['org.glassfish.json.JsonParserImpl'].currentState=this.b$['org.glassfish.json.JsonParserImpl'].currentContext.getTransition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken(this.b$['org.glassfish.json.JsonParserImpl'].currentState, token);
switch (this.b$['org.glassfish.json.JsonParserImpl'].currentState) {
case $I$(1).START_DOCUMENT:
continue;
case $I$(1).START_OBJECT:
this.b$['org.glassfish.json.JsonParserImpl'].stack.push$O(this.b$['org.glassfish.json.JsonParserImpl'].currentContext);
this.b$['org.glassfish.json.JsonParserImpl'].currentContext=Clazz.new_($I$(3,1).c$$org_glassfish_json_JsonParserImpl,[this.b$['org.glassfish.json.JsonParserImpl']]);
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).START_OBJECT;
case $I$(1).KEY:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).KEY_NAME;
case $I$(1).COLON:
continue;
case $I$(1).OBJECT_STRING:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_STRING;
case $I$(1).OBJECT_NUMBER:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_NUMBER;
case $I$(1).OBJECT_TRUE:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_TRUE;
case $I$(1).OBJECT_FALSE:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_FALSE;
case $I$(1).OBJECT_NULL:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_NULL;
case $I$(1).OBJECT_COMMA:
continue;
case $I$(1).END_OBJECT:
this.b$['org.glassfish.json.JsonParserImpl'].currentContext=this.b$['org.glassfish.json.JsonParserImpl'].stack.pop$();
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).END_OBJECT;
case $I$(1).START_ARRAY:
this.b$['org.glassfish.json.JsonParserImpl'].stack.push$O(this.b$['org.glassfish.json.JsonParserImpl'].currentContext);
this.b$['org.glassfish.json.JsonParserImpl'].currentContext=Clazz.new_($I$(5,1).c$$org_glassfish_json_JsonParserImpl,[this.b$['org.glassfish.json.JsonParserImpl']]);
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).START_ARRAY;
case $I$(1).ARRAY_STRING:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_STRING;
case $I$(1).ARRAY_NUMBER:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_NUMBER;
case $I$(1).ARRAY_TRUE:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_TRUE;
case $I$(1).ARRAY_FALSE:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_FALSE;
case $I$(1).ARRAY_NULL:
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).VALUE_NULL;
case $I$(1).ARRAY_COMMA:
continue;
case $I$(1).END_ARRAY:
this.b$['org.glassfish.json.JsonParserImpl'].currentContext=this.b$['org.glassfish.json.JsonParserImpl'].stack.pop$();
return this.b$['org.glassfish.json.JsonParserImpl'].currentEvent=$I$(4).END_ARRAY;
case $I$(1).END_DOCUMENT:
break;
}
}
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonParserImpl, "Context", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parser','org.glassfish.json.JsonParserImpl']]]

Clazz.newMeth(C$, 'c$$org_glassfish_json_JsonParserImpl',  function (parser) {
;C$.$init$.apply(this);
this.parser=parser;
}, 1);

Clazz.newMeth(C$, 'getTransition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken',  function (current, token) {
var state=this.getTransitions$()[current.ordinal$()][token.ordinal$()];
if (state === $I$(1).INVALID ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Invalid token " + token + " at " + this.parser.getLastCharLocation$() + ", " + "Expected Tokens " + this.getExpectedTokens$().get$O(current) , this.parser.getLastCharLocation$()]);
}return state;
});

Clazz.newMeth(C$, 'transition$org_glassfish_json_JsonParserImpl_StateAA$java_util_EnumMap$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State',  function (TRANSITIONS, EXPECTED_TOKENS, current, token, next) {
TRANSITIONS[current.ordinal$()][token.ordinal$()]=next;
var allowed=EXPECTED_TOKENS.get$O(current);
if (allowed == null ) {
allowed=$I$(6,"noneOf$Class",[Clazz.getClass($I$(2))]);
EXPECTED_TOKENS.put$Enum$O(current, allowed);
}allowed.add$O(token);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonParserImpl, "NoneContext", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.glassfish.json.JsonParserImpl','.Context']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['TRANSITIONS','org.glassfish.json.JsonParserImpl.State[][]','EXPECTED_TOKENS','java.util.EnumMap']]]

Clazz.newMeth(C$, 'c$$org_glassfish_json_JsonParserImpl',  function (parser) {
;C$.superclazz.c$$org_glassfish_json_JsonParserImpl.apply(this,[parser]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTransitions$',  function () {
return C$.TRANSITIONS;
});

Clazz.newMeth(C$, 'getExpectedTokens$',  function () {
return C$.EXPECTED_TOKENS;
});

Clazz.newMeth(C$, 'transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State',  function (current, token, next) {
$I$(8).transition$org_glassfish_json_JsonParserImpl_StateAA$java_util_EnumMap$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State(C$.TRANSITIONS, C$.EXPECTED_TOKENS, current, token, next);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.TRANSITIONS=Clazz.array($I$(1), [$I$(1).values$().length, $I$(2).values$().length]);
C$.EXPECTED_TOKENS=Clazz.new_([Clazz.getClass($I$(1))],$I$(7,1).c$$Class);
{
for (var i=0; i < C$.TRANSITIONS.length; i++) {
for (var j=0; j < C$.TRANSITIONS[i].length; j++) {
C$.TRANSITIONS[i][j]=$I$(1).INVALID;
}
}
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_DOCUMENT, $I$(2).CURLYOPEN, $I$(1).START_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_DOCUMENT, $I$(2).SQUAREOPEN, $I$(1).START_ARRAY);
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonParserImpl, "ObjectContext", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.glassfish.json.JsonParserImpl','.Context']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['TRANSITIONS','org.glassfish.json.JsonParserImpl.State[][]','EXPECTED_TOKENS','java.util.EnumMap']]]

Clazz.newMeth(C$, 'c$$org_glassfish_json_JsonParserImpl',  function (parser) {
;C$.superclazz.c$$org_glassfish_json_JsonParserImpl.apply(this,[parser]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State',  function (current, token, next) {
$I$(8).transition$org_glassfish_json_JsonParserImpl_StateAA$java_util_EnumMap$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State(C$.TRANSITIONS, C$.EXPECTED_TOKENS, current, token, next);
}, 1);

Clazz.newMeth(C$, 'getTransitions$',  function () {
return C$.TRANSITIONS;
});

Clazz.newMeth(C$, 'getExpectedTokens$',  function () {
return C$.EXPECTED_TOKENS;
});

C$.$static$=function(){C$.$static$=0;
C$.TRANSITIONS=Clazz.array($I$(1), [$I$(1).values$().length, $I$(2).values$().length]);
C$.EXPECTED_TOKENS=Clazz.new_([Clazz.getClass($I$(1))],$I$(7,1).c$$Class);
{
for (var i=0; i < C$.TRANSITIONS.length; i++) {
for (var j=0; j < C$.TRANSITIONS[i].length; j++) {
C$.TRANSITIONS[i][j]=$I$(1).INVALID;
}
}
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_OBJECT, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_OBJECT, $I$(2).STRING, $I$(1).KEY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).KEY, $I$(2).COLON, $I$(1).COLON);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).COLON, $I$(2).STRING, $I$(1).OBJECT_STRING);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).COLON, $I$(2).NUMBER, $I$(1).OBJECT_NUMBER);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).COLON, $I$(2).TRUE, $I$(1).OBJECT_TRUE);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).COLON, $I$(2).FALSE, $I$(1).OBJECT_FALSE);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).COLON, $I$(2).NULL, $I$(1).OBJECT_NULL);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).COLON, $I$(2).CURLYOPEN, $I$(1).START_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).COLON, $I$(2).SQUAREOPEN, $I$(1).START_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_STRING, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_STRING, $I$(2).COMMA, $I$(1).OBJECT_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_NUMBER, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_NUMBER, $I$(2).COMMA, $I$(1).OBJECT_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_TRUE, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_TRUE, $I$(2).COMMA, $I$(1).OBJECT_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_FALSE, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_FALSE, $I$(2).COMMA, $I$(1).OBJECT_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_NULL, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_NULL, $I$(2).COMMA, $I$(1).OBJECT_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).OBJECT_COMMA, $I$(2).STRING, $I$(1).KEY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_OBJECT, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_OBJECT, $I$(2).COMMA, $I$(1).OBJECT_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_OBJECT, $I$(2).EOF, $I$(1).END_DOCUMENT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_ARRAY, $I$(2).COMMA, $I$(1).OBJECT_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_ARRAY, $I$(2).CURLYCLOSE, $I$(1).END_OBJECT);
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonParserImpl, "ArrayContext", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.glassfish.json.JsonParserImpl','.Context']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['TRANSITIONS','org.glassfish.json.JsonParserImpl.State[][]','EXPECTED_TOKENS','java.util.EnumMap']]]

Clazz.newMeth(C$, 'c$$org_glassfish_json_JsonParserImpl',  function (parser) {
;C$.superclazz.c$$org_glassfish_json_JsonParserImpl.apply(this,[parser]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State',  function (current, token, next) {
$I$(8).transition$org_glassfish_json_JsonParserImpl_StateAA$java_util_EnumMap$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State(C$.TRANSITIONS, C$.EXPECTED_TOKENS, current, token, next);
}, 1);

Clazz.newMeth(C$, 'getTransitions$',  function () {
return C$.TRANSITIONS;
});

Clazz.newMeth(C$, 'getExpectedTokens$',  function () {
return C$.EXPECTED_TOKENS;
});

C$.$static$=function(){C$.$static$=0;
C$.TRANSITIONS=Clazz.array($I$(1), [$I$(1).values$().length, $I$(2).values$().length]);
C$.EXPECTED_TOKENS=Clazz.new_([Clazz.getClass($I$(1))],$I$(7,1).c$$Class);
{
for (var i=0; i < C$.TRANSITIONS.length; i++) {
for (var j=0; j < C$.TRANSITIONS[i].length; j++) {
C$.TRANSITIONS[i][j]=$I$(1).INVALID;
}
}
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).STRING, $I$(1).ARRAY_STRING);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).NUMBER, $I$(1).ARRAY_NUMBER);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).TRUE, $I$(1).ARRAY_TRUE);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).FALSE, $I$(1).ARRAY_FALSE);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).NULL, $I$(1).ARRAY_NULL);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).CURLYOPEN, $I$(1).START_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).SQUAREOPEN, $I$(1).START_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).START_ARRAY, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_STRING, $I$(2).COMMA, $I$(1).ARRAY_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_STRING, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_NUMBER, $I$(2).COMMA, $I$(1).ARRAY_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_NUMBER, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_TRUE, $I$(2).COMMA, $I$(1).ARRAY_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_TRUE, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_FALSE, $I$(2).COMMA, $I$(1).ARRAY_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_FALSE, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_NULL, $I$(2).COMMA, $I$(1).ARRAY_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_NULL, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_COMMA, $I$(2).STRING, $I$(1).ARRAY_STRING);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_COMMA, $I$(2).NUMBER, $I$(1).ARRAY_NUMBER);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_COMMA, $I$(2).TRUE, $I$(1).ARRAY_TRUE);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_COMMA, $I$(2).FALSE, $I$(1).ARRAY_FALSE);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_COMMA, $I$(2).NULL, $I$(1).ARRAY_NULL);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_COMMA, $I$(2).CURLYOPEN, $I$(1).START_OBJECT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).ARRAY_COMMA, $I$(2).SQUAREOPEN, $I$(1).START_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_ARRAY, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_ARRAY, $I$(2).COMMA, $I$(1).ARRAY_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_ARRAY, $I$(2).EOF, $I$(1).END_DOCUMENT);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_OBJECT, $I$(2).COMMA, $I$(1).ARRAY_COMMA);
C$.transition$org_glassfish_json_JsonParserImpl_State$org_glassfish_json_JsonTokenizer_JsonToken$org_glassfish_json_JsonParserImpl_State($I$(1).END_OBJECT, $I$(2).SQUARECLOSE, $I$(1).END_ARRAY);
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.JsonParserImpl, "State", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "INVALID", 0, []);
Clazz.newEnumConst($vals, C$.c$, "START_DOCUMENT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "START_OBJECT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "KEY", 3, []);
Clazz.newEnumConst($vals, C$.c$, "COLON", 4, []);
Clazz.newEnumConst($vals, C$.c$, "OBJECT_STRING", 5, []);
Clazz.newEnumConst($vals, C$.c$, "OBJECT_NUMBER", 6, []);
Clazz.newEnumConst($vals, C$.c$, "OBJECT_TRUE", 7, []);
Clazz.newEnumConst($vals, C$.c$, "OBJECT_FALSE", 8, []);
Clazz.newEnumConst($vals, C$.c$, "OBJECT_NULL", 9, []);
Clazz.newEnumConst($vals, C$.c$, "OBJECT_COMMA", 10, []);
Clazz.newEnumConst($vals, C$.c$, "END_OBJECT", 11, []);
Clazz.newEnumConst($vals, C$.c$, "START_ARRAY", 12, []);
Clazz.newEnumConst($vals, C$.c$, "ARRAY_STRING", 13, []);
Clazz.newEnumConst($vals, C$.c$, "ARRAY_NUMBER", 14, []);
Clazz.newEnumConst($vals, C$.c$, "ARRAY_TRUE", 15, []);
Clazz.newEnumConst($vals, C$.c$, "ARRAY_FALSE", 16, []);
Clazz.newEnumConst($vals, C$.c$, "ARRAY_NULL", 17, []);
Clazz.newEnumConst($vals, C$.c$, "ARRAY_COMMA", 18, []);
Clazz.newEnumConst($vals, C$.c$, "END_ARRAY", 19, []);
Clazz.newEnumConst($vals, C$.c$, "END_DOCUMENT", 20, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

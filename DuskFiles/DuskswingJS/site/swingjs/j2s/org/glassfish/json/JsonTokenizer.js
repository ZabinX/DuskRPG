(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,'java.io.BufferedReader','java.util.Arrays',['org.glassfish.json.JsonTokenizer','.DirectReader'],['org.glassfish.json.JsonTokenizer','.JsonToken'],'org.glassfish.json.JsonLocationImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonTokenizer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Closeable');
C$.$classes$=[['JsonToken',24],['TokenizerReader',10],['DirectReader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineNo=1;
this.columnNo=1;
this.streamOffset=0;
},1);

C$.$fields$=[['Z',['unread'],'I',['prevChar'],'J',['lineNo','columnNo','streamOffset'],'O',['reader','org.glassfish.json.JsonTokenizer.TokenizerReader']]]

Clazz.newMeth(C$, 'close$',  function () {
this.reader.close$();
});

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
;C$.$init$.apply(this);
this.reader=Clazz.new_($I$(3,1).c$$java_io_Reader,[reader]);
}, 1);

Clazz.newMeth(C$, 'read',  function () {
var ch;
if (this.unread) {
this.unread=false;
ch=this.prevChar;
} else {
ch=this.reader.readChar$();
}if (ch == 13  || (this.prevChar != 13  && ch == 10  ) ) {
(this.lineNo=Long.$inc(this.lineNo,1));
this.columnNo=1;
} else if (this.prevChar != 13  || ch != 10  ) {
(this.columnNo=Long.$inc(this.columnNo,1));
}(this.streamOffset=Long.$inc(this.streamOffset,1));
this.prevChar=ch;
return ch;
}, p$1);

Clazz.newMeth(C$, 'store$C',  function (ch) {
this.reader.storeChar$I(ch.$c());
}, p$1);

Clazz.newMeth(C$, 'unread$I',  function (ch) {
this.prevChar=ch;
this.unread=true;
(this.streamOffset=Long.$inc(this.streamOffset,-1));
(this.columnNo=Long.$inc(this.columnNo,-1));
}, p$1);

Clazz.newMeth(C$, 'readString',  function () {
var ch;
do {
ch=p$1.read.apply(this, []);
switch (ch) {
case -1:
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Unexpected EOF"]);
case 92:
var ch2=p$1.read.apply(this, []);
switch (ch2) {
case 98:
p$1.store$C.apply(this, ["\u0008"]);
break;
case 116:
p$1.store$C.apply(this, ["\t"]);
break;
case 110:
p$1.store$C.apply(this, ["\n"]);
break;
case 102:
p$1.store$C.apply(this, ["\f"]);
break;
case 114:
p$1.store$C.apply(this, ["\r"]);
break;
case 34:
case 92:
case 47:
p$1.store$C.apply(this, [String.fromCharCode(ch2)]);
break;
case 117:
{
var unicode=String.fromCharCode(0);
for (var i=0; i < 4; i++) {
var ch3=p$1.read.apply(this, []);
unicode = String.fromCharCode(unicode.$c()<< 4);
if (ch3 >= 48  && ch3 <= 57  ) {
unicode = String.fromCharCode(unicode.$c()| (((String.fromCharCode(ch3)).$c()) - 48));
} else if (ch3 >= 97  && ch3 <= 102  ) {
unicode = String.fromCharCode(unicode.$c()| ((((String.fromCharCode(ch3)).$c()) - 97) + 10));
} else if (ch3 >= 65  && ch3 <= 70  ) {
unicode = String.fromCharCode(unicode.$c()| ((((String.fromCharCode(ch3)).$c()) - 65) + 10));
} else {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch3, this.getLastCharLocation$()]);
}}
p$1.store$C.apply(this, [String.fromCharCode((unicode.$c() & 65535))]);
break;
}default:
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch2, this.getLastCharLocation$()]);
}
break;
case 34:
break;
default:
if ((ch >= 0 && ch <= 31 ) || (ch >= 127 && ch <= 159 ) ) {
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Unexpected Char=" + ch]);
}p$1.store$C.apply(this, [String.fromCharCode(ch)]);
}
} while (ch != 34 );
}, p$1);

Clazz.newMeth(C$, 'readNumber$I',  function (ch) {
if (ch == 45 ) {
p$1.store$C.apply(this, [String.fromCharCode(ch)]);
ch=p$1.read.apply(this, []);
if (ch < 48  || ch > 57  ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch, this.getLastCharLocation$()]);
}}if (ch == 48 ) {
p$1.store$C.apply(this, [String.fromCharCode(ch)]);
ch=p$1.read.apply(this, []);
} else {
do {
p$1.store$C.apply(this, [String.fromCharCode(ch)]);
ch=p$1.read.apply(this, []);
} while (ch >= 48  && ch <= 57  );
}if (ch == 46 ) {
var count=0;
do {
p$1.store$C.apply(this, [String.fromCharCode(ch)]);
ch=p$1.read.apply(this, []);
++count;
} while (ch >= 48  && ch <= 57  );
if (count == 1) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch, this.getLastCharLocation$()]);
}}if (ch == 101  || ch == 69  ) {
p$1.store$C.apply(this, [String.fromCharCode(ch)]);
ch=p$1.read.apply(this, []);
if (ch == 43  || ch == 45  ) {
p$1.store$C.apply(this, [String.fromCharCode(ch)]);
ch=p$1.read.apply(this, []);
}var count;
for (count=0; ch >= 48  && ch <= 57  ; count++) {
p$1.store$C.apply(this, [String.fromCharCode(ch)]);
ch=p$1.read.apply(this, []);
}
if (count == 0) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch, this.getLastCharLocation$()]);
}}p$1.unread$I.apply(this, [ch]);
}, p$1);

Clazz.newMeth(C$, 'readTrue',  function () {
var ch1=String.fromCharCode(p$1.read.apply(this, []));
if (ch1 != "r") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch1 + " expecting 'r'" , this.getLastCharLocation$()]);
}var ch2=String.fromCharCode(p$1.read.apply(this, []));
if (ch2 != "u") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch2 + " expecting 'u'" , this.getLastCharLocation$()]);
}var ch3=String.fromCharCode(p$1.read.apply(this, []));
if (ch3 != "e") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch3 + " expecting 'e'" , this.getLastCharLocation$()]);
}}, p$1);

Clazz.newMeth(C$, 'readFalse',  function () {
var ch1=String.fromCharCode(p$1.read.apply(this, []));
if (ch1 != "a") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch1 + " expecting 'a'" , this.getLastCharLocation$()]);
}var ch2=String.fromCharCode(p$1.read.apply(this, []));
if (ch2 != "l") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch2 + " expecting 'l'" , this.getLastCharLocation$()]);
}var ch3=String.fromCharCode(p$1.read.apply(this, []));
if (ch3 != "s") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch3 + " expecting 's'" , this.getLastCharLocation$()]);
}var ch4=String.fromCharCode(p$1.read.apply(this, []));
if (ch4 != "e") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch4 + " expecting 'e'" , this.getLastCharLocation$()]);
}}, p$1);

Clazz.newMeth(C$, 'readNull',  function () {
var ch1=String.fromCharCode(p$1.read.apply(this, []));
if (ch1 != "u") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch1 + " expecting 'u'" , this.getLastCharLocation$()]);
}var ch2=String.fromCharCode(p$1.read.apply(this, []));
if (ch2 != "l") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch2 + " expecting 'l'" , this.getLastCharLocation$()]);
}var ch3=String.fromCharCode(p$1.read.apply(this, []));
if (ch3 != "l") {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected Char=" + ch3 + " expecting 'l'" , this.getLastCharLocation$()]);
}}, p$1);

Clazz.newMeth(C$, 'nextToken$',  function () {
this.reader.reset$();
var ch=p$1.read.apply(this, []);
while (ch == 32 || ch == 9  || ch == 10  || ch == 13 ){
ch=p$1.read.apply(this, []);
}
switch (ch) {
case -1:
return $I$(4).EOF;
case 123:
return $I$(4).CURLYOPEN;
case 91:
return $I$(4).SQUAREOPEN;
case 58:
return $I$(4).COLON;
case 44:
return $I$(4).COMMA;
case 34:
p$1.readString.apply(this, []);
return $I$(4).STRING;
case 45:
p$1.readNumber$I.apply(this, [ch]);
return $I$(4).NUMBER;
case 116:
p$1.readTrue.apply(this, []);
return $I$(4).TRUE;
case 102:
p$1.readFalse.apply(this, []);
return $I$(4).FALSE;
case 110:
p$1.readNull.apply(this, []);
return $I$(4).NULL;
case 93:
return $I$(4).SQUARECLOSE;
case 125:
return $I$(4).CURLYCLOSE;
default:
if (ch >= 48  && ch <= 57  ) {
p$1.readNumber$I.apply(this, [ch]);
return $I$(4).NUMBER;
}throw Clazz.new_(Clazz.load('javax.json.stream.JsonParsingException').c$$S$javax_json_stream_JsonLocation,["Unexpected char=" + String.fromCharCode(ch), this.getLastCharLocation$()]);
}
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.reader.getValue$();
});

Clazz.newMeth(C$, 'getLastCharLocation$',  function () {
return Clazz.new_([this.lineNo, Long.$sub(this.columnNo,1), Long.$sub(this.streamOffset,1)],$I$(5,1).c$$J$J$J);
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return Clazz.new_($I$(5,1).c$$J$J$J,[this.lineNo, this.columnNo, this.streamOffset]);
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.JsonTokenizer, "JsonToken", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CURLYOPEN", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SQUAREOPEN", 1, []);
Clazz.newEnumConst($vals, C$.c$, "COLON", 2, []);
Clazz.newEnumConst($vals, C$.c$, "COMMA", 3, []);
Clazz.newEnumConst($vals, C$.c$, "STRING", 4, []);
Clazz.newEnumConst($vals, C$.c$, "NUMBER", 5, []);
Clazz.newEnumConst($vals, C$.c$, "TRUE", 6, []);
Clazz.newEnumConst($vals, C$.c$, "FALSE", 7, []);
Clazz.newEnumConst($vals, C$.c$, "NULL", 8, []);
Clazz.newEnumConst($vals, C$.c$, "CURLYCLOSE", 9, []);
Clazz.newEnumConst($vals, C$.c$, "SQUARECLOSE", 10, []);
Clazz.newEnumConst($vals, C$.c$, "EOF", 11, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JsonTokenizer, "TokenizerReader", function(){
}, null, 'java.io.Closeable');

C$.$clinit$=2;
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonTokenizer, "DirectReader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.glassfish.json.JsonTokenizer','org.glassfish.json.JsonTokenizer.TokenizerReader']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buf=Clazz.array(Character.TYPE, [8192]);
},1);

C$.$fields$=[['I',['len'],'S',['value'],'O',['reader','java.io.Reader','buf','char[]']]]

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
;C$.$init$.apply(this);
if (!(Clazz.instanceOf(reader, "java.io.BufferedReader"))) {
reader=Clazz.new_($I$(1,1).c$$java_io_Reader,[reader]);
}this.reader=reader;
}, 1);

Clazz.newMeth(C$, 'readChar$',  function () {
try {
return this.reader.read$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while tokenizing JSON", ioe]);
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'storeChar$I',  function (ch) {
if (this.len == this.buf.length) {
this.buf=$I$(2).copyOf$CA$I(this.buf, 2 * this.buf.length);
}this.buf[this.len++]=String.fromCharCode(ch);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.len=0;
this.value=null;
});

Clazz.newMeth(C$, 'getValue$',  function () {
if (this.value == null ) {
this.value= String.instantialize(this.buf, 0, this.len);
}return this.value;
});

Clazz.newMeth(C$, 'close$',  function () {
this.reader.close$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

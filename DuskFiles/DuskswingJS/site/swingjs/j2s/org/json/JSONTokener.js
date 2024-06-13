(function(){var P$=Clazz.newPackage("org.json"),p$1={},I$=[[0,'java.io.BufferedReader','java.io.InputStreamReader','java.io.StringReader','StringBuilder','org.json.JSONObject','org.json.JSONArray']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONTokener");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['eof','usePrevious'],'C',['previous'],'J',['character','index','line','characterPreviousLine'],'O',['reader','java.io.Reader']]]

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
;C$.$init$.apply(this);
this.reader=reader.markSupported$() ? reader : Clazz.new_($I$(1,1).c$$java_io_Reader,[reader]);
this.eof=false;
this.usePrevious=false;
this.previous=String.fromCharCode(0);
this.index=0;
this.character=1;
this.characterPreviousLine=0;
this.line=1;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (inputStream) {
C$.c$$java_io_Reader.apply(this, [Clazz.new_($I$(2,1).c$$java_io_InputStream,[inputStream])]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (s) {
C$.c$$java_io_Reader.apply(this, [Clazz.new_($I$(3,1).c$$S,[s])]);
}, 1);

Clazz.newMeth(C$, 'back$',  function () {
if (this.usePrevious || Long.$le(this.index,0 ) ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Stepping back two steps is not supported"]);
}p$1.decrementIndexes.apply(this, []);
this.usePrevious=true;
this.eof=false;
});

Clazz.newMeth(C$, 'decrementIndexes',  function () {
(this.index=Long.$inc(this.index,-1));
if (this.previous == "\r" || this.previous == "\n" ) {
(this.line=Long.$inc(this.line,-1));
this.character=this.characterPreviousLine;
} else if (Long.$gt(this.character,0 )) {
(this.character=Long.$inc(this.character,-1));
}}, p$1);

Clazz.newMeth(C$, 'dehexchar$C',  function (c) {
if (c >= "0" && c <= "9" ) {
return c.$c() - 48;
}if (c >= "A" && c <= "F" ) {
return c.$c() - (55);
}if (c >= "a" && c <= "f" ) {
return c.$c() - (87);
}return -1;
}, 1);

Clazz.newMeth(C$, 'end$',  function () {
return this.eof && !this.usePrevious ;
});

Clazz.newMeth(C$, 'more$',  function () {
if (this.usePrevious) {
return true;
}try {
this.reader.mark$I(1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["Unable to preserve stream position", e]);
} else {
throw e;
}
}
try {
if (this.reader.read$() <= 0) {
this.eof=true;
return false;
}this.reader.reset$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["Unable to read the next character from the stream", e]);
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'next$',  function () {
var c;
if (this.usePrevious) {
this.usePrevious=false;
c=this.previous.$c();
} else {
try {
c=this.reader.read$();
} catch (exception) {
if (Clazz.exceptionOf(exception,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[exception]);
} else {
throw exception;
}
}
}if (c <= 0) {
this.eof=true;
return String.fromCharCode(0);
}p$1.incrementIndexes$I.apply(this, [c]);
this.previous=String.fromCharCode(c);
return this.previous;
});

Clazz.newMeth(C$, 'incrementIndexes$I',  function (c) {
if (c > 0) {
(this.index=Long.$inc(this.index,1));
if (c == 13 ) {
(this.line=Long.$inc(this.line,1));
this.characterPreviousLine=this.character;
this.character=0;
} else if (c == 10 ) {
if (this.previous != "\r") {
(this.line=Long.$inc(this.line,1));
this.characterPreviousLine=this.character;
}this.character=0;
} else {
(this.character=Long.$inc(this.character,1));
}}}, p$1);

Clazz.newMeth(C$, 'next$C',  function (c) {
var n=this.next$();
if (n != c) {
if (n.$c() > 0 ) {
throw this.syntaxError$S("Expected '" + c + "' and instead saw '" + n + "'" );
}throw this.syntaxError$S("Expected '" + c + "' and instead saw ''" );
}return n;
});

Clazz.newMeth(C$, 'next$I',  function (n) {
if (n == 0) {
return "";
}var chars=Clazz.array(Character.TYPE, [n]);
var pos=0;
while (pos < n){
chars[pos]=this.next$();
if (this.end$()) {
throw this.syntaxError$S("Substring bounds error");
}pos+=1;
}
return  String.instantialize(chars);
});

Clazz.newMeth(C$, 'nextClean$',  function () {
for (; ; ) {
var c=this.next$();
if (c.$c() == 0  || c > " " ) {
return c;
}}
});

Clazz.newMeth(C$, 'nextString$C',  function (quote) {
var c;
var sb=Clazz.new_($I$(4,1));
for (; ; ) {
c=this.next$();
switch (c.$c()) {
case 0:
case 10:
case 13:
throw this.syntaxError$S("Unterminated string");
case 92:
c=this.next$();
switch (c.$c()) {
case 98:
sb.append$C("\u0008");
break;
case 116:
sb.append$C("\t");
break;
case 110:
sb.append$C("\n");
break;
case 102:
sb.append$C("\f");
break;
case 114:
sb.append$C("\r");
break;
case 117:
try {
sb.append$C(String.fromCharCode(Integer.parseInt$S$I(this.next$I(4), 16)));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw this.syntaxError$S$Throwable("Illegal escape.", e);
} else {
throw e;
}
}
break;
case 34:
case 39:
case 92:
case 47:
sb.append$C(c);
break;
default:
throw this.syntaxError$S("Illegal escape.");
}
break;
default:
if (c == quote) {
return sb.toString();
}sb.append$C(c);
}
}
});

Clazz.newMeth(C$, 'nextTo$C',  function (delimiter) {
var sb=Clazz.new_($I$(4,1));
for (; ; ) {
var c=this.next$();
if (c == delimiter || c.$c() == 0   || c == "\n"  || c == "\r" ) {
if (c.$c() != 0 ) {
this.back$();
}return sb.toString().trim$();
}sb.append$C(c);
}
});

Clazz.newMeth(C$, 'nextTo$S',  function (delimiters) {
var c;
var sb=Clazz.new_($I$(4,1));
for (; ; ) {
c=this.next$();
if (delimiters.indexOf$I(c) >= 0 || c.$c() == 0   || c == "\n"  || c == "\r" ) {
if (c.$c() != 0 ) {
this.back$();
}return sb.toString().trim$();
}sb.append$C(c);
}
});

Clazz.newMeth(C$, 'nextValue$',  function () {
var c=this.nextClean$();
var string;
switch (c.$c()) {
case 34:
case 39:
return this.nextString$C(c);
case 123:
this.back$();
return Clazz.new_($I$(5,1).c$$org_json_JSONTokener,[this]);
case 91:
this.back$();
return Clazz.new_($I$(6,1).c$$org_json_JSONTokener,[this]);
}
var sb=Clazz.new_($I$(4,1));
while (c >= " " && ",:]}/\\\"[{;=#".indexOf$I(c) < 0 ){
sb.append$C(c);
c=this.next$();
}
this.back$();
string=sb.toString().trim$();
if ("".equals$O(string)) {
throw this.syntaxError$S("Missing value");
}return $I$(5).stringToValue$S(string);
});

Clazz.newMeth(C$, 'skipTo$C',  function (to) {
var c;
try {
var startIndex=this.index;
var startCharacter=this.character;
var startLine=this.line;
this.reader.mark$I(1000000);
do {
c=this.next$();
if (c.$c() == 0 ) {
this.reader.reset$();
this.index=startIndex;
this.character=startCharacter;
this.line=startLine;
return String.fromCharCode(0);
}} while (c != to);
this.reader.mark$I(1);
} catch (exception) {
if (Clazz.exceptionOf(exception,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[exception]);
} else {
throw exception;
}
}
this.back$();
return c;
});

Clazz.newMeth(C$, 'syntaxError$S',  function (message) {
return Clazz.new_(Clazz.load('org.json.JSONException').c$$S,[message + this.toString()]);
});

Clazz.newMeth(C$, 'syntaxError$S$Throwable',  function (message, causedBy) {
return Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,[message + this.toString(), causedBy]);
});

Clazz.newMeth(C$, 'toString',  function () {
return " at " + Long.$s(this.index) + " [character " + Long.$s(this.character) + " line " + Long.$s(this.line) + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

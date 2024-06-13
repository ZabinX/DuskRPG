(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,'java.nio.charset.Charset',['org.glassfish.json.JsonGeneratorImpl','.Context'],['org.glassfish.json.JsonGeneratorImpl','.Scope'],'java.util.ArrayDeque','java.io.BufferedWriter','java.io.OutputStreamWriter',['javax.json.JsonValue','.ValueType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JsonGeneratorImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.json.stream.JsonGenerator');
C$.$classes$=[['Scope',26],['Context',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentContext=Clazz.new_([$I$(3).IN_NONE],$I$(2,1).c$$org_glassfish_json_JsonGeneratorImpl_Scope);
this.stack=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['writer','java.io.Writer','currentContext','org.glassfish.json.JsonGeneratorImpl.Context','stack','java.util.Deque']]
,['O',['UTF_8','java.nio.charset.Charset']]]

Clazz.newMeth(C$, 'c$$java_io_Writer',  function (writer) {
;C$.$init$.apply(this);
if (!(Clazz.instanceOf(writer, "java.io.BufferedWriter"))) {
writer=Clazz.new_($I$(5,1).c$$java_io_Writer,[writer]);
}this.writer=writer;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
C$.c$$java_io_OutputStream$java_nio_charset_Charset.apply(this, [out, C$.UTF_8]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_nio_charset_Charset',  function (out, encoding) {
C$.c$$java_io_Writer.apply(this, [Clazz.new_($I$(6,1).c$$java_io_OutputStream$java_nio_charset_Charset,[out, encoding])]);
}, 1);

Clazz.newMeth(C$, 'flush$',  function () {
try {
this.writer.flush$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while flushing JsonGenerator", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'writeStartObject$',  function () {
if (this.currentContext.scope === $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeStartObject() cannot be called in object context"]);
}if (this.currentContext.scope === $I$(3).IN_NONE  && !this.currentContext.first ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeStartObject() cannot be called in no context more than once"]);
}try {
this.writeComma$();
this.writer.write$S("{");
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing start object", ioe]);
} else {
throw ioe;
}
}
this.stack.push$O(this.currentContext);
this.currentContext=Clazz.new_([$I$(3).IN_OBJECT],$I$(2,1).c$$org_glassfish_json_JsonGeneratorImpl_Scope);
return this;
});

Clazz.newMeth(C$, 'writeStartObject$S',  function (name) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeStartObject(String) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S("{");
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing start of object in JSON object", ioe]);
} else {
throw ioe;
}
}
this.stack.push$O(this.currentContext);
this.currentContext=Clazz.new_([$I$(3).IN_OBJECT],$I$(2,1).c$$org_glassfish_json_JsonGeneratorImpl_Scope);
return this;
});

Clazz.newMeth(C$, 'writeName$S',  function (name) {
this.writeComma$();
C$.writeEscapedString$java_io_Writer$S(this.writer, name);
this.writer.write$S(":");
return this;
}, p$1);

Clazz.newMeth(C$, 'write$S$S',  function (name, fieldValue) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, String) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
C$.writeEscapedString$java_io_Writer$S(this.writer, fieldValue);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing (name, String) pair in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$S$I',  function (name, value) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, int) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S(String.valueOf$I(value));
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing (name, int) pair in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$S$J',  function (name, value) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, long) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S(String.valueOf$J(value));
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing (name, long) pair in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$S$D',  function (name, value) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, double) can only be called in object context"]);
}if (Double.isInfinite$D(value) || Double.isNaN$D(value) ) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["write(String, double) value cannot be Infinite or NaN"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S(String.valueOf$D(value));
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing (name, double) pair in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$S$java_math_BigInteger',  function (name, value) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, BigInteger) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S(String.valueOf$O(value));
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing (name, BigInteger) pair in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$S$java_math_BigDecimal',  function (name, value) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, BigDecimal) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S(String.valueOf$O(value));
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing (name, BigDecimal) pair in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$S$Z',  function (name, value) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, boolean) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S(value ? "true" : "false");
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing (name, boolean) pair in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'writeNull$S',  function (name) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeNull(String) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S("null");
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing null value in JSON object", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$javax_json_JsonValue',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(JsonValue) can only be called in array context"]);
}switch (value.getValueType$()) {
case $I$(7).ARRAY:
var array=value;
this.writeStartArray$();
for (var child, $child = array.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
this.write$javax_json_JsonValue(child);
}
this.writeEnd$();
break;
case $I$(7).OBJECT:
var object=value;
this.writeStartObject$();
for (var member, $member = object.entrySet$().iterator$(); $member.hasNext$()&&((member=($member.next$())),1);) {
this.write$S$javax_json_JsonValue(member.getKey$(), member.getValue$());
}
this.writeEnd$();
break;
case $I$(7).STRING:
var str=value;
this.write$S(str.getString$());
break;
case $I$(7).NUMBER:
var number=value;
try {
p$1.writeValue$S.apply(this, [number.toString()]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing a number", ioe]);
} else {
throw ioe;
}
}
break;
case $I$(7).TRUE:
this.write$Z(true);
break;
case $I$(7).FALSE:
this.write$Z(false);
break;
case $I$(7).NULL:
this.writeNull$();
break;
}
return this;
});

Clazz.newMeth(C$, 'writeStartArray$',  function () {
if (this.currentContext.scope === $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeStartArray() cannot be called in object context"]);
}if (this.currentContext.scope === $I$(3).IN_NONE  && !this.currentContext.first ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeStartArray() cannot be called in no context more than once"]);
}try {
this.writeComma$();
this.writer.write$S("[");
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing start of JSON array", ioe]);
} else {
throw ioe;
}
}
this.stack.push$O(this.currentContext);
this.currentContext=Clazz.new_([$I$(3).IN_ARRAY],$I$(2,1).c$$org_glassfish_json_JsonGeneratorImpl_Scope);
return this;
});

Clazz.newMeth(C$, 'writeStartArray$S',  function (name) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeStartArray(String) can only be called in object context"]);
}try {
p$1.writeName$S.apply(this, [name]);
this.writer.write$S("[");
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing start of array in JSON object", ioe]);
} else {
throw ioe;
}
}
this.stack.push$O(this.currentContext);
this.currentContext=Clazz.new_([$I$(3).IN_ARRAY],$I$(2,1).c$$org_glassfish_json_JsonGeneratorImpl_Scope);
return this;
});

Clazz.newMeth(C$, 'write$S$javax_json_JsonValue',  function (name, value) {
if (this.currentContext.scope !== $I$(3).IN_OBJECT ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String, JsonValue) can only be called in object context"]);
}switch (value.getValueType$()) {
case $I$(7).ARRAY:
var array=value;
this.writeStartArray$S(name);
for (var child, $child = array.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
this.write$javax_json_JsonValue(child);
}
this.writeEnd$();
break;
case $I$(7).OBJECT:
var object=value;
this.writeStartObject$S(name);
for (var member, $member = object.entrySet$().iterator$(); $member.hasNext$()&&((member=($member.next$())),1);) {
this.write$S$javax_json_JsonValue(member.getKey$(), member.getValue$());
}
this.writeEnd$();
break;
case $I$(7).STRING:
var str=value;
this.write$S$S(name, str.getString$());
break;
case $I$(7).NUMBER:
var number=value;
try {
p$1.writeValue$S$S.apply(this, [name, number.toString()]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing a number in JSON object", ioe]);
} else {
throw ioe;
}
}
break;
case $I$(7).TRUE:
this.write$S$Z(name, true);
break;
case $I$(7).FALSE:
this.write$S$Z(name, false);
break;
case $I$(7).NULL:
this.writeNull$S(name);
break;
}
return this;
});

Clazz.newMeth(C$, 'write$S',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(String) can only be called in array context"]);
}try {
this.writeComma$();
C$.writeEscapedString$java_io_Writer$S(this.writer, value);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing string value in JSON array", e]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'write$I',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(int) can only be called in array context"]);
}try {
this.writeComma$();
this.writer.write$S(String.valueOf$I(value));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing int value in JSON array", e]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'write$J',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(long) can only be called in array context"]);
}try {
p$1.writeValue$S.apply(this, [String.valueOf$J(value)]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing long value in JSON array", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$D',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(double) can only be called in array context"]);
}if (Double.isInfinite$D(value) || Double.isNaN$D(value) ) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["write(double) value cannot be Infinite or NaN"]);
}try {
p$1.writeValue$S.apply(this, [String.valueOf$D(value)]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing double value in JSON array", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$java_math_BigInteger',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(BigInteger) can only be called in array context"]);
}try {
p$1.writeValue$S.apply(this, [value.toString()]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing BigInteger value in JSON array", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$java_math_BigDecimal',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(BigDecimal) can only be called in array context"]);
}try {
p$1.writeValue$S.apply(this, [value.toString()]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing BigDecimal value in JSON array", ioe]);
} else {
throw ioe;
}
}
return this;
});

Clazz.newMeth(C$, 'write$Z',  function (value) {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["write(boolean) can only be called in array context"]);
}try {
this.writeComma$();
this.writer.write$S(value ? "true" : "false");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing boolean value in JSON array", e]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'writeNull$',  function () {
if (this.currentContext.scope !== $I$(3).IN_ARRAY ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeNull() can only be called in array context"]);
}try {
this.writeComma$();
this.writer.write$S("null");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing null value in JSON array", e]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'writeValue$S',  function (value) {
this.writeComma$();
this.writer.write$S(value);
}, p$1);

Clazz.newMeth(C$, 'writeValue$S$S',  function (name, value) {
this.writeComma$();
C$.writeEscapedString$java_io_Writer$S(this.writer, name);
this.writer.write$I(":".$c());
this.writer.write$S(value);
}, p$1);

Clazz.newMeth(C$, 'writeEnd$',  function () {
if (this.currentContext.scope === $I$(3).IN_NONE ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["writeEnd() cannot be called in no context"]);
}try {
this.writer.write$I(this.currentContext.scope === $I$(3).IN_ARRAY  ? "]" : "}".$c());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while writing end of JSON structure", e]);
} else {
throw e;
}
}
this.currentContext=this.stack.pop$();
return this;
});

Clazz.newMeth(C$, 'writeComma$',  function () {
if (!this.currentContext.first) {
this.writer.write$S(",");
}this.currentContext.first=false;
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.currentContext.scope !== $I$(3).IN_NONE  || this.currentContext.first ) {
throw Clazz.new_(Clazz.load('javax.json.stream.JsonGenerationException').c$$S,["Generating incomplete JSON"]);
}try {
this.writer.close$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while closing JsonGenerator", ioe]);
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'writeEscapedString$java_io_Writer$S',  function (w, string) {
w.write$I("\"".$c());
for (var i=0; i < string.length$(); i++) {
var c=string.charAt$I(i);
switch (c.$c()) {
case 34:
case 92:
w.write$I("\\".$c());
w.write$I(c.$c());
break;
case 8:
w.write$S("\\b");
break;
case 12:
w.write$S("\\f");
break;
case 10:
w.write$S("\\n");
break;
case 13:
w.write$S("\\r");
break;
case 9:
w.write$S("\\t");
break;
default:
if (c < " " || (c >= "\u0080" && c < "\u00a0" )  || (c >= "\u2000" && c < "\u2100" ) ) {
var hex="000" + Integer.toHexString$I(c.$c());
w.write$S("\\u" + hex.substring$I(hex.length$() - 4));
} else {
w.write$I(c.$c());
}}
}
w.write$I("\"".$c());
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.UTF_8=$I$(1).forName$S("UTF-8");
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.JsonGeneratorImpl, "Scope", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "IN_NONE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "IN_OBJECT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "IN_ARRAY", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JsonGeneratorImpl, "Context", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.first=true;
},1);

C$.$fields$=[['Z',['first'],'O',['scope','org.glassfish.json.JsonGeneratorImpl.Scope']]]

Clazz.newMeth(C$, 'c$$org_glassfish_json_JsonGeneratorImpl_Scope',  function (scope) {
;C$.$init$.apply(this);
this.scope=scope;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

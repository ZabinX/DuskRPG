(function(){var P$=Clazz.newPackage("org.json.simple"),I$=[[0,'org.json.simple.JSONValue','java.io.StringWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONArray", null, 'java.util.ArrayList', ['org.json.simple.JSONAware', 'org.json.simple.JSONStreamAware']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
;C$.superclazz.c$$java_util_Collection.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeJSONString$java_util_Collection$java_io_Writer',  function (collection, out) {
if (collection == null ) {
out.write$S("null");
return;
}var first=true;
var iter=collection.iterator$();
out.write$I("[".$c());
while (iter.hasNext$()){
if (first) first=false;
 else out.write$I(",".$c());
var value=iter.next$();
if (value == null ) {
out.write$S("null");
continue;
}$I$(1).writeJSONString$O$java_io_Writer(value, out);
}
out.write$I("]".$c());
}, 1);

Clazz.newMeth(C$, 'writeJSONString$java_io_Writer',  function (out) {
C$.writeJSONString$java_util_Collection$java_io_Writer(this, out);
});

Clazz.newMeth(C$, 'toJSONString$java_util_Collection',  function (collection) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$java_util_Collection$java_io_Writer(collection, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$BA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
out.write$S(String.valueOf$I(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S(",");
out.write$S(String.valueOf$I(array[i]));
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$BA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$BA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$HA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
out.write$S(String.valueOf$I(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S(",");
out.write$S(String.valueOf$I(array[i]));
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$HA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$HA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$IA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
out.write$S(String.valueOf$I(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S(",");
out.write$S(String.valueOf$I(array[i]));
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$IA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$IA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$JA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
out.write$S(String.valueOf$J(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S(",");
out.write$S(String.valueOf$J(array[i]));
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$JA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$JA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$FA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
out.write$S(String.valueOf$F(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S(",");
out.write$S(String.valueOf$F(array[i]));
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$FA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$FA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$DA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
out.write$S(String.valueOf$D(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S(",");
out.write$S(String.valueOf$D(array[i]));
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$DA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$DA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$ZA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
out.write$S(String.valueOf$Z(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S(",");
out.write$S(String.valueOf$Z(array[i]));
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$ZA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$ZA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$CA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[\"");
out.write$S(String.valueOf$C(array[0]));
for (var i=1; i < array.length; i++) {
out.write$S("\",\"");
out.write$S(String.valueOf$C(array[i]));
}
out.write$S("\"]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$CA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$CA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'writeJSONString$OA$java_io_Writer',  function (array, out) {
if (array == null ) {
out.write$S("null");
} else if (array.length == 0) {
out.write$S("[]");
} else {
out.write$S("[");
$I$(1).writeJSONString$O$java_io_Writer(array[0], out);
for (var i=1; i < array.length; i++) {
out.write$S(",");
$I$(1).writeJSONString$O$java_io_Writer(array[i], out);
}
out.write$S("]");
}}, 1);

Clazz.newMeth(C$, 'toJSONString$OA',  function (array) {
var writer=Clazz.new_($I$(2,1));
try {
C$.writeJSONString$OA$java_io_Writer(array, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'toJSONString$',  function () {
return C$.toJSONString$java_util_Collection(this);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.toJSONString$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

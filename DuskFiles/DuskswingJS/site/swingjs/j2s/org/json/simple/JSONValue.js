(function(){var P$=Clazz.newPackage("org.json.simple"),I$=[[0,'org.json.simple.parser.JSONParser','java.io.StringReader','org.json.simple.JSONObject','org.json.simple.JSONArray','java.io.StringWriter','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONValue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parse$java_io_Reader',  function ($in) {
try {
var parser=Clazz.new_($I$(1,1));
return parser.parse$java_io_Reader($in);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'parse$S',  function (s) {
var $in=Clazz.new_($I$(2,1).c$$S,[s]);
return C$.parse$java_io_Reader($in);
}, 1);

Clazz.newMeth(C$, 'parseWithException$java_io_Reader',  function ($in) {
var parser=Clazz.new_($I$(1,1));
return parser.parse$java_io_Reader($in);
}, 1);

Clazz.newMeth(C$, 'parseWithException$S',  function (s) {
var parser=Clazz.new_($I$(1,1));
return parser.parse$S(s);
}, 1);

Clazz.newMeth(C$, 'writeJSONString$O$java_io_Writer',  function (value, out) {
if (value == null ) {
out.write$S("null");
return;
}if (Clazz.instanceOf(value, "java.lang.String")) {
out.write$I("\"".$c());
out.write$S(C$.escape$S(value));
out.write$I("\"".$c());
return;
}if (Clazz.instanceOf(value, "java.lang.Double")) {
if ((value).isInfinite$() || (value).isNaN$() ) out.write$S("null");
 else out.write$S(value.toString());
return;
}if (Clazz.instanceOf(value, "java.lang.Float")) {
if ((value).isInfinite$() || (value).isNaN$() ) out.write$S("null");
 else out.write$S(value.toString());
return;
}if (Clazz.instanceOf(value, "java.lang.Number")) {
out.write$S(value.toString());
return;
}if (Clazz.instanceOf(value, "java.lang.Boolean")) {
out.write$S(value.toString());
return;
}if ((Clazz.instanceOf(value, "org.json.simple.JSONStreamAware"))) {
(value).writeJSONString$java_io_Writer(out);
return;
}if ((Clazz.instanceOf(value, "org.json.simple.JSONAware"))) {
out.write$S((value).toJSONString$());
return;
}if (Clazz.instanceOf(value, "java.util.Map")) {
$I$(3).writeJSONString$java_util_Map$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, "java.util.Collection")) {
$I$(4).writeJSONString$java_util_Collection$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Byte.TYPE, -1))) {
$I$(4).writeJSONString$BA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Short.TYPE, -1))) {
$I$(4).writeJSONString$HA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Integer.TYPE, -1))) {
$I$(4).writeJSONString$IA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Long.TYPE, -1))) {
$I$(4).writeJSONString$JA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Float.TYPE, -1))) {
$I$(4).writeJSONString$FA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Double.TYPE, -1))) {
$I$(4).writeJSONString$DA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Boolean.TYPE, -1))) {
$I$(4).writeJSONString$ZA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(Character.TYPE, -1))) {
$I$(4).writeJSONString$CA$java_io_Writer(value, out);
return;
}if (Clazz.instanceOf(value, Clazz.array(java.lang.Object, -1))) {
$I$(4).writeJSONString$OA$java_io_Writer(value, out);
return;
}out.write$S(value.toString());
}, 1);

Clazz.newMeth(C$, 'toJSONString$O',  function (value) {
var writer=Clazz.new_($I$(5,1));
try {
C$.writeJSONString$O$java_io_Writer(value, writer);
return writer.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'escape$S',  function (s) {
if (s == null ) return null;
var sb=Clazz.new_($I$(6,1));
C$.escape$S$StringBuffer(s, sb);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'escape$S$StringBuffer',  function (s, sb) {
var len=s.length$();
for (var i=0; i < len; i++) {
var ch=s.charAt$I(i);
switch (ch.$c()) {
case 34:
sb.append$S("\\\"");
break;
case 92:
sb.append$S("\\\\");
break;
case 8:
sb.append$S("\\b");
break;
case 12:
sb.append$S("\\f");
break;
case 10:
sb.append$S("\\n");
break;
case 13:
sb.append$S("\\r");
break;
case 9:
sb.append$S("\\t");
break;
case 47:
sb.append$S("\\/");
break;
default:
if ((ch >= "\u0000" && ch <= "\u001f" ) || (ch >= "" && ch <= "\u009f" ) || (ch >= "\u2000" && ch <= "\u20ff" )  ) {
var ss=Integer.toHexString$I(ch.$c());
sb.append$S("\\u");
for (var k=0; k < 4 - ss.length$(); k++) {
sb.append$C("0");
}
sb.append$S(ss.toUpperCase$());
} else {
sb.append$C(ch);
}}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

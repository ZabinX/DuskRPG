(function(){var P$=Clazz.newPackage("org.json"),p$1={},I$=[[0,'org.json.JSONObject','org.json.JSONArray']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONWriter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['comma'],'C',['mode'],'I',['top'],'O',['stack','org.json.JSONObject[]','writer','Appendable']]]

Clazz.newMeth(C$, 'c$$Appendable',  function (w) {
;C$.$init$.apply(this);
this.comma=false;
this.mode="i";
this.stack=Clazz.array($I$(1), [200]);
this.top=0;
this.writer=w;
}, 1);

Clazz.newMeth(C$, 'append$S',  function (string) {
if (string == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Null pointer"]);
}if (this.mode == "o" || this.mode == "a" ) {
try {
if (this.comma && this.mode == "a" ) {
this.writer.append$C(",");
}this.writer.append$CharSequence(string);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[e]);
} else {
throw e;
}
}
if (this.mode == "o") {
this.mode="k";
}this.comma=true;
return this;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Value out of sequence."]);
}, p$1);

Clazz.newMeth(C$, 'array$',  function () {
if (this.mode == "i" || this.mode == "o"  || this.mode == "a" ) {
p$1.push$org_json_JSONObject.apply(this, [null]);
p$1.append$S.apply(this, ["["]);
this.comma=false;
return this;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Misplaced array."]);
});

Clazz.newMeth(C$, 'end$C$C',  function (m, c) {
if (this.mode != m) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,[m == "a" ? "Misplaced endArray." : "Misplaced endObject."]);
}p$1.pop$C.apply(this, [m]);
try {
this.writer.append$C(c);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[e]);
} else {
throw e;
}
}
this.comma=true;
return this;
}, p$1);

Clazz.newMeth(C$, 'endArray$',  function () {
return p$1.end$C$C.apply(this, ["a", "]"]);
});

Clazz.newMeth(C$, 'endObject$',  function () {
return p$1.end$C$C.apply(this, ["k", "}"]);
});

Clazz.newMeth(C$, 'key$S',  function (string) {
if (string == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Null key."]);
}if (this.mode == "k") {
try {
var topObject=this.stack[this.top - 1];
if (topObject.has$S(string)) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Duplicate key \"" + string + "\"" ]);
}topObject.put$S$Z(string, true);
if (this.comma) {
this.writer.append$C(",");
}this.writer.append$CharSequence($I$(1).quote$S(string));
this.writer.append$C(":");
this.comma=false;
this.mode="o";
return this;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[e]);
} else {
throw e;
}
}
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Misplaced key."]);
});

Clazz.newMeth(C$, 'object$',  function () {
if (this.mode == "i") {
this.mode="o";
}if (this.mode == "o" || this.mode == "a" ) {
p$1.append$S.apply(this, ["{"]);
p$1.push$org_json_JSONObject.apply(this, [Clazz.new_($I$(1,1))]);
this.comma=false;
return this;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Misplaced object."]);
});

Clazz.newMeth(C$, 'pop$C',  function (c) {
if (this.top <= 0) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Nesting error."]);
}var m=this.stack[this.top - 1] == null  ? "a" : "k";
if (m != c) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Nesting error."]);
}this.top-=1;
this.mode=this.top == 0 ? "d" : this.stack[this.top - 1] == null  ? "a" : "k";
}, p$1);

Clazz.newMeth(C$, 'push$org_json_JSONObject',  function (jo) {
if (this.top >= 200) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Nesting too deep."]);
}this.stack[this.top]=jo;
this.mode=jo == null  ? "a" : "k";
this.top+=1;
}, p$1);

Clazz.newMeth(C$, 'valueToString$O',  function (value) {
if (value == null  || value.equals$O(null) ) {
return "null";
}if (Clazz.instanceOf(value, "org.json.JSONString")) {
var object;
try {
object=(value).toJSONString$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[e]);
} else {
throw e;
}
}
if (Clazz.instanceOf(object, "java.lang.String")) {
return object;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Bad value from toJSONString: " + object]);
}if (Clazz.instanceOf(value, "java.lang.Number")) {
var s=$I$(1).numberToString$Number(value);
return (C$.isNumberOK$O$S(value, s) ? s : $I$(1).quote$S(s));
}if (Clazz.instanceOf(value, "java.lang.Boolean") || Clazz.instanceOf(value, "org.json.JSONObject") || Clazz.instanceOf(value, "org.json.JSONArray")  ) {
return value.toString();
}if (Clazz.instanceOf(value, "java.util.Map")) {
var map=value;
return Clazz.new_($I$(1,1).c$$java_util_Map,[map]).toString();
}if (Clazz.instanceOf(value, "java.util.Collection")) {
var coll=value;
return Clazz.new_($I$(2,1).c$$java_util_Collection,[coll]).toString();
}if (value.getClass$().isArray$()) {
return Clazz.new_($I$(2,1).c$$O,[value]).toString();
}if (Clazz.instanceOf(value, "java.lang.Enum")) {
return $I$(1,"quote$S",[(value).name$()]);
}return $I$(1,"quote$S",[value.toString()]);
}, 1);

Clazz.newMeth(C$, 'value$Z',  function (b) {
return p$1.append$S.apply(this, [b ? "true" : "false"]);
});

Clazz.newMeth(C$, 'value$D',  function (d) {
return this.value$O(Double.valueOf$D(d));
});

Clazz.newMeth(C$, 'value$J',  function (l) {
return p$1.append$S.apply(this, [Long.toString$J(l)]);
});

Clazz.newMeth(C$, 'value$O',  function (object) {
return p$1.append$S.apply(this, [C$.valueToString$O(object)]);
});

Clazz.newMeth(C$, 'isNumberOK$O$S',  function (value, s) {
if (Clazz.instanceOf(value, "java.math.BigInteger")) {
try {
var l=Long.parseLong$S(s);
return (Long.$le(l,9007199254740991 ) && Long.$ge(l,(Long.$neg(9007199254740991)) ) );
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return false;
}if (Clazz.instanceOf(value, "java.math.BigDecimal")) {
var d=Double.parseDouble$S(s);
return Double.isFinite$D(d) && (s.indexOf$S("E-") < 0 || d != 0  ) ;
}return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

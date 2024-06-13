(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'java.util.ArrayList','org.json.JSONObject','org.json.JSONTokener','java.lang.reflect.Array','java.math.BigDecimal','java.math.BigInteger','StringBuilder','Enum','org.json.JSONPointer','java.io.StringWriter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONArray", null, null, 'Iterable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['myArrayList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.myArrayList=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$org_json_JSONTokener',  function (x) {
C$.c$.apply(this, []);
if (x.nextClean$() != "[") {
throw x.syntaxError$S("A JSONArray text must start with \'[\'");
}var nextChar=x.nextClean$();
if (nextChar.$c() == 0 ) {
throw x.syntaxError$S("Expected a \',\' or \']\'");
}if (nextChar != "]") {
x.back$();
for (; ; ) {
if (x.nextClean$() == ",") {
x.back$();
this.myArrayList.add$O($I$(2).NULL);
} else {
x.back$();
this.myArrayList.add$O(x.nextValue$());
}switch ((x.nextClean$()).$c()) {
case 0:
throw x.syntaxError$S("Expected a \',\' or \']\'");
case 44:
nextChar=x.nextClean$();
if (nextChar.$c() == 0 ) {
throw x.syntaxError$S("Expected a \',\' or \']\'");
}if (nextChar == "]") {
return;
}x.back$();
break;
case 93:
return;
default:
throw x.syntaxError$S("Expected a \',\' or \']\'");
}
}
}}, 1);

Clazz.newMeth(C$, 'c$$S',  function (source) {
C$.c$$org_json_JSONTokener.apply(this, [Clazz.new_($I$(3,1).c$$S,[source])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (collection) {
;C$.$init$.apply(this);
if (collection == null ) {
this.myArrayList=Clazz.new_($I$(1,1));
} else {
this.myArrayList=Clazz.new_([collection.size$()],$I$(1,1).c$$I);
for (var o, $o = collection.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
this.myArrayList.add$O($I$(2).wrap$O(o));
}
}}, 1);

Clazz.newMeth(C$, 'c$$O',  function (array) {
C$.c$.apply(this, []);
if (array.getClass$().isArray$()) {
var length=$I$(4).getLength$O(array);
this.myArrayList.ensureCapacity$I(length);
for (var i=0; i < length; i+=1) {
this.put$O($I$(2,"wrap$O",[$I$(4).get$O$I(array, i)]));
}
} else {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray initial value should be a string or collection or array."]);
}}, 1);

Clazz.newMeth(C$, 'iterator$',  function () {
return this.myArrayList.iterator$();
});

Clazz.newMeth(C$, 'get$I',  function (index) {
var object=this.opt$I(index);
if (object == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray[" + index + "] not found." ]);
}return object;
});

Clazz.newMeth(C$, 'getBoolean$I',  function (index) {
var object=this.get$I(index);
if (object.equals$O(Boolean.FALSE) || (Clazz.instanceOf(object, "java.lang.String") && (object).equalsIgnoreCase$S("false") ) ) {
return false;
} else if (object.equals$O(Boolean.TRUE) || (Clazz.instanceOf(object, "java.lang.String") && (object).equalsIgnoreCase$S("true") ) ) {
return true;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray[" + index + "] is not a boolean." ]);
});

Clazz.newMeth(C$, 'getDouble$I',  function (index) {
var object=this.get$I(index);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).doubleValue$() : Double.parseDouble$S(object);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONArray[" + index + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getFloat$I',  function (index) {
var object=this.get$I(index);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).floatValue$() : Float.parseFloat$S(object.toString());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONArray[" + index + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getNumber$I',  function (index) {
var object=this.get$I(index);
try {
if (Clazz.instanceOf(object, "java.lang.Number")) {
return object;
}return $I$(2,"stringToNumber$S",[object.toString()]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONArray[" + index + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getEnum$Class$I',  function (clazz, index) {
var val=this.optEnum$Class$I(clazz, index);
if (val == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray[" + index + "] is not an enum of type " + $I$(2,"quote$S",[clazz.getSimpleName$()]) + "." ]);
}return val;
});

Clazz.newMeth(C$, 'getBigDecimal$I',  function (index) {
var object=this.get$I(index);
try {
return Clazz.new_([object.toString()],$I$(5,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONArray[" + index + "] could not convert to BigDecimal." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getBigInteger$I',  function (index) {
var object=this.get$I(index);
try {
return Clazz.new_([object.toString()],$I$(6,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONArray[" + index + "] could not convert to BigInteger." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getInt$I',  function (index) {
var object=this.get$I(index);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).intValue$() : Integer.parseInt$S(object);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONArray[" + index + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getJSONArray$I',  function (index) {
var object=this.get$I(index);
if (Clazz.instanceOf(object, "org.json.JSONArray")) {
return object;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray[" + index + "] is not a JSONArray." ]);
});

Clazz.newMeth(C$, 'getJSONObject$I',  function (index) {
var object=this.get$I(index);
if (Clazz.instanceOf(object, "org.json.JSONObject")) {
return object;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray[" + index + "] is not a JSONObject." ]);
});

Clazz.newMeth(C$, 'getLong$I',  function (index) {
var object=this.get$I(index);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).longValue$() : Long.parseLong$S(object);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONArray[" + index + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getString$I',  function (index) {
var object=this.get$I(index);
if (Clazz.instanceOf(object, "java.lang.String")) {
return object;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray[" + index + "] not a string." ]);
});

Clazz.newMeth(C$, 'isNull$I',  function (index) {
return $I$(2).NULL.equals$O(this.opt$I(index));
});

Clazz.newMeth(C$, 'join$S',  function (separator) {
var len=this.length$();
var sb=Clazz.new_($I$(7,1));
for (var i=0; i < len; i+=1) {
if (i > 0) {
sb.append$S(separator);
}sb.append$S($I$(2,"valueToString$O",[this.myArrayList.get$I(i)]));
}
return sb.toString();
});

Clazz.newMeth(C$, 'length$',  function () {
return this.myArrayList.size$();
});

Clazz.newMeth(C$, 'opt$I',  function (index) {
return (index < 0 || index >= this.length$() ) ? null : this.myArrayList.get$I(index);
});

Clazz.newMeth(C$, 'optBoolean$I',  function (index) {
return this.optBoolean$I$Z(index, false);
});

Clazz.newMeth(C$, 'optBoolean$I$Z',  function (index, defaultValue) {
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

Clazz.newMeth(C$, 'optDouble$I',  function (index) {
return this.optDouble$I$D(index, NaN);
});

Clazz.newMeth(C$, 'optDouble$I$D',  function (index, defaultValue) {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return (val).doubleValue$();
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return Double.parseDouble$S(val);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optFloat$I',  function (index) {
return this.optFloat$I$F(index, NaN);
});

Clazz.newMeth(C$, 'optFloat$I$F',  function (index, defaultValue) {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return (val).floatValue$();
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return Float.parseFloat$S(val);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optInt$I',  function (index) {
return this.optInt$I$I(index, 0);
});

Clazz.newMeth(C$, 'optInt$I$I',  function (index, defaultValue) {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return (val).intValue$();
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return Clazz.new_([val.toString()],$I$(5,1).c$$S).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optEnum$Class$I',  function (clazz, index) {
return this.optEnum$Class$I$Enum(clazz, index, null);
});

Clazz.newMeth(C$, 'optEnum$Class$I$Enum',  function (clazz, index, defaultValue) {
try {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (clazz.isAssignableFrom$Class(val.getClass$())) {
var myE=val;
return myE;
}return $I$(8,"valueOf$Class$S",[clazz, val.toString()]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
return defaultValue;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var e = e$$;
{
return defaultValue;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'optBigInteger$I$java_math_BigInteger',  function (index, defaultValue) {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.math.BigInteger")) {
return val;
}if (Clazz.instanceOf(val, "java.math.BigDecimal")) {
return (val).toBigInteger$();
}if (Clazz.instanceOf(val, "java.lang.Double") || Clazz.instanceOf(val, "java.lang.Float") ) {
return Clazz.new_([(val).doubleValue$()],$I$(5,1).c$$D).toBigInteger$();
}if (Clazz.instanceOf(val, "java.lang.Long") || Clazz.instanceOf(val, "java.lang.Integer") || Clazz.instanceOf(val, "java.lang.Short") || Clazz.instanceOf(val, "java.lang.Byte")  ) {
return $I$(6,"valueOf$J",[(val).longValue$()]);
}try {
var valStr=val.toString();
if ($I$(2).isDecimalNotation$S(valStr)) {
return Clazz.new_($I$(5,1).c$$S,[valStr]).toBigInteger$();
}return Clazz.new_($I$(6,1).c$$S,[valStr]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'optBigDecimal$I$java_math_BigDecimal',  function (index, defaultValue) {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.math.BigDecimal")) {
return val;
}if (Clazz.instanceOf(val, "java.math.BigInteger")) {
return Clazz.new_($I$(5,1).c$$java_math_BigInteger,[val]);
}if (Clazz.instanceOf(val, "java.lang.Double") || Clazz.instanceOf(val, "java.lang.Float") ) {
return Clazz.new_([(val).doubleValue$()],$I$(5,1).c$$D);
}if (Clazz.instanceOf(val, "java.lang.Long") || Clazz.instanceOf(val, "java.lang.Integer") || Clazz.instanceOf(val, "java.lang.Short") || Clazz.instanceOf(val, "java.lang.Byte")  ) {
return Clazz.new_([(val).longValue$()],$I$(5,1).c$$J);
}try {
return Clazz.new_([val.toString()],$I$(5,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'optJSONArray$I',  function (index) {
var o=this.opt$I(index);
return Clazz.instanceOf(o, "org.json.JSONArray") ? o : null;
});

Clazz.newMeth(C$, 'optJSONObject$I',  function (index) {
var o=this.opt$I(index);
return Clazz.instanceOf(o, "org.json.JSONObject") ? o : null;
});

Clazz.newMeth(C$, 'optLong$I',  function (index) {
return this.optLong$I$J(index, 0);
});

Clazz.newMeth(C$, 'optLong$I$J',  function (index, defaultValue) {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return (val).longValue$();
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return Clazz.new_([val.toString()],$I$(5,1).c$$S).longValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optNumber$I',  function (index) {
return this.optNumber$I$Number(index, null);
});

Clazz.newMeth(C$, 'optNumber$I$Number',  function (index, defaultValue) {
var val=this.opt$I(index);
if ($I$(2).NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return val;
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return $I$(2).stringToNumber$S(val);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optString$I',  function (index) {
return this.optString$I$S(index, "");
});

Clazz.newMeth(C$, 'optString$I$S',  function (index, defaultValue) {
var object=this.opt$I(index);
return $I$(2).NULL.equals$O(object) ? defaultValue : object.toString();
});

Clazz.newMeth(C$, 'put$Z',  function (value) {
return this.put$O(value ? Boolean.TRUE : Boolean.FALSE);
});

Clazz.newMeth(C$, 'put$java_util_Collection',  function (value) {
return this.put$O(Clazz.new_(C$.c$$java_util_Collection,[value]));
});

Clazz.newMeth(C$, 'put$D',  function (value) {
return this.put$O(Double.valueOf$D(value));
});

Clazz.newMeth(C$, 'put$F',  function (value) {
return this.put$O(Float.valueOf$F(value));
});

Clazz.newMeth(C$, 'put$I',  function (value) {
return this.put$O(Integer.valueOf$I(value));
});

Clazz.newMeth(C$, 'put$J',  function (value) {
return this.put$O(Long.valueOf$J(value));
});

Clazz.newMeth(C$, 'put$java_util_Map',  function (value) {
return this.put$O(Clazz.new_($I$(2,1).c$$java_util_Map,[value]));
});

Clazz.newMeth(C$, 'put$O',  function (value) {
$I$(2).testValidity$O(value);
this.myArrayList.add$O(value);
return this;
});

Clazz.newMeth(C$, 'put$I$Z',  function (index, value) {
return this.put$I$O(index, value ? Boolean.TRUE : Boolean.FALSE);
});

Clazz.newMeth(C$, 'put$I$java_util_Collection',  function (index, value) {
return this.put$I$O(index, Clazz.new_(C$.c$$java_util_Collection,[value]));
});

Clazz.newMeth(C$, 'put$I$D',  function (index, value) {
return this.put$I$O(index, Double.valueOf$D(value));
});

Clazz.newMeth(C$, 'put$I$F',  function (index, value) {
return this.put$I$O(index, Float.valueOf$F(value));
});

Clazz.newMeth(C$, 'put$I$I',  function (index, value) {
return this.put$I$O(index, Integer.valueOf$I(value));
});

Clazz.newMeth(C$, 'put$I$J',  function (index, value) {
return this.put$I$O(index, Long.valueOf$J(value));
});

Clazz.newMeth(C$, 'put$I$java_util_Map',  function (index, value) {
this.put$I$O(index, Clazz.new_($I$(2,1).c$$java_util_Map,[value]));
return this;
});

Clazz.newMeth(C$, 'put$I$O',  function (index, value) {
if (index < 0) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONArray[" + index + "] not found." ]);
}if (index < this.length$()) {
$I$(2).testValidity$O(value);
this.myArrayList.set$I$O(index, value);
return this;
}if (index == this.length$()) {
return this.put$O(value);
}this.myArrayList.ensureCapacity$I(index + 1);
while (index != this.length$()){
this.myArrayList.add$O($I$(2).NULL);
}
return this.put$O(value);
});

Clazz.newMeth(C$, 'query$S',  function (jsonPointer) {
return this.query$org_json_JSONPointer(Clazz.new_($I$(9,1).c$$S,[jsonPointer]));
});

Clazz.newMeth(C$, 'query$org_json_JSONPointer',  function (jsonPointer) {
return jsonPointer.queryFrom$O(this);
});

Clazz.newMeth(C$, 'optQuery$S',  function (jsonPointer) {
return this.optQuery$org_json_JSONPointer(Clazz.new_($I$(9,1).c$$S,[jsonPointer]));
});

Clazz.newMeth(C$, 'optQuery$org_json_JSONPointer',  function (jsonPointer) {
try {
return jsonPointer.queryFrom$O(this);
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.JSONPointerException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
return index >= 0 && index < this.length$()  ? this.myArrayList.remove$I(index) : null;
});

Clazz.newMeth(C$, 'similar$O',  function (other) {
if (!(Clazz.instanceOf(other, "org.json.JSONArray"))) {
return false;
}var len=this.length$();
if (len != (other).length$()) {
return false;
}for (var i=0; i < len; i+=1) {
var valueThis=this.myArrayList.get$I(i);
var valueOther=(other).myArrayList.get$I(i);
if (valueThis === valueOther ) {
continue;
}if (valueThis == null ) {
return false;
}if (Clazz.instanceOf(valueThis, "org.json.JSONObject")) {
if (!(valueThis).similar$O(valueOther)) {
return false;
}} else if (Clazz.instanceOf(valueThis, "org.json.JSONArray")) {
if (!(valueThis).similar$O(valueOther)) {
return false;
}} else if (!valueThis.equals$O(valueOther)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'toJSONObject$org_json_JSONArray',  function (names) {
if (names == null  || names.isEmpty$()  || this.isEmpty$() ) {
return null;
}var jo=Clazz.new_([names.length$()],$I$(2,1).c$$I);
for (var i=0; i < names.length$(); i+=1) {
jo.put$S$O(names.getString$I(i), this.opt$I(i));
}
return jo;
});

Clazz.newMeth(C$, 'toString',  function () {
try {
return this.toString$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString$I',  function (indentFactor) {
var sw=Clazz.new_($I$(10,1));
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(sw.getBuffer$());
{
return this.write$java_io_Writer$I$I(sw, indentFactor, 0).toString();
}});

Clazz.newMeth(C$, 'write$java_io_Writer',  function (writer) {
return this.write$java_io_Writer$I$I(writer, 0, 0);
});

Clazz.newMeth(C$, 'write$java_io_Writer$I$I',  function (writer, indentFactor, indent) {
try {
var commanate=false;
var length=this.length$();
writer.write$I("[".$c());
if (length == 1) {
try {
$I$(2,"writeValue$java_io_Writer$O$I$I",[writer, this.myArrayList.get$I(0), indentFactor, indent]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["Unable to write JSONArray value at index: 0", e]);
} else {
throw e;
}
}
} else if (length != 0) {
var newindent=indent + indentFactor;
for (var i=0; i < length; i+=1) {
if (commanate) {
writer.write$I(",".$c());
}if (indentFactor > 0) {
writer.write$I("\n".$c());
}$I$(2).indent$java_io_Writer$I(writer, newindent);
try {
$I$(2,"writeValue$java_io_Writer$O$I$I",[writer, this.myArrayList.get$I(i), indentFactor, newindent]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["Unable to write JSONArray value at index: " + i, e]);
} else {
throw e;
}
}
commanate=true;
}
if (indentFactor > 0) {
writer.write$I("\n".$c());
}$I$(2).indent$java_io_Writer$I(writer, indent);
}writer.write$I("]".$c());
return writer;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toList$',  function () {
var results=Clazz.new_([this.myArrayList.size$()],$I$(1,1).c$$I);
for (var element, $element = this.myArrayList.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (element == null  || $I$(2).NULL.equals$O(element) ) {
results.add$O(null);
} else if (Clazz.instanceOf(element, "org.json.JSONArray")) {
results.add$O((element).toList$());
} else if (Clazz.instanceOf(element, "org.json.JSONObject")) {
results.add$O((element).toMap$());
} else {
results.add$O(element);
}}
return results;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.myArrayList.isEmpty$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

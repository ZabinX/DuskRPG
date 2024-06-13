(function(){var P$=Clazz.newPackage("org.json"),p$1={},I$=[[0,['org.json.JSONObject','.Null'],'java.util.HashMap','org.json.JSONTokener','java.util.ResourceBundle','Thread','org.json.JSONArray','java.math.BigInteger','java.math.BigDecimal','Enum','java.lang.reflect.Modifier','java.util.Locale','org.json.JSONPointer','java.io.StringWriter','org.json.JSONWriter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONObject", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Null',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['map','java.util.Map']]
,['O',['NULL','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.map=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$org_json_JSONObject$SA',  function (jo, names) {
C$.c$$I.apply(this, [names.length]);
for (var i=0; i < names.length; i+=1) {
try {
this.putOnce$S$O(names[i], jo.opt$S(names[i]));
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"Exception")){
} else {
throw ignore;
}
}
}
}, 1);

Clazz.newMeth(C$, 'c$$org_json_JSONTokener',  function (x) {
C$.c$.apply(this, []);
var c;
var key;
if (x.nextClean$() != "{") {
throw x.syntaxError$S("A JSONObject text must begin with \'{\'");
}for (; ; ) {
c=x.nextClean$();
switch (c.$c()) {
case 0:
throw x.syntaxError$S("A JSONObject text must end with \'}\'");
case 125:
return;
default:
x.back$();
key=x.nextValue$().toString();
}
c=x.nextClean$();
if (c != ":") {
throw x.syntaxError$S("Expected a \':\' after a key");
}if (key != null ) {
if (this.opt$S(key) != null ) {
throw x.syntaxError$S("Duplicate key \"" + key + "\"" );
}var value=x.nextValue$();
if (value != null ) {
this.put$S$O(key, value);
}}switch ((x.nextClean$()).$c()) {
case 59:
case 44:
if (x.nextClean$() == "}") {
return;
}x.back$();
break;
case 125:
return;
default:
throw x.syntaxError$S("Expected a \',\' or \'}\'");
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (m) {
;C$.$init$.apply(this);
if (m == null ) {
this.map=Clazz.new_($I$(2,1));
} else {
this.map=Clazz.new_([m.size$()],$I$(2,1).c$$I);
for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (e.getKey$() == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null key."]);
}var value=e.getValue$();
if (value != null ) {
this.map.put$O$O(String.valueOf$O(e.getKey$()), C$.wrap$O(value));
}}
}}, 1);

Clazz.newMeth(C$, 'c$$O',  function (bean) {
C$.c$.apply(this, []);
p$1.populateMap$O.apply(this, [bean]);
}, 1);

Clazz.newMeth(C$, 'c$$O$SA',  function (object, names) {
C$.c$$I.apply(this, [names.length]);
var c=object.getClass$();
for (var i=0; i < names.length; i+=1) {
var name=names[i];
try {
this.putOpt$S$O(name, c.getField$S(name).get$O(object));
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"Exception")){
} else {
throw ignore;
}
}
}
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (source) {
C$.c$$org_json_JSONTokener.apply(this, [Clazz.new_($I$(3,1).c$$S,[source])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Locale',  function (baseName, locale) {
C$.c$.apply(this, []);
var bundle=$I$(4,"getBundle$S$java_util_Locale$O",[baseName, locale, $I$(5).currentThread$().getContextClassLoader$()]);
var keys=bundle.getKeys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
if (key != null ) {
var path=(key).split$S("\\.");
var last=path.length - 1;
var target=this;
for (var i=0; i < last; i+=1) {
var segment=path[i];
var nextTarget=target.optJSONObject$S(segment);
if (nextTarget == null ) {
nextTarget=Clazz.new_(C$);
target.put$S$O(segment, nextTarget);
}target=nextTarget;
}
target.put$S$O(path[last], bundle.getString$S(key));
}}
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.$init$.apply(this);
this.map=Clazz.new_($I$(2,1).c$$I,[initialCapacity]);
}, 1);

Clazz.newMeth(C$, 'accumulate$S$O',  function (key, value) {
C$.testValidity$O(value);
var object=this.opt$S(key);
if (object == null ) {
this.put$S$O(key, Clazz.instanceOf(value, "org.json.JSONArray") ? Clazz.new_($I$(6,1)).put$O(value) : value);
} else if (Clazz.instanceOf(object, "org.json.JSONArray")) {
(object).put$O(value);
} else {
this.put$S$O(key, Clazz.new_($I$(6,1)).put$O(object).put$O(value));
}return this;
});

Clazz.newMeth(C$, 'append$S$O',  function (key, value) {
C$.testValidity$O(value);
var object=this.opt$S(key);
if (object == null ) {
this.put$S$O(key, Clazz.new_($I$(6,1)).put$O(value));
} else if (Clazz.instanceOf(object, "org.json.JSONArray")) {
this.put$S$O(key, (object).put$O(value));
} else {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONObject[" + key + "] is not a JSONArray." ]);
}return this;
});

Clazz.newMeth(C$, 'doubleToString$D',  function (d) {
if (Double.isInfinite$D(d) || Double.isNaN$D(d) ) {
return "null";
}var string=Double.toString$D(d);
if (string.indexOf$I(".") > 0 && string.indexOf$I("e") < 0  && string.indexOf$I("E") < 0 ) {
while (string.endsWith$S("0")){
string=string.substring$I$I(0, string.length$() - 1);
}
if (string.endsWith$S(".")) {
string=string.substring$I$I(0, string.length$() - 1);
}}return string;
}, 1);

Clazz.newMeth(C$, 'get$S',  function (key) {
if (key == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Null key."]);
}var object=this.opt$S(key);
if (object == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONObject[" + C$.quote$S(key) + "] not found." ]);
}return object;
});

Clazz.newMeth(C$, 'getEnum$Class$S',  function (clazz, key) {
var val=this.optEnum$Class$S(clazz, key);
if (val == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONObject[" + C$.quote$S(key) + "] is not an enum of type " + C$.quote$S(clazz.getSimpleName$()) + "." ]);
}return val;
});

Clazz.newMeth(C$, 'getBoolean$S',  function (key) {
var object=this.get$S(key);
if (object.equals$O(Boolean.FALSE) || (Clazz.instanceOf(object, "java.lang.String") && (object).equalsIgnoreCase$S("false") ) ) {
return false;
} else if (object.equals$O(Boolean.TRUE) || (Clazz.instanceOf(object, "java.lang.String") && (object).equalsIgnoreCase$S("true") ) ) {
return true;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONObject[" + C$.quote$S(key) + "] is not a Boolean." ]);
});

Clazz.newMeth(C$, 'getBigInteger$S',  function (key) {
var object=this.get$S(key);
try {
return Clazz.new_([object.toString()],$I$(7,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONObject[" + C$.quote$S(key) + "] could not be converted to BigInteger." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getBigDecimal$S',  function (key) {
var object=this.get$S(key);
if (Clazz.instanceOf(object, "java.math.BigDecimal")) {
return object;
}try {
return Clazz.new_([object.toString()],$I$(8,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONObject[" + C$.quote$S(key) + "] could not be converted to BigDecimal." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getDouble$S',  function (key) {
var object=this.get$S(key);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).doubleValue$() : Double.parseDouble$S(object.toString());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONObject[" + C$.quote$S(key) + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getFloat$S',  function (key) {
var object=this.get$S(key);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).floatValue$() : Float.parseFloat$S(object.toString());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONObject[" + C$.quote$S(key) + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getNumber$S',  function (key) {
var object=this.get$S(key);
try {
if (Clazz.instanceOf(object, "java.lang.Number")) {
return object;
}return C$.stringToNumber$S(object.toString());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONObject[" + C$.quote$S(key) + "] is not a number." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getInt$S',  function (key) {
var object=this.get$S(key);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).intValue$() : Integer.parseInt$S(object);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONObject[" + C$.quote$S(key) + "] is not an int." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getJSONArray$S',  function (key) {
var object=this.get$S(key);
if (Clazz.instanceOf(object, "org.json.JSONArray")) {
return object;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONObject[" + C$.quote$S(key) + "] is not a JSONArray." ]);
});

Clazz.newMeth(C$, 'getJSONObject$S',  function (key) {
var object=this.get$S(key);
if (Clazz.instanceOf(object, "org.json.JSONObject")) {
return object;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONObject[" + C$.quote$S(key) + "] is not a JSONObject." ]);
});

Clazz.newMeth(C$, 'getLong$S',  function (key) {
var object=this.get$S(key);
try {
return Clazz.instanceOf(object, "java.lang.Number") ? (object).longValue$() : Long.parseLong$S(object);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["JSONObject[" + C$.quote$S(key) + "] is not a long." , e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getNames$org_json_JSONObject',  function (jo) {
if (jo.isEmpty$()) {
return null;
}return jo.keySet$().toArray$OA(Clazz.array(String, [jo.length$()]));
}, 1);

Clazz.newMeth(C$, 'getNames$O',  function (object) {
if (object == null ) {
return null;
}var klass=object.getClass$();
var fields=klass.getFields$();
var length=fields.length;
if (length == 0) {
return null;
}var names=Clazz.array(String, [length]);
for (var i=0; i < length; i+=1) {
names[i]=fields[i].getName$();
}
return names;
}, 1);

Clazz.newMeth(C$, 'getString$S',  function (key) {
var object=this.get$S(key);
if (Clazz.instanceOf(object, "java.lang.String")) {
return object;
}throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSONObject[" + C$.quote$S(key) + "] not a string." ]);
});

Clazz.newMeth(C$, 'has$S',  function (key) {
return this.map.containsKey$O(key);
});

Clazz.newMeth(C$, 'increment$S',  function (key) {
var value=this.opt$S(key);
if (value == null ) {
this.put$S$I(key, 1);
} else if (Clazz.instanceOf(value, "java.math.BigInteger")) {
this.put$S$O(key, (value).add$java_math_BigInteger($I$(7).ONE));
} else if (Clazz.instanceOf(value, "java.math.BigDecimal")) {
this.put$S$O(key, (value).add$java_math_BigDecimal($I$(8).ONE));
} else if (Clazz.instanceOf(value, "java.lang.Integer")) {
this.put$S$I(key, (value).intValue$() + 1);
} else if (Clazz.instanceOf(value, "java.lang.Long")) {
this.put$S$J(key, Long.$add((value).longValue$(),1));
} else if (Clazz.instanceOf(value, "java.lang.Double")) {
this.put$S$D(key, (value).doubleValue$() + 1.0);
} else if (Clazz.instanceOf(value, "java.lang.Float")) {
this.put$S$F(key, (value).floatValue$() + 1.0);
} else {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Unable to increment [" + C$.quote$S(key) + "]." ]);
}return this;
});

Clazz.newMeth(C$, 'isNull$S',  function (key) {
return C$.NULL.equals$O(this.opt$S(key));
});

Clazz.newMeth(C$, 'keys$',  function () {
return this.keySet$().iterator$();
});

Clazz.newMeth(C$, 'keySet$',  function () {
return this.map.keySet$();
});

Clazz.newMeth(C$, 'entrySet$',  function () {
return this.map.entrySet$();
});

Clazz.newMeth(C$, 'length$',  function () {
return this.map.size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.map.isEmpty$();
});

Clazz.newMeth(C$, 'names$',  function () {
if (this.map.isEmpty$()) {
return null;
}return Clazz.new_([this.map.keySet$()],$I$(6,1).c$$java_util_Collection);
});

Clazz.newMeth(C$, 'numberToString$Number',  function (number) {
if (number == null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Null pointer"]);
}C$.testValidity$O(number);
var string=number.toString();
if (string.indexOf$I(".") > 0 && string.indexOf$I("e") < 0  && string.indexOf$I("E") < 0 ) {
while (string.endsWith$S("0")){
string=string.substring$I$I(0, string.length$() - 1);
}
if (string.endsWith$S(".")) {
string=string.substring$I$I(0, string.length$() - 1);
}}return string;
}, 1);

Clazz.newMeth(C$, 'opt$S',  function (key) {
return key == null  ? null : this.map.get$O(key);
});

Clazz.newMeth(C$, 'optEnum$Class$S',  function (clazz, key) {
return this.optEnum$Class$S$Enum(clazz, key, null);
});

Clazz.newMeth(C$, 'optEnum$Class$S$Enum',  function (clazz, key, defaultValue) {
try {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
return defaultValue;
}if (clazz.isAssignableFrom$Class(val.getClass$())) {
var myE=val;
return myE;
}return $I$(9,"valueOf$Class$S",[clazz, val.toString()]);
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

Clazz.newMeth(C$, 'optBoolean$S',  function (key) {
return this.optBoolean$S$Z(key, false);
});

Clazz.newMeth(C$, 'optBoolean$S$Z',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Boolean")) {
return (val).booleanValue$();
}try {
return this.getBoolean$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'optBigDecimal$S$java_math_BigDecimal',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.math.BigDecimal")) {
return val;
}if (Clazz.instanceOf(val, "java.math.BigInteger")) {
return Clazz.new_($I$(8,1).c$$java_math_BigInteger,[val]);
}if (Clazz.instanceOf(val, "java.lang.Double") || Clazz.instanceOf(val, "java.lang.Float") ) {
return Clazz.new_([(val).doubleValue$()],$I$(8,1).c$$D);
}if (Clazz.instanceOf(val, "java.lang.Long") || Clazz.instanceOf(val, "java.lang.Integer") || Clazz.instanceOf(val, "java.lang.Short") || Clazz.instanceOf(val, "java.lang.Byte")  ) {
return Clazz.new_([(val).longValue$()],$I$(8,1).c$$J);
}try {
return Clazz.new_([val.toString()],$I$(8,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'optBigInteger$S$java_math_BigInteger',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.math.BigInteger")) {
return val;
}if (Clazz.instanceOf(val, "java.math.BigDecimal")) {
return (val).toBigInteger$();
}if (Clazz.instanceOf(val, "java.lang.Double") || Clazz.instanceOf(val, "java.lang.Float") ) {
return Clazz.new_([(val).doubleValue$()],$I$(8,1).c$$D).toBigInteger$();
}if (Clazz.instanceOf(val, "java.lang.Long") || Clazz.instanceOf(val, "java.lang.Integer") || Clazz.instanceOf(val, "java.lang.Short") || Clazz.instanceOf(val, "java.lang.Byte")  ) {
return $I$(7,"valueOf$J",[(val).longValue$()]);
}try {
var valStr=val.toString();
if (C$.isDecimalNotation$S(valStr)) {
return Clazz.new_($I$(8,1).c$$S,[valStr]).toBigInteger$();
}return Clazz.new_($I$(7,1).c$$S,[valStr]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'optDouble$S',  function (key) {
return this.optDouble$S$D(key, NaN);
});

Clazz.newMeth(C$, 'optDouble$S$D',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
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

Clazz.newMeth(C$, 'optFloat$S',  function (key) {
return this.optFloat$S$F(key, NaN);
});

Clazz.newMeth(C$, 'optFloat$S$F',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
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

Clazz.newMeth(C$, 'optInt$S',  function (key) {
return this.optInt$S$I(key, 0);
});

Clazz.newMeth(C$, 'optInt$S$I',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return (val).intValue$();
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return Clazz.new_($I$(8,1).c$$S,[val]).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optJSONArray$S',  function (key) {
var o=this.opt$S(key);
return Clazz.instanceOf(o, "org.json.JSONArray") ? o : null;
});

Clazz.newMeth(C$, 'optJSONObject$S',  function (key) {
var object=this.opt$S(key);
return Clazz.instanceOf(object, "org.json.JSONObject") ? object : null;
});

Clazz.newMeth(C$, 'optLong$S',  function (key) {
return this.optLong$S$J(key, 0);
});

Clazz.newMeth(C$, 'optLong$S$J',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return (val).longValue$();
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return Clazz.new_($I$(8,1).c$$S,[val]).longValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optNumber$S',  function (key) {
return this.optNumber$S$Number(key, null);
});

Clazz.newMeth(C$, 'optNumber$S$Number',  function (key, defaultValue) {
var val=this.opt$S(key);
if (C$.NULL.equals$O(val)) {
return defaultValue;
}if (Clazz.instanceOf(val, "java.lang.Number")) {
return val;
}if (Clazz.instanceOf(val, "java.lang.String")) {
try {
return C$.stringToNumber$S(val);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return defaultValue;
} else {
throw e;
}
}
}return defaultValue;
});

Clazz.newMeth(C$, 'optString$S',  function (key) {
return this.optString$S$S(key, "");
});

Clazz.newMeth(C$, 'optString$S$S',  function (key, defaultValue) {
var object=this.opt$S(key);
return C$.NULL.equals$O(object) ? defaultValue : object.toString();
});

Clazz.newMeth(C$, 'populateMap$O',  function (bean) {
var klass=bean.getClass$();
var includeSuperClass=klass.getClassLoader$() != null ;
var methods=includeSuperClass ? klass.getMethods$() : klass.getDeclaredMethods$();
for (var method, $method = 0, $$method = methods; $method<$$method.length&&((method=($$method[$method])),1);$method++) {
var modifiers=method.getModifiers$();
if ($I$(10).isPublic$I(modifiers) && !$I$(10).isStatic$I(modifiers) && method.getParameterTypes$().length == 0   && !method.isBridge$()  && p$1.isValidMethodName$S.apply(this, [method.getName$()]) ) {
var key=p$1.getKeyNameFromMethod$java_lang_reflect_Method.apply(this, [method]);
if (key != null  && !key.isEmpty$() ) {
try {
var result=method.invoke$O$OA(bean, Clazz.array(java.lang.Object, -1, []));
if (result != null ) {
this.map.put$O$O(key, C$.wrap$O(result));
if (Clazz.instanceOf(result, "java.io.Closeable")) {
try {
(result).close$();
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"java.io.IOException")){
} else {
throw ignore;
}
}
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var ignore = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var ignore = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ignore = e$$;
{
}
} else {
throw e$$;
}
}
}}}
}, p$1);

Clazz.newMeth(C$, 'isValidMethodName$S',  function (name) {
return !"getClass".equals$O(name) && !"getDeclaringClass".equals$O(name) ;
}, p$1);

Clazz.newMeth(C$, 'getKeyNameFromMethod$java_lang_reflect_Method',  function (method) {
var key;
var name=method.getName$();
if (name.startsWith$S("get") && name.length$() > 3 ) {
key=name.substring$I(3);
} else if (name.startsWith$S("is") && name.length$() > 2 ) {
key=name.substring$I(2);
} else {
return null;
}if (Character.isLowerCase$C(key.charAt$I(0))) {
return null;
}if (key.length$() == 1) {
key=key.toLowerCase$java_util_Locale($I$(11).ROOT);
} else if (!Character.isUpperCase$C(key.charAt$I(1))) {
key=key.substring$I$I(0, 1).toLowerCase$java_util_Locale($I$(11).ROOT) + key.substring$I(1);
}return (1 ? key.split("$")[0] :key);
}, p$1);

Clazz.newMeth(C$, 'put$S$Z',  function (key, value) {
return this.put$S$O(key, value ? Boolean.TRUE : Boolean.FALSE);
});

Clazz.newMeth(C$, 'put$S$java_util_Collection',  function (key, value) {
return this.put$S$O(key, Clazz.new_($I$(6,1).c$$java_util_Collection,[value]));
});

Clazz.newMeth(C$, 'put$S$D',  function (key, value) {
return this.put$S$O(key, Double.valueOf$D(value));
});

Clazz.newMeth(C$, 'put$S$F',  function (key, value) {
return this.put$S$O(key, Float.valueOf$F(value));
});

Clazz.newMeth(C$, 'put$S$I',  function (key, value) {
return this.put$S$O(key, Integer.valueOf$I(value));
});

Clazz.newMeth(C$, 'put$S$J',  function (key, value) {
return this.put$S$O(key, Long.valueOf$J(value));
});

Clazz.newMeth(C$, 'put$S$java_util_Map',  function (key, value) {
return this.put$S$O(key, Clazz.new_(C$.c$$java_util_Map,[value]));
});

Clazz.newMeth(C$, 'put$S$O',  function (key, value) {
if (key == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null key."]);
}if (value != null ) {
C$.testValidity$O(value);
this.map.put$O$O(key, value);
} else {
this.remove$S(key);
}return this;
});

Clazz.newMeth(C$, 'putOnce$S$O',  function (key, value) {
if (key != null  && value != null  ) {
if (this.opt$S(key) != null ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Duplicate key \"" + key + "\"" ]);
}return this.put$S$O(key, value);
}return this;
});

Clazz.newMeth(C$, 'putOpt$S$O',  function (key, value) {
if (key != null  && value != null  ) {
return this.put$S$O(key, value);
}return this;
});

Clazz.newMeth(C$, 'query$S',  function (jsonPointer) {
return this.query$org_json_JSONPointer(Clazz.new_($I$(12,1).c$$S,[jsonPointer]));
});

Clazz.newMeth(C$, 'query$org_json_JSONPointer',  function (jsonPointer) {
return jsonPointer.queryFrom$O(this);
});

Clazz.newMeth(C$, 'optQuery$S',  function (jsonPointer) {
return this.optQuery$org_json_JSONPointer(Clazz.new_($I$(12,1).c$$S,[jsonPointer]));
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

Clazz.newMeth(C$, 'quote$S',  function (string) {
var sw=Clazz.new_($I$(13,1));
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(sw.getBuffer$());
{
try {
return C$.quote$S$java_io_Writer(string, sw).toString();
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"java.io.IOException")){
return "";
} else {
throw ignored;
}
}
}}, 1);

Clazz.newMeth(C$, 'quote$S$java_io_Writer',  function (string, w) {
if (string == null  || string.isEmpty$() ) {
w.write$S("\"\"");
return w;
}var b;
var c=String.fromCharCode(0);
var hhhh;
var i;
var len=string.length$();
w.write$I("\"".$c());
for (i=0; i < len; i+=1) {
b=c;
c=string.charAt$I(i);
switch (c.$c()) {
case 92:
case 34:
w.write$I("\\".$c());
w.write$I(c.$c());
break;
case 47:
if (b == "<") {
w.write$I("\\".$c());
}w.write$I(c.$c());
break;
case 8:
w.write$S("\\b");
break;
case 9:
w.write$S("\\t");
break;
case 10:
w.write$S("\\n");
break;
case 12:
w.write$S("\\f");
break;
case 13:
w.write$S("\\r");
break;
default:
if (c < " " || (c >= "\u0080" && c < "\u00a0" )  || (c >= "\u2000" && c < "\u2100" ) ) {
w.write$S("\\u");
hhhh=Integer.toHexString$I(c.$c());
w.write$S$I$I("0000", 0, 4 - hhhh.length$());
w.write$S(hhhh);
} else {
w.write$I(c.$c());
}}
}
w.write$I("\"".$c());
return w;
}, 1);

Clazz.newMeth(C$, 'remove$S',  function (key) {
return this.map.remove$O(key);
});

Clazz.newMeth(C$, 'similar$O',  function (other) {
try {
if (!(Clazz.instanceOf(other, "org.json.JSONObject"))) {
return false;
}if (!this.keySet$().equals$O((other).keySet$())) {
return false;
}for (var entry, $entry = this.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var name=entry.getKey$();
var valueThis=entry.getValue$();
var valueOther=(other).get$S(name);
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
} catch (exception) {
return false;
}
});

Clazz.newMeth(C$, 'isDecimalNotation$S',  function (val) {
return val.indexOf$I(".") > -1 || val.indexOf$I("e") > -1  || val.indexOf$I("E") > -1  || "-0".equals$O(val) ;
}, 1);

Clazz.newMeth(C$, 'stringToNumber$S',  function (val) {
var initial=val.charAt$I(0);
if ((initial >= "0" && initial <= "9" ) || initial == "-" ) {
if (C$.isDecimalNotation$S(val)) {
var d;
return (val.length$() <= 14 && !(d=Double.valueOf$S(val)).isInfinite$()  && !d.isNaN$()  ? d : Clazz.new_($I$(8,1).c$$S,[val]));
}var n=(1 ? parseInt(val) :0);
if (n >= -2147483648 && n <= 2147483647 ) {
return Integer.valueOf$S(val);
}if (val.equals$O("" + n)) {
return Long.valueOf$S(val);
}return Clazz.new_($I$(7,1).c$$S,[val]);
}throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["val [" + val + "] is not a valid number." ]);
}, 1);

Clazz.newMeth(C$, 'stringToValue$S',  function (string) {
if (string.equals$O("")) {
return string;
}if (string.equalsIgnoreCase$S("true")) {
return Boolean.TRUE;
}if (string.equalsIgnoreCase$S("false")) {
return Boolean.FALSE;
}if (string.equalsIgnoreCase$S("null")) {
return C$.NULL;
}var initial=string.charAt$I(0);
if ((initial >= "0" && initial <= "9" ) || initial == "-" ) {
try {
if (C$.isDecimalNotation$S(string)) {
var d=Double.valueOf$S(string);
if (!d.isInfinite$() && !d.isNaN$() ) {
return d;
}} else {
var myLong=Long.valueOf$S(string);
if (string.equals$O(myLong.toString())) {
if (Long.$eq(myLong.longValue$(),myLong.intValue$() )) {
return Integer.valueOf$I(myLong.intValue$());
}return myLong;
}}} catch (ignore) {
if (Clazz.exceptionOf(ignore,"Exception")){
} else {
throw ignore;
}
}
}return string;
}, 1);

Clazz.newMeth(C$, 'testValidity$O',  function (o) {
if (o != null ) {
if (Clazz.instanceOf(o, "java.lang.Double")) {
if ((o).isInfinite$() || (o).isNaN$() ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSON does not allow non-finite numbers."]);
}} else if (Clazz.instanceOf(o, "java.lang.Float")) {
if ((o).isInfinite$() || (o).isNaN$() ) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["JSON does not allow non-finite numbers."]);
}}}}, 1);

Clazz.newMeth(C$, 'toJSONArray$org_json_JSONArray',  function (names) {
if (names == null  || names.isEmpty$() ) {
return null;
}var ja=Clazz.new_($I$(6,1));
for (var i=0; i < names.length$(); i+=1) {
ja.put$O(this.opt$S(names.getString$I(i)));
}
return ja;
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
var w=Clazz.new_($I$(13,1));
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(w.getBuffer$());
{
return this.write$java_io_Writer$I$I(w, indentFactor, 0).toString();
}});

Clazz.newMeth(C$, 'valueToString$O',  function (value) {
return $I$(14).valueToString$O(value);
}, 1);

Clazz.newMeth(C$, 'wrap$O',  function (object) {
try {
if (object == null ) {
return C$.NULL;
}if (Clazz.instanceOf(object, "org.json.JSONObject") || Clazz.instanceOf(object, "org.json.JSONArray") || C$.NULL.equals$O(object) || Clazz.instanceOf(object, "org.json.JSONString") || Clazz.instanceOf(object, "java.lang.Byte") || Clazz.instanceOf(object, "java.lang.Character") || Clazz.instanceOf(object, "java.lang.Short") || Clazz.instanceOf(object, "java.lang.Integer") || Clazz.instanceOf(object, "java.lang.Long") || Clazz.instanceOf(object, "java.lang.Boolean") || Clazz.instanceOf(object, "java.lang.Float") || Clazz.instanceOf(object, "java.lang.Double") || Clazz.instanceOf(object, "java.lang.String") || Clazz.instanceOf(object, "java.math.BigInteger") || Clazz.instanceOf(object, "java.math.BigDecimal") || Clazz.instanceOf(object, "java.lang.Enum")  ) {
return object;
}if (Clazz.instanceOf(object, "java.util.Collection")) {
var coll=object;
return Clazz.new_($I$(6,1).c$$java_util_Collection,[coll]);
}if (object.getClass$().isArray$()) {
return Clazz.new_($I$(6,1).c$$O,[object]);
}if (Clazz.instanceOf(object, "java.util.Map")) {
var map=object;
return Clazz.new_(C$.c$$java_util_Map,[map]);
}var className=object.getClass$().getName$();
if (className.startsWith$S("java.") || className.startsWith$S("javax.") ) {
return object.toString();
}return Clazz.new_(C$.c$$O,[object]);
} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
return null;
} else {
throw exception;
}
}
}, 1);

Clazz.newMeth(C$, 'write$java_io_Writer',  function (writer) {
return this.write$java_io_Writer$I$I(writer, 0, 0);
});

Clazz.newMeth(C$, 'writeValue$java_io_Writer$O$I$I',  function (writer, value, indentFactor, indent) {
if (value == null  || value.equals$O(null) ) {
writer.write$S("null");
} else if (Clazz.instanceOf(value, "org.json.JSONObject")) {
(value).write$java_io_Writer$I$I(writer, indentFactor, indent);
} else if (Clazz.instanceOf(value, "org.json.JSONArray")) {
(value).write$java_io_Writer$I$I(writer, indentFactor, indent);
} else if (Clazz.instanceOf(value, "java.util.Map")) {
var map=value;
Clazz.new_(C$.c$$java_util_Map,[map]).write$java_io_Writer$I$I(writer, indentFactor, indent);
} else if (Clazz.instanceOf(value, "java.util.Collection")) {
var coll=value;
Clazz.new_($I$(6,1).c$$java_util_Collection,[coll]).write$java_io_Writer$I$I(writer, indentFactor, indent);
} else if (value.getClass$().isArray$()) {
Clazz.new_($I$(6,1).c$$O,[value]).write$java_io_Writer$I$I(writer, indentFactor, indent);
} else {
writer.write$S($I$(14).valueToString$O(value));
}return writer;
}, 1);

Clazz.newMeth(C$, 'indent$java_io_Writer$I',  function (writer, indent) {
for (var i=0; i < indent; i+=1) {
writer.write$I(" ".$c());
}
}, 1);

Clazz.newMeth(C$, 'write$java_io_Writer$I$I',  function (writer, indentFactor, indent) {
try {
var commanate=false;
var length=this.length$();
writer.write$I("{".$c());
if (length == 1) {
var entry=this.entrySet$().iterator$().next$();
var key=entry.getKey$();
writer.write$S(C$.quote$S(key));
writer.write$I(":".$c());
if (indentFactor > 0) {
writer.write$I(" ".$c());
}try {
C$.writeValue$java_io_Writer$O$I$I(writer, entry.getValue$(), indentFactor, indent);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["Unable to write JSONObject value for key: " + key, e]);
} else {
throw e;
}
}
} else if (length != 0) {
var newindent=indent + indentFactor;
for (var entry, $entry = this.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (commanate) {
writer.write$I(",".$c());
}if (indentFactor > 0) {
writer.write$I("\n".$c());
}C$.indent$java_io_Writer$I(writer, newindent);
var key=entry.getKey$();
writer.write$S(C$.quote$S(key));
writer.write$I(":".$c());
if (indentFactor > 0) {
writer.write$I(" ".$c());
}try {
C$.writeValue$java_io_Writer$O$I$I(writer, entry.getValue$(), indentFactor, newindent);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S$Throwable,["Unable to write JSONObject value for key: " + key, e]);
} else {
throw e;
}
}
commanate=true;
}
if (indentFactor > 0) {
writer.write$I("\n".$c());
}C$.indent$java_io_Writer$I(writer, indent);
}writer.write$I("}".$c());
return writer;
} catch (exception) {
if (Clazz.exceptionOf(exception,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$Throwable,[exception]);
} else {
throw exception;
}
}
});

Clazz.newMeth(C$, 'toMap$',  function () {
var results=Clazz.new_($I$(2,1));
for (var entry, $entry = this.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var value;
if (entry.getValue$() == null  || C$.NULL.equals$O(entry.getValue$()) ) {
value=null;
} else if (Clazz.instanceOf(entry.getValue$(), "org.json.JSONObject")) {
value=(entry.getValue$()).toMap$();
} else if (Clazz.instanceOf(entry.getValue$(), "org.json.JSONArray")) {
value=(entry.getValue$()).toList$();
} else {
value=entry.getValue$();
}results.put$O$O(entry.getKey$(), value);
}
return results;
});

C$.$static$=function(){C$.$static$=0;
C$.NULL=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSONObject, "Null", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'clone$',  function () {
return this;
});

Clazz.newMeth(C$, 'equals$O',  function (object) {
return object == null  || object === this  ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return 0;
});

Clazz.newMeth(C$, 'toString',  function () {
return "null";
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

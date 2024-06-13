(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'org.json.XML','org.json.JSONArray','org.json.JSONObject','org.json.XMLTokener','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONML");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parse$org_json_XMLTokener$Z$org_json_JSONArray$Z',  function (x, arrayForm, ja, keepStrings) {
var attribute;
var c;
var closeTag=null;
var i;
var newja=null;
var newjo=null;
var token;
var tagName=null;
while (true){
if (!x.more$()) {
throw x.syntaxError$S("Bad XML");
}token=x.nextContent$();
if (token === $I$(1).LT ) {
token=x.nextToken$();
if (Clazz.instanceOf(token, "java.lang.Character")) {
if (token === $I$(1).SLASH ) {
token=x.nextToken$();
if (!(Clazz.instanceOf(token, "java.lang.String"))) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Expected a closing name instead of '" + token + "'." ]);
}if (x.nextToken$() !== $I$(1).GT ) {
throw x.syntaxError$S("Misshaped close tag");
}return token;
} else if (token === $I$(1).BANG ) {
c=x.next$();
if (c == "-") {
if (x.next$() == "-") {
x.skipPast$S("-->");
} else {
x.back$();
}} else if (c == "[") {
token=x.nextToken$();
if (token.equals$O("CDATA") && x.next$() == "[" ) {
if (ja != null ) {
ja.put$O(x.nextCDATA$());
}} else {
throw x.syntaxError$S("Expected \'CDATA[\'");
}} else {
i=1;
do {
token=x.nextMeta$();
if (token == null ) {
throw x.syntaxError$S("Missing \'>\' after \'<!\'.");
} else if (token === $I$(1).LT ) {
i+=1;
} else if (token === $I$(1).GT ) {
i-=1;
}} while (i > 0);
}} else if (token === $I$(1).QUEST ) {
x.skipPast$S("?>");
} else {
throw x.syntaxError$S("Misshaped tag");
}} else {
if (!(Clazz.instanceOf(token, "java.lang.String"))) {
throw x.syntaxError$S("Bad tagName '" + token + "'." );
}tagName=token;
newja=Clazz.new_($I$(2,1));
newjo=Clazz.new_($I$(3,1));
if (arrayForm) {
newja.put$O(tagName);
if (ja != null ) {
ja.put$O(newja);
}} else {
newjo.put$S$O("tagName", tagName);
if (ja != null ) {
ja.put$O(newjo);
}}token=null;
for (; ; ) {
if (token == null ) {
token=x.nextToken$();
}if (token == null ) {
throw x.syntaxError$S("Misshaped tag");
}if (!(Clazz.instanceOf(token, "java.lang.String"))) {
break;
}attribute=token;
if (!arrayForm && ("tagName".equals$O(attribute) || "childNode".equals$O(attribute) ) ) {
throw x.syntaxError$S("Reserved attribute.");
}token=x.nextToken$();
if (token === $I$(1).EQ ) {
token=x.nextToken$();
if (!(Clazz.instanceOf(token, "java.lang.String"))) {
throw x.syntaxError$S("Missing value");
}newjo.accumulate$S$O(attribute, keepStrings ? (token) : $I$(1).stringToValue$S(token));
token=null;
} else {
newjo.accumulate$S$O(attribute, "");
}}
if (arrayForm && newjo.length$() > 0 ) {
newja.put$O(newjo);
}if (token === $I$(1).SLASH ) {
if (x.nextToken$() !== $I$(1).GT ) {
throw x.syntaxError$S("Misshaped tag");
}if (ja == null ) {
if (arrayForm) {
return newja;
}return newjo;
}} else {
if (token !== $I$(1).GT ) {
throw x.syntaxError$S("Misshaped tag");
}closeTag=C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(x, arrayForm, newja, keepStrings);
if (closeTag != null ) {
if (!closeTag.equals$O(tagName)) {
throw x.syntaxError$S("Mismatched '" + tagName + "' and '" + closeTag + "'" );
}tagName=null;
if (!arrayForm && newja.length$() > 0 ) {
newjo.put$S$O("childNodes", newja);
}if (ja == null ) {
if (arrayForm) {
return newja;
}return newjo;
}}}}} else {
if (ja != null ) {
ja.put$O(Clazz.instanceOf(token, "java.lang.String") ? keepStrings ? $I$(1).unescape$S(token) : $I$(1).stringToValue$S(token) : token);
}}}
}, 1);

Clazz.newMeth(C$, 'toJSONArray$S',  function (string) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(Clazz.new_($I$(4,1).c$$S,[string]), true, null, false);
}, 1);

Clazz.newMeth(C$, 'toJSONArray$S$Z',  function (string, keepStrings) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(Clazz.new_($I$(4,1).c$$S,[string]), true, null, keepStrings);
}, 1);

Clazz.newMeth(C$, 'toJSONArray$org_json_XMLTokener$Z',  function (x, keepStrings) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(x, true, null, keepStrings);
}, 1);

Clazz.newMeth(C$, 'toJSONArray$org_json_XMLTokener',  function (x) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(x, true, null, false);
}, 1);

Clazz.newMeth(C$, 'toJSONObject$S',  function (string) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(Clazz.new_($I$(4,1).c$$S,[string]), false, null, false);
}, 1);

Clazz.newMeth(C$, 'toJSONObject$S$Z',  function (string, keepStrings) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(Clazz.new_($I$(4,1).c$$S,[string]), false, null, keepStrings);
}, 1);

Clazz.newMeth(C$, 'toJSONObject$org_json_XMLTokener',  function (x) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(x, false, null, false);
}, 1);

Clazz.newMeth(C$, 'toJSONObject$org_json_XMLTokener$Z',  function (x, keepStrings) {
return C$.parse$org_json_XMLTokener$Z$org_json_JSONArray$Z(x, false, null, keepStrings);
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONArray',  function (ja) {
var i;
var jo;
var length;
var object;
var sb=Clazz.new_($I$(5,1));
var tagName;
tagName=ja.getString$I(0);
$I$(1).noSpace$S(tagName);
tagName=$I$(1).escape$S(tagName);
sb.append$C("<");
sb.append$S(tagName);
object=ja.opt$I(1);
if (Clazz.instanceOf(object, "org.json.JSONObject")) {
i=2;
jo=object;
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=jo.opt$S(key);
$I$(1).noSpace$S(key);
if (value != null ) {
sb.append$C(" ");
sb.append$S($I$(1).escape$S(key));
sb.append$C("=");
sb.append$C("\"");
sb.append$S($I$(1,"escape$S",[value.toString()]));
sb.append$C("\"");
}}
} else {
i=1;
}length=ja.length$();
if (i >= length) {
sb.append$C("/");
sb.append$C(">");
} else {
sb.append$C(">");
do {
object=ja.get$I(i);
i+=1;
if (object != null ) {
if (Clazz.instanceOf(object, "java.lang.String")) {
sb.append$S($I$(1,"escape$S",[object.toString()]));
} else if (Clazz.instanceOf(object, "org.json.JSONObject")) {
sb.append$S(C$.toString$org_json_JSONObject(object));
} else if (Clazz.instanceOf(object, "org.json.JSONArray")) {
sb.append$S(C$.toString$org_json_JSONArray(object));
} else {
sb.append$S(object.toString());
}}} while (i < length);
sb.append$C("<");
sb.append$C("/");
sb.append$S(tagName);
sb.append$C(">");
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONObject',  function (jo) {
var sb=Clazz.new_($I$(5,1));
var i;
var ja;
var length;
var object;
var tagName;
var value;
tagName=jo.optString$S("tagName");
if (tagName == null ) {
return $I$(1,"escape$S",[jo.toString()]);
}$I$(1).noSpace$S(tagName);
tagName=$I$(1).escape$S(tagName);
sb.append$C("<");
sb.append$S(tagName);
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (!"tagName".equals$O(key) && !"childNodes".equals$O(key) ) {
$I$(1).noSpace$S(key);
value=jo.opt$S(key);
if (value != null ) {
sb.append$C(" ");
sb.append$S($I$(1).escape$S(key));
sb.append$C("=");
sb.append$C("\"");
sb.append$S($I$(1,"escape$S",[value.toString()]));
sb.append$C("\"");
}}}
ja=jo.optJSONArray$S("childNodes");
if (ja == null ) {
sb.append$C("/");
sb.append$C(">");
} else {
sb.append$C(">");
length=ja.length$();
for (i=0; i < length; i+=1) {
object=ja.get$I(i);
if (object != null ) {
if (Clazz.instanceOf(object, "java.lang.String")) {
sb.append$S($I$(1,"escape$S",[object.toString()]));
} else if (Clazz.instanceOf(object, "org.json.JSONObject")) {
sb.append$S(C$.toString$org_json_JSONObject(object));
} else if (Clazz.instanceOf(object, "org.json.JSONArray")) {
sb.append$S(C$.toString$org_json_JSONArray(object));
} else {
sb.append$S(object.toString());
}}}
sb.append$C("<");
sb.append$C("/");
sb.append$S(tagName);
sb.append$C(">");
}return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

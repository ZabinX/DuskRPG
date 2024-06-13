(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'StringBuilder','org.json.XMLTokener','org.json.JSONObject','java.io.StringReader','org.json.JSONArray']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XML");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['AMP','Character','+APOS','+BANG','+EQ','+GT','+LT','+QUEST','+QUOT','+SLASH']]]

Clazz.newMeth(C$, 'codePointIterator$S',  function (string) {
return ((P$.XML$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Iterable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return ((P$.XML$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "XML$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nextIndex=0;
this.length=this.$finals$.string.length$();
},1);

C$.$fields$=[['I',['nextIndex','length']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.nextIndex < this.length;
});

Clazz.newMeth(C$, 'next$',  function () {
var result=this.$finals$.string.codePointAt$I(this.nextIndex);
this.nextIndex+=Character.charCount$I(result);
return Integer.valueOf$I(result);
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.XML$1$1.$init$,[this, {string:this.$finals$.string}]));
});
})()
), Clazz.new_(P$.XML$1.$init$,[this, {string:string}]));
}, 1);

Clazz.newMeth(C$, 'escape$S',  function (string) {
var sb=Clazz.new_([string.length$()],$I$(1,1).c$$I);
for (var cp, $cp = C$.codePointIterator$S(string).iterator$(); $cp.hasNext$()&&((cp=($cp.next$()).intValue$()),1);) {
switch (cp) {
case 38:
sb.append$S("&amp;");
break;
case 60:
sb.append$S("&lt;");
break;
case 62:
sb.append$S("&gt;");
break;
case 34:
sb.append$S("&quot;");
break;
case 39:
sb.append$S("&apos;");
break;
default:
if (C$.mustEscape$I(cp)) {
sb.append$S("&#x");
sb.append$S(Integer.toHexString$I(cp));
sb.append$C(";");
} else {
sb.appendCodePoint$I(cp);
}}
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'mustEscape$I',  function (cp) {
return (Character.isISOControl$I(cp) && cp != 9  && cp != 10  && cp != 13 ) || !((cp >= 32 && cp <= 55295 ) || (cp >= 57344 && cp <= 65533 ) || (cp >= 65536 && cp <= 1114111 )  ) ;
}, 1);

Clazz.newMeth(C$, 'unescape$S',  function (string) {
var sb=Clazz.new_([string.length$()],$I$(1,1).c$$I);
for (var i=0, length=string.length$(); i < length; i++) {
var c=string.charAt$I(i);
if (c == "&") {
var semic=string.indexOf$I$I(";", i);
if (semic > i) {
var entity=string.substring$I$I(i + 1, semic);
sb.append$S($I$(2).unescapeEntity$S(entity));
i+=entity.length$() + 1;
} else {
sb.append$C(c);
}} else {
sb.append$C(c);
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'noSpace$S',  function (string) {
var i;
var length=string.length$();
if (length == 0) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["Empty string."]);
}for (i=0; i < length; i+=1) {
if (Character.isWhitespace$C(string.charAt$I(i))) {
throw Clazz.new_(Clazz.load('org.json.JSONException').c$$S,["'" + string + "' contains a space character." ]);
}}
}, 1);

Clazz.newMeth(C$, 'parse$org_json_XMLTokener$org_json_JSONObject$S$Z',  function (x, context, name, keepStrings) {
var c;
var i;
var jsonobject=null;
var string;
var tagName;
var token;
token=x.nextToken$();
if (token === C$.BANG ) {
c=x.next$();
if (c == "-") {
if (x.next$() == "-") {
x.skipPast$S("-->");
return false;
}x.back$();
} else if (c == "[") {
token=x.nextToken$();
if ("CDATA".equals$O(token)) {
if (x.next$() == "[") {
string=x.nextCDATA$();
if (string.length$() > 0) {
context.accumulate$S$O("content", string);
}return false;
}}throw x.syntaxError$S("Expected \'CDATA[\'");
}i=1;
do {
token=x.nextMeta$();
if (token == null ) {
throw x.syntaxError$S("Missing \'>\' after \'<!\'.");
} else if (token === C$.LT ) {
i+=1;
} else if (token === C$.GT ) {
i-=1;
}} while (i > 0);
return false;
} else if (token === C$.QUEST ) {
x.skipPast$S("?>");
return false;
} else if (token === C$.SLASH ) {
token=x.nextToken$();
if (name == null ) {
throw x.syntaxError$S("Mismatched close tag " + token);
}if (!token.equals$O(name)) {
throw x.syntaxError$S("Mismatched " + name + " and " + token );
}if (x.nextToken$() !== C$.GT ) {
throw x.syntaxError$S("Misshaped close tag");
}return true;
} else if (Clazz.instanceOf(token, "java.lang.Character")) {
throw x.syntaxError$S("Misshaped tag");
} else {
tagName=token;
token=null;
jsonobject=Clazz.new_($I$(3,1));
for (; ; ) {
if (token == null ) {
token=x.nextToken$();
}if (Clazz.instanceOf(token, "java.lang.String")) {
string=token;
token=x.nextToken$();
if (token === C$.EQ ) {
token=x.nextToken$();
if (!(Clazz.instanceOf(token, "java.lang.String"))) {
throw x.syntaxError$S("Missing value");
}jsonobject.accumulate$S$O(string, keepStrings ? (token) : C$.stringToValue$S(token));
token=null;
} else {
jsonobject.accumulate$S$O(string, "");
}} else if (token === C$.SLASH ) {
if (x.nextToken$() !== C$.GT ) {
throw x.syntaxError$S("Misshaped tag");
}if (jsonobject.length$() > 0) {
context.accumulate$S$O(tagName, jsonobject);
} else {
context.accumulate$S$O(tagName, "");
}return false;
} else if (token === C$.GT ) {
for (; ; ) {
token=x.nextContent$();
if (token == null ) {
if (tagName != null ) {
throw x.syntaxError$S("Unclosed tag " + tagName);
}return false;
} else if (Clazz.instanceOf(token, "java.lang.String")) {
string=token;
if (string.length$() > 0) {
jsonobject.accumulate$S$O("content", keepStrings ? string : C$.stringToValue$S(string));
}} else if (token === C$.LT ) {
if (C$.parse$org_json_XMLTokener$org_json_JSONObject$S$Z(x, jsonobject, tagName, keepStrings)) {
if (jsonobject.length$() == 0) {
context.accumulate$S$O(tagName, "");
} else if (jsonobject.length$() == 1 && jsonobject.opt$S("content") != null  ) {
context.accumulate$S$O(tagName, jsonobject.opt$S("content"));
} else {
context.accumulate$S$O(tagName, jsonobject);
}return false;
}}}
} else {
throw x.syntaxError$S("Misshaped tag");
}}
}}, 1);

Clazz.newMeth(C$, 'stringToValue$S',  function (string) {
if (string.equals$O("")) {
return string;
}if (string.equalsIgnoreCase$S("true")) {
return Boolean.TRUE;
}if (string.equalsIgnoreCase$S("false")) {
return Boolean.FALSE;
}if (string.equalsIgnoreCase$S("null")) {
return $I$(3).NULL;
}var initial=string.charAt$I(0);
if ((initial >= "0" && initial <= "9" ) || initial == "-" ) {
try {
if (string.indexOf$I(".") > -1 || string.indexOf$I("e") > -1  || string.indexOf$I("E") > -1  || "-0".equals$O(string) ) {
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

Clazz.newMeth(C$, 'toJSONObject$S',  function (string) {
return C$.toJSONObject$S$Z(string, false);
}, 1);

Clazz.newMeth(C$, 'toJSONObject$java_io_Reader',  function (reader) {
return C$.toJSONObject$java_io_Reader$Z(reader, false);
}, 1);

Clazz.newMeth(C$, 'toJSONObject$java_io_Reader$Z',  function (reader, keepStrings) {
var jo=Clazz.new_($I$(3,1));
var x=Clazz.new_($I$(2,1).c$$java_io_Reader,[reader]);
while (x.more$()){
x.skipPast$S("<");
if (x.more$()) {
C$.parse$org_json_XMLTokener$org_json_JSONObject$S$Z(x, jo, null, keepStrings);
}}
return jo;
}, 1);

Clazz.newMeth(C$, 'toJSONObject$S$Z',  function (string, keepStrings) {
return C$.toJSONObject$java_io_Reader$Z(Clazz.new_($I$(4,1).c$$S,[string]), keepStrings);
}, 1);

Clazz.newMeth(C$, 'toString$O',  function (object) {
return C$.toString$O$S(object, null);
}, 1);

Clazz.newMeth(C$, 'toString$O$S',  function (object, tagName) {
var sb=Clazz.new_($I$(1,1));
var ja;
var jo;
var string;
if (Clazz.instanceOf(object, "org.json.JSONObject")) {
if (tagName != null ) {
sb.append$C("<");
sb.append$S(tagName);
sb.append$C(">");
}jo=object;
for (var key, $key = jo.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=jo.opt$S(key);
if (value == null ) {
value="";
} else if (value.getClass$().isArray$()) {
value=Clazz.new_($I$(5,1).c$$O,[value]);
}if ("content".equals$O(key)) {
if (Clazz.instanceOf(value, "org.json.JSONArray")) {
ja=value;
var jaLength=ja.length$();
for (var i=0; i < jaLength; i++) {
if (i > 0) {
sb.append$C("\n");
}var val=ja.opt$I(i);
sb.append$S(C$.escape$S(val.toString()));
}
} else {
sb.append$S(C$.escape$S(value.toString()));
}} else if (Clazz.instanceOf(value, "org.json.JSONArray")) {
ja=value;
var jaLength=ja.length$();
for (var i=0; i < jaLength; i++) {
var val=ja.opt$I(i);
if (Clazz.instanceOf(val, "org.json.JSONArray")) {
sb.append$C("<");
sb.append$S(key);
sb.append$C(">");
sb.append$S(C$.toString$O(val));
sb.append$S("</");
sb.append$S(key);
sb.append$C(">");
} else {
sb.append$S(C$.toString$O$S(val, key));
}}
} else if ("".equals$O(value)) {
sb.append$C("<");
sb.append$S(key);
sb.append$S("/>");
} else {
sb.append$S(C$.toString$O$S(value, key));
}}
if (tagName != null ) {
sb.append$S("</");
sb.append$S(tagName);
sb.append$C(">");
}return sb.toString();
}if (object != null  && (Clazz.instanceOf(object, "org.json.JSONArray") || object.getClass$().isArray$() ) ) {
if (object.getClass$().isArray$()) {
ja=Clazz.new_($I$(5,1).c$$O,[object]);
} else {
ja=object;
}var jaLength=ja.length$();
for (var i=0; i < jaLength; i++) {
var val=ja.opt$I(i);
sb.append$S(C$.toString$O$S(val, tagName == null  ? "array" : tagName));
}
return sb.toString();
}string=(object == null ) ? "null" : C$.escape$S(object.toString());
return (tagName == null ) ? "\"" + string + "\""  : (string.length$() == 0) ? "<" + tagName + "/>"  : "<" + tagName + ">" + string + "</" + tagName + ">" ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.AMP=Character.valueOf$C('&');
C$.APOS=Character.valueOf$C('\'');
C$.BANG=Character.valueOf$C('!');
C$.EQ=Character.valueOf$C('=');
C$.GT=Character.valueOf$C('>');
C$.LT=Character.valueOf$C('<');
C$.QUEST=Character.valueOf$C('?');
C$.QUOT=Character.valueOf$C('\"');
C$.SLASH=Character.valueOf$C('/');
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

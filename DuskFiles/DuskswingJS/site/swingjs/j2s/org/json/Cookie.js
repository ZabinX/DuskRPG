(function(){var P$=Clazz.newPackage("org.json"),I$=[[0,'StringBuilder','org.json.JSONObject','org.json.JSONTokener']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cookie");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'escape$S',  function (string) {
var c;
var s=string.trim$();
var length=s.length$();
var sb=Clazz.new_($I$(1,1).c$$I,[length]);
for (var i=0; i < length; i+=1) {
c=s.charAt$I(i);
if (c < " " || c == "+"  || c == "%"  || c == "="  || c == ";" ) {
sb.append$C("%");
sb.append$C(Character.forDigit$I$I(String.fromCharCode(((c.$c() >>> 4) & 15)).$c(), 16));
sb.append$C(Character.forDigit$I$I(String.fromCharCode((c.$c() & 15)).$c(), 16));
} else {
sb.append$C(c);
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'toJSONObject$S',  function (string) {
var name;
var jo=Clazz.new_($I$(2,1));
var value;
var x=Clazz.new_($I$(3,1).c$$S,[string]);
jo.put$S$O("name", x.nextTo$C("="));
x.next$C("=");
jo.put$S$O("value", x.nextTo$C(";"));
x.next$();
while (x.more$()){
name=C$.unescape$S(x.nextTo$S("=;"));
if (x.next$() != "=") {
if (name.equals$O("secure")) {
value=Boolean.TRUE;
} else {
throw x.syntaxError$S("Missing \'=\' in cookie parameter.");
}} else {
value=C$.unescape$S(x.nextTo$C(";"));
x.next$();
}jo.put$S$O(name, value);
}
return jo;
}, 1);

Clazz.newMeth(C$, 'toString$org_json_JSONObject',  function (jo) {
var sb=Clazz.new_($I$(1,1));
sb.append$S(C$.escape$S(jo.getString$S("name")));
sb.append$S("=");
sb.append$S(C$.escape$S(jo.getString$S("value")));
if (jo.has$S("expires")) {
sb.append$S(";expires=");
sb.append$S(jo.getString$S("expires"));
}if (jo.has$S("domain")) {
sb.append$S(";domain=");
sb.append$S(C$.escape$S(jo.getString$S("domain")));
}if (jo.has$S("path")) {
sb.append$S(";path=");
sb.append$S(C$.escape$S(jo.getString$S("path")));
}if (jo.optBoolean$S("secure")) {
sb.append$S(";secure");
}return sb.toString();
}, 1);

Clazz.newMeth(C$, 'unescape$S',  function (string) {
var length=string.length$();
var sb=Clazz.new_($I$(1,1).c$$I,[length]);
for (var i=0; i < length; ++i) {
var c=string.charAt$I(i);
if (c == "+") {
c=" ";
} else if (c == "%" && i + 2 < length ) {
var d=$I$(3,"dehexchar$C",[string.charAt$I(i + 1)]);
var e=$I$(3,"dehexchar$C",[string.charAt$I(i + 2)]);
if (d >= 0 && e >= 0 ) {
c=String.fromCharCode((d * 16 + e));
i+=2;
}}sb.append$C(c);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

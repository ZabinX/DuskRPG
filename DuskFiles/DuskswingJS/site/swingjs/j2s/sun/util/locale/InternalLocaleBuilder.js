(function(){var P$=Clazz.newPackage("sun.util.locale"),p$1={},I$=[[0,'sun.util.locale.LocaleUtils',['sun.util.locale.InternalLocaleBuilder','.CaseInsensitiveChar'],'sun.util.locale.LanguageTag','sun.util.locale.UnicodeLocaleExtension','java.util.HashSet',['sun.util.locale.InternalLocaleBuilder','.CaseInsensitiveString'],'sun.util.locale.StringTokenIterator','java.util.HashMap','StringBuilder','java.util.ArrayList','sun.util.locale.BaseLocale','sun.util.locale.LocaleExtensions']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InternalLocaleBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CaseInsensitiveString',24],['CaseInsensitiveChar',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.language="";
this.script="";
this.region="";
this.variant="";
},1);

C$.$fields$=[['S',['language','script','region','variant'],'O',['extensions','java.util.Map','uattributes','java.util.Set','ukeywords','java.util.Map']]
,['O',['PRIVATEUSE_KEY','sun.util.locale.InternalLocaleBuilder.CaseInsensitiveChar']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLanguage$S',  function (language) {
if ($I$(1).isEmpty$S(language)) {
this.language="";
} else {
if (!$I$(3).isLanguage$S(language)) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed language: " + language, 0]);
}this.language=language;
}return this;
});

Clazz.newMeth(C$, 'setScript$S',  function (script) {
if ($I$(1).isEmpty$S(script)) {
this.script="";
} else {
if (!$I$(3).isScript$S(script)) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed script: " + script, 0]);
}this.script=script;
}return this;
});

Clazz.newMeth(C$, 'setRegion$S',  function (region) {
if ($I$(1).isEmpty$S(region)) {
this.region="";
} else {
if (!$I$(3).isRegion$S(region)) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed region: " + region, 0]);
}this.region=region;
}return this;
});

Clazz.newMeth(C$, 'setVariant$S',  function (variant) {
if ($I$(1).isEmpty$S(variant)) {
this.variant="";
} else {
var $var=variant.replaceAll$S$S("-", "_");
var errIdx=p$1.checkVariants$S$S.apply(this, [$var, "_"]);
if (errIdx != -1) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed variant: " + variant, errIdx]);
}this.variant=$var;
}return this;
});

Clazz.newMeth(C$, 'addUnicodeLocaleAttribute$S',  function (attribute) {
if (!$I$(4).isAttribute$S(attribute)) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S,["Ill-formed Unicode locale attribute: " + attribute]);
}if (this.uattributes == null ) {
this.uattributes=Clazz.new_($I$(5,1).c$$I,[4]);
}this.uattributes.add$O(Clazz.new_($I$(6,1).c$$S,[attribute]));
return this;
});

Clazz.newMeth(C$, 'removeUnicodeLocaleAttribute$S',  function (attribute) {
if (attribute == null  || !$I$(4).isAttribute$S(attribute) ) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S,["Ill-formed Unicode locale attribute: " + attribute]);
}if (this.uattributes != null ) {
this.uattributes.remove$O(Clazz.new_($I$(6,1).c$$S,[attribute]));
}return this;
});

Clazz.newMeth(C$, 'setUnicodeLocaleKeyword$S$S',  function (key, type) {
if (!$I$(4).isKey$S(key)) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S,["Ill-formed Unicode locale keyword key: " + key]);
}var cikey=Clazz.new_($I$(6,1).c$$S,[key]);
if (type == null ) {
if (this.ukeywords != null ) {
this.ukeywords.remove$O(cikey);
}} else {
if (type.length$() != 0) {
var tp=type.replaceAll$S$S("_", "-");
var itr=Clazz.new_($I$(7,1).c$$S$S,[tp, "-"]);
while (!itr.isDone$()){
var s=itr.current$();
if (!$I$(4).isTypeSubtag$S(s)) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed Unicode locale keyword type: " + type, itr.currentStart$()]);
}itr.next$();
}
}if (this.ukeywords == null ) {
this.ukeywords=Clazz.new_($I$(8,1).c$$I,[4]);
}this.ukeywords.put$O$O(cikey, type);
}return this;
});

Clazz.newMeth(C$, 'setExtension$C$S',  function (singleton, value) {
var isBcpPrivateuse=$I$(3).isPrivateusePrefixChar$C(singleton);
if (!isBcpPrivateuse && !$I$(3).isExtensionSingletonChar$C(singleton) ) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S,["Ill-formed extension key: " + singleton]);
}var remove=$I$(1).isEmpty$S(value);
var key=Clazz.new_($I$(2,1).c$$C,[singleton]);
if (remove) {
if ($I$(4,"isSingletonChar$C",[key.value$()])) {
if (this.uattributes != null ) {
this.uattributes.clear$();
}if (this.ukeywords != null ) {
this.ukeywords.clear$();
}} else {
if (this.extensions != null  && this.extensions.containsKey$O(key) ) {
this.extensions.remove$O(key);
}}} else {
var val=value.replaceAll$S$S("_", "-");
var itr=Clazz.new_($I$(7,1).c$$S$S,[val, "-"]);
while (!itr.isDone$()){
var s=itr.current$();
var validSubtag;
if (isBcpPrivateuse) {
validSubtag=$I$(3).isPrivateuseSubtag$S(s);
} else {
validSubtag=$I$(3).isExtensionSubtag$S(s);
}if (!validSubtag) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed extension value: " + s, itr.currentStart$()]);
}itr.next$();
}
if ($I$(4,"isSingletonChar$C",[key.value$()])) {
p$1.setUnicodeLocaleExtension$S.apply(this, [val]);
} else {
if (this.extensions == null ) {
this.extensions=Clazz.new_($I$(8,1).c$$I,[4]);
}this.extensions.put$O$O(key, val);
}}return this;
});

Clazz.newMeth(C$, 'setExtensions$S',  function (subtags) {
if ($I$(1).isEmpty$S(subtags)) {
this.clearExtensions$();
return this;
}subtags=subtags.replaceAll$S$S("_", "-");
var itr=Clazz.new_($I$(7,1).c$$S$S,[subtags, "-"]);
var extensions=null;
var privateuse=null;
var parsed=0;
var start;
while (!itr.isDone$()){
var s=itr.current$();
if ($I$(3).isExtensionSingleton$S(s)) {
start=itr.currentStart$();
var singleton=s;
var sb=Clazz.new_($I$(9,1).c$$S,[singleton]);
itr.next$();
while (!itr.isDone$()){
s=itr.current$();
if ($I$(3).isExtensionSubtag$S(s)) {
sb.append$S("-").append$S(s);
parsed=itr.currentEnd$();
} else {
break;
}itr.next$();
}
if (parsed < start) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Incomplete extension '" + singleton + "'" , start]);
}if (extensions == null ) {
extensions=Clazz.new_($I$(10,1).c$$I,[4]);
}extensions.add$O(sb.toString());
} else {
break;
}}
if (!itr.isDone$()) {
var s=itr.current$();
if ($I$(3).isPrivateusePrefix$S(s)) {
start=itr.currentStart$();
var sb=Clazz.new_($I$(9,1).c$$S,[s]);
itr.next$();
while (!itr.isDone$()){
s=itr.current$();
if (!$I$(3).isPrivateuseSubtag$S(s)) {
break;
}sb.append$S("-").append$S(s);
parsed=itr.currentEnd$();
itr.next$();
}
if (parsed <= start) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Incomplete privateuse:" + subtags.substring$I(start), start]);
} else {
privateuse=sb.toString();
}}}if (!itr.isDone$()) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed extension subtags:" + subtags.substring$I(itr.currentStart$()), itr.currentStart$()]);
}return p$1.setExtensions$java_util_List$S.apply(this, [extensions, privateuse]);
});

Clazz.newMeth(C$, 'setExtensions$java_util_List$S',  function (bcpExtensions, privateuse) {
this.clearExtensions$();
if (!$I$(1).isEmpty$java_util_List(bcpExtensions)) {
var done=Clazz.new_([bcpExtensions.size$()],$I$(5,1).c$$I);
for (var bcpExt, $bcpExt = bcpExtensions.iterator$(); $bcpExt.hasNext$()&&((bcpExt=($bcpExt.next$())),1);) {
var key=Clazz.new_($I$(2,1).c$$S,[bcpExt]);
if (!done.contains$O(key)) {
if ($I$(4,"isSingletonChar$C",[key.value$()])) {
p$1.setUnicodeLocaleExtension$S.apply(this, [bcpExt.substring$I(2)]);
} else {
if (this.extensions == null ) {
this.extensions=Clazz.new_($I$(8,1).c$$I,[4]);
}this.extensions.put$O$O(key, bcpExt.substring$I(2));
}}done.add$O(key);
}
}if (privateuse != null  && privateuse.length$() > 0 ) {
if (this.extensions == null ) {
this.extensions=Clazz.new_($I$(8,1).c$$I,[1]);
}this.extensions.put$O$O(Clazz.new_($I$(2,1).c$$S,[privateuse]), privateuse.substring$I(2));
}return this;
}, p$1);

Clazz.newMeth(C$, 'setLanguageTag$sun_util_locale_LanguageTag',  function (langtag) {
this.clear$();
if (!langtag.getExtlangs$().isEmpty$()) {
this.language=langtag.getExtlangs$().get$I(0);
} else {
var lang=langtag.getLanguage$();
if (!lang.equals$O("und")) {
this.language=lang;
}}this.script=langtag.getScript$();
this.region=langtag.getRegion$();
var bcpVariants=langtag.getVariants$();
if (!bcpVariants.isEmpty$()) {
var $var=Clazz.new_([bcpVariants.get$I(0)],$I$(9,1).c$$S);
var size=bcpVariants.size$();
for (var i=1; i < size; i++) {
$var.append$S("_").append$S(bcpVariants.get$I(i));
}
this.variant=$var.toString();
}p$1.setExtensions$java_util_List$S.apply(this, [langtag.getExtensions$(), langtag.getPrivateuse$()]);
return this;
});

Clazz.newMeth(C$, 'setLocale$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions',  function (base, localeExtensions) {
var language=base.getLanguage$();
var script=base.getScript$();
var region=base.getRegion$();
var variant=base.getVariant$();
if (language.equals$O("ja") && region.equals$O("JP") && variant.equals$O("JP")  ) {
Clazz.assert(C$, this, function(){return ("japanese".equals$O(localeExtensions.getUnicodeLocaleType$S("ca")))});
variant="";
} else if (language.equals$O("th") && region.equals$O("TH") && variant.equals$O("TH")  ) {
Clazz.assert(C$, this, function(){return ("thai".equals$O(localeExtensions.getUnicodeLocaleType$S("nu")))});
variant="";
} else if (language.equals$O("no") && region.equals$O("NO") && variant.equals$O("NY")  ) {
language="nn";
variant="";
}if (language.length$() > 0 && !$I$(3).isLanguage$S(language) ) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S,["Ill-formed language: " + language]);
}if (script.length$() > 0 && !$I$(3).isScript$S(script) ) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S,["Ill-formed script: " + script]);
}if (region.length$() > 0 && !$I$(3).isRegion$S(region) ) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S,["Ill-formed region: " + region]);
}if (variant.length$() > 0) {
var errIdx=p$1.checkVariants$S$S.apply(this, [variant, "_"]);
if (errIdx != -1) {
throw Clazz.new_(Clazz.load('sun.util.locale.LocaleSyntaxException').c$$S$I,["Ill-formed variant: " + variant, errIdx]);
}}this.language=language;
this.script=script;
this.region=region;
this.variant=variant;
this.clearExtensions$();
var extKeys=(localeExtensions == null ) ? null : localeExtensions.getKeys$();
if (extKeys != null ) {
for (var key, $key = extKeys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var e=localeExtensions.getExtension$Character(key);
if (Clazz.instanceOf(e, "sun.util.locale.UnicodeLocaleExtension")) {
var ue=e;
for (var uatr, $uatr = ue.getUnicodeLocaleAttributes$().iterator$(); $uatr.hasNext$()&&((uatr=($uatr.next$())),1);) {
if (this.uattributes == null ) {
this.uattributes=Clazz.new_($I$(5,1).c$$I,[4]);
}this.uattributes.add$O(Clazz.new_($I$(6,1).c$$S,[uatr]));
}
for (var ukey, $ukey = ue.getUnicodeLocaleKeys$().iterator$(); $ukey.hasNext$()&&((ukey=($ukey.next$())),1);) {
if (this.ukeywords == null ) {
this.ukeywords=Clazz.new_($I$(8,1).c$$I,[4]);
}this.ukeywords.put$O$O(Clazz.new_($I$(6,1).c$$S,[ukey]), ue.getUnicodeLocaleType$S(ukey));
}
} else {
if (this.extensions == null ) {
this.extensions=Clazz.new_($I$(8,1).c$$I,[4]);
}this.extensions.put$O$O(Clazz.new_([(key).valueOf()],$I$(2,1).c$$C), e.getValue$());
}}
}return this;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.language="";
this.script="";
this.region="";
this.variant="";
this.clearExtensions$();
return this;
});

Clazz.newMeth(C$, 'clearExtensions$',  function () {
if (this.extensions != null ) {
this.extensions.clear$();
}if (this.uattributes != null ) {
this.uattributes.clear$();
}if (this.ukeywords != null ) {
this.ukeywords.clear$();
}return this;
});

Clazz.newMeth(C$, 'getBaseLocale$',  function () {
var language=this.language;
var script=this.script;
var region=this.region;
var variant=this.variant;
if (this.extensions != null ) {
var privuse=this.extensions.get$O(C$.PRIVATEUSE_KEY);
if (privuse != null ) {
var itr=Clazz.new_($I$(7,1).c$$S$S,[privuse, "-"]);
var sawPrefix=false;
var privVarStart=-1;
while (!itr.isDone$()){
if (sawPrefix) {
privVarStart=itr.currentStart$();
break;
}if ($I$(1,"caseIgnoreMatch$S$S",[itr.current$(), "lvariant"])) {
sawPrefix=true;
}itr.next$();
}
if (privVarStart != -1) {
var sb=Clazz.new_($I$(9,1).c$$S,[variant]);
if (sb.length$() != 0) {
sb.append$S("_");
}sb.append$S(privuse.substring$I(privVarStart).replaceAll$S$S("-", "_"));
variant=sb.toString();
}}}return $I$(11).getInstance$S$S$S$S(language, script, region, variant);
});

Clazz.newMeth(C$, 'getLocaleExtensions$',  function () {
if ($I$(1).isEmpty$java_util_Map(this.extensions) && $I$(1).isEmpty$java_util_Set(this.uattributes) && $I$(1).isEmpty$java_util_Map(this.ukeywords)  ) {
return null;
}var lext=Clazz.new_($I$(12,1).c$$java_util_Map$java_util_Set$java_util_Map,[this.extensions, this.uattributes, this.ukeywords]);
return lext.isEmpty$() ? null : lext;
});

Clazz.newMeth(C$, 'removePrivateuseVariant$S',  function (privuseVal) {
var itr=Clazz.new_($I$(7,1).c$$S$S,[privuseVal, "-"]);
var prefixStart=-1;
var sawPrivuseVar=false;
while (!itr.isDone$()){
if (prefixStart != -1) {
sawPrivuseVar=true;
break;
}if ($I$(1,"caseIgnoreMatch$S$S",[itr.current$(), "lvariant"])) {
prefixStart=itr.currentStart$();
}itr.next$();
}
if (!sawPrivuseVar) {
return privuseVal;
}Clazz.assert(C$, this, function(){return (prefixStart == 0 || prefixStart > 1 )});
return (prefixStart == 0) ? null : privuseVal.substring$I$I(0, prefixStart - 1);
}, 1);

Clazz.newMeth(C$, 'checkVariants$S$S',  function (variants, sep) {
var itr=Clazz.new_($I$(7,1).c$$S$S,[variants, sep]);
while (!itr.isDone$()){
var s=itr.current$();
if (!$I$(3).isVariant$S(s)) {
return itr.currentStart$();
}itr.next$();
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'setUnicodeLocaleExtension$S',  function (subtags) {
if (this.uattributes != null ) {
this.uattributes.clear$();
}if (this.ukeywords != null ) {
this.ukeywords.clear$();
}var itr=Clazz.new_($I$(7,1).c$$S$S,[subtags, "-"]);
while (!itr.isDone$()){
if (!$I$(4,"isAttribute$S",[itr.current$()])) {
break;
}if (this.uattributes == null ) {
this.uattributes=Clazz.new_($I$(5,1).c$$I,[4]);
}this.uattributes.add$O(Clazz.new_([itr.current$()],$I$(6,1).c$$S));
itr.next$();
}
var key=null;
var type;
var typeStart=-1;
var typeEnd=-1;
while (!itr.isDone$()){
if (key != null ) {
if ($I$(4,"isKey$S",[itr.current$()])) {
Clazz.assert(C$, this, function(){return (typeStart == -1 || typeEnd != -1 )});
type=(typeStart == -1) ? "" : subtags.substring$I$I(typeStart, typeEnd);
if (this.ukeywords == null ) {
this.ukeywords=Clazz.new_($I$(8,1).c$$I,[4]);
}this.ukeywords.put$O$O(key, type);
var tmpKey=Clazz.new_([itr.current$()],$I$(6,1).c$$S);
key=this.ukeywords.containsKey$O(tmpKey) ? null : tmpKey;
typeStart=typeEnd=-1;
} else {
if (typeStart == -1) {
typeStart=itr.currentStart$();
}typeEnd=itr.currentEnd$();
}} else if ($I$(4,"isKey$S",[itr.current$()])) {
key=Clazz.new_([itr.current$()],$I$(6,1).c$$S);
if (this.ukeywords != null  && this.ukeywords.containsKey$O(key) ) {
key=null;
}}if (!itr.hasNext$()) {
if (key != null ) {
Clazz.assert(C$, this, function(){return (typeStart == -1 || typeEnd != -1 )});
type=(typeStart == -1) ? "" : subtags.substring$I$I(typeStart, typeEnd);
if (this.ukeywords == null ) {
this.ukeywords=Clazz.new_($I$(8,1).c$$I,[4]);
}this.ukeywords.put$O$O(key, type);
}break;
}itr.next$();
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.PRIVATEUSE_KEY=Clazz.new_($I$(2,1).c$$S,["x"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.InternalLocaleBuilder, "CaseInsensitiveString", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['str','lowerStr']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.$init$.apply(this);
this.str=s;
this.lowerStr=$I$(1).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'value$',  function () {
return this.str;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.lowerStr.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "sun.util.locale.InternalLocaleBuilder.CaseInsensitiveString"))) {
return false;
}return this.lowerStr.equals$O((obj).lowerStr);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.InternalLocaleBuilder, "CaseInsensitiveChar", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['ch','lowerCh']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
C$.c$$C.apply(this, [s.charAt$I(0)]);
}, 1);

Clazz.newMeth(C$, 'c$$C',  function (c) {
;C$.$init$.apply(this);
this.ch=c;
this.lowerCh=$I$(1).toLower$C(this.ch);
}, 1);

Clazz.newMeth(C$, 'value$',  function () {
return this.ch;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.lowerCh.$c();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "sun.util.locale.InternalLocaleBuilder.CaseInsensitiveChar"))) {
return false;
}return this.lowerCh == (obj).lowerCh;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

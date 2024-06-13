(function(){var P$=Clazz.newPackage("sun.util.locale"),p$1={},I$=[[0,'java.util.HashMap','sun.util.locale.LocaleUtils','java.util.Collections','sun.util.locale.ParseStatus','sun.util.locale.StringTokenIterator','java.util.ArrayList','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LanguageTag");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.language="";
this.script="";
this.region="";
this.privateuse="";
this.extlangs=$I$(3).emptyList$();
this.variants=$I$(3).emptyList$();
this.extensions=$I$(3).emptyList$();
},1);

C$.$fields$=[['S',['language','script','region','privateuse'],'O',['extlangs','java.util.List','+variants','+extensions']]
,['O',['GRANDFATHERED','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'parse$S$sun_util_locale_ParseStatus',  function (languageTag, sts) {
if (sts == null ) {
sts=Clazz.new_($I$(4,1));
} else {
sts.reset$();
}var itr;
var gfmap=C$.GRANDFATHERED.get$O($I$(2).toLowerString$S(languageTag));
if (gfmap != null ) {
itr=Clazz.new_($I$(5,1).c$$S$S,[gfmap[1], "-"]);
} else {
itr=Clazz.new_($I$(5,1).c$$S$S,[languageTag, "-"]);
}var tag=Clazz.new_(C$);
if (p$1.parseLanguage$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus.apply(tag, [itr, sts])) {
p$1.parseExtlangs$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus.apply(tag, [itr, sts]);
p$1.parseScript$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus.apply(tag, [itr, sts]);
p$1.parseRegion$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus.apply(tag, [itr, sts]);
p$1.parseVariants$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus.apply(tag, [itr, sts]);
p$1.parseExtensions$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus.apply(tag, [itr, sts]);
}p$1.parsePrivateuse$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus.apply(tag, [itr, sts]);
if (!itr.isDone$() && !sts.isError$() ) {
var s=itr.current$();
sts.errorIndex=itr.currentStart$();
if (s.length$() == 0) {
sts.errorMsg="Empty subtag";
} else {
sts.errorMsg="Invalid subtag: " + s;
}}return tag;
}, 1);

Clazz.newMeth(C$, 'parseLanguage$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus',  function (itr, sts) {
if (itr.isDone$() || sts.isError$() ) {
return false;
}var found=false;
var s=itr.current$();
if (C$.isLanguage$S(s)) {
found=true;
this.language=s;
sts.parseLength=itr.currentEnd$();
itr.next$();
}return found;
}, p$1);

Clazz.newMeth(C$, 'parseExtlangs$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus',  function (itr, sts) {
if (itr.isDone$() || sts.isError$() ) {
return false;
}var found=false;
while (!itr.isDone$()){
var s=itr.current$();
if (!C$.isExtlang$S(s)) {
break;
}found=true;
if (this.extlangs.isEmpty$()) {
this.extlangs=Clazz.new_($I$(6,1).c$$I,[3]);
}this.extlangs.add$O(s);
sts.parseLength=itr.currentEnd$();
itr.next$();
if (this.extlangs.size$() == 3) {
break;
}}
return found;
}, p$1);

Clazz.newMeth(C$, 'parseScript$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus',  function (itr, sts) {
if (itr.isDone$() || sts.isError$() ) {
return false;
}var found=false;
var s=itr.current$();
if (C$.isScript$S(s)) {
found=true;
this.script=s;
sts.parseLength=itr.currentEnd$();
itr.next$();
}return found;
}, p$1);

Clazz.newMeth(C$, 'parseRegion$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus',  function (itr, sts) {
if (itr.isDone$() || sts.isError$() ) {
return false;
}var found=false;
var s=itr.current$();
if (C$.isRegion$S(s)) {
found=true;
this.region=s;
sts.parseLength=itr.currentEnd$();
itr.next$();
}return found;
}, p$1);

Clazz.newMeth(C$, 'parseVariants$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus',  function (itr, sts) {
if (itr.isDone$() || sts.isError$() ) {
return false;
}var found=false;
while (!itr.isDone$()){
var s=itr.current$();
if (!C$.isVariant$S(s)) {
break;
}found=true;
if (this.variants.isEmpty$()) {
this.variants=Clazz.new_($I$(6,1).c$$I,[3]);
}this.variants.add$O(s);
sts.parseLength=itr.currentEnd$();
itr.next$();
}
return found;
}, p$1);

Clazz.newMeth(C$, 'parseExtensions$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus',  function (itr, sts) {
if (itr.isDone$() || sts.isError$() ) {
return false;
}var found=false;
while (!itr.isDone$()){
var s=itr.current$();
if (C$.isExtensionSingleton$S(s)) {
var start=itr.currentStart$();
var singleton=s;
var sb=Clazz.new_($I$(7,1).c$$S,[singleton]);
itr.next$();
while (!itr.isDone$()){
s=itr.current$();
if (C$.isExtensionSubtag$S(s)) {
sb.append$S("-").append$S(s);
sts.parseLength=itr.currentEnd$();
} else {
break;
}itr.next$();
}
if (sts.parseLength <= start) {
sts.errorIndex=start;
sts.errorMsg="Incomplete extension '" + singleton + "'" ;
break;
}if (this.extensions.isEmpty$()) {
this.extensions=Clazz.new_($I$(6,1).c$$I,[4]);
}this.extensions.add$O(sb.toString());
found=true;
} else {
break;
}}
return found;
}, p$1);

Clazz.newMeth(C$, 'parsePrivateuse$sun_util_locale_StringTokenIterator$sun_util_locale_ParseStatus',  function (itr, sts) {
if (itr.isDone$() || sts.isError$() ) {
return false;
}var found=false;
var s=itr.current$();
if (C$.isPrivateusePrefix$S(s)) {
var start=itr.currentStart$();
var sb=Clazz.new_($I$(7,1).c$$S,[s]);
itr.next$();
while (!itr.isDone$()){
s=itr.current$();
if (!C$.isPrivateuseSubtag$S(s)) {
break;
}sb.append$S("-").append$S(s);
sts.parseLength=itr.currentEnd$();
itr.next$();
}
if (sts.parseLength <= start) {
sts.errorIndex=start;
sts.errorMsg="Incomplete privateuse";
} else {
this.privateuse=sb.toString();
found=true;
}}return found;
}, p$1);

Clazz.newMeth(C$, 'parseLocale$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions',  function (baseLocale, localeExtensions) {
var tag=Clazz.new_(C$);
var language=baseLocale.getLanguage$();
var script=baseLocale.getScript$();
var region=baseLocale.getRegion$();
var variant=baseLocale.getVariant$();
var hasSubtag=false;
var privuseVar=null;
if (C$.isLanguage$S(language)) {
if (language.equals$O("iw")) {
language="he";
} else if (language.equals$O("ji")) {
language="yi";
} else if (language.equals$O("in")) {
language="id";
}tag.language=language;
}if (C$.isScript$S(script)) {
tag.script=C$.canonicalizeScript$S(script);
hasSubtag=true;
}if (C$.isRegion$S(region)) {
tag.region=C$.canonicalizeRegion$S(region);
hasSubtag=true;
}if (tag.language.equals$O("no") && tag.region.equals$O("NO") && variant.equals$O("NY")  ) {
tag.language="nn";
variant="";
}if (variant.length$() > 0) {
var variants=null;
var varitr=Clazz.new_($I$(5,1).c$$S$S,[variant, "_"]);
while (!varitr.isDone$()){
var $var=varitr.current$();
if (!C$.isVariant$S($var)) {
break;
}if (variants == null ) {
variants=Clazz.new_($I$(6,1));
}variants.add$O($var);
varitr.next$();
}
if (variants != null ) {
tag.variants=variants;
hasSubtag=true;
}if (!varitr.isDone$()) {
var buf=Clazz.new_($I$(7,1));
while (!varitr.isDone$()){
var prvv=varitr.current$();
if (!C$.isPrivateuseSubtag$S(prvv)) {
break;
}if (buf.length$() > 0) {
buf.append$S("-");
}buf.append$S(prvv);
varitr.next$();
}
if (buf.length$() > 0) {
privuseVar=buf.toString();
}}}var extensions=null;
var privateuse=null;
if (localeExtensions != null ) {
var locextKeys=localeExtensions.getKeys$();
for (var locextKey, $locextKey = locextKeys.iterator$(); $locextKey.hasNext$()&&((locextKey=($locextKey.next$())),1);) {
var ext=localeExtensions.getExtension$Character(locextKey);
if (C$.isPrivateusePrefixChar$C((locextKey).valueOf())) {
privateuse=ext.getValue$();
} else {
if (extensions == null ) {
extensions=Clazz.new_($I$(6,1));
}extensions.add$O(locextKey.toString() + "-" + ext.getValue$() );
}}
}if (extensions != null ) {
tag.extensions=extensions;
hasSubtag=true;
}if (privuseVar != null ) {
if (privateuse == null ) {
privateuse="lvariant" + "-" + privuseVar ;
} else {
privateuse=privateuse + "-" + "lvariant" + "-" + privuseVar.replace$CharSequence$CharSequence("_", "-") ;
}}if (privateuse != null ) {
tag.privateuse=privateuse;
}if (tag.language.length$() == 0 && (hasSubtag || privateuse == null  ) ) {
tag.language="und";
}return tag;
}, 1);

Clazz.newMeth(C$, 'getLanguage$',  function () {
return this.language;
});

Clazz.newMeth(C$, 'getExtlangs$',  function () {
if (this.extlangs.isEmpty$()) {
return $I$(3).emptyList$();
}return $I$(3).unmodifiableList$java_util_List(this.extlangs);
});

Clazz.newMeth(C$, 'getScript$',  function () {
return this.script;
});

Clazz.newMeth(C$, 'getRegion$',  function () {
return this.region;
});

Clazz.newMeth(C$, 'getVariants$',  function () {
if (this.variants.isEmpty$()) {
return $I$(3).emptyList$();
}return $I$(3).unmodifiableList$java_util_List(this.variants);
});

Clazz.newMeth(C$, 'getExtensions$',  function () {
if (this.extensions.isEmpty$()) {
return $I$(3).emptyList$();
}return $I$(3).unmodifiableList$java_util_List(this.extensions);
});

Clazz.newMeth(C$, 'getPrivateuse$',  function () {
return this.privateuse;
});

Clazz.newMeth(C$, 'isLanguage$S',  function (s) {
var len=s.length$();
return (len >= 2) && (len <= 8) && $I$(2).isAlphaString$S(s)  ;
}, 1);

Clazz.newMeth(C$, 'isExtlang$S',  function (s) {
return (s.length$() == 3) && $I$(2).isAlphaString$S(s) ;
}, 1);

Clazz.newMeth(C$, 'isScript$S',  function (s) {
return (s.length$() == 4) && $I$(2).isAlphaString$S(s) ;
}, 1);

Clazz.newMeth(C$, 'isRegion$S',  function (s) {
return ((s.length$() == 2) && $I$(2).isAlphaString$S(s) ) || ((s.length$() == 3) && $I$(2).isNumericString$S(s) ) ;
}, 1);

Clazz.newMeth(C$, 'isVariant$S',  function (s) {
var len=s.length$();
if (len >= 5 && len <= 8 ) {
return $I$(2).isAlphaNumericString$S(s);
}if (len == 4) {
return $I$(2,"isNumeric$C",[s.charAt$I(0)]) && $I$(2,"isAlphaNumeric$C",[s.charAt$I(1)]) && $I$(2,"isAlphaNumeric$C",[s.charAt$I(2)]) && $I$(2,"isAlphaNumeric$C",[s.charAt$I(3)])  ;
}return false;
}, 1);

Clazz.newMeth(C$, 'isExtensionSingleton$S',  function (s) {
return (s.length$() == 1) && $I$(2).isAlphaString$S(s) && !$I$(2).caseIgnoreMatch$S$S("x", s)  ;
}, 1);

Clazz.newMeth(C$, 'isExtensionSingletonChar$C',  function (c) {
return C$.isExtensionSingleton$S(String.valueOf$C(c));
}, 1);

Clazz.newMeth(C$, 'isExtensionSubtag$S',  function (s) {
var len=s.length$();
return (len >= 2) && (len <= 8) && $I$(2).isAlphaNumericString$S(s)  ;
}, 1);

Clazz.newMeth(C$, 'isPrivateusePrefix$S',  function (s) {
return (s.length$() == 1) && $I$(2).caseIgnoreMatch$S$S("x", s) ;
}, 1);

Clazz.newMeth(C$, 'isPrivateusePrefixChar$C',  function (c) {
return ($I$(2,"caseIgnoreMatch$S$S",["x", String.valueOf$C(c)]));
}, 1);

Clazz.newMeth(C$, 'isPrivateuseSubtag$S',  function (s) {
var len=s.length$();
return (len >= 1) && (len <= 8) && $I$(2).isAlphaNumericString$S(s)  ;
}, 1);

Clazz.newMeth(C$, 'canonicalizeLanguage$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizeExtlang$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizeScript$S',  function (s) {
return $I$(2).toTitleString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizeRegion$S',  function (s) {
return $I$(2).toUpperString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizeVariant$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizeExtension$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizeExtensionSingleton$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizeExtensionSubtag$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizePrivateuse$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'canonicalizePrivateuseSubtag$S',  function (s) {
return $I$(2).toLowerString$S(s);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(7,1));
if (this.language.length$() > 0) {
sb.append$S(this.language);
for (var extlang, $extlang = this.extlangs.iterator$(); $extlang.hasNext$()&&((extlang=($extlang.next$())),1);) {
sb.append$S("-").append$S(extlang);
}
if (this.script.length$() > 0) {
sb.append$S("-").append$S(this.script);
}if (this.region.length$() > 0) {
sb.append$S("-").append$S(this.region);
}for (var variant, $variant = this.variants.iterator$(); $variant.hasNext$()&&((variant=($variant.next$())),1);) {
sb.append$S("-").append$S(variant);
}
for (var extension, $extension = this.extensions.iterator$(); $extension.hasNext$()&&((extension=($extension.next$())),1);) {
sb.append$S("-").append$S(extension);
}
}if (this.privateuse.length$() > 0) {
if (sb.length$() > 0) {
sb.append$S("-");
}sb.append$S(this.privateuse);
}return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.GRANDFATHERED=Clazz.new_($I$(1,1));
{
var entries=Clazz.array(String, -2, [Clazz.array(String, -1, ["art-lojban", "jbo"]), Clazz.array(String, -1, ["cel-gaulish", "xtg-x-cel-gaulish"]), Clazz.array(String, -1, ["en-GB-oed", "en-GB-x-oed"]), Clazz.array(String, -1, ["i-ami", "ami"]), Clazz.array(String, -1, ["i-bnn", "bnn"]), Clazz.array(String, -1, ["i-default", "en-x-i-default"]), Clazz.array(String, -1, ["i-enochian", "und-x-i-enochian"]), Clazz.array(String, -1, ["i-hak", "hak"]), Clazz.array(String, -1, ["i-klingon", "tlh"]), Clazz.array(String, -1, ["i-lux", "lb"]), Clazz.array(String, -1, ["i-mingo", "see-x-i-mingo"]), Clazz.array(String, -1, ["i-navajo", "nv"]), Clazz.array(String, -1, ["i-pwn", "pwn"]), Clazz.array(String, -1, ["i-tao", "tao"]), Clazz.array(String, -1, ["i-tay", "tay"]), Clazz.array(String, -1, ["i-tsu", "tsu"]), Clazz.array(String, -1, ["no-bok", "nb"]), Clazz.array(String, -1, ["no-nyn", "nn"]), Clazz.array(String, -1, ["sgn-BE-FR", "sfb"]), Clazz.array(String, -1, ["sgn-BE-NL", "vgt"]), Clazz.array(String, -1, ["sgn-CH-DE", "sgg"]), Clazz.array(String, -1, ["zh-guoyu", "cmn"]), Clazz.array(String, -1, ["zh-hakka", "hak"]), Clazz.array(String, -1, ["zh-min", "nan-x-zh-min"]), Clazz.array(String, -1, ["zh-min-nan", "nan"]), Clazz.array(String, -1, ["zh-xiang", "hsn"])]);
for (var e, $e = 0, $$e = entries; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
C$.GRANDFATHERED.put$O$O($I$(2).toLowerString$S(e[0]), e);
}
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

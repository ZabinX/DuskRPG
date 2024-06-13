(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[[0,'sun.util.locale.LocaleUtils','java.util.HashMap',['sun.util.locale.BaseLocale','.Key'],'sun.util.locale.BaseLocale',['sun.util.locale.BaseLocale','.Cache'],'StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BaseLocale", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Key',26],['Cache',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hash=0;
},1);

C$.$fields$=[['I',['hash'],'S',['language','script','region','variant','strRep']]
,['O',['CACHE','sun.util.locale.BaseLocale.Cache']]]

Clazz.newMeth(C$, 'c$$S$S',  function (language, region) {
;C$.$init$.apply(this);
this.language=language;
this.script="";
this.region=region;
this.variant="";
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S',  function (language, script, region, variant) {
;C$.$init$.apply(this);
this.language=(language != null ) ? $I$(1).toLowerString$S(language) : "";
this.script=(script != null ) ? $I$(1).toTitleString$S(script) : "";
this.region=(region != null ) ? $I$(1).toUpperString$S(region) : "";
this.variant=(variant != null ) ? variant : "";
}, 1);

Clazz.newMeth(C$, 'createInstance$S$S',  function (language, region) {
var base=Clazz.new_(C$.c$$S$S,[language, region]);
C$.CACHE.put$sun_util_locale_BaseLocale_Key$sun_util_locale_BaseLocale(Clazz.new_($I$(3,1).c$$S$S,[language, region]), base);
return base;
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S$S$S',  function (language, script, region, variant) {
if (language != null ) {
if ($I$(1).caseIgnoreMatch$S$S(language, "he")) {
language="iw";
} else if ($I$(1).caseIgnoreMatch$S$S(language, "yi")) {
language="ji";
} else if ($I$(1).caseIgnoreMatch$S$S(language, "id")) {
language="in";
}}var key=Clazz.new_($I$(3,1).c$$S$S$S$S,[language, script, region, variant]);
return C$.CACHE.get$sun_util_locale_BaseLocale_Key(key);
}, 1);

Clazz.newMeth(C$, 'getLanguage$',  function () {
return this.language;
});

Clazz.newMeth(C$, 'getScript$',  function () {
return this.script;
});

Clazz.newMeth(C$, 'getRegion$',  function () {
return this.region;
});

Clazz.newMeth(C$, 'getVariant$',  function () {
return this.variant;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "sun.util.locale.BaseLocale"))) {
return false;
}var other=obj;
return this.language == other.language && this.script == other.script  && this.region == other.region  && this.variant == other.variant ;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.strRep != null ) return this.strRep;
var buf=Clazz.new_($I$(6,1));
if (this.language.length$() > 0) {
buf.append$S("language=");
buf.append$S(this.language);
}if (this.script.length$() > 0) {
if (buf.length$() > 0) {
buf.append$S(", ");
}buf.append$S("script=");
buf.append$S(this.script);
}if (this.region.length$() > 0) {
if (buf.length$() > 0) {
buf.append$S(", ");
}buf.append$S("region=");
buf.append$S(this.region);
}if (this.variant.length$() > 0) {
if (buf.length$() > 0) {
buf.append$S(", ");
}buf.append$S("variant=");
buf.append$S(this.variant);
}return this.strRep=buf.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=this.hash;
if (h == 0) {
h=this.language.hashCode$();
h=31 * h + this.script.hashCode$();
h=31 * h + this.region.hashCode$();
h=31 * h + this.variant.hashCode$();
this.hash=h;
}return h;
});

C$.$static$=function(){C$.$static$=0;
C$.CACHE=Clazz.new_($I$(5,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaseLocale, "Key", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['normalized'],'I',['hash'],'S',['lang','scrt','regn','vart','str']]]

Clazz.newMeth(C$, 'c$$S$S',  function (language, region) {
;C$.$init$.apply(this);
this.lang=(language);
this.scrt=("");
this.regn=(region);
this.vart=("");
this.normalized=true;
var h=language.hashCode$();
if (region !== "" ) {
var len=region.length$();
for (var i=0; i < len; i++) {
h=31 * h + ($I$(1,"toLower$C",[region.charAt$I(i)])).$c();
}
}this.hash=h;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S',  function (language, script, region, variant) {
C$.c$$S$S$S$S$Z.apply(this, [language, script, region, variant, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$S$Z',  function (language, script, region, variant, normalized) {
;C$.$init$.apply(this);
var h=0;
if (language != null ) {
this.lang=(language);
var len=language.length$();
for (var i=0; i < len; i++) {
h=31 * h + ($I$(1,"toLower$C",[language.charAt$I(i)])).$c();
}
} else {
this.lang=("");
}if (script != null ) {
this.scrt=(script);
var len=script.length$();
for (var i=0; i < len; i++) {
h=31 * h + ($I$(1,"toLower$C",[script.charAt$I(i)])).$c();
}
} else {
this.scrt=("");
}if (region != null ) {
this.regn=(region);
var len=region.length$();
for (var i=0; i < len; i++) {
h=31 * h + ($I$(1,"toLower$C",[region.charAt$I(i)])).$c();
}
} else {
this.regn=("");
}if (variant != null ) {
this.vart=(variant);
var len=variant.length$();
for (var i=0; i < len; i++) {
h=31 * h + (variant.charCodeAt$I(i));
}
} else {
this.vart=("");
}this.hash=h;
this.normalized=normalized;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (Clazz.instanceOf(obj, "sun.util.locale.BaseLocale.Key") && this.hash == (obj).hash ) {
var tl=this.lang;
var ol=(obj).lang;
if (tl != null  && ol != null   && $I$(1).caseIgnoreMatch$S$S(ol, tl) ) {
var ts=this.scrt;
var os=(obj).scrt;
if (ts != null  && os != null   && $I$(1).caseIgnoreMatch$S$S(os, ts) ) {
var tr=this.regn;
var or=(obj).regn;
if (tr != null  && or != null   && $I$(1).caseIgnoreMatch$S$S(or, tr) ) {
var tv=this.vart;
var ov=(obj).vart;
return (ov != null  && ov.equals$O(tv) );
}}}}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.hash;
});

Clazz.newMeth(C$, 'normalize$sun_util_locale_BaseLocale_Key',  function (key) {
if (key.normalized) {
return key;
}var lang=$I$(1).toLowerString$S(key.lang);
var scrt=$I$(1).toTitleString$S(key.scrt);
var regn=$I$(1).toUpperString$S(key.regn);
var vart=key.vart;
return Clazz.new_(C$.c$$S$S$S$S$Z,[lang, scrt, regn, vart, true]);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return (this.str == null  ? (this.str="[BaseLocaleKey " + this.lang + this.regn + this.vart + this.scrt + ";" + this.normalized + "]" ) : this.str);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaseLocale, "Cache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['map','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'normalizeKey$sun_util_locale_BaseLocale_Key',  function (key) {
return $I$(3).normalize$sun_util_locale_BaseLocale_Key(key);
});

Clazz.newMeth(C$, 'put$sun_util_locale_BaseLocale_Key$sun_util_locale_BaseLocale',  function (key, locale) {
return this.map.put$O$O(key.toString(), locale);
});

Clazz.newMeth(C$, 'get$sun_util_locale_BaseLocale_Key',  function (key) {
key=this.normalizeKey$sun_util_locale_BaseLocale_Key(key);
var locale=this.map.get$O(key.toString());
if (locale == null ) this.put$sun_util_locale_BaseLocale_Key$sun_util_locale_BaseLocale(key, locale=this.createObject$sun_util_locale_BaseLocale_Key(key));
return locale;
});

Clazz.newMeth(C$, 'createObject$sun_util_locale_BaseLocale_Key',  function (key) {
return Clazz.new_($I$(4,1).c$$S$S$S$S,[key.lang, key.scrt, key.regn, key.vart]);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

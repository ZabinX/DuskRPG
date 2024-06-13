(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[[0,'sun.util.locale.UnicodeLocaleExtension','java.util.Collections','sun.util.locale.LocaleUtils','java.util.TreeMap','sun.util.locale.LanguageTag','sun.util.locale.InternalLocaleBuilder','sun.util.locale.Extension','java.util.TreeSet','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocaleExtensions");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['id'],'O',['extensionMap','java.util.Map']]
,['O',['CALENDAR_JAPANESE','sun.util.locale.LocaleExtensions','+NUMBER_THAI']]]

Clazz.newMeth(C$, 'c$$S$Character$sun_util_locale_Extension',  function (id, key, value) {
;C$.$init$.apply(this);
this.id=id;
this.extensionMap=$I$(2).singletonMap$O$O(key, value);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$java_util_Set$java_util_Map',  function (extensions, uattributes, ukeywords) {
;C$.$init$.apply(this);
var hasExtension=!$I$(3).isEmpty$java_util_Map(extensions);
var hasUAttributes=!$I$(3).isEmpty$java_util_Set(uattributes);
var hasUKeywords=!$I$(3).isEmpty$java_util_Map(ukeywords);
if (!hasExtension && !hasUAttributes && !hasUKeywords  ) {
this.id="";
this.extensionMap=$I$(2).emptyMap$();
return;
}var map=Clazz.new_($I$(4,1));
if (hasExtension) {
for (var ext, $ext = extensions.entrySet$().iterator$(); $ext.hasNext$()&&((ext=($ext.next$())),1);) {
var key=$I$(3,"toLower$C",[ext.getKey$().value$()]);
var value=ext.getValue$();
if ($I$(5).isPrivateusePrefixChar$C(key)) {
value=$I$(6).removePrivateuseVariant$S(value);
if (value == null ) {
continue;
}}map.put$O$O(Character.valueOf$C(key), Clazz.new_([key, $I$(3).toLowerString$S(value)],$I$(7,1).c$$C$S));
}
}if (hasUAttributes || hasUKeywords ) {
var uaset=null;
var ukmap=null;
if (hasUAttributes) {
uaset=Clazz.new_($I$(8,1));
for (var cis, $cis = uattributes.iterator$(); $cis.hasNext$()&&((cis=($cis.next$())),1);) {
uaset.add$O($I$(3,"toLowerString$S",[cis.value$()]));
}
}if (hasUKeywords) {
ukmap=Clazz.new_($I$(4,1));
for (var kwd, $kwd = ukeywords.entrySet$().iterator$(); $kwd.hasNext$()&&((kwd=($kwd.next$())),1);) {
var key=$I$(3,"toLowerString$S",[kwd.getKey$().value$()]);
var type=$I$(3,"toLowerString$S",[kwd.getValue$()]);
ukmap.put$O$O(key, type);
}
}var ule=Clazz.new_($I$(1,1).c$$java_util_SortedSet$java_util_SortedMap,[uaset, ukmap]);
map.put$O$O(Character.valueOf$C("u"), ule);
}if (map.isEmpty$()) {
this.id="";
this.extensionMap=$I$(2).emptyMap$();
} else {
this.id=C$.toID$java_util_SortedMap(map);
this.extensionMap=map;
}}, 1);

Clazz.newMeth(C$, 'getKeys$',  function () {
if (this.extensionMap.isEmpty$()) {
return $I$(2).emptySet$();
}return $I$(2,"unmodifiableSet$java_util_Set",[this.extensionMap.keySet$()]);
});

Clazz.newMeth(C$, 'getExtension$Character',  function (key) {
return this.extensionMap.get$O(Character.valueOf$C($I$(3,"toLower$C",[(key).valueOf()])));
});

Clazz.newMeth(C$, 'getExtensionValue$Character',  function (key) {
var ext=this.extensionMap.get$O(Character.valueOf$C($I$(3,"toLower$C",[(key).valueOf()])));
if (ext == null ) {
return null;
}return ext.getValue$();
});

Clazz.newMeth(C$, 'getUnicodeLocaleAttributes$',  function () {
var ext=this.extensionMap.get$O(Character.valueOf$C("u"));
if (ext == null ) {
return $I$(2).emptySet$();
}Clazz.assert(C$, this, function(){return (Clazz.instanceOf(ext, "sun.util.locale.UnicodeLocaleExtension"))});
return (ext).getUnicodeLocaleAttributes$();
});

Clazz.newMeth(C$, 'getUnicodeLocaleKeys$',  function () {
var ext=this.extensionMap.get$O(Character.valueOf$C("u"));
if (ext == null ) {
return $I$(2).emptySet$();
}Clazz.assert(C$, this, function(){return (Clazz.instanceOf(ext, "sun.util.locale.UnicodeLocaleExtension"))});
return (ext).getUnicodeLocaleKeys$();
});

Clazz.newMeth(C$, 'getUnicodeLocaleType$S',  function (unicodeLocaleKey) {
var ext=this.extensionMap.get$O(Character.valueOf$C("u"));
if (ext == null ) {
return null;
}Clazz.assert(C$, this, function(){return (Clazz.instanceOf(ext, "sun.util.locale.UnicodeLocaleExtension"))});
return (ext).getUnicodeLocaleType$S($I$(3).toLowerString$S(unicodeLocaleKey));
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.extensionMap.isEmpty$();
});

Clazz.newMeth(C$, 'isValidKey$C',  function (c) {
return $I$(5).isExtensionSingletonChar$C(c) || $I$(5).isPrivateusePrefixChar$C(c) ;
}, 1);

Clazz.newMeth(C$, 'isValidUnicodeLocaleKey$S',  function (ukey) {
return $I$(1).isKey$S(ukey);
}, 1);

Clazz.newMeth(C$, 'toID$java_util_SortedMap',  function (map) {
var buf=Clazz.new_($I$(9,1));
var privuse=null;
for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var singleton=(entry.getKey$()).valueOf();
var extension=entry.getValue$();
if ($I$(5).isPrivateusePrefixChar$C(singleton)) {
privuse=extension;
} else {
if (buf.length$() > 0) {
buf.append$S("-");
}buf.append$O(extension);
}}
if (privuse != null ) {
if (buf.length$() > 0) {
buf.append$S("-");
}buf.append$O(privuse);
}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.id;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.id.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (other) {
if (this === other ) {
return true;
}if (!(Clazz.instanceOf(other, "sun.util.locale.LocaleExtensions"))) {
return false;
}return this.id.equals$O((other).id);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.CALENDAR_JAPANESE=Clazz.new_(C$.c$$S$Character$sun_util_locale_Extension,["u-ca-japanese", Character.valueOf$C("u"), $I$(1).CA_JAPANESE]);
C$.NUMBER_THAI=Clazz.new_(C$.c$$S$Character$sun_util_locale_Extension,["u-nu-thai", Character.valueOf$C("u"), $I$(1).NU_THAI]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

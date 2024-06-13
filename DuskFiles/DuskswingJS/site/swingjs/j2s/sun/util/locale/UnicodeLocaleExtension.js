(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[[0,'java.util.Collections','StringBuilder','sun.util.locale.LocaleUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeLocaleExtension", null, 'sun.util.locale.Extension');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attributes','java.util.Set','keywords','java.util.Map']]
,['O',['CA_JAPANESE','sun.util.locale.UnicodeLocaleExtension','+NU_THAI']]]

Clazz.newMeth(C$, 'c$$S$S',  function (key, value) {
;C$.superclazz.c$$C$S.apply(this,["u", key + "-" + value ]);C$.$init$.apply(this);
this.attributes=$I$(1).emptySet$();
this.keywords=$I$(1).singletonMap$O$O(key, value);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet$java_util_SortedMap',  function (attributes, keywords) {
;C$.superclazz.c$$C.apply(this,["u"]);C$.$init$.apply(this);
if (attributes != null ) {
this.attributes=attributes;
} else {
this.attributes=$I$(1).emptySet$();
}if (keywords != null ) {
this.keywords=keywords;
} else {
this.keywords=$I$(1).emptyMap$();
}if (!this.attributes.isEmpty$() || !this.keywords.isEmpty$() ) {
var sb=Clazz.new_($I$(2,1));
for (var attribute, $attribute = this.attributes.iterator$(); $attribute.hasNext$()&&((attribute=($attribute.next$())),1);) {
sb.append$S("-").append$S(attribute);
}
for (var keyword, $keyword = this.keywords.entrySet$().iterator$(); $keyword.hasNext$()&&((keyword=($keyword.next$())),1);) {
var key=keyword.getKey$();
var value=keyword.getValue$();
sb.append$S("-").append$S(key);
if (value.length$() > 0) {
sb.append$S("-").append$S(value);
}}
this.setValue$S(sb.substring$I(1));
}}, 1);

Clazz.newMeth(C$, 'getUnicodeLocaleAttributes$',  function () {
if (this.attributes === $I$(1).EMPTY_SET ) {
return this.attributes;
}return $I$(1).unmodifiableSet$java_util_Set(this.attributes);
});

Clazz.newMeth(C$, 'getUnicodeLocaleKeys$',  function () {
if (this.keywords === $I$(1).EMPTY_MAP ) {
return $I$(1).emptySet$();
}return $I$(1,"unmodifiableSet$java_util_Set",[this.keywords.keySet$()]);
});

Clazz.newMeth(C$, 'getUnicodeLocaleType$S',  function (unicodeLocaleKey) {
return this.keywords.get$O(unicodeLocaleKey);
});

Clazz.newMeth(C$, 'isSingletonChar$C',  function (c) {
return ("u" == $I$(3).toLower$C(c));
}, 1);

Clazz.newMeth(C$, 'isAttribute$S',  function (s) {
var len=s.length$();
return (len >= 3) && (len <= 8) && $I$(3).isAlphaNumericString$S(s)  ;
}, 1);

Clazz.newMeth(C$, 'isKey$S',  function (s) {
return (s.length$() == 2) && $I$(3).isAlphaNumericString$S(s) ;
}, 1);

Clazz.newMeth(C$, 'isTypeSubtag$S',  function (s) {
var len=s.length$();
return (len >= 3) && (len <= 8) && $I$(3).isAlphaNumericString$S(s)  ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.CA_JAPANESE=Clazz.new_(C$.c$$S$S,["ca", "japanese"]);
C$.NU_THAI=Clazz.new_(C$.c$$S$S,["nu", "thai"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

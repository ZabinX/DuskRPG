(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'java.util.Collections','java.util.Locale','sun.util.locale.provider.LocaleResources',['sun.util.locale.provider.LocaleProviderAdapter','.Type']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FallbackLocaleProviderAdapter", null, 'sun.util.locale.provider.JRELocaleProviderAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rootLocaleResources=Clazz.new_([this, $I$(2).ROOT],$I$(3,1).c$$sun_util_locale_provider_ResourceBundleBasedAdapter$java_util_Locale);
},1);

C$.$fields$=[['O',['rootLocaleResources','sun.util.locale.provider.LocaleResources']]
,['O',['rootTagSet','java.util.Set']]]

Clazz.newMeth(C$, 'getAdapterType$',  function () {
return $I$(4).FALLBACK;
});

Clazz.newMeth(C$, 'getLocaleResources$java_util_Locale',  function (locale) {
return this.rootLocaleResources;
});

Clazz.newMeth(C$, 'createLanguageTagSet$S',  function (category) {
return C$.rootTagSet;
});

C$.$static$=function(){C$.$static$=0;
C$.rootTagSet=$I$(1,"singleton$O",[$I$(2).ROOT.toLanguageTag$()]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

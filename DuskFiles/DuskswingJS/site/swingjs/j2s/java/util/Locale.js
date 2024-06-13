(function(){var P$=java.util,p$1={},I$=[[0,'java.util.HashMap','java.util.Locale','sun.util.locale.InternalLocaleBuilder','sun.util.locale.ParseStatus','sun.util.locale.LanguageTag','sun.util.locale.LocaleMatcher',['java.util.Locale','.Cache'],'sun.util.locale.BaseLocale',['java.util.Locale','.LocaleKey'],['java.util.Locale','.Category'],'java.util.PropertyPermission','sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.LocaleExtensions','java.util.Collections','StringBuilder','java.util.spi.LocaleNameProvider',['java.util.Locale','.LocaleNameGetter'],'sun.util.locale.provider.LocaleProviderAdapter','java.util.ArrayList','java.util.Arrays','java.text.MessageFormat','InternalError','java.util.StringTokenizer','sun.util.locale.LocaleUtils',['java.util.Locale','.FilteringMode']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Locale", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['Cloneable', 'java.io.Serializable']);
C$.$classes$=[['Cache',10],['LocaleKey',26],['LocaleNameGetter',10],['Category',25],['Builder',25],['FilteringMode',25],['LanguageRange',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hashCodeValue=0;
},1);

C$.$fields$=[['I',['hashCodeValue'],'S',['str','languageTag'],'O',['baseLocale','sun.util.locale.BaseLocale','localeExtensions','sun.util.locale.LocaleExtensions']]
,['O',['LOCALECACHE','java.util.Locale.Cache','ENGLISH','java.util.Locale','+FRENCH','+GERMAN','+ITALIAN','+JAPANESE','+KOREAN','+CHINESE','+SIMPLIFIED_CHINESE','+TRADITIONAL_CHINESE','+FRANCE','+GERMANY','+ITALY','+JAPAN','+KOREA','+CHINA','+PRC','+TAIWAN','+UK','+US','+CANADA','+CANADA_FRENCH','+ROOT','+defaultLocale','+defaultDisplayLocale','+defaultFormatLocale','isoLanguages','String[]','+isoCountries']]]

Clazz.newMeth(C$, 'c$$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions',  function (baseLocale, extensions) {
;C$.$init$.apply(this);
this.baseLocale=baseLocale;
this.localeExtensions=extensions;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (language, country, variant) {
;C$.$init$.apply(this);
if (language == null  || country == null   || variant == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.baseLocale=$I$(8,"getInstance$S$S$S$S",[C$.convertOldISOCodes$S(language), "", country, variant]);
this.localeExtensions=C$.getCompatibilityExtensions$S$S$S$S(language, "", country, variant);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (language, country) {
C$.c$$S$S$S.apply(this, [language, country, ""]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (language) {
C$.c$$S$S$S.apply(this, [language, "", ""]);
}, 1);

Clazz.newMeth(C$, 'createConstant$S$S',  function (lang, country) {
var base=$I$(8).createInstance$S$S(lang, country);
return C$.getInstance$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions(base, null);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S$S',  function (language, country, variant) {
return C$.getInstance$S$S$S$S$sun_util_locale_LocaleExtensions(language, "", country, variant, null);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S$S$S$sun_util_locale_LocaleExtensions',  function (language, script, country, variant, extensions) {
if (language == null  || script == null   || country == null   || variant == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (extensions == null ) {
extensions=C$.getCompatibilityExtensions$S$S$S$S(language, script, country, variant);
}var baseloc=$I$(8).getInstance$S$S$S$S(language, script, country, variant);
return C$.getInstance$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions(baseloc, extensions);
}, 1);

Clazz.newMeth(C$, 'getInstance$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions',  function (baseloc, extensions) {
var key=Clazz.new_($I$(9,1).c$$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions,[baseloc, extensions]);
return C$.LOCALECACHE.get$java_util_Locale_LocaleKey(key);
}, 1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return C$.defaultLocale;
}, 1);

Clazz.newMeth(C$, 'getDefault$java_util_Locale_Category',  function (category) {
switch (category) {
case $I$(10).DISPLAY:
if (C$.defaultDisplayLocale == null ) {
{
if (C$.defaultDisplayLocale == null ) {
C$.defaultDisplayLocale=C$.initDefault$java_util_Locale_Category(category);
}}}return C$.defaultDisplayLocale;
case $I$(10).FORMAT:
if (C$.defaultFormatLocale == null ) {
{
if (C$.defaultFormatLocale == null ) {
C$.defaultFormatLocale=C$.initDefault$java_util_Locale_Category(category);
}}}return C$.defaultFormatLocale;
default:
Clazz.assert(C$, this, function(){return false}, function(){return "Unknown Category"});
}
return C$.getDefault$();
}, 1);

Clazz.newMeth(C$, 'initDefault$',  function () {
var language;
var region;
var script;
var country;
var variant;
language=System.getProperty$S$S("user.language", "en");
region=System.getProperty$S("user.region");
if (region != null ) {
var i=region.indexOf$I("_");
if (i >= 0) {
country=region.substring$I$I(0, i);
variant=region.substring$I(i + 1);
} else {
country=region;
variant="";
}script="";
} else {
script=System.getProperty$S$S("user.script", "");
country=System.getProperty$S$S("user.country", "");
variant=System.getProperty$S$S("user.variant", "");
}return C$.getInstance$S$S$S$S$sun_util_locale_LocaleExtensions(language, script, country, variant, null);
}, 1);

Clazz.newMeth(C$, 'initDefault$java_util_Locale_Category',  function (category) {
return C$.getInstance$S$S$S$S$sun_util_locale_LocaleExtensions(System.getProperty$S$S(category.languageKey, C$.defaultLocale.getLanguage$()), System.getProperty$S$S(category.scriptKey, C$.defaultLocale.getScript$()), System.getProperty$S$S(category.countryKey, C$.defaultLocale.getCountry$()), System.getProperty$S$S(category.variantKey, C$.defaultLocale.getVariant$()), null);
}, 1);

Clazz.newMeth(C$, 'setDefault$java_util_Locale',  function (newLocale) {
C$.setDefault$java_util_Locale_Category$java_util_Locale($I$(10).DISPLAY, newLocale);
C$.setDefault$java_util_Locale_Category$java_util_Locale($I$(10).FORMAT, newLocale);
C$.defaultLocale=newLocale;
}, 1);

Clazz.newMeth(C$, 'setDefault$java_util_Locale_Category$java_util_Locale',  function (category, newLocale) {
if (category == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Category cannot be NULL"]);
if (newLocale == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Can\'t set default locale to NULL"]);
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(Clazz.new_($I$(11,1).c$$S$S,["user.language", "write"]));
switch (category) {
case $I$(10).DISPLAY:
C$.defaultDisplayLocale=newLocale;
break;
case $I$(10).FORMAT:
C$.defaultFormatLocale=newLocale;
break;
default:
Clazz.assert(C$, this, function(){return false}, function(){return "Unknown Category"});
}
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return $I$(12).getAllAvailableLocales$();
}, 1);

Clazz.newMeth(C$, 'getISOCountries$',  function () {
if (C$.isoCountries == null ) {
C$.isoCountries=C$.getISO2Table$S("ADANDAEAREAFAFGAGATGAIAIAALALBAMARMANANTAOAGOAQATAARARGASASMATAUTAUAUSAWABWAXALAAZAZEBABIHBBBRBBDBGDBEBELBFBFABGBGRBHBHRBIBDIBJBENBLBLMBMBMUBNBRNBOBOLBQBESBRBRABSBHSBTBTNBVBVTBWBWABYBLRBZBLZCACANCCCCKCDCODCFCAFCGCOGCHCHECICIVCKCOKCLCHLCMCMRCNCHNCOCOLCRCRICUCUBCVCPVCWCUWCXCXRCYCYPCZCZEDEDEUDJDJIDKDNKDMDMADODOMDZDZAECECUEEESTEGEGYEHESHERERIESESPETETHFIFINFJFJIFKFLKFMFSMFOFROFRFRAGAGABGBGBRGDGRDGEGEOGFGUFGGGGYGHGHAGIGIBGLGRLGMGMBGNGINGPGLPGQGNQGRGRCGSSGSGTGTMGUGUMGWGNBGYGUYHKHKGHMHMDHNHNDHRHRVHTHTIHUHUNIDIDNIEIRLILISRIMIMNININDIOIOTIQIRQIRIRNISISLITITAJEJEYJMJAMJOJORJPJPNKEKENKGKGZKHKHMKIKIRKMCOMKNKNAKPPRKKRKORKWKWTKYCYMKZKAZLALAOLBLBNLCLCALILIELKLKALRLBRLSLSOLTLTULULUXLVLVALYLBYMAMARMCMCOMDMDAMEMNEMFMAFMGMDGMHMHLMKMKDMLMLIMMMMRMNMNGMOMACMPMNPMQMTQMRMRTMSMSRMTMLTMUMUSMVMDVMWMWIMXMEXMYMYSMZMOZNANAMNCNCLNENERNFNFKNGNGANINICNLNLDNONORNPNPLNRNRUNUNIUNZNZLOMOMNPAPANPEPERPFPYFPGPNGPHPHLPKPAKPLPOLPMSPMPNPCNPRPRIPSPSEPTPRTPWPLWPYPRYQAQATREREUROROURSSRBRURUSRWRWASASAUSBSLBSCSYCSDSDNSESWESGSGPSHSHNSISVNSJSJMSKSVKSLSLESMSMRSNSENSOSOMSRSURSSSSDSTSTPSVSLVSXSXMSYSYRSZSWZTCTCATDTCDTFATFTGTGOTHTHATJTJKTKTKLTLTLSTMTKMTNTUNTOTONTRTURTTTTOTVTUVTWTWNTZTZAUAUKRUGUGAUMUMIUSUSAUYURYUZUZBVAVATVCVCTVEVENVGVGBVIVIRVNVNMVUVUTWFWLFWSWSMYEYEMYTMYTZAZAFZMZMBZWZWE");
}var result=Clazz.array(String, [C$.isoCountries.length]);
System.arraycopy$O$I$O$I$I(C$.isoCountries, 0, result, 0, C$.isoCountries.length);
return result;
}, 1);

Clazz.newMeth(C$, 'getISOLanguages$',  function () {
if (C$.isoLanguages == null ) {
C$.isoLanguages=C$.getISO2Table$S("aaaarababkaeaveafafrakakaamamhanargararaasasmavavaayaymazazebabakbebelbgbulbhbihbibisbmbambnbenbobodbrbrebsboscacatcechechchacocoscrcrecscescuchucvchvcycymdadandedeudvdivdzdzoeeeweelellenengeoepoesspaetesteueusfafasfffulfifinfjfijfofaofrfrafyfrygaglegdglaglglggngrngugujgvglvhahauhehebhihinhohmohrhrvhthathuhunhyhyehzheriainaidindieileigiboiiiiiikipkinindioidoisislititaiuikuiwhebjajpnjiyidjvjavkakatkgkonkikikkjkuakkkazklkalkmkhmknkankokorkrkaukskaskukurkvkomkwcorkykirlalatlbltzlgluglilimlnlinlolaoltlitlulublvlavmgmlgmhmahmimrimkmkdmlmalmnmonmomolmrmarmsmsamtmltmymyananaunbnobndndenenepngndonlnldnnnnononornrnblnvnavnynyaocociojojiomormororiososspapanpipliplpolpspusptporququermrohrnrunroronrurusrwkinsasanscsrdsdsndsesmesgsagsisinskslkslslvsmsmosnsnasosomsqsqisrsrpsssswstsotsusunsvsweswswatatamteteltgtgkththatitirtktuktltgltntsntotontrturtstsotttattwtwitytahuguigukukrururduzuzbvevenvivievovolwawlnwowolxhxhoyiyidyoyorzazhazhzhozuzul");
}var result=Clazz.array(String, [C$.isoLanguages.length]);
System.arraycopy$O$I$O$I$I(C$.isoLanguages, 0, result, 0, C$.isoLanguages.length);
return result;
}, 1);

Clazz.newMeth(C$, 'getISO2Table$S',  function (table) {
var len=(table.length$()/5|0);
var isoTable=Clazz.array(String, [len]);
for (var i=0, j=0; i < len; i++, j+=5) {
isoTable[i]=table.substring$I$I(j, j + 2);
}
return isoTable;
}, 1);

Clazz.newMeth(C$, 'getLanguage$',  function () {
return this.baseLocale.getLanguage$();
});

Clazz.newMeth(C$, 'getScript$',  function () {
return this.baseLocale.getScript$();
});

Clazz.newMeth(C$, 'getCountry$',  function () {
return this.baseLocale.getRegion$();
});

Clazz.newMeth(C$, 'getVariant$',  function () {
return this.baseLocale.getVariant$();
});

Clazz.newMeth(C$, 'hasExtensions$',  function () {
return this.localeExtensions != null ;
});

Clazz.newMeth(C$, 'stripExtensions$',  function () {
return this.hasExtensions$() ? C$.getInstance$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions(this.baseLocale, null) : this;
});

Clazz.newMeth(C$, 'getExtension$C',  function (key) {
if (!$I$(13).isValidKey$C(key)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Ill-formed extension key: " + key]);
}return this.hasExtensions$() ? this.localeExtensions.getExtensionValue$Character(Character.valueOf$C(key)) : null;
});

Clazz.newMeth(C$, 'getExtensionKeys$',  function () {
if (!this.hasExtensions$()) {
return $I$(14).emptySet$();
}return this.localeExtensions.getKeys$();
});

Clazz.newMeth(C$, 'getUnicodeLocaleAttributes$',  function () {
if (!this.hasExtensions$()) {
return $I$(14).emptySet$();
}return this.localeExtensions.getUnicodeLocaleAttributes$();
});

Clazz.newMeth(C$, 'getUnicodeLocaleType$S',  function (key) {
if (!C$.isUnicodeExtensionKey$S(key)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Ill-formed Unicode locale key: " + key]);
}return this.hasExtensions$() ? this.localeExtensions.getUnicodeLocaleType$S(key) : null;
});

Clazz.newMeth(C$, 'getUnicodeLocaleKeys$',  function () {
if (this.localeExtensions == null ) {
return $I$(14).emptySet$();
}return this.localeExtensions.getUnicodeLocaleKeys$();
});

Clazz.newMeth(C$, 'getBaseLocale$',  function () {
return this.baseLocale;
});

Clazz.newMeth(C$, 'getLocaleExtensions$',  function () {
return this.localeExtensions;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.str == null ) {
var l=(this.baseLocale.getLanguage$().length$() != 0);
var s=(this.baseLocale.getScript$().length$() != 0);
var r=(this.baseLocale.getRegion$().length$() != 0);
var v=(this.baseLocale.getVariant$().length$() != 0);
var e=(this.localeExtensions != null  && this.localeExtensions.getID$().length$() != 0 );
var result=Clazz.new_([this.baseLocale.getLanguage$()],$I$(15,1).c$$S);
if (r || (l && (v || s || e  ) ) ) {
result.append$C("_").append$S(this.baseLocale.getRegion$());
}if (v && (l || r ) ) {
result.append$C("_").append$S(this.baseLocale.getVariant$());
}if (s && (l || r ) ) {
result.append$S("_#").append$S(this.baseLocale.getScript$());
}if (e && (l || r ) ) {
result.append$C("_");
if (!s) {
result.append$C("#");
}result.append$S(this.localeExtensions.getID$());
}this.str=result.toString();
}return this.str;
});

Clazz.newMeth(C$, 'toLanguageTag$',  function () {
if (this.languageTag != null ) {
return this.languageTag;
}var tag=$I$(5).parseLocale$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions(this.baseLocale, this.localeExtensions);
var buf=Clazz.new_($I$(15,1));
var subtag=tag.getLanguage$();
if (subtag.length$() > 0) {
buf.append$S($I$(5).canonicalizeLanguage$S(subtag));
}subtag=tag.getScript$();
if (subtag.length$() > 0) {
buf.append$S("-");
buf.append$S($I$(5).canonicalizeScript$S(subtag));
}subtag=tag.getRegion$();
if (subtag.length$() > 0) {
buf.append$S("-");
buf.append$S($I$(5).canonicalizeRegion$S(subtag));
}var subtags=tag.getVariants$();
for (var s, $s = subtags.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
buf.append$S("-");
buf.append$S(s);
}
subtags=tag.getExtensions$();
for (var s, $s = subtags.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
buf.append$S("-");
buf.append$S($I$(5).canonicalizeExtension$S(s));
}
subtag=tag.getPrivateuse$();
if (subtag.length$() > 0) {
if (buf.length$() > 0) {
buf.append$S("-");
}buf.append$S("x").append$S("-");
buf.append$S(subtag);
}var langTag=buf.toString();
{
if (this.languageTag == null ) {
this.languageTag=langTag;
}}return this.languageTag;
});

Clazz.newMeth(C$, 'forLanguageTag$S',  function (languageTag) {
var tag=$I$(5).parse$S$sun_util_locale_ParseStatus(languageTag, null);
var bldr=Clazz.new_($I$(3,1));
bldr.setLanguageTag$sun_util_locale_LanguageTag(tag);
var base=bldr.getBaseLocale$();
var exts=bldr.getLocaleExtensions$();
if (exts == null  && base.getVariant$().length$() > 0 ) {
exts=C$.getCompatibilityExtensions$S$S$S$S(base.getLanguage$(), base.getScript$(), base.getRegion$(), base.getVariant$());
}return C$.getInstance$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions(base, exts);
}, 1);

Clazz.newMeth(C$, 'getISO3Language$',  function () {
var lang=this.baseLocale.getLanguage$();
if (lang.length$() == 3) {
return lang;
}var language3=C$.getISO3Code$S$S(lang, "aaaarababkaeaveafafrakakaamamhanargararaasasmavavaayaymazazebabakbebelbgbulbhbihbibisbmbambnbenbobodbrbrebsboscacatcechechchacocoscrcrecscescuchucvchvcycymdadandedeudvdivdzdzoeeeweelellenengeoepoesspaetesteueusfafasfffulfifinfjfijfofaofrfrafyfrygaglegdglaglglggngrngugujgvglvhahauhehebhihinhohmohrhrvhthathuhunhyhyehzheriainaidindieileigiboiiiiiikipkinindioidoisislititaiuikuiwhebjajpnjiyidjvjavkakatkgkonkikikkjkuakkkazklkalkmkhmknkankokorkrkaukskaskukurkvkomkwcorkykirlalatlbltzlgluglilimlnlinlolaoltlitlulublvlavmgmlgmhmahmimrimkmkdmlmalmnmonmomolmrmarmsmsamtmltmymyananaunbnobndndenenepngndonlnldnnnnononornrnblnvnavnynyaocociojojiomormororiososspapanpipliplpolpspusptporququermrohrnrunroronrurusrwkinsasanscsrdsdsndsesmesgsagsisinskslkslslvsmsmosnsnasosomsqsqisrsrpsssswstsotsusunsvsweswswatatamteteltgtgkththatitirtktuktltgltntsntotontrturtstsotttattwtwitytahuguigukukrururduzuzbvevenvivievovolwawlnwowolxhxhoyiyidyoyorzazhazhzhozuzul");
if (language3 == null ) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Couldn't find 3-letter language code for " + lang, "FormatData_" + this.toString(), "ShortLanguage"]);
}return language3;
});

Clazz.newMeth(C$, 'getISO3Country$',  function () {
var country3=C$.getISO3Code$S$S(this.baseLocale.getRegion$(), "ADANDAEAREAFAFGAGATGAIAIAALALBAMARMANANTAOAGOAQATAARARGASASMATAUTAUAUSAWABWAXALAAZAZEBABIHBBBRBBDBGDBEBELBFBFABGBGRBHBHRBIBDIBJBENBLBLMBMBMUBNBRNBOBOLBQBESBRBRABSBHSBTBTNBVBVTBWBWABYBLRBZBLZCACANCCCCKCDCODCFCAFCGCOGCHCHECICIVCKCOKCLCHLCMCMRCNCHNCOCOLCRCRICUCUBCVCPVCWCUWCXCXRCYCYPCZCZEDEDEUDJDJIDKDNKDMDMADODOMDZDZAECECUEEESTEGEGYEHESHERERIESESPETETHFIFINFJFJIFKFLKFMFSMFOFROFRFRAGAGABGBGBRGDGRDGEGEOGFGUFGGGGYGHGHAGIGIBGLGRLGMGMBGNGINGPGLPGQGNQGRGRCGSSGSGTGTMGUGUMGWGNBGYGUYHKHKGHMHMDHNHNDHRHRVHTHTIHUHUNIDIDNIEIRLILISRIMIMNININDIOIOTIQIRQIRIRNISISLITITAJEJEYJMJAMJOJORJPJPNKEKENKGKGZKHKHMKIKIRKMCOMKNKNAKPPRKKRKORKWKWTKYCYMKZKAZLALAOLBLBNLCLCALILIELKLKALRLBRLSLSOLTLTULULUXLVLVALYLBYMAMARMCMCOMDMDAMEMNEMFMAFMGMDGMHMHLMKMKDMLMLIMMMMRMNMNGMOMACMPMNPMQMTQMRMRTMSMSRMTMLTMUMUSMVMDVMWMWIMXMEXMYMYSMZMOZNANAMNCNCLNENERNFNFKNGNGANINICNLNLDNONORNPNPLNRNRUNUNIUNZNZLOMOMNPAPANPEPERPFPYFPGPNGPHPHLPKPAKPLPOLPMSPMPNPCNPRPRIPSPSEPTPRTPWPLWPYPRYQAQATREREUROROURSSRBRURUSRWRWASASAUSBSLBSCSYCSDSDNSESWESGSGPSHSHNSISVNSJSJMSKSVKSLSLESMSMRSNSENSOSOMSRSURSSSSDSTSTPSVSLVSXSXMSYSYRSZSWZTCTCATDTCDTFATFTGTGOTHTHATJTJKTKTKLTLTLSTMTKMTNTUNTOTONTRTURTTTTOTVTUVTWTWNTZTZAUAUKRUGUGAUMUMIUSUSAUYURYUZUZBVAVATVCVCTVEVENVGVGBVIVIRVNVNMVUVUTWFWLFWSWSMYEYEMYTMYTZAZAFZMZMBZWZWE");
if (country3 == null ) {
throw Clazz.new_(Clazz.load('java.util.MissingResourceException').c$$S$S$S,["Couldn't find 3-letter country code for " + this.baseLocale.getRegion$(), "FormatData_" + this.toString(), "ShortCountry"]);
}return country3;
});

Clazz.newMeth(C$, 'getISO3Code$S$S',  function (iso2Code, table) {
var codeLength=iso2Code.length$();
if (codeLength == 0) {
return "";
}var tableLength=table.length$();
var index=tableLength;
if (codeLength == 2) {
var c1=iso2Code.charAt$I(0);
var c2=iso2Code.charAt$I(1);
for (index=0; index < tableLength; index+=5) {
if (table.charAt$I(index) == c1 && table.charAt$I(index + 1) == c2 ) {
break;
}}
}return index < tableLength ? table.substring$I$I(index + 2, index + 5) : null;
}, 1);

Clazz.newMeth(C$, 'getDisplayLanguage$',  function () {
return this.getDisplayLanguage$java_util_Locale(C$.getDefault$java_util_Locale_Category($I$(10).DISPLAY));
});

Clazz.newMeth(C$, 'getDisplayLanguage$java_util_Locale',  function (inLocale) {
return p$1.getDisplayString$S$java_util_Locale$I.apply(this, [this.baseLocale.getLanguage$(), inLocale, 0]);
});

Clazz.newMeth(C$, 'getDisplayScript$',  function () {
return this.getDisplayScript$java_util_Locale(C$.getDefault$java_util_Locale_Category($I$(10).DISPLAY));
});

Clazz.newMeth(C$, 'getDisplayScript$java_util_Locale',  function (inLocale) {
return p$1.getDisplayString$S$java_util_Locale$I.apply(this, [this.baseLocale.getScript$(), inLocale, 3]);
});

Clazz.newMeth(C$, 'getDisplayCountry$',  function () {
return this.getDisplayCountry$java_util_Locale(C$.getDefault$java_util_Locale_Category($I$(10).DISPLAY));
});

Clazz.newMeth(C$, 'getDisplayCountry$java_util_Locale',  function (inLocale) {
return p$1.getDisplayString$S$java_util_Locale$I.apply(this, [this.baseLocale.getRegion$(), inLocale, 1]);
});

Clazz.newMeth(C$, 'getDisplayString$S$java_util_Locale$I',  function (code, inLocale, type) {
if (code.length$() == 0) {
return "";
}if (inLocale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var pool=$I$(12,"getPool$Class",[Clazz.getClass($I$(16))]);
var key=(type == 2 ? "%%" + code : code);
var result=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(17).INSTANCE, inLocale, key, Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(type), code]));
if (result != null ) {
return result;
}return code;
}, p$1);

Clazz.newMeth(C$, 'getDisplayVariant$',  function () {
return this.getDisplayVariant$java_util_Locale(C$.getDefault$java_util_Locale_Category($I$(10).DISPLAY));
});

Clazz.newMeth(C$, 'getDisplayVariant$java_util_Locale',  function (inLocale) {
if (this.baseLocale.getVariant$().length$() == 0) return "";
var lr=$I$(18).forJRE$().getLocaleResources$java_util_Locale(inLocale);
var names=p$1.getDisplayVariantArray$java_util_Locale.apply(this, [inLocale]);
return C$.formatList$SA$S$S(names, lr.getLocaleName$S("ListPattern"), lr.getLocaleName$S("ListCompositionPattern"));
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return this.getDisplayName$java_util_Locale(C$.getDefault$java_util_Locale_Category($I$(10).DISPLAY));
});

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale',  function (inLocale) {
var lr=$I$(18).forJRE$().getLocaleResources$java_util_Locale(inLocale);
var languageName=this.getDisplayLanguage$java_util_Locale(inLocale);
var scriptName=this.getDisplayScript$java_util_Locale(inLocale);
var countryName=this.getDisplayCountry$java_util_Locale(inLocale);
var variantNames=p$1.getDisplayVariantArray$java_util_Locale.apply(this, [inLocale]);
var displayNamePattern=lr.getLocaleName$S("DisplayNamePattern");
var listPattern=lr.getLocaleName$S("ListPattern");
var listCompositionPattern=lr.getLocaleName$S("ListCompositionPattern");
var mainName=null;
var qualifierNames=null;
if (languageName.length$() == 0 && scriptName.length$() == 0  && countryName.length$() == 0 ) {
if (variantNames.length == 0) {
return "";
} else {
return C$.formatList$SA$S$S(variantNames, listPattern, listCompositionPattern);
}}var names=Clazz.new_($I$(19,1).c$$I,[4]);
if (languageName.length$() != 0) {
names.add$O(languageName);
}if (scriptName.length$() != 0) {
names.add$O(scriptName);
}if (countryName.length$() != 0) {
names.add$O(countryName);
}if (variantNames.length != 0) {
names.addAll$java_util_Collection($I$(20).asList$OA(variantNames));
}mainName=names.get$I(0);
var numNames=names.size$();
qualifierNames=(numNames > 1) ? names.subList$I$I(1, numNames).toArray$OA(Clazz.array(String, [numNames - 1])) : Clazz.array(String, [0]);
var displayNames=Clazz.array(java.lang.Object, -1, [ new Integer(qualifierNames.length != 0 ? 2 : 1), mainName, qualifierNames.length != 0 ? C$.formatList$SA$S$S(qualifierNames, listPattern, listCompositionPattern) : null]);
if (displayNamePattern != null ) {
return Clazz.new_($I$(21,1).c$$S,[displayNamePattern]).format$O(displayNames);
} else {
var result=Clazz.new_($I$(15,1));
result.append$S(displayNames[1]);
if (displayNames.length > 2) {
result.append$S(" (");
result.append$S(displayNames[2]);
result.append$C(")");
}return result.toString();
}});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var that=Clazz.clone(this);
return that;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(22,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hc=this.hashCodeValue;
if (hc == 0) {
hc=this.baseLocale.hashCode$();
if (this.localeExtensions != null ) {
hc^=this.localeExtensions.hashCode$();
}this.hashCodeValue=hc;
}return hc;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (!(Clazz.instanceOf(obj, "java.util.Locale"))) return false;
var otherBase=(obj).baseLocale;
if (!this.baseLocale.equals$O(otherBase)) {
return false;
}if (this.localeExtensions == null ) {
return (obj).localeExtensions == null ;
}return this.localeExtensions.equals$O((obj).localeExtensions);
});

Clazz.newMeth(C$, 'getDisplayVariantArray$java_util_Locale',  function (inLocale) {
var tokenizer=Clazz.new_([this.baseLocale.getVariant$(), "_"],$I$(23,1).c$$S$S);
var names=Clazz.array(String, [tokenizer.countTokens$()]);
for (var i=0; i < names.length; ++i) {
names[i]=p$1.getDisplayString$S$java_util_Locale$I.apply(this, [tokenizer.nextToken$(), inLocale, 2]);
}
return names;
}, p$1);

Clazz.newMeth(C$, 'formatList$SA$S$S',  function (stringList, listPattern, listCompositionPattern) {
if (listPattern == null  || listCompositionPattern == null  ) {
var result=Clazz.new_($I$(15,1));
for (var i=0; i < stringList.length; ++i) {
if (i > 0) {
result.append$C(",");
}result.append$S(stringList[i]);
}
return result.toString();
}if (stringList.length > 3) {
var format=Clazz.new_($I$(21,1).c$$S,[listCompositionPattern]);
stringList=C$.composeList$java_text_MessageFormat$SA(format, stringList);
}var args=Clazz.array(java.lang.Object, [stringList.length + 1]);
System.arraycopy$O$I$O$I$I(stringList, 0, args, 1, stringList.length);
args[0]= new Integer(stringList.length);
var format=Clazz.new_($I$(21,1).c$$S,[listPattern]);
return format.format$O(args);
}, 1);

Clazz.newMeth(C$, 'composeList$java_text_MessageFormat$SA',  function (format, list) {
if (list.length <= 3) return list;
var listItems=Clazz.array(String, -1, [list[0], list[1]]);
var newItem=format.format$O(listItems);
var newList=Clazz.array(String, [list.length - 1]);
System.arraycopy$O$I$O$I$I(list, 2, newList, 1, newList.length - 1);
newList[0]=newItem;
return C$.composeList$java_text_MessageFormat$SA(format, newList);
}, 1);

Clazz.newMeth(C$, 'isUnicodeExtensionKey$S',  function (s) {
return (s.length$() == 2) && $I$(24).isAlphaNumericString$S(s) ;
}, 1);

Clazz.newMeth(C$, 'readResolve',  function () {
return C$.getInstance$S$S$S$S$sun_util_locale_LocaleExtensions(this.baseLocale.getLanguage$(), this.baseLocale.getScript$(), this.baseLocale.getRegion$(), this.baseLocale.getVariant$(), this.localeExtensions);
}, p$1);

Clazz.newMeth(C$, 'convertOldISOCodes$S',  function (language) {
language=$I$(24).toLowerString$S(language).intern$();
if (language === "he" ) {
return "iw";
} else if (language === "yi" ) {
return "ji";
} else if (language === "id" ) {
return "in";
} else {
return language;
}}, 1);

Clazz.newMeth(C$, 'getCompatibilityExtensions$S$S$S$S',  function (language, script, country, variant) {
var extensions=null;
if ($I$(24).caseIgnoreMatch$S$S(language, "ja") && script.length$() == 0  && $I$(24).caseIgnoreMatch$S$S(country, "jp")  && "JP".equals$O(variant) ) {
extensions=$I$(13).CALENDAR_JAPANESE;
} else if ($I$(24).caseIgnoreMatch$S$S(language, "th") && script.length$() == 0  && $I$(24).caseIgnoreMatch$S$S(country, "th")  && "TH".equals$O(variant) ) {
extensions=$I$(13).NUMBER_THAI;
}return extensions;
}, 1);

Clazz.newMeth(C$, 'filter$java_util_List$java_util_Collection$java_util_Locale_FilteringMode',  function (priorityList, locales, mode) {
return $I$(6).filter$java_util_List$java_util_Collection$java_util_Locale_FilteringMode(priorityList, locales, mode);
}, 1);

Clazz.newMeth(C$, 'filter$java_util_List$java_util_Collection',  function (priorityList, locales) {
return C$.filter$java_util_List$java_util_Collection$java_util_Locale_FilteringMode(priorityList, locales, $I$(25).AUTOSELECT_FILTERING);
}, 1);

Clazz.newMeth(C$, 'filterTags$java_util_List$java_util_Collection$java_util_Locale_FilteringMode',  function (priorityList, tags, mode) {
return $I$(6).filterTags$java_util_List$java_util_Collection$java_util_Locale_FilteringMode(priorityList, tags, mode);
}, 1);

Clazz.newMeth(C$, 'filterTags$java_util_List$java_util_Collection',  function (priorityList, tags) {
return C$.filterTags$java_util_List$java_util_Collection$java_util_Locale_FilteringMode(priorityList, tags, $I$(25).AUTOSELECT_FILTERING);
}, 1);

Clazz.newMeth(C$, 'lookup$java_util_List$java_util_Collection',  function (priorityList, locales) {
return $I$(6).lookup$java_util_List$java_util_Collection(priorityList, locales);
}, 1);

Clazz.newMeth(C$, 'lookupTag$java_util_List$java_util_Collection',  function (priorityList, tags) {
return $I$(6).lookupTag$java_util_List$java_util_Collection(priorityList, tags);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.LOCALECACHE=Clazz.new_($I$(7,1));
C$.ENGLISH=C$.createConstant$S$S("en", "");
C$.FRENCH=C$.createConstant$S$S("fr", "");
C$.GERMAN=C$.createConstant$S$S("de", "");
C$.ITALIAN=C$.createConstant$S$S("it", "");
C$.JAPANESE=C$.createConstant$S$S("ja", "");
C$.KOREAN=C$.createConstant$S$S("ko", "");
C$.CHINESE=C$.createConstant$S$S("zh", "");
C$.SIMPLIFIED_CHINESE=C$.createConstant$S$S("zh", "CN");
C$.TRADITIONAL_CHINESE=C$.createConstant$S$S("zh", "TW");
C$.FRANCE=C$.createConstant$S$S("fr", "FR");
C$.GERMANY=C$.createConstant$S$S("de", "DE");
C$.ITALY=C$.createConstant$S$S("it", "IT");
C$.JAPAN=C$.createConstant$S$S("ja", "JP");
C$.KOREA=C$.createConstant$S$S("ko", "KR");
C$.CHINA=C$.SIMPLIFIED_CHINESE;
C$.PRC=C$.SIMPLIFIED_CHINESE;
C$.TAIWAN=C$.TRADITIONAL_CHINESE;
C$.UK=C$.createConstant$S$S("en", "GB");
C$.US=C$.createConstant$S$S("en", "US");
C$.CANADA=C$.createConstant$S$S("en", "CA");
C$.CANADA_FRENCH=C$.createConstant$S$S("fr", "CA");
C$.ROOT=C$.createConstant$S$S("", "");
C$.defaultLocale=C$.initDefault$();
C$.defaultDisplayLocale=null;
C$.defaultFormatLocale=null;
C$.isoLanguages=null;
C$.isoCountries=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Locale, "Cache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cache=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['cache','java.util.HashMap']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$java_util_Locale_LocaleKey',  function (key) {
var loc=this.cache.get$O(key.toString());
if (loc == null ) this.cache.put$O$O(key.toString(), loc=this.createObject$java_util_Locale_LocaleKey(key));
return loc;
});

Clazz.newMeth(C$, 'createObject$java_util_Locale_LocaleKey',  function (key) {
return Clazz.new_($I$(2,1).c$$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions,[key.base, key.exts]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Locale, "LocaleKey", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash'],'S',['strRep'],'O',['base','sun.util.locale.BaseLocale','exts','sun.util.locale.LocaleExtensions']]]

Clazz.newMeth(C$, 'toString',  function () {
return this.strRep;
});

Clazz.newMeth(C$, 'c$$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions',  function (baseLocale, extensions) {
;C$.$init$.apply(this);
this.base=baseLocale;
this.exts=extensions;
this.strRep=this.base.toString() + (this.exts == null  ? "" : this.exts.toString());
var h=this.base.hashCode$();
if (this.exts != null ) {
h^=this.exts.hashCode$();
}this.hash=h;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.util.Locale.LocaleKey"))) {
return false;
}var other=obj;
if (this.hash != other.hash || !this.base.equals$O(other.base) ) {
return false;
}if (this.exts == null ) {
return other.exts == null ;
}return this.exts.equals$O(other.exts);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.hash;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Locale, "LocaleNameGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.LocaleServiceProviderPool.LocalizedObjectGetter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','java.util.Locale.LocaleNameGetter']]]

Clazz.newMeth(C$, ['getObject$java_util_spi_LocaleNameProvider$java_util_Locale$S$OA','getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA'],  function (localeNameProvider, locale, key, params) {
Clazz.assert(C$, this, function(){return params.length == 2});
var type=(params[0]).$c();
var code=params[1];
switch (type) {
case 0:
return localeNameProvider.getDisplayLanguage$S$java_util_Locale(code, locale);
case 1:
return localeNameProvider.getDisplayCountry$S$java_util_Locale(code, locale);
case 2:
return localeNameProvider.getDisplayVariant$S$java_util_Locale(code, locale);
case 3:
return localeNameProvider.getDisplayScript$S$java_util_Locale(code, locale);
default:
Clazz.assert(C$, this, function(){return false});
}
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.Locale, "Category", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['languageKey','scriptKey','countryKey','variantKey']]]

Clazz.newMeth(C$, 'c$$S$S$S$S',  function (languageKey, scriptKey, countryKey, variantKey) {
;C$.$init$.apply(this);
this.languageKey=languageKey;
this.scriptKey=scriptKey;
this.countryKey=countryKey;
this.variantKey=variantKey;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$S$S$S, "DISPLAY", 0, ["user.language.display", "user.script.display", "user.country.display", "user.variant.display"]);
Clazz.newEnumConst($vals, C$.c$$S$S$S$S, "FORMAT", 1, ["user.language.format", "user.script.format", "user.country.format", "user.variant.format"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Locale, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['localeBuilder','sun.util.locale.InternalLocaleBuilder']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.localeBuilder=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
try {
this.localeBuilder.setLocale$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions(locale.baseLocale, locale.localeExtensions);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'setLanguageTag$S',  function (languageTag) {
var sts=Clazz.new_($I$(4,1));
var tag=$I$(5).parse$S$sun_util_locale_ParseStatus(languageTag, sts);
if (sts.isError$()) {
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[sts.getErrorMessage$(), sts.getErrorIndex$()]);
}this.localeBuilder.setLanguageTag$sun_util_locale_LanguageTag(tag);
return this;
});

Clazz.newMeth(C$, 'setLanguage$S',  function (language) {
try {
this.localeBuilder.setLanguage$S(language);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'setScript$S',  function (script) {
try {
this.localeBuilder.setScript$S(script);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'setRegion$S',  function (region) {
try {
this.localeBuilder.setRegion$S(region);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'setVariant$S',  function (variant) {
try {
this.localeBuilder.setVariant$S(variant);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'setExtension$C$S',  function (key, value) {
try {
this.localeBuilder.setExtension$C$S(key, value);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'setUnicodeLocaleKeyword$S$S',  function (key, type) {
try {
this.localeBuilder.setUnicodeLocaleKeyword$S$S(key, type);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'addUnicodeLocaleAttribute$S',  function (attribute) {
try {
this.localeBuilder.addUnicodeLocaleAttribute$S(attribute);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'removeUnicodeLocaleAttribute$S',  function (attribute) {
try {
this.localeBuilder.removeUnicodeLocaleAttribute$S(attribute);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.util.locale.LocaleSyntaxException")){
throw Clazz.new_(Clazz.load('java.util.IllformedLocaleException').c$$S$I,[e.getMessage$(), e.getErrorIndex$()]);
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.localeBuilder.clear$();
return this;
});

Clazz.newMeth(C$, 'clearExtensions$',  function () {
this.localeBuilder.clearExtensions$();
return this;
});

Clazz.newMeth(C$, 'build$',  function () {
var baseloc=this.localeBuilder.getBaseLocale$();
var extensions=this.localeBuilder.getLocaleExtensions$();
if (extensions == null  && baseloc.getVariant$().length$() > 0 ) {
extensions=$I$(2,"getCompatibilityExtensions$S$S$S$S",[baseloc.getLanguage$(), baseloc.getScript$(), baseloc.getRegion$(), baseloc.getVariant$()]);
}return $I$(2).getInstance$sun_util_locale_BaseLocale$sun_util_locale_LocaleExtensions(baseloc, extensions);
});
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.Locale, "FilteringMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "AUTOSELECT_FILTERING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "EXTENDED_FILTERING", 1, []);
Clazz.newEnumConst($vals, C$.c$, "IGNORE_EXTENDED_RANGES", 2, []);
Clazz.newEnumConst($vals, C$.c$, "MAP_EXTENDED_RANGES", 3, []);
Clazz.newEnumConst($vals, C$.c$, "REJECT_EXTENDED_RANGES", 4, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Locale, "LanguageRange", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hash=0;
},1);

C$.$fields$=[['D',['weight'],'I',['hash'],'S',['range']]]

Clazz.newMeth(C$, 'c$$S',  function (range) {
C$.c$$S$D.apply(this, [range, 1.0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$D',  function (range, weight) {
;C$.$init$.apply(this);
if (range == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (weight < 0.0  || weight > 1.0  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["weight=" + new Double(weight).toString()]);
}range=range.toLowerCase$();
var isIllFormed=false;
var subtags=range.split$S("-");
if (C$.isSubtagIllFormed$S$Z(subtags[0], true) || range.endsWith$S("-") ) {
isIllFormed=true;
} else {
for (var i=1; i < subtags.length; i++) {
if (C$.isSubtagIllFormed$S$Z(subtags[i], false)) {
isIllFormed=true;
break;
}}
}if (isIllFormed) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["range=" + range]);
}this.range=range;
this.weight=weight;
}, 1);

Clazz.newMeth(C$, 'isSubtagIllFormed$S$Z',  function (subtag, isFirstSubtag) {
if (subtag.equals$O("") || subtag.length$() > 8 ) {
return true;
} else if (subtag.equals$O("*")) {
return false;
}var charArray=subtag.toCharArray$();
if (isFirstSubtag) {
for (var c, $c = 0, $$c = charArray; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c < "a" || c > "z" ) {
return true;
}}
} else {
for (var c, $c = 0, $$c = charArray; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c < "0" || (c > "9" && c < "a" )  || c > "z" ) {
return true;
}}
}return false;
}, 1);

Clazz.newMeth(C$, 'getRange$',  function () {
return this.range;
});

Clazz.newMeth(C$, 'getWeight$',  function () {
return this.weight;
});

Clazz.newMeth(C$, 'parse$S',  function (ranges) {
return $I$(6).parse$S(ranges);
}, 1);

Clazz.newMeth(C$, 'parse$S$java_util_Map',  function (ranges, map) {
return C$.mapEquivalents$java_util_List$java_util_Map(C$.parse$S(ranges), map);
}, 1);

Clazz.newMeth(C$, 'mapEquivalents$java_util_List$java_util_Map',  function (priorityList, map) {
return $I$(6).mapEquivalents$java_util_List$java_util_Map(priorityList, map);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hash == 0) {
var result=17;
result=37 * result + this.range.hashCode$();
var bitsWeight=Double.doubleToLongBits$D(this.weight);
result=37 * result + Long.$ival((Long.$xor(bitsWeight,(Long.$usr(bitsWeight,32)))));
this.hash=result;
}return this.hash;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.util.Locale.LanguageRange"))) {
return false;
}var other=obj;
return this.hash == other.hash && this.range.equals$O(other.range)  && this.weight == other.weight  ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

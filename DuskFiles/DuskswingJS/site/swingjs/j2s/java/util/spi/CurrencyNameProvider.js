(function(){var P$=Clazz.newPackage("java.util.spi"),I$=[[0,['java.util.ResourceBundle','.Control']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CurrencyNameProvider", null, 'java.util.spi.LocaleServiceProvider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getDisplayName$S$java_util_Locale',  function (currencyCode, locale) {
if (currencyCode == null  || locale == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var charray=currencyCode.toCharArray$();
if (charray.length != 3) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The currencyCode is not in the form of three upper-case letters."]);
}for (var c, $c = 0, $$c = charray; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c < "A" || c > "Z" ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The currencyCode is not in the form of three upper-case letters."]);
}}
var c=$I$(1,"getNoFallbackControl$java_util_List",[$I$(1).FORMAT_DEFAULT]);
for (var l, $l = 0, $$l = this.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
if (c.getCandidateLocales$S$java_util_Locale("", l).contains$O(locale)) {
return null;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The locale is not available"]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

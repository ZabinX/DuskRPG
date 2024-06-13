(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'java.util.Locale',['sun.util.locale.provider.AuxLocaleProviderAdapter','.NullProvider'],'java.util.concurrent.ConcurrentHashMap','java.text.spi.BreakIteratorProvider','java.text.spi.CollatorProvider','java.text.spi.DateFormatProvider','java.text.spi.DateFormatSymbolsProvider','java.text.spi.DecimalFormatSymbolsProvider','java.text.spi.NumberFormatProvider','java.util.spi.CurrencyNameProvider','java.util.spi.LocaleNameProvider','java.util.spi.TimeZoneNameProvider','java.util.spi.CalendarDataProvider','java.util.spi.CalendarNameProvider','sun.util.spi.CalendarProvider','java.util.HashSet','sun.util.locale.provider.LocaleServiceProviderPool','java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AuxLocaleProviderAdapter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.util.locale.provider.LocaleProviderAdapter');
C$.$classes$=[['NullProvider',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.providersMap=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['providersMap','java.util.concurrent.ConcurrentMap']]
,['O',['availableLocales','java.util.Locale[]','NULL_PROVIDER','sun.util.locale.provider.AuxLocaleProviderAdapter.NullProvider']]]

Clazz.newMeth(C$, 'getLocaleServiceProvider$Class',  function (c) {
var lsp=this.providersMap.get$O(c);
if (lsp == null ) {
lsp=this.findInstalledProvider$Class(c);
this.providersMap.putIfAbsent$O$O(c, lsp == null  ? C$.NULL_PROVIDER : lsp);
}return lsp;
});

Clazz.newMeth(C$, 'getBreakIteratorProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(4)));
});

Clazz.newMeth(C$, 'getCollatorProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(5)));
});

Clazz.newMeth(C$, 'getDateFormatProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(6)));
});

Clazz.newMeth(C$, 'getDateFormatSymbolsProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(7)));
});

Clazz.newMeth(C$, 'getDecimalFormatSymbolsProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(8)));
});

Clazz.newMeth(C$, 'getNumberFormatProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(9)));
});

Clazz.newMeth(C$, 'getCurrencyNameProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(10)));
});

Clazz.newMeth(C$, 'getLocaleNameProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(11)));
});

Clazz.newMeth(C$, 'getTimeZoneNameProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(12)));
});

Clazz.newMeth(C$, 'getCalendarDataProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(13)));
});

Clazz.newMeth(C$, 'getCalendarNameProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(14)));
});

Clazz.newMeth(C$, 'getCalendarProvider$',  function () {
return this.getLocaleServiceProvider$Class(Clazz.getClass($I$(15)));
});

Clazz.newMeth(C$, 'getLocaleResources$java_util_Locale',  function (locale) {
return null;
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
if (C$.availableLocales == null ) {
var avail=Clazz.new_($I$(16,1));
for (var c, $c = 0, $$c = $I$(17).spiClasses; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
var lsp=this.getLocaleServiceProvider$Class(c);
if (lsp != null ) {
avail.addAll$java_util_Collection($I$(18,"asList$OA",[lsp.getAvailableLocales$()]));
}}
C$.availableLocales=avail.toArray$OA(Clazz.array($I$(1), [0]));
}return C$.availableLocales;
});

C$.$static$=function(){C$.$static$=0;
C$.availableLocales=null;
C$.NULL_PROVIDER=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AuxLocaleProviderAdapter, "NullProvider", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.spi.LocaleServiceProvider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return Clazz.array($I$(1), [0]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

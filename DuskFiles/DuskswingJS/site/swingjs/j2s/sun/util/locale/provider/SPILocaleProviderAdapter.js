(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'java.util.concurrent.ConcurrentHashMap','sun.util.locale.provider.SPILocaleProviderAdapter','java.util.Locale',['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'java.security.AccessController','java.util.ServiceLoader','sun.util.locale.provider.LocaleServiceProviderPool']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SPILocaleProviderAdapter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.util.locale.provider.AuxLocaleProviderAdapter');
C$.$classes$=[['Delegate',8],['BreakIteratorProviderDelegate',8],['CollatorProviderDelegate',8],['DateFormatProviderDelegate',8],['DateFormatSymbolsProviderDelegate',8],['DecimalFormatSymbolsProviderDelegate',8],['NumberFormatProviderDelegate',8],['CalendarDataProviderDelegate',8],['CalendarNameProviderDelegate',8],['CurrencyNameProviderDelegate',8],['LocaleNameProviderDelegate',8],['TimeZoneNameProviderDelegate',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAdapterType$',  function () {
return $I$(4).SPI;
});

Clazz.newMeth(C$, 'findInstalledProvider$Class',  function (c) {
try {
return $I$(5,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.SPILocaleProviderAdapter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SPILocaleProviderAdapter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var delegate=null;
for (var provider, $provider = $I$(6).loadInstalled$Class(this.$finals$.c).iterator$(); $provider.hasNext$()&&((provider=($provider.next$())),1);) {
if (delegate == null ) {
try {
delegate=Clazz.forName(Clazz.getClass($I$(2)).getCanonicalName$() + "$" + this.$finals$.c.getSimpleName$() + "Delegate" ).newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException") || Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
$I$(7,"config$Class$S",[Clazz.getClass($I$(2)), e.toString()]);
return null;
} else {
throw e;
}
}
}(delegate).addImpl$java_util_spi_LocaleServiceProvider(provider);
}
return delegate;
});
})()
), Clazz.new_(P$.SPILocaleProviderAdapter$1.$init$,[this, {c:c}]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
$I$(7,"config$Class$S",[Clazz.getClass(C$), e.toString()]);
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getImpl$java_util_Map$java_util_Locale',  function (map, locale) {
for (var l, $l = $I$(7).getLookupLocales$java_util_Locale(locale).iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) {
var ret=map.get$O(l);
if (ret != null ) {
return ret;
}}
return null;
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.SPILocaleProviderAdapter, "Delegate", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "BreakIteratorProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.text.spi.BreakIteratorProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_text_spi_BreakIteratorProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getWordInstance$java_util_Locale',  function (locale) {
var bip=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return bip != null });
return bip.getWordInstance$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'getLineInstance$java_util_Locale',  function (locale) {
var bip=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return bip != null });
return bip.getLineInstance$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'getCharacterInstance$java_util_Locale',  function (locale) {
var bip=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return bip != null });
return bip.getCharacterInstance$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'getSentenceInstance$java_util_Locale',  function (locale) {
var bip=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return bip != null });
return bip.getSentenceInstance$java_util_Locale(locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "CollatorProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.text.spi.CollatorProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_text_spi_CollatorProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (locale) {
var cp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return cp != null });
return cp.getInstance$java_util_Locale(locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "DateFormatProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.text.spi.DateFormatProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_text_spi_DateFormatProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getTimeInstance$I$java_util_Locale',  function (style, locale) {
var dfp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return dfp != null });
return dfp.getTimeInstance$I$java_util_Locale(style, locale);
});

Clazz.newMeth(C$, 'getDateInstance$I$java_util_Locale',  function (style, locale) {
var dfp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return dfp != null });
return dfp.getDateInstance$I$java_util_Locale(style, locale);
});

Clazz.newMeth(C$, 'getDateTimeInstance$I$I$java_util_Locale',  function (dateStyle, timeStyle, locale) {
var dfp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return dfp != null });
return dfp.getDateTimeInstance$I$I$java_util_Locale(dateStyle, timeStyle, locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "DateFormatSymbolsProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.text.spi.DateFormatSymbolsProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_text_spi_DateFormatSymbolsProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (locale) {
var dfsp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return dfsp != null });
return dfsp.getInstance$java_util_Locale(locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "DecimalFormatSymbolsProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.text.spi.DecimalFormatSymbolsProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_text_spi_DecimalFormatSymbolsProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (locale) {
var dfsp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return dfsp != null });
return dfsp.getInstance$java_util_Locale(locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "NumberFormatProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.text.spi.NumberFormatProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_text_spi_NumberFormatProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getCurrencyInstance$java_util_Locale',  function (locale) {
var nfp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return nfp != null });
return nfp.getCurrencyInstance$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'getIntegerInstance$java_util_Locale',  function (locale) {
var nfp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return nfp != null });
return nfp.getIntegerInstance$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'getNumberInstance$java_util_Locale',  function (locale) {
var nfp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return nfp != null });
return nfp.getNumberInstance$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'getPercentInstance$java_util_Locale',  function (locale) {
var nfp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return nfp != null });
return nfp.getPercentInstance$java_util_Locale(locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "CalendarDataProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.spi.CalendarDataProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_util_spi_CalendarDataProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getFirstDayOfWeek$java_util_Locale',  function (locale) {
var cdp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return cdp != null });
return cdp.getFirstDayOfWeek$java_util_Locale(locale);
});

Clazz.newMeth(C$, 'getMinimalDaysInFirstWeek$java_util_Locale',  function (locale) {
var cdp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return cdp != null });
return cdp.getMinimalDaysInFirstWeek$java_util_Locale(locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "CalendarNameProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.spi.CalendarNameProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_util_spi_CalendarNameProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getDisplayName$S$I$I$I$java_util_Locale',  function (calendarType, field, value, style, locale) {
var cdp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return cdp != null });
return cdp.getDisplayName$S$I$I$I$java_util_Locale(calendarType, field, value, style, locale);
});

Clazz.newMeth(C$, 'getDisplayNames$S$I$I$java_util_Locale',  function (calendarType, field, style, locale) {
var cdp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return cdp != null });
return cdp.getDisplayNames$S$I$I$java_util_Locale(calendarType, field, style, locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "CurrencyNameProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.spi.CurrencyNameProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_util_spi_CurrencyNameProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getSymbol$S$java_util_Locale',  function (currencyCode, locale) {
var cnp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return cnp != null });
return cnp.getSymbol$S$java_util_Locale(currencyCode, locale);
});

Clazz.newMeth(C$, 'getDisplayName$S$java_util_Locale',  function (currencyCode, locale) {
var cnp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return cnp != null });
return cnp.getDisplayName$S$java_util_Locale(currencyCode, locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "LocaleNameProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.spi.LocaleNameProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_util_spi_LocaleNameProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getDisplayLanguage$S$java_util_Locale',  function (languageCode, locale) {
var lnp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return lnp != null });
return lnp.getDisplayLanguage$S$java_util_Locale(languageCode, locale);
});

Clazz.newMeth(C$, 'getDisplayScript$S$java_util_Locale',  function (scriptCode, locale) {
var lnp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return lnp != null });
return lnp.getDisplayScript$S$java_util_Locale(scriptCode, locale);
});

Clazz.newMeth(C$, 'getDisplayCountry$S$java_util_Locale',  function (countryCode, locale) {
var lnp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return lnp != null });
return lnp.getDisplayCountry$S$java_util_Locale(countryCode, locale);
});

Clazz.newMeth(C$, 'getDisplayVariant$S$java_util_Locale',  function (variant, locale) {
var lnp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return lnp != null });
return lnp.getDisplayVariant$S$java_util_Locale(variant, locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SPILocaleProviderAdapter, "TimeZoneNameProviderDelegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.spi.TimeZoneNameProvider', [['sun.util.locale.provider.SPILocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter.Delegate']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, ['addImpl$java_util_spi_TimeZoneNameProvider','addImpl$java_util_spi_LocaleServiceProvider'],  function (impl) {
for (var l, $l = 0, $$l = impl.getAvailableLocales$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
this.map.putIfAbsent$O$O(l, impl);
}
});

Clazz.newMeth(C$, 'getImpl$java_util_Locale',  function (locale) {
return $I$(2).getImpl$java_util_Map$java_util_Locale(this.map, locale);
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return this.map.keySet$().toArray$OA(Clazz.array($I$(3), [0]));
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return this.map.containsKey$O(locale);
});

Clazz.newMeth(C$, 'getDisplayName$S$Z$I$java_util_Locale',  function (ID, daylight, style, locale) {
var tznp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return tznp != null });
return tznp.getDisplayName$S$Z$I$java_util_Locale(ID, daylight, style, locale);
});

Clazz.newMeth(C$, 'getGenericDisplayName$S$I$java_util_Locale',  function (ID, style, locale) {
var tznp=this.getImpl$java_util_Locale(locale);
Clazz.assert(C$, this, function(){return tznp != null });
return tznp.getGenericDisplayName$S$I$java_util_Locale(ID, style, locale);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

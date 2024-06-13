(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'java.util.Hashtable','java.util.Locale','java.util.Currency','InternalError','sun.util.resources.LocaleData']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DecimalFormatSymbols", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.serialVersionOnStream=3;
},1);

C$.$fields$=[['C',['zeroDigit','groupingSeparator','decimalSeparator','perMill','percent','digit','patternSeparator','minusSign','monetarySeparator','exponential'],'I',['serialVersionOnStream'],'S',['infinity','NaN','currencySymbol','intlCurrencySymbol','exponentialSeparator'],'O',['currency','java.util.Currency','locale','java.util.Locale']]
,['O',['cachedLocaleData','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.initialize$java_util_Locale.apply(this, [$I$(2).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (locale) {
;C$.$init$.apply(this);
p$1.initialize$java_util_Locale.apply(this, [locale]);
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.getInstance$java_util_Locale($I$(2).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (locale) {
return Clazz.new_(C$.c$$java_util_Locale,[locale]);
}, 1);

Clazz.newMeth(C$, 'getZeroDigit$',  function () {
return this.zeroDigit;
});

Clazz.newMeth(C$, 'setZeroDigit$C',  function (zeroDigit) {
this.zeroDigit=zeroDigit;
});

Clazz.newMeth(C$, 'getGroupingSeparator$',  function () {
return this.groupingSeparator;
});

Clazz.newMeth(C$, 'setGroupingSeparator$C',  function (groupingSeparator) {
this.groupingSeparator=groupingSeparator;
});

Clazz.newMeth(C$, 'getDecimalSeparator$',  function () {
return this.decimalSeparator;
});

Clazz.newMeth(C$, 'setDecimalSeparator$C',  function (decimalSeparator) {
this.decimalSeparator=decimalSeparator;
});

Clazz.newMeth(C$, 'getPerMill$',  function () {
return this.perMill;
});

Clazz.newMeth(C$, 'setPerMill$C',  function (perMill) {
this.perMill=perMill;
});

Clazz.newMeth(C$, 'getPercent$',  function () {
return this.percent;
});

Clazz.newMeth(C$, 'setPercent$C',  function (percent) {
this.percent=percent;
});

Clazz.newMeth(C$, 'getDigit$',  function () {
return this.digit;
});

Clazz.newMeth(C$, 'setDigit$C',  function (digit) {
this.digit=digit;
});

Clazz.newMeth(C$, 'getPatternSeparator$',  function () {
return this.patternSeparator;
});

Clazz.newMeth(C$, 'setPatternSeparator$C',  function (patternSeparator) {
this.patternSeparator=patternSeparator;
});

Clazz.newMeth(C$, 'getInfinity$',  function () {
return this.infinity;
});

Clazz.newMeth(C$, 'setInfinity$S',  function (infinity) {
this.infinity=infinity;
});

Clazz.newMeth(C$, 'getNaN$',  function () {
return this.NaN;
});

Clazz.newMeth(C$, 'setNaN$S',  function (NaN) {
this.NaN=NaN;
});

Clazz.newMeth(C$, 'getMinusSign$',  function () {
return this.minusSign;
});

Clazz.newMeth(C$, 'setMinusSign$C',  function (minusSign) {
this.minusSign=minusSign;
});

Clazz.newMeth(C$, 'getCurrencySymbol$',  function () {
return this.currencySymbol;
});

Clazz.newMeth(C$, 'setCurrencySymbol$S',  function (currency) {
this.currencySymbol=currency;
});

Clazz.newMeth(C$, 'getInternationalCurrencySymbol$',  function () {
return this.intlCurrencySymbol;
});

Clazz.newMeth(C$, 'setInternationalCurrencySymbol$S',  function (currencyCode) {
this.intlCurrencySymbol=currencyCode;
this.currency=null;
if (currencyCode != null ) {
try {
this.currency=$I$(3).getInstance$S(currencyCode);
this.currencySymbol=this.currency.getSymbol$();
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getCurrency$',  function () {
return this.currency;
});

Clazz.newMeth(C$, 'setCurrency$java_util_Currency',  function (currency) {
if (currency == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.currency=currency;
this.intlCurrencySymbol=currency.getCurrencyCode$();
this.currencySymbol=currency.getSymbol$java_util_Locale(this.locale);
});

Clazz.newMeth(C$, 'getMonetaryDecimalSeparator$',  function () {
return this.monetarySeparator;
});

Clazz.newMeth(C$, 'setMonetaryDecimalSeparator$C',  function (sep) {
this.monetarySeparator=sep;
});

Clazz.newMeth(C$, 'getExponentialSymbol$',  function () {
return this.exponential;
});

Clazz.newMeth(C$, 'getExponentSeparator$',  function () {
return this.exponentialSeparator;
});

Clazz.newMeth(C$, 'setExponentialSymbol$C',  function (exp) {
this.exponential=exp;
});

Clazz.newMeth(C$, 'setExponentSeparator$S',  function (exp) {
if (exp == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.exponentialSeparator=exp;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(4,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) return false;
if (this === obj ) return true;
if (this.getClass$() !== obj.getClass$() ) return false;
var other=obj;
return (this.zeroDigit == other.zeroDigit && this.groupingSeparator == other.groupingSeparator  && this.decimalSeparator == other.decimalSeparator  && this.percent == other.percent  && this.perMill == other.perMill  && this.digit == other.digit  && this.minusSign == other.minusSign  && this.patternSeparator == other.patternSeparator  && this.infinity.equals$O(other.infinity)  && this.NaN.equals$O(other.NaN)  && this.currencySymbol.equals$O(other.currencySymbol)  && this.intlCurrencySymbol.equals$O(other.intlCurrencySymbol)  && this.monetarySeparator == other.monetarySeparator  && this.exponentialSeparator.equals$O(other.exponentialSeparator)  && this.locale.equals$O(other.locale) );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var result=this.zeroDigit.$c();
result=result * 37 + this.groupingSeparator.$c();
result=result * 37 + this.decimalSeparator.$c();
return result;
});

Clazz.newMeth(C$, 'initialize$java_util_Locale',  function (locale) {
this.locale=locale;
var needCacheUpdate=false;
var data=C$.cachedLocaleData.get$O(locale.toString());
if (data == null ) {
data=Clazz.array(java.lang.Object, [3]);
var rb=$I$(5).getNumberFormatData$java_util_Locale(locale);
data[0]=rb.getStringArray$S("NumberElements");
needCacheUpdate=true;
}var numberElements=data[0];
this.decimalSeparator=numberElements[0].charAt$I(0);
this.groupingSeparator=numberElements[1].charAt$I(0);
this.patternSeparator=numberElements[2].charAt$I(0);
this.percent=numberElements[3].charAt$I(0);
this.zeroDigit=numberElements[4].charAt$I(0);
this.digit=numberElements[5].charAt$I(0);
this.minusSign=numberElements[6].charAt$I(0);
this.exponential=numberElements[7].charAt$I(0);
this.exponentialSeparator=numberElements[7];
this.perMill=numberElements[8].charAt$I(0);
this.infinity=numberElements[9];
this.NaN=numberElements[10];
this.intlCurrencySymbol="\u00a4";
this.currencySymbol="$";
this.monetarySeparator=this.decimalSeparator;
if (needCacheUpdate) {
C$.cachedLocaleData.put$O$O(locale.toString(), data);
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.cachedLocaleData=Clazz.new_($I$(1,1).c$$I,[3]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

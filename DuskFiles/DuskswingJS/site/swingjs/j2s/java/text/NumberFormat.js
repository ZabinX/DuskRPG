(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.HashMap','java.util.Hashtable','java.text.DontCareFieldPosition','java.text.ParsePosition','java.util.Locale','sun.util.resources.LocaleData','java.text.DecimalFormatSymbols','java.text.DecimalFormat','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NumberFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.text.Format');
C$.$classes$=[['Field',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.groupingUsed=true;
this.maxFractionDigits=($b$[0] = 3, $b$[0]);
this.parseIntegerOnly=false;
this.maximumIntegerDigits=40;
this.minimumIntegerDigits=1;
this.maximumFractionDigits=3;
this.minimumFractionDigits=0;
},1);

C$.$fields$=[['Z',['groupingUsed','parseIntegerOnly'],'B',['maxFractionDigits'],'I',['maximumIntegerDigits','minimumIntegerDigits','maximumFractionDigits','minimumFractionDigits']]
,['O',['cachedLocaleData','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'format$O$StringBuffer$java_text_FieldPosition',  function (number, toAppendTo, pos) {
if (Clazz.instanceOf(number, "java.lang.Long") || Clazz.instanceOf(number, "java.lang.Integer") || Clazz.instanceOf(number, "java.lang.Short") || Clazz.instanceOf(number, "java.lang.Byte")  ) {
return this.format$J$StringBuffer$java_text_FieldPosition((number).longValue$(), toAppendTo, pos);
} else if (Clazz.instanceOf(number, "java.lang.Number")) {
return this.format$D$StringBuffer$java_text_FieldPosition((number).doubleValue$(), toAppendTo, pos);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot format given Object as a Number"]);
}});

Clazz.newMeth(C$, 'parseObject$S$java_text_ParsePosition',  function (source, pos) {
return this.parse$S$java_text_ParsePosition(source, pos);
});

Clazz.newMeth(C$, 'format$D',  function (number) {
return this.format$D$StringBuffer$java_text_FieldPosition(number, this.秘newStringBuffer$Z(true), $I$(3).INSTANCE).toString();
});

Clazz.newMeth(C$, 'format$J',  function (number) {
return this.format$J$StringBuffer$java_text_FieldPosition(number, this.秘newStringBuffer$Z(false), $I$(3).INSTANCE).toString();
});

Clazz.newMeth(C$, 'parse$S',  function (source) {
var parsePosition=Clazz.new_($I$(4,1).c$$I,[0]);
var result=this.parse$S$java_text_ParsePosition(source, parsePosition);
if (parsePosition.index == 0) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Unparseable number: \"" + source + "\"" , parsePosition.errorIndex]);
}return result;
});

Clazz.newMeth(C$, 'isParseIntegerOnly$',  function () {
return this.parseIntegerOnly;
});

Clazz.newMeth(C$, 'setParseIntegerOnly$Z',  function (value) {
this.parseIntegerOnly=value;
});

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.getInstance$java_util_Locale$I($I$(5).getDefault$(), 0);
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 0);
}, 1);

Clazz.newMeth(C$, 'getNumberInstance$',  function () {
return C$.getInstance$java_util_Locale$I($I$(5).getDefault$(), 0);
}, 1);

Clazz.newMeth(C$, 'getNumberInstance$java_util_Locale',  function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 0);
}, 1);

Clazz.newMeth(C$, 'getIntegerInstance$',  function () {
return C$.getInstance$java_util_Locale$I($I$(5).getDefault$(), 4);
}, 1);

Clazz.newMeth(C$, 'getIntegerInstance$java_util_Locale',  function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 4);
}, 1);

Clazz.newMeth(C$, 'getCurrencyInstance$',  function () {
return C$.getInstance$java_util_Locale$I($I$(5).getDefault$(), 1);
}, 1);

Clazz.newMeth(C$, 'getCurrencyInstance$java_util_Locale',  function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 1);
}, 1);

Clazz.newMeth(C$, 'getPercentInstance$',  function () {
return C$.getInstance$java_util_Locale$I($I$(5).getDefault$(), 2);
}, 1);

Clazz.newMeth(C$, 'getPercentInstance$java_util_Locale',  function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 2);
}, 1);

Clazz.newMeth(C$, 'getScientificInstance$',  function () {
return C$.getInstance$java_util_Locale$I($I$(5).getDefault$(), 3);
}, 1);

Clazz.newMeth(C$, 'getScientificInstance$java_util_Locale',  function (inLocale) {
return C$.getInstance$java_util_Locale$I(inLocale, 3);
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.maximumIntegerDigits * 37 + this.maxFractionDigits;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null ) {
return false;
}if (this === obj ) {
return true;
}if (this.getClass$() !== obj.getClass$() ) {
return false;
}var other=obj;
return (this.maximumIntegerDigits == other.maximumIntegerDigits && this.minimumIntegerDigits == other.minimumIntegerDigits  && this.maximumFractionDigits == other.maximumFractionDigits  && this.minimumFractionDigits == other.minimumFractionDigits  && this.groupingUsed == other.groupingUsed   && this.parseIntegerOnly == other.parseIntegerOnly  );
});

Clazz.newMeth(C$, 'clone$',  function () {
var other=C$.superclazz.prototype.clone$.apply(this, []);
return other;
});

Clazz.newMeth(C$, 'isGroupingUsed$',  function () {
return this.groupingUsed;
});

Clazz.newMeth(C$, 'setGroupingUsed$Z',  function (newValue) {
this.groupingUsed=newValue;
});

Clazz.newMeth(C$, 'getMaximumIntegerDigits$',  function () {
return this.maximumIntegerDigits;
});

Clazz.newMeth(C$, 'setMaximumIntegerDigits$I',  function (newValue) {
this.maximumIntegerDigits=Math.max(0, newValue);
if (this.minimumIntegerDigits > this.maximumIntegerDigits) {
this.minimumIntegerDigits=this.maximumIntegerDigits;
}});

Clazz.newMeth(C$, 'getMinimumIntegerDigits$',  function () {
return this.minimumIntegerDigits;
});

Clazz.newMeth(C$, 'setMinimumIntegerDigits$I',  function (newValue) {
this.minimumIntegerDigits=Math.max(0, newValue);
if (this.minimumIntegerDigits > this.maximumIntegerDigits) {
this.maximumIntegerDigits=this.minimumIntegerDigits;
}});

Clazz.newMeth(C$, 'getMaximumFractionDigits$',  function () {
return this.maximumFractionDigits;
});

Clazz.newMeth(C$, 'setMaximumFractionDigits$I',  function (newValue) {
this.maximumFractionDigits=Math.max(0, newValue);
if (this.maximumFractionDigits < this.minimumFractionDigits) {
this.minimumFractionDigits=this.maximumFractionDigits;
}});

Clazz.newMeth(C$, 'getMinimumFractionDigits$',  function () {
return this.minimumFractionDigits;
});

Clazz.newMeth(C$, 'setMinimumFractionDigits$I',  function (newValue) {
this.minimumFractionDigits=Math.max(0, newValue);
if (this.maximumFractionDigits < this.minimumFractionDigits) {
this.maximumFractionDigits=this.minimumFractionDigits;
}});

Clazz.newMeth(C$, 'getRoundingMode$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setRoundingMode$java_math_RoundingMode',  function (roundingMode) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getInstance$java_util_Locale$I',  function (desiredLocale, choice) {
var numberPatterns=C$.cachedLocaleData.get$O(desiredLocale);
if (numberPatterns == null ) {
var resource=$I$(6).getNumberFormatData$java_util_Locale(desiredLocale);
numberPatterns=resource.getStringArray$S("NumberPatterns");
C$.cachedLocaleData.put$O$O(desiredLocale, numberPatterns);
}var symbols=$I$(7).getInstance$java_util_Locale(desiredLocale);
var entry=(choice == 4) ? 0 : choice;
var format=Clazz.new_($I$(8,1).c$$S$java_text_DecimalFormatSymbols,[numberPatterns[entry], symbols]);
if (choice == 4) {
format.setMaximumFractionDigits$I(0);
format.setDecimalSeparatorAlwaysShown$Z(false);
format.setParseIntegerOnly$Z(true);
} else if (choice == 1) {
format.adjustForCurrencyDefaultFractionDigits$();
}return format;
}, 1);

Clazz.newMeth(C$, '秘newStringBuffer$Z',  function (isDouble) {

var c = (isDouble ? this.format$D$StringBuffer$java_text_FieldPosition.exClazz.__CLASS_NAME__ : this.format$J$StringBuffer$java_text_FieldPosition.exClazz.__CLASS_NAME__);
if (c && c.indexOf("java.text.") == 0)return [""];
return Clazz.new_($I$(9,1));
});

Clazz.newMeth(C$, '秘toArray$StringBuffer',  function (ret) {
return Array.isArray(ret) ? ret :Clazz.array(String, -1, [ret.toString()]);
});

Clazz.newMeth(C$, '秘newSA$',  function () {
return [""] ||null;
});

Clazz.newMeth(C$, '秘toSB$SA$StringBuffer',  function (ret, result) {

if (Array.isArray(result)) return ret;
result.setLength$I(0);
result.append$S(ret[0]);
return result;
});

C$.$static$=function(){C$.$static$=0;
C$.cachedLocaleData=Clazz.new_($I$(2,1).c$$I,[3]);
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.NumberFormat, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.text.Format','.Field']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$instanceMap','java.util.Map','INTEGER','java.text.NumberFormat.Field','+FRACTION','+EXPONENT','+DECIMAL_SEPARATOR','+SIGN','+GROUPING_SEPARATOR','+EXPONENT_SYMBOL','+PERCENT','+PERMILLE','+CURRENCY','+EXPONENT_SIGN']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.$instanceMap.put$O$O(name, this);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$instanceMap=Clazz.new_($I$(1,1).c$$I,[11]);
C$.INTEGER=Clazz.new_(C$.c$$S,["integer"]);
C$.FRACTION=Clazz.new_(C$.c$$S,["fraction"]);
C$.EXPONENT=Clazz.new_(C$.c$$S,["exponent"]);
C$.DECIMAL_SEPARATOR=Clazz.new_(C$.c$$S,["decimal separator"]);
C$.SIGN=Clazz.new_(C$.c$$S,["sign"]);
C$.GROUPING_SEPARATOR=Clazz.new_(C$.c$$S,["grouping separator"]);
C$.EXPONENT_SYMBOL=Clazz.new_(C$.c$$S,["exponent symbol"]);
C$.PERCENT=Clazz.new_(C$.c$$S,["percent"]);
C$.PERMILLE=Clazz.new_(C$.c$$S,["per mille"]);
C$.CURRENCY=Clazz.new_(C$.c$$S,["currency"]);
C$.EXPONENT_SIGN=Clazz.new_(C$.c$$S,["exponent sign"]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

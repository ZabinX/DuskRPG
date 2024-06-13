(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'java.util.Hashtable','java.util.Locale','InternalError','java.util.Arrays','sun.util.resources.LocaleData','sun.util.TimeZoneNameUtility']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DateFormatSymbols", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.eras=null;
this.months=null;
this.shortMonths=null;
this.weekdays=null;
this.shortWeekdays=null;
this.ampms=null;
this.zoneStrings=null;
this.isZoneStringsSet=false;
this.localPatternChars=null;
this.locale=null;
},1);

C$.$fields$=[['Z',['isZoneStringsSet'],'S',['localPatternChars'],'O',['eras','String[]','+months','+shortMonths','+weekdays','+shortWeekdays','+ampms','zoneStrings','String[][]','locale','java.util.Locale']]
,['O',['cachedLocaleData','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.initializeData$java_util_Locale.apply(this, [$I$(2).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (locale) {
;C$.$init$.apply(this);
p$1.initializeData$java_util_Locale.apply(this, [locale]);
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.getInstance$java_util_Locale($I$(2).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (locale) {
return Clazz.new_(C$.c$$java_util_Locale,[locale]);
}, 1);

Clazz.newMeth(C$, 'getEras$',  function () {
return p$1.duplicate$SA.apply(this, [this.eras]);
});

Clazz.newMeth(C$, 'setEras$SA',  function (newEras) {
this.eras=p$1.duplicate$SA.apply(this, [newEras]);
});

Clazz.newMeth(C$, 'getMonths$',  function () {
return p$1.duplicate$SA.apply(this, [this.months]);
});

Clazz.newMeth(C$, 'setMonths$SA',  function (newMonths) {
this.months=p$1.duplicate$SA.apply(this, [newMonths]);
});

Clazz.newMeth(C$, 'getShortMonths$',  function () {
return p$1.duplicate$SA.apply(this, [this.shortMonths]);
});

Clazz.newMeth(C$, 'setShortMonths$SA',  function (newShortMonths) {
this.shortMonths=p$1.duplicate$SA.apply(this, [newShortMonths]);
});

Clazz.newMeth(C$, 'getWeekdays$',  function () {
return p$1.duplicate$SA.apply(this, [this.weekdays]);
});

Clazz.newMeth(C$, 'setWeekdays$SA',  function (newWeekdays) {
this.weekdays=p$1.duplicate$SA.apply(this, [newWeekdays]);
});

Clazz.newMeth(C$, 'getShortWeekdays$',  function () {
return p$1.duplicate$SA.apply(this, [this.shortWeekdays]);
});

Clazz.newMeth(C$, 'setShortWeekdays$SA',  function (newShortWeekdays) {
this.shortWeekdays=p$1.duplicate$SA.apply(this, [newShortWeekdays]);
});

Clazz.newMeth(C$, 'getAmPmStrings$',  function () {
return p$1.duplicate$SA.apply(this, [this.ampms]);
});

Clazz.newMeth(C$, 'setAmPmStrings$SA',  function (newAmpms) {
this.ampms=p$1.duplicate$SA.apply(this, [newAmpms]);
});

Clazz.newMeth(C$, 'getZoneStrings$',  function () {
return p$1.getZoneStringsImpl$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'setZoneStrings$SAA',  function (newZoneStrings) {
var aCopy=Clazz.array(String, [newZoneStrings.length, null]);
for (var i=0; i < newZoneStrings.length; ++i) {
if (newZoneStrings[i].length < 5) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}aCopy[i]=p$1.duplicate$SA.apply(this, [newZoneStrings[i]]);
}
this.zoneStrings=aCopy;
this.isZoneStringsSet=true;
});

Clazz.newMeth(C$, 'getLocalPatternChars$',  function () {
return  String.instantialize(this.localPatternChars);
});

Clazz.newMeth(C$, 'setLocalPatternChars$S',  function (newLocalPatternChars) {
this.localPatternChars= String.instantialize(newLocalPatternChars);
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var other=Clazz.clone(this);
p$1.copyMembers$java_text_DateFormatSymbols$java_text_DateFormatSymbols.apply(this, [this, other]);
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hashcode=0;
return hashcode;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (obj == null  || this.getClass$() !== obj.getClass$()  ) return false;
var that=obj;
return ($I$(4).equals$OA$OA(this.eras, that.eras) && $I$(4).equals$OA$OA(this.months, that.months) && $I$(4).equals$OA$OA(this.shortMonths, that.shortMonths) && $I$(4).equals$OA$OA(this.weekdays, that.weekdays) && $I$(4).equals$OA$OA(this.shortWeekdays, that.shortWeekdays) && $I$(4).equals$OA$OA(this.ampms, that.ampms) && ((this.localPatternChars != null  && this.localPatternChars.equals$O(that.localPatternChars) ) || (this.localPatternChars == null  && that.localPatternChars == null  ) )  );
});

Clazz.newMeth(C$, 'cacheLookup$java_util_Locale',  function (desiredLocale) {
var rb=C$.cachedLocaleData.get$O(desiredLocale);
if (rb == null ) {
rb=$I$(5).getDateFormatData$java_util_Locale(desiredLocale);
C$.cachedLocaleData.put$O$O(desiredLocale, rb);
}return rb;
}, 1);

Clazz.newMeth(C$, 'initializeData$java_util_Locale',  function (desiredLocale) {
var i;
var resource=C$.cacheLookup$java_util_Locale(desiredLocale);
this.eras=resource.getObject$S("Eras");
this.months=resource.getStringArray$S("MonthNames");
this.shortMonths=resource.getStringArray$S("MonthAbbreviations");
var lWeekdays=resource.getStringArray$S("DayNames");
this.weekdays=Clazz.array(String, [8]);
this.weekdays[0]="";
for (i=0; i < lWeekdays.length; i++) this.weekdays[i + 1]=lWeekdays[i];

var sWeekdays=resource.getStringArray$S("DayAbbreviations");
this.shortWeekdays=Clazz.array(String, [8]);
this.shortWeekdays[0]="";
for (i=0; i < sWeekdays.length; i++) this.shortWeekdays[i + 1]=sWeekdays[i];

this.ampms=resource.getStringArray$S("AmPmMarkers");
this.localPatternChars=resource.getString$S("DateTimePatternChars");
this.locale=desiredLocale;
}, p$1);

Clazz.newMeth(C$, 'getZoneIndex$S',  function (ID) {
var zoneStrings=this.getZoneStringsWrapper$();
for (var index=0; index < zoneStrings.length; index++) {
if (ID.equalsIgnoreCase$S(zoneStrings[index][0])) return index;
}
return -1;
});

Clazz.newMeth(C$, 'getZoneStringsWrapper$',  function () {
if (p$1.isSubclassObject.apply(this, [])) {
return this.getZoneStrings$();
} else {
return p$1.getZoneStringsImpl$Z.apply(this, [false]);
}});

Clazz.newMeth(C$, 'getZoneStringsImpl$Z',  function (needsCopy) {
if (this.zoneStrings == null ) {
this.zoneStrings=$I$(6).getZoneStrings$java_util_Locale(this.locale);
}if (needsCopy) {
var aCopy=Clazz.array(String, [this.zoneStrings.length, null]);
for (var i=0; i < this.zoneStrings.length; ++i) {
aCopy[i]=p$1.duplicate$SA.apply(this, [this.zoneStrings[i]]);
}
return aCopy;
} else {
return this.zoneStrings;
}}, p$1);

Clazz.newMeth(C$, 'isSubclassObject',  function () {
return !this.getClass$().getName$().equals$O("java.text.DateFormatSymbols");
}, p$1);

Clazz.newMeth(C$, 'duplicate$SA',  function (srcArray) {
var dstArray=Clazz.array(String, [srcArray.length]);
System.arraycopy$O$I$O$I$I(srcArray, 0, dstArray, 0, srcArray.length);
return dstArray;
}, p$1);

Clazz.newMeth(C$, 'copyMembers$java_text_DateFormatSymbols$java_text_DateFormatSymbols',  function (src, dst) {
dst.eras=p$1.duplicate$SA.apply(this, [src.eras]);
dst.months=p$1.duplicate$SA.apply(this, [src.months]);
dst.shortMonths=p$1.duplicate$SA.apply(this, [src.shortMonths]);
dst.weekdays=p$1.duplicate$SA.apply(this, [src.weekdays]);
dst.shortWeekdays=p$1.duplicate$SA.apply(this, [src.shortWeekdays]);
dst.ampms=p$1.duplicate$SA.apply(this, [src.ampms]);
if (src.zoneStrings != null ) {
if (dst.zoneStrings == null ) {
dst.zoneStrings=Clazz.array(String, [src.zoneStrings.length, null]);
}for (var i=0; i < dst.zoneStrings.length; ++i) {
dst.zoneStrings[i]=p$1.duplicate$SA.apply(this, [src.zoneStrings[i]]);
}
} else {
dst.zoneStrings=null;
}dst.localPatternChars= String.instantialize(src.localPatternChars);
}, p$1);

Clazz.newMeth(C$, 'equals$SA$SA',  function (current, other) {
var count=current.length;
for (var i=0; i < count; ++i) if (!current[i].equals$O(other[i])) return false;

return true;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.cachedLocaleData=Clazz.new_($I$(1,1).c$$I,[3]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

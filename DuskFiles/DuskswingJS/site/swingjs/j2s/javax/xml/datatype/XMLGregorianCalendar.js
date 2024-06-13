(function(){var P$=Clazz.newPackage("javax.xml.datatype"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "XMLGregorianCalendar", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setTime$I$I$I',  function (hour, minute, second) {
this.setTime$I$I$I$java_math_BigDecimal(hour, minute, second, null);
});

Clazz.newMeth(C$, 'setTime$I$I$I$java_math_BigDecimal',  function (hour, minute, second, fractional) {
this.setHour$I(hour);
this.setMinute$I(minute);
this.setSecond$I(second);
this.setFractionalSecond$java_math_BigDecimal(fractional);
});

Clazz.newMeth(C$, 'setTime$I$I$I$I',  function (hour, minute, second, millisecond) {
this.setHour$I(hour);
this.setMinute$I(minute);
this.setSecond$I(second);
this.setMillisecond$I(millisecond);
});

Clazz.newMeth(C$, 'getMillisecond$',  function () {
var fractionalSeconds=this.getFractionalSecond$();
if (fractionalSeconds == null ) {
return -2147483648;
}return this.getFractionalSecond$().movePointRight$I(3).intValue$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || !(Clazz.instanceOf(obj, "javax.xml.datatype.XMLGregorianCalendar")) ) {
return false;
}return this.compare$javax_xml_datatype_XMLGregorianCalendar(obj) == 0;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var timezone=this.getTimezone$();
if (timezone == -2147483648) {
timezone=0;
}var gc=this;
if (timezone != 0) {
gc=this.normalize$();
}return gc.getYear$() + gc.getMonth$() + gc.getDay$() + gc.getHour$() + gc.getMinute$() + gc.getSecond$() ;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.toXMLFormat$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

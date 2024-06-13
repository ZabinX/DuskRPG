(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'java.text.DateFormat','java.util.Calendar',['java.text.DateFormat','.Field']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DateFormatter", null, 'javax.swing.text.InternationalFormatter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_text_DateFormat.apply(this, [$I$(1).getDateInstance$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_DateFormat',  function (format) {
;C$.superclazz.c$$java_text_Format.apply(this,[format]);C$.$init$.apply(this);
this.setFormat$java_text_DateFormat(format);
}, 1);

Clazz.newMeth(C$, 'setFormat$java_text_DateFormat',  function (format) {
C$.superclazz.prototype.setFormat$java_text_Format.apply(this, [format]);
});

Clazz.newMeth(C$, 'getCalendar',  function () {
var f=this.getFormat$();
if (Clazz.instanceOf(f, "java.text.DateFormat")) {
return (f).getCalendar$();
}return $I$(2).getInstance$();
}, p$1);

Clazz.newMeth(C$, 'getSupportsIncrement$',  function () {
return true;
});

Clazz.newMeth(C$, 'getAdjustField$I$java_util_Map',  function (start, attributes) {
var attrs=attributes.keySet$().iterator$();
while (attrs.hasNext$()){
var key=attrs.next$();
if ((Clazz.instanceOf(key, "java.text.DateFormat.Field")) && (key === $I$(3).HOUR1  || (key).getCalendarField$() != -1 ) ) {
return key;
}}
return null;
});

Clazz.newMeth(C$, 'adjustValue$O$java_util_Map$O$I',  function (value, attributes, key, direction) {
if (key != null ) {
var field;
if (key === $I$(3).HOUR1 ) {
key=$I$(3).HOUR0;
}field=(key).getCalendarField$();
var calendar=p$1.getCalendar.apply(this, []);
if (calendar != null ) {
calendar.setTime$java_util_Date(value);
var fieldValue=calendar.get$I(field);
try {
calendar.add$I$I(field, direction);
value=calendar.getTime$();
} catch (th) {
value=null;
}
return value;
}}return null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

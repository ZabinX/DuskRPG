(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[[0,'java.text.MessageFormat']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Formatter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getHead$java_util_logging_Handler',  function (h) {
return "";
});

Clazz.newMeth(C$, 'getTail$java_util_logging_Handler',  function (h) {
return "";
});

Clazz.newMeth(C$, 'formatMessage$java_util_logging_LogRecord',  function (record) {
var format=record.getMessage$();
var catalog=record.getResourceBundle$();
if (catalog != null ) {
try {
format=catalog.getString$S(record.getMessage$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.util.MissingResourceException")){
format=record.getMessage$();
} else {
throw ex;
}
}
}try {
var parameters=record.getParameters$();
if (parameters == null  || parameters.length == 0 ) {
return format;
}if (format.indexOf$S("{0") >= 0 || format.indexOf$S("{1") >= 0  || format.indexOf$S("{2") >= 0  || format.indexOf$S("{3") >= 0 ) {
return $I$(1).format$S$OA(format, parameters);
}return format;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return format;
} else {
throw ex;
}
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[[0,'sun.util.logging.LoggingSupport','java.io.StringWriter','java.io.PrintWriter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimpleFormatter", null, 'java.util.logging.Formatter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dat=Clazz.new_(java.util.Date);
},1);

C$.$fields$=[['O',['dat','java.util.Date']]
,['S',['format']]]

Clazz.newMeth(C$, 'format$java_util_logging_LogRecord',  function (record) {
this.dat.setTime$J(record.getMillis$());
var source;
if (record.getSourceClassName$() != null ) {
source=record.getSourceClassName$();
if (record.getSourceMethodName$() != null ) {
source+=" " + record.getSourceMethodName$();
}} else {
source=record.getLoggerName$();
}var message=this.formatMessage$java_util_logging_LogRecord(record);
var throwable="";
if (record.getThrown$() != null ) {
var sw=Clazz.new_($I$(2,1));
var pw=Clazz.new_($I$(3,1).c$$java_io_Writer,[sw]);
pw.println$();
record.getThrown$().printStackTrace$java_io_PrintWriter(pw);
pw.close$();
throwable=sw.toString();
}return String.format$S$OA(C$.format, Clazz.array(java.lang.Object, -1, [this.dat, source, record.getLoggerName$(), record.getLevel$().getLocalizedLevelName$(), message, throwable]));
});

C$.$static$=function(){C$.$static$=0;
C$.format=$I$(1).getSimpleFormat$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

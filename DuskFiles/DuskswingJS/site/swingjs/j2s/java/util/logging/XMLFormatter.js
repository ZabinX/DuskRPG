(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.logging.LogManager','java.util.GregorianCalendar','StringBuilder','java.nio.charset.Charset']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLFormatter", null, 'java.util.logging.Formatter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.manager=$I$(1).getLogManager$();
},1);

C$.$fields$=[['O',['manager','java.util.logging.LogManager']]]

Clazz.newMeth(C$, 'a2$StringBuilder$I',  function (sb, x) {
if (x < 10) {
sb.append$C("0");
}sb.append$I(x);
}, p$1);

Clazz.newMeth(C$, 'appendISO8601$StringBuilder$J',  function (sb, millis) {
var cal=Clazz.new_($I$(2,1));
cal.setTimeInMillis$J(millis);
sb.append$I(cal.get$I(1));
sb.append$C("-");
p$1.a2$StringBuilder$I.apply(this, [sb, cal.get$I(2) + 1]);
sb.append$C("-");
p$1.a2$StringBuilder$I.apply(this, [sb, cal.get$I(5)]);
sb.append$C("T");
p$1.a2$StringBuilder$I.apply(this, [sb, cal.get$I(11)]);
sb.append$C(":");
p$1.a2$StringBuilder$I.apply(this, [sb, cal.get$I(12)]);
sb.append$C(":");
p$1.a2$StringBuilder$I.apply(this, [sb, cal.get$I(13)]);
}, p$1);

Clazz.newMeth(C$, 'escape$StringBuilder$S',  function (sb, text) {
if (text == null ) {
text="<null>";
}for (var i=0; i < text.length$(); i++) {
var ch=text.charAt$I(i);
if (ch == "<") {
sb.append$S("&lt;");
} else if (ch == ">") {
sb.append$S("&gt;");
} else if (ch == "&") {
sb.append$S("&amp;");
} else {
sb.append$C(ch);
}}
}, p$1);

Clazz.newMeth(C$, 'format$java_util_logging_LogRecord',  function (record) {
var sb=Clazz.new_($I$(3,1).c$$I,[500]);
sb.append$S("<record>\n");
sb.append$S("  <date>");
p$1.appendISO8601$StringBuilder$J.apply(this, [sb, record.getMillis$()]);
sb.append$S("</date>\n");
sb.append$S("  <millis>");
sb.append$J(record.getMillis$());
sb.append$S("</millis>\n");
sb.append$S("  <sequence>");
sb.append$J(record.getSequenceNumber$());
sb.append$S("</sequence>\n");
var name=record.getLoggerName$();
if (name != null ) {
sb.append$S("  <logger>");
p$1.escape$StringBuilder$S.apply(this, [sb, name]);
sb.append$S("</logger>\n");
}sb.append$S("  <level>");
p$1.escape$StringBuilder$S.apply(this, [sb, record.getLevel$().toString()]);
sb.append$S("</level>\n");
if (record.getSourceClassName$() != null ) {
sb.append$S("  <class>");
p$1.escape$StringBuilder$S.apply(this, [sb, record.getSourceClassName$()]);
sb.append$S("</class>\n");
}if (record.getSourceMethodName$() != null ) {
sb.append$S("  <method>");
p$1.escape$StringBuilder$S.apply(this, [sb, record.getSourceMethodName$()]);
sb.append$S("</method>\n");
}sb.append$S("  <thread>");
sb.append$I(record.getThreadID$());
sb.append$S("</thread>\n");
if (record.getMessage$() != null ) {
var message=this.formatMessage$java_util_logging_LogRecord(record);
sb.append$S("  <message>");
p$1.escape$StringBuilder$S.apply(this, [sb, message]);
sb.append$S("</message>");
sb.append$S("\n");
}var bundle=record.getResourceBundle$();
try {
if (bundle != null  && bundle.getString$S(record.getMessage$()) != null  ) {
sb.append$S("  <key>");
p$1.escape$StringBuilder$S.apply(this, [sb, record.getMessage$()]);
sb.append$S("</key>\n");
sb.append$S("  <catalog>");
p$1.escape$StringBuilder$S.apply(this, [sb, record.getResourceBundleName$()]);
sb.append$S("</catalog>\n");
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var parameters=record.getParameters$();
if (parameters != null  && parameters.length != 0  && record.getMessage$().indexOf$S("{") == -1 ) {
for (var i=0; i < parameters.length; i++) {
sb.append$S("  <param>");
try {
p$1.escape$StringBuilder$S.apply(this, [sb, parameters[i].toString()]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
sb.append$S("???");
} else {
throw ex;
}
}
sb.append$S("</param>\n");
}
}if (record.getThrown$() != null ) {
var th=record.getThrown$();
sb.append$S("  <exception>\n");
sb.append$S("    <message>");
p$1.escape$StringBuilder$S.apply(this, [sb, th.toString()]);
sb.append$S("</message>\n");
var trace=th.getStackTrace$();
for (var i=0; i < trace.length; i++) {
var frame=trace[i];
sb.append$S("    <frame>\n");
sb.append$S("      <class>");
p$1.escape$StringBuilder$S.apply(this, [sb, frame.getClassName$()]);
sb.append$S("</class>\n");
sb.append$S("      <method>");
p$1.escape$StringBuilder$S.apply(this, [sb, frame.getMethodName$()]);
sb.append$S("</method>\n");
if (frame.getLineNumber$() >= 0) {
sb.append$S("      <line>");
sb.append$I(frame.getLineNumber$());
sb.append$S("</line>\n");
}sb.append$S("    </frame>\n");
}
sb.append$S("  </exception>\n");
}sb.append$S("</record>\n");
return sb.toString();
});

Clazz.newMeth(C$, 'getHead$java_util_logging_Handler',  function (h) {
var sb=Clazz.new_($I$(3,1));
var encoding;
sb.append$S("<?xml version=\"1.0\"");
if (h != null ) {
encoding=h.getEncoding$();
} else {
encoding=null;
}if (encoding == null ) {
encoding=$I$(4).defaultCharset$().name$();
}try {
var cs=$I$(4).forName$S(encoding);
encoding=cs.name$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
sb.append$S(" encoding=\"");
sb.append$S(encoding);
sb.append$S("\"");
sb.append$S(" standalone=\"no\"?>\n");
sb.append$S("<!DOCTYPE log SYSTEM \"logger.dtd\">\n");
sb.append$S("<log>\n");
return sb.toString();
});

Clazz.newMeth(C$, 'getTail$java_util_logging_Handler',  function (h) {
return "</log>\n";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

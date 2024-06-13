(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.logging.LogManager','java.util.logging.Level','java.util.logging.SimpleFormatter','java.io.OutputStreamWriter','Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StreamHandler", null, 'java.util.logging.Handler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['doneHeader'],'O',['output','java.io.OutputStream','writer','java.io.Writer']]]

Clazz.newMeth(C$, 'configure',  function () {
var manager=$I$(1).getLogManager$();
var cname=this.getClass$().getName$();
this.setLevel$java_util_logging_Level(manager.getLevelProperty$S$java_util_logging_Level(cname + ".level", $I$(2).INFO));
this.setFilter$java_util_logging_Filter(manager.getFilterProperty$S$java_util_logging_Filter(cname + ".filter", null));
this.setFormatter$java_util_logging_Formatter(manager.getFormatterProperty$S$java_util_logging_Formatter(cname + ".formatter", Clazz.new_($I$(3,1))));
try {
this.setEncoding$S(manager.getStringProperty$S$S(cname + ".encoding", null));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
try {
this.setEncoding$S(null);
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"Exception")){
} else {
throw ex2;
}
}
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.sealed=false;
p$1.configure.apply(this, []);
this.sealed=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_util_logging_Formatter',  function (out, formatter) {
Clazz.super_(C$, this);
this.sealed=false;
p$1.configure.apply(this, []);
this.setFormatter$java_util_logging_Formatter(formatter);
this.setOutputStream$java_io_OutputStream(out);
this.sealed=true;
}, 1);

Clazz.newMeth(C$, 'setOutputStream$java_io_OutputStream',  function (out) {
if (out == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}p$1.flushAndClose.apply(this, []);
this.output=out;
this.doneHeader=false;
var encoding=this.getEncoding$();
if (encoding == null ) {
this.writer=Clazz.new_($I$(4,1).c$$java_io_OutputStream,[this.output]);
} else {
try {
this.writer=Clazz.new_($I$(4,1).c$$java_io_OutputStream$S,[this.output, encoding]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.UnsupportedEncodingException")){
throw Clazz.new_($I$(5,1).c$$S,["Unexpected exception " + ex]);
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'setEncoding$S',  function (encoding) {
C$.superclazz.prototype.setEncoding$S.apply(this, [encoding]);
if (this.output == null ) {
return;
}this.flush$();
if (encoding == null ) {
this.writer=Clazz.new_($I$(4,1).c$$java_io_OutputStream,[this.output]);
} else {
this.writer=Clazz.new_($I$(4,1).c$$java_io_OutputStream$S,[this.output, encoding]);
}});

Clazz.newMeth(C$, 'publish$java_util_logging_LogRecord',  function (record) {
if (!this.isLoggable$java_util_logging_LogRecord(record)) {
return;
}var msg;
try {
msg=this.getFormatter$().format$java_util_logging_LogRecord(record);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.reportError$S$Exception$I(null, ex, 5);
return;
} else {
throw ex;
}
}
try {
if (!this.doneHeader) {
this.writer.write$S(this.getFormatter$().getHead$java_util_logging_Handler(this));
this.doneHeader=true;
}this.writer.write$S(msg);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.reportError$S$Exception$I(null, ex, 1);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'isLoggable$java_util_logging_LogRecord',  function (record) {
if (this.writer == null  || record == null  ) {
return false;
}return C$.superclazz.prototype.isLoggable$java_util_logging_LogRecord.apply(this, [record]);
});

Clazz.newMeth(C$, 'flush$',  function () {
if (this.writer != null ) {
try {
this.writer.flush$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.reportError$S$Exception$I(null, ex, 2);
} else {
throw ex;
}
}
}});

Clazz.newMeth(C$, 'flushAndClose',  function () {
this.checkPermission$();
if (this.writer != null ) {
try {
if (!this.doneHeader) {
this.writer.write$S(this.getFormatter$().getHead$java_util_logging_Handler(this));
this.doneHeader=true;
}this.writer.write$S(this.getFormatter$().getTail$java_util_logging_Handler(this));
this.writer.flush$();
this.writer.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.reportError$S$Exception$I(null, ex, 3);
} else {
throw ex;
}
}
this.writer=null;
this.output=null;
}}, p$1);

Clazz.newMeth(C$, 'close$',  function () {
p$1.flushAndClose.apply(this, []);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

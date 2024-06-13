(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.logging.LogManager','java.util.logging.Level','java.util.logging.SimpleFormatter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConsoleHandler", null, 'java.util.logging.StreamHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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
this.setOutputStream$java_io_OutputStream(System.err);
this.sealed=true;
}, 1);

Clazz.newMeth(C$, 'publish$java_util_logging_LogRecord',  function (record) {
C$.superclazz.prototype.publish$java_util_logging_LogRecord.apply(this, [record]);
this.flush$();
});

Clazz.newMeth(C$, 'close$',  function () {
this.flush$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.util.logging"),p$1={},I$=[[0,'java.util.logging.LogManager','java.util.logging.Level','java.util.logging.XMLFormatter','java.net.Socket','java.io.BufferedOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SocketHandler", null, 'java.util.logging.StreamHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['port'],'S',['host'],'O',['sock','java.net.Socket']]]

Clazz.newMeth(C$, 'configure',  function () {
var manager=$I$(1).getLogManager$();
var cname=this.getClass$().getName$();
this.setLevel$java_util_logging_Level(manager.getLevelProperty$S$java_util_logging_Level(cname + ".level", $I$(2).ALL));
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
this.port=manager.getIntProperty$S$I(cname + ".port", 0);
this.host=manager.getStringProperty$S$S(cname + ".host", null);
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.sealed=false;
p$1.configure.apply(this, []);
try {
p$1.connect.apply(this, []);
} catch (ix) {
if (Clazz.exceptionOf(ix,"java.io.IOException")){
System.err.println$S("SocketHandler: connect failed to " + this.host + ":" + this.port );
throw ix;
} else {
throw ix;
}
}
this.sealed=true;
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (host, port) {
Clazz.super_(C$, this);
this.sealed=false;
p$1.configure.apply(this, []);
this.sealed=true;
this.port=port;
this.host=host;
p$1.connect.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'connect',  function () {
if (this.port == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad port: " + this.port]);
}if (this.host == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null host name: " + this.host]);
}this.sock=Clazz.new_($I$(4,1).c$$S$I,[this.host, this.port]);
var out=this.sock.getOutputStream$();
var bout=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[out]);
this.setOutputStream$java_io_OutputStream(bout);
}, p$1);

Clazz.newMeth(C$, 'close$',  function () {
C$.superclazz.prototype.close$.apply(this, []);
if (this.sock != null ) {
try {
this.sock.close$();
} catch (ix) {
if (Clazz.exceptionOf(ix,"java.io.IOException")){
} else {
throw ix;
}
}
}this.sock=null;
});

Clazz.newMeth(C$, 'publish$java_util_logging_LogRecord',  function (record) {
if (!this.isLoggable$java_util_logging_LogRecord(record)) {
return;
}C$.superclazz.prototype.publish$java_util_logging_LogRecord.apply(this, [record]);
this.flush$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

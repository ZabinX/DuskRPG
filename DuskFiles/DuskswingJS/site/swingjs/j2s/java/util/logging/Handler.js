(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[[0,'java.util.logging.Level','java.util.logging.LogManager','java.util.logging.ErrorManager','java.nio.charset.Charset']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Handler");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.manager=$I$(2).getLogManager$();
this.logLevel=$I$(1).ALL;
this.errorManager=Clazz.new_($I$(3,1));
this.sealed=true;
},1);

C$.$fields$=[['Z',['sealed'],'S',['encoding'],'O',['manager','java.util.logging.LogManager','filter','java.util.logging.Filter','formatter','java.util.logging.Formatter','logLevel','java.util.logging.Level','errorManager','java.util.logging.ErrorManager']]
,['I',['offValue']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setFormatter$java_util_logging_Formatter',  function (newFormatter) {
this.checkPermission$();
newFormatter.getClass$();
this.formatter=newFormatter;
});

Clazz.newMeth(C$, 'getFormatter$',  function () {
return this.formatter;
});

Clazz.newMeth(C$, 'setEncoding$S',  function (encoding) {
this.checkPermission$();
if (encoding != null ) {
try {
if (!$I$(4).isSupported$S(encoding)) {
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[encoding]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.charset.IllegalCharsetNameException")){
throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException').c$$S,[encoding]);
} else {
throw e;
}
}
}this.encoding=encoding;
});

Clazz.newMeth(C$, 'getEncoding$',  function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setFilter$java_util_logging_Filter',  function (newFilter) {
this.checkPermission$();
this.filter=newFilter;
});

Clazz.newMeth(C$, 'getFilter$',  function () {
return this.filter;
});

Clazz.newMeth(C$, 'setErrorManager$java_util_logging_ErrorManager',  function (em) {
this.checkPermission$();
if (em == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.errorManager=em;
});

Clazz.newMeth(C$, 'getErrorManager$',  function () {
this.checkPermission$();
return this.errorManager;
});

Clazz.newMeth(C$, 'reportError$S$Exception$I',  function (msg, ex, code) {
try {
this.errorManager.error$S$Exception$I(msg, ex, code);
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"Exception")){
System.err.println$S("Handler.reportError caught:");
ex2.printStackTrace$();
} else {
throw ex2;
}
}
});

Clazz.newMeth(C$, 'setLevel$java_util_logging_Level',  function (newLevel) {
if (newLevel == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.checkPermission$();
this.logLevel=newLevel;
});

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.logLevel;
});

Clazz.newMeth(C$, 'isLoggable$java_util_logging_LogRecord',  function (record) {
var levelValue=this.getLevel$().intValue$();
if (record.getLevel$().intValue$() < levelValue || levelValue == C$.offValue ) {
return false;
}var filter=this.getFilter$();
if (filter == null ) {
return true;
}return filter.isLoggable$java_util_logging_LogRecord(record);
});

Clazz.newMeth(C$, 'checkPermission$',  function () {
if (this.sealed) {
this.manager.checkPermission$();
}});

C$.$static$=function(){C$.$static$=0;
C$.offValue=$I$(1).OFF.intValue$();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

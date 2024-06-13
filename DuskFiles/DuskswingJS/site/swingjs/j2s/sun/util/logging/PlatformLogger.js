(function(){var P$=Clazz.newPackage("sun.util.logging"),p$1={},p$2={},I$=[[0,'java.util.Arrays','sun.util.logging.LoggingSupport',['sun.util.logging.PlatformLogger','.Level'],'sun.util.logging.PlatformLogger','java.text.MessageFormat','java.io.StringWriter','java.io.PrintWriter','sun.misc.SharedSecrets','java.util.HashMap',['sun.util.logging.PlatformLogger','.DefaultLoggerProxy'],['sun.util.logging.PlatformLogger','.JavaLoggerProxy']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlatformLogger", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Level',25],['LoggerProxy',1034],['DefaultLoggerProxy',26],['JavaLoggerProxy',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['loggerProxy','sun.util.logging.PlatformLogger.LoggerProxy','javaLoggerProxy','sun.util.logging.PlatformLogger.JavaLoggerProxy']]
,['Z',['loggingEnabled'],'O',['DEFAULT_LEVEL','sun.util.logging.PlatformLogger.Level','loggers','java.util.Map']]]

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
var log=null;
var ref=C$.loggers.get$O(name);
if (ref != null ) {
log=ref;
}if (log == null ) {
log=Clazz.new_(C$.c$$S,[name]);
C$.loggers.put$O$O(name, log);
}return log;
}, 1);

Clazz.newMeth(C$, 'redirectPlatformLoggers$',  function () {
if (C$.loggingEnabled || !$I$(2).isAvailable$() ) return;
C$.loggingEnabled=true;
for (var entry, $entry = C$.loggers.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var ref=entry.getValue$();
var plog=ref;
if (plog != null ) {
p$2.redirectToJavaLoggerProxy.apply(plog, []);
}}
}, 1);

Clazz.newMeth(C$, 'redirectToJavaLoggerProxy',  function () {
var lp=Clazz.getClass($I$(10)).cast$O(this.loggerProxy);
var jlp=Clazz.new_($I$(11,1).c$$S$sun_util_logging_PlatformLogger_Level,[lp.name, lp.level]);
this.javaLoggerProxy=jlp;
this.loggerProxy=jlp;
}, p$2);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
if (C$.loggingEnabled) {
this.loggerProxy=this.javaLoggerProxy=Clazz.new_($I$(11,1).c$$S,[name]);
} else {
this.loggerProxy=Clazz.new_($I$(10,1).c$$S,[name]);
}}, 1);

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.loggerProxy.isEnabled$();
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.loggerProxy.name;
});

Clazz.newMeth(C$, 'isLoggable$sun_util_logging_PlatformLogger_Level',  function (level) {
if (level == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var jlp=this.javaLoggerProxy;
return jlp != null  ? jlp.isLoggable$sun_util_logging_PlatformLogger_Level(level) : this.loggerProxy.isLoggable$sun_util_logging_PlatformLogger_Level(level);
});

Clazz.newMeth(C$, 'level$',  function () {
return this.loggerProxy.getLevel$();
});

Clazz.newMeth(C$, 'setLevel$sun_util_logging_PlatformLogger_Level',  function (newLevel) {
this.loggerProxy.setLevel$sun_util_logging_PlatformLogger_Level(newLevel);
});

Clazz.newMeth(C$, 'severe$S',  function (msg) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S($I$(3).SEVERE, msg);
});

Clazz.newMeth(C$, 'severe$S$Throwable',  function (msg, t) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$Throwable($I$(3).SEVERE, msg, t);
});

Clazz.newMeth(C$, 'severe$S$OA',  function (msg, params) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$OA($I$(3).SEVERE, msg, params);
});

Clazz.newMeth(C$, 'warning$S',  function (msg) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S($I$(3).WARNING, msg);
});

Clazz.newMeth(C$, 'warning$S$Throwable',  function (msg, t) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$Throwable($I$(3).WARNING, msg, t);
});

Clazz.newMeth(C$, 'warning$S$OA',  function (msg, params) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$OA($I$(3).WARNING, msg, params);
});

Clazz.newMeth(C$, 'info$S',  function (msg) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S($I$(3).INFO, msg);
});

Clazz.newMeth(C$, 'info$S$Throwable',  function (msg, t) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$Throwable($I$(3).INFO, msg, t);
});

Clazz.newMeth(C$, 'info$S$OA',  function (msg, params) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$OA($I$(3).INFO, msg, params);
});

Clazz.newMeth(C$, 'config$S',  function (msg) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S($I$(3).CONFIG, msg);
});

Clazz.newMeth(C$, 'config$S$Throwable',  function (msg, t) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$Throwable($I$(3).CONFIG, msg, t);
});

Clazz.newMeth(C$, 'config$S$OA',  function (msg, params) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$OA($I$(3).CONFIG, msg, params);
});

Clazz.newMeth(C$, 'fine$S',  function (msg) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S($I$(3).FINE, msg);
});

Clazz.newMeth(C$, 'fine$S$Throwable',  function (msg, t) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$Throwable($I$(3).FINE, msg, t);
});

Clazz.newMeth(C$, 'fine$S$OA',  function (msg, params) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$OA($I$(3).FINE, msg, params);
});

Clazz.newMeth(C$, 'finer$S',  function (msg) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S($I$(3).FINER, msg);
});

Clazz.newMeth(C$, 'finer$S$Throwable',  function (msg, t) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$Throwable($I$(3).FINER, msg, t);
});

Clazz.newMeth(C$, 'finer$S$OA',  function (msg, params) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$OA($I$(3).FINER, msg, params);
});

Clazz.newMeth(C$, 'finest$S',  function (msg) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S($I$(3).FINEST, msg);
});

Clazz.newMeth(C$, 'finest$S$Throwable',  function (msg, t) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$Throwable($I$(3).FINEST, msg, t);
});

Clazz.newMeth(C$, 'finest$S$OA',  function (msg, params) {
this.loggerProxy.doLog$sun_util_logging_PlatformLogger_Level$S$OA($I$(3).FINEST, msg, params);
});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_LEVEL=$I$(3).INFO;
C$.loggingEnabled=true;
C$.loggers=Clazz.new_($I$(9,1));
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.PlatformLogger, "Level", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['javaLevel','java.lang.Object']]
,['O',['LEVEL_VALUES','int[]']]]

Clazz.newMeth(C$, 'intValue$',  function () {
return C$.LEVEL_VALUES[this.ordinal$()];
});

Clazz.newMeth(C$, 'valueOf$I',  function (level) {
switch (level) {
case 300:
return C$.FINEST;
case 500:
return C$.FINE;
case 400:
return C$.FINER;
case 800:
return C$.INFO;
case 900:
return C$.WARNING;
case 700:
return C$.CONFIG;
case 1000:
return C$.SEVERE;
case 2147483647:
return C$.OFF;
case -2147483648:
return C$.ALL;
}
var i=$I$(1).binarySearch$IA$I$I$I(C$.LEVEL_VALUES, 0, C$.LEVEL_VALUES.length - 2, level);
return C$.values$()[i >= 0 ? i : (-i - 1)];
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ALL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FINEST", 1, []);
Clazz.newEnumConst($vals, C$.c$, "FINER", 2, []);
Clazz.newEnumConst($vals, C$.c$, "FINE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "CONFIG", 4, []);
Clazz.newEnumConst($vals, C$.c$, "INFO", 5, []);
Clazz.newEnumConst($vals, C$.c$, "WARNING", 6, []);
Clazz.newEnumConst($vals, C$.c$, "SEVERE", 7, []);
Clazz.newEnumConst($vals, C$.c$, "OFF", 8, []);
C$.LEVEL_VALUES=Clazz.array(Integer.TYPE, -1, [-2147483648, 300, 400, 500, 700, 800, 900, 1000, 2147483647]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PlatformLogger, "LoggerProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PlatformLogger, "DefaultLoggerProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.util.logging.PlatformLogger','.LoggerProxy']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.date=Clazz.new_(java.util.Date);
},1);

C$.$fields$=[['O',['effectiveLevel','sun.util.logging.PlatformLogger.Level','+level','date','java.util.Date']]
,['S',['formatString']]]

Clazz.newMeth(C$, 'outputStream$',  function () {
return System.err;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.effectiveLevel=p$1.deriveEffectiveLevel$sun_util_logging_PlatformLogger_Level.apply(this, [null]);
this.level=null;
}, 1);

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.effectiveLevel !== $I$(3).OFF ;
});

Clazz.newMeth(C$, 'getLevel$',  function () {
return this.level;
});

Clazz.newMeth(C$, 'setLevel$sun_util_logging_PlatformLogger_Level',  function (newLevel) {
var oldLevel=this.level;
if (oldLevel !== newLevel ) {
this.level=newLevel;
this.effectiveLevel=p$1.deriveEffectiveLevel$sun_util_logging_PlatformLogger_Level.apply(this, [newLevel]);
}});

Clazz.newMeth(C$, 'doLog$sun_util_logging_PlatformLogger_Level$S',  function (level, msg) {
if (this.isLoggable$sun_util_logging_PlatformLogger_Level(level)) {
C$.outputStream$().print$S(p$1.format$sun_util_logging_PlatformLogger_Level$S$Throwable.apply(this, [level, msg, null]));
}});

Clazz.newMeth(C$, 'doLog$sun_util_logging_PlatformLogger_Level$S$Throwable',  function (level, msg, thrown) {
if (this.isLoggable$sun_util_logging_PlatformLogger_Level(level)) {
C$.outputStream$().print$S(p$1.format$sun_util_logging_PlatformLogger_Level$S$Throwable.apply(this, [level, msg, thrown]));
}});

Clazz.newMeth(C$, 'doLog$sun_util_logging_PlatformLogger_Level$S$OA',  function (level, msg, params) {
if (this.isLoggable$sun_util_logging_PlatformLogger_Level(level)) {
var newMsg=p$1.formatMessage$S$OA.apply(this, [msg, params]);
C$.outputStream$().print$S(p$1.format$sun_util_logging_PlatformLogger_Level$S$Throwable.apply(this, [level, newMsg, null]));
}});

Clazz.newMeth(C$, 'isLoggable$sun_util_logging_PlatformLogger_Level',  function (level) {
var effectiveLevel=this.effectiveLevel;
return level.intValue$() >= effectiveLevel.intValue$() && effectiveLevel !== $I$(3).OFF  ;
});

Clazz.newMeth(C$, 'deriveEffectiveLevel$sun_util_logging_PlatformLogger_Level',  function (level) {
return level == null  ? $I$(4).DEFAULT_LEVEL : level;
}, p$1);

Clazz.newMeth(C$, 'formatMessage$S$OA',  function (format, parameters) {
try {
if (parameters == null  || parameters.length == 0 ) {
return format;
}if (format.indexOf$S("{0") >= 0 || format.indexOf$S("{1") >= 0  || format.indexOf$S("{2") >= 0  || format.indexOf$S("{3") >= 0 ) {
return $I$(5).format$S$OA(format, parameters);
}return format;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
return format;
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'format$sun_util_logging_PlatformLogger_Level$S$Throwable',  function (level, msg, thrown) {
this.date.setTime$J(System.currentTimeMillis$());
var throwable="";
if (thrown != null ) {
var sw=Clazz.new_($I$(6,1));
var pw=Clazz.new_($I$(7,1).c$$java_io_Writer,[sw]);
pw.println$();
thrown.printStackTrace$java_io_PrintWriter(pw);
pw.close$();
throwable=sw.toString();
}return String.format$S$OA(C$.formatString, Clazz.array(java.lang.Object, -1, [this.date, p$1.getCallerInfo.apply(this, []), this.name, level.name$(), msg, throwable]));
}, p$1);

Clazz.newMeth(C$, 'getCallerInfo',  function () {
var sourceClassName=null;
var sourceMethodName=null;
var access=$I$(8).getJavaLangAccess$();
var throwable=Clazz.new_(Throwable);
var depth=access.getStackTraceDepth$Throwable(throwable);
var logClassName="sun.util.logging.PlatformLogger";
var lookingForLogger=true;
for (var ix=0; ix < depth; ix++) {
var frame=access.getStackTraceElement$Throwable$I(throwable, ix);
var cname=frame.getClassName$();
if (lookingForLogger) {
if (cname.equals$O(logClassName)) {
lookingForLogger=false;
}} else {
if (!cname.equals$O(logClassName)) {
sourceClassName=cname;
sourceMethodName=frame.getMethodName$();
break;
}}}
if (sourceClassName != null ) {
return sourceClassName + " " + sourceMethodName ;
} else {
return this.name;
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.formatString=$I$(2).getSimpleFormat$Z(false);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PlatformLogger, "JavaLoggerProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.util.logging.PlatformLogger','.LoggerProxy']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['javaLogger','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
C$.c$$S$sun_util_logging_PlatformLogger_Level.apply(this, [name, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$sun_util_logging_PlatformLogger_Level',  function (name, level) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.javaLogger=$I$(2).getLogger$S(name);
if (level != null ) {
$I$(2).setLevel$O$O(this.javaLogger, level.javaLevel);
}}, 1);

Clazz.newMeth(C$, 'doLog$sun_util_logging_PlatformLogger_Level$S',  function (level, msg) {
$I$(2).log$O$O$S(this.javaLogger, level.javaLevel, msg);
});

Clazz.newMeth(C$, 'doLog$sun_util_logging_PlatformLogger_Level$S$Throwable',  function (level, msg, t) {
$I$(2).log$O$O$S$Throwable(this.javaLogger, level.javaLevel, msg, t);
});

Clazz.newMeth(C$, 'doLog$sun_util_logging_PlatformLogger_Level$S$OA',  function (level, msg, params) {
if (!this.isLoggable$sun_util_logging_PlatformLogger_Level(level)) {
return;
}var len=(params != null ) ? params.length : 0;
var sparams=Clazz.array(String, [len]);
for (var i=0; i < len; i++) {
sparams[i]=String.valueOf$O(params[i]);
}
$I$(2).log$O$O$S$OA(this.javaLogger, level.javaLevel, msg, sparams);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return $I$(2,"isLoggable$O$O",[this.javaLogger, $I$(3).OFF.javaLevel]);
});

Clazz.newMeth(C$, 'getLevel$',  function () {
var javaLevel=$I$(2).getLevel$O(this.javaLogger);
if (javaLevel == null ) return null;
try {
return $I$(3,"valueOf$S",[$I$(2).getLevelName$O(javaLevel)]);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(3,"valueOf$I",[$I$(2).getLevelValue$O(javaLevel)]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setLevel$sun_util_logging_PlatformLogger_Level',  function (level) {
$I$(2,"setLevel$O$O",[this.javaLogger, level == null  ? null : level.javaLevel]);
});

Clazz.newMeth(C$, 'isLoggable$sun_util_logging_PlatformLogger_Level',  function (level) {
return $I$(2).isLoggable$O$O(this.javaLogger, level.javaLevel);
});

C$.$static$=function(){C$.$static$=0;
{
for (var level, $level = 0, $$level = $I$(3).values$(); $level<$$level.length&&((level=($$level[$level])),1);$level++) {
level.javaLevel=$I$(2,"parseLevel$S",[level.name$()]);
}
};
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

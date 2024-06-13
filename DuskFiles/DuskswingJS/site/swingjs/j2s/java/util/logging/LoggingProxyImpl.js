(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[[0,'java.util.logging.Logger','java.util.logging.LogManager','java.util.logging.Level']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LoggingProxyImpl", null, null, 'sun.util.logging.LoggingProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.logging.LoggingProxy']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
return $I$(1).getPlatformLogger$S(name);
});

Clazz.newMeth(C$, 'getLevel$O',  function (logger) {
return (logger).getLevel$();
});

Clazz.newMeth(C$, 'setLevel$O$O',  function (logger, newLevel) {
(logger).setLevel$java_util_logging_Level(newLevel);
});

Clazz.newMeth(C$, 'isLoggable$O$O',  function (logger, level) {
return (logger).isLoggable$java_util_logging_Level(level);
});

Clazz.newMeth(C$, 'log$O$O$S',  function (logger, level, msg) {
(logger).log$java_util_logging_Level$S(level, msg);
});

Clazz.newMeth(C$, 'log$O$O$S$Throwable',  function (logger, level, msg, t) {
(logger).log$java_util_logging_Level$S$Throwable(level, msg, t);
});

Clazz.newMeth(C$, 'log$O$O$S$OA',  function (logger, level, msg, params) {
(logger).log$java_util_logging_Level$S$OA(level, msg, params);
});

Clazz.newMeth(C$, 'getLoggerNames$',  function () {
return $I$(2).getLoggingMXBean$().getLoggerNames$();
});

Clazz.newMeth(C$, 'getLoggerLevel$S',  function (loggerName) {
return $I$(2).getLoggingMXBean$().getLoggerLevel$S(loggerName);
});

Clazz.newMeth(C$, 'setLoggerLevel$S$S',  function (loggerName, levelName) {
$I$(2).getLoggingMXBean$().setLoggerLevel$S$S(loggerName, levelName);
});

Clazz.newMeth(C$, 'getParentLoggerName$S',  function (loggerName) {
return $I$(2).getLoggingMXBean$().getParentLoggerName$S(loggerName);
});

Clazz.newMeth(C$, 'parseLevel$S',  function (levelName) {
var level=$I$(3).findLevel$S(levelName);
if (level == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown level \"" + levelName + "\"" ]);
}return level;
});

Clazz.newMeth(C$, 'getLevelName$O',  function (level) {
return (level).getLevelName$();
});

Clazz.newMeth(C$, 'getLevelValue$O',  function (level) {
return (level).intValue$();
});

Clazz.newMeth(C$, 'getProperty$S',  function (key) {
return $I$(2).getLogManager$().getProperty$S(key);
});

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

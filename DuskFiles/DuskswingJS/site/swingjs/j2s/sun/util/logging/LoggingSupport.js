(function(){var P$=Clazz.newPackage("sun.util.logging"),I$=[[0,'java.security.AccessController','AssertionError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LoggingSupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['proxy','sun.util.logging.LoggingProxy']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isAvailable$',  function () {
return C$.proxy != null ;
}, 1);

Clazz.newMeth(C$, 'ensureAvailable$',  function () {
if (C$.proxy == null ) throw Clazz.new_($I$(2,1).c$$O,["Should not here"]);
}, 1);

Clazz.newMeth(C$, 'getLoggerNames$',  function () {
C$.ensureAvailable$();
return C$.proxy.getLoggerNames$();
}, 1);

Clazz.newMeth(C$, 'getLoggerLevel$S',  function (loggerName) {
C$.ensureAvailable$();
return C$.proxy.getLoggerLevel$S(loggerName);
}, 1);

Clazz.newMeth(C$, 'setLoggerLevel$S$S',  function (loggerName, levelName) {
C$.ensureAvailable$();
C$.proxy.setLoggerLevel$S$S(loggerName, levelName);
}, 1);

Clazz.newMeth(C$, 'getParentLoggerName$S',  function (loggerName) {
C$.ensureAvailable$();
return C$.proxy.getParentLoggerName$S(loggerName);
}, 1);

Clazz.newMeth(C$, 'getLogger$S',  function (name) {
C$.ensureAvailable$();
return C$.proxy.getLogger$S(name);
}, 1);

Clazz.newMeth(C$, 'getLevel$O',  function (logger) {
C$.ensureAvailable$();
return C$.proxy.getLevel$O(logger);
}, 1);

Clazz.newMeth(C$, 'setLevel$O$O',  function (logger, newLevel) {
C$.ensureAvailable$();
C$.proxy.setLevel$O$O(logger, newLevel);
}, 1);

Clazz.newMeth(C$, 'isLoggable$O$O',  function (logger, level) {
C$.ensureAvailable$();
return C$.proxy.isLoggable$O$O(logger, level);
}, 1);

Clazz.newMeth(C$, 'log$O$O$S',  function (logger, level, msg) {
C$.ensureAvailable$();
C$.proxy.log$O$O$S(logger, level, msg);
}, 1);

Clazz.newMeth(C$, 'log$O$O$S$Throwable',  function (logger, level, msg, t) {
C$.ensureAvailable$();
C$.proxy.log$O$O$S$Throwable(logger, level, msg, t);
}, 1);

Clazz.newMeth(C$, 'log$O$O$S$OA',  function (logger, level, msg, params) {
C$.ensureAvailable$();
C$.proxy.log$O$O$S$OA(logger, level, msg, params);
}, 1);

Clazz.newMeth(C$, 'parseLevel$S',  function (levelName) {
C$.ensureAvailable$();
return C$.proxy.parseLevel$S(levelName);
}, 1);

Clazz.newMeth(C$, 'getLevelName$O',  function (level) {
C$.ensureAvailable$();
return C$.proxy.getLevelName$O(level);
}, 1);

Clazz.newMeth(C$, 'getLevelValue$O',  function (level) {
C$.ensureAvailable$();
return C$.proxy.getLevelValue$O(level);
}, 1);

Clazz.newMeth(C$, 'getSimpleFormat$',  function () {
return C$.getSimpleFormat$Z(true);
}, 1);

Clazz.newMeth(C$, 'getSimpleFormat$Z',  function (useProxy) {
var format=$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.LoggingSupport$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoggingSupport$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return System.getProperty$S("java.util.logging.SimpleFormatter.format");
});
})()
), Clazz.new_(P$.LoggingSupport$2.$init$,[this, null]))]);
if (useProxy && C$.proxy != null   && format == null  ) {
format=C$.proxy.getProperty$S("java.util.logging.SimpleFormatter.format");
}if (format != null ) {
try {
String.format$S$OA(format, Clazz.array(java.lang.Object, -1, [Clazz.new_(java.util.Date), "", "", "", "", ""]));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
format="%1$tb %1$td, %1$tY %1$tl:%1$tM:%1$tS %1$Tp %2$s%n%4$s: %5$s%6$s%n";
} else {
throw e;
}
}
} else {
format="%1$tb %1$td, %1$tY %1$tl:%1$tM:%1$tS %1$Tp %2$s%n%4$s: %5$s%6$s%n";
}return format;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.proxy=$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.LoggingSupport$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LoggingSupport$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
var c=Clazz.forName("java.util.logging.LoggingProxyImpl", true, null);
var f=c.getDeclaredField$S("INSTANCE");
f.setAccessible$Z(true);
return f.get$O(null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cnf = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"NoSuchFieldException")){
var e = e$$;
{
throw Clazz.new_($I$(2,1).c$$O,[e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_($I$(2,1).c$$O,[e]);
}
} else {
throw e$$;
}
}
});
})()
), Clazz.new_(P$.LoggingSupport$1.$init$,[this, null]))]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

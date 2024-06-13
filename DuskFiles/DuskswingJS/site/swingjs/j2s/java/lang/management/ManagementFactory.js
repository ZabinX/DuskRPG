(function(){var P$=Clazz.newPackage("java.lang.management"),I$=[[0,'StringBuffer',['java.lang.management.ManagementFactory','.Usage'],'java.util.ArrayList',['java.lang.management.ManagementFactory','.Bean'],'sun.management.ManagementFactoryHelper']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ManagementFactory", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Usage',9],['Bean',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getClassLoadingMXBean$',  function () {
return Clazz.new_($I$(4,1).c$$S,["classloadingmx"]);
}, 1);

Clazz.newMeth(C$, 'getMemoryMXBean$',  function () {
return Clazz.new_($I$(4,1).c$$S,["memorymx"]);
}, 1);

Clazz.newMeth(C$, 'getThreadMXBean$',  function () {
return Clazz.new_($I$(4,1).c$$S,["thread"]);
}, 1);

Clazz.newMeth(C$, 'getRuntimeMXBean$',  function () {
return Clazz.new_($I$(4,1).c$$S,["runtime"]);
}, 1);

Clazz.newMeth(C$, 'getCompilationMXBean$',  function () {
return Clazz.new_($I$(4,1).c$$S,["compilation"]);
}, 1);

Clazz.newMeth(C$, 'getOperatingSystemMXBean$',  function () {
return $I$(5).getOperatingSystemMXBean$();
}, 1);

Clazz.newMeth(C$, 'getMemoryPoolMXBeans$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'getMemoryManagerMXBeans$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'getGarbageCollectorMXBeans$',  function () {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'getPlatformMBeanServer$',  function () {
return null;
}, 1);

Clazz.newMeth(C$, 'newPlatformMXBeanProxy$javax_management_MBeanServerConnection$S$Class',  function (connection, mxbeanName, mxbeanInterface) {
return null;
}, 1);

Clazz.newMeth(C$, 'getPlatformMXBean$Class',  function (mxbeanInterface) {
return null;
}, 1);

Clazz.newMeth(C$, 'getPlatformMXBeans$Class',  function (mxbeanInterface) {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'getPlatformMXBean$javax_management_MBeanServerConnection$Class',  function (connection, mxbeanInterface) {
return null;
}, 1);

Clazz.newMeth(C$, 'getPlatformMXBeans$javax_management_MBeanServerConnection$Class',  function (connection, mxbeanInterface) {
return Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'getPlatformManagementInterfaces$',  function () {
return null;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ManagementFactory, "Usage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['init','used','committed','max']]]

Clazz.newMeth(C$, 'c$$J$J$J$J',  function (init, used, committed, max) {
;C$.$init$.apply(this);
this.init=init;
this.used=used;
this.committed=committed;
this.max=max;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$J$J$J$J.apply(this, [0, 0, 0, 2147483647]);
}, 1);

Clazz.newMeth(C$, 'getInit$',  function () {
return this.init;
});

Clazz.newMeth(C$, 'getUsed$',  function () {
return this.used;
});

Clazz.newMeth(C$, 'getCommitted$',  function () {
return this.committed;
});

Clazz.newMeth(C$, 'getMax$',  function () {
return this.max;
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(1,1));
buf.append$S("init = " + Long.$s(this.init) + "(" + Long.$s((Long.$sr(this.init,10))) + "K) " );
buf.append$S("used = " + Long.$s(this.used) + "(" + Long.$s((Long.$sr(this.used,10))) + "K) " );
buf.append$S("committed = " + Long.$s(this.committed) + "(" + Long.$s((Long.$sr(this.committed,10))) + "K) " );
buf.append$S("max = " + Long.$s(this.max) + "(" + Long.$s((Long.$sr(this.max,10))) + "K)" );
return buf.toString();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ManagementFactory, "Bean", function(){
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

Clazz.newMeth(C$, 'getObjectName$',  function () {
return null;
});

Clazz.newMeth(C$, 'getObjectPendingFinalizationCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getHeapMemoryUsage$',  function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'getNonHeapMemoryUsage$',  function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'gc$',  function () {
});

Clazz.newMeth(C$, 'getTotalLoadedClassCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getLoadedClassCount$',  function () {
return (Clazz._getClassCount && Clazz._getClassCount() ||0);
});

Clazz.newMeth(C$, 'getUnloadedClassCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isVerbose$',  function () {
return false;
});

Clazz.newMeth(C$, 'setVerbose$Z',  function (value) {
});

Clazz.newMeth(C$, 'getLoggerNames$',  function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getLoggerLevel$S',  function (loggerName) {
return "unknown";
});

Clazz.newMeth(C$, 'setLoggerLevel$S$S',  function (loggerName, levelName) {
});

Clazz.newMeth(C$, 'getParentLoggerName$S',  function (loggerName) {
return null;
});

Clazz.newMeth(C$, 'getArch$',  function () {
return "java2script";
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return "SwingJS";
});

Clazz.newMeth(C$, 'getAvailableProcessors$',  function () {
return (window.navigator.hardwareConcurrency ||0);
});

Clazz.newMeth(C$, 'getSystemLoadAverage$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getThreadCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getPeakThreadCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getTotalStartedThreadCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getDaemonThreadCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getAllThreadIds$',  function () {
return null;
});

Clazz.newMeth(C$, 'getThreadInfo$J',  function (id) {
return null;
});

Clazz.newMeth(C$, 'getThreadInfo$JA',  function (ids) {
return null;
});

Clazz.newMeth(C$, 'getThreadInfo$J$I',  function (id, maxDepth) {
return null;
});

Clazz.newMeth(C$, 'getThreadInfo$JA$I',  function (ids, maxDepth) {
return null;
});

Clazz.newMeth(C$, 'isThreadContentionMonitoringSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'isThreadContentionMonitoringEnabled$',  function () {
return false;
});

Clazz.newMeth(C$, 'setThreadContentionMonitoringEnabled$Z',  function (enable) {
});

Clazz.newMeth(C$, 'getCurrentThreadCpuTime$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getCurrentThreadUserTime$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getThreadCpuTime$J',  function (id) {
return 0;
});

Clazz.newMeth(C$, 'getThreadUserTime$J',  function (id) {
return 0;
});

Clazz.newMeth(C$, 'isThreadCpuTimeSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'isCurrentThreadCpuTimeSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'isThreadCpuTimeEnabled$',  function () {
return false;
});

Clazz.newMeth(C$, 'setThreadCpuTimeEnabled$Z',  function (enable) {
});

Clazz.newMeth(C$, 'findMonitorDeadlockedThreads$',  function () {
return null;
});

Clazz.newMeth(C$, 'resetPeakThreadCount$',  function () {
});

Clazz.newMeth(C$, 'findDeadlockedThreads$',  function () {
return null;
});

Clazz.newMeth(C$, 'isObjectMonitorUsageSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'isSynchronizerUsageSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'getThreadInfo$JA$Z$Z',  function (ids, lockedMonitors, lockedSynchronizers) {
return null;
});

Clazz.newMeth(C$, 'dumpAllThreads$Z$Z',  function (lockedMonitors, lockedSynchronizers) {
return null;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'isCompilationTimeMonitoringSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'getTotalCompilationTime$',  function () {
return 0;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

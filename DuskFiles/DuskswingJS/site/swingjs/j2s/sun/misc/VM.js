(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.util.Properties','Runtime','sun.misc.OSEnvironment',['Thread','.State']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VM");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['suspended','booted','pageAlignDirectMemory','defaultAllowArraySyntax','allowArraySyntax'],'I',['finalRefCount','peakFinalRefCount'],'J',['directMemory'],'O',['lock','java.lang.Object','savedProps','java.util.Properties']]]

Clazz.newMeth(C$, 'threadsSuspended$',  function () {
return C$.suspended;
}, 1);

Clazz.newMeth(C$, 'allowThreadSuspension$ThreadGroup$Z',  function (g, b) {
return true;
}, 1);

Clazz.newMeth(C$, 'suspendThreads$',  function () {
C$.suspended=true;
return true;
}, 1);

Clazz.newMeth(C$, 'unsuspendThreads$',  function () {
C$.suspended=false;
}, 1);

Clazz.newMeth(C$, 'unsuspendSomeThreads$',  function () {
}, 1);

Clazz.newMeth(C$, 'getState$',  function () {
return 1;
}, 1);

Clazz.newMeth(C$, 'registerVMNotification$sun_misc_VMNotification',  function (n) {
}, 1);

Clazz.newMeth(C$, 'asChange$I$I',  function (as_old, as_new) {
}, 1);

Clazz.newMeth(C$, 'asChange_otherthread$I$I',  function (as_old, as_new) {
}, 1);

Clazz.newMeth(C$, 'booted$',  function () {
{
C$.booted=true;
C$.lock.notifyAll$();
}}, 1);

Clazz.newMeth(C$, 'isBooted$',  function () {
return C$.booted;
}, 1);

Clazz.newMeth(C$, 'awaitBooted$',  function () {
{
while (!C$.booted){
C$.lock.wait$();
}
}}, 1);

Clazz.newMeth(C$, 'maxDirectMemory$',  function () {
return C$.directMemory;
}, 1);

Clazz.newMeth(C$, 'isDirectMemoryPageAligned$',  function () {
return C$.pageAlignDirectMemory;
}, 1);

Clazz.newMeth(C$, 'allowArraySyntax$',  function () {
return C$.allowArraySyntax;
}, 1);

Clazz.newMeth(C$, 'isSystemDomainLoader$ClassLoader',  function (loader) {
return loader == null ;
}, 1);

Clazz.newMeth(C$, 'getSavedProperty$S',  function (key) {
if (C$.savedProps.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Should be non-empty if initialized"]);
return C$.savedProps.getProperty$S(key);
}, 1);

Clazz.newMeth(C$, 'saveAndRemoveProperties$java_util_Properties',  function (props) {
if (C$.booted) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["System initialization has completed"]);
C$.savedProps.putAll$java_util_Map(props);
var s=props.remove$O("sun.nio.MaxDirectMemorySize");
if (s != null ) {
if (s.equals$O("-1")) {
C$.directMemory=$I$(2).getRuntime$().maxMemory$();
} else {
var l=Long.parseLong$S(s);
if (Long.$gt(l,-1 )) C$.directMemory=l;
}}s=props.remove$O("sun.nio.PageAlignDirectMemory");
if ("true".equals$O(s)) C$.pageAlignDirectMemory=true;
s=props.getProperty$S("sun.lang.ClassLoader.allowArraySyntax");
C$.allowArraySyntax=(s == null  ? C$.defaultAllowArraySyntax : Boolean.parseBoolean$S(s));
props.remove$O("java.lang.Integer.IntegerCache.high");
props.remove$O("sun.zip.disableMemoryMapping");
props.remove$O("sun.java.launcher.diag");
props.remove$O("sun.cds.enableSharedLookupCache");
}, 1);

Clazz.newMeth(C$, 'initializeOSEnvironment$',  function () {
if (!C$.booted) {
$I$(3).initialize$();
}}, 1);

Clazz.newMeth(C$, 'getFinalRefCount$',  function () {
return C$.finalRefCount;
}, 1);

Clazz.newMeth(C$, 'getPeakFinalRefCount$',  function () {
return C$.peakFinalRefCount;
}, 1);

Clazz.newMeth(C$, 'addFinalRefCount$I',  function (n) {
C$.finalRefCount+=n;
if (C$.finalRefCount > C$.peakFinalRefCount) {
C$.peakFinalRefCount=C$.finalRefCount;
}}, 1);

Clazz.newMeth(C$, 'toThreadState$I',  function (threadStatus) {
if ((threadStatus & 4) != 0) {
return $I$(4).RUNNABLE;
} else if ((threadStatus & 1024) != 0) {
return $I$(4).BLOCKED;
} else if ((threadStatus & 16) != 0) {
return $I$(4).WAITING;
} else if ((threadStatus & 32) != 0) {
return $I$(4).TIMED_WAITING;
} else if ((threadStatus & 2) != 0) {
return $I$(4).TERMINATED;
} else if ((threadStatus & 1) == 0) {
return $I$(4).NEW;
} else {
return $I$(4).RUNNABLE;
}}, 1);

Clazz.newMeth(C$, 'latestUserDefinedLoader$',  function () {
alert('native method must be replaced! latestUserDefinedLoader');
}
, 2);

Clazz.newMeth(C$, 'initialize$',  function () {
alert('native method must be replaced! initialize');
}
, 2);

C$.$static$=function(){C$.$static$=0;
C$.suspended=false;
C$.booted=false;
C$.lock= Clazz.new_();
C$.directMemory=67108864;
C$.defaultAllowArraySyntax=false;
C$.allowArraySyntax=C$.defaultAllowArraySyntax;
C$.savedProps=Clazz.new_($I$(1,1));
C$.finalRefCount=0;
C$.peakFinalRefCount=0;
{
C$.initialize$();
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

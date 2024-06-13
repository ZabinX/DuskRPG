(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'java.util.HashMap','java.security.AccessController','sun.misc.ThreadGroupUtils',['sun.font.CreatedFontTracker','.TempFileDeletionHook'],'Thread','Runtime','sun.awt.AppContext','java.util.concurrent.Semaphore','java.util.concurrent.TimeUnit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CreatedFontTracker", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TempFileDeletionHook',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['numBytes']]
,['O',['tracker','sun.font.CreatedFontTracker']]]

Clazz.newMeth(C$, 'getTracker$',  function () {
if (C$.tracker == null ) {
C$.tracker=Clazz.new_(C$);
}return C$.tracker;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.numBytes=0;
}, 1);

Clazz.newMeth(C$, 'getNumBytes$',  function () {
return this.numBytes;
});

Clazz.newMeth(C$, 'addBytes$I',  function (sz) {
this.numBytes+=sz;
});

Clazz.newMeth(C$, 'subBytes$I',  function (sz) {
this.numBytes-=sz;
});

Clazz.newMeth(C$, 'getCS$',  function () {
var appContext=$I$(7).getAppContext$();
var cs=appContext.get$O(Clazz.getClass(C$));
if (cs == null ) {
cs=Clazz.new_($I$(8,1).c$$I$Z,[5, true]);
appContext.put$O$O(Clazz.getClass(C$), cs);
}return cs;
}, 1);

Clazz.newMeth(C$, 'acquirePermit$',  function () {
return C$.getCS$().tryAcquire$J$java_util_concurrent_TimeUnit(120, $I$(9).SECONDS);
});

Clazz.newMeth(C$, 'releasePermit$',  function () {
C$.getCS$().release$();
});

Clazz.newMeth(C$, 'add$java_io_File',  function (file) {
$I$(4).add$java_io_File(file);
});

Clazz.newMeth(C$, 'set$java_io_File$java_io_OutputStream',  function (file, os) {
$I$(4).set$java_io_File$java_io_OutputStream(file, os);
});

Clazz.newMeth(C$, 'remove$java_io_File',  function (file) {
$I$(4).remove$java_io_File(file);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CreatedFontTracker, "TempFileDeletionHook", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['files','java.util.HashMap','t','Thread']]]

Clazz.newMeth(C$, 'init$',  function () {
if (C$.t == null ) {
$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.CreatedFontTracker$TempFileDeletionHook$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CreatedFontTracker$TempFileDeletionHook$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
var rootTG=$I$(3).getRootThreadGroup$();
$I$(4).t=Clazz.new_([rootTG, (P$.CreatedFontTracker$TempFileDeletionHook$lambda1$2$||(P$.CreatedFontTracker$TempFileDeletionHook$lambda1$2$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "CreatedFontTracker$TempFileDeletionHook$lambda1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'run$',  function () { return $$.runHooks$.apply(null,[])});
})()
)); return Clazz.new_(P$.CreatedFontTracker$TempFileDeletionHook$lambda1$2.$init$,[this, null])})($I$(4)))))],$I$(5,1).c$$ThreadGroup$Runnable);
$I$(4).t.setContextClassLoader$ClassLoader.apply($I$(4).t, [null]);
$I$(6).getRuntime$().addShutdownHook$Thread.apply($I$(6).getRuntime$(), [$I$(4).t]);
return null;
});
})()
), Clazz.new_(P$.CreatedFontTracker$TempFileDeletionHook$lambda1.$init$,[this, null]))]);
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$java_io_File',  function (file) {
C$.init$();
C$.files.put$O$O(file, null);
}, 1);

Clazz.newMeth(C$, 'set$java_io_File$java_io_OutputStream',  function (file, os) {
C$.files.put$O$O(file, os);
}, 1);

Clazz.newMeth(C$, 'remove$java_io_File',  function (file) {
C$.files.remove$O(file);
}, 1);

Clazz.newMeth(C$, 'runHooks$',  function () {
if (C$.files.isEmpty$()) {
return;
}for (var entry, $entry = C$.files.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
try {
if (entry.getValue$() != null ) {
entry.getValue$().close$();
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
entry.getKey$().delete$();
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.files=Clazz.new_($I$(1,1));
C$.t=null;
};
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

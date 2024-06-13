(function(){var P$=Clazz.newPackage("sun.nio.fs"),p$1={},I$=[[0,'java.util.HashMap','java.nio.file.Files','java.nio.file.LinkOption',['sun.nio.fs.PollingWatchService','.CacheEntry'],'java.util.concurrent.TimeUnit','java.nio.file.StandardWatchEventKinds','java.util.concurrent.Executors','Thread','java.util.HashSet','com.sun.nio.file.SensitivityWatchEventModifier','java.nio.file.attribute.BasicFileAttributes','AssertionError',['sun.nio.fs.PollingWatchService','.PollingWatchKey'],'java.security.AccessController']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PollingWatchService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.nio.fs.AbstractWatchService');
C$.$classes$=[['CacheEntry',10],['PollingWatchKey',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['map','java.util.Map','scheduledExecutor','java.util.concurrent.ScheduledExecutorService']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.scheduledExecutor=$I$(7,"newSingleThreadScheduledExecutor$java_util_concurrent_ThreadFactory",[((P$.PollingWatchService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PollingWatchService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.ThreadFactory', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newThread$Runnable',  function (r) {
var t=Clazz.new_($I$(8,1).c$$Runnable,[r]);
t.setDaemon$Z(true);
return t;
});
})()
), Clazz.new_(P$.PollingWatchService$1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'register$java_nio_file_Path$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA',  function (path, events, modifiers) {
var eventSet=Clazz.new_($I$(9,1).c$$I,[events.length]);
for (var event, $event = 0, $$event = events; $event<$$event.length&&((event=($$event[$event])),1);$event++) {
if (event === $I$(6).ENTRY_CREATE  || event === $I$(6).ENTRY_MODIFY   || event === $I$(6).ENTRY_DELETE  ) {
eventSet.add$O(event);
continue;
}if (event === $I$(6).OVERFLOW ) {
continue;
}if (event == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["An element in event set is \'null\'"]);
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[event.name$()]);
}
if (eventSet.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No events to register"]);
var sensivity=$I$(10).MEDIUM;
if (modifiers.length > 0) {
for (var modifier, $modifier = 0, $$modifier = modifiers; $modifier<$$modifier.length&&((modifier=($$modifier[$modifier])),1);$modifier++) {
if (modifier == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (Clazz.instanceOf(modifier, "com.sun.nio.file.SensitivityWatchEventModifier")) {
sensivity=modifier;
continue;
}throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Modifier not supported"]);
}
}if (!this.isOpen$()) throw Clazz.new_(Clazz.load('java.nio.file.ClosedWatchServiceException'));
var s=sensivity;
return p$1.doPrivilegedRegister$java_nio_file_Path$java_util_Set$com_sun_nio_file_SensitivityWatchEventModifier.apply(this, [path, eventSet, s]);
});

Clazz.newMeth(C$, 'doPrivilegedRegister$java_nio_file_Path$java_util_Set$com_sun_nio_file_SensitivityWatchEventModifier',  function (path, events, sensivity) {
var attrs=$I$(2,"readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA",[path, Clazz.getClass($I$(11),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), Clazz.array($I$(3), -1, [])]);
if (!attrs.isDirectory$()) {
throw Clazz.new_(Clazz.load('java.nio.file.NotDirectoryException').c$$S,[path.toString()]);
}var fileKey=attrs.fileKey$();
if (fileKey == null ) throw Clazz.new_($I$(12,1).c$$O,["File keys must be supported"]);
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.closeLock$());
{
if (!this.isOpen$()) throw Clazz.new_(Clazz.load('java.nio.file.ClosedWatchServiceException'));
var watchKey;
{
watchKey=this.map.get$O(fileKey);
if (watchKey == null ) {
watchKey=Clazz.new_($I$(13,1).c$$java_nio_file_Path$sun_nio_fs_PollingWatchService$O,[this, null, path, this, fileKey]);
this.map.put$O$O(fileKey, watchKey);
} else {
watchKey.disable$();
}}watchKey.enable$java_util_Set$J(events, sensivity.sensitivityValueInSeconds$());
return watchKey;
}}, p$1);

Clazz.newMeth(C$, 'implClose$',  function () {
{
for (var entry, $entry = this.map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var watchKey=entry.getValue$();
watchKey.disable$();
watchKey.invalidate$();
}
this.map.clear$();
}$I$(14,"doPrivileged$java_security_PrivilegedAction",[((P$.PollingWatchService$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PollingWatchService$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['sun.nio.fs.PollingWatchService'].scheduledExecutor.shutdown$();
return null;
});
})()
), Clazz.new_(P$.PollingWatchService$2.$init$,[this, null]))]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PollingWatchService, "CacheEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lastTickCount'],'J',['lastModified']]]

Clazz.newMeth(C$, 'c$$J$I',  function (lastModified, lastTickCount) {
;C$.$init$.apply(this);
this.lastModified=lastModified;
this.lastTickCount=lastTickCount;
}, 1);

Clazz.newMeth(C$, 'lastTickCount$',  function () {
return this.lastTickCount;
});

Clazz.newMeth(C$, 'lastModified$',  function () {
return this.lastModified;
});

Clazz.newMeth(C$, 'update$J$I',  function (lastModified, tickCount) {
this.lastModified=lastModified;
this.lastTickCount=tickCount;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PollingWatchService, "PollingWatchKey", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'sun.nio.fs.AbstractWatchKey');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['valid'],'I',['tickCount'],'O',['fileKey','java.lang.Object','$events','java.util.Set','poller','java.util.concurrent.ScheduledFuture','entries','java.util.Map']]]

Clazz.newMeth(C$, 'c$$java_nio_file_Path$sun_nio_fs_PollingWatchService$O',  function (dir, watcher, fileKey) {
;C$.superclazz.c$$java_nio_file_Path$sun_nio_fs_AbstractWatchService.apply(this,[dir, watcher]);C$.$init$.apply(this);
this.fileKey=fileKey;
this.valid=true;
this.tickCount=0;
this.entries=Clazz.new_($I$(1,1));
try {
var stream=$I$(2).newDirectoryStream$java_nio_file_Path(dir);
try {
for (var entry, $entry = stream.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var lastModified=$I$(2,"getLastModifiedTime$java_nio_file_Path$java_nio_file_LinkOptionA",[entry, Clazz.array($I$(3), -1, [$I$(3).NOFOLLOW_LINKS])]).toMillis$();
this.entries.put$O$O(entry.getFileName$(), Clazz.new_($I$(4,1).c$$J$I,[lastModified, this.tickCount]));
}

}finally{/*res*/stream&&stream.close$&&stream.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.DirectoryIteratorException")){
throw e.getCause$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'fileKey$',  function () {
return this.fileKey;
});

Clazz.newMeth(C$, 'isValid$',  function () {
return this.valid;
});

Clazz.newMeth(C$, 'invalidate$',  function () {
this.valid=false;
});

Clazz.newMeth(C$, 'enable$java_util_Set$J',  function (events, period) {
{
this.$events=events;
var thunk=((P$.PollingWatchService$PollingWatchKey$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PollingWatchService$PollingWatchKey$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['sun.nio.fs.PollingWatchService.PollingWatchKey'].poll$.apply(this.b$['sun.nio.fs.PollingWatchService.PollingWatchKey'], []);
});
})()
), Clazz.new_(P$.PollingWatchService$PollingWatchKey$1.$init$,[this, null]));
this.poller=this.b$['sun.nio.fs.PollingWatchService'].scheduledExecutor.scheduleAtFixedRate$Runnable$J$J$java_util_concurrent_TimeUnit(thunk, period, period, $I$(5).SECONDS);
}});

Clazz.newMeth(C$, 'disable$',  function () {
{
if (this.poller != null ) this.poller.cancel$Z(false);
}});

Clazz.newMeth(C$, 'cancel$',  function () {
this.valid=false;
{
this.b$['sun.nio.fs.PollingWatchService'].map.remove$O(this.fileKey$());
}this.disable$();
});

Clazz.newMeth(C$, 'poll$',  function () {
if (!this.valid) {
return;
}++this.tickCount;
var stream=null;
try {
stream=$I$(2,"newDirectoryStream$java_nio_file_Path",[this.watchable$()]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.cancel$();
this.signal$();
return;
} else {
throw x;
}
}
try {
for (var entry, $entry = stream.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var lastModified=0;
try {
lastModified=$I$(2,"getLastModifiedTime$java_nio_file_Path$java_nio_file_LinkOptionA",[entry, Clazz.array($I$(3), -1, [$I$(3).NOFOLLOW_LINKS])]).toMillis$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
continue;
} else {
throw x;
}
}
var e=this.entries.get$O(entry.getFileName$());
if (e == null ) {
this.entries.put$O$O(entry.getFileName$(), Clazz.new_($I$(4,1).c$$J$I,[lastModified, this.tickCount]));
if (this.$events.contains$O($I$(6).ENTRY_CREATE)) {
this.signalEvent$java_nio_file_WatchEvent_Kind$O($I$(6).ENTRY_CREATE, entry.getFileName$());
continue;
} else {
if (this.$events.contains$O($I$(6).ENTRY_MODIFY)) {
this.signalEvent$java_nio_file_WatchEvent_Kind$O($I$(6).ENTRY_MODIFY, entry.getFileName$());
}}continue;
}if (Long.$ne(e.lastModified,lastModified )) {
if (this.$events.contains$O($I$(6).ENTRY_MODIFY)) {
this.signalEvent$java_nio_file_WatchEvent_Kind$O($I$(6).ENTRY_MODIFY, entry.getFileName$());
}}e.update$J$I(lastModified, this.tickCount);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.DirectoryIteratorException")){
} else {
throw e;
}
} finally {
try {
stream.close$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
} else {
throw x;
}
}
}
var i=this.entries.entrySet$().iterator$();
while (i.hasNext$()){
var mapEntry=i.next$();
var entry=mapEntry.getValue$();
if (entry.lastTickCount$() != this.tickCount) {
var name=mapEntry.getKey$();
i.remove$();
if (this.$events.contains$O($I$(6).ENTRY_DELETE)) {
this.signalEvent$java_nio_file_WatchEvent_Kind$O($I$(6).ENTRY_DELETE, name);
}}}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

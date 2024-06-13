(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,['java.nio.file.StandardWatchEventKinds','.StdWatchEventKind'],'java.nio.file.Path']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardWatchEventKinds", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StdWatchEventKind',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['OVERFLOW','java.nio.file.WatchEvent.Kind','+ENTRY_CREATE','+ENTRY_DELETE','+ENTRY_MODIFY']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.OVERFLOW=Clazz.new_(["OVERFLOW", Clazz.getClass(java.lang.Object)],$I$(1,1).c$$S$Class);
C$.ENTRY_CREATE=Clazz.new_(["ENTRY_CREATE", Clazz.getClass($I$(2),['compareTo$java_nio_file_Path','endsWith$java_nio_file_Path','endsWith$S','equals$O','getFileName$','getFileSystem$','getName$I','getNameCount$','getParent$','getRoot$','hashCode$','isAbsolute$','iterator$','normalize$','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA','relativize$java_nio_file_Path','resolve$java_nio_file_Path','resolve$S','resolveSibling$java_nio_file_Path','resolveSibling$S','startsWith$java_nio_file_Path','startsWith$S','subpath$I$I','toAbsolutePath$','toFile$','toRealPath$java_nio_file_LinkOptionA','toString','toUri$'])],$I$(1,1).c$$S$Class);
C$.ENTRY_DELETE=Clazz.new_(["ENTRY_DELETE", Clazz.getClass($I$(2),['compareTo$java_nio_file_Path','endsWith$java_nio_file_Path','endsWith$S','equals$O','getFileName$','getFileSystem$','getName$I','getNameCount$','getParent$','getRoot$','hashCode$','isAbsolute$','iterator$','normalize$','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA','relativize$java_nio_file_Path','resolve$java_nio_file_Path','resolve$S','resolveSibling$java_nio_file_Path','resolveSibling$S','startsWith$java_nio_file_Path','startsWith$S','subpath$I$I','toAbsolutePath$','toFile$','toRealPath$java_nio_file_LinkOptionA','toString','toUri$'])],$I$(1,1).c$$S$Class);
C$.ENTRY_MODIFY=Clazz.new_(["ENTRY_MODIFY", Clazz.getClass($I$(2),['compareTo$java_nio_file_Path','endsWith$java_nio_file_Path','endsWith$S','equals$O','getFileName$','getFileSystem$','getName$I','getNameCount$','getParent$','getRoot$','hashCode$','isAbsolute$','iterator$','normalize$','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA','register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA','relativize$java_nio_file_Path','resolve$java_nio_file_Path','resolve$S','resolveSibling$java_nio_file_Path','resolveSibling$S','startsWith$java_nio_file_Path','startsWith$S','subpath$I$I','toAbsolutePath$','toFile$','toRealPath$java_nio_file_LinkOptionA','toString','toUri$'])],$I$(1,1).c$$S$Class);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardWatchEventKinds, "StdWatchEventKind", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.nio.file.WatchEvent','java.nio.file.WatchEvent.Kind']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['type','Class']]]

Clazz.newMeth(C$, 'c$$S$Class',  function (name, type) {
;C$.$init$.apply(this);
this.name=name;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'name$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'type$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.file.attribute.FileAttribute','java.util.HashSet','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsynchronousFileChannel", null, null, 'java.nio.channels.AsynchronousChannel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NO_ATTRIBUTES','java.nio.file.attribute.FileAttribute[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA',  function (file, options, executor, attrs) {
var provider=file.getFileSystem$().provider$();
return provider.newAsynchronousFileChannel$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA(file, options, executor, attrs);
}, 1);

Clazz.newMeth(C$, 'open$java_nio_file_Path$java_nio_file_OpenOptionA',  function (file, options) {
var set=Clazz.new_($I$(2,1).c$$I,[options.length]);
$I$(3).addAll$java_util_Collection$OA(set, options);
return C$.open$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA(file, set, null, C$.NO_ATTRIBUTES);
}, 1);

Clazz.newMeth(C$, 'lock$O$java_nio_channels_CompletionHandler',  function (attachment, handler) {
this.lock$J$J$Z$O$java_nio_channels_CompletionHandler(0, [16777215,549755813887,1], false, attachment, handler);
});

Clazz.newMeth(C$, 'lock$',  function () {
return this.lock$J$J$Z(0, [16777215,549755813887,1], false);
});

Clazz.newMeth(C$, 'tryLock$',  function () {
return this.tryLock$J$J$Z(0, [16777215,549755813887,1], false);
});

C$.$static$=function(){C$.$static$=0;
C$.NO_ATTRIBUTES=Clazz.array($I$(1), [0]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.nio.file.spi"),I$=[[0,'java.util.ArrayList',['swingjs.JSFileSystem','.JSFileSystemProvider'],'java.nio.file.FileSystems','Error','java.util.Collections','java.nio.file.StandardOpenOption','java.nio.channels.Channels','java.nio.file.Files','java.util.HashSet','java.nio.file.attribute.FileAttribute']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileSystemProvider");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['loadingProviders'],'O',['lock','java.lang.Object','installedProviders','java.util.List']]]

Clazz.newMeth(C$, 'checkPermission$',  function () {
return null;
}, 1);

Clazz.newMeth(C$, 'c$$Void',  function (ignore) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Void.apply(this, [C$.checkPermission$()]);
}, 1);

Clazz.newMeth(C$, 'loadInstalledProviders$',  function () {
var list=Clazz.new_($I$(1,1));
var sl=Clazz.array(String, -1, ["file", "jar", "http", "https"]);
for (var scheme, $scheme = 0, $$scheme = sl; $scheme<$$scheme.length&&((scheme=($$scheme[$scheme])),1);$scheme++) {
if (!scheme.equalsIgnoreCase$S("file")) {
list.add$O(Clazz.new_($I$(2,1).c$$S,[scheme]));
}}
return list;
}, 1);

Clazz.newMeth(C$, 'installedProviders$',  function () {
if (C$.installedProviders == null ) {
var defaultProvider=$I$(3).getDefault$().provider$();
if (C$.installedProviders == null ) {
if (C$.loadingProviders) {
throw Clazz.new_($I$(4,1).c$$S,["Circular loading of installed providers detected"]);
}C$.loadingProviders=true;
var list=C$.loadInstalledProviders$();
list.add$I$O(0, defaultProvider);
C$.installedProviders=$I$(5).unmodifiableList$java_util_List(list);
}}return C$.installedProviders;
}, 1);

Clazz.newMeth(C$, 'newFileSystem$java_nio_file_Path$java_util_Map',  function (path, env) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA',  function (path, options) {
if (options.length > 0) {
for (var opt, $opt = 0, $$opt = options; $opt<$$opt.length&&((opt=($$opt[$opt])),1);$opt++) {
if (opt === $I$(6).APPEND  || opt === $I$(6).WRITE  ) throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["'" + opt + "' not allowed" ]);
}
}return $I$(7,"newInputStream$java_nio_channels_ReadableByteChannel",[$I$(8).newByteChannel$java_nio_file_Path$java_nio_file_OpenOptionA(path, options)]);
});

Clazz.newMeth(C$, 'newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA',  function (path, options) {
var len=options.length;
var opts=Clazz.new_($I$(9,1).c$$I,[len + 3]);
if (len == 0) {
opts.add$O($I$(6).CREATE);
opts.add$O($I$(6).TRUNCATE_EXISTING);
} else {
for (var opt, $opt = 0, $$opt = options; $opt<$$opt.length&&((opt=($$opt[$opt])),1);$opt++) {
if (opt === $I$(6).READ ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["READ not allowed"]);
opts.add$O(opt);
}
}opts.add$O($I$(6).WRITE);
return $I$(7,"newOutputStream$java_nio_channels_WritableByteChannel",[this.newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, opts, Clazz.array($I$(10), -1, []))]);
});

Clazz.newMeth(C$, 'newFileChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA',  function (path, options, attrs) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'newAsynchronousFileChannel$java_nio_file_Path$java_util_Set$java_util_concurrent_ExecutorService$java_nio_file_attribute_FileAttributeA',  function (path, options, executor, attrs) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'createSymbolicLink$java_nio_file_Path$java_nio_file_Path$java_nio_file_attribute_FileAttributeA',  function (link, target, attrs) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'createLink$java_nio_file_Path$java_nio_file_Path',  function (link, existing) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'deleteIfExists$java_nio_file_Path',  function (path) {
try {
this.delete$java_nio_file_Path(path);
return true;
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"java.nio.file.NoSuchFileException")){
return false;
} else {
throw ignore;
}
}
});

Clazz.newMeth(C$, 'readSymbolicLink$java_nio_file_Path',  function (link) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

C$.$static$=function(){C$.$static$=0;
C$.lock= Clazz.new_();
C$.loadingProviders=false;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

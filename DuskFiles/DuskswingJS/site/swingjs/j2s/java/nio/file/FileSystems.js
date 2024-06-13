(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.net.URI',['swingjs.JSFileSystem','.JSFileSystemProvider'],'java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileSystems");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['defaultFileSystem','java.nio.file.FileSystem']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'defaultFileSystem$',  function () {
return C$.getDefaultProvider$().getFileSystem$java_net_URI($I$(1).create$S("file:///"));
}, 1);

Clazz.newMeth(C$, 'getDefaultProvider$',  function () {
return Clazz.new_($I$(2,1).c$$S,["file"]);
}, 1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return C$.defaultFileSystem;
}, 1);

Clazz.newMeth(C$, 'getFileSystem$java_net_URI',  function (uri) {
return C$.getDefaultProvider$().getFileSystem$java_net_URI(uri);
}, 1);

Clazz.newMeth(C$, 'newFileSystem$java_net_URI$java_util_Map',  function (uri, env) {
return C$.newFileSystem$java_net_URI$java_util_Map$ClassLoader(uri, env, null);
}, 1);

Clazz.newMeth(C$, 'newFileSystem$java_net_URI$java_util_Map$ClassLoader',  function (uri, env, loader) {
return C$.getDefaultProvider$().getFileSystem$java_net_URI(uri);
}, 1);

Clazz.newMeth(C$, 'newFileSystem$java_nio_file_Path$ClassLoader',  function (path, loader) {
if (path == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var env=$I$(3).emptyMap$();
return C$.getDefaultProvider$().newFileSystem$java_nio_file_Path$java_util_Map(path, env);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.defaultFileSystem=C$.defaultFileSystem$();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

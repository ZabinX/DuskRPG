(function(){var P$=Clazz.newPackage("javax.swing.filechooser"),I$=[[0,'javax.swing.filechooser.GenericFileSystemView','java.lang.ref.WeakReference','java.io.File',['javax.swing.filechooser.FileSystemView','.FileSystemRoot']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileSystemView", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FileSystemRoot',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['genericFileSystemView','javax.swing.filechooser.FileSystemView']]]

Clazz.newMeth(C$, 'getFileSystemView$',  function () {
if (C$.genericFileSystemView == null ) {
C$.genericFileSystemView=Clazz.new_($I$(1,1));
}return C$.genericFileSystemView;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var weakReference=Clazz.new_($I$(2,1).c$$O,[this]);
}, 1);

Clazz.newMeth(C$, 'isRoot$java_io_File',  function (f) {
if (f == null  || !f.isAbsolute$() ) {
return false;
}var roots=this.getRoots$();
for (var root, $root = 0, $$root = roots; $root<$$root.length&&((root=($$root[$root])),1);$root++) {
if (root.equals$O(f)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'isTraversable$java_io_File',  function (f) {
return Boolean.valueOf$Z(f.isDirectory$());
});

Clazz.newMeth(C$, 'getSystemDisplayName$java_io_File',  function (f) {
if (f == null ) {
return null;
}return f.getPath$();
});

Clazz.newMeth(C$, 'getSystemTypeDescription$java_io_File',  function (f) {
return null;
});

Clazz.newMeth(C$, 'getSystemIcon$java_io_File',  function (f) {
return null;
});

Clazz.newMeth(C$, 'isParent$java_io_File$java_io_File',  function (folder, file) {
if (folder == null  || file == null  ) {
return false;
}return folder.equals$O(file.getParentFile$());
});

Clazz.newMeth(C$, 'getChild$java_io_File$S',  function (parent, fileName) {
return this.createFileObject$java_io_File$S(parent, fileName);
});

Clazz.newMeth(C$, 'isFileSystem$java_io_File',  function (f) {
return true;
});

Clazz.newMeth(C$, 'isHiddenFile$java_io_File',  function (f) {
return f.isHidden$();
});

Clazz.newMeth(C$, 'isFileSystemRoot$java_io_File',  function (dir) {
return dir.getAbsolutePath$().equals$O("/");
});

Clazz.newMeth(C$, 'isDrive$java_io_File',  function (dir) {
return false;
});

Clazz.newMeth(C$, 'isFloppyDrive$java_io_File',  function (dir) {
return false;
});

Clazz.newMeth(C$, 'isComputerNode$java_io_File',  function (dir) {
return false;
});

Clazz.newMeth(C$, 'getRoots$',  function () {
return Clazz.array($I$(3), -1, [this.createFileSystemRoot$java_io_File(Clazz.new_($I$(3,1).c$$S,["\\"]))]);
});

Clazz.newMeth(C$, 'getHomeDirectory$',  function () {
return this.createFileObject$S(System.getProperty$S("user.home"));
});

Clazz.newMeth(C$, 'getDefaultDirectory$',  function () {
return Clazz.new_([System.getProperty$S("java.io.tmpdir")],$I$(3,1).c$$S);
});

Clazz.newMeth(C$, 'createFileObject$java_io_File$S',  function (dir, filename) {
if (dir == null ) {
return Clazz.new_($I$(3,1).c$$S,[filename]);
} else {
return Clazz.new_($I$(3,1).c$$java_io_File$S,[dir, filename]);
}});

Clazz.newMeth(C$, 'createFileObject$S',  function (path) {
var f=Clazz.new_($I$(3,1).c$$S,[path]);
if (this.isFileSystemRoot$java_io_File(f)) {
f=this.createFileSystemRoot$java_io_File(f);
}return f;
});

Clazz.newMeth(C$, 'getFiles$java_io_File$Z',  function (dir, useFileHiding) {
return dir.listFiles$();
});

Clazz.newMeth(C$, 'getParentDirectory$java_io_File',  function (dir) {
if (dir == null  || !dir.exists$() ) {
return null;
}return dir.getParentFile$();
});

Clazz.newMeth(C$, 'createFileSystemRoot$java_io_File',  function (f) {
return Clazz.new_($I$(4,1).c$$java_io_File,[f]);
});

C$.$static$=function(){C$.$static$=0;
C$.genericFileSystemView=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileSystemView, "FileSystemRoot", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.File');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (f) {
;C$.superclazz.c$$java_io_File$S.apply(this,[f, ""]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isDirectory$',  function () {
return true;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.getPath$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

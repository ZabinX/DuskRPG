(function(){var P$=java.io,p$1={},I$=[[0,'java.io.FileSystem','java.net.URL','java.net.URI','Error','java.util.ArrayList','java.util.Random','java.nio.file.FileSystems']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "File", null, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['秘isTempFile'],'I',['prefixLength'],'J',['lastModified'],'S',['path'],'O',['秘bytes','byte[]','filePath','java.nio.file.Path']]
,['C',['separatorChar'],'S',['separator','temporaryDirectory'],'O',['fs','java.io.FileSystem']]]

Clazz.newMeth(C$, 'getPrefixLength$',  function () {
return this.prefixLength;
});

Clazz.newMeth(C$, 'c$$S',  function (pathname) {
C$.c$$S$S.apply(this, ["", pathname]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (parent, child) {
;C$.$init$.apply(this);
if (child == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (parent != null ) {
if (parent.equals$O("") && !child.startsWith$S("/") ) {
this.path=p$1.resolve$S$S.apply(this, [".", C$.fs.normalize$S(child)]);
} else {
this.path=p$1.resolve$S$S.apply(this, [C$.fs.normalize$S(parent), C$.fs.normalize$S(child)]);
}} else {
this.path=p$1.resolve$S$S.apply(this, [".", C$.fs.normalize$S(child)]);
}this.prefixLength=this.path.lastIndexOf$S("/") + 1;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S',  function (parent, child) {
C$.c$$S$S.apply(this, [parent == null  ? null : parent.getPath$(), child]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URI',  function (uri) {
;C$.$init$.apply(this);
var err=null;
var scheme;
var p;
if (!uri.isAbsolute$()) err=("URI is not absolute");
 else if (uri.isOpaque$()) err=("URI is not hierarchical");
 else if (((scheme=uri.getScheme$()) == null ) || !scheme.equalsIgnoreCase$S("file") ) err=("URI scheme is not \"file\"");
 else if (uri.getAuthority$() != null ) err=("URI has an authority component");
 else if (uri.getFragment$() != null ) err=("URI has a fragment component");
 else if (uri.getQuery$() != null ) err=("URI has a query component");
 else if ((p=uri.getPath$()).equals$O("")) err=("URI path component is empty");
 else {
p=C$.fs.fromURIPath$S(p);
this.path=(p);
this.prefixLength=C$.fs.prefixLength$S(this.path);
this.秘bytes=uri.秘bytes;
return;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[err]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (pathname, prefixLength) {
;C$.$init$.apply(this);
this.path=pathname;
this.prefixLength=prefixLength;
}, 1);

Clazz.newMeth(C$, 'c$$S$java_io_File',  function (child, parent) {
;C$.$init$.apply(this);
this.path=p$1.resolve$S$S.apply(this, [parent.path, child]);
this.prefixLength=parent.prefixLength;
}, 1);

Clazz.newMeth(C$, 'resolve$S$S',  function (path, child) {
if (path === "."  && child.startsWith$S("./") ) return child;
if (child.length$() > 0 && !child.startsWith$S("/")  && !path.endsWith$S("/") ) path+="/";
path=path + child;
this.秘isTempFile=path.startsWith$S(C$.temporaryDirectory);
return path;
}, p$1);

Clazz.newMeth(C$, 'getName$',  function () {
var index=this.path.lastIndexOf$I(C$.separatorChar);
if (index < this.prefixLength) return this.path.substring$I(this.prefixLength);
return this.path.substring$I(index + 1);
});

Clazz.newMeth(C$, 'getParent$',  function () {
var index=this.path.lastIndexOf$I(C$.separatorChar);
if (index < this.prefixLength) {
if ((this.prefixLength > 0) && (this.path.length$() > this.prefixLength) ) return this.path.substring$I$I(0, this.prefixLength);
return null;
}return this.path.substring$I$I(0, index);
});

Clazz.newMeth(C$, 'getParentFile$',  function () {
var p=this.getParent$();
if (p == null ) return null;
return Clazz.new_(C$.c$$S$I,[p, this.prefixLength]);
});

Clazz.newMeth(C$, 'getPath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'isAbsolute$',  function () {
switch (this.path.indexOf$S("/")) {
case 0:
return true;
case 2:
return this.path.indexOf$S(":") == 1;
}
return false;
});

Clazz.newMeth(C$, 'getAbsolutePath$',  function () {
return C$.fs.resolve$java_io_File(this);
});

Clazz.newMeth(C$, 'getAbsoluteFile$',  function () {
var absPath=this.getAbsolutePath$();
return Clazz.new_(C$.c$$S$I,[absPath, C$.fs.prefixLength$S(absPath)]);
});

Clazz.newMeth(C$, 'getCanonicalPath$',  function () {
return this.path.replaceAll$S$S("\\\\", "/");
});

Clazz.newMeth(C$, 'getCanonicalFile$',  function () {
return this;
});

Clazz.newMeth(C$, 'slashify$S$Z',  function (path, isDirectory) {
var p=path;
p=p.replaceAll$S$S("\\\\", "/");
if (!p.startsWith$S("/")) p="/" + p;
if (!p.endsWith$S("/") && isDirectory ) p=p + "/";
return p;
}, 1);

Clazz.newMeth(C$, 'toURL$',  function () {
return Clazz.new_(["file", "", C$.slashify$S$Z(this.getAbsolutePath$(), false)],$I$(2,1).c$$S$S$S);
});

Clazz.newMeth(C$, 'toURI$',  function () {
try {
var sp=C$.slashify$S$Z(this.getAbsoluteFile$().getPath$(), false);
if (sp.startsWith$S("//")) sp="file:" + sp;
var uri=Clazz.new_($I$(3,1).c$$S$S$S$S,["file", null, sp, null]);
uri.秘bytes=this.秘bytes;
return uri;
} catch (x) {
if (Clazz.exceptionOf(x,"java.net.URISyntaxException")){
throw Clazz.new_($I$(4,1).c$$Throwable,[x]);
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'canRead$',  function () {
return true;
});

Clazz.newMeth(C$, 'canWrite$',  function () {
return true;
});

Clazz.newMeth(C$, 'exists$',  function () {
return this.path.indexOf$S("!/") < 0 && (C$.fs._exists$java_io_File(this) || C$.fs._isDir$java_io_File(this) ) ;
});

Clazz.newMeth(C$, 'isDirectory$',  function () {
return this.path.indexOf$S("!/") < 0 && C$.fs._isDir$java_io_File(this) ;
});

Clazz.newMeth(C$, 'isFile$',  function () {
return true;
});

Clazz.newMeth(C$, 'isHidden$',  function () {
return false;
});

Clazz.newMeth(C$, 'length$',  function () {
return C$.fs.getLength$java_io_File(this);
});

Clazz.newMeth(C$, 'createNewFile$',  function () {
return true;
});

Clazz.newMeth(C$, 'delete$',  function () {
return C$.fs.delete$java_io_File(this);
});

Clazz.newMeth(C$, 'deleteOnExit$',  function () {
});

Clazz.newMeth(C$, 'list$',  function () {
if (C$.fs == null ) throw Clazz.new_(Clazz.load('java.security.AccessControlException').c$$S,["access denied"]);
return C$.fs.list$java_io_File(this);
});

Clazz.newMeth(C$, 'list$java_io_FilenameFilter',  function (filter) {
var names=this.list$();
if ((names == null ) || (filter == null ) ) {
return names;
}var v=Clazz.new_($I$(5,1));
for (var i=0; i < names.length; i++) {
if (filter.accept$java_io_File$S(this, names[i])) {
v.add$O(names[i]);
}}
return (v.toArray$OA(Clazz.array(String, [v.size$()])));
});

Clazz.newMeth(C$, 'listFiles$',  function () {
var ss=this.list$();
if (ss == null ) return null;
var n=ss.length;
var fs=Clazz.array(C$, [n]);
for (var i=0; i < n; i++) {
fs[i]=Clazz.new_(C$.c$$S$java_io_File,[ss[i], this]);
}
return fs;
});

Clazz.newMeth(C$, 'listFiles$java_io_FilenameFilter',  function (filter) {
var ss=this.list$();
if (ss == null ) return null;
var files=Clazz.new_($I$(5,1));
for (var s, $s = 0, $$s = ss; $s<$$s.length&&((s=($$s[$s])),1);$s++) if ((filter == null ) || filter.accept$java_io_File$S(this, s) ) files.add$O(Clazz.new_(C$.c$$S$java_io_File,[s, this]));

return files.toArray$OA(Clazz.array(C$, [files.size$()]));
});

Clazz.newMeth(C$, 'listFiles$java_io_FileFilter',  function (filter) {
var ss=this.list$();
if (ss == null ) return null;
var files=Clazz.new_($I$(5,1));
for (var s, $s = 0, $$s = ss; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
var f=Clazz.new_(C$.c$$S$java_io_File,[s, this]);
if ((filter == null ) || filter.accept$java_io_File(f) ) files.add$O(f);
}
return files.toArray$OA(Clazz.array(C$, [files.size$()]));
});

Clazz.newMeth(C$, 'mkdir$',  function () {
return true;
});

Clazz.newMeth(C$, 'mkdirs$',  function () {
return true;
});

Clazz.newMeth(C$, 'renameTo$java_io_File',  function (dest) {
this.path=dest.path;
return true;
});

Clazz.newMeth(C$, 'setLastModified$J',  function (time) {
this.lastModified=time;
return true;
});

Clazz.newMeth(C$, 'setReadOnly$',  function () {
return true;
});

Clazz.newMeth(C$, 'setWritable$Z$Z',  function (writable, ownerOnly) {
return true;
});

Clazz.newMeth(C$, 'setWritable$Z',  function (writable) {
return this.setWritable$Z$Z(writable, true);
});

Clazz.newMeth(C$, 'setReadable$Z$Z',  function (readable, ownerOnly) {
return true;
});

Clazz.newMeth(C$, 'setReadable$Z',  function (readable) {
return true;
});

Clazz.newMeth(C$, 'setExecutable$Z$Z',  function (executable, ownerOnly) {
return false;
});

Clazz.newMeth(C$, 'setExecutable$Z',  function (executable) {
return false;
});

Clazz.newMeth(C$, 'canExecute$',  function () {
return false;
});

Clazz.newMeth(C$, 'generateFile$S$S$java_io_File',  function (prefix, suffix, dir) {
var n=Clazz.new_($I$(6,1)).nextInt$();
if (Long.$eq(n,[0,549755813888,-1] )) {
n=0;
} else {
n=Math.abs$J(n);
}var f=Clazz.new_(C$.c$$java_io_File$S,[dir, prefix + Long.toString$J(n) + suffix ]);
f.秘isTempFile=true;
return f;
}, 1);

Clazz.newMeth(C$, 'createTempFile0$S$S$java_io_File$Z',  function (prefix, suffix, directory, restrictive) {
if (prefix == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (prefix.length$() < 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Prefix string too short"]);
var s=(suffix == null ) ? ".tmp" : suffix;
directory=Clazz.new_(C$.c$$S,[C$.temporaryDirectory + (directory == null  ? "" : directory)]);
return C$.generateFile$S$S$java_io_File(prefix, s, directory);
}, 1);

Clazz.newMeth(C$, 'createTempFile$S$S$java_io_File',  function (prefix, suffix, directory) {
return C$.createTempFile0$S$S$java_io_File$Z(prefix, suffix, directory, false);
}, 1);

Clazz.newMeth(C$, 'createTempFile$S$S',  function (prefix, suffix) {
return C$.createTempFile0$S$S$java_io_File$Z(prefix, suffix, null, false);
}, 1);

Clazz.newMeth(C$, ['compareTo$java_io_File','compareTo$O'],  function (pathname) {
return this.getPath$().compareTo$S(pathname.getPath$());
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if ((obj != null ) && (Clazz.instanceOf(obj, "java.io.File")) ) {
return this.compareTo$java_io_File(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
try {
return this.getCanonicalPath$().hashCode$() | 1234321;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return 0;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var s=this.getPath$();
return (s.startsWith$S("./") ? s.substring$I(2) : s);
});

Clazz.newMeth(C$, 'toPath$',  function () {
var result=this.filePath;
if (result == null ) {
{
result=this.filePath;
if (result == null ) {
result=$I$(7).getDefault$().getPath$S$SA(this.path, Clazz.array(String, -1, []));
(result).set$BA$java_io_File(this.秘bytes, this);
this.filePath=result;
}}}return result;
});

Clazz.newMeth(C$, 'lastModified$',  function () {
return this.lastModified;
});

C$.$static$=function(){C$.$static$=0;
C$.fs=$I$(1).getFileSystem$();
C$.separatorChar=C$.fs.getSeparator$();
C$.separator="" + C$.separatorChar;
C$.temporaryDirectory=System.getProperty$S("java.io.tmpdir");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

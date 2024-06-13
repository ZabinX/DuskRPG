(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.security.AccessController','sun.nio.fs.DefaultFileTypeDetector','java.util.ArrayList','java.util.ServiceLoader','java.nio.file.spi.FileTypeDetector','java.util.HashSet','java.util.Collections','java.nio.file.attribute.FileAttribute',['java.nio.file.Files','.AcceptAllFilter'],'java.util.EnumSet','java.nio.file.StandardOpenOption','java.nio.file.LinkOption','java.nio.file.TempFileHelper','java.util.Objects','java.nio.file.CopyMoveHelper',['java.nio.file.Files','.FileTypeDetectors'],'java.nio.file.attribute.PosixFileAttributes','java.nio.file.attribute.PosixFileAttributeView','java.nio.file.attribute.FileOwnerAttributeView','java.nio.file.attribute.BasicFileAttributes','java.nio.file.attribute.BasicFileAttributeView','AssertionError','java.nio.file.AccessMode','java.nio.file.FileTreeWalker',['java.nio.file.FileTreeWalker','.EventType'],'java.nio.file.FileVisitResult','java.nio.file.FileVisitOption','java.io.InputStreamReader','java.nio.file.OpenOption','java.io.BufferedReader','java.nio.charset.StandardCharsets','java.io.OutputStreamWriter','java.io.BufferedWriter','java.nio.file.StandardCopyOption','OutOfMemoryError','java.util.Arrays','java.nio.channels.Channels','java.util.stream.StreamSupport','java.util.Spliterators','java.nio.file.FileTreeIterator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Files", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AcceptAllFilter',10],['FileTypeDetectors',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'provider$java_nio_file_Path',  function (path) {
return path.getFileSystem$().provider$();
}, 1);

Clazz.newMeth(C$, 'asUncheckedRunnable$java_io_Closeable',  function (c) {
return ((P$.Files$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Files$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
try {
this.$finals$.c.close$.apply(this.$finals$.c, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[e]);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.Files$lambda1.$init$,[this, {c:c}]));
}, 1);

Clazz.newMeth(C$, 'newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA',  function (path, options) {
return C$.provider$java_nio_file_Path(path).newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA(path, options);
}, 1);

Clazz.newMeth(C$, 'newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA',  function (path, options) {
return C$.provider$java_nio_file_Path(path).newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA(path, options);
}, 1);

Clazz.newMeth(C$, 'newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA',  function (path, options, attrs) {
return C$.provider$java_nio_file_Path(path).newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, options, attrs);
}, 1);

Clazz.newMeth(C$, 'newByteChannel$java_nio_file_Path$java_nio_file_OpenOptionA',  function (path, options) {
var set=Clazz.new_($I$(6,1).c$$I,[options.length]);
$I$(7).addAll$java_util_Collection$OA(set, options);
return C$.newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, set, Clazz.array($I$(8), -1, []));
}, 1);

Clazz.newMeth(C$, 'newDirectoryStream$java_nio_file_Path',  function (dir) {
return C$.provider$java_nio_file_Path(dir).newDirectoryStream$java_nio_file_Path$java_nio_file_DirectoryStream_Filter(dir, $I$(9).FILTER);
}, 1);

Clazz.newMeth(C$, 'newDirectoryStream$java_nio_file_Path$S',  function (dir, glob) {
if (glob.equals$O("*")) return C$.newDirectoryStream$java_nio_file_Path(dir);
var fs=dir.getFileSystem$();
var matcher=fs.getPathMatcher$S("glob:" + glob);
var filter=((P$.Files$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Files$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.nio.file.DirectoryStream','java.nio.file.DirectoryStream.Filter']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['accept$java_nio_file_Path','accept$O'],  function (entry) {
return this.$finals$.matcher.matches$java_nio_file_Path(entry.getFileName$());
});
})()
), Clazz.new_(P$.Files$1.$init$,[this, {matcher:matcher}]));
return fs.provider$().newDirectoryStream$java_nio_file_Path$java_nio_file_DirectoryStream_Filter(dir, filter);
}, 1);

Clazz.newMeth(C$, 'newDirectoryStream$java_nio_file_Path$java_nio_file_DirectoryStream_Filter',  function (dir, filter) {
return C$.provider$java_nio_file_Path(dir).newDirectoryStream$java_nio_file_Path$java_nio_file_DirectoryStream_Filter(dir, filter);
}, 1);

Clazz.newMeth(C$, 'createFile$java_nio_file_Path$java_nio_file_attribute_FileAttributeA',  function (path, attrs) {
var options=$I$(10,"of$Enum$Enum",[$I$(11).CREATE_NEW, $I$(11).WRITE]);
C$.newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA(path, options, attrs).close$();
return path;
}, 1);

Clazz.newMeth(C$, 'createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA',  function (dir, attrs) {
C$.provider$java_nio_file_Path(dir).createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(dir, attrs);
return dir;
}, 1);

Clazz.newMeth(C$, 'createDirectories$java_nio_file_Path$java_nio_file_attribute_FileAttributeA',  function (dir, attrs) {
return dir;
}, 1);

Clazz.newMeth(C$, 'createAndCheckIsDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA',  function (dir, attrs) {
try {
C$.createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(dir, attrs);
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.file.FileAlreadyExistsException")){
if (!C$.isDirectory$java_nio_file_Path$java_nio_file_LinkOptionA(dir, Clazz.array($I$(12), -1, [$I$(12).NOFOLLOW_LINKS]))) throw x;
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'createTempFile$java_nio_file_Path$S$S$java_nio_file_attribute_FileAttributeA',  function (dir, prefix, suffix, attrs) {
return $I$(13,"createTempFile$java_nio_file_Path$S$S$java_nio_file_attribute_FileAttributeA",[$I$(14).requireNonNull$O(dir), prefix, suffix, attrs]);
}, 1);

Clazz.newMeth(C$, 'createTempFile$S$S$java_nio_file_attribute_FileAttributeA',  function (prefix, suffix, attrs) {
return $I$(13).createTempFile$java_nio_file_Path$S$S$java_nio_file_attribute_FileAttributeA(null, prefix, suffix, attrs);
}, 1);

Clazz.newMeth(C$, 'createTempDirectory$java_nio_file_Path$S$java_nio_file_attribute_FileAttributeA',  function (dir, prefix, attrs) {
return $I$(13,"createTempDirectory$java_nio_file_Path$S$java_nio_file_attribute_FileAttributeA",[$I$(14).requireNonNull$O(dir), prefix, attrs]);
}, 1);

Clazz.newMeth(C$, 'createTempDirectory$S$java_nio_file_attribute_FileAttributeA',  function (prefix, attrs) {
return $I$(13).createTempDirectory$java_nio_file_Path$S$java_nio_file_attribute_FileAttributeA(null, prefix, attrs);
}, 1);

Clazz.newMeth(C$, 'createSymbolicLink$java_nio_file_Path$java_nio_file_Path$java_nio_file_attribute_FileAttributeA',  function (link, target, attrs) {
C$.provider$java_nio_file_Path(link).createSymbolicLink$java_nio_file_Path$java_nio_file_Path$java_nio_file_attribute_FileAttributeA(link, target, attrs);
return link;
}, 1);

Clazz.newMeth(C$, 'createLink$java_nio_file_Path$java_nio_file_Path',  function (link, existing) {
C$.provider$java_nio_file_Path(link).createLink$java_nio_file_Path$java_nio_file_Path(link, existing);
return link;
}, 1);

Clazz.newMeth(C$, 'delete$java_nio_file_Path',  function (path) {
C$.provider$java_nio_file_Path(path).delete$java_nio_file_Path(path);
}, 1);

Clazz.newMeth(C$, 'deleteIfExists$java_nio_file_Path',  function (path) {
return C$.provider$java_nio_file_Path(path).deleteIfExists$java_nio_file_Path(path);
}, 1);

Clazz.newMeth(C$, 'copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA',  function (source, target, options) {
var provider=C$.provider$java_nio_file_Path(source);
if (C$.provider$java_nio_file_Path(target) === provider ) {
provider.copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA(source, target, options);
} else {
$I$(15).copyToForeignTarget$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA(source, target, options);
}return target;
}, 1);

Clazz.newMeth(C$, 'move$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA',  function (source, target, options) {
var provider=C$.provider$java_nio_file_Path(source);
if (C$.provider$java_nio_file_Path(target) === provider ) {
provider.move$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA(source, target, options);
} else {
$I$(15).moveToForeignTarget$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA(source, target, options);
}return target;
}, 1);

Clazz.newMeth(C$, 'readSymbolicLink$java_nio_file_Path',  function (link) {
return C$.provider$java_nio_file_Path(link).readSymbolicLink$java_nio_file_Path(link);
}, 1);

Clazz.newMeth(C$, 'getFileStore$java_nio_file_Path',  function (path) {
return C$.provider$java_nio_file_Path(path).getFileStore$java_nio_file_Path(path);
}, 1);

Clazz.newMeth(C$, 'isSameFile$java_nio_file_Path$java_nio_file_Path',  function (path, path2) {
return C$.provider$java_nio_file_Path(path).isSameFile$java_nio_file_Path$java_nio_file_Path(path, path2);
}, 1);

Clazz.newMeth(C$, 'isHidden$java_nio_file_Path',  function (path) {
return C$.provider$java_nio_file_Path(path).isHidden$java_nio_file_Path(path);
}, 1);

Clazz.newMeth(C$, 'probeContentType$java_nio_file_Path',  function (path) {
for (var detector, $detector = $I$(16).installeDetectors.iterator$(); $detector.hasNext$()&&((detector=($detector.next$())),1);) {
var result=detector.probeContentType$java_nio_file_Path(path);
if (result != null ) return result;
}
return $I$(16).defaultFileTypeDetector.probeContentType$java_nio_file_Path(path);
}, 1);

Clazz.newMeth(C$, 'getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA',  function (path, type, options) {
return C$.provider$java_nio_file_Path(path).getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, type, options);
}, 1);

Clazz.newMeth(C$, 'readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA',  function (path, type, options) {
return C$.provider$java_nio_file_Path(path).readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, type, options);
}, 1);

Clazz.newMeth(C$, 'setAttribute$java_nio_file_Path$S$O$java_nio_file_LinkOptionA',  function (path, attribute, value, options) {
C$.provider$java_nio_file_Path(path).setAttribute$java_nio_file_Path$S$O$java_nio_file_LinkOptionA(path, attribute, value, options);
return path;
}, 1);

Clazz.newMeth(C$, 'getAttribute$java_nio_file_Path$S$java_nio_file_LinkOptionA',  function (path, attribute, options) {
if (attribute.indexOf$I("*") >= 0 || attribute.indexOf$I(",") >= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[attribute]);
var map=C$.readAttributes$java_nio_file_Path$S$java_nio_file_LinkOptionA(path, attribute, options);
Clazz.assert(C$, this, function(){return map.size$() == 1});
var name;
var pos=attribute.indexOf$I(":");
if (pos == -1) {
name=attribute;
} else {
name=(pos == attribute.length$()) ? "" : attribute.substring$I(pos + 1);
}return map.get$O(name);
}, 1);

Clazz.newMeth(C$, 'readAttributes$java_nio_file_Path$S$java_nio_file_LinkOptionA',  function (path, attributes, options) {
return C$.provider$java_nio_file_Path(path).readAttributes$java_nio_file_Path$S$java_nio_file_LinkOptionA(path, attributes, options);
}, 1);

Clazz.newMeth(C$, 'getPosixFilePermissions$java_nio_file_Path$java_nio_file_LinkOptionA',  function (path, options) {
return C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(17),['group$','owner$','permissions$']), options).permissions$();
}, 1);

Clazz.newMeth(C$, 'setPosixFilePermissions$java_nio_file_Path$java_util_Set',  function (path, perms) {
var view=C$.getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(18),['name$','readAttributes$','setGroup$java_nio_file_attribute_GroupPrincipal','setPermissions$java_util_Set']), Clazz.array($I$(12), -1, []));
if (view == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
view.setPermissions$java_util_Set(perms);
return path;
}, 1);

Clazz.newMeth(C$, 'getOwner$java_nio_file_Path$java_nio_file_LinkOptionA',  function (path, options) {
var view=C$.getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(19),['getOwner$','name$','setOwner$java_nio_file_attribute_UserPrincipal']), options);
if (view == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
return view.getOwner$();
}, 1);

Clazz.newMeth(C$, 'setOwner$java_nio_file_Path$java_nio_file_attribute_UserPrincipal',  function (path, owner) {
var view=C$.getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(19),['getOwner$','name$','setOwner$java_nio_file_attribute_UserPrincipal']), Clazz.array($I$(12), -1, []));
if (view == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
view.setOwner$java_nio_file_attribute_UserPrincipal(owner);
return path;
}, 1);

Clazz.newMeth(C$, 'isSymbolicLink$java_nio_file_Path',  function (path) {
try {
return C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(20),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), Clazz.array($I$(12), -1, [$I$(12).NOFOLLOW_LINKS])).isSymbolicLink$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
return false;
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'isDirectory$java_nio_file_Path$java_nio_file_LinkOptionA',  function (path, options) {
try {
return C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(20),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), options).isDirectory$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
return false;
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'isRegularFile$java_nio_file_Path$java_nio_file_LinkOptionA',  function (path, options) {
try {
return C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(20),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), options).isRegularFile$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
return false;
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'getLastModifiedTime$java_nio_file_Path$java_nio_file_LinkOptionA',  function (path, options) {
return C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(20),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), options).lastModifiedTime$();
}, 1);

Clazz.newMeth(C$, 'setLastModifiedTime$java_nio_file_Path$java_nio_file_attribute_FileTime',  function (path, time) {
C$.getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(21),['name$','readAttributes$','setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime']), Clazz.array($I$(12), -1, [])).setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime(time, null, null);
return path;
}, 1);

Clazz.newMeth(C$, 'size$java_nio_file_Path',  function (path) {
return C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(20),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), Clazz.array($I$(12), -1, [])).size$();
}, 1);

Clazz.newMeth(C$, 'followLinks$java_nio_file_LinkOptionA',  function (options) {
var followLinks=true;
for (var opt, $opt = 0, $$opt = options; $opt<$$opt.length&&((opt=($$opt[$opt])),1);$opt++) {
if (opt === $I$(12).NOFOLLOW_LINKS ) {
followLinks=false;
continue;
}if (opt == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
throw Clazz.new_($I$(22,1).c$$O,["Should not get here"]);
}
return followLinks;
}, 1);

Clazz.newMeth(C$, 'exists$java_nio_file_Path$java_nio_file_LinkOptionA',  function (path, options) {
try {
if (C$.followLinks$java_nio_file_LinkOptionA(options)) {
C$.provider$java_nio_file_Path(path).checkAccess$java_nio_file_Path$java_nio_file_AccessModeA(path, Clazz.array($I$(23), -1, []));
} else {
C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(20),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), Clazz.array($I$(12), -1, [$I$(12).NOFOLLOW_LINKS]));
}return true;
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
return false;
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'notExists$java_nio_file_Path$java_nio_file_LinkOptionA',  function (path, options) {
try {
if (C$.followLinks$java_nio_file_LinkOptionA(options)) {
C$.provider$java_nio_file_Path(path).checkAccess$java_nio_file_Path$java_nio_file_AccessModeA(path, Clazz.array($I$(23), -1, []));
} else {
C$.readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA(path, Clazz.getClass($I$(20),['creationTime$','fileKey$','isDirectory$','isOther$','isRegularFile$','isSymbolicLink$','lastAccessTime$','lastModifiedTime$','size$']), Clazz.array($I$(12), -1, [$I$(12).NOFOLLOW_LINKS]));
}return false;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.nio.file.NoSuchFileException")){
var x = e$$;
{
return true;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
return false;
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'isAccessible$java_nio_file_Path$java_nio_file_AccessModeA',  function (path, modes) {
try {
C$.provider$java_nio_file_Path(path).checkAccess$java_nio_file_Path$java_nio_file_AccessModeA(path, modes);
return true;
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
return false;
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'isReadable$java_nio_file_Path',  function (path) {
return C$.isAccessible$java_nio_file_Path$java_nio_file_AccessModeA(path, Clazz.array($I$(23), -1, [$I$(23).READ]));
}, 1);

Clazz.newMeth(C$, 'isWritable$java_nio_file_Path',  function (path) {
return C$.isAccessible$java_nio_file_Path$java_nio_file_AccessModeA(path, Clazz.array($I$(23), -1, [$I$(23).WRITE]));
}, 1);

Clazz.newMeth(C$, 'isExecutable$java_nio_file_Path',  function (path) {
return C$.isAccessible$java_nio_file_Path$java_nio_file_AccessModeA(path, Clazz.array($I$(23), -1, [$I$(23).EXECUTE]));
}, 1);

Clazz.newMeth(C$, 'walkFileTree$java_nio_file_Path$java_util_Set$I$java_nio_file_FileVisitor',  function (start, options, maxDepth, visitor) {
try {
var walker=Clazz.new_($I$(24,1).c$$java_util_Collection$I,[options, maxDepth]);
try {
var ev=walker.walk$java_nio_file_Path(start);
do {
var result;
switch (ev.type$()) {
case $I$(25).ENTRY:
var ioe=ev.ioeException$();
if (ioe == null ) {
Clazz.assert(C$, this, function(){return ev.attributes$() != null });
result=visitor.visitFile$O$java_nio_file_attribute_BasicFileAttributes(ev.file$(), ev.attributes$());
} else {
result=visitor.visitFileFailed$O$java_io_IOException(ev.file$(), ioe);
}break;
case $I$(25).START_DIRECTORY:
result=visitor.preVisitDirectory$O$java_nio_file_attribute_BasicFileAttributes(ev.file$(), ev.attributes$());
if (result === $I$(26).SKIP_SUBTREE  || result === $I$(26).SKIP_SIBLINGS  ) walker.pop$();
break;
case $I$(25).END_DIRECTORY:
result=visitor.postVisitDirectory$O$java_io_IOException(ev.file$(), ev.ioeException$());
if (result === $I$(26).SKIP_SIBLINGS ) result=$I$(26).CONTINUE;
break;
default:
throw Clazz.new_($I$(22,1).c$$O,["Should not get here"]);
}
if ($I$(14).requireNonNull$O(result) !== $I$(26).CONTINUE ) {
if (result === $I$(26).TERMINATE ) {
break;
} else if (result === $I$(26).SKIP_SIBLINGS ) {
walker.skipRemainingSiblings$();
}}ev=walker.next$();
} while (ev != null );

}finally{/*res*/walker&&walker.close$&&walker.close$();}
}finally{}
return start;
}, 1);

Clazz.newMeth(C$, 'walkFileTree$java_nio_file_Path$java_nio_file_FileVisitor',  function (start, visitor) {
return C$.walkFileTree$java_nio_file_Path$java_util_Set$I$java_nio_file_FileVisitor(start, $I$(10,"noneOf$Class",[Clazz.getClass($I$(27))]), 2147483647, visitor);
}, 1);

Clazz.newMeth(C$, 'newBufferedReader$java_nio_file_Path$java_nio_charset_Charset',  function (path, cs) {
var decoder=cs.toString();
var reader=Clazz.new_([C$.newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA(path, Clazz.array($I$(29), -1, [])), decoder],$I$(28,1).c$$java_io_InputStream$S);
return Clazz.new_($I$(30,1).c$$java_io_Reader,[reader]);
}, 1);

Clazz.newMeth(C$, 'newBufferedReader$java_nio_file_Path',  function (path) {
return C$.newBufferedReader$java_nio_file_Path$java_nio_charset_Charset(path, $I$(31).UTF_8);
}, 1);

Clazz.newMeth(C$, 'newBufferedWriter$java_nio_file_Path$java_nio_charset_Charset$java_nio_file_OpenOptionA',  function (path, cs, options) {
var encoder=cs.newEncoder$();
var writer=Clazz.new_([C$.newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA(path, options), encoder],$I$(32,1).c$$java_io_OutputStream$java_nio_charset_CharsetEncoder);
return Clazz.new_($I$(33,1).c$$java_io_Writer,[writer]);
}, 1);

Clazz.newMeth(C$, 'newBufferedWriter$java_nio_file_Path$java_nio_file_OpenOptionA',  function (path, options) {
return C$.newBufferedWriter$java_nio_file_Path$java_nio_charset_Charset$java_nio_file_OpenOptionA(path, $I$(31).UTF_8, options);
}, 1);

Clazz.newMeth(C$, 'copy$java_io_InputStream$java_io_OutputStream',  function (source, sink) {
var nread=0;
var buf=Clazz.array(Byte.TYPE, [8192]);
var n;
while ((n=source.read$BA(buf)) > 0){
sink.write$BA$I$I(buf, 0, n);
(nread=Long.$add(nread,(n)));
}
return nread;
}, 1);

Clazz.newMeth(C$, 'copy$java_io_InputStream$java_nio_file_Path$java_nio_file_CopyOptionA',  function ($in, target, options) {
$I$(14).requireNonNull$O($in);
var replaceExisting=false;
for (var opt, $opt = 0, $$opt = options; $opt<$$opt.length&&((opt=($$opt[$opt])),1);$opt++) {
if (opt === $I$(34).REPLACE_EXISTING ) {
replaceExisting=true;
} else {
if (opt == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["options contains \'null\'"]);
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[opt + " not supported"]);
}}}
var se=null;
if (replaceExisting) {
try {
C$.deleteIfExists$java_nio_file_Path(target);
} catch (x) {
if (Clazz.exceptionOf(x,"SecurityException")){
se=x;
} else {
throw x;
}
}
}var ostream;
try {
ostream=C$.newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA(target, Clazz.array($I$(29), -1, [$I$(11).CREATE_NEW, $I$(11).WRITE]));
} catch (x) {
if (Clazz.exceptionOf(x,"java.nio.file.FileAlreadyExistsException")){
if (se != null ) throw se;
throw x;
} else {
throw x;
}
}
try {
var out=ostream;
try {
return C$.copy$java_io_InputStream$java_io_OutputStream($in, out);

}finally{/*res*/out&&out.close$&&out.close$();}
}finally{}
}, 1);

Clazz.newMeth(C$, 'copy$java_nio_file_Path$java_io_OutputStream',  function (source, out) {
$I$(14).requireNonNull$O(out);
try {
var $in=C$.newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA(source, Clazz.array($I$(29), -1, []));
try {
return C$.copy$java_io_InputStream$java_io_OutputStream($in, out);

}finally{/*res*/$in&&$in.close$&&$in.close$();}
}finally{}
}, 1);

Clazz.newMeth(C$, 'read$java_io_InputStream$I',  function (source, initialSize) {
var capacity=initialSize;
var buf=Clazz.array(Byte.TYPE, [capacity]);
var nread=0;
var n;
for (; ; ) {
while ((n=source.read$BA$I$I(buf, nread, capacity - nread)) > 0)nread+=n;

if (n < 0 || (n=source.read$()) < 0 ) break;
if (capacity <= 2147483639 - capacity) {
capacity=Math.max(capacity << 1, 8192);
} else {
if (capacity == 2147483639) throw Clazz.new_($I$(35,1).c$$S,["Required array size too large"]);
capacity=2147483639;
}buf=$I$(36).copyOf$BA$I(buf, capacity);
buf[nread++]=(n|0);
}
return (capacity == nread) ? buf : $I$(36).copyOf$BA$I(buf, nread);
}, 1);

Clazz.newMeth(C$, 'readAllBytes$java_nio_file_Path',  function (path) {
var bytes=(path).秘bytes;
if (bytes == null ) {
try {
var sbc=C$.newByteChannel$java_nio_file_Path$java_nio_file_OpenOptionA(path, Clazz.array($I$(29), -1, []));
var $in=$I$(37).newInputStream$java_nio_channels_ReadableByteChannel(sbc);
try {
var size=sbc.size$();
if (Long.$gt(size,2147483639 )) throw Clazz.new_($I$(35,1).c$$S,["Required array size too large"]);
(path).秘bytes=bytes=C$.read$java_io_InputStream$I($in, Long.$ival(size));

}finally{/*res*/$in&&$in.close$&&$in.close$();sbc&&sbc.close$&&sbc.close$();}
}finally{}
}return bytes;
}, 1);

Clazz.newMeth(C$, 'readAllLines$java_nio_file_Path$java_nio_charset_Charset',  function (path, cs) {
try {
var reader=C$.newBufferedReader$java_nio_file_Path$java_nio_charset_Charset(path, cs);
try {
var result=Clazz.new_($I$(3,1));
for (; ; ) {
var line=reader.readLine$();
if (line == null ) break;
result.add$O(line);
}
return result;

}finally{/*res*/reader&&reader.close$&&reader.close$();}
}finally{}
}, 1);

Clazz.newMeth(C$, 'readAllLines$java_nio_file_Path',  function (path) {
return C$.readAllLines$java_nio_file_Path$java_nio_charset_Charset(path, $I$(31).UTF_8);
}, 1);

Clazz.newMeth(C$, 'write$java_nio_file_Path$BA$java_nio_file_OpenOptionA',  function (path, bytes, options) {
$I$(14).requireNonNull$O(bytes);
try {
var out=C$.newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA(path, options);
try {
var len=bytes.length;
var rem=len;
while (rem > 0){
var n=Math.min(rem, 8192);
out.write$BA$I$I(bytes, (len - rem), n);
rem-=n;
}

}finally{/*res*/out&&out.close$&&out.close$();}
}finally{}
return path;
}, 1);

Clazz.newMeth(C$, 'write$java_nio_file_Path$Iterable$java_nio_charset_Charset$java_nio_file_OpenOptionA',  function (path, lines, cs, options) {
$I$(14).requireNonNull$O(lines);
var encoder=cs.newEncoder$();
var out=C$.newOutputStream$java_nio_file_Path$java_nio_file_OpenOptionA(path, options);
try {
var writer=Clazz.new_([Clazz.new_($I$(32,1).c$$java_io_OutputStream$java_nio_charset_CharsetEncoder,[out, encoder])],$I$(33,1).c$$java_io_Writer);
try {
for (var line, $line = lines.iterator$(); $line.hasNext$()&&((line=($line.next$())),1);) {
writer.append$CharSequence(line);
writer.newLine$();
}

}finally{/*res*/writer&&writer.close$&&writer.close$();}
}finally{}
return path;
}, 1);

Clazz.newMeth(C$, 'write$java_nio_file_Path$Iterable$java_nio_file_OpenOptionA',  function (path, lines, options) {
return C$.write$java_nio_file_Path$Iterable$java_nio_charset_Charset$java_nio_file_OpenOptionA(path, lines, $I$(31).UTF_8, options);
}, 1);

Clazz.newMeth(C$, 'list$java_nio_file_Path',  function (dir) {
var ds=C$.newDirectoryStream$java_nio_file_Path(dir);
try {
var delegate=ds.iterator$();
var it=((P$.Files$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Files$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hasNext$',  function () {
try {
return this.$finals$.delegate.hasNext$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.DirectoryIteratorException")){
throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[e.getCause$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'next$',  function () {
try {
return this.$finals$.delegate.next$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.DirectoryIteratorException")){
throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[e.getCause$()]);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.Files$2.$init$,[this, {delegate:delegate}]));
return $I$(38,"stream$java_util_Spliterator$Z",[$I$(39).spliteratorUnknownSize$java_util_Iterator$I(it, 1), false]).onClose$Runnable(C$.asUncheckedRunnable$java_io_Closeable(ds));
} catch (e) {
if (Clazz.exceptionOf(e,"Error") || Clazz.exceptionOf(e,"RuntimeException")){
try {
ds.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
try {
e.addSuppressed$Throwable(ex);
} catch (ignore) {
}
} else {
throw ex;
}
}
throw e;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'walk$java_nio_file_Path$I$java_nio_file_FileVisitOptionA',  function (start, maxDepth, options) {
var iterator=Clazz.new_($I$(40,1).c$$java_nio_file_Path$I$java_nio_file_FileVisitOptionA,[start, maxDepth, options]);
try {
return $I$(38,"stream$java_util_Spliterator$Z",[$I$(39).spliteratorUnknownSize$java_util_Iterator$I(iterator, 1), false]).onClose$Runnable((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Files$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'run$',  function () { return $$.close$.apply($$,[])});
})()
)); return Clazz.new_(P$.Files$lambda2.$init$,[this, null])})(iterator)).map$java_util_function_Function(((P$.Files$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Files$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_nio_file_FileTreeWalker_Event','apply$O'],  function (entry) { return (entry.file$.apply(entry, []));});
})()
), Clazz.new_(P$.Files$lambda3.$init$,[this, null])));
} catch (e) {
if (Clazz.exceptionOf(e,"Error") || Clazz.exceptionOf(e,"RuntimeException")){
iterator.close$();
throw e;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'walk$java_nio_file_Path$java_nio_file_FileVisitOptionA',  function (start, options) {
return C$.walk$java_nio_file_Path$I$java_nio_file_FileVisitOptionA(start, 2147483647, options);
}, 1);

Clazz.newMeth(C$, 'find$java_nio_file_Path$I$java_util_function_BiPredicate$java_nio_file_FileVisitOptionA',  function (start, maxDepth, matcher, options) {
var iterator=Clazz.new_($I$(40,1).c$$java_nio_file_Path$I$java_nio_file_FileVisitOptionA,[start, maxDepth, options]);
try {
return $I$(38,"stream$java_util_Spliterator$Z",[$I$(39).spliteratorUnknownSize$java_util_Iterator$I(iterator, 1), false]).onClose$Runnable((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Files$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'run$',  function () { return $$.close$.apply($$,[])});
})()
)); return Clazz.new_(P$.Files$lambda4.$init$,[this, null])})(iterator)).filter$java_util_function_Predicate(((P$.Files$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Files$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$java_nio_file_FileTreeWalker_Event','test$O'],  function (entry) { return (this.$finals$.matcher.test$O$O.apply(this.$finals$.matcher, [entry.file$.apply(entry, []), entry.attributes$.apply(entry, [])]));});
})()
), Clazz.new_(P$.Files$lambda5.$init$,[this, {matcher:matcher}]))).map$java_util_function_Function(((P$.Files$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Files$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_nio_file_FileTreeWalker_Event','apply$O'],  function (entry) { return (entry.file$.apply(entry, []));});
})()
), Clazz.new_(P$.Files$lambda6.$init$,[this, null])));
} catch (e) {
if (Clazz.exceptionOf(e,"Error") || Clazz.exceptionOf(e,"RuntimeException")){
iterator.close$();
throw e;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'lines$java_nio_file_Path$java_nio_charset_Charset',  function (path, cs) {
var br=C$.newBufferedReader$java_nio_file_Path$java_nio_charset_Charset(path, cs);
try {
return br.lines$().onClose$Runnable(C$.asUncheckedRunnable$java_io_Closeable(br));
} catch (e) {
if (Clazz.exceptionOf(e,"Error") || Clazz.exceptionOf(e,"RuntimeException")){
try {
br.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
try {
e.addSuppressed$Throwable(ex);
} catch (ignore) {
}
} else {
throw ex;
}
}
throw e;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'lines$java_nio_file_Path',  function (path) {
return C$.lines$java_nio_file_Path$java_nio_charset_Charset(path, $I$(31).UTF_8);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Files, "AcceptAllFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.nio.file.DirectoryStream','java.nio.file.DirectoryStream.Filter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['FILTER','java.nio.file.Files.AcceptAllFilter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$java_nio_file_Path','accept$O'],  function (entry) {
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.FILTER=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Files, "FileTypeDetectors", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['defaultFileTypeDetector','java.nio.file.spi.FileTypeDetector','installeDetectors','java.util.List']]]

Clazz.newMeth(C$, 'createDefaultFileTypeDetector$',  function () {
return $I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.Files$FileTypeDetectors$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Files$FileTypeDetectors$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(2).create$();
});
})()
), Clazz.new_(P$.Files$FileTypeDetectors$1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'loadInstalledDetectors$',  function () {
return $I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.Files$FileTypeDetectors$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Files$FileTypeDetectors$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var list=Clazz.new_($I$(3,1));
var loader=$I$(4,"load$Class$ClassLoader",[Clazz.getClass($I$(5)), ClassLoader.getSystemClassLoader$()]);
for (var detector, $detector = loader.iterator$(); $detector.hasNext$()&&((detector=($detector.next$())),1);) {
list.add$O(detector);
}
return list;
});
})()
), Clazz.new_(P$.Files$FileTypeDetectors$2.$init$,[this, null]))]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.defaultFileTypeDetector=C$.createDefaultFileTypeDetector$();
C$.installeDetectors=C$.loadInstalledDetectors$();
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

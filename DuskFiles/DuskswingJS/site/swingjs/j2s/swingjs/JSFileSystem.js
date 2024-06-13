(function(){var P$=Clazz.newPackage("swingjs"),p$1={},p$2={},I$=[[0,['swingjs.JSFileSystem','.JSByteChannel'],'java.io.File','java.util.HashSet','java.nio.file.StandardOpenOption','java.nio.channels.FileChannel','java.util.Arrays','swingjs.JSUtil','swingjs.JSFileSystem',['swingjs.JSFileSystem','.JSMappedByteBuffer'],['swingjs.JSFileSystem','.JSFileLock'],'java.nio.file.attribute.FileTime','javajs.util.AU','java.io.BufferedInputStream','java.io.ByteArrayInputStream',['swingjs.JSFileSystem','.JSFileAttributes'],'java.net.URI',['swingjs.JSFileSystem','.JSPathIterator'],'java.util.Hashtable',['swingjs.JSFileSystem','.JSFileChannel'],['swingjs.JSFileSystem','.JSFileStore'],['swingjs.JSFileSystem','.JSPath'],['swingjs.JSFileSystem','.JSFileSystemProvider']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSFileSystem", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.nio.file.FileSystem');
C$.$classes$=[['JSFileStore',9],['JSMappedByteBuffer',9],['JSFileLock',9],['JSFileChannel',9],['JSFileAttributes',9],['JSFileAttribute',9],['JSByteChannel',9],['JSPathIterator',1],['JSPath',1],['JSFileSystemProvider',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['scheme']]
,['O',['views','java.util.Set']]]

Clazz.newMeth(C$, 'list$java_io_File',  function (f) {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, 'c$$S',  function (scheme) {
Clazz.super_(C$, this);
this.scheme=scheme;
}, 1);

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'isOpen$',  function () {
return true;
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return false;
});

Clazz.newMeth(C$, 'getSeparator$',  function () {
return "/";
});

Clazz.newMeth(C$, 'getRootDirectories$',  function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'getFileStores$',  function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'supportedFileAttributeViews$',  function () {
if (C$.views == null ) {
C$.views=Clazz.new_($I$(3,1));
C$.views.add$O("basic");
}return C$.views;
});

Clazz.newMeth(C$, 'getPath$S$SA',  function (first, more) {
if (more != null  && more.length > 0 ) first=(first == null  ? "" : first + "/") + (more.join("/")||"");
return Clazz.new_($I$(21,1).c$$S$swingjs_JSFileSystem,[this, null, first, this]);
});

Clazz.newMeth(C$, 'getPathMatcher$S',  function (syntaxAndPattern) {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'getUserPrincipalLookupService$',  function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'newWatchService$',  function () {
C$.ni$();
return null;
});

Clazz.newMeth(C$, 'provider$',  function () {
return $I$(22).getProvider$S(this.scheme);
});

Clazz.newMeth(C$, 'ni$',  function () {
$I$(7).notImplemented$S("JSFileSystem");
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSFileStore", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.file.FileStore');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'name$',  function () {
return "JSFileSystem";
});

Clazz.newMeth(C$, 'type$',  function () {
return "java.util.Hashtable";
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return false;
});

Clazz.newMeth(C$, 'getTotalSpace$',  function () {
return -256;
});

Clazz.newMeth(C$, 'getUsableSpace$',  function () {
return -256;
});

Clazz.newMeth(C$, 'getUnallocatedSpace$',  function () {
return -256;
});

Clazz.newMeth(C$, 'supportsFileAttributeView$Class',  function (type) {
return false;
});

Clazz.newMeth(C$, 'supportsFileAttributeView$S',  function (name) {
return false;
});

Clazz.newMeth(C$, 'getFileStoreAttributeView$Class',  function (type) {
return null;
});

Clazz.newMeth(C$, 'getAttribute$S',  function (attribute) {
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSMappedByteBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.MappedByteBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$BA$I$I$I$I$I$java_io_FileDescriptor',  function (hb, mark, pos, lim, cap, off, fd) {
;C$.superclazz.c$$BA$I$I$I$I$I$java_io_FileDescriptor.apply(this,[hb, mark, pos, lim, cap, off, fd]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSFileLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.FileLock');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_channels_AsynchronousFileChannel$J$J$Z',  function (channel, position, size, shared) {
;C$.superclazz.c$$java_nio_channels_AsynchronousFileChannel$J$J$Z.apply(this,[channel, position, size, shared]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_FileChannel$J$J$Z',  function (channel, position, size, shared) {
;C$.superclazz.c$$java_nio_channels_FileChannel$J$J$Z.apply(this,[channel, position, size, shared]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isValid$',  function () {
return true;
});

Clazz.newMeth(C$, 'release$',  function () {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSFileChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.FileChannel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fd','java.io.FileDescriptor','parent','java.lang.Object','path','swingjs.JSFileSystem.JSPath','bc','swingjs.JSFileSystem.JSByteChannel']]]

Clazz.newMeth(C$, 'open$java_io_FileDescriptor$S$Z$Z$O',  function (fd, path, readable, writable, parent) {
return C$.open$java_io_FileDescriptor$S$Z$Z$Z$O(fd, path, readable, writable, false, parent);
}, 1);

Clazz.newMeth(C$, 'open$java_io_FileDescriptor$S$Z$Z$Z$O',  function (fd, path, readable, writable, append, parent) {
return Clazz.new_(C$.c$$java_io_FileDescriptor$S$Z$Z$Z$O,[fd, path, readable, writable, append, parent]);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA',  function (path, options, attrs) {
Clazz.super_(C$, this);
this.fd=null;
this.parent=null;
this.path=path;
this.bc=Clazz.new_($I$(1,1).c$$java_io_FileDescriptor$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA,[null, this.path, options, attrs]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor$S$Z$Z$Z$O',  function (fd, path, readable, writable, append, parent) {
Clazz.super_(C$, this);
this.fd=fd;
this.parent=parent;
this.path=Clazz.new_($I$(2,1).c$$S,[path]).toPath$();
if (fd != null  && (readable || append ) ) this.path.秘bytes=fd._getBytes$Z(true);
this.path.setIsTempFile$Z(fd._isTempFile$());
var options=Clazz.new_($I$(3,1));
if (readable) options.add$O($I$(4).READ);
if (writable) {
options.add$O($I$(4).WRITE);
options.add$O($I$(4).CREATE);
}if (append) options.add$O($I$(4).APPEND);
try {
this.bc=Clazz.new_([fd, this.path, options, $I$(5).NO_ATTRIBUTES],$I$(1,1).c$$java_io_FileDescriptor$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA);
} catch (e) {
if (Clazz.exceptionOf(e,"java.nio.file.FileAlreadyExistsException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer',  function (dst) {
return this.bc.read$java_nio_ByteBuffer(dst);
});

Clazz.newMeth(C$, 'read$java_nio_ByteBufferA$I$I',  function (dsts, offset, length) {
var ntotal=0;
for (var n0=length, i=offset; i < dsts.length && ntotal < n0 ; i++) {
var n=this.bc.read$java_nio_ByteBuffer$I$I$Z(dsts[i], length, this.bc.pos, true);
if (n < 0) break;
ntotal+=n;
length-=n;
}
return ntotal;
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer',  function (src) {
return this.bc.write$java_nio_ByteBuffer(src);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBufferA$I$I',  function (srcs, offset, length) {
var ntotal=0;
for (var n0=length, i=offset; i < srcs.length && ntotal < n0 ; i++) {
var n=p$1.write$java_nio_ByteBuffer$I.apply(this.bc, [srcs[i], Math.min(length, srcs[i].remaining$())]);
ntotal+=n;
length-=n;
}
return ntotal;
});

Clazz.newMeth(C$, 'position$',  function () {
return this.bc.position$();
});

Clazz.newMeth(C$, 'position$J',  function (newPosition) {
this.bc.position$J(newPosition);
return this;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.bc.size$();
});

Clazz.newMeth(C$, 'truncate$J',  function (size) {
this.bc.len=Long.$ival(size);
return this;
});

Clazz.newMeth(C$, 'force$Z',  function (metaData) {
if (this.bc.len < this.bc.秘bytes.length) {
this.path.秘bytes=$I$(6).copyOf$BA$I(this.bc.秘bytes, this.bc.len);
} else {
this.path.秘bytes=this.bc.秘bytes;
}$I$(7).cacheFileData$S$O(this.path.name, this.path.秘bytes);
});

Clazz.newMeth(C$, 'transferTo$J$J$java_nio_channels_WritableByteChannel',  function (position, count, target) {
var n=this.bc.transferTo$I$swingjs_JSFileSystem_JSByteChannel$J$J$Z(Long.$ival(position), (target), (target).pos, Long.$ival(count), false);
return n;
});

Clazz.newMeth(C$, 'transferFrom$java_nio_channels_ReadableByteChannel$J$J',  function (src, position, count) {
var n=(src).transferTo$I$swingjs_JSFileSystem_JSByteChannel$J$J$Z((src).pos, this.bc, position, count, true);
this.force$Z(false);
return n;
});

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer$J',  function (dst, position) {
return this.bc.read$java_nio_ByteBuffer$I$I$Z(dst, dst.position$(), Long.$ival(position), false);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer$J',  function (src, position) {
return p$1._get$BA$I$I$I$Z.apply(this.bc, [src.array$(), src.arrayOffset$() + src.position$(), Long.$ival(position), src.remaining$(), false]);
});

Clazz.newMeth(C$, 'map$java_nio_channels_FileChannel_MapMode$J$J',  function (mode, position, size) {
$I$(8).ni$();
return Clazz.new_([this.bc.秘bytes, -1, Long.$ival(position), Long.$ival(size), Long.$ival(size), 0, this.fd],$I$(9,1).c$$BA$I$I$I$I$I$java_io_FileDescriptor);
});

Clazz.newMeth(C$, 'lock$J$J$Z',  function (position, size, shared) {
$I$(8).ni$();
return Clazz.new_($I$(10,1).c$$java_nio_channels_FileChannel$J$J$Z,[this, position, size, shared]);
});

Clazz.newMeth(C$, 'tryLock$J$J$Z',  function (position, size, shared) {
$I$(8).ni$();
return Clazz.new_($I$(10,1).c$$java_nio_channels_FileChannel$J$J$Z,[this, position, size, shared]);
});

Clazz.newMeth(C$, 'implCloseChannel$',  function () {
this.bc.close$();
});

Clazz.newMeth(C$, 'seek$J',  function (pos) {
this.bc.seek$J(pos);
});

Clazz.newMeth(C$, 'read$',  function () {
return this.bc.read$();
});

Clazz.newMeth(C$, 'readBytes$BA$I$I',  function (b, off, len) {
return this.bc.readBytes$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'write$I',  function (b) {
this.bc.write$I(b);
});

Clazz.newMeth(C$, 'writeBytes$BA$I$I',  function (b, off, length) {
if (length > 0) this.bc.writeBytes$BA$I$I(b, off, length);
});

Clazz.newMeth(C$, 'setLength$J',  function (newLength) {
this.bc.setLength$J(newLength);
});

Clazz.newMeth(C$, 'doSave$',  function () {
this.bc.doSave=true;
});

Clazz.newMeth(C$, 'available$',  function () {
return (this.bc.len - this.bc.pos);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
this.bc.seek$J(Long.$add(this.bc.pos,n));
return this.bc.pos;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSFileAttributes", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.nio.file.attribute.BasicFileAttributes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lastModified','java.nio.file.attribute.FileTime','+lastAccessed','+created','channel','swingjs.JSFileSystem.JSByteChannel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_JSFileSystem_JSByteChannel',  function (channel) {
;C$.$init$.apply(this);
this.channel=channel;
}, 1);

Clazz.newMeth(C$, 'lastModifiedTime$',  function () {
return (this.lastModified == null  ? $I$(11).fromMillis$J(this.channel.tMod) : this.lastModified);
});

Clazz.newMeth(C$, 'lastAccessTime$',  function () {
return (this.lastAccessed == null  ? $I$(11).fromMillis$J(this.channel.tAccess) : this.lastAccessed);
});

Clazz.newMeth(C$, 'creationTime$',  function () {
return (this.created == null  ? $I$(11).fromMillis$J(this.channel.tCreate) : this.created);
});

Clazz.newMeth(C$, 'isRegularFile$',  function () {
return true;
});

Clazz.newMeth(C$, 'isDirectory$',  function () {
return false;
});

Clazz.newMeth(C$, 'isSymbolicLink$',  function () {
return false;
});

Clazz.newMeth(C$, 'isOther$',  function () {
return false;
});

Clazz.newMeth(C$, 'size$',  function () {
try {
return this.channel.size$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return 0;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'fileKey$',  function () {
return this.channel.path.name;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSFileAttribute", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.nio.file.attribute.FileAttribute');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['value','<T>']]]

Clazz.newMeth(C$, 'c$$S$O',  function (name, value) {
;C$.$init$.apply(this);
this.name=name;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'name$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'value$',  function () {
return this.value;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSByteChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.nio.channels.SeekableByteChannel', 'java.nio.channels.WritableByteChannel', 'java.nio.channels.ReadableByteChannel', 'java.nio.file.attribute.BasicFileAttributeView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doSave=false;
},1);

C$.$fields$=[['Z',['doSave','open','append','write','read','$delete'],'I',['pos','len'],'J',['tCreate','tMod','tAccess'],'O',['path','swingjs.JSFileSystem.JSPath','秘bytes','byte[]','bis','java.io.BufferedInputStream','attrs','swingjs.JSFileSystem.JSFileAttribute[]','fsAttrs','swingjs.JSFileSystem.JSFileAttributes']]]

Clazz.newMeth(C$, 'c$$java_io_FileDescriptor$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA',  function (fd, path, options, attrs) {
;C$.$init$.apply(this);
this.path=path;
this.attrs=attrs;
this.read=options.contains$O($I$(4).READ);
this.write=options.contains$O($I$(4).WRITE);
this.append=options.contains$O($I$(4).APPEND);
this.$delete=options.contains$O($I$(4).DELETE_ON_CLOSE);
var truncate=options.contains$O($I$(4).TRUNCATE_EXISTING);
var create=options.contains$O($I$(4).CREATE);
var createNew=options.contains$O($I$(4).CREATE_NEW);
if ((this.read || this.append ) && path.秘bytes == null   && fd != null  ) {
path.秘bytes=fd._getBytes$Z(true);
}if (this.read && this.write ) {
this.秘bytes=p$1.getBytes.apply(this, []);
if (this.秘bytes == null ) {
this.秘bytes=Clazz.array(Byte.TYPE, [this.len=0]);
}}if (this.append) {
this.write=true;
this.pos=this.len=p$1.getBytes.apply(this, []).length;
} else if (this.write) {
if (create || createNew ) {
if (createNew) {
var b=$I$(7,"getFileAsBytes$O$Z",[Clazz.new_($I$(2,1).c$$S,[path.name]), true]);
if (b != null ) throw Clazz.new_(Clazz.load('java.nio.file.FileAlreadyExistsException').c$$S,[path.name]);
}path.秘bytes=(this.read ? p$1.getBytes.apply(this, []) : null);
p$1.setPosLen$java_io_FileDescriptor.apply(this, [fd]);
$I$(7).cacheFileData$S$O(path.name, path.秘bytes);
} else if (truncate) {
path.秘bytes=null;
}if (path.秘bytes == null ) {
this.秘bytes=Clazz.array(Byte.TYPE, [4096]);
} else {
p$1.getBytes.apply(this, []);
}} else {
if (p$1.getBytes.apply(this, []) == null ) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException'));
p$1.setPosLen$java_io_FileDescriptor.apply(this, [fd]);
}this.open=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
;C$.$init$.apply(this);
try {
this.秘bytes=$in.readAllBytes$();
this.len=this.秘bytes.length;
this.open=true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setPosLen$java_io_FileDescriptor',  function (fd) {
if (fd != null ) {
this.pos=fd._getPos$();
this.len=fd._getLen$();
}}, p$1);

Clazz.newMeth(C$, 'setLength$J',  function (newLength) {
if (Long.$eq(this.len,newLength )) return;
this.len=Long.$ival(newLength);
p$1.ensureLength$I.apply(this, [this.len]);
if (this.pos > this.len) this.pos=this.len;
});

Clazz.newMeth(C$, 'ensureLength$I',  function (len) {
this.秘bytes=$I$(6).copyOf$BA$I(this.秘bytes, len);
}, p$1);

Clazz.newMeth(C$, 'seek$J',  function (pos) {
this.pos=Long.$ival(pos);
});

Clazz.newMeth(C$, 'read$',  function () {
return (this.pos >= this.len ? ($b$[0] = -1, $b$[0]) : this.秘bytes[this.pos++]);
});

Clazz.newMeth(C$, 'readBytes$BA$I$I',  function (b, off, len) {
if (len == 0) return 0;
len=Math.min(this.len - this.pos, len);
if (len < 0) return -1;
System.arraycopy$O$I$O$I$I(this.秘bytes, this.pos, b, off, len);
return len;
});

Clazz.newMeth(C$, 'write$I',  function (b) {
if (this.pos >= this.len) {
p$1.ensureLength$I.apply(this, [this.len + 8192]);
++this.len;
}this.秘bytes[this.pos++]=(b|0);
});

Clazz.newMeth(C$, 'writeBytes$BA$I$I',  function (b, off, length) {
if (this.pos + length >= this.len) {
p$1.ensureLength$I.apply(this, [this.pos + Math.max(length << 1, 8192)]);
this.len=this.pos + length;
}System.arraycopy$O$I$O$I$I(b, off, this.秘bytes, this.pos, length);
this.pos+=length;
});

Clazz.newMeth(C$, 'isOpen$',  function () {
return this.open;
});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.open) return;
this.open=false;
if (this.$delete) {
this.秘bytes=null;
$I$(7).cacheFileData$S$O(this.path.name, null);
} else if (this.write) {
if (!this.doSave && !this.path.秘isTempFile ) return;
if (this.len < this.秘bytes.length) this.秘bytes=$I$(6).copyOf$BA$I(this.秘bytes, this.len);
this.path.秘bytes=this.秘bytes;
$I$(7).cacheFileData$S$O(this.path.name, this.秘bytes);
if (!this.path.秘isTempFile) $I$(7).saveFile$S$O$S$S(this.path.name, this.秘bytes, null, null);
}});

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer',  function (dst) {
return this.read$java_nio_ByteBuffer$I$I$Z(dst, dst.remaining$(), this.pos, true);
});

Clazz.newMeth(C$, 'read$java_nio_ByteBuffer$I$I$Z',  function (dst, n, pos, updatePos) {
n=Math.min(dst.remaining$(), Math.min(this.len - pos, n));
if (n <= 0) return -1;
System.arraycopy$O$I$O$I$I(this.秘bytes, pos, dst.array$(), dst.arrayOffset$() + dst.position$(), n);
dst.position$I(dst.position$() + n);
if (updatePos) this.pos+=n;
return n;
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer',  function (src) {
return p$1.write$java_nio_ByteBuffer$I.apply(this, [src, src.remaining$()]);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBuffer$I',  function (src, n) {
var srcPos=src.position$();
src.position$I(srcPos + n);
return p$1._get$BA$I$I$I$Z.apply(this, [src.array$(), srcPos + src.arrayOffset$(), this.pos, n, true]);
}, p$1);

Clazz.newMeth(C$, 'transferTo$I$swingjs_JSFileSystem_JSByteChannel$J$J$Z',  function (fromPos, bc, toPos, n, updatePos) {
n=Math.min$J$J(this.len - fromPos, n);
return p$1._get$BA$I$I$I$Z.apply(bc, [this.秘bytes, fromPos, Long.$ival(toPos), Long.$ival(n), updatePos]);
});

Clazz.newMeth(C$, '_get$BA$I$I$I$Z',  function (array, from, to, n, updatePos) {
if (to + n > p$1.getBytes.apply(this, []).length) this.秘bytes=$I$(12,"ensureLengthByte$BA$I",[this.秘bytes, (to + n) * 2]);
System.arraycopy$O$I$O$I$I(array, from, this.秘bytes, to, n);
this.pos+=n;
if (this.pos > this.len) this.len=this.pos;
if (!updatePos) this.pos-=n;
return n;
}, p$1);

Clazz.newMeth(C$, 'getBytes',  function () {
if (this.秘bytes == null ) {
this.秘bytes=this.path.秘bytes;
if (this.秘bytes == null ) {
this.秘bytes=$I$(7,"getFileAsBytes$O",[this.path.toJSName$()]);
}if (this.秘bytes != null ) this.len=this.秘bytes.length;
}return this.秘bytes;
}, p$1);

Clazz.newMeth(C$, 'size$',  function () {
return this.len;
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
return (this.bis == null  ? (this.bis=Clazz.new_([Clazz.new_([p$1.getBytes.apply(this, [])],$I$(14,1).c$$BA)],$I$(13,1).c$$java_io_InputStream)) : this.bis);
});

Clazz.newMeth(C$, 'truncate$J',  function (size) {
$I$(8).ni$();
return null;
});

Clazz.newMeth(C$, 'position$',  function () {
return this.pos;
});

Clazz.newMeth(C$, 'position$J',  function (newPosition) {
this.pos=Long.$ival(newPosition);
return this;
});

Clazz.newMeth(C$, 'name$',  function () {
return "basic";
});

Clazz.newMeth(C$, 'readAttributes$',  function () {
return p$1.getFileAttrs.apply(this, []);
});

Clazz.newMeth(C$, 'setTimes$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime$java_nio_file_attribute_FileTime',  function (lastModifiedTime, lastAccessTime, createTime) {
p$1.getFileAttrs.apply(this, []);
this.fsAttrs.lastModified=lastModifiedTime;
this.fsAttrs.lastAccessed=lastAccessTime;
this.fsAttrs.created=createTime;
});

Clazz.newMeth(C$, 'getFileAttrs',  function () {
return (this.fsAttrs == null  ? (this.fsAttrs=Clazz.new_($I$(15,1).c$$swingjs_JSFileSystem_JSByteChannel,[this])) : this.fsAttrs);
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSPathIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['array','String[]']]]

Clazz.newMeth(C$, 'c$$swingjs_JSFileSystem_JSPath',  function (jsPath) {
;C$.$init$.apply(this);
this.index=(jsPath.isAbsolute$() ? 2 : 0);
this.array=p$2.getNameArray.apply(jsPath, []);
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.index < this.array.length;
});

Clazz.newMeth(C$, 'next$',  function () {
return this.b$['swingjs.JSFileSystem'].getPath$S$SA.apply(this.b$['swingjs.JSFileSystem'], [this.array[this.index++], Clazz.array(String, -1, [])]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSPath", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.nio.file.Path');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['秘isTempFile'],'S',['name'],'O',['fileSystem','swingjs.JSFileSystem','nameArray','String[]','秘bytes','byte[]']]]

Clazz.newMeth(C$, 'isTempFile$',  function () {
return this.秘isTempFile;
});

Clazz.newMeth(C$, 'setIsTempFile$Z',  function (isTempFile) {
this.秘isTempFile=isTempFile;
});

Clazz.newMeth(C$, 'getNameArray',  function () {
if (this.nameArray == null ) this.nameArray=(name.split('/') ||null);
return this.nameArray;
}, p$2);

Clazz.newMeth(C$, 'c$$S$swingjs_JSFileSystem',  function (name, jsFileSystem) {
;C$.$init$.apply(this);
this.fileSystem=jsFileSystem;
while (name.startsWith$S("././"))name=name.substring$I(2);

if (name.startsWith$S($I$(2).temporaryDirectory) || name.startsWith$S(this.fileSystem.scheme + ":/" + $I$(2).temporaryDirectory ) ) this.setIsTempFile$Z(true);
this.name=name;
if (this.isAbsolute$() && !name.startsWith$S(this.fileSystem.scheme + "://") ) {
name=this.fileSystem.scheme + "://" + name.substring$I(name.indexOf$S("/") + 1) ;
}this.name=name;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_file_Path',  function (jsPath) {
;C$.$init$.apply(this);
this.name=(jsPath).name;
this.fileSystem=(jsPath).fileSystem;
this.nameArray=(jsPath).nameArray;
}, 1);

Clazz.newMeth(C$, 'getFileSystem$',  function () {
return this.fileSystem;
});

Clazz.newMeth(C$, 'isAbsolute$',  function () {
return this.name.indexOf$S(this.fileSystem.scheme + ":/") == 0;
});

Clazz.newMeth(C$, 'getRoot$',  function () {
if (!this.isAbsolute$()) return null;
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, this.fileSystem.scheme + "://", this.fileSystem]);
});

Clazz.newMeth(C$, 'getFileName$',  function () {
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, this.name.substring$I(this.name.lastIndexOf$I("/") + 1), this.fileSystem]);
});

Clazz.newMeth(C$, 'getParent$',  function () {
var pt=this.name.lastIndexOf$I("/");
return (pt < 0 ? null : Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, this.name.substring$I$I(0, pt), this.fileSystem]));
});

Clazz.newMeth(C$, 'getNameCount$',  function () {
return p$2.getNameArray.apply(this, []).length - (this.isAbsolute$() ? 2 : 0);
});

Clazz.newMeth(C$, 'getName$I',  function (index) {
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, p$2.getNameArray.apply(this, [])[p$2.adjustIndex$I.apply(this, [index])], this.fileSystem]);
});

Clazz.newMeth(C$, 'adjustIndex$I',  function (index) {
var len=p$2.getNameArray.apply(this, []).length;
if (index < 0 || index >= len ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
return this.isAbsolute$() ? index + 2 : index;
}, p$2);

Clazz.newMeth(C$, 'subpath$I$I',  function (beginIndex, endIndex) {
return p$2.subpath$S$I$I.apply(this, [null, beginIndex, endIndex]);
});

Clazz.newMeth(C$, 'subpath$S$I$I',  function (pre, beginIndex, endIndex) {
return this.b$['swingjs.JSFileSystem'].getPath$S$SA.apply(this.b$['swingjs.JSFileSystem'], [pre, $I$(6,"copyOfRange$OA$I$I",[p$2.getNameArray.apply(this, []), p$2.adjustIndex$I.apply(this, [beginIndex]), p$2.adjustIndex$I.apply(this, [endIndex])])]);
}, p$2);

Clazz.newMeth(C$, 'startsWith$java_nio_file_Path',  function (other) {
return (this.name.startsWith$S((other).name));
});

Clazz.newMeth(C$, 'startsWith$S',  function (other) {
return this.name.startsWith$S(other);
});

Clazz.newMeth(C$, 'endsWith$java_nio_file_Path',  function (other) {
return this.name.endsWith$S((other).name);
});

Clazz.newMeth(C$, 'endsWith$S',  function (other) {
return this.name.endsWith$S(other);
});

Clazz.newMeth(C$, 'normalize$',  function () {
return Clazz.new_(C$.c$$java_nio_file_Path,[this, null, this]);
});

Clazz.newMeth(C$, 'resolve$java_nio_file_Path',  function (other) {
if (other.isAbsolute$()) return Clazz.new_(C$.c$$java_nio_file_Path,[this, null, other]);
return Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, this.name + "/" + (other).name , this.fileSystem]);
});

Clazz.newMeth(C$, 'resolve$S',  function (other) {
return this.resolve$java_nio_file_Path(Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, other, this.fileSystem]));
});

Clazz.newMeth(C$, 'resolveSibling$java_nio_file_Path',  function (other) {
return this.getParent$().resolve$java_nio_file_Path(other);
});

Clazz.newMeth(C$, 'resolveSibling$S',  function (other) {
return this.getParent$().resolve$S(other);
});

Clazz.newMeth(C$, 'relativize$java_nio_file_Path',  function (other) {
if (this.equals$O(other)) return Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, "", this.fileSystem]);
if (this.isAbsolute$() != other.isAbsolute$() ) return null;
var oname=(other).name;
if (oname.startsWith$S(this.name + "/")) return Clazz.new_(C$.c$$S$swingjs_JSFileSystem,[this, null, "." + oname.substring$I(this.name.length$()), this.fileSystem]);
var a=p$2.getNameArray.apply((this.getParent$()), []);
var b=p$2.getNameArray.apply((other.getParent$()), []);
var min=Math.min(a.length, b.length);
var firstDiff=0;
for (; firstDiff < min; firstDiff++) {
if (a[firstDiff] != b[firstDiff]) break;
}
var s;
if (firstDiff == min && a.length <= b.length ) {
s="/.";
} else {
s="";
for (var i=a.length - firstDiff; --i >= 0; ) s+="/..";

}return this.b$['swingjs.JSFileSystem'].getPath$S$SA.apply(this.b$['swingjs.JSFileSystem'], [s.substring$I(1), (other.subpath$I$I(firstDiff, other.getNameCount$())).nameArray]);
});

Clazz.newMeth(C$, 'toUri$',  function () {
try {
return Clazz.new_([this.toString()],$I$(16,1).c$$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toAbsolutePath$',  function () {
var path=this.b$['swingjs.JSFileSystem'].getPath$S$SA.apply(this.b$['swingjs.JSFileSystem'], [this.toString(), Clazz.array(String, -1, [])]);
(path).秘bytes=this.秘bytes;
return path;
});

Clazz.newMeth(C$, 'toRealPath$java_nio_file_LinkOptionA',  function (options) {
return this;
});

Clazz.newMeth(C$, 'toFile$',  function () {
var f=Clazz.new_($I$(2,1).c$$S,[this.name]);
f.秘bytes=this.秘bytes;
return f;
});

Clazz.newMeth(C$, 'register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA$java_nio_file_WatchEvent_ModifierA',  function (watcher, events, modifiers) {
$I$(8).ni$();
return null;
});

Clazz.newMeth(C$, 'register$java_nio_file_WatchService$java_nio_file_WatchEvent_KindA',  function (watcher, events) {
$I$(8).ni$();
return null;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(17,1).c$$swingjs_JSFileSystem_JSPath,[this, null, this]);
});

Clazz.newMeth(C$, ['compareTo$java_nio_file_Path','compareTo$O'],  function (other) {
return 0;
});

Clazz.newMeth(C$, 'toString',  function () {
var prefix=this.fileSystem.scheme;
if (this.isAbsolute$() || prefix === "file"  ) {
return this.name;
}prefix=(this.name.startsWith$S("/") ? "" : prefix + "://./");
return (this.name.startsWith$S(prefix) ? this.name : prefix + this.name);
});

Clazz.newMeth(C$, 'setAttribute$S$O',  function (attribute, value) {
});

Clazz.newMeth(C$, 'set$BA$java_io_File',  function (bytes, file) {
this.秘bytes=bytes;
this.setIsTempFile$Z(file.秘isTempFile);
});

Clazz.newMeth(C$, 'toJSName$',  function () {
if (this.fileSystem.scheme !== "file" ) return this.toString();
return (this.name.startsWith$S("file:") ? this.name : "file:/" + this.name);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileSystem, "JSFileSystemProvider", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.file.spi.FileSystemProvider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['scheme']]
,['O',['fsMap','java.util.Map','+fspMap']]]

Clazz.newMeth(C$, 'c$$S',  function (scheme) {
Clazz.super_(C$, this);
this.scheme=scheme;
}, 1);

Clazz.newMeth(C$, 'getScheme$',  function () {
return this.scheme;
});

Clazz.newMeth(C$, 'newFileSystem$java_net_URI$java_util_Map',  function (uri, env) {
var scheme=uri.getScheme$();
var fs=C$.fsMap.get$O(scheme);
if (fs == null ) C$.fsMap.put$O$O(scheme, fs=Clazz.new_($I$(8,1).c$$S,[scheme]));
return fs;
});

Clazz.newMeth(C$, 'getFileSystem$java_net_URI',  function (uri) {
try {
return this.newFileSystem$java_net_URI$java_util_Map(uri, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getPath$java_net_URI',  function (uri) {
var p=this.getFileSystem$java_net_URI(uri).getPath$S$SA(uri.toString(), Clazz.array(String, -1, []));
p.秘bytes=uri.秘bytes;
return p;
});

Clazz.newMeth(C$, 'newByteChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA',  function (path, options, attrs) {
return Clazz.new_($I$(1,1).c$$java_io_FileDescriptor$swingjs_JSFileSystem_JSPath$java_util_Set$java_nio_file_attribute_FileAttributeA,[null, path, options, attrs]);
});

Clazz.newMeth(C$, 'newFileChannel$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA',  function (path, options, attrs) {
return Clazz.new_($I$(19,1).c$$java_nio_file_Path$java_util_Set$java_nio_file_attribute_FileAttributeA,[path, options, attrs]);
});

Clazz.newMeth(C$, 'newDirectoryStream$java_nio_file_Path$java_nio_file_DirectoryStream_Filter',  function (dir, filter) {
$I$(8).ni$();
return null;
});

Clazz.newMeth(C$, 'createDirectory$java_nio_file_Path$java_nio_file_attribute_FileAttributeA',  function (dir, attrs) {
});

Clazz.newMeth(C$, 'delete$java_nio_file_Path',  function (path) {
$I$(7,"removeCachedFileData$S",[(path).toJSName$()]);
});

Clazz.newMeth(C$, 'copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA',  function (source, target, options) {
var bytes=(source).秘bytes;
if (bytes == null  || bytes.length == 0 ) {
bytes=$I$(7,"getFileAsBytes$O",[source.toString()]);
}if (bytes == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["JSFileSystem " + source + " has no bytes" ]);
$I$(7).setFileBytesStatic$O$O(source, bytes);
$I$(7,"cacheFileData$S$O",[target.toString(), (target).秘bytes=bytes]);
});

Clazz.newMeth(C$, 'move$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA',  function (source, target, options) {
this.copy$java_nio_file_Path$java_nio_file_Path$java_nio_file_CopyOptionA(source, target, options);
$I$(7,"removeCachedFileData$S",[source.toString()]);
});

Clazz.newMeth(C$, 'isSameFile$java_nio_file_Path$java_nio_file_Path',  function (path, path2) {
return (path.toString() == path2.toString());
});

Clazz.newMeth(C$, 'isHidden$java_nio_file_Path',  function (path) {
return false;
});

Clazz.newMeth(C$, 'getFileStore$java_nio_file_Path',  function (path) {
return Clazz.new_($I$(20,1));
});

Clazz.newMeth(C$, 'checkAccess$java_nio_file_Path$java_nio_file_AccessModeA',  function (path, modes) {
$I$(8).ni$();
});

Clazz.newMeth(C$, 'getFileAttributeView$java_nio_file_Path$Class$java_nio_file_LinkOptionA',  function (path, type, options) {
$I$(8).ni$();
return null;
});

Clazz.newMeth(C$, 'readAttributes$java_nio_file_Path$Class$java_nio_file_LinkOptionA',  function (path, type, options) {
$I$(8).ni$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'readAttributes$java_nio_file_Path$S$java_nio_file_LinkOptionA',  function (path, attributes, options) {
$I$(8).ni$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'setAttribute$java_nio_file_Path$S$O$java_nio_file_LinkOptionA',  function (path, attribute, value, options) {
(path).setAttribute$S$O(attribute, value);
});

Clazz.newMeth(C$, 'getProvider$S',  function (scheme) {
var p=C$.fspMap.get$O(scheme);
if (p == null ) C$.fspMap.put$O$O(scheme, p=Clazz.new_(C$.c$$S,[scheme]));
return p;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.fsMap=Clazz.new_($I$(18,1));
C$.fspMap=Clazz.new_($I$(18,1));
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

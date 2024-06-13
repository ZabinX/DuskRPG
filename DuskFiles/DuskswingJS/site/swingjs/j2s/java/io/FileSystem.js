(function(){var P$=java.io,p$1={},I$=[[0,'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileSystem");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getFileSystem$',  function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getSeparator$',  function () {
return "/";
});

Clazz.newMeth(C$, 'getPathSeparator$',  function () {
return "/";
});

Clazz.newMeth(C$, 'delete$java_io_File',  function (f) {
f.秘bytes=null;
$I$(1,"removeCachedFileData$S",[f.toPath$().toString()]);
return true;
});

Clazz.newMeth(C$, 'list$java_io_File',  function (f) {
return $I$(1).getCachedFileList$java_io_File(f);
});

Clazz.newMeth(C$, 'getBooleanAttributes$java_io_File',  function (file) {
return (this._isDir$java_io_File(file) ? 4 : 0) | (this._exists$java_io_File(file) ? 1 : 0) | (p$1._regular$java_io_File.apply(this, [file]) ? 2 : 0) | (p$1._hidden$java_io_File.apply(this, [file]) ? 8 : 0) ;
});

Clazz.newMeth(C$, '_hidden$java_io_File',  function (file) {
return false;
}, p$1);

Clazz.newMeth(C$, '_regular$java_io_File',  function (file) {
return p$1._isValid$java_io_File.apply(this, [file]) && !this._isDir$java_io_File(file) ;
}, p$1);

Clazz.newMeth(C$, '_isValid$java_io_File',  function (file) {
return file.toString().indexOf$S(":") < 0;
}, p$1);

Clazz.newMeth(C$, '_exists$java_io_File',  function (file) {
return p$1._isValid$java_io_File.apply(this, [file]) && (file.秘bytes != null  || file.getPrefixLength$() == file.path.length$()  || file.秘isTempFile  ? (file.秘bytes=C$._getTempFileBytes$java_io_File(file)) != null  : (file.秘bytes=$I$(1).getFileAsBytes$O(file)) != null ) ;
});

Clazz.newMeth(C$, '_getTempFileBytes$java_io_File',  function (file) {
return $I$(1).getCachedFileData$S$Z(file.path, true);
}, 1);

Clazz.newMeth(C$, '_isDir$java_io_File',  function (file) {
return (file.秘bytes == null  && p$1._isValid$java_io_File.apply(this, [file])  && file.getPrefixLength$() == file.path.length$() );
});

Clazz.newMeth(C$, 'prefixLength$S',  function (path) {
return path.lastIndexOf$S("/") + 1;
});

Clazz.newMeth(C$, 'resolve$java_io_File',  function (file) {
return file.path;
});

Clazz.newMeth(C$, 'getDefaultParent$',  function () {
return "/";
});

Clazz.newMeth(C$, 'fromURIPath$S',  function (path) {
if (path.startsWith$S("file://")) path=path.substring$I(7);
return path;
});

Clazz.newMeth(C$, 'isAbsolute$java_io_File',  function (f) {
return f.getAbsolutePath$() == f.path;
});

Clazz.newMeth(C$, 'normalize$S',  function (path) {
return path.replaceAll$S$S("\\\\", "/");
});

Clazz.newMeth(C$, 'getLength$java_io_File',  function (file) {
return (this._exists$java_io_File(file) && file.秘bytes != null   ? file.秘bytes.length : 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

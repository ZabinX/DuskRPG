(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},p$2={},I$=[[0,'java.security.AccessController','sun.misc.MetaIndex',['sun.misc.Launcher','.ExtClassLoader'],'sun.misc.Launcher','sun.misc.SharedSecrets','java.util.StringTokenizer','java.io.File','java.util.Vector','java.net.URL','sun.misc.VM','sun.misc.PathPermissions','java.security.ProtectionDomain','java.security.CodeSource','java.security.AccessControlContext',['sun.misc.Launcher','.AppClassLoader'],'RuntimePermission','Thread','java.util.HashSet','sun.misc.URLClassPath','InternalError',['sun.misc.Launcher','.Factory'],'SecurityManager',['sun.misc.Launcher','.BootClassPathHolder'],'sun.net.www.ParseUtil','java.security.Permissions','sun.security.util.SecurityConstants','java.util.PropertyPermission','java.io.FilePermission']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Launcher", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ExtClassLoader',8],['AppClassLoader',8],['BootClassPathHolder',10],['Factory',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['loader','ClassLoader']]
,['S',['bootClassPath'],'O',['factory','java.net.URLStreamHandlerFactory','launcher','sun.misc.Launcher','fileHandler','java.net.URLStreamHandler']]]

Clazz.newMeth(C$, 'getLauncher$',  function () {
return C$.launcher;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var extcl;
try {
extcl=$I$(3).getExtClassLoader$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(20,1).c$$S$Throwable,["Could not create extension class loader", e]);
} else {
throw e;
}
}
try {
this.loader=$I$(15).getAppClassLoader$ClassLoader(extcl);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(20,1).c$$S$Throwable,["Could not create application class loader", e]);
} else {
throw e;
}
}
$I$(17).currentThread$().setContextClassLoader$ClassLoader(this.loader);
var s=System.getProperty$S("java.security.manager");
if (s != null ) {
var sm=null;
if ("".equals$O(s) || "default".equals$O(s) ) {
sm=Clazz.new_($I$(22,1));
} else {
try {
sm=this.loader.loadClass$S(s).newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ClassCastException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
}if (sm != null ) {
System.setSecurityManager$SecurityManager(sm);
} else {
throw Clazz.new_($I$(20,1).c$$S,["Could not create SecurityManager: " + s]);
}}}, 1);

Clazz.newMeth(C$, 'getClassLoader$',  function () {
return this.loader;
});

Clazz.newMeth(C$, 'getBootstrapClassPath$',  function () {
return $I$(23).bcp;
}, 1);

Clazz.newMeth(C$, 'pathToURLs$java_io_FileA',  function (path) {
var urls=Clazz.array($I$(9), [path.length]);
for (var i=0; i < path.length; i++) {
urls[i]=C$.getFileURL$java_io_File(path[i]);
}
return urls;
}, 1);

Clazz.newMeth(C$, 'getClassPath$S',  function (cp) {
var path;
if (cp != null ) {
var count=0;
var maxCount=1;
var pos=0;
var lastPos=0;
while ((pos=cp.indexOf$S$I("/", lastPos)) != -1){
++maxCount;
lastPos=pos + 1;
}
path=Clazz.array($I$(7), [maxCount]);
lastPos=pos=0;
while ((pos=cp.indexOf$S$I("/", lastPos)) != -1){
if (pos - lastPos > 0) {
path[count++]=Clazz.new_([cp.substring$I$I(lastPos, pos)],$I$(7,1).c$$S);
} else {
path[count++]=Clazz.new_($I$(7,1).c$$S,["."]);
}lastPos=pos + 1;
}
if (lastPos < cp.length$()) {
path[count++]=Clazz.new_([cp.substring$I(lastPos)],$I$(7,1).c$$S);
} else {
path[count++]=Clazz.new_($I$(7,1).c$$S,["."]);
}if (count != maxCount) {
var tmp=Clazz.array($I$(7), [count]);
System.arraycopy$O$I$O$I$I(path, 0, tmp, 0, count);
path=tmp;
}} else {
path=Clazz.array($I$(7), [0]);
}return path;
}, 1);

Clazz.newMeth(C$, 'getFileURL$java_io_File',  function (file) {
try {
file=file.getCanonicalFile$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
try {
return $I$(24).fileToEncodedURL$java_io_File(file);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_($I$(20,1).c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.factory=Clazz.new_($I$(21,1));
C$.launcher=Clazz.new_(C$);
C$.bootClassPath=System.getProperty$S("sun.boot.class.path");
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "ExtClassLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.net.URLClassLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getExtClassLoader$',  function () {
var dirs=C$.getExtDirs$();
try {
return $I$(1,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.Launcher$ExtClassLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$ExtClassLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var len=this.$finals$.dirs.length;
for (var i=0; i < len; i++) {
$I$(2).registerDirectory$java_io_File(this.$finals$.dirs[i]);
}
return Clazz.new_($I$(3,1).c$$java_io_FileA,[this.$finals$.dirs]);
});
})()
), Clazz.new_(P$.Launcher$ExtClassLoader$1.$init$,[this, {dirs:dirs}]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
throw e.getException$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'addExtURL$java_net_URL',  function (url) {
C$.superclazz.prototype.addURL$java_net_URL.apply(this, [url]);
});

Clazz.newMeth(C$, 'c$$java_io_FileA',  function (dirs) {
;C$.superclazz.c$$java_net_URLA$ClassLoader$java_net_URLStreamHandlerFactory.apply(this,[C$.getExtURLs$java_io_FileA(dirs), null, $I$(4).factory]);C$.$init$.apply(this);
$I$(5).getJavaNetAccess$().getURLClassPath$java_net_URLClassLoader(this).initLookupCache$ClassLoader(this);
}, 1);

Clazz.newMeth(C$, 'getExtDirs$',  function () {
var s=System.getProperty$S("java.ext.dirs");
var dirs;
if (s != null ) {
var st=Clazz.new_($I$(6,1).c$$S$S,[s, "/"]);
var count=st.countTokens$();
dirs=Clazz.array($I$(7), [count]);
for (var i=0; i < count; i++) {
dirs[i]=Clazz.new_([st.nextToken$()],$I$(7,1).c$$S);
}
} else {
dirs=Clazz.array($I$(7), [0]);
}return dirs;
}, 1);

Clazz.newMeth(C$, 'getExtURLs$java_io_FileA',  function (dirs) {
var urls=Clazz.new_($I$(8,1));
for (var i=0; i < dirs.length; i++) {
var files=dirs[i].list$();
if (files != null ) {
for (var j=0; j < files.length; j++) {
if (!files[j].equals$O("meta-index")) {
var f=Clazz.new_($I$(7,1).c$$java_io_File$S,[dirs[i], files[j]]);
urls.add$O($I$(4).getFileURL$java_io_File(f));
}}
}}
var ua=Clazz.array($I$(9), [urls.size$()]);
urls.copyInto$OA(ua);
return ua;
}, 1);

Clazz.newMeth(C$, 'findLibrary$S',  function (name) {
name=System.mapLibraryName$S(name);
var urls=C$.superclazz.prototype.getURLs$.apply(this, []);
var prevDir=null;
for (var i=0; i < urls.length; i++) {
var dir=Clazz.new_([urls[i].getPath$()],$I$(7,1).c$$S).getParentFile$();
if (dir != null  && !dir.equals$O(prevDir) ) {
var arch=$I$(10).getSavedProperty$S("os.arch");
if (arch != null ) {
var file=Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_File$S,[dir, arch]), name],$I$(7,1).c$$java_io_File$S);
if (file.exists$()) {
return file.getAbsolutePath$();
}}var file=Clazz.new_($I$(7,1).c$$java_io_File$S,[dir, name]);
if (file.exists$()) {
return file.getAbsolutePath$();
}}prevDir=dir;
}
return null;
});

Clazz.newMeth(C$, 'getContext$java_io_FileA',  function (dirs) {
var perms=Clazz.new_($I$(11,1).c$$java_io_FileA,[dirs]);
var domain=Clazz.new_([Clazz.new_([perms.getCodeBase$(), null],$I$(13,1).c$$java_net_URL$java_security_cert_CertificateA), perms],$I$(12,1).c$$java_security_CodeSource$java_security_PermissionCollection);
var acc=Clazz.new_([Clazz.array($I$(12), -1, [domain])],$I$(14,1).c$$java_security_ProtectionDomainA);
return acc;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
ClassLoader.registerAsParallelCapable$();
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "AppClassLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.net.URLClassLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$ucp','sun.misc.URLClassPath']]]

Clazz.newMeth(C$, 'getAppClassLoader$ClassLoader',  function (extcl) {
var s=System.getProperty$S("java.class.path");
var path=(s == null ) ? Clazz.array($I$(7), [0]) : $I$(4).getClassPath$S(s);
return $I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.Launcher$AppClassLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$AppClassLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var urls=(this.$finals$.s == null ) ? Clazz.array($I$(9), [0]) : $I$(4).pathToURLs$java_io_FileA(this.$finals$.path);
return Clazz.new_($I$(15,1).c$$java_net_URLA$ClassLoader,[urls, this.$finals$.extcl]);
});
})()
), Clazz.new_(P$.Launcher$AppClassLoader$1.$init$,[this, {extcl:extcl,s:s,path:path}]))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA$ClassLoader',  function (urls, parent) {
;C$.superclazz.c$$java_net_URLA$ClassLoader$java_net_URLStreamHandlerFactory.apply(this,[urls, parent, $I$(4).factory]);C$.$init$.apply(this);
this.$ucp=$I$(5).getJavaNetAccess$().getURLClassPath$java_net_URLClassLoader(this);
this.$ucp.initLookupCache$ClassLoader(this);
}, 1);

Clazz.newMeth(C$, 'loadClass$S$Z',  function (name, resolve) {
var i=name.lastIndexOf$I(".");
if (i != -1) {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkPackageAccess$S(name.substring$I$I(0, i));
}}if (this.$ucp.knownToNotExist$S(name)) {
var c=this.findLoadedClass$S(name);
if (c != null ) {
if (resolve) {
this.resolveClass$Class(c);
}return c;
}throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S,[name]);
}return (C$.superclazz.prototype.loadClass$S$Z.apply(this, [name, resolve]));
});

Clazz.newMeth(C$, 'getPermissions$java_security_CodeSource',  function (codesource) {
var perms=C$.superclazz.prototype.getPermissions$java_security_CodeSource.apply(this, [codesource]);
perms.add$java_security_Permission(Clazz.new_($I$(16,1).c$$S,["exitVM"]));
return perms;
});

Clazz.newMeth(C$, 'appendToClassPathForInstrumentation$S',  function (path) {
Clazz.assert(C$, this, function(){return ($I$(17).holdsLock$O(this))});
C$.superclazz.prototype.addURL$java_net_URL.apply(this, [$I$(4,"getFileURL$java_io_File",[Clazz.new_($I$(7,1).c$$S,[path])])]);
}, p$1);

Clazz.newMeth(C$, 'getContext$java_io_FileA',  function (cp) {
var perms=Clazz.new_($I$(11,1).c$$java_io_FileA,[cp]);
var domain=Clazz.new_([Clazz.new_([perms.getCodeBase$(), null],$I$(13,1).c$$java_net_URL$java_security_cert_CertificateA), perms],$I$(12,1).c$$java_security_CodeSource$java_security_PermissionCollection);
var acc=Clazz.new_([Clazz.array($I$(12), -1, [domain])],$I$(14,1).c$$java_security_ProtectionDomainA);
return acc;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
{
ClassLoader.registerAsParallelCapable$();
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "BootClassPathHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['bcp','sun.misc.URLClassPath']]]

C$.$static$=function(){C$.$static$=0;
{
var urls;
if ($I$(4).bootClassPath != null ) {
urls=$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.Launcher$BootClassPathHolder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Launcher$BootClassPathHolder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
var classPath=$I$(4,"getClassPath$S",[$I$(4).bootClassPath]);
var len=classPath.length;
var seenDirs=Clazz.new_($I$(18,1));
for (var i=0; i < len; i++) {
var curEntry=classPath[i];
if (!curEntry.isDirectory$()) {
curEntry=curEntry.getParentFile$();
}if (curEntry != null  && seenDirs.add$O(curEntry) ) {
$I$(2).registerDirectory$java_io_File(curEntry);
}}
return $I$(4).pathToURLs$java_io_FileA(classPath);
});
})()
), Clazz.new_(P$.Launcher$BootClassPathHolder$1.$init$,[this, null]))]);
} else {
urls=Clazz.array($I$(9), [0]);
}C$.bcp=Clazz.new_([urls, $I$(4).factory],$I$(19,1).c$$java_net_URLA$java_net_URLStreamHandlerFactory);
C$.bcp.initLookupCache$ClassLoader(null);
};
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Launcher, "Factory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.net.URLStreamHandlerFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['PREFIX']]]

Clazz.newMeth(C$, 'createURLStreamHandler$S',  function (protocol) {
var name=C$.PREFIX + "." + protocol + ".Handler" ;
try {
var c=Clazz.forName(name);
return c.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"ReflectiveOperationException")){
throw Clazz.new_($I$(20,1).c$$S$Throwable,["could not load " + protocol + "system protocol handler" , e]);
} else {
throw e;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.PREFIX="sun.net.www.protocol";
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

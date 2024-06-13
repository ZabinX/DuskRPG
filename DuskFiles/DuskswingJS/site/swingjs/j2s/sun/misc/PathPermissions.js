(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},p$2={},I$=[[0,'java.security.AccessController','sun.misc.MetaIndex',['sun.misc.Launcher','.ExtClassLoader'],'sun.misc.Launcher','sun.misc.SharedSecrets','java.util.StringTokenizer','java.io.File','java.util.Vector','java.net.URL','sun.misc.VM','sun.misc.PathPermissions','java.security.ProtectionDomain','java.security.CodeSource','java.security.AccessControlContext',['sun.misc.Launcher','.AppClassLoader'],'RuntimePermission','Thread','java.util.HashSet','sun.misc.URLClassPath','InternalError',['sun.misc.Launcher','.Factory'],'SecurityManager',['sun.misc.Launcher','.BootClassPathHolder'],'sun.net.www.ParseUtil','java.security.Permissions','sun.security.util.SecurityConstants','java.util.PropertyPermission','java.io.FilePermission']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PathPermissions", null, 'java.security.PermissionCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','java.io.File[]','perms','java.security.Permissions','codeBase','java.net.URL']]]

Clazz.newMeth(C$, 'c$$java_io_FileA',  function (path) {
Clazz.super_(C$, this);
this.path=path;
this.perms=null;
this.codeBase=null;
}, 1);

Clazz.newMeth(C$, 'getCodeBase$',  function () {
return this.codeBase;
});

Clazz.newMeth(C$, 'add$java_security_Permission',  function (permission) {
throw Clazz.new_(Clazz.load('SecurityException').c$$S,["attempt to add a permission"]);
});

Clazz.newMeth(C$, 'init',  function () {
if (this.perms != null ) return;
this.perms=Clazz.new_($I$(25,1));
this.perms.add$java_security_Permission($I$(26).CREATE_CLASSLOADER_PERMISSION);
this.perms.add$java_security_Permission(Clazz.new_($I$(27,1).c$$S$S,["java.*", "read"]));
$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.PathPermissions$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PathPermissions$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
for (var i=0; i < this.b$['sun.misc.PathPermissions'].path.length; i++) {
var f=this.b$['sun.misc.PathPermissions'].path[i];
var path;
try {
path=f.getCanonicalPath$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
path=f.getAbsolutePath$();
} else {
throw ioe;
}
}
if (i == 0) {
this.b$['sun.misc.PathPermissions'].codeBase=$I$(4,"getFileURL$java_io_File",[Clazz.new_($I$(7,1).c$$S,[path])]);
}if (f.isDirectory$()) {
if (path.endsWith$S($I$(7).separator)) {
this.b$['sun.misc.PathPermissions'].perms.add$java_security_Permission(Clazz.new_($I$(28,1).c$$S$S,[path + "-", "read"]));
} else {
this.b$['sun.misc.PathPermissions'].perms.add$java_security_Permission(Clazz.new_([path + $I$(7).separator + "-" , "read"],$I$(28,1).c$$S$S));
}} else {
var endIndex=path.lastIndexOf$I($I$(7).separatorChar);
if (endIndex != -1) {
path=path.substring$I$I(0, endIndex + 1) + "-";
this.b$['sun.misc.PathPermissions'].perms.add$java_security_Permission(Clazz.new_($I$(28,1).c$$S$S,[path, "read"]));
} else {
}}}
return null;
});
})()
), Clazz.new_(P$.PathPermissions$1.$init$,[this, null]))]);
}, p$2);

Clazz.newMeth(C$, 'implies$java_security_Permission',  function (permission) {
if (this.perms == null ) p$2.init.apply(this, []);
return this.perms.implies$java_security_Permission(permission);
});

Clazz.newMeth(C$, 'elements$',  function () {
if (this.perms == null ) p$2.init.apply(this, []);
{
return this.perms.elements$();
}});

Clazz.newMeth(C$, 'toString',  function () {
if (this.perms == null ) p$2.init.apply(this, []);
return this.perms.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

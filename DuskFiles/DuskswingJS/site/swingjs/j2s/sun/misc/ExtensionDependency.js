(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'java.util.Vector',['java.util.jar.Attributes','.Name'],'java.util.StringTokenizer','sun.misc.ExtensionInfo','java.security.AccessController','java.util.jar.JarFile','sun.misc.Launcher','sun.misc.ExtensionDependency','java.io.File','sun.misc.JarFilter','sun.net.www.ParseUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtensionDependency");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['providers','java.util.Vector']]]

Clazz.newMeth(C$, 'addExtensionInstallationProvider$sun_misc_ExtensionInstallationProvider',  function (eip) {
if (C$.providers == null ) {
C$.providers=Clazz.new_($I$(1,1));
}C$.providers.add$O(eip);
}, 1);

Clazz.newMeth(C$, 'removeExtensionInstallationProvider$sun_misc_ExtensionInstallationProvider',  function (eip) {
C$.providers.remove$O(eip);
}, 1);

Clazz.newMeth(C$, 'checkExtensionsDependencies$java_util_jar_JarFile',  function (jar) {
if (C$.providers == null ) {
return true;
}try {
var extDep=Clazz.new_(C$);
return extDep.checkExtensions$java_util_jar_JarFile(jar);
} catch (e) {
if (Clazz.exceptionOf(e,"sun.misc.ExtensionInstallationException")){
C$.debug$S(e.getMessage$());
} else {
throw e;
}
}
return false;
}, 1);

Clazz.newMeth(C$, 'checkExtensions$java_util_jar_JarFile',  function (jar) {
var man;
try {
man=jar.getManifest$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
if (man == null ) {
return true;
}var result=true;
var attr=man.getMainAttributes$();
if (attr != null ) {
var value=attr.getValue$java_util_jar_Attributes_Name($I$(2).EXTENSION_LIST);
if (value != null ) {
var st=Clazz.new_($I$(3,1).c$$S,[value]);
while (st.hasMoreTokens$()){
var extensionName=st.nextToken$();
C$.debug$S("The file " + jar.getName$() + " appears to depend on " + extensionName );
var extName=extensionName + "-" + $I$(2).EXTENSION_NAME.toString() ;
if (attr.getValue$S(extName) == null ) {
C$.debug$S("The jar file " + jar.getName$() + " appers to depend on " + extensionName + " but does not define the " + extName + " attribute in its manifest " );
} else {
if (!this.checkExtension$S$java_util_jar_Attributes(extensionName, attr)) {
C$.debug$S("Failed installing " + extensionName);
result=false;
}}}
} else {
C$.debug$S("No dependencies for " + jar.getName$());
}}return result;
});

Clazz.newMeth(C$, 'checkExtension$S$java_util_jar_Attributes',  function (extensionName, attr) {
C$.debug$S("Checking extension " + extensionName);
if (this.checkExtensionAgainstInstalled$S$java_util_jar_Attributes(extensionName, attr)) return true;
C$.debug$S("Extension not currently installed ");
var reqInfo=Clazz.new_($I$(4,1).c$$S$java_util_jar_Attributes,[extensionName, attr]);
return this.installExtension$sun_misc_ExtensionInfo$sun_misc_ExtensionInfo(reqInfo, null);
});

Clazz.newMeth(C$, 'checkExtensionAgainstInstalled$S$java_util_jar_Attributes',  function (extensionName, attr) {
var fExtension=p$1.checkExtensionExists$S.apply(this, [extensionName]);
if (fExtension != null ) {
try {
if (this.checkExtensionAgainst$S$java_util_jar_Attributes$java_io_File(extensionName, attr, fExtension)) return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
p$1.debugException$Throwable.apply(this, [e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
p$1.debugException$Throwable.apply(this, [e]);
}
} else {
throw e$$;
}
}
return false;
} else {
var installedExts;
try {
installedExts=p$1.getInstalledExtensions.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
p$1.debugException$Throwable.apply(this, [e]);
return false;
} else {
throw e;
}
}
for (var i=0; i < installedExts.length; i++) {
try {
if (this.checkExtensionAgainst$S$java_util_jar_Attributes$java_io_File(extensionName, attr, installedExts[i])) return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
p$1.debugException$Throwable.apply(this, [e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
p$1.debugException$Throwable.apply(this, [e]);
}
} else {
throw e$$;
}
}
}
}return false;
});

Clazz.newMeth(C$, 'checkExtensionAgainst$S$java_util_jar_Attributes$java_io_File',  function (extensionName, attr, file) {
C$.debug$S("Checking extension " + extensionName + " against " + file.getName$() );
var man;
try {
man=$I$(5,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.ExtensionDependency$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExtensionDependency$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (!this.$finals$.file.exists$()) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,[this.$finals$.file.getName$()]);
var jarFile=Clazz.new_($I$(6,1).c$$java_io_File,[this.$finals$.file]);
return jarFile.getManifest$();
});
})()
), Clazz.new_(P$.ExtensionDependency$1.$init$,[this, {file:file}]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
if (Clazz.instanceOf(e.getException$(), "java.io.FileNotFoundException")) throw e.getException$();
throw e.getException$();
} else {
throw e;
}
}
var reqInfo=Clazz.new_($I$(4,1).c$$S$java_util_jar_Attributes,[extensionName, attr]);
C$.debug$S("Requested Extension : " + reqInfo);
var isCompatible=4;
var instInfo=null;
if (man != null ) {
var instAttr=man.getMainAttributes$();
if (instAttr != null ) {
instInfo=Clazz.new_($I$(4,1).c$$S$java_util_jar_Attributes,[null, instAttr]);
C$.debug$S("Extension Installed " + instInfo);
isCompatible=instInfo.isCompatibleWith$sun_misc_ExtensionInfo(reqInfo);
switch (isCompatible) {
case 0:
C$.debug$S("Extensions are compatible");
return true;
case 4:
C$.debug$S("Extensions are incompatible");
return false;
default:
C$.debug$S("Extensions require an upgrade or vendor switch");
return this.installExtension$sun_misc_ExtensionInfo$sun_misc_ExtensionInfo(reqInfo, instInfo);
}
}}return false;
});

Clazz.newMeth(C$, 'installExtension$sun_misc_ExtensionInfo$sun_misc_ExtensionInfo',  function (reqInfo, instInfo) {
var currentProviders;
{
var tmp=C$.providers.clone$();
currentProviders=tmp;
}for (var e=currentProviders.elements$(); e.hasMoreElements$(); ) {
var eip=e.nextElement$();
if (eip != null ) {
if (eip.installExtension$sun_misc_ExtensionInfo$sun_misc_ExtensionInfo(reqInfo, instInfo)) {
C$.debug$S(reqInfo.name + " installation successful");
var cl=$I$(7).getLauncher$().getClassLoader$().getParent$();
p$1.addNewExtensionsToClassLoader$sun_misc_Launcher_ExtClassLoader.apply(this, [cl]);
return true;
}}}
C$.debug$S(reqInfo.name + " installation failed");
return false;
});

Clazz.newMeth(C$, 'checkExtensionExists$S',  function (extensionName) {
var extName=extensionName;
var fileExt=Clazz.array(String, -1, [".jar", ".zip"]);
return $I$(5,"doPrivileged$java_security_PrivilegedAction",[((P$.ExtensionDependency$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExtensionDependency$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
var fExtension;
var dirs=$I$(8).getExtDirs$();
for (var i=0; i < dirs.length; i++) {
for (var j=0; j < this.$finals$.fileExt.length; j++) {
if (this.$finals$.extName.toLowerCase$().endsWith$S(this.$finals$.fileExt[j])) {
fExtension=Clazz.new_($I$(9,1).c$$java_io_File$S,[dirs[i], this.$finals$.extName]);
} else {
fExtension=Clazz.new_($I$(9,1).c$$java_io_File$S,[dirs[i], this.$finals$.extName + this.$finals$.fileExt[j]]);
}$I$(8,"debug$S",["checkExtensionExists:fileName " + fExtension.getName$()]);
if (fExtension.exists$()) {
return fExtension;
}}
}
return null;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
p$1.debugException$Throwable.apply(this.b$['sun.misc.ExtensionDependency'], [e]);
return null;
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.ExtensionDependency$2.$init$,[this, {fileExt:fileExt,extName:extName}]))]);
}, p$1);

Clazz.newMeth(C$, 'getExtDirs$',  function () {
var s=System.getProperty$S("java.ext.dirs");
var dirs;
if (s != null ) {
var st=Clazz.new_($I$(3,1).c$$S$S,[s, "/"]);
var count=st.countTokens$();
C$.debug$S("getExtDirs count " + count);
dirs=Clazz.array($I$(9), [count]);
for (var i=0; i < count; i++) {
dirs[i]=Clazz.new_([st.nextToken$()],$I$(9,1).c$$S);
C$.debug$S("getExtDirs dirs[" + i + "] " + dirs[i] );
}
} else {
dirs=Clazz.array($I$(9), [0]);
C$.debug$S("getExtDirs dirs " + dirs);
}C$.debug$S("getExtDirs dirs.length " + dirs.length);
return dirs;
}, 1);

Clazz.newMeth(C$, 'getExtFiles$java_io_FileA',  function (dirs) {
var urls=Clazz.new_($I$(1,1));
for (var i=0; i < dirs.length; i++) {
var files=dirs[i].list$java_io_FilenameFilter(Clazz.new_($I$(10,1)));
if (files != null ) {
C$.debug$S("getExtFiles files.length " + files.length);
for (var j=0; j < files.length; j++) {
var f=Clazz.new_($I$(9,1).c$$java_io_File$S,[dirs[i], files[j]]);
urls.add$O(f);
C$.debug$S("getExtFiles f[" + j + "] " + f );
}
}}
var ua=Clazz.array($I$(9), [urls.size$()]);
urls.copyInto$OA(ua);
C$.debug$S("getExtFiles ua.length " + ua.length);
return ua;
}, 1);

Clazz.newMeth(C$, 'getInstalledExtensions',  function () {
return $I$(5,"doPrivileged$java_security_PrivilegedAction",[((P$.ExtensionDependency$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExtensionDependency$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
return $I$(8,"getExtFiles$java_io_FileA",[$I$(8).getExtDirs$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(8).debug$S("Cannot get list of installed extensions");
p$1.debugException$Throwable.apply(this.b$['sun.misc.ExtensionDependency'], [e]);
return Clazz.array($I$(9), [0]);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.ExtensionDependency$3.$init$,[this, null]))]);
}, p$1);

Clazz.newMeth(C$, 'addNewExtensionsToClassLoader$sun_misc_Launcher_ExtClassLoader',  function (cl) {
try {
var installedExts=p$1.getInstalledExtensions.apply(this, []);
for (var i=0; i < installedExts.length; i++) {
var instFile=installedExts[i];
var instURL=$I$(5,"doPrivileged$java_security_PrivilegedAction",[((P$.ExtensionDependency$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ExtensionDependency$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
return $I$(11).fileToEncodedURL$java_io_File(this.$finals$.instFile);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
p$1.debugException$Throwable.apply(this.b$['sun.misc.ExtensionDependency'], [e]);
return null;
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.ExtensionDependency$4.$init$,[this, {instFile:instFile}]))]);
if (instURL != null ) {
var urls=cl.getURLs$();
var found=false;
for (var j=0; j < urls.length; j++) {
C$.debug$S("URL[" + j + "] is " + urls[j] + " looking for " + instURL );
if (urls[j].toString().compareToIgnoreCase$S(instURL.toString()) == 0) {
found=true;
C$.debug$S("Found !");
}}
if (!found) {
C$.debug$S("Not Found ! adding to the classloader " + instURL);
cl.addExtURL$java_net_URL(instURL);
}}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
return Boolean.TRUE;
}, p$1);

Clazz.newMeth(C$, 'debug$S',  function (s) {
if (false) {
System.err.println$S(s);
}}, 1);

Clazz.newMeth(C$, 'debugException$Throwable',  function (e) {
if (false) {
e.printStackTrace$();
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

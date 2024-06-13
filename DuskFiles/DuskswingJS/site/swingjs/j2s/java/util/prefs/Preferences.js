(function(){var P$=Clazz.newPackage("java.util.prefs"),I$=[[0,'RuntimePermission','java.security.AccessController','java.security.AllPermission','Thread','InternalError','java.util.prefs.Preferences','java.util.prefs.XmlSupport']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Preferences");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['factory','java.util.prefs.PreferencesFactory','prefsPerm','java.security.Permission']]]

Clazz.newMeth(C$, 'factory$',  function () {
var factoryName=$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.Preferences$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Preferences$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return System.getProperty$S("java.util.prefs.PreferencesFactory");
});
})()
), Clazz.new_(P$.Preferences$1.$init$,[this, null]))]);
if (factoryName != null ) {
try {
return Clazz.forName(factoryName, false, ClassLoader.getSystemClassLoader$()).newInstance$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
try {
var sm=System.getSecurityManager$();
if (sm != null ) {
sm.checkPermission$java_security_Permission(Clazz.new_($I$(3,1)));
}return Clazz.forName(factoryName, false, $I$(4).currentThread$().getContextClassLoader$()).newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(5,1).c$$S$Throwable,["Can't instantiate Preferences factory " + factoryName, e]);
} else {
throw e;
}
}
} else {
throw ex;
}
}
}return $I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.Preferences$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Preferences$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(6).factory1$();
});
})()
), Clazz.new_(P$.Preferences$2.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'factory1$',  function () {
var osName=System.getProperty$S("os.name");
var platformFactory;
platformFactory="java.util.prefs.FileSystemPreferencesFactory";
try {
return Clazz.forName(platformFactory, false, Clazz.getClass(C$).getClassLoader$()).newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(5,1).c$$S$Throwable,["Can't instantiate platform default Preferences factory " + platformFactory, e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'userNodeForPackage$Class',  function (c) {
return C$.userRoot$().node$S(C$.nodeName$Class(c));
}, 1);

Clazz.newMeth(C$, 'systemNodeForPackage$Class',  function (c) {
return C$.systemRoot$().node$S(C$.nodeName$Class(c));
}, 1);

Clazz.newMeth(C$, 'nodeName$Class',  function (c) {
if (c.isArray$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Arrays have no associated preferences node."]);
var className=c.getName$();
var pkgEndIndex=className.lastIndexOf$I(".");
if (pkgEndIndex < 0) return "/<unnamed>";
var packageName=className.substring$I$I(0, pkgEndIndex);
return "/" + packageName.replace$C$C(".", "/");
}, 1);

Clazz.newMeth(C$, 'userRoot$',  function () {
var security=System.getSecurityManager$();
if (security != null ) security.checkPermission$java_security_Permission(C$.prefsPerm);
return C$.factory.userRoot$();
}, 1);

Clazz.newMeth(C$, 'systemRoot$',  function () {
var security=System.getSecurityManager$();
if (security != null ) security.checkPermission$java_security_Permission(C$.prefsPerm);
return C$.factory.systemRoot$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'importPreferences$java_io_InputStream',  function (is) {
$I$(7).importPreferences$java_io_InputStream(is);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.factory=C$.factory$();
C$.prefsPerm=Clazz.new_($I$(1,1).c$$S,["preferences"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:40 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

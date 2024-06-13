(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'sun.font.FontUtilities','java.security.AccessController','sun.font.FontManagerFactory','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontManagerFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['DEFAULT_CLASS'],'O',['instance','sun.font.FontManager']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance != null ) {
return C$.instance;
}$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.FontManagerFactory$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FontManagerFactory$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
var fmClassName=System.getProperty$S$S("sun.font.fontmanager", $I$(3).DEFAULT_CLASS);
var cl=ClassLoader.getSystemClassLoader$();
var fmClass=Clazz.forName(fmClassName, true, cl);
$I$(3).instance=fmClass.newInstance$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassNotFoundException") || Clazz.exceptionOf(ex,"InstantiationException") || Clazz.exceptionOf(ex,"IllegalAccessException")){
throw Clazz.new_($I$(4,1).c$$Throwable,[ex]);
} else {
throw ex;
}
}
return null;
});
})()
), Clazz.new_(P$.FontManagerFactory$1.$init$,[this, null]))]);
return C$.instance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instance=null;
{
if ($I$(1).isWindows) {
C$.DEFAULT_CLASS="sun.awt.Win32FontManager";
} else if ($I$(1).isMacOSX) {
C$.DEFAULT_CLASS="sun.font.CFontManager";
} else {
C$.DEFAULT_CLASS="sun.awt.X11FontManager";
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'java.security.AccessController','sun.font.FontUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontManagerNativeLibrary");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'load$',  function () {
}, 1);

C$.$static$=function(){C$.$static$=0;
{
$I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.FontManagerNativeLibrary$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FontManagerNativeLibrary$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
System.loadLibrary$S("awt");
if ($I$(2).isOpenJDK && System.getProperty$S("os.name").startsWith$S("Windows") ) {
System.loadLibrary$S("freetype");
}System.loadLibrary$S("fontmanager");
return null;
});
})()
), Clazz.new_(P$.FontManagerNativeLibrary$1.$init$,[this, null]))]);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

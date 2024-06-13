(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[[0,'RuntimePermission','java.util.ServiceConfigurationError','java.util.ServiceLoader','java.security.AccessController','java.nio.channels.spi.SelectorProvider','sun.nio.ch.DefaultSelectorProvider']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SelectorProvider");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['lock','java.lang.Object','provider','java.nio.channels.spi.SelectorProvider']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(Clazz.new_($I$(1,1).c$$S,["selectorProvider"]));
}, 1);

Clazz.newMeth(C$, 'loadProviderFromProperty$',  function () {
var cn=System.getProperty$S("java.nio.channels.spi.SelectorProvider");
if (cn == null ) return false;
try {
var c=Clazz.forName(cn, true, ClassLoader.getSystemClassLoader$());
C$.provider=c.newInstance$();
return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var x = e$$;
{
throw Clazz.new_($I$(2,1).c$$S$Throwable,[null, x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'loadProviderAsService$',  function () {
var sl=$I$(3,"load$Class$ClassLoader",[Clazz.getClass(C$), ClassLoader.getSystemClassLoader$()]);
var i=sl.iterator$();
for (; ; ) {
try {
if (!i.hasNext$()) return false;
C$.provider=i.next$();
return true;
} catch (sce) {
if (Clazz.exceptionOf(sce,"java.util.ServiceConfigurationError")){
if (Clazz.instanceOf(sce.getCause$(), "java.lang.SecurityException")) {
continue;
}throw sce;
} else {
throw sce;
}
}
}
}, 1);

Clazz.newMeth(C$, 'provider$',  function () {
{
if (C$.provider != null ) return C$.provider;
return $I$(4,"doPrivileged$java_security_PrivilegedAction",[((P$.SelectorProvider$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SelectorProvider$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if ($I$(5).loadProviderFromProperty$()) return $I$(5).provider;
if ($I$(5).loadProviderAsService$()) return $I$(5).provider;
$I$(5).provider=$I$(6).create$();
return $I$(5).provider;
});
})()
), Clazz.new_(P$.SelectorProvider$1.$init$,[this, null]))]);
}}, 1);

Clazz.newMeth(C$, 'inheritedChannel$',  function () {
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.lock= Clazz.new_();
C$.provider=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[[0,'java.security.AccessController',['java.nio.channels.spi.AsynchronousChannelProvider','.ProviderHolder'],'sun.nio.ch.DefaultAsynchronousChannelProvider','java.util.ServiceConfigurationError','java.util.ServiceLoader','java.nio.channels.spi.AsynchronousChannelProvider','RuntimePermission']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsynchronousChannelProvider", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ProviderHolder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'checkPermission$',  function () {
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(Clazz.new_($I$(7,1).c$$S,["asynchronousChannelProvider"]));
return null;
}, 1);

Clazz.newMeth(C$, 'c$$Void',  function (ignore) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Void.apply(this, [C$.checkPermission$()]);
}, 1);

Clazz.newMeth(C$, 'provider$',  function () {
return $I$(2).provider;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AsynchronousChannelProvider, "ProviderHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['provider','java.nio.channels.spi.AsynchronousChannelProvider']]]

Clazz.newMeth(C$, 'load$',  function () {
return $I$(1,"doPrivileged$java_security_PrivilegedAction",[((P$.AsynchronousChannelProvider$ProviderHolder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AsynchronousChannelProvider$ProviderHolder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var p;
p=$I$(2).loadProviderFromProperty$();
if (p != null ) return p;
p=$I$(2).loadProviderAsService$();
if (p != null ) return p;
return $I$(3).create$();
});
})()
), Clazz.new_(P$.AsynchronousChannelProvider$ProviderHolder$1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'loadProviderFromProperty$',  function () {
var cn=System.getProperty$S("java.nio.channels.spi.AsynchronousChannelProvider");
if (cn == null ) return null;
try {
var c=Clazz.forName(cn, true, ClassLoader.getSystemClassLoader$());
return c.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_($I$(4,1).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var x = e$$;
{
throw Clazz.new_($I$(4,1).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var x = e$$;
{
throw Clazz.new_($I$(4,1).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var x = e$$;
{
throw Clazz.new_($I$(4,1).c$$S$Throwable,[null, x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'loadProviderAsService$',  function () {
var sl=$I$(5,"load$Class$ClassLoader",[Clazz.getClass($I$(6)), ClassLoader.getSystemClassLoader$()]);
var i=sl.iterator$();
for (; ; ) {
try {
return (i.hasNext$()) ? i.next$() : null;
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

C$.$static$=function(){C$.$static$=0;
C$.provider=C$.load$();
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

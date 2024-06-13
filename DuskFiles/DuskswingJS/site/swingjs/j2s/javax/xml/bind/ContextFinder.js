(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,['javax.xml.bind.ServiceLoaderUtil','.ExceptionHandler'],'javax.xml.bind.Messages','javax.xml.bind.ServiceLoaderUtil','javax.xml.bind.ModuleUtil','java.util.Map','javax.xml.bind.JAXBContext','javax.xml.bind.JAXBContextFactory','java.security.AccessController','javax.xml.bind.GetPropertyAction','java.util.Properties','Thread']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ContextFinder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['logger','java.util.logging.Logger','EXCEPTION_HANDLER','javax.xml.bind.ServiceLoaderUtil.ExceptionHandler']]]

Clazz.newMeth(C$, 'handleInvocationTargetException$java_lang_reflect_InvocationTargetException',  function (x) {
var t=x.getTargetException$();
if (t != null ) {
if (Clazz.instanceOf(t, "javax.xml.bind.JAXBException")) throw t;
if (Clazz.instanceOf(t, "java.lang.RuntimeException")) throw t;
if (Clazz.instanceOf(t, "java.lang.Error")) throw t;
return t;
}return x;
}, 1);

Clazz.newMeth(C$, 'handleClassCastException$Class$Class',  function (originalType, targetType) {
var targetTypeURL=C$.which$Class(targetType);
return Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(2,"format$S$O$O",["JAXBContext.IllegalCast", C$.getClassClassLoader$Class(originalType).getResource$S("javax/xml/bind/JAXBContext.class"), targetTypeURL])]);
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassA$S$ClassLoader$java_util_Map',  function (contextPath, contextPathClasses, className, classLoader, properties) {
try {
var spFactory=$I$(3).safeLoadClass$S$S$ClassLoader(className, "com.sun.xml.internal.bind.v2.ContextFactory", classLoader);
return C$.newInstance$S$ClassA$Class$ClassLoader$java_util_Map(contextPath, contextPathClasses, spFactory, classLoader, properties);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(2).format$S("ContextFinder.DefaultProviderNotFound"), x]);
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException") || Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var x = e$$;
{
throw x;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(2).format$S$O$O("ContextFinder.CouldNotInstantiate", className, x), x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassA$Class$ClassLoader$java_util_Map',  function (contextPath, contextPathClasses, spFactory, classLoader, properties) {
try {
$I$(4).delegateAddOpensToImplModule$ClassA$Class(contextPathClasses, spFactory);
var context=null;
try {
var m=spFactory.getMethod$S$ClassA("createContext", Clazz.array(Class, -1, [Clazz.getClass(String), Clazz.getClass(ClassLoader), Clazz.getClass($I$(5),['clear$','compute$O$java_util_function_BiFunction','computeIfAbsent$O$java_util_function_Function','computeIfPresent$O$java_util_function_BiFunction','containsKey$O','containsValue$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$O','hashCode$','isEmpty$','keySet$','merge$O$O$java_util_function_BiFunction','put$O$O','putAll$java_util_Map','putIfAbsent$O$O','remove$O','remove$O$O','replace$O$O$O','replace$O$O','replaceAll$java_util_function_BiFunction','size$','values$','秘ensureJavaMap$java_util_Map','秘get$O$O','秘hasKey$java_util_Map$O','秘isSimple$java_util_Map','秘set$java_util_Map$O$O'])]));
var obj=C$.instantiateProviderIfNecessary$Class(spFactory);
context=m.invoke$O$OA(obj, Clazz.array(java.lang.Object, -1, [contextPath, classLoader, properties]));
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"NoSuchMethodException")){
} else {
throw ignored;
}
}
if (context == null ) {
var m=spFactory.getMethod$S$ClassA("createContext", Clazz.array(Class, -1, [Clazz.getClass(String), Clazz.getClass(ClassLoader)]));
var obj=C$.instantiateProviderIfNecessary$Class(spFactory);
context=m.invoke$O$OA(obj, Clazz.array(java.lang.Object, -1, [contextPath, classLoader]));
}if (!(Clazz.instanceOf(context, "javax.xml.bind.JAXBContext"))) {
throw C$.handleClassCastException$Class$Class(context.getClass$(), Clazz.getClass($I$(6)));
}return context;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var x = e$$;
{
var e=C$.handleInvocationTargetException$java_lang_reflect_InvocationTargetException(x);
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(2).format$S$O$O("ContextFinder.CouldNotInstantiate", spFactory, e), e]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(2).format$S$O$O("ContextFinder.CouldNotInstantiate", spFactory, x), x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'instantiateProviderIfNecessary$Class',  function (implClass) {
try {
if (Clazz.getClass($I$(7),['createContext$ClassA$java_util_Map','createContext$S$ClassLoader$java_util_Map']).isAssignableFrom$Class(implClass)) {
return $I$(8,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.ContextFinder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContextFinder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.implClass.newInstance$();
});
})()
), Clazz.new_(P$.ContextFinder$2.$init$,[this, {implClass:implClass}]))]);
}return null;
} catch (x) {
if (Clazz.exceptionOf(x,"java.security.PrivilegedActionException")){
var e=(x.getCause$() == null ) ? x : x.getCause$();
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(2).format$S$O$O("ContextFinder.CouldNotInstantiate", implClass, e), e]);
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassA$java_util_Map$S',  function (classes, properties, className) {
var spi;
try {
spi=$I$(3,"safeLoadClass$S$S$ClassLoader",[className, "com.sun.xml.internal.bind.v2.ContextFactory", C$.getContextClassLoader$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(2).format$S("ContextFinder.DefaultProviderNotFound"), e]);
} else {
throw e;
}
}
return C$.newInstance$ClassA$java_util_Map$Class(classes, properties, spi);
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassA$java_util_Map$Class',  function (classes, properties, spFactory) {
try {
$I$(4).delegateAddOpensToImplModule$ClassA$Class(classes, spFactory);
var m=spFactory.getMethod$S$ClassA("createContext", Clazz.array(Class, -1, [Clazz.array(Class, -1), Clazz.getClass($I$(5),['clear$','compute$O$java_util_function_BiFunction','computeIfAbsent$O$java_util_function_Function','computeIfPresent$O$java_util_function_BiFunction','containsKey$O','containsValue$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$O','hashCode$','isEmpty$','keySet$','merge$O$O$java_util_function_BiFunction','put$O$O','putAll$java_util_Map','putIfAbsent$O$O','remove$O','remove$O$O','replace$O$O$O','replace$O$O','replaceAll$java_util_function_BiFunction','size$','values$','秘ensureJavaMap$java_util_Map','秘get$O$O','秘hasKey$java_util_Map$O','秘isSimple$java_util_Map','秘set$java_util_Map$O$O'])]));
var obj=C$.instantiateProviderIfNecessary$Class(spFactory);
var context=m.invoke$O$OA(obj, Clazz.array(java.lang.Object, -1, [classes, properties]));
if (!(Clazz.instanceOf(context, "javax.xml.bind.JAXBContext"))) {
throw C$.handleClassCastException$Class$Class(context.getClass$(), Clazz.getClass($I$(6)));
}return context;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException") || Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
var x=C$.handleInvocationTargetException$java_lang_reflect_InvocationTargetException(e);
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'find$S$S$ClassLoader$java_util_Map',  function (factoryId, contextPath, classLoader, properties) {
if (contextPath == null  || contextPath.isEmpty$() ) {
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(2).format$S("ContextFinder.NoPackageInContextPath")]);
}var contextPathClasses=$I$(4).getClassesFromContextPath$S$ClassLoader(contextPath, classLoader);
var factoryName=C$.classNameFromSystemProperties$();
if (factoryName != null ) return C$.newInstance$S$ClassA$S$ClassLoader$java_util_Map(contextPath, contextPathClasses, factoryName, classLoader, properties);
var obj=$I$(3,"firstByServiceLoader$Class$java_util_logging_Logger$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler",[Clazz.getClass($I$(7),['createContext$ClassA$java_util_Map','createContext$S$ClassLoader$java_util_Map']), C$.logger, C$.EXCEPTION_HANDLER]);
if (obj != null ) {
$I$(4,"delegateAddOpensToImplModule$ClassA$Class",[contextPathClasses, obj.getClass$()]);
return obj.createContext$S$ClassLoader$java_util_Map(contextPath, classLoader, properties);
}factoryName=C$.firstByServiceLoaderDeprecated$Class$ClassLoader(Clazz.getClass($I$(6)), classLoader);
if (factoryName != null ) return C$.newInstance$S$ClassA$S$ClassLoader$java_util_Map(contextPath, contextPathClasses, factoryName, classLoader, properties);
var ctxFactory=$I$(3).lookupUsingOSGiServiceLoader$S$java_util_logging_Logger("javax.xml.bind.JAXBContext", C$.logger);
if (ctxFactory != null ) {
return C$.newInstance$S$ClassA$Class$ClassLoader$java_util_Map(contextPath, contextPathClasses, ctxFactory, classLoader, properties);
}return C$.newInstance$S$ClassA$S$ClassLoader$java_util_Map(contextPath, contextPathClasses, "com.sun.xml.internal.bind.v2.ContextFactory", classLoader, properties);
}, 1);

Clazz.newMeth(C$, 'find$ClassA$java_util_Map',  function (classes, properties) {
for (var c, $c = 0, $$c = classes; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c.getPackage$() == null ) continue;
var jaxbPropertiesUrl=C$.getResourceUrl$Class$S(c, "jaxb.properties");
if (jaxbPropertiesUrl != null ) {
var factoryClassName=C$.classNameFromPackageProperties$java_net_URL$SA(jaxbPropertiesUrl, Clazz.array(String, -1, ["javax.xml.bind.JAXBContextFactory", "javax.xml.bind.context.factory"]));
return C$.newInstance$ClassA$java_util_Map$S(classes, properties, factoryClassName);
}}
var factoryClassName=C$.classNameFromSystemProperties$();
if (factoryClassName != null ) return C$.newInstance$ClassA$java_util_Map$S(classes, properties, factoryClassName);
var factory=$I$(3,"firstByServiceLoader$Class$java_util_logging_Logger$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler",[Clazz.getClass($I$(7),['createContext$ClassA$java_util_Map','createContext$S$ClassLoader$java_util_Map']), C$.logger, C$.EXCEPTION_HANDLER]);
if (factory != null ) {
$I$(4,"delegateAddOpensToImplModule$ClassA$Class",[classes, factory.getClass$()]);
return factory.createContext$ClassA$java_util_Map(classes, properties);
}var className=C$.firstByServiceLoaderDeprecated$Class$ClassLoader(Clazz.getClass($I$(6)), C$.getContextClassLoader$());
if (className != null ) return C$.newInstance$ClassA$java_util_Map$S(classes, properties, className);
var ctxFactoryClass=$I$(3).lookupUsingOSGiServiceLoader$S$java_util_logging_Logger("javax.xml.bind.JAXBContext", C$.logger);
if (ctxFactoryClass != null ) {
return C$.newInstance$ClassA$java_util_Map$Class(classes, properties, ctxFactoryClass);
}return C$.newInstance$ClassA$java_util_Map$S(classes, properties, "com.sun.xml.internal.bind.v2.ContextFactory");
}, 1);

Clazz.newMeth(C$, 'classNameFromPackageProperties$java_net_URL$SA',  function (packagePropertiesUrl, factoryIds) {
var props=C$.loadJAXBProperties$java_net_URL(packagePropertiesUrl);
for (var factoryId, $factoryId = 0, $$factoryId = factoryIds; $factoryId<$$factoryId.length&&((factoryId=($$factoryId[$factoryId])),1);$factoryId++) {
if (props.containsKey$O(factoryId)) {
return props.getProperty$S(factoryId);
}}
var propertiesUrl=packagePropertiesUrl.toExternalForm$();
var packageName=propertiesUrl.substring$I$I(0, propertiesUrl.indexOf$S("/jaxb.properties"));
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(2).format$S$O$O("ContextFinder.MissingProperty", packageName, factoryIds[0])]);
}, 1);

Clazz.newMeth(C$, 'classNameFromSystemProperties$',  function () {
var factoryClassName=C$.getSystemProperty$S("javax.xml.bind.JAXBContextFactory");
if (factoryClassName != null ) {
return factoryClassName;
}factoryClassName=C$.getDeprecatedSystemProperty$S("javax.xml.bind.context.factory");
if (factoryClassName != null ) {
return factoryClassName;
}factoryClassName=C$.getDeprecatedSystemProperty$S(Clazz.getClass($I$(6)).getName$());
if (factoryClassName != null ) {
return factoryClassName;
}return null;
}, 1);

Clazz.newMeth(C$, 'getDeprecatedSystemProperty$S',  function (property) {
var value=C$.getSystemProperty$S(property);
if (value != null ) {
}return value;
}, 1);

Clazz.newMeth(C$, 'getSystemProperty$S',  function (property) {
var value=$I$(8,"doPrivileged$java_security_PrivilegedAction",[Clazz.new_($I$(9,1).c$$S,[property])]);
if (value != null ) {
} else {
}return value;
}, 1);

Clazz.newMeth(C$, 'loadJAXBProperties$java_net_URL',  function (url) {
try {
var props;
props=Clazz.new_($I$(10,1));
var is=url.openStream$();
props.load$java_io_InputStream(is);
is.close$();
return props;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[ioe.toString(), ioe]);
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'getResourceUrl$Class$S',  function (clazz, resourceName) {
return clazz.getResource$S(resourceName);
}, 1);

Clazz.newMeth(C$, 'which$Class$ClassLoader',  function (clazz, loader) {
var classnameAsResource=clazz.getName$().replace$C$C(".", "/") + ".class";
if (loader == null ) {
loader=C$.getSystemClassLoader$();
}return loader.getResource$S(classnameAsResource);
}, 1);

Clazz.newMeth(C$, 'which$Class',  function (clazz) {
return C$.which$Class$ClassLoader(clazz, C$.getClassClassLoader$Class(clazz));
}, 1);

Clazz.newMeth(C$, 'getContextClassLoader$',  function () {
if (System.getSecurityManager$() == null ) {
return $I$(11).currentThread$().getContextClassLoader$();
} else {
return $I$(8,"doPrivileged$java_security_PrivilegedAction",[((P$.ContextFinder$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContextFinder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(11).currentThread$().getContextClassLoader$();
});
})()
), Clazz.new_(P$.ContextFinder$3.$init$,[this, null]))]);
}}, 1);

Clazz.newMeth(C$, 'getClassClassLoader$Class',  function (c) {
if (System.getSecurityManager$() == null ) {
return c.getClassLoader$();
} else {
return $I$(8,"doPrivileged$java_security_PrivilegedAction",[((P$.ContextFinder$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContextFinder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.c.getClassLoader$();
});
})()
), Clazz.new_(P$.ContextFinder$4.$init$,[this, {c:c}]))]);
}}, 1);

Clazz.newMeth(C$, 'getSystemClassLoader$',  function () {
if (System.getSecurityManager$() == null ) {
return ClassLoader.getSystemClassLoader$();
} else {
return $I$(8,"doPrivileged$java_security_PrivilegedAction",[((P$.ContextFinder$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContextFinder$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return ClassLoader.getSystemClassLoader$();
});
})()
), Clazz.new_(P$.ContextFinder$5.$init$,[this, null]))]);
}}, 1);

Clazz.newMeth(C$, 'firstByServiceLoaderDeprecated$Class$ClassLoader',  function (spiClass, classLoader) {
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
try {
} catch (t) {
}
};
C$.EXCEPTION_HANDLER=((P$.ContextFinder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContextFinder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.xml.bind.ServiceLoaderUtil','.ExceptionHandler']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'createException$Throwable$S',  function (throwable, message) {
return Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[message, throwable]);
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.ContextFinder$1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

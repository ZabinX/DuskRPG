(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'java.util.ServiceLoader','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ServiceLoaderUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ExceptionHandler',1032]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'firstByServiceLoader$Class$java_util_logging_Logger$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler',  function (spiClass, logger, handler) {
try {
var serviceLoader=$I$(1).load$Class(spiClass);
for (var impl, $impl = serviceLoader.iterator$(); $impl.hasNext$()&&((impl=($impl.next$())),1);) {
return impl;
}
} catch (t) {
throw handler.createException$Throwable$S(t, "Error while searching for service [" + spiClass.getName$() + "]" );
}
return null;
}, 1);

Clazz.newMeth(C$, 'lookupUsingOSGiServiceLoader$S$java_util_logging_Logger',  function (factoryId, logger) {
try {
var serviceClass=Clazz.forName(factoryId);
var target=Clazz.forName("org.glassfish.hk2.osgiresourcelocator.ServiceLoader");
var m=target.getMethod$S$ClassA("lookupProviderClasses", Clazz.array(Class, -1, [Clazz.getClass(Class)]));
var iter=(m.invoke$O$OA(null, Clazz.array(java.lang.Object, -1, [serviceClass]))).iterator$();
if (iter.hasNext$()) {
var next=iter.next$();
return next;
} else {
return null;
}} catch (ignored) {
if (Clazz.exceptionOf(ignored,"IllegalAccessException") || Clazz.exceptionOf(ignored,"java.lang.reflect.InvocationTargetException") || Clazz.exceptionOf(ignored,"ClassNotFoundException") || Clazz.exceptionOf(ignored,"NoSuchMethodException")){
return null;
} else {
throw ignored;
}
}
}, 1);

Clazz.newMeth(C$, 'checkPackageAccess$S',  function (className) {
var s=System.getSecurityManager$();
if (s != null ) {
var i=className.lastIndexOf$I(".");
if (i != -1) {
s.checkPackageAccess$S(className.substring$I$I(0, i));
}}}, 1);

Clazz.newMeth(C$, 'nullSafeLoadClass$S$ClassLoader',  function (className, classLoader) {
if (classLoader == null ) {
return Clazz.forName(className);
} else {
return classLoader.loadClass$S(className);
}}, 1);

Clazz.newMeth(C$, 'newInstance$S$S$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler',  function (className, defaultImplClassName, handler) {
try {
return C$.safeLoadClass$S$S$ClassLoader(className, defaultImplClassName, C$.contextClassLoader$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler(handler)).newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw handler.createException$Throwable$S(x, "Provider " + className + " not found" );
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw handler.createException$Throwable$S(x, "Provider " + className + " could not be instantiated: " + x );
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'safeLoadClass$S$S$ClassLoader',  function (className, defaultImplClassName, classLoader) {
try {
C$.checkPackageAccess$S(className);
} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
if (defaultImplClassName != null  && defaultImplClassName.equals$O(className) ) {
return Clazz.forName(className);
}throw se;
} else {
throw se;
}
}
return C$.nullSafeLoadClass$S$ClassLoader(className, classLoader);
}, 1);

Clazz.newMeth(C$, 'contextClassLoader$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler',  function (exceptionHandler) {
try {
return $I$(2).currentThread$().getContextClassLoader$();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
throw exceptionHandler.createException$Throwable$S(x, x.toString());
} else {
throw x;
}
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ServiceLoaderUtil, "ExceptionHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

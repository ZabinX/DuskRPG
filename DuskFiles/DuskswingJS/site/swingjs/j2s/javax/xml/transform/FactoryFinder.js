(function(){var P$=Clazz.newPackage("javax.xml.transform"),I$=[[0,'java.util.Properties','javax.xml.transform.SecuritySupport',['javax.xml.transform.FactoryFinder','.ConfigurationError'],'java.io.File']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FactoryFinder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ConfigurationError',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['debug','firstTime'],'O',['cacheProps','java.util.Properties','ss','javax.xml.transform.SecuritySupport']]]

Clazz.newMeth(C$, 'dPrint$S',  function (msg) {
if (C$.debug) {
System.err.println$S("JAXP: " + msg);
}}, 1);

Clazz.newMeth(C$, 'getProviderClass$S$ClassLoader$Z$Z',  function (className, cl, doFallback, useBSClsLoader) {
try {
if (cl == null ) {
if (useBSClsLoader) {
return Clazz.forName(className, true, Clazz.getClass(C$).getClassLoader$());
} else {
cl=C$.ss.getContextClassLoader$();
if (cl == null ) {
throw Clazz.new_(Clazz.load('ClassNotFoundException'));
} else {
return cl.loadClass$S(className);
}}} else {
return cl.loadClass$S(className);
}} catch (e1) {
if (Clazz.exceptionOf(e1,"ClassNotFoundException")){
if (doFallback) {
return Clazz.forName(className, true, Clazz.getClass(C$).getClassLoader$());
} else {
throw e1;
}} else {
throw e1;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader$Z',  function (className, cl, doFallback) {
return C$.newInstance$S$ClassLoader$Z$Z$Z(className, cl, doFallback, false, false);
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader$Z$Z$Z',  function (className, cl, doFallback, useBSClsLoader, useServicesMechanism) {
try {
var providerClass=C$.getProviderClass$S$ClassLoader$Z$Z(className, cl, doFallback, useBSClsLoader);
var instance=null;
if (!useServicesMechanism) {
instance=C$.newInstanceNoServiceLoader$Class(providerClass);
}if (instance == null ) {
instance=providerClass.newInstance$();
}if (C$.debug) {
C$.dPrint$S("created new instance of " + providerClass + " using ClassLoader: " + cl );
}return instance;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_($I$(3,1).c$$S$Exception,["Provider " + className + " not found" , x]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw Clazz.new_($I$(3,1).c$$S$Exception,["Provider " + className + " could not be instantiated: " + x , x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstanceNoServiceLoader$Class',  function (providerClass) {
if (System.getSecurityManager$() == null ) {
return null;
}try {
var creationMethod=providerClass.getDeclaredMethod$S$ClassA("newTransformerFactoryNoServiceLoader", Clazz.array(Class, -1, []));
return creationMethod.invoke$O$OA(null, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var exc = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var exc = e$$;
{
return null;
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'find$S$S',  function (factoryId, fallbackClassName) {
C$.dPrint$S("find factoryId =" + factoryId);
try {
var systemProp=C$.ss.getSystemProperty$S(factoryId);
if (systemProp != null ) {
C$.dPrint$S("found system property, value=" + systemProp);
return C$.newInstance$S$ClassLoader$Z$Z$Z(systemProp, null, true, false, true);
}} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
if (C$.debug) se.printStackTrace$();
} else {
throw se;
}
}
try {
var factoryClassName=null;
if (C$.firstTime) {
{
if (C$.firstTime) {
var configFile=C$.ss.getSystemProperty$S("java.home") + $I$(4).separator + "lib" + $I$(4).separator + "jaxp.properties" ;
var f=Clazz.new_($I$(4,1).c$$S,[configFile]);
C$.firstTime=false;
if (C$.ss.doesFileExist$java_io_File(f)) {
C$.dPrint$S("Read properties file " + f);
C$.cacheProps.load$java_io_InputStream(C$.ss.getFileInputStream$java_io_File(f));
}}}}factoryClassName=C$.cacheProps.getProperty$S(factoryId);
if (factoryClassName != null ) {
C$.dPrint$S("found in $java.home/jaxp.properties, value=" + factoryClassName);
return C$.newInstance$S$ClassLoader$Z$Z$Z(factoryClassName, null, true, false, true);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (C$.debug) ex.printStackTrace$();
} else {
throw ex;
}
}
if (fallbackClassName == null ) {
throw Clazz.new_($I$(3,1).c$$S$Exception,["Provider for " + factoryId + " cannot be found" , null]);
}C$.dPrint$S("loaded from fallback value: " + fallbackClassName);
return C$.newInstance$S$ClassLoader$Z$Z$Z(fallbackClassName, null, true, false, true);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.debug=false;
C$.cacheProps=Clazz.new_($I$(1,1));
C$.firstTime=true;
C$.ss=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FactoryFinder, "ConfigurationError", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Error');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['exception','Exception']]]

Clazz.newMeth(C$, 'c$$S$Exception',  function (msg, x) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
this.exception=x;
}, 1);

Clazz.newMeth(C$, 'getException$',  function () {
return this.exception;
});

Clazz.newMeth(C$, 'getCause$',  function () {
return this.exception;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

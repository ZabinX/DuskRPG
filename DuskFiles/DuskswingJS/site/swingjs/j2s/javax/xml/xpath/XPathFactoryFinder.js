(function(){var P$=Clazz.newPackage("javax.xml.xpath"),p$1={},I$=[[0,'javax.xml.xpath.SecuritySupport','java.util.Properties','javax.xml.xpath.XPathFactory','java.io.File','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XPathFactoryFinder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SingleIterator',1034]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['classLoader','ClassLoader']]
,['Z',['debug','firstTime'],'O',['ss','javax.xml.xpath.SecuritySupport','cacheProps','java.util.Properties','SERVICE_CLASS','Class']]]

Clazz.newMeth(C$, 'debugPrintln$S',  function (msg) {
if (C$.debug) {
System.err.println$S("JAXP: " + msg);
}}, 1);

Clazz.newMeth(C$, 'c$$ClassLoader',  function (loader) {
;C$.$init$.apply(this);
this.classLoader=loader;
if (C$.debug) {
p$1.debugDisplayClassLoader.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'debugDisplayClassLoader',  function () {
try {
if (this.classLoader === C$.ss.getContextClassLoader$() ) {
C$.debugPrintln$S("using thread context class loader (" + this.classLoader + ") for search" );
return;
}} catch (e) {
;}
if (this.classLoader === ClassLoader.getSystemClassLoader$() ) {
C$.debugPrintln$S("using system class loader (" + this.classLoader + ") for search" );
return;
}C$.debugPrintln$S("using class loader (" + this.classLoader + ") for search" );
}, p$1);

Clazz.newMeth(C$, 'newFactory$S',  function (uri) {
if (uri == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var f=p$1._newFactory$S.apply(this, [uri]);
if (f != null ) {
C$.debugPrintln$S("factory '" + f.getClass$().getName$() + "' was found for " + uri );
} else {
C$.debugPrintln$S("unable to find a factory for " + uri);
}return f;
});

Clazz.newMeth(C$, '_newFactory$S',  function (uri) {
var xpathFactory;
var propertyName=C$.SERVICE_CLASS.getName$() + ":" + uri ;
try {
C$.debugPrintln$S("Looking up system property '" + propertyName + "'" );
var r=C$.ss.getSystemProperty$S(propertyName);
if (r != null ) {
C$.debugPrintln$S("The value is '" + r + "'" );
xpathFactory=this.createInstance$S$Z(r, true);
if (xpathFactory != null ) return xpathFactory;
} else C$.debugPrintln$S("The property is undefined.");
} catch (t) {
if (C$.debug) {
C$.debugPrintln$S("failed to look up system property '" + propertyName + "'" );
t.printStackTrace$();
}}
var javah=C$.ss.getSystemProperty$S("java.home");
var configFile=javah + $I$(4).separator + "lib" + $I$(4).separator + "jaxp.properties" ;
var factoryClassName=null;
try {
if (C$.firstTime) {
{
if (C$.firstTime) {
var f=Clazz.new_($I$(4,1).c$$S,[configFile]);
C$.firstTime=false;
if (C$.ss.doesFileExist$java_io_File(f)) {
C$.debugPrintln$S("Read properties file " + f);
C$.cacheProps.load$java_io_InputStream(C$.ss.getFileInputStream$java_io_File(f));
}}}}factoryClassName=C$.cacheProps.getProperty$S(propertyName);
C$.debugPrintln$S("found " + factoryClassName + " in $java.home/jaxp.properties" );
if (factoryClassName != null ) {
xpathFactory=this.createInstance$S$Z(factoryClassName, true);
if (xpathFactory != null ) {
return xpathFactory;
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (C$.debug) {
ex.printStackTrace$();
}} else {
throw ex;
}
}
if (uri.equals$O("http://java.sun.com/jaxp/xpath/dom")) {
C$.debugPrintln$S("attempting to use the platform default W3C DOM XPath lib");
return this.createInstance$S$Z("com.sun.org.apache.xpath.internal.jaxp.XPathFactoryImpl", true);
}C$.debugPrintln$S("all things were tried, but none was found. bailing out.");
return null;
}, p$1);

Clazz.newMeth(C$, 'createClass$S',  function (className) {
var clazz;
try {
if (this.classLoader != null ) {
clazz=this.classLoader.loadClass$S(className);
} else {
clazz=Clazz.forName(className);
}} catch (t) {
if (C$.debug) t.printStackTrace$();
return null;
}
return clazz;
}, p$1);

Clazz.newMeth(C$, 'createInstance$S',  function (className) {
return this.createInstance$S$Z(className, false);
});

Clazz.newMeth(C$, 'createInstance$S$Z',  function (className, useServicesMechanism) {
var xPathFactory=null;
C$.debugPrintln$S("createInstance(" + className + ")" );
var clazz=p$1.createClass$S.apply(this, [className]);
if (clazz == null ) {
C$.debugPrintln$S("failed to getClass(" + className + ")" );
return null;
}C$.debugPrintln$S("loaded " + className + " from " + C$.which$Class(clazz) );
try {
if (!useServicesMechanism) {
xPathFactory=C$.newInstanceNoServiceLoader$Class(clazz);
}if (xPathFactory == null ) {
xPathFactory=clazz.newInstance$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var classCastException = e$$;
{
C$.debugPrintln$S("could not instantiate " + clazz.getName$());
if (C$.debug) {
classCastException.printStackTrace$();
}return null;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var illegalAccessException = e$$;
{
C$.debugPrintln$S("could not instantiate " + clazz.getName$());
if (C$.debug) {
illegalAccessException.printStackTrace$();
}return null;
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var instantiationException = e$$;
{
C$.debugPrintln$S("could not instantiate " + clazz.getName$());
if (C$.debug) {
instantiationException.printStackTrace$();
}return null;
}
} else {
throw e$$;
}
}
return xPathFactory;
});

Clazz.newMeth(C$, 'newInstanceNoServiceLoader$Class',  function (providerClass) {
if (System.getSecurityManager$() == null ) {
return null;
}try {
var creationMethod=providerClass.getDeclaredMethod$S$ClassA("newXPathFactoryNoServiceLoader", Clazz.array(Class, -1, []));
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

Clazz.newMeth(C$, 'loadFromService$S$S$java_io_InputStream',  function (objectModel, inputName, $in) {
var xPathFactory=null;
var stringClassArray=Clazz.array(Class, -1, ["".getClass$()]);
var objectModelObjectArray=Clazz.array(java.lang.Object, -1, [objectModel]);
var isObjectModelSupportedMethod="isObjectModelSupported";
C$.debugPrintln$S("Reading " + inputName);
var configFile=Clazz.new_([Clazz.new_($I$(6,1).c$$java_io_InputStream,[$in])],$I$(5,1).c$$java_io_Reader);
var line=null;
while ((line=configFile.readLine$()) != null ){
var comment=line.indexOf$S("#");
switch (comment) {
case -1:
break;
case 0:
line="";
break;
default:
line=line.substring$I$I(0, comment);
break;
}
line=line.trim$();
if (line.length$() == 0) {
continue;
}var clazz=p$1.createClass$S.apply(this, [line]);
if (clazz == null ) {
continue;
}try {
xPathFactory=clazz.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var classCastExcpetion = e$$;
{
xPathFactory=null;
continue;
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var instantiationException = e$$;
{
xPathFactory=null;
continue;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var illegalAccessException = e$$;
{
xPathFactory=null;
continue;
}
} else {
throw e$$;
}
}
try {
var isObjectModelSupported=clazz.getMethod$S$ClassA("isObjectModelSupported", stringClassArray);
var supported=isObjectModelSupported.invoke$O$OA(xPathFactory, objectModelObjectArray);
if (supported.booleanValue$()) {
break;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var noSuchMethodException = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var illegalAccessException = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var invocationTargetException = e$$;
{
}
} else {
throw e$$;
}
}
xPathFactory=null;
}
configFile.close$();
return xPathFactory;
}, p$1);

Clazz.newMeth(C$, 'loadFromProperty$S$S$java_io_InputStream',  function (keyName, resourceName, $in) {
C$.debugPrintln$S("Reading " + resourceName);
var props=Clazz.new_($I$(2,1));
props.load$java_io_InputStream($in);
$in.close$();
var factoryClassName=props.getProperty$S(keyName);
if (factoryClassName != null ) {
C$.debugPrintln$S("found " + keyName + " = " + factoryClassName );
return this.createInstance$S$Z(factoryClassName, true);
} else {
C$.debugPrintln$S(keyName + " is not in the property file");
return null;
}}, p$1);

Clazz.newMeth(C$, 'which$Class',  function (clazz) {
return C$.which$S$ClassLoader(clazz.getName$(), clazz.getClassLoader$());
}, 1);

Clazz.newMeth(C$, 'which$S$ClassLoader',  function (classname, loader) {
var classnameAsResource=classname.replace$C$C(".", "/") + ".class";
if (loader == null ) loader=ClassLoader.getSystemClassLoader$();
var it=C$.ss.getResourceAsURL$ClassLoader$S(loader, classnameAsResource);
if (it != null ) {
return it.toString();
} else {
return null;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ss=Clazz.new_($I$(1,1));
C$.debug=false;
{
try {
C$.debug=C$.ss.getSystemProperty$S("jaxp.debug") != null ;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.debug=false;
} else {
throw e;
}
}
};
C$.cacheProps=Clazz.new_($I$(2,1));
C$.firstTime=true;
C$.SERVICE_CLASS=Clazz.getClass($I$(3));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.XPathFactoryFinder, "SingleIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.seen=false;
},1);

C$.$fields$=[['Z',['seen']]]

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return !this.seen;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.seen) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.seen=true;
return this.value$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.xml.validation"),p$1={},I$=[[0,'javax.xml.validation.SecuritySupport','java.util.Properties','javax.xml.validation.SchemaFactory','java.io.File']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SchemaFactoryFinder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['classLoader','ClassLoader']]
,['Z',['debug','firstTime'],'O',['ss','javax.xml.validation.SecuritySupport','cacheProps','java.util.Properties','SERVICE_CLASS','Class']]]

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

Clazz.newMeth(C$, 'newFactory$S',  function (schemaLanguage) {
if (schemaLanguage == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var f=p$1._newFactory$S.apply(this, [schemaLanguage]);
if (f != null ) {
C$.debugPrintln$S("factory '" + f.getClass$().getName$() + "' was found for " + schemaLanguage );
} else {
C$.debugPrintln$S("unable to find a factory for " + schemaLanguage);
}return f;
});

Clazz.newMeth(C$, '_newFactory$S',  function (schemaLanguage) {
var sf;
var propertyName=C$.SERVICE_CLASS.getName$() + ":" + schemaLanguage ;
try {
C$.debugPrintln$S("Looking up system property '" + propertyName + "'" );
var r=C$.ss.getSystemProperty$S(propertyName);
if (r != null ) {
C$.debugPrintln$S("The value is '" + r + "'" );
sf=this.createInstance$S$Z(r, true);
if (sf != null ) return sf;
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
sf=this.createInstance$S$Z(factoryClassName, true);
if (sf != null ) {
return sf;
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (C$.debug) {
ex.printStackTrace$();
}} else {
throw ex;
}
}
if (schemaLanguage.equals$O("http://www.w3.org/2001/XMLSchema")) {
C$.debugPrintln$S("attempting to use the platform default XML Schema validator");
return this.createInstance$S$Z("com.sun.org.apache.xerces.internal.jaxp.validation.XMLSchemaFactory", true);
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
var schemaFactory=null;
var clazz=p$1.createClass$S.apply(this, [className]);
if (clazz == null ) {
C$.debugPrintln$S("failed to getClass(" + className + ")" );
return null;
}C$.debugPrintln$S("loaded " + className + " from " + C$.which$Class(clazz) );
try {
if (!useServicesMechanism) {
schemaFactory=C$.newInstanceNoServiceLoader$Class(clazz);
}if (schemaFactory == null ) {
schemaFactory=clazz.newInstance$();
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
return schemaFactory;
});

Clazz.newMeth(C$, 'newInstanceNoServiceLoader$Class',  function (providerClass) {
return null;
}, 1);

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
C$.debug=false;
C$.ss=Clazz.new_($I$(1,1));
C$.cacheProps=Clazz.new_($I$(2,1));
C$.firstTime=true;
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
C$.SERVICE_CLASS=Clazz.getClass($I$(3));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

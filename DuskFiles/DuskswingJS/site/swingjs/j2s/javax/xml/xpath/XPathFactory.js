(function(){var P$=Clazz.newPackage("javax.xml.xpath"),I$=[[0,'javax.xml.xpath.SecuritySupport','javax.xml.xpath.XPathFactoryFinder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XPathFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['ss','javax.xml.xpath.SecuritySupport']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$',  function () {
try {
return C$.newInstance$S("http://java.sun.com/jaxp/xpath/dom");
} catch (xpathFactoryConfigurationException) {
if (Clazz.exceptionOf(xpathFactoryConfigurationException,"javax.xml.xpath.XPathFactoryConfigurationException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["XPathFactory#newInstance() failed to create an XPathFactory for the default object model: " + "http://java.sun.com/jaxp/xpath/dom" + " with the XPathFactoryConfigurationException: " + xpathFactoryConfigurationException.toString() ]);
} else {
throw xpathFactoryConfigurationException;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$S',  function (uri) {
if (uri == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["XPathFactory#newInstance(String uri) cannot be called with uri == null"]);
}if (uri.length$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["XPathFactory#newInstance(String uri) cannot be called with uri == \"\""]);
}var classLoader=C$.ss.getContextClassLoader$();
if (classLoader == null ) {
classLoader=Clazz.getClass(C$).getClassLoader$();
}var xpathFactory=Clazz.new_($I$(2,1).c$$ClassLoader,[classLoader]).newFactory$S(uri);
if (xpathFactory == null ) {
throw Clazz.new_(Clazz.load('javax.xml.xpath.XPathFactoryConfigurationException').c$$S,["No XPathFactory implementation found for the object model: " + uri]);
}return xpathFactory;
}, 1);

Clazz.newMeth(C$, 'newInstance$S$S$ClassLoader',  function (uri, factoryClassName, classLoader) {
var cl=classLoader;
if (uri == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["XPathFactory#newInstance(String uri) cannot be called with uri == null"]);
}if (uri.length$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["XPathFactory#newInstance(String uri) cannot be called with uri == \"\""]);
}if (cl == null ) {
cl=C$.ss.getContextClassLoader$();
}var f=Clazz.new_($I$(2,1).c$$ClassLoader,[cl]).createInstance$S(factoryClassName);
if (f == null ) {
throw Clazz.new_(Clazz.load('javax.xml.xpath.XPathFactoryConfigurationException').c$$S,["No XPathFactory implementation found for the object model: " + uri]);
}if (f.isObjectModelSupported$S(uri)) {
return f;
} else {
throw Clazz.new_(Clazz.load('javax.xml.xpath.XPathFactoryConfigurationException').c$$S,["Factory " + factoryClassName + " doesn't support given " + uri + " object model" ]);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ss=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

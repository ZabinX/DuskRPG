(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),I$=[[0,'javax.xml.sax.helpers.NewInstance','javax.xml.sax.helpers.ParserAdapter','javax.xml.sax.helpers.ParserFactory']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLReaderFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createXMLReader$',  function () {
var className=null;
var loader=$I$(1).getClassLoader$();
try {
className=System.getProperty$S("javax.xml.sax.driver");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
} else {
throw e;
}
}
if (className == null ) {
}if (className != null ) return C$.loadClass$ClassLoader$S(loader, className);
try {
return Clazz.new_([$I$(3).makeParser$()],$I$(2,1).c$$javax_xml_sax_Parser);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S,["Can\'t create default XMLReader; is system property javax.xml.sax.driver set?"]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createXMLReader$S',  function (className) {
return C$.loadClass$ClassLoader$S($I$(1).getClassLoader$(), className);
}, 1);

Clazz.newMeth(C$, 'loadClass$ClassLoader$S',  function (loader, className) {
try {
return $I$(1).newInstance$ClassLoader$S(loader, className);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e1 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " not found" , e1]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e2 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " found but cannot be loaded" , e2]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e3 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " loaded but cannot be instantiated (no empty public constructor?)" , e3]);
}
} else if (Clazz.exceptionOf(e$$,"ClassCastException")){
var e4 = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXException').c$$S$Exception,["SAX2 driver class " + className + " does not implement XMLReader" , e4]);
}
} else {
throw e$$;
}
}
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.xml.parsers"),I$=[[0,'javax.xml.parsers.FactoryFinder','javax.xml.parsers.FactoryConfigurationError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DocumentBuilderFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.validating=false;
this.namespaceAware=false;
this.whitespace=false;
this.expandEntityRef=true;
this.ignoreComments=false;
this.coalescing=false;
this.canonicalState=false;
},1);

C$.$fields$=[['Z',['validating','namespaceAware','whitespace','expandEntityRef','ignoreComments','coalescing','canonicalState']]
,['Z',['useXerces']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$',  function () {
try {
return $I$(1).find$S$S("javax.xml.parsers.DocumentBuilderFactory", C$.useXerces ? "com.sun.org.apache.xerces.internal.jaxp.DocumentBuilderFactoryImpl" : "swingjs.xml.JSXMLDocumentBuilderFactory");
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.parsers.FactoryFinder.ConfigurationError")){
throw Clazz.new_([e.getException$(), e.getMessage$()],$I$(2,1).c$$Exception$S);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader',  function (factoryClassName, classLoader) {
try {
return $I$(1).newInstance$S$ClassLoader$Z(factoryClassName, classLoader, false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.parsers.FactoryFinder.ConfigurationError")){
throw Clazz.new_([e.getException$(), e.getMessage$()],$I$(2,1).c$$Exception$S);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'setNamespaceAware$Z',  function (awareness) {
this.namespaceAware=awareness;
});

Clazz.newMeth(C$, 'setValidating$Z',  function (validating) {
this.validating=validating;
});

Clazz.newMeth(C$, 'setIgnoringElementContentWhitespace$Z',  function (whitespace) {
this.whitespace=whitespace;
});

Clazz.newMeth(C$, 'setExpandEntityReferences$Z',  function (expandEntityRef) {
this.expandEntityRef=expandEntityRef;
});

Clazz.newMeth(C$, 'setIgnoringComments$Z',  function (ignoreComments) {
this.ignoreComments=ignoreComments;
});

Clazz.newMeth(C$, 'setCoalescing$Z',  function (coalescing) {
this.coalescing=coalescing;
});

Clazz.newMeth(C$, 'isNamespaceAware$',  function () {
return this.namespaceAware;
});

Clazz.newMeth(C$, 'isValidating$',  function () {
return this.validating;
});

Clazz.newMeth(C$, 'isIgnoringElementContentWhitespace$',  function () {
return this.whitespace;
});

Clazz.newMeth(C$, 'isExpandEntityReferences$',  function () {
return this.expandEntityRef;
});

Clazz.newMeth(C$, 'isIgnoringComments$',  function () {
return this.ignoreComments;
});

Clazz.newMeth(C$, 'isCoalescing$',  function () {
return this.coalescing;
});

Clazz.newMeth(C$, 'getSchema$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This parser does not support specification "]);
});

Clazz.newMeth(C$, 'setSchema$javax_xml_validation_Schema',  function (schema) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This parser does not support specification \"\""]);
});

Clazz.newMeth(C$, 'setXIncludeAware$Z',  function (state) {
if (state) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[" setXIncludeAware " + "is not supported on this JAXP" + " implementation or earlier: " + this.getClass$() ]);
}});

Clazz.newMeth(C$, 'isXIncludeAware$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This parser does not support specification \""]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

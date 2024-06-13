(function(){var P$=Clazz.newPackage("javax.xml.parsers"),I$=[[0,'java.util.Properties']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SAXParserFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.props=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['validating','xIncludeAware','nameSpaceAware'],'O',['props','java.util.Properties','schema','javax.xml.validation.Schema']]]

Clazz.newMeth(C$, 'newInstance$S$ClassLoader',  function (factoryClassName, classLoader) {
return Clazz.forName(factoryClassName).newInstance$();
}, 1);

Clazz.newMeth(C$, 'newInstance$',  function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'newSAXParser$',  function () {
try {
var p=C$.makeParser$();
if (Clazz.instanceOf(p, "javax.xml.sax.XMLReader")) {
var r=p;
for (var name, $name = this.props.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
r.setProperty$S$O(name, this.props.getProperty$S(name));
}
} else if (Clazz.instanceOf(p, "org.xml.sax.XMLReader")) {
var r=p;
for (var name, $name = this.props.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
r.setProperty$S$O(name, this.props.getProperty$S(name));
}
}return p;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'makeParser$',  function () {
var className=System.getProperty$S$S("org.xml.sax.parser", "swingjs.xml.JSSAXParser");
if (className == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["No value for sax.parser property"]);
} else {
return C$.makeParser$S(className);
}}, 1);

Clazz.newMeth(C$, 'makeParser$S',  function (className) {
return (Clazz.forName(className).newInstance$());
}, 1);

Clazz.newMeth(C$, 'getFeature$S',  function (name) {
return this.props.getProperty$S$S(name, "false").equals$O("true");
});

Clazz.newMeth(C$, 'getSchema$',  function () {
return this.schema;
});

Clazz.newMeth(C$, 'isNamespaceAware$',  function () {
return this.nameSpaceAware;
});

Clazz.newMeth(C$, 'isValidating$',  function () {
return this.validating;
});

Clazz.newMeth(C$, 'isXIncludeAware$',  function () {
return this.xIncludeAware;
});

Clazz.newMeth(C$, 'setFeature$S$Z',  function (name, value) {
this.props.setProperty$S$S(name, "" + value);
});

Clazz.newMeth(C$, 'setNamespaceAware$Z',  function (awareness) {
this.nameSpaceAware=awareness;
});

Clazz.newMeth(C$, 'setSchema$javax_xml_validation_Schema',  function (schema) {
this.schema=schema;
});

Clazz.newMeth(C$, 'setValidating$Z',  function (validating) {
this.validating=validating;
});

Clazz.newMeth(C$, 'setXIncludeAware$Z',  function (state) {
this.xIncludeAware=state;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

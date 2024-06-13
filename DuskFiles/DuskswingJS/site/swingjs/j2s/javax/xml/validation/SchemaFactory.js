(function(){var P$=Clazz.newPackage("javax.xml.validation"),I$=[[0,'javax.xml.validation.SecuritySupport','javax.xml.validation.SchemaFactoryFinder','javax.xml.transform.Source','javax.xml.transform.stream.StreamSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SchemaFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['ss','javax.xml.validation.SecuritySupport']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$S',  function (schemaLanguage) {
var cl;
cl=C$.ss.getContextClassLoader$();
if (cl == null ) {
cl=Clazz.getClass(C$).getClassLoader$();
}var f=Clazz.new_($I$(2,1).c$$ClassLoader,[cl]).newFactory$S(schemaLanguage);
if (f == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No SchemaFactory that implements the schema language specified by: " + schemaLanguage + " could be loaded" ]);
}return f;
}, 1);

Clazz.newMeth(C$, 'newInstance$S$S$ClassLoader',  function (schemaLanguage, factoryClassName, classLoader) {
var cl=classLoader;
if (cl == null ) {
cl=C$.ss.getContextClassLoader$();
}var f=Clazz.new_($I$(2,1).c$$ClassLoader,[cl]).createInstance$S(factoryClassName);
if (f == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Factory " + factoryClassName + " could not be loaded to implement the schema language specified by: " + schemaLanguage ]);
}if (f.isSchemaLanguageSupported$S(schemaLanguage)) {
return f;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Factory " + f.getClass$().getName$() + " does not implement the schema language specified by: " + schemaLanguage ]);
}}, 1);

Clazz.newMeth(C$, 'getFeature$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the name parameter is null"]);
}throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'setFeature$S$Z',  function (name, value) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the name parameter is null"]);
}throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, object) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the name parameter is null"]);
}throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the name parameter is null"]);
}throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'newSchema$javax_xml_transform_Source',  function (schema) {
return this.newSchema$javax_xml_transform_SourceA(Clazz.array($I$(3), -1, [schema]));
});

Clazz.newMeth(C$, 'newSchema$java_io_File',  function (schema) {
return this.newSchema$javax_xml_transform_Source(Clazz.new_($I$(4,1).c$$java_io_File,[schema]));
});

Clazz.newMeth(C$, 'newSchema$java_net_URL',  function (schema) {
return this.newSchema$javax_xml_transform_Source(Clazz.new_([schema.toExternalForm$()],$I$(4,1).c$$S));
});

C$.$static$=function(){C$.$static$=0;
C$.ss=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

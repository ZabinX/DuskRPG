(function(){var P$=Clazz.newPackage("javax.xml.bind.util"),I$=[[0,'org.xml.sax.helpers.XMLFilterImpl','javax.xml.bind.util.Messages','org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JAXBSource", null, 'javax.xml.transform.sax.SAXSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pseudoParser=((P$.JAXBSource$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JAXBSource$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.xml.sax.XMLReader', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.repeater=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['lexicalHandler','org.xml.sax.ext.LexicalHandler','entityResolver','org.xml.sax.EntityResolver','dtdHandler','org.xml.sax.DTDHandler','repeater','org.xml.sax.XMLFilter','errorHandler','org.xml.sax.ErrorHandler']]]

Clazz.newMeth(C$, 'getFeature$S',  function (name) {
if (name.equals$O("http://xml.org/sax/features/namespaces")) return true;
if (name.equals$O("http://xml.org/sax/features/namespace-prefixes")) return false;
throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'setFeature$S$Z',  function (name, value) {
if (name.equals$O("http://xml.org/sax/features/namespaces") && value ) return;
if (name.equals$O("http://xml.org/sax/features/namespace-prefixes") && !value ) return;
throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
if ("http://xml.org/sax/properties/lexical-handler".equals$O(name)) {
return this.lexicalHandler;
}throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, value) {
if ("http://xml.org/sax/properties/lexical-handler".equals$O(name)) {
this.lexicalHandler=value;
return;
}throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotRecognizedException').c$$S,[name]);
});

Clazz.newMeth(C$, 'setEntityResolver$org_xml_sax_EntityResolver',  function (resolver) {
this.entityResolver=resolver;
});

Clazz.newMeth(C$, 'getEntityResolver$',  function () {
return this.entityResolver;
});

Clazz.newMeth(C$, 'setDTDHandler$org_xml_sax_DTDHandler',  function (handler) {
this.dtdHandler=handler;
});

Clazz.newMeth(C$, 'getDTDHandler$',  function () {
return this.dtdHandler;
});

Clazz.newMeth(C$, 'setContentHandler$org_xml_sax_ContentHandler',  function (handler) {
this.repeater.setContentHandler$org_xml_sax_ContentHandler(handler);
});

Clazz.newMeth(C$, 'getContentHandler$',  function () {
return this.repeater.getContentHandler$();
});

Clazz.newMeth(C$, 'setErrorHandler$org_xml_sax_ErrorHandler',  function (handler) {
this.errorHandler=handler;
});

Clazz.newMeth(C$, 'getErrorHandler$',  function () {
return this.errorHandler;
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource',  function (input) {
this.parse$();
});

Clazz.newMeth(C$, 'parse$S',  function (systemId) {
this.parse$();
});

Clazz.newMeth(C$, 'parse$',  function () {
try {
this.b$['javax.xml.bind.util.JAXBSource'].marshaller.marshal$O$org_xml_sax_ContentHandler(this.b$['javax.xml.bind.util.JAXBSource'].contentObject, this.repeater);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.bind.JAXBException")){
var se=Clazz.new_(Clazz.load('org.xml.sax.SAXParseException').c$$S$S$S$I$I$Exception,[e.getMessage$(), null, null, -1, -1, e]);
if (this.errorHandler != null ) this.errorHandler.fatalError$org_xml_sax_SAXParseException(se);
throw se;
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.JAXBSource$1.$init$,[this, null]));
},1);

C$.$fields$=[['O',['marshaller','javax.xml.bind.Marshaller','contentObject','java.lang.Object','pseudoParser','org.xml.sax.XMLReader']]]

Clazz.newMeth(C$, 'c$$javax_xml_bind_JAXBContext$O',  function (context, contentObject) {
C$.c$$javax_xml_bind_Marshaller$O.apply(this, [(context == null ) ? C$.assertionFailed$S($I$(2).format$S("JAXBSource.NullContext")) : context.createMarshaller$(), (contentObject == null ) ? C$.assertionFailed$S($I$(2).format$S("JAXBSource.NullContent")) : contentObject]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_bind_Marshaller$O',  function (marshaller, contentObject) {
Clazz.super_(C$, this);
if (marshaller == null ) throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(2).format$S("JAXBSource.NullMarshaller")]);
if (contentObject == null ) throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(2).format$S("JAXBSource.NullContent")]);
this.marshaller=marshaller;
this.contentObject=contentObject;
C$.superclazz.prototype.setXMLReader$org_xml_sax_XMLReader.apply(this, [this.pseudoParser]);
C$.superclazz.prototype.setInputSource$org_xml_sax_InputSource.apply(this, [Clazz.new_($I$(3,1))]);
}, 1);

Clazz.newMeth(C$, 'assertionFailed$S',  function (message) {
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[message]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

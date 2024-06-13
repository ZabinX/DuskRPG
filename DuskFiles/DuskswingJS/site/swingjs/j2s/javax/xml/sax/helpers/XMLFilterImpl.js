(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),p$1={},I$=[[0,'javax.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLFilterImpl", null, null, ['javax.xml.sax.XMLFilter', 'javax.xml.sax.EntityResolver', 'javax.xml.sax.DTDHandler', 'javax.xml.sax.ContentHandler', 'javax.xml.sax.ErrorHandler']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parent=null;
this.locator=null;
this.entityResolver=null;
this.dtdHandler=null;
this.contentHandler=null;
this.errorHandler=null;
},1);

C$.$fields$=[['O',['parent','javax.xml.sax.XMLReader','locator','javax.xml.sax.Locator','entityResolver','javax.xml.sax.EntityResolver','dtdHandler','javax.xml.sax.DTDHandler','contentHandler','javax.xml.sax.ContentHandler','errorHandler','javax.xml.sax.ErrorHandler']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_XMLReader',  function (parent) {
;C$.$init$.apply(this);
this.setParent$javax_xml_sax_XMLReader(parent);
}, 1);

Clazz.newMeth(C$, 'setParent$javax_xml_sax_XMLReader',  function (parent) {
this.parent=parent;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'setFeature$S$Z',  function (name, value) {
if (this.parent != null ) {
this.parent.setFeature$S$Z(name, value);
} else {
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXNotRecognizedException').c$$S,["Feature: " + name]);
}});

Clazz.newMeth(C$, 'getFeature$S',  function (name) {
if (this.parent != null ) {
return this.parent.getFeature$S(name);
} else {
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXNotRecognizedException').c$$S,["Feature: " + name]);
}});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, value) {
if (this.parent != null ) {
this.parent.setProperty$S$O(name, value);
} else {
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXNotRecognizedException').c$$S,["Property: " + name]);
}});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
if (this.parent != null ) {
return this.parent.getProperty$S(name);
} else {
throw Clazz.new_(Clazz.load('javax.xml.sax.SAXNotRecognizedException').c$$S,["Property: " + name]);
}});

Clazz.newMeth(C$, 'setEntityResolver$javax_xml_sax_EntityResolver',  function (resolver) {
this.entityResolver=resolver;
});

Clazz.newMeth(C$, 'getEntityResolver$',  function () {
return this.entityResolver;
});

Clazz.newMeth(C$, 'setDTDHandler$javax_xml_sax_DTDHandler',  function (handler) {
this.dtdHandler=handler;
});

Clazz.newMeth(C$, 'getDTDHandler$',  function () {
return this.dtdHandler;
});

Clazz.newMeth(C$, 'setContentHandler$javax_xml_sax_ContentHandler',  function (handler) {
this.contentHandler=handler;
});

Clazz.newMeth(C$, 'getContentHandler$',  function () {
return this.contentHandler;
});

Clazz.newMeth(C$, 'setErrorHandler$javax_xml_sax_ErrorHandler',  function (handler) {
this.errorHandler=handler;
});

Clazz.newMeth(C$, 'getErrorHandler$',  function () {
return this.errorHandler;
});

Clazz.newMeth(C$, 'parse$javax_xml_sax_InputSource',  function (input) {
p$1.setupParse.apply(this, []);
this.parent.parse$javax_xml_sax_InputSource(input);
});

Clazz.newMeth(C$, 'parse$S',  function (systemId) {
this.parse$javax_xml_sax_InputSource(Clazz.new_($I$(1,1).c$$S,[systemId]));
});

Clazz.newMeth(C$, 'resolveEntity$S$S',  function (publicId, systemId) {
if (this.entityResolver != null ) {
return this.entityResolver.resolveEntity$S$S(publicId, systemId);
} else {
return null;
}});

Clazz.newMeth(C$, 'notationDecl$S$S$S',  function (name, publicId, systemId) {
if (this.dtdHandler != null ) {
this.dtdHandler.notationDecl$S$S$S(name, publicId, systemId);
}});

Clazz.newMeth(C$, 'unparsedEntityDecl$S$S$S$S',  function (name, publicId, systemId, notationName) {
if (this.dtdHandler != null ) {
this.dtdHandler.unparsedEntityDecl$S$S$S$S(name, publicId, systemId, notationName);
}});

Clazz.newMeth(C$, 'setDocumentLocator$javax_xml_sax_Locator',  function (locator) {
this.locator=locator;
if (this.contentHandler != null ) {
this.contentHandler.setDocumentLocator$javax_xml_sax_Locator(locator);
}});

Clazz.newMeth(C$, 'startDocument$',  function () {
if (this.contentHandler != null ) {
this.contentHandler.startDocument$();
}});

Clazz.newMeth(C$, 'endDocument$',  function () {
if (this.contentHandler != null ) {
this.contentHandler.endDocument$();
}});

Clazz.newMeth(C$, 'startPrefixMapping$S$S',  function (prefix, uri) {
if (this.contentHandler != null ) {
this.contentHandler.startPrefixMapping$S$S(prefix, uri);
}});

Clazz.newMeth(C$, 'endPrefixMapping$S',  function (prefix) {
if (this.contentHandler != null ) {
this.contentHandler.endPrefixMapping$S(prefix);
}});

Clazz.newMeth(C$, 'startElement$S$S$S$javax_xml_sax_Attributes',  function (uri, localName, qName, atts) {
if (this.contentHandler != null ) {
this.contentHandler.startElement$S$S$S$javax_xml_sax_Attributes(uri, localName, qName, atts);
}});

Clazz.newMeth(C$, 'endElement$S$S$S',  function (uri, localName, qName) {
if (this.contentHandler != null ) {
this.contentHandler.endElement$S$S$S(uri, localName, qName);
}});

Clazz.newMeth(C$, 'characters$CA$I$I',  function (ch, start, length) {
if (this.contentHandler != null ) {
this.contentHandler.characters$CA$I$I(ch, start, length);
}});

Clazz.newMeth(C$, 'ignorableWhitespace$CA$I$I',  function (ch, start, length) {
if (this.contentHandler != null ) {
this.contentHandler.ignorableWhitespace$CA$I$I(ch, start, length);
}});

Clazz.newMeth(C$, 'processingInstruction$S$S',  function (target, data) {
if (this.contentHandler != null ) {
this.contentHandler.processingInstruction$S$S(target, data);
}});

Clazz.newMeth(C$, 'skippedEntity$S',  function (name) {
if (this.contentHandler != null ) {
this.contentHandler.skippedEntity$S(name);
}});

Clazz.newMeth(C$, 'warning$javax_xml_sax_SAXParseException',  function (e) {
if (this.errorHandler != null ) {
this.errorHandler.warning$javax_xml_sax_SAXParseException(e);
}});

Clazz.newMeth(C$, 'error$javax_xml_sax_SAXParseException',  function (e) {
if (this.errorHandler != null ) {
this.errorHandler.error$javax_xml_sax_SAXParseException(e);
}});

Clazz.newMeth(C$, 'fatalError$javax_xml_sax_SAXParseException',  function (e) {
if (this.errorHandler != null ) {
this.errorHandler.fatalError$javax_xml_sax_SAXParseException(e);
}});

Clazz.newMeth(C$, 'setupParse',  function () {
if (this.parent == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["No parent for filter"]);
}this.parent.setEntityResolver$javax_xml_sax_EntityResolver(this);
this.parent.setDTDHandler$javax_xml_sax_DTDHandler(this);
this.parent.setContentHandler$javax_xml_sax_ContentHandler(this);
this.parent.setErrorHandler$javax_xml_sax_ErrorHandler(this);
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

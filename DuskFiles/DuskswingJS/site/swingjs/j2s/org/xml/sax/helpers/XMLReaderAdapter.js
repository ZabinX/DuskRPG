(function(){var P$=Clazz.newPackage("org.xml.sax.helpers"),p$1={},I$=[[0,'org.xml.sax.helpers.XMLReaderFactory',['org.xml.sax.helpers.XMLReaderAdapter','.AttributesAdapter'],'org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLReaderAdapter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['org.xml.sax.Parser', 'org.xml.sax.ContentHandler']);
C$.$classes$=[['AttributesAdapter',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['xmlReader','org.xml.sax.XMLReader','documentHandler','org.xml.sax.DocumentHandler','qAtts','org.xml.sax.helpers.XMLReaderAdapter.AttributesAdapter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.setup$org_xml_sax_XMLReader.apply(this, [$I$(1).createXMLReader$()]);
}, 1);

Clazz.newMeth(C$, 'c$$org_xml_sax_XMLReader',  function (xmlReader) {
;C$.$init$.apply(this);
p$1.setup$org_xml_sax_XMLReader.apply(this, [xmlReader]);
}, 1);

Clazz.newMeth(C$, 'setup$org_xml_sax_XMLReader',  function (xmlReader) {
if (xmlReader == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["XMLReader must not be null"]);
}this.xmlReader=xmlReader;
this.qAtts=Clazz.new_($I$(2,1),[this, null]);
}, p$1);

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
throw Clazz.new_(Clazz.load('org.xml.sax.SAXNotSupportedException').c$$S,["setLocale not supported"]);
});

Clazz.newMeth(C$, 'setEntityResolver$org_xml_sax_EntityResolver',  function (resolver) {
this.xmlReader.setEntityResolver$org_xml_sax_EntityResolver(resolver);
});

Clazz.newMeth(C$, 'setDTDHandler$org_xml_sax_DTDHandler',  function (handler) {
this.xmlReader.setDTDHandler$org_xml_sax_DTDHandler(handler);
});

Clazz.newMeth(C$, 'setDocumentHandler$org_xml_sax_DocumentHandler',  function (handler) {
this.documentHandler=handler;
});

Clazz.newMeth(C$, 'setErrorHandler$org_xml_sax_ErrorHandler',  function (handler) {
this.xmlReader.setErrorHandler$org_xml_sax_ErrorHandler(handler);
});

Clazz.newMeth(C$, 'parse$S',  function (systemId) {
this.parse$org_xml_sax_InputSource(Clazz.new_($I$(3,1).c$$S,[systemId]));
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource',  function (input) {
p$1.setupXMLReader.apply(this, []);
this.xmlReader.parse$org_xml_sax_InputSource(input);
});

Clazz.newMeth(C$, 'setupXMLReader',  function () {
this.xmlReader.setFeature$S$Z("http://xml.org/sax/features/namespace-prefixes", true);
try {
this.xmlReader.setFeature$S$Z("http://xml.org/sax/features/namespaces", false);
} catch (e) {
if (Clazz.exceptionOf(e,"org.xml.sax.SAXException")){
} else {
throw e;
}
}
this.xmlReader.setContentHandler$org_xml_sax_ContentHandler(this);
}, p$1);

Clazz.newMeth(C$, 'setDocumentLocator$org_xml_sax_Locator',  function (locator) {
if (this.documentHandler != null ) this.documentHandler.setDocumentLocator$org_xml_sax_Locator(locator);
});

Clazz.newMeth(C$, 'startDocument$',  function () {
if (this.documentHandler != null ) this.documentHandler.startDocument$();
});

Clazz.newMeth(C$, 'endDocument$',  function () {
if (this.documentHandler != null ) this.documentHandler.endDocument$();
});

Clazz.newMeth(C$, 'startPrefixMapping$S$S',  function (prefix, uri) {
});

Clazz.newMeth(C$, 'endPrefixMapping$S',  function (prefix) {
});

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes',  function (uri, localName, qName, atts) {
if (this.documentHandler != null ) {
this.qAtts.setAttributes$org_xml_sax_Attributes(atts);
this.documentHandler.startElement$S$org_xml_sax_AttributeList(qName, this.qAtts);
}});

Clazz.newMeth(C$, 'endElement$S$S$S',  function (uri, localName, qName) {
if (this.documentHandler != null ) this.documentHandler.endElement$S(qName);
});

Clazz.newMeth(C$, 'characters$CA$I$I',  function (ch, start, length) {
if (this.documentHandler != null ) this.documentHandler.characters$CA$I$I(ch, start, length);
});

Clazz.newMeth(C$, 'ignorableWhitespace$CA$I$I',  function (ch, start, length) {
if (this.documentHandler != null ) this.documentHandler.ignorableWhitespace$CA$I$I(ch, start, length);
});

Clazz.newMeth(C$, 'processingInstruction$S$S',  function (target, data) {
if (this.documentHandler != null ) this.documentHandler.processingInstruction$S$S(target, data);
});

Clazz.newMeth(C$, 'skippedEntity$S',  function (name) {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLReaderAdapter, "AttributesAdapter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.xml.sax.AttributeList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attributes','org.xml.sax.Attributes']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAttributes$org_xml_sax_Attributes',  function (attributes) {
this.attributes=attributes;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.attributes.getLength$();
});

Clazz.newMeth(C$, 'getName$I',  function (i) {
return this.attributes.getQName$I(i);
});

Clazz.newMeth(C$, 'getType$I',  function (i) {
return this.attributes.getType$I(i);
});

Clazz.newMeth(C$, 'getValue$I',  function (i) {
return this.attributes.getValue$I(i);
});

Clazz.newMeth(C$, 'getType$S',  function (qName) {
return this.attributes.getType$S(qName);
});

Clazz.newMeth(C$, 'getValue$S',  function (qName) {
return this.attributes.getValue$S(qName);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

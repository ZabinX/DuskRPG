(function(){var P$=Clazz.newPackage("javax.xml.stream.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StreamReaderDelegate", null, null, 'javax.xml.stream.XMLStreamReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['reader','javax.xml.stream.XMLStreamReader']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_stream_XMLStreamReader',  function (reader) {
;C$.$init$.apply(this);
this.reader=reader;
}, 1);

Clazz.newMeth(C$, 'setParent$javax_xml_stream_XMLStreamReader',  function (reader) {
this.reader=reader;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.reader;
});

Clazz.newMeth(C$, 'next$',  function () {
return this.reader.next$();
});

Clazz.newMeth(C$, 'nextTag$',  function () {
return this.reader.nextTag$();
});

Clazz.newMeth(C$, 'getElementText$',  function () {
return this.reader.getElementText$();
});

Clazz.newMeth(C$, 'require$I$S$S',  function (type, namespaceURI, localName) {
this.reader.require$I$S$S(type, namespaceURI, localName);
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.reader.hasNext$();
});

Clazz.newMeth(C$, 'close$',  function () {
this.reader.close$();
});

Clazz.newMeth(C$, 'getNamespaceURI$S',  function (prefix) {
return this.reader.getNamespaceURI$S(prefix);
});

Clazz.newMeth(C$, 'getNamespaceContext$',  function () {
return this.reader.getNamespaceContext$();
});

Clazz.newMeth(C$, 'isStartElement$',  function () {
return this.reader.isStartElement$();
});

Clazz.newMeth(C$, 'isEndElement$',  function () {
return this.reader.isEndElement$();
});

Clazz.newMeth(C$, 'isCharacters$',  function () {
return this.reader.isCharacters$();
});

Clazz.newMeth(C$, 'isWhiteSpace$',  function () {
return this.reader.isWhiteSpace$();
});

Clazz.newMeth(C$, 'getAttributeValue$S$S',  function (namespaceUri, localName) {
return this.reader.getAttributeValue$S$S(namespaceUri, localName);
});

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
return this.reader.getAttributeCount$();
});

Clazz.newMeth(C$, 'getAttributeName$I',  function (index) {
return this.reader.getAttributeName$I(index);
});

Clazz.newMeth(C$, 'getAttributePrefix$I',  function (index) {
return this.reader.getAttributePrefix$I(index);
});

Clazz.newMeth(C$, 'getAttributeNamespace$I',  function (index) {
return this.reader.getAttributeNamespace$I(index);
});

Clazz.newMeth(C$, 'getAttributeLocalName$I',  function (index) {
return this.reader.getAttributeLocalName$I(index);
});

Clazz.newMeth(C$, 'getAttributeType$I',  function (index) {
return this.reader.getAttributeType$I(index);
});

Clazz.newMeth(C$, 'getAttributeValue$I',  function (index) {
return this.reader.getAttributeValue$I(index);
});

Clazz.newMeth(C$, 'isAttributeSpecified$I',  function (index) {
return this.reader.isAttributeSpecified$I(index);
});

Clazz.newMeth(C$, 'getNamespaceCount$',  function () {
return this.reader.getNamespaceCount$();
});

Clazz.newMeth(C$, 'getNamespacePrefix$I',  function (index) {
return this.reader.getNamespacePrefix$I(index);
});

Clazz.newMeth(C$, 'getNamespaceURI$I',  function (index) {
return this.reader.getNamespaceURI$I(index);
});

Clazz.newMeth(C$, 'getEventType$',  function () {
return this.reader.getEventType$();
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.reader.getText$();
});

Clazz.newMeth(C$, 'getTextCharacters$I$CA$I$I',  function (sourceStart, target, targetStart, length) {
return this.reader.getTextCharacters$I$CA$I$I(sourceStart, target, targetStart, length);
});

Clazz.newMeth(C$, 'getTextCharacters$',  function () {
return this.reader.getTextCharacters$();
});

Clazz.newMeth(C$, 'getTextStart$',  function () {
return this.reader.getTextStart$();
});

Clazz.newMeth(C$, 'getTextLength$',  function () {
return this.reader.getTextLength$();
});

Clazz.newMeth(C$, 'getEncoding$',  function () {
return this.reader.getEncoding$();
});

Clazz.newMeth(C$, 'hasText$',  function () {
return this.reader.hasText$();
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.reader.getLocation$();
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.reader.getName$();
});

Clazz.newMeth(C$, 'getLocalName$',  function () {
return this.reader.getLocalName$();
});

Clazz.newMeth(C$, 'hasName$',  function () {
return this.reader.hasName$();
});

Clazz.newMeth(C$, 'getNamespaceURI$',  function () {
return this.reader.getNamespaceURI$();
});

Clazz.newMeth(C$, 'getPrefix$',  function () {
return this.reader.getPrefix$();
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.reader.getVersion$();
});

Clazz.newMeth(C$, 'isStandalone$',  function () {
return this.reader.isStandalone$();
});

Clazz.newMeth(C$, 'standaloneSet$',  function () {
return this.reader.standaloneSet$();
});

Clazz.newMeth(C$, 'getCharacterEncodingScheme$',  function () {
return this.reader.getCharacterEncodingScheme$();
});

Clazz.newMeth(C$, 'getPITarget$',  function () {
return this.reader.getPITarget$();
});

Clazz.newMeth(C$, 'getPIData$',  function () {
return this.reader.getPIData$();
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return this.reader.getProperty$S(name);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

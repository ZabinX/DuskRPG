(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLStreamReader", null, null, 'javax.xml.stream.XMLStreamReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stream','java.io.InputStream','reader','java.io.Reader']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (stream) {
;C$.$init$.apply(this);
this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
;C$.$init$.apply(this);
this.reader=reader;
}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return (this.stream != null  ? Clazz.new_($I$(1,1).c$$java_io_InputStream,[this.stream]) : this.reader != null  ? Clazz.new_($I$(1,1).c$$java_io_Reader,[this.reader]) : null);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return null;
});

Clazz.newMeth(C$, 'next$',  function () {
return 0;
});

Clazz.newMeth(C$, 'require$I$S$S',  function (type, namespaceURI, localName) {
});

Clazz.newMeth(C$, 'getElementText$',  function () {
return null;
});

Clazz.newMeth(C$, 'nextTag$',  function () {
return 0;
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return false;
});

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'getNamespaceURI$S',  function (prefix) {
return null;
});

Clazz.newMeth(C$, 'isStartElement$',  function () {
return false;
});

Clazz.newMeth(C$, 'isEndElement$',  function () {
return false;
});

Clazz.newMeth(C$, 'isCharacters$',  function () {
return false;
});

Clazz.newMeth(C$, 'isWhiteSpace$',  function () {
return false;
});

Clazz.newMeth(C$, 'getAttributeValue$S$S',  function (namespaceURI, localName) {
return null;
});

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getAttributeName$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getAttributeNamespace$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getAttributeLocalName$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getAttributePrefix$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getAttributeType$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getAttributeValue$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'isAttributeSpecified$I',  function (index) {
return false;
});

Clazz.newMeth(C$, 'getNamespaceCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getNamespacePrefix$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getNamespaceURI$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getNamespaceContext$',  function () {
return null;
});

Clazz.newMeth(C$, 'getEventType$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getText$',  function () {
return null;
});

Clazz.newMeth(C$, 'getTextCharacters$',  function () {
return null;
});

Clazz.newMeth(C$, 'getTextCharacters$I$CA$I$I',  function (sourceStart, target, targetStart, length) {
return 0;
});

Clazz.newMeth(C$, 'getTextStart$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getTextLength$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getEncoding$',  function () {
return null;
});

Clazz.newMeth(C$, 'hasText$',  function () {
return false;
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return null;
});

Clazz.newMeth(C$, 'getName$',  function () {
return null;
});

Clazz.newMeth(C$, 'getLocalName$',  function () {
return null;
});

Clazz.newMeth(C$, 'hasName$',  function () {
return false;
});

Clazz.newMeth(C$, 'getNamespaceURI$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPrefix$',  function () {
return null;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return null;
});

Clazz.newMeth(C$, 'isStandalone$',  function () {
return false;
});

Clazz.newMeth(C$, 'standaloneSet$',  function () {
return false;
});

Clazz.newMeth(C$, 'getCharacterEncodingScheme$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPITarget$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPIData$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.xml.transform.stax"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StAXSource", null, null, 'javax.xml.transform.Source');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.xmlEventReader=null;
this.xmlStreamReader=null;
this.systemId=null;
},1);

C$.$fields$=[['S',['systemId'],'O',['xmlEventReader','javax.xml.stream.XMLEventReader','xmlStreamReader','javax.xml.stream.XMLStreamReader']]]

Clazz.newMeth(C$, 'c$$javax_xml_stream_XMLEventReader',  function (xmlEventReader) {
;C$.$init$.apply(this);
if (xmlEventReader == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["StAXSource(XMLEventReader) with XMLEventReader == null"]);
}var event=xmlEventReader.peek$();
var eventType=event.getEventType$();
if (eventType != 7 && eventType != 1 ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["StAXSource(XMLEventReader) with XMLEventReader not in XMLStreamConstants.START_DOCUMENT or XMLStreamConstants.START_ELEMENT state"]);
}this.xmlEventReader=xmlEventReader;
this.systemId=event.getLocation$().getSystemId$();
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_stream_XMLStreamReader',  function (xmlStreamReader) {
;C$.$init$.apply(this);
if (xmlStreamReader == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["StAXSource(XMLStreamReader) with XMLStreamReader == null"]);
}var eventType=xmlStreamReader.getEventType$();
if (eventType != 7 && eventType != 1 ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["StAXSource(XMLStreamReader) with XMLStreamReadernot in XMLStreamConstants.START_DOCUMENT or XMLStreamConstants.START_ELEMENT state"]);
}this.xmlStreamReader=xmlStreamReader;
this.systemId=xmlStreamReader.getLocation$().getSystemId$();
}, 1);

Clazz.newMeth(C$, 'getXMLEventReader$',  function () {
return this.xmlEventReader;
});

Clazz.newMeth(C$, 'getXMLStreamReader$',  function () {
return this.xmlStreamReader;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemId) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["StAXSource#setSystemId(systemId) cannot set the system identifier for a StAXSource"]);
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return this.systemId;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

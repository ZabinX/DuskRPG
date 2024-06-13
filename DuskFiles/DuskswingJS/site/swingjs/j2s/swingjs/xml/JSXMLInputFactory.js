(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'java.util.HashMap','swingjs.xml.JSXMLStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLInputFactory", null, 'javax.xml.stream.XMLInputFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.properties=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['properties','java.util.Map']]]

Clazz.newMeth(C$, 'createXMLStreamReader$java_io_Reader',  function (reader) {
return Clazz.new_($I$(2,1).c$$java_io_Reader,[reader]);
});

Clazz.newMeth(C$, 'createXMLStreamReader$java_io_InputStream',  function (stream) {
return Clazz.new_($I$(2,1).c$$java_io_InputStream,[stream]);
});

Clazz.newMeth(C$, 'createXMLStreamReader$java_io_InputStream$S',  function (stream, encoding) {
return Clazz.new_($I$(2,1).c$$java_io_InputStream,[stream]);
});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, value) {
this.properties.put$O$O(name, value);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return this.properties.get$O(name);
});

Clazz.newMeth(C$, 'createXMLStreamReader$javax_xml_transform_Source',  function (source) {
return null;
});

Clazz.newMeth(C$, 'createXMLStreamReader$S$java_io_InputStream',  function (systemId, stream) {
return null;
});

Clazz.newMeth(C$, 'createXMLStreamReader$S$java_io_Reader',  function (systemId, reader) {
return null;
});

Clazz.newMeth(C$, 'createXMLEventReader$java_io_Reader',  function (reader) {
return null;
});

Clazz.newMeth(C$, 'createXMLEventReader$S$java_io_Reader',  function (systemId, reader) {
return null;
});

Clazz.newMeth(C$, 'createXMLEventReader$javax_xml_stream_XMLStreamReader',  function (reader) {
return null;
});

Clazz.newMeth(C$, 'createXMLEventReader$javax_xml_transform_Source',  function (source) {
return null;
});

Clazz.newMeth(C$, 'createXMLEventReader$java_io_InputStream',  function (stream) {
return null;
});

Clazz.newMeth(C$, 'createXMLEventReader$java_io_InputStream$S',  function (stream, encoding) {
return null;
});

Clazz.newMeth(C$, 'createXMLEventReader$S$java_io_InputStream',  function (systemId, stream) {
return null;
});

Clazz.newMeth(C$, 'createFilteredReader$javax_xml_stream_XMLStreamReader$javax_xml_stream_StreamFilter',  function (reader, filter) {
return null;
});

Clazz.newMeth(C$, 'createFilteredReader$javax_xml_stream_XMLEventReader$javax_xml_stream_EventFilter',  function (reader, filter) {
return null;
});

Clazz.newMeth(C$, 'getXMLResolver$',  function () {
return null;
});

Clazz.newMeth(C$, 'setXMLResolver$javax_xml_stream_XMLResolver',  function (resolver) {
});

Clazz.newMeth(C$, 'getXMLReporter$',  function () {
return null;
});

Clazz.newMeth(C$, 'setXMLReporter$javax_xml_stream_XMLReporter',  function (reporter) {
});

Clazz.newMeth(C$, 'isPropertySupported$S',  function (name) {
return false;
});

Clazz.newMeth(C$, 'setEventAllocator$javax_xml_stream_util_XMLEventAllocator',  function (allocator) {
});

Clazz.newMeth(C$, 'getEventAllocator$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

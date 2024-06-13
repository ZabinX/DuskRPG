(function(){var P$=Clazz.newPackage("javax.xml.bind.helpers"),p$1={},I$=[[0,'javax.xml.bind.helpers.DefaultValidationEventHandler','javax.xml.parsers.SAXParserFactory','javax.xml.bind.helpers.Messages','org.xml.sax.InputSource','java.io.BufferedInputStream','java.io.FileInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractUnmarshallerImpl", null, null, 'javax.xml.bind.Unmarshaller');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.eventHandler=Clazz.new_($I$(1,1));
this.validating=false;
this.reader=null;
},1);

C$.$fields$=[['Z',['validating'],'O',['eventHandler','javax.xml.bind.ValidationEventHandler','reader','org.xml.sax.XMLReader']]]

Clazz.newMeth(C$, 'getXMLReader$',  function () {
if (this.reader == null ) {
try {
var parserFactory;
parserFactory=$I$(2).newInstance$();
parserFactory.setNamespaceAware$Z(true);
parserFactory.setValidating$Z(false);
this.reader=parserFactory.newSAXParser$().getXMLReader$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.parsers.ParserConfigurationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}return this.reader;
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_transform_Source',  function (source) {
if (source == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "source")]);
}if (Clazz.instanceOf(source, "javax.xml.transform.sax.SAXSource")) return p$1.unmarshal$javax_xml_transform_sax_SAXSource.apply(this, [source]);
if (Clazz.instanceOf(source, "javax.xml.transform.stream.StreamSource")) return this.unmarshal$org_xml_sax_InputSource(C$.streamSourceToInputSource$javax_xml_transform_stream_StreamSource(source));
if (Clazz.instanceOf(source, "javax.xml.transform.dom.DOMSource")) return this.unmarshal$org_w3c_dom_Node((source).getNode$());
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_transform_sax_SAXSource',  function (source) {
var r=source.getXMLReader$();
if (r == null ) r=this.getXMLReader$();
return this.unmarshal$org_xml_sax_XMLReader$org_xml_sax_InputSource(r, source.getInputSource$());
}, p$1);

Clazz.newMeth(C$, 'unmarshal$org_xml_sax_InputSource',  function (source) {
if (source == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "source")]);
}return this.unmarshal$org_xml_sax_XMLReader$org_xml_sax_InputSource(this.getXMLReader$(), source);
});

Clazz.newMeth(C$, 'unmarshal$S',  function (url) {
return this.unmarshal$org_xml_sax_InputSource(Clazz.new_($I$(4,1).c$$S,[url]));
}, p$1);

Clazz.newMeth(C$, 'unmarshal$java_net_URL',  function (url) {
if (url == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "url")]);
}return p$1.unmarshal$S.apply(this, [url.toExternalForm$()]);
});

Clazz.newMeth(C$, 'unmarshal$java_io_File',  function (f) {
if (f == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "file")]);
}try {
return this.unmarshal$java_io_InputStream(Clazz.new_([Clazz.new_($I$(6,1).c$$java_io_File,[f])],$I$(5,1).c$$java_io_InputStream));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.FileNotFoundException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'unmarshal$java_io_InputStream',  function (is) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "is")]);
}var isrc=Clazz.new_($I$(4,1).c$$java_io_InputStream,[is]);
return this.unmarshal$org_xml_sax_InputSource(isrc);
});

Clazz.newMeth(C$, 'unmarshal$java_io_Reader',  function (reader) {
if (reader == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "reader")]);
}var isrc=Clazz.new_($I$(4,1).c$$java_io_Reader,[reader]);
return this.unmarshal$org_xml_sax_InputSource(isrc);
});

Clazz.newMeth(C$, 'streamSourceToInputSource$javax_xml_transform_stream_StreamSource',  function (ss) {
var is=Clazz.new_($I$(4,1));
is.setSystemId$S(ss.getSystemId$());
is.setByteStream$java_io_InputStream(ss.getInputStream$());
is.setCharacterStream$java_io_Reader(ss.getReader$());
return is;
}, 1);

Clazz.newMeth(C$, 'isValidating$',  function () {
return this.validating;
});

Clazz.newMeth(C$, 'setEventHandler$javax_xml_bind_ValidationEventHandler',  function (handler) {
if (handler == null ) {
this.eventHandler=Clazz.new_($I$(1,1));
} else {
this.eventHandler=handler;
}});

Clazz.newMeth(C$, 'setValidating$Z',  function (validating) {
this.validating=validating;
});

Clazz.newMeth(C$, 'getEventHandler$',  function () {
return this.eventHandler;
});

Clazz.newMeth(C$, 'createUnmarshalException$org_xml_sax_SAXException',  function (e) {
var nested=e.getException$();
if (Clazz.instanceOf(nested, "javax.xml.bind.UnmarshalException")) return nested;
if (Clazz.instanceOf(nested, "java.lang.RuntimeException")) throw nested;
if (nested != null ) return Clazz.new_(Clazz.load('javax.xml.bind.UnmarshalException').c$$Throwable,[nested]);
 else return Clazz.new_(Clazz.load('javax.xml.bind.UnmarshalException').c$$Throwable,[e]);
});

Clazz.newMeth(C$, 'setProperty$S$O',  function (name, value) {
if (name == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "name")]);
}throw Clazz.new_(Clazz.load('javax.xml.bind.PropertyException').c$$S$O,[name, value]);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).format$S$O("Shared.MustNotBeNull", "name")]);
}throw Clazz.new_(Clazz.load('javax.xml.bind.PropertyException').c$$S,[name]);
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_stream_XMLEventReader',  function (reader) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_stream_XMLStreamReader',  function (reader) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'unmarshal$org_w3c_dom_Node$Class',  function (node, expectedType) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_transform_Source$Class',  function (source, expectedType) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_stream_XMLStreamReader$Class',  function (reader, expectedType) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'unmarshal$javax_xml_stream_XMLEventReader$Class',  function (reader, expectedType) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setSchema$javax_xml_validation_Schema',  function (schema) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getSchema$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setAdapter$javax_xml_bind_annotation_adapters_XmlAdapter',  function (adapter) {
if (adapter == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.setAdapter$Class$javax_xml_bind_annotation_adapters_XmlAdapter(adapter.getClass$(), adapter);
});

Clazz.newMeth(C$, 'setAdapter$Class$javax_xml_bind_annotation_adapters_XmlAdapter',  function (type, adapter) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getAdapter$Class',  function (type) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setAttachmentUnmarshaller$javax_xml_bind_attachment_AttachmentUnmarshaller',  function (au) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getAttachmentUnmarshaller$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setListener$javax_xml_bind_Unmarshaller_Listener',  function (listener) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getListener$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

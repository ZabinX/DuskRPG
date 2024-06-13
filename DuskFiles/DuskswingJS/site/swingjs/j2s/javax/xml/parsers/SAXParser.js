(function(){var P$=Clazz.newPackage("javax.xml.parsers"),I$=[[0,'org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SAXParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This SAXParser, \"" + this.getClass$().getName$() + "\", does not support the reset functionality." ]);
});

Clazz.newMeth(C$, 'parse$java_io_InputStream$org_xml_sax_HandlerBase',  function (is, hb) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputStream cannot be null"]);
}var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]);
this.parse$org_xml_sax_InputSource$org_xml_sax_HandlerBase(input, hb);
});

Clazz.newMeth(C$, 'parse$java_io_InputStream$org_xml_sax_HandlerBase$S',  function (is, hb, systemId) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputStream cannot be null"]);
}var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]);
input.setSystemId$S(systemId);
this.parse$org_xml_sax_InputSource$org_xml_sax_HandlerBase(input, hb);
});

Clazz.newMeth(C$, 'parse$java_io_InputStream$org_xml_sax_helpers_DefaultHandler',  function (is, dh) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputStream cannot be null"]);
}var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]);
this.parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler(input, dh);
});

Clazz.newMeth(C$, 'parse$java_io_InputStream$org_xml_sax_helpers_DefaultHandler$S',  function (is, dh, systemId) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputStream cannot be null"]);
}var input=Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]);
input.setSystemId$S(systemId);
this.parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler(input, dh);
});

Clazz.newMeth(C$, 'parse$S$org_xml_sax_HandlerBase',  function (uri, hb) {
if (uri == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["uri cannot be null"]);
}var input=Clazz.new_($I$(1,1).c$$S,[uri]);
this.parse$org_xml_sax_InputSource$org_xml_sax_HandlerBase(input, hb);
});

Clazz.newMeth(C$, 'parse$S$org_xml_sax_helpers_DefaultHandler',  function (uri, dh) {
if (uri == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["uri cannot be null"]);
}var input=Clazz.new_($I$(1,1).c$$S,[uri]);
this.parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler(input, dh);
});

Clazz.newMeth(C$, 'parse$java_io_File$org_xml_sax_HandlerBase',  function (f, hb) {
if (f == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["File cannot be null"]);
}var input=Clazz.new_([f.toURI$().toASCIIString$()],$I$(1,1).c$$S);
this.parse$org_xml_sax_InputSource$org_xml_sax_HandlerBase(input, hb);
});

Clazz.newMeth(C$, 'parse$java_io_File$org_xml_sax_helpers_DefaultHandler',  function (f, dh) {
if (f == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["File cannot be null"]);
}var input=Clazz.new_([f.toURI$().toASCIIString$()],$I$(1,1).c$$S);
this.parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler(input, dh);
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource$org_xml_sax_HandlerBase',  function (is, hb) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputSource cannot be null"]);
}var parser=this.getParser$();
if (hb != null ) {
parser.setDocumentHandler$org_xml_sax_DocumentHandler(hb);
parser.setEntityResolver$org_xml_sax_EntityResolver(hb);
parser.setErrorHandler$org_xml_sax_ErrorHandler(hb);
parser.setDTDHandler$org_xml_sax_DTDHandler(hb);
}parser.parse$org_xml_sax_InputSource(is);
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource$org_xml_sax_helpers_DefaultHandler',  function (is, dh) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputSource cannot be null"]);
}var reader=this.getXMLReader$();
if (dh != null ) {
reader.setContentHandler$org_xml_sax_ContentHandler(dh);
reader.setEntityResolver$org_xml_sax_EntityResolver(dh);
reader.setErrorHandler$org_xml_sax_ErrorHandler(dh);
reader.setDTDHandler$org_xml_sax_DTDHandler(dh);
}reader.parse$org_xml_sax_InputSource(is);
});

Clazz.newMeth(C$, 'getSchema$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This parser does not support specification \"\""]);
});

Clazz.newMeth(C$, 'isXIncludeAware$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This parser does not support specification \"\""]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

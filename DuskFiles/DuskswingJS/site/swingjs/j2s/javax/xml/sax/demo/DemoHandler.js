(function(){var P$=Clazz.newPackage("javax.xml.sax.demo"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DemoHandler", null, null, ['javax.xml.sax.EntityResolver', 'javax.xml.sax.DTDHandler', 'javax.xml.sax.DocumentHandler', 'javax.xml.sax.ErrorHandler']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'resolveEntity$S$S',  function (publicId, systemId) {
System.out.print$S("Resolve entity:");
if (publicId != null ) {
System.out.print$S(" publicId=\"" + publicId + '\"' );
}System.out.println$S(" systemId=\"" + systemId + '\"' );
return null;
});

Clazz.newMeth(C$, 'notationDecl$S$S$S',  function (name, publicId, systemId) {
System.out.print$S("Notation declaration: " + name);
if (publicId != null ) {
System.out.print$S(" publicId=\"" + publicId + '\"' );
}if (systemId != null ) {
System.out.print$S(" systemId=\"" + systemId + '\"' );
}System.out.print$C("\n");
});

Clazz.newMeth(C$, 'unparsedEntityDecl$S$S$S$S',  function (name, publicId, systemId, notationName) {
System.out.print$S("Unparsed Entity Declaration: " + name);
if (publicId != null ) {
System.out.print$S(" publicId=\"" + publicId + '\"' );
}if (systemId != null ) {
System.out.print$S(" systemId=\"" + systemId + '\"' );
}System.out.println$S(" notationName=\"" + notationName + '\"' );
});

Clazz.newMeth(C$, 'setDocumentLocator$javax_xml_sax_Locator',  function (locator) {
System.out.println$S("Document locator supplied.");
});

Clazz.newMeth(C$, 'startDocument$',  function () {
System.out.println$S("Start document");
});

Clazz.newMeth(C$, 'endDocument$',  function () {
System.out.println$S("End document");
});

Clazz.newMeth(C$, 'startElement$S$javax_xml_sax_AttributeList',  function (name, attributes) {
System.out.println$S("Start element: " + name);
for (var i=0; i < attributes.getLength$(); i++) {
System.out.println$S("  Attribute: " + attributes.getName$I(i) + ' ' + attributes.getType$I(i) + " \"" + attributes.getValue$I(i) + '\"' );
}
});

Clazz.newMeth(C$, 'endElement$S',  function (name) {
System.out.println$S("End element: " + name);
});

Clazz.newMeth(C$, 'characters$CA$I$I',  function (ch, start, length) {
System.out.print$S("Characters: ");
C$.display$CA$I$I(ch, start, length);
});

Clazz.newMeth(C$, 'ignorableWhitespace$CA$I$I',  function (ch, start, length) {
System.out.print$S("Ignorable Whitespace: ");
C$.display$CA$I$I(ch, start, length);
});

Clazz.newMeth(C$, 'processingInstruction$S$S',  function (target, data) {
System.out.println$S("Processing instruction: " + target + ' ' + data );
});

Clazz.newMeth(C$, 'warning$javax_xml_sax_SAXParseException',  function (exception) {
System.out.println$S("Warning: " + exception.getMessage$() + " (" + exception.getSystemId$() + ':' + exception.getLineNumber$() + ',' + exception.getColumnNumber$() + ')' );
});

Clazz.newMeth(C$, 'error$javax_xml_sax_SAXParseException',  function (exception) {
System.out.println$S("Recoverable Error: " + exception.getMessage$() + " (" + exception.getSystemId$() + ':' + exception.getLineNumber$() + ',' + exception.getColumnNumber$() + ')' );
});

Clazz.newMeth(C$, 'fatalError$javax_xml_sax_SAXParseException',  function (exception) {
System.out.println$S("Fatal Error: " + exception.getMessage$() + " (" + exception.getSystemId$() + ':' + exception.getLineNumber$() + ',' + exception.getColumnNumber$() + ')' );
});

Clazz.newMeth(C$, 'display$CA$I$I',  function (ch, start, length) {
for (var i=start; i < start + length; i++) {
switch ((ch[i]).$c()) {
case 10:
System.out.print$S("\\n");
break;
case 9:
System.out.print$S("\\t");
break;
default:
System.out.print$C(ch[i]);
break;
}
}
System.out.print$S("\n");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

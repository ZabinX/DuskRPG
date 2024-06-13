(function(){var P$=Clazz.newPackage("org.xml.sax.demo"),I$=[[0,'org.xml.sax.helpers.ParserFactory','org.xml.sax.demo.DemoHandler','java.io.FileInputStream','org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteStreamDemo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var parser;
var source;
var handler;
var input;
if (args.length != 1) {
System.err.println$S("Usage: java -Dorg.xml.sax.parser=<classname> SystemIdDemo <document>");
System.exit$I(2);
}parser=$I$(1).makeParser$();
handler=Clazz.new_($I$(2,1));
parser.setEntityResolver$org_xml_sax_EntityResolver(handler);
parser.setDTDHandler$org_xml_sax_DTDHandler(handler);
parser.setDocumentHandler$org_xml_sax_DocumentHandler(handler);
parser.setErrorHandler$org_xml_sax_ErrorHandler(handler);
input=Clazz.new_($I$(3,1).c$$S,[args[0]]);
source=Clazz.new_($I$(4,1).c$$java_io_InputStream,[input]);
source.setSystemId$S(args[0]);
parser.parse$org_xml_sax_InputSource(source);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

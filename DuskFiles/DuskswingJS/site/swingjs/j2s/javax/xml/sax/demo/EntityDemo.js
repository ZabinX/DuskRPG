(function(){var P$=Clazz.newPackage("javax.xml.sax.demo"),I$=[[0,'java.io.StringReader','javax.xml.sax.helpers.ParserFactory','javax.xml.sax.InputSource','java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EntityDemo", null, 'javax.xml.sax.demo.DemoHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.reader=Clazz.new_($I$(1,1).c$$S,["Entity resolution works!"]);
},1);

C$.$fields$=[['O',['reader','java.io.StringReader']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
var parser;
var handler;
if (args.length != 1) {
System.err.println$S("Usage: java -Djavax.xml.sax.parser=<classname> EntityDemo <document>");
System.exit$I(2);
}parser=$I$(2).makeParser$();
handler=Clazz.new_(C$);
parser.setEntityResolver$javax_xml_sax_EntityResolver(handler);
parser.setDTDHandler$javax_xml_sax_DTDHandler(handler);
parser.setDocumentHandler$javax_xml_sax_DocumentHandler(handler);
parser.setErrorHandler$javax_xml_sax_ErrorHandler(handler);
parser.parse$S(C$.makeAbsoluteURL$S(args[0]));
}, 1);

Clazz.newMeth(C$, 'resolveEntity$S$S',  function (publicId, systemId) {
if (publicId != null  && publicId.equals$O("-//megginson//TEXT Sample Entity//EN") ) {
return Clazz.new_($I$(3,1).c$$java_io_Reader,[this.reader]);
} else {
return null;
}});

Clazz.newMeth(C$, 'makeAbsoluteURL$S',  function (url) {
var baseURL;
var currentDirectory=System.getProperty$S("user.dir");
var fileSep=System.getProperty$S("file.separator");
var file=currentDirectory.replace$C$C(fileSep.charAt$I(0), "/") + '/';
if (file.charAt$I(0) != "/") {
file="/" + file;
}baseURL=Clazz.new_($I$(4,1).c$$S$S$S,["file", null, file]);
return Clazz.new_($I$(4,1).c$$java_net_URL$S,[baseURL, url]).toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

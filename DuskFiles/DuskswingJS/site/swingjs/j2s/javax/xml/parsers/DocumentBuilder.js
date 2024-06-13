(function(){var P$=Clazz.newPackage("javax.xml.parsers"),I$=[[0,'org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DocumentBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This DocumentBuilder, \"" + this.getClass$().getName$() + "\", does not support the reset functionality." ]);
});

Clazz.newMeth(C$, 'parse$java_io_InputStream',  function (is) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputStream cannot be null"]);
}var $in=Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]);
return this.parse$org_xml_sax_InputSource($in);
});

Clazz.newMeth(C$, 'parse$java_io_InputStream$S',  function (is, systemId) {
if (is == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["InputStream cannot be null"]);
}var $in=Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]);
$in.setSystemId$S(systemId);
return this.parse$org_xml_sax_InputSource($in);
});

Clazz.newMeth(C$, 'parse$S',  function (uri) {
if (uri == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["URI cannot be null"]);
}var $in=Clazz.new_($I$(1,1).c$$S,[uri]);
return this.parse$org_xml_sax_InputSource($in);
});

Clazz.newMeth(C$, 'parse$java_io_File',  function (f) {
if (f == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["File cannot be null"]);
}var $in=Clazz.new_([f.toURI$().toASCIIString$()],$I$(1,1).c$$S);
return this.parse$org_xml_sax_InputSource($in);
});

Clazz.newMeth(C$, 'getSchema$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This parser does not support specification \""]);
});

Clazz.newMeth(C$, 'isXIncludeAware$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This parser does not support specification \"\""]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

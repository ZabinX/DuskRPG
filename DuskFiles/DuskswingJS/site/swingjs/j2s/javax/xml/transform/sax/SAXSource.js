(function(){var P$=Clazz.newPackage("javax.xml.transform.sax"),I$=[[0,'org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SAXSource", null, null, 'javax.xml.transform.Source');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['reader','org.xml.sax.XMLReader','inputSource','org.xml.sax.InputSource']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_xml_sax_XMLReader$org_xml_sax_InputSource',  function (reader, inputSource) {
;C$.$init$.apply(this);
this.reader=reader;
this.inputSource=inputSource;
}, 1);

Clazz.newMeth(C$, 'c$$org_xml_sax_InputSource',  function (inputSource) {
;C$.$init$.apply(this);
this.inputSource=inputSource;
}, 1);

Clazz.newMeth(C$, 'setXMLReader$org_xml_sax_XMLReader',  function (reader) {
this.reader=reader;
});

Clazz.newMeth(C$, 'getXMLReader$',  function () {
return this.reader;
});

Clazz.newMeth(C$, 'setInputSource$org_xml_sax_InputSource',  function (inputSource) {
this.inputSource=inputSource;
});

Clazz.newMeth(C$, 'getInputSource$',  function () {
return this.inputSource;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemId) {
if (null == this.inputSource ) {
this.inputSource=Clazz.new_($I$(1,1).c$$S,[systemId]);
} else {
this.inputSource.setSystemId$S(systemId);
}});

Clazz.newMeth(C$, 'getSystemId$',  function () {
if (this.inputSource == null ) {
return null;
} else {
return this.inputSource.getSystemId$();
}});

Clazz.newMeth(C$, 'sourceToInputSource$javax_xml_transform_Source',  function (source) {
if (Clazz.instanceOf(source, "javax.xml.transform.sax.SAXSource")) {
return (source).getInputSource$();
} else if (Clazz.instanceOf(source, "javax.xml.transform.stream.StreamSource")) {
var ss=source;
var isource=Clazz.new_([ss.getSystemId$()],$I$(1,1).c$$S);
isource.setByteStream$java_io_InputStream(ss.getInputStream$());
isource.setCharacterStream$java_io_Reader(ss.getReader$());
isource.setPublicId$S(ss.getPublicId$());
return isource;
} else {
return null;
}}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

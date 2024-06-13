(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'javax.xml.bind.JAXBContext',['javax.xml.bind.JAXB','.Cache'],'javax.xml.transform.stream.StreamSource','java.net.URI','java.io.File','javax.xml.bind.annotation.XmlRootElement','javax.xml.bind.JAXBElement','javax.xml.namespace.QName','java.beans.Introspector','javax.xml.transform.stream.StreamResult']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JAXB", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Cache',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cache','javax.xml.bind.JAXB.Cache']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getContext$Class',  function (type) {
var d=C$.cache;
if (d != null  && d.type === type  ) return d.context;
d=Clazz.new_($I$(2,1).c$$Class,[type]);
C$.cache=d;
return d.context;
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_io_File$Class',  function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(Clazz.new_($I$(3,1).c$$java_io_File,[xml]), type);
return item.getValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.bind.JAXBException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_net_URL$Class',  function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_net_URI$Class',  function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$S$Class',  function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_io_InputStream$Class',  function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$java_io_Reader$Class',  function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'unmarshal$javax_xml_transform_Source$Class',  function (xml, type) {
try {
var item=C$.getContext$Class(type).createUnmarshaller$().unmarshal$javax_xml_transform_Source$Class(C$.toSource$O(xml), type);
return item.getValue$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'toSource$O',  function (xml) {
if (xml == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["no XML is given"]);
if (Clazz.instanceOf(xml, "java.lang.String")) {
try {
xml=Clazz.new_($I$(4,1).c$$S,[xml]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
xml=Clazz.new_($I$(5,1).c$$S,[xml]);
} else {
throw e;
}
}
}if (Clazz.instanceOf(xml, "java.io.File")) {
var file=xml;
return Clazz.new_($I$(3,1).c$$java_io_File,[file]);
}if (Clazz.instanceOf(xml, "java.net.URI")) {
var uri=xml;
xml=uri.toURL$();
}if (Clazz.instanceOf(xml, "java.net.URL")) {
var url=xml;
return Clazz.new_([url.toExternalForm$()],$I$(3,1).c$$S);
}if (Clazz.instanceOf(xml, "java.io.InputStream")) {
var $in=xml;
return Clazz.new_($I$(3,1).c$$java_io_InputStream,[$in]);
}if (Clazz.instanceOf(xml, "java.io.Reader")) {
var r=xml;
return Clazz.new_($I$(3,1).c$$java_io_Reader,[r]);
}if (Clazz.instanceOf(xml, "javax.xml.transform.Source")) {
return xml;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["I don't understand how to handle " + xml.getClass$()]);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_io_File',  function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_net_URL',  function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_net_URI',  function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$S',  function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_io_OutputStream',  function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$java_io_Writer',  function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, 'marshal$O$javax_xml_transform_Result',  function (jaxbObject, xml) {
C$._marshal$O$O(jaxbObject, xml);
}, 1);

Clazz.newMeth(C$, '_marshal$O$O',  function (jaxbObject, xml) {
try {
var context;
if (Clazz.instanceOf(jaxbObject, "javax.xml.bind.JAXBElement")) {
context=C$.getContext$Class((jaxbObject).getDeclaredType$());
} else {
var clazz=jaxbObject.getClass$();
var r=clazz.getAnnotation$Class(Clazz.getClass($I$(6),['name','namespace']));
context=C$.getContext$Class(clazz);
if (r == null ) {
jaxbObject=Clazz.new_([Clazz.new_([C$.inferName$Class(clazz)],$I$(8,1).c$$S), clazz, jaxbObject],$I$(7,1).c$$javax_xml_namespace_QName$Class$O);
}}var m=context.createMarshaller$();
m.setProperty$S$O("jaxb.formatted.output", Boolean.valueOf$Z(true));
m.marshal$O$javax_xml_transform_Result(jaxbObject, C$.toResult$O(xml));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.DataBindingException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'inferName$Class',  function (clazz) {
return $I$(9,"decapitalize$S",[clazz.getSimpleName$()]);
}, 1);

Clazz.newMeth(C$, 'toResult$O',  function (xml) {
if (xml == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["no XML is given"]);
if (Clazz.instanceOf(xml, "java.lang.String")) {
try {
xml=Clazz.new_($I$(4,1).c$$S,[xml]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
xml=Clazz.new_($I$(5,1).c$$S,[xml]);
} else {
throw e;
}
}
}if (Clazz.instanceOf(xml, "java.io.File")) {
var file=xml;
return Clazz.new_($I$(10,1).c$$java_io_File,[file]);
}if (Clazz.instanceOf(xml, "java.net.URI")) {
var uri=xml;
xml=uri.toURL$();
}if (Clazz.instanceOf(xml, "java.net.URL")) {
var url=xml;
var con=url.openConnection$();
con.setDoOutput$Z(true);
con.setDoInput$Z(false);
con.connect$();
return Clazz.new_([con.getOutputStream$()],$I$(10,1).c$$java_io_OutputStream);
}if (Clazz.instanceOf(xml, "java.io.OutputStream")) {
var os=xml;
return Clazz.new_($I$(10,1).c$$java_io_OutputStream,[os]);
}if (Clazz.instanceOf(xml, "java.io.Writer")) {
var w=xml;
return Clazz.new_($I$(10,1).c$$java_io_Writer,[w]);
}if (Clazz.instanceOf(xml, "javax.xml.transform.Result")) {
return xml;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["I don't understand how to handle " + xml.getClass$()]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JAXB, "Cache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','Class','context','javax.xml.bind.JAXBContext']]]

Clazz.newMeth(C$, 'c$$Class',  function (type) {
;C$.$init$.apply(this);
this.type=type;
this.context=$I$(1,"newInstance$ClassA",[Clazz.array(Class, -1, [type])]);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

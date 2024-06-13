(function(){var P$=Clazz.newPackage("javax.xml.bind.util"),I$=[[0,'javax.xml.bind.util.Messages']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JAXBResult", null, 'javax.xml.transform.sax.SAXResult');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['unmarshallerHandler','javax.xml.bind.UnmarshallerHandler']]]

Clazz.newMeth(C$, 'c$$javax_xml_bind_JAXBContext',  function (context) {
C$.c$$javax_xml_bind_Unmarshaller.apply(this, [(context == null ) ? C$.assertionFailed$() : context.createUnmarshaller$()]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_bind_Unmarshaller',  function (_unmarshaller) {
Clazz.super_(C$, this);
if (_unmarshaller == null ) throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(1).format$S("JAXBResult.NullUnmarshaller")]);
this.unmarshallerHandler=_unmarshaller.getUnmarshallerHandler$();
C$.superclazz.prototype.setHandler$org_xml_sax_ContentHandler.apply(this, [this.unmarshallerHandler]);
}, 1);

Clazz.newMeth(C$, 'getResult$',  function () {
return this.unmarshallerHandler.getResult$();
});

Clazz.newMeth(C$, 'assertionFailed$',  function () {
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(1).format$S("JAXBResult.NullContext")]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

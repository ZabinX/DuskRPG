(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'swingjs.xml.JSJAXBMarshaller','swingjs.xml.JSJAXBUnmarshaller']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSJAXBContext", null, 'javax.xml.bind.JAXBContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['contextPath'],'O',['properties','java.util.Map','javaClasses','Class[]']]]

Clazz.newMeth(C$, 'c$$ClassA$java_util_Map',  function (classes, properties) {
Clazz.super_(C$, this);
this.properties=properties;
this.javaClasses=classes;
}, 1);

Clazz.newMeth(C$, 'c$$S$ClassLoader$java_util_Map',  function (contextPath, classLoader, properties) {
Clazz.super_(C$, this);
this.contextPath=contextPath;
this.properties=properties;
}, 1);

Clazz.newMeth(C$, 'getjavaClasses$',  function () {
return this.javaClasses;
});

Clazz.newMeth(C$, 'createMarshaller$',  function () {
return Clazz.new_($I$(1,1).c$$javax_xml_bind_JAXBContext,[this]);
});

Clazz.newMeth(C$, 'createUnmarshaller$',  function () {
return Clazz.new_($I$(2,1).c$$javax_xml_bind_JAXBContext,[this]);
});

Clazz.newMeth(C$, 'createValidator$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

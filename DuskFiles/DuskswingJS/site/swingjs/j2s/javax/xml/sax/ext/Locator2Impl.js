(function(){var P$=Clazz.newPackage("javax.xml.sax.ext"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Locator2Impl", null, 'javax.xml.sax.helpers.LocatorImpl', 'javax.xml.sax.ext.Locator2');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['encoding','version']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_Locator',  function (locator) {
;C$.superclazz.c$$javax_xml_sax_Locator.apply(this,[locator]);C$.$init$.apply(this);
if (Clazz.instanceOf(locator, "javax.xml.sax.ext.Locator2")) {
var l2=locator;
this.version=l2.getXMLVersion$();
this.encoding=l2.getEncoding$();
}}, 1);

Clazz.newMeth(C$, 'getXMLVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'getEncoding$',  function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setXMLVersion$S',  function (version) {
this.version=version;
});

Clazz.newMeth(C$, 'setEncoding$S',  function (encoding) {
this.encoding=encoding;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

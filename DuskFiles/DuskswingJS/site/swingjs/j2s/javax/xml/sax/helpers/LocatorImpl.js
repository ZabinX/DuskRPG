(function(){var P$=Clazz.newPackage("javax.xml.sax.helpers"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LocatorImpl", null, null, 'javax.xml.sax.Locator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lineNumber','columnNumber'],'S',['publicId','systemId']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_sax_Locator',  function (locator) {
;C$.$init$.apply(this);
this.setPublicId$S(locator.getPublicId$());
this.setSystemId$S(locator.getSystemId$());
this.setLineNumber$I(locator.getLineNumber$());
this.setColumnNumber$I(locator.getColumnNumber$());
}, 1);

Clazz.newMeth(C$, 'getPublicId$',  function () {
return this.publicId;
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return this.systemId;
});

Clazz.newMeth(C$, 'getLineNumber$',  function () {
return this.lineNumber;
});

Clazz.newMeth(C$, 'getColumnNumber$',  function () {
return this.columnNumber;
});

Clazz.newMeth(C$, 'setPublicId$S',  function (publicId) {
this.publicId=publicId;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemId) {
this.systemId=systemId;
});

Clazz.newMeth(C$, 'setLineNumber$I',  function (lineNumber) {
this.lineNumber=lineNumber;
});

Clazz.newMeth(C$, 'setColumnNumber$I',  function (columnNumber) {
this.columnNumber=columnNumber;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

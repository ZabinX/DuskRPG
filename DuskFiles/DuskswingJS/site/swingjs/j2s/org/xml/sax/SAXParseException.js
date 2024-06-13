(function(){var P$=Clazz.newPackage("org.xml.sax"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SAXParseException", null, 'org.xml.sax.SAXException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lineNumber','columnNumber'],'S',['publicId','systemId']]]

Clazz.newMeth(C$, 'c$$S$org_xml_sax_Locator',  function (message, locator) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
if (locator != null ) {
p$1.init$S$S$I$I.apply(this, [locator.getPublicId$(), locator.getSystemId$(), locator.getLineNumber$(), locator.getColumnNumber$()]);
} else {
p$1.init$S$S$I$I.apply(this, [null, null, -1, -1]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$org_xml_sax_Locator$Exception',  function (message, locator, e) {
;C$.superclazz.c$$S$Exception.apply(this,[message, e]);C$.$init$.apply(this);
if (locator != null ) {
p$1.init$S$S$I$I.apply(this, [locator.getPublicId$(), locator.getSystemId$(), locator.getLineNumber$(), locator.getColumnNumber$()]);
} else {
p$1.init$S$S$I$I.apply(this, [null, null, -1, -1]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I$I',  function (message, publicId, systemId, lineNumber, columnNumber) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
p$1.init$S$S$I$I.apply(this, [publicId, systemId, lineNumber, columnNumber]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I$I$Exception',  function (message, publicId, systemId, lineNumber, columnNumber, e) {
;C$.superclazz.c$$S$Exception.apply(this,[message, e]);C$.$init$.apply(this);
p$1.init$S$S$I$I.apply(this, [publicId, systemId, lineNumber, columnNumber]);
}, 1);

Clazz.newMeth(C$, 'init$S$S$I$I',  function (publicId, systemId, lineNumber, columnNumber) {
this.publicId=publicId;
this.systemId=systemId;
this.lineNumber=lineNumber;
this.columnNumber=columnNumber;
}, p$1);

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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

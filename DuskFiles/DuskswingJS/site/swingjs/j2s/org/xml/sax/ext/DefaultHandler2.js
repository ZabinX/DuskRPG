(function(){var P$=Clazz.newPackage("org.xml.sax.ext"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultHandler2", null, 'org.xml.sax.helpers.DefaultHandler', ['org.xml.sax.ext.LexicalHandler', 'org.xml.sax.ext.DeclHandler', 'org.xml.sax.ext.EntityResolver2']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'startCDATA$',  function () {
});

Clazz.newMeth(C$, 'endCDATA$',  function () {
});

Clazz.newMeth(C$, 'startDTD$S$S$S',  function (name, publicId, systemId) {
});

Clazz.newMeth(C$, 'endDTD$',  function () {
});

Clazz.newMeth(C$, 'startEntity$S',  function (name) {
});

Clazz.newMeth(C$, 'endEntity$S',  function (name) {
});

Clazz.newMeth(C$, 'comment$CA$I$I',  function (ch, start, length) {
});

Clazz.newMeth(C$, 'attributeDecl$S$S$S$S$S',  function (eName, aName, type, mode, value) {
});

Clazz.newMeth(C$, 'elementDecl$S$S',  function (name, model) {
});

Clazz.newMeth(C$, 'externalEntityDecl$S$S$S',  function (name, publicId, systemId) {
});

Clazz.newMeth(C$, 'internalEntityDecl$S$S',  function (name, value) {
});

Clazz.newMeth(C$, 'getExternalSubset$S$S',  function (name, baseURI) {
return null;
});

Clazz.newMeth(C$, 'resolveEntity$S$S$S$S',  function (name, publicId, baseURI, systemId) {
return null;
});

Clazz.newMeth(C$, 'resolveEntity$S$S',  function (publicId, systemId) {
return this.resolveEntity$S$S$S$S(null, publicId, null, systemId);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

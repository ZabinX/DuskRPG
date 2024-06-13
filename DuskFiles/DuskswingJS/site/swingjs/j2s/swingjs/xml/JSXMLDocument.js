(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,['swingjs.xml.JSXMLDocument','.ImplementationImpl','.DocumentTypeImpl'],'swingjs.JSUtil','swingjs.api.js.DOMNode','swingjs.xml.JSSAXParser',['swingjs.xml.JSXMLDocument','.ImplementationImpl'],'swingjs.xml.JSXMLElement','swingjs.xml.JSXMLDocumentFragment','swingjs.xml.JSXMLText','swingjs.xml.JSXMLComment','swingjs.xml.JSXMLCDATASection','swingjs.xml.JSXMLProcessingInstruction','swingjs.xml.JSXMLAttr','swingjs.xml.JSXMLEntityReference']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLDocument", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.xml.JSXMLNode', 'org.w3c.dom.Document');
C$.$classes$=[['ImplementationImpl',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['doc','swingjs.api.js.DOMNode','impl','swingjs.xml.JSXMLDocument.ImplementationImpl','docType','swingjs.xml.JSXMLDocument.ImplementationImpl.DocumentTypeImpl']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.doc=$I$(2).jQuery.parseXML("<xml></xml>");
this.doc.removeChild($I$(3).firstChild(this.doc));
this.setNode$swingjs_api_js_DOMNode(this.doc);
}, 1);

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource',  function (is) {
this.node=this.doc=Clazz.new_($I$(4,1)).parseToDOM$org_xml_sax_InputSource(is);
return this;
});

Clazz.newMeth(C$, 'getDoctype$',  function () {
return this.docType;
});

Clazz.newMeth(C$, 'getImplementation$',  function () {
return this.impl == null  ? (this.impl=Clazz.new_($I$(5,1),[this, null])) : this.impl;
});

Clazz.newMeth(C$, 'getDocumentElement$',  function () {
return this.get$S("firstElementChild");
});

Clazz.newMeth(C$, 'createElement$S',  function (tagName) {
return Clazz.new_($I$(6,1)).setNode$swingjs_api_js_DOMNode(this.doc.createElement(tagName) ||null);
});

Clazz.newMeth(C$, 'createDocumentFragment$',  function () {
return Clazz.new_($I$(7,1)).setNode$swingjs_api_js_DOMNode(this.doc.createDocumentFragment() ||null);
});

Clazz.newMeth(C$, 'createTextNode$S',  function (data) {
return Clazz.new_($I$(8,1)).setNode$swingjs_api_js_DOMNode(this.doc.createTextNode(data) ||null);
});

Clazz.newMeth(C$, 'createComment$S',  function (data) {
return Clazz.new_($I$(9,1)).setNode$swingjs_api_js_DOMNode(this.doc.createComment(data) ||null);
});

Clazz.newMeth(C$, 'createCDATASection$S',  function (data) {
return Clazz.new_($I$(10,1)).setNode$swingjs_api_js_DOMNode(this.doc.createCDATASection(data) ||null);
});

Clazz.newMeth(C$, 'createProcessingInstruction$S$S',  function (target, data) {
return Clazz.new_($I$(11,1)).setNode$swingjs_api_js_DOMNode(this.doc.createProcessingInstruction(target, data) ||null);
});

Clazz.newMeth(C$, 'createAttribute$S',  function (name) {
return Clazz.new_($I$(12,1)).setNode$swingjs_api_js_DOMNode(1 ? this.doc.createAttribute(name) :null);
});

Clazz.newMeth(C$, 'createEntityReference$S',  function (name) {
return Clazz.new_($I$(13,1)).setNode$swingjs_api_js_DOMNode(this.doc.createEntityReference(name) ||null);
});

Clazz.newMeth(C$, 'createElementNS$S$S',  function (namespaceURI, qualifiedName) {
return Clazz.new_($I$(6,1)).setNode$swingjs_api_js_DOMNode(this.doc.createElementNS(namespaceURI, qualifiedName) ||null);
});

Clazz.newMeth(C$, 'createAttributeNS$S$S',  function (namespaceURI, qualifiedName) {
return Clazz.new_($I$(12,1)).setNode$swingjs_api_js_DOMNode(1 ? this.doc.createAttributeNS(namespaceURI, qualifiedName) :null);
});

Clazz.newMeth(C$, 'getElementById$S',  function (id) {
return this.get$S("id");
});

Clazz.newMeth(C$, 'importNode$org_w3c_dom_Node$Z',  function (importedNode, deep) {
return null;
});

Clazz.newMeth(C$, 'getActualEncoding$',  function () {
return null;
});

Clazz.newMeth(C$, 'setActualEncoding$S',  function (actualEncoding) {
});

Clazz.newMeth(C$, 'getEncoding$',  function () {
return null;
});

Clazz.newMeth(C$, 'setEncoding$S',  function (encoding) {
});

Clazz.newMeth(C$, 'getStandalone$',  function () {
return false;
});

Clazz.newMeth(C$, 'setStandalone$Z',  function (standalone) {
});

Clazz.newMeth(C$, 'getStrictErrorChecking$',  function () {
return false;
});

Clazz.newMeth(C$, 'setStrictErrorChecking$Z',  function (strictErrorChecking) {
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return null;
});

Clazz.newMeth(C$, 'setVersion$S',  function (version) {
});

Clazz.newMeth(C$, 'adoptNode$org_w3c_dom_Node',  function (source) {

this.node.appendChild(source.node);
return source;
});

Clazz.newMeth(C$, 'appendChild$org_w3c_dom_Node',  function (newChild) {

this.doc.appendChild(this.node = newChild.node);
return newChild;
});

Clazz.newMeth(C$, 'getFirstChild$',  function () {
return this.get$S("root");
});

Clazz.newMeth(C$, 'getDocumentURI$',  function () {
return null;
});

Clazz.newMeth(C$, 'getElementsByAttributeValue$S$S$S',  function (namespaceURI, localName, value) {
$I$(2).notImplemented$S(null);
return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSXMLDocument, "ImplementationImpl", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'org.w3c.dom.DOMImplementation');
C$.$classes$=[['DocumentTypeImpl',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['domImpl','swingjs.api.js.DOMNode']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var mydoc=this.b$['swingjs.xml.JSXMLDocument'].doc;
this.domImpl=mydoc.implementation ||null;
}, 1);

Clazz.newMeth(C$, 'hasFeature$S$S',  function (feature, version) {
return false;
});

Clazz.newMeth(C$, 'createDocumentType$S$S$S',  function (qualifiedName, publicId, systemId) {
return Clazz.new_($I$(1,1).c$$S$S$S,[this, null, qualifiedName, publicId, systemId]);
});

Clazz.newMeth(C$, 'createDocument$S$S$org_w3c_dom_DocumentType',  function (namespaceURI, qualifiedName, doctype) {
$I$(2).notImplemented$S(null);
return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSXMLDocument.ImplementationImpl, "DocumentTypeImpl", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'swingjs.xml.JSXMLNode', 'org.w3c.dom.DocumentType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (qualifiedName, publicId, systemId) {
Clazz.super_(C$, this);
var me=this;
var di=this.b$['swingjs.xml.JSXMLDocument.ImplementationImpl'].domImpl;
me.node=1 ? di.createDocumentType(qualifiedName, publicId, systemId) :null;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return 1 ? this.node.name :null;
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return 1 ? this.node.systemId :null;
});

Clazz.newMeth(C$, 'getPublicId$',  function () {
return 1 ? this.node.publicId :null;
});

Clazz.newMeth(C$, 'getEntities$',  function () {
return null;
});

Clazz.newMeth(C$, 'getNotations$',  function () {
return null;
});

Clazz.newMeth(C$, 'getInternalSubset$',  function () {
return null;
});

Clazz.newMeth(C$);
})()
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

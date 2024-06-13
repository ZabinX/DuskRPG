(function(){var P$=Clazz.newPackage("swingjs.xml"),p$1={},I$=[[0,'swingjs.xml.JSXMLDocument']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLDocumentBuilder", null, 'javax.xml.parsers.DocumentBuilder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['ignoreWhitespace','ignoreComments'],'O',['attrs','java.util.Map','+features','doc','swingjs.api.js.DOMNode']]]

Clazz.newMeth(C$, 'c$$java_util_Map$java_util_Map$swingjs_xml_JSXMLDocumentBuilderFactory',  function (attrs, features, dbf) {
Clazz.super_(C$, this);
this.attrs=attrs;
this.features=features;
this.ignoreWhitespace=dbf.isIgnoringElementContentWhitespace$();
this.ignoreComments=dbf.isIgnoringComments$();
}, 1);

Clazz.newMeth(C$, 'newDocument$',  function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'parse$org_xml_sax_InputSource',  function (is) {
var d=Clazz.new_($I$(1,1)).parse$org_xml_sax_InputSource(is);
if (this.ignoreComments || this.ignoreWhitespace ) p$1.fix$org_w3c_dom_Node.apply(this, [d.getDocumentElement$()]);
return d;
});

Clazz.newMeth(C$, 'fix$org_w3c_dom_Node',  function (node) {
if (node.hasChildNodes$()) {
var list=node.getChildNodes$();
for (var i=list.getLength$(); --i >= 0; ) {
var n=list.item$I(i);
switch (n.getNodeType$()) {
case 3:
if (this.ignoreWhitespace && n.getNodeValue$().trim$().length$() == 0 ) node.removeChild$org_w3c_dom_Node(n);
break;
case 8:
if (this.ignoreComments) {
node.removeChild$org_w3c_dom_Node(n);
} else {
continue;
}break;
case 1:
p$1.fix$org_w3c_dom_Node.apply(this, [n]);
break;
default:
break;
}
}
}}, p$1);

Clazz.newMeth(C$, 'isNamespaceAware$',  function () {
return false;
});

Clazz.newMeth(C$, 'isValidating$',  function () {
return false;
});

Clazz.newMeth(C$, 'setEntityResolver$org_xml_sax_EntityResolver',  function (er) {
});

Clazz.newMeth(C$, 'setErrorHandler$org_xml_sax_ErrorHandler',  function (eh) {
});

Clazz.newMeth(C$, 'getDOMImplementation$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

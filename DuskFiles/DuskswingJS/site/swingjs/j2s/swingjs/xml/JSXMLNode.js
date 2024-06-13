(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[[0,'swingjs.xml.JSXMLElement','swingjs.xml.JSXMLText','swingjs.xml.JSXMLAttributes','swingjs.xml.JSXMLComment','swingjs.xml.JSXMLNodeList','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSXMLNode", null, null, 'org.w3c.dom.Node');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['node','swingjs.api.js.DOMNode','htData','java.util.Map']]]

Clazz.newMeth(C$, 'setNode$swingjs_api_js_DOMNode',  function (n) {
this.node=n;

n._o = this;
return this;
});

Clazz.newMeth(C$, 'get$S',  function (type) {
var n=null;
switch (type) {
case "id":

n = this.doc.getElementById(id)
break;
case "root":
n=this.node;
break;
case "owner":

n = this.node.ownerDocument;
break;
case "clone":

n = this.node.cloneNode(false);
break;
case "clonedeep":

n = this.node.cloneNode(true);
break;
case "attributes":

n = this.node.attributes;n && (n.nodeType = 2);
break;
default:

n = this.node[type];
break;
}
return C$.newNode$swingjs_api_js_DOMNode(n);
});

Clazz.newMeth(C$, 'newNode$swingjs_api_js_DOMNode',  function (n) {

if (n == null) return null; if (n._o != null) return n._o;
switch (1 ? n.nodeType :0) {
case 1:
return Clazz.new_($I$(1,1)).setNode$swingjs_api_js_DOMNode(n);
case 3:
return Clazz.new_($I$(2,1)).setNode$swingjs_api_js_DOMNode(n);
case 2:
return Clazz.new_($I$(3,1)).setNode$swingjs_api_js_DOMNode(n);
case 8:
return Clazz.new_($I$(4,1)).setNode$swingjs_api_js_DOMNode(n);
default:
return Clazz.new_(C$).setNode$swingjs_api_js_DOMNode(n);
}
}, 1);

Clazz.newMeth(C$, 'getNodeName$',  function () {
return 1 ? this.node.nodeName :"";
});

Clazz.newMeth(C$, 'getNodeValue$',  function () {
return 1 ? this.node.value :null;
});

Clazz.newMeth(C$, 'setNodeValue$S',  function (s) {

this.node.value = s;
});

Clazz.newMeth(C$, 'getNodeType$',  function () {
return $s$[0] = 1 ? this.node.nodeType :0, $s$[0];
});

Clazz.newMeth(C$, 'getParentNode$',  function () {
return this.get$S("parentNode");
});

Clazz.newMeth(C$, 'getChildNodes$',  function () {
return Clazz.new_($I$(5,1).c$$O,[1 ? this.node.childNodes :null]);
});

Clazz.newMeth(C$, 'getFirstChild$',  function () {
return this.get$S("firstChild");
});

Clazz.newMeth(C$, 'getLastChild$',  function () {
return this.get$S("lastChild");
});

Clazz.newMeth(C$, 'getPreviousSibling$',  function () {
return this.get$S("previousSibling");
});

Clazz.newMeth(C$, 'getNextSibling$',  function () {
return this.get$S("nextSibling");
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.get$S("attributes");
});

Clazz.newMeth(C$, 'getOwnerDocument$',  function () {
return this.get$S("owner");
});

Clazz.newMeth(C$, 'insertBefore$org_w3c_dom_Node$org_w3c_dom_Node',  function (newChild, refChild) {

this.node.insertBefore(newChild.node, refChild.node);
return newChild;
});

Clazz.newMeth(C$, 'replaceChild$org_w3c_dom_Node$org_w3c_dom_Node',  function (newChild, oldChild) {

this.node.replaceChild(newChild.node, oldChild.node);
return oldChild;
});

Clazz.newMeth(C$, 'removeChild$org_w3c_dom_Node',  function (oldChild) {

this.node.removeChild(oldChild.node);
return oldChild;
});

Clazz.newMeth(C$, 'appendChild$org_w3c_dom_Node',  function (newChild) {

this.node.appendChild(newChild.node);
return newChild;
});

Clazz.newMeth(C$, 'hasChildNodes$',  function () {
return 1 ? this.node.hasChildNodes() :false;
});

Clazz.newMeth(C$, 'cloneNode$Z',  function (deep) {
return this.get$S(deep ? "cloneDeep" : "clone");
});

Clazz.newMeth(C$, 'normalize$',  function () {
});

Clazz.newMeth(C$, 'supports$S$S',  function (feature, version) {
return false;
});

Clazz.newMeth(C$, 'getNamespaceURI$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPrefix$',  function () {
return null;
});

Clazz.newMeth(C$, 'setPrefix$S',  function (prefix) {
});

Clazz.newMeth(C$, 'getLocalName$',  function () {
return null;
});

Clazz.newMeth(C$, 'getBaseURI$',  function () {
return null;
});

Clazz.newMeth(C$, 'compareDocumentOrder$org_w3c_dom_Node',  function (other) {
var i=this.compareDocumentPosition$org_w3c_dom_Node(other);
if ((i & 8) != 0) return 3;
if ((i & 16) != 0) return 4;
if ((i & 4) != 0) return 2;
if ((i & 2) != 0) return 1;
return 6;
});

Clazz.newMeth(C$, 'compareDocumentPosition$org_w3c_dom_Node',  function (other) {
return $s$[0] = 1 ? this.node.compareDocumentPosition(other.node) :0, $s$[0];
});

Clazz.newMeth(C$, 'compareTreePosition$org_w3c_dom_Node',  function (other) {
return 1 ? this.node.compareTreePosition(other.node) :0;
});

Clazz.newMeth(C$, 'getTextContent$',  function () {
return 1 ? this.node.textContent :null;
});

Clazz.newMeth(C$, 'setTextContent$S',  function (textContent) {
});

Clazz.newMeth(C$, 'isSameNode$org_w3c_dom_Node',  function (other) {
return this.node === (other).node ;
});

Clazz.newMeth(C$, 'lookupNamespacePrefix$S',  function (namespaceURI) {
return null;
});

Clazz.newMeth(C$, 'lookupNamespaceURI$S',  function (prefix) {
return null;
});

Clazz.newMeth(C$, 'normalizeNS$',  function () {
});

Clazz.newMeth(C$, 'setUserData$O$S',  function (data, key) {
if (key == null ) return null;
if (this.htData == null ) this.htData=Clazz.new_($I$(6,1));
this.htData.put$O$O(key, data);
return data;
});

Clazz.newMeth(C$, 'getUserData$S',  function (key) {
return (this.htData == null  || key == null   ? null : this.htData.get$O(key));
});

Clazz.newMeth(C$, 'getKey$',  function () {
return null;
});

Clazz.newMeth(C$, 'isEqualNode$org_w3c_dom_Node',  function (node) {
return (this.node.outerHTML == node.outerHTML ||false);
});

Clazz.newMeth(C$, 'hasAttributes$',  function () {
return this.node.hasAttributes() ||false;
});

Clazz.newMeth(C$, 'getElementsByAttributeValue$S$S$S',  function (namespaceURI, localName, value) {
return null;
});

Clazz.newMeth(C$, 'getElementsByTagName$S',  function (tagname) {
return Clazz.new_([this.node.getElementsByTagName(tagname) ||null],$I$(5,1).c$$O);
});

Clazz.newMeth(C$, 'getElementsByTagNameNS$S$S',  function (namespaceURI, localName) {
return Clazz.new_([this.node.getElementsByTagNameNS(namespaceURI, localName) ||null],$I$(5,1).c$$O);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

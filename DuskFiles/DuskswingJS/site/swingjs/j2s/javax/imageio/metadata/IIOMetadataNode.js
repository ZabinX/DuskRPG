(function(){var P$=Clazz.newPackage("javax.imageio.metadata"),p$1={},I$=[[0,'java.util.ArrayList','javax.imageio.metadata.IIONamedNodeMap','javax.imageio.metadata.IIOAttr','javax.imageio.metadata.IIONodeList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IIOMetadataNode", null, null, ['org.w3c.dom.Element', 'org.w3c.dom.NodeList']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nodeName=null;
this.nodeValue=null;
this.userObject=null;
this.parent=null;
this.numChildren=0;
this.firstChild=null;
this.lastChild=null;
this.nextSibling=null;
this.previousSibling=null;
this.attributes=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['numChildren'],'S',['nodeName','nodeValue'],'O',['userObject','java.lang.Object','parent','javax.imageio.metadata.IIOMetadataNode','+firstChild','+lastChild','+nextSibling','+previousSibling','attributes','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (nodeName) {
;C$.$init$.apply(this);
this.nodeName=nodeName;
}, 1);

Clazz.newMeth(C$, 'checkNode$org_w3c_dom_Node',  function (node) {
if (node == null ) {
return;
}if (!(Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode"))) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIODOMException').c$$H$S,[4, "Node not an IIOMetadataNode!"]);
}}, p$1);

Clazz.newMeth(C$, 'getNodeName$',  function () {
return this.nodeName;
});

Clazz.newMeth(C$, 'getNodeValue$',  function () {
return this.nodeValue;
});

Clazz.newMeth(C$, 'setNodeValue$S',  function (nodeValue) {
this.nodeValue=nodeValue;
});

Clazz.newMeth(C$, 'getNodeType$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getParentNode$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'getChildNodes$',  function () {
return this;
});

Clazz.newMeth(C$, 'getFirstChild$',  function () {
return this.firstChild;
});

Clazz.newMeth(C$, 'getLastChild$',  function () {
return this.lastChild;
});

Clazz.newMeth(C$, 'getPreviousSibling$',  function () {
return this.previousSibling;
});

Clazz.newMeth(C$, 'getNextSibling$',  function () {
return this.nextSibling;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return Clazz.new_($I$(2,1).c$$java_util_List,[this.attributes]);
});

Clazz.newMeth(C$, 'getOwnerDocument$',  function () {
return null;
});

Clazz.newMeth(C$, 'insertBefore$org_w3c_dom_Node$org_w3c_dom_Node',  function (newChild, refChild) {
if (newChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["newChild == null!"]);
}p$1.checkNode$org_w3c_dom_Node.apply(this, [newChild]);
p$1.checkNode$org_w3c_dom_Node.apply(this, [refChild]);
var newChildNode=newChild;
var refChildNode=refChild;
var previous=null;
var next=null;
if (refChild == null ) {
previous=this.lastChild;
next=null;
this.lastChild=newChildNode;
} else {
previous=refChildNode.previousSibling;
next=refChildNode;
}if (previous != null ) {
previous.nextSibling=newChildNode;
}if (next != null ) {
next.previousSibling=newChildNode;
}newChildNode.parent=this;
newChildNode.previousSibling=previous;
newChildNode.nextSibling=next;
if (this.firstChild === refChildNode ) {
this.firstChild=newChildNode;
}++this.numChildren;
return newChildNode;
});

Clazz.newMeth(C$, 'replaceChild$org_w3c_dom_Node$org_w3c_dom_Node',  function (newChild, oldChild) {
if (newChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["newChild == null!"]);
}p$1.checkNode$org_w3c_dom_Node.apply(this, [newChild]);
p$1.checkNode$org_w3c_dom_Node.apply(this, [oldChild]);
var newChildNode=newChild;
var oldChildNode=oldChild;
var previous=oldChildNode.previousSibling;
var next=oldChildNode.nextSibling;
if (previous != null ) {
previous.nextSibling=newChildNode;
}if (next != null ) {
next.previousSibling=newChildNode;
}newChildNode.parent=this;
newChildNode.previousSibling=previous;
newChildNode.nextSibling=next;
if (this.firstChild === oldChildNode ) {
this.firstChild=newChildNode;
}if (this.lastChild === oldChildNode ) {
this.lastChild=newChildNode;
}oldChildNode.parent=null;
oldChildNode.previousSibling=null;
oldChildNode.nextSibling=null;
return oldChildNode;
});

Clazz.newMeth(C$, 'removeChild$org_w3c_dom_Node',  function (oldChild) {
if (oldChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["oldChild == null!"]);
}p$1.checkNode$org_w3c_dom_Node.apply(this, [oldChild]);
var oldChildNode=oldChild;
var previous=oldChildNode.previousSibling;
var next=oldChildNode.nextSibling;
if (previous != null ) {
previous.nextSibling=next;
}if (next != null ) {
next.previousSibling=previous;
}if (this.firstChild === oldChildNode ) {
this.firstChild=next;
}if (this.lastChild === oldChildNode ) {
this.lastChild=previous;
}oldChildNode.parent=null;
oldChildNode.previousSibling=null;
oldChildNode.nextSibling=null;
--this.numChildren;
return oldChildNode;
});

Clazz.newMeth(C$, 'appendChild$org_w3c_dom_Node',  function (newChild) {
if (newChild == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["newChild == null!"]);
}p$1.checkNode$org_w3c_dom_Node.apply(this, [newChild]);
return this.insertBefore$org_w3c_dom_Node$org_w3c_dom_Node(newChild, null);
});

Clazz.newMeth(C$, 'hasChildNodes$',  function () {
return this.numChildren > 0;
});

Clazz.newMeth(C$, 'cloneNode$Z',  function (deep) {
var newNode=Clazz.new_(C$.c$$S,[this.nodeName]);
newNode.setUserObject$O(this.getUserObject$());
if (deep) {
for (var child=this.firstChild; child != null ; child=child.nextSibling) {
newNode.appendChild$org_w3c_dom_Node(child.cloneNode$Z(true));
}
}return newNode;
});

Clazz.newMeth(C$, 'normalize$',  function () {
});

Clazz.newMeth(C$, 'isSupported$S$S',  function (feature, version) {
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
return this.nodeName;
});

Clazz.newMeth(C$, 'getTagName$',  function () {
return this.nodeName;
});

Clazz.newMeth(C$, 'getAttribute$S',  function (name) {
var attr=this.getAttributeNode$S(name);
if (attr == null ) {
return "";
}return attr.getValue$();
});

Clazz.newMeth(C$, 'getAttributeNS$S$S',  function (namespaceURI, localName) {
return this.getAttribute$S(localName);
});

Clazz.newMeth(C$, 'setAttribute$S$S',  function (name, value) {
var valid=true;
var chs=name.toCharArray$();
for (var i=0; i < chs.length; i++) {
if ((chs[i]).$c() >= 65534 ) {
valid=false;
break;
}}
if (!valid) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIODOMException').c$$H$S,[5, "Attribute name is illegal!"]);
}p$1.removeAttribute$S$Z.apply(this, [name, false]);
this.attributes.add$O(Clazz.new_($I$(3,1).c$$org_w3c_dom_Element$S$S,[this, name, value]));
});

Clazz.newMeth(C$, 'setAttributeNS$S$S$S',  function (namespaceURI, qualifiedName, value) {
this.setAttribute$S$S(qualifiedName, value);
});

Clazz.newMeth(C$, 'removeAttribute$S',  function (name) {
p$1.removeAttribute$S$Z.apply(this, [name, true]);
});

Clazz.newMeth(C$, 'removeAttribute$S$Z',  function (name, checkPresent) {
var numAttributes=this.attributes.size$();
for (var i=0; i < numAttributes; i++) {
var attr=this.attributes.get$I(i);
if (name.equals$O(attr.getName$())) {
attr.setOwnerElement$org_w3c_dom_Element(null);
this.attributes.remove$I(i);
return;
}}
if (checkPresent) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIODOMException').c$$H$S,[8, "No such attribute!"]);
}}, p$1);

Clazz.newMeth(C$, 'removeAttributeNS$S$S',  function (namespaceURI, localName) {
this.removeAttribute$S(localName);
});

Clazz.newMeth(C$, 'getAttributeNode$S',  function (name) {
var node=this.getAttributes$().getNamedItem$S(name);
return node;
});

Clazz.newMeth(C$, 'getAttributeNodeNS$S$S',  function (namespaceURI, localName) {
return this.getAttributeNode$S(localName);
});

Clazz.newMeth(C$, 'setAttributeNode$org_w3c_dom_Attr',  function (newAttr) {
var owner=newAttr.getOwnerElement$();
if (owner != null ) {
if (owner === this ) {
return null;
} else {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[10, "Attribute is already in use"]);
}}var attr;
if (Clazz.instanceOf(newAttr, "javax.imageio.metadata.IIOAttr")) {
attr=newAttr;
attr.setOwnerElement$org_w3c_dom_Element(this);
} else {
attr=Clazz.new_([this, newAttr.getName$(), newAttr.getValue$()],$I$(3,1).c$$org_w3c_dom_Element$S$S);
}var oldAttr=this.getAttributeNode$S(attr.getName$());
if (oldAttr != null ) {
this.removeAttributeNode$org_w3c_dom_Attr(oldAttr);
}this.attributes.add$O(attr);
return oldAttr;
});

Clazz.newMeth(C$, 'setAttributeNodeNS$org_w3c_dom_Attr',  function (newAttr) {
return this.setAttributeNode$org_w3c_dom_Attr(newAttr);
});

Clazz.newMeth(C$, 'removeAttributeNode$org_w3c_dom_Attr',  function (oldAttr) {
this.removeAttribute$S(oldAttr.getName$());
return oldAttr;
});

Clazz.newMeth(C$, 'getElementsByTagName$S',  function (name) {
var l=Clazz.new_($I$(1,1));
p$1.getElementsByTagName$S$java_util_List.apply(this, [name, l]);
return Clazz.new_($I$(4,1).c$$java_util_List,[l]);
});

Clazz.newMeth(C$, 'getElementsByTagName$S$java_util_List',  function (name, l) {
if (this.nodeName.equals$O(name)) {
l.add$O(this);
}var child=this.getFirstChild$();
while (child != null ){
p$1.getElementsByTagName$S$java_util_List.apply((child), [name, l]);
child=child.getNextSibling$();
}
}, p$1);

Clazz.newMeth(C$, 'getElementsByTagNameNS$S$S',  function (namespaceURI, localName) {
return this.getElementsByTagName$S(localName);
});

Clazz.newMeth(C$, 'hasAttributes$',  function () {
return this.attributes.size$() > 0;
});

Clazz.newMeth(C$, 'hasAttribute$S',  function (name) {
return this.getAttributeNode$S(name) != null ;
});

Clazz.newMeth(C$, 'hasAttributeNS$S$S',  function (namespaceURI, localName) {
return this.hasAttribute$S(localName);
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.numChildren;
});

Clazz.newMeth(C$, 'item$I',  function (index) {
if (index < 0) {
return null;
}var child=this.getFirstChild$();
while (child != null  && index-- > 0 ){
child=child.getNextSibling$();
}
return child;
});

Clazz.newMeth(C$, 'getUserObject$',  function () {
return this.userObject;
});

Clazz.newMeth(C$, 'setUserObject$O',  function (userObject) {
this.userObject=userObject;
});

Clazz.newMeth(C$, 'setIdAttribute$S$Z',  function (name, isId) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'setIdAttributeNS$S$S$Z',  function (namespaceURI, localName, isId) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'setIdAttributeNode$org_w3c_dom_Attr$Z',  function (idAttr, isId) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'getSchemaTypeInfo$',  function () {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'setUserData$S$O$org_w3c_dom_UserDataHandler',  function (key, data, handler) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'getUserData$S',  function (key) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'getFeature$S$S',  function (feature, version) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'isSameNode$org_w3c_dom_Node',  function (node) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'isEqualNode$org_w3c_dom_Node',  function (node) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'lookupNamespaceURI$S',  function (prefix) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'isDefaultNamespace$S',  function (namespaceURI) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'lookupPrefix$S',  function (namespaceURI) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'getTextContent$',  function () {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'setTextContent$S',  function (textContent) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'compareDocumentPosition$org_w3c_dom_Node',  function (other) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'getBaseURI$',  function () {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[9, "Method not supported"]);
});

Clazz.newMeth(C$, 'supports$S$S',  function (feature, version) {
return false;
});

Clazz.newMeth(C$, 'compareDocumentOrder$org_w3c_dom_Node',  function (other) {
return 0;
});

Clazz.newMeth(C$, 'compareTreePosition$org_w3c_dom_Node',  function (other) {
return 0;
});

Clazz.newMeth(C$, 'lookupNamespacePrefix$S',  function (namespaceURI) {
return null;
});

Clazz.newMeth(C$, 'normalizeNS$',  function () {
});

Clazz.newMeth(C$, 'setUserData$O$S',  function (data, key) {
return null;
});

Clazz.newMeth(C$, 'getKey$',  function () {
return null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

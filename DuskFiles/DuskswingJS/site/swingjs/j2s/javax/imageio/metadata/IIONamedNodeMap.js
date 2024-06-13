(function(){var P$=Clazz.newPackage("javax.imageio.metadata"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IIONamedNodeMap", null, null, 'org.w3c.dom.NamedNodeMap');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nodes','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List',  function (nodes) {
;C$.$init$.apply(this);
this.nodes=nodes;
}, 1);

Clazz.newMeth(C$, 'getLength$',  function () {
return this.nodes.size$();
});

Clazz.newMeth(C$, 'getNamedItem$S',  function (name) {
var iter=this.nodes.iterator$();
while (iter.hasNext$()){
var node=iter.next$();
if (name.equals$O(node.getNodeName$())) {
return node;
}}
return null;
});

Clazz.newMeth(C$, 'item$I',  function (index) {
var node=this.nodes.get$I(index);
return node;
});

Clazz.newMeth(C$, 'removeNamedItem$S',  function (name) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[7, "This NamedNodeMap is read-only!"]);
});

Clazz.newMeth(C$, 'setNamedItem$org_w3c_dom_Node',  function (arg) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[7, "This NamedNodeMap is read-only!"]);
});

Clazz.newMeth(C$, 'getNamedItemNS$S$S',  function (namespaceURI, localName) {
return this.getNamedItem$S(localName);
});

Clazz.newMeth(C$, 'setNamedItemNS$org_w3c_dom_Node',  function (arg) {
return this.setNamedItem$org_w3c_dom_Node(arg);
});

Clazz.newMeth(C$, 'removeNamedItemNS$S$S',  function (namespaceURI, localName) {
return this.removeNamedItem$S(localName);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

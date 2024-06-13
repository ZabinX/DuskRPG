(function(){var P$=Clazz.newPackage("javax.xml.transform.dom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DOMResult", null, null, 'javax.xml.transform.Result');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.node=null;
this.nextSibling=null;
this.systemId=null;
},1);

C$.$fields$=[['S',['systemId'],'O',['node','org.w3c.dom.Node','+nextSibling']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setNode$org_w3c_dom_Node(null);
this.setNextSibling$org_w3c_dom_Node(null);
this.setSystemId$S(null);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.$init$.apply(this);
this.setNode$org_w3c_dom_Node(node);
this.setNextSibling$org_w3c_dom_Node(null);
this.setSystemId$S(null);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node$S',  function (node, systemId) {
;C$.$init$.apply(this);
this.setNode$org_w3c_dom_Node(node);
this.setNextSibling$org_w3c_dom_Node(null);
this.setSystemId$S(systemId);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node$org_w3c_dom_Node',  function (node, nextSibling) {
;C$.$init$.apply(this);
if (nextSibling != null ) {
if (node == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create a DOMResult when the nextSibling is contained by the \"null\" node."]);
}if ((node.compareDocumentPosition$org_w3c_dom_Node(nextSibling) & 16) == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create a DOMResult when the nextSibling is not contained by the node."]);
}}this.setNode$org_w3c_dom_Node(node);
this.setNextSibling$org_w3c_dom_Node(nextSibling);
this.setSystemId$S(null);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node$org_w3c_dom_Node$S',  function (node, nextSibling, systemId) {
;C$.$init$.apply(this);
if (nextSibling != null ) {
if (node == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create a DOMResult when the nextSibling is contained by the \"null\" node."]);
}if ((node.compareDocumentPosition$org_w3c_dom_Node(nextSibling) & 16) == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create a DOMResult when the nextSibling is not contained by the node."]);
}}this.setNode$org_w3c_dom_Node(node);
this.setNextSibling$org_w3c_dom_Node(nextSibling);
this.setSystemId$S(systemId);
}, 1);

Clazz.newMeth(C$, 'setNode$org_w3c_dom_Node',  function (node) {
if (this.nextSibling != null ) {
if (node == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Cannot create a DOMResult when the nextSibling is contained by the \"null\" node."]);
}if ((node.compareDocumentPosition$org_w3c_dom_Node(this.nextSibling) & 16) == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create a DOMResult when the nextSibling is not contained by the node."]);
}}this.node=node;
});

Clazz.newMeth(C$, 'getNode$',  function () {
return this.node;
});

Clazz.newMeth(C$, 'setNextSibling$org_w3c_dom_Node',  function (nextSibling) {
if (nextSibling != null ) {
if (this.node == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Cannot create a DOMResult when the nextSibling is contained by the \"null\" node."]);
}if ((this.node.compareDocumentPosition$org_w3c_dom_Node(nextSibling) & 16) == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create a DOMResult when the nextSibling is not contained by the node."]);
}}this.nextSibling=nextSibling;
});

Clazz.newMeth(C$, 'getNextSibling$',  function () {
return this.nextSibling;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemId) {
this.systemId=systemId;
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return this.systemId;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.xml.transform.dom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DOMSource", null, null, 'javax.xml.transform.Source');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['systemID'],'O',['node','org.w3c.dom.Node']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (n) {
;C$.$init$.apply(this);
this.setNode$org_w3c_dom_Node(n);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node$S',  function (node, systemID) {
;C$.$init$.apply(this);
this.setNode$org_w3c_dom_Node(node);
this.setSystemId$S(systemID);
}, 1);

Clazz.newMeth(C$, 'setNode$org_w3c_dom_Node',  function (node) {
this.node=node;
});

Clazz.newMeth(C$, 'getNode$',  function () {
return this.node;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemID) {
this.systemID=systemID;
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return this.systemID;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

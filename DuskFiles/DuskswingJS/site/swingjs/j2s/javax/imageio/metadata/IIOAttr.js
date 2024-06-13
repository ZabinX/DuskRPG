(function(){var P$=Clazz.newPackage("javax.imageio.metadata"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IIOAttr", null, 'javax.imageio.metadata.IIOMetadataNode', 'org.w3c.dom.Attr');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','value'],'O',['owner','org.w3c.dom.Element']]]

Clazz.newMeth(C$, 'c$$org_w3c_dom_Element$S$S',  function (owner, name, value) {
Clazz.super_(C$, this);
this.owner=owner;
this.name=name;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getNodeName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getNodeType$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getSpecified$',  function () {
return true;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'getNodeValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'setNodeValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getOwnerElement$',  function () {
return this.owner;
});

Clazz.newMeth(C$, 'setOwnerElement$org_w3c_dom_Element',  function (owner) {
this.owner=owner;
});

Clazz.newMeth(C$, 'isId$',  function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.imageio.metadata"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IIONodeList", null, null, 'org.w3c.dom.NodeList');

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

Clazz.newMeth(C$, 'item$I',  function (index) {
if (index < 0 || index > this.nodes.size$() ) {
return null;
}return this.nodes.get$I(index);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

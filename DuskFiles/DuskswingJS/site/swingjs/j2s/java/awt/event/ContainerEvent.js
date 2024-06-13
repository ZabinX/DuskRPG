(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ContainerEvent", null, 'java.awt.event.ComponentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['child','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_Component',  function (source, id, child) {
;C$.superclazz.c$$java_awt_Component$I.apply(this,[source, id]);C$.$init$.apply(this);
this.child=child;
}, 1);

Clazz.newMeth(C$, 'getContainer$',  function () {
return (Clazz.instanceOf(this.source, "java.awt.Container")) ? this.source : null;
});

Clazz.newMeth(C$, 'getChild$',  function () {
return this.child;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr;
switch (this.id) {
case 300:
typeStr="COMPONENT_ADDED";
break;
case 301:
typeStr="COMPONENT_REMOVED";
break;
default:
typeStr="unknown type";
}
return typeStr + ",child=" + this.child.getName$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

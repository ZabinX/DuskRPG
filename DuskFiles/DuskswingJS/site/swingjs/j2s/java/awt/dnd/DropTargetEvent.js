(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DropTargetEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['context','java.awt.dnd.DropTargetContext']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetContext',  function (dtc) {
;C$.superclazz.c$$O.apply(this,[dtc.getDropTarget$()]);C$.$init$.apply(this);
this.context=dtc;
}, 1);

Clazz.newMeth(C$, 'getDropTargetContext$',  function () {
return this.context;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

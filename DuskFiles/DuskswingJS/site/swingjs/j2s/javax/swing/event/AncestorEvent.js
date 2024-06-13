(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AncestorEvent", null, 'java.awt.AWTEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ancestor','java.awt.Container','+ancestorParent']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$I$java_awt_Container$java_awt_Container',  function (source, id, ancestor, ancestorParent) {
;C$.superclazz.c$$O$I.apply(this,[source, id]);C$.$init$.apply(this);
this.ancestor=ancestor;
this.ancestorParent=ancestorParent;
}, 1);

Clazz.newMeth(C$, 'getAncestor$',  function () {
return this.ancestor;
});

Clazz.newMeth(C$, 'getAncestorParent$',  function () {
return this.ancestorParent;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.getSource$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

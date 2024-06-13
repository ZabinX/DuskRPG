(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TreeExpansionEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','javax.swing.tree.TreePath']]]

Clazz.newMeth(C$, 'c$$O$javax_swing_tree_TreePath',  function (source, path) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.path=path;
}, 1);

Clazz.newMeth(C$, 'getPath$',  function () {
return this.path;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

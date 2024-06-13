(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TableColumnModelEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['fromIndex','toIndex']]]

Clazz.newMeth(C$, 'c$$javax_swing_table_TableColumnModel$I$I',  function (source, from, to) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.fromIndex=from;
this.toIndex=to;
}, 1);

Clazz.newMeth(C$, 'getFromIndex$',  function () {
return this.fromIndex;
});

Clazz.newMeth(C$, 'getToIndex$',  function () {
return this.toIndex;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ListSelectionEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isAdjusting'],'I',['firstIndex','lastIndex']]]

Clazz.newMeth(C$, 'c$$O$I$I$Z',  function (source, firstIndex, lastIndex, isAdjusting) {
;C$.superclazz.c$$O.apply(this,[source]);C$.$init$.apply(this);
this.firstIndex=firstIndex;
this.lastIndex=lastIndex;
this.isAdjusting=isAdjusting;
}, 1);

Clazz.newMeth(C$, 'getFirstIndex$',  function () {
return this.firstIndex;
});

Clazz.newMeth(C$, 'getLastIndex$',  function () {
return this.lastIndex;
});

Clazz.newMeth(C$, 'getValueIsAdjusting$',  function () {
return this.isAdjusting;
});

Clazz.newMeth(C$, 'toString',  function () {
var properties=" source=" + this.getSource$() + " firstIndex= " + this.firstIndex + " lastIndex= " + this.lastIndex + " isAdjusting= " + this.isAdjusting + " " ;
return this.getClass$().getName$() + "[" + properties + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

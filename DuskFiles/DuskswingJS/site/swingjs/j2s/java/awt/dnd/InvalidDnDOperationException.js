(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InvalidDnDOperationException", null, 'IllegalStateException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['dft_msg']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,[C$.dft_msg]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.dft_msg="The operation requested cannot be performed by the DnD system since it is not in the appropriate state";
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

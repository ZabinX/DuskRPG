(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BadLocationException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offs']]]

Clazz.newMeth(C$, 'c$$S$I',  function (s, offs) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.offs=offs;
}, 1);

Clazz.newMeth(C$, 'offsetRequested$',  function () {
return this.offs;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

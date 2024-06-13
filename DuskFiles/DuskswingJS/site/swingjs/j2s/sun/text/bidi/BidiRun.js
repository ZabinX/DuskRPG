(function(){var P$=Clazz.newPackage("sun.text.bidi"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BidiRun");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['B',['level'],'I',['start','limit','insertRemove']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I$B.apply(this, [0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B',  function (start, limit, embeddingLevel) {
;C$.$init$.apply(this);
this.start=start;
this.limit=limit;
this.level=embeddingLevel;
}, 1);

Clazz.newMeth(C$, 'copyFrom$sun_text_bidi_BidiRun',  function (run) {
this.start=run.start;
this.limit=run.limit;
this.level=run.level;
this.insertRemove=run.insertRemove;
});

Clazz.newMeth(C$, 'getEmbeddingLevel$',  function () {
return this.level;
});

Clazz.newMeth(C$, 'isEvenRun$',  function () {
return (this.level & 1) == 0;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

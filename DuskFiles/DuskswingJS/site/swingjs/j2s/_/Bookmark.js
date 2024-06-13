(function(){var P$=Clazz.newPackage("_"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Bookmark");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['port'],'S',['strAddress']]]

Clazz.newMeth(C$, 'c$$S$I',  function (inAddress, inport) {
;C$.$init$.apply(this);
this.strAddress=inAddress;
this.port=inport;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.strAddress + ":" + this.port ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:50 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5

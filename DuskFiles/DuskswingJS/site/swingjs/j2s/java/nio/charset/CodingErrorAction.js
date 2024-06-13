(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CodingErrorAction");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]
,['O',['IGNORE','java.nio.charset.CodingErrorAction','+REPLACE','+REPORT']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.name;
});

C$.$static$=function(){C$.$static$=0;
C$.IGNORE=Clazz.new_(C$.c$$S,["IGNORE"]);
C$.REPLACE=Clazz.new_(C$.c$$S,["REPLACE"]);
C$.REPORT=Clazz.new_(C$.c$$S,["REPORT"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

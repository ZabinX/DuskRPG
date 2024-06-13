(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalCharsetNameException", null, 'IllegalArgumentException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getCharsetName$',  function () {
return this.name;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

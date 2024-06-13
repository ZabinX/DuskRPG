(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalFormatCodePointException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['c']]]

Clazz.newMeth(C$, 'c$$I',  function (c) {
Clazz.super_(C$, this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getCodePoint$',  function () {
return this.c;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return String.format$S$OA("Code point = %#x", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(this.c)]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

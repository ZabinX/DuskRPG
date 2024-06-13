(function(){var P$=Clazz.newPackage("java.nio.charset"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnmappableCharacterException", null, 'java.nio.charset.CharacterCodingException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['inputLength']]]

Clazz.newMeth(C$, 'c$$I',  function (inputLength) {
Clazz.super_(C$, this);
this.inputLength=inputLength;
}, 1);

Clazz.newMeth(C$, 'getInputLength$',  function () {
return this.inputLength;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return "Input length = " + this.inputLength;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

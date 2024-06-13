(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "MissingFormatArgumentException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
Clazz.super_(C$, this);
if (s == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.s=s;
}, 1);

Clazz.newMeth(C$, 'getFormatSpecifier$',  function () {
return this.s;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return "Format specifier '" + this.s + "'" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

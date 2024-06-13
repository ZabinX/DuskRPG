(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "FormatFlagsConversionMismatchException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c'],'S',['f']]]

Clazz.newMeth(C$, 'c$$S$C',  function (f, c) {
Clazz.super_(C$, this);
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.f=f;
this.c=c;
}, 1);

Clazz.newMeth(C$, 'getFlags$',  function () {
return this.f;
});

Clazz.newMeth(C$, 'getConversion$',  function () {
return this.c;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return "Conversion = " + this.c + ", Flags = " + this.f ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

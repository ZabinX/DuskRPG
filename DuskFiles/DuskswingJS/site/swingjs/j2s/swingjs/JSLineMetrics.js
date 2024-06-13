(function(){var P$=Clazz.newPackage("swingjs"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSLineMetrics", null, 'java.awt.font.LineMetrics');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s'],'O',['fm','java.awt.FontMetrics']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font$S',  function (font, s) {
Clazz.super_(C$, this);
this.fm=font.getFontMetrics$();
}, 1);

Clazz.newMeth(C$, 'getNumChars$',  function () {
return this.s.length$();
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.fm.getHeight$();
});

Clazz.newMeth(C$, 'getBaselineIndex$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getBaselineOffsets$',  function () {
return Clazz.array(Float.TYPE, [this.s.length$()]);
});

Clazz.newMeth(C$, 'getStrikethroughOffset$',  function () {
return this.fm.getAscent$() / 2.0;
});

Clazz.newMeth(C$, 'getStrikethroughThickness$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getUnderlineOffset$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getUnderlineThickness$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getAscent$',  function () {
return this.fm.getAscent$();
});

Clazz.newMeth(C$, 'getDescent$',  function () {
return this.fm.getDescent$();
});

Clazz.newMeth(C$, 'getLeading$',  function () {
return this.fm.getLeading$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FontLineMetrics", null, 'java.awt.font.LineMetrics', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['numchars'],'O',['cm','sun.font.CoreMetrics','frc','java.awt.font.FontRenderContext']]]

Clazz.newMeth(C$, 'c$$I$sun_font_CoreMetrics$java_awt_font_FontRenderContext',  function (numchars, cm, frc) {
Clazz.super_(C$, this);
this.numchars=numchars;
this.cm=cm;
this.frc=frc;
}, 1);

Clazz.newMeth(C$, 'getNumChars$',  function () {
return this.numchars;
});

Clazz.newMeth(C$, 'getAscent$',  function () {
return this.cm.ascent;
});

Clazz.newMeth(C$, 'getDescent$',  function () {
return this.cm.descent;
});

Clazz.newMeth(C$, 'getLeading$',  function () {
return this.cm.leading;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.cm.height;
});

Clazz.newMeth(C$, 'getBaselineIndex$',  function () {
return this.cm.baselineIndex;
});

Clazz.newMeth(C$, 'getBaselineOffsets$',  function () {
return this.cm.baselineOffsets.clone$();
});

Clazz.newMeth(C$, 'getStrikethroughOffset$',  function () {
return this.cm.strikethroughOffset;
});

Clazz.newMeth(C$, 'getStrikethroughThickness$',  function () {
return this.cm.strikethroughThickness;
});

Clazz.newMeth(C$, 'getUnderlineOffset$',  function () {
return this.cm.underlineOffset;
});

Clazz.newMeth(C$, 'getUnderlineThickness$',  function () {
return this.cm.underlineThickness;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.cm.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
try {
return this.cm.equals$sun_font_CoreMetrics((rhs).cm);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

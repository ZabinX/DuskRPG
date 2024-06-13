(function(){var P$=Clazz.newPackage("sun.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CoreMetrics");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['ascent','descent','leading','height','strikethroughOffset','strikethroughThickness','underlineOffset','underlineThickness','ssOffset','italicAngle'],'I',['baselineIndex'],'O',['baselineOffsets','float[]']]]

Clazz.newMeth(C$, 'c$$F$F$F$F$I$FA$F$F$F$F$F$F',  function (ascent, descent, leading, height, baselineIndex, baselineOffsets, strikethroughOffset, strikethroughThickness, underlineOffset, underlineThickness, ssOffset, italicAngle) {
;C$.$init$.apply(this);
this.ascent=ascent;
this.descent=descent;
this.leading=leading;
this.height=height;
this.baselineIndex=baselineIndex;
this.baselineOffsets=baselineOffsets;
this.strikethroughOffset=strikethroughOffset;
this.strikethroughThickness=strikethroughThickness;
this.underlineOffset=underlineOffset;
this.underlineThickness=underlineThickness;
this.ssOffset=ssOffset;
this.italicAngle=italicAngle;
}, 1);

Clazz.newMeth(C$, 'get$java_awt_font_LineMetrics',  function (lm) {
return (lm).cm;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return Float.floatToIntBits$F(this.ascent + this.ssOffset);
});

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
try {
return this.equals$sun_font_CoreMetrics(rhs);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$sun_font_CoreMetrics',  function (rhs) {
if (rhs != null ) {
if (this === rhs ) {
return true;
}return this.ascent == rhs.ascent  && this.descent == rhs.descent   && this.leading == rhs.leading   && this.baselineIndex == rhs.baselineIndex  && this.baselineOffsets[0] == rhs.baselineOffsets[0]   && this.baselineOffsets[1] == rhs.baselineOffsets[1]   && this.baselineOffsets[2] == rhs.baselineOffsets[2]   && this.strikethroughOffset == rhs.strikethroughOffset   && this.strikethroughThickness == rhs.strikethroughThickness   && this.underlineOffset == rhs.underlineOffset   && this.underlineThickness == rhs.underlineThickness   && this.ssOffset == rhs.ssOffset   && this.italicAngle == rhs.italicAngle  ;
}return false;
});

Clazz.newMeth(C$, 'effectiveBaselineOffset$FA',  function (fullOffsets) {
switch (this.baselineIndex) {
case -1:
return fullOffsets[4] + this.ascent;
case -2:
return fullOffsets[3] - this.descent;
default:
return fullOffsets[this.baselineIndex];
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

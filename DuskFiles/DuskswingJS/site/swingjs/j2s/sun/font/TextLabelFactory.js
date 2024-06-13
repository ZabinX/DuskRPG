(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'sun.font.StandardTextSource','sun.font.ExtendedTextSourceLabel','sun.font.TextSourceLabel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextLabelFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['flags','lineStart','lineLimit'],'O',['frc','java.awt.font.FontRenderContext','text','char[]','bidi','java.text.Bidi','+lineBidi']]]

Clazz.newMeth(C$, 'c$$java_awt_font_FontRenderContext$CA$java_text_Bidi$I',  function (frc, text, bidi, flags) {
;C$.$init$.apply(this);
this.frc=frc;
this.text=text.clone$();
this.bidi=bidi;
this.flags=flags;
this.lineBidi=bidi;
this.lineStart=0;
this.lineLimit=text.length;
}, 1);

Clazz.newMeth(C$, 'getFontRenderContext$',  function () {
return this.frc;
});

Clazz.newMeth(C$, 'getLineBidi$',  function () {
return this.lineBidi;
});

Clazz.newMeth(C$, 'setLineContext$I$I',  function (lineStart, lineLimit) {
this.lineStart=lineStart;
this.lineLimit=lineLimit;
if (this.bidi != null ) {
this.lineBidi=this.bidi.createLineBidi$I$I(lineStart, lineLimit);
}});

Clazz.newMeth(C$, 'createExtended$java_awt_Font$sun_font_CoreMetrics$sun_font_Decoration$I$I',  function (font, lm, decorator, start, limit) {
if (start >= limit || start < this.lineStart  || limit > this.lineLimit ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad start: " + start + " or limit: " + limit ]);
}var level=this.lineBidi == null  ? 0 : this.lineBidi.getLevelAt$I(start - this.lineStart);
var linedir=(this.lineBidi == null  || this.lineBidi.baseIsLeftToRight$() ) ? 0 : 1;
var layoutFlags=this.flags & ~9;
if ((level & 1) != 0) layoutFlags|=1;
if ((linedir & 1) != 0) layoutFlags|=8;
var source=Clazz.new_($I$(1,1).c$$CA$I$I$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics,[this.text, start, limit - start, this.lineStart, this.lineLimit - this.lineStart, level, layoutFlags, font, this.frc, lm]);
return Clazz.new_($I$(2,1).c$$sun_font_TextSource$sun_font_Decoration,[source, decorator]);
});

Clazz.newMeth(C$, 'createSimple$java_awt_Font$sun_font_CoreMetrics$I$I',  function (font, lm, start, limit) {
if (start >= limit || start < this.lineStart  || limit > this.lineLimit ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad start: " + start + " or limit: " + limit ]);
}var level=this.lineBidi == null  ? 0 : this.lineBidi.getLevelAt$I(start - this.lineStart);
var linedir=(this.lineBidi == null  || this.lineBidi.baseIsLeftToRight$() ) ? 0 : 1;
var layoutFlags=this.flags & ~9;
if ((level & 1) != 0) layoutFlags|=1;
if ((linedir & 1) != 0) layoutFlags|=8;
var source=Clazz.new_($I$(1,1).c$$CA$I$I$I$I$I$I$java_awt_Font$java_awt_font_FontRenderContext$sun_font_CoreMetrics,[this.text, start, limit - start, this.lineStart, this.lineLimit - this.lineStart, level, layoutFlags, font, this.frc, lm]);
return Clazz.new_($I$(3,1).c$$sun_font_TextSource,[source]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.awt.font"),p$1={},I$=[[0,'Error','java.text.Bidi','java.awt.font.StyledParagraph','sun.font.AttributeValues','java.awt.font.TextLine','java.awt.font.TextAttribute','java.awt.font.TextLayout','java.util.Hashtable','java.awt.Font','sun.font.TextLabelFactory','sun.font.BidiUtils','sun.font.TextLineComponent','java.awt.font.CharArrayIterator','java.text.BreakIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextMeasurer", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fLineBreak=null;
this.charIter=null;
this.layoutCount=0;
this.layoutCharCount=0;
this.fJustifyRatio=1;
this.formattedChars=0;
this.collectStats=false;
},1);

C$.$fields$=[['Z',['haveLayoutWindow','fIsDirectionLTR','collectStats'],'B',['fBaseline'],'F',['fJustifyRatio'],'I',['fStart','fComponentStart','fComponentLimit','layoutCount','layoutCharCount','formattedChars'],'O',['fFrc','java.awt.font.FontRenderContext','fChars','char[]','fBidi','java.text.Bidi','fLevels','byte[]','fComponents','sun.font.TextLineComponent[]','fLineBreak','java.text.BreakIterator','charIter','java.awt.font.CharArrayIterator','fParagraph','java.awt.font.StyledParagraph','fBaselineOffsets','float[]']]
,['Z',['wantStats'],'F',['EST_LINES']]]

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext',  function (text, frc) {
;C$.$init$.apply(this);
this.fFrc=frc;
p$1.initAll$java_text_AttributedCharacterIterator.apply(this, [text]);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var other;
try {
other=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1));
} else {
throw e;
}
}
if (this.fComponents != null ) {
other.fComponents=this.fComponents.clone$();
}return other;
});

Clazz.newMeth(C$, 'invalidateComponents',  function () {
this.fComponentStart=this.fComponentLimit=this.fChars.length;
this.fComponents=null;
this.haveLayoutWindow=false;
}, p$1);

Clazz.newMeth(C$, 'initAll$java_text_AttributedCharacterIterator',  function (text) {
this.fStart=text.getBeginIndex$();
this.fChars=Clazz.array(Character.TYPE, [text.getEndIndex$() - this.fStart]);
var n=0;
for (var c=text.first$(); c != "\uffff"; c=text.next$()) {
this.fChars[n++]=c;
}
text.first$();
this.fBidi=Clazz.new_($I$(2,1).c$$java_text_AttributedCharacterIterator,[text]);
if (this.fBidi.isLeftToRight$()) {
this.fBidi=null;
}text.first$();
var paragraphAttrs=text.getAttributes$();
this.fParagraph=Clazz.new_($I$(3,1).c$$java_text_AttributedCharacterIterator$CA,[text, this.fChars]);
{
this.fJustifyRatio=$I$(4).getJustification$java_util_Map(paragraphAttrs);
var haveFont=$I$(5).advanceToFirstFont$java_text_AttributedCharacterIterator(text);
if (haveFont) {
var defaultFont=$I$(5).getFontAtCurrentPos$java_text_AttributedCharacterIterator(text);
var charsStart=text.getIndex$() - text.getBeginIndex$();
var lm=defaultFont.getLineMetrics$CA$I$I$java_awt_font_FontRenderContext(this.fChars, charsStart, charsStart + 1, this.fFrc);
this.fBaseline=($b$[0] = lm.getBaselineIndex$(), $b$[0]);
this.fBaselineOffsets=lm.getBaselineOffsets$();
} else {
var graphic=paragraphAttrs.get$O($I$(6).CHAR_REPLACEMENT);
this.fBaseline=$I$(7).getBaselineFromGraphic$java_awt_font_GraphicAttribute(graphic);
var fmap=Clazz.new_($I$(8,1).c$$I$F,[5, 0.9]);
var dummyFont=Clazz.new_($I$(9,1).c$$java_util_Map,[fmap]);
var lm=dummyFont.getLineMetrics$S$I$I$java_awt_font_FontRenderContext(" ", 0, 1, this.fFrc);
this.fBaselineOffsets=lm.getBaselineOffsets$();
}this.fBaselineOffsets=$I$(5).getNormalizedOffsets$FA$B(this.fBaselineOffsets, this.fBaseline);
}p$1.invalidateComponents.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'generateComponents$I$I',  function (startingAt, endingAt) {
if (this.collectStats) {
this.formattedChars+=(endingAt - startingAt);
}var layoutFlags=0;
var factory=Clazz.new_($I$(10,1).c$$java_awt_font_FontRenderContext$CA$java_text_Bidi$I,[this.fFrc, this.fChars, this.fBidi, layoutFlags]);
var charsLtoV=null;
if (this.fBidi != null ) {
this.fLevels=$I$(11).getLevels$java_text_Bidi(this.fBidi);
var charsVtoL=$I$(11).createVisualToLogicalMap$BA(this.fLevels);
charsLtoV=$I$(11).createInverseMap$IA(charsVtoL);
this.fIsDirectionLTR=this.fBidi.baseIsLeftToRight$();
} else {
this.fLevels=null;
this.fIsDirectionLTR=true;
}try {
this.fComponents=$I$(5).getComponents$java_awt_font_StyledParagraph$CA$I$I$IA$BA$sun_font_TextLabelFactory(this.fParagraph, this.fChars, startingAt, endingAt, charsLtoV, this.fLevels, factory);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
System.out.println$S("startingAt=" + startingAt + "; endingAt=" + endingAt );
System.out.println$S("fComponentLimit=" + this.fComponentLimit);
throw e;
} else {
throw e;
}
}
this.fComponentStart=startingAt;
this.fComponentLimit=endingAt;
}, p$1);

Clazz.newMeth(C$, 'calcLineBreak$I$F',  function (pos, maxAdvance) {
var startPos=pos;
var width=maxAdvance;
var tlcIndex;
var tlcStart=this.fComponentStart;
for (tlcIndex=0; tlcIndex < this.fComponents.length; tlcIndex++) {
var gaLimit=tlcStart + this.fComponents[tlcIndex].getNumCharacters$();
if (gaLimit > startPos) {
break;
} else {
tlcStart=gaLimit;
}}
for (; tlcIndex < this.fComponents.length; tlcIndex++) {
var tlc=this.fComponents[tlcIndex];
var numCharsInGa=tlc.getNumCharacters$();
var lineBreak=tlc.getLineBreakIndex$I$F(startPos - tlcStart, width);
if (lineBreak == numCharsInGa && tlcIndex < this.fComponents.length ) {
width-=tlc.getAdvanceBetween$I$I(startPos - tlcStart, lineBreak);
tlcStart+=numCharsInGa;
startPos=tlcStart;
} else {
return tlcStart + lineBreak;
}}
if (this.fComponentLimit < this.fChars.length) {
p$1.generateComponents$I$I.apply(this, [pos, this.fChars.length]);
return p$1.calcLineBreak$I$F.apply(this, [pos, maxAdvance]);
}return this.fChars.length;
}, p$1);

Clazz.newMeth(C$, 'trailingCdWhitespaceStart$I$I',  function (startPos, limitPos) {
if (this.fLevels != null ) {
var baseLevel=($b$[0] = (this.fIsDirectionLTR ? 0 : 1), $b$[0]);
for (var cdWsStart=limitPos; --cdWsStart >= startPos; ) {
if ((this.fLevels[cdWsStart] % 2) == baseLevel || Character.getDirectionality$C(this.fChars[cdWsStart]) != 12 ) {
return ++cdWsStart;
}}
}return startPos;
}, p$1);

Clazz.newMeth(C$, 'makeComponentsOnRange$I$I',  function (startPos, limitPos) {
var cdWsStart=p$1.trailingCdWhitespaceStart$I$I.apply(this, [startPos, limitPos]);
var tlcIndex;
var tlcStart=this.fComponentStart;
for (tlcIndex=0; tlcIndex < this.fComponents.length; tlcIndex++) {
var gaLimit=tlcStart + this.fComponents[tlcIndex].getNumCharacters$();
if (gaLimit > startPos) {
break;
} else {
tlcStart=gaLimit;
}}
var componentCount;
{
var split=false;
var compStart=tlcStart;
var lim=tlcIndex;
for (var cont=true; cont; lim++) {
var gaLimit=compStart + this.fComponents[lim].getNumCharacters$();
if (cdWsStart > Math.max(compStart, startPos) && cdWsStart < Math.min(gaLimit, limitPos) ) {
split=true;
}if (gaLimit >= limitPos) {
cont=false;
} else {
compStart=gaLimit;
}}
componentCount=lim - tlcIndex;
if (split) {
++componentCount;
}}var components=Clazz.array($I$(12), [componentCount]);
var newCompIndex=0;
var linePos=startPos;
var breakPt=cdWsStart;
var subsetFlag;
if (breakPt == startPos) {
subsetFlag=this.fIsDirectionLTR ? 0 : 1;
breakPt=limitPos;
} else {
subsetFlag=2;
}while (linePos < limitPos){
var compLength=this.fComponents[tlcIndex].getNumCharacters$();
var tlcLimit=tlcStart + compLength;
var start=Math.max(linePos, tlcStart);
var limit=Math.min(breakPt, tlcLimit);
components[newCompIndex++]=this.fComponents[tlcIndex].getSubset$I$I$I(start - tlcStart, limit - tlcStart, subsetFlag);
linePos+=(limit - start);
if (linePos == breakPt) {
breakPt=limitPos;
subsetFlag=this.fIsDirectionLTR ? 0 : 1;
}if (linePos == tlcLimit) {
++tlcIndex;
tlcStart=tlcLimit;
}}
return components;
}, p$1);

Clazz.newMeth(C$, 'makeTextLineOnRange$I$I',  function (startPos, limitPos) {
var charsLtoV=null;
var charLevels=null;
if (this.fBidi != null ) {
var lineBidi=this.fBidi.createLineBidi$I$I(startPos, limitPos);
charLevels=$I$(11).getLevels$java_text_Bidi(lineBidi);
var charsVtoL=$I$(11).createVisualToLogicalMap$BA(charLevels);
charsLtoV=$I$(11).createInverseMap$IA(charsVtoL);
}var components=p$1.makeComponentsOnRange$I$I.apply(this, [startPos, limitPos]);
return Clazz.new_($I$(5,1).c$$java_awt_font_FontRenderContext$sun_font_TextLineComponentA$FA$CA$I$I$IA$BA$Z,[this.fFrc, components, this.fBaselineOffsets, this.fChars, startPos, limitPos, charsLtoV, charLevels, this.fIsDirectionLTR]);
}, p$1);

Clazz.newMeth(C$, 'ensureComponents$I$I',  function (start, limit) {
if (start < this.fComponentStart || limit > this.fComponentLimit ) {
p$1.generateComponents$I$I.apply(this, [start, limit]);
}}, p$1);

Clazz.newMeth(C$, 'makeLayoutWindow$I',  function (localStart) {
var compStart=localStart;
var compLimit=this.fChars.length;
if (this.layoutCount > 0 && !this.haveLayoutWindow ) {
var avgLineLength=Math.max((this.layoutCharCount/this.layoutCount|0), 1);
compLimit=Math.min(localStart + ((avgLineLength * C$.EST_LINES)|0), this.fChars.length);
}if (localStart > 0 || compLimit < this.fChars.length ) {
if (this.charIter == null ) {
this.charIter=Clazz.new_($I$(13,1).c$$CA,[this.fChars]);
} else {
this.charIter.reset$CA(this.fChars);
}if (this.fLineBreak == null ) {
this.fLineBreak=$I$(14).getLineInstance$();
}this.fLineBreak.setText$java_text_CharacterIterator(this.charIter);
if (localStart > 0) {
if (!this.fLineBreak.isBoundary$I(localStart)) {
compStart=this.fLineBreak.preceding$I(localStart);
}}if (compLimit < this.fChars.length) {
if (!this.fLineBreak.isBoundary$I(compLimit)) {
compLimit=this.fLineBreak.following$I(compLimit);
}}}p$1.ensureComponents$I$I.apply(this, [compStart, compLimit]);
this.haveLayoutWindow=true;
}, p$1);

Clazz.newMeth(C$, 'getLineBreakIndex$I$F',  function (start, maxAdvance) {
var localStart=start - this.fStart;
if (!this.haveLayoutWindow || localStart < this.fComponentStart  || localStart >= this.fComponentLimit ) {
p$1.makeLayoutWindow$I.apply(this, [localStart]);
}return p$1.calcLineBreak$I$F.apply(this, [localStart, maxAdvance]) + this.fStart;
});

Clazz.newMeth(C$, 'getAdvanceBetween$I$I',  function (start, limit) {
var localStart=start - this.fStart;
var localLimit=limit - this.fStart;
p$1.ensureComponents$I$I.apply(this, [localStart, localLimit]);
var line=p$1.makeTextLineOnRange$I$I.apply(this, [localStart, localLimit]);
return line.getMetrics$().advance;
});

Clazz.newMeth(C$, 'getLayout$I$I',  function (start, limit) {
var localStart=start - this.fStart;
var localLimit=limit - this.fStart;
p$1.ensureComponents$I$I.apply(this, [localStart, localLimit]);
var textLine=p$1.makeTextLineOnRange$I$I.apply(this, [localStart, localLimit]);
if (localLimit < this.fChars.length) {
this.layoutCharCount+=limit - start;
++this.layoutCount;
}return Clazz.new_($I$(7,1).c$$java_awt_font_TextLine$B$FA$F,[textLine, this.fBaseline, this.fBaselineOffsets, this.fJustifyRatio]);
});

Clazz.newMeth(C$, 'printStats',  function () {
System.out.println$S("formattedChars: " + this.formattedChars);
this.collectStats=false;
}, p$1);

Clazz.newMeth(C$, 'insertChar$java_text_AttributedCharacterIterator$I',  function (newParagraph, insertPos) {
if (this.collectStats) {
p$1.printStats.apply(this, []);
}if (C$.wantStats) {
this.collectStats=true;
}this.fStart=newParagraph.getBeginIndex$();
var end=newParagraph.getEndIndex$();
if (end - this.fStart != this.fChars.length + 1) {
p$1.initAll$java_text_AttributedCharacterIterator.apply(this, [newParagraph]);
}var newChars=Clazz.array(Character.TYPE, [end - this.fStart]);
var newCharIndex=insertPos - this.fStart;
System.arraycopy$O$I$O$I$I(this.fChars, 0, newChars, 0, newCharIndex);
var newChar=newParagraph.setIndex$I(insertPos);
newChars[newCharIndex]=newChar;
System.arraycopy$O$I$O$I$I(this.fChars, newCharIndex, newChars, newCharIndex + 1, end - insertPos - 1 );
this.fChars=newChars;
if (this.fBidi != null  || $I$(2).requiresBidi$CA$I$I(newChars, newCharIndex, newCharIndex + 1)  || newParagraph.getAttribute$java_text_AttributedCharacterIterator_Attribute($I$(6).BIDI_EMBEDDING) != null  ) {
this.fBidi=Clazz.new_($I$(2,1).c$$java_text_AttributedCharacterIterator,[newParagraph]);
if (this.fBidi.isLeftToRight$()) {
this.fBidi=null;
}}this.fParagraph=$I$(3).insertChar$java_text_AttributedCharacterIterator$CA$I$java_awt_font_StyledParagraph(newParagraph, this.fChars, insertPos, this.fParagraph);
p$1.invalidateComponents.apply(this, []);
});

Clazz.newMeth(C$, 'deleteChar$java_text_AttributedCharacterIterator$I',  function (newParagraph, deletePos) {
this.fStart=newParagraph.getBeginIndex$();
var end=newParagraph.getEndIndex$();
if (end - this.fStart != this.fChars.length - 1) {
p$1.initAll$java_text_AttributedCharacterIterator.apply(this, [newParagraph]);
}var newChars=Clazz.array(Character.TYPE, [end - this.fStart]);
var changedIndex=deletePos - this.fStart;
System.arraycopy$O$I$O$I$I(this.fChars, 0, newChars, 0, deletePos - this.fStart);
System.arraycopy$O$I$O$I$I(this.fChars, changedIndex + 1, newChars, changedIndex, end - deletePos);
this.fChars=newChars;
if (this.fBidi != null ) {
this.fBidi=Clazz.new_($I$(2,1).c$$java_text_AttributedCharacterIterator,[newParagraph]);
if (this.fBidi.isLeftToRight$()) {
this.fBidi=null;
}}this.fParagraph=$I$(3).deleteChar$java_text_AttributedCharacterIterator$CA$I$java_awt_font_StyledParagraph(newParagraph, this.fChars, deletePos, this.fParagraph);
p$1.invalidateComponents.apply(this, []);
});

Clazz.newMeth(C$, 'getChars$',  function () {
return this.fChars;
});

C$.$static$=function(){C$.$static$=0;
C$.EST_LINES=2.1;
C$.wantStats=false;
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

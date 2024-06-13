(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,'java.text.BreakIterator','java.awt.font.TextMeasurer','java.awt.font.CharArrayIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LineBreakMeasurer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','pos','limit'],'O',['breakIter','java.text.BreakIterator','measurer','java.awt.font.TextMeasurer','charIter','java.awt.font.CharArrayIterator']]]

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext',  function (text, frc) {
C$.c$$java_text_AttributedCharacterIterator$java_text_BreakIterator$java_awt_font_FontRenderContext.apply(this, [text, $I$(1).getLineInstance$(), frc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator$java_text_BreakIterator$java_awt_font_FontRenderContext',  function (text, breakIter, frc) {
;C$.$init$.apply(this);
if (text.getEndIndex$() - text.getBeginIndex$() < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Text must contain at least one character."]);
}this.breakIter=breakIter;
this.measurer=Clazz.new_($I$(2,1).c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext,[text, frc]);
this.limit=text.getEndIndex$();
this.pos=this.start=text.getBeginIndex$();
this.charIter=Clazz.new_([this.measurer.getChars$(), this.start],$I$(3,1).c$$CA$I);
this.breakIter.setText$java_text_CharacterIterator(this.charIter);
}, 1);

Clazz.newMeth(C$, 'nextOffset$F',  function (wrappingWidth) {
return this.nextOffset$F$I$Z(wrappingWidth, this.limit, false);
});

Clazz.newMeth(C$, 'nextOffset$F$I$Z',  function (wrappingWidth, offsetLimit, requireNextWord) {
var nextOffset=this.pos;
if (this.pos < this.limit) {
if (offsetLimit <= this.pos) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["offsetLimit must be after current position"]);
}var charAtMaxAdvance=this.measurer.getLineBreakIndex$I$F(this.pos, wrappingWidth);
if (charAtMaxAdvance == this.limit) {
nextOffset=this.limit;
} else if (Character.isWhitespace$C(this.measurer.getChars$()[charAtMaxAdvance - this.start])) {
nextOffset=this.breakIter.following$I(charAtMaxAdvance);
} else {
var testPos=charAtMaxAdvance + 1;
if (testPos == this.limit) {
this.breakIter.last$();
nextOffset=this.breakIter.previous$();
} else {
nextOffset=this.breakIter.preceding$I(testPos);
}if (nextOffset <= this.pos) {
if (requireNextWord) {
nextOffset=this.pos;
} else {
nextOffset=Math.max(this.pos + 1, charAtMaxAdvance);
}}}}if (nextOffset > offsetLimit) {
nextOffset=offsetLimit;
}return nextOffset;
});

Clazz.newMeth(C$, 'nextLayout$F',  function (wrappingWidth) {
return this.nextLayout$F$I$Z(wrappingWidth, this.limit, false);
});

Clazz.newMeth(C$, 'nextLayout$F$I$Z',  function (wrappingWidth, offsetLimit, requireNextWord) {
if (this.pos < this.limit) {
var layoutLimit=this.nextOffset$F$I$Z(wrappingWidth, offsetLimit, requireNextWord);
if (layoutLimit == this.pos) {
return null;
}var result=this.measurer.getLayout$I$I(this.pos, layoutLimit);
this.pos=layoutLimit;
return result;
} else {
return null;
}});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.pos;
});

Clazz.newMeth(C$, 'setPosition$I',  function (newPosition) {
if (newPosition < this.start || newPosition > this.limit ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["position is out of range"]);
}this.pos=newPosition;
});

Clazz.newMeth(C$, 'insertChar$java_text_AttributedCharacterIterator$I',  function (newParagraph, insertPos) {
this.measurer.insertChar$java_text_AttributedCharacterIterator$I(newParagraph, insertPos);
this.limit=newParagraph.getEndIndex$();
this.pos=this.start=newParagraph.getBeginIndex$();
this.charIter.reset$CA$I(this.measurer.getChars$(), newParagraph.getBeginIndex$());
this.breakIter.setText$java_text_CharacterIterator(this.charIter);
});

Clazz.newMeth(C$, 'deleteChar$java_text_AttributedCharacterIterator$I',  function (newParagraph, deletePos) {
this.measurer.deleteChar$java_text_AttributedCharacterIterator$I(newParagraph, deletePos);
this.limit=newParagraph.getEndIndex$();
this.pos=this.start=newParagraph.getBeginIndex$();
this.charIter.reset$CA$I(this.measurer.getChars$(), this.start);
this.breakIter.setText$java_text_CharacterIterator(this.charIter);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

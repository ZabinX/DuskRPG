(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'sun.text.bidi.BidiBase','java.text.AttributedString']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bidi");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bidiBase','sun.text.bidi.BidiBase']]]

Clazz.newMeth(C$, 'c$$S$I',  function (paragraph, flags) {
;C$.$init$.apply(this);
if (paragraph == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["paragraph is null"]);
}this.bidiBase=Clazz.new_([paragraph.toCharArray$(), 0, null, 0, paragraph.length$(), flags],$I$(1,1).c$$CA$I$BA$I$I$I);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator',  function (paragraph) {
;C$.$init$.apply(this);
if (paragraph == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["paragraph is null"]);
}this.bidiBase=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
this.bidiBase.setPara$java_text_AttributedCharacterIterator(paragraph);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$BA$I$I$I',  function (text, textStart, embeddings, embStart, paragraphLength, flags) {
;C$.$init$.apply(this);
if (text == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["text is null"]);
}if (paragraphLength < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad length: " + paragraphLength]);
}if (textStart < 0 || paragraphLength > text.length - textStart ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad range: " + textStart + " length: " + paragraphLength + " for text of length: " + text.length ]);
}if (embeddings != null  && (embStart < 0 || paragraphLength > embeddings.length - embStart ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad range: " + embStart + " length: " + paragraphLength + " for embeddings of length: " + text.length ]);
}this.bidiBase=Clazz.new_($I$(1,1).c$$CA$I$BA$I$I$I,[text, textStart, embeddings, embStart, paragraphLength, flags]);
}, 1);

Clazz.newMeth(C$, 'createLineBidi$I$I',  function (lineStart, lineLimit) {
var astr=Clazz.new_($I$(2,1).c$$S,[""]);
var newBidi=Clazz.new_(C$.c$$java_text_AttributedCharacterIterator,[astr.getIterator$()]);
return this.bidiBase.setLine$java_text_Bidi$sun_text_bidi_BidiBase$java_text_Bidi$sun_text_bidi_BidiBase$I$I(this, this.bidiBase, newBidi, newBidi.bidiBase, lineStart, lineLimit);
});

Clazz.newMeth(C$, 'isMixed$',  function () {
return this.bidiBase.isMixed$();
});

Clazz.newMeth(C$, 'isLeftToRight$',  function () {
return this.bidiBase.isLeftToRight$();
});

Clazz.newMeth(C$, 'isRightToLeft$',  function () {
return this.bidiBase.isRightToLeft$();
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.bidiBase.getLength$();
});

Clazz.newMeth(C$, 'baseIsLeftToRight$',  function () {
return this.bidiBase.baseIsLeftToRight$();
});

Clazz.newMeth(C$, 'getBaseLevel$',  function () {
return this.bidiBase.getParaLevel$();
});

Clazz.newMeth(C$, 'getLevelAt$I',  function (offset) {
return this.bidiBase.getLevelAt$I(offset);
});

Clazz.newMeth(C$, 'getRunCount$',  function () {
return this.bidiBase.countRuns$();
});

Clazz.newMeth(C$, 'getRunLevel$I',  function (run) {
return this.bidiBase.getRunLevel$I(run);
});

Clazz.newMeth(C$, 'getRunStart$I',  function (run) {
return this.bidiBase.getRunStart$I(run);
});

Clazz.newMeth(C$, 'getRunLimit$I',  function (run) {
return this.bidiBase.getRunLimit$I(run);
});

Clazz.newMeth(C$, 'requiresBidi$CA$I$I',  function (text, start, limit) {
return $I$(1).requiresBidi$CA$I$I(text, start, limit);
}, 1);

Clazz.newMeth(C$, 'reorderVisually$BA$I$OA$I$I',  function (levels, levelStart, objects, objectStart, count) {
$I$(1).reorderVisually$BA$I$OA$I$I(levels, levelStart, objects, objectStart, count);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.bidiBase.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

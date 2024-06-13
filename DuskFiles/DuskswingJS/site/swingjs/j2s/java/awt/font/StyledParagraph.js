(function(){var P$=Clazz.newPackage("java.awt.font"),p$1={},I$=[[0,'sun.font.Decoration','sun.font.FontResolver','java.util.Vector','sun.text.CodePointIterator','java.awt.font.TextAttribute','java.awt.Toolkit','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StyledParagraph");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['length'],'O',['decoration','sun.font.Decoration','font','java.lang.Object','decorations','java.util.Vector','decorationStarts','int[]','fonts','java.util.Vector','fontStarts','int[]']]
,['I',['INITIAL_SIZE']]]

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator$CA',  function (aci, chars) {
;C$.$init$.apply(this);
var start=aci.getBeginIndex$();
var end=aci.getEndIndex$();
this.length=end - start;
var index=start;
aci.first$();
do {
var nextRunStart=aci.getRunLimit$();
var localIndex=index - start;
var attributes=aci.getAttributes$();
attributes=C$.addInputMethodAttrs$java_util_Map(attributes);
var d=$I$(1).getDecoration$java_util_Map(attributes);
p$1.addDecoration$sun_font_Decoration$I.apply(this, [d, localIndex]);
var f=C$.getGraphicOrFont$java_util_Map(attributes);
if (f == null ) {
p$1.addFonts$CA$java_util_Map$I$I.apply(this, [chars, attributes, localIndex, nextRunStart - start]);
} else {
p$1.addFont$O$I.apply(this, [f, localIndex]);
}aci.setIndex$I(nextRunStart);
index=nextRunStart;
} while (index < end);
if (this.decorations != null ) {
this.decorationStarts=C$.addToVector$O$I$java_util_Vector$IA(this, this.length, this.decorations, this.decorationStarts);
}if (this.fonts != null ) {
this.fontStarts=C$.addToVector$O$I$java_util_Vector$IA(this, this.length, this.fonts, this.fontStarts);
}}, 1);

Clazz.newMeth(C$, 'insertInto$I$IA$I',  function (pos, starts, numStarts) {
while (starts[--numStarts] > pos){
starts[numStarts]+=1;
}
}, 1);

Clazz.newMeth(C$, 'insertChar$java_text_AttributedCharacterIterator$CA$I$java_awt_font_StyledParagraph',  function (aci, chars, insertPos, oldParagraph) {
var ch=aci.setIndex$I(insertPos);
var relativePos=Math.max(insertPos - aci.getBeginIndex$() - 1 , 0);
var attributes=C$.addInputMethodAttrs$java_util_Map(aci.getAttributes$());
var d=$I$(1).getDecoration$java_util_Map(attributes);
if (!oldParagraph.getDecorationAt$I(relativePos).equals$O(d)) {
return Clazz.new_(C$.c$$java_text_AttributedCharacterIterator$CA,[aci, chars]);
}var f=C$.getGraphicOrFont$java_util_Map(attributes);
if (f == null ) {
var resolver=$I$(2).getInstance$();
var fontIndex=resolver.getFontIndex$C(ch);
f=resolver.getFont$I$java_util_Map(fontIndex, attributes);
}if (!oldParagraph.getFontOrGraphicAt$I(relativePos).equals$O(f)) {
return Clazz.new_(C$.c$$java_text_AttributedCharacterIterator$CA,[aci, chars]);
}oldParagraph.length+=1;
if (oldParagraph.decorations != null ) {
C$.insertInto$I$IA$I(relativePos, oldParagraph.decorationStarts, oldParagraph.decorations.size$());
}if (oldParagraph.fonts != null ) {
C$.insertInto$I$IA$I(relativePos, oldParagraph.fontStarts, oldParagraph.fonts.size$());
}return oldParagraph;
}, 1);

Clazz.newMeth(C$, 'deleteFrom$I$IA$I',  function (deleteAt, starts, numStarts) {
while (starts[--numStarts] > deleteAt){
starts[numStarts]-=1;
}
}, 1);

Clazz.newMeth(C$, 'deleteChar$java_text_AttributedCharacterIterator$CA$I$java_awt_font_StyledParagraph',  function (aci, chars, deletePos, oldParagraph) {
deletePos-=aci.getBeginIndex$();
if (oldParagraph.decorations == null  && oldParagraph.fonts == null  ) {
oldParagraph.length-=1;
return oldParagraph;
}if (oldParagraph.getRunLimit$I(deletePos) == deletePos + 1) {
if (deletePos == 0 || oldParagraph.getRunLimit$I(deletePos - 1) == deletePos ) {
return Clazz.new_(C$.c$$java_text_AttributedCharacterIterator$CA,[aci, chars]);
}}oldParagraph.length-=1;
if (oldParagraph.decorations != null ) {
C$.deleteFrom$I$IA$I(deletePos, oldParagraph.decorationStarts, oldParagraph.decorations.size$());
}if (oldParagraph.fonts != null ) {
C$.deleteFrom$I$IA$I(deletePos, oldParagraph.fontStarts, oldParagraph.fonts.size$());
}return oldParagraph;
}, 1);

Clazz.newMeth(C$, 'getRunLimit$I',  function (index) {
if (index < 0 || index >= this.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index out of range"]);
}var limit1=this.length;
if (this.decorations != null ) {
var run=C$.findRunContaining$I$IA(index, this.decorationStarts);
limit1=this.decorationStarts[run + 1];
}var limit2=this.length;
if (this.fonts != null ) {
var run=C$.findRunContaining$I$IA(index, this.fontStarts);
limit2=this.fontStarts[run + 1];
}return Math.min(limit1, limit2);
});

Clazz.newMeth(C$, 'getDecorationAt$I',  function (index) {
if (index < 0 || index >= this.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index out of range"]);
}if (this.decorations == null ) {
return this.decoration;
}var run=C$.findRunContaining$I$IA(index, this.decorationStarts);
return this.decorations.elementAt$I(run);
});

Clazz.newMeth(C$, 'getFontOrGraphicAt$I',  function (index) {
if (index < 0 || index >= this.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index out of range"]);
}if (this.fonts == null ) {
return this.font;
}var run=C$.findRunContaining$I$IA(index, this.fontStarts);
return this.fonts.elementAt$I(run);
});

Clazz.newMeth(C$, 'findRunContaining$I$IA',  function (index, starts) {
for (var i=1; true; i++) {
if (starts[i] > index) {
return i - 1;
}}
}, 1);

Clazz.newMeth(C$, 'addToVector$O$I$java_util_Vector$IA',  function (obj, index, v, starts) {
if (!v.lastElement$().equals$O(obj)) {
v.addElement$O(obj);
var count=v.size$();
if (starts.length == count) {
var temp=Clazz.array(Integer.TYPE, [starts.length * 2]);
System.arraycopy$O$I$O$I$I(starts, 0, temp, 0, starts.length);
starts=temp;
}starts[count - 1]=index;
}return starts;
}, 1);

Clazz.newMeth(C$, 'addDecoration$sun_font_Decoration$I',  function (d, index) {
if (this.decorations != null ) {
this.decorationStarts=C$.addToVector$O$I$java_util_Vector$IA(d, index, this.decorations, this.decorationStarts);
} else if (this.decoration == null ) {
this.decoration=d;
} else {
if (!this.decoration.equals$O(d)) {
this.decorations=Clazz.new_($I$(3,1).c$$I,[C$.INITIAL_SIZE]);
this.decorations.addElement$O(this.decoration);
this.decorations.addElement$O(d);
this.decorationStarts=Clazz.array(Integer.TYPE, [C$.INITIAL_SIZE]);
this.decorationStarts[0]=0;
this.decorationStarts[1]=index;
}}}, p$1);

Clazz.newMeth(C$, 'addFont$O$I',  function (f, index) {
if (this.fonts != null ) {
this.fontStarts=C$.addToVector$O$I$java_util_Vector$IA(f, index, this.fonts, this.fontStarts);
} else if (this.font == null ) {
this.font=f;
} else {
if (!this.font.equals$O(f)) {
this.fonts=Clazz.new_($I$(3,1).c$$I,[C$.INITIAL_SIZE]);
this.fonts.addElement$O(this.font);
this.fonts.addElement$O(f);
this.fontStarts=Clazz.array(Integer.TYPE, [C$.INITIAL_SIZE]);
this.fontStarts[0]=0;
this.fontStarts[1]=index;
}}}, p$1);

Clazz.newMeth(C$, 'addFonts$CA$java_util_Map$I$I',  function (chars, attributes, start, limit) {
var resolver=$I$(2).getInstance$();
var iter=$I$(4).create$CA$I$I(chars, start, limit);
for (var runStart=iter.charIndex$(); runStart < limit; runStart=iter.charIndex$()) {
var fontIndex=resolver.nextFontRunIndex$sun_text_CodePointIterator(iter);
p$1.addFont$O$I.apply(this, [resolver.getFont$I$java_util_Map(fontIndex, attributes), runStart]);
}
}, p$1);

Clazz.newMeth(C$, 'addInputMethodAttrs$java_util_Map',  function (oldStyles) {
var value=oldStyles.get$O($I$(5).INPUT_METHOD_HIGHLIGHT);
try {
if (value != null ) {
if (Clazz.instanceOf(value, "java.text.Annotation")) {
value=(value).getValue$();
}var hl;
hl=value;
var imStyles=null;
try {
imStyles=hl.getStyle$();
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodError")){
} else {
throw e;
}
}
if (imStyles == null ) {
var tk=$I$(6).getDefaultToolkit$();
imStyles=tk.mapInputMethodHighlight$java_awt_im_InputMethodHighlight(hl);
}if (imStyles != null ) {
var newStyles=Clazz.new_($I$(7,1).c$$I$F,[5, 0.9]);
newStyles.putAll$java_util_Map(oldStyles);
newStyles.putAll$java_util_Map(imStyles);
return newStyles;
}}} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
return oldStyles;
}, 1);

Clazz.newMeth(C$, 'getGraphicOrFont$java_util_Map',  function (attributes) {
var value=attributes.get$O($I$(5).CHAR_REPLACEMENT);
if (value != null ) {
return value;
}value=attributes.get$O($I$(5).FONT);
if (value != null ) {
return value;
}return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.INITIAL_SIZE=8;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

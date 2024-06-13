(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'java.util.Vector','javax.swing.text.GapContent','StringBuffer','javax.swing.text.Element','javax.swing.text.Segment',['javax.swing.text.AbstractDocument','.ElementEdit'],'javax.swing.text.Utilities','Error',['javax.swing.text.AbstractDocument','.BranchElement']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlainDocument", null, 'javax.swing.text.AbstractDocument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.added=Clazz.new_($I$(1,1));
this.removed=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['defaultRoot','javax.swing.text.AbstractDocument.AbstractElement','added','java.util.Vector','+removed','s','javax.swing.text.Segment']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_text_AbstractDocument_Content.apply(this, [Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AbstractDocument_Content',  function (c) {
;C$.superclazz.c$$javax_swing_text_AbstractDocument_Content.apply(this,[c]);C$.$init$.apply(this);
this.putProperty$O$O("tabSize",  new Integer(8));
this.defaultRoot=this.createDefaultRoot$();
}, 1);

Clazz.newMeth(C$, 'insertString$I$S$javax_swing_text_AttributeSet',  function (offs, str, a) {
var filterNewlines=this.getProperty$O("filterNewlines");
if ((Clazz.instanceOf(filterNewlines, "java.lang.Boolean")) && filterNewlines.equals$O(Boolean.TRUE) ) {
if ((str != null ) && (str.indexOf$I("\n") >= 0) ) {
var filtered=Clazz.new_($I$(3,1).c$$S,[str]);
var n=filtered.length$();
for (var i=0; i < n; i++) {
if (filtered.charAt$I(i) == "\n") {
filtered.setCharAt$I$C(i, " ");
}}
str=filtered.toString();
}}C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [offs, str, a]);
});

Clazz.newMeth(C$, 'getDefaultRootElement$',  function () {
return this.defaultRoot;
});

Clazz.newMeth(C$, 'createDefaultRoot$',  function () {
var map=this.createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet(null, null);
var line=this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(map, null, 0, 1);
var lines=Clazz.array($I$(4), [1]);
lines[0]=line;
map.replace$I$I$javax_swing_text_ElementA(0, 0, lines);
return map;
});

Clazz.newMeth(C$, 'getParagraphElement$I',  function (pos) {
var lineMap=this.getDefaultRootElement$();
return lineMap.getElement$I(lineMap.getElementIndex$I(pos));
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet',  function (chng, attr) {
this.removed.removeAllElements$();
this.added.removeAllElements$();
var lineMap=this.getDefaultRootElement$();
var offset=chng.getOffset$();
var length=chng.getLength$();
if (offset > 0) {
offset-=1;
length+=1;
}var index=lineMap.getElementIndex$I(offset);
var rmCandidate=lineMap.getElement$I(index);
var rmOffs0=rmCandidate.getStartOffset$();
var rmOffs1=rmCandidate.getEndOffset$();
var lastOffset=rmOffs0;
try {
if (this.s == null ) {
this.s=Clazz.new_($I$(5,1));
}this.getContent$().getChars$I$I$javax_swing_text_Segment(offset, length, this.s);
var hasBreaks=false;
for (var i=0; i < length; i++) {
var c=this.s.array[this.s.offset + i];
if (c == "\n") {
var breakOffset=offset + i + 1 ;
this.added.addElement$O(this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(lineMap, null, lastOffset, breakOffset));
lastOffset=breakOffset;
hasBreaks=true;
}}
if (hasBreaks) {
this.removed.addElement$O(rmCandidate);
if ((offset + length == rmOffs1) && (lastOffset != rmOffs1) && ((index + 1) < lineMap.getElementCount$())  ) {
var e=lineMap.getElement$I(index + 1);
this.removed.addElement$O(e);
rmOffs1=e.getEndOffset$();
}if (lastOffset < rmOffs1) {
this.added.addElement$O(this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(lineMap, null, lastOffset, rmOffs1));
}var aelems=Clazz.array($I$(4), [this.added.size$()]);
this.added.copyInto$OA(aelems);
var relems=Clazz.array($I$(4), [this.removed.size$()]);
this.removed.copyInto$OA(relems);
var ee=Clazz.new_($I$(6,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[lineMap, index, relems, aelems]);
chng.addEdit$javax_swing_undo_UndoableEdit(ee);
lineMap.replace$I$I$javax_swing_text_ElementA(index, relems.length, aelems);
}if ($I$(7).isComposedTextAttributeDefined$javax_swing_text_AttributeSet(attr)) {
p$1.insertComposedTextUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet.apply(this, [chng, attr]);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(["Internal error: " + e.toString()],$I$(8,1).c$$S);
} else {
throw e;
}
}
C$.superclazz.prototype.insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet.apply(this, [chng, attr]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (chng) {
this.removed.removeAllElements$();
var map=this.getDefaultRootElement$();
var offset=chng.getOffset$();
var length=chng.getLength$();
var line0=map.getElementIndex$I(offset);
var line1=map.getElementIndex$I(offset + length);
if (line0 != line1) {
for (var i=line0; i <= line1; i++) {
this.removed.addElement$O(map.getElement$I(i));
}
var p0=map.getElement$I(line0).getStartOffset$();
var p1=map.getElement$I(line1).getEndOffset$();
var aelems=Clazz.array($I$(4), [1]);
aelems[0]=this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(map, null, p0, p1);
var relems=Clazz.array($I$(4), [this.removed.size$()]);
this.removed.copyInto$OA(relems);
var ee=Clazz.new_($I$(6,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[map, line0, relems, aelems]);
chng.addEdit$javax_swing_undo_UndoableEdit(ee);
map.replace$I$I$javax_swing_text_ElementA(line0, relems.length, aelems);
} else {
var line=map.getElement$I(line0);
if (!line.isLeaf$()) {
var leaf=line.getElement$I(line.getElementIndex$I(offset));
if ($I$(7).isComposedTextElement$javax_swing_text_Element(leaf)) {
var aelem=Clazz.array($I$(4), [1]);
aelem[0]=this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(map, null, line.getStartOffset$(), line.getEndOffset$());
var relem=Clazz.array($I$(4), [1]);
relem[0]=line;
var ee=Clazz.new_($I$(6,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[map, line0, relem, aelem]);
chng.addEdit$javax_swing_undo_UndoableEdit(ee);
map.replace$I$I$javax_swing_text_ElementA(line0, 1, aelem);
}}}C$.superclazz.prototype.removeUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent.apply(this, [chng]);
});

Clazz.newMeth(C$, 'insertComposedTextUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet',  function (chng, attr) {
this.added.removeAllElements$();
var lineMap=this.getDefaultRootElement$();
var offset=chng.getOffset$();
var length=chng.getLength$();
var index=lineMap.getElementIndex$I(offset);
var elem=lineMap.getElement$I(index);
var elemStart=elem.getStartOffset$();
var elemEnd=elem.getEndOffset$();
var abelem=Clazz.array($I$(9), [1]);
abelem[0]=this.createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet(lineMap, null);
var relem=Clazz.array($I$(4), [1]);
relem[0]=elem;
if (elemStart != offset) this.added.addElement$O(this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(abelem[0], null, elemStart, offset));
this.added.addElement$O(this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(abelem[0], attr, offset, offset + length));
if (elemEnd != offset + length) this.added.addElement$O(this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(abelem[0], null, offset + length, elemEnd));
var alelem=Clazz.array($I$(4), [this.added.size$()]);
this.added.copyInto$OA(alelem);
var ee=Clazz.new_($I$(6,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[lineMap, index, relem, abelem]);
chng.addEdit$javax_swing_undo_UndoableEdit(ee);
abelem[0].replace$I$I$javax_swing_text_ElementA(0, 0, alelem);
lineMap.replace$I$I$javax_swing_text_ElementA(index, 1, abelem);
}, p$1);

Clazz.newMeth(C$, 'render$Runnable',  function (r) {
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

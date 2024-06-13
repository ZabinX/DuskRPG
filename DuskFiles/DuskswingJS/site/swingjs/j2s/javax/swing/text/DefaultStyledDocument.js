(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'java.util.Vector','java.util.Stack','javax.swing.text.SimpleAttributeSet',['javax.swing.text.DefaultStyledDocument','.AttributeUndoableEdit'],['javax.swing.text.DefaultStyledDocument','.ElementBuffer','.ElemChanges'],'javax.swing.text.Element',['javax.swing.text.AbstractDocument','.ElementEdit'],'javax.swing.text.StateInvariantError','java.util.ArrayList',['javax.swing.text.AbstractDocument','.DefaultDocumentEvent'],['javax.swing.event.DocumentEvent','.EventType'],['javax.swing.text.DefaultStyledDocument','.ElementBuffer'],'javax.swing.text.GapContent','javax.swing.text.StyleContext','StringBuilder','javax.swing.event.UndoableEditEvent','javax.swing.text.Utilities',['javax.swing.text.DefaultStyledDocument','.StyleChangeUndoableEdit'],'java.awt.font.TextAttribute','javax.swing.text.Segment',['javax.swing.text.DefaultStyledDocument','.ElementSpec'],'javax.swing.text.StyleConstants',['javax.swing.text.DefaultStyledDocument','.SectionElement'],['javax.swing.text.AbstractDocument','.BranchElement'],['javax.swing.text.AbstractDocument','.LeafElement'],['javax.swing.text.DefaultStyledDocument','.ChangeUpdateRunnable'],'javax.swing.SwingUtilities','javax.swing.event.DocumentListener',['javax.swing.text.DefaultStyledDocument','.StyleChangeHandler'],['javax.swing.text.DefaultStyledDocument','.StyleContextChangeHandler']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultStyledDocument", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.AbstractDocument', 'javax.swing.text.StyledDocument');
C$.$classes$=[['SectionElement',4],['ElementSpec',9],['ElementBuffer',1],['AttributeUndoableEdit',9],['StyleChangeUndoableEdit',8],['AbstractChangeHandler',1032],['StyleChangeHandler',8],['StyleContextChangeHandler',8],['ChangeUpdateRunnable',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['buffer','javax.swing.text.DefaultStyledDocument.ElementBuffer','listeningStyles','java.util.Vector','styleChangeListener','javax.swing.event.ChangeListener','+styleContextChangeListener','updateRunnable','javax.swing.text.DefaultStyledDocument.ChangeUpdateRunnable']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_StyleContext',  function (c, styles) {
;C$.superclazz.c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_AbstractDocument_AttributeContext.apply(this,[c, styles]);C$.$init$.apply(this);
this.listeningStyles=Clazz.new_($I$(1,1));
this.buffer=Clazz.new_([this, null, this.createDefaultRoot$()],$I$(12,1).c$$javax_swing_text_Element);
var defaultStyle=styles.getStyle$S("default");
this.setLogicalStyle$I$javax_swing_text_Style(0, defaultStyle);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_StyleContext',  function (styles) {
C$.c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_StyleContext.apply(this, [Clazz.new_($I$(13,1).c$$I,[4096]), styles]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_StyleContext.apply(this, [Clazz.new_($I$(13,1).c$$I,[4096]), Clazz.new_($I$(14,1))]);
}, 1);

Clazz.newMeth(C$, 'getDefaultRootElement$',  function () {
return this.buffer.getRootElement$();
});

Clazz.newMeth(C$, 'create$javax_swing_text_DefaultStyledDocument_ElementSpecA',  function (data) {
try {
if (this.getLength$() != 0) {
this.remove$I$I(0, this.getLength$());
}this.writeLock$();
var c=this.getContent$();
var n=data.length;
var sb=Clazz.new_($I$(15,1));
for (var i=0; i < n; i++) {
var es=data[i];
if (es.getLength$() > 0) {
sb.append$CA$I$I(es.getArray$(), es.getOffset$(), es.getLength$());
}}
var cEdit=c.insertString$I$S(0, sb.toString());
var length=sb.length$();
var evnt=Clazz.new_([this, null, 0, length, $I$(11).INSERT],$I$(10,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
evnt.addEdit$javax_swing_undo_UndoableEdit(cEdit);
this.buffer.create$I$javax_swing_text_DefaultStyledDocument_ElementSpecA$javax_swing_text_AbstractDocument_DefaultDocumentEvent(length, data, evnt);
C$.superclazz.prototype.insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet.apply(this, [evnt, null]);
evnt.end$();
this.fireInsertUpdate$javax_swing_event_DocumentEvent(evnt);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(16,1).c$$O$javax_swing_undo_UndoableEdit,[this, evnt]));
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
throw Clazz.new_($I$(8,1).c$$S,["problem initializing"]);
} else {
throw ble;
}
} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'insert$I$javax_swing_text_DefaultStyledDocument_ElementSpecA',  function (offset, data) {
if (data == null  || data.length == 0 ) {
return;
}try {
this.writeLock$();
var c=this.getContent$();
var n=data.length;
var sb=Clazz.new_($I$(15,1));
for (var i=0; i < n; i++) {
var es=data[i];
if (es.getLength$() > 0) {
sb.append$CA$I$I(es.getArray$(), es.getOffset$(), es.getLength$());
}}
if (sb.length$() == 0) {
return;
}var cEdit=c.insertString$I$S(offset, sb.toString());
var length=sb.length$();
var evnt=Clazz.new_([this, null, offset, length, $I$(11).INSERT],$I$(10,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
evnt.addEdit$javax_swing_undo_UndoableEdit(cEdit);
this.buffer.insert$I$I$javax_swing_text_DefaultStyledDocument_ElementSpecA$javax_swing_text_AbstractDocument_DefaultDocumentEvent(offset, length, data, evnt);
C$.superclazz.prototype.insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet.apply(this, [evnt, null]);
evnt.end$();
this.fireInsertUpdate$javax_swing_event_DocumentEvent(evnt);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(16,1).c$$O$javax_swing_undo_UndoableEdit,[this, evnt]));
} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'removeElement$javax_swing_text_Element',  function (elem) {
try {
this.writeLock$();
p$1.removeElementImpl$javax_swing_text_Element.apply(this, [elem]);
} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'removeElementImpl$javax_swing_text_Element',  function (elem) {
if (elem.getDocument$() !== this ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["element doesn\'t belong to document"]);
}var parent=elem.getParentElement$();
if (parent == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["can\'t remove the root element"]);
}var startOffset=elem.getStartOffset$();
var removeFrom=startOffset;
var endOffset=elem.getEndOffset$();
var removeTo=endOffset;
var lastEndOffset=this.getLength$() + 1;
var content=this.getContent$();
var atEnd=false;
var isComposedText=$I$(17).isComposedTextElement$javax_swing_text_Element(elem);
if (endOffset >= lastEndOffset) {
if (startOffset <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["can\'t remove the whole content"]);
}removeTo=lastEndOffset - 1;
try {
if (content.getString$I$I(startOffset - 1, 1).charAt$I(0) == "\n") {
--removeFrom;
}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[ble]);
} else {
throw ble;
}
}
atEnd=true;
}var length=removeTo - removeFrom;
var dde=Clazz.new_([this, null, removeFrom, length, $I$(11).REMOVE],$I$(10,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
var ue=null;
while (parent.getElementCount$() == 1){
elem=parent;
parent=parent.getParentElement$();
if (parent == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["invalid element structure"]);
}}
var removed=Clazz.array($I$(6), -1, [elem]);
var added=Clazz.array($I$(6), -1, []);
var index=parent.getElementIndex$I(startOffset);
parent.replace$I$I$javax_swing_text_ElementA(index, 1, added);
dde.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(7,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[parent, index, removed, added]));
if (length > 0) {
try {
ue=content.remove$I$I(removeFrom, length);
if (ue != null ) {
dde.addEdit$javax_swing_undo_UndoableEdit(ue);
}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[ble]);
} else {
throw ble;
}
}
lastEndOffset-=length;
}if (atEnd) {
var prevLeaf=parent.getElement$I(parent.getElementCount$() - 1);
while ((prevLeaf != null ) && !prevLeaf.isLeaf$() ){
prevLeaf=prevLeaf.getElement$I(prevLeaf.getElementCount$() - 1);
}
if (prevLeaf == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["invalid element structure"]);
}var prevStartOffset=prevLeaf.getStartOffset$();
var prevParent=prevLeaf.getParentElement$();
var prevIndex=prevParent.getElementIndex$I(prevStartOffset);
var newElem;
newElem=this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(prevParent, prevLeaf.getAttributes$(), prevStartOffset, lastEndOffset);
var prevRemoved=Clazz.array($I$(6), -1, [prevLeaf]);
var prevAdded=Clazz.array($I$(6), -1, [newElem]);
prevParent.replace$I$I$javax_swing_text_ElementA(prevIndex, 1, prevAdded);
dde.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(7,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[prevParent, prevIndex, prevRemoved, prevAdded]));
}this.postRemoveUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent(dde);
dde.end$();
this.fireRemoveUpdate$javax_swing_event_DocumentEvent(dde);
if (!(isComposedText && (ue != null ) )) {
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(16,1).c$$O$javax_swing_undo_UndoableEdit,[this, dde]));
}}, p$1);

Clazz.newMeth(C$, 'addStyle$S$javax_swing_text_Style',  function (nm, parent) {
var styles=this.getAttributeContext$();
return styles.addStyle$S$javax_swing_text_Style(nm, parent);
});

Clazz.newMeth(C$, 'removeStyle$S',  function (nm) {
var styles=this.getAttributeContext$();
styles.removeStyle$S(nm);
});

Clazz.newMeth(C$, 'getStyle$S',  function (nm) {
var styles=this.getAttributeContext$();
return styles.getStyle$S(nm);
});

Clazz.newMeth(C$, 'getStyleNames$',  function () {
return (this.getAttributeContext$()).getStyleNames$();
});

Clazz.newMeth(C$, 'setLogicalStyle$I$javax_swing_text_Style',  function (pos, s) {
var paragraph=this.getParagraphElement$I(pos);
if ((paragraph != null ) && (Clazz.instanceOf(paragraph, "javax.swing.text.AbstractDocument.AbstractElement")) ) {
try {
this.writeLock$();
var edit=Clazz.new_($I$(18,1).c$$javax_swing_text_AbstractDocument_AbstractElement$javax_swing_text_Style,[paragraph, s]);
(paragraph).setResolveParent$javax_swing_text_AttributeSet(s);
var p0=paragraph.getStartOffset$();
var p1=paragraph.getEndOffset$();
var e=Clazz.new_([this, null, p0, p1 - p0, $I$(11).CHANGE],$I$(10,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
e.addEdit$javax_swing_undo_UndoableEdit(edit);
e.end$();
this.fireChangedUpdate$javax_swing_event_DocumentEvent(e);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(16,1).c$$O$javax_swing_undo_UndoableEdit,[this, e]));
} finally {
this.writeUnlock$();
}
}});

Clazz.newMeth(C$, 'getLogicalStyle$I',  function (p) {
var s=null;
var paragraph=this.getParagraphElement$I(p);
if (paragraph != null ) {
var a=paragraph.getAttributes$();
var parent=a.getResolveParent$();
if (Clazz.instanceOf(parent, "javax.swing.text.Style")) {
s=parent;
}}return s;
});

Clazz.newMeth(C$, 'setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z',  function (offset, length, s, replace) {
if (length == 0) {
return;
}try {
this.writeLock$();
var changes=Clazz.new_([this, null, offset, length, $I$(11).CHANGE],$I$(10,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
this.buffer.change$I$I$javax_swing_text_AbstractDocument_DefaultDocumentEvent(offset, length, changes);
var sCopy=s.copyAttributes$();
var lastEnd;
for (var pos=offset; pos < (offset + length); pos=lastEnd) {
var run=this.getCharacterElement$I(pos);
lastEnd=run.getEndOffset$();
if (pos == lastEnd) {
break;
}var attr=run.getAttributes$();
changes.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(4,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$Z,[run, sCopy, replace]));
if (replace) {
attr.removeAttributes$javax_swing_text_AttributeSet(attr);
}attr.addAttributes$javax_swing_text_AttributeSet(s);
}
changes.end$();
this.fireChangedUpdate$javax_swing_event_DocumentEvent(changes);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(16,1).c$$O$javax_swing_undo_UndoableEdit,[this, changes]));
} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'setParagraphAttributes$I$I$javax_swing_text_AttributeSet$Z',  function (offset, length, s, replace) {
try {
this.writeLock$();
var changes=Clazz.new_([this, null, offset, length, $I$(11).CHANGE],$I$(10,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
var sCopy=s.copyAttributes$();
var section=this.getDefaultRootElement$();
var index0=section.getElementIndex$I(offset);
var index1=section.getElementIndex$I(offset + ((length > 0) ? length - 1 : 0));
var isI18N=Boolean.TRUE.equals$O(this.getProperty$O("i18n"));
var hasRuns=false;
for (var i=index0; i <= index1; i++) {
var paragraph=section.getElement$I(i);
var attr=paragraph.getAttributes$();
changes.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(4,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$Z,[paragraph, sCopy, replace]));
if (replace) {
attr.removeAttributes$javax_swing_text_AttributeSet(attr);
}attr.addAttributes$javax_swing_text_AttributeSet(s);
if (isI18N && !hasRuns ) {
hasRuns=(attr.getAttribute$O($I$(19).RUN_DIRECTION) != null );
}}
changes.end$();
this.fireChangedUpdate$javax_swing_event_DocumentEvent(changes);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(16,1).c$$O$javax_swing_undo_UndoableEdit,[this, changes]));
} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'getParagraphElement$I',  function (pos) {
var e;
for (e=this.getDefaultRootElement$(); !e.isLeaf$(); ) {
var index=e.getElementIndex$I(pos);
e=e.getElement$I(index);
}
return e.getParentElement$();
});

Clazz.newMeth(C$, 'getCharacterElement$I',  function (pos) {
var e;
for (e=this.getDefaultRootElement$(); !e.isLeaf$(); ) {
var index=e.getElementIndex$I(pos);
e=e.getElement$I(index);
}
return e;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet',  function (chng, attr) {
var offset=chng.getOffset$();
var length=chng.getLength$();
if (attr == null ) {
attr=$I$(3).EMPTY;
}var paragraph=this.getParagraphElement$I(offset + length);
var pattr=paragraph.getAttributes$();
var pParagraph=this.getParagraphElement$I(offset);
var run=pParagraph.getElement$I(pParagraph.getElementIndex$I(offset));
var endOffset=offset + length;
var insertingAtBoundry=(run.getEndOffset$() == endOffset);
var cattr=run.getAttributes$();
try {
var s=Clazz.new_($I$(20,1));
var parseBuffer=Clazz.new_($I$(1,1));
var lastStartSpec=null;
var insertingAfterNewline=false;
var lastStartDirection=6;
if (offset > 0) {
this.getText$I$I$javax_swing_text_Segment(offset - 1, 1, s);
if (s.array[s.offset] == "\n") {
insertingAfterNewline=true;
lastStartDirection=this.createSpecsForInsertAfterNewline$javax_swing_text_Element$javax_swing_text_Element$javax_swing_text_AttributeSet$java_util_Vector$I$I(paragraph, pParagraph, pattr, parseBuffer, offset, endOffset);
for (var counter=parseBuffer.size$() - 1; counter >= 0; counter--) {
var spec=parseBuffer.elementAt$I(counter);
if (spec.getType$() == 1) {
lastStartSpec=spec;
break;
}}
}}if (!insertingAfterNewline) pattr=pParagraph.getAttributes$();
this.getText$I$I$javax_swing_text_Segment(offset, length, s);
var txt=s.array;
var n=s.offset + s.count;
var lastOffset=s.offset;
for (var i=s.offset; i < n; i++) {
if (txt[i] == "\n") {
var breakOffset=i + 1;
parseBuffer.addElement$O(Clazz.new_($I$(21,1).c$$javax_swing_text_AttributeSet$H$I,[attr, 3, breakOffset - lastOffset]));
parseBuffer.addElement$O(Clazz.new_($I$(21,1).c$$javax_swing_text_AttributeSet$H,[null, 2]));
lastStartSpec=Clazz.new_($I$(21,1).c$$javax_swing_text_AttributeSet$H,[pattr, 1]);
parseBuffer.addElement$O(lastStartSpec);
lastOffset=breakOffset;
}}
if (lastOffset < n) {
parseBuffer.addElement$O(Clazz.new_($I$(21,1).c$$javax_swing_text_AttributeSet$H$I,[attr, 3, n - lastOffset]));
}var first=parseBuffer.firstElement$();
var docLength=this.getLength$();
if (first.getType$() == 3 && cattr.isEqual$javax_swing_text_AttributeSet(attr) ) {
first.setDirection$H(4);
}if (lastStartSpec != null ) {
if (insertingAfterNewline) {
lastStartSpec.setDirection$H(lastStartDirection);
} else if (pParagraph.getEndOffset$() != endOffset) {
lastStartSpec.setDirection$H(7);
} else {
var parent=pParagraph.getParentElement$();
var pParagraphIndex=parent.getElementIndex$I(offset);
if ((pParagraphIndex + 1) < parent.getElementCount$() && !parent.getElement$I(pParagraphIndex + 1).isLeaf$() ) {
lastStartSpec.setDirection$H(5);
}}}if (insertingAtBoundry && endOffset < docLength ) {
var last=parseBuffer.lastElement$();
if (last.getType$() == 3 && last.getDirection$() != 4  && ((lastStartSpec == null  && (paragraph === pParagraph  || insertingAfterNewline ) ) || (lastStartSpec != null  && lastStartSpec.getDirection$() != 6 ) ) ) {
var nextRun=paragraph.getElement$I(paragraph.getElementIndex$I(endOffset));
if (nextRun.isLeaf$() && attr.isEqual$javax_swing_text_AttributeSet(nextRun.getAttributes$()) ) {
last.setDirection$H(5);
}}} else if (!insertingAtBoundry && lastStartSpec != null   && lastStartSpec.getDirection$() == 7 ) {
var last=parseBuffer.lastElement$();
if (last.getType$() == 3 && last.getDirection$() != 4  && attr.isEqual$javax_swing_text_AttributeSet(cattr) ) {
last.setDirection$H(5);
}}if ($I$(17).isComposedTextAttributeDefined$javax_swing_text_AttributeSet(attr)) {
var mattr=attr;
mattr.addAttributes$javax_swing_text_AttributeSet(cattr);
mattr.addAttribute$O$O("$ename", "content");
mattr.addAttribute$O$O($I$(22).NameAttribute, "content");
if (mattr.isDefined$O("CR")) {
mattr.removeAttribute$O("CR");
}}var spec=Clazz.array($I$(21), [parseBuffer.size$()]);
parseBuffer.copyInto$OA(spec);
this.buffer.insert$I$I$javax_swing_text_DefaultStyledDocument_ElementSpecA$javax_swing_text_AbstractDocument_DefaultDocumentEvent(offset, length, spec, chng);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
} else {
throw bl;
}
}
C$.superclazz.prototype.insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet.apply(this, [chng, attr]);
});

Clazz.newMeth(C$, 'createSpecsForInsertAfterNewline$javax_swing_text_Element$javax_swing_text_Element$javax_swing_text_AttributeSet$java_util_Vector$I$I',  function (paragraph, pParagraph, pattr, parseBuffer, offset, endOffset) {
if (paragraph.getParentElement$() === pParagraph.getParentElement$() ) {
var spec=Clazz.new_($I$(21,1).c$$javax_swing_text_AttributeSet$H,[pattr, 2]);
parseBuffer.addElement$O(spec);
spec=Clazz.new_($I$(21,1).c$$javax_swing_text_AttributeSet$H,[pattr, 1]);
parseBuffer.addElement$O(spec);
if (pParagraph.getEndOffset$() != endOffset) return 7;
var parent=pParagraph.getParentElement$();
if ((parent.getElementIndex$I(offset) + 1) < parent.getElementCount$()) return 5;
} else {
var leftParents=Clazz.new_($I$(1,1));
var rightParents=Clazz.new_($I$(1,1));
var e=pParagraph;
while (e != null ){
leftParents.addElement$O(e);
e=e.getParentElement$();
}
e=paragraph;
var leftIndex=-1;
while (e != null  && (leftIndex=leftParents.indexOf$O(e)) == -1 ){
rightParents.addElement$O(e);
e=e.getParentElement$();
}
if (e != null ) {
for (var counter=0; counter < leftIndex; counter++) {
parseBuffer.addElement$O(Clazz.new_($I$(21,1).c$$javax_swing_text_AttributeSet$H,[null, 2]));
}
var spec;
for (var counter=rightParents.size$() - 1; counter >= 0; counter--) {
spec=Clazz.new_([rightParents.elementAt$I(counter).getAttributes$(), 1],$I$(21,1).c$$javax_swing_text_AttributeSet$H);
if (counter > 0) spec.setDirection$H(5);
parseBuffer.addElement$O(spec);
}
if (rightParents.size$() > 0) return 5;
return 7;
}}return 6;
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (chng) {
C$.superclazz.prototype.removeUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent.apply(this, [chng]);
this.buffer.remove$I$I$javax_swing_text_AbstractDocument_DefaultDocumentEvent(chng.getOffset$(), chng.getLength$(), chng);
});

Clazz.newMeth(C$, 'createDefaultRoot$',  function () {
this.writeLock$();
var section=Clazz.new_($I$(23,1),[this, null]);
var paragraph=Clazz.new_($I$(24,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet,[this, null, section, null]);
var brk=Clazz.new_($I$(25,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I,[this, null, paragraph, null, 0, 1]);
var buff=Clazz.array($I$(6), [1]);
buff[0]=brk;
paragraph.replace$I$I$javax_swing_text_ElementA(0, 0, buff);
buff[0]=paragraph;
section.replace$I$I$javax_swing_text_ElementA(0, 0, buff);
this.writeUnlock$();
return section;
});

Clazz.newMeth(C$, 'getForeground$javax_swing_text_AttributeSet',  function (attr) {
var styles=this.getAttributeContext$();
return styles.getForeground$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'getBackground$javax_swing_text_AttributeSet',  function (attr) {
var styles=this.getAttributeContext$();
return styles.getBackground$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'getFont$javax_swing_text_AttributeSet',  function (attr) {
var styles=this.getAttributeContext$();
return styles.getFont$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'styleChanged$javax_swing_text_Style',  function (style) {
if (this.getLength$() != 0) {
if (this.updateRunnable == null ) {
this.updateRunnable=Clazz.new_($I$(26,1),[this, null]);
}{
if (!this.updateRunnable.isPending) {
$I$(27).invokeLater$Runnable(this.updateRunnable);
this.updateRunnable.isPending=true;
}}}});

Clazz.newMeth(C$, 'addDocumentListener$javax_swing_event_DocumentListener',  function (listener) {
{
var oldDLCount=this.listenerList.getListenerCount$Class(Clazz.getClass($I$(28),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']));
C$.superclazz.prototype.addDocumentListener$javax_swing_event_DocumentListener.apply(this, [listener]);
if (oldDLCount == 0) {
if (this.styleContextChangeListener == null ) {
this.styleContextChangeListener=this.createStyleContextChangeListener$();
}if (this.styleContextChangeListener != null ) {
var styles=this.getAttributeContext$();
styles.addChangeListener$javax_swing_event_ChangeListener(this.styleContextChangeListener);
}this.updateStylesListeningTo$();
}}});

Clazz.newMeth(C$, 'removeDocumentListener$javax_swing_event_DocumentListener',  function (listener) {
{
C$.superclazz.prototype.removeDocumentListener$javax_swing_event_DocumentListener.apply(this, [listener]);
if (this.listenerList.getListenerCount$Class(Clazz.getClass($I$(28),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent'])) == 0) {
for (var counter=this.listeningStyles.size$() - 1; counter >= 0; counter--) {
this.listeningStyles.elementAt$I(counter).removeChangeListener$javax_swing_event_ChangeListener(this.styleChangeListener);
}
this.listeningStyles.removeAllElements$();
if (this.styleContextChangeListener != null ) {
var styles=this.getAttributeContext$();
styles.removeChangeListener$javax_swing_event_ChangeListener(this.styleContextChangeListener);
}}}});

Clazz.newMeth(C$, 'createStyleChangeListener$',  function () {
return Clazz.new_($I$(29,1).c$$javax_swing_text_DefaultStyledDocument,[this]);
});

Clazz.newMeth(C$, 'createStyleContextChangeListener$',  function () {
return Clazz.new_($I$(30,1).c$$javax_swing_text_DefaultStyledDocument,[this]);
});

Clazz.newMeth(C$, 'updateStylesListeningTo$',  function () {
{
var styles=this.getAttributeContext$();
if (this.styleChangeListener == null ) {
this.styleChangeListener=this.createStyleChangeListener$();
}if (this.styleChangeListener != null  && styles != null  ) {
var styleNames=styles.getStyleNames$();
var v=this.listeningStyles.clone$();
this.listeningStyles.removeAllElements$();
while (styleNames.hasMoreElements$()){
var name=styleNames.nextElement$();
var aStyle=styles.getStyle$S(name);
var index=v.indexOf$O(aStyle);
this.listeningStyles.addElement$O(aStyle);
if (index == -1) {
aStyle.addChangeListener$javax_swing_event_ChangeListener(this.styleChangeListener);
} else {
v.removeElementAt$I(index);
}}
for (var counter=v.size$() - 1; counter >= 0; counter--) {
var aStyle=v.elementAt$I(counter);
aStyle.removeChangeListener$javax_swing_event_ChangeListener(this.styleChangeListener);
}
if (this.listeningStyles.size$() == 0) {
this.styleChangeListener=null;
}}}});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
this.listeningStyles=Clazz.new_($I$(1,1));
s.defaultReadObject$();
if (this.styleContextChangeListener == null  && this.listenerList.getListenerCount$Class(Clazz.getClass($I$(28),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent'])) > 0 ) {
this.styleContextChangeListener=this.createStyleContextChangeListener$();
if (this.styleContextChangeListener != null ) {
var styles=this.getAttributeContext$();
styles.addChangeListener$javax_swing_event_ChangeListener(this.styleContextChangeListener);
}this.updateStylesListeningTo$();
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "SectionElement", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.AbstractDocument','.BranchElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this,[null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return "section";
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "ElementSpec", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['len','offs'],'H',['type','direction'],'O',['attr','javax.swing.text.AttributeSet','data','char[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet$H',  function (a, type) {
C$.c$$javax_swing_text_AttributeSet$H$CA$I$I.apply(this, [a, type, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet$H$I',  function (a, type, len) {
C$.c$$javax_swing_text_AttributeSet$H$CA$I$I.apply(this, [a, type, null, 0, len]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet$H$CA$I$I',  function (a, type, txt, offs, len) {
;C$.$init$.apply(this);
this.attr=a;
this.type=type;
this.data=txt;
this.offs=offs;
this.len=len;
this.direction=6;
}, 1);

Clazz.newMeth(C$, 'setType$H',  function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setDirection$H',  function (direction) {
this.direction=direction;
});

Clazz.newMeth(C$, 'getDirection$',  function () {
return this.direction;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attr;
});

Clazz.newMeth(C$, 'getArray$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offs;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.len;
});

Clazz.newMeth(C$, 'toString',  function () {
var tlbl="??";
var plbl="??";
switch (this.type) {
case 1:
tlbl="StartTag";
break;
case 3:
tlbl="Content";
break;
case 2:
tlbl="EndTag";
break;
}
switch (this.direction) {
case 4:
plbl="JoinPrevious";
break;
case 5:
plbl="JoinNext";
break;
case 6:
plbl="Originate";
break;
case 7:
plbl="Fracture";
break;
}
return tlbl + ":" + plbl + ":" + this.getLength$() ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "ElementBuffer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['ElemChanges',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['insertOp','recreateLeafs','createdFracture','offsetLastIndex','offsetLastIndexOnReplace'],'I',['pos','offset','length','endOffset'],'O',['root','javax.swing.text.Element','changes','java.util.Vector','path','java.util.Stack','insertPath','javax.swing.text.DefaultStyledDocument.ElementBuffer.ElemChanges[]','fracturedParent','javax.swing.text.Element','+fracturedChild']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (root) {
;C$.$init$.apply(this);
this.root=root;
this.changes=Clazz.new_($I$(1,1));
this.path=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'getRootElement$',  function () {
return this.root;
});

Clazz.newMeth(C$, 'insert$I$I$javax_swing_text_DefaultStyledDocument_ElementSpecA$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (offset, length, data, de) {
if (length == 0) {
return;
}this.insertOp=true;
this.beginEdits$I$I(offset, length);
this.insertUpdate$javax_swing_text_DefaultStyledDocument_ElementSpecA(data);
this.endEdits$javax_swing_text_AbstractDocument_DefaultDocumentEvent(de);
this.insertOp=false;
});

Clazz.newMeth(C$, 'create$I$javax_swing_text_DefaultStyledDocument_ElementSpecA$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (length, data, de) {
this.insertOp=true;
this.beginEdits$I$I(this.offset, length);
var elem=this.root;
var index=elem.getElementIndex$I(0);
while (!elem.isLeaf$()){
var child=elem.getElement$I(index);
this.push$javax_swing_text_Element$I(elem, index);
elem=child;
index=elem.getElementIndex$I(0);
}
var ec=this.path.peek$();
var child=ec.parent.getElement$I(ec.index);
ec.added.addElement$O(this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), this.b$['javax.swing.text.AbstractDocument'].getLength$.apply(this.b$['javax.swing.text.AbstractDocument'], []), child.getEndOffset$()]));
ec.removed.addElement$O(child);
while (this.path.size$() > 1){
this.pop$();
}
var n=data.length;
var newAttrs=null;
if (n > 0 && data[0].getType$() == 1 ) {
newAttrs=data[0].getAttributes$();
}if (newAttrs == null ) {
newAttrs=$I$(3).EMPTY;
}var attr=this.root.getAttributes$();
de.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(4,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$Z,[this.root, newAttrs, true]));
attr.removeAttributes$javax_swing_text_AttributeSet(attr);
attr.addAttributes$javax_swing_text_AttributeSet(newAttrs);
for (var i=1; i < n; i++) {
this.insertElement$javax_swing_text_DefaultStyledDocument_ElementSpec(data[i]);
}
while (this.path.size$() != 0){
this.pop$();
}
this.endEdits$javax_swing_text_AbstractDocument_DefaultDocumentEvent(de);
this.insertOp=false;
});

Clazz.newMeth(C$, 'remove$I$I$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (offset, length, de) {
this.beginEdits$I$I(offset, length);
this.removeUpdate$();
this.endEdits$javax_swing_text_AbstractDocument_DefaultDocumentEvent(de);
});

Clazz.newMeth(C$, 'change$I$I$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (offset, length, de) {
this.beginEdits$I$I(offset, length);
this.changeUpdate$();
this.endEdits$javax_swing_text_AbstractDocument_DefaultDocumentEvent(de);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_text_DefaultStyledDocument_ElementSpecA',  function (data) {
var elem=this.root;
var index=elem.getElementIndex$I(this.offset);
while (!elem.isLeaf$()){
var child=elem.getElement$I(index);
this.push$javax_swing_text_Element$I(elem, (child.isLeaf$() ? index : index + 1));
elem=child;
index=elem.getElementIndex$I(this.offset);
}
this.insertPath=Clazz.array($I$(5), [this.path.size$()]);
this.path.copyInto$OA(this.insertPath);
this.createdFracture=false;
var i;
this.recreateLeafs=false;
if (data[0].getType$() == 3) {
this.insertFirstContent$javax_swing_text_DefaultStyledDocument_ElementSpecA(data);
this.pos+=data[0].getLength$();
i=1;
} else {
this.fractureDeepestLeaf$javax_swing_text_DefaultStyledDocument_ElementSpecA(data);
i=0;
}var n=data.length;
for (; i < n; i++) {
this.insertElement$javax_swing_text_DefaultStyledDocument_ElementSpec(data[i]);
}
if (!this.createdFracture) this.fracture$I(-1);
while (this.path.size$() != 0){
this.pop$();
}
if (this.offsetLastIndex && this.offsetLastIndexOnReplace ) {
++this.insertPath[this.insertPath.length - 1].index;
}for (var counter=this.insertPath.length - 1; counter >= 0; counter--) {
var change=this.insertPath[counter];
if (change.parent === this.fracturedParent ) change.added.addElement$O(this.fracturedChild);
if ((change.added.size$() > 0 || change.removed.size$() > 0 ) && !this.changes.contains$O(change) ) {
this.changes.addElement$O(change);
}}
if (this.offset == 0 && this.fracturedParent != null   && data[0].getType$() == 2 ) {
var counter=0;
while (counter < data.length && data[counter].getType$() == 2 ){
++counter;
}
var change=this.insertPath[this.insertPath.length - counter - 1 ];
change.removed.insertElementAt$O$I(change.parent.getElement$I(--change.index), 0);
}});

Clazz.newMeth(C$, 'removeUpdate$',  function () {
this.removeElements$javax_swing_text_Element$I$I(this.root, this.offset, this.offset + this.length);
});

Clazz.newMeth(C$, 'changeUpdate$',  function () {
var didEnd=this.split$I$I(this.offset, this.length);
if (!didEnd) {
while (this.path.size$() != 0){
this.pop$();
}
this.split$I$I(this.offset + this.length, 0);
}while (this.path.size$() != 0){
this.pop$();
}
});

Clazz.newMeth(C$, 'split$I$I',  function (offs, len) {
var splitEnd=false;
var e=this.root;
var index=e.getElementIndex$I(offs);
while (!e.isLeaf$()){
this.push$javax_swing_text_Element$I(e, index);
e=e.getElement$I(index);
index=e.getElementIndex$I(offs);
}
var ec=this.path.peek$();
var child=ec.parent.getElement$I(ec.index);
if (child.getStartOffset$() < offs && offs < child.getEndOffset$() ) {
var index0=ec.index;
var index1=index0;
if (((offs + len) < ec.parent.getEndOffset$()) && (len != 0) ) {
index1=ec.parent.getElementIndex$I(offs + len);
if (index1 == index0) {
ec.removed.addElement$O(child);
e=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), child.getStartOffset$(), offs]);
ec.added.addElement$O(e);
e=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), offs, offs + len]);
ec.added.addElement$O(e);
e=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), offs + len, child.getEndOffset$()]);
ec.added.addElement$O(e);
return true;
} else {
child=ec.parent.getElement$I(index1);
if ((offs + len) == child.getStartOffset$()) {
index1=index0;
}}splitEnd=true;
}this.pos=offs;
child=ec.parent.getElement$I(index0);
ec.removed.addElement$O(child);
e=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), child.getStartOffset$(), this.pos]);
ec.added.addElement$O(e);
e=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), this.pos, child.getEndOffset$()]);
ec.added.addElement$O(e);
for (var i=index0 + 1; i < index1; i++) {
child=ec.parent.getElement$I(i);
ec.removed.addElement$O(child);
ec.added.addElement$O(child);
}
if (index1 != index0) {
child=ec.parent.getElement$I(index1);
this.pos=offs + len;
ec.removed.addElement$O(child);
e=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), child.getStartOffset$(), this.pos]);
ec.added.addElement$O(e);
e=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), this.pos, child.getEndOffset$()]);
ec.added.addElement$O(e);
}}return splitEnd;
});

Clazz.newMeth(C$, 'endEdits$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (de) {
var n=this.changes.size$();
for (var i=0; i < n; i++) {
var ec=this.changes.elementAt$I(i);
var removed=Clazz.array($I$(6), [ec.removed.size$()]);
ec.removed.copyInto$OA(removed);
var added=Clazz.array($I$(6), [ec.added.size$()]);
ec.added.copyInto$OA(added);
var index=ec.index;
(ec.parent).replace$I$I$javax_swing_text_ElementA(index, removed.length, added);
var ee=Clazz.new_($I$(7,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[ec.parent, index, removed, added]);
de.addEdit$javax_swing_undo_UndoableEdit(ee);
}
this.changes.removeAllElements$();
this.path.removeAllElements$();
});

Clazz.newMeth(C$, 'beginEdits$I$I',  function (offset, length) {
this.offset=offset;
this.length=length;
this.endOffset=offset + length;
this.pos=offset;
if (this.changes == null ) {
this.changes=Clazz.new_($I$(1,1));
} else {
this.changes.removeAllElements$();
}if (this.path == null ) {
this.path=Clazz.new_($I$(2,1));
} else {
this.path.removeAllElements$();
}this.fracturedParent=null;
this.fracturedChild=null;
this.offsetLastIndex=this.offsetLastIndexOnReplace=false;
});

Clazz.newMeth(C$, 'push$javax_swing_text_Element$I$Z',  function (e, index, isFracture) {
var ec=Clazz.new_($I$(5,1).c$$javax_swing_text_Element$I$Z,[this, null, e, index, isFracture]);
this.path.push$O(ec);
});

Clazz.newMeth(C$, 'push$javax_swing_text_Element$I',  function (e, index) {
this.push$javax_swing_text_Element$I$Z(e, index, false);
});

Clazz.newMeth(C$, 'pop$',  function () {
var ec=this.path.peek$();
this.path.pop$();
if ((ec.added.size$() > 0) || (ec.removed.size$() > 0) ) {
this.changes.addElement$O(ec);
} else if (!this.path.isEmpty$()) {
var e=ec.parent;
if (e.getElementCount$() == 0) {
ec=this.path.peek$();
ec.added.removeElement$O(e);
}}});

Clazz.newMeth(C$, 'advance$I',  function (n) {
this.pos+=n;
});

Clazz.newMeth(C$, 'insertElement$javax_swing_text_DefaultStyledDocument_ElementSpec',  function (es) {
var ec=this.path.peek$();
switch (es.getType$()) {
case 1:
switch (es.getDirection$()) {
case 5:
var parent=ec.parent.getElement$I(ec.index);
if (parent.isLeaf$()) {
if ((ec.index + 1) < ec.parent.getElementCount$()) parent=ec.parent.getElement$I(ec.index + 1);
 else throw Clazz.new_($I$(8,1).c$$S,["Join next to leaf"]);
}this.push$javax_swing_text_Element$I$Z(parent, 0, true);
break;
case 7:
if (!this.createdFracture) {
this.fracture$I(this.path.size$() - 1);
}if (!ec.isFracture) {
this.push$javax_swing_text_Element$I$Z(this.fracturedChild, 0, true);
} else this.push$javax_swing_text_Element$I$Z(ec.parent.getElement$I(0), 0, true);
break;
default:
var belem=this.b$['javax.swing.text.AbstractDocument'].createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, es.getAttributes$()]);
ec.added.addElement$O(belem);
this.push$javax_swing_text_Element$I(belem, 0);
break;
}
break;
case 2:
this.pop$();
break;
case 3:
var len=es.getLength$();
if (es.getDirection$() != 5) {
var leaf=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, es.getAttributes$(), this.pos, this.pos + len]);
ec.added.addElement$O(leaf);
} else {
if (!ec.isFracture) {
var first=null;
if (this.insertPath != null ) {
for (var counter=this.insertPath.length - 1; counter >= 0; counter--) {
if (this.insertPath[counter] === ec ) {
if (counter != (this.insertPath.length - 1)) first=ec.parent.getElement$I(ec.index);
break;
}}
}if (first == null ) first=ec.parent.getElement$I(ec.index + 1);
var leaf=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, first.getAttributes$(), this.pos, first.getEndOffset$()]);
ec.added.addElement$O(leaf);
ec.removed.addElement$O(first);
} else {
var first=ec.parent.getElement$I(0);
var leaf=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, first.getAttributes$(), this.pos, first.getEndOffset$()]);
ec.added.addElement$O(leaf);
ec.removed.addElement$O(first);
}}this.pos+=len;
break;
}
});

Clazz.newMeth(C$, 'removeElements$javax_swing_text_Element$I$I',  function (elem, rmOffs0, rmOffs1) {
if (!elem.isLeaf$()) {
var index0=elem.getElementIndex$I(rmOffs0);
var index1=elem.getElementIndex$I(rmOffs1);
this.push$javax_swing_text_Element$I(elem, index0);
var ec=this.path.peek$();
if (index0 == index1) {
var child0=elem.getElement$I(index0);
if (rmOffs0 <= child0.getStartOffset$() && rmOffs1 >= child0.getEndOffset$() ) {
ec.removed.addElement$O(child0);
} else if (this.removeElements$javax_swing_text_Element$I$I(child0, rmOffs0, rmOffs1)) {
ec.removed.addElement$O(child0);
}} else {
var child0=elem.getElement$I(index0);
var child1=elem.getElement$I(index1);
var containsOffs1=(rmOffs1 < elem.getEndOffset$());
if (containsOffs1 && this.canJoin$javax_swing_text_Element$javax_swing_text_Element(child0, child1) ) {
for (var i=index0; i <= index1; i++) {
ec.removed.addElement$O(elem.getElement$I(i));
}
var e=this.join$javax_swing_text_Element$javax_swing_text_Element$javax_swing_text_Element$I$I(elem, child0, child1, rmOffs0, rmOffs1);
ec.added.addElement$O(e);
} else {
var rmIndex0=index0 + 1;
var rmIndex1=index1 - 1;
if (child0.getStartOffset$() == rmOffs0 || (index0 == 0 && child0.getStartOffset$() > rmOffs0  && child0.getEndOffset$() <= rmOffs1 ) ) {
child0=null;
rmIndex0=index0;
}if (!containsOffs1) {
child1=null;
++rmIndex1;
} else if (child1.getStartOffset$() == rmOffs1) {
child1=null;
}if (rmIndex0 <= rmIndex1) {
ec.index=rmIndex0;
}for (var i=rmIndex0; i <= rmIndex1; i++) {
ec.removed.addElement$O(elem.getElement$I(i));
}
if (child0 != null ) {
if (this.removeElements$javax_swing_text_Element$I$I(child0, rmOffs0, rmOffs1)) {
ec.removed.insertElementAt$O$I(child0, 0);
ec.index=index0;
}}if (child1 != null ) {
if (this.removeElements$javax_swing_text_Element$I$I(child1, rmOffs0, rmOffs1)) {
ec.removed.addElement$O(child1);
}}}}this.pop$();
if (elem.getElementCount$() == (ec.removed.size$() - ec.added.size$())) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'canJoin$javax_swing_text_Element$javax_swing_text_Element',  function (e0, e1) {
if ((e0 == null ) || (e1 == null ) ) {
return false;
}var leaf0=e0.isLeaf$();
var leaf1=e1.isLeaf$();
if (leaf0 != leaf1 ) {
return false;
}if (leaf0) {
return e0.getAttributes$().isEqual$javax_swing_text_AttributeSet(e1.getAttributes$());
}var name0=e0.getName$();
var name1=e1.getName$();
if (name0 != null ) {
return name0.equals$O(name1);
}if (name1 != null ) {
return name1.equals$O(name0);
}return true;
});

Clazz.newMeth(C$, 'join$javax_swing_text_Element$javax_swing_text_Element$javax_swing_text_Element$I$I',  function (p, left, right, rmOffs0, rmOffs1) {
if (left.isLeaf$() && right.isLeaf$() ) {
return this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [p, left.getAttributes$(), left.getStartOffset$(), right.getEndOffset$()]);
} else if ((!left.isLeaf$()) && (!right.isLeaf$()) ) {
var to=this.b$['javax.swing.text.AbstractDocument'].createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [p, left.getAttributes$()]);
var ljIndex=left.getElementIndex$I(rmOffs0);
var rjIndex=right.getElementIndex$I(rmOffs1);
var lj=left.getElement$I(ljIndex);
if (lj.getStartOffset$() >= rmOffs0) {
lj=null;
}var rj=right.getElement$I(rjIndex);
if (rj.getStartOffset$() == rmOffs1) {
rj=null;
}var children=Clazz.new_($I$(1,1));
for (var i=0; i < ljIndex; i++) {
children.addElement$O(this.clone$javax_swing_text_Element$javax_swing_text_Element(to, left.getElement$I(i)));
}
if (this.canJoin$javax_swing_text_Element$javax_swing_text_Element(lj, rj)) {
var e=this.join$javax_swing_text_Element$javax_swing_text_Element$javax_swing_text_Element$I$I(to, lj, rj, rmOffs0, rmOffs1);
children.addElement$O(e);
} else {
if (lj != null ) {
children.addElement$O(this.cloneAsNecessary$javax_swing_text_Element$javax_swing_text_Element$I$I(to, lj, rmOffs0, rmOffs1));
}if (rj != null ) {
children.addElement$O(this.cloneAsNecessary$javax_swing_text_Element$javax_swing_text_Element$I$I(to, rj, rmOffs0, rmOffs1));
}}var n=right.getElementCount$();
for (var i=(rj == null ) ? rjIndex : rjIndex + 1; i < n; i++) {
children.addElement$O(this.clone$javax_swing_text_Element$javax_swing_text_Element(to, right.getElement$I(i)));
}
var c=Clazz.array($I$(6), [children.size$()]);
children.copyInto$OA(c);
(to).replace$I$I$javax_swing_text_ElementA(0, 0, c);
return to;
} else {
throw Clazz.new_($I$(8,1).c$$S,["No support to join leaf element with non-leaf element"]);
}});

Clazz.newMeth(C$, 'clone$javax_swing_text_Element$javax_swing_text_Element',  function (parent, clonee) {
if (clonee.isLeaf$()) {
return this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, clonee.getAttributes$(), clonee.getStartOffset$(), clonee.getEndOffset$()]);
}var e=this.b$['javax.swing.text.AbstractDocument'].createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, clonee.getAttributes$()]);
var n=clonee.getElementCount$();
var children=Clazz.array($I$(6), [n]);
for (var i=0; i < n; i++) {
children[i]=this.clone$javax_swing_text_Element$javax_swing_text_Element(e, clonee.getElement$I(i));
}
(e).replace$I$I$javax_swing_text_ElementA(0, 0, children);
return e;
});

Clazz.newMeth(C$, 'cloneAsNecessary$javax_swing_text_Element$javax_swing_text_Element$I$I',  function (parent, clonee, rmOffs0, rmOffs1) {
if (clonee.isLeaf$()) {
return this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, clonee.getAttributes$(), clonee.getStartOffset$(), clonee.getEndOffset$()]);
}var e=this.b$['javax.swing.text.AbstractDocument'].createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, clonee.getAttributes$()]);
var n=clonee.getElementCount$();
var childrenList=Clazz.new_($I$(9,1).c$$I,[n]);
for (var i=0; i < n; i++) {
var elem=clonee.getElement$I(i);
if (elem.getStartOffset$() < rmOffs0 || elem.getEndOffset$() > rmOffs1 ) {
childrenList.add$O(this.cloneAsNecessary$javax_swing_text_Element$javax_swing_text_Element$I$I(e, elem, rmOffs0, rmOffs1));
}}
var children=Clazz.array($I$(6), [childrenList.size$()]);
children=childrenList.toArray$OA(children);
(e).replace$I$I$javax_swing_text_ElementA(0, 0, children);
return e;
});

Clazz.newMeth(C$, 'fracture$I',  function (depth) {
var cLength=this.insertPath.length;
var lastIndex=-1;
var needRecreate=this.recreateLeafs;
var lastChange=this.insertPath[cLength - 1];
var childAltered=((lastChange.index + 1) < lastChange.parent.getElementCount$());
var deepestAlteredIndex=(needRecreate) ? cLength : -1;
var lastAlteredIndex=cLength - 1;
this.createdFracture=true;
for (var counter=cLength - 2; counter >= 0; counter--) {
var change=this.insertPath[counter];
if (change.added.size$() > 0 || counter == depth ) {
lastIndex=counter;
if (!needRecreate && childAltered ) {
needRecreate=true;
if (deepestAlteredIndex == -1) deepestAlteredIndex=lastAlteredIndex + 1;
}}if (!childAltered && change.index < change.parent.getElementCount$() ) {
childAltered=true;
lastAlteredIndex=counter;
}}
if (needRecreate) {
if (lastIndex == -1) lastIndex=cLength - 1;
this.fractureFrom$javax_swing_text_DefaultStyledDocument_ElementBuffer_ElemChangesA$I$I(this.insertPath, lastIndex, deepestAlteredIndex);
}});

Clazz.newMeth(C$, 'fractureFrom$javax_swing_text_DefaultStyledDocument_ElementBuffer_ElemChangesA$I$I',  function (changed, startIndex, endFractureIndex) {
var change=changed[startIndex];
var child;
var newChild;
var changeLength=changed.length;
if ((startIndex + 1) == changeLength) child=change.parent.getElement$I(change.index);
 else child=change.parent.getElement$I(change.index - 1);
if (child.isLeaf$()) {
newChild=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [change.parent, child.getAttributes$(), Math.max(this.endOffset, child.getStartOffset$()), child.getEndOffset$()]);
} else {
newChild=this.b$['javax.swing.text.AbstractDocument'].createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [change.parent, child.getAttributes$()]);
}this.fracturedParent=change.parent;
this.fracturedChild=newChild;
var parent=newChild;
while (++startIndex < endFractureIndex){
var isEnd=((startIndex + 1) == endFractureIndex);
var isEndLeaf=((startIndex + 1) == changeLength);
change=changed[startIndex];
if (isEnd) {
if (this.offsetLastIndex || !isEndLeaf ) child=null;
 else child=change.parent.getElement$I(change.index);
} else {
child=change.parent.getElement$I(change.index - 1);
}if (child != null ) {
if (child.isLeaf$()) {
newChild=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, child.getAttributes$(), Math.max(this.endOffset, child.getStartOffset$()), child.getEndOffset$()]);
} else {
newChild=this.b$['javax.swing.text.AbstractDocument'].createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, child.getAttributes$()]);
}} else newChild=null;
var kidsToMove=change.parent.getElementCount$() - change.index;
var kids;
var moveStartIndex;
var kidStartIndex=1;
if (newChild == null ) {
if (isEndLeaf) {
--kidsToMove;
moveStartIndex=change.index + 1;
} else {
moveStartIndex=change.index;
}kidStartIndex=0;
kids=Clazz.array($I$(6), [kidsToMove]);
} else {
if (!isEnd) {
++kidsToMove;
moveStartIndex=change.index;
} else {
moveStartIndex=change.index + 1;
}kids=Clazz.array($I$(6), [kidsToMove]);
kids[0]=newChild;
}for (var counter=kidStartIndex; counter < kidsToMove; counter++) {
var toMove=change.parent.getElement$I(moveStartIndex++);
kids[counter]=this.recreateFracturedElement$javax_swing_text_Element$javax_swing_text_Element(parent, toMove);
change.removed.addElement$O(toMove);
}
(parent).replace$I$I$javax_swing_text_ElementA(0, 0, kids);
parent=newChild;
}
});

Clazz.newMeth(C$, 'recreateFracturedElement$javax_swing_text_Element$javax_swing_text_Element',  function (parent, toDuplicate) {
if (toDuplicate.isLeaf$()) {
return this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, toDuplicate.getAttributes$(), Math.max(toDuplicate.getStartOffset$(), this.endOffset), toDuplicate.getEndOffset$()]);
}var newParent=this.b$['javax.swing.text.AbstractDocument'].createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [parent, toDuplicate.getAttributes$()]);
var childCount=toDuplicate.getElementCount$();
var newKids=Clazz.array($I$(6), [childCount]);
for (var counter=0; counter < childCount; counter++) {
newKids[counter]=this.recreateFracturedElement$javax_swing_text_Element$javax_swing_text_Element(newParent, toDuplicate.getElement$I(counter));
}
(newParent).replace$I$I$javax_swing_text_ElementA(0, 0, newKids);
return newParent;
});

Clazz.newMeth(C$, 'fractureDeepestLeaf$javax_swing_text_DefaultStyledDocument_ElementSpecA',  function (specs) {
var ec=this.path.peek$();
var child=ec.parent.getElement$I(ec.index);
if (this.offset != 0) {
var newChild=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), child.getStartOffset$(), this.offset]);
ec.added.addElement$O(newChild);
}ec.removed.addElement$O(child);
if (child.getEndOffset$() != this.endOffset) this.recreateLeafs=true;
 else this.offsetLastIndex=true;
});

Clazz.newMeth(C$, 'insertFirstContent$javax_swing_text_DefaultStyledDocument_ElementSpecA',  function (specs) {
var firstSpec=specs[0];
var ec=this.path.peek$();
var child=ec.parent.getElement$I(ec.index);
var firstEndOffset=this.offset + firstSpec.getLength$();
var isOnlyContent=(specs.length == 1);
switch (firstSpec.getDirection$()) {
case 4:
if (child.getEndOffset$() != firstEndOffset && !isOnlyContent ) {
var newE=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), child.getStartOffset$(), firstEndOffset]);
ec.added.addElement$O(newE);
ec.removed.addElement$O(child);
if (child.getEndOffset$() != this.endOffset) this.recreateLeafs=true;
 else this.offsetLastIndex=true;
} else {
this.offsetLastIndex=true;
this.offsetLastIndexOnReplace=true;
}break;
case 5:
if (this.offset != 0) {
var newE=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), child.getStartOffset$(), this.offset]);
ec.added.addElement$O(newE);
var nextChild=ec.parent.getElement$I(ec.index + 1);
if (isOnlyContent) newE=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, nextChild.getAttributes$(), this.offset, nextChild.getEndOffset$()]);
 else newE=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, nextChild.getAttributes$(), this.offset, firstEndOffset]);
ec.added.addElement$O(newE);
ec.removed.addElement$O(child);
ec.removed.addElement$O(nextChild);
}break;
default:
if (child.getStartOffset$() != this.offset) {
var newE=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, child.getAttributes$(), child.getStartOffset$(), this.offset]);
ec.added.addElement$O(newE);
}ec.removed.addElement$O(child);
var newE=this.b$['javax.swing.text.AbstractDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [ec.parent, firstSpec.getAttributes$(), this.offset, firstEndOffset]);
ec.added.addElement$O(newE);
if (child.getEndOffset$() != this.endOffset) {
this.recreateLeafs=true;
} else {
this.offsetLastIndex=true;
}break;
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument.ElementBuffer, "ElemChanges", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isFracture'],'I',['index'],'O',['parent','javax.swing.text.Element','added','java.util.Vector','+removed']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$I$Z',  function (parent, index, isFracture) {
;C$.$init$.apply(this);
this.parent=parent;
this.index=index;
this.isFracture=isFracture;
this.added=Clazz.new_($I$(1,1));
this.removed=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "added: " + this.added + "\nremoved: " + this.removed + "\n" ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "AttributeUndoableEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isReplacing'],'O',['newAttributes','javax.swing.text.AttributeSet','+copy','element','javax.swing.text.Element']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_AttributeSet$Z',  function (element, newAttributes, isReplacing) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.element=element;
this.newAttributes=newAttributes;
this.isReplacing=isReplacing;
this.copy=element.getAttributes$().copyAttributes$();
}, 1);

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
var as=this.element.getAttributes$();
if (this.isReplacing) as.removeAttributes$javax_swing_text_AttributeSet(as);
as.addAttributes$javax_swing_text_AttributeSet(this.newAttributes);
});

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
var as=this.element.getAttributes$();
as.removeAttributes$javax_swing_text_AttributeSet(as);
as.addAttributes$javax_swing_text_AttributeSet(this.copy);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "StyleChangeUndoableEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['element','javax.swing.text.AbstractDocument.AbstractElement','newStyle','javax.swing.text.Style','oldStyle','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AbstractDocument_AbstractElement$javax_swing_text_Style',  function (element, newStyle) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.element=element;
this.newStyle=newStyle;
this.oldStyle=element.getResolveParent$();
}, 1);

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
this.element.setResolveParent$javax_swing_text_AttributeSet(this.newStyle);
});

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
this.element.setResolveParent$javax_swing_text_AttributeSet(this.oldStyle);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "AbstractChangeHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['doc','javax.swing.text.DefaultStyledDocument']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_DefaultStyledDocument',  function (d) {
;C$.$init$.apply(this);
this.doc=d;
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var d=this.doc;
if (d != null ) {
this.fireStateChanged$javax_swing_text_DefaultStyledDocument$javax_swing_event_ChangeEvent(d, e);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "StyleChangeHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.DefaultStyledDocument','.AbstractChangeHandler']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_DefaultStyledDocument',  function (d) {
;C$.superclazz.c$$javax_swing_text_DefaultStyledDocument.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fireStateChanged$javax_swing_text_DefaultStyledDocument$javax_swing_event_ChangeEvent',  function (d, e) {
var source=e.getSource$();
if (Clazz.instanceOf(source, "javax.swing.text.Style")) {
d.styleChanged$javax_swing_text_Style(source);
} else {
d.styleChanged$javax_swing_text_Style(null);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "StyleContextChangeHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.DefaultStyledDocument','.AbstractChangeHandler']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_DefaultStyledDocument',  function (d) {
;C$.superclazz.c$$javax_swing_text_DefaultStyledDocument.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fireStateChanged$javax_swing_text_DefaultStyledDocument$javax_swing_event_ChangeEvent',  function (d, e) {
d.updateStylesListeningTo$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultStyledDocument, "ChangeUpdateRunnable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isPending=false;
},1);

C$.$fields$=[['Z',['isPending']]]

Clazz.newMeth(C$, 'run$',  function () {
{
this.isPending=false;
}try {
this.b$['javax.swing.text.AbstractDocument'].writeLock$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
var dde=Clazz.new_([this, null, 0, this.b$['javax.swing.text.AbstractDocument'].getLength$.apply(this.b$['javax.swing.text.AbstractDocument'], []), $I$(11).CHANGE],$I$(10,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
dde.end$();
this.b$['javax.swing.text.AbstractDocument'].fireChangedUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [dde]);
} finally {
this.b$['javax.swing.text.AbstractDocument'].writeUnlock$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

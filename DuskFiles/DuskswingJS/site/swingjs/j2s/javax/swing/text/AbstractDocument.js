(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},p$2={},I$=[[0,'javax.swing.text.StyleConstants',['javax.swing.text.AbstractDocument','.AbstractElement'],'java.util.Vector','javax.swing.text.StateInvariantError','java.util.Hashtable',['javax.swing.text.AbstractDocument','.UndoRedoDocumentEvent'],['javax.swing.event.DocumentEvent','.EventType'],'javax.swing.UIManager','javax.swing.event.EventListenerList','javax.swing.text.StyleContext','javax.swing.event.DocumentListener','javax.swing.event.UndoableEditListener',['javax.swing.text.AbstractDocument','.DefaultDocumentEvent'],'javax.swing.text.Utilities','javax.swing.event.UndoableEditEvent','javax.swing.text.Element',['javax.swing.text.AbstractDocument','.DefaultFilterBypass'],'javax.swing.text.SegmentCache',['javax.swing.text.AbstractDocument','.LeafElement'],['javax.swing.text.AbstractDocument','.BranchElement']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractDocument", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.swing.text.Document');
C$.$classes$=[['Content',9],['AttributeContext',9],['AbstractElement',1025],['BranchElement',1],['LeafElement',1],['DefaultDocumentEvent',1],['UndoRedoDocumentEvent',0],['ElementEdit',9],['DefaultFilterBypass',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.documentProperties=null;
this.listenerList=Clazz.new_($I$(9,1));
},1);

C$.$fields$=[['Z',['isAWT','秘replacing'],'I',['currentDot','currentMark'],'O',['documentProperties','java.util.Dictionary','listenerList','javax.swing.event.EventListenerList','data','javax.swing.text.AbstractDocument.Content','context','javax.swing.text.AbstractDocument.AttributeContext','bidiRoot','javax.swing.text.AbstractDocument.BranchElement','documentFilter','javax.swing.text.DocumentFilter','filterBypass','javax.swing.text.DocumentFilter.FilterBypass','editor','javax.swing.text.JTextComponent']]
,['O',['MultiByteProperty','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AbstractDocument_Content',  function (data) {
C$.c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_AbstractDocument_AttributeContext.apply(this, [data, $I$(10).getDefaultStyleContext$()]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_AbstractDocument_AttributeContext',  function (data, context) {
;C$.$init$.apply(this);
this.data=data;
this.context=context;
}, 1);

Clazz.newMeth(C$, 'getDocumentProperties$',  function () {
if (this.documentProperties == null ) {
this.documentProperties=Clazz.new_($I$(5,1).c$$I,[2]);
}return this.documentProperties;
});

Clazz.newMeth(C$, 'setDocumentProperties$java_util_Dictionary',  function (x) {
this.documentProperties=x;
});

Clazz.newMeth(C$, 'fireInsertUpdate$javax_swing_event_DocumentEvent',  function (e) {
try {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(11),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']) ) {
(listeners[i + 1]).insertUpdate$javax_swing_event_DocumentEvent(e);
}}
} finally {
}
});

Clazz.newMeth(C$, 'fireChangedUpdate$javax_swing_event_DocumentEvent',  function (e) {
try {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(11),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']) ) {
(listeners[i + 1]).changedUpdate$javax_swing_event_DocumentEvent(e);
}}
} finally {
}
});

Clazz.newMeth(C$, 'fireRemoveUpdate$javax_swing_event_DocumentEvent',  function (e) {
try {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(11),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']) ) {
(listeners[i + 1]).removeUpdate$javax_swing_event_DocumentEvent(e);
}}
} finally {
}
});

Clazz.newMeth(C$, 'fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(12),['undoableEditHappened$javax_swing_event_UndoableEditEvent']) ) {
(listeners[i + 1]).undoableEditHappened$javax_swing_event_UndoableEditEvent(e);
}}
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'getAsynchronousLoadPriority$',  function () {
var loadPriority=this.getProperty$O("load priority");
if (loadPriority != null ) {
return loadPriority.intValue$();
}return -1;
});

Clazz.newMeth(C$, 'setAsynchronousLoadPriority$I',  function (p) {
var loadPriority=(p >= 0) ?  new Integer(p) : null;
this.putProperty$O$O("load priority", loadPriority);
});

Clazz.newMeth(C$, 'setDocumentFilter$javax_swing_text_DocumentFilter',  function (filter) {
this.documentFilter=filter;
});

Clazz.newMeth(C$, 'getDocumentFilter$',  function () {
return this.documentFilter;
});

Clazz.newMeth(C$, 'render$Runnable',  function (r) {
try {
r.run$();
} finally {
}
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.data.length$() - 1;
});

Clazz.newMeth(C$, 'addDocumentListener$javax_swing_event_DocumentListener',  function (listener) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(11),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']), listener);
});

Clazz.newMeth(C$, 'removeDocumentListener$javax_swing_event_DocumentListener',  function (listener) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(11),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']), listener);
});

Clazz.newMeth(C$, 'getDocumentListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(11),['changedUpdate$javax_swing_event_DocumentEvent','insertUpdate$javax_swing_event_DocumentEvent','removeUpdate$javax_swing_event_DocumentEvent']));
});

Clazz.newMeth(C$, 'addUndoableEditListener$javax_swing_event_UndoableEditListener',  function (listener) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(12),['undoableEditHappened$javax_swing_event_UndoableEditEvent']), listener);
});

Clazz.newMeth(C$, 'removeUndoableEditListener$javax_swing_event_UndoableEditListener',  function (listener) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(12),['undoableEditHappened$javax_swing_event_UndoableEditEvent']), listener);
});

Clazz.newMeth(C$, 'getUndoableEditListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(12),['undoableEditHappened$javax_swing_event_UndoableEditEvent']));
});

Clazz.newMeth(C$, 'getProperty$O',  function (key) {
return this.getDocumentProperties$().get$O(key);
});

Clazz.newMeth(C$, 'putProperty$O$O',  function (key, value) {
if (value != null ) {
this.getDocumentProperties$().put$O$O(key, value);
} else {
this.getDocumentProperties$().remove$O(key);
}});

Clazz.newMeth(C$, 'remove$I$I',  function (offs, len) {
var filter=this.getDocumentFilter$();
this.writeLock$();
try {
if (filter != null ) {
filter.remove$javax_swing_text_DocumentFilter_FilterBypass$I$I(p$2.getFilterBypass.apply(this, []), offs, len);
} else {
this.handleRemove$I$I(offs, len);
}} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'handleRemove$I$I',  function (offs, len) {
if (len > 0) {
if (offs < 0 || (offs + len) > this.getLength$() ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid remove", this.getLength$() + 1]);
}var chng=Clazz.new_([this, null, offs, len, $I$(7).REMOVE],$I$(13,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
var isComposedTextElement=false;
isComposedTextElement=$I$(14).isComposedTextElement$javax_swing_text_Document$I(this, offs);
this.removeUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent(chng);
var u=this.data.remove$I$I(offs, len);
if (u != null ) {
chng.addEdit$javax_swing_undo_UndoableEdit(u);
}this.postRemoveUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent(chng);
chng.end$();
this.fireRemoveUpdate$javax_swing_event_DocumentEvent(chng);
if ((u != null ) && !isComposedTextElement ) {
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(15,1).c$$O$javax_swing_undo_UndoableEdit,[this, chng]));
}}});

Clazz.newMeth(C$, 'replace$I$I$S$javax_swing_text_AttributeSet',  function (offset, length, text, attrs) {
if (length == 0 && (text == null  || text.length$() == 0 ) ) {
return;
}var filter=this.getDocumentFilter$();
this.writeLock$();
try {
if (filter != null ) {
filter.replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet(p$2.getFilterBypass.apply(this, []), offset, length, text, attrs);
} else {
if (length > 0) {
this.remove$I$I(offset, length);
this.秘replacing=true;
} else {
this.秘replacing=false;
}if (text != null  && text.length$() > 0 ) {
this.insertString$I$S$javax_swing_text_AttributeSet(offset, text, attrs);
}this.秘replacing=false;
}} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'insertString$I$S$javax_swing_text_AttributeSet',  function (offs, str, a) {
if ((str == null ) || (str.length$() == 0) ) {
return;
}var filter=this.getDocumentFilter$();
this.writeLock$();
try {
if (filter != null ) {
filter.insertString$javax_swing_text_DocumentFilter_FilterBypass$I$S$javax_swing_text_AttributeSet(p$2.getFilterBypass.apply(this, []), offs, str, a);
} else {
this.handleInsertString$I$S$javax_swing_text_AttributeSet(offs, str, a);
}} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'handleInsertString$I$S$javax_swing_text_AttributeSet',  function (offs, str, a) {
if ((str == null ) || (str.length$() == 0) ) {
return;
}var u=this.data.insertString$I$S(offs, str);
var e=Clazz.new_([this, null, offs, str.length$(), $I$(7).INSERT],$I$(13,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
if (u != null ) {
e.addEdit$javax_swing_undo_UndoableEdit(u);
}this.insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet(e, a);
e.end$();
this.fireInsertUpdate$javax_swing_event_DocumentEvent(e);
if (u != null  && (a == null  || !a.isDefined$O($I$(1).ComposedTextAttribute) ) ) {
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(15,1).c$$O$javax_swing_undo_UndoableEdit,[this, e]));
}});

Clazz.newMeth(C$, 'getText$I$I',  function (offset, length) {
if (length < 0) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Length must be positive", length]);
}var str=this.data.getString$I$I(offset, length);
return str;
});

Clazz.newMeth(C$, 'getText$I$I$javax_swing_text_Segment',  function (offset, length, txt) {
if (length < 0) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Length must be positive", length]);
}this.data.getChars$I$I$javax_swing_text_Segment(offset, length, txt);
});

Clazz.newMeth(C$, 'createPosition$I',  function (offs) {
return this.data.createPosition$I(offs);
});

Clazz.newMeth(C$, 'getStartPosition$',  function () {
var p;
try {
p=this.createPosition$I(0);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
p=null;
} else {
throw bl;
}
}
return p;
});

Clazz.newMeth(C$, 'getEndPosition$',  function () {
var p;
try {
p=this.createPosition$I(this.data.length$());
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
p=null;
} else {
throw bl;
}
}
return p;
});

Clazz.newMeth(C$, 'getRootElements$',  function () {
var elems=Clazz.array($I$(16), [2]);
elems[0]=this.getDefaultRootElement$();
elems[1]=this.getBidiRootElement$();
return elems;
});

Clazz.newMeth(C$, 'getFilterBypass',  function () {
if (this.filterBypass == null ) {
this.filterBypass=Clazz.new_($I$(17,1),[this, null]);
}return this.filterBypass;
}, p$2);

Clazz.newMeth(C$, 'getBidiRootElement$',  function () {
return this.bidiRoot;
});

Clazz.newMeth(C$, 'isLeftToRight$I$I',  function (p0, p1) {
return true;
});

Clazz.newMeth(C$, 'getAttributeContext$',  function () {
return this.context;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet',  function (chng, attr) {
if (chng.type === $I$(7).INSERT  && chng.getLength$() > 0  && !Boolean.TRUE.equals$O(this.getProperty$O(C$.MultiByteProperty)) ) {
var segment=$I$(18).getSharedSegment$();
try {
this.getText$I$I$javax_swing_text_Segment(chng.getOffset$(), chng.getLength$(), segment);
segment.first$();
do {
if (segment.current$().$c() > 255) {
this.putProperty$O$O(C$.MultiByteProperty, Boolean.TRUE);
break;
}} while (segment.next$() != "\uffff");
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
$I$(18).releaseSharedSegment$javax_swing_text_Segment(segment);
}});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (chng) {
});

Clazz.newMeth(C$, 'postRemoveUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent',  function (chng) {
});

Clazz.newMeth(C$, 'getContent$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I',  function (parent, a, p0, p1) {
return Clazz.new_($I$(19,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I,[this, null, parent, a, p0, p1]);
});

Clazz.newMeth(C$, 'createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet',  function (parent, a) {
return Clazz.new_($I$(20,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet,[this, null, parent, a]);
});

Clazz.newMeth(C$, 'writeLock$',  function () {
});

Clazz.newMeth(C$, 'writeUnlock$',  function () {
});

Clazz.newMeth(C$, 'readLock$',  function () {
});

Clazz.newMeth(C$, 'readUnlock$',  function () {
});

Clazz.newMeth(C$, 'replace$I$I$S$javax_swing_text_AttributeSet$javax_swing_text_JTextComponent',  function (offset, length, text, attrs, c) {
this.editor=c;
this.isAWT=c.秘isAWT$();
if (this.isAWT) {
this.currentDot=c.getCaret$().getDot$();
this.currentMark=c.getCaret$().getMark$();
}this.replace$I$I$S$javax_swing_text_AttributeSet(offset, length, text, attrs);
});

Clazz.newMeth(C$, 'resetAWTScroll$',  function () {
if (this.isAWT) {
this.editor.getCaret$().setDot$I(this.currentMark);
this.editor.getCaret$().moveDot$I(this.currentDot);
}});

C$.$static$=function(){C$.$static$=0;
C$.MultiByteProperty="multiByte";
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.AbstractDocument, "Content", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.AbstractDocument, "AttributeContext", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractDocument, "AbstractElement", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.text.Element', 'javax.swing.text.MutableAttributeSet', 'javax.swing.tree.TreeNode']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parent','javax.swing.text.Element','attributes','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_AttributeSet',  function (parent, a) {
;C$.$init$.apply(this);
this.parent=parent;
this.attributes=this.b$['javax.swing.text.AbstractDocument'].getAttributeContext$.apply(this.b$['javax.swing.text.AbstractDocument'], []).getEmptySet$();
if (a != null ) {
this.addAttributes$javax_swing_text_AttributeSet(a);
}}, 1);

Clazz.newMeth(C$, 'getAttributeCount$',  function () {
return this.attributes.getAttributeCount$();
});

Clazz.newMeth(C$, 'isDefined$O',  function (attrName) {
return this.attributes.isDefined$O(attrName);
});

Clazz.newMeth(C$, 'isEqual$javax_swing_text_AttributeSet',  function (attr) {
return this.attributes.isEqual$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'copyAttributes$',  function () {
return this.attributes.copyAttributes$();
});

Clazz.newMeth(C$, 'getAttribute$O',  function (attrName) {
var value=this.attributes.getAttribute$O(attrName);
if (value == null ) {
var a=(this.parent != null ) ? this.parent.getAttributes$() : null;
if (a != null ) {
value=a.getAttribute$O(attrName);
}}return value;
});

Clazz.newMeth(C$, 'getAttributeNames$',  function () {
return this.attributes.getAttributeNames$();
});

Clazz.newMeth(C$, 'containsAttribute$O$O',  function (name, value) {
return this.attributes.containsAttribute$O$O(name, value);
});

Clazz.newMeth(C$, 'containsAttributes$javax_swing_text_AttributeSet',  function (attrs) {
return this.attributes.containsAttributes$javax_swing_text_AttributeSet(attrs);
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
var a=this.attributes.getResolveParent$();
if ((a == null ) && (this.parent != null ) ) {
a=this.parent.getAttributes$();
}return a;
});

Clazz.newMeth(C$, 'addAttribute$O$O',  function (name, value) {
p$1.checkForIllegalCast.apply(this, []);
var context=this.b$['javax.swing.text.AbstractDocument'].getAttributeContext$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
this.attributes=context.addAttribute$javax_swing_text_AttributeSet$O$O(this.attributes, name, value);
});

Clazz.newMeth(C$, 'addAttributes$javax_swing_text_AttributeSet',  function (attr) {
p$1.checkForIllegalCast.apply(this, []);
var context=this.b$['javax.swing.text.AbstractDocument'].getAttributeContext$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
this.attributes=context.addAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet(this.attributes, attr);
});

Clazz.newMeth(C$, 'removeAttribute$O',  function (name) {
p$1.checkForIllegalCast.apply(this, []);
var context=this.b$['javax.swing.text.AbstractDocument'].getAttributeContext$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
this.attributes=context.removeAttribute$javax_swing_text_AttributeSet$O(this.attributes, name);
});

Clazz.newMeth(C$, 'removeAttributes$java_util_Enumeration',  function (names) {
p$1.checkForIllegalCast.apply(this, []);
var context=this.b$['javax.swing.text.AbstractDocument'].getAttributeContext$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
this.attributes=context.removeAttributes$javax_swing_text_AttributeSet$java_util_Enumeration(this.attributes, names);
});

Clazz.newMeth(C$, 'removeAttributes$javax_swing_text_AttributeSet',  function (attrs) {
p$1.checkForIllegalCast.apply(this, []);
var context=this.b$['javax.swing.text.AbstractDocument'].getAttributeContext$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
if (attrs === this ) {
this.attributes=context.getEmptySet$();
} else {
this.attributes=context.removeAttributes$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet(this.attributes, attrs);
}});

Clazz.newMeth(C$, 'setResolveParent$javax_swing_text_AttributeSet',  function (parent) {
p$1.checkForIllegalCast.apply(this, []);
var context=this.b$['javax.swing.text.AbstractDocument'].getAttributeContext$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
if (parent != null ) {
this.attributes=context.addAttribute$javax_swing_text_AttributeSet$O$O(this.attributes, $I$(1).ResolveAttribute, parent);
} else {
this.attributes=context.removeAttribute$javax_swing_text_AttributeSet$O(this.attributes, $I$(1).ResolveAttribute);
}});

Clazz.newMeth(C$, 'checkForIllegalCast',  function () {
}, p$1);

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.b$['javax.swing.text.AbstractDocument'];
});

Clazz.newMeth(C$, 'getParentElement$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this;
});

Clazz.newMeth(C$, 'getName$',  function () {
if (this.attributes.isDefined$O("$ename")) {
return this.attributes.getAttribute$O("$ename");
}return null;
});

Clazz.newMeth(C$, 'getChildAt$I',  function (childIndex) {
return this.getElement$I(childIndex);
});

Clazz.newMeth(C$, 'getChildCount$',  function () {
return this.getElementCount$();
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.getParentElement$();
});

Clazz.newMeth(C$, 'getIndex$javax_swing_tree_TreeNode',  function (node) {
for (var counter=this.getChildCount$() - 1; counter >= 0; counter--) if (this.getChildAt$I(counter) === node ) return counter;

return -1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractDocument, "BranchElement", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.AbstractDocument','.AbstractElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nchildren','lastIndex'],'O',['children','javax.swing.text.AbstractDocument.AbstractElement[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_AttributeSet',  function (parent, a) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this,[parent, a]);C$.$init$.apply(this);
this.children=Clazz.array($I$(2), [1]);
this.nchildren=0;
this.lastIndex=-1;
}, 1);

Clazz.newMeth(C$, 'positionToElement$I',  function (pos) {
var index=this.getElementIndex$I(pos);
var child=this.children[index];
var p0=child.getStartOffset$();
var p1=child.getEndOffset$();
if ((pos >= p0) && (pos < p1) ) {
return child;
}return null;
});

Clazz.newMeth(C$, 'replace$I$I$javax_swing_text_ElementA',  function (offset, length, elems) {
var delta=elems.length - length;
var src=offset + length;
var nmove=this.nchildren - src;
var dest=src + delta;
if ((this.nchildren + delta) >= this.children.length) {
var newLength=Math.max(2 * this.children.length, this.nchildren + delta);
var newChildren=Clazz.array($I$(2), [newLength]);
System.arraycopy$O$I$O$I$I(this.children, 0, newChildren, 0, offset);
System.arraycopy$O$I$O$I$I(elems, 0, newChildren, offset, elems.length);
System.arraycopy$O$I$O$I$I(this.children, src, newChildren, dest, nmove);
this.children=newChildren;
} else {
System.arraycopy$O$I$O$I$I(this.children, src, this.children, dest, nmove);
System.arraycopy$O$I$O$I$I(elems, 0, this.children, offset, elems.length);
}this.nchildren=this.nchildren + delta;
});

Clazz.newMeth(C$, 'toString',  function () {
return "BranchElement(" + this.getName$() + ") " + this.getStartOffset$() + "," + this.getEndOffset$() + "\n" ;
});

Clazz.newMeth(C$, 'getName$',  function () {
var nm=C$.superclazz.prototype.getName$.apply(this, []);
if (nm == null ) {
nm="paragraph";
}return nm;
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
return this.children[0].getStartOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
var child=(this.nchildren > 0) ? this.children[this.nchildren - 1] : this.children[0];
return child.getEndOffset$();
});

Clazz.newMeth(C$, 'getElement$I',  function (index) {
if (index < this.nchildren) {
return this.children[index];
}return null;
});

Clazz.newMeth(C$, 'getElementCount$',  function () {
return this.nchildren;
});

Clazz.newMeth(C$, 'getElementIndex$I',  function (offset) {
var index;
var lower=0;
var upper=this.nchildren - 1;
var mid=0;
var p0=this.getStartOffset$();
var p1;
if (this.nchildren == 0) {
return 0;
}if (offset >= this.getEndOffset$()) {
return this.nchildren - 1;
}if ((this.lastIndex >= lower) && (this.lastIndex <= upper) ) {
var lastHit=this.children[this.lastIndex];
p0=lastHit.getStartOffset$();
p1=lastHit.getEndOffset$();
if ((offset >= p0) && (offset < p1) ) {
return this.lastIndex;
}if (offset < p0) {
upper=this.lastIndex;
} else {
lower=this.lastIndex;
}}while (lower <= upper){
mid=lower + (((upper - lower)/2|0));
var elem=this.children[mid];
p0=elem.getStartOffset$();
p1=elem.getEndOffset$();
if ((offset >= p0) && (offset < p1) ) {
index=mid;
this.lastIndex=index;
return index;
} else if (offset < p0) {
upper=mid - 1;
} else {
lower=mid + 1;
}}
if (offset < p0) {
index=mid;
} else {
index=mid + 1;
}this.lastIndex=index;
return index;
});

Clazz.newMeth(C$, 'isLeaf$',  function () {
return false;
});

Clazz.newMeth(C$, 'getAllowsChildren$',  function () {
return true;
});

Clazz.newMeth(C$, 'children$',  function () {
if (this.nchildren == 0) return null;
var tempVector=Clazz.new_($I$(3,1).c$$I,[this.nchildren]);
for (var counter=0; counter < this.nchildren; counter++) tempVector.addElement$O(this.children[counter]);

return tempVector.elements$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractDocument, "LeafElement", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.AbstractDocument','.AbstractElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['p0','javax.swing.text.Position','+p1']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I',  function (parent, a, offs0, offs1) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this,[parent, a]);C$.$init$.apply(this);
try {
this.p0=this.b$['javax.swing.text.AbstractDocument'].createPosition$I.apply(this.b$['javax.swing.text.AbstractDocument'], [offs0]);
this.p1=this.b$['javax.swing.text.AbstractDocument'].createPosition$I.apply(this.b$['javax.swing.text.AbstractDocument'], [offs1]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
this.p0=null;
this.p1=null;
throw Clazz.new_($I$(4,1).c$$S,["Can\'t create Position references"]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "LeafElement(" + this.getName$() + ") " + this.p0 + "," + this.p1 + "\n" ;
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
return this.p0.getOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
return this.p1.getOffset$();
});

Clazz.newMeth(C$, 'getName$',  function () {
var nm=C$.superclazz.prototype.getName$.apply(this, []);
if (nm == null ) {
nm="content";
}return nm;
});

Clazz.newMeth(C$, 'getElementIndex$I',  function (pos) {
return -1;
});

Clazz.newMeth(C$, 'getElement$I',  function (index) {
return null;
});

Clazz.newMeth(C$, 'getElementCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isLeaf$',  function () {
return true;
});

Clazz.newMeth(C$, 'getAllowsChildren$',  function () {
return false;
});

Clazz.newMeth(C$, 'children$',  function () {
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractDocument, "DefaultDocumentEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.undo.CompoundEdit', 'javax.swing.event.DocumentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset','length'],'O',['changeLookup','java.util.Hashtable','type','javax.swing.event.DocumentEvent.EventType']]]

Clazz.newMeth(C$, 'c$$I$I$javax_swing_event_DocumentEvent_EventType',  function (offs, len, type) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.offset=offs;
this.length=len;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.edits.toString();
});

Clazz.newMeth(C$, 'addEdit$javax_swing_undo_UndoableEdit',  function (anEdit) {
if ((this.changeLookup == null ) && (this.edits.size$() > 10) ) {
this.changeLookup=Clazz.new_($I$(5,1));
for (var i=0, n=this.edits.size$(); i < n; i++) {
var o=this.edits.get$I(i);
if (Clazz.instanceOf(o, "javax.swing.event.DocumentEvent.ElementChange")) {
var ec=o;
this.changeLookup.put$O$O(ec.getElement$(), ec);
}}
}if ((this.changeLookup != null ) && (Clazz.instanceOf(anEdit, "javax.swing.event.DocumentEvent.ElementChange")) ) {
var ec=anEdit;
this.changeLookup.put$O$O(ec.getElement$(), ec);
}return C$.superclazz.prototype.addEdit$javax_swing_undo_UndoableEdit.apply(this, [anEdit]);
});

Clazz.newMeth(C$, 'redo$',  function () {
this.b$['javax.swing.text.AbstractDocument'].writeLock$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
try {
C$.superclazz.prototype.redo$.apply(this, []);
var ev=Clazz.new_($I$(6,1).c$$javax_swing_text_AbstractDocument_DefaultDocumentEvent$Z,[this, null, this, false]);
if (this.type === $I$(7).INSERT ) {
this.b$['javax.swing.text.AbstractDocument'].fireInsertUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [ev]);
} else if (this.type === $I$(7).REMOVE ) {
this.b$['javax.swing.text.AbstractDocument'].fireRemoveUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [ev]);
} else {
this.b$['javax.swing.text.AbstractDocument'].fireChangedUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [ev]);
}} finally {
this.b$['javax.swing.text.AbstractDocument'].writeUnlock$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
}
});

Clazz.newMeth(C$, 'undo$',  function () {
this.b$['javax.swing.text.AbstractDocument'].writeLock$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
try {
C$.superclazz.prototype.undo$.apply(this, []);
var ev=Clazz.new_($I$(6,1).c$$javax_swing_text_AbstractDocument_DefaultDocumentEvent$Z,[this, null, this, true]);
if (this.type === $I$(7).REMOVE ) {
this.b$['javax.swing.text.AbstractDocument'].fireInsertUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [ev]);
} else if (this.type === $I$(7).INSERT ) {
this.b$['javax.swing.text.AbstractDocument'].fireRemoveUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [ev]);
} else {
this.b$['javax.swing.text.AbstractDocument'].fireChangedUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [ev]);
}} finally {
this.b$['javax.swing.text.AbstractDocument'].writeUnlock$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
}
});

Clazz.newMeth(C$, 'isSignificant$',  function () {
return true;
});

Clazz.newMeth(C$, 'getPresentationName$',  function () {
var type=this.getType$();
if (type === $I$(7).INSERT ) return $I$(8).getString$O("AbstractDocument.additionText");
if (type === $I$(7).REMOVE ) return $I$(8).getString$O("AbstractDocument.deletionText");
return $I$(8).getString$O("AbstractDocument.styleChangeText");
});

Clazz.newMeth(C$, 'getUndoPresentationName$',  function () {
return $I$(8).getString$O("AbstractDocument.undoText") + " " + this.getPresentationName$() ;
});

Clazz.newMeth(C$, 'getRedoPresentationName$',  function () {
return $I$(8).getString$O("AbstractDocument.redoText") + " " + this.getPresentationName$() ;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offset;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.b$['javax.swing.text.AbstractDocument'];
});

Clazz.newMeth(C$, 'getChange$javax_swing_text_Element',  function (elem) {
if (this.changeLookup != null ) {
return this.changeLookup.get$O(elem);
}for (var i=0, n=this.edits.size$(); i < n; i++) {
var o=this.edits.get$I(i);
if (Clazz.instanceOf(o, "javax.swing.event.DocumentEvent.ElementChange")) {
var c=o;
if (elem.equals$O(c.getElement$())) {
return c;
}}}
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractDocument, "UndoRedoDocumentEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.DocumentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.src=null;
this.type=null;
},1);

C$.$fields$=[['O',['src','javax.swing.text.AbstractDocument.DefaultDocumentEvent','type','javax.swing.event.DocumentEvent.EventType']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AbstractDocument_DefaultDocumentEvent$Z',  function (src, isUndo) {
;C$.$init$.apply(this);
this.src=src;
if (isUndo) {
if (src.getType$().equals$O($I$(7).INSERT)) {
this.type=$I$(7).REMOVE;
} else if (src.getType$().equals$O($I$(7).REMOVE)) {
this.type=$I$(7).INSERT;
} else {
this.type=src.getType$();
}} else {
this.type=src.getType$();
}}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return this.src;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.src.getOffset$();
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.src.getLength$();
});

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.src.getDocument$();
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getChange$javax_swing_text_Element',  function (elem) {
return this.src.getChange$javax_swing_text_Element(elem);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractDocument, "ElementEdit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.undo.AbstractUndoableEdit', [['javax.swing.event.DocumentEvent','javax.swing.event.DocumentEvent.ElementChange']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['e','javax.swing.text.Element','removed','javax.swing.text.Element[]','+added']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA',  function (e, index, removed, added) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.e=e;
this.index=index;
this.removed=removed;
this.added=added;
}, 1);

Clazz.newMeth(C$, 'getElement$',  function () {
return this.e;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'getChildrenRemoved$',  function () {
return this.removed;
});

Clazz.newMeth(C$, 'getChildrenAdded$',  function () {
return this.added;
});

Clazz.newMeth(C$, 'redo$',  function () {
C$.superclazz.prototype.redo$.apply(this, []);
var tmp=this.removed;
this.removed=this.added;
this.added=tmp;
(this.e).replace$I$I$javax_swing_text_ElementA(this.index, this.removed.length, this.added);
});

Clazz.newMeth(C$, 'undo$',  function () {
C$.superclazz.prototype.undo$.apply(this, []);
(this.e).replace$I$I$javax_swing_text_ElementA(this.index, this.added.length, this.removed);
var tmp=this.removed;
this.removed=this.added;
this.added=tmp;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractDocument, "DefaultFilterBypass", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.DocumentFilter','.FilterBypass']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.b$['javax.swing.text.AbstractDocument'];
});

Clazz.newMeth(C$, 'remove$I$I',  function (offset, length) {
this.b$['javax.swing.text.AbstractDocument'].handleRemove$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [offset, length]);
});

Clazz.newMeth(C$, 'insertString$I$S$javax_swing_text_AttributeSet',  function (offset, string, attr) {
this.b$['javax.swing.text.AbstractDocument'].handleInsertString$I$S$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [offset, string, attr]);
});

Clazz.newMeth(C$, 'replace$I$I$S$javax_swing_text_AttributeSet',  function (offset, length, text, attrs) {
this.b$['javax.swing.text.AbstractDocument'].秘replacing=true;
this.b$['javax.swing.text.AbstractDocument'].handleRemove$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [offset, length]);
this.b$['javax.swing.text.AbstractDocument'].handleInsertString$I$S$javax_swing_text_AttributeSet.apply(this.b$['javax.swing.text.AbstractDocument'], [offset, text, attrs]);
this.b$['javax.swing.text.AbstractDocument'].秘replacing=false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

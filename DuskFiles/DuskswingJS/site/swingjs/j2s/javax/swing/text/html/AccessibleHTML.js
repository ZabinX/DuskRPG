(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},p$2={},p$3={},p$4={},p$5={},p$6={},p$7={},p$8={},p$9={},I$=[[0,'javax.accessibility.AccessibleRole','javax.accessibility.AccessibleStateSet','javax.accessibility.AccessibleState','java.awt.Point','java.awt.Dimension',['javax.swing.text.html.AccessibleHTML','.TextElementInfo','.TextAccessibleContext','.IndexedSegment'],'java.text.BreakIterator',['javax.swing.text.html.AccessibleHTML','.TextElementInfo','.TextAccessibleContext'],'javax.accessibility.AccessibleIcon',['javax.swing.text.html.HTML','.Attribute'],['javax.swing.text.html.AccessibleHTML','.IconElementInfo','.IconAccessibleContext'],'java.util.Hashtable','java.util.ArrayList','java.util.Vector',['javax.swing.text.html.AccessibleHTML','.TableElementInfo','.TableAccessibleContext','.AccessibleHeadersTable'],'javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Tag'],['javax.swing.text.html.AccessibleHTML','.TableElementInfo','.TableCellElementInfo'],['javax.swing.text.html.AccessibleHTML','.TableElementInfo','.TableRowElementInfo'],['javax.swing.text.html.AccessibleHTML','.TableElementInfo','.TableAccessibleContext'],['javax.swing.text.Position','.Bias'],['javax.swing.event.DocumentEvent','.EventType'],['javax.swing.text.html.AccessibleHTML','.PropertyChangeHandler'],['javax.swing.text.html.AccessibleHTML','.DocumentHandler'],['javax.swing.text.html.AccessibleHTML','.ElementInfo'],['javax.swing.text.html.AccessibleHTML','.IconElementInfo'],['javax.swing.text.html.AccessibleHTML','.TextElementInfo'],['javax.swing.text.html.AccessibleHTML','.TableElementInfo'],['javax.swing.text.html.AccessibleHTML','.RootHTMLAccessibleContext']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AccessibleHTML", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.accessibility.Accessible');
C$.$classes$=[['RootHTMLAccessibleContext',2],['HTMLAccessibleContext',1028],['TextElementInfo',0],['IconElementInfo',2],['TableElementInfo',2],['ElementInfo',2],['DocumentHandler',2],['PropertyChangeHandler',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['editor','javax.swing.JEditorPane','model','javax.swing.text.Document','docListener','javax.swing.event.DocumentListener','propChangeListener','java.beans.PropertyChangeListener','rootElementInfo','javax.swing.text.html.AccessibleHTML.ElementInfo','rootHTMLAccessibleContext','javax.swing.text.html.AccessibleHTML.RootHTMLAccessibleContext']]]

Clazz.newMeth(C$, 'c$$javax_swing_JEditorPane',  function (pane) {
;C$.$init$.apply(this);
this.editor=pane;
this.propChangeListener=Clazz.new_($I$(23,1),[this, null]);
p$1.setDocument$javax_swing_text_Document.apply(this, [this.editor.getDocument$()]);
this.docListener=Clazz.new_($I$(24,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document',  function (document) {
if (this.model != null ) {
this.model.removeDocumentListener$javax_swing_event_DocumentListener(this.docListener);
}if (this.editor != null ) {
this.editor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propChangeListener);
}this.model=document;
if (this.model != null ) {
if (this.rootElementInfo != null ) {
this.rootElementInfo.invalidate$Z(false);
}p$1.buildInfo.apply(this, []);
this.model.addDocumentListener$javax_swing_event_DocumentListener(this.docListener);
} else {
this.rootElementInfo=null;
}if (this.editor != null ) {
this.editor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propChangeListener);
}}, p$1);

Clazz.newMeth(C$, 'getDocument',  function () {
return this.model;
}, p$1);

Clazz.newMeth(C$, 'getTextComponent',  function () {
return this.editor;
}, p$1);

Clazz.newMeth(C$, 'getRootInfo',  function () {
return this.rootElementInfo;
}, p$1);

Clazz.newMeth(C$, 'getRootView',  function () {
return (p$1.getTextComponent.apply(this, []).getUI$()).getRootView$javax_swing_text_JTextComponent(p$1.getTextComponent.apply(this, []));
}, p$1);

Clazz.newMeth(C$, 'getRootEditorRect',  function () {
var alloc=p$1.getTextComponent.apply(this, []).getBounds$();
if ((alloc.width > 0) && (alloc.height > 0) ) {
alloc.x=alloc.y=0;
var insets=this.editor.getInsets$();
alloc.x+=insets.left;
alloc.y+=insets.top;
alloc.width-=insets.left + insets.right;
alloc.height-=insets.top + insets.bottom;
return alloc;
}return null;
}, p$1);

Clazz.newMeth(C$, 'lock',  function () {
var document=p$1.getDocument.apply(this, []);
if (Clazz.instanceOf(document, "javax.swing.text.AbstractDocument")) {
(document).readLock$();
return document;
}return null;
}, p$1);

Clazz.newMeth(C$, 'unlock$O',  function (key) {
if (key != null ) {
(key).readUnlock$();
}}, p$1);

Clazz.newMeth(C$, 'buildInfo',  function () {
var lock=p$1.lock.apply(this, []);
try {
var doc=p$1.getDocument.apply(this, []);
var root=doc.getDefaultRootElement$();
this.rootElementInfo=Clazz.new_($I$(25,1).c$$javax_swing_text_Element,[this, null, root]);
this.rootElementInfo.validate$();
} finally {
p$1.unlock$O.apply(this, [lock]);
}
}, p$1);

Clazz.newMeth(C$, 'createElementInfo$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (e, parent) {
var attrs=e.getAttributes$();
if (attrs != null ) {
var name=attrs.getAttribute$O($I$(16).NameAttribute);
if (name === $I$(17).IMG ) {
return Clazz.new_($I$(26,1).c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo,[this, null, e, parent]);
} else if (name === $I$(17).CONTENT  || name === $I$(17).CAPTION  ) {
return Clazz.new_($I$(27,1).c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo,[this, null, e, parent]);
} else if (name === $I$(17).TABLE ) {
return Clazz.new_($I$(28,1).c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo,[this, null, e, parent]);
}}return null;
});

Clazz.newMeth(C$, 'getAccessibleContext$',  function () {
if (this.rootHTMLAccessibleContext == null ) {
this.rootHTMLAccessibleContext=Clazz.new_($I$(29,1).c$$javax_swing_text_html_AccessibleHTML_ElementInfo,[this, null, this.rootElementInfo]);
}return this.rootHTMLAccessibleContext;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "RootHTMLAccessibleContext", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.HTMLAccessibleContext']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (elementInfo) {
;C$.superclazz.c$$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[elementInfo]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessibleName$',  function () {
if (this.b$['javax.swing.text.html.AccessibleHTML'].model != null ) {
return this.b$['javax.swing.text.html.AccessibleHTML'].model.getProperty$O("title");
} else {
return null;
}});

Clazz.newMeth(C$, 'getAccessibleDescription$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getContentType$();
});

Clazz.newMeth(C$, 'getAccessibleRole$',  function () {
return $I$(1).TEXT;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "HTMLAccessibleContext", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.accessibility.AccessibleContext', ['javax.accessibility.Accessible', 'javax.accessibility.AccessibleComponent']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['elementInfo','javax.swing.text.html.AccessibleHTML.ElementInfo']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (elementInfo) {
Clazz.super_(C$, this);
this.elementInfo=elementInfo;
}, 1);

Clazz.newMeth(C$, 'getAccessibleContext$',  function () {
return this;
});

Clazz.newMeth(C$, 'getAccessibleStateSet$',  function () {
var states=Clazz.new_($I$(2,1));
var comp=p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
if (comp.isEnabled$()) {
states.add$javax_accessibility_AccessibleState($I$(3).ENABLED);
}if (Clazz.instanceOf(comp, "javax.swing.text.JTextComponent") && (comp).isEditable$() ) {
states.add$javax_accessibility_AccessibleState($I$(3).EDITABLE);
states.add$javax_accessibility_AccessibleState($I$(3).FOCUSABLE);
}if (comp.isVisible$()) {
states.add$javax_accessibility_AccessibleState($I$(3).VISIBLE);
}if (comp.isShowing$()) {
states.add$javax_accessibility_AccessibleState($I$(3).SHOWING);
}return states;
});

Clazz.newMeth(C$, 'getAccessibleIndexInParent$',  function () {
return this.elementInfo.getIndexInParent$();
});

Clazz.newMeth(C$, 'getAccessibleChildrenCount$',  function () {
return this.elementInfo.getChildCount$();
});

Clazz.newMeth(C$, 'getAccessibleChild$I',  function (i) {
var childInfo=this.elementInfo.getChild$I(i);
if (childInfo != null  && Clazz.instanceOf(childInfo, "javax.accessibility.Accessible") ) {
return childInfo;
} else {
return null;
}});

Clazz.newMeth(C$, 'getLocale$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getLocale$();
});

Clazz.newMeth(C$, 'getAccessibleComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'getBackground$',  function () {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).getBackground$();
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).setBackground$java_awt_Color(c);
});

Clazz.newMeth(C$, 'getForeground$',  function () {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).getForeground$();
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (c) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).setForeground$java_awt_Color(c);
});

Clazz.newMeth(C$, 'getCursor$',  function () {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).getCursor$();
});

Clazz.newMeth(C$, 'setCursor$java_awt_Cursor',  function (cursor) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).setCursor$java_awt_Cursor(cursor);
});

Clazz.newMeth(C$, 'getFont$',  function () {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).getFont$();
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).setFont$java_awt_Font(f);
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (f) {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).getFontMetrics$java_awt_Font(f);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).isEnabled$();
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).setEnabled$Z(b);
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).isVisible$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).setVisible$Z(b);
});

Clazz.newMeth(C$, 'isShowing$',  function () {
return p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).isShowing$();
});

Clazz.newMeth(C$, 'contains$java_awt_Point',  function (p) {
var r=this.getBounds$();
if (r != null ) {
return r.contains$I$I(p.x, p.y);
} else {
return false;
}});

Clazz.newMeth(C$, 'getLocationOnScreen$',  function () {
var editorLocation=p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).getLocationOnScreen$();
var r=this.getBounds$();
if (r != null ) {
return Clazz.new_($I$(4,1).c$$I$I,[editorLocation.x + r.x, editorLocation.y + r.y]);
} else {
return null;
}});

Clazz.newMeth(C$, 'getLocation$',  function () {
var r=this.getBounds$();
if (r != null ) {
return Clazz.new_($I$(4,1).c$$I$I,[r.x, r.y]);
} else {
return null;
}});

Clazz.newMeth(C$, 'setLocation$java_awt_Point',  function (p) {
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.elementInfo.getBounds$();
});

Clazz.newMeth(C$, 'setBounds$java_awt_Rectangle',  function (r) {
});

Clazz.newMeth(C$, 'getSize$',  function () {
var r=this.getBounds$();
if (r != null ) {
return Clazz.new_($I$(5,1).c$$I$I,[r.width, r.height]);
} else {
return null;
}});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension',  function (d) {
var comp=p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
comp.setSize$java_awt_Dimension(d);
});

Clazz.newMeth(C$, 'getAccessibleAt$java_awt_Point',  function (p) {
var innerMostElement=p$2.getElementInfoAt$javax_swing_text_html_AccessibleHTML_ElementInfo$java_awt_Point.apply(this, [this.b$['javax.swing.text.html.AccessibleHTML'].rootElementInfo, p]);
if (Clazz.instanceOf(innerMostElement, "javax.accessibility.Accessible")) {
return innerMostElement;
} else {
return null;
}});

Clazz.newMeth(C$, 'getElementInfoAt$javax_swing_text_html_AccessibleHTML_ElementInfo$java_awt_Point',  function (elementInfo, p) {
if (elementInfo.getBounds$() == null ) {
return null;
}if (elementInfo.getChildCount$() == 0 && elementInfo.getBounds$().contains$java_awt_Point(p) ) {
return elementInfo;
} else {
if (Clazz.instanceOf(elementInfo, "javax.swing.text.html.AccessibleHTML.TableElementInfo")) {
var captionInfo=(elementInfo).getCaptionInfo$();
if (captionInfo != null ) {
var bounds=captionInfo.getBounds$();
if (bounds != null  && bounds.contains$java_awt_Point(p) ) {
return captionInfo;
}}}for (var i=0; i < elementInfo.getChildCount$(); i++) {
var childInfo=elementInfo.getChild$I(i);
var retValue=p$2.getElementInfoAt$javax_swing_text_html_AccessibleHTML_ElementInfo$java_awt_Point.apply(this, [childInfo, p]);
if (retValue != null ) {
return retValue;
}}
}return null;
}, p$2);

Clazz.newMeth(C$, 'isFocusTraversable$',  function () {
var comp=p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
if (Clazz.instanceOf(comp, "javax.swing.text.JTextComponent")) {
if ((comp).isEditable$()) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'requestFocus$',  function () {
if (!this.isFocusTraversable$()) {
return;
}var comp=p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
if (Clazz.instanceOf(comp, "javax.swing.text.JTextComponent")) {
comp.requestFocusInWindow$();
}});

Clazz.newMeth(C$, 'addFocusListener$java_awt_event_FocusListener',  function (l) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).addFocusListener$java_awt_event_FocusListener(l);
});

Clazz.newMeth(C$, 'removeFocusListener$java_awt_event_FocusListener',  function (l) {
p$1.getTextComponent.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []).removeFocusListener$java_awt_event_FocusListener(l);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "TextElementInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.ElementInfo'], 'javax.accessibility.Accessible');
C$.$classes$=[['TextAccessibleContext',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['accessibleContext','javax.accessibility.AccessibleContext']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (element, parent) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[element, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessibleContext$',  function () {
if (this.accessibleContext == null ) {
this.accessibleContext=Clazz.new_($I$(8,1).c$$javax_swing_text_html_AccessibleHTML_ElementInfo,[this, null, this]);
}return this.accessibleContext;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML.TextElementInfo, "TextAccessibleContext", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.HTMLAccessibleContext'], 'javax.accessibility.AccessibleText');
C$.$classes$=[['IndexedSegment',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (elementInfo) {
;C$.superclazz.c$$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[elementInfo]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessibleText$',  function () {
return this;
});

Clazz.newMeth(C$, 'getAccessibleName$',  function () {
if (this.b$['javax.swing.text.html.AccessibleHTML'].model != null ) {
return this.b$['javax.swing.text.html.AccessibleHTML'].model.getProperty$O("title");
} else {
return null;
}});

Clazz.newMeth(C$, 'getAccessibleDescription$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getContentType$();
});

Clazz.newMeth(C$, 'getAccessibleRole$',  function () {
return $I$(1).TEXT;
});

Clazz.newMeth(C$, 'getIndexAtPoint$java_awt_Point',  function (p) {
var v=this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].getView$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], []);
if (v != null ) {
return v.viewToModel$F$F$java_awt_Shape(p.x, p.y, this.getBounds$());
} else {
return -1;
}});

Clazz.newMeth(C$, 'getCharacterBounds$I',  function (i) {
try {
return (this.b$['javax.swing.text.html.AccessibleHTML'].editor.getUI$()).modelToView$javax_swing_text_JTextComponent$I(this.b$['javax.swing.text.html.AccessibleHTML'].editor, i);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getCharCount$',  function () {
if (this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].validateIfNecessary$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], [])) {
var elem=this.elementInfo.getElement$();
return elem.getEndOffset$() - elem.getStartOffset$();
}return 0;
});

Clazz.newMeth(C$, 'getCaretPosition$',  function () {
var v=this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].getView$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], []);
if (v == null ) {
return -1;
}var c=v.getContainer$();
if (c == null ) {
return -1;
}if (Clazz.instanceOf(c, "javax.swing.text.JTextComponent")) {
return (c).getCaretPosition$();
} else {
return -1;
}});

Clazz.newMeth(C$, 'getAtIndex$I$I',  function (part, index) {
return p$3.getAtIndex$I$I$I.apply(this, [part, index, 0]);
});

Clazz.newMeth(C$, 'getAfterIndex$I$I',  function (part, index) {
return p$3.getAtIndex$I$I$I.apply(this, [part, index, 1]);
});

Clazz.newMeth(C$, 'getBeforeIndex$I$I',  function (part, index) {
return p$3.getAtIndex$I$I$I.apply(this, [part, index, -1]);
});

Clazz.newMeth(C$, 'getAtIndex$I$I$I',  function (part, index, direction) {
if (Clazz.instanceOf(this.b$['javax.swing.text.html.AccessibleHTML'].model, "javax.swing.text.AbstractDocument")) {
(this.b$['javax.swing.text.html.AccessibleHTML'].model).readLock$();
}try {
if (index < 0 || index >= this.b$['javax.swing.text.html.AccessibleHTML'].model.getLength$() ) {
return null;
}switch (part) {
case 1:
if (index + direction < this.b$['javax.swing.text.html.AccessibleHTML'].model.getLength$() && index + direction >= 0 ) {
return this.b$['javax.swing.text.html.AccessibleHTML'].model.getText$I$I(index + direction, 1);
}break;
case 2:
case 3:
var seg=p$3.getSegmentAt$I$I.apply(this, [part, index]);
if (seg != null ) {
if (direction != 0) {
var next;
if (direction < 0) {
next=seg.modelOffset - 1;
} else {
next=seg.modelOffset + direction * seg.count;
}if (next >= 0 && next <= this.b$['javax.swing.text.html.AccessibleHTML'].model.getLength$() ) {
seg=p$3.getSegmentAt$I$I.apply(this, [part, next]);
} else {
seg=null;
}}if (seg != null ) {
return  String.instantialize(seg.array, seg.offset, seg.count);
}}break;
default:
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
} finally {
if (Clazz.instanceOf(this.b$['javax.swing.text.html.AccessibleHTML'].model, "javax.swing.text.AbstractDocument")) {
(this.b$['javax.swing.text.html.AccessibleHTML'].model).readUnlock$();
}}
return null;
}, p$3);

Clazz.newMeth(C$, 'getParagraphElement$I',  function (index) {
if (Clazz.instanceOf(this.b$['javax.swing.text.html.AccessibleHTML'].model, "javax.swing.text.PlainDocument")) {
var sdoc=this.b$['javax.swing.text.html.AccessibleHTML'].model;
return sdoc.getParagraphElement$I(index);
} else if (Clazz.instanceOf(this.b$['javax.swing.text.html.AccessibleHTML'].model, "javax.swing.text.StyledDocument")) {
var sdoc=this.b$['javax.swing.text.html.AccessibleHTML'].model;
return sdoc.getParagraphElement$I(index);
} else {
var para;
for (para=this.b$['javax.swing.text.html.AccessibleHTML'].model.getDefaultRootElement$(); !para.isLeaf$(); ) {
var pos=para.getElementIndex$I(index);
para=para.getElement$I(pos);
}
if (para == null ) {
return null;
}return para.getParentElement$();
}}, p$3);

Clazz.newMeth(C$, 'getParagraphElementText$I',  function (index) {
var para=p$3.getParagraphElement$I.apply(this, [index]);
if (para != null ) {
var segment=Clazz.new_($I$(6,1),[this, null]);
try {
var length=para.getEndOffset$() - para.getStartOffset$();
this.b$['javax.swing.text.html.AccessibleHTML'].model.getText$I$I$javax_swing_text_Segment(para.getStartOffset$(), length, segment);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
return null;
} else {
throw e;
}
}
segment.modelOffset=para.getStartOffset$();
return segment;
}return null;
}, p$3);

Clazz.newMeth(C$, 'getSegmentAt$I$I',  function (part, index) {
var seg=p$3.getParagraphElementText$I.apply(this, [index]);
if (seg == null ) {
return null;
}var iterator;
switch (part) {
case 2:
iterator=$I$(7,"getWordInstance$java_util_Locale",[this.getLocale$()]);
break;
case 3:
iterator=$I$(7,"getSentenceInstance$java_util_Locale",[this.getLocale$()]);
break;
default:
return null;
}
seg.first$();
iterator.setText$java_text_CharacterIterator(seg);
var end=iterator.following$I(index - seg.modelOffset + seg.offset);
if (end == -1) {
return null;
}if (end > seg.offset + seg.count) {
return null;
}var begin=iterator.previous$();
if (begin == -1 || begin >= seg.offset + seg.count ) {
return null;
}seg.modelOffset=seg.modelOffset + begin - seg.offset;
seg.offset=begin;
seg.count=end - begin;
return seg;
}, p$3);

Clazz.newMeth(C$, 'getCharacterAttribute$I',  function (i) {
if (Clazz.instanceOf(this.b$['javax.swing.text.html.AccessibleHTML'].model, "javax.swing.text.StyledDocument")) {
var doc=this.b$['javax.swing.text.html.AccessibleHTML'].model;
var elem=doc.getCharacterElement$I(i);
if (elem != null ) {
return elem.getAttributes$();
}}return null;
});

Clazz.newMeth(C$, 'getSelectionStart$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionStart$();
});

Clazz.newMeth(C$, 'getSelectionEnd$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionEnd$();
});

Clazz.newMeth(C$, 'getSelectedText$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectedText$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML.TextElementInfo.TextAccessibleContext, "IndexedSegment", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.Segment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['modelOffset']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "IconElementInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.ElementInfo'], 'javax.accessibility.Accessible');
C$.$classes$=[['IconAccessibleContext',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.width=-1;
this.height=-1;
},1);

C$.$fields$=[['I',['width','height'],'O',['accessibleContext','javax.accessibility.AccessibleContext']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (element, parent) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[element, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'invalidate$Z',  function (first) {
C$.superclazz.prototype.invalidate$Z.apply(this, [first]);
this.width=this.height=-1;
});

Clazz.newMeth(C$, 'getImageSize$O',  function (key) {
if (this.validateIfNecessary$()) {
var size=this.getIntAttr$javax_swing_text_AttributeSet$O$I(this.getAttributes$(), key, -1);
if (size == -1) {
var v=this.getView$();
size=0;
if (Clazz.instanceOf(v, "javax.swing.text.html.ImageView")) {
var img=(v).getImage$();
if (img != null ) {
if (key === $I$(10).WIDTH ) {
size=img.getWidth$java_awt_image_ImageObserver(null);
} else {
size=img.getHeight$java_awt_image_ImageObserver(null);
}}}}return size;
}return 0;
}, p$4);

Clazz.newMeth(C$, 'getAccessibleContext$',  function () {
if (this.accessibleContext == null ) {
this.accessibleContext=Clazz.new_($I$(11,1).c$$javax_swing_text_html_AccessibleHTML_ElementInfo,[this, null, this]);
}return this.accessibleContext;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML.IconElementInfo, "IconAccessibleContext", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.HTMLAccessibleContext'], 'javax.accessibility.AccessibleIcon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (elementInfo) {
;C$.superclazz.c$$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[elementInfo]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessibleName$',  function () {
return this.getAccessibleIconDescription$();
});

Clazz.newMeth(C$, 'getAccessibleDescription$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getContentType$();
});

Clazz.newMeth(C$, 'getAccessibleRole$',  function () {
return $I$(1).ICON;
});

Clazz.newMeth(C$, 'getAccessibleIcon$',  function () {
var icons=Clazz.array($I$(9), [1]);
icons[0]=this;
return icons;
});

Clazz.newMeth(C$, 'getAccessibleIconDescription$',  function () {
return (this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].getView$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], [])).getAltText$();
});

Clazz.newMeth(C$, 'setAccessibleIconDescription$S',  function (description) {
});

Clazz.newMeth(C$, 'getAccessibleIconWidth$',  function () {
if (this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'].width == -1) {
this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'].width=p$4.getImageSize$O.apply(this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'], [$I$(10).WIDTH]);
}return this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'].width;
});

Clazz.newMeth(C$, 'getAccessibleIconHeight$',  function () {
if (this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'].height == -1) {
this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'].height=p$4.getImageSize$O.apply(this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'], [$I$(10).HEIGHT]);
}return this.b$['javax.swing.text.html.AccessibleHTML.IconElementInfo'].height;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "TableElementInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.ElementInfo'], 'javax.accessibility.Accessible');
C$.$classes$=[['TableAccessibleContext',1],['TableRowElementInfo',2],['TableCellElementInfo',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['caption','javax.swing.text.html.AccessibleHTML.ElementInfo','grid','javax.swing.text.html.AccessibleHTML.TableElementInfo.TableCellElementInfo[][]','accessibleContext','javax.accessibility.AccessibleContext']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (e, parent) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[e, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCaptionInfo$',  function () {
return this.caption;
});

Clazz.newMeth(C$, 'validate$',  function () {
C$.superclazz.prototype.validate$.apply(this, []);
p$8.updateGrid.apply(this, []);
});

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_Element',  function (e) {
for (var counter=0; counter < e.getElementCount$(); counter++) {
var child=e.getElement$I(counter);
var attrs=child.getAttributes$();
if (attrs.getAttribute$O($I$(16).NameAttribute) === $I$(17).TR ) {
this.addChild$javax_swing_text_html_AccessibleHTML_ElementInfo(Clazz.new_($I$(19,1).c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_TableElementInfo$I,[this, null, child, this, counter]));
} else if (attrs.getAttribute$O($I$(16).NameAttribute) === $I$(17).CAPTION ) {
this.caption=this.b$['javax.swing.text.html.AccessibleHTML'].createElementInfo$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this.b$['javax.swing.text.html.AccessibleHTML'], [child, this]);
}}
});

Clazz.newMeth(C$, 'updateGrid',  function () {
var delta=0;
var maxCols=0;
var rows;
for (var counter=0; counter < this.getChildCount$(); counter++) {
var row=this.getRow$I(counter);
var prev=0;
for (var y=0; y < delta; y++) {
prev=Math.max(prev, p$6.getColumnCount$I.apply(this.getRow$I(counter - y - 1 ), [y + 2]));
}
delta=Math.max(row.getRowCount$(), delta);
--delta;
maxCols=Math.max(maxCols, row.getColumnCount$() + prev);
}
rows=this.getChildCount$() + delta;
this.grid=Clazz.array($I$(18), [rows, null]);
for (var counter=0; counter < rows; counter++) {
this.grid[counter]=Clazz.array($I$(18), [maxCols]);
}
for (var counter=0; counter < rows; counter++) {
p$6.updateGrid$I.apply(this.getRow$I(counter), [counter]);
}
}, p$8);

Clazz.newMeth(C$, 'getRow$I',  function (index) {
return this.getChild$I(index);
});

Clazz.newMeth(C$, 'getCell$I$I',  function (r, c) {
if (this.validateIfNecessary$() && r < this.grid.length  && c < this.grid[0].length ) {
return this.grid[r][c];
}return null;
});

Clazz.newMeth(C$, 'getRowExtentAt$I$I',  function (r, c) {
var cell=this.getCell$I$I(r, c);
if (cell != null ) {
var rows=cell.getRowCount$();
var delta=1;
while ((r - delta) >= 0 && this.grid[r - delta][c] === cell  ){
++delta;
}
return rows - delta + 1;
}return 0;
});

Clazz.newMeth(C$, 'getColumnExtentAt$I$I',  function (r, c) {
var cell=this.getCell$I$I(r, c);
if (cell != null ) {
var cols=cell.getColumnCount$();
var delta=1;
while ((c - delta) >= 0 && this.grid[r][c - delta] === cell  ){
++delta;
}
return cols - delta + 1;
}return 0;
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
if (this.validateIfNecessary$()) {
return this.grid.length;
}return 0;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
if (this.validateIfNecessary$() && this.grid.length > 0 ) {
return this.grid[0].length;
}return 0;
});

Clazz.newMeth(C$, 'getAccessibleContext$',  function () {
if (this.accessibleContext == null ) {
this.accessibleContext=Clazz.new_($I$(20,1).c$$javax_swing_text_html_AccessibleHTML_ElementInfo,[this, null, this]);
}return this.accessibleContext;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML.TableElementInfo, "TableAccessibleContext", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.HTMLAccessibleContext'], 'javax.accessibility.AccessibleTable');
C$.$classes$=[['AccessibleHeadersTable',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rowHeadersTable','javax.swing.text.html.AccessibleHTML.TableElementInfo.TableAccessibleContext.AccessibleHeadersTable']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (elementInfo) {
;C$.superclazz.c$$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[elementInfo]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessibleName$',  function () {
return this.getAccessibleRole$().toString();
});

Clazz.newMeth(C$, 'getAccessibleDescription$',  function () {
return this.b$['javax.swing.text.html.AccessibleHTML'].editor.getContentType$();
});

Clazz.newMeth(C$, 'getAccessibleRole$',  function () {
return $I$(1).TABLE;
});

Clazz.newMeth(C$, 'getAccessibleIndexInParent$',  function () {
return this.elementInfo.getIndexInParent$();
});

Clazz.newMeth(C$, 'getAccessibleChildrenCount$',  function () {
return (this.elementInfo).getRowCount$() * (this.elementInfo).getColumnCount$();
});

Clazz.newMeth(C$, 'getAccessibleChild$I',  function (i) {
var rowCount=(this.elementInfo).getRowCount$();
var columnCount=(this.elementInfo).getColumnCount$();
var r=(i/rowCount|0);
var c=i % columnCount;
if (r < 0 || r >= rowCount  || c < 0  || c >= columnCount ) {
return null;
} else {
return this.getAccessibleAt$I$I(r, c);
}});

Clazz.newMeth(C$, 'getAccessibleTable$',  function () {
return this;
});

Clazz.newMeth(C$, 'getAccessibleCaption$',  function () {
var captionInfo=this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].getCaptionInfo$.apply(this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'], []);
if (Clazz.instanceOf(captionInfo, "javax.accessibility.Accessible")) {
return this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].caption;
} else {
return null;
}});

Clazz.newMeth(C$, 'setAccessibleCaption$javax_accessibility_Accessible',  function (a) {
});

Clazz.newMeth(C$, 'getAccessibleSummary$',  function () {
return null;
});

Clazz.newMeth(C$, 'setAccessibleSummary$javax_accessibility_Accessible',  function (a) {
});

Clazz.newMeth(C$, 'getAccessibleRowCount$',  function () {
return (this.elementInfo).getRowCount$();
});

Clazz.newMeth(C$, 'getAccessibleColumnCount$',  function () {
return (this.elementInfo).getColumnCount$();
});

Clazz.newMeth(C$, 'getAccessibleAt$I$I',  function (r, c) {
var cellInfo=this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].getCell$I$I.apply(this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'], [r, c]);
if (cellInfo != null ) {
return cellInfo.getAccessible$();
} else {
return null;
}});

Clazz.newMeth(C$, 'getAccessibleRowExtentAt$I$I',  function (r, c) {
return (this.elementInfo).getRowExtentAt$I$I(r, c);
});

Clazz.newMeth(C$, 'getAccessibleColumnExtentAt$I$I',  function (r, c) {
return (this.elementInfo).getColumnExtentAt$I$I(r, c);
});

Clazz.newMeth(C$, 'getAccessibleRowHeader$',  function () {
return this.rowHeadersTable;
});

Clazz.newMeth(C$, 'setAccessibleRowHeader$javax_accessibility_AccessibleTable',  function (table) {
});

Clazz.newMeth(C$, 'getAccessibleColumnHeader$',  function () {
return null;
});

Clazz.newMeth(C$, 'setAccessibleColumnHeader$javax_accessibility_AccessibleTable',  function (table) {
});

Clazz.newMeth(C$, 'getAccessibleRowDescription$I',  function (r) {
return null;
});

Clazz.newMeth(C$, 'setAccessibleRowDescription$I$javax_accessibility_Accessible',  function (r, a) {
});

Clazz.newMeth(C$, 'getAccessibleColumnDescription$I',  function (c) {
return null;
});

Clazz.newMeth(C$, 'setAccessibleColumnDescription$I$javax_accessibility_Accessible',  function (c, a) {
});

Clazz.newMeth(C$, 'isAccessibleSelected$I$I',  function (r, c) {
if (this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].validateIfNecessary$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], [])) {
if (r < 0 || r >= this.getAccessibleRowCount$()  || c < 0  || c >= this.getAccessibleColumnCount$() ) {
return false;
}var cell=this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].getCell$I$I.apply(this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'], [r, c]);
if (cell != null ) {
var elem=cell.getElement$();
var start=elem.getStartOffset$();
var end=elem.getEndOffset$();
return start >= this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionStart$() && end <= this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionEnd$() ;
}}return false;
});

Clazz.newMeth(C$, 'isAccessibleRowSelected$I',  function (r) {
if (this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].validateIfNecessary$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], [])) {
if (r < 0 || r >= this.getAccessibleRowCount$() ) {
return false;
}var nColumns=this.getAccessibleColumnCount$();
var startCell=this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].getCell$I$I.apply(this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'], [r, 0]);
if (startCell == null ) {
return false;
}var start=startCell.getElement$().getStartOffset$();
var endCell=this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].getCell$I$I.apply(this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'], [r, nColumns - 1]);
if (endCell == null ) {
return false;
}var end=endCell.getElement$().getEndOffset$();
return start >= this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionStart$() && end <= this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionEnd$() ;
}return false;
});

Clazz.newMeth(C$, 'isAccessibleColumnSelected$I',  function (c) {
if (this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].validateIfNecessary$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], [])) {
if (c < 0 || c >= this.getAccessibleColumnCount$() ) {
return false;
}var nRows=this.getAccessibleRowCount$();
var startCell=this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].getCell$I$I.apply(this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'], [0, c]);
if (startCell == null ) {
return false;
}var start=startCell.getElement$().getStartOffset$();
var endCell=this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].getCell$I$I.apply(this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'], [nRows - 1, c]);
if (endCell == null ) {
return false;
}var end=endCell.getElement$().getEndOffset$();
return start >= this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionStart$() && end <= this.b$['javax.swing.text.html.AccessibleHTML'].editor.getSelectionEnd$() ;
}return false;
});

Clazz.newMeth(C$, 'getSelectedAccessibleRows$',  function () {
if (this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].validateIfNecessary$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], [])) {
var nRows=this.getAccessibleRowCount$();
var vec=Clazz.new_($I$(14,1));
for (var i=0; i < nRows; i++) {
if (this.isAccessibleRowSelected$I(i)) {
vec.addElement$O(Integer.valueOf$I(i));
}}
var retval=Clazz.array(Integer.TYPE, [vec.size$()]);
for (var i=0; i < retval.length; i++) {
retval[i]=vec.elementAt$I(i).intValue$();
}
return retval;
}return Clazz.array(Integer.TYPE, [0]);
});

Clazz.newMeth(C$, 'getSelectedAccessibleColumns$',  function () {
if (this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'].validateIfNecessary$.apply(this.b$['javax.swing.text.html.AccessibleHTML.ElementInfo'], [])) {
var nColumns=this.getAccessibleRowCount$();
var vec=Clazz.new_($I$(14,1));
for (var i=0; i < nColumns; i++) {
if (this.isAccessibleColumnSelected$I(i)) {
vec.addElement$O(Integer.valueOf$I(i));
}}
var retval=Clazz.array(Integer.TYPE, [vec.size$()]);
for (var i=0; i < retval.length; i++) {
retval[i]=vec.elementAt$I(i).intValue$();
}
return retval;
}return Clazz.array(Integer.TYPE, [0]);
});

Clazz.newMeth(C$, 'addRowHeader$javax_swing_text_html_AccessibleHTML_TableElementInfo_TableCellElementInfo$I',  function (cellInfo, rowNumber) {
if (this.rowHeadersTable == null ) {
this.rowHeadersTable=Clazz.new_($I$(15,1),[this, null]);
}this.rowHeadersTable.addHeader$javax_swing_text_html_AccessibleHTML_TableElementInfo_TableCellElementInfo$I(cellInfo, rowNumber);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML.TableElementInfo.TableAccessibleContext, "AccessibleHeadersTable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.accessibility.AccessibleTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.headers=Clazz.new_($I$(12,1));
this.rowCount=0;
this.columnCount=0;
},1);

C$.$fields$=[['I',['rowCount','columnCount'],'O',['headers','java.util.Hashtable']]]

Clazz.newMeth(C$, 'addHeader$javax_swing_text_html_AccessibleHTML_TableElementInfo_TableCellElementInfo$I',  function (cellInfo, rowNumber) {
var rowInteger=Integer.valueOf$I(rowNumber);
var list=this.headers.get$O(rowInteger);
if (list == null ) {
list=Clazz.new_($I$(13,1));
this.headers.put$O$O(rowInteger, list);
}list.add$O(cellInfo);
});

Clazz.newMeth(C$, 'getAccessibleCaption$',  function () {
return null;
});

Clazz.newMeth(C$, 'setAccessibleCaption$javax_accessibility_Accessible',  function (a) {
});

Clazz.newMeth(C$, 'getAccessibleSummary$',  function () {
return null;
});

Clazz.newMeth(C$, 'setAccessibleSummary$javax_accessibility_Accessible',  function (a) {
});

Clazz.newMeth(C$, 'getAccessibleRowCount$',  function () {
return this.rowCount;
});

Clazz.newMeth(C$, 'getAccessibleColumnCount$',  function () {
return this.columnCount;
});

Clazz.newMeth(C$, 'getElementInfoAt$I$I',  function (r, c) {
var list=this.headers.get$O(Integer.valueOf$I(r));
if (list != null ) {
return list.get$I(c);
} else {
return null;
}}, p$5);

Clazz.newMeth(C$, 'getAccessibleAt$I$I',  function (r, c) {
var elementInfo=p$5.getElementInfoAt$I$I.apply(this, [r, c]);
if (Clazz.instanceOf(elementInfo, "javax.accessibility.Accessible")) {
return elementInfo;
} else {
return null;
}});

Clazz.newMeth(C$, 'getAccessibleRowExtentAt$I$I',  function (r, c) {
var elementInfo=p$5.getElementInfoAt$I$I.apply(this, [r, c]);
if (elementInfo != null ) {
return elementInfo.getRowCount$();
} else {
return 0;
}});

Clazz.newMeth(C$, 'getAccessibleColumnExtentAt$I$I',  function (r, c) {
var elementInfo=p$5.getElementInfoAt$I$I.apply(this, [r, c]);
if (elementInfo != null ) {
return elementInfo.getRowCount$();
} else {
return 0;
}});

Clazz.newMeth(C$, 'getAccessibleRowHeader$',  function () {
return null;
});

Clazz.newMeth(C$, 'setAccessibleRowHeader$javax_accessibility_AccessibleTable',  function (table) {
});

Clazz.newMeth(C$, 'getAccessibleColumnHeader$',  function () {
return null;
});

Clazz.newMeth(C$, 'setAccessibleColumnHeader$javax_accessibility_AccessibleTable',  function (table) {
});

Clazz.newMeth(C$, 'getAccessibleRowDescription$I',  function (r) {
return null;
});

Clazz.newMeth(C$, 'setAccessibleRowDescription$I$javax_accessibility_Accessible',  function (r, a) {
});

Clazz.newMeth(C$, 'getAccessibleColumnDescription$I',  function (c) {
return null;
});

Clazz.newMeth(C$, 'setAccessibleColumnDescription$I$javax_accessibility_Accessible',  function (c, a) {
});

Clazz.newMeth(C$, 'isAccessibleSelected$I$I',  function (r, c) {
return false;
});

Clazz.newMeth(C$, 'isAccessibleRowSelected$I',  function (r) {
return false;
});

Clazz.newMeth(C$, 'isAccessibleColumnSelected$I',  function (c) {
return false;
});

Clazz.newMeth(C$, 'getSelectedAccessibleRows$',  function () {
return Clazz.array(Integer.TYPE, [0]);
});

Clazz.newMeth(C$, 'getSelectedAccessibleColumns$',  function () {
return Clazz.array(Integer.TYPE, [0]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML.TableElementInfo, "TableRowElementInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.ElementInfo']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['rowNumber'],'O',['$parent','javax.swing.text.html.AccessibleHTML.TableElementInfo']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_TableElementInfo$I',  function (e, parent, rowNumber) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[e, parent]);C$.$init$.apply(this);
this.$parent=parent;
this.rowNumber=rowNumber;
}, 1);

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_Element',  function (e) {
for (var x=0; x < e.getElementCount$(); x++) {
var attrs=e.getElement$I(x).getAttributes$();
if (attrs.getAttribute$O($I$(16).NameAttribute) === $I$(17).TH ) {
var headerElementInfo=Clazz.new_([this, null, e.getElement$I(x), this, true],$I$(18,1).c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo$Z);
this.addChild$javax_swing_text_html_AccessibleHTML_ElementInfo(headerElementInfo);
var at=this.$parent.getAccessibleContext$().getAccessibleTable$();
var tableElement=at;
tableElement.addRowHeader$javax_swing_text_html_AccessibleHTML_TableElementInfo_TableCellElementInfo$I(headerElementInfo, this.rowNumber);
} else if (attrs.getAttribute$O($I$(16).NameAttribute) === $I$(17).TD ) {
this.addChild$javax_swing_text_html_AccessibleHTML_ElementInfo(Clazz.new_([this, null, e.getElement$I(x), this, false],$I$(18,1).c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo$Z));
}}
});

Clazz.newMeth(C$, 'getRowCount$',  function () {
var rowCount=1;
if (this.validateIfNecessary$()) {
for (var counter=0; counter < this.getChildCount$(); counter++) {
var cell=this.getChild$I(counter);
if (cell.validateIfNecessary$()) {
rowCount=Math.max(rowCount, cell.getRowCount$());
}}
}return rowCount;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
var colCount=0;
if (this.validateIfNecessary$()) {
for (var counter=0; counter < this.getChildCount$(); counter++) {
var cell=this.getChild$I(counter);
if (cell.validateIfNecessary$()) {
colCount+=cell.getColumnCount$();
}}
}return colCount;
});

Clazz.newMeth(C$, 'invalidate$Z',  function (first) {
C$.superclazz.prototype.invalidate$Z.apply(this, [first]);
this.getParent$().invalidate$Z(true);
});

Clazz.newMeth(C$, 'updateGrid$I',  function (row) {
if (this.validateIfNecessary$()) {
var emptyRow=false;
while (!emptyRow){
for (var counter=0; counter < this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].grid[row].length; counter++) {
if (this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].grid[row][counter] == null ) {
emptyRow=true;
break;
}}
if (!emptyRow) {
++row;
}}
for (var col=0, counter=0; counter < this.getChildCount$(); counter++) {
var cell=this.getChild$I(counter);
while (this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].grid[row][col] != null ){
++col;
}
for (var rowCount=cell.getRowCount$() - 1; rowCount >= 0; rowCount--) {
for (var colCount=cell.getColumnCount$() - 1; colCount >= 0; colCount--) {
this.b$['javax.swing.text.html.AccessibleHTML.TableElementInfo'].grid[row + rowCount][col + colCount]=cell;
}
}
col+=cell.getColumnCount$();
}
}}, p$6);

Clazz.newMeth(C$, 'getColumnCount$I',  function (rowspan) {
if (this.validateIfNecessary$()) {
var cols=0;
for (var counter=0; counter < this.getChildCount$(); counter++) {
var cell=this.getChild$I(counter);
if (cell.getRowCount$() >= rowspan) {
cols+=cell.getColumnCount$();
}}
return cols;
}return 0;
}, p$6);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML.TableElementInfo, "TableCellElementInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.AccessibleHTML','.ElementInfo']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isHeaderCell'],'O',['accessible','javax.accessibility.Accessible']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (e, parent) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[e, parent]);C$.$init$.apply(this);
this.isHeaderCell=false;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo$Z',  function (e, parent, isHeaderCell) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this,[e, parent]);C$.$init$.apply(this);
this.isHeaderCell=isHeaderCell;
}, 1);

Clazz.newMeth(C$, 'isHeaderCell$',  function () {
return this.isHeaderCell;
});

Clazz.newMeth(C$, 'getAccessible$',  function () {
this.accessible=null;
p$7.getAccessible$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this, [this]);
return this.accessible;
});

Clazz.newMeth(C$, 'getAccessible$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (elementInfo) {
if (Clazz.instanceOf(elementInfo, "javax.accessibility.Accessible")) {
this.accessible=elementInfo;
} else {
for (var i=0; i < elementInfo.getChildCount$(); i++) {
p$7.getAccessible$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this, [elementInfo.getChild$I(i)]);
}
}}, p$7);

Clazz.newMeth(C$, 'getRowCount$',  function () {
if (this.validateIfNecessary$()) {
return Math.max(1, this.getIntAttr$javax_swing_text_AttributeSet$O$I(this.getAttributes$(), $I$(10).ROWSPAN, 1));
}return 0;
});

Clazz.newMeth(C$, 'getColumnCount$',  function () {
if (this.validateIfNecessary$()) {
return Math.max(1, this.getIntAttr$javax_swing_text_AttributeSet$O$I(this.getAttributes$(), $I$(10).COLSPAN, 1));
}return 0;
});

Clazz.newMeth(C$, 'invalidate$Z',  function (first) {
C$.superclazz.prototype.invalidate$Z.apply(this, [first]);
this.getParent$().invalidate$Z(true);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "ElementInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isValid','canBeValid'],'O',['children','java.util.ArrayList','element','javax.swing.text.Element','parent','javax.swing.text.html.AccessibleHTML.ElementInfo']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (element) {
C$.c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this, [element, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (element, parent) {
;C$.$init$.apply(this);
this.element=element;
this.parent=parent;
this.isValid=false;
this.canBeValid=true;
}, 1);

Clazz.newMeth(C$, 'validate$',  function () {
this.isValid=true;
this.loadChildren$javax_swing_text_Element(this.getElement$());
});

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_Element',  function (parent) {
if (!parent.isLeaf$()) {
for (var counter=0, maxCounter=parent.getElementCount$(); counter < maxCounter; counter++) {
var e=parent.getElement$I(counter);
var childInfo=this.b$['javax.swing.text.html.AccessibleHTML'].createElementInfo$javax_swing_text_Element$javax_swing_text_html_AccessibleHTML_ElementInfo.apply(this.b$['javax.swing.text.html.AccessibleHTML'], [e, this]);
if (childInfo != null ) {
this.addChild$javax_swing_text_html_AccessibleHTML_ElementInfo(childInfo);
} else {
this.loadChildren$javax_swing_text_Element(e);
}}
}});

Clazz.newMeth(C$, 'getIndexInParent$',  function () {
if (this.parent == null  || !this.parent.isValid$() ) {
return -1;
}return this.parent.indexOf$javax_swing_text_html_AccessibleHTML_ElementInfo(this);
});

Clazz.newMeth(C$, 'getElement$',  function () {
return this.element;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'indexOf$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (child) {
var children=this.children;
if (children != null ) {
return children.indexOf$O(child);
}return -1;
});

Clazz.newMeth(C$, 'getChild$I',  function (index) {
if (this.validateIfNecessary$()) {
var children=this.children;
if (children != null  && index >= 0  && index < children.size$() ) {
return children.get$I(index);
}}return null;
});

Clazz.newMeth(C$, 'getChildCount$',  function () {
this.validateIfNecessary$();
return (this.children == null ) ? 0 : this.children.size$();
});

Clazz.newMeth(C$, 'addChild$javax_swing_text_html_AccessibleHTML_ElementInfo',  function (child) {
if (this.children == null ) {
this.children=Clazz.new_($I$(13,1));
}this.children.add$O(child);
});

Clazz.newMeth(C$, 'getView$',  function () {
if (!this.validateIfNecessary$()) {
return null;
}var lock=p$1.lock.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
try {
var rootView=p$1.getRootView.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
var e=this.getElement$();
var start=e.getStartOffset$();
if (rootView != null ) {
return p$9.getView$javax_swing_text_View$javax_swing_text_Element$I.apply(this, [rootView, e, start]);
}return null;
} finally {
p$1.unlock$O.apply(this.b$['javax.swing.text.html.AccessibleHTML'], [lock]);
}
});

Clazz.newMeth(C$, 'getBounds$',  function () {
if (!this.validateIfNecessary$()) {
return null;
}var lock=p$1.lock.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
try {
var bounds=p$1.getRootEditorRect.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
var rootView=p$1.getRootView.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
var e=this.getElement$();
if (bounds != null  && rootView != null  ) {
try {
return rootView.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(e.getStartOffset$(), $I$(21).Forward, e.getEndOffset$(), $I$(21).Backward, bounds).getBounds$();
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}} finally {
p$1.unlock$O.apply(this.b$['javax.swing.text.html.AccessibleHTML'], [lock]);
}
return null;
});

Clazz.newMeth(C$, 'isValid$',  function () {
return this.isValid;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
if (this.validateIfNecessary$()) {
return this.getElement$().getAttributes$();
}return null;
});

Clazz.newMeth(C$, 'getViewAttributes$',  function () {
if (this.validateIfNecessary$()) {
var view=this.getView$();
if (view != null ) {
return view.getElement$().getAttributes$();
}return this.getElement$().getAttributes$();
}return null;
});

Clazz.newMeth(C$, 'getIntAttr$javax_swing_text_AttributeSet$O$I',  function (attrs, key, deflt) {
if (attrs != null  && attrs.isDefined$O(key) ) {
var i;
var val=attrs.getAttribute$O(key);
if (val == null ) {
i=deflt;
} else {
try {
i=Math.max(0, Integer.parseInt$S(val));
} catch (x) {
if (Clazz.exceptionOf(x,"NumberFormatException")){
i=deflt;
} else {
throw x;
}
}
}return i;
}return deflt;
});

Clazz.newMeth(C$, 'validateIfNecessary$',  function () {
if (!this.isValid$() && this.canBeValid ) {
this.children=null;
var lock=p$1.lock.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []);
try {
this.validate$();
} finally {
p$1.unlock$O.apply(this.b$['javax.swing.text.html.AccessibleHTML'], [lock]);
}
}return this.isValid$();
});

Clazz.newMeth(C$, 'invalidate$Z',  function (first) {
if (!this.isValid$()) {
if (this.canBeValid && !first ) {
this.canBeValid=false;
}return;
}this.isValid=false;
this.canBeValid=first;
if (this.children != null ) {
for (var child, $child = this.children.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
child.invalidate$Z(false);
}
this.children=null;
}});

Clazz.newMeth(C$, 'getView$javax_swing_text_View$javax_swing_text_Element$I',  function (parent, e, start) {
if (parent.getElement$() === e ) {
return parent;
}var index=parent.getViewIndex$I$javax_swing_text_Position_Bias(start, $I$(21).Forward);
if (index != -1 && index < parent.getViewCount$() ) {
return p$9.getView$javax_swing_text_View$javax_swing_text_Element$I.apply(this, [parent.getView$I(index), e, start]);
}return null;
}, p$9);

Clazz.newMeth(C$, 'getClosestInfoIndex$I',  function (index) {
for (var counter=0; counter < this.getChildCount$(); counter++) {
var info=this.getChild$I(counter);
if (index < info.getElement$().getEndOffset$() || index == info.getElement$().getStartOffset$() ) {
return counter;
}}
return -1;
}, p$9);

Clazz.newMeth(C$, 'update$javax_swing_event_DocumentEvent',  function (e) {
if (!this.isValid$()) {
return;
}var parent=this.getParent$();
var element=this.getElement$();
do {
var ec=e.getChange$javax_swing_text_Element(element);
if (ec != null ) {
if (element === this.getElement$() ) {
this.invalidate$Z(true);
} else if (parent != null ) {
parent.invalidate$Z(parent === p$1.getRootInfo.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []) );
}return;
}element=element.getParentElement$();
} while (parent != null  && element != null   && element !== parent.getElement$()  );
if (this.getChildCount$() > 0) {
var elem=this.getElement$();
var pos=e.getOffset$();
var index0=p$9.getClosestInfoIndex$I.apply(this, [pos]);
if (index0 == -1 && e.getType$() === $I$(22).REMOVE   && pos >= elem.getEndOffset$() ) {
index0=this.getChildCount$() - 1;
}var info=(index0 >= 0) ? this.getChild$I(index0) : null;
if (info != null  && (info.getElement$().getStartOffset$() == pos)  && (pos > 0) ) {
index0=Math.max(index0 - 1, 0);
}var index1;
if (e.getType$() !== $I$(22).REMOVE ) {
index1=p$9.getClosestInfoIndex$I.apply(this, [pos + e.getLength$()]);
if (index1 < 0) {
index1=this.getChildCount$() - 1;
}} else {
index1=index0;
while ((index1 + 1) < this.getChildCount$() && this.getChild$I(index1 + 1).getElement$().getEndOffset$() == this.getChild$I(index1 + 1).getElement$().getStartOffset$() ){
++index1;
}
}index0=Math.max(index0, 0);
for (var i=index0; i <= index1 && this.isValid$() ; i++) {
p$9.update$javax_swing_event_DocumentEvent.apply(this.getChild$I(i), [e]);
}
}}, p$9);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "DocumentHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.DocumentListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
p$9.update$javax_swing_event_DocumentEvent.apply(p$1.getRootInfo.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []), [e]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
p$9.update$javax_swing_event_DocumentEvent.apply(p$1.getRootInfo.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []), [e]);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
p$9.update$javax_swing_event_DocumentEvent.apply(p$1.getRootInfo.apply(this.b$['javax.swing.text.html.AccessibleHTML'], []), [e]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AccessibleHTML, "PropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if (evt.getPropertyName$().equals$O("document")) {
p$1.setDocument$javax_swing_text_Document.apply(this.b$['javax.swing.text.html.AccessibleHTML'], [this.b$['javax.swing.text.html.AccessibleHTML'].editor.getDocument$()]);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},p$2={},p$3={},p$4={},p$5={},I$=[[0,['javax.swing.text.Position','.Bias'],'javax.swing.SwingUtilities','java.awt.Point',['javax.swing.text.html.HTML','.Tag'],'javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Attribute'],'java.net.URL','javax.swing.event.HyperlinkEvent',['javax.swing.event.HyperlinkEvent','.EventType'],'javax.swing.text.html.HTMLFrameHyperlinkEvent','java.lang.ref.WeakReference','javax.swing.text.html.InlineView',['javax.swing.text.html.CSS','.Attribute'],'javax.swing.text.html.LineView','javax.swing.text.html.ParagraphView','javax.swing.text.html.ListView',['javax.swing.text.html.HTMLEditorKit','.HTMLFactory','.BodyBlockView'],'javax.swing.text.html.BlockView','javax.swing.text.html.NoFramesView','javax.swing.text.html.ImageView','javax.swing.text.html.IsindexView','javax.swing.text.html.HRuleView','javax.swing.text.html.BRView','javax.swing.text.html.TableView','javax.swing.text.html.FormView','javax.swing.text.html.ObjectView','javax.swing.text.html.FrameSetView','javax.swing.text.html.FrameView','javax.swing.text.html.HiddenTagView','javax.swing.text.html.CommentView','javax.swing.text.LabelView','javax.swing.text.BoxView','javax.swing.text.ComponentView','javax.swing.text.IconView','javax.swing.text.Element',['javax.swing.text.html.HTMLEditorKit','.NavigateLinkAction','.FocusHighlightPainter'],'javax.swing.text.ElementIterator','javax.swing.text.html.HTMLEditorKit','java.awt.Cursor',['javax.swing.text.html.HTMLEditorKit','.HTMLFactory'],['javax.swing.text.html.HTMLEditorKit','.NavigateLinkAction'],['javax.swing.text.html.HTMLEditorKit','.ActivateLinkAction'],'javax.swing.Action',['javax.swing.text.html.HTMLEditorKit','.InsertHTMLTextAction'],['javax.swing.text.html.HTMLEditorKit','.InsertHRAction'],['javax.swing.text.html.HTMLEditorKit','.BeginAction'],['javax.swing.text.html.HTMLEditorKit','.LinkController'],'javax.swing.text.html.StyleSheet','javax.swing.text.html.HTMLDocument','java.io.StringReader','javax.swing.text.html.HTMLWriter','javax.swing.text.html.MinimalHTMLWriter','sun.awt.AppContext','java.io.BufferedReader','java.io.InputStreamReader','java.security.AccessController','javax.swing.text.TextAction','javax.swing.text.html.AccessibleHTML']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTMLEditorKit", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.StyledEditorKit', 'javax.accessibility.Accessible');
C$.$classes$=[['LinkController',9],['Parser',1033],['ParserCallback',9],['HTMLFactory',9],['HTMLTextAction',1033],['InsertHTMLTextAction',9],['InsertHRAction',8],['NavigateLinkAction',8],['ActivateLinkAction',8],['BeginAction',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.linkHandler=Clazz.new_($I$(47,1));
this.defaultCursor=C$.DefaultCursor;
this.linkCursor=C$.MoveCursor;
this.isAutoFormSubmission=true;
this.foundLink=false;
this.prevHypertextOffset=-1;
},1);

C$.$fields$=[['Z',['isAutoFormSubmission','foundLink'],'I',['prevHypertextOffset'],'O',['theEditor','javax.swing.JEditorPane','accessibleContext','javax.accessibility.AccessibleContext','input','javax.swing.text.MutableAttributeSet','linkHandler','javax.swing.text.html.HTMLEditorKit.LinkController','defaultCursor','java.awt.Cursor','+linkCursor','linkNavigationTag','java.lang.Object','秘jsHTMLHelper','swingjs.JSHTMLHelper']]
,['O',['MoveCursor','java.awt.Cursor','+DefaultCursor','$defaultFactory','javax.swing.text.ViewFactory','DEFAULT_STYLES_KEY','java.lang.Object','defaultParser','javax.swing.text.html.HTMLEditorKit.Parser','nextLinkAction','javax.swing.text.html.HTMLEditorKit.NavigateLinkAction','+previousLinkAction','activateLinkAction','javax.swing.text.html.HTMLEditorKit.ActivateLinkAction','$$defaultActions','javax.swing.Action[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getContentType$',  function () {
return "text/html";
});

Clazz.newMeth(C$, 'getViewFactory$',  function () {
return C$.$defaultFactory;
});

Clazz.newMeth(C$, 'createDefaultDocument$',  function () {
var styles=this.getStyleSheet$();
var ss=Clazz.new_($I$(48,1));
ss.addStyleSheet$javax_swing_text_html_StyleSheet(styles);
var doc=Clazz.new_($I$(49,1).c$$javax_swing_text_html_StyleSheet,[ss]);
doc.setParser$javax_swing_text_html_HTMLEditorKit_Parser(this.getParser$());
doc.setAsynchronousLoadPriority$I(4);
doc.setTokenThreshold$I(100);
return doc;
});

Clazz.newMeth(C$, 'ensureParser$javax_swing_text_html_HTMLDocument',  function (doc) {
var p=doc.getParser$();
if (p == null ) {
p=this.getParser$();
}if (p == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Can\'t load parser"]);
}return p;
}, p$5);

Clazz.newMeth(C$, 'read$java_io_Reader$javax_swing_text_Document$I',  function ($in, doc, pos) {
if (Clazz.instanceOf(doc, "javax.swing.text.html.HTMLDocument")) {
var hdoc=doc;
if (pos > doc.getLength$()) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid location", pos]);
}var p=p$5.ensureParser$javax_swing_text_html_HTMLDocument.apply(this, [hdoc]);
var receiver=hdoc.getReader$I(pos);
var ignoreCharset=doc.getProperty$O("IgnoreCharsetDirective");
p.parse$java_io_Reader$javax_swing_text_html_HTMLEditorKit_ParserCallback$Z($in, receiver, (ignoreCharset == null ) ? false : ignoreCharset.booleanValue$());
receiver.flush$();
} else {
C$.superclazz.prototype.read$java_io_Reader$javax_swing_text_Document$I.apply(this, [$in, doc, pos]);
}});

Clazz.newMeth(C$, 'insertHTML$javax_swing_text_html_HTMLDocument$I$S$I$I$javax_swing_text_html_HTML_Tag',  function (doc, offset, html, popDepth, pushDepth, insertTag) {
if (offset > doc.getLength$()) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Invalid location", offset]);
}var p=p$5.ensureParser$javax_swing_text_html_HTMLDocument.apply(this, [doc]);
var receiver=doc.getReader$I$I$I$javax_swing_text_html_HTML_Tag(offset, popDepth, pushDepth, insertTag);
var ignoreCharset=doc.getProperty$O("IgnoreCharsetDirective");
p.parse$java_io_Reader$javax_swing_text_html_HTMLEditorKit_ParserCallback$Z(Clazz.new_($I$(50,1).c$$S,[html]), receiver, (ignoreCharset == null ) ? false : ignoreCharset.booleanValue$());
receiver.flush$();
});

Clazz.newMeth(C$, 'write$java_io_Writer$javax_swing_text_Document$I$I',  function (out, doc, pos, len) {
if (Clazz.instanceOf(doc, "javax.swing.text.html.HTMLDocument")) {
var w=Clazz.new_($I$(51,1).c$$java_io_Writer$javax_swing_text_html_HTMLDocument$I$I,[out, doc, pos, len]);
w.write$();
} else if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
var w=Clazz.new_($I$(52,1).c$$java_io_Writer$javax_swing_text_StyledDocument$I$I,[out, doc, pos, len]);
w.write$();
} else {
C$.superclazz.prototype.write$java_io_Writer$javax_swing_text_Document$I$I.apply(this, [out, doc, pos, len]);
}});

Clazz.newMeth(C$, 'install$javax_swing_JEditorPane',  function (c) {
c.addMouseListener$java_awt_event_MouseListener(this.linkHandler);
c.addMouseMotionListener$java_awt_event_MouseMotionListener(this.linkHandler);
C$.superclazz.prototype.install$javax_swing_JEditorPane.apply(this, [c]);
this.theEditor=c;
});

Clazz.newMeth(C$, 'deinstall$javax_swing_JEditorPane',  function (c) {
this.秘jsHTMLHelper.deinstall$();
c.removeMouseListener$java_awt_event_MouseListener(this.linkHandler);
c.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.linkHandler);
C$.superclazz.prototype.deinstall$javax_swing_JEditorPane.apply(this, [c]);
this.theEditor=null;
});

Clazz.newMeth(C$, 'setStyleSheet$javax_swing_text_html_StyleSheet',  function (s) {
if (s == null ) {
$I$(53).getAppContext$().remove$O(C$.DEFAULT_STYLES_KEY);
} else {
$I$(53).getAppContext$().put$O$O(C$.DEFAULT_STYLES_KEY, s);
}});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
var appContext=$I$(53).getAppContext$();
var defaultStyles=appContext.get$O(C$.DEFAULT_STYLES_KEY);
if (defaultStyles == null ) {
defaultStyles=Clazz.new_($I$(48,1));
appContext.put$O$O(C$.DEFAULT_STYLES_KEY, defaultStyles);
try {
var is=C$.getResourceAsStream$S("default.css");
var r=Clazz.new_([Clazz.new_($I$(55,1).c$$java_io_InputStream$S,[is, "ISO-8859-1"])],$I$(54,1).c$$java_io_Reader);
defaultStyles.loadRules$java_io_Reader$java_net_URL(r, null);
r.close$();
} catch (e) {
}
}return defaultStyles;
});

Clazz.newMeth(C$, 'getResourceAsStream$S',  function (name) {
return $I$(56,"doPrivileged$java_security_PrivilegedAction",[((P$.HTMLEditorKit$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HTMLEditorKit$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Clazz.getClass($I$(38)).getResourceAsStream$S(this.$finals$.name);
});
})()
), Clazz.new_(P$.HTMLEditorKit$1.$init$,[this, {name:name}]))]);
}, 1);

Clazz.newMeth(C$, 'getActions$',  function () {
return $I$(57,"augmentList$javax_swing_ActionA$javax_swing_ActionA",[C$.superclazz.prototype.getActions$.apply(this, []), (this, C$).$$defaultActions]);
});

Clazz.newMeth(C$, 'createInputAttributes$javax_swing_text_Element$javax_swing_text_MutableAttributeSet',  function (element, set) {
set.removeAttributes$javax_swing_text_AttributeSet(set);
set.addAttributes$javax_swing_text_AttributeSet(element.getAttributes$());
set.removeAttribute$O($I$(5).ComposedTextAttribute);
var o=set.getAttribute$O($I$(5).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var tag=o;
if (tag === $I$(4).IMG ) {
set.removeAttribute$O($I$(6).SRC);
set.removeAttribute$O($I$(6).HEIGHT);
set.removeAttribute$O($I$(6).WIDTH);
set.addAttribute$O$O($I$(5).NameAttribute, $I$(4).CONTENT);
} else if (tag === $I$(4).HR  || tag === $I$(4).BR  ) {
set.addAttribute$O$O($I$(5).NameAttribute, $I$(4).CONTENT);
} else if (tag === $I$(4).COMMENT ) {
set.addAttribute$O$O($I$(5).NameAttribute, $I$(4).CONTENT);
set.removeAttribute$O($I$(6).COMMENT);
} else if (tag === $I$(4).INPUT ) {
set.addAttribute$O$O($I$(5).NameAttribute, $I$(4).CONTENT);
set.removeAttribute$O($I$(4).INPUT);
} else if (Clazz.instanceOf(tag, "javax.swing.text.html.HTML.UnknownTag")) {
set.addAttribute$O$O($I$(5).NameAttribute, $I$(4).CONTENT);
set.removeAttribute$O($I$(6).ENDTAG);
}}});

Clazz.newMeth(C$, 'getInputAttributes$',  function () {
if (this.input == null ) {
this.input=this.getStyleSheet$().addStyle$S$javax_swing_text_Style(null, null);
}return this.input;
});

Clazz.newMeth(C$, 'setDefaultCursor$java_awt_Cursor',  function (cursor) {
this.defaultCursor=cursor;
});

Clazz.newMeth(C$, 'getDefaultCursor$',  function () {
return this.defaultCursor;
});

Clazz.newMeth(C$, 'setLinkCursor$java_awt_Cursor',  function (cursor) {
this.linkCursor=cursor;
});

Clazz.newMeth(C$, 'getLinkCursor$',  function () {
return this.linkCursor;
});

Clazz.newMeth(C$, 'isAutoFormSubmission$',  function () {
return this.isAutoFormSubmission;
});

Clazz.newMeth(C$, 'setAutoFormSubmission$Z',  function (isAuto) {
this.isAutoFormSubmission=isAuto;
});

Clazz.newMeth(C$, 'clone$',  function () {
var o=C$.superclazz.prototype.clone$.apply(this, []);
if (o != null ) {
o.input=null;
o.linkHandler=Clazz.new_($I$(47,1));
}return o;
});

Clazz.newMeth(C$, 'getParser$',  function () {
if (C$.defaultParser == null ) {
try {
var c=Clazz.forName("javax.swing.text.html.parser.ParserDelegator");
C$.defaultParser=c.newInstance$();
} catch (e) {
}
}return C$.defaultParser;
});

Clazz.newMeth(C$, 'getAccessibleContext$',  function () {
if (this.theEditor == null ) {
return null;
}if (this.accessibleContext == null ) {
var a=Clazz.new_($I$(58,1).c$$javax_swing_JEditorPane,[this.theEditor]);
this.accessibleContext=a.getAccessibleContext$();
}return this.accessibleContext;
});

Clazz.newMeth(C$, 'getAttrValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute',  function (attr, key) {
var names=attr.getAttributeNames$();
while (names.hasMoreElements$()){
var nextKey=names.nextElement$();
var nextVal=attr.getAttribute$O(nextKey);
if (Clazz.instanceOf(nextVal, "javax.swing.text.AttributeSet")) {
var value=C$.getAttrValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute(nextVal, key);
if (value != null ) {
return value;
}} else if (nextKey === key ) {
return nextVal;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getBodyElementStart$javax_swing_text_JTextComponent',  function (comp) {
var rootElement=comp.getDocument$().getRootElements$()[0];
for (var i=0; i < rootElement.getElementCount$(); i++) {
var currElement=rootElement.getElement$I(i);
if ("body".equals$O(currElement.getName$())) {
return currElement.getStartOffset$();
}}
return 0;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MoveCursor=$I$(39).getPredefinedCursor$I(12);
C$.DefaultCursor=$I$(39).getPredefinedCursor$I(0);
C$.$defaultFactory=Clazz.new_($I$(40,1));
C$.DEFAULT_STYLES_KEY= Clazz.new_();
C$.defaultParser=null;
C$.nextLinkAction=Clazz.new_($I$(41,1).c$$S,["next-link-action"]);
C$.previousLinkAction=Clazz.new_($I$(41,1).c$$S,["previous-link-action"]);
C$.activateLinkAction=Clazz.new_($I$(42,1).c$$S,["activate-link-action"]);
C$.$$defaultActions=Clazz.array($I$(43), -1, [Clazz.new_(["InsertTable", "<table border=1><tr><td></td></tr></table>", $I$(4).BODY, $I$(4).TABLE],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), Clazz.new_(["InsertTableRow", "<table border=1><tr><td></td></tr></table>", $I$(4).TABLE, $I$(4).TR, $I$(4).BODY, $I$(4).TABLE],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), Clazz.new_(["InsertTableDataCell", "<table border=1><tr><td></td></tr></table>", $I$(4).TR, $I$(4).TD, $I$(4).BODY, $I$(4).TABLE],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), Clazz.new_(["InsertUnorderedList", "<ul><li></li></ul>", $I$(4).BODY, $I$(4).UL],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), Clazz.new_(["InsertUnorderedListItem", "<ul><li></li></ul>", $I$(4).UL, $I$(4).LI, $I$(4).BODY, $I$(4).UL],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), Clazz.new_(["InsertOrderedList", "<ol><li></li></ol>", $I$(4).BODY, $I$(4).OL],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), Clazz.new_(["InsertOrderedListItem", "<ol><li></li></ol>", $I$(4).OL, $I$(4).LI, $I$(4).BODY, $I$(4).OL],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), Clazz.new_($I$(45,1)), Clazz.new_(["InsertPre", "<pre></pre>", $I$(4).BODY, $I$(4).PRE],$I$(44,1).c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag), C$.nextLinkAction, C$.previousLinkAction, C$.activateLinkAction, Clazz.new_($I$(46,1).c$$S$Z,["caret-begin", false]), Clazz.new_($I$(46,1).c$$S$Z,["selection-begin", true])]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "LinkController", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.event.MouseAdapter', ['java.awt.event.MouseMotionListener', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.curElem=null;
this.curElemImage=false;
this.href=null;
this.bias=Clazz.array($I$(1), [1]);
},1);

C$.$fields$=[['Z',['curElemImage'],'I',['curOffset'],'S',['href'],'O',['curElem','javax.swing.text.Element','bias','javax.swing.text.Position.Bias[]']]]

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
var editor=e.getSource$();
if (!editor.isEditable$() && editor.isEnabled$() && $I$(2).isLeftMouseButton$java_awt_event_MouseEvent(e)  ) {
var pt=Clazz.new_([e.getX$(), e.getY$()],$I$(3,1).c$$I$I);
var pos=editor.viewToModel$java_awt_Point(pt);
if (pos >= 0) {
this.activateLink$I$javax_swing_JEditorPane$java_awt_event_MouseEvent(pos, editor, e);
}}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
var editor=e.getSource$();
if (!editor.isEnabled$()) {
return;
}var kit=editor.getEditorKit$();
var adjustCursor=true;
var newCursor=kit.getDefaultCursor$();
if (!editor.isEditable$()) {
var pt=Clazz.new_([e.getX$(), e.getY$()],$I$(3,1).c$$I$I);
var pos=(editor.getUI$()).viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(editor, pt, this.bias);
if (this.bias[0] === $I$(1).Backward  && pos > 0 ) {
--pos;
}if (pos >= 0 && (Clazz.instanceOf(editor.getDocument$(), "javax.swing.text.html.HTMLDocument")) ) {
var hdoc=editor.getDocument$();
var elem=hdoc.getCharacterElement$I(pos);
if (!p$1.doesElementContainLocation$javax_swing_JEditorPane$javax_swing_text_Element$I$I$I.apply(this, [editor, elem, pos, e.getX$(), e.getY$()])) {
elem=null;
}if (this.curElem !== elem  || this.curElemImage ) {
var lastElem=this.curElem;
this.curElem=elem;
var href=null;
this.curElemImage=false;
if (elem != null ) {
var a=elem.getAttributes$();
var anchor=a.getAttribute$O($I$(4).A);
if (anchor == null ) {
this.curElemImage=(a.getAttribute$O($I$(5).NameAttribute) === $I$(4).IMG );
if (this.curElemImage) {
href=p$1.getMapHREF$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I$I.apply(this, [editor, hdoc, elem, a, pos, e.getX$(), e.getY$()]);
}} else {
href=anchor.getAttribute$O($I$(6).HREF);
}}if (href != this.href) {
this.fireEvents$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$S$javax_swing_text_Element$java_awt_event_MouseEvent(editor, hdoc, href, lastElem, e);
this.href=href;
if (href != null ) {
newCursor=kit.getLinkCursor$();
}} else {
adjustCursor=false;
}} else {
adjustCursor=false;
}this.curOffset=pos;
}}if (adjustCursor && editor.getCursor$() !== newCursor  ) {
editor.setCursor$java_awt_Cursor(newCursor);
}});

Clazz.newMeth(C$, 'getMapHREF$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I$I',  function (html, hdoc, elem, attr, offset, x, y) {
var useMap=attr.getAttribute$O($I$(6).USEMAP);
if (useMap != null  && (Clazz.instanceOf(useMap, "java.lang.String")) ) {
var m=hdoc.getMap$S(useMap);
if (m != null  && offset < hdoc.getLength$() ) {
var bounds;
var ui=html.getUI$();
try {
var lBounds=ui.modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias(html, offset, $I$(1).Forward);
var rBounds=ui.modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias(html, offset + 1, $I$(1).Backward);
bounds=lBounds.getBounds$();
bounds.add$java_awt_Rectangle((Clazz.instanceOf(rBounds, "java.awt.Rectangle")) ? rBounds : rBounds.getBounds$());
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
bounds=null;
} else {
throw ble;
}
}
if (bounds != null ) {
var area=m.getArea$I$I$I$I(x - bounds.x, y - bounds.y, bounds.width, bounds.height);
if (area != null ) {
return area.getAttribute$O($I$(6).HREF);
}}}}return null;
}, p$1);

Clazz.newMeth(C$, 'doesElementContainLocation$javax_swing_JEditorPane$javax_swing_text_Element$I$I$I',  function (editor, e, offset, x, y) {
if (e != null  && offset > 0  && e.getStartOffset$() == offset ) {
try {
var ui=editor.getUI$();
var s1=ui.modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias(editor, offset, $I$(1).Forward);
if (s1 == null ) {
return false;
}var r1=(Clazz.instanceOf(s1, "java.awt.Rectangle")) ? s1 : s1.getBounds$();
var s2=ui.modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias(editor, e.getEndOffset$(), $I$(1).Backward);
if (s2 != null ) {
var r2=(Clazz.instanceOf(s2, "java.awt.Rectangle")) ? s2 : s2.getBounds$();
r1.add$java_awt_Rectangle(r2);
}return r1.contains$I$I(x, y);
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}return true;
}, p$1);

Clazz.newMeth(C$, 'activateLink$I$javax_swing_JEditorPane',  function (pos, editor) {
this.activateLink$I$javax_swing_JEditorPane$java_awt_event_MouseEvent(pos, editor, null);
});

Clazz.newMeth(C$, 'activateLink$I$javax_swing_JEditorPane$java_awt_event_MouseEvent',  function (pos, html, mouseEvent) {
var doc=html.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.html.HTMLDocument")) {
var hdoc=doc;
var e=hdoc.getCharacterElement$I(pos);
var a=e.getAttributes$();
var anchor=a.getAttribute$O($I$(4).A);
var linkEvent=null;
var description;
var x=-1;
var y=-1;
if (mouseEvent != null ) {
x=mouseEvent.getX$();
y=mouseEvent.getY$();
}if (anchor == null ) {
this.href=p$1.getMapHREF$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I$I.apply(this, [html, hdoc, e, a, pos, x, y]);
} else {
this.href=anchor.getAttribute$O($I$(6).HREF);
}if (this.href != null ) {
linkEvent=this.createHyperlinkEvent$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$S$javax_swing_text_AttributeSet$javax_swing_text_Element$java_awt_event_MouseEvent(html, hdoc, this.href, anchor, e, mouseEvent);
}if (linkEvent != null ) {
html.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(linkEvent);
}}});

Clazz.newMeth(C$, 'createHyperlinkEvent$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$S$javax_swing_text_AttributeSet$javax_swing_text_Element$java_awt_event_MouseEvent',  function (html, hdoc, href, anchor, element, mouseEvent) {
var u;
try {
var base=hdoc.getBase$();
u=Clazz.new_($I$(7,1).c$$java_net_URL$S,[base, href]);
if (href != null  && "file".equals$O(u.getProtocol$())  && href.startsWith$S("#") ) {
var baseFile=base.getFile$();
var newFile=u.getFile$();
if (baseFile != null  && newFile != null   && !newFile.startsWith$S(baseFile) ) {
u=Clazz.new_($I$(7,1).c$$java_net_URL$S,[base, baseFile + href]);
}}} catch (m) {
if (Clazz.exceptionOf(m,"java.net.MalformedURLException")){
u=null;
} else {
throw m;
}
}
var linkEvent;
if (!hdoc.isFrameDocument$()) {
linkEvent=Clazz.new_([html, $I$(9).ACTIVATED, u, href, element, mouseEvent],$I$(8,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent);
} else {
var target=(anchor != null ) ? anchor.getAttribute$O($I$(6).TARGET) : null;
if ((target == null ) || (target.equals$O("")) ) {
target=hdoc.getBaseTarget$();
}if ((target == null ) || (target.equals$O("")) ) {
target="_self";
}linkEvent=Clazz.new_([html, $I$(9).ACTIVATED, u, href, element, mouseEvent, target],$I$(10,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent$S);
}return linkEvent;
});

Clazz.newMeth(C$, 'fireEvents$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$S$javax_swing_text_Element$java_awt_event_MouseEvent',  function (editor, doc, href, lastElem, mouseEvent) {
if (this.href != null ) {
var u;
try {
u=Clazz.new_([doc.getBase$(), this.href],$I$(7,1).c$$java_net_URL$S);
} catch (m) {
if (Clazz.exceptionOf(m,"java.net.MalformedURLException")){
u=null;
} else {
throw m;
}
}
var exit=Clazz.new_([editor, $I$(9).EXITED, u, this.href, lastElem, mouseEvent],$I$(8,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent);
editor.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(exit);
}if (href != null ) {
var u;
try {
u=Clazz.new_([doc.getBase$(), href],$I$(7,1).c$$java_net_URL$S);
} catch (m) {
if (Clazz.exceptionOf(m,"java.net.MalformedURLException")){
u=null;
} else {
throw m;
}
}
var entered=Clazz.new_([editor, $I$(9).ENTERED, u, href, this.curElem, mouseEvent],$I$(8,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent);
editor.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(entered);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "ParserCallback", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['IMPLIED','java.lang.Object']]]

Clazz.newMeth(C$, 'flush$',  function () {
});

Clazz.newMeth(C$, 'handleText$CA$I',  function (data, pos) {
});

Clazz.newMeth(C$, 'handleComment$CA$I',  function (data, pos) {
});

Clazz.newMeth(C$, 'handleStartTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I',  function (t, a, pos) {
});

Clazz.newMeth(C$, 'handleEndTag$javax_swing_text_html_HTML_Tag$I',  function (t, pos) {
});

Clazz.newMeth(C$, 'handleSimpleTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I',  function (t, a, pos) {
});

Clazz.newMeth(C$, 'handleError$S$I',  function (errorMsg, pos) {
});

Clazz.newMeth(C$, 'handleEndOfLineString$S',  function (eol) {
});

C$.$static$=function(){C$.$static$=0;
C$.IMPLIED="_implied_";
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "HTMLFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.text.ViewFactory');
C$.$classes$=[['BodyBlockView',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'create$javax_swing_text_Element',  function (elem) {
var attrs=elem.getAttributes$();
var elementName=attrs.getAttribute$O("$ename");
var o=(elementName != null ) ? null : attrs.getAttribute$O($I$(5).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var kind=o;
if (kind === $I$(4).CONTENT ) {
return Clazz.new_($I$(12,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).IMPLIED ) {
var ws=elem.getAttributes$().getAttribute$O($I$(13).WHITE_SPACE);
if ((ws != null ) && ws.equals$O("pre") ) {
return Clazz.new_($I$(14,1).c$$javax_swing_text_Element,[elem]);
}return Clazz.new_($I$(15,1).c$$javax_swing_text_Element,[elem]);
} else if ((kind === $I$(4).P ) || (kind === $I$(4).H1 ) || (kind === $I$(4).H2 ) || (kind === $I$(4).H3 ) || (kind === $I$(4).H4 ) || (kind === $I$(4).H5 ) || (kind === $I$(4).H6 ) || (kind === $I$(4).DT )  ) {
return Clazz.new_($I$(15,1).c$$javax_swing_text_Element,[elem]);
} else if ((kind === $I$(4).MENU ) || (kind === $I$(4).DIR ) || (kind === $I$(4).UL ) || (kind === $I$(4).OL )  ) {
return Clazz.new_($I$(16,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).BODY ) {
return Clazz.new_($I$(17,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).HTML ) {
return Clazz.new_($I$(18,1).c$$javax_swing_text_Element$I,[elem, 1]);
} else if ((kind === $I$(4).LI ) || (kind === $I$(4).CENTER ) || (kind === $I$(4).DL ) || (kind === $I$(4).DD ) || (kind === $I$(4).DIV ) || (kind === $I$(4).BLOCKQUOTE ) || (kind === $I$(4).PRE ) || (kind === $I$(4).FORM )  ) {
return Clazz.new_($I$(18,1).c$$javax_swing_text_Element$I,[elem, 1]);
} else if (kind === $I$(4).NOFRAMES ) {
return Clazz.new_($I$(19,1).c$$javax_swing_text_Element$I,[elem, 1]);
} else if (kind === $I$(4).IMG ) {
return Clazz.new_($I$(20,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).ISINDEX ) {
return Clazz.new_($I$(21,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).HR ) {
return Clazz.new_($I$(22,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).BR ) {
return Clazz.new_($I$(23,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).TABLE ) {
return Clazz.new_($I$(24,1).c$$javax_swing_text_Element,[elem]);
} else if ((kind === $I$(4).INPUT ) || (kind === $I$(4).SELECT ) || (kind === $I$(4).TEXTAREA )  ) {
return Clazz.new_($I$(25,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).OBJECT ) {
return Clazz.new_($I$(26,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).FRAMESET ) {
if (elem.getAttributes$().isDefined$O($I$(6).ROWS)) {
return Clazz.new_($I$(27,1).c$$javax_swing_text_Element$I,[elem, 1]);
} else if (elem.getAttributes$().isDefined$O($I$(6).COLS)) {
return Clazz.new_($I$(27,1).c$$javax_swing_text_Element$I,[elem, 0]);
}throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Can't build a" + kind + ", " + elem + ":" + "no ROWS or COLS defined." ]);
} else if (kind === $I$(4).FRAME ) {
return Clazz.new_($I$(28,1).c$$javax_swing_text_Element,[elem]);
} else if (Clazz.instanceOf(kind, "javax.swing.text.html.HTML.UnknownTag")) {
return Clazz.new_($I$(29,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).COMMENT ) {
return Clazz.new_($I$(30,1).c$$javax_swing_text_Element,[elem]);
} else if (kind === $I$(4).HEAD ) {
return ((P$.HTMLEditorKit$HTMLFactory$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HTMLEditorKit$HTMLFactory$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.text.html.BlockView'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
return 0;
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
return 0;
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
return 0;
});

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_ViewFactory',  function (f) {
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
return a;
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (pos, b, a, direction, biasRet) {
return this.getElement$().getEndOffset$();
});
})()
), Clazz.new_($I$(18,1).c$$javax_swing_text_Element$I,[this, null, elem, 0],P$.HTMLEditorKit$HTMLFactory$1));
} else if ((kind === $I$(4).TITLE ) || (kind === $I$(4).META ) || (kind === $I$(4).LINK ) || (kind === $I$(4).STYLE ) || (kind === $I$(4).SCRIPT ) || (kind === $I$(4).AREA ) || (kind === $I$(4).MAP ) || (kind === $I$(4).PARAM ) || (kind === $I$(4).APPLET )  ) {
return Clazz.new_($I$(29,1).c$$javax_swing_text_Element,[elem]);
}}var nm=(elementName != null ) ? elementName : elem.getName$();
if (nm != null ) {
if (nm.equals$O("content")) {
return Clazz.new_($I$(31,1).c$$javax_swing_text_Element,[elem]);
} else if (nm.equals$O("paragraph")) {
return Clazz.new_($I$(15,1).c$$javax_swing_text_Element,[elem]);
} else if (nm.equals$O("section")) {
return Clazz.new_($I$(32,1).c$$javax_swing_text_Element$I,[elem, 1]);
} else if (nm.equals$O("component")) {
return Clazz.new_($I$(33,1).c$$javax_swing_text_Element,[elem]);
} else if (nm.equals$O("icon")) {
return Clazz.new_($I$(34,1).c$$javax_swing_text_Element,[elem]);
}}return Clazz.new_($I$(31,1).c$$javax_swing_text_Element,[elem]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit.HTMLFactory, "BodyBlockView", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.html.BlockView', 'java.awt.event.ComponentListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cachedViewPort=null;
this.isListening=false;
this.viewVisibleWidth=2147483647;
this.componentVisibleWidth=2147483647;
},1);

C$.$fields$=[['Z',['isListening'],'I',['viewVisibleWidth','componentVisibleWidth'],'O',['cachedViewPort','java.lang.ref.Reference']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calculateMajorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
r=C$.superclazz.prototype.calculateMajorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
r.maximum=2147483647;
return r;
});

Clazz.newMeth(C$, 'layoutMinorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var container=this.getContainer$();
var parentContainer;
if (container != null  && (Clazz.instanceOf(container, "javax.swing.JEditorPane"))  && (parentContainer=container.getParent$()) != null   && (Clazz.instanceOf(parentContainer, "javax.swing.JViewport")) ) {
var viewPort=parentContainer;
if (this.cachedViewPort != null ) {
var cachedObject=this.cachedViewPort.get$();
if (cachedObject != null ) {
if (cachedObject !== viewPort ) {
cachedObject.removeComponentListener$java_awt_event_ComponentListener(this);
}} else {
this.cachedViewPort=null;
}}if (this.cachedViewPort == null ) {
viewPort.addComponentListener$java_awt_event_ComponentListener(this);
this.cachedViewPort=Clazz.new_($I$(11,1).c$$O,[viewPort]);
}this.componentVisibleWidth=viewPort.getExtentSize$().width;
if (this.componentVisibleWidth > 0) {
var insets=container.getInsets$();
this.viewVisibleWidth=this.componentVisibleWidth - insets.left - this.getLeftInset$() ;
targetSpan=Math.min(targetSpan, this.viewVisibleWidth);
}} else {
if (this.cachedViewPort != null ) {
var cachedObject=this.cachedViewPort.get$();
if (cachedObject != null ) {
cachedObject.removeComponentListener$java_awt_event_ComponentListener(this);
}this.cachedViewPort=null;
}}C$.superclazz.prototype.layoutMinorAxis$I$I$IA$IA.apply(this, [targetSpan, axis, offsets, spans]);
});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
if (parent == null ) {
if (this.cachedViewPort != null ) {
var cachedObject;
if ((cachedObject=this.cachedViewPort.get$()) != null ) {
(cachedObject).removeComponentListener$java_awt_event_ComponentListener(this);
}this.cachedViewPort=null;
}}C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
if (!(Clazz.instanceOf(e.getSource$(), "javax.swing.JViewport"))) {
return;
}var viewPort=e.getSource$();
if (this.componentVisibleWidth != viewPort.getExtentSize$().width) {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
var document=this.getDocument$();
document.readLock$();
try {
this.layoutChanged$I(0);
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
} finally {
document.readUnlock$();
}
}}});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "HTMLTextAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getHTMLDocument$javax_swing_JEditorPane',  function (e) {
var d=e.getDocument$();
if (Clazz.instanceOf(d, "javax.swing.text.html.HTMLDocument")) {
return d;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["document must be HTMLDocument"]);
});

Clazz.newMeth(C$, 'getHTMLEditorKit$javax_swing_JEditorPane',  function (e) {
var k=e.getEditorKit$();
if (Clazz.instanceOf(k, "javax.swing.text.html.HTMLEditorKit")) {
return k;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["EditorKit must be HTMLEditorKit"]);
});

Clazz.newMeth(C$, 'getElementsAt$javax_swing_text_html_HTMLDocument$I',  function (doc, offset) {
return p$2.getElementsAt$javax_swing_text_Element$I$I.apply(this, [doc.getDefaultRootElement$(), offset, 0]);
});

Clazz.newMeth(C$, 'getElementsAt$javax_swing_text_Element$I$I',  function (parent, offset, depth) {
if (parent.isLeaf$()) {
var retValue=Clazz.array($I$(35), [depth + 1]);
retValue[depth]=parent;
return retValue;
}var retValue=p$2.getElementsAt$javax_swing_text_Element$I$I.apply(this, [parent.getElement$I(parent.getElementIndex$I(offset)), offset, depth + 1]);
retValue[depth]=parent;
return retValue;
}, p$2);

Clazz.newMeth(C$, 'elementCountToTag$javax_swing_text_html_HTMLDocument$I$javax_swing_text_html_HTML_Tag',  function (doc, offset, tag) {
var depth=-1;
var e=doc.getCharacterElement$I(offset);
while (e != null  && e.getAttributes$().getAttribute$O($I$(5).NameAttribute) !== tag  ){
e=e.getParentElement$();
++depth;
}
if (e == null ) {
return -1;
}return depth;
});

Clazz.newMeth(C$, 'findElementMatchingTag$javax_swing_text_html_HTMLDocument$I$javax_swing_text_html_HTML_Tag',  function (doc, offset, tag) {
var e=doc.getDefaultRootElement$();
var lastMatch=null;
while (e != null ){
if (e.getAttributes$().getAttribute$O($I$(5).NameAttribute) === tag ) {
lastMatch=e;
}e=e.getElement$I(e.getElementIndex$I(offset));
}
return lastMatch;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "InsertHTMLTextAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.HTMLEditorKit','.HTMLTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['adjustSelection'],'S',['html'],'O',['parentTag','javax.swing.text.html.HTML.Tag','+addTag','+alternateParentTag','+alternateAddTag']]]

Clazz.newMeth(C$, 'c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag',  function (name, html, parentTag, addTag) {
C$.c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag.apply(this, [name, html, parentTag, addTag, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag',  function (name, html, parentTag, addTag, alternateParentTag, alternateAddTag) {
C$.c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$Z.apply(this, [name, html, parentTag, addTag, alternateParentTag, alternateAddTag, true]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$Z',  function (name, html, parentTag, addTag, alternateParentTag, alternateAddTag, adjustSelection) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.html=html;
this.parentTag=parentTag;
this.addTag=addTag;
this.alternateParentTag=alternateParentTag;
this.alternateAddTag=alternateAddTag;
this.adjustSelection=adjustSelection;
}, 1);

Clazz.newMeth(C$, 'insertHTML$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$S$I$I$javax_swing_text_html_HTML_Tag',  function (editor, doc, offset, html, popDepth, pushDepth, addTag) {
try {
this.getHTMLEditorKit$javax_swing_JEditorPane(editor).insertHTML$javax_swing_text_html_HTMLDocument$I$S$I$I$javax_swing_text_html_HTML_Tag(doc, offset, html, popDepth, pushDepth, addTag);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unable to insert: " + ioe]);
}
} else if (Clazz.exceptionOf(e$$,"javax.swing.text.BadLocationException")){
var ble = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unable to insert: " + ble]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'insertAtBoundary$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$javax_swing_text_Element$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag',  function (editor, doc, offset, insertElement, html, parentTag, addTag) {
this.insertAtBoundry$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$javax_swing_text_Element$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag(editor, doc, offset, insertElement, html, parentTag, addTag);
});

Clazz.newMeth(C$, 'insertAtBoundry$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$javax_swing_text_Element$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag',  function (editor, doc, offset, insertElement, html, parentTag, addTag) {
var e;
var commonParent;
var isFirst=(offset == 0);
if (offset > 0 || insertElement == null  ) {
e=doc.getDefaultRootElement$();
while (e != null  && e.getStartOffset$() != offset  && !e.isLeaf$() ){
e=e.getElement$I(e.getElementIndex$I(offset));
}
commonParent=(e != null ) ? e.getParentElement$() : null;
} else {
commonParent=insertElement;
}if (commonParent != null ) {
var pops=0;
var pushes=0;
if (isFirst && insertElement != null  ) {
e=commonParent;
while (e != null  && !e.isLeaf$() ){
e=e.getElement$I(e.getElementIndex$I(offset));
++pops;
}
} else {
e=commonParent;
--offset;
while (e != null  && !e.isLeaf$() ){
e=e.getElement$I(e.getElementIndex$I(offset));
++pops;
}
e=commonParent;
++offset;
while (e != null  && e !== insertElement  ){
e=e.getElement$I(e.getElementIndex$I(offset));
++pushes;
}
}pops=Math.max(0, pops - 1);
this.insertHTML$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$S$I$I$javax_swing_text_html_HTML_Tag(editor, doc, offset, html, pops, pushes, addTag);
}});

Clazz.newMeth(C$, 'insertIntoTag$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag',  function (editor, doc, offset, tag, addTag) {
var e=this.findElementMatchingTag$javax_swing_text_html_HTMLDocument$I$javax_swing_text_html_HTML_Tag(doc, offset, tag);
if (e != null  && e.getStartOffset$() == offset ) {
this.insertAtBoundary$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$javax_swing_text_Element$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag(editor, doc, offset, e, this.html, tag, addTag);
return true;
} else if (offset > 0) {
var depth=this.elementCountToTag$javax_swing_text_html_HTMLDocument$I$javax_swing_text_html_HTML_Tag(doc, offset - 1, tag);
if (depth != -1) {
this.insertHTML$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$S$I$I$javax_swing_text_html_HTML_Tag(editor, doc, offset, this.html, depth, 0, addTag);
return true;
}}return false;
});

Clazz.newMeth(C$, 'adjustSelection$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$I',  function (pane, doc, startOffset, oldLength) {
var newLength=doc.getLength$();
if (newLength != oldLength && startOffset < newLength ) {
if (startOffset > 0) {
var text;
try {
text=doc.getText$I$I(startOffset - 1, 1);
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
text=null;
} else {
throw ble;
}
}
if (text != null  && text.length$() > 0  && text.charAt$I(0) == "\n" ) {
pane.select$I$I(startOffset, startOffset);
} else {
pane.select$I$I(startOffset + 1, startOffset + 1);
}} else {
pane.select$I$I(1, 1);
}}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ae) {
var editor=this.getEditor$java_awt_event_ActionEvent(ae);
if (editor != null ) {
var doc=this.getHTMLDocument$javax_swing_JEditorPane(editor);
var offset=editor.getSelectionStart$();
var length=doc.getLength$();
var inserted;
if (!this.insertIntoTag$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag(editor, doc, offset, this.parentTag, this.addTag) && this.alternateParentTag != null  ) {
inserted=this.insertIntoTag$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag(editor, doc, offset, this.alternateParentTag, this.alternateAddTag);
} else {
inserted=true;
}if (this.adjustSelection && inserted ) {
this.adjustSelection$javax_swing_JEditorPane$javax_swing_text_html_HTMLDocument$I$I(editor, doc, offset, length);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "InsertHRAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.HTMLEditorKit','.InsertHTMLTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTML_Tag$Z.apply(this,["InsertHR", "<hr>", null, $I$(4).IMPLIED, null, null, false]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ae) {
var editor=this.getEditor$java_awt_event_ActionEvent(ae);
if (editor != null ) {
var doc=this.getHTMLDocument$javax_swing_JEditorPane(editor);
var offset=editor.getSelectionStart$();
var paragraph=doc.getParagraphElement$I(offset);
if (paragraph.getParentElement$() != null ) {
this.parentTag=paragraph.getParentElement$().getAttributes$().getAttribute$O($I$(5).NameAttribute);
C$.superclazz.prototype.actionPerformed$java_awt_event_ActionEvent.apply(this, [ae]);
}}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "NavigateLinkAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.TextAction');
C$.$classes$=[['FocusHighlightPainter',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['focusBack']]
,['O',['focusPainter','javax.swing.text.html.HTMLEditorKit.NavigateLinkAction.FocusHighlightPainter']]]

Clazz.newMeth(C$, 'c$$S',  function (actionName) {
;C$.superclazz.c$$S.apply(this,[actionName]);C$.$init$.apply(this);
this.focusBack="previous-link-action".equals$O(actionName);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var comp=this.getTextComponent$java_awt_event_ActionEvent(e);
if (comp == null  || comp.isEditable$() ) {
return;
}var doc=comp.getDocument$();
var kit=p$3.getHTMLEditorKit$javax_swing_text_JTextComponent.apply(this, [comp]);
if (doc == null  || kit == null  ) {
return;
}var ei=Clazz.new_($I$(37,1).c$$javax_swing_text_Document,[doc]);
var currentOffset=comp.getCaretPosition$();
var prevStartOffset=-1;
var prevEndOffset=-1;
var nextElement;
while ((nextElement=ei.next$()) != null ){
var name=nextElement.getName$();
var attr=nextElement.getAttributes$();
var href=$I$(38,"getAttrValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute",[attr, $I$(6).HREF]);
if (!(name.equals$O($I$(4).OBJECT.toString())) && href == null  ) {
continue;
}var elementOffset=nextElement.getStartOffset$();
if (this.focusBack) {
if (elementOffset >= currentOffset && prevStartOffset >= 0 ) {
kit.foundLink=true;
comp.setCaretPosition$I(prevStartOffset);
p$3.moveCaretPosition$javax_swing_text_JTextComponent$javax_swing_text_html_HTMLEditorKit$I$I.apply(this, [comp, kit, prevStartOffset, prevEndOffset]);
kit.prevHypertextOffset=prevStartOffset;
return;
}} else {
if (elementOffset > currentOffset) {
kit.foundLink=true;
comp.setCaretPosition$I(elementOffset);
p$3.moveCaretPosition$javax_swing_text_JTextComponent$javax_swing_text_html_HTMLEditorKit$I$I.apply(this, [comp, kit, elementOffset, nextElement.getEndOffset$()]);
kit.prevHypertextOffset=elementOffset;
return;
}}prevStartOffset=nextElement.getStartOffset$();
prevEndOffset=nextElement.getEndOffset$();
}
if (this.focusBack && prevStartOffset >= 0 ) {
kit.foundLink=true;
comp.setCaretPosition$I(prevStartOffset);
p$3.moveCaretPosition$javax_swing_text_JTextComponent$javax_swing_text_html_HTMLEditorKit$I$I.apply(this, [comp, kit, prevStartOffset, prevEndOffset]);
kit.prevHypertextOffset=prevStartOffset;
}});

Clazz.newMeth(C$, 'moveCaretPosition$javax_swing_text_JTextComponent$javax_swing_text_html_HTMLEditorKit$I$I',  function (comp, kit, mark, dot) {
var h=comp.getHighlighter$();
if (h != null ) {
var p0=Math.min(dot, mark);
var p1=Math.max(dot, mark);
try {
if (kit.linkNavigationTag != null ) {
h.changeHighlight$O$I$I(kit.linkNavigationTag, p0, p1);
} else {
kit.linkNavigationTag=h.addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter(p0, p1, C$.focusPainter);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
}}, p$3);

Clazz.newMeth(C$, 'getHTMLEditorKit$javax_swing_text_JTextComponent',  function (comp) {
if (Clazz.instanceOf(comp, "javax.swing.JEditorPane")) {
var kit=(comp).getEditorKit$();
if (Clazz.instanceOf(kit, "javax.swing.text.html.HTMLEditorKit")) {
return kit;
}}return null;
}, p$3);

C$.$static$=function(){C$.$static$=0;
C$.focusPainter=Clazz.new_($I$(36,1).c$$java_awt_Color,[null]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit.NavigateLinkAction, "FocusHighlightPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.DefaultHighlighter','.DefaultHighlightPainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (color) {
;C$.superclazz.c$$java_awt_Color.apply(this,[color]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paintLayer$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View',  function (g, offs0, offs1, bounds, c, view) {
var color=this.getColor$();
if (color == null ) {
g.setColor$java_awt_Color(c.getSelectionColor$());
} else {
g.setColor$java_awt_Color(color);
}if (offs0 == view.getStartOffset$() && offs1 == view.getEndOffset$() ) {
var alloc;
if (Clazz.instanceOf(bounds, "java.awt.Rectangle")) {
alloc=bounds;
} else {
alloc=bounds.getBounds$();
}g.drawRect$I$I$I$I(alloc.x, alloc.y, alloc.width - 1, alloc.height);
return alloc;
} else {
try {
var shape=view.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(offs0, $I$(1).Forward, offs1, $I$(1).Backward, bounds);
var r=(Clazz.instanceOf(shape, "java.awt.Rectangle")) ? shape : shape.getBounds$();
g.drawRect$I$I$I$I(r.x, r.y, r.width - 1, r.height);
return r;
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
}return null;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "ActivateLinkAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (actionName) {
;C$.superclazz.c$$S.apply(this,[actionName]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'activateLink$S$javax_swing_text_html_HTMLDocument$javax_swing_JEditorPane$I',  function (href, doc, editor, offset) {
try {
var page=doc.getProperty$O("stream");
var url=Clazz.new_($I$(7,1).c$$java_net_URL$S,[page, href]);
var linkEvent=Clazz.new_([editor, $I$(9).ACTIVATED, url, url.toExternalForm$(), doc.getCharacterElement$I(offset)],$I$(8,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element);
editor.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(linkEvent);
} catch (m) {
if (Clazz.exceptionOf(m,"java.net.MalformedURLException")){
} else {
throw m;
}
}
}, p$4);

Clazz.newMeth(C$, 'getRootView$javax_swing_JEditorPane',  function (editor) {
return (editor.getUI$()).getRootView$javax_swing_text_JTextComponent(editor);
}, p$4);

Clazz.newMeth(C$, 'getView$javax_swing_JEditorPane$javax_swing_text_Element',  function (editor, elem) {
var lock=p$4.lock$javax_swing_JEditorPane.apply(this, [editor]);
try {
var rootView=p$4.getRootView$javax_swing_JEditorPane.apply(this, [editor]);
var start=elem.getStartOffset$();
if (rootView != null ) {
return p$4.getView$javax_swing_text_View$javax_swing_text_Element$I.apply(this, [rootView, elem, start]);
}return null;
} finally {
p$4.unlock$O.apply(this, [lock]);
}
}, p$4);

Clazz.newMeth(C$, 'getView$javax_swing_text_View$javax_swing_text_Element$I',  function (parent, elem, start) {
if (parent.getElement$() === elem ) {
return parent;
}var index=parent.getViewIndex$I$javax_swing_text_Position_Bias(start, $I$(1).Forward);
if (index != -1 && index < parent.getViewCount$() ) {
return p$4.getView$javax_swing_text_View$javax_swing_text_Element$I.apply(this, [parent.getView$I(index), elem, start]);
}return null;
}, p$4);

Clazz.newMeth(C$, 'lock$javax_swing_JEditorPane',  function (editor) {
var document=editor.getDocument$();
if (Clazz.instanceOf(document, "javax.swing.text.AbstractDocument")) {
(document).readLock$();
return document;
}return null;
}, p$4);

Clazz.newMeth(C$, 'unlock$O',  function (key) {
if (key != null ) {
(key).readUnlock$();
}}, p$4);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var c=this.getTextComponent$java_awt_event_ActionEvent(e);
if (c.isEditable$() || !(Clazz.instanceOf(c, "javax.swing.JEditorPane")) ) {
return;
}var editor=c;
var d=editor.getDocument$();
if (d == null  || !(Clazz.instanceOf(d, "javax.swing.text.html.HTMLDocument")) ) {
return;
}var doc=d;
var ei=Clazz.new_($I$(37,1).c$$javax_swing_text_Document,[doc]);
var currentOffset=editor.getCaretPosition$();
var urlString=null;
var objString=null;
var currentElement;
while ((currentElement=ei.next$()) != null ){
var name=currentElement.getName$();
var attr=currentElement.getAttributes$();
var href=$I$(38,"getAttrValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute",[attr, $I$(6).HREF]);
if (href != null ) {
if (currentOffset >= currentElement.getStartOffset$() && currentOffset <= currentElement.getEndOffset$() ) {
p$4.activateLink$S$javax_swing_text_html_HTMLDocument$javax_swing_JEditorPane$I.apply(this, [href, doc, editor, currentOffset]);
return;
}}}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLEditorKit, "BeginAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['select']]]

Clazz.newMeth(C$, 'c$$S$Z',  function (nm, select) {
;C$.superclazz.c$$S.apply(this,[nm]);C$.$init$.apply(this);
this.select=select;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var target=this.getTextComponent$java_awt_event_ActionEvent(e);
var bodyStart=$I$(38).getBodyElementStart$javax_swing_text_JTextComponent(target);
if (target != null ) {
if (this.select) {
target.moveCaretPosition$I(bodyStart);
} else {
target.setCaretPosition$I(bodyStart);
}}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},p$2={},p$3={},I$=[[0,'javax.swing.text.ElementIterator','javax.swing.text.StyleConstants','java.util.HashMap',['javax.swing.text.html.HTML','.Tag'],'javax.swing.text.SimpleAttributeSet',['javax.swing.text.html.HTML','.Attribute'],['javax.swing.text.html.HTMLEditorKit','.ParserCallback'],'java.util.Vector','javax.swing.text.html.Map',['javax.swing.text.html.CSS','.Attribute'],'java.net.URL','javax.swing.text.html.TextAreaDocument','javax.swing.text.html.HTML','javax.swing.text.html.OptionListModel','javax.swing.text.html.OptionComboBoxModel','javax.swing.text.html.Option','javax.swing.DefaultButtonModel',['javax.swing.text.html.HTMLDocument','.FixedLengthDocument'],'javax.swing.text.PlainDocument',['javax.swing.JToggleButton','.ToggleButtonModel'],'javax.swing.ButtonGroup',['javax.swing.text.html.HTMLDocument','.TaggedAttributeSet'],'java.util.Stack','java.util.Hashtable',['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.BlockAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.ParagraphAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.CharacterAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.SpecialAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.FormAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.HiddenAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.ConvertAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.AnchorAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.AreaAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.BaseAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.FormTagAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.HeadAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.IsindexAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.LinkAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.MapAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.MetaAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.ObjectAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.PreAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.StyleAction'],['javax.swing.text.html.HTMLDocument','.HTMLReader','.TitleAction'],['javax.swing.text.DefaultStyledDocument','.ElementSpec'],'javax.swing.text.html.HTMLDocument','javax.swing.text.Element',['javax.swing.text.AbstractDocument','.ElementEdit'],['javax.swing.text.AbstractDocument','.DefaultDocumentEvent'],['javax.swing.event.DocumentEvent','.EventType'],'javax.swing.event.UndoableEditEvent','java.awt.font.TextAttribute','sun.swing.SwingUtilities2','javax.swing.text.GapContent','javax.swing.text.html.StyleSheet',['javax.swing.text.html.HTMLDocument','.HTMLReader'],['javax.swing.text.DefaultStyledDocument','.AttributeUndoableEdit'],['javax.swing.text.html.HTMLDocument','.LeafIterator'],['javax.swing.text.html.HTMLDocument','.RunElement'],['javax.swing.text.html.HTMLDocument','.BlockElement'],'javax.swing.text.html.HTMLEditorKit','java.io.StringReader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTMLDocument", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.DefaultStyledDocument');
C$.$classes$=[['Iterator',1033],['LeafIterator',8],['HTMLReader',1],['TaggedAttributeSet',8],['RunElement',1],['BlockElement',1],['FixedLengthDocument',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frameDocument=false;
this.preservesUnknownTags=true;
this.hasBaseTag=false;
this.baseTarget=null;
this.insertInBody=false;
},1);

C$.$fields$=[['Z',['frameDocument','preservesUnknownTags','hasBaseTag','insertInBody'],'S',['baseTarget'],'O',['radioButtonGroupsMap','java.util.HashMap','base','java.net.URL','parser','javax.swing.text.html.HTMLEditorKit.Parser','秘jsHTMLHelper','swingjs.JSHTMLHelper']]
,['S',['MAP_PROPERTY'],'O',['contentAttributeSet','javax.swing.text.AttributeSet','NEWLINE','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_html_StyleSheet.apply(this, [Clazz.new_($I$(55,1).c$$I,[4096]), Clazz.new_($I$(56,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_html_StyleSheet',  function (styles) {
C$.c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_html_StyleSheet.apply(this, [Clazz.new_($I$(55,1).c$$I,[4096]), styles]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_html_StyleSheet',  function (c, styles) {
;C$.superclazz.c$$javax_swing_text_AbstractDocument_Content$javax_swing_text_StyleContext.apply(this,[c, styles]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getReader$I',  function (pos) {
var desc=this.getProperty$O("stream");
if (Clazz.instanceOf(desc, "java.net.URL")) {
this.setBase$java_net_URL(desc);
}var reader=Clazz.new_($I$(57,1).c$$I,[this, null, pos]);
return reader;
});

Clazz.newMeth(C$, 'getReader$I$I$I$javax_swing_text_html_HTML_Tag',  function (pos, popDepth, pushDepth, insertTag) {
return this.getReader$I$I$I$javax_swing_text_html_HTML_Tag$Z(pos, popDepth, pushDepth, insertTag, true);
});

Clazz.newMeth(C$, 'getReader$I$I$I$javax_swing_text_html_HTML_Tag$Z',  function (pos, popDepth, pushDepth, insertTag, insertInsertTag) {
var desc=this.getProperty$O("stream");
if (Clazz.instanceOf(desc, "java.net.URL")) {
this.setBase$java_net_URL(desc);
}var reader=Clazz.new_($I$(57,1).c$$I$I$I$javax_swing_text_html_HTML_Tag$Z$Z$Z,[this, null, pos, popDepth, pushDepth, insertTag, insertInsertTag, false, true]);
return reader;
});

Clazz.newMeth(C$, 'getBase$',  function () {
return this.base;
});

Clazz.newMeth(C$, 'setBase$java_net_URL',  function (u) {
this.base=u;
this.getStyleSheet$().setBase$java_net_URL(u);
});

Clazz.newMeth(C$, 'insert$I$javax_swing_text_DefaultStyledDocument_ElementSpecA',  function (offset, data) {
C$.superclazz.prototype.insert$I$javax_swing_text_DefaultStyledDocument_ElementSpecA.apply(this, [offset, data]);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet',  function (chng, attr) {
if (attr == null ) {
attr=C$.contentAttributeSet;
} else if (attr.isDefined$O($I$(2).ComposedTextAttribute)) {
(attr).addAttributes$javax_swing_text_AttributeSet(C$.contentAttributeSet);
}if (attr.isDefined$O("CR")) {
(attr).removeAttribute$O("CR");
}C$.superclazz.prototype.insertUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_AttributeSet.apply(this, [chng, attr]);
});

Clazz.newMeth(C$, 'create$javax_swing_text_DefaultStyledDocument_ElementSpecA',  function (data) {
C$.superclazz.prototype.create$javax_swing_text_DefaultStyledDocument_ElementSpecA.apply(this, [data]);
});

Clazz.newMeth(C$, 'setParagraphAttributes$I$I$javax_swing_text_AttributeSet$Z',  function (offset, length, s, replace) {
try {
this.writeLock$();
var end=Math.min(offset + length, this.getLength$());
var e=this.getParagraphElement$I(offset);
offset=e.getStartOffset$();
e=this.getParagraphElement$I(end);
length=Math.max(0, e.getEndOffset$() - offset);
var changes=Clazz.new_([this, null, offset, length, $I$(51).CHANGE],$I$(50,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
var sCopy=s.copyAttributes$();
var lastEnd=2147483647;
for (var pos=offset; pos <= end; pos=lastEnd) {
var paragraph=this.getParagraphElement$I(pos);
if (lastEnd == paragraph.getEndOffset$()) {
++lastEnd;
} else {
lastEnd=paragraph.getEndOffset$();
}var attr=paragraph.getAttributes$();
changes.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(58,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$Z,[paragraph, sCopy, replace]));
if (replace) {
attr.removeAttributes$javax_swing_text_AttributeSet(attr);
}attr.addAttributes$javax_swing_text_AttributeSet(s);
}
changes.end$();
this.fireChangedUpdate$javax_swing_event_DocumentEvent(changes);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(52,1).c$$O$javax_swing_undo_UndoableEdit,[this, changes]));
} finally {
this.writeUnlock$();
}
});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
return this.getAttributeContext$();
});

Clazz.newMeth(C$, 'getIterator$javax_swing_text_html_HTML_Tag',  function (t) {
if (t.isBlock$()) {
return null;
}return Clazz.new_($I$(59,1).c$$javax_swing_text_html_HTML_Tag$javax_swing_text_Document,[t, this]);
});

Clazz.newMeth(C$, 'createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I',  function (parent, a, p0, p1) {
return Clazz.new_($I$(60,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I,[this, null, parent, a, p0, p1]);
});

Clazz.newMeth(C$, 'createBranchElement$javax_swing_text_Element$javax_swing_text_AttributeSet',  function (parent, a) {
return Clazz.new_($I$(61,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet,[this, null, parent, a]);
});

Clazz.newMeth(C$, 'createDefaultRoot$',  function () {
this.writeLock$();
var a=Clazz.new_($I$(5,1));
a.addAttribute$O$O($I$(2).NameAttribute, $I$(4).HTML);
var html=Clazz.new_([this, null, null, a.copyAttributes$()],$I$(61,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet);
a.removeAttributes$javax_swing_text_AttributeSet(a);
a.addAttribute$O$O($I$(2).NameAttribute, $I$(4).BODY);
var body=Clazz.new_([this, null, html, a.copyAttributes$()],$I$(61,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet);
a.removeAttributes$javax_swing_text_AttributeSet(a);
a.addAttribute$O$O($I$(2).NameAttribute, $I$(4).P);
this.getStyleSheet$().addCSSAttributeFromHTML$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(a, $I$(10).MARGIN_TOP, "0");
var paragraph=Clazz.new_([this, null, body, a.copyAttributes$()],$I$(61,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet);
a.removeAttributes$javax_swing_text_AttributeSet(a);
a.addAttribute$O$O($I$(2).NameAttribute, $I$(4).CONTENT);
var brk=Clazz.new_($I$(60,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I,[this, null, paragraph, a, 0, 1]);
var buff=Clazz.array($I$(48), [1]);
buff[0]=brk;
paragraph.replace$I$I$javax_swing_text_ElementA(0, 0, buff);
buff[0]=paragraph;
body.replace$I$I$javax_swing_text_ElementA(0, 0, buff);
buff[0]=body;
html.replace$I$I$javax_swing_text_ElementA(0, 0, buff);
this.writeUnlock$();
return html;
});

Clazz.newMeth(C$, 'setTokenThreshold$I',  function (n) {
this.putProperty$O$O("token threshold",  new Integer(n));
});

Clazz.newMeth(C$, 'getTokenThreshold$',  function () {
var i=this.getProperty$O("token threshold");
if (i != null ) {
return i.intValue$();
}return 2147483647;
});

Clazz.newMeth(C$, 'setPreservesUnknownTags$Z',  function (preservesTags) {
this.preservesUnknownTags=preservesTags;
});

Clazz.newMeth(C$, 'getPreservesUnknownTags$',  function () {
return this.preservesUnknownTags;
});

Clazz.newMeth(C$, 'processHTMLFrameHyperlinkEvent$javax_swing_text_html_HTMLFrameHyperlinkEvent',  function (e) {
var frameName=e.getTarget$();
var element=e.getSourceElement$();
var urlStr=e.getURL$().toString();
if (frameName.equals$O("_self")) {
p$3.updateFrame$javax_swing_text_Element$S.apply(this, [element, urlStr]);
} else if (frameName.equals$O("_parent")) {
p$3.updateFrameSet$javax_swing_text_Element$S.apply(this, [element.getParentElement$(), urlStr]);
} else {
var targetElement=p$3.findFrame$S.apply(this, [frameName]);
if (targetElement != null ) {
p$3.updateFrame$javax_swing_text_Element$S.apply(this, [targetElement, urlStr]);
}}});

Clazz.newMeth(C$, 'findFrame$S',  function (frameName) {
var it=Clazz.new_($I$(1,1).c$$javax_swing_text_Document,[this]);
var next;
while ((next=it.next$()) != null ){
var attr=next.getAttributes$();
if (C$.matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag(attr, $I$(4).FRAME)) {
var frameTarget=attr.getAttribute$O($I$(6).NAME);
if (frameTarget != null  && frameTarget.equals$O(frameName) ) {
break;
}}}
return next;
}, p$3);

Clazz.newMeth(C$, 'matchNameAttribute$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Tag',  function (attr, tag) {
var o=attr.getAttribute$O($I$(2).NameAttribute);
if (Clazz.instanceOf(o, "javax.swing.text.html.HTML.Tag")) {
var name=o;
if (name === tag ) {
return true;
}}return false;
}, 1);

Clazz.newMeth(C$, 'updateFrameSet$javax_swing_text_Element$S',  function (element, url) {
try {
var startOffset=element.getStartOffset$();
var endOffset=Math.min(this.getLength$(), element.getEndOffset$());
var html="<frame";
if (url != null ) {
html+=" src=\"" + url + "\"" ;
}html+=">";
p$3.installParserIfNecessary.apply(this, []);
this.setOuterHTML$javax_swing_text_Element$S(element, html);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.swing.text.BadLocationException")){
var e1 = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
}
} else {
throw e$$;
}
}
}, p$3);

Clazz.newMeth(C$, 'updateFrame$javax_swing_text_Element$S',  function (element, url) {
try {
this.writeLock$();
var changes=Clazz.new_([this, null, element.getStartOffset$(), 1, $I$(51).CHANGE],$I$(50,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
var sCopy=element.getAttributes$().copyAttributes$();
var attr=element.getAttributes$();
changes.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(58,1).c$$javax_swing_text_Element$javax_swing_text_AttributeSet$Z,[element, sCopy, false]));
attr.removeAttribute$O($I$(6).SRC);
attr.addAttribute$O$O($I$(6).SRC, url);
changes.end$();
this.fireChangedUpdate$javax_swing_event_DocumentEvent(changes);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(52,1).c$$O$javax_swing_undo_UndoableEdit,[this, changes]));
} finally {
this.writeUnlock$();
}
}, p$3);

Clazz.newMeth(C$, 'isFrameDocument$',  function () {
return this.frameDocument;
});

Clazz.newMeth(C$, 'setFrameDocumentState$Z',  function (frameDoc) {
this.frameDocument=frameDoc;
});

Clazz.newMeth(C$, 'addMap$javax_swing_text_html_Map',  function (map) {
var name=map.getName$();
if (name != null ) {
var maps=this.getProperty$O(C$.MAP_PROPERTY);
if (maps == null ) {
maps=Clazz.new_($I$(24,1).c$$I,[11]);
this.putProperty$O$O(C$.MAP_PROPERTY, maps);
}if (Clazz.instanceOf(maps, "java.util.Hashtable")) {
(maps).put$O$O("#" + name, map);
}}});

Clazz.newMeth(C$, 'removeMap$javax_swing_text_html_Map',  function (map) {
var name=map.getName$();
if (name != null ) {
var maps=this.getProperty$O(C$.MAP_PROPERTY);
if (Clazz.instanceOf(maps, "java.util.Hashtable")) {
(maps).remove$O("#" + name);
}}});

Clazz.newMeth(C$, 'getMap$S',  function (name) {
if (name != null ) {
var maps=this.getProperty$O(C$.MAP_PROPERTY);
if (maps != null  && (Clazz.instanceOf(maps, "java.util.Hashtable")) ) {
return (maps).get$O(name);
}}return null;
});

Clazz.newMeth(C$, 'getMaps$',  function () {
var maps=this.getProperty$O(C$.MAP_PROPERTY);
if (Clazz.instanceOf(maps, "java.util.Hashtable")) {
return (maps).elements$();
}return null;
});

Clazz.newMeth(C$, 'setDefaultStyleSheetType$S',  function (contentType) {
this.putProperty$O$O("StyleType", contentType);
});

Clazz.newMeth(C$, 'getDefaultStyleSheetType$',  function () {
var retValue=this.getProperty$O("StyleType");
if (retValue == null ) {
return "text/css";
}return retValue;
});

Clazz.newMeth(C$, 'setParser$javax_swing_text_html_HTMLEditorKit_Parser',  function (parser) {
this.parser=parser;
this.putProperty$O$O("__PARSER__", null);
});

Clazz.newMeth(C$, 'getParser$',  function () {
var p=this.getProperty$O("__PARSER__");
if (Clazz.instanceOf(p, "javax.swing.text.html.HTMLEditorKit.Parser")) {
return p;
}return this.parser;
});

Clazz.newMeth(C$, 'setInnerHTML$javax_swing_text_Element$S',  function (elem, htmlText) {
p$3.verifyParser.apply(this, []);
if (elem != null  && elem.isLeaf$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not set inner HTML of a leaf"]);
}if (elem != null  && htmlText != null  ) {
var oldCount=elem.getElementCount$();
var insertPosition=elem.getStartOffset$();
p$3.insertHTML$javax_swing_text_Element$I$S$Z.apply(this, [elem, elem.getStartOffset$(), htmlText, true]);
if (elem.getElementCount$() > oldCount) {
p$3.removeElements$javax_swing_text_Element$I$I.apply(this, [elem, elem.getElementCount$() - oldCount, oldCount]);
}}});

Clazz.newMeth(C$, 'setOuterHTML$javax_swing_text_Element$S',  function (elem, htmlText) {
p$3.verifyParser.apply(this, []);
if (elem != null  && elem.getParentElement$() != null   && htmlText != null  ) {
var start=elem.getStartOffset$();
var end=elem.getEndOffset$();
var startLength=this.getLength$();
var wantsNewline=!elem.isLeaf$();
if (!wantsNewline && (end > startLength || this.getText$I$I(end - 1, 1).charAt$I(0) == C$.NEWLINE[0] ) ) {
wantsNewline=true;
}var parent=elem.getParentElement$();
var oldCount=parent.getElementCount$();
p$3.insertHTML$javax_swing_text_Element$I$S$Z.apply(this, [parent, start, htmlText, wantsNewline]);
var newLength=this.getLength$();
if (oldCount != parent.getElementCount$()) {
var removeIndex=parent.getElementIndex$I(start + newLength - startLength);
p$3.removeElements$javax_swing_text_Element$I$I.apply(this, [parent, removeIndex, 1]);
}}});

Clazz.newMeth(C$, 'insertAfterStart$javax_swing_text_Element$S',  function (elem, htmlText) {
p$3.verifyParser.apply(this, []);
if (elem == null  || htmlText == null  ) {
return;
}if (elem.isLeaf$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not insert HTML after start of a leaf"]);
}p$3.insertHTML$javax_swing_text_Element$I$S$Z.apply(this, [elem, elem.getStartOffset$(), htmlText, false]);
});

Clazz.newMeth(C$, 'insertBeforeEnd$javax_swing_text_Element$S',  function (elem, htmlText) {
p$3.verifyParser.apply(this, []);
if (elem != null  && elem.isLeaf$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not set inner HTML before end of leaf"]);
}if (elem != null ) {
var offset=elem.getEndOffset$();
if (elem.getElement$I(elem.getElementIndex$I(offset - 1)).isLeaf$() && this.getText$I$I(offset - 1, 1).charAt$I(0) == C$.NEWLINE[0] ) {
--offset;
}p$3.insertHTML$javax_swing_text_Element$I$S$Z.apply(this, [elem, offset, htmlText, false]);
}});

Clazz.newMeth(C$, 'insertBeforeStart$javax_swing_text_Element$S',  function (elem, htmlText) {
p$3.verifyParser.apply(this, []);
if (elem != null ) {
var parent=elem.getParentElement$();
if (parent != null ) {
p$3.insertHTML$javax_swing_text_Element$I$S$Z.apply(this, [parent, elem.getStartOffset$(), htmlText, false]);
}}});

Clazz.newMeth(C$, 'insertAfterEnd$javax_swing_text_Element$S',  function (elem, htmlText) {
p$3.verifyParser.apply(this, []);
if (elem != null ) {
var parent=elem.getParentElement$();
if (parent != null ) {
if ($I$(4).BODY.name.equals$O(parent.getName$())) {
this.insertInBody=true;
}var offset=elem.getEndOffset$();
if (offset > (this.getLength$() + 1)) {
--offset;
} else if (elem.isLeaf$() && this.getText$I$I(offset - 1, 1).charAt$I(0) == C$.NEWLINE[0] ) {
--offset;
}p$3.insertHTML$javax_swing_text_Element$I$S$Z.apply(this, [parent, offset, htmlText, false]);
if (this.insertInBody) {
this.insertInBody=false;
}}}});

Clazz.newMeth(C$, 'getElement$S',  function (id) {
if (id == null ) {
return null;
}return p$3.getElement$javax_swing_text_Element$O$O$Z.apply(this, [this.getDefaultRootElement$(), $I$(6).ID, id, true]);
});

Clazz.newMeth(C$, 'getElement$javax_swing_text_Element$O$O',  function (e, attribute, value) {
return p$3.getElement$javax_swing_text_Element$O$O$Z.apply(this, [e, attribute, value, true]);
});

Clazz.newMeth(C$, 'getElement$javax_swing_text_Element$O$O$Z',  function (e, attribute, value, searchLeafAttributes) {
var attr=e.getAttributes$();
if (attr != null  && attr.isDefined$O(attribute) ) {
if (value.equals$O(attr.getAttribute$O(attribute))) {
return e;
}}if (!e.isLeaf$()) {
for (var counter=0, maxCounter=e.getElementCount$(); counter < maxCounter; counter++) {
var retValue=p$3.getElement$javax_swing_text_Element$O$O$Z.apply(this, [e.getElement$I(counter), attribute, value, searchLeafAttributes]);
if (retValue != null ) {
return retValue;
}}
} else if (searchLeafAttributes && attr != null  ) {
var names=attr.getAttributeNames$();
if (names != null ) {
while (names.hasMoreElements$()){
var name=names.nextElement$();
if ((Clazz.instanceOf(name, "javax.swing.text.html.HTML.Tag")) && (Clazz.instanceOf(attr.getAttribute$O(name), "javax.swing.text.AttributeSet")) ) {
var check=attr.getAttribute$O(name);
if (check.isDefined$O(attribute) && value.equals$O(check.getAttribute$O(attribute)) ) {
return e;
}}}
}}return null;
}, p$3);

Clazz.newMeth(C$, 'verifyParser',  function () {
if (this.getParser$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No HTMLEditorKit.Parser"]);
}}, p$3);

Clazz.newMeth(C$, 'installParserIfNecessary',  function () {
if (this.getParser$() == null ) {
this.setParser$javax_swing_text_html_HTMLEditorKit_Parser(Clazz.new_($I$(62,1)).getParser$());
}}, p$3);

Clazz.newMeth(C$, 'insertHTML$javax_swing_text_Element$I$S$Z',  function (parent, offset, html, wantsTrailingNewline) {
if (parent != null  && html != null  ) {
var parser=this.getParser$();
if (parser != null ) {
var lastOffset=Math.max(0, offset - 1);
var charElement=this.getCharacterElement$I(lastOffset);
var commonParent=parent;
var pop=0;
var push=0;
if (parent.getStartOffset$() > lastOffset) {
while (commonParent != null  && commonParent.getStartOffset$() > lastOffset ){
commonParent=commonParent.getParentElement$();
++push;
}
if (commonParent == null ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["No common parent", offset]);
}}while (charElement != null  && charElement !== commonParent  ){
++pop;
charElement=charElement.getParentElement$();
}
if (charElement != null ) {
var reader=Clazz.new_($I$(57,1).c$$I$I$I$javax_swing_text_html_HTML_Tag$Z$Z$Z,[this, null, offset, pop - 1, push, null, false, true, wantsTrailingNewline]);
parser.parse$java_io_Reader$javax_swing_text_html_HTMLEditorKit_ParserCallback$Z(Clazz.new_($I$(63,1).c$$S,[html]), reader, true);
reader.flush$();
}}}}, p$3);

Clazz.newMeth(C$, 'removeElements$javax_swing_text_Element$I$I',  function (e, index, count) {
this.writeLock$();
try {
var start=e.getElement$I(index).getStartOffset$();
var end=e.getElement$I(index + count - 1).getEndOffset$();
if (end > this.getLength$()) {
p$3.removeElementsAtEnd$javax_swing_text_Element$I$I$I$I.apply(this, [e, index, count, start, end]);
} else {
p$3.removeElements$javax_swing_text_Element$I$I$I$I.apply(this, [e, index, count, start, end]);
}} finally {
this.writeUnlock$();
}
}, p$3);

Clazz.newMeth(C$, 'removeElementsAtEnd$javax_swing_text_Element$I$I$I$I',  function (e, index, count, start, end) {
var isLeaf=(e.getElement$I(index - 1).isLeaf$());
var dde=Clazz.new_([this, null, start - 1, end - start + 1, $I$(51).REMOVE],$I$(50,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
if (isLeaf) {
var endE=this.getCharacterElement$I(this.getLength$());
--index;
if (endE.getParentElement$() !== e ) {
p$3.replace$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_Element$I$I$I$I$Z$Z.apply(this, [dde, e, index, ++count, start, end, true, true]);
} else {
p$3.replace$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_Element$I$I$I$I$Z$Z.apply(this, [dde, e, index, count, start, end, true, false]);
}} else {
var newLineE=e.getElement$I(index - 1);
while (!newLineE.isLeaf$()){
newLineE=newLineE.getElement$I(newLineE.getElementCount$() - 1);
}
newLineE=newLineE.getParentElement$();
p$3.replace$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_Element$I$I$I$I$Z$Z.apply(this, [dde, e, index, count, start, end, false, false]);
p$3.replace$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_Element$I$I$I$I$Z$Z.apply(this, [dde, newLineE, newLineE.getElementCount$() - 1, 1, start, end, true, true]);
}this.postRemoveUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent(dde);
dde.end$();
this.fireRemoveUpdate$javax_swing_event_DocumentEvent(dde);
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(52,1).c$$O$javax_swing_undo_UndoableEdit,[this, dde]));
}, p$3);

Clazz.newMeth(C$, 'replace$javax_swing_text_AbstractDocument_DefaultDocumentEvent$javax_swing_text_Element$I$I$I$I$Z$Z',  function (dde, e, index, count, start, end, remove, create) {
var added;
var attrs=e.getElement$I(index).getAttributes$();
var removed=Clazz.array($I$(48), [count]);
for (var counter=0; counter < count; counter++) {
removed[counter]=e.getElement$I(counter + index);
}
if (remove) {
var u=this.getContent$().remove$I$I(start - 1, end - start);
if (u != null ) {
dde.addEdit$javax_swing_undo_UndoableEdit(u);
}}if (create) {
added=Clazz.array($I$(48), [1]);
added[0]=this.createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I(e, attrs, start - 1, start);
} else {
added=Clazz.array($I$(48), [0]);
}dde.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(49,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[e, index, removed, added]));
(e).replace$I$I$javax_swing_text_ElementA(index, removed.length, added);
}, p$3);

Clazz.newMeth(C$, 'removeElements$javax_swing_text_Element$I$I$I$I',  function (e, index, count, start, end) {
var removed=Clazz.array($I$(48), [count]);
var added=Clazz.array($I$(48), [0]);
for (var counter=0; counter < count; counter++) {
removed[counter]=e.getElement$I(counter + index);
}
var dde=Clazz.new_([this, null, start, end - start, $I$(51).REMOVE],$I$(50,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
(e).replace$I$I$javax_swing_text_ElementA(index, removed.length, added);
dde.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_($I$(49,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[e, index, removed, added]));
var u=this.getContent$().remove$I$I(start, end - start);
if (u != null ) {
dde.addEdit$javax_swing_undo_UndoableEdit(u);
}this.postRemoveUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent(dde);
dde.end$();
this.fireRemoveUpdate$javax_swing_event_DocumentEvent(dde);
if (u != null ) {
this.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent(Clazz.new_($I$(52,1).c$$O$javax_swing_undo_UndoableEdit,[this, dde]));
}}, p$3);

Clazz.newMeth(C$, 'obtainLock$',  function () {
this.writeLock$();
});

Clazz.newMeth(C$, 'releaseLock$',  function () {
this.writeUnlock$();
});

Clazz.newMeth(C$, 'fireChangedUpdate$javax_swing_event_DocumentEvent',  function (e) {
C$.superclazz.prototype.fireChangedUpdate$javax_swing_event_DocumentEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent',  function (e) {
C$.superclazz.prototype.fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'hasBaseTag$',  function () {
return this.hasBaseTag;
});

Clazz.newMeth(C$, 'getBaseTarget$',  function () {
return this.baseTarget;
});

C$.$static$=function(){C$.$static$=0;
C$.MAP_PROPERTY="__MAP__";
{
C$.contentAttributeSet=Clazz.new_($I$(5,1));
(C$.contentAttributeSet).addAttribute$O$O($I$(2).NameAttribute, $I$(4).CONTENT);
C$.NEWLINE=Clazz.array(Character.TYPE, [1]);
C$.NEWLINE[0]="\n";
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument, "Iterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pos','javax.swing.text.ElementIterator']]]

Clazz.newMeth(C$, '秘getElement$',  function () {
return this.pos.current$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument, "LeafIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.HTMLDocument','.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['endOffset'],'O',['tag','javax.swing.text.html.HTML.Tag']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_HTML_Tag$javax_swing_text_Document',  function (t, doc) {
Clazz.super_(C$, this);
this.tag=t;
this.pos=Clazz.new_($I$(1,1).c$$javax_swing_text_Document,[doc]);
this.endOffset=0;
this.next$();
}, 1);

Clazz.newMeth(C$, 'getAttributes$',  function () {
var elem=this.pos.current$();
if (elem != null ) {
var ea=elem.getAttributes$();
var a=ea.getAttribute$O(this.tag);
if (a == null ) {
a=elem.getAttributes$();
}return a;
}return null;
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
var elem=this.pos.current$();
if (elem != null ) {
return elem.getStartOffset$();
}return -1;
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
return this.endOffset;
});

Clazz.newMeth(C$, 'next$',  function () {
for (this.nextLeaf$javax_swing_text_ElementIterator(this.pos); this.isValid$(); this.nextLeaf$javax_swing_text_ElementIterator(this.pos)) {
var elem=this.pos.current$();
if (elem.getStartOffset$() >= this.endOffset) {
var a=this.pos.current$().getAttributes$();
if (a.isDefined$O(this.tag) || a.getAttribute$O($I$(2).NameAttribute) === this.tag  ) {
this.setEndOffset$();
break;
}}}
});

Clazz.newMeth(C$, 'getTag$',  function () {
return this.tag;
});

Clazz.newMeth(C$, 'isValid$',  function () {
return (this.pos.current$() != null );
});

Clazz.newMeth(C$, 'nextLeaf$javax_swing_text_ElementIterator',  function (iter) {
for (iter.next$(); iter.current$() != null ; iter.next$()) {
var e=iter.current$();
if (e.isLeaf$()) {
break;
}}
});

Clazz.newMeth(C$, 'setEndOffset$',  function () {
var a0=this.getAttributes$();
this.endOffset=this.pos.current$().getEndOffset$();
var fwd=this.pos.clone$();
for (this.nextLeaf$javax_swing_text_ElementIterator(fwd); fwd.current$() != null ; this.nextLeaf$javax_swing_text_ElementIterator(fwd)) {
var e=fwd.current$();
var a1=e.getAttributes$().getAttribute$O(this.tag);
if ((a1 == null ) || (!a1.equals$O(a0)) ) {
break;
}this.endOffset=e.getEndOffset$();
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument, "HTMLReader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLEditorKit','.ParserCallback']);
C$.$classes$=[['TagAction',1],['BlockAction',1],['FormTagAction',2],['ParagraphAction',1],['SpecialAction',1],['IsindexAction',1],['HiddenAction',1],['MetaAction',0],['HeadAction',0],['LinkAction',0],['MapAction',0],['AreaAction',0],['StyleAction',0],['PreAction',1],['CharacterAction',1],['ConvertAction',0],['AnchorAction',0],['TitleAction',0],['BaseAction',0],['ObjectAction',0],['FormAction',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inParagraph=false;
this.impliedP=false;
this.inPre=false;
this.inTextArea=false;
this.textAreaDocument=null;
this.inTitle=false;
this.lastWasNewline=true;
this.inStyle=false;
this.inHead=false;
this.parseBuffer=Clazz.new_($I$(8,1));
this.charAttr=Clazz.new_($I$(22,1));
this.charAttrStack=Clazz.new_($I$(23,1));
this.inBlock=0;
this.nextTagAfterPImplied=null;
},1);

C$.$fields$=[['Z',['receivedEndHTML','insertAfterImplied','wantsTrailingNewline','inParagraph','impliedP','inPre','inTextArea','inTitle','lastWasNewline','emptyAnchor','midInsert','inBody','insertInsertTag','foundInsertTag','inStyle','inHead','isStyleCSS','emptyDocument'],'I',['flushCount','threshold','offset','insertTagDepthDelta','popDepth','pushDepth','inBlock'],'S',['defaultStyle'],'O',['textAreaDocument','javax.swing.text.html.TextAreaDocument','insertTag','javax.swing.text.html.HTML.Tag','lastMap','javax.swing.text.html.Map','styles','java.util.Vector','styleAttributes','javax.swing.text.AttributeSet','option','javax.swing.text.html.Option','parseBuffer','java.util.Vector','charAttr','javax.swing.text.MutableAttributeSet','charAttrStack','java.util.Stack','tagMap','java.util.Hashtable','nextTagAfterPImplied','javax.swing.text.html.HTML.Tag']]]

Clazz.newMeth(C$, 'c$$I',  function (offset) {
C$.c$$I$I$I$javax_swing_text_html_HTML_Tag.apply(this, [offset, 0, 0, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$javax_swing_text_html_HTML_Tag',  function (offset, popDepth, pushDepth, insertTag) {
C$.c$$I$I$I$javax_swing_text_html_HTML_Tag$Z$Z$Z.apply(this, [offset, popDepth, pushDepth, insertTag, true, false, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$javax_swing_text_html_HTML_Tag$Z$Z$Z',  function (offset, popDepth, pushDepth, insertTag, insertInsertTag, insertAfterImplied, wantsTrailingNewline) {
Clazz.super_(C$, this);
this.emptyDocument=(this.b$['javax.swing.text.AbstractDocument'].getLength$.apply(this.b$['javax.swing.text.AbstractDocument'], []) == 0);
this.isStyleCSS="text/css".equals$O(this.b$['javax.swing.text.html.HTMLDocument'].getDefaultStyleSheetType$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []));
this.offset=offset;
this.threshold=this.b$['javax.swing.text.html.HTMLDocument'].getTokenThreshold$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []);
this.tagMap=Clazz.new_($I$(24,1).c$$I,[57]);
var na=Clazz.new_($I$(25,1),[this, null]);
var ba=Clazz.new_($I$(26,1),[this, null]);
var pa=Clazz.new_($I$(27,1),[this, null]);
var ca=Clazz.new_($I$(28,1),[this, null]);
var sa=Clazz.new_($I$(29,1),[this, null]);
var fa=Clazz.new_($I$(30,1),[this, null]);
var ha=Clazz.new_($I$(31,1),[this, null]);
var conv=Clazz.new_($I$(32,1),[this, null]);
this.tagMap.put$O$O($I$(4).A, Clazz.new_($I$(33,1),[this, null]));
this.tagMap.put$O$O($I$(4).ADDRESS, ca);
this.tagMap.put$O$O($I$(4).APPLET, ha);
this.tagMap.put$O$O($I$(4).AREA, Clazz.new_($I$(34,1),[this, null]));
this.tagMap.put$O$O($I$(4).B, conv);
this.tagMap.put$O$O($I$(4).BASE, Clazz.new_($I$(35,1),[this, null]));
this.tagMap.put$O$O($I$(4).BASEFONT, ca);
this.tagMap.put$O$O($I$(4).BIG, ca);
this.tagMap.put$O$O($I$(4).BLOCKQUOTE, ba);
this.tagMap.put$O$O($I$(4).BODY, ba);
this.tagMap.put$O$O($I$(4).BR, sa);
this.tagMap.put$O$O($I$(4).CAPTION, ba);
this.tagMap.put$O$O($I$(4).CENTER, ba);
this.tagMap.put$O$O($I$(4).CITE, ca);
this.tagMap.put$O$O($I$(4).CODE, ca);
this.tagMap.put$O$O($I$(4).DD, ba);
this.tagMap.put$O$O($I$(4).DFN, ca);
this.tagMap.put$O$O($I$(4).DIR, ba);
this.tagMap.put$O$O($I$(4).DIV, ba);
this.tagMap.put$O$O($I$(4).DL, ba);
this.tagMap.put$O$O($I$(4).DT, pa);
this.tagMap.put$O$O($I$(4).EM, ca);
this.tagMap.put$O$O($I$(4).FONT, conv);
this.tagMap.put$O$O($I$(4).FORM, Clazz.new_($I$(36,1),[this, null]));
this.tagMap.put$O$O($I$(4).FRAME, sa);
this.tagMap.put$O$O($I$(4).FRAMESET, ba);
this.tagMap.put$O$O($I$(4).H1, pa);
this.tagMap.put$O$O($I$(4).H2, pa);
this.tagMap.put$O$O($I$(4).H3, pa);
this.tagMap.put$O$O($I$(4).H4, pa);
this.tagMap.put$O$O($I$(4).H5, pa);
this.tagMap.put$O$O($I$(4).H6, pa);
this.tagMap.put$O$O($I$(4).HEAD, Clazz.new_($I$(37,1),[this, null]));
this.tagMap.put$O$O($I$(4).HR, sa);
this.tagMap.put$O$O($I$(4).HTML, ba);
this.tagMap.put$O$O($I$(4).I, conv);
this.tagMap.put$O$O($I$(4).IMG, sa);
this.tagMap.put$O$O($I$(4).INPUT, fa);
this.tagMap.put$O$O($I$(4).ISINDEX, Clazz.new_($I$(38,1),[this, null]));
this.tagMap.put$O$O($I$(4).KBD, ca);
this.tagMap.put$O$O($I$(4).LI, ba);
this.tagMap.put$O$O($I$(4).LINK, Clazz.new_($I$(39,1),[this, null]));
this.tagMap.put$O$O($I$(4).MAP, Clazz.new_($I$(40,1),[this, null]));
this.tagMap.put$O$O($I$(4).MENU, ba);
this.tagMap.put$O$O($I$(4).META, Clazz.new_($I$(41,1),[this, null]));
this.tagMap.put$O$O($I$(4).NOBR, ca);
this.tagMap.put$O$O($I$(4).NOFRAMES, ba);
this.tagMap.put$O$O($I$(4).OBJECT, sa);
this.tagMap.put$O$O($I$(4).OL, ba);
this.tagMap.put$O$O($I$(4).OPTION, fa);
this.tagMap.put$O$O($I$(4).P, pa);
this.tagMap.put$O$O($I$(4).PARAM, Clazz.new_($I$(42,1),[this, null]));
this.tagMap.put$O$O($I$(4).PRE, Clazz.new_($I$(43,1),[this, null]));
this.tagMap.put$O$O($I$(4).SAMP, ca);
this.tagMap.put$O$O($I$(4).SCRIPT, ha);
this.tagMap.put$O$O($I$(4).SELECT, fa);
this.tagMap.put$O$O($I$(4).SMALL, ca);
this.tagMap.put$O$O($I$(4).SPAN, ca);
this.tagMap.put$O$O($I$(4).STRIKE, conv);
this.tagMap.put$O$O($I$(4).S, ca);
this.tagMap.put$O$O($I$(4).STRONG, ca);
this.tagMap.put$O$O($I$(4).STYLE, Clazz.new_($I$(44,1),[this, null]));
this.tagMap.put$O$O($I$(4).SUB, conv);
this.tagMap.put$O$O($I$(4).SUP, conv);
this.tagMap.put$O$O($I$(4).TABLE, ba);
this.tagMap.put$O$O($I$(4).TD, ba);
this.tagMap.put$O$O($I$(4).TEXTAREA, fa);
this.tagMap.put$O$O($I$(4).TH, ba);
this.tagMap.put$O$O($I$(4).TITLE, Clazz.new_($I$(45,1),[this, null]));
this.tagMap.put$O$O($I$(4).TR, ba);
this.tagMap.put$O$O($I$(4).TT, ca);
this.tagMap.put$O$O($I$(4).U, conv);
this.tagMap.put$O$O($I$(4).UL, ba);
this.tagMap.put$O$O($I$(4).VAR, ca);
if (insertTag != null ) {
this.insertTag=insertTag;
this.popDepth=popDepth;
this.pushDepth=pushDepth;
this.insertInsertTag=insertInsertTag;
this.foundInsertTag=false;
} else {
this.foundInsertTag=true;
}if (insertAfterImplied) {
this.popDepth=popDepth;
this.pushDepth=pushDepth;
this.insertAfterImplied=true;
this.foundInsertTag=false;
this.midInsert=false;
this.insertInsertTag=true;
this.wantsTrailingNewline=wantsTrailingNewline;
} else {
this.midInsert=(!this.emptyDocument && insertTag == null  );
if (this.midInsert) {
p$2.generateEndsSpecsForMidInsert.apply(this, []);
}}if (!this.emptyDocument && !this.midInsert ) {
var targetOffset=Math.max(this.offset - 1, 0);
var elem=this.b$['javax.swing.text.html.HTMLDocument'].getCharacterElement$I.apply(this.b$['javax.swing.text.html.HTMLDocument'], [targetOffset]);
for (var i=0; i <= this.popDepth; i++) {
elem=elem.getParentElement$();
}
for (var i=0; i < this.pushDepth; i++) {
var index=elem.getElementIndex$I(this.offset);
elem=elem.getElement$I(index);
}
var attrs=elem.getAttributes$();
if (attrs != null ) {
var tagToInsertInto=attrs.getAttribute$O($I$(2).NameAttribute);
if (tagToInsertInto != null ) {
this.inParagraph=tagToInsertInto.isParagraph$();
}}}}, 1);

Clazz.newMeth(C$, 'generateEndsSpecsForMidInsert',  function () {
var count=p$2.heightToElementWithName$O$I.apply(this, [$I$(4).BODY, Math.max(0, this.offset - 1)]);
var joinNext=false;
if (count == -1 && this.offset > 0 ) {
count=p$2.heightToElementWithName$O$I.apply(this, [$I$(4).BODY, this.offset]);
if (count != -1) {
count=p$2.depthTo$I.apply(this, [this.offset - 1]) - 1;
joinNext=true;
}}if (count == -1) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Must insert new content into body element-"]);
}if (count != -1) {
try {
if (!joinNext && this.offset > 0  && !this.b$['javax.swing.text.AbstractDocument'].getText$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [this.offset - 1, 1]).equals$O("\n") ) {
var newAttrs=Clazz.new_($I$(5,1));
newAttrs.addAttribute$O$O($I$(2).NameAttribute, $I$(4).CONTENT);
var spec=Clazz.new_([newAttrs, 3, $I$(47).NEWLINE, 0, 1],$I$(46,1).c$$javax_swing_text_AttributeSet$H$CA$I$I);
this.parseBuffer.addElement$O(spec);
}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
while (count-- > 0){
this.parseBuffer.addElement$O(Clazz.new_($I$(46,1).c$$javax_swing_text_AttributeSet$H,[null, 2]));
}
if (joinNext) {
var spec=Clazz.new_($I$(46,1).c$$javax_swing_text_AttributeSet$H,[null, 1]);
spec.setDirection$H(5);
this.parseBuffer.addElement$O(spec);
}}}, p$2);

Clazz.newMeth(C$, 'depthTo$I',  function (offset) {
var e=this.b$['javax.swing.text.DefaultStyledDocument'].getDefaultRootElement$.apply(this.b$['javax.swing.text.DefaultStyledDocument'], []);
var count=0;
while (!e.isLeaf$()){
++count;
e=e.getElement$I(e.getElementIndex$I(offset));
}
return count;
}, p$2);

Clazz.newMeth(C$, 'heightToElementWithName$O$I',  function (name, offset) {
var e=this.b$['javax.swing.text.DefaultStyledDocument'].getCharacterElement$I.apply(this.b$['javax.swing.text.DefaultStyledDocument'], [offset]).getParentElement$();
var count=0;
while (e != null  && e.getAttributes$().getAttribute$O($I$(2).NameAttribute) !== name  ){
++count;
e=e.getParentElement$();
}
return (e == null ) ? -1 : count;
}, p$2);

Clazz.newMeth(C$, 'adjustEndElement',  function () {
var length=this.b$['javax.swing.text.AbstractDocument'].getLength$.apply(this.b$['javax.swing.text.AbstractDocument'], []);
if (length == 0) {
return;
}this.b$['javax.swing.text.html.HTMLDocument'].obtainLock$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []);
try {
var pPath=p$2.getPathTo$I.apply(this, [length - 1]);
var pLength=pPath.length;
if (pLength > 1 && pPath[1].getAttributes$().getAttribute$O($I$(2).NameAttribute) === $I$(4).BODY   && pPath[1].getEndOffset$() == length ) {
var lastText=this.b$['javax.swing.text.AbstractDocument'].getText$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [length - 1, 1]);
var event;
var added;
var removed;
var index;
added=Clazz.array($I$(48), [0]);
removed=Clazz.array($I$(48), [1]);
index=pPath[0].getElementIndex$I(length);
removed[0]=pPath[0].getElement$I(index);
(pPath[0]).replace$I$I$javax_swing_text_ElementA(index, 1, added);
var firstEdit=Clazz.new_($I$(49,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA,[pPath[0], index, removed, added]);
var sas=Clazz.new_($I$(5,1));
sas.addAttribute$O$O($I$(2).NameAttribute, $I$(4).CONTENT);
sas.addAttribute$O$O("CR", Boolean.TRUE);
added=Clazz.array($I$(48), [1]);
added[0]=this.b$['javax.swing.text.html.HTMLDocument'].createLeafElement$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this.b$['javax.swing.text.html.HTMLDocument'], [pPath[pLength - 1], sas, length, length + 1]);
index=pPath[pLength - 1].getElementCount$();
(pPath[pLength - 1]).replace$I$I$javax_swing_text_ElementA(index, 0, added);
event=Clazz.new_([this, null, length, 1, $I$(51).CHANGE],$I$(50,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
event.addEdit$javax_swing_undo_UndoableEdit(Clazz.new_([pPath[pLength - 1], index, Clazz.array($I$(48), [0]), added],$I$(49,1).c$$javax_swing_text_Element$I$javax_swing_text_ElementA$javax_swing_text_ElementA));
event.addEdit$javax_swing_undo_UndoableEdit(firstEdit);
event.end$();
this.b$['javax.swing.text.html.HTMLDocument'].fireChangedUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.html.HTMLDocument'], [event]);
this.b$['javax.swing.text.html.HTMLDocument'].fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent.apply(this.b$['javax.swing.text.html.HTMLDocument'], [Clazz.new_($I$(52,1).c$$O$javax_swing_undo_UndoableEdit,[this, event])]);
if (lastText.equals$O("\n")) {
event=Clazz.new_([this, null, length - 1, 1, $I$(51).REMOVE],$I$(50,1).c$$I$I$javax_swing_event_DocumentEvent_EventType);
this.b$['javax.swing.text.DefaultStyledDocument'].removeUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent.apply(this.b$['javax.swing.text.DefaultStyledDocument'], [event]);
var u=this.b$['javax.swing.text.AbstractDocument'].getContent$.apply(this.b$['javax.swing.text.AbstractDocument'], []).remove$I$I(length - 1, 1);
if (u != null ) {
event.addEdit$javax_swing_undo_UndoableEdit(u);
}this.b$['javax.swing.text.AbstractDocument'].postRemoveUpdate$javax_swing_text_AbstractDocument_DefaultDocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [event]);
event.end$();
this.b$['javax.swing.text.AbstractDocument'].fireRemoveUpdate$javax_swing_event_DocumentEvent.apply(this.b$['javax.swing.text.AbstractDocument'], [event]);
this.b$['javax.swing.text.html.HTMLDocument'].fireUndoableEditUpdate$javax_swing_event_UndoableEditEvent.apply(this.b$['javax.swing.text.html.HTMLDocument'], [Clazz.new_($I$(52,1).c$$O$javax_swing_undo_UndoableEdit,[this, event])]);
}}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
} finally {
this.b$['javax.swing.text.html.HTMLDocument'].releaseLock$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []);
}
}, p$2);

Clazz.newMeth(C$, 'getPathTo$I',  function (offset) {
var elements=Clazz.new_($I$(23,1));
var e=this.b$['javax.swing.text.DefaultStyledDocument'].getDefaultRootElement$.apply(this.b$['javax.swing.text.DefaultStyledDocument'], []);
var index;
while (!e.isLeaf$()){
elements.push$O(e);
e=e.getElement$I(e.getElementIndex$I(offset));
}
var retValue=Clazz.array($I$(48), [elements.size$()]);
elements.copyInto$OA(retValue);
return retValue;
}, p$2);

Clazz.newMeth(C$, 'flush$',  function () {
if (this.emptyDocument && !this.insertAfterImplied ) {
if (this.b$['javax.swing.text.html.HTMLDocument'].getLength$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []) > 0 || this.parseBuffer.size$() > 0 ) {
this.flushBuffer$Z(true);
p$2.adjustEndElement.apply(this, []);
}} else {
this.flushBuffer$Z(true);
}});

Clazz.newMeth(C$, 'handleText$CA$I',  function (data, pos) {
if (this.receivedEndHTML || (this.midInsert && !this.inBody ) ) {
return;
}if (Boolean.FALSE.equals$O(this.b$['javax.swing.text.html.HTMLDocument'].getProperty$O.apply(this.b$['javax.swing.text.html.HTMLDocument'], ["i18n"]))) {
var d=this.b$['javax.swing.text.AbstractDocument'].getProperty$O.apply(this.b$['javax.swing.text.AbstractDocument'], [$I$(53).RUN_DIRECTION]);
if ((d != null ) && (d.equals$O($I$(53).RUN_DIRECTION_RTL)) ) {
this.b$['javax.swing.text.html.HTMLDocument'].putProperty$O$O.apply(this.b$['javax.swing.text.html.HTMLDocument'], ["i18n", Boolean.TRUE]);
} else {
if ($I$(54).isComplexLayout$CA$I$I(data, 0, data.length)) {
this.b$['javax.swing.text.html.HTMLDocument'].putProperty$O$O.apply(this.b$['javax.swing.text.html.HTMLDocument'], ["i18n", Boolean.TRUE]);
}}}if (this.inTextArea) {
this.textAreaContent$CA(data);
} else if (this.inPre) {
this.preContent$CA(data);
} else if (this.inTitle) {
this.b$['javax.swing.text.AbstractDocument'].putProperty$O$O.apply(this.b$['javax.swing.text.AbstractDocument'], ["title",  String.instantialize(data)]);
} else if (this.option != null ) {
this.option.setLabel$S( String.instantialize(data));
} else if (this.inStyle) {
if (this.styles != null ) {
this.styles.addElement$O( String.instantialize(data));
}} else if (this.inBlock > 0) {
if (!this.foundInsertTag && this.insertAfterImplied ) {
p$2.foundInsertTag$Z.apply(this, [false]);
this.foundInsertTag=true;
this.inParagraph=this.impliedP=!this.b$['javax.swing.text.html.HTMLDocument'].insertInBody;
}if (data.length >= 1) {
this.addContent$CA$I$I(data, 0, data.length);
}}});

Clazz.newMeth(C$, 'handleStartTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I',  function (t, a, pos) {
if (this.receivedEndHTML) {
return;
}if (this.midInsert && !this.inBody ) {
if (t === $I$(4).BODY ) {
this.inBody=true;
++this.inBlock;
}return;
}if (!this.inBody && t === $I$(4).BODY  ) {
this.inBody=true;
}if (this.isStyleCSS && a.isDefined$O($I$(6).STYLE) ) {
var decl=a.getAttribute$O($I$(6).STYLE);
a.removeAttribute$O($I$(6).STYLE);
this.styleAttributes=this.b$['javax.swing.text.html.HTMLDocument'].getStyleSheet$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []).getDeclaration$S(decl);
a.addAttributes$javax_swing_text_AttributeSet(this.styleAttributes);
} else {
this.styleAttributes=null;
}var action=this.tagMap.get$O(t);
if (action != null ) {
action.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet(t, a);
}});

Clazz.newMeth(C$, 'handleComment$CA$I',  function (data, pos) {
if (this.receivedEndHTML) {
p$2.addExternalComment$S.apply(this, [ String.instantialize(data)]);
return;
}if (this.inStyle) {
if (this.styles != null ) {
this.styles.addElement$O( String.instantialize(data));
}} else if (this.b$['javax.swing.text.html.HTMLDocument'].getPreservesUnknownTags$.apply(this.b$['javax.swing.text.html.HTMLDocument'], [])) {
if (this.inBlock == 0 && (this.foundInsertTag || this.insertTag !== $I$(4).COMMENT  ) ) {
p$2.addExternalComment$S.apply(this, [ String.instantialize(data)]);
return;
}var sas=Clazz.new_($I$(5,1));
sas.addAttribute$O$O($I$(6).COMMENT,  String.instantialize(data));
this.addSpecialElement$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet($I$(4).COMMENT, sas);
}var action=this.tagMap.get$O($I$(4).COMMENT);
if (action != null ) {
action.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet($I$(4).COMMENT, Clazz.new_($I$(5,1)));
action.end$javax_swing_text_html_HTML_Tag($I$(4).COMMENT);
}});

Clazz.newMeth(C$, 'addExternalComment$S',  function (comment) {
var comments=this.b$['javax.swing.text.AbstractDocument'].getProperty$O.apply(this.b$['javax.swing.text.AbstractDocument'], ["AdditionalComments"]);
if (comments != null  && !(Clazz.instanceOf(comments, "java.util.Vector")) ) {
return;
}if (comments == null ) {
comments=Clazz.new_($I$(8,1));
this.b$['javax.swing.text.AbstractDocument'].putProperty$O$O.apply(this.b$['javax.swing.text.AbstractDocument'], ["AdditionalComments", comments]);
}(comments).addElement$O(comment);
}, p$2);

Clazz.newMeth(C$, 'handleEndTag$javax_swing_text_html_HTML_Tag$I',  function (t, pos) {
if (this.receivedEndHTML || (this.midInsert && !this.inBody ) ) {
return;
}if (t === $I$(4).HTML ) {
this.receivedEndHTML=true;
}if (t === $I$(4).BODY ) {
this.inBody=false;
if (this.midInsert) {
--this.inBlock;
}}var action=this.tagMap.get$O(t);
if (action != null ) {
action.end$javax_swing_text_html_HTML_Tag(t);
}});

Clazz.newMeth(C$, 'handleSimpleTag$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet$I',  function (t, a, pos) {
if (this.receivedEndHTML || (this.midInsert && !this.inBody ) ) {
return;
}if (this.isStyleCSS && a.isDefined$O($I$(6).STYLE) ) {
var decl=a.getAttribute$O($I$(6).STYLE);
a.removeAttribute$O($I$(6).STYLE);
this.styleAttributes=this.b$['javax.swing.text.html.HTMLDocument'].getStyleSheet$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []).getDeclaration$S(decl);
a.addAttributes$javax_swing_text_AttributeSet(this.styleAttributes);
} else {
this.styleAttributes=null;
}var action=this.tagMap.get$O(t);
if (action != null ) {
action.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet(t, a);
action.end$javax_swing_text_html_HTML_Tag(t);
} else if (this.b$['javax.swing.text.html.HTMLDocument'].getPreservesUnknownTags$.apply(this.b$['javax.swing.text.html.HTMLDocument'], [])) {
this.addSpecialElement$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet(t, a);
}});

Clazz.newMeth(C$, 'handleEndOfLineString$S',  function (eol) {
if (this.emptyDocument && eol != null  ) {
this.b$['javax.swing.text.AbstractDocument'].putProperty$O$O.apply(this.b$['javax.swing.text.AbstractDocument'], ["__EndOfLine__", eol]);
}});

Clazz.newMeth(C$, 'registerTag$javax_swing_text_html_HTML_Tag$javax_swing_text_html_HTMLDocument_HTMLReader_TagAction',  function (t, a) {
this.tagMap.put$O$O(t, a);
});

Clazz.newMeth(C$, 'pushCharacterStyle$',  function () {
this.charAttrStack.push$O(this.charAttr.copyAttributes$());
});

Clazz.newMeth(C$, 'popCharacterStyle$',  function () {
if (!this.charAttrStack.empty$()) {
this.charAttr=this.charAttrStack.peek$();
this.charAttrStack.pop$();
}});

Clazz.newMeth(C$, 'textAreaContent$CA',  function (data) {
try {
this.textAreaDocument.insertString$I$S$javax_swing_text_AttributeSet(this.textAreaDocument.getLength$(),  String.instantialize(data), null);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'preContent$CA',  function (data) {
var last=0;
for (var i=0; i < data.length; i++) {
if (data[i] == "\n") {
this.addContent$CA$I$I(data, last, i - last + 1);
this.blockClose$javax_swing_text_html_HTML_Tag($I$(4).IMPLIED);
var a=Clazz.new_($I$(5,1));
a.addAttribute$O$O($I$(10).WHITE_SPACE, "pre");
this.blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet($I$(4).IMPLIED, a);
last=i + 1;
}}
if (last < data.length) {
this.addContent$CA$I$I(data, last, data.length - last);
}});

Clazz.newMeth(C$, 'blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
if (this.impliedP) {
this.blockClose$javax_swing_text_html_HTML_Tag($I$(4).IMPLIED);
}++this.inBlock;
if (!p$2.canInsertTag$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$Z.apply(this, [t, attr, true])) {
return;
}if (attr.isDefined$O($I$(7).IMPLIED)) {
attr.removeAttribute$O($I$(7).IMPLIED);
}this.lastWasNewline=false;
attr.addAttribute$O$O($I$(2).NameAttribute, t);
var es=Clazz.new_([attr.copyAttributes$(), 1],$I$(46,1).c$$javax_swing_text_AttributeSet$H);
this.parseBuffer.addElement$O(es);
});

Clazz.newMeth(C$, 'blockClose$javax_swing_text_html_HTML_Tag',  function (t) {
--this.inBlock;
if (!this.foundInsertTag) {
return;
}if (!this.lastWasNewline) {
this.pushCharacterStyle$();
this.charAttr.addAttribute$O$O("CR", Boolean.TRUE);
this.addContent$CA$I$I$Z($I$(47).NEWLINE, 0, 1, true);
this.popCharacterStyle$();
this.lastWasNewline=true;
}if (this.impliedP) {
this.impliedP=false;
this.inParagraph=false;
if (t !== $I$(4).IMPLIED ) {
this.blockClose$javax_swing_text_html_HTML_Tag($I$(4).IMPLIED);
}}var prev=(this.parseBuffer.size$() > 0) ? this.parseBuffer.lastElement$() : null;
if (prev != null  && prev.getType$() == 1 ) {
var one=Clazz.array(Character.TYPE, [1]);
one[0]=" ";
this.addContent$CA$I$I(one, 0, 1);
}var es=Clazz.new_($I$(46,1).c$$javax_swing_text_AttributeSet$H,[null, 2]);
this.parseBuffer.addElement$O(es);
});

Clazz.newMeth(C$, 'addContent$CA$I$I',  function (data, offs, length) {
this.addContent$CA$I$I$Z(data, offs, length, true);
});

Clazz.newMeth(C$, 'addContent$CA$I$I$Z',  function (data, offs, length, generateImpliedPIfNecessary) {
if (!this.foundInsertTag) {
return;
}if (generateImpliedPIfNecessary && (!this.inParagraph) && (!this.inPre)  ) {
this.blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet($I$(4).IMPLIED, Clazz.new_($I$(5,1)));
this.inParagraph=true;
this.impliedP=true;
}this.emptyAnchor=false;
this.charAttr.addAttribute$O$O($I$(2).NameAttribute, $I$(4).CONTENT);
var a=this.charAttr.copyAttributes$();
var es=Clazz.new_($I$(46,1).c$$javax_swing_text_AttributeSet$H$CA$I$I,[a, 3, data, offs, length]);
this.parseBuffer.addElement$O(es);
if (this.parseBuffer.size$() > this.threshold) {
if (this.threshold <= 10000) {
this.threshold*=5;
}try {
this.flushBuffer$Z(false);
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}if (length > 0) {
this.lastWasNewline=(data[offs + length - 1] == "\n");
}});

Clazz.newMeth(C$, 'addSpecialElement$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
if ((t !== $I$(4).FRAME ) && (!this.inParagraph) && (!this.inPre)  ) {
this.nextTagAfterPImplied=t;
this.blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet($I$(4).IMPLIED, Clazz.new_($I$(5,1)));
this.nextTagAfterPImplied=null;
this.inParagraph=true;
this.impliedP=true;
}if (!p$2.canInsertTag$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$Z.apply(this, [t, a, t.isBlock$()])) {
return;
}if (a.isDefined$O($I$(7).IMPLIED)) {
a.removeAttribute$O($I$(7).IMPLIED);
}this.emptyAnchor=false;
a.addAttributes$javax_swing_text_AttributeSet(this.charAttr);
a.addAttribute$O$O($I$(2).NameAttribute, t);
var one=Clazz.array(Character.TYPE, [1]);
one[0]=" ";
var es=Clazz.new_([a.copyAttributes$(), 3, one, 0, 1],$I$(46,1).c$$javax_swing_text_AttributeSet$H$CA$I$I);
this.parseBuffer.addElement$O(es);
if (t === $I$(4).FRAME ) {
this.lastWasNewline=true;
}});

Clazz.newMeth(C$, 'flushBuffer$Z',  function (endOfStream) {
var oldLength=this.b$['javax.swing.text.html.HTMLDocument'].getLength$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []);
var size=this.parseBuffer.size$();
if (endOfStream && (this.insertTag != null  || this.insertAfterImplied ) && size > 0  ) {
p$2.adjustEndSpecsForPartialInsert.apply(this, []);
size=this.parseBuffer.size$();
}var spec=Clazz.array($I$(46), [size]);
this.parseBuffer.copyInto$OA(spec);
if (oldLength == 0 && (this.insertTag == null  && !this.insertAfterImplied ) ) {
this.b$['javax.swing.text.html.HTMLDocument'].create$javax_swing_text_DefaultStyledDocument_ElementSpecA.apply(this.b$['javax.swing.text.html.HTMLDocument'], [spec]);
} else {
this.b$['javax.swing.text.html.HTMLDocument'].insert$I$javax_swing_text_DefaultStyledDocument_ElementSpecA.apply(this.b$['javax.swing.text.html.HTMLDocument'], [this.offset, spec]);
}this.parseBuffer.removeAllElements$();
this.offset+=this.b$['javax.swing.text.html.HTMLDocument'].getLength$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []) - oldLength;
++this.flushCount;
});

Clazz.newMeth(C$, 'adjustEndSpecsForPartialInsert',  function () {
var size=this.parseBuffer.size$();
if (this.insertTagDepthDelta < 0) {
var removeCounter=this.insertTagDepthDelta;
while (removeCounter < 0 && size >= 0  && this.parseBuffer.elementAt$I(size - 1).getType$() == 2 ){
this.parseBuffer.removeElementAt$I(--size);
++removeCounter;
}
}if (this.flushCount == 0 && (!this.insertAfterImplied || !this.wantsTrailingNewline ) ) {
var index=0;
if (this.pushDepth > 0) {
if (this.parseBuffer.elementAt$I(0).getType$() == 3) {
++index;
}}index+=(this.popDepth + this.pushDepth);
var cCount=0;
var cStart=index;
while (index < size && this.parseBuffer.elementAt$I(index).getType$() == 3 ){
++index;
++cCount;
}
if (cCount > 1) {
while (index < size && this.parseBuffer.elementAt$I(index).getType$() == 2 ){
++index;
}
if (index == size) {
var lastText=this.parseBuffer.elementAt$I(cStart + cCount - 1).getArray$();
if (lastText.length == 1 && lastText[0] == $I$(47).NEWLINE[0] ) {
index=cStart + cCount - 1;
while (size > index){
this.parseBuffer.removeElementAt$I(--size);
}
}}}}if (this.wantsTrailingNewline) {
for (var counter=this.parseBuffer.size$() - 1; counter >= 0; counter--) {
var spec=this.parseBuffer.elementAt$I(counter);
if (spec.getType$() == 3) {
if (spec.getArray$()[spec.getLength$() - 1] != "\n") {
var attrs=Clazz.new_($I$(5,1));
attrs.addAttribute$O$O($I$(2).NameAttribute, $I$(4).CONTENT);
this.parseBuffer.insertElementAt$O$I(Clazz.new_([attrs, 3, $I$(47).NEWLINE, 0, 1],$I$(46,1).c$$javax_swing_text_AttributeSet$H$CA$I$I), counter + 1);
}break;
}}
}}, p$2);

Clazz.newMeth(C$, 'addCSSRules$S',  function (rules) {
var ss=this.b$['javax.swing.text.html.HTMLDocument'].getStyleSheet$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []);
ss.addRule$S(rules);
});

Clazz.newMeth(C$, 'linkCSSStyleSheet$S',  function (href) {
var url;
try {
url=Clazz.new_($I$(11,1).c$$java_net_URL$S,[this.b$['javax.swing.text.html.HTMLDocument'].base, href]);
} catch (mfe) {
if (Clazz.exceptionOf(mfe,"java.net.MalformedURLException")){
try {
url=Clazz.new_($I$(11,1).c$$S,[href]);
} catch (mfe2) {
if (Clazz.exceptionOf(mfe2,"java.net.MalformedURLException")){
url=null;
} else {
throw mfe2;
}
}
} else {
throw mfe;
}
}
if (url != null ) {
this.b$['javax.swing.text.html.HTMLDocument'].getStyleSheet$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []).importStyleSheet$java_net_URL(url);
}});

Clazz.newMeth(C$, 'canInsertTag$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$Z',  function (t, attr, isBlockTag) {
if (!this.foundInsertTag) {
var needPImplied=((t === $I$(4).IMPLIED ) && (!this.inParagraph) && (!this.inPre)  );
if (needPImplied && (this.nextTagAfterPImplied != null ) ) {
if (this.insertTag != null ) {
var nextTagIsInsertTag=p$2.isInsertTag$javax_swing_text_html_HTML_Tag.apply(this, [this.nextTagAfterPImplied]);
if ((!nextTagIsInsertTag) || (!this.insertInsertTag) ) {
return false;
}}} else if ((this.insertTag != null  && !p$2.isInsertTag$javax_swing_text_html_HTML_Tag.apply(this, [t]) ) || (this.insertAfterImplied && (attr == null  || attr.isDefined$O($I$(7).IMPLIED)  || t === $I$(4).IMPLIED  ) ) ) {
return false;
}p$2.foundInsertTag$Z.apply(this, [isBlockTag]);
if (!this.insertInsertTag) {
return false;
}}return true;
}, p$2);

Clazz.newMeth(C$, 'isInsertTag$javax_swing_text_html_HTML_Tag',  function (tag) {
return (this.insertTag === tag );
}, p$2);

Clazz.newMeth(C$, 'foundInsertTag$Z',  function (isBlockTag) {
this.foundInsertTag=true;
if (!this.insertAfterImplied && (this.popDepth > 0 || this.pushDepth > 0 ) ) {
try {
if (this.offset == 0 || !this.b$['javax.swing.text.AbstractDocument'].getText$I$I.apply(this.b$['javax.swing.text.AbstractDocument'], [this.offset - 1, 1]).equals$O("\n") ) {
var newAttrs=null;
var joinP=true;
if (this.offset != 0) {
var charElement=this.b$['javax.swing.text.DefaultStyledDocument'].getCharacterElement$I.apply(this.b$['javax.swing.text.DefaultStyledDocument'], [this.offset - 1]);
var attrs=charElement.getAttributes$();
if (attrs.isDefined$O($I$(2).ComposedTextAttribute)) {
joinP=false;
} else {
var name=attrs.getAttribute$O($I$(2).NameAttribute);
if (Clazz.instanceOf(name, "javax.swing.text.html.HTML.Tag")) {
var tag=name;
if (tag === $I$(4).IMG  || tag === $I$(4).HR   || tag === $I$(4).COMMENT   || (Clazz.instanceOf(tag, "javax.swing.text.html.HTML.UnknownTag")) ) {
joinP=false;
}}}}if (!joinP) {
newAttrs=Clazz.new_($I$(5,1));
(newAttrs).addAttribute$O$O($I$(2).NameAttribute, $I$(4).CONTENT);
}var es=Clazz.new_([newAttrs, 3, $I$(47).NEWLINE, 0, $I$(47).NEWLINE.length],$I$(46,1).c$$javax_swing_text_AttributeSet$H$CA$I$I);
if (joinP) {
es.setDirection$H(4);
}this.parseBuffer.addElement$O(es);
}} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
} else {
throw ble;
}
}
}for (var counter=0; counter < this.popDepth; counter++) {
this.parseBuffer.addElement$O(Clazz.new_($I$(46,1).c$$javax_swing_text_AttributeSet$H,[null, 2]));
}
for (var counter=0; counter < this.pushDepth; counter++) {
var es=Clazz.new_($I$(46,1).c$$javax_swing_text_AttributeSet$H,[null, 1]);
es.setDirection$H(5);
this.parseBuffer.addElement$O(es);
}
this.insertTagDepthDelta=p$2.depthTo$I.apply(this, [Math.max(0, this.offset - 1)]) - this.popDepth + this.pushDepth - this.inBlock;
if (isBlockTag) {
++this.insertTagDepthDelta;
} else {
--this.insertTagDepthDelta;
this.inParagraph=true;
this.lastWasNewline=false;
}}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "TagAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "BlockAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, attr]);
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockClose$javax_swing_text_html_HTML_Tag.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "FormTagAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.BlockAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, attr]);
this.b$['javax.swing.text.html.HTMLDocument'].radioButtonGroupsMap=Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
C$.superclazz.prototype.end$javax_swing_text_html_HTML_Tag.apply(this, [t]);
this.b$['javax.swing.text.html.HTMLDocument'].radioButtonGroupsMap=null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "ParagraphAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.BlockAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, a]);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inParagraph=true;
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
C$.superclazz.prototype.end$javax_swing_text_html_HTML_Tag.apply(this, [t]);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inParagraph=false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "SpecialAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].addSpecialElement$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, a]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "IsindexAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [$I$(4).IMPLIED, Clazz.new_($I$(5,1))]);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].addSpecialElement$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, a]);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockClose$javax_swing_text_html_HTML_Tag.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [$I$(4).IMPLIED]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "HiddenAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].addSpecialElement$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, a]);
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
if (!this.isEmpty$javax_swing_text_html_HTML_Tag(t)) {
var a=Clazz.new_($I$(5,1));
a.addAttribute$O$O($I$(6).ENDTAG, "true");
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].addSpecialElement$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, a]);
}});

Clazz.newMeth(C$, 'isEmpty$javax_swing_text_html_HTML_Tag',  function (t) {
if (t === $I$(4).APPLET  || t === $I$(4).SCRIPT  ) {
return false;
}return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "MetaAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.HiddenAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
var equiv=a.getAttribute$O($I$(6).HTTPEQUIV);
if (equiv != null ) {
equiv=(equiv).toLowerCase$();
if (equiv.equals$O("content-style-type")) {
var value=a.getAttribute$O($I$(6).CONTENT);
this.b$['javax.swing.text.html.HTMLDocument'].setDefaultStyleSheetType$S.apply(this.b$['javax.swing.text.html.HTMLDocument'], [value]);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].isStyleCSS="text/css".equals$O(this.b$['javax.swing.text.html.HTMLDocument'].getDefaultStyleSheetType$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []));
} else if (equiv.equals$O("default-style")) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].defaultStyle=a.getAttribute$O($I$(6).CONTENT);
}}C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, a]);
});

Clazz.newMeth(C$, 'isEmpty$javax_swing_text_html_HTML_Tag',  function (t) {
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "HeadAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.BlockAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inHead=true;
if ((this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertTag == null  && !this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertAfterImplied ) || (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertTag === $I$(4).HEAD ) || (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertAfterImplied && (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].foundInsertTag || !a.isDefined$O($I$(7).IMPLIED) ) )  ) {
C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, a]);
}});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inHead=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inStyle=false;
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles != null ) {
var isDefaultCSS=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].isStyleCSS;
for (var counter=0, maxCounter=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.size$(); counter < maxCounter; ) {
var value=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.elementAt$I(counter);
if (value === $I$(4).LINK ) {
p$1.handleLink$javax_swing_text_AttributeSet.apply(this, [this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.elementAt$I(++counter)]);
++counter;
} else {
var type=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.elementAt$I(++counter);
var isCSS=(type == null ) ? isDefaultCSS : type.equals$O("text/css");
while (++counter < maxCounter && (Clazz.instanceOf(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.elementAt$I(counter), "java.lang.String")) ){
if (isCSS) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].addCSSRules$S.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.elementAt$I(counter)]);
}}
}}
}if ((this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertTag == null  && !this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertAfterImplied ) || this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertTag === $I$(4).HEAD   || (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].insertAfterImplied && this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].foundInsertTag ) ) {
C$.superclazz.prototype.end$javax_swing_text_html_HTML_Tag.apply(this, [t]);
}});

Clazz.newMeth(C$, 'isEmpty$javax_swing_text_html_HTML_Tag',  function (t) {
return false;
});

Clazz.newMeth(C$, 'handleLink$javax_swing_text_AttributeSet',  function (attr) {
var type=attr.getAttribute$O($I$(6).TYPE);
if (type == null ) {
type=this.b$['javax.swing.text.html.HTMLDocument'].getDefaultStyleSheetType$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []);
}if (type.equals$O("text/css")) {
var rel=attr.getAttribute$O($I$(6).REL);
var title=attr.getAttribute$O($I$(6).TITLE);
var media=attr.getAttribute$O($I$(6).MEDIA);
if (media == null ) {
media="all";
} else {
media=media.toLowerCase$();
}if (rel != null ) {
rel=rel.toLowerCase$();
if ((media.indexOf$S("all") != -1 || media.indexOf$S("screen") != -1 ) && (rel.equals$O("stylesheet") || (rel.equals$O("alternate stylesheet") && title.equals$O(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].defaultStyle) ) ) ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].linkCSSStyleSheet$S.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [attr.getAttribute$O($I$(6).HREF)]);
}}}}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "LinkAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.HiddenAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
var rel=a.getAttribute$O($I$(6).REL);
if (rel != null ) {
rel=rel.toLowerCase$();
if (rel.equals$O("stylesheet") || rel.equals$O("alternate stylesheet") ) {
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles == null ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles=Clazz.new_($I$(8,1).c$$I,[3]);
}this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.addElement$O(t);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.addElement$O(a.copyAttributes$());
}}C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, a]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "MapAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].lastMap=Clazz.new_([a.getAttribute$O($I$(6).NAME)],$I$(9,1).c$$S);
this.b$['javax.swing.text.html.HTMLDocument'].addMap$javax_swing_text_html_Map.apply(this.b$['javax.swing.text.html.HTMLDocument'], [this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].lastMap]);
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "AreaAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].lastMap != null ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].lastMap.addArea$javax_swing_text_AttributeSet(a.copyAttributes$());
}});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "StyleAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inHead) {
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles == null ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles=Clazz.new_($I$(8,1).c$$I,[3]);
}this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.addElement$O(t);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styles.addElement$O(a.getAttribute$O($I$(6).TYPE));
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inStyle=true;
}});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inStyle=false;
});

Clazz.newMeth(C$, 'isEmpty$javax_swing_text_html_HTML_Tag',  function (t) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "PreAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.BlockAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inPre=true;
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, attr]);
attr.addAttribute$O$O($I$(10).WHITE_SPACE, "pre");
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockOpen$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [$I$(4).IMPLIED, attr]);
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockClose$javax_swing_text_html_HTML_Tag.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [$I$(4).IMPLIED]);
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inPre=false;
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].blockClose$javax_swing_text_html_HTML_Tag.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "CharacterAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].pushCharacterStyle$.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], []);
if (!this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].foundInsertTag) {
var insert=p$2.canInsertTag$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$Z.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, attr, false]);
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].foundInsertTag) {
if (!this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inParagraph) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inParagraph=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].impliedP=true;
}}if (!insert) {
return;
}}if (attr.isDefined$O($I$(7).IMPLIED)) {
attr.removeAttribute$O($I$(7).IMPLIED);
}this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.addAttribute$O$O(t, attr.copyAttributes$());
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styleAttributes != null ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.addAttributes$javax_swing_text_AttributeSet(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styleAttributes);
}});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].popCharacterStyle$.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "ConvertAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].pushCharacterStyle$.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], []);
if (!this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].foundInsertTag) {
var insert=p$2.canInsertTag$javax_swing_text_html_HTML_Tag$javax_swing_text_AttributeSet$Z.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [t, attr, false]);
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].foundInsertTag) {
if (!this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inParagraph) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inParagraph=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].impliedP=true;
}}if (!insert) {
return;
}}if (attr.isDefined$O($I$(7).IMPLIED)) {
attr.removeAttribute$O($I$(7).IMPLIED);
}if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styleAttributes != null ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.addAttributes$javax_swing_text_AttributeSet(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].styleAttributes);
}this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.addAttribute$O$O(t, attr.copyAttributes$());
var sheet=this.b$['javax.swing.text.html.HTMLDocument'].getStyleSheet$.apply(this.b$['javax.swing.text.html.HTMLDocument'], []);
if (t === $I$(4).B ) {
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).FONT_WEIGHT, "bold");
} else if (t === $I$(4).I ) {
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).FONT_STYLE, "italic");
} else if (t === $I$(4).U ) {
var v=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.getAttribute$O($I$(10).TEXT_DECORATION);
var value="underline";
value=(v != null ) ? value + "," + v.toString()  : value;
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).TEXT_DECORATION, value);
} else if (t === $I$(4).STRIKE ) {
var v=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.getAttribute$O($I$(10).TEXT_DECORATION);
var value="line-through";
value=(v != null ) ? value + "," + v.toString()  : value;
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).TEXT_DECORATION, value);
} else if (t === $I$(4).SUP ) {
var v=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.getAttribute$O($I$(10).VERTICAL_ALIGN);
var value="sup";
value=(v != null ) ? value + "," + v.toString()  : value;
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).VERTICAL_ALIGN, value);
} else if (t === $I$(4).SUB ) {
var v=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr.getAttribute$O($I$(10).VERTICAL_ALIGN);
var value="sub";
value=(v != null ) ? value + "," + v.toString()  : value;
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).VERTICAL_ALIGN, value);
} else if (t === $I$(4).FONT ) {
var color=attr.getAttribute$O($I$(6).COLOR);
if (color != null ) {
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).COLOR, color);
}var face=attr.getAttribute$O($I$(6).FACE);
if (face != null ) {
sheet.addCSSAttribute$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).FONT_FAMILY, face);
}var size=attr.getAttribute$O($I$(6).SIZE);
if (size != null ) {
sheet.addCSSAttributeFromHTML$javax_swing_text_MutableAttributeSet$javax_swing_text_html_CSS_Attribute$S(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].charAttr, $I$(10).FONT_SIZE, size);
}}});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].popCharacterStyle$.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "AnchorAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.CharacterAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].emptyAnchor=true;
C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, attr]);
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].emptyAnchor) {
var one=Clazz.array(Character.TYPE, [1]);
one[0]="\n";
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].addContent$CA$I$I.apply(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'], [one, 0, 1]);
}C$.superclazz.prototype.end$javax_swing_text_html_HTML_Tag.apply(this, [t]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "TitleAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.HiddenAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inTitle=true;
C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, attr]);
});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inTitle=false;
C$.superclazz.prototype.end$javax_swing_text_html_HTML_Tag.apply(this, [t]);
});

Clazz.newMeth(C$, 'isEmpty$javax_swing_text_html_HTML_Tag',  function (t) {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "BaseAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.TagAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
var href=attr.getAttribute$O($I$(6).HREF);
if (href != null ) {
try {
var newBase=Clazz.new_($I$(11,1).c$$java_net_URL$S,[this.b$['javax.swing.text.html.HTMLDocument'].base, href]);
this.b$['javax.swing.text.html.HTMLDocument'].setBase$java_net_URL.apply(this.b$['javax.swing.text.html.HTMLDocument'], [newBase]);
this.b$['javax.swing.text.html.HTMLDocument'].hasBaseTag=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
} else {
throw ex;
}
}
}this.b$['javax.swing.text.html.HTMLDocument'].baseTarget=attr.getAttribute$O($I$(6).TARGET);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "ObjectAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.SpecialAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, a) {
if (t === $I$(4).PARAM ) {
this.addParameter$javax_swing_text_AttributeSet(a);
} else {
C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, a]);
}});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
if (t !== $I$(4).PARAM ) {
C$.superclazz.prototype.end$javax_swing_text_html_HTML_Tag.apply(this, [t]);
}});

Clazz.newMeth(C$, 'addParameter$javax_swing_text_AttributeSet',  function (a) {
var name=a.getAttribute$O($I$(6).NAME);
var value=a.getAttribute$O($I$(6).VALUE);
if ((name != null ) && (value != null ) ) {
var objSpec=this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].parseBuffer.lastElement$();
var objAttr=objSpec.getAttributes$();
objAttr.addAttribute$O$O(name, value);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument.HTMLReader, "FormAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.html.HTMLDocument','.HTMLReader','.SpecialAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['optionCount'],'O',['selectModel','java.lang.Object']]]

Clazz.newMeth(C$, 'start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet',  function (t, attr) {
if (t === $I$(4).INPUT ) {
var type=attr.getAttribute$O($I$(6).TYPE);
if (type == null ) {
type="text";
attr.addAttribute$O$O($I$(6).TYPE, "text");
}this.setModel$S$javax_swing_text_MutableAttributeSet(type, attr);
} else if (t === $I$(4).TEXTAREA ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inTextArea=true;
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].textAreaDocument=Clazz.new_($I$(12,1));
attr.addAttribute$O$O($I$(2).ModelAttribute, this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].textAreaDocument);
} else if (t === $I$(4).SELECT ) {
var size=$I$(13,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).SIZE, 1]);
var multiple=attr.getAttribute$O($I$(6).MULTIPLE) != null ;
if ((size > 1) || multiple ) {
var m=Clazz.new_($I$(14,1));
if (multiple) {
m.setSelectionMode$I(2);
}this.selectModel=m;
} else {
this.selectModel=Clazz.new_($I$(15,1));
}attr.addAttribute$O$O($I$(2).ModelAttribute, this.selectModel);
}if (t === $I$(4).OPTION ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option=Clazz.new_($I$(16,1).c$$javax_swing_text_AttributeSet,[attr]);
if (Clazz.instanceOf(this.selectModel, "javax.swing.text.html.OptionListModel")) {
var m=this.selectModel;
m.addElement$O(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option);
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option.isSelected$()) {
m.addSelectionInterval$I$I(this.optionCount, this.optionCount);
m.setInitialSelection$I(this.optionCount);
}} else if (Clazz.instanceOf(this.selectModel, "javax.swing.text.html.OptionComboBoxModel")) {
var m=this.selectModel;
m.addElement$O(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option);
if (this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option.isSelected$()) {
m.setSelectedItem$O(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option);
m.setInitialSelection$javax_swing_text_html_Option(this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option);
}}++this.optionCount;
} else {
C$.superclazz.prototype.start$javax_swing_text_html_HTML_Tag$javax_swing_text_MutableAttributeSet.apply(this, [t, attr]);
}});

Clazz.newMeth(C$, 'end$javax_swing_text_html_HTML_Tag',  function (t) {
if (t === $I$(4).OPTION ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].option=null;
} else {
if (t === $I$(4).SELECT ) {
this.selectModel=null;
this.optionCount=0;
} else if (t === $I$(4).TEXTAREA ) {
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].inTextArea=false;
this.b$['javax.swing.text.html.HTMLDocument.HTMLReader'].textAreaDocument.storeInitialText$();
}C$.superclazz.prototype.end$javax_swing_text_html_HTML_Tag.apply(this, [t]);
}});

Clazz.newMeth(C$, 'setModel$S$javax_swing_text_MutableAttributeSet',  function (type, attr) {
if (type.equals$O("submit") || type.equals$O("reset") || type.equals$O("image")  ) {
attr.addAttribute$O$O($I$(2).ModelAttribute, Clazz.new_($I$(17,1)));
} else if (type.equals$O("text") || type.equals$O("password") ) {
var maxLength=$I$(13,"getIntegerAttributeValue$javax_swing_text_AttributeSet$javax_swing_text_html_HTML_Attribute$I",[attr, $I$(6).MAXLENGTH, -1]);
var doc;
if (maxLength > 0) {
doc=Clazz.new_($I$(18,1).c$$I,[maxLength]);
} else {
doc=Clazz.new_($I$(19,1));
}var value=attr.getAttribute$O($I$(6).VALUE);
try {
doc.insertString$I$S$javax_swing_text_AttributeSet(0, value, null);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
attr.addAttribute$O$O($I$(2).ModelAttribute, doc);
} else if (type.equals$O("file")) {
attr.addAttribute$O$O($I$(2).ModelAttribute, Clazz.new_($I$(19,1)));
} else if (type.equals$O("checkbox") || type.equals$O("radio") ) {
var model=Clazz.new_($I$(20,1));
if (type.equals$O("radio")) {
var name=attr.getAttribute$O($I$(6).NAME);
if (this.b$['javax.swing.text.html.HTMLDocument'].radioButtonGroupsMap == null ) {
this.b$['javax.swing.text.html.HTMLDocument'].radioButtonGroupsMap=Clazz.new_($I$(3,1));
}var radioButtonGroup=this.b$['javax.swing.text.html.HTMLDocument'].radioButtonGroupsMap.get$O(name);
if (radioButtonGroup == null ) {
radioButtonGroup=Clazz.new_($I$(21,1));
this.b$['javax.swing.text.html.HTMLDocument'].radioButtonGroupsMap.put$O$O(name, radioButtonGroup);
}model.setGroup$javax_swing_ButtonGroup(radioButtonGroup);
}var checked=(attr.getAttribute$O($I$(6).CHECKED) != null );
model.setSelected$Z(checked);
attr.addAttribute$O$O($I$(2).ModelAttribute, model);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument, "TaggedAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.SimpleAttributeSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument, "RunElement", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.AbstractDocument','.LeafElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I',  function (parent, a, offs0, offs1) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_AttributeSet$I$I.apply(this,[parent, a, offs0, offs1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
var o=this.getAttribute$O($I$(2).NameAttribute);
if (o != null ) {
return o.toString();
}return C$.superclazz.prototype.getName$.apply(this, []);
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument, "BlockElement", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.AbstractDocument','.BranchElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$javax_swing_text_AttributeSet',  function (parent, a) {
;C$.superclazz.c$$javax_swing_text_Element$javax_swing_text_AttributeSet.apply(this,[parent, a]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
var o=this.getAttribute$O($I$(2).NameAttribute);
if (o != null ) {
return o.toString();
}return C$.superclazz.prototype.getName$.apply(this, []);
});

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HTMLDocument, "FixedLengthDocument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.PlainDocument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['maxLength']]]

Clazz.newMeth(C$, 'c$$I',  function (maxLength) {
Clazz.super_(C$, this);
this.maxLength=maxLength;
}, 1);

Clazz.newMeth(C$, 'insertString$I$S$javax_swing_text_AttributeSet',  function (offset, str, a) {
if (str != null  && str.length$() + this.getLength$() <= this.maxLength ) {
C$.superclazz.prototype.insertString$I$S$javax_swing_text_AttributeSet.apply(this, [offset, str, a]);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

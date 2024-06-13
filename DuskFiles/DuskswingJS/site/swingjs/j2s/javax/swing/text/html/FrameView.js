(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,['javax.swing.text.html.HTML','.Attribute'],'java.net.URL',['javax.swing.text.html.FrameView','.FrameEditorPane'],'java.awt.Insets','javax.swing.JScrollPane','java.awt.Dimension',['javax.swing.event.HyperlinkEvent','.EventType'],'javax.swing.text.html.HTMLFrameHyperlinkEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FrameView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.ComponentView', 'javax.swing.event.HyperlinkListener');
C$.$classes$=[['FrameEditorPane',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['editable','createdComponent'],'F',['width','height'],'O',['htmlPane','javax.swing.JEditorPane','scroller','javax.swing.JScrollPane','src','java.net.URL']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createComponent$',  function () {
var elem=this.getElement$();
var attributes=elem.getAttributes$();
var srcAtt=attributes.getAttribute$O($I$(1).SRC);
if ((srcAtt != null ) && (!srcAtt.equals$O("")) ) {
try {
var base=(elem.getDocument$()).getBase$();
this.src=Clazz.new_($I$(2,1).c$$java_net_URL$S,[base, srcAtt]);
this.htmlPane=Clazz.new_($I$(3,1),[this, null]);
this.htmlPane.addHyperlinkListener$javax_swing_event_HyperlinkListener(this);
var host=this.getHostPane$();
var isAutoFormSubmission=true;
if (host != null ) {
this.htmlPane.setEditable$Z(host.isEditable$());
var charset=host.getClientProperty$O("charset");
if (charset != null ) {
this.htmlPane.putClientProperty$O$O("charset", charset);
}var hostKit=host.getEditorKit$();
if (hostKit != null ) {
isAutoFormSubmission=hostKit.isAutoFormSubmission$();
}}this.htmlPane.setPage$java_net_URL(this.src);
var kit=this.htmlPane.getEditorKit$();
if (kit != null ) {
kit.setAutoFormSubmission$Z(isAutoFormSubmission);
}var doc=this.htmlPane.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.html.HTMLDocument")) {
(doc).setFrameDocumentState$Z(true);
}p$1.setMargin.apply(this, []);
p$1.createScrollPane.apply(this, []);
p$1.setBorder.apply(this, []);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e1 = e$$;
{
e1.printStackTrace$();
}
} else {
throw e$$;
}
}
}this.createdComponent=true;
return this.scroller;
});

Clazz.newMeth(C$, 'getHostPane$',  function () {
var c=this.getContainer$();
while ((c != null ) && !(Clazz.instanceOf(c, "javax.swing.JEditorPane")) ){
c=c.getParent$();
}
return c;
});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
if (parent != null ) {
var t=parent.getContainer$();
this.editable=t.isEditable$();
}C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
var host=this.getContainer$();
if (host != null  && this.htmlPane != null   && this.htmlPane.isEditable$() != (host).isEditable$()  ) {
this.editable=(host).isEditable$();
this.htmlPane.setEditable$Z(this.editable);
}C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, allocation]);
});

Clazz.newMeth(C$, 'setMargin',  function () {
var margin=0;
var $in=this.htmlPane.getMargin$();
var newInsets;
var modified=false;
var attributes=this.getElement$().getAttributes$();
var marginStr=attributes.getAttribute$O($I$(1).MARGINWIDTH);
if ($in != null ) {
newInsets=Clazz.new_($I$(4,1).c$$I$I$I$I,[$in.top, $in.left, $in.right, $in.bottom]);
} else {
newInsets=Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, 0, 0]);
}if (marginStr != null ) {
margin=Integer.parseInt$S(marginStr);
if (margin > 0) {
newInsets.left=margin;
newInsets.right=margin;
modified=true;
}}marginStr=attributes.getAttribute$O($I$(1).MARGINHEIGHT);
if (marginStr != null ) {
margin=Integer.parseInt$S(marginStr);
if (margin > 0) {
newInsets.top=margin;
newInsets.bottom=margin;
modified=true;
}}if (modified) {
this.htmlPane.setMargin$java_awt_Insets(newInsets);
}}, p$1);

Clazz.newMeth(C$, 'setBorder',  function () {
var attributes=this.getElement$().getAttributes$();
var frameBorder=attributes.getAttribute$O($I$(1).FRAMEBORDER);
if ((frameBorder != null ) && (frameBorder.equals$O("no") || frameBorder.equals$O("0") ) ) {
this.scroller.setBorder$javax_swing_border_Border(null);
}}, p$1);

Clazz.newMeth(C$, 'createScrollPane',  function () {
var attributes=this.getElement$().getAttributes$();
var scrolling=attributes.getAttribute$O($I$(1).SCROLLING);
if (scrolling == null ) {
scrolling="auto";
}if (!scrolling.equals$O("no")) {
if (scrolling.equals$O("yes")) {
this.scroller=Clazz.new_($I$(5,1).c$$I$I,[22, 32]);
} else {
this.scroller=Clazz.new_($I$(5,1));
}} else {
this.scroller=Clazz.new_($I$(5,1).c$$I$I,[21, 31]);
}var vp=this.scroller.getViewport$();
vp.add$java_awt_Component(this.htmlPane);
vp.setBackingStoreEnabled$Z(true);
this.scroller.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[5, 5]));
this.scroller.setMaximumSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[2147483647, 2147483647]));
}, p$1);

Clazz.newMeth(C$, 'getOutermostJEditorPane$',  function () {
var parent=this.getParent$();
var frameSetView=null;
while (parent != null ){
if (Clazz.instanceOf(parent, "javax.swing.text.html.FrameSetView")) {
frameSetView=parent;
}parent=parent.getParent$();
}
if (frameSetView != null ) {
return frameSetView.getContainer$();
}return null;
});

Clazz.newMeth(C$, 'inNestedFrameSet',  function () {
var parent=this.getParent$();
return (Clazz.instanceOf(parent.getParent$(), "javax.swing.text.html.FrameSetView"));
}, p$1);

Clazz.newMeth(C$, 'hyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (evt) {
var c=this.getOutermostJEditorPane$();
if (c == null ) {
return;
}if (!(Clazz.instanceOf(evt, "javax.swing.text.html.HTMLFrameHyperlinkEvent"))) {
c.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(evt);
return;
}var e=evt;
if (e.getEventType$() === $I$(7).ACTIVATED ) {
var target=e.getTarget$();
var postTarget=target;
if (target.equals$O("_parent") && !p$1.inNestedFrameSet.apply(this, []) ) {
target="_top";
}if (Clazz.instanceOf(evt, "javax.swing.text.html.FormSubmitEvent")) {
var kit=c.getEditorKit$();
if (kit != null  && kit.isAutoFormSubmission$() ) {
if (target.equals$O("_top")) {
try {
p$1.movePostData$javax_swing_JEditorPane$S.apply(this, [c, postTarget]);
c.setPage$java_net_URL(e.getURL$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
} else {
var doc=c.getDocument$();
doc.processHTMLFrameHyperlinkEvent$javax_swing_text_html_HTMLFrameHyperlinkEvent(e);
}} else {
c.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(evt);
}return;
}if (target.equals$O("_top")) {
try {
c.setPage$java_net_URL(e.getURL$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
}if (!c.isEditable$()) {
c.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(Clazz.new_([c, e.getEventType$(), e.getURL$(), e.getDescription$(), this.getElement$(), e.getInputEvent$(), target],$I$(8,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element$java_awt_event_InputEvent$S));
}}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
var elem=this.getElement$();
var attributes=elem.getAttributes$();
var oldPage=this.src;
var srcAtt=attributes.getAttribute$O($I$(1).SRC);
var base=(elem.getDocument$()).getBase$();
try {
if (!this.createdComponent) {
return;
}var postData=p$1.movePostData$javax_swing_JEditorPane$S.apply(this, [this.htmlPane, null]);
this.src=Clazz.new_($I$(2,1).c$$java_net_URL$S,[base, srcAtt]);
if (oldPage.equals$O(this.src) && (this.src.getRef$() == null ) && (postData == null )  ) {
return;
}this.htmlPane.setPage$java_net_URL(this.src);
var newDoc=this.htmlPane.getDocument$();
if (Clazz.instanceOf(newDoc, "javax.swing.text.html.HTMLDocument")) {
(newDoc).setFrameDocumentState$Z(true);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e1 = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e2 = e$$;
{
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'movePostData$javax_swing_JEditorPane$S',  function (targetPane, frameName) {
var postData=null;
var p=this.getOutermostJEditorPane$();
if (p != null ) {
if (frameName == null ) {
frameName=this.getElement$().getAttributes$().getAttribute$O($I$(1).NAME);
}if (frameName != null ) {
var propName="javax.swing.JEditorPane.postdata" + "." + frameName ;
var d=p.getDocument$();
postData=d.getProperty$O(propName);
if (postData != null ) {
targetPane.getDocument$().putProperty$O$O("javax.swing.JEditorPane.postdata", postData);
d.putProperty$O$O(propName, null);
}}}return postData;
}, p$1);

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
return 5;
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
return 2147483647;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.FrameView, "FrameEditorPane", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JEditorPane', 'sun.swing.text.html.FrameEditorPaneTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getEditorKitForContentType$S',  function (type) {
var editorKit=C$.superclazz.prototype.getEditorKitForContentType$S.apply(this, [type]);
var outerMostJEditorPane=null;
if ((outerMostJEditorPane=this.b$['javax.swing.text.html.FrameView'].getOutermostJEditorPane$.apply(this.b$['javax.swing.text.html.FrameView'], [])) != null ) {
var inheritedEditorKit=outerMostJEditorPane.getEditorKitForContentType$S(type);
if (!editorKit.getClass$().equals$O(inheritedEditorKit.getClass$())) {
editorKit=inheritedEditorKit.clone$();
this.setEditorKitForContentType$S$javax_swing_text_EditorKit(type, editorKit);
}}return editorKit;
});

Clazz.newMeth(C$, 'getFrameView$',  function () {
return this.b$['javax.swing.text.html.FrameView'];
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

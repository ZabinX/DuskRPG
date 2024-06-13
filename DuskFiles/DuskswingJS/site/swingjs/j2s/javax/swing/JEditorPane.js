(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},I$=[[0,'javax.swing.UIManager',['javax.swing.JEditorPane','.PageStream'],'javax.swing.SwingUtilities','Error',['javax.swing.JEditorPane','.PlainEditorKit','.PlainParagraph','.LogicalView'],'javax.swing.text.WrappedPlainView',['javax.swing.JEditorPane','.PlainEditorKit','.PlainParagraph'],'javax.swing.text.BoxView','java.util.HashMap','javax.swing.event.HyperlinkListener','java.awt.Rectangle',['javax.swing.JEditorPane','.PageLoader'],'swingjs.JSUtil','java.io.InputStreamReader','java.io.BufferedInputStream','java.util.Hashtable','java.net.URL',['javax.swing.JEditorPane','.PlainEditorKit'],['javax.swing.JEditorPane','.HeaderParser'],'swingjs.JSHTMLHelper','swingjs.api.Interface','java.awt.Dimension','java.io.StringReader']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JEditorPane", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.JTextComponent');
C$.$classes$=[['PageLoader',0],['PageStream',8],['PlainEditorKit',8],['HeaderParser',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isUserSetEditorKit'],'O',['loading','javax.swing.JEditorPane.PageStream','kit','javax.swing.text.EditorKit','pageProperties','java.util.Hashtable','+typeHandlers']]
,['O',['kitRegistryKey','java.lang.Object','+kitTypeRegistryKey','+kitLoaderRegistryKey','defaultEditorKitMap','java.util.Map']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$S.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL',  function (initialPage) {
C$.c$$S$S.apply(this, [null, null]);
this.setPage$java_net_URL(initialPage);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (url) {
C$.c$$S$S.apply(this, [null, null]);
this.setPage$S(url);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (type, text) {
Clazz.super_(C$, this);
if (type != null ) this.setContentType$S(type);
if (text != null ) this.setText$S(text);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "EditorPaneUI";
});

Clazz.newMeth(C$, 'addHyperlinkListener$javax_swing_event_HyperlinkListener',  function (listener) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(10),['hyperlinkUpdate$javax_swing_event_HyperlinkEvent']), listener);
});

Clazz.newMeth(C$, 'removeHyperlinkListener$javax_swing_event_HyperlinkListener',  function (listener) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(10),['hyperlinkUpdate$javax_swing_event_HyperlinkEvent']), listener);
});

Clazz.newMeth(C$, 'getHyperlinkListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(10),['hyperlinkUpdate$javax_swing_event_HyperlinkEvent']));
});

Clazz.newMeth(C$, 'fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent',  function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(10),['hyperlinkUpdate$javax_swing_event_HyperlinkEvent']) ) {
(listeners[i + 1]).hyperlinkUpdate$javax_swing_event_HyperlinkEvent(e);
}}
});

Clazz.newMeth(C$, 'setPage$java_net_URL',  function (page) {
if (page == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["invalid url"]);
}var loaded=this.getPage$();
if (!page.equals$O(loaded) && page.getRef$() == null  ) {
this.scrollRectToVisible$java_awt_Rectangle(Clazz.new_($I$(11,1).c$$I$I$I$I,[0, 0, 1, 1]));
}var reloaded=false;
var postData=p$2.getPostData.apply(this, []);
if ((loaded == null ) || !loaded.sameFile$java_net_URL(page) || (postData != null )  ) {
var p=p$2.getAsynchronousLoadPriority$javax_swing_text_Document.apply(this, [this.getDocument$()]);
if ((postData == null ) || (p < 0) ) {
var $in=this.getStream$java_net_URL(page);
if (this.getEditorKit$() != null ) {
var doc=this.initializeModel$javax_swing_text_EditorKit$java_net_URL(this.kit, page);
{
if (this.loading != null ) {
this.loading.cancel$();
this.loading=null;
}}p=p$2.getAsynchronousLoadPriority$javax_swing_text_Document.apply(this, [doc]);
if (p >= 0) {
this.setDocument$javax_swing_text_Document(doc);
{
p$2.秘setPage$javax_swing_text_Document$java_net_URL.apply(this, [doc, page]);
this.loading=Clazz.new_($I$(2,1).c$$java_io_InputStream,[$in]);
var pl=Clazz.new_($I$(12,1).c$$javax_swing_text_Document$java_io_InputStream$I$java_net_URL$java_net_URL,[this, null, doc, this.loading, p, loaded, page]);
pl.start$();
}return;
}this.read$java_io_InputStream$javax_swing_text_Document($in, doc);
this.setDocument$javax_swing_text_Document(doc);
p$2.秘setPage$javax_swing_text_Document$java_net_URL.apply(this, [doc, page]);
reloaded=true;
}} else {
var pl=Clazz.new_($I$(12,1).c$$javax_swing_text_Document$java_io_InputStream$I$java_net_URL$java_net_URL,[this, null, null, null, p, loaded, page]);
pl.start$();
return;
}}var reference=page.getRef$();
if (reference != null ) {
if (!reloaded) {
this.scrollToReference$S(reference);
} else {
$I$(3,"invokeLater$Runnable",[((P$.JEditorPane$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JEditorPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.JEditorPane'].scrollToReference$S.apply(this.b$['javax.swing.JEditorPane'], [this.$finals$.reference]);
});
})()
), Clazz.new_(P$.JEditorPane$1.$init$,[this, {reference:reference}]))]);
}this.getDocument$().putProperty$O$O("stream", page);
}this.firePropertyChange$S$O$O("page", loaded, page);
});

Clazz.newMeth(C$, '秘setPage$javax_swing_text_Document$java_net_URL',  function (doc, page) {
if (Clazz.instanceOf(doc, "javax.swing.text.html.HTMLDocument")) {
var bytes=$I$(13).getBytes$O(page);
if (bytes != null ) {
if (this.秘jsHTMLHelper != null ) this.秘jsHTMLHelper.setText$S( String.instantialize(bytes));
}}}, p$2);

Clazz.newMeth(C$, 'initializeModel$javax_swing_text_EditorKit$java_net_URL',  function (kit, page) {
var doc=kit.createDefaultDocument$();
if (this.pageProperties != null ) {
for (var e=this.pageProperties.keys$(); e.hasMoreElements$(); ) {
var key=e.nextElement$();
doc.putProperty$O$O(key, this.pageProperties.get$O(key));
}
this.pageProperties.clear$();
}if (doc.getProperty$O("stream") == null ) {
doc.putProperty$O$O("stream", page);
}return doc;
});

Clazz.newMeth(C$, 'getAsynchronousLoadPriority$javax_swing_text_Document',  function (doc) {
return (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument") ? (doc).getAsynchronousLoadPriority$() : -1);
}, p$2);

Clazz.newMeth(C$, 'read$java_io_InputStream$O',  function ($in, desc) {
var charset=this.getClientProperty$O("charset");
var r=(charset != null ) ? Clazz.new_($I$(14,1).c$$java_io_InputStream$S,[$in, charset]) : Clazz.new_($I$(14,1).c$$java_io_InputStream,[$in]);
C$.superclazz.prototype.read$java_io_Reader$O.apply(this, [r, desc]);
});

Clazz.newMeth(C$, 'read$java_io_InputStream$javax_swing_text_Document',  function ($in, doc) {
if (!Boolean.TRUE.equals$O(doc.getProperty$O("IgnoreCharsetDirective"))) {
var READ_LIMIT=10240;
$in=Clazz.new_($I$(15,1).c$$java_io_InputStream$I,[$in, 10240]);
$in.mark$I(10240);
}try {
var charset=this.getClientProperty$O("charset");
var r=(charset != null ) ? Clazz.new_($I$(14,1).c$$java_io_InputStream$S,[$in, charset]) : Clazz.new_($I$(14,1).c$$java_io_InputStream,[$in]);
this.kit.read$java_io_Reader$javax_swing_text_Document$I(r, doc, 0);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.swing.text.BadLocationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e.getMessage$()]);
}
} else if (Clazz.exceptionOf(e$$,"javax.swing.text.ChangedCharSetException")){
var changedCharSetException = e$$;
{
var charSetSpec=changedCharSetException.getCharSetSpec$();
if (changedCharSetException.keyEqualsCharSet$()) {
this.putClientProperty$O$O("charset", charSetSpec);
} else {
p$2.setCharsetFromContentTypeParameters$S.apply(this, [charSetSpec]);
}try {
$in.reset$();
} catch (exception) {
if (Clazz.exceptionOf(exception,"java.io.IOException")){
$in.close$();
var url=doc.getProperty$O("stream");
if (url != null ) {
var conn=url.openConnection$();
$in=conn.getInputStream$();
} else {
throw changedCharSetException;
}} else {
throw exception;
}
}
try {
doc.remove$I$I(0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
doc.putProperty$O$O("IgnoreCharsetDirective", Boolean.valueOf$Z(true));
this.read$java_io_InputStream$javax_swing_text_Document($in, doc);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'read$java_io_Reader$O',  function ($in, desc) {
C$.superclazz.prototype.read$java_io_Reader$O.apply(this, [$in, desc]);
});

Clazz.newMeth(C$, 'getStream$java_net_URL',  function (page) {
var conn=page.openConnection$();
if ($I$(3).isEventDispatchThread$()) {
this.handleConnectionProperties$java_net_URLConnection(conn);
} else {
try {
$I$(3,"invokeAndWait$Runnable",[((P$.JEditorPane$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JEditorPane$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.JEditorPane'].handleConnectionProperties$java_net_URLConnection.apply(this.b$['javax.swing.JEditorPane'], [this.$finals$.conn]);
});
})()
), Clazz.new_(P$.JEditorPane$2.$init$,[this, {conn:conn}]))]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}return conn.getInputStream$();
});

Clazz.newMeth(C$, 'handleConnectionProperties$java_net_URLConnection',  function (conn) {
if (this.pageProperties == null ) {
this.pageProperties=Clazz.new_($I$(16,1));
}});

Clazz.newMeth(C$, 'getPostData',  function () {
return this.getDocument$().getProperty$O("javax.swing.JEditorPane.postdata");
}, p$2);

Clazz.newMeth(C$, 'scrollToReference$S',  function (reference) {
var d=this.getDocument$();
if (Clazz.instanceOf(d, "javax.swing.text.html.HTMLDocument")) {
(this.getUI$()).scrollToReference$S(reference);
}});

Clazz.newMeth(C$, 'getPage$',  function () {
return this.getDocument$().getProperty$O("stream");
});

Clazz.newMeth(C$, 'setPage$S',  function (url) {
if (url == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["invalid url"]);
}var page=Clazz.new_($I$(17,1).c$$S,[url]);
this.setPage$java_net_URL(page);
});

Clazz.newMeth(C$, 'createDefaultEditorKit$',  function () {
return Clazz.new_($I$(18,1));
});

Clazz.newMeth(C$, 'getEditorKit$',  function () {
if (this.kit == null ) {
this.kit=this.createDefaultEditorKit$();
this.isUserSetEditorKit=false;
}return this.kit;
});

Clazz.newMeth(C$, 'getContentType$',  function () {
return (this.kit != null ) ? this.kit.getContentType$() : null;
});

Clazz.newMeth(C$, 'setContentType$S',  function (type) {
var parm=type.indexOf$S(";");
if (parm > -1) {
var paramList=type.substring$I(parm);
type=type.substring$I$I(0, parm).trim$();
if (type.toLowerCase$().startsWith$S("text/")) {
p$2.setCharsetFromContentTypeParameters$S.apply(this, [paramList]);
}}if ((this.kit == null ) || (!type.equals$O(this.kit.getContentType$())) || !this.isUserSetEditorKit  ) {
var k=this.getEditorKitForContentType$S(type);
if (k != null  && k !== this.kit  ) {
this.setEditorKit$javax_swing_text_EditorKit(k);
this.isUserSetEditorKit=false;
}}});

Clazz.newMeth(C$, 'setCharsetFromContentTypeParameters$S',  function (paramlist) {
var charset=null;
try {
var semi=paramlist.indexOf$I(";");
if (semi > -1 && semi < paramlist.length$() - 1 ) {
paramlist=paramlist.substring$I(semi + 1);
}if (paramlist.length$() > 0) {
var hdrParser=Clazz.new_($I$(19,1).c$$S,[paramlist]);
charset=hdrParser.findValue$S("charset");
if (charset != null ) {
this.putClientProperty$O$O("charset", charset);
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IndexOutOfBoundsException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.err.println$S("JEditorPane.getCharsetFromContentTypeParameters failed on: " + paramlist);
e.printStackTrace$();
}
} else {
throw e$$;
}
}
}, p$2);

Clazz.newMeth(C$, 'setEditorKit$javax_swing_text_EditorKit',  function (kit) {
var old=this.kit;
this.isUserSetEditorKit=true;
if (old != null ) {
old.deinstall$javax_swing_JEditorPane(this);
}this.kit=kit;
if (this.kit != null ) {
this.kit.install$javax_swing_JEditorPane(this);
if (Clazz.instanceOf(kit, "javax.swing.text.html.HTMLEditorKit")) {
this.秘jsHTMLHelper=Clazz.new_($I$(20,1).c$$javax_swing_JEditorPane$javax_swing_text_html_HTMLEditorKit,[this, kit]);
}this.setDocument$javax_swing_text_Document(kit.createDefaultDocument$());
}this.firePropertyChange$S$O$O("editorKit", old, kit);
});

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document',  function (doc) {
C$.superclazz.prototype.setDocument$javax_swing_text_Document.apply(this, [doc]);
if (this.秘jsHTMLHelper != null ) this.秘jsHTMLHelper.setDocument$javax_swing_text_html_HTMLDocument(doc);
});

Clazz.newMeth(C$, 'getEditorKitForContentType$S',  function (type) {
if (this.typeHandlers == null ) {
this.typeHandlers=Clazz.new_($I$(16,1).c$$I,[3]);
}var k=this.typeHandlers.get$O(type);
if (k == null ) {
k=C$.createEditorKitForContentType$S(type);
if (k != null ) {
this.setEditorKitForContentType$S$javax_swing_text_EditorKit(type, k);
}}if (k == null ) {
k=this.createDefaultEditorKit$();
}return k;
});

Clazz.newMeth(C$, 'setEditorKitForContentType$S$javax_swing_text_EditorKit',  function (type, k) {
if (this.typeHandlers == null ) {
this.typeHandlers=Clazz.new_($I$(16,1).c$$I,[3]);
}this.typeHandlers.put$O$O(type, k);
});

Clazz.newMeth(C$, 'replaceSelection$S',  function (content) {
if (!this.isEditable$()) {
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this);
return;
}var kit=this.getEditorKit$();
if (Clazz.instanceOf(kit, "javax.swing.text.StyledEditorKit")) {
try {
var doc=this.getDocument$();
var caret=this.getCaret$();
var p0=Math.min(caret.getDot$(), caret.getMark$());
var p1=Math.max(caret.getDot$(), caret.getMark$());
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).replace$I$I$S$javax_swing_text_AttributeSet$javax_swing_text_JTextComponent(p0, p1 - p0, content, (kit).getInputAttributes$(), this);
} else {
if (p0 != p1) {
doc.remove$I$I(p0, p1 - p0);
}if (content != null  && content.length$() > 0 ) {
doc.insertString$I$S$javax_swing_text_AttributeSet(p0, content, (kit).getInputAttributes$());
}}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this);
} else {
throw e;
}
}
} else {
C$.superclazz.prototype.replaceSelection$S.apply(this, [content]);
}});

Clazz.newMeth(C$, 'createEditorKitForContentType$S',  function (type) {
var k=null;
var kitRegistry=C$.getKitRegisty$();
k=kitRegistry.get$O(type);
if (k == null ) {
var classname=C$.getKitTypeRegistry$().get$O(type);
if (classname != null ) try {
k=$I$(21).getInstance$S$Z(classname, false);
kitRegistry.put$O$O(type, k);
} catch (e) {
k=null;
}
}if (k != null ) {
return k.clone$();
}return null;
}, 1);

Clazz.newMeth(C$, 'registerEditorKitForContentType$S$S',  function (type, classname) {
C$.registerEditorKitForContentType$S$S$ClassLoader(type, classname, null);
}, 1);

Clazz.newMeth(C$, 'registerEditorKitForContentType$S$S$ClassLoader',  function (type, classname, loader) {
C$.getKitTypeRegistry$().put$O$O(type, classname);
C$.getKitRegisty$().remove$O(type);
}, 1);

Clazz.newMeth(C$, 'getEditorKitClassNameForContentType$S',  function (type) {
return C$.getKitTypeRegistry$().get$O(type);
}, 1);

Clazz.newMeth(C$, 'getKitTypeRegistry$',  function () {
C$.loadDefaultKitsIfNecessary$();
return $I$(3).appContextGet$O(C$.kitTypeRegistryKey);
}, 1);

Clazz.newMeth(C$, 'getKitRegisty$',  function () {
var ht=$I$(3).appContextGet$O(C$.kitRegistryKey);
if (ht == null ) {
ht=Clazz.new_($I$(16,1).c$$I,[3]);
$I$(3).appContextPut$O$O(C$.kitRegistryKey, ht);
}return ht;
}, 1);

Clazz.newMeth(C$, 'loadDefaultKitsIfNecessary$',  function () {
if ($I$(3).appContextGet$O(C$.kitTypeRegistryKey) == null ) {
{
if (C$.defaultEditorKitMap.size$() == 0) {
C$.defaultEditorKitMap.put$O$O("text/plain", "javax.swing.JEditorPane$PlainEditorKit");
C$.defaultEditorKitMap.put$O$O("text/html", "javax.swing.text.html.HTMLEditorKit");
}}var ht=Clazz.new_($I$(16,1));
$I$(3).appContextPut$O$O(C$.kitTypeRegistryKey, ht);
ht=Clazz.new_($I$(16,1));
$I$(3).appContextPut$O$O(C$.kitLoaderRegistryKey, ht);
for (var key, $key = C$.defaultEditorKitMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
C$.registerEditorKitForContentType$S$S(key, C$.defaultEditorKitMap.get$O(key));
}
}}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var d=this.getPrefSizeJComp$();
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
var port=this.getParent$();
var ui=this.getUI$();
var prefWidth=d.width;
var prefHeight=d.height;
if (!this.getScrollableTracksViewportWidth$()) {
var w=port.getWidth$();
var min=ui.getMinimumSize$javax_swing_JComponent(this);
if (w != 0 && w < min.width ) {
prefWidth=min.width;
}}if (!this.getScrollableTracksViewportHeight$()) {
var h=port.getHeight$();
var min=ui.getMinimumSize$javax_swing_JComponent(this);
if (h != 0 && h < min.height ) {
prefHeight=min.height;
}}if (prefWidth != d.width || prefHeight != d.height ) {
d=Clazz.new_($I$(22,1).c$$I$I,[prefWidth, prefHeight]);
}}return d;
});

Clazz.newMeth(C$, 'setText$S',  function (t) {
try {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.html.HTMLDocument")) {
t=C$.秘fixHTML$S(t);
}if (this.秘jsHTMLHelper != null ) this.秘jsHTMLHelper.setText$S(t);
doc.remove$I$I(0, doc.getLength$());
if (t == null  || t.equals$O("") ) {
return;
}var r=Clazz.new_($I$(23,1).c$$S,[t]);
var kit=this.getEditorKit$();
kit.read$java_io_Reader$javax_swing_text_Document$I(r, doc, 0);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this);
}
} else if (Clazz.exceptionOf(e$$,"javax.swing.text.BadLocationException")){
var ble = e$$;
{
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, '秘fixHTML$S',  function (t) {
if (t.indexOf$S("<body") < 0) t="<body>" + t + "</body>" ;
if (t.indexOf$S("<head") < 0) t="<head>" + t + "</head>" ;
if (t.indexOf$S("<html") < 0) t="<html>" + t + "</html>" ;
return t;
}, 1);

Clazz.newMeth(C$, 'getText$',  function () {
if (this.秘jsHTMLHelper != null ) {
return this.秘jsHTMLHelper.getText$();
}var doc=this.getDocument$();
try {
return doc.getText$I$I(0, doc.getLength$());
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
var port=this.getParent$();
var ui=this.getUI$();
var w=port.getWidth$();
var min=ui.getMinimumSize$javax_swing_JComponent(this);
var max=ui.getMaximumSize$javax_swing_JComponent(this);
if ((w >= min.width) && (w <= max.width) ) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$',  function () {
if (Clazz.instanceOf(this.getParent$(), "javax.swing.JViewport")) {
var port=this.getParent$();
var ui=this.getUI$();
var h=port.getHeight$();
var min=ui.getMinimumSize$javax_swing_JComponent(this);
if (h >= min.height) {
var max=ui.getMaximumSize$javax_swing_JComponent(this);
if (h <= max.height) {
return true;
}}}return false;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var kitString=(this.kit != null  ? this.kit.toString() : "");
var typeHandlersString=(this.typeHandlers != null  ? this.typeHandlers.toString() : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",kit=" + kitString + ",typeHandlers=" + typeHandlersString ;
});

C$.$static$=function(){C$.$static$=0;
C$.kitRegistryKey= Clazz.new_();
C$.kitTypeRegistryKey= Clazz.new_();
C$.kitLoaderRegistryKey= Clazz.new_();
C$.defaultEditorKitMap=Clazz.new_($I$(9,1).c$$I,[0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JEditorPane, "PageLoader", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pageLoaded=false;
},1);

C$.$fields$=[['Z',['pageLoaded'],'O',['$in','java.io.InputStream','old','java.net.URL','+page','doc','javax.swing.text.Document']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Document$java_io_InputStream$I$java_net_URL$java_net_URL',  function (doc, $in, priority, old, page) {
Clazz.super_(C$, this);
this.setPriority$I(priority);
this.$in=$in;
this.old=old;
this.page=page;
this.doc=doc;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
try {
if (this.$in == null ) {
this.$in=this.b$['javax.swing.JEditorPane'].getStream$java_net_URL.apply(this.b$['javax.swing.JEditorPane'], [this.page]);
if (this.b$['javax.swing.JEditorPane'].kit == null ) {
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this.b$['javax.swing.JEditorPane']);
return;
}{
this.$in=this.b$['javax.swing.JEditorPane'].loading=Clazz.new_($I$(2,1).c$$java_io_InputStream,[this.$in]);
}}if (this.doc == null ) {
try {
$I$(3,"invokeAndWait$Runnable",[((P$.JEditorPane$PageLoader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JEditorPane$PageLoader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.JEditorPane.PageLoader'].doc=this.b$['javax.swing.JEditorPane'].initializeModel$javax_swing_text_EditorKit$java_net_URL.apply(this.b$['javax.swing.JEditorPane'], [this.b$['javax.swing.JEditorPane'].kit, this.b$['javax.swing.JEditorPane.PageLoader'].page]);
this.b$['javax.swing.JEditorPane'].setDocument$javax_swing_text_Document.apply(this.b$['javax.swing.JEditorPane'], [this.b$['javax.swing.JEditorPane.PageLoader'].doc]);
});
})()
), Clazz.new_(P$.JEditorPane$PageLoader$2.$init$,[this, null]))]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var ex = e$$;
{
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this.b$['javax.swing.JEditorPane']);
return;
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var ex = e$$;
{
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this.b$['javax.swing.JEditorPane']);
return;
}
} else {
throw e$$;
}
}
}this.b$['javax.swing.JEditorPane'].read$java_io_InputStream$javax_swing_text_Document.apply(this.b$['javax.swing.JEditorPane'], [this.$in, this.doc]);
var page=this.doc.getProperty$O("stream");
var reference=page.getRef$();
if (reference != null ) {
var callScrollToReference=((P$.JEditorPane$PageLoader$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JEditorPane$PageLoader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var u=this.b$['javax.swing.text.JTextComponent'].getDocument$.apply(this.b$['javax.swing.text.JTextComponent'], []).getProperty$O("stream");
var ref=u.getRef$();
this.b$['javax.swing.JEditorPane'].scrollToReference$S.apply(this.b$['javax.swing.JEditorPane'], [ref]);
});
})()
), Clazz.new_(P$.JEditorPane$PageLoader$3.$init$,[this, null]));
$I$(3).invokeLater$Runnable(callScrollToReference);
}this.pageLoaded=true;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
$I$(1).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this.b$['javax.swing.JEditorPane']);
} else {
throw ioe;
}
} finally {
{
this.b$['javax.swing.JEditorPane'].loading=null;
}$I$(3,"invokeLater$Runnable",[((P$.JEditorPane$PageLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JEditorPane$PageLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['javax.swing.JEditorPane.PageLoader'].pageLoaded) {
this.b$['java.awt.Component'].firePropertyChange$S$O$O.apply(this.b$['java.awt.Component'], ["page", this.b$['javax.swing.JEditorPane.PageLoader'].old, this.b$['javax.swing.JEditorPane.PageLoader'].page]);
}});
})()
), Clazz.new_(P$.JEditorPane$PageLoader$1.$init$,[this, null]))]);
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JEditorPane, "PageStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['canceled']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (i) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[i]);C$.$init$.apply(this);
this.canceled=false;
}, 1);

Clazz.newMeth(C$, 'cancel$',  function () {
this.canceled=true;
});

Clazz.newMeth(C$, 'checkCanceled$',  function () {
if (this.canceled) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["page canceled"]);
}});

Clazz.newMeth(C$, 'read$',  function () {
this.checkCanceled$();
return C$.superclazz.prototype.read$.apply(this, []);
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
this.checkCanceled$();
return C$.superclazz.prototype.skip$J.apply(this, [n]);
});

Clazz.newMeth(C$, 'available$',  function () {
this.checkCanceled$();
return C$.superclazz.prototype.available$.apply(this, []);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.checkCanceled$();
C$.superclazz.prototype.reset$.apply(this, []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JEditorPane, "PlainEditorKit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.DefaultEditorKit', 'javax.swing.text.ViewFactory');
C$.$classes$=[['PlainParagraph',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getViewFactory$',  function () {
return this;
});

Clazz.newMeth(C$, 'create$javax_swing_text_Element',  function (elem) {
return Clazz.new_($I$(6,1).c$$javax_swing_text_Element,[elem]);
});

Clazz.newMeth(C$, 'createI18N$javax_swing_text_Element',  function (elem) {
var kind=elem.getName$();
if (kind != null ) {
if (kind.equals$O("content")) {
return Clazz.new_($I$(7,1).c$$javax_swing_text_Element,[elem]);
} else if (kind.equals$O("paragraph")) {
return Clazz.new_($I$(8,1).c$$javax_swing_text_Element$I,[elem, 1]);
}}return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JEditorPane.PlainEditorKit, "PlainParagraph", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.ParagraphView');
C$.$classes$=[['LogicalView',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
this.layoutPool=Clazz.new_($I$(5,1).c$$javax_swing_text_Element,[elem]);
this.layoutPool.setParent$javax_swing_text_View(this);
}, 1);

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var c=this.getContainer$();
if ((c != null ) && (!c.getComponentOrientation$().isLeftToRight$()) ) {
this.setJustification$I(2);
} else {
this.setJustification$I(0);
}});

Clazz.newMeth(C$, 'getFlowSpan$I',  function (index) {
var c=this.getContainer$();
if (Clazz.instanceOf(c, "javax.swing.JTextArea")) {
var area=c;
if (!area.getLineWrap$()) {
return 2147483647;
}}return C$.superclazz.prototype.getFlowSpan$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var req=C$.superclazz.prototype.calculateMinorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
var c=this.getContainer$();
if (Clazz.instanceOf(c, "javax.swing.JTextArea")) {
var area=c;
if (!area.getLineWrap$()) {
req.minimum=req.preferred;
}}return req;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JEditorPane.PlainEditorKit.PlainParagraph, "LogicalView", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.CompositeView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getViewIndexAtPosition$I',  function (pos) {
var elem=this.getElement$();
if (elem.getElementCount$() > 0) {
return elem.getElementIndex$I(pos);
}return 0;
});

Clazz.newMeth(C$, 'updateChildren$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$javax_swing_text_ViewFactory',  function (ec, e, f) {
return false;
});

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_ViewFactory',  function (f) {
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
if (this.getViewCount$() != 1) throw Clazz.new_($I$(4,1).c$$S,["One child view is assumed."]);
var v=this.getView$I(0);
return v.getPreferredSpan$I(axis);
});

Clazz.newMeth(C$, 'forwardUpdateToView$javax_swing_text_View$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (v, e, a, f) {
v.setParent$javax_swing_text_View(this);
C$.superclazz.prototype.forwardUpdateToView$javax_swing_text_View$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [v, e, a, f]);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
});

Clazz.newMeth(C$, 'isBefore$I$I$java_awt_Rectangle',  function (x, y, alloc) {
return false;
});

Clazz.newMeth(C$, 'isAfter$I$I$java_awt_Rectangle',  function (x, y, alloc) {
return false;
});

Clazz.newMeth(C$, 'getViewAtPoint$I$I$java_awt_Rectangle',  function (x, y, alloc) {
return null;
});

Clazz.newMeth(C$, 'childAllocation$I$java_awt_Rectangle',  function (index, a) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JEditorPane, "HeaderParser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['raw'],'O',['tab','String[][]']]]

Clazz.newMeth(C$, 'c$$S',  function (raw) {
;C$.$init$.apply(this);
this.raw=raw;
this.tab=Clazz.array(String, [10, 2]);
p$1.parse.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'parse',  function () {
if (this.raw != null ) {
this.raw=this.raw.trim$();
var ca=this.raw.toCharArray$();
var beg=0;
var end=0;
var i=0;
var inKey=true;
var inQuote=false;
var len=ca.length;
while (end < len){
var c=ca[end];
if (c == "=") {
this.tab[i][0]= String.instantialize(ca, beg, end - beg).toLowerCase$();
inKey=false;
++end;
beg=end;
} else if (c == "\"") {
if (inQuote) {
this.tab[i++][1]= String.instantialize(ca, beg, end - beg);
inQuote=false;
do {
++end;
} while (end < len && (ca[end] == " " || ca[end] == "," ) );
inKey=true;
beg=end;
} else {
inQuote=true;
++end;
beg=end;
}} else if (c == " " || c == "," ) {
if (inQuote) {
++end;
continue;
} else if (inKey) {
this.tab[i++][0]=( String.instantialize(ca, beg, end - beg)).toLowerCase$();
} else {
this.tab[i++][1]=( String.instantialize(ca, beg, end - beg));
}while (end < len && (ca[end] == " " || ca[end] == "," ) ){
++end;
}
inKey=true;
beg=end;
} else {
++end;
}}
if (--end > beg) {
if (!inKey) {
if (ca[end] == "\"") {
this.tab[i++][1]=( String.instantialize(ca, beg, end - beg));
} else {
this.tab[i++][1]=( String.instantialize(ca, beg, end - beg + 1));
}} else {
this.tab[i][0]=( String.instantialize(ca, beg, end - beg + 1)).toLowerCase$();
}} else if (end == beg) {
if (!inKey) {
if (ca[end] == "\"") {
this.tab[i++][1]=String.valueOf$C(ca[end - 1]);
} else {
this.tab[i++][1]=String.valueOf$C(ca[end]);
}} else {
this.tab[i][0]=String.valueOf$C(ca[end]).toLowerCase$();
}}}}, p$1);

Clazz.newMeth(C$, 'findKey$I',  function (i) {
if (i < 0 || i > 10 ) return null;
return this.tab[i][0];
});

Clazz.newMeth(C$, 'findValue$I',  function (i) {
if (i < 0 || i > 10 ) return null;
return this.tab[i][1];
});

Clazz.newMeth(C$, 'findValue$S',  function (key) {
return this.findValue$S$S(key, null);
});

Clazz.newMeth(C$, 'findValue$S$S',  function (k, Default) {
if (k == null ) return Default;
k=k.toLowerCase$();
for (var i=0; i < 10; ++i) {
if (this.tab[i][0] == null ) {
return Default;
} else if (k.equals$O(this.tab[i][0])) {
return this.tab[i][1];
}}
return Default;
});

Clazz.newMeth(C$, 'findInt$S$I',  function (k, Default) {
try {
return Integer.parseInt$S(this.findValue$S$S(k, String.valueOf$I(Default)));
} catch (t) {
return Default;
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

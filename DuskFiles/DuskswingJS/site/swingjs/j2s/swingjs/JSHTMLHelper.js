(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'swingjs.JSUtil',['javax.swing.event.HyperlinkEvent','.EventType'],'java.net.URL','javax.swing.event.HyperlinkEvent','javajs.util.PT',['javax.swing.text.html.HTML','.Tag'],'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSHTMLHelper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.installed=true;
this.html="";
},1);

C$.$fields$=[['Z',['installed'],'S',['html'],'O',['editor','javax.swing.JEditorPane','kit','javax.swing.text.html.HTMLEditorKit','doc','javax.swing.text.html.HTMLDocument','aTagElements','java.util.List']]]

Clazz.newMeth(C$, 'c$$javax_swing_JEditorPane$javax_swing_text_html_HTMLEditorKit',  function (editor, kit) {
;C$.$init$.apply(this);
this.editor=editor;
this.kit=kit;
kit.秘jsHTMLHelper=this;
}, 1);

Clazz.newMeth(C$, 'deinstall$',  function () {
this.editor=null;
this.kit=null;
this.installed=false;
});

Clazz.newMeth(C$, 'setDocument$javax_swing_text_html_HTMLDocument',  function (doc) {
this.doc=doc;
doc.秘jsHTMLHelper=this;
});

Clazz.newMeth(C$, 'setText$S',  function (html) {
this.html=(html == null  ? "" : html);
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.html;
});

Clazz.newMeth(C$, 'handleJSEvent$O$I$O',  function (target, eventType, jQueryEvent) {
var type=null;
var node=$I$(1).jQuery.$(jQueryEvent.target ||null).closest("a");
var href=target.id && target.id.indexOf("Menu" < 0) && node && node[0] && node[0].href ||null;
if (href == null ) return true;
switch (eventType) {
case 502:
type=$I$(2).ACTIVATED;
break;
default:
return true;
}
var url=null;
var elem=null;
try {
var pt=href.indexOf$S("#_JSHREF_");
if (pt < 0) {
System.out.println$S("JSHTMLHelper could not find '#_JSHREF_' in " + href);
return true;
}var left=href.substring$I$I(0, pt);
elem=p$1.getElementFromHref$S.apply(this, [left]);
href=p$1.trimHRef$S.apply(this, [href.substring$I(pt + 9)]);
var j2s=$I$(1).J2S;
var j2sPath=j2s.thisApplet._j2sPath ||null;
if (href.startsWith$S(j2sPath)) href=href.substring$I(j2sPath.length$());
url=Clazz.new_([this.doc.getBase$(), href],$I$(3,1).c$$java_net_URL$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
this.editor.fireHyperlinkUpdate$javax_swing_event_HyperlinkEvent(Clazz.new_($I$(4,1).c$$O$javax_swing_event_HyperlinkEvent_EventType$java_net_URL$S$javax_swing_text_Element,[this.editor, type, url, href, elem]));
return true;
});

Clazz.newMeth(C$, 'trimHRef$S',  function (href) {
href=$I$(5).trim$S$S(href, "\'\"");
if (href.startsWith$S("%22") && href.endsWith$S("%22") ) href=href.substring$I$I(3, href.length$() - 3);
return href;
}, p$1);

Clazz.newMeth(C$, 'getElementFromHref$S',  function (left) {
var pt=left.lastIndexOf$S("#_JSINDEX");
if (pt >= 0) {
var n=$I$(5,"parseInt$S",[left.substring$I(pt + 9)]);
if (n >= 0 && n < this.aTagElements.size$() ) return this.aTagElements.get$I(n);
}System.out.println$S("JSHTMLHelper could not find '#_JSINDEX' in " + left);
return null;
}, p$1);

Clazz.newMeth(C$, 'indexAnchors$S',  function (text) {
var html=$I$(5,"rep$S$S$S",[text, "href=", "onclick=\'return false\' href=#_JSINDEX_##_JSHREF_"]);
var iter=this.doc.getIterator$javax_swing_text_html_HTML_Tag($I$(6).A);
this.aTagElements=Clazz.new_($I$(7,1));
for (var i=0; iter.isValid$(); i++) {
this.aTagElements.add$O(iter.秘getElement$());
var pt=html.indexOf$S("href=#_JSINDEX_#");
if (pt > 0) html=html.substring$I$I(0, pt + 14) + i + html.substring$I(pt + 16) ;
iter.next$();
}
return html;
});

Clazz.newMeth(C$, 'get$S$S',  function (what, data) {
switch (what) {
case "html":
return this.indexAnchors$S(data);
case "css":
return p$1.getCSS$S.apply(this, [data]);
case "styles":
return p$1.getStyles$S.apply(this, [data]);
default:
System.out.println$S("JSHTMLHelper.get what? " + what);
return null;
}
});

Clazz.newMeth(C$, 'getStyles$S',  function (name) {
var sheet=this.doc.getStyleSheet$();
if (sheet == null ) return null;
var bodyStyle=sheet.getStyle$S(name);
if (bodyStyle != null ) {
var r=bodyStyle.getAttribute$O("resolver");
return ((r || bodyStyle).attributes.attributes ||null);
}return null;
}, p$1);

Clazz.newMeth(C$, 'getCSS$S',  function (id) {
var css="";
var sheet=this.doc.getStyleSheet$();
if (sheet == null ) return null;
var styles=sheet.getStyleNames$();
while (styles.hasMoreElements$()){
var name=styles.nextElement$();
var s=sheet.getStyle$S(name);
var r=s.getAttribute$O("resolver");
var a;
if (name.equals$O("default") || name.equals$O("body") ) {
continue;
} else if (r == null ) {
a=s.toString();
} else {
r.setName$S(name);
a=r.toString();
}css+=a + "\n";
}
return css.replaceAll$S$S("NamedStyle:", "#" + id + " " ).replaceAll$S$S("=", ":").replaceAll$S$S(",", ";");
}, p$1);

Clazz.newMeth(C$, 'fixLinks$S$java_net_URL',  function (html, page) {
if (page != null  && page.getProtocol$().equals$O("file")  && html.indexOf$S("src=\".") >= 0 ) {
var rp=$I$(1).J2S.getResourcePath("", true);
if (rp.indexOf$S("://") < 0) rp="file:/" + rp;
try {
page=Clazz.new_([rp + page.getPath$().substring$I(1)],$I$(3,1).c$$S);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.net.MalformedURLException")){
} else {
throw e1;
}
}
var srcs=$I$(5,"split$S$S",[html, "src=\""]);
var out=srcs[0];
for (var i=1; i < srcs.length; i++) {
var pt=srcs[i].indexOf$I("\"");
var src=srcs[i].substring$I$I(0, pt);
try {
if (!src.startsWith$S("http://") && !src.startsWith$S("https://") ) src=Clazz.new_($I$(3,1).c$$java_net_URL$S,[page, src]).getPath$().substring$I(1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
out+="src=\"" + src + srcs[i].substring$I(pt) ;
}
html=out;
}return html;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.text.html.StyleSheet','java.io.StringReader',['swingjs.plaf.BasicHTML','.BasicDocument'],'swingjs.plaf.BasicHTML','sun.swing.SwingUtilities2','Error',['swingjs.plaf.BasicHTML','.Renderer'],'java.awt.Rectangle','javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Tag'],['swingjs.plaf.BasicHTML','.BasicHTMLViewFactory'],['swingjs.plaf.BasicHTML','.BasicEditorKit']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicHTML", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['BasicEditorKit',8],['BasicHTMLViewFactory',8],['BasicDocument',8],['Renderer',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['basicHTMLFactory','swingjs.plaf.BasicHTML.BasicEditorKit','basicHTMLViewFactory','javax.swing.text.ViewFactory']]]

Clazz.newMeth(C$, 'createHTMLView$javax_swing_JComponent$S',  function (c, html) {
var kit=C$.getFactory$();
var doc=kit.createDefaultDocument$java_awt_Font$java_awt_Color(c.getFont$(), c.getForeground$());
var base=c.getClientProperty$O("html.base");
if (Clazz.instanceOf(base, "java.net.URL")) {
(doc).setBase$java_net_URL(base);
}var r=Clazz.new_($I$(2,1).c$$S,[html]);
try {
kit.read$java_io_Reader$javax_swing_text_Document$I(r, doc, 0);
} catch (e) {
}
var f=kit.getViewFactory$();
var hview=f.create$javax_swing_text_Element(doc.getDefaultRootElement$());
var v=Clazz.new_($I$(7,1).c$$javax_swing_JComponent$javax_swing_text_ViewFactory$javax_swing_text_View,[c, f, hview]);
return v;
}, 1);

Clazz.newMeth(C$, 'getHTMLBaseline$javax_swing_text_View$I$I',  function (view, w, h) {
if (w < 0 || h < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width and height must be >= 0"]);
}if (Clazz.instanceOf(view, "swingjs.plaf.BasicHTML.Renderer")) {
return C$.getBaseline$javax_swing_text_View$I$I(view.getView$I(0), w, h);
}return -1;
}, 1);

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I$I$I',  function (c, y, ascent, w, h) {
var view=c.getClientProperty$O("html");
if (view != null ) {
var baseline=C$.getHTMLBaseline$javax_swing_text_View$I$I(view, w, h);
if (baseline < 0) {
return baseline;
}return y + baseline;
}return y + ascent;
}, 1);

Clazz.newMeth(C$, 'getBaseline$javax_swing_text_View$I$I',  function (view, w, h) {
if (C$.hasParagraph$javax_swing_text_View(view)) {
view.setSize$F$F(w, h);
return C$.getBaseline$javax_swing_text_View$java_awt_Shape(view, Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, w, h]));
}return -1;
}, 1);

Clazz.newMeth(C$, 'getBaseline$javax_swing_text_View$java_awt_Shape',  function (view, bounds) {
if (view.getViewCount$() == 0) {
return -1;
}var attributes=view.getElement$().getAttributes$();
var name=null;
if (attributes != null ) {
name=attributes.getAttribute$O($I$(9).NameAttribute);
}var index=0;
if (name === $I$(10).HTML  && view.getViewCount$() > 1 ) {
++index;
}bounds=view.getChildAllocation$I$java_awt_Shape(index, bounds);
if (bounds == null ) {
return -1;
}var child=view.getView$I(index);
if (Clazz.instanceOf(view, "javax.swing.text.ParagraphView")) {
var rect;
if (Clazz.instanceOf(bounds, "java.awt.Rectangle")) {
rect=bounds;
} else {
rect=bounds.getBounds$();
}return rect.y + ((rect.height * child.getAlignment$I(1))|0);
}return C$.getBaseline$javax_swing_text_View$java_awt_Shape(child, bounds);
}, 1);

Clazz.newMeth(C$, 'hasParagraph$javax_swing_text_View',  function (view) {
if (Clazz.instanceOf(view, "javax.swing.text.ParagraphView")) {
return true;
}if (view.getViewCount$() == 0) {
return false;
}var attributes=view.getElement$().getAttributes$();
var name=null;
if (attributes != null ) {
name=attributes.getAttribute$O($I$(9).NameAttribute);
}var index=0;
if (name === $I$(10).HTML  && view.getViewCount$() > 1 ) {
index=1;
}return C$.hasParagraph$javax_swing_text_View(view.getView$I(index));
}, 1);

Clazz.newMeth(C$, 'isHTMLString$S',  function (s) {
if (s != null ) {
if ((s.length$() >= 6) && (s.charAt$I(0) == "<") && (s.charAt$I(5) == ">")  ) {
var tag=s.substring$I$I(1, 5);
return tag.equalsIgnoreCase$S("html");
}}return false;
}, 1);

Clazz.newMeth(C$, 'updateRenderer$javax_swing_JComponent$S',  function (c, text) {
var value=null;
var oldValue=c.getClientProperty$O("html");
var htmlDisabled=c.getClientProperty$O("html.disable");
if (htmlDisabled !== Boolean.TRUE  && C$.isHTMLString$S(text) ) {
value=C$.createHTMLView$javax_swing_JComponent$S(c, text);
}if (value !== oldValue  && oldValue != null  ) {
for (var i=0; i < oldValue.getViewCount$(); i++) {
oldValue.getView$I(i).setParent$javax_swing_text_View(null);
}
}c.putClientProperty$O$O("html", value);
}, 1);

Clazz.newMeth(C$, 'getFactory$',  function () {
if (C$.basicHTMLFactory == null ) {
C$.basicHTMLViewFactory=Clazz.new_($I$(11,1));
C$.basicHTMLFactory=Clazz.new_($I$(12,1));
}return C$.basicHTMLFactory;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicHTML, "BasicEditorKit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.html.HTMLEditorKit');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['defaultStyles','javax.swing.text.html.StyleSheet']]]

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
if (C$.defaultStyles == null ) {
C$.defaultStyles=Clazz.new_($I$(1,1));
var r=Clazz.new_($I$(2,1).c$$S,["p { margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0 }body { margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0 }"]);
try {
C$.defaultStyles.loadRules$java_io_Reader$java_net_URL(r, null);
} catch (e) {
}
r.close$();
C$.defaultStyles.addStyleSheet$javax_swing_text_html_StyleSheet(C$.superclazz.prototype.getStyleSheet$.apply(this, []));
}return C$.defaultStyles;
});

Clazz.newMeth(C$, 'createDefaultDocument$java_awt_Font$java_awt_Color',  function (defaultFont, foreground) {
var styles=this.getStyleSheet$();
var ss=Clazz.new_($I$(1,1));
ss.addStyleSheet$javax_swing_text_html_StyleSheet(styles);
var doc=Clazz.new_($I$(3,1).c$$javax_swing_text_html_StyleSheet$java_awt_Font$java_awt_Color,[ss, defaultFont, foreground]);
doc.setAsynchronousLoadPriority$I(2147483647);
doc.setPreservesUnknownTags$Z(false);
return doc;
});

Clazz.newMeth(C$, 'getViewFactory$',  function () {
return $I$(4).basicHTMLViewFactory;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicHTML, "BasicHTMLViewFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.HTMLEditorKit','.HTMLFactory']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'create$javax_swing_text_Element',  function (elem) {
var view=C$.superclazz.prototype.create$javax_swing_text_Element.apply(this, [elem]);
if (Clazz.instanceOf(view, "javax.swing.text.html.ImageView")) {
(view).setLoadsSynchronously$Z(true);
}return view;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicHTML, "BasicDocument", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.html.HTMLDocument');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_html_StyleSheet$java_awt_Font$java_awt_Color',  function (s, defaultFont, foreground) {
;C$.superclazz.c$$javax_swing_text_html_StyleSheet.apply(this,[s]);C$.$init$.apply(this);
this.setPreservesUnknownTags$Z(false);
p$1.setFontAndColor$java_awt_Font$java_awt_Color.apply(this, [defaultFont, foreground]);
}, 1);

Clazz.newMeth(C$, 'setFontAndColor$java_awt_Font$java_awt_Color',  function (font, fg) {
this.getStyleSheet$().addRule$S($I$(5).displayPropertiesToCSS$java_awt_Font$java_awt_Color(font, fg));
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicHTML, "Renderer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.View');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width'],'O',['view','javax.swing.text.View','factory','javax.swing.text.ViewFactory','host','javax.swing.JComponent']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$javax_swing_text_ViewFactory$javax_swing_text_View',  function (c, f, v) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[null]);C$.$init$.apply(this);
this.host=c;
this.factory=f;
this.view=v;
this.view.setParent$javax_swing_text_View(this);
this.setSize$F$F(this.view.getPreferredSpan$I(0), this.view.getPreferredSpan$I(1));
}, 1);

Clazz.newMeth(C$, 'getAttributes$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
if (axis == 0) {
return this.width;
}return this.view.getPreferredSpan$I(axis);
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
return this.view.getMinimumSpan$I(axis);
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
return 2147483647;
});

Clazz.newMeth(C$, 'preferenceChanged$javax_swing_text_View$Z$Z',  function (child, width, height) {
this.host.revalidate$();
this.host.秘repaint$();
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
return this.view.getAlignment$I(axis);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
var alloc=allocation.getBounds$();
this.view.setSize$F$F(alloc.width, alloc.height);
this.view.paint$java_awt_Graphics$java_awt_Shape(g, allocation);
});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
throw Clazz.new_($I$(6,1).c$$S,["Can\'t set parent on root view"]);
});

Clazz.newMeth(C$, 'getViewCount$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getView$I',  function (n) {
return this.view;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
return this.view.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(pos, a, b);
});

Clazz.newMeth(C$, 'modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape',  function (p0, b0, p1, b1, a) {
return this.view.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(p0, b0, p1, b1, a);
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, bias) {
return this.view.viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA(x, y, a, bias);
});

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.view.getDocument$();
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
return this.view.getStartOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
return this.view.getEndOffset$();
});

Clazz.newMeth(C$, 'getElement$',  function () {
return this.view.getElement$();
});

Clazz.newMeth(C$, 'setSize$F$F',  function (width, height) {
this.width=(width|0);
this.view.setSize$F$F(width, height);
});

Clazz.newMeth(C$, 'getContainer$',  function () {
return this.host;
});

Clazz.newMeth(C$, 'getViewFactory$',  function () {
return this.factory;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

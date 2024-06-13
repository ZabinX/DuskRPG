(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.text.PlainDocument','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTextArea", null, 'javax.swing.text.JTextComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['wrap','word'],'I',['rows','columns','columnWidth','rowHeight']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$javax_swing_text_Document$S$I$I.apply(this, [null, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$javax_swing_text_Document$S$I$I.apply(this, [null, text, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (rows, columns) {
C$.c$$javax_swing_text_Document$S$I$I.apply(this, [null, null, rows, columns]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I',  function (text, rows, columns) {
C$.c$$javax_swing_text_Document$S$I$I.apply(this, [null, text, rows, columns]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Document',  function (doc) {
C$.c$$javax_swing_text_Document$S$I$I.apply(this, [doc, null, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Document$S$I$I',  function (doc, text, rows, columns) {
Clazz.super_(C$, this);
this.setFocusTraversalKeysEnabled$Z(false);
this.rows=rows;
this.columns=columns;
if (doc == null ) {
doc=this.createDefaultModel$();
}this.setDocument$javax_swing_text_Document(doc);
if (text != null ) {
this.setText$S(text);
this.select$I$I(0, 0);
}if (rows < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rows: " + rows]);
}if (columns < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["columns: " + columns]);
}}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "TextAreaUI";
});

Clazz.newMeth(C$, 'createDefaultModel$',  function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'setTabSize$I',  function (size) {
var doc=this.getDocument$();
if (doc != null ) {
var old=this.getTabSize$();
doc.putProperty$O$O("tabSize",  new Integer(size));
this.firePropertyChange$S$I$I("tabSize", old, size);
}});

Clazz.newMeth(C$, 'getTabSize$',  function () {
var size=8;
var doc=this.getDocument$();
if (doc != null ) {
var i=doc.getProperty$O("tabSize");
if (i != null ) {
size=i.intValue$();
}}return size;
});

Clazz.newMeth(C$, 'setLineWrap$Z',  function (wrap) {
var old=this.wrap;
this.wrap=wrap;
this.firePropertyChange$S$Z$Z("lineWrap", old, wrap);
});

Clazz.newMeth(C$, 'getLineWrap$',  function () {
return this.wrap;
});

Clazz.newMeth(C$, 'setWrapStyleWord$Z',  function (word) {
var old=this.word;
this.word=word;
this.firePropertyChange$S$Z$Z("wrapStyleWord", old, word);
});

Clazz.newMeth(C$, 'getWrapStyleWord$',  function () {
return this.word;
});

Clazz.newMeth(C$, 'getLineOfOffset$I',  function (offset) {
var doc=this.getDocument$();
if (offset < 0) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Can\'t translate offset to line", -1]);
} else if (offset > doc.getLength$()) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Can\'t translate offset to line", doc.getLength$() + 1]);
} else {
var map=this.getDocument$().getDefaultRootElement$();
return map.getElementIndex$I(offset);
}});

Clazz.newMeth(C$, 'getLineCount$',  function () {
var map=this.getDocument$().getDefaultRootElement$();
return map.getElementCount$();
});

Clazz.newMeth(C$, 'getLineStartOffset$I',  function (line) {
var lineCount=this.getLineCount$();
if (line < 0) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Negative line", -1]);
} else if (line >= lineCount) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["No such line", this.getDocument$().getLength$() + 1]);
} else {
var map=this.getDocument$().getDefaultRootElement$();
var lineElem=map.getElement$I(line);
return lineElem.getStartOffset$();
}});

Clazz.newMeth(C$, 'getLineEndOffset$I',  function (line) {
var lineCount=this.getLineCount$();
if (line < 0) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Negative line", -1]);
} else if (line >= lineCount) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["No such line", this.getDocument$().getLength$() + 1]);
} else {
var map=this.getDocument$().getDefaultRootElement$();
var lineElem=map.getElement$I(line);
var endOffset=lineElem.getEndOffset$();
return ((line == lineCount - 1) ? (endOffset - 1) : endOffset);
}});

Clazz.newMeth(C$, 'insert$S$I',  function (str, pos) {
var doc=this.getDocument$();
if (doc != null ) {
try {
doc.insertString$I$S$javax_swing_text_AttributeSet(pos, str, null);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'append$S',  function (str) {
var doc=this.getDocument$();
if (doc != null ) {
try {
doc.insertString$I$S$javax_swing_text_AttributeSet(doc.getLength$(), str, null);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'replaceRange$S$I$I',  function (str, start, end) {
if (end < start) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["end before start"]);
}var doc=this.getDocument$();
if (doc != null ) {
try {
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).replace$I$I$S$javax_swing_text_AttributeSet$javax_swing_text_JTextComponent(start, end - start, str, null, this);
} else {
doc.remove$I$I(start, end - start);
doc.insertString$I$S$javax_swing_text_AttributeSet(start, str, null);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.getMessage$()]);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getRows$',  function () {
return this.rows;
});

Clazz.newMeth(C$, 'setRows$I',  function (rows) {
var oldVal=this.rows;
if (rows < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rows less than zero."]);
}if (rows != oldVal) {
this.rows=rows;
this.invalidate$();
}});

Clazz.newMeth(C$, 'getRowHeight$',  function () {
if (this.rowHeight == 0) {
var metrics=this.getFontMetrics$java_awt_Font(this.getFont$());
this.rowHeight=metrics.getHeight$();
}return this.rowHeight;
});

Clazz.newMeth(C$, 'getColumns$',  function () {
return this.columns;
});

Clazz.newMeth(C$, 'setColumns$I',  function (columns) {
var oldVal=this.columns;
if (columns < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["columns less than zero."]);
}if (columns != oldVal) {
this.columns=columns;
this.invalidate$();
}});

Clazz.newMeth(C$, 'getColumnWidth$',  function () {
if (this.columnWidth == 0) {
var metrics=this.getFontMetrics$java_awt_Font(this.getFont$());
this.columnWidth=metrics.charWidth$C("m");
}return this.columnWidth;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.getSizeJS$java_awt_Dimension$I$I$I(this.getPrefSizeJComp$(), 400, this.rows, this.columns);
});

Clazz.newMeth(C$, 'getSizeJS$java_awt_Dimension$I$I$I',  function (d, n, rows, columns) {
var w=10;
var h=10;
if (d == null ) {
d=Clazz.new_($I$(2,1).c$$I$I,[n, n]);
} else {
w=d.width;
h=d.height;
}if (columns != 0) {
d.width=Math.max(w, this.getJ2SWidth$I(columns));
}if (rows != 0) {
var insets=this.getInsets$();
d.height=Math.max(h, rows * this.getRowHeight$() + insets.top + insets.bottom);
}return d;
});

Clazz.newMeth(C$, 'getJ2SWidth$I',  function (columns) {
var insets=this.getInsets$();
return columns * this.getColumnWidth$() + insets.left + insets.right;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [f]);
this.rowHeight=0;
this.columnWidth=0;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var wrapString=(this.wrap ? "true" : "false");
var wordString=(this.word ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",colums=" + this.columns + ",columWidth=" + this.columnWidth + ",rows=" + this.rows + ",rowHeight=" + this.rowHeight + ",word=" + wordString + ",wrap=" + wrapString ;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
return (this.wrap) ? true : C$.superclazz.prototype.getScrollableTracksViewportWidth$.apply(this, []);
});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$',  function () {
var size=C$.superclazz.prototype.getPreferredScrollableViewportSize$.apply(this, []);
size=(size == null ) ? Clazz.new_($I$(2,1).c$$I$I,[400, 400]) : size;
var insets=this.getInsets$();
size.width=(this.columns == 0) ? size.width : this.columns * this.getColumnWidth$() + insets.left + insets.right;
size.height=(this.rows == 0) ? size.height : this.rows * this.getRowHeight$() + insets.top + insets.bottom;
return size;
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
switch (orientation) {
case 1:
return this.getRowHeight$();
case 0:
return this.getColumnWidth$();
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid orientation: " + orientation]);
}
});

Clazz.newMeth(C$, 'scrollRectToVisible$java_awt_Rectangle',  function (aRect) {
if (Clazz.instanceOf(this.parent, "javax.swing.JViewport")) {
(this.parent).scrollRectToVisible$java_awt_Rectangle(aRect);
}(this.秘getUI$()).scrollToVisible$java_awt_Rectangle(aRect);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

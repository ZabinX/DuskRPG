(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,['javax.swing.text.Position','.Bias'],'java.util.Vector','javax.swing.SwingUtilities',['javax.swing.text.Highlighter','.Highlight'],['javax.swing.text.DefaultHighlighter','.DefaultHighlightPainter'],['javax.swing.text.DefaultHighlighter','.SafeDamager'],['javax.swing.text.DefaultHighlighter','.LayeredHighlightInfo'],['javax.swing.text.DefaultHighlighter','.HighlightInfo']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultHighlighter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.LayeredHighlighter');
C$.$classes$=[['DefaultHighlightPainter',9],['HighlightInfo',0],['LayeredHighlightInfo',0],['SafeDamager',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.highlights=Clazz.new_($I$(2,1));
this.safeDamager=Clazz.new_($I$(6,1),[this, null]);
},1);

C$.$fields$=[['Z',['drawsLayeredHighlights'],'O',['highlights','java.util.Vector','component','javax.swing.text.JTextComponent','safeDamager','javax.swing.text.DefaultHighlighter.SafeDamager']]
,['O',['noHighlights','javax.swing.text.Highlighter.Highlight[]','DefaultPainter','javax.swing.text.LayeredHighlighter.LayerPainter']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.drawsLayeredHighlights=true;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
var len=this.highlights.size$();
for (var i=0; i < len; i++) {
var info=this.highlights.elementAt$I(i);
if (!(Clazz.instanceOf(info, "javax.swing.text.DefaultHighlighter.LayeredHighlightInfo"))) {
var a=this.component.getBounds$();
var insets=this.component.getInsets$();
a.x=insets.left;
a.y=insets.top;
a.width-=insets.left + insets.right;
a.height-=insets.top + insets.bottom;
for (; i < len; i++) {
info=this.highlights.elementAt$I(i);
if (!(Clazz.instanceOf(info, "javax.swing.text.DefaultHighlighter.LayeredHighlightInfo"))) {
var p=info.getPainter$();
p.paint$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent(g, info.getStartOffset$(), info.getEndOffset$(), a, this.component);
}}
}}
});

Clazz.newMeth(C$, 'install$javax_swing_text_JTextComponent',  function (c) {
this.component=c;
this.removeAllHighlights$();
});

Clazz.newMeth(C$, 'deinstall$javax_swing_text_JTextComponent',  function (c) {
this.component=null;
});

Clazz.newMeth(C$, 'addHighlight$I$I$javax_swing_text_Highlighter_HighlightPainter',  function (p0, p1, p) {
var doc=this.component.getDocument$();
var i=(this.getDrawsLayeredHighlights$() && (Clazz.instanceOf(p, "javax.swing.text.LayeredHighlighter.LayerPainter")) ) ? Clazz.new_($I$(7,1),[this, null]) : Clazz.new_($I$(8,1),[this, null]);
i.painter=p;
i.p0=doc.createPosition$I(p0);
i.p1=doc.createPosition$I(p1);
this.highlights.addElement$O(i);
p$1.safeDamageRange$I$I.apply(this, [p0, p1]);
return i;
});

Clazz.newMeth(C$, 'removeHighlight$O',  function (tag) {
if (Clazz.instanceOf(tag, "javax.swing.text.DefaultHighlighter.LayeredHighlightInfo")) {
var lhi=tag;
if (lhi.width > 0 && lhi.height > 0 ) {
this.component.repaint$I$I$I$I(lhi.x, lhi.y, lhi.width, lhi.height);
}} else {
var info=tag;
p$1.safeDamageRange$javax_swing_text_Position$javax_swing_text_Position.apply(this, [info.p0, info.p1]);
}this.highlights.removeElement$O(tag);
});

Clazz.newMeth(C$, 'removeAllHighlights$',  function () {
var mapper=this.component.getUI$();
if (this.getDrawsLayeredHighlights$()) {
var len=this.highlights.size$();
if (len != 0) {
var minX=0;
var minY=0;
var maxX=0;
var maxY=0;
var p0=-1;
var p1=-1;
for (var i=0; i < len; i++) {
var hi=this.highlights.elementAt$I(i);
if (Clazz.instanceOf(hi, "javax.swing.text.DefaultHighlighter.LayeredHighlightInfo")) {
var info=hi;
minX=Math.min(minX, info.x);
minY=Math.min(minY, info.y);
maxX=Math.max(maxX, info.x + info.width);
maxY=Math.max(maxY, info.y + info.height);
} else {
if (p0 == -1) {
p0=hi.p0.getOffset$();
p1=hi.p1.getOffset$();
} else {
p0=Math.min(p0, hi.p0.getOffset$());
p1=Math.max(p1, hi.p1.getOffset$());
}}}
if (minX != maxX && minY != maxY ) {
this.component.repaint$I$I$I$I(minX, minY, maxX - minX, maxY - minY);
}if (p0 != -1) {
try {
p$1.safeDamageRange$I$I.apply(this, [p0, p1]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
}this.highlights.removeAllElements$();
}} else if (mapper != null ) {
var len=this.highlights.size$();
if (len != 0) {
var p0=2147483647;
var p1=0;
for (var i=0; i < len; i++) {
var info=this.highlights.elementAt$I(i);
p0=Math.min(p0, info.p0.getOffset$());
p1=Math.max(p1, info.p1.getOffset$());
}
try {
p$1.safeDamageRange$I$I.apply(this, [p0, p1]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
this.highlights.removeAllElements$();
}}});

Clazz.newMeth(C$, 'changeHighlight$O$I$I',  function (tag, p0, p1) {
var doc=this.component.getDocument$();
if (Clazz.instanceOf(tag, "javax.swing.text.DefaultHighlighter.LayeredHighlightInfo")) {
var lhi=tag;
if (lhi.width > 0 && lhi.height > 0 ) {
this.component.repaint$I$I$I$I(lhi.x, lhi.y, lhi.width, lhi.height);
}lhi.width=lhi.height=0;
lhi.p0=doc.createPosition$I(p0);
lhi.p1=doc.createPosition$I(p1);
p$1.safeDamageRange$I$I.apply(this, [Math.min(p0, p1), Math.max(p0, p1)]);
} else {
var info=tag;
var oldP0=info.p0.getOffset$();
var oldP1=info.p1.getOffset$();
if (p0 == oldP0) {
p$1.safeDamageRange$I$I.apply(this, [Math.min(oldP1, p1), Math.max(oldP1, p1)]);
} else if (p1 == oldP1) {
p$1.safeDamageRange$I$I.apply(this, [Math.min(p0, oldP0), Math.max(p0, oldP0)]);
} else {
p$1.safeDamageRange$I$I.apply(this, [oldP0, oldP1]);
p$1.safeDamageRange$I$I.apply(this, [p0, p1]);
}info.p0=doc.createPosition$I(p0);
info.p1=doc.createPosition$I(p1);
}});

Clazz.newMeth(C$, 'getHighlights$',  function () {
var size=this.highlights.size$();
if (size == 0) {
return C$.noHighlights;
}var h=Clazz.array($I$(4), [size]);
this.highlights.copyInto$OA(h);
return h;
});

Clazz.newMeth(C$, 'paintLayeredHighlights$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View',  function (g, p0, p1, viewBounds, editor, view) {
for (var counter=this.highlights.size$() - 1; counter >= 0; counter--) {
var tag=this.highlights.elementAt$I(counter);
if (Clazz.instanceOf(tag, "javax.swing.text.DefaultHighlighter.LayeredHighlightInfo")) {
var lhi=tag;
var start=lhi.getStartOffset$();
var end=lhi.getEndOffset$();
if ((p0 < start && p1 > start ) || (p0 >= start && p0 < end ) ) {
lhi.paintLayeredHighlights$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View(g, p0, p1, viewBounds, editor, view);
}}}
});

Clazz.newMeth(C$, 'safeDamageRange$javax_swing_text_Position$javax_swing_text_Position',  function (p0, p1) {
this.safeDamager.damageRange$javax_swing_text_Position$javax_swing_text_Position(p0, p1);
}, p$1);

Clazz.newMeth(C$, 'safeDamageRange$I$I',  function (a0, a1) {
var doc=this.component.getDocument$();
p$1.safeDamageRange$javax_swing_text_Position$javax_swing_text_Position.apply(this, [doc.createPosition$I(a0), doc.createPosition$I(a1)]);
}, p$1);

Clazz.newMeth(C$, 'setDrawsLayeredHighlights$Z',  function (newValue) {
this.drawsLayeredHighlights=newValue;
});

Clazz.newMeth(C$, 'getDrawsLayeredHighlights$',  function () {
return this.drawsLayeredHighlights;
});

C$.$static$=function(){C$.$static$=0;
C$.noHighlights=Clazz.array($I$(4), [0]);
C$.DefaultPainter=Clazz.new_($I$(5,1).c$$java_awt_Color,[null]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultHighlighter, "DefaultHighlightPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.LayeredHighlighter','.LayerPainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (c) {
Clazz.super_(C$, this);
this.color=c;
}, 1);

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent',  function (g, offs0, offs1, bounds, c) {
var alloc=bounds.getBounds$();
try {
var mapper=c.getUI$();
var p0=mapper.modelToView$javax_swing_text_JTextComponent$I(c, offs0);
var p1=mapper.modelToView$javax_swing_text_JTextComponent$I(c, offs1);
var color=this.getColor$();
if (color == null ) {
g.setColor$java_awt_Color(c.getSelectionColor$());
} else {
g.setColor$java_awt_Color(color);
}if (p0.y == p1.y) {
var r=p0.union$java_awt_Rectangle(p1);
g.fillRect$I$I$I$I(r.x, r.y, r.width, r.height);
} else {
var p0ToMarginWidth=alloc.x + alloc.width - p0.x;
g.fillRect$I$I$I$I(p0.x, p0.y, p0ToMarginWidth, p0.height);
if ((p0.y + p0.height) != p1.y) {
g.fillRect$I$I$I$I(alloc.x, p0.y + p0.height, alloc.width, p1.y - (p0.y + p0.height));
}g.fillRect$I$I$I$I(alloc.x, p1.y, (p1.x - alloc.x), p1.height);
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'paintLayer$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View',  function (g, offs0, offs1, bounds, c, view) {
var color=this.getColor$();
if (color == null ) {
g.setColor$java_awt_Color(c.getSelectionColor$());
} else {
g.setColor$java_awt_Color(color);
}var r;
if (offs0 == view.getStartOffset$() && offs1 == view.getEndOffset$() ) {
if (Clazz.instanceOf(bounds, "java.awt.Rectangle")) {
r=bounds;
} else {
r=bounds.getBounds$();
}} else {
try {
var shape=view.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(offs0, $I$(1).Forward, offs1, $I$(1).Backward, bounds);
r=(Clazz.instanceOf(shape, "java.awt.Rectangle")) ? shape : shape.getBounds$();
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
r=null;
} else {
throw e;
}
}
}if (r != null ) {
r.width=Math.max(r.width, 1);
g.fillRect$I$I$I$I(r.x, r.y, r.width, r.height);
}return r;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultHighlighter, "HighlightInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javax.swing.text.Highlighter','javax.swing.text.Highlighter.Highlight']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['p0','javax.swing.text.Position','+p1','painter','javax.swing.text.Highlighter.HighlightPainter']]]

Clazz.newMeth(C$, 'getStartOffset$',  function () {
return this.p0.getOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
return this.p1.getOffset$();
});

Clazz.newMeth(C$, 'getPainter$',  function () {
return this.painter;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultHighlighter, "LayeredHighlightInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['javax.swing.text.DefaultHighlighter','.HighlightInfo']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['x','y','width','height']]]

Clazz.newMeth(C$, 'union$java_awt_Shape',  function (bounds) {
if (bounds == null ) return;
var alloc;
if (Clazz.instanceOf(bounds, "java.awt.Rectangle")) {
alloc=bounds;
} else {
alloc=bounds.getBounds$();
}if (this.width == 0 || this.height == 0 ) {
this.x=alloc.x;
this.y=alloc.y;
this.width=alloc.width;
this.height=alloc.height;
} else {
this.width=Math.max(this.x + this.width, alloc.x + alloc.width);
this.height=Math.max(this.y + this.height, alloc.y + alloc.height);
this.x=Math.min(this.x, alloc.x);
this.width-=this.x;
this.y=Math.min(this.y, alloc.y);
this.height-=this.y;
}});

Clazz.newMeth(C$, 'paintLayeredHighlights$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View',  function (g, p0, p1, viewBounds, editor, view) {
var start=this.getStartOffset$();
var end=this.getEndOffset$();
p0=Math.max(start, p0);
p1=Math.min(end, p1);
this.union$java_awt_Shape((this.painter).paintLayer$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View(g, p0, p1, viewBounds, editor, view));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultHighlighter, "SafeDamager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.p0=Clazz.new_($I$(2,1).c$$I,[10]);
this.p1=Clazz.new_($I$(2,1).c$$I,[10]);
this.lastDoc=null;
},1);

C$.$fields$=[['O',['p0','java.util.Vector','+p1','lastDoc','javax.swing.text.Document']]]

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['javax.swing.text.DefaultHighlighter'].component != null ) {
var mapper=this.b$['javax.swing.text.DefaultHighlighter'].component.getUI$();
if (mapper != null  && this.lastDoc === this.b$['javax.swing.text.DefaultHighlighter'].component.getDocument$()  ) {
var len=this.p0.size$();
for (var i=0; i < len; i++) {
mapper.damageRange$javax_swing_text_JTextComponent$I$I(this.b$['javax.swing.text.DefaultHighlighter'].component, (this.p0.get$I(i)).getOffset$(), (this.p1.get$I(i)).getOffset$());
}
}}this.p0.clear$();
this.p1.clear$();
this.lastDoc=null;
});

Clazz.newMeth(C$, 'damageRange$javax_swing_text_Position$javax_swing_text_Position',  function (pos0, pos1) {
if (this.b$['javax.swing.text.DefaultHighlighter'].component == null ) {
this.p0.clear$();
this.lastDoc=null;
return;
}var addToQueue=this.p0.isEmpty$();
var curDoc=this.b$['javax.swing.text.DefaultHighlighter'].component.getDocument$();
if (curDoc !== this.lastDoc ) {
if (!this.p0.isEmpty$()) {
this.p0.clear$();
this.p1.clear$();
}this.lastDoc=curDoc;
}this.p0.add$O(pos0);
this.p1.add$O(pos1);
if (addToQueue) {
$I$(3).invokeLater$Runnable(this);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

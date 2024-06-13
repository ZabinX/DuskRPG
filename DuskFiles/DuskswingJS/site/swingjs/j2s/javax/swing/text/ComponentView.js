(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'java.awt.Dimension','javax.swing.text.StyleConstants','javax.swing.SwingUtilities',['javax.swing.text.ComponentView','.Invalidator'],['javax.swing.text.Position','.Bias']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComponentView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.View');
C$.$classes$=[['Invalidator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['createdC','java.awt.Component','c','javax.swing.text.ComponentView.Invalidator']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createComponent$',  function () {
var attr=this.getElement$().getAttributes$();
var comp=$I$(2).getComponent$javax_swing_text_AttributeSet(attr);
return comp;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.createdC;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
if (this.c != null ) {
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
this.c.setBounds$I$I$I$I(alloc.x, alloc.y, alloc.width, alloc.height);
}});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
if ((axis != 0) && (axis != 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}if (this.c != null ) {
var size=this.c.getPreferredSize$();
if (axis == 0) {
return size.width;
} else {
return size.height;
}}return 0;
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
if ((axis != 0) && (axis != 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}if (this.c != null ) {
var size=this.c.getMinimumSize$();
if (axis == 0) {
return size.width;
} else {
return size.height;
}}return 0;
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
if ((axis != 0) && (axis != 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}if (this.c != null ) {
var size=this.c.getMaximumSize$();
if (axis == 0) {
return size.width;
} else {
return size.height;
}}return 0;
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
if (this.c != null ) {
switch (axis) {
case 0:
return this.c.getAlignmentX$();
case 1:
return this.c.getAlignmentY$();
}
}return C$.superclazz.prototype.getAlignment$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (p) {
C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [p]);
if ($I$(3).isEventDispatchThread$()) {
this.setComponentParent$();
} else {
var callSetComponentParent=((P$.ComponentView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ComponentView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var doc=this.b$['javax.swing.text.View'].getDocument$.apply(this.b$['javax.swing.text.View'], []);
try {
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).readLock$();
}this.b$['javax.swing.text.ComponentView'].setComponentParent$.apply(this.b$['javax.swing.text.ComponentView'], []);
var host=this.b$['javax.swing.text.View'].getContainer$.apply(this.b$['javax.swing.text.View'], []);
if (host != null ) {
this.b$['javax.swing.text.View'].preferenceChanged$javax_swing_text_View$Z$Z.apply(this.b$['javax.swing.text.View'], [null, true, true]);
host.秘repaint$();
}} finally {
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).readUnlock$();
}}
});
})()
), Clazz.new_(P$.ComponentView$1.$init$,[this, null]));
$I$(3).invokeLater$Runnable(callSetComponentParent);
}});

Clazz.newMeth(C$, 'setComponentParent$',  function () {
var p=this.getParent$();
if (p != null ) {
var parent=this.getContainer$();
if (parent != null ) {
if (this.c == null ) {
var comp=this.createComponent$();
if (comp != null ) {
this.createdC=comp;
this.c=Clazz.new_($I$(4,1).c$$java_awt_Component,[this, null, comp]);
}}if (this.c != null ) {
if (this.c.getParent$() == null ) {
parent.add$java_awt_Component$O(this.c, this);
parent.addPropertyChangeListener$S$java_beans_PropertyChangeListener("enabled", this.c);
}}}} else {
if (this.c != null ) {
var parent=this.c.getParent$();
if (parent != null ) {
parent.remove$java_awt_Component(this.c);
parent.removePropertyChangeListener$S$java_beans_PropertyChangeListener("enabled", this.c);
}}}});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var p0=this.getStartOffset$();
var p1=this.getEndOffset$();
if ((pos >= p0) && (pos <= p1) ) {
var r=a.getBounds$();
if (pos == p1) {
r.x+=r.width;
}r.width=0;
return r;
}throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,[pos + " not in range " + p0 + "," + p1 , pos]);
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, bias) {
var alloc=a;
if (x < alloc.x + ((alloc.width/2|0)) ) {
bias[0]=$I$(5).Forward;
return this.getStartOffset$();
}bias[0]=$I$(5).Backward;
return this.getEndOffset$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ComponentView, "Invalidator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Container', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['yalign','xalign'],'O',['min','java.awt.Dimension','+pref','+max']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (child) {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(null);
this.add$java_awt_Component(child);
p$1.cacheChildSizes.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'invalidate$',  function () {
C$.superclazz.prototype.invalidate$.apply(this, []);
if (this.getParent$() != null ) {
this.b$['javax.swing.text.View'].preferenceChanged$javax_swing_text_View$Z$Z.apply(this.b$['javax.swing.text.View'], [null, true, true]);
}});

Clazz.newMeth(C$, 'doLayout$',  function () {
p$1.cacheChildSizes.apply(this, []);
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I',  function (x, y, w, h) {
C$.superclazz.prototype.setBounds$I$I$I$I.apply(this, [x, y, w, h]);
if (this.getComponentCount$() > 0) {
this.getComponent$I(0).setSize$I$I(w, h);
}p$1.cacheChildSizes.apply(this, []);
});

Clazz.newMeth(C$, 'validateIfNecessary$',  function () {
if (!this.isValid$()) {
this.validate$();
}});

Clazz.newMeth(C$, 'cacheChildSizes',  function () {
if (this.getComponentCount$() > 0) {
var child=this.getComponent$I(0);
this.min=child.getMinimumSize$();
this.pref=child.getPreferredSize$();
this.max=child.getMaximumSize$();
this.yalign=child.getAlignmentY$();
this.xalign=child.getAlignmentX$();
} else {
this.min=this.pref=this.max=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
}}, p$1);

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (this.getComponentCount$() > 0) {
this.getComponent$I(0).setVisible$Z(b);
}});

Clazz.newMeth(C$, 'isShowing$',  function () {
return true;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
this.validateIfNecessary$();
return this.min;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
this.validateIfNecessary$();
return this.pref;
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
this.validateIfNecessary$();
return this.max;
});

Clazz.newMeth(C$, 'getAlignmentX$',  function () {
this.validateIfNecessary$();
return this.xalign;
});

Clazz.newMeth(C$, 'getAlignmentY$',  function () {
this.validateIfNecessary$();
return this.yalign;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (ev) {
var enable=ev.getNewValue$();
if (this.getComponentCount$() > 0) {
this.getComponent$I(0).setEnabled$Z((enable).valueOf());
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,['javax.swing.text.Position','.Bias'],'javax.swing.text.Utilities','java.awt.Rectangle',['javax.swing.event.DocumentEvent','.EventType']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "View", null, null, 'javax.swing.SwingConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parent','javax.swing.text.View','elem','javax.swing.text.Element']]
,['O',['sharedBiasReturn','javax.swing.text.Position.Bias[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.$init$.apply(this);
this.elem=elem;
}, 1);

Clazz.newMeth(C$, 'getParent$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return true;
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
var w=this.getResizeWeight$I(axis);
if (w == 0) {
return this.getPreferredSpan$I(axis);
}return 0;
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
var w=this.getResizeWeight$I(axis);
if (w == 0) {
return this.getPreferredSpan$I(axis);
}return 2147483647;
});

Clazz.newMeth(C$, 'preferenceChanged$javax_swing_text_View$Z$Z',  function (child, width, height) {
var parent=this.getParent$();
if (parent != null ) {
parent.preferenceChanged$javax_swing_text_View$Z$Z(this, width, height);
}});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
return 0.5;
});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
if (parent == null ) {
for (var i=0; i < this.getViewCount$(); i++) {
if (this.getView$I(i).getParent$() === this ) {
this.getView$I(i).setParent$javax_swing_text_View(null);
}}
}this.parent=parent;
});

Clazz.newMeth(C$, 'getViewCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getView$I',  function (n) {
return null;
});

Clazz.newMeth(C$, 'removeAll$',  function () {
this.replace$I$I$javax_swing_text_ViewA(0, this.getViewCount$(), null);
});

Clazz.newMeth(C$, 'remove$I',  function (i) {
this.replace$I$I$javax_swing_text_ViewA(i, 1, null);
});

Clazz.newMeth(C$, 'insert$I$javax_swing_text_View',  function (offs, v) {
var one=Clazz.array(C$, [1]);
one[0]=v;
this.replace$I$I$javax_swing_text_ViewA(offs, 0, one);
});

Clazz.newMeth(C$, 'append$javax_swing_text_View',  function (v) {
var one=Clazz.array(C$, [1]);
one[0]=v;
this.replace$I$I$javax_swing_text_ViewA(this.getViewCount$(), 0, one);
});

Clazz.newMeth(C$, 'replace$I$I$javax_swing_text_ViewA',  function (offset, length, views) {
});

Clazz.newMeth(C$, 'getViewIndex$I$javax_swing_text_Position_Bias',  function (pos, b) {
return -1;
});

Clazz.newMeth(C$, 'getChildAllocation$I$java_awt_Shape',  function (index, a) {
return null;
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (pos, b, a, direction, biasRet) {
biasRet[0]=$I$(1).Forward;
switch (direction) {
case 1:
case 5:
{
if (pos == -1) {
pos=(direction == 1) ? Math.max(0, this.getEndOffset$() - 1) : this.getStartOffset$();
break;
}var target=this.getContainer$();
var c=(target != null ) ? target.getCaret$() : null;
var mcp;
if (c != null ) {
mcp=c.getMagicCaretPosition$();
} else {
mcp=null;
}var x;
if (mcp == null ) {
var loc=target.modelToView$I(pos);
x=(loc == null ) ? 0 : loc.x;
} else {
x=mcp.x;
}if (direction == 1) {
pos=$I$(2).getPositionAbove$javax_swing_text_JTextComponent$I$I(target, pos, x);
} else {
pos=$I$(2).getPositionBelow$javax_swing_text_JTextComponent$I$I(target, pos, x);
}}break;
case 7:
if (pos == -1) {
pos=Math.max(0, this.getEndOffset$() - 1);
} else {
pos=Math.max(0, pos - 1);
}break;
case 3:
if (pos == -1) {
pos=this.getStartOffset$();
} else {
pos=Math.min(pos + 1, this.getDocument$().getLength$());
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad direction: " + direction]);
}
return pos;
});

Clazz.newMeth(C$, 'modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape',  function (p0, b0, p1, b1, a) {
var s0=this.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(p0, a, b0);
var s1;
if (p1 == this.getEndOffset$()) {
try {
s1=this.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(p1, a, b1);
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
s1=null;
} else {
throw ble;
}
}
if (s1 == null ) {
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
s1=Clazz.new_($I$(3,1).c$$I$I$I$I,[alloc.x + alloc.width - 1, alloc.y, 1, alloc.height]);
}} else {
s1=this.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(p1, a, b1);
}var r0=s0.getBounds$();
var r1=(Clazz.instanceOf(s1, "java.awt.Rectangle")) ? s1 : s1.getBounds$();
if (r0.y != r1.y) {
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
r0.x=alloc.x;
r0.width=alloc.width;
}r0.add$java_awt_Rectangle(r1);
return r0;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
if (this.getViewCount$() > 0) {
var elem=this.getElement$();
var ec=e.getChange$javax_swing_text_Element(elem);
if (ec != null ) {
if (!this.updateChildren$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$javax_swing_text_ViewFactory(ec, e, f)) {
ec=null;
}}this.forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(ec, e, a, f);
this.updateLayout$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape(ec, e, a);
}});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
if (this.getViewCount$() > 0) {
var elem=this.getElement$();
var ec=e.getChange$javax_swing_text_Element(elem);
if (ec != null ) {
if (!this.updateChildren$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$javax_swing_text_ViewFactory(ec, e, f)) {
ec=null;
}}this.forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(ec, e, a, f);
this.updateLayout$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape(ec, e, a);
}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
if (this.getViewCount$() > 0) {
var elem=this.getElement$();
var ec=e.getChange$javax_swing_text_Element(elem);
if (ec != null ) {
if (!this.updateChildren$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$javax_swing_text_ViewFactory(ec, e, f)) {
ec=null;
}}this.forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(ec, e, a, f);
this.updateLayout$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape(ec, e, a);
}});

Clazz.newMeth(C$, 'getDocument$',  function () {
return this.elem.getDocument$();
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
return this.elem.getStartOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
return this.elem.getEndOffset$();
});

Clazz.newMeth(C$, 'getElement$',  function () {
return this.elem;
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
var c=this.getContainer$();
return c.getGraphics$();
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.elem.getAttributes$();
});

Clazz.newMeth(C$, 'breakView$I$I$F$F',  function (axis, offset, pos, len) {
return this;
});

Clazz.newMeth(C$, 'createFragment$I$I',  function (p0, p1) {
return this;
});

Clazz.newMeth(C$, 'getBreakWeight$I$F$F',  function (axis, pos, len) {
if (len > this.getPreferredSpan$I(axis) ) {
return 1000;
}return 0;
});

Clazz.newMeth(C$, 'getResizeWeight$I',  function (axis) {
return 0;
});

Clazz.newMeth(C$, 'setSize$F$F',  function (width, height) {
});

Clazz.newMeth(C$, 'getContainer$',  function () {
var v=this.getParent$();
return (v != null ) ? v.getContainer$() : null;
});

Clazz.newMeth(C$, 'getViewFactory$',  function () {
var v=this.getParent$();
return (v != null ) ? v.getViewFactory$() : null;
});

Clazz.newMeth(C$, 'getToolTipText$F$F$java_awt_Shape',  function (x, y, allocation) {
var viewIndex=this.getViewIndex$F$F$java_awt_Shape(x, y, allocation);
if (viewIndex >= 0) {
allocation=this.getChildAllocation$I$java_awt_Shape(viewIndex, allocation);
var rect=(Clazz.instanceOf(allocation, "java.awt.Rectangle")) ? allocation : allocation.getBounds$();
if (rect.contains$D$D(x, y)) {
return this.getView$I(viewIndex).getToolTipText$F$F$java_awt_Shape(x, y, allocation);
}}return null;
});

Clazz.newMeth(C$, 'getViewIndex$F$F$java_awt_Shape',  function (x, y, allocation) {
for (var counter=this.getViewCount$() - 1; counter >= 0; counter--) {
var childAllocation=this.getChildAllocation$I$java_awt_Shape(counter, allocation);
if (childAllocation != null ) {
var rect=(Clazz.instanceOf(childAllocation, "java.awt.Rectangle")) ? childAllocation : childAllocation.getBounds$();
if (rect.contains$D$D(x, y)) {
return counter;
}}}
return -1;
});

Clazz.newMeth(C$, 'updateChildren$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$javax_swing_text_ViewFactory',  function (ec, e, f) {
var removedElems=ec.getChildrenRemoved$();
var addedElems=ec.getChildrenAdded$();
var added=null;
if (addedElems != null ) {
added=Clazz.array(C$, [addedElems.length]);
for (var i=0; i < addedElems.length; i++) {
added[i]=f.create$javax_swing_text_Element(addedElems[i]);
}
}var nremoved=0;
var index=ec.getIndex$();
if (removedElems != null ) {
nremoved=removedElems.length;
}this.replace$I$I$javax_swing_text_ViewA(index, nremoved, added);
return true;
});

Clazz.newMeth(C$, 'forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (ec, e, a, f) {
var pos=e.getOffset$();
var index0=this.getViewIndex$I$javax_swing_text_Position_Bias(pos, $I$(1).Forward);
if (index0 == -1 && e.getType$() === $I$(4).REMOVE   && pos >= this.getEndOffset$() ) {
index0=this.getViewCount$() - 1;
}var index1=index0;
var v=(index0 >= 0) ? this.getView$I(index0) : null;
if (v != null ) {
if ((v.getStartOffset$() == pos) && (pos > 0) ) {
index0=Math.max(index0 - 1, 0);
}}if (e.getType$() !== $I$(4).REMOVE ) {
index1=this.getViewIndex$I$javax_swing_text_Position_Bias(pos + e.getLength$(), $I$(1).Forward);
if (index1 < 0) {
index1=this.getViewCount$() - 1;
}}var hole0=index1 + 1;
var hole1=hole0;
var addedElems=(ec != null ) ? ec.getChildrenAdded$() : null;
if ((addedElems != null ) && (addedElems.length > 0) ) {
hole0=ec.getIndex$();
hole1=hole0 + addedElems.length - 1;
}index0=Math.max(index0, 0);
for (var i=index0; i <= index1; i++) {
if (!((i >= hole0) && (i <= hole1) )) {
v=this.getView$I(i);
if (v != null ) {
var childAlloc=this.getChildAllocation$I$java_awt_Shape(i, a);
this.forwardUpdateToView$javax_swing_text_View$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(v, e, childAlloc, f);
}}}
});

Clazz.newMeth(C$, 'forwardUpdateToView$javax_swing_text_View$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (v, e, a, f) {
var type=e.getType$();
if (type === $I$(4).INSERT ) {
v.insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(e, a, f);
} else if (type === $I$(4).REMOVE ) {
v.removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(e, a, f);
} else {
v.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(e, a, f);
}});

Clazz.newMeth(C$, 'updateLayout$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape',  function (ec, e, a) {
if ((ec != null ) && (a != null ) ) {
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
var host=this.getContainer$();
if (host != null ) {
host.秘repaint$();
}}});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape',  function (pos, a) {
return this.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(pos, a, $I$(1).Forward);
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape',  function (x, y, a) {
C$.sharedBiasReturn[0]=$I$(1).Forward;
return this.viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA(x, y, a, C$.sharedBiasReturn);
});

C$.$static$=function(){C$.$static$=0;
C$.sharedBiasReturn=Clazz.array($I$(1), [1]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

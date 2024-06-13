(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.TransferHandler','.SwingDropTarget'],'java.awt.Rectangle','java.awt.Point','Error','java.awt.JSComponent','java.awt.event.MouseWheelEvent','javax.swing.event.MenuDragMouseEvent','java.awt.event.MouseEvent','sun.swing.SwingUtilities2','swingjs.api.js.DOMNode','javax.swing.CellRendererPane','java.awt.EventQueue','java.awt.KeyboardFocusManager','javax.swing.JComponent','java.awt.event.ActionEvent','swingjs.JSToolkit',['javax.swing.SwingUtilities','.SharedOwnerFrame'],'sun.awt.AppContext','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingUtilities", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javax.swing.SwingConstants');
C$.$classes$=[['SharedOwnerFrame',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'installSwingDropTargetAsNecessary$java_awt_Component$javax_swing_TransferHandler',  function (c, t) {
var dropHandler=c.getDropTarget$();
if ((dropHandler == null ) || (Clazz.instanceOf(dropHandler, "javax.swing.plaf.UIResource")) ) {
if (t == null ) {
c.setDropTarget$java_awt_dnd_DropTarget(null);
} else {
c.setDropTarget$java_awt_dnd_DropTarget(Clazz.new_($I$(1,1).c$$java_awt_Component,[c]));
}}}, 1);

Clazz.newMeth(C$, 'isRectangleContainingRectangle$java_awt_Rectangle$java_awt_Rectangle',  function (a, b) {
if (b.x >= a.x && (b.x + b.width) <= (a.x + a.width)  && b.y >= a.y  && (b.y + b.height) <= (a.y + a.height) ) {
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'getLocalBounds$java_awt_Component',  function (aComponent) {
var b=Clazz.new_([aComponent.getBounds$()],$I$(2,1).c$$java_awt_Rectangle);
b.x=b.y=0;
return b;
}, 1);

Clazz.newMeth(C$, 'getWindowAncestor$java_awt_Component',  function (c) {
for (var p=c.getParent$(); p != null ; p=p.getParent$()) {
if (p.isWindowOrJSApplet$()) {
return p;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'convertScreenLocationToParent$java_awt_Container$I$I',  function (parent, x, y) {
for (var p=parent; p != null ; p=p.getParent$()) {
if (p != null  && p.isWindowOrJSApplet$() ) {
var point=Clazz.new_($I$(3,1).c$$I$I,[x, y]);
C$.convertPointFromScreen$java_awt_Point$java_awt_Component(point, parent);
return point;
}}
throw Clazz.new_($I$(4,1).c$$S,["convertScreenLocationToParent: no window ancestor"]);
}, 1);

Clazz.newMeth(C$, 'convertPoint$java_awt_Component$java_awt_Point$java_awt_Component',  function (source, aPoint, destination) {
var p;
if (source == null  && destination == null  ) return aPoint;
if (source == null ) {
source=C$.getWindowAncestor$java_awt_Component(destination);
if (source == null ) throw Clazz.new_($I$(4,1).c$$S,["Source component not connected to component tree hierarchy"]);
}p=Clazz.new_($I$(3,1).c$$java_awt_Point,[aPoint]);
C$.convertPointToScreen$java_awt_Point$java_awt_Component(p, source);
if (destination == null ) {
destination=C$.getWindowAncestor$java_awt_Component(source);
if (destination == null ) throw Clazz.new_($I$(4,1).c$$S,["Destination component not connected to component tree hierarchy"]);
}C$.convertPointFromScreen$java_awt_Point$java_awt_Component(p, destination);
return p;
}, 1);

Clazz.newMeth(C$, 'convertPoint$java_awt_Component$I$I$java_awt_Component',  function (source, x, y, destination) {
var point=Clazz.new_($I$(3,1).c$$I$I,[x, y]);
return C$.convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(source, point, destination);
}, 1);

Clazz.newMeth(C$, 'convertRectangle$java_awt_Component$java_awt_Rectangle$java_awt_Component',  function (source, aRectangle, destination) {
var point=Clazz.new_($I$(3,1).c$$I$I,[aRectangle.x, aRectangle.y]);
point=C$.convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(source, point, destination);
return Clazz.new_($I$(2,1).c$$I$I$I$I,[point.x, point.y, aRectangle.width, aRectangle.height]);
}, 1);

Clazz.newMeth(C$, 'getAncestorOfClass$Class$java_awt_Component',  function (c, comp) {
if (comp == null  || c == null  ) return null;
var parent=comp.getParent$();
while (parent != null  && !(c.isInstance$O(parent)) )parent=parent.getParent$();

return parent;
}, 1);

Clazz.newMeth(C$, 'getAncestorNamed$S$java_awt_Component',  function (name, comp) {
if (comp == null  || name == null  ) return null;
var parent=comp.getParent$();
while (parent != null  && !(name.equals$O(parent.getName$())) )parent=parent.getParent$();

return parent;
}, 1);

Clazz.newMeth(C$, 'getDeepestComponentAt$java_awt_Component$I$I',  function (parent, x, y) {
if (!parent.contains$I$I(x, y)) {
return null;
}if (Clazz.instanceOf(parent, "java.awt.Container")) {
var components=$I$(5).秘getChildArray$java_awt_Container(parent);
for (var i=0, n=(parent).getComponentCount$(); i < n; i++) {
var comp=components[i];
if (comp != null  && comp.isVisible$() ) {
var loc=comp.getLocation$();
if (Clazz.instanceOf(comp, "java.awt.Container")) {
comp=C$.getDeepestComponentAt$java_awt_Component$I$I(comp, x - loc.x, y - loc.y);
} else {
comp=comp.getComponentAt$I$I(x - loc.x, y - loc.y);
}if (comp != null  && comp.isVisible$() ) {
return comp;
}}}
}return parent;
}, 1);

Clazz.newMeth(C$, 'convertMouseEvent$java_awt_Component$java_awt_event_MouseEvent$java_awt_Component',  function (source, sourceEvent, destination) {
var p=C$.convertPoint$java_awt_Component$java_awt_Point$java_awt_Component(source, Clazz.new_([sourceEvent.getX$(), sourceEvent.getY$()],$I$(3,1).c$$I$I), destination);
var newSource;
if (destination != null ) newSource=destination;
 else newSource=source;
var newEvent;
if (Clazz.instanceOf(sourceEvent, "java.awt.event.MouseWheelEvent")) {
var sourceWheelEvent=sourceEvent;
newEvent=Clazz.new_([newSource, sourceWheelEvent.getID$(), sourceWheelEvent.getWhen$(), sourceWheelEvent.getModifiers$(), p.x, p.y, sourceWheelEvent.getXOnScreen$(), sourceWheelEvent.getYOnScreen$(), sourceWheelEvent.getClickCount$(), sourceWheelEvent.isPopupTrigger$(), sourceWheelEvent.getScrollType$(), sourceWheelEvent.getScrollAmount$(), sourceWheelEvent.getWheelRotation$()],$I$(6,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I);
} else if (Clazz.instanceOf(sourceEvent, "javax.swing.event.MenuDragMouseEvent")) {
var sourceMenuDragEvent=sourceEvent;
newEvent=Clazz.new_([newSource, sourceMenuDragEvent.getID$(), sourceMenuDragEvent.getWhen$(), sourceMenuDragEvent.getModifiers$(), p.x, p.y, sourceMenuDragEvent.getXOnScreen$(), sourceMenuDragEvent.getYOnScreen$(), sourceMenuDragEvent.getClickCount$(), sourceMenuDragEvent.isPopupTrigger$(), sourceMenuDragEvent.getPath$(), sourceMenuDragEvent.getMenuSelectionManager$()],$I$(7,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$javax_swing_MenuElementA$javax_swing_MenuSelectionManager);
} else {
newEvent=Clazz.new_([newSource, sourceEvent.getID$(), sourceEvent.getWhen$(), sourceEvent.getModifiers$(), p.x, p.y, sourceEvent.getXOnScreen$(), sourceEvent.getYOnScreen$(), sourceEvent.getClickCount$(), sourceEvent.isPopupTrigger$(), 0],$I$(8,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I);
}return newEvent;
}, 1);

Clazz.newMeth(C$, 'convertPointToScreen$java_awt_Point$java_awt_Component',  function (p, c) {
var x;
var y;
var done=false;
do {
if ((done=c.isWindowOrJSApplet$())) {
try {
var pp=c.getLocationOnScreen$();
x=pp.x;
y=pp.y;
} catch (icse) {
if (Clazz.exceptionOf(icse,"java.awt.IllegalComponentStateException")){
x=c.getX$();
y=c.getY$();
} else {
throw icse;
}
}
} else {
x=c.getX$();
y=c.getY$();
}p.x+=x;
p.y+=y;
c=c.getParent$();
} while (c != null  && !done );
}, 1);

Clazz.newMeth(C$, 'convertPointFromScreen$java_awt_Point$java_awt_Component',  function (p, c) {
var x;
var y;
do {
if (c.isWindowOrJSApplet$()) {
try {
var pp=c.getLocationOnScreen$();
x=pp.x;
y=pp.y;
} catch (icse) {
if (Clazz.exceptionOf(icse,"java.awt.IllegalComponentStateException")){
x=c.getX$();
y=c.getY$();
} else {
throw icse;
}
}
} else {
x=c.getX$();
y=c.getY$();
}p.x-=x;
p.y-=y;
if (c.isWindowOrJSApplet$()) break;
c=c.getParent$();
} while (c != null );
}, 1);

Clazz.newMeth(C$, 'windowForComponent$java_awt_Component',  function (c) {
return C$.getWindowAncestor$java_awt_Component(c);
}, 1);

Clazz.newMeth(C$, 'isDescendingFrom$java_awt_Component$java_awt_Component',  function (a, b) {
if (a === b ) return true;
for (var p=a.getParent$(); p != null ; p=p.getParent$()) if (p === b ) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'computeIntersection$I$I$I$I$java_awt_Rectangle',  function (x, y, width, height, dest) {
var x1=(x > dest.x) ? x : dest.x;
var x2=((x + width) < (dest.x + dest.width)) ? (x + width) : (dest.x + dest.width);
var y1=(y > dest.y) ? y : dest.y;
var y2=((y + height) < (dest.y + dest.height) ? (y + height) : (dest.y + dest.height));
dest.x=x1;
dest.y=y1;
dest.width=x2 - x1;
dest.height=y2 - y1;
if (dest.width < 0 || dest.height < 0 ) {
dest.x=dest.y=dest.width=dest.height=0;
}return dest;
}, 1);

Clazz.newMeth(C$, 'computeUnion$I$I$I$I$java_awt_Rectangle',  function (x, y, width, height, dest) {
var x1=(x < dest.x) ? x : dest.x;
var x2=((x + width) > (dest.x + dest.width)) ? (x + width) : (dest.x + dest.width);
var y1=(y < dest.y) ? y : dest.y;
var y2=((y + height) > (dest.y + dest.height)) ? (y + height) : (dest.y + dest.height);
dest.x=x1;
dest.y=y1;
dest.width=(x2 - x1);
dest.height=(y2 - y1);
return dest;
}, 1);

Clazz.newMeth(C$, 'computeDifference$java_awt_Rectangle$java_awt_Rectangle',  function (rectA, rectB) {
if (rectB == null  || !rectA.intersects$java_awt_Rectangle(rectB)  || C$.isRectangleContainingRectangle$java_awt_Rectangle$java_awt_Rectangle(rectB, rectA) ) {
return Clazz.array($I$(2), [0]);
}var t=Clazz.new_($I$(2,1));
var a=null;
var b=null;
var c=null;
var d=null;
var result;
var rectCount=0;
if (C$.isRectangleContainingRectangle$java_awt_Rectangle$java_awt_Rectangle(rectA, rectB)) {
t.x=rectA.x;
t.y=rectA.y;
t.width=rectB.x - rectA.x;
t.height=rectA.height;
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.x=rectB.x;
t.y=rectA.y;
t.width=rectB.width;
t.height=rectB.y - rectA.y;
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.x=rectB.x;
t.y=rectB.y + rectB.height;
t.width=rectB.width;
t.height=rectA.y + rectA.height - (rectB.y + rectB.height);
if (t.width > 0 && t.height > 0 ) {
c=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.x=rectB.x + rectB.width;
t.y=rectA.y;
t.width=rectA.x + rectA.width - (rectB.x + rectB.width);
t.height=rectA.height;
if (t.width > 0 && t.height > 0 ) {
d=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}} else {
if (rectB.x <= rectA.x && rectB.y <= rectA.y ) {
if ((rectB.x + rectB.width) > (rectA.x + rectA.width)) {
t.x=rectA.x;
t.y=rectB.y + rectB.height;
t.width=rectA.width;
t.height=rectA.y + rectA.height - (rectB.y + rectB.height);
if (t.width > 0 && t.height > 0 ) {
a=t;
++rectCount;
}} else if ((rectB.y + rectB.height) > (rectA.y + rectA.height)) {
t.setBounds$I$I$I$I((rectB.x + rectB.width), rectA.y, (rectA.x + rectA.width) - (rectB.x + rectB.width), rectA.height);
if (t.width > 0 && t.height > 0 ) {
a=t;
++rectCount;
}} else {
t.setBounds$I$I$I$I((rectB.x + rectB.width), rectA.y, (rectA.x + rectA.width) - (rectB.x + rectB.width), (rectB.y + rectB.height) - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.setBounds$I$I$I$I(rectA.x, (rectB.y + rectB.height), rectA.width, (rectA.y + rectA.height) - (rectB.y + rectB.height));
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}}} else if (rectB.x <= rectA.x && (rectB.y + rectB.height) >= (rectA.y + rectA.height) ) {
if ((rectB.x + rectB.width) > (rectA.x + rectA.width)) {
t.setBounds$I$I$I$I(rectA.x, rectA.y, rectA.width, rectB.y - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=t;
++rectCount;
}} else {
t.setBounds$I$I$I$I(rectA.x, rectA.y, rectA.width, rectB.y - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I((rectB.x + rectB.width), rectB.y, (rectA.x + rectA.width) - (rectB.x + rectB.width), (rectA.y + rectA.height) - rectB.y);
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}}} else if (rectB.x <= rectA.x) {
if ((rectB.x + rectB.width) >= (rectA.x + rectA.width)) {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectA.width, rectB.y - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectA.x, (rectB.y + rectB.height), rectA.width, (rectA.y + rectA.height) - (rectB.y + rectB.height));
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}} else {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectA.width, rectB.y - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I((rectB.x + rectB.width), rectB.y, (rectA.x + rectA.width) - (rectB.x + rectB.width), rectB.height);
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectA.x, (rectB.y + rectB.height), rectA.width, (rectA.y + rectA.height) - (rectB.y + rectB.height));
if (t.width > 0 && t.height > 0 ) {
c=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}}} else if (rectB.x <= (rectA.x + rectA.width) && (rectB.x + rectB.width) > (rectA.x + rectA.width) ) {
if (rectB.y <= rectA.y && (rectB.y + rectB.height) > (rectA.y + rectA.height) ) {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectB.x - rectA.x, rectA.height);
if (t.width > 0 && t.height > 0 ) {
a=t;
++rectCount;
}} else if (rectB.y <= rectA.y) {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectB.x - rectA.x, (rectB.y + rectB.height) - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectA.x, (rectB.y + rectB.height), rectA.width, (rectA.y + rectA.height) - (rectB.y + rectB.height));
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}} else if ((rectB.y + rectB.height) > (rectA.y + rectA.height)) {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectA.width, rectB.y - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectA.x, rectB.y, rectB.x - rectA.x, (rectA.y + rectA.height) - rectB.y);
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}} else {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectA.width, rectB.y - rectA.y);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectA.x, rectB.y, rectB.x - rectA.x, rectB.height);
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectA.x, (rectB.y + rectB.height), rectA.width, (rectA.y + rectA.height) - (rectB.y + rectB.height));
if (t.width > 0 && t.height > 0 ) {
c=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}}} else if (rectB.x >= rectA.x && (rectB.x + rectB.width) <= (rectA.x + rectA.width) ) {
if (rectB.y <= rectA.y && (rectB.y + rectB.height) > (rectA.y + rectA.height) ) {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectB.x - rectA.x, rectA.height);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I((rectB.x + rectB.width), rectA.y, (rectA.x + rectA.width) - (rectB.x + rectB.width), rectA.height);
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}} else if (rectB.y <= rectA.y) {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectB.x - rectA.x, rectA.height);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectB.x, (rectB.y + rectB.height), rectB.width, (rectA.y + rectA.height) - (rectB.y + rectB.height));
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I((rectB.x + rectB.width), rectA.y, (rectA.x + rectA.width) - (rectB.x + rectB.width), rectA.height);
if (t.width > 0 && t.height > 0 ) {
c=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}} else {
t.reshape$I$I$I$I(rectA.x, rectA.y, rectB.x - rectA.x, rectA.height);
if (t.width > 0 && t.height > 0 ) {
a=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I(rectB.x, rectA.y, rectB.width, rectB.y - rectA.y);
if (t.width > 0 && t.height > 0 ) {
b=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}t.reshape$I$I$I$I((rectB.x + rectB.width), rectA.y, (rectA.x + rectA.width) - (rectB.x + rectB.width), rectA.height);
if (t.width > 0 && t.height > 0 ) {
c=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[t]);
++rectCount;
}}}}result=Clazz.array($I$(2), [rectCount]);
rectCount=0;
if (a != null ) result[rectCount++]=a;
if (b != null ) result[rectCount++]=b;
if (c != null ) result[rectCount++]=c;
if (d != null ) result[rectCount++]=d;
return result;
}, 1);

Clazz.newMeth(C$, 'isLeftMouseButton$java_awt_event_MouseEvent',  function (anEvent) {
return ((anEvent.getModifiers$() & 16) != 0);
}, 1);

Clazz.newMeth(C$, 'isMiddleMouseButton$java_awt_event_MouseEvent',  function (anEvent) {
return ((anEvent.getModifiers$() & 8) == 8);
}, 1);

Clazz.newMeth(C$, 'isRightMouseButton$java_awt_event_MouseEvent',  function (anEvent) {
return ((anEvent.getModifiers$() & 4) == 4);
}, 1);

Clazz.newMeth(C$, 'computeStringWidth$java_awt_FontMetrics$S',  function (fm, str) {
return $I$(9).stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(null, fm, str);
}, 1);

Clazz.newMeth(C$, 'layoutCompoundLabel$javax_swing_JComponent$java_awt_FontMetrics$S$javax_swing_Icon$I$I$I$I$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$I',  function (c, fm, text, icon, verticalAlignment, horizontalAlignment, verticalTextPosition, horizontalTextPosition, viewR, iconR, textR, textIconGap) {
var ui=c.秘getUI$();
var ltr=(c == null  || c.getComponentOrientation$().isLeftToRight$() );
var hAlign;
var hTextPos;
if (ui.menuAnchorNode == null ) {
switch (horizontalAlignment) {
case 10:
hAlign=(ltr) ? 2 : 4;
break;
case 11:
hAlign=(ltr) ? 4 : 2;
break;
default:
hAlign=horizontalAlignment;
break;
}
switch (horizontalTextPosition) {
case 10:
hTextPos=(ltr) ? 2 : 4;
break;
case 11:
hTextPos=(ltr) ? 4 : 2;
break;
default:
hTextPos=horizontalTextPosition;
break;
}
} else {
hAlign=hTextPos=(ltr ? 2 : 4);
}return C$.layoutCompoundLabelImpl$javax_swing_JComponent$swingjs_plaf_JSComponentUI$java_awt_FontMetrics$S$javax_swing_Icon$I$I$I$I$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$I(c, ui, fm, text, icon, verticalAlignment, hAlign, verticalTextPosition, hTextPos, viewR, iconR, textR, textIconGap);
}, 1);

Clazz.newMeth(C$, 'layoutCompoundLabel$java_awt_FontMetrics$S$javax_swing_Icon$I$I$I$I$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$I',  function (fm, text, icon, verticalAlignment, horizontalAlignment, verticalTextPosition, horizontalTextPosition, viewR, iconR, textR, textIconGap) {
return C$.layoutCompoundLabelImpl$javax_swing_JComponent$swingjs_plaf_JSComponentUI$java_awt_FontMetrics$S$javax_swing_Icon$I$I$I$I$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$I(null, null, fm, text, icon, verticalAlignment, horizontalAlignment, verticalTextPosition, horizontalTextPosition, viewR, iconR, textR, textIconGap);
}, 1);

Clazz.newMeth(C$, 'layoutCompoundLabelImpl$javax_swing_JComponent$swingjs_plaf_JSComponentUI$java_awt_FontMetrics$S$javax_swing_Icon$I$I$I$I$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$I',  function (c, ui, fm, text, icon, verticalAlignment, horizontalAlignment, verticalTextPosition, horizontalTextPosition, viewR, iconR, textR, textIconGap) {
if (icon != null ) {
iconR.width=icon.getIconWidth$();
iconR.height=icon.getIconHeight$();
}var textIsEmpty=(text == null ) || text.equals$O("") ;
var lsb=0;
var rsb=0;
var gap;
var v=null;
if (textIsEmpty) {
textR.width=textR.height=0;
text="";
gap=0;
} else {
var availTextWidth;
gap=(iconR.width == 0) ? 0 : textIconGap;
if (horizontalTextPosition == 0) {
availTextWidth=viewR.width;
} else {
availTextWidth=viewR.width - (iconR.width + gap);
}v=(c != null  ? c.getClientProperty$O("html") : null);
if (v != null ) {
textR.width=Math.min(availTextWidth, (v.getPreferredSpan$I(0)|0));
textR.height=(v.getPreferredSpan$I(1)|0);
} else {
if (ui.textNode == null ) {
textR.width=fm.stringWidth$S(text);
textR.height=fm.getHeight$();
} else if (text.length$() == 0) {
textR.width=1;
textR.height=fm.getHeight$();
} else {
var t=(text.indexOf$S("<html>") == 0 ? text : text.replace$C$C(" ", "\u00a0"));
if (t != text && (ui.textNode.innerHTML != t ||false) ) $I$(10).setAttr(ui.textNode, "innerHTML", t);
var d=ui.getHTMLSize$swingjs_api_js_DOMNode(ui.textNode);
textR.width=(d.width == 0 ? 1 : d.width);
textR.height=(d.height == 0 ? fm.getHeight$() : d.height);
}if (textR.width > availTextWidth) {
text=$I$(9).clipString$javax_swing_JComponent$java_awt_FontMetrics$S$I(c, fm, text, availTextWidth);
textR.width=$I$(9).stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(c, fm, text);
}}}if (verticalTextPosition == 1) {
if (horizontalTextPosition != 0) {
textR.y=0;
} else {
textR.y=-(textR.height + gap);
}} else if (verticalTextPosition == 0) {
textR.y=((iconR.height/2|0)) - ((textR.height/2|0));
} else {
if (horizontalTextPosition != 0) {
textR.y=iconR.height - textR.height;
} else {
textR.y=(iconR.height + gap);
}}if (horizontalTextPosition == 2) {
textR.x=-(textR.width + gap);
} else if (horizontalTextPosition == 0) {
textR.x=((iconR.width/2|0)) - ((textR.width/2|0));
} else {
textR.x=(iconR.width + gap);
}var labelR_x=Math.min(iconR.x, textR.x);
var labelR_width=Math.max(iconR.x + iconR.width, textR.x + textR.width) - labelR_x;
var labelR_y=Math.min(iconR.y, textR.y);
var labelR_height=Math.max(iconR.y + iconR.height, textR.y + textR.height) - labelR_y;
var dx;
var dy;
if (verticalAlignment == 1) {
dy=viewR.y - labelR_y;
} else if (verticalAlignment == 0) {
dy=(viewR.y + ((viewR.height/2|0))) - (labelR_y + ((labelR_height/2|0)));
} else {
dy=(viewR.y + viewR.height) - (labelR_y + labelR_height);
}if (horizontalAlignment == 2) {
dx=viewR.x - labelR_x;
} else if (horizontalAlignment == 4) {
dx=(viewR.x + viewR.width) - (labelR_x + labelR_width);
} else {
dx=(viewR.x + ((viewR.width/2|0))) - (labelR_x + ((labelR_width/2|0)));
}textR.x+=dx;
textR.y+=dy;
iconR.x+=dx;
iconR.y+=dy;
if (viewR.width == 32767) {
viewR.width=labelR_width;
viewR.height=labelR_height;
}return text;
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I',  function (g, c, p, x, y, w, h) {
C$.getCellRendererPane$java_awt_Component$java_awt_Container(c, p).paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, c, p, x, y, w, h, false);
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$java_awt_Rectangle',  function (g, c, p, r) {
C$.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I(g, c, p, r.x, r.y, r.width, r.height);
}, 1);

Clazz.newMeth(C$, 'getCellRendererPane$java_awt_Component$java_awt_Container',  function (c, p) {
var shell=c.getParent$();
if (Clazz.instanceOf(shell, "javax.swing.CellRendererPane")) {
if (shell.getParent$() !== p ) {
p.add$java_awt_Component(shell);
}} else {
shell=Clazz.new_($I$(11,1));
shell.add$java_awt_Component(c);
p.add$java_awt_Component(shell);
}return shell;
}, 1);

Clazz.newMeth(C$, 'updateComponentTreeUI$java_awt_Component',  function (c) {
C$.updateComponentTreeUI0$java_awt_Component(c);
c.invalidate$();
c.validate$();
(c).秘repaint$();
}, 1);

Clazz.newMeth(C$, 'updateComponentTreeUI0$java_awt_Component',  function (c) {
if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
var jc=c;
jc.updateUI$();
var jpm=jc.getComponentPopupMenu$();
if (jpm != null ) {
C$.updateComponentTreeUI$java_awt_Component(jpm);
}}var children=null;
var n=0;
if (Clazz.instanceOf(c, "javax.swing.JMenu")) {
children=(c).getMenuArray$();
n=(c).getMenuComponentCount$();
} else if (Clazz.instanceOf(c, "java.awt.Container")) {
children=$I$(5).秘getChildArray$java_awt_Container(c);
n=(c).getComponentCount$();
}for (var i=0; i < n; i++) {
C$.updateComponentTreeUI0$java_awt_Component(children[i]);
}
}, 1);

Clazz.newMeth(C$, 'invokeLater$Runnable',  function (doRun) {
$I$(12).invokeLater$Runnable(doRun);
}, 1);

Clazz.newMeth(C$, 'invokeAndWait$Runnable',  function (doRun) {
$I$(12).invokeAndWait$Runnable(doRun);
}, 1);

Clazz.newMeth(C$, 'isEventDispatchThread$',  function () {
return $I$(12).isDispatchThread$();
}, 1);

Clazz.newMeth(C$, 'findFocusOwner$java_awt_Component',  function (c) {
var focusOwner=$I$(13).getCurrentKeyboardFocusManager$().getFocusOwner$();
for (var temp=focusOwner; temp != null ; temp=(temp.isWindowOrJSApplet$() ? null : temp.getParent$())) {
if (temp === c ) {
return focusOwner;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getRootPane$java_awt_Component',  function (c) {
if (Clazz.instanceOf(c, "javax.swing.RootPaneContainer")) {
return (c).getRootPane$();
}for (; c != null ; c=c.getParent$()) {
if (Clazz.instanceOf(c, "javax.swing.JRootPane")) {
return c;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getRoot$java_awt_Component',  function (c) {
for (var p=c; p != null ; p=p.getParent$()) {
if (p.isWindowOrJSApplet$()) {
return p;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'isValidKeyEventForKeyBindings$java_awt_event_KeyEvent',  function (e) {
if (e.getID$() == 400) {
var mod=e.getModifiers$();
if (((mod & 8) != 0) && ((mod & 2) == 0) ) {
return false;
}} else {
switch (e.getKeyCode$()) {
case 16:
case 17:
case 18:
case 65406:
case 157:
return false;
}
}return true;
}, 1);

Clazz.newMeth(C$, 'notifyAction$javax_swing_Action$javax_swing_KeyStroke$java_awt_event_KeyEvent$O$I',  function (action, ks, event, sender, modifiers) {
if (action == null ) {
return false;
}if (Clazz.instanceOf(action, "sun.swing.UIAction")) {
if (!(action).isEnabled$O(sender)) {
return false;
}} else if (!action.isEnabled$()) {
return false;
}var commandO;
var stayNull;
commandO=action.getValue$S("ActionCommandKey");
if (commandO == null  && $I$(14).isActionStandin$javax_swing_Action(action) ) {
stayNull=true;
} else {
stayNull=false;
}var command;
if (commandO != null ) {
command=commandO.toString();
} else if (!stayNull && event.getKeyChar$() != "\uffff" ) {
command=String.valueOf$C(event.getKeyChar$());
} else {
command=null;
}var ae=Clazz.new_([sender, 1001, command, event.getWhen$(), modifiers],$I$(15,1).c$$O$I$S$J$I);
action.actionPerformed$java_awt_event_ActionEvent(ae);

if (ae.bdata.doPropagate) event.bdata.doPropagate = true;
return true;
}, 1);

Clazz.newMeth(C$, 'replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap',  function (component, type, uiInputMap) {
var map=component.getInputMap$I$Z(type, (uiInputMap != null ));
while (map != null ){
var parent=map.getParent$();
if (parent == null  || (Clazz.instanceOf(parent, "javax.swing.plaf.UIResource")) ) {
map.setParent$javax_swing_InputMap(uiInputMap);
return;
}map=parent;
}
}, 1);

Clazz.newMeth(C$, 'replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap',  function (component, uiActionMap) {
var map=component.getActionMap$Z((uiActionMap != null ));
while (map != null ){
var parent=map.getParent$();
if (parent == null  || (Clazz.instanceOf(parent, "javax.swing.plaf.UIResource")) && (!(Clazz.instanceOf(uiActionMap, "javax.swing.plaf.UIResource")) || (uiActionMap._key == parent._key ||false) )  ) {
map.setParent$javax_swing_ActionMap(uiActionMap);
return;
}map=parent;
}
}, 1);

Clazz.newMeth(C$, 'getUIInputMap$javax_swing_JComponent$I',  function (component, condition) {
var map=component.getInputMap$I$Z(condition, false);
while (map != null ){
var parent=map.getParent$();
if (Clazz.instanceOf(parent, "javax.swing.plaf.UIResource")) {
return parent;
}map=parent;
}
return null;
}, 1);

Clazz.newMeth(C$, 'getUIActionMap$javax_swing_JComponent',  function (component) {
var map=component.getActionMap$Z(false);
while (map != null ){
var parent=map.getParent$();
if (Clazz.instanceOf(parent, "javax.swing.plaf.UIResource")) {
return parent;
}map=parent;
}
return null;
}, 1);

Clazz.newMeth(C$, 'getSharedOwnerFrame$',  function () {
var p=$I$(16).getAppletViewer$();
var f=p.sharedOwnerFrame;
return (f == null  ? (p.sharedOwnerFrame=Clazz.new_($I$(17,1))) : f);
}, 1);

Clazz.newMeth(C$, 'getSharedOwnerFrameShutdownListener$',  function () {
var sharedOwnerFrame=C$.getSharedOwnerFrame$();
return sharedOwnerFrame;
}, 1);

Clazz.newMeth(C$, 'appContextGet$O',  function (key) {
return $I$(18).getAppContext$().get$O(key);
}, 1);

Clazz.newMeth(C$, 'appContextPut$O$O',  function (key, value) {
$I$(18).getAppContext$().put$O$O(key, value);
}, 1);

Clazz.newMeth(C$, 'appContextRemove$O',  function (key) {
$I$(18).getAppContext$().remove$O(key);
}, 1);

Clazz.newMeth(C$, 'loadSystemClass$S',  function (className) {
return Clazz.forName(className, true, $I$(19).currentThread$().getContextClassLoader$());
}, 1);

Clazz.newMeth(C$, 'isLeftToRight$java_awt_Component',  function (c) {
return c.getComponentOrientation$().isLeftToRight$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
throw Clazz.new_($I$(4,1).c$$S,["SwingUtilities is just a container for static methods"]);
}, 1);

Clazz.newMeth(C$, 'doesIconReferenceImage$javax_swing_Icon$java_awt_Image',  function (icon, image) {
var iconImage=(icon != null  && (Clazz.instanceOf(icon, "javax.swing.ImageIcon")) ) ? (icon).getImage$() : null;
return (iconImage === image );
}, 1);

Clazz.newMeth(C$, 'findDisplayedMnemonicIndex$S$I',  function (text, mnemonic) {
if (text == null  || mnemonic == 0  ) {
return -1;
}var uc=Character.toUpperCase$C(String.fromCharCode(mnemonic));
var lc=Character.toLowerCase$C(String.fromCharCode(mnemonic));
var uci=text.indexOf$I(uc);
var lci=text.indexOf$I(lc);
if (uci == -1) {
return lci;
} else if (lci == -1) {
return uci;
} else {
return (lci < uci) ? lci : uci;
}}, 1);

Clazz.newMeth(C$, 'calculateInnerArea$javax_swing_JComponent$java_awt_Rectangle',  function (c, r) {
if (c == null ) {
return null;
}var rect=r;
var insets=c.getInsets$();
if (rect == null ) {
rect=Clazz.new_($I$(2,1));
}rect.x=insets.left;
rect.y=insets.top;
rect.width=c.getWidth$() - insets.left - insets.right ;
rect.height=c.getHeight$() - insets.top - insets.bottom ;
return rect;
}, 1);

Clazz.newMeth(C$, 'updateRendererOrEditorUI$O',  function (rendererOrEditor) {
if (rendererOrEditor == null ) {
return;
}var component=null;
if (Clazz.instanceOf(rendererOrEditor, "java.awt.Component")) {
component=rendererOrEditor;
}if (Clazz.instanceOf(rendererOrEditor, "javax.swing.DefaultCellEditor")) {
component=(rendererOrEditor).getComponent$();
}if (component != null ) {
C$.updateComponentTreeUI$java_awt_Component(component);
}}, 1);

Clazz.newMeth(C$, 'getUnwrappedParent$java_awt_Component',  function (component) {
var parent=component.getParent$();
while (Clazz.instanceOf(parent, "javax.swing.JLayer")){
parent=parent.getParent$();
}
return parent;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SwingUtilities, "SharedOwnerFrame", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JFrame', 'java.awt.event.WindowListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$O$O$O$O.apply(this,[null, null, null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addNotify$',  function () {
this.updateUI$();
this.getOrCreatePeer$();
C$.superclazz.prototype.addNotify$.apply(this, []);
this.installListeners$();
});

Clazz.newMeth(C$, 'installListeners$',  function () {
var windows=this.getOwnedWindows$();
for (var ind=0; ind < windows.length; ind++) {
var window=windows[ind];
if (window != null ) {
window.removeWindowListener$java_awt_event_WindowListener(this);
window.addWindowListener$java_awt_event_WindowListener(this);
}}
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent',  function (e) {
var windows=this.getOwnedWindows$();
for (var ind=0; ind < windows.length; ind++) {
var window=windows[ind];
if (window != null ) {
if (window.isDisplayable$()) {
return;
}window.removeWindowListener$java_awt_event_WindowListener(this);
}this.dispose$();
}
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent',  function (e) {
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent',  function (e) {
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent',  function (e) {
});

Clazz.newMeth(C$, 'show$',  function () {
});

Clazz.newMeth(C$, 'dispose$',  function () {
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

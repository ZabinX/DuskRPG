(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.awt.Rectangle','javax.swing.RepaintManager','java.awt.Insets','java.awt.Point','java.awt.Dimension',['javax.swing.JViewport','.ViewListener'],'javax.swing.ViewportLayout','javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent','javax.swing.JComponent','javax.swing.SwingUtilities','java.awt.JSComponent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JViewport", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', [['java.awt.JSComponent','java.awt.JSComponent.A2SComponentWrapper']]);
C$.$classes$=[['ViewListener',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isViewSizeSet=false;
this.lastPaintPosition=null;
this.backingStore=false;
this.backingStoreImage=null;
this.scrollUnderway=false;
this.viewListener=null;
this.changeEvent=null;
this.scrollMode=1;
this.秘myClip=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['isViewSizeSet','backingStore','scrollUnderway','repaintAll','inBlitPaint','hasHadValidView'],'I',['scrollMode'],'O',['lastPaintPosition','java.awt.Point','backingStoreImage','java.awt.Image','viewListener','java.awt.event.ComponentListener','changeEvent','javax.swing.event.ChangeEvent','秘myClip','java.awt.Rectangle']]
,['O',['EnableWindowBlit','java.lang.Object']]]

Clazz.newMeth(C$, '秘isWrapper$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setLayout$java_awt_LayoutManager(this.createLayoutManager$());
this.setOpaque$Z(true);
this.updateUI$();
this.setInheritsPopupMenu$Z(true);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "ViewportUI";
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (child, constraints, index) {
this.setView$java_awt_Component(child);
});

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (child) {
child.removeComponentListener$java_awt_event_ComponentListener(this.viewListener);
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [child]);
});

Clazz.newMeth(C$, 'scrollRectToVisible$java_awt_Rectangle',  function (contentRect) {
var view=this.getView$();
if (view == null ) {
return;
} else {
if (!view.isValid$()) {
p$1.validateView.apply(this, []);
}var dx=0;
var dy=0;
dx=p$1.positionAdjustment$I$I$I.apply(this, [this.getWidth$(), contentRect.width, contentRect.x]);
dy=p$1.positionAdjustment$I$I$I.apply(this, [this.getHeight$(), contentRect.height, contentRect.y]);
if (dx != 0 || dy != 0 ) {
var viewPosition=this.getViewPosition$();
var viewSize=view.getSize$();
var startX=viewPosition.x;
var startY=viewPosition.y;
var extent=this.getExtentSize$();
viewPosition.x-=dx;
viewPosition.y-=dy;
if (view.isValid$()) {
if (this.getParent$().getComponentOrientation$().isLeftToRight$()) {
if (viewPosition.x + extent.width > viewSize.width) {
viewPosition.x=Math.max(0, viewSize.width - extent.width);
} else if (viewPosition.x < 0) {
viewPosition.x=0;
}} else {
if (extent.width > viewSize.width) {
viewPosition.x=viewSize.width - extent.width;
} else {
viewPosition.x=Math.max(0, Math.min(viewSize.width - extent.width, viewPosition.x));
}}if (viewPosition.y + extent.height > viewSize.height) {
viewPosition.y=Math.max(0, viewSize.height - extent.height);
} else if (viewPosition.y < 0) {
viewPosition.y=0;
}}if (viewPosition.x != startX || viewPosition.y != startY ) {
this.setViewPosition$java_awt_Point(viewPosition);
this.scrollUnderway=false;
}}}});

Clazz.newMeth(C$, 'validateView',  function () {
var validateRoot=null;
for (var c=this; c != null ; c=c.getParent$()) {
if ((Clazz.instanceOf(c, "javax.swing.CellRendererPane")) || !c.isLightweight$() ) {
return;
}if ((Clazz.instanceOf(c, "javax.swing.JComponent")) && ((c).isValidateRoot$()) ) {
validateRoot=c;
break;
}}
if (validateRoot == null ) {
return;
}var root=null;
for (var c=validateRoot; c != null ; c=c.getParent$()) {
if (!c.isLightweight$()) {
return;
}if (c.isWindowOrJSApplet$()) {
root=c;
break;
}}
if (root == null ) {
return;
}validateRoot.validate$();
var rm=$I$(2).currentManager$javax_swing_JComponent(this);
if (rm != null ) {
rm.removeInvalidComponent$javax_swing_JComponent(validateRoot);
}}, p$1);

Clazz.newMeth(C$, 'positionAdjustment$I$I$I',  function (parentWidth, childWidth, childAt) {
if (childAt >= 0 && childWidth + childAt <= parentWidth ) {
return 0;
}if (childAt <= 0 && childWidth + childAt >= parentWidth ) {
return 0;
}if (childAt > 0 && childWidth <= parentWidth ) {
return -childAt + parentWidth - childWidth;
}if (childAt >= 0 && childWidth >= parentWidth ) {
return -childAt;
}if (childAt <= 0 && childWidth <= parentWidth ) {
return -childAt;
}if (childAt < 0 && childWidth >= parentWidth ) {
return -childAt + parentWidth - childWidth;
}return 0;
}, p$1);

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border',  function (border) {
if (border != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JViewport.setBorder() not supported"]);
}});

Clazz.newMeth(C$, 'getInsets$',  function () {
return Clazz.new_($I$(3,1).c$$I$I$I$I,[1, 1, 1, 1]);
});

Clazz.newMeth(C$, 'getInsets$java_awt_Insets',  function (insets) {
insets.left=insets.top=insets.right=insets.bottom=0;
return insets;
});

Clazz.newMeth(C$, 'getBackingStoreGraphics$java_awt_Graphics',  function (g) {
var bsg=this.backingStoreImage.getGraphics$();
bsg.setColor$java_awt_Color(g.getColor$());
bsg.setFont$java_awt_Font(g.getFont$());
bsg.setClip$java_awt_Shape(g.getClipBounds$());
return bsg;
}, p$1);

Clazz.newMeth(C$, 'paintViaBackingStore$java_awt_Graphics',  function (g) {
var bsg=p$1.getBackingStoreGraphics$java_awt_Graphics.apply(this, [g]);
try {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [bsg]);
(g).drawImageFromPixelsOrRaster$java_awt_Image$I$I$java_awt_image_ImageObserver(this.backingStoreImage, 0, 0, this);
} finally {
bsg.dispose$();
}
}, p$1);

Clazz.newMeth(C$, 'isOptimizedDrawingEnabled$',  function () {
return false;
});

Clazz.newMeth(C$, 'isPaintingOrigin$',  function () {
if (this.scrollMode == 2) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getViewLocation',  function () {
var view=this.getView$();
if (view != null ) {
return view.getLocation$();
} else {
return Clazz.new_($I$(4,1).c$$I$I,[0, 0]);
}}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
var width=this.getWidth$();
var height=this.getHeight$();
if ((width <= 0) || (height <= 0) ) {
return;
}this.秘myClip.width=width;
this.秘myClip.height=height;
if (this.inBlitPaint) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
return;
}if (this.repaintAll) {
this.repaintAll=false;
}C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
this.lastPaintPosition=p$1.getViewLocation.apply(this, []);
return;
});

Clazz.newMeth(C$, 'reshape$I$I$I$I',  function (x, y, w, h) {
var sizeChanged=(this.getWidth$() != w) || (this.getHeight$() != h) ;
if (sizeChanged) {
this.backingStoreImage=null;
}C$.superclazz.prototype.reshape$I$I$I$I.apply(this, [x, y, w, h]);
if (sizeChanged) {
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'setScrollMode$I',  function (mode) {
this.scrollMode=mode;
});

Clazz.newMeth(C$, 'getScrollMode$',  function () {
return this.scrollMode;
});

Clazz.newMeth(C$, 'isBackingStoreEnabled$',  function () {
return this.scrollMode == 2;
});

Clazz.newMeth(C$, 'setBackingStoreEnabled$Z',  function (enabled) {
});

Clazz.newMeth(C$, 'isBlitting',  function () {
return true;
}, p$1);

Clazz.newMeth(C$, 'getView$',  function () {
return (this.getComponentCount$() > 0) ? this.getComponent$I(0) : null;
});

Clazz.newMeth(C$, 'setView$java_awt_Component',  function (view) {
var n=this.getComponentCount$();
for (var i=n - 1; i >= 0; i--) {
this.remove$java_awt_Component(this.getComponent$I(i));
}
this.isViewSizeSet=false;
if (view != null ) {
this.addImplCont$java_awt_Component$O$I(view, null, -1);
this.viewListener=this.createViewListener$();
view.addComponentListener$java_awt_event_ComponentListener(this.viewListener);
}if (this.hasHadValidView) {
this.fireStateChanged$();
} else if (view != null ) {
this.hasHadValidView=true;
}this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'getViewSize$',  function () {
var view=this.getView$();
if (view == null ) {
return Clazz.new_($I$(5,1).c$$I$I,[0, 0]);
} else if (this.isViewSizeSet) {
return view.getSize$();
} else {
return view.getPreferredSize$();
}});

Clazz.newMeth(C$, 'setViewSize$java_awt_Dimension',  function (newSize) {
var view=this.getView$();
if (view != null ) {
var oldSize=view.getSize$();
if (!newSize.equals$O(oldSize)) {
this.scrollUnderway=false;
view.setSize$java_awt_Dimension(newSize);
this.isViewSizeSet=true;
this.fireStateChanged$();
}}});

Clazz.newMeth(C$, 'getViewPosition$',  function () {
var view=this.getView$();
if (view != null ) {
var p=view.getLocation$();
p.x=-p.x;
p.y=-p.y;
return p;
} else {
return Clazz.new_($I$(4,1).c$$I$I,[0, 0]);
}});

Clazz.newMeth(C$, 'setViewPosition$java_awt_Point',  function (p) {
var view=this.getView$();
if (view == null ) {
return;
}var oldX;
var oldY;
var x=p.x;
var y=p.y;
if (Clazz.instanceOf(view, "javax.swing.JComponent")) {
var c=view;
oldX=c.getX$();
oldY=c.getY$();
} else {
var r=view.getBounds$();
oldX=r.x;
oldY=r.y;
}var newX=-x;
var newY=-y;
if ((oldX != newX) || (oldY != newY) ) {
view.setLocation$I$I(newX, newY);
this.repaintAll=false;
this.fireStateChanged$();
if (Clazz.instanceOf(view, "javax.swing.JTable")) {
view.repaint$();
}}});

Clazz.newMeth(C$, 'getViewRect$',  function () {
return Clazz.new_([this.getViewPosition$(), this.getExtentSize$()],$I$(1,1).c$$java_awt_Point$java_awt_Dimension);
});

Clazz.newMeth(C$, 'computeBlit$I$I$java_awt_Point$java_awt_Point$java_awt_Dimension$java_awt_Rectangle',  function (dx, dy, blitFrom, blitTo, blitSize, blitPaint) {
{
return  false;
}
});

Clazz.newMeth(C$, 'getExtentSize$',  function () {
return this.getSize$();
});

Clazz.newMeth(C$, 'toViewCoordinates$java_awt_Dimension',  function (size) {
return Clazz.new_($I$(5,1).c$$java_awt_Dimension,[size]);
});

Clazz.newMeth(C$, 'toViewCoordinates$java_awt_Point',  function (p) {
return Clazz.new_($I$(4,1).c$$java_awt_Point,[p]);
});

Clazz.newMeth(C$, 'setExtentSize$java_awt_Dimension',  function (newExtent) {
var oldExtent=this.getExtentSize$();
if (!newExtent.equals$O(oldExtent)) {
this.setSize$java_awt_Dimension(newExtent);
this.fireStateChanged$();
}});

Clazz.newMeth(C$, 'createViewListener$',  function () {
return Clazz.new_($I$(6,1),[this, null]);
});

Clazz.newMeth(C$, 'createLayoutManager$',  function () {
return $I$(7).SHARED_INSTANCE;
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(8),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(8),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(8),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(8),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) {
this.changeEvent=Clazz.new_($I$(9,1).c$$O,[this]);
}(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (tm, x, y, w, h) {
var parent=this.getParent$();
if (parent != null ) parent.repaint$J$I$I$I$I(tm, x + this.getX$(), y + this.getY$(), w, h);
 else C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [tm, x, y, w, h]);
});

Clazz.newMeth(C$, 'paramString$',  function () {
var isViewSizeSetString=(this.isViewSizeSet ? "true" : "false");
var lastPaintPositionString=(this.lastPaintPosition != null  ? this.lastPaintPosition.toString() : "");
var scrollUnderwayString=(this.scrollUnderway ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",isViewSizeSet=" + isViewSizeSetString + ",lastPaintPosition=" + lastPaintPositionString + ",scrollUnderway=" + scrollUnderwayString ;
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
C$.superclazz.prototype.firePropertyChange$S$O$O.apply(this, [propertyName, oldValue, newValue]);
});

Clazz.newMeth(C$, 'needsRepaintAfterBlit',  function () {
var heavyParent=this.getParent$();
while (heavyParent != null  && heavyParent.isLightweight$() ){
heavyParent=heavyParent.getParent$();
}
if (heavyParent != null ) {
}return true;
}, p$1);

Clazz.newMeth(C$, 'flushViewDirtyRegion$java_awt_Graphics$java_awt_Rectangle',  function (g, dirty) {
var view=this.getView$();
if (dirty != null  && dirty.width > 0  && dirty.height > 0 ) {
dirty.x+=view.getX$();
dirty.y+=view.getY$();
var clip=g.getClipBounds$();
if (clip == null ) {
g.clipRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
}g.clipRect$I$I$I$I(dirty.x, dirty.y, dirty.width, dirty.height);
clip=g.getClipBounds$();
if (clip.width > 0 && clip.height > 0 ) {
p$1.paintView$java_awt_Graphics.apply(this, [g]);
}}}, p$1);

Clazz.newMeth(C$, 'windowBlitPaint$java_awt_Graphics',  function (g) {
var width=this.getWidth$();
var height=this.getHeight$();
if ((width == 0) || (height == 0) ) {
return false;
}var retValue;
if (this.lastPaintPosition == null  || this.lastPaintPosition.equals$O(p$1.getViewLocation.apply(this, [])) ) {
p$1.paintView$java_awt_Graphics.apply(this, [g]);
retValue=false;
} else {
p$1.paintView$java_awt_Graphics.apply(this, [g]);
retValue=false;
}this.lastPaintPosition=p$1.getViewLocation.apply(this, []);
return retValue;
}, p$1);

Clazz.newMeth(C$, 'paintView$java_awt_Graphics',  function (g) {
var view=this.getView$();
var clip=g.getClipBounds$();
if (view.getWidth$() >= this.getWidth$()) {
var x=view.getX$();
var y=view.getY$();
g.translate$I$I(x, y);
this.秘myClip.width=clip.width;
this.秘myClip.height=clip.height;
this.秘myClip.x=clip.x - x;
this.秘myClip.y=clip.y - y;
p$1.paintForceDoubleBuffered$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, view]);
} else {
this.秘myClip.x=clip.x;
this.秘myClip.y=clip.y;
try {
this.inBlitPaint=true;
p$1.paintForceDoubleBuffered$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, this]);
} finally {
this.inBlitPaint=false;
}
}}, p$1);

Clazz.newMeth(C$, 'paintForceDoubleBuffered$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
g.clipRect$I$I$I$I(this.秘myClip.x, this.秘myClip.y, this.秘myClip.width, this.秘myClip.height);
var rm=$I$(2).currentManager$javax_swing_JComponent(c);
rm.beginPaint$();
this.秘setFlag$I$Z(13, true);
try {
rm.paint$javax_swing_JComponent$javax_swing_JComponent$java_awt_Graphics$I$I$I$I(c, c, g, this.秘myClip.x, this.秘myClip.y, this.秘myClip.width, this.秘myClip.height);
} finally {
rm.endPaint$();
this.秘setFlag$I$Z(13, false);
}
}, p$1);

Clazz.newMeth(C$, 'canUseWindowBlitter',  function () {
if (!this.isShowing$() || (!(Clazz.instanceOf(this.getParent$(), "javax.swing.JComponent")) && !(Clazz.instanceOf(this.getView$(), "javax.swing.JComponent")) ) ) {
return false;
}if (this.isPainting$()) {
return false;
}var dirtyRegion=$I$(2).currentManager$javax_swing_JComponent(this).getDirtyRegion$javax_swing_JComponent(this.getParent$());
if (dirtyRegion != null  && dirtyRegion.width > 0  && dirtyRegion.height > 0 ) {
return false;
}var clip=Clazz.new_([0, 0, this.getWidth$(), this.getHeight$()],$I$(1,1).c$$I$I$I$I);
var oldClip=Clazz.new_($I$(1,1));
var tmp2=null;
var parent;
var lastParent=null;
var x;
var y;
var w;
var h;
for (parent=this; parent != null  && $I$(10).isLightweightComponent$java_awt_Component(parent) ; parent=parent.getParent$()) {
x=parent.getX$();
y=parent.getY$();
w=parent.getWidth$();
h=parent.getHeight$();
oldClip.setBounds$java_awt_Rectangle(clip);
$I$(11).computeIntersection$I$I$I$I$java_awt_Rectangle(0, 0, w, h, clip);
if (!clip.equals$O(oldClip)) return false;
if (lastParent != null  && Clazz.instanceOf(parent, "javax.swing.JComponent")  && !(parent).isOptimizedDrawingEnabled$() ) {
var comps=$I$(12).秘getChildArray$java_awt_Container(parent);
var index=0;
for (var i=parent.getComponentCount$() - 1; i >= 0; i--) {
if (comps[i] === lastParent ) {
index=i - 1;
break;
}}
while (index >= 0){
tmp2=comps[index].getBounds$java_awt_Rectangle(tmp2);
if (tmp2.intersects$java_awt_Rectangle(clip)) return false;
--index;
}
}clip.x+=x;
clip.y+=y;
lastParent=parent;
}
if (parent == null ) {
return false;
}return true;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.EnableWindowBlit="EnableWindowBlit";
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JViewport, "ViewListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.ComponentAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
this.b$['javax.swing.JViewport'].fireStateChanged$.apply(this.b$['javax.swing.JViewport'], []);
this.b$['javax.swing.JComponent'].revalidate$.apply(this.b$['javax.swing.JComponent'], []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.HashMap','java.awt.Rectangle','sun.awt.AppContext','javax.swing.SwingUtilities',['javax.swing.RepaintManager','.ProcessingRunnable'],'java.util.IdentityHashMap','javajs.util.Lst','java.awt.Toolkit','java.util.HashSet','javax.swing.JComponent','StringBuffer','Thread','swingjs.JSToolkit','sun.awt.SunToolkit','java.awt.event.InvocationEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RepaintManager", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ProcessingRunnable',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.volatileMap=Clazz.new_($I$(1,1).c$$I,[1]);
this.paintDepth=0;
this.tmp=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['painting'],'I',['paintDepth'],'O',['volatileMap','java.util.Map','+hwDirtyComponents','+dirtyComponents','+tmpDirtyComponents','invalidComponents','javajs.util.Lst','runnableList','java.util.List','repaintRoot','javax.swing.JComponent','paintThread','Thread','processingRunnable','javax.swing.RepaintManager.ProcessingRunnable','myComponent','java.awt.Component','tmp','java.awt.Rectangle']]
,['Z',['HANDLE_TOP_LEVEL_PAINT','volatileImageBufferEnabled'],'O',['repaintManagerKey','java.lang.Object']]]

Clazz.newMeth(C$, 'currentManager$java_awt_Component',  function (c) {
return C$.currentManager$java_awt_Component$sun_awt_AppContext(c, $I$(3).getAppContext$());
}, 1);

Clazz.newMeth(C$, 'currentManager$java_awt_Component$sun_awt_AppContext',  function (c, appContext) {
var rm=appContext.get$O(C$.repaintManagerKey);
if (rm == null ) {
rm=Clazz.new_(C$);
p$1.set$java_awt_Component.apply(rm, [c]);
appContext.put$O$O(C$.repaintManagerKey, rm);
}return rm;
}, 1);

Clazz.newMeth(C$, 'currentManager$javax_swing_JComponent',  function (c) {
return C$.currentManager$java_awt_Component(c);
}, 1);

Clazz.newMeth(C$, 'setCurrentManager$javax_swing_RepaintManager',  function (aRepaintManager) {
if (aRepaintManager != null ) {
$I$(4).appContextPut$O$O(C$.repaintManagerKey, aRepaintManager);
} else {
$I$(4).appContextRemove$O(C$.repaintManagerKey);
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.setMaps.apply(this, []);
this.processingRunnable=Clazz.new_($I$(5,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'set$java_awt_Component',  function (c) {
this.myComponent=c;
p$1.setMaps.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setMaps',  function () {
this.dirtyComponents=Clazz.new_($I$(6,1));
this.tmpDirtyComponents=Clazz.new_($I$(6,1));
this.hwDirtyComponents=Clazz.new_($I$(6,1));
}, p$1);

Clazz.newMeth(C$, 'addInvalidComponent$javax_swing_JComponent',  function (invalidComponent) {
var validateRoot=null;
for (var c=invalidComponent; c != null ; c=c.getParent$()) {
if ((Clazz.instanceOf(c, "javax.swing.CellRendererPane"))) {
return;
}if (p$1.isStandardJComponent$java_awt_Component.apply(this, [c]) && ((c).isValidateRoot$()) ) {
validateRoot=c;
break;
}}
if (validateRoot == null ) {
return;
}var root=null;
for (var c=validateRoot; c != null ; c=c.getParent$()) {
if (!c.isVisible$()) {
return;
}if (c.isWindowOrJSApplet$()) {
root=c;
break;
}}
if (root == null ) {
return;
}if (this.invalidComponents == null ) {
this.invalidComponents=Clazz.new_($I$(7,1));
} else {
var n=this.invalidComponents.size$();
for (var i=0; i < n; i++) {
if (validateRoot === this.invalidComponents.get$I(i) ) {
return;
}}
}this.invalidComponents.add$O(validateRoot);
p$1.scheduleProcessingRunnable$java_awt_Component.apply(this, [root]);
});

Clazz.newMeth(C$, 'isStandardJComponent$java_awt_Component',  function (c) {
return (Clazz.instanceOf(c, "javax.swing.JComponent") && !(Clazz.instanceOf(c, "java.awt.Window")) );
}, p$1);

Clazz.newMeth(C$, 'removeInvalidComponent$javax_swing_JComponent',  function (component) {
if (this.invalidComponents != null ) {
var index=this.invalidComponents.indexOf$O(component);
if (index != -1) {
this.invalidComponents.removeItemAt$I(index);
}}});

Clazz.newMeth(C$, 'addDirtyRegion0$java_awt_Container$I$I$I$I',  function (c, x, y, w, h) {
if (w <= 0 || h <= 0  || c == null   || c.getWidth$() <= 0  || c.getHeight$() <= 0 ) return;
if (p$1.extendDirtyRegion$java_awt_Component$I$I$I$I.apply(this, [c, x, y, w, h])) {
return;
}var root=null;
for (var p=c; p != null ; p=p.getParent$()) {
if (!p.isVisible$() || p.getPeer$() == null  ) {
return;
}if (p.isWindowOrJSApplet$()) {
if (Clazz.instanceOf(p, "java.awt.JSFrame") && ((p).getExtendedState$() & 1) == 1 ) {
return;
}root=p;
break;
}}
if (root == null ) return;
{
if (p$1.extendDirtyRegion$java_awt_Component$I$I$I$I.apply(this, [c, x, y, w, h])) {
return;
}this.dirtyComponents.put$O$O(c, Clazz.new_($I$(2,1).c$$I$I$I$I,[x, y, w, h]));
}p$1.scheduleProcessingRunnable$java_awt_Component.apply(this, [c]);
}, p$1);

Clazz.newMeth(C$, 'addDirtyRegion$javax_swing_JComponent$I$I$I$I',  function (c, x, y, w, h) {
p$1.addDirtyRegion0$java_awt_Container$I$I$I$I.apply(this, [c, x, y, w, h]);
});

Clazz.newMeth(C$, 'addDirtyRegion$java_awt_Window$I$I$I$I',  function (window, x, y, w, h) {
p$1.addDirtyRegion0$java_awt_Container$I$I$I$I.apply(this, [window, x, y, w, h]);
});

Clazz.newMeth(C$, 'addDirtyRegion$java_applet_JSApplet$I$I$I$I',  function (applet, x, y, w, h) {
p$1.addDirtyRegion0$java_awt_Container$I$I$I$I.apply(this, [applet, x, y, w, h]);
});

Clazz.newMeth(C$, 'addDirtyRegion$java_applet_Applet$I$I$I$I',  function (applet, x, y, w, h) {
p$1.addDirtyRegion0$java_awt_Container$I$I$I$I.apply(this, [applet, x, y, w, h]);
});

Clazz.newMeth(C$, 'scheduleHeavyWeightPaints$',  function () {
var hws;
{
if (this.hwDirtyComponents.size$() == 0) {
return;
}hws=this.hwDirtyComponents;
this.hwDirtyComponents=Clazz.new_($I$(6,1));
}for (var hw, $hw = hws.keySet$().iterator$(); $hw.hasNext$()&&((hw=($hw.next$())),1);) {
var dirty=hws.get$O(hw);
if (hw.isWindowOrJSApplet$()) {
this.addDirtyRegion$java_awt_Window$I$I$I$I(hw, dirty.x, dirty.y, dirty.width, dirty.height);
} else {
p$1.addDirtyRegion0$java_awt_Container$I$I$I$I.apply(this, [hw, dirty.x, dirty.y, dirty.width, dirty.height]);
}}
});

Clazz.newMeth(C$, 'nativeAddDirtyRegion$sun_awt_AppContext$java_awt_Container$I$I$I$I',  function (appContext, c, x, y, w, h) {
if (w > 0 && h > 0 ) {
{
var dirty=this.hwDirtyComponents.get$O(c);
if (dirty == null ) {
this.hwDirtyComponents.put$O$O(c, Clazz.new_($I$(2,1).c$$I$I$I$I,[x, y, w, h]));
} else {
this.hwDirtyComponents.put$O$O(c, $I$(4).computeUnion$I$I$I$I$java_awt_Rectangle(x, y, w, h, dirty));
}}p$1.scheduleProcessingRunnable$sun_awt_AppContext.apply(this, [appContext]);
}});

Clazz.newMeth(C$, 'extendDirtyRegion$java_awt_Component$I$I$I$I',  function (c, x, y, w, h) {
var r=this.dirtyComponents.get$O(c);
if (r != null ) {
$I$(4).computeUnion$I$I$I$I$java_awt_Rectangle(x, y, w, h, r);
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'getDirtyRegion$javax_swing_JComponent',  function (aComponent) {
var r=null;
{
r=this.dirtyComponents.get$O(aComponent);
}if (r == null ) return Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, 0, 0]);
 else return Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[r]);
});

Clazz.newMeth(C$, 'markCompletelyDirty$javax_swing_JComponent',  function (aComponent) {
this.addDirtyRegion$javax_swing_JComponent$I$I$I$I(aComponent, 0, 0, 2147483647, 2147483647);
});

Clazz.newMeth(C$, 'markCompletelyClean$javax_swing_JComponent',  function (aComponent) {
{
this.dirtyComponents.remove$O(aComponent);
}});

Clazz.newMeth(C$, 'isCompletelyDirty$javax_swing_JComponent',  function (aComponent) {
var r;
r=this.getDirtyRegion$javax_swing_JComponent(aComponent);
if (r.width == 2147483647 && r.height == 2147483647 ) return true;
 else return false;
});

Clazz.newMeth(C$, 'validateInvalidComponents$',  function () {
var ic;
{
if (this.invalidComponents == null ) {
return;
}ic=this.invalidComponents;
this.invalidComponents=null;
}var n=ic.size$();
for (var i=0; i < n; i++) {
var c=ic.get$I(i);
c.validate$();
}
});

Clazz.newMeth(C$, 'prePaintDirtyRegions$',  function () {
var dirtyComponents;
var runnableList;
{
dirtyComponents=this.dirtyComponents;
runnableList=this.runnableList;
this.runnableList=null;
}if (runnableList != null ) {
for (var runnable, $runnable = runnableList.iterator$(); $runnable.hasNext$()&&((runnable=($runnable.next$())),1);) {
runnable.run$();
}
}this.paintDirtyRegions$();
if (dirtyComponents.size$() > 0) {
p$1.paintDirtyRegions1$java_util_Map.apply(this, [dirtyComponents]);
}});

Clazz.newMeth(C$, 'updateWindows$java_util_Map',  function (dirtyComponents) {
var toolkit=$I$(8).getDefaultToolkit$();
if (!(Clazz.instanceOf(toolkit, "sun.awt.SunToolkit") && (toolkit).needUpdateWindow$() )) {
return dirtyComponents;
}var windows=Clazz.new_($I$(9,1));
var dirtyComps=dirtyComponents.keySet$();
for (var it=dirtyComps.iterator$(); it.hasNext$(); ) {
var dirty=it.next$();
var window=dirty.isWindowOrJSApplet$() ? dirty : $I$(4).getWindowAncestor$java_awt_Component(dirty);
if (window != null  && !window.isOpaque$() ) {
it.remove$();
windows.add$O(window);
}}
return dirtyComponents;
}, p$1);

Clazz.newMeth(C$, 'paintDirtyRegions$',  function () {
{
var tmp=this.tmpDirtyComponents;
this.tmpDirtyComponents=this.dirtyComponents;
this.dirtyComponents=tmp;
this.dirtyComponents.clear$();
}p$1.paintDirtyRegions1$java_util_Map.apply(this, [this.tmpDirtyComponents]);
});

Clazz.newMeth(C$, 'paintDirtyRegions1$java_util_Map',  function (tmpDirtyComponents) {
if (tmpDirtyComponents.isEmpty$()) {
return;
}p$1.updateWindows$java_util_Map.apply(this, [tmpDirtyComponents]);
var roots=Clazz.new_($I$(7,1));
for (var dirty, $dirty = tmpDirtyComponents.keySet$().iterator$(); $dirty.hasNext$()&&((dirty=($dirty.next$())),1);) {
this.collectDirtyComponents$java_util_Map$java_awt_Component$java_util_List(tmpDirtyComponents, dirty, roots);
}
var count=roots.size$();
this.painting=true;
try {
for (var j=0; j < count; j++) {
var i=j;
var dirtyComponent=roots.get$I(j);
var rect=tmpDirtyComponents.get$O(dirtyComponent);
var localBoundsH=dirtyComponent.getHeight$();
var localBoundsW=dirtyComponent.getWidth$();
$I$(4).computeIntersection$I$I$I$I$java_awt_Rectangle(0, 0, localBoundsW, localBoundsH, rect);
if (p$1.isStandardJComponent$java_awt_Component.apply(this, [dirtyComponent])) {
(dirtyComponent).paintImmediately$I$I$I$I(rect.x, rect.y, rect.width, rect.height);
} else if (dirtyComponent.isShowing$()) {
var g=$I$(10).safelyGetGraphics$java_awt_Component$java_awt_Component(dirtyComponent, dirtyComponent);
if (g != null ) {
try {
(dirtyComponent).秘paintWithBackgroundCheck$java_awt_Graphics(g);
} finally {
g.dispose$();
}
}}if (this.repaintRoot != null ) {
p$1.adjustRoots$javax_swing_JComponent$javajs_util_Lst$I.apply(this, [this.repaintRoot, roots, i + 1]);
count=roots.size$();
this.repaintRoot.paintImmediately$I$I$I$I(0, 0, this.repaintRoot.getWidth$(), this.repaintRoot.getHeight$());
this.repaintRoot=null;
}}
} finally {
this.painting=false;
}
tmpDirtyComponents.clear$();
}, p$1);

Clazz.newMeth(C$, 'adjustRoots$javax_swing_JComponent$javajs_util_Lst$I',  function (root, roots, index) {
for (var i=roots.size$() - 1; i >= index; i--) {
var c=roots.get$I(i);
for (; ; ) {
if (c === root  || c == null   || !p$1.isStandardJComponent$java_awt_Component.apply(this, [c]) ) {
break;
}c=c.getParent$();
}
if (c === root ) {
roots.removeItemAt$I(i);
}}
}, p$1);

Clazz.newMeth(C$, 'collectDirtyComponents$java_util_Map$java_awt_Component$java_util_List',  function (dirtyComponents, dirtyComponent, roots) {
var dx;
var dy;
var rootDx;
var rootDy;
var component;
var rootDirtyComponent;
var parent;
component=rootDirtyComponent=dirtyComponent;
var x=dirtyComponent.getX$();
var y=dirtyComponent.getY$();
var w=dirtyComponent.getWidth$();
var h=dirtyComponent.getHeight$();
dx=rootDx=0;
dy=rootDy=0;
this.tmp.setBounds$java_awt_Rectangle(dirtyComponents.get$O(dirtyComponent));
$I$(4).computeIntersection$I$I$I$I$java_awt_Rectangle(0, 0, w, h, this.tmp);
if (this.tmp.isEmpty$()) {
return;
}for (; ; ) {
if (!p$1.isStandardJComponent$java_awt_Component.apply(this, [component])) break;
parent=component.getParent$();
if (parent == null ) break;
component=parent;
dx+=x;
dy+=y;
this.tmp.x+=x;
this.tmp.y+=y;
x=component.getX$();
y=component.getY$();
w=component.getWidth$();
h=component.getHeight$();
this.tmp=$I$(4).computeIntersection$I$I$I$I$java_awt_Rectangle(0, 0, w, h, this.tmp);
if (this.tmp.isEmpty$()) {
return;
}if (dirtyComponents.get$O(component) != null ) {
rootDirtyComponent=component;
rootDx=dx;
rootDy=dy;
}}
if (dirtyComponent !== rootDirtyComponent ) {
var r;
this.tmp.x+=rootDx - dx;
this.tmp.y+=rootDy - dy;
r=dirtyComponents.get$O(rootDirtyComponent);
$I$(4).computeUnion$I$I$I$I$java_awt_Rectangle(this.tmp.x, this.tmp.y, this.tmp.width, this.tmp.height, r);
}if (!roots.contains$O(rootDirtyComponent)) roots.add$O(rootDirtyComponent);
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(11,1));
if (this.dirtyComponents != null ) sb.append$S("" + this.dirtyComponents);
return sb.toString();
});

Clazz.newMeth(C$, 'getOffscreenBuffer$java_awt_Component$I$I',  function (c, proposedWidth, proposedHeight) {
return null;
});

Clazz.newMeth(C$, 'getVolatileOffscreenBuffer$java_awt_Component$I$I',  function (c, proposedWidth, proposedHeight) {
var config=c.getGraphicsConfiguration$();
var maxSize=this.getDoubleBufferMaximumSize$();
var width=proposedWidth < 1 ? 1 : (proposedWidth > maxSize.width ? maxSize.width : proposedWidth);
var height=proposedHeight < 1 ? 1 : (proposedHeight > maxSize.height ? maxSize.height : proposedHeight);
var image=this.volatileMap.get$O(config);
if (image == null  || image.getWidth$() < width  || image.getHeight$() < height ) {
if (image != null ) {
image.flush$();
}image=config.createCompatibleVolatileImage$I$I(width, height);
this.volatileMap.put$O$O(config, image);
}return image;
});

Clazz.newMeth(C$, 'setDoubleBufferMaximumSize$java_awt_Dimension',  function (d) {
});

Clazz.newMeth(C$, 'getDoubleBufferMaximumSize$',  function () {
return null;
});

Clazz.newMeth(C$, 'setDoubleBufferingEnabled$Z',  function (aFlag) {
});

Clazz.newMeth(C$, 'resetDoubleBuffer$',  function () {
});

Clazz.newMeth(C$, 'resetVolatileDoubleBuffer$java_awt_GraphicsConfiguration',  function (gc) {
var image=this.volatileMap.remove$O(gc);
if (image != null ) {
image.flush$();
}});

Clazz.newMeth(C$, 'useVolatileDoubleBuffer$',  function () {
return C$.volatileImageBufferEnabled;
});

Clazz.newMeth(C$, 'isPaintingThread',  function () {
return ($I$(12).currentThread$() === this.paintThread );
}, p$1);

Clazz.newMeth(C$, 'paint$javax_swing_JComponent$javax_swing_JComponent$java_awt_Graphics$I$I$I$I',  function (paintingComponent, bufferComponent, g, x, y, w, h) {
paintingComponent.paintToOffscreen$java_awt_Graphics$I$I$I$I$I$I(g, x, y, w, h, x + w, y + h);
});

Clazz.newMeth(C$, 'beginPaint$',  function () {
var multiThreadedPaint=false;
var paintDepth=0;
var currentThread=$I$(12).currentThread$();
{
paintDepth=this.paintDepth;
if (this.paintThread == null  || currentThread === this.paintThread  ) {
this.paintThread=currentThread;
++this.paintDepth;
} else {
multiThreadedPaint=true;
}}});

Clazz.newMeth(C$, 'endPaint$',  function () {
if (p$1.isPaintingThread.apply(this, [])) {
}});

Clazz.newMeth(C$, 'doubleBufferingChanged$javax_swing_JRootPane',  function (rootPane) {
});

Clazz.newMeth(C$, 'scheduleProcessingRunnable$java_awt_Component',  function (c) {
p$1.scheduleProcessingRunnable$sun_awt_AppContext.apply(this, [c.getAppContext$()]);
}, p$1);

Clazz.newMeth(C$, 'scheduleProcessingRunnable$sun_awt_AppContext',  function (context) {
if (this.processingRunnable.markPending$()) {
if ($I$(13).checkJ2SFlag$S("_debugPaint")) System.out.println$S("RepaintManager\n invalid:" + this.invalidComponents + "\n dirty:" + this.dirtyComponents );


$I$(14).getSystemEventQueueImplPP$sun_awt_AppContext(context).postEvent$java_awt_AWTEvent(Clazz.new_([$I$(8).getDefaultToolkit$(), 1200, this.processingRunnable, null, false],$I$(15,1).c$$O$I$Runnable$O$Z));
}}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.repaintManagerKey=Clazz.getClass(C$);
C$.volatileImageBufferEnabled=true;
{
C$.volatileImageBufferEnabled=false;
var headless=false;
if (C$.volatileImageBufferEnabled && headless ) {
C$.volatileImageBufferEnabled=false;
}C$.HANDLE_TOP_LEVEL_PAINT=true;
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.RepaintManager, "ProcessingRunnable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['pending']]]

Clazz.newMeth(C$, 'markPending$',  function () {
if (!this.pending) {
this.pending=true;
return true;
}return false;
});

Clazz.newMeth(C$, 'run$',  function () {
{
this.pending=false;
}this.b$['javax.swing.RepaintManager'].scheduleHeavyWeightPaints$.apply(this.b$['javax.swing.RepaintManager'], []);
this.b$['javax.swing.RepaintManager'].validateInvalidComponents$.apply(this.b$['javax.swing.RepaintManager'], []);
this.b$['javax.swing.RepaintManager'].prePaintDirtyRegions$.apply(this.b$['javax.swing.RepaintManager'], []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

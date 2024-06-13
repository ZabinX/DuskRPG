(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},p$2={},I$=[[0,'java.util.ArrayList','java.security.AccessController','java.awt.Toolkit','javax.swing.SwingUtilities','java.awt.Point',['javax.swing.JLayer','.LayerEventController'],'javax.swing.plaf.LayerUI',['javax.swing.JLayer','.DefaultLayerGlassPane']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JLayer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', ['javax.swing.Scrollable', 'java.beans.PropertyChangeListener']);
C$.$classes$=[['LayerEventController',10],['DefaultLayerGlassPane',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isPainting','isPaintingImmediately'],'J',['$eventMask'],'O',['view','<V extends java.awt.Component>','layerUI','javax.swing.plaf.LayerUI','glassPane','javax.swing.JPanel']]
,['O',['eventController','javax.swing.JLayer.LayerEventController']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_Component.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (view) {
C$.c$$java_awt_Component$javax_swing_plaf_LayerUI.apply(this, [view, Clazz.new_($I$(7,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$javax_swing_plaf_LayerUI',  function (view, ui) {
Clazz.super_(C$, this);
this.秘paintClass=C$ ||null;
this.setGlassPane$javax_swing_JPanel(this.createGlassPane$());
this.setView$java_awt_Component(view);
this.setUI$javax_swing_plaf_LayerUI(ui);
}, 1);

Clazz.newMeth(C$, 'getView$',  function () {
return this.view;
});

Clazz.newMeth(C$, 'setView$java_awt_Component',  function (view) {
var oldView=this.getView$();
if (oldView != null ) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [oldView]);
}if (view != null ) {
C$.superclazz.prototype.addImpl$java_awt_Component$O$I.apply(this, [view, null, this.getComponentCount$()]);
}this.view=view;
this.firePropertyChange$S$O$O("view", oldView, view);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_LayerUI',  function (ui) {
this.layerUI=ui;
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
});

Clazz.newMeth(C$, 'getUI$',  function () {
return this.layerUI;
});

Clazz.newMeth(C$, 'getGlassPane$',  function () {
return this.glassPane;
});

Clazz.newMeth(C$, 'setGlassPane$javax_swing_JPanel',  function (glassPane) {
var oldGlassPane=this.getGlassPane$();
var isGlassPaneVisible=false;
if (oldGlassPane != null ) {
isGlassPaneVisible=oldGlassPane.isVisible$();
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [oldGlassPane]);
}if (glassPane != null ) {
glassPane.setVisible$Z(isGlassPaneVisible);
C$.superclazz.prototype.addImpl$java_awt_Component$O$I.apply(this, [glassPane, null, 0]);
}this.glassPane=glassPane;
this.firePropertyChange$S$O$O("glassPane", oldGlassPane, glassPane);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'createGlassPane$',  function () {
return Clazz.new_($I$(8,1));
});

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager',  function (mgr) {
if (mgr != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JLayer.setLayout() not supported"]);
}});

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border',  function (border) {
if (border != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JLayer.setBorder() not supported"]);
}});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (comp, constraints, index) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Adding components to JLayer is not supported, use setView() or setGlassPane() instead"]);
});

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (comp) {
if (comp == null ) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
} else if (comp === this.getView$() ) {
this.setView$java_awt_Component(null);
} else if (comp === this.getGlassPane$() ) {
this.setGlassPane$javax_swing_JPanel(null);
} else {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
}});

Clazz.newMeth(C$, 'removeAll$',  function () {
if (this.view != null ) {
this.setView$java_awt_Component(null);
}if (this.glassPane != null ) {
this.setGlassPane$javax_swing_JPanel(null);
}});

Clazz.newMeth(C$, 'isPaintingOrigin$',  function () {
return true;
});

Clazz.newMeth(C$, 'paintImmediately$I$I$I$I',  function (x, y, w, h) {
if (!this.isPaintingImmediately && this.getUI$() != null  ) {
this.isPaintingImmediately=true;
try {
this.getUI$().paintImmediately$I$I$I$I$javax_swing_JLayer(x, y, w, h, this);
} finally {
this.isPaintingImmediately=false;
}
} else {
C$.superclazz.prototype.paintImmediately$I$I$I$I.apply(this, [x, y, w, h]);
}});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (!this.isPainting) {
this.isPainting=true;
try {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
} finally {
this.isPainting=false;
}
} else {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'isOptimizedDrawingEnabled$',  function () {
return false;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
if (this.getUI$() != null ) {
this.getUI$().applyPropertyChange$java_beans_PropertyChangeEvent$javax_swing_JLayer(evt, this);
}});

Clazz.newMeth(C$, 'setLayerEventMask$J',  function (layerEventMask) {
var oldEventMask=this.getLayerEventMask$();
this.$eventMask=layerEventMask;
this.firePropertyChange$S$J$J("layerEventMask", oldEventMask, layerEventMask);
if (Long.$ne(layerEventMask,oldEventMask )) {
this.disableEvents$J(oldEventMask);
this.enableEvents$J(this.$eventMask);
if (this.isDisplayable$()) {
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [oldEventMask, layerEventMask]);
}}});

Clazz.newMeth(C$, 'getLayerEventMask$',  function () {
return this.$eventMask;
});

Clazz.newMeth(C$, 'updateUI$',  function () {
if (this.getUI$() != null ) {
this.getUI$().updateUI$javax_swing_JLayer(this);
}});

Clazz.newMeth(C$, 'getPreferredScrollableViewportSize$',  function () {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getPreferredScrollableViewportSize$();
}return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getScrollableBlockIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableBlockIncrement$java_awt_Rectangle$I$I(visibleRect, orientation, direction);
}return (orientation == 1) ? visibleRect.height : visibleRect.width;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportHeight$',  function () {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableTracksViewportHeight$();
}return false;
});

Clazz.newMeth(C$, 'getScrollableTracksViewportWidth$',  function () {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableTracksViewportWidth$();
}return false;
});

Clazz.newMeth(C$, 'getScrollableUnitIncrement$java_awt_Rectangle$I$I',  function (visibleRect, orientation, direction) {
if (Clazz.instanceOf(this.getView$(), "javax.swing.Scrollable")) {
return (this.getView$()).getScrollableUnitIncrement$java_awt_Rectangle$I$I(visibleRect, orientation, direction);
}return 1;
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
if (this.layerUI != null ) {
this.setUI$javax_swing_plaf_LayerUI(this.layerUI);
}if (Long.$ne(this.$eventMask,0 )) {
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [0, this.$eventMask]);
}}, p$2);

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [0, this.$eventMask]);
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
p$1.updateAWTEventListener$J$J.apply(C$.eventController, [this.$eventMask, 0]);
});

Clazz.newMeth(C$, 'doLayout$',  function () {
if (this.getUI$() != null ) {
this.getUI$().doLayout$javax_swing_JLayer(this);
}});

C$.$static$=function(){C$.$static$=0;
C$.eventController=Clazz.new_($I$(6,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JLayer, "LayerEventController", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.event.AWTEventListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.layerMaskList=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['J',['currentEventMask'],'O',['layerMaskList','java.util.ArrayList']]]

Clazz.newMeth(C$, 'eventDispatched$java_awt_AWTEvent',  function (event) {
var source=event.getSource$();
if (Clazz.instanceOf(source, "java.awt.Component")) {
var component=source;
while (component != null ){
if (Clazz.instanceOf(component, "javax.swing.JLayer")) {
var l=component;
var ui=l.getUI$();
if (ui != null  && p$1.isEventEnabled$J$I.apply(this, [l.getLayerEventMask$(), event.getID$()])  && (!(Clazz.instanceOf(event, "java.awt.event.InputEvent")) || !(event).isConsumed$() ) ) {
ui.eventDispatched$java_awt_AWTEvent$javax_swing_JLayer(event, l);
}}component=component.getParent$();
}
}});

Clazz.newMeth(C$, 'updateAWTEventListener$J$J',  function (oldEventMask, newEventMask) {
if (Long.$ne(oldEventMask,0 )) {
this.layerMaskList.remove$O(Long.valueOf$J(oldEventMask));
}if (Long.$ne(newEventMask,0 )) {
this.layerMaskList.add$O(Long.valueOf$J(newEventMask));
}var combinedMask=0;
for (var mask, $mask = this.layerMaskList.iterator$(); $mask.hasNext$()&&((mask=($mask.next$())),1);) {
(combinedMask=Long.$or(combinedMask,((mask).valueOf())));
}
(combinedMask=Long.$and(combinedMask,(231487)));
if (Long.$eq(combinedMask,0 )) {
p$1.removeAWTEventListener.apply(this, []);
} else if (Long.$ne(p$1.getCurrentEventMask.apply(this, []),combinedMask )) {
p$1.removeAWTEventListener.apply(this, []);
p$1.addAWTEventListener$J.apply(this, [combinedMask]);
}this.currentEventMask=combinedMask;
}, p$1);

Clazz.newMeth(C$, 'getCurrentEventMask',  function () {
return this.currentEventMask;
}, p$1);

Clazz.newMeth(C$, 'addAWTEventListener$J',  function (eventMask) {
$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.JLayer$LayerEventController$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JLayer$LayerEventController$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(3).getDefaultToolkit$().addAWTEventListener$java_awt_event_AWTEventListener$J(this.b$['javax.swing.JLayer.LayerEventController'], this.$finals$.eventMask);
return null;
});
})()
), Clazz.new_(P$.JLayer$LayerEventController$1.$init$,[this, {eventMask:eventMask}]))]);
}, p$1);

Clazz.newMeth(C$, 'removeAWTEventListener',  function () {
$I$(2,"doPrivileged$java_security_PrivilegedAction",[((P$.JLayer$LayerEventController$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JLayer$LayerEventController$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(3).getDefaultToolkit$().removeAWTEventListener$java_awt_event_AWTEventListener(this.b$['javax.swing.JLayer.LayerEventController']);
return null;
});
})()
), Clazz.new_(P$.JLayer$LayerEventController$2.$init$,[this, null]))]);
}, p$1);

Clazz.newMeth(C$, 'isEventEnabled$J$I',  function (eventMask, id) {
return ((Long.$ne((Long.$and(eventMask,1)),0 ) && id >= 100  && id <= 103 ) || (Long.$ne((Long.$and(eventMask,2)),0 ) && id >= 300  && id <= 301 ) || (Long.$ne((Long.$and(eventMask,4)),0 ) && id >= 1004  && id <= 1005 ) || (Long.$ne((Long.$and(eventMask,8)),0 ) && id >= 400  && id <= 402 ) || (Long.$ne((Long.$and(eventMask,131072)),0 ) && id == 507 ) || (Long.$ne((Long.$and(eventMask,32)),0 ) && (id == 503 || id == 506 ) ) || (Long.$ne((Long.$and(eventMask,16)),0 ) && id != 503  && id != 506  && id != 507  && id >= 500  && id <= 507 ) || (Long.$ne((Long.$and(eventMask,2048)),0 ) && id >= 1100  && id <= 1101 ) || (Long.$ne((Long.$and(eventMask,32768)),0 ) && id == 1400 ) || (Long.$ne((Long.$and(eventMask,65536)),0 ) && (id == 1401 || id == 1402 ) )  );
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JLayer, "DefaultLayerGlassPane", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(false);
}, 1);

Clazz.newMeth(C$, 'contains$I$I',  function (x, y) {
for (var i=0; i < this.getComponentCount$(); i++) {
var c=this.getComponent$I(i);
var point=$I$(4,"convertPoint$java_awt_Component$java_awt_Point$java_awt_Component",[this, Clazz.new_($I$(5,1).c$$I$I,[x, y]), c]);
if (c.isVisible$() && c.contains$java_awt_Point(point) ) {
return true;
}}
if (this.getMouseListeners$().length == 0 && this.getMouseMotionListeners$().length == 0  && this.getMouseWheelListeners$().length == 0  && !this.isCursorSet$() ) {
return false;
}return C$.superclazz.prototype.contains$I$I.apply(this, [x, y]);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

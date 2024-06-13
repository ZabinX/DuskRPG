(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},I$=[[0,'java.awt.Point','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.awt.Dimension',['swingjs.plaf.JSScrollPaneUI','.Actions'],'sun.swing.DefaultLookup','javax.swing.LookAndFeel','javax.swing.UIManager','javax.swing.SwingUtilities','swingjs.plaf.LazyActionMap',['swingjs.plaf.JSScrollPaneUI','.Handler'],['java.awt.Component','.BaselineResizeBehavior']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSScrollPaneUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI', ['java.awt.peer.ContainerPeer', 'java.beans.PropertyChangeListener', 'javax.swing.event.ChangeListener']);
C$.$classes$=[['ViewportChangeHandler',1],['HSBChangeListener',1],['VSBChangeListener',1],['PropertyChangeHandler',1],['Actions',10],['Handler',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrollBarUIDisabled=false;
this.setValueCalled=false;
},1);

C$.$fields$=[['Z',['scrollBarUIDisabled','setValueCalled'],'O',['scrolledComponent','javax.swing.JComponent','viewport','javax.swing.JViewport','scrolledUI','swingjs.plaf.JSComponentUI','horizBarUI','swingjs.plaf.JSScrollBarUI','+vertBarUI','scrollpane','javax.swing.JScrollPane','vsbChangeListener','javax.swing.event.ChangeListener','+hsbChangeListener','+viewportChangeListener','spPropertyChangeListener','java.beans.PropertyChangeListener','+vsbPropertyChangeListener','+hsbPropertyChangeListener','handler','swingjs.plaf.JSScrollPaneUI.Handler']]]

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
this.isContainer=true;
if (this.domNode == null ) {
this.domNode=$I$(2,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
if (this.scrolledComponent != null  && this.scrolledComponent.秘isAWT$() ) $I$(3).setStyles(this.domNode, ["border", "solid black 1px", "box-sizing", "border-box"]);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'jsSetViewPort$',  function () {
this.viewport=this.scrollpane.getViewport$();
var hscrollbar=this.scrollpane.getHorizontalScrollBar$();
hscrollbar.addChangeListener$javax_swing_event_ChangeListener(this);
hscrollbar.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
var vscrollbar=this.scrollpane.getVerticalScrollBar$();
vscrollbar.addChangeListener$javax_swing_event_ChangeListener(this);
vscrollbar.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
return p$3.setScrollComponent$javax_swing_JViewport$Z.apply(this, [this.viewport, true]);
});

Clazz.newMeth(C$, 'setScrollComponent$javax_swing_JViewport$Z',  function (viewport, setSize) {
this.viewport=viewport;
var sc=viewport.getView$();
if (sc == null  || sc.ui == null  ) return false;
if (sc !== this.scrolledComponent ) {
this.scrolledComponent=sc;
this.scrolledUI=sc.ui;
this.scrollBarUIDisabled=this.scrolledUI.isTextView;
this.scrolledUI.scrollPaneUI=this;
if (setSize) $I$(3,"setSize",[this.scrolledUI.domNode, this.c.getWidth$(), this.c.getHeight$()]);
}return true;
}, p$3);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.scrolledComponent == null  && !this.jsSetViewPort$() ) return;
if (Clazz.instanceOf(e.getSource$(), "javax.swing.BoundedRangeModel") && p$3.jsModelStateChanged$javax_swing_event_ChangeEvent.apply(this, [e]) ) {
return;
}this.getHandler$().stateChanged$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$, 'getScrollBarPolicyCSS$I',  function (policy) {
switch (policy % 10) {
default:
case 0:
return "auto";
case 1:
return "none";
case 2:
return "scroll";
}
}, p$3);

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
return (this.isAWT && (jc.getWidth$() != 0 || jc.getHeight$() != 0 )  ? Clazz.new_([jc.getWidth$(), jc.getHeight$()],$I$(4,1).c$$I$I) : null);
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["scrollUp"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["scrollDown"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["scrollHome"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["scrollEnd"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["unitScrollUp"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["unitScrollDown"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["scrollLeft"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["scrollRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["unitScrollRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["unitScrollLeft"]));
}, 1);

Clazz.newMeth(C$, 'updateScrollBarExtents',  function () {
var vp=this.scrollpane.getViewport$();
if (vp == null ) return;
var vsb=this.scrollpane.getVerticalScrollBar$();
var hsb=this.scrollpane.getHorizontalScrollBar$();
if (vsb != null ) {
vsb.setVisibleAmount$I(vp.getHeight$());
}if (hsb != null ) {
vsb.setVisibleAmount$I(vp.getWidth$());
}}, p$3);

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
return Clazz.new_($I$(4,1).c$$I$I,[32767, 32767]);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 1) {
var keyMap=$I$(6).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.scrollpane, this, "ScrollPane.ancestorInputMap");
var rtlKeyMap;
if (this.scrollpane.getComponentOrientation$().isLeftToRight$() || ((rtlKeyMap=$I$(6).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.scrollpane, this, "ScrollPane.ancestorInputMap.RightToLeft")) == null ) ) {
return keyMap;
} else {
rtlKeyMap.setParent$javax_swing_InputMap(keyMap);
return rtlKeyMap;
}}return null;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.scrollpane=jc;
this.installDefaults$javax_swing_JScrollPane(this.scrollpane);
this.installListeners$javax_swing_JScrollPane(this.scrollpane);
this.installKeyboardActions$javax_swing_JScrollPane(this.scrollpane);
});

Clazz.newMeth(C$, 'installDefaults$javax_swing_JScrollPane',  function (scrollpane) {
$I$(7).installBorder$javax_swing_JComponent$S(scrollpane, "ScrollPane.border");
$I$(7).installColorsAndFont$javax_swing_JComponent$S$S$S(scrollpane, "ScrollPane.background", "ScrollPane.foreground", "ScrollPane.font");
var vpBorder=scrollpane.getViewportBorder$();
if ((vpBorder == null ) || (Clazz.instanceOf(vpBorder, "javax.swing.plaf.UIResource")) ) {
vpBorder=$I$(8).getBorder$O("ScrollPane.viewportBorder");
scrollpane.setViewportBorder$javax_swing_border_Border(vpBorder);
}$I$(7).installProperty$javax_swing_JComponent$S$O(scrollpane, "opaque", Boolean.TRUE);
});

Clazz.newMeth(C$, 'installListeners$javax_swing_JScrollPane',  function (c) {
this.vsbChangeListener=this.createVSBChangeListener$();
this.vsbPropertyChangeListener=p$3.createVSBPropertyChangeListener.apply(this, []);
this.hsbChangeListener=this.createHSBChangeListener$();
this.hsbPropertyChangeListener=p$3.createHSBPropertyChangeListener.apply(this, []);
this.viewportChangeListener=this.createViewportChangeListener$();
this.spPropertyChangeListener=this.createPropertyChangeListener$();
var viewport=this.scrollpane.getViewport$();
var vsb=this.scrollpane.getVerticalScrollBar$();
var hsb=this.scrollpane.getHorizontalScrollBar$();
if (viewport != null ) {
viewport.addChangeListener$javax_swing_event_ChangeListener(this.viewportChangeListener);
viewport.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
}this.horizBarUI=this.vertBarUI=null;
p$3.updateScrollBar$javax_swing_JScrollBar$javax_swing_JScrollBar$javax_swing_event_ChangeListener$java_beans_PropertyChangeListener$Z.apply(this, [null, vsb, this.vsbChangeListener, this.vsbPropertyChangeListener, true]);
p$3.updateScrollBar$javax_swing_JScrollBar$javax_swing_JScrollBar$javax_swing_event_ChangeListener$java_beans_PropertyChangeListener$Z.apply(this, [null, hsb, this.hsbChangeListener, this.hsbPropertyChangeListener, false]);
this.scrollpane.addPropertyChangeListener$java_beans_PropertyChangeListener(this.spPropertyChangeListener);
});

Clazz.newMeth(C$, 'updateScrollBar$javax_swing_JScrollBar$javax_swing_JScrollBar$javax_swing_event_ChangeListener$java_beans_PropertyChangeListener$Z',  function (sbOld, sbNew, cl, pcl, isVertical) {
if (sbOld != null ) {
if (isVertical) {
this.vertBarUI=null;
(sbOld.getUI$()).setScrollPaneUI$swingjs_plaf_JSScrollPaneUI(null);
} else {
this.horizBarUI=null;
(sbOld.getUI$()).setScrollPaneUI$swingjs_plaf_JSScrollPaneUI(null);
}if (cl != null ) {
sbOld.getModel$().removeChangeListener$javax_swing_event_ChangeListener(cl);
}if (pcl != null ) {
sbOld.removePropertyChangeListener$java_beans_PropertyChangeListener(pcl);
}}if (sbNew != null ) {
if (isVertical) {
this.vertBarUI=sbNew.getUI$();
this.vertBarUI.setScrollPaneUI$swingjs_plaf_JSScrollPaneUI(this);
} else {
this.horizBarUI=sbNew.getUI$();
this.horizBarUI.setScrollPaneUI$swingjs_plaf_JSScrollPaneUI(this);
}if (cl != null ) {
sbNew.getModel$().addChangeListener$javax_swing_event_ChangeListener(cl);
}if (pcl != null ) {
sbNew.addPropertyChangeListener$java_beans_PropertyChangeListener(pcl);
}}}, p$3);

Clazz.newMeth(C$, 'installKeyboardActions$javax_swing_JScrollPane',  function (c) {
var inputMap=this.getInputMap$I(1);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(c, 1, inputMap);
$I$(10,"installLazyActionMap$javax_swing_JComponent$Class$S",[c, Clazz.getClass(C$), "ScrollPane.actionMap"]);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
this.uninstallDefaults$javax_swing_JScrollPane(this.scrollpane);
this.uninstallListeners$javax_swing_JComponent(this.scrollpane);
this.uninstallKeyboardActions$javax_swing_JScrollPane(this.scrollpane);
this.scrollpane=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$javax_swing_JScrollPane',  function (c) {
$I$(7).uninstallBorder$javax_swing_JComponent(this.scrollpane);
if (Clazz.instanceOf(this.scrollpane.getViewportBorder$(), "javax.swing.plaf.UIResource")) {
this.scrollpane.setViewportBorder$javax_swing_border_Border(null);
}});

Clazz.newMeth(C$, 'uninstallListeners$javax_swing_JComponent',  function (c) {
var viewport=this.scrollpane.getViewport$();
var vsb=this.scrollpane.getVerticalScrollBar$();
var hsb=this.scrollpane.getHorizontalScrollBar$();
if (viewport != null ) {
viewport.removeChangeListener$javax_swing_event_ChangeListener(this.viewportChangeListener);
}if (vsb != null ) {
vsb.getModel$().removeChangeListener$javax_swing_event_ChangeListener(this.vsbChangeListener);
vsb.removePropertyChangeListener$java_beans_PropertyChangeListener(this.vsbPropertyChangeListener);
}if (hsb != null ) {
hsb.getModel$().removeChangeListener$javax_swing_event_ChangeListener(this.hsbChangeListener);
hsb.removePropertyChangeListener$java_beans_PropertyChangeListener(this.hsbPropertyChangeListener);
}this.scrollpane.removePropertyChangeListener$java_beans_PropertyChangeListener(this.spPropertyChangeListener);
this.vsbChangeListener=null;
this.hsbChangeListener=null;
this.viewportChangeListener=null;
this.spPropertyChangeListener=null;
this.handler=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$javax_swing_JScrollPane',  function (c) {
$I$(9).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(c, null);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(c, 1, null);
});

Clazz.newMeth(C$, 'getHandler$',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(11,1),[this, null]);
}return this.handler;
});

Clazz.newMeth(C$, 'syncScrollPaneWithViewport$',  function () {
var viewport=this.scrollpane.getViewport$();
var vsb=this.scrollpane.getVerticalScrollBar$();
var hsb=this.scrollpane.getHorizontalScrollBar$();
var rowHead=this.scrollpane.getRowHeader$();
var colHead=this.scrollpane.getColumnHeader$();
var ltr=this.scrollpane.getComponentOrientation$().isLeftToRight$();
if (viewport != null ) {
var extentSize=viewport.getExtentSize$();
var viewSize=viewport.getViewSize$();
var viewPosition=viewport.getViewPosition$();
if (vsb != null ) {
var extent=extentSize.height;
var max=viewSize.height;
var value=Math.max(0, Math.min(viewPosition.y, max - extent));
vsb.setValues$I$I$I$I(value, extent, 0, max);
}if (hsb != null ) {
var extent=extentSize.width;
var max=viewSize.width;
var value;
if (ltr) {
value=Math.max(0, Math.min(viewPosition.x, max - extent));
} else {
var currentValue=hsb.getValue$();
if (this.setValueCalled && ((max - currentValue) == viewPosition.x) ) {
value=Math.max(0, Math.min(max - extent, currentValue));
if (extent != 0) {
this.setValueCalled=false;
}} else {
if (extent > max) {
viewPosition.x=max - extent;
viewport.setViewPosition$java_awt_Point(viewPosition);
value=0;
} else {
value=Math.max(0, Math.min(max - extent, max - extent - viewPosition.x ));
}}}hsb.setValues$I$I$I$I(value, extent, 0, max);
}if (rowHead != null ) {
var p=rowHead.getViewPosition$();
p.y=viewport.getViewPosition$().y;
p.x=0;
rowHead.setViewPosition$java_awt_Point(p);
}if (colHead != null ) {
var p=colHead.getViewPosition$();
if (ltr) {
p.x=viewport.getViewPosition$().x;
} else {
p.x=Math.max(0, viewport.getViewPosition$().x);
}p.y=0;
colHead.setViewPosition$java_awt_Point(p);
}}});

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
var viewport=this.scrollpane.getViewport$();
var spInsets=this.scrollpane.getInsets$();
var y=spInsets.top;
height=height - spInsets.top - spInsets.bottom ;
width=width - spInsets.left - spInsets.right ;
var columnHeader=this.scrollpane.getColumnHeader$();
if (columnHeader != null  && columnHeader.isVisible$() ) {
var header=columnHeader.getView$();
if (header != null  && header.isVisible$() ) {
var headerPref=header.getPreferredSize$();
var baseline=header.getBaseline$I$I(headerPref.width, headerPref.height);
if (baseline >= 0) {
return y + baseline;
}}var columnPref=columnHeader.getPreferredSize$();
height-=columnPref.height;
y+=columnPref.height;
}var view=(viewport == null ) ? null : viewport.getView$();
if (view != null  && view.isVisible$()  && view.getBaselineResizeBehavior$() === $I$(12).CONSTANT_ASCENT  ) {
var viewportBorder=this.scrollpane.getViewportBorder$();
if (viewportBorder != null ) {
var vpbInsets=viewportBorder.getBorderInsets$java_awt_Component(this.scrollpane);
y+=vpbInsets.top;
height=height - vpbInsets.top - vpbInsets.bottom ;
width=width - vpbInsets.left - vpbInsets.right ;
}if (view.getWidth$() > 0 && view.getHeight$() > 0 ) {
var min=view.getMinimumSize$();
width=Math.max(min.width, view.getWidth$());
height=Math.max(min.height, view.getHeight$());
}if (width > 0 && height > 0 ) {
var baseline=view.getBaseline$I$I(width, height);
if (baseline > 0) {
return y + baseline;
}}}return -1;
});

Clazz.newMeth(C$, 'getInsets$',  function () {
var b=this.scrollpane.getBorder$();
if (b == null ) return null;
var i=b.getBorderInsets$java_awt_Component(this.scrollpane);
if (this.isAWT && !this.layingOut ) {
i.right+=this.scrollpane.getVerticalScrollBar$().isVisible$() ? 12 : 0;
i.bottom+=this.scrollpane.getHorizontalScrollBar$().isVisible$() ? 12 : 0;
}return i;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
return $I$(12).CONSTANT_ASCENT;
});

Clazz.newMeth(C$, 'createViewportChangeListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'createHSBPropertyChangeListener',  function () {
return this.getHandler$();
}, p$3);

Clazz.newMeth(C$, 'createHSBChangeListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'createVSBPropertyChangeListener',  function () {
return this.getHandler$();
}, p$3);

Clazz.newMeth(C$, 'createVSBChangeListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'updateScrollBarDisplayPolicy$java_beans_PropertyChangeEvent',  function (e) {
this.scrollpane.revalidate$();
this.scrollpane.秘repaint$();
});

Clazz.newMeth(C$, 'updateViewport$java_beans_PropertyChangeEvent',  function (e) {
var oldViewport=(e.getOldValue$());
var newViewport=(e.getNewValue$());
if (oldViewport != null ) {
oldViewport.removeChangeListener$javax_swing_event_ChangeListener(this.viewportChangeListener);
}if (newViewport != null ) {
var p=newViewport.getViewPosition$();
if (this.scrollpane.getComponentOrientation$().isLeftToRight$()) {
p.x=Math.max(p.x, 0);
} else {
var max=newViewport.getViewSize$().width;
var extent=newViewport.getExtentSize$().width;
if (extent > max) {
p.x=max - extent;
} else {
p.x=Math.max(0, Math.min(max - extent, p.x));
}}p.y=Math.max(p.y, 0);
newViewport.setViewPosition$java_awt_Point(p);
newViewport.addChangeListener$javax_swing_event_ChangeListener(this.viewportChangeListener);
}});

Clazz.newMeth(C$, 'updateRowHeader$java_beans_PropertyChangeEvent',  function (e) {
var newRowHead=(e.getNewValue$());
if (newRowHead != null ) {
var viewport=this.scrollpane.getViewport$();
var p=newRowHead.getViewPosition$();
p.y=(viewport != null ) ? viewport.getViewPosition$().y : 0;
newRowHead.setViewPosition$java_awt_Point(p);
}});

Clazz.newMeth(C$, 'updateColumnHeader$java_beans_PropertyChangeEvent',  function (e) {
var newColHead=(e.getNewValue$());
if (newColHead != null ) {
var viewport=this.scrollpane.getViewport$();
var p=newColHead.getViewPosition$();
if (viewport == null ) {
p.x=0;
} else {
if (this.scrollpane.getComponentOrientation$().isLeftToRight$()) {
p.x=viewport.getViewPosition$().x;
} else {
p.x=Math.max(0, viewport.getViewPosition$().x);
}}newColHead.setViewPosition$java_awt_Point(p);
this.scrollpane.add$java_awt_Component$O(newColHead, "COLUMN_HEADER");
}});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'jsModelStateChanged$javax_swing_event_ChangeEvent',  function (e) {
if (this.scrollBarUIDisabled) {
p$3.jsScrollComponentUsingCSS$Z.apply(this, [e.getSource$() === this.viewport ]);
return true;
}return false;
}, p$3);

Clazz.newMeth(C$, 'jsScrollComponentUsingCSS$Z',  function (isViewportChange) {
var r1=this.viewport.getBounds$();
var r2=this.scrolledComponent.getBounds$();
if (!r1.equals$O(r2) && !isViewportChange ) this.scrolledComponent.setBounds$java_awt_Rectangle(r1);
$I$(3,"setStyles",[this.scrolledUI.domNode, ["overflow-x", p$3.getScrollBarPolicyCSS$I.apply(this, [this.scrollpane.getHorizontalScrollBarPolicy$()]), "overflow-y", p$3.getScrollBarPolicyCSS$I.apply(this, [this.scrollpane.getVerticalScrollBarPolicy$()])]]);
if (this.horizBarUI != null ) $I$(3).setVisible(this.horizBarUI.jqSlider, false);
if (this.vertBarUI != null ) $I$(3).setVisible(this.vertBarUI.jqSlider, false);
}, p$3);

Clazz.newMeth(C$, 'notifyTableScrolling$',  function () {
if (this.scrolledComponent != null  && this.scrolledComponent.getUIClassID$() === "TableUI"  ) {
(this.scrolledComponent.ui).setScrolling$();
}});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
p$3.updateScrollBarExtents.apply(this, []);
if (this.scrollBarUIDisabled) {
this.scrollpane.getVerticalScrollBar$().setVisible$Z(false);
this.scrollpane.getHorizontalScrollBar$().setVisible$Z(false);
}});

Clazz.newMeth(C$, 'setBounds$I$I$I$I$I',  function (x, y, w, h, op) {
C$.superclazz.prototype.setBounds$I$I$I$I$I.apply(this, [x, y, w, h, op]);
if (this.scrollBarUIDisabled && this.scrolledUI != null  ) {
this.scrolledUI.setBounds$I$I$I$I$I(x, y, w, h, op);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSScrollPaneUI, "ViewportChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSScrollPaneUI'].getHandler$.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], []).stateChanged$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSScrollPaneUI, "HSBChangeListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSScrollPaneUI'].getHandler$.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], []).stateChanged$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSScrollPaneUI, "VSBChangeListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSScrollPaneUI'].getHandler$.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], []).stateChanged$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSScrollPaneUI, "PropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSScrollPaneUI'].getHandler$.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSScrollPaneUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (key) {
;C$.superclazz.c$$S.apply(this,[key]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var scrollpane=e.getSource$();
var ltr=scrollpane.getComponentOrientation$().isLeftToRight$();
var key=this.getName$();
if (key == "scrollUp") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 1, -1, true]);
} else if (key == "scrollDown") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 1, 1, true]);
} else if (key == "scrollHome") {
p$1.scrollHome$javax_swing_JScrollPane.apply(this, [scrollpane]);
} else if (key == "scrollEnd") {
p$1.scrollEnd$javax_swing_JScrollPane.apply(this, [scrollpane]);
} else if (key == "unitScrollUp") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 1, -1, false]);
} else if (key == "unitScrollDown") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 1, 1, false]);
} else if (key == "scrollLeft") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 0, ltr ? -1 : 1, true]);
} else if (key == "scrollRight") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 0, ltr ? 1 : -1, true]);
} else if (key == "unitScrollLeft") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 0, ltr ? -1 : 1, false]);
} else if (key == "unitScrollRight") {
p$1.scroll$javax_swing_JScrollPane$I$I$Z.apply(this, [scrollpane, 0, ltr ? 1 : -1, false]);
}});

Clazz.newMeth(C$, 'scrollEnd$javax_swing_JScrollPane',  function (scrollpane) {
var vp=scrollpane.getViewport$();
var view;
if (vp != null  && (view=vp.getView$()) != null  ) {
var visRect=vp.getViewRect$();
var bounds=view.getBounds$();
if (scrollpane.getComponentOrientation$().isLeftToRight$()) {
vp.setViewPosition$java_awt_Point(Clazz.new_($I$(1,1).c$$I$I,[bounds.width - visRect.width, bounds.height - visRect.height]));
} else {
vp.setViewPosition$java_awt_Point(Clazz.new_($I$(1,1).c$$I$I,[0, bounds.height - visRect.height]));
}}}, p$1);

Clazz.newMeth(C$, 'scrollHome$javax_swing_JScrollPane',  function (scrollpane) {
var vp=scrollpane.getViewport$();
var view;
if (vp != null  && (view=vp.getView$()) != null  ) {
if (scrollpane.getComponentOrientation$().isLeftToRight$()) {
vp.setViewPosition$java_awt_Point(Clazz.new_($I$(1,1).c$$I$I,[0, 0]));
} else {
var visRect=vp.getViewRect$();
var bounds=view.getBounds$();
vp.setViewPosition$java_awt_Point(Clazz.new_($I$(1,1).c$$I$I,[bounds.width - visRect.width, 0]));
}}}, p$1);

Clazz.newMeth(C$, 'scroll$javax_swing_JScrollPane$I$I$Z',  function (scrollpane, orientation, direction, block) {
var vp=scrollpane.getViewport$();
var view;
if (vp != null  && (view=vp.getView$()) != null  ) {
var visRect=vp.getViewRect$();
var vSize=view.getSize$();
var amount;
if (Clazz.instanceOf(view, "javax.swing.Scrollable")) {
if (block) {
amount=(view).getScrollableBlockIncrement$java_awt_Rectangle$I$I(visRect, orientation, direction);
} else {
amount=(view).getScrollableUnitIncrement$java_awt_Rectangle$I$I(visRect, orientation, direction);
}} else {
if (block) {
if (orientation == 1) {
amount=visRect.height;
} else {
amount=visRect.width;
}} else {
amount=10;
}}if (orientation == 1) {
visRect.y+=(amount * direction);
if ((visRect.y + visRect.height) > vSize.height) {
visRect.y=Math.max(0, vSize.height - visRect.height);
} else if (visRect.y < 0) {
visRect.y=0;
}} else {
if (scrollpane.getComponentOrientation$().isLeftToRight$()) {
visRect.x+=(amount * direction);
if ((visRect.x + visRect.width) > vSize.width) {
visRect.x=Math.max(0, vSize.width - visRect.width);
} else if (visRect.x < 0) {
visRect.x=0;
}} else {
visRect.x-=(amount * direction);
if (visRect.width > vSize.width) {
visRect.x=vSize.width - visRect.width;
} else {
visRect.x=Math.max(0, Math.min(vSize.width - visRect.width, visRect.x));
}}}vp.setViewPosition$java_awt_Point(visRect.getLocation$());
}}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSScrollPaneUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var viewport=this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getViewport$();
if (viewport != null ) {
if (e.getSource$() === viewport ) {
p$2.viewportStateChanged$javax_swing_event_ChangeEvent.apply(this, [e]);
} else {
var hsb=this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getHorizontalScrollBar$();
if (hsb != null  && e.getSource$() === hsb.getModel$()  ) {
p$2.hsbStateChanged$javax_swing_JViewport$javax_swing_event_ChangeEvent.apply(this, [viewport, e]);
} else {
var vsb=this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getVerticalScrollBar$();
if (vsb != null  && e.getSource$() === vsb.getModel$()  ) {
p$2.vsbStateChanged$javax_swing_JViewport$javax_swing_event_ChangeEvent.apply(this, [viewport, e]);
}}}}});

Clazz.newMeth(C$, 'vsbStateChanged$javax_swing_JViewport$javax_swing_event_ChangeEvent',  function (viewport, e) {
var model=(e.getSource$());
var p=viewport.getViewPosition$();
p.y=model.getValue$();
p$3.setScrollComponent$javax_swing_JViewport$Z.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [viewport, false]);
this.b$['swingjs.plaf.JSScrollPaneUI'].notifyTableScrolling$.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], []);
viewport.setViewPosition$java_awt_Point(p);
this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getVerticalScrollBar$().setVisibleAmount$I(viewport.getHeight$());
}, p$2);

Clazz.newMeth(C$, 'hsbStateChanged$javax_swing_JViewport$javax_swing_event_ChangeEvent',  function (viewport, e) {
var model=(e.getSource$());
var p=viewport.getViewPosition$();
p$3.setScrollComponent$javax_swing_JViewport$Z.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [viewport, false]);
this.b$['swingjs.plaf.JSScrollPaneUI'].notifyTableScrolling$.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], []);
var value=model.getValue$();
if (this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getComponentOrientation$().isLeftToRight$()) {
p.x=value;
} else {
var max=viewport.getViewSize$().width;
var extent=viewport.getExtentSize$().width;
var oldX=p.x;
p.x=max - extent - value ;
if ((extent == 0) && (value != 0) && (oldX == max)  ) {
this.b$['swingjs.plaf.JSScrollPaneUI'].setValueCalled=true;
} else {
if ((extent != 0) && (oldX < 0) && (p.x == 0)  ) {
p.x+=value;
}}}viewport.setViewPosition$java_awt_Point(p);
this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getHorizontalScrollBar$().setVisibleAmount$I(viewport.getWidth$());
}, p$2);

Clazz.newMeth(C$, 'viewportStateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSScrollPaneUI'].syncScrollPaneWithViewport$.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], []);
if (!(Clazz.instanceOf(this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getViewport$().getView$(), "javax.swing.JTable")) && this.b$['swingjs.plaf.JSScrollPaneUI'].jc.秘selfOrChildIsPainted$() ) this.b$['swingjs.plaf.JSScrollPaneUI'].jc.秘repaint$();
}, p$2);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getSource$() === this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane ) {
p$2.scrollPanePropertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
} else {
p$2.sbPropertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
}});

Clazz.newMeth(C$, 'scrollPanePropertyChange$java_beans_PropertyChangeEvent',  function (e) {
var propertyName=e.getPropertyName$();
switch (propertyName) {
case "verticalScrollBarDisplayPolicy":
this.b$['swingjs.plaf.JSScrollPaneUI'].updateScrollBarDisplayPolicy$java_beans_PropertyChangeEvent.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [e]);
break;
case "horizontalScrollBarDisplayPolicy":
this.b$['swingjs.plaf.JSScrollPaneUI'].updateScrollBarDisplayPolicy$java_beans_PropertyChangeEvent.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [e]);
break;
case "viewport":
this.b$['swingjs.plaf.JSScrollPaneUI'].updateViewport$java_beans_PropertyChangeEvent.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [e]);
break;
case "rowHeader":
this.b$['swingjs.plaf.JSScrollPaneUI'].updateRowHeader$java_beans_PropertyChangeEvent.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [e]);
break;
case "columnHeader":
this.b$['swingjs.plaf.JSScrollPaneUI'].updateColumnHeader$java_beans_PropertyChangeEvent.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [e]);
break;
case "verticalScrollBar":
this.updateVerticalScrollBar$java_beans_PropertyChangeEvent(e);
break;
case "horizontalScrollBar":
this.updateHorizontalScrollBar$java_beans_PropertyChangeEvent(e);
break;
case "componentOrientation":
this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.revalidate$();
this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.秘repaint$();
break;
}
}, p$2);

Clazz.newMeth(C$, 'updateHorizontalScrollBar$java_beans_PropertyChangeEvent',  function (pce) {
p$3.updateScrollBar$javax_swing_JScrollBar$javax_swing_JScrollBar$javax_swing_event_ChangeListener$java_beans_PropertyChangeListener$Z.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [pce.getOldValue$(), pce.getNewValue$(), this.b$['swingjs.plaf.JSScrollPaneUI'].hsbChangeListener, this.b$['swingjs.plaf.JSScrollPaneUI'].hsbPropertyChangeListener, false]);
});

Clazz.newMeth(C$, 'updateVerticalScrollBar$java_beans_PropertyChangeEvent',  function (pce) {
p$3.updateScrollBar$javax_swing_JScrollBar$javax_swing_JScrollBar$javax_swing_event_ChangeListener$java_beans_PropertyChangeListener$Z.apply(this.b$['swingjs.plaf.JSScrollPaneUI'], [pce.getOldValue$(), pce.getNewValue$(), this.b$['swingjs.plaf.JSScrollPaneUI'].vsbChangeListener, this.b$['swingjs.plaf.JSScrollPaneUI'].vsbPropertyChangeListener, true]);
});

Clazz.newMeth(C$, 'sbPropertyChange$java_beans_PropertyChangeEvent',  function (e) {
var propertyName=e.getPropertyName$();
var source=e.getSource$();
switch (propertyName) {
case "model":
var sb=this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getVerticalScrollBar$();
var oldModel=e.getOldValue$();
var cl=null;
if (source === sb ) {
cl=this.b$['swingjs.plaf.JSScrollPaneUI'].vsbChangeListener;
} else if (source === this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getHorizontalScrollBar$() ) {
sb=this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getHorizontalScrollBar$();
cl=this.b$['swingjs.plaf.JSScrollPaneUI'].hsbChangeListener;
}if (cl != null ) {
if (oldModel != null ) {
oldModel.removeChangeListener$javax_swing_event_ChangeListener(cl);
}if (sb.getModel$() != null ) {
sb.getModel$().addChangeListener$javax_swing_event_ChangeListener(cl);
}}break;
case "componentOrientation":
if (source === this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getHorizontalScrollBar$() ) {
var hsb=this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getHorizontalScrollBar$();
var viewport=this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getViewport$();
var p=viewport.getViewPosition$();
if (this.b$['swingjs.plaf.JSScrollPaneUI'].scrollpane.getComponentOrientation$().isLeftToRight$()) {
p.x=hsb.getValue$();
} else {
p.x=viewport.getViewSize$().width - viewport.getExtentSize$().width - hsb.getValue$() ;
}viewport.setViewPosition$java_awt_Point(p);
}break;
}
}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'java.awt.Component','java.awt.Dimension','swingjs.plaf.JSComponentUI','java.awt.JSComponent','swingjs.api.js.JSInterface','swingjs.JSToolkit','java.awt.Toolkit',['swingjs.plaf.JSSplitPaneUI','.SplitPaneDivider'],'javax.swing.LookAndFeel','javax.swing.UIManager',['swingjs.plaf.JSSplitPaneUI','.Handler'],'java.awt.Color','javax.swing.JLabel',['swingjs.plaf.JSSplitPaneUI','.SplitPaneLayoutManager']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSSplitPaneUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.$classes$=[['PropertyHandler',1],['FocusHandler',1],['KeyboardUpLeftHandler',1],['KeyboardDownRightHandler',1],['KeyboardHomeHandler',1],['KeyboardEndHandler',1],['KeyboardResizeToggleHandler',1],['SplitPaneLayoutManager',1],['BasicVerticalLayoutManager',1],['Handler',2],['SplitPaneDivider',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keepHidden=false;
},1);

C$.$fields$=[['Z',['draggingHW','continuousLayout','dividerKeyboardResize','dividerLocationIsSet','keepHidden','painted','ignoreDividerLocationChange','isHorizontal','draggable'],'I',['dividerSize','beginDragDividerLocation','orientation','lastDragLocation','pressedLocation'],'O',['splitPane','javax.swing.JSplitPane','layoutManager','swingjs.plaf.JSSplitPaneUI.SplitPaneLayoutManager','divider','swingjs.plaf.JSSplitPaneUI.SplitPaneDivider','propertyChangeListener','java.beans.PropertyChangeListener','handler','swingjs.plaf.JSSplitPaneUI.Handler','nonContinuousLayoutDivider','java.awt.Component','cursor','java.awt.Cursor','xyev','java.lang.Object','dividerColor','java.awt.Color']]
,['I',['KEYBOARD_DIVIDER_MOVE_OFFSET']]]

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.splitPane=jc;
this.isHorizontal=(this.splitPane.getOrientation$() == 1);
this.dividerLocationIsSet=false;
this.dividerKeyboardResize=false;
this.keepHidden=false;
this.installDefaults$();
this.installListeners$();
this.setLastDragLocation$I(-1);
});

Clazz.newMeth(C$, 'fHandleDrag$O$I',  function (xyev, type) {
if (!this.splitPane.isEnabled$()) {
$I$(5).setCursor(null);
this.divider.setCursor$java_awt_Cursor(null);
return;
}this.divider.setCursor$java_awt_Cursor(this.getCursor$());
switch (type) {
case 503:
return;
case 501:
this.xyev=xyev;
this.pressedLocation=this.splitPane.getDividerLocation$();
$I$(5,"setCursor",[$I$(6).getCursorName$java_awt_Cursor(this.cursor)]);
return;
case 506:
var d=this.pressedLocation + ((this.isHorizontal ? xyev.dx : xyev.dy) ||0);
var max=this.getMaximumDividerLocation$javax_swing_JSplitPane(this.splitPane);
var min=this.getMinimumDividerLocation$javax_swing_JSplitPane(this.splitPane);
d=Math.max(min, Math.min(max, d));
this.splitPane.setDividerLocation$I(d);
return;
case 502:
$I$(5).setCursor(null);
return;
}
});

Clazz.newMeth(C$, 'getCursor$',  function () {
this.isHorizontal=(this.splitPane.getOrientation$() == 1);
if (this.cursor == null ) {
this.cursor=$I$(7).getDefaultToolkit$().createCustomCursor$java_awt_Image$java_awt_Point$S(null, null, this.isHorizontal ? "col-resize" : "row-resize");
}return this.cursor;
});

Clazz.newMeth(C$, 'setupDivider',  function () {
this.divider=Clazz.new_($I$(8,1).c$$swingjs_plaf_JSSplitPaneUI,[this, null, this]);
this.dividerColor=this.divider.getBackground$();
p$1.enableDragging.apply(this, []);
this.divider.setCursor$java_awt_Cursor(this.getCursor$());
}, p$1);

Clazz.newMeth(C$, 'enableDragging',  function () {
var fDrag=null;
var me=this;

fDrag = [function(xyev,type){me.fHandleDrag$O$I(xyev, type)}];
this.setDraggable$swingjs_api_js_JSFunction(fDrag);
}, p$1);

Clazz.newMeth(C$, 'setDraggable$swingjs_api_js_JSFunction',  function (f) {
this.draggable=true;
this.J2S.setDraggable(this.divider.秘getUI$().getDOMNode$(), f);
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
$I$(9).installBorder$javax_swing_JComponent$S(this.splitPane, "SplitPane.border");
$I$(9).installColors$javax_swing_JComponent$S$S(this.splitPane, "SplitPane.background", "SplitPane.foreground");
$I$(9).installProperty$javax_swing_JComponent$S$O(this.splitPane, "opaque", Boolean.TRUE);
if (this.divider == null ) {
p$1.setupDivider.apply(this, []);
}this.setOrientation$I(this.splitPane.getOrientation$());
$I$(9,"installProperty$javax_swing_JComponent$S$O",[this.splitPane, "dividerSize", $I$(10).get$O("SplitPane.dividerSize")]);
this.dividerSize=this.splitPane.getDividerSize$();
this.splitPane.add$java_awt_Component$O(this.divider, "divider");
this.setContinuousLayout$Z(this.splitPane.isContinuousLayout$());
this.resetLayoutManager$();
if (this.nonContinuousLayoutDivider == null ) {
this.setNonContinuousLayoutDivider$java_awt_Component$Z(this.createDefaultNonContinuousLayoutDivider$(), true);
} else {
this.setNonContinuousLayoutDivider$java_awt_Component$Z(this.nonContinuousLayoutDivider, true);
}});

Clazz.newMeth(C$, 'installListeners$',  function () {
if ((this.propertyChangeListener=this.createPropertyChangeListener$()) != null ) {
this.splitPane.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
this.uninstallListeners$();
this.uninstallDefaults$();
this.dividerLocationIsSet=false;
this.dividerKeyboardResize=false;
this.splitPane=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
if (this.splitPane.getLayout$() === this.layoutManager ) {
this.splitPane.setLayout$java_awt_LayoutManager(null);
}if (this.nonContinuousLayoutDivider != null ) {
this.splitPane.remove$java_awt_Component(this.nonContinuousLayoutDivider);
}$I$(9).uninstallBorder$javax_swing_JComponent(this.splitPane);
this.splitPane.remove$java_awt_Component(this.divider);
this.divider=null;
this.nonContinuousLayoutDivider=null;
this.setNonContinuousLayoutDivider$java_awt_Component(null);
});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
if (this.propertyChangeListener != null ) {
this.splitPane.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.propertyChangeListener=null;
}this.handler=null;
});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'getHandler$',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(11,1),[this, null]);
}return this.handler;
});

Clazz.newMeth(C$, 'createFocusListener$',  function () {
return this.getHandler$();
});

Clazz.newMeth(C$, 'getOrientation$',  function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setOrientation$I',  function (orientation) {
this.orientation=orientation;
});

Clazz.newMeth(C$, 'isContinuousLayout$',  function () {
return this.continuousLayout;
});

Clazz.newMeth(C$, 'setContinuousLayout$Z',  function (b) {
this.continuousLayout=b;
});

Clazz.newMeth(C$, 'getLastDragLocation$',  function () {
return this.lastDragLocation;
});

Clazz.newMeth(C$, 'setLastDragLocation$I',  function (l) {
this.lastDragLocation=l;
});

Clazz.newMeth(C$, 'getKeyboardMoveIncrement$',  function () {
return C$.KEYBOARD_DIVIDER_MOVE_OFFSET;
});

Clazz.newMeth(C$, 'getDivider$',  function () {
return this.divider;
});

Clazz.newMeth(C$, 'createDefaultNonContinuousLayoutDivider$',  function () {
return ((P$.JSSplitPaneUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSSplitPaneUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JLabel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
{
this.setOpaque$Z(true);
this.setBackground$java_awt_Color($I$(12).BLACK);
}
},1);
})()
), Clazz.new_($I$(13,1).c$$S,[this, null, " "],P$.JSSplitPaneUI$1));
});

Clazz.newMeth(C$, 'setNonContinuousLayoutDivider$java_awt_Component',  function (newDivider) {
this.setNonContinuousLayoutDivider$java_awt_Component$Z(newDivider, true);
});

Clazz.newMeth(C$, 'setNonContinuousLayoutDivider$java_awt_Component$Z',  function (newDivider, rememberSizes) {
if (this.nonContinuousLayoutDivider != null  && this.splitPane != null  ) {
this.splitPane.remove$java_awt_Component(this.nonContinuousLayoutDivider);
}this.nonContinuousLayoutDivider=newDivider;
});

Clazz.newMeth(C$, 'getNonContinuousLayoutDivider$',  function () {
return this.nonContinuousLayoutDivider;
});

Clazz.newMeth(C$, 'getSplitPane$',  function () {
return this.splitPane;
});

Clazz.newMeth(C$, 'resetToPreferredSizes$javax_swing_JSplitPane',  function (jc) {
if (this.splitPane != null ) {
this.layoutManager.resetToPreferredSizes$();
this.splitPane.revalidate$();
this.splitPane.秘repaint$();
}});

Clazz.newMeth(C$, 'setDividerLocation$javax_swing_JSplitPane$I',  function (jc, location) {
if (this.ignoreDividerLocationChange) {
this.ignoreDividerLocationChange=false;
return;
}this.dividerLocationIsSet=true;
this.splitPane.revalidate$();
this.splitPane.秘repaint$();
if (this.keepHidden) {
var insets=this.splitPane.getInsets$();
var orientation=this.splitPane.getOrientation$();
if ((orientation == 0 && location != insets.top  && location != this.splitPane.getHeight$() - this.divider.getHeight$() - insets.top  ) || (orientation == 1 && location != insets.left  && location != this.splitPane.getWidth$() - this.divider.getWidth$() - insets.left  ) ) {
this.setKeepHidden$Z(false);
}}});

Clazz.newMeth(C$, 'getDividerLocation$javax_swing_JSplitPane',  function (jc) {
if (this.orientation == 1) return this.divider.getLocation$().x;
return this.divider.getLocation$().y;
});

Clazz.newMeth(C$, 'getMinimumDividerLocation$javax_swing_JSplitPane',  function (jc) {
var minLoc=0;
var leftC=this.splitPane.getLeftComponent$();
if ((leftC != null ) && (leftC.isVisible$()) ) {
var insets=this.splitPane.getInsets$();
var minSize=leftC.getMinimumSize$();
if (this.orientation == 1) {
minLoc=minSize.width;
} else {
minLoc=minSize.height;
}if (insets != null ) {
if (this.orientation == 1) {
minLoc+=insets.left;
} else {
minLoc+=insets.top;
}}}return minLoc;
});

Clazz.newMeth(C$, 'getMaximumDividerLocation$javax_swing_JSplitPane',  function (jc) {
var splitPaneSize=this.splitPane.getSize$();
var maxLoc=0;
var rightC=this.splitPane.getRightComponent$();
if (rightC != null ) {
var insets=this.splitPane.getInsets$();
var minSize=Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
if (rightC.isVisible$()) {
minSize=rightC.getMinimumSize$();
}if (this.orientation == 1) {
maxLoc=splitPaneSize.width - minSize.width;
} else {
maxLoc=splitPaneSize.height - minSize.height;
}maxLoc-=this.dividerSize;
if (insets != null ) {
if (this.orientation == 1) {
maxLoc-=insets.right;
} else {
maxLoc-=insets.top;
}}}return Math.max(this.getMinimumDividerLocation$javax_swing_JSplitPane(this.splitPane), maxLoc);
});

Clazz.newMeth(C$, 'finishedPaintingChildren$javax_swing_JSplitPane$java_awt_Graphics',  function (jc, g) {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, jc) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, jc]);
if (!this.painted && this.splitPane.getDividerLocation$() < 0 ) {
this.ignoreDividerLocationChange=true;
this.splitPane.setDividerLocation$I(this.getDividerLocation$javax_swing_JSplitPane(this.splitPane));
}this.painted=true;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
if (this.splitPane != null ) return this.layoutManager.preferredLayoutSize$java_awt_Container(this.splitPane);
return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (jc) {
if (this.splitPane != null ) return this.layoutManager.minimumLayoutSize$java_awt_Container(this.splitPane);
return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
if (this.splitPane != null ) return this.layoutManager.maximumLayoutSize$java_awt_Container(this.splitPane);
return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getInsets$javax_swing_JComponent',  function (jc) {
return null;
});

Clazz.newMeth(C$, 'resetLayoutManager$',  function () {
if (this.orientation == 1) {
this.layoutManager=Clazz.new_($I$(14,1).c$$I,[this, null, 0]);
} else {
this.layoutManager=Clazz.new_($I$(14,1).c$$I,[this, null, 1]);
}this.splitPane.setLayout$java_awt_LayoutManager(this.layoutManager);
this.layoutManager.updateComponents$();
this.splitPane.revalidate$();
this.splitPane.秘repaint$();
});

Clazz.newMeth(C$, 'setKeepHidden$Z',  function (keepHidden) {
this.keepHidden=keepHidden;
});

Clazz.newMeth(C$, 'getKeepHidden$',  function () {
return this.keepHidden;
});

Clazz.newMeth(C$, 'startDragging$',  function () {
this.beginDragDividerLocation=this.getDividerLocation$javax_swing_JSplitPane(this.splitPane);
this.draggingHW=true;
if (this.orientation == 1) {
this.setLastDragLocation$I(this.divider.getBounds$().x);
this.dividerSize=this.divider.getSize$().width;
if (!this.isContinuousLayout$() && this.draggingHW ) {
this.nonContinuousLayoutDivider.setBounds$I$I$I$I(this.getLastDragLocation$(), 0, this.dividerSize, this.splitPane.getHeight$());
}} else {
this.setLastDragLocation$I(this.divider.getBounds$().y);
this.dividerSize=this.divider.getSize$().height;
if (!this.isContinuousLayout$() && this.draggingHW ) {
this.nonContinuousLayoutDivider.setBounds$I$I$I$I(0, this.getLastDragLocation$(), this.splitPane.getWidth$(), this.dividerSize);
}}});

Clazz.newMeth(C$, 'dragDividerTo$I',  function (location) {
if (this.getLastDragLocation$() != location) {
if (this.isContinuousLayout$()) {
this.splitPane.setDividerLocation$I(location);
this.setLastDragLocation$I(location);
} else {
this.setLastDragLocation$I(location);
if (this.orientation == 1) {
if (this.draggingHW) {
this.nonContinuousLayoutDivider.setLocation$I$I(this.getLastDragLocation$(), 0);
}} else {
if (this.draggingHW) {
this.nonContinuousLayoutDivider.setLocation$I$I(0, this.getLastDragLocation$());
}}}}});

Clazz.newMeth(C$, 'finishDraggingTo$I',  function (location) {
this.dragDividerTo$I(location);
this.setLastDragLocation$I(-1);
if (!this.isContinuousLayout$()) {
if (this.draggingHW) {
if (this.orientation == 1) {
this.nonContinuousLayoutDivider.setLocation$I$I(-this.dividerSize, 0);
} else {
this.nonContinuousLayoutDivider.setLocation$I$I(0, -this.dividerSize);
}this.splitPane.remove$java_awt_Component(this.nonContinuousLayoutDivider);
}this.splitPane.setDividerLocation$I(location);
}});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [b]);
this.splitPane.setCursor$java_awt_Cursor(b ? this.getCursor$() : null);
this.divider.setCursor$java_awt_Cursor(b ? this.getCursor$() : null);
});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode',  function (node) {
if (!this.isDisposed) return;
C$.superclazz.prototype.undisposeUI$swingjs_api_js_DOMNode.apply(this, [node]);
p$1.enableDragging.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.KEYBOARD_DIVIDER_MOVE_OFFSET=3;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "PropertyHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSSplitPaneUI'].getHandler$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "FocusHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.FocusAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (ev) {
this.b$['swingjs.plaf.JSSplitPaneUI'].getHandler$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], []).focusGained$java_awt_event_FocusEvent(ev);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (ev) {
this.b$['swingjs.plaf.JSSplitPaneUI'].getHandler$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], []).focusLost$java_awt_event_FocusEvent(ev);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "KeyboardUpLeftHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ev) {
if (this.b$['swingjs.plaf.JSSplitPaneUI'].dividerKeyboardResize) {
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.setDividerLocation$I(Math.max(0, this.b$['swingjs.plaf.JSSplitPaneUI'].getDividerLocation$javax_swing_JSplitPane.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane]) - this.b$['swingjs.plaf.JSSplitPaneUI'].getKeyboardMoveIncrement$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [])));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "KeyboardDownRightHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ev) {
if (this.b$['swingjs.plaf.JSSplitPaneUI'].dividerKeyboardResize) {
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.setDividerLocation$I(this.b$['swingjs.plaf.JSSplitPaneUI'].getDividerLocation$javax_swing_JSplitPane.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane]) + this.b$['swingjs.plaf.JSSplitPaneUI'].getKeyboardMoveIncrement$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], []));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "KeyboardHomeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ev) {
if (this.b$['swingjs.plaf.JSSplitPaneUI'].dividerKeyboardResize) {
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.setDividerLocation$I(0);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "KeyboardEndHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ev) {
if (this.b$['swingjs.plaf.JSSplitPaneUI'].dividerKeyboardResize) {
var insets=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getInsets$();
var bottomI=(insets != null ) ? insets.bottom : 0;
var rightI=(insets != null ) ? insets.right : 0;
if (this.b$['swingjs.plaf.JSSplitPaneUI'].orientation == 0) {
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.setDividerLocation$I(this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getHeight$() - bottomI);
} else {
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.setDividerLocation$I(this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getWidth$() - rightI);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "KeyboardResizeToggleHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (ev) {
if (!this.b$['swingjs.plaf.JSSplitPaneUI'].dividerKeyboardResize) {
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.requestFocus$();
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "SplitPaneLayoutManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.LayoutManager2');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['doReset'],'I',['lastSplitPaneSize','axis'],'O',['sizes','int[]','components','java.awt.Component[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (axis) {
;C$.$init$.apply(this);
this.axis=axis;
this.components=Clazz.array($I$(1), [3]);
this.sizes=Clazz.array(Integer.TYPE, [3]);
}, 1);

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (container) {
var containerSize=container.getSize$();
if (containerSize.height <= 0 || containerSize.width <= 0 ) {
this.lastSplitPaneSize=0;
return;
}var spDividerLocation=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getDividerLocation$();
var insets=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getInsets$();
var availableSize=this.getAvailableSize$java_awt_Dimension$java_awt_Insets(containerSize, insets);
var dOffset=this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, true);
var dSize=(this.components[2] == null ) ? null : this.components[2].getPreferredSize$();
if ((this.doReset && !this.b$['swingjs.plaf.JSSplitPaneUI'].dividerLocationIsSet ) || spDividerLocation < 0 ) {
this.resetToPreferredSizes$I(availableSize);
} else if (this.lastSplitPaneSize <= 0 || availableSize == this.lastSplitPaneSize  || !this.b$['swingjs.plaf.JSSplitPaneUI'].painted  || (dSize != null  && this.getSizeForPrimaryAxis$java_awt_Dimension(dSize) != this.sizes[2] ) ) {
if (dSize != null ) {
this.sizes[2]=this.getSizeForPrimaryAxis$java_awt_Dimension(dSize);
} else {
this.sizes[2]=0;
}this.setDividerLocation$I$I(spDividerLocation - dOffset, availableSize);
this.b$['swingjs.plaf.JSSplitPaneUI'].dividerLocationIsSet=false;
} else if (availableSize != this.lastSplitPaneSize) {
this.distributeSpace$I$Z$IA(availableSize - this.lastSplitPaneSize, this.b$['swingjs.plaf.JSSplitPaneUI'].getKeepHidden$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], []), null);
}this.doReset=false;
this.b$['swingjs.plaf.JSSplitPaneUI'].dividerLocationIsSet=false;
this.lastSplitPaneSize=availableSize;
var nextLocation=this.getInitialLocation$java_awt_Insets(insets);
var counter=0;
while (counter < 3){
if (this.components[counter] != null  && this.components[counter].isVisible$() ) {
this.setComponentToSize$java_awt_Component$I$I$java_awt_Insets$java_awt_Dimension(this.components[counter], this.sizes[counter], nextLocation, insets, containerSize);
nextLocation+=this.sizes[counter];
}switch (counter) {
case 0:
counter=2;
break;
case 2:
counter=1;
break;
case 1:
counter=3;
break;
}
}
if (this.b$['swingjs.plaf.JSSplitPaneUI'].painted) {
var newLocation=this.b$['swingjs.plaf.JSSplitPaneUI'].getDividerLocation$javax_swing_JSplitPane.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane]);
if (newLocation != (spDividerLocation - dOffset)) {
var lastLocation=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getLastDividerLocation$();
this.b$['swingjs.plaf.JSSplitPaneUI'].ignoreDividerLocationChange=true;
try {
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.setDividerLocation$I(newLocation);
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.setLastDividerLocation$I(lastLocation);
} finally {
this.b$['swingjs.plaf.JSSplitPaneUI'].ignoreDividerLocationChange=false;
}
}}});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (place, component) {
var isValid=true;
if (place != null ) {
if (place.equals$O("divider")) {
this.components[2]=component;
this.sizes[2]=this.getSizeForPrimaryAxis$java_awt_Dimension(component.getPreferredSize$());
} else if (place.equals$O("left") || place.equals$O("top") ) {
this.components[0]=component;
this.sizes[0]=0;
} else if (place.equals$O("right") || place.equals$O("bottom") ) {
this.components[1]=component;
this.sizes[1]=0;
} else if (!place.equals$O("nonContinuousDivider")) isValid=false;
} else {
isValid=false;
}if (!isValid) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot add to layout: " + "unknown constraint: " + place ]);
this.doReset=true;
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (container) {
var minPrimary=0;
var minSecondary=0;
var insets=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getInsets$();
for (var counter=0; counter < 3; counter++) {
if (this.components[counter] != null ) {
var minSize=this.components[counter].getMinimumSize$();
var secSize=this.getSizeForSecondaryAxis$java_awt_Dimension(minSize);
minPrimary+=this.getSizeForPrimaryAxis$java_awt_Dimension(minSize);
if (secSize > minSecondary) minSecondary=secSize;
}}
if (insets != null ) {
minPrimary+=this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, true) + this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, false);
minSecondary+=this.getSizeForSecondaryAxis$java_awt_Insets$Z(insets, true) + this.getSizeForSecondaryAxis$java_awt_Insets$Z(insets, false);
}return (this.axis == 0 ? Clazz.new_($I$(2,1).c$$I$I,[minPrimary, minSecondary]) : Clazz.new_($I$(2,1).c$$I$I,[minSecondary, minPrimary]));
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (container) {
var prePrimary=0;
var preSecondary=0;
var insets=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getInsets$();
for (var counter=0; counter < 3; counter++) {
if (this.components[counter] != null ) {
var preSize=this.components[counter].getPreferredSize$();
var secSize=this.getSizeForSecondaryAxis$java_awt_Dimension(preSize);
prePrimary+=this.getSizeForPrimaryAxis$java_awt_Dimension(preSize);
if (secSize > preSecondary) preSecondary=secSize;
}}
if (insets != null ) {
prePrimary+=this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, true) + this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, false);
preSecondary+=this.getSizeForSecondaryAxis$java_awt_Insets$Z(insets, true) + this.getSizeForSecondaryAxis$java_awt_Insets$Z(insets, false);
}return (this.axis == 0 ? Clazz.new_($I$(2,1).c$$I$I,[prePrimary, preSecondary]) : Clazz.new_($I$(2,1).c$$I$I,[preSecondary, prePrimary]));
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (component) {
for (var counter=0; counter < 3; counter++) {
if (this.components[counter] === component ) {
this.components[counter]=null;
this.sizes[counter]=0;
this.doReset=true;
}}
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O',  function (comp, constraints) {
if ((constraints == null ) || (Clazz.instanceOf(constraints, "java.lang.String")) ) {
this.addLayoutComponent$S$java_awt_Component(constraints, comp);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot add to layout: constraint must be a string (or null)"]);
}});

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container',  function (target) {
return 0.0;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container',  function (target) {
return 0.0;
});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container',  function (c) {
});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container',  function (target) {
return $I$(3).ANY_SIZE;
});

Clazz.newMeth(C$, 'resetToPreferredSizes$',  function () {
this.doReset=true;
});

Clazz.newMeth(C$, 'resetSizeAt$I',  function (index) {
this.sizes[index]=0;
this.doReset=true;
});

Clazz.newMeth(C$, 'setSizes$IA',  function (newSizes) {
System.arraycopy$O$I$O$I$I(newSizes, 0, this.sizes, 0, 3);
});

Clazz.newMeth(C$, 'getSizes$',  function () {
var retSizes=Clazz.array(Integer.TYPE, [3]);
System.arraycopy$O$I$O$I$I(this.sizes, 0, retSizes, 0, 3);
return retSizes;
});

Clazz.newMeth(C$, 'getPreferredSizeOfComponent$java_awt_Component',  function (c) {
return c == null  ? 0 : this.getSizeForPrimaryAxis$java_awt_Dimension(c.getPreferredSize$());
});

Clazz.newMeth(C$, 'getMinimumSizeOfComponent$java_awt_Component',  function (c) {
return c == null  ? 0 : this.getSizeForPrimaryAxis$java_awt_Dimension(c.getMinimumSize$());
});

Clazz.newMeth(C$, 'getSizeOfComponent$java_awt_Component',  function (c) {
return c == null  ? 0 : this.getSizeForPrimaryAxis$java_awt_Dimension(c.getSize$());
});

Clazz.newMeth(C$, 'getAvailableSize$java_awt_Dimension$java_awt_Insets',  function (containerSize, insets) {
if (insets == null ) return this.getSizeForPrimaryAxis$java_awt_Dimension(containerSize);
return (this.getSizeForPrimaryAxis$java_awt_Dimension(containerSize) - (this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, true) + this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, false)));
});

Clazz.newMeth(C$, 'getInitialLocation$java_awt_Insets',  function (insets) {
if (insets != null ) return this.getSizeForPrimaryAxis$java_awt_Insets$Z(insets, true);
return 0;
});

Clazz.newMeth(C$, 'setComponentToSize$java_awt_Component$I$I$java_awt_Insets$java_awt_Dimension',  function (c, size, location, insets, containerSize) {
if (insets != null ) {
if (this.axis == 0) {
c.setBounds$I$I$I$I(location, insets.top, size, containerSize.height - (insets.top + insets.bottom));
} else {
c.setBounds$I$I$I$I(insets.left, location, containerSize.width - (insets.left + insets.right), size);
}} else {
if (this.axis == 0) {
c.setBounds$I$I$I$I(location, 0, size, containerSize.height);
} else {
c.setBounds$I$I$I$I(0, location, containerSize.width, size);
}}});

Clazz.newMeth(C$, 'getSizeForPrimaryAxis$java_awt_Dimension',  function (size) {
return (this.axis == 0 ? size.width : size.height);
});

Clazz.newMeth(C$, 'getSizeForSecondaryAxis$java_awt_Dimension',  function (size) {
return (this.axis == 1 ? size.width : size.height);
});

Clazz.newMeth(C$, 'getSizeForPrimaryAxis$java_awt_Insets$Z',  function (insets, isTop) {
return (this.axis == 0 ? (isTop ? insets.left : insets.right) : isTop ? insets.top : insets.bottom);
});

Clazz.newMeth(C$, 'getSizeForSecondaryAxis$java_awt_Insets$Z',  function (insets, isTop) {
return (this.axis == 0 ? (isTop ? insets.top : insets.bottom) : isTop ? insets.left : insets.right);
});

Clazz.newMeth(C$, 'updateComponents$',  function () {
var comp;
comp=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getLeftComponent$();
if (this.components[0] !== comp ) {
this.components[0]=comp;
if (comp == null ) {
this.sizes[0]=0;
} else {
this.sizes[0]=-1;
}}comp=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getRightComponent$();
if (this.components[1] !== comp ) {
this.components[1]=comp;
if (comp == null ) {
this.sizes[1]=0;
} else {
this.sizes[1]=-1;
}}var children=$I$(4).秘getChildArray$java_awt_Container(this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane);
var oldDivider=this.components[2];
this.components[2]=null;
for (var counter=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getComponentCount$(); counter >= 0; counter--) {
if (children[counter] !== this.components[0]  && children[counter] !== this.components[1]   && children[counter] !== this.b$['swingjs.plaf.JSSplitPaneUI'].nonContinuousLayoutDivider  ) {
if (oldDivider !== children[counter] ) {
this.components[2]=children[counter];
} else {
this.components[2]=oldDivider;
}break;
}}
if (this.components[2] == null ) {
this.sizes[2]=0;
} else {
this.sizes[2]=this.getSizeForPrimaryAxis$java_awt_Dimension(this.components[2].getPreferredSize$());
}});

Clazz.newMeth(C$, 'setDividerLocation$I$I',  function (leftSize, availableSize) {
var lValid=(this.components[0] != null  && this.components[0].isVisible$() );
var rValid=(this.components[1] != null  && this.components[1].isVisible$() );
var dValid=(this.components[2] != null  && this.components[2].isVisible$() );
var max=availableSize;
if (dValid) {
max-=this.sizes[2];
}leftSize=Math.max(0, Math.min(leftSize, max));
if (lValid) {
if (rValid) {
this.sizes[0]=leftSize;
this.sizes[1]=max - leftSize;
} else {
this.sizes[0]=max;
this.sizes[1]=0;
}} else if (rValid) {
this.sizes[1]=max;
this.sizes[0]=0;
}});

Clazz.newMeth(C$, 'getPreferredSizes$',  function () {
var retValue=Clazz.array(Integer.TYPE, [3]);
for (var counter=0; counter < 3; counter++) {
if (this.components[counter] != null  && this.components[counter].isVisible$() ) {
retValue[counter]=this.getPreferredSizeOfComponent$java_awt_Component(this.components[counter]);
} else {
retValue[counter]=-1;
}}
return retValue;
});

Clazz.newMeth(C$, 'getMinimumSizes$',  function () {
var retValue=Clazz.array(Integer.TYPE, [3]);
for (var counter=0; counter < 2; counter++) {
if (this.components[counter] != null  && this.components[counter].isVisible$() ) {
retValue[counter]=this.getMinimumSizeOfComponent$java_awt_Component(this.components[counter]);
} else {
retValue[counter]=-1;
}}
retValue[2]=(this.components[2] != null ) ? this.getMinimumSizeOfComponent$java_awt_Component(this.components[2]) : -1;
return retValue;
});

Clazz.newMeth(C$, 'resetToPreferredSizes$I',  function (availableSize) {
var testSizes=this.getPreferredSizes$();
var totalSize=0;
for (var counter=0; counter < 3; counter++) {
if (testSizes[counter] != -1) {
totalSize+=testSizes[counter];
}}
if (totalSize > availableSize) {
testSizes=this.getMinimumSizes$();
totalSize=0;
for (var counter=0; counter < 3; counter++) {
if (testSizes[counter] != -1) {
totalSize+=testSizes[counter];
}}
}this.setSizes$IA(testSizes);
this.distributeSpace$I$Z$IA(availableSize - totalSize, false, testSizes);
});

Clazz.newMeth(C$, 'distributeSpace$I$Z$IA',  function (space, keepHidden, prefSizes) {
var lValid=(this.components[0] != null  && this.components[0].isVisible$() );
var rValid=(this.components[1] != null  && this.components[1].isVisible$() );
if (keepHidden) {
if (lValid && this.getSizeForPrimaryAxis$java_awt_Dimension(this.components[0].getSize$()) == 0 ) {
lValid=false;
if (rValid && this.getSizeForPrimaryAxis$java_awt_Dimension(this.components[1].getSize$()) == 0 ) {
lValid=true;
}} else if (rValid && this.getSizeForPrimaryAxis$java_awt_Dimension(this.components[1].getSize$()) == 0 ) {
rValid=false;
}}var lMin=this.getMinimumSizeOfComponent$java_awt_Component(this.components[0]);
var rMin=this.getMinimumSizeOfComponent$java_awt_Component(this.components[1]);
if (lValid && rValid ) {
var weight=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getResizeWeight$();
var lExtra=((weight * space)|0);
var rExtra=(space - lExtra);
this.sizes[0]+=lExtra;
this.sizes[1]+=rExtra;
var lMinValid=(this.sizes[0] >= lMin);
var rMinValid=(this.sizes[1] >= rMin);
if (prefSizes != null  && (!lMinValid || !rMinValid ) ) {
this.distributeSpace$I$Z$IA(space, keepHidden, null);
return;
}if (!lMinValid && !rMinValid ) {
if (this.sizes[0] < 0) {
this.sizes[1]+=this.sizes[0];
this.sizes[0]=0;
} else if (this.sizes[1] < 0) {
this.sizes[0]+=this.sizes[1];
this.sizes[1]=0;
}} else if (!lMinValid) {
if (this.sizes[1] - (lMin - this.sizes[0]) < rMin) {
if (this.sizes[0] < 0) {
this.sizes[1]+=this.sizes[0];
this.sizes[0]=0;
}} else {
this.sizes[1]-=(lMin - this.sizes[0]);
this.sizes[0]=lMin;
}} else if (!rMinValid) {
if (this.sizes[0] - (rMin - this.sizes[1]) < lMin) {
if (this.sizes[1] < 0) {
this.sizes[0]+=this.sizes[1];
this.sizes[1]=0;
}} else {
this.sizes[0]-=(rMin - this.sizes[1]);
this.sizes[1]=rMin;
}}if (this.sizes[0] < 0) {
this.sizes[0]=0;
}if (this.sizes[1] < 0) {
this.sizes[1]=0;
}} else if (lValid) {
this.sizes[0]=Math.max(0, this.sizes[0] + space);
} else if (rValid) {
this.sizes[1]=Math.max(0, this.sizes[1] + space);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "BasicVerticalLayoutManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['swingjs.plaf.JSSplitPaneUI','.SplitPaneLayoutManager']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[1]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.FocusListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getSource$() === this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane ) {
var changeName=e.getPropertyName$();
if (changeName == "orientation") {
this.b$['swingjs.plaf.JSSplitPaneUI'].orientation=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getOrientation$();
this.b$['swingjs.plaf.JSSplitPaneUI'].resetLayoutManager$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], []);
} else if (changeName == "continuousLayout") {
this.b$['swingjs.plaf.JSSplitPaneUI'].setContinuousLayout$Z.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.isContinuousLayout$()]);
if (!this.b$['swingjs.plaf.JSSplitPaneUI'].isContinuousLayout$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [])) {
if (this.b$['swingjs.plaf.JSSplitPaneUI'].nonContinuousLayoutDivider == null ) {
this.b$['swingjs.plaf.JSSplitPaneUI'].setNonContinuousLayoutDivider$java_awt_Component$Z.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [this.b$['swingjs.plaf.JSSplitPaneUI'].createDefaultNonContinuousLayoutDivider$.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], []), true]);
} else if (this.b$['swingjs.plaf.JSSplitPaneUI'].nonContinuousLayoutDivider.getParent$() == null ) {
this.b$['swingjs.plaf.JSSplitPaneUI'].setNonContinuousLayoutDivider$java_awt_Component$Z.apply(this.b$['swingjs.plaf.JSSplitPaneUI'], [this.b$['swingjs.plaf.JSSplitPaneUI'].nonContinuousLayoutDivider, true]);
}}} else if (changeName == "dividerSize") {
this.b$['swingjs.plaf.JSSplitPaneUI'].dividerSize=this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.getDividerSize$();
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.revalidate$();
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.秘repaint$();
}}});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (ev) {
this.b$['swingjs.plaf.JSSplitPaneUI'].dividerKeyboardResize=true;
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.秘repaint$();
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (ev) {
this.b$['swingjs.plaf.JSSplitPaneUI'].dividerKeyboardResize=false;
this.b$['swingjs.plaf.JSSplitPaneUI'].splitPane.秘repaint$();
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSSplitPaneUI, "SplitPaneDivider", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['paneui','swingjs.plaf.JSSplitPaneUI']]]

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return this.getPreferredSize$();
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var d=this.paneui.splitPane.getDividerSize$();
return (this.b$['swingjs.plaf.JSSplitPaneUI'].orientation == 1 ? Clazz.new_($I$(2,1).c$$I$I,[d, 1]) : Clazz.new_($I$(2,1).c$$I$I,[1, d]));
});

Clazz.newMeth(C$, 'c$$swingjs_plaf_JSSplitPaneUI',  function (ui) {
;C$.superclazz.c$$S.apply(this,[" "]);C$.$init$.apply(this);
this.paneui=ui;
this.setOpaque$Z(true);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

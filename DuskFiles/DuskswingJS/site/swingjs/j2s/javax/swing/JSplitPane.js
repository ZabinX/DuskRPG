(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.JButton','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSplitPane", null, 'javax.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dividerSizeSet=false;
},1);

C$.$fields$=[['Z',['continuousLayout','dividerSizeSet','oneTouchExpandable','oneTouchExpandableSet'],'D',['resizeWeight'],'I',['orientation','dividerSize','lastDividerLocation','dividerLocation'],'O',['leftComponent','java.awt.Component','+rightComponent']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$Z$java_awt_Component$java_awt_Component.apply(this, [1, false, Clazz.new_([$I$(2).getString$O("SplitPane.leftButtonText")],$I$(1,1).c$$S), Clazz.new_([$I$(2).getString$O("SplitPane.rightButtonText")],$I$(1,1).c$$S)]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (newOrientation) {
C$.c$$I$Z.apply(this, [newOrientation, false]);
}, 1);

Clazz.newMeth(C$, 'c$$I$Z',  function (newOrientation, newContinuousLayout) {
C$.c$$I$Z$java_awt_Component$java_awt_Component.apply(this, [newOrientation, newContinuousLayout, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Component$java_awt_Component',  function (newOrientation, newLeftComponent, newRightComponent) {
C$.c$$I$Z$java_awt_Component$java_awt_Component.apply(this, [newOrientation, false, newLeftComponent, newRightComponent]);
}, 1);

Clazz.newMeth(C$, 'c$$I$Z$java_awt_Component$java_awt_Component',  function (newOrientation, newContinuousLayout, newLeftComponent, newRightComponent) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.dividerLocation=-1;
this.setLayout$java_awt_LayoutManager(null);
this.setUIProperty$S$O("opaque", Boolean.TRUE);
this.orientation=newOrientation;
if (this.orientation != 1 && this.orientation != 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot create JSplitPane, orientation must be one of JSplitPane.HORIZONTAL_SPLIT or JSplitPane.VERTICAL_SPLIT"]);
this.continuousLayout=newContinuousLayout;
if (newLeftComponent != null ) this.setLeftComponent$java_awt_Component(newLeftComponent);
if (newRightComponent != null ) this.setRightComponent$java_awt_Component(newRightComponent);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "SplitPaneUI";
});

Clazz.newMeth(C$, 'setDividerSize$I',  function (newSize) {
var oldSize=this.dividerSize;
this.dividerSizeSet=true;
if (oldSize != newSize) {
this.dividerSize=newSize;
this.firePropertyChange$S$I$I("dividerSize", oldSize, newSize);
}});

Clazz.newMeth(C$, 'getDividerSize$',  function () {
return this.dividerSize;
});

Clazz.newMeth(C$, 'setLeftComponent$java_awt_Component',  function (comp) {
if (comp == null ) {
if (this.leftComponent != null ) {
this.remove$java_awt_Component(this.leftComponent);
this.leftComponent=null;
}} else {
this.add$java_awt_Component$O(comp, "left");
}});

Clazz.newMeth(C$, 'getLeftComponent$',  function () {
return this.leftComponent;
});

Clazz.newMeth(C$, 'setTopComponent$java_awt_Component',  function (comp) {
this.setLeftComponent$java_awt_Component(comp);
});

Clazz.newMeth(C$, 'getTopComponent$',  function () {
return this.leftComponent;
});

Clazz.newMeth(C$, 'setRightComponent$java_awt_Component',  function (comp) {
if (comp == null ) {
if (this.rightComponent != null ) {
this.remove$java_awt_Component(this.rightComponent);
this.rightComponent=null;
}} else {
this.add$java_awt_Component$O(comp, "right");
}});

Clazz.newMeth(C$, 'getRightComponent$',  function () {
return this.rightComponent;
});

Clazz.newMeth(C$, 'setBottomComponent$java_awt_Component',  function (comp) {
this.setRightComponent$java_awt_Component(comp);
});

Clazz.newMeth(C$, 'getBottomComponent$',  function () {
return this.rightComponent;
});

Clazz.newMeth(C$, 'setOneTouchExpandable$Z',  function (newValue) {
var oldValue=this.oneTouchExpandable;
this.oneTouchExpandable=newValue;
this.oneTouchExpandableSet=true;
this.firePropertyChange$S$Z$Z("oneTouchExpandable", oldValue, newValue);
this.秘repaint$();
});

Clazz.newMeth(C$, 'isOneTouchExpandable$',  function () {
return this.oneTouchExpandable;
});

Clazz.newMeth(C$, 'setLastDividerLocation$I',  function (newLastLocation) {
var oldLocation=this.lastDividerLocation;
this.lastDividerLocation=newLastLocation;
this.firePropertyChange$S$I$I("lastDividerLocation", oldLocation, newLastLocation);
});

Clazz.newMeth(C$, 'getLastDividerLocation$',  function () {
return this.lastDividerLocation;
});

Clazz.newMeth(C$, 'setOrientation$I',  function (orientation) {
if ((orientation != 0) && (orientation != 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JSplitPane: orientation must be one of JSplitPane.VERTICAL_SPLIT or JSplitPane.HORIZONTAL_SPLIT"]);
}var oldOrientation=this.orientation;
this.orientation=orientation;
this.firePropertyChange$S$I$I("orientation", oldOrientation, orientation);
});

Clazz.newMeth(C$, 'getOrientation$',  function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setContinuousLayout$Z',  function (newContinuousLayout) {
var oldCD=this.continuousLayout;
this.continuousLayout=newContinuousLayout;
this.firePropertyChange$S$Z$Z("continuousLayout", oldCD, newContinuousLayout);
});

Clazz.newMeth(C$, 'isContinuousLayout$',  function () {
return this.continuousLayout;
});

Clazz.newMeth(C$, 'setResizeWeight$D',  function (value) {
if (value < 0  || value > 1  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["JSplitPane weight must be between 0 and 1"]);
}var oldWeight=this.resizeWeight;
this.resizeWeight=value;
this.firePropertyChange$S$D$D("resizeWeight", oldWeight, value);
});

Clazz.newMeth(C$, 'getResizeWeight$',  function () {
return this.resizeWeight;
});

Clazz.newMeth(C$, 'resetToPreferredSizes$',  function () {
var ui=this.getUI$();
if (ui != null ) {
ui.resetToPreferredSizes$javax_swing_JSplitPane(this);
}});

Clazz.newMeth(C$, 'setDividerLocation$D',  function (proportionalLocation) {
if (proportionalLocation < 0.0  || proportionalLocation > 1.0  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["proportional location must be between 0.0 and 1.0."]);
}var wh=(this.getOrientation$() == 0 ? this.getHeight$() : this.getWidth$());
var intLocation=(((wh - this.getDividerSize$()) * proportionalLocation)|0);
this.setDividerLocation$I(intLocation);
});

Clazz.newMeth(C$, 'setDividerLocation$I',  function (location) {
this.setDividerLocationIntImpl$I(location);
});

Clazz.newMeth(C$, 'setDividerLocationIntImpl$I',  function (location) {
var oldValue=this.dividerLocation;
this.dividerLocation=location;
var ui=this.getUI$();
if (ui != null ) {
ui.setDividerLocation$javax_swing_JSplitPane$I(this, location);
}this.firePropertyChange$S$I$I("dividerLocation", oldValue, location);
this.setLastDividerLocation$I(oldValue);
});

Clazz.newMeth(C$, 'getDividerLocation$',  function () {
return this.dividerLocation;
});

Clazz.newMeth(C$, 'getMinimumDividerLocation$',  function () {
var ui=this.getUI$();
if (ui != null ) {
return ui.getMinimumDividerLocation$javax_swing_JSplitPane(this);
}return -1;
});

Clazz.newMeth(C$, 'getMaximumDividerLocation$',  function () {
var ui=this.getUI$();
if (ui != null ) {
return ui.getMaximumDividerLocation$javax_swing_JSplitPane(this);
}return -1;
});

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (component) {
if (component === this.leftComponent ) {
this.leftComponent=null;
} else if (component === this.rightComponent ) {
this.rightComponent=null;
}C$.superclazz.prototype.remove$java_awt_Component.apply(this, [component]);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
var comp=this.getComponent$I(index);
if (comp === this.leftComponent ) {
this.leftComponent=null;
} else if (comp === this.rightComponent ) {
this.rightComponent=null;
}C$.superclazz.prototype.remove$I.apply(this, [index]);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'removeAll$',  function () {
this.leftComponent=this.rightComponent=null;
C$.superclazz.prototype.removeAll$.apply(this, []);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'isValidateRoot$',  function () {
return true;
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (comp, constraints, index) {
var toRemove;
if (constraints != null  && !(Clazz.instanceOf(constraints, "java.lang.String")) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot add to layout: constraint must be a string (or null)"]);
}if (constraints == null ) {
if (this.getLeftComponent$() == null ) {
constraints="left";
} else if (this.getRightComponent$() == null ) {
constraints="right";
}}if (constraints != null  && (constraints.equals$O("left") || constraints.equals$O("top") ) ) {
toRemove=this.getLeftComponent$();
if (toRemove != null ) {
this.remove$java_awt_Component(toRemove);
}this.leftComponent=comp;
index=-1;
} else if (constraints != null  && (constraints.equals$O("right") || constraints.equals$O("bottom") ) ) {
toRemove=this.getRightComponent$();
if (toRemove != null ) {
this.remove$java_awt_Component(toRemove);
}this.rightComponent=comp;
index=-1;
} else if (constraints != null  && constraints.equals$O("divider") ) {
index=-1;
}this.addImplCont$java_awt_Component$O$I(comp, constraints, index);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'paintChildren$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintChildren$java_awt_Graphics.apply(this, [g]);
var ui=this.getUI$();
if (ui != null ) {
var tempG=g.create$();
ui.finishedPaintingChildren$javax_swing_JSplitPane$java_awt_Graphics(this, tempG);
tempG.dispose$();
}});

Clazz.newMeth(C$, 'setUIProperty$S$O',  function (propertyName, value) {
if (propertyName === "dividerSize" ) {
if (!this.dividerSizeSet) {
this.setDividerSize$I((value).intValue$());
this.dividerSizeSet=false;
}} else if (propertyName === "oneTouchExpandable" ) {
if (!this.oneTouchExpandableSet) {
this.setOneTouchExpandable$Z((value).booleanValue$());
this.oneTouchExpandableSet=false;
}} else {
C$.superclazz.prototype.setUIProperty$S$O.apply(this, [propertyName, value]);
}});

Clazz.newMeth(C$, 'paramString$',  function () {
var orientationString=(this.orientation == 1 ? "HORIZONTAL_SPLIT" : "VERTICAL_SPLIT");
var continuousLayoutString=(this.continuousLayout ? "true" : "false");
var oneTouchExpandableString=(this.oneTouchExpandable ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",continuousLayout=" + continuousLayoutString + ",dividerSize=" + this.dividerSize + ",lastDividerLocation=" + this.lastDividerLocation + ",oneTouchExpandable=" + oneTouchExpandableString + ",orientation=" + orientationString ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

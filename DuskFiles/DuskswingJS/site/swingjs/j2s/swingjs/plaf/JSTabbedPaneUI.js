(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},p$4={},p$5={},p$6={},p$7={},I$=[[0,'java.awt.Dimension','javax.swing.SwingUtilities','java.awt.Rectangle','java.awt.Point','swingjs.plaf.JSGraphicsUtils',['swingjs.plaf.JSTabbedPaneUI','.ScrollableTabViewport'],['swingjs.plaf.JSTabbedPaneUI','.ScrollableTabPanel'],['swingjs.plaf.JSTabbedPaneUI','.CroppedEdge'],'java.awt.event.ActionEvent','javax.swing.UIManager','swingjs.plaf.BasicHTML','java.awt.JSComponent','swingjs.plaf.JSTabbedPaneUI','java.awt.Insets','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode',['swingjs.plaf.JSTabbedPaneUI','.Actions'],['swingjs.plaf.JSTabbedPaneUI','.TabbedPaneScrollLayout'],['swingjs.plaf.JSTabbedPaneUI','.TabbedPaneLayout'],['swingjs.plaf.JSTabbedPaneUI','.ScrollableTabSupport'],['swingjs.plaf.JSTabbedPaneUI','.TabContainer'],['swingjs.plaf.JSTabbedPaneUI','.ScrollableTabButton'],'javax.swing.LookAndFeel',['swingjs.plaf.JSTabbedPaneUI','.Handler'],'swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup','javax.swing.KeyStroke','java.util.Hashtable','javax.swing.plaf.ComponentInputMapUIResource',['java.awt.Component','.BaselineResizeBehavior'],'sun.swing.SwingUtilities2','java.awt.Polygon','java.util.Vector']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTabbedPaneUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI', 'javax.swing.SwingConstants');
C$.$classes$=[['Actions',10],['TabbedPaneLayout',1],['TabbedPaneScrollLayout',2],['ScrollableTabSupport',2],['ScrollableTabViewport',2],['ScrollableTabPanel',2],['ScrollableTabButton',2],['Handler',2],['PropertyChangeHandler',1],['TabSelectionHandler',1],['MouseHandler',1],['FocusHandler',1],['TabContainer',2],['CroppedEdge',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabsOpaque=true;
this.contentOpaque=true;
this.tabRuns=Clazz.array(Integer.TYPE, [10]);
this.runCount=0;
this.selectedRun=-1;
this.rects=Clazz.array($I$(3), [0]);
this.currentPadInsets=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.currentTabAreaInsets=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.calcRect=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.$$frameZ=10000;
},1);

C$.$fields$=[['Z',['tabsOverlapBorder','tabsOpaque','contentOpaque','isRunsDirty','calculatedBaseline'],'I',['textIconGap','tabRunOverlay','runCount','selectedRun','maxTabHeight','maxTabWidth','focusIndex','rolloverTabIndex','baseline','$$frameZ'],'O',['tabPane','javax.swing.JTabbedPane','highlight','java.awt.Color','+lightHighlight','+shadow','+darkShadow','+focus','+selectedColor','tabInsets','java.awt.Insets','+selectedTabPadInsets','+tabAreaInsets','+contentBorderInsets','upKey','javax.swing.KeyStroke','+downKey','+leftKey','+rightKey','tabRuns','int[]','rects','java.awt.Rectangle[]','tabChangeListener','javax.swing.event.ChangeListener','propertyChangeListener','java.beans.PropertyChangeListener','mouseListener','java.awt.event.MouseListener','focusListener','java.awt.event.FocusListener','currentPadInsets','java.awt.Insets','+currentTabAreaInsets','visibleComponent','java.awt.Component','htmlViews','java.util.Vector','mnemonicToIndexMap','java.util.Hashtable','mnemonicInputMap','javax.swing.InputMap','tabScroller','swingjs.plaf.JSTabbedPaneUI.ScrollableTabSupport','tabContainer','swingjs.plaf.JSTabbedPaneUI.TabContainer','calcRect','java.awt.Rectangle','handler','swingjs.plaf.JSTabbedPaneUI.Handler']]
,['O',['xCropLen','int[]','+yCropLen']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isContainer=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
var root=this.jc.getRootPane$();
this.isContentPane=(root != null  && this.jc === root.getContentPane$()  );
this.domNode=$I$(15,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
if (root != null  && root.getGlassPane$() === this.c  ) $I$(16).setVisible(this.domNode, false);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z',  function (obj, addCSS) {
return Clazz.new_([this.c.getWidth$(), this.c.getHeight$()],$I$(1,1).c$$I$I);
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigateNext"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigatePrevious"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigateRight"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigateLeft"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigateUp"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigateDown"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigatePageUp"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["navigatePageDown"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["requestFocus"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["requestFocusForVisibleComponent"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["setSelectedIndex"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["selectTabWithFocus"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["scrollTabsForwardAction"]));
map.put$javax_swing_Action(Clazz.new_($I$(17,1).c$$S,["scrollTabsBackwardAction"]));
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.tabPane=c;
this.calculatedBaseline=false;
this.rolloverTabIndex=-1;
this.focusIndex=-1;
c.setLayout$java_awt_LayoutManager(this.createLayoutManager$());
this.installComponents$();
this.installDefaults$();
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallKeyboardActions$();
this.uninstallListeners$();
this.uninstallDefaults$();
this.uninstallComponents$();
c.setLayout$java_awt_LayoutManager(null);
this.tabPane=null;
});

Clazz.newMeth(C$, 'createLayoutManager$',  function () {
if (this.tabPane.getTabLayoutPolicy$() == 1) {
return Clazz.new_($I$(18,1),[this, null]);
} else {
return Clazz.new_($I$(19,1),[this, null]);
}});

Clazz.newMeth(C$, 'scrollableTabLayoutEnabled',  function () {
return (Clazz.instanceOf(this.tabPane.getLayout$(), "swingjs.plaf.JSTabbedPaneUI.TabbedPaneScrollLayout"));
}, p$1);

Clazz.newMeth(C$, 'installComponents$',  function () {
if (p$1.scrollableTabLayoutEnabled.apply(this, [])) {
if (this.tabScroller == null ) {
this.tabScroller=Clazz.new_([this, null, this.tabPane.getTabPlacement$()],$I$(20,1).c$$I);
this.tabPane.add$java_awt_Component(this.tabScroller.viewport);
}}p$1.installTabContainer.apply(this, []);
});

Clazz.newMeth(C$, 'installTabContainer',  function () {
for (var i=0; i < this.tabPane.getTabCount$(); i++) {
var tabComponent=this.tabPane.getTabComponentAt$I(i);
if (tabComponent != null ) {
if (this.tabContainer == null ) {
this.tabContainer=Clazz.new_($I$(21,1),[this, null]);
}this.tabContainer.add$java_awt_Component(tabComponent);
}}
if (this.tabContainer == null ) {
return;
}if (p$1.scrollableTabLayoutEnabled.apply(this, [])) {
this.tabScroller.tabPanel.add$java_awt_Component(this.tabContainer);
} else {
this.tabPane.add$java_awt_Component(this.tabContainer);
}}, p$1);

Clazz.newMeth(C$, 'createScrollButton$I',  function (direction) {
if (direction != 5 && direction != 1  && direction != 3  && direction != 7 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Direction must be one of: SOUTH, NORTH, EAST or WEST"]);
}return Clazz.new_($I$(22,1).c$$I,[this, null, direction]);
});

Clazz.newMeth(C$, 'uninstallComponents$',  function () {
p$1.uninstallTabContainer.apply(this, []);
if (p$1.scrollableTabLayoutEnabled.apply(this, [])) {
this.tabPane.remove$java_awt_Component(this.tabScroller.viewport);
this.tabPane.remove$java_awt_Component(this.tabScroller.scrollForwardButton);
this.tabPane.remove$java_awt_Component(this.tabScroller.scrollBackwardButton);
this.tabScroller=null;
}});

Clazz.newMeth(C$, 'uninstallTabContainer',  function () {
if (this.tabContainer == null ) {
return;
}this.tabContainer.notifyTabbedPane=false;
this.tabContainer.removeAll$();
if (p$1.scrollableTabLayoutEnabled.apply(this, [])) {
this.tabContainer.remove$java_awt_Component(this.tabScroller.croppedEdge);
this.tabScroller.tabPanel.remove$java_awt_Component(this.tabContainer);
} else {
this.tabPane.remove$java_awt_Component(this.tabContainer);
}this.tabContainer=null;
}, p$1);

Clazz.newMeth(C$, 'installDefaults$',  function () {
$I$(23).installColorsAndFont$javax_swing_JComponent$S$S$S(this.tabPane, "TabbedPane.background", "TabbedPane.foreground", "TabbedPane.font");
this.highlight=$I$(10).getColor$O("TabbedPane.light");
this.lightHighlight=$I$(10).getColor$O("TabbedPane.highlight");
this.shadow=$I$(10).getColor$O("TabbedPane.shadow");
this.darkShadow=$I$(10).getColor$O("TabbedPane.darkShadow");
this.focus=$I$(10).getColor$O("TabbedPane.focus");
this.selectedColor=$I$(10).getColor$O("TabbedPane.selected");
this.textIconGap=$I$(10).getInt$O("TabbedPane.textIconGap");
this.tabInsets=$I$(10).getInsets$O("TabbedPane.tabInsets");
this.selectedTabPadInsets=$I$(10).getInsets$O("TabbedPane.selectedTabPadInsets");
this.tabAreaInsets=$I$(10).getInsets$O("TabbedPane.tabAreaInsets");
this.tabsOverlapBorder=$I$(10).getBoolean$O("TabbedPane.tabsOverlapBorder");
this.contentBorderInsets=$I$(10).getInsets$O("TabbedPane.contentBorderInsets");
this.tabRunOverlay=$I$(10).getInt$O("TabbedPane.tabRunOverlay");
this.tabsOpaque=$I$(10).getBoolean$O("TabbedPane.tabsOpaque");
this.contentOpaque=$I$(10).getBoolean$O("TabbedPane.contentOpaque");
var opaque=$I$(10).get$O("TabbedPane.opaque");
if (opaque == null ) {
opaque=Boolean.FALSE;
}$I$(23).installProperty$javax_swing_JComponent$S$O(this.tabPane, "opaque", opaque);
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
this.highlight=null;
this.lightHighlight=null;
this.shadow=null;
this.darkShadow=null;
this.focus=null;
this.tabInsets=null;
this.selectedTabPadInsets=null;
this.tabAreaInsets=null;
this.contentBorderInsets=null;
});

Clazz.newMeth(C$, 'installListeners$',  function () {
if ((this.propertyChangeListener=this.createPropertyChangeListener$()) != null ) {
this.tabPane.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}if ((this.tabChangeListener=this.createChangeListener$()) != null ) {
this.tabPane.addChangeListener$javax_swing_event_ChangeListener(this.tabChangeListener);
}if ((this.mouseListener=this.createMouseListener$()) != null ) {
this.tabPane.addMouseListener$java_awt_event_MouseListener(this.mouseListener);
}this.tabPane.addMouseMotionListener$java_awt_event_MouseMotionListener(p$1.getHandler.apply(this, []));
if ((this.focusListener=this.createFocusListener$()) != null ) {
this.tabPane.addFocusListener$java_awt_event_FocusListener(this.focusListener);
}this.tabPane.addContainerListener$java_awt_event_ContainerListener(p$1.getHandler.apply(this, []));
if (this.tabPane.getTabCount$() > 0) {
this.htmlViews=p$1.createHTMLVector.apply(this, []);
}});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
if (this.mouseListener != null ) {
this.tabPane.removeMouseListener$java_awt_event_MouseListener(this.mouseListener);
this.mouseListener=null;
}this.tabPane.removeMouseMotionListener$java_awt_event_MouseMotionListener(p$1.getHandler.apply(this, []));
if (this.focusListener != null ) {
this.tabPane.removeFocusListener$java_awt_event_FocusListener(this.focusListener);
this.focusListener=null;
}this.tabPane.removeContainerListener$java_awt_event_ContainerListener(p$1.getHandler.apply(this, []));
if (this.htmlViews != null ) {
this.htmlViews.removeAllElements$();
this.htmlViews=null;
}if (this.tabChangeListener != null ) {
this.tabPane.removeChangeListener$javax_swing_event_ChangeListener(this.tabChangeListener);
this.tabChangeListener=null;
}if (this.propertyChangeListener != null ) {
this.tabPane.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.propertyChangeListener=null;
}this.handler=null;
});

Clazz.newMeth(C$, 'createMouseListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createFocusListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createChangeListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(24,1),[this, null]);
}return this.handler;
}, p$1);

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var km=this.getInputMap$I(1);
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tabPane, 1, km);
km=this.getInputMap$I(0);
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tabPane, 0, km);
$I$(25,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.tabPane, Clazz.getClass(C$), "TabbedPane.actionMap"]);
p$1.updateMnemonics.apply(this, []);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 1) {
return $I$(26).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.tabPane, this, "TabbedPane.ancestorInputMap");
} else if (condition == 0) {
return $I$(26).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.tabPane, this, "TabbedPane.focusInputMap");
}return null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(2).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.tabPane, null);
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tabPane, 1, null);
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tabPane, 0, null);
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tabPane, 2, null);
this.mnemonicToIndexMap=null;
this.mnemonicInputMap=null;
});

Clazz.newMeth(C$, 'updateMnemonics',  function () {
p$1.resetMnemonics.apply(this, []);
for (var counter=this.tabPane.getTabCount$() - 1; counter >= 0; counter--) {
var mnemonic=this.tabPane.getMnemonicAt$I(counter);
if (mnemonic > 0) {
p$1.addMnemonic$I$I.apply(this, [counter, mnemonic]);
}}
}, p$1);

Clazz.newMeth(C$, 'resetMnemonics',  function () {
if (this.mnemonicToIndexMap != null ) {
this.mnemonicToIndexMap.clear$();
this.mnemonicInputMap.clear$();
}}, p$1);

Clazz.newMeth(C$, 'addMnemonic$I$I',  function (index, mnemonic) {
if (this.mnemonicToIndexMap == null ) {
p$1.initMnemonics.apply(this, []);
}this.mnemonicInputMap.put$javax_swing_KeyStroke$O($I$(27).getKeyStroke$I$I(mnemonic, 8), "setSelectedIndex");
this.mnemonicToIndexMap.put$O$O( new Integer(mnemonic),  new Integer(index));
}, p$1);

Clazz.newMeth(C$, 'initMnemonics',  function () {
this.mnemonicToIndexMap=Clazz.new_($I$(28,1));
this.mnemonicInputMap=Clazz.new_($I$(29,1).c$$javax_swing_JComponent,[this.tabPane]);
this.mnemonicInputMap.setParent$javax_swing_InputMap($I$(2).getUIInputMap$javax_swing_JComponent$I(this.tabPane, 2));
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.tabPane, 2, this.mnemonicInputMap);
}, p$1);

Clazz.newMeth(C$, 'setRolloverTab$I$I',  function (x, y) {
this.setRolloverTab$I(p$1.tabForCoordinate$javax_swing_JTabbedPane$I$I$Z.apply(this, [this.tabPane, x, y, false]));
}, p$1);

Clazz.newMeth(C$, 'setRolloverTab$I',  function (index) {
this.rolloverTabIndex=index;
});

Clazz.newMeth(C$, 'getRolloverTab$',  function () {
return this.rolloverTabIndex;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
return null;
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
return null;
});

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var baseline=p$1.calculateBaselineIfNecessary.apply(this, []);
if (baseline != -1) {
var placement=this.tabPane.getTabPlacement$();
var insets=this.tabPane.getInsets$();
var tabAreaInsets=this.getTabAreaInsets$I(placement);
switch (placement) {
case 1:
baseline+=insets.top + tabAreaInsets.top;
return baseline;
case 3:
baseline=height - insets.bottom - tabAreaInsets.bottom - this.maxTabHeight  + baseline;
return baseline;
case 2:
case 4:
baseline+=insets.top + tabAreaInsets.top;
return baseline;
}
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
switch (this.tabPane.getTabPlacement$()) {
case 2:
case 4:
case 1:
return $I$(30).CONSTANT_ASCENT;
case 3:
return $I$(30).CONSTANT_DESCENT;
}
return $I$(30).OTHER;
});

Clazz.newMeth(C$, 'getBaseline$I',  function (tab) {
if (this.tabPane.getTabComponentAt$I(tab) != null ) {
var offset=this.getBaselineOffset$();
if (offset != 0) {
return -1;
}var c=this.tabPane.getTabComponentAt$I(tab);
var pref=c.getPreferredSize$();
var tabInsets=this.getTabInsets$I$I(this.tabPane.getTabPlacement$(), tab);
var cellHeight=this.maxTabHeight - tabInsets.top - tabInsets.bottom ;
return c.getBaseline$I$I(pref.width, pref.height) + ((cellHeight - pref.height)/2|0) + tabInsets.top;
} else {
var view=this.getTextViewForTab$I(tab);
if (view != null ) {
var viewHeight=(view.getPreferredSpan$I(1)|0);
var baseline=$I$(11,"getHTMLBaseline$javax_swing_text_View$I$I",[view, (view.getPreferredSpan$I(0)|0), viewHeight]);
if (baseline >= 0) {
return (this.maxTabHeight/2|0) - (viewHeight/2|0) + baseline + this.getBaselineOffset$();
}return -1;
}}var metrics=this.getFontMetrics$();
var fontHeight=metrics.getHeight$();
var fontBaseline=metrics.getAscent$();
return (this.maxTabHeight/2|0) - (fontHeight/2|0) + fontBaseline + this.getBaselineOffset$();
});

Clazz.newMeth(C$, 'getBaselineOffset$',  function () {
switch (this.tabPane.getTabPlacement$()) {
case 1:
if (this.tabPane.getTabCount$() > 1) {
return 1;
} else {
return -1;
}case 3:
if (this.tabPane.getTabCount$() > 1) {
return -1;
} else {
return 1;
}default:
return (this.maxTabHeight % 2);
}
});

Clazz.newMeth(C$, 'calculateBaselineIfNecessary',  function () {
if (!this.calculatedBaseline) {
this.calculatedBaseline=true;
this.baseline=-1;
if (this.tabPane.getTabCount$() > 0) {
p$1.calculateBaseline.apply(this, []);
}}return this.baseline;
}, p$1);

Clazz.newMeth(C$, 'calculateBaseline',  function () {
var tabCount=this.tabPane.getTabCount$();
var tabPlacement=this.tabPane.getTabPlacement$();
this.maxTabHeight=this.calculateMaxTabHeight$I(tabPlacement);
this.baseline=this.getBaseline$I(0);
if (p$1.isHorizontalTabPlacement.apply(this, [])) {
for (var i=1; i < tabCount; i++) {
if (this.getBaseline$I(i) != this.baseline) {
this.baseline=-1;
break;
}}
} else {
var fontMetrics=this.getFontMetrics$();
var fontHeight=fontMetrics.getHeight$();
var height=this.calculateTabHeight$I$I$I(tabPlacement, 0, fontHeight);
for (var i=1; i < tabCount; i++) {
var newHeight=this.calculateTabHeight$I$I$I(tabPlacement, i, fontHeight);
if (height != newHeight) {
this.baseline=-1;
break;
}}
}}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
var selectedIndex=this.tabPane.getSelectedIndex$();
var tabPlacement=this.tabPane.getTabPlacement$();
p$1.ensureCurrentLayout.apply(this, []);
if (this.tabsOverlapBorder) {
this.paintContentBorder$java_awt_Graphics$I$I(g, tabPlacement, selectedIndex);
}if (!p$1.scrollableTabLayoutEnabled.apply(this, [])) {
this.paintTabArea$java_awt_Graphics$I$I(g, tabPlacement, selectedIndex);
}if (!this.tabsOverlapBorder) {
this.paintContentBorder$java_awt_Graphics$I$I(g, tabPlacement, selectedIndex);
}});

Clazz.newMeth(C$, 'paintTabArea$java_awt_Graphics$I$I',  function (g, tabPlacement, selectedIndex) {
var tabCount=this.tabPane.getTabCount$();
var iconRect=Clazz.new_($I$(3,1));
var textRect=Clazz.new_($I$(3,1));
var clipRect=g.getClipBounds$();
for (var i=this.runCount - 1; i >= 0; i--) {
var start=this.tabRuns[i];
var next=this.tabRuns[(i == this.runCount - 1) ? 0 : i + 1];
var end=(next != 0 ? next - 1 : tabCount - 1);
for (var j=start; j <= end; j++) {
if (j != selectedIndex && this.rects[j].intersects$java_awt_Rectangle(clipRect) ) {
this.paintTab$java_awt_Graphics$I$java_awt_RectangleA$I$java_awt_Rectangle$java_awt_Rectangle(g, tabPlacement, this.rects, j, iconRect, textRect);
}}
}
if (selectedIndex >= 0 && this.rects[selectedIndex].intersects$java_awt_Rectangle(clipRect) ) {
this.paintTab$java_awt_Graphics$I$java_awt_RectangleA$I$java_awt_Rectangle$java_awt_Rectangle(g, tabPlacement, this.rects, selectedIndex, iconRect, textRect);
}});

Clazz.newMeth(C$, 'paintTab$java_awt_Graphics$I$java_awt_RectangleA$I$java_awt_Rectangle$java_awt_Rectangle',  function (g, tabPlacement, rects, tabIndex, iconRect, textRect) {
var tabRect=rects[tabIndex];
var selectedIndex=this.tabPane.getSelectedIndex$();
var isSelected=selectedIndex == tabIndex;
if (this.tabsOpaque || this.tabPane.isOpaque$() ) {
this.paintTabBackground$java_awt_Graphics$I$I$I$I$I$I$Z(g, tabPlacement, tabIndex, tabRect.x, tabRect.y, tabRect.width, tabRect.height, isSelected);
}this.paintTabBorder$java_awt_Graphics$I$I$I$I$I$I$Z(g, tabPlacement, tabIndex, tabRect.x, tabRect.y, tabRect.width, tabRect.height, isSelected);
var title=this.tabPane.getTitleAt$I(tabIndex);
var font=this.tabPane.getFont$();
var metrics=$I$(31).getFontMetrics$javax_swing_JComponent$java_awt_Graphics$java_awt_Font(this.tabPane, g, font);
var icon=this.getIconForTab$I(tabIndex);
this.layoutLabel$I$java_awt_FontMetrics$I$S$javax_swing_Icon$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$Z(tabPlacement, metrics, tabIndex, title, icon, tabRect, iconRect, textRect, isSelected);
if (this.tabPane.getTabComponentAt$I(tabIndex) == null ) {
var clippedTitle=title;
if (p$1.scrollableTabLayoutEnabled.apply(this, []) && this.tabScroller.croppedEdge.isParamsSet$() && this.tabScroller.croppedEdge.getTabIndex$() == tabIndex   && p$1.isHorizontalTabPlacement.apply(this, []) ) {
var availTextWidth=this.tabScroller.croppedEdge.getCropline$() - (textRect.x - tabRect.x) - this.tabScroller.croppedEdge.getCroppedSideWidth$() ;
clippedTitle=$I$(31).clipStringIfNecessary$javax_swing_JComponent$java_awt_FontMetrics$S$I(null, metrics, title, availTextWidth);
}this.paintText$java_awt_Graphics$I$java_awt_Font$java_awt_FontMetrics$I$S$java_awt_Rectangle$Z(g, tabPlacement, font, metrics, tabIndex, clippedTitle, textRect, isSelected);
this.paintIcon$java_awt_Graphics$I$I$javax_swing_Icon$java_awt_Rectangle$Z(g, tabPlacement, tabIndex, icon, iconRect, isSelected);
}});

Clazz.newMeth(C$, 'isHorizontalTabPlacement',  function () {
return this.tabPane.getTabPlacement$() == 1 || this.tabPane.getTabPlacement$() == 3 ;
}, p$1);

Clazz.newMeth(C$, 'createCroppedTabShape$I$java_awt_Rectangle$I',  function (tabPlacement, tabRect, cropline) {
var rlen=0;
var start=0;
var end=0;
var ostart=0;
switch (tabPlacement) {
case 2:
case 4:
rlen=tabRect.width;
start=tabRect.x;
end=tabRect.x + tabRect.width;
ostart=tabRect.y + tabRect.height;
break;
case 1:
case 3:
default:
rlen=tabRect.height;
start=tabRect.y;
end=tabRect.y + tabRect.height;
ostart=tabRect.x + tabRect.width;
}
var rcnt=(rlen/12|0);
if (rlen % 12 > 0) {
++rcnt;
}var npts=2 + (rcnt * 8);
var xp=Clazz.array(Integer.TYPE, [npts]);
var yp=Clazz.array(Integer.TYPE, [npts]);
var pcnt=0;
xp[pcnt]=ostart;
yp[pcnt++]=end;
xp[pcnt]=ostart;
yp[pcnt++]=start;
for (var i=0; i < rcnt; i++) {
for (var j=0; j < C$.xCropLen.length; j++) {
xp[pcnt]=cropline - C$.xCropLen[j];
yp[pcnt]=start + (i * 12) + C$.yCropLen[j] ;
if (yp[pcnt] >= end) {
yp[pcnt]=end;
++pcnt;
break;
}++pcnt;
}
}
if (tabPlacement == 1 || tabPlacement == 3 ) {
return Clazz.new_($I$(32,1).c$$IA$IA$I,[xp, yp, pcnt]);
} else {
return Clazz.new_($I$(32,1).c$$IA$IA$I,[yp, xp, pcnt]);
}}, 1);

Clazz.newMeth(C$, 'paintCroppedTabEdge$java_awt_Graphics',  function (g) {
var tabIndex=this.tabScroller.croppedEdge.getTabIndex$();
var cropline=this.tabScroller.croppedEdge.getCropline$();
var x;
var y;
switch (this.tabPane.getTabPlacement$()) {
case 2:
case 4:
x=this.rects[tabIndex].x;
y=cropline;
var xx=x;
g.setColor$java_awt_Color(this.shadow);
while (xx <= x + this.rects[tabIndex].width){
for (var i=0; i < C$.xCropLen.length; i+=2) {
g.drawLine$I$I$I$I(xx + C$.yCropLen[i], y - C$.xCropLen[i], xx + C$.yCropLen[i + 1] - 1, y - C$.xCropLen[i + 1]);
}
xx+=12;
}
break;
case 1:
case 3:
default:
x=cropline;
y=this.rects[tabIndex].y;
var yy=y;
g.setColor$java_awt_Color(this.shadow);
while (yy <= y + this.rects[tabIndex].height){
for (var i=0; i < C$.xCropLen.length; i+=2) {
g.drawLine$I$I$I$I(x - C$.xCropLen[i], yy + C$.yCropLen[i], x - C$.xCropLen[i + 1], yy + C$.yCropLen[i + 1] - 1);
}
yy+=12;
}
}
}, p$1);

Clazz.newMeth(C$, 'layoutLabel$I$java_awt_FontMetrics$I$S$javax_swing_Icon$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$Z',  function (tabPlacement, metrics, tabIndex, title, icon, tabRect, iconRect, textRect, isSelected) {
textRect.x=textRect.y=iconRect.x=iconRect.y=0;
var v=this.getTextViewForTab$I(tabIndex);
if (v != null ) {
this.tabPane.putClientProperty$O$O("html", v);
}$I$(2).layoutCompoundLabel$javax_swing_JComponent$java_awt_FontMetrics$S$javax_swing_Icon$I$I$I$I$java_awt_Rectangle$java_awt_Rectangle$java_awt_Rectangle$I(this.tabPane, metrics, title, icon, 0, 0, 0, 11, tabRect, iconRect, textRect, this.textIconGap);
this.tabPane.putClientProperty$O$O("html", null);
var xNudge=this.getTabLabelShiftX$I$I$Z(tabPlacement, tabIndex, isSelected);
var yNudge=this.getTabLabelShiftY$I$I$Z(tabPlacement, tabIndex, isSelected);
iconRect.x+=xNudge;
iconRect.y+=yNudge;
textRect.x+=xNudge;
textRect.y+=yNudge;
});

Clazz.newMeth(C$, 'paintIcon$java_awt_Graphics$I$I$javax_swing_Icon$java_awt_Rectangle$Z',  function (g, tabPlacement, tabIndex, icon, iconRect, isSelected) {
if (icon != null ) {
icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(this.tabPane, g, iconRect.x, iconRect.y);
}});

Clazz.newMeth(C$, 'paintText$java_awt_Graphics$I$java_awt_Font$java_awt_FontMetrics$I$S$java_awt_Rectangle$Z',  function (g, tabPlacement, font, metrics, tabIndex, title, textRect, isSelected) {
g.setFont$java_awt_Font(font);
var v=this.getTextViewForTab$I(tabIndex);
if (v != null ) {
v.paint$java_awt_Graphics$java_awt_Shape(g, textRect);
} else {
var mnemIndex=this.tabPane.getDisplayedMnemonicIndexAt$I(tabIndex);
if (this.tabPane.isEnabled$() && this.tabPane.isEnabledAt$I(tabIndex) ) {
var fg=this.tabPane.getForegroundAt$I(tabIndex);
if (isSelected && (Clazz.instanceOf(fg, "javax.swing.plaf.UIResource")) ) {
var selectedFG=$I$(10).getColor$O("TabbedPane.selectedForeground");
if (selectedFG != null ) {
fg=selectedFG;
}}g.setColor$java_awt_Color(fg);
$I$(31,"drawStringUnderlineCharAt$javax_swing_JComponent$java_awt_Graphics$S$I$I$I",[this.tabPane, g, title, mnemIndex, textRect.x, textRect.y + metrics.getAscent$()]);
} else {
g.setColor$java_awt_Color(this.tabPane.getBackgroundAt$I(tabIndex).brighter$());
$I$(31,"drawStringUnderlineCharAt$javax_swing_JComponent$java_awt_Graphics$S$I$I$I",[this.tabPane, g, title, mnemIndex, textRect.x, textRect.y + metrics.getAscent$()]);
g.setColor$java_awt_Color(this.tabPane.getBackgroundAt$I(tabIndex).darker$());
$I$(31,"drawStringUnderlineCharAt$javax_swing_JComponent$java_awt_Graphics$S$I$I$I",[this.tabPane, g, title, mnemIndex, textRect.x - 1, textRect.y + metrics.getAscent$() - 1]);
}}});

Clazz.newMeth(C$, 'getTabLabelShiftX$I$I$Z',  function (tabPlacement, tabIndex, isSelected) {
var tabRect=this.rects[tabIndex];
var propKey=(isSelected ? "selectedLabelShift" : "labelShift");
var nudge=$I$(26).getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(this.tabPane, this, "TabbedPane." + propKey, 1);
switch (tabPlacement) {
case 2:
return nudge;
case 4:
return -nudge;
case 3:
case 1:
default:
return tabRect.width % 2;
}
});

Clazz.newMeth(C$, 'getTabLabelShiftY$I$I$Z',  function (tabPlacement, tabIndex, isSelected) {
var tabRect=this.rects[tabIndex];
var propKey=(isSelected ? "selectedLabelShift" : "labelShift");
var nudge=$I$(26).getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(this.tabPane, this, "TabbedPane." + propKey, 1);
switch (tabPlacement) {
case 3:
return -nudge;
case 2:
case 4:
return tabRect.height % 2;
case 1:
default:
return nudge;
}
});

Clazz.newMeth(C$, 'paintTabBorder$java_awt_Graphics$I$I$I$I$I$I$Z',  function (g, tabPlacement, tabIndex, x, y, w, h, isSelected) {
g.setColor$java_awt_Color(this.lightHighlight);
switch (tabPlacement) {
case 2:
g.drawLine$I$I$I$I(x + 1, y + h - 2, x + 1, y + h - 2);
g.drawLine$I$I$I$I(x, y + 2, x, y + h - 3);
g.drawLine$I$I$I$I(x + 1, y + 1, x + 1, y + 1);
g.drawLine$I$I$I$I(x + 2, y, x + w - 1, y);
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(x + 2, y + h - 2, x + w - 1, y + h - 2);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x + 2, y + h - 1, x + w - 1, y + h - 1);
break;
case 4:
g.drawLine$I$I$I$I(x, y, x + w - 3, y);
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(x, y + h - 2, x + w - 3, y + h - 2);
g.drawLine$I$I$I$I(x + w - 2, y + 2, x + w - 2, y + h - 3);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x + w - 2, y + 1, x + w - 2, y + 1);
g.drawLine$I$I$I$I(x + w - 2, y + h - 2, x + w - 2, y + h - 2);
g.drawLine$I$I$I$I(x + w - 1, y + 2, x + w - 1, y + h - 3);
g.drawLine$I$I$I$I(x, y + h - 1, x + w - 3, y + h - 1);
break;
case 3:
g.drawLine$I$I$I$I(x, y, x, y + h - 3);
g.drawLine$I$I$I$I(x + 1, y + h - 2, x + 1, y + h - 2);
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(x + 2, y + h - 2, x + w - 3, y + h - 2);
g.drawLine$I$I$I$I(x + w - 2, y, x + w - 2, y + h - 3);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x + 2, y + h - 1, x + w - 3, y + h - 1);
g.drawLine$I$I$I$I(x + w - 2, y + h - 2, x + w - 2, y + h - 2);
g.drawLine$I$I$I$I(x + w - 1, y, x + w - 1, y + h - 3);
break;
case 1:
default:
g.drawLine$I$I$I$I(x, y + 2, x, y + h - 1);
g.drawLine$I$I$I$I(x + 1, y + 1, x + 1, y + 1);
g.drawLine$I$I$I$I(x + 2, y, x + w - 3, y);
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(x + w - 2, y + 2, x + w - 2, y + h - 1);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x + w - 1, y + 2, x + w - 1, y + h - 1);
g.drawLine$I$I$I$I(x + w - 2, y + 1, x + w - 2, y + 1);
}
});

Clazz.newMeth(C$, 'paintTabBackground$java_awt_Graphics$I$I$I$I$I$I$Z',  function (g, tabPlacement, tabIndex, x, y, w, h, isSelected) {
g.setColor$java_awt_Color(!isSelected ? this.tabPane.getBackgroundAt$I(tabIndex) : this.selectedColor == null  ? this.tabPane.getComponentAt$I(tabIndex).getBackground$() : this.selectedColor);
switch (tabPlacement) {
case 2:
g.fillRect$I$I$I$I(x + 1, y + 1, w - 1, h - 3);
break;
case 4:
g.fillRect$I$I$I$I(x, y + 1, w - 2, h - 3);
break;
case 3:
g.fillRect$I$I$I$I(x + 1, y, w - 3, h - 1);
break;
case 1:
default:
g.fillRect$I$I$I$I(x + 1, y + 1, w - 3, h - 1);
}
});

Clazz.newMeth(C$, 'paintContentBorder$java_awt_Graphics$I$I',  function (g, tabPlacement, selectedIndex) {
var width=this.tabPane.getWidth$();
var height=this.tabPane.getHeight$();
var insets=this.tabPane.getInsets$();
var tabAreaInsets=this.getTabAreaInsets$I(tabPlacement);
var x=insets.left;
var y=insets.top;
var w=width - insets.right - insets.left ;
var h=height - insets.top - insets.bottom ;
switch (tabPlacement) {
case 2:
x+=this.calculateTabAreaWidth$I$I$I(tabPlacement, this.runCount, this.maxTabWidth);
if (this.tabsOverlapBorder) {
x-=tabAreaInsets.right;
}w-=(x - insets.left);
break;
case 4:
w-=this.calculateTabAreaWidth$I$I$I(tabPlacement, this.runCount, this.maxTabWidth);
if (this.tabsOverlapBorder) {
w+=tabAreaInsets.left;
}break;
case 3:
h-=this.calculateTabAreaHeight$I$I$I(tabPlacement, this.runCount, this.maxTabHeight);
if (this.tabsOverlapBorder) {
h+=tabAreaInsets.top;
}break;
case 1:
default:
y+=this.calculateTabAreaHeight$I$I$I(tabPlacement, this.runCount, this.maxTabHeight);
if (this.tabsOverlapBorder) {
y-=tabAreaInsets.bottom;
}h-=(y - insets.top);
}
if (this.tabPane.getTabCount$() > 0 && (this.contentOpaque || this.tabPane.isOpaque$() ) ) {
var color=$I$(10).getColor$O("TabbedPane.contentAreaColor");
if (color != null ) {
g.setColor$java_awt_Color(color);
} else if (this.selectedColor == null  || selectedIndex == -1 ) {
g.setColor$java_awt_Color(this.tabPane.getBackground$());
} else {
g.setColor$java_awt_Color(this.selectedColor);
}g.fillRect$I$I$I$I(x, y, w, h);
}this.paintContentBorderTopEdge$java_awt_Graphics$I$I$I$I$I$I(g, tabPlacement, selectedIndex, x, y, w, h);
this.paintContentBorderLeftEdge$java_awt_Graphics$I$I$I$I$I$I(g, tabPlacement, selectedIndex, x, y, w, h);
this.paintContentBorderBottomEdge$java_awt_Graphics$I$I$I$I$I$I(g, tabPlacement, selectedIndex, x, y, w, h);
this.paintContentBorderRightEdge$java_awt_Graphics$I$I$I$I$I$I(g, tabPlacement, selectedIndex, x, y, w, h);
});

Clazz.newMeth(C$, 'paintContentBorderTopEdge$java_awt_Graphics$I$I$I$I$I$I',  function (g, tabPlacement, selectedIndex, x, y, w, h) {
var selRect=selectedIndex < 0 ? null : this.getTabBounds$I$java_awt_Rectangle(selectedIndex, this.calcRect);
g.setColor$java_awt_Color(this.lightHighlight);
var sColor=(selectedIndex < 0 ? null : this.selectedColor == null  ? this.tabPane.getComponentAt$I(selectedIndex).getBackground$() : this.selectedColor);
if (tabPlacement != 1 || selectedIndex < 0  || (selRect.y + selRect.height + 1  < y)  || (selRect.x < x || selRect.x > x + w ) ) {
g.drawLine$I$I$I$I(x, y, x + w - 2, y);
} else {
g.drawLine$I$I$I$I(x, y, selRect.x - 1, y);
var sw=Math.min(selRect.x + selRect.width, x + w - 2);
g.setColor$java_awt_Color(sColor);
g.drawLine$I$I$I$I(selRect.x, y, sw, y);
if (sw < x + w - 2) {
g.setColor$java_awt_Color(this.lightHighlight);
g.drawLine$I$I$I$I(selRect.x + selRect.width, y, x + w - 2, y);
} else {
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(x + w - 2, y, x + w - 2, y);
}}});

Clazz.newMeth(C$, 'paintContentBorderLeftEdge$java_awt_Graphics$I$I$I$I$I$I',  function (g, tabPlacement, selectedIndex, x, y, w, h) {
var selRect=selectedIndex < 0 ? null : this.getTabBounds$I$java_awt_Rectangle(selectedIndex, this.calcRect);
g.setColor$java_awt_Color(this.lightHighlight);
if (tabPlacement != 2 || selectedIndex < 0  || (selRect.x + selRect.width + 1  < x)  || (selRect.y < y || selRect.y > y + h ) ) {
g.drawLine$I$I$I$I(x, y, x, y + h - 2);
} else {
g.drawLine$I$I$I$I(x, y, x, selRect.y - 1);
if (selRect.y + selRect.height < y + h - 2) {
g.drawLine$I$I$I$I(x, selRect.y + selRect.height, x, y + h - 2);
}}});

Clazz.newMeth(C$, 'paintContentBorderBottomEdge$java_awt_Graphics$I$I$I$I$I$I',  function (g, tabPlacement, selectedIndex, x, y, w, h) {
var selRect=selectedIndex < 0 ? null : this.getTabBounds$I$java_awt_Rectangle(selectedIndex, this.calcRect);
g.setColor$java_awt_Color(this.shadow);
if (tabPlacement != 3 || selectedIndex < 0  || (selRect.y - 1 > h)  || (selRect.x < x || selRect.x > x + w ) ) {
g.drawLine$I$I$I$I(x + 1, y + h - 2, x + w - 2, y + h - 2);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x, y + h - 1, x + w - 1, y + h - 1);
} else {
g.drawLine$I$I$I$I(x + 1, y + h - 2, selRect.x - 1, y + h - 2);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x, y + h - 1, selRect.x - 1, y + h - 1);
if (selRect.x + selRect.width < x + w - 2) {
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(selRect.x + selRect.width, y + h - 2, x + w - 2, y + h - 2);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(selRect.x + selRect.width, y + h - 1, x + w - 1, y + h - 1);
}}});

Clazz.newMeth(C$, 'paintContentBorderRightEdge$java_awt_Graphics$I$I$I$I$I$I',  function (g, tabPlacement, selectedIndex, x, y, w, h) {
var selRect=selectedIndex < 0 ? null : this.getTabBounds$I$java_awt_Rectangle(selectedIndex, this.calcRect);
g.setColor$java_awt_Color(this.shadow);
if (tabPlacement != 4 || selectedIndex < 0  || (selRect.x - 1 > w)  || (selRect.y < y || selRect.y > y + h ) ) {
g.drawLine$I$I$I$I(x + w - 2, y + 1, x + w - 2, y + h - 3);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x + w - 1, y, x + w - 1, y + h - 1);
} else {
g.drawLine$I$I$I$I(x + w - 2, y + 1, x + w - 2, selRect.y - 1);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x + w - 1, y, x + w - 1, selRect.y - 1);
if (selRect.y + selRect.height < y + h - 2) {
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(x + w - 2, selRect.y + selRect.height, x + w - 2, y + h - 2);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(x + w - 1, selRect.y + selRect.height, x + w - 1, y + h - 2);
}}});

Clazz.newMeth(C$, 'ensureCurrentLayout',  function () {
if (!this.tabPane.isValid$()) {
this.tabPane.validate$();
}if (!this.tabPane.isValid$()) {
var layout=this.tabPane.getLayout$();
layout.calculateLayoutInfo$();
}}, p$1);

Clazz.newMeth(C$, 'getTabBounds$javax_swing_JTabbedPane$I',  function (pane, i) {
p$1.ensureCurrentLayout.apply(this, []);
var tabRect=Clazz.new_($I$(3,1));
return this.getTabBounds$I$java_awt_Rectangle(i, tabRect);
});

Clazz.newMeth(C$, 'getTabRunCount$javax_swing_JTabbedPane',  function (pane) {
p$1.ensureCurrentLayout.apply(this, []);
return this.runCount;
});

Clazz.newMeth(C$, 'tabForCoordinate$javax_swing_JTabbedPane$I$I',  function (pane, x, y) {
return p$1.tabForCoordinate$javax_swing_JTabbedPane$I$I$Z.apply(this, [pane, x, y, true]);
});

Clazz.newMeth(C$, 'tabForCoordinate$javax_swing_JTabbedPane$I$I$Z',  function (pane, x, y, validateIfNecessary) {
if (validateIfNecessary) {
p$1.ensureCurrentLayout.apply(this, []);
}if (this.isRunsDirty) {
return -1;
}var p=Clazz.new_($I$(4,1).c$$I$I,[x, y]);
if (p$1.scrollableTabLayoutEnabled.apply(this, [])) {
p$1.translatePointToTabPanel$I$I$java_awt_Point.apply(this, [x, y, p]);
var viewRect=this.tabScroller.viewport.getViewRect$();
if (!viewRect.contains$java_awt_Point(p)) {
return -1;
}}var tabCount=this.tabPane.getTabCount$();
for (var i=0; i < tabCount; i++) {
if (this.rects[i].contains$I$I(p.x, p.y)) {
return i;
}}
return -1;
}, p$1);

Clazz.newMeth(C$, 'getTabBounds$I$java_awt_Rectangle',  function (tabIndex, dest) {
dest.width=this.rects[tabIndex].width;
dest.height=this.rects[tabIndex].height;
if (p$1.scrollableTabLayoutEnabled.apply(this, [])) {
var vpp=this.tabScroller.viewport.getLocation$();
var viewp=this.tabScroller.viewport.getViewPosition$();
dest.x=this.rects[tabIndex].x + vpp.x - viewp.x;
dest.y=this.rects[tabIndex].y + vpp.y - viewp.y;
} else {
dest.x=this.rects[tabIndex].x;
dest.y=this.rects[tabIndex].y;
}return dest;
});

Clazz.newMeth(C$, 'getClosestTab$I$I',  function (x, y) {
var min=0;
var tabCount=Math.min(this.rects.length, this.tabPane.getTabCount$());
var max=tabCount;
var tabPlacement=this.tabPane.getTabPlacement$();
var useX=(tabPlacement == 1 || tabPlacement == 3 );
var want=(useX) ? x : y;
while (min != max){
var current=((max + min)/2|0);
var minLoc;
var maxLoc;
if (useX) {
minLoc=this.rects[current].x;
maxLoc=minLoc + this.rects[current].width;
} else {
minLoc=this.rects[current].y;
maxLoc=minLoc + this.rects[current].height;
}if (want < minLoc) {
max=current;
if (min == max) {
return Math.max(0, current - 1);
}} else if (want >= maxLoc) {
min=current;
if (max - min <= 1) {
return Math.max(current + 1, tabCount - 1);
}} else {
return current;
}}
return min;
}, p$1);

Clazz.newMeth(C$, 'translatePointToTabPanel$I$I$java_awt_Point',  function (srcx, srcy, dest) {
var vpp=this.tabScroller.viewport.getLocation$();
var viewp=this.tabScroller.viewport.getViewPosition$();
dest.x=srcx - vpp.x + viewp.x;
dest.y=srcy - vpp.y + viewp.y;
return dest;
}, p$1);

Clazz.newMeth(C$, 'getVisibleComponent$',  function () {
return this.visibleComponent;
});

Clazz.newMeth(C$, 'setVisibleComponent$java_awt_Component',  function (component) {
if (this.visibleComponent != null  && this.visibleComponent !== component   && this.visibleComponent.getParent$() === this.tabPane   && this.visibleComponent.isVisible$() ) {
this.visibleComponent.setVisible$Z(false);
}if (component != null  && !component.isVisible$() ) {
component.setVisible$Z(true);
}this.visibleComponent=component;
});

Clazz.newMeth(C$, 'assureRectsCreated$I',  function (tabCount) {
var rectArrayLen=this.rects.length;
if (tabCount != rectArrayLen) {
var tempRectArray=Clazz.array($I$(3), [tabCount]);
System.arraycopy$O$I$O$I$I(this.rects, 0, tempRectArray, 0, Math.min(rectArrayLen, tabCount));
this.rects=tempRectArray;
for (var rectIndex=rectArrayLen; rectIndex < tabCount; rectIndex++) {
this.rects[rectIndex]=Clazz.new_($I$(3,1));
}
}});

Clazz.newMeth(C$, 'expandTabRunsArray$',  function () {
var rectLen=this.tabRuns.length;
var newArray=Clazz.array(Integer.TYPE, [rectLen + 10]);
System.arraycopy$O$I$O$I$I(this.tabRuns, 0, newArray, 0, this.runCount);
this.tabRuns=newArray;
});

Clazz.newMeth(C$, 'getRunForTab$I$I',  function (tabCount, tabIndex) {
for (var i=0; i < this.runCount; i++) {
var first=this.tabRuns[i];
var last=this.lastTabInRun$I$I(tabCount, i);
if (tabIndex >= first && tabIndex <= last ) {
return i;
}}
return 0;
});

Clazz.newMeth(C$, 'lastTabInRun$I$I',  function (tabCount, run) {
if (this.runCount == 1) {
return tabCount - 1;
}var nextRun=(run == this.runCount - 1 ? 0 : run + 1);
if (this.tabRuns[nextRun] == 0) {
return tabCount - 1;
}return this.tabRuns[nextRun] - 1;
});

Clazz.newMeth(C$, 'getTabRunOverlay$I',  function (tabPlacement) {
return this.tabRunOverlay;
});

Clazz.newMeth(C$, 'getTabRunIndent$I$I',  function (tabPlacement, run) {
return 0;
});

Clazz.newMeth(C$, 'shouldPadTabRun$I$I',  function (tabPlacement, run) {
return this.runCount > 1;
});

Clazz.newMeth(C$, 'shouldRotateTabRuns$I',  function (tabPlacement) {
return true;
});

Clazz.newMeth(C$, 'getIconForTab$I',  function (tabIndex) {
return (!this.tabPane.isEnabled$() || !this.tabPane.isEnabledAt$I(tabIndex) ) ? this.tabPane.getDisabledIconAt$I(tabIndex) : this.tabPane.getIconAt$I(tabIndex);
});

Clazz.newMeth(C$, 'getTextViewForTab$I',  function (tabIndex) {
if (this.htmlViews != null ) {
return this.htmlViews.elementAt$I(tabIndex);
}return null;
});

Clazz.newMeth(C$, 'calculateTabHeight$I$I$I',  function (tabPlacement, tabIndex, fontHeight) {
var height=0;
var c=this.tabPane.getTabComponentAt$I(tabIndex);
if (c != null ) {
height=c.getPreferredSize$().height;
} else {
var v=this.getTextViewForTab$I(tabIndex);
if (v != null ) {
height+=(v.getPreferredSpan$I(1)|0);
} else {
height+=fontHeight;
}var icon=this.getIconForTab$I(tabIndex);
if (icon != null ) {
height=Math.max(height, icon.getIconHeight$());
}}var tabInsets=this.getTabInsets$I$I(tabPlacement, tabIndex);
height+=tabInsets.top + tabInsets.bottom + 2 ;
return height;
});

Clazz.newMeth(C$, 'calculateMaxTabHeight$I',  function (tabPlacement) {
var metrics=this.getFontMetrics$();
var tabCount=this.tabPane.getTabCount$();
var result=0;
var fontHeight=metrics.getHeight$();
for (var i=0; i < tabCount; i++) {
result=Math.max(this.calculateTabHeight$I$I$I(tabPlacement, i, fontHeight), result);
}
return result;
});

Clazz.newMeth(C$, 'calculateTabWidth$I$I$java_awt_FontMetrics',  function (tabPlacement, tabIndex, metrics) {
var tabInsets=this.getTabInsets$I$I(tabPlacement, tabIndex);
var width=tabInsets.left + tabInsets.right + 3 ;
var tabComponent=this.tabPane.getTabComponentAt$I(tabIndex);
if (tabComponent != null ) {
width+=tabComponent.getPreferredSize$().width;
} else {
var icon=this.getIconForTab$I(tabIndex);
if (icon != null ) {
width+=icon.getIconWidth$() + this.textIconGap;
}var v=this.getTextViewForTab$I(tabIndex);
if (v != null ) {
width+=(v.getPreferredSpan$I(0)|0);
} else {
var title=this.tabPane.getTitleAt$I(tabIndex);
width+=$I$(31).stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(this.tabPane, metrics, title);
}}return width;
});

Clazz.newMeth(C$, 'calculateMaxTabWidth$I',  function (tabPlacement) {
var metrics=this.getFontMetrics$();
var tabCount=this.tabPane.getTabCount$();
var result=0;
for (var i=0; i < tabCount; i++) {
result=Math.max(this.calculateTabWidth$I$I$java_awt_FontMetrics(tabPlacement, i, metrics), result);
}
return result;
});

Clazz.newMeth(C$, 'calculateTabAreaHeight$I$I$I',  function (tabPlacement, horizRunCount, maxTabHeight) {
var tabAreaInsets=this.getTabAreaInsets$I(tabPlacement);
var tabRunOverlay=this.getTabRunOverlay$I(tabPlacement);
return (horizRunCount > 0 ? horizRunCount * (maxTabHeight - tabRunOverlay) + tabRunOverlay + tabAreaInsets.top + tabAreaInsets.bottom : 0);
});

Clazz.newMeth(C$, 'calculateTabAreaWidth$I$I$I',  function (tabPlacement, vertRunCount, maxTabWidth) {
var tabAreaInsets=this.getTabAreaInsets$I(tabPlacement);
var tabRunOverlay=this.getTabRunOverlay$I(tabPlacement);
return (vertRunCount > 0 ? vertRunCount * (maxTabWidth - tabRunOverlay) + tabRunOverlay + tabAreaInsets.left + tabAreaInsets.right : 0);
});

Clazz.newMeth(C$, 'getTabInsets$I$I',  function (tabPlacement, tabIndex) {
return this.tabInsets;
});

Clazz.newMeth(C$, 'getSelectedTabPadInsets$I',  function (tabPlacement) {
C$.rotateInsets$java_awt_Insets$java_awt_Insets$I(this.selectedTabPadInsets, this.currentPadInsets, tabPlacement);
return this.currentPadInsets;
});

Clazz.newMeth(C$, 'getTabAreaInsets$I',  function (tabPlacement) {
C$.rotateInsets$java_awt_Insets$java_awt_Insets$I(this.tabAreaInsets, this.currentTabAreaInsets, tabPlacement);
return this.currentTabAreaInsets;
});

Clazz.newMeth(C$, 'getContentBorderInsets$I',  function (tabPlacement) {
return this.contentBorderInsets;
});

Clazz.newMeth(C$, 'getFontMetrics$',  function () {
var font=this.tabPane.getFont$();
return this.tabPane.getFontMetrics$java_awt_Font(font);
});

Clazz.newMeth(C$, 'navigateSelectedTab$I',  function (direction) {
var tabPlacement=this.tabPane.getTabPlacement$();
var current=$I$(26).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.tabPane, this, "TabbedPane.selectionFollowsFocus", true) ? this.tabPane.getSelectedIndex$() : this.getFocusIndex$();
var tabCount=this.tabPane.getTabCount$();
var leftToRight=$I$(5).isLeftToRight$java_awt_Component(this.tabPane);
if (tabCount <= 0) {
return;
}var offset;
switch (tabPlacement) {
case 2:
case 4:
switch (direction) {
case 12:
this.selectNextTab$I(current);
break;
case 13:
this.selectPreviousTab$I(current);
break;
case 1:
this.selectPreviousTabInRun$I(current);
break;
case 5:
this.selectNextTabInRun$I(current);
break;
case 7:
offset=this.getTabRunOffset$I$I$I$Z(tabPlacement, tabCount, current, false);
this.selectAdjacentRunTab$I$I$I(tabPlacement, current, offset);
break;
case 3:
offset=this.getTabRunOffset$I$I$I$Z(tabPlacement, tabCount, current, true);
this.selectAdjacentRunTab$I$I$I(tabPlacement, current, offset);
break;
default:
}
break;
case 3:
case 1:
default:
switch (direction) {
case 12:
this.selectNextTab$I(current);
break;
case 13:
this.selectPreviousTab$I(current);
break;
case 1:
offset=this.getTabRunOffset$I$I$I$Z(tabPlacement, tabCount, current, false);
this.selectAdjacentRunTab$I$I$I(tabPlacement, current, offset);
break;
case 5:
offset=this.getTabRunOffset$I$I$I$Z(tabPlacement, tabCount, current, true);
this.selectAdjacentRunTab$I$I$I(tabPlacement, current, offset);
break;
case 3:
if (leftToRight) {
this.selectNextTabInRun$I(current);
} else {
this.selectPreviousTabInRun$I(current);
}break;
case 7:
if (leftToRight) {
this.selectPreviousTabInRun$I(current);
} else {
this.selectNextTabInRun$I(current);
}break;
default:
}
}
});

Clazz.newMeth(C$, 'selectNextTabInRun$I',  function (current) {
var tabCount=this.tabPane.getTabCount$();
var tabIndex=this.getNextTabIndexInRun$I$I(tabCount, current);
while (tabIndex != current && !this.tabPane.isEnabledAt$I(tabIndex) ){
tabIndex=this.getNextTabIndexInRun$I$I(tabCount, tabIndex);
}
p$1.navigateTo$I.apply(this, [tabIndex]);
});

Clazz.newMeth(C$, 'selectPreviousTabInRun$I',  function (current) {
var tabCount=this.tabPane.getTabCount$();
var tabIndex=this.getPreviousTabIndexInRun$I$I(tabCount, current);
while (tabIndex != current && !this.tabPane.isEnabledAt$I(tabIndex) ){
tabIndex=this.getPreviousTabIndexInRun$I$I(tabCount, tabIndex);
}
p$1.navigateTo$I.apply(this, [tabIndex]);
});

Clazz.newMeth(C$, 'selectNextTab$I',  function (current) {
var tabIndex=this.getNextTabIndex$I(current);
while (tabIndex != current && !this.tabPane.isEnabledAt$I(tabIndex) ){
tabIndex=this.getNextTabIndex$I(tabIndex);
}
p$1.navigateTo$I.apply(this, [tabIndex]);
});

Clazz.newMeth(C$, 'selectPreviousTab$I',  function (current) {
var tabIndex=this.getPreviousTabIndex$I(current);
while (tabIndex != current && !this.tabPane.isEnabledAt$I(tabIndex) ){
tabIndex=this.getPreviousTabIndex$I(tabIndex);
}
p$1.navigateTo$I.apply(this, [tabIndex]);
});

Clazz.newMeth(C$, 'selectAdjacentRunTab$I$I$I',  function (tabPlacement, tabIndex, offset) {
if (this.runCount < 2) {
return;
}var newIndex;
var r=this.rects[tabIndex];
switch (tabPlacement) {
case 2:
case 4:
newIndex=this.tabForCoordinate$javax_swing_JTabbedPane$I$I(this.tabPane, r.x + (r.width/2|0) + offset, r.y + (r.height/2|0));
break;
case 3:
case 1:
default:
newIndex=this.tabForCoordinate$javax_swing_JTabbedPane$I$I(this.tabPane, r.x + (r.width/2|0), r.y + (r.height/2|0) + offset);
}
if (newIndex != -1) {
while (!this.tabPane.isEnabledAt$I(newIndex) && newIndex != tabIndex ){
newIndex=this.getNextTabIndex$I(newIndex);
}
p$1.navigateTo$I.apply(this, [newIndex]);
}});

Clazz.newMeth(C$, 'navigateTo$I',  function (index) {
if ($I$(26).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.tabPane, this, "TabbedPane.selectionFollowsFocus", true)) {
this.tabPane.setSelectedIndex$I(index);
} else {
this.setFocusIndex$I$Z(index, true);
}}, p$1);

Clazz.newMeth(C$, 'setFocusIndex$I$Z',  function (index, repaint) {
if (repaint && !this.isRunsDirty ) {
p$1.repaintTab$I.apply(this, [this.focusIndex]);
this.focusIndex=index;
p$1.repaintTab$I.apply(this, [this.focusIndex]);
} else {
this.focusIndex=index;
}});

Clazz.newMeth(C$, 'repaintTab$I',  function (index) {
if (!this.isRunsDirty && index >= 0  && index < this.tabPane.getTabCount$() ) {
this.tabPane.repaint$java_awt_Rectangle(this.getTabBounds$javax_swing_JTabbedPane$I(this.tabPane, index));
}}, p$1);

Clazz.newMeth(C$, 'validateFocusIndex',  function () {
if (this.focusIndex >= this.tabPane.getTabCount$()) {
this.setFocusIndex$I$Z(this.tabPane.getSelectedIndex$(), false);
}}, p$1);

Clazz.newMeth(C$, 'getFocusIndex$',  function () {
return this.focusIndex;
});

Clazz.newMeth(C$, 'getTabRunOffset$I$I$I$Z',  function (tabPlacement, tabCount, tabIndex, forward) {
var run=this.getRunForTab$I$I(tabCount, tabIndex);
var offset;
switch (tabPlacement) {
case 2:
{
if (run == 0) {
offset=(forward ? -(this.calculateTabAreaWidth$I$I$I(tabPlacement, this.runCount, this.maxTabWidth) - this.maxTabWidth) : -this.maxTabWidth);
} else if (run == this.runCount - 1) {
offset=(forward ? this.maxTabWidth : this.calculateTabAreaWidth$I$I$I(tabPlacement, this.runCount, this.maxTabWidth) - this.maxTabWidth);
} else {
offset=(forward ? this.maxTabWidth : -this.maxTabWidth);
}break;
}case 4:
{
if (run == 0) {
offset=(forward ? this.maxTabWidth : this.calculateTabAreaWidth$I$I$I(tabPlacement, this.runCount, this.maxTabWidth) - this.maxTabWidth);
} else if (run == this.runCount - 1) {
offset=(forward ? -(this.calculateTabAreaWidth$I$I$I(tabPlacement, this.runCount, this.maxTabWidth) - this.maxTabWidth) : -this.maxTabWidth);
} else {
offset=(forward ? this.maxTabWidth : -this.maxTabWidth);
}break;
}case 3:
{
if (run == 0) {
offset=(forward ? this.maxTabHeight : this.calculateTabAreaHeight$I$I$I(tabPlacement, this.runCount, this.maxTabHeight) - this.maxTabHeight);
} else if (run == this.runCount - 1) {
offset=(forward ? -(this.calculateTabAreaHeight$I$I$I(tabPlacement, this.runCount, this.maxTabHeight) - this.maxTabHeight) : -this.maxTabHeight);
} else {
offset=(forward ? this.maxTabHeight : -this.maxTabHeight);
}break;
}case 1:
default:
{
if (run == 0) {
offset=(forward ? -(this.calculateTabAreaHeight$I$I$I(tabPlacement, this.runCount, this.maxTabHeight) - this.maxTabHeight) : -this.maxTabHeight);
} else if (run == this.runCount - 1) {
offset=(forward ? this.maxTabHeight : this.calculateTabAreaHeight$I$I$I(tabPlacement, this.runCount, this.maxTabHeight) - this.maxTabHeight);
} else {
offset=(forward ? this.maxTabHeight : -this.maxTabHeight);
}}}
return offset;
});

Clazz.newMeth(C$, 'getPreviousTabIndex$I',  function (base) {
var tabIndex=(base - 1 >= 0 ? base - 1 : this.tabPane.getTabCount$() - 1);
return (tabIndex >= 0 ? tabIndex : 0);
});

Clazz.newMeth(C$, 'getNextTabIndex$I',  function (base) {
return (base + 1) % this.tabPane.getTabCount$();
});

Clazz.newMeth(C$, 'getNextTabIndexInRun$I$I',  function (tabCount, base) {
if (this.runCount < 2) {
return this.getNextTabIndex$I(base);
}var currentRun=this.getRunForTab$I$I(tabCount, base);
var next=this.getNextTabIndex$I(base);
if (next == this.tabRuns[this.getNextTabRun$I(currentRun)]) {
return this.tabRuns[currentRun];
}return next;
});

Clazz.newMeth(C$, 'getPreviousTabIndexInRun$I$I',  function (tabCount, base) {
if (this.runCount < 2) {
return this.getPreviousTabIndex$I(base);
}var currentRun=this.getRunForTab$I$I(tabCount, base);
if (base == this.tabRuns[currentRun]) {
var previous=this.tabRuns[this.getNextTabRun$I(currentRun)] - 1;
return (previous != -1 ? previous : tabCount - 1);
}return this.getPreviousTabIndex$I(base);
});

Clazz.newMeth(C$, 'getPreviousTabRun$I',  function (baseRun) {
var runIndex=(baseRun - 1 >= 0 ? baseRun - 1 : this.runCount - 1);
return (runIndex >= 0 ? runIndex : 0);
});

Clazz.newMeth(C$, 'getNextTabRun$I',  function (baseRun) {
return (baseRun + 1) % this.runCount;
});

Clazz.newMeth(C$, 'rotateInsets$java_awt_Insets$java_awt_Insets$I',  function (topInsets, targetInsets, targetPlacement) {
switch (targetPlacement) {
case 2:
targetInsets.top=topInsets.left;
targetInsets.left=topInsets.top;
targetInsets.bottom=topInsets.right;
targetInsets.right=topInsets.bottom;
break;
case 3:
targetInsets.top=topInsets.bottom;
targetInsets.left=topInsets.left;
targetInsets.bottom=topInsets.top;
targetInsets.right=topInsets.right;
break;
case 4:
targetInsets.top=topInsets.left;
targetInsets.left=topInsets.bottom;
targetInsets.bottom=topInsets.right;
targetInsets.right=topInsets.top;
break;
case 1:
default:
targetInsets.top=topInsets.top;
targetInsets.left=topInsets.left;
targetInsets.bottom=topInsets.bottom;
targetInsets.right=topInsets.right;
}
}, 1);

Clazz.newMeth(C$, 'requestFocusForVisibleComponent$',  function () {
return $I$(31,"tabbedPaneChangeFocusTo$java_awt_Component",[this.getVisibleComponent$()]);
});

Clazz.newMeth(C$, 'createHTMLVector',  function () {
var htmlViews=Clazz.new_($I$(33,1));
var count=this.tabPane.getTabCount$();
if (count > 0) {
for (var i=0; i < count; i++) {
var title=this.tabPane.getTitleAt$I(i);
if ($I$(11).isHTMLString$S(title)) {
htmlViews.addElement$O($I$(11).createHTMLView$javax_swing_JComponent$S(this.tabPane, title));
} else {
htmlViews.addElement$O(null);
}}
}return htmlViews;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.xCropLen=Clazz.array(Integer.TYPE, -1, [1, 1, 0, 0, 1, 1, 2, 2]);
C$.yCropLen=Clazz.array(Integer.TYPE, -1, [0, 3, 3, 6, 6, 9, 9, 12]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (key) {
;C$.superclazz.c$$S.apply(this,[key]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var key=this.getName$();
var pane=e.getSource$();
var ui=pane.getUI$();
if (ui == null ) {
return;
}if (key == "navigateNext") {
ui.navigateSelectedTab$I(12);
} else if (key == "navigatePrevious") {
ui.navigateSelectedTab$I(13);
} else if (key == "navigateRight") {
ui.navigateSelectedTab$I(3);
} else if (key == "navigateLeft") {
ui.navigateSelectedTab$I(7);
} else if (key == "navigateUp") {
ui.navigateSelectedTab$I(1);
} else if (key == "navigateDown") {
ui.navigateSelectedTab$I(5);
} else if (key == "navigatePageUp") {
var tabPlacement=pane.getTabPlacement$();
if (tabPlacement == 1 || tabPlacement == 3 ) {
ui.navigateSelectedTab$I(7);
} else {
ui.navigateSelectedTab$I(1);
}} else if (key == "navigatePageDown") {
var tabPlacement=pane.getTabPlacement$();
if (tabPlacement == 1 || tabPlacement == 3 ) {
ui.navigateSelectedTab$I(3);
} else {
ui.navigateSelectedTab$I(5);
}} else if (key == "requestFocus") {
pane.requestFocus$();
} else if (key == "requestFocusForVisibleComponent") {
ui.requestFocusForVisibleComponent$();
} else if (key == "setSelectedIndex") {
var command=e.getActionCommand$();
if (command != null  && command.length$() > 0 ) {
var mnemonic=e.getActionCommand$().charAt$I(0).$c();
if (mnemonic >= 97  && mnemonic <= 122  ) {
mnemonic-=(32);
}var index=ui.mnemonicToIndexMap.get$O( new Integer(mnemonic));
if (index != null  && pane.isEnabledAt$I(index.intValue$()) ) {
pane.setSelectedIndex$I(index.intValue$());
}}} else if (key == "selectTabWithFocus") {
var focusIndex=ui.getFocusIndex$();
if (focusIndex != -1) {
pane.setSelectedIndex$I(focusIndex);
}} else if (key == "scrollTabsForwardAction") {
if (p$1.scrollableTabLayoutEnabled.apply(ui, [])) {
ui.tabScroller.scrollForward$I(pane.getTabPlacement$());
}} else if (key == "scrollTabsBackwardAction") {
if (p$1.scrollableTabLayoutEnabled.apply(ui, [])) {
ui.tabScroller.scrollBackward$I(pane.getTabPlacement$());
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "TabbedPaneLayout", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.LayoutManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
return this.calculateSize$Z(false);
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
return this.calculateSize$Z(true);
});

Clazz.newMeth(C$, 'calculateSize$Z',  function (minimum) {
var tabPlacement=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$();
var insets=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getInsets$();
var contentInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getContentBorderInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
var tabAreaInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabAreaInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
var zeroSize=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
var height=0;
var width=0;
var cWidth=0;
var cHeight=0;
for (var i=0; i < this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$(); i++) {
var component=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getComponentAt$I(i);
if (component != null ) {
var size=zeroSize;
size=minimum ? component.getMinimumSize$() : component.getPreferredSize$();
if (size != null ) {
cHeight=Math.max(size.height, cHeight);
cWidth=Math.max(size.width, cWidth);
}}}
width+=cWidth;
height+=cHeight;
var tabExtent=0;
switch (tabPlacement) {
case 2:
case 4:
height=Math.max(height, this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabHeight$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]));
tabExtent=this.preferredTabAreaWidth$I$I(tabPlacement, height - tabAreaInsets.top - tabAreaInsets.bottom );
width+=tabExtent;
break;
case 1:
case 3:
default:
width=Math.max(width, this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabWidth$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]));
tabExtent=this.preferredTabAreaHeight$I$I(tabPlacement, width - tabAreaInsets.left - tabAreaInsets.right );
height+=tabExtent;
}
return Clazz.new_($I$(1,1).c$$I$I,[width + insets.left + insets.right + contentInsets.left + contentInsets.right , height + insets.bottom + insets.top + contentInsets.top + contentInsets.bottom ]);
});

Clazz.newMeth(C$, 'preferredTabAreaHeight$I$I',  function (tabPlacement, width) {
var metrics=this.b$['swingjs.plaf.JSTabbedPaneUI'].getFontMetrics$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
var tabCount=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$();
var total=0;
if (tabCount > 0) {
var rows=1;
var x=0;
var maxTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabHeight$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
for (var i=0; i < tabCount; i++) {
var tabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabWidth$I$I$java_awt_FontMetrics.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, metrics]);
if (x != 0 && x + tabWidth > width ) {
++rows;
x=0;
}x+=tabWidth;
}
total=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, rows, maxTabHeight]);
}return total;
});

Clazz.newMeth(C$, 'preferredTabAreaWidth$I$I',  function (tabPlacement, height) {
var metrics=this.b$['swingjs.plaf.JSTabbedPaneUI'].getFontMetrics$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
var tabCount=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$();
var total=0;
if (tabCount > 0) {
var columns=1;
var y=0;
var fontHeight=metrics.getHeight$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabWidth$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
for (var i=0; i < tabCount; i++) {
var tabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, fontHeight]);
if (y != 0 && y + tabHeight > height ) {
++columns;
y=0;
}y+=tabHeight;
}
total=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaWidth$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, columns, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth]);
}return total;
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].setRolloverTab$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [-1]);
var tabPlacement=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$();
var insets=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getInsets$();
var selectedIndex=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$();
var visibleComponent=this.b$['swingjs.plaf.JSTabbedPaneUI'].getVisibleComponent$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
this.calculateLayoutInfo$();
var selectedComponent=null;
if (selectedIndex < 0) {
if (visibleComponent != null ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].setVisibleComponent$java_awt_Component.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [null]);
}} else {
selectedComponent=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getComponentAt$I(selectedIndex);
}var cx;
var cy;
var cw;
var ch;
var totalTabWidth=0;
var totalTabHeight=0;
var contentInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getContentBorderInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
var shouldChangeFocus=false;
if (selectedComponent != null ) {
if (selectedComponent !== visibleComponent  && visibleComponent != null  ) {
if ($I$(2).findFocusOwner$java_awt_Component(visibleComponent) != null ) {
shouldChangeFocus=true;
}}this.b$['swingjs.plaf.JSTabbedPaneUI'].setVisibleComponent$java_awt_Component.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [selectedComponent]);
}var bounds=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getBounds$();
var numChildren=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getComponentCount$();
if (numChildren > 0) {
switch (tabPlacement) {
case 2:
totalTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaWidth$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth]);
cx=insets.left + totalTabWidth + contentInsets.left ;
cy=insets.top + contentInsets.top;
break;
case 4:
totalTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaWidth$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth]);
cx=insets.left + contentInsets.left;
cy=insets.top + contentInsets.top;
break;
case 3:
totalTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight]);
cx=insets.left + contentInsets.left;
cy=insets.top + contentInsets.top;
break;
case 1:
default:
totalTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight]);
cx=insets.left + contentInsets.left;
cy=insets.top + totalTabHeight + contentInsets.top ;
}
cw=bounds.width - totalTabWidth - insets.left - insets.right - contentInsets.left - contentInsets.right ;
ch=bounds.height - totalTabHeight - insets.top - insets.bottom - contentInsets.top - contentInsets.bottom ;
for (var i=0; i < numChildren; i++) {
var child=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getComponent$I(i);
if (child === this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer ) {
var tabContainerWidth=totalTabWidth == 0 ? bounds.width : totalTabWidth + insets.left + insets.right + contentInsets.left + contentInsets.right ;
var tabContainerHeight=totalTabHeight == 0 ? bounds.height : totalTabHeight + insets.top + insets.bottom + contentInsets.top + contentInsets.bottom ;
var tabContainerX=0;
var tabContainerY=0;
if (tabPlacement == 3) {
tabContainerY=bounds.height - tabContainerHeight;
} else if (tabPlacement == 4) {
tabContainerX=bounds.width - tabContainerWidth;
}child.setBounds$I$I$I$I(tabContainerX, tabContainerY, tabContainerWidth, tabContainerHeight);
} else {
child.setBounds$I$I$I$I(cx, cy, cw, ch);
}}
}p$2.layoutTabComponents.apply(this, []);
if (shouldChangeFocus) {
if (!this.b$['swingjs.plaf.JSTabbedPaneUI'].requestFocusForVisibleComponent$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [])) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.requestFocus$();
}}});

Clazz.newMeth(C$, 'calculateLayoutInfo$',  function () {
var tabCount=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].assureRectsCreated$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabCount]);
this.calculateTabRects$I$I(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$(), tabCount);
this.b$['swingjs.plaf.JSTabbedPaneUI'].isRunsDirty=false;
});

Clazz.newMeth(C$, 'layoutTabComponents',  function () {
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer == null ) {
return;
}var rect=Clazz.new_($I$(3,1));
var delta=Clazz.new_([-this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer.getX$(), -this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer.getY$()],$I$(4,1).c$$I$I);
if (p$1.scrollableTabLayoutEnabled.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [])) {
p$1.translatePointToTabPanel$I$I$java_awt_Point.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [0, 0, delta]);
}for (var i=0; i < this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$(); i++) {
var c=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabComponentAt$I(i);
if (c == null ) {
continue;
}this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabBounds$I$java_awt_Rectangle.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [i, rect]);
var preferredSize=c.getPreferredSize$();
var insets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabInsets$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$(), i]);
var outerX=rect.x + insets.left + delta.x ;
var outerY=rect.y + insets.top + delta.y ;
var outerWidth=rect.width - insets.left - insets.right ;
var outerHeight=rect.height - insets.top - insets.bottom ;
var x=outerX + ((outerWidth - preferredSize.width)/2|0);
var y=outerY + ((outerHeight - preferredSize.height)/2|0);
var tabPlacement=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$();
var isSeleceted=i == this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$();
c.setBounds$I$I$I$I(x + this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabLabelShiftX$I$I$Z.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, isSeleceted]), y + this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabLabelShiftY$I$I$Z.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, isSeleceted]), preferredSize.width, preferredSize.height);
}
}, p$2);

Clazz.newMeth(C$, 'calculateTabRects$I$I',  function (tabPlacement, tabCount) {
var metrics=this.b$['swingjs.plaf.JSTabbedPaneUI'].getFontMetrics$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
var size=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSize$();
var insets=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getInsets$();
var tabAreaInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabAreaInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
var fontHeight=metrics.getHeight$();
var selectedIndex=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$();
var tabRunOverlay;
var i;
var j;
var x;
var y;
var returnAt;
var verticalTabRuns=(tabPlacement == 2 || tabPlacement == 4 );
var leftToRight=$I$(5).isLeftToRight$java_awt_Component(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane);
switch (tabPlacement) {
case 2:
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabWidth$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
x=insets.left + tabAreaInsets.left;
y=insets.top + tabAreaInsets.top;
returnAt=size.height - (insets.bottom + tabAreaInsets.bottom);
break;
case 4:
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabWidth$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
x=size.width - insets.right - tabAreaInsets.right - this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth ;
y=insets.top + tabAreaInsets.top;
returnAt=size.height - (insets.bottom + tabAreaInsets.bottom);
break;
case 3:
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabHeight$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
x=insets.left + tabAreaInsets.left;
y=size.height - insets.bottom - tabAreaInsets.bottom - this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight ;
returnAt=size.width - (insets.right + tabAreaInsets.right);
break;
case 1:
default:
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabHeight$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
x=insets.left + tabAreaInsets.left;
y=insets.top + tabAreaInsets.top;
returnAt=size.width - (insets.right + tabAreaInsets.right);
break;
}
tabRunOverlay=this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabRunOverlay$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount=0;
this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedRun=-1;
if (tabCount == 0) {
return;
}var rect;
for (i=0; i < tabCount; i++) {
rect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i];
if (!verticalTabRuns) {
if (i > 0) {
rect.x=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].x + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].width;
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[0]=0;
this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount=1;
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=0;
rect.x=x;
}rect.width=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabWidth$I$I$java_awt_FontMetrics.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, metrics]);
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=Math.max(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth, rect.width);
if (rect.x != 2 + insets.left && rect.x + rect.width > returnAt ) {
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount > this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns.length - 1) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].expandTabRunsArray$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
}this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount]=i;
++this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount;
rect.x=x;
}rect.y=y;
rect.height=this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight;
} else {
if (i > 0) {
rect.y=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].y + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].height;
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[0]=0;
this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount=1;
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight=0;
rect.y=y;
}rect.height=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, fontHeight]);
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight=Math.max(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight, rect.height);
if (rect.y != 2 + insets.top && rect.y + rect.height > returnAt ) {
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount > this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns.length - 1) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].expandTabRunsArray$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
}this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount]=i;
++this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount;
rect.y=y;
}rect.x=x;
rect.width=this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth;
}if (i == selectedIndex) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedRun=this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount - 1;
}}
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount > 1) {
this.normalizeTabRuns$I$I$I$I(tabPlacement, tabCount, verticalTabRuns ? y : x, returnAt);
this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedRun=this.b$['swingjs.plaf.JSTabbedPaneUI'].getRunForTab$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabCount, selectedIndex]);
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].shouldRotateTabRuns$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement])) {
this.rotateTabRuns$I$I(tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedRun);
}}for (i=this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount - 1; i >= 0; i--) {
var start=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[i];
var next=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[i == (this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount - 1) ? 0 : i + 1];
var end=(next != 0 ? next - 1 : tabCount - 1);
if (!verticalTabRuns) {
for (j=start; j <= end; j++) {
rect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j];
rect.y=y;
rect.x+=this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabRunIndent$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i]);
}
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].shouldPadTabRun$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i])) {
this.padTabRun$I$I$I$I(tabPlacement, start, end, returnAt);
}if (tabPlacement == 3) {
y-=(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight - tabRunOverlay);
} else {
y+=(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight - tabRunOverlay);
}} else {
for (j=start; j <= end; j++) {
rect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j];
rect.x=x;
rect.y+=this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabRunIndent$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i]);
}
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].shouldPadTabRun$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i])) {
this.padTabRun$I$I$I$I(tabPlacement, start, end, returnAt);
}if (tabPlacement == 4) {
x-=(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth - tabRunOverlay);
} else {
x+=(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth - tabRunOverlay);
}}}
this.padSelectedTab$I$I(tabPlacement, selectedIndex);
if (!leftToRight && !verticalTabRuns ) {
var rightMargin=size.width - (insets.right + tabAreaInsets.right);
for (i=0; i < tabCount; i++) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].x=rightMargin - this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].x - this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].width ;
}
}});

Clazz.newMeth(C$, 'rotateTabRuns$I$I',  function (tabPlacement, selectedRun) {
for (var i=0; i < selectedRun; i++) {
var save=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[0];
for (var j=1; j < this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount; j++) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[j - 1]=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[j];
}
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount - 1]=save;
}
});

Clazz.newMeth(C$, 'normalizeTabRuns$I$I$I$I',  function (tabPlacement, tabCount, start, max) {
var verticalTabRuns=(tabPlacement == 2 || tabPlacement == 4 );
var run=this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount - 1;
var keepAdjusting=true;
var weight=1.25;
while (keepAdjusting){
var last=this.b$['swingjs.plaf.JSTabbedPaneUI'].lastTabInRun$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabCount, run]);
var prevLast=this.b$['swingjs.plaf.JSTabbedPaneUI'].lastTabInRun$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabCount, run - 1]);
var end;
var prevLastLen;
if (!verticalTabRuns) {
end=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[last].x + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[last].width;
prevLastLen=((this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth * weight)|0);
} else {
end=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[last].y + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[last].height;
prevLastLen=((this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight * weight * 2 )|0);
}if (max - end > prevLastLen) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[run]=prevLast;
if (!verticalTabRuns) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[prevLast].x=start;
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[prevLast].y=start;
}for (var i=prevLast + 1; i <= last; i++) {
if (!verticalTabRuns) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].x=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].x + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].width;
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].y=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].y + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].height;
}}
} else if (run == this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount - 1) {
keepAdjusting=false;
}if (run - 1 > 0) {
run-=1;
} else {
run=this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount - 1;
weight+=0.25;
}}
});

Clazz.newMeth(C$, 'padTabRun$I$I$I$I',  function (tabPlacement, start, end, max) {
var lastRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[end];
if (tabPlacement == 1 || tabPlacement == 3 ) {
var runWidth=(lastRect.x + lastRect.width) - this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[start].x;
var deltaWidth=max - (lastRect.x + lastRect.width);
var factor=deltaWidth / runWidth;
for (var j=start; j <= end; j++) {
var pastRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j];
if (j > start) {
pastRect.x=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j - 1].x + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j - 1].width;
}pastRect.width+=Math.round(pastRect.width * factor);
}
lastRect.width=max - lastRect.x;
} else {
var runHeight=(lastRect.y + lastRect.height) - this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[start].y;
var deltaHeight=max - (lastRect.y + lastRect.height);
var factor=deltaHeight / runHeight;
for (var j=start; j <= end; j++) {
var pastRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j];
if (j > start) {
pastRect.y=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j - 1].y + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[j - 1].height;
}pastRect.height+=Math.round(pastRect.height * factor);
}
lastRect.height=max - lastRect.y;
}});

Clazz.newMeth(C$, 'padSelectedTab$I$I',  function (tabPlacement, selectedIndex) {
if (selectedIndex >= 0) {
var selRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[selectedIndex];
var padInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getSelectedTabPadInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
selRect.x-=padInsets.left;
selRect.width+=(padInsets.left + padInsets.right);
selRect.y-=padInsets.top;
selRect.height+=(padInsets.top + padInsets.bottom);
if (!p$1.scrollableTabLayoutEnabled.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [])) {
var size=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSize$();
var insets=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getInsets$();
if ((tabPlacement == 2) || (tabPlacement == 4) ) {
var top=insets.top - selRect.y;
if (top > 0) {
selRect.y+=top;
selRect.height-=top;
}var bottom=(selRect.y + selRect.height) + insets.bottom - size.height;
if (bottom > 0) {
selRect.height-=bottom;
}} else {
var left=insets.left - selRect.x;
if (left > 0) {
selRect.x+=left;
selRect.width-=left;
}var right=(selRect.x + selRect.width) + insets.right - size.width;
if (right > 0) {
selRect.width-=right;
}}}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "TabbedPaneScrollLayout", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['swingjs.plaf.JSTabbedPaneUI','.TabbedPaneLayout']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'preferredTabAreaHeight$I$I',  function (tabPlacement, width) {
return this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabHeight$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
});

Clazz.newMeth(C$, 'preferredTabAreaWidth$I$I',  function (tabPlacement, height) {
return this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabWidth$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].setRolloverTab$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [-1]);
var tabPlacement=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$();
var tabCount=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$();
var insets=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getInsets$();
var selectedIndex=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$();
var visibleComponent=this.b$['swingjs.plaf.JSTabbedPaneUI'].getVisibleComponent$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
this.calculateLayoutInfo$();
var selectedComponent=null;
if (selectedIndex < 0) {
if (visibleComponent != null ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].setVisibleComponent$java_awt_Component.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [null]);
}} else {
selectedComponent=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getComponentAt$I(selectedIndex);
}if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$() == 0) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.resetParams$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollForwardButton.setVisible$Z(false);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollBackwardButton.setVisible$Z(false);
return;
}var shouldChangeFocus=false;
if (selectedComponent != null ) {
if (selectedComponent !== visibleComponent  && visibleComponent != null  ) {
if ($I$(2).findFocusOwner$java_awt_Component(visibleComponent) != null ) {
shouldChangeFocus=true;
}}this.b$['swingjs.plaf.JSTabbedPaneUI'].setVisibleComponent$java_awt_Component.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [selectedComponent]);
}var tx;
var ty;
var tw;
var th;
var cx;
var cy;
var cw;
var ch;
var contentInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getContentBorderInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
var bounds=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getBounds$();
var numChildren=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getComponentCount$();
if (numChildren > 0) {
switch (tabPlacement) {
case 2:
tw=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaWidth$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth]);
th=bounds.height - insets.top - insets.bottom ;
tx=insets.left;
ty=insets.top;
cx=tx + tw + contentInsets.left ;
cy=ty + contentInsets.top;
cw=bounds.width - insets.left - insets.right - tw - contentInsets.left - contentInsets.right ;
ch=bounds.height - insets.top - insets.bottom - contentInsets.top - contentInsets.bottom ;
break;
case 4:
tw=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaWidth$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth]);
th=bounds.height - insets.top - insets.bottom ;
tx=bounds.width - insets.right - tw ;
ty=insets.top;
cx=insets.left + contentInsets.left;
cy=insets.top + contentInsets.top;
cw=bounds.width - insets.left - insets.right - tw - contentInsets.left - contentInsets.right ;
ch=bounds.height - insets.top - insets.bottom - contentInsets.top - contentInsets.bottom ;
break;
case 3:
tw=bounds.width - insets.left - insets.right ;
th=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight]);
tx=insets.left;
ty=bounds.height - insets.bottom - th ;
cx=insets.left + contentInsets.left;
cy=insets.top + contentInsets.top;
cw=bounds.width - insets.left - insets.right - contentInsets.left - contentInsets.right ;
ch=bounds.height - insets.top - insets.bottom - th - contentInsets.top - contentInsets.bottom ;
break;
case 1:
default:
tw=bounds.width - insets.left - insets.right ;
th=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabAreaHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount, this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight]);
tx=insets.left;
ty=insets.top;
cx=tx + contentInsets.left;
cy=ty + th + contentInsets.top ;
cw=bounds.width - insets.left - insets.right - contentInsets.left - contentInsets.right ;
ch=bounds.height - insets.top - insets.bottom - th - contentInsets.top - contentInsets.bottom ;
}
for (var i=0; i < numChildren; i++) {
var child=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getComponent$I(i);
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller != null  && child === this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.viewport  ) {
var viewport=child;
var viewRect=viewport.getViewRect$();
var vw=tw;
var vh=th;
var butSize=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollForwardButton.getPreferredSize$();
switch (tabPlacement) {
case 2:
case 4:
var totalTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].y + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].height;
if (totalTabHeight > th) {
vh=(th > 2 * butSize.height) ? th - 2 * butSize.height : 0;
if (totalTabHeight - viewRect.y <= vh) {
vh=totalTabHeight - viewRect.y;
}}break;
case 3:
case 1:
default:
var totalTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].x + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].width;
if (totalTabWidth > tw) {
vw=(tw > 2 * butSize.width) ? tw - 2 * butSize.width : 0;
if (totalTabWidth - viewRect.x <= vw) {
vw=totalTabWidth - viewRect.x;
}}}
child.setBounds$I$I$I$I(tx, ty, vw, vh);
} else if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller != null  && (child === this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollForwardButton  || child === this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollBackwardButton  ) ) {
var scrollbutton=child;
var bsize=scrollbutton.getPreferredSize$();
var bx=0;
var by=0;
var bw=bsize.width;
var bh=bsize.height;
var visible=false;
switch (tabPlacement) {
case 2:
case 4:
var totalTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].y + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].height;
if (totalTabHeight > th) {
visible=true;
bx=(tabPlacement == 2 ? tx + tw - bsize.width : tx);
by=(child === this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollForwardButton ) ? bounds.height - insets.bottom - bsize.height  : bounds.height - insets.bottom - 2 * bsize.height ;
}break;
case 3:
case 1:
default:
var totalTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].x + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabCount - 1].width;
if (totalTabWidth > tw) {
visible=true;
bx=(child === this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollForwardButton ) ? bounds.width - insets.left - bsize.width  : bounds.width - insets.left - 2 * bsize.width ;
by=(tabPlacement == 1 ? ty + th - bsize.height : ty);
}}
child.setVisible$Z(visible);
if (visible) {
child.setBounds$I$I$I$I(bx, by, bw, bh);
}} else {
child.setBounds$I$I$I$I(cx, cy, cw, ch);
}}
C$.superclazz.prototype.layoutTabComponents.apply(this, []);
p$3.layoutCroppedEdge.apply(this, []);
if (shouldChangeFocus) {
if (!this.b$['swingjs.plaf.JSTabbedPaneUI'].requestFocusForVisibleComponent$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [])) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.requestFocus$();
}}}});

Clazz.newMeth(C$, 'layoutCroppedEdge',  function () {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.resetParams$();
var viewRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.viewport.getViewRect$();
var cropline;
for (var i=0; i < this.b$['swingjs.plaf.JSTabbedPaneUI'].rects.length; i++) {
var tabRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i];
switch (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$()) {
case 2:
case 4:
cropline=viewRect.y + viewRect.height;
if ((tabRect.y < cropline) && (tabRect.y + tabRect.height > cropline) ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.setParams$I$I$I$I(i, cropline - tabRect.y - 1 , -this.b$['swingjs.plaf.JSTabbedPaneUI'].currentTabAreaInsets.left, 0);
}break;
case 1:
case 3:
default:
cropline=viewRect.x + viewRect.width;
if ((tabRect.x < cropline - 1) && (tabRect.x + tabRect.width > cropline) ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.setParams$I$I$I$I(i, cropline - tabRect.x - 1 , 0, -this.b$['swingjs.plaf.JSTabbedPaneUI'].currentTabAreaInsets.top);
}}
}
}, p$3);

Clazz.newMeth(C$, 'calculateTabRects$I$I',  function (tabPlacement, tabCount) {
var metrics=this.b$['swingjs.plaf.JSTabbedPaneUI'].getFontMetrics$.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
var size=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSize$();
var insets=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getInsets$();
var tabAreaInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getTabAreaInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
var fontHeight=metrics.getHeight$();
var selectedIndex=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$();
var i;
var j;
var verticalTabRuns=(tabPlacement == 2 || tabPlacement == 4 );
var leftToRight=$I$(5).isLeftToRight$java_awt_Component(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane);
var x=tabAreaInsets.left;
var y=tabAreaInsets.top;
var totalWidth=0;
var totalHeight=0;
switch (tabPlacement) {
case 2:
case 4:
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabWidth$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
break;
case 3:
case 1:
default:
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateMaxTabHeight$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
}
this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount=0;
this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedRun=-1;
if (tabCount == 0) {
return;
}this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedRun=0;
this.b$['swingjs.plaf.JSTabbedPaneUI'].runCount=1;
var rect;
for (i=0; i < tabCount; i++) {
rect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i];
if (!verticalTabRuns) {
if (i > 0) {
rect.x=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].x + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].width;
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[0]=0;
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=0;
totalHeight+=this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight;
rect.x=x;
}rect.width=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabWidth$I$I$java_awt_FontMetrics.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, metrics]);
totalWidth=rect.x + rect.width;
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth=Math.max(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth, rect.width);
rect.y=y;
rect.height=this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight;
} else {
if (i > 0) {
rect.y=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].y + this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i - 1].height;
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabRuns[0]=0;
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight=0;
totalWidth=this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth;
rect.y=y;
}rect.height=this.b$['swingjs.plaf.JSTabbedPaneUI'].calculateTabHeight$I$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement, i, fontHeight]);
totalHeight=rect.y + rect.height;
this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight=Math.max(this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabHeight, rect.height);
rect.x=x;
rect.width=this.b$['swingjs.plaf.JSTabbedPaneUI'].maxTabWidth;
}}
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabsOverlapBorder) {
this.padSelectedTab$I$I(tabPlacement, selectedIndex);
}if (!leftToRight && !verticalTabRuns ) {
var rightMargin=size.width - (insets.right + tabAreaInsets.right);
for (i=0; i < tabCount; i++) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].x=rightMargin - this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].x - this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[i].width ;
}
}this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.tabPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(1,1).c$$I$I,[totalWidth, totalHeight]));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "ScrollableTabSupport", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.ActionListener', 'javax.swing.event.ChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabViewPosition=Clazz.new_($I$(4,1).c$$I$I,[0, 0]);
},1);

C$.$fields$=[['I',['leadingTabIndex'],'O',['viewport','swingjs.plaf.JSTabbedPaneUI.ScrollableTabViewport','tabPanel','swingjs.plaf.JSTabbedPaneUI.ScrollableTabPanel','scrollForwardButton','javax.swing.JButton','+scrollBackwardButton','croppedEdge','swingjs.plaf.JSTabbedPaneUI.CroppedEdge','tabViewPosition','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$I',  function (tabPlacement) {
;C$.$init$.apply(this);
this.viewport=Clazz.new_($I$(6,1),[this, null]);
this.tabPanel=Clazz.new_($I$(7,1),[this, null]);
this.viewport.setView$java_awt_Component(this.tabPanel);
this.viewport.addChangeListener$javax_swing_event_ChangeListener(this);
this.croppedEdge=Clazz.new_($I$(8,1),[this, null]);
this.createButtons$();
}, 1);

Clazz.newMeth(C$, 'createButtons$',  function () {
if (this.scrollForwardButton != null ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.remove$java_awt_Component(this.scrollForwardButton);
this.scrollForwardButton.removeActionListener$java_awt_event_ActionListener(this);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.remove$java_awt_Component(this.scrollBackwardButton);
this.scrollBackwardButton.removeActionListener$java_awt_event_ActionListener(this);
}var tabPlacement=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$();
if (tabPlacement == 1 || tabPlacement == 3 ) {
this.scrollForwardButton=this.b$['swingjs.plaf.JSTabbedPaneUI'].createScrollButton$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [3]);
this.scrollBackwardButton=this.b$['swingjs.plaf.JSTabbedPaneUI'].createScrollButton$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [7]);
} else {
this.scrollForwardButton=this.b$['swingjs.plaf.JSTabbedPaneUI'].createScrollButton$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [5]);
this.scrollBackwardButton=this.b$['swingjs.plaf.JSTabbedPaneUI'].createScrollButton$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [1]);
}this.scrollForwardButton.addActionListener$java_awt_event_ActionListener(this);
this.scrollBackwardButton.addActionListener$java_awt_event_ActionListener(this);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.add$java_awt_Component(this.scrollForwardButton);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.add$java_awt_Component(this.scrollBackwardButton);
});

Clazz.newMeth(C$, 'scrollForward$I',  function (tabPlacement) {
var viewSize=this.viewport.getViewSize$();
var viewRect=this.viewport.getViewRect$();
if (tabPlacement == 1 || tabPlacement == 3 ) {
if (viewRect.width >= viewSize.width - viewRect.x) {
return;
}} else {
if (viewRect.height >= viewSize.height - viewRect.y) {
return;
}}this.setLeadingTabIndex$I$I(tabPlacement, this.leadingTabIndex + 1);
});

Clazz.newMeth(C$, 'scrollBackward$I',  function (tabPlacement) {
if (this.leadingTabIndex == 0) {
return;
}this.setLeadingTabIndex$I$I(tabPlacement, this.leadingTabIndex - 1);
});

Clazz.newMeth(C$, 'setLeadingTabIndex$I$I',  function (tabPlacement, index) {
this.leadingTabIndex=index;
var viewSize=this.viewport.getViewSize$();
var viewRect=this.viewport.getViewRect$();
switch (tabPlacement) {
case 1:
case 3:
this.tabViewPosition.x=this.leadingTabIndex == 0 ? 0 : this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[this.leadingTabIndex].x;
if ((viewSize.width - this.tabViewPosition.x) < viewRect.width) {
var extentSize=Clazz.new_($I$(1,1).c$$I$I,[viewSize.width - this.tabViewPosition.x, viewRect.height]);
this.viewport.setExtentSize$java_awt_Dimension(extentSize);
}break;
case 2:
case 4:
this.tabViewPosition.y=this.leadingTabIndex == 0 ? 0 : this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[this.leadingTabIndex].y;
if ((viewSize.height - this.tabViewPosition.y) < viewRect.height) {
var extentSize=Clazz.new_($I$(1,1).c$$I$I,[viewRect.width, viewSize.height - this.tabViewPosition.y]);
this.viewport.setExtentSize$java_awt_Dimension(extentSize);
}}
this.viewport.setViewPosition$java_awt_Point(this.tabViewPosition);
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$4.updateView.apply(this, []);
});

Clazz.newMeth(C$, 'updateView',  function () {
var tabPlacement=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$();
var tabCount=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$();
var vpRect=this.viewport.getBounds$();
var viewSize=this.viewport.getViewSize$();
var viewRect=this.viewport.getViewRect$();
this.leadingTabIndex=p$1.getClosestTab$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [viewRect.x, viewRect.y]);
if (this.leadingTabIndex + 1 < tabCount) {
switch (tabPlacement) {
case 1:
case 3:
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[this.leadingTabIndex].x < viewRect.x) {
++this.leadingTabIndex;
}break;
case 2:
case 4:
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[this.leadingTabIndex].y < viewRect.y) {
++this.leadingTabIndex;
}break;
}
}var contentInsets=this.b$['swingjs.plaf.JSTabbedPaneUI'].getContentBorderInsets$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPlacement]);
switch (tabPlacement) {
case 2:
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.repaint$I$I$I$I(vpRect.x + vpRect.width, vpRect.y, contentInsets.left, vpRect.height);
this.scrollBackwardButton.setEnabled$Z(viewRect.y > 0 && this.leadingTabIndex > 0 );
this.scrollForwardButton.setEnabled$Z(this.leadingTabIndex < tabCount - 1 && viewSize.height - viewRect.y > viewRect.height );
break;
case 4:
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.repaint$I$I$I$I(vpRect.x - contentInsets.right, vpRect.y, contentInsets.right, vpRect.height);
this.scrollBackwardButton.setEnabled$Z(viewRect.y > 0 && this.leadingTabIndex > 0 );
this.scrollForwardButton.setEnabled$Z(this.leadingTabIndex < tabCount - 1 && viewSize.height - viewRect.y > viewRect.height );
break;
case 3:
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.repaint$I$I$I$I(vpRect.x, vpRect.y - contentInsets.bottom, vpRect.width, contentInsets.bottom);
this.scrollBackwardButton.setEnabled$Z(viewRect.x > 0 && this.leadingTabIndex > 0 );
this.scrollForwardButton.setEnabled$Z(this.leadingTabIndex < tabCount - 1 && viewSize.width - viewRect.x > viewRect.width );
break;
case 1:
default:
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.repaint$I$I$I$I(vpRect.x, vpRect.y + vpRect.height, vpRect.width, contentInsets.top);
this.scrollBackwardButton.setEnabled$Z(viewRect.x > 0 && this.leadingTabIndex > 0 );
this.scrollForwardButton.setEnabled$Z(this.leadingTabIndex < tabCount - 1 && viewSize.width - viewRect.x > viewRect.width );
}
}, p$4);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var map=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getActionMap$();
if (map != null ) {
var actionKey;
if (e.getSource$() === this.scrollForwardButton ) {
actionKey="scrollTabsForwardAction";
} else {
actionKey="scrollTabsBackwardAction";
}var action=map.get$O(actionKey);
if (action != null  && action.isEnabled$() ) {
action.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane, 1001, null, e.getWhen$(), e.getModifiers$()],$I$(9,1).c$$O$I$S$J$I));
}}});

Clazz.newMeth(C$, 'toString',  function () {
return ("viewport.viewSize=" + this.viewport.getViewSize$() + "\n" + "viewport.viewRectangle=" + this.viewport.getViewRect$() + "\n" + "leadingTabIndex=" + this.leadingTabIndex + "\n" + "tabViewPosition=" + this.tabViewPosition );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "ScrollableTabViewport", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JViewport', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setName$S("TabbedPane.scrollableViewport");
this.setScrollMode$I(0);
this.setOpaque$Z(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.isOpaque$());
var bgColor=$I$(10).getColor$O("TabbedPane.tabAreaBackground");
if (bgColor == null ) {
bgColor=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getBackground$();
}this.setBackground$java_awt_Color(bgColor);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "ScrollableTabPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[null]);C$.$init$.apply(this);
this.setOpaque$Z(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.isOpaque$());
var bgColor=$I$(10).getColor$O("TabbedPane.tabAreaBackground");
if (bgColor == null ) {
bgColor=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getBackground$();
}this.setBackground$java_awt_Color(bgColor);
}, 1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
this.b$['swingjs.plaf.JSTabbedPaneUI'].paintTabArea$java_awt_Graphics$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [g, this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$(), this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$()]);
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.isParamsSet$() && this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer == null  ) {
var croppedRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.getTabIndex$()];
g.translate$I$I(croppedRect.x, croppedRect.y);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.paintComponent$java_awt_Graphics(g);
g.translate$I$I(-croppedRect.x, -croppedRect.y);
}});

Clazz.newMeth(C$, 'doLayout$',  function () {
if (this.getComponentCount$() > 0) {
var child=this.getComponent$I(0);
child.setBounds$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "ScrollableTabButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'swingjs.plaf.BasicArrowButton', ['javax.swing.plaf.UIResource', 'javax.swing.SwingConstants']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (direction) {
;C$.superclazz.c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color.apply(this,[direction, $I$(10).getColor$O("TabbedPane.selected"), $I$(10).getColor$O("TabbedPane.shadow"), $I$(10).getColor$O("TabbedPane.darkShadow"), $I$(10).getColor$O("TabbedPane.highlight")]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.awt.event.ContainerListener', 'java.awt.event.FocusListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var pane=e.getSource$();
var name=e.getPropertyName$();
var isScrollLayout=p$1.scrollableTabLayoutEnabled.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
switch (name) {
case "mnemonicAt":
p$1.updateMnemonics.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
pane.秘repaint$();
break;
case "displayedMnemonicIndexAt":
pane.秘repaint$();
break;
case "indexForTitle":
this.b$['swingjs.plaf.JSTabbedPaneUI'].calculatedBaseline=false;
p$5.updateHtmlViews$I.apply(this, [(e.getNewValue$()).$c()]);
break;
case "tabLayoutPolicy":
this.b$['swingjs.plaf.JSTabbedPaneUI'].uninstallUI$javax_swing_JComponent.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [pane]);
this.b$['swingjs.plaf.JSTabbedPaneUI'].installUI$javax_swing_JComponent.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [pane]);
this.b$['swingjs.plaf.JSTabbedPaneUI'].calculatedBaseline=false;
break;
case "tabPlacement":
if (p$1.scrollableTabLayoutEnabled.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [])) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.createButtons$();
}this.b$['swingjs.plaf.JSTabbedPaneUI'].calculatedBaseline=false;
break;
case "opaque":
if (isScrollLayout) {
var newVal=(e.getNewValue$()).booleanValue$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.tabPanel.setOpaque$Z(newVal);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.viewport.setOpaque$Z(newVal);
}break;
case "background":
if (isScrollLayout) {
var newVal=e.getNewValue$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.tabPanel.setBackground$java_awt_Color(newVal);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.viewport.setBackground$java_awt_Color(newVal);
var newColor=this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedColor == null  ? newVal : this.b$['swingjs.plaf.JSTabbedPaneUI'].selectedColor;
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollForwardButton.setBackground$java_awt_Color(newColor);
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.scrollBackwardButton.setBackground$java_awt_Color(newColor);
}break;
case "indexForTabComponent":
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer != null ) {
p$6.removeUnusedTabComponents.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer, []);
}var c=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabComponentAt$I((e.getNewValue$()).$c());
if (c != null ) {
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer == null ) {
p$1.installTabContainer.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer.add$java_awt_Component(c);
}}this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.revalidate$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.秘repaint$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].calculatedBaseline=false;
break;
case "indexForNullComponent":
this.b$['swingjs.plaf.JSTabbedPaneUI'].isRunsDirty=true;
p$5.updateHtmlViews$I.apply(this, [(e.getNewValue$()).$c()]);
break;
case "font":
this.b$['swingjs.plaf.JSTabbedPaneUI'].calculatedBaseline=false;
break;
default:
break;
}
});

Clazz.newMeth(C$, 'updateHtmlViews$I',  function (index) {
var title=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTitleAt$I(index);
var isHTML=$I$(11).isHTMLString$S(title);
if (isHTML) {
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews == null ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews=p$1.createHTMLVector.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
} else {
var v=$I$(11).createHTMLView$javax_swing_JComponent$S(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane, title);
this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews.insertElementAt$O$I(v, index);
}} else {
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews != null ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews.insertElementAt$O$I(null, index);
}}p$1.updateMnemonics.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
}, p$5);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var tabPane=e.getSource$();
tabPane.revalidate$();
tabPane.秘repaint$();
this.b$['swingjs.plaf.JSTabbedPaneUI'].setFocusIndex$I$Z.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [tabPane.getSelectedIndex$(), false]);
if (p$1.scrollableTabLayoutEnabled.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [])) {
var index=tabPane.getSelectedIndex$();
if (index < this.b$['swingjs.plaf.JSTabbedPaneUI'].rects.length && index != -1 ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.tabPanel.scrollRectToVisible$java_awt_Rectangle(this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[index].clone$());
}}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
p$1.setRolloverTab$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [e.getX$(), e.getY$()]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].setRolloverTab$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [-1]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (!this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.isEnabled$()) {
return;
}var tabIndex=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabForCoordinate$javax_swing_JTabbedPane$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane, e.getX$(), e.getY$()]);
if (tabIndex >= 0 && this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.isEnabledAt$I(tabIndex) ) {
if (tabIndex != this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$()) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.setSelectedIndex$I(tabIndex);
} else if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.isRequestFocusEnabled$()) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.requestFocus$();
}}});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
p$1.setRolloverTab$I$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [e.getX$(), e.getY$()]);
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].setFocusIndex$I$Z.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getSelectedIndex$(), true]);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabCount$() > 1) p$1.repaintTab$I.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [this.b$['swingjs.plaf.JSTabbedPaneUI'].focusIndex]);
});

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent',  function (e) {
var tp=e.getContainer$();
var child=e.getChild$();
if (Clazz.instanceOf(child, "javax.swing.plaf.UIResource")) {
return;
}this.b$['swingjs.plaf.JSTabbedPaneUI'].isRunsDirty=true;
p$5.updateHtmlViews$I.apply(this, [tp.indexOfComponent$java_awt_Component(child)]);
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent',  function (e) {
var tp=e.getContainer$();
var child=e.getChild$();
if (Clazz.instanceOf(child, "javax.swing.plaf.UIResource")) {
return;
}var indexObj=tp.getClientProperty$O("__index_to_remove__");
if (indexObj != null ) {
var index=indexObj.intValue$();
if (this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews != null  && this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews.size$() > index ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].htmlViews.removeElementAt$I(index);
}tp.putClientProperty$O$O("__index_to_remove__", null);
}this.b$['swingjs.plaf.JSTabbedPaneUI'].isRunsDirty=true;
p$1.updateMnemonics.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
p$1.validateFocusIndex.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "PropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "TabSelectionHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []).stateChanged$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "MouseHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []).mousePressed$java_awt_event_MouseEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "FocusHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.FocusAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], []).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "TabContainer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.notifyTabbedPane=true;
},1);

C$.$fields$=[['Z',['notifyTabbedPane']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[null]);C$.$init$.apply(this);
this.setOpaque$Z(false);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (comp) {
var index=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.indexOfTabComponent$java_awt_Component(comp);
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
if (this.notifyTabbedPane && index != -1 ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.setTabComponentAt$I$java_awt_Component(index, null);
}});

Clazz.newMeth(C$, 'removeUnusedTabComponents',  function () {
var components=$I$(12).秘getChildArray$java_awt_Container(this);
for (var i=0, n=this.getComponentCount$(); i < n; i++) {
var c=components[i];
if (!(Clazz.instanceOf(c, "javax.swing.plaf.UIResource"))) {
var index=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.indexOfTabComponent$java_awt_Component(c);
if (index == -1) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [c]);
}}}
}, p$6);

Clazz.newMeth(C$, 'isOptimizedDrawingEnabled$',  function () {
return this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller != null  && !this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.croppedEdge.isParamsSet$() ;
});

Clazz.newMeth(C$, 'doLayout$',  function () {
if (p$1.scrollableTabLayoutEnabled.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [])) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller.tabPanel.秘repaint$();
p$4.updateView.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'].tabScroller, []);
} else {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.repaint$java_awt_Rectangle(this.getBounds$());
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTabbedPaneUI, "CroppedEdge", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['tabIndex','cropline','cropx','cropy'],'O',['shape','java.awt.Shape']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(false);
}, 1);

Clazz.newMeth(C$, 'setParams$I$I$I$I',  function (tabIndex, cropline, cropx, cropy) {
this.tabIndex=tabIndex;
this.cropline=cropline;
this.cropx=cropx;
this.cropy=cropy;
var tabRect=this.b$['swingjs.plaf.JSTabbedPaneUI'].rects[tabIndex];
this.setBounds$java_awt_Rectangle(tabRect);
this.shape=$I$(13,"createCroppedTabShape$I$java_awt_Rectangle$I",[this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getTabPlacement$(), tabRect, cropline]);
if (this.getParent$() == null  && this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer != null  ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer.add$java_awt_Component$I(this, 0);
}});

Clazz.newMeth(C$, 'resetParams$',  function () {
this.shape=null;
if (this.getParent$() === this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer  && this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer != null  ) {
this.b$['swingjs.plaf.JSTabbedPaneUI'].tabContainer.remove$java_awt_Component(this);
}});

Clazz.newMeth(C$, 'isParamsSet$',  function () {
return this.shape != null ;
});

Clazz.newMeth(C$, 'getTabIndex$',  function () {
return this.tabIndex;
});

Clazz.newMeth(C$, 'getCropline$',  function () {
return this.cropline;
});

Clazz.newMeth(C$, 'getCroppedSideWidth$',  function () {
return 3;
});

Clazz.newMeth(C$, 'getBgColor',  function () {
var parent=this.b$['swingjs.plaf.JSTabbedPaneUI'].tabPane.getParent$();
if (parent != null ) {
var bg=parent.getBackground$();
if (bg != null ) {
return bg;
}}return $I$(10).getColor$O("control");
}, p$7);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
if (this.isParamsSet$() && Clazz.instanceOf(g, "java.awt.Graphics2D") ) {
var g2=g;
g2.clipRect$I$I$I$I(0, 0, this.getWidth$(), this.getHeight$());
g2.setColor$java_awt_Color(p$7.getBgColor.apply(this, []));
g2.translate$I$I(this.cropx, this.cropy);
g2.fill$java_awt_Shape(this.shape);
p$1.paintCroppedTabEdge$java_awt_Graphics.apply(this.b$['swingjs.plaf.JSTabbedPaneUI'], [g]);
g2.translate$I$I(-this.cropx, -this.cropy);
}});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.SwingUtilities','java.awt.Point','java.awt.Dimension','java.util.ArrayList','javax.swing.DefaultSingleSelectionModel',['javax.swing.JTabbedPane','.ModelListener'],'javax.swing.event.ChangeListener','sun.swing.SwingUtilities2','javax.swing.event.ChangeEvent',['javax.swing.JTabbedPane','.Page'],'javax.swing.ToolTipManager','java.awt.JSComponent','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTabbedPane", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', 'javax.swing.SwingConstants');
C$.$classes$=[['ModelListener',4],['Page',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tabPlacement=1;
this.changeListener=null;
this.visComp=null;
this.changeEvent=null;
},1);

C$.$fields$=[['Z',['haveRegistered'],'I',['tabPlacement','tabLayoutPolicy'],'O',['model','javax.swing.SingleSelectionModel','changeListener','javax.swing.event.ChangeListener','pages','java.util.List','visComp','java.awt.Component','changeEvent','javax.swing.event.ChangeEvent']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [1, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (tabPlacement) {
C$.c$$I$I.apply(this, [tabPlacement, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (tabPlacement, tabLayoutPolicy) {
Clazz.super_(C$, this);
this.setTabPlacement$I(tabPlacement);
this.setTabLayoutPolicy$I(tabLayoutPolicy);
this.pages=Clazz.new_($I$(4,1).c$$I,[1]);
this.setModel$javax_swing_SingleSelectionModel(Clazz.new_($I$(5,1)));
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "TabbedPaneUI";
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_TabbedPaneUI',  function (ui) {
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
for (var i=0; i < this.getTabCount$(); i++) {
var icon=this.pages.get$I(i).disabledIcon;
if (Clazz.instanceOf(icon, "javax.swing.plaf.UIResource")) {
this.setDisabledIconAt$I$javax_swing_Icon(i, null);
}}
});

Clazz.newMeth(C$, 'createChangeListener$',  function () {
return Clazz.new_($I$(6,1),[this, null]);
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var selIndex=this.getSelectedIndex$();
if (selIndex < 0) {
if (this.visComp != null  && this.visComp.isVisible$() ) {
this.visComp.setVisible$Z(false);
}this.visComp=null;
} else {
var newComp=this.getComponentAt$I(selIndex);
if (newComp != null  && newComp !== this.visComp  ) {
var shouldChangeFocus=false;
if (this.visComp != null ) {
shouldChangeFocus=($I$(1).findFocusOwner$java_awt_Component(this.visComp) != null );
if (this.visComp.isVisible$()) {
this.visComp.setVisible$Z(false);
}}if (!newComp.isVisible$()) {
newComp.setVisible$Z(true);
}if (shouldChangeFocus) {
$I$(8).tabbedPaneChangeFocusTo$java_awt_Component(newComp);
}this.visComp=newComp;
}}var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(9,1).c$$O,[this]);
(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'setModel$javax_swing_SingleSelectionModel',  function (model) {
var oldModel=this.getModel$();
if (oldModel != null ) {
oldModel.removeChangeListener$javax_swing_event_ChangeListener(this.changeListener);
this.changeListener=null;
}this.model=model;
if (model != null ) {
this.changeListener=this.createChangeListener$();
model.addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}this.firePropertyChange$S$O$O("model", oldModel, model);
this.秘repaint$();
});

Clazz.newMeth(C$, 'getTabPlacement$',  function () {
return this.tabPlacement;
});

Clazz.newMeth(C$, 'setTabPlacement$I',  function (tabPlacement) {
if (tabPlacement != 1 && tabPlacement != 2  && tabPlacement != 3  && tabPlacement != 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal tab placement: must be TOP, BOTTOM, LEFT, or RIGHT"]);
}if (this.tabPlacement != tabPlacement) {
var oldValue=this.tabPlacement;
this.tabPlacement=tabPlacement;
this.firePropertyChange$S$I$I("tabPlacement", oldValue, tabPlacement);
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getTabLayoutPolicy$',  function () {
return this.tabLayoutPolicy;
});

Clazz.newMeth(C$, 'setTabLayoutPolicy$I',  function (tabLayoutPolicy) {
if (tabLayoutPolicy != 0 && tabLayoutPolicy != 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal tab layout policy: must be WRAP_TAB_LAYOUT or SCROLL_TAB_LAYOUT"]);
}if (this.tabLayoutPolicy != tabLayoutPolicy) {
var oldValue=this.tabLayoutPolicy;
this.tabLayoutPolicy=tabLayoutPolicy;
this.firePropertyChange$S$I$I("tabLayoutPolicy", oldValue, tabLayoutPolicy);
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getSelectedIndex$',  function () {
return this.model.getSelectedIndex$();
});

Clazz.newMeth(C$, 'setSelectedIndex$I',  function (index) {
if (index != -1) {
p$1.checkIndex$I.apply(this, [index]);
}p$1.setSelectedIndexImpl$I$Z.apply(this, [index, true]);
});

Clazz.newMeth(C$, 'setSelectedIndexImpl$I$Z',  function (index, doAccessibleChanges) {
this.model.setSelectedIndex$I(index);
}, p$1);

Clazz.newMeth(C$, 'getSelectedComponent$',  function () {
var index=this.getSelectedIndex$();
if (index == -1) {
return null;
}return this.getComponentAt$I(index);
});

Clazz.newMeth(C$, 'setSelectedComponent$java_awt_Component',  function (c) {
var index=this.indexOfComponent$java_awt_Component(c);
if (index != -1) {
this.setSelectedIndex$I(index);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["component not found in tabbed pane"]);
}});

Clazz.newMeth(C$, 'insertTab$S$javax_swing_Icon$java_awt_Component$S$I',  function (title, icon, component, tip, index) {
var newIndex=index;
var removeIndex=this.indexOfComponent$java_awt_Component(component);
if (component != null  && removeIndex != -1 ) {
this.removeTabAt$I(removeIndex);
if (newIndex > removeIndex) {
--newIndex;
}}var selectedIndex=this.getSelectedIndex$();
this.pages.add$I$O(newIndex, Clazz.new_([this, null, this, title != null  ? title : "", icon, null, component, tip],$I$(10,1).c$$javax_swing_JTabbedPane$S$javax_swing_Icon$javax_swing_Icon$java_awt_Component$S));
if (component != null ) {
this.addImplCont$java_awt_Component$O$I(component, null, -1);
component.setVisible$Z(false);
} else {
this.firePropertyChange$S$I$I("indexForNullComponent", -1, index);
}if (this.pages.size$() == 1) {
this.setSelectedIndex$I(0);
}if (selectedIndex >= newIndex) {
p$1.setSelectedIndexImpl$I$Z.apply(this, [selectedIndex + 1, false]);
}if (!this.haveRegistered && tip != null  ) {
$I$(11).sharedInstance$().registerComponent$javax_swing_JComponent(this);
this.haveRegistered=true;
}this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'addTab$S$javax_swing_Icon$java_awt_Component$S',  function (title, icon, component, tip) {
this.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(title, icon, component, tip, this.pages.size$());
});

Clazz.newMeth(C$, 'addTab$S$javax_swing_Icon$java_awt_Component',  function (title, icon, component) {
this.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(title, icon, component, null, this.pages.size$());
});

Clazz.newMeth(C$, 'addTab$S$java_awt_Component',  function (title, component) {
this.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(title, null, component, null, this.pages.size$());
});

Clazz.newMeth(C$, 'add$java_awt_Component',  function (component) {
if (!(Clazz.instanceOf(component, "javax.swing.plaf.UIResource"))) {
this.addTab$S$java_awt_Component(component.getName$(), component);
} else {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [component]);
}return component;
});

Clazz.newMeth(C$, 'add$S$java_awt_Component',  function (title, component) {
if (!(Clazz.instanceOf(component, "javax.swing.plaf.UIResource"))) {
this.addTab$S$java_awt_Component(title, component);
} else {
C$.superclazz.prototype.add$S$java_awt_Component.apply(this, [title, component]);
}return component;
});

Clazz.newMeth(C$, 'add$java_awt_Component$I',  function (component, index) {
if (!(Clazz.instanceOf(component, "javax.swing.plaf.UIResource"))) {
this.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(component.getName$(), null, component, null, index == -1 ? this.getTabCount$() : index);
} else {
C$.superclazz.prototype.add$java_awt_Component$I.apply(this, [component, index]);
}return component;
});

Clazz.newMeth(C$, 'add$java_awt_Component$O',  function (component, constraints) {
if (!(Clazz.instanceOf(component, "javax.swing.plaf.UIResource"))) {
if (Clazz.instanceOf(constraints, "java.lang.String")) {
this.addTab$S$java_awt_Component(constraints, component);
} else if (Clazz.instanceOf(constraints, "javax.swing.Icon")) {
this.addTab$S$javax_swing_Icon$java_awt_Component(null, constraints, component);
} else {
this.add$java_awt_Component(component);
}} else {
C$.superclazz.prototype.add$java_awt_Component$O.apply(this, [component, constraints]);
}});

Clazz.newMeth(C$, 'add$java_awt_Component$O$I',  function (component, constraints, index) {
if (!(Clazz.instanceOf(component, "javax.swing.plaf.UIResource"))) {
var icon=Clazz.instanceOf(constraints, "javax.swing.Icon") ? constraints : null;
var title=Clazz.instanceOf(constraints, "java.lang.String") ? constraints : null;
this.insertTab$S$javax_swing_Icon$java_awt_Component$S$I(title, icon, component, null, index == -1 ? this.getTabCount$() : index);
} else {
this.addImpl$java_awt_Component$O$I(component, constraints, index);
}return component;
});

Clazz.newMeth(C$, 'removeTabAt$I',  function (index) {
p$1.checkIndex$I.apply(this, [index]);
var component=this.getComponentAt$I(index);
var shouldChangeFocus=false;
var selected=this.getSelectedIndex$();
var oldName=null;
if (component === this.visComp ) {
shouldChangeFocus=($I$(1).findFocusOwner$java_awt_Component(this.visComp) != null );
this.visComp=null;
}this.setTabComponentAt$I$java_awt_Component(index, null);
this.pages.remove$I(index);
this.putClientProperty$O$O("__index_to_remove__", Integer.valueOf$I(index));
if (selected > index) {
p$1.setSelectedIndexImpl$I$Z.apply(this, [selected - 1, false]);
} else if (selected >= this.getTabCount$()) {
p$1.setSelectedIndexImpl$I$Z.apply(this, [selected - 1, false]);
var newSelected=(selected != 0) ? this.pages.get$I(selected - 1) : null;
} else if (index == selected) {
this.fireStateChanged$();
}if (component != null ) {
var n=this.getComponentCount$();
var components=$I$(12).秘getChildArray$java_awt_Container(this);
for (var i=n; --i >= 0; ) {
if (components[i] === component ) {
C$.superclazz.prototype.remove$I.apply(this, [i]);
component.setVisible$Z(true);
break;
}}
}if (shouldChangeFocus) {
$I$(8,"tabbedPaneChangeFocusTo$java_awt_Component",[this.getSelectedComponent$()]);
}this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (component) {
var index=this.indexOfComponent$java_awt_Component(component);
if (index != -1) {
this.removeTabAt$I(index);
} else {
var n=this.getComponentCount$();
var components=$I$(12).秘getChildArray$java_awt_Container(this);
for (var i=0; i < n; i++) {
if (component === components[i] ) {
C$.superclazz.prototype.remove$I.apply(this, [i]);
break;
}}
}});

Clazz.newMeth(C$, 'remove$I',  function (index) {
this.removeTabAt$I(index);
});

Clazz.newMeth(C$, 'removeAll$',  function () {
p$1.setSelectedIndexImpl$I$Z.apply(this, [-1, true]);
var tabCount=this.getTabCount$();
while (tabCount-- > 0){
this.removeTabAt$I(tabCount);
}
});

Clazz.newMeth(C$, 'getTabCount$',  function () {
return this.pages.size$();
});

Clazz.newMeth(C$, 'getTabRunCount$',  function () {
if (this.ui != null ) {
return (this.ui).getTabRunCount$javax_swing_JTabbedPane(this);
}return 0;
});

Clazz.newMeth(C$, 'getTitleAt$I',  function (index) {
return this.pages.get$I(index).title;
});

Clazz.newMeth(C$, 'getIconAt$I',  function (index) {
return this.pages.get$I(index).icon;
});

Clazz.newMeth(C$, 'getDisabledIconAt$I',  function (index) {
var page=this.pages.get$I(index);
if (page.disabledIcon == null ) {
page.disabledIcon=$I$(13).getLookAndFeel$().getDisabledIcon$javax_swing_JComponent$javax_swing_Icon(this, page.icon);
}return page.disabledIcon;
});

Clazz.newMeth(C$, 'getToolTipTextAt$I',  function (index) {
return this.pages.get$I(index).tip;
});

Clazz.newMeth(C$, 'getBackgroundAt$I',  function (index) {
return this.pages.get$I(index).getBackground$();
});

Clazz.newMeth(C$, 'getForegroundAt$I',  function (index) {
return this.pages.get$I(index).getForeground$();
});

Clazz.newMeth(C$, 'isEnabledAt$I',  function (index) {
return this.pages.get$I(index).isEnabled$();
});

Clazz.newMeth(C$, 'getComponentAt$I',  function (index) {
return this.pages.get$I(index).component;
});

Clazz.newMeth(C$, 'getMnemonicAt$I',  function (tabIndex) {
p$1.checkIndex$I.apply(this, [tabIndex]);
var page=this.pages.get$I(tabIndex);
return page.getMnemonic$();
});

Clazz.newMeth(C$, 'getDisplayedMnemonicIndexAt$I',  function (tabIndex) {
p$1.checkIndex$I.apply(this, [tabIndex]);
var page=this.pages.get$I(tabIndex);
return page.getDisplayedMnemonicIndex$();
});

Clazz.newMeth(C$, 'getBoundsAt$I',  function (index) {
p$1.checkIndex$I.apply(this, [index]);
if (this.ui != null ) {
return (this.ui).getTabBounds$javax_swing_JTabbedPane$I(this, index);
}return null;
});

Clazz.newMeth(C$, 'setTitleAt$I$S',  function (index, title) {
var page=this.pages.get$I(index);
var oldTitle=page.title;
page.title=title;
if (oldTitle != title) {
this.firePropertyChange$S$I$I("indexForTitle", -1, index);
}page.updateDisplayedMnemonicIndex$();
if (title == null  || oldTitle == null   || !title.equals$O(oldTitle) ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'setIconAt$I$javax_swing_Icon',  function (index, icon) {
var page=this.pages.get$I(index);
var oldIcon=page.icon;
if (icon !== oldIcon ) {
page.icon=icon;
if (Clazz.instanceOf(page.disabledIcon, "javax.swing.plaf.UIResource")) {
page.disabledIcon=null;
}this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'setDisabledIconAt$I$javax_swing_Icon',  function (index, disabledIcon) {
var oldIcon=this.pages.get$I(index).disabledIcon;
this.pages.get$I(index).disabledIcon=disabledIcon;
if (disabledIcon !== oldIcon  && !this.isEnabledAt$I(index) ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'setToolTipTextAt$I$S',  function (index, toolTipText) {
var oldToolTipText=this.pages.get$I(index).tip;
this.pages.get$I(index).tip=toolTipText;
if (!this.haveRegistered && toolTipText != null  ) {
$I$(11).sharedInstance$().registerComponent$javax_swing_JComponent(this);
this.haveRegistered=true;
}});

Clazz.newMeth(C$, 'setBackgroundAt$I$java_awt_Color',  function (index, background) {
var oldBg=this.pages.get$I(index).background;
this.pages.get$I(index).setBackground$java_awt_Color(background);
if (background == null  || oldBg == null   || !background.equals$O(oldBg) ) {
var tabBounds=this.getBoundsAt$I(index);
if (tabBounds != null ) {
this.repaint$java_awt_Rectangle(tabBounds);
}}});

Clazz.newMeth(C$, 'setForegroundAt$I$java_awt_Color',  function (index, foreground) {
var oldFg=this.pages.get$I(index).foreground;
this.pages.get$I(index).setForeground$java_awt_Color(foreground);
if (foreground == null  || oldFg == null   || !foreground.equals$O(oldFg) ) {
var tabBounds=this.getBoundsAt$I(index);
if (tabBounds != null ) {
this.repaint$java_awt_Rectangle(tabBounds);
}}});

Clazz.newMeth(C$, 'setEnabledAt$I$Z',  function (index, enabled) {
var oldEnabled=this.pages.get$I(index).isEnabled$();
this.pages.get$I(index).setEnabled$Z(enabled);
if (enabled != oldEnabled ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'setComponentAt$I$java_awt_Component',  function (index, component) {
var page=this.pages.get$I(index);
if (component !== page.component ) {
var shouldChangeFocus=false;
if (page.component != null ) {
shouldChangeFocus=($I$(1).findFocusOwner$java_awt_Component(page.component) != null );
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var count=this.getComponentCount$();
var components=$I$(12).秘getChildArray$java_awt_Container(this);
for (var i=0; i < count; i++) {
if (components[i] === page.component ) {
C$.superclazz.prototype.remove$I.apply(this, [i]);
}}
}}page.component=component;
var selectedPage=(this.getSelectedIndex$() == index);
if (selectedPage) {
this.visComp=component;
}if (component != null ) {
component.setVisible$Z(selectedPage);
this.addImplCont$java_awt_Component$O$I(component, null, -1);
if (shouldChangeFocus) {
$I$(8).tabbedPaneChangeFocusTo$java_awt_Component(component);
}} else {
this.秘repaint$();
}this.revalidate$();
}});

Clazz.newMeth(C$, 'setDisplayedMnemonicIndexAt$I$I',  function (tabIndex, mnemonicIndex) {
p$1.checkIndex$I.apply(this, [tabIndex]);
var page=this.pages.get$I(tabIndex);
page.setDisplayedMnemonicIndex$I(mnemonicIndex);
});

Clazz.newMeth(C$, 'setMnemonicAt$I$I',  function (tabIndex, mnemonic) {
p$1.checkIndex$I.apply(this, [tabIndex]);
var page=this.pages.get$I(tabIndex);
page.setMnemonic$I(mnemonic);
this.firePropertyChange$S$O$O("mnemonicAt", null, null);
});

Clazz.newMeth(C$, 'indexOfTab$S',  function (title) {
for (var i=0; i < this.getTabCount$(); i++) {
if (this.getTitleAt$I(i).equals$O(title == null  ? "" : title)) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'indexOfTab$javax_swing_Icon',  function (icon) {
for (var i=0; i < this.getTabCount$(); i++) {
var tabIcon=this.getIconAt$I(i);
if ((tabIcon != null  && tabIcon.equals$O(icon) ) || (tabIcon == null  && tabIcon === icon  ) ) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'indexOfComponent$java_awt_Component',  function (component) {
for (var i=0; i < this.getTabCount$(); i++) {
var c=this.getComponentAt$I(i);
if ((c != null  && c.equals$O(component) ) || (c == null  && c === component  ) ) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'indexAtLocation$I$I',  function (x, y) {
if (this.ui != null ) {
return (this.ui).tabForCoordinate$javax_swing_JTabbedPane$I$I(this, x, y);
}return -1;
});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent',  function (event) {
if (this.ui != null ) {
var index=(this.ui).tabForCoordinate$javax_swing_JTabbedPane$I$I(this, event.getX$(), event.getY$());
if (index != -1) {
return this.pages.get$I(index).tip;
}}return C$.superclazz.prototype.getToolTipText$java_awt_event_MouseEvent.apply(this, [event]);
});

Clazz.newMeth(C$, 'checkIndex$I',  function (index) {
if (index < 0 || index >= this.pages.size$() ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + ", Tab count: " + this.pages.size$() ]);
}}, p$1);

Clazz.newMeth(C$, 'paramString$',  function () {
var tabPlacementString;
if (this.tabPlacement == 1) {
tabPlacementString="TOP";
} else if (this.tabPlacement == 3) {
tabPlacementString="BOTTOM";
} else if (this.tabPlacement == 2) {
tabPlacementString="LEFT";
} else if (this.tabPlacement == 4) {
tabPlacementString="RIGHT";
} else tabPlacementString="";
var haveRegisteredString=(this.haveRegistered ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",haveRegistered=" + haveRegisteredString + ",tabPlacement=" + tabPlacementString ;
});

Clazz.newMeth(C$, 'setTabComponentAt$I$java_awt_Component',  function (index, component) {
if (component != null  && this.indexOfComponent$java_awt_Component(component) != -1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component is already added to this JTabbedPane"]);
}var oldValue=this.getTabComponentAt$I(index);
if (component !== oldValue ) {
var tabComponentIndex=this.indexOfTabComponent$java_awt_Component(component);
if (tabComponentIndex != -1) {
this.setTabComponentAt$I$java_awt_Component(tabComponentIndex, null);
}this.pages.get$I(index).tabComponent=component;
this.firePropertyChange$S$I$I("indexForTabComponent", -1, index);
}});

Clazz.newMeth(C$, 'getTabComponentAt$I',  function (index) {
return this.pages.get$I(index).tabComponent;
});

Clazz.newMeth(C$, 'indexOfTabComponent$java_awt_Component',  function (tabComponent) {
for (var i=0; i < this.getTabCount$(); i++) {
var c=this.getTabComponentAt$I(i);
if (c === tabComponent ) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'addNotify$',  function () {
for (var i=0; i < this.getTabCount$(); i++) {
var c=this.getTabComponentAt$I(i);
if (c != null ) c.addNotify$();
this.getComponentAt$I(i).addNotify$();
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTabbedPane, "ModelListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['javax.swing.JTabbedPane'].fireStateChanged$.apply(this.b$['javax.swing.JTabbedPane'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JTabbedPane, "Page", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
this.mnemonic=-1;
this.mnemonicIndex=-1;
},1);

C$.$fields$=[['Z',['enabled','needsUIUpdate'],'I',['mnemonic','mnemonicIndex'],'S',['title','tip'],'O',['background','java.awt.Color','+foreground','icon','javax.swing.Icon','+disabledIcon','parent','javax.swing.JTabbedPane','component','java.awt.Component','+tabComponent']]]

Clazz.newMeth(C$, 'c$$javax_swing_JTabbedPane$S$javax_swing_Icon$javax_swing_Icon$java_awt_Component$S',  function (parent, title, icon, disabledIcon, component, tip) {
;C$.$init$.apply(this);
this.title=title;
this.icon=icon;
this.disabledIcon=disabledIcon;
this.parent=parent;
this.component=component;
this.tip=tip;
this.initAccessibleContext$();
}, 1);

Clazz.newMeth(C$, 'initAccessibleContext$',  function () {
});

Clazz.newMeth(C$, 'setMnemonic$I',  function (mnemonic) {
this.mnemonic=mnemonic;
this.updateDisplayedMnemonicIndex$();
});

Clazz.newMeth(C$, 'getMnemonic$',  function () {
return this.mnemonic;
});

Clazz.newMeth(C$, 'setDisplayedMnemonicIndex$I',  function (mnemonicIndex) {
if (this.mnemonicIndex != mnemonicIndex) {
if (mnemonicIndex != -1 && (this.title == null  || mnemonicIndex < 0  || mnemonicIndex >= this.title.length$() ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid mnemonic index: " + mnemonicIndex]);
}this.mnemonicIndex=mnemonicIndex;
this.b$['javax.swing.JTabbedPane'].firePropertyChange$S$O$O.apply(this.b$['javax.swing.JTabbedPane'], ["displayedMnemonicIndexAt", null, null]);
}});

Clazz.newMeth(C$, 'getDisplayedMnemonicIndex$',  function () {
return this.mnemonicIndex;
});

Clazz.newMeth(C$, 'updateDisplayedMnemonicIndex$',  function () {
this.setDisplayedMnemonicIndex$I($I$(1).findDisplayedMnemonicIndex$S$I(this.title, this.mnemonic));
});

Clazz.newMeth(C$, 'getBackground$',  function () {
return this.background != null  ? this.background : this.parent.getBackground$();
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
this.background=c;
});

Clazz.newMeth(C$, 'getForeground$',  function () {
return this.foreground != null  ? this.foreground : this.parent.getForeground$();
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (c) {
this.foreground=c;
});

Clazz.newMeth(C$, 'getCursor$',  function () {
return this.parent.getCursor$();
});

Clazz.newMeth(C$, 'setCursor$java_awt_Cursor',  function (c) {
this.parent.setCursor$java_awt_Cursor(c);
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.parent.getFont$();
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
this.parent.setFont$java_awt_Font(f);
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (f) {
return this.parent.getFontMetrics$java_awt_Font(f);
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.enabled=b;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.parent.isVisible$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
this.parent.setVisible$Z(b);
});

Clazz.newMeth(C$, 'isShowing$',  function () {
return this.parent.isShowing$();
});

Clazz.newMeth(C$, 'contains$java_awt_Point',  function (p) {
var r=this.getBounds$();
return r.contains$java_awt_Point(p);
});

Clazz.newMeth(C$, 'getLocationOnScreen$',  function () {
var parentLocation=this.parent.getLocationOnScreen$();
var componentLocation=this.getLocation$();
componentLocation.translate$I$I(parentLocation.x, parentLocation.y);
return componentLocation;
});

Clazz.newMeth(C$, 'getLocation$',  function () {
var r=this.getBounds$();
return Clazz.new_($I$(2,1).c$$I$I,[r.x, r.y]);
});

Clazz.newMeth(C$, 'setLocation$java_awt_Point',  function (p) {
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return (this.parent.getUI$()).getTabBounds$javax_swing_JTabbedPane$I(this.parent, this.parent.indexOfTab$S(this.title));
});

Clazz.newMeth(C$, 'setBounds$java_awt_Rectangle',  function (r) {
});

Clazz.newMeth(C$, 'getSize$',  function () {
var r=this.getBounds$();
return Clazz.new_($I$(3,1).c$$I$I,[r.width, r.height]);
});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension',  function (d) {
});

Clazz.newMeth(C$, 'getAccessibleAt$java_awt_Point',  function (p) {
if (Clazz.instanceOf(this.component, "javax.accessibility.Accessible")) {
return this.component;
} else {
return null;
}});

Clazz.newMeth(C$, 'isFocusTraversable$',  function () {
return false;
});

Clazz.newMeth(C$, 'requestFocus$',  function () {
});

Clazz.newMeth(C$, 'addFocusListener$java_awt_event_FocusListener',  function (l) {
});

Clazz.newMeth(C$, 'removeFocusListener$java_awt_event_FocusListener',  function (l) {
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

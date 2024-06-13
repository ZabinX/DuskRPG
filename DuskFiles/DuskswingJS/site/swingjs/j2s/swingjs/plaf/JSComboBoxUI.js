(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},p$3={},I$=[[0,'javax.swing.UIManager','sun.swing.DefaultLookup','javax.swing.SwingUtilities','javax.swing.KeyStroke','java.awt.event.ActionEvent','javax.swing.plaf.basic.BasicGraphicsUtils','java.awt.EventQueue',['javax.swing.text.Position','.Bias'],'swingjs.jquery.JQueryUI','StringBuffer','javax.swing.CellRendererPane','java.awt.Dimension','swingjs.plaf.JSComponentUI',['swingjs.plaf.JSComboBoxUI','.DefaultKeySelectionManager'],'javax.swing.LookAndFeel','sun.awt.AppContext','javax.swing.DefaultListCellRenderer',['swingjs.plaf.JSComboBoxUI','.Actions'],'swingjs.plaf.JSComboPopupList',['swingjs.plaf.BasicComboBoxRenderer','.UIResource'],['swingjs.plaf.BasicComboBoxEditor','.UIResource'],['swingjs.plaf.JSComboBoxUI','.Handler'],['java.awt.Component','.BaselineResizeBehavior'],'java.awt.Rectangle','swingjs.plaf.LazyActionMap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSComboBoxUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI');
C$.$classes$=[['KeyHandler',1],['FocusHandler',1],['ListDataHandler',1],['ItemHandler',1],['PropertyChangeHandler',1],['ComboBoxLayoutManager',1],['Actions',10],['Handler',2],['DefaultKeySelectionManager',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hasFocus=false;
this.isTableCellEditor=false;
this.currentValuePane=Clazz.new_($I$(11,1));
this.timeFactor=1000;
this.lastTime=0;
this.time=0;
this.isMinimumSizeDirty=true;
this.cachedMinimumSize=Clazz.new_($I$(12,1).c$$I$I,[0, 0]);
this.isDisplaySizeDirty=true;
this.cachedDisplaySize=Clazz.new_($I$(12,1).c$$I$I,[0, 0]);
this.squareButton=true;
},1);

C$.$fields$=[['Z',['hasCustomRenderer','contentsTainted','hasFocus','isTableCellEditor','isMinimumSizeDirty','isDisplaySizeDirty','sameBaseline','squareButton'],'J',['timeFactor','lastTime','time'],'O',['renderer','javax.swing.ListCellRenderer','comboBox','javax.swing.JComboBox','listBox','javax.swing.JList','currentValuePane','javax.swing.CellRendererPane','popup','swingjs.plaf.JSComboPopupList','editor','java.awt.Component','keyListener','java.awt.event.KeyListener','focusListener','java.awt.event.FocusListener','propertyChangeListener','java.beans.PropertyChangeListener','itemListener','java.awt.event.ItemListener','popupMouseListener','java.awt.event.MouseListener','popupMouseMotionListener','java.awt.event.MouseMotionListener','popupKeyListener','java.awt.event.KeyListener','listDataListener','javax.swing.event.ListDataListener','handler','swingjs.plaf.JSComboBoxUI.Handler','keySelectionManager','javax.swing.JComboBox.KeySelectionManager','cachedMinimumSize','java.awt.Dimension','+cachedDisplaySize','padding','java.awt.Insets']]
,['O',['COMBO_UI_LIST_CELL_RENDERER_KEY','java.lang.Object','HIDE_POPUP_KEY','StringBuffer']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isContainer=true;
this.allowPaintedBackground=false;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
this.comboBox=this.jc;
if (this.domNode == null ) {
this.domNode=this.focusNode=$I$(13,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
this.setDataShadowKeyComponent$swingjs_api_js_DOMNode$java_awt_Component(this.domNode, this.listBox);
}this.addFocusHandler$();
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, this.c.getFont$());
this.popup.updateEnabled$();
this.setBackgroundImpl$java_awt_Color(this.jc.isOpaque$() ? this.getBackground$() : null);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (this.isTainted) this.setHTMLElement$();
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b) this.popup.setComboVisible$Z(true);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var name=e.getPropertyName$();
switch (name) {
case "ancestor":
if (e.getNewValue$() != null ) this.popup.updateZIndex$();
break;
case "updateSwingJS":
this.popup.updateState$java_util_EventObject$S(e, name);
return;
case "renderer":
this.renderer=e.getNewValue$();
this.listBox.setCellRenderer$javax_swing_ListCellRenderer(this.renderer);
this.hasCustomRenderer=true;
return;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.popup.dispose$();
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'getChildCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.popup.updateEnabled$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.isMinimumSizeDirty=true;
this.comboBox=c;
this.installDefaults$();
this.listBox=this.popup=this.createPopup$();
this.listBox.setSelectionBackground$java_awt_Color(null);
this.listBox.addListSelectionListener$javax_swing_event_ListSelectionListener(p$1.getHandler.apply(this, []));
this.listBox.setBackground$java_awt_Color(this.jc.getBackground$());
this.comboBox.add$java_awt_Component(this.listBox);
var inTable=c.getClientProperty$O("JComboBox.isTableCellEditor");
if (inTable != null ) {
this.isTableCellEditor=inTable.equals$O(Boolean.TRUE) ? true : false;
}if (this.comboBox.getRenderer$() == null  || Clazz.instanceOf(this.comboBox.getRenderer$(), "javax.swing.plaf.UIResource") ) {
this.comboBox.setRenderer$javax_swing_ListCellRenderer(this.createRenderer$());
}this.installListeners$();
this.installComponents$();
this.comboBox.setLayout$java_awt_LayoutManager(this.createLayoutManager$());
this.comboBox.setRequestFocusEnabled$Z(true);
this.installKeyboardActions$();
this.comboBox.putClientProperty$O$O("doNotCancelPopup", C$.HIDE_POPUP_KEY);
if (this.keySelectionManager == null  || Clazz.instanceOf(this.keySelectionManager, "javax.swing.plaf.UIResource") ) {
this.keySelectionManager=Clazz.new_($I$(14,1),[this, null]);
}this.comboBox.setKeySelectionManager$javax_swing_JComboBox_KeySelectionManager(this.keySelectionManager);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.setPopupVisible$javax_swing_JComboBox$Z(this.comboBox, false);
this.popup.uninstallingUI$();
this.uninstallKeyboardActions$();
this.comboBox.setLayout$java_awt_LayoutManager(null);
this.uninstallComponents$();
this.uninstallListeners$();
this.uninstallDefaults$();
if (this.comboBox.getRenderer$() == null  || Clazz.instanceOf(this.comboBox.getRenderer$(), "javax.swing.plaf.UIResource") ) {
this.comboBox.setRenderer$javax_swing_ListCellRenderer(null);
}var comboBoxEditor=this.comboBox.editor &&this.comboBox.getEditor$();
if (Clazz.instanceOf(comboBoxEditor, "javax.swing.plaf.UIResource")) {
if (comboBoxEditor.getEditorComponent$().hasFocus$()) {
this.comboBox.requestFocusInWindow$();
}this.comboBox.setEditor$javax_swing_ComboBoxEditor(null);
}if (Clazz.instanceOf(this.keySelectionManager, "javax.swing.plaf.UIResource")) {
this.comboBox.setKeySelectionManager$javax_swing_JComboBox_KeySelectionManager(null);
}this.handler=null;
this.keyListener=null;
this.focusListener=null;
this.listDataListener=null;
this.propertyChangeListener=null;
this.popup=null;
this.listBox=null;
this.comboBox=null;
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
$I$(15).installColorsAndFont$javax_swing_JComponent$S$S$S(this.comboBox, "ComboBox.background", "ComboBox.foreground", "ComboBox.font");
$I$(15).installBorder$javax_swing_JComponent$S(this.comboBox, "ComboBox.border");
$I$(15).installProperty$javax_swing_JComponent$S$O(this.comboBox, "opaque", Boolean.TRUE);
var l=$I$(1).get$O("ComboBox.timeFactor");
this.timeFactor=l == null  ? 1000 : l.longValue$();
var b=$I$(1).get$O("ComboBox.squareButton");
this.squareButton=b == null  ? true : (b).valueOf();
this.padding=$I$(1).getInsets$O("ComboBox.padding");
});

Clazz.newMeth(C$, 'installListeners$',  function () {
if ((this.itemListener=this.createItemListener$()) != null ) {
this.comboBox.addItemListener$java_awt_event_ItemListener(this.itemListener);
}if ((this.propertyChangeListener=this.createPropertyChangeListener$()) != null ) {
this.comboBox.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}if ((this.keyListener=this.createKeyListener$()) != null ) {
this.comboBox.addKeyListener$java_awt_event_KeyListener(this.keyListener);
}if ((this.focusListener=this.createFocusListener$()) != null ) {
this.comboBox.addFocusListener$java_awt_event_FocusListener(this.focusListener);
}if ((this.popupMouseListener=this.popup.getMouseListener$()) != null ) {
this.comboBox.addMouseListener$java_awt_event_MouseListener(this.popupMouseListener);
}if ((this.popupMouseMotionListener=this.popup.getMouseMotionListener$()) != null ) {
this.comboBox.addMouseMotionListener$java_awt_event_MouseMotionListener(this.popupMouseMotionListener);
}if ((this.popupKeyListener=this.popup.getKeyListener$()) != null ) {
this.comboBox.addKeyListener$java_awt_event_KeyListener(this.popupKeyListener);
}if (this.comboBox.getModel$() != null ) {
if ((this.listDataListener=this.createListDataListener$()) != null ) {
this.comboBox.getModel$().addListDataListener$javax_swing_event_ListDataListener(this.listDataListener);
}}});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
$I$(15).installColorsAndFont$javax_swing_JComponent$S$S$S(this.comboBox, "ComboBox.background", "ComboBox.foreground", "ComboBox.font");
$I$(15).uninstallBorder$javax_swing_JComponent(this.comboBox);
});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
if (this.keyListener != null ) {
this.comboBox.removeKeyListener$java_awt_event_KeyListener(this.keyListener);
}if (this.itemListener != null ) {
this.comboBox.removeItemListener$java_awt_event_ItemListener(this.itemListener);
}if (this.propertyChangeListener != null ) {
this.comboBox.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}if (this.focusListener != null ) {
this.comboBox.removeFocusListener$java_awt_event_FocusListener(this.focusListener);
}if (this.popupMouseListener != null ) {
this.comboBox.removeMouseListener$java_awt_event_MouseListener(this.popupMouseListener);
}if (this.popupMouseMotionListener != null ) {
this.comboBox.removeMouseMotionListener$java_awt_event_MouseMotionListener(this.popupMouseMotionListener);
}if (this.popupKeyListener != null ) {
this.comboBox.removeKeyListener$java_awt_event_KeyListener(this.popupKeyListener);
}if (this.comboBox.getModel$() != null ) {
if (this.listDataListener != null ) {
this.comboBox.getModel$().removeListDataListener$javax_swing_event_ListDataListener(this.listDataListener);
}}});

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "ComboBox";
});

Clazz.newMeth(C$, 'getDisabledColors$S',  function (pp) {
this.inactiveBackground=$I$(1).getColor$O(pp + "disabledBackground");
this.inactiveForeground=$I$(1).getColor$O(pp + "disabledForeground");
});

Clazz.newMeth(C$, 'getDefaultListCellRenderer$',  function () {
var renderer=$I$(16).getAppContext$().get$O(C$.COMBO_UI_LIST_CELL_RENDERER_KEY);
if (renderer == null ) {
$I$(16).getAppContext$().put$O$O(C$.COMBO_UI_LIST_CELL_RENDERER_KEY, renderer=Clazz.new_($I$(17,1)));
}return renderer;
}, 1);

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["hidePopup"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["pageDownPassThrough"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["pageUpPassThrough"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["homePassThrough"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["endPassThrough"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["selectNext"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["selectNext2"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["togglePopup"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["spacePopup"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["selectPrevious"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["selectPrevious2"]));
map.put$javax_swing_Action(Clazz.new_($I$(18,1).c$$S,["enterPressed"]));
}, 1);

Clazz.newMeth(C$, 'createPopup$',  function () {
return Clazz.new_($I$(19,1).c$$swingjs_plaf_JSComboBoxUI,[this]);
});

Clazz.newMeth(C$, 'createKeyListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createFocusListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createListDataListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createItemListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createLayoutManager$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createRenderer$',  function () {
return Clazz.new_($I$(20,1));
});

Clazz.newMeth(C$, 'createEditor$',  function () {
return Clazz.new_($I$(21,1));
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(22,1),[this, null]);
}return this.handler;
}, p$1);

Clazz.newMeth(C$, 'updateToolTipTextForChildren',  function () {
var children=this.comboBox.getComponents$();
for (var i=0; i < children.length; ++i) {
if (Clazz.instanceOf(children[i], "javax.swing.JComponent")) {
(children[i]).setToolTipText$S(this.comboBox.getToolTipText$());
}}
}, p$1);

Clazz.newMeth(C$, 'installComponents$',  function () {
if (this.comboBox.isEditable$()) {
this.addEditor$();
}this.comboBox.add$java_awt_Component(this.currentValuePane);
});

Clazz.newMeth(C$, 'uninstallComponents$',  function () {
if (this.editor != null ) {
this.unconfigureEditor$();
}this.comboBox.removeAll$();
});

Clazz.newMeth(C$, 'addEditor$',  function () {
this.removeEditor$();
this.editor=this.comboBox.getEditor$().getEditorComponent$();
if (this.editor != null ) {
this.configureEditor$();
this.comboBox.add$java_awt_Component(this.editor);
if (this.comboBox.isFocusOwner$()) {
this.editor.requestFocusInWindow$();
}}});

Clazz.newMeth(C$, 'removeEditor$',  function () {
if (this.editor != null ) {
this.unconfigureEditor$();
this.comboBox.remove$java_awt_Component(this.editor);
this.editor=null;
}});

Clazz.newMeth(C$, 'configureEditor$',  function () {
this.editor.setEnabled$Z(this.comboBox.isEnabled$());
this.editor.setFocusable$Z(this.comboBox.isFocusable$());
this.editor.setFont$java_awt_Font(this.comboBox.getFont$());
if (this.focusListener != null ) {
this.editor.addFocusListener$java_awt_event_FocusListener(this.focusListener);
}this.editor.addFocusListener$java_awt_event_FocusListener(p$1.getHandler.apply(this, []));
this.comboBox.getEditor$().addActionListener$java_awt_event_ActionListener(p$1.getHandler.apply(this, []));
if (Clazz.instanceOf(this.editor, "javax.swing.JComponent")) {
(this.editor).putClientProperty$O$O("doNotCancelPopup", C$.HIDE_POPUP_KEY);
(this.editor).setInheritsPopupMenu$Z(true);
}this.comboBox.configureEditor$javax_swing_ComboBoxEditor$O(this.comboBox.getEditor$(), this.comboBox.getSelectedItem$());
this.editor.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
});

Clazz.newMeth(C$, 'unconfigureEditor$',  function () {
if (this.focusListener != null ) {
this.editor.removeFocusListener$java_awt_event_FocusListener(this.focusListener);
}this.editor.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.editor.removeFocusListener$java_awt_event_FocusListener(p$1.getHandler.apply(this, []));
this.comboBox.getEditor$().removeActionListener$java_awt_event_ActionListener(p$1.getHandler.apply(this, []));
});

Clazz.newMeth(C$, 'isPopupVisible$javax_swing_JComboBox',  function (c) {
return this.popup.isVisible$();
});

Clazz.newMeth(C$, 'setPopupVisible$javax_swing_JComboBox$Z',  function (c, v) {
this.popup.setPopupVisible$Z(v);
});

Clazz.newMeth(C$, 'isFocusTraversable$javax_swing_JComboBox',  function (c) {
return !this.comboBox.isEditable$();
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
if (this.contentsTainted) {
this.popup.updateList$();
this.contentsTainted=false;
} else {
this.popup.updateCSS$();
}this.popup.updateSelectedIndex$();
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (c) {
return this.getMinimumSize$javax_swing_JComponent(c);
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (c) {
if (!this.isMinimumSizeDirty) {
return Clazz.new_($I$(12,1).c$$java_awt_Dimension,[this.cachedMinimumSize]);
}var size=this.getDisplaySize$();
var insets=c.getInsets$();
var buttonWidth=20;
size.height+=insets.top + insets.bottom;
size.width+=insets.left + insets.right + buttonWidth + 10 ;
this.cachedMinimumSize.setSize$I$I(size.width, size.height);
this.isMinimumSizeDirty=false;
return Clazz.new_($I$(12,1).c$$java_awt_Dimension,[size]);
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (c) {
return Clazz.new_($I$(12,1).c$$I$I,[32767, 32767]);
});

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
var baseline=-1;
this.getDisplaySize$();
if (this.sameBaseline) {
var insets=c.getInsets$();
height=height - insets.top - insets.bottom ;
if (!this.comboBox.isEditable$()) {
var renderer=this.comboBox.getRenderer$();
if (renderer == null ) {
renderer=Clazz.new_($I$(17,1));
}var value=null;
var prototypeValue=this.comboBox.getPrototypeDisplayValue$();
if (prototypeValue != null ) {
value=prototypeValue;
} else if (this.comboBox.getModel$().getSize$() > 0) {
value=this.comboBox.getModel$().getElementAt$I(0);
}var component=renderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.listBox, value, -1, false, false);
if (Clazz.instanceOf(component, "javax.swing.JLabel")) {
var label=component;
var text=label.getText$();
if ((text == null ) || text.isEmpty$() ) {
label.setText$S(" ");
}}if (Clazz.instanceOf(component, "javax.swing.JComponent")) {
component.setFont$java_awt_Font(this.comboBox.getFont$());
}baseline=component.getBaseline$I$I(width, height);
} else {
baseline=this.editor.getBaseline$I$I(width, height);
}if (baseline > 0) {
baseline+=insets.top;
}}return baseline;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
this.getDisplaySize$();
if (this.comboBox.isEditable$()) {
return this.editor.getBaselineResizeBehavior$();
} else if (this.sameBaseline) {
var renderer=this.comboBox.getRenderer$();
if (renderer == null ) {
renderer=Clazz.new_($I$(17,1));
}var value=null;
var prototypeValue=this.comboBox.getPrototypeDisplayValue$();
if (prototypeValue != null ) {
value=prototypeValue;
} else if (this.comboBox.getModel$().getSize$() > 0) {
value=this.comboBox.getModel$().getElementAt$I(0);
}if (value != null ) {
var component=renderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.listBox, value, -1, false, false);
return component.getBaselineResizeBehavior$();
}}return $I$(23).OTHER;
});

Clazz.newMeth(C$, 'isNavigationKey$I',  function (keyCode) {
return keyCode == 38 || keyCode == 40  || keyCode == 224  || keyCode == 225 ;
});

Clazz.newMeth(C$, 'isNavigationKey$I$I',  function (keyCode, modifiers) {
var inputMap=this.comboBox.getInputMap$I(1);
var key=$I$(4).getKeyStroke$I$I(keyCode, modifiers);
if (inputMap != null  && inputMap.get$javax_swing_KeyStroke(key) != null  ) {
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'selectNextPossibleValue$',  function () {
var si;
if (this.comboBox.isPopupVisible$()) {
si=this.listBox.getSelectedIndex$();
} else {
si=this.comboBox.getSelectedIndex$();
}if (si < this.comboBox.getModel$().getSize$() - 1) {
this.listBox.setSelectedIndex$I(si + 1);
this.listBox.ensureIndexIsVisible$I(si + 1);
if (!this.isTableCellEditor) {
if (!($I$(1).getBoolean$O("ComboBox.noActionOnKeyNavigation") && this.comboBox.isPopupVisible$() )) {
this.comboBox.setSelectedIndex$I(si + 1);
}}this.repaint$();
}});

Clazz.newMeth(C$, 'selectPreviousPossibleValue$',  function () {
var si;
if (this.comboBox.isPopupVisible$()) {
si=this.listBox.getSelectedIndex$();
} else {
si=this.comboBox.getSelectedIndex$();
}if (si > 0) {
this.listBox.setSelectedIndex$I(si - 1);
this.listBox.ensureIndexIsVisible$I(si - 1);
if (!this.isTableCellEditor) {
if (!($I$(1).getBoolean$O("ComboBox.noActionOnKeyNavigation") && this.comboBox.isPopupVisible$() )) {
this.comboBox.setSelectedIndex$I(si - 1);
}}this.repaint$();
}});

Clazz.newMeth(C$, 'toggleOpenClose$',  function () {
this.setPopupVisible$javax_swing_JComboBox$Z(this.comboBox, !this.isPopupVisible$javax_swing_JComboBox(this.comboBox));
});

Clazz.newMeth(C$, 'rectangleForCurrentValue$',  function () {
var width=this.comboBox.getWidth$();
var height=this.comboBox.getHeight$();
var insets=this.comboBox.getInsets$();
var buttonSize=height - (insets.top + insets.bottom);
if ($I$(6).isLeftToRight$java_awt_Component(this.comboBox)) {
return Clazz.new_([insets.left, insets.top, width - (insets.left + insets.right + buttonSize ), height - (insets.top + insets.bottom)],$I$(24,1).c$$I$I$I$I);
} else {
return Clazz.new_([insets.left + buttonSize, insets.top, width - (insets.left + insets.right + buttonSize ), height - (insets.top + insets.bottom)],$I$(24,1).c$$I$I$I$I);
}});

Clazz.newMeth(C$, 'paintCurrentValue$java_awt_Graphics$java_awt_Rectangle$Z',  function (g, bounds, hasFocus) {
});

Clazz.newMeth(C$, 'paintCurrentValueBackground$java_awt_Graphics$java_awt_Rectangle$Z',  function (g, bounds, hasFocus) {
var t=g.getColor$();
if (this.comboBox.isEnabled$()) g.setColor$java_awt_Color($I$(2).getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$java_awt_Color(this.comboBox, this, "ComboBox.background", null));
 else g.setColor$java_awt_Color($I$(2).getColor$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$java_awt_Color(this.comboBox, this, "ComboBox.disabledBackground", null));
g.fillRect$I$I$I$I(bounds.x, bounds.y, bounds.width, bounds.height);
g.setColor$java_awt_Color(t);
});

Clazz.newMeth(C$, 'repaintCurrentValue$',  function () {
var r=this.rectangleForCurrentValue$();
this.comboBox.repaint$I$I$I$I(r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'getDefaultSize$',  function () {
var d=this.getSizeForComponent$java_awt_Component(C$.getDefaultListCellRenderer$().getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.listBox, " ", -1, false, false));
return Clazz.new_($I$(12,1).c$$I$I,[d.width, d.height]);
});

Clazz.newMeth(C$, 'getDisplaySize$',  function () {
if (!this.isDisplaySizeDirty) {
return Clazz.new_($I$(12,1).c$$java_awt_Dimension,[this.cachedDisplaySize]);
}var result=Clazz.new_($I$(12,1));
this.renderer=this.comboBox.getRenderer$();
if (this.renderer == null ) {
this.renderer=Clazz.new_($I$(17,1));
}this.sameBaseline=true;
var prototypeValue=this.comboBox.getPrototypeDisplayValue$();
if (prototypeValue != null ) {
result=this.getSizeForComponent$java_awt_Component(this.renderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.listBox, prototypeValue, -1, false, false));
} else {
var model=this.comboBox.getModel$();
var modelSize=model.getSize$();
var baseline=-1;
var d;
if (modelSize > 0) {
for (var i=0; i < modelSize; i++) {
var value=model.getElementAt$I(i);
var c=this.renderer.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z(this.listBox, value, -1, false, false);
d=this.getSizeForComponent$java_awt_Component(c);
if (this.sameBaseline && value != null   && (!(Clazz.instanceOf(value, "java.lang.String")) || !"".equals$O(value) ) ) {
var newBaseline=c.getBaseline$I$I(d.width, d.height);
if (newBaseline == -1) {
this.sameBaseline=false;
} else if (baseline == -1) {
baseline=newBaseline;
} else if (baseline != newBaseline) {
this.sameBaseline=false;
}}result.width=Math.max(result.width, d.width);
result.height=Math.max(result.height, d.height);
}
} else {
result=this.getDefaultSize$();
if (this.comboBox.isEditable$()) {
result.width=100;
}}}if (this.comboBox.isEditable$()) {
var d=this.editor.getPreferredSize$();
result.width=Math.max(result.width, d.width);
result.height=Math.max(result.height, d.height);
}if (this.padding != null ) {
result.width+=this.padding.left + this.padding.right;
result.height+=this.padding.top + this.padding.bottom;
}this.cachedDisplaySize.setSize$I$I(result.width, result.height);
this.isDisplaySizeDirty=false;
return result;
});

Clazz.newMeth(C$, 'getSizeForComponent$java_awt_Component',  function (comp) {
this.currentValuePane.add$java_awt_Component(comp);
comp.setFont$java_awt_Font(this.comboBox.getFont$());
var ui=(comp).秘getUI$();
ui.reInit$Z(true);
var d=comp.getPreferredSize$();
comp.setSize$java_awt_Dimension(d);
this.currentValuePane.remove$java_awt_Component(comp);
return d;
});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var km=this.getInputMap$I(1);
$I$(3).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.comboBox, 1, km);
$I$(25,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.comboBox, Clazz.getClass(C$), "ComboBox.actionMap"]);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 1) {
var keyMap=$I$(2).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.comboBox, this, "ComboBox.ancestorInputMap");
var listMap=$I$(2).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.comboBox, this, "List.focusInputMap");
if (listMap == null ) return keyMap;
listMap.setParent$javax_swing_InputMap(keyMap);
return listMap;
}return null;
});

Clazz.newMeth(C$, 'isTableCellEditor$',  function () {
return this.isTableCellEditor;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(3).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.comboBox, 1, null);
$I$(3).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.comboBox, null);
});

Clazz.newMeth(C$, 'repaint$',  function () {
this.comboBox.repaint$();
});

Clazz.newMeth(C$, 'handleJSFocus$O$O$Z',  function (jco, related, focusGained) {
if (focusGained) C$.superclazz.prototype.handleJSFocus$O$O$Z.apply(this, [jco, related, focusGained]);
});

Clazz.newMeth(C$, 'setBackgroundImpl$java_awt_Color',  function (color) {
if (this.domNode == null  || this.isUIDisabled ) return;
this.backgroundColor=color;
this.setBackgroundDOM$swingjs_api_js_DOMNode$java_awt_Color(this.domNode, color);
});

C$.$static$=function(){C$.$static$=0;
{
$I$(9).loadJQComboBox$();
};
C$.COMBO_UI_LIST_CELL_RENDERER_KEY=("DefaultListCellRendererKey");
C$.HIDE_POPUP_KEY=Clazz.new_($I$(10,1).c$$S,["HidePopupKey"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "KeyHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.KeyAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).keyPressed$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "FocusHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.FocusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).focusGained$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).focusLost$java_awt_event_FocusEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "ListDataHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ListDataListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'contentsChanged$javax_swing_event_ListDataEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).contentsChanged$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$, 'intervalAdded$javax_swing_event_ListDataEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).intervalAdded$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$, 'intervalRemoved$javax_swing_event_ListDataEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).intervalRemoved$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "ItemHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "PropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "ComboBoxLayoutManager", function(){
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
return p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).preferredLayoutSize$java_awt_Container(parent);
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
return p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).minimumLayoutSize$java_awt_Container(parent);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []).layoutContainer$java_awt_Container(parent);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var key=this.getName$();
var comboBox=e.getSource$();
var ui=comboBox.getUI$();
if (key == "hidePopup") {
comboBox.firePopupMenuCanceled$();
comboBox.setPopupVisible$Z(false);
} else if (key == "pageDownPassThrough" || key == "pageUpPassThrough"  || key == "homePassThrough"  || key == "endPassThrough" ) {
var index=p$2.getNextIndex$javax_swing_JComboBox$S.apply(this, [comboBox, key]);
if (index >= 0 && index < comboBox.getItemCount$() ) {
if ($I$(1).getBoolean$O("ComboBox.noActionOnKeyNavigation") && comboBox.isPopupVisible$() ) {
ui.listBox.setSelectedIndex$I(index);
ui.listBox.ensureIndexIsVisible$I(index);
ui.repaint$();
} else {
comboBox.setSelectedIndex$I(index);
}}} else if (key == "selectNext") {
if (comboBox.isShowing$()) {
if (comboBox.isPopupVisible$()) {
if (ui != null ) {
ui.selectNextPossibleValue$();
}} else {
comboBox.setPopupVisible$Z(true);
}}} else if (key == "selectNext2") {
if (comboBox.isShowing$()) {
if ((comboBox.isEditable$() || (ui != null  && ui.isTableCellEditor$() ) ) && !comboBox.isPopupVisible$() ) {
comboBox.setPopupVisible$Z(true);
} else {
if (ui != null ) {
ui.selectNextPossibleValue$();
}}}} else if (key == "togglePopup" || key == "spacePopup" ) {
if (ui != null  && (key == "togglePopup" || !comboBox.isEditable$() ) ) {
if (ui.isTableCellEditor$()) {
comboBox.setSelectedIndex$I(ui.listBox.getSelectedIndex$());
} else {
comboBox.setPopupVisible$Z(!comboBox.isPopupVisible$());
}}} else if (key == "selectPrevious") {
if (ui != null ) {
if (ui.isPopupVisible$javax_swing_JComboBox(comboBox)) {
ui.selectPreviousPossibleValue$();
} else if ($I$(2).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(comboBox, ui, "ComboBox.showPopupOnNavigation", false)) {
ui.setPopupVisible$javax_swing_JComboBox$Z(comboBox, true);
}}} else if (key == "selectPrevious2") {
if (comboBox.isShowing$() && ui != null  ) {
if (comboBox.isEditable$() && !comboBox.isPopupVisible$() ) {
comboBox.setPopupVisible$Z(true);
} else {
ui.selectPreviousPossibleValue$();
}}} else if (key == "enterPressed") {
if (comboBox.isPopupVisible$()) {
if ($I$(1).getBoolean$O("ComboBox.noActionOnKeyNavigation")) {
var listItem=ui.listBox.getSelectedValue$();
if (listItem != null ) {
comboBox.getEditor$().setItem$O(listItem);
comboBox.setSelectedItem$O(listItem);
}comboBox.setPopupVisible$Z(false);
} else {
var isEnterSelectablePopup=$I$(1).getBoolean$O("ComboBox.isEnterSelectablePopup");
if (!comboBox.isEditable$() || isEnterSelectablePopup || ui.isTableCellEditor  ) {
var listItem=ui.listBox.getSelectedValue$();
if (listItem != null ) {
comboBox.getEditor$().setItem$O(listItem);
comboBox.setSelectedItem$O(listItem);
}}comboBox.setPopupVisible$Z(false);
}} else {
if (ui.isTableCellEditor && !comboBox.isEditable$() ) {
comboBox.setSelectedItem$O(comboBox.getSelectedItem$());
}var root=$I$(3).getRootPane$java_awt_Component(comboBox);
if (root != null ) {
var im=root.getInputMap$I(2);
var am=root.getActionMap$();
if (im != null  && am != null  ) {
var obj=im.get$javax_swing_KeyStroke($I$(4).getKeyStroke$I$I(10, 0));
if (obj != null ) {
var action=am.get$O(obj);
if (action != null ) {
action.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([root, e.getID$(), e.getActionCommand$(), e.getWhen$(), e.getModifiers$()],$I$(5,1).c$$O$I$S$J$I));
}}}}}}});

Clazz.newMeth(C$, 'getNextIndex$javax_swing_JComboBox$S',  function (comboBox, key) {
var listHeight=comboBox.getMaximumRowCount$();
var selectedIndex=comboBox.getSelectedIndex$();
if ($I$(1).getBoolean$O("ComboBox.noActionOnKeyNavigation") && (Clazz.instanceOf(comboBox.getUI$(), "swingjs.plaf.JSComboBoxUI")) ) {
selectedIndex=(comboBox.getUI$()).listBox.getSelectedIndex$();
}if (key == "pageUpPassThrough") {
var index=selectedIndex - listHeight;
return (index < 0 ? 0 : index);
} else if (key == "pageDownPassThrough") {
var index=selectedIndex + listHeight;
var max=comboBox.getItemCount$();
return (index < max ? index : max - 1);
} else if (key == "homePassThrough") {
return 0;
} else if (key == "endPassThrough") {
return comboBox.getItemCount$() - 1;
}return comboBox.getSelectedIndex$();
}, p$2);

Clazz.newMeth(C$, 'isEnabled$O',  function (c) {
if (this.getName$() == "hidePopup") {
return (c != null  && (c).isPopupVisible$() );
}return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.ActionListener', 'java.awt.event.FocusListener', 'java.awt.event.KeyListener', 'java.awt.LayoutManager', 'javax.swing.event.ListDataListener', 'java.beans.PropertyChangeListener', 'javax.swing.event.ListSelectionListener', 'java.awt.event.ItemListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
this.b$['swingjs.plaf.JSComboBoxUI'].popup.updateState$java_util_EventObject$S(e, null);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var editor=this.b$['swingjs.plaf.JSComboBoxUI'].editor;
var propertyName=e.getPropertyName$();
var popup=this.b$['swingjs.plaf.JSComboBoxUI'].popup;
if (e.getSource$() === editor ) {
if ("border".equals$O(propertyName)) {
this.b$['swingjs.plaf.JSComboBoxUI'].isMinimumSizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].isDisplaySizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.revalidate$();
}} else {
var comboBox=e.getSource$();
switch (propertyName) {
case "model":
var newModel=e.getNewValue$();
var oldModel=e.getOldValue$();
if (oldModel != null  && this.b$['swingjs.plaf.JSComboBoxUI'].listDataListener != null  ) {
oldModel.removeListDataListener$javax_swing_event_ListDataListener(this.b$['swingjs.plaf.JSComboBoxUI'].listDataListener);
}if (newModel != null  && this.b$['swingjs.plaf.JSComboBoxUI'].listDataListener != null  ) {
newModel.addListDataListener$javax_swing_event_ListDataListener(this.b$['swingjs.plaf.JSComboBoxUI'].listDataListener);
}if (editor != null ) {
comboBox.configureEditor$javax_swing_ComboBoxEditor$O(comboBox.getEditor$(), comboBox.getSelectedItem$());
}this.b$['swingjs.plaf.JSComboBoxUI'].isMinimumSizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].isDisplaySizeDirty=true;
comboBox.revalidate$();
this.b$['swingjs.plaf.JSComboBoxUI'].listBox.setModel$javax_swing_ListModel(newModel);
this.b$['swingjs.plaf.JSComponentUI'].setTainted$.apply(this.b$['swingjs.plaf.JSComponentUI'], []);
this.b$['swingjs.plaf.JSComboBoxUI'].updateDOMNode$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
popup.updateList$();
popup.updateSelectedIndex$();
popup.updateCSS$();
this.b$['swingjs.plaf.JSComboBoxUI'].repaint$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
break;
case "editor":
if (comboBox.isEditable$()) {
this.b$['swingjs.plaf.JSComboBoxUI'].addEditor$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
comboBox.revalidate$();
}break;
case "editable":
if (comboBox.isEditable$()) {
comboBox.setRequestFocusEnabled$Z(false);
this.b$['swingjs.plaf.JSComboBoxUI'].addEditor$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
} else {
comboBox.setRequestFocusEnabled$Z(true);
this.b$['swingjs.plaf.JSComboBoxUI'].removeEditor$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
}p$1.updateToolTipTextForChildren.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
comboBox.revalidate$();
break;
case "enabled":
var enabled=comboBox.isEnabled$();
if (editor != null ) editor.setEnabled$Z(enabled);
this.b$['swingjs.plaf.JSComboBoxUI'].repaint$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
break;
case "focusable":
var focusable=comboBox.isFocusable$();
if (editor != null ) editor.setFocusable$Z(focusable);
this.b$['swingjs.plaf.JSComboBoxUI'].repaint$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
break;
case "maximumRowCount":
if (this.b$['swingjs.plaf.JSComboBoxUI'].isPopupVisible$javax_swing_JComboBox.apply(this.b$['swingjs.plaf.JSComboBoxUI'], [comboBox])) {
this.b$['swingjs.plaf.JSComboBoxUI'].setPopupVisible$javax_swing_JComboBox$Z.apply(this.b$['swingjs.plaf.JSComboBoxUI'], [comboBox, false]);
this.b$['swingjs.plaf.JSComboBoxUI'].setPopupVisible$javax_swing_JComboBox$Z.apply(this.b$['swingjs.plaf.JSComboBoxUI'], [comboBox, true]);
}break;
case "background":
var c=comboBox.getBackground$();
this.b$['swingjs.plaf.JSComboBoxUI'].listBox.setBackground$java_awt_Color(c);
if (editor != null ) {
editor.setBackground$java_awt_Color(c);
}popup.updateCSS$();
break;
case "foreground":
this.b$['swingjs.plaf.JSComboBoxUI'].listBox.setFont$java_awt_Font(comboBox.getFont$());
if (editor != null ) {
editor.setFont$java_awt_Font(comboBox.getFont$());
}this.b$['swingjs.plaf.JSComboBoxUI'].isMinimumSizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].isDisplaySizeDirty=true;
popup.updateCSS$();
break;
case "font":
this.b$['swingjs.plaf.JSComboBoxUI'].listBox.setFont$java_awt_Font(comboBox.getFont$());
if (editor != null ) {
editor.setFont$java_awt_Font(comboBox.getFont$());
}this.b$['swingjs.plaf.JSComboBoxUI'].isMinimumSizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].isDisplaySizeDirty=true;
popup.updateCSS$();
comboBox.validate$();
break;
case "ToolTipText":
p$1.updateToolTipTextForChildren.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
break;
case "JComboBox.isTableCellEditor":
var inTable=e.getNewValue$();
this.b$['swingjs.plaf.JSComboBoxUI'].isTableCellEditor=inTable.equals$O(Boolean.TRUE) ? true : false;
break;
case "prototypeDisplayValue":
this.b$['swingjs.plaf.JSComboBoxUI'].isMinimumSizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].isDisplaySizeDirty=true;
comboBox.revalidate$();
break;
case "renderer":
this.b$['swingjs.plaf.JSComboBoxUI'].isMinimumSizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].isDisplaySizeDirty=true;
popup.updateList$();
comboBox.revalidate$();
break;
}
}});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (p$1.isNavigationKey$I$I.apply(this.b$['swingjs.plaf.JSComboBoxUI'], [e.getKeyCode$(), e.getModifiers$()])) {
this.b$['swingjs.plaf.JSComboBoxUI'].lastTime=0;
} else if (this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.isEnabled$() && this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getModel$().getSize$() != 0  && p$3.isTypeAheadKey$java_awt_event_KeyEvent.apply(this, [e])  && e.getKeyChar$() != "\uffff" ) {
this.b$['swingjs.plaf.JSComboBoxUI'].time=e.getWhen$();
if (this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.selectWithKeyChar$C(e.getKeyChar$())) {
e.consume$();
}}});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'isTypeAheadKey$java_awt_event_KeyEvent',  function (e) {
return !e.isAltDown$() && !$I$(6).isMenuShortcutKeyDown$java_awt_event_InputEvent(e) ;
}, p$3);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
var comboBoxEditor=this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getEditor$();
if ((comboBoxEditor != null ) && (e.getSource$() === comboBoxEditor.getEditorComponent$() ) ) {
return;
}this.b$['swingjs.plaf.JSComboBoxUI'].hasFocus=true;
this.b$['swingjs.plaf.JSComboBoxUI'].repaint$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
if (this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.isEditable$() && this.b$['swingjs.plaf.JSComboBoxUI'].editor != null  ) {
this.b$['swingjs.plaf.JSComboBoxUI'].editor.requestFocus$();
}});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var editor=this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getEditor$();
if ((editor != null ) && (e.getSource$() === editor.getEditorComponent$() ) ) {
var item=editor.getItem$();
var selectedItem=this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getSelectedItem$();
if (!e.isTemporary$() && item != null   && !item.equals$O((selectedItem == null ) ? "" : selectedItem) ) {
this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([editor, 0, "", $I$(7).getMostRecentEventTime$(), 0],$I$(5,1).c$$O$I$S$J$I));
}}this.b$['swingjs.plaf.JSComboBoxUI'].hasFocus=false;
if (!e.isTemporary$()) {
this.b$['swingjs.plaf.JSComboBoxUI'].setPopupVisible$javax_swing_JComboBox$Z.apply(this.b$['swingjs.plaf.JSComboBoxUI'], [this.b$['swingjs.plaf.JSComboBoxUI'].comboBox, false]);
}this.b$['swingjs.plaf.JSComboBoxUI'].repaint$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
});

Clazz.newMeth(C$, 'contentsChanged$javax_swing_event_ListDataEvent',  function (e) {
if (!(e.getIndex0$() == -1 && e.getIndex1$() == -1 )) {
this.b$['swingjs.plaf.JSComboBoxUI'].isMinimumSizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.revalidate$();
}if (this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.isEditable$() && this.b$['swingjs.plaf.JSComboBoxUI'].editor != null  ) {
this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.configureEditor$javax_swing_ComboBoxEditor$O(this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getEditor$(), this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getSelectedItem$());
}this.b$['swingjs.plaf.JSComboBoxUI'].contentsTainted=true;
this.b$['swingjs.plaf.JSComboBoxUI'].isDisplaySizeDirty=true;
this.b$['swingjs.plaf.JSComboBoxUI'].repaint$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []);
});

Clazz.newMeth(C$, 'intervalAdded$javax_swing_event_ListDataEvent',  function (e) {
this.contentsChanged$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$, 'intervalRemoved$javax_swing_event_ListDataEvent',  function (e) {
this.contentsChanged$javax_swing_event_ListDataEvent(e);
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
return parent.getPreferredSize$();
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
return parent.getMinimumSize$();
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
if (this.b$['swingjs.plaf.JSComboBoxUI'].editor != null ) {
this.b$['swingjs.plaf.JSComboBoxUI'].editor.setBounds$java_awt_Rectangle(this.b$['swingjs.plaf.JSComboBoxUI'].rectangleForCurrentValue$.apply(this.b$['swingjs.plaf.JSComboBoxUI'], []));
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
var item=this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getEditor$().getItem$();
if (item != null ) {
if (!this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.isPopupVisible$() && !item.equals$O(this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getSelectedItem$()) ) {
this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.setSelectedItem$O(this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getEditor$().getItem$());
}var am=this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getActionMap$();
if (am != null ) {
var action=am.get$O("enterPressed");
if (action != null ) {
action.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this.b$['swingjs.plaf.JSComboBoxUI'].comboBox, evt.getID$(), evt.getActionCommand$(), evt.getModifiers$()],$I$(5,1).c$$O$I$S$I));
}}}});

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['swingjs.plaf.JSComboBoxUI'].popup.updateHoverIndex$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSComboBoxUI, "DefaultKeySelectionManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javax.swing.JComboBox','javax.swing.JComboBox.KeySelectionManager'], 'javax.swing.plaf.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.prefix="";
this.typedString="";
},1);

C$.$fields$=[['S',['prefix','typedString']]]

Clazz.newMeth(C$, 'selectionForKey$C$javax_swing_ComboBoxModel',  function (aKey, aModel) {
if (Long.$eq(this.b$['swingjs.plaf.JSComboBoxUI'].lastTime,0 )) {
this.prefix="";
this.typedString="";
}var startingFromSelection=true;
var startIndex=this.b$['swingjs.plaf.JSComboBoxUI'].comboBox.getSelectedIndex$();
if (Long.$lt(Long.$sub(this.b$['swingjs.plaf.JSComboBoxUI'].time,this.b$['swingjs.plaf.JSComboBoxUI'].lastTime),this.b$['swingjs.plaf.JSComboBoxUI'].timeFactor )) {
this.typedString+=aKey;
if ((this.prefix.length$() == 1) && (aKey == this.prefix.charAt$I(0)) ) {
++startIndex;
} else {
this.prefix=this.typedString;
}} else {
++startIndex;
this.typedString="" + aKey;
this.prefix=this.typedString;
}this.b$['swingjs.plaf.JSComboBoxUI'].lastTime=this.b$['swingjs.plaf.JSComboBoxUI'].time;
if (startIndex < 0 || startIndex >= aModel.getSize$() ) {
startingFromSelection=false;
startIndex=0;
}var index=this.b$['swingjs.plaf.JSComboBoxUI'].listBox.getNextMatch$S$I$javax_swing_text_Position_Bias(this.prefix, startIndex, $I$(8).Forward);
if (index < 0 && startingFromSelection ) {
index=this.b$['swingjs.plaf.JSComboBoxUI'].listBox.getNextMatch$S$I$javax_swing_text_Position_Bias(this.prefix, 0, $I$(8).Forward);
}return index;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

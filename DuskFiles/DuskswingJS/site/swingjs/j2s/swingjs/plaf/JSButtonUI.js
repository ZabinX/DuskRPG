(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','javax.swing.BorderFactory','swingjs.plaf.ButtonListener','javax.swing.UIManager','javax.swing.LookAndFeel','java.awt.Dimension','swingjs.plaf.JSLabelUI']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSButtonUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.shiftOffset=0;
},1);

C$.$fields$=[['I',['shiftOffset','defaultTextShiftOffset'],'O',['menuItem','javax.swing.JMenuItem','button','javax.swing.AbstractButton','thisIcon','javax.swing.Icon']]]

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.isSimpleButton=true;
this.imagePersists=true;
this.allowPaintedBackground=false;
this.setDoPropagate$();
this.domNode=this.enableNode=this.buttonNode=$I$(1,"newDOMObject$S$S$SA",["button", this.id + "_dom", Clazz.array(String, -1, ["type", "button", "style", "padding:0"])]);
this.addClass$swingjs_api_js_DOMNode$S(this.domNode, "j2sbutton");
this.setFocusable$();
$I$(2).setPositionAbsolute(this.domNode);
this.iconNode=null;
this.createButton$();
}this.setupButton$();
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'createButton$',  function () {
this.addCentering$swingjs_api_js_DOMNode(this.buttonNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.buttonNode);
if (this.actionNode != null  && this.iconNode !== this.actionNode  ) this.setDataComponent$swingjs_api_js_DOMNode(this.actionNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.iconNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.textNode);
this.setEnabled$Z(this.c.isEnabled$());
});

Clazz.newMeth(C$, 'setJSText$swingjs_api_js_DOMNode$S$S',  function (obj, prop, val) {
var node=$I$(2).setAttr(obj, prop, val);
if (val.indexOf$S("<u>") >= 0) {
this.setDataComponent$swingjs_api_js_DOMNode($I$(2).firstChild(node));
}return node;
});

Clazz.newMeth(C$, 'createItem$S$swingjs_api_js_DOMNode',  function (type, buttonNode) {
var text=this.button.getText$();
var icon=this.getIcon$();
var gap=this.button.getIconTextGap$();
this.isMenuSep=(("|").equals$O(text) || ("-").equals$O(text) );
if (this.isMenuSep) {
text=null;
}if (this.createItemNode$S$javax_swing_Icon$I$S$swingjs_api_js_DOMNode(type, icon, gap, text, buttonNode)) {
this.setDataComponent$swingjs_api_js_DOMNode(this.menuAnchorNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.itemNode);
}return this.itemNode;
});

Clazz.newMeth(C$, 'enableNode$swingjs_api_js_DOMNode$Z',  function (node, b) {
if (node == null  || this.isUIDisabled ) return;
if (this.isMenuItem) {
if (b) {
this.removeClass$swingjs_api_js_DOMNode$S(node, "ui-j2smenu-disabled ui-state-disabled");
} else {
this.addClass$swingjs_api_js_DOMNode$S(node, "ui-j2smenu-disabled ui-state-disabled");
}return;
}C$.superclazz.prototype.enableNode$swingjs_api_js_DOMNode$Z.apply(this, [node, b]);
});

Clazz.newMeth(C$, 'setupButton$',  function () {
this.setIconAndText$S$javax_swing_Icon$I$S("button", this.getIcon$(), this.button.getIconTextGap$(), this.button.getText$());
if (this.button.getBorder$() == null  || this.button.getBorder$() === $I$(3).emptyBorder  ) $I$(2).setStyle(this.buttonNode, "border", "none");
 else if (this.button.getBorder$() === $I$(3).html5Border ) $I$(2).setStyle(this.buttonNode, "border", null);
if (!this.button.isContentAreaFilled$()) $I$(2).setStyles(this.domNode, ["border", "none", "outline", "none"]);
if (!this.isMenuSep) {
this.setMnemonic$I(-1);
this.setAlignments$javax_swing_AbstractButton$Z(this.button, false);
this.updateCenteringNode$();
}});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.isUIDisabled) return;
C$.superclazz.prototype.dispose$.apply(this, []);
if (this.menuAnchorNode != null ) {
$I$(2).setAttr(this.menuAnchorNode, "_menu", null);
}});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode',  function (node) {
if (!this.isDisposed) return;
C$.superclazz.prototype.undisposeUI$swingjs_api_js_DOMNode.apply(this, [node]);
});

Clazz.newMeth(C$, 'handleJSEvent$O$I$O',  function (target, eventType, jQueryEvent) {
if (eventType == 401) {
}if (this.actionNode == null ) {
if (this.menuItem == null ) {
switch (eventType) {
case 402:
var keyCode=jQueryEvent.keyCode ||0;
if (keyCode == 13 || keyCode == 32 ) {
this.button.doClick$();
return true;
}}
} else {
switch (eventType) {
case 502:
this.menuItem.doClick$I(0);
return true;
}
}}return false;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.button=jc;
this.installDefaults$javax_swing_AbstractButton(this.button);
this.installListeners$javax_swing_AbstractButton(this.button);
this.installKeyboardActions$javax_swing_AbstractButton(this.button);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
this.uninstallKeyboardActions$javax_swing_AbstractButton(this.button);
this.uninstallListeners$javax_swing_AbstractButton(this.button);
});

Clazz.newMeth(C$, 'installListeners$javax_swing_AbstractButton',  function (b) {
this.buttonListener=Clazz.new_($I$(4,1).c$$swingjs_plaf_JSButtonUI,[this]);
if (this.buttonListener != null ) {
b.addMouseListener$java_awt_event_MouseListener(this.buttonListener);
b.addMouseMotionListener$java_awt_event_MouseMotionListener(this.buttonListener);
b.addFocusListener$java_awt_event_FocusListener(this.buttonListener);
b.addPropertyChangeListener$java_beans_PropertyChangeListener(this.buttonListener);
b.addChangeListener$javax_swing_event_ChangeListener(this.buttonListener);
}});

Clazz.newMeth(C$, 'uninstallListeners$javax_swing_AbstractButton',  function (b) {
var listener=this.getButtonListener$javax_swing_AbstractButton(b);
if (listener != null ) {
b.removeMouseListener$java_awt_event_MouseListener(listener);
b.removeMouseMotionListener$java_awt_event_MouseMotionListener(listener);
b.removeFocusListener$java_awt_event_FocusListener(listener);
b.removeChangeListener$javax_swing_event_ChangeListener(listener);
b.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'installKeyboardActions$javax_swing_AbstractButton',  function (b) {
var listener=this.getButtonListener$javax_swing_AbstractButton(b);
if (listener != null ) {
listener.installKeyboardActions$javax_swing_JComponent(b);
}});

Clazz.newMeth(C$, 'uninstallKeyboardActions$javax_swing_AbstractButton',  function (b) {
var listener=this.getButtonListener$javax_swing_AbstractButton(b);
if (listener != null ) {
listener.uninstallKeyboardActions$javax_swing_JComponent(b);
}});

Clazz.newMeth(C$, 'getButtonListener$javax_swing_AbstractButton',  function (b) {
var listeners=b.getMouseMotionListeners$();
if (listeners != null ) {
for (var counter=0; counter < listeners.length; counter++) {
if (Clazz.instanceOf(listeners[counter], "swingjs.plaf.ButtonListener")) {
return listeners[counter];
}}
}return null;
});

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "Button";
});

Clazz.newMeth(C$, 'installDefaults$javax_swing_AbstractButton',  function (b) {
var pp=this.getPropertyPrefix$();
this.defaultTextShiftOffset=$I$(5).getInt$O(pp + ".textShiftOffset");
if (b.getMargin$() == null  || (Clazz.instanceOf(b.getMargin$(), "javax.swing.plaf.UIResource")) ) {
b.setMargin$java_awt_Insets($I$(5).getInsets$O(pp + ".margin"));
}$I$(6).installColorsAndFont$javax_swing_JComponent$S$S$S(b, pp + ".background", pp + ".foreground", pp + ".font");
$I$(6).installBorder$javax_swing_JComponent$S(b, pp + ".border");
$I$(6,"installProperty$javax_swing_JComponent$S$O",[b, "iconTextGap",  new Integer(4)]);
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z$Z',  function (addingCSS, mutable) {
return mutable || this.itemNode != null   ? Clazz.new_([(this.itemNode == null  ? 0 : 10), 0],$I$(7,1).c$$I$I) : $I$(1).ZERO_SIZE;
});

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I',  function (width, height) {
if (this.isSimpleButton) {
var i=this.getButtonOuterInsets$javax_swing_AbstractButton(this.button);
if (!(Clazz.instanceOf(this.button.getBorder$(), "javax.swing.plaf.UIResource"))) {
$I$(2).setTopLeftAbsolute(this.domNode, i.top, i.left);
$I$(2).setSize(this.domNode, width - i.left - i.right , height - i.top - i.bottom );
$I$(2).setStyle(this.domNode, "border", i.left + i.right + i.top + i.bottom  > 0 ? "none" : null);
}}});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z',  function (obj, addCSS) {
this.setAlignments$javax_swing_AbstractButton$Z(this.button, !addCSS);
return this.setHTMLSize1$swingjs_api_js_DOMNode$Z$Z(obj, addCSS, true);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
if (this.jc.秘paintsSelfEntirely$()) {
$I$(2).setStyle(this.centeringNode, "visibility", "visible");
} else if (this.currentIcon != null  && this.imageNode != null   && this.imagePersists ) {
var icon=this.thisIcon;
if (icon != null  && icon !== this.getIcon$()  ) {
this.$$O(this.iconNode).empty();
this.currentIcon=this.getOrCreateIcon$java_awt_JSComponent$javax_swing_Icon(c, this.thisIcon);
this.imageNode=(this.currentIcon.getImage$()).秘getImageNode$I(2);
this.iconNode.appendChild(this.imageNode);
}}C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
});

Clazz.newMeth(C$, 'getIcon$',  function () {
var model=this.button.getModel$();
var disabledIcon=this.button.disabledIcon ||null;
return this.thisIcon=(disabledIcon != null  && !model.isEnabled$()  ? disabledIcon : this.button.getIcon$());
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return true;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
if (this.isAWT && this.isSimpleButton ) return $I$(8).getMinimumSizePeer$javax_swing_JComponent$O(jc, this.button);
var ic;
if (!this.isSimpleButton || this.isAWT || this.button.getText$() != null    || (ic=this.getIcon$()) == null  ) return C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [jc]);
var $in=this.button.getInsets$();
return Clazz.new_([$in.left + $in.right + ic.getIconWidth$() , $in.top + $in.bottom + ic.getIconHeight$() ],$I$(7,1).c$$I$I);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

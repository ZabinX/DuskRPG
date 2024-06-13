(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.AbstractAction','javax.swing.UIManager','java.awt.event.ActionListener',['javax.swing.AbstractButton','.ButtonActionPropertyChangeListener'],'javax.swing.SwingUtilities','javax.swing.OverlayLayout','javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent','java.awt.event.ActionEvent','java.awt.event.ItemListener','java.awt.event.ItemEvent',['javax.swing.AbstractButton','.Handler']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractButton", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', ['java.awt.ItemSelectable', 'javax.swing.SwingConstants']);
C$.$classes$=[['ButtonActionPropertyChangeListener',10],['ButtonChangeListener',4],['Handler',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.model=null;
this.text="";
this.margin=null;
this.defaultMargin=null;
this.defaultIcon=null;
this.pressedIcon=null;
this.disabledIcon=null;
this.selectedIcon=null;
this.disabledSelectedIcon=null;
this.rolloverIcon=null;
this.rolloverSelectedIcon=null;
this.paintBorder=true;
this.paintFocus=true;
this.rolloverEnabled=false;
this.contentAreaFilled=true;
this.verticalAlignment=0;
this.horizontalAlignment=0;
this.verticalTextPosition=0;
this.horizontalTextPosition=11;
this.iconTextGap=4;
this.mnemonicIndex=-1;
this.multiClickThreshhold=0;
this.borderPaintedSet=false;
this.rolloverEnabledSet=false;
this.iconTextGapSet=false;
this.contentAreaFilledSet=false;
this.setLayout=false;
this.defaultCapable=true;
this.changeListener=null;
this.actionListener=null;
this.itemListener=null;
this.hideActionText=false;
},1);

C$.$fields$=[['Z',['paintBorder','paintFocus','rolloverEnabled','contentAreaFilled','borderPaintedSet','rolloverEnabledSet','iconTextGapSet','contentAreaFilledSet','setLayout','defaultCapable','hideActionText'],'I',['verticalAlignment','horizontalAlignment','verticalTextPosition','horizontalTextPosition','iconTextGap','mnemonic','mnemonicIndex','秘lastWidth'],'J',['multiClickThreshhold'],'S',['text'],'O',['model','javax.swing.ButtonModel','margin','java.awt.Insets','+defaultMargin','defaultIcon','javax.swing.Icon','+pressedIcon','+disabledIcon','+selectedIcon','+disabledSelectedIcon','+rolloverIcon','+rolloverSelectedIcon','handler','javax.swing.AbstractButton.Handler','changeListener','javax.swing.event.ChangeListener','actionListener','java.awt.event.ActionListener','itemListener','java.awt.event.ItemListener','changeEvent','javax.swing.event.ChangeEvent','action','javax.swing.Action','actionPropertyChangeListener','java.beans.PropertyChangeListener']]]

Clazz.newMeth(C$, 'setHideActionText$Z',  function (hideActionText) {
if (hideActionText != this.hideActionText ) {
this.hideActionText=hideActionText;
if (this.getAction$() != null ) {
p$1.setTextFromAction$javax_swing_Action$Z.apply(this, [this.getAction$(), false]);
}this.firePropertyChange$S$Z$Z("hideActionText", !hideActionText, hideActionText);
}});

Clazz.newMeth(C$, 'getHideActionText$',  function () {
return this.hideActionText;
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.text;
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
var oldValue=this.text;
this.text=text;
this.firePropertyChange$S$O$O("text", oldValue, text);
p$1.updateDisplayedMnemonicIndex$S$I.apply(this, [text, this.getMnemonic$()]);
var isTainted=false;
if (text == null  || oldValue == null   || (isTainted=!text.equals$O(oldValue)) ) {
if (this.秘isAWT$()) {
this.invalidateIfValid$();
} else {
if (isTainted) {
var width=(this.ui == null  || this.秘getUI$().textNode == null   ? -2147483648 : this.getFont$().getFontMetrics$().stringWidth$S(text));
if (width == this.秘lastWidth) {
this.秘getUI$().setTainted$();
} else {
if (width != -2147483648) this.秘lastWidth=width;
isTainted=false;
}}if (!isTainted) this.revalidate$();
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.model.isSelected$();
});

Clazz.newMeth(C$, 'setSelected$Z',  function (b) {
this.model.setSelected$Z(b);
});

Clazz.newMeth(C$, 'doClick$',  function () {
this.doClick$I(68);
});

Clazz.newMeth(C$, 'doClick$I',  function (pressTime) {
(this.ui).abstractButtonFocusHack$();
this.model.setArmed$Z(true);
this.model.setPressed$Z(true);
this.model.setPressed$Z(false);
this.model.setArmed$Z(false);
});

Clazz.newMeth(C$, 'setMargin$java_awt_Insets',  function (m) {
if (Clazz.instanceOf(m, "javax.swing.plaf.UIResource")) {
this.defaultMargin=m;
} else if (Clazz.instanceOf(this.margin, "javax.swing.plaf.UIResource")) {
this.defaultMargin=this.margin;
}if (m == null  && this.defaultMargin != null  ) {
m=this.defaultMargin;
}var old=this.margin;
this.margin=m;
this.firePropertyChange$S$O$O("margin", old, m);
if (old == null  || !old.equals$O(m) ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getMargin$',  function () {
return (this.margin == null ) ? null : this.margin.clone$();
});

Clazz.newMeth(C$, 'getIcon$',  function () {
return this.defaultIcon;
});

Clazz.newMeth(C$, 'setIcon$javax_swing_Icon',  function (defaultIcon) {
var oldValue=this.defaultIcon;
this.defaultIcon=defaultIcon;
if (defaultIcon !== oldValue  && (Clazz.instanceOf(this.disabledIcon, "javax.swing.plaf.UIResource")) ) {
this.disabledIcon=null;
}this.firePropertyChange$S$O$O("icon", oldValue, defaultIcon);
if (defaultIcon !== oldValue ) {
if (defaultIcon == null  || oldValue == null   || defaultIcon.getIconWidth$() != oldValue.getIconWidth$()  || defaultIcon.getIconHeight$() != oldValue.getIconHeight$() ) {
this.revalidate$();
}this.秘repaint$();
}});

Clazz.newMeth(C$, 'getPressedIcon$',  function () {
return this.pressedIcon;
});

Clazz.newMeth(C$, 'setPressedIcon$javax_swing_Icon',  function (pressedIcon) {
var oldValue=this.pressedIcon;
this.pressedIcon=pressedIcon;
this.firePropertyChange$S$O$O("pressedIcon", oldValue, pressedIcon);
if (pressedIcon !== oldValue ) {
if (this.getModel$().isPressed$()) {
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'getSelectedIcon$',  function () {
return this.selectedIcon;
});

Clazz.newMeth(C$, 'setSelectedIcon$javax_swing_Icon',  function (selectedIcon) {
var oldValue=this.selectedIcon;
this.selectedIcon=selectedIcon;
if (selectedIcon !== oldValue  && Clazz.instanceOf(this.disabledSelectedIcon, "javax.swing.plaf.UIResource") ) {
this.disabledSelectedIcon=null;
}this.firePropertyChange$S$O$O("selectedIcon", oldValue, selectedIcon);
if (selectedIcon !== oldValue ) {
if (this.isSelected$()) {
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'getRolloverIcon$',  function () {
return this.rolloverIcon;
});

Clazz.newMeth(C$, 'setRolloverIcon$javax_swing_Icon',  function (rolloverIcon) {
var oldValue=this.rolloverIcon;
this.rolloverIcon=rolloverIcon;
this.firePropertyChange$S$O$O("rolloverIcon", oldValue, rolloverIcon);
this.setRolloverEnabled$Z(true);
if (rolloverIcon !== oldValue ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getRolloverSelectedIcon$',  function () {
return this.rolloverSelectedIcon;
});

Clazz.newMeth(C$, 'setRolloverSelectedIcon$javax_swing_Icon',  function (rolloverSelectedIcon) {
var oldValue=this.rolloverSelectedIcon;
this.rolloverSelectedIcon=rolloverSelectedIcon;
this.firePropertyChange$S$O$O("rolloverSelectedIcon", oldValue, rolloverSelectedIcon);
this.setRolloverEnabled$Z(true);
if (rolloverSelectedIcon !== oldValue ) {
if (this.isSelected$()) {
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'getDisabledIcon$',  function () {
if (this.disabledIcon == null ) {
this.disabledIcon=$I$(2).getLookAndFeel$().getDisabledIcon$javax_swing_JComponent$javax_swing_Icon(this, this.getIcon$());
if (this.disabledIcon != null ) {
this.firePropertyChange$S$O$O("disabledIcon", null, this.disabledIcon);
}}return this.disabledIcon;
});

Clazz.newMeth(C$, 'setDisabledIcon$javax_swing_Icon',  function (disabledIcon) {
var oldValue=this.disabledIcon;
this.disabledIcon=disabledIcon;
this.firePropertyChange$S$O$O("disabledIcon", oldValue, disabledIcon);
if (disabledIcon !== oldValue ) {
if (!this.isEnabled$()) {
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'getDisabledSelectedIcon$',  function () {
if (this.disabledSelectedIcon == null ) {
if (this.selectedIcon != null ) {
this.disabledSelectedIcon=$I$(2).getLookAndFeel$().getDisabledSelectedIcon$javax_swing_JComponent$javax_swing_Icon(this, this.getSelectedIcon$());
} else {
return this.getDisabledIcon$();
}}return this.disabledSelectedIcon;
});

Clazz.newMeth(C$, 'setDisabledSelectedIcon$javax_swing_Icon',  function (disabledSelectedIcon) {
var oldValue=this.disabledSelectedIcon;
this.disabledSelectedIcon=disabledSelectedIcon;
this.firePropertyChange$S$O$O("disabledSelectedIcon", oldValue, disabledSelectedIcon);
if (disabledSelectedIcon !== oldValue ) {
if (disabledSelectedIcon == null  || oldValue == null   || disabledSelectedIcon.getIconWidth$() != oldValue.getIconWidth$()  || disabledSelectedIcon.getIconHeight$() != oldValue.getIconHeight$() ) {
this.revalidate$();
}if (!this.isEnabled$() && this.isSelected$() ) {
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'getVerticalAlignment$',  function () {
return this.verticalAlignment;
});

Clazz.newMeth(C$, 'setVerticalAlignment$I',  function (alignment) {
if (alignment == this.verticalAlignment) return;
var oldValue=this.verticalAlignment;
this.verticalAlignment=this.checkVerticalKey$I$S(alignment, "verticalAlignment");
this.firePropertyChange$S$I$I("verticalAlignment", oldValue, this.verticalAlignment);
this.秘repaint$();
});

Clazz.newMeth(C$, 'getHorizontalAlignment$',  function () {
return this.horizontalAlignment;
});

Clazz.newMeth(C$, 'setHorizontalAlignment$I',  function (alignment) {
if (alignment == this.horizontalAlignment) return;
var oldValue=this.horizontalAlignment;
this.horizontalAlignment=this.checkHorizontalKey$I$S(alignment, "horizontalAlignment");
this.firePropertyChange$S$I$I("horizontalAlignment", oldValue, this.horizontalAlignment);
this.秘repaint$();
});

Clazz.newMeth(C$, 'getVerticalTextPosition$',  function () {
return this.verticalTextPosition;
});

Clazz.newMeth(C$, 'setVerticalTextPosition$I',  function (textPosition) {
if (textPosition == this.verticalTextPosition) return;
var oldValue=this.verticalTextPosition;
this.verticalTextPosition=this.checkVerticalKey$I$S(textPosition, "verticalTextPosition");
this.firePropertyChange$S$I$I("verticalTextPosition", oldValue, this.verticalTextPosition);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'getHorizontalTextPosition$',  function () {
return this.horizontalTextPosition;
});

Clazz.newMeth(C$, 'setHorizontalTextPosition$I',  function (textPosition) {
if (textPosition == this.horizontalTextPosition) return;
var oldValue=this.horizontalTextPosition;
this.horizontalTextPosition=this.checkHorizontalKey$I$S(textPosition, "horizontalTextPosition");
this.firePropertyChange$S$I$I("horizontalTextPosition", oldValue, this.horizontalTextPosition);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'getIconTextGap$',  function () {
return this.iconTextGap;
});

Clazz.newMeth(C$, 'setIconTextGap$I',  function (iconTextGap) {
var oldValue=this.iconTextGap;
this.iconTextGap=iconTextGap;
this.iconTextGapSet=true;
this.firePropertyChange$S$I$I("iconTextGap", oldValue, iconTextGap);
if (iconTextGap != oldValue) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'checkHorizontalKey$I$S',  function (key, exception) {
if ((key == 2) || (key == 0) || (key == 4) || (key == 10) || (key == 11)  ) {
return key;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[exception]);
}});

Clazz.newMeth(C$, 'checkVerticalKey$I$S',  function (key, exception) {
if ((key == 1) || (key == 0) || (key == 3)  ) {
return key;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[exception]);
}});

Clazz.newMeth(C$, 'removeNotify$',  function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
if (this.isRolloverEnabled$()) {
this.getModel$().setRollover$Z(false);
}});

Clazz.newMeth(C$, 'setActionCommand$S',  function (actionCommand) {
this.getModel$().setActionCommand$S(actionCommand);
});

Clazz.newMeth(C$, 'getActionCommand$',  function () {
var ac=this.getModel$().getActionCommand$();
if (ac == null ) {
ac=this.getText$();
}return ac;
});

Clazz.newMeth(C$, 'setAction$javax_swing_Action',  function (a) {
var oldValue=this.getAction$();
if (this.action == null  || !this.action.equals$O(a) ) {
this.action=a;
if (oldValue != null ) {
this.removeActionListener$java_awt_event_ActionListener(oldValue);
oldValue.removePropertyChangeListener$java_beans_PropertyChangeListener(this.actionPropertyChangeListener);
this.actionPropertyChangeListener=null;
}this.configurePropertiesFromAction$javax_swing_Action(this.action);
if (this.action != null ) {
if (!p$1.isListener$Class$java_awt_event_ActionListener.apply(this, [Clazz.getClass($I$(3),['actionPerformed$java_awt_event_ActionEvent']), this.action])) {
this.addActionListener$java_awt_event_ActionListener(this.action);
}this.actionPropertyChangeListener=this.createActionPropertyChangeListener$javax_swing_Action(this.action);
this.action.addPropertyChangeListener$java_beans_PropertyChangeListener(this.actionPropertyChangeListener);
}this.firePropertyChange$S$O$O("action", oldValue, this.action);
}});

Clazz.newMeth(C$, 'isListener$Class$java_awt_event_ActionListener',  function (c, a) {
var isListener=false;
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === c  && listeners[i + 1] === a  ) {
isListener=true;
}}
return isListener;
}, p$1);

Clazz.newMeth(C$, 'getAction$',  function () {
return this.action;
});

Clazz.newMeth(C$, 'configurePropertiesFromAction$javax_swing_Action',  function (a) {
p$1.setMnemonicFromAction$javax_swing_Action.apply(this, [a]);
p$1.setTextFromAction$javax_swing_Action$Z.apply(this, [a, false]);
$I$(1).setToolTipTextFromAction$javax_swing_JComponent$javax_swing_Action(this, a);
this.setIconFromAction$javax_swing_Action(a);
p$1.setActionCommandFromAction$javax_swing_Action.apply(this, [a]);
$I$(1).setEnabledFromAction$javax_swing_JComponent$javax_swing_Action(this, a);
if ($I$(1).hasSelectedKey$javax_swing_Action(a) && this.shouldUpdateSelectedStateFromAction$() ) {
p$1.setSelectedFromAction$javax_swing_Action.apply(this, [a]);
}p$1.setDisplayedMnemonicIndexFromAction$javax_swing_Action$Z.apply(this, [a, false]);
});

Clazz.newMeth(C$, 'clientPropertyChanged$O$O$O',  function (key, oldValue, newValue) {
if (key === "hideActionText" ) {
var current=(Clazz.instanceOf(newValue, "java.lang.Boolean")) ? (newValue).valueOf() : false;
if (this.getHideActionText$() != current ) {
this.setHideActionText$Z(current);
}}});

Clazz.newMeth(C$, 'shouldUpdateSelectedStateFromAction$',  function () {
return false;
});

Clazz.newMeth(C$, 'actionPropertyChanged$javax_swing_Action$S',  function (action, propertyName) {
if (propertyName == "Name") {
p$1.setTextFromAction$javax_swing_Action$Z.apply(this, [action, true]);
} else if (propertyName === "enabled" ) {
$I$(1).setEnabledFromAction$javax_swing_JComponent$javax_swing_Action(this, action);
} else if (propertyName == "ShortDescription") {
$I$(1).setToolTipTextFromAction$javax_swing_JComponent$javax_swing_Action(this, action);
} else if (propertyName == "SmallIcon") {
this.smallIconChanged$javax_swing_Action(action);
} else if (propertyName == "MnemonicKey") {
p$1.setMnemonicFromAction$javax_swing_Action.apply(this, [action]);
} else if (propertyName == "ActionCommandKey") {
p$1.setActionCommandFromAction$javax_swing_Action.apply(this, [action]);
} else if (propertyName == "SwingSelectedKey" && $I$(1).hasSelectedKey$javax_swing_Action(action)  && this.shouldUpdateSelectedStateFromAction$() ) {
p$1.setSelectedFromAction$javax_swing_Action.apply(this, [action]);
} else if (propertyName == "SwingDisplayedMnemonicIndexKey") {
p$1.setDisplayedMnemonicIndexFromAction$javax_swing_Action$Z.apply(this, [action, true]);
} else if (propertyName == "SwingLargeIconKey") {
this.largeIconChanged$javax_swing_Action(action);
}});

Clazz.newMeth(C$, 'setDisplayedMnemonicIndexFromAction$javax_swing_Action$Z',  function (a, fromPropertyChange) {
var iValue=(a == null ) ? null : a.getValue$S("SwingDisplayedMnemonicIndexKey");
if (fromPropertyChange || iValue != null  ) {
var value;
if (iValue == null ) {
value=-1;
} else {
value=(iValue).$c();
var text=this.getText$();
if (text == null  || value >= text.length$() ) {
value=-1;
}}this.setDisplayedMnemonicIndex$I(value);
}}, p$1);

Clazz.newMeth(C$, 'setMnemonicFromAction$javax_swing_Action',  function (a) {
var n=(a == null ) ? null : a.getValue$S("MnemonicKey");
this.setMnemonic$I((n == null ) ? "\u0000".$c() : (n).$c());
}, p$1);

Clazz.newMeth(C$, 'setTextFromAction$javax_swing_Action$Z',  function (a, propertyChange) {
var hideText=this.getHideActionText$();
if (!propertyChange) {
this.setText$S((a != null  && !hideText ) ? a.getValue$S("Name") : null);
} else if (!hideText) {
this.setText$S(a.getValue$S("Name"));
}}, p$1);

Clazz.newMeth(C$, 'setIconFromAction$javax_swing_Action',  function (a) {
var icon=null;
if (a != null ) {
icon=a.getValue$S("SwingLargeIconKey");
if (icon == null ) {
icon=a.getValue$S("SmallIcon");
}}this.setIcon$javax_swing_Icon(icon);
});

Clazz.newMeth(C$, 'smallIconChanged$javax_swing_Action',  function (a) {
if (a.getValue$S("SwingLargeIconKey") == null ) {
this.setIconFromAction$javax_swing_Action(a);
}});

Clazz.newMeth(C$, 'largeIconChanged$javax_swing_Action',  function (a) {
this.setIconFromAction$javax_swing_Action(a);
});

Clazz.newMeth(C$, 'setActionCommandFromAction$javax_swing_Action',  function (a) {
this.setActionCommand$S((a != null ) ? a.getValue$S("ActionCommandKey") : null);
}, p$1);

Clazz.newMeth(C$, 'setSelectedFromAction$javax_swing_Action',  function (a) {
var selected=false;
if (a != null ) {
selected=$I$(1).isSelected$javax_swing_Action(a);
}if (selected != this.isSelected$() ) {
this.setSelected$Z(selected);
if (!selected && this.isSelected$() ) {
if (Clazz.instanceOf(this.getModel$(), "javax.swing.DefaultButtonModel")) {
var group=(this.getModel$()).getGroup$();
if (group != null ) {
group.clearSelection$();
}}}}}, p$1);

Clazz.newMeth(C$, 'createActionPropertyChangeListener$javax_swing_Action',  function (a) {
return this.createActionPropertyChangeListener0$javax_swing_Action(a);
});

Clazz.newMeth(C$, 'createActionPropertyChangeListener0$javax_swing_Action',  function (a) {
return Clazz.new_($I$(4,1).c$$javax_swing_AbstractButton$javax_swing_Action,[this, a]);
});

Clazz.newMeth(C$, 'isBorderPainted$',  function () {
return this.paintBorder && this.秘paintsBorder$() ;
});

Clazz.newMeth(C$, 'setBorderPainted$Z',  function (b) {
var oldValue=this.paintBorder;
this.paintBorder=b;
this.borderPaintedSet=true;
this.firePropertyChange$S$Z$Z("borderPainted", oldValue, this.paintBorder);
if (b != oldValue ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'paintBorder$java_awt_Graphics',  function (g) {
if (this.isBorderPainted$()) {
C$.superclazz.prototype.paintBorder$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'isFocusPainted$',  function () {
return this.paintFocus;
});

Clazz.newMeth(C$, 'setFocusPainted$Z',  function (b) {
var oldValue=this.paintFocus;
this.paintFocus=b;
this.firePropertyChange$S$Z$Z("focusPainted", oldValue, this.paintFocus);
if (b != oldValue  && this.isFocusOwner$() ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'isContentAreaFilled$',  function () {
return this.contentAreaFilled;
});

Clazz.newMeth(C$, 'setContentAreaFilled$Z',  function (b) {
var oldValue=this.contentAreaFilled;
this.contentAreaFilled=b;
this.contentAreaFilledSet=true;
this.firePropertyChange$S$Z$Z("contentAreaFilled", oldValue, this.contentAreaFilled);
if (b != oldValue ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'isRolloverEnabled$',  function () {
return this.rolloverEnabled;
});

Clazz.newMeth(C$, 'setRolloverEnabled$Z',  function (b) {
var oldValue=this.rolloverEnabled;
this.rolloverEnabled=b;
this.rolloverEnabledSet=true;
this.firePropertyChange$S$Z$Z("rolloverEnabled", oldValue, this.rolloverEnabled);
if (b != oldValue ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getMnemonic$',  function () {
return this.mnemonic;
});

Clazz.newMeth(C$, 'setMnemonic$I',  function (mnemonic) {
this.model.setMnemonic$I(mnemonic);
p$1.updateMnemonicProperties.apply(this, []);
});

Clazz.newMeth(C$, 'setMnemonic$C',  function (mnemonic) {
var vk=mnemonic.$c();
if (vk >= 97  && vk <= 122  ) vk-=(32);
this.setMnemonic$I(vk);
});

Clazz.newMeth(C$, 'setDisplayedMnemonicIndex$I',  function (index) {
var oldValue=this.mnemonicIndex;
if (index == -1) {
this.mnemonicIndex=-1;
} else {
var text=this.getText$();
var textLength=(text == null ) ? 0 : text.length$();
if (index < -1 || index >= textLength ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index == " + index]);
}}this.mnemonicIndex=index;
this.firePropertyChange$S$I$I("displayedMnemonicIndex", oldValue, index);
if (index != oldValue) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getDisplayedMnemonicIndex$',  function () {
return this.mnemonicIndex;
});

Clazz.newMeth(C$, 'updateDisplayedMnemonicIndex$S$I',  function (text, mnemonic) {
this.setDisplayedMnemonicIndex$I($I$(5).findDisplayedMnemonicIndex$S$I(text, mnemonic));
}, p$1);

Clazz.newMeth(C$, 'updateMnemonicProperties',  function () {
var newMnemonic=this.model.getMnemonic$();
if (this.mnemonic != newMnemonic) {
var oldValue=this.mnemonic;
this.mnemonic=newMnemonic;
this.firePropertyChange$S$I$I("mnemonic", oldValue, this.mnemonic);
p$1.updateDisplayedMnemonicIndex$S$I.apply(this, [this.getText$(), this.mnemonic]);
this.revalidate$();
this.秘repaint$();
}}, p$1);

Clazz.newMeth(C$, 'setMultiClickThreshhold$J',  function (threshhold) {
if (Long.$lt(threshhold,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["threshhold must be >= 0"]);
}this.multiClickThreshhold=threshhold;
});

Clazz.newMeth(C$, 'getMultiClickThreshhold$',  function () {
return this.multiClickThreshhold;
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.model;
});

Clazz.newMeth(C$, 'setModel$javax_swing_ButtonModel',  function (newModel) {
var oldModel=this.getModel$();
if (oldModel != null ) {
oldModel.removeChangeListener$javax_swing_event_ChangeListener(this.changeListener);
oldModel.removeActionListener$java_awt_event_ActionListener(this.actionListener);
oldModel.removeItemListener$java_awt_event_ItemListener(this.itemListener);
this.changeListener=null;
this.actionListener=null;
this.itemListener=null;
}this.model=newModel;
if (newModel != null ) {
var isAWT=this.秘isAWT$();
this.changeListener=this.createChangeListener$();
this.actionListener=this.createActionListener$();
this.itemListener=this.createItemListener$();
newModel.addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
newModel.addActionListener$java_awt_event_ActionListener(this.actionListener);
newModel.addItemListener$java_awt_event_ItemListener(this.itemListener);
p$1.updateMnemonicProperties.apply(this, []);
C$.superclazz.prototype.setEnabled$Z.apply(this, [newModel.isEnabled$()]);
} else {
this.mnemonic="\u0000".$c();
}p$1.updateDisplayedMnemonicIndex$S$I.apply(this, [this.getText$(), this.mnemonic]);
this.firePropertyChange$S$O$O("model", oldModel, newModel);
if (newModel !== oldModel ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getUI$',  function () {
return this.ui;
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_ButtonUI',  function (ui) {
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
if (Clazz.instanceOf(this.disabledIcon, "javax.swing.plaf.UIResource")) {
this.setDisabledIcon$javax_swing_Icon(null);
}if (Clazz.instanceOf(this.disabledSelectedIcon, "javax.swing.plaf.UIResource")) {
this.setDisabledSelectedIcon$javax_swing_Icon(null);
}});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (comp, constraints, index) {
if (!this.setLayout) {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1).c$$java_awt_Container,[this]));
}this.addImplCont$java_awt_Component$O$I(comp, constraints, index);
});

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager',  function (mgr) {
this.setLayout=true;
C$.superclazz.prototype.setLayout$java_awt_LayoutManager.apply(this, [mgr]);
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return (this.listenerList.getListeners$Class(Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent'])));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) this.changeEvent=Clazz.new_($I$(8,1).c$$O,[this]);
(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(3),['actionPerformed$java_awt_event_ActionEvent']), l);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
if ((l != null ) && (this.getAction$() === l ) ) {
this.setAction$javax_swing_Action(null);
} else {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(3),['actionPerformed$java_awt_event_ActionEvent']), l);
}});

Clazz.newMeth(C$, 'getActionListeners$',  function () {
return (this.listenerList.getListeners$Class(Clazz.getClass($I$(3),['actionPerformed$java_awt_event_ActionEvent'])));
});

Clazz.newMeth(C$, 'createChangeListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(3),['actionPerformed$java_awt_event_ActionEvent']) ) {
if (e == null ) {
var actionCommand=event.getActionCommand$();
if (actionCommand == null ) {
actionCommand=this.getActionCommand$();
}e=Clazz.new_([this, 1001, actionCommand, event.getWhen$(), event.getModifiers$()],$I$(9,1).c$$O$I$S$J$I);
}(listeners[i + 1]).actionPerformed$java_awt_event_ActionEvent(e);
}}
});

Clazz.newMeth(C$, 'fireItemStateChanged$java_awt_event_ItemEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(10),['itemStateChanged$java_awt_event_ItemEvent']) ) {
if (e == null ) {
e=Clazz.new_([this, 701, this, event.getStateChange$()],$I$(11,1).c$$java_awt_ItemSelectable$I$O$I);
}(listeners[i + 1]).itemStateChanged$java_awt_event_ItemEvent(e);
}}
});

Clazz.newMeth(C$, 'createActionListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createItemListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
if (!b && this.model.isRollover$() ) {
this.model.setRollover$Z(false);
}C$.superclazz.prototype.setEnabled$Z.apply(this, [b]);
this.model.setEnabled$Z(b);
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return this.getText$();
});

Clazz.newMeth(C$, 'setLabel$S',  function (label) {
this.setText$S(label);
});

Clazz.newMeth(C$, 'addItemListener$java_awt_event_ItemListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(10),['itemStateChanged$java_awt_event_ItemEvent']), l);
});

Clazz.newMeth(C$, 'removeItemListener$java_awt_event_ItemListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(10),['itemStateChanged$java_awt_event_ItemEvent']), l);
});

Clazz.newMeth(C$, 'getItemListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(10),['itemStateChanged$java_awt_event_ItemEvent']));
});

Clazz.newMeth(C$, 'getSelectedObjects$',  function () {
if (this.isSelected$() == false ) {
return null;
}var selectedObjects=Clazz.array(java.lang.Object, [1]);
selectedObjects[0]=this.getText$();
return selectedObjects;
});

Clazz.newMeth(C$, 'init$S$javax_swing_Icon',  function (text, icon) {
if (text != null ) {
this.setText$S(text);
}if (icon != null ) {
this.setIcon$javax_swing_Icon(icon);
}this.updateUI$();
this.setAlignmentX$F(0.0);
this.setAlignmentY$F(0.5);
});

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, infoflags, x, y, w, h) {
var iconDisplayed=this.getIcon$();
if (iconDisplayed == null ) {
return false;
}if (!this.model.isEnabled$()) {
if (this.model.isSelected$()) {
iconDisplayed=this.getDisabledSelectedIcon$();
} else {
iconDisplayed=this.getDisabledIcon$();
}} else if (this.model.isPressed$() && this.model.isArmed$() ) {
iconDisplayed=this.getPressedIcon$();
} else if (this.isRolloverEnabled$() && this.model.isRollover$() ) {
if (this.model.isSelected$()) {
iconDisplayed=this.getRolloverSelectedIcon$();
} else {
iconDisplayed=this.getRolloverIcon$();
}} else if (this.model.isSelected$()) {
iconDisplayed=this.getSelectedIcon$();
}if (!$I$(5).doesIconReferenceImage$javax_swing_Icon$java_awt_Image(iconDisplayed, img)) {
return false;
}return C$.superclazz.prototype.imageUpdate$java_awt_Image$I$I$I$I$I.apply(this, [img, infoflags, x, y, w, h]);
});

Clazz.newMeth(C$, 'setUIProperty$S$O',  function (propertyName, value) {
if (propertyName === "borderPainted" ) {
if (!this.borderPaintedSet) {
this.setBorderPainted$Z((value).booleanValue$());
this.borderPaintedSet=false;
}} else if (propertyName === "rolloverEnabled" ) {
if (!this.rolloverEnabledSet) {
this.setRolloverEnabled$Z((value).booleanValue$());
this.rolloverEnabledSet=false;
}} else if (propertyName === "iconTextGap" ) {
if (!this.iconTextGapSet) {
this.setIconTextGap$I((value).intValue$());
this.iconTextGapSet=false;
}} else if (propertyName === "contentAreaFilled" ) {
if (!this.contentAreaFilledSet) {
this.setContentAreaFilled$Z((value).booleanValue$());
this.contentAreaFilledSet=false;
}} else {
C$.superclazz.prototype.setUIProperty$S$O.apply(this, [propertyName, value]);
}});

Clazz.newMeth(C$, 'paramString$',  function () {
var defaultIconString=((this.defaultIcon != null ) && (this.defaultIcon !== this )  ? this.defaultIcon.toString() : "");
var pressedIconString=((this.pressedIcon != null ) && (this.pressedIcon !== this )  ? this.pressedIcon.toString() : "");
var disabledIconString=((this.disabledIcon != null ) && (this.disabledIcon !== this )  ? this.disabledIcon.toString() : "");
var selectedIconString=((this.selectedIcon != null ) && (this.selectedIcon !== this )  ? this.selectedIcon.toString() : "");
var disabledSelectedIconString=((this.disabledSelectedIcon != null ) && (this.disabledSelectedIcon !== this )  ? this.disabledSelectedIcon.toString() : "");
var rolloverIconString=((this.rolloverIcon != null ) && (this.rolloverIcon !== this )  ? this.rolloverIcon.toString() : "");
var rolloverSelectedIconString=((this.rolloverSelectedIcon != null ) && (this.rolloverSelectedIcon !== this )  ? this.rolloverSelectedIcon.toString() : "");
var paintBorderString=(this.paintBorder ? "true" : "false");
var paintFocusString=(this.paintFocus ? "true" : "false");
var rolloverEnabledString=(this.rolloverEnabled ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",defaultIcon=" + defaultIconString + ",disabledIcon=" + disabledIconString + ",disabledSelectedIcon=" + disabledSelectedIconString + ",margin=" + this.margin + ",paintBorder=" + paintBorderString + ",paintFocus=" + paintFocusString + ",pressedIcon=" + pressedIconString + ",rolloverEnabled=" + rolloverEnabledString + ",rolloverIcon=" + rolloverIconString + ",rolloverSelectedIcon=" + rolloverSelectedIconString + ",selectedIcon=" + selectedIconString + ",text=" + this.text ;
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(12,1),[this, null]);
}return this.handler;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractButton, "ButtonActionPropertyChangeListener", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.ActionPropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_AbstractButton$javax_swing_Action',  function (b, a) {
;C$.superclazz.c$$javax_swing_JComponent$javax_swing_Action.apply(this,[b, a]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['actionPropertyChanged$javax_swing_AbstractButton$javax_swing_Action$java_beans_PropertyChangeEvent','actionPropertyChanged$javax_swing_JComponent$javax_swing_Action$java_beans_PropertyChangeEvent'],  function (button, action, e) {
if ($I$(1).shouldReconfigure$java_beans_PropertyChangeEvent(e)) {
button.configurePropertiesFromAction$javax_swing_Action(action);
} else {
button.actionPropertyChanged$javax_swing_Action$S(action, e.getPropertyName$());
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractButton, "ButtonChangeListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.getHandler.apply(this.b$['javax.swing.AbstractButton'], []).stateChanged$javax_swing_event_ChangeEvent(e);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractButton, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.ActionListener', 'javax.swing.event.ChangeListener', 'java.awt.event.ItemListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.updateMnemonicProperties.apply(this.b$['javax.swing.AbstractButton'], []);
if (this.b$['java.awt.Component'].isEnabled$.apply(this.b$['java.awt.Component'], []) != this.b$['javax.swing.AbstractButton'].model.isEnabled$() ) {
this.b$['javax.swing.AbstractButton'].setEnabled$Z.apply(this.b$['javax.swing.AbstractButton'], [this.b$['javax.swing.AbstractButton'].model.isEnabled$()]);
}this.b$['javax.swing.AbstractButton'].fireStateChanged$.apply(this.b$['javax.swing.AbstractButton'], []);
this.b$['java.awt.JSComponent'].秘repaint$.apply(this.b$['java.awt.JSComponent'], []);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (event) {
this.b$['javax.swing.AbstractButton'].fireActionPerformed$java_awt_event_ActionEvent.apply(this.b$['javax.swing.AbstractButton'], [event]);
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (event) {
this.b$['javax.swing.AbstractButton'].fireItemStateChanged$java_awt_event_ItemEvent.apply(this.b$['javax.swing.AbstractButton'], [event]);
if (this.b$['javax.swing.AbstractButton'].shouldUpdateSelectedStateFromAction$.apply(this.b$['javax.swing.AbstractButton'], [])) {
var action=this.b$['javax.swing.AbstractButton'].getAction$.apply(this.b$['javax.swing.AbstractButton'], []);
if (action != null  && $I$(1).hasSelectedKey$javax_swing_Action(action) ) {
var selected=this.b$['javax.swing.AbstractButton'].isSelected$.apply(this.b$['javax.swing.AbstractButton'], []);
var isActionSelected=$I$(1).isSelected$javax_swing_Action(action);
if (isActionSelected != selected ) {
action.putValue$S$O("SwingSelectedKey", Boolean.valueOf$Z(selected));
}}}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},I$=[[0,'java.awt.JSComponent','java.awt.Dimension',['swingjs.plaf.JSOptionPaneUI','.ButtonFactory','.ConstrainedButton'],'javax.swing.JButton',['swingjs.plaf.JSOptionPaneUI','.Actions'],'javax.swing.LookAndFeel','javax.swing.UIManager','javax.swing.BoxLayout',['swingjs.plaf.JSOptionPaneUI','.Handler'],'javax.swing.SwingUtilities','swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup','javax.swing.JPanel','java.awt.BorderLayout','java.awt.GridBagLayout','java.awt.GridBagConstraints','java.awt.Insets','javax.swing.JLabel','javax.swing.Box','javax.swing.JComboBox','javax.swing.JList','javax.swing.JScrollPane',['swingjs.plaf.JSOptionPaneUI','.MultiplexingTextField'],'javax.swing.KeyStroke',['swingjs.plaf.JSOptionPaneUI','.ButtonAreaLayout'],['swingjs.plaf.JSOptionPaneUI','.ButtonActionListener'],['swingjs.plaf.JSOptionPaneUI','.ButtonFactory']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSOptionPaneUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.$classes$=[['ButtonAreaLayout',9],['PropertyChangeHandler',1],['ButtonActionListener',1],['Handler',2],['MultiplexingTextField',10],['Actions',10],['ButtonFactory',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasCustomComponents'],'O',['optionPane','javax.swing.JOptionPane','minimumSize','java.awt.Dimension','inputComponent','javax.swing.JComponent','initialFocusComponent','java.awt.Component','propertyChangeListener','java.beans.PropertyChangeListener','handler','swingjs.plaf.JSOptionPaneUI.Handler']]
,['S',['newline']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
this.optionPane=this.c;
if (this.domNode == null ) {
this.domNode=C$.superclazz.prototype.updateDOMNode$.apply(this, []);
}return this.domNode;
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(5,1).c$$S,["close"]));
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.optionPane=c;
this.installDefaults$();
this.optionPane.setLayout$java_awt_LayoutManager(this.createLayoutManager$());
this.installComponents$();
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallComponents$();
this.optionPane.setLayout$java_awt_LayoutManager(null);
this.uninstallKeyboardActions$();
this.uninstallListeners$();
this.uninstallDefaults$();
this.optionPane=null;
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
$I$(6).installColorsAndFont$javax_swing_JComponent$S$S$S(this.optionPane, "OptionPane.background", "OptionPane.foreground", "OptionPane.font");
$I$(6).installBorder$javax_swing_JComponent$S(this.optionPane, "OptionPane.border");
this.minimumSize=$I$(7).getDimension$O("OptionPane.minimumSize");
$I$(6).installProperty$javax_swing_JComponent$S$O(this.optionPane, "opaque", Boolean.TRUE);
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
$I$(6).uninstallBorder$javax_swing_JComponent(this.optionPane);
});

Clazz.newMeth(C$, 'installComponents$',  function () {
this.optionPane.add$java_awt_Component(this.createMessageArea$());
var separator=this.createSeparator$();
if (separator != null ) {
this.optionPane.add$java_awt_Component(separator);
}this.optionPane.add$java_awt_Component(this.createButtonArea$());
this.optionPane.applyComponentOrientation$java_awt_ComponentOrientation(this.optionPane.getComponentOrientation$());
});

Clazz.newMeth(C$, 'uninstallComponents$',  function () {
this.hasCustomComponents=false;
this.inputComponent=null;
this.initialFocusComponent=null;
this.optionPane.removeAll$();
});

Clazz.newMeth(C$, 'createLayoutManager$',  function () {
return Clazz.new_($I$(8,1).c$$java_awt_Container$I,[this.optionPane, 1]);
});

Clazz.newMeth(C$, 'installListeners$',  function () {
if ((this.propertyChangeListener=this.createPropertyChangeListener$()) != null ) {
this.optionPane.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
if (this.propertyChangeListener != null ) {
this.optionPane.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.propertyChangeListener=null;
}this.handler=null;
});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return p$2.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(9,1),[this, null]);
}return this.handler;
}, p$2);

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var map=this.getInputMap$I(2);
$I$(10).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.optionPane, 2, map);
$I$(11,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.optionPane, Clazz.getClass(C$), "OptionPane.actionMap"]);
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(10).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.optionPane, 2, null);
$I$(10).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.optionPane, null);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 2) {
var bindings=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.windowBindings");
if (bindings != null ) {
return $I$(6).makeComponentInputMap$javax_swing_JComponent$OA(this.optionPane, bindings);
}}return null;
});

Clazz.newMeth(C$, 'getMinimumOptionPaneSize$',  function () {
if (this.minimumSize == null ) {
return Clazz.new_($I$(2,1).c$$I$I,[262, 90]);
}return Clazz.new_($I$(2,1).c$$I$I,[this.minimumSize.width, this.minimumSize.height]);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
if (jc === this.optionPane ) {
var ourMin=this.getMinimumOptionPaneSize$();
var lm=jc.getLayout$();
if (lm != null ) {
var lmSize=lm.preferredLayoutSize$java_awt_Container(jc);
if (ourMin != null ) return Clazz.new_([Math.max(lmSize.width, ourMin.width), Math.max(lmSize.height, ourMin.height)],$I$(2,1).c$$I$I);
return lmSize;
}return ourMin;
}return null;
});

Clazz.newMeth(C$, 'createMessageArea$',  function () {
var top=Clazz.new_($I$(13,1));
var topBorder=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.messageAreaBorder");
if (topBorder != null ) {
top.setBorder$javax_swing_border_Border(topBorder);
}top.setLayout$java_awt_LayoutManager(Clazz.new_($I$(14,1)));
var body=Clazz.new_([Clazz.new_($I$(15,1))],$I$(13,1).c$$java_awt_LayoutManager);
var realBody=Clazz.new_([Clazz.new_($I$(14,1))],$I$(13,1).c$$java_awt_LayoutManager);
body.setName$S("OptionPane.body");
realBody.setName$S("OptionPane.realBody");
if (this.getIcon$() != null ) {
var sep=Clazz.new_($I$(13,1));
sep.setName$S("OptionPane.separator");
sep.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[15, 1]));
realBody.add$java_awt_Component$O(sep, "Before");
}realBody.add$java_awt_Component$O(body, "Center");
var cons=Clazz.new_($I$(16,1));
cons.gridx=cons.gridy=0;
cons.gridwidth=0;
cons.gridheight=1;
cons.anchor=$I$(12).getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(this.optionPane, this, "OptionPane.messageAnchor", 10);
cons.insets=Clazz.new_($I$(17,1).c$$I$I$I$I,[0, 0, 3, 0]);
this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(body, cons, this.getMessage$(), this.getMaxCharactersPerLineCount$(), false);
top.add$java_awt_Component$O(realBody, "Center");
this.addIcon$java_awt_Container(top);
return top;
});

Clazz.newMeth(C$, 'addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z',  function (container, cons, msg, maxll, internallyCreated) {
if (msg == null ) {
return;
}if (Clazz.instanceOf(msg, "java.awt.Component")) {
if (Clazz.instanceOf(msg, "javax.swing.JScrollPane") || Clazz.instanceOf(msg, "javax.swing.JPanel") ) {
cons.fill=1;
cons.weighty=1;
} else {
cons.fill=2;
}cons.weightx=1;
container.add$java_awt_Component$O(msg, cons);
cons.weightx=0;
cons.weighty=0;
cons.fill=0;
++cons.gridy;
if (!internallyCreated) {
this.hasCustomComponents=true;
}} else if (Clazz.instanceOf(msg, Clazz.array(java.lang.Object, -1))) {
var msgs=msg;
for (var o, $o = 0, $$o = msgs; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(container, cons, o, maxll, false);
}
} else if (Clazz.instanceOf(msg, "javax.swing.Icon")) {
var label=Clazz.new_($I$(18,1).c$$javax_swing_Icon$I,[msg, 0]);
p$2.configureMessageLabel$javax_swing_JLabel.apply(this, [label]);
this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(container, cons, label, maxll, true);
} else {
var s=msg.toString();
var len=s.length$();
if (len <= 0) {
return;
}var nl;
var nll=0;
if ((nl=s.indexOf$S(C$.newline)) >= 0) {
nll=C$.newline.length$();
} else if ((nl=s.indexOf$S("\r\n")) >= 0) {
nll=2;
} else if ((nl=s.indexOf$I("\n")) >= 0) {
nll=1;
}if (nl >= 0) {
if (nl == 0) {
var breakPanel=((P$.JSOptionPaneUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSOptionPaneUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var f=this.getFont$();
if (f != null ) {
return Clazz.new_([1, f.getSize$() + 2],$I$(2,1).c$$I$I);
}return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
});
})()
), Clazz.new_($I$(13,1),[this, null],P$.JSOptionPaneUI$1));
breakPanel.setName$S("OptionPane.break");
this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(container, cons, breakPanel, maxll, true);
} else {
this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(container, cons, s.substring$I$I(0, nl), maxll, false);
}this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(container, cons, s.substring$I(nl + nll), maxll, false);
} else if (len > maxll) {
var c=$I$(19).createVerticalBox$();
c.setName$S("OptionPane.verticalBox");
this.burstStringInto$java_awt_Container$S$I(c, s, maxll);
this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(container, cons, c, maxll, true);
} else {
var label;
label=Clazz.new_($I$(18,1).c$$S$I,[s, 10]);
label.setName$S("OptionPane.label");
p$2.configureMessageLabel$javax_swing_JLabel.apply(this, [label]);
this.addMessageComponents$java_awt_Container$java_awt_GridBagConstraints$O$I$Z(container, cons, label, maxll, true);
}}});

Clazz.newMeth(C$, 'getMessage$',  function () {
this.inputComponent=null;
if (this.optionPane != null ) {
if (this.optionPane.getWantsInput$()) {
var message=this.optionPane.getMessage$();
var sValues=this.optionPane.getSelectionValues$();
var inputValue=this.optionPane.getInitialSelectionValue$();
var toAdd;
if (sValues != null ) {
if (sValues.length < 20) {
var cBox=Clazz.new_($I$(20,1));
cBox.setName$S("OptionPane.comboBox");
for (var counter=0, maxCounter=sValues.length; counter < maxCounter; counter++) {
cBox.addItem$O(sValues[counter]);
}
if (inputValue != null ) {
cBox.setSelectedItem$O(inputValue);
}this.inputComponent=cBox;
toAdd=cBox;
} else {
var list=Clazz.new_($I$(21,1).c$$OA,[sValues]);
var sp=Clazz.new_($I$(22,1).c$$java_awt_Component,[list]);
sp.setName$S("OptionPane.scrollPane");
list.setName$S("OptionPane.list");
list.setVisibleRowCount$I(10);
list.setSelectionMode$I(0);
if (inputValue != null ) list.setSelectedValue$O$Z(inputValue, true);
list.addMouseListener$java_awt_event_MouseListener(p$2.getHandler.apply(this, []));
toAdd=sp;
this.inputComponent=list;
}} else {
var tf=Clazz.new_($I$(23,1).c$$I,[20]);
tf.setName$S("OptionPane.textField");
tf.setKeyStrokes$javax_swing_KeyStrokeA(Clazz.array($I$(24), -1, [$I$(24).getKeyStroke$S("ENTER")]));
if (inputValue != null ) {
var inputString=inputValue.toString();
tf.setText$S(inputString);
tf.setSelectionStart$I(0);
tf.setSelectionEnd$I(inputString.length$());
}tf.addActionListener$java_awt_event_ActionListener(p$2.getHandler.apply(this, []));
toAdd=this.inputComponent=tf;
}var newMessage;
if (message == null ) {
newMessage=Clazz.array(java.lang.Object, [1]);
newMessage[0]=toAdd;
} else {
newMessage=Clazz.array(java.lang.Object, [2]);
newMessage[0]=message;
newMessage[1]=toAdd;
}return newMessage;
}return this.optionPane.getMessage$();
}return null;
});

Clazz.newMeth(C$, 'addIcon$java_awt_Container',  function (top) {
var sideIcon=this.getIcon$();
if (sideIcon != null ) {
var iconLabel=Clazz.new_($I$(18,1).c$$javax_swing_Icon,[sideIcon]);
iconLabel.setName$S("OptionPane.iconLabel");
iconLabel.setVerticalAlignment$I(1);
top.add$java_awt_Component$O(iconLabel, "Before");
}});

Clazz.newMeth(C$, 'getIcon$',  function () {
var mIcon=(this.optionPane == null  ? null : this.optionPane.getIcon$());
if (mIcon == null  && this.optionPane != null  ) mIcon=this.getIconForType$I(this.optionPane.getMessageType$());
return mIcon;
});

Clazz.newMeth(C$, 'getIconForType$I',  function (messageType) {
if (messageType < 0 || messageType > 3 ) return null;
var propertyName=null;
switch (messageType) {
case 0:
propertyName="OptionPane.errorIcon";
break;
case 1:
propertyName="OptionPane.informationIcon";
break;
case 2:
propertyName="OptionPane.warningIcon";
break;
case 3:
propertyName="OptionPane.questionIcon";
break;
}
if (propertyName != null ) {
return $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, propertyName);
}return null;
});

Clazz.newMeth(C$, 'getMaxCharactersPerLineCount$',  function () {
return this.optionPane.getMaxCharactersPerLineCount$();
});

Clazz.newMeth(C$, 'burstStringInto$java_awt_Container$S$I',  function (c, d, maxll) {
var len=d.length$();
if (len <= 0) return;
if (len > maxll) {
var p=d.lastIndexOf$I$I(" ", maxll);
if (p <= 0) p=d.indexOf$I$I(" ", maxll);
if (p > 0 && p < len ) {
this.burstStringInto$java_awt_Container$S$I(c, d.substring$I$I(0, p), maxll);
this.burstStringInto$java_awt_Container$S$I(c, d.substring$I(p + 1), maxll);
return;
}}var label=Clazz.new_($I$(18,1).c$$S$I,[d, 2]);
label.setName$S("OptionPane.label");
p$2.configureMessageLabel$javax_swing_JLabel.apply(this, [label]);
c.add$java_awt_Component(label);
});

Clazz.newMeth(C$, 'createSeparator$',  function () {
return null;
});

Clazz.newMeth(C$, 'createButtonArea$',  function () {
var bottom=Clazz.new_($I$(13,1));
var border=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.buttonAreaBorder");
bottom.setName$S("OptionPane.buttonArea");
if (border != null ) {
bottom.setBorder$javax_swing_border_Border(border);
}bottom.setLayout$java_awt_LayoutManager(Clazz.new_([$I$(12).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.optionPane, this, "OptionPane.sameSizeButtons", true), $I$(12).getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(this.optionPane, this, "OptionPane.buttonPadding", 6), $I$(12).getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(this.optionPane, this, "OptionPane.buttonOrientation", 0), $I$(12).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.optionPane, this, "OptionPane.isYesLast", false)],$I$(25,1).c$$Z$I$I$Z));
this.addButtonComponents$java_awt_Container$OA$I(bottom, this.getButtons$(), this.getInitialValueIndex$());
return bottom;
});

Clazz.newMeth(C$, 'addButtonComponents$java_awt_Container$OA$I',  function (container, buttons, initialIndex) {
if (buttons != null  && buttons.length > 0 ) {
var sizeButtonsToSame=this.getSizeButtonsToSameWidth$();
var createdAll=true;
var numButtons=buttons.length;
var createdButtons=null;
var maxWidth=0;
if (sizeButtonsToSame) {
createdButtons=Clazz.array($I$(4), [numButtons]);
}for (var counter=0; counter < numButtons; counter++) {
var button=buttons[counter];
var newComponent;
if (Clazz.instanceOf(button, "java.awt.Component")) {
createdAll=false;
newComponent=button;
container.add$java_awt_Component(newComponent);
this.hasCustomComponents=true;
} else {
var aButton;
if (Clazz.instanceOf(button, "swingjs.plaf.JSOptionPaneUI.ButtonFactory")) {
aButton=(button).createButton$();
} else if (Clazz.instanceOf(button, "javax.swing.Icon")) aButton=Clazz.new_($I$(4,1).c$$javax_swing_Icon,[button]);
 else aButton=Clazz.new_([button.toString()],$I$(4,1).c$$S);
aButton.setName$S("OptionPane.button");
aButton.setMultiClickThreshhold$J($I$(12).getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(this.optionPane, this, "OptionPane.buttonClickThreshhold", 0));
p$2.configureButton$javax_swing_JButton.apply(this, [aButton]);
container.add$java_awt_Component(aButton);
var buttonListener=this.createButtonActionListener$I(counter);
if (buttonListener != null ) {
aButton.addActionListener$java_awt_event_ActionListener(buttonListener);
}newComponent=aButton;
}if (sizeButtonsToSame && createdAll && (Clazz.instanceOf(newComponent, "javax.swing.JButton"))  ) {
createdButtons[counter]=newComponent;
maxWidth=Math.max(maxWidth, newComponent.getMinimumSize$().width);
}if (counter == initialIndex) {
this.initialFocusComponent=newComponent;
if (Clazz.instanceOf(this.initialFocusComponent, "javax.swing.JButton")) {
var defaultB=this.initialFocusComponent;
defaultB.addHierarchyListener$java_awt_event_HierarchyListener(((P$.JSOptionPaneUI$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSOptionPaneUI$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'hierarchyChanged$java_awt_event_HierarchyEvent',  function (e) {
if (Long.$ne((Long.$and(e.getChangeFlags$(),1)),0 )) {
var defaultButton=e.getComponent$();
var root=$I$(10).getRootPane$java_awt_Component(defaultButton);
if (root != null ) {
root.setDefaultButton$javax_swing_JButton(defaultButton);
}}});
})()
), Clazz.new_(P$.JSOptionPaneUI$2.$init$,[this, null])));
}}}
(container.getLayout$()).setSyncAllWidths$Z((sizeButtonsToSame && createdAll ));
if ($I$(12).getBoolean$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$Z(this.optionPane, this, "OptionPane.setButtonMargin", true) && sizeButtonsToSame && createdAll  ) {
var aButton;
var padSize;
padSize=(numButtons <= 2 ? 8 : 4);
for (var counter=0; counter < numButtons; counter++) {
aButton=createdButtons[counter];
aButton.setMargin$java_awt_Insets(Clazz.new_($I$(17,1).c$$I$I$I$I,[2, padSize, 2, padSize]));
}
}}});

Clazz.newMeth(C$, 'createButtonActionListener$I',  function (buttonIndex) {
return Clazz.new_($I$(26,1).c$$I,[this, null, buttonIndex]);
});

Clazz.newMeth(C$, 'getButtons$',  function () {
if (this.optionPane != null ) {
var suppliedOptions=this.optionPane.getOptions$();
if (suppliedOptions == null ) {
var defaultOptions;
var type=this.optionPane.getOptionType$();
var l=this.optionPane.getLocale$();
var minimumWidth=$I$(12).getInt$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S$I(this.optionPane, this, "OptionPane.buttonMinimumWidth", -1);
if (type == 0) {
defaultOptions=Clazz.array($I$(27), [2]);
defaultOptions[0]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.yesButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.yesButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.yesIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
defaultOptions[1]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.noButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.noButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.noIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
} else if (type == 1) {
defaultOptions=Clazz.array($I$(27), [3]);
defaultOptions[0]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.yesButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.yesButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.yesIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
defaultOptions[1]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.noButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.noButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.noIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
defaultOptions[2]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.cancelButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.cancelButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.cancelIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
} else if (type == 2) {
defaultOptions=Clazz.array($I$(27), [2]);
defaultOptions[0]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.okButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.okButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.okIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
defaultOptions[1]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.cancelButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.cancelButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.cancelIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
} else {
defaultOptions=Clazz.array($I$(27), [1]);
defaultOptions[0]=Clazz.new_([$I$(7).getString$O$java_util_Locale("OptionPane.okButtonText", l), p$2.getMnemonic$S$java_util_Locale.apply(this, ["OptionPane.okButtonMnemonic", l]), $I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.okIcon"), minimumWidth],$I$(27,1).c$$S$I$javax_swing_Icon$I);
}return defaultOptions;
}return suppliedOptions;
}return null;
});

Clazz.newMeth(C$, 'getMnemonic$S$java_util_Locale',  function (key, l) {
var value=$I$(7).get$O$java_util_Locale(key, l);
return (+value ||0);
}, p$2);

Clazz.newMeth(C$, 'getSizeButtonsToSameWidth$',  function () {
return true;
});

Clazz.newMeth(C$, 'getInitialValueIndex$',  function () {
if (this.optionPane != null ) {
var iv=this.optionPane.getInitialValue$();
var options=this.optionPane.getOptions$();
if (options == null ) {
return 0;
} else if (iv != null ) {
for (var counter=options.length - 1; counter >= 0; counter--) {
if (options[counter].equals$O(iv)) return counter;
}
}}return -1;
});

Clazz.newMeth(C$, 'resetInputValue$',  function () {
if (this.inputComponent != null  && (Clazz.instanceOf(this.inputComponent, "javax.swing.JTextField")) ) {
this.optionPane.setInputValue$O((this.inputComponent).getText$());
} else if (this.inputComponent != null  && (Clazz.instanceOf(this.inputComponent, "javax.swing.JComboBox")) ) {
this.optionPane.setInputValue$O((this.inputComponent).getSelectedItem$());
} else if (this.inputComponent != null ) {
this.optionPane.setInputValue$O((this.inputComponent).getSelectedValue$());
}});

Clazz.newMeth(C$, 'selectInitialValue$javax_swing_JOptionPane',  function (op) {
if (this.inputComponent != null ) this.inputComponent.requestFocus$();
 else {
if (this.initialFocusComponent != null ) this.initialFocusComponent.requestFocus$();
if (Clazz.instanceOf(this.initialFocusComponent, "javax.swing.JButton")) {
var root=$I$(10).getRootPane$java_awt_Component(this.initialFocusComponent);
if (root != null ) {
root.setDefaultButton$javax_swing_JButton(this.initialFocusComponent);
}}}});

Clazz.newMeth(C$, 'containsCustomComponents$javax_swing_JOptionPane',  function (op) {
return this.hasCustomComponents;
});

Clazz.newMeth(C$, 'configureMessageLabel$javax_swing_JLabel',  function (label) {
var color=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.messageForeground");
if (color != null ) {
label.setForeground$java_awt_Color(color);
}var messageFont=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.messageFont");
if (messageFont != null ) {
label.setFont$java_awt_Font(messageFont);
}}, p$2);

Clazz.newMeth(C$, 'configureButton$javax_swing_JButton',  function (button) {
var buttonFont=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.optionPane, this, "OptionPane.buttonFont");
if (buttonFont != null ) {
button.setFont$java_awt_Font(buttonFont);
}}, p$2);

C$.$static$=function(){C$.$static$=0;
{
C$.newline=(System.getProperty$S("line.separator"));
if (C$.newline == null ) {
C$.newline="\n";
}};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI, "ButtonAreaLayout", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.LayoutManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['syncAllWidths','centersChildren','reverseButtons','useOrientation'],'I',['padding','orientation']]]

Clazz.newMeth(C$, 'c$$Z$I',  function (syncAllWidths, padding) {
;C$.$init$.apply(this);
this.syncAllWidths=syncAllWidths;
this.padding=padding;
this.centersChildren=true;
this.useOrientation=false;
}, 1);

Clazz.newMeth(C$, 'c$$Z$I$I$Z',  function (syncAllSizes, padding, orientation, reverseButtons) {
C$.c$$Z$I.apply(this, [syncAllSizes, padding]);
this.useOrientation=true;
this.orientation=orientation;
this.reverseButtons=reverseButtons;
}, 1);

Clazz.newMeth(C$, 'setSyncAllWidths$Z',  function (newValue) {
this.syncAllWidths=newValue;
});

Clazz.newMeth(C$, 'getSyncAllWidths$',  function () {
return this.syncAllWidths;
});

Clazz.newMeth(C$, 'setPadding$I',  function (newPadding) {
this.padding=newPadding;
});

Clazz.newMeth(C$, 'getPadding$',  function () {
return this.padding;
});

Clazz.newMeth(C$, 'setCentersChildren$Z',  function (newValue) {
this.centersChildren=newValue;
this.useOrientation=false;
});

Clazz.newMeth(C$, 'getCentersChildren$',  function () {
return this.centersChildren;
});

Clazz.newMeth(C$, 'getOrientation$java_awt_Container',  function (container) {
if (!this.useOrientation) {
return 0;
}if (container.getComponentOrientation$().isLeftToRight$()) {
return this.orientation;
}switch (this.orientation) {
case 2:
return 4;
case 4:
return 2;
case 0:
return 0;
}
return 2;
}, p$1);

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (string, comp) {
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (container) {
var numChildren=container.getComponentCount$();
var children=$I$(1).秘getChildArray$java_awt_Container(container);
if (numChildren > 0) {
var insets=container.getInsets$();
var maxWidth=0;
var maxHeight=0;
var totalButtonWidth=0;
var x=0;
var xOffset=0;
var ltr=container.getComponentOrientation$().isLeftToRight$();
var reverse=(ltr) ? this.reverseButtons : !this.reverseButtons;
for (var counter=0; counter < numChildren; counter++) {
var pref=children[counter].getPreferredSize$();
maxWidth=Math.max(maxWidth, pref.width);
maxHeight=Math.max(maxHeight, pref.height);
totalButtonWidth+=pref.width;
}
if (this.getSyncAllWidths$()) {
totalButtonWidth=maxWidth * numChildren;
}totalButtonWidth+=(numChildren - 1) * this.padding;
switch (p$1.getOrientation$java_awt_Container.apply(this, [container])) {
case 2:
x=insets.left;
break;
case 4:
x=container.getWidth$() - insets.right - totalButtonWidth ;
break;
case 0:
if (this.getCentersChildren$() || numChildren < 2 ) {
x=((container.getWidth$() - totalButtonWidth)/2|0);
} else {
x=insets.left;
if (this.getSyncAllWidths$()) {
xOffset=((container.getWidth$() - insets.left - insets.right - totalButtonWidth )/(numChildren - 1)|0) + maxWidth;
} else {
xOffset=((container.getWidth$() - insets.left - insets.right - totalButtonWidth )/(numChildren - 1)|0);
}}break;
}
for (var counter=0; counter < numChildren; counter++) {
var index=(reverse) ? numChildren - counter - 1  : counter;
var pref=children[index].getPreferredSize$();
if (this.getSyncAllWidths$()) {
children[index].setBounds$I$I$I$I(x, insets.top, maxWidth, maxHeight);
} else {
children[index].setBounds$I$I$I$I(x, insets.top, pref.width, pref.height);
}if (xOffset != 0) {
x+=xOffset;
} else {
x+=children[index].getWidth$() + this.padding;
}}
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (c) {
if (c != null ) {
var children=$I$(1).秘getChildArray$java_awt_Container(c);
var numChildren=c.getComponentCount$();
if (numChildren > 0) {
var aSize;
var height=0;
var cInsets=c.getInsets$();
var extraHeight=cInsets.top + cInsets.bottom;
var extraWidth=cInsets.left + cInsets.right;
if (this.syncAllWidths) {
var maxWidth=0;
for (var counter=0; counter < numChildren; counter++) {
aSize=children[counter].getPreferredSize$();
height=Math.max(height, aSize.height);
maxWidth=Math.max(maxWidth, aSize.width);
}
return Clazz.new_([extraWidth + (maxWidth * numChildren) + (numChildren - 1) * this.padding , extraHeight + height],$I$(2,1).c$$I$I);
} else {
var totalWidth=0;
for (var counter=0; counter < numChildren; counter++) {
aSize=children[counter].getPreferredSize$();
height=Math.max(height, aSize.height);
totalWidth+=aSize.width;
}
totalWidth+=((numChildren - 1) * this.padding);
return Clazz.new_($I$(2,1).c$$I$I,[extraWidth + totalWidth, extraHeight + height]);
}}}return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (c) {
return this.minimumLayoutSize$java_awt_Container(c);
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (c) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI, "PropertyChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
p$2.getHandler.apply(this.b$['swingjs.plaf.JSOptionPaneUI'], []).propertyChange$java_beans_PropertyChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI, "ButtonActionListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['buttonIndex']]]

Clazz.newMeth(C$, 'c$$I',  function (buttonIndex) {
;C$.$init$.apply(this);
this.buttonIndex=buttonIndex;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane != null ) {
var optionType=this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.getOptionType$();
var options=this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.getOptions$();
if (this.b$['swingjs.plaf.JSOptionPaneUI'].inputComponent != null ) {
if (options != null  || optionType == -1  || ((optionType == 0 || optionType == 1  || optionType == 2 ) && this.buttonIndex == 0 ) ) {
this.b$['swingjs.plaf.JSOptionPaneUI'].resetInputValue$.apply(this.b$['swingjs.plaf.JSOptionPaneUI'], []);
}}if (options == null ) {
var wantsInput=this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.getWantsInput$();
if (optionType == 2 && this.buttonIndex == 1 ) {
if (wantsInput) this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.setInputValue$O(null);
 else this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.setValue$O(Integer.valueOf$I(2));
} else if (!wantsInput) {
this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.setValue$O(Integer.valueOf$I(this.buttonIndex));
}} else {
this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.setValue$O(options[this.buttonIndex]);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.awt.event.ActionListener', 'java.awt.event.MouseListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.setInputValue$O((e.getSource$()).getText$());
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if (e.getClickCount$() == 2) {
var list=e.getSource$();
var index=list.locationToIndex$java_awt_Point(e.getPoint$());
this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.setInputValue$O(list.getModel$().getElementAt$I(index));
this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.setValue$O(Integer.valueOf$I(0));
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getSource$() === this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane ) {
var changeName=e.getPropertyName$();
if (changeName == "options" || changeName == "initialValue"  || changeName == "icon"  || changeName == "messageType"  || changeName == "optionType"  || changeName == "message"  || changeName == "selectionValues"  || changeName == "initialSelectionValue"  || changeName == "wantsInput" ) {
this.b$['swingjs.plaf.JSOptionPaneUI'].uninstallComponents$.apply(this.b$['swingjs.plaf.JSOptionPaneUI'], []);
this.b$['swingjs.plaf.JSOptionPaneUI'].installComponents$.apply(this.b$['swingjs.plaf.JSOptionPaneUI'], []);
this.b$['swingjs.plaf.JSOptionPaneUI'].optionPane.validate$();
} else if (changeName === "componentOrientation" ) {
var o=e.getNewValue$();
var op=e.getSource$();
if (o !== e.getOldValue$() ) {
op.applyComponentOrientation$java_awt_ComponentOrientation(o);
}}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI, "MultiplexingTextField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['strokes','javax.swing.KeyStroke[]']]]

Clazz.newMeth(C$, 'c$$I',  function (cols) {
;C$.superclazz.c$$I.apply(this,[cols]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setKeyStrokes$javax_swing_KeyStrokeA',  function (strokes) {
this.strokes=strokes;
});

Clazz.newMeth(C$, 'processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z',  function (ks, e, condition, pressed) {
var processed=C$.superclazz.prototype.processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z.apply(this, [ks, e, condition, pressed]);
if (processed && condition != 2 ) {
for (var counter=this.strokes.length - 1; counter >= 0; counter--) {
if (this.strokes[counter].equals$O(ks)) {
return false;
}}
}return processed;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (key) {
;C$.superclazz.c$$S.apply(this,[key]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.getName$() == "close") {
var optionPane=e.getSource$();
optionPane.setValue$O(Integer.valueOf$I(-1));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI, "ButtonFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['ConstrainedButton',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.minimumWidth=-1;
},1);

C$.$fields$=[['I',['mnemonic','minimumWidth'],'S',['text'],'O',['icon','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$S$I$javax_swing_Icon$I',  function (text, mnemonic, icon, minimumWidth) {
;C$.$init$.apply(this);
this.text=text;
this.mnemonic=mnemonic;
this.icon=icon;
this.minimumWidth=minimumWidth;
}, 1);

Clazz.newMeth(C$, 'createButton$',  function () {
var button;
if (this.minimumWidth > 0) {
button=Clazz.new_($I$(3,1).c$$S$I,[this.text, this.minimumWidth]);
} else {
button=Clazz.new_($I$(4,1).c$$S,[this.text]);
}if (this.icon != null ) {
button.setIcon$javax_swing_Icon(this.icon);
}if (this.mnemonic != 0) {
button.setMnemonic$I(this.mnemonic);
}return button;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSOptionPaneUI.ButtonFactory, "ConstrainedButton", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['minimumWidth']]]

Clazz.newMeth(C$, 'c$$S$I',  function (text, minimumWidth) {
;C$.superclazz.c$$S.apply(this,[text]);C$.$init$.apply(this);
this.minimumWidth=minimumWidth;
}, 1);

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var min=C$.superclazz.prototype.getMinimumSize$.apply(this, []);
min.width=Math.max(min.width, this.minimumWidth);
return min;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
var pref=C$.superclazz.prototype.getPreferredSize$.apply(this, []);
pref.width=Math.max(pref.width, this.minimumWidth);
return pref;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

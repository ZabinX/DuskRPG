(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.SwingUtilities','javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JLabel", null, 'javax.swing.JComponent', 'javax.swing.SwingConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mnemonic="\u0000".$c();
this.mnemonicIndex=-1;
this.text="";
this.defaultIcon=null;
this.disabledIcon=null;
this.disabledIconSet=false;
this.verticalAlignment=0;
this.horizontalAlignment=10;
this.verticalTextPosition=0;
this.horizontalTextPosition=11;
this.iconTextGap=4;
this.labelFor=null;
},1);

C$.$fields$=[['Z',['disabledIconSet'],'I',['mnemonic','mnemonicIndex','verticalAlignment','horizontalAlignment','verticalTextPosition','horizontalTextPosition','iconTextGap'],'S',['text'],'O',['defaultIcon','javax.swing.Icon','+disabledIcon','labelFor','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon$I',  function (text, icon, horizontalAlignment) {
Clazz.super_(C$, this);
this.setText$S(text);
this.setIcon$javax_swing_Icon(icon);
this.setHorizontalAlignment$I(horizontalAlignment);
this.updateUI$();
this.setAlignmentX$F(0.0);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "LabelUI";
});

Clazz.newMeth(C$, 'c$$S$I',  function (text, horizontalAlignment) {
C$.c$$S$javax_swing_Icon$I.apply(this, [text, null, horizontalAlignment]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$javax_swing_Icon$I.apply(this, [text, null, 10]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon$I',  function (image, horizontalAlignment) {
C$.c$$S$javax_swing_Icon$I.apply(this, [null, image, horizontalAlignment]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (image) {
C$.c$$S$javax_swing_Icon$I.apply(this, [null, image, 0]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$javax_swing_Icon$I.apply(this, ["", null, 10]);
}, 1);

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_LabelUI',  function (ui) {
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
if (!this.disabledIconSet && this.disabledIcon != null  ) {
this.setDisabledIcon$javax_swing_Icon(null);
}});

Clazz.newMeth(C$, 'getText$',  function () {
return this.text;
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
var oldValue=this.text;
this.text=text;
this.firePropertyChange$S$O$O("text", oldValue, text);
this.setDisplayedMnemonicIndex$I($I$(1,"findDisplayedMnemonicIndex$S$I",[text, this.getDisplayedMnemonic$()]));
if (text == null  || oldValue == null   || !text.equals$O(oldValue) ) {
if (this.秘isAWT$()) {
this.invalidateIfValid$();
} else {
this.revalidate$();
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'getIcon$',  function () {
return this.defaultIcon;
});

Clazz.newMeth(C$, 'setIcon$javax_swing_Icon',  function (icon) {
var oldValue=this.defaultIcon;
this.defaultIcon=icon;
if (this.defaultIcon != null ) this.秘setPaintsSelf$I(2);
if ((this.defaultIcon !== oldValue ) && !this.disabledIconSet ) {
this.disabledIcon=null;
}this.firePropertyChange$S$O$O("icon", oldValue, this.defaultIcon);
if (this.defaultIcon !== oldValue ) {
if ((this.defaultIcon == null ) || (oldValue == null ) || (this.defaultIcon.getIconWidth$() != oldValue.getIconWidth$()) || (this.defaultIcon.getIconHeight$() != oldValue.getIconHeight$())  ) {
this.revalidate$();
}this.秘repaint$();
}});

Clazz.newMeth(C$, 'getDisabledIcon$',  function () {
if (!this.disabledIconSet && this.disabledIcon == null   && this.defaultIcon != null  ) {
this.disabledIcon=$I$(2).getLookAndFeel$().getDisabledIcon$javax_swing_JComponent$javax_swing_Icon(this, this.defaultIcon);
if (this.disabledIcon != null ) {
this.firePropertyChange$S$O$O("disabledIcon", null, this.disabledIcon);
}}return this.disabledIcon;
});

Clazz.newMeth(C$, 'setDisabledIcon$javax_swing_Icon',  function (disabledIcon) {
var oldValue=this.disabledIcon;
this.disabledIcon=disabledIcon;
this.disabledIconSet=(disabledIcon != null );
this.firePropertyChange$S$O$O("disabledIcon", oldValue, disabledIcon);
if (disabledIcon !== oldValue ) {
if (disabledIcon == null  || oldValue == null   || disabledIcon.getIconWidth$() != oldValue.getIconWidth$()  || disabledIcon.getIconHeight$() != oldValue.getIconHeight$() ) {
this.revalidate$();
}if (!this.isEnabled$()) {
this.秘repaint$();
}}});

Clazz.newMeth(C$, 'setDisplayedMnemonic$I',  function (key) {
var oldKey=this.mnemonic;
this.mnemonic=key;
this.firePropertyChange$S$I$I("displayedMnemonic", oldKey, this.mnemonic);
this.setDisplayedMnemonicIndex$I($I$(1,"findDisplayedMnemonicIndex$S$I",[this.getText$(), this.mnemonic]));
if (key != oldKey) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'setDisplayedMnemonic$C',  function (aChar) {
var vk=aChar.$c();
if (vk >= 97  && vk <= 122  ) vk-=(32);
this.setDisplayedMnemonic$I(vk);
});

Clazz.newMeth(C$, 'getDisplayedMnemonic$',  function () {
return this.mnemonic;
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

Clazz.newMeth(C$, 'checkHorizontalKey$I$S',  function (key, message) {
if ((key == 2) || (key == 0) || (key == 4) || (key == 10) || (key == 11)  ) {
return key;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message]);
}});

Clazz.newMeth(C$, 'checkVerticalKey$I$S',  function (key, message) {
if ((key == 1) || (key == 0) || (key == 3)  ) {
return key;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[message]);
}});

Clazz.newMeth(C$, 'getIconTextGap$',  function () {
return this.iconTextGap;
});

Clazz.newMeth(C$, 'setIconTextGap$I',  function (iconTextGap) {
var oldValue=this.iconTextGap;
this.iconTextGap=iconTextGap;
this.firePropertyChange$S$I$I("iconTextGap", oldValue, iconTextGap);
if (iconTextGap != oldValue) {
this.revalidate$();
this.秘repaint$();
}});

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
var old=this.verticalTextPosition;
this.verticalTextPosition=this.checkVerticalKey$I$S(textPosition, "verticalTextPosition");
this.firePropertyChange$S$I$I("verticalTextPosition", old, this.verticalTextPosition);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'getHorizontalTextPosition$',  function () {
return this.horizontalTextPosition;
});

Clazz.newMeth(C$, 'setHorizontalTextPosition$I',  function (textPosition) {
var old=this.horizontalTextPosition;
this.horizontalTextPosition=this.checkHorizontalKey$I$S(textPosition, "horizontalTextPosition");
this.firePropertyChange$S$I$I("horizontalTextPosition", old, this.horizontalTextPosition);
this.revalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, infoflags, x, y, w, h) {
if (!this.isShowing$() || !$I$(1,"doesIconReferenceImage$javax_swing_Icon$java_awt_Image",[this.getIcon$(), img]) && !$I$(1).doesIconReferenceImage$javax_swing_Icon$java_awt_Image(this.disabledIcon, img)  ) {
return false;
}return C$.superclazz.prototype.imageUpdate$java_awt_Image$I$I$I$I$I.apply(this, [img, infoflags, x, y, w, h]);
});

Clazz.newMeth(C$, 'paramString$',  function () {
var textString=(this.text != null  ? this.text : "");
var defaultIconString=((this.defaultIcon != null ) && (this.defaultIcon !== this )  ? this.defaultIcon.toString() : "");
var disabledIconString=((this.disabledIcon != null ) && (this.disabledIcon !== this )  ? this.disabledIcon.toString() : "");
var labelForString=(this.labelFor != null  ? this.labelFor.toString() : "");
var verticalAlignmentString;
if (this.verticalAlignment == 1) {
verticalAlignmentString="TOP";
} else if (this.verticalAlignment == 0) {
verticalAlignmentString="CENTER";
} else if (this.verticalAlignment == 3) {
verticalAlignmentString="BOTTOM";
} else verticalAlignmentString="";
var horizontalAlignmentString;
if (this.horizontalAlignment == 2) {
horizontalAlignmentString="LEFT";
} else if (this.horizontalAlignment == 0) {
horizontalAlignmentString="CENTER";
} else if (this.horizontalAlignment == 4) {
horizontalAlignmentString="RIGHT";
} else if (this.horizontalAlignment == 10) {
horizontalAlignmentString="LEADING";
} else if (this.horizontalAlignment == 11) {
horizontalAlignmentString="TRAILING";
} else horizontalAlignmentString="";
var verticalTextPositionString;
if (this.verticalTextPosition == 1) {
verticalTextPositionString="TOP";
} else if (this.verticalTextPosition == 0) {
verticalTextPositionString="CENTER";
} else if (this.verticalTextPosition == 3) {
verticalTextPositionString="BOTTOM";
} else verticalTextPositionString="";
var horizontalTextPositionString;
if (this.horizontalTextPosition == 2) {
horizontalTextPositionString="LEFT";
} else if (this.horizontalTextPosition == 0) {
horizontalTextPositionString="CENTER";
} else if (this.horizontalTextPosition == 4) {
horizontalTextPositionString="RIGHT";
} else if (this.horizontalTextPosition == 10) {
horizontalTextPositionString="LEADING";
} else if (this.horizontalTextPosition == 11) {
horizontalTextPositionString="TRAILING";
} else horizontalTextPositionString="";
return C$.superclazz.prototype.paramString$.apply(this, []) + ",defaultIcon=" + defaultIconString + ",disabledIcon=" + disabledIconString + ",horizontalAlignment=" + horizontalAlignmentString + ",horizontalTextPosition=" + horizontalTextPositionString + ",iconTextGap=" + this.iconTextGap + ",labelFor=" + labelForString + ",text=" + textString + ",verticalAlignment=" + verticalAlignmentString + ",verticalTextPosition=" + verticalTextPositionString ;
});

Clazz.newMeth(C$, 'getLabelFor$',  function () {
return this.labelFor;
});

Clazz.newMeth(C$, 'setLabelFor$java_awt_Component',  function (c) {
var oldC=this.labelFor;
this.labelFor=c;
this.firePropertyChange$S$O$O("labelFor", oldC, c);
if (Clazz.instanceOf(oldC, "javax.swing.JComponent")) {
(oldC).putClientProperty$O$O("labeledBy", null);
}if (Clazz.instanceOf(c, "javax.swing.JComponent")) {
(c).putClientProperty$O$O("labeledBy", this);
}});

Clazz.newMeth(C$, 'getClientProperty$O',  function (key) {
if (key === "jsvideo" ) {
this.getOrCreatePeer$();
this.秘getUI$().updateDOMNode$();
return this.秘getUI$().imageNode;
}return C$.superclazz.prototype.getClientProperty$O.apply(this, [key]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

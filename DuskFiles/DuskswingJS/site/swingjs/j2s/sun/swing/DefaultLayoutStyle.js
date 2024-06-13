(function(){var P$=Clazz.newPackage("sun.swing"),p$1={},I$=[[0,['javax.swing.LayoutStyle','.ComponentPlacement'],'javax.swing.UIManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultLayoutStyle", null, 'javax.swing.LayoutStyle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.swing.DefaultLayoutStyle']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'getPreferredGap$javax_swing_JComponent$javax_swing_JComponent$javax_swing_LayoutStyle_ComponentPlacement$I$java_awt_Container',  function (component1, component2, type, position, parent) {
if (component1 == null  || component2 == null   || type == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}p$1.checkPosition$I.apply(this, [position]);
if (type === $I$(1).INDENT  && (position == 3 || position == 7 ) ) {
var indent=this.getIndent$javax_swing_JComponent$I(component1, position);
if (indent > 0) {
return indent;
}}return (type === $I$(1).UNRELATED ) ? 12 : 6;
});

Clazz.newMeth(C$, 'getContainerGap$javax_swing_JComponent$I$java_awt_Container',  function (component, position, parent) {
if (component == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}p$1.checkPosition$I.apply(this, [position]);
return 6;
});

Clazz.newMeth(C$, 'isLabelAndNonlabel$javax_swing_JComponent$javax_swing_JComponent$I',  function (c1, c2, position) {
if (position == 3 || position == 7 ) {
var c1Label=(Clazz.instanceOf(c1, "javax.swing.JLabel"));
var c2Label=(Clazz.instanceOf(c2, "javax.swing.JLabel"));
return ((c1Label || c2Label ) && (c1Label != c2Label ) );
}return false;
});

Clazz.newMeth(C$, 'getButtonGap$javax_swing_JComponent$javax_swing_JComponent$I$I',  function (source, target, position, offset) {
offset-=this.getButtonGap$javax_swing_JComponent$I(source, position);
if (offset > 0) {
offset-=this.getButtonGap$javax_swing_JComponent$I(target, this.flipDirection$I(position));
}if (offset < 0) {
return 0;
}return offset;
});

Clazz.newMeth(C$, 'getButtonGap$javax_swing_JComponent$I$I',  function (source, position, offset) {
offset-=this.getButtonGap$javax_swing_JComponent$I(source, position);
return Math.max(offset, 0);
});

Clazz.newMeth(C$, 'getButtonGap$javax_swing_JComponent$I',  function (c, position) {
var classID=c.getUIClassID$();
if ((classID === "CheckBoxUI"  || classID === "RadioButtonUI"  ) && !(c).isBorderPainted$() ) {
var border=c.getBorder$();
if (Clazz.instanceOf(border, "javax.swing.plaf.UIResource")) {
return p$1.getInset$javax_swing_JComponent$I.apply(this, [c, position]);
}}return 0;
});

Clazz.newMeth(C$, 'checkPosition$I',  function (position) {
if (position != 1 && position != 5  && position != 7  && position != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}}, p$1);

Clazz.newMeth(C$, 'flipDirection$I',  function (position) {
switch (position) {
case 1:
return 5;
case 5:
return 1;
case 3:
return 7;
case 7:
return 3;
}
return 0;
});

Clazz.newMeth(C$, 'getIndent$javax_swing_JComponent$I',  function (c, position) {
var classID=c.getUIClassID$();
if (classID === "CheckBoxUI"  || classID === "RadioButtonUI"  ) {
var button=c;
var insets=c.getInsets$();
var icon=p$1.getIcon$javax_swing_AbstractButton.apply(this, [button]);
var gap=button.getIconTextGap$();
if (p$1.isLeftAligned$javax_swing_AbstractButton$I.apply(this, [button, position])) {
return insets.left + icon.getIconWidth$() + gap ;
} else if (p$1.isRightAligned$javax_swing_AbstractButton$I.apply(this, [button, position])) {
return insets.right + icon.getIconWidth$() + gap ;
}}return 0;
});

Clazz.newMeth(C$, 'getIcon$javax_swing_AbstractButton',  function (button) {
var icon=button.getIcon$();
if (icon != null ) {
return icon;
}var key=null;
if (Clazz.instanceOf(button, "javax.swing.JCheckBox")) {
key="CheckBox.icon";
} else if (Clazz.instanceOf(button, "javax.swing.JRadioButton")) {
key="RadioButton.icon";
}if (key != null ) {
var oIcon=$I$(2).get$O(key);
if (Clazz.instanceOf(oIcon, "javax.swing.Icon")) {
return oIcon;
}}return null;
}, p$1);

Clazz.newMeth(C$, 'isLeftAligned$javax_swing_AbstractButton$I',  function (button, position) {
if (position == 7) {
var ltr=button.getComponentOrientation$().isLeftToRight$();
var hAlign=button.getHorizontalAlignment$();
return ((ltr && (hAlign == 2 || hAlign == 10 ) ) || (!ltr && (hAlign == 11) ) );
}return false;
}, p$1);

Clazz.newMeth(C$, 'isRightAligned$javax_swing_AbstractButton$I',  function (button, position) {
if (position == 3) {
var ltr=button.getComponentOrientation$().isLeftToRight$();
var hAlign=button.getHorizontalAlignment$();
return ((ltr && (hAlign == 4 || hAlign == 11 ) ) || (!ltr && (hAlign == 10) ) );
}return false;
}, p$1);

Clazz.newMeth(C$, 'getInset$javax_swing_JComponent$I',  function (c, position) {
return p$1.getInset$java_awt_Insets$I.apply(this, [c.getInsets$(), position]);
}, p$1);

Clazz.newMeth(C$, 'getInset$java_awt_Insets$I',  function (insets, position) {
if (insets == null ) {
return 0;
}switch (position) {
case 1:
return insets.top;
case 5:
return insets.bottom;
case 3:
return insets.right;
case 7:
return insets.left;
}
return 0;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

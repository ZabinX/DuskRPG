(function(){var P$=Clazz.newPackage("javax.swing.plaf.basic"),I$=[[0,'java.awt.Insets','javax.swing.plaf.basic.BasicGraphicsUtils','javax.swing.UIManager',['javax.swing.plaf.BorderUIResource','.CompoundBorderUIResource'],['javax.swing.plaf.basic.BasicBorders','.ButtonBorder'],['javax.swing.plaf.basic.BasicBorders','.MarginBorder'],['javax.swing.plaf.basic.BasicBorders','.RadioButtonBorder'],['javax.swing.plaf.basic.BasicBorders','.ToggleButtonBorder'],['javax.swing.plaf.basic.BasicBorders','.MenuBarBorder'],['javax.swing.plaf.basic.BasicBorders','.SplitPaneBorder'],['javax.swing.plaf.basic.BasicBorders','.FieldBorder'],['javax.swing.plaf.BorderUIResource','.LineBorderUIResource'],'java.awt.Color','javax.swing.border.BevelBorder','javax.swing.BorderFactory']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicBorders", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RolloverButtonBorder',9],['RolloverMarginBorder',9],['ButtonBorder',9],['ToggleButtonBorder',9],['RadioButtonBorder',9],['MenuBarBorder',9],['MarginBorder',9],['FieldBorder',9],['SplitPaneBorder',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getButtonBorder$',  function () {
var table=$I$(3).getLookAndFeelDefaults$();
var buttonBorder=Clazz.new_([Clazz.new_([table.getColor$O("Button.shadow"), table.getColor$O("Button.darkShadow"), table.getColor$O("Button.light"), table.getColor$O("Button.highlight")],$I$(5,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color), Clazz.new_($I$(6,1))],$I$(4,1).c$$javax_swing_border_Border$javax_swing_border_Border);
return buttonBorder;
}, 1);

Clazz.newMeth(C$, 'getRadioButtonBorder$',  function () {
var table=$I$(3).getLookAndFeelDefaults$();
var radioButtonBorder=Clazz.new_([Clazz.new_([table.getColor$O("RadioButton.shadow"), table.getColor$O("RadioButton.darkShadow"), table.getColor$O("RadioButton.light"), table.getColor$O("RadioButton.highlight")],$I$(7,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color), Clazz.new_($I$(6,1))],$I$(4,1).c$$javax_swing_border_Border$javax_swing_border_Border);
return radioButtonBorder;
}, 1);

Clazz.newMeth(C$, 'getToggleButtonBorder$',  function () {
var table=$I$(3).getLookAndFeelDefaults$();
var toggleButtonBorder=Clazz.new_([Clazz.new_([table.getColor$O("ToggleButton.shadow"), table.getColor$O("ToggleButton.darkShadow"), table.getColor$O("ToggleButton.light"), table.getColor$O("ToggleButton.highlight")],$I$(8,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color), Clazz.new_($I$(6,1))],$I$(4,1).c$$javax_swing_border_Border$javax_swing_border_Border);
return toggleButtonBorder;
}, 1);

Clazz.newMeth(C$, 'getMenuBarBorder$',  function () {
var table=$I$(3).getLookAndFeelDefaults$();
var menuBarBorder=Clazz.new_([table.getColor$O("MenuBar.shadow"), table.getColor$O("MenuBar.highlight")],$I$(9,1).c$$java_awt_Color$java_awt_Color);
return menuBarBorder;
}, 1);

Clazz.newMeth(C$, 'getSplitPaneBorder$',  function () {
var table=$I$(3).getLookAndFeelDefaults$();
var splitPaneBorder=Clazz.new_([table.getColor$O("SplitPane.highlight"), table.getColor$O("SplitPane.darkShadow")],$I$(10,1).c$$java_awt_Color$java_awt_Color);
return splitPaneBorder;
}, 1);

Clazz.newMeth(C$, 'getTextFieldBorder$',  function () {
var table=$I$(3).getLookAndFeelDefaults$();
var textFieldBorder=Clazz.new_([table.getColor$O("TextField.shadow"), table.getColor$O("TextField.darkShadow"), table.getColor$O("TextField.light"), table.getColor$O("TextField.highlight")],$I$(11,1).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color);
return textFieldBorder;
}, 1);

Clazz.newMeth(C$, 'getProgressBarBorder$',  function () {
var progressBarBorder=Clazz.new_([$I$(13).green, 2],$I$(12,1).c$$java_awt_Color$I);
return progressBarBorder;
}, 1);

Clazz.newMeth(C$, 'getInternalFrameBorder$',  function () {
var table=$I$(3).getLookAndFeelDefaults$();
var internalFrameBorder=Clazz.new_([Clazz.new_([0, table.getColor$O("InternalFrame.borderLight"), table.getColor$O("InternalFrame.borderHighlight"), table.getColor$O("InternalFrame.borderDarkShadow"), table.getColor$O("InternalFrame.borderShadow")],$I$(14,1).c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color), $I$(15,"createLineBorder$java_awt_Color$I",[table.getColor$O("InternalFrame.borderColor"), 1])],$I$(4,1).c$$javax_swing_border_Border$javax_swing_border_Border);
return internalFrameBorder;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "RolloverButtonBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.plaf.basic.BasicBorders','.ButtonBorder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color',  function (shadow, darkShadow, highlight, lightHighlight) {
;C$.superclazz.c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color.apply(this,[shadow, darkShadow, highlight, lightHighlight]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, w, h) {
var b=c;
var model=b.getModel$();
var shade=this.shadow;
var p=b.getParent$();
if (p != null  && p.getBackground$().equals$O(this.shadow) ) {
shade=this.darkShadow;
}if ((model.isRollover$() && !(model.isPressed$() && !model.isArmed$() ) ) || model.isSelected$() ) {
var oldColor=g.getColor$();
g.translate$I$I(x, y);
if (model.isPressed$() && model.isArmed$()  || model.isSelected$() ) {
g.setColor$java_awt_Color(shade);
g.drawRect$I$I$I$I(0, 0, w - 1, h - 1);
g.setColor$java_awt_Color(this.lightHighlight);
g.drawLine$I$I$I$I(w - 1, 0, w - 1, h - 1);
g.drawLine$I$I$I$I(0, h - 1, w - 1, h - 1);
} else {
g.setColor$java_awt_Color(this.lightHighlight);
g.drawRect$I$I$I$I(0, 0, w - 1, h - 1);
g.setColor$java_awt_Color(shade);
g.drawLine$I$I$I$I(w - 1, 0, w - 1, h - 1);
g.drawLine$I$I$I$I(0, h - 1, w - 1, h - 1);
}g.translate$I$I(-x, -y);
g.setColor$java_awt_Color(oldColor);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "RolloverMarginBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.EmptyBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I$I$I$I.apply(this,[3, 3, 3, 3]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$java_awt_Component$java_awt_Insets(c, Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
var margin=null;
if (Clazz.instanceOf(c, "javax.swing.AbstractButton")) {
margin=(c).getMargin$();
}if (margin == null  || Clazz.instanceOf(margin, "javax.swing.plaf.UIResource") ) {
insets.left=this.left;
insets.top=this.top;
insets.right=this.right;
insets.bottom=this.bottom;
} else {
insets.left=margin.left;
insets.top=margin.top;
insets.right=margin.right;
insets.bottom=margin.bottom;
}return insets;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "ButtonBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.EmptyBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['shadow','java.awt.Color','+darkShadow','+highlight','+lightHighlight']]]

Clazz.newMeth(C$, 'noPaint$',  function () {
});

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color',  function (shadow, darkShadow, highlight, lightHighlight) {
;C$.superclazz.c$$I$I$I$I.apply(this,[1, 1, 1, 1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "ToggleButtonBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.plaf.basic.BasicBorders','.ButtonBorder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color',  function (shadow, darkShadow, highlight, lightHighlight) {
;C$.superclazz.c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color.apply(this,[shadow, darkShadow, highlight, lightHighlight]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "RadioButtonBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.plaf.basic.BasicBorders','.ButtonBorder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color',  function (shadow, darkShadow, highlight, lightHighlight) {
;C$.superclazz.c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color.apply(this,[shadow, darkShadow, highlight, lightHighlight]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "MenuBarBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.AbstractBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['shadow','java.awt.Color','+highlight']]]

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color',  function (shadow, highlight) {
Clazz.super_(C$, this);
this.shadow=shadow;
this.highlight=highlight;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
var oldColor=g.getColor$();
g.translate$I$I(x, y);
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(0, height - 2, width, height - 2);
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(0, height - 1, width, height - 1);
g.translate$I$I(-x, -y);
g.setColor$java_awt_Color(oldColor);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$java_awt_Component$java_awt_Insets(c, Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
insets.top=0;
insets.left=0;
insets.bottom=2;
insets.right=0;
return insets;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "MarginBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.AbstractBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$java_awt_Component$java_awt_Insets(c, Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
var margin=null;
if (Clazz.instanceOf(c, "javax.swing.AbstractButton")) {
var b=c;
margin=b.getMargin$();
} else if (Clazz.instanceOf(c, "javax.swing.JToolBar")) {
var t=c;
margin=t.getMargin$();
} else if (Clazz.instanceOf(c, "javax.swing.text.JTextComponent")) {
var t=c;
margin=t.getMargin$();
}insets.top=margin != null  ? margin.top : 0;
insets.left=margin != null  ? margin.left : 0;
insets.bottom=margin != null  ? margin.bottom : 0;
insets.right=margin != null  ? margin.right : 0;
return insets;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "FieldBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.AbstractBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['shadow','java.awt.Color','+darkShadow','+highlight','+lightHighlight']]]

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color',  function (shadow, darkShadow, highlight, lightHighlight) {
Clazz.super_(C$, this);
this.shadow=shadow;
this.highlight=highlight;
this.darkShadow=darkShadow;
this.lightHighlight=lightHighlight;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
$I$(2).drawEtchedRect$java_awt_Graphics$I$I$I$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color(g, x, y, width, height, this.shadow, this.darkShadow, this.highlight, this.lightHighlight);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$java_awt_Component$java_awt_Insets(c, Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
var margin=null;
if (Clazz.instanceOf(c, "javax.swing.text.JTextComponent")) {
margin=(c).getMargin$();
}insets.top=margin != null  ? 2 + margin.top : 2;
insets.left=margin != null  ? 2 + margin.left : 2;
insets.bottom=margin != null  ? 2 + margin.bottom : 2;
insets.right=margin != null  ? 2 + margin.right : 2;
return insets;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBorders, "SplitPaneBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['javax.swing.border.Border', 'javax.swing.plaf.UIResource']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['highlight','java.awt.Color','+shadow']]]

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color',  function (highlight, shadow) {
;C$.$init$.apply(this);
this.highlight=highlight;
this.shadow=shadow;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
var child;
var cBounds;
var splitPane=c;
child=splitPane.getLeftComponent$();
g.setColor$java_awt_Color(c.getBackground$());
g.drawRect$I$I$I$I(x, y, width - 1, height - 1);
if (splitPane.getOrientation$() == 1) {
if (child != null ) {
cBounds=child.getBounds$();
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(0, 0, cBounds.width + 1, 0);
g.drawLine$I$I$I$I(0, 1, 0, cBounds.height + 1);
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(0, cBounds.height + 1, cBounds.width + 1, cBounds.height + 1);
}child=splitPane.getRightComponent$();
if (child != null ) {
cBounds=child.getBounds$();
var maxX=cBounds.x + cBounds.width;
var maxY=cBounds.y + cBounds.height;
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(cBounds.x - 1, 0, maxX, 0);
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(cBounds.x - 1, maxY, maxX, maxY);
g.drawLine$I$I$I$I(maxX, 0, maxX, maxY + 1);
}} else {
if (child != null ) {
cBounds=child.getBounds$();
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(0, 0, cBounds.width + 1, 0);
g.drawLine$I$I$I$I(0, 1, 0, cBounds.height);
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(1 + cBounds.width, 0, 1 + cBounds.width, cBounds.height + 1);
g.drawLine$I$I$I$I(0, cBounds.height + 1, 0, cBounds.height + 1);
}child=splitPane.getRightComponent$();
if (child != null ) {
cBounds=child.getBounds$();
var maxX=cBounds.x + cBounds.width;
var maxY=cBounds.y + cBounds.height;
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(0, cBounds.y - 1, 0, maxY);
g.drawLine$I$I$I$I(maxX, cBounds.y - 1, maxX, cBounds.y - 1);
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(0, maxY, cBounds.width + 1, maxY);
g.drawLine$I$I$I$I(maxX, cBounds.y, maxX, maxY);
}}});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return Clazz.new_($I$(1,1).c$$I$I$I$I,[1, 1, 1, 1]);
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return true;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

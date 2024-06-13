(function(){var P$=Clazz.newPackage("javax.swing.plaf"),I$=[[0,'javax.swing.border.CompoundBorder',['javax.swing.plaf.BorderUIResource','.EtchedBorderUIResource'],['javax.swing.plaf.BorderUIResource','.BevelBorderUIResource'],['javax.swing.plaf.BorderUIResource','.LineBorderUIResource'],'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BorderUIResource", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['javax.swing.border.Border', 'javax.swing.plaf.UIResource']);
C$.$classes$=[['CompoundBorderUIResource',9],['EmptyBorderUIResource',9],['LineBorderUIResource',9],['BevelBorderUIResource',9],['EtchedBorderUIResource',9],['MatteBorderUIResource',9],['TitledBorderUIResource',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['+delegate']]
,['O',['etched','javax.swing.border.Border','+loweredBevel','+raisedBevel','+blackLine']]]

Clazz.newMeth(C$, 'getEtchedBorderUIResource$',  function () {
if (C$.etched == null ) {
C$.etched=Clazz.new_($I$(2,1));
}return C$.etched;
}, 1);

Clazz.newMeth(C$, 'getLoweredBevelBorderUIResource$',  function () {
if (C$.loweredBevel == null ) {
C$.loweredBevel=Clazz.new_($I$(3,1).c$$I,[1]);
}return C$.loweredBevel;
}, 1);

Clazz.newMeth(C$, 'getRaisedBevelBorderUIResource$',  function () {
if (C$.raisedBevel == null ) {
C$.raisedBevel=Clazz.new_($I$(3,1).c$$I,[0]);
}return C$.raisedBevel;
}, 1);

Clazz.newMeth(C$, 'getBlackLineBorderUIResource$',  function () {
if (C$.blackLine == null ) {
C$.blackLine=Clazz.new_([$I$(5).black],$I$(4,1).c$$java_awt_Color);
}return C$.blackLine;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border',  function (delegate) {
;C$.$init$.apply(this);
if (delegate == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null border delegate argument"]);
}this.delegate=delegate;
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
this.delegate.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g, x, y, width, height);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.delegate.getBorderInsets$java_awt_Component(c);
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return this.delegate.isBorderOpaque$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BorderUIResource, "CompoundBorderUIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.CompoundBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$javax_swing_border_Border',  function (outsideBorder, insideBorder) {
;C$.superclazz.c$$javax_swing_border_Border$javax_swing_border_Border.apply(this,[outsideBorder, insideBorder]);C$.$init$.apply(this);
this.秘paintClass=Clazz.getClass($I$(1));
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BorderUIResource, "EmptyBorderUIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.EmptyBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (top, left, bottom, right) {
;C$.superclazz.c$$I$I$I$I.apply(this,[top, left, bottom, right]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Insets',  function (insets) {
;C$.superclazz.c$$java_awt_Insets.apply(this,[insets]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BorderUIResource, "LineBorderUIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.LineBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_Color',  function (color) {
;C$.superclazz.c$$java_awt_Color.apply(this,[color]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$I',  function (color, thickness) {
;C$.superclazz.c$$java_awt_Color$I.apply(this,[color, thickness]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BorderUIResource, "BevelBorderUIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.BevelBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (bevelType) {
;C$.superclazz.c$$I.apply(this,[bevelType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color$java_awt_Color',  function (bevelType, highlight, shadow) {
;C$.superclazz.c$$I$java_awt_Color$java_awt_Color.apply(this,[bevelType, highlight, shadow]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color',  function (bevelType, highlightOuter, highlightInner, shadowOuter, shadowInner) {
;C$.superclazz.c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color.apply(this,[bevelType, highlightOuter, highlightInner, shadowOuter, shadowInner]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BorderUIResource, "EtchedBorderUIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.EtchedBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (etchType) {
;C$.superclazz.c$$I.apply(this,[etchType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$java_awt_Color',  function (highlight, shadow) {
;C$.superclazz.c$$java_awt_Color$java_awt_Color.apply(this,[highlight, shadow]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color$java_awt_Color',  function (etchType, highlight, shadow) {
;C$.superclazz.c$$I$java_awt_Color$java_awt_Color.apply(this,[etchType, highlight, shadow]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BorderUIResource, "MatteBorderUIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.MatteBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I$java_awt_Color',  function (top, left, bottom, right, color) {
;C$.superclazz.c$$I$I$I$I$java_awt_Color.apply(this,[top, left, bottom, right, color]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$javax_swing_Icon',  function (top, left, bottom, right, tileIcon) {
;C$.superclazz.c$$I$I$I$I$javax_swing_Icon.apply(this,[top, left, bottom, right, tileIcon]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (tileIcon) {
;C$.superclazz.c$$javax_swing_Icon.apply(this,[tileIcon]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BorderUIResource, "TitledBorderUIResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.TitledBorder', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border',  function (border) {
;C$.superclazz.c$$javax_swing_border_Border.apply(this,[border]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S',  function (border, title) {
;C$.superclazz.c$$javax_swing_border_Border$S.apply(this,[border, title]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S$I$I',  function (border, title, titleJustification, titlePosition) {
;C$.superclazz.c$$javax_swing_border_Border$S$I$I.apply(this,[border, title, titleJustification, titlePosition]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S$I$I$java_awt_Font',  function (border, title, titleJustification, titlePosition, titleFont) {
;C$.superclazz.c$$javax_swing_border_Border$S$I$I$java_awt_Font.apply(this,[border, title, titleJustification, titlePosition, titleFont]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color',  function (border, title, titleJustification, titlePosition, titleFont, titleColor) {
;C$.superclazz.c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color.apply(this,[border, title, titleJustification, titlePosition, titleFont, titleColor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

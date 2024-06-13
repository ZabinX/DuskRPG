(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'java.awt.Color','javax.swing.text.html.CSSBorder',['javax.swing.text.html.CSS','.Value'],['javax.swing.text.html.CSSBorder','.ShadowLightPainter'],['javax.swing.text.html.CSS','.Attribute'],['javax.swing.text.html.CSS','.CssValue'],['javax.swing.text.html.CSS','.ColorValue'],['javax.swing.text.html.CSS','.BorderStyle'],['javax.swing.text.html.CSS','.BorderWidthValue'],'java.util.HashMap',['javax.swing.text.html.CSSBorder','.NullPainter'],['javax.swing.text.html.CSSBorder','.SolidPainter'],['javax.swing.text.html.CSSBorder','.DoublePainter'],['javax.swing.text.html.CSSBorder','.DottedDashedPainter'],['javax.swing.text.html.CSSBorder','.GrooveRidgePainter'],['javax.swing.text.html.CSSBorder','.InsetOutsetPainter'],'java.awt.Polygon']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CSSBorder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.border.AbstractBorder');
C$.$classes$=[['BorderPainter',8],['NullPainter',8],['SolidPainter',8],['StrokePainter',1032],['DoublePainter',8],['DottedDashedPainter',8],['ShadowLightPainter',1032],['GrooveRidgePainter',8],['InsetOutsetPainter',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['attrs','javax.swing.text.AttributeSet']]
,['O',['ATTRIBUTES','javax.swing.text.html.CSS.Attribute[][]','PARSERS','javax.swing.text.html.CSS.CssValue[]','DEFAULTS','Object[]','borderPainters','java.util.Map']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_AttributeSet',  function (attrs) {
Clazz.super_(C$, this);
this.attrs=attrs;
}, 1);

Clazz.newMeth(C$, 'getBorderColor$I',  function (side) {
var o=this.attrs.getAttribute$O(C$.ATTRIBUTES[0][side]);
var cv;
if (Clazz.instanceOf(o, "javax.swing.text.html.CSS.ColorValue")) {
cv=o;
} else {
cv=this.attrs.getAttribute$O($I$(5).COLOR);
if (cv == null ) {
cv=C$.PARSERS[0].parseCssValue$S($I$(5).COLOR.getDefaultValue$());
}}return cv.getValue$();
}, p$1);

Clazz.newMeth(C$, 'getBorderWidth$I',  function (side) {
var width=0;
var bs=this.attrs.getAttribute$O(C$.ATTRIBUTES[1][side]);
if ((bs != null ) && (bs.getValue$() !== $I$(3).NONE ) ) {
var bw=this.attrs.getAttribute$O(C$.ATTRIBUTES[2][side]);
if (bw == null ) {
bw=C$.DEFAULTS[2];
}width=(bw.getValue$Z(true)|0);
}return width;
}, p$1);

Clazz.newMeth(C$, 'getWidths',  function () {
var widths=Clazz.array(Integer.TYPE, [4]);
for (var i=0; i < widths.length; i++) {
widths[i]=p$1.getBorderWidth$I.apply(this, [i]);
}
return widths;
}, p$1);

Clazz.newMeth(C$, 'getBorderStyle$I',  function (side) {
var style=this.attrs.getAttribute$O(C$.ATTRIBUTES[1][side]);
if (style == null ) {
style=C$.DEFAULTS[1];
}return style.getValue$();
}, p$1);

Clazz.newMeth(C$, 'getBorderShape$I',  function (side) {
var shape=null;
var widths=p$1.getWidths.apply(this, []);
if (widths[side] != 0) {
shape=Clazz.new_([Clazz.array(Integer.TYPE, [4]), Clazz.array(Integer.TYPE, [4]), 0],$I$(17,1).c$$IA$IA$I);
shape.addPoint$I$I(0, 0);
shape.addPoint$I$I(-widths[(side + 3) % 4], -widths[side]);
shape.addPoint$I$I(widths[(side + 1) % 4], -widths[side]);
shape.addPoint$I$I(0, 0);
}return shape;
}, p$1);

Clazz.newMeth(C$, 'getBorderPainter$I',  function (side) {
var style=p$1.getBorderStyle$I.apply(this, [side]);
return C$.borderPainters.get$O(style);
}, p$1);

Clazz.newMeth(C$, 'getAdjustedColor$java_awt_Color$D',  function (c, factor) {
var f=1 - Math.min(Math.abs(factor), 1);
var inc=(factor > 0  ? 255 * (1 - f) : 0);
return Clazz.new_([((c.getRed$() * f + inc)|0), ((c.getGreen$() * f + inc)|0), ((c.getBlue$() * f + inc)|0)],$I$(1,1).c$$I$I$I);
}, 1);

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
var widths=p$1.getWidths.apply(this, []);
insets.set$I$I$I$I(widths[0], widths[3], widths[2], widths[1]);
return insets;
});

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
if (!(Clazz.instanceOf(g, "java.awt.Graphics2D"))) {
return;
}var g2=g.create$();
var widths=p$1.getWidths.apply(this, []);
var intX=x + widths[3];
var intY=y + widths[0];
var intWidth=width - (widths[1] + widths[3]);
var intHeight=height - (widths[0] + widths[2]);
var intCorners=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [intX, intY]), Clazz.array(Integer.TYPE, -1, [intX + intWidth, intY]), Clazz.array(Integer.TYPE, -1, [intX + intWidth, intY + intHeight]), Clazz.array(Integer.TYPE, -1, [intX, intY + intHeight])]);
for (var i=0; i < 4; i++) {
var style=p$1.getBorderStyle$I.apply(this, [i]);
var shape=p$1.getBorderShape$I.apply(this, [i]);
if ((style !== $I$(3).NONE ) && (shape != null ) ) {
var sideLength=(i % 2 == 0 ? intWidth : intHeight);
shape.xpoints[2]+=sideLength;
shape.xpoints[3]+=sideLength;
var color=p$1.getBorderColor$I.apply(this, [i]);
var painter=p$1.getBorderPainter$I.apply(this, [i]);
var angle=i * 3.141592653589793 / 2;
g2.setClip$java_awt_Shape(g.getClip$());
g2.translate$I$I(intCorners[i][0], intCorners[i][1]);
g2.rotate$D(angle);
g2.clip$java_awt_Shape(shape);
painter.paint$java_awt_Polygon$java_awt_Graphics$java_awt_Color$I(shape, g2, color, i);
g2.rotate$D(-angle);
g2.translate$I$I(-intCorners[i][0], -intCorners[i][1]);
}}
g2.dispose$();
});

Clazz.newMeth(C$, 'registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter',  function (style, painter) {
C$.borderPainters.put$O$O(style, painter);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.ATTRIBUTES=Clazz.array($I$(5), -2, [Clazz.array($I$(5), -1, [$I$(5).BORDER_TOP_COLOR, $I$(5).BORDER_RIGHT_COLOR, $I$(5).BORDER_BOTTOM_COLOR, $I$(5).BORDER_LEFT_COLOR]), Clazz.array($I$(5), -1, [$I$(5).BORDER_TOP_STYLE, $I$(5).BORDER_RIGHT_STYLE, $I$(5).BORDER_BOTTOM_STYLE, $I$(5).BORDER_LEFT_STYLE]), Clazz.array($I$(5), -1, [$I$(5).BORDER_TOP_WIDTH, $I$(5).BORDER_RIGHT_WIDTH, $I$(5).BORDER_BOTTOM_WIDTH, $I$(5).BORDER_LEFT_WIDTH])]);
C$.PARSERS=Clazz.array($I$(6), -1, [Clazz.new_($I$(7,1)), Clazz.new_($I$(8,1)), Clazz.new_($I$(9,1).c$$S$I,[null, 0])]);
C$.DEFAULTS=Clazz.array(java.lang.Object, -1, [$I$(5).BORDER_COLOR, C$.PARSERS[1].parseCssValue$S($I$(5).BORDER_STYLE.getDefaultValue$()), C$.PARSERS[2].parseCssValue$S($I$(5).BORDER_WIDTH.getDefaultValue$())]);
C$.borderPainters=Clazz.new_($I$(10,1));
{
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).NONE, Clazz.new_($I$(11,1)));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).HIDDEN, Clazz.new_($I$(11,1)));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).SOLID, Clazz.new_($I$(12,1)));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).DOUBLE, Clazz.new_($I$(13,1)));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).DOTTED, Clazz.new_($I$(14,1).c$$I,[1]));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).DASHED, Clazz.new_($I$(14,1).c$$I,[3]));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).GROOVE, Clazz.new_([$I$(3).GROOVE],$I$(15,1).c$$javax_swing_text_html_CSS_Value));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).RIDGE, Clazz.new_([$I$(3).RIDGE],$I$(15,1).c$$javax_swing_text_html_CSS_Value));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).INSET, Clazz.new_([$I$(3).INSET],$I$(16,1).c$$javax_swing_text_html_CSS_Value));
C$.registerBorderPainter$javax_swing_text_html_CSS_Value$javax_swing_text_html_CSSBorder_BorderPainter($I$(3).OUTSET, Clazz.new_([$I$(3).OUTSET],$I$(16,1).c$$javax_swing_text_html_CSS_Value));
};
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.CSSBorder, "BorderPainter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "NullPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.swing.text.html.CSSBorder','javax.swing.text.html.CSSBorder.BorderPainter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paint$java_awt_Polygon$java_awt_Graphics$java_awt_Color$I',  function (shape, g, color, side) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "SolidPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.swing.text.html.CSSBorder','javax.swing.text.html.CSSBorder.BorderPainter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paint$java_awt_Polygon$java_awt_Graphics$java_awt_Color$I',  function (shape, g, color, side) {
g.setColor$java_awt_Color(color);
g.fillPolygon$java_awt_Polygon(shape);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "StrokePainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.swing.text.html.CSSBorder','javax.swing.text.html.CSSBorder.BorderPainter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintStrokes$java_awt_Rectangle$java_awt_Graphics$I$IA$java_awt_ColorA',  function (r, g, axis, lengthPattern, colorPattern) {
var xAxis=(axis == 0);
var start=0;
var end=(xAxis ? r.width : r.height);
while (start < end){
for (var i=0; i < lengthPattern.length; i++) {
if (start >= end) {
break;
}var length=lengthPattern[i];
var c=colorPattern[i];
if (c != null ) {
var x=r.x + (xAxis ? start : 0);
var y=r.y + (xAxis ? 0 : start);
var width=xAxis ? length : r.width;
var height=xAxis ? r.height : length;
g.setColor$java_awt_Color(c);
g.fillRect$I$I$I$I(x, y, width, height);
}start+=length;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "DoublePainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSSBorder','.StrokePainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paint$java_awt_Polygon$java_awt_Graphics$java_awt_Color$I',  function (shape, g, color, side) {
var r=shape.getBounds$();
var length=Math.max((r.height/3|0), 1);
var lengthPattern=Clazz.array(Integer.TYPE, -1, [length, length]);
var colorPattern=Clazz.array($I$(1), -1, [color, null]);
this.paintStrokes$java_awt_Rectangle$java_awt_Graphics$I$IA$java_awt_ColorA(r, g, 1, lengthPattern, colorPattern);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "DottedDashedPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSSBorder','.StrokePainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['factor']]]

Clazz.newMeth(C$, 'c$$I',  function (factor) {
Clazz.super_(C$, this);
this.factor=factor;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Polygon$java_awt_Graphics$java_awt_Color$I',  function (shape, g, color, side) {
var r=shape.getBounds$();
var length=r.height * this.factor;
var lengthPattern=Clazz.array(Integer.TYPE, -1, [length, length]);
var colorPattern=Clazz.array($I$(1), -1, [color, null]);
this.paintStrokes$java_awt_Rectangle$java_awt_Graphics$I$IA$java_awt_ColorA(r, g, 0, lengthPattern, colorPattern);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "ShadowLightPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSSBorder','.StrokePainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getShadowColor$java_awt_Color',  function (c) {
return $I$(2).getAdjustedColor$java_awt_Color$D(c, -0.3);
}, 1);

Clazz.newMeth(C$, 'getLightColor$java_awt_Color',  function (c) {
return $I$(2).getAdjustedColor$java_awt_Color$D(c, 0.7);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "GrooveRidgePainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSSBorder','.ShadowLightPainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','javax.swing.text.html.CSS.Value']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_CSS_Value',  function (type) {
Clazz.super_(C$, this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Polygon$java_awt_Graphics$java_awt_Color$I',  function (shape, g, color, side) {
var r=shape.getBounds$();
var length=Math.max((r.height/2|0), 1);
var lengthPattern=Clazz.array(Integer.TYPE, -1, [length, length]);
var colorPattern=((side + 1) % 4 < 2) == (this.type === $I$(3).GROOVE )  ? Clazz.array($I$(1), -1, [$I$(4).getShadowColor$java_awt_Color(color), $I$(4).getLightColor$java_awt_Color(color)]) : Clazz.array($I$(1), -1, [$I$(4).getLightColor$java_awt_Color(color), $I$(4).getShadowColor$java_awt_Color(color)]);
this.paintStrokes$java_awt_Rectangle$java_awt_Graphics$I$IA$java_awt_ColorA(r, g, 1, lengthPattern, colorPattern);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CSSBorder, "InsetOutsetPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.html.CSSBorder','.ShadowLightPainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','javax.swing.text.html.CSS.Value']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_html_CSS_Value',  function (type) {
Clazz.super_(C$, this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Polygon$java_awt_Graphics$java_awt_Color$I',  function (shape, g, color, side) {
g.setColor$java_awt_Color(((side + 1) % 4 < 2) == (this.type === $I$(3).INSET )  ? $I$(4).getShadowColor$java_awt_Color(color) : $I$(4).getLightColor$java_awt_Color(color));
g.fillPolygon$java_awt_Polygon(shape);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

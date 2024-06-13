(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'java.awt.BasicStroke',['java.awt.geom.Line2D','.Float'],'java.awt.Color',['java.awt.geom.Rectangle2D','.Float'],'java.awt.geom.Area','java.awt.geom.GeneralPath','StringBuffer','sun.font.AttributeValues','sun.font.EAttribute',['sun.font.Decoration','.DecorationImpl'],'sun.font.Underline']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Decoration", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Label',9],['DecorationImpl',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['VALUES_MASK'],'O',['PLAIN','sun.font.Decoration']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPlainDecoration$',  function () {
return C$.PLAIN;
}, 1);

Clazz.newMeth(C$, 'getDecoration$sun_font_AttributeValues',  function (values) {
if (true || values == null   || !values.anyDefined$I(C$.VALUES_MASK) ) {
return C$.PLAIN;
}values=values.applyIMHighlight$();
return Clazz.new_([values.getForeground$(), values.getBackground$(), values.getSwapColors$(), values.getStrikethrough$(), $I$(11,"getUnderline$I",[values.getUnderline$()]), $I$(11,"getUnderline$I",[values.getInputMethodUnderline$()])],$I$(10,1).c$$java_awt_Paint$java_awt_Paint$Z$Z$sun_font_Underline$sun_font_Underline);
}, 1);

Clazz.newMeth(C$, 'getDecoration$java_util_Map',  function (attributes) {
if (attributes == null ) {
return C$.PLAIN;
}return C$.getDecoration$sun_font_AttributeValues($I$(8).fromMap$java_util_Map(attributes));
}, 1);

Clazz.newMeth(C$, 'drawTextAndDecorations$sun_font_Decoration_Label$java_awt_Graphics2D$F$F',  function (label, g2d, x, y) {
label.handleDraw$java_awt_Graphics2D$F$F(g2d, x, y);
});

Clazz.newMeth(C$, 'getVisualBounds$sun_font_Decoration_Label',  function (label) {
return label.handleGetVisualBounds$();
});

Clazz.newMeth(C$, 'getCharVisualBounds$sun_font_Decoration_Label$I',  function (label, index) {
return label.handleGetCharVisualBounds$I(index);
});

Clazz.newMeth(C$, 'getOutline$sun_font_Decoration_Label$F$F',  function (label, x, y) {
return label.handleGetOutline$F$F(x, y);
});

C$.$static$=function(){C$.$static$=0;
C$.VALUES_MASK=$I$(8,"getMask$sun_font_EAttributeA",[Clazz.array($I$(9), -1, [$I$(9).EFOREGROUND, $I$(9).EBACKGROUND, $I$(9).ESWAP_COLORS, $I$(9).ESTRIKETHROUGH, $I$(9).EUNDERLINE, $I$(9).EINPUT_METHOD_HIGHLIGHT, $I$(9).EINPUT_METHOD_UNDERLINE])]);
C$.PLAIN=Clazz.new_(C$);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Decoration, "Label", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Decoration, "DecorationImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.font.Decoration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fgPaint=null;
this.bgPaint=null;
this.swapColors=false;
this.strikethrough=false;
this.stdUnderline=null;
this.imUnderline=null;
},1);

C$.$fields$=[['Z',['swapColors','strikethrough'],'O',['fgPaint','java.awt.Paint','+bgPaint','stdUnderline','sun.font.Underline','+imUnderline']]]

Clazz.newMeth(C$, 'c$$java_awt_Paint$java_awt_Paint$Z$Z$sun_font_Underline$sun_font_Underline',  function (foreground, background, swapColors, strikethrough, stdUnderline, imUnderline) {
Clazz.super_(C$, this);
this.fgPaint=foreground;
this.bgPaint=background;
this.swapColors=swapColors;
this.strikethrough=strikethrough;
this.stdUnderline=stdUnderline;
this.imUnderline=imUnderline;
}, 1);

Clazz.newMeth(C$, 'areEqual$O$O',  function (lhs, rhs) {
if (lhs == null ) {
return rhs == null ;
} else {
return lhs.equals$O(rhs);
}}, 1);

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
if (rhs === this ) {
return true;
}if (rhs == null ) {
return false;
}var other=null;
try {
other=rhs;
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
if (!(this.swapColors == other.swapColors  && this.strikethrough == other.strikethrough  )) {
return false;
}if (!C$.areEqual$O$O(this.stdUnderline, other.stdUnderline)) {
return false;
}if (!C$.areEqual$O$O(this.fgPaint, other.fgPaint)) {
return false;
}if (!C$.areEqual$O$O(this.bgPaint, other.bgPaint)) {
return false;
}return C$.areEqual$O$O(this.imUnderline, other.imUnderline);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hc=1;
if (this.strikethrough) {
hc|=2;
}if (this.swapColors) {
hc|=4;
}if (this.stdUnderline != null ) {
hc+=this.stdUnderline.hashCode$();
}return hc;
});

Clazz.newMeth(C$, 'getUnderlineMaxY$sun_font_CoreMetrics',  function (cm) {
var maxY=0;
if (this.stdUnderline != null ) {
var ulBottom=cm.underlineOffset;
ulBottom+=this.stdUnderline.getLowerDrawLimit$F(cm.underlineThickness);
maxY=Math.max(maxY, ulBottom);
}if (this.imUnderline != null ) {
var ulBottom=cm.underlineOffset;
ulBottom+=this.imUnderline.getLowerDrawLimit$F(cm.underlineThickness);
maxY=Math.max(maxY, ulBottom);
}return maxY;
}, p$1);

Clazz.newMeth(C$, 'drawTextAndEmbellishments$sun_font_Decoration_Label$java_awt_Graphics2D$F$F',  function (label, g2d, x, y) {
label.handleDraw$java_awt_Graphics2D$F$F(g2d, x, y);
if (!this.strikethrough && this.stdUnderline == null   && this.imUnderline == null  ) {
return;
}var x1=x;
var x2=x1 + label.getLogicalBounds$().getWidth$();
var cm=label.getCoreMetrics$();
if (this.strikethrough) {
var savedStroke=g2d.getStroke$();
g2d.setStroke$java_awt_Stroke(Clazz.new_($I$(1,1).c$$F$I$I,[cm.strikethroughThickness, 0, 0]));
var strikeY=y + cm.strikethroughOffset;
g2d.draw$java_awt_Shape(Clazz.new_($I$(2,1).c$$F$F$F$F,[x1, strikeY, x2, strikeY]));
g2d.setStroke$java_awt_Stroke(savedStroke);
}var ulOffset=cm.underlineOffset;
var ulThickness=cm.underlineThickness;
if (this.stdUnderline != null ) {
this.stdUnderline.drawUnderline$java_awt_Graphics2D$F$F$F$F(g2d, ulThickness, x1, x2, y + ulOffset);
}if (this.imUnderline != null ) {
this.imUnderline.drawUnderline$java_awt_Graphics2D$F$F$F$F(g2d, ulThickness, x1, x2, y + ulOffset);
}}, p$1);

Clazz.newMeth(C$, 'drawTextAndDecorations$sun_font_Decoration_Label$java_awt_Graphics2D$F$F',  function (label, g2d, x, y) {
if (this.fgPaint == null  && this.bgPaint == null   && this.swapColors == false  ) {
p$1.drawTextAndEmbellishments$sun_font_Decoration_Label$java_awt_Graphics2D$F$F.apply(this, [label, g2d, x, y]);
} else {
var savedPaint=g2d.getPaint$();
var foreground;
var background;
if (this.swapColors) {
background=this.fgPaint == null  ? savedPaint : this.fgPaint;
if (this.bgPaint == null ) {
if (Clazz.instanceOf(background, "java.awt.Color")) {
var bg=background;
var brightness=33 * bg.getRed$() + 53 * bg.getGreen$() + 14 * bg.getBlue$();
foreground=brightness > 18500 ? $I$(3).BLACK : $I$(3).WHITE;
} else {
foreground=$I$(3).WHITE;
}} else {
foreground=this.bgPaint;
}} else {
foreground=this.fgPaint == null  ? savedPaint : this.fgPaint;
background=this.bgPaint;
}if (background != null ) {
var bgArea=label.getLogicalBounds$();
bgArea=Clazz.new_([x + bgArea.getX$(), y + bgArea.getY$(), bgArea.getWidth$(), bgArea.getHeight$()],$I$(4,1).c$$F$F$F$F);
g2d.setPaint$java_awt_Paint(background);
g2d.fill$java_awt_Shape(bgArea);
}g2d.setPaint$java_awt_Paint(foreground);
p$1.drawTextAndEmbellishments$sun_font_Decoration_Label$java_awt_Graphics2D$F$F.apply(this, [label, g2d, x, y]);
g2d.setPaint$java_awt_Paint(savedPaint);
}});

Clazz.newMeth(C$, 'getVisualBounds$sun_font_Decoration_Label',  function (label) {
var visBounds=label.handleGetVisualBounds$();
if (this.swapColors || this.bgPaint != null   || this.strikethrough  || this.stdUnderline != null   || this.imUnderline != null  ) {
var minX=0;
var lb=label.getLogicalBounds$();
var minY=0;
var maxY=0;
if (this.swapColors || this.bgPaint != null  ) {
minY=lb.getY$();
maxY=minY + lb.getHeight$();
}maxY=Math.max(maxY, p$1.getUnderlineMaxY$sun_font_CoreMetrics.apply(this, [label.getCoreMetrics$()]));
var ab=Clazz.new_([minX, minY, lb.getWidth$(), maxY - minY],$I$(4,1).c$$F$F$F$F);
visBounds.add$java_awt_geom_Rectangle2D(ab);
}return visBounds;
});

Clazz.newMeth(C$, 'getOutline$sun_font_Decoration_Label$F$F',  function (label, x, y) {
if (!this.strikethrough && this.stdUnderline == null   && this.imUnderline == null  ) {
return label.handleGetOutline$F$F(x, y);
}var cm=label.getCoreMetrics$();
var ulThickness=cm.underlineThickness;
var ulOffset=cm.underlineOffset;
var lb=label.getLogicalBounds$();
var x1=x;
var x2=x1 + lb.getWidth$();
var area=null;
if (this.stdUnderline != null ) {
var ul=this.stdUnderline.getUnderlineShape$F$F$F$F(ulThickness, x1, x2, y + ulOffset);
area=Clazz.new_($I$(5,1).c$$java_awt_Shape,[ul]);
}if (this.strikethrough) {
var stStroke=Clazz.new_($I$(1,1).c$$F$I$I,[cm.strikethroughThickness, 0, 0]);
var shiftY=y + cm.strikethroughOffset;
var line=Clazz.new_($I$(2,1).c$$F$F$F$F,[x1, shiftY, x2, shiftY]);
var slArea=Clazz.new_([stStroke.createStrokedShape$java_awt_Shape(line)],$I$(5,1).c$$java_awt_Shape);
if (area == null ) {
area=slArea;
} else {
area.add$java_awt_geom_Area(slArea);
}}if (this.imUnderline != null ) {
var ul=this.imUnderline.getUnderlineShape$F$F$F$F(ulThickness, x1, x2, y + ulOffset);
var ulArea=Clazz.new_($I$(5,1).c$$java_awt_Shape,[ul]);
if (area == null ) {
area=ulArea;
} else {
area.add$java_awt_geom_Area(ulArea);
}}area.add$java_awt_geom_Area(Clazz.new_([label.handleGetOutline$F$F(x, y)],$I$(5,1).c$$java_awt_Shape));
return Clazz.new_($I$(6,1).c$$java_awt_Shape,[area]);
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(7,1));
buf.append$S(C$.superclazz.prototype.toString.apply(this, []));
buf.append$S("[");
if (this.fgPaint != null ) buf.append$S("fgPaint: " + this.fgPaint);
if (this.bgPaint != null ) buf.append$S(" bgPaint: " + this.bgPaint);
if (this.swapColors) buf.append$S(" swapColors: true");
if (this.strikethrough) buf.append$S(" strikethrough: true");
if (this.stdUnderline != null ) buf.append$S(" stdUnderline: " + this.stdUnderline);
if (this.imUnderline != null ) buf.append$S(" imUnderline: " + this.imUnderline);
buf.append$S("]");
return buf.toString();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

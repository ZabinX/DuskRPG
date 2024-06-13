(function(){var P$=Clazz.newPackage("javax.swing.border"),I$=[[0,'java.awt.Point','java.awt.Rectangle','java.awt.Insets','javax.swing.border.AbstractBorder','javax.swing.UIManager','java.awt.Dimension',['java.awt.Component','.BaselineResizeBehavior'],'java.awt.Font']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TitledBorder", null, 'javax.swing.border.AbstractBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textLoc=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['titlePosition','titleJustification'],'S',['title'],'O',['border','javax.swing.border.Border','titleFont','java.awt.Font','titleColor','java.awt.Color','textLoc','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$S',  function (title) {
C$.c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color.apply(this, [null, title, 4, 0, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border',  function (border) {
C$.c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color.apply(this, [border, "", 4, 0, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S',  function (border, title) {
C$.c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color.apply(this, [border, title, 4, 0, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S$I$I',  function (border, title, titleJustification, titlePosition) {
C$.c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color.apply(this, [border, title, titleJustification, titlePosition, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S$I$I$java_awt_Font',  function (border, title, titleJustification, titlePosition, titleFont) {
C$.c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color.apply(this, [border, title, titleJustification, titlePosition, titleFont, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_border_Border$S$I$I$java_awt_Font$java_awt_Color',  function (border, title, titleJustification, titlePosition, titleFont, titleColor) {
Clazz.super_(C$, this);
this.title=title;
this.border=border;
this.titleFont=titleFont;
this.titleColor=titleColor;
this.setTitleJustification$I(titleJustification);
this.setTitlePosition$I(titlePosition);
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g0, x, y, width, height) {
var border=this.getBorder$();
if (this.getTitle$() == null  || this.getTitle$().equals$O("") ) {
if (border != null ) {
border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g0, x, y, width, height);
}return;
}var grooveRect=Clazz.new_([x + 2, y + 2, width - (4), height - (4)],$I$(2,1).c$$I$I$I$I);
var font=g0.getFont$();
var color=g0.getColor$();
g0.setFont$java_awt_Font(this.getFont$java_awt_Component(c));
var fm=this.getFont$java_awt_Component(c).getFontMetrics$();
var fontHeight=fm.getHeight$();
var descent=fm.getDescent$();
var ascent=fm.getAscent$();
var diff;
var stringWidth=fm.stringWidth$S(this.getTitle$());
var insets;
if (border != null ) {
insets=border.getBorderInsets$java_awt_Component(c);
} else {
insets=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 0, 0]);
}var titlePos=this.getTitlePosition$();
switch (titlePos) {
case 1:
diff=ascent + descent + (Math.max(2, 4) - 2) ;
grooveRect.y+=diff;
grooveRect.height-=diff;
this.textLoc.y=grooveRect.y - (descent + 2);
break;
case 2:
case 0:
diff=Math.max(0, (((ascent/2|0)) + 2) - 2);
grooveRect.y+=diff;
grooveRect.height-=diff;
this.textLoc.y=(grooveRect.y - descent) + ((insets.top + ascent + descent )/2|0);
break;
case 3:
this.textLoc.y=grooveRect.y + insets.top + ascent + 2 ;
break;
case 4:
this.textLoc.y=(grooveRect.y + grooveRect.height) - (insets.bottom + descent + 2 );
break;
case 5:
grooveRect.height-=(fontHeight/2|0);
this.textLoc.y=((grooveRect.y + grooveRect.height) - descent) + (((ascent + descent) - insets.bottom)/2|0);
break;
case 6:
grooveRect.height-=fontHeight;
this.textLoc.y=grooveRect.y + grooveRect.height + ascent + 2 ;
break;
}
var justification=this.getTitleJustification$();
if ($I$(4).isLeftToRight$java_awt_Component(c)) {
if (justification == 4 || justification == 0 ) {
justification=1;
} else if (justification == 5) {
justification=3;
}} else {
if (justification == 4 || justification == 0 ) {
justification=3;
} else if (justification == 5) {
justification=1;
}}switch (justification) {
case 1:
this.textLoc.x=grooveRect.x + 5 + insets.left ;
break;
case 3:
this.textLoc.x=(grooveRect.x + grooveRect.width) - (stringWidth + 5 + insets.right );
break;
case 2:
this.textLoc.x=grooveRect.x + (((grooveRect.width - stringWidth)/2|0));
break;
}
if (border != null ) {
var clip0=g0.getClipBounds$();
if (((titlePos == 2 || titlePos == 0 ) && (grooveRect.y > this.textLoc.y - ascent) ) || (titlePos == 5 && (grooveRect.y + grooveRect.height < this.textLoc.y + descent) ) ) {
var clipRect=Clazz.new_($I$(2,1));
clipRect.setBounds$java_awt_Rectangle(clip0);
if (C$.computeIntersection$java_awt_Rectangle$I$I$I$I(clipRect, x, y, this.textLoc.x - 1 - x , height)) {
var g=g0.create$();
g.setClip$java_awt_Shape(clipRect);
border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g, grooveRect.x, grooveRect.y, grooveRect.width, grooveRect.height);
g.dispose$();
}clipRect.setBounds$java_awt_Rectangle(clip0);
if (C$.computeIntersection$java_awt_Rectangle$I$I$I$I(clipRect, this.textLoc.x + stringWidth + 1 , y, x + width - (this.textLoc.x + stringWidth + 1 ), height)) {
var g=g0.create$();
g.setClip$java_awt_Shape(clipRect);
border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g, grooveRect.x, grooveRect.y, grooveRect.width, grooveRect.height);
g.dispose$();
}if (titlePos == 2 || titlePos == 0 ) {
clipRect.setBounds$java_awt_Rectangle(clip0);
if (C$.computeIntersection$java_awt_Rectangle$I$I$I$I(clipRect, this.textLoc.x - 1, this.textLoc.y + descent, stringWidth + 2, y + height - this.textLoc.y - descent)) {
var g=g0.create$();
g.setClip$java_awt_Shape(clipRect);
border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g, grooveRect.x, grooveRect.y, grooveRect.width, grooveRect.height);
g.dispose$();
}} else {
clipRect.setBounds$java_awt_Rectangle(clip0);
if (C$.computeIntersection$java_awt_Rectangle$I$I$I$I(clipRect, this.textLoc.x - 1, y, stringWidth + 2, this.textLoc.y - ascent - y )) {
var g=g0.create$();
g.setClip$java_awt_Shape(clipRect);
border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g, grooveRect.x, grooveRect.y, grooveRect.width, grooveRect.height);
g.dispose$();
}}} else {
border.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I(c, g0, grooveRect.x, grooveRect.y, grooveRect.width, grooveRect.height);
}}g0.setColor$java_awt_Color(this.getTitleColor$());
g0.drawString$S$I$I(this.getTitle$(), this.textLoc.x, this.textLoc.y);
g0.setFont$java_awt_Font(font);
g0.setColor$java_awt_Color(color);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$java_awt_Component$java_awt_Insets(c, Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 0, 0]));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
var fm;
var descent=0;
var ascent=16;
var height=16;
var border=this.getBorder$();
if (border != null ) {
if (Clazz.instanceOf(border, "javax.swing.border.AbstractBorder")) {
(border).getBorderInsets$java_awt_Component$java_awt_Insets(c, insets);
} else {
var i=border.getBorderInsets$java_awt_Component(c);
insets.top=i.top;
insets.right=i.right;
insets.bottom=i.bottom;
insets.left=i.left;
}} else {
insets.left=insets.top=insets.right=insets.bottom=0;
}insets.left+=4;
insets.right+=4;
insets.top+=4;
insets.bottom+=4;
if (c == null  || this.getTitle$() == null   || this.getTitle$().equals$O("") ) {
return insets;
}var font=this.getFont$java_awt_Component(c);
fm=c.getFontMetrics$java_awt_Font(font);
if (fm != null ) {
descent=fm.getDescent$();
ascent=fm.getAscent$();
height=fm.getHeight$();
}switch (this.getTitlePosition$()) {
case 1:
insets.top+=ascent + descent + (Math.max(2, 4) - 2) ;
break;
case 2:
case 0:
insets.top+=ascent + descent;
break;
case 3:
insets.top+=ascent + descent + 2 ;
break;
case 4:
insets.bottom+=ascent + descent + 2 ;
break;
case 5:
insets.bottom+=ascent + descent;
break;
case 6:
insets.bottom+=height;
break;
}
return insets;
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return false;
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'getBorder$',  function () {
var b=this.border;
if (b == null ) b=$I$(5).getBorder$O("TitledBorder.border");
return b;
});

Clazz.newMeth(C$, 'getTitlePosition$',  function () {
if (this.titlePosition == 0) {
var value=$I$(5).get$O("TitledBorder.position");
if (Clazz.instanceOf(value, "java.lang.String")) {
var s=value;
if ("ABOVE_TOP".equalsIgnoreCase$S(s)) {
return 1;
} else if ("TOP".equalsIgnoreCase$S(s)) {
return 2;
} else if ("BELOW_TOP".equalsIgnoreCase$S(s)) {
return 3;
} else if ("ABOVE_BOTTOM".equalsIgnoreCase$S(s)) {
return 4;
} else if ("BOTTOM".equalsIgnoreCase$S(s)) {
return 5;
} else if ("BELOW_BOTTOM".equalsIgnoreCase$S(s)) {
return 6;
}} else if (Clazz.instanceOf(value, "java.lang.Integer")) {
var i=(value).$c();
if (i >= 0 && i <= 6 ) {
return i;
}}}return this.titlePosition;
});

Clazz.newMeth(C$, 'getTitleJustification$',  function () {
return this.titleJustification;
});

Clazz.newMeth(C$, 'getTitleFont$',  function () {
var f=this.titleFont;
if (f == null ) f=$I$(5).getFont$O("TitledBorder.font");
return f;
});

Clazz.newMeth(C$, 'getTitleColor$',  function () {
var c=this.titleColor;
if (c == null ) c=$I$(5).getColor$O("TitledBorder.titleColor");
return c;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
this.title=title;
});

Clazz.newMeth(C$, 'setBorder$javax_swing_border_Border',  function (border) {
this.border=border;
});

Clazz.newMeth(C$, 'setTitlePosition$I',  function (titlePosition) {
switch (titlePosition) {
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 0:
this.titlePosition=titlePosition;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[titlePosition + " is not a valid title position."]);
}
});

Clazz.newMeth(C$, 'setTitleJustification$I',  function (titleJustification) {
switch (titleJustification) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
this.titleJustification=titleJustification;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[titleJustification + " is not a valid title justification."]);
}
});

Clazz.newMeth(C$, 'setTitleFont$java_awt_Font',  function (titleFont) {
this.titleFont=titleFont;
});

Clazz.newMeth(C$, 'setTitleColor$java_awt_Color',  function (titleColor) {
this.titleColor=titleColor;
});

Clazz.newMeth(C$, 'getMinimumSize$java_awt_Component',  function (c) {
var insets=this.getBorderInsets$java_awt_Component(c);
var minSize=Clazz.new_($I$(6,1).c$$I$I,[insets.right + insets.left, insets.top + insets.bottom]);
var font=this.getFont$java_awt_Component(c);
var fm=c.getFontMetrics$java_awt_Font(font);
switch (this.getTitlePosition$()) {
case 1:
case 6:
minSize.width=Math.max(fm.stringWidth$S(this.getTitle$()), minSize.width);
break;
case 3:
case 4:
case 2:
case 5:
case 0:
default:
minSize.width+=fm.stringWidth$S(this.getTitle$());
}
return minSize;
});

Clazz.newMeth(C$, 'getBaseline$java_awt_Component$I$I',  function (c, width, height) {
if (c == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Must supply non-null component"]);
}if (height < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Height must be >= 0"]);
}var title=this.getTitle$();
if (title != null  && !"".equals$O(title) ) {
var font=this.getFont$java_awt_Component(c);
var border2=this.getBorder$();
var borderInsets;
if (border2 != null ) {
borderInsets=border2.getBorderInsets$java_awt_Component(c);
} else {
borderInsets=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 0, 0]);
}var fm=c.getFontMetrics$java_awt_Font(font);
var fontHeight=fm.getHeight$();
var descent=fm.getDescent$();
var ascent=fm.getAscent$();
var y=2;
var h=height - 4;
var diff;
switch (this.getTitlePosition$()) {
case 1:
diff=ascent + descent + (Math.max(2, 4) - 2) ;
return y + diff - (descent + 2);
case 2:
case 0:
diff=Math.max(0, (((ascent/2|0)) + 2) - 2);
return (y + diff - descent) + ((borderInsets.top + ascent + descent )/2|0);
case 3:
return y + borderInsets.top + ascent + 2 ;
case 4:
return (y + h) - (borderInsets.bottom + descent + 2 );
case 5:
h-=(fontHeight/2|0);
return ((y + h) - descent) + (((ascent + descent) - borderInsets.bottom)/2|0);
case 6:
h-=fontHeight;
return y + h + ascent + 2 ;
}
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$java_awt_Component',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$java_awt_Component.apply(this, [c]);
switch (this.getTitlePosition$()) {
case 1:
case 2:
case 0:
case 3:
return $I$(7).CONSTANT_ASCENT;
case 4:
case 5:
case 6:
return $I$(7).CONSTANT_DESCENT;
}
return $I$(7).OTHER;
});

Clazz.newMeth(C$, 'getFont$java_awt_Component',  function (c) {
var font;
if ((font=this.getTitleFont$()) != null ) {
return font;
} else if (c != null  && (font=c.getFont$()) != null  ) {
return font;
}return Clazz.new_($I$(8,1).c$$S$I$I,["Dialog", 0, 12]);
});

Clazz.newMeth(C$, 'computeIntersection$java_awt_Rectangle$I$I$I$I',  function (dest, rx, ry, rw, rh) {
var x1=Math.max(rx, dest.x);
var x2=Math.min(rx + rw, dest.x + dest.width);
var y1=Math.max(ry, dest.y);
var y2=Math.min(ry + rh, dest.y + dest.height);
dest.x=x1;
dest.y=y1;
dest.width=x2 - x1;
dest.height=y2 - y1;
if (dest.width <= 0 || dest.height <= 0 ) {
return false;
}return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

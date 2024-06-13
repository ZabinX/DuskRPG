(function(){var P$=Clazz.newPackage("javax.swing.border"),p$1={},I$=[[0,'java.awt.Color','java.awt.Insets']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MatteBorder", null, 'javax.swing.border.EmptyBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['color','java.awt.Color','tileIcon','javax.swing.Icon']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$java_awt_Color',  function (top, left, bottom, right, matteColor) {
;C$.superclazz.c$$I$I$I$I.apply(this,[top, left, bottom, right]);C$.$init$.apply(this);
this.color=matteColor;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Insets$java_awt_Color',  function (borderInsets, matteColor) {
;C$.superclazz.c$$java_awt_Insets.apply(this,[borderInsets]);C$.$init$.apply(this);
this.color=matteColor;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$javax_swing_Icon',  function (top, left, bottom, right, tileIcon) {
;C$.superclazz.c$$I$I$I$I.apply(this,[top, left, bottom, right]);C$.$init$.apply(this);
this.tileIcon=tileIcon;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Insets$javax_swing_Icon',  function (borderInsets, tileIcon) {
;C$.superclazz.c$$java_awt_Insets.apply(this,[borderInsets]);C$.$init$.apply(this);
this.tileIcon=tileIcon;
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (tileIcon) {
C$.c$$I$I$I$I$javax_swing_Icon.apply(this, [-1, -1, -1, -1, tileIcon]);
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
var insets=this.getBorderInsets$java_awt_Component(c);
var oldColor=g.getColor$();
g.translate$I$I(x, y);
if (this.tileIcon != null ) {
this.color=(this.tileIcon.getIconWidth$() == -1) ? $I$(1).gray : null;
}if (this.color != null ) {
g.setColor$java_awt_Color(this.color);
g.fillRect$I$I$I$I(0, 0, width - insets.right, insets.top);
g.fillRect$I$I$I$I(0, insets.top, insets.left, height - insets.top);
g.fillRect$I$I$I$I(insets.left, height - insets.bottom, width - insets.left, insets.bottom);
g.fillRect$I$I$I$I(width - insets.right, 0, insets.right, height - insets.bottom);
} else if (this.tileIcon != null ) {
var tileW=this.tileIcon.getIconWidth$();
var tileH=this.tileIcon.getIconHeight$();
var xpos;
var ypos;
var startx;
var starty;
var cg;
cg=g.create$();
cg.clipRect$I$I$I$I(0, 0, width, insets.top);
for (ypos=0; insets.top - ypos > 0; ypos+=tileH) {
for (xpos=0; width - xpos > 0; xpos+=tileW) {
this.tileIcon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, cg, xpos, ypos);
}
}
cg.dispose$();
cg=g.create$();
cg.clipRect$I$I$I$I(0, insets.top, insets.left, height - insets.top);
starty=insets.top - (insets.top % tileH);
startx=0;
for (ypos=starty; height - ypos > 0; ypos+=tileH) {
for (xpos=startx; insets.left - xpos > 0; xpos+=tileW) {
this.tileIcon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, cg, xpos, ypos);
}
}
cg.dispose$();
cg=g.create$();
cg.clipRect$I$I$I$I(insets.left, height - insets.bottom, width - insets.left, insets.bottom);
starty=(height - insets.bottom) - ((height - insets.bottom) % tileH);
startx=insets.left - (insets.left % tileW);
for (ypos=starty; height - ypos > 0; ypos+=tileH) {
for (xpos=startx; width - xpos > 0; xpos+=tileW) {
this.tileIcon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, cg, xpos, ypos);
}
}
cg.dispose$();
cg=g.create$();
cg.clipRect$I$I$I$I(width - insets.right, insets.top, insets.right, height - insets.top - insets.bottom );
starty=insets.top - (insets.top % tileH);
startx=width - insets.right - ((width - insets.right) % tileW) ;
for (ypos=starty; height - ypos > 0; ypos+=tileH) {
for (xpos=startx; width - xpos > 0; xpos+=tileW) {
this.tileIcon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, cg, xpos, ypos);
}
}
cg.dispose$();
}g.translate$I$I(-x, -y);
g.setColor$java_awt_Color(oldColor);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return this.getBorderInsets$();
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
return p$1.computeInsets$java_awt_Insets.apply(this, [insets]);
});

Clazz.newMeth(C$, 'getBorderInsets$',  function () {
return p$1.computeInsets$java_awt_Insets.apply(this, [Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, 0, 0])]);
});

Clazz.newMeth(C$, 'computeInsets$java_awt_Insets',  function (insets) {
if (this.tileIcon != null  && this.top == -1  && this.bottom == -1  && this.left == -1  && this.right == -1 ) {
var w=this.tileIcon.getIconWidth$();
var h=this.tileIcon.getIconHeight$();
insets.top=h;
insets.right=w;
insets.bottom=h;
insets.left=w;
} else {
insets.left=this.left;
insets.top=this.top;
insets.right=this.right;
insets.bottom=this.bottom;
}return insets;
}, p$1);

Clazz.newMeth(C$, 'getMatteColor$',  function () {
return this.color;
});

Clazz.newMeth(C$, 'getTileIcon$',  function () {
return this.tileIcon;
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return this.color != null ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

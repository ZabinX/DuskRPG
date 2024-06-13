(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'javax.swing.UIManager','java.awt.Dimension','swingjs.plaf.JSComponentUI']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicArrowButton", null, 'javax.swing.JButton', 'javax.swing.SwingConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['direction'],'O',['shadow','java.awt.Color','+darkShadow','+highlight']]]

Clazz.newMeth(C$, 'c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color',  function (direction, background, shadow, darkShadow, highlight) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setRequestFocusEnabled$Z(false);
this.setDirection$I(direction);
this.setBackground$java_awt_Color(background);
this.shadow=shadow;
this.darkShadow=darkShadow;
this.highlight=highlight;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (direction) {
C$.c$$I$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color.apply(this, [direction, $I$(1).getColor$O("control"), $I$(1).getColor$O("controlShadow"), $I$(1).getColor$O("controlDkShadow"), $I$(1).getColor$O("controlLtHighlight")]);
}, 1);

Clazz.newMeth(C$, 'getDirection$',  function () {
return this.direction;
});

Clazz.newMeth(C$, 'setDirection$I',  function (direction) {
this.direction=direction;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
var origColor;
var isPressed;
var isEnabled;
var w;
var h;
var size;
w=this.getSize$().width;
h=this.getSize$().height;
origColor=g.getColor$();
isPressed=this.getModel$().isPressed$();
isEnabled=this.isEnabled$();
g.setColor$java_awt_Color(this.getBackground$());
g.fillRect$I$I$I$I(1, 1, w - 2, h - 2);
if (this.getBorder$() != null  && !(Clazz.instanceOf(this.getBorder$(), "javax.swing.plaf.UIResource")) ) {
this.paintBorder$java_awt_Graphics(g);
} else if (isPressed) {
g.setColor$java_awt_Color(this.shadow);
g.drawRect$I$I$I$I(0, 0, w - 1, h - 1);
} else {
g.drawLine$I$I$I$I(0, 0, 0, h - 1);
g.drawLine$I$I$I$I(1, 0, w - 2, 0);
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(1, 1, 1, h - 3);
g.drawLine$I$I$I$I(2, 1, w - 3, 1);
g.setColor$java_awt_Color(this.shadow);
g.drawLine$I$I$I$I(1, h - 2, w - 2, h - 2);
g.drawLine$I$I$I$I(w - 2, 1, w - 2, h - 3);
g.setColor$java_awt_Color(this.darkShadow);
g.drawLine$I$I$I$I(0, h - 1, w - 1, h - 1);
g.drawLine$I$I$I$I(w - 1, h - 1, w - 1, 0);
}if (h >= 5 && w >= 5 ) {
if (isPressed) {
g.translate$I$I(1, 1);
}size=Math.min(((h - 4)/3|0), ((w - 4)/3|0));
size=Math.max(size, 2);
this.paintTriangle$java_awt_Graphics$I$I$I$I$Z(g, ((w - size)/2|0), ((h - size)/2|0), size, this.direction, isEnabled);
if (isPressed) {
g.translate$I$I(-1, -1);
}}g.setColor$java_awt_Color(origColor);
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return Clazz.new_($I$(2,1).c$$I$I,[16, 16]);
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return Clazz.new_($I$(2,1).c$$I$I,[5, 5]);
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return $I$(3).ANY_SIZE;
});

Clazz.newMeth(C$, 'isFocusTraversable$',  function () {
return false;
});

Clazz.newMeth(C$, 'paintTriangle$java_awt_Graphics$I$I$I$I$Z',  function (g, x, y, size, direction, isEnabled) {
var oldColor=g.getColor$();
var mid;
var i;
var j;
j=0;
size=Math.max(size, 2);
mid=((size/2|0)) - 1;
g.translate$I$I(x, y);
if (isEnabled) g.setColor$java_awt_Color(this.darkShadow);
 else g.setColor$java_awt_Color(this.shadow);
switch (direction) {
case 1:
for (i=0; i < size; i++) {
g.drawLine$I$I$I$I(mid - i, i, mid + i, i);
}
if (!isEnabled) {
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(mid - i + 2, i, mid + i, i);
}break;
case 5:
if (!isEnabled) {
g.translate$I$I(1, 1);
g.setColor$java_awt_Color(this.highlight);
for (i=size - 1; i >= 0; i--) {
g.drawLine$I$I$I$I(mid - i, j, mid + i, j);
++j;
}
g.translate$I$I(-1, -1);
g.setColor$java_awt_Color(this.shadow);
}j=0;
for (i=size - 1; i >= 0; i--) {
g.drawLine$I$I$I$I(mid - i, j, mid + i, j);
++j;
}
break;
case 7:
for (i=0; i < size; i++) {
g.drawLine$I$I$I$I(i, mid - i, i, mid + i);
}
if (!isEnabled) {
g.setColor$java_awt_Color(this.highlight);
g.drawLine$I$I$I$I(i, mid - i + 2, i, mid + i);
}break;
case 3:
if (!isEnabled) {
g.translate$I$I(1, 1);
g.setColor$java_awt_Color(this.highlight);
for (i=size - 1; i >= 0; i--) {
g.drawLine$I$I$I$I(j, mid - i, j, mid + i);
++j;
}
g.translate$I$I(-1, -1);
g.setColor$java_awt_Color(this.shadow);
}j=0;
for (i=size - 1; i >= 0; i--) {
g.drawLine$I$I$I$I(j, mid - i, j, mid + i);
++j;
}
break;
}
g.translate$I$I(-x, -y);
g.setColor$java_awt_Color(oldColor);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

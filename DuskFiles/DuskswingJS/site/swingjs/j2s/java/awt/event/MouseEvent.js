(function(){var P$=Clazz.newPackage("java.awt.event"),p$1={},I$=[[0,'java.awt.Point','StringBuilder','java.awt.Toolkit','java.awt.event.InputEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MouseEvent", null, 'java.awt.event.InputEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.popupTrigger=false;
},1);

C$.$fields$=[['Z',['popupTrigger'],'I',['x','y','xAbs','yAbs','clickCount','button']]]

Clazz.newMeth(C$, 'getLocationOnScreen$',  function () {
return Clazz.new_($I$(1,1).c$$I$I,[this.xAbs, this.yAbs]);
});

Clazz.newMeth(C$, 'getXOnScreen$',  function () {
return this.xAbs;
});

Clazz.newMeth(C$, 'getYOnScreen$',  function () {
return this.yAbs;
});

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$Z$I',  function (source, id, when, modifiers, x, y, clickCount, popupTrigger, button) {
C$.c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I.apply(this, [source, id, when, modifiers, x, y, 0, 0, clickCount, popupTrigger, button]);
var eventLocationOnScreen=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
try {
eventLocationOnScreen=source.getLocationOnScreen$();
this.xAbs=eventLocationOnScreen.x + x;
this.yAbs=eventLocationOnScreen.y + y;
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.IllegalComponentStateException")){
this.xAbs=0;
this.yAbs=0;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$Z',  function (source, id, when, modifiers, x, y, clickCount, popupTrigger) {
C$.c$$java_awt_Component$I$J$I$I$I$I$Z$I.apply(this, [source, id, when, modifiers, x, y, clickCount, popupTrigger, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I',  function (source, id, when, modifiers, x, y, xAbs, yAbs, clickCount, popupTrigger, button) {
;C$.superclazz.c$$java_awt_Component$I$J$I.apply(this,[source, id, when, modifiers]);C$.$init$.apply(this);
this.x=x;
this.y=y;
this.xAbs=xAbs;
this.yAbs=yAbs;
this.clickCount=clickCount;
this.popupTrigger=popupTrigger;
if (button < 0 || button > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid button value"]);
}this.button=button;
if ((this.getModifiers$() != 0) && (this.getModifiersEx$() == 0) ) {
p$1.setNewModifiers.apply(this, []);
} else if ((this.getModifiers$() == 0) && (this.getModifiersEx$() != 0 || button != 0 ) ) {
p$1.setOldModifiers.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getPoint$',  function () {
var x;
var y;
{
x=this.x;
y=this.y;
}return Clazz.new_($I$(1,1).c$$I$I,[x, y]);
});

Clazz.newMeth(C$, 'translatePoint$I$I',  function (x, y) {
this.x+=x;
this.y+=y;
});

Clazz.newMeth(C$, 'getClickCount$',  function () {
return this.clickCount;
});

Clazz.newMeth(C$, 'getButton$',  function () {
return this.button;
});

Clazz.newMeth(C$, 'isPopupTrigger$',  function () {
return this.popupTrigger;
});

Clazz.newMeth(C$, 'getMouseModifiersText$I',  function (modifiers) {
var buf=Clazz.new_($I$(2,1));
if ((modifiers & 8) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.alt", "Alt"));
buf.append$S("+");
}if ((modifiers & 4) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.meta", "Meta"));
buf.append$S("+");
}if ((modifiers & 2) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.control", "Ctrl"));
buf.append$S("+");
}if ((modifiers & 1) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.shift", "Shift"));
buf.append$S("+");
}if ((modifiers & 32) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.altGraph", "Alt Graph"));
buf.append$S("+");
}if ((modifiers & 16) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.button1", "Button1"));
buf.append$S("+");
}if ((modifiers & 8) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.button2", "Button2"));
buf.append$S("+");
}if ((modifiers & 4) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.button3", "Button3"));
buf.append$S("+");
}if (buf.length$() > 0) {
buf.setLength$I(buf.length$() - 1);
}return buf.toString();
}, 1);

Clazz.newMeth(C$, 'paramString$',  function () {
var str=Clazz.new_($I$(2,1).c$$I,[80]);
str.append$S(C$.getIdString$I(this.id));
str.append$S(",(" + this.x).append$S("," + this.y).append$S("," + Long.$s(this.when)).append$S(")");
str.append$S(",absolute(").append$S("" + this.xAbs).append$S(",").append$S("" + this.yAbs).append$S(")");
str.append$S(",button=").append$S("" + this.getButton$());
if (this.getModifiers$() != 0) {
str.append$S(",modifiers=").append$S(C$.getMouseModifiersText$I(this.modifiers));
}if (this.getModifiersEx$() != 0) {
str.append$S(",extModifiers=").append$S($I$(4).getModifiersExText$I(this.modifiers));
}str.append$S(",clickCount=").append$S("" + this.clickCount);
return str.toString();
});

Clazz.newMeth(C$, 'getIdString$I',  function (id) {
switch (id) {
case 501:
return "MOUSE_PRESSED";
case 502:
return "MOUSE_RELEASED";
case 500:
return "MOUSE_CLICKED";
case 504:
return "MOUSE_ENTERED";
case 505:
return "MOUSE_EXITED";
case 503:
return "MOUSE_MOVED";
case 506:
return "MOUSE_DRAGGED";
case 507:
return "MOUSE_WHEEL";
default:
return "unknown type";
}
}, 1);

Clazz.newMeth(C$, 'setNewModifiers',  function () {
if (this.id == 501 || this.id == 502  || this.id == 500 ) {
if ((this.modifiers & 16) != 0) {
this.button=1;
this.modifiers&=~4;
if (this.id != 501) {
this.modifiers&=~1024;
}} else if ((this.modifiers & 4) != 0) {
this.button=3;
this.modifiers&=~16;
if (this.id != 501) {
this.modifiers&=~(4352);
}} else if ((this.modifiers & 8) != 0) {
this.button=2;
this.modifiers&=~16;
if (this.id != 501) {
this.modifiers&=~2048;
}}if ((this.modifiers & 8) != 0) {
this.modifiers|=512;
}if ((this.modifiers & 1) != 0) {
this.modifiers|=64;
}if ((this.modifiers & 2) != 0) {
this.modifiers|=128;
}if ((this.modifiers & 32) != 0) {
this.modifiers|=8192;
}if (this.id == 501) {
if ((this.modifiers & 16) != 0) {
this.modifiers|=1024;
}if ((this.modifiers & 8) != 0) {
this.modifiers|=2048;
}if ((this.modifiers & 4) != 0) {
this.modifiers|=4096;
}if ((this.modifiers & 4) != 0) {
this.modifiers|=256;
}}}}, p$1);

Clazz.newMeth(C$, 'setOldModifiers',  function () {
if (this.id == 501 || this.id == 502  || this.id == 500 ) {
switch (this.button) {
case 1:
this.modifiers|=16;
break;
case 2:
this.modifiers|=8;
break;
case 3:
this.modifiers|=4;
break;
}
} else {
if ((this.modifiers & 1024) != 0) {
this.modifiers|=16;
}if ((this.modifiers & 2048) != 0) {
this.modifiers|=8;
}if ((this.modifiers & 4096) != 0) {
this.modifiers|=4;
}}if ((this.modifiers & 512) != 0) {
this.modifiers|=8;
}if ((this.modifiers & 256) != 0) {
this.modifiers|=4;
}if ((this.modifiers & 64) != 0) {
this.modifiers|=1;
}if ((this.modifiers & 128) != 0) {
this.modifiers|=2;
}if ((this.modifiers & 8192) != 0) {
this.modifiers|=32;
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

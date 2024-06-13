(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[[0,'swingjs.JSMouse','StringBuilder','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputEvent", null, 'java.awt.event.ComponentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['canAccessSystemClipboard'],'I',['modifiers'],'J',['when']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I',  function (source, id, when, modifiers) {
;C$.superclazz.c$$java_awt_Component$I.apply(this,[source, id]);C$.$init$.apply(this);
this.when=when;
this.modifiers=modifiers;
this.canAccessSystemClipboard=false;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isShiftDown$',  function () {
return (this.modifiers & 1) != 0;
});

Clazz.newMeth(C$, 'isControlDown$',  function () {
return (this.modifiers & 2) != 0;
});

Clazz.newMeth(C$, 'isMetaDown$',  function () {
return (this.modifiers & 4) != 0;
});

Clazz.newMeth(C$, 'isAltDown$',  function () {
return (this.modifiers & 8) != 0;
});

Clazz.newMeth(C$, 'isAltGraphDown$',  function () {
return (this.modifiers & 32) != 0;
});

Clazz.newMeth(C$, 'getWhen$',  function () {
return this.when;
});

Clazz.newMeth(C$, 'getModifiers$',  function () {
return this.modifiers & (-16321);
});

Clazz.newMeth(C$, 'getModifiersEx$',  function () {
return this.modifiers & ~63;
});

Clazz.newMeth(C$, 'consume$',  function () {
$I$(1).checkConsume$java_awt_event_InputEvent(this);
this.consumed=true;
});

Clazz.newMeth(C$, 'isConsumed$',  function () {
return this.consumed;
});

Clazz.newMeth(C$, 'getModifiersExText$I',  function (modifiers) {
var buf=Clazz.new_($I$(2,1));
if ((modifiers & 256) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.meta", "Meta"));
buf.append$S("+");
}if ((modifiers & 128) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.control", "Ctrl"));
buf.append$S("+");
}if ((modifiers & 512) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.alt", "Alt"));
buf.append$S("+");
}if ((modifiers & 64) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.shift", "Shift"));
buf.append$S("+");
}if ((modifiers & 8192) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.altGraph", "Alt Graph"));
buf.append$S("+");
}if ((modifiers & 1024) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.button1", "Button1"));
buf.append$S("+");
}if ((modifiers & 2048) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.button2", "Button2"));
buf.append$S("+");
}if ((modifiers & 4096) != 0) {
buf.append$S($I$(3).getProperty$S$S("AWT.button3", "Button3"));
buf.append$S("+");
}if (buf.length$() > 0) {
buf.setLength$I(buf.length$() - 1);
}return buf.toString();
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

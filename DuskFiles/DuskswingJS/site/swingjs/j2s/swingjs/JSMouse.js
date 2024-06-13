(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'swingjs.JSToolkit','swingjs.JSUtil','java.awt.event.MouseWheelEvent','java.awt.event.MouseEvent','java.awt.Toolkit','java.awt.JSComponent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSMouse");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isCtrlShiftMouseDown','wheeling'],'I',['xWhenPressed','yWhenPressed','modifiersWhenPressed10','lastx','lasty','clickCount'],'J',['lasttime'],'O',['viewer','swingjs.JSFrameViewer','jqevent','java.lang.Object','mouse2','swingjs.JSMouse2']]]

Clazz.newMeth(C$, 'c$$swingjs_JSFrameViewer',  function (v) {
;C$.$init$.apply(this);
this.viewer=v;
}, 1);

Clazz.newMeth(C$, 'processEvent$I$I$I$I$J$O$I',  function (id, x, y, modifiers, time, jqevent, scroll) {
$I$(1).setThreadForViewer$swingjs_JSFrameViewer(this.viewer);
this.jqevent=jqevent;
switch (id) {
case 401:
case 400:
case 402:
return p$1.keyAction$I$O$J.apply(this, [id, jqevent, time]);
}
if (id != 507 && id != 503 ) modifiers=C$.applyLeftMouse$I(modifiers);
switch (id) {
case 507:
this.wheeled$J$I$I$I$I(time, x, y, scroll, modifiers);
break;
case 501:
this.xWhenPressed=x;
this.yWhenPressed=y;
this.modifiersWhenPressed10=modifiers & ~16320;
p$1.pressed$J$I$I$I$Z.apply(this, [time, x, y, modifiers, false]);
break;
case 506:
p$1.dragged$J$I$I$I.apply(this, [time, x, y, modifiers]);
break;
case 504:
case 505:
p$1.entry$J$I$I$I.apply(this, [time, x, y, id]);
break;
case 503:
p$1.moved$J$I$I$I.apply(this, [time, x, y, modifiers]);
break;
case 502:
p$1.released$J$I$I$I.apply(this, [time, x, y, modifiers & ~16320]);
if (x == this.xWhenPressed && y == this.yWhenPressed  && (modifiers & ~16320) == this.modifiersWhenPressed10  && C$.getButton$I$O(id, jqevent) != 1 ) {

jqevent.type = jqevent.originalEvent.j2stype = "click";
p$1.clicked$J$I$I$I$I.apply(this, [time, x, y, modifiers & ~16320, 1]);
}break;
case 500:
var n=jqevent.originalEvent.detail ||0;
p$1.clicked$J$I$I$I$I.apply(this, [time, x, y, modifiers & ~16320, n]);
break;
default:
return false;
}
return true;
});

Clazz.newMeth(C$, 'processTwoPointGesture$FAAA',  function (touches) {
p$1.getMouse2.apply(this, []).processTwoPointGesture$FAAA(touches);
});

Clazz.newMeth(C$, 'getMouse2',  function () {
return (this.mouse2 == null  ? (this.mouse2=$I$(2).getInstance$S("swingjs.JSMouse2")).set$swingjs_JSMouse(this) : this.mouse2);
}, p$1);

Clazz.newMeth(C$, 'translateXYBy$I$I',  function (deltaX, deltaY) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
p$1.clicked$J$I$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$(), e.getClickCount$()]);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
p$1.entry$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), 504]);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
p$1.entry$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), 505]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
p$1.pressed$J$I$I$I$Z.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$(), e.isPopupTrigger$()]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
p$1.released$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
var modifiers=e.getModifiers$();
if ((modifiers & 28) == 0) modifiers|=16;
p$1.dragged$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), modifiers]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
p$1.moved$J$I$I$I.apply(this, [e.getWhen$(), e.getX$(), e.getY$(), e.getModifiers$()]);
});

Clazz.newMeth(C$, 'mouseWheelMoved$java_awt_event_MouseWheelEvent',  function (e) {
e.consume$();
this.wheeled$J$I$I$I$I(e.getWhen$(), 0, 0, e.getWheelRotation$(), e.getModifiers$());
});

Clazz.newMeth(C$, 'entry$J$I$I$I',  function (time, x, y, id) {
this.wheeling=false;
p$1.mouseEnterExit$J$I$I$I.apply(this, [time, x, y, id]);
}, p$1);

Clazz.newMeth(C$, 'clicked$J$I$I$I$I',  function (time, x, y, modifiers, clickCount) {
p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [500, time, x, y, clickCount, modifiers, 0]);
}, p$1);

Clazz.newMeth(C$, 'moved$J$I$I$I',  function (time, x, y, modifiers) {
if (this.isCtrlShiftMouseDown) p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [506, time, x, y, 0, C$.applyLeftMouse$I(modifiers), 0]);
 else p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [503, time, x, y, 0, modifiers, 0]);
}, p$1);

Clazz.newMeth(C$, 'wheeled$J$I$I$I$I',  function (time, x, y, rotation, modifiers) {
this.wheeling=true;
p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [507, time, x, y, 0, modifiers & ~28 | 32, rotation]);
});

Clazz.newMeth(C$, 'pressed$J$I$I$I$Z',  function (time, x, y, modifiers, isPopupTrigger) {
this.isCtrlShiftMouseDown=((modifiers & (3)) == (3));
this.wheeling=false;
p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [501, time, x, y, 0, modifiers, 0]);
}, p$1);

Clazz.newMeth(C$, 'released$J$I$I$I',  function (time, x, y, modifiers) {
this.isCtrlShiftMouseDown=false;
this.wheeling=false;
p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [502, time, x, y, 0, modifiers & ~16320, 0]);
}, p$1);

Clazz.newMeth(C$, 'dragged$J$I$I$I',  function (time, x, y, modifiers) {
if (this.wheeling) return;
if ((modifiers & 20) == 20) modifiers=modifiers & ~4 | 2;
p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [506, time, x, y, 0, modifiers, 0]);
}, p$1);

Clazz.newMeth(C$, 'applyLeftMouse$I',  function (modifiers) {
return ((modifiers & 28) == 0) ? (modifiers | 16) : modifiers;
}, 1);

Clazz.newMeth(C$, 'getButton$I$O',  function (id, jqevent) {
if (id != 503) {
var e=jqevent;
switch (e.button || e.buttons && (8 << e.buttons) ||1) {
case 1:
case 16:
return 1;
case 3:
case 128:
return 2;
case 2:
case 32:
return 3;
}
}return 0;
}, 1);

Clazz.newMeth(C$, 'mouseEnterExit$J$I$I$I',  function (time, x, y, id) {
p$1.mouseAction$I$J$I$I$I$I$I.apply(this, [id, time, x, y, 0, 0, 0]);
}, p$1);

Clazz.newMeth(C$, 'updateClickCount$I$J$I$I',  function (id, time, x, y) {
var reset=(Long.$gt(Long.$sub(time,this.lasttime),500 ) || Math.abs(x - this.lastx) > 3  || Math.abs(y - this.lasty) > 3 );
this.lasttime=time;
this.lastx=x;
this.lasty=y;
var ret=this.clickCount;
switch (id) {
case 501:
ret=this.clickCount=(reset ? 1 : this.clickCount + 1);
break;
case 504:
case 505:
this.clickCount=0;
break;
case 503:
if (reset) this.clickCount=0;
break;
case 502:
case 506:
case -1:
break;
}
return ret;
}, p$1);

Clazz.newMeth(C$, 'mouseAction$I$J$I$I$I$I$I',  function (id, time, x, y, xcount, modifiers, dy) {
var source=this.viewer.getTopComponent$();
var count=(xcount > 1 && id == 500  ? xcount : p$1.updateClickCount$I$J$I$I.apply(this, [id, time, x, y]));
C$.processMouseEvent$O$java_awt_Component$I$J$I$I$I$I$I(this.jqevent, source, id, time, x, y, count, modifiers, dy);
}, p$1);

Clazz.newMeth(C$, 'processMouseEvent$O$java_awt_Component$I$J$I$I$I$I$I',  function (jqevent, source, id, time, x, y, count, modifiers, dy) {
var button=C$.getButton$I$O(id, jqevent);
var popupTrigger=C$.isPopupTrigger$I$I$Z(id, modifiers, $I$(1).isWin);
var e;
if (id == 507) {
e=Clazz.new_($I$(3,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I,[source, id, time, modifiers, x, y, x, y, count, popupTrigger, 0, 1, dy]);
} else {
e=Clazz.new_($I$(4,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I,[source, id, time, modifiers, x, y, x, y, count, popupTrigger, button]);
}var bdata=Clazz.array(Byte.TYPE, [0]);
e.setBData$BA(bdata);
var c=null;

bdata.jqevent = jqevent; bdata.source = c = jqevent.j2sretarget || jqevent.target["data-component"];
bdata.doPropagate = c && c.ui.j2sDoPropagate;
if (c == null ) {
$I$(5).getDefaultToolkit$().getSystemEventQueue$().postEvent$java_awt_AWTEvent(e);
} else {
(e.getSource$()).dispatchEvent$java_awt_AWTEvent(e);
}}, 1);

Clazz.newMeth(C$, 'setPropagation$java_awt_Component$java_awt_event_MouseEvent',  function (target, e) {
var je=C$.getJQEvent$java_awt_event_MouseEvent(e);

if (je && target.ui.j2sDoPropagate) je.doPropagate = true;
}, 1);

Clazz.newMeth(C$, 'getJQEvent$java_awt_event_MouseEvent',  function (e) {
{
return (e.bdata && e.bdata.jqevent || null)
}
}, 1);

Clazz.newMeth(C$, 'checkConsume$java_awt_event_InputEvent',  function (e) {
var ui=(e.getSource$()).秘getUI$();
if (e.bdata != null  && ui != null   && ui.buttonListener == null   && ((!e.bdata.doPropagate ||false)) ) {
$I$(1).consumeEvent$O(e);
}}, 1);

Clazz.newMeth(C$, 'getJ2SEventTarget$java_awt_event_MouseEvent',  function (e) {
return e.bdata && e.bdata.source ||null;
}, 1);

Clazz.newMeth(C$, 'isPopupTrigger$I$I$Z',  function (id, mods, isWin) {
var rt=((mods & 4) != 0);
if (isWin) {
if (id != 502) return false;
return rt;
} else {
if (id != 501) return false;
var lt=((mods & 16) != 0);
var ctrl=((mods & 2) != 0);
return rt || (ctrl && lt ) ;
}}, 1);

Clazz.newMeth(C$, 'keyAction$I$O$J',  function (id, jqevent, time) {
var c=jqevent.target["data-shadowkeycomponent"] || jqevent.target["data-keycomponent"] ||null;
if (c == null ) return false;
if (c.秘isContentPane) c=c.getTopLevelAncestor$();
return $I$(6).秘dispatchKeyEvent$javax_swing_JComponent$I$O$J(c, id, jqevent, time);
}, p$1);

Clazz.newMeth(C$, 'getScroll$O',  function (ev) {
{
var oe = ev.originalEvent; return (oe.detail ? oe.detail : (J2S.featureDetection.os == "mac" ? 1 : -1) * oe.wheelDelta);
}
}, 1);

Clazz.newMeth(C$, 'getModifiers$O',  function (ev) {
var shift=false;
var ctrl=false;
var meta=false;
var alt=false;
var altGraph=false;

shift = ev.shiftKey;
ctrl = ev.ctrlKey;
alt = ev.altKey;
meta = ev.metaKey;
altGraph = ev.altGraphKey;
var modifiers=0;
if (shift) modifiers|=65;
if (ctrl) modifiers|=130;
if (alt) modifiers|=520;
if (meta) modifiers|=260;
if (altGraph) modifiers|=8224;
return modifiers;
}, 1);

Clazz.newMeth(C$, 'fixEventType$O$I',  function (jqevent, def) {
switch (jqevent.type ||"") {
case "keydown":
return 401;
case "keyup":
return 402;
case "keypress":
return 400;
case "click":
return 500;
case "pointerdown":
case "mousedown":
case "touchstart":
return 501;
case "pointerup":
case "mouseup":
case "touchend":
return 502;
case "pointermove":
case "mousemove":
return 503;
case "mousedrag":
return 506;
case "mousewheel":
return 507;
case "pointerover":
case "pointerenter":
case "mouseover":
case "mouseenter":
return 504;
case "pointerout":
case "pointerleave":
case "mouseout":
case "mouseleave":
return 505;
}
return def;
}, 1);

Clazz.newMeth(C$, 'retargetMouseEvent$O$swingjs_api_js_DOMNode$javax_swing_JComponent$javax_swing_JComponent$I',  function (jqevent, base, from, to, id) {
if (id == 0) id=C$.fixEventType$O$I(jqevent, 0);
var isDirect=(base != null );
var c=null;
if (base == null ) {
c=$I$(6).秘getTopInvokableAncestor$java_awt_Component$Z(from, false);
if (c == null ) c=from;
base=c.秘getUI$().getDOMNode$();
} else {
c=from;
}var xym=null;

jqevent.j2sretarget = to; xym = J2S._getEventXY(jqevent, J2S.$(base).offset());
var modifiers=C$.getModifiers$O(jqevent);
var time=System.currentTimeMillis$();
if (isDirect) {
C$.processMouseEvent$O$java_awt_Component$I$J$I$I$I$I$I(jqevent, from, id, time, xym[0], xym[1], 0, modifiers, 0);
} else {
c.getFrameViewer$().processMouseEvent$I$I$I$I$J$O$I(id, xym[0], xym[1], modifiers, time, jqevent, C$.getScroll$O(jqevent));
}}, 1);

Clazz.newMeth(C$, 'getTarget$java_awt_event_MouseEvent',  function (e) {
var je=C$.getJQEvent$java_awt_event_MouseEvent(e);
return je ? je.target :null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

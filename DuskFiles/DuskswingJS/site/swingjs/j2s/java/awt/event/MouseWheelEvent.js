(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MouseWheelEvent", null, 'java.awt.event.MouseEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['preciseWheelRotation'],'I',['scrollType','scrollAmount','wheelRotation']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$Z$I$I$I',  function (source, id, when, modifiers, x, y, clickCount, popupTrigger, scrollType, scrollAmount, wheelRotation) {
C$.c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I.apply(this, [source, id, when, modifiers, x, y, 0, 0, clickCount, popupTrigger, scrollType, scrollAmount, wheelRotation]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I',  function (source, id, when, modifiers, x, y, xAbs, yAbs, clickCount, popupTrigger, scrollType, scrollAmount, wheelRotation) {
C$.c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I$D.apply(this, [source, id, when, modifiers, x, y, xAbs, yAbs, clickCount, popupTrigger, scrollType, scrollAmount, wheelRotation, wheelRotation]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I$D',  function (source, id, when, modifiers, x, y, xAbs, yAbs, clickCount, popupTrigger, scrollType, scrollAmount, wheelRotation, preciseWheelRotation) {
;C$.superclazz.c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I.apply(this,[source, id, when, modifiers, x, y, xAbs, yAbs, clickCount, popupTrigger, 0]);C$.$init$.apply(this);
this.scrollType=scrollType;
this.scrollAmount=scrollAmount;
this.wheelRotation=wheelRotation;
this.preciseWheelRotation=preciseWheelRotation;
}, 1);

Clazz.newMeth(C$, 'getScrollType$',  function () {
return this.scrollType;
});

Clazz.newMeth(C$, 'getScrollAmount$',  function () {
return this.scrollAmount;
});

Clazz.newMeth(C$, 'getWheelRotation$',  function () {
return this.wheelRotation;
});

Clazz.newMeth(C$, 'getPreciseWheelRotation$',  function () {
return this.preciseWheelRotation;
});

Clazz.newMeth(C$, 'getUnitsToScroll$',  function () {
return this.scrollAmount * this.wheelRotation;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var scrollTypeStr=null;
if (this.getScrollType$() == 0) {
scrollTypeStr="WHEEL_UNIT_SCROLL";
} else if (this.getScrollType$() == 1) {
scrollTypeStr="WHEEL_BLOCK_SCROLL";
} else {
scrollTypeStr="unknown scroll type";
}return C$.superclazz.prototype.paramString$.apply(this, []) + ",scrollType=" + scrollTypeStr + ",scrollAmount=" + this.getScrollAmount$() + ",wheelRotation=" + this.getWheelRotation$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

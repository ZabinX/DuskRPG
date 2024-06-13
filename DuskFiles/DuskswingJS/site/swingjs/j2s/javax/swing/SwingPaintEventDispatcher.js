(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SwingPaintEventDispatcher", null, 'sun.awt.PaintEventDispatcher');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['ERASE_BACKGROUND']]]

Clazz.newMeth(C$, 'createPaintEvent$java_awt_Component$I$I$I$I',  function (component, x, y, w, h) {
return C$.superclazz.prototype.createPaintEvent$java_awt_Component$I$I$I$I.apply(this, [component, x, y, w, h]);
});

Clazz.newMeth(C$, 'shouldDoNativeBackgroundErase$java_awt_Component',  function (c) {
return C$.ERASE_BACKGROUND || !(Clazz.instanceOf(c, "javax.swing.RootPaneContainer")) ;
});

Clazz.newMeth(C$, 'queueSurfaceDataReplacing$java_awt_Component$Runnable',  function (c, r) {
if (Clazz.instanceOf(c, "javax.swing.RootPaneContainer")) {
return true;
}return C$.superclazz.prototype.queueSurfaceDataReplacing$java_awt_Component$Runnable.apply(this, [c, r]);
});

C$.$static$=function(){C$.$static$=0;
{
C$.ERASE_BACKGROUND=true;
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

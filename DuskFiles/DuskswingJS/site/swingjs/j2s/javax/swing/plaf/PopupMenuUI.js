(function(){var P$=Clazz.newPackage("javax.swing.plaf"),I$=[[0,'javax.swing.PopupFactory']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PopupMenuUI", null, 'javax.swing.plaf.ComponentUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isPopupTrigger$java_awt_event_MouseEvent',  function (e) {
return e.isPopupTrigger$();
});

Clazz.newMeth(C$, 'getPopup$javax_swing_JPopupMenu$I$I',  function (popup, x, y) {
var popupFactory=$I$(1).getSharedInstance$();
return popupFactory.getPopup$java_awt_Component$java_awt_Component$I$I(popup.getInvoker$(), popup, x, y);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

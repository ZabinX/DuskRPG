(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultMenuLayout", null, 'javax.swing.BoxLayout', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_Container$I',  function (target, axis) {
;C$.superclazz.c$$java_awt_Container$I.apply(this,[target, axis]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (target) {
if (Clazz.instanceOf(target, "javax.swing.JPopupMenu")) {
var popupMenu=target;
if (popupMenu.getComponentCount$() == 0) {
return Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
}}C$.superclazz.prototype.invalidateLayout$java_awt_Container.apply(this, [target]);
return C$.superclazz.prototype.preferredLayoutSize$java_awt_Container.apply(this, [target]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

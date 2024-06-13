(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSRadioButtonMenuItemUI", null, 'swingjs.plaf.JSRadioButtonUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isMenuItem=true;
this.allowPaintedBackground=false;
this.actionItemOffset=-8;
}, 1);

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "RadioButtonMenuItem";
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.menuItem=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return false;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'javax.swing.LookAndFeel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSToolTipUI", null, 'swingjs.plaf.JSLabelUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "ToolTipUI";
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
if (prop === "component" ) {
return;
}C$.superclazz.prototype.propertyChangedCUI$java_beans_PropertyChangeEvent$S.apply(this, [e, prop]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
$I$(1).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "ToolTip.background", "ToolTip.foreground", "ToolTip.font");
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

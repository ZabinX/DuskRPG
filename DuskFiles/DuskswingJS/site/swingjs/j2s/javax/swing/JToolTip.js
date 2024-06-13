(function(){var P$=Clazz.newPackage("javax.swing");
/*c*/var C$=Clazz.newClass(P$, "JToolTip", null, 'javax.swing.JLabel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$component','javax.swing.JComponent']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "ToolTipUI";
});

Clazz.newMeth(C$, 'setTipText$S',  function (tipText) {
var oldValue=this.getText$();
C$.superclazz.prototype.setText$S.apply(this, [tipText]);
this.firePropertyChange$S$O$O("tiptext", oldValue, tipText);
});

Clazz.newMeth(C$, 'getTipText$',  function () {
return this.getText$();
});

Clazz.newMeth(C$, 'setComponent$javax_swing_JComponent',  function (c) {
var oldValue=this.$component;
this.$component=c;
this.firePropertyChange$S$O$O("component", oldValue, c);
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.$component;
});

Clazz.newMeth(C$, 'alwaysOnTop$',  function () {
return true;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var tipText=this.getText$();
return C$.superclazz.prototype.paramString$.apply(this, []) + ",tipText=" + (tipText != null  ? tipText : "") ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

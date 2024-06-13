(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JCheckBox", null, 'javax.swing.JToggleButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.flat=false;
},1);

C$.$fields$=[['Z',['flat']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon$Z',  function (icon, selected) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, icon, selected]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action',  function (a) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(a);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (text, selected) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, null, selected]);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon',  function (text, icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon$Z',  function (text, icon, selected) {
;C$.superclazz.c$$S$javax_swing_Icon$Z.apply(this,[text, icon, selected]);C$.$init$.apply(this);
this.setUIProperty$S$O("borderPainted", Boolean.FALSE);
this.setHorizontalAlignment$I(10);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "CheckBoxUI";
});

Clazz.newMeth(C$, 'setBorderPaintedFlat$Z',  function (b) {
var oldValue=this.flat;
this.flat=b;
this.firePropertyChange$S$Z$Z("borderPaintedFlat", oldValue, this.flat);
if (b != oldValue ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'isBorderPaintedFlat$',  function () {
return this.flat;
});

Clazz.newMeth(C$, 'setIconFromAction$javax_swing_Action',  function (a) {
});

Clazz.newMeth(C$, 'paramString$',  function () {
return C$.superclazz.prototype.paramString$.apply(this, []);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

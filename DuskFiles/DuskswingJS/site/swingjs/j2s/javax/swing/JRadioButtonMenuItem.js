(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.JToggleButton','.ToggleButtonModel']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JRadioButtonMenuItem", null, 'javax.swing.JMenuItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action',  function (a) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(a);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon',  function (text, icon) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [text, icon, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (text, selected) {
C$.c$$S.apply(this, [text]);
this.setSelected$Z(selected);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon$Z',  function (icon, selected) {
C$.c$$S$javax_swing_Icon$Z.apply(this, [null, icon, selected]);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon$Z',  function (text, icon, selected) {
;C$.superclazz.c$$S$javax_swing_Icon.apply(this,[text, icon]);C$.$init$.apply(this);
this.setSelected$Z(selected);
this.setFocusable$Z(false);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "RadioButtonMenuItemUI";
});

Clazz.newMeth(C$, 'setModel$',  function () {
this.setModel$javax_swing_ButtonModel(Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'shouldUpdateSelectedStateFromAction$',  function () {
return true;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

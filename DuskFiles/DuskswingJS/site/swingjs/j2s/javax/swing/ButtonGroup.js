(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ButtonGroup");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buttons=Clazz.new_($I$(1,1));
this.selection=null;
},1);

C$.$fields$=[['O',['buttons','java.util.Vector','selection','javax.swing.ButtonModel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$javax_swing_AbstractButton',  function (b) {
if (b == null ) {
return;
}this.buttons.addElement$O(b);
if (b.isSelected$()) {
if (this.selection == null ) {
this.selection=b.getModel$();
} else {
b.setSelected$Z(false);
}}b.getModel$().setGroup$javax_swing_ButtonGroup(this);
});

Clazz.newMeth(C$, 'remove$javax_swing_AbstractButton',  function (b) {
if (b == null ) {
return;
}this.buttons.removeElement$O(b);
if (b.getModel$() === this.selection ) {
this.selection=null;
}b.getModel$().setGroup$javax_swing_ButtonGroup(null);
});

Clazz.newMeth(C$, 'clearSelection$',  function () {
if (this.selection != null ) {
var oldSelection=this.selection;
this.selection=null;
oldSelection.setSelected$Z(false);
}});

Clazz.newMeth(C$, 'getElements$',  function () {
return this.buttons.elements$();
});

Clazz.newMeth(C$, 'getSelection$',  function () {
return this.selection;
});

Clazz.newMeth(C$, 'setSelected$javax_swing_ButtonModel$Z',  function (m, b) {
if (b && m != null   && m !== this.selection  ) {
var oldSelection=this.selection;
this.selection=m;
if (oldSelection != null ) {
oldSelection.setSelected$Z(false);
}m.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'isSelected$javax_swing_ButtonModel',  function (m) {
return (m === this.selection );
});

Clazz.newMeth(C$, 'getButtonCount$',  function () {
if (this.buttons == null ) {
return 0;
} else {
return this.buttons.size$();
}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:51 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

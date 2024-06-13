(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Color','swingjs.a2s.A2SEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Choice", null, 'javax.swing.JComboBox');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [$I$(1).white]);
}, 1);

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'select$I',  function (index) {
C$.superclazz.prototype.setSelectedIndex$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'select$S',  function (key) {
C$.superclazz.prototype.setSelectedItem$O.apply(this, [key]);
});

Clazz.newMeth(C$, 'add$S',  function (label) {
this.addItem$S(label);
});

Clazz.newMeth(C$, 'countItems$',  function () {
return C$.superclazz.prototype.getItemCount$.apply(this, []);
});

Clazz.newMeth(C$, 'addItem$S',  function (item) {
C$.superclazz.prototype.addItem$O.apply(this, [item]);
});

Clazz.newMeth(C$, 'insert$S$I',  function (item, index) {
C$.superclazz.prototype.insertItemAt$O$I.apply(this, [item, index]);
});

Clazz.newMeth(C$, 'remove$S',  function (item) {
C$.superclazz.prototype.removeItem$O.apply(this, [item]);
});

Clazz.newMeth(C$, 'getItem$I',  function (n) {
return C$.superclazz.prototype.getItemAt$I.apply(this, [n]);
});

Clazz.newMeth(C$, 'removeAll$',  function () {
C$.superclazz.prototype.removeAllItems$.apply(this, []);
});

Clazz.newMeth(C$, 'fireActionEvent$',  function () {
$I$(2).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireActionEvent$.apply(this, []);
});

Clazz.newMeth(C$, 'fireItemStateChanged$java_awt_event_ItemEvent',  function (event) {
if (!this.秘trigger) return;
$I$(2).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireItemStateChanged$java_awt_event_ItemEvent.apply(this, [event]);
});

Clazz.newMeth(C$, 'getActionCommand$',  function () {
return C$.superclazz.prototype.getSelectedItem$.apply(this, []);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

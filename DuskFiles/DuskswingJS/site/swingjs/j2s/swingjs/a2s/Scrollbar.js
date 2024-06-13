(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Scrollbar", null, 'javax.swing.JScrollBar');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['fromUI']]]

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [1]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (direction) {
C$.c$$I$I$I$I$I.apply(this, [direction, 0, 10, 0, 100]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I',  function (orientation, value, extent, min, max) {
;C$.superclazz.c$$I$I$I$I$I.apply(this,[orientation, Math.max(Math.min(value, max), min), extent, min, max]);C$.$init$.apply(this);
C$.superclazz.prototype.setOpaque$Z.apply(this, [true]);
C$.superclazz.prototype.setBlockIncrement$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'fireAdjustmentValueChanged$I$I$I$Z',  function (id, type, value, adjusting) {
$I$(1).addListener$java_awt_Component(this);
if (!this.fromUI) return;
C$.superclazz.prototype.fireAdjustmentValueChanged$I$I$I$Z.apply(this, [id, type, value, adjusting]);
});

Clazz.newMeth(C$, 'setValueFromUI$I',  function (val) {
this.fromUI=true;
C$.superclazz.prototype.setValue$I.apply(this, [val]);
this.fromUI=false;
});

Clazz.newMeth(C$, 'processAdjustmentEventA2S$java_awt_event_AdjustmentEvent',  function (e) {
if (this.fromUI) this.processAdjustmentEvent$java_awt_event_AdjustmentEvent(e);
});

Clazz.newMeth(C$, 'processAdjustmentEvent$java_awt_event_AdjustmentEvent',  function (e) {
});

Clazz.newMeth(C$, 'setValueIsAdjustingFromUI$Z',  function (b) {
this.fromUI=true;
C$.superclazz.prototype.setValueIsAdjusting$Z.apply(this, [b]);
this.fromUI=false;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

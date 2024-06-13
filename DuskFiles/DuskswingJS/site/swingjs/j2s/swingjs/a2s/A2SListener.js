(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'swingjs.a2s.A2SEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "A2SListener", null, null, ['java.awt.event.AdjustmentListener', 'java.awt.event.ActionListener', 'java.awt.event.KeyListener', 'java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.TextListener', 'javax.swing.event.ChangeListener', 'java.awt.event.ItemListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lastTarget','java.awt.Component']]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent',  function (e) {
Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[e]).run$();
if (Clazz.instanceOf(e.getSource$(), "swingjs.a2s.Scrollbar")) (e.getSource$()).processAdjustmentEventA2S$java_awt_event_AdjustmentEvent(e);
});

Clazz.newMeth(C$, 'textValueChanged$java_awt_event_TextEvent',  function (e) {
System.out.println$S("AHAH! a2sListener textvalue changed " + e);
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
System.out.println$S("Ahah a2slistener state changed " + e.getSource$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

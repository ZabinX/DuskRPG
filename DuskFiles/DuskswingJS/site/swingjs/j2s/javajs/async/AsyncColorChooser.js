(function(){var P$=Clazz.newPackage("javajs.async"),p$1={},I$=[[0,'javax.swing.JColorChooser','java.awt.event.ActionEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AsyncColorChooser", null, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['listener','java.awt.event.ActionListener','selectedColor','java.awt.Color']]]

Clazz.newMeth(C$, 'showDialog$java_awt_Component$S$java_awt_Color$java_awt_event_ActionListener',  function (component, title, initialColor, listener) {
p$1.setListener$java_awt_event_ActionListener.apply(this, [listener]);
p$1.process$java_awt_Color.apply(this, [$I$(1).showDialog$java_awt_Component$S$java_awt_Color(component, title, initialColor)]);
p$1.unsetListener.apply(this, []);
});

Clazz.newMeth(C$, 'getSelectedColor$',  function () {
return this.selectedColor;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var c=evt.getNewValue$();
switch (evt.getPropertyName$()) {
case "SelectedColor":
p$1.process$java_awt_Color.apply(this, [c]);
break;
}
});

Clazz.newMeth(C$, 'setListener$java_awt_event_ActionListener',  function (a) {
this.listener=a;

Clazz.load("javax.swing.JColorChooser");javax.swing.JColorChooser.listener = this
}, p$1);

Clazz.newMeth(C$, 'unsetListener',  function () {

javax.swing.JColorChooser.listener = null
}, p$1);

Clazz.newMeth(C$, 'process$java_awt_Color',  function (c) {
if (Clazz.instanceOf(c, "javax.swing.plaf.UIResource")) return;
this.selectedColor=c;
this.listener.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this, c == null  ? 0 : c.getRGB$(), c == null  ? null : c.toString()],$I$(2,1).c$$O$I$S));
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

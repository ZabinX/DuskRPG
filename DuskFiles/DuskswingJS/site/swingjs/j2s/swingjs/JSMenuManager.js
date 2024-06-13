(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'javax.swing.MenuSelectionManager','swingjs.JSUtil','swingjs.api.js.DOMNode','java.awt.EventQueue','javax.swing.MenuElement']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSMenuManager", null, 'javax.swing.MenuSelectionManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['currentNode','swingjs.api.js.DOMNode']]]

Clazz.newMeth(C$, 'setCurrentNode$O',  function (node) {
C$.currentNode=node;
$I$(1).defaultManager$().clearSelectedPath$();
}, 1);

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent',  function (e) {
if ((e.getModifiers$() & ~8) != 0) {
p$1.checkNavigationKeys$java_awt_event_KeyEvent.apply(this, [e]);
return;
}var i=Character.toLowerCase$I(e.getKeyCode$());
var obj=$I$(2).jQuery.$(".a.ui-mnem-" + i);
var node=(obj[0] ||null);
var jc=$I$(3).getAttr(node, "data-component");
if (jc == null ) return;
$I$(4).setCurrentEventAndMostRecentTime$java_awt_AWTEvent(e);
jc.processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager(e, p$1.getPathTo$javax_swing_MenuElement$Z.apply(this, [jc, true]), this);
});

Clazz.newMeth(C$, 'checkNavigationKeys$java_awt_event_KeyEvent',  function (e) {
}, p$1);

Clazz.newMeth(C$, 'setCurrentPath$javax_swing_JComponent',  function (jc) {
C$.currentNode=null;
this.setSelectedPath$javax_swing_MenuElementA(p$1.getPathTo$javax_swing_MenuElement$Z.apply(this, [jc, false]));
});

Clazz.newMeth(C$, 'getPathTo$javax_swing_MenuElement$Z',  function (jc, addTarget) {
var selection=Clazz.array($I$(5), [0]);
while (jc != null ){
if (addTarget) {

selection.push(jc);
}jc=jc.parent || jc.invoker ||null;
if (!(Clazz.instanceOf(jc, "javax.swing.MenuElement"))) break;

selection.push(jc);
}

selection.reverse()
return selection;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

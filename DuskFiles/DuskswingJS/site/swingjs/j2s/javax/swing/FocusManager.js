(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.awt.KeyboardFocusManager','javax.swing.DelegatingDefaultFocusManager','java.awt.DefaultFocusTraversalPolicy']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FocusManager", null, 'java.awt.DefaultKeyboardFocusManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['enabled']]]

Clazz.newMeth(C$, 'getCurrentManager$',  function () {
var manager=$I$(1).getCurrentKeyboardFocusManager$();
if (Clazz.instanceOf(manager, "java.awt.DefaultKeyboardFocusManager")) return manager;
if (Clazz.instanceOf(manager, "javax.swing.FocusManager")) {
return manager;
} else {
return Clazz.new_($I$(2,1).c$$java_awt_KeyboardFocusManager,[manager]);
}}, 1);

Clazz.newMeth(C$, 'setCurrentManager$javax_swing_FocusManager',  function (aFocusManager) {
var toSet=(Clazz.instanceOf(aFocusManager, "javax.swing.DelegatingDefaultFocusManager")) ? (aFocusManager).getDelegate$() : aFocusManager;
$I$(1).setCurrentKeyboardFocusManager$java_awt_KeyboardFocusManager(toSet);
}, 1);

Clazz.newMeth(C$, 'disableSwingFocusManager$',  function () {
if (C$.enabled) {
C$.enabled=false;
$I$(1).getCurrentKeyboardFocusManager$().setDefaultFocusTraversalPolicy$java_awt_FocusTraversalPolicy(Clazz.new_($I$(3,1)));
}}, 1);

Clazz.newMeth(C$, 'isFocusManagerEnabled$',  function () {
return C$.enabled;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.enabled=true;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

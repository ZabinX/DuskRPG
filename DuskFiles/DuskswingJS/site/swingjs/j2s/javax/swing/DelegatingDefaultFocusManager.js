(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DelegatingDefaultFocusManager", null, 'javax.swing.DefaultFocusManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['delegate','java.awt.KeyboardFocusManager']]]

Clazz.newMeth(C$, 'c$$java_awt_KeyboardFocusManager',  function (delegate) {
Clazz.super_(C$, this);
this.delegate=delegate;
this.setDefaultFocusTraversalPolicy$java_awt_FocusTraversalPolicy(this.gluePolicy);
}, 1);

Clazz.newMeth(C$, 'getDelegate$',  function () {
return this.delegate;
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_Component$java_awt_event_KeyEvent',  function (focusedComponent, e) {
this.delegate.processKeyEvent$java_awt_Component$java_awt_event_KeyEvent(focusedComponent, e);
});

Clazz.newMeth(C$, 'focusNextComponent$java_awt_Component',  function (aComponent) {
this.delegate.focusNextComponent$java_awt_Component(aComponent);
});

Clazz.newMeth(C$, 'focusPreviousComponent$java_awt_Component',  function (aComponent) {
this.delegate.focusPreviousComponent$java_awt_Component(aComponent);
});

Clazz.newMeth(C$, 'getFocusOwner$',  function () {
return this.delegate.getFocusOwner$();
});

Clazz.newMeth(C$, 'clearGlobalFocusOwner$',  function () {
this.delegate.clearGlobalFocusOwner$();
});

Clazz.newMeth(C$, 'getPermanentFocusOwner$',  function () {
return this.delegate.getPermanentFocusOwner$();
});

Clazz.newMeth(C$, 'getFocusedWindow$',  function () {
return this.delegate.getFocusedWindow$();
});

Clazz.newMeth(C$, 'getActiveWindow$',  function () {
return this.delegate.getActiveWindow$();
});

Clazz.newMeth(C$, 'getDefaultFocusTraversalPolicy$',  function () {
return this.delegate.getDefaultFocusTraversalPolicy$();
});

Clazz.newMeth(C$, 'setDefaultFocusTraversalPolicy$java_awt_FocusTraversalPolicy',  function (defaultPolicy) {
if (this.delegate != null ) {
this.delegate.setDefaultFocusTraversalPolicy$java_awt_FocusTraversalPolicy(defaultPolicy);
}});

Clazz.newMeth(C$, 'setDefaultFocusTraversalKeys$I$java_util_Set',  function (id, keystrokes) {
this.delegate.setDefaultFocusTraversalKeys$I$java_util_Set(id, keystrokes);
});

Clazz.newMeth(C$, 'getDefaultFocusTraversalKeys$I',  function (id) {
return this.delegate.getDefaultFocusTraversalKeys$I(id);
});

Clazz.newMeth(C$, 'getCurrentFocusCycleRoot$',  function () {
return this.delegate.getCurrentFocusCycleRoot$();
});

Clazz.newMeth(C$, 'setGlobalCurrentFocusCycleRoot$java_awt_Container',  function (newFocusCycleRoot) {
this.delegate.setGlobalCurrentFocusCycleRoot$java_awt_Container(newFocusCycleRoot);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.delegate.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
this.delegate.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
this.delegate.addPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
this.delegate.removePropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'addVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
this.delegate.addVetoableChangeListener$java_beans_VetoableChangeListener(listener);
});

Clazz.newMeth(C$, 'removeVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
this.delegate.removeVetoableChangeListener$java_beans_VetoableChangeListener(listener);
});

Clazz.newMeth(C$, 'addVetoableChangeListener$S$java_beans_VetoableChangeListener',  function (propertyName, listener) {
this.delegate.addVetoableChangeListener$S$java_beans_VetoableChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'removeVetoableChangeListener$S$java_beans_VetoableChangeListener',  function (propertyName, listener) {
this.delegate.removeVetoableChangeListener$S$java_beans_VetoableChangeListener(propertyName, listener);
});

Clazz.newMeth(C$, 'addKeyEventDispatcher$java_awt_KeyEventDispatcher',  function (dispatcher) {
this.delegate.addKeyEventDispatcher$java_awt_KeyEventDispatcher(dispatcher);
});

Clazz.newMeth(C$, 'removeKeyEventDispatcher$java_awt_KeyEventDispatcher',  function (dispatcher) {
this.delegate.removeKeyEventDispatcher$java_awt_KeyEventDispatcher(dispatcher);
});

Clazz.newMeth(C$, 'dispatchEvent$java_awt_AWTEvent',  function (e) {
return this.delegate.dispatchEvent$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'dispatchKeyEvent$java_awt_event_KeyEvent',  function (e) {
return this.delegate.dispatchKeyEvent$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'upFocusCycle$java_awt_Component',  function (aComponent) {
this.delegate.upFocusCycle$java_awt_Component(aComponent);
});

Clazz.newMeth(C$, 'downFocusCycle$java_awt_Container',  function (aContainer) {
this.delegate.downFocusCycle$java_awt_Container(aContainer);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

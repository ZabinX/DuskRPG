(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.util.LinkedList',['java.awt.KeyboardFocusManager','.LightweightFocusRequest'],'java.awt.AWTKeyStroke','java.util.HashMap','java.awt.DefaultFocusTraversalPolicy','java.util.Set','sun.awt.AppContext','java.awt.DefaultKeyboardFocusManager','java.util.StringTokenizer','java.util.Collections','java.util.HashSet','java.awt.Toolkit','java.beans.PropertyChangeSupport','java.beans.VetoableChangeSupport','sun.awt.SunToolkit',['java.awt.KeyboardFocusManager','.HeavyweightFocusRequest'],['sun.awt.CausedFocusEvent','.Cause'],'java.awt.event.FocusEvent','sun.awt.CausedFocusEvent','java.awt.EventQueue','java.awt.KeyboardFocusManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyboardFocusManager", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.KeyEventDispatcher', 'java.awt.KeyEventPostProcessor']);
C$.$classes$=[['LightweightFocusRequest',26],['HeavyweightFocusRequest',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultPolicyAWT=Clazz.new_($I$(5,1));
this.defaultFocusTraversalKeys=Clazz.array($I$(6), [4]);
this.currentSequencedEvent=null;
},1);

C$.$fields$=[['O',['peer','java.awt.peer.KeyboardFocusManagerPeer','defaultPolicy','java.awt.FocusTraversalPolicy','+defaultPolicyAWT','defaultFocusTraversalKeys','java.util.Set[]','vetoableSupport','java.beans.VetoableChangeSupport','changeSupport','java.beans.PropertyChangeSupport','keyEventDispatchers','java.util.LinkedList','+keyEventPostProcessors','currentSequencedEvent','java.awt.SequencedEvent']]
,['Z',['clearingCurrentLightweightRequests','allowSyncFocusRequests','disableRestoreFocus'],'O',['focusOwner','java.awt.Component','+permanentFocusOwner','focusedWindow','java.awt.Window','+activeWindow','defaultFocusTraversalKeyPropertyNames','String[]','defaultFocusTraversalKeyStrokes','java.awt.AWTKeyStroke[][]','currentFocusCycleRoot','java.awt.Container','mostRecentFocusOwners','java.util.Map','heavyweightRequests','java.util.LinkedList','+currentLightweightRequests','newFocusOwner','java.awt.Component']]]

Clazz.newMeth(C$, 'getCurrentKeyboardFocusManager$',  function () {
return C$.getCurrentKeyboardFocusManager$sun_awt_AppContext($I$(7).getAppContext$());
}, 1);

Clazz.newMeth(C$, 'getCurrentKeyboardFocusManager$sun_awt_AppContext',  function (appcontext) {
var manager=appcontext.get$O(Clazz.getClass(C$));
if (manager == null ) {
manager=Clazz.new_($I$(8,1));
appcontext.put$O$O(Clazz.getClass(C$), manager);
}return manager;
}, 1);

Clazz.newMeth(C$, 'setCurrentKeyboardFocusManager$java_awt_KeyboardFocusManager',  function (newManager) {
var oldManager=null;
{
var appcontext=$I$(7).getAppContext$();
if (newManager != null ) {
oldManager=C$.getCurrentKeyboardFocusManager$sun_awt_AppContext(appcontext);
appcontext.put$O$O(Clazz.getClass(C$), newManager);
} else {
oldManager=C$.getCurrentKeyboardFocusManager$sun_awt_AppContext(appcontext);
appcontext.remove$O(Clazz.getClass(C$));
}}if (oldManager != null ) {
oldManager.firePropertyChange$S$O$O("managingFocus", Boolean.TRUE, Boolean.FALSE);
}if (newManager != null ) {
newManager.firePropertyChange$S$O$O("managingFocus", Boolean.FALSE, Boolean.TRUE);
}}, 1);

Clazz.newMeth(C$, 'setCurrentSequencedEvent$java_awt_SequencedEvent',  function (current) {
{
Clazz.assert(C$, this, function(){return (current == null  || this.currentSequencedEvent == null  )});
this.currentSequencedEvent=current;
}});

Clazz.newMeth(C$, 'getCurrentSequencedEvent$',  function () {
{
return this.currentSequencedEvent;
}});

Clazz.newMeth(C$, 'initFocusTraversalKeysSet$S$java_util_Set',  function (value, targetSet) {
var tokens=Clazz.new_($I$(9,1).c$$S$S,[value, ","]);
while (tokens.hasMoreTokens$()){
targetSet.add$O($I$(3,"getAWTKeyStroke$S",[tokens.nextToken$()]));
}
return (targetSet.isEmpty$()) ? $I$(10).EMPTY_SET : $I$(10).unmodifiableSet$java_util_Set(targetSet);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
for (var i=0; i < 4; i++) {
var work_set=Clazz.new_($I$(11,1));
for (var j=0; j < C$.defaultFocusTraversalKeyStrokes[i].length; j++) {
work_set.add$O(C$.defaultFocusTraversalKeyStrokes[i][j]);
}
this.defaultFocusTraversalKeys[i]=(work_set.isEmpty$()) ? $I$(10).EMPTY_SET : $I$(10).unmodifiableSet$java_util_Set(work_set);
}
p$1.initPeer.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initPeer',  function () {
var tk=$I$(12).getDefaultToolkit$();
var peerProvider=tk;
this.peer=peerProvider.getKeyboardFocusManagerPeer$();
}, p$1);

Clazz.newMeth(C$, 'getFocusOwner$',  function () {
if (C$.focusOwner == null ) {
return null;
}return (C$.focusOwner.appContext === $I$(7).getAppContext$() ) ? C$.focusOwner : null;
});

Clazz.newMeth(C$, 'getGlobalFocusOwner$',  function () {
return C$.focusOwner;
});

Clazz.newMeth(C$, 'setGlobalFocusOwner$java_awt_Component',  function (focusOwner) {
var oldFocusOwner=null;
var shouldFire=false;
if (focusOwner == null  || focusOwner.isFocusable$() ) {
p$1.checkKFMSecurity.apply(this, []);
oldFocusOwner=this.getFocusOwner$();
try {
this.fireVetoableChange$S$O$O("focusOwner", oldFocusOwner, focusOwner);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
return;
} else {
throw e;
}
}
C$.focusOwner=focusOwner;
if (focusOwner != null  && (this.getCurrentFocusCycleRoot$() == null  || !focusOwner.isFocusCycleRoot$java_awt_Container(this.getCurrentFocusCycleRoot$()) ) ) {
var rootAncestor=focusOwner.getFocusCycleRootAncestor$();
if (rootAncestor == null  && focusOwner.isWindowOrJSApplet$() ) {
rootAncestor=focusOwner;
}if (rootAncestor != null ) {
this.setGlobalCurrentFocusCycleRootPriv$java_awt_Container(rootAncestor);
}}shouldFire=true;
}if (shouldFire) {
this.firePropertyChange$S$O$O("focusOwner", oldFocusOwner, focusOwner);
}});

Clazz.newMeth(C$, 'clearFocusOwner$',  function () {
if (this.getFocusOwner$() != null ) {
this.clearGlobalFocusOwner$();
}});

Clazz.newMeth(C$, 'clearGlobalFocusOwner$',  function () {
$I$(12).getDefaultToolkit$();
p$1._clearGlobalFocusOwner.apply(this, []);
});

Clazz.newMeth(C$, '_clearGlobalFocusOwner',  function () {
var activeWindow=C$.markClearGlobalFocusOwner$();
this.peer.clearGlobalFocusOwner$java_awt_Window(activeWindow);
}, p$1);

Clazz.newMeth(C$, 'clearGlobalFocusOwnerPriv$',  function () {
this.clearGlobalFocusOwner$();
});

Clazz.newMeth(C$, 'getNativeFocusOwner$',  function () {
return this.peer.getCurrentFocusOwner$();
});

Clazz.newMeth(C$, 'setNativeFocusOwner$java_awt_Component',  function (comp) {
this.peer.setCurrentFocusOwner$java_awt_Component(comp);
});

Clazz.newMeth(C$, 'getNativeFocusedWindow$',  function () {
return this.peer.getCurrentFocusedWindow$();
});

Clazz.newMeth(C$, 'getPermanentFocusOwner$',  function () {
{
if (C$.permanentFocusOwner == null ) {
return null;
}return (C$.permanentFocusOwner.appContext === $I$(7).getAppContext$() ) ? C$.permanentFocusOwner : null;
}});

Clazz.newMeth(C$, 'getGlobalPermanentFocusOwner$',  function () {
{
p$1.checkKFMSecurity.apply(this, []);
return C$.permanentFocusOwner;
}});

Clazz.newMeth(C$, 'setGlobalPermanentFocusOwner$java_awt_Component',  function (permanentFocusOwner) {
var oldPermanentFocusOwner=null;
var shouldFire=false;
if (permanentFocusOwner == null  || permanentFocusOwner.isFocusable$() ) {
{
p$1.checkKFMSecurity.apply(this, []);
oldPermanentFocusOwner=this.getPermanentFocusOwner$();
try {
this.fireVetoableChange$S$O$O("permanentFocusOwner", oldPermanentFocusOwner, permanentFocusOwner);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
return;
} else {
throw e;
}
}
C$.permanentFocusOwner=permanentFocusOwner;
C$.setMostRecentFocusOwner$java_awt_Component(permanentFocusOwner);
shouldFire=true;
}}if (shouldFire) {
this.firePropertyChange$S$O$O("permanentFocusOwner", oldPermanentFocusOwner, permanentFocusOwner);
}});

Clazz.newMeth(C$, 'getFocusedWindow$',  function () {
{
if (C$.focusedWindow == null ) {
return null;
}return (C$.focusedWindow.appContext === $I$(7).getAppContext$() ) ? C$.focusedWindow : null;
}});

Clazz.newMeth(C$, 'getGlobalFocusedWindow$',  function () {
{
p$1.checkKFMSecurity.apply(this, []);
return C$.focusedWindow;
}});

Clazz.newMeth(C$, 'setGlobalFocusedWindow$java_awt_Window',  function (focusedWindow) {
var oldFocusedWindow=null;
var shouldFire=false;
if (focusedWindow == null  || focusedWindow.isFocusableWindow$() ) {
oldFocusedWindow=this.getFocusedWindow$();
try {
this.fireVetoableChange$S$O$O("focusedWindow", oldFocusedWindow, focusedWindow);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
return;
} else {
throw e;
}
}
C$.focusedWindow=focusedWindow;
shouldFire=true;
}if (shouldFire) {
this.firePropertyChange$S$O$O("focusedWindow", oldFocusedWindow, focusedWindow);
}});

Clazz.newMeth(C$, 'getActiveWindow$',  function () {
{
if (C$.activeWindow == null ) {
return null;
}return (C$.activeWindow.appContext === $I$(7).getAppContext$() ) ? C$.activeWindow : null;
}});

Clazz.newMeth(C$, 'getGlobalActiveWindow$',  function () {
{
p$1.checkKFMSecurity.apply(this, []);
return C$.activeWindow;
}});

Clazz.newMeth(C$, 'setGlobalActiveWindow$java_awt_Window',  function (activeWindow) {
var oldActiveWindow;
{
p$1.checkKFMSecurity.apply(this, []);
oldActiveWindow=this.getActiveWindow$();
try {
this.fireVetoableChange$S$O$O("activeWindow", oldActiveWindow, activeWindow);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
return;
} else {
throw e;
}
}
C$.activeWindow=activeWindow;
}this.firePropertyChange$S$O$O("activeWindow", oldActiveWindow, activeWindow);
});

Clazz.newMeth(C$, 'getDefaultFocusTraversalPolicy$',  function () {
return this.defaultPolicy;
});

Clazz.newMeth(C$, 'getDefaultAWTFocusTraversalPolicy$',  function () {
return (this.defaultPolicyAWT == null  ? this.defaultPolicyAWT=Clazz.new_($I$(5,1)) : this.defaultPolicyAWT);
});

Clazz.newMeth(C$, 'setDefaultFocusTraversalPolicy$java_awt_FocusTraversalPolicy',  function (defaultPolicy) {
if (defaultPolicy == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["default focus traversal policy cannot be null"]);
}var oldPolicy;
{
oldPolicy=this.defaultPolicy;
this.defaultPolicy=defaultPolicy;
}this.firePropertyChange$S$O$O("defaultFocusTraversalPolicy", oldPolicy, defaultPolicy);
});

Clazz.newMeth(C$, 'setDefaultFocusTraversalKeys$I$java_util_Set',  function (id, keystrokes) {
if (id < 0 || id >= 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}if (keystrokes == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot set null Set of default focus traversal keys"]);
}var oldKeys;
{
for (var keystroke, $keystroke = keystrokes.iterator$(); $keystroke.hasNext$()&&((keystroke=($keystroke.next$())),1);) {
if (keystroke == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot set null focus traversal key"]);
}if (keystroke.getKeyChar$() != "\uffff") {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["focus traversal keys cannot map to KEY_TYPED events"]);
}for (var i=0; i < 4; i++) {
if (i == id) {
continue;
}if (this.defaultFocusTraversalKeys[i].contains$O(keystroke)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["focus traversal keys must be unique for a Component"]);
}}
}
oldKeys=this.defaultFocusTraversalKeys[id];
this.defaultFocusTraversalKeys[id]=$I$(10,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(11,1).c$$java_util_Collection,[keystrokes])]);
}this.firePropertyChange$S$O$O(C$.defaultFocusTraversalKeyPropertyNames[id], oldKeys, keystrokes);
});

Clazz.newMeth(C$, 'getDefaultFocusTraversalKeys$I',  function (id) {
if (id < 0 || id >= 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}return this.defaultFocusTraversalKeys[id];
});

Clazz.newMeth(C$, 'getCurrentFocusCycleRoot$',  function () {
{
if (C$.currentFocusCycleRoot == null ) {
return null;
}return (C$.currentFocusCycleRoot.appContext === $I$(7).getAppContext$() ) ? C$.currentFocusCycleRoot : null;
}});

Clazz.newMeth(C$, 'getGlobalCurrentFocusCycleRoot$',  function () {
{
p$1.checkKFMSecurity.apply(this, []);
return C$.currentFocusCycleRoot;
}});

Clazz.newMeth(C$, 'setGlobalCurrentFocusCycleRoot$java_awt_Container',  function (newFocusCycleRoot) {
var oldFocusCycleRoot;
{
oldFocusCycleRoot=this.getCurrentFocusCycleRoot$();
C$.currentFocusCycleRoot=newFocusCycleRoot;
}this.firePropertyChange$S$O$O("currentFocusCycleRoot", oldFocusCycleRoot, newFocusCycleRoot);
});

Clazz.newMeth(C$, 'setGlobalCurrentFocusCycleRootPriv$java_awt_Container',  function (newFocusCycleRoot) {
this.setGlobalCurrentFocusCycleRoot$java_awt_Container(newFocusCycleRoot);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (listener != null ) {
{
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(13,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
}}});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
if (listener != null ) {
{
if (this.changeSupport != null ) {
this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}}}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(13,1).c$$O,[this]);
}return this.changeSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
if (listener != null ) {
{
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(13,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
}}});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
if (listener != null ) {
{
if (this.changeSupport != null ) {
this.changeSupport.removePropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
}}}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$S',  function (propertyName) {
if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(13,1).c$$O,[this]);
}return this.changeSupport.getPropertyChangeListeners$S(propertyName);
});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (oldValue === newValue ) {
return;
}var changeSupport=this.changeSupport;
if (changeSupport != null ) {
changeSupport.firePropertyChange$S$O$O(propertyName, oldValue, newValue);
}});

Clazz.newMeth(C$, 'addVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
if (listener != null ) {
{
if (this.vetoableSupport == null ) {
this.vetoableSupport=Clazz.new_($I$(14,1).c$$O,[this]);
}this.vetoableSupport.addVetoableChangeListener$java_beans_VetoableChangeListener(listener);
}}});

Clazz.newMeth(C$, 'removeVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
if (listener != null ) {
{
if (this.vetoableSupport != null ) {
this.vetoableSupport.removeVetoableChangeListener$java_beans_VetoableChangeListener(listener);
}}}});

Clazz.newMeth(C$, 'getVetoableChangeListeners$',  function () {
if (this.vetoableSupport == null ) {
this.vetoableSupport=Clazz.new_($I$(14,1).c$$O,[this]);
}return this.vetoableSupport.getVetoableChangeListeners$();
});

Clazz.newMeth(C$, 'addVetoableChangeListener$S$java_beans_VetoableChangeListener',  function (propertyName, listener) {
if (listener != null ) {
{
if (this.vetoableSupport == null ) {
this.vetoableSupport=Clazz.new_($I$(14,1).c$$O,[this]);
}this.vetoableSupport.addVetoableChangeListener$S$java_beans_VetoableChangeListener(propertyName, listener);
}}});

Clazz.newMeth(C$, 'removeVetoableChangeListener$S$java_beans_VetoableChangeListener',  function (propertyName, listener) {
if (listener != null ) {
{
if (this.vetoableSupport != null ) {
this.vetoableSupport.removeVetoableChangeListener$S$java_beans_VetoableChangeListener(propertyName, listener);
}}}});

Clazz.newMeth(C$, 'getVetoableChangeListeners$S',  function (propertyName) {
if (this.vetoableSupport == null ) {
this.vetoableSupport=Clazz.new_($I$(14,1).c$$O,[this]);
}return this.vetoableSupport.getVetoableChangeListeners$S(propertyName);
});

Clazz.newMeth(C$, 'fireVetoableChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (oldValue === newValue ) {
return;
}var vetoableSupport=this.vetoableSupport;
if (vetoableSupport != null ) {
vetoableSupport.fireVetoableChange$S$O$O(propertyName, oldValue, newValue);
}});

Clazz.newMeth(C$, 'addKeyEventDispatcher$java_awt_KeyEventDispatcher',  function (dispatcher) {
if (dispatcher != null ) {
{
if (this.keyEventDispatchers == null ) {
this.keyEventDispatchers=Clazz.new_($I$(1,1));
}this.keyEventDispatchers.add$O(dispatcher);
}}});

Clazz.newMeth(C$, 'removeKeyEventDispatcher$java_awt_KeyEventDispatcher',  function (dispatcher) {
if (dispatcher != null ) {
{
if (this.keyEventDispatchers != null ) {
this.keyEventDispatchers.remove$O(dispatcher);
}}}});

Clazz.newMeth(C$, 'getKeyEventDispatchers$',  function () {
return (this.keyEventDispatchers != null ) ? this.keyEventDispatchers.clone$() : null;
});

Clazz.newMeth(C$, 'addKeyEventPostProcessor$java_awt_KeyEventPostProcessor',  function (processor) {
if (processor != null ) {
{
if (this.keyEventPostProcessors == null ) {
this.keyEventPostProcessors=Clazz.new_($I$(1,1));
}this.keyEventPostProcessors.add$O(processor);
}}});

Clazz.newMeth(C$, 'removeKeyEventPostProcessor$java_awt_KeyEventPostProcessor',  function (processor) {
if (processor != null ) {
{
if (this.keyEventPostProcessors != null ) {
this.keyEventPostProcessors.remove$O(processor);
}}}});

Clazz.newMeth(C$, 'getKeyEventPostProcessors$',  function () {
return (this.keyEventPostProcessors != null ) ? this.keyEventPostProcessors.clone$() : null;
});

Clazz.newMeth(C$, 'setMostRecentFocusOwner$java_awt_Component',  function (component) {
var window=component;
while (window != null  && !window.isWindowOrJSApplet$() ){
window=window.parent;
}
if (window != null ) {
C$.setMostRecentFocusOwner$java_awt_Window$java_awt_Component(window, component);
}}, 1);

Clazz.newMeth(C$, 'setMostRecentFocusOwner$java_awt_Window$java_awt_Component',  function (window, component) {
C$.mostRecentFocusOwners.put$O$O(window, component);
}, 1);

Clazz.newMeth(C$, 'clearMostRecentFocusOwner$java_awt_Component',  function (comp) {
var window;
if (comp == null ) {
return;
}window=comp.getParent$();
while (window != null  && !window.isWindowOrJSApplet$() ){
window=window.getParent$();
}
if ((window != null ) && (C$.getMostRecentFocusOwner$java_awt_Window(window) === comp ) ) {
C$.setMostRecentFocusOwner$java_awt_Window$java_awt_Component(window, null);
}if (window != null ) {
var realWindow=window;
if (realWindow.getTemporaryLostComponent$() === comp ) {
realWindow.setTemporaryLostComponent$java_awt_Component(null);
}}}, 1);

Clazz.newMeth(C$, 'getMostRecentFocusOwner$java_awt_Window',  function (window) {
return C$.mostRecentFocusOwners.get$O(window);
}, 1);

Clazz.newMeth(C$, 'redispatchEvent$java_awt_Component$java_awt_AWTEvent',  function (target, e) {
e.focusManagerIsDispatching=true;
target.dispatchEvent$java_awt_AWTEvent(e);
e.focusManagerIsDispatching=false;
});

Clazz.newMeth(C$, 'focusNextComponent$',  function () {
var focusOwner=this.getFocusOwner$();
if (focusOwner != null ) {
this.focusNextComponent$java_awt_Component(focusOwner);
}});

Clazz.newMeth(C$, 'focusPreviousComponent$',  function () {
var focusOwner=this.getFocusOwner$();
if (focusOwner != null ) {
this.focusPreviousComponent$java_awt_Component(focusOwner);
}});

Clazz.newMeth(C$, 'upFocusCycle$',  function () {
var focusOwner=this.getFocusOwner$();
if (focusOwner != null ) {
this.upFocusCycle$java_awt_Component(focusOwner);
}});

Clazz.newMeth(C$, 'downFocusCycle$',  function () {
var focusOwner=this.getFocusOwner$();
if (Clazz.instanceOf(focusOwner, "java.awt.Container")) {
this.downFocusCycle$java_awt_Container(focusOwner);
}});

Clazz.newMeth(C$, 'dumpRequests$',  function () {
System.err.println$S(">>> Requests dump, time: " + Long.$s(System.currentTimeMillis$()));
{
for (var req, $req = C$.heavyweightRequests.iterator$(); $req.hasNext$()&&((req=($req.next$())),1);) {
System.err.println$S(">>> Req: " + req);
}
}System.err.println$S("");
});

Clazz.newMeth(C$, 'processSynchronousLightweightTransfer$java_awt_Component$java_awt_Component$Z$Z$J',  function (heavyweight, descendant, temporary, focusedWindowChangeAllowed, time) {
var parentWindow=$I$(15).getContainingWindow$java_awt_Component(heavyweight);
if (parentWindow == null  || !parentWindow.syncLWRequests ) {
return false;
}if (descendant == null ) {
descendant=heavyweight;
}var manager=C$.getCurrentKeyboardFocusManager$sun_awt_AppContext($I$(15).targetToAppContext$O(descendant));
var currentFocusOwnerEvent=null;
var newFocusOwnerEvent=null;
var currentFocusOwner=manager.getGlobalFocusOwner$();
{
var hwFocusRequest=C$.getLastHWRequest$();
if (hwFocusRequest == null  && heavyweight === manager.getNativeFocusOwner$()   && C$.allowSyncFocusRequests ) {
if (descendant === currentFocusOwner ) {
return true;
}manager.enqueueKeyEvents$J$java_awt_Component(time, descendant);
hwFocusRequest=Clazz.new_([heavyweight, descendant, temporary, $I$(17).UNKNOWN],$I$(16,1).c$$java_awt_Component$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause);
C$.heavyweightRequests.add$O(hwFocusRequest);
if (currentFocusOwner != null ) {
currentFocusOwnerEvent=Clazz.new_($I$(18,1).c$$java_awt_Component$I$Z$java_awt_Component,[currentFocusOwner, 1005, temporary, descendant]);
}newFocusOwnerEvent=Clazz.new_($I$(18,1).c$$java_awt_Component$I$Z$java_awt_Component,[descendant, 1004, temporary, currentFocusOwner]);
}}var result=false;
var clearing=C$.clearingCurrentLightweightRequests;
var caughtEx=null;
try {
C$.clearingCurrentLightweightRequests=false;
{
if (currentFocusOwnerEvent != null  && currentFocusOwner != null  ) {
(currentFocusOwnerEvent).isPosted=true;
caughtEx=C$.dispatchAndCatchException$Throwable$java_awt_Component$java_awt_event_FocusEvent(caughtEx, currentFocusOwner, currentFocusOwnerEvent);
result=true;
}if (newFocusOwnerEvent != null  && descendant != null  ) {
(newFocusOwnerEvent).isPosted=true;
caughtEx=C$.dispatchAndCatchException$Throwable$java_awt_Component$java_awt_event_FocusEvent(caughtEx, descendant, newFocusOwnerEvent);
result=true;
}}} finally {
C$.clearingCurrentLightweightRequests=clearing;
}
if (Clazz.instanceOf(caughtEx, "java.lang.RuntimeException")) {
throw caughtEx;
} else if (Clazz.instanceOf(caughtEx, "java.lang.Error")) {
throw caughtEx;
}return result;
}, 1);

Clazz.newMeth(C$, 'shouldNativelyFocusHeavyweight$java_awt_Component$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause',  function (heavyweight, descendant, temporary, focusedWindowChangeAllowed, time, cause) {
if (descendant == null ) {
descendant=heavyweight;
}var manager=C$.getCurrentKeyboardFocusManager$sun_awt_AppContext($I$(15).targetToAppContext$O(descendant));
var thisManager=C$.getCurrentKeyboardFocusManager$();
var currentFocusOwner=thisManager.getGlobalFocusOwner$();
var nativeFocusOwner=thisManager.getNativeFocusOwner$();
var nativeFocusedWindow=thisManager.getNativeFocusedWindow$();
{
var hwFocusRequest=C$.getLastHWRequest$();
if (hwFocusRequest == null  && heavyweight === nativeFocusOwner   && heavyweight.getContainingWindow$() === nativeFocusedWindow  ) {
if (descendant === currentFocusOwner ) {
return 0;
}manager.enqueueKeyEvents$J$java_awt_Component(time, descendant);
hwFocusRequest=Clazz.new_($I$(16,1).c$$java_awt_Component$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause,[heavyweight, descendant, temporary, cause]);
C$.heavyweightRequests.add$O(hwFocusRequest);
if (currentFocusOwner != null ) {
var currentFocusOwnerEvent=Clazz.new_($I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[currentFocusOwner, 1005, temporary, descendant, cause]);
$I$(15).postEvent$sun_awt_AppContext$java_awt_AWTEvent(currentFocusOwner.appContext, currentFocusOwnerEvent);
}var newFocusOwnerEvent=Clazz.new_($I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[descendant, 1004, temporary, currentFocusOwner, cause]);
$I$(15).postEvent$sun_awt_AppContext$java_awt_AWTEvent(descendant.appContext, newFocusOwnerEvent);
return 1;
} else if (hwFocusRequest != null  && hwFocusRequest.heavyweight === heavyweight  ) {
if (hwFocusRequest.addLightweightRequest$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause(descendant, temporary, cause)) {
manager.enqueueKeyEvents$J$java_awt_Component(time, descendant);
}return 1;
} else {
if (!focusedWindowChangeAllowed) {
if (hwFocusRequest === $I$(16).CLEAR_GLOBAL_FOCUS_OWNER ) {
var size=C$.heavyweightRequests.size$();
hwFocusRequest=((size >= 2) ? C$.heavyweightRequests.get$I(size - 2) : null);
}if (C$.focusedWindowChanged$java_awt_Component$java_awt_Component(heavyweight, (hwFocusRequest != null ) ? hwFocusRequest.heavyweight : nativeFocusedWindow)) {
return 0;
}}manager.enqueueKeyEvents$J$java_awt_Component(time, descendant);
C$.heavyweightRequests.add$O(Clazz.new_($I$(16,1).c$$java_awt_Component$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause,[heavyweight, descendant, temporary, cause]));
return 2;
}}}, 1);

Clazz.newMeth(C$, 'markClearGlobalFocusOwner$',  function () {
var nativeFocusedWindow=C$.getCurrentKeyboardFocusManager$().getNativeFocusedWindow$();
{
var hwFocusRequest=C$.getLastHWRequest$();
if (hwFocusRequest === $I$(16).CLEAR_GLOBAL_FOCUS_OWNER ) {
return null;
}C$.heavyweightRequests.add$O($I$(16).CLEAR_GLOBAL_FOCUS_OWNER);
var activeWindow=((hwFocusRequest != null ) ? $I$(15).getContainingWindow$java_awt_Component(hwFocusRequest.heavyweight) : nativeFocusedWindow);
while (activeWindow != null  && !(Clazz.instanceOf(activeWindow, "javax.swing.JFrame") || Clazz.instanceOf(activeWindow, "javax.swing.JDialog") || Clazz.instanceOf(activeWindow, "java.applet.JSApplet")  ) ){
activeWindow=activeWindow.getParent_NoClientCode$();
}
return activeWindow;
}}, 1);

Clazz.newMeth(C$, 'getCurrentWaitingRequest$java_awt_Component',  function (parent) {
{
var hwFocusRequest=C$.getFirstHWRequest$();
if (hwFocusRequest != null ) {
if (hwFocusRequest.heavyweight === parent ) {
var lwFocusRequest=hwFocusRequest.lightweightRequests.getFirst$();
if (lwFocusRequest != null ) {
return lwFocusRequest.component;
}}}}return null;
});

Clazz.newMeth(C$, 'isAutoFocusTransferEnabled$',  function () {
{
return (C$.heavyweightRequests.size$() == 0) && !C$.disableRestoreFocus && (null == C$.currentLightweightRequests )  ;
}}, 1);

Clazz.newMeth(C$, 'isAutoFocusTransferEnabledFor$java_awt_Component',  function (comp) {
return C$.isAutoFocusTransferEnabled$() && comp.isAutoFocusTransferOnDisposal$() ;
}, 1);

Clazz.newMeth(C$, 'dispatchAndCatchException$Throwable$java_awt_Component$java_awt_event_FocusEvent',  function (ex, comp, event) {
var retEx=null;
try {
comp.dispatchEvent$java_awt_AWTEvent(event);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"RuntimeException")){
var re = e$$;
{
retEx=re;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var er = e$$;
{
retEx=er;
}
} else {
throw e$$;
}
}
if (retEx != null ) {
if (ex != null ) {
C$.handleException$Throwable(ex);
}return retEx;
}return ex;
}, 1);

Clazz.newMeth(C$, 'handleException$Throwable',  function (ex) {
ex.printStackTrace$();
}, 1);

Clazz.newMeth(C$, 'processCurrentLightweightRequests$',  function () {
var manager=C$.getCurrentKeyboardFocusManager$();
var localLightweightRequests=null;
var globalFocusOwner=manager.getGlobalFocusOwner$();
if ((globalFocusOwner != null ) && (globalFocusOwner.appContext !== $I$(7).getAppContext$() ) ) {
return;
}{
if (C$.currentLightweightRequests != null ) {
C$.clearingCurrentLightweightRequests=true;
C$.disableRestoreFocus=true;
localLightweightRequests=C$.currentLightweightRequests;
C$.allowSyncFocusRequests=(localLightweightRequests.size$() < 2);
C$.currentLightweightRequests=null;
} else {
return;
}}var caughtEx=null;
try {
if (localLightweightRequests != null ) {
var lastFocusOwner=null;
var currentFocusOwner=null;
for (var iter=localLightweightRequests.iterator$(); iter.hasNext$(); ) {
currentFocusOwner=manager.getGlobalFocusOwner$();
var lwFocusRequest=iter.next$();
if (!iter.hasNext$()) {
C$.disableRestoreFocus=false;
}var currentFocusOwnerEvent=null;
if (currentFocusOwner != null ) {
currentFocusOwnerEvent=Clazz.new_($I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[currentFocusOwner, 1005, lwFocusRequest.temporary, lwFocusRequest.component, lwFocusRequest.cause]);
}var newFocusOwnerEvent=Clazz.new_([lwFocusRequest.component, 1004, lwFocusRequest.temporary, currentFocusOwner == null  ? lastFocusOwner : currentFocusOwner, lwFocusRequest.cause],$I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
if (currentFocusOwner != null ) {
(currentFocusOwnerEvent).isPosted=true;
caughtEx=C$.dispatchAndCatchException$Throwable$java_awt_Component$java_awt_event_FocusEvent(caughtEx, currentFocusOwner, currentFocusOwnerEvent);
}(newFocusOwnerEvent).isPosted=true;
caughtEx=C$.dispatchAndCatchException$Throwable$java_awt_Component$java_awt_event_FocusEvent(caughtEx, lwFocusRequest.component, newFocusOwnerEvent);
if (manager.getGlobalFocusOwner$() === lwFocusRequest.component ) {
lastFocusOwner=lwFocusRequest.component;
}}
}} finally {
C$.clearingCurrentLightweightRequests=false;
C$.disableRestoreFocus=false;
localLightweightRequests=null;
C$.allowSyncFocusRequests=true;
}
if (Clazz.instanceOf(caughtEx, "java.lang.RuntimeException")) {
throw caughtEx;
} else if (Clazz.instanceOf(caughtEx, "java.lang.Error")) {
throw caughtEx;
}}, 1);

Clazz.newMeth(C$, 'retargetUnexpectedFocusEvent$java_awt_event_FocusEvent',  function (fe) {
{
if (C$.removeFirstRequest$()) {
return C$.retargetFocusEvent$java_awt_AWTEvent(fe);
}var source=fe.getComponent$();
var opposite=fe.getOppositeComponent$();
var temporary=false;
if (fe.getID$() == 1005 && (opposite == null  || C$.isTemporary$java_awt_Component$java_awt_Component(opposite, source) ) ) {
temporary=true;
}return Clazz.new_([source, fe.getID$(), temporary, opposite, $I$(17).NATIVE_SYSTEM],$I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
}}, 1);

Clazz.newMeth(C$, 'retargetFocusGained$java_awt_event_FocusEvent',  function (fe) {
Clazz.assert(C$, this, function(){return (fe.getID$() == 1004)});
var currentFocusOwner=C$.getCurrentKeyboardFocusManager$().getGlobalFocusOwner$();
var source=fe.getComponent$();
var opposite=fe.getOppositeComponent$();
var nativeSource=C$.getHeavyweight$java_awt_Component(source);
{
var hwFocusRequest=C$.getFirstHWRequest$();
if (hwFocusRequest === $I$(16).CLEAR_GLOBAL_FOCUS_OWNER ) {
return C$.retargetUnexpectedFocusEvent$java_awt_event_FocusEvent(fe);
}if (source != null  && nativeSource == null   && hwFocusRequest != null  ) {
if (source === hwFocusRequest.getFirstLightweightRequest$().component ) {
source=hwFocusRequest.heavyweight;
nativeSource=source;
}}if (hwFocusRequest != null  && nativeSource === hwFocusRequest.heavyweight  ) {
C$.heavyweightRequests.removeFirst$();
var lwFocusRequest=hwFocusRequest.lightweightRequests.removeFirst$();
var newSource=lwFocusRequest.component;
if (currentFocusOwner != null ) {
C$.newFocusOwner=newSource;
}var temporary=(opposite == null  || C$.isTemporary$java_awt_Component$java_awt_Component(newSource, opposite) ) ? false : lwFocusRequest.temporary;
if (hwFocusRequest.lightweightRequests.size$() > 0) {
C$.currentLightweightRequests=hwFocusRequest.lightweightRequests;
$I$(20,"invokeLater$Runnable",[((P$.KeyboardFocusManager$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "KeyboardFocusManager$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(21).processCurrentLightweightRequests$();
});
})()
), Clazz.new_(P$.KeyboardFocusManager$1.$init$,[this, null]))]);
}return Clazz.new_($I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[newSource, 1004, temporary, opposite, lwFocusRequest.cause]);
}if (currentFocusOwner != null  && currentFocusOwner.getContainingWindow$() === source   && (hwFocusRequest == null  || source !== hwFocusRequest.heavyweight  ) ) {
return Clazz.new_([currentFocusOwner, 1004, false, null, $I$(17).ACTIVATION],$I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
}return C$.retargetUnexpectedFocusEvent$java_awt_event_FocusEvent(fe);
}}, 1);

Clazz.newMeth(C$, 'retargetFocusLost$java_awt_event_FocusEvent',  function (fe) {
Clazz.assert(C$, this, function(){return (fe.getID$() == 1005)});
var currentFocusOwner=C$.getCurrentKeyboardFocusManager$().getGlobalFocusOwner$();
var opposite=fe.getOppositeComponent$();
var nativeOpposite=C$.getHeavyweight$java_awt_Component(opposite);
{
var hwFocusRequest=C$.getFirstHWRequest$();
if (hwFocusRequest === $I$(16).CLEAR_GLOBAL_FOCUS_OWNER ) {
if (currentFocusOwner != null ) {
C$.heavyweightRequests.removeFirst$();
return Clazz.new_([currentFocusOwner, 1005, false, null, $I$(17).CLEAR_GLOBAL_FOCUS_OWNER],$I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
}} else if (opposite == null ) {
if (currentFocusOwner != null ) {
return Clazz.new_([currentFocusOwner, 1005, true, null, $I$(17).ACTIVATION],$I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
} else {
return fe;
}} else if (hwFocusRequest != null  && (nativeOpposite === hwFocusRequest.heavyweight  || nativeOpposite == null  && opposite === hwFocusRequest.getFirstLightweightRequest$().component   ) ) {
if (currentFocusOwner == null ) {
return fe;
}var lwFocusRequest=hwFocusRequest.lightweightRequests.getFirst$();
var temporary=C$.isTemporary$java_awt_Component$java_awt_Component(opposite, currentFocusOwner) ? true : lwFocusRequest.temporary;
return Clazz.new_($I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause,[currentFocusOwner, 1005, temporary, lwFocusRequest.component, lwFocusRequest.cause]);
} else if (C$.focusedWindowChanged$java_awt_Component$java_awt_Component(opposite, currentFocusOwner)) {
if (!fe.isTemporary$() && currentFocusOwner != null  ) {
fe=Clazz.new_([currentFocusOwner, 1005, true, opposite, $I$(17).ACTIVATION],$I$(19,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
}return fe;
}return C$.retargetUnexpectedFocusEvent$java_awt_event_FocusEvent(fe);
}}, 1);

Clazz.newMeth(C$, 'retargetFocusEvent$java_awt_AWTEvent',  function (event) {
if (C$.clearingCurrentLightweightRequests) {
return event;
}var manager=C$.getCurrentKeyboardFocusManager$();
{
if (C$.newFocusOwner != null  && event.getID$() == 1005 ) {
var fe=event;
if (manager.getGlobalFocusOwner$() === fe.getComponent$()  && fe.getOppositeComponent$() === C$.newFocusOwner  ) {
C$.newFocusOwner=null;
return event;
}}}C$.processCurrentLightweightRequests$();
switch (event.getID$()) {
case 1004:
{
event=C$.retargetFocusGained$java_awt_event_FocusEvent(event);
break;
}case 1005:
{
event=C$.retargetFocusLost$java_awt_event_FocusEvent(event);
break;
}default:
}
return event;
}, 1);

Clazz.newMeth(C$, 'clearMarkers$',  function () {
});

Clazz.newMeth(C$, 'removeFirstRequest$',  function () {
var manager=C$.getCurrentKeyboardFocusManager$();
{
var hwFocusRequest=C$.getFirstHWRequest$();
if (hwFocusRequest != null ) {
C$.heavyweightRequests.removeFirst$();
if (hwFocusRequest.lightweightRequests != null ) {
for (var lwIter=hwFocusRequest.lightweightRequests.iterator$(); lwIter.hasNext$(); ) {
manager.dequeueKeyEvents$J$java_awt_Component(-1, lwIter.next$().component);
}
}}if (C$.heavyweightRequests.size$() == 0) {
manager.clearMarkers$();
}return (C$.heavyweightRequests.size$() > 0);
}}, 1);

Clazz.newMeth(C$, 'removeLastFocusRequest$java_awt_Component',  function (heavyweight) {
var manager=C$.getCurrentKeyboardFocusManager$();
{
var hwFocusRequest=C$.getLastHWRequest$();
if (hwFocusRequest != null  && hwFocusRequest.heavyweight === heavyweight  ) {
C$.heavyweightRequests.removeLast$();
}if (C$.heavyweightRequests.size$() == 0) {
manager.clearMarkers$();
}}}, 1);

Clazz.newMeth(C$, 'focusedWindowChanged$java_awt_Component$java_awt_Component',  function (to, from) {
var wto=$I$(15).getContainingWindow$java_awt_Component(to);
var wfrom=$I$(15).getContainingWindow$java_awt_Component(from);
if (wto == null  && wfrom == null  ) {
return true;
}if (wto == null ) {
return true;
}if (wfrom == null ) {
return true;
}return (wto !== wfrom );
}, 1);

Clazz.newMeth(C$, 'isTemporary$java_awt_Component$java_awt_Component',  function (to, from) {
var wto=$I$(15).getContainingWindow$java_awt_Component(to);
var wfrom=$I$(15).getContainingWindow$java_awt_Component(from);
if (wto == null  && wfrom == null  ) {
return false;
}if (wto == null ) {
return true;
}if (wfrom == null ) {
return false;
}return (wto !== wfrom );
}, 1);

Clazz.newMeth(C$, 'getHeavyweight$java_awt_Component',  function (comp) {
if (comp == null  || comp.getPeer$() == null  ) {
return null;
} else if (Clazz.instanceOf(comp.getPeer$(), "java.awt.peer.LightweightPeer")) {
return comp.getNativeContainer$();
} else {
return comp;
}}, 1);

Clazz.newMeth(C$, 'isProxyActiveImpl$java_awt_event_KeyEvent',  function (e) {
return e.isProxyActive ||false;
}, 1);

Clazz.newMeth(C$, 'isProxyActive$java_awt_event_KeyEvent',  function (e) {
return C$.isProxyActiveImpl$java_awt_event_KeyEvent(e);
}, 1);

Clazz.newMeth(C$, 'getLastHWRequest$',  function () {
{
return (C$.heavyweightRequests.size$() > 0) ? C$.heavyweightRequests.getLast$() : null;
}}, 1);

Clazz.newMeth(C$, 'getFirstHWRequest$',  function () {
{
return (C$.heavyweightRequests.size$() > 0) ? C$.heavyweightRequests.getFirst$() : null;
}}, 1);

Clazz.newMeth(C$, 'checkKFMSecurity',  function () {
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.defaultFocusTraversalKeyPropertyNames=Clazz.array(String, -1, ["forwardDefaultFocusTraversalKeys", "backwardDefaultFocusTraversalKeys", "upCycleDefaultFocusTraversalKeys", "downCycleDefaultFocusTraversalKeys"]);
C$.defaultFocusTraversalKeyStrokes=Clazz.array($I$(3), -2, [Clazz.array($I$(3), -1, [$I$(3).getAWTKeyStroke$I$I$Z(9, 0, false), $I$(3).getAWTKeyStroke$I$I$Z(9, 130, false)]), Clazz.array($I$(3), -1, [$I$(3).getAWTKeyStroke$I$I$Z(9, 65, false), $I$(3).getAWTKeyStroke$I$I$Z(9, 195, false)]), Clazz.array($I$(3), -1, []), Clazz.array($I$(3), -1, [])]);
C$.mostRecentFocusOwners=Clazz.new_($I$(4,1));
C$.heavyweightRequests=Clazz.new_($I$(1,1));
C$.allowSyncFocusRequests=true;
C$.newFocusOwner=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyboardFocusManager, "LightweightFocusRequest", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['temporary'],'O',['component','java.awt.Component','cause','sun.awt.CausedFocusEvent.Cause']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause',  function (component, temporary, cause) {
;C$.$init$.apply(this);
this.component=component;
this.temporary=temporary;
this.cause=cause;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "LightweightFocusRequest[component=" + this.component + ",temporary=" + this.temporary + ", cause=" + this.cause + "]" ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyboardFocusManager, "HeavyweightFocusRequest", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['heavyweight','java.awt.Component','lightweightRequests','java.util.LinkedList']]
,['O',['CLEAR_GLOBAL_FOCUS_OWNER','java.awt.KeyboardFocusManager.HeavyweightFocusRequest']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.heavyweight=null;
this.lightweightRequests=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause',  function (heavyweight, descendant, temporary, cause) {
;C$.$init$.apply(this);
this.heavyweight=heavyweight;
this.lightweightRequests=Clazz.new_($I$(1,1));
this.addLightweightRequest$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause(descendant, temporary, cause);
}, 1);

Clazz.newMeth(C$, 'addLightweightRequest$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause',  function (descendant, temporary, cause) {
var lastDescendant=((this.lightweightRequests.size$() > 0) ? this.lightweightRequests.getLast$().component : null);
if (descendant !== lastDescendant ) {
this.lightweightRequests.add$O(Clazz.new_($I$(2,1).c$$java_awt_Component$Z$sun_awt_CausedFocusEvent_Cause,[descendant, temporary, cause]));
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'getFirstLightweightRequest$',  function () {
if (this === C$.CLEAR_GLOBAL_FOCUS_OWNER ) {
return null;
}return this.lightweightRequests.getFirst$();
});

Clazz.newMeth(C$, 'toString',  function () {
var first=true;
var str="HeavyweightFocusRequest[heavweight=" + this.heavyweight + ",lightweightRequests=" ;
if (this.lightweightRequests == null ) {
str+=null;
} else {
str+="[";
for (var lwRequest, $lwRequest = this.lightweightRequests.iterator$(); $lwRequest.hasNext$()&&((lwRequest=($lwRequest.next$())),1);) {
if (first) {
first=false;
} else {
str+=",";
}str+=lwRequest;
}
str+="]";
}str+="]";
return str;
});

C$.$static$=function(){C$.$static$=0;
C$.CLEAR_GLOBAL_FOCUS_OWNER=Clazz.new_(C$);
};
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

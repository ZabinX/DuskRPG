(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ContainerOrderFocusTraversalPolicy", null, 'java.awt.FocusTraversalPolicy', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.FORWARD_TRAVERSAL=0;
this.BACKWARD_TRAVERSAL=1;
this.implicitDownCycleTraversal=true;
},1);

C$.$fields$=[['Z',['implicitDownCycleTraversal'],'I',['FORWARD_TRAVERSAL','BACKWARD_TRAVERSAL'],'O',['cachedRoot','java.awt.Container','cachedCycle','java.util.List']]]

Clazz.newMeth(C$, 'getFocusTraversalCycle$java_awt_Container',  function (aContainer) {
var cycle=Clazz.new_($I$(1,1));
p$1.enumerateCycle$java_awt_Container$java_util_List.apply(this, [aContainer, cycle]);
return cycle;
}, p$1);

Clazz.newMeth(C$, 'getComponentIndex$java_util_List$java_awt_Component',  function (cycle, aComponent) {
return cycle.indexOf$O(aComponent);
}, p$1);

Clazz.newMeth(C$, 'enumerateCycle$java_awt_Container$java_util_List',  function (container, cycle) {
if (!(container.isVisible$() && container.isDisplayable$() )) {
return;
}cycle.add$O(container);
var components=container.getChildArray$();
for (var i=0, n=container.getComponentCount$(); i < n; i++) {
var comp=components[i];
if (Clazz.instanceOf(comp, "java.awt.Container")) {
var cont=comp;
if (!cont.isFocusCycleRoot$() && !cont.isFocusTraversalPolicyProvider$() ) {
p$1.enumerateCycle$java_awt_Container$java_util_List.apply(this, [cont, cycle]);
continue;
}}cycle.add$O(comp);
}
}, p$1);

Clazz.newMeth(C$, 'getTopmostProvider$java_awt_Container$java_awt_Component',  function (focusCycleRoot, aComponent) {
var aCont=aComponent.getParent$();
var ftp=null;
while (aCont !== focusCycleRoot  && aCont != null  ){
if (aCont.isFocusTraversalPolicyProvider$()) {
ftp=aCont;
}aCont=aCont.getParent$();
}
if (aCont == null ) {
return null;
}return ftp;
}, p$1);

Clazz.newMeth(C$, 'getComponentDownCycle$java_awt_Component$I',  function (comp, traversalDirection) {
var retComp=null;
if (Clazz.instanceOf(comp, "java.awt.Container")) {
var cont=comp;
if (cont.isFocusCycleRoot$()) {
if (this.getImplicitDownCycleTraversal$()) {
retComp=cont.getFocusTraversalPolicy$().getDefaultComponent$java_awt_Container(cont);
} else {
return null;
}} else if (cont.isFocusTraversalPolicyProvider$()) {
retComp=(traversalDirection == 0 ? cont.getFocusTraversalPolicy$().getDefaultComponent$java_awt_Container(cont) : cont.getFocusTraversalPolicy$().getLastComponent$java_awt_Container(cont));
}}return retComp;
}, p$1);

Clazz.newMeth(C$, 'getComponentAfter$java_awt_Container$java_awt_Component',  function (aContainer, aComponent) {
if (aContainer == null  || aComponent == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer and aComponent cannot be null"]);
}if (!aContainer.isFocusTraversalPolicyProvider$() && !aContainer.isFocusCycleRoot$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer should be focus cycle root or focus traversal policy provider"]);
} else if (aContainer.isFocusCycleRoot$() && !aComponent.isFocusCycleRoot$java_awt_Container(aContainer) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer is not a focus cycle root of aComponent"]);
}if (!(aContainer.isVisible$() && aContainer.isDisplayable$() )) {
return null;
}var comp=p$1.getComponentDownCycle$java_awt_Component$I.apply(this, [aComponent, 0]);
if (comp != null ) {
return comp;
}var provider=p$1.getTopmostProvider$java_awt_Container$java_awt_Component.apply(this, [aContainer, aComponent]);
if (provider != null ) {
var policy=provider.getFocusTraversalPolicy$();
var afterComp=policy.getComponentAfter$java_awt_Container$java_awt_Component(provider, aComponent);
if (afterComp != null ) {
return afterComp;
}aComponent=provider;
}var cycle=p$1.getFocusTraversalCycle$java_awt_Container.apply(this, [aContainer]);
var index=p$1.getComponentIndex$java_util_List$java_awt_Component.apply(this, [cycle, aComponent]);
if (index < 0) {
return this.getFirstComponent$java_awt_Container(aContainer);
}for (index++; index < cycle.size$(); index++) {
comp=cycle.get$I(index);
if (this.accept$java_awt_Component(comp)) {
return comp;
} else if ((comp=p$1.getComponentDownCycle$java_awt_Component$I.apply(this, [comp, 0])) != null ) {
return comp;
}}
if (aContainer.isFocusCycleRoot$()) {
this.cachedRoot=aContainer;
this.cachedCycle=cycle;
comp=this.getFirstComponent$java_awt_Container(aContainer);
this.cachedRoot=null;
this.cachedCycle=null;
return comp;
}return null;
});

Clazz.newMeth(C$, 'getComponentBefore$java_awt_Container$java_awt_Component',  function (aContainer, aComponent) {
if (aContainer == null  || aComponent == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer and aComponent cannot be null"]);
}if (!aContainer.isFocusTraversalPolicyProvider$() && !aContainer.isFocusCycleRoot$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer should be focus cycle root or focus traversal policy provider"]);
} else if (aContainer.isFocusCycleRoot$() && !aComponent.isFocusCycleRoot$java_awt_Container(aContainer) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer is not a focus cycle root of aComponent"]);
}/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(aContainer.getTreeLock$());
{
if (!(aContainer.isVisible$() && aContainer.isDisplayable$() )) {
return null;
}var provider=p$1.getTopmostProvider$java_awt_Container$java_awt_Component.apply(this, [aContainer, aComponent]);
if (provider != null ) {
var policy=provider.getFocusTraversalPolicy$();
var beforeComp=policy.getComponentBefore$java_awt_Container$java_awt_Component(provider, aComponent);
if (beforeComp != null ) {
return beforeComp;
}aComponent=provider;
if (this.accept$java_awt_Component(aComponent)) {
return aComponent;
}}var cycle=p$1.getFocusTraversalCycle$java_awt_Container.apply(this, [aContainer]);
var index=p$1.getComponentIndex$java_util_List$java_awt_Component.apply(this, [cycle, aComponent]);
if (index < 0) {
return this.getLastComponent$java_awt_Container(aContainer);
}var comp=null;
var tryComp=null;
for (index--; index >= 0; index--) {
comp=cycle.get$I(index);
if (comp !== aContainer  && (tryComp=p$1.getComponentDownCycle$java_awt_Component$I.apply(this, [comp, 1])) != null  ) {
return tryComp;
} else if (this.accept$java_awt_Component(comp)) {
return comp;
}}
if (aContainer.isFocusCycleRoot$()) {
this.cachedRoot=aContainer;
this.cachedCycle=cycle;
comp=this.getLastComponent$java_awt_Container(aContainer);
this.cachedRoot=null;
this.cachedCycle=null;
return comp;
}}return null;
});

Clazz.newMeth(C$, 'getFirstComponent$java_awt_Container',  function (aContainer) {
var cycle;
if (aContainer == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer cannot be null"]);
}if (!(aContainer.isVisible$() && aContainer.isDisplayable$() )) {
return null;
}if (this.cachedRoot === aContainer ) {
cycle=this.cachedCycle;
} else {
cycle=p$1.getFocusTraversalCycle$java_awt_Container.apply(this, [aContainer]);
}if (cycle.size$() == 0) {
return null;
}for (var comp, $comp = cycle.iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
if (comp === aContainer ) continue;
if (this.accept$java_awt_Component(comp)) {
return comp;
} else if (comp !== aContainer  && (comp=p$1.getComponentDownCycle$java_awt_Component$I.apply(this, [comp, 0])) != null  ) {
return comp;
}}
return null;
});

Clazz.newMeth(C$, 'getLastComponent$java_awt_Container',  function (aContainer) {
var cycle;
if (aContainer == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer cannot be null"]);
}/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(aContainer.getTreeLock$());
{
if (!(aContainer.isVisible$() && aContainer.isDisplayable$() )) {
return null;
}if (this.cachedRoot === aContainer ) {
cycle=this.cachedCycle;
} else {
cycle=p$1.getFocusTraversalCycle$java_awt_Container.apply(this, [aContainer]);
}if (cycle.size$() == 0) {
return null;
}for (var i=cycle.size$() - 1; i >= 0; i--) {
var comp=cycle.get$I(i);
if (this.accept$java_awt_Component(comp)) {
return comp;
} else if (Clazz.instanceOf(comp, "java.awt.Container") && comp !== aContainer  ) {
var cont=comp;
if (cont.isFocusTraversalPolicyProvider$()) {
return cont.getFocusTraversalPolicy$().getLastComponent$java_awt_Container(cont);
}}}
}return null;
});

Clazz.newMeth(C$, 'getDefaultComponent$java_awt_Container',  function (aContainer) {
return this.getFirstComponent$java_awt_Container(aContainer);
});

Clazz.newMeth(C$, 'setImplicitDownCycleTraversal$Z',  function (implicitDownCycleTraversal) {
this.implicitDownCycleTraversal=implicitDownCycleTraversal;
});

Clazz.newMeth(C$, 'getImplicitDownCycleTraversal$',  function () {
return this.implicitDownCycleTraversal;
});

Clazz.newMeth(C$, 'accept$java_awt_Component',  function (aComponent) {
if (!aComponent.canBeFocusOwner$()) {
return false;
}if (!aComponent.isWindowOrJSApplet$()) {
for (var enableTest=aComponent.getParent$(); enableTest != null ; enableTest=enableTest.getParent$()) {
if (!(enableTest.isEnabled$() || enableTest.isLightweight$() )) {
return false;
}if (enableTest.isWindowOrJSApplet$()) {
break;
}}
}return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

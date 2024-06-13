(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.SwingContainerOrderFocusTraversalPolicy','java.util.ArrayList','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SortingFocusTraversalPolicy", null, 'javax.swing.InternalFrameFocusTraversalPolicy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.implicitDownCycleTraversal=true;
this.FORWARD_TRAVERSAL=0;
this.BACKWARD_TRAVERSAL=1;
},1);

C$.$fields$=[['Z',['implicitDownCycleTraversal'],'I',['FORWARD_TRAVERSAL','BACKWARD_TRAVERSAL'],'O',['comparator','java.util.Comparator','cachedRoot','java.awt.Container','cachedCycle','java.util.List']]
,['O',['fitnessTestPolicy','javax.swing.SwingContainerOrderFocusTraversalPolicy']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator',  function (comparator) {
Clazz.super_(C$, this);
this.comparator=comparator;
}, 1);

Clazz.newMeth(C$, 'getFocusTraversalCycle$java_awt_Container',  function (aContainer) {
var cycle=Clazz.new_($I$(2,1));
p$1.enumerateAndSortCycle$java_awt_Container$java_util_List.apply(this, [aContainer, cycle]);
return cycle;
}, p$1);

Clazz.newMeth(C$, 'getComponentIndex$java_util_List$java_awt_Component',  function (cycle, aComponent) {
var index;
try {
index=$I$(3).binarySearch$java_util_List$O$java_util_Comparator(cycle, aComponent, this.comparator);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return -1;
} else {
throw e;
}
}
if (index < 0) {
index=cycle.indexOf$O(aComponent);
}return index;
}, p$1);

Clazz.newMeth(C$, 'enumerateAndSortCycle$java_awt_Container$java_util_List',  function (focusCycleRoot, cycle) {
if (focusCycleRoot.isShowing$()) {
p$1.enumerateCycle$java_awt_Container$java_util_List.apply(this, [focusCycleRoot, cycle]);
$I$(3).sort$java_util_List$java_util_Comparator(cycle, this.comparator);
}}, p$1);

Clazz.newMeth(C$, 'enumerateCycle$java_awt_Container$java_util_List',  function (container, cycle) {
if (!(container.isVisible$() && container.isDisplayable$() )) {
return;
}cycle.add$O(container);
var components=container.getComponents$();
for (var comp, $comp = 0, $$comp = components; $comp<$$comp.length&&((comp=($$comp[$comp])),1);$comp++) {
if (Clazz.instanceOf(comp, "java.awt.Container")) {
var cont=comp;
if (!cont.isFocusCycleRoot$() && !cont.isFocusTraversalPolicyProvider$() && !((Clazz.instanceOf(cont, "javax.swing.JComponent")) && (cont).isManagingFocus$() )  ) {
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
});

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
}var comp=p$1.getComponentDownCycle$java_awt_Component$I.apply(this, [aComponent, 0]);
if (comp != null ) {
return comp;
}var provider=this.getTopmostProvider$java_awt_Container$java_awt_Component(aContainer, aComponent);
if (provider != null ) {
var policy=provider.getFocusTraversalPolicy$();
var afterComp=policy.getComponentAfter$java_awt_Container$java_awt_Component(provider, aComponent);
if (afterComp != null ) {
comp=afterComp;
}aComponent=provider;
}if (comp == null ) {
var cycle=p$1.getFocusTraversalCycle$java_awt_Container.apply(this, [aContainer]);
var index=p$1.getComponentIndex$java_util_List$java_awt_Component.apply(this, [cycle, aComponent]);
if (index < 0) {
comp=this.getFirstComponent$java_awt_Container(aContainer);
} else {
for (index++; index < cycle.size$(); index++) {
comp=cycle.get$I(index);
if (this.accept$java_awt_Component(comp)) {
break;
} else if ((comp=p$1.getComponentDownCycle$java_awt_Component$I.apply(this, [comp, 0])) != null ) {
break;
}}
}if (comp == null  && aContainer.isFocusCycleRoot$() ) {
this.cachedRoot=aContainer;
this.cachedCycle=cycle;
comp=this.getFirstComponent$java_awt_Container(aContainer);
this.cachedRoot=null;
this.cachedCycle=null;
}}return comp;
});

Clazz.newMeth(C$, 'getComponentBefore$java_awt_Container$java_awt_Component',  function (aContainer, aComponent) {
if (aContainer == null  || aComponent == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer and aComponent cannot be null"]);
}if (!aContainer.isFocusTraversalPolicyProvider$() && !aContainer.isFocusCycleRoot$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer should be focus cycle root or focus traversal policy provider"]);
} else if (aContainer.isFocusCycleRoot$() && !aComponent.isFocusCycleRoot$java_awt_Container(aContainer) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer is not a focus cycle root of aComponent"]);
}var provider=this.getTopmostProvider$java_awt_Container$java_awt_Component(aContainer, aComponent);
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
}var comp;
var tryComp;
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
}return null;
});

Clazz.newMeth(C$, 'getFirstComponent$java_awt_Container',  function (aContainer) {
var cycle;
if (aContainer == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer cannot be null"]);
}if (this.cachedRoot === aContainer ) {
cycle=this.cachedCycle;
} else {
cycle=p$1.getFocusTraversalCycle$java_awt_Container.apply(this, [aContainer]);
}if (cycle.size$() == 0) {
return null;
}for (var comp, $comp = cycle.iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
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
return null;
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

Clazz.newMeth(C$, 'setComparator$java_util_Comparator',  function (comparator) {
this.comparator=comparator;
});

Clazz.newMeth(C$, 'getComparator$',  function () {
return this.comparator;
});

Clazz.newMeth(C$, 'accept$java_awt_Component',  function (aComponent) {
return C$.fitnessTestPolicy.accept$java_awt_Component(aComponent);
});

C$.$static$=function(){C$.$static$=0;
C$.fitnessTestPolicy=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

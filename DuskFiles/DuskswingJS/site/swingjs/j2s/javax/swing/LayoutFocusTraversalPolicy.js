(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.SwingDefaultFocusTraversalPolicy','javax.swing.LayoutComparator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LayoutFocusTraversalPolicy", null, 'javax.swing.SortingFocusTraversalPolicy', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$fitnessTestPolicy','javax.swing.SwingDefaultFocusTraversalPolicy']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_util_Comparator.apply(this,[Clazz.new_($I$(2,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator',  function (c) {
;C$.superclazz.c$$java_util_Comparator.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getComponentAfter$java_awt_Container$java_awt_Component',  function (aContainer, aComponent) {
if (aContainer == null  || aComponent == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer and aComponent cannot be null"]);
}var comparator=this.getComparator$();
if (Clazz.instanceOf(comparator, "javax.swing.LayoutComparator")) {
(comparator).setComponentOrientation$java_awt_ComponentOrientation(aContainer.getComponentOrientation$());
}return C$.superclazz.prototype.getComponentAfter$java_awt_Container$java_awt_Component.apply(this, [aContainer, aComponent]);
});

Clazz.newMeth(C$, 'getComponentBefore$java_awt_Container$java_awt_Component',  function (aContainer, aComponent) {
if (aContainer == null  || aComponent == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer and aComponent cannot be null"]);
}var comparator=this.getComparator$();
if (Clazz.instanceOf(comparator, "javax.swing.LayoutComparator")) {
(comparator).setComponentOrientation$java_awt_ComponentOrientation(aContainer.getComponentOrientation$());
}return C$.superclazz.prototype.getComponentBefore$java_awt_Container$java_awt_Component.apply(this, [aContainer, aComponent]);
});

Clazz.newMeth(C$, 'getFirstComponent$java_awt_Container',  function (aContainer) {
if (aContainer == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer cannot be null"]);
}var comparator=this.getComparator$();
if (Clazz.instanceOf(comparator, "javax.swing.LayoutComparator")) {
(comparator).setComponentOrientation$java_awt_ComponentOrientation(aContainer.getComponentOrientation$());
}return C$.superclazz.prototype.getFirstComponent$java_awt_Container.apply(this, [aContainer]);
});

Clazz.newMeth(C$, 'getLastComponent$java_awt_Container',  function (aContainer) {
if (aContainer == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["aContainer cannot be null"]);
}var comparator=this.getComparator$();
if (Clazz.instanceOf(comparator, "javax.swing.LayoutComparator")) {
(comparator).setComponentOrientation$java_awt_ComponentOrientation(aContainer.getComponentOrientation$());
}return C$.superclazz.prototype.getLastComponent$java_awt_Container.apply(this, [aContainer]);
});

Clazz.newMeth(C$, 'accept$java_awt_Component',  function (aComponent) {
if (!C$.superclazz.prototype.accept$java_awt_Component.apply(this, [aComponent])) {
return false;
} else if (Clazz.instanceOf(aComponent, "javax.swing.JTable")) {
return false;
} else if (Clazz.instanceOf(aComponent, "javax.swing.JComboBox")) {
var box=aComponent;
return (box.getUI$()).isFocusTraversable$javax_swing_JComboBox(box);
} else if (Clazz.instanceOf(aComponent, "javax.swing.JComponent")) {
var jComponent=aComponent;
var inputMap=jComponent.getInputMap$I$Z(0, false);
while (inputMap != null  && inputMap.size$() == 0 ){
inputMap=inputMap.getParent$();
}
if (inputMap != null ) {
return true;
}}return C$.$fitnessTestPolicy.accept$java_awt_Component(aComponent);
});

C$.$static$=function(){C$.$static$=0;
C$.$fitnessTestPolicy=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

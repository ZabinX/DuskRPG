(function(){var P$=Clazz.newPackage("java.awt"),p$1={},p$2={},I$=[[0,'java.awt.Component','java.awt.Insets','javajs.util.Lst','java.awt.Toolkit','java.awt.event.ContainerEvent','java.awt.Dimension',['java.awt.GraphicsCallback','.PaintCallback'],['java.awt.GraphicsCallback','.PaintAllCallback'],['java.awt.GraphicsCallback','.PaintHeavyweightComponentsCallback'],'java.awt.AWTEventMulticaster','java.awt.event.ContainerListener',['java.awt.Container','.DropTargetEventTargetFilter'],['java.awt.Container','.MouseEventTargetFilter'],'java.awt.LightweightDispatcher','java.awt.KeyboardFocusManager','swingjs.JSMouse','java.awt.event.MouseEvent',['swingjs.JSDnD','.JSDropMouseEvent'],'java.awt.event.MouseWheelEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Container", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.JSComponent');
C$.$classes$=[['EventTargetFilter',8],['MouseEventTargetFilter',8],['DropTargetEventTargetFilter',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.focusCycleRoot=false;
this.preserveBackgroundColor=null;
this.numOfHWComponents=0;
this.numOfLWComponents=0;
},1);

C$.$fields$=[['Z',['秘isCRP','秘childTainted','focusCycleRoot','focusTraversalPolicyProvider'],'I',['listeningChildren','listeningBoundsChildren','descendantsCount','numOfHWComponents','numOfLWComponents'],'O',['component','javajs.util.Lst','秘childArray','java.awt.Component[]','layoutMgr','java.awt.LayoutManager','dispatcher','java.awt.LightweightDispatcher','focusTraversalPolicy','java.awt.FocusTraversalPolicy','containerListener','java.awt.event.ContainerListener','preserveBackgroundColor','java.awt.Color','modalComp','java.awt.Component','modalAppContext','sun.awt.AppContext']]
,['O',['EMPTY_ARRAY','java.awt.Component[]','NULL_INSETS','java.awt.Insets']]]

Clazz.newMeth(C$, 'getChildArray$',  function () {
var n=this.component.size$();
if (n == 0) return C$.EMPTY_ARRAY;
if (this.秘childArray != null  && !this.秘childTainted ) return this.秘childArray;
this.秘childTainted=false;
return this.component.toArray$OA(this.秘childArray != null  && this.秘childArray.length > n  ? this.秘childArray : (this.秘childArray=Clazz.array($I$(1), [n * 2])));
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.component=Clazz.new_($I$(3,1));
this.秘paintClass=this.秘updateClass=C$ ||null;
}, 1);

Clazz.newMeth(C$, 'initializeFocusTraversalKeys$',  function () {
});

Clazz.newMeth(C$, 'getComponentCount$',  function () {
return this.countComponents$();
});

Clazz.newMeth(C$, 'countComponents$',  function () {
return this.component.size$();
});

Clazz.newMeth(C$, 'getComponent$I',  function (n) {
if ((n < 0) || (n >= this.component.size$()) ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["No such child: " + n]);
}return this.component.get$I(n);
});

Clazz.newMeth(C$, 'getComponents$',  function () {
return this.getComponents_NoClientCode$();
});

Clazz.newMeth(C$, 'getComponents_NoClientCode$',  function () {
return this.component.toArray$OA(C$.EMPTY_ARRAY);
});

Clazz.newMeth(C$, 'getInsets$',  function () {
return C$.superclazz.prototype.getInsets$.apply(this, []);
});

Clazz.newMeth(C$, 'insets$',  function () {
return this.getInsets$();
});

Clazz.newMeth(C$, 'add$java_awt_Component',  function (comp) {
this.addImpl$java_awt_Component$O$I(comp, null, -1);
return comp;
});

Clazz.newMeth(C$, 'add$S$java_awt_Component',  function (name, comp) {
this.addImpl$java_awt_Component$O$I(comp, name, -1);
return comp;
});

Clazz.newMeth(C$, 'add$java_awt_Component$I',  function (comp, index) {
this.addImpl$java_awt_Component$O$I(comp, null, index);
return comp;
});

Clazz.newMeth(C$, 'checkAddToSelf$java_awt_Component',  function (comp) {
if (Clazz.instanceOf(comp, "java.awt.Container")) {
for (var cn=this; cn != null ; cn=cn.parent) {
if (cn === comp ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["adding container\'s parent to itself"]);
}}
}}, p$1);

Clazz.newMeth(C$, 'removeDelicately$java_awt_Component$java_awt_Container$I',  function (comp, newParent, newIndex) {
var index=this.getComponentZOrder$java_awt_Component(comp);
var needRemoveNotify=C$.isRemoveNotifyNeeded$java_awt_Component$java_awt_Container$java_awt_Container(comp, this, newParent);
if (needRemoveNotify) {
comp.removeNotify$();
}if (newParent !== this ) {
if (this.layoutMgr != null ) {
this.layoutMgr.removeLayoutComponent$java_awt_Component(comp);
}this.adjustListeningChildren$J$I(32768, -comp.numListening$J(32768));
this.adjustListeningChildren$J$I(65536, -comp.numListening$J(65536));
this.adjustDescendants$I(-(comp.countHierarchyMembers$()));
comp.parent=null;
this.component.removeItemAt$I(index);
this.秘childTainted=true;
this.invalidateIfValid$();
} else {
this.component.removeItemAt$I(index);
this.component.add$I$O(newIndex, comp);
this.秘childTainted=true;
}if (comp.parent == null ) {
if (this.containerListener != null  || Long.$ne((Long.$and(this.eventMask,2)),0 )  || $I$(4).enabledOnToolkit$J(2) ) {
var e=Clazz.new_($I$(5,1).c$$java_awt_Component$I$java_awt_Component,[this, 301, comp]);
this.dispatchEvent$java_awt_AWTEvent(e);
}comp.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, comp, this, 1, $I$(4).enabledOnToolkit$J(32768));
if (this.layoutMgr == null  && this.isDisplayable$()  && this.isVisible$() ) {
this.updateCursorImmediately$();
}}return needRemoveNotify;
}, p$1);

Clazz.newMeth(C$, 'canContainFocusOwner$java_awt_Component',  function (focusOwnerCandidate) {
if (!(this.isEnabled$() && this.isDisplayable$() && this.isVisible$() && this.isFocusable$()  )) {
return false;
}if (this.isFocusCycleRoot$()) {
var policy=this.getFocusTraversalPolicy$();
if (Clazz.instanceOf(policy, "java.awt.DefaultFocusTraversalPolicy")) {
if (!(policy).accept$java_awt_Component(focusOwnerCandidate)) {
return false;
}}}/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (this.parent != null ) {
return this.parent.canContainFocusOwner$java_awt_Component(focusOwnerCandidate);
}}return true;
});

Clazz.newMeth(C$, 'hasHeavyweightDescendants$',  function () {
return this.numOfHWComponents > 0;
});

Clazz.newMeth(C$, 'hasLightweightDescendants$',  function () {
return this.numOfLWComponents > 0;
});

Clazz.newMeth(C$, 'getHeavyweightContainer$',  function () {
if (this.peer != null  && !(Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer")) ) {
return this;
} else {
return this.getNativeContainer$();
}});

Clazz.newMeth(C$, 'isRemoveNotifyNeeded$java_awt_Component$java_awt_Container$java_awt_Container',  function (comp, oldContainer, newContainer) {
return false;
}, 1);

Clazz.newMeth(C$, 'setComponentZOrder$java_awt_Component$I',  function (comp, index) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var curParent=comp.parent;
var oldZindex=this.getComponentZOrder$java_awt_Component(comp);
if (curParent === this  && index == oldZindex ) {
return;
}var peerRecreated=(curParent != null ) ? p$1.removeDelicately$java_awt_Component$java_awt_Container$I.apply(curParent, [comp, this, index]) : false;
p$1.addDelicately$java_awt_Component$java_awt_Container$I.apply(this, [comp, curParent, index]);
if (!peerRecreated && oldZindex != -1 ) {
comp.mixOnZOrderChanging$I$I(oldZindex, index);
}this.秘updateUIZOrder$();
}});

Clazz.newMeth(C$, 'reparentChild$java_awt_Component',  function (comp) {
}, p$1);

Clazz.newMeth(C$, 'addDelicately$java_awt_Component$java_awt_Container$I',  function (comp, curParent, index) {
p$1.checkTreeLock.apply(this, []);
if (curParent === this ) {
if (index < this.component.size$()) {
this.component.set$I$O(index, comp);
this.秘childTainted=true;
}} else {
if (index == -1) {
this.component.add$O(comp);
} else {
this.component.add$I$O(index, comp);
}this.秘childTainted=true;
comp.parent=this;
this.adjustListeningChildren$J$I(32768, comp.numListening$J(32768));
this.adjustListeningChildren$J$I(65536, comp.numListening$J(65536));
this.adjustDescendants$I(comp.countHierarchyMembers$());
}this.invalidateIfValid$();
if (this.peer != null ) {
if (comp.peer == null ) {
comp.addNotify$();
} else {
var newNativeContainer=this.getHeavyweightContainer$();
var oldNativeContainer=curParent.getHeavyweightContainer$();
if (oldNativeContainer !== newNativeContainer ) {
p$1.reparentChild$java_awt_Component.apply(newNativeContainer, [comp]);
}if (!comp.isLightweight$() && this.isLightweight$() ) {
comp.relocateComponent$();
}}}if (curParent !== this ) {
if (this.layoutMgr != null ) {
if (Clazz.instanceOf(this.layoutMgr, "java.awt.LayoutManager2")) {
(this.layoutMgr).addLayoutComponent$java_awt_Component$O(comp, null);
} else {
this.layoutMgr.addLayoutComponent$S$java_awt_Component(null, comp);
}}if (this.containerListener != null  || Long.$ne((Long.$and(this.eventMask,2)),0 )  || $I$(4).enabledOnToolkit$J(2) ) {
var e=Clazz.new_($I$(5,1).c$$java_awt_Component$I$java_awt_Component,[this, 300, comp]);
this.dispatchEvent$java_awt_AWTEvent(e);
}comp.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, comp, this, 1, $I$(4).enabledOnToolkit$J(32768));
} else {
comp.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, comp, this, 1400, $I$(4).enabledOnToolkit$J(32768));
}if (this.peer != null  && this.layoutMgr == null   && this.isVisible$() ) {
this.updateCursorImmediately$();
}}, p$1);

Clazz.newMeth(C$, 'checkTreeLock',  function () {
}, p$1);

Clazz.newMeth(C$, 'getComponentZOrder$java_awt_Component',  function (comp) {
if (comp == null ) {
return -1;
}/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (comp.parent !== this ) {
return -1;
}return this.component.indexOf$O(comp);
}});

Clazz.newMeth(C$, 'add$java_awt_Component$O',  function (comp, constraints) {
this.addImpl$java_awt_Component$O$I(comp, constraints, -1);
});

Clazz.newMeth(C$, 'add$java_awt_Component$O$I',  function (comp, constraints, index) {
this.addImpl$java_awt_Component$O$I(comp, constraints, index);
return comp;
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I',  function (comp, constraints, index) {
this.addImplCont$java_awt_Component$O$I(comp, constraints, index);
});

Clazz.newMeth(C$, 'addImplCont$java_awt_Component$O$I',  function (comp, constraints, index) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (comp.秘getWrap$  && !this.秘isWrapper$ ||false) {
comp=(comp).秘getWrap$();
comp.background=comp.foreground=null;
}if (Clazz.instanceOf(comp, "javax.swing.JApplet")) {
comp=(comp).getLayeredPane$();
}if (index > this.component.size$() || (index < 0 && index != -1 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal component position"]);
}p$1.checkAddToSelf$java_awt_Component.apply(this, [comp]);
if (comp.isJ2SWindowButNotJInternalFrame$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["adding a window to a container"]);
}if (comp.parent != null ) {
comp.parent.remove$java_awt_Component(comp);
if (index > this.component.size$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal component position"]);
}}if (index == -1) {
this.component.add$O(comp);
} else {
this.component.add$I$O(index, comp);
}this.秘childTainted=true;
comp.parent=this;
this.adjustListeningChildren$J$I(32768, comp.numListening$J(32768));
this.adjustListeningChildren$J$I(65536, comp.numListening$J(65536));
this.adjustDescendants$I(comp.countHierarchyMembers$());
this.invalidateIfValid$();
if (this.peer != null ) comp.addNotify$();
if (this.layoutMgr != null ) {
if (Clazz.instanceOf(this.layoutMgr, "java.awt.LayoutManager2")) {
(this.layoutMgr).addLayoutComponent$java_awt_Component$O(comp, constraints);
} else if (Clazz.instanceOf(constraints, "java.lang.String")) {
this.layoutMgr.addLayoutComponent$S$java_awt_Component(constraints, comp);
}}if (this.containerListener != null  || Long.$ne((Long.$and(this.eventMask,2)),0 )  || $I$(4).enabledOnToolkit$J(2) ) {
var e=Clazz.new_($I$(5,1).c$$java_awt_Component$I$java_awt_Component,[this, 300, comp]);
this.dispatchEvent$java_awt_AWTEvent(e);
}comp.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, comp, this, 1, $I$(4).enabledOnToolkit$J(32768));
if (this.peer != null  && this.layoutMgr == null   && this.isVisible$() ) {
this.updateCursorImmediately$();
}}});

Clazz.newMeth(C$, 'checkGD$S',  function (stringID) {
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (index < 0 || index >= this.component.size$() ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[index]);
}var comp=this.component.get$I(index);
if (this.peer != null ) {
comp.removeNotify$();
}if (this.layoutMgr != null ) {
this.layoutMgr.removeLayoutComponent$java_awt_Component(comp);
}this.adjustListeningChildren$J$I(32768, -comp.numListening$J(32768));
this.adjustListeningChildren$J$I(65536, -comp.numListening$J(65536));
this.adjustDescendants$I(-(comp.countHierarchyMembers$()));
comp.parent=null;
this.component.removeItemAt$I(index);
this.秘childTainted=true;
this.invalidateIfValid$();
if (this.containerListener != null  || Long.$ne((Long.$and(this.eventMask,2)),0 )  || $I$(4).enabledOnToolkit$J(2) ) {
var e=Clazz.new_($I$(5,1).c$$java_awt_Component$I$java_awt_Component,[this, 301, comp]);
this.dispatchEvent$java_awt_AWTEvent(e);
}comp.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, comp, this, 1, $I$(4).enabledOnToolkit$J(32768));
if (this.peer != null  && this.layoutMgr == null   && this.isVisible$() ) {
this.updateCursorImmediately$();
}}});

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (comp) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (comp.秘getWrap$ && !this.秘isWrapper$ ||false) {
comp=(comp).秘getWrap$();
}if (comp.parent === this ) {
var index=this.component.indexOf$O(comp);
if (index >= 0) {
this.remove$I(index);
}}}});

Clazz.newMeth(C$, 'removeAll$',  function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.adjustListeningChildren$J$I(32768, -this.listeningChildren);
this.adjustListeningChildren$J$I(65536, -this.listeningBoundsChildren);
this.adjustDescendants$I(-this.descendantsCount);
while (!this.component.isEmpty$()){
var comp=this.component.removeItemAt$I(this.component.size$() - 1);
if (this.peer != null ) {
comp.removeNotify$();
}if (this.layoutMgr != null ) {
this.layoutMgr.removeLayoutComponent$java_awt_Component(comp);
}comp.parent=null;
if (this.containerListener != null  || Long.$ne((Long.$and(this.eventMask,2)),0 )  || $I$(4).enabledOnToolkit$J(2) ) {
var e=Clazz.new_($I$(5,1).c$$java_awt_Component$I$java_awt_Component,[this, 301, comp]);
this.dispatchEvent$java_awt_AWTEvent(e);
}comp.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, comp, this, 1, $I$(4).enabledOnToolkit$J(32768));
}
if (this.peer != null  && this.layoutMgr == null   && this.isVisible$() ) {
this.updateCursorImmediately$();
}this.invalidateIfValid$();
}C$.superclazz.prototype.removeAll$.apply(this, []);
});

Clazz.newMeth(C$, 'numListening$J',  function (mask) {
var superListening=this.numListeningMask$J(mask);
if (Long.$eq(mask,32768 )) {
return this.listeningChildren + superListening;
} else if (Long.$eq(mask,65536 )) {
return this.listeningBoundsChildren + superListening;
} else {
return superListening;
}});

Clazz.newMeth(C$, 'adjustListeningChildren$J$I',  function (mask, num) {
if (num == 0) return;
if (Long.$ne((Long.$and(mask,32768)),0 )) {
this.listeningChildren+=num;
}if (Long.$ne((Long.$and(mask,65536)),0 )) {
this.listeningBoundsChildren+=num;
}this.adjustListeningChildrenOnParent$J$I(mask, num);
});

Clazz.newMeth(C$, 'adjustDescendants$I',  function (num) {
if (num == 0) return;
this.descendantsCount+=num;
this.adjustDecendantsOnParent$I(num);
});

Clazz.newMeth(C$, 'adjustDecendantsOnParent$I',  function (num) {
if (this.parent != null ) {
this.parent.adjustDescendants$I(num);
}});

Clazz.newMeth(C$, 'countHierarchyMembers$',  function () {
return this.descendantsCount + 1;
});

Clazz.newMeth(C$, 'getListenersCount$I$Z',  function (id, enabledOnToolkit) {
if (enabledOnToolkit) {
return this.descendantsCount;
}switch (id) {
case 1400:
return this.listeningChildren;
case 1401:
case 1402:
return this.listeningBoundsChildren;
default:
return 0;
}
}, p$1);

Clazz.newMeth(C$, 'createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z',  function (id, changed, changedParent, changeFlags, enabledOnToolkit) {
var listeners=p$1.getListenersCount$I$Z.apply(this, [id, enabledOnToolkit]);
for (var count=listeners, i=0; count > 0; i++) {
count-=this.component.get$I(i).createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(id, changed, changedParent, changeFlags, enabledOnToolkit);
}
return listeners + this.createHierEventsComp$I$java_awt_Component$java_awt_Container$J$Z(id, changed, changedParent, changeFlags, enabledOnToolkit);
});

Clazz.newMeth(C$, 'createChildHierarchyEvents$I$J$Z',  function (id, changeFlags, enabledOnToolkit) {
if (this.component.isEmpty$()) {
return;
}var listeners=p$1.getListenersCount$I$Z.apply(this, [id, enabledOnToolkit]);
for (var count=listeners, i=0; count > 0; i++) {
count-=this.component.get$I(i).createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(id, this, this.parent, changeFlags, enabledOnToolkit);
}
});

Clazz.newMeth(C$, 'getLayout$',  function () {
return this.layoutMgr;
});

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager',  function (mgr) {
this.layoutMgr=mgr;
this.invalidateIfValid$();
});

Clazz.newMeth(C$, 'doLayout$',  function () {
this.layout$();
});

Clazz.newMeth(C$, 'layout$',  function () {
if (this.layoutMgr != null ) this.layoutMgr.layoutContainer$java_awt_Container(this);
});

Clazz.newMeth(C$, 'invalidate$',  function () {
var layoutMgr=this.layoutMgr;
if (Clazz.instanceOf(layoutMgr, "java.awt.LayoutManager2")) {
var lm=layoutMgr;
lm.invalidateLayout$java_awt_Container(this);
}this.invalidateComp$();
});

Clazz.newMeth(C$, 'validate$',  function () {
if (!this.isValid$() && this.peer != null  ) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var n=this.component.size$();
if (!this.isValid$() && this.peer != null   && n > 0 ) {
var p=null;
if (Clazz.instanceOf(this.peer, "java.awt.peer.ContainerPeer")) p=this.peer;
if (p != null ) p.beginValidate$();
this.validateTree$();
if (p != null ) {
p.endValidate$();
if (this.isVisible$()) this.updateCursorImmediately$();
}}}}});

Clazz.newMeth(C$, 'repackContainer$',  function () {
var newSize=this.getPreferredSize$();
if (this.peer != null ) {
this.setClientSize$I$I(newSize.width, newSize.height);
}this.validate$();
});

Clazz.newMeth(C$, 'setClientSize$I$I',  function (w, h) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.setBoundsOp$I(4);
this.setBounds$I$I$I$I(this.x, this.y, w, h);
}});

Clazz.newMeth(C$, 'validateTree$',  function () {
if (!this.isValid$()) {
if (Clazz.instanceOf(this.peer, "java.awt.peer.ContainerPeer")) {
(this.peer).beginLayout$();
}this.doLayout$();
for (var i=0; i < this.component.size$(); i++) {
var comp=this.component.get$I(i);
if ((Clazz.instanceOf(comp, "java.awt.Container")) && !comp.isValid$() ) {
(comp).validateTree$();
} else {
comp.validate$();
}}
if (Clazz.instanceOf(this.peer, "java.awt.peer.ContainerPeer")) {
(this.peer).endLayout$();
}}C$.superclazz.prototype.validate$.apply(this, []);
});

Clazz.newMeth(C$, 'invalidateTree$',  function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
for (var i=0; i < this.component.size$(); i++) {
var comp=this.component.get$I(i);
if (Clazz.instanceOf(comp, "java.awt.Container")) {
(comp).invalidateTree$();
} else {
comp.invalidateIfValid$();
}}
this.invalidateIfValid$();
}});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
var oldfont=this.getFont$();
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [f]);
var newfont=this.getFont$();
if (newfont !== oldfont  && (oldfont == null  || !oldfont.equals$O(newfont) ) ) {
this.invalidateTree$();
}});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'preferredSize$',  function () {
return this.preferredSizeContainer$();
});

Clazz.newMeth(C$, 'preferredSizeContainer$',  function () {
var dim=this.prefSize;
if (dim == null  || !(this.isPreferredSizeSet$() || this.isValid$() ) ) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.prefSize=(this.layoutMgr != null  ? this.layoutMgr.preferredLayoutSize$java_awt_Container(this) : this.prefSizeComp$());
dim=this.prefSize;
}}return (dim == null  ? null : Clazz.new_($I$(6,1).c$$java_awt_Dimension,[dim]));
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
var dim=this.minSize;
if (dim == null  || !(this.isMinimumSizeSet$() || this.isValid$() ) ) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.minSize=(this.layoutMgr != null ) ? this.layoutMgr.minimumLayoutSize$java_awt_Container(this) : this.minimumSize$();
dim=this.minSize;
}}if (dim != null ) {
return Clazz.new_($I$(6,1).c$$java_awt_Dimension,[dim]);
} else {
return dim;
}});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
var dim=this.maxSize;
if (dim == null  || !(this.isMaximumSizeSet$() || this.isValid$() ) ) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (Clazz.instanceOf(this.layoutMgr, "java.awt.LayoutManager2")) {
var lm=this.layoutMgr;
this.maxSize=lm.maximumLayoutSize$java_awt_Container(this);
} else {
this.maxSize=this.getMaxSizeComp$();
}dim=this.maxSize;
}}if (dim != null ) {
return Clazz.new_($I$(6,1).c$$java_awt_Dimension,[dim]);
} else {
return dim;
}});

Clazz.newMeth(C$, 'getAlignmentX$',  function () {
var xAlign;
if (Clazz.instanceOf(this.layoutMgr, "java.awt.LayoutManager2")) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var lm=this.layoutMgr;
xAlign=lm.getLayoutAlignmentX$java_awt_Container(this);
}} else {
xAlign=this.getAlignmentXComp$();
}return xAlign;
});

Clazz.newMeth(C$, 'getAlignmentY$',  function () {
var yAlign;
if (Clazz.instanceOf(this.layoutMgr, "java.awt.LayoutManager2")) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var lm=this.layoutMgr;
yAlign=lm.getLayoutAlignmentY$java_awt_Container(this);
}} else {
yAlign=this.getAlignmentYComp$();
}return yAlign;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
this.paintContainer$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paintContainer$java_awt_Graphics',  function (g) {
$I$(7).getInstance$().runComponents$I$java_awt_ComponentA$java_awt_Graphics$I(this.getComponentCount$(), this.getChildArray$(), g, 2);
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.updateContainer$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'updateContainer$java_awt_Graphics',  function (g) {
if (this.isShowing$()) {
g.clearRect$I$I$I$I(0, 0, this.width, this.height);
this.paint$java_awt_Graphics(g);
}});

Clazz.newMeth(C$, 'paintComponents$java_awt_Graphics',  function (g) {
if (this.isShowing$()) {
$I$(8).getInstance$().runComponents$I$java_awt_ComponentA$java_awt_Graphics$I(this.getComponentCount$(), this.getChildArray$(), g, 4);
}});

Clazz.newMeth(C$, 'lightweightPaint$java_awt_Graphics',  function (g) {
this.lwPaintComp$java_awt_Graphics(g);
this.paintHeavyweightComponents$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paintHeavyweightComponents$java_awt_Graphics',  function (g) {
if (this.isShowing$()) {
$I$(9).getInstance$().runComponents$I$java_awt_ComponentA$java_awt_Graphics$I(this.getComponentCount$(), this.getChildArray$(), g, 3);
}});

Clazz.newMeth(C$, 'addContainerListener$java_awt_event_ContainerListener',  function (l) {
if (l == null ) {
return;
}this.containerListener=$I$(10).add$java_awt_event_ContainerListener$java_awt_event_ContainerListener(this.containerListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeContainerListener$java_awt_event_ContainerListener',  function (l) {
if (l == null ) {
return;
}this.containerListener=$I$(10).remove$java_awt_event_ContainerListener$java_awt_event_ContainerListener(this.containerListener, l);
});

Clazz.newMeth(C$, 'getContainerListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(11),['componentAdded$java_awt_event_ContainerEvent','componentRemoved$java_awt_event_ContainerEvent'])));
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
var l=null;
if (listenerType === Clazz.getClass($I$(11),['componentAdded$java_awt_event_ContainerEvent','componentRemoved$java_awt_event_ContainerEvent']) ) {
l=this.containerListener;
} else {
return this.getListenersComp$Class(listenerType);
}return $I$(10).getListeners$java_util_EventListener$Class(l, listenerType);
});

Clazz.newMeth(C$, 'eventEnabled$java_awt_AWTEvent',  function (e) {
var id=e.getID$();
if (id == 300 || id == 301 ) {
if (Long.$ne((Long.$and(this.eventMask,2)),0 ) || this.containerListener != null  ) {
return true;
}return false;
}return this.eventTypeEnabled$I(e.id);
});

Clazz.newMeth(C$, 'processEvent$java_awt_AWTEvent',  function (e) {
this.processEventCont$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'processEventCont$java_awt_AWTEvent',  function (e) {
if (Clazz.instanceOf(e, "java.awt.event.ContainerEvent")) {
this.processContainerEvent$java_awt_event_ContainerEvent(e);
return;
}this.processEventComp$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'processContainerEvent$java_awt_event_ContainerEvent',  function (e) {
var listener=this.containerListener;
if (listener != null ) {
switch (e.getID$()) {
case 300:
listener.componentAdded$java_awt_event_ContainerEvent(e);
break;
case 301:
listener.componentRemoved$java_awt_event_ContainerEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'dispatchEventImpl$java_awt_AWTEvent',  function (e) {
if ((this.dispatcher != null ) && this.dispatcher.dispatchEvent$java_awt_AWTEvent(e) ) {
return;
}this.dispatchEventImplComp$java_awt_AWTEvent(e);
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
switch (e.getID$()) {
case 101:
break;
case 100:
break;
default:
break;
}
}});

Clazz.newMeth(C$, 'getDropTargetEventTarget$I$I$Z',  function (x, y, includeSelf) {
return this.getMouseEventTarget$I$I$Z$java_awt_Container_EventTargetFilter$Z(x, y, includeSelf, $I$(12).FILTER, true);
});

Clazz.newMeth(C$, 'dispatchEventToSelf$java_awt_AWTEvent',  function (e) {
this.dispatchEventImplComp$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'getMouseEventTarget$I$I$Z',  function (x, y, includeSelf) {
return this.getMouseEventTarget$I$I$Z$java_awt_Container_EventTargetFilter$Z(x, y, includeSelf, $I$(13).FILTER, !true);
});

Clazz.newMeth(C$, 'getMouseEventTarget$I$I$Z$java_awt_Container_EventTargetFilter$Z',  function (x, y, includeSelf, filter, searchHeavyweights) {
var comp=null;
if (comp == null  || comp === this  ) {
comp=p$1.getMouseEventTargetImpl$I$I$Z$java_awt_Container_EventTargetFilter$Z$Z.apply(this, [x, y, includeSelf, filter, !true, searchHeavyweights]);
}return comp;
});

Clazz.newMeth(C$, 'getMouseEventTargetImpl$I$I$Z$java_awt_Container_EventTargetFilter$Z$Z',  function (x, y, includeSelf, filter, searchHeavyweightChildren, searchHeavyweightDescendants) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
for (var i=0; i < this.component.size$(); i++) {
var comp=this.component.get$I(i);
if (comp != null  && comp.visible  && ((!searchHeavyweightChildren && Clazz.instanceOf(comp.peer, "java.awt.peer.LightweightPeer") ) || (searchHeavyweightChildren && !(Clazz.instanceOf(comp.peer, "java.awt.peer.LightweightPeer")) ) )  && comp.contains$I$I(x - comp.x, y - comp.y) ) {
if (Clazz.instanceOf(comp, "java.awt.Container")) {
var child=comp;
var deeper=child.getMouseEventTarget$I$I$Z$java_awt_Container_EventTargetFilter$Z(x - child.x, y - child.y, includeSelf, filter, searchHeavyweightDescendants);
if (deeper != null ) {
return deeper;
}} else {
if (filter == null  || filter.accept$java_awt_Component(comp) ) {
return comp;
}}}}
var isPeerOK;
var isMouseOverMe;
isPeerOK=includeSelf;
isMouseOverMe=this.contains$I$I(x, y);
if (isMouseOverMe && isPeerOK && (filter == null  || filter.accept$java_awt_Component(this) )  ) {
return this;
}return null;
}}, p$1);

Clazz.newMeth(C$, 'proxyEnableEvents$J',  function (events) {
if (this.parent != null ) {
this.parent.proxyEnableEvents$J(events);
}if (this.dispatcher != null ) {
this.dispatcher.enableEvents$J(events);
}});

Clazz.newMeth(C$, 'deliverEvent$java_awt_Event',  function (e) {
var comp=this.getComponentAt$I$I(e.x, e.y);
if ((comp != null ) && (comp !== this ) ) {
e.translate$I$I(-comp.x, -comp.y);
comp.deliverEvent$java_awt_Event(e);
} else {
this.postEvent$java_awt_Event(e);
}});

Clazz.newMeth(C$, 'getComponentAt$I$I',  function (x, y) {
return this.locate$I$I(x, y);
});

Clazz.newMeth(C$, 'locate$I$I',  function (x, y) {
if (!this.contains$I$I(x, y)) {
return null;
}/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
for (var i=0; i < this.component.size$(); i++) {
var comp=this.component.get$I(i);
if (comp != null  && Clazz.instanceOf(comp.peer, "java.awt.peer.LightweightPeer") ) {
if (comp.contains$I$I(x - comp.x, y - comp.y)) {
return comp;
}}}
}return this;
});

Clazz.newMeth(C$, 'getComponentAt$java_awt_Point',  function (p) {
return this.getComponentAt$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'getMousePosition$Z',  function (allowChildren) {
return null;
});

Clazz.newMeth(C$, 'isSameOrAncestorOf$java_awt_Component$Z',  function (comp, allowChildren) {
return this === comp  || (allowChildren && p$1.isParentOf$java_awt_Component.apply(this, [comp]) ) ;
});

Clazz.newMeth(C$, 'findComponentAt$I$I',  function (x, y) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
return this.findComponentAt$I$I$Z(x, y, true);
}});

Clazz.newMeth(C$, 'findComponentAt$I$I$Z',  function (x, y, ignoreEnabled) {
return null;
});

Clazz.newMeth(C$, 'findComponentAt$java_awt_Point',  function (p) {
return this.findComponentAt$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
if (!(Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer"))) {
this.setDispatcher$();
}for (var i=0; i < this.component.size$(); i++) {
this.component.get$I(i).addNotify$();
}
});

Clazz.newMeth(C$, 'setDispatcher$',  function () {
if (this.dispatcher != null ) return;
this.dispatcher=Clazz.new_($I$(14,1).c$$java_awt_Container,[this]);
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
if (this.ui != null  && this.秘getUI$().domNode == null  ) {
return;
}for (var i=this.component.size$(); --i >= 0; ) {
var comp=this.component.get$I(i);
if (comp != null ) {
comp.setAutoFocusTransferOnDisposal$Z(false);
comp.removeNotify$();
comp.setAutoFocusTransferOnDisposal$Z(true);
}}
if (this.containsFocus$() && $I$(15).isAutoFocusTransferEnabledFor$java_awt_Component(this) ) {
if (!this.transferFocus$Z(false)) {
this.transferFocusBackward$Z(true);
}}if (this.dispatcher != null ) {
this.dispatcher.dispose$();
this.dispatcher=null;
}this.removeNotifyComp$();
});

Clazz.newMeth(C$, 'isAncestorOf$java_awt_Component',  function (c) {
var p;
if (c == null  || ((p=c.getParent$()) == null ) ) {
return false;
}while (p != null ){
if (p === this ) {
return true;
}p=p.getParent$();
}
return false;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var str=this.paramStringComp$();
var layoutMgr=this.layoutMgr;
if (layoutMgr != null ) {
str+=",layout=" + layoutMgr.getClass$().getName$();
}return str;
});

Clazz.newMeth(C$, 'setFocusTraversalKeys$I$java_util_Set',  function (id, keystrokes) {
if (id < 0 || id >= 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}this.setFocusTraversalKeys_NoIDCheck$I$java_util_Set(id, keystrokes);
});

Clazz.newMeth(C$, 'getFocusTraversalKeys$I',  function (id) {
if (id < 0 || id >= 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}return this.getFocusTraversalKeys_NoIDCheck$I(id);
});

Clazz.newMeth(C$, 'areFocusTraversalKeysSet$I',  function (id) {
if (id < 0 || id >= 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}return (this.focusTraversalKeys != null  && this.focusTraversalKeys[id] != null  );
});

Clazz.newMeth(C$, 'isFocusCycleRoot$java_awt_Container',  function (container) {
if (this.isFocusCycleRoot$() && container === this  ) {
return true;
} else {
return this.isFocusCycleRootComp$java_awt_Container(container);
}});

Clazz.newMeth(C$, 'findTraversalRoot',  function () {
var currentFocusCycleRoot=$I$(15).getCurrentKeyboardFocusManager$().getCurrentFocusCycleRoot$();
var root;
if (currentFocusCycleRoot === this ) {
root=this;
} else {
root=this.getFocusCycleRootAncestor$();
if (root == null ) {
root=this;
}}if (root !== currentFocusCycleRoot ) {
$I$(15).getCurrentKeyboardFocusManager$().setGlobalCurrentFocusCycleRoot$java_awt_Container(root);
}return root;
}, p$1);

Clazz.newMeth(C$, 'containsFocus$',  function () {
var focusOwner=$I$(15).getCurrentKeyboardFocusManager$().getFocusOwner$();
return p$1.isParentOf$java_awt_Component.apply(this, [focusOwner]);
});

Clazz.newMeth(C$, 'isParentOf$java_awt_Component',  function (comp) {
while (comp != null  && comp !== this   && !comp.isWindowOrJSApplet$() ){
comp=comp.getParent$();
}
return (comp === this );
}, p$1);

Clazz.newMeth(C$, 'clearMostRecentFocusOwnerOnHide$',  function () {
var reset=false;
var window=null;
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
window=this.getContainingWindow$();
if (window != null ) {
var comp=$I$(15).getMostRecentFocusOwner$java_awt_Window(window);
reset=((comp === this ) || p$1.isParentOf$java_awt_Component.apply(this, [comp]) );
{
var storedComp=window.getTemporaryLostComponent$();
if (p$1.isParentOf$java_awt_Component.apply(this, [storedComp]) || storedComp === this  ) {
window.setTemporaryLostComponent$java_awt_Component(null);
}}}}if (reset) {
$I$(15).setMostRecentFocusOwner$java_awt_Window$java_awt_Component(window, null);
}});

Clazz.newMeth(C$, 'clearCurrentFocusCycleRootOnHide$',  function () {
var kfm=$I$(15).getCurrentKeyboardFocusManager$();
var cont=kfm.getCurrentFocusCycleRoot$();
if (cont === this  || p$1.isParentOf$java_awt_Component.apply(this, [cont]) ) {
kfm.setGlobalCurrentFocusCycleRoot$java_awt_Container(null);
}});

Clazz.newMeth(C$, 'getTraversalRoot$',  function () {
if (this.isFocusCycleRoot$()) {
return p$1.findTraversalRoot.apply(this, []);
}return C$.superclazz.prototype.getTraversalRoot$.apply(this, []);
});

Clazz.newMeth(C$, 'setFocusTraversalPolicy$java_awt_FocusTraversalPolicy',  function (policy) {
var oldPolicy;
{
oldPolicy=this.focusTraversalPolicy;
this.focusTraversalPolicy=policy;
}this.firePropertyChange$S$O$O("focusTraversalPolicy", oldPolicy, policy);
});

Clazz.newMeth(C$, 'getFocusTraversalPolicy$',  function () {
if (!this.isFocusTraversalPolicyProvider$() && !this.isFocusCycleRoot$() ) {
return null;
}var policy=this.focusTraversalPolicy;
if (policy != null ) {
return policy;
}var rootAncestor=this.getFocusCycleRootAncestor$();
if (rootAncestor != null ) {
return rootAncestor.getFocusTraversalPolicy$();
} else if (this.秘isAWT$()) {
return $I$(15).getCurrentKeyboardFocusManager$().getDefaultAWTFocusTraversalPolicy$();
} else {
return $I$(15).getCurrentKeyboardFocusManager$().getDefaultFocusTraversalPolicy$();
}});

Clazz.newMeth(C$, 'isFocusTraversalPolicySet$',  function () {
return (this.focusTraversalPolicy != null );
});

Clazz.newMeth(C$, 'setFocusCycleRoot$Z',  function (focusCycleRoot) {
var oldFocusCycleRoot;
{
oldFocusCycleRoot=this.focusCycleRoot;
this.focusCycleRoot=focusCycleRoot;
}this.firePropertyChange$S$Z$Z("focusCycleRoot", oldFocusCycleRoot, focusCycleRoot);
});

Clazz.newMeth(C$, 'isFocusCycleRoot$',  function () {
return this.focusCycleRoot;
});

Clazz.newMeth(C$, 'setFocusTraversalPolicyProvider$Z',  function (provider) {
var oldProvider;
{
oldProvider=this.focusTraversalPolicyProvider;
this.focusTraversalPolicyProvider=provider;
}this.firePropertyChange$S$Z$Z("focusTraversalPolicyProvider", oldProvider, provider);
});

Clazz.newMeth(C$, 'isFocusTraversalPolicyProvider$',  function () {
return this.focusTraversalPolicyProvider;
});

Clazz.newMeth(C$, 'transferFocusDownCycle$',  function () {
});

Clazz.newMeth(C$, 'preProcessKeyEvent$java_awt_event_KeyEvent',  function (e) {
var parent=this.parent;
if (parent != null ) {
parent.preProcessKeyEvent$java_awt_event_KeyEvent(e);
}});

Clazz.newMeth(C$, 'postProcessKeyEvent$java_awt_event_KeyEvent',  function (e) {
var parent=this.parent;
if (parent != null ) {
parent.postProcessKeyEvent$java_awt_event_KeyEvent(e);
}});

Clazz.newMeth(C$, 'postsOldMouseEvents$',  function () {
return true;
});

Clazz.newMeth(C$, 'applyComponentOrientation$java_awt_ComponentOrientation',  function (o) {
this.applyCompOrientComp$java_awt_ComponentOrientation(o);
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
for (var i=0; i < this.component.size$(); i++) {
var comp=this.component.get$I(i);
comp.applyComponentOrientation$java_awt_ComponentOrientation(o);
}
}});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
C$.superclazz.prototype.addPropertyChangeListener$java_beans_PropertyChangeListener.apply(this, [listener]);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
C$.superclazz.prototype.addPropertyChangeListener$S$java_beans_PropertyChangeListener.apply(this, [propertyName, listener]);
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_ARRAY=Clazz.array($I$(1), [0]);
C$.NULL_INSETS=Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, 0, 0]);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Container, "EventTargetFilter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Container, "MouseEventTargetFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.awt.Container','java.awt.Container.EventTargetFilter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['FILTER','java.awt.Container.EventTargetFilter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$java_awt_Component',  function (comp) {
return Long.$ne((Long.$and(comp.eventMask,32)),0 ) || Long.$ne((Long.$and(comp.eventMask,16)),0 )  || Long.$ne((Long.$and(comp.eventMask,131072)),0 )  || comp.mouseListener != null   || comp.mouseMotionListener != null   || comp.mouseWheelListener != null  ;
});

C$.$static$=function(){C$.$static$=0;
C$.FILTER=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Container, "DropTargetEventTargetFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.awt.Container','java.awt.Container.EventTargetFilter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['FILTER','java.awt.Container.EventTargetFilter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$java_awt_Component',  function (comp) {
var dt=comp.getDropTarget$();
return dt != null  && dt.isActive$() ;
});

C$.$static$=function(){C$.$static$=0;
C$.FILTER=Clazz.new_(C$);
};
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

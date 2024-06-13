(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'javajs.util.Lst',['java.awt.CardLayout','.Card'],'java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CardLayout", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.LayoutManager2', 'java.io.Serializable']);
C$.$classes$=[['Card',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vector=Clazz.new_($I$(1,1));
this.currentCard=0;
},1);

C$.$fields$=[['I',['currentCard','hgap','vgap'],'O',['vector','javajs.util.Lst']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (hgap, vgap) {
;C$.$init$.apply(this);
this.hgap=hgap;
this.vgap=vgap;
}, 1);

Clazz.newMeth(C$, 'getHgap$',  function () {
return this.hgap;
});

Clazz.newMeth(C$, 'setHgap$I',  function (hgap) {
this.hgap=hgap;
});

Clazz.newMeth(C$, 'getVgap$',  function () {
return this.vgap;
});

Clazz.newMeth(C$, 'setVgap$I',  function (vgap) {
this.vgap=vgap;
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O',  function (comp, constraints) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getTreeLock$());
{
if (constraints == null ) {
constraints="";
}if (Clazz.instanceOf(constraints, "java.lang.String")) {
this.addLayoutComponent$S$java_awt_Component(constraints, comp);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot add to layout: constraint must be a string"]);
}}});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getTreeLock$());
{
if (!this.vector.isEmpty$()) {
comp.setVisible$Z(false);
}for (var i=0; i < this.vector.size$(); i++) {
if ((this.vector.get$I(i)).name.equals$O(name)) {
(this.vector.get$I(i)).comp=comp;
return;
}}
this.vector.add$O(Clazz.new_($I$(2,1).c$$S$java_awt_Component,[this, null, name, comp]));
}});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(comp.getTreeLock$());
{
for (var i=0; i < this.vector.size$(); i++) {
if ((this.vector.get$I(i)).comp === comp ) {
if (comp.isVisible$() && (comp.getParent$() != null ) ) {
this.next$java_awt_Container(comp.getParent$());
}this.vector.removeItemAt$I(i);
if (this.currentCard > i) {
--this.currentCard;
}break;
}}
}});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var w=0;
var h=0;
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
var d=comp.getPreferredSize$();
if (d.width > w) {
w=d.width;
}if (d.height > h) {
h=d.height;
}}
return Clazz.new_($I$(3,1).c$$I$I,[insets.left + insets.right + w + this.hgap * 2 , insets.top + insets.bottom + h + this.vgap * 2 ]);
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var w=0;
var h=0;
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
var d=comp.getMinimumSize$();
if (d.width > w) {
w=d.width;
}if (d.height > h) {
h=d.height;
}}
return Clazz.new_($I$(3,1).c$$I$I,[insets.left + insets.right + w + this.hgap * 2 , insets.top + insets.bottom + h + this.vgap * 2 ]);
}});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container',  function (target) {
return Clazz.new_($I$(3,1).c$$I$I,[2147483647, 2147483647]);
});

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container',  function (parent) {
return 0.5;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container',  function (parent) {
return 0.5;
});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container',  function (target) {
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var comp=null;
var currentFound=false;
for (var i=0; i < ncomponents; i++) {
comp=parent.getComponent$I(i);
comp.setBounds$I$I$I$I(this.hgap + insets.left, this.vgap + insets.top, parent.width - (this.hgap * 2 + insets.left + insets.right), parent.height - (this.vgap * 2 + insets.top + insets.bottom));
if (comp.isVisible$()) {
currentFound=true;
}}
if (!currentFound && ncomponents > 0 ) {
parent.getComponent$I(0).setVisible$Z(true);
}}});

Clazz.newMeth(C$, 'checkLayout$java_awt_Container',  function (parent) {
if (parent.getLayout$() !== this ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["wrong parent for CardLayout"]);
}});

Clazz.newMeth(C$, 'first$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
break;
}}
if (ncomponents > 0) {
this.currentCard=0;
parent.getComponent$I(0).setVisible$Z(true);
parent.validate$();
}}});

Clazz.newMeth(C$, 'next$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
this.currentCard=(i + 1) % ncomponents;
comp=parent.getComponent$I(this.currentCard);
comp.setVisible$Z(true);
parent.validate$();
return;
}}
this.showDefaultComponent$java_awt_Container(parent);
}});

Clazz.newMeth(C$, 'previous$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
this.currentCard=((i > 0) ? i - 1 : ncomponents - 1);
comp=parent.getComponent$I(this.currentCard);
comp.setVisible$Z(true);
parent.validate$();
return;
}}
this.showDefaultComponent$java_awt_Container(parent);
}});

Clazz.newMeth(C$, 'showDefaultComponent$java_awt_Container',  function (parent) {
if (parent.getComponentCount$() > 0) {
this.currentCard=0;
parent.getComponent$I(0).setVisible$Z(true);
parent.validate$();
}});

Clazz.newMeth(C$, 'last$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
break;
}}
if (ncomponents > 0) {
this.currentCard=ncomponents - 1;
parent.getComponent$I(this.currentCard).setVisible$Z(true);
parent.validate$();
}}});

Clazz.newMeth(C$, 'show$java_awt_Container$S',  function (parent, name) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
this.checkLayout$java_awt_Container(parent);
var next=null;
var ncomponents=this.vector.size$();
for (var i=0; i < ncomponents; i++) {
var card=this.vector.get$I(i);
if (card.name.equals$O(name)) {
next=card.comp;
this.currentCard=i;
break;
}}
if ((next != null ) && !next.isVisible$() ) {
ncomponents=parent.getComponentCount$();
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
if (comp.isVisible$()) {
comp.setVisible$Z(false);
break;
}}
next.setVisible$Z(true);
parent.validate$();
}}});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[hgap=" + this.hgap + ",vgap=" + this.vgap + "]" ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CardLayout, "Card", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['comp','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Component',  function (cardName, cardComponent) {
;C$.$init$.apply(this);
this.name=cardName;
this.comp=cardComponent;
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

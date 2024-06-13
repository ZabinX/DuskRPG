(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.awt.Dimension','javax.swing.SizeRequirements','java.awt.AWTError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OverlayLayout", null, null, 'java.awt.LayoutManager2');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['target','java.awt.Container','xChildren','javax.swing.SizeRequirements[]','+yChildren','xTotal','javax.swing.SizeRequirements','+yTotal']]]

Clazz.newMeth(C$, 'c$$java_awt_Container',  function (target) {
;C$.$init$.apply(this);
this.target=target;
}, 1);

Clazz.newMeth(C$, 'getTarget$',  function () {
return this.target;
});

Clazz.newMeth(C$, 'invalidateLayout$java_awt_Container',  function (target) {
this.checkContainer$java_awt_Container(target);
this.xChildren=null;
this.yChildren=null;
this.xTotal=null;
this.yTotal=null;
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
this.invalidateLayout$java_awt_Container(comp.getParent$());
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
this.invalidateLayout$java_awt_Container(comp.getParent$());
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O',  function (comp, constraints) {
this.invalidateLayout$java_awt_Container(comp.getParent$());
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
var size=Clazz.new_($I$(1,1).c$$I$I,[this.xTotal.preferred, this.yTotal.preferred]);
var insets=target.getInsets$();
size.width+=insets.left + insets.right;
size.height+=insets.top + insets.bottom;
return size;
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
var size=Clazz.new_($I$(1,1).c$$I$I,[this.xTotal.minimum, this.yTotal.minimum]);
var insets=target.getInsets$();
size.width+=insets.left + insets.right;
size.height+=insets.top + insets.bottom;
return size;
});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container',  function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
var size=Clazz.new_($I$(1,1).c$$I$I,[this.xTotal.maximum, this.yTotal.maximum]);
var insets=target.getInsets$();
size.width+=insets.left + insets.right;
size.height+=insets.top + insets.bottom;
return size;
});

Clazz.newMeth(C$, 'getLayoutAlignmentX$java_awt_Container',  function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
return this.xTotal.alignment;
});

Clazz.newMeth(C$, 'getLayoutAlignmentY$java_awt_Container',  function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
return this.yTotal.alignment;
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (target) {
this.checkContainer$java_awt_Container(target);
this.checkRequests$();
var nChildren=target.getComponentCount$();
var xOffsets=Clazz.array(Integer.TYPE, [nChildren]);
var xSpans=Clazz.array(Integer.TYPE, [nChildren]);
var yOffsets=Clazz.array(Integer.TYPE, [nChildren]);
var ySpans=Clazz.array(Integer.TYPE, [nChildren]);
var alloc=target.getSize$();
var $in=target.getInsets$();
alloc.width-=$in.left + $in.right;
alloc.height-=$in.top + $in.bottom;
$I$(2).calculateAlignedPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA(alloc.width, this.xTotal, this.xChildren, xOffsets, xSpans);
$I$(2).calculateAlignedPositions$I$javax_swing_SizeRequirements$javax_swing_SizeRequirementsA$IA$IA(alloc.height, this.yTotal, this.yChildren, yOffsets, ySpans);
for (var i=0; i < nChildren; i++) {
var c=target.getComponent$I(i);
c.setBounds$I$I$I$I($in.left + xOffsets[i], $in.top + yOffsets[i], xSpans[i], ySpans[i]);
}
});

Clazz.newMeth(C$, 'checkContainer$java_awt_Container',  function (target) {
if (this.target !== target ) {
throw Clazz.new_($I$(3,1).c$$S,["OverlayLayout can\'t be shared"]);
}});

Clazz.newMeth(C$, 'checkRequests$',  function () {
if (this.xChildren == null  || this.yChildren == null  ) {
var n=this.target.getComponentCount$();
this.xChildren=Clazz.array($I$(2), [n]);
this.yChildren=Clazz.array($I$(2), [n]);
for (var i=0; i < n; i++) {
var c=this.target.getComponent$I(i);
var min=c.getMinimumSize$();
var typ=c.getPreferredSize$();
var max=c.getMaximumSize$();
this.xChildren[i]=Clazz.new_([min.width, typ.width, max.width, c.getAlignmentX$()],$I$(2,1).c$$I$I$I$F);
this.yChildren[i]=Clazz.new_([min.height, typ.height, max.height, c.getAlignmentY$()],$I$(2,1).c$$I$I$I$F);
}
this.xTotal=$I$(2).getAlignedSizeRequirements$javax_swing_SizeRequirementsA(this.xChildren);
this.yTotal=$I$(2).getAlignedSizeRequirements$javax_swing_SizeRequirementsA(this.yChildren);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.util.LinkedList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LayoutComparator", null, null, ['java.util.Comparator', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.horizontal=true;
this.leftToRight=true;
},1);

C$.$fields$=[['Z',['horizontal','leftToRight']]]

Clazz.newMeth(C$, 'setComponentOrientation$java_awt_ComponentOrientation',  function (orientation) {
this.horizontal=orientation.isHorizontal$();
this.leftToRight=orientation.isLeftToRight$();
});

Clazz.newMeth(C$, 'compare$O$O',  function (o1, o2) {
var a=o1;
var b=o2;
if (a === b ) {
return 0;
}if (a.getParent$() !== b.getParent$() ) {
var aAncestory;
var bAncestory;
for (aAncestory=Clazz.new_($I$(1,1)); a != null ; a=a.getParent$()) {
aAncestory.add$O(a);
if (a.isWindowOrJSApplet$()) {
break;
}}
if (a == null ) {
throw Clazz.new_(Clazz.load('ClassCastException'));
}for (bAncestory=Clazz.new_($I$(1,1)); b != null ; b=b.getParent$()) {
bAncestory.add$O(b);
if (b.isWindowOrJSApplet$()) {
break;
}}
if (b == null ) {
throw Clazz.new_(Clazz.load('ClassCastException'));
}for (var aIter=aAncestory.listIterator$I(aAncestory.size$()), bIter=bAncestory.listIterator$I(bAncestory.size$()); ; ) {
if (aIter.hasPrevious$()) {
a=aIter.previous$();
} else {
return -1;
}if (bIter.hasPrevious$()) {
b=bIter.previous$();
} else {
return 1;
}if (a !== b ) {
break;
}}
}var ax=a.getX$();
var ay=a.getY$();
var bx=b.getX$();
var by=b.getY$();
var ap=a.getParent$();
var bp=b.getParent$();
var zOrder=(ap == null  ? 1 : bp == null  ? -1 : ap.getComponentZOrder$java_awt_Component(a) - bp.getComponentZOrder$java_awt_Component(b));
if (this.horizontal) {
if (this.leftToRight) {
if (Math.abs(ay - by) < 10) {
return (ax < bx) ? -1 : ((ax > bx) ? 1 : zOrder);
} else {
return (ay < by) ? -1 : 1;
}} else {
if (Math.abs(ay - by) < 10) {
return (ax > bx) ? -1 : ((ax < bx) ? 1 : zOrder);
} else {
return (ay < by) ? -1 : 1;
}}} else {
if (this.leftToRight) {
if (Math.abs(ax - bx) < 10) {
return (ay < by) ? -1 : ((ay > by) ? 1 : zOrder);
} else {
return (ax < bx) ? -1 : 1;
}} else {
if (Math.abs(ax - bx) < 10) {
return (ay < by) ? -1 : ((ay > by) ? 1 : zOrder);
} else {
return (ax > bx) ? -1 : 1;
}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:00 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

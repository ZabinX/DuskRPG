(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FlowLayout", null, null, ['java.awt.LayoutManager', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['alignOnBaseline'],'I',['align','newAlign','hgap','vgap']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I$I.apply(this, [1, 5, 5]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (align) {
C$.c$$I$I$I.apply(this, [align, 5, 5]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (align, hgap, vgap) {
;C$.$init$.apply(this);
this.hgap=hgap;
this.vgap=vgap;
this.setAlignment$I(align);
}, 1);

Clazz.newMeth(C$, 'getAlignment$',  function () {
return this.newAlign;
});

Clazz.newMeth(C$, 'setAlignment$I',  function (align) {
this.newAlign=align;
switch (align) {
case 3:
this.align=0;
break;
case 4:
this.align=2;
break;
default:
this.align=align;
break;
}
});

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

Clazz.newMeth(C$, 'setAlignOnBaseline$Z',  function (alignOnBaseline) {
this.alignOnBaseline=alignOnBaseline;
});

Clazz.newMeth(C$, 'getAlignOnBaseline$',  function () {
return this.alignOnBaseline;
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (target) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(target.getTreeLock$());
{
var dim=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
var nmembers=target.getComponentCount$();
var firstVisibleComponent=true;
var useBaseline=this.getAlignOnBaseline$();
var maxAscent=0;
var maxDescent=0;
for (var i=0; i < nmembers; i++) {
var m=target.getComponent$I(i);
if (m.isVisible$()) {
var d=m.getPreferredSize$();
dim.height=Math.max(dim.height, d.height);
if (firstVisibleComponent) {
firstVisibleComponent=false;
} else {
dim.width+=this.hgap;
}dim.width+=d.width;
if (useBaseline) {
var baseline=m.getBaseline$I$I(d.width, d.height);
if (baseline >= 0) {
maxAscent=Math.max(maxAscent, baseline);
maxDescent=Math.max(maxDescent, d.height - baseline);
}}}}
if (useBaseline) {
dim.height=Math.max(maxAscent + maxDescent, dim.height);
}var insets=target.getInsets$();
dim.width+=insets.left + insets.right + this.hgap * 2 ;
dim.height+=insets.top + insets.bottom + this.vgap * 2 ;
return dim;
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (target) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(target.getTreeLock$());
{
var useBaseline=this.getAlignOnBaseline$();
var dim=Clazz.new_($I$(1,1).c$$I$I,[0, 0]);
var nmembers=target.getComponentCount$();
var maxAscent=0;
var maxDescent=0;
var firstVisibleComponent=true;
for (var i=0; i < nmembers; i++) {
var m=target.getComponent$I(i);
if (m.visible) {
var d=m.getMinimumSize$();
dim.height=Math.max(dim.height, d.height);
if (firstVisibleComponent) {
firstVisibleComponent=false;
} else {
dim.width+=this.hgap;
}dim.width+=d.width;
if (useBaseline) {
var baseline=m.getBaseline$I$I(d.width, d.height);
if (baseline >= 0) {
maxAscent=Math.max(maxAscent, baseline);
maxDescent=Math.max(maxDescent, dim.height - baseline);
}}}}
if (useBaseline) {
dim.height=Math.max(maxAscent + maxDescent, dim.height);
}var insets=target.getInsets$();
dim.width+=insets.left + insets.right + this.hgap * 2 ;
dim.height+=insets.top + insets.bottom + this.vgap * 2 ;
return dim;
}});

Clazz.newMeth(C$, 'moveComponents$java_awt_Container$I$I$I$I$I$I$Z$Z$IA$IA',  function (target, x, y, width, height, rowStart, rowEnd, ltr, useBaseline, ascent, descent) {
switch (this.newAlign) {
case 0:
x+=ltr ? 0 : width;
break;
case 1:
x+=(width/2|0);
break;
case 2:
x+=ltr ? width : 0;
break;
case 3:
break;
case 4:
x+=width;
break;
}
var maxAscent=0;
var nonbaselineHeight=0;
var baselineOffset=0;
if (useBaseline) {
var maxDescent=0;
for (var i=rowStart; i < rowEnd; i++) {
var m=target.getComponent$I(i);
if (m.visible) {
if (ascent[i] >= 0) {
maxAscent=Math.max(maxAscent, ascent[i]);
maxDescent=Math.max(maxDescent, descent[i]);
} else {
nonbaselineHeight=Math.max(m.getHeight$(), nonbaselineHeight);
}}}
height=Math.max(maxAscent + maxDescent, nonbaselineHeight);
baselineOffset=((height - maxAscent - maxDescent )/2|0);
}for (var i=rowStart; i < rowEnd; i++) {
var m=target.getComponent$I(i);
if (m.isVisible$()) {
var cy;
if (useBaseline && ascent[i] >= 0 ) {
cy=y + baselineOffset + maxAscent  - ascent[i];
} else {
cy=y + ((height - m.height)/2|0);
}if (ltr) {
m.setLocation$I$I(x, cy);
} else {
m.setLocation$I$I(target.width - x - m.width , cy);
}x+=m.width + this.hgap;
}}
return height;
}, p$1);

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (target) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(target.getTreeLock$());
{
var insets=target.getInsets$();
var maxwidth=target.width - (insets.left + insets.right + this.hgap * 2 );
var nmembers=target.getComponentCount$();
var x=0;
var y=insets.top + this.vgap;
var rowh=0;
var start=0;
var ltr=target.getComponentOrientation$().isLeftToRight$();
var useBaseline=this.getAlignOnBaseline$();
var ascent=null;
var descent=null;
if (useBaseline) {
ascent=Clazz.array(Integer.TYPE, [nmembers]);
descent=Clazz.array(Integer.TYPE, [nmembers]);
}for (var i=0; i < nmembers; i++) {
var m=target.getComponent$I(i);
if (m.isVisible$()) {
var d=m.getPreferredSize$();
m.setSize$I$I(d.width, d.height);
if (useBaseline) {
var baseline=m.getBaseline$I$I(d.width, d.height);
if (baseline >= 0) {
ascent[i]=baseline;
descent[i]=d.height - baseline;
} else {
ascent[i]=-1;
}}if ((x == 0) || ((x + d.width) <= maxwidth) ) {
if (x > 0) {
x+=this.hgap;
}x+=d.width;
rowh=Math.max(rowh, d.height);
} else {
rowh=p$1.moveComponents$java_awt_Container$I$I$I$I$I$I$Z$Z$IA$IA.apply(this, [target, insets.left + this.hgap, y, maxwidth - x, rowh, start, i, ltr, useBaseline, ascent, descent]);
x=d.width;
y+=this.vgap + rowh;
rowh=d.height;
start=i;
}}}
p$1.moveComponents$java_awt_Container$I$I$I$I$I$I$Z$Z$IA$IA.apply(this, [target, insets.left + this.hgap, y, maxwidth - x, rowh, start, nmembers, ltr, useBaseline, ascent, descent]);
}});

Clazz.newMeth(C$, 'toString',  function () {
var str="";
switch (this.align) {
case 0:
str=",align=left";
break;
case 1:
str=",align=center";
break;
case 2:
str=",align=right";
break;
case 3:
str=",align=leading";
break;
case 4:
str=",align=trailing";
break;
}
return this.getClass$().getName$() + "[hgap=" + this.hgap + ",vgap=" + this.vgap + str + "]" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridLayout", null, null, ['java.awt.LayoutManager', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hgap','vgap','rows','cols']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I$I$I.apply(this, [1, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (rows, cols) {
C$.c$$I$I$I$I.apply(this, [rows, cols, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (rows, cols, hgap, vgap) {
;C$.$init$.apply(this);
if ((rows == 0) && (cols == 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rows and cols cannot both be zero"]);
}this.rows=rows;
this.cols=cols;
this.hgap=hgap;
this.vgap=vgap;
}, 1);

Clazz.newMeth(C$, 'getRows$',  function () {
return this.rows;
});

Clazz.newMeth(C$, 'setRows$I',  function (rows) {
if ((rows == 0) && (this.cols == 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rows and cols cannot both be zero"]);
}this.rows=rows;
});

Clazz.newMeth(C$, 'getColumns$',  function () {
return this.cols;
});

Clazz.newMeth(C$, 'setColumns$I',  function (cols) {
if ((cols == 0) && (this.rows == 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["rows and cols cannot both be zero"]);
}this.cols=cols;
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

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var nrows=this.rows;
var ncols=this.cols;
if (nrows > 0) {
ncols=((ncomponents + nrows - 1)/nrows|0);
} else {
nrows=((ncomponents + ncols - 1)/ncols|0);
}var w=0;
var h=0;
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
var d=comp.getPreferredSize$();
if (w < d.width) {
w=d.width;
}if (h < d.height) {
h=d.height;
}}
return Clazz.new_([insets.left + insets.right + ncols * w  + (ncols - 1) * this.hgap, insets.top + insets.bottom + nrows * h  + (nrows - 1) * this.vgap],$I$(1,1).c$$I$I);
}});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var nrows=this.rows;
var ncols=this.cols;
if (nrows > 0) {
ncols=((ncomponents + nrows - 1)/nrows|0);
} else {
nrows=((ncomponents + ncols - 1)/ncols|0);
}var w=0;
var h=0;
for (var i=0; i < ncomponents; i++) {
var comp=parent.getComponent$I(i);
var d=comp.getMinimumSize$();
if (w < d.width) {
w=d.width;
}if (h < d.height) {
h=d.height;
}}
return Clazz.new_([insets.left + insets.right + ncols * w  + (ncols - 1) * this.hgap, insets.top + insets.bottom + nrows * h  + (nrows - 1) * this.vgap],$I$(1,1).c$$I$I);
}});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var insets=parent.getInsets$();
var ncomponents=parent.getComponentCount$();
var nrows=this.rows;
var ncols=this.cols;
var ltr=parent.getComponentOrientation$().isLeftToRight$();
if (ncomponents == 0) {
return;
}if (nrows > 0) {
ncols=((ncomponents + nrows - 1)/nrows|0);
} else {
nrows=((ncomponents + ncols - 1)/ncols|0);
}var totalGapsWidth=(ncols - 1) * this.hgap;
var widthWOInsets=parent.width - (insets.left + insets.right);
var widthOnComponent=((widthWOInsets - totalGapsWidth)/ncols|0);
var extraWidthAvailable=((widthWOInsets - (widthOnComponent * ncols + totalGapsWidth))/2|0);
var totalGapsHeight=(nrows - 1) * this.vgap;
var heightWOInsets=parent.height - (insets.top + insets.bottom);
var heightOnComponent=((heightWOInsets - totalGapsHeight)/nrows|0);
var extraHeightAvailable=((heightWOInsets - (heightOnComponent * nrows + totalGapsHeight))/2|0);
if (ltr) {
for (var c=0, x=insets.left + extraWidthAvailable; c < ncols; c++, x+=widthOnComponent + this.hgap) {
for (var r=0, y=insets.top + extraHeightAvailable; r < nrows; r++, y+=heightOnComponent + this.vgap) {
var i=r * ncols + c;
if (i < ncomponents) {
parent.getComponent$I(i).setBounds$I$I$I$I(x, y, widthOnComponent, heightOnComponent);
}}
}
} else {
for (var c=0, x=(parent.width - insets.right - widthOnComponent ) - extraWidthAvailable; c < ncols; c++, x-=widthOnComponent + this.hgap) {
for (var r=0, y=insets.top + extraHeightAvailable; r < nrows; r++, y+=heightOnComponent + this.vgap) {
var i=r * ncols + c;
if (i < ncomponents) {
parent.getComponent$I(i).setBounds$I$I$I$I(x, y, widthOnComponent, heightOnComponent);
}}
}
}}});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[hgap=" + this.hgap + ",vgap=" + this.vgap + ",rows=" + this.rows + ",cols=" + this.cols + "]" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

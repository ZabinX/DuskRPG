(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.util.Hashtable','java.awt.GridBagConstraints','java.awt.Point','java.awt.Dimension','java.awt.GridBagLayoutInfo','java.util.Arrays',['java.awt.Component','.BaselineResizeBehavior'],'java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GridBagLayout", null, null, ['java.awt.LayoutManager2', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rightToLeft=false;
},1);

C$.$fields$=[['Z',['rightToLeft'],'O',['comptable','java.util.Hashtable','defaultConstraints','java.awt.GridBagConstraints','layoutInfo','java.awt.GridBagLayoutInfo','columnWidths','int[]','+rowHeights','columnWeights','double[]','+rowWeights','componentAdjusting','java.awt.Component']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.comptable=Clazz.new_($I$(1,1));
this.defaultConstraints=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'setConstraints$java_awt_Component$java_awt_GridBagConstraints',  function (comp, constraints) {
this.comptable.put$O$O(comp, constraints.clone$());
});

Clazz.newMeth(C$, 'getConstraints$java_awt_Component',  function (comp) {
var constraints=this.comptable.get$O(comp);
if (constraints == null ) {
this.setConstraints$java_awt_Component$java_awt_GridBagConstraints(comp, this.defaultConstraints);
constraints=this.comptable.get$O(comp);
}return constraints.clone$();
});

Clazz.newMeth(C$, 'lookupConstraints$java_awt_Component',  function (comp) {
var constraints=this.comptable.get$O(comp);
if (constraints == null ) {
this.setConstraints$java_awt_Component$java_awt_GridBagConstraints(comp, this.defaultConstraints);
constraints=this.comptable.get$O(comp);
}return constraints;
});

Clazz.newMeth(C$, 'removeConstraints$java_awt_Component',  function (comp) {
this.comptable.remove$O(comp);
}, p$1);

Clazz.newMeth(C$, 'getLayoutOrigin$',  function () {
var origin=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
if (this.layoutInfo != null ) {
origin.x=this.layoutInfo.startx;
origin.y=this.layoutInfo.starty;
}return origin;
});

Clazz.newMeth(C$, 'getLayoutDimensions$',  function () {
if (this.layoutInfo == null ) return Clazz.array(Integer.TYPE, [2, 0]);
var dim=Clazz.array(Integer.TYPE, [2, null]);
dim[0]=Clazz.array(Integer.TYPE, [this.layoutInfo.width]);
dim[1]=Clazz.array(Integer.TYPE, [this.layoutInfo.height]);
System.arraycopy$O$I$O$I$I(this.layoutInfo.minWidth, 0, dim[0], 0, this.layoutInfo.width);
System.arraycopy$O$I$O$I$I(this.layoutInfo.minHeight, 0, dim[1], 0, this.layoutInfo.height);
return dim;
});

Clazz.newMeth(C$, 'getLayoutWeights$',  function () {
if (this.layoutInfo == null ) return Clazz.array(Double.TYPE, [2, 0]);
var weights=Clazz.array(Double.TYPE, [2, null]);
weights[0]=Clazz.array(Double.TYPE, [this.layoutInfo.width]);
weights[1]=Clazz.array(Double.TYPE, [this.layoutInfo.height]);
System.arraycopy$O$I$O$I$I(this.layoutInfo.weightX, 0, weights[0], 0, this.layoutInfo.width);
System.arraycopy$O$I$O$I$I(this.layoutInfo.weightY, 0, weights[1], 0, this.layoutInfo.height);
return weights;
});

Clazz.newMeth(C$, 'location$I$I',  function (x, y) {
var loc=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
var i;
var d;
if (this.layoutInfo == null ) return loc;
d=this.layoutInfo.startx;
if (!this.rightToLeft) {
for (i=0; i < this.layoutInfo.width; i++) {
d+=this.layoutInfo.minWidth[i];
if (d > x) break;
}
} else {
for (i=this.layoutInfo.width - 1; i >= 0; i--) {
if (d > x) break;
d+=this.layoutInfo.minWidth[i];
}
++i;
}loc.x=i;
d=this.layoutInfo.starty;
for (i=0; i < this.layoutInfo.height; i++) {
d+=this.layoutInfo.minHeight[i];
if (d > y) break;
}
loc.y=i;
return loc;
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
});

Clazz.newMeth(C$, 'addLayoutComponent$java_awt_Component$O',  function (comp, constraints) {
if (Clazz.instanceOf(constraints, "java.awt.GridBagConstraints")) {
this.setConstraints$java_awt_Component$java_awt_GridBagConstraints(comp, constraints);
} else if (constraints != null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot add to layout: constraints must be a GridBagConstraint"]);
}});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
p$1.removeConstraints$java_awt_Component.apply(this, [comp]);
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
var info=this.getLayoutInfo$java_awt_Container$I(parent, 2);
return this.getMinSize$java_awt_Container$java_awt_GridBagLayoutInfo(parent, info);
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
var info=this.getLayoutInfo$java_awt_Container$I(parent, 1);
return this.getMinSize$java_awt_Container$java_awt_GridBagLayoutInfo(parent, info);
});

Clazz.newMeth(C$, 'maximumLayoutSize$java_awt_Container',  function (target) {
return Clazz.new_($I$(4,1).c$$I$I,[2147483647, 2147483647]);
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
this.arrangeGrid$java_awt_Container(parent);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$();
});

Clazz.newMeth(C$, 'getLayoutInfo$java_awt_Container$I',  function (parent, sizeflag) {
return this.GetLayoutInfo$java_awt_Container$I(parent, sizeflag);
});

Clazz.newMeth(C$, 'preInitMaximumArraySizes$java_awt_Container',  function (parent) {
var components=parent.getChildArray$();
var comp;
var constraints;
var curX;
var curY;
var curWidth;
var curHeight;
var preMaximumArrayXIndex=0;
var preMaximumArrayYIndex=0;
var returnArray=Clazz.array(Long.TYPE, [2]);
for (var compId=0, n=parent.getComponentCount$(); compId < n; compId++) {
comp=components[compId];
if (!comp.isVisible$()) {
continue;
}constraints=this.lookupConstraints$java_awt_Component(comp);
curX=constraints.gridx;
curY=constraints.gridy;
curWidth=constraints.gridwidth;
curHeight=constraints.gridheight;
if (curX < 0) {
curX=++preMaximumArrayYIndex;
}if (curY < 0) {
curY=++preMaximumArrayXIndex;
}if (curWidth <= 0) {
curWidth=1;
}if (curHeight <= 0) {
curHeight=1;
}preMaximumArrayXIndex=Math.max(curY + curHeight, preMaximumArrayXIndex);
preMaximumArrayYIndex=Math.max(curX + curWidth, preMaximumArrayYIndex);
}
returnArray[0]=preMaximumArrayXIndex;
returnArray[1]=preMaximumArrayYIndex;
return returnArray;
}, p$1);

Clazz.newMeth(C$, 'GetLayoutInfo$java_awt_Container$I',  function (parent, sizeflag) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(parent.getTreeLock$());
{
var r;
var comp;
var constraints;
var d;
var components=parent.getChildArray$();
var n=parent.getComponentCount$();
var layoutWidth;
var layoutHeight;
var xMaxArray;
var yMaxArray;
var compindex;
var i;
var k;
var px;
var py;
var pixels_diff;
var nextSize;
var curX=0;
var curY=0;
var curWidth=1;
var curHeight=1;
var curRow;
var curCol;
var weight_diff;
var weight;
var maximumArrayXIndex=0;
var maximumArrayYIndex=0;
var anchor;
layoutWidth=layoutHeight=0;
curRow=curCol=-1;
var arraySizes=p$1.preInitMaximumArraySizes$java_awt_Container.apply(this, [parent]);
maximumArrayXIndex=(Long.$gt(Long.$mul(2,arraySizes[0]),2147483647 )) ? 2147483647 : 2 * Long.$ival(arraySizes[0]);
maximumArrayYIndex=(Long.$gt(Long.$mul(2,arraySizes[1]),2147483647 )) ? 2147483647 : 2 * Long.$ival(arraySizes[1]);
if (this.rowHeights != null ) {
maximumArrayXIndex=Math.max(maximumArrayXIndex, this.rowHeights.length);
}if (this.columnWidths != null ) {
maximumArrayYIndex=Math.max(maximumArrayYIndex, this.columnWidths.length);
}xMaxArray=Clazz.array(Integer.TYPE, [maximumArrayXIndex]);
yMaxArray=Clazz.array(Integer.TYPE, [maximumArrayYIndex]);
var hasBaseline=false;
for (compindex=0; compindex < n; compindex++) {
comp=components[compindex];
if (!comp.isVisible$()) continue;
constraints=this.lookupConstraints$java_awt_Component(comp);
curX=constraints.gridx;
curY=constraints.gridy;
curWidth=constraints.gridwidth;
if (curWidth <= 0) curWidth=1;
curHeight=constraints.gridheight;
if (curHeight <= 0) curHeight=1;
if (curX < 0 && curY < 0 ) {
if (curRow >= 0) curY=curRow;
 else if (curCol >= 0) curX=curCol;
 else curY=0;
}if (curX < 0) {
px=0;
for (i=curY; i < (curY + curHeight); i++) {
px=Math.max(px, xMaxArray[i]);
}
curX=px - curX - 1 ;
if (curX < 0) curX=0;
} else if (curY < 0) {
py=0;
for (i=curX; i < (curX + curWidth); i++) {
py=Math.max(py, yMaxArray[i]);
}
curY=py - curY - 1 ;
if (curY < 0) curY=0;
}px=curX + curWidth;
if (layoutWidth < px) {
layoutWidth=px;
}py=curY + curHeight;
if (layoutHeight < py) {
layoutHeight=py;
}for (i=curX; i < (curX + curWidth); i++) {
yMaxArray[i]=py;
}
for (i=curY; i < (curY + curHeight); i++) {
xMaxArray[i]=px;
}
if (sizeflag == 2) d=comp.getPreferredSize$();
 else d=comp.getMinimumSize$();
constraints.minWidth=d.width;
constraints.minHeight=d.height;
if (p$1.calculateBaseline$java_awt_Component$java_awt_GridBagConstraints$java_awt_Dimension.apply(this, [comp, constraints, d])) {
hasBaseline=true;
}if (constraints.gridheight == 0 && constraints.gridwidth == 0 ) curRow=curCol=-1;
if (constraints.gridheight == 0 && curRow < 0 ) curCol=curX + curWidth;
 else if (constraints.gridwidth == 0 && curCol < 0 ) curRow=curY + curHeight;
}
if (this.columnWidths != null  && layoutWidth < this.columnWidths.length ) layoutWidth=this.columnWidths.length;
if (this.rowHeights != null  && layoutHeight < this.rowHeights.length ) layoutHeight=this.rowHeights.length;
r=Clazz.new_($I$(5,1).c$$I$I,[layoutWidth, layoutHeight]);
curRow=curCol=-1;
$I$(6).fill$IA$I(xMaxArray, 0);
$I$(6).fill$IA$I(yMaxArray, 0);
var maxAscent=null;
var maxDescent=null;
var baselineType=null;
if (hasBaseline) {
r.maxAscent=maxAscent=Clazz.array(Integer.TYPE, [layoutHeight]);
r.maxDescent=maxDescent=Clazz.array(Integer.TYPE, [layoutHeight]);
r.baselineType=baselineType=Clazz.array(Short.TYPE, [layoutHeight]);
r.hasBaseline=true;
}for (compindex=0; compindex < n; compindex++) {
comp=components[compindex];
if (!comp.isVisible$()) continue;
constraints=this.lookupConstraints$java_awt_Component(comp);
curX=constraints.gridx;
curY=constraints.gridy;
curWidth=constraints.gridwidth;
curHeight=constraints.gridheight;
if (curX < 0 && curY < 0 ) {
if (curRow >= 0) curY=curRow;
 else if (curCol >= 0) curX=curCol;
 else curY=0;
}if (curX < 0) {
if (curHeight <= 0) {
curHeight+=r.height - curY;
if (curHeight < 1) curHeight=1;
}px=0;
for (i=curY; i < (curY + curHeight); i++) px=Math.max(px, xMaxArray[i]);

curX=px - curX - 1 ;
if (curX < 0) curX=0;
} else if (curY < 0) {
if (curWidth <= 0) {
curWidth+=r.width - curX;
if (curWidth < 1) curWidth=1;
}py=0;
for (i=curX; i < (curX + curWidth); i++) {
py=Math.max(py, yMaxArray[i]);
}
curY=py - curY - 1 ;
if (curY < 0) curY=0;
}if (curWidth <= 0) {
curWidth+=r.width - curX;
if (curWidth < 1) curWidth=1;
}if (curHeight <= 0) {
curHeight+=r.height - curY;
if (curHeight < 1) curHeight=1;
}px=curX + curWidth;
py=curY + curHeight;
for (i=curX; i < (curX + curWidth); i++) {
yMaxArray[i]=py;
}
for (i=curY; i < (curY + curHeight); i++) {
xMaxArray[i]=px;
}
if (constraints.gridheight == 0 && constraints.gridwidth == 0 ) curRow=curCol=-1;
if (constraints.gridheight == 0 && curRow < 0 ) curCol=curX + curWidth;
 else if (constraints.gridwidth == 0 && curCol < 0 ) curRow=curY + curHeight;
constraints.tempX=curX;
constraints.tempY=curY;
constraints.tempWidth=curWidth;
constraints.tempHeight=curHeight;
anchor=constraints.anchor;
if (hasBaseline) {
switch (anchor) {
case 256:
case 512:
case 768:
if (constraints.ascent >= 0) {
if (curHeight == 1) {
maxAscent[curY]=Math.max(maxAscent[curY], constraints.ascent);
maxDescent[curY]=Math.max(maxDescent[curY], constraints.descent);
} else {
if (constraints.baselineResizeBehavior === $I$(7).CONSTANT_DESCENT ) {
maxDescent[curY + curHeight - 1]=Math.max(maxDescent[curY + curHeight - 1], constraints.descent);
} else {
maxAscent[curY]=Math.max(maxAscent[curY], constraints.ascent);
}}if (constraints.baselineResizeBehavior === $I$(7).CONSTANT_DESCENT ) {
baselineType[$k$=curY + curHeight - 1]=(baselineType[$k$]|((1 << constraints.baselineResizeBehavior.ordinal$()))|0);
} else {
baselineType[$k$=curY]=(baselineType[$k$]|((1 << constraints.baselineResizeBehavior.ordinal$()))|0);
}}break;
case 1024:
case 1280:
case 1536:
pixels_diff=constraints.minHeight + constraints.insets.top + constraints.ipady ;
maxAscent[curY]=Math.max(maxAscent[curY], pixels_diff);
maxDescent[curY]=Math.max(maxDescent[curY], constraints.insets.bottom);
break;
case 1792:
case 2048:
case 2304:
pixels_diff=constraints.minHeight + constraints.insets.bottom + constraints.ipady ;
maxDescent[curY]=Math.max(maxDescent[curY], pixels_diff);
maxAscent[curY]=Math.max(maxAscent[curY], constraints.insets.top);
break;
}
}}
r.weightX=Clazz.array(Double.TYPE, [maximumArrayYIndex]);
r.weightY=Clazz.array(Double.TYPE, [maximumArrayXIndex]);
r.minWidth=Clazz.array(Integer.TYPE, [maximumArrayYIndex]);
r.minHeight=Clazz.array(Integer.TYPE, [maximumArrayXIndex]);
if (this.columnWidths != null ) System.arraycopy$O$I$O$I$I(this.columnWidths, 0, r.minWidth, 0, this.columnWidths.length);
if (this.rowHeights != null ) System.arraycopy$O$I$O$I$I(this.rowHeights, 0, r.minHeight, 0, this.rowHeights.length);
if (this.columnWeights != null ) System.arraycopy$O$I$O$I$I(this.columnWeights, 0, r.weightX, 0, Math.min(r.weightX.length, this.columnWeights.length));
if (this.rowWeights != null ) System.arraycopy$O$I$O$I$I(this.rowWeights, 0, r.weightY, 0, Math.min(r.weightY.length, this.rowWeights.length));
nextSize=2147483647;
for (i=1; i != 2147483647; i=nextSize, nextSize=2147483647) {
for (compindex=0; compindex < n; compindex++) {
comp=components[compindex];
if (!comp.isVisible$()) continue;
constraints=this.lookupConstraints$java_awt_Component(comp);
if (constraints.tempWidth == i) {
px=constraints.tempX + constraints.tempWidth;
weight_diff=constraints.weightx;
for (k=constraints.tempX; k < px; k++) weight_diff-=r.weightX[k];

if (weight_diff > 0.0 ) {
weight=0.0;
for (k=constraints.tempX; k < px; k++) weight+=r.weightX[k];

for (k=constraints.tempX; weight > 0.0  && k < px ; k++) {
var wt=r.weightX[k];
var dx=(wt * weight_diff) / weight;
r.weightX[k]+=dx;
weight_diff-=dx;
weight-=wt;
}
r.weightX[px - 1]+=weight_diff;
}pixels_diff=constraints.minWidth + constraints.ipadx + constraints.insets.left + constraints.insets.right ;
for (k=constraints.tempX; k < px; k++) pixels_diff-=r.minWidth[k];

if (pixels_diff > 0) {
weight=0.0;
for (k=constraints.tempX; k < px; k++) weight+=r.weightX[k];

for (k=constraints.tempX; weight > 0.0  && k < px ; k++) {
var wt=r.weightX[k];
var dx=(((wt * (pixels_diff)) / weight)|0);
r.minWidth[k]+=dx;
pixels_diff-=dx;
weight-=wt;
}
r.minWidth[px - 1]+=pixels_diff;
}} else if (constraints.tempWidth > i && constraints.tempWidth < nextSize ) nextSize=constraints.tempWidth;
if (constraints.tempHeight == i) {
py=constraints.tempY + constraints.tempHeight;
weight_diff=constraints.weighty;
for (k=constraints.tempY; k < py; k++) weight_diff-=r.weightY[k];

if (weight_diff > 0.0 ) {
weight=0.0;
for (k=constraints.tempY; k < py; k++) weight+=r.weightY[k];

for (k=constraints.tempY; weight > 0.0  && k < py ; k++) {
var wt=r.weightY[k];
var dy=(wt * weight_diff) / weight;
r.weightY[k]+=dy;
weight_diff-=dy;
weight-=wt;
}
r.weightY[py - 1]+=weight_diff;
}pixels_diff=-1;
if (hasBaseline) {
switch (constraints.anchor) {
case 256:
case 512:
case 768:
if (constraints.ascent >= 0) {
if (constraints.tempHeight == 1) {
pixels_diff=maxAscent[constraints.tempY] + maxDescent[constraints.tempY];
} else if (constraints.baselineResizeBehavior !== $I$(7).CONSTANT_DESCENT ) {
pixels_diff=maxAscent[constraints.tempY] + constraints.descent;
} else {
pixels_diff=constraints.ascent + maxDescent[constraints.tempY + constraints.tempHeight - 1];
}}break;
case 1024:
case 1280:
case 1536:
pixels_diff=constraints.insets.top + constraints.minHeight + constraints.ipady + maxDescent[constraints.tempY] ;
break;
case 1792:
case 2048:
case 2304:
pixels_diff=maxAscent[constraints.tempY] + constraints.minHeight + constraints.insets.bottom + constraints.ipady ;
break;
}
}if (pixels_diff == -1) {
pixels_diff=constraints.minHeight + constraints.ipady + constraints.insets.top + constraints.insets.bottom ;
}for (k=constraints.tempY; k < py; k++) pixels_diff-=r.minHeight[k];

if (pixels_diff > 0) {
weight=0.0;
for (k=constraints.tempY; k < py; k++) weight+=r.weightY[k];

for (k=constraints.tempY; weight > 0.0  && k < py ; k++) {
var wt=r.weightY[k];
var dy=(((wt * (pixels_diff)) / weight)|0);
r.minHeight[k]+=dy;
pixels_diff-=dy;
weight-=wt;
}
r.minHeight[py - 1]+=pixels_diff;
}} else if (constraints.tempHeight > i && constraints.tempHeight < nextSize ) nextSize=constraints.tempHeight;
}
}
return r;
}});

Clazz.newMeth(C$, 'calculateBaseline$java_awt_Component$java_awt_GridBagConstraints$java_awt_Dimension',  function (c, constraints, size) {
var anchor=constraints.anchor;
if (anchor == 256 || anchor == 512  || anchor == 768 ) {
var w=size.width + constraints.ipadx;
var h=size.height + constraints.ipady;
constraints.ascent=c.getBaseline$I$I(w, h);
if (constraints.ascent >= 0) {
var baseline=constraints.ascent;
constraints.descent=h - constraints.ascent + constraints.insets.bottom;
constraints.ascent+=constraints.insets.top;
constraints.baselineResizeBehavior=c.getBaselineResizeBehavior$();
constraints.centerPadding=0;
if (constraints.baselineResizeBehavior === $I$(7).CENTER_OFFSET ) {
var nextBaseline=c.getBaseline$I$I(w, h + 1);
constraints.centerOffset=baseline - (h/2|0);
if (h % 2 == 0) {
if (baseline != nextBaseline) {
constraints.centerPadding=1;
}} else if (baseline == nextBaseline) {
--constraints.centerOffset;
constraints.centerPadding=1;
}}}return true;
} else {
constraints.ascent=-1;
return false;
}}, p$1);

Clazz.newMeth(C$, 'adjustForGravity$java_awt_GridBagConstraints$java_awt_Rectangle',  function (constraints, r) {
this.AdjustForGravity$java_awt_GridBagConstraints$java_awt_Rectangle(constraints, r);
});

Clazz.newMeth(C$, 'AdjustForGravity$java_awt_GridBagConstraints$java_awt_Rectangle',  function (constraints, r) {
var diffx;
var diffy;
var cellY=r.y;
var cellHeight=r.height;
if (!this.rightToLeft) {
r.x+=constraints.insets.left;
} else {
r.x-=r.width - constraints.insets.right;
}r.width-=(constraints.insets.left + constraints.insets.right);
r.y+=constraints.insets.top;
r.height-=(constraints.insets.top + constraints.insets.bottom);
diffx=0;
if ((constraints.fill != 2 && constraints.fill != 1 ) && (r.width > (constraints.minWidth + constraints.ipadx)) ) {
diffx=r.width - (constraints.minWidth + constraints.ipadx);
r.width=constraints.minWidth + constraints.ipadx;
}diffy=0;
if ((constraints.fill != 3 && constraints.fill != 1 ) && (r.height > (constraints.minHeight + constraints.ipady)) ) {
diffy=r.height - (constraints.minHeight + constraints.ipady);
r.height=constraints.minHeight + constraints.ipady;
}switch (constraints.anchor) {
case 256:
r.x+=(diffx/2|0);
p$1.alignOnBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 512:
if (this.rightToLeft) {
r.x+=diffx;
}p$1.alignOnBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 768:
if (!this.rightToLeft) {
r.x+=diffx;
}p$1.alignOnBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 1024:
r.x+=(diffx/2|0);
p$1.alignAboveBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 1280:
if (this.rightToLeft) {
r.x+=diffx;
}p$1.alignAboveBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 1536:
if (!this.rightToLeft) {
r.x+=diffx;
}p$1.alignAboveBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 1792:
r.x+=(diffx/2|0);
p$1.alignBelowBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 2048:
if (this.rightToLeft) {
r.x+=diffx;
}p$1.alignBelowBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 2304:
if (!this.rightToLeft) {
r.x+=diffx;
}p$1.alignBelowBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I.apply(this, [constraints, r, cellY, cellHeight]);
break;
case 10:
r.x+=(diffx/2|0);
r.y+=(diffy/2|0);
break;
case 19:
case 11:
r.x+=(diffx/2|0);
break;
case 12:
r.x+=diffx;
break;
case 13:
r.x+=diffx;
r.y+=(diffy/2|0);
break;
case 14:
r.x+=diffx;
r.y+=diffy;
break;
case 20:
case 15:
r.x+=(diffx/2|0);
r.y+=diffy;
break;
case 16:
r.y+=diffy;
break;
case 17:
r.y+=(diffy/2|0);
break;
case 18:
break;
case 21:
if (this.rightToLeft) {
r.x+=diffx;
}r.y+=(diffy/2|0);
break;
case 22:
if (!this.rightToLeft) {
r.x+=diffx;
}r.y+=(diffy/2|0);
break;
case 23:
if (this.rightToLeft) {
r.x+=diffx;
}break;
case 24:
if (!this.rightToLeft) {
r.x+=diffx;
}break;
case 25:
if (this.rightToLeft) {
r.x+=diffx;
}r.y+=diffy;
break;
case 26:
if (!this.rightToLeft) {
r.x+=diffx;
}r.y+=diffy;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["illegal anchor value"]);
}
});

Clazz.newMeth(C$, 'alignOnBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I',  function (cons, r, cellY, cellHeight) {
if (cons.ascent >= 0) {
if (cons.baselineResizeBehavior === $I$(7).CONSTANT_DESCENT ) {
var maxY=cellY + cellHeight - this.layoutInfo.maxDescent[cons.tempY + cons.tempHeight - 1] + cons.descent - cons.insets.bottom;
if (!cons.isVerticallyResizable$()) {
r.y=maxY - cons.minHeight;
r.height=cons.minHeight;
} else {
r.height=maxY - cellY - cons.insets.top ;
}} else {
var baseline;
var ascent=cons.ascent;
if (this.layoutInfo.hasConstantDescent$I(cons.tempY)) {
baseline=cellHeight - this.layoutInfo.maxDescent[cons.tempY];
} else {
baseline=this.layoutInfo.maxAscent[cons.tempY];
}if (cons.baselineResizeBehavior === $I$(7).OTHER ) {
var fits=false;
ascent=this.componentAdjusting.getBaseline$I$I(r.width, r.height);
if (ascent >= 0) {
ascent+=cons.insets.top;
}if (ascent >= 0 && ascent <= baseline ) {
if (baseline + (r.height - ascent - cons.insets.top ) <= cellHeight - cons.insets.bottom) {
fits=true;
} else if (cons.isVerticallyResizable$()) {
var ascent2=this.componentAdjusting.getBaseline$I$I(r.width, cellHeight - cons.insets.bottom - baseline  + ascent);
if (ascent2 >= 0) {
ascent2+=cons.insets.top;
}if (ascent2 >= 0 && ascent2 <= ascent ) {
r.height=cellHeight - cons.insets.bottom - baseline  + ascent;
ascent=ascent2;
fits=true;
}}}if (!fits) {
ascent=cons.ascent;
r.width=cons.minWidth;
r.height=cons.minHeight;
}}r.y=cellY + baseline - ascent + cons.insets.top;
if (cons.isVerticallyResizable$()) {
switch (cons.baselineResizeBehavior) {
case $I$(7).CONSTANT_ASCENT:
r.height=Math.max(cons.minHeight, cellY + cellHeight - r.y - cons.insets.bottom);
break;
case $I$(7).CENTER_OFFSET:
{
var upper=r.y - cellY - cons.insets.top ;
var lower=cellY + cellHeight - r.y - cons.minHeight - cons.insets.bottom;
var delta=Math.min(upper, lower);
delta+=delta;
if (delta > 0 && ((cons.minHeight + cons.centerPadding + delta )/2|0) + cons.centerOffset != baseline ) {
--delta;
}r.height=cons.minHeight + delta;
r.y=cellY + baseline - ((r.height + cons.centerPadding)/2|0) - cons.centerOffset;
}break;
case $I$(7).OTHER:
break;
default:
break;
}
}}} else {
p$1.centerVertically$java_awt_GridBagConstraints$java_awt_Rectangle$I.apply(this, [cons, r, cellHeight]);
}}, p$1);

Clazz.newMeth(C$, 'alignAboveBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I',  function (cons, r, cellY, cellHeight) {
if (this.layoutInfo.hasBaseline$I(cons.tempY)) {
var maxY;
if (this.layoutInfo.hasConstantDescent$I(cons.tempY)) {
maxY=cellY + cellHeight - this.layoutInfo.maxDescent[cons.tempY];
} else {
maxY=cellY + this.layoutInfo.maxAscent[cons.tempY];
}if (cons.isVerticallyResizable$()) {
r.y=cellY + cons.insets.top;
r.height=maxY - r.y;
} else {
r.height=cons.minHeight + cons.ipady;
r.y=maxY - r.height;
}} else {
p$1.centerVertically$java_awt_GridBagConstraints$java_awt_Rectangle$I.apply(this, [cons, r, cellHeight]);
}}, p$1);

Clazz.newMeth(C$, 'alignBelowBaseline$java_awt_GridBagConstraints$java_awt_Rectangle$I$I',  function (cons, r, cellY, cellHeight) {
if (this.layoutInfo.hasBaseline$I(cons.tempY)) {
if (this.layoutInfo.hasConstantDescent$I(cons.tempY)) {
r.y=cellY + cellHeight - this.layoutInfo.maxDescent[cons.tempY];
} else {
r.y=cellY + this.layoutInfo.maxAscent[cons.tempY];
}if (cons.isVerticallyResizable$()) {
r.height=cellY + cellHeight - r.y - cons.insets.bottom;
}} else {
p$1.centerVertically$java_awt_GridBagConstraints$java_awt_Rectangle$I.apply(this, [cons, r, cellHeight]);
}}, p$1);

Clazz.newMeth(C$, 'centerVertically$java_awt_GridBagConstraints$java_awt_Rectangle$I',  function (cons, r, cellHeight) {
if (!cons.isVerticallyResizable$()) {
r.y+=Math.max(0, ((cellHeight - cons.insets.top - cons.insets.bottom - cons.minHeight - cons.ipady )/2|0));
}}, p$1);

Clazz.newMeth(C$, 'getMinSize$java_awt_Container$java_awt_GridBagLayoutInfo',  function (parent, info) {
return this.GetMinSize$java_awt_Container$java_awt_GridBagLayoutInfo(parent, info);
});

Clazz.newMeth(C$, 'GetMinSize$java_awt_Container$java_awt_GridBagLayoutInfo',  function (parent, info) {
var d=Clazz.new_($I$(4,1));
var i;
var t;
var insets=parent.getInsets$();
t=0;
for (i=0; i < info.width; i++) t+=info.minWidth[i];

d.width=t + insets.left + insets.right ;
t=0;
for (i=0; i < info.height; i++) t+=info.minHeight[i];

d.height=t + insets.top + insets.bottom ;
return d;
});

Clazz.newMeth(C$, 'arrangeGrid$java_awt_Container',  function (parent) {
p$1.arrangeGridPriv$java_awt_Container.apply(this, [parent]);
});

Clazz.newMeth(C$, 'arrangeGridPriv$java_awt_Container',  function (parent) {
var comp;
var compindex;
var constraints;
var insets=parent.getInsets$();
var n=parent.getComponentCount$();
var d;
var r=Clazz.new_($I$(8,1));
var i;
var diffw;
var diffh;
var weight;
var info;
this.rightToLeft=!parent.getComponentOrientation$().isLeftToRight$();
if (n == 0 && (this.columnWidths == null  || this.columnWidths.length == 0 )  && (this.rowHeights == null  || this.rowHeights.length == 0 ) ) {
return;
}info=this.getLayoutInfo$java_awt_Container$I(parent, 2);
d=this.getMinSize$java_awt_Container$java_awt_GridBagLayoutInfo(parent, info);
if (parent.width < d.width || parent.height < d.height ) {
info=this.getLayoutInfo$java_awt_Container$I(parent, 1);
d=this.getMinSize$java_awt_Container$java_awt_GridBagLayoutInfo(parent, info);
}this.layoutInfo=info;
r.width=d.width;
r.height=d.height;
diffw=parent.width - r.width;
if (diffw != 0) {
weight=0.0;
for (i=0; i < info.width; i++) weight+=info.weightX[i];

if (weight > 0.0 ) {
for (i=0; i < info.width; i++) {
var dx=((((diffw) * info.weightX[i]) / weight)|0);
info.minWidth[i]+=dx;
r.width+=dx;
if (info.minWidth[i] < 0) {
r.width-=info.minWidth[i];
info.minWidth[i]=0;
}}
}diffw=parent.width - r.width;
} else {
diffw=0;
}diffh=parent.height - r.height;
if (diffh != 0) {
weight=0.0;
for (i=0; i < info.height; i++) weight+=info.weightY[i];

if (weight > 0.0 ) {
for (i=0; i < info.height; i++) {
var dy=((((diffh) * info.weightY[i]) / weight)|0);
info.minHeight[i]+=dy;
r.height+=dy;
if (info.minHeight[i] < 0) {
r.height-=info.minHeight[i];
info.minHeight[i]=0;
}}
}diffh=parent.height - r.height;
} else {
diffh=0;
}info.startx=(diffw/2|0) + insets.left;
info.starty=(diffh/2|0) + insets.top;
var components=parent.getChildArray$();
for (compindex=0; compindex < n; compindex++) {
comp=components[compindex];
if (!comp.isVisible$()) {
continue;
}constraints=this.lookupConstraints$java_awt_Component(comp);
if (!this.rightToLeft) {
r.x=info.startx;
for (i=0; i < constraints.tempX; i++) r.x+=info.minWidth[i];

} else {
r.x=parent.width - ((diffw/2|0) + insets.right);
for (i=0; i < constraints.tempX; i++) r.x-=info.minWidth[i];

}r.y=info.starty;
for (i=0; i < constraints.tempY; i++) r.y+=info.minHeight[i];

r.width=0;
for (i=constraints.tempX; i < (constraints.tempX + constraints.tempWidth); i++) {
r.width+=info.minWidth[i];
}
r.height=0;
for (i=constraints.tempY; i < (constraints.tempY + constraints.tempHeight); i++) {
r.height+=info.minHeight[i];
}
this.componentAdjusting=comp;
this.adjustForGravity$java_awt_GridBagConstraints$java_awt_Rectangle(constraints, r);
if (r.x < 0) {
r.width+=r.x;
r.x=0;
}if (r.y < 0) {
r.height+=r.y;
r.y=0;
}if (r.x < 0 || r.y < 0  || (r.width <= 0)  || (r.height <= 0) ) {
comp.setBounds$I$I$I$I(0, 0, 0, 0);
} else {
if (comp.x != r.x || comp.y != r.y  || comp.width != r.width  || comp.height != r.height ) {
comp.setBounds$I$I$I$I(r.x, r.y, r.width, r.height);
}}}
}, p$1);
var $k$;
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

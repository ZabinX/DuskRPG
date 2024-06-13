(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'java.awt.Rectangle','javax.swing.SizeRequirements',['javax.swing.text.Position','.Bias']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoxView", null, 'javax.swing.text.CompositeView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['majorReqValid','minorReqValid','majorAllocValid','minorAllocValid'],'I',['majorAxis','majorSpan','minorSpan'],'O',['majorRequest','javax.swing.SizeRequirements','+minorRequest','majorOffsets','int[]','+majorSpans','+minorOffsets','+minorSpans','tempRect','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$I',  function (elem, axis) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
this.tempRect=Clazz.new_($I$(1,1));
this.majorAxis=axis;
this.majorOffsets=Clazz.array(Integer.TYPE, [0]);
this.majorSpans=Clazz.array(Integer.TYPE, [0]);
this.majorReqValid=false;
this.majorAllocValid=false;
this.minorOffsets=Clazz.array(Integer.TYPE, [0]);
this.minorSpans=Clazz.array(Integer.TYPE, [0]);
this.minorReqValid=false;
this.minorAllocValid=false;
}, 1);

Clazz.newMeth(C$, 'getAxis$',  function () {
return this.majorAxis;
});

Clazz.newMeth(C$, 'setAxis$I',  function (axis) {
var axisChanged=(axis != this.majorAxis);
this.majorAxis=axis;
if (axisChanged) {
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
}});

Clazz.newMeth(C$, 'layoutChanged$I',  function (axis) {
if (axis == this.majorAxis) {
this.majorAllocValid=false;
} else {
this.minorAllocValid=false;
}});

Clazz.newMeth(C$, 'isLayoutValid$I',  function (axis) {
if (axis == this.majorAxis) {
return this.majorAllocValid;
} else {
return this.minorAllocValid;
}});

Clazz.newMeth(C$, 'paintChild$java_awt_Graphics$java_awt_Rectangle$I',  function (g, alloc, index) {
var child=this.getView$I(index);
child.paint$java_awt_Graphics$java_awt_Shape(g, alloc);
});

Clazz.newMeth(C$, 'replace$I$I$javax_swing_text_ViewA',  function (index, length, elems) {
C$.superclazz.prototype.replace$I$I$javax_swing_text_ViewA.apply(this, [index, length, elems]);
var nInserted=(elems != null ) ? elems.length : 0;
this.majorOffsets=this.updateLayoutArray$IA$I$I(this.majorOffsets, index, nInserted);
this.majorSpans=this.updateLayoutArray$IA$I$I(this.majorSpans, index, nInserted);
this.majorReqValid=false;
this.majorAllocValid=false;
this.minorOffsets=this.updateLayoutArray$IA$I$I(this.minorOffsets, index, nInserted);
this.minorSpans=this.updateLayoutArray$IA$I$I(this.minorSpans, index, nInserted);
this.minorReqValid=false;
this.minorAllocValid=false;
});

Clazz.newMeth(C$, 'updateLayoutArray$IA$I$I',  function (oldArray, offset, nInserted) {
var n=this.getViewCount$();
var newArray=Clazz.array(Integer.TYPE, [n]);
System.arraycopy$O$I$O$I$I(oldArray, 0, newArray, 0, offset);
System.arraycopy$O$I$O$I$I(oldArray, offset, newArray, offset + nInserted, n - nInserted - offset );
return newArray;
});

Clazz.newMeth(C$, 'forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (ec, e, a, f) {
var wasValid=this.isLayoutValid$I(this.majorAxis);
C$.superclazz.prototype.forwardUpdate$javax_swing_event_DocumentEvent_ElementChange$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [ec, e, a, f]);
if (wasValid && (!this.isLayoutValid$I(this.majorAxis)) ) {
var c=this.getContainer$();
if ((a != null ) && (c != null ) ) {
var pos=e.getOffset$();
var index=this.getViewIndexAtPosition$I(pos);
var alloc=this.getInsideAllocation$java_awt_Shape(a);
if (this.majorAxis == 0) {
alloc.x+=this.majorOffsets[index];
alloc.width-=this.majorOffsets[index];
} else {
alloc.y+=this.minorOffsets[index];
alloc.height-=this.minorOffsets[index];
}c.repaint$I$I$I$I(alloc.x, alloc.y, alloc.width, alloc.height);
}}});

Clazz.newMeth(C$, 'preferenceChanged$javax_swing_text_View$Z$Z',  function (child, width, height) {
var majorChanged=(this.majorAxis == 0) ? width : height;
var minorChanged=(this.majorAxis == 0) ? height : width;
if (majorChanged) {
this.majorReqValid=false;
this.majorAllocValid=false;
}if (minorChanged) {
this.minorReqValid=false;
this.minorAllocValid=false;
}C$.superclazz.prototype.preferenceChanged$javax_swing_text_View$Z$Z.apply(this, [child, width, height]);
});

Clazz.newMeth(C$, 'getResizeWeight$I',  function (axis) {
this.checkRequests$I(axis);
if (axis == this.majorAxis) {
if ((this.majorRequest.preferred != this.majorRequest.minimum) || (this.majorRequest.preferred != this.majorRequest.maximum) ) {
return 1;
}} else {
if ((this.minorRequest.preferred != this.minorRequest.minimum) || (this.minorRequest.preferred != this.minorRequest.maximum) ) {
return 1;
}}return 0;
});

Clazz.newMeth(C$, 'setSpanOnAxis$I$F',  function (axis, span) {
if (axis == this.majorAxis) {
if (this.majorSpan != (span|0)) {
this.majorAllocValid=false;
}if (!this.majorAllocValid) {
this.majorSpan=(span|0);
this.checkRequests$I(this.majorAxis);
this.layoutMajorAxis$I$I$IA$IA(this.majorSpan, axis, this.majorOffsets, this.majorSpans);
this.majorAllocValid=true;
this.updateChildSizes$();
}} else {
if (((span|0)) != this.minorSpan) {
this.minorAllocValid=false;
}if (!this.minorAllocValid) {
this.minorSpan=(span|0);
this.checkRequests$I(axis);
this.layoutMinorAxis$I$I$IA$IA(this.minorSpan, axis, this.minorOffsets, this.minorSpans);
this.minorAllocValid=true;
this.updateChildSizes$();
}}});

Clazz.newMeth(C$, 'updateChildSizes$',  function () {
var n=this.getViewCount$();
if (this.majorAxis == 0) {
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
v.setSize$F$F(this.majorSpans[i], this.minorSpans[i]);
}
} else {
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
v.setSize$F$F(this.minorSpans[i], this.majorSpans[i]);
}
}});

Clazz.newMeth(C$, 'getSpanOnAxis$I',  function (axis) {
if (axis == this.majorAxis) {
return this.majorSpan;
} else {
return this.minorSpan;
}});

Clazz.newMeth(C$, 'setSize$F$F',  function (width, height) {
this.layout$I$I(Math.max(0, ((width - this.getLeftInset$() - this.getRightInset$() )|0)), Math.max(0, ((height - this.getTopInset$() - this.getBottomInset$() )|0)));
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
var alloc=(Clazz.instanceOf(allocation, "java.awt.Rectangle")) ? allocation : allocation.getBounds$();
var n=this.getViewCount$();
var x=alloc.x + this.getLeftInset$();
var y=alloc.y + this.getTopInset$();
var clip=g.getClipBounds$();
for (var i=0; i < n; i++) {
this.tempRect.x=x + this.getOffset$I$I(0, i);
this.tempRect.y=y + this.getOffset$I$I(1, i);
this.tempRect.width=this.getSpan$I$I(0, i);
this.tempRect.height=this.getSpan$I$I(1, i);
var trx0=this.tempRect.x;
var trx1=trx0 + this.tempRect.width;
var try0=this.tempRect.y;
var try1=try0 + this.tempRect.height;
var crx0=clip.x;
var crx1=crx0 + clip.width;
var cry0=clip.y;
var cry1=cry0 + clip.height;
if ((trx1 >= crx0) && (try1 >= cry0) && (crx1 >= trx0) && (cry1 >= try0)  ) {
this.paintChild$java_awt_Graphics$java_awt_Rectangle$I(g, this.tempRect, i);
}}
});

Clazz.newMeth(C$, 'getChildAllocation$I$java_awt_Shape',  function (index, a) {
if (a != null ) {
var ca=C$.superclazz.prototype.getChildAllocation$I$java_awt_Shape.apply(this, [index, a]);
if ((ca != null ) && (!this.isAllocationValid$()) ) {
var r=(Clazz.instanceOf(ca, "java.awt.Rectangle")) ? ca : ca.getBounds$();
if ((r.width == 0) && (r.height == 0) ) {
return null;
}}return ca;
}return null;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
if (!this.isAllocationValid$()) {
var alloc=a.getBounds$();
this.setSize$F$F(alloc.width, alloc.height);
}return C$.superclazz.prototype.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias.apply(this, [pos, a, b]);
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, bias) {
if (!this.isAllocationValid$()) {
var alloc=a.getBounds$();
this.setSize$F$F(alloc.width, alloc.height);
}return C$.superclazz.prototype.viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA.apply(this, [x, y, a, bias]);
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
this.checkRequests$I(axis);
if (axis == this.majorAxis) {
return this.majorRequest.alignment;
} else {
return this.minorRequest.alignment;
}});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
this.checkRequests$I(axis);
var marginSpan=(axis == 0) ? this.getLeftInset$() + this.getRightInset$() : this.getTopInset$() + this.getBottomInset$();
if (axis == this.majorAxis) {
return (this.majorRequest.preferred) + marginSpan;
} else {
return (this.minorRequest.preferred) + marginSpan;
}});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
this.checkRequests$I(axis);
var marginSpan=(axis == 0) ? this.getLeftInset$() + this.getRightInset$() : this.getTopInset$() + this.getBottomInset$();
if (axis == this.majorAxis) {
return (this.majorRequest.minimum) + marginSpan;
} else {
return (this.minorRequest.minimum) + marginSpan;
}});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
this.checkRequests$I(axis);
var marginSpan=(axis == 0) ? this.getLeftInset$() + this.getRightInset$() : this.getTopInset$() + this.getBottomInset$();
if (axis == this.majorAxis) {
return (this.majorRequest.maximum) + marginSpan;
} else {
return (this.minorRequest.maximum) + marginSpan;
}});

Clazz.newMeth(C$, 'isAllocationValid$',  function () {
return (this.majorAllocValid && this.minorAllocValid );
});

Clazz.newMeth(C$, 'isBefore$I$I$java_awt_Rectangle',  function (x, y, innerAlloc) {
if (this.majorAxis == 0) {
return (x < innerAlloc.x);
} else {
return (y < innerAlloc.y);
}});

Clazz.newMeth(C$, 'isAfter$I$I$java_awt_Rectangle',  function (x, y, innerAlloc) {
if (this.majorAxis == 0) {
return (x > (innerAlloc.width + innerAlloc.x));
} else {
return (y > (innerAlloc.height + innerAlloc.y));
}});

Clazz.newMeth(C$, 'getViewAtPoint$I$I$java_awt_Rectangle',  function (x, y, alloc) {
var n=this.getViewCount$();
if (this.majorAxis == 0) {
if (x < (alloc.x + this.majorOffsets[0])) {
this.childAllocation$I$java_awt_Rectangle(0, alloc);
return this.getView$I(0);
}for (var i=0; i < n; i++) {
if (x < (alloc.x + this.majorOffsets[i])) {
this.childAllocation$I$java_awt_Rectangle(i - 1, alloc);
return this.getView$I(i - 1);
}}
this.childAllocation$I$java_awt_Rectangle(n - 1, alloc);
return this.getView$I(n - 1);
} else {
if (y < (alloc.y + this.majorOffsets[0])) {
this.childAllocation$I$java_awt_Rectangle(0, alloc);
return this.getView$I(0);
}for (var i=0; i < n; i++) {
if (y < (alloc.y + this.majorOffsets[i])) {
this.childAllocation$I$java_awt_Rectangle(i - 1, alloc);
return this.getView$I(i - 1);
}}
this.childAllocation$I$java_awt_Rectangle(n - 1, alloc);
return this.getView$I(n - 1);
}});

Clazz.newMeth(C$, 'childAllocation$I$java_awt_Rectangle',  function (index, alloc) {
alloc.x+=this.getOffset$I$I(0, index);
alloc.y+=this.getOffset$I$I(1, index);
alloc.width=this.getSpan$I$I(0, index);
alloc.height=this.getSpan$I$I(1, index);
});

Clazz.newMeth(C$, 'layout$I$I',  function (width, height) {
this.setSpanOnAxis$I$F(0, width);
this.setSpanOnAxis$I$F(1, height);
});

Clazz.newMeth(C$, 'getWidth$',  function () {
var span;
if (this.majorAxis == 0) {
span=this.majorSpan;
} else {
span=this.minorSpan;
}span+=this.getLeftInset$() - this.getRightInset$();
return span;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
var span;
if (this.majorAxis == 1) {
span=this.majorSpan;
} else {
span=this.minorSpan;
}span+=this.getTopInset$() - this.getBottomInset$();
return span;
});

Clazz.newMeth(C$, 'layoutMajorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var preferred=0;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
spans[i]=(v.getPreferredSpan$I(axis)|0);
(preferred=Long.$add(preferred,(spans[i])));
}
var desiredAdjustment=Long.$sub(targetSpan,preferred);
var adjustmentFactor=0.0;
var diffs=null;
if (Long.$ne(desiredAdjustment,0 )) {
var totalSpan=0;
diffs=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
var tmp;
if (Long.$lt(desiredAdjustment,0 )) {
tmp=(v.getMinimumSpan$I(axis)|0);
diffs[i]=spans[i] - tmp;
} else {
tmp=(v.getMaximumSpan$I(axis)|0);
diffs[i]=tmp - spans[i];
}(totalSpan=Long.$add(totalSpan,(tmp)));
}
var maximumAdjustment=Long.$fval(Math.abs$J(Long.$sub(totalSpan,preferred)));
adjustmentFactor=desiredAdjustment / maximumAdjustment;
adjustmentFactor=Math.min(adjustmentFactor, 1.0);
adjustmentFactor=Math.max(adjustmentFactor, -1.0);
}var totalOffset=0;
for (var i=0; i < n; i++) {
offsets[i]=totalOffset;
if (Long.$ne(desiredAdjustment,0 )) {
var adjF=adjustmentFactor * diffs[i];
spans[i]+=Math.round(adjF);
}totalOffset=Long.$ival(Math.min$J$J(Long.$add(totalOffset,spans[i]), 2147483647));
}
});

Clazz.newMeth(C$, 'layoutMinorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
var max=(v.getMaximumSpan$I(axis)|0);
if (max < targetSpan) {
var align=v.getAlignment$I(axis);
offsets[i]=(((targetSpan - max) * align)|0);
spans[i]=max;
} else {
var min=(v.getMinimumSpan$I(axis)|0);
offsets[i]=0;
spans[i]=Math.max(min, targetSpan);
}}
});

Clazz.newMeth(C$, 'calculateMajorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var min=0;
var pref=0;
var max=0;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
min+=v.getMinimumSpan$I(axis);
pref+=v.getPreferredSpan$I(axis);
max+=v.getMaximumSpan$I(axis);
}
if (r == null ) {
r=Clazz.new_($I$(2,1));
}r.alignment=0.5;
r.minimum=(min|0);
r.preferred=(pref|0);
r.maximum=(max|0);
return r;
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var min=0;
var pref=0;
var max=2147483647;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
min=Math.max((v.getMinimumSpan$I(axis)|0), min);
pref=Math.max$J$J((v.getPreferredSpan$I(axis)|0), pref);
max=Math.max((v.getMaximumSpan$I(axis)|0), max);
}
if (r == null ) {
r=Clazz.new_($I$(2,1));
r.alignment=0.5;
}r.preferred=Long.$ival(pref);
r.minimum=min;
r.maximum=max;
return r;
});

Clazz.newMeth(C$, 'checkRequests$I',  function (axis) {
if ((axis != 0) && (axis != 1) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}if (axis == this.majorAxis) {
if (!this.majorReqValid) {
this.majorRequest=this.calculateMajorAxisRequirements$I$javax_swing_SizeRequirements(axis, this.majorRequest);
this.majorReqValid=true;
}} else if (!this.minorReqValid) {
this.minorRequest=this.calculateMinorAxisRequirements$I$javax_swing_SizeRequirements(axis, this.minorRequest);
this.minorReqValid=true;
}});

Clazz.newMeth(C$, 'baselineLayout$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var totalAscent=((targetSpan * this.getAlignment$I(axis))|0);
var totalDescent=targetSpan - totalAscent;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
var align=v.getAlignment$I(axis);
var viewSpan;
if (v.getResizeWeight$I(axis) > 0) {
var minSpan=v.getMinimumSpan$I(axis);
var maxSpan=v.getMaximumSpan$I(axis);
if (align == 0.0 ) {
viewSpan=Math.max(Math.min(maxSpan, totalDescent), minSpan);
} else if (align == 1.0 ) {
viewSpan=Math.max(Math.min(maxSpan, totalAscent), minSpan);
} else {
var fitSpan=Math.min(totalAscent / align, totalDescent / (1.0 - align));
viewSpan=Math.max(Math.min(maxSpan, fitSpan), minSpan);
}} else {
viewSpan=v.getPreferredSpan$I(axis);
}offsets[i]=totalAscent - ((viewSpan * align)|0);
spans[i]=(viewSpan|0);
}
});

Clazz.newMeth(C$, 'baselineRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var totalAscent=Clazz.new_($I$(2,1));
var totalDescent=Clazz.new_($I$(2,1));
if (r == null ) {
r=Clazz.new_($I$(2,1));
}r.alignment=0.5;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
var align=v.getAlignment$I(axis);
var span;
var ascent;
var descent;
span=v.getPreferredSpan$I(axis);
ascent=((align * span)|0);
descent=((span - ascent)|0);
totalAscent.preferred=Math.max(ascent, totalAscent.preferred);
totalDescent.preferred=Math.max(descent, totalDescent.preferred);
if (v.getResizeWeight$I(axis) > 0) {
span=v.getMinimumSpan$I(axis);
ascent=((align * span)|0);
descent=((span - ascent)|0);
totalAscent.minimum=Math.max(ascent, totalAscent.minimum);
totalDescent.minimum=Math.max(descent, totalDescent.minimum);
span=v.getMaximumSpan$I(axis);
ascent=((align * span)|0);
descent=((span - ascent)|0);
totalAscent.maximum=Math.max(ascent, totalAscent.maximum);
totalDescent.maximum=Math.max(descent, totalDescent.maximum);
} else {
totalAscent.minimum=Math.max(ascent, totalAscent.minimum);
totalDescent.minimum=Math.max(descent, totalDescent.minimum);
totalAscent.maximum=Math.max(ascent, totalAscent.maximum);
totalDescent.maximum=Math.max(descent, totalDescent.maximum);
}}
r.preferred=Long.$ival(Math.min$J$J(Long.$add(totalAscent.preferred,totalDescent.preferred), 2147483647));
if (r.preferred > 0) {
r.alignment=totalAscent.preferred / r.preferred;
}if (r.alignment == 0.0 ) {
r.minimum=totalDescent.minimum;
r.maximum=totalDescent.maximum;
} else if (r.alignment == 1.0 ) {
r.minimum=totalAscent.minimum;
r.maximum=totalAscent.maximum;
} else {
r.minimum=Math.round(Math.max(totalAscent.minimum / r.alignment, totalDescent.minimum / (1.0 - r.alignment)));
r.maximum=Math.round(Math.min(totalAscent.maximum / r.alignment, totalDescent.maximum / (1.0 - r.alignment)));
}return r;
});

Clazz.newMeth(C$, 'getOffset$I$I',  function (axis, childIndex) {
var offsets=(axis == this.majorAxis) ? this.majorOffsets : this.minorOffsets;
return offsets[childIndex];
});

Clazz.newMeth(C$, 'getSpan$I$I',  function (axis, childIndex) {
var spans=(axis == this.majorAxis) ? this.majorSpans : this.minorSpans;
return spans[childIndex];
});

Clazz.newMeth(C$, 'flipEastAndWestAtEnds$I$javax_swing_text_Position_Bias',  function (position, bias) {
if (this.majorAxis == 1) {
var testPos=(bias === $I$(3).Backward ) ? Math.max(0, position - 1) : position;
var index=this.getViewIndexAtPosition$I(testPos);
if (index != -1) {
var v=this.getView$I(index);
if (v != null  && Clazz.instanceOf(v, "javax.swing.text.CompositeView") ) {
return (v).flipEastAndWestAtEnds$I$javax_swing_text_Position_Bias(position, bias);
}}}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'java.util.Vector','javax.swing.text.View',['javax.swing.text.Position','.Bias'],'javax.swing.text.LabelView',['javax.swing.text.FlowView','.FlowStrategy'],['javax.swing.text.FlowView','.LogicalView'],'javax.swing.SizeRequirements']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FlowView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.BoxView');
C$.$classes$=[['FlowStrategy',9],['LogicalView',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['layoutSpan'],'O',['layoutPool','javax.swing.text.View','strategy','javax.swing.text.FlowView.FlowStrategy']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$I',  function (elem, axis) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, axis]);C$.$init$.apply(this);
this.layoutSpan=2147483647;
this.strategy=Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'getFlowAxis$',  function () {
if (this.getAxis$() == 1) {
return 0;
}return 1;
});

Clazz.newMeth(C$, 'getFlowSpan$I',  function (index) {
return this.layoutSpan;
});

Clazz.newMeth(C$, 'getFlowStart$I',  function (index) {
return 0;
});

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_ViewFactory',  function (f) {
if (this.layoutPool == null ) {
this.layoutPool=Clazz.new_([this.getElement$()],$I$(6,1).c$$javax_swing_text_Element);
}this.layoutPool.setParent$javax_swing_text_View(this);
this.strategy.insertUpdate$javax_swing_text_FlowView$javax_swing_event_DocumentEvent$java_awt_Rectangle(this, null, null);
});

Clazz.newMeth(C$, 'getViewIndexAtPosition$I',  function (pos) {
if (pos >= this.getStartOffset$() && (pos < this.getEndOffset$()) ) {
for (var counter=0; counter < this.getViewCount$(); counter++) {
var v=this.getView$I(counter);
if (pos >= v.getStartOffset$() && pos < v.getEndOffset$() ) {
return counter;
}}
}return -1;
});

Clazz.newMeth(C$, 'layout$I$I',  function (width, height) {
var faxis=this.getFlowAxis$();
var newSpan;
if (faxis == 0) {
newSpan=width;
} else {
newSpan=height;
}if (this.layoutSpan != newSpan) {
this.layoutChanged$I(faxis);
this.layoutChanged$I(this.getAxis$());
this.layoutSpan=newSpan;
}if (!this.isLayoutValid$I(faxis)) {
var heightAxis=this.getAxis$();
var oldFlowHeight=((heightAxis == 0) ? this.getWidth$() : this.getHeight$());
this.strategy.layout$javax_swing_text_FlowView(this);
var newFlowHeight=(this.getPreferredSpan$I(heightAxis)|0);
if (oldFlowHeight != newFlowHeight) {
var p=this.getParent$();
if (p != null ) {
p.preferenceChanged$javax_swing_text_View$Z$Z(this, (heightAxis == 0), (heightAxis == 1));
}var host=this.getContainer$();
if (host != null ) {
(host).秘repaint$();
}}}C$.superclazz.prototype.layout$I$I.apply(this, [width, height]);
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
if (r == null ) {
r=Clazz.new_($I$(7,1));
}var pref=this.layoutPool.getPreferredSpan$I(axis);
var min=this.layoutPool.getMinimumSpan$I(axis);
r.minimum=(min|0);
r.preferred=Math.max(r.minimum, (pref|0));
r.maximum=2147483647;
r.alignment=0.5;
return r;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
this.layoutPool.insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(changes, a, f);
this.strategy.insertUpdate$javax_swing_text_FlowView$javax_swing_event_DocumentEvent$java_awt_Rectangle(this, changes, this.getInsideAllocation$java_awt_Shape(a));
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
this.layoutPool.removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(changes, a, f);
this.strategy.removeUpdate$javax_swing_text_FlowView$javax_swing_event_DocumentEvent$java_awt_Rectangle(this, changes, this.getInsideAllocation$java_awt_Shape(a));
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
this.layoutPool.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(changes, a, f);
this.strategy.changedUpdate$javax_swing_text_FlowView$javax_swing_event_DocumentEvent$java_awt_Rectangle(this, changes, this.getInsideAllocation$java_awt_Shape(a));
});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
if (parent == null  && this.layoutPool != null  ) {
this.layoutPool.setParent$javax_swing_text_View(null);
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.FlowView, "FlowStrategy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.damageStart=2147483647;
},1);

C$.$fields$=[['I',['damageStart'],'O',['viewBuffer','java.util.Vector']]]

Clazz.newMeth(C$, 'addDamage$javax_swing_text_FlowView$I',  function (fv, offset) {
if (offset >= fv.getStartOffset$() && offset < fv.getEndOffset$() ) {
this.damageStart=Math.min(this.damageStart, offset);
}});

Clazz.newMeth(C$, 'unsetDamage$',  function () {
this.damageStart=2147483647;
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_text_FlowView$javax_swing_event_DocumentEvent$java_awt_Rectangle',  function (fv, e, alloc) {
if (e != null ) {
this.addDamage$javax_swing_text_FlowView$I(fv, e.getOffset$());
}if (alloc != null ) {
var host=fv.getContainer$();
if (host != null ) {
host.repaint$I$I$I$I(alloc.x, alloc.y, alloc.width, alloc.height);
}} else {
fv.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
}});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_text_FlowView$javax_swing_event_DocumentEvent$java_awt_Rectangle',  function (fv, e, alloc) {
this.addDamage$javax_swing_text_FlowView$I(fv, e.getOffset$());
if (alloc != null ) {
var host=fv.getContainer$();
if (host != null ) {
host.repaint$I$I$I$I(alloc.x, alloc.y, alloc.width, alloc.height);
}} else {
fv.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_text_FlowView$javax_swing_event_DocumentEvent$java_awt_Rectangle',  function (fv, e, alloc) {
this.addDamage$javax_swing_text_FlowView$I(fv, e.getOffset$());
if (alloc != null ) {
var host=fv.getContainer$();
if (host != null ) {
host.repaint$I$I$I$I(alloc.x, alloc.y, alloc.width, alloc.height);
}} else {
fv.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
}});

Clazz.newMeth(C$, 'getLogicalView$javax_swing_text_FlowView',  function (fv) {
return fv.layoutPool;
});

Clazz.newMeth(C$, 'layout$javax_swing_text_FlowView',  function (fv) {
var pool=this.getLogicalView$javax_swing_text_FlowView(fv);
var rowIndex;
var p0;
var p1=fv.getEndOffset$();
if (fv.majorAllocValid) {
if (this.damageStart == 2147483647) {
return;
}while ((rowIndex=fv.getViewIndexAtPosition$I(this.damageStart)) < 0){
--this.damageStart;
}
if (rowIndex > 0) {
--rowIndex;
}p0=fv.getView$I(rowIndex).getStartOffset$();
} else {
rowIndex=0;
p0=fv.getStartOffset$();
}this.reparentViews$javax_swing_text_View$I(pool, p0);
this.viewBuffer=Clazz.new_($I$(1,1).c$$I$I,[10, 10]);
var rowCount=fv.getViewCount$();
while (p0 < p1){
var row;
if (rowIndex >= rowCount) {
row=fv.createRow$();
fv.append$javax_swing_text_View(row);
} else {
row=fv.getView$I(rowIndex);
}p0=this.layoutRow$javax_swing_text_FlowView$I$I(fv, rowIndex, p0);
++rowIndex;
}
this.viewBuffer=null;
if (rowIndex < rowCount) {
fv.replace$I$I$javax_swing_text_ViewA(rowIndex, rowCount - rowIndex, null);
}this.unsetDamage$();
});

Clazz.newMeth(C$, 'layoutRow$javax_swing_text_FlowView$I$I',  function (fv, rowIndex, pos) {
var row=fv.getView$I(rowIndex);
var x=fv.getFlowStart$I(rowIndex);
var spanLeft=fv.getFlowSpan$I(rowIndex);
var end=fv.getEndOffset$();
var te=(Clazz.instanceOf(fv, "javax.swing.text.TabExpander")) ? fv : null;
var flowAxis=fv.getFlowAxis$();
var breakWeight=0;
var breakX=0.0;
var breakSpan=0.0;
var breakIndex=-1;
var n=0;
this.viewBuffer.clear$();
while (pos < end && spanLeft >= 0  ){
var v=this.createView$javax_swing_text_FlowView$I$I$I(fv, pos, (spanLeft|0), rowIndex);
if (v == null ) {
break;
}var bw=v.getBreakWeight$I$F$F(flowAxis, x, spanLeft);
if (bw >= 3000) {
var w=v.breakView$I$I$F$F(flowAxis, pos, x, spanLeft);
if (w != null ) {
this.viewBuffer.add$O(w);
} else if (n == 0) {
this.viewBuffer.add$O(v);
}break;
} else if (bw >= breakWeight && bw > 0 ) {
breakWeight=bw;
breakX=x;
breakSpan=spanLeft;
breakIndex=n;
}var chunkSpan;
if (flowAxis == 0 && Clazz.instanceOf(v, "javax.swing.text.TabableView") ) {
chunkSpan=(v).getTabbedSpan$F$javax_swing_text_TabExpander(x, te);
} else {
chunkSpan=v.getPreferredSpan$I(flowAxis);
}if (chunkSpan > spanLeft  && breakIndex >= 0 ) {
if (breakIndex < n) {
v=this.viewBuffer.get$I(breakIndex);
}for (var i=n - 1; i >= breakIndex; i--) {
this.viewBuffer.remove$I(i);
}
v=v.breakView$I$I$F$F(flowAxis, v.getStartOffset$(), breakX, breakSpan);
}spanLeft-=chunkSpan;
x+=chunkSpan;
this.viewBuffer.add$O(v);
pos=v.getEndOffset$();
++n;
}
var views=Clazz.array($I$(2), [this.viewBuffer.size$()]);
this.viewBuffer.toArray$OA(views);
row.replace$I$I$javax_swing_text_ViewA(0, row.getViewCount$(), views);
return (views.length > 0 ? row.getEndOffset$() : pos);
});

Clazz.newMeth(C$, 'adjustRow$javax_swing_text_FlowView$I$I$I',  function (fv, rowIndex, desiredSpan, x) {
var flowAxis=fv.getFlowAxis$();
var r=fv.getView$I(rowIndex);
var n=r.getViewCount$();
var span=0;
var bestWeight=0;
var bestSpan=0;
var bestIndex=-1;
var v;
for (var i=0; i < n; i++) {
v=r.getView$I(i);
var spanLeft=desiredSpan - span;
var w=v.getBreakWeight$I$F$F(flowAxis, x + span, spanLeft);
if ((w >= bestWeight) && (w > 0) ) {
bestWeight=w;
bestIndex=i;
bestSpan=span;
if (w >= 3000) {
break;
}}span=(span+(v.getPreferredSpan$I(flowAxis))|0);
}
if (bestIndex < 0) {
return;
}var spanLeft=desiredSpan - bestSpan;
v=r.getView$I(bestIndex);
v=v.breakView$I$I$F$F(flowAxis, v.getStartOffset$(), x + bestSpan, spanLeft);
var va=Clazz.array($I$(2), [1]);
va[0]=v;
var lv=this.getLogicalView$javax_swing_text_FlowView(fv);
var p0=r.getView$I(bestIndex).getStartOffset$();
var p1=r.getEndOffset$();
for (var i=0; i < lv.getViewCount$(); i++) {
var tmpView=lv.getView$I(i);
if (tmpView.getEndOffset$() > p1) {
break;
}if (tmpView.getStartOffset$() >= p0) {
tmpView.setParent$javax_swing_text_View(lv);
}}
r.replace$I$I$javax_swing_text_ViewA(bestIndex, n - bestIndex, va);
});

Clazz.newMeth(C$, 'reparentViews$javax_swing_text_View$I',  function (pool, startPos) {
var n=pool.getViewIndex$I$javax_swing_text_Position_Bias(startPos, $I$(3).Forward);
if (n >= 0) {
for (var i=n; i < pool.getViewCount$(); i++) {
pool.getView$I(i).setParent$javax_swing_text_View(pool);
}
}});

Clazz.newMeth(C$, 'createView$javax_swing_text_FlowView$I$I$I',  function (fv, startOffset, spanLeft, rowIndex) {
var lv=this.getLogicalView$javax_swing_text_FlowView(fv);
var childIndex=lv.getViewIndex$I$javax_swing_text_Position_Bias(startOffset, $I$(3).Forward);
var v=lv.getView$I(childIndex);
if (startOffset == v.getStartOffset$()) {
return v;
}v=v.createFragment$I$I(startOffset, v.getEndOffset$());
return v;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FlowView, "LogicalView", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.CompositeView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getViewIndexAtPosition$I',  function (pos) {
var elem=this.getElement$();
if (elem.isLeaf$()) {
return 0;
}return C$.superclazz.prototype.getViewIndexAtPosition$I.apply(this, [pos]);
});

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_ViewFactory',  function (f) {
var elem=this.getElement$();
if (elem.isLeaf$()) {
var v=Clazz.new_($I$(4,1).c$$javax_swing_text_Element,[elem]);
this.append$javax_swing_text_View(v);
} else {
C$.superclazz.prototype.loadChildren$javax_swing_text_ViewFactory.apply(this, [f]);
}});

Clazz.newMeth(C$, 'getAttributes$',  function () {
var p=this.getParent$();
return (p != null ) ? p.getAttributes$() : null;
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
var maxpref=0;
var pref=0;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
pref+=v.getPreferredSpan$I(axis);
if (v.getBreakWeight$I$F$F(axis, 0, 2147483647) >= 3000) {
maxpref=Math.max(maxpref, pref);
pref=0;
}}
maxpref=Math.max(maxpref, pref);
return maxpref;
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
var maxmin=0;
var min=0;
var nowrap=false;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
if (v.getBreakWeight$I$F$F(axis, 0, 2147483647) == 0) {
min+=v.getPreferredSpan$I(axis);
nowrap=true;
} else if (nowrap) {
maxmin=Math.max(min, maxmin);
nowrap=false;
min=0;
}if (Clazz.instanceOf(v, "javax.swing.text.ComponentView")) {
maxmin=Math.max(maxmin, v.getMinimumSpan$I(axis));
}}
maxmin=Math.max(maxmin, min);
return maxmin;
});

Clazz.newMeth(C$, 'forwardUpdateToView$javax_swing_text_View$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (v, e, a, f) {
var parent=v.getParent$();
v.setParent$javax_swing_text_View(this);
C$.superclazz.prototype.forwardUpdateToView$javax_swing_text_View$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [v, e, a, f]);
v.setParent$javax_swing_text_View(parent);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, allocation) {
});

Clazz.newMeth(C$, 'isBefore$I$I$java_awt_Rectangle',  function (x, y, alloc) {
return false;
});

Clazz.newMeth(C$, 'isAfter$I$I$java_awt_Rectangle',  function (x, y, alloc) {
return false;
});

Clazz.newMeth(C$, 'getViewAtPoint$I$I$java_awt_Rectangle',  function (x, y, alloc) {
return null;
});

Clazz.newMeth(C$, 'childAllocation$I$java_awt_Rectangle',  function (index, a) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

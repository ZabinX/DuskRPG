(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'javax.swing.text.View','java.awt.Rectangle',['javax.swing.text.Position','.Bias'],'javax.swing.text.StyleConstants','javax.swing.text.Utilities']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CompositeView", null, 'javax.swing.text.View');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nchildren'],'H',['left','right','top','bottom'],'O',['+children','childAlloc','java.awt.Rectangle']]
,['O',['ZERO','javax.swing.text.View[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
this.children=Clazz.array($I$(1), [1]);
this.nchildren=0;
this.childAlloc=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_ViewFactory',  function (f) {
if (f == null ) {
return;
}var e=this.getElement$();
var n=e.getElementCount$();
if (n > 0) {
var added=Clazz.array($I$(1), [n]);
for (var i=0; i < n; i++) {
added[i]=f.create$javax_swing_text_Element(e.getElement$I(i));
}
this.replace$I$I$javax_swing_text_ViewA(0, 0, added);
}});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View',  function (parent) {
C$.superclazz.prototype.setParent$javax_swing_text_View.apply(this, [parent]);
if ((parent != null ) && (this.nchildren == 0) ) {
var f=this.getViewFactory$();
this.loadChildren$javax_swing_text_ViewFactory(f);
}});

Clazz.newMeth(C$, 'getViewCount$',  function () {
return this.nchildren;
});

Clazz.newMeth(C$, 'getView$I',  function (n) {
return this.children[n];
});

Clazz.newMeth(C$, 'replace$I$I$javax_swing_text_ViewA',  function (offset, length, views) {
if (views == null ) {
views=C$.ZERO;
}for (var i=offset; i < offset + length; i++) {
if (this.children[i].getParent$() === this ) {
this.children[i].setParent$javax_swing_text_View(null);
}this.children[i]=null;
}
var delta=views.length - length;
var src=offset + length;
var nmove=this.nchildren - src;
var dest=src + delta;
if ((this.nchildren + delta) >= this.children.length) {
var newLength=Math.max(2 * this.children.length, this.nchildren + delta);
var newChildren=Clazz.array($I$(1), [newLength]);
System.arraycopy$O$I$O$I$I(this.children, 0, newChildren, 0, offset);
System.arraycopy$O$I$O$I$I(views, 0, newChildren, offset, views.length);
System.arraycopy$O$I$O$I$I(this.children, src, newChildren, dest, nmove);
this.children=newChildren;
} else {
System.arraycopy$O$I$O$I$I(this.children, src, this.children, dest, nmove);
System.arraycopy$O$I$O$I$I(views, 0, this.children, offset, views.length);
}this.nchildren=this.nchildren + delta;
for (var i=0; i < views.length; i++) {
views[i].setParent$javax_swing_text_View(this);
}
});

Clazz.newMeth(C$, 'getChildAllocation$I$java_awt_Shape',  function (index, a) {
var alloc=this.getInsideAllocation$java_awt_Shape(a);
this.childAllocation$I$java_awt_Rectangle(index, alloc);
return alloc;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var isBackward=(b === $I$(3).Backward );
var testPos=(isBackward) ? Math.max(0, pos - 1) : pos;
if (isBackward && testPos < this.getStartOffset$() ) {
return null;
}var vIndex=this.getViewIndexAtPosition$I(testPos);
if ((vIndex != -1) && (vIndex < this.getViewCount$()) ) {
var v=this.getView$I(vIndex);
if (v != null  && testPos >= v.getStartOffset$()  && testPos < v.getEndOffset$() ) {
var childShape=this.getChildAllocation$I$java_awt_Shape(vIndex, a);
if (childShape == null ) {
return null;
}var retShape=v.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(pos, childShape, b);
if (retShape == null  && v.getEndOffset$() == pos ) {
if (++vIndex < this.getViewCount$()) {
v=this.getView$I(vIndex);
retShape=v.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(pos, this.getChildAllocation$I$java_awt_Shape(vIndex, a), b);
}}return retShape;
}}throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Position not represented by view", pos]);
});

Clazz.newMeth(C$, 'modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape',  function (p0, b0, p1, b1, a) {
if (p0 == this.getStartOffset$() && p1 == this.getEndOffset$() ) {
return a;
}var alloc=this.getInsideAllocation$java_awt_Shape(a);
var r0=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[alloc]);
var v0=this.getViewAtPosition$I$java_awt_Rectangle((b0 === $I$(3).Backward ) ? Math.max(0, p0 - 1) : p0, r0);
var r1=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[alloc]);
var v1=this.getViewAtPosition$I$java_awt_Rectangle((b1 === $I$(3).Backward ) ? Math.max(0, p1 - 1) : p1, r1);
if (v0 === v1 ) {
if (v0 == null ) {
return a;
}return v0.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(p0, b0, p1, b1, r0);
}var viewCount=this.getViewCount$();
var counter=0;
while (counter < viewCount){
var v;
if ((v=this.getView$I(counter)) === v0  || v === v1  ) {
var endView;
var retRect;
var tempRect=Clazz.new_($I$(2,1));
if (v === v0 ) {
retRect=v0.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(p0, b0, v0.getEndOffset$(), $I$(3).Backward, r0).getBounds$();
endView=v1;
} else {
retRect=v1.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(v1.getStartOffset$(), $I$(3).Forward, p1, b1, r1).getBounds$();
endView=v0;
}while (++counter < viewCount && (v=this.getView$I(counter)) !== endView  ){
tempRect.setBounds$java_awt_Rectangle(alloc);
this.childAllocation$I$java_awt_Rectangle(counter, tempRect);
retRect.add$java_awt_Rectangle(tempRect);
}
if (endView != null ) {
var endShape;
if (endView === v1 ) {
endShape=v1.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(v1.getStartOffset$(), $I$(3).Forward, p1, b1, r1);
} else {
endShape=v0.modelToView$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_Bias$java_awt_Shape(p0, b0, v0.getEndOffset$(), $I$(3).Backward, r0);
}if (Clazz.instanceOf(endShape, "java.awt.Rectangle")) {
retRect.add$java_awt_Rectangle(endShape);
} else {
retRect.add$java_awt_Rectangle(endShape.getBounds$());
}}return retRect;
}++counter;
}
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Position not represented by view", p0]);
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, bias) {
var alloc=this.getInsideAllocation$java_awt_Shape(a);
if (this.isBefore$I$I$java_awt_Rectangle((x|0), (y|0), alloc)) {
var retValue=-1;
try {
retValue=this.getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(-1, $I$(3).Forward, a, 3, bias);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.swing.text.BadLocationException")){
var ble = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var iae = e$$;
{
}
} else {
throw e$$;
}
}
if (retValue == -1) {
retValue=this.getStartOffset$();
bias[0]=$I$(3).Forward;
}return retValue;
} else if (this.isAfter$I$I$java_awt_Rectangle((x|0), (y|0), alloc)) {
var retValue=-1;
try {
retValue=this.getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(-1, $I$(3).Forward, a, 7, bias);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.swing.text.BadLocationException")){
var ble = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var iae = e$$;
{
}
} else {
throw e$$;
}
}
if (retValue == -1) {
retValue=this.getEndOffset$() - 1;
bias[0]=$I$(3).Forward;
}return retValue;
} else {
var v=this.getViewAtPoint$I$I$java_awt_Rectangle((x|0), (y|0), alloc);
if (v != null ) {
return v.viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA(x, y, alloc, bias);
}}return -1;
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (pos, b, a, direction, biasRet) {
switch (direction) {
case 1:
return this.getNextNorthSouthVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(pos, b, a, direction, biasRet);
case 5:
return this.getNextNorthSouthVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(pos, b, a, direction, biasRet);
case 3:
return this.getNextEastWestVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(pos, b, a, direction, biasRet);
case 7:
return this.getNextEastWestVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(pos, b, a, direction, biasRet);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad direction: " + direction]);
}
});

Clazz.newMeth(C$, 'getViewIndex$I$javax_swing_text_Position_Bias',  function (pos, b) {
if (b === $I$(3).Backward ) {
pos-=1;
}if ((pos >= this.getStartOffset$()) && (pos < this.getEndOffset$()) ) {
return this.getViewIndexAtPosition$I(pos);
}return -1;
});

Clazz.newMeth(C$, 'getViewAtPosition$I$java_awt_Rectangle',  function (pos, a) {
var index=this.getViewIndexAtPosition$I(pos);
if ((index >= 0) && (index < this.getViewCount$()) ) {
var v=this.getView$I(index);
if (a != null ) {
this.childAllocation$I$java_awt_Rectangle(index, a);
}return v;
}return null;
});

Clazz.newMeth(C$, 'getViewIndexAtPosition$I',  function (pos) {
var elem=this.getElement$();
return elem.getElementIndex$I(pos);
});

Clazz.newMeth(C$, 'getInsideAllocation$java_awt_Shape',  function (a) {
if (a != null ) {
var alloc;
if (Clazz.instanceOf(a, "java.awt.Rectangle")) {
alloc=a;
} else {
alloc=a.getBounds$();
}this.childAlloc.setBounds$java_awt_Rectangle(alloc);
this.childAlloc.x+=this.getLeftInset$();
this.childAlloc.y+=this.getTopInset$();
this.childAlloc.width-=this.getLeftInset$() + this.getRightInset$();
this.childAlloc.height-=this.getTopInset$() + this.getBottomInset$();
return this.childAlloc;
}return null;
});

Clazz.newMeth(C$, 'setParagraphInsets$javax_swing_text_AttributeSet',  function (attr) {
this.top=($s$[0] = $I$(4).getSpaceAbove$javax_swing_text_AttributeSet(attr), $s$[0]);
this.left=($s$[0] = $I$(4).getLeftIndent$javax_swing_text_AttributeSet(attr), $s$[0]);
this.bottom=($s$[0] = $I$(4).getSpaceBelow$javax_swing_text_AttributeSet(attr), $s$[0]);
this.right=($s$[0] = $I$(4).getRightIndent$javax_swing_text_AttributeSet(attr), $s$[0]);
});

Clazz.newMeth(C$, 'setInsets$H$H$H$H',  function (top, left, bottom, right) {
this.top=top;
this.left=left;
this.right=right;
this.bottom=bottom;
});

Clazz.newMeth(C$, 'getLeftInset$',  function () {
return this.left;
});

Clazz.newMeth(C$, 'getRightInset$',  function () {
return this.right;
});

Clazz.newMeth(C$, 'getTopInset$',  function () {
return this.top;
});

Clazz.newMeth(C$, 'getBottomInset$',  function () {
return this.bottom;
});

Clazz.newMeth(C$, 'getNextNorthSouthVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (pos, b, a, direction, biasRet) {
return $I$(5).getNextVisualPositionFrom$javax_swing_text_View$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(this, pos, b, a, direction, biasRet);
});

Clazz.newMeth(C$, 'getNextEastWestVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (pos, b, a, direction, biasRet) {
return $I$(5).getNextVisualPositionFrom$javax_swing_text_View$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(this, pos, b, a, direction, biasRet);
});

Clazz.newMeth(C$, 'flipEastAndWestAtEnds$I$javax_swing_text_Position_Bias',  function (position, bias) {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.ZERO=Clazz.array($I$(1), [0]);
};
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

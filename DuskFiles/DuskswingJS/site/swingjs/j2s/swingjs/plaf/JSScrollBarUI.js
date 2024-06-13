(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'java.awt.Color','java.awt.Dimension','swingjs.api.js.DOMNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSScrollBarUI", null, 'swingjs.plaf.JSSliderUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isInvisible']]]

Clazz.newMeth(C$, 'setScrollPaneUI$swingjs_plaf_JSScrollPaneUI',  function (ui) {
this.myScrollPaneUI=ui;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isScrollBar=true;
this.allowPaintedBackground=false;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
C$.superclazz.prototype.updateDOMNode$.apply(this, []);
if (this.isAWT && !this.jc.isBackgroundSet$() ) {
this.jc.setBackground$java_awt_Color($I$(1).LIGHT_GRAY);
}return this.domNode;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
C$.superclazz.prototype.stateChanged$javax_swing_event_ChangeEvent.apply(this, [e]);
this.setScrollBarExtentAndCSS$();
});

Clazz.newMeth(C$, 'setValue$I',  function (val) {
if (!this.isAWT) {
C$.superclazz.prototype.setValue$I.apply(this, [val]);
return;
}var sb=this.jc;
if (val != sb.getValue$()) (this.jc).setValueFromUI$I(val);
});

Clazz.newMeth(C$, 'setValueIsAdjusting$Z',  function (b) {
if (!this.isAWT) {
C$.superclazz.prototype.setValueIsAdjusting$Z.apply(this, [b]);
return;
}(this.jc).setValueIsAdjustingFromUI$Z(b);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
var wh=(this.myScrollPaneUI == null  ? 15 : this.myScrollPaneUI.scrollBarUIDisabled ? 0 : 13);
return Clazz.new_($I$(2,1).c$$I$I,[wh, wh]);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
this.isInvisible=(this.myScrollPaneUI != null  && this.myScrollPaneUI.scrollBarUIDisabled );
b=!!(b&(!this.isInvisible));
$I$(3,"setVisible",[this.getOuterNode$(), b]);
$I$(3).setVisible(this.jqSlider, b);
});

Clazz.newMeth(C$, 'setScrollBarExtentAndCSS$',  function () {
var left;
var top;
var thickness;
var transform;
var leftt;
var sb=this.jc;
var extent=sb.getVisibleAmount$();
this.setSliderAttr$S$F("visibleAmount", extent);
var isVertical=(this.orientation === "vertical" );
if (this.myScrollPaneUI == null ) {
var d=(isVertical ? sb.getWidth$() : sb.getHeight$());
var t=(Math.min(d * 0.8, 12)|0);
left=top="50%";
thickness=(new Double(Math.floor((t/2|0)) * 2 - 1).toString()) + "px";
leftt="50%";
transform="translate(" + (isVertical ? "X" : "Y") + ")" ;
} else {
left="0px";
leftt="0px";
top=(this.isAWT ? "4px" : "0px");
thickness="12px";
transform=null;
}if (isVertical) {
$I$(3).setStyles(this.sliderTrack, ["transform", transform, "left", left, "width", thickness]);
$I$(3).setStyles(this.sliderHandle, ["border", "1px solid blue", "box-sizing", "border-box", "left", leftt, "margin-bottom", "0px", "width", thickness]);
} else {
$I$(3).setStyles(this.sliderTrack, ["top", top, "height", thickness]);
$I$(3).setStyles(this.sliderHandle, ["border", "1px solid blue", "box-sizing", "border-box", "top", leftt, "margin-left", "0px", "height", thickness]);
}});

Clazz.newMeth(C$, 'scrollByBlock$I$I',  function (direction, val0) {
var sb=this.jc;
var delta=p$1.getBlockIncrement.apply(this, []);
if (delta == -2147483648 && direction > 0 ) return;
delta*=(direction > 0 ? 1 : -1);
this.setValue$I(sb.getValue$() + delta);
});

Clazz.newMeth(C$, 'getBlockIncrement',  function () {
var sb=this.jc;
if (this.myScrollPaneUI == null ) return sb.getBlockIncrement$();
return sb.getVisibleAmount$();
}, p$1);

Clazz.newMeth(C$, 'scrollByUnit$I',  function (direction) {
var sb=this.jc;
var delta=sb.getUnitIncrement$();
if (delta == -2147483648 && direction > 0 ) return;
delta*=(direction > 0 ? 1 : -1);
this.setValue$I(sb.getValue$() + delta);
});

Clazz.newMeth(C$, 'getUnitIncrement$',  function () {
var sb=this.jc;
return sb.getUnitIncrement$();
});

Clazz.newMeth(C$, 'scrollDueToClickInTrack$I$I',  function (dir, val) {
this.scrollByBlock$I(dir);
});

Clazz.newMeth(C$, 'setOverflow$',  function () {
if (this.myScrollPaneUI != null  && this.myScrollPaneUI.scrollBarUIDisabled ) $I$(3).setStyle(this.domNode, "display", "none");
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

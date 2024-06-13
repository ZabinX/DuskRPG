(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.jquery.JQueryUI','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.awt.Color','javax.swing.LookAndFeel','swingjs.plaf.JSGraphicsUtils','java.awt.Rectangle','javax.swing.plaf.InsetsUIResource','java.awt.Dimension','sun.swing.DefaultLookup']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSSliderUI", null, 'swingjs.plaf.JSLightweightUI', ['java.beans.PropertyChangeListener', 'javax.swing.event.ChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.z0=-2147483648;
this.paintTrack=true;
this.foreColor=null;
this.focusInsets=null;
this.insetCache=null;
this.leftToRightCache=true;
this.focusRect=null;
this.contentRect=null;
this.labelRect=null;
this.tickRect=null;
this.trackRect=null;
this.thumbRect=null;
this.trackBuffer=0;
},1);

C$.$fields$=[['Z',['paintTicks','paintLabels','snapToTicks','paintTrack','isScrollBar','isHoriz','isVerticalScrollBar','isInverted','noSnapping','sliderDisposed','leftToRightCache'],'I',['min','max','jsval','majorSpacing','minorSpacing','z0','disabled','myHeight','lastValue','margin','length','trackBuffer'],'S',['orientation','foreColor'],'O',['slider','javax.swing.JSlider','jqSlider','swingjs.api.js.DOMNode','model','javax.swing.BoundedRangeModel','myScrollPaneUI','swingjs.plaf.JSScrollPaneUI','jScrollBar','javax.swing.JScrollBar','sliderTrack','swingjs.api.js.DOMNode','+sliderHandle','ticks','int[]','focusInsets','java.awt.Insets','+insetCache','focusRect','java.awt.Rectangle','+contentRect','+labelRect','+tickRect','+trackRect','+thumbRect']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.needPreferred=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
p$1.setSliderFields.apply(this, []);
this.min=this.slider.getMinimum$();
this.max=this.slider.getMaximum$();
this.jsval=this.slider.getValue$();
if (!this.isScrollBar) {
this.minorSpacing=this.slider.getMinorTickSpacing$();
this.majorSpacing=this.slider.getMajorTickSpacing$();
this.paintTicks=(this.majorSpacing > 0 && this.slider.getPaintTicks$() );
this.paintLabels=this.slider.getPaintLabels$();
this.paintTrack=this.slider.getPaintTrack$();
this.snapToTicks=(this.majorSpacing > 0 && this.slider.getSnapToTicks$() );
}this.orientation=(this.slider.getOrientation$() == 1 ? "vertical" : "horizontal");
this.model=this.slider.getModel$();
var isHoriz=(this.slider.getOrientation$() == 0);
var isVerticalScrollBar=(this.isScrollBar && !isHoriz );
var isInverted=isVerticalScrollBar || !this.isScrollBar && this.slider.getInverted$()  ;
var isChanged=this.sliderDisposed;
if (isHoriz != this.isHoriz  || isVerticalScrollBar != this.isVerticalScrollBar   || isInverted != this.isInverted  ) {
this.isHoriz=isHoriz;
this.isVerticalScrollBar=isVerticalScrollBar;
this.isInverted=isInverted;
isChanged=true;
}if (!this.isScrollBar && this.recalculateIfInsetsChanged$Z(this.recalculateIfOrientationChanged$Z(false)) ) isChanged=true;
var isNew=(this.domNode == null );
if (isNew) {
this.domNode=$I$(2,"wrap$S$S$swingjs_api_js_DOMNodeA",["div", this.id + "_wrap", Clazz.array($I$(3), -1, [this.jqSlider=$I$(3).createElement("div", this.id)])]);
this.setJQuerySliderAndEvents$();
this.setTainted$();
} else if (isChanged) {
p$1.disposeSlider.apply(this, []);
this.domNode.appendChild(this.jqSlider=$I$(3,"createElement",["div", this.id + (++$I$(2).incr)]));
this.setJQuerySliderAndEvents$();
this.setTainted$();
this.setInnerComponentBounds$I$I(this.jc.getWidth$(), this.jc.getHeight$());
}p$1.setup$Z.apply(this, [isNew || isChanged ]);
this.setSlider$();
this.setBackground$java_awt_Color(this.getBackground$());
this.setForeground$java_awt_Color(this.getForeground$());
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (c) {
if (!this.paintTicks && !this.paintLabels ) return;
if (this.awtPeerFG != null  && !this.awtPeerFG.equals$O(c) ) this.awtPeerFG=null;
if (c == null  || Clazz.instanceOf(c, "javax.swing.plaf.UIResource") ) c=$I$(4).black;
var s=$I$(2).toCSSString$java_awt_Color(c);
if (this.foreColor == s) return;
this.foreColor=s;
if (this.paintTicks) {
$I$(3).setStyle(this.jqSlider, "background-color", s);
var tickClass="ui-j2sslider-tick-mark-" + (this.isHoriz ? "vert" : "horiz");
this.$$O(this.domNode).find("." + tickClass).css(1?{backgroundColor:s} :"", "");
}if (this.paintLabels) {
this.$$O(this.domNode).find("SPAN").css("color", s);
}});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
if (this.awtPeerBG != null  && !this.awtPeerBG.equals$O(c) ) this.awtPeerBG=null;
if (this.isScrollBar ? c != null  : this.jc.isOpaque$()) {
if (this.paintTicks) {
} else {
var node=(this.myScrollPaneUI == null  && !this.paintTicks  ? this.jqSlider : this.sliderTrack);
if (this.isScrollBar) $I$(3,"setStyle",[node, "background-color", $I$(2).toCSSString$java_awt_Color(c)]);
if (this.isScrollBar && ($I$(4).WHITE.equals$O(c) || c.getRGB$() == (-1118482) ) ) $I$(3).setStyle(this.sliderHandle, "background", "#ccc");
}}if (!this.isScrollBar) this.setBackgroundDOM$swingjs_api_js_DOMNode$java_awt_Color(this.outerNode, this.jc.isOpaque$() && !this.slider.秘paintsSelf$()  ? this.getBackground$() : null);
});

Clazz.newMeth(C$, 'paintBackground$swingjs_JSGraphics2D',  function (g) {
if (!this.isScrollBar) C$.superclazz.prototype.paintBackground$swingjs_JSGraphics2D.apply(this, [g]);
});

Clazz.newMeth(C$, 'setBackgroundImpl$java_awt_Color',  function (color) {
this.setBackground$java_awt_Color(color);
});

Clazz.newMeth(C$, 'disposeSlider',  function () {
if (p$1.sliderInitialized.apply(this, [])) {
var slider=this.$$O(this.jqSlider);

slider.j2sslider("destroy");
}$I$(3).dispose(this.jqSlider);
}, p$1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
p$1.setSliderFields.apply(this, []);
$I$(5).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Slider.background", "Slider.foreground", "Slider.font");
this.insetCache=this.slider.getInsets$();
this.leftToRightCache=$I$(6).isLeftToRight$java_awt_Component(this.slider);
this.focusRect=Clazz.new_($I$(7,1));
this.contentRect=Clazz.new_($I$(7,1));
this.labelRect=Clazz.new_($I$(7,1));
this.tickRect=Clazz.new_($I$(7,1));
this.trackRect=Clazz.new_($I$(7,1));
this.thumbRect=Clazz.new_($I$(7,1));
this.lastValue=this.slider.getValue$();
this.focusInsets=Clazz.new_($I$(8,1).c$$I$I$I$I,[2, 2, 2, 2]);
});

Clazz.newMeth(C$, 'setSliderFields',  function () {
this.slider=this.jc;
if (this.isScrollBar) this.jScrollBar=this.jc;
}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
this.sliderDisposed=true;
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'setJQuerySliderAndEvents$',  function () {
this.$$O(this.domNode).addClass("swingjs");
this.$$O(this.domNode).addClass("ui-j2sslider-wrap");
var slider=this.$$O(this.jqSlider);
{
var me = this;
slider.j2sslider( { orientation: me.orientation, jslider: me.c, isScrollBar: me.isScrollBar, range: false, min: me.min, max: me.max, value: me.val, disabled: me.disabled, inverted: me.isInverted, change: function(jqevent, handle) { me.jqueryCallback$O$O(jqevent, handle); }, slide: function(jqevent, handle) { me.jqueryCallback$O$O(jqevent, handle); }, start: function(jqevent, handle) { me.jqueryStart$O$O(jqevent, handle); }, stop: function(jqevent, handle) { me.jqueryStop$O$O(jqevent, handle); } });
}
});

Clazz.newMeth(C$, 'jqueryStart$O$O',  function (event, ui) {
this.setValueIsAdjusting$Z(true);
});

Clazz.newMeth(C$, 'jqueryStop$O$O',  function (event, ui) {
this.setValueIsAdjusting$Z(false);
if (this.isScrollBar || this.slider.getSnapToTicks$() ) this.jqueryCallback$O$O(event, ui);
});

Clazz.newMeth(C$, 'setValueIsAdjusting$Z',  function (b) {
this.slider.setValueIsAdjusting$Z(b);
});

Clazz.newMeth(C$, 'jqueryCallback$O$O',  function (event, obj) {
this.jsval=Math.round(obj.value ||0);
var ok=(this.noSnapping || !this.slider.getSnapToValue$() || this.slider.getValueIsAdjusting$()  );
var setVal=(ok ? this.jsval : p$1.snapTo$I.apply(this, [this.jsval]));
this.setValue$I(setVal);
});

Clazz.newMeth(C$, 'setValue$I',  function (val) {
if (val == this.slider.getValue$()) return;
this.slider.setValue$I(val);
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
C$.superclazz.prototype.setEnabled$Z.apply(this, [b]);
this.setSliderAttr$S$F("disabled", (this.disabled=(b ? 0 : 1)));
});

Clazz.newMeth(C$, 'setup$Z',  function (isNew) {
this.sliderTrack=$I$(3).lastChild(this.domNode);
this.sliderHandle=$I$(3).firstChild(this.sliderTrack);
if (isNew) {
this.ignoreAllMouseEvents$swingjs_api_js_DOMNode(this.sliderHandle);
this.ignoreAllMouseEvents$swingjs_api_js_DOMNode(this.sliderTrack);
this.setDataComponent$swingjs_api_js_DOMNode(this.domNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.sliderHandle);
}this.sliderDisposed=false;
}, p$1);

Clazz.newMeth(C$, 'setSliderAttr$S$F',  function (key, val) {
if (p$1.sliderInitialized.apply(this, [])) {
try {
var id=null;
var jsslider=this.$$O(this.jqSlider);

id = this.jqSlider.id; jsslider.j2sslider("option",key,val);
} catch (t) {
}
this.noSnapping=this.isScrollBar;
} else {
this.noSnapping=true;
}});

Clazz.newMeth(C$, 'sliderInitialized',  function () {
return (this.jqSlider != null  && $I$(2).jquery.data(this.jqSlider, "ui-j2sslider") != null  );
}, p$1);

Clazz.newMeth(C$, 'setSlider$',  function () {
this.setSliderAttr$S$F("min", this.min);
var max=this.max;
this.setSliderAttr$S$F("max", max);
this.setSliderAttr$S$F("value", this.jsval);
this.myHeight=10;
var barPlace=40;
if (this.isHoriz && this.slider.getBorder$() != null  ) barPlace+=10;
var tickClass="ui-j2sslider-tick-mark" + (this.isHoriz ? "-vert" : "-horiz");
this.$$O(this.domNode).find("." + tickClass).remove();
this.$$O(this.domNode).find(".jslider-label").remove();
this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.jqSlider, false);
if ((this.majorSpacing == 0 && this.minorSpacing == 0  || !this.paintTicks ) && !this.paintLabels ) {
if (this.myScrollPaneUI != null ) {
$I$(3).setStyle(this.sliderHandle, "transform", null);
$I$(3).setStyle(this.sliderTrack, "transform", null);
} else if (this.isHoriz) {
$I$(3,"setStyles",[this.sliderHandle, ["top", "50%", "transform", "translateY(-50%)"]]);
$I$(3,"setStyles",[this.sliderTrack, ["top", "50%", "transform", "translateY(-50%)"]]);
} else {
$I$(3,"setStyles",[this.sliderHandle, ["left", "50%", "transform", "translateX(-50%)"]]);
$I$(3,"setStyles",[this.sliderTrack, ["left", "50%", "transform", "translateX(-50%)"]]);
}return;
}this.margin=10;
this.length=(this.isHoriz ? this.slider.getWidth$() : this.slider.getHeight$());
if (this.length <= 0) this.length=(this.isHoriz ? this.getPreferredHorizontalSize$().width : this.getPreferredVerticalSize$().height);
if (this.isHoriz) this.actualWidth=this.length;
 else this.actualHeight=this.length;
this.length-=2 * this.margin;
if (this.paintTicks) {
if (this.minorSpacing == 0) this.minorSpacing=this.majorSpacing;
var check=(this.majorSpacing/this.minorSpacing|0);
var fracSpacing=this.minorSpacing * 1.0 / (max - this.min);
var numTicks=(((max - this.min)/this.minorSpacing|0)) + 1;
this.myHeight+=10;
this.ticks=Clazz.array(Integer.TYPE, [numTicks]);
for (var i=0; i < numTicks; i++) {
var node=$I$(3).createElement("div", this.id + "_t" + i );
this.$$O(node).addClass("swingjs");
this.$$O(node).addClass(tickClass);
var isMajor=(i % check == 0);
this.ticks[i]=this.minorSpacing * i + this.min;
var frac=(this.isHoriz == this.isInverted  ? 1 - fracSpacing * i : fracSpacing * i);
var spt=(new Float(frac * this.length + this.margin).toString()) + "px";
if (isMajor) this.$$O(node).css(this.isHoriz ? "height" : "width", "8px");
this.$$O(node).css(this.isHoriz ? "left" : "top", spt);
this.domNode.insertBefore(node, this.sliderTrack);
}
if (!this.paintLabels) this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.domNode, false);
}var labelTable=this.slider.getLabelTable$();
if (this.paintLabels && labelTable != null  ) {
this.myHeight+=20;
p$1.paintLabels$java_util_Dictionary$Z.apply(this, [labelTable, true]);
}if (this.paintTicks) {
if (this.isHoriz) {
$I$(3,"setStyles",[this.sliderHandle, ["transform", "scaleX(0.5) rotateZ(45deg)", "top", "-8px"]]);
$I$(3).setStyles(this.sliderTrack, ["height", "1px", "background", "black", "top", "12px", "border", "none"]);
this.setSliderAttr$S$F("scaleX", 0.5);
} else {
$I$(3,"setStyles",[this.sliderHandle, ["transform", "scaleY(0.5) rotateZ(45deg)", "left", "-10px", "margin-bottom", "-7px"]]);
$I$(3).setStyles(this.sliderTrack, ["width", "1px", "left", "12px", "background", "black", "border", "none"]);
this.setSliderAttr$S$F("scaleY", 0.5);
}} else {
if (this.isHoriz && this.paintLabels ) barPlace=30;
$I$(3).setStyles(this.sliderTrack, [this.isHoriz ? "top" : "left", barPlace + "%"]);
$I$(3,"setStyles",[this.sliderHandle, [this.isHoriz ? "top" : "left", "50%", "transform", "translateY(-50%)"]]);
}if (this.isScrollBar) {
this.setScrollBarExtentAndCSS$();
} else {
if (!this.isHoriz) $I$(3).setStyle(this.sliderTrack, "height", this.length + "px");
}this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.domNode, false);
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z',  function (obj, addCSS) {
var d=20;
if (this.paintLabels) d+=10;
if (this.paintTicks) d+=10;
if (this.slider.getBorder$() != null ) d+=10;
return Clazz.new_([(this.isHoriz ? this.actualWidth : d), (this.isHoriz ? d : this.actualHeight)],$I$(9,1).c$$I$I);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var propertyName=e.getPropertyName$();
switch (propertyName) {
case "labelTable":
this.calculateGeometry$();
this.setTainted$();
break;
case "orientation":
case "inverted":
case "majorTickSpacing":
case "minorTickSpacing":
case "paintTicks":
case "paintTrack":
case "font":
case "paintLabels":
case "Slider.paintThumbArrowShape":
this.calculateGeometry$();
this.setTainted$();
break;
case "componentOrientation":
this.calculateGeometry$();
this.setTainted$();
break;
case "model":
(e.getOldValue$()).removeChangeListener$javax_swing_event_ChangeListener(this);
(e.getNewValue$()).addChangeListener$javax_swing_event_ChangeListener(this);
this.setTainted$();
break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var v;
if ((v=this.slider.getMinimum$()) != this.min) this.setSliderAttr$S$F("min", this.min=v);
if ((v=this.slider.getMaximum$()) != this.max) this.setSliderAttr$S$F("max", this.max=v);
if ((v=this.slider.getValue$()) != this.jsval) {
this.setSliderAttr$S$F("value", this.jsval=v);
}p$1.setup$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'setScrollBarExtentAndCSS$',  function () {
});

Clazz.newMeth(C$, 'getMinimumHorizontalSize',  function () {
var horizDim=$I$(10).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.minimumHorizontalSize");
if (horizDim == null ) {
horizDim=Clazz.new_($I$(9,1).c$$I$I,[36, this.paintLabels ? 35 : 21]);
}return horizDim;
}, p$1);

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (c) {
if (this.isScrollBar) return C$.superclazz.prototype.getMinimumSize$javax_swing_JComponent.apply(this, [c]);
this.recalculateIfInsetsChanged$Z(false);
var d;
if (this.slider.getOrientation$() == 1) {
d=Clazz.new_([p$1.getMinimumVerticalSize.apply(this, [])],$I$(9,1).c$$java_awt_Dimension);
d.width=this.insetCache.left + this.insetCache.right;
d.width+=this.focusInsets.left + this.focusInsets.right;
d.width+=this.trackRect.width + this.tickRect.width + this.labelRect.width ;
} else {
d=Clazz.new_([p$1.getMinimumHorizontalSize.apply(this, [])],$I$(9,1).c$$java_awt_Dimension);
d.height=this.insetCache.top + this.insetCache.bottom;
d.height+=this.focusInsets.top + this.focusInsets.bottom;
d.height+=this.trackRect.height + this.tickRect.height + this.labelRect.height ;
}return d;
});

Clazz.newMeth(C$, 'recalculateIfInsetsChanged$Z',  function (doForce) {
var newInsets=this.slider.getInsets$();
if (doForce || !newInsets.equals$O(this.insetCache) ) {
this.insetCache=newInsets;
this.calculateGeometry$();
return true;
}return false;
});

Clazz.newMeth(C$, 'recalculateIfOrientationChanged$Z',  function (doit) {
var ltr=$I$(6).isLeftToRight$java_awt_Component(this.slider);
if (ltr == this.leftToRightCache ) return false;
this.leftToRightCache=ltr;
if (doit) this.calculateGeometry$();
return true;
});

Clazz.newMeth(C$, 'calculateGeometry$',  function () {
if (this.isScrollBar) return;
this.calculateFocusRect$();
this.calculateContentRect$();
this.calculateThumbSize$();
this.calculateTrackBuffer$();
this.calculateTrackRect$();
this.calculateTickRect$();
this.calculateLabelRect$();
});

Clazz.newMeth(C$, 'calculateTickRect$',  function () {
if (this.slider.getOrientation$() == 0) {
this.tickRect.x=this.trackRect.x;
this.tickRect.y=this.trackRect.y + this.trackRect.height;
this.tickRect.width=this.trackRect.width;
this.tickRect.height=(this.slider.getPaintTicks$()) ? this.getTickLength$() : 0;
} else {
this.tickRect.width=(this.slider.getPaintTicks$()) ? this.getTickLength$() : 0;
if ($I$(6).isLeftToRight$java_awt_Component(this.slider)) {
this.tickRect.x=this.trackRect.x + this.trackRect.width;
} else {
this.tickRect.x=this.trackRect.x - this.tickRect.width;
}this.tickRect.y=this.trackRect.y;
this.tickRect.height=this.trackRect.height;
}});

Clazz.newMeth(C$, 'calculateTrackBuffer$',  function () {
if (this.slider.getPaintLabels$() && this.slider.getLabelTable$() != null  ) {
var highLabel=this.getHighestValueLabel$();
var lowLabel=this.getLowestValueLabel$();
if (this.slider.getOrientation$() == 0) {
this.trackBuffer=(Math.max(highLabel.getBounds$().width, lowLabel.getBounds$().width)/2|0);
this.trackBuffer=Math.max(this.trackBuffer, (this.thumbRect.width/2|0));
} else {
this.trackBuffer=(Math.max(highLabel.getBounds$().height, lowLabel.getBounds$().height)/2|0);
this.trackBuffer=Math.max(this.trackBuffer, (this.thumbRect.height/2|0));
}} else {
if (this.slider.getOrientation$() == 0) {
this.trackBuffer=(this.thumbRect.width/2|0);
} else {
this.trackBuffer=(this.thumbRect.height/2|0);
}}});

Clazz.newMeth(C$, 'calculateTrackRect$',  function () {
var centerSpacing;
if (this.slider.getOrientation$() == 0) {
centerSpacing=this.thumbRect.height;
if (this.slider.getPaintTicks$()) centerSpacing+=this.getTickLength$();
if (this.slider.getPaintLabels$()) centerSpacing+=this.getHeightOfTallestLabel$();
this.trackRect.x=this.contentRect.x + this.trackBuffer;
this.trackRect.y=this.contentRect.y + ((this.contentRect.height - centerSpacing - 1 )/2|0);
this.trackRect.width=this.contentRect.width - (this.trackBuffer * 2);
this.trackRect.height=this.thumbRect.height;
} else {
centerSpacing=this.thumbRect.width;
if ($I$(6).isLeftToRight$java_awt_Component(this.slider)) {
if (this.slider.getPaintTicks$()) centerSpacing+=this.getTickLength$();
if (this.slider.getPaintLabels$()) centerSpacing+=this.getWidthOfWidestLabel$();
} else {
if (this.slider.getPaintTicks$()) centerSpacing-=this.getTickLength$();
if (this.slider.getPaintLabels$()) centerSpacing-=this.getWidthOfWidestLabel$();
}this.trackRect.x=this.contentRect.x + ((this.contentRect.width - centerSpacing - 1 )/2|0);
this.trackRect.y=this.contentRect.y + this.trackBuffer;
this.trackRect.width=this.thumbRect.width;
this.trackRect.height=this.contentRect.height - (this.trackBuffer * 2);
}});

Clazz.newMeth(C$, 'getTickLength$',  function () {
return 8;
});

Clazz.newMeth(C$, 'calculateLabelRect$',  function () {
if (this.slider.getPaintLabels$()) {
if (this.slider.getOrientation$() == 0) {
this.labelRect.x=this.tickRect.x - this.trackBuffer;
this.labelRect.y=this.tickRect.y + this.tickRect.height;
this.labelRect.width=this.tickRect.width + (this.trackBuffer * 2);
this.labelRect.height=this.getHeightOfTallestLabel$();
} else {
if ($I$(6).isLeftToRight$java_awt_Component(this.slider)) {
this.labelRect.x=this.tickRect.x + this.tickRect.width;
this.labelRect.width=this.getWidthOfWidestLabel$();
} else {
this.labelRect.width=this.getWidthOfWidestLabel$();
this.labelRect.x=this.tickRect.x - this.labelRect.width;
}this.labelRect.y=this.tickRect.y - this.trackBuffer;
this.labelRect.height=this.tickRect.height + (this.trackBuffer * 2);
}} else {
if (this.slider.getOrientation$() == 0) {
this.labelRect.x=this.tickRect.x;
this.labelRect.y=this.tickRect.y + this.tickRect.height;
this.labelRect.width=this.tickRect.width;
this.labelRect.height=0;
} else {
if ($I$(6).isLeftToRight$java_awt_Component(this.slider)) {
this.labelRect.x=this.tickRect.x + this.tickRect.width;
} else {
this.labelRect.x=this.tickRect.x;
}this.labelRect.y=this.tickRect.y;
this.labelRect.width=0;
this.labelRect.height=this.tickRect.height;
}}});

Clazz.newMeth(C$, 'getWidthOfWidestLabel$',  function () {
var dictionary=this.slider.getLabelTable$();
var widest=0;
if (dictionary != null ) {
var keys=dictionary.keys$();
while (keys.hasMoreElements$()){
var label=dictionary.get$O(keys.nextElement$());
widest=Math.max(label.getPreferredSize$().width, widest);
label.秘getUI$().imagePersists=true;
}
}return widest;
});

Clazz.newMeth(C$, 'getHeightOfTallestLabel$',  function () {
var dictionary=this.slider.getLabelTable$();
var tallest=0;
if (dictionary != null ) {
var keys=dictionary.keys$();
while (keys.hasMoreElements$()){
var label=dictionary.get$O(keys.nextElement$());
tallest=Math.max(label.getPreferredSize$().height, tallest);
}
}return tallest;
});

Clazz.newMeth(C$, 'getHighestValue$',  function () {
var dictionary=this.slider.getLabelTable$();
if (dictionary == null ) {
return null;
}var keys=dictionary.keys$();
var max=null;
while (keys.hasMoreElements$()){
var i=keys.nextElement$();
if (max == null  || (i).$c() > (max).$c()  ) {
max=i;
}}
return max;
});

Clazz.newMeth(C$, 'getLowestValue$',  function () {
var dictionary=this.slider.getLabelTable$();
if (dictionary == null ) {
return null;
}var keys=dictionary.keys$();
var min=null;
while (keys.hasMoreElements$()){
var i=keys.nextElement$();
if (min == null  || (i).$c() < (min).$c()  ) {
min=i;
}}
return min;
});

Clazz.newMeth(C$, 'getWidthOfHighValueLabel$',  function () {
var label=this.getHighestValueLabel$();
var width=0;
if (label != null ) {
width=label.getPreferredSize$().width;
}return width;
});

Clazz.newMeth(C$, 'getWidthOfLowValueLabel$',  function () {
var label=this.getLowestValueLabel$();
var width=0;
if (label != null ) {
width=label.getPreferredSize$().width;
}return width;
});

Clazz.newMeth(C$, 'getHeightOfHighValueLabel$',  function () {
var label=this.getHighestValueLabel$();
var height=0;
if (label != null ) {
height=label.getPreferredSize$().height;
}return height;
});

Clazz.newMeth(C$, 'getHeightOfLowValueLabel$',  function () {
var label=this.getLowestValueLabel$();
var height=0;
if (label != null ) {
height=label.getPreferredSize$().height;
}return height;
});

Clazz.newMeth(C$, 'getLowestValueLabel$',  function () {
var min=this.getLowestValue$();
if (min != null ) {
return this.slider.getLabelTable$().get$O(min);
}return null;
});

Clazz.newMeth(C$, 'getHighestValueLabel$',  function () {
var max=this.getHighestValue$();
if (max != null ) {
return this.slider.getLabelTable$().get$O(max);
}return null;
});

Clazz.newMeth(C$, 'getThumbSize$',  function () {
var size=Clazz.new_($I$(9,1));
if (this.slider.getOrientation$() == 1) {
size.width=20;
size.height=11;
} else {
size.width=11;
size.height=20;
}return size;
});

Clazz.newMeth(C$, 'calculateFocusRect$',  function () {
this.focusRect.x=this.insetCache.left;
this.focusRect.y=this.insetCache.top;
this.focusRect.width=this.slider.getWidth$() - (this.insetCache.left + this.insetCache.right);
this.focusRect.height=this.slider.getHeight$() - (this.insetCache.top + this.insetCache.bottom);
});

Clazz.newMeth(C$, 'calculateThumbSize$',  function () {
var size=this.getThumbSize$();
this.thumbRect.setSize$I$I(size.width, size.height);
});

Clazz.newMeth(C$, 'calculateContentRect$',  function () {
this.contentRect.x=this.focusRect.x + this.focusInsets.left;
this.contentRect.y=this.focusRect.y + this.focusInsets.top;
this.contentRect.width=this.focusRect.width - (this.focusInsets.left + this.focusInsets.right);
this.contentRect.height=this.focusRect.height - (this.focusInsets.top + this.focusInsets.bottom);
});

Clazz.newMeth(C$, 'getMinimumVerticalSize',  function () {
var vertDim=$I$(10).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.minimumVerticalSize");
if (vertDim == null ) {
vertDim=Clazz.new_($I$(9,1).c$$I$I,[this.paintLabels ? 35 : 21, 36]);
}return vertDim;
}, p$1);

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
if (this.isScrollBar) return C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [jc]);
this.recalculateIfInsetsChanged$Z(false);
var d;
if (this.slider.getOrientation$() == 1) {
d=Clazz.new_([this.getPreferredVerticalSize$()],$I$(9,1).c$$java_awt_Dimension);
d.width=this.insetCache.left + this.insetCache.right;
d.width+=this.focusInsets.left + this.focusInsets.right;
d.width+=this.trackRect.width + this.tickRect.width + this.labelRect.width ;
} else {
d=Clazz.new_([this.getPreferredHorizontalSize$()],$I$(9,1).c$$java_awt_Dimension);
d.height=this.insetCache.top + this.insetCache.bottom;
d.height+=this.focusInsets.top + this.focusInsets.bottom;
d.height+=this.trackRect.height + this.tickRect.height + this.labelRect.height ;
}return d;
});

Clazz.newMeth(C$, 'getPreferredHorizontalSize$',  function () {
var horizDim=$I$(10).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.horizontalSize");
return Clazz.new_([horizDim.width, Math.max(horizDim.height, this.myHeight)],$I$(9,1).c$$I$I);
});

Clazz.newMeth(C$, 'getPreferredVerticalSize$',  function () {
var vertDim=$I$(10).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.slider, this, "Slider.verticalSize");
return Clazz.new_([Math.max(vertDim.width, this.myHeight), vertDim.height],$I$(9,1).c$$I$I);
});

Clazz.newMeth(C$, 'scrollDueToClickInTrack$I$I',  function (dir, val) {
this.scrollByBlock$I$I(dir, val);
});

Clazz.newMeth(C$, 'scrollByBlock$I',  function (direction) {
this.scrollByBlock$I$I(direction, 2147483647);
});

Clazz.newMeth(C$, 'scrollByBlock$I$I',  function (direction, val0) {
var val=0;
var blockIncrement=-1;
if (this.slider.getSnapToTicks$()) {
var jsslider=this.$$O(this.jqSlider);
if (this.slider.getSnapToValue$()) {
val=val0;
} else {
blockIncrement=p$1.getTickSpacing.apply(this, []);
}} else {
blockIncrement=((this.slider.getMaximum$() - this.slider.getMinimum$())/10|0);
if (blockIncrement == 0) {
blockIncrement=1;
}}if (blockIncrement >= 0) val=this.slider.getValue$() + blockIncrement * ((direction > 0) ? 1 : direction == 0 ? 0 : -1);
this.setValue$I(p$1.snapTo$I.apply(this, [val]));
});

Clazz.newMeth(C$, 'snapTo$I',  function (val) {
if (this.ticks != null  && this.ticks.length > 2  && this.slider.getSnapToTicks$() ) {
var dc=2147483647;
var v=val;
for (var i=this.ticks.length; --i >= 0; ) {
var d=Math.abs(this.ticks[i] - val);
if (d < dc) {
dc=d;
v=this.ticks[i];
}}
val=v;
}return val;
}, p$1);

Clazz.newMeth(C$, 'scrollByUnit$I',  function (direction) {
{
var delta=((direction > 0) ? 1 : -1);
if (this.slider.getSnapToTicks$()) {
delta*=p$1.getTickSpacing.apply(this, []);
}this.setValue$I(this.slider.getValue$() + delta);
}});

Clazz.newMeth(C$, 'getUnitIncrement$',  function () {
return -1;
});

Clazz.newMeth(C$, 'getTickSpacing',  function () {
var majorTickSpacing=this.slider.getMajorTickSpacing$();
var minorTickSpacing=this.slider.getMinorTickSpacing$();
var result;
if (minorTickSpacing > 0) {
result=minorTickSpacing;
} else if (majorTickSpacing > 0) {
result=majorTickSpacing;
} else {
result=0;
}return result;
}, p$1);

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I',  function (width, height) {
if (!this.paintTicks && !this.paintLabels ) {
var margin=(this.isScrollBar ? 6 : 10);
if (this.orientation === "vertical" ) {
$I$(3,"setStyle",[this.sliderTrack, "height", (height - margin * 2) + "px"]);
} else if (this.isScrollBar) {
$I$(3,"setStyle",[this.sliderTrack, "width", (width - margin * 2) + "px"]);
}this.setScrollBarExtentAndCSS$();
}});

Clazz.newMeth(C$, 'setJSDimensions$I$I',  function (width, height) {
C$.superclazz.prototype.setJSDimensions$I$I.apply(this, [width, height]);
$I$(3).setPositionAbsolute(this.domNode);
if (this.isHoriz) {
var off=((height - this.myHeight + (this.insetCache.top - this.insetCache.bottom))/2|0);
$I$(3).setStyles(this.domNode, ["top", off + "px", "height", this.myHeight + "px"]);
} else {
$I$(3,"setStyles",[this.domNode, ["left", (this.isScrollBar || true  ? ((width - this.myHeight)/2|0) : this.insetCache.left) + "px", "width", this.myHeight + "px"]]);
}if (!this.isScrollBar) this.setSlider$();
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
var d=(this.isScrollBar ? C$.superclazz.prototype.getMaximumSize$javax_swing_JComponent.apply(this, [jc]) : null);
return (d != null  ? d : this.isHoriz ? Clazz.new_($I$(9,1).c$$I$I,[32767, 40]) : Clazz.new_($I$(9,1).c$$I$I,[40, 32767]));
});

Clazz.newMeth(C$, 'clearPaintPath$',  function () {
if (!this.isScrollBar) this.setBackgroundDOM$swingjs_api_js_DOMNode$java_awt_Color(this.outerNode, null);
C$.superclazz.prototype.clearPaintPath$.apply(this, []);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
var labelTable;
if (!this.isScrollBar && this.paintLabels && (labelTable=this.slider.getLabelTable$()) != null   ) {
p$1.paintLabels$java_util_Dictionary$Z.apply(this, [labelTable, false]);
}C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
});

Clazz.newMeth(C$, 'paintLabels$java_util_Dictionary$Z',  function (labelTable, isNew) {
var keys=labelTable.keys$();
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
var n=Integer.parseInt$S(key.toString());
var label=labelTable.get$O(key);
var lui=label.秘getUI$();
lui.imagePersists=true;
lui.setTainted$();
lui.updateDOMNode$();
var labelNode=lui.getOuterNode$();
var frac=(n - this.min) * 1.0 / (this.max - this.min);
if (this.isHoriz == this.isInverted ) frac=1 - frac;
var px=(frac * this.length + this.margin);
var left;
var top;
if (this.isHoriz) {
top=(this.paintTicks ? 20 : 15);
left=((px - (label.getWidth$()/2|0))|0);
} else {
top=((px - (label.getHeight$()/2|0))|0);
left=(this.paintTicks ? 20 : 15);
}$I$(3).setTopLeftAbsolute(labelNode, top, left);
if (isNew) {
$I$(3).setStyle(labelNode, "overflow", null);
this.addClass$swingjs_api_js_DOMNode$S(labelNode, "jslider-label");
this.domNode.insertBefore(labelNode, this.sliderTrack);
}}
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
$I$(1).loadJQSlider$();
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

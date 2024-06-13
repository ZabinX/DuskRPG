(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.awt.Dimension','javax.swing.LookAndFeel','javax.swing.UIManager',['swingjs.plaf.JSProgressBarUI','.Handler'],['java.awt.Component','.BaselineResizeBehavior'],'sun.swing.DefaultLookup','java.awt.BasicStroke','swingjs.plaf.JSGraphicsUtils','sun.swing.SwingUtilities2','java.awt.geom.AffineTransform','java.awt.Point']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSProgressBarUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI');
C$.$classes$=[['ChangeHandler',1],['Handler',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['cachedPercent','cellLength','cellSpacing'],'O',['barNode','swingjs.api.js.DOMNode','selectionForeground','java.awt.Color','+selectionBackground','progressBar','javax.swing.JProgressBar','changeListener','javax.swing.event.ChangeListener','handler','swingjs.plaf.JSProgressBarUI.Handler']]
,['S',['indeterminateStyle']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isContainer=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
var root=this.jc.getRootPane$();
this.isContentPane=(root != null  && this.jc === root.getContentPane$()  );
this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
this.barNode=$I$(1,"newDOMObject$S$S$SA",["span", this.id + "_bar", Clazz.array(String, -1, [])]);
this.domNode.appendChild(this.barNode);
$I$(2).setStyle(this.barNode, "display", "none");
var barspan=$I$(1,"newDOMObject$S$S$SA",["span", this.id + "_barspan", Clazz.array(String, -1, [])]);
$I$(2).setStyles(barspan, ["width", "100%", "height", "100%"]);
this.barNode.appendChild(barspan);
if (root != null  && root.getGlassPane$() === this.c  ) $I$(2).setVisible(this.domNode, false);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z',  function (obj, addCSS) {
return Clazz.new_([this.c.getWidth$(), this.c.getHeight$()],$I$(3,1).c$$I$I);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.progressBar=c;
this.installDefaults$();
this.installListeners$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallDefaults$();
this.uninstallListeners$();
this.progressBar=null;
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
$I$(4).installProperty$javax_swing_JComponent$S$O(this.progressBar, "opaque", Boolean.TRUE);
$I$(4).installBorder$javax_swing_JComponent$S(this.progressBar, "ProgressBar.border");
$I$(4).installColorsAndFont$javax_swing_JComponent$S$S$S(this.progressBar, "ProgressBar.background", "ProgressBar.foreground", "ProgressBar.font");
this.cellLength=$I$(5).getInt$O("ProgressBar.cellLength");
if (this.cellLength == 0) this.cellLength=1;
this.cellSpacing=$I$(5).getInt$O("ProgressBar.cellSpacing");
this.selectionForeground=$I$(5).getColor$O("ProgressBar.selectionForeground");
this.selectionBackground=$I$(5).getColor$O("ProgressBar.selectionBackground");
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
$I$(4).uninstallBorder$javax_swing_JComponent(this.progressBar);
});

Clazz.newMeth(C$, 'installListeners$',  function () {
this.changeListener=p$1.getHandler.apply(this, []);
this.progressBar.addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
this.progressBar.addPropertyChangeListener$java_beans_PropertyChangeListener(p$1.getHandler.apply(this, []));
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(6,1),[this, null]);
}return this.handler;
}, p$1);

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
this.progressBar.removeChangeListener$javax_swing_event_ChangeListener(this.changeListener);
this.progressBar.removePropertyChangeListener$java_beans_PropertyChangeListener(p$1.getHandler.apply(this, []));
this.handler=null;
});

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I',  function (c, width, height) {
C$.superclazz.prototype.getBaseline$javax_swing_JComponent$I$I.apply(this, [c, width, height]);
if (this.progressBar.isStringPainted$() && this.progressBar.getOrientation$() == 0 ) {
var metrics=this.progressBar.getFontMetrics$java_awt_Font(this.progressBar.getFont$());
var insets=this.progressBar.getInsets$();
var y=insets.top;
height=height - insets.top - insets.bottom ;
return y + ((height + metrics.getAscent$() - metrics.getLeading$() - metrics.getDescent$())/2|0);
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent',  function (c) {
C$.superclazz.prototype.getBaselineResizeBehavior$javax_swing_JComponent.apply(this, [c]);
if (this.progressBar.isStringPainted$() && this.progressBar.getOrientation$() == 0 ) {
return $I$(7).CENTER_OFFSET;
}return $I$(7).OTHER;
});

Clazz.newMeth(C$, 'getPreferredInnerHorizontal$',  function () {
var horizDim=$I$(8).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.progressBar, this, "ProgressBar.horizontalSize");
if (horizDim == null ) {
horizDim=Clazz.new_($I$(3,1).c$$I$I,[146, 12]);
}return horizDim;
});

Clazz.newMeth(C$, 'getPreferredInnerVertical$',  function () {
var vertDim=$I$(8).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.progressBar, this, "ProgressBar.verticalSize");
if (vertDim == null ) {
vertDim=Clazz.new_($I$(3,1).c$$I$I,[12, 146]);
}return vertDim;
});

Clazz.newMeth(C$, 'getSelectionForeground$',  function () {
return this.selectionForeground;
});

Clazz.newMeth(C$, 'getSelectionBackground$',  function () {
return this.selectionBackground;
});

Clazz.newMeth(C$, 'getCachedPercent',  function () {
return this.cachedPercent;
}, p$1);

Clazz.newMeth(C$, 'setCachedPercent$I',  function (cachedPercent) {
this.cachedPercent=cachedPercent;
}, p$1);

Clazz.newMeth(C$, 'getCellLength$',  function () {
if (this.progressBar.isStringPainted$()) {
return 1;
} else {
return this.cellLength;
}});

Clazz.newMeth(C$, 'setCellLength$I',  function (cellLen) {
this.cellLength=cellLen;
});

Clazz.newMeth(C$, 'getCellSpacing$',  function () {
if (this.progressBar.isStringPainted$()) {
return 0;
} else {
return this.cellSpacing;
}});

Clazz.newMeth(C$, 'setCellSpacing$I',  function (cellSpace) {
this.cellSpacing=cellSpace;
});

Clazz.newMeth(C$, 'getAmountFull$java_awt_Insets$I$I',  function (b, width, height) {
var amountFull=0;
var model=this.progressBar.getModel$();
if ((model.getMaximum$() - model.getMinimum$()) != 0) {
if (this.progressBar.getOrientation$() == 0) {
amountFull=Long.$ival(Math.round$D(width * this.progressBar.getPercentComplete$()));
} else {
amountFull=Long.$ival(Math.round$D(height * this.progressBar.getPercentComplete$()));
}}return amountFull;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
if (this.progressBar.isIndeterminate$()) {
this.paintIndeterminate$java_awt_Graphics$javax_swing_JComponent(g, c);
} else {
this.paintDeterminate$java_awt_Graphics$javax_swing_JComponent(g, c);
}});

Clazz.newMeth(C$, 'paintIndeterminate$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
if (C$.indeterminateStyle != null ) {
this.$$O("body").append(C$.indeterminateStyle);
C$.indeterminateStyle=null;
}this.addClass$swingjs_api_js_DOMNode$S(this.barNode, "j2s-progress");
this.paintDeterminate$java_awt_Graphics$javax_swing_JComponent(g, c);
});

Clazz.newMeth(C$, 'paintDeterminate$java_awt_Graphics$javax_swing_JComponent',  function (g, c) {
var b=this.progressBar.getInsets$();
var barRectWidth=this.progressBar.getWidth$() - (b.right + b.left);
var barRectHeight=this.progressBar.getHeight$() - (b.top + b.bottom);
if (barRectWidth <= 0 || barRectHeight <= 0 ) {
return;
}var cellLength=this.getCellLength$();
var cellSpacing=this.getCellSpacing$();
var amountFull=this.getAmountFull$java_awt_Insets$I$I(b, barRectWidth, barRectHeight);
var g2=g;
if (this.progressBar.isIndeterminate$()) {
g2.setColor$java_awt_Color(this.progressBar.getForeground$());
$I$(2).setStyle(this.barNode, "display", "block");
if (this.progressBar.getOrientation$() == 0) {
$I$(2).setSize(this.barNode, barRectWidth, barRectHeight);
$I$(2).setTopLeftAbsolute(this.barNode, b.top, b.left);
} else {
$I$(2).setSize(this.barNode, barRectHeight, barRectWidth);
$I$(2).setTopLeftAbsolute(this.barNode, b.left, b.top);
}} else {
$I$(2).setStyle(this.barNode, "display", "none");
g2.setColor$java_awt_Color(this.progressBar.getBackground$());
g2.fillRect$I$I$I$I(b.left, b.top, barRectWidth, barRectHeight);
g2.setColor$java_awt_Color(this.progressBar.getForeground$());
if (this.progressBar.getOrientation$() == 0) {
if (cellSpacing == 0 && amountFull > 0 ) {
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(9,1).c$$F$I$I,[barRectHeight, 0, 2]));
} else {
g2.setStroke$java_awt_Stroke(Clazz.new_([barRectHeight, 0, 2, 0.0, Clazz.array(Float.TYPE, -1, [cellLength, cellSpacing]), 0.0],$I$(9,1).c$$F$I$I$F$FA$F));
}if ($I$(10).isLeftToRight$java_awt_Component(c)) {
g2.drawLine$I$I$I$I(b.left, ((barRectHeight/2|0)) + b.top, amountFull + b.left, ((barRectHeight/2|0)) + b.top);
} else {
g2.drawLine$I$I$I$I((barRectWidth + b.left), ((barRectHeight/2|0)) + b.top, barRectWidth + b.left - amountFull, ((barRectHeight/2|0)) + b.top);
}} else {
if (cellSpacing == 0 && amountFull > 0 ) {
g2.setStroke$java_awt_Stroke(Clazz.new_($I$(9,1).c$$F$I$I,[barRectWidth, 0, 2]));
} else {
g2.setStroke$java_awt_Stroke(Clazz.new_([barRectWidth, 0, 2, 0.0, Clazz.array(Float.TYPE, -1, [cellLength, cellSpacing]), 0.0],$I$(9,1).c$$F$I$I$F$FA$F));
}g2.drawLine$I$I$I$I((barRectWidth/2|0) + b.left, b.top + barRectHeight, (barRectWidth/2|0) + b.left, b.top + barRectHeight - amountFull);
}}if (this.progressBar.isStringPainted$()) {
this.paintString$java_awt_Graphics$I$I$I$I$I$java_awt_Insets(g, b.left, b.top, barRectWidth, barRectHeight, amountFull, b);
}});

Clazz.newMeth(C$, 'paintString$java_awt_Graphics$I$I$I$I$I$java_awt_Insets',  function (g, x, y, width, height, amountFull, b) {
if (this.progressBar.getOrientation$() == 0) {
if ($I$(10).isLeftToRight$java_awt_Component(this.progressBar)) {
p$1.paintString$java_awt_Graphics$I$I$I$I$I$I$java_awt_Insets.apply(this, [g, x, y, width, height, x, amountFull, b]);
} else {
p$1.paintString$java_awt_Graphics$I$I$I$I$I$I$java_awt_Insets.apply(this, [g, x, y, width, height, x + width - amountFull, amountFull, b]);
}} else {
p$1.paintString$java_awt_Graphics$I$I$I$I$I$I$java_awt_Insets.apply(this, [g, x, y, width, height, y + height - amountFull, amountFull, b]);
}});

Clazz.newMeth(C$, 'paintString$java_awt_Graphics$I$I$I$I$I$I$java_awt_Insets',  function (g, x, y, width, height, fillStart, amountFull, b) {
var g2=g.create$();
var progressString=this.progressBar.getString$();
g2.setFont$java_awt_Font(this.progressBar.getFont$());
var renderLocation=this.getStringPlacement$java_awt_Graphics$S$I$I$I$I(g2, progressString, x, y, width, height);
if (this.progressBar.getOrientation$() == 0) {
g2.setColor$java_awt_Color(this.getSelectionBackground$());
$I$(11).drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I(this.progressBar, g2, progressString, renderLocation.x, renderLocation.y);
g2.setColor$java_awt_Color(this.getSelectionForeground$());
g2.clipRect$I$I$I$I(fillStart, y, amountFull, height);
$I$(11).drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I(this.progressBar, g2, progressString, renderLocation.x, renderLocation.y);
} else {
g2.setColor$java_awt_Color(this.getSelectionBackground$());
var rotate=$I$(12).getRotateInstance$D(1.5707963267948966);
g2.setFont$java_awt_Font(this.progressBar.getFont$().deriveFont$java_awt_geom_AffineTransform(rotate));
renderLocation=this.getStringPlacement$java_awt_Graphics$S$I$I$I$I(g2, progressString, x, y, width, height);
$I$(11).drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I(this.progressBar, g2, progressString, renderLocation.x, renderLocation.y);
g2.setColor$java_awt_Color(this.getSelectionForeground$());
g2.clipRect$I$I$I$I(x, fillStart, width, amountFull);
$I$(11).drawString$javax_swing_JComponent$java_awt_Graphics$S$I$I(this.progressBar, g2, progressString, renderLocation.x, renderLocation.y);
}g2.dispose$();
}, p$1);

Clazz.newMeth(C$, 'getStringPlacement$java_awt_Graphics$S$I$I$I$I',  function (g, progressString, x, y, width, height) {
var fontSizer=$I$(11,"getFontMetrics$javax_swing_JComponent$java_awt_Graphics$java_awt_Font",[this.progressBar, g, this.progressBar.getFont$()]);
var stringWidth=$I$(11).stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(this.progressBar, fontSizer, progressString);
if (this.progressBar.getOrientation$() == 0) {
return Clazz.new_([x + Math.round((width/2|0) - (stringWidth/2|0)), y + (((height + fontSizer.getAscent$() - fontSizer.getLeading$() - fontSizer.getDescent$())/2|0))],$I$(13,1).c$$I$I);
} else {
return Clazz.new_([x + (((width - fontSizer.getAscent$() + fontSizer.getLeading$() + fontSizer.getDescent$())/2|0)), y + Math.round((height/2|0) - (stringWidth/2|0))],$I$(13,1).c$$I$I);
}});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (c) {
var size;
var border=this.progressBar.getInsets$();
var fontSizer=this.progressBar.getFontMetrics$java_awt_Font(this.progressBar.getFont$());
if (this.progressBar.getOrientation$() == 0) {
size=Clazz.new_([this.getPreferredInnerHorizontal$()],$I$(3,1).c$$java_awt_Dimension);
if (this.progressBar.isStringPainted$()) {
var progString=this.progressBar.getString$();
var stringWidth=$I$(11).stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(this.progressBar, fontSizer, progString);
if (stringWidth > size.width) {
size.width=stringWidth;
}var stringHeight=fontSizer.getHeight$() + fontSizer.getDescent$();
if (stringHeight > size.height) {
size.height=stringHeight;
}}} else {
size=Clazz.new_([this.getPreferredInnerVertical$()],$I$(3,1).c$$java_awt_Dimension);
if (this.progressBar.isStringPainted$()) {
var progString=this.progressBar.getString$();
var stringHeight=fontSizer.getHeight$() + fontSizer.getDescent$();
if (stringHeight > size.width) {
size.width=stringHeight;
}var stringWidth=$I$(11).stringWidth$javax_swing_JComponent$java_awt_FontMetrics$S(this.progressBar, fontSizer, progString);
if (stringWidth > size.height) {
size.height=stringWidth;
}}}size.width+=border.left + border.right;
size.height+=border.top + border.bottom;
return size;
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (c) {
var pref=this.getPreferredSize$javax_swing_JComponent(this.progressBar);
if (this.progressBar.getOrientation$() == 0) {
pref.width=10;
} else {
pref.height=10;
}return pref;
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (c) {
var pref=this.getPreferredSize$javax_swing_JComponent(this.progressBar);
if (this.progressBar.getOrientation$() == 0) {
pref.width=32767;
} else {
pref.height=32767;
}return pref;
});

C$.$static$=function(){C$.$static$=0;
C$.indeterminateStyle="<style>.j2s-progress {\n\t\t\tbackground: #555;\n\t\t}\n\t\t.j2s-progress > span {\n\t\t\tdisplay: block;\n\t\t\theight: 100%;\n\t\t\tbackground-color: rgb(43,194,83);\n\t\t\tbackground-image: -webkit-gradient(\n\t\t\t  linear,\n\t\t\t  left bottom,\n\t\t\t  left top,\n\t\t\t  color-stop(0, rgb(43,194,83)),\n\t\t\t  color-stop(1, rgb(84,240,84))\n\t\t\t );\n\t\t\tbackground-image: -moz-linear-gradient(\n\t\t\t  center bottom,\n\t\t\t  rgb(43,194,83) 37%,\n\t\t\t  rgb(84,240,84) 69%\n\t\t\t );\n\t\t}\n\t\t.j2s-progress > span:after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\ttop: 0; left: 0; bottom: 0; right: 0;\n\t\t\tbackground-image:\n\t\t\t   -webkit-gradient(linear, 0 0, 100% 100%,\n\t\t\t      color-stop(.25, rgba(255, 255, 255, .2)),\n\t\t\t      color-stop(.25, transparent), color-stop(.5, transparent),\n\t\t\t      color-stop(.5, rgba(255, 255, 255, .2)),\n\t\t\t      color-stop(.75, rgba(255, 255, 255, .2)),\n\t\t\t      color-stop(.75, transparent), to(transparent)\n\t\t\t   );\n\t\t\tbackground-image:\n\t\t\t\t-moz-linear-gradient(\n\t\t\t\t  -45deg,\n\t\t\t      rgba(255, 255, 255, .2) 25%,\n\t\t\t      transparent 25%,\n\t\t\t      transparent 50%,\n\t\t\t      rgba(255, 255, 255, .2) 50%,\n\t\t\t      rgba(255, 255, 255, .2) 75%,\n\t\t\t      transparent 75%,\n\t\t\t      transparent\n\t\t\t   );\n\t\t\t-webkit-background-size: 50px 50px;\n\t\t\t-moz-background-size: 50px 50px;\n\t\t\tbackground-size: 50px 50px;\n\t\t\t-webkit-animation: move 2s linear infinite;\n\t\t\t-moz-animation: move 2s linear infinite;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t@-webkit-keyframes move {\n\t\t    0% {\n\t\t       background-position: 0 0;\n\t\t    }\n\t\t    100% {\n\t\t       background-position: 50px 50px;\n\t\t    }\n\t\t}\n\n\t\t@-moz-keyframes move {\n\t\t    0% {\n\t\t       background-position: 0 0;\n\t\t    }\n\t\t    100% {\n\t\t       background-position: 50px 50px;\n\t\t    }\n\t\t}\n</style>";
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSProgressBarUI, "ChangeHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
p$1.getHandler.apply(this.b$['swingjs.plaf.JSProgressBarUI'], []).stateChanged$javax_swing_event_ChangeEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSProgressBarUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var model=this.b$['swingjs.plaf.JSProgressBarUI'].progressBar.getModel$();
var newRange=model.getMaximum$() - model.getMinimum$();
var newPercent;
var oldPercent=p$1.getCachedPercent.apply(this.b$['swingjs.plaf.JSProgressBarUI'], []);
if (newRange > 0) {
newPercent=Long.$ival((Long.$div((Long.$mul(100,model.getValue$())),newRange)));
} else {
newPercent=0;
}if (newPercent != oldPercent) {
p$1.setCachedPercent$I.apply(this.b$['swingjs.plaf.JSProgressBarUI'], [newPercent]);
this.b$['swingjs.plaf.JSProgressBarUI'].progressBar.repaint$();
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
this.b$['swingjs.plaf.JSProgressBarUI'].progressBar.repaint$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2

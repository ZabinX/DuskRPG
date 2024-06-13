(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.Hashtable',['javax.swing.JSlider','.JSliderLabelUIResource'],'javax.swing.DefaultBoundedRangeModel',['javax.swing.JSlider','.ModelListener'],'javax.swing.event.ChangeListener','javax.swing.event.ChangeEvent',['javax.swing.JSlider','.JSliderSmartHashtable']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSlider", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', 'javax.swing.SwingConstants');
C$.$classes$=[['ModelListener',2],['JSliderSmartHashtable',0],['JSliderLabelUIResource',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paintTicks=false;
this.paintTrack=true;
this.paintLabels=false;
this.isInverted=false;
this.snapToTicks=false;
this.snapToValue=true;
this.changeListener=this.createChangeListener$();
this.changeEvent=null;
},1);

C$.$fields$=[['Z',['paintTicks','paintTrack','paintLabels','isInverted','snapToTicks','snapToValue'],'I',['majorTickSpacing','minorTickSpacing','orientation'],'O',['sliderModel','javax.swing.BoundedRangeModel','labelTable','java.util.Dictionary','changeListener','javax.swing.event.ChangeListener','changeEvent','javax.swing.event.ChangeEvent']]]

Clazz.newMeth(C$, 'checkOrientation$I',  function (orientation) {
switch (orientation) {
case 1:
case 0:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["orientation must be one of: VERTICAL, HORIZONTAL"]);
}
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I$I$I.apply(this, [0, 0, 100, 50]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (orientation) {
C$.c$$I$I$I$I.apply(this, [orientation, 0, 100, 50]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (min, max) {
C$.c$$I$I$I$I.apply(this, [0, min, max, ((min + max)/2|0)]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (min, max, value) {
C$.c$$I$I$I$I.apply(this, [0, min, max, value]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (orientation, min, max, value) {
Clazz.super_(C$, this);
p$1.checkOrientation$I.apply(this, [orientation]);
this.orientation=orientation;
this.sliderModel=Clazz.new_($I$(3,1).c$$I$I$I$I,[value, 0, min, max]);
this.sliderModel.addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_BoundedRangeModel',  function (brm) {
Clazz.super_(C$, this);
this.orientation=0;
this.setModel$javax_swing_BoundedRangeModel(brm);
this.sliderModel.addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "SliderUI";
});

Clazz.newMeth(C$, 'updateUI$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
this.updateLabelUIs$();
});

Clazz.newMeth(C$, 'createChangeListener$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'addChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'removeChangeListener$javax_swing_event_ChangeListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']), l);
});

Clazz.newMeth(C$, 'getChangeListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']));
});

Clazz.newMeth(C$, 'fireStateChanged$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(5),['stateChanged$javax_swing_event_ChangeEvent']) ) {
if (this.changeEvent == null ) {
this.changeEvent=Clazz.new_($I$(6,1).c$$O,[this]);
}(listeners[i + 1]).stateChanged$javax_swing_event_ChangeEvent(this.changeEvent);
}}
});

Clazz.newMeth(C$, 'getModel$',  function () {
return this.sliderModel;
});

Clazz.newMeth(C$, 'setModel$javax_swing_BoundedRangeModel',  function (newModel) {
var oldModel=this.getModel$();
if (oldModel != null ) {
oldModel.removeChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}this.sliderModel=newModel;
if (newModel != null ) {
newModel.addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}this.firePropertyChange$S$O$O("model", oldModel, this.sliderModel);
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.getModel$().getValue$();
});

Clazz.newMeth(C$, 'setValue$I',  function (n) {
var m=this.getModel$();
var oldValue=m.getValue$();
if (oldValue == n) {
return;
}m.setValue$I(n);
});

Clazz.newMeth(C$, 'getMinimum$',  function () {
return this.getModel$().getMinimum$();
});

Clazz.newMeth(C$, 'setMinimum$I',  function (minimum) {
var oldMin=this.getModel$().getMinimum$();
this.getModel$().setMinimum$I(minimum);
this.firePropertyChange$S$O$O("minimum",  new Integer(oldMin),  new Integer(minimum));
});

Clazz.newMeth(C$, 'getMaximum$',  function () {
return this.getModel$().getMaximum$();
});

Clazz.newMeth(C$, 'setMaximum$I',  function (maximum) {
var oldMax=this.getModel$().getMaximum$();
this.getModel$().setMaximum$I(maximum);
this.firePropertyChange$S$O$O("maximum",  new Integer(oldMax),  new Integer(maximum));
});

Clazz.newMeth(C$, 'getValueIsAdjusting$',  function () {
return this.getModel$().getValueIsAdjusting$();
});

Clazz.newMeth(C$, 'setValueIsAdjusting$Z',  function (b) {
var m=this.getModel$();
m.setValueIsAdjusting$Z(b);
});

Clazz.newMeth(C$, 'getExtent$',  function () {
return this.getModel$().getExtent$();
});

Clazz.newMeth(C$, 'setExtent$I',  function (extent) {
this.getModel$().setExtent$I(extent);
});

Clazz.newMeth(C$, 'getOrientation$',  function () {
return this.orientation;
});

Clazz.newMeth(C$, 'setOrientation$I',  function (orientation) {
p$1.checkOrientation$I.apply(this, [orientation]);
var oldValue=this.orientation;
this.orientation=orientation;
this.firePropertyChange$S$I$I("orientation", oldValue, orientation);
if (orientation != oldValue) {
this.revalidate$();
}});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (font) {
C$.superclazz.prototype.setFont$java_awt_Font.apply(this, [font]);
p$1.updateLabelSizes.apply(this, []);
});

Clazz.newMeth(C$, 'getLabelTable$',  function () {
return this.labelTable;
});

Clazz.newMeth(C$, 'setLabelTable$java_util_Dictionary',  function (labels) {
var oldTable=this.labelTable;
this.labelTable=labels;
this.updateLabelUIs$();
this.firePropertyChange$S$O$O("labelTable", oldTable, this.labelTable);
if (labels !== oldTable ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'updateLabelUIs$',  function () {
if (this.getLabelTable$() == null ) {
return;
}var labels=this.getLabelTable$().keys$();
while (labels.hasMoreElements$()){
var value=this.getLabelTable$().get$O(labels.nextElement$());
if (Clazz.instanceOf(value, "javax.swing.JComponent")) {
var component=value;
component.updateUI$();
component.setSize$java_awt_Dimension(component.getPreferredSize$());
}}
});

Clazz.newMeth(C$, 'updateLabelSizes',  function () {
var labelTable=this.getLabelTable$();
if (labelTable != null ) {
var labels=labelTable.elements$();
while (labels.hasMoreElements$()){
var value=labels.nextElement$();
if (Clazz.instanceOf(value, "javax.swing.JComponent")) {
var component=value;
component.setSize$java_awt_Dimension(component.getPreferredSize$());
}}
}}, p$1);

Clazz.newMeth(C$, 'createStandardLabels$I',  function (increment) {
return this.createStandardLabels$I$I(increment, this.getMinimum$());
});

Clazz.newMeth(C$, 'createStandardLabels$I$I',  function (increment, start) {
if (start > this.getMaximum$() || start < this.getMinimum$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Slider label start point out of range."]);
}if (increment <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Label incremement must be > 0"]);
}var table=Clazz.new_($I$(7,1).c$$I$I,[this, null, increment, start]);
if (this.getLabelTable$() != null  && (Clazz.instanceOf(this.getLabelTable$(), "java.beans.PropertyChangeListener")) ) {
this.removePropertyChangeListener$java_beans_PropertyChangeListener(this.getLabelTable$());
}this.addPropertyChangeListener$java_beans_PropertyChangeListener(table);
return table;
});

Clazz.newMeth(C$, 'getInverted$',  function () {
return this.isInverted;
});

Clazz.newMeth(C$, 'setInverted$Z',  function (b) {
var oldValue=this.isInverted;
this.isInverted=b;
this.firePropertyChange$S$Z$Z("inverted", oldValue, this.isInverted);
if (b != oldValue ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getMajorTickSpacing$',  function () {
return this.majorTickSpacing;
});

Clazz.newMeth(C$, 'setMajorTickSpacing$I',  function (n) {
var oldValue=this.majorTickSpacing;
this.majorTickSpacing=n;
if (this.labelTable == null  && this.getMajorTickSpacing$() > 0  && this.getPaintLabels$() ) {
this.setLabelTable$java_util_Dictionary(this.createStandardLabels$I(this.getMajorTickSpacing$()));
}this.firePropertyChange$S$I$I("majorTickSpacing", oldValue, this.majorTickSpacing);
if (this.majorTickSpacing != oldValue && this.getPaintTicks$() ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getMinorTickSpacing$',  function () {
return this.minorTickSpacing;
});

Clazz.newMeth(C$, 'setMinorTickSpacing$I',  function (n) {
var oldValue=this.minorTickSpacing;
this.minorTickSpacing=n;
this.firePropertyChange$S$I$I("minorTickSpacing", oldValue, this.minorTickSpacing);
if (this.minorTickSpacing != oldValue && this.getPaintTicks$() ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getSnapToTicks$',  function () {
return this.snapToTicks;
});

Clazz.newMeth(C$, 'getSnapToValue$',  function () {
return this.snapToValue;
});

Clazz.newMeth(C$, 'setSnapToTicks$Z',  function (b) {
var oldValue=this.snapToTicks;
this.snapToTicks=b;
this.firePropertyChange$S$Z$Z("snapToTicks", oldValue, this.snapToTicks);
});

Clazz.newMeth(C$, 'setSnapToValue$Z',  function (b) {
var oldValue=this.snapToValue;
this.snapToValue=b;
this.firePropertyChange$S$Z$Z("snapToValue", oldValue, this.snapToValue);
});

Clazz.newMeth(C$, 'getPaintTicks$',  function () {
return this.paintTicks;
});

Clazz.newMeth(C$, 'setPaintTicks$Z',  function (b) {
var oldValue=this.paintTicks;
this.paintTicks=b;
this.firePropertyChange$S$Z$Z("paintTicks", oldValue, this.paintTicks);
if (this.paintTicks != oldValue ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getPaintTrack$',  function () {
return this.paintTrack;
});

Clazz.newMeth(C$, 'setPaintTrack$Z',  function (b) {
var oldValue=this.paintTrack;
this.paintTrack=b;
this.firePropertyChange$S$Z$Z("paintTrack", oldValue, this.paintTrack);
if (this.paintTrack != oldValue ) {
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getPaintLabels$',  function () {
return this.paintLabels;
});

Clazz.newMeth(C$, 'setPaintLabels$Z',  function (b) {
var oldValue=this.paintLabels;
this.paintLabels=b;
if (this.labelTable == null  && this.getMajorTickSpacing$() > 0 ) {
this.setLabelTable$java_util_Dictionary(this.createStandardLabels$I(this.getMajorTickSpacing$()));
}this.firePropertyChange$S$Z$Z("paintLabels", oldValue, this.paintLabels);
if (this.paintLabels != oldValue ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'paramString$',  function () {
var paintTicksString=(this.paintTicks ? "true" : "false");
var paintTrackString=(this.paintTrack ? "true" : "false");
var paintLabelsString=(this.paintLabels ? "true" : "false");
var isInvertedString=(this.isInverted ? "true" : "false");
var snapToTicksString=(this.snapToTicks ? "true" : "false");
var snapToValueString=(this.snapToValue ? "true" : "false");
var orientationString=(this.orientation == 0 ? "HORIZONTAL" : "VERTICAL");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",isInverted=" + isInvertedString + ",majorTickSpacing=" + this.majorTickSpacing + ",minorTickSpacing=" + this.minorTickSpacing + ",orientation=" + orientationString + ",paintLabels=" + paintLabelsString + ",paintTicks=" + paintTicksString + ",paintTrack=" + paintTrackString + ",snapToTicks=" + snapToTicksString + ",snapToValue=" + snapToValueString ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSlider, "ModelListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
this.b$['javax.swing.JSlider'].fireStateChanged$.apply(this.b$['javax.swing.JSlider'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSlider, "JSliderSmartHashtable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.Hashtable', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.increment=0;
this.start=0;
this.startAtMin=false;
},1);

C$.$fields$=[['Z',['startAtMin'],'I',['increment','start']]]

Clazz.newMeth(C$, 'c$$I$I',  function (increment, start) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.increment=increment;
this.start=start;
this.startAtMin=start == this.b$['javax.swing.JSlider'].getMinimum$.apply(this.b$['javax.swing.JSlider'], []);
this.createLabels$();
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("minimum") && this.startAtMin ) {
this.start=this.b$['javax.swing.JSlider'].getMinimum$.apply(this.b$['javax.swing.JSlider'], []);
}if (e.getPropertyName$().equals$O("minimum") || e.getPropertyName$().equals$O("maximum") ) {
var keys=this.b$['javax.swing.JSlider'].getLabelTable$.apply(this.b$['javax.swing.JSlider'], []).keys$();
var key=null;
var hashtable=Clazz.new_($I$(1,1));
while (keys.hasMoreElements$()){
key=keys.nextElement$();
var value=this.b$['javax.swing.JSlider'].getLabelTable$.apply(this.b$['javax.swing.JSlider'], []).get$O(key);
if (!(Clazz.instanceOf(value, "javax.swing.JSlider.JSliderLabelUIResource"))) {
hashtable.put$O$O(key, value);
}}
this.clear$();
this.createLabels$();
keys=hashtable.keys$();
while (keys.hasMoreElements$()){
key=keys.nextElement$();
this.put$O$O(key, hashtable.get$O(key));
}
(e.getSource$()).setLabelTable$java_util_Dictionary(this);
}});

Clazz.newMeth(C$, 'createLabels$',  function () {
for (var labelIndex=this.start; labelIndex <= this.b$['javax.swing.JSlider'].getMaximum$.apply(this.b$['javax.swing.JSlider'], []); labelIndex+=this.increment) {
this.put$O$O("" + (labelIndex), Clazz.new_($I$(2,1).c$$S$I,[this, null, "" + labelIndex, 0]));
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSlider, "JSliderLabelUIResource", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JLabel', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$I',  function (text, alignment) {
;C$.superclazz.c$$S$I.apply(this,[text, alignment]);C$.$init$.apply(this);
this.setName$S("Slider.label");
}, 1);

Clazz.newMeth(C$, 'getFont$',  function () {
var font=C$.superclazz.prototype.getFont$.apply(this, []);
var isUI=Clazz.instanceOf(font, "javax.swing.plaf.UIResource");
if (font != null  && !isUI ) {
return font;
}var f=this.b$['javax.swing.JSlider'].getFont$.apply(this.b$['javax.swing.JSlider'], []);
return (f == null  ? font : f);
});

Clazz.newMeth(C$, 'getForeground$',  function () {
var fg=C$.superclazz.prototype.getForeground$.apply(this, []);
if (fg != null  && !(Clazz.instanceOf(fg, "javax.swing.plaf.UIResource")) ) {
return fg;
}if (!(Clazz.instanceOf(this.b$['javax.swing.JSlider'].getForeground$.apply(this.b$['javax.swing.JSlider'], []), "javax.swing.plaf.UIResource"))) {
return this.b$['javax.swing.JSlider'].getForeground$.apply(this.b$['javax.swing.JSlider'], []);
}return fg;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:58 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
